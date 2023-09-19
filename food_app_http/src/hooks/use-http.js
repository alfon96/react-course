import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (requestParams, apply = null) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(requestParams.url, {
        method: requestParams.method ?? "GET",
        headers: requestParams.headers ?? {},
        body: requestParams.body ? JSON.stringify(requestParams.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      const data = await response.json();
      if (apply !== null) apply(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
