import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

/* Este return es JSX*/
  return (
    <div >
      <NavBar/>
      <ItemListContainer saludo={"Bienvenidos al Ecommerce"}/>
    </div>
  )
}

export default App
