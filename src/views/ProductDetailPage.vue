<template>
    <div class="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 p-4">
      <header class="bg-white shadow-md py-3 sticky top-0 z-50 overflow-hidden mb-4">
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
            class="flex items-center absolute left-1/2 transform -translate-x-1/2"
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
    
          <div class="w-20"></div> 
        </div>
      </header>
    
      <div v-if="loading" class="flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-xl border border-gray-200">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-emerald-500 border-opacity-25 border-t-emerald-500 mb-4"></div>
        <p class="text-lg text-gray-600">Cargando detalles del producto...</p>
      </div>
    
      <div v-else-if="error" class="text-center bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mt-10">
        <p class="text-xl text-red-600 font-semibold mb-4">{{ error }}</p>
        <button @click="$router.go(-1)" class="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300">Volver al Catálogo</button>
      </div>
    
      <div v-else-if="product" class="container mx-auto max-w-6xl px-4 py-6 bg-white rounded-2xl shadow-xl border border-gray-200">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div class="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 flex items-center justify-center min-h-[300px]">
            <img 
              :src="getImageUrl(product.image_url)" 
              :alt="product.nombre" 
              class="w-full h-auto object-contain max-h-[500px] rounded-xl"
              @error="onImageError"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <span v-if="product.estado === 'Activo'" class="absolute top-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-full text-sm font-bold uppercase shadow-lg">
              Activo
            </span>
            <span v-else-if="product.estado === 'Borrador'" class="absolute top-3 right-3 bg-yellow-500 text-gray-800 px-2.5 py-1 rounded-full text-sm font-bold uppercase shadow-lg">
              Borrador
            </span>
            <span v-else-if="product.estado === 'Inactivo'" class="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-sm font-bold uppercase shadow-lg">
              Inactivo
            </span>
          </div>
    
          <div class="space-y-5">
            <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">{{ product.nombre }}</h1>
            <p class="text-2xl font-bold text-emerald-700">${{ product.precio ? product.precio.toFixed(2) : 'N/A' }}</p>
            
            <div>
              <h2 class="text-lg font-semibold text-gray-800 mb-1.5">Descripción del Producto</h2>
              <p class="text-gray-700 leading-relaxed text-sm">{{ product.descripcion || 'Este producto no cuenta con una descripción detallada.' }}</p>
            </div>
  
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Información General</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                  <div class="flex items-center"><span class="font-semibold text-gray-900 w-28 flex-shrink-0">Categoría:</span> <span class="flex-grow">{{ getCategoryName(product.categoria_id) }}</span></div>
                  <div class="flex items-center"><span class="font-semibold text-gray-900 w-28 flex-shrink-0">SKU:</span> <span class="flex-grow">{{ product.sku || 'N/A' }}</span></div>
                  <div class="flex items-center"><span class="font-semibold text-gray-900 w-28 flex-shrink-0">Stock Disponible:</span> <span class="flex-grow">{{ product.stock }} {{ product.unidad_medida }}</span></div>
                  <div class="flex items-center"><span class="font-semibold text-gray-900 w-28 flex-shrink-0">Pedido Mínimo:</span> <span class="flex-grow">{{ product.cantidad_minima_pedido }} {{ product.unidad_medida }}</span></div>
                  <div v-if="product.peso_kg" class="flex items-center"><span class="font-semibold text-gray-900 w-28 flex-shrink-0">Peso:</span> <span class="flex-grow">{{ product.peso_kg }} Kg</span></div>
                  <div v-if="product.codigo_barras" class="flex items-center"><span class="font-semibold text-gray-900 w-28 flex-shrink-0">Código de Barras:</span> <span class="flex-grow">{{ product.codigo_barras }}</span></div>
                  <div v-if="product.fecha_caducidad" class="flex items-center"><span class="font-semibold text-gray-900 w-28 flex-shrink-0">Fecha de Caducidad:</span> <span class="flex-grow">{{ formatDate(product.fecha_caducidad) }}</span></div>
                  <div v-if="product.tiempo_procesamiento_dias !== null" class="flex items-center"><span class="font-semibold text-gray-900 w-32 flex-shrink-0">Procesamiento:</span> <span class="flex-grow">{{ product.tiempo_procesamiento_dias }} días</span></div>
              </div>
            </div>
    
            <div v-if="product.dimension_largo_cm || product.dimension_ancho_cm || product.dimension_alto_cm" class="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm text-sm text-gray-700">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Dimensiones</h3>
              <span>{{ product.dimension_largo_cm || 'N/A' }} cm (Largo) x {{ product.dimension_ancho_cm || 'N/A' }} cm (Ancho) x {{ product.dimension_alto_cm || 'N/A' }} cm (Alto)</span>
            </div>
    
            <div v-if="product.precios_por_volumen && product.precios_por_volumen.length > 0">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Precios por Volumen:</h3>
              <ul class="space-y-3">
                <li v-for="(vp, index) in product.precios_por_volumen" :key="index" class="bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-sm shadow-sm">
                  A partir de <span class="font-bold text-emerald-800">{{ vp.min_quantity }}</span> unidades:
                  <span class="font-bold text-emerald-700 text-md">${{ vp.price.toFixed(2) }}</span> por unidad.
                  <span v-if="vp.max_quantity"> (hasta <span class="font-bold">{{ vp.max_quantity }}</span> unidades)</span>
                </li>
              </ul>
            </div>
            <div v-else>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Precios por Volumen:</h3>
              <p class="text-gray-600 text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">No hay precios por volumen definidos para este producto.</p>
            </div>
    
            <div class="mt-8 flex flex-col sm:flex-row gap-3">
              <button @click="fillInventory" class="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors duration-300 flex-grow text-base transform hover:-translate-y-0.5">
                Llenar inventario
              </button>
              <button class="px-6 py-3 bg-white text-emerald-700 border border-emerald-600 font-semibold rounded-lg shadow-md hover:bg-emerald-50 transition-colors duration-300 flex-grow text-base transform hover:-translate-y-0.5">
                Añadir a Cotización
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center text-gray-600 mt-10 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <p class="text-xl font-semibold">No se encontró el producto.</p>
        <button @click="$router.go(-1)" class="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300">Volver al Catálogo</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProductDetailPage',
    data() {
      return {
        product: null,
        loading: true,
        error: null,
        categories: [], 
      };
    },
    async created() {
      await this.fetchCategories(); 
      await this.fetchProductDetails(); 
    },
    methods: {
      async fetchCategories() {
        try {
          const response = await axios.get('http://localhost:8000/categorias');
          this.categories = response.data;
        } catch (error) {
          console.error('Error al cargar categorías:', error.response ? error.response.data : error.message);
        }
      },
      async fetchProductDetails() {
        try {
          const productId = this.$route.params.id;
          if (!productId) {
            this.error = "ID de producto no proporcionado en la URL.";
            this.loading = false;
            return;
          }
    
          const response = await axios.get(`http://localhost:8000/productos/${productId}`);
          this.product = response.data;
  
          if (this.product) {
            if (typeof this.product.precio === 'string') {
              this.product.precio = parseFloat(this.product.precio);
            }
            if (this.product.precios_por_volumen) {
              this.product.precios_por_volumen = this.product.precios_por_volumen.map(vp => ({
                ...vp,
                price: parseFloat(vp.price)
              }));
            }
            if (this.product.peso_kg && typeof this.product.peso_kg === 'string') {
              this.product.peso_kg = parseFloat(this.product.peso_kg);
            }
            if (this.product.dimension_largo_cm && typeof this.product.dimension_largo_cm === 'string') {
              this.product.dimension_largo_cm = parseFloat(this.product.dimension_largo_cm);
            }
            if (this.product.dimension_ancho_cm && typeof this.product.dimension_ancho_cm === 'string') {
              this.product.dimension_ancho_cm = parseFloat(this.product.dimension_ancho_cm);
            }
            if (this.product.dimension_alto_cm && typeof this.product.dimension_alto_cm === 'string') {
              this.product.dimension_alto_cm = parseFloat(this.product.dimension_alto_cm);
            }
          }
    
        } catch (err) {
          if (err.response && err.response.status === 404) {
            this.error = "Producto no encontrado. Es posible que el ID sea incorrecto o el producto no esté disponible públicamente.";
          } else {
            this.error = "Hubo un error al cargar los detalles del producto. Por favor, inténtalo de nuevo más tarde.";
            console.error("Error fetching product details:", err.response ? err.response.data : err.message);
          }
        } finally {
          this.loading = false;
        }
      },
      getImageUrl(image_url) {
        if (image_url) {
          return image_url;
        }
        return 'https://via.placeholder.com/600x400?text=Imagen+No+Disponible'; 
      },
      onImageError(event) {
        event.target.src = 'https://via.placeholder.com/600x400?text=Error+al+cargar+imagen';
        console.error('Error al cargar la imagen del producto:', event.target.src);
      },
      getCategoryName(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.nombre : (categoryId || 'N/A');
      },
      formatDate(dateString) {
        if (!dateString) return 'N/A';
        try {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(dateString).toLocaleDateString('es-ES', options);
        } catch (e) {
          console.error("Error al formatear fecha:", dateString, e);
          return dateString;
        }
      },
      fillInventory() {
          // Implementa aquí la lógica para "Llenar inventario".
          // Esto podría ser:
          // 1. Redirigir al usuario a la página de gestión de productos del proveedor
          //    y preseleccionar este producto para editar su stock.
          // 2. Abrir un modal o un formulario rápido para que el proveedor ingrese la cantidad.
          // Como este es un componente de "detalle público" (para afiliados), este botón
          // probablemente solo lo verían los proveedores si ingresan a esta URL.
          // Una opción simple es redirigirlos a su panel de productos.
          
          // Ejemplo de redirección al panel de productos del proveedor
          // Suponiendo que la ruta de gestión de productos es '/dashboard-proveedor/productos'
          this.$router.push({ 
              name: 'ProductsManagement', // Nombre de la ruta ProductsManagement
              // Puedes pasar un query param o un estado para indicar qué producto se quiere "llenar"
              query: { productIdToEdit: this.product.id } 
          });
          alert('Redirigiendo a la gestión de inventario para este producto.');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  .text-shadow-provo {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes button-pulse {
    0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(6, 182, 212, 0); }
    100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
  }
  
  .animate-button-pulse:hover {
    animation: button-pulse 1s infinite;
  }
  </style>