import { mixed, object, string, number} from 'yup'

let userSchema = object({
  nombre: string().required("El campo nombre es requerido"),
  apellido: string().required("El campo apellido es requerido"),
  telefono: number().required("El campo telefono es requerido"),
  email: string().email("El campo email no tiene el formato correcto").required("El campo email es requerido"),
  repEmail: string().required("El campo email no tiene el formato correcto"),
})

const validateForm = async(dataForm) => {
  try{
    await userSchema.validate(dataForm)
    return { status: "success"}
  }catch(error){
    return { status: "error", message: error.message}
  }
}

export default validateForm