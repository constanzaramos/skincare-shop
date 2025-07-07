import React from 'react'
import { Link } from 'react-router-dom'

const EmpyCart = () => {
  return (
    <div>
        <h2>Tu carrito esta vacio</h2>
        <h3>Continua revisando nuestros productos</h3>
        <Link className='btn btn-dark' to='/'>Ir al inicio</Link>
    </div>
  )
}

export default EmpyCart