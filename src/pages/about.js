import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../images/profile-pic.png";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h2>自己紹介</h2>
        <ul>
          <li>2010/3 大学院卒業</li>
          <li>2010/4 製造業会社へ入社、以降設備の開発を従事</li>
        </ul>
        <h2>現在の仕事内容</h2>
        <p>エンジニアとして働いている。主に設備の開発を中心。</p>
      </Layout>
    </div>
  );
};

export default Aboutpage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`;