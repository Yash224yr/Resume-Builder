import React, { useContext, useState } from 'react';
import { ResumeContext } from './App';
import axios from 'axios';

function Userdetails() {


  const [colors, setColors] = useState([
    {
      id: "red",
    },
    {
      id: "blue",
    },
    {
      id: "green",
    },
    {
      id: "yellow",
    },
    {
      id: "purple",
    },
    {
      id: "orange",
    },
    {
      id: "black"
    },
  ]);

  const [fonts, setFonts] = useState([
    {
      id: 'Open Sans',
    },
    {
      id: 'Playball',
    },
    {
      id: 'Lovers Quarrel'
    },
  ])





  const {
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
    about, setAbout,
    color, setColor,
    font, setFont,
    skill, setSkill
  } = useContext(ResumeContext);


  function handlersetColor(color) {
    setColor(color)
  }

  function handlersetfont(font) {
    setFont(font)
  }

  function handlerUpdate() {
    axios
      .post(
        "http://localhost:3000/update",
        {
          fullname: fullname,
          title: title,
          number: number,
          city: city,
          useremail: useremail,
          degree: degree,
          school: school,
          graduationYear: graduationYear,
          jobTitle: jobTitle,
          company: company,
          jobDescription: jobDescription,
          about: about,
          color: color,
          font: font,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the token in the request headers
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }




  function handlergetdata() {
    const username = localStorage.getItem("username")
    axios
      .get(`http://localhost:3000/getdata?username=${username}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title)
        setFullname(response.data.fullname)
        setNumber(response.data.number)
        setCity(response.data.city)
        setuserEmail(response.data.useremail)
        setDegree(response.data.degree)
        setSchool(response.data.school)
        setGraduationYear(response.data.graduationYear)
        setJobTitle(response.data.jobTitle)
        setCompany(response.data.company)
        setJobDescription(response.data.jobDescription)
        setAbout(response.data.about)
        setColor(response.data.color)
        setFont(response.data.font)


      })
      .catch((err) => {
        console.log(err);
      });

  }



  return (
    <div className="userdetails">
      <form>
        <input type="text" placeholder="Enter Your Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        <div className='color-box'>

          {colors.map((color, index) => (
            <div
              key={index}
              className='color'
              style={{ backgroundColor: color.id }}
              onClick={() => { handlersetColor(color.id) }}
            ></div>

          ))}


        </div>

        <div className='font-box'>
          <h4>Select Font</h4>
          <ul>
            {fonts.map((font, index) => (
              <li key={index} onClick={() => { handlersetfont(font.id) }}>
                {font.id}
              </li>
            ))}
          </ul>
        </div>


        <input type="text" placeholder="Enter Your Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="email" placeholder="Enter Your Email" value={useremail} onChange={(e) => setuserEmail(e.target.value)} />
        <input type="number" placeholder="Enter Your Number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <input type="text" placeholder="Enter Your Location" value={city} onChange={(e) => setCity(e.target.value)} />

        <h2>About</h2>
        <input type="text" placeholder='Enter about yourself' value={about} onChange={(e) => { setAbout(e.target.value) }} />

        <h2>Skills</h2>

        <input type="text" placeholder='Enter about Skills' value={skill} onChange={(e) => { setSkill(e.target.value) }} />

     


        <h2>Education</h2>
        <input type="text" placeholder="Enter Your Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
        <input type="text" placeholder="Enter Your School/University" value={school} onChange={(e) => setSchool(e.target.value)} />
        <input type="text" placeholder="Enter Your Graduation Year" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />

        <h2>Experience</h2>
        <input type="text" placeholder="Enter Your Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        <input type="text" placeholder="Enter Your Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type="text" placeholder="Enter Your Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />

      </form>
      <div className='save'>
        <button onClick={() => { handlergetdata() }} >Load Online</button>
        <button onClick={() => { handlerUpdate() }} >Save Online</button>
      </div>
    </div>
  );
}

export default Userdetails;
