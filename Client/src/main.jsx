import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
)
