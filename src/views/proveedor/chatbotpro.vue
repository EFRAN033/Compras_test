<template>
  <div class="flex flex-col h-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
    <div class="flex items-center justify-between p-4 bg-gradient-to-br from-teal-600 to-emerald-700 text-white rounded-t-xl shadow-md relative z-10">
      <div class="flex items-center">
        <div class="relative flex-shrink-0">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
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
          </div>
          <span
            class="absolute bottom-0 right-0 block w-3 h-3 rounded-full border-2 border-emerald-700 transition-colors duration-300"
            :class="isBotTyping ? 'bg-orange-300 animate-pulse-slow' : 'bg-emerald-300'"
            :title="isBotTyping ? 'El asistente está escribiendo...' : 'El asistente está en línea'"
          ></span>
        </div>
        <div class="ml-3">
          <h2 class="text-lg font-semibold">Asistente ProVeo</h2>
          <p class="text-sm text-emerald-100 opacity-90">
            {{ isBotTyping ? 'El asistente está escribiendo...' : 'En línea ahora' }}
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-1">
        <button
          class="p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all duration-200"
          aria-label="Minimizar Chat"
          title="Minimizar Chat"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path>
          </svg>
        </button>
        <button
          @click="$emit('close-chatbot')"
          class="p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all duration-200"
          aria-label="Cerrar Chat"
          title="Cerrar Chat"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="flex-1 p-5 overflow-y-auto bg-gray-50/70 custom-scrollbar relative" ref="messagesContainer">
      <div
        v-for="message in messages"
        :key="message.id"
        class="flex mb-4 transition-all duration-300 ease-out"
        :class="{ 'justify-end': message.sender === 'user' }"
      >
        <div
          :class="{
            'bg-white text-gray-800 rounded-bl-xl rounded-tr-xl rounded-tl-xl shadow-sm border border-gray-100': message.sender === 'bot' && !message.analysisData,
            'bg-gradient-to-br from-teal-600 to-emerald-600 text-white rounded-br-xl rounded-tl-xl rounded-bl-xl': message.sender === 'user',
            'bg-white text-gray-800 rounded-xl shadow-lg border border-gray-100 p-4 w-full': message.sender === 'bot' && message.analysisData // Style for analysis messages
          }"
          class="max-w-[85%] p-3.5 relative transform transition-transform duration-300 ease-out"
        >
          <p v-if="message.text" class="text-sm leading-normal whitespace-pre-wrap">{{ message.text }}</p>

          <div v-if="message.analysisData" class="contract-analysis-display mt-2">
            <h3 class="font-bold text-lg mb-2 text-teal-700">Análisis del Contrato Finalizado</h3>
            <p class="text-sm mb-3">Aquí tienes un resumen de las cláusulas y riesgos detectados:</p>
            <div class="bg-gray-50 p-3 rounded-md border border-gray-200 text-sm">
                <p v-for="(item, index) in message.analysisData.slice(0,3)" :key="index" class="mb-1">
                    <span class="font-semibold">{{ item.clauseType }}:</span> Riesgo <span :class="{'text-red-600': item.riskLevel === 'Alto', 'text-orange-500': item.riskLevel === 'Medio', 'text-green-600': item.riskLevel === 'Bajo'}">{{ item.riskLevel }}</span>
                    <span class="block text-gray-600 text-xs mt-0.5">Sugerencia: {{ item.suggestion.substring(0, 50) + '...' }}</span>
                </p>
                <button @click="viewFullAnalysis(message.analysisData)" class="mt-3 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md text-sm font-semibold transition-colors">
                    Ver Informe Completo ({{ message.analysisData.length }} Cláusulas)
                </button>
            </div>
            <p class="text-xs text-gray-500 mt-2">Este análisis es preliminar. Consulta a un experto legal para decisiones finales.</p>
          </div>

          <span
            class="block text-right text-xs mt-2"
            :class="{ 'text-gray-500 opacity-80': message.sender === 'bot' && !message.analysisData, 'text-emerald-100 opacity-90': message.sender === 'user' }"
            v-if="!message.analysisData"
          >
            {{ formatTime(message.timestamp) }}
          </span>
          <div
            v-if="message.sender === 'bot' && !message.analysisData"
            class="absolute -left-2 top-0 w-4 h-4 overflow-hidden"
          >
            <div class="w-4 h-4 bg-white transform rotate-45 origin-bottom-right border-l border-t border-gray-100"></div>
          </div>
          <div
            v-else-if="message.sender === 'user'"
            class="absolute -right-2 top-0 w-4 h-4 overflow-hidden"
          >
            <div class="w-4 h-4 bg-gradient-to-br from-teal-600 to-emerald-600 transform rotate-45 origin-bottom-left"></div>
          </div>
        </div>
      </div>

      <div v-if="isBotTyping" class="flex mb-4 justify-start">
        <div class="bg-white text-gray-700 rounded-bl-xl rounded-tr-xl rounded-tl-xl max-w-[85%] p-3.5 shadow-sm border border-gray-100 relative">
          <p class="text-sm leading-normal whitespace-pre-wrap">{{ typingText }}<span class="cursor-blink">|</span></p> 
          <div class="absolute -left-2 top-0 w-4 h-4 overflow-hidden">
            <div class="w-4 h-4 bg-white transform rotate-45 origin-bottom-right border-l border-t border-gray-100"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 border-t border-gray-100 bg-white relative z-10">
      <div class="relative flex items-center mb-3">
        <label for="contract-file-upload" class="flex-shrink-0 mr-2 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" title="Subir contrato para análisis">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <input
            id="contract-file-upload"
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            class="hidden"
            @change="handleFileUpload"
            :disabled="isBotTyping"
          />
        </label>
        
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage()"  type="text"
          placeholder="Escribe tu mensaje o sube un contrato..."
          :disabled="isBotTyping"
          class="flex-1 pl-4 pr-12 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 hover:bg-gray-100 transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed"
          aria-label="Campo de entrada de mensaje"
        />
        <button
          @click="sendMessage()" :disabled="!newMessage.trim() && !selectedFile || isBotTyping"
          aria-label="Enviar mensaje"
          title="Enviar mensaje"
          :class="[
            'absolute right-2 w-9 h-9 flex items-center justify-center rounded-full text-white transition-all duration-200 shadow-md',
            (newMessage.trim() || selectedFile) && !isBotTyping
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
      <p v-if="fileName" class="text-xs text-gray-500 text-left mb-2">Archivo seleccionado: <span class="font-semibold text-teal-600">{{ fileName }}</span></p>
      <p class="text-xs text-gray-400 mt-1 text-center opacity-90">
        ProVeo no compartirá tus datos personales con terceros.
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChatbotPro',
  emits: ['close-chatbot'],
  data() {
    return {
      messages: [], 
      newMessage: '', 
      isBotTyping: false,
      typingText: '', 
      typingMessageId: null, 
      typingTimeoutId: null, // Nuevo: Para almacenar el ID del setTimeout
      selectedFile: null, 
      fileName: '', 
      proveedorAuthToken: null, 
      proveedorEmail: null, 
      apiBaseUrl: 'http://localhost:8000', 
    };
  },
  mounted() {
    this.scrollToBottom();
    this.loadAuthData(); 
    this.addBotMessage('¡Hola! Soy tu asistente virtual de ProVeo. Puedo ayudarte con tus consultas o analizar tus contratos. ¿Qué te gustaría hacer hoy?');
  },
  updated() {
    this.scrollToBottom();
  },
  beforeUnmount() {
    // Limpiar el timeout si el componente se desmonta mientras el bot escribe
    if (this.typingTimeoutId) {
      clearTimeout(this.typingTimeoutId);
      this.typingTimeoutId = null;
    }
  },
  methods: {
    loadAuthData() {
      this.proveedorAuthToken = localStorage.getItem('authToken'); 
      this.proveedorEmail = localStorage.getItem('userName'); 

      console.log('--- Depuración ChatbotPro: Carga de Auth Data ---');
      console.log('Token desde localStorage (authToken):', this.proveedorAuthToken ? 'Cargado (longitud: ' + this.proveedorAuthToken.length + ')' : 'No cargado / null');
      console.log('Email desde localStorage (userName usado como email):', this.proveedorEmail || 'No cargado / null');
      console.log('--------------------------------------------------');

      if (!this.proveedorAuthToken || !this.proveedorEmail) {
        console.warn("Advertencia: No se encontraron datos de autenticación del proveedor válidos en localStorage. Asegúrate de iniciar sesión primero.");
      }
    },
    formatTime(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Lima' });
    },

    async sendMessage() { 
      const messageContent = this.newMessage.trim();

      if (messageContent === '' && !this.selectedFile) {
          console.log('No hay mensaje ni archivo para enviar.');
          return;
      }

      // Detener cualquier escritura previa del bot si el usuario envía un mensaje
      if (this.isBotTyping) {
        this.finalizeTyping(this.typingText, this.typingMessageId); // Finaliza el mensaje actual del bot
      }

      console.log('--- Depuración ChatbotPro: Enviar Mensaje ---');
      console.log('Token (this.proveedorAuthToken):', this.proveedorAuthToken ? 'Presente' : 'Ausente');
      console.log('Email (this.proveedorEmail):', this.proveedorEmail ? 'Presente' : 'Ausente');
      console.log('Mensaje a enviar:', messageContent);
      console.log('Archivo seleccionado:', this.selectedFile ? this.fileName : 'Ninguno');
      console.log('--------------------------------------------');

      if (!this.proveedorAuthToken || !this.proveedorEmail) {
        this.addBotMessage('Lo siento, no puedo procesar tu solicitud. Por favor, asegúrate de haber iniciado sesión y de que tu sesión sea válida.');
        console.error('Error de autenticación: Token o email del proveedor no disponibles. Deteniendo solicitud.');
        return; 
      }

      if (this.selectedFile) {
        await this.sendContractForAnalysis();
      } else {
        const userMessage = {
          id: this.messages.length + 1,
          sender: 'user',
          text: messageContent, 
          timestamp: new Date(),
        };
        this.messages.push(userMessage);
        this.newMessage = ''; 
        this.scrollToBottom();

        this.isBotTyping = true; 
        this.typingText = ''; 
        this.typingMessageId = this.messages.length + 1; // ID para el nuevo mensaje del bot que se va a escribir

        try {
          const authHeader = `Bearer ${this.proveedorAuthToken}`; 

          console.log('--- Depuración ChatbotPro: Solicitud Chatbot ---');
          console.log('Encabezado Authorization a enviar:', authHeader);
          console.log('Cuerpo de la solicitud (solo mensaje):', { message: userMessage.text }); 
          console.log('------------------------------------------------');

          const response = await axios.post(
            `${this.apiBaseUrl}/chatbot/proveedor/ask`,
            {
              message: userMessage.text, 
            },
            {
              headers: {
                Authorization: authHeader 
              }
            }
          );

          this.typeMessage(response.data.response, this.typingMessageId); 

        } catch (error) {
          console.error('Error al comunicarse con el chatbot:', error);
          let errorMessage = 'Lo siento, hubo un problema al comunicarme con el asistente. Inténtalo de nuevo más tarde.';
          if (error.response) {
            console.error('Detalles del error de respuesta (HTTP):', error.response.status, error.response.data); 
            if (error.response.status === 401 || error.response.status === 403) {
              errorMessage = 'Tu sesión ha expirado o no estás autorizado. Por favor, vuelve a iniciar sesión.';
              localStorage.removeItem('authToken'); 
              localStorage.removeItem('userName'); 
              localStorage.removeItem('userRole');
              this.proveedorAuthToken = null;
              this.proveedorEmail = null;
            } else if (error.response.data && error.response.data.detail) {
              errorMessage = `Error del servidor: ${error.response.data.detail}`;
            }
          } else if (error.request) {
            console.error('No se recibió respuesta del servidor (Request):', error.request); 
            errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión o que el backend esté corriendo.';
          } else {
            console.error('Error al configurar la solicitud:', error.message); 
          }
          this.typeMessage(errorMessage, this.typingMessageId); 
        }
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const maxSize = 5 * 1024 * 1024; // 5 MB
        if (file.size > maxSize) {
          alert('El archivo es demasiado grande. Por favor, sube un archivo de menos de 5MB.');
          this.selectedFile = null;
          this.fileName = '';
          this.newMessage = '';
          return;
        }

        this.selectedFile = file;
        this.fileName = file.name;
        this.newMessage = `Contrato "${file.name}" seleccionado. Pulsa Enviar para analizar.`;
      } else {
        this.selectedFile = null;
        this.fileName = '';
        this.newMessage = '';
      }
    },
    async sendContractForAnalysis() {
      if (!this.selectedFile) return;

      // Detener cualquier escritura previa del bot si se va a analizar un contrato
      if (this.isBotTyping) {
        this.finalizeTyping(this.typingText, this.typingMessageId);
      }

      if (!this.proveedorAuthToken || !this.proveedorEmail) {
        this.addBotMessage('Lo siento, no puedo analizar el contrato. Por favor, asegúrate de haber iniciado sesión y de que tu sesión sea válida.');
        console.error('Error de autenticación: Token o email del proveedor no disponibles para análisis de contrato. Deteniendo solicitud.');
        this.selectedFile = null; 
        this.fileName = '';
        this.newMessage = '';
        return; 
      }

      const userMessage = {
        id: this.messages.length + 1,
        sender: 'user',
        text: `Solicitando análisis para el archivo: "${this.fileName}"`,
        timestamp: new Date(),
      };
      this.messages.push(userMessage);
      this.scrollToBottom();

      this.isBotTyping = true;
      this.typingText = ''; 
      this.typingMessageId = null; // No usamos el typing effect para el análisis, pero mantenemos isBotTyping true
                                   // para mostrar el indicador de 'escribiendo' mientras se procesa.

      this.newMessage = ''; 
      this.fileName = ''; 
      const fileToSend = this.selectedFile; 
      this.selectedFile = null; 

      try {
        const formData = new FormData();
        formData.append('contract_file', fileToSend);
        formData.append('language', 'es');

        const authHeader = `Bearer ${this.proveedorAuthToken}`; 

        console.log('--- Depuración ChatbotPro: Solicitud Análisis Contrato ---');
        console.log('Encabezado Authorization a enviar:', authHeader);
        console.log('--------------------------------------------------------');

        const response = await axios.post(
          `${this.apiBaseUrl}/api/analyze-contract`, 
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data', 
              Authorization: authHeader 
            },
            timeout: 60000 
          }
        );

        // Los mensajes de análisis no usan el efecto de máquina de escribir, se añaden directamente
        this.messages.push({
          id: this.messages.length + 1,
          sender: 'bot',
          // Puedes añadir un texto introductorio aquí si quieres
          // text: 'Análisis de contrato completado:', 
          analysisData: response.data, 
          timestamp: new Date(),
        });
        this.isBotTyping = false; 
        this.scrollToBottom();

      } catch (error) {
        console.error('Error al analizar el contrato:', error);
        let errorMessage = 'Lo siento, hubo un problema al analizar el contrato.';
        if (error.response) {
            console.error('Detalles del error de respuesta (HTTP):', error.response.status, error.response.data); 
            if (error.response.status === 413) { 
                errorMessage += ' El archivo es demasiado grande.';
            } else if (error.response.status === 401 || error.response.status === 403) {
              errorMessage = 'Tu sesión ha expirado o no estás autorizado para el análisis de contratos. Por favor, vuelve a iniciar sesión.';
              localStorage.removeItem('authToken'); 
              localStorage.removeItem('userName'); 
              localStorage.removeItem('userRole');
              this.proveedorAuthToken = null;
              this.proveedorEmail = null;
            } else if (error.response.data && error.response.data.detail) {
                errorMessage += ` Detalle: ${error.response.data.detail}`;
            }
        } else if (axios.isCancel(error)) {
            errorMessage += ' La operación ha excedido el tiempo de espera o fue cancelada.';
        } else if (error.code === 'ECONNABORTED') { 
            errorMessage += ' La operación ha excedido el tiempo de espera. El archivo puede ser muy grande o el servidor está ocupado.';
        } else {
            console.error('Error al configurar la solicitud de análisis:', error.message); 
        }
        // Para mensajes de error de análisis, también usar typeMessage
        this.typeMessage(errorMessage, this.typingMessageId || (this.messages.length + 1));
      } finally {
        // En caso de error, isBotTyping se desactivará en typeMessage
        if (!this.typingTimeoutId) { // Solo si no se inició un typing effect (ej. para análisis exitoso)
           this.isBotTyping = false;
        }
        this.scrollToBottom();
      }
    },

    // REVISADO: Método typeMessage para usar solo setTimeout recursivo
    typeMessage(fullText, messageId) {
      // Limpiar cualquier timeout pendiente para evitar múltiples animaciones
      if (this.typingTimeoutId) {
        clearTimeout(this.typingTimeoutId);
        this.typingTimeoutId = null;
      }

      this.isBotTyping = true;
      this.typingMessageId = messageId; // Asegurarse de que el ID del mensaje se pasa y se usa

      let charIndex = this.typingText.length; // Continuar desde donde se quedó si fue interrumpido

      if (charIndex < fullText.length) {
        this.typingText += fullText.charAt(charIndex);
        this.scrollToBottom();

        // Velocidad base más rápida (ej. 15ms)
        const baseTypingSpeed = 15; 
        // Variación aleatoria para un efecto más natural (entre -5ms y +10ms)
        const speedVariation = () => Math.floor(Math.random() * 15) - 5; 
        const nextDelay = baseTypingSpeed + speedVariation();

        this.typingTimeoutId = setTimeout(() => {
          this.typeMessage(fullText, messageId); // Llamada recursiva para el siguiente carácter
        }, nextDelay);
      } else {
        // Cuando se ha escrito todo el texto
        this.finalizeTyping(fullText, messageId);
      }
    },

    // REVISADO: Método finalizeTyping para limpiar y añadir el mensaje final
    finalizeTyping(fullText, messageId) {
      if (this.typingTimeoutId) {
        clearTimeout(this.typingTimeoutId);
        this.typingTimeoutId = null;
      }
      this.isBotTyping = false; 

      // Solo agregar el mensaje si no ha sido agregado ya y hay texto
      // Esto previene duplicados si se llama varias veces por interrupción
      const existingMessage = this.messages.find(msg => msg.id === messageId && msg.sender === 'bot');
      if (!existingMessage && fullText.length > 0) {
        this.messages.push({
          id: messageId, 
          sender: 'bot',
          text: fullText, 
          timestamp: new Date(),
        });
      } else if (existingMessage) {
          // Si el mensaje ya existe, simplemente actualiza su texto si el actual typingText no es el completo
          existingMessage.text = fullText;
      }
      
      this.typingText = ''; 
      this.typingMessageId = null; 
      this.scrollToBottom(); 
    },

    // addBotMessage ahora es solo un wrapper que llama a typeMessage si es un mensaje de texto
    // o añade directamente si es un mensaje de análisis.
    addBotMessage(text, analysisData = null) {
      // Si el bot estaba escribiendo un mensaje de texto y llega un nuevo mensaje (ej. de bienvenida),
      // finaliza el anterior antes de iniciar el nuevo efecto.
      if (this.isBotTyping && !analysisData) { // Si no es un mensaje de análisis
         this.finalizeTyping(this.typingText, this.typingMessageId);
      }

      if (analysisData) {
        this.messages.push({
          id: this.messages.length + 1, // ID para este nuevo mensaje de análisis
          sender: 'bot',
          text: text, 
          analysisData: analysisData,
          timestamp: new Date(),
        });
        this.scrollToBottom();
      } else {
        // Generar un nuevo ID para el mensaje de texto que se va a escribir
        const newBotMessageId = this.messages.length + 1;
        this.typeMessage(text, newBotMessageId);
      }
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },
    viewFullAnalysis(analysisData) {
        console.log('Mostrando el informe completo de análisis:', analysisData);
        alert('Aquí se mostraría un informe detallado con todas las cláusulas, riesgos y sugerencias.');
    }
  },
};
</script>

<style scoped>
/* Custom Scrollbar for messages area - Improved contrast */
.custom-scrollbar::-webkit-scrollbar {
  width: 7px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f8fafc; /* light gray */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #94a3b8; /* slate-400 */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #64748b; /* slate-600 */
}

/* Typing Indicator Animation */
@keyframes pulse-dots {
  0%, 100% { transform: translateY(0); opacity: 0.7; }
  50% { transform: translateY(-2px); opacity: 1; }
}

.animate-pulse-dots {
  animation: pulse-dots 0.9s infinite ease-in-out;
}

.animate-pulse-dots:nth-child(2) {
  animation-delay: 0.15s;
}

.animate-pulse-dots:nth-child(3) {
  animation-delay: 0.3s;
}

/* Slow pulse for online status */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
.animate-pulse-slow {
  animation: pulseSlow 2s infinite ease-in-out;
}

/* New CSS for blinking cursor */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor-blink {
  animation: blink 0.5s step-end infinite; /* Hice el parpadeo un poco más rápido */
}
</style>