import React from "react"
import './index.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"


function App() {
  

  return (
    <>
    <Nav />
    <Sidebar />
    <Recommended />
    <Products />
    
  
    </>
  )
}

export default App
