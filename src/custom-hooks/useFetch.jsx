import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
     
    (async () => {
      try {
        const {data, status } = await axios.get(url);
        if (status === 200) setData(data);
      } catch (error) {
        setError(error);
      }
      finally{
          setLoader(false)
      }
    })();
  }, [url]);
  return { data, error, loader}
};

export {useFetch}