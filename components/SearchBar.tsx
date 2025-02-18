"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Buscar servicio...", onSearch }) => {
  const [query, setQuery] = React.useState("")

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query)
    }
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder} />
      <Button type="submit" onClick={handleSearch}>
        <Search className="h-4 w-4 mr-2" />
        Buscar
      </Button>
    </div>
  )
}

export default SearchBar

