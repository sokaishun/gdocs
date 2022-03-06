import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import Image from "gatsby-image";
// Components
import { Link, graphql } from "gatsby";

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} node${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <div>
      <Layout location={location}>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const thumbnail = node.frontmatter.thumbnail?.childImageSharp.fluid;
            const { slug } = node.fields;
            const { title } = node.frontmatter;
            return (
              <li
                key={slug}
                className="rounded-xl  mx-auto  mt-10 bg-gradient-to-r p-[4px] from-[#FF512F] via-[#DD2476] to-[#9333EA]"
              >
                <Link to={slug}>
                  <div className="tagPost flex flex-col justify-between h-full rounded-lg p-2">
                    <header>
                      <h4>{title}</h4>
                      <small>{node.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <Link to="/tags">All tags</Link>
      </Layout>
    </div>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
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
  }
`;
