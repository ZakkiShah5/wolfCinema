import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../components"
import ResultsFound from "../components/ResultsFound";
import UseTitle from "../Hooks/UseTitle";



const SearchMovie = ({path}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query"); 
  UseTitle(`Search result for ${queryTerm}`)
  return (
    <main className='min-h-screen-90 bg-moreLight dark:text-white dark:bg-lessDarkColor'>
      <ResultsFound path={path} queryTerm={queryTerm} />
      <section className='max-w-screen-xl my-auto mx-auto px-8 py-6'>
        <MovieCard path={path} queryTerm={queryTerm} />
      </section>
    </main>
  )
}

export default SearchMovie