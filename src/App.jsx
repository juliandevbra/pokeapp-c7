import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import ErrorBoundary from './Clase 26/ErrorBoundary'
import Navbar from './Components/Navbar'
import { usePokeStates } from './Context/Context'
import Favs from './Pages/Favs'
import Home from './Pages/Home'
import PokeDetail from './Pages/PokeDetail'


function App() {

  const {themeState} = usePokeStates()

  return (
    <div className={themeState.theme ? 'App' : 'App-dark'} style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
        {/* <Toast></Toast> */}
      <h1>Bienvenidos a la PokeApp</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/poke/:name' element={<ErrorBoundary><PokeDetail/></ErrorBoundary>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
