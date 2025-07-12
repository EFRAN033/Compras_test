<template>
  <div class="p-4 bg-gray-100 min-h-screen font-sans antialiased">
    <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-gray-900 tracking-tight">Catálogo Mayorista</h2>
        <button @click="openAddProductModal" class="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 transition-all duration-300 ease-in-out flex items-center transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 text-sm">
          <svg class="w-4 h-4 mr-1 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          Publicar
        </button>
      </div>

      <p class="text-gray-600 mb-4 text-sm leading-relaxed">
        Gestiona tus productos mayoristas de ProVeo.
      </p>

      <div class="overflow-hidden rounded-lg shadow-sm border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200 text-xs">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-3 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Producto</th>
              <th class="px-3 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Precio</th>
              <th class="px-3 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Stock</th>
              <th class="px-3 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Categoría</th>
              <th class="px-3 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Unidad</th>
              <th class="px-3 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">MOQ</th>
              <th class="px-3 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Estado</th>
              <th class="px-3 py-2 text-right font-semibold text-gray-700 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="product in products" :key="product.id" class="hover:bg-gray-50 transition-colors duration-200">
              <td class="px-3 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-8 w-8">
                    <img class="h-8 w-8 rounded-full object-cover ring-1 ring-gray-100 shadow-sm" :src="product.image_url" :alt="product.nombre"> </div>
                  <div class="ml-2">
                    <div class="font-medium text-gray-900">{{ product.nombre }}</div> <div class="text-gray-500">{{ product.sku }}</div>
                  </div>
                </div>
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-gray-800 font-semibold">${{ product.precio.toFixed(2) }}</td> <td class="px-3 py-2 whitespace-nowrap text-gray-800">{{ product.stock }}</td>
              <td class="px-3 py-2 whitespace-nowrap text-gray-700">{{ product.categoria_id }}</td> <td class="px-3 py-2 whitespace-nowrap text-gray-700">{{ product.unidad_medida }}</td>
              <td class="px-3 py-2 whitespace-nowrap text-gray-700">{{ product.cantidad_minima_pedido }}</td> <td class="px-3 py-2 whitespace-nowrap">
                <span :class="{
                          'bg-green-500 text-white': product.estado === 'Activo', 'bg-red-500 text-white': product.estado === 'Inactivo', 'bg-yellow-400 text-gray-800': product.estado === 'Borrador' }"
                      class="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full shadow-sm">
                  {{ product.estado }} </span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-right font-medium">
                <button @click="editProduct(product)" class="text-blue-600 hover:text-blue-800 mr-2 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm px-1.5 py-0.5 text-xs">Editar</button>
                <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-800 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-sm px-1.5 py-0.5 text-xs">Eliminar</button>
              </td>
            </tr>
            <tr v-if="products.length === 0">
              <td colspan="8" class="px-3 py-4 text-center text-gray-500 text-sm">No hay productos.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="isProductModalOpen" class="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div class="bg-white rounded-lg p-4 max-w-5xl w-full shadow-xl transform scale-95 opacity-0 transition-all duration-300 ease-out animate-scale-in" :class="{'scale-100 opacity-100': isProductModalOpen}">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ editingProduct ? 'Editar Producto' : 'Nuevo Producto' }}</h3>
          <button @click="closeProductModal" class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <form @submit.prevent="saveProduct" class="space-y-3 text-sm">

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <div><label for="product-name" class="block font-medium text-gray-700">Nombre</label><input type="text" id="product-name" v-model="currentProduct.nombre" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div><label for="product-sku" class="block font-medium text-gray-700">SKU</label><input type="text" id="product-sku" v-model="currentProduct.sku" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div>
            <div><label for="product-category" class="block font-medium text-gray-700">Categoría</label><input type="text" id="product-category" v-model="currentProduct.categoria_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div><label for="product-barcode" class="block font-medium text-gray-700">Código Barras</label><input type="text" id="product-barcode" v-model="currentProduct.codigo_barras" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div><label for="product-price" class="block font-medium text-gray-700">Precio Base</label><input type="number" id="product-price" v-model.number="currentProduct.precio" step="0.01" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div><label for="product-stock" class="block font-medium text-gray-700">Stock</label><input type="number" id="product-stock" v-model.number="currentProduct.stock" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div>
            <div><label for="product-moq" class="block font-medium text-gray-700">MOQ</label><input type="number" id="product-moq" v-model.number="currentProduct.cantidad_minima_pedido" min="1" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div><label for="product-unit-measure" class="block font-medium text-gray-700">Unidad</label><select id="product-unit-measure" v-model="currentProduct.unidad_medida" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"> <option value="">Selecciona</option>
              <option value="Unidad">Unidad</option>
              <option value="Caja">Caja</option>
              <option value="Paquete">Paquete</option>
              <option value="Kg">Kg</option>
              <option value="Ltr">Ltr</option>
              <option value="Docena">Docena</option>
              <option value="Bulto">Bulto</option>
              <option value="Palet">Palet</option>
              <option value="Servicio">Servicio</option> <option value="Licencia">Licencia</option> <option value="Suscripcion">Suscripción</option> </select></div>
            <div><label for="product-weight" class="block font-medium text-gray-700">Peso (Kg)</label><input type="number" id="product-weight" v-model.number="currentProduct.peso_kg" step="0.01" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div class="col-span-1 md:col-span-2 lg:col-span-2">
                <label class="block font-medium text-gray-700">Dimensiones (cm)</label>
                <div class="grid grid-cols-3 gap-1 mt-1">
                    <input type="number" v-model.number="currentProduct.dimension_largo_cm" placeholder="Largo" step="0.01" class="block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"> <input type="number" v-model.number="currentProduct.dimension_ancho_cm" placeholder="Ancho" step="0.01" class="block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"> <input type="number" v-model.number="currentProduct.dimension_alto_cm" placeholder="Alto" step="0.01" class="block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"> </div>
            </div>
            <div><label for="product-processing-time" class="block font-medium text-gray-700">Procesamiento (días)</label><input type="number" id="product-processing-time" v-model.number="currentProduct.tiempo_procesamiento_dias" min="0" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div><label for="product-expiry-date" class="block font-medium text-gray-700">Caducidad (si aplica)</label><input type="date" id="product-expiry-date" v-model="currentProduct.fecha_caducidad" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"></div> <div><label for="product-status" class="block font-medium text-gray-700">Estado</label><select id="product-status" v-model="currentProduct.estado" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"> <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
              <option value="Borrador">Borrador</option>
            </select></div>
          </div>

          <div>
            <label for="product-description" class="block font-medium text-gray-700">Descripción</label>
            <textarea id="product-description" v-model="currentProduct.descripcion" rows="2" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500 text-xs"></textarea> </div>

          <div>
            <label for="product-image-upload" class="block font-medium text-gray-700">Imagen (JPG, PNG, GIF)</label>
            <input type="file" id="product-image-upload" @change="handleImageUpload" accept="image/jpeg, image/png, image/gif" class="mt-1 block w-full text-gray-700 text-xs file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100">
            <div v-if="currentProduct.image_url" class="mt-2 p-1 bg-gray-50 rounded-md border border-gray-200 flex items-center justify-center max-h-20"> <img :src="currentProduct.image_url" alt="Vista previa" class="max-h-16 rounded-md object-contain"> </div>
            <p v-else class="mt-1 text-gray-500 text-xs">Sin imagen.</p>
          </div>

          <div class="mt-2">
            <label class="block font-medium text-gray-700 mb-2">Precios por Volumen</label>
            <div v-for="(vp, index) in currentProduct.precios_por_volumen" :key="index" class="grid grid-cols-1 sm:grid-cols-5 gap-2 items-end mb-2 p-2 border border-gray-200 rounded-md bg-gray-50 shadow-sm text-xs"> <div><label class="block text-gray-600">Desde</label><input type="number" v-model.number="vp.min_quantity" placeholder="Ej. 100" class="w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-emerald-500 focus:border-emerald-500 text-xs"></div>
              <div><label class="block text-gray-600">Hasta</label><input type="number" v-model.number="vp.max_quantity" placeholder="Ej. 499" class="w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-emerald-500 focus:border-emerald-500 text-xs"></div>
              <div class="sm:col-span-2"><label class="block text-gray-600">Precio Unitario</label><input type="number" v-model.number="vp.price" step="0.01" placeholder="Ej. 9.50" class="w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-emerald-500 focus:border-emerald-500 text-xs"></div>
              <button type="button" @click="removeVolumePrice(index)" class="sm:col-span-1 px-2 py-1 bg-red-100 text-red-700 font-semibold rounded-md text-xxs hover:bg-red-200 transition-colors self-end focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Eliminar</button>
            </div>
            <button type="button" @click="addVolumePrice" class="px-3 py-1.5 mt-1 bg-emerald-500 text-white font-semibold rounded-md shadow-sm hover:bg-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 flex items-center text-xs">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Añadir Nivel
            </button>
          </div>

          <div class="flex justify-end space-x-2 pt-3 border-t border-gray-100 mt-3">
            <button type="button" @click="closeProductModal" class="px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm">Cancelar</button>
            <button type="submit" class="px-3 py-1.5 bg-emerald-500 text-white font-semibold rounded-md shadow-md hover:bg-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 text-sm">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductsManagement',
  data() {
    return {
      products: [],
      isProductModalOpen: false,
      currentProduct: {
        id: null,
        nombre: '', // CAMBIO IMPORTANTE: de 'name' a 'nombre'
        descripcion: '', // CAMBIO IMPORTANTE: de 'description' a 'descripcion'
        precio: 0, // CAMBIO IMPORTANTE: de 'price' a 'precio'
        stock: 0,
        categoria_id: '', // CAMBIO IMPORTANTE: de 'category' a 'categoria_id'
        image_url: '', // CAMBIO IMPORTANTE: de 'imageUrl' a 'image_url'
        sku: '',
        estado: 'Borrador', // CAMBIO IMPORTANTE: de 'status' a 'estado' y default a 'Borrador'
        unidad_medida: 'Unidad', // CAMBIO IMPORTANTE: de 'unit_of_measure' a 'unidad_medida'
        cantidad_minima_pedido: 1, // CAMBIO IMPORTANTE: de 'minimum_order_quantity' a 'cantidad_minima_pedido'
        precios_por_volumen: [], // CAMBIO IMPORTANTE: de 'volume_pricing' a 'precios_por_volumen'
        peso_kg: null, // CAMBIO IMPORTANTE: de 'weight' a 'peso_kg'
        dimension_largo_cm: null, // CAMBIO IMPORTANTE: de 'length' a 'dimension_largo_cm'
        dimension_ancho_cm: null, // CAMBIO IMPORTANTE: de 'width' a 'dimension_ancho_cm'
        dimension_alto_cm: null, // CAMBIO IMPORTANTE: de 'height' a 'dimension_alto_cm'
        codigo_barras: '', // CAMBIO IMPORTANTE: de 'barcode' a 'codigo_barras'
        fecha_caducidad: null, // CAMBIO IMPORTANTE: de 'expiry_date' a 'fecha_caducidad'
        tiempo_procesamiento_dias: null, // CAMBIO IMPORTANTE: de 'processing_time_days' a 'tiempo_procesamiento_dias'
      },
      editingProduct: false,
      selectedImageFile: null,
    };
  },
  async created() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error("No hay token de autenticación para productos.");
        this.$router.push({ name: 'Login' });
        return;
      }
      try {
        // --- CAMBIO IMPORTANTE: Descomentar y usar el endpoint real de FastAPI ---
        const response = await axios.get('http://localhost:8000/proveedores/productos', {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.products = response.data;
        // console.log("Productos cargados:", this.products); // Para depuración

        // --- NUEVA LÓGICA / AJUSTE: Si los datos de ejemplo ya no son necesarios, puedes eliminarlos ---
        /*
        this.products = [
          { id: 'P001', name: 'Servicio Consultoría Premium', description: 'Consultoría estratégica para optimización de negocios.', price: 500.00, stock: 99, category: 'Servicios', imageUrl: 'https://via.placeholder.com/48/0e7490/ffffff?text=SC', sku: 'SC-001', status: 'Activo', unit_of_measure: 'Servicio', minimum_order_quantity: 1, volume_pricing: [] , weight: null, length: null, width: null, height: null, barcode: '', expiry_date: null, processing_time_days: null},
          { id: 'P002', name: 'Software Gestión Avanzado', description: 'Suite completa para gestión de inventarios y ventas.', price: 1200.00, stock: 50, category: 'Software', imageUrl: 'https://via.placeholder.com/48/1d4ed8/ffffff?text=SG', sku: 'SG-002', status: 'Activo', unit_of_measure: 'Licencia', minimum_order_quantity: 1, volume_pricing: [{min_quantity: 5, max_quantity: 9, price: 1100.00}, {min_quantity: 10, max_quantity: null, price: 1000.00}], weight: 0.5, length: 15, width: 10, height: 2, barcode: '9876543210123', expiry_date: null, processing_time_days: 1 },
          { id: 'P003', name: 'Material Oficina (Paquete)', description: 'Surtido premium de artículos de oficina.', price: 45.99, stock: 200, category: 'Suministros', imageUrl: 'https://via.placeholder.com/48/7e22ce/ffffff?text=MO', sku: 'MO-003', status: 'Inactivo', unit_of_measure: 'Paquete', minimum_order_quantity: 10, volume_pricing: [{min_quantity: 50, max_quantity: 199, price: 42.00}, {min_quantity: 200, max_quantity: null, price: 38.00}], weight: 2.1, length: 30, width: 20, height: 15, barcode: '1234567890123', expiry_date: null, processing_time_days: 2 },
          { id: 'P004', name: 'Suscripción Contenido', description: 'Acceso ilimitado a nuestra biblioteca digital.', price: 99.99, stock: 150, category: 'Digital', imageUrl: 'https://via.placeholder.com/48/facc15/ffffff?text=CE', sku: 'CE-004', status: 'Borrador', unit_of_measure: 'Suscripción', minimum_order_quantity: 5, volume_pricing: [], weight: null, length: null, width: null, height: null, barcode: '', expiry_date: null, processing_time_days: 0 },
          { id: 'P005', name: 'Dispositivo IoT Inteligente', description: 'Sensor inteligente para automatización del hogar.', price: 299.00, stock: 30, category: 'Hardware', imageUrl: 'https://via.placeholder.com/48/ef4444/ffffff?text=IoT', sku: 'IoT-005', status: 'Activo', unit_of_measure: 'Unidad', minimum_order_quantity: 3, volume_pricing: [{min_quantity: 10, max_quantity: 29, price: 280.00}, {min_quantity: 30, max_quantity: null, price: 260.00}], weight: 0.2, length: 10, width: 8, height: 4, barcode: '4567890123456', expiry_date: null, processing_time_days: 1 },
           { id: 'P006', name: 'Caja Frutas Frescas (10kg)', description: 'Selección de frutas de temporada para abastecer tu tienda.', price: 25.00, stock: 100, category: 'Alimentos', imageUrl: 'https://via.placeholder.com/48/65a30d/ffffff?text=FR', sku: 'FR-006', status: 'Activo', unit_of_measure: 'Caja', minimum_order_quantity: 5, volume_pricing: [{min_quantity: 20, max_quantity: 49, price: 23.50}, {min_quantity: 50, max_quantity: null, price: 21.00}], weight: 10.0, length: 40, width: 30, height: 25, barcode: '7890123456789', expiry_date: '2025-07-20', processing_time_days: 1 },
           { id: 'P007', name: 'Paquete Bebidas Energéticas', description: 'Paquete al por mayor de bebidas energéticas populares.', price: 38.50, stock: 150, category: 'Bebidas', imageUrl: 'https://via.placeholder.com/48/dc2626/ffffff?text=BE', sku: 'BE-007', status: 'Activo', unit_of_measure: 'Paquete', minimum_order_quantity: 3, volume_pricing: [{min_quantity: 10, max_quantity: 29, price: 36.00}, {min_quantity: 30, max_quantity: null, price: 34.00}], weight: 8.0, length: 45, width: 25, height: 20, barcode: '2345678901234', expiry_date: '2026-12-31', processing_time_days: 1 },
        ];
        */

      } catch (error) {
        console.error('Error al cargar productos:', error.response ? error.response.data : error.message);
        alert('Hubo un error al cargar los productos.');
      }
    },
    openAddProductModal() {
      this.editingProduct = false;
      this.currentProduct = {
        id: null,
        nombre: '', // CAMBIO IMPORTANTE
        descripcion: '', // CAMBIO IMPORTANTE
        precio: 0, // CAMBIO IMPORTANTE
        stock: 0,
        categoria_id: '', // CAMBIO IMPORTANTE
        image_url: '', // CAMBIO IMPORTANTE
        sku: '',
        estado: 'Borrador', // CAMBIO IMPORTANTE: default a 'Borrador'
        unidad_medida: 'Unidad', // CAMBIO IMPORTANTE
        cantidad_minima_pedido: 1, // CAMBIO IMPORTANTE
        precios_por_volumen: [], // CAMBIO IMPORTANTE
        peso_kg: null, // CAMBIO IMPORTANTE
        dimension_largo_cm: null, // CAMBIO IMPORTANTE
        dimension_ancho_cm: null, // CAMBIO IMPORTANTE
        dimension_alto_cm: null, // CAMBIO IMPORTANTE
        codigo_barras: '', // CAMBIO IMPORTANTE
        fecha_caducidad: null, // CAMBIO IMPORTANTE
        tiempo_procesamiento_dias: null, // CAMBIO IMPORTANTE
      };
      this.selectedImageFile = null;
      this.isProductModalOpen = true;
    },
    editProduct(product) {
      this.editingProduct = true;
      // --- CAMBIO IMPORTANTE: Mapear campos de la API a currentProduct ---
      this.currentProduct = {
        ...product, // Copia las propiedades existentes
        nombre: product.nombre,
        descripcion: product.descripcion,
        precio: parseFloat(product.precio), // Convertir a número si FastAPI devuelve string
        categoria_id: product.categoria_id,
        image_url: product.image_url,
        estado: product.estado,
        unidad_medida: product.unidad_medida,
        cantidad_minima_pedido: product.cantidad_minima_pedido,
        precios_por_volumen: product.precios_por_volumen || [], // Asegurarse de que sea un array
        peso_kg: product.peso_kg ? parseFloat(product.peso_kg) : null,
        dimension_largo_cm: product.dimension_largo_cm ? parseFloat(product.dimension_largo_cm) : null,
        dimension_ancho_cm: product.dimension_ancho_cm ? parseFloat(product.dimension_ancho_cm) : null,
        dimension_alto_cm: product.dimension_alto_cm ? parseFloat(product.dimension_alto_cm) : null,
        codigo_barras: product.codigo_barras,
        tiempo_procesamiento_dias: product.tiempo_procesamiento_dias,
        // NUEVA LÓGICA / AJUSTE: Formatear fecha_caducidad para input type="date"
        fecha_caducidad: product.fecha_caducidad ? new Date(product.fecha_caducidad).toISOString().split('T')[0] : null,
      };
      this.selectedImageFile = null;
      this.isProductModalOpen = true;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImageFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.currentProduct.image_url = e.target.result; // CAMBIO IMPORTANTE: image_url
        };
        reader.readAsDataURL(file);
      } else {
        this.selectedImageFile = null;
        this.currentProduct.image_url = ''; // CAMBIO IMPORTANTE: image_url
      }
    },
    async saveProduct() {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error("No hay token de autenticación.");
        return;
      }

      try {
        // --- NUEVA LÓGICA / AJUSTE: Si quieres subir la imagen real, esta es la sección ---
        // if (this.selectedImageFile) {
        //   const formData = new FormData();
        //   formData.append('file', this.selectedImageFile);
        //   // Si necesitas enviar el ID del producto (para actualizaciones)
        //   // formData.append('productId', this.currentProduct.id || 'new');

        //   const uploadResponse = await axios.post('http://localhost:8000/upload-image', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //       'Authorization': `Bearer ${token}`
        //     }
        //   });
        //   this.currentProduct.image_url = uploadResponse.data.imageUrl; // Asume que tu backend devuelve la URL de la imagen
        // } else if (!this.currentProduct.image_url && this.editingProduct) {
        //   // Si no se selecciona nueva imagen y no había, o se elimina
        //   this.currentProduct.image_url = null; // O ajusta según la lógica de tu backend para borrar imagen
        // }

        // --- SIMULACIÓN DE SUBIDA DE IMAGEN (mantener si no tienes endpoint real) ---
        if (this.selectedImageFile) {
          console.log("Simulando subida de imagen:", this.selectedImageFile.name);
          this.currentProduct.image_url = `https://via.placeholder.com/48/0a0a0a/ffffff?text=${this.selectedImageFile.name.substring(0,2).toUpperCase()}`;
        }
        // --- FIN SIMULACIÓN ---


        // --- CAMBIO IMPORTANTE: Preparar los datos del producto con los nombres correctos para FastAPI ---
        const productData = {
          nombre: this.currentProduct.nombre,
          descripcion: this.currentProduct.descripcion,
          precio: this.currentProduct.precio,
          stock: this.currentProduct.stock,
          categoria_id: this.currentProduct.categoria_id,
          image_url: this.currentProduct.image_url,
          sku: this.currentProduct.sku,
          estado: this.currentProduct.estado,
          unidad_medida: this.currentProduct.unidad_medida,
          cantidad_minima_pedido: this.currentProduct.cantidad_minima_pedido,
          precios_por_volumen: this.currentProduct.precios_por_volumen,
          peso_kg: this.currentProduct.peso_kg,
          dimension_largo_cm: this.currentProduct.dimension_largo_cm,
          dimension_ancho_cm: this.currentProduct.dimension_ancho_cm,
          dimension_alto_cm: this.currentProduct.dimension_alto_cm,
          codigo_barras: this.currentProduct.codigo_barras,
          fecha_caducidad: this.currentProduct.fecha_caducidad,
          tiempo_procesamiento_dias: this.currentProduct.tiempo_procesamiento_dias,
        };
        // console.log("Enviando datos:", productData); // Para depuración

        if (this.editingProduct) {
          // --- CAMBIO IMPORTANTE: Endpoint para actualizar producto ---
          await axios.put(`http://localhost:8000/proveedores/productos/${this.currentProduct.id}`, productData, {
            headers: { Authorization: `Bearer ${token}` }
          });
          alert('Oferta mayorista actualizada con éxito!');
        } else {
          // --- CAMBIO IMPORTANTE: Endpoint para añadir nuevo producto ---
          await axios.post('http://localhost:8000/proveedores/productos', productData, {
            headers: { Authorization: `Bearer ${token}` }
          });
          alert('Oferta mayorista publicada con éxito!');
        }
        this.closeProductModal();
        await this.fetchProducts(); // Refrescar la lista de productos
      } catch (error) {
        console.error('Error al guardar producto o subir imagen:', error.response ? error.response.data : error.message);
        // --- NUEVA LÓGICA / AJUSTE: Mostrar mensaje de error detallado del backend ---
        alert('Hubo un error al guardar la oferta mayorista o al subir la imagen. Detalle: ' + (error.response && error.response.data && error.response.data.detail ? error.response.data.detail : error.message));
      }
    },
    async deleteProduct(id) {
      if (!confirm('¿Estás seguro de que quieres eliminar esta oferta mayorista?')) return;

      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error("No hay token de autenticación.");
        return;
      }

      try {
        // --- CAMBIO IMPORTANTE: Endpoint para eliminar producto ---
        await axios.delete(`http://localhost:8000/proveedores/productos/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.products = this.products.filter(p => p.id !== id);
        alert('Oferta mayorista eliminada con éxito!');
      } catch (error) {
        console.error('Error al eliminar producto:', error.response ? error.response.data : error.message);
        // --- NUEVA LÓGICA / AJUSTE: Mostrar mensaje de error detallado del backend ---
        alert('Hubo un error al eliminar la oferta mayorista. Detalle: ' + (error.response && error.response.data && error.response.data.detail ? error.response.data.detail : error.message));
      }
    },
    addVolumePrice() {
      this.currentProduct.precios_por_volumen.push({ min_quantity: null, max_quantity: null, price: null }); // CAMBIO IMPORTANTE: precios_por_volumen
    },
    removeVolumePrice(index) {
      this.currentProduct.precios_por_volumen.splice(index, 1); // CAMBIO IMPORTANTE: precios_por_volumen
    },
    closeProductModal() {
      this.isProductModalOpen = false;
      this.currentProduct = {
        id: null,
        nombre: '', // CAMBIO IMPORTANTE
        descripcion: '', // CAMBIO IMPORTANTE
        precio: 0, // CAMBIO IMPORTANTE
        stock: 0,
        categoria_id: '', // CAMBIO IMPORTANTE
        image_url: '', // CAMBIO IMPORTANTE
        sku: '',
        estado: 'Borrador', // CAMBIO IMPORTANTE
        unidad_medida: 'Unidad', // CAMBIO IMPORTANTE
        cantidad_minima_pedido: 1, // CAMBIO IMPORTANTE
        precios_por_volumen: [], // CAMBIO IMPORTANTE
        peso_kg: null, // CAMBIO IMPORTANTE
        dimension_largo_cm: null, // CAMBIO IMPORTANTE
        dimension_ancho_cm: null, // CAMBIO IMPORTANTE
        dimension_alto_cm: null, // CAMBIO IMPORTANTE
        codigo_barras: '', // CAMBIO IMPORTANTE
        fecha_caducidad: null, // CAMBIO IMPORTANTE
        tiempo_procesamiento_dias: null, // CAMBIO IMPORTANTE
      };
      this.selectedImageFile = null;
    }
  }
};
</script>

<style scoped>
/* Animaciones para el modal */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scale-in {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}
.animate-scale-in {
  animation: scale-in 0.3s ease-out forwards;
}
/* Sombra más pronunciada para un look "premium" */
.shadow-xl {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>