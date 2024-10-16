import MovieCard from '../components/MovieCard'
import UseTitle from '../Hooks/UseTitle'

const MovieList = ({path, title}) => {
  UseTitle(title);
  return (
    <main className='min-h-screen-90 bg-moreLight dark:text-white dark:bg-lessDarkColor'>
      <section className='max-w-screen-xl my-auto mx-auto px-8 py-6'>
        <MovieCard path={path} />
      </section>
    </main>
  )
}

export default MovieList