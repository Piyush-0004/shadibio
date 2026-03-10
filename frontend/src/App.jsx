/* import './App.css'

function App() {
  
  return (
    <>
   
   </>
  )
}

export default App */


import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import BiodataForm from "./pages/BiodataForm"
import Auth from "./pages/Auth"


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/create-biodata" element={<BiodataForm/>} />

        <Route path="/login" element={<Auth />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App   
