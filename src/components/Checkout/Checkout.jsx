import '../Cart/cart.css'
import { useState, useContext } from "react"
import { CartContext } from "src/context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import FormularioCheckout from "./FormularioCheckout"
import db from "src/db/db.js"
import validateForm from "src/utils/validacionFormularios.js"
import { toast } from "react-toastify"
import { Link } from "react-router-dom";


const Checkout = ()  => {  

  const [datosForm, setDatosForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    repEmail: ''
  })
  const [idOrden, setIdOrden] = useState(null)
  const [puedeContinuar, setPuedeContinuar] = useState(false)
  const {carrito, precioTotal , vaciarCarrito} = useContext(CartContext)

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const precio = USDollar.format(precioTotal()) 

  const handleChangeInput = async (event) => {
    setDatosForm( { ...datosForm, [event.target.name]: event.target.value} )
    
    const { nombre,apellido,telefono,email,repEmail } = datosForm
    if(event.target.value === ''){
      setPuedeContinuar(false)
      return
    } 
    if(nombre == '' || apellido == '' || telefono == '' || email == '' || repEmail == '' ){
      setPuedeContinuar(false)
      return
    }
    if(event.target.name == 'email'){
      event.target.value == datosForm.repEmail ? setPuedeContinuar(true) : setPuedeContinuar(false)
      return
    }
    if(event.target.name == 'repEmail'){
      event.target.value == datosForm.email ? setPuedeContinuar(true) : setPuedeContinuar(false)
    }else{
      datosForm.email === datosForm.repEmail ? setPuedeContinuar(true) : setPuedeContinuar(false)
    }
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    //formatear correctamente la informacion de la orden a subir
    const orden = {
      comprador: { ...datosForm},
      productos: [ ...carrito ],
      fecha: Timestamp.fromDate( new Date ),
      total: precioTotal()
    }
    const response = await validateForm(datosForm)
    if(response.status == 'success'){
      sendOrder(orden)
    }else{
      toast.warning(response.message)
    }
  }

  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, "ordenes")
      const ordenDB = await addDoc(ordenesRef, orden);
      setIdOrden(ordenDB.id)
      vaciarCarrito()
    } catch (error) {
      toast.warning(error)
    }
  }



    //Early return o return temprano
  if(idOrden){
    return (
      <div className='py-10 px-20 flex justify-center flex-col items-center'>
        <p className='text-2xl'>Orden completada correctamente 😀</p>
        <p className='text-xl'>Guarda el id de su orden enviada: <span className='font-bold'>{idOrden}</span></p>
        <Link to="/" className='mx-6 my-8 rounded-lg p-2 flex justify-center font-bold text-white bg-blueEcommerce hover:bg-blueStrongEcommerce'>
        Seguir comprando</Link>
      </div>
    )
  }

  if(carrito.length === 0){
    return (
      <div className="bg-gray-100 h-[calc(100vh-74px)] py-10 px-20 ">
        <p className='flex justify-center font-semibold'>El carrito está vacio</p>
        <Link to="/" className='mx-6 my-8 rounded-lg p-2 flex justify-center font-bold text-white bg-blueEcommerce hover:bg-blueStrongEcommerce'>
        Ver productos</Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 h-[calc(100vh-74px)] py-10 px-20 ">
      <div className='cards-container'>
        <section className="cards-list">
          <div className='p-5 flex justify-center'>
            <span className='rich-text'>
            Llena estos datos para poder terminar la compra
            </span>
          </div>
          <div className='cards-price-box-row'>
            <div className="separator"></div>
          </div>
          <FormularioCheckout 
          datosForm={datosForm} 
          puedeContinuar = {puedeContinuar}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
          />
        </section>
        <section className="price-box-container">
          <div className='price-box-container__title'>
            <span className='rich-text rich-text--bold'>
            Resumen de la compra
            </span>
          </div>
          <div className='cards-price-box-row'>
            <div className="separator"></div>
          </div>
          <div className='ticket-row'>
            <div>Productos ({carrito.length })</div>
            <p>Total: <span>{precio}</span></p>
          </div>
        </section>
      </div>  
    </div>
  )
}

export default Checkout