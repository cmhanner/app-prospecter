import "./../css/Home.css"
import AppCard from "../components/AppCard";

const Home = () => {
    return (
        
            <main id = "main-area" className = "main-content">
                        <div id = "why-header">
                            <h2>Why App Prospecter?</h2>
                            <h2 id = "slogan">You find your next App Deal</h2>

                            
                        </div>
                        <div id = "answer-area">
                            <p>
                                Sales is hard, but selling software is even harder. 
                                What if there were a way to find apps with low reviews? 
                                of September 7, 2025, there are nearly 2 million apps on the Apple App Store, with the number continuing to grow.
                                How can we sort or find apps with low reviews? App Prospecter.
                            </p>
                        </div>

                        <div id = "dashbord">
                            
                            <div className="dashboard-apps">
                                <ul>
                                    <li><a href = "#"><AppCard app = {{name: "Bank App", company: "Da Bank", stars: 2 }} /></a></li>
                                    <li><a href = "#"><AppCard app = {{name: "Business App", company: "Business Bank", stars: 3 }}/></a></li>
                                    <li><a href = "#"><AppCard app = {{ name: "Car App", company: "Vroom Vroom", stars: 4 }} /></a></li>
                                </ul>
                            </div>

                            <div id ="dashboard-list">
                                
                                
                            </div>




                        </div>
                        
            </main>
       

    );

}

export default Home;