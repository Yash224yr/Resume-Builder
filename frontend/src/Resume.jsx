import React, { useContext } from 'react'
import Userdetails from './Userdetails'
import Template from './Template'
import Switch from './Switch'
import { ResumeContext } from './App'
import Customize from './Customize'



function Resume() {

  const {change, setChange} = useContext(ResumeContext)


  return (
    <div className='resume' >
        <div className='resume-cswitch' >
            <Switch/>
        </div>
        <div className='resume-edit' >
            {
              change === "edit" ?   (<Userdetails/>)  : (<Customize/>)
            }
        </div>
        <div className='resume-template' >
          <Template></Template>
        </div>
    </div>       
  )
}

export default Resume