import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountScreen } from "../screens/Account/AccountScreen"
import { LoginScreen } from "../screens/Account/LoginScreen"
import {RegisterScreen} from '../screens/Account/RegisterScreen'
import { screen} from "../utils"


const Stack = createNativeStackNavigator()

export function AccountStack() {

    return (
        <Stack.Navigator>
          <Stack.Screen 
          name={screen.account.stack1_name}
          component={AccountScreen} 
          options={{ title: screen.account.stack1_title }}
           />
          <Stack.Screen 
          name={screen.account.stack2_name}
          component={LoginScreen} 
          options={{ title: screen.account.stack2_title }}
           />
          <Stack.Screen 
          name={screen.account.stack3_name}
          component={RegisterScreen} 
          options={{ title: screen.account.stack3_title }}
           />
         </Stack.Navigator>
    )
  
}