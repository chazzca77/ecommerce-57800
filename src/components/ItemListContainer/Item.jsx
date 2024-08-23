import './item.css'
import { Link } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa6";
import { toast } from "react-toastify"
import { useContext} from "react";
import { CartContext } from "src/context/CartContext";

const Item= ({producto})=>{
  const { agregarProducto, estaEnElCarrito, getProductoCarrito } = useContext(CartContext)

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const precio = USDollar.format(producto.precio)
  const agregarAlCarrito = () => {
    const estaEnCarrito = estaEnElCarrito(producto.id)
    if(!estaEnCarrito){
      agregarProducto({...producto, cantidad: 1})
      toast.success('Producto agregado correctamente')
      return;
    }
    const productoCarrito = getProductoCarrito(producto.id)
    if(productoCarrito.cantidad < producto.stock){
      agregarProducto({...producto, cantidad: 1})
      toast.success('Producto agregado correctamente')
    }else{
      toast.warning('No puedes agregar más que el stock disponible')
    }
  }

  return (
    <div className="contentCard w-full border border-gray-200 rounded-lg shadow hover:shadow-2xl " >
      <div className='imageContainer'>
        <img className =" rounded-t-lg" src={producto.imagen} alt="" />
        <div className="containerStock shadow rounded-sm">
          <div className="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">stock: {producto.stock}</div>  
        </div>
      </div>
      <div className="p-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 h-20 ">{producto.nombre} </h5>
        <div className="contentButtons">
            <p className='font-bold'>{precio}</p>
            <button 
              onClick={agregarAlCarrito}
              className="flex ml-auto text-white bg-red-400 border-0 py-2 px-6 focus:outline-none
                hover:bg-red-600 rounded">
              <FaCartPlus />
            </button>
        </div>
      </div>
      <Link to={`/item/${producto.id}`} className='p-2 flex justify-center font-bold text-white bg-blueEcommerce hover:bg-blueStrongEcommerce'>
        Ver Detalle
      </Link>
    </div>
  )

}

export default Item