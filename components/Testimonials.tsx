import type React from "react"
import { StyleSheet, View, Text, Platform, type ViewStyle, type TextStyle } from "react-native"

interface Testimonial {
  id: number
  name: string
  testimonial: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <View style={styles.container}>
      {testimonials.map((testimonial) => (
        <View key={testimonial.id} style={styles.testimonialItem}>
          <Text style={styles.testimonialText}>{`"${testimonial.testimonial}"`}</Text>
          <Text style={styles.testimonialName}>- {testimonial.name}</Text>
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
  testimonialItem: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 24,
    margin: 12,
    width: Platform.OS === "web" ? "calc(33.33% - 24px)" : "100%",
    ...Platform.select({
      web: {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" as unknown as number,
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
  testimonialText: {
    fontSize: 16,
    color: "#4b5563",
    marginBottom: 16,
    fontStyle: "italic",
  } as TextStyle,
  testimonialName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "right",
  } as TextStyle,
})

export default Testimonials

