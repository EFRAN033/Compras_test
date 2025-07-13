<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-sans">
    
    <header class="bg-white shadow-md py-3 sticky top-0 z-50 overflow-hidden">
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
          class="flex items-center absolute left-1/2 transform -translate-x-1/2 animate-fade-in-down delay-100"
          aria-label="Ir a la página de inicio de ProVeo"
        >
          <span class="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent
                       relative inline-block hover:scale-105 transition-transform duration-300 ease-out text-shadow-provo"
          >
            ProVeo
          </span>
        </router-link>

        <div class="w-16 sm:w-auto opacity-0"></div>
        
        <router-link
          to="/admin"
          class="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Acceder al Panel de Administración"
          title="Panel de Administración"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </router-link>

      </div>
    </header>

    <main class="flex-grow flex items-center justify-center py-12 px-4">
      <div class="w-full max-w-5xl">
        
        <section class="mb-10 max-w-sm mx-auto">
          <div class="relative bg-slate-100 rounded-xl p-1 flex items-center justify-center">
            <span
              class="absolute left-1 top-1 bottom-1 w-1/2 rounded-lg transition-transform duration-300 ease-in-out"
              :class="[
                activeTab === 'afiliado' ? 'translate-x-0' : 'translate-x-full',
                currentConfig.theme.indicatorBg
              ]"
              aria-hidden="true"
            ></span>
            <button @click="activeTab = 'afiliado'" :class="getButtonClass('afiliado')">
              Soy Afiliado
            </button>
            <button @click="activeTab = 'proveedor'" :class="getButtonClass('proveedor')">
              Soy Proveedor
            </button>
          </div>
        </section>

        <transition name="fade-slide" mode="out-in">
          <div :key="activeTab" class="grid md:grid-cols-2 gap-x-16 items-center">
            
            <div class="bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl border border-gray-100 animate-slide-in-left">
              <div class="text-center mb-8">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                  <span :class="`bg-gradient-to-r ${currentConfig.theme.gradient} bg-clip-text text-transparent`">
                    {{ currentConfig.title }}
                  </span>
                </h2>
                <p class="text-slate-500 text-base lg:text-lg">{{ currentConfig.subtitle }}</p>
              </div>

              <form @submit.prevent="handleLogin" class="space-y-5">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </span>
                  <input v-model="form.email" type="email" placeholder="tu@empresa.com" :class="inputClasses" required>
                </div>
                
                <div class="relative">
                   <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <input v-model="form.password" :type="passwordFieldType" placeholder="Contraseña" :class="inputClasses" required>
                  <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500 hover:text-slate-700" aria-label="Mostrar u ocultar contraseña">
                    <svg v-if="passwordFieldType === 'password'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C3.732 4.943 7.523 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-7.03 7-9.542 7S3.274 15.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                    <svg v-else class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C16.268 4.943 12.477 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M9.879 16c-3.274-5.057-7.03-7-9.421-7a10.007 10.007 0 011.523-3.419l1.473 1.473a10.014 10.014 0 0012.84 12.84l1.473 1.473A10.007 10.007 0 019.879 16z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input v-model="form.remember" :id="`remember-${activeTab}`" type="checkbox" :class="checkboxClasses">
                    <label :for="`remember-${activeTab}`" class="ml-2 block text-sm text-slate-600 cursor-pointer select-none">Recordar sesión</label>
                  </div>
                  <router-link to="/recuperar-contrasena" :class="linkClasses">
                    ¿Olvidaste tu contraseña?
                  </router-link>
                </div>
                
                <button type="submit" :class="submitButtonClasses" :disabled="loading">
                  <span v-if="!loading" class="flex items-center justify-center">Iniciar sesión</span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Procesando...
                  </span>
                </button>
              </form>

              <div class="mt-8 text-center">
                <p class="text-sm text-slate-500">
                  ¿No tienes una cuenta?
                  <router-link :to="currentConfig.registerLink" :class="`font-semibold transition-colors duration-200 ${currentConfig.theme.text} ${currentConfig.theme.hover}`">
                    Regístrate aquí
                  </router-link>
                </p>
              </div>
            </div>

            <div :class="`relative p-8 md:p-10 lg:p-12 rounded-2xl border overflow-hidden animate-slide-in-right ${currentConfig.theme.infoBg} ${currentConfig.theme.infoBorder}`">
              <div :class="`absolute -top-1/4 -right-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-50 ${currentConfig.theme.glow}`" aria-hidden="true"></div>
              
              <div class="relative z-10">
                <div class="text-left mb-8">
                  <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                    <span :class="`bg-gradient-to-r ${currentConfig.theme.gradient} bg-clip-text text-transparent`">{{ currentConfig.infoCard.title }}</span>
                  </h3>
                  <p class="text-slate-500 text-base lg:text-lg">{{ currentConfig.subtitle }}</p>
                </div>
                <ul class="space-y-4">
                  <li v-for="item in currentConfig.infoCard.items" :key="item" class="flex items-start">
                    <div :class="`flex-shrink-0 mt-1 p-1.5 rounded-full ${currentConfig.theme.iconBg}`">
                      <svg :class="`h-4 w-4 ${currentConfig.theme.iconText}`" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <span class="ml-3 text-slate-600 font-medium">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
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
    
    <Footer class="mt-28" />
    
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Footer from './Footer.vue';

// --- ESTADO REACTIVO ---
const router = useRouter();
const activeTab = ref('afiliado');
const loading = ref(false);
const passwordFieldType = ref('password');
const form = reactive({ email: '', password: '', remember: false });

const notification = reactive({
  show: false,
  type: 'success',
  title: '',
  message: '',
});

// --- LÓGICA DE UI Y FORMULARIO ---
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

watch(activeTab, () => {
  form.email = '';
  form.password = '';
  form.remember = false;
  passwordFieldType.value = 'password';
});

// --- LÓGICA DE LOGIN ---
const handleLogin = async () => {
  if (loading.value) return;
  loading.value = true;
  
  const role = activeTab.value;
  let endpoint = ''; // Inicializamos vacío

  // === CORRECCIÓN APLICADA AQUÍ ===
  if (role === 'afiliado') {
    endpoint = import.meta.env.VITE_APP_API_BASE_URL + `/afiliados/login`;
  } else if (role === 'proveedor') {
    endpoint = import.meta.env.VITE_APP_API_BASE_URL + `/proveedores/login`; // Asegura que sea 'proveedores' con 'e'
  } else if (role === 'admin') { 
    // Si tienes una pestaña o botón de admin separado en el futuro,
    // o si el email/contraseña es una credencial de admin conocida.
    // Por ahora, asumimos que el rol de admin se maneja en un endpoint distinto
    // y el login de admin no está directamente en esta interfaz de tabs.
    // Si necesitas un login de admin aquí, asegúrate de que el endpoint sea el correcto.
    endpoint = import.meta.env.VITE_APP_API_BASE_URL + `/admin/login`; 
  }
  // ======================

  try {
    const response = await axios.post(endpoint, { email: form.email, password: form.password });
    
    localStorage.setItem('authToken', response.data.token);
    // Preferimos usar `response.data.user_role` si el backend lo devuelve, es más robusto.
    // Si tu backend no devuelve `user_role` explícitamente en el login, entonces `role` de la pestaña se usa.
    localStorage.setItem('userRole', response.data.user_role || role); 
    localStorage.setItem('userName', response.data.user_name || form.email);
    
    showNotification('success', '¡Éxito!', `Inicio de sesión como ${response.data.user_role || role} correcto.`);
    
    setTimeout(() => {
      let redirectPath;
      const loggedInRole = response.data.user_role || role; // Usa el rol de la respuesta del backend si existe
      if (loggedInRole === 'proveedor') {
        redirectPath = '/dashboard-proveedor';
      } else if (loggedInRole === 'admin') {
        redirectPath = '/admin';
      } else { // Asumimos 'afiliado' por defecto si no es proveedor o admin
        redirectPath = '/dashboard-afiliado'; // O la ruta por defecto para afiliados
      }
      router.push(redirectPath);
    }, 1000);

  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Error de conexión o credenciales incorrectas.';
    showNotification('error', 'Error de Autenticación', errorMessage);
  } finally {
    setTimeout(() => (loading.value = false), 500);
  }
};


// --- CONFIGURACIÓN CENTRALIZADA ---
const baseTheme = {
  input: 'pl-11 pr-4 py-3',
  checkbox: 'h-4 w-4 border-slate-300 rounded',
  link: 'text-sm font-semibold transition-colors duration-200',
  button: 'w-full py-3.5 px-4 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed'
}

const afiliadoConfig = {
  roleName: 'Afiliado',
  title: 'Bienvenido, Afiliado',
  subtitle: 'Accede para gestionar tus compras y proveedores.',
  registerLink: '/registro-afiliado',
  theme: {
    indicatorBg: 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md',
    gradient: 'from-blue-500 to-indigo-500',
    text: 'text-blue-600',
    ring: 'focus:ring-blue-500',
    border: 'focus:border-blue-500',
    hover: 'hover:text-blue-500',
    infoBg: 'bg-slate-100',
    infoBorder: 'border-slate-200/80',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    glow: 'bg-blue-300'
  },
  infoCard: {
    title: 'Tu Portal de Compras',
    subtitle: 'Todo lo que necesitas, en un solo lugar.',
    items: [ 'Accede a un catálogo de proveedores verificados.', 'Compara precios y condiciones en tiempo real.', 'Optimiza tu cadena de suministro con nosotros.', 'Recibe alertas de ofertas y nuevos productos.' ]
  }
};

const proveedorConfig = {
  roleName: 'Proveedor',
  title: 'Hola, Proveedor',
  subtitle: 'Gestiona tu perfil y conecta con nuevos clientes.',
  registerLink: '/registro-proveedor',
  theme: {
    indicatorBg: 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md',
    gradient: 'from-emerald-500 to-teal-500',
    text: 'text-emerald-600',
    ring: 'focus:ring-emerald-500',
    border: 'focus:border-emerald-500',
    hover: 'hover:text-emerald-500',
    infoBg: 'bg-slate-100',
    infoBorder: 'border-slate-200/80',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    glow: 'bg-emerald-300'
  },
  infoCard: {
    title: 'Tu Vitrina al Éxito',
    subtitle: 'Expande tu alcance en el mercado B2B.',
    items: [ 'Publica tu catálogo de productos y servicios.', 'Recibe y gestiona pedidos de forma centralizada.', 'Aumenta tu visibilidad ante cientos de empresas.', 'Accede a analíticas de rendimiento de tus ventas.' ]
  }
};

// --- PROPIEDADES COMPUTADAS PARA CLASES DINÁMICAS ---
const currentConfig = computed(() => activeTab.value === 'afiliado' ? afiliadoConfig : proveedorConfig);

const getButtonClass = (tabName) => {
  const isActive = activeTab.value === tabName;
  return `relative z-10 flex-1 py-2.5 px-4 text-base font-semibold rounded-lg transition-colors duration-300 ease-in-out focus:outline-none ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-800'}`;
};

const inputClasses = computed(() => `w-full rounded-lg border border-slate-300 transition-all duration-200 bg-slate-50 text-slate-800 focus:bg-white ${baseTheme.input} ${currentConfig.value.theme.ring} ${currentConfig.value.theme.border}`);
const checkboxClasses = computed(() => `${baseTheme.checkbox} ${currentConfig.value.theme.text} ${currentConfig.value.theme.ring}`);
const linkClasses = computed(() => `${baseTheme.link} ${currentConfig.value.theme.text} ${currentConfig.value.theme.hover}`);
const submitButtonClasses = computed(() => `${baseTheme.button} ${currentConfig.value.theme.gradient} ${currentConfig.value.theme.ring}`);
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>