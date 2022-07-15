import * as Yup from 'yup';

export function initialValues() {
  return {
    email: '',
    password: ''
  }
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Correo no es correcto").required("El correo es requerido"),
    password: Yup.string().required("La contraseña es requerida").min(8, "La contraseña es demasiado corta; debe tener un mínimo de 8 caracteres.")
    
  })
}