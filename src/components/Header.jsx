import { useState } from 'react'
import Cart from './Cart'
import { useCart } from '../hooks/useCart'

import Logo from '../assets/logo.svg'
import IconCart from '../assets/icon-cart.svg'
import IconMenu from '../assets/icon-menu.svg'
import Avatar from '../assets/image-avatar.png'

export default function Header() {
  const [showCart, setShowCart] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <nav className="relative mx-auto px-2 pb-8 lg:mx-6 border-b-[1px]">
      <div className="flex items-center justify-between h-16">

        <div className="inset-y-0 left-0 flex items-center lg:hidden">
          <button className="inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
            <img src={IconMenu} alt="icon menu" />
          </button>
        </div>

        <div className="flex items-center justify-center lg:items-stretch lg:justify-start">
          <span className="flex items-center ml-8 text-4xl font-bold lg:ml-0">
            <img src={Logo} alt="icon cart" />
          </span>
          <div className="hidden lg:ml-6 lg:block">
            <div className="flex px-3 space-x-8 font-medium text-gray-500 text-md">
              <a href="#" className="hover:text-gray-800 group">
                Collections <span className="w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="hover:text-gray-800 group">
                Men <span className="w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="hover:text-gray-800 group">
                Women <span className="w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="hover:text-gray-800 group">
                About <span className="w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="hover:text-gray-800 group">
                Contact <span className="w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
          <button className="relative p-6 text-gray-500 hover:text-gray-600" onClick={() => setShowCart(!showCart)}>
            {getTotalItems() > 0 && (
              <span className="absolute inline-flex items-center justify-center w-6 h-5 p-2 text-xs font-bold text-white bg-orange-400 rounded-full right-3 top-3">{getTotalItems()}</span>
            )}
            <img src={IconCart} alt="icon cart" />
          </button>

          <Cart showCart={showCart} />

          <div className="ml-3">
            <button className="flex rounded-full hover:ring-2 hover:ring-orange-400">
              <img className="h-12 rounded-full" src={Avatar} alt="profile picture" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
