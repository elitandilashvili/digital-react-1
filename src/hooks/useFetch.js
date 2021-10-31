import { useEffect, useState } from 'react';

export const UseFetch = (initialUrl, initialOption) => {
  const [url, setUrl] = useState(initialUrl);
  const [option, setOption] = useState(initialOption);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    const fetchData = async () => {
      try {
        const response = await fetch(url, option);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchData();
    return () => {
      console.log('CLEAN USE FETCH');
    };
  }, [url, option]);

  return { data, error, loading, setUrl, setOption };
};
