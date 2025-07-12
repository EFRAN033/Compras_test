<template>
  <section class="relative py-20 md:py-28 bg-emerald-50 overflow-hidden">
    <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-100/70 blur-3xl animate-aurora-pulse [animation-duration:12s]"></div>
    <div class="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-emerald-100/70 blur-3xl animate-aurora-pulse [animation-duration:14s] [animation-delay:-7s]"></div>
    <div class="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl animate-aurora-pulse [animation-duration:10s] [animation-delay:-3s] hidden lg:block"></div>

    <div class="container mx-auto px-6 text-center relative z-10">
      <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight opacity-0 animate-fade-in-up" style="animation-delay: 100ms;">
        <span class="bg-gradient-to-r from-brand-teal to-brand-emerald-dark bg-clip-text text-transparent text-shadow-brand">¿Listo para transformar</span> tu cadena de suministro?
      </h2>
      <p class="text-base md:text-xl text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style="animation-delay: 200ms;">
        Únete a las empresas líderes que ya están revolucionando sus procesos de compras y abastecimiento con nuestra plataforma inteligente.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto opacity-0 animate-fade-in-up" style="animation-delay: 300ms;">
        <a
          href="#"
          class="group w-full sm:w-auto flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-brand-teal to-brand-emerald-dark text-white font-bold rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
        >
          <span>Prueba gratuita</span>
          <ArrowRightIcon class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        <div class="relative inline-block text-left w-full sm:w-auto" ref="dropdownContainer">
          <button
            @click="toggleDropdown"
            type="button"
            class="w-full flex items-center justify-center px-6 py-3.5 border-2 border-brand-emerald text-brand-emerald-dark font-bold rounded-full text-base hover:bg-emerald-50 transition-colors duration-300 transform active:scale-95"
            aria-expanded="true" aria-haspopup="true"
          >
            <span>Hablar con un experto</span>
            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" />
          </button>

          <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div
              v-if="showDropdown"
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
            >
              <div class="py-1">
                <router-link to="/contacto-experto" @click="closeDropdown" class="group flex items-center text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">
                  <ClipboardDocumentListIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  Formulario de contacto
                </router-link>
                <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" @click="closeDropdown" class="group flex items-center text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">
                  <ChatBubbleLeftRightIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  Chatear por WhatsApp
                </a>
                <a :href="emailLink" @click="closeDropdown" class="group flex items-center text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">
                  <EnvelopeIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  Enviar un correo
                </a>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-gray-600 text-sm opacity-0 animate-fade-in-up" style="animation-delay: 400ms;">
        <div class="flex items-center">
          <CheckCircleIcon class="h-5 w-5 text-brand-emerald mr-2" />
          <span>Inicia tu evaluación de 14 días</span>
        </div>
        <div class="hidden sm:block text-gray-300">•</div>
        <div class="flex items-center">
          <CheckCircleIcon class="h-5 w-5 text-brand-emerald mr-2" />
          <span>Acceso inmediato sin pre-pago</span>
        </div>
        <div class="hidden sm:block text-gray-300">•</div>
        <div class="flex items-center">
          <CheckCircleIcon class="h-5 w-5 text-brand-emerald mr-2" />
          <span>Sin contratos a largo plazo</span>
        </div>
      </div>
      </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
// Reemplazamos Font Awesome con Heroicons
import { ChevronDownIcon, CheckCircleIcon, ArrowRightIcon, ClipboardDocumentListIcon, ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';

// --- Lógica del Menú Desplegable ---
const showDropdown = ref(false);
const dropdownContainer = ref(null);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
const closeDropdown = () => {
  showDropdown.value = false;
};

// Lógica para cerrar el menú al hacer clic fuera
const handleClickOutside = (event) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// --- Datos de Contacto ---
const whatsappNumber = '51987654321'; // Reemplaza con tu número
const whatsappMessage = '¡Hola! Me gustaría hablar con un experto sobre sus soluciones.';
const expertEmail = 'expertos@proveo.com'; // Reemplaza con tu correo
const emailSubject = 'Consulta para un Experto de ProVeo';

const whatsappLink = computed(() => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`);
const emailLink = computed(() => `mailto:${expertEmail}?subject=${encodeURIComponent(emailSubject)}`);

</script>