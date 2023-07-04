import React, { useContext, useEffect, useState } from 'react'
import { ResumeContext } from './App'

function Switch() {

    const {change , setChange} = useContext(ResumeContext)


    useEffect(()=>{
    setChange("edit")
    },[])

    function handlerChange(compo){
        setChange(compo)
    }

    console.log(change)

  return (
    <div className='customize' >
        <button  onClick={()=>{handlerChange("edit")}}  >Edit</button>
        <button  onClick={()=>{handlerChange("customize")}}>Customize</button>
    </div>
  )
}

export default Switch