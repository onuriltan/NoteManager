(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],d=0,l=[];d<i.length;d++)a=i[d],o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1b1dfcbc":"9bd1ecfb","chunk-2d2249af":"65569d00","chunk-2d237c74":"ba3b9bb6","chunk-35ac4d1c":"710230c2","chunk-37f1163a":"6b76615f"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1b1dfcbc":1,"chunk-35ac4d1c":1,"chunk-37f1163a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1b1dfcbc":"5faec110","chunk-2d2249af":"31d6cfe0","chunk-2d237c74":"31d6cfe0","chunk-35ac4d1c":"e2946838","chunk-37f1163a":"d95c8275"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t),u=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"074b":function(t,e,n){t.exports=n.p+"img/empty-paper.747c5c40.png"},"0f19":function(t,e,n){},"1a7c":function(t,e,n){"use strict";var r=n("0f19"),a=n.n(r);a.a},"1b59":function(t,e,n){},"3e17":function(t,e,n){"use strict";var r=n("b124"),a=n.n(r);a.a},"41cb":function(t,e,n){"use strict";n("96cf");var r=n("3b8d"),a=(n("cadf"),n("551c"),n("097d"),n("2b0e")),o=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Dashboard")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts-container"},[n("div",{staticClass:"posts"},[n("h1",{staticClass:"posts__header"},[t._v("Latest Notes")]),n("form",{staticClass:"posts__create-form",on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[n("b-input-group",{staticClass:"posts__create-form__inputgroup"},[n("b-form-input",{staticClass:"posts__create-form__input",attrs:{type:"text",placeholder:"Create a note ..."},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("b-input-group-append",[n("b-btn",{attrs:{type:"submit",variant:"success"}},[t._v("Post!")])],1)],1)],1),n("hr"),n("Notes",{attrs:{editPost:t.editPost,deletePost:t.deletePost,posts:t.posts}})],1)])},u=[],d=n("7ee9"),l=n("f125"),f={name:"PostComponent",components:{Notes:l["a"]},data:function(){return{posts:[],error:"",text:""}},methods:{createPost:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].insertPost(this.text);case 2:return t.next=4,d["a"].getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deletePost:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].deletePost(e);case 2:return t.next=4,d["a"].getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),editPost:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].editPost(e,n);case 2:return t.next=4,d["a"].getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()},beforeMount:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d["a"].getPosts();case 3:this.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}()},p=f,h=(n("1a7c"),n("2877")),m=Object(h["a"])(p,c,u,!1,null,"ff2589dc",null);m.options.__file="Dashboard.vue";var b=m.exports,v={name:"home",components:{Dashboard:b}},g=v,_=Object(h["a"])(g,s,i,!1,null,null,null);_.options.__file="HomeView.vue";var w=_.exports,k=n("801e"),x=n("4360"),y=function(){return n.e("chunk-37f1163a").then(n.bind(null,"3bea"))},E=function(){return n.e("chunk-1b1dfcbc").then(n.bind(null,"e846"))},A=function(){return n.e("chunk-35ac4d1c").then(n.bind(null,"bc91"))},P=function(){return n.e("chunk-2d237c74").then(n.bind(null,"fd22"))},C=function(){return n.e("chunk-2d2249af").then(n.bind(null,"e19f"))};function O(t,e,n){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark(function t(e,n,r){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=function(){k["a"].getters.isAuthenticated()?r():r("/login")},t.next=3,x["a"].dispatch("loadUser");case 3:a();case 4:case"end":return t.stop()}},t,this)})),j.apply(this,arguments)}function I(t,e,n){return S.apply(this,arguments)}function S(){return S=Object(r["a"])(regeneratorRuntime.mark(function t(e,n,r){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=function(){k["a"].getters.isAuthenticated()?r("/"):r()},t.next=3,x["a"].dispatch("loadUser");case 3:a();case 4:case"end":return t.stop()}},t,this)})),S.apply(this,arguments)}a["a"].use(o["a"]);e["a"]=new o["a"]({scrollBehavior:function(t,e,n){return{y:0}},mode:"history",linkExactActiveClass:"active-page",routes:[{path:"*",component:C},{path:"/",name:"home",component:w,beforeEnter:O},{path:"/confirm/:confirmationToken",name:"confirm",component:P,beforeEnter:I},{path:"/notes-history",name:"history",component:A,beforeEnter:O},{path:"/login",name:"login",component:y,beforeEnter:I},{path:"/register",name:"register",component:E,beforeEnter:I}]})},4360:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("2f62"),o=n("801e");r["a"].use(a["a"]);var s=new a["a"].Store({modules:{AuthStore:o["a"]}});e["a"]=s},"4fdb":function(t,e,n){"use strict";var r=n("1b59"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"app"}},[n("SessionExpired"),n("HeaderComponent"),n("router-view")],1)])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"header",attrs:{toggleable:"md",type:"dark",variant:"success"}},[t.isAuthenticated?n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}):t._e(),n("b-navbar-brand",[n("router-link",{staticClass:"header__brand",attrs:{to:"/"}},[t._v("NoteManager")])],1),t.isAuthenticated?n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("router-link",{staticClass:"header__link nav-link",attrs:{to:"/"}},[t._v("Latest Notes")]),n("router-link",{staticClass:"header__link nav-link",attrs:{to:"/notes-history"}},[t._v("Notes History")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("em",[t._v("User")])]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{on:{click:function(e){t.logout()}}},[t._v("Signout")])],2)],1)],1):t._e()],1)},i=[],c=(n("96cf"),n("3b8d")),u={name:"HeaderComponent",computed:{isAuthenticated:function(){return this.$store.state.AuthStore.isAuthenticated}},methods:{logout:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("logout");case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},d=u,l=(n("4fdb"),n("2877")),f=Object(l["a"])(d,s,i,!1,null,"c902caaa",null);f.options.__file="Header.vue";var p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"session-expired-alert":t.sessionExpired},staticStyle:{display:"none"},attrs:{id:"theWarning"}},[n("div",{staticClass:"session-expired-alert__content"},[n("b-alert",{staticClass:"session-expired-alert__content__message",attrs:{show:"",variant:"warning"}},[n("h4",{staticClass:"alert-heading"},[t._v("Warning!")]),n("p",[t._v("Your session is expired. Redirecting to login ...")])])],1)])},m=[],b={name:"SessionExpired",computed:{sessionExpired:function(){return this.$store.state.AuthStore.sessionExpired}},watch:{sessionExpired:function(t,e){}}},v=b,g=(n("3e17"),Object(l["a"])(v,h,m,!1,null,"5faa54d7",null));g.options.__file="SessionExpired.vue";var _=g.exports,w={name:"App",components:{SessionExpired:_,HeaderComponent:p}},k=w,x=(n("5c0b"),Object(l["a"])(k,a,o,!1,null,null,null));x.options.__file="App.vue";var y=x.exports,E=n("41cb"),A=n("4360"),P=n("9f7b"),C=(n("b77e"),n("2dd8"),n("7b38"));r["a"].use(C["Layout"]),r["a"].use(P["a"]),r["a"].config.productionTip=!1,new r["a"]({router:E["a"],store:A["a"],render:function(t){return t(y)}}).$mount("#app")},5766:function(t,e,n){},"5a73":function(t,e,n){"use strict";var r=n("5766"),a=n.n(r);a.a},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"7ee9":function(t,e,n){"use strict";var r=n("cebc"),a=(n("96cf"),n("3b8d")),o=n("795b"),s=n.n(o),i=n("d225"),c=n("b0b4"),u=n("bc3a"),d=n.n(u),l=n("4360"),f="api/posts",p=function(){function t(){Object(i["a"])(this,t)}return Object(c["a"])(t,null,[{key:"getPosts",value:function(){return l["a"].dispatch("checkIsAuthenticated"),new s.a(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,n){var a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(f,{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}});case 3:a=t.sent,o=a.data,e(o.map(function(t){return Object(r["a"])({},t,{createdAt:new Date(t.createdAt)})})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getPostsByCriteria",value:function(t,e,n){return l["a"].dispatch("checkIsAuthenticated"),new s.a(function(){var o=Object(a["a"])(regeneratorRuntime.mark(function a(o,s){var i,c;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return""===t&&(t="%20"),""===e&&(e="%20"),""===n&&(n="%20"),a.prev=3,a.next=6,d.a.get("".concat(f,"/").concat(t,"/").concat(e,"/").concat(n),{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}});case 6:i=a.sent,c=i.data,o(""!==c?c.map(function(t){return Object(r["a"])({},t,{createdAt:new Date(t.createdAt)})}):[]),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](3),s(a.t0);case 14:case"end":return a.stop()}},a,this,[[3,11]])}));return function(t,e){return o.apply(this,arguments)}}())}},{key:"insertPost",value:function(t){return l["a"].dispatch("checkIsAuthenticated"),d.a.post(f,{text:t},{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}})}},{key:"deletePost",value:function(t){return l["a"].dispatch("checkIsAuthenticated"),d.a.delete("".concat(f,"/").concat(t),{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}})}},{key:"editPost",value:function(t,e){return l["a"].dispatch("checkIsAuthenticated"),d.a.put("".concat(f,"/").concat(t),{text:e},{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}})}}]),t}();e["a"]=p},"801e":function(t,e,n){"use strict";var r=n("e814"),a=n.n(r),o=n("795b"),s=n.n(o),i=(n("cadf"),n("551c"),n("097d"),n("96cf"),n("3b8d")),c=n("d225"),u=n("b0b4"),d=n("bc3a"),l=n.n(d),f="/api/auth",p=function(){function t(){Object(c["a"])(this,t)}return Object(u["a"])(t,null,[{key:"login",value:function(t){return new s.a(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(f,"/login"),t);case 3:r=e.sent,n(r),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0.response);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())}},{key:"register",value:function(t){return new s.a(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(f,"/register"),t);case 3:r=e.sent,n(r),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0.response);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())}},{key:"confirmUser",value:function(t){return new s.a(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(f,"/confirm/").concat(t));case 3:r=e.sent,n(r),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0.response);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())}}]),t}(),h=p,m=n("41cb"),b=n("04e1"),v=n.n(b),g={isAuthenticated:!1,sessionExpired:!1},_={state:g,getters:{isAuthenticated:function(){return g.isAuthenticated}},actions:{logout:function(t){t.commit("deleteToken")},login:function(t,e){return new s.a(function(n){h.login(e).then(function(e){return t.commit("updateIsAuthenticated",e),n(e)}).catch(function(t){return n(t)})})},confirmUser:function(t,e){return new s.a(function(n){h.confirmUser(e).then(function(e){return t.commit("updateIsAuthenticated",e),n(e)}).catch(function(t){return n(t)})})},register:function(t,e){return new s.a(function(t){h.register(e).then(function(e){return t(e)}).catch(function(e){return t(e)})})},loadUser:function(t){t.commit("loadUser")},checkIsAuthenticated:function(t){t.commit("checkIsAuthenticated")}},mutations:{deleteToken:function(t){window.localStorage.removeItem("token"),t.isAuthenticated=!1,m["a"].push("/login")},checkIsAuthenticated:function(t){var e=window.localStorage.getItem("token"),n=(new Date).getTime()/1e3,r=null;null!=e&&(r=v()(e).exp),null!=r&&a()(r)-n<0&&(t.sessionExpired=!0,setTimeout(function(){t.isAuthenticated=!1,m["a"].push("/login"),t.sessionExpired=!1},2e3))},updateIsAuthenticated:function(t,e){200===e.status?(window.localStorage.setItem("token",e.data.token),t.isAuthenticated=!0,t.sessionExpired=!1,m["a"].push("/")):setTimeout(function(){m["a"].push("/login")},2e3)},loadUser:function(t){var e=window.localStorage.getItem("token"),n=(new Date).getTime()/1e3,r=null;null!=e&&(r=v()(e).exp),null!=r&&a()(r)-n>0&&(t.isAuthenticated=!0,t.sessionExpired=!1)}}};document.addEventListener("DOMContentLoaded",function(t){if(window.localStorage.getItem("token")){var e=window.localStorage.getItem("token"),n=(new Date).getTime()/1e3,r=null;null!=e&&(r=v()(e).exp),null!=r&&a()(r)-n>0&&(g.isAuthenticated=!0,g.sessionExpired=!1)}});e["a"]=_},b124:function(t,e,n){},b77e:function(t,e,n){},f125:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"notes"},[0!==t.posts.length?r("div",{staticClass:"notes__content"},[r("b-card-group",{staticClass:"notes__content__cards",attrs:{deck:""}},t._l(t.posts,function(e){return r("b-card",{key:e._id,staticClass:"mb-2 posts__content__card fade--away slide--in--from--left",staticStyle:{"max-width":"15rem","min-width":"15rem"},attrs:{title:t._f("convertDate")(e.createdAt),tag:"article"}},[r("p",{staticClass:"card-text"},[t._v("\n          "+t._s(e.text)+"\n        ")]),r("div",{staticClass:"notes__content__card__footer",attrs:{slot:"footer"},slot:"footer"},[r("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(n){t.showDeleteModal(e._id)}}},[t._v("Delete")]),r("b-button",{attrs:{size:"sm"},on:{click:function(n){t.showEditModal(e._id,e.text)}}},[t._v("Edit")])],1)])}),1),r("b-modal",{ref:"editNoteModal",attrs:{id:"modal",title:"Edit","hide-footer":""}},[r("b-input-group",[r("b-form-input",{attrs:{type:"text"},model:{value:t.tobeEditedText,callback:function(e){t.tobeEditedText=e},expression:"tobeEditedText"}}),r("b-input-group-append",[r("b-btn",{attrs:{variant:"success"},on:{click:function(e){t.neditPost()}}},[t._v("EDIT")])],1)],1)],1),r("b-modal",{ref:"deleteNoteModal",attrs:{id:"modal",title:"Delete"}},[r("p",{staticClass:"my-4"},[t._v("Do you want to delete the note?")]),r("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[r("b-btn",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){t.hideDeleteModal()}}},[t._v("\n          NO\n        ")]),r("b-btn",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:function(e){t.ndeletePost()}}},[t._v("\n          YES\n        ")])],1)])],1):r("div",{staticClass:"notes__empty"},[r("img",{staticClass:"notes__empty__image",attrs:{src:n("074b"),alt:"notes-empty"}}),r("span",{staticClass:"notes__empty__message"},[t._v("No notes were found in the criteria you searched for.")])])])},a=[],o=(n("cadf"),n("551c"),n("097d"),{name:"Notes",props:{editPost:Function,deletePost:Function,posts:Array},data:function(){return{tobeEditedText:"",tobeDeletedId:"",tobeEditedId:""}},methods:{showEditModal:function(t,e){this.tobeEditedId=t,this.tobeEditedText=e,this.$refs.editNoteModal.show()},showDeleteModal:function(t){this.tobeDeletedId=t,this.$refs.deleteNoteModal.show()},hideDeleteModal:function(){this.tobeDeletedId="",this.$refs.deleteNoteModal.hide()},ndeletePost:function(){this.deletePost(this.tobeDeletedId),this.tobeDeletedId="",this.$refs.deleteNoteModal.hide()},neditPost:function(){this.editPost(this.tobeEditedId,this.tobeEditedText),this.tobeEditedId="",this.tobeEditedText="",this.$refs.editNoteModal.hide()}},filters:{convertDate:function(t){return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}}}),s=o,i=(n("5a73"),n("2877")),c=Object(i["a"])(s,r,a,!1,null,"169fda1f",null);c.options.__file="Notes.vue";e["a"]=c.exports}});
//# sourceMappingURL=app.eae2bf6b.js.map