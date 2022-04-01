"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[225],{225:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Y});var r=n(821),s={class:"container"},c={class:"row justify-content-center"},a={class:"col-12"},o={class:"card"},i={class:"card-header d-flex justify-content-between align-items-center"},u=(0,r.Uk)(" Productos "),d=(0,r.Uk)(" Nuevo producto "),l={class:"card-body"},m=(0,r.Uk)(" Cargando... "),f={class:"media d-block d-sm-flex text-center text-sm-left"},p={class:"cart-item-thumb mx-auto mr-sm-4",href:"#"},v=["src"],h={class:"media-body pt-3"},w={class:"product-card-title font-weight-semibold border-0 pb-0"},b={class:"font-size-sm"},g=(0,r._)("span",{class:"text-muted mr-2"},"Slug: ",-1),k={class:"font-size-sm"},x=(0,r._)("span",{class:"text-muted mr-2"},"Descripcion: ",-1),_={class:"font-size-sm"},y=(0,r._)("span",{class:"text-muted mr-2"},"Categoria: ",-1),z={class:"font-size-lg text-primary pt-2"},P={class:"pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left",style:{"max-width":"10rem"}},U=(0,r.Uk)(" Actualizar "),C=(0,r._)("br",null,null,-1),D=["onClick"];var j=n(757),W=n.n(j);function E(t,e,n,r,s,c,a){try{var o=t[c](a),i=o.value}catch(t){return void n(t)}o.done?e(i):Promise.resolve(i).then(r,s)}function H(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var c=t.apply(e,n);function a(t){E(c,r,s,a,o,"next",t)}function o(t){E(c,r,s,a,o,"throw",t)}a(void 0)}))}}const N={name:"ProductsComponents",data:function(){return{products:[],processing:!0}},mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this;return H(W().mark((function e(){return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/admin:products").then((function(e){var n=e.data;t.products=n})).catch((function(t){var e=t.response.data;alert(e.errors)})).finally((function(){t.processing=!1}));case 2:case"end":return e.stop()}}),e)})))()},removeProduct:function(){var t=arguments,e=this;return H(W().mark((function n(){var r;return W().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:"",!confirm("¿Esta seguro?")){n.next=5;break}return n.next=5,axios.delete("/api/admin:products/".concat(r)).then((function(){alert("Ok"),e.getProducts()})).catch((function(t){var e=t.response.data;alert(e.errors)}));case 5:case"end":return n.stop()}}),n)})))()}}};const Y=(0,n(744).Z)(N,[["render",function(t,e,n,j,W,E){var H=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",c,[(0,r._)("div",a,[(0,r._)("div",o,[(0,r._)("div",i,[u,(0,r.Wm)(H,{to:{name:"admin.products.create"},class:"btn btn-sm btn-outline-success"},{default:(0,r.w5)((function(){return[d]})),_:1},8,["to"])]),(0,r._)("div",l,[t.processing?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[m],64)):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(t.products,(function(t,e){return(0,r.wg)(),(0,r.iD)("div",{key:e,class:"d-sm-flex justify-content-between my-4 pb-4 border-bottom"},[(0,r._)("div",f,[(0,r._)("a",p,[(0,r._)("img",{src:"/storage/".concat(t.image),alt:"Product",width:"180",height:"100"},null,8,v)]),(0,r._)("div",h,[(0,r._)("h3",w,[(0,r.Wm)(H,{to:{name:"admin.products.show",params:{id:t.id}},class:"nav-link"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(t.name),1)]})),_:2},1032,["to"])]),(0,r._)("div",b,[g,(0,r.Uk)(" "+(0,r.zw)(t.slug),1)]),(0,r._)("div",k,[x,(0,r.Uk)(" "+(0,r.zw)(t.description?t.description:"No tiene"),1)]),(0,r._)("div",_,[y,(0,r.Uk)(" "+(0,r.zw)(t.category.name),1)]),(0,r._)("div",z,"$"+(0,r.zw)(t.price),1)])]),(0,r._)("div",P,[(0,r.Wm)(H,{to:{name:"admin.products.edit",params:{id:t.id}},class:"btn btn-sm btn-outline-success"},{default:(0,r.w5)((function(){return[U]})),_:2},1032,["to"]),C,(0,r._)("button",{onClick:(0,r.iM)((function(e){return E.removeProduct(t.id)}),["prevent"]),class:"btn btn-sm btn-outline-danger"}," Eliminar ",8,D)])])})),128))])])])])])}]])}}]);