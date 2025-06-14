<template>
    <div class="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Gestión de Productos</h2>
        <button @click="openAddProductModal" class="px-5 py-2 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition-colors duration-200 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Añadir Nuevo Producto
        </button>
      </div>
  
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in products" :key="product.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full object-cover" :src="product.imageUrl" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                    <div class="text-sm text-gray-500">{{ product.sku }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${{ product.price.toFixed(2) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ product.stock }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ product.category }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="{'bg-green-100 text-green-800': product.status === 'Activo', 'bg-red-100 text-red-800': product.status === 'Inactivo', 'bg-yellow-100 text-yellow-800': product.status === 'Borrador'}"
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {{ product.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="editProduct(product)" class="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
                <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-900">Eliminar</button>
              </td>
            </tr>
            <tr v-if="products.length === 0">
              <td colspan="6" class="px-6 py-4 text-center text-gray-500">No tienes productos aún.</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="isProductModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
          <h3 class="text-xl font-bold text-gray-800 mb-6">{{ editingProduct ? 'Editar Producto' : 'Añadir Nuevo Producto' }}</h3>
          <form @submit.prevent="saveProduct" class="space-y-4">
            <div>
              <label for="product-name" class="block text-sm font-medium text-gray-700">Nombre del Producto</label>
              <input type="text" id="product-name" v-model="currentProduct.name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div>
              <label for="product-price" class="block text-sm font-medium text-gray-700">Precio</label>
              <input type="number" id="product-price" v-model.number="currentProduct.price" step="0.01" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div>
              <label for="product-stock" class="block text-sm font-medium text-gray-700">Stock</label>
              <input type="number" id="product-stock" v-model.number="currentProduct.stock" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div>
              <label for="product-category" class="block text-sm font-medium text-gray-700">Categoría</label>
              <input type="text" id="product-category" v-model="currentProduct.category" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div>
              <label for="product-image" class="block text-sm font-medium text-gray-700">URL de Imagen</label>
              <input type="text" id="product-image" v-model="currentProduct.imageUrl" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div class="flex justify-end space-x-3 mt-6">
              <button type="button" @click="closeProductModal" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Cancelar</button>
              <button type="submit" class="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">Guardar Producto</button>
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
          name: '',
          price: 0,
          stock: 0,
          category: '',
          imageUrl: '',
          sku: '', // Placeholder for SKU
          status: 'Activo' // Default status
        },
        editingProduct: false,
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
          // --- Reemplaza con tu endpoint real de FastAPI para listar productos ---
          // const response = await axios.get('http://localhost:8000/proveedores/productos', {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // this.products = response.data;
  
          // Datos de ejemplo para desarrollo:
          this.products = [
            { id: 'P001', name: 'Servicio de Consultoría', price: 500.00, stock: 99, category: 'Servicios', imageUrl: 'https://via.placeholder.com/40/0e7490/ffffff?text=SC', sku: 'SC-001', status: 'Activo' },
            { id: 'P002', name: 'Software de Gestión', price: 1200.00, stock: 50, category: 'Software', imageUrl: 'https://via.placeholder.com/40/1d4ed8/ffffff?text=SG', sku: 'SG-002', status: 'Activo' },
            { id: 'P003', name: 'Material de Oficina (Paquete)', price: 45.99, stock: 200, category: 'Suministros', imageUrl: 'https://via.placeholder.com/40/7e22ce/ffffff?text=MO', sku: 'MO-003', status: 'Inactivo' },
          ];
  
        } catch (error) {
          console.error('Error al cargar productos:', error.response ? error.response.data : error.message);
          alert('Hubo un error al cargar los productos.');
        }
      },
      openAddProductModal() {
        this.editingProduct = false;
        this.currentProduct = { id: null, name: '', price: 0, stock: 0, category: '', imageUrl: '', sku: '', status: 'Activo' };
        this.isProductModalOpen = true;
      },
      editProduct(product) {
        this.editingProduct = true;
        this.currentProduct = { ...product }; // Copia profunda para evitar mutación directa
        this.isProductModalOpen = true;
      },
      async saveProduct() {
        const token = localStorage.getItem('authToken');
        if (!token) return;
  
        try {
          if (this.editingProduct) {
            // --- Endpoint para actualizar producto ---
            // await axios.put(`http://localhost:8000/proveedores/productos/${this.currentProduct.id}`, this.currentProduct, {
            //   headers: { Authorization: `Bearer ${token}` }
            // });
            alert('Producto actualizado con éxito (simulado)!');
          } else {
            // --- Endpoint para añadir nuevo producto ---
            // Asegúrate de que tu backend genere el ID si es necesario
            // await axios.post('http://localhost:8000/proveedores/productos', this.currentProduct, {
            //   headers: { Authorization: `Bearer ${token}` }
            // });
            // Simular asignación de ID para nuevos productos en frontend
            this.currentProduct.id = 'P' + Date.now().toString().slice(-4);
            this.currentProduct.sku = 'SKU-' + Date.now().toString().slice(-3);
            this.products.push({ ...this.currentProduct }); // Añade el producto a la lista local
            alert('Producto añadido con éxito (simulado)!');
          }
          this.closeProductModal();
          await this.fetchProducts(); // Recarga la lista para ver los cambios reales
        } catch (error) {
          console.error('Error al guardar producto:', error.response ? error.response.data : error.message);
          alert('Hubo un error al guardar el producto.');
        }
      },
      async deleteProduct(id) {
        if (!confirm('¿Estás seguro de que quieres eliminar este producto?')) return;
  
        const token = localStorage.getItem('authToken');
        if (!token) return;
  
        try {
          // --- Endpoint para eliminar producto ---
          // await axios.delete(`http://localhost:8000/proveedores/productos/${id}`, {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          this.products = this.products.filter(p => p.id !== id); // Elimina de la lista local
          alert('Producto eliminado con éxito (simulado)!');
        } catch (error) {
          console.error('Error al eliminar producto:', error.response ? error.response.data : error.message);
          alert('Hubo un error al eliminar el producto.');
        }
      },
      closeProductModal() {
        this.isProductModalOpen = false;
        this.currentProduct = { id: null, name: '', price: 0, stock: 0, category: '', imageUrl: '', sku: '', status: 'Activo' };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Sin estilos específicos, Tailwind se encarga de la mayoría */
  </style>