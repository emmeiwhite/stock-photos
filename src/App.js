import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const KEY = "chfO2I4YSDqNBSVZBb0DbYdEDluUb-gPUVSG-cqnEBc";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  let url = `${mainUrl}?client_id=${KEY}`;
  const getPhotos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return <h2>stock photos starter</h2>;
}

export default App;
