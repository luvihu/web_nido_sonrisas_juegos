"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Nosotros() {
  return (
    <section id="nosotros" className="w-full bg-[#F8F9FA]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-46 sm:pt-50 lg:pt-56"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* Imagen - Orden cambia en responsive */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cuento.jpg"
                alt="Niños felices aprendiendo en el nido"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F9D74A] rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#4B64A6] rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Contenido textual */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d8d54] mb-6 lg:mb-8 text-center lg:text-left">
                Sobre <span className="text-[#4B64A6]">Nosotros</span>
              </h2>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose text-gray-700 text-justify lg:text-left"
                >
                  En <span className="font-semibold text-[#3d8d54]">Nido Sonrisas y Juegos</span>, 
                  creemos que el aprendizaje nace de la curiosidad, la alegría y el juego. 
                  Ofrecemos un ambiente seguro, afectivo y lleno de experiencias significativas 
                  donde cada niño puede explorar, crear y descubrir su potencial.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose text-gray-700 text-justify lg:text-left"
                >
                  Nuestro equipo docente está comprometido con el desarrollo integral de cada 
                  pequeño, promoviendo valores como la empatía, la cooperación y la confianza.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose text-gray-700 text-justify lg:text-left"
                >
                  A través de actividades lúdicas y pedagógicas, cultivamos el amor por el 
                  aprendizaje desde los primeros años, formando niños felices y seguros de sí mismos.
                </motion.p>
              </div>

              {/* Estadísticas o características destacadas */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 lg:mt-10"
              >
                <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-[#F8F9FA]">
                  <div className="text-xl sm:text-2xl font-bold text-[#4B64A6]">+5</div>
                  <div className="text-xs sm:text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-[#F8F9FA]">
                  <div className="text-xl sm:text-2xl font-bold text-[#5EC47B]">+100</div>
                  <div className="text-xs sm:text-sm text-gray-600">Niños felices</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-[#F8F9FA] col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-bold text-[#E94356]">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Comprometidos</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}