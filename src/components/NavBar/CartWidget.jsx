import CarIcon from 'assets/carrito-de-compras.png'
import { useContext } from 'react'
import { CartContext } from 'src/context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to="cart"   className="flex flex-row gap-1 items-center">
      <img className='h-8' src={CarIcon}/>
      {
        cantidad >0 && (
        <span className="rounded-2xl w-5 h-5 bg-redEcommerce text-[#ffffff] flex justify-center items-center" >
          { cantidad }
        </span>
        )
      }
    </Link>
  )
}

export default CartWidget