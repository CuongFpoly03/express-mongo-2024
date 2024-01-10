/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom"
import Logo from '../assets/imgs/logo.jpg'
const nav = () => {
  return (
    <ul className="bg-gray-400 p-3 w-full">
      <li  className="flex">
        <Link to='/'><img className="h-16 w-40 ml-8 rounded" src={Logo} alt="Logo" /></Link>

        <Link
          className="border-solid rounded border-2 border-white p-2 ml-16 m-3 bg-red-800 text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className="border-solid rounded border-2 border-white p-2 m-3 bg-red-800 text-white"
          to="/product"
        >
          Product
        </Link>
        <Link
          className="border-solid border-2 rounded border-white p-2 m-3 bg-red-800 text-white"
          to="/"
        >
          Contact
        </Link>
        <Link
          className="border-solid border-2 rounded border-white p-2 m-3 bg-red-800 text-white"
          to="/"
        >
          Hello@2024
        </Link>
      </li>
    </ul>
  );
};

export default nav;
