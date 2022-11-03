import React,{useState,useContext} from 'react'
import { CartContext } from '../../../context/CartContext'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import Swal from 'sweetalert2'


const estadoIncial ={
  nombre:'',
  email:'',
  direccion:''
}
function CarritoFormulario() {
  const {cartList,total,limpiarCart,cartLength}= useContext(CartContext)  
  const [comprador, setComprador] = useState(estadoIncial)
  const orden = {comprador, item:cartList, total: `$${total()}`}
  const [ordenId,setOrdenId]=useState('')
  
  const handlerChange = (evt)=>{
    evt.preventDefault()
      setComprador({
          ...comprador,
          [evt.target.name]: evt.target.value,
      })
  }
  const handlerSubmit=(evt)=>{
    
    evt.preventDefault()
    if (cartLength===undefined || cartLength===0) {
      Swal.fire({
        icon: 'error',
        title: 'El carrito esta vacío',
      })

    } else {
      evt.preventDefault()
        const db = getFirestore()
        const ordenesCollection = collection(db,'ordenes')
        addDoc(ordenesCollection,orden)
        .then(
          Swal.fire({
            icon: 'success',
            title: 'Compra realizada, muchas gracias!',
          })
        )
        .catch(err=>console.log(err))
        .finally(()=>limpiarCart())

      
      setComprador(estadoIncial)
      
    }
    
  }

  return (

      <form onSubmit={handlerSubmit}  onChange={handlerChange}>
        <input 
            type='text'
            placeholder='Nombre' 
            name='nombre'
            defaultValue={comprador.nombre}
        />
        <input 
            type='email' 
            placeholder='E-mail' 
            name='email'
            defaultValue={comprador.email}
        />
        <input 
            type='text' 
            placeholder='Dirección' 
            name='direccion'
            defaultValue={comprador.direccion}
        />
          <button className='btn'>Realizar compra</button>
      </form>
  )
}

export default CarritoFormulario