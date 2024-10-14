
import { Link } from "react-router-dom";
import UseFetchMovie from "../Hooks/UseFetchMovie";

const MovieCard = ({path}) => {
  const {data} = UseFetchMovie(path);
  
  const genTemplate = () => {
    return data && data.map((movie) => {
      const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://images.unsplash.com/photo-1718268289378-1fd42d53bbdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
      return (
        <div key={movie.id} className="max-w-sm items-start justify-between md:max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-darkColor">
          <img
            className="w-full"
            src={image}
            alt="Card"
          />
          <div>
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{movie.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-base">{movie.overview}</p>
            </div>
            <div className="px-6 py-4 mt-auto">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-400 dark:hover:bg-blue-500">
                <Link to={`/movie/${movie.id}`}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className='my-1 gap-5 flex justify-between md:justify-start flex-wrap'>
      {
        genTemplate()
      }
    </div>
  )
}

export default MovieCard