import React from 'react'
import HomePage from './routes/homePage/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import ListPage from './routes/listPage/ListPage';
import Layout from './routes/layout/Layout';
import SinglePage from './routes/singlePage/SinglePage';
import Login from './routes/login/Login';
import ProfilePage from './routes/profile/ProfilePage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/list',
        element: <ListPage />
      },
      {
        path: '/:id',
        element: <SinglePage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
    ],
    errorElement: <NotFound />,
  },


]);

const App = () => {
  return (

  
      <RouterProvider router={router} />
  

  )
}

export default App