import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import {getFirestore,doc,getDoc} from 'firebase/firestore'

function ItemDetailContainer() {
    const [product,setProduct] = useState({}) 
    const [loading,setLoading] = useState(true)
    const {id}= useParams()

    useEffect(() => {
      const queryDatabase = getFirestore ()
      const queryDoc = doc(queryDatabase, 'productos', id)
      getDoc(queryDoc)
      .then(res => setProduct({id:res.id, ...res.data()}))
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=> {
        setLoading(false)
      })
  }, [id])
    
  return (
    <>
      <h2>DETALLES DEL PRODUCTO</h2>

      {loading && <Spinner/> }
      { !loading &&
      <ItemDetail product={product}/>
      
      }
    
    </>
    

  )
}

export default ItemDetailContainer