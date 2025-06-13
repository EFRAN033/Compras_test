<template>
  <div class="fixed bottom-8 right-8 z-[9999]">
    <button
      aria-label="Abrir o cerrar el chat con el asistente de ProVeo"
      class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-white
             shadow-xl shadow-teal-400/40 cursor-pointer transition-all duration-300 ease-in-out
             hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-teal-400/60
             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      :class="{ 'from-teal-600 to-emerald-700 scale-105 shadow-2xl shadow-teal-500/60': isOpen }"
      @click="toggleChatbot"
    >
      <transition name="icon-flip" mode="out-in">
        <svg
          v-if="!isOpen"
          key="chat-icon"
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
          key="close-icon"
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
    </button>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-4 opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute bottom-20 right-0 w-88 h-[36rem] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
      >
        <div class="p-5 bg-gradient-to-br from-teal-600 to-emerald-700 text-white relative z-10">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mr-3.5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white/90"
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
                <span 
                  class="absolute top-0.5 right-0.5 w-3 h-3 rounded-full border-2 border-emerald-700"
                  :class="isLoading ? 'bg-orange-300 animate-pulse-slow' : 'bg-emerald-300'"
                  :title="isLoading ? 'El asistente está escribiendo...' : 'El asistente está en línea'"
                ></span>
              </div>
              <div>
                <h3 class="font-bold text-lg leading-tight">Asistente ProVeo</h3>
                <div class="flex items-center mt-1">
                  <span 
                    class="w-2 h-2 rounded-full mr-1.5"
                    :class="isLoading ? 'bg-orange-300 animate-pulse-slow' : 'bg-emerald-300'"
                  ></span>
                  <p class="text-xs opacity-90">
                    {{ isLoading ? 'Escribiendo...' : 'En línea' }}
                  </p>
                </div>
              </div>
            </div>
            <button
              @click.stop="toggleChatbot"
              aria-label="Cerrar ventana de chat"
              class="p-2 rounded-full hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-white/90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div ref="chatContainer" class="flex-1 p-5 overflow-y-auto bg-gray-50/50 custom-scrollbar">
          <div class="space-y-4">
            <div 
              v-for="(message, index) in messages"
              :key="index"
              :class="['flex', message.sender === 'bot' ? 'justify-start' : 'justify-end']"
            >
              <div
                :class="[
                  'max-w-[85%] relative rounded-xl p-3.5',
                  message.sender === 'bot' 
                    ? 'bg-white text-gray-800 rounded-bl-lg shadow-sm border border-gray-100'
                    : 'bg-gradient-to-br from-teal-600 to-emerald-600 text-white rounded-br-lg'
                ]"
              >
                <div v-if="message.sender === 'bot' && message.isTyping" class="flex space-x-1 py-2">
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dots" style="animation-delay: 0s;"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dots" style="animation-delay: 0.2s;"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dots" style="animation-delay: 0.4s;"></span>
                </div>
                <template v-else>
                  <p class="text-sm leading-normal">{{ message.text }}</p>
                  <p
                    :class="[
                      'text-xs mt-2 text-right',
                      message.sender === 'bot' ? 'text-gray-500 opacity-80' : 'text-emerald-100 opacity-90'
                    ]"
                  >
                    {{ message.time }}
                  </p>
                </template>
                
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

        <div v-if="showQuickActions && !isLoading && messages.length === 1" class="px-5 pt-3 pb-3 bg-white border-t border-gray-100">
          <p class="text-xs font-medium text-gray-500 mb-2">Preguntas frecuentes:</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="(action, index) in quickActions"
              :key="index"
              @click="selectQuickAction(action)"
              class="px-3.5 py-1.5 text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-full transition-all border border-emerald-100 hover:border-emerald-200 flex items-center shadow-sm hover:shadow-md"
            >
              <span>{{ action }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5 ml-1.5 text-emerald-600"
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

        <div class="p-4 border-t border-gray-100 bg-white">
          <div class="relative flex items-center">
            <input
              v-model="userInput"
              @keyup.enter="sendMessage"
              :disabled="isLoading"
              placeholder="Escribe tu mensaje..."
              class="flex-1 pl-4 pr-12 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 hover:bg-gray-100 transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button
              @click="sendMessage"
              :disabled="!userInput.trim() || isLoading"
              aria-label="Enviar mensaje"
              :class="[
                'absolute right-2 w-9 h-9 flex items-center justify-center rounded-full text-white transition-all duration-200 shadow-md',
                userInput.trim() && !isLoading
                  ? 'bg-gradient-to-br from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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
            ProVeo no compartirá tus datos personales con terceros.
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
      // These quick actions would ideally be dynamically generated by your ML model
      quickActions: [
        '¿Cuál es su horario de atención?',
        '¿Dónde están ubicados?',
        '¿Cómo puedo contactar a un proveedor?',
        '¿Qué tipos de proveedores tienen?'
      ],
      showQuickActions: true,
      isLoading: false,
      apiUrl: 'http://localhost:5000/api/chat' // Ensure this matches your backend
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
      
      // Add user message
      this.addMessage(message, 'user')
      this.userInput = ''
      this.showQuickActions = false // Hide quick actions after user sends a message
      
      // Show "typing" state for the bot
      this.addMessage('', 'bot', true)
      
      // Get response from the backend (which would integrate with your ML)
      await this.getBotResponse(message)
      
      // Remove the "typing" message
      this.messages = this.messages.filter(m => !m.isTyping)

      // Optionally, show quick actions again if the bot prompts for them or conversation flows that way
      // This logic would be more sophisticated with ML
      if (this.messages[this.messages.length - 1].sender === 'bot') {
         // Example: if the last bot message ends with a question, show quick actions
         // This is a placeholder for actual ML-driven quick action display logic
         if (this.messages[this.messages.length - 1].text.endsWith('?')) {
           this.showQuickActions = true;
         }
      }
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
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Simulate typing/processing time for better UX, scaled for ML
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 800)) // 0.8s to 2.8s
        
        this.addMessage(data.response, 'bot')
        
      } catch (error) {
        console.error('Error communicating with the backend:', error)
        this.addMessage(
          'Lo siento, hubo un error al procesar tu solicitud. Por favor intenta nuevamente o recarga la página. Si el problema persiste, considera contactarnos directamente.',
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
      // Use toLocaleTimeString for better localization based on client's locale
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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
/* Icon flip animations */
.icon-flip-enter-active,
.icon-flip-leave-active {
  transition: all 0.3s ease-in-out;
}
.icon-flip-enter-from,
.icon-flip-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}

/* Custom scrollbar */
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
  background: rgba(5, 150, 105, 0.4);
}

/* Typing dots animation */
@keyframes pulseDots {
  0%, 100% { opacity: 0.5; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
}
.animate-pulse-dots {
  animation: pulseDots 1.2s infinite ease-in-out;
}

/* Slow pulse animation for online status */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
.animate-pulse-slow {
  animation: pulseSlow 2s infinite ease-in-out;
}
</style>