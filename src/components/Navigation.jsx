import {Link} from "react-router-dom";
import {useState} from "react";
import "./../css/Navigation.css"

const Navigation = () => {
    const [toggleMenuOpen, setToggleMenuOpen] = useState(false);
    const [toggleMenuClose, setToggleMenuClose] = useState(true);


    const toggleMenu = (e) => {
        e.preventDefault();
        setToggleMenuOpen(!toggleMenuOpen);
        setToggleMenuClose(!toggleMenuClose);
    }

    return (
        
            <nav id = "page-changer" className = {toggleMenuOpen ? "" : "collapsed"}>
                <a onClick = {toggleMenu} id= "toggle-nav" href = "#">
                    {toggleMenuClose?(<p>☰</p>) : (<p>&larr;</p>)}
                </a>
                <ul className = {toggleMenuOpen? "": "hide-small"}>
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