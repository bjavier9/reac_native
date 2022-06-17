import React from "react";
import { View, Text} from "react-native";
import { Button } from "@rneui/base";
import {screen} from "../../utils"

export function RestaurantsScreen(props){
    const{navigation } = props;

    const goToAddRestaurant = ()=>{
            navigation.navigate(screen.restaurant.stack2_name)
        // navigation.navigate(screen.account.tab,{screen:screen.account.stack1_name})
    }

    return (
        <View>
            <Text>RestaurantsScreen</Text>
            <Button title="crear restaurante"onPress={goToAddRestaurant} />
        </View>
    );
}