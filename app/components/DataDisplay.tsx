"use client"

import { useData } from "../../hooks/useData"
import {
  type DataItem,
  isProfile,
  isServiceRequest,
  isProfessionalProfile,
  isReview,
  isPartnerCredit,
  isRequest,
} from "@/app/types"
import type { Database } from "@/lib/database.types"

type TableName = keyof Database["public"]["Tables"]

interface DataDisplayProps {
  table: TableName
}

export default function DataDisplay({ table }: DataDisplayProps) {
  const { data, error, loading } = useData(table)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data || data.length === 0) return <div>No data available</div>

  return (
    <div>
      <h2>{table}</h2>
      {data.map((item: DataItem) => (
        <div key={(item as any).id}>
          {isProfile(item) && <p>Name: {item.full_name}</p>}
          {isServiceRequest(item) && <p>Service Type: {item.service_type}</p>}
          {isProfessionalProfile(item) && <p>Services: {item.services.join(", ")}</p>}
          {isReview(item) && <p>Rating: {item.rating}</p>}
          {isPartnerCredit(item) && <p>Credits: {item.credits}</p>}
          {isRequest(item) && <p>Request Details: {item.request_details}</p>}
        </div>
      ))}
    </div>
  )
}

