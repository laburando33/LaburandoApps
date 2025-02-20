import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServicesSection from "@/components/ServicesSection"
import SearchBar from "@/components/SearchBar"
import ServiceRequestForm from "@/components/ServiceRequestForm"
import { Button } from "@/components/ui/button"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 rounded-lg shadow-lg relative overflow-hidden">
          <Image
            src="/images/fondoLaburando.jpg"
            alt="Fondo Laburando"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <div className="bg-white bg-opacity-80 p-6 rounded-lg inline-block relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Encuentra profesionales de confianza</h1>
            <p className="text-xl mb-8 text-gray-700">
              Conectamos tus proyectos con los mejores expertos locales. Rápido, fácil y seguro.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white transition duration-300">
              Solicita tu presupuesto ahora
            </Button>
          </div>
        </section>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <SearchBar />
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Service Request Form */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Solicita un Servicio</h2>
          <ServiceRequestForm />
        </section>

        {/* How it works Section */}
        <section className="text-center mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Registra tu solicitud</h3>
              <p>Describe el servicio que necesitas y tu ubicación.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Recibe hasta 4 presupuestos</h3>
              <p>Profesionales verificados te enviarán sus propuestas.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Contrata al mejor profesional</h3>
              <p>Elige la oferta que mejor se adapte a tus necesidades.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="text-center mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Lo que dicen nuestros usuarios</h2>
          {/* Aquí puedes agregar un componente de carrusel de testimonios */}
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-yellow-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">¿Listo para comenzar?</h2>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 transition duration-300">
            Solicitar Servicio Ahora
          </Button>
        </section>
      </main>

      <Footer />
      <SpeedInsights />
    </div>
  )
}

