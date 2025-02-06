import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Encuentra profesionales de confianza</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Conectamos tus proyectos con los mejores expertos locales. Rápido, fácil y seguro.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="¿Qué servicio necesitas?"
              className="pl-10 pr-4 py-2 rounded-lg w-full md:w-80 text-black"
            />
          </div>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Buscar Profesionales
          </Button>
        </div>
      </div>
    </section>
  )
}

