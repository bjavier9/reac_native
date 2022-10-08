import { View} from 'react-native'
import React, {useState}from 'react'
import { ListItem, Icon, Text }  from "@rneui/base"
import {map} from 'lodash'
import {Modal} from '../../component'
import {ChangeDisplayNameForm, ChangePasswordForm ,ChangeEmailForm} from "../../component/Account";

export function AccountOptions(props) {
  const {onReaload}= props
  const [showModal, setShowModal] = useState(false)
  const [renderComponent, setRenderComponent] = useState(null)
  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);
 
  const selectedComponent = (key)=>{
    if (key === 'cambiarNombreApellido') {
      setRenderComponent(<ChangeDisplayNameForm onClose={onCloseOpenModal} onReaload={onReaload}/>)
    }
    if (key === 'cambiarEmail') {
      setRenderComponent(
        <ChangeEmailForm onClose={onCloseOpenModal} onReload={onReaload} />
      );
    }
    if (key === 'cambiarPassword') {
      setRenderComponent(<ChangePasswordForm onClose={onCloseOpenModal} />)
    }
    onCloseOpenModal()
  }
  const menuOptions = getMenuOptions(selectedComponent)
  return (
    <View>
      {map(menuOptions,(menu, index)=>(
        <ListItem key={index}
          bottomDivider
          onPress={menu.onPress}
        >
          <Icon 
            type={menu.iconType} 
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}/>
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}/>
        </ListItem>
      ))}
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  )
  
function getMenuOptions() {
  return [
    {
      title: 'Cambiar Nombre y Apellido',
      iconType:"material-community",
      iconNameLeft:"account-circle",
      iconColorLeft:"#ccc",
      iconNameRight:"chevron-right",
      iconColorRight:"#ccc",
      onPress: () => selectedComponent("cambiarNombreApellido")
    },
    {
      title: 'Cambiar Email',
      iconType:"material-community",
      iconNameLeft:"at",
      iconColorLeft:"#ccc",
      iconNameRight:"chevron-right",
      iconColorRight:"#ccc",
      onPress: () => selectedComponent("cambiarEmail")
    },
    {
      title: 'Cambiar Contraseña',
      iconType:"material-community",
      iconNameLeft:"lock-reset",
      iconColorLeft:"#ccc",
      iconNameRight:"chevron-right",
      iconColorRight:"#ccc",
      onPress: () => selectedComponent("cambiarPassword")
    }
  ]
}
}
