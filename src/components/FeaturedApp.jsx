import {useEffect, useState} from "react";
import AppCard from "../components/AppCard";

// A array of apps
 const apps = [
    {
      id: 1,
      name: "Bank App",
      company: "Da Bank",
      stars: 2,
      //  add more for JSON if wanted
    },
    {
      id: 2,
      name: "Busieness App",
      company: "Business Bank",
      stars: 1,
     
    },
    {
      id: 3,
      name: "Car App",
      company: "Vrrom Vroom",
      stars: 2,
      
    }
  ];


const FeaturedApp = ({ autoPlay = true, intervalMs = 5000   }) => {
  const [cardIndex, setCardIndex] = useState(0); //  determines the app card we're on

  const next = () => setCardIndex((i) => (i + 1) % apps.length); //  go to the next card, and wrap around after last card
  const prev = () => setCardIndex((i) => (i - 1 + apps.length) % apps.length); //  go to last card, add the length before % to keep non negative
  const goTo = (i) => setCardIndex(((i % apps.length) + apps.length) % apps.length); //  jump to a card

  useEffect(() => {
    if (!autoPlay || apps.length <= 1) return; //  nothing to rotate
    const t = setInterval(next, intervalMs); //  move to the next slide after 5 seconds
    return () => clearInterval(t); //  cleanup 
  }, [autoPlay, intervalMs])
  
  const current = apps[cardIndex]; //  the object at the current position


  return (
    <section className = "featured-apps">

      <header className = "featured-header">
        <h3>Featured Apps</h3>
        <div className = "controls">
          <button onClick = {prev} aria-label = "Previous"> &larr; </button>
          {/* Shows the current app we're on*/}
            <span>{cardIndex + 1} / {apps.length}</span> 
          <button onClick = {next} aria-label = "Next"> &rarr; </button>
        </div>
      </header>

      <div className = "featured-stage">
        <AppCard {...current} />
      </div>

      <nav className="featured-dots" aria-label="Choose featured app">
        {apps.map((a, i) => (
          <button
            key={a.id}
            onClick={() => goTo(i)}
            aria-label={`Show ${a.name}`}
            aria-current={i === cardIndex ? "true" : "false"}
            className={i === cardIndex ? "dot active" : "dot"}
          />
        ))}
      </nav>


    </section>
  );
};

export default FeaturedApp;