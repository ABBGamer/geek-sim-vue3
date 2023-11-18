(function(){"use strict";var e={4608:function(e,n,t){var o=t(9242),r=t(3396);const i={class:"wrapper"};function a(e,n,t,o,a,l){const u=(0,r.up)("PageHeader"),s=(0,r.up)("PageContent"),c=(0,r.up)("PageFooter"),d=(0,r.up)("v-app");return(0,r.wg)(),(0,r.j4)(d,null,{default:(0,r.w5)((()=>[(0,r._)("div",i,[(0,r.Wm)(u),(0,r.Wm)(s,{name:o.name},null,8,["name"]),(0,r.Wm)(c)])])),_:1})}var l=t(7139);const u={key:0,style:{"font-size":"12px"}};function s(e,n,t,o,i,a){const s=(0,r.up)("v-switch"),c=(0,r.up)("v-app-bar");return(0,r.wg)(),(0,r.j4)(c,{elevation:1},{append:(0,r.w5)((()=>[(0,r.Wm)(s,{style:{"margin-top":"13px"},inset:"",modelValue:o.localTheme,"onUpdate:modelValue":n[0]||(n[0]=e=>o.localTheme=e),"true-value":"dark","false-value":"light",label:o.displayLabel},null,8,["modelValue","label"])])),default:(0,r.w5)((()=>[(0,r._)("div",{style:(0,l.j5)({fontSize:o.is_mobile?"16px":"24px"})},[(0,r.Uk)(" Симулятор компьютерщика "),o.is_mobile?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",u," Ваши деньги: "+(0,l.zw)(o.money),1))],4)])),_:1})}var c=t(7327);function d(){return window.navigator.userAgent.includes("Mobile")}function v(e,n){localStorage.setItem(e,JSON.stringify(n))}function p(e,n=null){const t=localStorage.getItem(e);return t?JSON.parse(t):n}var f=t(4870);class m{constructor(){(0,c.Z)(this,"is_mobile",!1),(0,c.Z)(this,"theme",(0,f.iH)("test")),this.is_mobile=d()}}const g=new m;window.addEventListener("resize",(()=>g.is_mobile=d()));const y=(0,f.iH)(+p("money",0)),b=(0,f.iH)(+p("salary",1)),w=(0,f.iH)(+p("price",10)),_=(0,f.iH)(p("theme","light"));(0,r.YP)(y,(e=>v("money",e))),(0,r.YP)(b,(e=>v("salary",e))),(0,r.YP)(w,(e=>v("price",e))),(0,r.YP)(_,(e=>v("theme",e)));var h={setup(){const e=g.is_mobile,n=(0,r.Fl)((()=>e?"":"dark"===_.value?"Темная":"Cветлая"));return{is_mobile:e,displayLabel:n,money:y,localTheme:_}}},k=t(89);const S=(0,k.Z)(h,[["render",s],["__scopeId","data-v-4397290a"]]);var O=S;function P(e,n,t,o,i,a){const u=(0,r.up)("v-footer");return(0,r.wg)(),(0,r.j4)(u,null,{default:(0,r.w5)((()=>[(0,r._)("small",null,"© Copyright "+(0,l.zw)(o.year)+", Anton Grebnev",1)])),_:1})}var j={setup(){return{year:(new Date).getFullYear()}}};const x=(0,k.Z)(j,[["render",P]]);var z=x;const C={class:"content"},M={style:{"font-size":"35px","font-weight":"bold"}};function H(e,n,t,o,i,a){const u=(0,r.up)("v-btn"),s=(0,r.up)("v-tooltip");return(0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",null,[(0,r._)("div",null,"Добро пожаловать, "+(0,l.zw)(e.$props.name)+"!",1),(0,r._)("div",M,(0,l.zw)(o.money)+" ₽ ",1),(0,r.Wm)(s,{text:"Нажми меня"},{activator:(0,r.w5)((({props:e})=>[(0,r.Wm)(u,(0,r.dG)({onClick:o.addMoney,"prepend-icon":"$vuetify"},e,{stacked:"",variant:"outlined"}),{default:(0,r.w5)((()=>[(0,r.Uk)(" работать ")])),_:2},1040,["onClick"])])),_:1}),(0,r._)("div",null,(0,l.zw)(o.salary)+" ₽ за клик",1)]),(0,r._)("div",null,[(0,r.Wm)(u,{onClick:o.addSalary,variant:"outlined"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Улучшить "+(0,l.zw)(o.price)+" ₽ ",1)])),_:1},8,["onClick"])])])}var T={props:{name:String},setup(){const e=()=>y.value+=b.value,n=()=>{y.value-w.value>0&&(y.value-=w.value,w.value=Math.round(1.7*w.value),b.value+=1)};return{is_mobile:g.is_mobile,price:w,salary:b,money:y,addMoney:e,addSalary:n}}};const W=(0,k.Z)(T,[["render",H],["__scopeId","data-v-69f2b9cc"]]);var F=W,Y=t(5935),Z={components:{PageFooter:z,PageContent:F,PageHeader:O},setup(){const e=(0,Y.Fg)(),n=()=>e.global.name.value=_.value;return(0,r.bv)((()=>n())),(0,r.YP)(_,(()=>n())),{name:"Пользователь"}}};const I=(0,k.Z)(Z,[["render",a]]);var U=I,q=(t(9773),t(8957)),A=t(8893),D=t(8600),L=t(3504);const V=(0,q.Rd)({components:A,directives:D,icons:{defaultSet:"mdi",aliases:L.j,sets:{mdi:L.t}}});window.navigator.userAgent.includes("Mobile")?document.querySelector("html").id="is_mobile":document.querySelector("html").id="is_desktop",(0,o.ri)(U).use(V).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],l=o[1],u=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(u)var c=u(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkgeek_sim_vue3"]=self["webpackChunkgeek_sim_vue3"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4608)}));o=t.O(o)})();
//# sourceMappingURL=app.0678c717.js.map