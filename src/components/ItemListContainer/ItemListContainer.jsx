import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import "./ItemListContainer.css"



function ItemListContainer(props) {
    const {subtitulo}=props
    const [prodList,setProdList] = useState([]) 
    const {categoria}= useParams ()
console.log(typeof(categoria));

    useEffect(() => {
        fetch("./productos.json")
        .then(res=>res.json())
        .then(res=> setProdList(res)) //setProduct
        .catch(error=>console.error(error))
        

    }, [categoria])

    return (
        <div>
            <h2>{subtitulo}</h2>
            {categoria !== undefined ?
                <ItemList  products={prodList}/>
            :
            {const categoryProducts = prodList.filter(p=>p.categoria===categoria)
            }
            <ItemList  products={categoryProducts}/>
            }
        </div>
    )
}

export default ItemListContainer
