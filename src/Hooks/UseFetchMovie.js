import  { useEffect, useState } from 'react'

const UseFetchMovie = (path,queryTerm="") => {
    const [data, setData] = useState(null);
    const apiKey = process.env.REACT_APP_API_KEY;
    useEffect(()=>{
        const url = `https://api.themoviedb.org/3/${path}api_key=${apiKey}&query=${queryTerm}`;
        const fetchMovies = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.results)
          }
          fetchMovies();
    },[path, apiKey, queryTerm])
  return {data}
}

export default UseFetchMovie