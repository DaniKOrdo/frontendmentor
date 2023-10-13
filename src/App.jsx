import Header from "./components/Header"
import Gallery from "./components/Gallery"
// import InfoProduct from "./components/InfoProduct"

export default function App() {

  return (
    <div >
      <Header />
      <main className="grid content-center grid-cols-2">
        <Gallery />
        {/* <InfoProduct /> */}
      </main>
    </div>
  )
}
