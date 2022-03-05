import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../images/profile-pic.png";
import { FaSchool,FaTools,FaDev} from 'react-icons/fa';

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h2 className="flex flex-row justify-start items-center space-x-2"><FaSchool/><div>自己紹介</div></h2>
        <ul>
          <li>2010/3 大学院卒業　研究内容:画像処理</li>
          <li>2010/4 入社　仕事内容:主に自動検査設備の開発</li>
        </ul>

        <h2 className="flex flex-row justify-start items-center space-x-2"><FaTools/><div>仕事で使っている技術</div></h2>
         <ul>
          <li>.NET：設備使うパソコンのアプリケーションの開発（2010年から）</li>
          <li>Azure devops server：アプリケーションのソースコード管理、CIパイプライン（2013年から）</li>
          <li>Mkdocs：Markdown文書をウェブページ化（2020年から）</li>
          <li>Visual Studio/VSCode：Visual Basicコード作成用IDE、Markdown文書の作成用、またはJavascriptのコード作成（2020年から）</li>
          <li>git：ソースコードまたはMarkdown文書のバージョン管理（2020年から）</li>
          <li>Markdown：ソフトウェアの仕様書作成用（2020年から）</li>
          <li>Ansible：パソコンのセットアップやソフトウェアの配布の自動化（2022年から）</li>
        </ul>

        <h2 className="flex flex-row justify-start items-center space-x-2"><FaDev/><div>興味ある技術</div></h2>
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
