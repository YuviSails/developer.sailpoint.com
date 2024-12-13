"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["25547"],{36916:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>c});var s=JSON.parse('{"id":"api/beta/roles","title":"Roles","description":"Roles","source":"@site/docs/api/beta/roles.tag.mdx","sourceDirName":"api/beta","slug":"/api/beta/roles","permalink":"/docs/api/beta/roles","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"roles","title":"Roles","description":"Roles","custom_edit_url":null},"sidebar":"isc_beta_sidebar","previous":{"title":"Get identities for a suggested entitlement (for a role)","permalink":"/docs/api/beta/get-entitlement-changes-identities"},"next":{"title":"List Roles","permalink":"/docs/api/beta/list-roles"}}'),i=n("85893"),r=n("50065"),o=n("75493"),a=n("45043");let c={id:"roles",title:"Roles",description:"Roles",custom_edit_url:null},l=void 0,d={},u=[];function h(e){let t={a:"a",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to implement and customize role functionality.\nWith this functionality in place, administrators can create roles and configure them for use throughout Identity Security Cloud.\nIdentity Security Cloud can use established criteria to automatically assign the roles to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks."}),"\n",(0,i.jsx)(t.p,{children:"Entitlements represent the most granular level of access in Identity Security Cloud.\nAccess profiles represent the next level and often group entitlements.\nRoles represent the broadest level of access and often group access profiles."}),"\n",(0,i.jsx)(t.p,{children:"For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, 'Employees,' may represent the access all employees have at the organization, and a second, 'Developers,' may represent the access all developers have at the organization."}),"\n",(0,i.jsx)(t.p,{children:"An administrator can then create a broader set of access in the form of an access profile, 'AD Developers' grouping the 'Employees' entitlement with the 'Developers' entitlement."}),"\n",(0,i.jsx)(t.p,{children:"An administrator can then create an even broader set of access in the form of a role grouping the 'AD Developers' access profile with another profile, 'GitHub Developers,' grouping entitlements for the GitHub source."}),"\n",(0,i.jsx)(t.p,{children:"When users only need Active Directory employee access, they can request access to the 'Employees' entitlement."}),"\n",(0,i.jsx)(t.p,{children:"When users need both Active Directory employee and developer access, they can request access to the 'AD Developers' access profile."}),"\n",(0,i.jsx)(t.p,{children:"When users need both the 'AD Developers' access profile and the 'GitHub Developers' access profile, they can request access to the role grouping both."}),"\n",(0,i.jsx)(t.p,{children:"Roles often represent positions within organizations.\nFor example, an organization's accountant can access all the tools the organization's accountants need with the 'Accountant' role.\nIf the accountant switches to engineering, a qualified member of the organization can quickly revoke the accountant's 'Accountant' access and grant access to the 'Engineer' role instead, granting access to all the tools the organization's engineers need."}),"\n",(0,i.jsx)(t.p,{children:"In Identity Security Cloud, adminstrators can use the Access drop-down menu and select Roles to view, configure, and delete existing roles, as well as create new ones.\nAdministrators can enable and disable the role, and they can also make the following configurations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Manage Access: Manage the role's access by adding or removing access profiles."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Define Assignment: Define the criteria Identity Security Cloud uses to assign the role to identities.\nUse the first option, 'Standard Criteria,' to provide specific criteria for assignment like specific account attributes, entitlements, or identity attributes.\nUse the second, 'Identity List,' to specify the identities for assignment."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Access Requests: Configure roles to be requestable and establish an approval process for any requests that the role be granted or revoked.\nDo not configure a role to be requestable without establishing a secure access request approval process for that role first."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Refer to ",(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/access/roles.html",children:"Working with Roles"})," for more information about roles."]}),"\n","\n",(0,i.jsx)(o.Z,{items:(0,a.useCurrentSidebarCategory)().items})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},75493:function(e,t,n){n.d(t,{Z:()=>j});var s=n("85893");n("67294");var i=n("67026"),r=n("69369"),o=n("83012"),a=n("43115"),c=n("63150"),l=n("96025"),d=n("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var h=n("62163"),p=n("97596");function m(e){let{href:t,children:n}=e;return(0,s.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:r,description:o}=e;return(0,s.jsxs)(m,{href:t,children:[(0,s.jsxs)(d.default,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),o&&(0,s.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function g(e){let{item:t}=e,n=(0,r.LM)(t),i=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,s.jsx)(f,{href:n,icon:(0,s.jsx)(h.G,{icon:p.cC_,className:u.docCardIcon}),title:t.label,description:t.description??i(t.items.length)}):null}function x(e){let{item:t}=e,n=(0,c.Z)(t.href)?(0,s.jsx)(h.G,{icon:p.FL8,className:u.docCardIcon}):(0,s.jsx)(h.G,{icon:p.wlW,className:u.docCardIcon}),i=(0,r.xz)(t.docId??void 0);return(0,s.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??(i?.description!="<Heading"&&i?.description!="<span")?i?.description:t.label})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(x,{item:t});case"category":return(0,s.jsx)(g,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e,n=(0,r.jA)();return(0,s.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,s.jsx)(b,{...e});let o=(0,r.MN)(t);return(0,s.jsx)("section",{className:(0,i.Z)("row",n),children:o.map((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(y,{item:e})},t))})}}}]);