import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const NavBar = () => {
    const [isOpen, toggleSidebar] = React.useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
    <div className="hamMenu fixed block lg:hidden">
      <button 
      onClick={() => toggleSidebar(true)}
      className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div
        className={`NavBar 
        fixed z-30 inset-y-0 left-0 px-8 py-4 bg-blue-500 border-r 
        overflow-auto lg:static  lg:inset-auto lg:translate-x-0 
        transform ${
                  isOpen
                    ? "translate-x-0 ease-out transition-medium"
                    : "-translate-x-full ease-in transition-medium"
                }`}
      >
    <div className="fixed block lg:hidden">
      <button 
      onClick={() => toggleSidebar(false)}
      className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="NavBarItems mt-10 w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
      <div className="text-sm lg:flex-grow">
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          HOME
        </a>
        <a href="/tags" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          TAGS
        </a>
        <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          ABOUT
        </a>
      </div>
      <div className="text-sm lg:flex-grow "> 
      <ThemeToggler >
        {({ theme, toggleTheme }) => (
          <div className="mt-4 flex items-center  w-full mb-4">
            <label for="toogleA" className="flex items-center cursor-pointer">
            <div class="mr-3 text-sm">Light</div>
            <div className="relative">
              <input id="toogleA" type="checkbox" className="sr-only" 
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
              />
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </div>
          <div className="ml-3  text-sm">
            Dark
          </div>
          </label>
          </div>
        )}
      </ThemeToggler>
      </div>
    </div>
    </div>
  </nav>
  );
};

export default NavBar;