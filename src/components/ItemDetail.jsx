import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
  return (
    <div style={{ textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Detalle de {detalle.name} </h1>
      <img src={detalle.images} alt={detalle.name} />
      <p>{detalle.description} </p>
      <p>${detalle.price} </p>
      <p>Stock: {detalle.stock} </p>
      <Link to='/' className='btn btn-secondary'>Volver al inicio</Link>
    </div>
  )
}

export default ItemDetail