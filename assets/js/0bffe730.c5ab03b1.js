"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["87363"],{75417:function(e,s,t){t.r(s),t.d(s,{metadata:()=>l,contentTitle:()=>n,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"tools/sdk/powershell/powershell-sdk-delete","title":"Deleting resources with the PowerShell SDK","description":"Learn how to delete resources using the PowerShell SDK in this guide.","source":"@site/docs/tools/sdk/powershell/deleting-resources.md","sourceDirName":"tools/sdk/powershell","slug":"/tools/sdk/powershell/delete","permalink":"/docs/tools/sdk/powershell/delete","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/deleting-resources.md","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":4,"frontMatter":{"id":"powershell-sdk-delete","title":"Deleting resources with the PowerShell SDK","pagination_label":"PowerShell SDK","sidebar_label":"Delete a resource","sidebar_position":4,"sidebar_class_name":"powershellsdk","keywords":["powershell","sdk","delete"],"description":"Learn how to delete resources using the PowerShell SDK in this guide.","slug":"/tools/sdk/powershell/delete","tags":["SDK"]},"sidebar":"openApiSidebar","previous":{"title":"PowerShell SDK","permalink":"/docs/tools/sdk/powershell/update"},"next":{"title":"PowerShell SDK","permalink":"/docs/tools/sdk/powershell/paginate"}}'),o=t("85893"),r=t("50065");let i={id:"powershell-sdk-delete",title:"Deleting resources with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","delete"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/delete",tags:["SDK"]},n=void 0,d={},a=[];function p(e){let s={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["You can use the SDK to delete resources. These cmdlets will typically start with the ",(0,o.jsx)(s.code,{children:"Remove"})," keyword."]}),"\n",(0,o.jsx)(s.p,{children:"Here is an example script that searches for the previously created Workgroup by name and calls the delete cmdlet to remove it from your environment."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-powershell",children:"$WorkGroup = Get-BetaWorkgroups -Filters 'name eq \"DB Access Governance Group\"'\n\nRemove-BetaWorkgroup -Id $WorkGroup.id -WithHttpInfo\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Using the ",(0,o.jsx)(s.a,{href:"/docs/tools/sdk/powershell/getting-started#withhttpinfo-switch",children:"WithHttpInfo Switch"})," in the script above, we can verify the operation completed successfully by the 204 status code."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-powershell",children:"Name                           Value\n----                           -----\nResponse\nStatusCode                     204\nHeaders                        {[Date, System.String[]], [Connection, System.String[]], [Server, System.String[]], [Vary, System.String[]]\u2026}\n"})})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);