"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["39303"],{39711:function(t,e,n){n.r(e),n.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>g,frontMatter:()=>s});var a=JSON.parse('{"id":"api/beta/account-aggregations","title":"Account Aggregations","description":"Account Aggregations","source":"@site/docs/api/beta/account-aggregations.tag.mdx","sourceDirName":"api/beta","slug":"/api/beta/account-aggregations","permalink":"/docs/api/beta/account-aggregations","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"account-aggregations","title":"Account Aggregations","description":"Account Aggregations","custom_edit_url":null},"sidebar":"isc_beta_sidebar","previous":{"title":"Get Account Activity","permalink":"/docs/api/beta/get-account-activity"},"next":{"title":"In-progress Account Aggregation status","permalink":"/docs/api/beta/get-account-aggregation-status"}}'),i=n("85893"),r=n("50065"),c=n("75493"),o=n("45043");let s={id:"account-aggregations",title:"Account Aggregations",description:"Account Aggregations",custom_edit_url:null},l=void 0,d={},g=[];function u(t){let e={a:"a",p:"p",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Use this API to implement account aggregation progress tracking functionality.\nWith this functionality in place, administrators can view in-progress account aggregations, their statuses, and their relevant details."}),"\n",(0,i.jsx)(e.p,{children:"An account aggregation refers to the process Identity Security Cloud uses to gather and load account data from a source into Identity Security Cloud."}),"\n",(0,i.jsx)(e.p,{children:"Whenever Identity Security Cloud is in the process of aggregating a source, it adds an entry to the Aggregation Activity Log, along with its relevant details.\nTo view aggregation activity, administrators can select the Connections drop-down menu, select Sources, and select the relevant source, select its Import Data tab, and select Account Aggregation.\nIn Account Aggregation, administrators can view the account aggregations' statuses and details in the Account Activity Log."}),"\n",(0,i.jsxs)(e.p,{children:["Refer to ",(0,i.jsx)(e.a,{href:"https://documentation.sailpoint.com/saas/help/accounts/loading_data.html",children:"Loading Account Data"})," for more information about account aggregations."]}),"\n","\n",(0,i.jsx)(c.Z,{items:(0,o.useCurrentSidebarCategory)().items})]})}function p(t={}){let{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},75493:function(t,e,n){n.d(e,{Z:()=>y});var a=n("85893");n("67294");var i=n("67026"),r=n("69369"),c=n("83012"),o=n("43115"),s=n("63150"),l=n("96025"),d=n("34403");let g={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n("62163"),p=n("97596");function m(t){let{href:e,children:n}=t;return(0,a.jsx)(c.Z,{href:e,className:(0,i.Z)("card padding--lg",g.cardContainer),children:n})}function h(t){let{href:e,icon:n,title:r,description:c}=t;return(0,a.jsxs)(m,{href:e,children:[(0,a.jsxs)(d.default,{as:"h2",className:(0,i.Z)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),c&&(0,a.jsx)("p",{className:(0,i.Z)("text--truncate",g.cardDescription),title:c,children:c})]})}function f(t){let{item:e}=t,n=(0,r.LM)(e),i=function(){let{selectMessage:t}=(0,o.c)();return e=>t(e,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,a.jsx)(h,{href:n,icon:(0,a.jsx)(u.G,{icon:p.cC_,className:g.docCardIcon}),title:e.label,description:e.description??i(e.items.length)}):null}function x(t){let{item:e}=t,n=(0,s.Z)(e.href)?(0,a.jsx)(u.G,{icon:p.FL8,className:g.docCardIcon}):(0,a.jsx)(u.G,{icon:p.wlW,className:g.docCardIcon}),i=(0,r.xz)(e.docId??void 0);return(0,a.jsx)(h,{href:e.href,icon:n,title:e.label,description:e.description??(i?.description!="<Heading"&&i?.description!="<span")?i?.description:e.label})}function A(t){let{item:e}=t;switch(e.type){case"link":return(0,a.jsx)(x,{item:e});case"category":return(0,a.jsx)(f,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function j(t){let{className:e}=t,n=(0,r.jA)();return(0,a.jsx)(y,{items:n.items,className:e})}function y(t){let{items:e,className:n}=t;if(!e)return(0,a.jsx)(j,{...t});let c=(0,r.MN)(e);return(0,a.jsx)("section",{className:(0,i.Z)("row",n),children:c.map((t,e)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(A,{item:t})},e))})}}}]);