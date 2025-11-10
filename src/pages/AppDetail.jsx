//  AppDetail using useApp
import { useApp } from "./../hooks/useApp";
import "./../css/AppDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import appDefault from "../images/app-placement-image.jpg";

//  to keep ratings in range
const clamp = (n, lo = 0, hi = 5) => Math.max(lo, Math.min(hi, Number(n) || 0));


const AppDetail = () => {
    const { id } = useParams(); //  holds the id
    const navigate = useNavigate();
    const { data:app, loading, error, notFound} = useApp(id);

    if(loading) return "loading";
    if(error) return "couldn't load app"
    if (!app) return "App not found";

    const starCount = clamp(app.rating);
    const starText = "★".repeat(starCount) + "☆".repeat(5 - starCount);
    const img = app.imageUrl || app.image || appDefault;

    return (
    <main id = "app_detail" className = "main-content">
        <article className="detail">
            <header className="detail_header">
                <button className="detail_back" onClick={() => navigate(-1)} aria-label="Back">← Back</button>
                <h1 className="detail_title">{app.name}</h1>
            </header>

            <div className="detail_top">
                <img className="detail_image" src={img} alt={`${app.name} logo`} />
                <div className="detail_info">
                <p><strong>Company:</strong> {app.company || "—"}</p>
                <p><strong>Developer:</strong> {app.developer || "—"}</p>
                <p><strong>Industry:</strong> {app.industry || "—"}</p>
                <p><strong>Rating:</strong> {starText} <small>({app.rating_count ?? 0})</small></p>
                <div className="detail_links">
                    {app.website_url && <a href={app.website_url} target="_blank" rel="noreferrer">Website</a>}
                    <p></p>
                    {app.app_store_url && <a href={app.app_store_url} target="_blank" rel="noreferrer">App Store</a>}
                </div>
                </div>
            </div>

            {app.note && (
                <section className="detail_section">
                <h2>Notes</h2>
                <p>{app.note}</p>
                </section>
            )}

            </article>
    </main>

        
    );
}

export default AppDetail;