// filepath: /C:/Users/PC/Desktop/LaburandoApps/app/api/approve-partner/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function POST(request: Request) {
  const { partnerId } = await request.json()
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const { error } = await supabase
    .from('profiles')
    .update({ status: 'approved' })
    .eq('id', partnerId)

  if (error) {
    console.error('Error approving partner:', error)
    return NextResponse.json({ error: 'Failed to approve partner' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Partner approved successfully' })
}