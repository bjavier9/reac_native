import * as Yup from 'yup';

export function initialValues() {
  return {
    email: '',
    password: '',
    confirmPassword: '',
  }
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Correo no es correcto").required("El correo es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
    confirmPassword: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
  })
}