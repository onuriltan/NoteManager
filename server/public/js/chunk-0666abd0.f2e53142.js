(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0666abd0"],{1163:function(r,e,i){"use strict";var s=i("950c"),t=i.n(s);t.a},"3bea":function(r,e,i){"use strict";i.r(e);var s=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("LoginComponent")},t=[],a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("div",{staticClass:"login-container"},[i("b-form",{staticClass:"login-form",on:{submit:function(e){e.preventDefault(),r.login()}}},[i("h2",{staticClass:"login-form__header"},[r._v("Login")]),r.errors.length>0?i("div",{staticClass:"login-form__errors"},r._l(r.errors,function(e,s){return i("b-alert",{key:s,attrs:{show:"",variant:"danger",size:"lg"}},[r._v("\n        "+r._s(e.msg)+"\n      ")])}),1):r._e(),i("b-form-group",{attrs:{id:"email",label:"Email","invalid-feedback":r.invalidEmail,"label-for":"email"}},[i("b-form-input",{staticClass:"login-form__input",attrs:{id:"email",type:"email",size:"lg",required:""},model:{value:r.email,callback:function(e){r.email=e},expression:"email"}})],1),i("b-form-group",{attrs:{id:"password",label:"Password","invalid-feedback":r.invalidPassword,"label-for":"password"}},[i("b-form-input",{staticClass:"login-form__input",attrs:{id:"password",type:"password",size:"lg",required:""},model:{value:r.password,callback:function(e){r.password=e},expression:"password"}})],1),i("div",{staticStyle:{"font-weight":"bold",margin:"30px 0","text-align":"center"}},[i("router-link",{attrs:{to:"/register"}},[r._v("Dont have an account? Register from here!")])],1),i("b-button",{staticClass:"login-form__button",class:{"button--loading":r.loginClicked},attrs:{type:"submit",variant:"success",size:"lg"}},[i("i",{staticClass:"fa fa-refresh fa-spin hide--button--loading--icon",class:{"show--button--loading--icon":r.loginClicked}}),r._v("\n      Login")])],1)],1)},n=[],o=(i("96cf"),i("3b8d")),l={name:"LoginComponent",data:function(){return{errors:[],fieldErrors:{email:"",password:""},email:"",password:"",loginClicked:!1}},computed:{invalidEmail:function(){return this.fieldErrors.email},invalidPassword:function(){return this.fieldErrors.password}},methods:{validateForm:function(){return this.email?this.validEmail(this.email)?this.fieldErrors.email="":this.fieldErrors.email="Email is not valid.":this.fieldErrors.email="Email required.",this.password?this.password.length<6?this.fieldErrors.password="Password length should be 6.":this.fieldErrors.password="":this.fieldErrors.password="Password required.",""===this.fieldErrors.email&&""===this.fieldErrors.password},validEmail:function(r){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(r)},login:function(){var r=Object(o["a"])(regeneratorRuntime.mark(function r(){var e,i=this;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:this.errors=[],e=this.validateForm(),e&&(this.loginClicked=!0,setTimeout(Object(o["a"])(regeneratorRuntime.mark(function r(){var e;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.$store.dispatch("login",{email:i.email,password:i.password});case 2:e=r.sent,i.loginClicked=!1,e.data.fieldErrors&&(i.fieldErrors=e.data.fieldErrors),e.data.errors&&(i.errors=e.data.errors);case 6:case"end":return r.stop()}},r,this)})),1e3));case 3:case"end":return r.stop()}},r,this)}));function e(){return r.apply(this,arguments)}return e}()}},d=l,c=(i("1163"),i("2877")),u=Object(c["a"])(d,a,n,!1,null,"191b4a8c",null);u.options.__file="Login.vue";var f=u.exports,m={name:"login",components:{LoginComponent:f}},p=m,g=Object(c["a"])(p,s,t,!1,null,null,null);g.options.__file="LoginView.vue";e["default"]=g.exports},"950c":function(r,e,i){}}]);
//# sourceMappingURL=chunk-0666abd0.f2e53142.js.map