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
              {{ isBotTyping ? 'Analizando documento...' : 'En línea ahora' }}
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <button
            @click="$emit('close-chatbot')"
            class="p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all duration-200"
            aria-label="Cerrar Chat"
            title="Cerrar Chat"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
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
              'bg-white text-gray-800 rounded-xl shadow-lg border border-gray-100 p-4 w-full': message.sender === 'bot' && message.analysisData // Estilo para mensajes de análisis
            }"
            class="max-w-[85%] p-3.5 relative transform transition-transform duration-300 ease-out"
          >
            <p v-if="message.text" class="text-sm leading-normal">{{ message.text }}</p>
  
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
            <div class="flex items-center space-x-1 py-1">
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dots" style="animation-delay: 0s;"></span>
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dots" style="animation-delay: 0.2s;"></span>
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dots" style="animation-delay: 0.4s;"></span>
            </div>
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
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Escribe tu mensaje o sube un contrato..."
            :disabled="isBotTyping"
            class="flex-1 pl-4 pr-12 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 hover:bg-gray-100 transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed"
            aria-label="Campo de entrada de mensaje"
          />
          <button
            @click="sendMessage"
            :disabled="!newMessage.trim() || isBotTyping"
            aria-label="Enviar mensaje"
            title="Enviar mensaje"
            :class="[
              'absolute right-2 w-9 h-9 flex items-center justify-center rounded-full text-white transition-all duration-200 shadow-md',
              newMessage.trim() && !isBotTyping
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
  // Simulación de Axios para llamadas API
  const axios = {
    post: (url, data) => {
      return new Promise(resolve => {
        setTimeout(() => {
          if (url === '/api/analyze-contract') {
            // Simulación de una respuesta de análisis de contrato real
            const mockAnalysisData = Array.from({ length: 20 }, (_, i) => ({
              clauseType: `Cláusula de ${['Confidencialidad', 'Rescisión', 'Indemnización', 'Fuerza Mayor', 'Jurisdicción'][i % 5]} ${i + 1}`,
              riskLevel: ['Bajo', 'Medio', 'Alto'][Math.floor(Math.random() * 3)],
              suggestion: `Revisar el punto ${i + 1} para ajustar los términos en beneficio de la parte A. Considerar incluir un plazo de gracia adicional para el cumplimiento. Esto es una sugerencia detallada.`
            }));
            resolve({ data: mockAnalysisData });
          } else {
            // Simulación de respuesta de chatbot normal
            resolve({ data: { message: "Esta es una respuesta simulada del bot." } });
          }
        }, 2500); // Retraso de 2.5 segundos para simular procesamiento
      });
    }
  };
  
  export default {
    name: 'ChatbotPro',
    emits: ['close-chatbot'],
    data() {
      return {
        messages: [
          { id: 1, sender: 'bot', text: '¡Hola! Soy tu asistente virtual de ProVeo. Puedo ayudarte con tus consultas o analizar tus contratos. ¿Qué te gustaría hacer hoy?', timestamp: new Date(Date.now() - 300000) },
          { id: 2, sender: 'user', text: 'Hola, quiero analizar un contrato.', timestamp: new Date(Date.now() - 240000) },
          { id: 3, sender: 'bot', text: 'Claro, por favor, sube el archivo del contrato (PDF, DOCX, TXT) o pega el texto directamente en el campo de mensaje.', timestamp: new Date(Date.now() - 180000) },
        ],
        newMessage: '',
        isBotTyping: false,
        selectedFile: null, // Para el archivo seleccionado
        fileName: '', // Nombre del archivo para mostrar al usuario
      };
    },
    mounted() {
      this.scrollToBottom();
    },
    updated() {
      this.scrollToBottom();
    },
    methods: {
      formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Lima' });
      },
      async sendMessage() {
        if (this.newMessage.trim() === '' && !this.selectedFile) return;
  
        if (this.selectedFile) {
          await this.sendContractForAnalysis();
        } else {
          const userMessage = {
            id: this.messages.length + 1,
            sender: 'user',
            text: this.newMessage.trim(),
            timestamp: new Date(),
          };
          this.messages.push(userMessage);
          this.newMessage = '';
          this.scrollToBottom();
  
          this.isBotTyping = true;
          await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate bot typing for text message
  
          const botResponseText = this.$_getBotResponse(userMessage.text);
          this.isBotTyping = false;
          this.messages.push({
            id: this.messages.length + 1,
            sender: 'bot',
            text: botResponseText,
            timestamp: new Date(),
          });
          this.scrollToBottom();
        }
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedFile = file;
          this.fileName = file.name;
          this.newMessage = `Contrato: ${file.name} listo para analizar.`; // Pre-fill message for user to send
        } else {
          this.selectedFile = null;
          this.fileName = '';
          this.newMessage = '';
        }
      },
      async sendContractForAnalysis() {
        if (!this.selectedFile) return;
  
        const userMessage = {
          id: this.messages.length + 1,
          sender: 'user',
          text: `Solicitando análisis para el archivo: "${this.fileName}"`,
          timestamp: new Date(),
        };
        this.messages.push(userMessage);
        this.scrollToBottom();
  
        this.isBotTyping = true;
        this.newMessage = ''; // Clear input after sending
        this.fileName = '';
        this.selectedFile = null; // Clear selected file
  
        try {
          // En un escenario real, aquí leerías el contenido del archivo y lo enviarías.
          // Por simplicidad, simulamos que ya tenemos el texto del contrato.
          // const fileContent = await this.readFileContent(this.selectedFile); // Necesitarías una función para esto
          const response = await axios.post('/api/analyze-contract', {
            // contractContent: fileContent, // Enviar el contenido real del archivo
            fileName: userMessage.text, // Solo para la simulación
            language: 'es' // Esto podría ser dinámico
          });
  
          this.messages.push({
            id: this.messages.length + 1,
            sender: 'bot',
            // text: 'Análisis del contrato completado. Pulsa "Ver Informe Completo" para los detalles.',
            analysisData: response.data, // Aquí va la data estructurada del análisis
            timestamp: new Date(),
          });
  
        } catch (error) {
          console.error('Error al analizar el contrato:', error);
          this.messages.push({
            id: this.messages.length + 1,
            sender: 'bot',
            text: 'Lo siento, hubo un problema al analizar el contrato. Por favor, asegúrate de que el formato sea correcto e inténtalo de nuevo.',
            timestamp: new Date(),
          });
        } finally {
          this.isBotTyping = false;
          this.scrollToBottom();
        }
      },
      // Función de simulación para respuestas de texto simple
      $_getBotResponse(userText) {
        userText = userText.toLowerCase();
        if (userText.includes('hola')) {
          return '¡Hola! ¿Cómo puedo asistirte hoy?';
        } else if (userText.includes('analizar contrato')) {
          return 'Por favor, sube el archivo de tu contrato utilizando el icono de "subir" al lado del campo de texto.';
        } else if (userText.includes('gracias')) {
          return '¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en consultarme.';
        }
        return 'No estoy seguro de entender tu pregunta sobre texto. ¿Podrías reformularla o probar a subir un contrato para análisis?';
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
          // Aquí podrías abrir un modal, una nueva ventana, o expandir
          // un área dentro del chat para mostrar el informe completo.
          // Por ahora, solo un log en consola.
          console.log('Mostrando el informe completo de análisis:', analysisData);
          alert('Se abriría un informe detallado con todas las cláusulas, riesgos y sugerencias. (Revisa la consola para el mock data)');
      }
    },
  };
  </script>
  
  <style scoped>
  /* Custom Scrollbar for messages area - Improved contrast */
  .custom-scrollbar::-webkit-scrollbar {
    width: 7px; /* Slightly wider for better interaction */
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f8fafc; /* Lighter background for the track (gray-50) */
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #94a3b8; /* Tailwind's gray-400 for thumb */
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #64748b; /* Tailwind's gray-500 on hover */
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
  </style>