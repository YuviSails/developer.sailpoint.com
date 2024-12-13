"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["45255"],{76395:function(t,e,n){n.r(e),n.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>d});var i=JSON.parse('{"id":"connectivity/saas-connectivity/connector-commands/entitlement-read","title":"Entitlement Read","description":"Fetch a single entitlement\u2019s attributes from the source.","source":"@site/docs/connectivity/saas-connectivity/connector-commands/entitlement-read.md","sourceDirName":"connectivity/saas-connectivity/connector-commands","slug":"/connectivity/saas-connectivity/commands/entitlement-read","permalink":"/docs/connectivity/saas-connectivity/commands/entitlement-read","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/entitlement-read.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"frontMatter":{"id":"entitlement-read","title":"Entitlement Read","pagination_label":"Entitlement Read","sidebar_label":"Entitlement Read","keywords":["connectivity","connectors","entitlement read"],"description":"Fetch a single entitlement\u2019s attributes from the source.","slug":"/connectivity/saas-connectivity/commands/entitlement-read","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Entitlement List","permalink":"/docs/connectivity/saas-connectivity/commands/entitlement-list"},"next":{"title":"Source Data Discover","permalink":"/docs/connectivity/saas-connectivity/commands/source-data-discover"}}'),a=n("85893"),s=n("50065");let d={id:"entitlement-read",title:"Entitlement Read",pagination_label:"Entitlement Read",sidebar_label:"Entitlement Read",keywords:["connectivity","connectors","entitlement read"],description:"Fetch a single entitlement\u2019s attributes from the source.",slug:"/connectivity/saas-connectivity/commands/entitlement-read",tags:["Connectivity","Connector Command"]},l=void 0,c={},o=[{value:"Example StdEntitlementReadInput",id:"example-stdentitlementreadinput",level:3},{value:"Example StdEntitlementReadOutput",id:"example-stdentitlementreadoutput",level:3},{value:"Response Schema",id:"response-schema",level:2}];function r(t){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsx)(e.p,{children:"At this time Entitlement Read is not triggered from ISC for any specific workflow and as such it is not necessary to implement this in order to have a fully functional connector."})}),"\n",(0,a.jsxs)(e.p,{children:["To use this command, you must specify this value in the ",(0,a.jsx)(e.code,{children:"commands"})," array: ",(0,a.jsx)(e.code,{children:"std:entitlement:list"})]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,a.jsx)(e.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{style:{textAlign:"left"},children:"Input"}),(0,a.jsx)(e.td,{style:{textAlign:"center"},children:"StdEntitlementReadInput"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{style:{textAlign:"left"},children:"Output"}),(0,a.jsx)(e.td,{style:{textAlign:"center"},children:"StdEntitlementReadOutput"})]})]})]}),"\n",(0,a.jsx)(e.h3,{id:"example-stdentitlementreadinput",children:"Example StdEntitlementReadInput"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "type": "group"\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"example-stdentitlementreadoutput",children:"Example StdEntitlementReadOutput"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "administrator"\n        }\n    },\n    "type": "group",\n    "attributes": {\n        "id": "administrator",\n        "name": "Administrator"\n    }\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,a.jsxs)(e.p,{children:["Entitlement read fetches a single entitlement\u2019s attributes and returns the resulting object to ISC, similar to how entitlement list does. You can implement this in the main connector file, ",(0,a.jsx)(e.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts",children:"index.ts"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"...\n.stdEntitlementRead(async (context: Context, input: StdEntitlementReadInput, res: Response<StdEntitlementReadOutput>) => {\n    const group = await airtable.getEntitlement(input.key)\n\n    res.send(group.toStdEntitlementReadOutput())\n})\n...\n...\n...\npublic toStdEntitlementReadOutput(): StdEntitlementReadOutput {\n    return this.buildStandardObject();\n}\n\nprivate buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {\n    return {\n        key: SimpleKey(this.id),\n        type: 'group',\n        attributes: {\n            id: this.id,\n            name: this.name\n        }\n    }\n}\n"})})]})}function m(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(r,{...t})}):r(t)}}}]);