<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-white">
    <header class="bg-white shadow-sm border-b border-gray-100">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <button @click="$router.go(-1)" class="flex items-center text-gray-700 hover:text-blue-700 transition-colors duration-200 ease-in-out">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Volver
          </button>
          <router-link to="/" class="flex items-center">
            <span class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              ProVeo
            </span>
          </router-link>
          <div class="w-10"></div> 
        </div>
      </div>
    </header>

    <main class="py-16">
      <div class="container mx-auto px-6 max-w-2xl">
        <div class="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-gray-900 mb-3">
              <span class="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Registro de Clientes
              </span>
            </h2>
            <p class="text-gray-600 text-lg">Únete a nuestra red para optimizar tus procesos de compra.</p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-8">
            <div class="grid md:grid-cols-2 gap-7">
              <div>
                <label for="nombres" class="block text-sm font-semibold text-gray-700 mb-2">Nombre(s)*</label>
                <input 
                  v-model="form.nombres"
                  type="text" 
                  id="nombres" 
                  placeholder="Ej. Juan Andrés" 
                  class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                  required
                >
              </div>
              <div>
                <label for="apellidos" class="block text-sm font-semibold text-gray-700 mb-2">Apellidos*</label>
                <input 
                  v-model="form.apellidos"
                  type="text" 
                  id="apellidos" 
                  placeholder="Ej. García López" 
                  class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                  required
                >
              </div>
            </div>

            <div>
              <label for="email_corporativo" class="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico corporativo*</label>
              <input 
                v-model="form.email_corporativo"
                type="email" 
                id="email_corporativo" 
                placeholder="tu.nombre@empresa.com" 
                class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                required
              >
            </div>

            <div class="grid md:grid-cols-2 gap-7">
              <div>
                <label for="telefono_contacto" class="block text-sm font-semibold text-gray-700 mb-2">Teléfono de contacto*</label>
                <input 
                  v-model="form.telefono_contacto"
                  type="tel" 
                  id="telefono_contacto" 
                  placeholder="+52 55 1234 5678" 
                  class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                  required
                >
              </div>
              <div>
                <label for="puesto_cargo" class="block text-sm font-semibold text-gray-700 mb-2">Puesto/Cargo en la empresa*</label>
                <input 
                  v-model="form.puesto_cargo"
                  type="text" 
                  id="puesto_cargo" 
                  placeholder="Ej. Gerente de Compras, Director de Operaciones" 
                  class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                  required
                >
              </div>
            </div>

            <div class="border-t border-gray-200 pt-8">
              <h3 class="text-xl font-bold text-gray-900 mb-5">Información de tu empresa</h3>
              
              <div class="grid md:grid-cols-2 gap-7">
                <div>
                  <label for="razon_social_empresa" class="block text-sm font-semibold text-gray-700 mb-2">Razón Social/Nombre de empresa*</label>
                  <input 
                    v-model="form.razon_social_empresa"
                    type="text" 
                    id="razon_social_empresa" 
                    placeholder="Nombre completo de tu empresa" 
                    class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
                <div>
                  <label for="rfc_empresa" class="block text-sm font-semibold text-gray-700 mb-2">RFC de la empresa*</label>
                  <input 
                    v-model="form.rfc_empresa"
                    type="text" 
                    id="rfc_empresa" 
                    placeholder="RFC de tu empresa" 
                    class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
              </div>

              <div class="mt-7">
                <label for="industria_sector" class="block text-sm font-semibold text-gray-700 mb-2">Industria/ Sector principal*</label>
                <select 
                  v-model="form.industria_sector"
                  id="industria_sector" 
                  class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800"
                  required
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="textil">Textil y Confección</option>
                  <option value="manufactura">Manufactura</option>
                  <option value="comercio">Comercio Minorista</option>
                  <option value="distribucion">Distribución y Logística</option>
                  <option value="servicios">Servicios Profesionales</option>
                  <option value="tecnologia">Tecnología y Software</option>
                  <option value="alimentos">Alimentos y Bebidas</option>
                  <option value="salud">Salud y Farmacéutica</option>
                  <option value="construccion">Construcción</option>
                  <option value="automotriz">Automotriz</option>
                  <option value="energia">Energía y Recursos Naturales</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div class="mt-7">
                <label for="tamano_empresa" class="block text-sm font-semibold text-gray-700 mb-2">Tamaño de empresa*</label>
                <select 
                  v-model="form.tamano_empresa"
                  id="tamano_empresa" 
                  class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800"
                  required
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="micro">Micro (1-10 empleados)</option>
                  <option value="pequena">Pequeña (11-50 empleados)</option>
                  <option value="mediana">Mediana (51-250 empleados)</option>
                  <option value="grande">Grande (+250 empleados)</option>
                </select>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-8">
              <h3 class="text-xl font-bold text-gray-900 mb-5">Seguridad de la Cuenta</h3>
              
              <div class="grid md:grid-cols-2 gap-7">
                <div>
                  <label for="contrasena" class="block text-sm font-semibold text-gray-700 mb-2">Contraseña*</label>
                  <input 
                    v-model="form.contrasena"
                    type="password" 
                    id="contrasena" 
                    placeholder="••••••••" 
                    class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                    required
                    minlength="8"
                  >
                  <p class="mt-2 text-xs text-gray-500">Mínimo 8 caracteres, incluye letras y números.</p>
                </div>
                <div>
                  <label for="confirm_contrasena" class="block text-sm font-semibold text-gray-700 mb-2">Confirmar contraseña*</label>
                  <input 
                    v-model="form.confirm_contrasena"
                    type="password" 
                    id="confirm_contrasena" 
                    placeholder="••••••••" 
                    class="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
              </div>

              <div class="mt-7">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input 
                      v-model="form.aceptar_terminos"
                      id="aceptar_terminos" 
                      type="checkbox" 
                      class="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    >
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="aceptar_terminos" class="font-medium text-gray-700">Acepto los <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors duration-200">Términos del servicio</a> y <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors duration-200">Política de privacidad</a>*</label>
                  </div>
                </div>
              </div>
            </div>

            <p v-if="mensajeError" class="text-red-600 text-center font-medium">{{ mensajeError }}</p>
            <p v-if="mensajeExito" class="text-green-600 text-center font-medium">{{ mensajeExito }}</p>

            <button 
              type="submit" 
              :disabled="loading"
              class="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span v-if="!loading">Completar Registro de Cliente</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </span>
            </button>
          </form>

          <div class="mt-8 text-center">
            <p class="text-md text-gray-600">
              ¿Ya tienes una cuenta? 
              <router-link to="/login" class="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200">Inicia sesión</router-link>
            </p>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <span class="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            ProVeo
          </span>
          <p class="mt-4 text-sm max-w-2xl mx-auto leading-relaxed">
            Plataforma líder en gestión inteligente de compras y cadena de suministro para empresas innovadoras, facilitando la conexión con una red global de proveedores.
          </p>
          <div class="flex justify-center space-x-7 mt-8">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <span class="sr-only">Facebook</span>
              <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          © {{ new Date().getFullYear() }} ProVeo. Todos los derechos reservados. <a href="#" class="hover:text-white transition-colors duration-200">Términos del Servicio</a> · <a href="#" class="hover:text-white transition-colors duration-200">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'; // Importa Axios para hacer peticiones HTTP

export default {
  name: 'RegisterAfiliado', // Nombre del componente
  data() {
    return {
      loading: false, // Estado para mostrar el spinner en el botón
      mensajeError: '', // Mensaje para errores de la API o validación local
      mensajeExito: '',  // Mensaje para confirmación de registro exitoso
      form: {
        nombres: '',
        apellidos: '',
        email_corporativo: '', // Coincide con tu modelo Pydantic
        telefono_contacto: '', // Coincide con tu modelo Pydantic
        puesto_cargo: '',      // Coincide con tu modelo Pydantic
        razon_social_empresa: '', // Coincide con tu modelo Pydantic
        rfc_empresa: '',        // Coincide con tu modelo Pydantic
        industria_sector: '',   // Coincide con tu modelo Pydantic
        tamano_empresa: '',     // Coincide con tu modelo Pydantic
        contrasena: '',         // Coincide con tu modelo Pydantic
        confirm_contrasena: '', // Campo local para confirmar contraseña
        aceptar_terminos: false // Coincide con tu modelo Pydantic
      }
    }
  },
  methods: {
    async submitForm() {
      // 1. Limpiar mensajes anteriores al intentar un nuevo envío
      this.mensajeError = '';
      this.mensajeExito = '';

      // 2. Validaciones frontend (antes de enviar a la API)
      if (this.form.contrasena !== this.form.confirm_contrasena) {
        this.mensajeError = 'Las contraseñas no coinciden. Por favor, verifica e inténtalo de nuevo.';
        return; // Detener la ejecución si hay un error de validación
      }

      if (!this.form.aceptar_terminos) {
        this.mensajeError = 'Debes aceptar los términos del servicio y la política de privacidad para continuar.';
        return; // Detener la ejecución
      }

      this.loading = true; // Activar el estado de carga para el spinner

      try {
        // 3. Envío de datos a la API de FastAPI
        const response = await axios.post('http://localhost:8000/afiliados/registro', {
          // Asegúrate de que las claves aquí (ej. 'nombres') coincidan exactamente
          // con los nombres de campo que tu modelo Pydantic 'AfiliadoRegistro' espera.
          nombres: this.form.nombres,
          apellidos: this.form.apellidos,
          email_corporativo: this.form.email_corporativo,
          telefono_contacto: this.form.telefono_contacto,
          puesto_cargo: this.form.puesto_cargo,
          razon_social_empresa: this.form.razon_social_empresa,
          rfc_empresa: this.form.rfc_empresa,
          industria_sector: this.form.industria_sector,
          tamano_empresa: this.form.tamano_empresa,
          contrasena: this.form.contrasena, // La contraseña se envía en texto plano, el backend la hashea
        });
        
        // 4. Manejo de respuesta exitosa
        this.mensajeExito = response.data.message + `. ID del Afiliado: ${response.data.id}. ¡Redirigiendo a la página principal!`;
        
        // Opcional: Limpiar el formulario después de un registro exitoso
        this.resetForm();

        // 5. Redirección al inicio después de un breve retraso
        // Se usa setTimeout para que el usuario pueda leer el mensaje de éxito primero
        setTimeout(() => {
          this.$router.push('/'); // Redirige a la ruta raíz de tu aplicación
        }, 3000); // Redirige después de 3 segundos (3000 milisegundos)
        
      } catch (error) {
        // 6. Manejo de errores
        console.error('Error al registrar afiliado:', error); // Log del error completo para depuración
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango 2xx (ej. 400, 422, 409)
          const errorDetail = error.response.data.detail;
          if (Array.isArray(errorDetail)) {
            // Si FastAPI devuelve una lista de errores de validación (código 422)
            this.mensajeError = errorDetail.map(err => err.msg).join('; ') || 'Error en los datos enviados. Revisa los campos.';
          } else if (typeof errorDetail === 'string') {
            // Si FastAPI devuelve un mensaje de error simple (ej. "El correo ya está registrado")
            this.mensajeError = errorDetail;
          } else {
            // Error con un formato de detalle inesperado
            this.mensajeError = 'Ocurrió un error inesperado durante el registro. Inténtalo de nuevo.';
          }
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió respuesta (ej. el backend no está corriendo, o problema de CORS)
          this.mensajeError = 'No se pudo conectar con el servidor. Asegúrate de que tu API de FastAPI esté activa en http://localhost:8000.';
        } else {
          // Algo más causó el error (ej. problema en la configuración de Axios)
          this.mensajeError = 'Error al configurar la solicitud de registro: ' + error.message;
        }
      } finally {
        this.loading = false; // Desactivar el estado de carga, sin importar el resultado
      }
    },
    resetForm() {
      // Función para restablecer todos los campos del formulario a sus valores iniciales
      this.form = {
        nombres: '',
        apellidos: '',
        email_corporativo: '',
        telefono_contacto: '',
        puesto_cargo: '',
        razon_social_empresa: '',
        rfc_empresa: '',
        industria_sector: '',
        tamano_empresa: '',
        contrasena: '',
        confirm_contrasena: '',
        aceptar_terminos: false
      };
    }
  }
}
</script>

<style scoped>
/* Base styles for focus and transitions */
input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); /* blue-500 with opacity */
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Specific button hover animation */
.hover-animate:hover {
  transform: translateY(-2px);
}

/* Back button transition */
header button {
  transition: color 0.2s ease;
}
header button:hover {
  color: #1d4ed8; /* blue-700 */
}
</style>