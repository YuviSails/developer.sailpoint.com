"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["91900"],{12095:function(t,e,n){n.r(e),n.d(e,{metadata:()=>c,contentTitle:()=>d,default:()=>l,assets:()=>s,toc:()=>u,frontMatter:()=>i});var c=JSON.parse('{"id":"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-update-customizer","title":"Account Update","description":"Intercept the account update command.","source":"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-update.md","sourceDirName":"connectivity/saas-connectivity/connector-customizers/customizer-commands","slug":"/connectivity/saas-connectivity/customizers/commands/account-update","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/account-update","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-update.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"frontMatter":{"id":"account-update-customizer","title":"Account Update","pagination_label":"Account Update","sidebar_label":"Account Update","keywords":["connectivity","connectors","Account Update"],"description":"Intercept the account update command.","slug":"/connectivity/saas-connectivity/customizers/commands/account-update","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Account Unlock","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/account-unlock"},"next":{"title":"Change Password","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/change-password"}}'),a=n("85893"),o=n("50065");let i={id:"account-update-customizer",title:"Account Update",pagination_label:"Account Update",sidebar_label:"Account Update",keywords:["connectivity","connectors","Account Update"],description:"Intercept the account update command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-update",tags:["Connectivity","Connector Command"]},d=void 0,s={},u=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountUpdateInput",id:"example-stdaccountupdateinput",level:3},{value:"Example StdAccountUpdateOutput",id:"example-stdaccountupdateoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-update command",id:"before-account-update-command",level:3},{value:"After account-update command",id:"after-account-update-command",level:3}];function r(t){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(e.p,{children:["Use these commands to intercept the ",(0,a.jsx)(e.a,{href:"../../commands/account-update",children:"account-update"})," command."]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,a.jsx)(e.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{style:{textAlign:"left"},children:"Input"}),(0,a.jsx)(e.td,{style:{textAlign:"center"},children:"StdAccountUpdateInput"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{style:{textAlign:"left"},children:"Output"}),(0,a.jsx)(e.td,{style:{textAlign:"center"},children:"StdAccountUpdateOutput"})]})]})]}),"\n",(0,a.jsx)(e.h3,{id:"example-stdaccountupdateinput",children:"Example StdAccountUpdateInput"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "changes": [\n        {\n            "op": <Set|Add|Remove>,\n            "attribute": <account attribute to modify>,\n            "value": <the value to use for the operation>\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"example-stdaccountupdateoutput",children:"Example StdAccountUpdateOutput"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(e.h3,{id:"before-account-update-command",children:"Before account-update command"}),"\n",(0,a.jsx)(e.p,{children:"Use this logic to implement the command:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"    .beforeStdAccountUpdate(async (context: Context, input: StdAccountUpdateInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,a.jsx)(e.h3,{id:"after-account-update-command",children:"After account-update command"}),"\n",(0,a.jsx)(e.p,{children:"Use this logic to implement the command:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"    .afterStdAccountUpdate(async (context: Context, output: StdAccountUpdateOutput) => {\n        logger.info(`Running after account update for account ${output.identity}}`)\n        return output\n    })\n"})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function l(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(r,{...t})}):r(t)}}}]);