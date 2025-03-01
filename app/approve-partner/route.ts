import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { Database } from "@/lib/database.types"

export async function POST(request: Request) {
  const { partnerId } = await request.json()
  
  if (!partnerId) {
    return NextResponse.json({ error: "Missing partnerId" }, { status: 400 })
  }

  const supabase = createRouteHandlerClient<Database>({ cookies })

  const { data: session } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { error } = await supabase
    .from("profiles")
    .update({ status: "approved" })
    .eq("id", partnerId)

  if (error) {
    console.error("Error approving partner:", error)
    return NextResponse.json({ error: "Failed to approve partner" }, { status: 500 })
  }

  return NextResponse.json({ message: "Partner approved successfully" })
}
