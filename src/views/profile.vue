<template>
    <div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex flex-col">
  
      <!-- Header mejorado con mejor jerarquía visual -->
      <header class="bg-white shadow-md py-3 sticky top-0 z-50">
      <div class="container mx-auto px-6 flex justify-between items-center relative">
        <button
          @click="$router.go(-1)"
          class="group relative flex items-center p-2 rounded-full text-emerald-600 border border-emerald-200 bg-white
                 hover:bg-emerald-50 hover:border-emerald-400 transform hover:scale-105 transition-all duration-300 ease-out
                 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Volver a la página anterior"
        >
          <span class="absolute inset-0 block rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style="background: radial-gradient(circle at center, rgba(6,182,212,0.3) 0%, transparent 70%);"></span>
          <svg class="w-5 h-5 z-10 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span class="ml-1.5 font-medium text-sm hidden sm:inline-block z-10">Volver</span>
        </button>

        <router-link
          to="/"
          class="flex items-center absolute left-1/2 transform -translate-x-1/2 animate-fade-in-down"
          aria-label="Ir a la página de inicio de ProVeo"
        >
          <span class="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent
                       relative inline-block perspective-1000
                       hover:scale-105 transition-transform duration-300 ease-out"
          >
            <span class="absolute inset-0 -top-0.5 left-0.5 text-shadow-provo opacity-20" aria-hidden="true">ProVeo</span>
            ProVeo
          </span>
        </router-link>

        <div class="w-16 sm:w-auto opacity-0"></div>
      </div>
    </header>
  
      <!-- Contenido principal con mejor estructura -->
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-8 pb-16 flex-grow">
        <!-- Tarjeta de perfil mejorada -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden mb-10 border border-gray-100 transition-all duration-300 hover:shadow-lg">
          <div class="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            
            <!-- Avatar con mejor feedback visual -->
            <div class="relative">
              <div v-if="isLoading" class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-200 animate-pulse"></div>
              <div v-else 
                   class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center 
                          text-white text-4xl sm:text-5xl font-bold shadow-inner cursor-pointer transition-transform duration-300 hover:scale-105"
                   title="Cambiar foto de perfil"
                   @click="isEditing && $refs.fileInput.click()">
                {{ userInitials }}
                <input v-if="isEditing" ref="fileInput" type="file" class="hidden" @change="handleFileUpload">
              </div>
            </div>
  
            <!-- Información principal con mejor tipografía -->
            <div class="text-center sm:text-left flex-grow space-y-2">
              <h1 v-if="isLoading" class="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse mx-auto sm:mx-0"></h1>
              <h1 v-else class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {{ userData.razon_social_empresa || `${userData.nombres} ${userData.apellidos}` }}
              </h1>
              
              <div class="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2">
                <p v-if="isLoading" class="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></p>
                <p v-else class="text-lg text-gray-700 flex items-center justify-center sm:justify-start">
                  <svg class="w-5 h-5 mr-2 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                  {{ userData.puesto_cargo || 'Sin puesto asignado' }}
                </p>
  
                <p v-if="isLoading" class="h-6 bg-gray-200 rounded w-2/5 animate-pulse"></p>
                <p v-else class="text-lg text-gray-700 flex items-center justify-center sm:justify-start">
                  <svg class="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 01-.788 0L.24 8.355a1 1 0 00-.24 1.11l2.42 5.093A1 1 0 003.5 15h13a1 1 0 00.98-1.542l2.42-5.093a1 1 0 00-.24-1.11L10.394 2.08zM12 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  {{ userData.industria_sector || 'Industria no especificada' }}
                </p>
              </div>
            </div>
  
            <!-- Botón de acción con mejor jerarquía -->
            <div class="mt-4 sm:mt-0 sm:self-start">
              <button
                @click="toggleEditMode"
                class="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg shadow-md
                       hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                :class="{'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 focus:ring-gray-400': isEditing}"
              >
                <span v-if="!isEditing">Editar perfil</span>
                <span v-else>Cancelar</span>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Secciones de información con mejor estructura -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Tarjeta de contacto mejorada -->
          <section class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div class="p-6 sm:p-8">
              <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Contacto e identificación
              </h2>
              
              <div class="space-y-4">
                <div v-for="(value, key) in contactInfo" :key="key" class="group">
                  <label class="block text-sm font-medium text-gray-600 mb-1 flex items-center">
                    <svg v-if="key === 'email_corporativo'" class="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <svg v-else-if="key === 'telefono_contacto'" class="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <svg v-else-if="key === 'rfc_empresa'" class="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2zm-2 4h4v2H2v-2z" clip-rule="evenodd"></path>
                    </svg>
                    {{ formatLabel(key) }}
                  </label>
                  
                  <input v-if="isEditing" 
                         :type="getInputType(key)" 
                         v-model="editableUserData[key]"
                         class="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                         :class="{'bg-gray-50': isLoading}">
                  
                  <p v-else-if="isLoading" class="h-8 bg-gray-200 rounded animate-pulse mt-1"></p>
                  <p v-else class="mt-1 text-gray-900 font-medium text-base">{{ value || 'N/A' }}</p>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Tarjeta de información general mejorada -->
          <section class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div class="p-6 sm:p-8">
              <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                Información general
              </h2>
              
              <div class="space-y-4">
                <div v-for="(value, key) in generalInfo" :key="key" class="group">
                  <label class="block text-sm font-medium text-gray-600 mb-1 flex items-center">
                    <svg v-if="key === 'nombres' || key === 'apellidos'" class="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                    <svg v-else-if="key === 'tamano_empresa'" class="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.586l1.707 1.707A2 2 0 0118 16v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 01.586-1.414L5 11.586V8a2 2 0 012-2h-.5zM10 16a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                    </svg>
                    <svg v-else-if="key === 'activo'" class="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    {{ formatLabel(key) }}
                  </label>
                  
                  <template v-if="isEditing">
                    <input v-if="key !== 'activo'" 
                           :type="getInputType(key)" 
                           v-model="editableUserData[key]"
                           class="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                           :class="{'bg-gray-50': isLoading}">
                    
                    <select v-else v-model="editableUserData[key]"
                            class="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200">
                      <option :value="true">Activo</option>
                      <option :value="false">Inactivo</option>
                    </select>
                  </template>
                  
                  <template v-else>
                    <p v-if="isLoading" class="h-8 bg-gray-200 rounded animate-pulse mt-1"></p>
                    <p v-else-if="key === 'activo'" 
                       :class="{'bg-emerald-100 text-emerald-800': value, 'bg-red-100 text-red-800': !value}" 
                       class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                      {{ value ? 'Activo' : 'Inactivo' }}
                    </p>
                    <p v-else class="mt-1 text-gray-900 font-medium text-base">{{ value || 'N/A' }}</p>
                  </template>
                </div>
              </div>
            </div>
          </section>
        </div>
  
        <!-- Acciones de formulario con mejor espaciado -->
        <div v-if="isEditing" class="flex flex-col sm:flex-row justify-end gap-4 mt-10">
          <button
            @click="cancelEdit"
            class="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Cancelar
          </button>
          <button
            @click="saveProfile"
            class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg shadow-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            :disabled="isSaving"
          >
            <span v-if="!isSaving">Guardar cambios</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Guardando...
            </span>
          </button>
        </div>
  
        <!-- Estados de carga y mensajes mejorados -->
        <div v-if="isLoading && !isEditing" class="text-center py-12">
          <div class="inline-flex flex-col items-center">
            <svg class="animate-spin h-10 w-10 text-emerald-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-gray-600">Cargando información del perfil...</p>
          </div>
        </div>
        
        <!-- Mensajes de feedback mejorados -->
        <transition name="fade">
          <div v-if="error" class="fixed bottom-6 right-6 max-w-md bg-red-50 border-l-4 border-red-500 p-4 shadow-lg rounded-lg z-50">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">Error</h3>
                <p class="mt-1 text-sm text-red-700">{{ error }}</p>
              </div>
              <button @click="error = null" class="ml-auto -mx-1.5 -my-1.5 text-red-500 hover:text-red-600 focus:outline-none">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </transition>
        
        <transition name="fade">
          <div v-if="successMessage" class="fixed bottom-6 right-6 max-w-md bg-emerald-50 border-l-4 border-emerald-500 p-4 shadow-lg rounded-lg z-50">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-emerald-800">Éxito</h3>
                <p class="mt-1 text-sm text-emerald-700">{{ successMessage }}</p>
              </div>
              <button @click="successMessage = null" class="ml-auto -mx-1.5 -my-1.5 text-emerald-500 hover:text-emerald-600 focus:outline-none">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </template>

  <script>
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
          telefono_contacto: 'Teléfono de contacto',
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

          const response = await axios.get('http://localhost:8000/afiliados/me', {
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
            'http://localhost:8000/afiliados/me', 
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
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
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