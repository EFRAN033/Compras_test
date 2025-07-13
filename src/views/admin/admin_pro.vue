<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-800">Panel de Administración de ProVeo</h1>
      <nav>
        <router-link to="/" class="text-blue-600 hover:text-blue-800 mr-4">Inicio Público</router-link>
        <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Cerrar Sesión Admin
        </button>
      </nav>
    </header>

    <main class="flex-grow p-6">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Gestión de Solicitudes de Proveedores</h2>
        <p class="text-gray-600 mb-8">Revisa las solicitudes pendientes, aprueba o rechaza nuevos proveedores para tu plataforma.</p>

        <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <h3 class="text-xl font-medium text-gray-800 mb-4">Solicitudes Pendientes de Aprobación</h3>
          
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  RFC
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contacto
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categorías
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Sol.
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-if="pendingApplications.length === 0">
                <td colspan="7" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  No hay solicitudes pendientes en este momento.
                </td>
              </tr>
              <tr v-for="application in pendingApplications" :key="application.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ application.nombre_empresa }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ application.rfc }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ application.nombre_contacto }} ({{ application.puesto_contacto }})
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer">
                  {{ application.email_contacto }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span v-for="(cat, index) in application.categorias" :key="cat.id"
                        class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1 mb-1">
                    {{ cat.nombre || cat }}<span v-if="index < application.categorias.length - 1">,</span>
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDate(application.fecha_solicitud) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button @click="approveApplication(application.id)"
                          class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md mr-2 transition-colors duration-200">
                    Aprobar
                  </button>
                  <button @click="rejectApplication(application.id)"
                          class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition-colors duration-200">
                    Rechazar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-10 bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <h3 class="text-xl font-medium text-gray-800 mb-4">Todas las Solicitudes (Historial)</h3>
          <p class="text-gray-500">Aquí se mostrará el historial completo de solicitudes de proveedores (aprobadas, rechazadas, pendientes).</p>
          </div>

      </div>
    </main>

    <div
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <transition
          enter-active-class="transform ease-out duration-300 transition"
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="notification.show"
            class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg v-if="notification.type === 'success'" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <svg v-if="notification.type === 'error'" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                  <p class="mt-1 text-sm text-gray-500">{{ notification.message }}</p>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button type="button" @click="notification.show = false" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Cerrar</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

// --- ESTADO REACTIVO ---
const pendingApplications = ref([]);
const loading = ref(false);
const notification = reactive({
  show: false,
  type: 'success',
  title: '',
  message: '',
});

// --- LÓGICA DE UI Y NOTIFICACIONES ---
const showNotification = (type, title, message) => {
  notification.type = type;
  notification.title = title;
  notification.message = message;
  notification.show = true;
  setTimeout(() => (notification.show = false), 5000);
};

// Formatear fecha para la tabla
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

// --- LÓGICA PARA GESTIONAR PROVEEDORES ---

// Función para obtener el token de autenticación del administrador
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    showNotification('error', 'Error de Autenticación', 'No hay token de sesión. Inicia sesión.');
    router.push('/admin');
    return {};
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

// Función para cargar las solicitudes de proveedores
const fetchPendingApplications = async () => {
  loading.value = true;
  try {
    const headers = getAuthHeaders();
    if (!headers.headers) return; 
    
    // *** CAMBIO CLAVE AQUÍ: Usar la variable de entorno para la URL base de la API ***
    const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:8000';

    const response = await axios.get(`${API_BASE_URL}/admin/proveedores/solicitudes/pendientes`, headers);
    pendingApplications.value = response.data;
    showNotification('success', 'Éxito', 'Solicitudes cargadas correctamente.');
  } catch (error) {
    console.error('Error al cargar solicitudes:', error);
    const errorMessage = error.response?.data?.detail || 'Error al cargar las solicitudes de proveedores.';
    showNotification('error', 'Error de Carga', errorMessage);
    if (error.response?.status === 401 || error.response?.status === 403) {
      router.push('/admin');
    }
  } finally {
    loading.value = false;
  }
};

// Función para aprobar una solicitud
const approveApplication = async (id) => {
  if (!confirm('¿Estás seguro de que quieres aprobar esta solicitud?')) return;

  try {
    const headers = getAuthHeaders();
    if (!headers.headers) return;
    
    // *** CAMBIO CLAVE AQUÍ: Usar la variable de entorno para la URL base de la API ***
    const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:8000';

    const response = await axios.post(`${API_BASE_URL}/admin/proveedores/aprobar/${id}`, {}, headers);
    showNotification('success', 'Aprobado', response.data.message || 'Solicitud aprobada con éxito.');
    await fetchPendingApplications(); 
  } catch (error) {
    console.error('Error al aprobar solicitud:', error);
    const errorMessage = error.response?.data?.detail || 'Error al aprobar la solicitud.';
    showNotification('error', 'Error de Aprobación', errorMessage);
  }
};

// Función para rechazar una solicitud
const rejectApplication = async (id) => {
  if (!confirm('¿Estás seguro de que quieres rechazar esta solicitud?')) return;

  try {
    const headers = getAuthHeaders();
    if (!headers.headers) return;

    // *** CAMBIO CLAVE AQUÍ: Usar la variable de entorno para la URL base de la API ***
    const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:8000';

    const response = await axios.post(`${API_BASE_URL}/admin/proveedores/rechazar/${id}`, {}, headers);
    showNotification('success', 'Rechazado', response.data.message || 'Solicitud rechazada con éxito.');
    await fetchPendingApplications(); 
  } catch (error) {
    console.error('Error al rechazar solicitud:', error);
    const errorMessage = error.response?.data?.detail || 'Error al rechazar la solicitud.';
    showNotification('error', 'Error de Rechazo', errorMessage);
  }
};

// Función para cerrar sesión del administrador
const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userName');
  localStorage.removeItem('userRole');
  router.push('/admin');
};

// Cargar solicitudes cuando el componente se monta
onMounted(() => {
  fetchPendingApplications();
});
</script>

<style scoped>
/* Puedes añadir estilos específicos para tu panel de administración */
/* Por ejemplo, para el efecto de fade-in si es un componente de entrada */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>