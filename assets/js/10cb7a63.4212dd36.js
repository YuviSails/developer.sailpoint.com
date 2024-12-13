"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["43596"],{59525:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>s,default:()=>u,assets:()=>d,toc:()=>r,frontMatter:()=>i});var o=JSON.parse('{"id":"connectivity/saas-connectivity/connector-commands/account-update","title":"Account Update","description":"Update an account on the source.","source":"@site/docs/connectivity/saas-connectivity/connector-commands/account-update.md","sourceDirName":"connectivity/saas-connectivity/connector-commands","slug":"/connectivity/saas-connectivity/commands/account-update","permalink":"/docs/connectivity/saas-connectivity/commands/account-update","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/account-update.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"frontMatter":{"id":"account-update","title":"Account Update","pagination_label":"Account Update","sidebar_label":"Account Update","keywords":["connectivity","connectors","account update"],"description":"Update an account on the source.","slug":"/connectivity/saas-connectivity/commands/account-update","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Account Unlock","permalink":"/docs/connectivity/saas-connectivity/commands/account-unlock"},"next":{"title":"Change Password","permalink":"/docs/connectivity/saas-connectivity/commands/change-password"}}'),c=n("85893"),a=n("50065");let i={id:"account-update",title:"Account Update",pagination_label:"Account Update",sidebar_label:"Account Update",keywords:["connectivity","connectors","account update"],description:"Update an account on the source.",slug:"/connectivity/saas-connectivity/commands/account-update",tags:["Connectivity","Connector Command"]},s=void 0,d={},r=[{value:"Example StdAccountUpdateInput",id:"example-stdaccountupdateinput",level:3},{value:"Example StdAccountUpdateOutput",id:"example-stdaccountupdateoutput",level:3},{value:"Description",id:"description",level:2},{value:"Input Schema",id:"input-schema",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Testing in Identity Security Cloud",id:"testing-in-identity-security-cloud",level:2},{value:"Handling an account that is not found",id:"handling-an-account-that-is-not-found",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,c.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountUpdateInput"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountUpdateOutput"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountupdateinput",children:"Example StdAccountUpdateInput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "changes": [\n        {\n            "op": <Set|Add|Remove>,\n            "attribute": <account attribute to modify>,\n            "value": <the value to use for the operation>\n        }\n    ]\n}\n'})}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountupdateoutput",children:"Example StdAccountUpdateOutput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"The account update command triggers whenever ISC is told to modify an identity's attributes or entitlements on the target source. For example, granting an identity a new entitlement through a role, changing an identity\u2019s lifecycle state, or modifying an identity attribute tied to an account attribute all trigger the account update command."}),"\n",(0,c.jsxs)(t.p,{children:["To use this command, you must specify this value in the ",(0,c.jsx)(t.code,{children:"commands"})," array: ",(0,c.jsx)(t.code,{children:"std:account:update"})]}),"\n",(0,c.jsx)(t.h2,{id:"input-schema",children:"Input Schema"}),"\n",(0,c.jsx)(t.p,{children:"The payload from ISC contains the ID of the identity to modify, the configuration items the connector needs to call the source API, and one or more change operations to apply to the identity. Each operation has the following special considerations:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"Set:"})," Set tells the connector to overwrite the current value of the attribute or entitlement with the new value provided in the payload. The entire entitlement array resets if there are multi-valued entitlements."]}),"\n"]}),"\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"Add:"})," Add only works for multi-valued entitlements. Add tells the connector to add one or more values to the entitlement. Add is often useful for group entitlements when new groups are added to the identity. If only one entitlement is added, it is represented as a ",(0,c.jsx)(t.code,{children:"string"}),". If more than one entitlement is added, it represented as an ",(0,c.jsx)(t.code,{children:"array of strings"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"Remove:"})," Remove is similar to add, but it also works for attributes or single-valued entitlements. If you apply remove to multi-valued entitlements, doing so tells the connector to remove the value(s) from the entitlement. If only one entitlement is removed, it is represented as a ",(0,c.jsx)(t.code,{children:"string"}),". If more than one entitlement is removed, it is represented as an ",(0,c.jsx)(t.code,{children:"array of strings"}),". If you apply remove to a single-valued entitlement or account attribute, doing so tells the connector to set the value to ",(0,c.jsx)(t.code,{children:"null"})," or ",(0,c.jsx)(t.code,{children:"empty"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(t.p,{children:"The following example payload tells the connector to perform the following update actions:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsx)(t.p,{children:"Set the title of the account to \u201CDeveloper Advocate.\u201D"}),"\n"]}),"\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsx)(t.p,{children:"Add the account to two groups on the source: \u201CEngineering\u201D and \u201CSupport.\u201D"}),"\n"]}),"\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsx)(t.p,{children:"Remove the account from the \u201CModerator\u201D group."}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'{\n  "type": "std:account:update",\n  "input": {\n      "identity": "95",\n      "changes": [\n          {"op": "Set", "attribute": "title", "value": "Developer Advocate"},\n          {"op": "Add", "attribute": "groups", "value": ["Engineering", "Support"]},\n          {"op": "Remove", "attribute": "groups", "value": "Moderator"}\n      ]\n  }\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,c.jsxs)(t.p,{children:["After the connector applies the operations defined in the input payload, the connector must respond to ISC with the changes to the account so ISC can update the identity accordingly. If an account update operation results in no changes to the account, the connector responds with an empty object ",(0,c.jsx)(t.code,{children:"{}"}),". If the update operation results in one or more changes to the account, the connector responds with the complete account as it exists in the source, just like an account read response. ISC can parse the response and apply the differences accordingly."]}),"\n",(0,c.jsx)(t.h2,{id:"testing-in-identity-security-cloud",children:"Testing in Identity Security Cloud"}),"\n",(0,c.jsxs)(t.p,{children:["You can test the account update command the way you test the ",(0,c.jsx)(t.a,{href:"/docs/connectivity/saas-connectivity/commands/account-create",children:"Account Create"})," command. Follow the steps in \u201CTesting in Identity Security Cloud\u201D from \u201CAccount Create\u201D to set up an access profile and role. Be sure to run the aggregation so the account(s) are created in the target source. Once the account(s) are created in the target source, modify the access profile to grant an additional entitlement. Return to the role and click the \u2018Update\u2019 button in the upper right corner. Doing so triggers the account update command because the accounts are already created in the target source. Once the update is complete, ensure the account(s) have the additional entitlement."]}),"\n",(0,c.jsx)(t.p,{children:"Note: Testing the account update command for removing entitlements using this method does not work. You can remove the entitlement from the access profile and run an update, but ISC will not send an update command to the connector to remove the entitlement. We are looking for suggestions on how to test the removal of entitlements."}),"\n",(0,c.jsx)(t.h2,{id:"handling-an-account-that-is-not-found",children:"Handling an account that is not found"}),"\n",(0,c.jsxs)(t.p,{children:["If an account can't be found in the source system, ISC can recreate the account by using the ",(0,c.jsx)(t.code,{children:"ConnectorErrorType.NotFound"})," error type. For details and implementation, refer to ",(0,c.jsx)(t.a,{href:"/docs/connectivity/saas-connectivity/in-depth/error-handling#not-found-error-type",children:"Error Handling"}),"."]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}}}]);