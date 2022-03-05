import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../images/profile-pic.png";
import { FaSchool,FaTools,FaDev,FaGit,FaMarkdown} from 'react-icons/fa';
import { SiDotnet,SiAzuredevops,SiVisualstudio,SiAnsible} from 'react-icons/si';

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
          <li  className="flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <SiDotnet size={70} className="fill-blue-500"/>
            <div className="flex flex-col justify-between pl-5">
              <p className="mt-0 mb-0">2010年から</p>
              <p >設備使うパソコンのアプリケーションの開発</p>
            </div>
            </li>
          <li><SiAzuredevops size={50} className="fill-blue-500"/>アプリケーションのソースコード管理（2013年から）</li>
          <li>Mkdocs：Markdown文書をウェブページ化（2020年から）</li>
          <li><SiVisualstudio size={50} className="fill-purple-600"/>Markdown文書の作成用、またはJavascriptのコード作成（2020年から）</li>
          <li><FaGit size={50} />ソースコードまたはMarkdown文書のバージョン管理（2020年から）</li>
          <li><FaMarkdown size={50} />ソフトウェアの仕様書作成用（2020年から）</li>
          <li><SiAnsible size={50} className="fill-stone-400"/>パソコンのセットアップやソフトウェアの配布の自動化（2022年から）</li>
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
