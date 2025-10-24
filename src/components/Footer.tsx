"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart } from "react-icons/fa";

export default function Footer() {
   const pathname = usePathname();
  
   // Función para enlaces que siempre deben ir a la página principal
  const handleHomeNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (pathname === '/') {
      // Si ya estamos en la página principal, hacer scroll
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          window.history.replaceState(null, '', window.location.pathname);
        }, 1000);
      }
    } else {
      // Si estamos en otra página, navegar a la principal con el hash
      window.location.href = `/#${targetId}`;
      
    }
  };

  return (
    <footer id='contacto' className="relative text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/dibujo.jpg" 
          alt="Fondo del footer"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
       
        <div className="absolute inset-0 bg-[#4B64A6]/90" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-18"
      >
       
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-[#F9D74A]"
            >
              Nido Sonrisas y Juegos
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base leading-relaxed sm:leading-loose text-gray-100 mb-6 lg:mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
            >
              Fomentamos el aprendizaje a través del juego, la alegría y la
              creatividad. Cada día es una nueva oportunidad para descubrir y
              crecer juntos en un ambiente seguro y lleno de amor.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a 
                href="#" 
                aria-label="Facebook" 
                className="p-3 bg-white/20 rounded-full hover:bg-[#F9D74A] hover:text-[#4B64A6] transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="p-3 bg-white/20 rounded-full hover:bg-[#F9D74A] hover:text-[#4B64A6] transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="mailto:contacto@nidosonrisas.pe" 
                aria-label="Correo" 
                className="p-3 bg-white/20 rounded-full hover:bg-[#F9D74A] hover:text-[#4B64A6] transition-all duration-300 transform hover:scale-110"
              >
                <FaEnvelope size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6 text-[#F9D74A] text-center lg:text-left">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-center lg:text-left">
              {/* Enlaces que deben llevar a la página principal */}
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/#servicios" 
                  onClick={(e) => handleHomeNavigation(e, "servicios")}
                  className="text-sm sm:text-base text-gray-100 hover:text-[#F9D74A] transition-colors duration-300 block py-1 cursor-pointer"
                >
                  Servicios
                </Link>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/#galeria" 
                  onClick={(e) => handleHomeNavigation(e, "galeria")}
                  className="text-sm sm:text-base text-gray-100 hover:text-[#F9D74A] transition-colors duration-300 block py-1 cursor-pointer"
                >
                  Galería
                </Link>
              </motion.li>
              
              {/* Enlace a página diferente */}
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/nosotros" 
                  className="text-sm sm:text-base text-gray-100 hover:text-[#F9D74A] transition-colors duration-300 block py-1"
                >
                  Nosotros
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6 text-[#F9D74A] text-center lg:text-left">
              Contáctanos
            </h3>
            
            <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <FaMapMarkerAlt className="text-[#5EC47B] shrink-0" size={18} />
                <span className="text-sm sm:text-base text-gray-100">
                  Ate Vitarte, Lima, Perú
                </span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <FaPhone className="text-[#5EC47B] shrink-0" size={16} />
                <span className="text-sm sm:text-base text-gray-100">
                  +51 987 654 321
                </span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <FaEnvelope className="text-[#5EC47B] shrink-0" size={16} />
                <span className="text-sm sm:text-base text-gray-100 break-all">
                  contacto@nidosonrisas.pe
                </span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20"
            >
              <h4 className="text-sm font-semibold text-[#F9D74A] mb-2 text-center lg:text-left">
                Horario de Atención
              </h4>
              <p className="text-xs sm:text-sm text-gray-100 text-center lg:text-left">
                Lunes a Viernes: 7:00 AM - 5:00 PM<br />
                Sábados: 8:00 AM - 1:00 PM
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 pt-4 lg:pt-6 border-t border-white/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-sm text-gray-100 order-2 sm:order-1">
              © {new Date().getFullYear()} - Sarvil 360° solutions. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-100 flex items-center justify-center gap-2 order-1 sm:order-2">
              Hecho con <FaHeart className="text-[#E94356] animate-pulse" size={14} /> para niños felices
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}