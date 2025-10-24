import Galeria from "@/components/Galeria"
import Hero from "@/components/Hero"
import PropuestaPedagogica from "@/components/PropuestaPedagógica"
import Servicio from "@/components/Servicio"
import Valores from "@/components/Valores"

export default function Home() {
  return (
    <main className="pt-2 sm:pt-6 md:pt-10 lg:pt-12">
      <Hero/>
      <Galeria/>
      <Valores/>
      <PropuestaPedagogica/>
      <Servicio/>
    </main>
  )
};
