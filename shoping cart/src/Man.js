// Card.js
import React, { useState } from 'react';
import './Man.css';
import './Navbar.css';
import './SearchBar.css'
import SearchBar from './SearchBar'; // Import the SearchBar component

const card = [
  {
    id: 1,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325236006/OX/YL/AU/22817649/men-hooded-sweatshirt.jpg",
    info: "Cotton Full Sleeves Men Hooded Sweatshirt ",
    price: 800,
  },
  {
    id: 2,
    image: "https://5.imimg.com/data5/ECOM/Default/2023/3/296883703/NF/AX/LH/13078142/1669802336876-17-a-1-originnm80prcnt-500x500.webp",
    info: "Classic Cotton Solid Casual Shirts For Men",
    price: 599,
  },
  {
    id: 3,
    image: "https://www.soosi.co.in/cdn/shop/products/IMG-20190509-WA0077_1200x1200.jpg?v=1571711127",
    info: "Traditional kurta for Men",
    price: 1999,
  },
];

export default function Man() {
  const [quan, setQuan] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const inc = () => {
    setQuan(quan + 1);
  };

  const dec = () => {
    if (quan >= 1) {
      setQuan(quan - 1);
    }
  };

  const fun = () => {
    alert("Added to Wishlist!");
  };

  const filteredProducts = card.filter((product) =>
    product.info.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <SearchBar onSearch={setSearchTerm} /> {/* Add the SearchBar component here */}
      <div className='card-container'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='card'>
            <h2>{product.name}</h2>
            <img src={product.image} alt="pro-image" />
            <p>{product.info}</p>
            <h3>Price=₹{product.price}</h3>
            <button className='btn-card' onClick={fun}>Add to cart</button>
            <br></br>
            <button className='btn' onClick={inc}>+</button>
            <span>{quan}</span>
            <button className='btn' onClick={dec}>-</button>
          </div>
        ))}
      </div>
    </>
  );
}