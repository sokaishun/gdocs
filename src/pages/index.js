import * as React from "react";
import { Link, useStaticQuery,graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Image from "gatsby-image";

// Utilities
import kebabCase from "lodash/kebabCase";
import { FaTag } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import {auth,provider } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { signInWithPopup } from 'firebase/auth';
import { useLocation } from "@reach/router" // ★追加

const  BlogIndex = ({  }) => {
  const location = useLocation()
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
  `)
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes;

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
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
          <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;
          const thumbnail = post.frontmatter.thumbnail?.childImageSharp.fluid;
          return (
            <Fade left cascade>
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Link to={post.fields.slug} itemProp="url">
                    <section className="bg-white rounded-lg border 
                    shadow-md md:flex-row hover:bg-gray-100 
                    dark:border-gray-700 dark:bg-gray-800 
                    dark:hover:bg-gray-700">
                      <div className="pb-2">
                        <Image
                          className="object-none shadow rounded-t-lg max-w-full max-h-[20rem] align-middle border-none"
                          fluid={thumbnail}
                          alt="Thumbnail画像"
                        />
                      </div>
                      <div className="mx-2">
                        <header>
                          <h2>
                            <span itemProp="headline">{title}</span>
                          </h2>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        {post.frontmatter.tags ? (
                          <div className="tags-container pb-2 flex flex-row justify-start items-center  space-x-2">
                            <ul className="taglist">
                              {post.frontmatter.tags.map((tag) => (
                                <li
                                  key={tag + `tag`}
                                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-1.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                                >
                                  <FaTag className="inline-flex mr-1 w-3 h-3 fill-blue-500" />
                                  <Link to={`/tags/${kebabCase(tag)}/`}>
                                    {tag}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </div>
                    </section>
                  </Link>
                </article>
              </li>
            </Fade>
          );
        })}
      </ol>
      <h2 className="flex flex-row justify-start items-center  space-x-2">
        <FaTags />
        <div>Tags</div>
      </h2>
      <ul className="flex flex-wrap justify-start items-center">
        {data.allMdx.group.map((tag) => (
          <li
            key={tag.fieldValue}
            className="flex flex-col items-center text-sm font-medium mr-2 px-1.5 py-1 rounded text-center  bg-blue-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-black-200 dark:hover:bg-black-800 dark:focus:ring-blue-800"
          >
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <FaTag className="inline-flex mr-1 w-4 h-4 dark:fill-blue-500 fill-yellow-500" />
              {tag.fieldValue}
              <span className="inline-flex justify-center items-center ml-2 w-5 h-5 text-xs font-semibold dark:bg-blue-500 bg-yellow-500 rounded-full">
                {tag.totalCount}
              </span>
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  );
};

 function Home() {
  const [user] = useAuthState(auth);
  
    return (
      <>
        {user ? (
          <>
            <SignOutButton />
            <BlogIndex/>
          </>
        ) : (
          <SignInButton />
        )}
      </>
    );
  // return (
  //     <>
  //       {user ? (
  //         <>
  //          <BlogIndex />
  //         </>
  //       ) : (
  //         <SignInButton />
  //       )}
  //     </>
  //   );
};



function SignInButton (){
    const signInWithGoogle = () => {
      signInWithPopup(auth,provider);
    };
    return (
        <button onClick={signInWithGoogle}>
            <p>
                Google SignIn
            </p></button>
    );
    
    }
  function SignOutButton (){
    return (
        <button onClick={()=>auth.signOut()}>
            <p>
                Google SignOut
            </p></button>
    );
    }


    


export default Home;
