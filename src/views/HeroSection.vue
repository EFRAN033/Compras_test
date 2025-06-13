<template>
  <section
    id="inicio"
    class="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32"
  >
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjEiIGZpbGw9InJnYmEoNCwxMjAsODEsMC4wNSkiLz48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMDAlIiBoZWlnaHQ9IjEwMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"
           style="background-size: 80px; animation: backgroundFloat 20s ease-in-out infinite;"></div>
    </div>

    <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-100/40 to-teal-100/40 blur-2xl animate-[blobSoft_20s_ease-in-out_infinite_alternate]"></div>
    <div class="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-gradient-to-tl from-emerald-100/40 to-teal-100/40 blur-2xl animate-[blobSoft_22s_ease-in-out_infinite_alternate-reverse]"></div>

    <div class="container relative mx-auto px-6">
      <div class="flex flex-col items-center lg:flex-row-reverse lg:gap-16">
        <div class="mb-12 lg:mb-0 lg:w-1/2 relative z-10 opacity-0 animate-[slideInRightGentle_0.8s_ease-out_forwards_0.2s]">
          <div class="relative max-w-lg mx-auto lg:max-w-none">
            <div class="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white transform hover:scale-103 transition-transform duration-500 ease-out animate-[zoomInGentle_0.8s_ease-out_forwards_0.4s]">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 z-10 opacity-75"></div>
              <img
                class="h-auto w-full"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Dashboard de gestión de suministros - Visualización de la eficiencia"
                loading="lazy"
              />
            </div>
            
            <div
              class="absolute -bottom-4 -left-4 hidden rounded-lg bg-white p-4 shadow-lg md:block border-t-3 border-teal-500 opacity-0 animate-[fadeInUpSoft_0.8s_ease-out_forwards_1.0s]"
            >
              <div class="flex items-start">
                <div class="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                  <svg
                    class="h-5 w-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-medium text-teal-600">
                    Mejora Continua
                  </p>
                  <p class="text-xl font-bold text-gray-900 animate-pulseSmall">+87%</p>
                </div>
              </div>
            </div>

            <div
              class="absolute -right-4 -top-4 hidden items-center rounded-lg bg-white px-4 py-3 shadow-lg md:flex border border-emerald-100 opacity-0 animate-[fadeInUpSoft_0.8s_ease-out_forwards_1.2s]"
            >
              <div class="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10">
                <svg
                  class="h-5 w-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="text-xs font-medium text-emerald-600 animate-pulseSmall">CONFÍA EN NOSOTROS</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 lg:pr-10 text-center lg:text-left opacity-0 animate-[slideInLeftGentle_0.8s_ease-out_forwards_0s]">
          <div class="mb-6 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 tracking-wide opacity-0 animate-[fadeInUpSoft_0.8s_ease-out_forwards_0.4s]">
            <span class="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-slow"></span>
            TU CADENA DE SUMINISTRO, SIMPLIFICADA.
          </div>

          <h1 class="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl opacity-0 animate-[fadeInUpSoft_0.8s_ease-out_forwards_0.6s]">
            <span class="relative inline-block">
              <span class="relative bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Desbloquea</span>
            </span> el potencial de tu<br class="hidden md:inline">
            <span class="relative text-gray-800">logística con ProVeo</span>
          </h1>

          <p class="mb-8 text-lg text-gray-600 md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-0 animate-[fadeInUpSoft_0.8s_ease-out_forwards_0.8s]">
            Imagina una cadena de suministro que opera con <span class="font-semibold text-teal-600">fluidez</span> y <span class="font-semibold text-emerald-600">confianza</span>. ProVeo lo hace posible, brindándote la <span class="font-semibold text-green-700">tranquilidad</span> que mereces.
          </p>

          <div class="mb-10 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 justify-center lg:justify-start opacity-0 animate-[fadeInUpSoft_0.8s_ease-out_forwards_1.0s]">
            <router-link
              to="/afiliados"
              class="flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 px-7 py-3 text-lg font-semibold text-white shadow-md transition-all hover:shadow-lg hover:from-teal-600 hover:to-emerald-700 transform hover:-translate-y-0.5 duration-300 ease-out"
            >
              Iniciar tu transformación
              <svg
                class="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </router-link>

            <button
              @click="openVideoModal"
              class="flex items-center justify-center rounded-lg border border-emerald-200 bg-white px-7 py-3 text-lg font-semibold text-emerald-800 transition-all hover:bg-emerald-50 transform hover:-translate-y-0.5 duration-300 ease-out"
            >
              <svg
                class="mr-2 h-5 w-5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
              </svg>
              Ver demo
            </button>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 opacity-0 animate-[fadeInUpSoft_0.8s_ease-out_forwards_1.2s]">
            <div class="relative flex -space-x-3">
              <img
                class="relative z-30 h-10 w-10 rounded-full border-2 border-white shadow-sm"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Usuario satisfecho"
                loading="lazy"
              />
              <img
                class="relative z-20 h-10 w-10 rounded-full border-2 border-white shadow-sm"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Usuario satisfecho"
                loading="lazy"
              />
              <img
                class="relative z-10 h-10 w-10 rounded-full border-2 border-white shadow-sm"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Usuario satisfecho"
                loading="lazy"
              />
              <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-teal-500 text-xs font-bold text-white shadow-sm">
                +2.5K
              </div>
            </div>
            <div class="text-center sm:text-left sm:ml-2">
              <div class="flex items-center justify-center sm:justify-start">
                <div class="flex text-amber-400">
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <span class="ml-2 text-sm font-medium text-gray-600">4.9 (<span class="font-semibold text-gray-800">2.5K+</span> usuarios satisfechos)</span>
              </div>
              <p class="mt-0.5 text-xs text-gray-500">
                La elección de líderes para una gestión sin estrés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isVideoModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" @click.self="closeVideoModal">
        <div class="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          <button @click="closeVideoModal" class="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-gray-300 transition-colors duration-200">
            ×
          </button>
          <iframe
            :src="videoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      isVideoModalOpen: false,
      videoUrl: "https://www.youtube.com/watch?v=bgo9dJB_icw",
    };
  },
  methods: {
    openVideoModal() {
      this.isVideoModalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeVideoModal() {
      this.isVideoModalOpen = false;
      document.body.style.overflow = '';
      this.videoUrl = "";
    },
  },
  watch: {
    isVideoModalOpen(newValue) {
      if (newValue) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  },
  beforeUnmount() {
    document.body.classList.remove('overflow-hidden');
  }
};
</script>

<style>
@keyframes slideInLeftGentle {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRightGentle {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInUpSoft {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomInGentle {
  from {
    transform: scale(0.98);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulseSmall {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.98;
  }
}

@keyframes backgroundFloat {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-5px) translateX(5px);
  }
  50% {
    transform: translateY(0) translateX(0);
  }
  75% {
    transform: translateY(5px) translateX(-5px);
  }
}

@keyframes blobSoft {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate(10px, -10px) rotate(5deg) scale(1.02);
  }
  66% {
    transform: translate(-5px, 5px) rotate(-2deg) scale(0.99);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.shadow-md-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.shadow-lg-soft {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.shadow-xl-soft {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.border-2 { border-width: 2px; }
.border-3 { border-width: 3px; }
.border-4 { border-width: 4px; }
</style>