<template>
  <section id="blog" class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Encabezado compacto -->
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="text-blue-600 font-medium mb-3 text-sm uppercase tracking-wider">Blog especializado</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Optimiza tu cadena de suministro</h2>
        <p class="text-gray-600">Conoce las últimas tendencias en gestión logística</p>
      </div>

      <!-- Tarjetas compactas -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
        >
          <!-- Imagen -->
          <div class="relative h-48">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
            <div v-if="post.popular" class="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Destacado
            </div>
          </div>
          
          <!-- Contenido -->
          <div class="p-5">
            <div class="flex items-center text-gray-500 text-xs mb-3">
              <span>{{ post.date }}</span>
              <span class="mx-1">•</span>
              <span>{{ post.readTime }}</span>
            </div>
            
            <h3 class="text-lg font-bold mb-3 text-gray-900">{{ post.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
            
            <a href="#" class="text-blue-600 text-sm font-medium hover:underline flex items-center">
              Leer más
              <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA compacto -->
      <div class="text-center mt-10">
        <a
          href="#"
          class="inline-flex items-center px-6 py-2.5 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
        >
          Ver todos los artículos
          <svg class="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
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
        },
        {
          title: "Gestión de riesgos logísticos",
          excerpt: "Metodologías para mitigar riesgos en cadenas globales.",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "28 May 2023",
          readTime: "6 min",
        },
        {
          title: "Modelos de abastecimiento",
          excerpt: "Estrategias para mercados volátiles sin perder eficiencia.",
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "12 May 2023",
          readTime: "10 min",
        },
      ],
    };
  },
};
</script>

<style scoped>
.transition-shadow {
  transition: box-shadow 0.2s ease;
}
.transition-colors {
  transition: background-color 0.2s ease, color 0.2s ease;
}
</style>