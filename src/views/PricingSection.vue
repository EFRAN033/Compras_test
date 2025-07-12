<template>
  <section id="precios" class="relative py-20 md:py-28 bg-gradient-to-br from-emerald-50/20 via-white to-white overflow-hidden">
    <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl animate-aurora-pulse [animation-duration:21s]"></div>
    <div class="absolute -left-24 -bottom-12 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl animate-aurora-pulse [animation-duration:24s] [animation-delay:-11s]"></div>
    <div class="absolute top-1/4 left-1/4 h-56 w-56 rounded-full bg-blue-100/20 blur-3xl animate-aurora-pulse [animation-duration:19s] [animation-delay:-4s] hidden lg:block"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <span class="inline-block mb-4 px-5 py-2 bg-white border border-emerald-200/80 rounded-full shadow-sm opacity-0 animate-fade-in-down">
          <span class="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-brand-teal to-brand-emerald-dark bg-clip-text text-transparent">
            Precios Claros
          </span>
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight opacity-0 animate-zoom-in [animation-delay:100ms]">
          Planes a tu medida para el éxito logístico
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Descubre el plan perfecto que escalará tus operaciones y garantizará un crecimiento sin límites.
        </p>
      </div>

      <div class="md:hidden relative py-4">
        <div class="flex transition-transform duration-700 ease-out-quart" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(plan, index) in plans" :key="index" class="w-full flex-shrink-0 px-4 flex items-start justify-center">
            <div class="bg-white p-6 rounded-2xl shadow-lg border relative w-full max-w-sm transition-opacity duration-500"
                 :class="currentSlide === index ? 'opacity-100 border-emerald-300' : 'opacity-60 border-gray-100'">
              <div v-if="plan.popular" class="absolute -top-0.5 right-4 bg-gradient-to-r from-brand-teal to-brand-emerald-dark text-white text-xs font-bold px-3 py-1.5 rounded-b-lg shadow-lg">
                MÁS POPULAR
              </div>
              <div class="flex flex-col h-full">
                <h3 class="text-xl font-bold mb-2 text-gray-900">{{ plan.name }}</h3>
                <p class="text-gray-500 mb-5 text-sm flex-grow">{{ plan.description }}</p>
                <div class="mb-6 text-center">
                  <span class="text-4xl font-extrabold text-gray-900">{{ plan.price }}</span>
                  <span class="text-gray-400 text-sm font-medium">/mes</span>
                </div>
                <ul class="space-y-3 mb-8">
                  <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start text-sm" :class="{ 'text-gray-400': !feature.included }">
                    <CheckIcon v-if="feature.included" class="h-5 w-5 text-brand-emerald mt-px mr-2 flex-shrink-0" />
                    <XMarkIcon v-else class="h-5 w-5 text-gray-300 mt-px mr-2 flex-shrink-0" />
                    <span>{{ feature.text }}</span>
                  </li>
                </ul>
                <a href="#" class="mt-auto w-full text-center block px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-out transform active:scale-95 hover:-translate-y-0.5"
                   :class="plan.popular ? 'bg-gradient-to-br from-brand-teal to-brand-emerald-dark text-white shadow-lg hover:shadow-xl' : 'bg-white border-2 border-brand-emerald text-brand-emerald-dark hover:bg-emerald-50'">
                  Comenzar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
        <button @click="prevSlide" aria-label="Plan anterior" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-md z-20 hover:bg-white transition-colors duration-300 active:scale-90">
          <ChevronLeftIcon class="h-5 w-5 text-brand-teal-dark" />
        </button>
        <button @click="nextSlide" aria-label="Plan siguiente" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-md z-20 hover:bg-white transition-colors duration-300 active:scale-90">
          <ChevronRightIcon class="h-5 w-5 text-brand-teal-dark" />
        </button>
        <div class="flex justify-center mt-6 space-x-2">
          <button v-for="(_, index) in plans" :key="index" @click="goToSlide(index)" class="h-2 rounded-full transition-all duration-300 ease-out"
                  :class="currentSlide === index ? 'bg-brand-teal w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'"></button>
        </div>
      </div>

      <div class="hidden md:flex justify-center items-stretch gap-6 lg:gap-8">
        <div v-for="(plan, index) in plans" :key="index" :style="{ animationDelay: `${index * 150}ms` }"
             class="group relative w-full max-w-sm flex flex-col opacity-0 animate-fade-in-up">
          <div :class="plan.popular ? 'rounded-2xl p-1 bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-300' : 'rounded-2xl border border-gray-100'">
            <div class="absolute inset-0 rounded-2xl group-hover:animate-border-pan-slow" v-if="plan.popular"
                 style="background-image: linear-gradient(to right, #5eead4, #34d399, #2dd4bf, #34d399, #5eead4); background-size: 400% 400%;">
            </div>
            <div class="relative bg-white p-8 rounded-[15px] h-full flex flex-col shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1.5">
              <div v-if="plan.popular" class="absolute -top-0.5 right-6 bg-gradient-to-r from-brand-teal to-brand-emerald-dark text-white text-xs font-bold px-3 py-1.5 rounded-b-lg shadow-lg">
                MÁS POPULAR
              </div>
              <div class="flex flex-col h-full">
                <h3 class="text-xl font-bold mb-2 text-gray-900">{{ plan.name }}</h3>
                <p class="text-gray-500 mb-5 text-sm flex-grow">{{ plan.description }}</p>
                <div class="mb-6 text-center">
                  <span class="text-4xl font-extrabold text-gray-900">{{ plan.price }}</span>
                  <span class="text-gray-400 text-sm font-medium">/mes</span>
                </div>
                <ul class="space-y-3 mb-8">
                  <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start text-sm" :class="{ 'text-gray-400': !feature.included }">
                    <CheckIcon v-if="feature.included" class="h-5 w-5 text-brand-emerald mt-px mr-2 flex-shrink-0" />
                    <XMarkIcon v-else class="h-5 w-5 text-gray-300 mt-px mr-2 flex-shrink-0" />
                    <span>{{ feature.text }}</span>
                  </li>
                </ul>
                <a href="#" class="mt-auto w-full text-center block px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-out transform active:scale-95 hover:-translate-y-0.5"
                   :class="plan.popular ? 'bg-gradient-to-br from-brand-teal to-brand-emerald-dark text-white shadow-lg hover:shadow-xl' : 'bg-white border-2 border-brand-emerald text-brand-emerald-dark hover:bg-emerald-50'">
                  Comenzar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 md:mt-16 opacity-0 animate-fade-in-up [animation-delay:400ms]">
        <p class="text-gray-600">
          ¿Necesitas un plan a medida?
          <a href="#" class="text-brand-teal-dark font-semibold hover:underline">Contáctanos directamente.</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
// Reemplazamos Font Awesome con Heroicons
import { CheckIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

const plans = shallowRef([
  {
    name: "Básico",
    description: "Para emprendimientos y pequeñas empresas con operaciones iniciales.",
    price: "S/299",
    popular: false,
    features: [
      { text: "Gestión hasta 5 proveedores", included: true },
      { text: "500 pedidos mensuales", included: true },
      { text: "Soporte por correo (24h)", included: true },
      { text: "Acceso a reportes básicos", included: false },
      { text: "Integración con API", included: false },
    ],
  },
  {
    name: "Profesional",
    description: "Para empresas en crecimiento que buscan optimizar sus procesos.",
    price: "S/799",
    popular: true,
    features: [
      { text: "Gestión hasta 20 proveedores", included: true },
      { text: "5,000 pedidos mensuales", included: true },
      { text: "Soporte prioritario 24/7", included: true },
      { text: "Acceso a reportes avanzados", included: true },
      { text: "Integración con API estándar", included: true },
    ],
  },
  {
    name: "Empresa",
    description: "Solución completa para grandes operaciones y necesidades específicas.",
    price: "S/1,999",
    popular: false,
    features: [
      { text: "Proveedores ilimitados", included: true },
      { text: "Pedidos ilimitados", included: true },
      { text: "Soporte dedicado 24/7", included: true },
      { text: "Reportes personalizados y BI", included: true },
      { text: "Integración con API y SSO", included: true },
    ],
  },
]);

// Lógica para el carrusel móvil
const currentSlide = ref(1); // Empezamos en el plan popular

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % plans.value.length;
};
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + plans.value.length) % plans.value.length;
};
const goToSlide = (index) => {
  currentSlide.value = index;
};
</script>