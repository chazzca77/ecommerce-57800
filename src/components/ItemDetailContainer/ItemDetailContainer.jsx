import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ThreeDots } from 'react-loading-icons'
import { getDoc, doc } from "firebase/firestore"
import db from "src/db/db.js"
import useLoading from 'src/hooks/useLoading.jsx'
import ItemDetail from "./ItemDetail"
import ItemNotFound from "../NotFound/ItemNotFound"


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const { cargando, mostrarCargando, ocultarCargando} = useLoading()
  const { id } = useParams()

  const getProduct = async () =>{
    try {
      mostrarCargando()
      const docRef = doc(db, "productos", id)
      const dataDb = await getDoc(docRef)
      const data = { id: dataDb.id, ...dataDb.data()}
      setProducto(data)      
    } catch (error) {
      console.log("error",error)
    }finally { 
      ocultarCargando()   
    }
  }

  useEffect( () => {
    getProduct()
  }, [id])
  
  const pantallaDeCarga = <div className="h-[calc(100vh-74px)] text-gray-700 text-base flex justify-center items-center p-6">
    <ThreeDots stroke="var(--blue-Ecommerce)"  />
    </div>

  return (
    <>
      {
        cargando ? pantallaDeCarga : 
        producto.hasOwnProperty('nombre') ? <ItemDetail producto={producto}/> : <ItemNotFound/>
      }
    </>
  )
}

export default ItemDetailContainer