import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Image
          src="/images/SECUNDARIO.jpg"
          alt="LaburandoApp Logo"
          width={200}
          height={200}
        />
        <nav className="flex items-center space-x-4">
          <a href="#features" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900">Precios</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contacto</a>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-700">
            Soy Laburador
          </Button>
        </nav>
      </div>
    </header>
  );
}