(this["webpackJsonpsmarty-party"]=this["webpackJsonpsmarty-party"]||[]).push([[0],{149:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(14),s=n.n(i),o=n(11),u=n(21),l=function(e,t){return e.users.find((function(e){return e.id===t.id}))},j=function(e){return 1===e.users.length},d=function(){return(new Date).getFullYear()},b=l,f=j,O=function(e,t){return!!("admin"===t.role||l(e,t)&&j(e))},h=n(152),x=n(191),p=Object(x.a)((function(e){return{footer:{marginTop:"auto",position:"absolute",justifyContent:"center",bottom:"2%",fontSize:"10px",color:"#34013F"}}})),m=function(){var e=p();return Object(r.jsxs)(h.a,{className:e.footer,children:["Smarty Party App, Vera Popova ",d()]})},v=n.p+"static/media/pexels-balloons.f982149c.jpg",g=n(9),y=n.n(g),w=n(20),T=n(16),k={RADIO_BUTTON_LABELS:[{value:"All",label:"All"},{value:"Reserved",label:"Reserved By Me"},{value:"Available",label:"Available"}],STORAGE_KEY:"loggedGiftAppUser",NAV_LINKS:[{path:"/",name:"home"},{path:"/gifts",name:"gifts"},{path:"/users",name:"guests"}]},I=function(e){return window.localStorage.setItem(k.STORAGE_KEY,JSON.stringify(e))},C=function(){return window.localStorage.getItem(k.STORAGE_KEY)},E=function(){return window.localStorage.removeItem(k.STORAGE_KEY)},N={message:"",messageType:"",seconds:0},S=function(e,t,n){return function(){var r=Object(w.a)(y.a.mark((function r(c){return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c({type:"SET_NOTIFICATION",data:{message:e,messageType:t,timeout:setTimeout((function(){c(A())}),1e3*n)}});case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},A=function(){return{type:"HIDE_NOTIFICATION"}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return clearTimeout(e.timeout),t.data;case"HIDE_NOTIFICATION":return N;default:return e}},_=JSON.parse(C()),F=_||null,R=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"LOGIN",data:e}),n(S("Welcome, ".concat(e.name,"!"),"success",10));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},B=n(36),U=n.n(B),D={login:function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=n(208),H=n(153),P=function(){var e=Object(c.useState)(""),t=Object(T.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(T.a)(i,2),u=s[0],l=s[1],j=Object(o.c)(),d=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),D.login({username:n,password:u}).then((function(e){I(e),a(""),l(""),j(R(e))})).catch((function(){j(S("wrong username/password","error",5))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:d,children:[Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{label:"username",id:"username",value:n,onChange:function(e){var t=e.target;return a(t.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{label:"password",id:"password",type:"password",value:u,onChange:function(e){var t=e.target;return l(t.value)}})}),Object(r.jsx)(H.a,{type:"submit",id:"login-button",children:"login"})]})})},M=n(210),K=Object(x.a)({alert:{position:"fixed",left:"0px",top:"8%",margin:"0 10%",width:"80%"}}),W=function(){var e=Object(o.d)((function(e){return e.notification})),t=K();return e.message?Object(r.jsx)("div",{className:"flash-messages",children:Object(r.jsx)(M.a,{id:"alert",variant:"outlined",severity:e.messageType,className:t.alert,children:e.message})}):null},Y=Object(x.a)((function(e){return{loginMain:{backgroundImage:"url(".concat(v,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",opacity:"90%",width:"100vw",minWidth:"100vw",height:"100vh",position:"fixed",display:"flex",justifyContent:"center",alignItems:"center"},loginContent:{marginBottom:"5%"}}})),J=function(){var e=Y();return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:e.loginMain,children:[Object(r.jsx)(W,{}),Object(r.jsx)("div",{className:e.loginContent,children:Object(r.jsx)(P,{})})]})})};function V(e){var t=e.to,n=e.text;return Object(r.jsx)(H.a,{color:"inherit",size:"small",component:u.b,to:t,style:{border:"none"},children:n})}var q=n(196),Q=n(197),X=Object(x.a)((function(e){return{btnGroup:{flexGrow:1}}})),Z=function(e){var t=e.handleLogout,n=Object(o.d)((function(e){return e.login})),c=X(),a=k.NAV_LINKS.map((function(e,t){return Object(r.jsx)(V,{to:e.path,text:e.name,className:c.btn},t)}));return Object(r.jsx)("div",{style:{marginBottom:"15px"},children:Object(r.jsxs)(q.a,{children:[Object(r.jsx)(Q.a,{color:"primary","aria-label":"outlined primary button group",className:c.btnGroup,children:a}),n?Object(r.jsx)(H.a,{color:"inherit",size:"small",component:u.b,to:"/logout",onClick:t,children:"logout"}):Object(r.jsx)(H.a,{color:"inherit",size:"small",component:u.b,to:"/login",children:"login"})]})})},$=n(18),ee=n(17),te=n(24),ne=n(38),re=null,ce=function(e){re="bearer ".concat(e)},ae=function(e){I(e)},ie=function(){return{headers:{Authorization:re}}},se=function(){E(),re=null},oe="/api/gifts",ue=function(){return ie()},le=function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get(oe);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.post(oe,t,ue());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.put("".concat(oe,"/").concat(t.id),t,ue());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be={getAll:le,create:je,changeReserved:function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.patch("".concat(oe,"/").concat(t.id),t,ue());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:de,deleteGift:function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.delete("".concat(oe,"/").concat(t),ue());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=function(){return function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.getAll();case 2:n=e.sent,t({type:"INIT_GIFTS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_GIFTS":return t.data;case"CREATE_GIFT":return[].concat(Object(ne.a)(e),[t.data]);case"DELETE_GIFT":return e.filter((function(e){return e.id!==t.id}));case"UPDATE_GIFT":var n=t.data;return e.map((function(e){return e.id===n.id?n:e}));default:return e}};function he(e){var t=e.label,n=e.type,c=e.id,a=e.value,i=e.name,s=e.onChange;return Object(r.jsx)(z.a,{label:t,type:n,id:c,value:a,name:i,onChange:s})}var xe=n(209),pe=n(198),me=Object(x.a)((function(e){return{root:{display:"flex",justifyContent:"center"}}})),ve=function(){var e=me(),t=Object($.g)().id,n=Object(o.d)((function(e){return e.gifts.find((function(e){return e.id===t}))})),a=Object(c.useState)({name:n.name?n.name:"",description:n.description?n.description:"",url:n.url?n.url:""}),i=Object(T.a)(a,2),s=i[0],u=i[1],l=Object($.f)(),j=Object(o.c)(),d=function(e){var t=e.target,n=t.name,r=t.value;u(Object(te.a)(Object(te.a)({},s),{},Object(ee.a)({},n,r)))},b=function(e){j(function(e){return function(t){be.update(e).then((function(e){t({type:"UPDATE_GIFT",data:e}),t(S("Entry ".concat(e.name," was updated"),"success",5))})).catch((function(){t(S("Something went wrong","error",5))}))}}(e))},f=Object(te.a)(Object(te.a)({},n),{},{name:s.name,description:s.description,url:s.url,users:n.users.map((function(e){return e.id}))});if(!n)return null;var O=Object.keys(s).map((function(e,t){return Object(r.jsx)(xe.a,{mb:2,children:Object(r.jsx)(he,{label:e,type:"text",id:e,value:s[e],name:e,onChange:d},t)},t)}));return Object(r.jsx)("div",{className:e.root,children:Object(r.jsxs)(pe.a,{item:!0,xs:12,container:!0,justify:"center",children:[Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(h.a,{children:"Edit Gift"})}),Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),b(f),l.push("/gifts"),u({name:"",description:"",url:""})},autoComplete:"off",children:Object(r.jsxs)("div",{children:[O,Object(r.jsx)(H.a,{type:"submit",children:"save"}),Object(r.jsx)(V,{to:"/gifts",text:"back"})]})})})]})})};function ge(e){var t=e.onClick,n=e.text;return Object(r.jsx)(H.a,{onClick:t,size:"small",children:n})}var ye=Object(x.a)((function(e){return{content:{display:"flex",justifyContent:"center"}}})),we=a.a.forwardRef((function(e,t){var n=ye(),a=Object(c.useState)(!1),i=Object(T.a)(a,2),s=i[0],o=i[1],u={display:s?"none":""},l={display:s?"":"none"},j=function(){o(!s)};return Object(c.useImperativeHandle)(t,(function(){return{toggleVisibility:j}})),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:u,children:Object(r.jsx)(ge,{onClick:j,text:e.buttonLabel})}),Object(r.jsxs)("div",{style:l,className:"togglableContent",children:[e.children,Object(r.jsx)("div",{className:n.content,children:Object(r.jsx)(ge,{onClick:j,text:"cancel"})})]})]})}));we.displayName="Togglable";var Te=we,ke=n(199),Ie=n(200),Ce=n(201),Ee=n(202),Ne=n(203),Se=n(204),Ae=n(95),Ge=n.n(Ae),_e=Object(x.a)((function(e){return{wrapIcon:{verticalAlign:"middle",display:"inline-flex"},tableContainer:{maxHeight:300,minHeight:300,marginTop:"5vh",marginBottom:"5vh"},bottomButtons:{justifyContent:"center",flexDirection:"column",alignItems:"center",display:"flex"},comments:{alignItems:"center"}}})),Fe=function(){var e=_e(),t=Object($.f)(),n=Object($.g)().id,c=Object(o.d)((function(e){return e.gifts.find((function(e){return e.id===n}))})),a=Object(o.d)((function(e){return e.login}));return c||a?Object(r.jsxs)("div",{children:[c&&function(e){return O(e,a)}(c)?Object(r.jsxs)(h.a,{variant:"subtitle1",className:e.wrapIcon,children:[Object(r.jsx)(Ge.a,{color:"secondary"}),Object(r.jsx)(u.b,{to:"/edit/".concat(c.id),children:"edit"})]}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)(ke.a,{className:e.tableContainer,children:Object(r.jsxs)(Ie.a,{children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(Ee.a,{children:Object(r.jsx)(Ne.a,{align:"center",children:c.name})})}),Object(r.jsxs)(Se.a,{children:[Object(r.jsx)(Ee.a,{children:Object(r.jsx)(Ne.a,{align:"center",children:c.url})}),Object(r.jsx)(Ee.a,{children:Object(r.jsx)(Ne.a,{align:"center",children:c.description})})]})]})}),Object(r.jsxs)("div",{className:e.bottomButtons,children:[Object(r.jsx)("div",{className:e.comments,children:Object(r.jsx)(Te,{buttonLabel:"Open Comments",children:Object(r.jsx)(r.Fragment,{})})}),Object(r.jsx)(ge,{onClick:function(){return t.goBack()},text:"back"})]})]}):null},Re=Object(x.a)((function(e){return{root:{display:"flex",justifyContent:"center"}}})),Le=function(e){var t=e.currentUser,n=Re(),a=Object($.f)(),i=Object(o.c)(),s=Object(c.useState)({name:"",description:"",url:""}),u=Object(T.a)(s,2),l=u[0],j=u[1],d=function(e){var t=e.target,n=t.name,r=t.value;j(Object(te.a)(Object(te.a)({},l),{},Object(ee.a)({},n,r)))},b=function(e){var t;i((t=e,function(e){be.create(t).then((function(t){e({type:"CREATE_GIFT",data:t}),e(S("Entry ".concat(t.name," was created"),"success",5))})).catch((function(){e(S("Something went wrong","error",5))}))}))},f=Object.keys(l).map((function(e,t){return Object(r.jsx)(xe.a,{mb:2,children:Object(r.jsx)(he,{label:e,type:"text",id:e,value:l[e],name:e,onChange:d},t)},t)}));return Object(r.jsx)("div",{className:n.root,children:Object(r.jsxs)(pe.a,{item:!0,xs:12,container:!0,justify:"center",children:[Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(h.a,{children:"Create a new entry"})}),Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),b({name:l.name,description:l.description,url:l.url,reserved:!0,user:t.id}),a.push("/gifts"),j({name:"",description:"",url:""})},autoComplete:"off",children:Object(r.jsxs)("div",{children:[f,Object(r.jsx)(H.a,{type:"submit",children:"save"}),Object(r.jsx)(V,{to:"/gifts",text:"back"})]})})})]})})},Be=function(e){return{type:"SET_FILTER",filter:e}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.filter;default:return e}},De=n(205),ze=n(211),He=n(214),Pe=n(212),Me=function(){var e=Object(o.c)(),t=Object(c.useState)("All"),n=Object(T.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){e(Be(a))}),[a]);var s=k.RADIO_BUTTON_LABELS.map((function(e,t){return Object(r.jsx)(De.a,{label:e.label,value:e.value,control:Object(r.jsx)(ze.a,{})},t)}));return Object(r.jsx)("div",{children:Object(r.jsx)(He.a,{component:"fieldset",children:Object(r.jsx)(Pe.a,{row:!0,"aria-label":"availability",name:"availability",value:a,onChange:function(t){var n=t.target.value;i(n),e(Be(a))},children:s})})})},Ke=function(e,t){var n=b(e,t),r=f(e),c={};try{return e.reserved&&n&&r?Object(te.a)(Object(te.a)({},e),{},{reserved:!1,users:[]}):e.reserved&&n&&!r?(c=e.users.filter((function(e){return e.id!==n.id})).map((function(e){return e.id})),Object(te.a)(Object(te.a)({},e),{},{reserved:!0,users:c})):n?null:(c=e.users.map((function(e){return e.id})).concat(t.id),Object(te.a)(Object(te.a)({},e),{},{reserved:!0,users:c}))}catch(a){return console.log(a),null}},We=Object(x.a)((function(e){return{tableContainer:{maxHeight:300,minHeight:300,marginTop:"5vh",marginBottom:"5vh"}}})),Ye=function(e){var t=e.gifts,n=e.currentUser,c=e.filter,a=Object(o.c)(),i=We(),s=function(e,t){var n=Ke(e,t);a(n?function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be.changeReserved(e);case 2:r=t.sent,n({type:"UPDATE_GIFT",data:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n):S("Availability change failed","error",5))},l=function(e){var t;window.confirm("Do you want to remove this gift?")&&a((t=e.id,function(e){be.deleteGift(t).then((function(){e({type:"DELETE_GIFT",id:t}),e(S("The gift was removed","success",5))})).catch((function(){e(S("Give removal failed. Check if you have rights","error",5))}))}))},j=function(e){return O(e,n)};return t||n||c?Object(r.jsx)(ke.a,{className:i.tableContainer,children:Object(r.jsx)(Ie.a,{children:Object(r.jsx)(Se.a,{children:function(){switch(c){case"All":return t;case"Reserved":return function(){var e=t.filter((function(e){return e.users.length>0})),r=[];return e.map((function(e){return e.users.map((function(t){t.id===n.id&&r.push(e)}))})),r}();case"Available":return t.filter((function(e){return!e.reserved}))}}().map((function(e){return Object(r.jsxs)(Ee.a,{children:[Object(r.jsx)(Ne.a,{children:Object(r.jsx)(u.b,{to:"/gifts/".concat(e.id),children:e.name})}),Object(r.jsx)(Ne.a,{padding:"none",children:Object(r.jsx)("div",{children:e.users&&e.users.map((function(e){return Object(r.jsx)("p",{children:e.name},e.id)}))})}),Object(r.jsx)(Ne.a,{children:Object(r.jsx)(ge,{onClick:function(){return s(e,n)},text:e.reserved&&e.users.find((function(e){return e.id===n.id}))?"release":"reserve"})}),j(e)?Object(r.jsx)(Ne.a,{children:Object(r.jsx)(ge,{onClick:function(){l(e)},text:"Remove"})}):Object(r.jsx)(r.Fragment,{})]},e.id)}))})})}):null},Je=Object(x.a)((function(){return{container:{display:"flex",justifyContent:"center"}}})),Ve=function(e){var t=e.currentUser,n=Object(o.d)((function(e){return e.gifts})),c=Object(o.d)((function(e){return e.filter})),a=Je();return n||t||c?Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:a.container,children:Object(r.jsx)(h.a,{color:"textPrimary",gutterBottom:!0,align:"center",fontSize:"2.5vh",children:" Gifts"})}),Object(r.jsx)("div",{className:a.container,children:Object(r.jsx)(Me,{})}),Object(r.jsx)(u.b,{to:"/create",children:"Suggest Gift"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ye,{gifts:n,currentUser:t,filter:c}),";"]})]}):null},qe=Object(x.a)((function(){return{text:{color:"#34013F"}}}));var Qe=function(){var e=qe();return Object(r.jsx)("div",{id:"mainTitle",children:Object(r.jsx)(h.a,{variant:"h4",component:"h5",className:e.text,children:Object(r.jsxs)("strong",{children:["Liza's Birthday 26.02.",d()]})})})},Xe=function(){var e="undefined"!==typeof window,t=Object(c.useState)({width:e?1500:window.innerWidth,height:e?800:window.innerHeight}),n=Object(T.a)(t,2),r=n[0],a=n[1],i=function(){a({width:window.innerWidth,height:window.innerHeight})};return Object(c.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),r},Ze=n(96),$e=n.n(Ze),et=function(){var e=Xe(),t=e.width,n=e.height,a=Object(c.useState)(!0),i=Object(T.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(1),l=Object(T.a)(u,2),j=l[0],d=l[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){d(0)}),4500),t=setTimeout((function(){o(!1)}),5e3);return function(){clearTimeout(e),clearTimeout(t)}}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)($e.a,{width:t,height:n,numberOfPieces:120,run:s,opacity:j})})},tt=n.p+"static/media/birthday-girl.f8d6ca7d.jpg",nt=Object(x.a)((function(e){return{root:{position:"relative",margin:"auto",top:0,right:0,bottom:0,left:0,width:"500px",height:"100px"},pic:{borderRadius:"80%",marginTop:"10px"}}})),rt=function(){var e=nt();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:e.root,children:[Object(r.jsx)(Qe,{}),Object(r.jsx)("img",{className:e.pic,src:tt,alt:"birthday-girl",width:430,height:450})]}),Object(r.jsx)(et,{})]})},ct={getAll:function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},at=function(){return function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ct.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},st=Object(x.a)((function(e){return{tableContainer:{maxHeight:300,minHeight:300,marginTop:"5vh",marginBottom:"5vh"}}})),ot=function(e){var t=e.title,n=e.object,c=e.path,a=st();return t||n||c?Object(r.jsx)(ke.a,{className:a.container,children:Object(r.jsxs)(Ie.a,{children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(Ee.a,{children:Object(r.jsx)(Ne.a,{align:"center",children:t})})}),Object(r.jsxs)(Se.a,{children:[Object(r.jsx)(Ee.a,{}),n.map((function(e){return Object(r.jsx)(Ee.a,{children:Object(r.jsx)(Ne.a,{align:"center",children:Object(r.jsx)(u.b,{to:"/".concat(c,"/").concat(e.id),children:e.name})})},e.id)}))]})]})}):null},ut=Object(x.a)((function(e){return{bottom:{justifyContent:"center",alignItems:"center",display:"flex"}}})),lt={initUsers:at},jt=Object(o.b)((function(e){return{users:e.users}}),lt)((function(e){var t=ut(),n=Object(o.c)();Object(c.useEffect)((function(){n(at())}),[n]);var a=Object($.h)("/users/:id"),i=a?e.users.find((function(e){return e.id===a.params.id})):null,s=Object($.f)();return i?Object(r.jsxs)("div",{children:[Object(r.jsx)(ot,{title:"Gifts Reserved by".concat(i.name),object:i.gifts,path:"gifts"}),Object(r.jsx)("div",{className:t.bottom,children:Object(r.jsx)(ge,{onClick:function(){return s.goBack()},text:"back"})})]}):null})),dt=Object(x.a)((function(e){return{bottom:{justifyContent:"center",alignItems:"center",display:"flex"}}})),bt=function(){var e=dt(),t=Object(o.d)((function(e){return e.users})),n=Object($.f)();return Object(r.jsxs)("div",{children:[Object(r.jsx)(ot,{title:"Guest List",object:t,path:"users"}),Object(r.jsx)("div",{className:e.bottom,children:Object(r.jsx)(ge,{onClick:function(){return n.goBack()},text:"back"})})]})},ft=function(e){var t=e.currentUser;return t?Object(r.jsxs)($.c,{children:[Object(r.jsx)($.a,{path:"/gifts/:id",children:Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(Fe,{})})}),Object(r.jsx)($.a,{exact:!0,path:"/gifts",children:Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(Ve,{currentUser:t})})}),Object(r.jsx)($.a,{path:"/users/:id",children:Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(jt,{})})}),Object(r.jsx)($.a,{path:"/users",children:Object(r.jsx)(pe.a,{item:!0,xs:6,children:Object(r.jsx)(bt,{})})}),Object(r.jsx)($.a,{path:"/create",children:Object(r.jsx)(pe.a,{item:!0,xs:6,children:Object(r.jsx)(Le,{currentUser:t})})}),Object(r.jsx)($.a,{path:"/edit/:id",children:Object(r.jsx)(pe.a,{item:!0,xs:6,children:Object(r.jsx)(ve,{})})}),Object(r.jsx)($.a,{path:"/",children:Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(rt,{})})})]}):null},Ot=Object(x.a)((function(e){return{root:{backgroundImage:"url(".concat(v,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",opacity:"90%",width:"100vw",minWidth:"100vw",height:"100vh",position:"fixed"}}})),ht={initGifts:fe,initUsers:at},xt=Object(o.b)((function(e){return{gifts:e.gifts,users:e.users}}),ht)((function(e){var t=Ot(),n=Object(o.d)((function(e){return e.login})),a=Object(o.c)();Object(c.useEffect)((function(){a(fe()),a(at())}),[]),Object(c.useEffect)((function(){ae(n),n&&ce(n.token)}),[n]);return n?Object(r.jsx)("div",{className:t.root,children:Object(r.jsxs)(pe.a,{item:!0,xs:12,container:!0,justify:"center",spacing:2,children:[Object(r.jsx)(pe.a,{item:!0,xs:12,children:Object(r.jsx)(Z,{handleLogout:function(){se(),a({type:"LOGOUT"})}})}),Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(W,{})}),Object(r.jsx)(ft,{currentUser:n}),Object(r.jsx)(m,{})]})}):Object(r.jsx)(J,{})})),pt=n(97),mt=Object(pt.a)({reducer:{gifts:Oe,notification:G,login:L,filter:Ue,users:it}}),vt=n(207),gt=n(206),yt=n(68),wt=n(98),Tt=Object(wt.a)({palette:{type:"light",primary:{main:"#EEBDEC",light:"#61dafb",dark:"#21a1c4"},secondary:{main:"#EEBDEC",light:"#61dafb",dark:"#21a1c4"},error:{main:yt.a.A400},background:{default:"#e1e3e2"},text:{primary:"#34013F"}},typography:{fontFamily:["Chilanka","cursive"].join(",")},overrides:{MuiPaper:{root:{padding:"20px 10px",margin:"10px",backgroundColor:"#fff"}},MuiButton:{root:{margin:"5px"}},MuiCssBaseline:{"@global":{"*::-webkit-scrollbar":{width:"8px",height:"8px"},"*::-webkit-scrollbar-track":{background:"inherit",boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"*::-webkit-scrollbar-thumb":{borderRadius:"20px",backgroundColor:"#e1e3e2"},"*::-webkit-scrollbar-corner":{background:"inherit"}}},MuiFormControlLabel:{label:{fontSize:"2.5vh"}}}});s.a.render(Object(r.jsx)(u.a,{children:Object(r.jsx)(o.a,{store:mt,children:Object(r.jsxs)(gt.a,{theme:Tt,children:[Object(r.jsx)(vt.a,{}),Object(r.jsx)(xt,{})]})})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.ddcba685.chunk.js.map