<template>
  <div class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999]">
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="transform translate-y-8 opacity-0 scale-90"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-8 opacity-0 scale-90"
    >
      <div v-if="isOpen" class="absolute bottom-[88px] right-0 w-[calc(100vw-3rem)] sm:w-96 h-[calc(100vh-10rem)] sm:h-[40rem] max-h-[700px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100">
        <div class="p-4 bg-gradient-to-br from-brand-teal to-brand-emerald-dark text-white relative z-10 shadow-md flex items-center justify-between flex-shrink-0">
          <div class="flex items-center">
            <div class="relative">
              <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                 <SparklesIcon class="w-7 h-7 text-white/90" />
              </div>
              <span class="absolute top-0.5 right-0.5 w-3 h-3 rounded-full border-2 border-brand-emerald-dark" :class="isLoading ? 'bg-orange-400 animate-subtle-pulse' : 'bg-emerald-400'" :title="isLoading ? 'Asistente está procesando...' : 'En línea'"></span>
            </div>
            <div class="ml-3">
              <h3 class="font-bold text-lg leading-tight">Asistente ProVeo</h3>
              <p class="text-xs opacity-90">{{ isLoading ? 'Procesando...' : 'En línea' }}</p>
            </div>
          </div>
          <button @click.stop="toggleChatbot" aria-label="Cerrar chat" class="p-2 rounded-full hover:bg-white/15 transition-colors">
            <XMarkIcon class="w-6 h-6 text-white/90" />
          </button>
        </div>

        <div ref="chatContainerRef" class="flex-1 p-4 overflow-y-auto bg-gray-50/70">
          <div class="space-y-5" aria-live="polite">
            <div v-for="(message, index) in messages" :key="index" :class="['flex items-end gap-2', message.sender === 'user' ? 'justify-end' : 'justify-start']">
              <div :class="[
                  'max-w-[85%] rounded-2xl p-3 shadow-md',
                  message.sender === 'user' 
                    ? 'bg-gradient-to-br from-brand-teal to-brand-emerald text-white rounded-br-none'
                    : 'bg-white text-slate-800 rounded-bl-none border border-gray-100'
              ]">
                <p class="text-sm leading-normal whitespace-pre-wrap">{{ message.text }}</p>
              </div>
            </div>
            <div v-if="isBotTyping" class="flex items-end gap-2 justify-start">
               <div class="max-w-[85%] rounded-2xl p-3 shadow-md bg-white text-slate-800 rounded-bl-none border border-gray-100">
                 <div class="flex space-x-1.5 py-1">
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                </div>
               </div>
            </div>
          </div>
        </div>
        
        <div v-if="showQuickActions" class="px-4 pt-3 pb-2 bg-white border-t border-gray-100">
          <div class="flex flex-wrap gap-2">
            <button v-for="action in quickActions" :key="action" @click="selectQuickAction(action)"
                    class="px-3 py-1.5 text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-full transition-all border border-emerald-100 hover:border-emerald-200">
              {{ action }}
            </button>
          </div>
        </div>

        <div class="p-4 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div class="relative">
            <input v-model="userInput" @keyup.enter="sendMessage" :disabled="isLoading || isBotTyping" placeholder="Escribe tu mensaje..."
                   class="w-full pl-4 pr-12 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-emerald bg-slate-50 disabled:opacity-60"
            />
            <button @click="sendMessage" :disabled="!userInput.trim() || isLoading || isBotTyping" aria-label="Enviar"
                    class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-white transition-all duration-200 shadow-md disabled:bg-gray-300 disabled:shadow-none"
                    :class="userInput.trim() ? 'bg-gradient-to-br from-brand-teal to-brand-emerald hover:shadow-lg' : 'bg-gray-300'">
              <PaperAirplaneIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <button aria-label="Abrir chat con asistente" @click="toggleChatbot"
            class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal to-brand-emerald-dark text-white shadow-xl shadow-teal-500/40 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-500/60 focus:outline-none focus:ring-4 focus:ring-brand-emerald/50">
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <ChatBubbleOvalLeftEllipsisIcon v-if="!isOpen" key="chat" class="w-8 h-8" />
        <XMarkIcon v-else key="close" class="w-8 h-8" />
      </Transition>
    </button>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, watch } from 'vue';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon, PaperAirplaneIcon, SparklesIcon } from '@heroicons/vue/24/solid';

// --- ESTADO DEL COMPONENTE ---
const isOpen = ref(false);
const userInput = ref('');
const messages = reactive([]);
const quickActions = ref([]);
const showQuickActions = ref(true); // Se mostrará al inicio
const isLoading = ref(false); // Para la respuesta de la API
const isBotTyping = ref(false); // Para la animación de "escribiendo"
const chatContainerRef = ref(null);
const apiUrl = 'http://localhost:5000/api/chat'; // URL de tu backend

// --- LÓGICA DEL CHAT ---
const getCurrentTime = () => new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Lima' });

const scrollToBottom = () => {
  nextTick(() => {
    const el = chatContainerRef.value;
    if (el) el.scrollTop = el.scrollHeight;
  });
};

// EFECTO DE STREAMING DE RESPUESTA
const streamMessage = (text, messageObj) => {
  return new Promise(resolve => {
    let index = 0;
    isBotTyping.value = false;
    messageObj.text = ''; // Inicia el texto vacío
    
    const interval = setInterval(() => {
      if (index < text.length) {
        messageObj.text += text.charAt(index);
        index++;
        scrollToBottom();
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 30);
  });
};

const sendMessage = async () => {
  const messageText = userInput.value.trim();
  if (!messageText || isLoading.value || isBotTyping.value) return;
  
  messages.push({ text: messageText, sender: 'user', time: getCurrentTime() });
  userInput.value = '';
  showQuickActions.value = false;
  scrollToBottom();
  
  await getBotResponse(messageText);
};

const getBotResponse = async (userMessage) => {
  isLoading.value = true;
  isBotTyping.value = true;
  
  try {
    // Simulación de llamada a API
    await new Promise(resolve => setTimeout(resolve, 500));
    const data = { response: `He recibido tu mensaje: "${userMessage}". Como soy un bot de demostración, esta es mi respuesta genérica. ¡Gracias por interactuar!` };
    
    const botMessage = { text: '', sender: 'bot', time: getCurrentTime() };
    messages.push(botMessage);
    await streamMessage(data.response, botMessage);
    
  } catch (error) {
    isBotTyping.value = false;
    messages.push({
      text: 'Lo siento, no puedo conectarme con el asistente en este momento. Por favor, intenta de nuevo más tarde.',
      sender: 'bot',
      time: getCurrentTime()
    });
  } finally {
    isLoading.value = false;
    isBotTyping.value = false;
    scrollToBottom();
  }
};

const selectQuickAction = (action) => {
  userInput.value = action;
  sendMessage();
};

const showInitialMessage = async () => {
  const welcomeMessage = { text: '', sender: 'bot', time: getCurrentTime() };
  messages.push(welcomeMessage);
  await streamMessage('¡Hola! Soy tu asistente ProVeo. ¿Cómo puedo ayudarte hoy?', welcomeMessage);
  quickActions.value = [ '¿Qué es ProVeo?', 'Ver precios', 'Contacto' ];
  showQuickActions.value = true;
};

// --- MANEJO DE ESTADO DE APERTURA ---
const toggleChatbot = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  if (newValue && messages.length === 0) {
    showInitialMessage();
  }
});
</script>