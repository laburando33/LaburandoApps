import { View, StyleSheet } from "react-native"
import LoginForm from "../components/LoginForm"

function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
})

export default LoginScreen

