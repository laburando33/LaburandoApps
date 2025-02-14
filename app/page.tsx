import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section
          className="text-center mb-12 rounded-lg shadow-lg"
          style={{
            backgroundImage: 'url("/images/fondoLaburando.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '4rem 0',
          }}
        >
          <div className="bg-white bg-opacity-80 p-6 rounded-lg inline-block">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Encuentra profesionales de confianza</h1>
            <p className="text-xl mb-8 text-gray-700">
              Conectamos tus proyectos con los mejores expertos locales. Rápido, fácil y seguro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Input 
                type="text" 
                placeholder="¿Qué servicio necesitas?" 
                className="max-w-xs border border-gray-300 focus:border-primary" 
              />
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white transition duration-300">
                Buscar Ahora
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />
        
        {/* Benefits Section */}
        <section className="text-center mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">¿Por qué elegir LaburandoApp?</h2>
          <ul className="text-left max-w-md mx-auto">
            <li className="mb-4 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Profesionales verificados y de confianza</span>
            </li>
            <li className="mb-4 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Presupuestos gratuitos y sin compromiso</span>
            </li>
            <li className="mb-4 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Proceso rápido y sencillo</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Garantía de satisfacción</span>
            </li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-yellow-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">¿Listo para comenzar?</h2>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 transition duration-300"
          >
            Solicitar Servicio Ahora
          </Button>
        </section>
      </main>

      <Footer />
      <SpeedInsights />
    </div>
  );
}