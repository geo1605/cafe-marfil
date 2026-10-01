import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Compass,
  CalendarDays,
  Sparkles,
  Check
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function BranchesScreen({
  sucursales,
  onReserveBranch,
  onFilterBranchActivities
}) {
  return (
    <div className="flex flex-col gap-8 fade-in pb-16">
      {/* Encabezado */}
      <div className="max-w-2xl text-left">
        <span className="inline-flex items-center gap-1.5 mb-2 text-xs font-bold font-mono tracking-widest text-[#E12927] uppercase px-3.5 py-1.5 rounded-sm bg-[#FCEAE9] border-2 border-[#E12927]/30 shadow-xs">
          <MapPin size={14} />
          <span>NUESTROS ESPACIOS EN DURANGO, DGO.</span>
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1410] tracking-tight mb-3">
          Sucursales Café Marfil
        </h1>
        <p className="font-body text-sm sm:text-base text-[#1F1410]/80 leading-relaxed font-medium">
          Tres atmósferas con identidad propia: terraza colonial en el Centro Histórico, cafetería al aire libre en Paseo Constitución y espacio contemporáneo en Lomas del Parque.
        </p>
      </div>

      {/* Lista de Sucursales HeroUI Cards 100% Sólidas */}
      <div className="flex flex-col gap-8">
        {sucursales.map((suc) => (
          <article
            key={suc.id}
            className="bg-white rounded-lg border-2 border-stone-300 overflow-hidden shadow-md hover:shadow-xl hover:border-[#E12927] transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr]">
              {/* Imagen de la sucursal */}
              <div className="relative h-64 sm:h-72 lg:h-full min-h-[260px] bg-stone-100 overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-stone-200">
                <img src={suc.imagen} alt={suc.nombre} className="w-full h-full object-cover" />
                {suc.destacada && (
                  <span className="absolute top-4 left-4 px-4 py-1.5 rounded-sm font-mono text-[11px] font-bold uppercase tracking-wider bg-[#E12927] text-white shadow-lg border border-[#E12927]">
                    ★ SUCURSAL MATRIZ
                  </span>
                )}
              </div>

              {/* Información y detalles */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-5 justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#E12927] tracking-widest uppercase">
                    DURANGO, DGO. · MÉXICO
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1F1410] mt-1 mb-1">
                    {suc.nombre}
                  </h2>
                  <p className="font-body text-sm text-[#5A4840] font-medium">{suc.subtitulo}</p>
                </div>

                {/* Datos de contacto y ubicación */}
                <div className="flex flex-col gap-3.5 p-5 rounded-md bg-[#FCEAE9] border-2 border-[#E12927]/40 shadow-xs">
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <MapPin size={18} className="text-[#E12927] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-mono text-[10px] text-[#8E7A74] uppercase tracking-wider">DIRECCIÓN</strong>
                      <p className="font-body text-[#1F1410] font-medium m-0">{suc.direccion}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <Clock size={18} className="text-[#E12927] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-mono text-[10px] text-[#8E7A74] uppercase tracking-wider">HORARIO ALL-DAY</strong>
                      <p className="font-body text-[#1F1410] font-medium m-0">{suc.horario}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <Phone size={18} className="text-[#1F1410] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-mono text-[10px] text-[#8E7A74] uppercase tracking-wider">TELÉFONO & WHATSAPP</strong>
                      <p className="font-body text-[#1F1410] font-medium m-0">{suc.telefono}</p>
                    </div>
                  </div>
                </div>

                {/* Características y Servicios */}
                <div>
                  <span className="block font-mono text-[11px] font-bold text-[#8E7A74] uppercase tracking-wider mb-2">
                    EXPERIENCIAS & SERVICIOS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {suc.caracteristicas.map((car, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-sm font-body text-xs font-semibold bg-white text-[#1F1410] border-2 border-stone-300 flex items-center gap-1.5 shadow-xs"
                      >
                        <Check size={13} className="text-[#E12927]" />
                        <span>{car}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Acciones principales HeroUI Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-stone-200">
                  <a
                    href={suc.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#1F1410] bg-white text-[#1F1410] hover:bg-[#1F1410] hover:text-white active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
                    onClick={() => sounds.playClick()}
                  >
                    <Navigation size={14} />
                    <span>Cómo llegar</span>
                  </a>

                  <button
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#1F1410] bg-white text-[#1F1410] hover:bg-[#1F1410] hover:text-white active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
                    onClick={() => {
                      sounds.playClick();
                      onFilterBranchActivities(suc.id);
                    }}
                  >
                    <Compass size={14} />
                    <span>Actividades</span>
                  </button>

                  <button
                    className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-mono text-xs font-bold uppercase tracking-wider bg-[#E12927] hover:bg-[#C81E1C] active:scale-95 text-white border-2 border-[#E12927] shadow-md shadow-[#E12927]/30 hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      sounds.playClick();
                      onReserveBranch(suc.id);
                    }}
                  >
                    <CalendarDays size={14} />
                    <span>Reservar mesa aquí</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
