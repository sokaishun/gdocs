import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../images/profile-pic.png";
import Fade from "react-reveal/Fade";
import {
  FaSchool,
  FaTools,
  FaDev,
  FaGit,
  FaMarkdown,
  FaCalendarAlt,
  FaRocket,
  FaBook,
  FaQuestion,
} from "react-icons/fa";
import {
  SiDotnet,
  SiAzuredevops,
  SiVisualstudio,
  SiAnsible,
  SiMqtt,
} from "react-icons/si";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h2 className="flex flex-row justify-start items-center space-x-2">
          <FaSchool />
          <div>自己紹介</div>
        </h2>
        <ol class="relative border-l border-white dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              来日
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2002/10
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              愛知県名古屋市の日本語学校に入学。 一年間半の日本語を勉強した。
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              大学入学
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2004/4
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              愛知県の大学　情報工学科入学。
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              大学院卒業
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2010/3
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              情報工学科研究科卒業　画像処理関係の研究。
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              愛知県の会社入社
              <a class="bg-blue-100 text-blue-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                現在
              </a>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2010/4
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              入社後の仕事内容は自動検査設備の開発。
              <br />
              プログラム作成をはじめ、仕様検討を行い、実機の立ち上げなど一連の仕事を何回も経験した。
              <br />
              同じような仕事をやり続いているが、新しい技術を取り入れて工夫しながら効率をはかることが心がけているところ。
            </p>
          </li>
        </ol>
        <h2 className="flex flex-row justify-start items-center space-x-2">
          <FaTools />
          <div>仕事で使っている技術</div>
        </h2>
        <ul>
          　　　　　　{" "}
          <Fade left cascade>
            <li
              className="techSkill flex items-center
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <SiVisualstudio size={50} className="w-20 m-2 fill-purple-600" />
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2010年～
                </p>
                <p>
                  Visual
                  Basicアプリケーション開発IDE、Markdown文書の作成用、またはJavascriptのコード作成
                </p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <SiDotnet size={50} className="w-20 m-2 fill-blue-500" />
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2010年～
                </p>
                <p>設備使うパソコンのアプリケーションの開発</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <div className="w-20 m-2 text-center">Halcon</div>
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2010年～
                </p>
                <p>画像処理アプリケーション開発用のライブラリ</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <SiAzuredevops size={50} className="w-20 m-2 fill-blue-500" />
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2013年～
                </p>
                <p>アプリケーションのソースコード管理、CIパイプライン</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <div className="w-20 m-2 text-center">WiX Toolset</div>
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2019年～
                </p>
                <p>.NET アプリケーションのインストーラー作成</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <div className="w-20 m-2 text-center">RestApi</div>
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2020年～
                </p>
                <p>Azure Devops server wiki api操作</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <div className="w-20 m-2 text-center">Mkdocs</div>
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2020年～
                </p>
                <p>Markdown文書をウェブページ化</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <FaGit size={50} className="w-20 m-2" />
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2020年～
                </p>
                <p>ソースコードまたはMarkdown文書のバージョン管理</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <FaMarkdown size={50} className="w-20 m-2" />
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2020年～
                </p>
                <p>ソフトウェアの仕様書作成用</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
              <SiAnsible size={50} className="w-20 m-2 fill-stone-400" />
              <div className="flex flex-col justify-between pl-5 w-4/5">
                <p className="flex flex-row items-center mt-0 mb-0">
                  <FaCalendarAlt className="mr-1" />
                  2022年～
                </p>
                <p>パソコンのセットアップやソフトウェアの配布の自動化</p>
              </div>
            </li>
            <li
              className="techSkill flex items-center 
          bg-white rounded-lg border shadow-md md:flex-row 
          hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
          dark:hover:bg-gray-700"
            >
            <SiMqtt size={50} className="w-20 m-2 fill-stone-400" />
            <div className="flex flex-col justify-between pl-5 w-4/5">
              <p className="flex flex-row items-center mt-0 mb-0">
                <FaCalendarAlt className="mr-1" />
                2023年～
              </p>
              <p>MQTT：各種デバイスからの情報収集</p>
            </div>
          </li>
          </Fade>
        </ul>

        <h2 className="flex flex-row justify-start items-center space-x-2">
          <FaDev />
          <div>やっていきたい技術</div>
        </h2>
        <ul>
          <li class="block p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="flex flex-row justify-start items-center space-x-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <FaRocket />
              <div>Devops</div>
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Continuous Integration（継続的インテグレーション）/Continuous Delivery（継続的デリバリー）関係。
              <br />
              アプリケーションを含めたサービスを自動配布によって、はやく製造現場へ提供できる仕組みをかんがえていきたい。
              <br />
              工場の自動化にもつながることを実現したい。
            </p>
          </li>
          <li class="block p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="flex flex-row justify-start items-center space-x-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <FaBook />
              <div>Content Management System(CMS)</div>
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              設計文書の管理を実現できるシステム。
              <br />
              いかに定着性がある文書のフォーマットと図面のようなPlainTextではないデータを含めて考えていきたい。
              <br />
              誰でも簡単に使えるシステムをどのデバイスでも使えるようにしていくことを重心に考える。
            </p>
          </li>
          <li class="block p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="flex flex-row justify-start items-center space-x-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <FaQuestion />
              <div>自動化</div>
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">業務の自動化、例えばGoogle
              Apiを使用したメールの自動記録やFAQシステムの自動返答のためのChatbotシステムなどを考えていきたい。
              <br />
              さまざまな記録を残すための自動化と再利用するための自動化を全面的に推進していきたい。
            </p>
          </li>
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
