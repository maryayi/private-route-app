(this["webpackJsonpprivate-route-app"]=this["webpackJsonpprivate-route-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(14),a=n.n(r),i=(n(22),n(17)),l=(n(23),n(8)),o=n(2),j=n(1),d=function(e){var t=e.isAllowed,n=e.path,c=e.component,s=e.exact,r=c;return Object(j.jsx)(o.a,{path:n,exact:s,children:t?Object(j.jsx)(r,{}):Object(j.jsx)("p",{className:"private__not-allowed",children:"Not allowed based on your role!"})})},h=function(){return Object(j.jsx)("div",{className:"home",children:"This is public Home! please select another route from top menu."})},u=[{path:"/user",component:function(){return Object(j.jsx)("div",{className:"user",children:"This is only for users and you can see it!"})},role:"user"},{path:"/admin",component:function(){return Object(j.jsx)("div",{className:"admin",children:"This is only for admins and you can see it!"})},role:"admin"}];var b=function(){var e=Object(c.useState)("user"),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{children:[Object(j.jsxs)("header",{className:"App__header",children:[Object(j.jsxs)("div",{className:"App__role",children:[Object(j.jsx)("label",{htmlFor:"role",className:"App__role-label",children:"Your role"}),Object(j.jsxs)("select",{id:"role",value:n,onChange:function(e){return s(e.target.value)},children:[Object(j.jsx)("option",{value:"user",children:"User"}),Object(j.jsx)("option",{value:"admin",children:"Admin"})]})]}),Object(j.jsxs)("ul",{className:"App__nav",children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("a",{children:"Home"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/user",children:Object(j.jsx)("a",{children:"Only for users"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/admin",children:Object(j.jsx)("a",{children:"Only for admins"})})})]})]}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,children:Object(j.jsx)(h,{})}),u.map((function(e){return Object(j.jsx)(d,{path:e.path,component:e.component,isAllowed:e.role===n,exact:!0},e.path)}))]})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.f0fd3851.chunk.js.map