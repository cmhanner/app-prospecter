//  appsApi.js

import appImagePlaceholder from "./../images/app-placement-image.jpg";
import axios from "axios"; //  installed
//  Local Host: http://localhost:3001/api/apps
//  Redner Link: https://server-app-prospecter.onrender.com/api/apps
const BASE_URL = " https://server-app-prospecter.onrender.com/api/apps"; // easier to change later for Thursday
//  Local Host: http://localhost:3001/api/apps/images
//  Render Link: https://server-app-prospecter.onrender.com/images/
const IMG_URL = "https://server-app-prospecter.onrender.com/images/";

export async function addApp (formData) {

    const response = await fetch (BASE_URL, {
        method: "POST",
        body: formData,
    }

    );

    if (!response.ok) {
        const text = await response.text();
        console.error("Server error:", response.status, text)
        throw new Error (text || "API: Failed to add app");
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







