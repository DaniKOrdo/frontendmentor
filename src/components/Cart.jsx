import { USDollarPrice } from '../utils/format'

import IconDelete from '../assets/icon-delete.svg'
import { useCart } from '../hooks/useCart'

export default function Cart({ showCart }) {
  const { cart, getTotalItems, removeFromCart } = useCart()

  if (showCart) {
    return (
      <div className="absolute md:right-0 right-3 z-10 flex flex-col items-center w-[95%] bg-white rounded-lg md:w-96 md:top-20 top-[5.5rem] drop-shadow-2xl shadow-neutral-700">
        <span className="mt-2 font-bold border-b-[1px] w-full p-3 px-5">Cart</span>
        <div className="flex items-center w-full">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex flex-col w-full gap-6 p-6">
                <div className="flex justify-between">
                  <div>
                    <img src={item.image} alt={item.name} className="rounded-md w-14" />
                  </div>
                  <div className="flex flex-col gap-1 ml-4 text-gray-500">
                    <span>{item.name}</span>
                    <span>
                      {USDollarPrice(item.price)} x {getTotalItems()}
                      <span className="px-2 font-bold text-black">
                        {USDollarPrice(getTotalItems() * item.price)}
                      </span>
                    </span>
                  </div>
                  <button className="w-4 ml-1 md:ml-8" >
                    <img src={IconDelete} alt="Icon Delete" onClick={() => removeFromCart(item)} />
                  </button>
                </div>

                <button className="flex items-center justify-center w-full py-4 text-white bg-orange-400 rounded-xl hover:bg-orange-300">
                  <span className="font-bold">Checkout</span>
                </button>
              </div>
            ))
          ) : (
            <span className="flex items-center justify-center w-full py-24 font-bold text-gray-400 ">Your cart is empty.</span>
          )}
        </div>
      </div>
    )
  }
}