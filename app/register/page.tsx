import RegistrationForm from "@/components/RegistrationForm"

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Registrarse</h1>
      <div className="max-w-md mx-auto">
        <RegistrationForm />
      </div>
    </div>
  )
}

