<template>
  <div class="p-6 bg-gray-50 min-h-screen font-sans antialiased">
    <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h2 class="text-3xl font-extrabold text-gray-800 tracking-tight mb-8">Gestión de Pedidos</h2>

      <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID Pedido</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cliente</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Fecha Pedido</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Estado</th>
              <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50 transition-colors duration-200">
              <td class="px-6 py-4 whitespace-nowrap text-base font-bold text-gray-900">#{{ order.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.clientName }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.orderDate }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-base text-gray-700 font-bold">${{ order.total.toFixed(2) }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="{
                          'bg-green-600 text-white': order.status === 'Completado',
                          'bg-yellow-500 text-white': order.status === 'Pendiente',
                          'bg-blue-600 text-white': order.status === 'En Proceso',
                          'bg-red-600 text-white': order.status === 'Cancelado'
                        }"
                      class="px-3 py-1 inline-flex text-sm leading-5 font-bold rounded-full shadow-sm">
                  {{ order.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link :to="`/dashboard-proveedor/pedidos/${order.id}`" class="text-emerald-600 hover:text-emerald-800 font-bold transition-colors duration-200 mr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md px-2 py-1">
                  Ver Detalle
                </router-link>
                <button @click="updateOrderStatus(order.id, 'Completado')" v-if="order.status !== 'Completado'" 
                        class="text-blue-600 hover:text-blue-800 font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1">
                  Marcar Completado
                </button>
              </td>
            </tr>
            <tr v-if="orders.length === 0">
              <td colspan="6" class="px-6 py-6 text-center text-gray-500 text-lg">No hay pedidos registrados.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OrdersManagement',
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    await this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error("No hay token de autenticación para pedidos.");
        this.$router.push({ name: 'Login' });
        return;
      }
      try {
        // --- Reemplaza con tu endpoint real de FastAPI para listar pedidos ---
        // const response = await axios.get('http://localhost:8000/proveedores/pedidos', {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // this.orders = response.data;

        // Datos de ejemplo para desarrollo:
        this.orders = [
          { id: '1001', clientName: 'Empresa Alfa', orderDate: '2025-06-12', total: 520.50, status: 'Pendiente' },
          { id: '1002', clientName: 'Cliente Beta', orderDate: '2025-06-11', total: 120.00, status: 'En Proceso' },
          { id: '1003', clientName: 'Corporación Gamma', orderDate: '2025-06-10', total: 890.70, status: 'Completado' },
          { id: '1004', clientName: 'Startup Delta', orderDate: '2025-06-09', total: 340.00, status: 'Pendiente' },
          { id: '1005', clientName: 'Negocio Epsilon', orderDate: '2025-06-08', total: 780.25, status: 'Cancelado' },
        ];

      } catch (error) {
        console.error('Error al cargar pedidos:', error.response ? error.response.data : error.message);
        alert('Hubo un error al cargar los pedidos.');
      }
    },
    async updateOrderStatus(orderId, newStatus) {
      if (!confirm(`¿Estás seguro de cambiar el estado del pedido #${orderId} a "${newStatus}"?`)) return;

      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
        // --- Endpoint para actualizar estado del pedido ---
        // await axios.put(`http://localhost:8000/proveedores/pedidos/${orderId}/status`, { status: newStatus }, {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // Actualiza el estado en la lista local para reflejar el cambio
        const index = this.orders.findIndex(order => order.id === orderId);
        if (index !== -1) {
          this.orders[index].status = newStatus;
        }
        alert(`Estado del pedido #${orderId} actualizado a "${newStatus}" (simulado)!`);
      } catch (error) {
        console.error('Error al actualizar estado del pedido:', error.response ? error.response.data : error.message);
        alert('Hubo un error al actualizar el estado del pedido.');
      }
    }
  }
};
</script>

<style scoped>
/* Sin estilos específicos */
</style>