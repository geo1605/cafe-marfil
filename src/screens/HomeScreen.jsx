import React, { useState, useEffect, useRef } from 'react';
import {
  CalendarDays,
  Tag,
  ArrowRight,
  Heart,
  Send,
  CheckCircle2,
  Sparkles,
  Coffee,
  Flame,
  Award
} from 'lucide-react';
import ElephantLogo from '../components/ElephantLogo.jsx';
import { sounds } from '../utils/audio';

// Flecha doodle dibujada a mano
const SketchArrow = ({ className = '', style = {} }) => (
  <svg
    width="64"
    height="42"
    viewBox="0 0 70 45"
    fill="none"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path
      d="M5,35 C20,40 45,35 55,15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M44,12 L56,14 L52,26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const STAMP_TEXT = 'CAFÉ DE ESPECIALIDAD • HECHO EN DURANGO • ';
const STAMP_RADIUS = 47;

export default function HomeScreen({
  onNavigate,
  onSelectActivity,
  onSelectPromo,
  actividades,
  promociones
}) {
  const [favorites, setFavorites] = useState({});
  const [weekendFilter, setWeekendFilter] = useState('todos');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const stampTextRef = useRef(null);

  const toggleFavorite = (id) => {
    sounds.playPop();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAction = (screenId, params = null) => {
    sounds.playClick();
    if (params && params.activity) {
      onSelectActivity(params.activity);
    } else if (params && params.promo) {
      onSelectPromo(params.promo);
    } else {
      onNavigate(screenId);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      sounds.playSuccess();
      setNewsletterSubscribed(true);
    }
  };

  // Sello circular: reparte el texto para que cierre exactamente la circunferencia
  useEffect(() => {
    const el = stampTextRef.current;
    if (!el) return undefined;

    const fit = () => {
      const circumference = 2 * Math.PI * STAMP_RADIUS;
      el.style.letterSpacing = '0px';
      const base = el.getComputedTextLength();
      if (!base) return;
      el.style.letterSpacing = `${(circumference - base) / STAMP_TEXT.length}px`;
    };

    fit();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit).catch(() => { });
    }
    return undefined;
  }, []);

  // Productos Recientes / Especialidades
  const recentProducts = [
    {
      id: 'prod-chiapas',
      tag: 'GRANOS DE AUTOR',
      nombre: 'Chiapas Altura Tueste Medio',
      descripcion: 'Notas de chocolate oscuro, avellana tostada y aroma floral de alta montaña.',
      precio: '$145 MXN',
      imagen: '/images/specialty_coffee.jpg',
      tipo: 'Bolsa 250g'
    },
    {
      id: 'prod-kinder',
      tag: 'INDULGENCIA LÚDICA',
      nombre: 'Frappé Kinder Bueno & Avellana',
      descripcion: 'Crema de avellana, chocolate blanco, crema batida artesanal y barra completa.',
      precio: '$98 MXN',
      imagen: '/images/marfil_kinder_hero.jpg',
      tipo: 'Vaso 16 oz'
    },
    {
      id: 'prod-dubai',
      tag: 'TENDENCIA DUBÁI',
      nombre: 'Pistache Dubái con Kataifi',
      descripcion: 'Fresas frescas de temporada, crema pura de pistache siciliano y kataifi dorado.',
      precio: '$145 MXN',
      imagen: '/images/marfil_dubai_pistache.jpg',
      tipo: 'Copa Doble'
    },
    {
      id: 'prod-caramel',
      tag: 'RECETA DE LA CASA',
      nombre: 'Caramel Ribbon Crunch Frappé',
      descripcion: 'Toffee artesanal, café espresso, espiral de caramelo y crujiente de azúcar rubia.',
      precio: '$98 MXN',
      imagen: '/images/marfil_caramel_ribbon.jpg',
      tipo: 'Vaso 16 oz'
    }
  ];

  // Especiales de Fin de Semana con filtro
  const weekendSpecialProducts = [
    {
      id: 'esp-chilaquiles',
      categoria: 'desayunos',
      tag: 'COCINA CALIENTE',
      descuento: 'MÁS PEDIDO',
      nombre: 'Chilaquiles con Boneless Verdes',
      precioOriginal: '$195',
      precioActual: '$175 MXN',
      imagen: '/images/desayunos_marfil.jpg',
      resumen: 'Totopos nixtamalizados en salsa verde martajada, crema de rancho y 180g de pechuga crujiente.',
      actionType: 'reservar'
    },
    {
      id: 'esp-mamut',
      categoria: 'desayunos',
      tag: 'COMBO ESPECIAL',
      descuento: 'AHORRA $45',
      nombre: 'Combo Monumental: Mamut + Flat White',
      precioOriginal: '$190',
      precioActual: '$145 MXN',
      imagen: '/images/desayunos_marfil.jpg',
      resumen: 'Pan baguette de masa madre de 28cm con queso asadero duranguense, chorizo artesanal y café doble.',
      actionType: 'promociones'
    },
    {
      id: 'esp-juegos',
      categoria: 'juegos',
      tag: 'LUDOTECA & BEBIDA',
      descuento: 'EXPERIENCIA',
      nombre: 'Pase Noche de Juegos de Mesa',
      precioOriginal: '$120',
      precioActual: '$95 MXN',
      imagen: '/images/board_games.jpg',
      resumen: 'Acceso total a +60 juegos de mesa con anfitrión que explica las reglas más frappé o café incluido.',
      actionType: 'actividades'
    }
  ];

  const filteredWeekendProducts = weekendFilter === 'todos'
    ? weekendSpecialProducts
    : weekendSpecialProducts.filter((p) => p.categoria === weekendFilter);

  return (
    <div className="home-screen flex flex-col gap-14 md:gap-20 pb-16 fade-in">
      {/* ====================================================================
          1. HERO SECTION (Alto Contraste y Definición)
          ==================================================================== */}
      <section className="relative flex items-center pt-2 pb-2 md:pb-4 w-full" aria-labelledby="mh-hero-title">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-center">
          {/* Columna Izquierda de Información */}
          <div className="relative z-30 flex flex-col items-start max-w-xl pointer-events-auto">

            {/* Titular Principal */}
            <h1 id="mh-hero-title" className="m-0 mb-3 text-[#1F1410] font-bold font-display leading-[1.06] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              <span className="block">Café de especialidad.</span>
              <span className="block">Desayunos monumentales.</span>
              <span className="block italic font-medium text-[#E12927]">Tardes de mesa & café.</span>
            </h1>


            {/* Acciones de Botones 100% Sólidos y de Alta Visibilidad */}
            <div className="flex flex-wrap gap-3.5 mb-2 w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-xs font-bold font-mono tracking-wider uppercase cursor-pointer bg-[#E12927] hover:bg-[#C81E1C] active:scale-95 text-white border-2 border-[#E12927] shadow-lg shadow-[#E12927]/30 hover:shadow-xl transition-all duration-200"
                onClick={() => handleAction('reservar')}
              >
                <CalendarDays size={18} aria-hidden="true" />
                <span>Reservar mi mesa</span>
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-xs font-bold font-mono tracking-wider uppercase cursor-pointer bg-white hover:bg-[#1F1410] text-[#1F1410] hover:text-white border-2 border-[#1F1410] active:scale-95 shadow-md transition-all duration-200"
                onClick={() => handleAction('promociones')}
              >
                <Tag size={18} aria-hidden="true" />
                <span>Ver promociones</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha Visual */}
          <div className="relative z-10 w-full flex items-center justify-center pointer-events-none">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] aspect-square flex items-center justify-center group pointer-events-auto">
              {/* Disco concéntrico centrado mediante inset */}
              <div
                className="absolute inset-[10%] rounded-2xl z-0 animate-mh-disc pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 48% 44%, #FFF6F5 0%, #FCEAE9 50%, #F6CFCB 100%)'
                }}
                aria-hidden="true"
              />

              {/* Imagen Vaso Espejo */}
              <img
                src="/images/marfil_hero_cup.png"
                alt="Vaso de Café Marfil Durango con splash de café y logo oficial"
                className="relative z-10 w-full h-full object-contain pointer-events-none mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105 group-hover:translate-y-[-4px]"
                style={{
                  transform: 'scaleX(1) scale(1.1) rotate(-3deg)',
                  filter: 'brightness(1.04) contrast(1.02)',
                  WebkitMaskImage: 'radial-gradient(ellipse 96% 94% at 50% 50%, #000 72%, rgba(0, 0, 0, 0.6) 90%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 96% 94% at 50% 50%, #000 72%, rgba(0, 0, 0, 0.6) 90%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. CINTILLO / CAROUSEL TICKER INCLINADO — DIVISIÓN DE SECCIONES (FULL SCREEN WIDTH)
          ==================================================================== */}
      <div
        className="relative -mt-6 sm:-mt-10 lg:-mt-14 xl:-mt-16 mb-4 sm:mb-8 py-4 sm:py-6 overflow-hidden select-none z-20"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)'
        }}
      >
        {/* Cinta principal en Negro Café (sin sombra) que abarca toda la pantalla horizontalmente inclinada hacia arriba a la izquierda */}
        <section
          className="w-[108vw] -ml-[4vw] bg-[#1F1410] text-white py-4.5 sm:py-5 border-y-2 border-[#E12927]/50 transform -rotate-[1.5deg] overflow-hidden"
          aria-label="Carrusel gastronómico Café Marfil"
        >
          <div className="animate-marfil-marquee items-center gap-8 text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            {/* Bloque 1 */}
            <div className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-2">
                <Coffee size={15} className="text-[#E12927]" />
              </span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>CHILAQUILES CON BONELESS VERDES</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>FLAT WHITE & COLD BREW TONIC CON ROMERO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>FRAPPÉ KINDER BUENO & BARBIE</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>MOLLETE MAMUT 28CM CON ASADERO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>+60 JUEGOS DE MESA EN SALA CON ANFITRIÓN</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>PIZZAS ARTESANALES AL HORNO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>MEZCAL ARTESANAL DURANGUENSE & SHOTS</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>ALL-DAY BRUNCH URBANO EN DURANGO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
            </div>

            {/* Bloque 2 (Clon idéntico para loop continuo sin saltos) */}
            <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
              <span className="flex items-center gap-2">
                <Coffee size={15} className="text-[#E12927]" />
                <span>CAFÉ DE ALTURA CHIAPAS (100% ARÁBICA)</span>
              </span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span className="px-3 py-1 rounded-sm bg-[#E12927] text-white text-[10px] tracking-widest font-bold">
                TOP DURANGO
              </span>
              <span>CHILAQUILES CON BONELESS VERDES</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>FLAT WHITE & COLD BREW TONIC CON ROMERO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>FRAPPÉ KINDER BUENO & BARBIE</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>MOLLETE MAMUT 28CM CON ASADERO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span className="px-3 py-1 rounded-sm bg-[#FCEAE9] text-[#1F1410] text-[10px] tracking-widest font-bold">
                TENDENCIA
              </span>
              <span>FRESAS DUBÁI CON PISTACHE & KATAIFI</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>+60 JUEGOS DE MESA EN SALA CON ANFITRIÓN</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>PIZZAS ARTESANALES AL HORNO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>MEZCAL ARTESANAL DURANGUENSE & SHOTS</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
              <span>ALL-DAY BRUNCH URBANO EN DURANGO</span>
              <span className="text-[#E12927] font-bold text-base">✦</span>
            </div>
          </div>
        </section>
      </div>


    </div>
  );
}