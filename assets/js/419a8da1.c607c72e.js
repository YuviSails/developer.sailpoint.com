"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["19613"],{860:function(e,s,l){l.r(s),l.d(s,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"tools/cli/cli-clusters","title":"Clusters","description":"Learn how to use the CLI to manage clusters in this guide.","source":"@site/docs/tools/cli/cluster.md","sourceDirName":"tools/cli","slug":"/tools/cli/cluster","permalink":"/docs/tools/cli/cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/cluster.md","tags":[{"inline":true,"label":"CLI","permalink":"/docs/tags/cli"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":8,"frontMatter":{"id":"cli-clusters","title":"Clusters","pagination_label":"CLI Clusters","sidebar_label":"Clusters","sidebar_position":8,"sidebar_class_name":"cli-clusters","keywords":["cli","cli clusters","clusters"],"description":"Learn how to use the CLI to manage clusters in this guide.","slug":"/tools/cli/cluster","tags":["CLI"]},"sidebar":"openApiSidebar","previous":{"title":"CLI VA","permalink":"/docs/tools/cli/va"},"next":{"title":"CLI Workflows","permalink":"/docs/tools/cli/workflow"}}'),n=l("85893"),i=l("50065");let c={id:"cli-clusters",title:"Clusters",pagination_label:"CLI Clusters",sidebar_label:"Clusters",sidebar_position:8,sidebar_class_name:"cli-clusters",keywords:["cli","cli clusters","clusters"],description:"Learn how to use the CLI to manage clusters in this guide.",slug:"/tools/cli/cluster",tags:["CLI"]},r=void 0,a={},o=[{value:"List clusters",id:"list-clusters",level:2},{value:"Get cluster by ID",id:"get-cluster-by-id",level:2},{value:"Get cluster&#39;s log configuration",id:"get-clusters-log-configuration",level:2},{value:"Set cluster&#39;s log configuration",id:"set-clusters-log-configuration",level:2}];function d(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Learn how to use the SailPoint CLI to list manage client managed clusters in this guide."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"cluster"})," command makes it easy to manage clusters within the CLI."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#list-clusters",children:"List clusters"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#get-cluster-by-id",children:"Get cluster by ID"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#get-clusters-log-configuration",children:"Get cluster's log configuration"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#set-clusters-log-configuration",children:"Set cluster's log configuration"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"list-clusters",children:"List clusters"}),"\n",(0,n.jsx)(s.p,{children:"To manage clusters in the SailPoint CLI, you need to know which clusters are available, as well as their IDs. Run this command to list the clusters connected to your tenant:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster list\n"})}),"\n",(0,n.jsx)(s.p,{children:"This command returns a table of the clusters, along with their IDs."}),"\n",(0,n.jsxs)(s.p,{children:["This command uses the ",(0,n.jsx)(s.a,{href:"https://developer.sailpoint.com/docs/api/beta/get-managed-clusters",children:"Get all clusters endpoint"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"get-cluster-by-id",children:"Get cluster by ID"}),"\n",(0,n.jsx)(s.p,{children:"Once you have a cluster's ID, you can see view all its details. Run this command to get a cluster by ID:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster get {cluster ID}\n"})}),"\n",(0,n.jsx)(s.p,{children:"Here is an example command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster get f48e8c9c7dce4672bead8222a767dce7\n"})}),"\n",(0,n.jsx)(s.p,{children:"The CLI will return the cluster, along with all its details."}),"\n",(0,n.jsx)(s.p,{children:"You can also get multiple clusters at once. Here is an example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster get f48e8c9c7dce4672bead8222a767dce7 3652192cc2264ad5827fdc1eb2d88f01\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This command uses the ",(0,n.jsx)(s.a,{href:"https://developer.sailpoint.com/docs/api/beta/get-managed-cluster",children:"Get cluster endpoint"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"get-clusters-log-configuration",children:"Get cluster's log configuration"}),"\n",(0,n.jsx)(s.p,{children:"The VA clusters have logs that track their activity, and you can view these logs' configurations and make changes to them. To get a cluster's log configuration, run this command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster log get {cluster ID}\n"})}),"\n",(0,n.jsx)(s.p,{children:"Here is an example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster log get 2c91808580f6cc1a01811af8cf5f18cb\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This command uses the ",(0,n.jsx)(s.a,{href:"https://developer.sailpoint.com/docs/api/beta/get-client-log-configuration",children:"Get cluster's log configuration endpoint"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"set-clusters-log-configuration",children:"Set cluster's log configuration"}),"\n",(0,n.jsx)(s.p,{children:"You can update a cluster's root logging level, the duration of its logging, and the connector logging class. To set a cluster's log configuration, run this command:"}),"\n",(0,n.jsxs)(s.p,{children:["This command uses the ",(0,n.jsx)(s.a,{href:"https://developer.sailpoint.com/docs/api/beta/put-client-log-configuration",children:"Update cluster's log configuration endpoint"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster log set {cluster ID} -r {rootLevel} -d {durationMinutes} -c {connector logging class}\n"})}),"\n",(0,n.jsx)(s.p,{children:"Here is an example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail cluster log set 2c91808580f6cc1a01811af8cf5f18cb -r TRACE -d 30 -c sailpoint.connector.ADLDAPConnector=TRACE\n"})}),"\n",(0,n.jsx)(s.p,{children:'This example command sets the "TRACE" root logging level, a duration of 30 minutes, and a connector logging class of "sailpoint.connector.ADLDAPConnector=TRACE".'}),"\n",(0,n.jsxs)(s.p,{children:["Refer to your respective ",(0,n.jsx)(s.a,{href:"https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html",children:"connector guide"})," to see which connector logging classes are available."]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);