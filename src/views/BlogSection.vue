<template>
  <section id="blog" class="relative py-20 bg-white overflow-hidden md:py-28">
    <div class="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl animate-aurora-pulse [animation-duration:24s]"></div>
    <div class="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl animate-aurora-pulse [animation-duration:28s] [animation-delay:-14s]"></div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-16 max-w-2xl mx-auto opacity-0 animate-slide-in-up-gentle">
        <p class="text-brand-teal font-semibold mb-3 text-sm uppercase tracking-wider">Nuestro Blog</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Conocimiento que <span class="bg-gradient-to-r from-brand-teal to-brand-emerald-dark bg-clip-text text-transparent text-shadow-brand">Impulsa</span> tu Negocio
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">Descubre artículos, guías y análisis de las últimas tendencias en la gestión de la cadena de suministro.</p>
      </div>

      <div class="relative">
        <div class="md:hidden py-4 -mx-4">
          <div 
            class="flex items-center space-x-6 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-12"
            ref="carouselRef"
            @scroll.passive="handleScroll"
            @mouseenter="pauseAutoScroll"
            @mouseleave="resumeAutoScroll"
          >
            <div 
              v-for="(post, index) in posts"
              :key="post.link"
              class="flex-shrink-0 w-[calc(100%-4rem)] sm:w-80 snap-center transition-all duration-500 ease-out"
              :class="{
                'scale-100 opacity-100 shadow-xl': index === centerIndex,
                'scale-90 opacity-60 blur-[2px]': index !== centerIndex
              }"
            >
              <article class="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full group">
                <div class="relative h-48 overflow-hidden">
                  <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div v-if="post.popular" class="absolute top-3 right-3 bg-gradient-to-r from-brand-teal to-brand-emerald text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md animate-subtle-pulse">
                    Destacado
                  </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                  <div class="flex items-center text-gray-500 text-xs mb-3">
                    <span>{{ post.date }}</span>
                    <span class="mx-2">•</span>
                    <span>{{ post.readTime }} de lectura</span>
                  </div>
                  <h3 class="text-lg font-bold mb-3 text-gray-900 transition-colors group-hover:text-brand-teal-dark flex-grow">{{ post.title }}</h3>
                  <router-link :to="post.link" class="inline-flex items-center text-brand-teal-dark text-sm font-semibold group/link mt-4">
                    Leer más
                    <svg class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  </router-link>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div class="hidden md:grid lg:grid-cols-3 gap-8">
          <article
            v-for="(post, index) in posts"
            :key="post.link"
            :style="{ animationDelay: `${index * 150}ms` }"
            class="group relative rounded-2xl p-1 bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-300 opacity-0 animate-slide-in-up-gentle transition-all duration-300 hover:!opacity-100 lg:group-hover:opacity-70"
          >
            <div class="absolute inset-0 rounded-2xl group-hover:animate-border-pan-slow"
                 style="background-image: linear-gradient(to right, #5eead4, #34d399, #2dd4bf, #34d399, #5eead4); background-size: 400% 400%;">
            </div>
            <div class="relative bg-white rounded-[15px] h-full overflow-hidden">
               <div class="relative h-48 overflow-hidden">
                  <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div v-if="post.popular" class="absolute top-3 right-3 bg-gradient-to-r from-brand-teal to-brand-emerald text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md animate-subtle-pulse">
                    Destacado
                  </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                  <div class="flex items-center text-gray-500 text-xs mb-3">
                    <span>{{ post.date }}</span>
                    <span class="mx-2">•</span>
                    <span>{{ post.readTime }} de lectura</span>
                  </div>
                  <h3 class="text-lg font-bold mb-3 text-gray-900 transition-colors group-hover:text-brand-teal-dark flex-grow">{{ post.title }}</h3>
                  <router-link :to="post.link" class="inline-flex items-center text-brand-teal-dark text-sm font-semibold group/link mt-4">
                    Leer más
                    <svg class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  </router-link>
                </div>
            </div>
          </article>
        </div>
      </div>

      <div class="text-center mt-16 opacity-0 animate-slide-in-up-gentle [animation-delay:500ms]">
        <router-link
          to="/blog"
          class="inline-flex items-center px-8 py-3.5 bg-white border-2 border-brand-teal text-brand-teal-dark rounded-full font-bold text-lg hover:bg-brand-teal hover:text-white hover:border-brand-teal hover:shadow-lg hover:shadow-teal-200/80 hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <span>Ver todos los artículos</span>
          <svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, shallowRef, onMounted, onUnmounted, nextTick } from 'vue';

const posts = shallowRef([
  {
    title: "La Revolución de la IA en la Gestión de Inventarios Modernos",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    date: "10 Jul, 2025", readTime: "8 min", popular: true, link: "/blog/ia-inventarios"
  },
  {
    title: "5 Estrategias Clave para Mitigar Riesgos en Cadenas de Suministro Globales",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    date: "28 Jun, 2025", readTime: "6 min", link: "/blog/riesgos-logisticos"
  },
  {
    title: "Modelos de Abastecimiento Ágiles para Mercados Volátiles",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    date: "15 Jun, 2025", readTime: "10 min", link: "/blog/modelos-agiles"
  },
]);

// --- Lógica del Carrusel Móvil ---
const carouselRef = ref(null);
const centerIndex = ref(0);
let autoScrollInterval = null;
let itemWidth = 0;
let gap = 24; // Corresponde a `space-x-6` (6 * 4px)

const calculateDimensions = () => {
  if (carouselRef.value) {
    const firstItem = carouselRef.value.querySelector('.flex-shrink-0');
    if (firstItem) {
      itemWidth = firstItem.offsetWidth + gap;
    }
  }
};

const handleScroll = () => {
  if (carouselRef.value && itemWidth > 0) {
    const scrollLeft = carouselRef.value.scrollLeft;
    const newIndex = Math.round((scrollLeft + carouselRef.value.offsetWidth / 2 - (itemWidth - gap) / 2) / itemWidth);
    centerIndex.value = Math.max(0, Math.min(posts.value.length - 1, newIndex));
  }
};

const scrollToCenter = (index) => {
  if (carouselRef.value && itemWidth > 0) {
    carouselRef.value.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  }
};

const startAutoScroll = () => {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(() => {
    const nextIndex = (centerIndex.value + 1) % posts.value.length;
    scrollToCenter(nextIndex);
  }, 4000);
};

const pauseAutoScroll = () => clearInterval(autoScrollInterval);
const resumeAutoScroll = () => startAutoScroll();

onMounted(() => {
  nextTick(() => {
    calculateDimensions();
    scrollToCenter(0);
    startAutoScroll();
    window.addEventListener('resize', calculateDimensions);
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateDimensions);
  clearInterval(autoScrollInterval);
});

</script>