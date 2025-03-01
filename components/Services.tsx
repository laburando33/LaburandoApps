import type React from "react"
import { StyleSheet, View, Text, Platform, type ViewStyle, type TextStyle } from "react-native"

const serviceList = [
  { id: 1, name: "Plomería", icon: "🔧" },
  { id: 2, name: "Electricidad", icon: "⚡" },
  { id: 3, name: "Carpintería", icon: "🪚" },
  { id: 4, name: "Pintura", icon: "🎨" },
  { id: 5, name: "Jardinería", icon: "🌱" },
  { id: 6, name: "Limpieza", icon: "🧹" },
]

const Services: React.FC = () => {
  return (
    <View style={styles.container}>
      {serviceList.map((service) => (
        <View key={service.id} style={styles.serviceItem}>
          <Text style={styles.serviceIcon}>{service.icon}</Text>
          <Text style={styles.serviceName}>{service.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  } as ViewStyle,
  serviceItem: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    margin: 8,
    width: Platform.OS === "web" ? 120 : "30%",
    ...Platform.select({
      web: {
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" as unknown as number,
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
    }),
  } as ViewStyle,
  serviceIcon: {
    fontSize: 32,
    marginBottom: 8,
  } as TextStyle,
  serviceName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
  } as TextStyle,
})

export default Services

