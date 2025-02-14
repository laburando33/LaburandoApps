// lib/realtimeSubscriptions.ts
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export const subscribeToQuoteRequests = (callback: (payload: any) => void) => {
  const subscription = supabase
    .channel('quote_requests')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'quote_requests' }, (payload) => {
      callback(payload.new)
    })
    .subscribe()

  return () => {
    supabase.removeChannel(subscription)
  }
}