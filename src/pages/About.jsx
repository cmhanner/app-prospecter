import "./../css/About.css";
import {useState} from "react";
import AboutImage from "./../images/About-image.jpg";
import WhyImage from "./../images/Why-Image.jpg";

const About = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "40d318c9-bd7c-4c6c-8fd2-7105ac775eaa");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <main id="About" className="main-content">
            
            
        <div id = "contact">
                <div class = "Why">
                    <h2>Why?</h2>
                   <img src={WhyImage} alt="Why Image" />
                    <p id = "about-page-p"> I obtained a internship at Krumware, a South Carolina company that makes custom software and mobile apps for companies. 
                        I'm a sales intern with the task of finding comapnies to prospect. 
                        A big issue I run into is finding a company who's showing a need for custom software. 
                        That's where this idea came from, a way to find companies who need mobile app work done.
                    </p>
                </div>
                <div class = "About-Me">
                    <h2>About Me</h2>
                    <img src={AboutImage} alt="Why Image" />
                    <p id = "about-page-p"> Hello, my name is Chance Hanner, a Computer Informations Systems major from Darlington, South Carolina.
                        I graduated high school in 2020, and went straight into the work force to become a Head Teller at a local bank.
                        I decided to go back to school to further my education and develop more tangible skills in today's world.
                        I'm currently minoring in Business and African American Studies. I enjoy video games, fashion, technology and history.
                    </p>
                </div>
                <div className = "Feedback">
                    <h2>Contact Me</h2>
                        
                        <form onSubmit={onSubmit}>
                            <div className = "form-row">
                                <label htmlFor="nameInput">Name: </label>
                                <input type="text" name="name" required/>

                                <label htmlFor="emailInput">Email: </label>
                                <input type="email" name="email" required/>

                                <label htmlFor="messageInput">Message: </label>
                                <textarea name="message" required></textarea>

                                <button type="submit">Submit Form</button>
                            </div>

                        </form>
                        <span>{result}</span>

                        
                        
                     <h3>Reach Out On:</h3>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
                     <div id = "social-nav">
                            <nav>
                                <ul>
                                    <a href="https://github.com/cmhanner" class="fa fa-github"></a>
                                    <a href="https://linkedin.com/in/chancellor-hanner-5362b3297" class="fa fa-linkedin"></a>
                                </ul>
                            </nav>
                    </div>

                    
                    {/* <h3>Location</h3>
                    <iframe id = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.41405522519!2d-81.02837616394099!3d33.992473532161256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad802732f5f%3A0x60f4b6c054539cae!2s1118%20Blossom%20St%2C%20Columbia%2C%20SC%2029201!5e0!3m2!1sen!2sus!4v1760586454549!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}




                </div>
           </div>

        </main>
    )
};

export default About;