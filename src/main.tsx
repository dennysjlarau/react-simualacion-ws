import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './SimulaWSApp'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'

import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
