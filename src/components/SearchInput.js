import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchInput = () => {
  return (
    <div className="flex items-center justify-between bg-white px-2 rounded-xl shadow-md">
        <input type="text" autoFocus className="px-2 text-black py-1 bg-none rounded-2xl outline-none" placeholder="Search..." />
        <FaMagnifyingGlass className="text-primary cursor-pointer" />
    </div>
  )
}

export default SearchInput