import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Detail() {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [user , setuser] = useState("")


    function handlerget(){
        axios
        .get('http://localhost:3000/details')
        .then((response) => {
            setuser(response.data)
            console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function handlerUpdate(e) {
        e.preventDefault();
        axios
          .post(
            "http://localhost:3000/update",
            {
              firstname: firstname,
              lastname: lastname,
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
          handlerget()
      }
      

    return (
        <div className='detail'>
            <div className='details'>
                <form onSubmit={handlerUpdate} >
                    <input type="text" placeholder='Enter Your First Name' value={firstname} onChange={(e) => { setFirstName(e.target.value) }} />
                    <input type="text" placeholder='Enter Your Last Name' value={lastname} onChange={(e) => { setLastName(e.target.value) }} />
                    <button type='submit' > Submit </button>
                </form>
            </div>
        </div>
    )
}

export default Detail