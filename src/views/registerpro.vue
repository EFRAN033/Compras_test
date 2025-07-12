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
          class="flex items-center absolute left-1/2 transform -translate-x-1/2 animate-fade-in-down delay-100"
          aria-label="Ir a la página de inicio de ProVeo"
        >
          <span class="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent
                       relative inline-block hover:scale-105 transition-transform duration-300 ease-out text-shadow-provo"
          >
            ProVeo
          </span>
        </router-link>

        <div class="w-16 sm:w-auto opacity-0"></div>
      </div>
    </header>

    <main class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
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
            <div class="grid lg:grid-cols-2 lg:gap-x-12 gap-y-8">
              <div class="space-y-8">
                <div class="border-b border-gray-200 pb-8">
                  <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM12 15.5V14H8v1.5a2 2 0 002 2h0a2 2 0 002-2z"></path></svg>
                    Datos Generales de la Empresa
                  </h3>
                  <div class="space-y-6">
                    <div>
                      <label for="empresa" class="block text-sm font-medium text-gray-700 mb-2">Nombre Legal de la Empresa <span class="text-red-500">*</span></label>
                      <input v-model="form.empresa" type="text" id="empresa" placeholder="Ej. Soluciones Industriales S.A. de C.V." :class="inputClasses(errors.empresa)">
                      <p v-if="errors.empresa" class="mt-1 text-sm text-red-600">{{ errors.empresa }}</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label for="rfc" class="block text-sm font-medium text-gray-700 mb-2">RFC de la Empresa <span class="text-red-500">*</span></label>
                        <input v-model="form.rfc" type="text" id="rfc" placeholder="ABC123456XYZ" :class="inputClasses(errors.rfc)">
                        <p v-if="errors.rfc" class="mt-1 text-sm text-red-600">{{ errors.rfc }}</p>
                      </div>
                      <div>
                        <label for="anios" class="block text-sm font-medium text-gray-700 mb-2">Años de experiencia <span class="text-red-500">*</span></label>
                        <input v-model.number="form.anios" type="number" id="anios" min="1" placeholder="Ej. 5" :class="inputClasses(errors.anios)">
                        <p v-if="errors.anios" class="mt-1 text-sm text-red-600">{{ errors.anios }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-b border-gray-200 pb-8">
                  <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm3 5a1 1 0 000 2h6a1 1 0 100-2H7z"></path></svg>
                    Nuestras Especialidades
                  </h3>
                  <label class="block text-sm font-medium text-gray-700 mb-3">Selecciona tus categorías principales <span class="text-red-500">*</span></label>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div v-for="category in categories" :key="category.id" class="relative flex items-center">
                      <div class="flex items-center h-5">
                        <input v-model="form.categorias" :id="'category-'+category.id" :value="category.id" type="checkbox" class="h-5 w-5 text-emerald-600 border-gray-300 rounded-md focus:ring-emerald-500 cursor-pointer">
                      </div>
                      <div class="ml-3 text-sm">
                        <label :for="'category-'+category.id" class="font-medium text-gray-700 cursor-pointer select-none">{{ category.name }}</label>
                      </div>
                    </div>
                  </div>
                  <p v-if="errors.categorias" class="mt-3 text-sm text-red-600">{{ errors.categorias }}</p>
                </div>
              </div>

              <div class="space-y-8">
                <div class="border-b border-gray-200 pb-8">
                  <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    Datos de Contacto (Persona Clave)
                  </h3>
                  <div class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo <span class="text-red-500">*</span></label>
                        <input v-model="form.nombre" type="text" id="nombre" placeholder="Ej. Juan Pérez" :class="inputClasses(errors.nombre)">
                         <p v-if="errors.nombre" class="mt-1 text-sm text-red-600">{{ errors.nombre }}</p>
                      </div>
                      <div>
                        <label for="puesto" class="block text-sm font-medium text-gray-700 mb-2">Puesto / Cargo <span class="text-red-500">*</span></label>
                        <input v-model="form.puesto" type="text" id="puesto" placeholder="Ej. Director Comercial" :class="inputClasses(errors.puesto)">
                        <p v-if="errors.puesto" class="mt-1 text-sm text-red-600">{{ errors.puesto }}</p>
                      </div>
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico <span class="text-red-500">*</span></label>
                      <input v-model="form.email" type="email" id="email" placeholder="contacto@tuempresa.com" :class="inputClasses(errors.email)">
                      <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Teléfono Principal <span class="text-red-500">*</span></label>
                        <input v-model="form.telefono" type="tel" id="telefono" placeholder="+52 55 1234 5678" :class="inputClasses(errors.telefono)">
                        <p v-if="errors.telefono" class="mt-1 text-sm text-red-600">{{ errors.telefono }}</p>
                      </div>
                      <div>
                        <label for="whatsapp" class="block text-sm font-medium text-gray-700 mb-2">WhatsApp (opcional)</label>
                        <input v-model="form.whatsapp" type="tel" id="whatsapp" placeholder="+52 55 1234 5678" :class="inputClasses()">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-b border-gray-200 pb-8">
                   <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <svg class="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8V7a1 1 0 112 0v3h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2z"></path></svg>
                    Detalles de Operación
                  </h3>
                   <div class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label for="capacidad" class="block text-sm font-medium text-gray-700 mb-2">Capacidad Mensual <span class="text-red-500">*</span></label>
                        <select v-model="form.capacidad" id="capacidad" :class="selectClasses(errors.capacidad)">
                          <option value="" disabled>Selecciona tu capacidad</option>
                          <option v-for="option in capacityOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
                        </select>
                        <p v-if="errors.capacidad" class="mt-1 text-sm text-red-600">{{ errors.capacidad }}</p>
                      </div>
                      <div>
                        <label for="tiempo" class="block text-sm font-medium text-gray-700 mb-2">Tiempo de Entrega <span class="text-red-500">*</span></label>
                        <select v-model="form.tiempo" id="tiempo" :class="selectClasses(errors.tiempo)">
                          <option value="" disabled>Selecciona el tiempo</option>
                          <option v-for="option in deliveryTimeOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
                        </select>
                         <p v-if="errors.tiempo" class="mt-1 text-sm text-red-600">{{ errors.tiempo }}</p>
                      </div>
                    </div>
                    <div>
                      <label for="certificaciones" class="block text-sm font-medium text-gray-700 mb-2">Certificaciones (opcional)</label>
                      <textarea v-model="form.certificaciones" id="certificaciones" rows="3" placeholder="Ej. ISO 9001:2015, GMP, etc." :class="inputClasses()"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="pt-6">
              <div class="relative flex items-start">
                <div class="flex h-5 items-center">
                  <input v-model="form.terminos" id="terminos" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                </div>
                <div class="ml-3 text-sm">
                  <label for="terminos" class="font-medium text-gray-700 select-none">Acepto los <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-800 hover:underline">Términos del servicio</a> y la <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-800 hover:underline">Política de privacidad</a> <span class="text-red-500">*</span></label>
                </div>
              </div>
               <p v-if="errors.terminos" class="mt-2 text-sm text-red-600">{{ errors.terminos }}</p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitDisabled"
              class="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-3 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed text-lg"
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
              <router-link to="/login" class="font-semibold text-emerald-600 hover:text-emerald-800 hover:underline">Inicia Sesión Aquí</router-link>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// --- STATE MANAGEMENT ---
const router = useRouter();
const loading = ref(false);

const form = reactive({
  empresa: '', rfc: '', anios: null, categorias: [], nombre: '', puesto: '',
  email: '', telefono: '', whatsapp: '', capacidad: '', tiempo: '',
  certificaciones: '', terminos: false
});

const errors = reactive({
  empresa: '', rfc: '', anios: '', categorias: '', nombre: '', puesto: '',
  email: '', telefono: '', capacidad: '', tiempo: '', terminos: ''
});

// --- STATIC DATA ---
const categories = [
  { id: 'textiles', name: 'Textiles' }, { id: 'insumos', name: 'Insumos Industriales' },
  { id: 'maquinaria', name: 'Maquinaria y Equipo' }, { id: 'servicios', name: 'Servicios Profesionales' },
  { id: 'materia-prima', name: 'Materia Prima' }, { id: 'empaques', name: 'Empaques y Embalajes' },
  { id: 'logistica', name: 'Logística y Transporte' }, { id: 'marketing', name: 'Marketing y Publicidad' }
];

const capacityOptions = [
  { value: 'bajo', text: 'Bajo (1-50 unidades/servicios)' }, { value: 'medio', text: 'Medio (51-500 unidades/servicios)' },
  { value: 'alto', text: 'Alto (501-2,000 unidades/servicios)' }, { value: 'muy-alto', text: 'Muy Alto (+2,000 unidades/servicios)' }
];

const deliveryTimeOptions = [
  { value: '1-3d', text: '1-3 días hábiles' }, { value: '4-7d', text: '4-7 días hábiles' },
  { value: '1-2s', text: '1-2 semanas' }, { value: '2-4s', text: '2-4 semanas' },
  { value: '1m+', text: 'Más de 1 mes' }
];

// --- COMPUTED PROPERTIES ---
const isSubmitDisabled = computed(() => {
  return loading.value || !form.terminos || form.categorias.length === 0;
});

// --- DYNAMIC CLASSES ---
const baseInputClasses = 'w-full px-5 py-3 border rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-800 placeholder-gray-400';
const inputClasses = (error) => `${baseInputClasses} ${error ? 'border-red-500' : 'border-gray-300'}`;
const selectClasses = (error) => `${inputClasses(error)} bg-white`;

// --- METHODS ---
const validateForm = () => {
  // Limpiar errores previos
  Object.keys(errors).forEach(key => errors[key] = '');
  let isValid = true;
  
  // Validaciones
  if (!form.empresa) { errors.empresa = 'El nombre de la empresa es obligatorio.'; isValid = false; }
  if (!form.rfc) { errors.rfc = 'El RFC es obligatorio.'; isValid = false; }
  if (!form.anios || form.anios <= 0) { errors.anios = 'Indica años de experiencia válidos.'; isValid = false; }
  if (form.categorias.length === 0) { errors.categorias = 'Debes seleccionar al menos una categoría.'; isValid = false; }
  if (!form.nombre) { errors.nombre = 'El nombre de contacto es obligatorio.'; isValid = false; }
  if (!form.puesto) { errors.puesto = 'El puesto es obligatorio.'; isValid = false; }
  if (!form.email) { errors.email = 'El correo es obligatorio.'; isValid = false; }
  if (!form.telefono) { errors.telefono = 'El teléfono es obligatorio.'; isValid = false; }
  if (!form.capacidad) { errors.capacidad = 'Debes seleccionar una capacidad.'; isValid = false; }
  if (!form.tiempo) { errors.tiempo = 'Debes seleccionar un tiempo de entrega.'; isValid = false; }
  if (!form.terminos) { errors.terminos = 'Debes aceptar los términos y condiciones.'; isValid = false; }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) return;

  loading.value = true;
  try {
    // El v-model.number ya convierte años, pero parseInt es más seguro
    const payload = { ...form, anios: parseInt(form.anios) };
    const response = await axios.post('http://localhost:8000/proveedores/registro', payload);

    console.log('Respuesta del backend:', response.data);
    alert('¡Solicitud de registro enviada con éxito! Revisaremos tu información y te contactaremos pronto.');
    router.push('/');

  } catch (error) {
    console.error('Error en el registro del proveedor:', error);
    let generalError = 'Ocurrió un error inesperado durante el registro.';
    if (error.response?.data?.detail) {
      if (Array.isArray(error.response.data.detail)) {
        error.response.data.detail.forEach(err => {
          const field = err.loc[1];
          if (errors.hasOwnProperty(field)) {
            errors[field] = `El ${field} ya está registrado o es inválido.`;
          }
        });
        generalError = "Por favor, corrige los errores en el formulario.";
      } else if (typeof error.response.data.detail === 'string') {
        generalError = error.response.data.detail;
      }
    } else if (error.request) {
      generalError = 'No se pudo conectar con el servidor. Revisa tu conexión y que la API esté activa.';
    }
    alert(generalError);
    
  } finally {
    loading.value = false;
  }
};
</script>