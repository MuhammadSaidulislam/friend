(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{29:function(e,t,n){e.exports=n(59)},34:function(e,t,n){},35:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(27),r=n.n(l),o=(n(34),n(35),n(11)),u=n(2),i=n(10),s=n(61),m=n(62),d=function(e){var t=e.friend.id;return c.a.createElement("div",null,c.a.createElement(s.a,null,c.a.createElement(s.a.Header,null,"Total Post: ",t),c.a.createElement(s.a.Body,null,c.a.createElement(m.a,{variant:"info"},c.a.createElement(o.b,{to:"/Post/".concat(t)},c.a.createElement("h3",{variant:"text-white"},"See more"))))))},h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("h1",null,"Friends: ",n.length),n.map((function(e){return c.a.createElement(d,{friend:e})})))},E=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Wrong Url"))},f=n(13),p=n.n(f),b=function(){var e=Object(u.f)().friendId,t=Object(a.useState)({}),n=Object(i.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)({}),s=Object(i.a)(o,2),m=s[0],d=s[1],h=Object(a.useState)({}),E=Object(i.a)(h,2),f=E[0],b=E[1];return Object(a.useEffect)((function(){var t="https://jsonplaceholder.typicode.com/posts/".concat(e);p()(t).then((function(e){return r(e.data)}))}),[e]),Object(a.useEffect)((function(){var t="https://jsonplaceholder.typicode.com/posts?userId=".concat(e);p()(t).then((function(e){d(e.data)}))}),[e]),Object(a.useEffect)((function(){var t="https://jsonplaceholder.typicode.com/photos/".concat(e);p()(t).then((function(e){b(e.data)}))}),[e]),c.a.createElement("div",null,c.a.createElement("h3",null,l.id),c.a.createElement("h4",null,"Title: ",l.title),c.a.createElement("h5",null,"Body: ",l.body),c.a.createElement("h5",null,"Comment: ",m.body),c.a.createElement("picture",null,c.a.createElement("source",{srcSet:f.url}),c.a.createElement("img",{src:f.url,alt:f.alt})))};var j=function(){return c.a.createElement(o.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/Home"},c.a.createElement(h,null)),c.a.createElement(u.a,{path:"/Post/:friendId"},c.a.createElement(b,null)),c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(h,null)),c.a.createElement(u.a,{path:"*"},c.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(58);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.c35602ef.chunk.js.map