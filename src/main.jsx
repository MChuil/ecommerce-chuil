import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
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
      }
    ]
  },
  {
    path:'*',
    element: <Navigate to='/' />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router = {router}
    />
  </React.StrictMode>,
)
