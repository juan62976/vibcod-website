import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { usePathname } from "next/navigation"

const linkClassBase = "text-lg font-medium transition px-4 py-1 rounded-xl"

const NavBarTriangular: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Función para determinar si un enlace está activo
  const isActive = (path: string) => pathname === path;
  
  // Colores para cada sección
  const colors = {
    "/": "#3bbced",
    "/pricing": "#30a2d9",
    "/resources": "#2d86c4",
    "/community": "#2c4e95",
    "/about": "#30368d"
  };
  
  return (
    <nav className="relative w-full flex justify-center items-center py-6 select-none">
      {/* Menú hamburguesa para móvil */}
      <button
        className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Secciones Izquierda (desktop) */}
      <div className="hidden md:flex items-center gap-x-8 md:gap-x-12 absolute left-1/2 transform -translate-x-[calc(100%+120px)] md:-translate-x-[calc(100%+200px)] z-10">
        <Link href="/" className={`${linkClassBase} ${isActive('/') ? 'font-bold text-white scale-105' : 'text-white'}`}>Home</Link>
        <Link href="/pricing" className={`${linkClassBase} ${isActive('/pricing') ? 'font-bold text-white scale-105' : 'text-white'}`}>Pricing</Link>
        <Link href="/resources" className={`${linkClassBase} ${isActive('/resources') ? 'font-bold text-white scale-105' : 'text-white'}`}>Resources</Link>
      </div>

      {/* Logo y Título Central */}
      <div className="flex flex-col items-center justify-center z-20 px-8">
        <Image src="/images/vibcod-logo.png" alt="VibCod Logo" width={48} height={48} className="mb-1" />
        <span className="text-2xl md:text-3xl font-light tracking-[0.25em] uppercase text-white">VibCod</span>
      </div>

      {/* Secciones Derecha (desktop) */}
      <div className="hidden md:flex items-center gap-x-8 md:gap-x-12 absolute right-1/2 transform translate-x-[calc(100%+120px)] md:translate-x-[calc(100%+200px)] z-10">
        <Link href="/community" className={`${linkClassBase} ${isActive('/community') ? 'font-bold text-white scale-105' : 'text-white'}`}>Community</Link>
        <Link href="/about" className={`${linkClassBase} ${isActive('/about') ? 'font-bold text-white scale-105' : 'text-white'}`}>About</Link>
        <Link href="/waitlist" className="relative ml-2 px-6 py-2 rounded-xl font-bold text-white text-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          style={{
            boxShadow: `
              0 0 10px rgba(59, 188, 237, 0.3),
              0 0 20px rgba(59, 188, 237, 0.2),
              inset 0 0 20px rgba(59, 188, 237, 0.1)
            `,
            border: '1px solid rgba(59, 188, 237, 0.5)'
          }}
        >
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3bbced] via-[#30a2d9] via-[#2d86c4] via-[#2c4e95] to-[#30368d]"></div>
          
          {/* Efecto metalizado estático */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
            {/* Reflejo brillante animado */}
            <div className="absolute inset-0 animate-shine">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] skew-x-12 translate-x-[-100%]"></div>
            </div>
          </div>
          
          {/* Texto */}
          <span className="relative z-10">Get early access</span>

          <style jsx>{`
            @keyframes shine {
              0% { transform: translateX(-100%) skewX(12deg); }
              100% { transform: translateX(200%) skewX(12deg); }
            }
            .animate-shine {
              animation: shine 3s infinite;
            }
          `}</style>
        </Link>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-start pt-24 md:hidden animate-fade-in">
          <button
            className="absolute top-6 right-6 p-2 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            ×
          </button>
          <Link href="/" className="mb-4 text-2xl font-bold text-[#3bbced]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/pricing" className="mb-4 text-2xl font-bold text-[#30a2d9]" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/resources" className="mb-4 text-2xl font-bold text-[#2d86c4]" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/community" className="mb-4 text-2xl font-bold text-[#2c4e95]" onClick={() => setMenuOpen(false)}>Community</Link>
          <Link href="/about" className="mb-4 text-2xl font-bold text-[#30368d]" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/waitlist" className="mt-6 px-8 py-3 rounded-xl font-bold text-white text-xl relative overflow-hidden"
            style={{
              boxShadow: `
                0 0 10px rgba(59, 188, 237, 0.3),
                0 0 20px rgba(59, 188, 237, 0.2),
                inset 0 0 20px rgba(59, 188, 237, 0.1)
              `,
              border: '1px solid rgba(59, 188, 237, 0.5)'
            }}
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3bbced] via-[#30a2d9] via-[#2d86c4] via-[#2c4e95] to-[#30368d]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
            <span className="relative z-10">Get early access</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBarTriangular 