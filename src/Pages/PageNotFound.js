
import { Link } from 'react-router-dom'
import UseTitle from '../Hooks/UseTitle'


const PageNotFound = ({title}) => {
  UseTitle(title)
  return (
    <main className='min-h-screen-90 bg-moreLight dark:text-white dark:bg-lessDarkColor m-auto flex'>
      <div className='max-w-screen-2xl m-auto py-8 px-6 flex flex-col justify-center items-center'>
        <h1 className='text-5xl text-primary text-center'>Oops! Error 404.</h1>
        <h1 className='text-3xl mt-3 text-center'>Are You Lost?</h1>
        <h1 className='text-3xl my-3 text-center'>Let us take you back Home :)</h1>
        <Link to='/' className='bg-primary text-white rounded-lg text-2xl py-2 px-3'>Back Home</Link>
      </div>
    </main>
  )
}

export default PageNotFound