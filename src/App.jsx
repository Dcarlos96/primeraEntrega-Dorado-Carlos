
import './App.css'
import ItemlistContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cards from './components/Cards'

function App() {
  

  return (
    <>
      <NavBar/>
      <ItemlistContainer mensaje= 'Bienvenidos a Mundo Futbol' />
      <Cards/>
    </>
  )
}

export default App
