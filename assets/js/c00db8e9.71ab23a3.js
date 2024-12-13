"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["62808"],{61486:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>d,assets:()=>s,toc:()=>u,frontMatter:()=>a});var i=JSON.parse('{"id":"extensibility/rules/cloud-rules/account-profile-attribute-generator-template","title":"Account Profile Attribute Generator (from Template)","description":"This rule generates complex account attribute values during provisioning, e.g. when creating an account.","source":"@site/docs/extensibility/rules/cloud-rules/account_profile_attribute_generator_from_template.md","sourceDirName":"extensibility/rules/cloud-rules","slug":"/extensibility/rules/cloud-rules/account-profile-attribute-generator-template","permalink":"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator-template","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/account_profile_attribute_generator_from_template.md","tags":[{"inline":true,"label":"Rules","permalink":"/docs/tags/rules"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"frontMatter":{"id":"account-profile-attribute-generator-template","title":"Account Profile Attribute Generator (from Template)","pagination_label":"Account Profile Attribute Generator (from Template)","sidebar_label":"Account Profile Attribute Generator (from Template)","sidebar_class_name":"accountProfileAttributeGeneratorTemplate","keywords":["cloud","rules","account profile","attribute generator"],"description":"This rule generates complex account attribute values during provisioning, e.g. when creating an account.","slug":"/extensibility/rules/cloud-rules/account-profile-attribute-generator-template","tags":["Rules"]},"sidebar":"openApiSidebar","previous":{"title":"Account Profile Attribute Generator","permalink":"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator"},"next":{"title":"Before Provisioning Rule","permalink":"/docs/extensibility/rules/cloud-rules/before-provisioning-rule"}}'),r=n("85893"),l=n("50065");let a={id:"account-profile-attribute-generator-template",title:"Account Profile Attribute Generator (from Template)",pagination_label:"Account Profile Attribute Generator (from Template)",sidebar_label:"Account Profile Attribute Generator (from Template)",sidebar_class_name:"accountProfileAttributeGeneratorTemplate",keywords:["cloud","rules","account profile","attribute generator"],description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account.",slug:"/extensibility/rules/cloud-rules/account-profile-attribute-generator-template",tags:["Rules"]},o="Account Profile Attribute Generator (from Template)",s={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"account-profile-attribute-generator-from-template",children:"Account Profile Attribute Generator (from Template)"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"This rule generates complex account attribute values during provisioning, e.g. when creating an account. The rule's configuration comes from a template of values. You would typically use this rule when you are creating an account to generate attributes like usernames."}),"\n",(0,r.jsxs)(t.p,{children:["In the following example, the template is ",(0,r.jsx)(t.code,{children:"${firstname}.${lastname}${uniqueCounter}"}),", which is pulled in by the ",(0,r.jsx)(t.code,{children:"Create Unique LDAP Attribute"})," rule and used to replace the ",(0,r.jsx)(t.code,{children:"firstname"}),", ",(0,r.jsx)(t.code,{children:"lastname"})," and ",(0,r.jsx)(t.code,{children:"uniqueCounter"})," placeholders."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "name": "userName",\n  "transform": {\n    "type": "rule",\n    "attributes": {\n      "name": "Create Unique LDAP Attribute"\n    }\n  },\n  "attributes": {\n    "template": "${firstname}.${lastname}${uniqueCounter}",\n    "cloudMaxUniqueChecks": "50",\n    "cloudMaxSize": "20",\n    "cloudRequired": "true"\n  },\n  "isRequired": false,\n  "type": "string",\n  "isMultiValued": false\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Cloud Execution"})," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Logging"})," - Logging statements are currently only visible to SailPoint personnel."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Rule Execution",src:n(49382).Z+"",width:"1594",height:"635"})}),"\n",(0,r.jsx)(t.h2,{id:"input",children:"Input"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Argument"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Purpose"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"log"}),(0,r.jsx)(t.td,{children:"org.apache.log4j.Logger"}),(0,r.jsxs)(t.td,{children:["Logger to log statements. ",(0,r.jsx)(t.em,{children:"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"idn"}),(0,r.jsx)(t.td,{children:"sailpoint.server.IdnRuleUtil"}),(0,r.jsxs)(t.td,{children:["Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,r.jsx)(t.a,{href:"/docs/extensibility/rules/rule-utility",children:"IdnRuleUtil"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identity"}),(0,r.jsx)(t.td,{children:"sailpoint.object.Identity"}),(0,r.jsx)(t.td,{children:"Reference to identity object representing the identity being calculated."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"field"}),(0,r.jsx)(t.td,{children:"sailpoint.object.Field"}),(0,r.jsx)(t.td,{children:"Field object used to get information about the attribute being generated."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Argument"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Purpose"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"java.lang.Object"}),(0,r.jsx)(t.td,{children:"Value returned for the account attribute."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGeneratorFromTemplate">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule language="beanshell" name="Generate Username" type="AttributeGeneratorFromTemplate">\n  <Description>This will generate a username.</Description>\n  <Source><![CDATA[\nimport java.util.Iterator;\nimport sailpoint.object.*;\nimport java.util.ArrayList;\nimport java.util.List;\nimport org.apache.commons.lang.StringUtils;\n\npublic String generateUniqueUsername ( String loginId, int iteration)\n{\n  switch ( iteration )\n  {\n    case 0:\n      username = StringUtils.left(loginId, prefixLength) + suffix;\n      break;\n    // Default: add numbers until we get a unique username\n    default:\n      username = StringUtils.left(loginId, prefixLength - String.valueOf(iteration).length()).toString();\n      username = username + iteration + suffix;\n      break;\n  }\n\n  if ( isUnique ( username) )\n    return username;\n  else\n    return generateUniqueUsername ( loginId, ( iteration + 1 ));\n}\n\npublic boolean isUnique ( String username )\n{\n  return !idn.accountExistsByDisplayName(application.getName(), username);\n}\n\nint MAX_LENGTH = 20;\nString suffix =  field.getStringAttribute("template");\nString loginId = identity.getAttribute("loginId");\nint prefixLength = MAX_LENGTH - suffix.length();\n\nif (StringUtils.isBlank(loginId))\n  return null;\nelse\n  return generateUniqueUsername( loginId, 0);\n\n  ]]></Source>\n</Rule>\n'})})]})}function d(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},49382:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);