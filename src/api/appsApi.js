//  appsApi.js

import appImagePlaceholder from "./../images/app-placement-image.jpg";
import axios from "axios"; //  installed
const BASE_URL = "https://server-app-prospecter.onrender.com/api/apps"; // easier to change later for Thursday
const IMG_URL = "https://server-app-prospecter.onrender.com/images/";

export async function addApp (app) {

    const response = await fetch (BASE_URL, {
        method: "POST",
        body: FormData
    }

    );

    if (!response.ok) {
        throw new Error ("Failed to add app");
    }

    return response.json(); //  return new app from the server
}

export async function getApps() {
    const response =  await axios.get(BASE_URL);
   const apps = response.data.map (app => ({
    ...app,
    imageUrl: app.image ? `${IMG_URL}${app.image}` : appImagePlaceholder
   }));
    return apps;
}







