
// eslint-disable-next-line react/prop-types
function NavBar({ darkMode, toggleDarkMode }) {
  
    
    return (
   
      <nav className={`bg-no-repeat bg-cover h-60 top-0 sticky z-50 border-gray-200  ${darkMode ? 'bg-gray-900  text-white' : 'bg-blue-900'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://myflixerz.to/home" className="flex items-center space-x-3 rtl:space-x-reverse ">
            <img src="11.png" className="h-16 w-16 rounded-full" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Popcorn</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-900  md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white md:hover:text-blue-100" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Genere</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Country</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">TV Shows</a>
              </li>
              <div className="flex items-center justify-center">
                <button
                  className={`${darkMode ? 'bg-gray-900 ' : 'bg-gray-200'
                    } w-16 h-8 rounded-full p-1 flex items-center focus:outline-none`}
                    onClick={toggleDarkMode}
                >
                  <div
                    className={`${darkMode ? 'transform translate-x-full' : ''
                      } w-6 h-6 bg-white rounded-full shadow-md`}
                  />
                </button>
              </div>
            </ul>
          
          </div>
        
        </div>
        <div className="flex justify-center my-28 ">
          <input type="text" placeholder="Search"  className={darkMode ? "dark form-input bg-gray-900 p-20  text-white border-cyan-400 w-7/12   border-2  px-4 py-5 rounded-full focus:border-cyan-500" : " bg-white p-20  w-7/12  form-input border-2  px-4 py-5 rounded-full border-gray-100"} />
        </div>
      
      </nav>

    );
  }

export default NavBar;
