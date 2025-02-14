import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Paintbrush } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Plomería",
    icon: <Wrench className="w-6 h-6 mr-2 text-primary" />,
    image: "/images/plomeria.webp",
    description: "Soluciones rápidas para todas tus necesidades de plomería.",
  },
  {
    title: "electricista",
    icon: <Wrench className="w-6 h-6 mr-2 text-primary" />,
    image: "/images/electricidad.webp",
    description: "Instalaciones y reparaciones eléctricas seguras y confiables.",
  },
  {
    title: "electricista",
    icon: <Wrench className="w-6 h-6 mr-2 text-primary" />,
    image: "/images/electricidad.webp",
    description: "Instalaciones y reparaciones eléctricas seguras y confiables.",
  },
  
  // Agrega más servicios aquí...
];

export default function ServicesSection() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-semibold text-center mb-6">Servicios que todos necesitamos..</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {service.icon}
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={400}
                className="mb-4"
              />
              {service.description}
              
            </CardContent>
            
          </Card>
        ))}
      </div>
    </section>
  );
}