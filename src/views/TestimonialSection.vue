<template>
  <section id="testimonios" class="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-900 overflow-hidden">
    <div v-for="deco in decorations" :key="deco.id" 
         class="absolute opacity-20 animate-aurora-pulse"
         :class="deco.position"
         :style="{ animationDuration: deco.duration, animationDelay: deco.delay }">
      <component :is="deco.icon" class="w-14 h-14" :class="deco.color" />
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-12 md:mb-16 opacity-0 animate-fade-in-up">
        <span class="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 text-emerald-300 rounded-full text-sm font-bold uppercase tracking-wider border border-emerald-400/20 shadow-sm">
          Testimonios
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight text-shadow-brand">
          <span class="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Voces</span> de Confianza y Resultados
        </h2>
        <p class="text-emerald-200/80 max-w-2xl mx-auto text-lg leading-relaxed">
          Descubre por qué líderes de la industria eligen ProVeo para transformar su cadena de suministro.
        </p>
      </div>

      <TransitionGroup
        tag="div"
        class="grid gap-8 md:grid-cols-2"
        enter-from-class="opacity-0 translate-y-5"
        enter-active-class="transition-all duration-500 ease-out"
        leave-active-class="transition-all duration-300 ease-in absolute"
        leave-to-class="opacity-0 -translate-y-5"
      >
        <div
          v-for="(testimonial, index) in displayedTestimonials"
          :key="testimonial.name"
          class="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/80 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-900/50 hover:-translate-y-1"
          :style="{ transitionDelay: `${index * 50}ms` }"
        >
          <div class="flex items-start gap-4 mb-5">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-14 h-14 rounded-full border-2 border-emerald-400/40 object-cover shadow-lg"/>
            <div>
              <h4 class="font-bold text-white text-lg">{{ testimonial.name }}</h4>
              <p class="text-brand-emerald-light text-sm">{{ testimonial.position }}</p>
            </div>
          </div>
          <p class="text-slate-300 leading-relaxed mb-6">"{{ testimonial.quote }}"</p>
          <div class="flex justify-between items-center border-t border-slate-700/80 pt-4">
            <div class="flex text-yellow-400 gap-0.5">
              <StarIcon v-for="star in 5" :key="star" class="w-4 h-4"/>
            </div>
            <span class="text-emerald-400/80 text-sm font-medium">{{ testimonial.date }}</span>
          </div>
        </div>
      </TransitionGroup>
      
      <div class="text-center mt-12">
        <button
          @click="toggleTestimonials"
          class="group inline-flex items-center px-7 py-3 border-2 border-emerald-400 text-emerald-300 rounded-full text-base font-semibold hover:bg-emerald-400/10 hover:text-white transition-all duration-300 ease-out"
        >
          <span>{{ showAllTestimonials ? 'Mostrar menos' : 'Ver más testimonios' }}</span>
          <ArrowRightIcon 
            class="ml-2 w-5 h-5 transition-transform duration-300" 
            :class="{ 'group-hover:translate-x-1': !showAllTestimonials, 'rotate-180 group-hover:-translate-x-1': showAllTestimonials }" 
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, shallowRef } from 'vue';
// Reemplazamos Font Awesome con Heroicons
import { StarIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
import { CubeIcon, TruckIcon, CircleStackIcon, BuildingStorefrontIcon, BeakerIcon, GlobeAmericasIcon } from '@heroicons/vue/24/outline';


const allTestimonials = shallowRef([
  { name: "Nina Rodríguez", position: "Directora de Logística, InnovaTech", avatar: "https://randomuser.me/api/portraits/women/65.jpg", quote: "Redujimos un 60% el tiempo en gestión de compras con mayor precisión en inventarios. El soporte fue excepcional.", date: "Hace 2 meses" },
  { name: "Carlos Méndez", position: "CEO, Distribuciones Globales", avatar: "https://randomuser.me/api/portraits/men/32.jpg", quote: "Logramos una reducción del 35% en costos logísticos gracias a su plataforma intuitiva y análisis predictivos.", date: "Hace 5 meses" },
  { name: "Sofía Vargas", position: "Jefa de Operaciones, LogiExpress", avatar: "https://randomuser.me/api/portraits/women/44.jpg", quote: "La automatización de procesos ha mejorado nuestra eficiencia en un 40%. La interfaz es amigable y fácil de usar.", date: "Hace 1 mes" },
  { name: "Javier Castro", position: "Gerente de Suministro, AgroFuturo", avatar: "https://randomuser.me/api/portraits/men/78.jpg", quote: "Su solución nos permitió optimizar rutas de entrega y reducir el consumo de combustible. Una inversión que se pagó sola.", date: "Hace 3 meses" },
  { name: "Luisa Pérez", position: "Analista de Inventarios, Textil Dreams", avatar: "https://randomuser.me/api/portraits/women/12.jpg", quote: "La visibilidad en tiempo real del stock es increíble. Podemos tomar decisiones más informadas y responder al mercado.", date: "Hace 4 meses" },
  { name: "Martín Gómez", position: "Director Comercial, TechSolutions", avatar: "https://randomuser.me/api/portraits/men/50.jpg", quote: "El sistema de pronóstico de demanda es un cambio de juego. Minimizamos el exceso de stock y mejoramos la satisfacción del cliente.", date: "Hace 6 meses" },
]);

// Lógica para el botón "Ver más / Ver menos"
const showAllTestimonials = ref(false);
const initialTestimonialsCount = 2;

const displayedTestimonials = computed(() => {
  return showAllTestimonials.value ? allTestimonials.value : allTestimonials.value.slice(0, initialTestimonialsCount);
});

const toggleTestimonials = () => {
  showAllTestimonials.value = !showAllTestimonials.value;
};

// Datos para los iconos decorativos flotantes
const decorations = shallowRef([
    { id: 1, icon: CubeIcon, position: 'top-1/4 left-[10%]', color: 'text-emerald-400', duration: '8s', delay: '0s' },
    { id: 2, icon: TruckIcon, position: 'bottom-[20%] right-[15%]', color: 'text-teal-400', duration: '10s', delay: '0.5s' },
    { id: 3, icon: CircleStackIcon, position: 'top-[25%] right-[5%]', color: 'text-emerald-300', duration: '7s', delay: '1s' },
    { id: 4, icon: BuildingStorefrontIcon, position: 'bottom-[10%] left-[25%]', color: 'text-teal-300', duration: '9s', delay: '1.5s' },
    { id: 5, icon: BeakerIcon, position: 'top-[5%] left-[40%]', color: 'text-emerald-200', duration: '6s', delay: '2s' },
    { id: 6, icon: GlobeAmericasIcon, position: 'bottom-[5%] right-[40%]', color: 'text-teal-200', duration: '11s', delay: '2.5s' },
]);

</script>