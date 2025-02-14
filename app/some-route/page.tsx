// app/some-route/page.tsx
import { getSupabase } from '@/lib/supabase'

export default async function SomePage() {
  const supabase = getSupabase()
  const { data, error } = await supabase.from('your_table').select('*')
  
  if (error) {
    // Handle error, maybe return an error component
    return <div>Error loading data</div>
  }

  return (
    <div>
      {/* Render your data here */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}