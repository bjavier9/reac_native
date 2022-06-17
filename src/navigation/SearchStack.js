import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SearchScreen } from "../screens/Search/SearchScreen"
import { screen} from "../utils"


const Stack = createNativeStackNavigator()

export function SearchStack() {

    return (
        <Stack.Navigator>
          <Stack.Screen 
          name={screen.search.stack1_name}
          component={SearchScreen} 
          options={{ title: screen.search.stack1_title }}
           />
          
         </Stack.Navigator>
    )
  
}