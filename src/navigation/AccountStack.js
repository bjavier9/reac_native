import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountScreen } from "../screens/Account/AccountScreen"
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
          
         </Stack.Navigator>
    )
  
}