import React from 'react'
import {View} from 'react-native'
import { Text,Image} from "@rneui/base"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {useNavigation} from "@react-navigation/native"
import {styles} from "./RegisterScreen.styles"
import { RegisterForm } from '../../../component/Auth/RegisterForm/RegisterForm'
export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
       <Image source={require("../../../../assets/img/3img.png")}
         style={styles.image} />
         <View style={styles.content}>
          <RegisterForm/>
         </View>
    </KeyboardAwareScrollView>
   
  )
}
