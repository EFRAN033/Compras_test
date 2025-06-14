<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
    <header class="bg-white shadow-md py-3 sticky top-0 z-50 overflow-hidden">
      <div class="container mx-auto px-6 flex justify-between items-center relative">
        <button
          @click="$router.go(-1)"
          class="group relative flex items-center p-2 rounded-full text-emerald-600 border border-emerald-200 bg-white
                 hover:bg-emerald-50 hover:border-emerald-400 transform hover:scale-105 transition-all duration-300 ease-out
                 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Volver a la página anterior"
        >
          <span class="absolute inset-0 block rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style="background: radial-gradient(circle at center, rgba(6,182,212,0.3) 0%, transparent 70%);"></span>

          <svg class="w-5 h-5 z-10 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span class="ml-1.5 font-medium text-sm hidden sm:inline-block z-10">Volver</span>
        </button>

        <router-link
          to="/"
          class="flex items-center absolute left-1/2 transform -translate-x-1/2 animate-fade-in-down"
          aria-label="Ir a la página de inicio de ProVeo"
        >
          <span class="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent
                       relative inline-block perspective-1000
                       hover:scale-105 transition-transform duration-300 ease-out"
          >
            <span class="absolute inset-0 -top-0.5 left-0.5 text-shadow-provo opacity-20" aria-hidden="true">ProVeo</span>
            ProVeo
          </span>
        </router-link>

        <div class="w-16 sm:w-auto opacity-0"></div>
      </div>
    </header>

    <main class="py-16 px-4">
      <div class="container mx-auto max-w-3xl">
        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
          <div class="text-center mb-10">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
              Regístrate como <br>
              <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Proveedor Certificado
              </span>
            </h2>
            <p class="text-lg text-gray-600 max-w-md mx-auto">
              Amplía tu alcance y conecta con empresas que buscan lo que ofreces.
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-8">
            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM12 15.5V14H8v1.5a2 2 0 002 2h0a2 2 0 002-2z"></path></svg>
                Datos Generales de la Empresa
              </h3>
              <div>
                <label for="empresa" class="block text-sm font-medium text-gray-700 mb-2">Nombre Legal de la Empresa <span class="text-red-500">*</span></label>
                <input
                  v-model="form.empresa"
                  type="text"
                  id="empresa"
                  placeholder="Ej. Soluciones Industriales S.A. de C.V."
                  class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                  required
                >
              </div>

              <div class="grid md:grid-cols-2 gap-7 mt-6">
                <div>
                  <label for="rfc" class="block text-sm font-medium text-gray-700 mb-2">RFC de la Empresa <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.rfc"
                    type="text"
                    id="rfc"
                    placeholder="ABC123456XYZ"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
                <div>
                  <label for="anios" class="block text-sm font-medium text-gray-700 mb-2">Años de experiencia en el sector <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.anios"
                    type="number"
                    id="anios"
                    min="1"
                    placeholder="Ej. 5"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
              </div>
            </div>

            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm3 5a1 1 0 000 2h6a1 1 0 100-2H7z"></path></svg>
                Nuestras Especialidades
              </h3>
              <label class="block text-sm font-medium text-gray-700 mb-3">Selecciona tus categorías principales de productos/servicios <span class="text-red-500">*</span></label>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="category in categories" :key="category.id" class="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
                  <input
                    v-model="form.categorias"
                    :id="'category-'+category.id"
                    type="checkbox"
                    :value="category.id"
                    class="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded-md cursor-pointer"
                  >
                  <label :for="'category-'+category.id" class="ml-3 text-sm font-medium text-gray-800 select-none">{{ category.name }}</label>
                </div>
              </div>
              <p v-if="form.categorias.length === 0" class="mt-3 text-xs text-red-500">Por favor, selecciona al menos una categoría.</p>
            </div>

            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                Datos de Contacto (Persona Clave)
              </h3>

              <div class="grid md:grid-cols-2 gap-7">
                <div>
                  <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.nombre"
                    type="text"
                    id="nombre"
                    placeholder="Ej. Juan Pérez"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
                <div>
                  <label for="puesto" class="block text-sm font-medium text-gray-700 mb-2">Puesto / Cargo <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.puesto"
                    type="text"
                    id="puesto"
                    placeholder="Ej. Director Comercial"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
                <div class="md:col-span-2">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    placeholder="contacto@tuempresa.com"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
                <div>
                  <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Teléfono Principal <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.telefono"
                    type="tel"
                    id="telefono"
                    placeholder="+52 55 1234 5678"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  >
                </div>
                <div>
                  <label for="whatsapp" class="block text-sm font-medium text-gray-700 mb-2">WhatsApp (opcional)</label>
                  <input
                    v-model="form.whatsapp"
                    type="tel"
                    id="whatsapp"
                    placeholder="+52 55 1234 5678"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                  >
                </div>
              </div>
            </div>

            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8V7a1 1 0 112 0v3h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z"></path></svg>
                Detalles de Operación
              </h3>

              <div class="grid md:grid-cols-2 gap-7">
                <div>
                  <label for="capacidad" class="block text-sm font-medium text-gray-700 mb-2">Capacidad de Producción/Servicio Mensual <span class="text-red-500">*</span></label>
                  <select
                    v-model="form.capacidad"
                    id="capacidad"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 bg-white"
                    required
                  >
                    <option value="" disabled>Selecciona tu capacidad</option>
                    <option value="bajo">Bajo (1-50 unidades/servicios)</option>
                    <option value="medio">Medio (51-500 unidades/servicios)</option>
                    <option value="alto">Alto (501-2,000 unidades/servicios)</option>
                    <option value="muy-alto">Muy Alto (+2,000 unidades/servicios)</option>
                  </select>
                </div>
                <div>
                  <label for="tiempo" class="block text-sm font-medium text-gray-700 mb-2">Tiempo de Entrega Promedio <span class="text-red-500">*</span></label>
                  <select
                    v-model="form.tiempo"
                    id="tiempo"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 bg-white"
                    required
                  >
                    <option value="" disabled>Selecciona el tiempo</option>
                    <option value="1-3d">1-3 días hábiles</option>
                    <option value="4-7d">4-7 días hábiles</option>
                    <option value="1-2s">1-2 semanas</option>
                    <option value="2-4s">2-4 semanas</option>
                    <option value="1m+">Más de 1 mes</option>
                  </select>
                </div>
              </div>

              <div class="mt-6">
                <label for="certificaciones" class="block text-sm font-medium text-gray-700 mb-2">Certificaciones o Estándares de Calidad (opcional)</label>
                <textarea
                  v-model="form.certificaciones"
                  id="certificaciones"
                  rows="3"
                  placeholder="Ej. ISO 9001:2015, Certificación Orgánica, GMP, etc. (separadas por coma)"
                  class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                ></textarea>
                 <p class="mt-2 text-xs text-gray-500">Menciona cualquier certificación relevante para tu sector, esto aumenta tu visibilidad.</p>
              </div>
            </div>

            <div class="pb-4">
              <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                Define tu Contraseña
              </h3>

              <div class="grid md:grid-cols-2 gap-7">
                <div>
                  <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Contraseña <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.password"
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                    minlength="8"
                  >
                  <p class="mt-2 text-xs text-gray-500">Mínimo 8 caracteres, combina letras, números y símbolos.</p>
                </div>
                <div>
                  <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.confirmPassword"
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  >
                  <p v-if="form.password && form.confirmPassword && form.password !== form.confirmPassword" class="mt-2 text-xs text-red-500">Las contraseñas no coinciden.</p>
                </div>
              </div>

              <div class="mt-8">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      v-model="form.terminos"
                      id="terminos"
                      type="checkbox"
                      class="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded-md cursor-pointer"
                      required
                    >
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terminos" class="font-medium text-gray-700 select-none">Acepto los <a href="#" class="text-emerald-600 hover:text-emerald-800 font-semibold underline-offset-2 hover:underline transition-all">Términos del servicio</a> y la <a href="#" class="text-emerald-600 hover:text-emerald-800 font-semibold underline-offset-2 hover:underline transition-all">Política de privacidad</a> <span class="text-red-500">*</span></label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="loading || !form.terminos || form.password !== form.confirmPassword || form.password.length < 8 || form.categorias.length === 0"
              class="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-3 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed text-lg"
            >
              <span v-if="!loading">Enviar Solicitud de Registro</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando solicitud...
              </span>
            </button>
          </form>

          <div class="mt-10 text-center">
            <p class="text-md text-gray-600">
              ¿Ya tienes una cuenta de proveedor?
              <router-link to="/login" class="font-semibold text-emerald-600 hover:text-emerald-800 underline-offset-2 hover:underline transition-all">Inicia Sesión Aquí</router-link>
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'; // Importa Axios
import Footer from './Footer.vue';

export default {
  name: 'RegisterProveedor',
  components: {
    Footer
  },
  data() {
    return {
      loading: false,
      categories: [
        { id: 'textiles', name: 'Textiles' },
        { id: 'insumos', name: 'Insumos Industriales' },
        { id: 'maquinaria', name: 'Maquinaria y Equipo' },
        { id: 'servicios', name: 'Servicios Profesionales' },
        { id: 'materia-prima', name: 'Materia Prima' },
        { id: 'empaques', name: 'Empaques y Embalajes' },
        { id: 'logistica', name: 'Logística y Transporte' },
        { id: 'marketing', name: 'Marketing y Publicidad' }
      ],
      form: {
        empresa: '',
        rfc: '',
        anios: '',
        categorias: [], // Este campo es una lista de IDs de categoría (strings en este caso)
        nombre: '',
        puesto: '',
        email: '',
        telefono: '',
        whatsapp: '',
        capacidad: '',
        tiempo: '',
        certificaciones: '',
        password: '',
        confirmPassword: '', // Solo para validación frontend
        terminos: false // Solo para validación frontend
      }
    }
  },
  methods: {
    async submitForm() {
      // Validaciones frontend
      if (this.form.password !== this.form.confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, verifica e inténtalo de nuevo.');
        return;
      }

      if (this.form.password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
      }

      if (!this.form.terminos) {
        alert('Debes aceptar los Términos del servicio y la Política de privacidad para continuar.');
        return;
      }

      if (this.form.categorias.length === 0) {
        alert('Debes seleccionar al menos una categoría de productos/servicios.');
        return;
      }

      this.loading = true;

      try {
        // --- LLAMADA REAL A LA API DE FASTAPI ---
        const response = await axios.post('http://localhost:8000/proveedores/registro', {
            // Asegúrate de que las claves aquí coincidan exactamente con tu modelo Pydantic 'ProveedorRegistro'
            empresa: this.form.empresa,                          // Mapea a nombre_legal_empresa
            rfc: this.form.rfc,                                 // Mapea a rfc_empresa
            anios: parseInt(this.form.anios),                   // Mapea a anos_experiencia (convertir a int)
            categorias: this.form.categorias,                   // Lista de IDs de categoría
            nombre: this.form.nombre,                           // Mapea a nombre_completo_contacto
            puesto: this.form.puesto,                           // Mapea a puesto_cargo_contacto
            email: this.form.email,                             // Mapea a email_contacto
            telefono: this.form.telefono,                       // Mapea a telefono_principal
            whatsapp: this.form.whatsapp,                       // Mapea a whatsapp
            capacidad: this.form.capacidad,                     // Mapea a capacidad_produccion_mensual
            tiempo: this.form.tiempo,                           // Mapea a tiempo_entrega_promedio
            certificaciones: this.form.certificaciones,         // Mapea a certificaciones_calidad
            password: this.form.password,                       // Mapea a contrasena_hash (FastAPI lo hashea)
        });

        console.log('Respuesta del backend:', response.data);
        alert('Registro de proveedor exitoso: ' + response.data.message);
        // CORREGIDO: Redirige a la página de inicio (ruta '/') si todo sale bien
        this.$router.push('/');

      } catch (error) {
        console.error('Error en el registro del proveedor:', error);
        // Manejo de errores detallado para el usuario
        let errorMessage = 'Ocurrió un error inesperado durante el registro.';
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            if (error.response.data && error.response.data.detail) {
                if (Array.isArray(error.response.data.detail)) {
                    // Si FastAPI devuelve una lista de errores de validación (código 422)
                    errorMessage = error.response.data.detail.map(err => {
                        // Mejorar el mensaje de error para campos específicos
                        if (err.loc && err.loc.length > 1) {
                            const field = err.loc[1]; // El segundo elemento es el nombre del campo
                            if (field === 'email') return 'El correo electrónico ya está registrado o es inválido.';
                            if (field === 'rfc') return 'El RFC de la empresa ya está registrado o es inválido.';
                            if (field === 'empresa') return 'El nombre legal de la empresa ya está registrado o es inválido.';
                        }
                        return err.msg; // Mensaje genérico si no se identifica el campo
                    }).join('; ');
                } else if (typeof error.response.data.detail === 'string') {
                    // Si FastAPI devuelve un mensaje de error simple
                    errorMessage = error.response.data.detail;
                }
            } else {
                errorMessage = `Error del servidor: ${error.response.status} ${error.response.statusText}`;
            }
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta (problema de red, CORS, backend no corriendo)
            errorMessage = 'No se pudo conectar con el servidor. Asegúrate de que tu API de FastAPI esté activa en http://localhost:8000.';
        } else {
            // Algo más causó el error (problema en la configuración de Axios)
            errorMessage = 'Error al configurar la solicitud: ' + error.message;
        }
        alert(errorMessage);

      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
/* Animación de entrada para el formulario */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Mejoras en el enfoque de los inputs */
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #059669; /* emerald-600 */
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.2); /* Sombra suave para el enfoque */
}

/* Transiciones genéricas para interactividad */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Estilos específicos para el checkbox */
input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #D1D5DB; /* gray-300 */
  border-radius: 0.375rem; /* rounded-md */
  width: 1.25rem; /* h-5 */
  height: 1.25rem; /* w-5 */
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
}

input[type="checkbox"]:checked {
  background-color: #059669; /* emerald-600 */
  border-color: #059669; /* emerald-600 */
}

input[type="checkbox"]:checked::after {
  content: '';
  display: block;
  width: 0.6em;
  height: 0.9em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg) translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}

/* Placeholder color */
.placeholder-gray-400::placeholder {
  color: #9CA3AF; /* gray-400 */
}

/* Animación para el logo ProVeo */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out forwards;
  animation-delay: 0.1s; /* Un ligero retraso para que aparezca después del fondo */
}

/* Sombra sutil para el efecto de profundidad del logo */
.text-shadow-provo {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Ajusta según necesites */
  color: #10B981; /* emerald-500, un color de sombra que se mezcla bien */
}
</style>