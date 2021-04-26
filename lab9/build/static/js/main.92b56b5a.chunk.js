(this.webpackJsonplab9=this.webpackJsonplab9||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n,r=c(0),a=c.n(r),s=c(14),i=c.n(s),u=c(4),l=c(10),d=Object(l.c)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),j=d.actions,o=(j.increment,j.decrement,j.incrementByAmount,function(e){return e.counter.value}),b=d.reducer,h=c(17),O=c(12),f=c.n(O),x=c(16),m=Object(l.b)("search/fetchDataThunk",function(){var e=Object(x.a)(f.a.mark((function e(t,c){var n,r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.login,r=t.generateUrl,e.next=3,fetch(r(n),{method:"GET",headers:{Authorization:"Token ".concat("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")}});case 3:if((a=e.sent).ok){e.next=8;break}throw new Error("HTTP error! status: ".concat(a.status));case 8:return e.next=10,a.json();case 10:return s=e.sent,console.log(s),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),p=Object(l.c)({name:"search",initialState:{value:"DeadlySquad13",users:[],status:"idle",error:null,currentRequestId:void 0},reducers:{input:function(e,t){e.value=t.payload}},extraReducers:(n={},Object(h.a)(n,m.pending,(function(e,t){"idle"===e.status&&(e.status="pending",e.currentRequestId=t.meta.requestId)})),Object(h.a)(n,m.fulfilled,(function(e,t){var c=t.meta.requestId;"pending"===e.status&&e.currentRequestId===c&&(e.status="idle",e.users=[t.payload],e.currentRequestId=void 0)})),Object(h.a)(n,m.rejected,(function(e,t){var c=t.meta.requestId;"pending"===e.status&&e.currentRequestId===c&&(e.status="rejected",e.error=t.error,e.currentRequestId=void 0)})),n)}),v=p.actions,g=v.input,N=(v.fetchData,function(e){return e.search.value}),k=p.reducer,I=Object(l.a)({reducer:{counter:b,search:k}}),_=(c(37),c(9)),w=c(3),y=(c(38),c(39),c(1)),C=function(){var e=Object(u.b)(),t=Object(u.c)(N);return Object(y.jsx)("input",{type:"text",value:t,placeholder:"Start typing login",className:"Input",onChange:function(t){e(g(t.target.value))}})},S=function(e){return"https://api.github.com/users/".concat(e)},q=(c(41),function(){var e=Object(u.b)(),t=Object(r.useCallback)(function(){var t=Object(x.a)(f.a.mark((function t(c){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(m({login:c,generateUrl:S}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),c=Object(u.c)(N),n=Object(w.f)();return Object(y.jsx)("button",{className:"SearchButton",onClick:function(){t(c),n.push("/lab9/build/user")},children:"Search"})}),B=(c(28),c(43),Object(w.g)((function(){Object(u.c)(o);return Object(y.jsxs)("div",{className:"SearchForm",children:[Object(y.jsx)("label",{className:"SearchLabel",children:Object(y.jsx)(C,{})}),Object(y.jsx)(q,{})]})}))),L=(c(44),Object(w.g)((function(){var e=Object(u.c)((function(e){return e.search})),t=e.status,c=e.users;if(0===c.length)return Object(y.jsx)(_.b,{className:"Link",to:"/lab9/build/",children:"Back"});if("pending"===t)return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(_.b,{className:"Link",to:"/lab9/build/",children:"Back"}),Object(y.jsx)("div",{children:"Loading..."})]});if("rejected"===t)return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(_.b,{className:"Link",to:"/lab9/build/",children:"Back"}),Object(y.jsx)("div",{children:"Not Found"})]});var n=c[0];return Object(y.jsxs)("div",{className:"UserPage",children:[Object(y.jsxs)("div",{className:"Container",children:[Object(y.jsxs)("div",{className:"Card",children:[Object(y.jsxs)("div",{className:"Card__InfoMain",children:[Object(y.jsxs)("div",{className:"Card__Image",children:[Object(y.jsx)("div",{className:"Image__Circle1",children:" "}),Object(y.jsx)("div",{className:"Image__Circle2"}),Object(y.jsx)("img",{src:n.avatar_url,alt:"avatar"})]}),Object(y.jsx)("h1",{className:"Card__TextH1",children:n.login})]}),Object(y.jsx)("div",{className:"Card__InfoAdditional",children:Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:[Object(y.jsx)("p",{children:n.followers}),"followers"]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("p",{children:n.following}),"following"]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("p",{children:null===n.hireable?"Not":"Is"}),"hireable"]})]})})]}),Object(y.jsxs)("div",{className:"Badge",children:[Object(y.jsx)("a",{href:n.html_url,target:"_blank",children:Object(y.jsx)("img",{src:"GitHub-Mark.png",alt:"GitHub"})}),"Open Github Profile"]})]}),Object(y.jsx)(_.b,{className:"Link",to:"/lab9/build/",children:"Back"})]})})));c(45);var A=function(){return Object(y.jsx)(_.a,{children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{className:"App__text-h1",children:"Github Profile Searcher"}),Object(y.jsxs)(w.c,{children:[Object(y.jsx)(w.a,{exact:!0,path:"/lab9/build/",component:B}),Object(y.jsx)(w.a,{path:"/lab9/build/user/",children:Object(y.jsx)(L,{})})]})]})})};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(u.a,{store:I,children:Object(y.jsx)(A,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.92b56b5a.chunk.js.map