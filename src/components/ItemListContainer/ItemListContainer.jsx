import { useState, useEffect } from 'react'
import obtenerProductos from 'src/data/data.js'
import ItemList from './ItemList'
import useLoading from 'src/hooks/useLoading.jsx'
import { useParams } from 'react-router-dom'
import { ThreeDots } from 'react-loading-icons'

const ItemListContainer = ({ saludo } ) => {

  const [ productos, setPoductos] = useState([])
  const { cargando, mostrarCargando, ocultarCargando} = useLoading()
  const { categoryId } = useParams()

  useEffect( ()=>{
    mostrarCargando()

    obtenerProductos(1500)
      .then( respuesta => {
        if(categoryId){ 
          //filtrar productos por categoria
          const productosFiltrados = respuesta.filter( element => element.categoria== categoryId)
          setPoductos(productosFiltrados)
          return
        }
        //guardar todos los productos son filtro
        setPoductos(respuesta)        
      })
      .catch( error => {
        console.log(error)
      })
      .finally( () => {
        // console.log("Finalizo la promesa")
        ocultarCargando()
      })
  } , [categoryId])

  const pantallaDeCarga = <p className="text-gray-700 text-base flex justify-center">
              <ThreeDots stroke="var(--blue-Ecommerce)"  />
              </p>
  return (
    <div className="w-full h-full flex flex-col justify-center p-12">
      <div className="font-bold text-blueEcommerce text-3xl mb-2 text-center p-6">{saludo}</div>
        {
          cargando ? pantallaDeCarga : <ItemList productos={productos} style={{ display: "flex"}}/>
        }
    </div>
  )
}

export default ItemListContainer