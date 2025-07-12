<template>
  <div class="flex flex-col h-full bg-white rounded-2xl shadow-3xl border border-gray-100 overflow-hidden">
    <div class="flex items-center justify-between p-4 bg-gradient-to-br from-teal-600 to-emerald-700 text-white rounded-t-2xl shadow-lg relative z-10">
      <div class="flex items-center">
        <div class="relative flex-shrink-0">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-white"
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
            class="absolute bottom-0 right-0 block w-3.5 h-3.5 rounded-full border-2 border-emerald-700 transition-colors duration-300"
            :class="isBotTyping ? 'bg-orange-400 animate-pulse-slow' : 'bg-emerald-400'"
            :title="isBotTyping ? 'El asistente está escribiendo...' : 'El asistente está en línea'"
          ></span>
        </div>
        <div class="ml-3">
          <h2 class="text-xl font-semibold">Asistente ProVeo</h2>
          <p class="text-sm text-emerald-100 opacity-95">
            {{ isBotTyping ? 'El asistente está escribiendo...' : 'En línea ahora' }}
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button
          @click="$emit('close-chatbot')"
          class="p-2.5 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
          aria-label="Cerrar Chat"
          title="Cerrar Chat"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="flex-1 p-5 overflow-y-auto bg-gray-50 custom-scrollbar relative" ref="messagesContainer">
      <div
        v-for="message in messages"
        :key="message.id"
        class="flex mb-4 transition-all duration-300 ease-out"
        :class="{ 'justify-end': message.sender === 'user' }"
      >
        <div
          :class="{
            'bg-white text-gray-800 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-md border border-gray-100': message.sender === 'bot' && !message.analysisData,
            'bg-gradient-to-br from-teal-600 to-emerald-600 text-white rounded-tl-xl rounded-br-xl rounded-bl-xl shadow-md': message.sender === 'user',
            'bg-emerald-50 text-gray-800 rounded-2xl shadow-lg border border-emerald-200 p-5 w-full': message.sender === 'bot' && message.analysisData // Estilo para mensajes de análisis
          }"
          class="max-w-[85%] p-3.5 relative transform transition-transform duration-300 ease-out"
        >
          <p v-if="message.text" class="text-sm leading-normal whitespace-pre-wrap">{{ message.text }}</p>

          <div v-if="message.analysisData" class="contract-analysis-display mt-2">
            <h3 class="font-bold text-lg mb-2 text-teal-700">Análisis del Contrato Finalizado</h3>
            <p class="text-sm mb-3 text-gray-700">Aquí tienes un resumen de las cláusulas y riesgos detectados:</p>
            <div class="bg-gray-100 p-4 rounded-lg border border-gray-200 text-sm">
                <p v-for="(item, index) in message.analysisData.slice(0,3)" :key="index" class="mb-1.5 last:mb-0">
                    <span class="font-semibold text-gray-800">{{ item.clauseType }}:</span> Riesgo <span :class="{'text-red-600 font-semibold': item.riskLevel === 'Alto', 'text-orange-500 font-semibold': item.riskLevel === 'Medio', 'text-green-600 font-semibold': item.riskLevel === 'Bajo'}">{{ item.riskLevel }}</span>
                    <span class="block text-gray-600 text-xs mt-0.5 leading-snug">Sugerencia: {{ item.suggestion.substring(0, 70) + '...' }}</span>
                </p>
                <button @click="viewFullAnalysis(message.analysisData)"
                        class="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-md text-sm font-semibold transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                    Ver Informe Completo ({{ message.analysisData.length }} Cláusulas)
                </button>
            </div>
            <p class="text-xs text-gray-500 mt-3 text-center">Este análisis es preliminar. Consulta a un experto legal para decisiones finales.</p>
          </div>

          <span
            class="block text-right text-xs mt-2"
            :class="{ 'text-gray-500': message.sender === 'bot' && !message.analysisData, 'text-emerald-100': message.sender === 'user' }"
            v-if="!message.analysisData"
          >
            {{ formatTime(message.timestamp) }}
          </span>
          </div>
      </div>

      <div v-if="isBotTyping" class="flex mb-4 justify-start">
        <div class="bg-white text-gray-700 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[85%] p-3.5 shadow-md border border-gray-100 relative">
          <p class="text-sm leading-normal whitespace-pre-wrap">{{ typingText }}<span class="cursor-blink">|</span></p>
          </div>
      </div>
    </div>

    <div class="p-4 border-t border-gray-100 bg-white relative z-10">
      <div class="relative flex items-center mb-3">
        <label for="contract-file-upload" class="flex-shrink-0 mr-3 cursor-pointer p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 shadow-sm" title="Subir contrato para análisis">
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
          class="flex-1 pl-4 pr-12 py-3.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 hover:bg-gray-100 transition-all duration-200 disabled:opacity-70 disabled:bg-gray-100 disabled:cursor-not-allowed"
          aria-label="Campo de entrada de mensaje"
        />
        <button
          @click="sendMessage()" :disabled="!newMessage.trim() && !selectedFile || isBotTyping"
          aria-label="Enviar mensaje"
          title="Enviar mensaje"
          :class="[
            'absolute right-2 w-10 h-10 flex items-center justify-center rounded-full text-white transition-all duration-200 shadow-md',
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
      <p v-if="fileName" class="text-xs text-gray-600 text-left mb-2 pl-1">Archivo seleccionado: <span class="font-semibold text-teal-700">{{ fileName }}</span></p>
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
      typingTimeoutId: null,
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

      this.forceCompleteTyping(); // Always force completion of any previous bot typing

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

          this.addBotMessage(response.data.response); // Inicia el efecto de escritura para la respuesta del bot

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
          this.addBotMessage(errorMessage); // Inicia el efecto de escritura para el mensaje de error
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

      this.forceCompleteTyping(); // Always force completion of any previous bot typing

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

      this.addBotMessage('Analizando tu contrato... Esto puede tomar un momento.');

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

        this.forceCompleteTyping();
        this.addBotMessage('Análisis de contrato completado.', response.data);

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
        this.addBotMessage(errorMessage);
      } finally {
        this.scrollToBottom();
      }
    },

    typeBotResponse(fullText) {
      if (this.typingTimeoutId) {
        clearTimeout(this.typingTimeoutId);
        this.typingTimeoutId = null;
      }

      this.isBotTyping = true;
      this.typingText = '';
      let charIndex = 0;

      const typeNextChar = () => {
        if (charIndex < fullText.length) {
          this.typingText += fullText.charAt(charIndex);
          charIndex++;
          this.scrollToBottom();

          const baseTypingSpeed = 15;
          const speedVariation = () => Math.floor(Math.random() * 15) - 5;
          const nextDelay = baseTypingSpeed + speedVariation();

          this.typingTimeoutId = setTimeout(typeNextChar, nextDelay);
        } else {
          this.forceCompleteTyping(fullText);
        }
      };

      typeNextChar();
    },

    forceCompleteTyping(finalText = this.typingText) {
      if (this.typingTimeoutId) {
        clearTimeout(this.typingTimeoutId);
        this.typingTimeoutId = null;
      }

      if (this.isBotTyping && finalText.length > 0) {
        this.messages.push({
          id: this.messages.length + 1,
          sender: 'bot',
          text: finalText,
          timestamp: new Date(),
        });
        this.scrollToBottom();
      }

      this.isBotTyping = false;
      this.typingText = '';
    },

    addBotMessage(text, analysisData = null) {
      this.forceCompleteTyping();

      if (analysisData) {
        this.messages.push({
          id: this.messages.length + 1,
          sender: 'bot',
          text: text,
          analysisData: analysisData,
          timestamp: new Date(),
        });
        this.scrollToBottom();
      } else {
        this.typeBotResponse(text);
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
  background: #f0f4f8; /* slightly darker than gray-50 */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #aab8c9; /* a more muted slate/blue-gray */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #7a8ba3; /* darker on hover */
}

/* Typing Indicator Animation (dots) */
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
  animation: blink 0.5s step-end infinite;
}

/* Custom shadow for the main component card */
.shadow-3xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>