import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { persistor,store } from './redux/store'
import { Provider } from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistGate loading={"loading"} persistor={persistor}>
     <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
)
