import React, { useContext, useEffect, useState } from 'react'
import { ResumeContext } from './App'
import customize from "./images/customize.png"
import { Link } from 'react-router-dom'
import Resume from "./images/Resume.png"

function Switch() {

  const { change, setChange } = useContext(ResumeContext)


  useEffect(() => {
    setChange("edit")
  }, [])

  function handlerChange(compo) {
    setChange(compo)
  }

  console.log(change)

  return (
    <div className='customize' >

      <Link onClick={() => { handlerChange("edit") }}  >
        <img src={Resume} alt="" />
      </Link>z

      <Link onClick={() => { handlerChange("customize") }}  >
        <img src={customize} alt="" />
      </Link>

    </div>
  )
}

export default Switch