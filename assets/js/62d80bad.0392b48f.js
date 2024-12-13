"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["77977"],{38854:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"extensibility/rules/connector-rules/jdbc-provisioning-rule","title":"JDBC Provision Rule","description":"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.","source":"@site/docs/extensibility/rules/connector-rules/jdbc_provision_rule.md","sourceDirName":"extensibility/rules/connector-rules","slug":"/extensibility/rules/connector-rules/jdbc-provisioning-rule","permalink":"/docs/extensibility/rules/connector-rules/jdbc-provisioning-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/connector-rules/jdbc_provision_rule.md","tags":[{"inline":true,"label":"Rules","permalink":"/docs/tags/rules"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"frontMatter":{"id":"jdbc-provisioning-rule","title":"JDBC Provision Rule","pagination_label":"JDBC Provision Rule","sidebar_label":"JDBC Provision Rule","sidebar_class_name":"jdbcProvisionRule","keywords":["cloud","rules","jdbc"],"description":"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.","slug":"/extensibility/rules/connector-rules/jdbc-provisioning-rule","tags":["Rules"]},"sidebar":"openApiSidebar","previous":{"title":"JDBC BuildMap Rule","permalink":"/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule"},"next":{"title":"SAP BuildMap Rule","permalink":"/docs/extensibility/rules/connector-rules/sap-buildmap-rule"}}'),s=n("85893"),o=n("50065");let r={id:"jdbc-provisioning-rule",title:"JDBC Provision Rule",pagination_label:"JDBC Provision Rule",sidebar_label:"JDBC Provision Rule",sidebar_class_name:"jdbcProvisionRule",keywords:["cloud","rules","jdbc"],description:"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.",slug:"/extensibility/rules/connector-rules/jdbc-provisioning-rule",tags:["Rules"]},l=void 0,a={},c=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete."}),"\n",(0,s.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Connector Execution"})," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Logging"})," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Rule Execution",src:n(8e3).Z+"",width:"1525",height:"618"})}),"\n",(0,s.jsx)(t.h2,{id:"input",children:"Input"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Purpose"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"connection"}),(0,s.jsx)(t.td,{children:"java.sql.Connection"}),(0,s.jsx)(t.td,{children:"Reference to the current SQL connection."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"plan"}),(0,s.jsx)(t.td,{children:"sailpoint.object.ProvisioningPlan"}),(0,s.jsx)(t.td,{children:"Provisioning plan containing the provisioning request(s)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"application"}),(0,s.jsx)(t.td,{children:"sailpoint.object.Application"}),(0,s.jsx)(t.td,{children:"Reference to the source JDBC Application"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"schema"}),(0,s.jsx)(t.td,{children:"sailpoint.object.Schema"}),(0,s.jsx)(t.td,{children:"Reference to the schema object for the JDBC source being read."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Purpose"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"result"}),(0,s.jsx)(t.td,{children:"sailpoint.object.ProvisioningResult"}),(0,s.jsx)(t.td,{children:"ProvisioningResult object containing the provisioning request's status (success, failure, retry, etc.)."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCProvision">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCProvision">\n  <Description>This example JDBC rule can process account creation requests, deletion requests, and modification requests that pertain to the \u201Crole\u201D attribute. It logs debug messages if other account request types are submitted.</Description>\n  <Source><![CDATA[\n  import java.sql.Connection;\n  import java.sql.DriverManager;\n  import java.sql.PreparedStatement;\n  import java.sql.SQLException;\n  import java.sql.Types;\n  import java.util.List;\n  import sailpoint.api.SailPointContext;\n  import sailpoint.connector.JDBCConnector;\n  import sailpoint.object.Application;\n  import sailpoint.object.ProvisioningPlan;\n  import sailpoint.object.ProvisioningPlan.AccountRequest;\n  import sailpoint.object.ProvisioningPlan.AttributeRequest;\n  import sailpoint.object.ProvisioningPlan.PermissionRequest;\n  import sailpoint.object.ProvisioningResult;\n  import sailpoint.object.Schema;\n\n  public String getAttributeRequestValue(AccountRequest acctReq, String attribute) {\n\n    if ( acctReq != null ) {\n      AttributeRequest attrReq = acctReq.getAttributeRequest(attribute);\n      if ( attrReq != null ) {\n        return attrReq.getValue();\n      }\n    }\n    return null;\n  }\n\n  ProvisioningResult result = new ProvisioningResult();\n  PreparedStatement statement;\n\n  if ( plan != null ) {\n\n    List accounts = plan.getAccountRequests();\n    if ( ( accounts != null ) && ( accounts.size() > 0 ) ) {\n      for ( AccountRequest account : accounts ) {\n        try {\n          if ( AccountRequest.Operation.Create.equals( account.getOperation() ) ) {\n            // Ideally we should first check to see if the account already exists.\n            // As written, this just assumes it does not.\n\n            statement = connection.prepareStatement( "insert into users (login,first,last,role,status) values (?,?,?,?,?)" );\n            statement.setString ( 1, (String) account.getNativeIdentity() );\n            statement.setString ( 2, getAttributeRequestValue(account,"first") );\n            statement.setString ( 3, getAttributeRequestValue(account,"last") );\n            statement.setString ( 4, getAttributeRequestValue(account,"role") );\n            statement.setString ( 5, getAttributeRequestValue(account,"status") );\n            statement.executeUpdate();\n\n            result.setStatus( ProvisioningResult.STATUS_COMMITTED );\n\n          } else if ( AccountRequest.Operation.Modify.equals( account.getOperation() ) ) {\n\n            // Modify account request -- change role\n\n            PreparedStatement statement = connection.prepareStatement( "update users set role = ? where login = ?" );\n            statement.setString ( 2, (String) account.getNativeIdentity() );\n            if ( account != null ) {\n              AttributeRequest attrReq = account.getAttributeRequest("role");\n              if ( attrReq != null && ProvisioningPlan.Operation.Remove.equals(attrReq.getOperation()) ) {\n                statement.setNull ( 1, Types.NULL );\n                statement.executeUpdate();\n              } else {\n                statement.setString(1,attrReq.getValue());\n                statement.executeUpdate();\n              }\n            }\n            result.setStatus( ProvisioningResult.STATUS_COMMITTED );\n\n          } else if ( AccountRequest.Operation.Delete.equals( account.getOperation() ) ) {\n\n            PreparedStatement statement = connection.prepareStatement( (String) application.getAttributeValue( "account.deleteSQL" ) );\n\n            statement.setString ( 1, (String) account.getNativeIdentity() );\n            statement.executeUpdate();\n\n            result.setStatus( ProvisioningResult.STATUS_COMMITTED );\n\n          } else if ( AccountRequest.Operation.Disable.equals( account.getOperation() ) ) {\n\n            // Disable, not supported.\n\n          } else if ( AccountRequest.Operation.Enable.equals( account.getOperation() ) ) {\n\n            // Enable, not supported.\n\n          } else if ( AccountRequest.Operation.Lock.equals( account.getOperation() ) ) {\n\n            // Lock, not supported.\n\n          } else if ( AccountRequest.Operation.Unlock.equals( account.getOperation() ) ) {\n\n            // Unlock, not supported.\n\n          } else {\n            // Unknown operation!\n          }\n        }\n        catch( SQLException e ) {\n          result.setStatus( ProvisioningResult.STATUS_FAILED );\n          result.addError( e );\n        }\n        finally {\n          if(statement != null) {\n            statement.close();\n          }\n        }\n      }\n    }\n  }\n\n  return result;\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"attach-to-source",children:"Attach to Source"}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"/docs/extensibility/rules/connector-rules#jdbcprovision-rule",children:"Attaching Connector-Related Rules to Sources"})," for details on how to attach your rule to your source."]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8e3:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);