import UseFetchMovie from "../Hooks/UseFetchMovie"


const ResultsFound = ({path, queryTerm=""}) => {
    const {data} = UseFetchMovie(path,queryTerm)
  return (
    <div className="max-w-screen-xl my-auto mx-auto px-8 py-6">
        <p className="text-2xl">{data && data.length === 0? `No Results Found for "${queryTerm}"`: `Results Found for "${queryTerm}"`}</p>
      </div>
  )
}

export default ResultsFound