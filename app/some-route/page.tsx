import { supabase } from "@/lib/supabase"

export default async function SomePage() {
  // Use supabase directly instead of getSupabase()
  // We're not using `data` here, but it's kept for future use or debugging
  const { error } = await supabase.from("your_table").select("*")

  if (error) {
    console.error("Error fetching data:", error)
    return <div>Error loading data</div>
  }

  return (
    <div>
      <h1>Some Page</h1>
      {/* Render your data here */}
    </div>
  )
}

