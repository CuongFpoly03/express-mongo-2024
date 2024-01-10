/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
const NavAdmin = () => {
  return (
    <div>
        <ul>
            <li>
                <Link className="text-white float-right border-2 p-2 m-2 rounded border-solid border-blue-800 bg-blue-800" to="/logout">Logout</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavAdmin