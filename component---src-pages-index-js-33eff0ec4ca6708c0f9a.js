"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{6558:function(e,t,l){l.r(t);var a=l(7294),n=l(1597),r=l(8771),o=l(2230),s=l(9357),i=l(6162),m=l(1804),c=l.n(m);t.default=function(e){var t,l=e.data,m=e.location,u=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=l.allMarkdownRemark.nodes;return 0===d.length?a.createElement(o.Z,{location:m,title:u},a.createElement(s.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(o.Z,{location:m,title:u},a.createElement(s.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t,l=e.frontmatter.title||e.fields.slug,r=null===(t=e.frontmatter.thumbnail)||void 0===t?void 0:t.childImageSharp.fluid;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},l))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("div",{className:"pb-2"},a.createElement(i.Z,{className:"object-none h-48 w-96",fluid:r,alt:"Thumbnail画像"})),e.frontmatter.tags?a.createElement("div",{className:"tags-container pb-2"},a.createElement("ul",{className:"taglist"},e.frontmatter.tags.map((function(e){return a.createElement("li",{key:e+"tag",className:"bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"},a.createElement(n.Link,{to:"/tags/"+c()(e)+"/"},e))})))):null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-33eff0ec4ca6708c0f9a.js.map