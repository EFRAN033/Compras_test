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
            {{ category.nombre }} </button>
          
          <button
            v-if="allCategories.length > initialCategoryCount" @click="toggleShowAllCategories"
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
            v-for="item in filteredItems"
            :key="item.id"
            class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative cursor-pointer"
          >
            <div class="relative h-48 sm:h-56 flex items-center justify-center">
              <img :src="getImageUrl(item.image)" :alt="item.name" class="absolute inset-0 w-full h-full object-cover rounded-t-2xl opacity-85" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <span class="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                <i :class="item.icon" class="mr-1.5"></i> {{ item.providerCount }} Proveedores
              </span>
              <span v-if="item.tag" class="absolute top-4 right-4 bg-emerald-500 text-white px-2.5 py-0.5 rounded-full text-xxs font-bold uppercase shadow-sm">
                {{ item.tag }}
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2 leading-snug">{{ item.name }}</h3>
              <p class="text-sm text-gray-600 mb-4 line-clamp-3">{{ item.description }}</p>
              <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                <router-link :to="`/proveedores?item=${item.id}`" class="text-emerald-600 hover:text-emerald-800 font-semibold flex items-center group text-sm">
                  Ver detalle
                  <svg class="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
                <span v-if="item.price" class="text-xs text-gray-500 font-medium">{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredItems.length === 0 && activeCategory !== 'all'" class="text-center mt-20 mb-8 max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">¡Oops! No encontramos ítems para esta categoría.</h3>
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
import axios from 'axios'; // Importar axios

export default {
  name: 'SupplierPage',
  components: {
    Footer
  },
  data() {
    return {
      activeCategory: 'all', // Categoría activa para filtrar
      showAllCategories: false, // Estado para 'Ver más' / 'Ver menos'
      initialCategoryCount: 8, // Número de botones de categoría a mostrar inicialmente

      // CAMBIO IMPORTANTE: categoriesData ahora se llamará allCategories y se llenará desde el backend
      // Se mantiene una entrada para 'all' manualmente si se necesita un botón "Todos"
      allCategories: [
        { id: 'all', nombre: 'Todos', icon: 'fas fa-cubes' }, // Mantener si quieres el botón "Todos"
      ],

      // Nuevos datos: ITEMS ESPECÍFICOS DENTRO DE CADA CATEGORÍA
      // Estos datos deben coincidir con tus productos o una representación de ellos
      // Si los productos se gestionan por proveedor, esta lista podría requerir otra lógica
      itemsData: [
        // Agroindustria
        { id: 'abono', name: 'Abono Orgánico', categoryId: 'agroindustria', description: 'Fertilizantes orgánicos de alta calidad para un crecimiento saludable de tus cultivos.', image: 'abono.png', providerCount: 10, tag: 'Eco', icon: 'fas fa-leaf' },
        { id: 'tierra-cultivo', name: 'Tierra para Cultivo', categoryId: 'agroindustria', description: 'Sustratos y tierras enriquecidas para diversas aplicaciones agrícolas y jardinería.', image: 'tierra.png', providerCount: 8, tag: null, icon: 'fas fa-shovel' },
        { id: 'plantas-semillas', name: 'Plantas y Semillas', categoryId: 'agroindustria', description: 'Variedad de plantas jóvenes, árboles frutales y semillas certificadas para siembra.', image: 'plantas.png', providerCount: 15, tag: 'Novedad', icon: 'fas fa-seedling' },
        { id: 'cereales', name: 'Cereales', categoryId: 'agroindustria', description: 'Granos básicos como maíz, trigo, arroz y otros cereales para la industria alimentaria.', image: 'cereales.png', providerCount: 12, tag: null, icon: 'fas fa-wheat-awn' },
        { id: 'frutas-verduras-frescas', name: 'Frutas y Verduras Frescas', categoryId: 'agroindustria', description: 'Productores directos de frutas y verduras de temporada, frescas y con trazabilidad.', image: 'frutas_verduras.png', providerCount: 20, tag: 'Frescos', icon: 'fas fa-apple-whole' },
        { id: 'maquinaria-agricola', name: 'Maquinaria Agrícola', categoryId: 'agroindustria', description: 'Tractores, arados, cosechadoras y equipos modernos para optimizar tu producción agrícola.', image: 'maquinaria_agricola.png', providerCount: 7, tag: null, icon: 'fas fa-tractor' },

        // Materiales Textiles
        { id: 'algodon', name: 'Algodón Crudo', categoryId: 'textiles', description: 'Algodón sin procesar de diferentes calidades y orígenes para la industria textil.', image: 'algodon.png', providerCount: 5, tag: 'Sostenible', icon: 'fas fa-cotton-plant' },
        { id: 'telas-naturales', name: 'Telas Naturales', categoryId: 'textiles', description: 'Variedad de telas de algodón, lino, seda y lana para confección de alta calidad.', image: 'telas_naturales.png', providerCount: 9, tag: null, icon: 'fas fa-shirt' },
        { id: 'telas-sinteticas', name: 'Telas Sintéticas', categoryId: 'textiles', description: 'Nylon, poliéster, spandex y otras telas sintéticas para prendas deportivas e industriales.', image: 'telas_sinteticas.png', providerCount: 7, tag: 'Tecnológico', icon: 'fas fa-microchip' },
        { id: 'hilos-fibras', name: 'Hilos y Fibras', categoryId: 'textiles', description: 'Hilos de coser, bordar y fibras especiales para diversas aplicaciones textiles.', image: 'hilos.png', providerCount: 6, tag: null, icon: 'fas fa-thread' },

        // Construcción
        { id: 'madera', name: 'Madera de Construcción', categoryId: 'construccion', description: 'Vigas, tablas, contrachapado y todo tipo de madera tratada para tus proyectos.', image: 'madera.png', providerCount: 15, tag: 'Certificada', icon: 'fas fa-tree' },
        { id: 'ladrillos', name: 'Ladrillos y Bloques', categoryId: 'construccion', description: 'Ladrillos de arcilla, bloques de concreto y adobes de alta resistencia para muros.', image: 'ladrillos.png', providerCount: 12, tag: null, icon: 'fas fa-warehouse' },
        { id: 'cemento-hormigon', name: 'Cemento y Hormigón', categoryId: 'construccion', description: 'Sacos de cemento, hormigón premezclado y aditivos para una construcción sólida.', image: 'cemento.png', providerCount: 10, tag: null, icon: 'fas fa-dump-truck' },
        { id: 'acero-construccion', name: 'Acero para Construcción', categoryId: 'construccion', description: 'Varillas, perfiles, mallas y estructuras de acero para refuerzo y soporte.', image: 'acero.png', providerCount: 8, tag: null, icon: 'fas fa-building' },
        { id: 'ceramicos-porcelanatos', name: 'Cerámicos y Porcelanatos', categoryId: 'construccion', description: 'Amplia gama de pisos, revestimientos y baldosas para acabados interiores y exteriores.', image: 'ceramicos.png', providerCount: 18, tag: 'Estilo', icon: 'fas fa-tile-vannes' },
        { id: 'herramientas-construccion', name: 'Herramientas de Construcción', categoryId: 'construccion', description: 'Herramientas manuales, eléctricas y de medición para profesionales y proyectos.', image: 'herramientas_construccion.png', providerCount: 20, tag: null, icon: 'fas fa-tools' },

        // Insumos Industriales
        { id: 'quimicos-industriales', name: 'Químicos Industriales', categoryId: 'insumos-industriales', description: 'Sustancias químicas, solventes y reactivos para procesos de producción.', image: 'quimicos.png', providerCount: 7, tag: 'Seguro', icon: 'fas fa-flask-vial' },
        { id: 'componentes-electronicos', name: 'Componentes Electrónicos', categoryId: 'insumos-industriales', description: 'Chips, placas, resistencias y otros componentes para la fabricación de equipos.', image: 'electronicos.png', providerCount: 9, tag: null, icon: 'fas fa-microchip' },
        { id: 'plasticos-granulados', name: 'Plásticos y Granulados', categoryId: 'insumos-industriales', description: 'Resinas plásticas, masterbatch y granulados para inyección y extrusión.', image: 'plasticos.png', providerCount: 6, tag: null, icon: 'fas fa-cube' },

        // Alimentos y Bebidas
        { id: 'carnes-procesadas', name: 'Carnes Procesadas', categoryId: 'alimentos-bebidas', description: 'Embutidos, fiambres y productos cárnicos de alta calidad para el sector Horeca.', image: 'carnes_procesadas.png', providerCount: 10, tag: 'Gourmet', icon: 'fas fa-bacon' },
        { id: 'pescados-mariscos', name: 'Pescados y Mariscos', categoryId: 'alimentos-bebidas', description: 'Pescado fresco, congelado y mariscos de origen sostenible.', image: 'pescados.png', providerCount: 8, tag: 'Del Mar', icon: 'fas fa-fish-fins' },
        { id: 'lacteos-derivados', name: 'Lácteos y Derivados', categoryId: 'alimentos-bebidas', description: 'Leche, quesos, yogures y otros productos lácteos frescos.', image: 'lacteos.png', providerCount: 12, tag: null, icon: 'fas fa-cheese' },
        { id: 'panaderia-pasteleria', name: 'Panadería y Pastelería', categoryId: 'alimentos-bebidas', description: 'Pan, pasteles, bizcochos y productos de repostería artesanales e industriales.', image: 'panaderia.png', providerCount: 15, tag: null, icon: 'fas fa-bread-slice' },
        { id: 'bebidas-no-alcoholicas', name: 'Bebidas No Alcohólicas', categoryId: 'alimentos-bebidas', description: 'Agua, jugos, gaseosas, tés y otras bebidas refrescantes.', image: 'bebidas.png', providerCount: 18, tag: null, icon: 'fas fa-glass-water' },

        // Envases y Embalajes
        { id: 'cajas-carton', name: 'Cajas de Cartón', categoryId: 'envases-embalajes', description: 'Cajas de cartón corrugado y plegable para transporte y almacenamiento.', image: 'cajas_carton.png', providerCount: 7, tag: null, icon: 'fas fa-box' },
        { id: 'bolsas-plasticas', name: 'Bolsas Plásticas', categoryId: 'envases-embalajes', description: 'Bolsas de diferentes tamaños y usos, incluyendo opciones biodegradables.', image: 'bolsas_plasticas.png', providerCount: 5, tag: null, icon: 'fas fa-bag-shopping' },
        { id: 'botellas-envases-vidrio', name: 'Botellas y Envases de Vidrio', categoryId: 'envases-embalajes', description: 'Envases de vidrio para bebidas, alimentos y productos cosméticos.', image: 'botellas_vidrio.png', providerCount: 4, tag: null, icon: 'fas fa-bottle-droplet' },
        { id: 'film-estirable', name: 'Film Estirable (Stretch Film)', categoryId: 'envases-embalajes', description: 'Film para paletizar y proteger mercancías durante el transporte.', image: 'film_estirable.png', providerCount: 3, tag: null, icon: 'fas fa-tape' },

        // Maquinaria y Equipo (ejemplos adicionales para este caso)
        { id: 'maquinaria-produccion', name: 'Maquinaria de Producción', categoryId: 'maquinaria-equipo', description: 'Líneas de ensamblaje, máquinas CNC, robots industriales.', image: 'maquinaria_produccion.png', providerCount: 8, tag: 'Automatización', icon: 'fas fa-robot' },
        { id: 'equipos-laboratorio', name: 'Equipos de Laboratorio', categoryId: 'maquinaria-equipo', description: 'Instrumentos de precisión, microscopios, centrífugas para investigación y control.', image: 'equipos_laboratorio.png', providerCount: 5, tag: null, icon: 'fas fa-microscope' },

        // Servicios Logísticos
        { id: 'fletes-nacionales', name: 'Fletes Nacionales', categoryId: 'servicios-logistica', description: 'Servicios de transporte terrestre de carga a nivel nacional.', image: 'fletes_nacionales.png', providerCount: 6, tag: null, icon: 'fas fa-truck-fast' },
        { id: 'almacenamiento-distribucion', name: 'Almacenamiento y Distribución', categoryId: 'servicios-logistica', description: 'Centros de almacenamiento, gestión de inventarios y distribución eficiente.', image: 'almacenamiento.png', providerCount: 4, tag: null, icon: 'fas fa-boxes-stacked' },

        // Servicios de Consultoría
        { id: 'consultoria-marketing', name: 'Consultoría de Marketing', categoryId: 'servicios-consultoria', description: 'Estrategias de marketing digital, branding y posicionamiento de marca.', image: 'consultoria_marketing.png', providerCount: 3, tag: 'Digital', icon: 'fas fa-bullhorn' },
        { id: 'consultoria-legal', name: 'Consultoría Legal', categoryId: 'servicios-consultoria', description: 'Asesoría en derecho corporativo, laboral, fiscal y propiedad intelectual.', image: 'consultoria_legal.png', providerCount: 5, tag: null, icon: 'fas fa-gavel' },

        // Suministros de Oficina
        { id: 'papeleria', name: 'Papelería y Útiles', categoryId: 'suministros-oficina', description: 'Resmas de papel, cuadernos, lapiceros, carpetas y material de escritura.', image: 'papeleria.png', providerCount: 10, tag: null, icon: 'fas fa-paperclip' },
        { id: 'mobiliario-oficina', name: 'Mobiliario de Oficina', categoryId: 'suministros-oficina', description: 'Escritorios, sillas ergonómicas, archivadores y estanterías.', image: 'mobiliario_oficina.png', providerCount: 8, tag: null, icon: 'fas fa-chair' },

        // Tecnología
        { id: 'desarrollo-software', name: 'Desarrollo de Software', categoryId: 'tecnologia', description: 'Creación de aplicaciones a medida, sistemas de gestión y soluciones empresariales.', image: 'desarrollo_software.png', providerCount: 15, tag: 'Innovador', icon: 'fas fa-laptop-code' },
        { id: 'ciberseguridad', name: 'Ciberseguridad', categoryId: 'tecnologia', description: 'Protección de datos, auditorías de seguridad y soluciones contra amenazas cibernéticas.', image: 'ciberseguridad.png', providerCount: 10, tag: 'Seguro', icon: 'fas fa-shield-alt' },

        // Transporte (complementa logística, pero más enfocado en el movimiento)
        { id: 'transporte-carga-pesada', name: 'Transporte de Carga Pesada', categoryId: 'transporte', description: 'Servicios especializados en el traslado de cargas voluminosas y pesadas.', image: 'transporte_carga.png', providerCount: 7, tag: null, icon: 'fas fa-truck-monster' },
        { id: 'transporte-refrigerado', name: 'Transporte Refrigerado', categoryId: 'transporte', description: 'Flota de vehículos equipados para el transporte de productos que requieren cadena de frío.', image: 'transporte_refrigerado.png', providerCount: 5, tag: 'Frío', icon: 'fas fa-snowflake' },

        // Salud y Seguridad Industrial
        { id: 'equipos-proteccion-personal', name: 'Equipos de Protección Personal (EPP)', categoryId: 'salud-seguridad', description: 'Cascos, guantes, gafas, calzado de seguridad y ropa protectora.', image: 'epp.png', providerCount: 12, tag: null, icon: 'fas fa-helmet-safety' },
        { id: 'capacitacion-seguridad', name: 'Capacitación en Seguridad', categoryId: 'salud-seguridad', description: 'Programas de formación y certificaciones en seguridad laboral y primeros auxilios.', image: 'capacitacion_seguridad.png', providerCount: 6, tag: null, icon: 'fas fa-book-reader' },

        // Limpieza y Mantenimiento
        { id: 'productos-limpieza', name: 'Productos de Limpieza Industrial', categoryId: 'limpieza-mantenimiento', description: 'Detergentes, desinfectantes, ceras y equipos para limpieza profunda.', image: 'productos_limpieza.png', providerCount: 9, tag: null, icon: 'fas fa-spray-can-sparkles' },
        { id: 'servicios-mantenimiento-edificios', name: 'Servicios de Mantenimiento de Edificios', categoryId: 'limpieza-mantenimiento', description: 'Mantenimiento preventivo y correctivo de instalaciones y sistemas.', image: 'mantenimiento_edificios.png', providerCount: 7, tag: null, icon: 'fas fa-screwdriver-wrench' },

        // Publicidad y Marketing
        { id: 'diseno-grafico', name: 'Diseño Gráfico', categoryId: 'publicidad-marketing', description: 'Diseño de logotipos, material corporativo, folletos y campañas visuales.', image: 'diseno_grafico.png', providerCount: 8, tag: 'Creativo', icon: 'fas fa-palette' },
        { id: 'marketing-digital', name: 'Marketing Digital', categoryId: 'publicidad-marketing', description: 'Estrategias SEO, SEM, gestión de redes sociales y campañas online.', image: 'marketing_digital.png', providerCount: 10, tag: 'Online', icon: 'fas fa-chart-line' },

        // Materias Primas
        { id: 'metales', name: 'Metales Ferrosos y No Ferrosos', categoryId: 'materias-primas', description: 'Hierro, aluminio, cobre, zinc en diversas presentaciones para la industria.', image: 'metales.png', providerCount: 15, tag: null, icon: 'fas fa-fire-burner' },
        { id: 'quimicos-basicos', name: 'Químicos Básicos', categoryId: 'materias-primas', description: 'Ácidos, bases, sales y compuestos químicos esenciales para procesos industriales.', image: 'quimicos_basicos.png', providerCount: 9, tag: null, icon: 'fas fa-vial' },
        { id: 'minerales-no-metalicos', name: 'Minerales No Metálicos', categoryId: 'materias-primas', description: 'Arcilla, arena, cal y otros minerales para construcción e industria.', image: 'minerales.png', providerCount: 7, tag: null, icon: 'fas fa-gem' },
      ]
    }
  },
  computed: {
    visibleCategoriesButtons() {
      // Excluye el botón "Todos" de la lógica de "Ver más/menos" si está presente
      const categoriesWithoutAll = this.allCategories.filter(cat => cat.id !== 'all');
      if (this.showAllCategories) {
        return categoriesWithoutAll;
      }
      return categoriesWithoutAll.slice(0, this.initialCategoryCount);
    },
    filteredItems() {
      if (this.activeCategory === 'all') {
        // Lógica de "destacados" o los primeros si no hay suficientes destacados
        const featuredItems = this.itemsData.filter(item => ['algodon', 'abono', 'madera', 'desarrollo-software', 'carnes-procesadas', 'cajas-carton', 'maquinaria-produccion', 'fletes-nacionales', 'diseno-grafico'].includes(item.id));
        return featuredItems.length > 0 ? featuredItems : this.itemsData.slice(0, 9);
      }
      return this.itemsData.filter(item => item.categoryId === this.activeCategory);
    }
  },
  async created() { // CAMBIO IMPORTANTE: Añadir async para await
    await this.fetchCategoriesFromBackend(); // NUEVO: Llamar a la función para obtener categorías
  },
  methods: {
    // NUEVO MÉTODO: Para obtener categorías del backend
    async fetchCategoriesFromBackend() {
      try {
        const response = await axios.get('http://localhost:8000/categorias'); // Tu endpoint de categorías
        // Añadir las categorías del backend después del botón "Todos"
        // Asegúrate de que el formato de los objetos de categoría sea compatible (id, nombre)
        this.allCategories = [{ id: 'all', nombre: 'Todos' }].concat(response.data);
        // Puedes añadir iconos predefinidos si los tienes, o manejar la ausencia.
        // Por ejemplo, si tu DB no tiene 'icon', puedes añadirlo aquí si es necesario para el v-for
        // this.allCategories = [{ id: 'all', nombre: 'Todos', icon: 'fas fa-cubes' }].concat(
        //   response.data.map(cat => ({ ...cat, icon: 'fas fa-tag' })) // Añade un icono genérico
        // );
      } catch (error) {
        console.error('Error al cargar las categorías desde el backend:', error.response ? error.response.data : error.message);
        // Considera una alerta o mensaje al usuario si las categorías no se cargan
      }
    },
    getImageUrl(imageName) {
      // Asumiendo que tus imágenes están en la carpeta 'static/images' de tu backend
      // y se sirven a través de '/static/'
      // Esto también puede necesitar ajuste si item.image ya es una URL completa
      if (imageName && (imageName.startsWith('http://') || imageName.startsWith('https://'))) {
          return imageName; // Si ya es una URL completa
      }
      return `http://localhost:8000/static/images/${imageName}`;
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