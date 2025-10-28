
import "../css/Filter.css"

const Filter = () => {
  return (
    <div className = "Tools">
        <div className = "filter">
                    <label for="filter">Filter by:</label>
                        <select id="filter" name="filter"> 
                            <option value="Select">-- Select Industry --</option>
                            <option value="automotive">Automotive</option>
                            <option value="finance">Finance</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="gaming">Gaming</option>
                            <option value="fitness">Fitness</option>
                        </select>
                        <select id="filter" name="filter"> 
                            <option value="Select">-- Select Reviews --</option>
                            <option value="5star">&star;&star;&star;&star;&star;</option>
                            <option value="4star">&star;&star;&star;&star;</option>
                            <option value="3star">&star;&star;&star;</option>
                            <option value="2star">&star;&star;</option>
                            <option value="1star">&star;</option>
                        </select>
                        <select id="filter" name="filter"> 
                            <option value="Select">-- Select Developer --</option>
                            <option value="placetext">Krumware</option>
                            <option value="placetext">ChanceHimself</option>
                        </select>
        </div>

        <div className = "db-sort">
            <label for="sort">Sort by:</label>
            <select id="sort" name="sort">
                <option value="name">Name</option>
                <option value="reviews">Reviews</option>
                <option value="developer">Developer</option>
            </select>
        </div>

    </div>
  );
};

export default Filter;