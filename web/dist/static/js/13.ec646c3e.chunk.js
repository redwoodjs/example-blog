/*! For license information please see 13.ec646c3e.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{449:function(e,t,a){"use strict";var s=a(0),n=a.n(s),r=a(553),l=a(451),m=a.n(l),c=a(452),o=a.n(c),i=a(138),g=a(3);const u=new m.a,d={summary:576,full:1632},p=(e,t)=>{let a=u.render(e.body);return t?o()(a,500):a},f=(e,t)=>{const a=e.image.split("/").pop();return`https://cdn.filestackcontent.com/resize=width:${d[t?"summary":"full"]}/auto_image/compress/${a}`};t.a=({post:e,summary:t=!1})=>{return n.a.createElement("article",{className:"mt-4 mb-12"},!t&&n.a.createElement("img",{src:f(e,t),className:"mt-1 mb-2 mr-4 w-full",loading:"lazy"}),n.a.createElement("header",{className:"flex items-center justify-between"},n.a.createElement("h1",{className:"text-2xl font-semibold"},n.a.createElement(g.Link,{to:g.routes.post({slug:e.slug}),className:"text-indigo-600 hover:bg-indigo-100 rounded"},e.title)),n.a.createElement("h2",{className:"text-sm text-gray-600"},"by ",e.author)),n.a.createElement("div",{className:"mt-2"},t&&n.a.createElement("img",{src:f(e,t),className:"float-left mt-1 mr-4 w-48"}),n.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:p(e,t)}}),t&&n.a.createElement("p",{className:"clearfix text-center"},n.a.createElement(g.Link,{to:g.routes.post({slug:e.slug}),className:"inline-block text-right text-indigo-600 hover:text-indigo-800 text-sm bg-indigo-100 hover:bg-transparent px-2 rounded font-medium hover:bg-indigo-100 rounded"},"Continue reading »"))),n.a.createElement("footer",{className:"flex items-center mt-4 text-xs text-gray-600"},n.a.createElement("time",null,"Posted: ",(a=e.postedAt,Object(r.a)(new Date(a),{addSuffix:!0}))),e.tags&&n.a.createElement("ul",{className:"flex-1 text-right"},n.a.createElement(i.a,{tags:e.tags}))));var a}},557:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(3),l=a(51),m=a(32),c=a(449);const o=m.a`
  query POST($tag: String) {
    posts: findPostsByTag(tag: $tag) {
      id
      title
      slug
      author
      body
      image
      postedAt
      tags {
        id
        name
      }
    }
  }
`;var i=Object(l.createCell)({beforeQuery:({tag:e})=>({variables:{tag:e}}),QUERY:o,Loading:()=>n.a.createElement("div",null,"Loading..."),Success:({posts:e})=>e.map((e=>n.a.createElement(c.a,{key:e.id,post:e,summary:!0})))});t.default=()=>{const{tag:e}=Object(r.useParams)();return n.a.createElement(i,{tag:e})}}}]);
//# sourceMappingURL=13.ec646c3e.chunk.js.map