import React ,{ useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from "@rneui/base";
import {styles} from './LoginForm.styles'
import {initialValues, validationSchema} from './LoginForm.data'
import { useFormik } from "formik";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigation} from '@react-navigation/native'
import Toast from "react-native-toast-message";
import {screen} from '../../../utils'

export  function LoginForm() {
const [showPassword, setShowPassword] = useState(false);
const showHidePassword = () => setShowPassword((prevState) => !prevState);
const navigation = useNavigation();

const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const aunth = getAuth();
        await signInWithEmailAndPassword(
                 aunth,
                 formValue.email,
                 formValue.password)
        navigation.navigate(screen.account.stack1_name);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Usuario o contraseña incorrectos",
        });
    
      }
    },
  });
  return (
    <View style={styles.content}>
        <Input 
            placeholder='Correo electronico' 
            containerStyle={styles.input} 
            rightIcon={
                <Icon 
                type="material-community" 
                name="at" 
                iconStyle={styles.icon} />
              }
              onChangeText={(text) => formik.setFieldValue("email", text)}
              errorMessage={formik.errors.email}
            />
        <Input 
            placeholder='Contraseña' 
            containerStyle={styles.input} 
            secureTextEntry={showPassword ? false : true}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
            rightIcon={<Icon 
            type="material-community" 
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={showHidePassword}
            iconStyle={styles.icon} />}
            />
        <Button 
            title='Login' 
            containerStyle={styles.btnContainer} 
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
    </View>
  )
}