import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"

import Home from "./component/Home/Home"
import Main from "./component/Main/Main"
import Login from "./component/Login/Login"

function App() {
  

  return (
    <>
        <BrowserRouter>

          <Navbar/>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/signup" element={<Login/>} />
          </Routes>

        

        </BrowserRouter>
    </>
  )
}

export default App
