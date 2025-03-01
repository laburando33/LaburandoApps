import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Users, UserCheck, Star } from "lucide-react"

const steps = [
  {
    title: "Describe tu proyecto",
    description: "Detalla tus necesidades y recibe respuestas rápidas.",
    icon: ClipboardList,
  },
  { title: "Compara profesionales", description: "Revisa perfiles, calificaciones y presupuestos.", icon: Users },
  { title: "Selecciona al mejor", description: "Elige al experto que más se ajuste a tu proyecto.", icon: UserCheck },
  { title: "Califica el servicio", description: "Comparte tu experiencia y ayuda a otros usuarios.", icon: Star },
]

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

