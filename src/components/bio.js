/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <a
      href="/about"
      className="bio flex items-center 
    bg-white rounded-lg border shadow-md md:flex-row 
    hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
    dark:hover:bg-gray-700"
    >
      <div className="img-container">
        <div className="flex-none img-circle" />
      </div>

      <div class="flex flex-col justify-between pl-5">
        <h5 class="mt-3 mb-3 font-bold">
          {author?.name || null}
          {` `}
        </h5>
        <p class="mb-3">
          {author?.summary || null}
          {` `}
        </p>
      </div>
    </a>
  );
};

export default Bio;
