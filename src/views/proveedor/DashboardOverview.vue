<template>
  <div class="p-8 bg-gray-50 min-h-screen font-sans antialiased">
    <h1 class="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8 pb-4 border-b border-gray-200">
      Panel de Control Principal
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col justify-between
                  transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-gray-700">Pedidos Pendientes</h2>
          <svg class="w-9 h-9 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <div class="flex items-baseline justify-between">
          <p class="text-5xl font-bold text-gray-900 leading-tight">{{ stats.pendingOrders }}</p>
          <div class="flex items-center text-red-600 text-sm font-medium">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8L10 3"></path>
            </svg>
            <span>+3 recientes</span>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-2">Nuevos pedidos esperando tu gestión.</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col justify-between
                  transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-gray-700">Productos Activos</h2>
          <svg class="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
        </div>
        <div class="flex items-baseline justify-between">
          <p class="text-5xl font-bold text-gray-900 leading-tight">{{ stats.activeProducts }}</p>
          <div class="flex items-center text-green-600 text-sm font-medium">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8L10 21"></path>
            </svg>
            <span>+5% este mes</span>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-2">Productos listados y disponibles para compra.</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col justify-between
                  transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-gray-700">Ventas del Mes</h2>
          <svg class="w-9 h-9 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <div class="flex items-baseline justify-between">
          <p class="text-5xl font-bold text-gray-900 leading-tight">${{ stats.monthlySales.toFixed(2) }}</p>
          <div class="flex items-center text-green-600 text-sm font-medium">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8L10 21"></path>
            </svg>
            <span>+12% vs. anterior</span>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-2">Ingresos generados en el mes actual.</p>
      </div>
    </div>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Últimos Pedidos Recibidos</h2>
      <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                <input type="checkbox" class="form-checkbox h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500">
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID Pedido</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Cliente</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Fecha</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Total</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Estado</th>
              <th scope="col" class="relative px-6 py-3"><span class="sr-only">Acciones</span></th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="order in recentOrders" :key="order.id" class="hover:bg-gray-50 transition-colors duration-150">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="form-checkbox h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500">
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{{ order.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.clientName }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.date }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">${{ order.total.toFixed(2) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                              " :class="{
                                'bg-yellow-200 text-yellow-800': order.status === 'Pendiente',
                                'bg-blue-200 text-blue-800': order.status === 'En Proceso',
                                'bg-emerald-200 text-emerald-800': order.status === 'Completado'
                              }">
                  <span class="h-2 w-2 rounded-full mr-2" :class="{
                    'bg-yellow-500': order.status === 'Pendiente',
                    'bg-blue-500': order.status === 'En Proceso',
                    'bg-emerald-500': order.status === 'Completado'
                  }"></span>
                  {{ order.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link :to="`/dashboard-proveedor/pedidos/${order.id}`" class="text-emerald-700 hover:text-emerald-900 font-semibold">
                  Ver Detalle
                </router-link>
              </td>
            </tr>
            <tr v-if="recentOrders.length === 0">
              <td colspan="7" class="p-6 text-center text-gray-500">
                No hay pedidos recientes para mostrar.
              </td>
            </tr>
          </tbody>
        </table>
        <div class="px-6 py-4 bg-gray-50 text-right">
          <router-link to="/dashboard-proveedor/pedidos" class="text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200">
            Ver todos los pedidos &rarr;
          </router-link>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Productos Más Vendidos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in topProducts" :key="product.id" class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-center space-x-5
                    transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
          <img :src="product.imageUrl" :alt="product.name" class="w-16 h-16 object-cover rounded-md shadow-sm border border-gray-200 flex-shrink-0">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ product.name }}</h3>
            <p class="text-sm text-gray-600">Vendidos: <span class="font-medium text-gray-800">{{ product.soldUnits }} unidades</span></p>
            <p class="text-sm text-gray-600">Ingreso: <span class="font-medium text-gray-800">${{ product.revenue.toFixed(2) }}</span></p>
          </div>
        </div>
        <div v-if="topProducts.length === 0" class="md:col-span-3 text-center text-gray-500 p-6">
          No hay productos más vendidos para mostrar.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DashboardOverview',
  data() {
    return {
      stats: {
        pendingOrders: 0,
        activeProducts: 0,
        monthlySales: 0,
      },
      recentOrders: [],
      topProducts: [],
    };
  },
  async created() {
    await this.fetchDashboardData();
  },
  methods: {
    async fetchDashboardData() {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error("No hay token de autenticación. Redirigiendo a login.");
        this.$router.push({ name: 'Login' });
        return;
      }

      try {
        // *** CAMBIO CLAVE AQUÍ: Usar la variable de entorno para la URL base de la API ***
        const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:8000';

        // --- Descomentar y usar llamadas reales a tu API FastAPI ---
        // Asumiendo que tienes estos endpoints en tu backend para el dashboard del proveedor
        const statsResponse = await axios.get(`${API_BASE_URL}/proveedores/stats`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.stats = statsResponse.data;

        const ordersResponse = await axios.get(`${API_BASE_URL}/proveedores/recent-orders`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.recentOrders = ordersResponse.data;

        const productsResponse = await axios.get(`${API_BASE_URL}/proveedores/top-products`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.topProducts = productsResponse.data;

        // --- Eliminar o comentar los datos de ejemplo una vez que los endpoints reales funcionen ---
        /*
        this.stats = {
          pendingOrders: 7,
          activeProducts: 45,
          monthlySales: 12500.75,
        };
        this.recentOrders = [
          { id: '1001', clientName: 'Empresa A', date: '2025-06-12', total: 520.50, status: 'Pendiente' },
          { id: '1000', clientName: 'Cliente B', date: '2025-06-11', total: 120.00, status: 'En Proceso' },
          { id: '0999', clientName: 'Corporación C', date: '2025-06-10', total: 890.70, status: 'Completado' },
          { id: '0998', clientName: 'Startup D', date: '2025-06-09', total: 340.00, status: 'Pendiente' },
        ];
        this.topProducts = [
          { id: 'P001', name: 'Servicio de Consultoría Premium', imageUrl: 'https://via.placeholder.com/64/0e7490/ffffff?text=SC', soldUnits: 15, revenue: 7500.00 },
          { id: 'P002', name: 'Paquete de Diseño Web Pro', imageUrl: 'https://via.placeholder.com/64/1d4ed8/ffffff?text=DW', soldUnits: 10, revenue: 4000.00 },
          { id: 'P003', name: 'Suscripción de Software Anual', imageUrl: 'https://via.placeholder.com/64/7e22ce/ffffff?text=SA', soldUnits: 8, revenue: 2000.00 },
        ];
        */

      } catch (error) {
        console.error('Error al cargar datos del dashboard:', error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 401) {
          alert('Tu sesión ha expirado. Por favor, inicia sesión de nuevo.');
          this.$router.push({ name: 'Login' });
        } else {
          alert('Hubo un error al cargar los datos del dashboard. Por favor, inténtalo de nuevo más tarde.');
        }
      }
    }
  }
};
</script>

<style scoped>
/* Las fuentes se manejan a nivel global en el componente principal o en Tailwind config */
</style>