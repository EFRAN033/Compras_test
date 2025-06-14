// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';

// Importaciones de componentes existentes
import MainPage from '../views/MainPage.vue';
import BlogSection from '../views/BlogSection.vue';
import CaseStudySection from '../views/CaseStudySection.vue';
import CtaSection from '../views/CtaSection.vue';
import DesignSection from '../views/DesignSection.vue';
import FeaturesSection from '../views/FeaturesSection.vue';
import Footer from '../views/Footer.vue';
import Header from '../views/Header.vue'; // Aunque AppHeader es un componente de diseño, no una vista de ruta
import HeroSection from '../views/HeroSection.vue';
import PricingSection from '../views/PricingSection.vue';
import StatsSection from '../views/StatsSection.vue';
import TestimonialSection from '../views/TestimonialSection.vue';
import Afileados from '../views/Afiliados.vue';
import chatbot from '../views/chatbot.vue';
import Login from '../views/login.vue';
import RegisterAfiliado from '../views/registerafil.vue';
import RegisterProveedor from '../views/registerpro.vue';

// Importación de componentes de detalle y nuevas vistas
import ProductDetail from '../components/ProductDetail.vue'; // Asegúrate de la ruta correcta aquí
import ProfileView from '../views/profile.vue'; // <-- ¡NUEVA IMPORTACIÓN!
import SettingsView from '../views/SettingsView.vue'; // <-- ¡NUEVA IMPORTACIÓN!

// Definición de rutas
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    children: [
      // Estos son componentes que se montarán dentro de MainPage
      { path: '', components: { default: HeroSection, features: FeaturesSection, blog: BlogSection, cases: CaseStudySection, design: DesignSection, pricing: PricingSection, stats: StatsSection, testimonials: TestimonialSection, cta: CtaSection, footer: Footer, chatbot: chatbot } }
      // Nota: Si quieres que todos estos componentes se muestren secuencialmente
      // en la misma página de inicio, podrías simplemente renderizarlos
      // en MainPage.vue en lugar de definirlos como children sin paths explícitos.
      // Esta configuración actual con `path: ''` y múltiples componentes es inusual
      // para `children`. Normalmente, `children` tiene sus propios `path` relativos.
      // Si MainPage.vue ya importa y renderiza estos, entonces estos `children` aquí son redundantes.
    ]
  },
  {
    path: '/afiliados',
    name: 'Afiliados',
    component: Afileados,
    meta: { requiresAuth: true, role: 'afiliado' } // Asumiendo que solo afiliados pueden ver esto
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
  {
    path: '/detalles/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  // --- ¡NUEVAS RUTAS PARA PERFIL Y CONFIGURACIÓN! ---
  {
    path: '/perfil',
    name: 'Profile',
    component: ProfileView,
    meta: { requiresAuth: true } // Requiere autenticación para acceder al perfil
  },
  {
    path: '/configuracion',
    name: 'Settings',
    component: SettingsView,
    meta: { requiresAuth: true } // Requiere autenticación para acceder a configuración
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
  const userRole = localStorage.getItem('userRole'); // Asegúrate de que guardas el 'userRole' en localStorage al loguear

  // Si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Si no está autenticado, redirigir al login
      next('/login');
    } else if (to.meta.role && to.meta.role !== userRole) {
      // Si la ruta requiere un rol específico y el usuario no lo tiene, redirigir al inicio
      alert('No tienes permisos para acceder a esta página.'); // O una notificación más amigable
      next('/');
    } else {
      // Si está autenticado y tiene el rol correcto, continuar
      next();
    }
  } else {
    // Para rutas que no requieren autenticación, simplemente continuar
    next();
  }
});

export default router;