<template>
  <div class="min-h-screen bg-slate-50 font-sans">
    
    <header class="bg-slate-50 shadow-md py-3 sticky top-0 z-50 overflow-hidden">
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

    <main class="py-12 sm:py-16">
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl border border-slate-100">
          
          <div class="text-center mb-8">
            <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Registro de Nuevo Cliente</h1>
            <p class="text-slate-500 text-lg">Únete a nuestra red para optimizar tus procesos de compra.</p>
          </div>

          <div class="mb-10 px-2">
            <div class="flex items-center">
              <template v-for="(stepInfo, index) in steps" :key="stepInfo.id">
                <div class="flex items-center" :class="{'w-full': index > 0}">
                  <div v-if="index > 0" class="flex-auto border-t-2 transition-colors duration-500" :class="step > index ? 'border-blue-600' : 'border-slate-200'"></div>
                  <div class="flex items-center justify-center relative">
                    <div class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500"
                         :class="getStepClass(index + 1)">
                      <svg v-if="step > index + 1" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                      <span v-else class="text-lg font-semibold">{{ index + 1 }}</span>
                    </div>
                    <p class="absolute top-12 w-32 text-center text-xs font-medium transition-colors duration-500" :class="step >= index + 1 ? 'text-blue-600' : 'text-slate-500'">{{ stepInfo.name }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          
          <form @submit.prevent="submitForm" class="mt-16">
            <section v-if="step === 1" class="animate-fade-in space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="nombres" class="form-label">Nombre(s)*</label>
                  <input v-model="form.nombres" type="text" id="nombres" placeholder="Ej. Juan Andrés" :class="inputClass('nombres')" required>
                  <p v-if="errors.nombres" class="text-red-500 text-xs mt-1">{{ errors.nombres }}</p>
                </div>
                <div>
                  <label for="apellidos" class="form-label">Apellidos*</label>
                  <input v-model="form.apellidos" type="text" id="apellidos" placeholder="Ej. García López" :class="inputClass('apellidos')" required>
                  <p v-if="errors.apellidos" class="text-red-500 text-xs mt-1">{{ errors.apellidos }}</p>
                </div>
              </div>
              <div>
                <label for="email_corporativo" class="form-label">Correo electrónico corporativo*</label>
                <input v-model="form.email_corporativo" type="email" id="email_corporativo" placeholder="tu.nombre@empresa.com" :class="inputClass('email_corporativo')" required>
                <p v-if="errors.email_corporativo" class="text-red-500 text-xs mt-1">{{ errors.email_corporativo }}</p>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="telefono_contacto" class="form-label">Teléfono de contacto*</label>
                  <input v-model="form.telefono_contacto" type="tel" id="telefono_contacto" placeholder="+51 987 654 321" :class="inputClass('telefono_contacto')" required>
                  <p v-if="errors.telefono_contacto" class="text-red-500 text-xs mt-1">{{ errors.telefono_contacto }}</p>
                </div>
                <div>
                  <label for="puesto_cargo" class="form-label">Puesto/Cargo en la empresa*</label>
                  <input v-model="form.puesto_cargo" type="text" id="puesto_cargo" placeholder="Ej. Gerente de Compras" :class="inputClass('puesto_cargo')" required>
                  <p v-if="errors.puesto_cargo" class="text-red-500 text-xs mt-1">{{ errors.puesto_cargo }}</p>
                </div>
              </div>
            </section>

            <section v-if="step === 2" class="animate-fade-in space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="razon_social_empresa" class="form-label">Razón Social/Nombre de empresa*</label>
                  <input v-model="form.razon_social_empresa" type="text" id="razon_social_empresa" :class="inputClass('razon_social_empresa')" required>
                  <p v-if="errors.razon_social_empresa" class="text-red-500 text-xs mt-1">{{ errors.razon_social_empresa }}</p>
                </div>
                <div>
                  <label for="rfc_empresa" class="form-label">RFC / RUC de la empresa*</label>
                  <input v-model="form.rfc_empresa" type="text" id="rfc_empresa" :class="inputClass('rfc_empresa')" required>
                  <p v-if="errors.rfc_empresa" class="text-red-500 text-xs mt-1">{{ errors.rfc_empresa }}</p>
                </div>
              </div>
              <div>
                <label for="industria_sector" class="form-label">Industria / Sector principal*</label>
                <select v-model="form.industria_sector" id="industria_sector" :class="inputClass('industria_sector')" required>
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="textil">Textil y Confección</option>
                  <option value="tecnologia">Tecnología y Software</option>
                  <option value="alimentos">Alimentos y Bebidas</option>
                  <option value="construccion">Construcción</option>
                  <option value="salud">Salud y Farmacéutica</option>
                  <option value="otro">Otro</option>
                </select>
                <p v-if="errors.industria_sector" class="text-red-500 text-xs mt-1">{{ errors.industria_sector }}</p>
              </div>
              <div>
                <label for="tamano_empresa" class="form-label">Tamaño de empresa*</label>
                <select v-model="form.tamano_empresa" id="tamano_empresa" :class="inputClass('tamano_empresa')" required>
                   <option value="" disabled>Selecciona una opción</option>
                  <option value="micro">Micro (1-10 empleados)</option>
                  <option value="pequena">Pequeña (11-50 empleados)</option>
                  <option value="mediana">Mediana (51-250 empleados)</option>
                  <option value="grande">Grande (+250 empleados)</option>
                </select>
                <p v-if="errors.tamano_empresa" class="text-red-500 text-xs mt-1">{{ errors.tamano_empresa }}</p>
              </div>
            </section>
            
            <section v-if="step === 3" class="animate-fade-in space-y-6">
               <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="contrasena" class="form-label">Crear Contraseña*</label>
                  <input v-model="form.contrasena" type="password" id="contrasena" :class="inputClass('contrasena')" required>
                  <p v-if="errors.contrasena" class="text-red-500 text-xs mt-1">{{ errors.contrasena }}</p>
                </div>
                <div>
                  <label for="confirm_contrasena" class="form-label">Confirmar Contraseña*</label>
                  <input v-model="form.confirm_contrasena" type="password" id="confirm_contrasena" :class="inputClass('confirm_contrasena')" required>
                  <p v-if="errors.confirm_contrasena" class="text-red-500 text-xs mt-1">{{ errors.confirm_contrasena }}</p>
                </div>
              </div>
              <div class="space-y-1">
                  <div class="flex justify-between items-center text-xs">
                    <span class="font-medium text-slate-500">Fortaleza de la contraseña:</span>
                    <span class="font-bold" :class="passwordStrength.color">{{ passwordStrength.text }}</span>
                  </div>
                  <div class="w-full bg-slate-200 rounded-full h-2">
                    <div class="rounded-full h-2 transition-all duration-300" :class="passwordStrength.colorBg" :style="{ width: passwordStrength.width }"></div>
                  </div>
              </div>
              <div>
                 <div class="flex items-start">
                  <div class="flex items-center h-5 mt-0.5">
                    <input v-model="form.aceptar_terminos" id="aceptar_terminos" type="checkbox" :class="checkboxClass" required>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="aceptar_terminos" class="text-slate-600">Acepto los <a href="#" target="_blank" class="font-semibold text-blue-600 hover:underline">Términos de Servicio</a> y la <a href="#" target="_blank" class="font-semibold text-blue-600 hover:underline">Política de Privacidad</a>*</label>
                  </div>
                </div>
                <p v-if="errors.aceptar_terminos" class="text-red-500 text-xs mt-1 ml-9">{{ errors.aceptar_terminos }}</p>
              </div>
            </section>
            
            <div class="flex justify-between items-center pt-8 mt-8 border-t border-slate-200">
              <button type="button" @click="prevStep" v-if="step > 1" class="font-semibold text-slate-600 hover:text-slate-900 transition-colors">Atrás</button>
              <div v-else></div> 
              <button type="button" @click="nextStep" v-if="step < steps.length" class="btn btn-primary">Siguiente</button>
              
              <button type="submit" :disabled="loading" v-if="step === steps.length" class="btn btn-primary">
                <span v-if="!loading">Completar Registro</span>
                <span v-else class="flex items-center"><svg class="animate-spin -ml-1 mr-2 h-5 w-5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Procesando</span>
              </button>
            </div>
          </form>
          
          <div class="mt-8 text-center">
            <p class="text-sm text-slate-500">¿Ya tienes una cuenta? <router-link to="/login" class="font-semibold text-blue-600 hover:underline">Inicia sesión</router-link></p>
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

// --- ESTADO GENERAL ---
const router = useRouter();
const step = ref(1);
const loading = ref(false);
const errors = reactive({});
const steps = [
  { id: 1, name: 'Información Personal', fields: ['nombres', 'apellidos', 'email_corporativo', 'telefono_contacto', 'puesto_cargo'] },
  { id: 2, name: 'Datos de Empresa', fields: ['razon_social_empresa', 'rfc_empresa', 'industria_sector', 'tamano_empresa'] },
  { id: 3, name: 'Seguridad', fields: ['contrasena', 'confirm_contrasena', 'aceptar_terminos'] },
];

const form = reactive({
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
  aceptar_terminos: false,
});

// --- LÓGICA DE NAVEGACIÓN Y VALIDACIÓN ---
const nextStep = () => {
  if (validateStep(step.value)) {
    if (step.value < steps.length) step.value++;
  }
};

const prevStep = () => {
  if (step.value > 1) step.value--;
};

const validateStep = (stepToValidate) => {
  Object.keys(errors).forEach(key => {
      // Limpiamos solo los errores del paso actual para no afectar a otros
      const fieldExistsInStep = steps.find(s => s.id === stepToValidate)?.fields.includes(key);
      if (fieldExistsInStep) {
        delete errors[key];
      }
  });

  const currentFields = steps.find(s => s.id === stepToValidate).fields;
  let isValid = true;
  
  for (const field of currentFields) {
    if (!form[field]) {
      errors[field] = 'Este campo es requerido.';
      isValid = false;
    }
  }

  if (stepToValidate === 3) {
    if (form.contrasena && form.contrasena.length < 8) {
      errors.contrasena = 'La contraseña debe tener al menos 8 caracteres.';
      isValid = false;
    }
    if (form.contrasena !== form.confirm_contrasena) {
      errors.confirm_contrasena = 'Las contraseñas no coinciden.';
      isValid = false;
    }
    if (!form.aceptar_terminos) {
      errors.aceptar_terminos = 'Debes aceptar los términos y condiciones.';
      isValid = false;
    }
  }
  
  return isValid;
};


// --- LÓGICA DE ENVÍO DE FORMULARIO ---
const submitForm = async () => {
  if (!validateStep(3)) {
    alert('Por favor, corrige los errores en el formulario antes de continuar.');
    return;
  }

  loading.value = true;
  try {
    const response = await axios.post(import.meta.env.VITE_APP_API_BASE_URL + '/afiliados/registro', {
      nombres: form.nombres,
      apellidos: form.apellidos,
      email_corporativo: form.email_corporativo,
      telefono_contacto: form.telefono_contacto,
      puesto_cargo: form.puesto_cargo,
      razon_social_empresa: form.razon_social_empresa,
      rfc_empresa: form.rfc_empresa,
      industria_sector: form.industria_sector,
      tamano_empresa: form.tamano_empresa,
      contrasena: form.contrasena,
    });
    
    alert('¡Registro exitoso! Serás redirigido a la página de inicio de sesión.');
    router.push('/login');

  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Ocurrió un error inesperado. Inténtalo de nuevo.';
    alert(`Error en el registro: ${errorMessage}`);
  } finally {
    loading.value = false;
  }
};


// --- PROPIEDADES COMPUTADAS PARA ESTILOS DINÁMICOS ---
const getStepClass = (stepIndex) => {
  if (step.value > stepIndex) return 'bg-blue-600 text-white';
  if (step.value === stepIndex) return 'bg-white text-blue-600 border-2 border-blue-600';
  return 'bg-slate-200 text-slate-500';
};

const inputClass = (field) => {
  const base = "form-input";
  return errors[field] ? `${base} border-red-500 focus:border-red-500 focus:ring-red-200` : base;
};

const checkboxClass = computed(() => {
  const base = "h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded";
  return errors.aceptar_terminos ? `${base} border-red-500` : base;
});

const passwordStrength = computed(() => {
    const pass = form.contrasena;
    let score = 0;
    if (!pass) return { width: '0%', text: '', color: 'text-slate-500', colorBg: 'bg-slate-200' };

    if (pass.length >= 8) score++;
    if (pass.length >= 10) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    const strengthMap = [
        { width: '20%', text: 'Muy Débil', color: 'text-red-500', colorBg: 'bg-red-500' },
        { width: '40%', text: 'Débil', color: 'text-orange-500', colorBg: 'bg-orange-500' },
        { width: '60%', text: 'Aceptable', color: 'text-yellow-500', colorBg: 'bg-yellow-500' },
        { width: '80%', text: 'Buena', color: 'text-green-500', colorBg: 'bg-green-500' },
        { width: '100%', text: 'Excelente', color: 'text-emerald-500', colorBg: 'bg-emerald-500' },
    ];
    
    // Asignar el puntaje al mapa de fortaleza, asegurando que el índice no se salga de los límites.
    const finalScore = Math.min(score, strengthMap.length) -1;
    return strengthMap[finalScore] || { width: '0%', text: '', color: 'text-slate-500', colorBg: 'bg-slate-200' };
});

</script>

<style>
/* Definimos algunas clases base aquí para no repetirlas en todo el template.
  Esto es similar a usar @apply en un archivo CSS, pero directamente en el componente.
*/
.form-label {
  @apply block text-sm font-semibold text-slate-700 mb-2;
}
.form-input {
  @apply w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200;
}
.btn {
  @apply inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed;
}
.btn-primary {
  @apply bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg focus:ring-blue-500;
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>