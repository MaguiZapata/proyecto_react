import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [product,setProduct] = useState({}) 
    const {id}= useParams ()

    useEffect(() => {
        fetch(`./../productos.json`)
        .then(res=>res.json())
        .then(res=>{ 
            id ? setProduct(res.find(p=>p.id === parseInt(id))) : setProduct({})
            
        }) //setProduct
        .catch(error=>console.error(error))

        
    }, [id])
    
    console.log(product);

  return (
    <>
      <h2>ItemDetailContainer</h2>
      <ItemDetail product={product} />
    </>
    

  )
}

export default ItemDetailContainer