import { Route, Routes } from "react-router-dom"
import { MovieDetails, MovieList, PageNotFound, SearchMovie } from "../Pages"


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<MovieList path="movie/now_playing?" />}></Route>
            <Route path="/movies/popular" element={<MovieList path="movie/popular?" />}></Route>
            <Route path="/movies/top" element={<MovieList path="movie/top_rated?" />}></Route>
            <Route path="/movies/upcoming" element={<MovieList path="movie/upcoming?" />}></Route>
            <Route path="/search" element={<SearchMovie/>}></Route>
            <Route path="/movie/:id" element={<MovieDetails/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes