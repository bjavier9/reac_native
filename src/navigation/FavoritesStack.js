import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FavoritesScreen } from "../screens/Favorites/FavoritesScreen"
import { screen} from "../utils"


const Stack = createNativeStackNavigator()

export function FavoritesStack() {

    return (
        <Stack.Navigator>
          <Stack.Screen 
          name={screen.favorites.stack1_name}
          component={FavoritesScreen} 
          options={{ title: screen.favorites.stack1_title }}
           />
          
         </Stack.Navigator>
    )
  
}