// useApp.jsx
import { useMemo } from "react";  //  to avoid reusing .find on every render
import useApps from "./useApps";


export function useApp(id) { //  takes the id
   const {data: apps, loading, error} = useApps();  //  calls useApps which is fetching and setting the state of the data

   const app = useMemo (
    () => (
        apps ? //  if the app array loads
        apps.find(a => String(a._id) === String (id)) //  true scan the array and return the item that matches
        : null  // false return null
    ),
    [apps, id] //  depedancy arrray
   );

   //  loading is true until apps are feteched
    const notFound = !loading && apps && !app;

    return {app, loading, error, notFound};

   


}