"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["47221"],{85715:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>u,frontMatter:()=>a});var n=JSON.parse('{"id":"api/v2024/icons","title":"Icons","description":"Icons","source":"@site/docs/api/v2024/icons.tag.mdx","sourceDirName":"api/v2024","slug":"/api/v2024/icons","permalink":"/docs/api/v2024/icons","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"icons","title":"Icons","description":"Icons","custom_edit_url":null},"sidebar":"isc_2024_sidebar","previous":{"title":"Retrieves potential role source usage","permalink":"/docs/api/v2024/get-potential-role-source-identity-usage"},"next":{"title":"Update an icon","permalink":"/docs/api/v2024/set-icon"}}'),r=i("85893"),c=i("50065"),s=i("75493"),o=i("45043");let a={id:"icons",title:"Icons",description:"Icons",custom_edit_url:null},l=void 0,d={},u=[];function p(e){let t={p:"p",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use this API to implement functionality related to object icons (application icons for example).\nWith this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud."}),"\n","\n",(0,r.jsx)(s.Z,{items:(0,o.useCurrentSidebarCategory)().items})]})}function m(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75493:function(e,t,i){i.d(t,{Z:()=>y});var n=i("85893");i("67294");var r=i("67026"),c=i("69369"),s=i("83012"),o=i("43115"),a=i("63150"),l=i("96025"),d=i("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i("62163"),m=i("97596");function f(e){let{href:t,children:i}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:i})}function h(e){let{href:t,icon:i,title:c,description:s}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:c,children:[i," ",c]}),s&&(0,n.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function x(e){let{item:t}=e,i=(0,c.LM)(t),r=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,n.jsx)(h,{href:i,icon:(0,n.jsx)(p.G,{icon:m.cC_,className:u.docCardIcon}),title:t.label,description:t.description??r(t.items.length)}):null}function j(e){let{item:t}=e,i=(0,a.Z)(t.href)?(0,n.jsx)(p.G,{icon:m.FL8,className:u.docCardIcon}):(0,n.jsx)(p.G,{icon:m.wlW,className:u.docCardIcon}),r=(0,c.xz)(t.docId??void 0);return(0,n.jsx)(h,{href:t.href,icon:i,title:t.label,description:t.description??(r?.description!="<Heading"&&r?.description!="<span")?r?.description:t.label})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(j,{item:t});case"category":return(0,n.jsx)(x,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e,i=(0,c.jA)();return(0,n.jsx)(y,{items:i.items,className:t})}function y(e){let{items:t,className:i}=e;if(!t)return(0,n.jsx)(v,{...e});let s=(0,c.MN)(t);return(0,n.jsx)("section",{className:(0,r.Z)("row",i),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}}}]);