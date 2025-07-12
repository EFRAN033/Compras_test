<template>
  <section id="innovacion" class="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50/40 to-white overflow-hidden">
    <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl animate-aurora-pulse"></div>
    <div class="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl animate-aurora-pulse [animation-delay:-10s]"></div>
    <div class="absolute top-1/3 left-1/4 h-56 w-56 rounded-full bg-blue-100/20 blur-3xl animate-aurora-pulse [animation-delay:-5s] hidden lg:block"></div>

    <div class="container mx-auto px-6 sm:px-12 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div class="md:w-1/2 md:pr-8">
          <span class="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-teal-100 to-emerald-100 text-brand-teal-dark rounded-full text-sm md:text-base font-bold uppercase tracking-wider border border-emerald-200 opacity-0 animate-fade-in-down">
            INNOVACIÓN SOSTENIBLE
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <span class="bg-gradient-to-r from-brand-teal to-brand-emerald-dark bg-clip-text text-transparent text-shadow-brand">Tecnología Inteligente</span> que redefine el futuro
          </h2>
          <p class="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:300ms]">
            Nuestra plataforma integra IA de vanguardia y análisis predictivo para ofrecer una solución que eleva la eficiencia de tu cadena de suministro a un nivel sin precedentes.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1.5 hover:border-emerald-100 group opacity-0 animate-fade-in-up"
              :style="{ animationDelay: `${0.4 + index * 0.15}s` }"
            >
              <div class="flex items-start">
                <div class="bg-gradient-to-r from-teal-100/50 to-emerald-50/50 p-3.5 rounded-lg mr-4 flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <component :is="feature.icon" class="text-brand-emerald-dark h-7 w-7 animate-subtle-pulse" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-1">{{ feature.title }}</h3>
                  <p class="text-gray-500 text-sm">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 md:gap-6 opacity-0 animate-fade-in-up [animation-delay:800ms]">
            <router-link
              to="/registro-afiliado"
              class="group px-7 md:px-9 py-3.5 bg-gradient-to-r from-brand-teal to-brand-emerald-dark text-white font-bold rounded-full text-base md:text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              Regístrate Gratis
              <svg class="ml-2 inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
            <a
              href="#"
              class="px-7 md:px-9 py-3.5 border-2 border-brand-emerald text-brand-emerald-dark font-bold rounded-full text-base md:text-lg hover:bg-emerald-50 transition-colors duration-300 active:scale-95"
            >
              Saber más
            </a>
          </div>
        </div>

        <div class="hidden md:block md:w-1/2 relative group opacity-0 animate-slide-in-right [animation-delay:400ms]">
          <div class="relative rounded-2xl shadow-xl border-4 border-white/80 transition-transform duration-500 ease-out group-hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Smart Purchasing System"
              class="rounded-xl w-full"
            />
            <div class="absolute top-0 left-0 h-full w-full overflow-hidden rounded-xl">
                <div class="absolute h-full w-full -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 group-hover:animate-shine-effect"></div>
            </div>
          </div>
          <div class="absolute -bottom-8 -right-8 bg-gradient-to-r from-brand-teal to-brand-emerald-dark text-white px-8 py-5 rounded-2xl shadow-2xl opacity-0 animate-zoom-in [animation-delay:1s] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
            <p class="text-4xl lg:text-5xl font-extrabold">+28%</p>
            <p class="text-base font-medium mt-1">Crecimiento Anual</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue';
// Reemplazamos Font Awesome con Heroicons para un mejor rendimiento y control
import { LightBulbIcon, Cog6ToothIcon, LinkIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';

const features = shallowRef([
  {
    icon: LightBulbIcon,
    title: "IA Predictiva",
    description: "Anticipa demandas y optimiza inventarios.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Automatización Inteligente",
    description: "Reduce errores y acelera tus procesos clave.",
  },
  {
    icon: LinkIcon,
    title: "Integración Total",
    description: "Conecta sin fricciones todos tus sistemas.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Seguridad Reforzada",
    description: "Protege tus datos con protocolos de élite.",
  },
]);
</script>