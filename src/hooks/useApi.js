import axios from "axios";
import { useCallback, useEffect, useState } from "react";
export default function useApi(URL, defaultData = []) {
  const [data, setData] = useState(defaultData);
  const [isLoadingData, setLoadingData] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoadingData(true);
    try {
      const res = await axios.get(URL);
      setLoadingData(false);
      setData(res.data);
    } catch (e) {
      setLoadingData(false);
      setError(e);
    }
  }, [URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoadingData, isError };
}
