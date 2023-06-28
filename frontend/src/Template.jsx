import React, { useContext } from 'react';
import { ResumeContext } from './App';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import DownloadIcon from '@mui/icons-material/Download';

function Template() {
  const { fullname, title, useremail, number, city, about, skill, skillist, degree, school, graduationYear, jobTitle, font, color, projectlist } = useContext(ResumeContext);

  function downloadPDF() {
    const capture = document.querySelector('.all-detail');

    html2canvas(capture, { dpi: 300, scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const imgProps = doc.getImageProperties(imgData);
        const aspectRatio = imgProps.width / imgProps.height;
        const width = doc.internal.pageSize.getWidth() - 20;
        const height = width / aspectRatio;

        doc.addImage(imgData, 'PNG', 10, 10, width, height);
        doc.save('resume.pdf');
      });
  }

  return (
    <div className='template'>
      <div className='all-detail'>
        <div className='info'>
          <div className='name-title'>
            <h1 style={{ fontFamily: font, color: color ? color : "black" }}>{fullname}</h1>
            <h3>{title}</h3>
          </div>
          <div className='contact'>
            <p>{useremail}</p>
            <p>{number}</p>
            <p>{city}</p>
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
                  projectlist.map((list , index)=>{
                      const value = list.split(":")
                      return(
                        <div className='template-project' key={index} >
                            <h2>{value[0]}</h2>
                            <p>{value[1]}</p>
                            <a href={value[2]}>Visit</a>
                        </div>
                      )
                  })
                }
          </div>
        </div>

      </div>
      <div className='download' >
        <button onClick={downloadPDF}><DownloadIcon /></button>
      </div>
    </div>
  );
}

export default Template;
