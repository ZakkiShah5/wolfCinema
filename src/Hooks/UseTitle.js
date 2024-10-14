import { useEffect } from 'react'

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} | WolfCinema`
      },[title])
  return null
}

export default UseTitle