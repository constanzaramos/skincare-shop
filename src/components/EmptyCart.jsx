import React from 'react'
import { Link } from 'react-router-dom'
import './emptyCart.scss'

const EmptyCart = () => {
  return (
    <div className="empty-cart">
        <h2>Tu carrito esta vacío</h2>
        <h3>Continua revisando nuestros productos</h3>
        <Link className="btn-inicio" to='/'>Ir al inicio</Link>
    </div>
  )
}

export default EmptyCart