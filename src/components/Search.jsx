import "../css/Search.css"

const Search = () => {
  return (
    <div className = "Search">
        <form id = "search-bar" action = "#" method = "get">
            <button type = "submit" >🔍</button>
            <input type = "text" placeholder = "does it exist or edit..."/>
        </form>
        

    </div>
  );
};

export default Search;