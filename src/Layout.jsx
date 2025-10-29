import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation"; //  add the ..  to get out of the pages folder
import Footer from "./components/Footer";
import "./css/Layout.css"

const Layout = () => {
    

    return (
        <>
            <Header />
            <div className = "app-shell">
                <aside className = "sidebar">
                    <Navigation />
                </aside>
                <main className = "main-content">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>


    );
};

export default Layout;