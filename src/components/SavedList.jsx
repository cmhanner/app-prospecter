import "../css/SavedList.css"

const SavedList = () => {
  return (
    <div className = "savedList">
        <h3>Saved List</h3>
            <nav>
                <ul>
                    <li><a href = "#"> ⭐ Favorites</a></li>
                    <li><a href = "#"> 📉 Low Rated Apps</a></li>
                    <li><a href = "#"> 🏦 Banking Apps</a></li>
                    <li><a href = "#"> 🚮 Apps by Bad Company</a></li>
                    <li><a href = "#"> <button>➕ New List</button></a></li>
                </ul>
            </nav>

    </div> 
        
  );
};

export default SavedList;