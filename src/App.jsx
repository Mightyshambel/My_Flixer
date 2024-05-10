/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from "./components/NavBar.jsx";
import Desc from "./components/Desc.jsx";
import Cards from "./components/Cards.jsx";
import data from "./data.js";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState('Trending'); // State to manage selected category

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also save the user's preference to local storage here
  };

  const filteredMovies = data.filter(item => item.category === 'Latest Movies');
  const filteredTVShows = data.filter(item => item.category === 'Latest TV Shows');
  const filteredTrending = data.filter(item => item.category === 'Trending');

  const MovieCards = filteredMovies.map((item) => (
    <Cards darkMode={darkMode} key={item.id} item={item} />
  ));

  const TVShowCards = filteredTVShows.map((item) => (
    <Cards darkMode={darkMode} key={item.id} item={item} />
  ));
  const TrendingCards= filteredTrending.map((item) => (
    <Cards darkMode={darkMode} key={item.id} item={item} />
  ));

  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} />
      <Desc
        darkMode={darkMode}
      />
<div className={darkMode ? "dark bg-gray-900 px-12 text-white" : "text-black px-12"}>
        <span className='text-2xl'>Trending</span>
        <div className="grid grid-cols-6 gap-4">
          {TrendingCards}
        </div>
      </div>
      <div className={darkMode ? "dark bg-gray-900 px-12 text-white" : "text-black px-12"}>
        <span className='text-2xl'>Latest Movies</span>
        <div className="grid grid-cols-6 gap-4">
          {MovieCards}
        </div>
      </div>

      <div className={darkMode ? "dark bg-gray-900 px-12 text-white" : "text-black px-12"}>
        <span className='text-2xl'>Latest TV Shows</span>
        <div className="grid grid-cols-6 gap-4">
          {TVShowCards}
        </div>
      </div>

      

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
