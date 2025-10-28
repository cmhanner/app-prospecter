import "./../css/List.css"
import DataTable from "../components/DataTable";
import appImage from "../images/app-placement-image.jpg";
import Filter from "../components/Filter";
import SavedList from "../components/SavedList";
import SelectedList from "../components/SelectedList";

const SAMPLE_APPS = [
    {img: appImage, name: "Bank App", company: "Da Bank", rating: 2, industry: "Finance", dev: "WeDvelop" },
    {img: appImage, name: "Business App", company: "Busy Business", rating: 2, industry: "Consulting", dev: "Busy Bees Develop" },
    {img: appImage, name: "Car App", company: "Vroom Broom", rating: 3, industry: "Automotive", dev: "Car Code Guys" },
    {img: appImage, name: "Food App", company: "The Dine", rating: 1, industry: "Food", dev: "Bytes" },
    {img: appImage, name: "Fitness App", company: "Strong Folk", rating: 5, industry: "Fitness", dev: "Foundational Code" },
    

]

const Database = () => {
    
    return (
        <main id = "list" className = "main-content">
            <section>
                <SavedList />
                <SelectedList />
                <DataTable rows = {SAMPLE_APPS} />
            </section>
            
        </main>

    );

}

export default Database;