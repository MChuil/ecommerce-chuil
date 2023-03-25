import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer 
        greeting={"Bienvenidos"}
        />
    </div>
  )

}

export default App
