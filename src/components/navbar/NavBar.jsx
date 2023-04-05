import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../asyncMock'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {

  const [itemsMenu, setItemsMenu] = useState([])

  useEffect(()=>{
    getCategories().then(response=>{
      setItemsMenu(response)
    }).catch(err=>console.log(err))
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      {itemsMenu.map(item=>
                          <li className="nav-item"><Link to={`/category/${item}`}  className="nav-link text-uppercase" aria-current="page" >{item}</Link></li>
                      )}
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    </div>
  )
}

export default NavBar
