"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["58533"],{22710:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>s});var n=JSON.parse('{"id":"api/iiq/object-config","title":"ObjectConfig","description":"ObjectConfig","source":"@site/docs/api/iiq/object-config.tag.mdx","sourceDirName":"api/iiq","slug":"/api/iiq/object-config","permalink":"/docs/api/iiq/object-config","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"object-config","title":"ObjectConfig","description":"ObjectConfig","custom_edit_url":null},"sidebar":"iiqApiSideBar","previous":{"title":"Returns a LaunchedWorkflow resource based on id.","permalink":"/docs/api/iiq/get-launched-workflow-by-id"},"next":{"title":"Returns all object of type ObjectConfig.","permalink":"/docs/api/iiq/get-object-configs"}}'),r=i("85893"),c=i("50065"),o=i("75493"),a=i("45043");let s={id:"object-config",title:"ObjectConfig",description:"ObjectConfig",custom_edit_url:null},l=void 0,d={},u=[];function f(e){return(0,r.jsx)(o.Z,{items:(0,a.useCurrentSidebarCategory)().items})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},75493:function(e,t,i){i.d(t,{Z:()=>C});var n=i("85893");i("67294");var r=i("67026"),c=i("69369"),o=i("83012"),a=i("43115"),s=i("63150"),l=i("96025"),d=i("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var f=i("62163"),p=i("97596");function m(e){let{href:t,children:i}=e;return(0,n.jsx)(o.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:i})}function j(e){let{href:t,icon:i,title:c,description:o}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:c,children:[i," ",c]}),o&&(0,n.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function g(e){let{item:t}=e,i=(0,c.LM)(t),r=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,n.jsx)(j,{href:i,icon:(0,n.jsx)(f.G,{icon:p.cC_,className:u.docCardIcon}),title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e,i=(0,s.Z)(t.href)?(0,n.jsx)(f.G,{icon:p.FL8,className:u.docCardIcon}):(0,n.jsx)(f.G,{icon:p.wlW,className:u.docCardIcon}),r=(0,c.xz)(t.docId??void 0);return(0,n.jsx)(j,{href:t.href,icon:i,title:t.label,description:t.description??(r?.description!="<Heading"&&r?.description!="<span")?r?.description:t.label})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(g,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,i=(0,c.jA)();return(0,n.jsx)(C,{items:i.items,className:t})}function C(e){let{items:t,className:i}=e;if(!t)return(0,n.jsx)(x,{...e});let o=(0,c.MN)(t);return(0,n.jsx)("section",{className:(0,r.Z)("row",i),children:o.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(b,{item:e})},t))})}}}]);