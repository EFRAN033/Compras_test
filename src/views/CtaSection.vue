<template>
  <section class="relative py-20 md:py-28 bg-emerald-50 overflow-hidden">
    <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-100/70 blur-3xl animate-blob-pulse-1"></div>
    <div class="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-emerald-100/70 blur-3xl animate-blob-pulse-2"></div>
    <div class="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl animate-blob-pulse-3 hidden lg:block"></div>

    <div class="container mx-auto px-6 text-center relative z-10">
      <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight animate-fade-in-up-stagger delay-100">
        <span class="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">¿Listo para transformar</span> tu cadena de suministro?
      </h2>
      <p class="text-base md:text-xl text-gray-600 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-stagger delay-200">
        Únete a las empresas líderes que ya están revolucionando sus procesos de compras y abastecimiento con nuestra plataforma inteligente.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto animate-fade-in-up-stagger delay-300">
        <a
          href="#"
          class="group px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-bold rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.01] active:scale-98 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
        >
          Comenzar prueba gratuita
          <svg class="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>

        <div class="relative inline-block text-left" v-click-outside="closeDropdown">
          <button
            @click="toggleDropdown"
            type="button"
            class="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full text-base hover:bg-emerald-50 transition-colors duration-300 transform hover:scale-[1.01] active:scale-98 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 inline-flex items-center"
            id="menu-button" aria-expanded="true" aria-haspopup="true"
          >
            Hablar con un experto
            <svg class="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <transition name="fade-scale">
            <div
              v-if="showDropdown"
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
              role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
            >
              <div class="py-1" role="none">
                <router-link
                  to="/contacto-experto"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem" tabindex="-1" id="menu-item-0"
                  @click="closeDropdown"
                >
                  <i class="far fa-clipboard-list mr-2"></i> Formulario de contacto
                </router-link>
                <a
                  :href="whatsappLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem" tabindex="-1" id="menu-item-1"
                  @click="closeDropdown"
                >
                  <i class="fab fa-whatsapp mr-2"></i> Chatear por WhatsApp
                </a>
                <a
                  :href="emailLink"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem" tabindex="-1" id="menu-item-2"
                  @click="closeDropdown"
                >
                  <i class="far fa-envelope mr-2"></i> Enviar un correo
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-gray-600 text-sm md:text-base animate-fade-in-up-stagger delay-400">
        <div class="flex items-center group cursor-default hover:text-emerald-700 transition-colors duration-200">
          <i class="fas fa-check-circle text-emerald-500 mr-2 transform group-hover:scale-110 transition-transform duration-200"></i>
          <span>Prueba de 14 días</span>
        </div>
        <div class="hidden sm:block text-gray-400 text-lg">•</div>
        <div class="flex items-center group cursor-default hover:text-emerald-700 transition-colors duration-200">
          <i class="fas fa-check-circle text-emerald-500 mr-2 transform group-hover:scale-110 transition-transform duration-200"></i>
          <span>Sin tarjeta requerida</span>
        </div>
        <div class="hidden sm:block text-gray-400 text-lg">•</div>
        <div class="flex items-center group cursor-default hover:text-emerald-700 transition-colors duration-200">
          <i class="fas fa-check-circle text-emerald-500 mr-2 transform group-hover:scale-110 transition-transform duration-200"></i>
          <span>Cancelación en cualquier momento</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CtaSection",
  data() {
    return {
      showDropdown: false,
      whatsappNumber: '51987654321', // Reemplaza con tu número de WhatsApp real (código de país + número sin espacios ni guiones)
      whatsappMessage: '¡Hola! Me gustaría hablar con un experto sobre sus soluciones de cadena de suministro.', // Mensaje predefinido
      expertEmail: 'expertos@tuempresa.com', // Reemplaza con tu correo de contacto de expertos
      emailSubject: 'Consulta para un Experto',
    };
  },
  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.whatsappMessage);
      return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    },
    emailLink() {
      const encodedSubject = encodeURIComponent(this.emailSubject);
      return `mailto:${this.expertEmail}?subject=${encodedSubject}`;
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.showDropdown = false;
    }
  },
  directives: {
    clickOutside: {
      mounted(el, binding) {
        el.__ClickOutsideHandler__ = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event);
          }
        };
        document.body.addEventListener('click', el.__ClickOutsideHandler__);
      },
      beforeUnmount(el) {
        document.body.removeEventListener('click', el.__ClickOutsideHandler__);
      }
    }
  }
};
</script>

<style scoped>
/* Tu CSS existente... */
.transition-all { transition: all 0.3s ease-in-out; }
.transition-transform { transition: transform 0.3s ease-in-out; }
.transition-colors { transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out; }
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }

/* --- Staggered Fade In Up for content --- */
@keyframes fadeInUpStagger {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up-stagger {
  animation: fadeInUpStagger 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  opacity: 0; /* Ensures elements are hidden before animation starts */
}

/* Delay utilities */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }

/* --- Blob Background Pulse Animation --- */
@keyframes blobPulse1 {
  0% { transform: scale(1) translate(0, 0); opacity: 0.7; } /* Increased opacity */
  50% { transform: scale(1.05) translate(10px, -10px); opacity: 0.8; } /* Increased opacity */
  100% { transform: scale(1) translate(0, 0); opacity: 0.7; } /* Increased opacity */
}
.animate-blob-pulse-1 { animation: blobPulse1 12s ease-in-out infinite alternate; }

@keyframes blobPulse2 {
  0% { transform: scale(1) translate(0, 0); opacity: 0.7; } /* Increased opacity */
  50% { transform: scale(1.05) translate(-10px, 10px); opacity: 0.8; } /* Increased opacity */
  100% { transform: scale(1) translate(0, 0); opacity: 0.7; } /* Increased opacity */
}
.animate-blob-pulse-2 { animation: blobPulse2 14s ease-in-out infinite alternate; animation-delay: 0.5s; }

@keyframes blobPulse3 {
  0% { transform: scale(1) translate(0, 0); opacity: 0.5; } /* Increased opacity */
  50% { transform: scale(1.03) translate(5px, 5px); opacity: 0.6; } /* Increased opacity */
  100% { transform: scale(1) translate(0, 0); opacity: 0.5; } /* Increased opacity */
}
.animate-blob-pulse-3 { animation: blobPulse3 10s ease-in-out infinite alternate; animation-delay: 1s; }

/* Transiciones para el Dropdown (opcional, para un efecto de aparición más suave) */
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.2s ease-out;
}
.fade-scale-enter-from, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-5px);
}
</style>