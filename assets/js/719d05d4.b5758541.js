"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["14012"],{64541:function(e,i,t){t.r(i),t.d(i,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>l});var n=JSON.parse('{"id":"api/nerm/pagination-metadata-filtering","title":"Pagination, Metadata and Filtering","description":"NERM API pagination, metadata, and filtering.","source":"@site/docs/api/nerm/pagination-metadata-filtering.md","sourceDirName":"api/nerm","slug":"/api/nerm/pagination-metadata-filtering","permalink":"/docs/api/nerm/pagination-metadata-filtering","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/nerm/pagination-metadata-filtering.md","tags":[{"inline":true,"label":"Pagination Metadata Filtering","permalink":"/docs/tags/pagination-metadata-filtering"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1734115336000,"sidebarPosition":3,"frontMatter":{"id":"pagination-metadata-filtering","title":"Pagination, Metadata and Filtering","pagination_label":"Pagination, Metadata and Filtering","sidebar_label":"Pagination, Metadata and Filtering","sidebar_position":3,"sidebar_class_name":"paginationMetadataFiltering","keywords":["pagination metadata filtering"],"description":"NERM API pagination, metadata, and filtering.","slug":"/api/nerm/pagination-metadata-filtering","tags":["Pagination Metadata Filtering"]},"sidebar":"nermSideBar","previous":{"title":"Authentication","permalink":"/docs/api/nerm/authentication"},"next":{"title":"NERM v1 API","permalink":"/docs/api/nerm/v1"}}'),r=t("85893"),s=t("50065");let l={id:"pagination-metadata-filtering",title:"Pagination, Metadata and Filtering",pagination_label:"Pagination, Metadata and Filtering",sidebar_label:"Pagination, Metadata and Filtering",sidebar_position:3,sidebar_class_name:"paginationMetadataFiltering",keywords:["pagination metadata filtering"],description:"NERM API pagination, metadata, and filtering.",slug:"/api/nerm/pagination-metadata-filtering",tags:["Pagination Metadata Filtering"]},a=void 0,d={},o=[{value:"Paginating Results",id:"paginating-results",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Filtering Results",id:"filtering-results",level:2},{value:"Advanced Profile Filtering",id:"advanced-profile-filtering",level:2},{value:"ProfileStatusRule",id:"profilestatusrule",level:3},{value:"ProfileTypeRule",id:"profiletyperule",level:3},{value:"ProfileAttributeRule",id:"profileattributerule",level:3}];function c(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Many endpoints in the NERM API support a generic syntax for paginating, filtering, and sorting results. A collection endpoint has the following characteristics:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The HTTP verb is always GET."}),"\n",(0,r.jsxs)(i.li,{children:["The last component in the URL is a plural noun (ex. ",(0,r.jsx)(i.code,{children:"/users"}),")."]}),"\n",(0,r.jsx)(i.li,{children:"The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"paginating-results",children:"Paginating Results"}),"\n",(0,r.jsx)(i.p,{children:"Use the following optional query parameters to achieve pagination:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameter"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default"}),(0,r.jsx)(i.th,{children:"Constraints"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"limit"})}),(0,r.jsx)(i.td,{children:"Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"100"})}),(0,r.jsxs)(i.td,{children:["Maxiumum of 500 for ",(0,r.jsx)(i.code,{children:"api/profiles"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"offset"})}),(0,r.jsxs)(i.td,{children:["Integer specifying the offset of the first result from the beginning of the collection. The ",(0,r.jsx)(i.strong,{children:"offset"})," value is record-based, not page-based, and the index starts at 0. For example, ",(0,r.jsx)(i.strong,{children:"offset=0"})," and ",(0,r.jsx)(i.strong,{children:"limit=20"})," returns records 0-19, but ",(0,r.jsx)(i.strong,{children:"offset=1"})," and ",(0,r.jsx)(i.strong,{children:"limit=20"})," returns records 1-20."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"0"})}),(0,r.jsx)(i.td,{children:"Between 0 and the last record index."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"order"})}),(0,r.jsxs)(i.td,{children:["String specifying the ascending order in which the results should be returned, for example, ",(0,r.jsx)(i.strong,{children:"order=login"})," would return the users results in an ascending alphanumeric order"]}),(0,r.jsx)(i.td,{children:"-"}),(0,r.jsx)(i.td,{children:"Limited to specific parameters"})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"Examples:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["GET ",(0,r.jsx)(i.code,{children:"/api/users?limit=2"})]}),"\n",(0,r.jsxs)(i.li,{children:["GET ",(0,r.jsx)(i.code,{children:"/api/users?limit=20&offset=4"})]}),"\n",(0,r.jsxs)(i.li,{children:["GET ",(0,r.jsx)(i.code,{children:"/api/users?order=created_at"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"metadata",children:"Metadata"}),"\n",(0,r.jsx)(i.p,{children:"Metadata can be added to a result to allow for progromatic approaches to fetching data."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"metadata"})}),(0,r.jsxs)(i.td,{children:["Boolean that specifies wether or not to return a ",(0,r.jsx)(i.strong,{children:"_metadata"})," key with pagination information"]}),(0,r.jsx)(i.td,{children:"false"})]})})]}),"\n",(0,r.jsx)(i.p,{children:"Example:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["GET ",(0,r.jsx)(i.code,{children:"/api/users?metadata=true"})]}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'{\n  ...\n  "_metadata": {\n    "limit": 100,\n    "offset": 200,\n    "total": 500,\n    "next": "api/users?offset=300&limit=100\n  }\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"filtering-results",children:"Filtering Results"}),"\n",(0,r.jsxs)(i.p,{children:["Resource attributes can be added to parameters to perform a basic match filter. Refer to each documented endpoints ",(0,r.jsx)(i.strong,{children:"Query Parameters"})," to identify what can be used."]}),"\n",(0,r.jsx)(i.p,{children:"Example:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["GET ",(0,r.jsx)(i.code,{children:"/api/users?email=jim@acmeco.com"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"advanced-profile-filtering",children:"Advanced Profile Filtering"}),"\n",(0,r.jsxs)(i.p,{children:["More advanced filtering can be performed on ",(0,r.jsx)(i.strong,{children:"profiles"})," by using the ",(0,r.jsx)(i.a,{href:"https://developer.sailpoint.com/nerm/api",children:"Advanced Search Endpoint"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["For example, if you wanted to find all profiles where the ",(0,r.jsx)(i.strong,{children:"personal_first_name"}),' started with the letter "a", you would first need to find the ',(0,r.jsx)(i.strong,{children:"id"})," of the ",(0,r.jsx)(i.strong,{children:"personal_first_name"})," attribute, and provide a JSON body like so:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'{\n  "advanced_search": {\n    "condition_rules_attributes: [\n      {\n        "type": "ProfileAttributeRule",\n        "condition_object_id": <id of the personal_first_name attribute>,\n        "object_type": "NeAttribute",\n        "comparison_operator": "start_with?",\n        "value": "a"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["You can also provide multiple filters in the same call. For example, you want to find all profiles that are not ",(0,r.jsx)(i.strong,{children:"Active"}),", that have a specific department profile. First you need to find the ",(0,r.jsx)(i.strong,{children:"id"})," of the attribute that contains that profile, and then the ",(0,r.jsx)(i.strong,{children:"id"})," of the specific department profile. Then provide a JSON body like so:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'{\n  "advanced_search": {\n    "condition_rules_attributes: [\n      {\n        "type": "ProfileStatusRule",\n        "comparison_operator": "!=",\n        "value": "Active"\n      },\n      {\n        "type": "ProfileAttributeRule",\n        "condition_object_id": <id of the department attribute>,\n        "object_type": "NeAttribute",\n        "comparison_operator": "include?",\n        "value": <id of the department profile>\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["There are 3 types of ",(0,r.jsx)(i.strong,{children:"condition_rules_attributes"})]}),"\n",(0,r.jsx)(i.h3,{id:"profilestatusrule",children:"ProfileStatusRule"}),"\n",(0,r.jsx)(i.p,{children:"This rule searches for profiles based on the status."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Key"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"id"}),(0,r.jsx)(i.td,{children:"string"}),(0,r.jsx)(i.td,{children:"If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"type"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsx)(i.td,{children:"The value must be 'ProfileStatusRule'"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"comparison_operator"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsxs)(i.td,{children:["This is how the comparison is made for the attribute values. ",(0,r.jsx)("br",{}),"Available basic operators: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"== (equals)"}),(0,r.jsx)("li",{children:"!= (not equal)"})]})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"value"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsxs)(i.td,{children:["This is the value used for comparison.0 ",(0,r.jsx)("br",{}),"Available Values: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Active"}),(0,r.jsx)("li",{children:"Inactive"}),(0,r.jsx)("li",{children:"Leave of absence"}),(0,r.jsx)("li",{children:"Terminated"})]})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"_destroy"}),(0,r.jsx)(i.td,{children:"boolean"}),(0,r.jsx)(i.td,{children:'Supplying this option with "true" will cause the condition to be destroyed'})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"Example:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'{\n  "advanced_search": {\n    "condition_rules_attributes": [\n      {\n        "type": "ProfileStatusRule",\n        "comparison_operator": "==",\n        "value": "Active"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(i.h3,{id:"profiletyperule",children:"ProfileTypeRule"}),"\n",(0,r.jsx)(i.p,{children:"This rule searches for profiles based on the id of the profile type."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Key"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"id"}),(0,r.jsx)(i.td,{children:"string"}),(0,r.jsx)(i.td,{children:"If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"type"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsx)(i.td,{children:"The value must be 'ProfileTypeRule'"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"comparison_operator"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsxs)(i.td,{children:["This is how the comparison is made for the attribute values. Available basic operators: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"== (equals)"}),(0,r.jsx)("li",{children:"!= (not equal)"})]})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"value"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsx)(i.td,{children:"This is the value used for comparison. This should be the ID of the profile type"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"_destroy"}),(0,r.jsx)(i.td,{children:"boolean"}),(0,r.jsx)(i.td,{children:'Supplying this option with "true" will cause the condition to be destroyed'})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"Example:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'{\n  "advanced_search": {\n    "condition_rules_attributes": [\n      {\n        "type": "ProfileTypeRule",\n        "comparison_operator": "==",\n        "value": "1bd99a83-57e1-4e3c-bbb0-861b4700cff6"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(i.h3,{id:"profileattributerule",children:"ProfileAttributeRule"}),"\n",(0,r.jsx)(i.p,{children:"This rule searches for profiles based on an attribute that profile has."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Key"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"id"}),(0,r.jsx)(i.td,{children:"string"}),(0,r.jsx)(i.td,{children:"If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"type"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsx)(i.td,{children:"The value must be 'ProfileAttributeRule'"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"object_type"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsx)(i.td,{children:"The values must equal 'NeAttribute'"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"condition_object_id"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsx)(i.td,{children:"this is the id of the attribute you are searching against"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"comparison_operator"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsxs)(i.td,{children:["This is how the comparison is made for the attribute values. ",(0,r.jsx)("br",{}),"Available basic operators: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"== (equals)"}),(0,r.jsx)("li",{children:"!= (not equal)"}),(0,r.jsx)("li",{children:"> (greater than)"}),(0,r.jsx)("li",{children:"< (less than)"}),(0,r.jsx)("li",{children:"start_with? (starts with)"}),(0,r.jsx)("li",{children:"end_with? (ends with)"}),(0,r.jsx)("li",{children:"include? (includes)"})]})," Available date operators: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"before (before specific date)"}),(0,r.jsx)("li",{children:"after (after specific date)"}),(0,r.jsx)("li",{children:"> (more than X days before/after today)"}),(0,r.jsx)("li",{children:"< (less than X days before/after today)"}),(0,r.jsx)("li",{children:"== (equal to X days before/after today)"})]})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"value"}),(0,r.jsxs)(i.td,{children:["string ",(0,r.jsx)(i.strong,{children:"required"})]}),(0,r.jsxs)(i.td,{children:["This is the value used for comparison. ",(0,r.jsx)("br",{}),"Value formatting: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"profile select attribute: ID of profile"}),(0,r.jsx)("li",{children:"profile search attribute: ID of profile"}),(0,r.jsx)("li",{children:"user select attribute: ID of user"}),(0,r.jsx)("li",{children:"user search attribute: ID of user"}),(0,r.jsx)("li",{children:"date attribute (before, after): correct date format for attribute"}),(0,r.jsx)("li",{children:'date attribute (>, <, ==): "X before" or "X after" where X is the number of days'})]})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"_destroy"}),(0,r.jsx)(i.td,{children:"boolean"}),(0,r.jsx)(i.td,{children:'Supplying this option with "true" will cause the condition to be destroyed'})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"Example:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'{\n  "advanced_search": {\n    "condition_rules_attributes": [\n      {\n        "type": "ProfileAttributeRule",\n        "condition_object_id": "4ba5be36-3c4d-11ee-be56-0242ac120002",\n        "object_type": "NeAttribute",\n        "comparison_operator": "includes?",\n        "value": "term"\n      }\n    ]\n  }\n}\n'})})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);