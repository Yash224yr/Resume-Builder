import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import { createContext, useState } from 'react';
export const Resumecontext = createContext(null)

function App() {

  const [check , setCheck] = useState(false)
  const [fullname , setFullname] = useState("")

  return (
    <Resumecontext.Provider value={{check, setCheck}} >
       <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} ></Route>
      </Routes>
    </BrowserRouter>
    </Resumecontext.Provider>
   
  );
}

export default App;
