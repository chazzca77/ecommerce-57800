import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";

const ItemCount = ({ stock, agregarAlCarrito}) =>{
  const [ count, setCount ] = useState(1)

  const aumentar = () => {
    if(count < stock) setCount( count + 1 ) 
  }
  const disminuir = () => {
    if(count > 1) setCount( count - 1 )
  }
  const addCart = () => agregarAlCarrito(count)

  return (
    <div className="flex items-center py-5">
        <button type="button" onClick={disminuir}  
        className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border
         border-gray-300 rounded-md h-8 w-8 focus:ring-gray-100  focus:ring-2 focus:outline-none">
            -
        </button>
        <input type="text" value={count} 
        className="flex-shrink-0 text-gray-900 border-0 bg-transparent text-xl 
        font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="0" readOnly />

        <button type="button" onClick={aumentar}
        className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center 
        border border-gray-300 rounded-md h-8 w-8 focus:ring-gray-100 focus:ring-2 focus:outline-none">
            +
        </button>
        <button onClick={addCart} className="flex gap-3 items-center ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
          Agregar al carrito
          <FaCartPlus />
        </button>
    </div>
  )
}

export default ItemCount