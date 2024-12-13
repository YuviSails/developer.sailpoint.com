"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["92484"],{44627:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>h,frontMatter:()=>a});var t=JSON.parse('{"id":"tools/sdk/powershell/powershell-sdk","title":"PowerShell SDK","description":"Easy ISC development in PowerShell.","source":"@site/docs/tools/sdk/powershell/index.mdx","sourceDirName":"tools/sdk/powershell","slug":"/tools/sdk/powershell","permalink":"/docs/tools/sdk/powershell","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/index.mdx","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":3,"frontMatter":{"id":"powershell-sdk","title":"PowerShell SDK","pagination_label":"PowerShell SDK","sidebar_label":"PowerShell","sidebar_position":3,"sidebar_class_name":"powershellsdk","keywords":["powershell","sdk"],"description":"Easy ISC development in PowerShell.","slug":"/tools/sdk/powershell","tags":["SDK"]},"sidebar":"openApiSidebar","previous":{"title":"Go SDK","permalink":"/docs/tools/sdk/go/error-handling"},"next":{"title":"PowerShell SDK","permalink":"/docs/tools/sdk/powershell/getting-started"}}'),i=l("85893"),s=l("50065"),o=l("20398"),r=l("5525");let a={id:"powershell-sdk",title:"PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"PowerShell",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk"],description:"Easy ISC development in PowerShell.",slug:"/tools/sdk/powershell",tags:["SDK"]},d=void 0,c={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Manually install the SDK",id:"manually-install-the-sdk",level:3},{value:"Configure",id:"configure",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Example <code>config.json</code>",id:"example-configjson",level:4},{value:"Example <code>config.json</code>",id:"example-configjson-1",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:3},{value:"Discuss",id:"discuss",level:2},{value:"Getting Started",id:"getting-started",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Read this guide to learn how to use the PowerShell SDK. The PowerShell SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"You need the following to use the PowerShell SDK:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["PowerShell 6.2 or greater. To learn how to install, refer to ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.4",children:"Installing PowerShell"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Your tenant name in IdentityNow. To learn how to find it, refer to ",(0,i.jsx)(n.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Getting Started"}),". The SDK will use this tenant name to connect to your IdentityNow instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A PAT with a client secret and ID. To learn how to create one in ISC, refer to ",(0,i.jsx)(n.a,{href:"https://documentation.sailpoint.com/saas/help/common/api_keys.html#generating-a-personal-access-token",children:"Personal Access Tokens"}),". The SDK will use this PAT to authenticate with the SailPoint APIs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsxs)("summary",{children:["CLI Assisted ",(0,i.jsx)("em",{children:"(Recommended)"})]}),(0,i.jsxs)(n.p,{children:["The SailPoint CLI offers a few commands that will allow you to quickly get started with the PowerShell SDK. To learn how to install and use the SailPoint CLI, refer to ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/idn/tools/cli#get-the-cli",children:"SailPoint CLI"}),"."]}),(0,i.jsx)(n.p,{children:"Once the CLI is installed and configured, run this command to create a new PowerShell project with the PowerShell SDK:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init powershell\n"})}),(0,i.jsx)(n.p,{children:"Running the command create the structure for your project:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"|-- powershell-template\n|   |-- paginate.ps1\n|   |-- paginateAccounts.ps1\n|   |-- patchEntitlement.ps1\n|   |-- sdk.ps1\n|   |-- search.ps1\n|   |-- transform.ps1\n"})}),(0,i.jsx)(n.p,{children:"Run this command to install the required dependencies:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Install-Module -Name PSSailpoint\n"})}),(0,i.jsx)(n.p,{children:'The command installs the SailPoint PowerShell SDK module. You will be prompted to confirm that you want to install the module from \'PSGallery\'. Enter "A" to say "Yes to All".'}),(0,i.jsxs)(n.p,{children:["If you already have a version of the PowerShell SDK installed, you can install a new version side-by-side with it by adding the ",(0,i.jsx)(n.code,{children:"-Force"})," parameter to the end of your ",(0,i.jsx)(n.code,{children:"Install-Module"})," commmand:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Install-Module -Name PSSailpoint -Force\n"})}),(0,i.jsxs)(n.p,{children:["To validate that the module is installed, run this command, ",(0,i.jsx)(n.code,{children:"Get-Module -ListAvailable PSSailpoint"}),", and verify that the module is listed. Additionally, you can run this command, ",(0,i.jsx)(n.code,{children:"Get-Command -Module PSSailpoint"}),", to see the available commands included in the module."]}),(0,i.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,i.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Manual Installation"}),(0,i.jsx)(n.h3,{id:"manually-install-the-sdk",children:"Manually install the SDK"}),(0,i.jsx)(n.p,{children:"If access to the PowerShell Gallery isn't available, you can also install the PowerShell SDK manually."}),(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"If you manually install the module on a machine without access to the PowerShell Gallery, you will also need to manually install updates to the SDK."})}),(0,i.jsx)(n.p,{children:"Follow these steps to manually install the PowerShell module:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the source code zip from the most recent release on ",(0,i.jsx)(n.a,{href:"https://github.com/sailpoint-oss/powershell-sdk/releases",children:"GitHub"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Open the ZIP file, then open then folder labeled ",(0,i.jsx)(n.code,{children:"powershell-sdk-x.x.x"}),", with the ",(0,i.jsx)(n.code,{children:"x.x.x"})," representing the version you downloaded."]}),"\n",(0,i.jsxs)(n.li,{children:["Extract the ",(0,i.jsx)(n.code,{children:"PSSailpoint"})," module folder inside to one of the following locations:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To install for the Current user: ",(0,i.jsx)(n.code,{children:"C:\\Users\\<username>\\Documents\\WindowsPowerShell\\Modules\\PSSailpoint"})]}),"\n",(0,i.jsxs)(n.li,{children:["To install for All users (requires Administrator privileges): ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\WindowsPowerShell\\Modules\\PSSailpoint"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"Import-Module PSSailpoint"})," to import the module into the current session."]}),"\n",(0,i.jsxs)(n.li,{children:["To validate that the module is installed, run ",(0,i.jsx)(n.code,{children:"Get-Module -ListAvailable PSSailpoint"})," and verify that the module is listed. Additionally, you can run ",(0,i.jsx)(n.code,{children:"Get-Command -Module PSSailpoint"})," to see the module's available commands."]}),"\n"]}),(0,i.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,i.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,i.jsxs)(n.p,{children:["You must provide configuration to the SDK so that it can authenticate to your SailPoint tenant and make API calls. To do so, you can use a configuration file, ",(0,i.jsx)(n.code,{children:"config.json"}),", or environment variables."]}),"\n",(0,i.jsx)(n.h3,{id:"configuration-file",children:"Configuration File"}),"\n",(0,i.jsxs)(n.p,{children:['The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: ',(0,i.jsx)(n.code,{children:"ClientId"}),", ",(0,i.jsx)(n.code,{children:"ClientSecret"}),", ",(0,i.jsx)(n.code,{children:"BaseURL"}),"."]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsxs)("summary",{children:["CLI Assisted ",(0,i.jsx)("em",{children:"(Recommended)"})]}),"\nThe SailPoint CLI offers a command to generate the config.json file with your currently configured CLI credentials."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init config\n"})}),(0,i.jsxs)(n.p,{children:["If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a ",(0,i.jsx)(n.code,{children:"config.json"})," for."]}),(0,i.jsx)(n.p,{children:"To pass an additional parameter that states the environment you want to configure, run this command:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init config --env devrel\n"})}),(0,i.jsxs)(n.h4,{id:"example-configjson",children:["Example ",(0,i.jsx)(n.code,{children:"config.json"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Manual Configuration"}),(0,i.jsxs)(n.p,{children:['Create a file named "config.json", and provide these key/value pairs: ',(0,i.jsx)(n.code,{children:"ClientId"}),", ",(0,i.jsx)(n.code,{children:"ClientSecret"}),", ",(0,i.jsx)(n.code,{children:"BaseURL"}),"."]}),(0,i.jsxs)(n.h4,{id:"example-configjson-1",children:["Example ",(0,i.jsx)(n.code,{children:"config.json"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Please ensure this file is ignored in your version control system (ex. .gitignore for git)"})}),"\n",(0,i.jsx)(n.h3,{id:"environment-variable-configuration",children:"Environment variable configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can also store your configuration in environment variables."}),"\n",(0,i.jsxs)(n.p,{children:["To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,i.jsx)(n.code,{children:"~/.bash_profile"}),"."]}),"\n","\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.default,{value:"linux_mac",label:"Linux/Mac",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export SAIL_BASE_URL=https://[tenant].api.identitynow.com\nexport SAIL_CLIENT_ID=[clientID]\nexport SAIL_CLIENT_SECRET=[clientSecret]\n"})})}),(0,i.jsxs)(r.default,{value:"windows",label:"Windows PowerShell",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$env:SAIL_BASE_URL=https://[tenant].api.identitynow.com\n$env:SAIL_CLIENT_ID=[clientID]\n$env:SAIL_CLIENT_SECRET=[clientSecret]\n"})}),(0,i.jsx)(n.p,{children:"To get your environment variables to persist across PowerShell sessions, run these commands instead:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://[tenant].api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','[clientID]')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','[clientSecret]')\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"discuss",children:"Discuss"}),"\n",(0,i.jsxs)(n.p,{children:["You can use this SDK to build new tools that extend your ISC platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"}),"!"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["To get started using the SDK, refer to the ",(0,i.jsx)(n.a,{href:"/docs/tools/sdk/powershell/getting-started",children:"Getting Started Guide"}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},20398:function(e,n,l){l.d(n,{Z:()=>m});var t=l("85893"),i=l("67294"),s=l("67026"),o=l("69599"),r=l("33057"),a=l("7227");let d="tabList__CuJ",c="tabItem_LNqP";function h(e){let{className:n,block:l,selectedValue:i,selectValue:r,tabValues:a}=e,d=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.o5)(),u=e=>{let n=e.currentTarget,l=a[d.indexOf(n)].value;l!==i&&(h(n),r(l))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let l=d.indexOf(e.currentTarget)+1;n=d[l]??d[0];break}case"ArrowLeft":{let l=d.indexOf(e.currentTarget)-1;n=d[l]??d[d.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},n),children:a.map(e=>{let{value:n,label:l,attributes:o}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:p,onClick:u,...o,className:(0,s.Z)("tabs__item",c,o?.className,{"tabs__item--active":i===n}),children:l??n},n)})})}function u(e){let{lazy:n,children:l,selectedValue:o}=e,r=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){let e=r.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:r.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function p(e){let n=(0,r.Y)(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",d),children:[(0,t.jsx)(h,{...n,...e}),(0,t.jsx)(u,{...n,...e})]})}function m(e){let n=(0,a.default)();return(0,t.jsx)(p,{...e,children:(0,r.h)(e.children)},String(n))}}}]);