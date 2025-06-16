import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import banner from './assets/banner.png'

function App() {

  return (
    <>
      <NavBar />
      <section className='banner'>
        <img src= {banner} alt="banner image" />
      </section>
      <ItemListContainer greeting="¡Bienvenida a la tienda!" />
      
      
    </>
  )
}

export default App
