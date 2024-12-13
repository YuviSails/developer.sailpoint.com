"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["58411"],{3132:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"connectivity/saas-connectivity/connector-spec/connector-spec","title":"Connector Specification File","description":"The connector spec file tells ISC how the connector should interact between ISC and the custom connector. It is the glue between ISC and the connector, so understanding the different sections are key to understanding how to build a custom connectors.","source":"@site/docs/connectivity/saas-connectivity/connector-spec/index.md","sourceDirName":"connectivity/saas-connectivity/connector-spec","slug":"/connectivity/saas-connectivity/connector-spec","permalink":"/docs/connectivity/saas-connectivity/connector-spec","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-spec/index.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":4,"frontMatter":{"id":"connector-spec","title":"Connector Specification File","pagination_label":"Connector Spec File","sidebar_label":"Connector Spec File","sidebar_position":4,"sidebar_class_name":"connectorSpecFile","keywords":["connectivity","connectors","spec","specification"],"description":"The connector spec file tells ISC how the connector should interact between ISC and the custom connector. It is the glue between ISC and the connector, so understanding the different sections are key to understanding how to build a custom connectors.","slug":"/connectivity/saas-connectivity/connector-spec","tags":["Connectivity"]},"sidebar":"openApiSidebar","previous":{"title":"Common CLI Commands","permalink":"/docs/connectivity/saas-connectivity/common-cli-commands"},"next":{"title":"Card","permalink":"/docs/connectivity/saas-connectivity/connector-spec/card"}}'),s=t("85893"),c=t("50065");let r={id:"connector-spec",title:"Connector Specification File",pagination_label:"Connector Spec File",sidebar_label:"Connector Spec File",sidebar_position:4,sidebar_class_name:"connectorSpecFile",keywords:["connectivity","connectors","spec","specification"],description:"The connector spec file tells ISC how the connector should interact between ISC and the custom connector. It is the glue between ISC and the connector, so understanding the different sections are key to understanding how to build a custom connectors.",slug:"/connectivity/saas-connectivity/connector-spec",tags:["Connectivity"]},o=void 0,l={},a=[{value:"Summary",id:"summary",level:2},{value:"Sample File",id:"sample-file",level:2},{value:"Description of Fields",id:"description-of-fields",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"The connector spec file tells ISC how the connector should interact between ISC and the custom connector. It is the glue between ISC and the connector, so understanding the different sections are key to understanding how to build a custom connectors."}),"\n",(0,s.jsx)(n.h2,{id:"sample-file",children:"Sample File"}),"\n",(0,s.jsxs)(n.p,{children:["To see a sample spec file, see this link: ",(0,s.jsx)(n.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json",children:"connector-spec.json"})]}),"\n",(0,s.jsx)(n.h2,{id:"description-of-fields",children:"Description of Fields"}),"\n",(0,s.jsx)(n.p,{children:"The following describes in detail the different fields in the connector spec:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name:"})," The name of the connector as it appears in ISC. Tags can be appended to this name."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"keyType:"})," Either \u201Csimple\u201D or \u201Ccompound\u201D This determines which type of key your connector expects to receive and send back for each of the commands. This must always be indicated in your connector spec - the connector returns the correct type for each command that returns a key type."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For example, the stdAccountRead command input is the StdAccountReadInput. if you select keyType as \u201Csimple,\u201D then the StdAccountReadInput.key will be the type SimpleKey."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"commands:"})," The list of commands the connector supports. A full list of available commands can be found ",(0,s.jsx)(n.a,{href:"/docs/connectivity/saas-connectivity/connector-commands",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"./connector-spec/initial-value",children:"sourceConfigInitialValues"}),":"]})," Key value pair of source config item keys and the default value that should be associated with them."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sourceConfig"})," A list of configuration items you must provide when you create a source in ISC. The order of these items is preserved in the UI."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"})," This is always \u201Cmenu\u201D - it indicates a new menu for the sidebar. You can have multiple sections defined for complex connector configurations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"label:"})," This label indicates the text that will show up on the sidebar in ISC"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"items:"})," The array of items in the menu","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"}),' This is always "section" - it indicates a new section on the page']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sectionTitle:"})," The large text title that will display for the section."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sectionHelpMessage:"})," A description about the section that can help the user understand what it is used for and how to fill out the fields"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"docLinkLabel:"})," An optional field that is the text that displays next to documentation help link."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"docLink:"})," The optional link that the docLinkLabel will direct to if clicked."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"items:"})," The array of input fields for the menu item","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"key:"})," The name of the configuration item as it is referenced in code."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"label:"})," The name of the configuration item as it appears in the UI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"required"})," (Optional): Set to 'false' by default. Valid values are 'true' or 'false.' You must populate required configuration items in the ISC source configuration wizard before continuing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"})," The configuration items' types. The following types are valid:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"text"}),"\n",(0,s.jsx)(n.li,{children:"number"}),"\n",(0,s.jsx)(n.li,{children:"secret"}),"\n",(0,s.jsx)(n.li,{children:"textarea"}),"\n",(0,s.jsx)(n.li,{children:"secrettextarea"}),"\n",(0,s.jsx)(n.li,{children:"checkbox"}),"\n",(0,s.jsx)(n.li,{children:"url"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./connector-spec/radio",children:"radio"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./connector-spec/select",children:"select"})}),"\n",(0,s.jsx)(n.li,{children:"toggle"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./connector-spec/list",children:"list"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./connector-spec/key-value",children:"keyValue"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./connector-spec/card",children:"cardList"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"accountSchema:"})," The schema for an account in ISC populated by data from the source."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"displayAttribute:"})," Identifies the attribute (defined below) used to map to ",(0,s.jsx)(n.code,{children:"Account Name"})," in the Identity Security Cloud account schema. This should be a unique value even though it is not required because the connector will use this value to correlate accounts in ISC to accounts in the source system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"identityAttribute:"})," Identifies the attribute (defined below) used to map to ",(0,s.jsx)(n.code,{children:"Account ID"})," in the Identity Security Cloud account schema. This must be a globally unique identifier, such as email address, employee ID, etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"groupAttribute:"})," Identifies the attribute used to map accounts to entitlements. For example, a web service can define ",(0,s.jsx)(n.code,{children:"groups"})," that users are members of, and the ",(0,s.jsx)(n.code,{children:"groups"})," grant entitlements to each user. In this case, ",(0,s.jsx)(n.strong,{children:"groupAttribute"})," is \u201Cgroups,\u201D and there is also an account attribute called \u201Cgroups\u201D."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"attributes:"})," One or more attributes that map to a user\u2019s attribute on the target source. Each attribute defines the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name:"})," The attribute\u2019s name as it appears in ISC."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"})," The attribute\u2019s type. Possible values are ",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"boolean"}),", ",(0,s.jsx)(n.code,{children:"long"}),", and ",(0,s.jsx)(n.code,{children:"int"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"description:"})," A helpful description of the attribute. This is useful to source owners when they are trying to understand the account schema."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"managed:"})," This indicates whether the entitlements are manageable through ISC or read-only."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"entitlement:"})," This boolean indicates whether the attribute is an entitlement. Entitlements give identities privileges on the source system. Use this indication to determine which fields to synchronize with accounts in ISC for tasks such as separation of duties and role assignment. The boolean indicates whether the attribute is an entitlement."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"multi:"})," This indicates entitlements that are stored in an array format. This one field can store multiple entitlements for a single account."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"entitlementSchemas:"})," A list of entitlement schemas in ISC populated by data from the source."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"})," The entitlement\u2019s type. Currently, only ",(0,s.jsx)(n.code,{children:"group"})," is supported."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"displayAttribute:"})," The entitlement attribute\u2019s name. This can be the ",(0,s.jsx)(n.code,{children:"name"})," or another human friendly identifier for a group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"identityAttribute:"})," The entitlement attribute\u2019s unique ID. This can be the ",(0,s.jsx)(n.code,{children:"id"})," or another unique key for a group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"attributes:"})," The entitlement\u2019s list of attributes. This list of attributes is an example: ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"name"}),", and ",(0,s.jsx)(n.code,{children:"description"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name:"})," The name of the attribute as it appears in ISC."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"})," The attribute\u2019s type. Possible values are ",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"boolean"}),", ",(0,s.jsx)(n.code,{children:"long"}),", and ",(0,s.jsx)(n.code,{children:"int"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"description:"})," A helpful description the attribute. This is useful to source owners when they are trying to understand the account schema."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"accountCreateTemplate:"})," A map of identity attributes ISC will pass to the connector to create an account in the target source."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"key:"})," The unique identifier of the attribute. This is also the name that is presented in the Create Profile screen in ISC."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"label:"})," A friendly name for presentation purposes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"})," The attribute\u2019s type. Possible values are ",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"boolean"}),", ",(0,s.jsx)(n.code,{children:"long"}),", and ",(0,s.jsx)(n.code,{children:"int"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"initialValue (Optional):"})," Use this to specify identitAttribute mapping, generator or default values.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type:"})," The initial value type. Possible values are ",(0,s.jsx)(n.code,{children:"identityAttribute"}),", ",(0,s.jsx)(n.code,{children:"generator"}),", ",(0,s.jsx)(n.code,{children:"static"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"attributes:"})," Attributes change depending on the type selected.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name:"})," Use this to identify the mapping for identityAttribute type, or the generator to use (",(0,s.jsx)(n.code,{children:"Create Password"}),", ",(0,s.jsx)(n.code,{children:"Create Unique Account ID"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"value:"})," Use this as the default value for the static type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"maxSize:"})," Use this for the Create Unique Account ID generator type. This value specifies the maximum size of the username to be generated."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"maxUniqueChecks:"})," Use this for the Create Unique Account ID generator type. This value specifies the maximum retries in case a unique ID is not found with the first random generated user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"template:"})," Use this for the Create Unique Account ID generator type. This value specifies the template used for generation. Example: ",(0,s.jsx)(n.code,{children:'"$(firstname).$(lastname)$(uniqueCounter)"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"required (Optional):"})," Determines whether the account create operation requires this attribute. It defaults to ",(0,s.jsx)(n.code,{children:"false"}),". If it is ",(0,s.jsx)(n.code,{children:"true"})," and Identity Security Cloud encounters an identity missing this attribute, ISC does not send the account to the connector for account creation."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);