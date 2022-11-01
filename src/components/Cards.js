// import star from "/images/star-icon.png";
// import image from "./images/uc.png";

const Cards = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="contents">
      {badgeText && <div className="card--out">{badgeText}</div>}
      <img src={props.image} alt="" className="image-card" />
      <h3>{props.title}</h3>
      <div className="stat-card">
        <img src="./images/star-icon.png" width={"20px"} alt="" />
        <span>{props.stats.rating}</span>
        <span className="gray">{props.stats.reviewCount}</span>
        <span className="gray">{props.location}</span>
        <p>My new react tag for price</p>
        <p>
          <span className="dis">From ${props.price}</span>/ person
        </p>
      </div>
    </div>
  );
};

export default Cards;
