"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["94032"],{14261:function(e,i,n){n.r(i),n.d(i,{metadata:()=>a,contentTitle:()=>l,default:()=>c,assets:()=>d,toc:()=>g,frontMatter:()=>s});var a=JSON.parse('{"id":"extensibility/event-triggers/available/campaign-ended","title":"Campaign Ended","description":"Triggered when a campaign is ended.","source":"@site/docs/extensibility/event-triggers/available/campaign-ended.md","sourceDirName":"extensibility/event-triggers/available","slug":"/extensibility/event-triggers/triggers/campaign-ended","permalink":"/docs/extensibility/event-triggers/triggers/campaign-ended","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/campaign-ended.md","tags":[{"inline":true,"label":"Event Triggers","permalink":"/docs/tags/event-triggers"},{"inline":true,"label":"Available Event Triggers","permalink":"/docs/tags/available-event-triggers"},{"inline":true,"label":"Fire and Forget","permalink":"/docs/tags/fire-and-forget"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"frontMatter":{"id":"campaign-ended","title":"Campaign Ended","pagination_label":"Campaign Ended","sidebar_label":"Campaign Ended","sidebar_class_name":"campaignEnded","keywords":["event","trigger","campaign","ended","available"],"description":"Triggered when a campaign is ended.","slug":"/extensibility/event-triggers/triggers/campaign-ended","tags":["Event Triggers","Available Event Triggers","Fire and Forget"]},"sidebar":"openApiSidebar","previous":{"title":"Campaign Activated","permalink":"/docs/extensibility/event-triggers/triggers/campaign-activated"},"next":{"title":"Campaign Generated","permalink":"/docs/extensibility/event-triggers/triggers/campaign-generated"}}'),t=n("85893"),r=n("50065");let s={id:"campaign-ended",title:"Campaign Ended",pagination_label:"Campaign Ended",sidebar_label:"Campaign Ended",sidebar_class_name:"campaignEnded",keywords:["event","trigger","campaign","ended","available"],description:"Triggered when a campaign is ended.",slug:"/extensibility/event-triggers/triggers/campaign-ended",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,d={},g=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"event-context",children:"Event Context"}),"\n",(0,t.jsx)(i.p,{children:"The Campaign Ended events occur after a campaign is complete."}),"\n",(0,t.jsx)(i.p,{children:"Some uses cases for this trigger include the following:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Download the campaign report as soon as it is completed"}),"\n",(0,t.jsx)(i.li,{children:"Immediately review the results of the campaign for any manual tasks or follow up items"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This is an example input from this trigger:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "campaign": {\n    "id": "2c91808576f886190176f88cac5a0010",\n    "name": "Manager Access Campaign",\n    "description": "Audit access for all employees.",\n    "created": "2021-02-16T03:04:45.815Z",\n    "modified": null,\n    "deadline": "2021-03-16T03:04:45.815Z",\n    "type": "MANAGER",\n    "campaignOwner": {\n      "id": "37f080867702c1910177031320c40n27",\n      "displayName": "William Wilson",\n      "email": "william.wilson@example.com"\n    },\n    "status": "COMPLETED"\n  }\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Trigger Type"}),": ",(0,t.jsx)(i.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function c(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);