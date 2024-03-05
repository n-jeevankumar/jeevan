import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Home = () => {
  return (
    <>
      <div class="header">
        <div>
            <h1>Level up your style</h1>
            <p>With our stunning collections</p>
            <Link to="/Collection"><button class="header-button">Shop Now</button></Link>
        </div>
        <div>
            <img class="header-image" src="https://source.unsplash.com/random/200x200?sig=1/dress" />
        </div>
    </div>

    <div class="service">
        <div>
            <div>
                <h2>We Provide Best</h2>
                <h2>Customer Experience</h2>
            </div>
        <div>
        <p>We prioritize ensuring that our customers consistently enjoy the pinnacle of shopping experiences, characterized by seamless navigation, personalized assistance, exceptional product quality, and unparalleled customer service.</p>
        </div>
    </div>
    </div>
    </>
  );
}

export default Home;
