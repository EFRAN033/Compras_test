// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';

// Importaciones de componentes existentes (rutas raíz o principales)
import MainPage from '../views/MainPage.vue';
import BlogSection from '../views/BlogSection.vue'; // Considera si estos son componentes de ruta o de layout de MainPage
import CaseStudySection from '../views/CaseStudySection.vue';
import CtaSection from '../views/CtaSection.vue';
import DesignSection from '../views/DesignSection.vue';
import FeaturesSection from '../views/FeaturesSection.vue';
import Footer from '../views/Footer.vue';
// import Header from '../views/Header.vue'; // Comentado como ya lo tenías
import HeroSection from '../views/HeroSection.vue';
import PricingSection from '../views/PricingSection.vue';
import StatsSection from '../views/StatsSection.vue';
import TestimonialSection from '../views/TestimonialSection.vue';
import Afiliados from '../views/Afiliados.vue'; 
import chatbot from '../views/chatbot.vue';
import Login from '../views/login.vue'; // Asegúrate de la capitalización correcta si tu archivo es 'Login.vue'
import RegisterAfiliado from '../views/registerafil.vue';
import RegisterProveedor from '../views/registerpro.vue';

// Importación de componentes de detalle y vistas de usuario generales
import ProductDetail from '../components/ProductDetail.vue'; 
import ProfileView from '../views/profile.vue'; // Asegúrate de la capitalización correcta
import SettingsView from '../views/SettingsView.vue';

// ¡IMPORTACIÓN DE LOS COMPONENTES DEL DASHBOARD DEL PROVEEDOR (AHORA EN SUB-CARPETA)!
import DashboardProveedor from '../views/proveedor/DashboardProveedor.vue'; // El layout principal del dashboard
import DashboardOverview from '../views/proveedor/DashboardOverview.vue'; // La vista de resumen
import ProductsManagement from '../views/proveedor/ProductsManagement.vue'; // Gestión de productos
import OrdersManagement from '../views/proveedor/OrdersManagement.vue'; // Gestión de pedidos
import Messages from '../views/proveedor/Messages.vue'; // Sección de mensajes
// Puedes añadir más si creas componentes para "Añadir Producto", "Detalle de Pedido", etc.

// Definición de rutas
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    children: [
      // Nota: Si MainPage.vue ya renderiza estos componentes de forma estática,
      // estas entradas 'children' con 'components' son redundantes aquí.
      // Si MainPage.vue tiene un <router-view> para cargar estos, entonces es correcto.
      { path: '', components: { default: HeroSection, features: FeaturesSection, blog: BlogSection, cases: CaseStudySection, design: DesignSection, pricing: PricingSection, stats: StatsSection, testimonials: TestimonialSection, cta: CtaSection, footer: Footer, chatbot: chatbot } }
    ]
  },
  {
    path: '/afiliados',
    name: 'Afiliados',
    component: Afiliados,
    meta: { requiresAuth: true, role: 'afiliado' } // Asumiendo que solo afiliados pueden ver esto
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideHeader: true } // Oculta el Header en la página de Login
  },
  {
    path: '/registro-afiliado',
    name: 'RegisterAfiliado',
    component: RegisterAfiliado,
    meta: { hideHeader: true }
  },
  {
    path: '/registro-proveedor',
    name: 'RegisterProveedor',
    component: RegisterProveedor,
    meta: { hideHeader: true }
  },
  {
    path: '/detalles/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  // --- RUTAS DE USUARIO GENERALES (Perfil y Configuración) ---
  {
    path: '/perfil',
    name: 'Profile',
    component: ProfileView,
    meta: { requiresAuth: true } // Requiere autenticación
  },
  {
    path: '/configuracion',
    name: 'Settings',
    component: SettingsView,
    meta: { requiresAuth: true } // Requiere autenticación
  },
  // --- RUTAS DEL DASHBOARD DEL PROVEEDOR CON RUTAS ANIDADAS ---
  {
    path: '/dashboard-proveedor',
    name: 'DashboardProveedorLayout', // Nombre para el layout principal del dashboard
    component: DashboardProveedor, // Este es el componente que actúa como layout
    meta: { requiresAuth: true, role: 'proveedor' }, // Protegemos el layout completo del dashboard
    children: [
      {
        path: '', // Ruta vacía, se cargará por defecto en /dashboard-proveedor
        name: 'DashboardOverview',
        component: DashboardOverview,
        meta: { requiresAuth: true, role: 'proveedor' }
      },
      {
        path: 'productos', // URL: /dashboard-proveedor/productos
        name: 'ProductsManagement',
        component: ProductsManagement,
        meta: { requiresAuth: true, role: 'proveedor' }
      },
      {
        path: 'pedidos', // URL: /dashboard-proveedor/pedidos
        name: 'OrdersManagement',
        component: OrdersManagement,
        meta: { requiresAuth: true, role: 'proveedor' }
      },
      {
        path: 'mensajes', // URL: /dashboard-proveedor/mensajes
        name: 'Messages',
        component: Messages,
        meta: { requiresAuth: true, role: 'proveedor' }
      },
      // Ejemplo: Ruta para añadir un nuevo producto
      // {
      //   path: 'productos/nuevo',
      //   name: 'AddProduct',
      //   component: AddProductForm, // Necesitarías crear este componente
      //   meta: { requiresAuth: true, role: 'proveedor' }
      // },
      // Ejemplo: Ruta para el detalle de un pedido específico
      // {
      //   path: 'pedidos/:id',
      //   name: 'OrderDetail',
      //   component: OrderDetail, // Necesitarías crear este componente
      //   props: true, // Para pasar el ID como prop
      //   meta: { requiresAuth: true, role: 'proveedor' }
      // }
    ]
  }
];

// Creación del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // Siempre desplázate al principio de la página para nuevas rutas
      return { top: 0, left: 0, behavior: 'smooth' };
    }
  }
});

// Guardia de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole');

  // Si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Si no está autenticado, redirigir al login
      console.log('Guardia: Usuario no autenticado. Redirigiendo a Login.');
      next({ name: 'Login' }); // Redirigir al login por nombre de ruta
    } else if (to.meta.role && to.meta.role !== userRole) {
      // Si la ruta requiere un rol específico y el usuario no lo tiene
      console.log(`Guardia: Acceso denegado a ${to.path}. Rol requerido: ${to.meta.role}, Rol del usuario: ${userRole}. Redirigiendo a la página principal.`);
      alert('No tienes permisos para acceder a esta página.'); // Notificación al usuario
      next({ name: 'main' }); // Redirige a la página principal por nombre
    } else {
      // Si está autenticado y tiene el rol correcto, continuar
      console.log(`Guardia: Acceso permitido a ${to.path}.`);
      next();
    }
  } else {
    // Para rutas que no requieren autenticación, simplemente continuar
    console.log(`Guardia: Ruta ${to.path} no requiere autenticación. Continuando.`);
    next();
  }
});

export default router;