<template>
  <section id="precios" class="relative py-16 md:py-24 bg-gradient-to-br from-emerald-50/30 to-white overflow-hidden">
    <!-- Elementos decorativos abstractos -->
    <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-100/30 blur-3xl"></div>
    <div class="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl"></div>

    <div class="container mx-auto px-6 sm:px-12 relative z-10">
      <div class="text-center mb-14 md:mb-20">
        <span class="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-teal-100 to-emerald-100 text-emerald-700 rounded-full text-sm font-bold uppercase tracking-wider border border-emerald-200">
          PRECIOS
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
          <span class="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Planes flexibles</span> para cada necesidad
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Elige la solución que mejor se adapte a tu operación logística
        </p>
      </div>

      <!-- Carrusel para móvil -->
      <div class="md:hidden relative overflow-hidden py-8">
        <!-- Contenedor del carrusel -->
        <div 
          class="flex transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          ref="carousel"
        >
          <!-- Planes -->
          <div 
            v-for="(plan, index) in plans"
            :key="index"
            class="w-full flex-shrink-0 px-4 flex items-center justify-center"
          >
            <div
              :class="{
                'border-2 border-emerald-600 shadow-xl transform scale-105 z-10': currentSlide === index,
                'opacity-90': currentSlide !== index
              }"
              class="bg-white p-7 rounded-xl shadow-md transition-all duration-300 border border-gray-100 max-w-md w-full mx-2"
            >
              <div
                v-if="plan.popular"
                class="absolute top-0 right-0 bg-gradient-to-r from-teal-600 to-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-bl-lg rounded-tr-lg"
              >
                RECOMENDADO
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ plan.name }}</h3>
              <p class="text-gray-500 mb-5">{{ plan.description }}</p>
              <div class="mb-6">
                <span class="text-3xl font-bold">{{ plan.price }}</span>
                <span class="text-gray-400">/mes</span>
              </div>
              <ul class="space-y-3 mb-7">
                <li
                  v-for="(feature, i) in plan.features"
                  :key="i"
                  class="flex items-start text-sm md:text-base"
                  :class="{ 'text-gray-400': !feature.included }"
                >
                  <i
                    :class="
                      feature.included
                        ? 'fas fa-check text-emerald-500 mt-1 mr-3'
                        : 'fas fa-times text-gray-300 mt-1 mr-3'
                    "
                  ></i>
                  <span>{{ feature.text }}</span>
                </li>
              </ul>
              <a
                href="#"
                :class="
                  plan.popular
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-semibold px-5 py-3 rounded-full w-full text-center block hover:shadow-lg transition-all'
                    : 'border-2 border-emerald-600 text-emerald-600 font-semibold px-5 py-3 rounded-full w-full text-center hover:bg-emerald-50 block transition-colors'
                "
              >
                Comenzar ahora
              </a>
            </div>
          </div>
        </div>

        <!-- Controles de navegación -->
        <button 
          @click="prevSlide"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 hover:bg-gray-50"
          aria-label="Plan anterior"
        >
          <i class="fas fa-chevron-left text-emerald-600 text-lg"></i>
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 hover:bg-gray-50"
          aria-label="Plan siguiente"
        >
          <i class="fas fa-chevron-right text-emerald-600 text-lg"></i>
        </button>

        <!-- Indicadores -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(_, index) in plans"
            :key="index"
            @click="goToSlide(index)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-emerald-600 w-4' : 'bg-gray-300'"
            aria-label="Ir al plan"
          ></button>
        </div>
      </div>

      <!-- Grid para desktop con tarjeta central elevada -->
      <div class="hidden md:flex justify-center items-center gap-8 max-w-6xl mx-auto px-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="{
            'border-2 border-emerald-600 shadow-xl transform scale-105 z-10': index === 1,
            'opacity-95 hover:opacity-100': index !== 1
          }"
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full max-w-sm"
        >
          <div
            v-if="plan.popular"
            class="absolute top-0 right-0 bg-gradient-to-r from-teal-600 to-emerald-700 text-white text-sm font-bold px-4 py-2 rounded-bl-lg rounded-tr-lg"
          >
            RECOMENDADO
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">{{ plan.name }}</h3>
          <p class="text-gray-500 mb-6">{{ plan.description }}</p>
          <div class="mb-7">
            <span class="text-4xl font-bold">{{ plan.price }}</span>
            <span class="text-gray-400">/mes</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li
              v-for="(feature, i) in plan.features"
              :key="i"
              class="flex items-start"
              :class="{ 'text-gray-400': !feature.included }"
            >
              <i
                :class="
                  feature.included
                    ? 'fas fa-check text-emerald-500 mt-1 mr-3'
                    : 'fas fa-times text-gray-300 mt-1 mr-3'
                "
              ></i>
              <span>{{ feature.text }}</span>
            </li>
          </ul>
          <a
            href="#"
            :class="
              plan.popular
                ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-semibold px-6 py-3.5 rounded-full w-full text-center hover:shadow-md block transition-all'
                : 'border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3.5 rounded-full w-full text-center hover:bg-emerald-50 block transition-colors'
            "
          >
            Comenzar ahora
          </a>
        </div>
      </div>

      <div class="text-center mt-12 md:mt-16">
        <p class="text-gray-600 text-base md:text-lg">
          ¿Necesitas un plan a medida?
          <a href="#" class="text-emerald-600 font-semibold hover:underline">Contáctanos</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingWithElevatedCard",
  data() {
    return {
      plans: [
        {
          name: "Básico",
          description: "Ideal para emprendimientos y pequeñas empresas",
          price: "S/299",
          popular: false,
          features: [
            { text: "Gestión de hasta 5 proveedores", included: true },
            { text: "500 pedidos mensuales", included: true },
            { text: "Soporte por correo electrónico", included: true },
            { text: "Reportes básicos", included: false },
          ],
        },
        {
          name: "Profesional",
          description: "Perfecto para empresas en crecimiento",
          price: "S/799",
          popular: true,
          features: [
            { text: "Gestión de hasta 20 proveedores", included: true },
            { text: "5,000 pedidos mensuales", included: true },
            { text: "Soporte prioritario 24/7", included: true },
            { text: "Reportes avanzados", included: true },
          ],
        },
        {
          name: "Empresa",
          description: "Solución completa para operaciones grandes",
          price: "S/1,999",
          popular: false,
          features: [
            { text: "Proveedores ilimitados", included: true },
            { text: "Pedidos ilimitados", included: true },
            { text: "Soporte dedicado 24/7", included: true },
            { text: "Reportes personalizados", included: true },
          ],
        },
      ],
      currentSlide: 1,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.plans.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.plans.length) % this.plans.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style scoped>
.transform {
  transition: all 0.3s ease-in-out;
}
.scale-105 {
  transform: scale(1.05);
}
.z-10 {
  z-index: 10;
}

.transition-transform {
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Animaciones para el carrusel */
@keyframes slideInLeft {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>