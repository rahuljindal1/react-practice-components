import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [url]);

  return {
    isLoading,
    response,
    error,
  };
}
