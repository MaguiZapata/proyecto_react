import React from 'react'
import Item from './Item/Item'

function ItemList(props) {
    const {products}= props
  return (
    <div>
        <h3>ItemList</h3>
        {products.map(p=>
            <Item item= {p} key= {p.id}/>
        )}
    </div>
   
  )
}

export default ItemList