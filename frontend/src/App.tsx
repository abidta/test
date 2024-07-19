import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@/routes'
import { ErrorPage, Root } from '@/pages'
import './App.css'
import { rootLoader } from '@/routes/loaders'

const router = createBrowserRouter([
  {
    path: '/',
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
