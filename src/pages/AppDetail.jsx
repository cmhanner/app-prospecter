//  AppDetail
import useApp from "./../hooks/useApp";
import "./../css/AppDetail.css";
import CircularProgress from "@mui/material/CircularProgress"; //https://stackoverflow.com/questions/72158847/how-to-add-loading-spinner-in-react-js-while-my-components-are-loading
import { useParams } from "react-router-dom";


const AppDetail = () => {
    const { id } = useParams;
    const { app, loading, error, notFound} = useApp(id);

    if(loading) return <CircularProgress/>;
    if(error) return <ErrorView message = "Couldn't Load app"/>;
    if (notFound) return <EmptyState message = "App not found"/>;

    return (
        <main id = "app-page" className = "main-content">
            <h1>Details</h1>
            <div id = "app-details">
                {app.map((app) => (
                    <AppDetail key={app._id} 
                                name = {app.name}
                                image = {app.image}
                                company = {app.company}
                                industry = {app.industry}
                                rating = {app.rating}
                                rating_count = {app.rating_count}
                                developer = {app.developer}
                                note = {app.note}
                                app_store_url = {app.app_store_url}
                                website_url = {app.website_url}
                    />
                ))}
            </div>
        </main>
    )
}