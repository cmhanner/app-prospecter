import "./../css/FeaturedApp.css"
import {useEffect, useState} from "react";
import { useApps } from "../hooks/useApps";  //{ } around 
import AppCard from "../components/AppCard";

// A array of apps
 


const FeaturedApp = ({ autoPlay = true, intervalMs = 5000   }) => {
  const {data: apps, loading, error } = useApps(); 
  const [cardIndex, setCardIndex] = useState(0); //  determines the app card we're on

  

  useEffect(() => {
    if (!autoPlay || apps.length <= 1) return; //  nothing to rotate
    const t = setInterval(next, intervalMs); //  move to the next slide after 5 seconds
    return () => clearInterval(t); //  cleanup 
  }, [autoPlay, intervalMs])

  const next = () => setCardIndex((i) => (i + 1) % apps.length); //  go to the next card, and wrap around after last card
  const prev = () => setCardIndex((i) => (i - 1 + apps.length) % apps.length); //  go to last card, add the length before % to keep non negative
  const goTo = (i) => setCardIndex(((i % apps.length) + apps.length) % apps.length); //  jump to a card

  
  
  const current = apps[cardIndex]; //  the object at the current position

  if (loading) return <p>Loading apps...</p>
  if (error) return <p>Couldn't load apps</p>
  if (!apps?.length) return <p>No apps yet...</p>

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
        <AppCard app={current} />
      </div>

      <nav className="featured-dots" aria-label="Choose featured app">
        {apps.map((a, i) => (
          <button
            key={a._id}
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