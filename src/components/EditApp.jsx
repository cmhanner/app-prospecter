import { editApp } from "../api/appsApi";
import React, { useState } from "react";

const EditApp = () => {
    const [prevImg, setPrevImg] = useState("");
    const [result, setResult] = useState("");

    const uploadAppImg = (event) => {
        const file = event.target.files[0];
        setPrevImg(URL.createObjectURL(file));
  
    }

    const editApp = async(event) => {
        event.preventDefault();
        setResult()

        const formData = new FormData(event.target);
    
        try {
          const saved = await editApp (formData);
          setResult (`"${saved.name}" "edited successfully!`);
        } catch (error) {
          console.log(error);
          setResult("Error: could not edit app.");
        }



    }

    return (
        <form id="app-form" onSubmit={editApp}>

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
    )
     
}

export default EditApp;
