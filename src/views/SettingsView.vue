<template>
  <div class="min-h-screen bg-white flex flex-col font-sans relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-20 bg-white">
    </div>

    <header class="bg-white/95 backdrop-blur-md shadow-md py-4 sticky top-0 z-50">
      <div class="container mx-auto px-6 flex justify-between items-center relative">
        <button
          @click="$router.go(-1)"
          class="group relative flex items-center px-4 py-2 rounded-lg text-emerald-700 border border-emerald-300 bg-white
                 hover:bg-emerald-50 hover:border-emerald-400 transform hover:scale-105 transition-all duration-200 ease-out
                 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Volver a la página anterior"
        >
          <svg class="w-4 h-4 mr-1 transition-transform duration-150 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span class="font-semibold text-sm z-10">Volver</span>
        </button>

        <router-link
          to="/"
          class="flex items-center absolute left-1/2 transform -translate-x-1/2"
          aria-label="Ir a la página de inicio de ProVeo"
        >
          <span class="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent
                       relative inline-block hover:scale-105 transition-transform duration-200 ease-out"
          >
            ProVeo
          </span>
        </router-link>

        <div class="w-20 sm:w-auto opacity-0"></div>
      </div>
    </header>

    <main class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-10 pb-16 flex-grow relative z-10">
      <h1 class="text-4xl font-extrabold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4 text-center animate-fade-in-down">
        Configuración de Cuenta
      </h1>
      <p class="text-lg text-gray-700 text-center mb-10 animate-fade-in-up">
        Gestiona tus preferencias de aplicación y seguridad para una experiencia optimizada.
      </p>

      <div class="space-y-8">
        <section class="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200
                        transform transition-all duration-300 ease-out hover:shadow-xl hover:border-teal-300 animate-fade-in-left">
          <div class="p-6 sm:p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center pb-3 border-b border-gray-200">
              <svg class="w-7 h-7 mr-3 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 00-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4z"></path>
              </svg>
              Preferencias Generales
            </h2>

            <div class="space-y-5">
              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <label for="email_notifications" class="text-gray-700 font-medium text-base flex items-center cursor-pointer">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Notificaciones por Email
                </label>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="settings.emailNotifications" class="sr-only peer" @change="saveSettings">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <label for="interface_theme" class="text-gray-700 font-medium text-base flex items-center">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  Tema de la Interfaz
                </label>
                <select v-model="settings.interfaceTheme" @change="saveSettings"
                        class="block w-auto border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 text-base
                               focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all duration-200
                               bg-white shadow-sm hover:shadow-md appearance-none cursor-pointer">
                  <option value="light">Claro</option>
                  <option value="dark">Oscuro</option>
                  <option value="system">Sistema</option>
                </select>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <label for="show_confirm_popups" class="text-gray-700 font-medium text-base flex items-center cursor-pointer">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                  </svg>
                  Mostrar Pop-ups de Confirmación
                </label>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="settings.confirmPopups" class="sr-only peer" @change="saveSettings">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200
                        transform transition-all duration-300 ease-out hover:shadow-xl hover:border-teal-300 animate-fade-in-right">
          <div class="p-6 sm:p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center pb-3 border-b border-gray-200">
              <svg class="w-7 h-7 mr-3 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H3a2 2 0 01-2-2v-5a2 2 0 012-2h2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
              </svg>
              Seguridad y Acceso
            </h2>

            <div class="space-y-5">
              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span class="text-gray-700 font-medium text-base flex items-center">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H9V7a3 3 0 016 0v2a2 2 0 104 0V7a7 7 0 10-14 0v2h2a2 2 0 002 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H9V7a3 3 0 016 0v2z"></path>
                  </svg>
                  Cambiar Contraseña
                </span>
                <button @click="showChangePasswordModal = true"
                        class="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md text-sm
                               hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 ease-in-out transform hover:scale-105
                               focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2">
                  Cambiar
                </button>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <label for="two_factor_auth" class="text-gray-700 font-medium text-base flex items-center cursor-pointer">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                  </svg>
                  Autenticación de Dos Factores (2FA)
                </label>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="settings.twoFactorAuth" class="sr-only peer" @change="saveSettings">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span class="text-gray-700 font-medium text-base flex items-center">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                  </svg>
                  Cerrar Sesiones Activas
                </span>
                <button @click="showLogoutAllModal = true"
                        class="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md text-sm
                               hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105
                               focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
                  Cerrar Sesiones
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200
                        transform transition-all duration-300 ease-out hover:shadow-xl hover:border-teal-300 animate-fade-in-up">
          <div class="p-6 sm:p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center pb-3 border-b border-gray-200">
              <svg class="w-7 h-7 mr-3 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1zM9 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1zM11 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1z"></path>
                <path fill-rule="evenodd" d="M12.293 4.293a1 1 0 011.414 0l1 1a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.24-1.24l1-3a1 1 0 01.242-.39l9-9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              Gestión de Datos
            </h2>

            <div class="space-y-5">
              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span class="text-gray-700 font-medium text-base flex items-center">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                  Exportar mis datos
                </span>
                <button @click="exportData"
                        class="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg shadow-md text-sm
                               hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 ease-in-out transform hover:scale-105
                               focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
                  Exportar
                </button>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span class="text-gray-700 font-medium text-base flex items-center">
                  <svg class="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clip-rule="evenodd"></path>
                  </svg>
                  Eliminar mi cuenta
                </span>
                <button @click="showDeleteAccountModal = true"
                        class="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md text-sm
                               hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105
                               focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <transition name="modal-fade">
        <div v-if="showChangePasswordModal" class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div class="bg-white rounded-xl shadow-2xl p-7 max-w-md w-full animate-scale-in">
            <h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Cambiar Contraseña</h3>
            <p class="text-gray-600 mb-5 text-base">Ingresa tu contraseña actual y la nueva contraseña para actualizarla de forma segura.</p>
            <form @submit.prevent="changePassword" class="space-y-4">
              <div>
                <label for="current_password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña Actual</label>
                <input type="password" id="current_password" v-model="passwords.current" autocomplete="current-password" required
                       class="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 text-base focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all duration-150">
              </div>
              <div>
                <label for="new_password" class="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña</label>
                <input type="password" id="new_password" v-model="passwords.new" autocomplete="new-password" required
                       class="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 text-base focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all duration-150">
              </div>
              <div>
                <label for="confirm_password" class="block text-sm font-medium text-gray-700 mb-1">Confirmar Nueva Contraseña</label>
                <input type="password" id="confirm_password" v-model="passwords.confirm" autocomplete="new-password" required
                       class="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 text-base focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all duration-150">
              </div>
              <div class="flex justify-end gap-3 mt-6">
                <button type="button" @click="showChangePasswordModal = false"
                        class="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold text-base hover:bg-gray-300 transition-colors duration-200">
                  Cancelar
                </button>
                <button type="submit"
                        class="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg font-semibold text-base hover:from-teal-600 hover:to-emerald-700 transition-colors duration-200">
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      </transition>

      <transition name="modal-fade">
        <div v-if="showLogoutAllModal" class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div class="bg-white rounded-xl shadow-2xl p-7 max-w-md w-full animate-scale-in">
            <h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Cerrar Sesiones Activas</h3>
            <p class="text-gray-600 mb-5 text-base">Al confirmar, se cerrará tu sesión en todos los dispositivos excepto en este. Esto puede ayudar a proteger tu cuenta.</p>
            <p class="font-semibold text-gray-700 mb-5 text-base">¿Deseas continuar?</p>
            <div class="flex justify-end gap-3 mt-6">
              <button type="button" @click="showLogoutAllModal = false"
                      class="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold text-base hover:bg-gray-300 transition-colors duration-200">
                Cancelar
              </button>
              <button type="button" @click="logoutAllDevices"
                      class="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors duration-200">
                Cerrar Todas
              </button>
            </div>
          </div>
        </div>
      </transition>

      <transition name="modal-fade">
        <div v-if="showDeleteAccountModal" class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div class="bg-white rounded-xl shadow-2xl p-7 max-w-md w-full animate-scale-in">
            <h3 class="text-2xl font-bold text-red-700 mb-4 border-b pb-2">Eliminar Cuenta Permanentemente</h3>
            <p class="text-gray-600 mb-5 text-base">Estás a punto de eliminar tu cuenta de forma permanente. Toda tu información y datos asociados serán irrecuperables.</p>
            <p class="font-semibold text-red-600 mb-5 text-base">Esta acción no se puede deshacer. ¿Estás absolutamente seguro?</p>
            <div class="flex justify-end gap-3 mt-6">
              <button type="button" @click="showDeleteAccountModal = false"
                      class="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold text-base hover:bg-gray-300 transition-colors duration-200">
                Cancelar
              </button>
              <button type="button" @click="deleteAccount"
                        class="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold text-base hover:bg-red-700 transition-colors duration-200">
                  Sí, eliminar mi cuenta
                </button>
              </div>
            </div>
          </div>
        </transition>

        <transition name="toast-slide">
          <div v-if="error" class="fixed bottom-8 right-8 max-w-sm w-full bg-red-50 border-l-4 border-red-500 p-4 shadow-xl rounded-md z-50">
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
          <div v-if="successMessage" class="fixed bottom-8 right-8 max-w-sm w-full bg-emerald-50 border-l-4 border-emerald-500 p-4 shadow-xl rounded-md z-50">
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
import axios from 'axios';

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
      showLogoutAllModal: false,
      showDeleteAccountModal: false,
      error: null,
      successMessage: null,
    };
  },
  methods: {
    async loadSettings() {
      console.log('Cargando configuraciones...');
      this.error = null;
      this.successMessage = null; // Clear previous success messages
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const storedSettings = JSON.parse(localStorage.getItem('userSettings')) || {};
        this.settings = { ...this.settings, ...storedSettings };
        // No mostrar un toast de éxito al cargar, es más silencioso y profesional.
        // this.successMessage = 'Configuración cargada correctamente.';
      } catch (e) {
        this.error = 'Error al cargar las configuraciones. Intenta de nuevo.';
      } finally {
        // Mantener el error visible más tiempo, pero no el éxito de carga silenciosa.
        if (this.error) setTimeout(() => this.error = null, 5000); 
      }
    },

    async saveSettings() {
      console.log('Guardando configuraciones:', this.settings);
      this.error = null;
      // Solo mostrar un mensaje de éxito si el usuario interactúa explícitamente con un botón de guardar.
      // Para los toggles, el guardado automático es más silencioso.
      // this.successMessage = null; 
      try {
        await new Promise(resolve => setTimeout(resolve, 300)); // Simula una respuesta rápida
        localStorage.setItem('userSettings', JSON.stringify(this.settings));
        // this.successMessage = 'Configuración guardada correctamente.'; // No mostrar para cambios automáticos de toggle/select
      } catch (e) {
        this.error = 'Error al guardar las configuraciones. Intenta de nuevo.';
      } finally {
        if (this.error) setTimeout(() => this.error = null, 5000);
      }
    },

    async changePassword() {
      this.error = null;
      this.successMessage = null;

      if (this.passwords.new !== this.passwords.confirm) {
        this.error = 'La nueva contraseña y la confirmación no coinciden.';
        setTimeout(() => this.error = null, 5000);
        return;
      }
      if (!this.passwords.current || !this.passwords.new) {
        this.error = 'Todos los campos de contraseña son obligatorios.';
        setTimeout(() => this.error = null, 5000);
        return;
      }
      if (this.passwords.new.length < 8) { // Ejemplo de validación mínima
          this.error = 'La nueva contraseña debe tener al menos 8 caracteres.';
          setTimeout(() => this.error = null, 5000);
          return;
      }

      console.log('Cambiando contraseña...');
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          this.error = "No autenticado. Por favor, inicia sesión.";
          this.$router.push('/login');
          setTimeout(() => this.error = null, 5000);
          return;
        }

        // Simulamos una llamada real a la API
        // await axios.patch('http://localhost:8000/afiliados/change-password', {
        //   current_password: this.passwords.current,
        //   new_password: this.passwords.new
        // }, {
        //   headers: {
        //     Authorization: `Bearer ${authToken}`
        //   }
        // });

        await new Promise(resolve => setTimeout(resolve, 1000));
        this.successMessage = 'Contraseña actualizada exitosamente.';
        this.showChangePasswordModal = false;
        this.passwords = { current: '', new: '', confirm: '' };
        setTimeout(() => this.successMessage = null, 5000);
      } catch (err) {
        this.handleApiError(err);
        setTimeout(() => this.error = null, 5000);
      }
    },

    async logoutAllDevices() {
      this.error = null;
      this.successMessage = null;
      console.log('Cerrando sesiones en todos los dispositivos...');
      try {
        // Implementar la llamada a tu API para cerrar sesiones activas.
        // Ejemplo: await axios.post('/api/logout-all-devices', {}, { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` } });
        await new Promise(resolve => setTimeout(resolve, 1500));
        this.successMessage = 'Todas las sesiones (excepto la actual) han sido cerradas exitosamente.';
        this.showLogoutAllModal = false;
        setTimeout(() => this.successMessage = null, 5000);
      } catch (err) {
        this.handleApiError(err);
        setTimeout(() => this.error = null, 5000);
      }
    },

    async exportData() {
      this.error = null;
      this.successMessage = null;
      console.log('Exportando datos del usuario...');
      try {
        // Lógica de exportación de datos. En un entorno real, esto sería una llamada API que devuelve un blob.
        // const response = await axios.get('http://localhost:8000/afiliados/export-data', {
        //   headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        //   responseType: 'blob'
        // });
        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'mis_datos_proveeo.json');
        // document.body.appendChild(link);
        // link.click();
        // link.remove();

        await new Promise(resolve => setTimeout(resolve, 1500));
        this.successMessage = 'Datos exportados correctamente. La descarga debería comenzar pronto.';
        setTimeout(() => this.successMessage = null, 5000);
      } catch (e) {
        this.error = 'Error al exportar datos. Intenta de nuevo.';
        console.error('Error exportando datos:', e);
        setTimeout(() => this.error = null, 5000);
      }
    },

    async deleteAccount() {
      this.error = null;
      this.successMessage = null;
      console.warn('Iniciando proceso de eliminación de cuenta...');
      try {
        // Implementar la llamada a tu API para eliminar la cuenta.
        // const authToken = localStorage.getItem('authToken');
        // await axios.delete('http://localhost:8000/afiliados/me', {
        //   headers: { Authorization: `Bearer ${authToken}` }
        // });

        await new Promise(resolve => setTimeout(resolve, 2000));
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userSettings');
        this.successMessage = 'Tu cuenta ha sido eliminada exitosamente. Serás redirigido.';
        this.showDeleteAccountModal = false;
        setTimeout(() => {
          this.$router.push('/login');
        }, 3000);
      } catch (err) {
        this.handleApiError(err);
        setTimeout(() => this.error = null, 5000);
      }
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
  },
  mounted() {
    this.loadSettings();
  },
  watch: {
    // Nota: Eliminamos el watcher 'deep: true' para `settings` y delegamos el guardado
    // a los `@change` de los toggles/selects, y a los métodos de los botones.
    // Esto previene guardados excesivos por cada pequeño cambio y da más control.
    // Si prefieres guardar en cada pequeño cambio, puedes volver a añadir el watcher.
  }
};
</script>

<style>
/* --- Animaciones y Estilos Personalizados --- */

/* Animaciones de entrada para elementos clave (sin cambios importantes, ya son sutiles) */
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

/* Animación de campana más sutil y sin la sombra de texto */
@keyframes bell-ring {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(8deg); } /* Menos rotación */
  30% { transform: rotate(-8deg); }
  45% { transform: rotate(5deg); }
  60% { transform: rotate(-5deg); }
  75% { transform: rotate(2deg); }
  90% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}
.animate-bell-ring {
  animation: bell-ring 1.8s ease-in-out infinite; /* Un poco más lenta */
}

/* Efecto Glassmorphism más sutil y elegante */
.glassmorphism-card {
  background: rgba(255, 255, 255, 0.85); /* Más opaco */
  backdrop-filter: blur(10px) saturate(150%); /* Más blur, menos saturación */
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  border: 1px solid rgba(209, 213, 219, 0.4); /* Borde un poco más visible */
}

/* Eliminadas animaciones de íconos que podrían ser distractoras en un contexto corporativo */
/* Eliminado .card-icon-glow y .icon-pulse-subtle de los estilos, así como de los elementos SVG */

/* Toasts: Velocidad ajustada para ser más fluidos y menos intrusivos */
.toast-slide-enter-active, .toast-slide-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.toast-slide-enter-from, .toast-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Modales: Transición más suave y centrada */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease; /* Transición más suave para el fondo */
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

@keyframes scale-in {
  from { transform: scale(0.98); opacity: 0; } /* Empieza muy cerca del 100% */
  to { transform: scale(1); opacity: 1; }
}
.animate-scale-in {
  animation: scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; /* Velocidad ligeramente más rápida */
}
</style>