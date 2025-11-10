// useApp.jsx
import { useEffect, useMemo, useState } from "react";
import { useApps } from "./useApps";

export function useApp(id) {

    //  Get the whole list via the existing App List hook
  const { data: apps, loading: listLoading, error: listError } = useApps();

  const [single, setSingle] = useState(null); //  will hold the single app IF Fetched from SERVER
  const [singleLoading, setSingleLoading] = useState(false);  //  tracks loading state
  const [singleError, setSingleError] = useState(null);

  // try to find the app in the list first (fastest) checking memory
  const fromList = useMemo(() => {
    if (!apps || id == null) return null;
    const wanted = String(id);
    return apps.find(a => String(a._id) === wanted) || null;
  }, [apps, id]);

  // if not in list (and list finished loading), fetch the single item
  useEffect(() => {
    let cancelled = false;

    //  if we already have it from the list, or list is till loading, or no id = do nothing
    if (fromList || listLoading || id == null) return;

    setSingleLoading(true);
    setSingleError(null);

    //  Our second option to request from the server
    fetch(`/api/apps/${id}`)
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(json => { 
        if (!cancelled) setSingle(json); //  save the fetched app

      })
      .catch(e => { if (!cancelled) setSingleError(e); 

      })
      .finally(() => { if (!cancelled) setSingleLoading(false); });

    return () => { cancelled = true; };
  }, [fromList, listLoading, id]);

  const data = fromList ?? single;  //  where the single app from API is used, if the list from the hook didnt have it
  const isLoading = listLoading || singleLoading;  //  overall loading is true
  const error = listError || singleError;  
  const notFound = !isLoading && !error && !data; //  if nothing is loading, no error, app does not exist

  return { data, isLoading, error, notFound };
}