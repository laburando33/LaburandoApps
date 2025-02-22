import { View, StyleSheet } from "react-native"
import UpdatePasswordForm from "../../src/components/UpdatePasswordForm"

function UpdatePasswordScreen() {
  return (
    <View style={styles.container}>
      <UpdatePasswordForm />
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

export default UpdatePasswordScreen

