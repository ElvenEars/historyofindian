import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import Header from './сomponents/Header/Header'
import Footer from './сomponents/Footer/Footer'
import Routers from './сomponents/Routers/Routers.jsx'
import { BrowserRouter } from 'react-router-dom'

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routers state = {props.state}/>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
