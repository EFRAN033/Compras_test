<template>
  <section id="precios" class="relative py-12 md:py-16 bg-gradient-to-br from-emerald-50/30 to-white overflow-hidden">
    <div class="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-100/30 blur-2xl animate-blob-flow-1"></div>
    <div class="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-emerald-100/30 blur-2xl animate-blob-flow-2"></div>
    <div class="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-blue-100/20 blur-2xl animate-blob-flow-3 hidden lg:block"></div>
    <div class="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-purple-100/20 blur-2xl animate-blob-flow-4 hidden lg:block"></div>

    <div class="container mx-auto px-6 sm:px-12 relative z-10">
      <div class="text-center mb-10 md:mb-14">
        <span class="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-teal-100 to-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200 animate-slide-in-top">
          PRECIOS CLAROS
        </span>
        <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight animate-fade-in-scale">
          <span class="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Planes hechos a tu medida</span> para el éxito logístico
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base animate-fade-in-up delay-200">
          Descubre el plan perfecto que escalará tus operaciones, optimizará tu gestión de proveedores y garantizará un crecimiento sin límites.
        </p>
      </div>

      <div class="md:hidden relative overflow-hidden py-6">
        <div
          class="flex transition-transform duration-700 ease-in-out-expo"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(plan, index) in plans"
            :key="index"
            class="w-full flex-shrink-0 px-3 flex items-center justify-center"
          >
            <div
              :class="{
                'border-2 border-emerald-600 shadow-lg transform scale-105 z-10 opacity-100 animate-border-pulse': currentSlide === index,
                'opacity-70': currentSlide !== index
              }"
              class="bg-white p-5 rounded-xl shadow-md transition-all duration-300 border border-gray-100 relative w-full max-w-md mx-2 animate-card-slide-up"
            >
              <div
                v-if="plan.popular"
                class="absolute -top-2 right-0 bg-gradient-to-r from-teal-600 to-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-md animate-badge-pop"
              >
                MÁS POPULAR
              </div>
              <h3 class="text-lg font-bold mb-3 text-gray-900">{{ plan.name }}</h3>
              <p class="text-gray-500 mb-4 text-xs">{{ plan.description }}</p>
              <div class="mb-4">
                <span class="text-2xl font-extrabold text-gray-900">{{ plan.price }}</span>
                <span class="text-gray-400 text-sm">/mes</span>
              </div>
              <ul class="space-y-2 mb-5">
                <li
                  v-for="(feature, i) in plan.features"
                  :key="i"
                  class="flex items-start text-xs md:text-sm"
                  :class="{ 'text-gray-400 opacity-60 transition-colors duration-300': !feature.included }"
                >
                  <i
                    :class="
                      feature.included
                        ? 'fas fa-check text-emerald-500 mt-0.5 mr-2 flex-shrink-0 text-sm'
                        : 'fas fa-times text-gray-300 mt-0.5 mr-2 flex-shrink-0 text-sm'
                    "
                  ></i>
                  <span>{{ feature.text }}</span>
                </li>
              </ul>
              <a
                href="#"
                :class="
                  plan.popular
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-semibold px-4 py-2.5 rounded-full w-full text-center block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-sm'
                    : 'border-2 border-emerald-600 text-emerald-600 font-semibold px-4 py-2.5 rounded-full w-full text-center hover:bg-emerald-50 block transition-colors duration-300 transform hover:scale-[1.02] active:scale-95 text-sm'
                "
              >
                Comenzar ahora
              </a>
            </div>
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-20 hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Plan anterior"
        >
          <i class="fas fa-chevron-left text-emerald-600 text-sm"></i>
        </button>
        <button
          @click="nextSlide"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-20 hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-400"
          aria-label="Plan siguiente"
        >
          <i class="fas fa-chevron-right text-emerald-600 text-sm"></i>
        </button>

        <div class="flex justify-center mt-6 space-x-1.5">
          <button
            v-for="(_, index) in plans"
            :key="index"
            @click="goToSlide(index)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-emerald-600 w-3' : 'bg-gray-300 hover:bg-gray-400'"
            aria-label="Ir al plan"
          ></button>
        </div>
      </div>

      <div class="hidden md:flex justify-center items-stretch gap-6 max-w-5xl mx-auto px-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="{
            'border-2 border-emerald-600 shadow-lg transform scale-105 z-10 animate-border-pulse': plan.popular,
            'opacity-95 hover:opacity-100 hover:shadow-lg hover:scale-[1.02]': !plan.popular
          }"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
          class="bg-white p-6 rounded-xl shadow-md transition-all duration-300 border border-gray-100 w-full max-w-sm relative flex flex-col justify-between animate-card-slide-up hover:rotate-y-1 hover:rotate-x-05"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-2 right-0 bg-gradient-to-r from-teal-600 to-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-md animate-badge-pop"
          >
            MÁS POPULAR
          </div>
          <div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ plan.name }}</h3>
            <p class="text-gray-500 mb-4 text-sm">{{ plan.description }}</p>
            <div class="mb-5">
              <span class="text-3xl font-extrabold text-gray-900">{{ plan.price }}</span>
              <span class="text-gray-400 text-sm">/mes</span>
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="(feature, i) in plan.features"
                :key="i"
                class="flex items-start text-sm"
                :class="{ 'text-gray-400 opacity-60 transition-colors duration-300': !feature.included }"
              >
                <i
                  :class="
                    feature.included
                      ? 'fas fa-check text-emerald-500 mt-0.5 mr-2 flex-shrink-0 text-sm'
                      : 'fas fa-times text-gray-300 mt-0.5 mr-2 flex-shrink-0 text-sm'
                  "
                ></i>
                <span>{{ feature.text }}</span>
              </li>
            </ul>
          </div>
          <a
            href="#"
            :class="
              plan.popular
                ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-semibold px-4 py-2.5 rounded-full w-full text-center block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-sm'
                : 'border-2 border-emerald-600 text-emerald-600 font-semibold px-4 py-2.5 rounded-full w-full text-center hover:bg-emerald-50 block transition-colors duration-300 transform hover:scale-[1.02] active:scale-95 text-sm'
            "
          >
            Comenzar ahora
          </a>
        </div>
      </div>

      <div class="text-center mt-8 md:mt-10 animate-fade-in-up delay-300">
        <p class="text-gray-600 text-sm md:text-base">
          ¿Necesitas un plan a medida o tienes requisitos especiales?
          <a href="#" class="text-emerald-600 font-semibold hover:underline hover:text-emerald-800 transition-colors duration-200">Contáctanos directamente.</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingSection",
  data() {
    return {
      plans: [
        {
          name: "Básico",
          description: "Ideal para emprendimientos y pequeñas empresas con operaciones iniciales.",
          price: "S/299",
          popular: false,
          features: [
            { text: "Gestión de hasta 5 proveedores", included: true },
            { text: "500 pedidos mensuales", included: true },
            { text: "Soporte por correo electrónico (24h respuesta)", included: true },
            { text: "Acceso a reportes básicos", included: false },
            { text: "Integración con API básica", included: false },
          ],
        },
        {
          name: "Profesional",
          description: "Perfecto para empresas en crecimiento que buscan optimizar sus procesos.",
          price: "S/799",
          popular: true, // This plan is the one to be highlighted
          features: [
            { text: "Gestión de hasta 20 proveedores", included: true },
            { text: "5,000 pedidos mensuales", included: true },
            { text: "Soporte prioritario 24/7 (Chat/Teléfono)", included: true },
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
            { text: "Soporte dedicado 24/7 (Gerente de cuenta)", included: true },
            { text: "Reportes personalizados y BI", included: true },
            { text: "Integración con API avanzada y SSO", included: true },
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
/* Base Transitions */
.transition-all { transition: all 0.3s ease-in-out; }
.transition-transform { transition: transform 0.3s ease-in-out; }
.transition-colors { transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out; }
.scale-105 { transform: scale(1.05); }
.z-10 { z-index: 10; }
.shadow-lg { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }

/* Custom Cubic Bezier */
.ease-in-out-expo { transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1); }

/* Headline & Subtitle Animations */
@keyframes slideInTop { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-slide-in-top { animation: slideInTop 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }

@keyframes fadeInScale { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
.animate-fade-in-scale { animation: fadeInScale 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; animation-delay: 0.1s; }

@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fadeInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

/* Card Entry Animation */
@keyframes cardSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.animate-card-slide-up { animation: cardSlideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }

/* "Recommended" Badge Animation */
@keyframes badgePop {
  0% { transform: scale(0.6) translateY(-8px); opacity: 0; }
  70% { transform: scale(1.05) translateY(0); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-badge-pop { animation: badgePop 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; animation-delay: 0.7s; }

/* Elevated Card Border Pulse */
@keyframes borderPulse {
  0% { box-shadow: 0 0 0px 0px rgba(6, 182, 212, 0.4); }
  50% { box-shadow: 0 0 10px 3px rgba(6, 182, 212, 0.6); }
  100% { box-shadow: 0 0 0px 0px rgba(6, 182, 212, 0.4); }
}
.animate-border-pulse { animation: borderPulse 2s infinite cubic-bezier(0.4, 0, 0.2, 1); }

/* Blob Background Animations */
@keyframes blobFlow1 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  33% { transform: translate(15px, -25px) scale(1.03); opacity: 0.4; }
  66% { transform: translate(-8px, 8px) scale(0.97); opacity: 0.35; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
}
.animate-blob-flow-1 { animation: blobFlow1 10s ease-in-out infinite alternate; }

@keyframes blobFlow2 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  33% { transform: translate(-12px, 20px) scale(0.98); opacity: 0.4; }
  66% { transform: translate(4px, -8px) scale(1.01); opacity: 0.35; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
}
.animate-blob-flow-2 { animation: blobFlow2 12s ease-in-out infinite alternate; }

@keyframes blobFlow3 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
  33% { transform: translate(20px, 8px) scale(1.02); opacity: 0.25; }
  66% { transform: translate(-15px, -15px) scale(0.98); opacity: 0.22; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
}
.animate-blob-flow-3 { animation: blobFlow3 9s ease-in-out infinite alternate; animation-delay: 0.8s; }

@keyframes blobFlow4 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
  33% { transform: translate(-20px, -12px) scale(0.99); opacity: 0.23; }
  66% { transform: translate(12px, 4px) scale(1.03); opacity: 0.21; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
}
.animate-blob-flow-4 { animation: blobFlow4 10s ease-in-out infinite alternate; animation-delay: 0.4s; }

/* 3D Hover Effect for Cards */
.hover\:rotate-y-1:hover { transform: perspective(800px) rotateY(0.5deg); }
.hover\:rotate-x-05:hover { transform: perspective(800px) rotateX(0.25deg); }
.hover\:rotate-y-1.hover\:rotate-x-05:hover {
    transform: perspective(800px) rotateY(0.5deg) rotateX(0.25deg) scale(1.01);
}
</style>