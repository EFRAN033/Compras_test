<template>
    <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans">
      <div class="w-full max-w-md p-8 md:p-10 lg:p-12 bg-white rounded-2xl shadow-xl border border-gray-100 animate-fade-in">
        <div class="text-center mb-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            <span class="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              Acceso de Administrador
            </span>
          </h2>
          <p class="text-slate-500 text-base lg:text-lg">Inicia sesión para acceder al panel de gestión.</p>
        </div>
  
        <form @submit.prevent="handleAdminLogin" class="space-y-5">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </span>
            <input v-model="form.email" type="email" placeholder="admin@gmail.com" :class="inputClasses" required>
          </div>
          
          <div class="relative">
             <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd"></path></svg>
            </span>
            <input v-model="form.password" :type="passwordFieldType" placeholder="Contraseña de Administrador" :class="inputClasses" required>
            <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500 hover:text-slate-700" aria-label="Mostrar u ocultar contraseña">
              <svg v-if="passwordFieldType === 'password'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C3.732 4.943 7.523 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-7.03 7-9.542 7S3.274 15.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
              <svg v-else class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C16.268 4.943 12.477 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M9.879 16c-3.274-5.057-7.03-7-9.421-7a10.007 10.007 0 011.523-3.419l1.473 1.473a10.014 10.014 0 0012.84 12.84l1.473 1.473A10.007 10.007 0 019.879 16z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
    
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input v-model="form.remember" id="remember-admin" type="checkbox" :class="checkboxClasses">
              <label for="remember-admin" class="ml-2 block text-sm text-slate-600 cursor-pointer select-none">Recordar sesión</label>
            </div>
            <router-link to="/recuperar-contrasena" :class="linkClasses">
              ¿Olvidaste tu contraseña?
            </router-link>
          </div>
            
          <button type="submit" :class="submitButtonClasses" :disabled="loading">
            <span v-if="!loading" class="flex items-center justify-center">Iniciar sesión como Administrador</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Procesando...
            </span>
          </button>
        </form>
    
        <div class="mt-8 text-center">
          <p class="text-sm text-slate-500">
            <router-link to="/login" class="font-semibold text-slate-600 hover:text-slate-800 transition-colors duration-200">
              Volver al login principal
            </router-link>
          </p>
        </div>
      </div>
        
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
    import { ref, reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    
    const router = useRouter();
    const loading = ref(false);
    const passwordFieldType = ref('password');
    // Pre-llenado del formulario con las credenciales de admin para tu comodidad
    const form = reactive({ email: 'admin@gmail.com', password: 'admin', remember: false }); 
    
    const notification = reactive({
      show: false,
      type: 'success',
      title: '',
      message: '',
    });
    
    const togglePasswordVisibility = () => {
      passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
    };
    
    const showNotification = (type, title, message) => {
      notification.type = type;
      notification.title = title;
      notification.message = message;
      notification.show = true;
      setTimeout(() => (notification.show = false), 5000);
    };
    
    const handleAdminLogin = async () => {
      if (loading.value) return;
      loading.value = true;
      
      // Endpoint específico para el login de admin en tu backend
      const endpoint = `http://localhost:8000/admin/login`; 
        
      try {
        const response = await axios.post(endpoint, { email: form.email, password: form.password });
        
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userName', response.data.user_name || form.email);
        localStorage.setItem('userRole', 'admin'); // Forzamos el rol a 'admin' tras el login exitoso
        
        showNotification('success', '¡Éxito!', 'Inicio de sesión de administrador correcto.');
        
        setTimeout(() => {
          // Redirige a admin_pro.vue después de un inicio de sesión exitoso
          router.push('/admin_pro'); // <--- CAMBIO AQUÍ para redirigir a admin_pro.vue
        }, 1000);
    
      } catch (error) {
        const errorMessage = error.response?.data?.detail || 'Error de conexión o credenciales incorrectas para administrador.';
        showNotification('error', 'Error de Autenticación', errorMessage);
      } finally {
        setTimeout(() => (loading.value = false), 500);
      }
    };
    
    // Clases TailwindCSS (pueden ser comunes a otros formularios)
    const inputClasses = 'pl-11 pr-4 py-3 w-full rounded-lg border border-slate-300 transition-all duration-200 bg-slate-50 text-slate-800 focus:bg-white focus:ring-purple-500 focus:border-purple-500';
    const checkboxClasses = 'h-4 w-4 border-slate-300 rounded text-purple-600 focus:ring-purple-500';
    const linkClasses = 'text-sm font-semibold transition-colors duration-200 text-purple-600 hover:text-purple-500';
    const submitButtonClasses = 'w-full py-3.5 px-4 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 to-indigo-500 focus:ring-purple-500';
    
    </script>
    
    <style scoped>
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    </style>