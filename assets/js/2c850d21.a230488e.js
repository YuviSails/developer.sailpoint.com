"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["32078"],{25290:function(e,r,o){o.r(r),o.d(r,{metadata:()=>t,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"tools/sdk/go/go-sdk-error-handling","title":"Error handling with the Go SDK","description":"Learn how to handle errors with the Golang SDK in this guide.","source":"@site/docs/tools/sdk/go/error-handling.md","sourceDirName":"tools/sdk/go","slug":"/tools/sdk/go/error-handling","permalink":"/docs/tools/sdk/go/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/error-handling.md","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"},{"inline":true,"label":"Software Development Kit","permalink":"/docs/tags/software-development-kit"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":8,"frontMatter":{"id":"go-sdk-error-handling","title":"Error handling with the Go SDK","pagination_label":"Go SDK","sidebar_label":"Error Handling","sidebar_position":8,"sidebar_class_name":"gosdk","keywords":["go","golang","sdk","error"],"description":"Learn how to handle errors with the Golang SDK in this guide.","slug":"/tools/sdk/go/error-handling","tags":["SDK","Software Development Kit"]},"sidebar":"openApiSidebar","previous":{"title":"Go SDK","permalink":"/docs/tools/sdk/go/retries"},"next":{"title":"PowerShell SDK","permalink":"/docs/tools/sdk/powershell"}}'),n=o("85893"),s=o("50065");let i={id:"go-sdk-error-handling",title:"Error handling with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","error"],description:"Learn how to handle errors with the Golang SDK in this guide.",slug:"/tools/sdk/go/error-handling",tags:["SDK","Software Development Kit"]},a=void 0,l={},d=[];function h(e){let r={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The SDK returns the response object, request and error object for each method. The error object will be defined for any response status that falls out of the range of 2xx."}),"\n",(0,n.jsxs)(r.p,{children:["You can use an ",(0,n.jsx)(r.code,{children:"if"})," statement to check whether there are any errors with the request and take actions on the results, such as logging the message or performing additional actions before exiting the program:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Filters("This is an incorrect string").Execute()\nif err != nil {\n fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\\n", err)\n fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["The program will continue running unless you specify to end it. Use ",(0,n.jsx)(r.code,{children:"os.Exit(0)"})," within the error check to stop execution after an error is found."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Filters("This is an incorrect string").Execute()\nif err != nil {\n fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\\n", err)\n fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n os.Exit(0)\n}\n'})})]})}function c(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);