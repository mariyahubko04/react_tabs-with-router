(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),m=a(6),o=a(5),s=(a(24),function(e){var t=e.tabs,a=e.selectedId;return c.a.createElement(c.a.Fragment,null,t.map(function(e){return c.a.createElement("span",{className:e.id===a?"active-article":"content-tab"},e.content)}))}),i=a(16),u=a.n(i),d=function(e){var t=e.tabs,a=e.selectedId;return c.a.createElement("div",{className:"tab-form"},t.map(function(e){return c.a.createElement("li",{className:u()({dropdown:!0,active:e.id===a})},c.a.createElement(m.b,{to:"/tabs/".concat(e.id),key:e.id,type:"button",className:"dropdown-toggle"},e.title))}))},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],E=function(e){var t=e.match;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"nav nav-tabs"},c.a.createElement(d,{tabs:b,selectedId:t.params.tabId})),c.a.createElement(s,{tabs:b,selectedId:t.params.tabId}))},p=function(){return c.a.createElement("h1",{className:"main-title"},"Home page")},v=function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",null,c.a.createElement("ul",{className:"navbar"},c.a.createElement("li",null,c.a.createElement(m.c,{className:"navlink",to:"/",exact:!0},"Home")),c.a.createElement("li",null,c.a.createElement(m.c,{className:"navlink",to:"/tabs/"},"Tabs")))),c.a.createElement(o.a,{path:"/",exact:!0,component:p}),c.a.createElement(o.a,{path:"/tabs/:tabId?",component:E})))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c741addd.chunk.js.map