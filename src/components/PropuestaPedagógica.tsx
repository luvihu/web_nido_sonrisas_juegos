"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PropuestaPedagogica() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white"
    >
      {/* Texto descriptivo */}
      <div className="md:w-1/2 md:pr-8 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d8d54] mb-6 text-center md:text-left leading-relaxed">
          Nuestra Propuesta Pedagógica
        </h2>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 mb-4 text-justify">
          En <span className="font-semibold text-[#3d8d54]">Nido Sonrisas y Juegos</span>, 
          nuestra propuesta se basa en un enfoque activo, lúdico y participativo, donde los niños 
          aprenden haciendo, explorando y descubriendo el mundo que los rodea.
        </p>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 mb-4 text-justify">
          Promovemos el desarrollo integral a través de experiencias que fortalecen la curiosidad, 
          la creatividad y la autonomía. Cada actividad está diseñada para potenciar las habilidades 
          cognitivas, emocionales y sociales de nuestros pequeños.
        </p>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 text-justify">
          Acompañamos cada etapa del crecimiento con respeto por los ritmos individuales, 
          priorizando siempre el bienestar, la felicidad y la confianza en sí mismos.
        </p>
      </div>

      {/* Imagen ilustrativa */}
      <div className="relative w-full md:w-1/2 h-60 sm:h-64 md:h-[500px]">
        <Image
          src="/images/taller.jpg"
          alt="Niños aprendiendo mediante el juego"
          fill
          loading="lazy"
          className="object-cover rounded-2xl shadow-lg "
          priority={false}
           />
        
      </div>
    </motion.section>
  );
}
