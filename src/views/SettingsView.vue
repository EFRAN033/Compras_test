<template>
    <div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex flex-col font-sans relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20"
           style="background-image: radial-gradient(circle at 10% 20%, rgba(6,182,212,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 90% 80%, rgba(20,184,166,0.1) 0%, transparent 50%);
                  background-size: 800px 800px;">
      </div>
  
      <header class="bg-white/90 backdrop-blur-sm shadow-md py-3 sticky top-0 z-50 transform translate-y-0 opacity-100 transition-all duration-500 ease-out">
        <div class="container mx-auto px-6 flex justify-between items-center relative">
          <button
            @click="$router.go(-1)"
            class="group relative flex items-center px-3 py-2 rounded-full text-emerald-600 border border-emerald-200 bg-white
                   hover:bg-emerald-50 hover:border-emerald-400 transform hover:scale-105 transition-all duration-300 ease-out
                   focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Volver a la página anterior"
          >
            <span class="absolute inset-0 block rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style="background: radial-gradient(circle at center, rgba(6,182,212,0.3) 0%, transparent 70%);"></span>
            <svg class="w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform duration-200 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span class="font-semibold text-xs sm:text-sm z-10">Volver</span>
          </button>
  
          <router-link
            to="/"
            class="flex items-center absolute left-1/2 transform -translate-x-1/2 animate-fade-in-down"
            aria-label="Ir a la página de inicio de ProVeo"
          >
            <span class="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent
                         relative inline-block perspective-1000
                         hover:scale-105 transition-transform duration-300 ease-out logo-3d-effect"
            >
              <span class="absolute inset-0 -top-0.5 left-0.5 text-shadow-provo opacity-20" aria-hidden="true">ProVeo</span>
              ProVeo
            </span>
          </router-link>
  
          <div class="w-20 sm:w-auto opacity-0"></div> </div>
      </header>
  
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pt-8 pb-16 flex-grow relative z-10">
        <h1 class="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-4 text-center animate-fade-in-down">
          Configuración de Cuenta
        </h1>
        <p class="text-lg text-gray-700 text-center mb-8 animate-fade-in-up">
          Gestiona tus preferencias, notificaciones y seguridad.
        </p>
  
        <div class="space-y-6">
          <section class="bg-white/70 backdrop-blur-md rounded-xl shadow-md border border-gray-200
                          transform transition-all duration-300 ease-out hover:shadow-lg hover:border-teal-300 glassmorphism-card animate-fade-in-left">
            <div class="p-5 sm:p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-5 flex items-center pb-2 border-b border-gray-200">
                <svg class="w-6 h-6 mr-2 text-teal-600 flex-shrink-0 card-icon-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 00-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4z"></path>
                </svg>
                Preferencias Generales
              </h2>
  
              <div class="space-y-4">
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <label for="email_notifications" class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    Notificaciones por Email
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="settings.emailNotifications" class="sr-only peer">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
  
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <label for="interface_theme" class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    Tema de la Interfaz
                  </label>
                  <select v-model="settings.interfaceTheme"
                          class="block w-auto border border-gray-300 rounded-md px-2 py-1 text-gray-800 text-sm
                                 focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all duration-200
                                 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md">
                    <option value="light">Claro</option>
                    <option value="dark">Oscuro</option>
                    <option value="system">Sistema</option>
                  </select>
                </div>
  
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <label for="show_confirm_popups" class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                    Mostrar Pop-ups de Confirmación
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="settings.confirmPopups" class="sr-only peer">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </section>
  
          <section class="bg-white/70 backdrop-blur-md rounded-xl shadow-md border border-gray-200
                          transform transition-all duration-300 ease-out hover:shadow-lg hover:border-teal-300 glassmorphism-card animate-fade-in-right">
            <div class="p-5 sm:p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-5 flex items-center pb-2 border-b border-gray-200">
                <svg class="w-6 h-6 mr-2 text-teal-600 flex-shrink-0 card-icon-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H3a2 2 0 01-2-2v-5a2 2 0 012-2h2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                </svg>
                Seguridad y Acceso
              </h2>
  
              <div class="space-y-4">
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H9V7a3 3 0 016 0v2a2 2 0 104 0V7a7 7 0 10-14 0v2h2a2 2 0 002 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H9V7a3 3 0 016 0v2z"></path>
                    </svg>
                    Cambiar Contraseña
                  </span>
                  <button @click="showChangePasswordModal = true"
                          class="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-md shadow-sm text-sm
                                 hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 ease-in-out transform hover:scale-105
                                 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 glass-button-sm">
                    Cambiar
                  </button>
                </div>
  
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <label for="two_factor_auth" class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                    </svg>
                    Autenticación de Dos Factores (2FA)
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="settings.twoFactorAuth" class="sr-only peer">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
  
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                    Cerrar Sesiones Activas
                  </span>
                  <button @click="showLogoutAllModal = true"
                          class="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm text-sm
                                 hover:bg-red-600 transition-all duration-200 ease-in-out transform hover:scale-105
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 glass-button-sm">
                    Cerrar Sesiones
                  </button>
                </div>
              </div>
            </div>
          </section>
  
          <section class="bg-white/70 backdrop-blur-md rounded-xl shadow-md border border-gray-200
                          transform transition-all duration-300 ease-out hover:shadow-lg hover:border-teal-300 glassmorphism-card animate-fade-in-up">
            <div class="p-5 sm:p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-5 flex items-center pb-2 border-b border-gray-200">
                <svg class="w-6 h-6 mr-2 text-teal-600 flex-shrink-0 card-icon-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1zM9 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1zM11 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1z"></path>
                  <path fill-rule="evenodd" d="M12.293 4.293a1 1 0 011.414 0l1 1a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.24-1.24l1-3a1 1 0 01.242-.39l9-9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                Gestión de Datos
              </h2>
  
              <div class="space-y-4">
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Exportar mis datos
                  </span>
                  <button @click="exportData"
                          class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-md shadow-sm text-sm
                                 hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 ease-in-out transform hover:scale-105
                                 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 glass-button-sm">
                    Exportar
                  </button>
                </div>
  
                <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span class="text-gray-700 font-medium text-sm flex items-center">
                    <svg class="w-4 h-4 mr-2 text-teal-500 icon-pulse-subtle" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clip-rule="evenodd"></path>
                    </svg>
                    Eliminar mi cuenta
                  </span>
                  <button @click="showDeleteAccountModal = true"
                          class="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm text-sm
                                 hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 glass-button-sm">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
  
        <transition name="modal-fade">
          <div v-if="showChangePasswordModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div class="bg-white rounded-xl shadow-xl p-6 max-w-md w-full animate-scale-in">
              <h3 class="text-xl font-bold text-gray-800 mb-3">Cambiar Contraseña</h3>
              <p class="text-gray-600 mb-4 text-sm">Ingresa tu contraseña actual y la nueva contraseña para actualizarla.</p>
              <form @submit.prevent="changePassword" class="space-y-3">
                <div>
                  <label for="current_password" class="block text-xs font-medium text-gray-700 mb-1">Contraseña Actual</label>
                  <input type="password" id="current_password" v-model="passwords.current"
                         class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 focus:border-teal-500">
                </div>
                <div>
                  <label for="new_password" class="block text-xs font-medium text-gray-700 mb-1">Nueva Contraseña</label>
                  <input type="password" id="new_password" v-model="passwords.new"
                         class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 focus:border-teal-500">
                </div>
                <div>
                  <label for="confirm_password" class="block text-xs font-medium text-gray-700 mb-1">Confirmar Nueva Contraseña</label>
                  <input type="password" id="confirm_password" v-model="passwords.confirm"
                         class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 focus:border-teal-500">
                </div>
                <div class="flex justify-end gap-2 mt-4">
                  <button type="button" @click="showChangePasswordModal = false"
                          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium text-sm hover:bg-gray-300 transition-colors">
                    Cancelar
                  </button>
                  <button type="submit"
                          class="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-md font-medium text-sm hover:from-teal-600 hover:to-emerald-700 transition-colors">
                    Confirmar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </transition>
  
        <transition name="modal-fade">
          <div v-if="showDeleteAccountModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div class="bg-white rounded-xl shadow-xl p-6 max-w-md w-full animate-scale-in">
              <h3 class="text-xl font-bold text-red-700 mb-3">Eliminar Cuenta</h3>
              <p class="text-gray-600 mb-4 text-sm">Estás a punto de eliminar tu cuenta de forma permanente. Esta acción no se puede deshacer.</p>
              <p class="font-semibold text-red-600 mb-4 text-sm">¿Estás absolutamente seguro?</p>
              <div class="flex justify-end gap-2 mt-4">
                <button type="button" @click="showDeleteAccountModal = false"
                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium text-sm hover:bg-gray-300 transition-colors">
                  Cancelar
                </button>
                <button type="button" @click="deleteAccount"
                          class="px-4 py-2 bg-red-600 text-white rounded-md font-medium text-sm hover:bg-red-700 transition-colors">
                    Sí, eliminar mi cuenta
                  </button>
                </div>
              </div>
            </div>
          </transition>
  
          <transition name="toast-slide">
            <div v-if="error" class="fixed bottom-8 right-8 max-w-sm w-full bg-red-50 border-l-4 border-red-500 p-4 shadow-xl rounded-md z-50 transform translate-x-0 opacity-100">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-semibold text-red-800">Error en la operación</h3>
                  <p class="mt-1 text-xs text-red-700">{{ error }}</p>
                </div>
                <button @click="error = null" class="ml-auto -mx-1 -my-1 p-1 rounded-full text-red-500 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </transition>
  
          <transition name="toast-slide">
            <div v-if="successMessage" class="fixed bottom-8 right-8 max-w-sm w-full bg-emerald-50 border-l-4 border-emerald-500 p-4 shadow-xl rounded-md z-50 transform translate-x-0 opacity-100">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-semibold text-emerald-800">¡Éxito!</h3>
                  <p class="mt-1 text-xs text-emerald-700">{{ successMessage }}</p>
                </div>
                <button @click="successMessage = null" class="ml-auto -mx-1 -my-1 p-1 rounded-full text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
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
  import axios from 'axios'; // Asegúrate de tener axios instalado: npm install axios
  
  export default {
    name: 'SettingsView',
    data() {
      return {
        settings: {
          emailNotifications: true,
          interfaceTheme: 'system',
          confirmPopups: true,
          twoFactorAuth: false,
        },
        passwords: {
          current: '',
          new: '',
          confirm: '',
        },
        showChangePasswordModal: false,
        showLogoutAllModal: false, // Para una futura implementación de "cerrar todas las sesiones"
        showDeleteAccountModal: false,
        error: null,
        successMessage: null,
      };
    },
    methods: {
      // --- Métodos para la lógica de settings ---
  
      async loadSettings() {
        // En una aplicación real, aquí harías una llamada a tu API para cargar las configuraciones del usuario.
        // Por ahora, usamos valores por defecto o simulamos una carga.
        console.log('Cargando configuraciones...');
        this.error = null;
        this.successMessage = null;
        try {
          // Simula una carga de API
          await new Promise(resolve => setTimeout(resolve, 500));
          // Recuperar configuraciones del localStorage o de un API
          const storedSettings = JSON.parse(localStorage.getItem('userSettings')) || {};
          this.settings = { ...this.settings, ...storedSettings };
          this.successMessage = 'Configuración cargada correctamente.';
        } catch (e) {
          this.error = 'Error al cargar las configuraciones. Intenta de nuevo.';
        } finally {
          setTimeout(() => this.successMessage = null, 3000); // Oculta el mensaje de éxito
        }
      },
  
      async saveSettings() {
        // Aquí enviarías las configuraciones actualizadas a tu API
        console.log('Guardando configuraciones:', this.settings);
        this.error = null;
        this.successMessage = null;
        try {
          // Simula una llamada a la API
          await new Promise(resolve => setTimeout(resolve, 700));
          localStorage.setItem('userSettings', JSON.stringify(this.settings));
          this.successMessage = 'Configuración guardada correctamente.';
        } catch (e) {
          this.error = 'Error al guardar las configuraciones. Intenta de nuevo.';
        } finally {
          setTimeout(() => this.successMessage = null, 3000); // Oculta el mensaje de éxito
        }
      },
  
      async changePassword() {
        this.error = null;
        this.successMessage = null;
  
        if (this.passwords.new !== this.passwords.confirm) {
          this.error = 'La nueva contraseña y la confirmación no coinciden.';
          return;
        }
        if (!this.passwords.current || !this.passwords.new) {
          this.error = 'Todos los campos de contraseña son obligatorios.';
          return;
        }
        // Aquí se realizaría la llamada a la API para cambiar la contraseña
        console.log('Cambiando contraseña...');
        try {
          const authToken = localStorage.getItem('authToken');
          if (!authToken) {
            this.error = "No autenticado. Por favor, inicia sesión.";
            this.$router.push('/login');
            return;
          }
  
          // Ejemplo de llamada PATCH a una API (ajusta la URL y el payload)
          // await axios.patch('http://localhost:8000/afiliados/change-password', {
          //   current_password: this.passwords.current,
          //   new_password: this.passwords.new
          // }, {
          //   headers: {
          //     Authorization: `Bearer ${authToken}`
          //   }
          // });
  
          await new Promise(resolve => setTimeout(resolve, 1000)); // Simula la llamada
          this.successMessage = 'Contraseña actualizada exitosamente.';
          this.showChangePasswordModal = false;
          this.passwords = { current: '', new: '', confirm: '' }; // Limpiar campos
          setTimeout(() => this.successMessage = null, 5000);
        } catch (err) {
          console.error("Error al cambiar contraseña:", err);
          if (err.response && err.response.data && err.response.data.detail) {
            this.error = err.response.data.detail;
          } else {
            this.error = "Error al cambiar la contraseña. Verifica tu contraseña actual.";
          }
        }
      },
  
      async exportData() {
        this.error = null;
        this.successMessage = null;
        console.log('Exportando datos del usuario...');
        try {
          // Aquí podrías llamar a una API para generar y descargar un archivo (CSV, JSON, etc.)
          // const response = await axios.get('http://localhost:8000/afiliados/export-data', {
          //   headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
          //   responseType: 'blob' // Importante para descargar archivos
          // });
          // const url = window.URL.createObjectURL(new Blob([response.data]));
          // const link = document.createElement('a');
          // link.href = url;
          // link.setAttribute('download', 'mis_datos_proveeo.json'); // o .csv
          // document.body.appendChild(link);
          // link.click();
          // link.remove();
  
          await new Promise(resolve => setTimeout(resolve, 1500)); // Simula descarga
          this.successMessage = 'Datos exportados correctamente. La descarga debería comenzar pronto.';
        } catch (e) {
          this.error = 'Error al exportar datos. Intenta de nuevo.';
          console.error('Error exportando datos:', e);
        } finally {
          setTimeout(() => this.successMessage = null, 5000);
        }
      },
  
      async deleteAccount() {
        this.error = null;
        this.successMessage = null;
        console.warn('Iniciando proceso de eliminación de cuenta...');
        try {
          // Aquí se realizaría la llamada a la API para eliminar la cuenta
          // const authToken = localStorage.getItem('authToken');
          // await axios.delete('http://localhost:8000/afiliados/me', {
          //   headers: { Authorization: `Bearer ${authToken}` }
          // });
  
          await new Promise(resolve => setTimeout(resolve, 2000)); // Simula la eliminación
          localStorage.removeItem('authToken');
          localStorage.removeItem('userName');
          localStorage.removeItem('userRole');
          localStorage.removeItem('userSettings'); // Limpiar settings también
          this.successMessage = 'Tu cuenta ha sido eliminada exitosamente. Serás redirigido.';
          this.showDeleteAccountModal = false;
          setTimeout(() => {
            this.$router.push('/login'); // Redirigir al login
          }, 3000);
        } catch (err) {
          console.error("Error al eliminar la cuenta:", err);
          if (err.response && err.response.data && err.response.data.detail) {
            this.error = err.response.data.detail;
          } else {
            this.error = "Error al eliminar la cuenta. Por favor, contacta a soporte.";
          }
        }
      },
  
      // Método para manejar errores de API de forma centralizada
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
    },
    mounted() {
      this.loadSettings();
    },
    watch: {
      // Guarda las configuraciones automáticamente cada vez que cambian
      'settings': {
        handler() {
          this.saveSettings();
        },
        deep: true // Observa cambios profundos en el objeto settings
      }
    }
  };
  </script>
  
  <style>
  /* --- Animaciones y Estilos Personalizados (adaptados de ProfileView) --- */
  /* Se asume que tienes Tailwind CSS configurado y las fuentes que desees. */
  
  /* Animaciones de entrada para elementos clave */
  @keyframes fade-in-down {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-down {
    animation: fade-in-down 0.6s ease-out forwards;
  }
  
  @keyframes fade-in-right {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-fade-in-right {
    animation: fade-in-right 0.7s ease-out forwards;
  }
  
  @keyframes fade-in-left {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-fade-in-left {
    animation: fade-in-left 0.7s ease-out forwards;
  }
  
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
  
  /* Efecto de sombra para el texto ProVeo */
  .text-shadow-provo {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Efecto 3D para el logo */
  .logo-3d-effect {
    transform-style: preserve-3d;
    transition: transform 0.3s ease-out;
  }
  .logo-3d-effect:hover {
    transform: rotateX(5deg) rotateY(5deg);
  }
  
  /* Efecto Glassmorphism */
  .glassmorphism-card {
    background: rgba(255, 255, 255, 0.7); /* Blanco con transparencia */
    backdrop-filter: blur(8px) saturate(180%); /* Ligeramente menos blur */
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    border: 1px solid rgba(209, 213, 219, 0.3); /* Borde semitransparente */
  }
  
  /* Botones Glassmorphism más pequeños */
  .glass-button-sm {
    background: linear-gradient(135deg, rgba(20,184,166,0.8) 0%, rgba(6,182,212,0.8) 100%); /* Colores de tu paleta */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Menos sombra */
    transition: all 0.3s ease;
  }
  .glass-button-sm:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Menos sombra al hover */
    transform: translateY(-1px); /* Menos elevación */
  }
  /* Estilos para el botón de eliminación específicos */
  .glass-button-sm.bg-red-500 {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%);
  }
  .glass-button-sm.hover\:bg-red-600:hover {
    background: linear-gradient(135deg, rgba(220, 38, 38, 0.9) 0%, rgba(185, 28, 28, 0.9) 100%);
  }
  
  
  /* Animación sutil para íconos */
  @keyframes icon-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); } /* Menos pulsación */
  }
  .icon-pulse {
    animation: icon-pulse 2s infinite ease-in-out;
  }
  .icon-pulse-subtle {
    animation: icon-pulse 3s infinite ease-in-out;
  }
  
  /* Animación de brillo para íconos de tarjetas (similares a avatar glow) */
  @keyframes card-icon-glow-pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.07); opacity: 0.9; } /* Menos pulsación */
    100% { transform: scale(1); opacity: 1; }
  }
  .card-icon-glow {
    animation: card-icon-glow-pulse 2.5s infinite ease-in-out;
  }
  
  /* Sombra ajustada para tarjetas */
  .shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  /* Transiciones para mensajes tipo toast (copiado de ProfileView) */
  .toast-slide-enter-active, .toast-slide-leave-active {
    transition: transform 0.4s ease-out, opacity 0.4s ease-out; /* Velocidad ligeramente más rápida */
  }
  .toast-slide-enter-from, .toast-slide-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  
  /* Animaciones para modales */
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.2s ease; /* Transición más rápida para el fondo */
  }
  .modal-fade-enter-from, .modal-fade-leave-to {
    opacity: 0;
  }
  
  @keyframes scale-in {
    from { transform: scale(0.95); opacity: 0; } /* Empieza un poco más grande */
    to { transform: scale(1); opacity: 1; }
  }
  .animate-scale-in {
    animation: scale-in 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; /* Velocidad ligeramente más rápida */
  }
  
  /* Asegurar que el contenedor principal ocupe toda la altura */
  #app {
    @apply min-h-screen flex flex-col;
  }
  </style>