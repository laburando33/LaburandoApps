"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  description: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams?.get("q") ?? ""
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      // Simular una búsqueda con un retraso
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Aquí normalmente harías una llamada a tu API o Supabase
      const mockResults: SearchResult[] = [
        { id: "1", title: "Plomero en Buenos Aires", description: "Servicios de plomería 24/7" },
        { id: "2", title: "Electricista certificado", description: "Instalaciones y reparaciones eléctricas" },
        { id: "3", title: "Pintor profesional", description: "Pintura de interiores y exteriores" },
      ]
      setResults(mockResults)
      setLoading(false)
    }

    if (query) {
      fetchResults()
    } else {
      setLoading(false)
    }
  }, [query])

  if (!query) {
    return <div className="text-center mt-8">Por favor, ingresa un término de búsqueda.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resultados de búsqueda para: {query}</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <Card key={result.id}>
              <CardHeader>
                <CardTitle>{result.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center mt-8">No se encontraron resultados para tu búsqueda.</div>
      )}
    </div>
  )
}

