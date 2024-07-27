import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


const ItemDetail = ({producto}) => {

  let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
  });
  const precio = USDollar.format(producto.precio)


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
              <button className="flex items-center ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                <FaCartPlus />
                </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <FaHeart />

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail