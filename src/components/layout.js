import * as React from "react";
import { Link } from "gatsby";

import Menu from "./Menu";
import { FaHome } from "react-icons/fa";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <div className="flex flex-row justify-start items-center space-x-2">
            <FaHome />
            <div>{title}</div>
          </div>
        </Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div
      id="outer-container"
      className="global-wrapper"
      data-is-root-path={isRootPath}
    >
      <Menu
        width={"320px"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
      />
      <div id="page-wrap">
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
