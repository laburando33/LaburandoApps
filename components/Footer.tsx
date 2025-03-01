import type React from "react"
import { StyleSheet, View, Text, Platform, type ViewStyle, type TextStyle } from "react-native"

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 LaburandoApp. Todos los derechos reservados.</Text>
      {Platform.OS === "web" && (
        <View style={styles.links}>
          <Text style={styles.link}>Términos de Servicio</Text>
          <Text style={styles.link}>Política de Privacidad</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e293b",
    padding: 20,
    alignItems: "center",
  } as ViewStyle,
  text: {
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
  } as TextStyle,
  links: {
    flexDirection: "row",
    justifyContent: "center",
  } as ViewStyle,
  link: {
    color: "#94a3b8",
    marginHorizontal: 10,
    textDecorationLine: "underline",
  } as TextStyle,
})

export default Footer

