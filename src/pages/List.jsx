import "./../css/List.css"
import DataTable from "../components/DataTable";
import { useApps } from "../hooks/useApps";  //{ } around 
import appImage from "../images/app-placement-image.jpg";
import Filter from "../components/Filter";
import SavedList from "../components/SavedList";
import SelectedList from "../components/SelectedList";



const List = () => {

    const {data: apps, loading, error } = useApps(); 
    
        if (loading) return <p>Loading…</p>;
        if (error)   return <p>Couldn't load apps.</p>;
    
    return (
        <main id = "list" className = "main-content">
            <section>
                <SavedList />
                <SelectedList />
                <DataTable rows = {apps || []} />
            </section>
            
        </main>

    );

}

export default List;