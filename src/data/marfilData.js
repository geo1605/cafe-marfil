// ==========================================================================
// CAFÉ MARFIL — CAFÉ DE ESPECIALIDAD & COCINA HONESTA — DURANGO, MÉXICO
// ADN Gastronómico:
// 1. Barra de Especialidad e Indulgencia: Espresso, Flat White, Cold Brew Tonic
//    con romero, frappés de confitería (Kinder, Gansito, Barbie, Mazapán),
//    sodas italianas, tés/tisanas, cervezas y mezcal.
// 2. Cocina Salada y Dulce Contundente: Chilaquiles con boneless o rellenos,
//    molletes monumentales ("Mamut"), hamburguesas, pizzas artesanales,
//    waffles temáticos y fresas estilo Dubái con pistache y kataifi.
// ==========================================================================

export const SUCURSALES = [
  {
    id: 'centro-historico',
    nombre: 'Centro Histórico',
    subtitulo: 'Casona colonial, terraza lúdica, cocina contundente y música en vivo',
    direccion: 'Calle 5 de Febrero #704, Zona Centro, Durango, Dgo.',
    horario: 'Lunes a Domingo: 8:00 AM – 11:30 PM (All-Day Dining)',
    telefono: '(618) 811-2345',
    imagen: '/images/sucursal_centro.jpg',
    caracteristicas: [
      'Terraza colonial con vegetación',
      'Salón de juegos de mesa (+60 juegos)',
      'Cocina caliente continua (All-Day Breakfast)',
      'Barra de métodos y frappés de autor',
      'Pet friendly en terraza'
    ],
    servicios: ['WiFi 150 Mbps', 'Enchufes en cada mesa', 'Coctelería y mezcal de Durango', 'Bicicletero'],
    mapsUrl: 'https://maps.google.com/?q=Durango+Centro+Historico+Cafe+Marfil',
    destacada: true
  },
  {
    id: 'paseo-constitucion',
    nombre: 'Paseo Constitución',
    subtitulo: 'Cafetería al aire libre en el andador peatonal histórico',
    direccion: 'Andador Constitución #312, Zona Centro, Durango, Dgo.',
    horario: 'Lunes a Domingo: 8:30 AM – 11:00 PM',
    telefono: '(618) 825-6789',
    imagen: '/images/hero_cafe.jpg',
    caracteristicas: [
      'Mesas exteriores en andador peatonal',
      'Barra express de frappés y sodas italianas',
      'Ambiente social y vibrante',
      'Pet friendly total'
    ],
    servicios: ['Grab & Go', 'Fresas estilo Dubái al paso', 'Cervezas artesanales', 'WiFi'],
    mapsUrl: 'https://maps.google.com/?q=Paseo+Constitucion+Durango+Cafe+Marfil',
    destacada: false
  },
  {
    id: 'lomas-del-parque',
    nombre: 'Lomas del Parque',
    subtitulo: 'Espacio contemporáneo para desayunos familiares, catas y cowork',
    direccion: 'Blvd. Guadiana #140, Lomas del Parque, Durango, Dgo.',
    horario: 'Lunes a Domingo: 7:30 AM – 10:30 PM',
    telefono: '(618) 813-8890',
    imagen: '/images/desayunos_marfil.jpg',
    caracteristicas: [
      'Salones amplios para grupos y familias',
      'Laboratorio de café y repostería en vivo',
      'Estacionamiento propio y valet',
      'Terraza pet friendly'
    ],
    servicios: ['Estacionamiento privado', 'Salas de junta', 'Menú infantil', 'Pizzas de masa madre'],
    mapsUrl: 'https://maps.google.com/?q=Lomas+del+Parque+Durango+Cafe+Marfil',
    destacada: false
  }
];

export const PLATILLOS_ESTRELLA = [
  {
    id: 'chilaquiles-boneless',
    nombre: 'Chilaquiles con Boneless Crujientes',
    categoria: 'Cocina Salada Contundente',
    categoriaSlug: 'salado',
    porcion: 'PLATO FUERTE',
    salsa: 'Salsa Verde Martajada o Chipotle Dulce',
    precio: '$175 MXN',
    precioNum: 175,
    descripcion: 'Totopos de maíz nixtamalizado bañados en salsa verde martajada de la casa, crema de rancho, queso asadero y 180g de boneless de pechuga crujiente.',
    imagen: '/images/desayunos_marfil.jpg',
    badge: 'FAVORITO DE LA CASA'
  },
  {
    id: 'mollete-mamut',
    nombre: 'Mollete Monumental "Mamut" (28cm)',
    categoria: 'Desayunos All-Day',
    categoriaSlug: 'salado',
    porcion: 'PARA COMPARTIR',
    salsa: 'Pico de Gallo & Chiles Toreados',
    precio: '$155 MXN',
    precioNum: 155,
    descripcion: 'Pan rústico de masa madre de 28cm untado con frijoles puercos, abundante costra dorada de queso asadero duranguense y chorizo artesanal dorado.',
    imagen: '/images/desayunos_marfil.jpg',
    badge: 'MONUMENTAL'
  },
  {
    id: 'fresas-estilo-dubai',
    nombre: 'Fresas Estilo Dubái con Pistache & Kataifi',
    categoria: 'Indulgencia Dulce',
    categoriaSlug: 'dulce',
    porcion: 'COPA DOBLE',
    precio: '$145 MXN',
    precioNum: 145,
    descripcion: 'Fresas frescas de temporada bañadas en crema untuosa de pistache siciliano puro, chocolate derretido y lluvia crocante de pasta kataifi tostada en mantequilla.',
    imagen: '/images/marfil_dubai_pistache.jpg',
    badge: 'TENDENCIA DUBÁI'
  },
  {
    id: 'frappe-kinder-bueno',
    nombre: 'Frappé de Confitería: Kinder Bueno & Avellana',
    categoria: 'Barra de Indulgencia',
    categoriaSlug: 'frappes',
    porcion: '16 OZ',
    precio: '$98 MXN',
    precioNum: 98,
    descripcion: 'Frappé cremoso a base de crema de avellana y chocolate blanco, coronado con crema batida artesanal, chocolate fundido y barra completa de Kinder Bueno.',
    imagen: '/images/marfil_kinder_hero.jpg',
    badge: 'MÁS PEDIDO'
  },
  {
    id: 'cold-brew-tonic-romero',
    nombre: 'Cold Brew Tonic con Romero & Naranja',
    categoria: 'Barra de Especialidad',
    categoriaSlug: 'especialidad',
    porcion: '14 OZ',
    precio: '$78 MXN',
    precioNum: 78,
    descripcion: 'Extracción en frío durante 18 horas de café Chiapas de especialidad, agua tónica artesanal, hielo cristalino y ramita de romero fresco quemado al momento.',
    imagen: '/images/specialty_coffee.jpg',
    badge: 'AUTOR MARFIL'
  }
];

export const ACTIVIDADES = [
  {
    id: 'noche-juegos-mesa',
    nombre: 'Noche de Juegos de Mesa & Degustación',
    categoria: 'Juegos & Convivencia',
    categoriaSlug: 'juegos',
    fecha: 'Viernes 3 de Octubre, 2026',
    fechaCorta: 'Vie, 3 Oct',
    hora: '7:30 PM – 10:30 PM',
    sucursalId: 'centro-historico',
    sucursalNombre: 'Centro Histórico',
    imagen: '/images/board_games.jpg',
    resumen: 'Reúnete con amigos o conoce gente nueva con más de 60 juegos de mesa, anfitrión que te enseña a jugar, combos de chilaquiles y frappés de confitería.',
    descripcionCompleta: 'Nuestra icónica noche lúdica en Café Marfil Durango combina la mejor ludoteca con cocina caliente abierta toda la noche. Un anfitrión explica las reglas de Catan, Dixit, Carcassonne, Codenames y más. Tu entrada incluye un frappé mediano o café americano de especialidad más acceso completo a la ludoteca.',
    duracion: '3 horas',
    cupoTotal: 28,
    lugaresOcupados: 23,
    lugaresDisponibles: 5,
    precio: '$95 MXN',
    precioNum: 95,
    esGratis: false,
    incluye: ['Acceso a +60 juegos de mesa', 'Frappé o café de especialidad incluido', 'Anfitrión de juegos guiados'],
    requisitos: 'Apto para todas las edades. No se requiere experiencia previa en juegos.'
  },
  {
    id: 'sesion-acustica-marfil',
    nombre: 'Sesión Acústica: Indie & Jazz con Mezcal',
    categoria: 'Música en vivo & Noches',
    categoriaSlug: 'musica',
    fecha: 'Sábado 4 de Octubre, 2026',
    fechaCorta: 'Sáb, 4 Oct',
    hora: '8:00 PM – 10:30 PM',
    sucursalId: 'centro-historico',
    sucursalNombre: 'Centro Histórico',
    imagen: '/images/live_music.jpg',
    resumen: 'Música en vivo en nuestra terraza colonial, pizzas artesanales, cócteles de café y shots de mezcal artesanal duranguense.',
    descripcionCompleta: 'La atmósfera nocturna de Café Marfil en su máxima expresión. Disfruta de ensambles acústicos en vivo con cantautores locales, pizzas de masa madre recién horneadas y nuestra carta de bebidas sociales que incluye mezcal artesanal de Nombre de Dios, Durango.',
    duracion: '2.5 horas',
    cupoTotal: 35,
    lugaresOcupados: 31,
    lugaresDisponibles: 4,
    precio: 'Entrada Libre',
    precioNum: 0,
    esGratis: true,
    incluye: ['Concierto acústico en vivo', 'Mesa asegurada con reservación'],
    requisitos: 'Consumo de alimentos o bebidas. Se recomienda reservar con 24 hrs de antelación.'
  },
  {
    id: 'taller-cata-maridaje',
    nombre: 'Cata de Especialidad & Maridaje de Repostería Dubái',
    categoria: 'Talleres & Catas',
    categoriaSlug: 'talleres',
    fecha: 'Domingo 5 de Octubre, 2026',
    fechaCorta: 'Dom, 5 Oct',
    hora: '10:30 AM – 1:00 PM',
    sucursalId: 'lomas-del-parque',
    sucursalNombre: 'Lomas del Parque',
    imagen: '/images/marfil_dubai_pistache.jpg',
    resumen: 'Aprende a catar cafés mexicanos de altura (V60 y Aeropress) y descubre cómo maridan con postres de pistache y kataifi.',
    descripcionCompleta: 'Taller sensorial práctico guiado por nuestro Head Barista. Descubriremos notas cítricas, achocolatadas y afrutadas de Chiapas y Oaxaca, contrastadas con una degustación exclusiva de nuestras fresas estilo Dubái con pistache y waffles temáticos.',
    duracion: '2.5 horas',
    cupoTotal: 14,
    lugaresOcupados: 10,
    lugaresDisponibles: 4,
    precio: '$320 MXN',
    precioNum: 320,
    esGratis: false,
    incluye: ['Cata de 3 orígenes mexicanos', 'Degustación de fresas Dubái', 'Guía sensorial impresa'],
    requisitos: 'No usar perfumes penetrantes.'
  },
  {
    id: 'torneo-blitz-ajedrez',
    nombre: 'Torneo de Ajedrez Relámpago & Cold Brew',
    categoria: 'Juegos & Convivencia',
    categoriaSlug: 'juegos',
    fecha: 'Miércoles 8 de Octubre, 2026',
    fechaCorta: 'Mié, 8 Oct',
    hora: '6:30 PM – 9:00 PM',
    sucursalId: 'paseo-constitucion',
    sucursalNombre: 'Paseo Constitución',
    imagen: '/images/board_games.jpg',
    resumen: 'Torneo casual a 5 rondas en el andador peatonal con relojes de ajedrez y premios en consumo.',
    descripcionCompleta: 'Tarde competitiva bajo las sombrillas de Paseo Constitución. Premios para los 3 primeros lugares consistentes en combos Mamut, frappés de confitería y bolsas de café Marfil.',
    duracion: '2.5 horas',
    cupoTotal: 20,
    lugaresOcupados: 15,
    lugaresDisponibles: 5,
    precio: '$60 MXN',
    precioNum: 60,
    esGratis: false,
    incluye: ['Relojes y tableros profesionales', 'Bebida de cortesía', 'Premios para el podio'],
    requisitos: 'Todos los niveles bienvenidos.'
  }
];

export const PROMOCIONES = [
  {
    id: 'promo-combo-mamut',
    nombre: 'Combo Monumental: Mamut + Flat White',
    categoria: 'Promociones del mes',
    categoriaSlug: 'mes',
    descuentoBadge: 'COMBO $145',
    vigencia: 'Lunes a Domingo de 8:00 AM a 2:00 PM',
    sucursalesAplicables: ['Centro Histórico', 'Lomas del Parque', 'Paseo Constitución'],
    sucursalesValidas: ['Centro Histórico', 'Lomas del Parque', 'Paseo Constitución'],
    imagen: '/images/desayunos_marfil.jpg',
    resumen: 'Mollete Mamut de masa madre con costra de queso asadero duranguense y chorizo artesanal más un Flat White doble de 12oz.',
    descripcion: 'Mollete Mamut de masa madre con costra de queso asadero duranguense y chorizo artesanal más un Flat White doble de 12oz.',
    beneficioDetalle: 'Precio especial combo: $145 MXN (Ahorras $45 MXN)',
    codigoCupon: 'MAMUTMARFIL',
    condiciones: [
      'Aplica en consumo en sucursal y para llevar.',
      'Disponible en cualquier sucursal de Café Marfil en Durango.',
      'Puedes cambiar tu Flat White por Cold Brew Tonic sin costo extra.'
    ],
    terminos: [
      'Aplica en consumo en sucursal y para llevar.',
      'Disponible en cualquier sucursal de Café Marfil en Durango.',
      'Puedes cambiar tu Flat White por Cold Brew Tonic sin costo extra.'
    ],
    comoUsar: 'Presiona "Mostrar cupón al barista", presenta tu código al ordenar en mostrador y disfruta tu experiencia.'
  },
  {
    id: 'promo-jueves-frappes',
    nombre: 'Jueves Lúdico: 2x1 en Frappés de Confitería',
    categoria: 'Temporada',
    categoriaSlug: 'temporada',
    descuentoBadge: '2x1 JUEVES',
    vigencia: 'Todos los Jueves de 4:00 PM a 8:00 PM',
    sucursalesAplicables: ['Centro Histórico', 'Paseo Constitución'],
    sucursalesValidas: ['Centro Histórico', 'Paseo Constitución'],
    imagen: '/images/dubai_frappes.jpg',
    resumen: 'Pide tu frappé favorito de Kinder Bueno, Gansito, Barbie Pink o Mazapán y el segundo va por nuestra cuenta.',
    descripcion: 'Pide tu frappé favorito de Kinder Bueno, Gansito, Barbie Pink o Mazapán y el segundo va por nuestra cuenta.',
    beneficioDetalle: '2x1 en toda la línea de Frappés de Confitería Comercial 16oz.',
    codigoCupon: 'FRAPPES2X1',
    condiciones: [
      'Válido exclusivamente los días Jueves de 4:00 PM a 8:00 PM.',
      'Aplica en sabores: Kinder Bueno, Gansito, Barbie Pink y Mazapán.',
      'La segunda bebida es de igual o menor precio.'
    ],
    terminos: [
      'Válido exclusivamente los días Jueves de 4:00 PM a 8:00 PM.',
      'Aplica en sabores: Kinder Bueno, Gansito, Barbie Pink y Mazapán.',
      'La segunda bebida es de igual o menor precio.'
    ],
    comoUsar: 'Genera tu código digital y muéstralo al barista antes de cerrar tu orden.'
  },
  {
    id: 'promo-fresas-dubai-launch',
    nombre: 'Lanzamiento: Fresas Dubái con Pistache 15% OFF',
    categoria: 'Promociones por sucursal',
    categoriaSlug: 'sucursal',
    descuentoBadge: '15% DTO',
    vigencia: 'Válido durante todo Octubre 2026',
    sucursalesAplicables: ['Centro Histórico', 'Lomas del Parque'],
    sucursalesValidas: ['Centro Histórico', 'Lomas del Parque'],
    imagen: '/images/dubai_frappes.jpg',
    resumen: 'Prueba la sensación gastronómica: fresas frescas bañadas en crema pura de pistache siciliano y pasta kataifi tostada en mantequilla.',
    descripcion: 'Prueba la sensación gastronómica: fresas frescas bañadas en crema pura de pistache siciliano y pasta kataifi tostada en mantequilla.',
    beneficioDetalle: '15% de descuento directo en cualquier copa de Fresas Estilo Dubái.',
    codigoCupon: 'DUBAIMARFIL',
    condiciones: [
      'Válido en sucursales Centro Histórico y Lomas del Parque.',
      'Sujeto a disponibilidad diaria de pasta kataifi artesanal.',
      'Presentar código desde la aplicación web al ordenar.'
    ],
    terminos: [
      'Válido en sucursales Centro Histórico y Lomas del Parque.',
      'Sujeto a disponibilidad diaria de pasta kataifi artesanal.',
      'Presentar código desde la aplicación web al ordenar.'
    ],
    comoUsar: 'Muestra tu QR al ordenar tu postre en mostrador.'
  },
  {
    id: 'promo-estudiantes-creativos',
    nombre: 'Comunidad Estudiantes & Cowork Durango',
    categoria: 'Clientes frecuentes',
    categoriaSlug: 'frecuentes',
    descuentoBadge: '15% ALL-DAY',
    vigencia: 'Lunes a Viernes todo el ciclo escolar',
    sucursalesAplicables: ['Centro Histórico', 'Paseo Constitución'],
    sucursalesValidas: ['Centro Histórico', 'Paseo Constitución'],
    imagen: '/images/hero_cafe.jpg',
    resumen: '15% de descuento en barra de especialidad, chilaquiles con boneless y uso de ludoteca para estudiantes y docentes.',
    descripcion: '15% de descuento en barra de especialidad, chilaquiles con boneless y uso de ludoteca para estudiantes y docentes.',
    beneficioDetalle: 'Descuento del 15% en todo el menú de alimentos, café y ludoteca.',
    codigoCupon: 'ESTUDIAMARFIL',
    condiciones: [
      'Presentar credencial vigente de estudiante o profesor.',
      'Válido para consumo individual de lunes a viernes.',
      'No acumulable con otras promociones o cupones.'
    ],
    terminos: [
      'Presentar credencial vigente de estudiante o profesor.',
      'Válido para consumo individual de lunes a viernes.',
      'No acumulable con otras promociones o cupones.'
    ],
    comoUsar: 'Genera el cupón y muéstralo junto con tu credencial.'
  }
];

export const PERFIL_USUARIO = {
  nombre: 'Sofía Navarro Morales',
  primerNombre: 'Sofía',
  correo: 'sofia.navarro@gmail.com',
  telefono: '(618) 154-8920',
  ciudad: 'Durango, Dgo.',
  avatarUrl: '',
  nivelFidelidad: 'Club Marfil Oro',
  visitasRealizadas: 14,
  sellosActuales: 6,
  sellosTotalesParaMeta: 8,
  puntosFidelidad: 380,
  preferencias: {
    platilloFavorito: 'Chilaquiles con boneless verdes',
    frappeFavorito: 'Frappé Kinder Bueno 16oz',
    cafeFavorito: 'Flat White 12oz con leche de avena',
    sucursalFrecuente: 'Centro Histórico'
  }
};

export const BENEFICIOS_USUARIO = [
  {
    id: 'ben-1',
    titulo: 'Frappé de Confitería Gratis (16oz)',
    subtitulo: 'A elegir: Kinder Bueno, Gansito, Barbie Pink o Mazapán',
    estado: 'disponible',
    vigencia: 'Vence el 25 de Octubre, 2026',
    codigo: 'MF-FRAPPE-992',
    icono: 'Sparkles'
  },
  {
    id: 'ben-2',
    titulo: 'Mollete Mamut con 50% de Descuento',
    subtitulo: 'Aplica en tu siguiente visita a Café Marfil',
    estado: 'disponible',
    vigencia: 'Vence el 30 de Noviembre, 2026',
    codigo: 'MF-MAMUT-418',
    icono: 'Utensils'
  },
  {
    id: 'ben-3',
    titulo: 'Pase Prioritario a Noche de Juegos de Mesa',
    subtitulo: 'Entrada y mesa asegurada sin costo de ludoteca',
    estado: 'usado',
    fechaUso: 'Canjeado el 18 de Septiembre, 2026',
    codigo: 'MF-LUDO-880',
    icono: 'Dices'
  },
  {
    id: 'ben-4',
    titulo: 'Copa de Fresas Estilo Dubái de Cortesía',
    subtitulo: 'Desbloquea al completar tus 8 sellos de visita en Durango',
    estado: 'bloqueado',
    progreso: '6 de 8 sellos completados',
    codigo: 'PROXIMAMENTE',
    icono: 'Gift'
  }
];

export const RULETA_PREMIOS = [
  { id: 1, texto: 'Frappé Kinder Gratis', valor: 'Frappé Kinder Gratis', tipo: 'frappe' },
  { id: 2, texto: '15% DTO en Tu Consumo', valor: '15% OFF Consumo', tipo: 'descuento' },
  { id: 3, texto: 'Shot de Mezcal Durango', valor: 'Shot Mezcal Gratis', tipo: 'social' },
  { id: 4, texto: '2x1 Bebidas de Barra', valor: '2x1 Bebidas', tipo: 'promo' },
  { id: 5, texto: 'Mollete Mamut al 50%', valor: 'Mamut 50% OFF', tipo: 'comida' },
  { id: 6, texto: '+60 Puntos Marfil Club', valor: '+60 Pts Marfil', tipo: 'puntos' }
];

export const NOTIFICACIONES_INICIALES = [
  {
    id: 'notif-1',
    titulo: '¡Mesa confirmada en Centro Histórico!',
    mensaje: 'Tu reservación para 4 personas está lista para mañana a las 7:30 PM (Folio #MF-8492). Chilaquiles y juegos esperándote.',
    tiempo: 'Hace 2 horas',
    tipo: 'reservacion',
    leida: false,
    screenDestino: 'mis_reservaciones'
  },
  {
    id: 'notif-2',
    titulo: '¡Nuevo beneficio por tus 6 visitas!',
    mensaje: 'Desbloqueaste "Frappé de Confitería Gratis 16oz" en Café Marfil. Válido en cualquier sucursal.',
    tiempo: 'Ayer',
    tipo: 'beneficio',
    leida: false,
    screenDestino: 'beneficios'
  },
  {
    id: 'notif-3',
    titulo: 'Nuevo platillo en carta: Fresas Dubái',
    mensaje: 'Ya puedes pedir fresas con crema pura de pistache siciliano y kataifi crocante en Centro y Lomas.',
    tiempo: 'Hace 2 días',
    tipo: 'promo',
    leida: true,
    screenDestino: 'promociones'
  }
];

export const RESERVACIONES_INICIALES = [
  {
    id: 'MF-8492',
    tipo: 'Cafetería & Noche de Juegos',
    sucursalId: 'centro-historico',
    sucursalNombre: 'Centro Histórico (Casona 5 de Febrero)',
    fecha: 'Mañana, 1 de Octubre, 2026',
    fechaISO: '2026-10-01',
    hora: '7:30 PM',
    personas: 4,
    nombreCliente: 'Sofía Navarro Morales',
    telefonoCliente: '(618) 154-8920',
    correoCliente: 'sofia.navarro@gmail.com',
    notas: 'Queremos mesa cerca de la ludoteca. Pediremos combo Mamut y frappés.',
    estado: 'Confirmada',
    qrCode: 'MF-8492-MARFIL-CENTRO',
    esHistorica: false
  },
  {
    id: 'MF-7319',
    tipo: 'Desayunos & Degustación All-Day',
    sucursalId: 'lomas-del-parque',
    sucursalNombre: 'Lomas del Parque',
    fecha: '14 de Septiembre, 2026',
    fechaISO: '2026-09-14',
    hora: '11:00 AM',
    personas: 2,
    nombreCliente: 'Sofía Navarro Morales',
    telefonoCliente: '(618) 154-8920',
    correoCliente: 'sofia.navarro@gmail.com',
    notas: 'Celebración de cumpleaños de mi amiga.',
    estado: 'Completada',
    qrCode: 'MF-7319-HISTORICO',
    esHistorica: true
  }
];
