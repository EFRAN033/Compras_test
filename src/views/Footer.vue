<template>
  <footer id="contacto" class="bg-gray-900 text-white pt-12 md:pt-16 pb-8 md:pb-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
        <div>
          <router-link to="/" class="flex items-center mb-3 md:mb-4 group">
            <span class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
              ProVeo
            </span>
          </router-link>
          <p class="text-gray-400 text-sm md:text-base mb-4 md:mb-5 max-w-xs">
            Transformamos tu gestión de compras y cadena de suministro. Eficiencia y transparencia.
          </p>
          <div class="flex space-x-4">
            <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-lg">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-lg">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-lg">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-lg">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-bold mb-3 md:mb-4 text-base md:text-lg text-white flex justify-between items-center cursor-pointer md:cursor-auto" @click="toggleProductMenu">
            Producto
            <svg class="w-4 h-4 md:hidden transform transition-transform duration-300" :class="{ 'rotate-180': isProductMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </h4>
          <ul class="space-y-2 md:block" :class="{ 'hidden': !isProductMenuOpen && isMobile }">
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Funcionalidades Clave</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Planes y Precios</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Integraciones</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Novedades y Actualizaciones</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-3 md:mb-4 text-base md:text-lg text-white flex justify-between items-center cursor-pointer md:cursor-auto" @click="toggleResourcesMenu">
            Recursos
            <svg class="w-4 h-4 md:hidden transform transition-transform duration-300" :class="{ 'rotate-180': isResourcesMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </h4>
          <ul class="space-y-2 md:block" :class="{ 'hidden': !isResourcesMenuOpen && isMobile }">
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Guías y Ebooks</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Webinars Gratuitos</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">Centro de Ayuda y FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-3 md:mb-4 text-base md:text-lg text-white">Contáctanos</h4>
          <ul class="space-y-3 mb-5">
            <li class="flex items-start">
              <i class="fas fa-envelope text-teal-400 text-base mr-3 mt-1"></i>
              <a href="mailto:hola@ProveoHelp.com" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">hola@ProveoHelp.com</a>
            </li>
            <li class="flex items-start">
              <i class="fas fa-phone-alt text-teal-400 text-base mr-3 mt-1"></i>
              <a href="tel:+51969362068" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">+51 969362068</a>
            </li>
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt text-teal-400 text-base mr-3 mt-1"></i>
              <span class="text-gray-400 text-sm">Jr. Inco 365, Lima, Perú</span>
            </li>
          </ul>
          <form class="space-y-3">
            <input
              type="email"
              placeholder="Ingresa tu correo para novedades"
              aria-label="Tu correo electrónico para suscribirte a novedades"
              class="w-full bg-gray-800 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-gray-500 text-sm"
            />
            <button
              type="submit"
              class="bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold w-full px-6 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:from-teal-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p class="text-gray-500 text-xs md:text-sm mb-3 md:mb-0">
          © {{ currentYear }} ProVeo. Todos los derechos reservados.
        </p>
        <div class="flex space-x-4 md:space-x-6 text-sm">
          <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300">Términos de Servicio</a>
          <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300">Política de Privacidad</a>
          <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300">Política de Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isProductMenuOpen: false,
      isResourcesMenuOpen: false,
      isMobile: false, // Propiedad para detectar si es móvil
    };
  },
  methods: {
    toggleProductMenu() {
      if (this.isMobile) { // Solo togglea en móvil
        this.isProductMenuOpen = !this.isProductMenuOpen;
      }
    },
    toggleResourcesMenu() {
      if (this.isMobile) { // Solo togglea en móvil
        this.isResourcesMenuOpen = !this.isResourcesMenuOpen;
      }
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint is 768px
      if (!this.isMobile) {
        // Si no es móvil, asegúrate de que los menús estén abiertos por defecto
        this.isProductMenuOpen = true;
        this.isResourcesMenuOpen = true;
      }
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
  }
};
</script>

<style scoped>
/* Puedes añadir estilos adicionales si es necesario aquí,
   pero Tailwind CSS maneja la mayoría de los estilos. */
</style>