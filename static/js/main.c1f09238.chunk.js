(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{24:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(16),r=n.n(s),i=(n(24),n(7)),o=n.n(i),u=n(17),j=n(3),d=n(18),l=n.n(d),b=(n(44),n(45),n(0));function O(){return Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"RESTy"})})}n(47);function h(){return Object(b.jsx)("footer",{children:"\xa9 2021"})}n(48),n(49);function x(t){var e=t.handleApiCall,n=Object(c.useState)("GET"),a=Object(j.a)(n,2),s=a[0],r=a[1],i=function(t){document.getElementById(s).style.background="#4a4a48",t.target.style.background="blue"};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{"data-testid":"form-submit",onSubmit:function(t){t.preventDefault();var n="no body";"POST"!==s&&"PUT"!==s||(n=t.target.body.value);var c={method:s,url:t.target.url.value,body:n};e(c)},children:[Object(b.jsxs)("label",{className:"inputLabel",children:[Object(b.jsx)("span",{children:"URL: "}),Object(b.jsx)("input",{name:"url",type:"text"}),Object(b.jsx)("button",{type:"submit",children:"GO!"})]}),Object(b.jsxs)("label",{className:"methods",children:[Object(b.jsx)("span",{onClick:function(t){r("GET"),i(t)},id:"GET",children:"GET"}),Object(b.jsx)("span",{onClick:function(t){r("POST"),i(t)},id:"POST",children:"POST"}),Object(b.jsx)("span",{onClick:function(t){r("PUT"),i(t)},id:"PUT",children:"PUT"}),Object(b.jsx)("span",{onClick:function(t){r("DELETE"),i(t)},id:"DELETE",children:"DELETE"})]}),("POST"===s||"PUT"===s)&&Object(b.jsx)("textarea",{name:"body",type:"text",rows:"4",cols:"50",children:"JSON body"})]})})}n(50);var f=n(19),m=n.n(f),p=n(54);function v(t){var e=t.data,n=t.goFlag,c=t.resultFlag;return Object(b.jsxs)("section",{id:"results",children:[n&&Object(b.jsx)("div",{class:"dots-4"}),c&&Object(b.jsx)(m.a,{id:"json-pretty",data:e,theme:p}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}function y(){var t=Object(c.useState)(null),e=Object(j.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)({}),i=Object(j.a)(r,2),d=i[0],f=i[1],m=Object(c.useState)(!1),p=Object(j.a)(m,2),y=p[0],g=p[1],T=Object(c.useState)(!1),E=Object(j.a)(T,2),S=E[0],P=E[1];Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(o.a.mark((function t(){var e,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(!1),g(d.url),e={},n=0,c={method:"".concat(d.method),baseURL:"".concat(d.url),body:"".concat(d.body)},t.next=7,l()(c).then((function(t){g(!1),P(!0),e={headers:t.headers,body:t.data},n=e.body.length}));case 7:s({count:n,results:e});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[d]);return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(x,{handleApiCall:function(t){f(t)}}),(y||S)&&Object(b.jsxs)("div",{"data-testid":"method",className:"textDev",children:["Request Method: ",d.method]}),(y||S)&&Object(b.jsxs)("div",{className:"textDev",children:["URL: ",d.url]}),(y||S)&&Object(b.jsxs)("div",{className:"textDev",children:["Body: ",d.body]}),Object(b.jsx)(v,{data:n,resultFlag:S,goFlag:y}),Object(b.jsx)(h,{})]})}var g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),g()}},[[55,1,2]]]);
//# sourceMappingURL=main.c1f09238.chunk.js.map