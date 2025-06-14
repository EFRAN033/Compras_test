<template>
  <header class="fixed w-full bg-white shadow-md z-50">
    <div class="w-full px-6 py-4 mx-auto sm:px-8 lg:px-10 max-w-7xl">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold -ml-3 transform translate-x-1">
          <router-link to="/">
            <span class="text-teal-500">Pro</span>
            <span class="text-emerald-600">Veo</span>
          </router-link>
        </div>

        <nav class="hidden md:flex space-x-8 items-center">
          <a href="#inicio" class="text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Inicio</a>
          <a href="#soluciones" class="text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Soluciones</a>
          <a href="#casos" class="text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Casos</a>
          <a href="#precios" class="text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Precios</a>
          <a href="#contacto" class="text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Contacto</a>

          <div v-if="isLoggedIn" class="relative">
            <button @click="toggleProfileMenu" class="flex items-center space-x-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium focus:outline-none">
              <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
                {{ userInitials }}
              </div>
              <span>{{ userName }}</span>
            </button>

            <div v-if="showProfileMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              <router-link to="/perfil" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</router-link>
              <router-link to="/configuracion" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</router-link>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Cerrar Sesión</button>
            </div>
          </div>
          <router-link v-else to="/login" class="ml-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-full hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 shadow-md">
            Iniciar Sesión
          </router-link>
        </nav>

        <div class="md:hidden flex items-center">
          <div v-if="isLoggedIn" class="relative mr-4">
            <button @click="toggleProfileMenu" class="flex items-center focus:outline-none">
              <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
                {{ userInitials }}
              </div>
            </button>
            <div v-if="showProfileMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              <router-link to="/perfil" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</router-link>
              <router-link to="/configuracion" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</router-link>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Cerrar Sesión</button>
            </div>
          </div>

          <button class="focus:outline-none" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        class="w-full md:hidden max-h-0 overflow-hidden transition-all duration-300 bg-white"
      >
        <div class="pt-4 pb-2 space-y-4 px-2">
          <a href="#inicio" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Inicio</a>
          <a href="#soluciones" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Soluciones</a>
          <a href="#casos" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Casos</a>
          <a href="#precios" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Precios</a>
          <a href="#contacto" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Contacto</a>

          <template v-if="!isLoggedIn">
            <router-link to="/login" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">
              Iniciar Sesión
            </router-link>
          </template>
          <template v-else>
            <router-link to="/perfil" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Mi Perfil</router-link>
            <router-link to="/configuracion" class="block py-2 text-gray-700 hover:text-teal-500 transition-colors duration-300 font-medium">Configuración</router-link>
            <button @click="logout" class="block w-full text-left py-2 text-red-600 hover:bg-red-50 transition-colors duration-300 font-medium">Cerrar Sesión</button>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isLoggedIn: false,
      userName: '', // Para guardar el nombre del usuario (ej. "Inka Sex")
      userInitials: '', // Para guardar las iniciales del usuario (ej. "IS")
      showProfileMenu: false, // Para controlar la visibilidad del menú desplegable del perfil
    };
  },
  watch: {
    // Escucha cambios en la ruta. Esto es útil para actualizar el estado de login
    // si el usuario navega a una página sin recargar y el estado de login cambia
    // (ej. si el login/logout sucede en otra vista).
    '$route': 'checkLoginStatus',
  },
  methods: {
    toggleMenu() {
      const menu = document.getElementById("mobile-menu");
      menu.classList.toggle("max-h-0");
      menu.classList.toggle("max-h-[1000px]");

      // Deshabilita el scroll del body cuando el menú móvil está abierto
      if (menu.classList.contains("max-h-[1000px]")) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    setupSmoothScrolling() {
      // Configura el scroll suave para los enlaces ancla
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(anchor.getAttribute("href"))?.scrollIntoView({
            behavior: "smooth",
          });

          // Cierra el menú móvil si se hace clic en un enlace ancla dentro de él
          const menu = document.getElementById("mobile-menu");
          if (menu.classList.contains("max-h-[1000px]")) {
            this.toggleMenu();
          }
        });
      });
    },
    checkLoginStatus() {
      // Verifica si hay un token y un nombre de usuario en localStorage
      const authToken = localStorage.getItem('authToken');
      const userNameFromStorage = localStorage.getItem('userName');

      this.isLoggedIn = !!authToken; // '!!' convierte el valor a booleano (true si existe, false si es null/undefined)
      this.userName = userNameFromStorage || ''; // Si no hay nombre, usa cadena vacía
      this.userInitials = this.getInitials(this.userName); // Calcula las iniciales
    },
    getInitials(name) {
      // Genera las iniciales a partir del nombre del usuario/empresa
      if (!name) return ''; // Si no hay nombre, devuelve vacío
      const parts = name.split(' ');
      if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase(); // Si es una sola palabra, usa la primera letra
      }
      // Si son varias palabras, usa la primera letra de la primera y última palabra
      return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    },
    toggleProfileMenu() {
      // Alterna la visibilidad del menú desplegable del perfil
      this.showProfileMenu = !this.showProfileMenu;
    },
    logout() {
      // Lógica para cerrar sesión
      localStorage.removeItem('authToken'); // Elimina el token de autenticación
      localStorage.removeItem('userName');  // Elimina el nombre de usuario
      localStorage.removeItem('userRole');  // Elimina el rol del usuario (si lo usas)

      this.isLoggedIn = false; // Actualiza el estado de login
      this.userName = '';      // Limpia el nombre
      this.userInitials = '';  // Limpia las iniciales
      this.showProfileMenu = false; // Cierra el menú de perfil

      this.$router.push('/login'); // Redirige al usuario a la página de login
      alert('Has cerrado sesión.'); // Muestra una alerta (puedes reemplazarla con una notificación más elegante)
    },
    // Método para cerrar el menú de perfil si se hace clic fuera de él
    handleClickOutside(event) {
      // Comprueba si el menú de perfil está abierto y si el clic fue fuera del componente del header
      if (this.showProfileMenu && !this.$el.contains(event.target)) {
        this.showProfileMenu = false;
      }
    }
  },
  mounted() {
    // Se ejecuta cuando el componente se ha montado en el DOM
    this.setupSmoothScrolling(); // Configura el scroll suave
    this.checkLoginStatus(); // Verifica el estado de login inicial
    // Agrega un listener de clic global para cerrar el menú desplegable si se hace clic fuera
    window.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    // Se ejecuta justo antes de que el componente sea desmontado del DOM
    // Es importante remover el listener para evitar fugas de memoria
    window.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
/* No hay estilos específicos en el <style> de este componente en el código que proporcionaste. */
/* Asumo que estás usando Tailwind CSS o una configuración de estilos global. */
</style>