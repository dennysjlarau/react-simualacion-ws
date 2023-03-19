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

//[ ] Lista de tareas
//TODO Por hacer
//FIXME Arréglame
//BUG Error
//HACK Atajo
//XXX Revisar
//[ ] Hacer algo
//[x] Algo específico que he realizado  

//TODO Mantener la sesion de usuarios, ref: 212 0 
