import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartView from '../CartView/CartView'
import EmpyCart from '../EmptyCart'
const CartContainer = () => {
    const {cart} = useContext(CartContext)
  return (
    <>
        {
            !cart.length ? <EmpyCart/> : <CartView/>
        }
    </>
  )
}

export default CartContainer