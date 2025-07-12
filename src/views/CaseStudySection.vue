<template>
  <section id="casos" class="relative py-20 bg-gradient-to-br from-emerald-50/20 via-white to-white overflow-hidden md:py-32">
    <div class="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl animate-aurora-pulse [animation-duration:23s]"></div>
    <div class="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl animate-aurora-pulse [animation-duration:26s] [animation-delay:-13s]"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div class="md:w-1/2 lg:pr-10 opacity-0 animate-fade-in-left">
          <div class="inline-block mb-6 px-4 py-2 bg-white border border-emerald-200/80 rounded-full shadow-sm opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <span class="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-brand-teal to-brand-emerald-dark bg-clip-text text-transparent">
              Caso de Éxito
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight opacity-0 animate-fade-in-up [animation-delay:300ms]">
            <span class="text-shadow-brand">Reducción del 35%</span><br>en costos logísticos
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-10 opacity-0 animate-fade-in-up [animation-delay:400ms]">
            Transformamos la cadena de suministro de una distribuidora líder en alimentos, mejorando sus entregas a tiempo del 82% al 97% en solo 9 meses.
          </p>

          <div class="grid grid-cols-3 gap-4 mb-12 opacity-0 animate-fade-in-up [animation-delay:500ms]" ref="metricsRef">
            <div class="text-center p-2 bg-white/50 rounded-xl">
              <p class="text-3xl md:text-5xl font-bold text-brand-teal">{{ costReductionDisplay }}%</p>
              <p class="text-gray-500 text-sm mt-2">Reducción de costos</p>
            </div>
            <div class="text-center p-2 bg-white/50 rounded-xl">
              <p class="text-3xl md:text-5xl font-bold text-brand-emerald-dark">{{ onTimeDeliveryDisplay }}%</p>
              <p class="text-gray-500 text-sm mt-2">Entregas a tiempo</p>
            </div>
            <div class="text-center p-2 bg-white/50 rounded-xl">
              <p class="text-3xl md:text-5xl font-bold text-brand-teal">{{ annualSavingsDisplay }}M</p>
              <p class="text-gray-500 text-sm mt-2">Ahorro anual (USD)</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up [animation-delay:600ms]">
            <a href="#" class="group flex items-center justify-center rounded-lg bg-gradient-to-br from-brand-teal to-brand-emerald-dark px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-brand-teal/20 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-1">
              <span>Ver caso completo</span>
              <svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a href="#" class="flex items-center justify-center rounded-lg border-2 border-brand-emerald/80 bg-white/80 px-7 py-3.5 text-lg font-semibold text-brand-teal-dark transition-all duration-300 ease-out hover:bg-white hover:border-brand-emerald hover:shadow-lg hover:shadow-brand-emerald/10 hover:-translate-y-1">
              Saber más
            </a>
          </div>
        </div>

        <div class="hidden md:block md:w-1/2 relative group opacity-0 animate-fade-in-right [animation-delay:200ms]">
          <div class="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white transform transition-transform duration-500 ease-out">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Optimización logística en sector alimenticio"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute top-0 left-0 h-full w-full overflow-hidden rounded-2xl">
                <div class="absolute h-full w-full -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 group-hover:animate-shine-effect"></div>
            </div>
          </div>

          <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-teal to-brand-emerald-dark text-white p-6 rounded-2xl shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:-rotate-3">
            <p class="text-4xl font-bold">+40%</p>
            <p class="text-base font-semibold mt-1">Eficiencia Operativa</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- Lógica para la animación de conteo de números ---

const metricsRef = ref(null);
const costReductionDisplay = ref(0);
const onTimeDeliveryDisplay = ref(0);
const annualSavingsDisplay = ref(0);

const animateCount = (targetRef, start, end, duration, suffix = '') => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    targetRef.value = currentValue;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Usamos Intersection Observer para iniciar la animación solo cuando es visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(costReductionDisplay, 0, 35, 1500);
        animateCount(onTimeDeliveryDisplay, 0, 97, 1800);
        animateCount(annualSavingsDisplay, 0, 15, 2000);
        observer.unobserve(entry.target); // Animamos solo una vez
      }
    });
  },
  {
    threshold: 0.5, // Inicia cuando el 50% del elemento es visible
  }
);

onMounted(() => {
  if (metricsRef.value) {
    observer.observe(metricsRef.value);
  }
});

onUnmounted(() => {
  if (metricsRef.value) {
    observer.unobserve(metricsRef.value);
  }
});
</script>