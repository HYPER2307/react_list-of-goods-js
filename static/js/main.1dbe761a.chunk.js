(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),r=n(8),i=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b="alphabet",j="length",h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var d=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),a=Object(o.a)(s,2),d=a[0],g=a[1],p=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case b:return t.localeCompare(n);case j:return t.length-n.length;default:return 0}})),n&&c.reverse(),c}(h,n,d);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return c(b)},type:"button",className:"button is-info ".concat(l()({"is-light":n!==b})),children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return c(j)},type:"button",className:"button is-success ".concat(l()({"is-light":n!==j})),children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){return g(!d)},type:"button",className:"button is-warning ".concat(l()({"is-light":!1===d})),children:"Reverse"}),(""!==n||d)&&Object(u.jsx)("button",{onClick:function(){c(""),g(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1dbe761a.chunk.js.map