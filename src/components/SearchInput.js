import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchInput = () => {
  return (
    <div className="hidden md:flex items-center bg-white px-2 rounded-xl shadow-md">
        <input type="text" className="px-2 text-black py-1 bg-none rounded-2xl outline-none" placeholder="Search..." />
        <FaMagnifyingGlass className="text-primary cursor-pointer" />
    </div>
  )
}

export default SearchInput