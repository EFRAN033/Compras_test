<template>
    <div class="client-logo-carousel-wrapper mt-12 md:mt-16 flex flex-col items-center">
      <p class="text-sm md:text-base text-gray-500 mb-4 font-medium">Con la confianza de empresas líderes:</p>
      <div class="relative w-full overflow-hidden py-4">
        <div class="flex animate-carousel-move" :style="{'--carousel-duration': carouselDuration}">
          <div v-for="(logo, index) in allLogos" :key="index"
               class="flex-shrink-0 flex items-center justify-center h-16 w-32 md:w-40 px-4">
            <img :src="logo.src" :alt="logo.alt" class="max-h-full max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Tus importaciones de logos aquí
  import cliente1 from '@/assets/imagenes/cliente1.svg';
  import cliente2 from '@/assets/imagenes/cliente2.svg';
  import cliente3 from '@/assets/imagenes/cliente3.svg';
  import cliente4 from '@/assets/imagenes/cliente4.svg';
  import cliente5 from '@/assets/imagenes/cliente5.svg';
  import cliente6 from '@/assets/imagenes/cliente6.svg';
  import cliente7 from '@/assets/imagenes/cliente7.svg';
  
  export default {
    name: 'ClientLogoCarousel',
    data() {
      return {
        // Ahora 'logos' usa directamente los logos importados
        logos: [
          { src: cliente1, alt: 'Logo Cliente 1' },
          { src: cliente2, alt: 'Logo Cliente 2' },
          { src: cliente3, alt: 'Logo Cliente 3' },
          { src: cliente4, alt: 'Logo Cliente 4' },
          { src: cliente5, alt: 'Logo Cliente 5' },
          { src: cliente6, alt: 'Logo Cliente 6' },
          { src: cliente7, alt: 'Logo Cliente 7' },
        ],
        // Propiedad calculada para duplicar logos y crear el loop infinito
        allLogos: [],
        carouselDuration: '30s', // Duración inicial de la animación del carrusel
      };
    },
    created() {
      // Duplica los logos para asegurar un scroll continuo sin interrupciones
      this.allLogos = [...this.logos, ...this.logos];
      // Ajusta la duración de la animación basada en el número de logos para mantener una velocidad constante
      // Se multiplica por 3s por logo, ajusta si quieres que sea más rápido o lento
      this.carouselDuration = `${this.logos.length * 3}s`;
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para la animación del carrusel */
  .animate-carousel-move {
    animation: carouselMove var(--carousel-duration) linear infinite;
    white-space: nowrap; /* Asegura que los logos no se rompan en múltiples líneas */
  }
  
  @keyframes carouselMove {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); } /* Mueve el 50% de los logos para un loop infinito */
  }
  </style>