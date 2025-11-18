import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../components/NavBar'
import AppRoutes from '../routes/AppRoutes'
import { UserProvider } from '../context/usercontext'
import MyThemeProvider from '../context/MyThemeContext'


function App() {
return (
  <>
<UserProvider>
<MyThemeProvider>
  <NavBar />
<AppRoutes />
</MyThemeProvider>
</UserProvider>
</>
)
} // ++ Create a Footer component as well and add under AppRoutes

export default App
