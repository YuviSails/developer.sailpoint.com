"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["53912"],{72508:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>c,assets:()=>l,toc:()=>p,frontMatter:()=>o});var s=JSON.parse('{"id":"tools/cli/Templates/cli-template-report","title":"Report Template","description":"Learn about the commands you can use to run report templates from the CLI.","source":"@site/docs/tools/cli/Templates/report.md","sourceDirName":"tools/cli/Templates","slug":"/tools/cli/templates/report","permalink":"/docs/tools/cli/templates/report","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/Templates/report.md","tags":[{"inline":true,"label":"CLI","permalink":"/docs/tags/cli"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":10,"frontMatter":{"id":"cli-template-report","title":"Report Template","pagination_label":"CLI Templates Report","sidebar_label":"Report","sidebar_position":10,"sidebar_class_name":"cli-template-report","keywords":["cli","template","report"],"description":"Learn about the commands you can use to run report templates from the CLI.","slug":"/tools/cli/templates/report","tags":["CLI"]},"sidebar":"openApiSidebar","previous":{"title":"CLI JSONpath","permalink":"/docs/tools/cli/jsonpath"},"next":{"title":"CLI Templates Search","permalink":"/docs/tools/cli/templates/search"}}'),r=n("85893"),a=n("50065");let o={id:"cli-template-report",title:"Report Template",pagination_label:"CLI Templates Report",sidebar_label:"Report",sidebar_position:10,sidebar_class_name:"cli-template-report",keywords:["cli","template","report"],description:"Learn about the commands you can use to run report templates from the CLI.",slug:"/tools/cli/templates/report",tags:["CLI"]},i=void 0,l={},p=[];function d(e){let t={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use report templates to run sets of simple, predefined search queries from the CLI. Reports are most useful when you don't care about the search results returned from a query and you only want to know the count of results."}),"\n",(0,r.jsx)(t.p,{children:"This is an example of a report template:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "name": "provisioning-and-security",\n    "description": "All account unlocks in the tenant for a given time range",\n    "variables": [{"name": "days", "prompt": "Days before today"}],\n    "queries": [\n      {\n        "queryString": "(type:provisioning AND created:[now-{{days}}d TO now])",\n        "queryTitle": "Provisioning Events for the last {{days}} days"\n      },\n      {\n        "queryString": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])",\n        "queryTitle": "User Unlocks for the last {{days}} days"\n      }\n    ]\n  }\n]\n'})}),"\n",(0,r.jsx)(t.p,{children:"This is the report template anatomy:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "name": "provisioning-and-security",\n'})}),"\n",(0,r.jsx)(t.p,{children:"This is the report template's name."}),"\n",(0,r.jsxs)(t.p,{children:["It displays in the template list when you run ",(0,r.jsx)(t.code,{children:"sail report"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can also provide the name as an argument: ",(0,r.jsx)(t.code,{children:"sail report provisioning-and-security"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'    "description": "All account unlocks in the tenant for a given time range",\n'})}),"\n",(0,r.jsx)(t.p,{children:"This is the report template's description."}),"\n",(0,r.jsxs)(t.p,{children:["It displays following the template name in the ",(0,r.jsx)(t.code,{children:"sail report"})," list."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'    "variables": [{"name": "days", "prompt": "Days before today"}],\n'})}),"\n",(0,r.jsx)(t.p,{children:"Use variables to dynamically populate values in the following content during command run time."}),"\n",(0,r.jsxs)(t.p,{children:["For example, the variable in this template is configured so you can choose how many days back you want to search for provisioning-and-security events. When you run ",(0,r.jsx)(t.code,{children:"sail report provisioning-and-security"}),", a prompt displays, ",(0,r.jsx)(t.code,{children:"Input Days before today:"})," The number you enter will then populate anywhere the variable is used in the following object, and then the query runs."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'    "queries": [\n      {\n        "queryString": "(type:provisioning AND created:[now-{{days}}d TO now])",\n        "queryTitle": "Provisioning Events for the last {{days}} days"\n      },\n      {\n        "queryString": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])",\n        "queryTitle": "User Unlocks for the last {{days}} days"\n      }\n    ]\n\n  }\n]\n'})}),"\n",(0,r.jsx)(t.p,{children:"This is a list of the queries that will run. Currently, the variables for days populate."})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);