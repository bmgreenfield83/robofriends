(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(1),l=n.n(s),i=n(2),u=n(5),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},h=function(e){var t=e.robots.map((function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,t)},d=function(e){var t=e.text,n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{value:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:function(e){return n(e.target.value)}}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px"}},e.children)},f=function(){var e=Object(a.useState)({robots:[],searchField:""}),t=Object(u.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){!function(){var e,t;l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=n.sent,n.next=5,l.a.awrap(e.json());case 5:t=n.sent,o((function(e){return Object(i.a)({},e,{robots:t})}));case 7:case"end":return n.stop()}}))}()}),[]);var c=n.robots.filter((function(e){return e.name.toLowerCase().includes(n.searchField.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(d,{searchChange:function(e){o((function(t){return Object(i.a)({},t,{searchField:e})}))}}),r.a.createElement(b,null,r.a.createElement(h,{robots:c})))};n(12),n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.e092f8f0.chunk.js.map