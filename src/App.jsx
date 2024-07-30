import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom' 
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <BrowserRouter >
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer saludo={"Bienvenido"} />}/>
        <Route path='/category/:categoryId' element={
          <ItemListContainer saludo={"Bienvenido"} />} >
        </Route>
        <Route path='/item/:id' element={
          <ItemDetailContainer/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
