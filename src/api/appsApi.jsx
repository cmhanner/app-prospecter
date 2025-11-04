//  appsApi.jsx
import {useState, useEffect} from "react";
import axios from "axios"; //  installed

//  version 1 what I think from class she might have something different
const appsApi = () => {
    const [apps, setApps] = useState([]);

    useEffect(()=>{
            const loadApps = async() => {
                const response = await axios.get("https://cmhanner.github.io/csce242/projects/part6/app.json");
                setApps(response.data);
            };

            loadApps();
        },[]);

}

//  version 2 from the internet no idea what's going on
const appsApi2 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(null);

     useEffect(()=>{
            const loadApps = async() => {
                setLoading(true);
                try {
                     const response = await axios.get("https://cmhanner.github.io/csce242/projects/part6/app.json");
                    setData(response.data);
                } catch (err) {
                    setError (err);
                } finally {
                    setLoading (false)
                }
               
            };

            loadApps();
        },[]);


    const {
        getApps: {
            _id,
            name,
            image,
            company,
            industry,
            rating,
            rating_count,
            developer,
            note,
            app_store_url,
            website_url
        }
    } = useAppsApi2 ()

    return {data, loading, error};


}

export default appsApi;


