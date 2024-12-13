"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["83953"],{7687:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"extensibility/transforms/operations/concatenation","title":"Concatenation","description":"Join two or more string values into a combined output.","source":"@site/docs/extensibility/transforms/operations/concatenation.md","sourceDirName":"extensibility/transforms/operations","slug":"/extensibility/transforms/operations/concatenation","permalink":"/docs/extensibility/transforms/operations/concatenation","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/concatenation.md","tags":[{"inline":true,"label":"Transforms","permalink":"/docs/tags/transforms"},{"inline":true,"label":"Transform Operations","permalink":"/docs/tags/transform-operations"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"frontMatter":{"id":"concatenation","title":"Concatenation","pagination_label":"Concatenation","sidebar_label":"Concatenation","sidebar_class_name":"concatenation","keywords":["transforms","operations","concatenation"],"description":"Join two or more string values into a combined output.","slug":"/extensibility/transforms/operations/concatenation","tags":["Transforms","Transform Operations"]},"sidebar":"openApiSidebar","previous":{"title":"Base64 Encode","permalink":"/docs/extensibility/transforms/operations/base64-encode"},"next":{"title":"Conditional","permalink":"/docs/extensibility/transforms/operations/conditional"}}'),r=t("85893"),a=t("50065");let o={id:"concatenation",title:"Concatenation",pagination_label:"Concatenation",sidebar_label:"Concatenation",sidebar_class_name:"concatenation",keywords:["transforms","operations","concatenation"],description:"Join two or more string values into a combined output.",slug:"/extensibility/transforms/operations/concatenation",tags:["Transforms","Transform Operations"]},i=void 0,c={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Use the concatenation transform to join two or more string values into a combined output. The concatenation transform often joins elements such as first and last name into a full display name, but it has many other uses."}),"\n",(0,r.jsx)(n.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,r.jsxs)(n.p,{children:["The concatenation transform requires an array list of ",(0,r.jsx)(n.code,{children:"values"})," that need to be joined. These values can be static strings or the return values of other nested transforms."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "values": ["John", " ", "Smith"]\n  },\n  "type": "concat",\n  "name": "Concatenation transform"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Required Attributes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"type"})," - This must always be set to ",(0,r.jsx)(n.code,{children:"concat"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"values"})," - This is the array of items to join."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optional Attributes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:'This transform joins the user\'s first name from the "HR Source" with his/her last name, adds a space between them, and then adds a parenthetical note that the user is a contractor at the end.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "FirstName"\n        },\n        "type": "accountAttribute"\n      },\n      " ",\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "LastName"\n        },\n        "type": "accountAttribute"\n      },\n      " (Contractor)"\n    ]\n  },\n  "type": "concat",\n  "name": "Test Concat Transform"\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)("p",{children:"\xa0"}),"\n",(0,r.jsx)(n.p,{children:"This transform joins the user's job title with his/her job code value and adds a hyphen between those two pieces of data."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "JobTitle"\n        },\n        "type": "accountAttribute"\n      },\n      "-",\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "JobCode"\n        },\n        "type": "accountAttribute"\n      }\n    ]\n  },\n  "type": "concat",\n  "name": "Test Concat Transform"\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);