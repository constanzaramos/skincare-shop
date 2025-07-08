import React from 'react'
import { Link } from 'react-router-dom'
import '.errorPage.scss'
const ErrorPage = () => {
  return (
    <div className="error-page">
        <h2>Página no encontrada</h2>
        <Link to='/'>Volver al inicio</Link>
    </div>
  )
}

export default ErrorPage