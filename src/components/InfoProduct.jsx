import { useState } from 'react'

import { USDollarPrice } from '../utils/format'
import IconCart from '../assets/icon-cart-white.svg'
import IconPlus from '../assets/icon-plus.svg'
import IconMinus from '../assets/icon-minus.svg'
import { useCart } from '../hooks/useCart'

const product = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  price: 125.00,
  image: 'image-product-1-thumbnail.jpg'
}

export default function InfoProduct() {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleQuantity = (num) => {
    const newQuantity = quantity + num
    if (newQuantity < 1) return
    setQuantity(newQuantity)
  }

  return (
    <article className="flex flex-col justify-center p-8 md:px-16 md:py-20">
      <span className="py-5 font-bold tracking-widest text-orange-400">SNEAKER COMPANY</span>
      <h1 className="text-5xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="py-8 text-gray-500">
        These low-profile sneakers are you perfect casual wear
        companion. Featuring a durable rubber outer sole, they&apos;ll
        withstand everything the weather can offer.
      </p>

      <div className='flex items-center justify-between md:items-start md:flex-col'>
        <div className="flex items-center gap-5 text-3xl font-bold md:pb-1">
          <span>{USDollarPrice(125)}</span>
          <span className="py-[0.1rem] px-[0.6rem] text-base text-orange-400 bg-orange-100 rounded-md">50%</span>
        </div>
        <span className="text-xl font-bold text-gray-400 line-through md:text-base">{USDollarPrice(250)}</span>
      </div>

      <footer className="flex flex-col items-center gap-4 py-10 md:flex-row">
        <div className="flex items-center justify-between w-full px-4 bg-gray-100 rounded-md md:px-0 md:justify-center h-14 md:h-full md:w-auto">
          <button className="flex items-center justify-center w-12 h-full text-white rounded-md" onClick={() => handleQuantity(-1)}><img src={IconMinus} alt="icon minus" /></button>
          <span className="flex items-center justify-center w-12 font-bold ">{quantity}</span>
          <button className="flex items-center justify-center w-12 h-full text-white rounded-md" onClick={() => handleQuantity(1)}><img src={IconPlus} alt="icon plus" /></button>
        </div>
        <button className="flex items-center justify-center w-full gap-4 py-4 text-white bg-orange-400 rounded-xl hover:bg-orange-300 fill-white" onClick={() => addToCart(product, quantity)}>
          <img src={IconCart} alt="icon cart" className='w-5' />
          <span className='font-bold'>Add to cart</span>
        </button>
      </footer>
    </article>
  )
}