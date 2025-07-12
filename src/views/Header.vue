<template>
  <header 
    class="fixed w-full z-50 transition-all duration-300 ease-out"
    :class="{ 'bg-white/90 backdrop-blur-md shadow-md': isScrolled, 'pt-2': !isScrolled }"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="text-3xl font-extrabold text-shadow-provo">
          <span class="text-brand-teal">Pro</span><span class="text-brand-emerald-dark">Veo</span>
        </router-link>

        <nav class="hidden md:flex items-center gap-x-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" 
             class="font-medium transition-colors duration-200 pb-1 border-b-2"
             :class="activeSection === link.id ? 'text-brand-teal border-brand-teal' : 'text-slate-600 border-transparent hover:text-brand-teal'">
            {{ link.name }}
          </a>
        </nav>

        <div class="hidden md:flex items-center gap-x-4">
          <div v-if="user.isLoggedIn" class="relative" ref="profileMenuContainer">
            <button @click="toggleProfileMenu" class="flex items-center gap-x-2 font-semibold text-slate-700 hover:text-brand-teal transition-colors">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-brand-teal to-brand-emerald-dark flex items-center justify-center text-white font-bold text-sm">
                {{ user.initials }}
              </div>
              <span class="text-sm">{{ user.name }}</span>
            </button>
            <Transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div v-if="showProfileMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-50 border border-gray-200/80">
                <router-link to="/perfil" @click="closeProfileMenu" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Mi Perfil</router-link>
                <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Cerrar Sesión</button>
              </div>
            </Transition>
          </div>
          <router-link v-else to="/login" class="px-5 py-2 bg-gradient-to-r from-brand-teal to-brand-emerald-dark text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm">
            Iniciar Sesión
          </router-link>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="focus:outline-none z-50">
            <Bars3Icon v-if="!isMenuOpen" class="h-7 w-7 text-slate-700" />
            <XMarkIcon v-else class="h-7 w-7 text-slate-700" />
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-opacity ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" @click="closeMenu" class="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm pt-20">
        <nav class="bg-white rounded-b-2xl p-6 space-y-2">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="closeMenu"
             class="block py-2 text-lg font-semibold text-slate-700 hover:text-brand-teal transition-colors">
             {{ link.name }}
          </a>
          <div class="border-t border-slate-200 my-4 !mt-4"></div>
          <div v-if="!user.isLoggedIn">
            <router-link to="/login" @click="closeMenu" class="block py-2 text-lg font-semibold text-slate-700 hover:text-brand-teal transition-colors">Iniciar Sesión</router-link>
          </div>
          <div v-else class="space-y-2">
            <router-link to="/perfil" @click="closeMenu" class="block py-2 text-lg font-semibold text-slate-700 hover:text-brand-teal transition-colors">Mi Perfil</router-link>
            <button @click="logout" class="block w-full text-left py-2 text-lg font-semibold text-red-600">Cerrar Sesión</button>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const router = useRouter();

// --- ESTADO DEL HEADER ---
const isMenuOpen = ref(false);
const showProfileMenu = ref(false);
const isScrolled = ref(false);
const activeSection = ref('inicio');
const profileMenuContainer = ref(null);

const navLinks = [
  { href: '#inicio', name: 'Inicio', id: 'inicio' },
  { href: '#soluciones', name: 'Soluciones', id: 'soluciones' },
  { href: '#casos', name: 'Casos', id: 'casos' },
  { href: '#precios', name: 'Precios', id: 'precios' },
  { href: '#contacto', name: 'Contacto', id: 'contacto' },
];

// --- ESTADO DEL USUARIO ---
const user = reactive({
  isLoggedIn: false,
  name: '',
  initials: ''
});

const getInitials = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const checkLoginStatus = () => {
  const token = localStorage.getItem('authToken');
  const name = localStorage.getItem('userName');
  user.isLoggedIn = !!token;
  user.name = name || '';
  user.initials = getInitials(name);
};

// --- MANEJO DE EVENTOS ---
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};
const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value;
};
const closeProfileMenu = () => {
  showProfileMenu.value = false;
};

const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userName');
  checkLoginStatus(); // Actualiza el estado reactivo
  closeProfileMenu();
  closeMenu();
  router.push('/login');
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// --- LÓGICA DE CLIC FUERA (CLICK OUTSIDE) ---
const handleClickOutside = (event) => {
  if (profileMenuContainer.value && !profileMenuContainer.value.contains(event.target)) {
    closeProfileMenu();
  }
};

// --- LIFECYCLE HOOKS ---
onMounted(() => {
  checkLoginStatus();
  
  // Listener para el fondo del header
  window.addEventListener('scroll', handleScroll);
  
  // Listener para cerrar menú de perfil al hacer clic fuera
  window.addEventListener('click', handleClickOutside);
  
  // Listener para actualizar estado de login si cambia en otra pestaña
  window.addEventListener('storage', checkLoginStatus);
  
  // Observer para resaltar la sección activa
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { rootMargin: '-30% 0px -70% 0px' }); // Activa cuando la sección está en el 30% superior de la pantalla

  navLinks.forEach(link => {
    const section = document.querySelector(link.href);
    if (section) {
      observer.observe(section);
    }
  });

  // Limpiar el observer al desmontar
  onUnmounted(() => {
    navLinks.forEach(link => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.unobserve(section);
      }
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('storage', checkLoginStatus);
  document.body.style.overflow = ''; // Asegurarse de re-habilitar el scroll al salir
});
</script>