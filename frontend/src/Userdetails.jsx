import React, { useContext, useState } from 'react';
import { ResumeContext } from './App';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LaunchIcon from '@mui/icons-material/Launch';

function Userdetails() {


  const [edit, setEdit] = useState(false)
  const [index, setIndex] = useState("")
  const [projectdetail, setProjectdetail] = useState("")
  const [projectname, setProjectname] = useState("")
  const [projectlink, setProjectlink] = useState("")
  const [editproject, seteditproject] = useState(false)
  const [projectindex, setProjectIndex] = useState("")
  const [interest, setInterest] = useState("")
  const [interestedit , setInterestEdit] = useState(false)
  const [interestindex , setInterestIndex] = useState("")




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
    skill, setSkill,
    skillist, setSkillist,
    projectlist, setProjectlist,
    interestlist, setInterestList,
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
          skillist: skillist,
          projectlist: projectlist,
          interestlist : interestlist,
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


  function handlersave(e) {
    e.preventDefault()

    if (skill.length > 0 && edit === false) {
      setSkillist([...skillist, skill])
      setSkill("")
    }
    else {


      const updatedSkillList = skillist.map((list, idx) => {
        if (idx === index) {
          return skill;
        }
        return list;
      });
      setSkillist(updatedSkillList);
      setEdit(!edit)
      setSkill("")
    }

  }


  function handlerEdit(list, index) {
    setSkill(list)
    setEdit(!edit)
    setIndex(index)
  }

  function handlerdelete(index) {

    setSkillist(
      skillist.filter((list, ind) => {
        return ind !== index
      })
    )
  }

  function handlersaveproject(e) {
    e.preventDefault();

    if (projectname.length > 0 && editproject === false) {
      setProjectlist([...projectlist, projectname + " : " + projectdetail + " : " + projectlink]);
      setProjectname("");
      setProjectdetail("");
      setProjectlink("");
    } else {
      projectlist[projectindex] = projectname + " : " + projectdetail + " : " + projectlink
      setProjectname("");
      setProjectdetail("");
      setProjectlink("");
      seteditproject(!editproject);
    }
  }

  function handlerprojectedit(value1, value2, value3, index) {
    setProjectname(value1);
    setProjectdetail(value2);
    setProjectlink(value3);
    setProjectIndex(index);
    seteditproject(!editproject);
  }



  function handlerprojectdelete(index) {
    setProjectlist(
      projectlist.filter((list, ind) => {
        return ind !== index
      })
    )
  }


  function handlersaveinterest(e) {
    e.preventDefault()
    if (interest.length > 0 &&  interestedit === false) {
      setInterestList([...interestlist, interest])
     setInterest("")
    } else {


      const updatedinterestList = interestlist.map((list, idx) => {
        if (idx === interestindex) {
          return interest;
        }
        return list;
      });
      setInterestList(updatedinterestList)
      setInterest("")
      setInterestEdit(!interestedit)
    }
  }

  function handlerinterestedit(list , index){
    setInterest(list)
    setInterestEdit(!interestedit)
    setInterestIndex(index)
  }


  function handlerinterestdelete(index){
    setInterestList(
      interestlist.filter((list , ind)=>{
          return ind !== index
      })
    )
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
        setSkillist(response.data.skillist)
        setProjectlist(response.data.projectlist)
        setInterestList(response.data.interestlist)
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
        <button className='save-btn' onClick={(e) => { handlersave(e) }} >Save</button>
        <ul className='skillset' >
          {

            skillist &&

            skillist.map((list, index) => {
              return (
                <li key={index}>
                  {list}
                  <div>  <EditIcon onClick={() => { handlerEdit(list, index) }} ></EditIcon>
                    <DeleteIcon onClick={() => { handlerdelete(index) }}></DeleteIcon></div>
                </li>
              );
            })}
        </ul>






        <h2>Education</h2>
        <input type="text" placeholder="Enter Your Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
        <input type="text" placeholder="Enter Your School/University" value={school} onChange={(e) => setSchool(e.target.value)} />
        <input type="text" placeholder="Enter Your Graduation Year" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />

        <h2>Experience</h2>
        <input type="text" placeholder="Enter Your Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        <input type="text" placeholder="Enter Your Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type="text" placeholder="Enter Your Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />

        <h2>Projects</h2>

        <input type="text" placeholder='Enter Project Name' value={projectname} onChange={(e) => { setProjectname(e.target.value) }} />
        <input type="text" placeholder='Enter Project Detail ' value={projectdetail} onChange={(e) => { setProjectdetail(e.target.value) }} />
        <input type="url" placeholder='Enter Project Link' value={projectlink} onChange={(e) => { setProjectlink(e.target.value) }} />
        <button className='save-btn' onClick={(e) => { handlersaveproject(e) }} >Save</button>

        {
          projectlist.map((list, index) => {
            const value = list.split(":")
            return (
              <div className='project-detail' key={index} >
                <h1>{value[0] + ":"}</h1>
                <div className='project-link' >
                  <p>{value[1]}</p>
                  <a href={value[2]} target='_blank' ><LaunchIcon /></a>
                </div>
                <div className='project-edit' >
                  <EditIcon onClick={() => { handlerprojectedit(value[0], value[1], value[2], index) }} ></EditIcon>
                  <DeleteIcon onClick={() => { handlerprojectdelete(index) }} ></DeleteIcon>
                </div>

              </div>
            )
          })
        }

        <h2>Interest</h2>
        <input type="text" placeholder='Enter Your Interest' value={interest} onChange={(e) => { setInterest(e.target.value) }} />
        <button className='save-btn' onClick={(e) => { handlersaveinterest(e) }} >Save</button>

        <ul className='interest-list'>
          {
            interestlist.map((list, index) => {
              return (
                <li key={index} >{list}
                  <div>  <EditIcon onClick={() => { handlerinterestedit(list, index) }} ></EditIcon>
                    <DeleteIcon onClick={() => { handlerinterestdelete(index) }}></DeleteIcon></div>
                </li>

              )
            })
          }
        </ul>




      </form>
      <div className='save'>
        <button onClick={() => { handlergetdata() }} >Load Online</button>
        <button onClick={() => { handlerUpdate() }} >Save Online</button>
      </div>
    </div>
  );
}

export default Userdetails;
