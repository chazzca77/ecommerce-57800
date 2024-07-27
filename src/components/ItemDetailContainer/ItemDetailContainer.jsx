import { useEffect, useState } from "react"
import obtenerProducto from "src/data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { ThreeDots } from 'react-loading-icons'
import useLoading from 'src/hooks/useLoading.jsx'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const { cargando, mostrarCargando, ocultarCargando} = useLoading()
  const { id } = useParams()

  useEffect( () => {
    mostrarCargando()
    obtenerProducto(1000)
    .then( data => {
      const productoEncontrado = data.find(productData => productData.id === id )
      setProducto(productoEncontrado)
    })
    .finally( () => {
      ocultarCargando()
    })
  }, [id])

  const pantallaDeCarga = <p className="text-gray-700 text-base flex justify-center items-center p-6">
    <ThreeDots stroke="var(--blue-Ecommerce)"  />
    </p>

  return (
    <div className="">
      {
        cargando ? pantallaDeCarga : <ItemDetail producto={producto} />
      }
  </div>
  )
}

export default ItemDetailContainer