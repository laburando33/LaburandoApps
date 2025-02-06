import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Zap, Paintbrush, Hammer, Truck, Scissors } from "lucide-react"

const services = [
  { title: "Plomería", description: "Reparaciones e instalaciones", icon: Wrench },
  { title: "Electricidad", description: "Soluciones eléctricas seguras", icon: Zap },
  { title: "Pintura", description: "Renovación de espacios", icon: Paintbrush },
  { title: "Carpintería", description: "Trabajos en madera de calidad", icon: Hammer },
  { title: "Mudanzas", description: "Transporte de tus pertenencias", icon: Truck },
  { title: "Jardinería", description: "Mantenimiento de áreas verdes", icon: Scissors },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <service.icon className="w-6 h-6 mr-2 text-primary" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

