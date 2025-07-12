<template>
  <section
    id="inicio"
    class="relative overflow-hidden bg-brand-bg pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32"
  >
    <div class="absolute inset-0 opacity-5 animate-background-float" 
         style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjEuMiIgZmlsbD0icmdiYSgwLCAwLCAwLCAwLjUpIi8+PC9kZWZzPjxyZWN0IHdpZHRoPSIjEwMDAlIiBoZWlnaHQ9IjEwMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+'); background-size: 60px;">
    </div>

    <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-emerald/30 to-brand-teal/30 blur-3xl animate-aurora-pulse"></div>
    <div class="absolute -left-24 -bottom-12 h-72 w-72 rounded-full bg-gradient-to-tl from-brand-emerald/30 to-brand-teal/30 blur-3xl animate-aurora-pulse [animation-delay:-10s]"></div>

    <div class="container relative mx-auto px-6">
      <div class="flex flex-col items-center lg:flex-row-reverse lg:gap-16">
        
        <div class="mb-12 lg:mb-0 lg:w-1/2 relative z-10 opacity-0 animate-fade-in-right [animation-delay:200ms]">
          <div class="relative max-w-lg mx-auto lg:max-w-none group">
            <div class="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white transform transition-transform duration-500 ease-out group-hover:scale-105 animate-zoom-in [animation-delay:400ms]">
              <img
                class="h-auto w-full"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Dashboard de gestión de suministros"
                loading="lazy"
              />
              <div class="absolute top-0 left-0 h-full w-full overflow-hidden rounded-2xl">
                  <div class="absolute h-full w-full -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 group-hover:animate-shine-effect"></div>
              </div>
            </div>

            <div class="absolute -bottom-4 -left-4 hidden rounded-lg bg-white/70 p-4 shadow-lg md:block border-t-[3px] border-brand-teal backdrop-blur-soft opacity-0 animate-fade-in-up [animation-delay:1000ms] transition-transform duration-300 group-hover:-translate-y-1">
              <div class="flex items-start">
                <div class="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10">
                  <svg class="h-5 w-5 text-brand-teal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <p class="text-xs font-medium text-brand-teal-dark">Mejora Continua</p>
                  <p class="text-xl font-bold text-gray-900 animate-subtle-pulse">+87%</p>
                </div>
              </div>
            </div>

            <div class="absolute -right-4 -top-4 hidden items-center rounded-lg bg-white/70 px-4 py-3 shadow-lg md:flex border border-brand-emerald/20 backdrop-blur-soft opacity-0 animate-fade-in-up [animation-delay:1200ms] transition-transform duration-300 group-hover:translate-y-1">
              <div class="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-emerald/10">
                <svg class="h-5 w-5 text-brand-emerald-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p class="text-sm font-semibold text-brand-emerald-dark animate-subtle-pulse [animation-delay:-1s]">Confianza Verificada</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 lg:pr-10 text-center lg:text-left opacity-0 animate-fade-in-left">
          <div class="mb-6 inline-flex items-center rounded-full bg-brand-emerald/10 px-4 py-1.5 text-sm font-semibold text-brand-emerald-dark tracking-wide opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <span class="mr-2.5 flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald-dark"></span>
            </span>
            TU CADENA DE SUMINISTRO, SIMPLIFICADA
          </div>

          <h1 class="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl opacity-0 animate-fade-in-up [animation-delay:600ms]">
            <span class="bg-gradient-to-r from-brand-teal-dark to-brand-emerald-dark bg-clip-text text-transparent text-shadow-brand">Desbloquea</span> el potencial de tu logística con ProVeo
          </h1>

          <p class="mb-8 text-lg text-gray-600 md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:800ms]">
            Imagina una cadena de suministro que opera con <span class="font-semibold text-brand-teal">fluidez</span> y <span class="font-semibold text-brand-emerald-dark">confianza</span>. ProVeo lo hace posible, brindándote la tranquilidad que mereces.
          </p>

          <div class="mb-10 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center lg:justify-start opacity-0 animate-fade-in-up [animation-delay:1000ms]">
            <router-link
              to="/afiliados"
              class="group flex items-center justify-center rounded-lg bg-gradient-to-br from-brand-teal to-brand-emerald-dark px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-brand-teal/20 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-1"
            >
              <span>Iniciar tu transformación</span>
              <svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>

            <button
              @click="openVideoModal"
              class="group flex items-center justify-center rounded-lg border border-brand-emerald/30 bg-white/80 px-7 py-3.5 text-lg font-semibold text-brand-teal-dark transition-all duration-300 ease-out hover:bg-white hover:border-brand-emerald/50 hover:shadow-lg hover:shadow-brand-emerald/10 hover:-translate-y-1"
            >
              <svg class="mr-2 h-5 w-5 text-brand-teal transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l8.21-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
              <span>Ver demo</span>
            </button>
          </div>

          <client-logo-carousel class="opacity-0 animate-fade-in-up [animation-delay:1200ms]" />
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isVideoModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-soft" @click.self="closeVideoModal">
        <div class="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-zoom-in [animation-duration:300ms]">
          <button @click="closeVideoModal" class="absolute top-2 right-3 text-white/70 text-4xl font-bold z-50 hover:text-white transition-colors duration-200">
            ×
          </button>
          <iframe
            v-if="videoUrl"
            :src="videoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ClientLogoCarousel from './ClientLogoCarousel.vue';

const isVideoModalOpen = ref(false);
const videoUrl = ref('');

const openVideoModal = () => {
  videoUrl.value = "http://googleusercontent.com/youtube.com/2"; // Ejemplo de URL, ¡cámbiala!
  isVideoModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeVideoModal = () => {
  isVideoModalOpen.value = false;
  document.body.style.overflow = '';
  setTimeout(() => {
    videoUrl.value = '';
  }, 300);
};
</script>