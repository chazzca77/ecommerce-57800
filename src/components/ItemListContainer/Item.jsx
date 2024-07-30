import './item.css'
import { Link } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa6";

const Item= ({producto})=>{

  return (
    <div className="contentCard w-full border border-gray-200 rounded-lg hover:shadow " >
        <div className='imageContainer'>
          <img className =" rounded-t-lg" src={producto.imagen} alt="" />
        </div>
        <div className="p-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 h-20 ">{producto.nombre} </h5>
          <div className="flex items-center mb-5">
            <div className="w-full flex justify-center p-2">
              <div className="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">stock: {producto.stock}</div>  
            </div>
          </div>
          <div className="flex items-center justify-between">
              <Link to={`/item/${producto.id}`} className="text-lg text-gray-900 hover:text-blueEcommerce ">Ver detalle</Link>
              <button 
              className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
              <FaCartPlus />
              </button>
          </div>
      </div>
    </div>
  )

}

export default Item