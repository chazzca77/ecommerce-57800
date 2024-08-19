import { useState, useEffect } from 'react'
import { ThreeDots } from 'react-loading-icons'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import db from 'src/db/db.js'
import useLoading from 'src/hooks/useLoading'
import ItemList from './ItemList'

const ItemListContainer = ({ saludo } ) => {
  const [ productos, setPoductos] = useState([])
  const { cargando, mostrarCargando, ocultarCargando} = useLoading()
  const { categoryId } = useParams()

  const getProducts = async () =>{
    try {
      mostrarCargando()
      const productosRef = collection(db, "productos")
      const dataDb = await getDocs(productosRef)
      const data = dataDb.docs.map( (productDb) => {
        return { id: productDb.id, ...productDb.data()}
      })
      setPoductos(data)
    } catch (error) {
      console.log("error")
    }
  }

  const getProductsByCategory = async() => {
    try {
      const productosRef = collection(db, "productos")
      const q = query(productosRef, where("categoria","==", categoryId))
      const dataDb = await getDocs(q)
  
      const data = dataDb.docs.map( (productDb) => {
        return { id: productDb.id, ...productDb.data()}
      })
      setPoductos(data)      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( ()=>{
    if(categoryId){ 
      getProductsByCategory()
    }else{
      getProducts()
    }
    ocultarCargando()
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