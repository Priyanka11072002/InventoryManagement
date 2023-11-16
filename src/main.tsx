import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-redux'
import {inventory} from './redux/store/inventoryStore.ts'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { createProductApi } from './redux/store/apiSlice.tsx'
import { fetchProductApi } from './redux/api.tsx'
import { fakeapi } from './redux/fakeapi.tsx'
import { store } from './app/store.ts'
import { categoryApi, product } from './features/categories/categorySlice.tsx'
import { productapi } from './reduxtoolkit/apislice.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />  
    </Provider>
 </React.StrictMode>,
)
