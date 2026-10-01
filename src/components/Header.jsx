import React from 'react';
import { Bell, Moon, Sun, CalendarDays, User, Sparkles } from 'lucide-react';
import ElephantLogo from './ElephantLogo';
import { sounds } from '../utils/audio';

export default function Header({
  activeScreen,
  setActiveScreen,
  theme,
  toggleTheme,
  unreadCount,
  openNotifications
}) {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'actividades', label: 'Actividades & Ludoteca' },
    { id: 'promociones', label: 'Promociones' },
    { id: 'beneficios', label: 'Club Marfil' },
    { id: 'sucursales', label: 'Sucursales' }
  ];

  const handleNav = (screenId) => {
    sounds.playClick();
    setActiveScreen(screenId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>

      {/* Navbar Principal: Fondo Blanco 100% Sólido, Borde 2px y Sombra Definida */}
      <header className="sticky top-0 z-40 bg-white border-b-2 border-stone-300 shadow-md transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between gap-4">
          {/* Isotipo del Elefante + Logotipo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
            onClick={() => handleNav('inicio')}
            role="button"
            tabIndex={0}
          >
            <div className="transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3">
              <ElephantLogo size={42} color="negro" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#1F1410] leading-none tracking-tight">
                Café Marfil
              </span>
            </div>
          </div>

          {/* Navegación de Escritorio & Tablet: Segmented Control Cuadrado */}
          <nav className="hidden md:flex items-center p-1 rounded-md gap-1" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  className={`relative px-4 py-2 rounded-md font-body text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-[#E12927] text-white shadow-md border-2 border-[#E12927]'
                    : 'text-[#1F1410] hover:text-[#E12927] hover:bg-white border-2 border-transparent hover:border-stone-200'
                    }`}
                  onClick={() => handleNav(item.id)}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Acciones del Header */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Botón CTA Primario en Rojo Marfil 100% Sólido */}
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider bg-[#E12927] hover:bg-[#C81E1C] active:scale-95 text-white border-2 border-[#E12927] shadow-md shadow-[#E12927]/30 hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => handleNav('reservar')}
              aria-label="Reservar mesa en Café Marfil"
            >
              <CalendarDays size={15} />
              <span className="hidden sm:inline">Reservar Mesa</span>
              <span className="sm:hidden">Reservar</span>
            </button>

            {/* Notificaciones */}
            <button
              className="relative w-10 h-10 rounded-md border-2 border-stone-300 bg-white flex items-center justify-center text-[#1F1410] hover:bg-[#FCEAE9] hover:border-[#E12927] active:scale-95 transition-all cursor-pointer shadow-sm"
              onClick={() => {
                sounds.playClick();
                openNotifications();
              }}
              aria-label="Notificaciones"
              title="Notificaciones"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-sm bg-[#E12927] text-white text-[10px] font-mono font-bold shadow-md border-2 border-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Toggle Tema */}
            <button
              className="w-10 h-10 rounded-md border-2 border-stone-300 bg-white flex items-center justify-center text-[#1F1410] hover:bg-[#FCEAE9] hover:border-[#E12927] active:scale-95 transition-all cursor-pointer shadow-sm"
              onClick={() => {
                sounds.playClick();
                toggleTheme();
              }}
              aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
              title={`Modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
            >
              {theme === 'dark' ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-[#1F1410]" />}
            </button>

            {/* Perfil */}
            <button
              className={`w-10 h-10 rounded-md border-2 flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-sm ${activeScreen === 'perfil' || activeScreen === 'mis_reservaciones'
                ? 'bg-[#1F1410] text-white border-[#1F1410]'
                : 'border-stone-300 bg-white text-[#1F1410] hover:bg-[#FCEAE9] hover:border-[#E12927]'
                }`}
              onClick={() => handleNav('perfil')}
              aria-label="Mi Perfil y Reservaciones"
              title="Mi Perfil"
            >
              <User size={18} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
