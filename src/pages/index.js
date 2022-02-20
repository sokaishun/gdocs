import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "gatsby-image";
// Utilities
import kebabCase from "lodash/kebabCase"
import { FaTag } from 'react-icons/fa';
import { FaTags } from 'react-icons/fa';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail = post.frontmatter.thumbnail?.childImageSharp.fluid;
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                <div className="pb-2">
                     <Image className="object-none shadow rounded max-w-full max-h-[20rem] align-middle border-none" fluid={thumbnail} alt="Thumbnail画像" />
                </div>
                {post.frontmatter.tags ? (
                <div className="tags-container pb-2 flex flex-row justify-start items-center  space-x-2">
                  <FaTag/>
                  <ul className="taglist">
                    {post.frontmatter.tags.map(tag => (
                      <li key={tag + `tag`} className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">
                        <Link  to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <h2 className="flex flex-row justify-start items-center  space-x-2"><FaTags/><div>Tags</div></h2>
      <ul className="flex flex-wrap justify-start items-center  space-x-2">
        {data.allMarkdownRemark.group.map(tag => (
          <li key={tag.fieldValue} type="button" class="flex flex-col items-center px-3 py-2 text-sm font-medium text-center  bg-blue-200 rounded hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-black-200 dark:hover:bg-black-800 dark:focus:ring-blue-800">
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} 
              <span class="inline-flex justify-center items-center ml-2 w-5 h-5 text-xs font-semibold dark:bg-blue-500 bg-yellow-500 rounded-full">
              {tag.totalCount}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
