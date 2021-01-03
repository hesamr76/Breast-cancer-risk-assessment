(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={1:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{2:"2859c2b5",3:"94b13d74"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var h=u;o.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),a=n("1f91"),o=n("42d2"),i=n("b05d"),s=n("436b");r["a"].use(i["a"],{config:{},lang:a["a"],iconSet:o["a"],plugins:{Dialog:s["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},u=[],l={name:"App"},h=l,p=n("2877"),f=Object(p["a"])(h,c,u,!1,null,null,null),d=f.exports,m=n("2f62");r["a"].use(m["a"]);var b=function(){const e=new m["a"].Store({modules:{},strict:!1});return e},y=n("8c4f");const v=()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),w=()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24")),g=[{path:"/",component:v,children:[{path:"",component:w}]},{path:"*",component:w}];var O=g;r["a"].use(y["a"]);var k=function(){const e=new y["a"]({scrollBehavior:()=>({x:0,y:0}),routes:O,mode:"hash",base:""});return e},P=async function(){const e="function"===typeof b?await b({Vue:r["a"]}):b,t="function"===typeof k?await k({Vue:r["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(d),el:"#q-app"};return{app:n,store:e,router:t}},j=n("a925"),A={title:"Breast cancer risk assessment",patientEligibility:"Patient Eligibility",demographics:"Demographics",familyHistory:"Family History",questions:{1:"Does the woman have a medical history of any breast cancer or of ductal carcinoma in situ (DCIS) or lobular carcinoma in situ (LCIS) or has she received previous radiation therapy to the chest for treatment of Hodgkin lymphoma?",2:"Does the woman have a mutation in either the BRCA1 or BRCA2 gene, or a diagnosis of a genetic syndrome that may be associated with elevated risk of breast cancer?",3:"What is the patient’s age?",4:"What is the patient’s race/ethnicity?",5:"What is the sub race/ethnicity or place of birth?",6:"Has the patient ever had a breast biopsy with a benign (not cancer) diagnosis?",7:"How many breast biopsies with a benign diagnosis has the patient had?",8:"Has the patient ever had a breast biopsy with atypical hyperplasia?",9:"What was the woman’s age at the time of her first menstrual period?",10:"What was the woman’s age when she gave birth to her first child?",11:"How many of the woman’s first-degree relatives (mother, sisters, daughters) have had breast cancer?"},continue:"Continue",back:"Back",calculateRisk:"Calculate Risk",select:"Select",selectRace:"Select race",races:["White","African American","Hispana/Latina","Asian American","American Indian or Alaskan Native"],yes:"Yes",no:"No",unknown:"Unknown",none:"None",one:"One",moreThanOne:"More than one",noBirths:"No Births",AtoB:"{a} to {b}",ageOrOlder:"{age} or older",numberOrMore:"{number} or more",calculating:"Calculating...",failed:"Action failed",success:"Action was successful",result:"Your risk is {result}%"},S={"en-us":A};r["a"].use(j["a"]);const x=new j["a"]({locale:"en-us",fallbackLocale:"en-us",messages:S});var C=({app:e})=>{e.i18n=x},B=n("bc3a"),H=n.n(B);r["a"].prototype.$axios=H.a;const _="";async function E(){const{app:e,store:t,router:n}=await P();let a=!1;const o=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[C,void 0];for(let u=0;!1===a&&u<s.length;u++)if("function"===typeof s[u])try{await s[u]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:o,urlPath:i,publicPath:_})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&new r["a"](e)}E()},"31cd":function(e,t,n){}});