import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    const productInCart = cart.find((item) => item.id === product.id)

    if (productInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity
          }
        }
        return item
      })
      setCart(newCart)
    } else {
      setCart([...cart, { ...product, quantity: quantity }])
    }
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id)
    setCart(newCart)
  }

  const getTotalItems = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}