import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const ServiceRequestForm = dynamic(() => import("@/components/ServiceRequestForm"), { ssr: false })

const services = [
  { slug: "plomeria", title: "Plomería", description: "Soluciones para todas tus necesidades de plomería" },
  { slug: "pintura", title: "Pintura", description: "Renueva tus espacios con nuestros expertos en pintura" },
  { slug: "electricidad", title: "Electricidad", description: "Instalaciones y reparaciones eléctricas seguras" },
  { slug: "mudanzas", title: "Mudanzas", description: "Servicios de mudanza confiables y eficientes" },
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Descripción del Servicio</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{service.description}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Solicitar este Servicio</CardTitle>
        </CardHeader>
        <CardContent>
          <ServiceRequestForm initialServiceType={service.title} />
        </CardContent>
      </Card>
    </div>
  )
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

