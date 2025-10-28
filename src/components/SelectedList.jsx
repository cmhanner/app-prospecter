import "./../css/SelectedList.css"
import Toolkit from "./Toolkit";
import { useState } from "react"

const SelectedList = () => {
    const [formFields, setFormFields] = useState({ //from https://medium.com/@amooemma10/creating-forms-in-react-eb4e894c3ada
        description: "",
    })


    function handleChange(event) { //  from https://medium.com/@amooemma10/creating-forms-in-react-eb4e894c3ada
        const {name, value, type, checked} = event.target
        setFormFields(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
  return (
    

    <div className = "List-Info">
        <h2 id = "ListSelected">List Selected: </h2>
        <h3 id = "displayedList">📉 Low Rated Apps</h3>
        <textarea //  from https://medium.com/@amooemma10/creating-forms-in-react-eb4e894c3ada
                placeholder="description"
                onChange={handleChange}
                name="description"
                value={formFields.description}
        />

        <Toolkit />
    </div>
  );
};

export default SelectedList;