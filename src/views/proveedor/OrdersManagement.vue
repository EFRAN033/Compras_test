<template>
    <div class="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Gestión de Pedidos</h2>
  
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pedido</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Pedido</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="order in orders" :key="order.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{{ order.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.clientName }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ order.orderDate }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${{ order.total.toFixed(2) }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="{'bg-green-100 text-green-800': order.status === 'Completado', 'bg-yellow-100 text-yellow-800': order.status === 'Pendiente', 'bg-blue-100 text-blue-800': order.status === 'En Proceso', 'bg-red-100 text-red-800': order.status === 'Cancelado'}"
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {{ order.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link :to="`/dashboard-proveedor/pedidos/${order.id}`" class="text-emerald-600 hover:text-emerald-900 mr-4">Ver Detalle</router-link>
                <button @click="updateOrderStatus(order.id, 'Completado')" v-if="order.status !== 'Completado'" class="text-blue-600 hover:text-blue-900">Marcar Completado</button>
              </td>
            </tr>
            <tr v-if="orders.length === 0">
              <td colspan="6" class="px-6 py-4 text-center text-gray-500">No hay pedidos registrados.</td>
            </tr>
          </tbody>
        </table>
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
        if (!confirm(`¿Estás seguro de cambiar el estado del pedido #<span class="math-inline">\{orderId\} a "</span>{newStatus}"?`)) return;
  
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
          alert(`Estado del pedido #<span class="math-inline">\{orderId\} actualizado a "</span>{newStatus}" (simulado)!`);
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