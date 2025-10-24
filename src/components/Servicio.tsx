"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const servicios = [
  {
    titulo: "Nido",
    descripcion: `
      Brinda el servicio a niños de 2 a 5 años a través de una educación
      personalizada, con una metodología propia donde son protagonistas de su 
      aprendizaje,explorando, jugando y compartiendo experiencias que fortalecen
      su desarrollo emocional, cognitivo y social.
    `,
    imagen: "/images/salon.jpg",
    color: "#4B64A6",
  },
  {
    titulo: "Estimulación temprana",
    descripcion: `
      Brinda servicio a niños de 5 a 24 meses, a través de actividades sensoriales y 
      psicomotrices, favorecemos el desarrollo de habilidades cognitivas, motoras y emocionales
      desde los primeros años de vida.
    `,
    imagen: "/images/estimulacion.jpg",
    color: "#5EC47B",
  },
  {
    titulo: "Departamento Psicopedagógico",
    descripcion: `
      Acompañamos el proceso de aprendizaje de cada niño de manera
      individual, promoviendo su bienestar emocional y académico,
      en coordinación con las familias y docentes.
    `,
    imagen: "/images/psico.jpg",
    color: "#E94356",
  },
  {
    titulo: "Biblioteca",
    descripcion: `
      Espacio mágico donde los niños descubren el placer por la lectura
      a través de cuentos, historias y actividades literarias que
      estimulan la imaginación.
    `,
    imagen: "/images/biblioteca.jpg",
    color: "#F9D74A",
  },
];

export default function NuestrosServicios() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="servicios" className="py-14 pb-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#3d8d54] mb-12">
          Nuestros Servicios
        </h2>

        <div className="space-y-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md overflow-hidden bg-white"
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:opacity-95 transition-opacity duration-200"
                style={{ backgroundColor: servicio.color }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {servicio.titulo}
                </h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-white text-2xl md:text-3xl font-light min-w-6 text-center"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      height: 0,
                      y: -10
                    }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      y: 0
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      y: -5
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="p-6 md:px-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10 bg-white"
                    >
                      <div className="flex-1 text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base text-justify order-2 sm:order-1">
                        {servicio.descripcion}
                      </div>
                      <div className="w-full sm:w-72 flex justify-center order-1 sm:order-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <Image
                            src={servicio.imagen}
                            alt={servicio.titulo}
                            width={350}
                            height={350}
                            loading="lazy"
                            priority={false}
                            className="rounded-xl shadow-lg object-cover w-full h-52 sm:h-56 md:h-64"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}