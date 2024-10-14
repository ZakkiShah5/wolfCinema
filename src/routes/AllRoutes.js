import { Route, Routes } from "react-router-dom"
import { MovieDetails, MovieList, PageNotFound, SearchMovie } from "../Pages"


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList path="movie/now_playing?" title="Home | WolfCinema" />}></Route>
        <Route path="/movies/popular" element={<MovieList path="movie/popular?" title="Popular | WolfCinema" />}></Route>
        <Route path="/movies/top" element={<MovieList path="movie/top_rated?" title="Top rated | WolfCinema" />}></Route>
        <Route path="/movies/upcoming" element={<MovieList path="movie/upcoming?" title="Upcoming | WolfCinema" />}></Route>
        <Route path="/search" element={<SearchMovie path="search/movie?" />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route path="*" element={<PageNotFound title="Page not found | WolfCinema" />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes