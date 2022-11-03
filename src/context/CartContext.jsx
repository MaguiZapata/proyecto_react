import React, { createContext,  useState } from "react";

export const CartContext = createContext()


function UseCartContext({ children }) {

  const [cartList, setCartList] = useState([])
  const guardarItem = (newItem) => {
    const itemIndex = cartList.findIndex(cart => cart.item.id === newItem.item.id)

    if(itemIndex === -1){
      
      setCartList([...cartList,newItem])
      
    }else{
      const itemQty = cartList[itemIndex].itemQty + newItem.itemQty
      const oldCartList = cartList.filter(oldItem => oldItem.item.id !== newItem.item.id)
      setCartList([...oldCartList, {item: newItem.item , itemQty: itemQty}])
    }

  }

  //remove Item from cart 
  const eliminarItem=(oldItem)=>{
    const newItemList = cartList.filter(item=> item.item.id !== oldItem.item.id)
    setCartList(newItemList)
  }

  //total 
  const total=()=>{
    return cartList.reduce((previousValue, currentValue)=>(previousValue + (currentValue.itemQty*currentValue.item.precio)),0)
  }


  //clean cart
  const limpiarCart= ()=>{
    setCartList([])
  }


  return (
    <CartContext.Provider
      value={{ 
        cartList,
        guardarItem, 
        eliminarItem, 
        total, 
        limpiarCart,
        cartLength:cartList.length
        }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default UseCartContext