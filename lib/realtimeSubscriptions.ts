import { createClient } from "@supabase/supabase-js"
import type { RealtimeChannel, RealtimePostgresChangesPayload } from "@supabase/supabase-js"

const supabase = createClient(process.env.SUPABASE_URL ?? "", process.env.SUPABASE_ANON_KEY ?? "")

export const subscribeToQuoteRequests = async (
  callback: (payload: RealtimePostgresChangesPayload<Record<string, unknown>>) => void,
) => {
  const channel: RealtimeChannel = supabase
    .channel("quote_requests")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "quote_requests" },
      (payload: RealtimePostgresChangesPayload<Record<string, unknown>>) => {
        callback(payload)
      },
    )
    .subscribe()

  return () => {
    channel.unsubscribe()
  }
}

export const realtimeSubscriptions = async () => {
  const unsubscribeQuoteRequests = await subscribeToQuoteRequests(
    (payload: RealtimePostgresChangesPayload<Record<string, unknown>>) => {
      console.log("New quote request received:", payload)
      // Handle the new quote request
    },
  )

  //Clean up subscriptions on exit
  process.on("SIGINT", unsubscribeQuoteRequests)
  process.on("SIGTERM", unsubscribeQuoteRequests)
}

