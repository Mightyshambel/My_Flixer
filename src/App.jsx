import NavBar from "./components/NavBar.jsx";
import Desc from "./components/Desc.jsx";
import Cards from "./components/Cards.jsx";
import data from "./data.js";
import Footer from "./components/Footer.jsx";
function App() {
  const Card = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });
  return (
    <>
      <NavBar />
      <Desc />

      <div>
        <div className="pb-20">  
          <span className="text-2xl px-10">Movies</span>
          <div className="grid grid-cols-5 ">{Card}</div>
        </div>

        <span className="text-2xl px-10 py-10"> TV Shows</span>
        <div className="grid grid-cols-5">{Card}</div>
      </div>

      <Footer />
    </>
  );
}

export default App;
