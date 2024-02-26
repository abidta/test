import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import './App.css'
import { rootLoader } from './routes/loaders'

const router = createBrowserRouter([
  { path:'/',
    element: <Root />,
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
