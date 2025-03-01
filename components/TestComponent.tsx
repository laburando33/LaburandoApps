import { View, Text, StyleSheet, Platform } from "react-native"

const TestComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    ...Platform.select({
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
    }),
  },
  text: {
    fontSize: 16,
  },
})

export default TestComponent

