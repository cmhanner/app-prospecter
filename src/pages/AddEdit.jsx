import appImage from "../images/app-placement-image.jpg";
import Search from "./../components/Search";
import "./../css/AddEdit.css"

const AddEdit = () => {
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
              <img src={appImage} alt="Default app" />
            </div>

           
            <form className="desc-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="app_description">Description:</label>
              <textarea id="app_description" name="description_text" rows={5} />
              <input type="submit" value="Save" disabled />
            </form>
          </div>

          
          <div className="right-section">
            <h3>App Form:</h3>

            <form id="app-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="appName">App Name:</label>
                <input type="text" id="appName" name="appName" required />
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
                <label htmlFor="reviews">Reviews:</label>
                <input type="text" id="reviews" name="reviews" required />
              </div>

              <div className="form-group">
                <label htmlFor="link">Link to App:</label>
                <input type="url" id="link" name="link" required />
              </div>

              <div className="form-group">
                <label htmlFor="developer">Developer:</label>
                <input type="text" id="developer" name="developer" required />
              </div>

              
              <div className="form-group note-block">
                <label htmlFor="note">Note:</label>
                <textarea id="note" name="note" rows={5} />
                <input type="submit" value="Save Note" disabled />
              </div>
            </form>
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