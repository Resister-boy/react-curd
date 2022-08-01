import { useEffect, useState } from "react"

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
    })
    .then(data => {
      setData(data);
    });
  }, [url])
  return data
}

export default useFetch