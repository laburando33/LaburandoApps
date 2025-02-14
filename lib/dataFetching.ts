// app/utils/dataFetching.ts or lib/dataFetching.ts
import { getSupabase } from '@/lib/supabase'

export async function fetchData() {
  try {
    const supabase = getSupabase()
    const { data, error } = await supabase.from('your_table').select('*')
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // Re-throw the error to be handled by the caller
  }
}