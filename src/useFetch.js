import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
  
const [isPending, setIsPending] = useState(true);

useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldnt fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
      });
  }, [url]);
       return {isPending, data,nextUrl,prevUrl};
}


export default useFetch;