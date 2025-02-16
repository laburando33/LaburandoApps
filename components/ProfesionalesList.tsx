// components/ProfesionalesList.tsx
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Database } from "@/lib/database.types";
import { Loader2, MapPin, Star } from 'lucide-react';

// Define types based on your database schema
type Profile = Database['public']['Tables']['profiles']['Row'];
type ProfessionalProfile = Database['public']['Tables']['professional_profiles']['Row'];

type Professional = ProfessionalProfile & {
  profile: Profile;
};

export default function ProfesionalesList() {
  const [profesionales, setProfesionales] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('professional_profiles')
          .select(`
            *,
            profile:profiles(*)
          `)
          .eq('verified', true);

        if (error) throw error;
        setProfesionales(data || []);
      } catch (error) {
        console.error("Error fetching profesionales:", error);
        setError(error instanceof Error ? error.message : "Error al cargar profesionales");
      } finally {
        setLoading(false);
      }
    };

    fetchProfesionales();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
        {error}
      </div>
    );
  }

  if (profesionales.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay profesionales disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profesionales.map((profesional) => (
        <ProfesionalCard key={profesional.id} profesional={profesional} />
      ))}
    </div>
  );
}

function ProfesionalCard({ profesional }: { profesional: Professional }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {profesional.profile.full_name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {profesional.services.join(", ")}
            </p>
          </div>
          {profesional.verified && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Verificado
            </span>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            {profesional.profile.location || "Ubicación no especificada"}
          </div>

          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(profesional.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              ({profesional.total_reviews} reseñas)
            </span>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}