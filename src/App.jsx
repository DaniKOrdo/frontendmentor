import Header from './components/Header'
import Gallery from './components/Gallery'
import InfoProduct from './components/InfoProduct'
import { CartProvider } from './context/cart'

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main className="grid content-center grid-cols-1 lg:grid-cols-2">
        <Gallery />
        <InfoProduct />
      </main>
    </CartProvider>
  )
}
