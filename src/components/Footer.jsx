// eslint-disable-next-line react/prop-types
function Footer({darkMode}) {
  return <div className={`max-w-screen flex flex-wrap items-center justify-between pl-32 pr-32  ${darkMode ? "dark bg-gray-900 flex flex-wrap items-center justify-between p-4 text-white" : "flex flex-wrap items-center justify-between mx-auto p-4 bg-blue-900"}`}>
      <a href="https://myflixerz.to/home" className="flex items-center space-x-3 rtl:space-x-reverse ">
        <img src="11.png" className="h-14 w-14 rounded-full" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Popcorn</span>
        </a>
         
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
                </ul>
            </div>
   
   
      </div>
}
export default Footer;