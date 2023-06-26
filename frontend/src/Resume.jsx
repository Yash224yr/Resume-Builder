import React from 'react'
import Userdetails from './Userdetails'
import Template from './Template'

function Resume() {
  return (
    <div className='resume' >
        <div className='resume-edit' >
            <Userdetails/>
        </div>
        <div className='resume-template' >
          <Template></Template>
        </div>
    </div>       
  )
}

export default Resume