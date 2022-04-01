"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78],{78:(r,e,n)=>{n.r(e),n.d(e,{default:()=>A});var t=n(821),o={class:"container"},c={class:"row justify-content-center"},u={class:"col-12"},l={class:"card"},s={class:"card-header d-flex justify-content-between align-items-center"},i=(0,t.Uk)(" Mostrar producto "),a=(0,t.Uk)(" Volver "),d={class:"card-body"},p=(0,t.Uk)(" Cargando... "),m={key:1,class:"jumbotron jumbotron-fluid"},f={class:"display-6"},b={class:"lead"},w=(0,t._)("br",null,null,-1),v=(0,t._)("br",null,null,-1),g=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),h=(0,t._)("br",null,null,-1),y=(0,t._)("hr",null,null,-1),k=(0,t._)("h1",{class:"display-5"}," Comentarios ",-1),O={key:0},j=(0,t._)("b",null,"Por favor, corrija el(los) siguiente(s) error(es):",-1),P={class:"form-group mb-3"},D=(0,t._)("label",{class:"col col-form-label text-md-end"}," Comentario ",-1),x={class:"col"},U=(0,t._)("div",{class:"row mb-0"},[(0,t._)("div",{class:"col-12"},[(0,t._)("button",{type:"submit",class:"btn btn-sm btn-outline-primary"}," Enviar ")])],-1),z=(0,t._)("br",null,null,-1),C={class:"list-unstyled"},S=(0,t._)("strong",null," Comentario: ",-1),E=(0,t._)("br",null,null,-1),H=(0,t._)("strong",null," Nombre del usuario: ",-1),N=(0,t._)("br",null,null,-1),Y=(0,t._)("strong",null," Email del usuario: ",-1),K=(0,t._)("br",null,null,-1);var M=n(757),T=n.n(M);function V(r){if(null==r)throw new TypeError("Cannot destructure undefined")}function q(r,e,n,t,o,c,u){try{var l=r[c](u),s=l.value}catch(r){return void n(r)}l.done?e(s):Promise.resolve(s).then(t,o)}function I(r){return function(){var e=this,n=arguments;return new Promise((function(t,o){var c=r.apply(e,n);function u(r){q(c,t,o,u,l,"next",r)}function l(r){q(c,t,o,u,l,"throw",r)}u(void 0)}))}}function W(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function Z(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}const $={name:"ShowProductComponent",data:function(){return{product:{},processing:!0,form:{comment:""},errors:[]}},computed:function(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){Z(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}({},(0,n(907).Se)({user:"user/user"})),mounted:function(){this.getProduct()},methods:{getProduct:function(){var r=this;return I(T().mark((function e(){return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/products/".concat(r.$route.params.id)).then((function(e){var n=e.data;r.product=n,r.processing=!1})).catch((function(r){var e=r.response.data;alert(e.errors)}));case 2:case"end":return e.stop()}}),e)})))()},comment:function(){var r=this;return I(T().mark((function e(){return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.put("/api/products/".concat(r.product.id),r.form).then((function(e){V(e),r.errors=[],alert("Su comentario fue enviado con exito, sera evaluado")})).catch((function(e){var n=e.response.data;r.errors=[],r.errors.push(n.errors)}));case 2:case"end":return e.stop()}}),e)})))()}}};const A=(0,n(744).Z)($,[["render",function(r,e,n,M,T,V){var q=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",c,[(0,t._)("div",u,[(0,t._)("div",l,[(0,t._)("div",s,[i,(0,t.Wm)(q,{to:{name:"products"},class:"btn btn-sm btn-outline-success"},{default:(0,t.w5)((function(){return[a]})),_:1})]),(0,t._)("div",d,[r.processing?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[p],64)):((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("h1",f,"ID "+(0,t.zw)(r.product.id),1),(0,t._)("p",b,[(0,t.Uk)(" Nombre: "+(0,t.zw)(r.product.name)+". ",1),w,(0,t.Uk)(" Precio: "+(0,t.zw)(r.product.price)+". ",1),v,(0,t.Uk)(" Slug: "+(0,t.zw)(r.product.slug)+". ",1),g,(0,t.Uk)(" Descripcion: "+(0,t.zw)(r.product.description?r.product.description:"No aplica")+". ",1),_,(0,t.Uk)(" Categoria: "+(0,t.zw)(r.product.category.name)+". ",1),h]),y,k,(0,t._)("form",{method:"POST",action:"#",onSubmit:e[1]||(e[1]=(0,t.iM)((function(){return V.comment&&V.comment.apply(V,arguments)}),["prevent"]))},[r.errors.length?((0,t.wg)(),(0,t.iD)("div",O,[j,(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.errors,(function(r,e){return(0,t.wg)(),(0,t.iD)("li",{key:e},(0,t.zw)(r),1)})),128))])])):(0,t.kq)("",!0),(0,t._)("div",P,[D,(0,t._)("div",x,[(0,t.wy)((0,t._)("textarea",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return r.form.comment=e}),type:"text",class:"form-control"},null,512),[[t.nr,r.form.comment]])])]),U],32),z,(0,t._)("ul",C,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.product.comments,(function(e,n){return(0,t.wg)(),(0,t.iD)("li",null,[(0,t._)("strong",{style:(0,t.j5)(r.user.id===e.commentable.id?"height: 10px; background-color: #83E894":null)},(0,t.zw)(n+1)+": ",5),S,(0,t.Uk)(" "+(0,t.zw)(e.comment)+". ",1),E,H,(0,t.Uk)(" "+(0,t.zw)(e.commentable.name)+". ",1),N,Y,(0,t.Uk)(" "+(0,t.zw)(e.commentable.email)+".",1),K])})),256))])]))])])])])])}]])}}]);