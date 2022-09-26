(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(1),d=(c(13),c(14),c(5)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.setSelectedTodo,s=e.selectedTodoId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title;return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":t===s}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),a?Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}):Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-success":a,"has-text-danger":!a}),children:n})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":t===s,"fa-eye":t!==s})})})})})]},t)}))})]})},b=c(8);!function(e){e[e.all=0]="all",e[e.active=1]="active",e[e.complete=2]="complete"}(s||(s={}));var u=function(e){var t=e.todos,c=e.filter,a=Object(i.useState)(s.all),n=Object(l.a)(a,2),d=n[0],o=n[1],j=Object(i.useState)(""),u=Object(l.a)(j,2),h=u[0],m=u[1];return Object(i.useEffect)((function(){var e=Object(b.a)(t);d!==s.all&&(e=e.filter((function(e){var t=e.completed;switch(d){case s.active:return!t;case s.complete:return t;default:return!1}})));var a=h.toLowerCase();h&&(e=e.filter((function(e){return e.title.includes(a)}))),c(e)}),[d,h]),Object(r.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",className:"option",value:d,onChange:function(e){return t=+e.target.value,void o(t);var t},children:[Object(r.jsx)("option",{value:s.all,children:"All"}),Object(r.jsx)("option",{value:s.active,children:"Active"}),Object(r.jsx)("option",{value:s.complete,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:h,onChange:function(e){var t=e.target.value;m(t)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),h&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return m("")}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var m=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],o=t.userId,j=t.title,b=t.completed,u=t.id;return Object(i.useEffect)((function(){(function(e){return h("/users/".concat(e))})(o).then((function(e){return d(e)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(u)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:j}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[b?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(r.jsx)(m,{})]})},x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),n=Object(l.a)(a,2),d=n[0],o=n[1],b=Object(i.useState)(null),x=Object(l.a)(b,2),f=x[0],v=x[1];return Object(i.useEffect)((function(){h("/todos").then((function(e){s(e),o(e)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{todos:c,filter:o})}),Object(r.jsx)("div",{className:"block",children:0===c.length?Object(r.jsx)(m,{}):Object(r.jsx)(j,{todos:d,setSelectedTodo:v,selectedTodoId:null===f||void 0===f?void 0:f.id})})]})})}),f&&Object(r.jsx)(O,{selectedTodo:f,setSelectedTodo:v})]})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0a569f70.chunk.js.map