import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {

  return (
    <div>
      <NavBar />

      <ItemListContainer 
        greeting={"Bienvenidos"}
        />

      <ItemDetailContainer />
      
    </div>
  )

}

export default App
