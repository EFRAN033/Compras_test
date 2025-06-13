<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
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

    <main class="flex-grow flex items-center justify-center py-10 px-4">
      <div class="w-full max-w-4xl">
        <section class="mb-8">
          <div class="container mx-auto max-w-md">
            <div class="bg-white rounded-xl shadow-md p-1 border border-gray-100 flex items-center justify-center">
              <button 
                @click="activeTab = 'afiliado'"
                :class="[
                  'flex-1 py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out relative z-10',
                  activeTab === 'afiliado' 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                ]"
              >
                Soy Afiliado
              </button>
              <button 
                @click="activeTab = 'proveedor'"
                :class="[
                  'flex-1 py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out relative z-10',
                  activeTab === 'proveedor' 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-50'
                ]"
              >
                Soy Proveedor
              </button>
            </div>
          </div>
        </section>

        <transition name="fade-slide" mode="out-in">
          <div v-if="activeTab === 'afiliado'" :key="'afiliado'" class="container mx-auto px-6 max-w-4xl">
            <div class="grid md:grid-cols-2 gap-12 items-start">
              <div class="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 animate-slide-in-left">
                <div class="text-center mb-8">
                  <h2 class="text-3xl font-extrabold text-gray-900 mb-2">
                    <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Acceso Afiliados
                    </span>
                  </h2>
                  <p class="text-gray-600 text-lg">Gestiona tus compras y proveedores preferidos</p>
                </div>

                <form @submit.prevent="loginAfiliado" class="space-y-6">
                  <div>
                    <label for="email-afiliado" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                    <input 
                      v-model="form.email"
                      type="email" 
                      id="email-afiliado" 
                      placeholder="tu@empresa.com" 
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      required
                    >
                  </div>
                  <div>
                    <label for="password-afiliado" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                    <input 
                      v-model="form.password"
                      type="password" 
                      id="password-afiliado" 
                      placeholder="••••••••" 
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      required
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input 
                        v-model="form.remember"
                        id="remember-afiliado" 
                        type="checkbox" 
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      >
                      <label for="remember-afiliado" class="ml-2 block text-sm text-gray-700 cursor-pointer">Recordar sesión</label>
                    </div>
                    <router-link 
                      to="/recuperar-contrasena" 
                      class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      ¿Olvidaste tu contraseña?
                    </router-link>
                  </div>
                  <button 
                    type="submit" 
                    class="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Iniciar sesión
                  </button>
                </form>

                <div class="mt-8">
                  <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">¿No tienes cuenta?</span>
                    </div>
                  </div>
                  <div class="mt-6 grid grid-cols-1">
                    <router-link 
                      to="/registro-afiliado" 
                      class="w-full py-3 px-4 bg-white text-blue-600 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-blue-50 transition-all duration-200 flex items-center justify-center"
                    >
                      Regístrate como Afiliado
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-2xl border border-blue-100 shadow-xl animate-slide-in-right">
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-extrabold text-gray-900 mb-3">
                    <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Beneficios exclusivos
                    </span>
                  </h3>
                  <p class="text-gray-600 text-lg">Para empresas afiliadas a ProVeo</p>
                </div>

                <ul class="space-y-5">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Acceso a proveedores verificados con estándares de calidad</span>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Comparación de precios y condiciones en tiempo real</span>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Sistema de pedidos y seguimiento integrado</span>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Alertas de nuevas ofertas y disponibilidad</span>
                  </li>
                </ul>

                <div class="mt-10 bg-white/70 p-6 rounded-xl border border-blue-100 shadow-inner">
                  <h4 class="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <svg class="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                    </svg>
                    ¿Necesitas ayuda?
                  </h4>
                  <p class="text-sm text-gray-600">Nuestro equipo está disponible para orientarte en el proceso de compra y selección de proveedores.</p>
                  <router-link 
                    to="/contacto" 
                    class="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
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

          <div v-else-if="activeTab === 'proveedor'" :key="'proveedor'" class="container mx-auto px-6 max-w-4xl">
            <div class="grid md:grid-cols-2 gap-12 items-start">
              <div class="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 animate-slide-in-left">
                <div class="text-center mb-8">
                  <h2 class="text-3xl font-extrabold text-gray-900 mb-2">
                    <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Acceso Proveedores
                    </span>
                  </h2>
                  <p class="text-gray-600 text-lg">Gestiona tu cuenta y conecta con compradores</p>
                </div>

                <form @submit.prevent="loginProveedor" class="space-y-6">
                  <div>
                    <label for="email-proveedor" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                    <input 
                      v-model="form.email"
                      type="email" 
                      id="email-proveedor" 
                      placeholder="tu@empresa.com" 
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    >
                  </div>
                  <div>
                    <label for="password-proveedor" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                    <input 
                      v-model="form.password"
                      type="password" 
                      id="password-proveedor" 
                      placeholder="••••••••" 
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input 
                        v-model="form.remember"
                        id="remember-proveedor" 
                        type="checkbox" 
                        class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      >
                      <label for="remember-proveedor" class="ml-2 block text-sm text-gray-700 cursor-pointer">Recordar sesión</label>
                    </div>
                    <router-link 
                      to="/recuperar-contrasena" 
                      class="text-sm font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
                    >
                      ¿Olvidaste tu contraseña?
                    </router-link>
                  </div>
                  <button 
                    type="submit" 
                    class="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Iniciar sesión
                  </button>
                </form>

                <div class="mt-8">
                  <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">¿No tienes cuenta?</span>
                    </div>
                  </div>
                  <div class="mt-6 grid grid-cols-1">
                    <router-link 
                      to="/registro-proveedor" 
                      class="w-full py-3 px-4 bg-white text-emerald-600 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-emerald-50 transition-all duration-200 flex items-center justify-center"
                    >
                      Regístrate como Proveedor
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10 rounded-2xl border border-emerald-100 shadow-xl animate-slide-in-right">
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-extrabold text-gray-900 mb-3">
                    <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Requisitos para Proveedores
                    </span>
                  </h3>
                  <p class="text-gray-600 text-lg">Únete a nuestra red exclusiva y aumenta tus ventas</p>
                </div>

                <ul class="space-y-5">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Empresa registrada legalmente (RFC/Identificación fiscal)</span>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Mínimo 2 años de experiencia en tu sector</span>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Capacidad para cumplir pedidos de +100 unidades/mes</span>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                      <svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">**Certificaciones de calidad** (opcional pero valorado)</span>
                  </li>
                </ul>

                <div class="mt-10 bg-white/70 p-6 rounded-xl border border-emerald-100 shadow-inner">
                  <h4 class="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <svg class="w-6 h-6 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                    </svg>
                    Proceso de Verificación
                  </h4>
                  <ol class="list-decimal list-inside text-sm text-gray-600 space-y-2 pl-1">
                    <li>Registro y envío de documentación</li>
                    <li>Revisión de antecedentes (3-5 días hábiles)</li>
                    <li>Entrevista con nuestro equipo de calidad</li>
                    <li>Activación de tu perfil y acceso a compradores</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </main>
    <Footer />
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
/*
  TRANSICIONES GLOBALES:
  Para un diseño más profesional, es bueno tener animaciones suaves.
  `transition-all duration-200` y `transition-colors` ya se usan en Tailwind.
  Aquí, definimos una transición para el cambio de pestañas.
*/
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Un deslizamiento más notable */
}

/*
  ANIMACIONES ESPECÍFICAS PARA CONTENEDORES:
  Estas animaciones le dan un toque moderno cuando cambias de formulario.
*/
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out forwards;
}

/*
  AJUSTES FINOS PARA ELEMENTOS ESPECÍFICOS:
  Mejores estados de foco para inputs y checkboxes.
*/
input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: var(--focused-border-color); /* Usaremos variables CSS para esto */
  box-shadow: 0 0 0 3px var(--focused-ring-color);
}

input[type="checkbox"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--focused-ring-color);
}

/*
  Estilos para la sombra del texto ProVeo en el header.
  Mantienes el estilo original si es el que te gusta.
*/
.text-shadow-provo {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Animación para el logo (si es necesaria) */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out forwards;
}

/*
  Variables CSS para colores dinámicos en los focos de input.
  Esto nos permite cambiar el color de foco dependiendo de la pestaña activa.
*/
html {
  --focused-border-color: #3b82f6; /* Default Blue for Afiliados */
  --focused-ring-color: rgba(59, 130, 246, 0.2);
}

.afiliado-active {
  --focused-border-color: #3b82f6;
  --focused-ring-color: rgba(59, 130, 246, 0.2);
}

.proveedor-active {
  --focused-border-color: #059669; /* Emerald-600 */
  --focused-ring-color: rgba(5, 150, 105, 0.2);
}
</style>