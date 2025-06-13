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
            to="/login"
            class="hidden md:block px-5 py-2 text-sm font-medium
                   text-emerald-600 border border-emerald-600 rounded-full
                   hover:bg-emerald-600 hover:text-white hover:border-emerald-600
                   transition-all duration-300 transform hover:scale-105
                   hover:animate-button-pulse"
          >
            Iniciar sesión
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
            TU NEXO CON LA EXCELENCIA
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Descubre <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Proveedores de Élite</span> para tu Negocio
          </h1>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Accede a nuestra red exclusiva de **proveedores verificados** que garantizan calidad superior, entrega eficiente y precios competitivos para impulsar tu crecimiento.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-5">
            <button class="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-bounce-once">
              Explorar Catálogo <span class="ml-2">&rarr;</span>
            </button>
            <button class="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl border border-gray-200 shadow-md hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              ¡Quiero ser Proveedor!
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-40 bg-gray-50 relative"> <div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('https://images.unsplash.com/photo-1542831371-29b0f74f9457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');"></div>
      <div class="container mx-auto px-8 relative z-10">
        <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-16">Explora por <span class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Categoría</span></h2>
        
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          <button
            v-for="category in visibleCategories"
            :key="category.id"
            @click="filterByCategory(category.id)"
            :class="[
              'px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ease-in-out',
              'shadow-sm hover:shadow-md border border-gray-200 hover:border-emerald-300',
              'bg-white/90 hover:bg-white',
              activeCategory === category.id
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105 border-transparent ring-2 ring-emerald-400 ring-offset-2 ring-offset-gray-50'
                : 'text-gray-700 transform hover:scale-102'
            ]"
          >
            {{ category.name }}
          </button>
          <button
            v-if="categories.length > initialCategoryCount"
            @click="toggleShowAllCategories"
            class="px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ease-in-out
                   shadow-sm hover:shadow-md border border-gray-200 hover:border-emerald-300
                   bg-white/90 hover:bg-white text-gray-700 transform hover:scale-102"
          >
            {{ showAllCategories ? 'Ver menos' : 'Ver más categorías' }}
            <i :class="[showAllCategories ? 'fas fa-chevron-up' : 'fas fa-chevron-down', 'ml-2 text-sm']"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"> <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative cursor-pointer"> <div class="relative h-48 sm:h-56 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center"> <img src="@/assets/imagenes/todo.png" alt="Todos los proveedores" class="absolute inset-0 w-full h-full object-cover rounded-t-2xl opacity-85" /> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> <span class="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md"> <i class="fas fa-cubes mr-1.5"></i> 72 Proveedores
              </span>
              <span class="absolute top-4 right-4 bg-white text-purple-700 px-2.5 py-0.5 rounded-full text-xxs font-bold uppercase shadow-sm">Completo</span> </div>
            <div class="p-6"> <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug">Acceso Total a Proveedores</h3> <p class="text-sm text-gray-600 mb-4 line-clamp-3">Explora nuestro vasto universo de proveedores verificados en todas las industrias y categorías. Tu solución integral para cualquier necesidad de negocio.</p> <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                <router-link to="/proveedores" class="text-emerald-600 hover:text-emerald-800 font-semibold flex items-center group text-sm"> Ver directorio
                  <svg class="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative cursor-pointer">
            <div class="relative h-48 sm:h-56 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
              <img src="@/assets/imagenes/textil.png" alt="Materiales textiles" class="absolute inset-0 w-full h-full object-cover rounded-t-2xl opacity-85" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <span class="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                <i class="fas fa-socks mr-1.5"></i> 24 Proveedores
              </span>
              <span class="absolute top-4 right-4 bg-yellow-500 text-white px-2.5 py-0.5 rounded-full text-xxs font-bold flex items-center shadow-sm">
                <svg class="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg> Nuevos
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug">Innovación en Materiales Textiles</h3>
              <p class="text-sm text-gray-600 mb-4 line-clamp-3">Descubre telas y materiales de primera calidad, incluyendo opciones orgánicas y sostenibles, con certificación de origen para tu tranquilidad.</p>
              <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                <router-link to="/textiles" class="text-emerald-600 hover:text-emerald-800 font-semibold flex items-center group text-sm">
                  Explorar proveedores
                  <svg class="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
                <span class="text-xs text-gray-500 font-medium">Desde S/15/unidad</span> </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative cursor-pointer">
            <div class="relative h-48 sm:h-56 flex items-center justify-center">
              <img src="@/assets/imagenes/insumo.png" alt="Insumos Industriales" class="w-full h-full object-cover rounded-t-2xl opacity-85" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <span class="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                <i class="fas fa-cogs mr-1.5"></i> 18 Proveedores
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug">Suministros Industriales Clave</h3>
              <p class="text-sm text-gray-600 mb-4 line-clamp-3">Encuentra todo lo esencial para mantener tu producción en marcha: hilos, botones, cremalleras y soluciones especializadas.</p>
              <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                <router-link to="/insumos" class="text-emerald-600 hover:text-emerald-800 font-semibold flex items-center group text-sm">
                  Ver catálogo completo
                  <svg class="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
                <span class="text-xs text-gray-500 font-medium">Desde S/8/unidad</span>
              </div>
            </div>
          </div>
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

export default {
  name: 'SupplierPage',
  components: {
    Footer
  },
  data() {
    return {
      activeCategory: 'all',
      showAllCategories: false, // New state to control visibility
      initialCategoryCount: 8, // How many categories to show initially
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'agroindustria', name: 'Agroindustria' },
        { id: 'alimentos-bebidas', name: 'Alimentos y Bebidas' },
        { id: 'construccion', name: 'Construcción' },
        { id: 'envases-embalajes', name: 'Envases y Embalajes' },
        { id: 'maquinaria-equipo', name: 'Maquinaria y Equipo' },
        { id: 'prendas', name: 'Textiles y Confecciones' },
        { id: 'servicios-logistica', name: 'Servicios Logísticos' },
        { id: 'servicios-consultoria', name: 'Servicios de Consultoría' },
        { id: 'suministros-oficina', name: 'Suministros de Oficina' },
        { id: 'tecnologia', name: 'Tecnología' },
        { id: 'transporte', name: 'Transporte' },
        { id: 'salud-seguridad', name: 'Salud y Seguridad Industrial' },
        { id: 'limpieza-mantenimiento', name: 'Limpieza y Mantenimiento' },
        { id: 'publicidad-marketing', name: 'Publicidad y Marketing' },
        { id: 'materias-primas', name: 'Materias Primas' },
      ]
    }
  },
  computed: {
    visibleCategories() {
      // Show only a subset or all categories based on 'showAllCategories'
      return this.showAllCategories ? this.categories : this.categories.slice(0, this.initialCategoryCount);
    }
  },
  methods: {
    filterByCategory(categoryId) {
      this.activeCategory = categoryId;
      // In a real application, you'd fetch/filter suppliers here
      console.log('Filtrar por categoría:', categoryId);
    },
    toggleShowAllCategories() {
      this.showAllCategories = !this.showAllCategories;
    }
  }
}
</script>

<style scoped>
/* Existing styles */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fadeInScale 0.8s ease-out forwards;
}

@keyframes bounceOnce {
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

.animate-bounce-once:hover {
  animation: bounceOnce 0.8s ease-in-out;
}

.backdrop-blur-lg {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.backdrop-blur-md {
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* Added for smaller blur on cards if needed, but not explicitly used here */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}


.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23FFFFFF' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* Refined shadow classes for cards */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
}

.text-shadow-provo {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes fadeInDown {
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
  animation: fadeInDown 0.6s ease-out forwards;
}

@keyframes buttonPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

.hover\:animate-button-pulse:hover {
  animation: buttonPulse 0.5s ease-in-out infinite;
}

/* Custom utility for extra small text */
.text-xxs {
  font-size: 0.65rem; /* ~10.4px */
  line-height: 0.8rem; /* ~12.8px */
}

/* Line clamping for description */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}
</style>