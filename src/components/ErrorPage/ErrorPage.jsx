import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h2>Página no encontrada</h2>
        <Link to='/'>Volver al inicio</Link>
    </div>
  )
}

export default ErrorPage