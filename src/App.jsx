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
        <div   className={darkMode ? "dark bg-gray-800  px-12 text-white" : "text-black px-12 "}>  
          <span className='text-2xl'>Movies</span>
          <div className="grid grid-cols-6 "
            darkMode={darkMode}
          >{Card}</div>
        </div>

        <span className="text-2xl px-10 py-10"> TV Shows</span>
        <div className={darkMode ? "dark bg-gray-800  grid grid-cols-5 px-12 text-white" : "text-black px-12 "}
          darkMode={darkMode}
        >{Card}</div>
      </div>

      <Footer
      darkMode={darkMode}
      />
    </div>
  );
}

export default App;
