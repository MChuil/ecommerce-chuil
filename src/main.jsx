import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import NotFound from './components/NotFound';
import { initFirebase } from './firebase/config';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <NotFound/>,
    children:[
      {
        index: true,
        element: <ItemListContainer  greeting={"Bienvenidos"}/>
      },
      {
        path:'/category/:categoryId',
        element: <ItemListContainer />
      },
      {
        path:'/detail/:itemId',
        element: <ItemDetailContainer />
      },
      {
        path: '/cart',
        element: <CartContainer />
      }
    ]
  },
  // {
  //   path:'*',
  //   element: <Navigate to='/' />,
  // }
])


initFirebase()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider
        router = {router}
      />

  </React.StrictMode>,
)
