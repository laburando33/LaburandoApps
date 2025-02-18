import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LaburandoApp</h3>
            <p>Conectando profesionales con clientes desde 2023.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-primary">
                  Profesionales
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p>Email: info@laburandoapp.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 LaburandoApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

