import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María G.",
    role: "Cliente",
    content: "Encontré un excelente electricista en minutos. Servicio rápido y profesional.",
  },
  {
    name: "Carlos R.",
    role: "Plomero",
    content: "LaburandoApp me ha ayudado a expandir mi negocio y conectar con nuevos clientes.",
  },
  {
    name: "Laura M.",
    role: "Cliente",
    content: "La plataforma es fácil de usar y los profesionales son de confianza. ¡Muy recomendable!",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{testimonial.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardTitle>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="italic">&quot;{testimonial.content}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}