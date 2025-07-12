// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';

// Importaciones de componentes existentes (rutas raíz o principales)
import MainPage from '../views/MainPage.vue';
import BlogSection from '../views/BlogSection.vue'; 
import CaseStudySection from '../views/CaseStudySection.vue';
import CtaSection from '../views/CtaSection.vue';
import DesignSection from '../views/DesignSection.vue';
import FeaturesSection from '../views/FeaturesSection.vue';
import Footer from '../views/Footer.vue';
import HeroSection from '../views/HeroSection.vue';
import PricingSection from '../views/PricingSection.vue';
import StatsSection from '../views/StatsSection.vue';
import TestimonialSection from '../views/TestimonialSection.vue';
import Afiliados from '../views/Afiliados.vue'; 
import chatbot from '../views/chatbot.vue';
import Login from '../views/login.vue'; 
import RegisterAfiliado from '../views/registerafil.vue';
import RegisterProveedor from '../views/registerpro.vue';

// Importación de componentes de detalle y vistas de usuario generales
// ¡CAMBIO IMPORTANTE AQUÍ! Asegúrate de que ProductDetailPage sea la importación correcta
import ProductDetailPage from '../views/ProductDetailPage.vue'; // Corrected import to ProductDetailPage.vue
import ProfileView from '../views/profile.vue'; 
import SettingsView from '../views/SettingsView.vue';

// ¡IMPORTACIÓN DE LOS COMPONENTES DEL DASHBOARD DEL PROVEEDOR (AHORA EN SUB-CARPETA)!
import DashboardProveedor from '../views/proveedor/DashboardProveedor.vue'; 
import DashboardOverview from '../views/proveedor/DashboardOverview.vue'; 
import ProductsManagement from '../views/proveedor/ProductsManagement.vue'; 
import OrdersManagement from '../views/proveedor/OrdersManagement.vue'; 
import Messages from '../views/proveedor/Messages.vue'; 

// === IMPORTACIÓN DE TU COMPONENTE DE ADMINISTRADOR (AHORA SERÁ EL LOGIN DEL ADMIN) ===
import AdminLoginPanel from '../views/admin/admin.vue'; 

// === NUEVA IMPORTACIÓN: EL COMPONENTE DEL PANEL DE ADMINISTRACIÓN DE PROVEEDORES ===
import AdminProPanel from '../views/admin/admin_pro.vue';


// Definición de rutas
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    children: [
      { path: '', components: { default: HeroSection, features: FeaturesSection, blog: BlogSection, cases: CaseStudySection, design: DesignSection, pricing: PricingSection, stats: StatsSection, testimonials: TestimonialSection, cta: CtaSection, footer: Footer, chatbot: chatbot } }
    ]
  },
  {
    path: '/afiliados',
    name: 'Afiliados',
    component: Afiliados,
    meta: { requiresAuth: true, role: 'afiliado' } 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideHeader: true } 
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
  // ¡NUEVA RUTA AGREGADA PARA LOS DETALLES DEL PRODUCTO!
  {
    path: '/producto/:id', // Changed from /detalles/:id to /producto/:id as per ProductDetailPage.vue and a common pattern
    name: 'ProductDetail',
    component: ProductDetailPage, // Referencia al nuevo componente ProductDetailPage
    props: true // Pasa el parámetro 'id' de la URL como una prop al componente
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: ProfileView,
    meta: { requiresAuth: true } 
  },
  {
    path: '/configuracion',
    name: 'Settings',
    component: SettingsView,
    meta: { requiresAuth: true } 
  },
  {
    path: '/dashboard-proveedor',
    name: 'DashboardProveedorLayout', 
    component: DashboardProveedor, 
    meta: { requiresAuth: true, role: 'proveedor' }, 
    children: [
      { path: '', name: 'DashboardOverview', component: DashboardOverview, meta: { requiresAuth: true, role: 'proveedor' } },
      { path: 'productos', name: 'ProductsManagement', component: ProductsManagement, meta: { requiresAuth: true, role: 'proveedor' } },
      { path: 'pedidos', name: 'OrdersManagement', component: OrdersManagement, meta: { requiresAuth: true, role: 'proveedor' } },
      { path: 'mensajes', name: 'Messages', component: Messages, meta: { requiresAuth: true, role: 'proveedor' } },
    ]
  },
  // === RUTA PARA EL LOGIN DEL ADMINISTRADOR (tu views/admin/admin.vue) ===
  {
    path: '/admin',
    name: 'AdminLoginPanel', 
    component: AdminLoginPanel, 
    meta: { hideHeader: true }
  },
  // === NUEVA RUTA: EL PANEL DE ADMINISTRACIÓN DE PROVEEDORES ===
  {
    path: '/admin_pro',
    name: 'AdminProPanel', 
    component: AdminProPanel, 
    meta: { requiresAuth: true, role: 'admin' } 
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
      console.log('Guardia: Usuario no autenticado. Redirigiendo a Login general.');
      next({ name: 'Login' }); // Redirige al login principal
    } else if (to.meta.role && to.meta.role !== userRole) {
      console.log(`Guardia: Acceso denegado a ${to.path}. Rol requerido: ${to.meta.role}, Rol del usuario: ${userRole}. Redirigiendo a la página principal.`);
      alert('No tienes permisos para acceder a esta página.'); 
      next({ name: 'main' }); 
    } else {
      console.log(`Guardia: Acceso permitido a ${to.path}.`);
      next();
    }
  } else {
    // Para rutas que no requieren autenticación (como /admin ahora), simplemente continuar
    console.log(`Guardia: Ruta ${to.path} no requiere autenticación. Continuando.`);
    next();
  }
});

export default router;