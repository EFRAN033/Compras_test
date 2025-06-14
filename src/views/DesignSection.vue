<template>
  <section id="innovacion" class="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50/40 to-white overflow-hidden">
    <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl animate-blob-flow-long-1"></div>
    <div class="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl animate-blob-flow-long-2"></div>
    <div class="absolute top-1/3 left-1/4 h-56 w-56 rounded-full bg-blue-100/20 blur-3xl animate-blob-flow-long-3 hidden lg:block"></div>

    <div class="container mx-auto px-6 sm:px-12 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div class="md:w-1/2 md:pr-8">
          <span class="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-teal-100 to-emerald-100 text-emerald-700 rounded-full text-sm md:text-base font-bold uppercase tracking-wider border border-emerald-200 animate-fade-in-down-delay">
            INNOVACIÓN SOSTENIBLE
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight animate-fade-in-up-delay delay-200">
            <span class="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Tecnología Inteligente</span> que redefine el futuro logístico
          </h2>
          <p class="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed animate-fade-in-up-delay delay-300">
            Nuestra plataforma integra inteligencia artificial de vanguardia, análisis predictivo avanzado y automatización robótica para ofrecer una solución integral que eleva la eficiencia de tu cadena de suministro a un nivel sin precedentes.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 ease-out-back hover:shadow-lg hover:translate-y-[-5px] hover:scale-[1.02] animate-feature-fade-in"
              :style="{ 'animation-delay': `${0.4 + index * 0.1}s` }"
            >
              <div class="flex items-start mb-4">
                <div class="bg-gradient-to-r from-teal-100/50 to-emerald-50/50 p-3.5 rounded-lg mr-4 flex-shrink-0 shadow-sm">
                  <i :class="feature.icon" class="text-emerald-600 text-xl md:text-2xl animate-icon-pulse"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-1">{{ feature.title }}</h3>
                  <p class="text-gray-500 text-sm">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 md:gap-6 animate-fade-in-up-delay delay-800">
            <router-link
              to="/registro-afiliado"
              class="group px-7 md:px-9 py-3.5 md:py-4.5 bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-bold rounded-full text-base md:text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
            >
              Regístrate Gratis
              <svg class="ml-2 md:ml-3 inline h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </router-link>
            <a
              href="#"
              class="px-7 md:px-9 py-3.5 md:py-4.5 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full text-base md:text-lg hover:bg-emerald-50 transition-colors duration-300 transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
            >
              Saber más
            </a>
          </div>
        </div>

        <div class="hidden md:block md:w-1/2 relative animate-fade-in-right-big delay-500">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Smart Purchasing System"
            class="rounded-3xl shadow-xl w-full border-4 border-gray-100 transition-transform duration-700 ease-out-quart hover:scale-[1.01] hover:shadow-2xl"
          />
          <div class="absolute -bottom-10 -right-10 bg-gradient-to-r from-teal-600 to-emerald-700 text-white px-8 py-5 rounded-3xl shadow-2xl animate-badge-pop-large transform-gpu will-change-transform">
            <p class="text-4xl lg:text-5xl font-extrabold">+28%</p>
            <p class="text-base font-medium mt-1">Crecimiento Anual</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InnovationSection", // Nombre del componente Vue
  data() {
    return {
      features: [
        {
          icon: "fas fa-brain", // Requiere FontAwesome (o similar)
          title: "IA Predictiva",
          description: "Anticipa demandas y optimiza inventarios para evitar desabastecimientos.",
        },
        {
          icon: "fas fa-robot",
          title: "Automatización Inteligente",
          description: "Reduce errores manuales, acelera procesos y libera a tu equipo.",
        },
        {
          icon: "fas fa-network-wired",
          title: "Integración Total",
          description: "Conecta sin fricciones todos tus sistemas y fuentes de datos existentes.",
        },
        {
          icon: "fas fa-shield-alt",
          title: "Seguridad Reforzada",
          description: "Protege tus datos más sensibles con protocolos de seguridad de élite.",
        },
      ],
    };
  },
  // Si usas Vue 3, beforeDestroy() debe ser beforeUnmount()
  // Si no tienes lógica de montaje/desmontaje, puedes omitir estas funciones.
  // mounted() {
  //   // Código que se ejecuta cuando el componente se monta
  // },
  // beforeUnmount() {
  //   // Código que se ejecuta antes de que el componente se desmonte
  // },
};
</script>

<style scoped>
/*
  ESTILOS TAILWIND CSS Y ANIMACIONES KEYFRAMES
  Asegúrate de que Tailwind CSS esté configurado en tu proyecto.
  Estas animaciones son CSS puro y no requieren librerías JS adicionales.
*/

/* Base Transitions & Shadows */
.transition-all { transition: all 0.3s ease-in-out; }
.transition-transform { transition: transform 0.3s ease-in-out; }
.transition-colors { transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out; }
.shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }

/* Custom Easing Functions */
.ease-out-back { transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); } /* Para un ligero efecto de "overshoot" */
.ease-out-quart { transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); }

/* --- Animaciones de Título de Sección y Eslogan --- */
@keyframes fadeInDownDelay {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down-delay {
  animation: fadeInDownDelay 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.1s; /* Retraso sutil para el eslogan */
}

@keyframes fadeInUpDelay {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up-delay {
  animation: fadeInUpDelay 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* --- Animación de Entrada de Tarjetas de Características --- */
@keyframes featureFadeIn {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-feature-fade-in {
  animation: featureFadeIn 0.6s ease-out-back forwards;
  /* el retraso se establece en línea en el template para escalonamiento */
}

/* --- Animación de Entrada de Imagen (más prominente) --- */
@keyframes fadeInRightBig {
  from { opacity: 0; transform: translateX(100px) scale(0.9); }
  to { opacity: 1; transform: translateX(0) scale(1); }
}
.animate-fade-in-right-big {
  animation: fadeInRightBig 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; /* Aceleración suave */
}

/* --- Animación de Insignia "+28% Crecimiento" --- */
@keyframes badgePopLarge {
  0% { transform: scale(0.6) rotateX(-90deg) translateY(50px); opacity: 0; }
  60% { transform: scale(1.1) rotateX(10deg) translateY(-5px); opacity: 1; }
  100% { transform: scale(1) rotateX(0deg) translateY(0); opacity: 1; }
}
.animate-badge-pop-large {
  animation: badgePopLarge 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  animation-delay: 1.2s; /* Aparece después de que la imagen se haya asentado */
}

/* --- Pulso de Iconos dentro de las Tarjetas de Características --- */
@keyframes iconPulse {
  0% { transform: scale(0.9); opacity: 0.7; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.7; }
}
.animate-icon-pulse {
  animation: iconPulse 2s ease-in-out infinite alternate;
}

/* --- Animaciones de Fondo Blob (más largas, flujo más orgánico) --- */
@keyframes blobFlowLong1 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  25% { transform: translate(30px, -40px) scale(1.05); opacity: 0.4; }
  50% { transform: translate(-20px, 20px) scale(0.98); opacity: 0.35; }
  75% { transform: translate(10px, -10px) scale(1.02); opacity: 0.42; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
}
.animate-blob-flow-long-1 { animation: blobFlowLong1 18s ease-in-out infinite alternate; }

@keyframes blobFlowLong2 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  25% { transform: translate(-25px, 35px) scale(0.97); opacity: 0.4; }
  50% { transform: translate(15px, -15px) scale(1.03); opacity: 0.35; }
  75% { transform: translate(-10px, 5px) scale(0.99); opacity: 0.42; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
}
.animate-blob-flow-long-2 { animation: blobFlowLong2 20s ease-in-out infinite alternate; animation-delay: 1s; }

@keyframes blobFlowLong3 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
  25% { transform: translate(40px, 10px) scale(1.02); opacity: 0.25; }
  50% { transform: translate(-30px, -20px) scale(0.96); opacity: 0.22; }
  75% { transform: translate(20px, -5px) scale(1.01); opacity: 0.24; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
}
.animate-blob-flow-long-3 { animation: blobFlowLong3 16s ease-in-out infinite alternate; animation-delay: 0.5s; }

/* Clases de utilidad para combinar efectos hover, específicamente para inclinación 3D */
.transform-gpu {
  transform-style: preserve-3d;
}
.will-change-transform { will-change: transform; }

/* Sobreescribe las transiciones por defecto de Tailwind si es necesario para efectos específicos */
.hover\:translate-y-[-5px]:hover {
  transform: translateY(-5px);
}
.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02);
}
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem); /* Ajusta según el ml-2/ml-3 de tu SVG */
}
</style>