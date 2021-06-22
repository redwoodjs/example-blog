/*! For license information please see 9.676c7d4a.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{459:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a(51),i=a(0),n=a.n(i),l=a(32),r=a(3),o=a(553),d=a(552);const c=l.a`
  mutation HidePostMutation($id: ID!) {
    hidePost(id: $id) {
      id
    }
  }
`,m=l.a`
  mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;var u=({posts:e})=>{const[t]=Object(s.useMutation)(c,{onCompleted:()=>{location.reload()},refetchQueries:[{query:p}],awaitRefetchQueries:!0}),[a]=Object(s.useMutation)(m,{onCompleted:()=>{location.reload()},refetchQueries:[{query:p}],awaitRefetchQueries:!0}),i=e=>{const a=e.target.dataset.id,s=e.target.dataset.title;confirm(`Are you sure you want to un-publish post "${s}"?`)&&t({variables:{id:parseInt(a)}})},l=e=>{const t=e.target.dataset.id,s=e.target.dataset.title;confirm(`Are you sure you want to delete post "${s}"?`)&&a({variables:{id:parseInt(t)}})};return n.a.createElement("table",{className:"w-full"},n.a.createElement("tbody",null,e.map((e=>n.a.createElement("tr",{key:e.id},n.a.createElement("td",{className:"py-2"},n.a.createElement(r.Link,{to:r.routes.adminEdit({id:e.id}),className:"font-semibold text-indigo-700"},e.title),n.a.createElement("p",{className:"text-sm text-gray-600"},"by ",e.author)),n.a.createElement("td",{className:"py-2 text-sm text-center"},(e=>e.body.split(" ").length)(e)," words"),n.a.createElement("td",{className:"py-2 text-sm text-right"},e.postedAt?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"block"},"Published"," ",n.a.createElement("time",{dateTime:e.postedAt},Object(o.a)(new Date(e.postedAt),{addSuffix:!0}))),n.a.createElement("time",{className:"block text-gray-500",dateTime:e.postedAt},Object(d.a)(new Date(e.postedAt),"PPPPp"))):n.a.createElement("span",{className:"text-xs bg-gray-300 text-gray-600 font-semibold tracking-wide uppercase px-2 py-1 rounded"},"Draft")),n.a.createElement("td",{className:"py-2 text-right text-xs"},e.postedAt&&n.a.createElement("a",{href:"#","data-id":e.id,"data-title":e.title,className:"mr-3 text-indigo-600 hover:underline",onClick:i},"Hide"),n.a.createElement("a",{href:"#","data-id":e.id,"data-title":e.title,className:"text-red-600 hover:underline",onClick:l},"Delete")))))))};const p=l.a`
  query ALL_POSTS {
    allPosts {
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
    }
  }
`;t.b=Object(s.createCell)({QUERY:p,Loading:()=>n.a.createElement("div",null,"Loading..."),Success:({allPosts:e})=>n.a.createElement(u,{posts:e.posts})})},551:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(459);t.default=()=>i.a.createElement(n.b,null)}}]);
//# sourceMappingURL=9.676c7d4a.chunk.js.map