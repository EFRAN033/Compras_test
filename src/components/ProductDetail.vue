<template>
    <div class="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <header class="bg-white shadow-md py-3 sticky top-0 z-50">
        <div class="container mx-auto px-6 flex justify-between items-center">
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
              to="/afiliados"
              class="hidden md:block px-5 py-2 text-sm font-medium
                     text-gray-700 border border-gray-200 rounded-full
                     hover:bg-gray-50 hover:border-gray-300
                     transition-all duration-300 transform hover:scale-105"
            >
              Explorar Productos
            </router-link>
  
            <router-link
              to="/login"
              class="hidden md:block px-5 py-2 text-sm font-medium
                     text-emerald-600 border border-emerald-600 rounded-full
                     hover:bg-emerald-600 hover:text-white hover:border-emerald-600
                     transition-all duration-300 transform hover:scale-105"
            >
              Iniciar sesión
            </router-link>
          </div>
        </div>
      </header>
  
      <main class="container mx-auto px-6 py-16">
        <div v-if="product" class="bg-white rounded-3xl shadow-xl overflow-hidden md:flex animate-fade-in-up">
          <div class="md:w-1/2 p-8 flex flex-col justify-center items-center relative">
            <img :src="getImageUrl(product.image)" :alt="product.name" class="w-full h-80 object-cover rounded-xl shadow-lg mb-6 transform hover:scale-102 transition-transform duration-300" />
            <div class="text-center">
              <h1 class="text-4xl font-extrabold text-gray-900 mb-3">{{ product.name }}</h1>
              <p class="text-lg text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex items-center justify-center text-gray-500 text-sm mb-4">
                <i :class="product.icon" class="mr-2 text-emerald-600 text-xl"></i>
                <span>Categoría: {{ getCategoryName(product.categoryId) }}</span>
              </div>
              <div class="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full inline-flex items-center text-sm font-semibold shadow-md">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L9.586 12l-2.293 2.293a1 1 0 001.414 1.414L10 13.414l2.293 2.293a1 1 0 001.414-1.414L10.414 12l2.293-2.293a1 1 0 00-1.414-1.414L10 10.586 8.707 9.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                <span>{{ product.providerCount }} Proveedores Disponibles</span>
              </div>
            </div>
          </div>
  
          <div class="md:w-1/2 p-8 bg-emerald-50">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 border-b pb-4 border-emerald-200">Más Detalles del Producto</h2>
  
            <div class="space-y-6 text-gray-700 mb-10">
              <div>
                <h3 class="font-semibold text-xl mb-2 text-emerald-700">Características Principales:</h3>
                <ul class="list-disc list-inside space-y-2 text-base leading-relaxed">
                  <li>**Calidad Premium:** Seleccionamos solo los mejores productos verificados.</li>
                  <li>**Amplia Variedad:** Encuentra diversas opciones para tus necesidades.</li>
                  <li>**Entrega Eficiente:** Logística optimizada para recibir tu pedido a tiempo.</li>
                  <li>**Precios Competitivos:** Accede a las mejores ofertas del mercado.</li>
                  <li v-if="product.tag">**Etiqueta Especial:** <span class="font-bold text-emerald-600">{{ product.tag }}</span></li>
                  <li v-if="product.price">**Precio Estimado:** <span class="font-bold text-emerald-600">{{ product.price }}</span></li>
                </ul>
              </div>
  
              <div>
                <h3 class="font-semibold text-xl mb-2 text-emerald-700">Beneficios para tu Negocio:</h3>
                <p class="text-base leading-relaxed">
                  Adquirir este producto a través de ProVeo te asegura no solo la calidad, sino también la **confianza** y el **soporte** de nuestra red de proveedores verificados. Simplifica tu cadena de suministro y enfócate en el crecimiento de tu empresa.
                </p>
              </div>
            </div>
  
            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                @click="handleAcquireClick"
                class="flex-1 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl shadow-lg
                       hover:shadow-xl hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Contactar para Adquirir
                <i class="ml-2 fas fa-handshake"></i>
              </button>
              <router-link
                to="/afiliados"
                class="flex-1 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl border border-gray-200 shadow-md
                       hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
              >
                Explorar Más Productos
              </router-link>
            </div>
  
            <p class="text-center text-sm text-gray-500 mt-6">
              Al hacer clic en "Contactar para Adquirir", serás redirigido a una sección donde podrás enviar una consulta directa al proveedor.
            </p>
          </div>
        </div>
        <div v-else class="text-center py-20">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
          <p class="text-lg text-gray-600 mb-8">Parece que el producto que buscas no está disponible o la URL es incorrecta.</p>
          <router-link to="/afiliados" class="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-md hover:bg-emerald-700 transition-colors">
            Volver al Catálogo
          </router-link>
        </div>
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script>
  // ¡¡¡CORRECCIÓN AQUÍ!!! La ruta del Footer debe ser relativa a donde se encuentra ProductDetail.vue
  // ProductDetail.vue está en 'src/components', y Footer.vue está en 'src/views'.
  // Para llegar de 'components' a 'views', subes un nivel (..) y luego entras a 'views'.
  import Footer from '../views/Footer.vue';
  
  export default {
    name: 'ProductDetail',
    components: {
      Footer
    },
    data() {
      return {
        product: null, // Aquí se almacenará el producto encontrado
        // Duplicar o importar categoriesData e itemsData desde Afiliados.vue
        // En una aplicación real, idealmente cargarías esto desde una API
        categoriesData: [
          { id: 'all', name: 'Todos', icon: 'fas fa-cubes' },
          { id: 'textiles', name: 'Materiales Textiles', icon: 'fas fa-socks' },
          { id: 'insumos-industriales', name: 'Insumos Industriales', icon: 'fas fa-cogs' },
          { id: 'agroindustria', name: 'Agroindustria', icon: 'fas fa-seedling' },
          { id: 'alimentos-bebidas', name: 'Alimentos y Bebidas', icon: 'fas fa-utensils' },
          { id: 'construccion', name: 'Construcción', icon: 'fas fa-hard-hat' },
          { id: 'envases-embalajes', name: 'Envases y Embalajes', icon: 'fas fa-box-open' },
          { id: 'maquinaria-equipo', name: 'Maquinaria y Equipo', icon: 'fas fa-industry' },
          { id: 'servicios-logistica', name: 'Servicios Logísticos', icon: 'fas fa-truck' },
          { id: 'servicios-consultoria', name: 'Servicios de Consultoría', icon: 'fas fa-lightbulb' },
          { id: 'suministros-oficina', name: 'Suministros de Oficina', icon: 'fas fa-pencil-ruler' },
          { id: 'tecnologia', name: 'Tecnología', icon: 'fas fa-laptop-code' },
          { id: 'transporte', name: 'Transporte', icon: 'fas fa-shipping-fast' },
          { id: 'salud-seguridad', name: 'Salud y Seguridad Industrial', icon: 'fas fa-medkit' },
          { id: 'limpieza-mantenimiento', name: 'Limpieza y Mantenimiento', icon: 'fas fa-broom' },
          { id: 'publicidad-marketing', name: 'Publicidad y Marketing', icon: 'fas fa-bullhorn' },
          { id: 'materias-primas', name: 'Materias Primas', icon: 'fas fa-flask' },
        ],
        itemsData: [
          // Copia toda tu lista de itemsData desde Afiliados.vue aquí
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
      };
    },
    created() {
      this.loadProduct();
    },
    watch: {
      '$route.params.id': 'loadProduct'
    },
    methods: {
      getImageUrl(imageName) {
        // Ajusta esta ruta si tus imágenes no están directamente en 'public/assets/'
        // Por ejemplo, si están en 'public/images/', sería `/images/${imageName}`
        return `/assets/${imageName}`;
      },
      getCategoryName(categoryId) {
        const category = this.categoriesData.find(cat => cat.id === categoryId);
        return category ? category.name : 'Desconocida';
      },
      loadProduct() {
        const productId = this.$route.params.id;
        if (productId) {
          this.product = this.itemsData.find(item => item.id === productId);
        } else {
          this.product = null;
        }
      },
      handleAcquireClick() {
        alert(`Has presionado "Contactar para Adquirir" para: ${this.product.name}`);
        // Aquí puedes agregar lógica para redirigir a un formulario, abrir un modal, etc.
        // Ejemplo: this.$router.push('/contacto?product=' + this.product.id);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para la página de detalles */
  .animate-fade-in-up {
    animation: fade-in-up 0.7s ease-out forwards;
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
  
  .text-shadow-provo {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  </style>