"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["77303"],{8506:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>g,assets:()=>r,toc:()=>l,frontMatter:()=>s});var i=JSON.parse('{"id":"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-config","title":"Customizer Config Object","description":"The config object in a customizer","source":"@site/docs/connectivity/saas-connectivity/connector-customizers/config.md","sourceDirName":"connectivity/saas-connectivity/connector-customizers","slug":"/connectivity/saas-connectivity/customizers/config","permalink":"/docs/connectivity/saas-connectivity/customizers/config","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/config.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":6.5,"frontMatter":{"id":"connectivity-customizers-config","title":"Customizer Config Object","pagination_label":"Config Object","sidebar_label":"Config Object","sidebar_position":6.5,"sidebar_class_name":"saasConnectivity","keywords":["connectivity","connectors","customizers"],"description":"The config object in a customizer","slug":"/connectivity/saas-connectivity/customizers/config","tags":["Connectivity"]},"sidebar":"openApiSidebar","previous":{"title":"Testing and Debugging","permalink":"/docs/connectivity/saas-connectivity/customizers/testing"},"next":{"title":"Customizer Commands","permalink":"/docs/connectivity/saas-connectivity/customizers/commands"}}'),o=t("85893"),c=t("50065");let s={id:"connectivity-customizers-config",title:"Customizer Config Object",pagination_label:"Config Object",sidebar_label:"Config Object",sidebar_position:6.5,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"The config object in a customizer",slug:"/connectivity/saas-connectivity/customizers/config",tags:["Connectivity"]},a="Customizer Config Object",r={},l=[{value:"Example Config Object",id:"example-config-object",level:3}];function d(e){let n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"customizer-config-object",children:"Customizer Config Object"})}),"\n",(0,o.jsx)(n.p,{children:"The connector config object holds all the config values that are set in the SaaS connector. These can be used to fetch custom settings added by the user, as well as inspect values from the connector instance itself."}),"\n",(0,o.jsx)(n.p,{children:"The config object is fetched during initialization of the connector"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const config: Config = await readConfig();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example-config-object",children:"Example Config Object"}),"\n",(0,o.jsx)(n.p,{children:"Below is an example object model that can be used to type your config. Any values set by the connector itself are added at the top level json."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export interface Config {\n  beforeProvisioningRule: any;\n  cloudCacheUpdate: number;\n  cloudDisplayName: string;\n  cloudExternalId: string;\n  connectionType: string;\n  connectorName: string;\n  deleteThresholdPercentage: number;\n  deltaAggregation: DeltaAggregation;\n  deltaAggregationEnabled: boolean;\n  formPath: any;\n  hasFullAggregationCompleted: boolean;\n  healthCheckTimeout: number;\n  healthy: boolean;\n  idnProxyType: string;\n  managementWorkgroup: any;\n  managerCorrelationFilter: any;\n  since: string;\n  'slpt-source-diagnostics': string;\n  sourceConnected: boolean;\n  sourceDescription: string;\n  spConnEnableStatefulCommands: boolean;\n  spConnectorInstanceId: string;\n  spConnectorSpecId: string;\n  status: string;\n  supportsDeltaAgg: boolean;\n  templateApplication: string;\n}\n\nexport interface DeltaAggregation {\n  'std:account:list': any;\n  'std:entitlement:list': any;\n}\n"})})]})}function g(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);