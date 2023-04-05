import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <div>
      <NavBar />

  	  <Outlet />

    </div>
  )

}

export default App
