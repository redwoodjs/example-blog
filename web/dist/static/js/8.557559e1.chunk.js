/*! For license information please see 8.557559e1.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{458:function(e,a,t){"use strict";(function(e){var l=t(0),r=t.n(l),s=t(453),n=t(470),o=t.n(n);const i="block mt-6 uppercase text-sm font-semibold tracking-wider text-gray-500",d="block mt-6 uppercase text-sm font-semibold tracking-wider text-red-700",m="block mt-2 w-full p-2 border text-lg text-gray-900 rounded focus:outline-none focus:border-indigo-300",c="block mt-2 w-full p-2 border border-red-500 text-lg text-red-700 rounded focus:outline-none focus:border-red-700",u="block mt-1 font-semibold uppercase text-xs text-red-600",p="px-6 py-2 bg-gray-400 text-gray-600 text-sm rounded mr-4 uppercase font-bold tracking-wide",b="px-6 py-2 bg-indigo-700 text-white text-sm rounded uppercase font-bold tracking-wider";a.a=a=>{var t,n,g,v,E;const[f,N]=Object(l.useState)(null===(t=a.post)||void 0===t?void 0:t.image);return r.a.createElement(s.Form,{error:a.error,onSubmit:e=>{const t=document.activeElement.dataset.action;a.onSave(Object.assign(e,{image:f}),t),event.preventDefault()}},r.a.createElement(s.Label,{name:"title",className:i,errorClassName:d}),r.a.createElement(s.TextField,{name:"title",defaultValue:null===(n=a.post)||void 0===n?void 0:n.title,className:m,errorClassName:c,validation:{required:!0}}),r.a.createElement(s.FieldError,{name:"title",className:u}),r.a.createElement(s.Label,{name:"slug",className:i,errorClassName:d}),r.a.createElement(s.TextField,{name:"slug",defaultValue:null===(g=a.post)||void 0===g?void 0:g.slug,className:m,errorClassName:c,validation:{required:!0,pattern:{value:/^\S+$/,message:"cannot contain spaces"}}}),r.a.createElement(s.FieldError,{name:"slug",className:u}),r.a.createElement(s.Label,{name:"author",className:i,errorClassName:d}),r.a.createElement(s.TextField,{name:"author",defaultValue:null===(v=a.post)||void 0===v?void 0:v.author,className:m,errorClassName:c,validation:{required:!0}}),r.a.createElement(s.FieldError,{name:"author",className:u}),r.a.createElement(s.Label,{name:"body",className:i,errorClassName:d}),r.a.createElement(s.TextAreaField,{name:"body",defaultValue:null===(E=a.post)||void 0===E?void 0:E.body,className:m+" h-64",errorClassName:c+" h-64",validation:{required:!0}}),r.a.createElement(s.FieldError,{name:"body",className:u}),r.a.createElement("label",{className:i},"Splash Image"),r.a.createElement(o.a,{apikey:e.env.FILESTACK_API_KEY,onSuccess:e=>{const a=e.filesUploaded[0];console.info(e),N(a.url)},componentDisplayMode:{type:"immediate"},actionOptions:{displayMode:"inline",container:"embedded",fromSources:["local_file_system","url"]}}),r.a.createElement("div",{id:"embedded",className:"h-80 "+(f?"hidden":"")}),f&&r.a.createElement("div",{className:"mt-2"},r.a.createElement("img",{src:f,alt:"Splash image",className:"max-h-80"}),r.a.createElement("div",{className:"mt-4"},r.a.createElement("a",{href:"#",onClick:e=>{e.preventDefault(),N(null)},className:`mt-4 ${p}`},"Replace Image"))),r.a.createElement("div",{className:"flex justify-end mt-4"},a.save&&r.a.createElement(s.Submit,{"data-action":"save",disabled:a.loading,className:p},"Save"),r.a.createElement(s.Submit,{"data-action":"publish",disabled:a.loading,className:b},a.publish||"Publish")))}}).call(this,t(139))},558:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),s=t(3),n=t(51),o=t(32),i=t(458);const d=o.a`
  query FIND_POST_BY_ID($id: ID!) {
    post: findPostById(id: $id) {
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
`,m=o.a`
  mutation UpdatePost($id: ID!, $input: PostInput!) {
    updatePost(id: $id, input: $input) {
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
`;var c=Object(n.createCell)({QUERY:d,beforeQuery:({id:e})=>({variables:{id:e}}),Loading:()=>r.a.createElement("div",null,"Loading..."),Success:({post:e})=>{const[a,{loading:t,error:l}]=Object(n.useMutation)(m,{onCompleted:()=>{location.href="/admin"}});return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-2xl font-semibold text-gray-600"},"Edit Post ",e.id),r.a.createElement("div",{className:"mt-8"},r.a.createElement(i.a,{post:e,save:!1,publish:"Update",onSave:(t,l)=>{"publish"===l&&(t.postedAt=new Date),a({variables:{id:parseInt(e.id),input:t}})},error:l,loading:t})))}});a.default=()=>{const{id:e}=Object(s.useParams)();return r.a.createElement(c,{id:e})}}}]);
//# sourceMappingURL=8.557559e1.chunk.js.map