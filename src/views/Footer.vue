<template>
  <footer id="contacto" class="bg-slate-900 text-slate-300">
    <div class="container mx-auto px-6 pt-16 pb-8">
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        <div class="col-span-2 lg:col-span-1">
          <router-link to="/" class="inline-block mb-4">
            <span class="text-3xl font-extrabold bg-gradient-to-r from-brand-teal-light to-brand-emerald-light bg-clip-text text-transparent">
              ProVeo
            </span>
          </router-link>
          <p class="text-slate-400 text-sm max-w-xs">
            Transformando la gestión de compras y la cadena de suministro con eficiencia y transparencia.
          </p>
        </div>

        <div v-for="section in footerLinks" :key="section.title">
          <h4 class="font-bold mb-4 text-white tracking-wide">{{ section.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.name">
              <a :href="link.href" class="text-slate-400 hover:text-brand-teal-light transition-colors duration-200 text-sm">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-white tracking-wide">Contáctanos</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <EnvelopeIcon class="h-5 w-5 text-brand-teal-light mr-2.5 mt-0.5 flex-shrink-0" />
              <a href="mailto:hola@proveo.com" class="text-slate-400 hover:text-brand-teal-light transition-colors duration-200 text-sm">hola@proveo.com</a>
            </li>
            <li class="flex items-start">
              <PhoneIcon class="h-5 w-5 text-brand-teal-light mr-2.5 mt-0.5 flex-shrink-0" />
              <a href="tel:+51969362068" class="text-slate-400 hover:text-brand-teal-light transition-colors duration-200 text-sm">+51 969 362 068</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="py-8 border-y border-slate-800">
        <div class="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div>
            <h4 class="font-bold text-white text-lg">Mantente Actualizado</h4>
            <p class="text-slate-400 text-sm">Recibe las últimas noticias y guías de la industria directamente en tu correo.</p>
          </div>
          <form class="w-full max-w-md">
            <div class="relative">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                aria-label="Correo para suscribirte"
                class="w-full bg-slate-800 rounded-lg pl-4 pr-32 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal text-white placeholder-slate-500 text-sm border border-slate-700"
              />
              <button
                type="submit"
                class="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-teal to-brand-emerald-dark text-white font-semibold px-4 py-2 rounded-md text-sm transition-all hover:shadow-lg hover:from-brand-teal-dark hover:to-brand-emerald"
              >
                Suscribirse
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-slate-500 text-sm text-center md:text-left">
          © {{ currentYear }} ProVeo. Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-x-4">
          <a v-for="social in socialLinks" :key="social.name" :href="social.href" :aria-label="social.name" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-brand-teal-light transition-colors duration-300">
            <component :is="social.icon" class="h-5 w-5" />
          </a>
        </div>
        <div class="flex items-center gap-x-6 text-sm">
          <a href="#" class="text-slate-500 hover:text-white transition-colors duration-300">Términos</a>
          <a href="#" class="text-slate-500 hover:text-white transition-colors duration-300">Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, shallowRef } from 'vue';
// Importamos los iconos que usaremos
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';

// Para los iconos sociales, necesitarías un componente o el SVG para cada uno.
// Aquí un ejemplo de cómo podrías definirlos si los tuvieras.
const FacebookIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"></path></svg>` };
const TwitterIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.75 0 11.99-6.42 11.99-12 0-.18 0-.37-.01-.55.83-.6 1.54-1.36 2.12-2.22z"></path></svg>` };
const LinkedInIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1.5.67-1.5 1.5V12h3l-.5 3h-2.5v6.8A10.001 10.001 0 0 0 22 12z"></path></svg>` };

// --- DATOS DEL FOOTER ---

const currentYear = computed(() => new Date().getFullYear());

const footerLinks = shallowRef([
  {
    title: 'Producto',
    links: [
      { name: 'Funcionalidades', href: '#' },
      { name: 'Planes y Precios', href: '#' },
      { name: 'Integraciones', href: '#' },
      { name: 'Novedades', href: '#' },
    ]
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Guías y Ebooks', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Centro de Ayuda', href: '#' },
    ]
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Sobre Nosotros', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Prensa', href: '#' },
      { name: 'Legal', href: '#' },
    ]
  }
]);

const socialLinks = shallowRef([
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
]);
</script>