(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(t,e,n){"use strict";n.r(e),n.d(e,"AdminModule",(function(){return Z}));var i=n("ofXK"),r=n("tyNb"),s=n("fXoL"),o=n("+zHE"),c=n("XNiG");let a=(()=>{class t{constructor(){this.alert$=new c.a}success(t){this.alert$.next({type:"success",text:t})}warning(t){this.alert$.next({type:"warning",text:t})}danger(t){this.alert$.next({type:"danger",text:t})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})();const b=function(t,e,n){return{"alert-success":t,"alert-warning":e,"alert-danger":n}};function l(t,e){if(1&t&&(s.Mb(0,"div",1),s.Mb(1,"div",2),s.Mb(2,"p"),s.pc(3),s.Lb(),s.Lb(),s.Lb()),2&t){const t=s.Wb();s.zb(1),s.dc("ngClass",s.gc(2,b,"success"===t.type,"warning "===t.type,"danger"===t.type)),s.zb(2),s.qc(t.text)}}let u=(()=>{class t{constructor(t){this.alertService=t,this.delay=5e3,this.type="success"}ngOnInit(){this.aSub=this.alertService.alert$.subscribe(t=>{this.text=t.text,this.type=t.type;const e=setTimeout(()=>{clearTimeout(e),this.text=""},this.delay)})}ngOnDestroy(){this.aSub&&this.aSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-alert"]],inputs:{delay:"delay"},decls:1,vars:1,consts:[["class","alert-wrap",4,"ngIf"],[1,"alert-wrap"],[1,"alert",3,"ngClass"]],template:function(t,e){1&t&&s.nc(0,l,4,6,"div",0),2&t&&s.dc("ngIf",e.text)},directives:[i.l,i.j],styles:[".alert-wrap[_ngcontent-%COMP%]{position:fixed;top:50px;right:50px;max-width:200px}"]}),t})();const d=function(){return["/admin","dashboard"]},f=function(){return["/admin","create"]};function m(t,e){if(1&t){const t=s.Nb();s.Mb(0,"ul"),s.Mb(1,"li",4),s.Mb(2,"a",5),s.pc(3,"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),s.Lb(),s.Lb(),s.Mb(4,"li",4),s.Mb(5,"a",5),s.pc(6,"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"),s.Lb(),s.Lb(),s.Mb(7,"li"),s.Mb(8,"a",6),s.Ub("click",(function(e){return s.jc(t),s.Wb().logout(e)})),s.pc(9,"\u0412\u0438\u0445\u0456\u0434"),s.Lb(),s.Lb(),s.Lb()}2&t&&(s.zb(2),s.dc("routerLink",s.ec(2,d)),s.zb(3),s.dc("routerLink",s.ec(3,f)))}let p=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}ngOnInit(){}logout(t){t.preventDefault(),this.auth.logout(),this.router.navigate(["/admin","login"])}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(r.c),s.Jb(o.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-admin-layout"]],decls:8,vars:1,consts:[[1,"navbar","bg-primary"],["routerLink","/"],[4,"ngIf"],[1,"container"],["routerLinkActive","active"],[3,"routerLink"],["href","#",3,"click"]],template:function(t,e){1&t&&(s.Kb(0,"app-alert"),s.Mb(1,"div",0),s.Mb(2,"h1"),s.Mb(3,"a",1),s.pc(4,"Angular Admin"),s.Lb(),s.Lb(),s.nc(5,m,10,4,"ul",2),s.Lb(),s.Mb(6,"div",3),s.Kb(7,"router-outlet"),s.Lb()),2&t&&(s.zb(5),s.dc("ngIf",e.auth.isAuthenticated()))},directives:[u,r.f,i.l,r.h,r.e],styles:[""]}),t})();var h=n("3Pt+");function g(t,e){if(1&t&&(s.Mb(0,"div",10),s.pc(1),s.Lb()),2&t){const t=e.ngIf;s.zb(1),s.rc(" ",t," ")}}function v(t,e){if(1&t&&(s.Mb(0,"div",11),s.pc(1),s.Lb()),2&t){const t=s.Wb();s.zb(1),s.rc(" ",t.massage," ")}}function L(t,e){1&t&&(s.Mb(0,"small"),s.pc(1," \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u043b\u0435 Email "),s.Lb())}function M(t,e){1&t&&(s.Mb(0,"small"),s.pc(1," \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 Email "),s.Lb())}function w(t,e){if(1&t&&(s.Mb(0,"div",12),s.nc(1,L,2,0,"small",13),s.nc(2,M,2,0,"small",13),s.Lb()),2&t){const t=s.Wb();s.zb(1),s.dc("ngIf",t.form.get("email").errors.required),s.zb(1),s.dc("ngIf",t.form.get("email").errors.email)}}function y(t,e){1&t&&(s.Mb(0,"small"),s.pc(1," \u041f\u043e\u043b\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c "),s.Lb())}function I(t,e){if(1&t&&(s.Mb(0,"small"),s.pc(1),s.Lb()),2&t){const t=s.Wb(2);s.zb(1),s.sc(" \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c, \u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 ",t.form.get("password").errors.minlength.requiredLength," \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432. \u0417\u0430\u0440\u0430\u0437 \u0432\u0456\u043d ",t.form.get("password").errors.minlength.actualLength," \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ")}}function z(t,e){if(1&t&&(s.Mb(0,"div",12),s.nc(1,y,2,0,"small",13),s.nc(2,I,2,2,"small",13),s.Lb()),2&t){const t=s.Wb();s.zb(1),s.dc("ngIf",t.form.get("password").errors.required),s.zb(1),s.dc("ngIf",t.form.get("password").errors.minlength)}}const x=function(t){return{invalid:t}};let S=(()=>{class t{constructor(t,e,n){this.auth=t,this.router=e,this.route=n}ngOnInit(){this.route.queryParams.subscribe(t=>{t.loginAgain?this.massage="\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0430\u043d\u0456":t.authFailed&&(this.massage="\u0421\u0435\u0441\u0456\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0430\u043d\u0456 \u0437\u0430\u043d\u043e\u0432\u043e")}),this.form=new h.d({email:new h.b(null,[h.m.required,h.m.email]),password:new h.b(null,[h.m.required,h.m.minLength(6)])})}submit(){this.form.invalid||(this.submitted=!0,this.auth.login({email:this.form.value.email,password:this.form.value.password}).subscribe(()=>{this.form.reset(),this.router.navigate(["/admin","dashboard"]),this.submitted=!1},()=>{this.submitted=!1}))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(o.a),s.Jb(r.c),s.Jb(r.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-login-page"]],decls:18,vars:14,consts:[[1,"card",3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-info",4,"ngIf"],[1,"form-control",3,"ngClass"],["for","email"],["id","email","type","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["id","password","type","password","formControlName","password"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[1,"alert","alert-info"],[1,"validation"],[4,"ngIf"]],template:function(t,e){1&t&&(s.Mb(0,"form",0),s.Ub("ngSubmit",(function(){return e.submit()})),s.Mb(1,"h2"),s.pc(2,"\u0412\u0456\u0439\u0442\u0438 \u0432 \u043f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"),s.Lb(),s.nc(3,g,2,1,"div",1),s.Xb(4,"async"),s.nc(5,v,2,1,"div",2),s.Mb(6,"div",3),s.Mb(7,"label",4),s.pc(8,"Email"),s.Lb(),s.Kb(9,"input",5),s.nc(10,w,3,2,"div",6),s.Lb(),s.Mb(11,"div",3),s.Mb(12,"label",7),s.pc(13,"\u041f\u0430\u0440\u043e\u043b\u044c"),s.Lb(),s.Kb(14,"input",8),s.nc(15,z,3,2,"div",6),s.Lb(),s.Mb(16,"button",9),s.pc(17,"\u0412\u0445\u0456\u0434 "),s.Lb(),s.Lb()),2&t&&(s.dc("formGroup",e.form),s.zb(3),s.dc("ngIf",s.Yb(4,8,e.auth.error$)),s.zb(2),s.dc("ngIf",e.massage),s.zb(1),s.dc("ngClass",s.fc(10,x,e.form.get("email").touched&&e.form.get("email").invalid)),s.zb(4),s.dc("ngIf",e.form.get("email").touched&&e.form.get("email").invalid),s.zb(1),s.dc("ngClass",s.fc(12,x,e.form.get("password").touched&&e.form.get("password").invalid)),s.zb(4),s.dc("ngIf",e.form.get("password").touched&&e.form.get("password").invalid),s.zb(1),s.dc("disabled",e.form.invalid||e.submitted))},directives:[h.n,h.j,h.e,i.l,i.j,h.a,h.i,h.c],pipes:[i.b],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),t})();var C=n("ZBX8");let q=(()=>{class t{transform(t,e=""){return e.trim()?t.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Ib({name:"searchPosts",type:t,pure:!0}),t})();const k=function(t){return["/admin","post",t,"edit"]};function O(t,e){if(1&t){const t=s.Nb();s.Mb(0,"tr"),s.Mb(1,"td"),s.pc(2),s.Lb(),s.Mb(3,"td"),s.pc(4),s.Lb(),s.Mb(5,"td"),s.pc(6),s.Lb(),s.Mb(7,"td"),s.pc(8),s.Xb(9,"date"),s.Lb(),s.Mb(10,"td"),s.Mb(11,"button",5),s.pc(12," \u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 "),s.Lb(),s.Mb(13,"button"),s.Mb(14,"a",6),s.Ub("click",(function(){s.jc(t);const n=e.$implicit;return s.Wb(2).remove(n.id)})),s.pc(15,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&t){const t=e.$implicit,n=e.index;s.zb(2),s.qc(n+1),s.zb(2),s.qc(t.author),s.zb(2),s.qc(t.title),s.zb(2),s.qc(s.ac(9,5,t.date,"medium",null,"ua")),s.zb(3),s.dc("routerLink",s.fc(10,k,t.id))}}function j(t,e){if(1&t){const t=s.Nb();s.Mb(0,"div"),s.Mb(1,"div",2),s.Mb(2,"input",3),s.Ub("ngModelChange",(function(e){return s.jc(t),s.Wb().searchStr=e})),s.Lb(),s.Lb(),s.Mb(3,"table"),s.Mb(4,"thead"),s.Mb(5,"tr"),s.Mb(6,"th"),s.pc(7,"#"),s.Lb(),s.Mb(8,"th"),s.pc(9,"\u0410\u0432\u0442\u043e\u0440"),s.Lb(),s.Mb(10,"th"),s.pc(11,"\u041d\u0430\u0437\u0432\u0430"),s.Lb(),s.Mb(12,"th"),s.pc(13,"\u0414\u0430\u0442\u0430"),s.Lb(),s.Mb(14,"th"),s.pc(15,"\u0414\u0456\u044f"),s.Lb(),s.Lb(),s.Lb(),s.Mb(16,"tbody"),s.nc(17,O,16,12,"tr",4),s.Xb(18,"searchPosts"),s.Lb(),s.Lb(),s.Lb()}if(2&t){const t=s.Wb();s.zb(2),s.dc("ngModel",t.searchStr),s.zb(15),s.dc("ngForOf",s.Zb(18,2,t.posts,t.searchStr))}}function J(t,e){1&t&&(s.Mb(0,"p",7),s.pc(1,"\u0419\u0434\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u043d\u043d\u044f..."),s.Lb())}let W=(()=>{class t{constructor(t,e){this.postsService=t,this.alert=e,this.posts=[],this.searchStr=""}ngOnInit(){this.dSub=this.pSub=this.postsService.getAll().subscribe(t=>{this.posts=t})}ngOnDestroy(){this.pSub&&this.pSub.unsubscribe(),this.dSub&&this.dSub.unsubscribe()}remove(t){this.postsService.remove(t).subscribe(()=>{this.posts=this.posts.filter(e=>e.id!==t),this.alert.warning("\u041f\u043e\u0441\u0442 \u0431\u0443\u0432 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439")})}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(C.a),s.Jb(a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-dashboard-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"form-control"],["type","text","placeholder","\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u0441\u0442...",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"btn","btn-link","open",3,"routerLink"],[3,"click"],[1,"text-center"]],template:function(t,e){if(1&t&&(s.nc(0,j,19,5,"div",0),s.nc(1,J,2,0,"ng-template",null,1,s.oc)),2&t){const t=s.ic(2);s.dc("ngIf",e.posts.length)("ngIfElse",t)}},directives:[i.l,h.a,h.i,h.k,i.k,r.d],pipes:[q,i.e],styles:[".open[_ngcontent-%COMP%]{margin-right:10px}"]}),t})();var A=n("CzEO");function N(t,e){1&t&&(s.Mb(0,"small"),s.pc(1," \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u043e\u0441\u0442\u0430 "),s.Lb())}function D(t,e){if(1&t&&(s.Mb(0,"div",10),s.nc(1,N,2,0,"small",11),s.Lb()),2&t){const t=s.Wb();s.zb(1),s.dc("ngIf",t.form.get("title").errors.required)}}function K(t,e){1&t&&(s.Mb(0,"small"),s.pc(1," \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u043e\u0441\u0442\u0430 "),s.Lb())}function E(t,e){if(1&t&&(s.Mb(0,"div",10),s.nc(1,K,2,0,"small",11),s.Lb()),2&t){const t=s.Wb();s.zb(1),s.dc("ngIf",t.form.get("author").errors.required)}}const P=function(t){return{invalid:t}};let G=(()=>{class t{constructor(t,e){this.postsService=t,this.alert=e}ngOnInit(){this.form=new h.d({title:new h.b(null,h.m.required),text:new h.b(null,h.m.required),author:new h.b(null,h.m.required)})}submit(){if(this.form.invalid)return;const t={title:this.form.value.title,author:this.form.value.author,text:this.form.value.text,date:new Date};this.postsService.create(t).subscribe(()=>{this.form.reset(),this.alert.success("\u041f\u043e\u0441\u0442 \u0431\u0443\u0432 \u0441\u0442\u0432\u043e\u0440\u043d\u0435\u043d\u0438\u0439")}),console.log(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(C.a),s.Jb(a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-create-page"]],decls:19,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["id","title","type","text","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["for","author"],["id","author","type","text","formControlName","author"],["type","submit",1,"btn","btn-block","btn-dark",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(t,e){1&t&&(s.Mb(0,"form",0),s.Ub("ngSubmit",(function(){return e.submit()})),s.Mb(1,"h1"),s.pc(2,"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043d\u043e\u0432\u0433\u043e \u043f\u043e\u0441\u0442\u0430 "),s.Lb(),s.Mb(3,"div",1),s.Mb(4,"label",2),s.pc(5,"\u041d\u0430\u0437\u0432\u0430 \u043f\u043e\u0441\u0442\u0430 "),s.Lb(),s.Kb(6,"input",3),s.nc(7,D,2,1,"div",4),s.Lb(),s.Mb(8,"div",5),s.Mb(9,"label"),s.pc(10,"\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u043e\u0441\u0442\u0430: "),s.Lb(),s.Kb(11,"quill-editor",6),s.Lb(),s.Mb(12,"div",1),s.Mb(13,"label",7),s.pc(14,"\u0410\u0432\u0442\u043e\u0440 \u043f\u043e\u0441\u0442\u0430 "),s.Lb(),s.Kb(15,"input",8),s.nc(16,E,2,1,"div",4),s.Lb(),s.Mb(17,"button",9),s.pc(18,"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043f\u043e\u0441\u0442 "),s.Lb(),s.Lb()),2&t&&(s.dc("formGroup",e.form),s.zb(3),s.dc("ngClass",s.fc(6,P,e.form.get("title").touched&&e.form.get("title").invalid)),s.zb(4),s.dc("ngIf",e.form.get("title").touched&&e.form.get("title").invalid),s.zb(5),s.dc("ngClass",s.fc(8,P,e.form.get("author").touched&&e.form.get("author").invalid)),s.zb(4),s.dc("ngIf",e.form.get("author").touched&&e.form.get("author").invalid),s.zb(1),s.dc("disabled",e.form.invalid))},directives:[h.n,h.j,h.e,i.j,h.a,h.i,h.c,i.l,A.a],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),t})();var $=n("eIep");function X(t,e){1&t&&(s.Mb(0,"small"),s.pc(1," \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u043e\u0441\u0442\u0430 "),s.Lb())}function F(t,e){if(1&t&&(s.Mb(0,"div",10),s.nc(1,X,2,0,"small",11),s.Lb()),2&t){const t=s.Wb(2);s.zb(1),s.dc("ngIf",t.form.get("title").errors.required)}}const U=function(t){return{invalid:t}};function _(t,e){if(1&t){const t=s.Nb();s.Mb(0,"div"),s.Mb(1,"form",2),s.Ub("ngSubmit",(function(){return s.jc(t),s.Wb().submit()})),s.Mb(2,"div",3),s.Mb(3,"label",4),s.pc(4,"\u041d\u0430\u0437\u0432\u0430 \u043f\u043e\u0441\u0442\u0430 "),s.Lb(),s.Kb(5,"input",5),s.nc(6,F,2,1,"div",6),s.Lb(),s.Mb(7,"div",7),s.Kb(8,"quill-editor",8),s.Lb(),s.Mb(9,"button",9),s.pc(10,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0438"),s.Lb(),s.Lb(),s.Lb()}if(2&t){const t=s.Wb();s.zb(1),s.dc("formGroup",t.form),s.zb(1),s.dc("ngClass",s.fc(4,U,t.form.get("title").touched&&t.form.get("title").invalid)),s.zb(4),s.dc("ngIf",t.form.get("title").touched&&t.form.get("title").invalid),s.zb(3),s.dc("disabled",t.form.invalid||t.submitted)}}function T(t,e){1&t&&(s.Mb(0,"p",12),s.pc(1," \u0419\u0434\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f... "),s.Lb())}let B=(()=>{class t{constructor(t,e,n){this.route=t,this.postsService=e,this.alert=n,this.submitted=!1}ngOnInit(){this.route.params.pipe(Object($.a)(t=>this.postsService.getById(t.id))).subscribe(t=>{this.post=t,this.form=new h.d({title:new h.b(t.title,h.m.required),text:new h.b(t.text,h.m.required)})})}ngOnDestroy(){this.uSub&&this.uSub.unsubscribe()}submit(){this.form.invalid||(this.submitted=!0,this.uSub=this.postsService.update(Object.assign(Object.assign({},this.post),{text:this.form.value.text,title:this.form.value.title})).subscribe(()=>{this.submitted=!1,this.alert.danger("\u041f\u043e\u0441\u0442 \u0431\u0443\u0432 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439")}))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(r.a),s.Jb(C.a),s.Jb(a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-edit-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["Loading",""],[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["id","title","type","text","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"validation"],[4,"ngIf"],[1,"text-center"]],template:function(t,e){if(1&t&&(s.nc(0,_,11,6,"div",0),s.nc(1,T,2,0,"ng-template",null,1,s.oc)),2&t){const t=s.ic(2);s.dc("ngIf",e.form)("ngIfElse",t)}},directives:[i.l,h.n,h.j,h.e,i.j,h.a,h.i,h.c,A.a],styles:[""]}),t})();var H=n("whI3");let Q=(()=>{class t{constructor(t,e){this.auth=t,this.router=e}canActivate(t,e){if(this.auth.isAuthenticated())return!0;this.auth.logout(),this.router.navigate(["/admin","login"],{queryParams:{loginAgain:!0}})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(o.a),s.Qb(r.c))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})(),Z=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},providers:[Q,a],imports:[[i.c,h.f,h.l,H.a,r.g.forChild([{path:"",component:p,children:[{path:"",redirectTo:"/admin/login",pathMatch:"full"},{path:"login",component:S},{path:"dashboard",component:W,canActivate:[Q]},{path:"create",component:G,canActivate:[Q]},{path:"post/:id/edit",component:B,canActivate:[Q]}]}])],r.g]}),t})()}}]);