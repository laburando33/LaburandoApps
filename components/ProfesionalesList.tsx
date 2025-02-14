import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfesionalesList() {
  const [profesionales, setProfesionales] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const { data, error } = await supabase.from("profesionales").select("*");
        if (error) throw error;
        setProfesionales(data);
      } catch (error) {
        console.error("Error fetching profesionales:", error);
      }
    };

    fetchProfesionales();
  }, []);

  return (
    <div>
      {profesionales.map((profesional) => (
        <div key={profesional.id}>
          <h3>{profesional.categoria}</h3>
          <p>{profesional.ubicacion}</p>
        </div>
      ))}
    </div>
  );
}