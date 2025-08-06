import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewStory from './viewStory.jsx'
import Profile from './Profile.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/story/:id/:total',
      element: <ViewStory/>
    },
    {
      path: '/Profile',
      element: <Profile/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
