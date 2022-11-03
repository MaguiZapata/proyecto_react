import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import "./ItemListContainer.css"
import Spinner from '../Spinner/Spinner'



function ItemListContainer(props) {
    const {subtitulo}=props
    const [prodList,setProdList] = useState([]) 
    const [loading,setLoading] = useState(true)
    const {categoria}= useParams ()

    useEffect(() => {
        setLoading(true)
        let db = getFirestore()
        let productosCollection = collection(db,'productos')
        
        getDocs(productosCollection)
        .then(resp=> 
            categoria ? 
            setProdList((resp.docs.map(prod=>prod.data())).filter(p=>p.categoria === categoria))
            :
            setProdList(resp.docs.map(prod=>prod.data())))
        .catch(error=>console.log(error))
        .finally(() => setLoading(false))



        
    }, [categoria])


    return (
        <div className='itemListContainer'>
            {
                categoria ===undefined?
            <h2>{subtitulo}</h2>
                :
            <h2>{categoria.toUpperCase()}</h2>

            }
            
            {loading && <Spinner/> }
            { !loading &&
            <ItemList products={prodList}/>
            }
        </div>
    )
}

export default ItemListContainer
