import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {DarkLightModeProvider} from 'react-light-dark-mode'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkLightModeProvider>
        <App />
      </DarkLightModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
