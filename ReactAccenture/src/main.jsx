import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './components/NavBar'
import Posts from './components/Posts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Posts />
  </React.StrictMode>
)
