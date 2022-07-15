import {View, ScrollView } from 'react-native'
import React from 'react'
import { Text,Button, Image } from "@rneui/base"
import {styles} from "./UserGuestScreen.styles"
import {screen} from "../../../utils"
import { useNavigation } from '@react-navigation/native'
export function UserGuestScreen(){
  const navigation = useNavigation()

  const gotoLogin=()=>{
    navigation.navigate(screen.account.stack2_name)
  }
  return(
      <ScrollView centerContent={true} style={styles.viewBody}>
        <Image 
        source={require("../../../../assets/img/user_guest.jpg")} 
        style={styles.image}></Image>
        <Text style={styles.title}>Consultar tu perfil</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus malesuada nisl,
          quis egestas justo efficitur id. Pellentesque nisi erat, vehicula sed ultrices nec, 
          iaculis quis sapien. Morbi eros arcu, hendrerit eget ultricies ac,
          Vestibulum nec metus sagittis felis vulputate suscipit.
        </Text>
        
          <Button buttonStyle={styles.btnStyle} title="Ver tu perfil" onPress={gotoLogin}/>
        
      </ScrollView>
    )
  
}