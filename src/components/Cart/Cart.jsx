import './cart.css'
import { useContext } from "react";
import { CartContext } from "src/context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

  const {carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext)
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const precio = USDollar.format(precioTotal()) 

  //Early return o return temprano
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
          {
          carrito.map( (productoCarrito) => (
            <article className="card-wrapper my-2">
              <div className='item-row'>
                <div className='item-cart'>
                  <div className='item-cart__asset'>
                    <img src={productoCarrito.imagen} width="64" />
                  </div>
                  <div className='item-cart__info'>
                    <Link to={`/item/${productoCarrito.id}`} >{productoCarrito.nombre}</Link>
                    <div className='item-cart__actions'>
                      <button className='text-blueEcommerce' onClick={ () => {borrarProducto(productoCarrito.id) }}>Eliminar</button>
                    </div>
                  </div>
                  <div className='item-price-container'>
                    <p>Cantidad: {productoCarrito.cantidad}</p>
                    <p className='py-4'>Precio parcial: <span className='font-semibold'>
                      {USDollar.format((productoCarrito.cantidad * productoCarrito.precio ))}</span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
            ))
          } 
          <div className='w-full flex justify-end px-8'>
            <button 
              onClick={() => {vaciarCarrito()}}
              className='my-8 p-2 flex justify-center font-bold text-white bg-red-500 hover:bg-red-600'>
                Vaciar carrito
            </button>
          </div>
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
            <Link to="/checkout"
            className='mx-6 my-8 rounded-lg p-2 flex justify-center font-bold text-white bg-blueEcommerce hover:bg-blueStrongEcommerce'>
              Checkout
            </Link>
        </section>
      </div>
    </div>
  )
}

export default Cart