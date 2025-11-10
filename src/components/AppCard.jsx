import appDefault from "../images/app-placement-image.jpg";
import "../css/AppCard.css"
import {Link, useLocation} from "react-router-dom";

const clamp = (n, lo = 0, hi = 5) => Math.max(lo, Math.min(hi, Number(n) || 0));

export default function AppCard ({
  app,
  id, name, company,
  stars, imageUrl
}) 

{
 const location = useLocation();
 const data = app ?? {
  _id: id,
  name,
  company,
  rating: stars,
  imageUrl
 }

 if (!data || !data._id) {
    return (
      <article className="app-card skeleton">
        <header className="app-card_header">
          <h3 className="app-card_title">Loading…</h3>
          <div className="img-skeleton" />
        </header>
        <div className="app-card_info">
          <p className="app-card_company">&nbsp;</p>
          <p className="app-card_rating">&nbsp;</p>
        </div>
      </article>
    );
  }
 const starCount = clamp(app.rating);
 const starText = "★".repeat(starCount) + "☆".repeat(5 - starCount);
 const img = app.imageUrl || app.image || appDefault;


  return (
    <Link
      to = { `/apps/${app._id}`}
     
      className = "app-card"
      aria-label = { `Open Details for ${app.name}`}
    >

    <article className="app-card">
      <header className="app-card_header">
        <h3 className="app-card_title">{app.name}</h3>
        <img src={img} alt={`${app.name} logo`} />
      </header>

      <div className="app-card_info">
        <p className="app-card_company"><strong>Company:</strong> {app.company}</p>
        <p className="app-card_rating"> 
          <strong>Rating:</strong> {starText}
        </p>
      </div>
    </article>
    </Link>
  );
};
