<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Header simplificado -->
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


    <!-- Selector de tipo de login -->
    <section class="pt-8 pb-12">
      <div class="container mx-auto px-6 max-w-md">
        <div class="bg-white rounded-xl shadow-sm p-1 border border-gray-200">
          <div class="flex">
            <button 
              @click="activeTab = 'afiliado'"
              :class="[
                'flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-colors',
                activeTab === 'afiliado' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600'
              ]"
            >
              Soy Afiliado
            </button>
            <button 
              @click="activeTab = 'proveedor'"
              :class="[
                'flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-colors',
                activeTab === 'proveedor' 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-emerald-600'
              ]"
            >
              Soy Proveedor
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenido dinámico según tipo de usuario -->
    <main class="pb-20">
      <!-- Login para Afiliados -->
      <div v-if="activeTab === 'afiliado'" class="container mx-auto px-6 max-w-4xl">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Formulario -->
          <div class="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-2">
                <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Acceso Afiliados
                </span>
              </h2>
              <p class="text-gray-600">Gestiona tus compras y proveedores preferidos</p>
            </div>

            <form @submit.prevent="loginAfiliado" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  id="email" 
                  placeholder="tu@empresa.com" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
              </div>
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input 
                  v-model="form.password"
                  type="password" 
                  id="password" 
                  placeholder="••••••••" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input 
                    v-model="form.remember"
                    id="remember" 
                    type="checkbox" 
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  >
                  <label for="remember" class="ml-2 block text-sm text-gray-700">Recordar sesión</label>
                </div>
                <router-link 
                  to="/recuperar-contrasena" 
                  class="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  ¿Olvidaste tu contraseña?
                </router-link>
              </div>
              <button 
                type="submit" 
                class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Iniciar sesión
              </button>
            </form>

            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">¿No tienes cuenta?</span>
                </div>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-3">
                <router-link 
                  to="/registro-afiliado" 
                  class="w-full py-2.5 px-4 bg-white text-blue-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Regístrate como afiliado
                </router-link>
              </div>
            </div>
          </div>

          <!-- Beneficios Afiliados -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-2xl border border-blue-100">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Beneficios exclusivos
                </span>
              </h3>
              <p class="text-gray-600">Para empresas afiliadas a ProVeo</p>
            </div>

            <ul class="space-y-5">
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Acceso a proveedores verificados con estándares de calidad</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Comparación de precios y condiciones en tiempo real</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Sistema de pedidos y seguimiento integrado</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Alertas de nuevas ofertas y disponibilidad</span>
              </li>
            </ul>

            <div class="mt-8 bg-white/80 p-5 rounded-xl border border-blue-100">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center">
                <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                ¿Necesitas ayuda?
              </h4>
              <p class="text-sm text-gray-600">Nuestro equipo está disponible para orientarte en el proceso de compra y selección de proveedores.</p>
              <router-link 
                to="/contacto" 
                class="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Contactar soporte
                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Login para Proveedores -->
      <div v-if="activeTab === 'proveedor'" class="container mx-auto px-6 max-w-4xl">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Formulario -->
          <div class="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-2">
                <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Acceso Proveedores
                </span>
              </h2>
              <p class="text-gray-600">Gestiona tu cuenta y conecta con compradores</p>
            </div>

            <form @submit.prevent="loginProveedor" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  id="email" 
                  placeholder="tu@empresa.com" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  required
                >
              </div>
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input 
                  v-model="form.password"
                  type="password" 
                  id="password" 
                  placeholder="••••••••" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  required
                >
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input 
                    v-model="form.remember"
                    id="remember" 
                    type="checkbox" 
                    class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  >
                  <label for="remember" class="ml-2 block text-sm text-gray-700">Recordar sesión</label>
                </div>
                <router-link 
                  to="/recuperar-contrasena" 
                  class="text-sm font-medium text-emerald-600 hover:text-emerald-800"
                >
                  ¿Olvidaste tu contraseña?
                </router-link>
              </div>
              <button 
                type="submit" 
                class="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Iniciar sesión
              </button>
            </form>

            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">¿No tienes cuenta?</span>
                </div>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-3">
                <router-link 
                  to="/registro-proveedor" 
                  class="w-full py-2.5 px-4 bg-white text-emerald-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Regístrate como proveedor
                </router-link>
              </div>
            </div>
          </div>

          <!-- Beneficios Proveedores -->
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10 rounded-2xl border border-emerald-100">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Requisitos para Proveedores
                </span>
              </h3>
              <p class="text-gray-600">Únete a nuestra red exclusiva y aumenta tus ventas</p>
            </div>

            <ul class="space-y-5">
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-emerald-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Empresa registrada legalmente (RFC/Identificación fiscal)</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-emerald-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Mínimo 2 años de experiencia en tu sector</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-emerald-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Capacidad para cumplir pedidos de +100 unidades/mes</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 bg-emerald-100 p-1.5 rounded-lg">
                  <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="ml-3 text-gray-700">Certificaciones de calidad (opcional pero valorado)</span>
              </li>
            </ul>

            <div class="mt-8 bg-white/80 p-5 rounded-xl border border-emerald-100">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center">
                <svg class="w-5 h-5 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                Proceso de verificación
              </h4>
              <ol class="list-decimal list-inside text-sm text-gray-600 space-y-2 pl-1">
                <li>Registro y documentación</li>
                <li>Revisión de antecedentes (3-5 días hábiles)</li>
                <li>Entrevista con nuestro equipo</li>
                <li>Activación de tu perfil</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <span class="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            ProVeo
          </span>
          <p class="mt-4 text-sm max-w-2xl mx-auto">
            Plataforma líder en gestión inteligente de compras y cadena de suministro para empresas innovadoras.
          </p>
          <div class="flex justify-center space-x-6 mt-8">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          © 2023 ProVeo. Todos los derechos reservados. <a href="#" class="hover:text-white transition-colors">Términos</a> · <a href="#" class="hover:text-white transition-colors">Política de privacidad</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      activeTab: 'afiliado', // 'afiliado' o 'proveedor'
      form: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    loginAfiliado() {
      // Validación básica
      if (!this.form.email || !this.form.password) {
        alert('Por favor completa todos los campos');
        return;
      }

      // Aquí iría la lógica de autenticación real con tu backend
      console.log('Iniciando sesión como afiliado:', this.form);
      
      // Simulando autenticación exitosa
      setTimeout(() => {
        this.$router.push('/dashboard-afiliado');
      }, 1000);
    },
    loginProveedor() {
      // Validación básica
      if (!this.form.email || !this.form.password) {
        alert('Por favor completa todos los campos');
        return;
      }

      // Aquí iría la lógica de autenticación real con tu backend
      console.log('Iniciando sesión como proveedor:', this.form);
      
      // Simulando autenticación exitosa
      setTimeout(() => {
        this.$router.push('/dashboard-proveedor');
      }, 1000);
    }
  }
}
</script>

<style scoped>
/* Transiciones suaves para el cambio de pestañas */
.tab-transition-enter-active,
.tab-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.tab-transition-enter-from,
.tab-transition-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Efectos de hover */
button:hover {
  transform: translateY(-1px);
}

/* Degradados personalizados */
.bg-gradient-afiliado {
  background-image: radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.1) 0%, rgba(79, 70, 229, 0.05) 90%);
}

.bg-gradient-proveedor {
  background-image: radial-gradient(circle at 10% 20%, rgba(5, 150, 105, 0.1) 0%, rgba(16, 185, 129, 0.05) 90%);
}

/* Estilos para los inputs */
input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

/* Transiciones suaves */
.transition-all {
  transition: all 0.3s ease;
}
</style>