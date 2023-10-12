import IconCart from '../assets/icon-cart.svg'
import IconMenu from '../assets/icon-menu.svg'
import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <nav className="mx-auto px-2 pb-8 lg:mx-6 border-b-[1px]">
      <div className="relative flex h-16 items-center justify-between">

        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <button className="relative inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
            <img src={IconMenu} alt="icon menu"/>
          </button>
        </div>

        <div className="flex items-center justify-center lg:items-stretch lg:justify-start">
          <span className="flex items-center text-4xl font-bold ml-8 lg:ml-0">
            <img src={Logo} alt="icon cart"/>
          </span>
          <div className="hidden lg:ml-6 lg:block">
            <div className="flex space-x-4 text-md text-gray-500 font-medium">
              <a href="#" className="hover:text-gray-800 px-3 py-2">Collections</a>
              <a href="#" className="hover:text-gray-800 px-3 py-2">Men</a>
              <a href="#" className="hover:text-gray-800 px-3 py-2">Women</a>
              <a href="#" className="hover:text-gray-800 px-3 py-2">About</a>
              <a href="#" className="hover:text-gray-800 px-3 py-2">Contact</a>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
          <button className="relative p-6 text-gray-500 hover:text-gray-600">
            <img src={IconCart} alt="icon cart"/>
          </button>

          <div className="relative ml-3">
            <button className="relative flex rounded-full hover:ring-4 hover:ring-orange-400">
              <img className="h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
