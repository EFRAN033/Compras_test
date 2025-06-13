<template>
  <div class="fixed bottom-8 right-8 z-[9999]">
    <!-- Botón flotante -->
    <div
      class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 shadow-xl shadow-teal-400/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-400/50 text-white"
      :class="{ 'from-teal-600 to-emerald-700 scale-105': isOpen }"
      @click="toggleChatbot"
    >
      <transition name="icon-flip" mode="out-in">
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </transition>
    </div>

    <!-- Ventana del chat -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-4 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute bottom-20 right-0 w-88 h-[32rem] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
      >
        <!-- Encabezado -->
        <div class="p-5 bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
          <div class="flex items-center">
            <div class="relative">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <span class="absolute top-0 right-0 w-3 h-3 bg-emerald-300 rounded-full border-2 border-emerald-700"></span>
            </div>
            <div>
              <h3 class="font-bold text-lg">Asistente ProVeo</h3>
              <div class="flex items-center mt-1">
                <span 
                  class="w-2 h-2 rounded-full mr-2"
                  :class="isLoading ? 'bg-emerald-300 animate-pulse' : 'bg-emerald-500'"
                ></span>
                <p class="text-xs opacity-90">
                  {{ isLoading ? 'Escribiendo...' : 'En línea' }}
                </p>
              </div>
            </div>
            <button
              @click.stop="toggleChatbot"
              class="ml-auto p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Cuerpo del chat -->
        <div ref="chatContainer" class="flex-1 p-5 overflow-y-auto bg-gray-50/50 custom-scrollbar">
          <div class="space-y-4">
            <div 
              v-for="(message, index) in messages"
              :key="index"
              :class="['flex', message.sender === 'bot' ? 'justify-start' : 'justify-end']"
            >
              <div
                :class="[
                  'max-w-[85%] relative rounded-xl p-4',
                  message.sender === 'bot' 
                    ? 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                    : 'bg-gradient-to-br from-teal-600 to-emerald-600 text-white rounded-tr-none'
                ]"
              >
                <div v-if="message.sender === 'bot' && message.isTyping" class="flex space-x-1 py-2">
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                </div>
                <template v-else>
                  <p class="text-sm leading-relaxed">{{ message.text }}</p>
                  <p
                    :class="[
                      'text-xs mt-2 text-right',
                      message.sender === 'bot' ? 'text-gray-500' : 'text-emerald-100'
                    ]"
                  >
                    {{ message.time }}
                  </p>
                </template>
                
                <!-- Triángulo decorativo -->
                <div
                  v-if="message.sender === 'bot'"
                  class="absolute -left-2 top-0 w-4 h-4 overflow-hidden"
                >
                  <div class="w-4 h-4 bg-white transform rotate-45 origin-bottom-right border-l border-t border-gray-100"></div>
                </div>
                <div
                  v-else
                  class="absolute -right-2 top-0 w-4 h-4 overflow-hidden"
                >
                  <div class="w-4 h-4 bg-gradient-to-br from-teal-600 to-emerald-600 transform rotate-45 origin-bottom-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Acciones rápidas -->
        <div v-if="showQuickActions && !isLoading" class="px-5 pt-3 pb-2 bg-white border-t border-gray-100">
          <p class="text-xs font-medium text-gray-500 mb-2">¿Qué necesitas?</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="(action, index) in quickActions"
              :key="index"
              @click="selectQuickAction(action)"
              class="px-3 py-1.5 text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-full transition-all border border-emerald-100 hover:border-emerald-200 flex items-center"
            >
              <span>{{ action }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Input de mensaje -->
        <div class="p-4 border-t border-gray-100 bg-white">
          <div class="relative flex items-center">
            <input
              v-model="userInput"
              @keyup.enter="sendMessage"
              :disabled="isLoading"
              placeholder="Escribe tu mensaje..."
              class="flex-1 pl-4 pr-12 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all disabled:opacity-50"
            />
            <button
              @click="sendMessage"
              :disabled="!userInput.trim() || isLoading"
              :class="[
                'absolute right-2 w-9 h-9 flex items-center justify-center rounded-full text-white transition-all shadow-sm',
                userInput.trim() && !isLoading
                  ? 'bg-gradient-to-br from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700'
                  : 'bg-gray-300 cursor-not-allowed'
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-2 text-center">
            ProVeo no compartirá tus datos personales
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ChatbotProveo',
  data() {
    return {
      isOpen: false,
      userInput: '',
      messages: [
        {
          text: '¡Hola! Soy tu asistente de ProVeo. ¿En qué puedo ayudarte hoy?',
          sender: 'bot',
          time: this.getCurrentTime(),
          isTyping: false
        }
      ],
      quickActions: [
        '¿Cuál es su horario?',
        '¿Dónde están ubicados?',
        '¿Cómo los contacto?',
        '¿Qué métodos de pago aceptan?'
      ],
      showQuickActions: true,
      isLoading: false,
      apiUrl: 'http://localhost:5000/api/chat' // Asegúrate que coincida con tu backend
    }
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$nextTick(this.scrollToBottom)
      }
    },
    
    async sendMessage() {
      const message = this.userInput.trim()
      if (!message || this.isLoading) return
      
      // Agregar mensaje del usuario
      this.addMessage(message, 'user')
      this.userInput = ''
      this.showQuickActions = false
      
      // Mostrar estado "escribiendo" del bot
      this.addMessage('', 'bot', true)
      
      // Obtener respuesta del backend
      await this.getBotResponse(message)
      
      // Eliminar el mensaje de "escribiendo"
      this.messages = this.messages.filter(m => !m.isTyping)
    },
    
    addMessage(text, sender, isTyping = false) {
      this.messages.push({
        text,
        sender,
        time: this.getCurrentTime(),
        isTyping
      })
      this.scrollToBottom()
    },
    
    async getBotResponse(userMessage) {
      this.isLoading = true
      
      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage })
        })
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Simular tiempo de escritura para mejor UX
        await new Promise(resolve => setTimeout(resolve, 500))
        
        this.addMessage(data.response, 'bot')
        
      } catch (error) {
        console.error('Error:', error)
        this.addMessage(
          'Lo siento, hubo un error al procesar tu solicitud. Por favor intenta nuevamente.',
          'bot'
        )
      } finally {
        this.isLoading = false
      }
    },
    
    selectQuickAction(action) {
      this.userInput = action
      this.sendMessage()
    },
    
    getCurrentTime() {
      const now = new Date()
      return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
    },
    
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.chatContainer
        if (container) {
          container.scrollTop = container.scrollHeight
        }
      })
    }
  }
}
</script>

<style scoped>
/* Animaciones */
.icon-flip-enter-active,
.icon-flip-leave-active {
  transition: all 0.3s ease;
}
.icon-flip-enter-from,
.icon-flip-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}

/* Scrollbar personalizada */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(5, 150, 105, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(5, 150, 105, 0.3);
}

/* Animación de puntos para "escribiendo" */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.animate-bounce {
  animation: bounce 1s infinite;
}
</style>