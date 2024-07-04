import CarIcon from 'assets/carrito-de-compras.png'

const CartWidget = () =>{

  return (
    <button className="flex flex-row gap-1 items-center">
      <img className='h-8' src={CarIcon}/>
      <span className="rounded-2xl w-5 h-5 bg-redEcommerce text-[#ffffff] flex justify-center items-center" >2</span>
    </button>
  )
}

export default CartWidget