<template>
  <section id="blog" class="relative py-16 bg-white overflow-hidden">
    <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-100/30 blur-3xl"></div>
    <div class="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl"></div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-12 max-w-2xl mx-auto animate-slide-in-bottom">
        <p class="text-emerald-600 font-medium mb-3 text-sm uppercase tracking-wider">Blog especializado</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Optimiza tu cadena de suministro</h2>
        <p class="text-gray-600">Conoce las últimas tendencias en gestión logística</p>
      </div>

      <div class="relative">
        <div class="md:hidden overflow-hidden py-4">
          <div 
            class="flex space-x-4 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            ref="carousel"
            @scroll="handleScroll"
          >
            <div 
              v-for="(post, index) in posts"
              :key="index"
              class="flex-shrink-0 w-[calc(100%-100px)] sm:w-80 transition-all duration-300"
              :class="{
                'scale-90 opacity-80': !isCenter(index),
                'scale-100 shadow-lg': isCenter(index)
              }"
              :style="{
                transform: isCenter(index) ? 'scale(1)' : 'scale(0.9)',
                opacity: isCenter(index) ? '1' : '0.8'
              }"
            >
              <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full hover:border-emerald-100 group">
                <div class="relative h-48 overflow-hidden">
                  <img
                    :src="post.image"
                    :alt="post.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div v-if="post.popular" class="absolute top-3 right-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Destacado
                  </div>
                </div>
                
                <div class="p-5">
                  <div class="flex items-center text-gray-500 text-xs mb-3">
                    <span>{{ post.date }}</span>
                    <span class="mx-1">•</span>
                    <span>{{ post.readTime }}</span>
                  </div>
                  
                  <h3 class="text-lg font-bold mb-3 text-gray-900 group-hover:text-emerald-700 transition-colors">{{ post.title }}</h3>
                  <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
                  
                  <router-link :to="post.link" class="text-emerald-600 text-sm font-medium hover:underline flex items-center group">
                    Leer más
                    <svg class="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden md:grid md:grid-cols-3 gap-6">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-emerald-100 group"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-if="post.popular" class="absolute top-3 right-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                Destacado
              </div>
            </div>
            
            <div class="p-5">
              <div class="flex items-center text-gray-500 text-xs mb-3">
                <span>{{ post.date }}</span>
                <span class="mx-1">•</span>
                <span>{{ post.readTime }}</span>
              </div>
              
              <h3 class="text-lg font-bold mb-3 text-gray-900 group-hover:text-emerald-700 transition-colors">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
              
              <router-link :to="post.link" class="text-emerald-600 text-sm font-medium hover:underline flex items-center group">
                Leer más
                <svg class="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-10 animate-slide-in-bottom">
        <router-link
          to="/afiliados"
          class="inline-flex items-center px-6 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-full text-sm font-medium hover:bg-emerald-50 transition-colors group"
        >
          Ver todos los artículos
          <svg class="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompactBlogSection",
  data() {
    return {
      posts: [
        {
          title: "IA en gestión de inventarios",
          excerpt: "Cómo implementar inteligencia artificial para optimizar tus compras.",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "15 Jun 2023",
          readTime: "8 min",
          popular: true,
          link: "/blog/ia-en-gestion-de-inventarios" // Enlace para cada artículo
        },
        {
          title: "Gestión de riesgos logísticos",
          excerpt: "Metodologías para mitigar riesgos en cadenas globales.",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "28 May 2023",
          readTime: "6 min",
          link: "/blog/gestion-de-riesgos-logisticos"
        },
        {
          title: "Modelos de abastecimiento",
          excerpt: "Estrategias para mercados volátiles sin perder eficiencia.",
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "12 May 2023",
          readTime: "10 min",
          link: "/blog/modelos-de-abastecimiento"
        },
      ],
      centerIndex: 0,
      carouselWidth: 0,
      itemWidth: 0
    };
  },
  mounted() {
    this.calculateDimensions();
    window.addEventListener('resize', this.calculateDimensions);

    setInterval(() => {
      this.centerIndex = (this.centerIndex + 1) % this.posts.length;
      this.scrollToCenter();
    }, 3000);
  },
  beforeUnmount() { 
    window.removeEventListener('resize', this.calculateDimensions);
  },
  methods: {
    calculateDimensions() {
      if (this.$refs.carousel) {
        this.carouselWidth = this.$refs.carousel.offsetWidth;
        this.itemWidth = this.$refs.carousel.querySelector('.flex-shrink-0').offsetWidth; 
      }
    },
    handleScroll() {
      if (this.$refs.carousel && this.itemWidth > 0) {
        const scrollLeft = this.$refs.carousel.scrollLeft;
        this.centerIndex = Math.round(scrollLeft / this.itemWidth);
      }
    },
    isCenter(index) {
      return index === this.centerIndex;
    },
    scrollToCenter() {
      if (this.$refs.carousel && this.itemWidth > 0) {
        this.$refs.carousel.scrollTo({
          left: this.centerIndex * this.itemWidth,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
.transition-shadow {
  transition: box-shadow 0.3s ease;
}
.transition-colors {
  transition: background-color 0.3s ease, color 0.3s ease;
}
.transition-transform {
  transition: transform 0.5s ease;
}

/* Estilos para el carrusel */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.snap-x {
  scroll-snap-type: x mandatory;
}

.scale-100 {
  transform: scale(1);
  z-index: 10;
}
.scale-90 {
  transform: scale(0.9);
  z-index: 1;
}

@keyframes slideInBottom {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-in-bottom {
  animation: slideInBottom 0.6s ease-out forwards;
}
</style>