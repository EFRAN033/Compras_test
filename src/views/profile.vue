<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 antialiased">

    <header class="bg-white/90 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <button
            @click="$router.go(-1)"
            class="flex items-center gap-1 px-2 py-1.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            aria-label="Volver a la página anterior"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            <span class="hidden sm:inline">Volver</span>
          </button>

          <router-link to="/" class="absolute left-1/2 -translate-x-1/2" aria-label="Ir a la página de inicio de ProVeo">
            <span class="text-2xl font-bold">
              <span class="text-teal-500">Pro</span><span class="text-emerald-700">Veo</span>
            </span>
          </router-link>

          <div class="w-20 sm:w-24"></div>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-10 sm:py-12">
      
      <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-10 border border-gray-200">
        <div class="p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            <div class="relative group flex-shrink-0">
              <div v-if="isLoading" class="w-28 h-28 rounded-full bg-gray-200 animate-pulse"></div>
              <button
                v-else
                @click="isEditing && $refs.fileInput.click()"
                class="w-28 h-28 rounded-full bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-md"
                :class="{'cursor-pointer': isEditing}"
                aria-label="Cambiar foto de perfil"
              >
                {{ userInitials }}
              </button>
              <input v-if="isEditing" ref="fileInput" type="file" class="hidden" @change="handleFileUpload" accept="image/*">
            </div>
  
            <div class="flex-grow text-center sm:text-left">
              <div v-if="isLoading" class="space-y-2">
                <div class="h-9 bg-gray-200 rounded w-4/5 animate-pulse mx-auto sm:mx-0"></div>
                <div class="h-6 bg-gray-200 rounded w-3/5 animate-pulse mx-auto sm:mx-0"></div>
              </div>
              <div v-else class="mb-4">
                <h1 class="text-3xl font-bold text-gray-900">
                  {{ userData.razon_social_empresa || `${userData.nombres} ${userData.apellidos}` }}
                </h1>
                <p class="mt-1 text-lg text-gray-600">{{ userData.puesto_cargo || 'Puesto no asignado' }}</p>
              </div>

              <button
                @click="toggleEditMode"
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md shadow-sm transition-all duration-200"
                :class="isEditing 
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                  : 'bg-gradient-to-r from-teal-500 to-emerald-700 text-white hover:shadow-lg hover:-translate-y-px'"
              >
                <span>{{ isEditing ? 'Cancelar Edición' : 'Editar Perfil' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="space-y-8">
        <section class="bg-white rounded-lg shadow-sm border border-gray-200">
          <header class="p-5 border-b border-gray-200">
            <h2 class="text-base font-semibold text-gray-700">Contacto e Identificación</h2>
          </header>
          <div class="p-6 space-y-6">
            <div v-if="isLoading" v-for="i in 3" :key="`csk-${i}`" class="h-9 bg-gray-200 rounded-md animate-pulse"></div>
            <div v-else v-for="(value, key) in contactInfo" :key="key" class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start">
              <label :for="key" class="text-sm font-medium text-gray-600 sm:pt-2">{{ formatLabel(key) }}</label>
              <div class="sm:col-span-2">
                <input v-if="isEditing" :id="key" :name="key" :type="getInputType(key)" v-model="editableUserData[key]"
                       class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition">
                <p v-else class="text-base font-medium text-gray-900 pt-2">{{ value || '—' }}</p>
              </div>
            </div>
          </div>
        </section>
  
        <section class="bg-white rounded-lg shadow-sm border border-gray-200">
          <header class="p-5 border-b border-gray-200">
            <h2 class="text-base font-semibold text-gray-700">Información General</h2>
          </header>
          <div class="p-6 space-y-6">
            <div v-if="isLoading" v-for="i in 4" :key="`gsk-${i}`" class="h-9 bg-gray-200 rounded-md animate-pulse"></div>
            <div v-else v-for="(value, key) in generalInfo" :key="key" class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start">
              <label :for="key" class="text-sm font-medium text-gray-600 sm:pt-2">{{ formatLabel(key) }}</label>
              <div class="sm:col-span-2">
                <template v-if="isEditing">
                  <select v-if="key === 'activo'" :id="key" v-model="editableUserData[key]" class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition">
                    <option :value="true">Activo</option>
                    <option :value="false">Inactivo</option>
                  </select>
                  <input v-else :id="key" :name="key" :type="getInputType(key)" v-model="editableUserData[key]"
                         class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition">
                </template>
                <div v-else class="pt-2">
                  <span v-if="key === 'activo'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                        :class="value ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'">
                    {{ value ? 'Activo' : 'Inactivo' }}
                  </span>
                  <p v-else class="text-base font-medium text-gray-900">{{ value || '—' }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  
      <div v-if="isEditing" class="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
        <button @click="cancelEdit" class="px-5 py-2 bg-white border border-gray-300 text-gray-800 text-sm font-semibold rounded-md shadow-sm hover:bg-gray-50 transition-colors">
          Cancelar
        </button>
        <button @click="saveProfile" :disabled="isSaving"
                class="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-700 text-white text-sm font-semibold rounded-md shadow-sm hover:shadow-lg hover:-translate-y-px transition-all disabled:from-teal-400 disabled:to-emerald-600 disabled:cursor-not-allowed disabled:shadow-none disabled:-translate-y-0">
          <span v-if="isSaving" class="flex items-center"><svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Guardando...</span>
          <span v-else>Guardar Cambios</span>
        </button>
      </div>
  
      <transition enter-active-class="transition ease-out duration-300" enter-from-class="transform opacity-0 translate-y-2" enter-to-class="transform opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200" leave-from-class="transform opacity-100 translate-y-0" leave-to-class="transform opacity-0 translate-y-2">
        <div v-if="error || successMessage" class="fixed bottom-6 right-6 w-full max-w-xs bg-white border border-gray-200 p-4 shadow-lg rounded-lg z-50">
          <div class="flex items-start">
            <div class="flex-shrink-0" :class="error ? 'text-red-500' : 'text-emerald-500'">
              <svg v-if="error" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <div class="ml-3 w-0 flex-1">
              <p class="text-sm font-semibold" :class="error ? 'text-gray-900' : 'text-gray-900'">{{ error ? 'Error' : 'Éxito' }}</p>
              <p class="mt-1 text-sm text-gray-600">{{ error || successMessage }}</p>
            </div>
            <button @click="error = null; successMessage = null" class="ml-auto -mr-1 -mt-1 p-1 rounded-full text-gray-400 hover:bg-gray-100 focus:outline-none">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-2.72 2.72a.75.75 0 101.06 1.06L10 11.06l2.72 2.72a.75.75 0 101.06-1.06L11.06 10l2.72-2.72a.75.75 0 00-1.06-1.06L10 8.94 7.28 5.22z" /></svg>
            </button>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
// ==========================================================
// ✅ TU LÓGICA ESTÁ 100% INTACTA, TAL COMO LA PROPORCIONASTE
// ==========================================================
import axios from 'axios';

export default {
  name: 'ProfileView',
  data() {
    return {
      userData: {
        id: null,
        nombres: '',
        apellidos: '',
        email_corporativo: '',
        telefono_contacto: '',
        puesto_cargo: '',
        razon_social_empresa: '',
        rfc_empresa: '',
        industria_sector: '',
        tamano_empresa: '',
        activo: false,
      },
      editableUserData: {},
      userInitials: '',
      isLoading: true,
      isSaving: false,
      error: null,
      successMessage: null,
      isEditing: false,
    };
  },
  computed: {
    displayName() {
      return this.userData.razon_social_empresa || `${this.userData.nombres} ${this.userData.apellidos}`;
    },
    contactInfo() {
      const source = this.isEditing ? this.editableUserData : this.userData;
      const { email_corporativo, telefono_contacto, rfc_empresa } = source;
      return { email_corporativo, telefono_contacto, rfc_empresa };
    },
    generalInfo() {
      const source = this.isEditing ? this.editableUserData : this.userData;
      const { nombres, apellidos, puesto_cargo, industria_sector, tamano_empresa, activo } = source;
      return { nombres, apellidos, puesto_cargo, industria_sector, tamano_empresa, activo };
    }
  },
  methods: {
    getInitials(name) {
      if (!name) return '';
      const parts = name.split(' ');
      if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase();
      }
      return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    },
    formatLabel(key) {
      const labels = {
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        email_corporativo: 'Email corporativo',
        telefono_contacto: 'Teléfono',
        puesto_cargo: 'Puesto / Cargo',
        razon_social_empresa: 'Razón social',
        rfc_empresa: 'RFC',
        industria_sector: 'Industria / Sector',
        tamano_empresa: 'Tamaño de empresa',
        activo: 'Estado de cuenta'
      };
      return labels[key] || key;
    },
    getInputType(key) {
      if (key === 'email_corporativo') return 'email';
      if (key === 'telefono_contacto') return 'tel';
      return 'text';
    },
    async fetchUserProfile() {
      this.isLoading = true;
      this.error = null;
      this.successMessage = null;
      
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          this.error = "No autenticado. Por favor, inicia sesión.";
          this.$router.push('/login');
          return;
        }

        const response = await axios.get(import.meta.env.VITE_APP_API_BASE_URL + '/afiliados/me', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        
        this.userData = { ...response.data };
        this.userInitials = this.getInitials(this.displayName);
        
      } catch (err) {
        console.error("Error al cargar el perfil:", err);
        this.handleApiError(err);
      } finally {
        this.isLoading = false;
      }
    },
    toggleEditMode() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.editableUserData = { ...this.userData };
        this.successMessage = null;
      } else {
        this.editableUserData = {};
      }
      this.error = null;
    },
    async saveProfile() {
      this.isSaving = true;
      this.error = null;
      this.successMessage = null;
      
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          this.error = "No autenticado. Por favor, inicia sesión.";
          this.$router.push('/login');
          return;
        }

        const response = await axios.patch(
        import.meta.env.VITE_APP_API_BASE_URL + '/afiliados/me',
          this.editableUserData,
          {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          }
        );

        this.userData = { ...response.data };
        this.userInitials = this.getInitials(this.displayName);
        this.isEditing = false;
        this.successMessage = "Perfil actualizado correctamente";
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          this.successMessage = null;
        }, 5000);
        
      } catch (err) {
        console.error("Error al guardar el perfil:", err);
        this.handleApiError(err);
      } finally {
        this.isSaving = false;
      }
    },
    cancelEdit() {
      this.isEditing = false;
      this.editableUserData = {};
      this.error = null;
      this.successMessage = null;
    },
    handleApiError(err) {
      if (err.response && err.response.status === 401) {
        this.error = "Sesión expirada. Por favor, inicia sesión nuevamente.";
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        this.$router.push('/login');
      } else if (err.response && err.response.data && err.response.data.detail) {
        this.error = err.response.data.detail;
      } else {
        this.error = "Ocurrió un error. Por favor, inténtalo de nuevo más tarde.";
      }
    },
    handleFileUpload(event) {
        // Implementar lógica para subir archivo
        console.log("Archivo seleccionado:", event.target.files[0]);
        // Aquí podrías subir el archivo al servidor y actualizar la foto de perfil
    }
  },
  mounted() {
    this.fetchUserProfile();
  }
};
</script>

<style>
/* ==========================================================
// ✅ TUS ESTILOS ESTÁN 100% INTACTOS, TAL COMO LOS PROPORCIONASTE
// ========================================================== */

/* Transiciones para mensajes emergentes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Animación de carga para placeholders */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Mejoras de accesibilidad para enfoque */
button:focus, input:focus, select:focus {
  outline: none;
}
*:focus-visible {
  outline: 2px solid #14b8a6; /* teal-500 */
  outline-offset: 2px;
  border-radius: 6px;
}

/* Estilos base para el body */
body {
  @apply bg-gray-50 text-gray-900 antialiased;
}

/* Asegurar que el contenedor principal ocupe toda la altura */
#app {
  @apply min-h-screen flex flex-col;
}
</style>