import { Link, NavLink } from "react-router-dom"
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobMenu, setMobMenu] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.removeAttribute("class");
        }
    }, [darkMode])
    return (
        <header className="bg-light dark:text-white dark:bg-darkColor">
        <div className="px-8 py-2 max-w-screen-xl  transition ease-in-out dark:text-white dark:bg-darkColor  my-0 mx-auto flex items-center justify-between">
            <Link to="/">
                <img className="w-16 sm:w-20" src="/transparent.png" alt="logo" />
            </Link>
            <nav className="hidden sm:flex  gap-4 font-medium">
                <NavLink className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary"} to='/'>Home</NavLink>
                <NavLink to='/movies/popular' className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary"}>Popuplar</NavLink>
                <NavLink to='/movies/top' className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary"}>Top Rated</NavLink>
                <NavLink to='/movies/upcoming' className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary"}>Upcomings</NavLink>
            </nav>
            <div className="flex gap-4 items-center">
                <div>
                    <SearchInput />
                </div>
                <div className="flex bg-primary text-white py-2 px-2 rounded-full cursor-pointer shadow-lg" onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ?
                            <IoSunny />
                            : <FaMoon />
                    }
                </div>
                <div className="sm:hidden">
                    <FaBars onClick={() => setMobMenu(!mobMenu)} className="text-xl cursor-pointer" />
                </div>
            </div>

            {mobMenu && (
                <div className="absolute top-16 left-0 right-0 bg-light dark:bg-darkColor px-8 py-4 flex flex-col gap-4 sm:hidden border-t">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "hover:text-primary"
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies/popular"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "hover:text-primary"
                        }
                    >
                        Popular
                    </NavLink>
                    <NavLink
                        to="/movies/top"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "hover:text-primary"
                        }
                    >
                        Top Rated
                    </NavLink>
                    <NavLink
                        to="/movies/upcoming"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "hover:text-primary"
                        }
                    >
                        Upcomings
                    </NavLink>
                </div>
            )}
        </div>
        </header>
    )
}

export default Header