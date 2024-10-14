import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    return navigate(`/search?query=${queryTerm}`) 
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between bg-white px-2 rounded-xl shadow-md">
      <input type="text" name="search" autoFocus className="px-2 text-black py-1 bg-none rounded-2xl outline-none" placeholder="Search..." />
      <button className="bg-none p-0 m-0" type="submit"><FaMagnifyingGlass className="text-primary cursor-pointer" /></button>
    </form>
  )
}

export default SearchInput