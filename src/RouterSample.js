import React, { useState,createContext } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { Home } from './pages/home'
import { Profile } from './pages/profile'
import { Contact } from './pages/contact'
import { Navbar } from './pages/navbar'

export const MyContext=createContext()

function RouterSample() {
    const [username,setUsername]=useState("Ridin")
  return (
    <div>
        <MyContext.Provider value={{username,setUsername}}>
      <Router>
        <Navbar/>
        <Routes>
            {/* <Route path='/' element={<Home username={username} setusername={setUsername}/>} /> */} 
             {/* the above code is for passing props and not using usecontext */}
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            {/* <Route path='/contact' element={<Contact/>} /> */}
            <Route path='/contact' Component={Contact} />
            <Route path='*' element={ <h1>404 page not found</h1> } />
        </Routes>
      </Router>
      </MyContext.Provider>
    </div>
  )
}

export default RouterSample
