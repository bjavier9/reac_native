import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AddRestaurantScreen } from "../screens/Restaurant/AddRestaurantScreen"
import { RestaurantsScreen } from "../screens/Restaurant/RestaurantsScreen"
import { RestaurantScreen } from "../screens/Restaurant/RestaurantScreen"
import { AddReviewRestaurantScreen } from "../screens/Restaurant/AddReviewRestaurantScreen"
import { screen} from "../utils"


const Stack = createNativeStackNavigator()

export function RestaurantStack() {

    return (
        <Stack.Navigator>
          <Stack.Screen 
          name={screen.restaurant.stack1_name}
          component={RestaurantsScreen} 
          options={{ title: screen.restaurant.stack1_title }}
           />
          <Stack.Screen 
          name={screen.restaurant.stack2_name} 
          component={AddRestaurantScreen} 
          options={{ title: screen.restaurant.stack2_title }}
           />
          <Stack.Screen 
          name={screen.restaurant.stack4_name} 
          component={RestaurantScreen} 
          options={{ title: screen.restaurant.stack4_title }}
           />
          <Stack.Screen 
          name={screen.restaurant.stack3_name} 
          component={AddReviewRestaurantScreen} 
          options={{ title: screen.restaurant.stack3_title }}
           />
          
         </Stack.Navigator>
    )
  
}