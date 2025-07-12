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
              :class="{ 'bg-blue-50 border-l-4 border-blue-600 shadow-sm': !message.leida, 'bg-white': message.leida }"
              class="flex flex-col sm:flex-row items-start sm:items-center py-4 px-6 hover:bg-gray-50 transition-all duration-200 cursor-pointer relative"
            >
              <div 
                :class="{ 'bg-blue-600 animate-pulse-once': !message.leida, 'bg-gray-400': message.leida }" 
                class="flex-shrink-0 w-2.5 h-2.5 rounded-full mr-3.5 mt-1 sm:mt-0" 
                :title="message.leida ? 'Mensaje leído' : 'Mensaje no leído'"
              ></div>
              
              <div class="flex-grow">
                <p 
                  :class="{ 'font-semibold text-gray-900': !message.leida, 'text-gray-700': message.leida }" 
                  class="text-base leading-snug"
                >
                  {{ message.asunto }}
                </p>
                <p 
                  :class="{ 'text-gray-700': !message.leida, 'text-gray-500': message.leida }" 
                  class="text-sm mt-1 message-body-full" >
                  {{ message.cuerpo }}
                </p>
                <p class="text-xs text-gray-500 mt-1.5">
                  Recibido el {{ formatDate(message.fecha_creacion) }}
                </p>
              </div>

              <div class="flex-shrink-0 ml-0 sm:ml-6 flex space-x-2.5 mt-3 sm:mt-0">
                <button
                  v-if="!message.leida"
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
import axios from 'axios'; 

export default {
  name: 'Messages',
  data() {
    return {
      messages: [], // Ahora los mensajes se cargarán desde el backend
    };
  },
  computed: {
    unreadMessagesCount() {
      // Cambio: usar message.leida para coincidir con la DB y el modelo Pydantic
      return this.messages.filter(msg => !msg.leida).length; 
    }
  },
  async created() {
    await this.fetchMessages(); // Cargar mensajes al crear el componente
  },
  methods: {
    async fetchMessages() { // Método para cargar mensajes del backend
      const token = localStorage.getItem('authToken');
      const userRole = localStorage.getItem('userRole');

      if (!token || userRole !== 'proveedor') {
        console.error("No hay token de autenticación o el usuario no es proveedor para ver mensajes.");
        // Redirige o muestra un error adecuado, por ejemplo:
        // this.$router.push({ name: 'Login' });
        return;
      }

      try {
        // Llama al endpoint de tu backend para obtener notificaciones del proveedor
        const response = await axios.get('http://localhost:8000/proveedores/notificaciones', {
          headers: { Authorization: `Bearer ${token}` }
        });
        // Asigna los datos de la respuesta a la propiedad 'messages'
        this.messages = response.data;
        console.log("Mensajes cargados:", this.messages); // Para depuración
      } catch (error) {
        console.error('Error al cargar mensajes:', error.response ? error.response.data : error.message);
        alert('Hubo un error al cargar tus notificaciones.');
      }
    },
    // Cambio: `date` ahora es `dateString` para reflejar que viene como string ISO de la DB
    formatDate(dateString) { 
      try {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        return new Date(dateString).toLocaleDateString('es-ES', options);
      } catch (e) {
        console.error("Error al formatear fecha:", dateString, e);
        return dateString; // Devuelve la cadena original si el formato falla
      }
    },
    async markAsRead(id) {
      const token = localStorage.getItem('authToken');
      try {
        // Llama al endpoint del backend para marcar como leído
        await axios.put(`http://localhost:8000/proveedores/notificaciones/${id}/leer`, {}, {
          headers: { Authorization: `Bearer ${token}` }
        });
        // Actualiza el estado en el frontend
        const message = this.messages.find(msg => msg.id === id);
        if (message) {
          message.leida = true; // Cambio: usar 'leida'
        }
        console.log(`Mensaje ${id} marcado como leído en el backend.`);
      } catch (error) {
        console.error('Error al marcar como leído:', error.response ? error.response.data : error.message);
        alert('Hubo un error al marcar el mensaje como leído.');
      }
    },
    async deleteMessage(id) {
      if (!confirm('¿Estás seguro de que quieres eliminar este mensaje?')) return;
      const token = localStorage.getItem('authToken');
      try {
        // Llama al endpoint del backend para eliminar
        await axios.delete(`http://localhost:8000/proveedores/notificaciones/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        // Actualiza el estado en el frontend
        this.messages = this.messages.filter(msg => msg.id !== id);
        console.log(`Mensaje ${id} eliminado en el backend.`);
      } catch (error) {
        console.error('Error al eliminar mensaje:', error.response ? error.response.data : error.message);
        alert('Hubo un error al eliminar el mensaje.');
      }
    },
    async markAllAsRead() {
      const token = localStorage.getItem('authToken');
      try {
        // Itera sobre los mensajes no leídos y llama al endpoint PUT para cada uno
        await Promise.all(this.messages.filter(msg => !msg.leida).map(msg => 
          axios.put(`http://localhost:8000/proveedores/notificaciones/${msg.id}/leer`, {}, { headers: { Authorization: `Bearer ${token}` } })
        ));
        // Actualiza todos los mensajes en el frontend
        this.messages.forEach(msg => {
          msg.leida = true; // Cambio: usar 'leida'
        });
        console.log('Todos los mensajes marcados como leídos.');
      } catch (error) {
        console.error('Error al marcar todos como leídos:', error.response ? error.response.data : error.message);
        alert('Hubo un error al marcar todos los mensajes como leídos.');
      }
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

/* CAMBIO IMPORTANTE: Clase para mostrar el cuerpo del mensaje completo (sin line-clamp) */
.message-body-full {
  display: block; /* Asegura que no haya restricciones de línea */
  white-space: normal; /* Permite que el texto se ajuste normalmente */
  overflow: visible; /* Asegura que todo el contenido sea visible */
  -webkit-line-clamp: unset; /* Deshace cualquier line-clamp heredado */
  -webkit-box-orient: unset; /* Deshace cualquier box-orient heredado */
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