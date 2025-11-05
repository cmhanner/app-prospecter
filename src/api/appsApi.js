//  appsApi.jsx

import axios from "axios"; //  installed
const BASE_URL = "https://cmhanner.github.io/csce242/projects/part6/app.json"; // easier to change later for Thursday


export async function getApps() {
    const response =  await axios.get(BASE_URL);
    return response.data;
}






