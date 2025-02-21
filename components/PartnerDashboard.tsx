"use client"

import { useEffect, useCallback } from "react"

function PartnerDashboard() {
  const fetchRequests = useCallback(async () => {
    // Your logic to fetch requests
    console.log("Fetching requests...")
  }, [])

  const fetchCredits = useCallback(async () => {
    // Your logic to fetch credits
    console.log("Fetching credits...")
  }, [])

  useEffect(() => {
    fetchRequests()
    fetchCredits()
  }, [fetchRequests, fetchCredits])

  return (
    <div>
      {/* Your dashboard content here */}
      <h1>Partner Dashboard</h1>
    </div>
  )
}

export default PartnerDashboard

