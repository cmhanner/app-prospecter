//  useAppS.jsx
import { useEffect, useState } from "react";
import { getApps } from "../api/appsApi";

export function useApps() {
    const [data, setData] = useState([]); //  holds the apps array once loaded
    const [loading, setLoading] = useState (true);  //  shows true while we get request for data
    const [error, setError] = useState(null);  //  throws a error

    //  useEffect is responsible for the DataFetching
    useEffect( () =>{ //  runs the inside code once  after first render
        let cancelled = false; //  tracks if componet comes into existence(mounted) or if it's removed from existence(unmounted)

        //  async must be inside, it returns our promise, 
       (async () => {
            setLoading(true);
            try {
                const apps = await getApps();  // call  API module
                if (!cancelled) 
                    setData(apps); // only update state if it exist/mounts
                    console.log("useApps:setData ->", apps.length); //used for debugging
            } catch (e) {
                if (!cancelled) 
                    setError(e); //  set error on failure
                    console.log("useApps error ->", e)
            } finally {
                if (!cancelled) setLoading(false);  //  set loading to false
            }
        })();

       return () => {cancelled = true}; //  cleanup 
    }, []);

    return { data, loading, error }
}