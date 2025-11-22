import appImage from "../images/app-placement-image.jpg";
import Search from "./../components/Search";
import React, { useState } from "react";
import { addApp } from "../api/appsApi";
import "./../css/AddEdit.css"

const AddEdit = () => {

  const [prevImg, setPrevImg] = useState("");
  const [result, setResult] = useState("");

  const uploadAppImg = (event) => {
    const file = event.target.files[0];
    setPrevImg(URL.createObjectURL(file));
  }

  const saveApp = async (event) => {
    event.preventDefault();
    setResult("Saving new App...");

    const formData = new FormData(event.target);

    try {
      const saved = await addApp (formData);
      setResult (`"${saved.name}" "added successfully!`);
    } catch (error) {
      console.log(error);
      setResult("Error: could not save app.");
    }


  }

  

  return (
  <main id="add-edit" className="main-content">
    <section className="addEdit">
      
      <div className = "top-row">
          <Search />
          <div className="a-e-buttons" role="group" aria-label="Add or Edit">
              <button type="button">Add</button>
              <button type="button">Edit</button>
          </div>
      </div>

      <div className="bottom-row">
        
        <div className="left-section">
          <h3 id="app-name">[App Name]</h3>

          <div className="dummy-app-ratio">
            <img src={prevImg || appImage}  alt="Default app" />
          </div>

           
          {/* <form className="desc-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="app_description">Description:</label>
            <textarea id="app_description" name="description_text" rows={5} />
            <input type="submit" value="Save" disabled />
          </form>
        </div> */}

       
        <div className="right-section">
          <h3>App Form:</h3>

          <form id="app-form" onSubmit={saveApp}>

            <div className="form-group">
              <label htmlFor="appName">App Name:</label>
              <input type="text" id="appName" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="image">App Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={uploadAppImg}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company" name="company" required />
            </div>

            <div className="form-group">
              <label htmlFor="industry">Industry:</label>
              <input type="text" id="industry" name="industry" required />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating (1 - 5):</label>
              <input type="text" id="rating" name="rating" min="1" max = "5" required />
            </div>

            <div className="form-group">
              <label htmlFor="rating_count">Rating Count:</label>
              <input type="text" id="rating_count" name="rating_count" min="1"  required />
            </div>

            <div className="form-group">
              <label htmlFor="developer">Developer:</label>
              <input type="text" id="developer" name="developer" required />
            </div>

            <div className="form-group note-block">
              <label htmlFor="note">Note:</label>
              <textarea id="note" name="note" rows={5} />
            </div>



            <div className="form-group">
              <label htmlFor="link">App-Store Link:</label>
              <input type="url" id="link" name="app_store_url" required />
            </div>

            <div className="form-group">
              <label htmlFor="link">Website of App:</label>
              <input type="url" id="link" name="website_url" required />
            </div>

            <button type="submit" className="submit-btn">
                    Save App
            </button>

            <p className="status-message" aria-live="polite">
                    {result}
            </p>
          </form>
        </div>
        
        
          
      

      </div> 
        <aside className="list-sidebar" aria-label="Quick actions and lists">
          <h3>Quick Actions</h3>
          <ul>
            <li><a href="#">Last Viewed</a></li>
            <li><a href="#">Last Saved</a></li>
            <li><a href="#">Last Edited</a></li>
          </ul>

          <h3>Lists</h3>
          <ul>
            <li><a href="#">Prospect List</a></li>
            <li><a href="#">Follow-Up List</a></li>
            <li><a href="#">Custom List</a></li>
          </ul>
        </aside>

      </div>
    </section>
  </main>
  );

}

export default AddEdit;