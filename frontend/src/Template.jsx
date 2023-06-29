import React, { useContext } from 'react';
import { ResumeContext } from './App';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Template() {
  const { fullname, title, useremail, number, city, about, skill, skillist, degree, school, graduationYear, jobTitle, font, color, projectlist , interestlist } = useContext(ResumeContext);



  return (
    <div className='template'>
      <div className='all-detail'>
        <div className='info'>
          <div className='name-title'>
            <h1 style={{ fontFamily: font, color: color ? color : "black" }}>{fullname}</h1>
            <h3>{title}</h3>
          </div>
          <div className='contact'>
            {
              useremail &&
              <p> <EmailIcon></EmailIcon> {useremail}</p>
            }
            {
              number &&
              <p> <CallIcon /> {number}</p>
            }
            {
              city && 
            <p><LocationOnIcon></LocationOnIcon>{city}</p>

            }
            <div className='line'></div>
          </div>
          <div className='about'>
            <p>{about}</p>
          </div>
          <div className='skill'>
            <h1>Skills</h1>
            <ul>
              {
                skillist.map((list, index) => {
                  return (
                    <li key={index} >{list}</li>
                  )
                })
              }
            </ul>

          </div>
          <div className='education'>
            <div className='education-title'>
              <h1>Education</h1>
            </div>
            <div className='degree'>
              <h3>{degree}</h3>
              <h3>{school}</h3>
              <h3>{graduationYear}</h3>
            </div>
          </div>
          {jobTitle && (
            <div className='experience'>
              <h1>Experience</h1>
            </div>
          )}
          <div className='projects' >
            <h1>Projects</h1>
            {
              projectlist.map((list, index) => {
                const value = list.split(":")
                return (
                  <div className='template-project' key={index} >
                    <h2>{value[0]}</h2>
                    <p>{"," + value[1]}</p>
                    <a href={value[2]} target='_blank'><OpenInNewIcon /></a>
                  </div>
                )
              })
            }
          </div>

            <div className='interest' >
                  <h1>Interest</h1>
                  <ul>
                  {
                    interestlist.map((list , index)=>{
                        return (
                          <li key={index} > {list}</li>
                        )
                    })
                  }
                  </ul>
                  
            </div>

        </div>

      </div>
    </div>
  );
}

export default Template;
