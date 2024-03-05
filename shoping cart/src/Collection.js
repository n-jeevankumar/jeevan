import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css'; // Import CSS file for styling

const Collection = () => {
  return (
    <>
      <div className="navbar">
        <div className="image-container">
          <Link to="/Card">
            <img src="https://cdn.shopify.com/s/files/1/1762/5129/files/salawr-kameez-indian-women.jpg?v=1647954169" width="250" height="300" alt="Women" />
            <br></br>
            <button className="header-button">WOMEN</button>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Man">
            <img src="https://i.pinimg.com/736x/18/3f/dc/183fdc73e065cb73a0f7eb39c24c19ed.jpg" width="250" height="300" alt="Men" />
            <br></br>
            <button className="header-button">MEN</button>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Kids">
            <img src="https://img.freepik.com/free-photo/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept_155003-20308.jpg" width="250" height="300" alt="Kids" />
            <br></br>
            <button className="header-button">KIDS</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Collection;
