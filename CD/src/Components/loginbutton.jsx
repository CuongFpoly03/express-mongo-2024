/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
const loginbutton = () => {
  return (
    <div>
        <ul>
            <li>
                <Link className="text-white float-right border-2 p-2 m-2 rounded border-solid border-blue-800 bg-blue-800" to="/login">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default loginbutton