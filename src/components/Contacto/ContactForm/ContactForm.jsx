import React, {useState} from 'react'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import './ContactForm.css'
import Swal from 'sweetalert2'


const initialState ={
  nombre:'',
  txtConsulta:'',
  email:'',
} 
function resetInputs(){
  document.getElementById('nombreInput').value = ''
  document.getElementById('emailInput').value = ''
  document.getElementById('consultaInput').value = ''
}

function ContactForm() {
  const [consultor, setConsultor] = useState(initialState)
    const consulta = {consultor} 

    const handlerChange = (evt)=>{
        setConsultor({
            ...consultor,
            [evt.target.name]: evt.target.value,
        })
    }

    const handlerSubmit=(evt)=>{
        evt.preventDefault()
        
        const db = getFirestore()        
        const consultasCollection = collection(db,'consultas')
        addDoc(consultasCollection,consulta)
        .catch(err=>console.log(err))
        .then(()=>{
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado!',
          })
          resetInputs()
        })
    
    }

  return (
  <div className='contact-container'>
  <h3>Si tenés dudas, escribinos!</h3>
    <form className='contact-form' onSubmit={handlerSubmit} onChange={handlerChange}>
          <input 
              type='text'
              placeholder='Nombre' 
              name='nombre'
              defaultValue={consultor.nombre}
              id="nombreInput"
              required
          />
          <input 
              type='email' 
              placeholder='E-mail' 
              name='email'
              id="emailInput"
              defaultValue={consultor.email}
          required />
          <textarea
              placeholder='Escribí aquí tu consulta' 
              name='txtConsulta'
              id="consultaInput"
              defaultValue={consultor.txtConsulta}
          required/>
          <button className='btn'>Enviar</button>
      </form>
  </div>

  )
}



export default ContactForm