<template>
  <footer id="contacto" class="bg-gray-900 text-white pt-12 md:pt-16 pb-8 md:pb-10">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
        <!-- Logo y redes -->
        <div>
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span class="text-teal-400">Pro</span>
            <span class="text-emerald-400">Veo</span>
          </h3>
          <p class="text-gray-400 text-sm md:text-base mb-4 md:mb-5">
            Plataforma líder en gestión inteligente de compras y cadena de suministro.
          </p>
          <div class="flex space-x-3 md:space-x-4">
            <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Producto (oculto en móvil) -->
        <div class="hidden md:block">
          <h4 class="font-semibold mb-3 md:mb-4 border-b border-gray-700 pb-2 text-base text-gray-400">Producto</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Funcionalidades</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Precios</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Integraciones</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Actualizaciones</a></li>
          </ul>
        </div>

        <!-- Recursos (oculto en móvil) -->
        <div class="hidden md:block">
          <h4 class="font-semibold mb-3 md:mb-4 border-b border-gray-700 pb-2 text-base text-gray-400">Recursos</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Guías</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Webinars</a></li>
            <li><a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">Centro de ayuda</a></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h4 class="font-semibold mb-3 md:mb-4 border-b border-gray-700 pb-2 text-base text-gray-400">Contacto</h4>
          <ul class="space-y-2 mb-4 md:mb-5">
            <li class="flex items-center">
              <i class="fas fa-envelope text-teal-400 mr-3 text-sm"></i>
              <a href="mailto:hola@Proveo.com" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">hola@Proveo.com</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone-alt text-teal-400 mr-3 text-sm"></i>
              <a href="tel:+525512345678" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">+52 55 1234 5678</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt text-teal-400 mr-3 text-sm"></i>
              <span class="text-gray-400 text-sm md:text-base">Jr. inco 365, Lima-Peru</span>
            </li>
          </ul>
          <form class="space-y-3">
            <input
              type="email"
              placeholder="Tu correo"
              class="w-full bg-gray-800 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-gray-500 text-sm md:text-base"
            />
            <button
              type="submit"
              class="bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium w-full px-6 py-2.5 rounded-lg text-sm md:text-base transition-all hover:shadow-lg"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright y legales -->
      <div class="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-xs md:text-sm mb-3 md:mb-0">
          © 2023 Proveo. Todos los derechos reservados.
        </p>
        <div class="flex space-x-4 md:space-x-6">
          <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-xs md:text-sm">Términos</a>
          <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-xs md:text-sm">Privacidad</a>
          <a href="#" class="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-xs md:text-sm">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>