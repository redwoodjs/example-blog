/*! For license information please see 7.aeef94a5.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{458:function(e,t,a){"use strict";(function(e){var l=a(0),s=a.n(l),r=a(453),n=a(470),o=a.n(n);const i="block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500",d="block mt-6 uppercase text-sm font-semibold tracking-wider text-red-700",c="block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300",m="block mt-2 w-full p-2 border border-red-500 text-lg text-red-700 rounded focus:outline-none focus:border-red-700",u="block mt-1 font-semibold uppercase text-xs text-red-600",p="px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide",b="px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider";t.a=t=>{var a,n,E,g,f;const[v,x]=Object(l.useState)(null===(a=t.post)||void 0===a?void 0:a.image);return s.a.createElement(r.Form,{error:t.error,onSubmit:e=>{const a=document.activeElement.dataset.action;t.onSave(Object.assign(e,{image:v}),a),event.preventDefault()}},s.a.createElement(r.Label,{name:"title",className:i,errorClassName:d}),s.a.createElement(r.TextField,{name:"title",defaultValue:null===(n=t.post)||void 0===n?void 0:n.title,className:c,errorClassName:m,validation:{required:!0}}),s.a.createElement(r.FieldError,{name:"title",className:u}),s.a.createElement(r.Label,{name:"slug",className:i,errorClassName:d}),s.a.createElement(r.TextField,{name:"slug",defaultValue:null===(E=t.post)||void 0===E?void 0:E.slug,className:c,errorClassName:m,validation:{required:!0,pattern:{value:/^\S+$/,message:"cannot contain spaces"}}}),s.a.createElement(r.FieldError,{name:"slug",className:u}),s.a.createElement(r.Label,{name:"author",className:i,errorClassName:d}),s.a.createElement(r.TextField,{name:"author",defaultValue:null===(g=t.post)||void 0===g?void 0:g.author,className:c,errorClassName:m,validation:{required:!0}}),s.a.createElement(r.FieldError,{name:"author",className:u}),s.a.createElement(r.Label,{name:"body",className:i,errorClassName:d}),s.a.createElement(r.TextAreaField,{name:"body",defaultValue:null===(f=t.post)||void 0===f?void 0:f.body,className:c+" h-64",errorClassName:m+" h-64",validation:{required:!0}}),s.a.createElement(r.FieldError,{name:"body",className:u}),s.a.createElement("label",{className:i},"Splash Image"),s.a.createElement(o.a,{apikey:e.env.FILESTACK_API_KEY,onSuccess:e=>{const t=e.filesUploaded[0];console.info(e),x(t.url)},componentDisplayMode:{type:"immediate"},actionOptions:{displayMode:"inline",container:"embedded",fromSources:["local_file_system","url"]}}),s.a.createElement("div",{id:"embedded",className:"h-80 "+(v?"hidden":"")}),v&&s.a.createElement("div",{className:"mt-2"},s.a.createElement("img",{src:v,alt:"Splash image",className:"max-h-80"}),s.a.createElement("div",{className:"mt-4"},s.a.createElement("a",{href:"#",onClick:e=>{e.preventDefault(),x(null)},className:`mt-4 ${p}`},"Replace Image"))),s.a.createElement("div",{className:"flex justify-end mt-4"},t.save&&s.a.createElement(r.Submit,{"data-action":"save",disabled:t.loading,className:p},"Save"),s.a.createElement(r.Submit,{"data-action":"publish",disabled:t.loading,className:b},t.publish||"Publish")))}}).call(this,a(139))},459:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(51),s=a(0),r=a.n(s),n=a(32),o=a(3),i=a(553),d=a(552);const c=n.a`
  mutation HidePostMutation($id: ID!) {
    hidePost(id: $id) {
      id
    }
  }
`,m=n.a`
  mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;var u=({posts:e})=>{const[t]=Object(l.useMutation)(c,{onCompleted:()=>{location.reload()},refetchQueries:[{query:p}],awaitRefetchQueries:!0}),[a]=Object(l.useMutation)(m,{onCompleted:()=>{location.reload()},refetchQueries:[{query:p}],awaitRefetchQueries:!0}),s=e=>{const a=e.target.dataset.id,l=e.target.dataset.title;confirm(`Are you sure you want to un-publish post "${l}"?`)&&t({variables:{id:parseInt(a)}})},n=e=>{const t=e.target.dataset.id,l=e.target.dataset.title;confirm(`Are you sure you want to delete post "${l}"?`)&&a({variables:{id:parseInt(t)}})};return r.a.createElement("table",{className:"w-full"},r.a.createElement("tbody",null,e.map((e=>r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"py-2"},r.a.createElement(o.Link,{to:o.routes.adminEdit({id:e.id}),className:"font-semibold text-indigo-700"},e.title),r.a.createElement("p",{className:"text-sm text-gray-600"},"by ",e.author)),r.a.createElement("td",{className:"py-2 text-sm text-center"},(e=>e.body.split(" ").length)(e)," words"),r.a.createElement("td",{className:"py-2 text-sm text-right"},e.postedAt?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"block"},"Published"," ",r.a.createElement("time",{dateTime:e.postedAt},Object(i.a)(new Date(e.postedAt),{addSuffix:!0}))),r.a.createElement("time",{className:"block text-gray-500",dateTime:e.postedAt},Object(d.a)(new Date(e.postedAt),"PPPPp"))):r.a.createElement("span",{className:"text-xs bg-gray-300 text-gray-600 font-semibold tracking-wide uppercase px-2 py-1 rounded"},"Draft")),r.a.createElement("td",{className:"py-2 text-right text-xs"},e.postedAt&&r.a.createElement("a",{href:"#","data-id":e.id,"data-title":e.title,className:"mr-3 text-indigo-600 hover:underline",onClick:s},"Hide"),r.a.createElement("a",{href:"#","data-id":e.id,"data-title":e.title,className:"text-red-600 hover:underline",onClick:n},"Delete")))))))};const p=n.a`
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
`;t.b=Object(l.createCell)({QUERY:p,Loading:()=>r.a.createElement("div",null,"Loading..."),Success:({allPosts:e})=>r.a.createElement(u,{posts:e.posts})})},559:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),r=a(32),n=a(51),o=a(458),i=a(459);const d=r.a`
  mutation CreatePostMutation($input: PostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;var c=()=>{const[e,{loading:t,error:a}]=Object(n.useMutation)(d,{onCompleted:()=>{location.href="/admin"},refetchQueries:[{query:i.a}],awaitRefetchQueries:!0});return s.a.createElement("div",null,s.a.createElement("h1",{className:"text-2xl font-semibold text-gray-600"},"New Post"),s.a.createElement("div",{className:"mt-8"},s.a.createElement(o.a,{save:!0,onSave:(t,a)=>{"publish"===a&&(t.postedAt=new Date),e({variables:{input:t}})},loading:t,error:a})))};t.default=()=>s.a.createElement(c,null)}}]);
//# sourceMappingURL=7.aeef94a5.chunk.js.map