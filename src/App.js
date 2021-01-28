import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

// Key: chfO2I4YSDqNBSVZBb0DbYdEDluUb-gPUVSG-cqnEBc
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const getPhotos = async () => {
    await fetch(url);
  };
  return <h2>stock photos starter</h2>;
}

export default App;
