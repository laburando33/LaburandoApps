import type React from "react"
import { View, Text, StyleSheet, type TextStyle, type ViewStyle } from "react-native"
import Icon from "./Icon"

interface FeatureProps {
  title: string
  text: string
  iconName: React.ComponentProps<typeof Icon>["name"]
}

const Feature: React.FC<FeatureProps> = ({ title, text, iconName }) => {
  return (
    <View style={styles.feature}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={24} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const ServicesSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feature iconName="water" title="Plomería" text="Soluciones para todas tus necesidades de plomería." />
      <Feature iconName="brush" title="Pintura" text="Renueva tus espacios con nuestros expertos en pintura." />
      <Feature iconName="flash" title="Electricidad" text="Instalaciones y reparaciones eléctricas seguras." />
      <Feature iconName="hammer" title="Carpintería" text="Servicios de carpintería para todos tus proyectos." />
      <Feature iconName="leaf" title="Jardinería" text="Mantén tu jardín hermoso con nuestros servicios." />
      <Feature iconName="trash" title="Limpieza" text="Servicios de limpieza profesionales para tu hogar o negocio." />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
  } as ViewStyle,
  feature: {
    alignItems: "center",
    marginBottom: 20,
    width: "45%",
  } as ViewStyle,
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#319795",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  } as ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  } as TextStyle,
  text: {
    textAlign: "center",
    color: "#4A5568",
  } as TextStyle,
})

export default ServicesSection

