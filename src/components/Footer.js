import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light dark:text-white dark:bg-darkColor shadow-sm">
      <div className="px-8 py-6 max-w-screen-xl  transition ease-in-out dark:text-white dark:bg-darkColor  my-0 mx-auto flex justify-between items-center">
        <div>
          <p>© 2024 WolfCinema</p>
        </div>
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/ZakkiShah5/"><FaGithub /></a>
          <a href="https://www.instagram.com/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer