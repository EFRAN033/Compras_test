<template>
  <section id="testimonios" class="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 to-emerald-900 overflow-hidden">
    <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-900/20 blur-3xl"></div>
    <div class="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-900/20 blur-3xl"></div>

    <div class="absolute top-1/4 left-[10%] animate-float-erratic-1 opacity-50">
      <svg class="w-16 h-16 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.7-3.67V14H18c.78 0 1.37-.62 1.25-1.39L17 5H5.49L4.43 2.52C4.24 2.19 3.84 2 3.45 2H2v2h1.45l2.67 6.15c-.63.45-1.08 1.14-1.08 1.95 0 1.65 1.35 3 3 3h12v-2H7.42c-.22 0-.4-.18-.4-.4l.01-.01L6.16 7.08c-.14-.3-.4-.48-.73-.48H4.26L5.3 4.5h1.76L8.1 8h7.4L18 8.87V7h-4.6l-.7-2H21v11.33L17.76 16c-.4-.4-.95-.6-1.5-.6H7.42z"/>
      </svg>
    </div>
    <div class="absolute bottom-[20%] right-[15%] animate-float-erratic-2 opacity-50">
      <svg class="w-16 h-16 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4V2h-2v7zm5-3v8h2V6h3V4h-3V1h-2v3h-3v2h3z"/>
      </svg>
    </div>
    <div class="absolute top-[25%] right-[5%] animate-float-erratic-3 opacity-50 hidden md:block">
      <svg class="w-14 h-14 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1-9H7v2h4v4h2v-4h4V9h-4V5h-2v4z"/>
      </svg>
    </div>
    <div class="absolute bottom-[10%] left-[25%] animate-float-erratic-4 opacity-50 hidden md:block">
      <svg class="w-14 h-14 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 18H7V6h10v12zm-3.5-9.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 17c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    </div>
    <div class="absolute top-[5%] left-[40%] animate-float-erratic-5 opacity-50 hidden lg:block">
      <svg class="w-12 h-12 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6-2h-4v2h4V4zm6 15H4V8h16v11zM9 10v8l7-4-7-4z"/>
      </svg>
    </div>
    <div class="absolute bottom-[5%] right-[40%] animate-float-erratic-6 opacity-50 hidden lg:block">
      <svg class="w-12 h-12 text-teal-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 11.55C9.64 9.35 6.48 8.01 3 8l-.01 2.01C5.9 10.02 8.62 11.59 12 14c3.38-2.41 6.1-3.98 9.01-3.99L21 8c-3.48.01-6.64 1.35-9 3.55zM12 4c-3.48.01-6.64 1.35-9 3.55L3 9.56c3.48-.01 6.64-1.35 9-3.55s5.52-3.55 9-3.55l.01-2.01C18.62 3.59 15.36 4.93 12 4z"/>
      </svg>
    </div>

    <div class="container mx-auto px-6 sm:px-12 relative z-10">
      <div class="text-center mb-14 md:mb-16">
        <span class="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-teal-100/20 to-emerald-100/20 text-emerald-300 rounded-full text-sm font-bold uppercase tracking-wider border border-emerald-400/30">
          TESTIMONIOS
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          <span class="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Voces</span> de confianza
        </h2>
        <p class="text-emerald-100 max-w-md mx-auto text-base md:text-lg">
          Empresas que transformaron su cadena de suministro
        </p>
      </div>

      <div
        class="grid gap-8 md:grid-cols-2 transition-all duration-700 ease-in-out"
        :style="{ height: testimonialsContainerHeight }"
        ref="testimonialsContainer"
      >
        <div
          v-for="(testimonial, index) in displayedTestimonials"
          :key="index"
          class="p-8 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg"
        >
          <div class="flex items-start gap-5 mb-5">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-14 h-14 rounded-full border-2 border-emerald-400/30 object-cover"/>
            <div>
              <h4 class="font-bold text-white text-lg">{{ testimonial.name }}</h4>
              <p class="text-emerald-300 text-sm md:text-base">{{ testimonial.position }}</p>
            </div>
          </div>
          <p class="text-emerald-100 mb-5 text-base md:text-lg">"{{ testimonial.quote }}"</p>
          <div class="flex justify-between items-center">
            <div class="flex text-yellow-400">
              <i v-for="star in 5" :key="star" class="fas fa-star text-sm"/>
            </div>
            <span class="text-emerald-300 text-sm md:text-base">{{ testimonial.date }}</span>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a
          v-if="!showAllTestimonials"
          @click="toggleTestimonials"
          class="inline-flex items-center px-6 py-3 border-2 border-emerald-400 text-emerald-400 rounded-full text-base font-semibold hover:bg-emerald-400/10 transition-all duration-300 group cursor-pointer"
        >
          Ver más testimonios
          <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
        <a
          v-else
          @click="toggleTestimonials"
          class="inline-flex items-center px-6 py-3 border-2 border-emerald-400 text-emerald-400 rounded-full text-base font-semibold hover:bg-emerald-400/10 transition-all duration-300 group cursor-pointer"
        >
          Volver
          <svg class="ml-2 w-4 h-4 transition-transform group-hover:-translate-x-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Testimonios iniciales (los que se muestran por defecto)
      initialTestimonialsCount: 2,
      // Bandera para controlar si se muestran todos los testimonios
      showAllTestimonials: false,
      // Todos los testimonios disponibles
      allTestimonials: [
        {
          name: "Nina Rodríguez",
          position: "Directora de Logística, InnovaTech S.A.",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          quote: "Redujimos un 60% el tiempo en gestión de compras con mayor precisión en inventarios. La implementación fue fluida y el soporte técnico, excepcional.",
          date: "Hace 2 meses"
        },
        {
          name: "Carlos Méndez",
          position: "CEO, Distribuciones Globales",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          quote: "Logramos una reducción del 35% en costos logísticos gracias a su plataforma intuitiva y análisis predictivos. Superó nuestras expectativas.",
          date: "Hace 5 meses"
        },
        {
          name: "Sofía Vargas",
          position: "Jefa de Operaciones, LogiExpress",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          quote: "La automatización de procesos ha mejorado nuestra eficiencia en un 40%. La interfaz es amigable y fácil de usar, incluso para el nuevo personal.",
          date: "Hace 1 mes"
        },
        {
          name: "Javier Castro",
          position: "Gerente de Cadena de Suministro, AgroFuturo",
          avatar: "https://randomuser.me/api/portraits/men/78.jpg",
          quote: "Su solución nos permitió optimizar rutas de entrega y reducir el consumo de combustible. Una inversión que se pagó sola en meses.",
          date: "Hace 3 meses"
        },
        {
          name: "Luisa Pérez",
          position: "Analista de Inventarios, Textil Dreams",
          avatar: "https://randomuser.me/api/portraits/women/12.jpg",
          quote: "La visibilidad en tiempo real de nuestro stock es increíble. Podemos tomar decisiones más informadas y responder rápidamente a los cambios del mercado.",
          date: "Hace 4 meses"
        },
        {
          name: "Martín Gómez",
          position: "Director Comercial, TechSolutions",
          avatar: "https://randomuser.me/api/portraits/men/50.jpg",
          quote: "El sistema de pronóstico de demanda es un cambio de juego. Hemos minimizado el exceso de stock y mejorado la satisfacción del cliente.",
          date: "Hace 6 meses"
        },
        {
          name: "Andrea Díaz",
          position: "COO, PharmaCare",
          avatar: "https://randomuser.me/api/portraits/women/71.jpg",
          quote: "La seguridad y trazabilidad que ofrece su plataforma son fundamentales para nuestra industria. Cumple con todas las regulaciones.",
          date: "Hace 7 meses"
        },
        {
          name: "Roberto Sanchez",
          position: "Logistics Manager, ConstruMás",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          quote: "Desde el primer día, notamos la diferencia en la coordinación con proveedores y la gestión de pedidos. Un aliado estratégico sin duda.",
          date: "Hace 8 meses"
        },
        {
          name: "Paula Torres",
          position: "Especialista en Compras, DecoHogar",
          avatar: "https://randomuser.me/api/portraits/women/20.jpg",
          quote: "Simplificó enormemente nuestros procesos de adquisición. La plataforma es robusta y fácil de adaptar a nuestras necesidades específicas.",
          date: "Hace 9 meses"
        },
        {
          name: "Fernando Rojas",
          position: "Fundador, StartUp Innovación",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          quote: "Como startup, necesitábamos una solución escalable y asequible. Han superado nuestras expectativas y nos han permitido crecer rápidamente.",
          date: "Hace 10 meses"
        },
        {
          name: "Valeria Soto",
          position: "Gerente de Almacén, FreshFoods",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
          quote: "El control de inventario en tiempo real es una maravilla. Minimizamos las pérdidas y optimizamos el espacio de almacenamiento. ¡Muy recomendado!",
          date: "Hace 11 meses"
        },
        {
          name: "Daniel Herrera",
          position: "Director de TI, DataLogistics",
          avatar: "https://randomuser.me/api/portraits/men/90.jpg",
          quote: "La integración API fue impecable con nuestros sistemas existentes. Un equipo técnico altamente capacitado y un producto de primera clase.",
          date: "Hace 1 año"
        }
      ],
      // Altura calculada para la transición suave
      testimonialsContainerHeight: 'auto'
    };
  },
  computed: {
    // Computa los testimonios a mostrar basados en `showAllTestimonials`
    displayedTestimonials() {
      return this.showAllTestimonials ? this.allTestimonials : this.allTestimonials.slice(0, this.initialTestimonialsCount);
    }
  },
  methods: {
    toggleTestimonials() {
      this.showAllTestimonials = !this.showAllTestimonials;
      this.$nextTick(() => {
        this.updateContainerHeight();
      });
    },
    updateContainerHeight() {
      if (this.$refs.testimonialsContainer) {
        // Establece la altura a 'auto' si se muestran todos para que tome el contenido completo
        // O establece la altura fija de los elementos iniciales
        this.testimonialsContainerHeight = this.showAllTestimonials ? 
          `${this.$refs.testimonialsContainer.scrollHeight}px` : 
          'auto'; // O un valor fijo si los 2 iniciales tienen una altura conocida
      }
    }
  },
  mounted() {
    // Calcula la altura inicial al montar el componente
    this.$nextTick(() => {
      this.updateContainerHeight();
    });
    window.addEventListener('resize', this.updateContainerHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateContainerHeight);
  }
};
</script>

<style scoped>
/* Animaciones flotantes erráticas para los iconos */
@keyframes floatErratic1 {
  0% { transform: translate(0px, 0px); }
  25% { transform: translate(20px, -15px); }
  50% { transform: translate(-10px, 20px); }
  75% { transform: translate(15px, -5px); }
  100% { transform: translate(0px, 0px); }
}

@keyframes floatErratic2 {
  0% { transform: translate(0px, 0px); }
  20% { transform: translate(-15px, 10px); }
  40% { transform: translate(25px, -20px); }
  60% { transform: translate(-5px, 15px); }
  80% { transform: translate(10px, -10px); }
  100% { transform: translate(0px, 0px); }
}

@keyframes floatErratic3 {
  0% { transform: translate(0px, 0px); }
  30% { transform: translate(-20px, -10px); }
  60% { transform: translate(10px, 20px); }
  100% { transform: translate(0px, 0px); }
}

@keyframes floatErratic4 {
  0% { transform: translate(0px, 0px); }
  25% { transform: translate(10px, 20px); }
  50% { transform: translate(-20px, -10px); }
  75% { transform: translate(5px, 15px); }
  100% { transform: translate(0px, 0px); }
}

@keyframes floatErratic5 {
  0% { transform: translate(0px, 0px); }
  33% { transform: translate(15px, -15px); }
  66% { transform: translate(-10px, 25px); }
  100% { transform: translate(0px, 0px); }
}

@keyframes floatErratic6 {
  0% { transform: translate(0px, 0px); }
  40% { transform: translate(-25px, 10px); }
  80% { transform: translate(5px, -20px); }
  100% { transform: translate(0px, 0px); }
}


.animate-float-erratic-1 { animation: floatErratic1 8s ease-in-out infinite; }
.animate-float-erratic-2 { animation: floatErratic2 10s ease-in-out infinite 0.5s; }
.animate-float-erratic-3 { animation: floatErratic3 7s ease-in-out infinite 1s; }
.animate-float-erratic-4 { animation: floatErratic4 9s ease-in-out infinite 1.5s; }
.animate-float-erratic-5 { animation: floatErratic5 6s ease-in-out infinite 2s; }
.animate-float-erratic-6 { animation: floatErratic6 11s ease-in-out infinite 2.5s; }

/* Para asegurar que la grilla puede cambiar de tamaño y que la transición de altura se aplique */
.grid {
  display: grid; /* Importante para que el gap funcione y el contenido se reorganice */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Ejemplo de columnas adaptables */
  transition: height 0.7s ease-in-out; /* Esta es la transición que hace el efecto de expandir/contraer */
  overflow: hidden; /* Oculta el contenido extra durante la transición */
  align-items: start; /* Asegura que los ítems se alineen al inicio de su celda */
}

/* Puedes ajustar el grid para que los testimonios sean más pequeños y ordenados
   cuando se muestran todos, si el diseño lo permite, por ejemplo:
*/
@media (min-width: 768px) {
  .grid.expanded {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas en desktop cuando se expande */
    /* O incluso 4 columnas si los haces muy pequeños */
    /* grid-template-columns: repeat(4, 1fr); */
  }
}
</style>