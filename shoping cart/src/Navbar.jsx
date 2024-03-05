// npm i react-router-dom
//Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<nav class="navbar">
        <h1>ShopMe</h1>
        <div class="navbar-links">
            <Link to="/Home"><p class="navbar-link"><a href="">Home</a></p></Link>
           <Link to="/collection"> <p class="navbar-link"><a href="">Collection</a></p></Link>
            <Link to="/Contact"><p class="navbar-link"><a href="">Contact</a></p></Link>
        </div>
        
        <div class="navbar-menu-toggle">
            <i class="fa-solid fa-bars"></i>
        </div>
    </nav>

    </>
    
  )
}