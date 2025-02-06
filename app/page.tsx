import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Paintbrush } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
     <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Image
            src="/images/SECUNDARIO.jpg" // Path to your logo image
            alt="LaburandoApp Logo"
            width={200}
            height={200}
          />
          <nav className="flex items-center space-x-4">
            <a href="#features" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900">Precios</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contacto</a>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-700">
             Soy Laburador
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
      <section
  className="text-center mb-12"
  style={{
    backgroundImage: 'url("/images/fondoLaburando.jpg")', // Path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    padding: '4rem 0'
  }}
>
  <h2 className="text-4xl font-bold mb-4">Encuentra profesionales de confianza</h2>
  <p className="text-xl mb-8">
    Conectamos tus proyectos con los mejores expertos locales. Rápido, fácil y seguro.
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
  <Input type="text" placeholder="¿Qué servicio necesitas?" className="max-w-xs border border-black" />
    <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
      Buscar Ahora
    </Button>
  </div>
</section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Servicios que todos necesitamos..</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="w-6 h-6 mr-2 text-primary" />
                  Plomería
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/plomeria.webp" // Path to your plumbing image
                  alt="Plomería"
                  width={400}
                  height={400}
                  className="mb-4"
                />
                Soluciones rápidas para todas tus necesidades de plomería.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-primary" />
                  Electricidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/electricidad.webp" // Path to your electricity image
                  alt="Electricidad"
                  width={400}
                  height={400}
                  className="mb-4"
                />
                Instalaciones y reparaciones eléctricas seguras y confiables.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Paintbrush className="w-6 h-6 mr-2 text-primary" />
                  Pintura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/pintura.webp" // Path to your painting image
                  alt="Pintura"
                  width={400}
                  height={400}
                  className="mb-4"
                />
                Renueva tus espacios con nuestros expertos en pintura.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-12">
          
          <h3 className="text-2xl font-semibold mb-4">¿Por qué elegir LaburandoApp?</h3>
          <ul className="text-left max-w-md mx-auto">
            <li className="mb-2">✓ Profesionales verificados y de confianza</li>
            <li className="mb-2">✓ Presupuestos gratuitos y sin compromiso</li>
            <li className="mb-2">✓ Proceso rápido y sencillo</li>
            <li>✓ Garantía de satisfacción</li>
          </ul>
        </section>

        <section className="text-center">          
          <h3 className="text-2xl font-semibold mb-4">¿Listo para comenzar?</h3>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-700">            Solicitar Servicio Ahora
          </Button>
        </section>
      </main>

      <footer
  className="bg-gray-800 text-white py-4"
  style={{
    backgroundImage: 'url("/images/fondoLaburando.jpg")', // Path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="container mx-auto px-4 text-center">
    <p>&copy; 2023 LaburandoApp. Todos los derechos reservados.</p>
  </div>
</footer>
    </div>
  );
}