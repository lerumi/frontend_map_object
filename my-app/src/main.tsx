import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputField from './components/InputField.tsx'
import './index.css'
import App from './App.tsx'
import StartPage from './test.tsx'
import {HomePage} from './pages/HomePage.tsx'
import {TagList} from './pages/Tags.tsx'
import {OneTagPage} from './pages/OneTagPage.tsx'
import {ROUTES} from './Routes.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/tags',
    element: <TagList />
  },
  {
    path:'/objects',
    element: <StartPage />
  },
  {
    path:`${ROUTES.TAG}/:id`,
    element: <OneTagPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
