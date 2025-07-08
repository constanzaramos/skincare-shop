import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartView from '../CartView/CartView'
import EmptyCart from '../EmptyCart'
const CartContainer = () => {
    const {cart} = useContext(CartContext)
  return (
    <>
        {
            !cart.length ? <EmptyCart/> : <CartView/>
        }
    </>
  )
}

export default CartContainer