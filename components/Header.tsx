"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Navigation from "./Navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigate = (path: string) => {
    router.push(path)
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
                  <Button variant="link" onClick={() => navigate("/")} className="text-gray-600 hover:text-primary">
                    Inicio
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    onClick={() => navigate("/services")}
                    className="text-gray-600 hover:text-primary"
                  >
                    Servicios
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    onClick={() => navigate("/professionals")}
                    className="text-gray-600 hover:text-primary"
                  >
                    Profesionales
                  </Button>
                </li>
              </ul>
            </nav>
            <Navigation />
          </div>
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              <Button variant="link" onClick={() => navigate("/")} className="text-gray-600 hover:text-primary">
                Inicio
              </Button>
              <Button variant="link" onClick={() => navigate("/services")} className="text-gray-600 hover:text-primary">
                Servicios
              </Button>
              <Button
                variant="link"
                onClick={() => navigate("/professionals")}
                className="text-gray-600 hover:text-primary"
              >
                Profesionales
              </Button>
            </nav>
            <div className="mt-4">
              <Navigation />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

