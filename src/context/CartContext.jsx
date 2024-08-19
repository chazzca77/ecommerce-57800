import { createContext, useState } from "react";
import useLocalStorage from 'src/hooks/useLocalStorage'
//Creamos un contexto llamado CartContext 
const CartContext = createContext()

const CartProvider = ({children}) => {
  //Creamos un componente que servira como preveedor de contexto
  //Este mismo envuelve los componentes que van a poder consumir  la info de context
  const [carritoLs, setCarritoLs] = useLocalStorage("carrito", []);
  const [ carrito, setCarrito ] = useState(carritoLs)

  const agregarProducto = (productoNuevo) => {
    //logica para sumar cantidades o agregar producto nuevo
    const condicion = estaEnElCarrito(productoNuevo.id)
    if(condicion){
      let nuevoCarrito = [...carrito]
      nuevoCarrito.forEach( productoCarrito => {
        if(productoCarrito.id === productoNuevo.id){
          productoCarrito.cantidad = productoCarrito.cantidad + productoNuevo.cantidad
        }
      })
      setCarrito(nuevoCarrito)
      setCarritoLs(nuevoCarrito)
    }else{
      //Agregar el producto como nuevo
      setCarrito([ ...carrito, productoNuevo])
      setCarritoLs([ ...carrito, productoNuevo])
    }
  }

  //funcion para detectar si el producto a. añadir esta en el carrito o no
  const estaEnElCarrito = (idProducto) =>{
    const estaEnCarrito = carrito.some( productoCarrito => productoCarrito.id === idProducto)
    return estaEnCarrito
  }

  const getProductoCarrito = (idProducto) => {
    const productoCarrito = carrito.find( productoCarrito => productoCarrito.id === idProducto)
    return productoCarrito
  }

  const cantidadTotal = () =>{
    const totalProductos = carrito.reduce( (total , productoCarrito) => total + productoCarrito.cantidad, 0)
    return totalProductos
  }
  
  const precioTotal = () => {
    const precio = carrito.reduce( (total, productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio), 0)
    return precio
  }
  
  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter( productoCarrito => productoCarrito.id !== idProducto)
    setCarrito(productosFiltrados)
    setCarritoLs(productosFiltrados)
  }

  const vaciarCarrito = () => {
    setCarrito([])
    setCarritoLs([])
  }

  return (
    <CartContext.Provider value={ {carrito, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito, estaEnElCarrito, getProductoCarrito} }>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }