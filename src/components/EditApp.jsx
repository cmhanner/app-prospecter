import { editApp as editAppApi } from "../api/appsApi";
import React, { useState, useEffect } from "react";
import "./../css/AddEdit.css"

const EditApp = ({app, onDone}) => {
    const [prevImg, setPrevImg] = useState("");
    const [result, setResult] = useState("");

    const uploadAppImg = (event) => {
        const file = event.target.files[0];
        setPrevImg(URL.createObjectURL(file));
  
    }

    // set previous image on load
    useEffect(() => {
      if (app && app.imageUrl) {
        setPrevImg(app.imageUrl);
      }
    }, [app]);

    const handleEdit = async(event) => {
        event.preventDefault();
        setResult("");

        const formData = new FormData(event.target);
    
        try {
          const saved = await editAppApi (app._id,formData);
          setResult (`"${saved.name} edited successfully!`);
         if (onDone) {
          await onDone();
         }
        } catch (error) {
          console.log("Error editing app: ", error);
          setResult("Error: could not edit app.");
        }



    }

    return (
        <form id="app-form" onSubmit={handleEdit}>

          <h3>Editing {app.name}</h3>

            <div className="form-group">
              <label htmlFor="appName">App Name:</label>
              <input type="text" id="appName" name="name" defaultValue={app.name} />
            </div>

            <div className="form-group app-image">
              <label htmlFor="image">App Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={uploadAppImg}
              />
            </div>

            {prevImg && <img src ={prevImg} alt = "Preview" />}

            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company" name="company"  defaultValue={app.company}  />
            </div>

            <div className="form-group">
              <label htmlFor="industry">Industry:</label>
              <input type="text" id="industry" name="industry"  defaultValue={app.industry} />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating (1 - 5):</label>
              <input type="text" id="rating" name="rating" min="1" max = "5" defaultValue={app.rating} />
            </div>

            <div className="form-group">
              <label htmlFor="rating_count">Rating Count:</label>
              <input type="text" id="rating_count" name="rating_count" min="1"  defaultValue={app.rating_count} />
            </div>

            <div className="form-group">
              <label htmlFor="developer">Developer:</label>
              <input type="text" id="developer" name="developer" defaultValue={app.developer} />
            </div>

            <div className="form-group note-block">
              <label htmlFor="note">Note:</label>
              <textarea id="note" name="note" rows={5} defaultValue={app.note}/>
            </div>



            <div className="form-group">
              <label htmlFor="link">App-Store Link:</label>
              <input type="url" id="link" name="app_store_url" defaultValue={app.app_store_url} />
            </div>

            <div className="form-group">
              <label htmlFor="link">Website of App:</label>
              <input type="url" id="link" name="website_url" defaultValue={app.website_url} />
            </div>

            <button type="submit" className="submit-btn">
              Save App
            </button>

            <p className="status-message" aria-live="polite">
              {result}
            </p>
          </form>
    )
     
}

export default EditApp;
