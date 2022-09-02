import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './Store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /* The whole global state of your app is stored in an object tree inside a single store. \
  The only way to change the state tree is to create an action, an object describing what happened, 
  and dispatch it to the store. */
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
