import "./../css/Database.css"
import {useEffect} from "react";
import DataTable from "../components/DataTable";
import appImage from "../images/app-placement-image.jpg";
import { useApps } from "../hooks/useApps";  //{ } around 
import Filter from "../components/Filter";



const Database = () => {

    const {data: apps, loading, error } = useApps(); 

    if (loading) return <p>Loading…</p>;
    if (error)   return <p>Couldn't load apps.</p>;

   
    
    return (
        <main id = "database" className = "main-content">
            <section>
                <Filter />
                <DataTable rows = {apps || []} />
            </section>
            
        </main>

    );

}

export default Database;