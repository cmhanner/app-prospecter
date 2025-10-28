import appDefault from "../images/app-placement-image.jpg";
import "../css/AppCard.css"

const AppCard = ({ app }) => {
  const { name, company, stars } = app;
  return (
    <article className="app-card">
      <header className="app-card_header">
        <h3 className="app-card_title">{name}</h3>
        <img src={appDefault} alt={`${name} logo`} />
      </header>

      <div className="app-card_info">
        <p className="app-card_company"><strong>Company:</strong> {company}</p>
        <p className="app-card_rating"><strong>Rating:</strong> {"★".repeat(stars)}</p>
      </div>
    </article>
  );
};

export default AppCard;