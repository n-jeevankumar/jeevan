// npm i react-router-dom
//Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <ul>

        <li>
          <Link to="/Card">WOMEN </Link>
        </li>


      </ul>
    </>
  )
}