"use client"

import { useEffect, useState } from "react"
import { View, Text } from "react-native-web"
import { useData } from "@/hooks/useData"
import {
  type DataItem,
  isProfile,
  isServiceRequest,
  isProfessionalProfile,
  isReview,
  isPartnerCredit,
  isRequest,
} from "@/types"
import type { Database } from "@/lib/database.types"
import { CrossPlatformScrollView } from "@/components/CrossPlatformScrollView"

type TableName = keyof Database["public"]["Tables"]

interface DataDisplayProps {
  table: TableName
}

export default function DataDisplay({ table }: DataDisplayProps) {
  const { data, error, loading } = useData(table)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // Evita renderizar en el servidor
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error.message}</Text>
  if (!data || data.length === 0) return <Text>No data available</Text>

  return (
    <CrossPlatformScrollView>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{table}</Text>
      {data.map((item: DataItem) => (
        <View key={(item as DataItem).id} style={{ marginVertical: 10 }}>
          {isProfile(item) && <Text>Name: {item.full_name}</Text>}
          {isServiceRequest(item) && <Text>Service Type: {item.service_type}</Text>}
          {isProfessionalProfile(item) && <Text>Services: {item.services.join(", ")}</Text>}
          {isReview(item) && <Text>Rating: {item.rating}</Text>}
          {isPartnerCredit(item) && <Text>Credits: {item.credits}</Text>}
          {isRequest(item) && <Text>Request Details: {item.request_details}</Text>}
        </View>
      ))}
    </CrossPlatformScrollView>
  )
}

