import { toast } from "react-toastify"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "src/context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {
  const { agregarProducto, estaEnElCarrito, getProductoCarrito } = useContext(CartContext)
  const [mostrarItemCount, setMostrarItemCount] = useState(true)

  let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
  });
  const precio = USDollar.format(producto.precio)

  const agregarAlCarrito = (count) => {
    const estaEnCarrito = estaEnElCarrito(producto.id)
    if(!estaEnCarrito){
      agregarProducto({...producto, cantidad: count})
      toast.success('Producto agregado correctamente')
      return;
    }
    const productoCarrito = getProductoCarrito(producto.id)
    const cantidadTotal = productoCarrito.cantidad + count
    if(cantidadTotal > producto.stock){
      toast.warning('No puedes agregar más que el stock disponible')
      return;
    }
    agregarProducto({...producto, cantidad: count})
    toast.success('Producto agregado correctamente')
    //ocultamos el componente ItemCount
    setMostrarItemCount(false)
  }

  const IrAlCarritoComponent = () => {
    return (
      <Link to={`/cart`} 
      className='my-8 p-2 flex justify-center font-bold text-white bg-blueEcommerce hover:bg-blueStrongEcommerce'>
      Ir al carrito
    </Link>)
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center border border-gray-200"
           src={producto.imagen}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Ref: {producto.id}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{producto.nombre}</h1>
            <p className="leading-relaxed py-6">
              {producto.descripcion}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">{precio}</span>
            </div>
            {
              mostrarItemCount ?  (
              <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />)

              :( <IrAlCarritoComponent/>) 
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail