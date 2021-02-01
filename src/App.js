import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const clientID = `?client_id=${process.env.REACT_APP_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);

  const getPhotos = async () => {
    setLoading(true);
    let url = `${mainUrl}${clientID}`; // Setting the environmental variable
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // This useEffect is for the initial rendering of photos from photo API
  useEffect(() => {
    getPhotos();
  }, []);

  // Now setting the event when the App loads initially. We must note that, it's a good practice to remove our event Listerner also as the component is unmounted

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        console.log("We are here !!!");
      }
      /* ---
      let browserHeight = document.documentElement.clientHeight;
      let scrollY = window.scrollY;
      let scrollHeight = document.body.scrollHeight;

      console.log(`Browser Height: ${browserHeight}`);
      console.log(`Inner Height: ${window.innerHeight}`);
      console.log(`ScrollY: ${scrollY}`);
      console.log(`Scroll Height: ${scrollHeight}`);
      --- */
    });

    console.log("useEffect() Invoked !!!");

    // CleanUp Function | Kind of componentDidUnmount
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  if (error) {
    return <h3>ERROR: Something went Wrong </h3>;
  }
  return (
    <main>
      <section className="search">
        <form onSubmit={handleSubmit} className="search-form">
          <input type="text" className="form-input " />
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => (
            <Photo key={photo.id} {...photo} />
          ))}
        </div>

        {loading && <h2 className="loading">loading ...</h2>}
      </section>
    </main>
  );
}

export default App;
