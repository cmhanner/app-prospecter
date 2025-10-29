import { useLocation } from "react-router-dom";
import "../css/Header.css";
import logo from "../images/logo.svg"
import Search from "./Search";


//  Got this from AI to change the name of the page in the header 

const TITLES = {
    "/": "Home",
  "/database": "Database",
  "/addedit": "Add / Edit",
  "/list": "List",
  "/about": "About",
};



// Normalize the pathname so it matches our keys
function routeKey(pathname) {
  const base = (process.env.PUBLIC_URL || "").replace(/\/+$/, ""); // e.g. "/app-prospecter"
  let p = pathname;

  // strip basename if present (case-insensitive)
  if (base && p.toLowerCase().startsWith(base.toLowerCase())) {
    p = p.slice(base.length) || "/";
  }

  // lowercase, remove trailing slash
  p = p.toLowerCase().replace(/\/+$/, "");
  if (p === "") p = "/";

  // use only the first segment for lookup: "/", "/database", etc.
  const firstSeg = "/" + p.split("/").filter(Boolean)[0];
  return firstSeg === "/" ? "/" : firstSeg;
}



export default function Header() {
  const { pathname } = useLocation();
  const key = routeKey(pathname);
  const title = TITLES[key] ?? "App Prospecter";
    return (
        <header id = "main-header">
            <button id="hamburger" aria-label = "Open Menu">☰</button>
            <h2 id = "Title">{title}</h2>

                <Search />
                {/* <div id = "search-bar-part">
                    <form id = "search-bar" action = "#" method = "get">
                        <button type = "submit" >🔍</button>
                        <input type = "text" placeholder = "app name..." />
                    </form>
                </div> */}

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

