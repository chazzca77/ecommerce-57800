import {BrowserRouter, Routes, Route } from 'react-router-dom' 
import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import seedProducts from './utils/seedProducts'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <ToastContainer theme='dark'/>
        {/* <button onClick={() => { seedProducts() }}>boton</button> */}
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={"Bienvenido"} />}/>
          <Route path='/category/:categoryId' element={
            <ItemListContainer saludo={"Bienvenido"} />}
          />
          <Route path='/item/:id' element={
            <ItemDetailContainer/>}
          />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
