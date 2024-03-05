// Card.js
import React, { useState } from 'react';
import './Kids.css';
import './Navbar.css';
import './SearchBar.css'
import SearchBar from './SearchBar'; // Import the SearchBar component

const card = [
  {
    id: 1,
    image: "https://www.fayonkids.com/cdn/shop/products/fayon-kids-blue-a-line-lycra-dress-for-girls-37713614962944.jpg?v=1662790674",
    info: "Blue a line lycra dress fo girls",
    price: 499,
  },
  {
    id: 2,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/314233404/DT/LY/GF/102040591/kw-d1-e-500x500.jpeg",
    info: "Cotton COTI DRESS Boys Kids Wear",
    price: 400,
  },
  {
    id: 3,
    image: "https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/w/o/woven-art-silk-crop-top-set-in-black-v1-ugb52.jpg",
    info: "Woven Art Silk Crop Top Set in Black for Girl",
    price: 599,
  },

  {
    id: 4,
    image: "https://images.meesho.com/images/products/186903013/wbnpu_512.webp",
    info: "Girls party wear stylish frocks for girls braded new frocks",
    price: 599,
  },
  {
    id: 5,
    image: "https://cdn.rajwadi.com/image/cache/data-2023/readymade-navy-blue-indowestern-in-art-silk-51049-297x408.jpg",
    info: "Traditional wear for Boys",
    price: 1900,
  },
  {
    id: 6,
    image: "https://occasionwearforkids.co.uk/wp-content/uploads/2020/05/LG-Osc-029-scaled.jpg",
    info: "Boys navy check suit Spencer",
    price: 2500,
  },
  {
    id: 7,
    image: "https://www.mimimono.sg/cdn/shop/products/ChillLemonTee_Children_sClothes_GiftsforChildren_SoftCotton_mimimono01.jpg?v=1682506849",
    info: "Cotton Fabric And Classic Style Boy Kids Capri And T Shirt For Daily Wear",
    price: 299,
  },
  {
    id: 8,
    image: "https://tiimg.tistatic.com/fp/1/007/712/cotton-fabric-classic-style-girl-kids-capri-t-shirt-for-daily-wear-749.jpg",
    info: "Cotton Fabric And Classic Style Girl Kids Capri And T Shirt For Daily Wear",
    price: 299,
  },
];

export default function Kids() {
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