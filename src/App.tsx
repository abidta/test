import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import './App.css'
import { rootLoader } from './routes/pathConstants'

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: rootLoader,
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
