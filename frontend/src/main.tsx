import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { reduxStore } from './redux/store.ts'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Provider store={reduxStore}>
      <ThemeProvider><App /></ThemeProvider>
      
    </Provider>
  // </React.StrictMode>
)
