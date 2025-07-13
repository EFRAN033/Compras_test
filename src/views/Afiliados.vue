<template>
  <div class="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
    <header class="bg-white shadow-md py-3 sticky top-0 z-50 overflow-hidden">
      <div class="container mx-auto px-6 flex justify-between items-center relative">
        <button
          @click="$router.go(-1)"
          class="group relative flex items-center p-2 rounded-full text-emerald-600 border border-emerald-200 bg-white
                 hover:bg-emerald-50 hover:border-emerald-400 transform hover:scale-105 transition-all duration-300 ease-out
                 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Volver a la página anterior"
        >
          <span class="absolute inset-0 block rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style="background: radial-gradient(circle at center, rgba(6,182,212,0.3) 0%, transparent 70%);"></span>
          <svg class="w-5 h-5 z-10 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span class="ml-1.5 font-medium text-sm hidden sm:inline-block z-10">Volver</span>
        </button>

        <router-link
          to="/"
          class="flex items-center absolute left-1/2 transform -translate-x-1/2 animate-fade-in-down"
          aria-label="Ir a la página de inicio de ProVeo"
        >
          <span class="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent
                       relative inline-block perspective-1000
                       hover:scale-105 transition-transform duration-300 ease-out"
          >
            <span class="absolute inset-0 -top-0.5 left-0.5 text-shadow-provo opacity-20" aria-hidden="true">ProVeo</span>
            ProVeo
          </span>
        </router-link>

        <div class="flex items-center space-x-4">
          <router-link
            to="/proveedores"
            class="hidden md:block px-5 py-2 text-sm font-medium
                   text-gray-700 border border-gray-200 rounded-full
                   hover:bg-gray-50 hover:border-gray-300
                   transition-all duration-300 transform hover:scale-105"
          >
            Explorar Proveedores
          </router-link>

          <router-link
            to="/login"
            class="hidden md:block px-5 py-2 text-sm font-medium
                   text-emerald-600 border border-emerald-600 rounded-full
                   hover:bg-emerald-600 hover:text-white hover:border-emerald-600
                   transition-all duration-300 transform hover:scale-105
                   hover:animate-button-pulse"
          >
            Iniciar sesión
          </router-link>

          <router-link
            to="/registro-proveedor"
            class="hidden lg:block px-5 py-2 text-sm font-medium
                   bg-emerald-500 text-white rounded-full shadow-md
                   hover:bg-emerald-600 transition-colors duration-300 transform hover:scale-105"
          >
            ¡Quiero ser Proveedor!
          </router-link>
        </div>
      </div>
    </header>

    <section class="relative pt-56 pb-48 bg-gradient-to-br from-white via-emerald-50 to-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <svg class="absolute bottom-[-40px] left-0 w-full h-auto text-emerald-100 opacity-75" viewBox="0 0 1440 320">
          <path fill="currentColor" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,202.7C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span class="inline-block px-5 py-2 text-xs font-bold text-emerald-800 bg-emerald-200 rounded-full mb-5 uppercase tracking-widest shadow-lg transform hover:scale-105 transition-transform duration-300">
            EL PUENTE HACIA LA EXCELENCIA
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Descubre <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Proveedores de Élite</span> para tu Negocio
          </h1>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Accede a nuestra red exclusiva de proveedores verificados que garantizan calidad superior, entrega eficiente y precios competitivos para impulsar tu crecimiento.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-5">
            <router-link to="/proveedores" class="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-bounce-once">
              Explorar Catálogo <span class="ml-2">&rarr;</span>
            </router-link>
            <router-link to="/registro-proveedor" class="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl border border-gray-200 shadow-md hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              ¡Quiero ser Proveedor!
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-40 bg-gray-50 relative" ref="categorySection">
      <div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('https://images.unsplash.com/photo-1542831371-29b0f74f9457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');"></div>
      <div class="container mx-auto px-8 relative z-10">
        <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-16">Explora por <span class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Categoría</span></h2>

        <div class="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          <button
            @click="filterByCategory('all', $event)"
            :class="[
              'px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ease-in-out',
              'shadow-sm hover:shadow-md border border-gray-200 hover:border-emerald-300',
              'bg-white/90 hover:bg-white',
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105 border-transparent ring-2 ring-emerald-400 ring-offset-2 ring-offset-gray-50'
                : 'text-gray-700 transform hover:scale-102'
            ]"
          >
            Todos
          </button>

          <button
            v-for="category in visibleCategoriesButtons"
            :key="category.id"
            @click="filterByCategory(category.id, $event)"
            :class="[
              'px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ease-in-out',
              'shadow-sm hover:shadow-md border border-gray-200 hover:border-emerald-300',
              'bg-white/90 hover:bg-white',
              activeCategory === category.id
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105 border-transparent ring-2 ring-emerald-400 ring-offset-2 ring-offset-gray-50'
                : 'text-gray-700 transform hover:scale-102'
            ]"
          >
            {{ category.nombre }}
          </button>
          
          <button
            v-if="allCategories.length > initialCategoryCount"
            @click="toggleShowAllCategories"
            class="px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ease-in-out
                   shadow-sm hover:shadow-md border border-gray-200 hover:border-emerald-300
                   bg-white/90 hover:bg-white text-gray-700 transform hover:scale-102"
          >
            {{ showAllCategories ? 'Ver menos' : 'Ver más categorías' }}
            <i :class="[showAllCategories ? 'fas fa-chevron-up' : 'fas fa-chevron-down', 'ml-2 text-sm']"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative cursor-pointer"
          >
            <div class="relative h-48 sm:h-56 flex items-center justify-center">
              <img :src="getImageUrl(product.image_url)" :alt="product.nombre" class="absolute inset-0 w-full h-full object-cover rounded-t-2xl opacity-85" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <span class="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                {{ product.stock }} en Stock
              </span>
              <span v-if="product.estado === 'Activo'" class="absolute top-4 right-4 bg-emerald-500 text-white px-2.5 py-0.5 rounded-full text-xxs font-bold uppercase shadow-sm">
                Activo
              </span>
              <span v-else-if="product.estado === 'Borrador'" class="absolute top-4 right-4 bg-yellow-500 text-gray-800 px-2.5 py-0.5 rounded-full text-xxs font-bold uppercase shadow-sm">
                Borrador
              </span>
              <span v-else-if="product.estado === 'Inactivo'" class="absolute top-4 right-4 bg-red-500 text-white px-2.5 py-0.5 rounded-full text-xxs font-bold uppercase shadow-sm">
                Inactivo
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug">{{ product.nombre }}</h3>
              <p class="text-sm text-gray-600 mb-4 line-clamp-3">{{ product.descripcion }}</p>
              <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                <router-link :to="`/producto/${product.id}`" class="text-emerald-600 hover:text-emerald-800 font-semibold flex items-center group text-sm">
                  Ver detalle
                  <svg class="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
                <span v-if="product.precio" class="text-xs text-gray-500 font-medium">${{ product.precio.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0 && activeCategory !== 'all'" class="text-center mt-20 mb-8 max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">¡Oops! No encontramos productos para esta categoría.</h3>
          <p class="text-lg text-gray-600 mb-8">
            Estamos trabajando para añadir más opciones pronto. Por favor, selecciona otra categoría o contáctanos.
          </p>
        </div>

        <div class="text-center mt-20 mb-8 max-w-3xl mx-auto">
            <h3 class="text-3xl font-bold text-gray-800 mb-4">¿No encuentras lo que buscas?</h3>
            <p class="text-lg text-gray-600 mb-8">
                Nuestro equipo está listo para ayudarte a conectar con el proveedor perfecto.
            </p>
            <button class="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-colors duration-300 transform hover:-translate-y-1">
                Contactar a un Especialista
            </button>
        </div>

      </div>
    </section>

    <section class="py-48 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-4xl font-extrabold mb-8 drop-shadow-lg">¿Listo para expandir tu alcance?</h2>
        <p class="text-lg mb-10 max-w-3xl mx-auto opacity-90">
          Únete a nuestra red exclusiva de proveedores y conecta con cientos de compradores calificados con capacidad de compra verificada.
          Es la plataforma ideal para escalar tu negocio.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-5 mb-16">
          <router-link
            to="/registro-proveedor"
            class="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            ¡Registra tu Empresa!
          </router-link>
          <button class="px-8 py-4 bg-white/20 text-white font-bold rounded-xl border border-white/30 shadow-lg hover:bg-white/30 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
            Descubre los Beneficios
          </button>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white/15 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div class="w-14 h-14 bg-white/25 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <h3 class="font-bold text-2xl mb-3">Visibilidad Sin Precedentes</h3>
            <p class="text-white/90 text-base leading-relaxed">Multiplica tu exposición a cientos de empresas compradoras activas y listas para negociar en nuestra plataforma.</p>
          </div>

          <div class="bg-white/15 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div class="w-14 h-14 bg-white/25 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <h3 class="font-bold text-2xl mb-3">Pagos Seguros y Puntuales</h3>
            <p class="text-white/90 text-base leading-relaxed">Olvídate de las preocupaciones por la cobranza. Nuestro sistema garantiza transacciones seguras y pagos a tiempo.</p>
          </div>

          <div class="bg-white/15 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div class="w-14 h-14 bg-white/25 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <h3 class="font-bold text-2xl mb-3">Cero Comisiones Ocultas</h3>
            <p class="text-white/90 text-base leading-relaxed">Transparencia total. Solo una tarifa plana mensual, sin porcentajes sobre tus ventas. Maximiza tus ganancias.</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import axios from 'axios';

export default {
  name: 'AfiliadosPage', // Cambiado de 'SupplierPage'
  components: {
    Footer
  },
  data() {
    return {
      activeCategory: 'all',
      showAllCategories: false,
      initialCategoryCount: 8,
      allCategories: [
        { id: 'all', nombre: 'Todos' },
      ],
      productsData: [], // CAMBIO IMPORTANTE: Almacenará los productos de la API
      // itemsData: [], // Esta propiedad ya no es necesaria si todo viene de la API, la puedes eliminar
    }
  },
  computed: {
    visibleCategoriesButtons() {
      const categoriesWithoutAll = this.allCategories.filter(cat => cat.id !== 'all');
      if (this.showAllCategories) {
        return categoriesWithoutAll;
      }
      return categoriesWithoutAll.slice(0, this.initialCategoryCount);
    },
    filteredProducts() { // CAMBIO IMPORTANTE: Ahora filtra `productsData`
      let filtered = this.productsData;

      if (this.activeCategory !== 'all') {
        filtered = filtered.filter(product => product.categoria_id === this.activeCategory);
      }
      return filtered;
    }
  },
  async created() {
    await this.fetchCategoriesFromBackend();
    await this.fetchProductsData(); // Llama a la nueva función para obtener productos
  },
  methods: {
    async fetchCategoriesFromBackend() {
      try {
        const response = await axios.get(import.meta.env.VITE_APP_API_BASE_URL + '/categorias');
        // Asumiendo que las categorías de la DB solo tienen `id` y `nombre`.
        // Si necesitas iconos, tendrías que añadirlos manualmente o desde la DB si los almacenas allí.
        this.allCategories = [{ id: 'all', nombre: 'Todos' }].concat(response.data);
      } catch (error) {
        console.error('Error al cargar las categorías desde el backend:', error.response ? error.response.data : error.message);
      }
    },
    async fetchProductsData() { // NUEVO MÉTODO para obtener todos los productos activos
      try {
        const response = await axios.get(import.meta.env.VITE_APP_API_BASE_URL + '/productos');
        this.productsData = response.data;
        // console.log("Productos cargados para afiliados:", this.productsData);
      } catch (error) {
        console.error('Error al cargar productos para afiliados:', error.response ? error.response.data : error.message);
        alert('Hubo un error al cargar los productos del catálogo.');
      }
    },
    getImageUrl(image_url) {
      // Este método ahora simplemente retorna la URL de la imagen.
      // Tu backend ya debe proporcionar la URL completa (ej. http://localhost:8000/static/images/...).
      if (image_url) {
        return image_url;
      }
      // Fallback si no hay image_url
      return 'https://via.placeholder.com/300x200?text=No+Image';
    },
    filterByCategory(categoryId, event) {
      if (event) {
        event.preventDefault();
      }
      this.activeCategory = categoryId;
      this.$nextTick(() => {
        const categorySection = this.$refs.categorySection;
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    toggleShowAllCategories() {
      this.showAllCategories = !this.showAllCategories;
      this.$nextTick(() => {
        const categorySection = this.$refs.categorySection;
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}
</script>

<style scoped>
/* Add any specific styles here if needed */
.text-shadow-provo {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.bg-pattern {
  background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M36 34.281V28h2.096l4.24 4.24-2.193 2.194L36 34.281zm-6-2.121v8.485h2.121l4.243-4.243L32.121 30zM24 28v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L24 28zm6 2.121v8.485h2.121l-4.243-4.243L30 30.121zM18 22v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L18 22zm6 2.121v8.485h2.121l-4.243-4.243L24 24.121zM12 16v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L12 16zm6 2.121v8.485h2.121l-4.243-4.243L18 18.121zM6 10v6.281L3.904 14.185l-4.24-4.24L-.096 7.755 6 10zm6 2.121v8.485h2.121L9.904-35.622 12-35.879zM6-38v6.281L3.904-35.815l-4.24-4.24L-.096-41.245 6-38zm6 2.121v8.485h2.121L9.904-35.622 12-35.879zM0-44v6.281L-2.096-41.815l-4.24-4.24L-.096-47.245 0-44zm6 2.121v8.485h2.121L3.904-41.622 6-41.879zM-6-2v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L-6-2zM0 0.121v8.485h2.121l-4.243-4.243L0 0.121zM-12-8v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L-12-8zM-6-5.879v8.485h2.121l-4.243-4.243L-6-5.879zM-18-14v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L-18-14zM-12-11.879v8.485h2.121l-4.243-4.243L-12-11.879zM-24-20v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L-24-20zM-18-17.879v8.485h2.121l-4.243-4.243L-18-17.879zM-30-26v6.281l-2.096-2.096-4.24-4.24 2.193-2.194L-30-26zM-24-23.879v8.485h2.121l-4.243-4.243L-24-23.879z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
}

@keyframes button-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(6, 182, 212, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0);
  }
}

.animate-button-pulse:hover {
  animation: button-pulse 1s infinite;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.7s ease-out forwards;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out forwards;
}

@keyframes bounce-once {
  0%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-8px);
  }
  40% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-4px);
  }
  80% {
    transform: translateY(0);
  }
}

.animate-bounce-once {
  animation: bounce-once 1.2s ease-in-out;
}
</style>