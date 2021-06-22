/*! For license information please see 11.aec91c16.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{449:function(e,t,a){"use strict";var s=a(0),n=a.n(s),l=a(553),r=a(451),m=a.n(r),c=a(452),o=a.n(c),i=a(138),u=a(3);const g=new m.a,d={summary:576,full:1632},f=(e,t)=>{let a=g.render(e.body);return t?o()(a,500):a},p=(e,t)=>{const a=e.image.split("/").pop();return`https://cdn.filestackcontent.com/resize=width:${d[t?"summary":"full"]}/auto_image/compress/${a}`};t.a=({post:e,summary:t=!1})=>{return n.a.createElement("article",{className:"mt-4 mb-12"},!t&&n.a.createElement("img",{src:p(e,t),className:"mt-1 mb-2 mr-4 w-full",loading:"lazy"}),n.a.createElement("header",{className:"flex items-center justify-between"},n.a.createElement("h1",{className:"text-2xl font-semibold"},n.a.createElement(u.Link,{to:u.routes.post({slug:e.slug}),className:"text-indigo-600 hover:bg-indigo-100 rounded"},e.title)),n.a.createElement("h2",{className:"text-sm text-gray-600"},"by ",e.author)),n.a.createElement("div",{className:"mt-2"},t&&n.a.createElement("img",{src:p(e,t),className:"float-left mt-1 mr-4 w-48"}),n.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:f(e,t)}}),t&&n.a.createElement("p",{className:"clearfix text-center"},n.a.createElement(u.Link,{to:u.routes.post({slug:e.slug}),className:"inline-block text-right text-indigo-600 hover:text-indigo-800 text-sm bg-indigo-100 hover:bg-transparent px-2 rounded font-medium hover:bg-indigo-100 rounded"},"Continue reading »"))),n.a.createElement("footer",{className:"flex items-center mt-4 text-xs text-gray-600"},n.a.createElement("time",null,"Posted: ",(a=e.postedAt,Object(l.a)(new Date(a),{addSuffix:!0}))),e.tags&&n.a.createElement("ul",{className:"flex-1 text-right"},n.a.createElement(i.a,{tags:e.tags}))));var a}},555:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(3),r=a(51),m=a(32),c=a(449);const o=m.a`
  query POSTS_FIND_BY_SLUG($slug: String) {
    post: findPostBySlug(slug: $slug) {
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
`;var i=Object(r.createCell)({beforeQuery:({slug:e})=>({variables:{slug:e}}),QUERY:o,Loading:()=>n.a.createElement("div",null,"Loading..."),Success:({post:e})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{post:e}))});t.default=()=>{const{slug:e}=Object(l.useParams)();return n.a.createElement(i,{slug:e})}}}]);
//# sourceMappingURL=11.aec91c16.chunk.js.map