import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import "./ItemListContainer.css"



function ItemListContainer(props) {
    const {subtitulo}=props
    const [prodList,setProdList] = useState([]) 
    const {categoria}= useParams ()

    useEffect(() => {
        fetch('./../productos.json')
        .then(res=>res.json())
        .then(res=>{
            categoria ? setProdList(res.filter(p=> p.categoria === categoria)) : setProdList(res)
        }) //setProduct
        .catch(error=>console.error(error))

        
    }, [categoria])


    return (
        <div>
            <h2>{subtitulo}</h2>
            <div className='contenido' >
            <ItemList products={prodList}/>
            </div>
        </div>
    )
}

export default ItemListContainer
