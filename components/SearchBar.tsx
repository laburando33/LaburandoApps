"use client"

import type React from "react"
import { useState } from "react"
import { StyleSheet, View, Platform, type StyleProp, type ViewStyle } from "react-native"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  style?: StyleProp<ViewStyle>
}

const SearchBar: React.FC<SearchBarProps> = ({ style }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
  }

  return (
    <View style={[styles.container, style as ViewStyle]}>
      <Input
        type="text"
        placeholder="Busca un servicio..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <Button onClick={handleSearch} style={styles.button}>
        Buscar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    ...(Platform.select({
      web: {
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
    }) as ViewStyle),
  } as ViewStyle,
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#1e293b",
  } as ViewStyle,
  button: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  } as ViewStyle,
})

export default SearchBar

