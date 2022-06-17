import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed"
import { RestaurantStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoritesStack"
import { RankingStack } from "./RankingStack"
import { SearchStack } from "./SearchStack"
import { AccountStack } from "./AccountStack"
import { screen } from "../utils"

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown:false,
                tabBarActiveTintColor: "#00a680",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color, size }) => tabIconsOption(route, color, size)
            })}
        >
            <Tab.Screen name={screen.restaurant.tab} component={RestaurantStack} options={{ title: screen.restaurant.title }} />
            <Tab.Screen name={screen.favorites.tab} component={FavoritesStack} options={{ title: screen.favorites.title }} />
            <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{ title: screen.ranking.title }} />
            <Tab.Screen name={screen.search.tab} component={SearchStack} options={{ title: screen.search.title }} />
            <Tab.Screen name={screen.account.tab} component={AccountStack} options={{ title: screen.account.title }} />
        </Tab.Navigator>
    )
}

//funcion para seleccionar el icono de la pestaña
function tabIconsOption(route, color, size) {
    let iconName;
    if (route.name === screen.restaurant.tab) {
        iconName = 'compass-outline';
    }
    if (route.name === screen.favorites.tab) {
        iconName = 'heart-outline';
    }
    if (route.name === screen.ranking.tab) {
        iconName = 'star-face';
    }
    if (route.name === screen.search.tab) {
        iconName = 'magnify';
    }
    if (route.name === screen.account.tab) {
        iconName = 'account-outline';
    }
    return (
        <Icon type="material-community" name={iconName} color={color} size={size} />
    )
}