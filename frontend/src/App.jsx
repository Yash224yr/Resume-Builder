import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Userdetails from './Userdetails';
import Resume from './Resume';

export const ResumeContext = createContext(null);

function App() {
  const [check, setCheck] = useState(false);
  const [fullname, setFullname] = useState('');
  const [title, setTitle] = useState('');
  const [useremail, setuserEmail] = useState('');
  const [number, setNumber] = useState('');
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [city, setCity] = useState('');
  const [about, setAbout] = useState("")
  const [color, setColor] = useState("")
  const [font , setFont] = useState("")
  const [skill, setSkill] = useState("")
  const [skillist , setSkillist] = useState([])

  return (
    <ResumeContext.Provider
      value={{
        check,
        setCheck,
        fullname,
        setFullname,
        title,
        setTitle,
        useremail,
        setuserEmail,
        city,
        setCity,
        number,
        setNumber,
        degree,
        setDegree,
        school,
        setSchool,
        graduationYear,
        setGraduationYear,
        jobTitle,
        setJobTitle,
        company,
        setCompany,
        jobDescription,
        setJobDescription,
        about , setAbout,
        color, setColor,
        font , setFont,
        skill , setSkill,
        skillist , setSkillist,
        
      }}

    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/userdetail' element={<Userdetails/>} ></Route>
          <Route path='/resume' element={<Resume/>}></Route>
        </Routes>
      </BrowserRouter>
    </ResumeContext.Provider>
  );
}

export default App;
