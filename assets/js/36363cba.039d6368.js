"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["56731"],{47894:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>c});var n=JSON.parse('{"id":"api/beta/governance-groups","title":"Governance Groups","description":"Governance Groups","source":"@site/docs/api/beta/governance-groups.tag.mdx","sourceDirName":"api/beta","slug":"/api/beta/governance-groups","permalink":"/docs/api/beta/governance-groups","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"governance-groups","title":"Governance Groups","description":"Governance Groups","custom_edit_url":null},"sidebar":"isc_beta_sidebar","previous":{"title":"Aggregate Entitlements","permalink":"/docs/api/beta/import-entitlements-by-source"},"next":{"title":"List Governance Groups","permalink":"/docs/api/beta/list-workgroups"}}'),i=r("85893"),o=r("50065"),a=r("75493"),s=r("45043");let c={id:"governance-groups",title:"Governance Groups",description:"Governance Groups",custom_edit_url:null},l=void 0,u={},d=[];function p(e){let t={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud."}),"\n",(0,i.jsx)(t.p,{children:"A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user."}),"\n",(0,i.jsxs)(t.p,{children:["Refer to ",(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html",children:"Creating and Managing Governance Groups"})," for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI."]}),"\n","\n",(0,i.jsx)(a.Z,{items:(0,s.useCurrentSidebarCategory)().items})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},75493:function(e,t,r){r.d(t,{Z:()=>G});var n=r("85893");r("67294");var i=r("67026"),o=r("69369"),a=r("83012"),s=r("43115"),c=r("63150"),l=r("96025"),u=r("34403");let d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=r("62163"),m=r("97596");function g(e){let{href:t,children:r}=e;return(0,n.jsx)(a.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:o,description:a}=e;return(0,n.jsxs)(g,{href:t,children:[(0,n.jsxs)(u.default,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),a&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e,r=(0,o.LM)(t),i=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(h,{href:r,icon:(0,n.jsx)(p.G,{icon:m.cC_,className:d.docCardIcon}),title:t.label,description:t.description??i(t.items.length)}):null}function v(e){let{item:t}=e,r=(0,c.Z)(t.href)?(0,n.jsx)(p.G,{icon:m.FL8,className:d.docCardIcon}):(0,n.jsx)(p.G,{icon:m.wlW,className:d.docCardIcon}),i=(0,o.xz)(t.docId??void 0);return(0,n.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??(i?.description!="<Heading"&&i?.description!="<span")?i?.description:t.label})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(v,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,r=(0,o.jA)();return(0,n.jsx)(G,{items:r.items,className:t})}function G(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(j,{...e});let a=(0,o.MN)(t);return(0,n.jsx)("section",{className:(0,i.Z)("row",r),children:a.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}}}]);