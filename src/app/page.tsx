import Galeria from "@/components/Galeria"
import Hero from "@/components/Hero"
import PropuestaPedagogica from "@/components/PropuestaPedagógica"
import Servicio from "@/components/Servicio"
import Valores from "@/components/Valores"

export default function Home() {
  return (
    <main className="pt-20 sm:pt-24 md:pt-29">
      <Hero/>
      <Galeria/>
      <Valores/>
      <PropuestaPedagogica/>
      <Servicio/>
    </main>
  )
};
