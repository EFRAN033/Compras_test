<template>
  <section id="soluciones" class="relative py-20 bg-gradient-to-br from-emerald-50/20 via-white to-white overflow-hidden md:py-28">
    <div class="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl animate-aurora-pulse [animation-duration:22s]"></div>
    <div class="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl animate-aurora-pulse [animation-duration:25s] [animation-delay:-12s]"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 max-w-3xl mx-auto opacity-0 animate-slide-in-up-gentle">
        <span class="inline-block mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-brand-teal-dark font-medium text-sm tracking-wide border border-emerald-200/80 shadow-sm">
          PLATAFORMA INTEGRADA
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          <span class="bg-gradient-to-r from-brand-teal to-brand-emerald-dark bg-clip-text text-transparent text-shadow-brand">Soluciones</span> para tu cadena de suministro
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Nuestra tecnología optimiza cada eslabón de tus operaciones logísticas, de forma simple e intuitiva.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          :style="{ animationDelay: `${index * 150}ms` }"
          class="group relative rounded-2xl p-1 bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-300 [background-size:400%_400%] opacity-0 animate-slide-in-up-gentle transition-all duration-300 hover:!opacity-100 lg:group-hover:opacity-60"
        >
          <div class="absolute inset-0 rounded-2xl group-hover:animate-border-pan-slow"
               style="background-image: linear-gradient(to right, #5eead4, #34d399, #2dd4bf, #34d399, #5eead4); background-size: 400% 400%;">
          </div>
          <div class="relative bg-white p-8 rounded-[15px] h-full flex flex-col">
            <div class="flex items-center mb-5">
              <div class="flex-shrink-0 mr-5">
                <div class="h-14 w-14 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center text-brand-emerald-dark transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-emerald-200/80">
                  <component :is="feature.icon" class="h-7 w-7 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ feature.title }}</h3>
                <p class="text-gray-500 mt-1">{{ feature.description }}</p>
              </div>
            </div>
            
            <ul class="space-y-3 mb-6 flex-grow">
              <li v-for="(item, i) in feature.items" :key="i" class="flex items-start">
                <svg class="h-5 w-5 text-brand-emerald mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
            
            <a href="#" class="inline-flex items-center text-brand-teal-dark font-semibold group/link">
              Conocer más
              <svg class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-20 opacity-0 animate-slide-in-up-gentle [animation-delay:600ms]">
        <a href="#" class="inline-flex items-center px-8 py-3.5 bg-white border-2 border-brand-teal text-brand-teal-dark rounded-full font-bold text-lg hover:bg-brand-teal hover:text-white hover:border-brand-teal hover:shadow-lg hover:shadow-teal-200/80 hover:-translate-y-0.5 transition-all duration-300 group">
          Explorar todas las soluciones
          <svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
        
        <div class="mt-12">
          <p class="text-sm text-gray-500 mb-5">Integrados con líderes de la industria</p>
          <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img class="h-6 lg:h-7 transition-all duration-300 hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" loading="lazy">
            <img class="h-6 lg:h-7 transition-all duration-300 hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Walmart_Spark.svg" alt="Walmart" loading="lazy">
            <img class="h-10 lg:h-12 transition-all duration-300 hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg" alt="DHL" loading="lazy">
            <img class="h-5 lg:h-6 transition-all duration-300 hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Maersk_Group_Logo.svg" alt="Maersk" loading="lazy">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue';

// Importamos los iconos de Heroicons para un look limpio y moderno
// ¡No olvides instalarlo! -> npm install @heroicons/vue
import { CubeIcon, TruckIcon, ChartBarSquareIcon } from '@heroicons/vue/24/outline';

const features = shallowRef([
  {
    icon: CubeIcon,
    title: "Gestión de Inventarios",
    description: "Control total de tus existencias",
    items: [
      "Reabastecimiento predictivo",
      "Alertas de stock en tiempo real",
      "Trazabilidad completa por lote"
    ],
  },
  {
    icon: TruckIcon,
    title: "Logística Optimizada",
    description: "Visibilidad de tu cadena de suministro",
    items: [
      "Rastreo satelital en vivo",
      "Planificación de rutas inteligentes",
      "Gestión de flota y proveedores"
    ],
  },
  {
    icon: ChartBarSquareIcon,
    title: "Analítica Avanzada",
    description: "Decisiones basadas en datos",
    items: [
      "Dashboards interactivos",
      "KPIs de rendimiento (OTIF)",
      "Reportes de Business Intelligence"
    ],
  },
]);
</script>