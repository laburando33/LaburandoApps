import "@testing-library/jest-dom"
import "react-native"
import "jest-expo"

// Mock ExpoModulesCore
jest.mock("expo-modules-core", () => {
  return {
    NativeModulesProxy: new Proxy(
      {},
      {
        get() {
          return () => {}
        },
      },
    ),
  }
})

// Mock react-native-safe-area-context
jest.mock("react-native-safe-area-context", () => ({
  SafeAreaProvider: ({ children }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}))

