import { LogBox } from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import Toast from "react-native-toast-message"
import {AppNavigation} from "./src/navigation/AppNavigation"
import { initFirebase, store } from "./src/utils"
  // https://medium.com/geekculture/how-to-use-realm-local-db-in-react-native-4e9f9dfcbc53
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
    <Toast/>
    </>

  )
}

