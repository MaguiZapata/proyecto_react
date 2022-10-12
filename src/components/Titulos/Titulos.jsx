import React from 'react'

const Titulos = (props) => {
    console.log(props)
  return (
    <>
    <h3> {props.titulo}</h3>
    <h4> {props.subtitulo}</h4>
    </>
  )
  
}

export default Titulos