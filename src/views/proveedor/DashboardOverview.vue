<template>
    <div class="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Resumen de tu Actividad</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-emerald-50 rounded-xl shadow-lg p-6 border border-emerald-100 transform hover:scale-105 transition-all duration-300 ease-out">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Pedidos Pendientes</h3>
            <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4-4-4 4-4-4"></path>
            </svg>
          </div>
          <p class="text-4xl font-bold text-emerald-800">{{ stats.pendingOrders }}</p>
          <p class="text-sm text-gray-500 mt-2">Nuevos pedidos esperando tu gestión.</p>
        </div>
  
        <div class="bg-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 transform hover:scale-105 transition-all duration-300 ease-out">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Productos Activos</h3>
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <p class="text-4xl font-bold text-blue-800">{{ stats.activeProducts }}</p>
          <p class="text-sm text-gray-500 mt-2">Productos listados y disponibles para compra.</p>
        </div>
  
        <div class="bg-purple-50 rounded-xl shadow-lg p-6 border border-purple-100 transform hover:scale-105 transition-all duration-300 ease-out">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Ventas del Mes</h3>
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2V21m-4 0h8a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2h4m-4 0h12a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2zm-4 0h12a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2zm16-4h-8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <p class="text-4xl font-bold text-purple-800">${{ stats.monthlySales.toFixed(2) }}</p>
          <p class="text-sm text-gray-500 mt-2">Ingresos generados este mes.</p>
        </div>
      </div>
  
      <section class="mt-10">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Últimos Pedidos</h3>
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pedido</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th scope="col" class="relative px-6 py-3"><span class="sr-only">Acciones</span></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="order in recentOrders" :key="order.id" class="hover:bg-gray-50 transition-colors duration-150">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{{ order.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.clientName }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${{ order.total.toFixed(2) }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <span :class="{'bg-green-100 text-green-800': order.status === 'Completado', 'bg-yellow-100 text-yellow-800': order.status === 'Pendiente', 'bg-blue-100 text-blue-800': order.status === 'En Proceso'}"
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <router-link :to="`/dashboard-proveedor/pedidos/${order.id}`" class="text-emerald-600 hover:text-emerald-900">Ver</router-link>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="recentOrders.length === 0" class="p-6 text-center text-gray-500">
            No hay pedidos recientes.
          </div>
          <div class="px-6 py-4 bg-gray-50 text-right">
            <router-link to="/dashboard-proveedor/pedidos" class="text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-200">
              Ver todos los pedidos &rarr;
            </router-link>
          </div>
        </div>
      </section>
  
      <section class="mt-10">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Tus Productos Más Vendidos</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in topProducts" :key="product.id" class="bg-white rounded-xl shadow-lg p-6 border border-purple-100 flex items-center space-x-4 transform hover:scale-105 transition-all duration-300 ease-out">
            <img :src="product.imageUrl" alt="Producto" class="w-16 h-16 object-cover rounded-md shadow-sm">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ product.name }}</h3>
              <p class="text-sm text-gray-600">Vendidos: {{ product.soldUnits }} unidades</p>
              <p class="text-sm text-gray-600">Ingreso: ${{ product.revenue.toFixed(2) }}</p>
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
          // --- Reemplaza estos datos de ejemplo con llamadas reales a tu API FastAPI ---
          // const statsResponse = await axios.get('http://localhost:8000/proveedores/stats', {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // this.stats = statsResponse.data;
  
          // const ordersResponse = await axios.get('http://localhost:8000/proveedores/recent-orders', {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // this.recentOrders = ordersResponse.data;
  
          // const productsResponse = await axios.get('http://localhost:8000/proveedores/top-products', {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // this.topProducts = productsResponse.data;
  
          // Datos de ejemplo para el desarrollo:
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
  /* Sin estilos específicos, Tailwind se encarga de la mayoría */
  </style>