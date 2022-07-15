import React from 'react'
import {View, ScrollView} from 'react-native'
import { Text,Image} from "@rneui/base"
import {useNavigation} from "@react-navigation/native"
import { screen } from '../../../utils'
import {styles} from "./LoginScreen.styles"
import {LoginForm} from "../../../component/Auth"
export function LoginScreen() {
  const navigation = useNavigation();
  const gotoRegister=()=> {
    navigation.navigate(screen.account.stack3_name)
  }
  return (
    <ScrollView>
        <Image source={require("../../../../assets/img/2img.png")}
         style={styles.image} />
        <View style={styles.content}>
          <LoginForm/>
            <Text  style={styles.textRegister}>
                ¿No tienes una cuenta? <Text  style={styles.btnRegister} onPress={gotoRegister} >registrarse</Text>
            </Text>
        </View>
    </ScrollView>
   
  )
}
