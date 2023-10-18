import { useState } from 'react'
import Cart from './Cart'
import { useCart } from '../hooks/useCart'

import Logo from '../assets/logo.svg'
import IconCart from '../assets/icon-cart.svg'
import IconMenu from '../assets/icon-menu.svg'
import Avatar from '../assets/image-avatar.png'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const { getTotalItems } = useCart()

   return (
    <nav className="relative mx-auto md:px-2 px-6 md:pb-8 py-2 lg:mx-6 border-b-[1px]">
      <div className="flex items-center justify-between h-16">
        <div className="inset-y-0 left-0 flex items-center lg:hidden">
          <button className="inline-flex items-center justify-center ml-2 text-gray-400 hover:text-gray-500" onClick={() => setShowMenu(!showMenu)}>
            <img src={IconMenu} alt="icon menu" className="w-5" />
          </button>
        </div>

        <div className={`fixed inset-0 z-50 w-screen h-screen bg-black bg-opacity-75 transition-transform ${showMenu ? 'transform translate-x-0' : 'transform -translate-x-full bg-opacity-0'}`}>
          <div className="flex flex-col items-start h-screen gap-6 p-8 bg-white w-80">
            <button className="mb-8" onClick={() => setShowMenu(!showMenu)}>
              <img src="src/assets/icon-close.svg" alt="icon close" className="w-5" />
            </button>
            <a href="#" className="text-2xl font-bold">
              Collections
            </a>
            <a href="#" className="text-2xl font-bold">
              Men
            </a>
            <a href="#" className="text-2xl font-bold">
              Women
            </a>
            <a href="#" className="text-2xl font-bold">
              About
            </a>
            <a href="#" className="text-2xl font-bold">
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:items-stretch lg:justify-start">
          <span className="flex items-center text-4xl font-bold md:mr-4 md:ml-8 lg:ml-0">
            <img src={Logo} alt="sneakers logo" />
          </span>
          <div className="hidden lg:ml-6 lg:block">
            <div className="flex px-3 space-x-8 font-medium text-gray-500 text-md">
              <a href="#" className="relative hover:text-gray-800 group">
                Collections <span className="absolute w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="relative hover:text-gray-800 group">
                Men <span className="absolute w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="relative hover:text-gray-800 group">
                Women <span className="absolute w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="relative hover:text-gray-800 group">
                About <span className="absolute w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="relative hover:text-gray-800 group">
                Contact <span className="absolute w-full h-1 bg-orange-500 top-[72px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
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
              <img className="h-8 rounded-full md:h-12" src={Avatar} alt="profile picture" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
