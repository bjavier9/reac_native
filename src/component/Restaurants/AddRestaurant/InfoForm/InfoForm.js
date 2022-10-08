import { View, Text } from 'react-native'
import React ,{useState}from 'react'
import  {Input} from '@rneui/base'
import { styles } from './InfoForm.style'
import { MapForm } from '../MapForm'

export function InfoForm(props) {
  const { formik } = props
  const[showMap,setShowMap] = useState(false)
  const onOpenCloseMap = () => setShowMap((prevState) => !prevState)
  return (
    <>
    <View style={styles.content}>
      <Input  placeholder='Nombre de restaurante' 
      onChangeText={(text)=>formik.setFieldValue("name",text)}      
      errorMessage={formik.errors.name}
      />
      <Input  placeholder='Dirección'
      rightIcon={{
        type: 'material-community',
        name: 'map-marker-radius',
        color: getColorIconMap(formik),
        onPress: onOpenCloseMap
      }}
      onChangeText={(text)=>formik.setFieldValue("address",text)}
      errorMessage={formik.errors.address}
      />
      <Input  placeholder='Telefono'
            onChangeText={(text)=>formik.setFieldValue("phone",text)}
            errorMessage={formik.errors.phone}
      />
      <Input  placeholder='Email'
            onChangeText={(text)=>formik.setFieldValue("email",text)}
            errorMessage={formik.errors.email}
      />
      <Input placeholder='Descripcion de restaurante' 
        multiline={true} 
        inputContainerStyle={styles.textArea} 
        onChangeText={(text)=>formik.setFieldValue("description",text)}
        errorMessage={formik.errors.description}
        />
    </View>
    <MapForm show={showMap} close={onOpenCloseMap} formik={formik}/>
    </>
  )
}

const getColorIconMap = (formik)=>{
  if(formik.errors.location ) return "#ff0000"
  if(formik.values.location ) return "#00a680"
  return "#c2c2c2"
}