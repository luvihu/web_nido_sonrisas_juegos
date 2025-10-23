import { Smile, Heart, Users, Star, Shield, Scale } from "lucide-react";

const valores = [
  { icon: Smile, titulo: "Alegría" },
  { icon: Heart, titulo: "Amor" },
  { icon: Users, titulo: "Trabajo en equipo" },
  { icon: Star, titulo: "Excelencia" },
  { icon: Shield, titulo: "Integridad" },
  { icon: Scale, titulo: "Ética" },
];

export default function Valores() {
  return (
    <section id='valores' className="py-6 md:py-10 bg-[#F8F9FA] text-center mt-5">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3d8d54] mb-12">Nuestros Valores</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
        {valores.map(({ icon: Icon, titulo }) => (
          <div key={titulo} className="flex flex-col items-center">
            <Icon className="text-[#E94356] mb-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10" />
            <p className="text-sm md:text-lg font-normal">{titulo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
