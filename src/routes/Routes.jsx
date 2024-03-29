import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import Dashboard from '../layouts/Dashboard'
import { getCar } from '../api/cars'
import AddCar from '../pages/Dashboard/Host/AddCar'
import MyListing from '../pages/Dashboard/Host/MyListing'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <RoomDetails />,
        loader: ({ params }) => getCar(params.id)
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'add-car',
        element: <AddCar />
      },
      {
        path: 'my-listings',
        element: <MyListing />
      },
      {
        path: 'manage-users',
        element: <ManageUsers />
      },
    ]

  }
])
