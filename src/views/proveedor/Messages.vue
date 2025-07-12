<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 transform hover:shadow-3xl transition-shadow duration-300">
      
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-2xl flex items-center justify-between">
        <h1 class="text-2xl font-extrabold text-gray-800 flex items-center tracking-tight">
          <svg class="w-7 h-7 text-blue-600 mr-2.5 animate-bell-ring" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.001 2.001 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          Tus Notificaciones
        </h1>
        <button
          v-if="unreadMessagesCount > 0"
          @click="markAllAsRead"
          class="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-sm font-semibold rounded-lg text-gray-700 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
        >
          Marcar todo como leído ({{ unreadMessagesCount }})
        </button>
      </div>

      <div class="p-0">
        <div v-if="messages.length === 0" class="text-center py-12 px-6 bg-white rounded-b-2xl">
          <svg class="mx-auto h-16 w-16 text-gray-400 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.928-5.285A2 2 0 0114 5.414V17a1 1 0 001 1h2a1 1 0 001-1v-6.586a2 2 0 01.586-1.414L21 8m-9 6h.01M12 18h.01"></path>
          </svg>
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Bandeja de entrada vacía
          </h3>
          <p class="mt-2 text-base text-gray-600">
            ¡Relájate! No tienes nuevas notificaciones en este momento.
          </p>
          <div class="mt-6">
            <router-link to="/" class="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-0.5">
              Ir a la página principal
            </router-link>
          </div>
        </div>

        <ul v-else class="divide-y divide-gray-100">
          <transition-group name="message-fade">
            <li
              v-for="message in messages"
              :key="message.id"
              :class="{ 'bg-blue-50 border-l-4 border-blue-600 shadow-sm': !message.read, 'bg-white': message.read }"
              class="flex flex-col sm:flex-row items-start sm:items-center py-4 px-6 hover:bg-gray-50 transition-all duration-200 cursor-pointer relative"
            >
              <div 
                :class="{ 'bg-blue-600 animate-pulse-once': !message.read, 'bg-gray-400': message.read }" 
                class="flex-shrink-0 w-2.5 h-2.5 rounded-full mr-3.5 mt-1 sm:mt-0" 
                :title="message.read ? 'Mensaje leído' : 'Mensaje no leído'"
              ></div>
              
              <div class="flex-grow">
                <p 
                  :class="{ 'font-semibold text-gray-900': !message.read, 'text-gray-700': message.read }" 
                  class="text-base leading-snug"
                >
                  {{ message.subject }}
                </p>
                <p 
                  :class="{ 'text-gray-700': !message.read, 'text-gray-500': message.read }" 
                  class="text-sm mt-1 line-clamp-2"
                >
                  {{ message.body }}
                </p>
                <p class="text-xs text-gray-500 mt-1.5">
                  Recibido el {{ formatDate(message.date) }}
                </p>
              </div>

              <div class="flex-shrink-0 ml-0 sm:ml-6 flex space-x-2.5 mt-3 sm:mt-0">
                <button
                  v-if="!message.read"
                  @click.stop="markAsRead(message.id)"
                  class="p-2 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Marcar como leído"
                  title="Marcar como leído"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <button
                  @click.stop="deleteMessage(message.id)"
                  class="p-2 rounded-full text-gray-500 bg-gray-50 hover:bg-red-100 hover:text-red-600 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Eliminar mensaje"
                  title="Eliminar mensaje"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// No se usa axios aquí en este ejemplo. Si lo necesitas para interactuar con un backend real, descomenta:
// import axios from 'axios'; 

export default {
  name: 'Messages',
  data() {
    return {
      messages: [
        { id: 1, subject: 'Nuevo Pedido Recibido: #PROVEO-2025-001', body: '¡Excelentes noticias! Has recibido un nuevo pedido de "Tech Solutions S.A." por valor de $5,500. Revisa los detalles en tu panel de control para confirmar y gestionar el envío. No olvides la fecha límite de entrega.', date: new Date('2025-06-14T10:00:00Z'), read: false },
        { id: 2, subject: 'Recordatorio: Próximo Pago a "Logística Express"', body: 'La factura #LOGEX-987 para "Logística Express" por el servicio de transporte vence el 18 de junio de 2025. Asegúrate de procesar el pago a tiempo para evitar recargos.', date: new Date('2025-06-13T14:30:00Z'), read: false },
        { id: 3, subject: 'Actualización Importante de Términos de Servicio', body: 'Hemos actualizado nuestros Términos de Servicio para incluir nuevas funcionalidades. Por favor, tómate un momento para leer la versión más reciente en nuestra sección de ayuda.', date: new Date('2025-06-12T09:15:00Z'), read: true },
        { id: 4, subject: 'Respuesta a tu consulta de soporte #4567', body: 'Tu consulta sobre la integración de pagos ha sido respondida por nuestro equipo de soporte. Puedes ver la respuesta completa en la sección de "Mi Soporte".', date: new Date('2025-06-11T16:00:00Z'), read: true },
        { id: 5, subject: 'Promoción Exclusiva: 15% Dto. en Herramientas', body: '¡Solo para ti! Disfruta de un 15% de descuento en nuestra selección de herramientas profesionales este fin de semana. Usa el código HERRAMIENTAS15 al finalizar tu compra.', date: new Date('2025-06-10T11:00:00Z'), read: true },
        { id: 6, subject: 'Bienvenida a la comunidad ProVeo', body: 'Gracias por unirte a ProVeo. Estamos emocionados de tenerte a bordo y ayudarte a conectar con los mejores proveedores/clientes. ¡Explora todas nuestras herramientas!', date: new Date('2025-06-08T08:45:00Z'), read: true },
      ],
    };
  },
  computed: {
    unreadMessagesCount() {
      return this.messages.filter(msg => !msg.read).length;
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    markAsRead(id) {
      const message = this.messages.find(msg => msg.id === id);
      if (message) {
        message.read = true;
        // Si usas un backend real, descomenta la siguiente línea y asegúrate de tener axios importado.
        // axios.put(`/api/messages/${id}/read`); 
        console.log(`Mensaje ${id} marcado como leído.`);
      }
    },
    deleteMessage(id) {
      this.messages = this.messages.filter(msg => msg.id !== id);
      // Si usas un backend real, descomenta la siguiente línea y asegúrate de tener axios importado.
      // axios.delete(`/api/messages/${id}`); 
      console.log(`Mensaje ${id} eliminado.`);
    },
    markAllAsRead() {
      this.messages.forEach(msg => {
        msg.read = true;
      });
      // Si usas un backend real, descomenta la siguiente línea y asegúrate de tener axios importado.
      // axios.put('/api/messages/mark-all-read');
      console.log('Todos los mensajes marcados como leídos.');
    },
  },
};
</script>

<style scoped>
/* Transiciones suaves para la lista de mensajes */
.message-fade-enter-active,
.message-fade-leave-active {
  transition: all 0.3s ease-out;
}
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.message-fade-leave-active {
  position: absolute; 
  width: 100%;
}

/* Para evitar que el texto se desborde y mostrar puntos suspensivos */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animación para el icono de campana */
@keyframes bell-ring {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(10deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(7deg); }
  60% { transform: rotate(-7deg); }
  75% { transform: rotate(4deg); }
  90% { transform: rotate(-4deg); }
  100% { transform: rotate(0deg); }
}

.animate-bell-ring {
  animation: bell-ring 1.5s ease-in-out infinite;
}

/* Animación para el punto de notificación no leído */
@keyframes pulse-once {
  0% { transform: scale(0.8); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

.animate-pulse-once {
  animation: pulse-once 0.6s ease-out;
}
</style>