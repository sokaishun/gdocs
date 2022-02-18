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
          <li>2010/3 大学院卒業　研究内容:画像処理</li>
          <li>2010/4 入社　仕事内容:主に自動検査設備の開発</li>
        </ul>

       <h2>仕事で使っている技術</h2>
         <ul>
          <li>.net</li>
          <li>Azure devops server</li>
          <li>Mkdocs</li>
          <li>Visual Studio/VSCode</li>
          <li>git</li>
          <li>Markdown</li>
          <li>Ansible</li>
        </ul>

        <h2>興味ある技術</h2>
         <ul>
          <li>Devops</li>
          <li>CMS</li>
          <li>自動化</li>
        </ul>
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
