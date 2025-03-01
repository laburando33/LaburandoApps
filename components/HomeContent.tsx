"use client"
import type React from "react"
import { StyleSheet, View, Platform, Text, type ViewStyle, type TextStyle } from "react-native"
import { ScrollView } from "react-native-web"
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/Hero").then((mod) => mod.default), { ssr: false })
const HowItWorks = dynamic(() => import("@/components/HowItWorks").then((mod) => mod.default), { ssr: false })
const Services = dynamic(() => import("@/components/Services").then((mod) => mod.default), { ssr: false })
const Testimonials = dynamic(() => import("@/components/Testimonials").then((mod) => mod.default), { ssr: false })
const SearchBar = dynamic(() => import("@/components/SearchBar").then((mod) => mod.default), { ssr: false })
const CrossPlatformImageBackground = dynamic(
  () => import("@/components/CrossPlatformImageBackground").then((mod) => mod.default),
  { ssr: false },
)
const Header = dynamic(() => import("@/components/Header").then((mod) => mod.default), { ssr: false })
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })
const SupabaseTest = dynamic(() => import("@/components/SupabaseTest").then((mod) => mod.default), { ssr: false })
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button), { ssr: false })
const ServiceRequestForm = dynamic(() => import("@/components/ServiceRequestForm").then((mod) => mod.default), {
  ssr: false,
})

const fondoLaburandoImage = "/images/fondoLaburando.jpg"

const testimonialsData = [
  { id: 1, name: "Juan Pérez", testimonial: "Excelente servicio, muy profesionales." },
  { id: 2, name: "María García", testimonial: "Rápidos y eficientes, los recomiendo." },
  { id: 3, name: "Carlos López", testimonial: "Muy buena atención y precios accesibles." },
]

const HomeContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          <SupabaseTest />

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <CrossPlatformImageBackground source={{ uri: fondoLaburandoImage }} style={styles.heroBackground}>
              <View style={styles.heroContent}>
                <Hero />
              </View>
            </CrossPlatformImageBackground>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBarContainer}>
            <SearchBar />
          </View>

          {/* Services Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Servicios Destacados</Text>
            <Services />
          </View>

          {/* Service Request Form */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Solicita un Servicio</Text>
            <ServiceRequestForm />
          </View>

          <HowItWorks />

          {/* Testimonials Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Lo que dicen nuestros usuarios</Text>
            <Testimonials testimonials={testimonialsData} />
          </View>

          {/* Call to Action Section */}
          <View style={styles.ctaSection}>
            <Text style={styles.ctaTitle}>¿Listo para comenzar?</Text>
            <Button size="lg" style={styles.ctaButton}>
              Solicitar Servicio Ahora
            </Button>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  } as ViewStyle,
  scrollView: {
    flex: 1,
  } as ViewStyle,
  main: {
    flex: 1,
    maxWidth: Platform.OS === "web" ? 1200 : undefined,
    marginHorizontal: "auto",
    paddingHorizontal: 16,
    paddingVertical: 24,
  } as ViewStyle,
  heroSection: {
    marginBottom: 48,
    borderRadius: 8,
    overflow: "hidden",
  } as ViewStyle,
  heroBackground: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  heroContent: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
  } as ViewStyle,
  searchBarContainer: {
    marginBottom: 48,
    alignItems: "center",
  } as ViewStyle,
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 48,
    ...Platform.select({
      web: {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
    }),
  } as ViewStyle,
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 24,
    textAlign: "center",
  } as TextStyle,
  ctaSection: {
    backgroundColor: "#fef3c7",
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
  } as ViewStyle,
  ctaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 24,
    textAlign: "center",
  } as TextStyle,
  ctaButton: {
    backgroundColor: "#f59e0b",
    paddingHorizontal: 24,
    paddingVertical: 12,
  } as ViewStyle,
})

export default HomeContent

