_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{RNiq:function(r,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var t=n("o0o1"),a=n.n(t),c=n("HaE+"),i=n("nKUr"),s=n("xdlO"),u=n("VtrM"),o={query:"query { users(limit:10, order_by:{created_at: desc}) { id name } }"},d=function(){var r=Object(c.a)(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(s.a)(o);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();function p(){var r=Object(u.a)(o,d),e=r.data;return r.error?Object(i.jsx)("div",{children:"Error..."}):e?Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)("h1",{children:"Users from database"}),Object(i.jsx)("div",{children:e.users.map((function(r){return Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:r.name})},r.id)}))})]}):Object(i.jsx)("div",{children:"Loading..."})}},vlRD:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xdlO:function(r,e,n){"use strict";var t=n("o0o1"),a=n.n(t),c=n("HaE+"),i={"Content-Type":"application/json","x-hasura-admin-secret":"2c3SYWnx7K1hbCEoAXgnD7A9Tzu3KIHM2XXqRMp0m52ywqrA80NkEaShEwPELyNU"},s=function(){var r=Object(c.a)(a.a.mark((function r(){var e,n,t,c=arguments;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={headers:i,method:"POST",body:JSON.stringify(c.length<=0?void 0:c[0])},r.next=3,fetch("https://intimate-cub-67.hasura.app/v1/graphql",e);case 3:return n=r.sent,r.next=6,n.json();case 6:if(!(t=r.sent).errors){r.next=9;break}throw JSON.stringify(t.errors);case 9:return r.abrupt("return",t.data);case 10:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();e.a=s}},[["vlRD",0,2,1,4]]]);