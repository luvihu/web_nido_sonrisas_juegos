"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id='inicio' className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/colorido.jpg"
          alt="Niños jugando al pintar"
          fill
          className="object-cover"
          loading="lazy"
          priority={false}
          quality={90}
        />
        {/* Overlay gradiente para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B64A6]/70 to-[#5EC47B]/60 mix-blend-multiply" />
        {/* Overlay adicional para contraste */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
         <motion.div                                  //C
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            // className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
            className="px-6 mb-24 md:mb-18 "
          >
           
          </motion.div>

          {/* Título principal */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-20 leading-tight">
            <span className="block text-white drop-shadow-lg">Nido</span>
            <span className="block text-[#F9D74A] drop-shadow-lg">Sonrisas y Juegos</span>
          </h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg "
          >
            “Donde cada día es una nueva{" "}
            <span className="text-[#F9D74A] font-semibold">aventura</span> para{" "}
            <span className="text-[#5EC47B] font-semibold">aprender</span> y{" "}
            <span className="text-[#E94356] font-semibold">sonreír</span>.”
          </motion.p>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center items-center"
        >
          
          <button className="border-2 border-white text-white hover:bg-white/20 font-semibold md:px-6 md:py-4 px-4 py-3 rounded-2xl transition-all duration-300 backdrop-blur-sm transform hover:scale-105 text-sm md:text-lg">
            Contáctanos
          </button>
        </motion.div>

        {/* Elementos decorativos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Formas decorativas de fondo */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent" />
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-8 h-8 rounded-full bg-[#F9D74A] animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <div className="w-6 h-6 rounded-full bg-[#5EC47B] animate-pulse delay-75" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <div className="w-10 h-10 rounded-full bg-[#E94356] animate-pulse delay-150" />
      </div>
    </section>
  );
}