import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaDotCircle} from "react-icons/fa";
import UseTitle from '../Hooks/UseTitle';

const MovieDetails = () => {
  const useParam = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${useParam.id}?api_key=${apiKey}`)
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, [useParam.id]);

  
  const getGenre = () => {
    return data.genres && data.genres.map((genre) => (
      <span className='border-slate-500 rounded-xl border py-1 px-2' key={genre.id}>{genre.name}</span>
    ))
  }
  const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : `https://images.unsplash.com/photo-1613679074971-91fc27180061?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  if(data){
    UseTitle(`${data.title} | WOlf Cinema`);
  }

  return (
    <main className='min-h-screen-90 bg-moreLight dark:text-white dark:bg-lessDarkColor'>
      <div className='flex flex-wrap sm:flex-nowrap gap-5 max-w-screen-xl my-auto mx-auto px-8 py-6'>
        <div className='max-w-sm'>
          <img
            className="w-full"
            src={image}
            alt="Card"
          />
        </div>
        <div className='flex flex-col max-w-2xl gap-2'>
          <h1 className='text-4xl font-extrabold'>{data.title}</h1>
          <p className='text-lg'>{data.overview}</p>
          <p className='flex gap-2'>{getGenre()} </p>
          <div className='flex items-center gap-2'>
            <FaStar className='text-yellow-400' />
            <p>{data.vote_average} </p>
            <FaDotCircle className='text-gray-300' />
            <p>{data.vote_count} reviews</p>
          </div>
          <p className='flex gap-2 items-center'> <span className='text-xl font-extrabold'>Runtime:</span>{data.runtime} minutes </p>
          <p className='flex gap-2 items-center'> <span className='text-xl font-extrabold'>Budget:</span>{data.budget === 0 ? "Not available": `$${data.budget}`}  </p>
          <p className='flex gap-2 items-center'> <span className='text-xl font-extrabold'>Revenue:</span>{data.revenue === 0 ? "Not available": `$${data.revenue}`}  </p>
          <p className='flex gap-2 items-center'> <span className='text-xl font-extrabold'>Status:</span>{data.budget !== 0 && data.revenue >= data.budget ? "Hit": "Flop"}  </p>
          <p className='flex gap-2 items-center'> <span className='text-xl font-extrabold'>Release Date:</span>{data.release_date}  </p>
          <p className='flex gap-2 items-center'> <span className='text-xl font-extrabold'>IMDB Code:</span><a href={`https://www.imdb.com/title/${data.imdb_id}`} target='_blank' rel="noopener noreferrer">{data.imdb_id} </a> </p>
        </div>
      </div>
    </main>
  )
}

export default MovieDetails