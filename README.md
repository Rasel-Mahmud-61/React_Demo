
# React + Vite

# Custom Hook
``` import React,{useState,useEffect} from "react";

export default function useFetch(url){

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data); // Adjust to access the 'todos' property from the fetched data
            })
            .catch((error) => console.error('Error fetching todos:', error));
    }, [url]);
        return {data} ;
}

```
