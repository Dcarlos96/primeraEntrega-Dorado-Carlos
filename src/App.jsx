
import './App.css'
import Error from './components/Error'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemlistContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemlistContainer mensaje= 'Bienvenidos a Mundo Futbol' />} />
        <Route path='/category/:type' element={<ItemlistContainer mensaje= 'Estas en' />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      
    </BrowserRouter>
  )
}
    

export default App
