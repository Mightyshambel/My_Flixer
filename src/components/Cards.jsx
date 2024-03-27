export default function Card(props) {
    let badgeText
  
    if (props.item.openSpots === 0) {
      badgeText="SOLD OUT"
    }else if (props.item.location === "Online"){
     badgeText="ONLINE"
    }
    return (
      <div className="flex-shrink-0 ml-10 mr-0 relative ">
        
        {badgeText && <div className="absolute top-6 m-1 px-2 bg-white rounded-sm font-bold">{badgeText}</div>}
        <img src={`../images/${props.item.coverImg}`} className="py-2  rounded-lg w-11/12 border-radius: 9px; " alt="katie swimming" />
        
        <div className="flex text-sm ">
          <img className="rounded-md w-4 h-4" src="star.png" alt="icon" />
          <span className="text-gray-400">{props.item.stats.rating}</span>
          <span className="text-gray-400">({props.item.stats.reviewCount})• </span>
          <span className="text-gray-400">{props.item.location}</span>
        </div>
        <div className="text-sm py-2  ">
          <h2>{props.item.title}</h2>
            <span className="font-bold">From ${props.item.price}/person</span>
  
        </div>
      </div>
    );
  }