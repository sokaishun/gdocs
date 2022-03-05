import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../images/profile-pic.png";
import { FaSchool,FaTools,FaDev,FaGit,FaMarkdown,FaCalendarAlt} from 'react-icons/fa';
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
          <li  className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <SiDotnet size={50} className="w-20 m-2 fill-blue-500"/>
            <div className="flex flex-col justify-between pl-5 w-4/5">
             <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2010年より</p>
              <p >設備使うパソコンのアプリケーションの開発</p>
            </div>
            </li>
            <li  className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <div className="w-20 m-2 text-center">Halcon</div>
            <div className="flex flex-col justify-between pl-5 w-4/5">
             <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2010年より</p>
              <p >画像処理アプリケーション開発用のライブラリ</p>
            </div>
            </li>
            <li  className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <SiAzuredevops size={50} className="w-20 m-2 fill-blue-500"/>
            <div className="flex flex-col justify-between pl-5 w-4/5">
              <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2013年より</p>
              <p >アプリケーションのソースコード管理、CIパイプライン</p>
            </div>
            </li>
            <li  className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <div className="w-20 m-2 text-center">Mkdocs</div>
            <div className="flex flex-col justify-between pl-5 w-4/5">
             <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2020年より</p>
              <p >Markdown文書をウェブページ化</p>
            </div>
          </li>
          <li  className="techSkill flex items-center
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <SiVisualstudio size={50} className="w-20 m-2 fill-purple-600"/>
            <div className="flex flex-col justify-between pl-5 w-4/5">
             <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2020年より</p>
              <p >Visual Basicアプリケーション開発IDE、Markdown文書の作成用、またはJavascriptのコード作成</p>
            </div>
            </li>
            <li  className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <FaGit size={50}  className="w-20 m-2"/>
            <div className="flex flex-col justify-between pl-5 w-4/5">
             <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2020年より</p>
              <p >ソースコードまたはMarkdown文書のバージョン管理</p>
            </div>
            </li>
            <li  className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <FaMarkdown size={50} className="w-20 m-2"/>
            <div className="flex flex-col justify-between pl-5 w-4/5">
             <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2020年より</p>
              <p >ソフトウェアの仕様書作成用</p>
            </div>
            </li>
            <li  className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700">
            <SiAnsible size={50} className="w-20 m-2 fill-stone-400"/>
            <div className="flex flex-col justify-between pl-5 w-4/5">
             <p className="flex flex-row items-center mt-0 mb-0"><FaCalendarAlt className="mr-1"/>2022年より</p>
              <p >パソコンのセットアップやソフトウェアの配布の自動化</p>
            </div>
            </li>
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
