import "../css/Header.css";
import logo from "../images/logo.svg"
console.log('Header mounted');



const Header = () => {
    return (
        <header id = "main-header">
            <button id="hamburger" aria-label = "Open Menu">☰</button>
            <h2 id = "Title">Home</h2>

                <div id = "search-bar-part">
                    <form id = "search-bar" action = "#" method = "get">
                        <button type = "submit" >🔍</button>
                        <input type = "text" placeholder = "app name..." />
                    </form>
                </div>

                <h1 id = "main-logo">
                   <img id="main-logo-img" src={logo} alt= "App Prospecter Logo" /> 
                   App Prospecter
               </h1>

               <div id = "button-list">
                    <nav>
                        <ul>
                            
                            <li><a href = "#" >⚙️ Settings</a></li>
                            <li><a href = "#" >👤 Login</a></li>
                        </ul>
                    </nav>
                </div>

        </header>

    );
}

export default Header;