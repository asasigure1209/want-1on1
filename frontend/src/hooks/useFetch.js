import { useState, useEffect } from "react";
import http from "../http-common"

export default function useFetch({ method, url, data = null}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      http[method](url, data)
        .then((res) => {
          setResponse(res.data);
        })
        .catch(error => { 
          setError(error)
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url]);

   return { response, error, isLoading };
}