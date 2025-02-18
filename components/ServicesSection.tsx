import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, PaintbrushIcon as PaintBrush, Zap, Truck } from "lucide-react"

const services = [
  { title: "Plomería", description: "Soluciones para todas tus necesidades de plomería", icon: Wrench },
  { title: "Pintura", description: "Renueva tus espacios con nuestros expertos en pintura", icon: PaintBrush },
  { title: "Electricidad", description: "Instalaciones y reparaciones eléctricas seguras", icon: Zap },
  { title: "Mudanzas", description: "Servicios de mudanza confiables y eficientes", icon: Truck },
]

export default function ServicesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {<service.icon className="w-6 h-6 mr-2" />}
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

