import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="py-4 px-6 bg-white border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          LaburandoApp
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#servicios" className="text-gray-600 hover:text-primary transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#como-funciona" className="text-gray-600 hover:text-primary transition-colors">
                Cómo Funciona
              </Link>
            </li>
            <li>
              <Link href="#profesionales" className="text-gray-600 hover:text-primary transition-colors">
                Profesionales
              </Link>
            </li>
          </ul>
        </nav>
        <div className="space-x-2">
          <Button variant="ghost">Iniciar Sesión</Button>
          <Button>Registrarse</Button>
        </div>
      </div>
    </header>
  )
}

