import NavBar from './components/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'



function App() {

  return (
    <CartContextProvider>
      <NavBar />
  	  <Outlet />
    </CartContextProvider>
  )

}

export default App
