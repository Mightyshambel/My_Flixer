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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also save the user's preference to local storage here
  }; 
  const Card = data.map((item) => {
    return <Cards darkMode={darkMode} key={item.id} item={item} />;
  });
  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} />
      <Desc
        darkMode={darkMode}
         />

      <div
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}>
        <div   className={darkMode ? "dark bg-gray-900   px-12 text-white" : "text-black px-12 "}>  
          <span className='text-2xl'>Movies</span>
          <div className="grid grid-cols-6 "
            darkMode={darkMode}
          >{Card}</div>
        </div>

        <div   className={darkMode ? "dark bg-gray-900   px-12 text-white" : "text-black px-12 "}>  
          <span className='text-2xl'>TV Shows</span>
          <div className="grid grid-cols-6 "
            darkMode={darkMode}
          >{Card}</div>
        </div>
        </div>

      <Footer
      darkMode={darkMode}
      />
    </div>
  );
}

export default App;
