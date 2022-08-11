import React ,{useEffect,useState}from "react";
import { View, Text} from "react-native";
import { Button, Icon } from "@rneui/base";
import {getAuth,onAuthStateChanged} from "firebase/auth"
import {screen} from "../../../utils"
import {styles} from "./RestaurantsScreen.styles"

export function RestaurantsScreen(props){
    const{navigation } = props;
    const[currentUser,setCurretUser] = useState(null)
    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth,(user)=>{
            setCurretUser(user)
        })
    },[])
    const goToAddRestaurant = ()=>{
            // navigation.navigate(screen.restaurant.stack2_name,{})
            navigation.navigate(screen.restaurant.tab,{screen:screen.restaurant.stack2_name})
    }

    return (
        
        <View style={styles.content}>
            <Text>RestaurantsScreen</Text>
            {currentUser && (<Icon
                reverse
                type="material-community"
                name="plus"
                color="#00a680"
                containerStyle={styles.iconContainer}
                onPress={goToAddRestaurant}
            />)}
        </View>
    );
}