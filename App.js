import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "./app/login/page"
import ResetPasswordScreen from "./app/reset-password/page"
import UpdatePasswordScreen from "./app/update-password/page"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

