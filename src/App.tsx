import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import './App.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routes,
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
