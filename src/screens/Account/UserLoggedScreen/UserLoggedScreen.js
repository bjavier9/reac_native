import React,{useState} from 'react'
import { View } from 'react-native'
import {InfoUser, AccountOptions} from '../../../component/Account'
import {Button } from "@rneui/base"
import { getAuth, signOut} from 'firebase/auth'
import {styles} from './UserLoggedScreen.styles'
import { LoadingModal } from '../../../component'
export function UserLoggedScreen(){

  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("")
  const [_, setReload] = useState(false)
  const onReaload = () => setReload((prevState)=>!prevState)
  const logout = async () => { 
    const auth = getAuth()
    await signOut(auth);
  }
  return(

      <View>
        <InfoUser setLoading={setLoading} setLoadingText={setLoadingText}/>
        <AccountOptions onReaload={onReaload}/>
        <Button 
          title="Cerrar Sesion" 
          buttonStyle={styles.btnStyles}
          titleStyle={styles.btnTextStyle}
          onPress={logout}
          />
          <LoadingModal show={loading} text={loadingText}/>
      </View>
    )
  
}