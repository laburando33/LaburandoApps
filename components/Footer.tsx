export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-4"
      style={{
        backgroundImage: 'url("/images/fondoLaburando.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 LaburandoApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}