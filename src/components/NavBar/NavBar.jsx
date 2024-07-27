import { useState } from "react"
import LogoGeek from 'assets/logo_ecommerce_geek.png'
import IconMenu from 'assets/menu.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [switchMenu, setSwitchMenu] = useState(false)

  const abreCierraMenu = () => {
    setSwitchMenu(!switchMenu)
  }

  return (
    <nav className="bg-white border-gray-200  shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img className="h-10" src={LogoGeek} alt="" /> 
        </Link>
        <div  className="flex items-center md:order-2">
            <CartWidget/>
            <button onClick={abreCierraMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  " aria-expanded="false">
              <img className="h-8" src={IconMenu} alt="" /> 
          </button>
        </div>
        <div className={"w-full md:block md:w-auto " + (switchMenu ? 'block' : 'hidden')} >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <Link to="/" className="md:hover:text-blueEcommerce text-xl block py-2 px-3 bg-transparent md:p-0" >Inicio</Link>
            <Link to="/category/nintendo" className="md:hover:text-blueEcommerce text-xl block py-2 px-3 bg-transparent md:p-0" >Nintendo</Link>
            <Link to="/category/RickyMorty" className="md:hover:text-blueEcommerce text-xl block py-2 px-3 bg-transparent md:p-0" >Rick & Morty</Link>
            <Link to="/category/DC" className="md:hover:text-blueEcommerce text-xl block py-2 px-3 bg-transparent md:p-0" >DC</Link>
          </ul>
        </div>

      </div>
    </nav>

  )
}

export default NavBar