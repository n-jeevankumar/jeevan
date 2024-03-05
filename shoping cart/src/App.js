import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Man from "./Man";
import Kids from "./Kids";
import Collection from './Collection';
import Home from'./Home';
import Contact from'./Contact';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Card />} path="/card" />
          <Route element={<Collection />} path="/collection" />
          <Route element={<Home />} path="/home" />
          <Route element={<Man />} path="/man" />
          <Route element={<Kids />} path="/kids" />
          <Route element={<Contact />} path="/contact" />

        </Routes>
      </BrowserRouter>
    </>

  )
}