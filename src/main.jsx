import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './Clase 26/ErrorBoundary'
import Context from './Context/Context'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
      {/* <ErrorBoundary> */}
      <App />
      {/* </ErrorBoundary> */}
    </Context>
  </BrowserRouter>
)
