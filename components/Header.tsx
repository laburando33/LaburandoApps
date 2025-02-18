"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigate = (path: string) => {
    if (typeof window !== "undefined") {
      router.push(path)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="LaburandoApps Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold text-primary">LaburandoApps</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <button onClick={() => navigate("/")} className="text-gray-600 hover:text-primary">
                    Inicio
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/services")} className="text-gray-600 hover:text-primary">
                    Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/professionals")} className="text-gray-600 hover:text-primary">
                    Profesionales
                  </button>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Iniciar sesión
              </Button>
              <Button onClick={() => navigate("/register")}>Registrarse</Button>
            </div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => navigate("/")} className="text-gray-600 hover:text-primary">
                Inicio
              </button>
              <button onClick={() => navigate("/services")} className="text-gray-600 hover:text-primary">
                Servicios
              </button>
              <button onClick={() => navigate("/professionals")} className="text-gray-600 hover:text-primary">
                Profesionales
              </button>
            </nav>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full" onClick={() => navigate("/login")}>
                Iniciar sesión
              </Button>
              <Button className="w-full" onClick={() => navigate("/register")}>
                Registrarse
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

