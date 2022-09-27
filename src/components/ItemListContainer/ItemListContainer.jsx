import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer(props) {
       const {saludo}=props
      return (
        <div>
            <h2>{saludo}</h2>
           
        </div>
    )
}

export default ItemListContainer