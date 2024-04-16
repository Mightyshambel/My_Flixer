export default function Card(props) {
    let badgeText
  
    if (props.item.screen === "CAM") {
      badgeText="CAM"
    }else if (props.item.screen === "HD"){
     badgeText="HD"
    }
    return (
      <div className={props.darkMode ? "dark bg-gray-800 p-4 mx-auto text-black flex-shrink-0 pl-10 pr-0 relative rounded-md " : "flex-shrink-0 ml-10 mr-0 relative rounded-md bg-white text-black"} >
        
        {badgeText && <div className="absolute top-6 m-1 px-2 bg-white dark:bg-slate-800 dark:text-white  rounded-sm font-bold">{badgeText}</div>}
        <img src={`../images/${props.item.coverImg}`} className="py-2  rounded-lg w-11/12 border-radius: 9px; " alt="katie swimming" />
        
        <div className="flex text-sm ">
          <img className="rounded-md w-4 h-4" src="./images/star.png" alt="icon" />
          <span className="text-gray-400">{props.item.stats.rating}</span>
          <span className="text-gray-400">({props.item.stats.reviewCount})• </span>
          <span className="text-gray-400">{props.item.screen}</span>
        </div>
        <div className="text-sm py-2  ">
          <h2 className="font-bold">{props.item.title}</h2>
          <span className="mr-2">{props.item.year}  </span> . <span className="mx-3">{props.item.view}</span>
        </div>
      </div>
    );
  }