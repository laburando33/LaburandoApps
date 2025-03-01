import type React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Platform } from "react-native"

// Definimos una interfaz para las propiedades del MenuItem
interface MenuItemProps {
  title: string
  onPress: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  )
}

export const Menu: React.FC = () => {
  const handleNavigation = (path: string) => {
    if (Platform.OS === "web") {
      // En web, usamos window.location para la navegación
      window.location.href = path
    } else {
      // En móvil, por ahora solo logueamos. Aquí implementarías la navegación móvil.
      console.log(`Navegando a ${path}`)
    }
  }

  return (
    <View style={styles.container}>
      <MenuItem title="Inicio" onPress={() => handleNavigation("/")} />
      <MenuItem title="Servicios" onPress={() => handleNavigation("/servicios")} />
      <MenuItem title="Profesionales" onPress={() => handleNavigation("/profesionales")} />
      <MenuItem title="Contacto" onPress={() => handleNavigation("/contacto")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row" as const,
    justifyContent: "space-around" as const,
    alignItems: "center" as const,
    backgroundColor: "#4f46e5",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold" as const,
  },
})

