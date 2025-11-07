//  appsApi.jsx

import axios from "axios"; //  installed
const BASE_URL = "https://server-app-prospecter.onrender.com/api/apps"; // easier to change later for Thursday
// const IMG_URL = "https://cmhanner.github.io/tree/main/csce242/projects/part6/images_json";

export async function getApps() {
    const response =  await axios.get(BASE_URL);
    // const image = await axios.get("https://cmhanner.github.io/tree/main/csce242/projects/part6/" + response.image); 
    return response.data;
}







