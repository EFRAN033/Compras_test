<template>
  <div class="flex h-screen bg-gray-100 font-sans antialiased relative">
    <aside class="w-64 bg-emerald-800 text-white flex flex-col shadow-xl z-30">
      <div class="px-6 py-5 border-b border-emerald-700">
        <router-link to="/dashboard-proveedor" class="flex items-center text-white text-2xl font-extrabold tracking-tight hover:text-emerald-200 transition-colors duration-200">
          <svg class="w-8 h-8 mr-2 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 012.707 14H17.293a1 1 0 01.707-.293l-.707-.707V8a6 6 0 00-6-6zM5 15a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm-4-2a1 1 0 00-1 1v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 00-1-1H9z"></path>
          </svg>
          ProVeo <span class="text-sm ml-1 text-emerald-300">Proveedor</span>
        </router-link>
      </div>
      <nav class="flex-grow p-4 space-y-2">
        <router-link
          to="/dashboard-proveedor" exact-active-class="bg-emerald-700 text-emerald-50"
          class="flex items-center px-4 py-2 rounded-lg text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors duration-200 group"
        >
          <svg class="w-5 h-5 mr-3 text-emerald-200 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-9v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6-4h4"></path>
          </svg>
          Inicio
        </router-link>

        <router-link
          to="/dashboard-proveedor/productos" active-class="bg-emerald-700 text-emerald-50"
          class="flex items-center px-4 py-2 rounded-lg text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors duration-200 group"
        >
          <svg class="w-5 h-5 mr-3 text-emerald-200 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
          </svg>
          Productos
        </router-link>

        <router-link
          to="/dashboard-proveedor/pedidos" active-class="bg-emerald-700 text-emerald-50"
          class="flex items-center px-4 py-2 rounded-lg text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors duration-200 group"
        >
          <svg class="w-5 h-5 mr-3 text-emerald-200 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4-4-4 4-4-4"></path>
          </svg>
          Pedidos
        </router-link>

        <router-link
          to="/dashboard-proveedor/mensajes" active-class="bg-emerald-700 text-emerald-50"
          class="flex items-center px-4 py-2 rounded-lg text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors duration-200 group"
        >
          <svg class="w-5 h-5 mr-3 text-emerald-200 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          Mensajes
          <span v-if="unreadMessages > 0" class="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">{{ unreadMessages }}</span>
        </router-link>

        <hr class="border-emerald-700 my-4">

        <router-link
          to="/perfil" active-class="bg-emerald-700 text-emerald-50"
          class="flex items-center px-4 py-2 rounded-lg text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors duration-200 group"
        >
          <svg class="w-5 h-5 mr-3 text-emerald-200 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Mi Perfil
        </router-link>

        <router-link
          to="/configuracion" active-class="bg-emerald-700 text-emerald-50"
          class="flex items-center px-4 py-2 rounded-lg text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors duration-200 group"
        >
          <svg class="w-5 h-5 mr-3 text-emerald-200 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          Configuración
        </router-link>
      </nav>
      <div class="p-4 border-t border-emerald-700">
        <button
          @click="logout"
          class="flex items-center w-full px-4 py-2 text-left rounded-lg text-emerald-100 bg-emerald-700 hover:bg-red-700 transition-colors duration-200 group"
        >
          <svg class="w-5 h-5 mr-3 text-emerald-200 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Cerrar Sesión
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-end border-b border-gray-200 z-20">
        <div class="flex items-center space-x-4">
          <span class="text-gray-700 font-medium hidden sm:block">¡Hola, {{ userName }}!</span>
          <div class="relative">
            <button @click="toggleUserMenu" class="flex items-center p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 6v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1m18 0a2 2 0 002-2V9a2 2 0 00-2-2h-3.372a2 2 0 00-1.664-.89l-2.822-.72C11.536 3.99 10.372 3 9 3H5a2 2 0 00-2 2v4m18 0H3"></path>
              </svg>
              <svg class="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-if="!userMenuOpen">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <svg class="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-else>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
            <div v-if="userMenuOpen" @click.away="userMenuOpen = false" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-40">
              <router-link to="/perfil" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</router-link>
              <router-link to="/configuracion" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</router-link>
              <hr class="my-1">
              <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        <router-view></router-view>
      </main>

      <footer class="bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-gray-600">
        &copy; {{ currentYear }} ProVeo. Todos los derechos reservados.
      </footer>
    </div>

    <button 
      @click="toggleChatbot" 
      class="fixed bottom-6 right-6 z-50 p-4 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-300 ease-in-out transform hover:scale-110"
      aria-label="Abrir Chatbot de Soporte"
      v-if="!isChatbotOpen"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
      <span v-if="unreadChatMessages > 0" class="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ring-2 ring-white">
        {{ unreadChatMessages }}
      </span>
    </button>

    <transition name="fade-slide-up">
      <div 
        v-if="isChatbotOpen" 
        class="fixed bottom-6 right-6 w-80 h-[calc(100vh-120px)] max-h-96 sm:max-h-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
      >
        <ChatbotPro @close-chatbot="isChatbotOpen = false" />
      </div>
    </transition>
  </div>
</template>

<script>
import ChatbotPro from './chatbotpro.vue'; // ¡Ruta de importación corregida!
import axios from 'axios';

export default {
  name: 'DashboardProveedor',
  components: {
    ChatbotPro, 
  },
  data() {
    return {
      userName: 'Cargando...',
      unreadMessages: 3, 
      unreadChatMessages: 1, 
      userMenuOpen: false,
      isChatbotOpen: false, 
      currentYear: new Date().getFullYear(),
    };
  },
  created() {
    this.userName = localStorage.getItem('userName') || 'Proveedor'; 
  },
  methods: {
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen;
    },
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('userRole');
      this.$router.push({ name: 'Login' });
    },
    toggleChatbot() {
      this.isChatbotOpen = !this.isChatbotOpen;
      if (this.isChatbotOpen) {
        this.unreadChatMessages = 0;
      }
    },
  }
};
</script>

<style scoped>
/* Transiciones para suavizar la apariencia */
.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Transición para el chatbot flotante */
.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* Custom height for the chatbot to fit within the viewport */
@media (max-height: 600px) {
  .h-\[calc\(100vh-120px\)\] {
    height: 400px; /* Adjust height for smaller screens if needed */
  }
}
</style>