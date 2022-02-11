import * as React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <ThemeToggler >
        {({ theme, toggleTheme }) => (
          <div className="flex items-center justify-center w-full mb-12">
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
      <header className="global-header">{header}</header>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
