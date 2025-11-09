//  appsApi.js

import appImagePlaceholder from "./../images/app-placement-image.jpg";
import axios from "axios"; //  installed
const BASE_URL = "https://server-app-prospecter.onrender.com/api/apps"; // easier to change later for Thursday
const IMG_URL = "https://server-app-prospecter.onrender.com/images/";

export async function getApps() {
    const response =  await axios.get(BASE_URL);
   const apps = response.data.map (app => ({
    ...app,
    imageUrl: app.image ? `${IMG_URL}${app.image}` : appImagePlaceholder
   }));
    return apps;
}







