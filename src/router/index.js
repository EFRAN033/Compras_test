// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importaciones de componentes
import MainPage from '../views/MainPage.vue';
import BlogSection from '../views/BlogSection.vue';
import CaseStudySection from '../views/CaseStudySection.vue';
import ClientsSection from '../views/ClientsSection.vue';
import CtaSection from '../views/CtaSection.vue';
import DesignSection from '../views/DesignSection.vue';
import FeaturesSection from '../views/FeaturesSection.vue';
import Footer from '../views/Footer.vue';
import Header from '../views/Header.vue';
import HeroSection from '../views/HeroSection.vue';
import PricingSection from '../views/PricingSection.vue';
import StatsSection from '../views/StatsSection.vue';
import TestimonialSection from '../views/TestimonialSection.vue';
import Afileados from '../views/Afiliados.vue';
import chatbot from '../views/chatbot.vue';
import Login from '../views/login.vue';
import RegisterAfiliado from '../views/registerafil.vue'; // Importación correcta de registerafil.vue
import RegisterProveedor from '../views/registerpro.vue'; // Importación correcta de registerpro.vue


// Definición de rutas
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    children: [
      { path: '', component: HeroSection },
      { path: '', component: FeaturesSection },
      { path: '', component: BlogSection },
      { path: '', component: CaseStudySection },
      { path: '', component: DesignSection },
      { path: '', component: PricingSection },
      { path: '', component: StatsSection },
      { path: '', component: TestimonialSection },
      { path: '', component: CtaSection },
      { path: '', component: ClientsSection },
      { path: '', component: Footer },
      { path: '', component: chatbot }
    ]
  },
  {
    path: '/afiliados',
    name: 'Afileados',
    component: Afileados
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
    meta: { hideHeader: true } // Oculta el header para esta ruta
  },
  {
    path: '/registro-proveedor',
    name: 'RegisterProveedor',
    component: RegisterProveedor,
    meta: { hideHeader: true } // Oculta el header para esta ruta
  },
];

// Creación del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

// Guardia de navegación
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login');
    } else if (to.meta.role && to.meta.role !== userRole) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;