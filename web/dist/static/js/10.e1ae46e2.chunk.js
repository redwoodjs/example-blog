/*! For license information please see 10.e1ae46e2.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{449:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(553),l=a(451),m=a.n(l),o=a(452),c=a.n(o),i=a(138),g=a(3);const u=new m.a,p={summary:576,full:1632},d=(e,t)=>{let a=u.render(e.body);return t?c()(a,500):a},x=(e,t)=>{const a=e.image.split("/").pop();return`https://cdn.filestackcontent.com/resize=width:${p[t?"summary":"full"]}/auto_image/compress/${a}`};t.a=({post:e,summary:t=!1})=>{return s.a.createElement("article",{className:"mt-4 mb-12"},!t&&s.a.createElement("img",{src:x(e,t),className:"mt-1 mb-2 mr-4 w-full",loading:"lazy"}),s.a.createElement("header",{className:"flex items-center justify-between"},s.a.createElement("h1",{className:"text-2xl font-semibold"},s.a.createElement(g.Link,{to:g.routes.post({slug:e.slug}),className:"text-indigo-600 hover:bg-indigo-100 rounded"},e.title)),s.a.createElement("h2",{className:"text-sm text-gray-600"},"by ",e.author)),s.a.createElement("div",{className:"mt-2"},t&&s.a.createElement("img",{src:x(e,t),className:"float-left mt-1 mr-4 w-48"}),s.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:d(e,t)}}),t&&s.a.createElement("p",{className:"clearfix text-center"},s.a.createElement(g.Link,{to:g.routes.post({slug:e.slug}),className:"inline-block text-right text-indigo-600 hover:text-indigo-800 text-sm bg-indigo-100 hover:bg-transparent px-2 rounded font-medium hover:bg-indigo-100 rounded"},"Continue reading »"))),s.a.createElement("footer",{className:"flex items-center mt-4 text-xs text-gray-600"},s.a.createElement("time",null,"Posted: ",(a=e.postedAt,Object(r.a)(new Date(a),{addSuffix:!0}))),e.tags&&s.a.createElement("ul",{className:"flex-1 text-right"},s.a.createElement(i.a,{tags:e.tags}))));var a}},554:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),l=a(51),m=a(32),o=a(449);var c=({count:e,page:t,perPage:a})=>{const n=[];for(let l=0;l<Math.ceil(e/a);l++)n.push(s.a.createElement("li",{key:l,className:"inline-block mx-1 text-indigo-400"},s.a.createElement(r.Link,{to:r.routes.home({page:l+1}),className:t===l+1?"py-1 px-3 bg-indigo-100 text-indigo-600 rounded":"py-1 px-3"},l+1)));return s.a.createElement("ul",{className:"list-none text-center"},n)},i=a(141);const g=m.a`
  query ALL_POSTS_PAGED($page: Int, $limit: Int) {
    allPosts(page: $page, limit: $limit) {
      posts {
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
      count
    }
  }
`,u=i.a;var p=Object(l.createCell)({beforeQuery:({page:e,perPage:t})=>({variables:{page:e=e?parseInt(e):1,limit:t}}),QUERY:g,Loading:u,Success:({allPosts:e,page:t,perPage:a})=>{return s.a.createElement(s.a.Fragment,null,(n=e.posts,n.slice().sort(((e,t)=>new Date(e.postedAt)<new Date(t.postedAt)?1:new Date(e.postedAt)>new Date(t.postedAt)?-1:0))).map((e=>s.a.createElement(o.a,{key:e.id,post:e,summary:!0}))),s.a.createElement(c,{count:e.count,page:t,perPage:a}));var n}});t.default=()=>{let{page:e}=Object(r.useParams)();return e=e||1,s.a.createElement(p,{page:parseInt(e),perPage:5})}}}]);
//# sourceMappingURL=10.e1ae46e2.chunk.js.map