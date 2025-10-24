import "./../css/Header.css";

const Header = () => {
    return (
        <header id = "main-header">
            <button id="hamburger">☰</button>
            <h2 id = "Title">Home</h2>
                <div id = "search-bar-part">
                    <form id = "search-bar" action = "#" method = "get">
                        <button type = "submit" >🔍</button>
                        <input type = "text" placeholder = "app name..." />
                    </form>
                </div>

                <h1 id = "main-logo">
                   <img src="images/logo.svg" alt="App Prospecter Logo" id="main-logo-img"/> 
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