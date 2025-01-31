import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Profile from './components/Profile'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<><App/><Profile/></>,  // Profile page route
  },
  {
    path: '/Skills',
    element:<><App/><Skills/></>,  // Profile page route
  },
  {
    path: '/Projects',
    element:<><App/><Projects/></>,  // Profile page route
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
