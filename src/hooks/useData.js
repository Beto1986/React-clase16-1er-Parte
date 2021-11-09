import { useEffect, useState } from "react";
import axios from "axios";

const getData = async (url, setLoader) => {
  setLoader(true);
  const respuesta = await axios.get(url);
  setLoader(false);
  return respuesta;
};

const useData = (url) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData(url, setLoader).then((r) => setData(r.data));
  }, []);

  return { data, loader };
};

export default useData;
