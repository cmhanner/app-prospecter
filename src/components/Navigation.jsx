import {Link} from "react-router-dom";
import "./../css/Navigation.css"

const Navigation = () => {
    return (
        
            <nav id = "page-changer">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/Database">Database</Link></li>
                    <li><Link to = "/AddEdit">AddEdit</Link></li>
                    <li><Link to = "/List">List</Link></li>
                    <li><Link to = "/About">About</Link></li>
                </ul>

            </nav>
     

    );

};

export default Navigation;