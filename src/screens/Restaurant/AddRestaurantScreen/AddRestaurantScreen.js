import {ScrollView } from 'react-native'
import React from 'react'
import {InfoForm, UploadImagesForm,ImageRestaurant} from '../../../component/Restaurants/AddRestaurant'
import { useFormik } from 'formik'
import { initialValues, validationSchemas } from './AddRestaurantScreen.data'
import {styles} from './AddRestaurantScreen.styles'
import {db} from '../../../utils'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@rneui/base'
import {v4 as uuid} from "uuid";
import {doc, setDoc} from "firebase/firestore"
import Toast from "react-native-toast-message";


export function AddRestaurantScreen() {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchemas(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue ;
        newData.id = uuid()
        newData.createAt = new Date()
        const myDb = doc(db,"restaurants",newData.id)
        await setDoc(myDb,newData);
        navigation.goBack();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "No se pudo crear el restaurante.",
        });
      }
    },
  });
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageRestaurant formik={formik}/>
        <InfoForm  formik={formik}  />
        <UploadImagesForm  formik={formik} />
        <Button 
          title='Crear Restaurante'
          buttonStyle={styles.addRestaurant}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
          />
      </ScrollView>
    )
  
}