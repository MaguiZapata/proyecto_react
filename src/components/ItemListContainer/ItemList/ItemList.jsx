import React from 'react'
import Item from './Item/Item'
import "./ItemList.css";

function ItemList(props) {
    const {products}= props
  return (
    <div className='todasLasTarjetas'>
        {products.map(p=>
            <Item item= {p} key= {p.id}/>
        )}
    </div>
  )
}

export default ItemList