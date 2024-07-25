import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"

import Home from "./component/Home/Home"
import Main from "./component/Main/Main"
import Login from "./component/Login/Login"
import AIQuiz from "./Tabs/AIQUIZ/AIQuiz"
import MCQTest from "./Tabs/MCQTest/MCQTest"
import UserDashBoard from "./Tabs/UserDashBoard/UserDashBoard"
import VideoQuiz from "./Tabs/VideoQuiz/VideoQuiz"

function App() {
  

  return (
    <>
        <BrowserRouter>

          <Navbar/>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/main" element={<Main/>} />
               <Route path="/aiquiz" element={<AIQuiz/>}/>
               <Route path="/mcqtest" element={<MCQTest/>} />
               <Route path="/videoquiz" element={<VideoQuiz/>} />
               <Route path="/userdashboard" element={<UserDashBoard/>} />
            <Route/>
            <Route path="/signup" element={<Login/>} />
            
          </Routes>

        

        </BrowserRouter>
    </>
  )
}

export default App
