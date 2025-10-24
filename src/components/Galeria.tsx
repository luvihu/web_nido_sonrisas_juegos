"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Galeria() {
  const actividades = [
    {
      id: 1,
      imagen: "/images/pintar.jpg",
      titulo: "Aprendiendo con colores",
      descripcion:
        "Los niños exploran el arte y la creatividad mediante el uso de témperas y materiales reciclados.",
    },
    {
      id: 2,
      imagen: "/images/musica.jpg",
      titulo: "Música y movimiento",
      descripcion:
        "Actividades rítmicas que estimulan la coordinación, el oído musical y la expresión corporal.",
    },
    {
      id: 3,
      imagen: "/images/patio.jpg",
      titulo: "Exploración al aire libre",
      descripcion:
        "Momentos de juego y descubrimiento en el patio, fomentando la curiosidad y el amor por la naturaleza.",
    },
    {
      id: 4,
      imagen: "/images/teatro.jpg",
      titulo: "Cuentos y fantasía",
      descripcion:
        "Espacios mágicos donde los niños desarrollan la imaginación y el gusto por la lectura.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id='galeria' className="bg-[#F8F9FA] py-16 md:py-24 px-6 md:px-20 md:pt-30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d8d54] text-center mb-10">
          Galería de Actividades
        </h2>

        <Slider {...settings}>
          {actividades.map((act) => (
            <div key={act.id} className="px-3 focus:outline-none">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-2">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-80">
                  <Image
                    src={act.imagen}
                    alt={act.titulo}
                    fill
                    className="object-cover"
                    loading="lazy"
                    priority={false}
                    quality={90}
                    
                  />
                </div>
                <div className="p-4 md:p-6 text-center">
                  <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl font-semibold text-[#4B64A6] mb-2">
                    {act.titulo}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                    {act.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

