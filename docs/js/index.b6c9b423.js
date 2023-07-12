(function(){"use strict";var t={4913:function(t,e,n){var o=n(9963),i=n(6252);const d={key:0,class:"container"},l={key:1};function r(t,e,n,o,r,s){const u=(0,i.up)("HelloWorld"),a=(0,i.up)("HelloWorld2");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("button",{onClick:e[0]||(e[0]=t=>s.handleShow(1))},"1A2B"),(0,i._)("button",{onClick:e[1]||(e[1]=t=>s.handleShow(2))},"TodoList"),1==r.showComponent?((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(u)])):((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(a)]))],64)}const s=t=>((0,i.dD)("data-v-02311bb7"),t=t(),(0,i.Cn)(),t),u={class:"body"},a=s((()=>(0,i._)("br",null,null,-1))),c=s((()=>(0,i._)("h1",{class:"header"},"1 A 2 B",-1))),p=s((()=>(0,i._)("p",{class:"color"},"Enter four different numbers:",-1))),m={class:"formDiv"},h=s((()=>(0,i._)("input",{type:"text",id:"guess",name:"guess",maxlength:"4",placeholder:"Ex:1234"},null,-1))),f=s((()=>(0,i._)("div",{id:"main",class:"color"},null,-1)));function y(t,e,n,o,d,l){return(0,i.wg)(),(0,i.iD)("div",u,[a,c,p,(0,i._)("div",m,[(0,i._)("form",null,[h,(0,i._)("button",{type:"reset",id:"confirm",onClick:e[0]||(e[0]=(...t)=>l.guessButton&&l.guessButton(...t))},"Enter"),(0,i._)("button",{type:"reset",onClick:e[1]||(e[1]=(...t)=>l.resetButton&&l.resetButton(...t))},"Restart")])]),f])}n(7658);const v=["0","1","2","3","4","5","6","7","8","9"],g=[];for(let P=0;P<4;P++){let t=Math.floor(Math.random()*v.length);g.push(v[t]),v.splice(t,1)}let b=0;var w={methods:{guessButton(){const t=document.getElementById("guess").value,e=new Set(Array.from(t)),n=[...e];if(isNaN(parseFloat(t)))return void alert("請輸入數字");if(4!=n.length)return void alert("請輸入四個不同的數字");let o=0,i=0;for(let l=0;l<4;l++){var d=g.indexOf(Array.from(t)[l]);-1!=d&&(d==l?o++:i++)}if(4==o)b++,alert(`\n        恭喜答對!!\n        總共猜了${b}次`),history.go(0);else{let e=document.getElementById("main");e.innerHTML+=`${t}  ${o}A${i}B<br>`}b++},answerButton(){alert(g.join(""))},resetButton(){history.go(0)}}},_=n(3744);const B=(0,_.Z)(w,[["render",y],["__scopeId","data-v-02311bb7"]]);var x=B,k=n(3577);const C=t=>((0,i.dD)("data-v-0364e235"),t=t(),(0,i.Cn)(),t),I={class:"body"},T={class:"container"},E=C((()=>(0,i._)("h1",{class:"header"},"ToDo List",-1))),D={class:"listText"},O=["id"],j={class:"buttonDiv"},F=["onClick"],A=["onClick"];function H(t,e,n,d,l,r){return(0,i.wg)(),(0,i.iD)("div",I,[(0,i._)("div",T,[E,(0,i.wy)((0,i._)("input",{id:"inputBox","onUpdate:modelValue":e[0]||(e[0]=t=>l.newTodo=t),type:"text",placeholder:"Add ToDo List"},null,512),[[o.nr,l.newTodo]]),(0,i._)("button",{type:"reset",id:"add",onClick:e[1]||(e[1]=(...t)=>r.addFunction&&r.addFunction(...t))},"Add"),(0,i._)("button",{type:"reset",id:"done",onClick:e[2]||(e[2]=(...t)=>r.done&&r.done(...t)),style:{display:"none"}}," Done "),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.todos,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id,class:"list"},[(0,i._)("div",D,[(0,i._)("span",{id:t.id},(0,k.zw)(t.text),9,O)]),(0,i._)("div",j,[(0,i._)("button",{id:"remove",onClick:e=>r.removeFunction(t)},"x",8,F),(0,i._)("button",{id:"edit",onClick:e=>r.editFunction(t)},"edit",8,A)])])))),128))])])])}let W=0;var S={data(){return{newTodo:"",todos:[{id:W++,text:"Study JavaScript"},{id:W++,text:"Buy breakfast"},{id:W++,text:"Read book"}]}},methods:{addFunction(){0!=this.newTodo.trim().length?(this.todos.push({id:W++,text:this.newTodo}),this.newTodo=""):alert("Write something")},removeFunction(t){this.todos=this.todos.filter((e=>e!==t));let e=document.getElementById("add"),n=document.getElementById("done");e.style.display="inline",n.style.display="none";let o=document.getElementById("inputBox");o.value=""},editFunction(t){this.editingTodoId=t.id;let e=document.getElementById(t.id),n=e.innerHTML,o=document.getElementById("inputBox");o.value=n;let i=document.getElementById("add"),d=document.getElementById("done");i.style.display="none",d.style.display="inline"},done(){let t=document.getElementById("add"),e=document.getElementById("done");t.style.display="inline",e.style.display="none";let n=document.getElementById("inputBox"),o=this.todos.find((t=>t.id===this.editingTodoId));o&&(o.text=n.value),this.editingTodoId=null,n.value="",this.newTodo=""}}};const L=(0,_.Z)(S,[["render",H],["__scopeId","data-v-0364e235"]]);var M=L,$={name:"App",components:{HelloWorld:x,HelloWorld2:M},data(){return{showComponent:1}},methods:{handleShow(t){1==t&&(this.showComponent=1),2==t&&(this.showComponent=2)}}};const Z=(0,_.Z)($,[["render",r],["__scopeId","data-v-478e75db"]]);var N=Z;(0,o.ri)(N).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var d=e[o]={exports:{}};return t[o].call(d.exports,d,d.exports,n),d.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,d){if(!o){var l=1/0;for(a=0;a<t.length;a++){o=t[a][0],i=t[a][1],d=t[a][2];for(var r=!0,s=0;s<o.length;s++)(!1&d||l>=d)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(r=!1,d<l&&(l=d));if(r){t.splice(a--,1);var u=i();void 0!==u&&(e=u)}}return e}d=d||0;for(var a=t.length;a>0&&t[a-1][2]>d;a--)t[a]=t[a-1];t[a]=[o,i,d]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,d,l=o[0],r=o[1],s=o[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var a=s(n)}for(e&&e(o);u<l.length;u++)d=l[u],n.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return n.O(a)},o=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4913)}));o=n.O(o)})();