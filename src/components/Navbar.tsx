
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Cambia el estado cuando el scroll sea mayor a 50px
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-[#4B64A6] text-white shadow-lg z-50 transition-all duration-300 ${
      isScrolled ? 'py-1' : 'py-2'
    }`}>
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo con transición suave */}
        <Link href="/" className="flex items-center transition-all duration-300">
          <Image
            src="/images/logoNido.png"
            alt="Logo Nido Sonrisas y Juegos"
            width={isScrolled ? 110 : 176}
            height={isScrolled ? 60 : 100}
            priority
            className={`transition-all duration-300 hover:scale-105 ${
              isScrolled ? 'w-32 sm:w-36 md:w-40 lg:w-40' : 'w-40 sm:w-44 md:w-52 lg:w-56'
            } h-auto`}
          />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white hover:text-[#F9D74A] transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={isScrolled ? 24 : 28} />}
        </button>

        {/* Menú de escritorio */}
        <ul className={`hidden md:flex space-x-6 font-medium transition-all duration-300 ${
          isScrolled ? 'text-sm md:text-base lg:text-lg' : 'text-base md:text-lg lg:text-xl'
        }`}>
          <li>
            <Link href="/" className="hover:text-[#F9D74A] transition py-2 block">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-[#F9D74A] transition py-2 block">
              Nosotros
            </Link>
          </li>
          <li>
            <a 
              href="#servicios" 
              onClick={(e) => handleScroll(e, "servicios")} 
              className="hover:text-[#F9D74A] transition py-2 block"
            >
              Servicios
            </a>
          </li>
          <li>
            <a 
              href="#galeria" 
              onClick={(e) => handleScroll(e, "galeria")} 
              className="hover:text-[#F9D74A] transition py-2 block"
            >
              Galería
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              onClick={(e) => handleScroll(e, "contacto")} 
              className="hover:text-[#F9D74A] transition py-2 block"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#4B64A6]/95 backdrop-blur-md border-t border-[#F9D74A]/30 shadow-inner">
          <ul className={`flex items-center justify-center gap-6 px-6 flex-wrap text-base font-medium ${
            isScrolled ? 'py-4' : 'py-6'
          }`}>
            <li>
              <a 
                href="#inicio" 
                onClick={(e) => handleScroll(e, "inicio")} 
                className="hover:text-[#F9D74A] transition block py-1"
              >
                Inicio
              </a>
            </li>
            <li>
              <Link 
                href="/nosotros" 
                className="hover:text-[#F9D74A] transition block py-1" 
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <a 
                href="#servicios" 
                onClick={(e) => handleScroll(e, "servicios")} 
                className="hover:text-[#F9D74A] transition block py-1"
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#valores" 
                onClick={(e) => handleScroll(e, "valores")} 
                className="hover:text-[#F9D74A] transition block py-1"
              >
                Valores
              </a>
            </li>
            <li>
              <a 
                href="#galeria" 
                onClick={(e) => handleScroll(e, "galeria")} 
                className="hover:text-[#F9D74A] transition block py-1"
              >
                Galería
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                onClick={(e) => handleScroll(e, "contacto")} 
                className="hover:text-[#F9D74A] transition block py-1"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}