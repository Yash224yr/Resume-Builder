import React, { useContext, useState } from 'react'
import { ResumeContext } from './App'

function Template() {


    const {
        fullname,
        setFullname,
        title,
        setTitle,
        email,
        setEmail,
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
    } = useContext(ResumeContext);




    return (
        <div className='template'>
            <div className='all-detail' >
                <div className='info'>
                    <div className='name-title'>
                        <h1 style={{ fontFamily: font, color: color ? color : "black" }}>{fullname}</h1>
                        <h3>{title}</h3>
                        
                    </div>

                    <div className='contact' >
                        <p>{email}</p>
                        <p>{number}</p>
                        <p>{city}</p>
                        <div className='line'></div>
                    </div>
                    <div className='about'>
                            <p>{about}</p>
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
                </div>
            </div>
        </div >
    )
}

export default Template