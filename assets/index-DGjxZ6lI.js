(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function oi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},an=[],dt=()=>{},Bl=()=>!1,ra=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ri=e=>e.startsWith("onUpdate:"),we=Object.assign,ci=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Po=Object.prototype.hasOwnProperty,de=(e,t)=>Po.call(e,t),Q=Array.isArray,ln=e=>jn(e)==="[object Map]",mn=e=>jn(e)==="[object Set]",Ii=e=>jn(e)==="[object Date]",$=e=>typeof e=="function",Me=e=>typeof e=="string",et=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",jl=e=>(fe(e)||$(e))&&$(e.then)&&$(e.catch),Gl=Object.prototype.toString,jn=e=>Gl.call(e),So=e=>jn(e).slice(8,-1),Ul=e=>jn(e)==="[object Object]",ui=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=oi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Co=/-\w/g,Ye=ca(e=>e.replace(Co,t=>t.slice(1).toUpperCase())),To=/\B([A-Z])/g,Yt=ca(e=>e.replace(To,"-$1").toLowerCase()),ua=ca(e=>e.charAt(0).toUpperCase()+e.slice(1)),Da=ca(e=>e?`on${ua(e)}`:""),Kt=(e,t)=>!Object.is(e,t),qn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hl=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},da=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ro=e=>{const t=Me(e)?Number(e):NaN;return isNaN(t)?e:t};let Ni;const pa=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bt(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=Me(a)?_o(a):Bt(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(Me(e)||fe(e))return e}const Eo=/;(?![^(]*\))/g,Io=/:([^]+)/,No=/\/\*[^]*?\*\//g;function _o(e){const t={};return e.replace(No,"").split(Eo).forEach(n=>{if(n){const a=n.split(Io);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function y(e){let t="";if(Me(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const a=y(e[n]);a&&(t+=a+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Lo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oo=oi(Lo);function Fl(e){return!!e||e===""}function Ko(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=Gn(e[a],t[a]);return n}function Gn(e,t){if(e===t)return!0;let n=Ii(e),a=Ii(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=et(e),a=et(t),n||a)return e===t;if(n=Q(e),a=Q(t),n||a)return n&&a?Ko(e,t):!1;if(n=fe(e),a=fe(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const o in e){const r=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(r&&!c||!r&&c||!Gn(e[o],t[o]))return!1}}return String(e)===String(t)}function di(e,t){return e.findIndex(n=>Gn(n,t))}const Jl=e=>!!(e&&e.__v_isRef===!0),K=e=>Me(e)?e:e==null?"":Q(e)||fe(e)&&(e.toString===Gl||!$(e.toString))?Jl(e)?K(e.value):JSON.stringify(e,Vl,2):String(e),Vl=(e,t)=>Jl(t)?Vl(e,t.value):ln(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[wa(a,l)+" =>"]=i,n),{})}:mn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wa(n))}:et(t)?wa(t):fe(t)&&!Q(t)&&!Ul(t)?String(t):t,wa=(e,t="")=>{var n;return et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let je;class Bo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function jo(){return je}let be;const Pa=new WeakSet;class zl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pa.has(this)&&(Pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ql(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_i(this),ql(this);const t=be,n=Xe;be=this,Xe=!0;try{return this.fn()}finally{Yl(this),be=t,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)fi(t);this.deps=this.depsTail=void 0,_i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fa(this)&&this.run()}get dirty(){return Fa(this)}}let Wl=0,Mn,Dn;function Ql(e,t=!1){if(e.flags|=8,t){e.next=Dn,Dn=e;return}e.next=Mn,Mn=e}function pi(){Wl++}function gi(){if(--Wl>0)return;if(Dn){let t=Dn;for(Dn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Mn;){let t=Mn;for(Mn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function ql(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Yl(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),fi(a),Go(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function Fa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Xl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Xl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Tn)||(e.globalVersion=Tn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fa(e))))return;e.flags|=2;const t=e.dep,n=be,a=Xe;be=e,Xe=!0;try{ql(e);const i=e.fn(e._value);(t.version===0||Kt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{be=n,Xe=a,Yl(e),e.flags&=-3}}function fi(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)fi(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Go(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Xe=!0;const Zl=[];function yt(){Zl.push(Xe),Xe=!1}function Mt(){const e=Zl.pop();Xe=e===void 0?!0:e}function _i(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=be;be=void 0;try{t()}finally{be=n}}}let Tn=0;class Uo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!be||!Xe||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new Uo(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,$l(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=a)}return n}trigger(t){this.version++,Tn++,this.notify(t)}notify(t){pi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gi()}}}function $l(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)$l(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ja=new WeakMap,Qt=Symbol(""),Va=Symbol(""),Rn=Symbol("");function Ce(e,t,n){if(Xe&&be){let a=Ja.get(e);a||Ja.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new mi),i.map=a,i.key=n),i.track()}}function At(e,t,n,a,i,l){const o=Ja.get(e);if(!o){Tn++;return}const r=c=>{c&&c.trigger()};if(pi(),t==="clear")o.forEach(r);else{const c=Q(e),p=c&&ui(n);if(c&&n==="length"){const u=Number(a);o.forEach((d,g)=>{(g==="length"||g===Rn||!et(g)&&g>=u)&&r(d)})}else switch((n!==void 0||o.has(void 0))&&r(o.get(n)),p&&r(o.get(Rn)),t){case"add":c?p&&r(o.get("length")):(r(o.get(Qt)),ln(e)&&r(o.get(Va)));break;case"delete":c||(r(o.get(Qt)),ln(e)&&r(o.get(Va)));break;case"set":ln(e)&&r(o.get(Qt));break}}gi()}function en(e){const t=ce(e);return t===e?t:(Ce(t,"iterate",Rn),qe(e)?t:t.map(tt))}function ga(e){return Ce(e=ce(e),"iterate",Rn),e}function Et(e,t){return Dt(e)?qt(e)?dn(tt(t)):dn(t):tt(t)}const Ho={__proto__:null,[Symbol.iterator](){return Sa(this,Symbol.iterator,e=>Et(this,e))},concat(...e){return en(this).concat(...e.map(t=>Q(t)?en(t):t))},entries(){return Sa(this,"entries",e=>(e[1]=Et(this,e[1]),e))},every(e,t){return pt(this,"every",e,t,void 0,arguments)},filter(e,t){return pt(this,"filter",e,t,n=>n.map(a=>Et(this,a)),arguments)},find(e,t){return pt(this,"find",e,t,n=>Et(this,n),arguments)},findIndex(e,t){return pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return pt(this,"findLast",e,t,n=>Et(this,n),arguments)},findLastIndex(e,t){return pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ca(this,"includes",e)},indexOf(...e){return Ca(this,"indexOf",e)},join(e){return en(this).join(e)},lastIndexOf(...e){return Ca(this,"lastIndexOf",e)},map(e,t){return pt(this,"map",e,t,void 0,arguments)},pop(){return bn(this,"pop")},push(...e){return bn(this,"push",e)},reduce(e,...t){return Li(this,"reduce",e,t)},reduceRight(e,...t){return Li(this,"reduceRight",e,t)},shift(){return bn(this,"shift")},some(e,t){return pt(this,"some",e,t,void 0,arguments)},splice(...e){return bn(this,"splice",e)},toReversed(){return en(this).toReversed()},toSorted(e){return en(this).toSorted(e)},toSpliced(...e){return en(this).toSpliced(...e)},unshift(...e){return bn(this,"unshift",e)},values(){return Sa(this,"values",e=>Et(this,e))}};function Sa(e,t,n){const a=ga(e),i=a[t]();return a!==e&&!qe(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const Fo=Array.prototype;function pt(e,t,n,a,i,l){const o=ga(e),r=o!==e&&!qe(e),c=o[t];if(c!==Fo[t]){const d=c.apply(e,l);return r?tt(d):d}let p=n;o!==e&&(r?p=function(d,g){return n.call(this,Et(e,d),g,e)}:n.length>2&&(p=function(d,g){return n.call(this,d,g,e)}));const u=c.call(o,p,a);return r&&i?i(u):u}function Li(e,t,n,a){const i=ga(e);let l=n;return i!==e&&(qe(e)?n.length>3&&(l=function(o,r,c){return n.call(this,o,r,c,e)}):l=function(o,r,c){return n.call(this,o,Et(e,r),c,e)}),i[t](l,...a)}function Ca(e,t,n){const a=ce(e);Ce(a,"iterate",Rn);const i=a[t](...n);return(i===-1||i===!1)&&bi(n[0])?(n[0]=ce(n[0]),a[t](...n)):i}function bn(e,t,n=[]){yt(),pi();const a=ce(e)[t].apply(e,n);return gi(),Mt(),a}const Jo=oi("__proto__,__v_isRef,__isVue"),es=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(et));function Vo(e){et(e)||(e=String(e));const t=ce(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class ts{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?tr:ls:l?is:as).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=Q(t);if(!i){let c;if(o&&(c=Ho[n]))return c;if(n==="hasOwnProperty")return Vo}const r=Reflect.get(t,n,Ee(t)?t:a);if((et(n)?es.has(n):Jo(n))||(i||Ce(t,"get",n),l))return r;if(Ee(r)){const c=o&&ui(n)?r:r.value;return i&&fe(c)?Wa(c):c}return fe(r)?i?Wa(r):Un(r):r}}class ns extends ts{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const o=Q(t)&&ui(n);if(!this._isShallow){const p=Dt(l);if(!qe(a)&&!Dt(a)&&(l=ce(l),a=ce(a)),!o&&Ee(l)&&!Ee(a))return p||(l.value=a),!0}const r=o?Number(n)<t.length:de(t,n),c=Reflect.set(t,n,a,Ee(t)?t:i);return t===ce(i)&&(r?Kt(a,l)&&At(t,"set",n,a):At(t,"add",n,a)),c}deleteProperty(t,n){const a=de(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&At(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!et(n)||!es.has(n))&&Ce(t,"has",n),a}ownKeys(t){return Ce(t,"iterate",Q(t)?"length":Qt),Reflect.ownKeys(t)}}class zo extends ts{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Wo=new ns,Qo=new zo,qo=new ns(!0);const za=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function Yo(e,t,n){return function(...a){const i=this.__v_raw,l=ce(i),o=ln(l),r=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,p=i[e](...a),u=n?za:t?dn:tt;return!t&&Ce(l,"iterate",c?Va:Qt),{next(){const{value:d,done:g}=p.next();return g?{value:d,done:g}:{value:r?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function Vn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xo(e,t){const n={get(i){const l=this.__v_raw,o=ce(l),r=ce(i);e||(Kt(i,r)&&Ce(o,"get",i),Ce(o,"get",r));const{has:c}=Jn(o),p=t?za:e?dn:tt;if(c.call(o,i))return p(l.get(i));if(c.call(o,r))return p(l.get(r));l!==o&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Ce(ce(i),"iterate",Qt),i.size},has(i){const l=this.__v_raw,o=ce(l),r=ce(i);return e||(Kt(i,r)&&Ce(o,"has",i),Ce(o,"has",r)),i===r?l.has(i):l.has(i)||l.has(r)},forEach(i,l){const o=this,r=o.__v_raw,c=ce(r),p=t?za:e?dn:tt;return!e&&Ce(c,"iterate",Qt),r.forEach((u,d)=>i.call(l,p(u),p(d),o))}};return we(n,e?{add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear")}:{add(i){!t&&!qe(i)&&!Dt(i)&&(i=ce(i));const l=ce(this);return Jn(l).has.call(l,i)||(l.add(i),At(l,"add",i,i)),this},set(i,l){!t&&!qe(l)&&!Dt(l)&&(l=ce(l));const o=ce(this),{has:r,get:c}=Jn(o);let p=r.call(o,i);p||(i=ce(i),p=r.call(o,i));const u=c.call(o,i);return o.set(i,l),p?Kt(l,u)&&At(o,"set",i,l):At(o,"add",i,l),this},delete(i){const l=ce(this),{has:o,get:r}=Jn(l);let c=o.call(l,i);c||(i=ce(i),c=o.call(l,i)),r&&r.call(l,i);const p=l.delete(i);return c&&At(l,"delete",i,void 0),p},clear(){const i=ce(this),l=i.size!==0,o=i.clear();return l&&At(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Yo(i,e,t)}),n}function hi(e,t){const n=Xo(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(de(n,i)&&i in a?n:a,i,l)}const Zo={get:hi(!1,!1)},$o={get:hi(!1,!0)},er={get:hi(!0,!1)};const as=new WeakMap,is=new WeakMap,ls=new WeakMap,tr=new WeakMap;function nr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ar(e){return e.__v_skip||!Object.isExtensible(e)?0:nr(So(e))}function Un(e){return Dt(e)?e:Ai(e,!1,Wo,Zo,as)}function ss(e){return Ai(e,!1,qo,$o,is)}function Wa(e){return Ai(e,!0,Qo,er,ls)}function Ai(e,t,n,a,i){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=ar(e);if(l===0)return e;const o=i.get(e);if(o)return o;const r=new Proxy(e,l===2?a:n);return i.set(e,r),r}function qt(e){return Dt(e)?qt(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function bi(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function ir(e){return!de(e,"__v_skip")&&Object.isExtensible(e)&&Hl(e,"__v_skip",!0),e}const tt=e=>fe(e)?Un(e):e,dn=e=>fe(e)?Wa(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function se(e){return os(e,!1)}function lr(e){return os(e,!0)}function os(e,t){return Ee(e)?e:new sr(e,t)}class sr{constructor(t,n){this.dep=new mi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:tt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||qe(t)||Dt(t);t=a?t:ce(t),Kt(t,n)&&(this._rawValue=t,this._value=a?t:tt(t),this.dep.trigger())}}function Ze(e){return Ee(e)?e.value:e}const or={get:(e,t,n)=>t==="__v_raw"?e:Ze(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function rs(e){return qt(e)?e:new Proxy(e,or)}class rr{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new mi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Ql(this,!0),!0}get value(){const t=this.dep.track();return Xl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function cr(e,t,n=!1){let a,i;return $(e)?a=e:(a=e.get,i=e.set),new rr(a,i,n)}const zn={},ea=new WeakMap;let Vt;function ur(e,t=!1,n=Vt){if(n){let a=ea.get(n);a||ea.set(n,a=[]),a.push(e)}}function dr(e,t,n=he){const{immediate:a,deep:i,once:l,scheduler:o,augmentJob:r,call:c}=n,p=S=>i?S:qe(S)||i===!1||i===0?bt(S,1):bt(S);let u,d,g,h,M=!1,A=!1;if(Ee(e)?(d=()=>e.value,M=qe(e)):qt(e)?(d=()=>p(e),M=!0):Q(e)?(A=!0,M=e.some(S=>qt(S)||qe(S)),d=()=>e.map(S=>{if(Ee(S))return S.value;if(qt(S))return p(S);if($(S))return c?c(S,2):S()})):$(e)?t?d=c?()=>c(e,2):e:d=()=>{if(g){yt();try{g()}finally{Mt()}}const S=Vt;Vt=u;try{return c?c(e,3,[h]):e(h)}finally{Vt=S}}:d=dt,t&&i){const S=d,J=i===!0?1/0:i;d=()=>bt(S(),J)}const b=jo(),x=()=>{u.stop(),b&&b.active&&ci(b.effects,u)};if(l&&t){const S=t;t=(...J)=>{S(...J),x()}}let T=A?new Array(e.length).fill(zn):zn;const R=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const J=u.run();if(i||M||(A?J.some((ne,oe)=>Kt(ne,T[oe])):Kt(J,T))){g&&g();const ne=Vt;Vt=u;try{const oe=[J,T===zn?void 0:A&&T[0]===zn?[]:T,h];T=J,c?c(t,3,oe):t(...oe)}finally{Vt=ne}}}else u.run()};return r&&r(R),u=new zl(d),u.scheduler=o?()=>o(R,!1):R,h=S=>ur(S,!1,u),g=u.onStop=()=>{const S=ea.get(u);if(S){if(c)c(S,4);else for(const J of S)J();ea.delete(u)}},t?a?R(!0):T=u.run():o?o(R.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function bt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))bt(e.value,t,n);else if(Q(e))for(let a=0;a<e.length;a++)bt(e[a],t,n);else if(mn(e)||ln(e))e.forEach(a=>{bt(a,t,n)});else if(Ul(e)){for(const a in e)bt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&bt(e[a],t,n)}return e}function Hn(e,t,n,a){try{return a?e(...a):e()}catch(i){fa(i,t,n)}}function nt(e,t,n,a){if($(e)){const i=Hn(e,t,n,a);return i&&jl(i)&&i.catch(l=>{fa(l,t,n)}),i}if(Q(e)){const i=[];for(let l=0;l<e.length;l++)i.push(nt(e[l],t,n,a));return i}}function fa(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let r=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}r=r.parent}if(l){yt(),Hn(l,null,10,[e,c,p]),Mt();return}}pr(e,n,i,a,o)}function pr(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const Le=[];let ct=-1;const sn=[];let It=null,tn=0;const cs=Promise.resolve();let ta=null;function ma(e){const t=ta||cs;return e?t.then(this?e.bind(this):e):t}function gr(e){let t=ct+1,n=Le.length;for(;t<n;){const a=t+n>>>1,i=Le[a],l=En(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function ki(e){if(!(e.flags&1)){const t=En(e),n=Le[Le.length-1];!n||!(e.flags&2)&&t>=En(n)?Le.push(e):Le.splice(gr(t),0,e),e.flags|=1,us()}}function us(){ta||(ta=cs.then(ps))}function fr(e){Q(e)?sn.push(...e):It&&e.id===-1?It.splice(tn+1,0,e):e.flags&1||(sn.push(e),e.flags|=1),us()}function Oi(e,t,n=ct+1){for(;n<Le.length;n++){const a=Le[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Le.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function ds(e){if(sn.length){const t=[...new Set(sn)].sort((n,a)=>En(n)-En(a));if(sn.length=0,It){It.push(...t);return}for(It=t,tn=0;tn<It.length;tn++){const n=It[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,tn=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ps(e){try{for(ct=0;ct<Le.length;ct++){const t=Le[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Le.length;ct++){const t=Le[ct];t&&(t.flags&=-2)}ct=-1,Le.length=0,ds(),ta=null,(Le.length||sn.length)&&ps()}}let Pe=null,gs=null;function na(e){const t=Pe;return Pe=e,gs=e&&e.type.__scopeId||null,t}function We(e,t=Pe,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&la(-1);const l=na(t);let o;try{o=e(...i)}finally{na(l),a._d&&la(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function xe(e,t){if(Pe===null)return e;const n=va(Pe),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,o,r,c=he]=t[i];l&&($(l)&&(l={mounted:l,updated:l}),l.deep&&bt(o),a.push({dir:l,instance:n,value:o,oldValue:void 0,arg:r,modifiers:c}))}return e}function Ut(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let o=0;o<i.length;o++){const r=i[o];l&&(r.oldValue=l[o].value);let c=r.dir[a];c&&(yt(),nt(c,n,8,[e.el,r,e,t]),Mt())}}function Yn(e,t){if(Re){let n=Re.provides;const a=Re.parent&&Re.parent.provides;a===n&&(n=Re.provides=Object.create(a)),n[e]=t}}function $e(e,t,n=!1){const a=Qs();if(a||rn){let i=rn?rn._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&$(t)?t.call(a&&a.proxy):t}}const mr=Symbol.for("v-scx"),hr=()=>$e(mr);function kt(e,t,n){return fs(e,t,n)}function fs(e,t,n=he){const{immediate:a,deep:i,flush:l,once:o}=n,r=we({},n),c=t&&a||!t&&l!=="post";let p;if(Ln){if(l==="sync"){const h=hr();p=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=dt,h.resume=dt,h.pause=dt,h}}const u=Re;r.call=(h,M,A)=>nt(h,u,M,A);let d=!1;l==="post"?r.scheduler=h=>{Fe(h,u&&u.suspense)}:l!=="sync"&&(d=!0,r.scheduler=(h,M)=>{M?h():ki(h)}),r.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const g=dr(e,t,r);return Ln&&(p?p.push(g):c&&g()),g}function Ar(e,t,n){const a=this.proxy,i=Me(e)?e.includes(".")?ms(a,e):()=>a[e]:e.bind(a,a);let l;$(t)?l=t:(l=t.handler,n=t);const o=Fn(this),r=fs(i,l.bind(a),n);return o(),r}function ms(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const br=Symbol("_vte"),hs=e=>e.__isTeleport,ht=Symbol("_leaveCb"),Wn=Symbol("_enterCb");function kr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hn(()=>{e.isMounted=!0}),ws(()=>{e.isUnmounting=!0}),e}const ze=[Function,Array],As={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},bs=e=>{const t=e.subTree;return t.component?bs(t.component):t},vr={name:"BaseTransition",props:As,setup(e,{slots:t}){const n=Qs(),a=kr();return()=>{const i=t.default&&xs(t.default(),!0);if(!i||!i.length)return;const l=ks(i),o=ce(e),{mode:r}=o;if(a.isLeaving)return Ta(l);const c=Ki(l);if(!c)return Ta(l);let p=Qa(c,o,a,n,d=>p=d);c.type!==Te&&In(c,p);let u=n.subTree&&Ki(n.subTree);if(u&&u.type!==Te&&!zt(u,c)&&bs(n).type!==Te){let d=Qa(u,o,a,n);if(In(u,d),r==="out-in"&&c.type!==Te)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ta(l);r==="in-out"&&c.type!==Te?d.delayLeave=(g,h,M)=>{const A=vs(a,u);A[String(u.key)]=u,g[ht]=()=>{h(),g[ht]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{M(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function ks(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Te){t=n;break}}return t}const xr=vr;function vs(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Qa(e,t,n,a,i){const{appear:l,mode:o,persisted:r=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:h,onAfterLeave:M,onLeaveCancelled:A,onBeforeAppear:b,onAppear:x,onAfterAppear:T,onAppearCancelled:R}=t,S=String(e.key),J=vs(n,e),ne=(W,ee)=>{W&&nt(W,a,9,ee)},oe=(W,ee)=>{const re=ee[1];ne(W,ee),Q(W)?W.every(U=>U.length<=1)&&re():W.length<=1&&re()},ve={mode:o,persisted:r,beforeEnter(W){let ee=c;if(!n.isMounted)if(l)ee=b||c;else return;W[ht]&&W[ht](!0);const re=J[S];re&&zt(e,re)&&re.el[ht]&&re.el[ht](),ne(ee,[W])},enter(W){let ee=p,re=u,U=d;if(!n.isMounted)if(l)ee=x||p,re=T||u,U=R||d;else return;let O=!1;const v=W[Wn]=me=>{O||(O=!0,me?ne(U,[W]):ne(re,[W]),ve.delayedLeave&&ve.delayedLeave(),W[Wn]=void 0)};ee?oe(ee,[W,v]):v()},leave(W,ee){const re=String(e.key);if(W[Wn]&&W[Wn](!0),n.isUnmounting)return ee();ne(g,[W]);let U=!1;const O=W[ht]=v=>{U||(U=!0,ee(),v?ne(A,[W]):ne(M,[W]),W[ht]=void 0,J[re]===e&&delete J[re])};J[re]=e,h?oe(h,[W,O]):O()},clone(W){const ee=Qa(W,t,n,a,i);return i&&i(ee),ee}};return ve}function Ta(e){if(ha(e))return e=jt(e),e.children=null,e}function Ki(e){if(!ha(e))return hs(e.type)&&e.children?ks(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&$(n.default))return n.default()}}function In(e,t){e.shapeFlag&6&&e.component?(e.transition=t,In(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xs(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let o=e[l];const r=n==null?o.key:String(n)+String(o.key!=null?o.key:l);o.type===Y?(o.patchFlag&128&&i++,a=a.concat(xs(o.children,t,r))):(t||o.type!==Te)&&a.push(r!=null?jt(o,{key:r}):o)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function ys(e,t){return $(e)?we({name:e.name},t,{setup:e}):e}function Ms(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const aa=new WeakMap;function wn(e,t,n,a,i=!1){if(Q(e)){e.forEach((M,A)=>wn(M,t&&(Q(t)?t[A]:t),n,a,i));return}if(on(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&wn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?va(a.component):a.el,o=i?null:l,{i:r,r:c}=e,p=t&&t.r,u=r.refs===he?r.refs={}:r.refs,d=r.setupState,g=ce(d),h=d===he?Bl:M=>de(g,M);if(p!=null&&p!==c){if(Bi(t),Me(p))u[p]=null,h(p)&&(d[p]=null);else if(Ee(p)){p.value=null;const M=t;M.k&&(u[M.k]=null)}}if($(c))Hn(c,r,12,[o,u]);else{const M=Me(c),A=Ee(c);if(M||A){const b=()=>{if(e.f){const x=M?h(c)?d[c]:u[c]:c.value;if(i)Q(x)&&ci(x,l);else if(Q(x))x.includes(l)||x.push(l);else if(M)u[c]=[l],h(c)&&(d[c]=u[c]);else{const T=[l];c.value=T,e.k&&(u[e.k]=T)}}else M?(u[c]=o,h(c)&&(d[c]=o)):A&&(c.value=o,e.k&&(u[e.k]=o))};if(o){const x=()=>{b(),aa.delete(e)};x.id=-1,aa.set(e,x),Fe(x,n)}else Bi(e),b()}}}function Bi(e){const t=aa.get(e);t&&(t.flags|=8,aa.delete(e))}pa().requestIdleCallback;pa().cancelIdleCallback;const on=e=>!!e.type.__asyncLoader,ha=e=>e.type.__isKeepAlive;function yr(e,t){Ds(e,"a",t)}function Mr(e,t){Ds(e,"da",t)}function Ds(e,t,n=Re){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Aa(t,a,n),n){let i=n.parent;for(;i&&i.parent;)ha(i.parent.vnode)&&Dr(a,t,n,i),i=i.parent}}function Dr(e,t,n,a){const i=Aa(t,e,a,!0);vi(()=>{ci(a[t],i)},n)}function Aa(e,t,n=Re,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{yt();const r=Fn(n),c=nt(t,n,e,o);return r(),Mt(),c});return a?i.unshift(l):i.push(l),l}}const wt=e=>(t,n=Re)=>{(!Ln||e==="sp")&&Aa(e,(...a)=>t(...a),n)},wr=wt("bm"),hn=wt("m"),Pr=wt("bu"),Sr=wt("u"),ws=wt("bum"),vi=wt("um"),Cr=wt("sp"),Tr=wt("rtg"),Rr=wt("rtc");function Er(e,t=Re){Aa("ec",e,t)}const Ps="components";function xi(e,t){return Cs(Ps,e,!0,t)||e}const Ss=Symbol.for("v-ndc");function Ir(e){return Me(e)?Cs(Ps,e,!1)||e:e||Ss}function Cs(e,t,n=!0,a=!1){const i=Pe||Re;if(i){const l=i.type;{const r=Ac(l,!1);if(r&&(r===t||r===Ye(t)||r===ua(Ye(t))))return l}const o=ji(i[e]||l[e],t)||ji(i.appContext[e],t);return!o&&a?l:o}}function ji(e,t){return e&&(e[t]||e[Ye(t)]||e[ua(Ye(t))])}function ge(e,t,n,a){let i;const l=n,o=Q(e);if(o||Me(e)){const r=o&&qt(e);let c=!1,p=!1;r&&(c=!qe(e),p=Dt(e),e=ga(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(c?p?dn(tt(e[u])):tt(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l)}else if(fe(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,p=r.length;c<p;c++){const u=r[c];i[c]=t(e[u],u,c,l)}}else i=[];return i}function Nr(e,t,n={},a,i){if(Pe.ce||Pe.parent&&on(Pe.parent)&&Pe.parent.ce){const p=Object.keys(n).length>0;return E(),sa(Y,null,[ke("slot",n,a)],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),E();const o=l&&Ts(l(n)),r=n.key||o&&o.key,c=sa(Y,{key:(r&&!et(r)?r:`_${t}`)+(!o&&a?"_fb":"")},o||[],o&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function Ts(e){return e.some(t=>_n(t)?!(t.type===Te||t.type===Y&&!Ts(t.children)):!0)?e:null}const qa=e=>e?qs(e)?va(e):qa(e.parent):null,Pn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qa(e.parent),$root:e=>qa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Es(e),$forceUpdate:e=>e.f||(e.f=()=>{ki(e.update)}),$nextTick:e=>e.n||(e.n=ma.bind(e.proxy)),$watch:e=>Ar.bind(e)}),Ra=(e,t)=>e!==he&&!e.__isScriptSetup&&de(e,t),_r={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:o,type:r,appContext:c}=e;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Ra(a,t))return o[t]=1,a[t];if(i!==he&&de(i,t))return o[t]=2,i[t];if(de(l,t))return o[t]=3,l[t];if(n!==he&&de(n,t))return o[t]=4,n[t];Ya&&(o[t]=0)}}const p=Pn[t];let u,d;if(p)return t==="$attrs"&&Ce(e.attrs,"get",""),p(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==he&&de(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,de(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Ra(i,t)?(i[t]=n,!0):a!==he&&de(a,t)?(a[t]=n,!0):de(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:o}},r){let c;return!!(n[r]||e!==he&&r[0]!=="$"&&de(e,r)||Ra(t,r)||de(l,r)||de(a,r)||de(Pn,r)||de(i.config.globalProperties,r)||(c=o.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:de(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gi(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ya=!0;function Lr(e){const t=Es(e),n=e.proxy,a=e.ctx;Ya=!1,t.beforeCreate&&Ui(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:o,watch:r,provide:c,inject:p,created:u,beforeMount:d,mounted:g,beforeUpdate:h,updated:M,activated:A,deactivated:b,beforeDestroy:x,beforeUnmount:T,destroyed:R,unmounted:S,render:J,renderTracked:ne,renderTriggered:oe,errorCaptured:ve,serverPrefetch:W,expose:ee,inheritAttrs:re,components:U,directives:O,filters:v}=t;if(p&&Or(p,a,null),o)for(const te in o){const X=o[te];$(X)&&(a[te]=X.bind(n))}if(i){const te=i.call(n,n);fe(te)&&(e.data=Un(te))}if(Ya=!0,l)for(const te in l){const X=l[te],Ue=$(X)?X.bind(n,n):$(X.get)?X.get.bind(n,n):dt,Pt=!$(X)&&$(X.set)?X.set.bind(n):dt,it=ae({get:Ue,set:Pt});Object.defineProperty(a,te,{enumerable:!0,configurable:!0,get:()=>it.value,set:Oe=>it.value=Oe})}if(r)for(const te in r)Rs(r[te],a,n,te);if(c){const te=$(c)?c.call(n):c;Reflect.ownKeys(te).forEach(X=>{Yn(X,te[X])})}u&&Ui(u,e,"c");function B(te,X){Q(X)?X.forEach(Ue=>te(Ue.bind(n))):X&&te(X.bind(n))}if(B(wr,d),B(hn,g),B(Pr,h),B(Sr,M),B(yr,A),B(Mr,b),B(Er,ve),B(Rr,ne),B(Tr,oe),B(ws,T),B(vi,S),B(Cr,W),Q(ee))if(ee.length){const te=e.exposed||(e.exposed={});ee.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:Ue=>n[X]=Ue,enumerable:!0})})}else e.exposed||(e.exposed={});J&&e.render===dt&&(e.render=J),re!=null&&(e.inheritAttrs=re),U&&(e.components=U),O&&(e.directives=O),W&&Ms(e)}function Or(e,t,n=dt){Q(e)&&(e=Xa(e));for(const a in e){const i=e[a];let l;fe(i)?"default"in i?l=$e(i.from||a,i.default,!0):l=$e(i.from||a):l=$e(i),Ee(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[a]=l}}function Ui(e,t,n){nt(Q(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rs(e,t,n,a){let i=a.includes(".")?ms(n,a):()=>n[a];if(Me(e)){const l=t[e];$(l)&&kt(i,l)}else if($(e))kt(i,e.bind(n));else if(fe(e))if(Q(e))e.forEach(l=>Rs(l,t,n,a));else{const l=$(e.handler)?e.handler.bind(n):t[e.handler];$(l)&&kt(i,l,e)}}function Es(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,r=l.get(t);let c;return r?c=r:!i.length&&!n&&!a?c=t:(c={},i.length&&i.forEach(p=>ia(c,p,o,!0)),ia(c,t,o)),fe(t)&&l.set(t,c),c}function ia(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&ia(e,l,n,!0),i&&i.forEach(o=>ia(e,o,n,!0));for(const o in t)if(!(a&&o==="expose")){const r=Kr[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Kr={data:Hi,props:Fi,emits:Fi,methods:xn,computed:xn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:xn,directives:xn,watch:jr,provide:Hi,inject:Br};function Hi(e,t){return t?e?function(){return we($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Br(e,t){return xn(Xa(e),Xa(t))}function Xa(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function xn(e,t){return e?we(Object.create(null),e,t):t}function Fi(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:we(Object.create(null),Gi(e),Gi(t??{})):t}function jr(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const a in t)n[a]=Ie(e[a],t[a]);return n}function Is(){return{app:null,config:{isNativeTag:Bl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gr=0;function Ur(e,t){return function(a,i=null){$(a)||(a=we({},a)),i!=null&&!fe(i)&&(i=null);const l=Is(),o=new WeakSet,r=[];let c=!1;const p=l.app={_uid:Gr++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:kc,get config(){return l.config},set config(u){},use(u,...d){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(p,...d)):$(u)&&(o.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,g){if(!c){const h=p._ceVNode||ke(a,i);return h.appContext=l,g===!0?g="svg":g===!1&&(g=void 0),e(h,u,g),c=!0,p._container=u,u.__vue_app__=p,va(h.component)}},onUnmount(u){r.push(u)},unmount(){c&&(nt(r,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p},runWithContext(u){const d=rn;rn=p;try{return u()}finally{rn=d}}};return p}}let rn=null;const Hr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${Yt(t)}Modifiers`];function Fr(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||he;let i=n;const l=t.startsWith("update:"),o=l&&Hr(a,t.slice(7));o&&(o.trim&&(i=n.map(u=>Me(u)?u.trim():u)),o.number&&(i=n.map(da)));let r,c=a[r=Da(t)]||a[r=Da(Ye(t))];!c&&l&&(c=a[r=Da(Yt(t))]),c&&nt(c,e,6,i);const p=a[r+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,nt(p,e,6,i)}}const Jr=new WeakMap;function Ns(e,t,n=!1){const a=n?Jr:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let o={},r=!1;if(!$(e)){const c=p=>{const u=Ns(p,t,!0);u&&(r=!0,we(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!r?(fe(e)&&a.set(e,null),null):(Q(l)?l.forEach(c=>o[c]=null):we(o,l),fe(e)&&a.set(e,o),o)}function ba(e,t){return!e||!ra(t)?!1:(t=t.slice(2).replace(/Once$/,""),de(e,t[0].toLowerCase()+t.slice(1))||de(e,Yt(t))||de(e,t))}function Ji(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:o,attrs:r,emit:c,render:p,renderCache:u,props:d,data:g,setupState:h,ctx:M,inheritAttrs:A}=e,b=na(e);let x,T;try{if(n.shapeFlag&4){const S=i||a,J=S;x=ut(p.call(J,S,u,d,h,g,M)),T=r}else{const S=t;x=ut(S.length>1?S(d,{attrs:r,slots:o,emit:c}):S(d,null)),T=t.props?r:Vr(r)}}catch(S){Sn.length=0,fa(S,e,1),x=ke(Te)}let R=x;if(T&&A!==!1){const S=Object.keys(T),{shapeFlag:J}=R;S.length&&J&7&&(l&&S.some(ri)&&(T=zr(T,l)),R=jt(R,T,!1,!0))}return n.dirs&&(R=jt(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&In(R,n.transition),x=R,na(b),x}const Vr=e=>{let t;for(const n in e)(n==="class"||n==="style"||ra(n))&&((t||(t={}))[n]=e[n]);return t},zr=(e,t)=>{const n={};for(const a in e)(!ri(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Wr(e,t,n){const{props:a,children:i,component:l}=e,{props:o,children:r,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?Vi(a,o,p):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==a[g]&&!ba(p,g))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:a===o?!1:a?o?Vi(a,o,p):!0:!!o;return!1}function Vi(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!ba(n,l))return!0}return!1}function Qr({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const _s={},Ls=()=>Object.create(_s),Os=e=>Object.getPrototypeOf(e)===_s;function qr(e,t,n,a=!1){const i={},l=Ls();e.propsDefaults=Object.create(null),Ks(e,t,i,l);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=a?i:ss(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function Yr(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:o}}=e,r=ce(i),[c]=e.propsOptions;let p=!1;if((a||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(ba(e.emitsOptions,g))continue;const h=t[g];if(c)if(de(l,g))h!==l[g]&&(l[g]=h,p=!0);else{const M=Ye(g);i[M]=Za(c,r,M,h,e,!1)}else h!==l[g]&&(l[g]=h,p=!0)}}}else{Ks(e,t,i,l)&&(p=!0);let u;for(const d in r)(!t||!de(t,d)&&((u=Yt(d))===d||!de(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Za(c,r,d,void 0,e,!0)):delete i[d]);if(l!==r)for(const d in l)(!t||!de(t,d))&&(delete l[d],p=!0)}p&&At(e.attrs,"set","")}function Ks(e,t,n,a){const[i,l]=e.propsOptions;let o=!1,r;if(t)for(let c in t){if(yn(c))continue;const p=t[c];let u;i&&de(i,u=Ye(c))?!l||!l.includes(u)?n[u]=p:(r||(r={}))[u]=p:ba(e.emitsOptions,c)||(!(c in a)||p!==a[c])&&(a[c]=p,o=!0)}if(l){const c=ce(n),p=r||he;for(let u=0;u<l.length;u++){const d=l[u];n[d]=Za(i,c,d,p[d],e,!de(p,d))}}return o}function Za(e,t,n,a,i,l){const o=e[n];if(o!=null){const r=de(o,"default");if(r&&a===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:p}=i;if(n in p)a=p[n];else{const u=Fn(i);a=p[n]=c.call(null,t),u()}}else a=c;i.ce&&i.ce._setProp(n,a)}o[0]&&(l&&!r?a=!1:o[1]&&(a===""||a===Yt(n))&&(a=!0))}return a}const Xr=new WeakMap;function Bs(e,t,n=!1){const a=n?Xr:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,o={},r=[];let c=!1;if(!$(e)){const u=d=>{c=!0;const[g,h]=Bs(d,t,!0);we(o,g),h&&r.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!c)return fe(e)&&a.set(e,an),an;if(Q(l))for(let u=0;u<l.length;u++){const d=Ye(l[u]);zi(d)&&(o[d]=he)}else if(l)for(const u in l){const d=Ye(u);if(zi(d)){const g=l[u],h=o[d]=Q(g)||$(g)?{type:g}:we({},g),M=h.type;let A=!1,b=!0;if(Q(M))for(let x=0;x<M.length;++x){const T=M[x],R=$(T)&&T.name;if(R==="Boolean"){A=!0;break}else R==="String"&&(b=!1)}else A=$(M)&&M.name==="Boolean";h[0]=A,h[1]=b,(A||de(h,"default"))&&r.push(d)}}const p=[o,r];return fe(e)&&a.set(e,p),p}function zi(e){return e[0]!=="$"&&!yn(e)}const yi=e=>e==="_"||e==="_ctx"||e==="$stable",Mi=e=>Q(e)?e.map(ut):[ut(e)],Zr=(e,t,n)=>{if(t._n)return t;const a=We((...i)=>Mi(t(...i)),n);return a._c=!1,a},js=(e,t,n)=>{const a=e._ctx;for(const i in e){if(yi(i))continue;const l=e[i];if($(l))t[i]=Zr(i,l,a);else if(l!=null){const o=Mi(l);t[i]=()=>o}}},Gs=(e,t)=>{const n=Mi(t);e.slots.default=()=>n},Us=(e,t,n)=>{for(const a in t)(n||!yi(a))&&(e[a]=t[a])},$r=(e,t,n)=>{const a=e.slots=Ls();if(e.vnode.shapeFlag&32){const i=t._;i?(Us(a,t,n),n&&Hl(a,"_",i,!0)):js(t,a)}else t&&Gs(e,t)},ec=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,o=he;if(a.shapeFlag&32){const r=t._;r?n&&r===1?l=!1:Us(i,t,n):(l=!t.$stable,js(t,i)),o=t}else t&&(Gs(e,t),o={default:1});if(l)for(const r in i)!yi(r)&&o[r]==null&&delete i[r]},Fe=lc;function tc(e){return nc(e)}function nc(e,t){const n=pa();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:o,createText:r,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:g,setScopeId:h=dt,insertStaticContent:M}=e,A=(f,m,k,D=null,C=null,w=null,j=void 0,L=null,_=!!m.dynamicChildren)=>{if(f===m)return;f&&!zt(f,m)&&(D=P(f),Oe(f,C,w,!0),f=null),m.patchFlag===-2&&(_=!1,m.dynamicChildren=null);const{type:I,ref:q,shapeFlag:H}=m;switch(I){case ka:b(f,m,k,D);break;case Te:x(f,m,k,D);break;case Xn:f==null&&T(m,k,D,j);break;case Y:U(f,m,k,D,C,w,j,L,_);break;default:H&1?J(f,m,k,D,C,w,j,L,_):H&6?O(f,m,k,D,C,w,j,L,_):(H&64||H&128)&&I.process(f,m,k,D,C,w,j,L,_,V)}q!=null&&C?wn(q,f&&f.ref,w,m||f,!m):q==null&&f&&f.ref!=null&&wn(f.ref,null,w,f,!0)},b=(f,m,k,D)=>{if(f==null)a(m.el=r(m.children),k,D);else{const C=m.el=f.el;m.children!==f.children&&p(C,m.children)}},x=(f,m,k,D)=>{f==null?a(m.el=c(m.children||""),k,D):m.el=f.el},T=(f,m,k,D)=>{[f.el,f.anchor]=M(f.children,m,k,D,f.el,f.anchor)},R=({el:f,anchor:m},k,D)=>{let C;for(;f&&f!==m;)C=g(f),a(f,k,D),f=C;a(m,k,D)},S=({el:f,anchor:m})=>{let k;for(;f&&f!==m;)k=g(f),i(f),f=k;i(m)},J=(f,m,k,D,C,w,j,L,_)=>{if(m.type==="svg"?j="svg":m.type==="math"&&(j="mathml"),f==null)ne(m,k,D,C,w,j,L,_);else{const I=f.el&&f.el._isVueCE?f.el:null;try{I&&I._beginPatch(),W(f,m,C,w,j,L,_)}finally{I&&I._endPatch()}}},ne=(f,m,k,D,C,w,j,L)=>{let _,I;const{props:q,shapeFlag:H,transition:z,dirs:Z}=f;if(_=f.el=o(f.type,w,q&&q.is,q),H&8?u(_,f.children):H&16&&ve(f.children,_,null,D,C,Ea(f,w),j,L),Z&&Ut(f,null,D,"created"),oe(_,f,f.scopeId,j,D),q){for(const Ae in q)Ae!=="value"&&!yn(Ae)&&l(_,Ae,null,q[Ae],w,D);"value"in q&&l(_,"value",null,q.value,w),(I=q.onVnodeBeforeMount)&&rt(I,D,f)}Z&&Ut(f,null,D,"beforeMount");const le=ac(C,z);le&&z.beforeEnter(_),a(_,m,k),((I=q&&q.onVnodeMounted)||le||Z)&&Fe(()=>{I&&rt(I,D,f),le&&z.enter(_),Z&&Ut(f,null,D,"mounted")},C)},oe=(f,m,k,D,C)=>{if(k&&h(f,k),D)for(let w=0;w<D.length;w++)h(f,D[w]);if(C){let w=C.subTree;if(m===w||Vs(w.type)&&(w.ssContent===m||w.ssFallback===m)){const j=C.vnode;oe(f,j,j.scopeId,j.slotScopeIds,C.parent)}}},ve=(f,m,k,D,C,w,j,L,_=0)=>{for(let I=_;I<f.length;I++){const q=f[I]=L?Nt(f[I]):ut(f[I]);A(null,q,m,k,D,C,w,j,L)}},W=(f,m,k,D,C,w,j)=>{const L=m.el=f.el;let{patchFlag:_,dynamicChildren:I,dirs:q}=m;_|=f.patchFlag&16;const H=f.props||he,z=m.props||he;let Z;if(k&&Ht(k,!1),(Z=z.onVnodeBeforeUpdate)&&rt(Z,k,m,f),q&&Ut(m,f,k,"beforeUpdate"),k&&Ht(k,!0),(H.innerHTML&&z.innerHTML==null||H.textContent&&z.textContent==null)&&u(L,""),I?ee(f.dynamicChildren,I,L,k,D,Ea(m,C),w):j||X(f,m,L,null,k,D,Ea(m,C),w,!1),_>0){if(_&16)re(L,H,z,k,C);else if(_&2&&H.class!==z.class&&l(L,"class",null,z.class,C),_&4&&l(L,"style",H.style,z.style,C),_&8){const le=m.dynamicProps;for(let Ae=0;Ae<le.length;Ae++){const pe=le[Ae],Ke=H[pe],Be=z[pe];(Be!==Ke||pe==="value")&&l(L,pe,Ke,Be,C,k)}}_&1&&f.children!==m.children&&u(L,m.children)}else!j&&I==null&&re(L,H,z,k,C);((Z=z.onVnodeUpdated)||q)&&Fe(()=>{Z&&rt(Z,k,m,f),q&&Ut(m,f,k,"updated")},D)},ee=(f,m,k,D,C,w,j)=>{for(let L=0;L<m.length;L++){const _=f[L],I=m[L],q=_.el&&(_.type===Y||!zt(_,I)||_.shapeFlag&198)?d(_.el):k;A(_,I,q,null,D,C,w,j,!0)}},re=(f,m,k,D,C)=>{if(m!==k){if(m!==he)for(const w in m)!yn(w)&&!(w in k)&&l(f,w,m[w],null,C,D);for(const w in k){if(yn(w))continue;const j=k[w],L=m[w];j!==L&&w!=="value"&&l(f,w,L,j,C,D)}"value"in k&&l(f,"value",m.value,k.value,C)}},U=(f,m,k,D,C,w,j,L,_)=>{const I=m.el=f?f.el:r(""),q=m.anchor=f?f.anchor:r("");let{patchFlag:H,dynamicChildren:z,slotScopeIds:Z}=m;Z&&(L=L?L.concat(Z):Z),f==null?(a(I,k,D),a(q,k,D),ve(m.children||[],k,q,C,w,j,L,_)):H>0&&H&64&&z&&f.dynamicChildren&&f.dynamicChildren.length===z.length?(ee(f.dynamicChildren,z,k,C,w,j,L),(m.key!=null||C&&m===C.subTree)&&Hs(f,m,!0)):X(f,m,k,q,C,w,j,L,_)},O=(f,m,k,D,C,w,j,L,_)=>{m.slotScopeIds=L,f==null?m.shapeFlag&512?C.ctx.activate(m,k,D,j,_):v(m,k,D,C,w,j,_):me(f,m,_)},v=(f,m,k,D,C,w,j)=>{const L=f.component=pc(f,D,C);if(ha(f)&&(L.ctx.renderer=V),gc(L,!1,j),L.asyncDep){if(C&&C.registerDep(L,B,j),!f.el){const _=L.subTree=ke(Te);x(null,_,m,k),f.placeholder=_.el}}else B(L,f,m,k,C,w,j)},me=(f,m,k)=>{const D=m.component=f.component;if(Wr(f,m,k))if(D.asyncDep&&!D.asyncResolved){te(D,m,k);return}else D.next=m,D.update();else m.el=f.el,D.vnode=m},B=(f,m,k,D,C,w,j)=>{const L=()=>{if(f.isMounted){let{next:H,bu:z,u:Z,parent:le,vnode:Ae}=f;{const st=Fs(f);if(st){H&&(H.el=Ae.el,te(f,H,j)),st.asyncDep.then(()=>{f.isUnmounted||L()});return}}let pe=H,Ke;Ht(f,!1),H?(H.el=Ae.el,te(f,H,j)):H=Ae,z&&qn(z),(Ke=H.props&&H.props.onVnodeBeforeUpdate)&&rt(Ke,le,H,Ae),Ht(f,!0);const Be=Ji(f),lt=f.subTree;f.subTree=Be,A(lt,Be,d(lt.el),P(lt),f,C,w),H.el=Be.el,pe===null&&Qr(f,Be.el),Z&&Fe(Z,C),(Ke=H.props&&H.props.onVnodeUpdated)&&Fe(()=>rt(Ke,le,H,Ae),C)}else{let H;const{el:z,props:Z}=m,{bm:le,m:Ae,parent:pe,root:Ke,type:Be}=f,lt=on(m);Ht(f,!1),le&&qn(le),!lt&&(H=Z&&Z.onVnodeBeforeMount)&&rt(H,pe,m),Ht(f,!0);{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(Be);const st=f.subTree=Ji(f);A(null,st,k,D,f,C,w),m.el=st.el}if(Ae&&Fe(Ae,C),!lt&&(H=Z&&Z.onVnodeMounted)){const st=m;Fe(()=>rt(H,pe,st),C)}(m.shapeFlag&256||pe&&on(pe.vnode)&&pe.vnode.shapeFlag&256)&&f.a&&Fe(f.a,C),f.isMounted=!0,m=k=D=null}};f.scope.on();const _=f.effect=new zl(L);f.scope.off();const I=f.update=_.run.bind(_),q=f.job=_.runIfDirty.bind(_);q.i=f,q.id=f.uid,_.scheduler=()=>ki(q),Ht(f,!0),I()},te=(f,m,k)=>{m.component=f;const D=f.vnode.props;f.vnode=m,f.next=null,Yr(f,m.props,D,k),ec(f,m.children,k),yt(),Oi(f),Mt()},X=(f,m,k,D,C,w,j,L,_=!1)=>{const I=f&&f.children,q=f?f.shapeFlag:0,H=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){Pt(I,H,k,D,C,w,j,L,_);return}else if(z&256){Ue(I,H,k,D,C,w,j,L,_);return}}Z&8?(q&16&&Ve(I,C,w),H!==I&&u(k,H)):q&16?Z&16?Pt(I,H,k,D,C,w,j,L,_):Ve(I,C,w,!0):(q&8&&u(k,""),Z&16&&ve(H,k,D,C,w,j,L,_))},Ue=(f,m,k,D,C,w,j,L,_)=>{f=f||an,m=m||an;const I=f.length,q=m.length,H=Math.min(I,q);let z;for(z=0;z<H;z++){const Z=m[z]=_?Nt(m[z]):ut(m[z]);A(f[z],Z,k,null,C,w,j,L,_)}I>q?Ve(f,C,w,!0,!1,H):ve(m,k,D,C,w,j,L,_,H)},Pt=(f,m,k,D,C,w,j,L,_)=>{let I=0;const q=m.length;let H=f.length-1,z=q-1;for(;I<=H&&I<=z;){const Z=f[I],le=m[I]=_?Nt(m[I]):ut(m[I]);if(zt(Z,le))A(Z,le,k,null,C,w,j,L,_);else break;I++}for(;I<=H&&I<=z;){const Z=f[H],le=m[z]=_?Nt(m[z]):ut(m[z]);if(zt(Z,le))A(Z,le,k,null,C,w,j,L,_);else break;H--,z--}if(I>H){if(I<=z){const Z=z+1,le=Z<q?m[Z].el:D;for(;I<=z;)A(null,m[I]=_?Nt(m[I]):ut(m[I]),k,le,C,w,j,L,_),I++}}else if(I>z)for(;I<=H;)Oe(f[I],C,w,!0),I++;else{const Z=I,le=I,Ae=new Map;for(I=le;I<=z;I++){const He=m[I]=_?Nt(m[I]):ut(m[I]);He.key!=null&&Ae.set(He.key,I)}let pe,Ke=0;const Be=z-le+1;let lt=!1,st=0;const An=new Array(Be);for(I=0;I<Be;I++)An[I]=0;for(I=Z;I<=H;I++){const He=f[I];if(Ke>=Be){Oe(He,C,w,!0);continue}let ot;if(He.key!=null)ot=Ae.get(He.key);else for(pe=le;pe<=z;pe++)if(An[pe-le]===0&&zt(He,m[pe])){ot=pe;break}ot===void 0?Oe(He,C,w,!0):(An[ot-le]=I+1,ot>=st?st=ot:lt=!0,A(He,m[ot],k,null,C,w,j,L,_),Ke++)}const Ti=lt?ic(An):an;for(pe=Ti.length-1,I=Be-1;I>=0;I--){const He=le+I,ot=m[He],Ri=m[He+1],Ei=He+1<q?Ri.el||Js(Ri):D;An[I]===0?A(null,ot,k,Ei,C,w,j,L,_):lt&&(pe<0||I!==Ti[pe]?it(ot,k,Ei,2):pe--)}}},it=(f,m,k,D,C=null)=>{const{el:w,type:j,transition:L,children:_,shapeFlag:I}=f;if(I&6){it(f.component.subTree,m,k,D);return}if(I&128){f.suspense.move(m,k,D);return}if(I&64){j.move(f,m,k,V);return}if(j===Y){a(w,m,k);for(let H=0;H<_.length;H++)it(_[H],m,k,D);a(f.anchor,m,k);return}if(j===Xn){R(f,m,k);return}if(D!==2&&I&1&&L)if(D===0)L.beforeEnter(w),a(w,m,k),Fe(()=>L.enter(w),C);else{const{leave:H,delayLeave:z,afterLeave:Z}=L,le=()=>{f.ctx.isUnmounted?i(w):a(w,m,k)},Ae=()=>{w._isLeaving&&w[ht](!0),H(w,()=>{le(),Z&&Z()})};z?z(w,le,Ae):Ae()}else a(w,m,k)},Oe=(f,m,k,D=!1,C=!1)=>{const{type:w,props:j,ref:L,children:_,dynamicChildren:I,shapeFlag:q,patchFlag:H,dirs:z,cacheIndex:Z}=f;if(H===-2&&(C=!1),L!=null&&(yt(),wn(L,null,k,f,!0),Mt()),Z!=null&&(m.renderCache[Z]=void 0),q&256){m.ctx.deactivate(f);return}const le=q&1&&z,Ae=!on(f);let pe;if(Ae&&(pe=j&&j.onVnodeBeforeUnmount)&&rt(pe,m,f),q&6)Gt(f.component,k,D);else{if(q&128){f.suspense.unmount(k,D);return}le&&Ut(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,k,V,D):I&&!I.hasOnce&&(w!==Y||H>0&&H&64)?Ve(I,m,k,!1,!0):(w===Y&&H&384||!C&&q&16)&&Ve(_,m,k),D&&Zt(f)}(Ae&&(pe=j&&j.onVnodeUnmounted)||le)&&Fe(()=>{pe&&rt(pe,m,f),le&&Ut(f,null,m,"unmounted")},k)},Zt=f=>{const{type:m,el:k,anchor:D,transition:C}=f;if(m===Y){$t(k,D);return}if(m===Xn){S(f);return}const w=()=>{i(k),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:j,delayLeave:L}=C,_=()=>j(k,w);L?L(f.el,w,_):_()}else w()},$t=(f,m)=>{let k;for(;f!==m;)k=g(f),i(f),f=k;i(m)},Gt=(f,m,k)=>{const{bum:D,scope:C,job:w,subTree:j,um:L,m:_,a:I}=f;Wi(_),Wi(I),D&&qn(D),C.stop(),w&&(w.flags|=8,Oe(j,f,m,k)),L&&Fe(L,m),Fe(()=>{f.isUnmounted=!0},m)},Ve=(f,m,k,D=!1,C=!1,w=0)=>{for(let j=w;j<f.length;j++)Oe(f[j],m,k,D,C)},P=f=>{if(f.shapeFlag&6)return P(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=g(f.anchor||f.el),k=m&&m[br];return k?g(k):m};let F=!1;const G=(f,m,k)=>{let D;f==null?m._vnode&&(Oe(m._vnode,null,null,!0),D=m._vnode.component):A(m._vnode||null,f,m,null,null,null,k),m._vnode=f,F||(F=!0,Oi(D),ds(),F=!1)},V={p:A,um:Oe,m:it,r:Zt,mt:v,mc:ve,pc:X,pbc:ee,n:P,o:e};return{render:G,hydrate:void 0,createApp:Ur(G)}}function Ea({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ac(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hs(e,t,n=!1){const a=e.children,i=t.children;if(Q(a)&&Q(i))for(let l=0;l<a.length;l++){const o=a[l];let r=i[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[l]=Nt(i[l]),r.el=o.el),!n&&r.patchFlag!==-2&&Hs(o,r)),r.type===ka&&(r.patchFlag!==-1?r.el=o.el:r.__elIndex=l+(e.type===Y?1:0)),r.type===Te&&!r.el&&(r.el=o.el)}}function ic(e){const t=e.slice(),n=[0];let a,i,l,o,r;const c=e.length;for(a=0;a<c;a++){const p=e[a];if(p!==0){if(i=n[n.length-1],e[i]<p){t[a]=i,n.push(a);continue}for(l=0,o=n.length-1;l<o;)r=l+o>>1,e[n[r]]<p?l=r+1:o=r;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function Fs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fs(t)}function Wi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Js(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Js(t.subTree):null}const Vs=e=>e.__isSuspense;function lc(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):fr(e)}const Y=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),Te=Symbol.for("v-cmt"),Xn=Symbol.for("v-stc"),Sn=[];let Je=null;function E(e=!1){Sn.push(Je=e?null:[])}function sc(){Sn.pop(),Je=Sn[Sn.length-1]||null}let Nn=1;function la(e,t=!1){Nn+=e,e<0&&Je&&t&&(Je.hasOnce=!0)}function zs(e){return e.dynamicChildren=Nn>0?Je||an:null,sc(),Nn>0&&Je&&Je.push(e),e}function N(e,t,n,a,i,l){return zs(s(e,t,n,a,i,l,!0))}function sa(e,t,n,a,i){return zs(ke(e,t,n,a,i,!0))}function _n(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const Ws=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Me(e)||Ee(e)||$(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function s(e,t=null,n=null,a=0,i=null,l=e===Y?0:1,o=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ws(t),ref:t&&Zn(t),scopeId:gs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return r?(Di(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),Nn>0&&!o&&Je&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Je.push(c),c}const ke=oc;function oc(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Ss)&&(e=Te),_n(e)){const r=jt(e,t,!0);return n&&Di(r,n),Nn>0&&!l&&Je&&(r.shapeFlag&6?Je[Je.indexOf(e)]=r:Je.push(r)),r.patchFlag=-2,r}if(bc(e)&&(e=e.__vccOpts),t){t=rc(t);let{class:r,style:c}=t;r&&!Me(r)&&(t.class=y(r)),fe(c)&&(bi(c)&&!Q(c)&&(c=we({},c)),t.style=Bt(c))}const o=Me(e)?1:Vs(e)?128:hs(e)?64:fe(e)?4:$(e)?2:0;return s(e,t,n,a,i,o,l,!0)}function rc(e){return e?bi(e)||Os(e)?we({},e):e:null}function jt(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:o,children:r,transition:c}=e,p=t?cc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ws(p),ref:t&&t.ref?n&&l?Q(l)?l.concat(Zn(t)):[l,Zn(t)]:Zn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Y?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&In(u,c.clone(u)),u}function Ge(e=" ",t=0){return ke(ka,null,e,t)}function cn(e,t){const n=ke(Xn,null,e);return n.staticCount=t,n}function Ne(e="",t=!1){return t?(E(),sa(Te,null,e)):ke(Te,null,e)}function ut(e){return e==null||typeof e=="boolean"?ke(Te):Q(e)?ke(Y,null,e.slice()):_n(e)?Nt(e):ke(ka,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Di(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),Di(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Os(t)?t._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),a&64?(n=16,t=[Ge(t)]):n=8);e.children=t,e.shapeFlag|=n}function cc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=y([t.class,a.class]));else if(i==="style")t.style=Bt([t.style,a.style]);else if(ra(i)){const l=t[i],o=a[i];o&&l!==o&&!(Q(l)&&l.includes(o))&&(t[i]=l?[].concat(l,o):o)}else i!==""&&(t[i]=a[i])}return t}function rt(e,t,n,a=null){nt(e,t,7,[n,a])}const uc=Is();let dc=0;function pc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||uc,l={uid:dc++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bs(a,i),emitsOptions:Ns(a,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:a.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Fr.bind(null,l),e.ce&&e.ce(l),l}let Re=null;const Qs=()=>Re||Pe;let oa,$a;{const e=pa(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(o=>o(l)):i[0](l)}};oa=t("__VUE_INSTANCE_SETTERS__",n=>Re=n),$a=t("__VUE_SSR_SETTERS__",n=>Ln=n)}const Fn=e=>{const t=Re;return oa(e),e.scope.on(),()=>{e.scope.off(),oa(t)}},Qi=()=>{Re&&Re.scope.off(),oa(null)};function qs(e){return e.vnode.shapeFlag&4}let Ln=!1;function gc(e,t=!1,n=!1){t&&$a(t);const{props:a,children:i}=e.vnode,l=qs(e);qr(e,a,l,t),$r(e,i,n||t);const o=l?fc(e,t):void 0;return t&&$a(!1),o}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_r);const{setup:a}=n;if(a){yt();const i=e.setupContext=a.length>1?hc(e):null,l=Fn(e),o=Hn(a,e,0,[e.props,i]),r=jl(o);if(Mt(),l(),(r||e.sp)&&!on(e)&&Ms(e),r){if(o.then(Qi,Qi),t)return o.then(c=>{qi(e,c)}).catch(c=>{fa(c,e,0)});e.asyncDep=o}else qi(e,o)}else Ys(e)}function qi(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=rs(t)),Ys(e)}function Ys(e,t,n){const a=e.type;e.render||(e.render=a.render||dt);{const i=Fn(e);yt();try{Lr(e)}finally{Mt(),i()}}}const mc={get(e,t){return Ce(e,"get",""),e[t]}};function hc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mc),slots:e.slots,emit:e.emit,expose:t}}function va(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(rs(ir(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pn)return Pn[n](e)},has(t,n){return n in t||n in Pn}})):e.proxy}function Ac(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return $(e)&&"__vccOpts"in e}const ae=(e,t)=>cr(e,t,Ln);function wi(e,t,n){try{la(-1);const a=arguments.length;return a===2?fe(t)&&!Q(t)?_n(t)?ke(e,null,[t]):ke(e,t):ke(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&_n(n)&&(n=[n]),ke(e,t,n))}finally{la(1)}}const kc="3.5.26";let ei;const Yi=typeof window<"u"&&window.trustedTypes;if(Yi)try{ei=Yi.createPolicy("vue",{createHTML:e=>e})}catch{}const Xs=ei?e=>ei.createHTML(e):e=>e,vc="http://www.w3.org/2000/svg",xc="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Xi=mt&&mt.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?mt.createElementNS(vc,e):t==="mathml"?mt.createElementNS(xc,e):n?mt.createElement(e,{is:n}):mt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const o=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{Xi.innerHTML=Xs(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const r=Xi.content;if(a==="svg"||a==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},St="transition",kn="animation",On=Symbol("_vtc"),Zs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mc=we({},As,Zs),Dc=e=>(e.displayName="Transition",e.props=Mc,e),ti=Dc((e,{slots:t})=>wi(xr,wc(e),t)),Ft=(e,t=[])=>{Q(e)?e.forEach(n=>n(...t)):e&&e(...t)},Zi=e=>e?Q(e)?e.some(t=>t.length>1):e.length>1:!1;function wc(e){const t={};for(const U in e)U in Zs||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:p=o,appearToClass:u=r,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,M=Pc(i),A=M&&M[0],b=M&&M[1],{onBeforeEnter:x,onEnter:T,onEnterCancelled:R,onLeave:S,onLeaveCancelled:J,onBeforeAppear:ne=x,onAppear:oe=T,onAppearCancelled:ve=R}=t,W=(U,O,v,me)=>{U._enterCancelled=me,Jt(U,O?u:r),Jt(U,O?p:o),v&&v()},ee=(U,O)=>{U._isLeaving=!1,Jt(U,d),Jt(U,h),Jt(U,g),O&&O()},re=U=>(O,v)=>{const me=U?oe:T,B=()=>W(O,U,v);Ft(me,[O,B]),$i(()=>{Jt(O,U?c:l),gt(O,U?u:r),Zi(me)||el(O,a,A,B)})};return we(t,{onBeforeEnter(U){Ft(x,[U]),gt(U,l),gt(U,o)},onBeforeAppear(U){Ft(ne,[U]),gt(U,c),gt(U,p)},onEnter:re(!1),onAppear:re(!0),onLeave(U,O){U._isLeaving=!0;const v=()=>ee(U,O);gt(U,d),U._enterCancelled?(gt(U,g),al(U)):(al(U),gt(U,g)),$i(()=>{U._isLeaving&&(Jt(U,d),gt(U,h),Zi(S)||el(U,a,b,v))}),Ft(S,[U,v])},onEnterCancelled(U){W(U,!1,void 0,!0),Ft(R,[U])},onAppearCancelled(U){W(U,!0,void 0,!0),Ft(ve,[U])},onLeaveCancelled(U){ee(U),Ft(J,[U])}})}function Pc(e){if(e==null)return null;if(fe(e))return[Ia(e.enter),Ia(e.leave)];{const t=Ia(e);return[t,t]}}function Ia(e){return Ro(e)}function gt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[On]||(e[On]=new Set)).add(t)}function Jt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[On];n&&(n.delete(t),n.size||(e[On]=void 0))}function $i(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sc=0;function el(e,t,n,a){const i=e._endId=++Sc,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:o,timeout:r,propCount:c}=Cc(e,t);if(!o)return a();const p=o+"end";let u=0;const d=()=>{e.removeEventListener(p,g),l()},g=h=>{h.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},r+1),e.addEventListener(p,g)}function Cc(e,t){const n=window.getComputedStyle(e),a=M=>(n[M]||"").split(", "),i=a(`${St}Delay`),l=a(`${St}Duration`),o=tl(i,l),r=a(`${kn}Delay`),c=a(`${kn}Duration`),p=tl(r,c);let u=null,d=0,g=0;t===St?o>0&&(u=St,d=o,g=l.length):t===kn?p>0&&(u=kn,d=p,g=c.length):(d=Math.max(o,p),u=d>0?o>p?St:kn:null,g=u?u===St?l.length:c.length:0);const h=u===St&&/\b(?:transform|all)(?:,|$)/.test(a(`${St}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:h}}function tl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>nl(n)+nl(e[a])))}function nl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function al(e){return(e?e.ownerDocument:document).body.offsetHeight}function Tc(e,t,n){const a=e[On];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const il=Symbol("_vod"),Rc=Symbol("_vsh"),Ec=Symbol(""),Ic=/(?:^|;)\s*display\s*:/;function Nc(e,t,n){const a=e.style,i=Me(n);let l=!1;if(n&&!i){if(t)if(Me(t))for(const o of t.split(";")){const r=o.slice(0,o.indexOf(":")).trim();n[r]==null&&$n(a,r,"")}else for(const o in t)n[o]==null&&$n(a,o,"");for(const o in n)o==="display"&&(l=!0),$n(a,o,n[o])}else if(i){if(t!==n){const o=a[Ec];o&&(n+=";"+o),a.cssText=n,l=Ic.test(n)}}else t&&e.removeAttribute("style");il in e&&(e[il]=l?a.display:"",e[Rc]&&(a.display="none"))}const ll=/\s*!important$/;function $n(e,t,n){if(Q(n))n.forEach(a=>$n(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=_c(e,t);ll.test(n)?e.setProperty(Yt(a),n.replace(ll,""),"important"):e[a]=n}}const sl=["Webkit","Moz","ms"],Na={};function _c(e,t){const n=Na[t];if(n)return n;let a=Ye(t);if(a!=="filter"&&a in e)return Na[t]=a;a=ua(a);for(let i=0;i<sl.length;i++){const l=sl[i]+a;if(l in e)return Na[t]=l}return t}const ol="http://www.w3.org/1999/xlink";function rl(e,t,n,a,i,l=Oo(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ol,t.slice(6,t.length)):e.setAttributeNS(ol,t,n):n==null||l&&!Fl(n)?e.removeAttribute(t):e.setAttribute(t,l?"":et(n)?String(n):n)}function cl(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xs(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const r=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Fl(n):n==null&&r==="string"?(n="",o=!0):r==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ot(e,t,n,a){e.addEventListener(t,n,a)}function Lc(e,t,n,a){e.removeEventListener(t,n,a)}const ul=Symbol("_vei");function Oc(e,t,n,a,i=null){const l=e[ul]||(e[ul]={}),o=l[t];if(a&&o)o.value=a;else{const[r,c]=Kc(t);if(a){const p=l[t]=Gc(a,i);Ot(e,r,p,c)}else o&&(Lc(e,r,o,c),l[t]=void 0)}}const dl=/(?:Once|Passive|Capture)$/;function Kc(e){let t;if(dl.test(e)){t={};let a;for(;a=e.match(dl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let _a=0;const Bc=Promise.resolve(),jc=()=>_a||(Bc.then(()=>_a=0),_a=Date.now());function Gc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;nt(Uc(a,n.value),t,5,[a])};return n.value=e,n.attached=jc(),n}function Uc(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const pl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hc=(e,t,n,a,i,l)=>{const o=i==="svg";t==="class"?Tc(e,a,o):t==="style"?Nc(e,n,a):ra(t)?ri(t)||Oc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fc(e,t,a,o))?(cl(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&rl(e,t,a,o,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Me(a))?cl(e,Ye(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),rl(e,t,a,o))};function Fc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&pl(t)&&$(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return pl(t)&&Me(n)?!1:t in e}const pn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>qn(t,n):t};function Jc(e){e.target.composing=!0}function gl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vt=Symbol("_assign");function fl(e,t,n){return t&&(e=e.trim()),n&&(e=da(e)),e}const Qe={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[vt]=pn(i);const l=a||i.props&&i.props.type==="number";Ot(e,t?"change":"input",o=>{o.target.composing||e[vt](fl(e.value,n,l))}),(n||l)&&Ot(e,"change",()=>{e.value=fl(e.value,n,l)}),t||(Ot(e,"compositionstart",Jc),Ot(e,"compositionend",gl),Ot(e,"change",gl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},o){if(e[vt]=pn(o),e.composing)return;const r=(l||e.type==="number")&&!/^0\d/.test(e.value)?da(e.value):e.value,c=t??"";r!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===c)||(e.value=c))}},ml={deep:!0,created(e,t,n){e[vt]=pn(n),Ot(e,"change",()=>{const a=e._modelValue,i=Kn(e),l=e.checked,o=e[vt];if(Q(a)){const r=di(a,i),c=r!==-1;if(l&&!c)o(a.concat(i));else if(!l&&c){const p=[...a];p.splice(r,1),o(p)}}else if(mn(a)){const r=new Set(a);l?r.add(i):r.delete(i),o(r)}else o($s(e,l))})},mounted:hl,beforeUpdate(e,t,n){e[vt]=pn(n),hl(e,t,n)}};function hl(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(Q(t))i=di(t,a.props.value)>-1;else if(mn(t))i=t.has(a.props.value);else{if(t===n)return;i=Gn(t,$s(e,!0))}e.checked!==i&&(e.checked=i)}const xt={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=mn(t);Ot(e,"change",()=>{const l=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?da(Kn(o)):Kn(o));e[vt](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,ma(()=>{e._assigning=!1})}),e[vt]=pn(a)},mounted(e,{value:t}){Al(e,t)},beforeUpdate(e,t,n){e[vt]=pn(n)},updated(e,{value:t}){e._assigning||Al(e,t)}};function Al(e,t){const n=e.multiple,a=Q(t);if(!(n&&!a&&!mn(t))){for(let i=0,l=e.options.length;i<l;i++){const o=e.options[i],r=Kn(o);if(n)if(a){const c=typeof r;c==="string"||c==="number"?o.selected=t.some(p=>String(p)===String(r)):o.selected=di(t,r)>-1}else o.selected=t.has(r);else if(Gn(Kn(o),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Kn(e){return"_value"in e?e._value:e.value}function $s(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Vc=["ctrl","shift","alt","meta"],zc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Vc.some(n=>e[`${n}Key`]&&!t.includes(n))},La=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let o=0;o<t.length;o++){const r=zc[t[o]];if(r&&r(i,t))return}return e(i,...l)}))},Wc=we({patchProp:Hc},yc);let bl;function Qc(){return bl||(bl=tc(Wc))}const qc=((...e)=>{const t=Qc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=Xc(a);if(!i)return;const l=t._component;!$(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Yc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t});function Yc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xc(e){return Me(e)?document.querySelector(e):e}const xa="/toram-vue/images/logo.png";const nn=typeof document<"u";function eo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&eo(e.default)}const ue=Object.assign;function Oa(e,t){const n={};for(const a in t){const i=t[a];n[a]=at(i)?i.map(e):e(i)}return n}const Cn=()=>{},at=Array.isArray;function kl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const to=/#/g,$c=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,no=/\+/g,au=/%5B/g,iu=/%5D/g,ao=/%5E/g,lu=/%60/g,io=/%7B/g,su=/%7C/g,lo=/%7D/g,ou=/%20/g;function Pi(e){return e==null?"":encodeURI(""+e).replace(su,"|").replace(au,"[").replace(iu,"]")}function ru(e){return Pi(e).replace(io,"{").replace(lo,"}").replace(ao,"^")}function ni(e){return Pi(e).replace(no,"%2B").replace(ou,"+").replace(to,"%23").replace($c,"%26").replace(lu,"`").replace(io,"{").replace(lo,"}").replace(ao,"^")}function cu(e){return ni(e).replace(tu,"%3D")}function uu(e){return Pi(e).replace(to,"%23").replace(nu,"%3F")}function du(e){return uu(e).replace(eu,"%2F")}function Bn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pu=/\/$/,gu=e=>e.replace(pu,"");function Ka(e,t,n="/"){let a,i={},l="",o="";const r=t.indexOf("#");let c=t.indexOf("?");return c=r>=0&&c>r?-1:c,c>=0&&(a=t.slice(0,c),l=t.slice(c,r>0?r:t.length),i=e(l.slice(1))),r>=0&&(a=a||t.slice(0,r),o=t.slice(r,t.length)),a=Au(a??t,n),{fullPath:a+l+o,path:a,query:i,hash:Bn(o)}}function fu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function vl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mu(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&gn(t.matched[a],n.matched[i])&&so(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function so(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return at(e)?xl(e,t):at(t)?xl(t,e):e?.valueOf()===t?.valueOf()}function xl(e,t){return at(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Au(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,o,r;for(o=0;o<a.length;o++)if(r=a[o],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(o).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ai=(function(e){return e.pop="pop",e.push="push",e})({}),Ba=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function bu(e){if(!e)if(nn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),gu(e)}const ku=/^[^#]+#/;function vu(e,t){return e.replace(ku,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function yu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=xu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function yl(e,t){return(history.state?history.state.position-t:-1)+e}const ii=new Map;function Mu(e,t){ii.set(e,t)}function Du(e){const t=ii.get(e);return ii.delete(e),t}function wu(e){return typeof e=="string"||e&&typeof e=="object"}function oo(e){return typeof e=="string"||typeof e=="symbol"}let ye=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ro=Symbol("");ye.MATCHER_NOT_FOUND+"",ye.NAVIGATION_GUARD_REDIRECT+"",ye.NAVIGATION_ABORTED+"",ye.NAVIGATION_CANCELLED+"",ye.NAVIGATION_DUPLICATED+"";function fn(e,t){return ue(new Error,{type:e,[ro]:!0},t)}function ft(e,t){return e instanceof Error&&ro in e&&(t==null||!!(e.type&t))}const Pu=["params","query","hash"];function Su(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Pu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Cu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(no," "),l=i.indexOf("="),o=Bn(l<0?i:i.slice(0,l)),r=l<0?null:Bn(i.slice(l+1));if(o in t){let c=t[o];at(c)||(c=t[o]=[c]),c.push(r)}else t[o]=r}return t}function Ml(e){let t="";for(let n in e){const a=e[n];if(n=cu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(a)?a.map(i=>i&&ni(i)):[a&&ni(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Tu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=at(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const Ru=Symbol(""),Dl=Symbol(""),Ma=Symbol(""),Si=Symbol(""),li=Symbol("");function vn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function _t(e,t,n,a,i,l=o=>o()){const o=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const p=g=>{g===!1?c(fn(ye.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?c(g):wu(g)?c(fn(ye.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(o&&a.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),r())},u=l(()=>e.call(a&&a.instances[i],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(g=>c(g))})}function ja(e,t,n,a,i=l=>l()){const l=[];for(const o of e)for(const r in o.components){let c=o.components[r];if(!(t!=="beforeRouteEnter"&&!o.instances[r]))if(eo(c)){const p=(c.__vccOpts||c)[t];p&&l.push(_t(p,n,a,o,r,i))}else{let p=c();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${r}" at "${o.path}"`);const d=Zc(u)?u.default:u;o.mods[r]=u,o.components[r]=d;const g=(d.__vccOpts||d)[t];return g&&_t(g,n,a,o,r,i)()}))}}return l}function Eu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let o=0;o<l;o++){const r=t.matched[o];r&&(e.matched.find(p=>gn(p,r))?a.push(r):n.push(r));const c=e.matched[o];c&&(t.matched.find(p=>gn(p,c))||i.push(c))}return[n,a,i]}let Iu=()=>location.protocol+"//"+location.host;function co(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let o=i.includes(e.slice(l))?e.slice(l).length:1,r=i.slice(o);return r[0]!=="/"&&(r="/"+r),vl(r,"")}return vl(n,e)+a+i}function Nu(e,t,n,a){let i=[],l=[],o=null;const r=({state:g})=>{const h=co(e,location),M=n.value,A=t.value;let b=0;if(g){if(n.value=h,t.value=g,o&&o===M){o=null;return}b=A?g.position-A.position:0}else a(h);i.forEach(x=>{x(n.value,M,{delta:b,type:ai.pop,direction:b?b>0?Ba.forward:Ba.back:Ba.unknown})})};function c(){o=n.value}function p(g){i.push(g);const h=()=>{const M=i.indexOf(g);M>-1&&i.splice(M,1)};return l.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(ue({},g.state,{scroll:ya()}),"")}}function d(){for(const g of l)g();l=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function wl(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?ya():null}}function _u(e){const{history:t,location:n}=window,a={value:co(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,p,u){const d=e.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Iu()+e+c;try{t[u?"replaceState":"pushState"](p,"",g),i.value=p}catch(h){console.error(h),n[u?"replace":"assign"](g)}}function o(c,p){l(c,ue({},t.state,wl(i.value.back,c,i.value.forward,!0),p,{position:i.value.position}),!0),a.value=c}function r(c,p){const u=ue({},i.value,t.state,{forward:c,scroll:ya()});l(u.current,u,!0),l(c,ue({},wl(a.value,c,null),{position:u.position+1},p),!1),a.value=c}return{location:a,state:i,push:r,replace:o}}function Lu(e){e=bu(e);const t=_u(e),n=Nu(e,t.state,t.location,t.replace);function a(l,o=!0){o||n.pauseListeners(),history.go(l)}const i=ue({location:"",base:e,go:a,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Ou(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Lu(e)}let Wt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var De=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(De||{});const Ku={type:Wt.Static,value:""},Bu=/[a-zA-Z0-9_]/;function ju(e){if(!e)return[[]];if(e==="/")return[[Ku]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${p}": ${h}`)}let n=De.Static,a=n;const i=[];let l;function o(){l&&i.push(l),l=[]}let r=0,c,p="",u="";function d(){p&&(n===De.Static?l.push({type:Wt.Static,value:p}):n===De.Param||n===De.ParamRegExp||n===De.ParamRegExpEnd?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Wt.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function g(){p+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==De.ParamRegExp){a=n,n=De.EscapeNext;continue}switch(n){case De.Static:c==="/"?(p&&d(),o()):c===":"?(d(),n=De.Param):g();break;case De.EscapeNext:g(),n=a;break;case De.Param:c==="("?n=De.ParamRegExp:Bu.test(c)?g():(d(),n=De.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case De.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=De.ParamRegExpEnd:u+=c;break;case De.ParamRegExpEnd:d(),n=De.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--,u="";break;default:t("Unknown state");break}}return n===De.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),o(),i}const Pl="[^/]+?",Gu={sensitive:!1,strict:!1,start:!0,end:!0};var _e=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(_e||{});const Uu=/[.+*?^${}()[\]/\\]/g;function Hu(e,t){const n=ue({},Gu,t),a=[];let i=n.start?"^":"";const l=[];for(const p of e){const u=p.length?[]:[_e.Root];n.strict&&!p.length&&(i+="/");for(let d=0;d<p.length;d++){const g=p[d];let h=_e.Segment+(n.sensitive?_e.BonusCaseSensitive:0);if(g.type===Wt.Static)d||(i+="/"),i+=g.value.replace(Uu,"\\$&"),h+=_e.Static;else if(g.type===Wt.Param){const{value:M,repeatable:A,optional:b,regexp:x}=g;l.push({name:M,repeatable:A,optional:b});const T=x||Pl;if(T!==Pl){h+=_e.BonusCustomRegExp;try{`${T}`}catch(S){throw new Error(`Invalid custom RegExp for param "${M}" (${T}): `+S.message)}}let R=A?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(R=b&&p.length<2?`(?:/${R})`:"/"+R),b&&(R+="?"),i+=R,h+=_e.Dynamic,b&&(h+=_e.BonusOptional),A&&(h+=_e.BonusRepeatable),T===".*"&&(h+=_e.BonusWildcard)}u.push(h)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=_e.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function r(p){const u=p.match(o),d={};if(!u)return null;for(let g=1;g<u.length;g++){const h=u[g]||"",M=l[g-1];d[M.name]=h&&M.repeatable?h.split("/"):h}return d}function c(p){let u="",d=!1;for(const g of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of g)if(h.type===Wt.Static)u+=h.value;else if(h.type===Wt.Param){const{value:M,repeatable:A,optional:b}=h,x=M in p?p[M]:"";if(at(x)&&!A)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const T=at(x)?x.join("/"):x;if(!T)if(b)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${M}"`);u+=T}}return u||"/"}return{re:o,score:a,keys:l,parse:r,stringify:c}}function Fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===_e.Static+_e.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===_e.Static+_e.Segment?1:-1:0}function uo(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=Fu(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(Sl(a))return 1;if(Sl(i))return-1}return i.length-a.length}function Sl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ju={strict:!1,end:!0,sensitive:!1};function Vu(e,t,n){const a=Hu(ju(e.path),n),i=ue(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function zu(e,t){const n=[],a=new Map;t=kl(Ju,t);function i(d){return a.get(d)}function l(d,g,h){const M=!h,A=Tl(d);A.aliasOf=h&&h.record;const b=kl(t,d),x=[A];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const J of S)x.push(Tl(ue({},A,{components:h?h.record.components:A.components,path:J,aliasOf:h?h.record:A})))}let T,R;for(const S of x){const{path:J}=S;if(g&&J[0]!=="/"){const ne=g.record.path,oe=ne[ne.length-1]==="/"?"":"/";S.path=g.record.path+(J&&oe+J)}if(T=Vu(S,g,b),h?h.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),M&&d.name&&!Rl(T)&&o(d.name)),po(T)&&c(T),A.children){const ne=A.children;for(let oe=0;oe<ne.length;oe++)l(ne[oe],T,h&&h.children[oe])}h=h||T}return R?()=>{o(R)}:Cn}function o(d){if(oo(d)){const g=a.get(d);g&&(a.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&a.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function r(){return n}function c(d){const g=qu(d,n);n.splice(g,0,d),d.record.name&&!Rl(d)&&a.set(d.record.name,d)}function p(d,g){let h,M={},A,b;if("name"in d&&d.name){if(h=a.get(d.name),!h)throw fn(ye.MATCHER_NOT_FOUND,{location:d});b=h.record.name,M=ue(Cl(g.params,h.keys.filter(R=>!R.optional).concat(h.parent?h.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),d.params&&Cl(d.params,h.keys.map(R=>R.name))),A=h.stringify(M)}else if(d.path!=null)A=d.path,h=n.find(R=>R.re.test(A)),h&&(M=h.parse(A),b=h.record.name);else{if(h=g.name?a.get(g.name):n.find(R=>R.re.test(g.path)),!h)throw fn(ye.MATCHER_NOT_FOUND,{location:d,currentLocation:g});b=h.record.name,M=ue({},g.params,d.params),A=h.stringify(M)}const x=[];let T=h;for(;T;)x.unshift(T.record),T=T.parent;return{name:b,path:A,params:M,matched:x,meta:Qu(x)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:p,removeRoute:o,clearRoutes:u,getRoutes:r,getRecordMatcher:i}}function Cl(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Tl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Wu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Wu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Rl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qu(e){return e.reduce((t,n)=>ue(t,n.meta),{})}function qu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;uo(e,t[l])<0?a=l:n=l+1}const i=Yu(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function Yu(e){let t=e;for(;t=t.parent;)if(po(t)&&uo(e,t)===0)return t}function po({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function El(e){const t=$e(Ma),n=$e(Si),a=ae(()=>{const c=Ze(e.to);return t.resolve(c)}),i=ae(()=>{const{matched:c}=a.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(gn.bind(null,u));if(g>-1)return g;const h=Il(c[p-2]);return p>1&&Il(u)===h&&d[d.length-1].path!==h?d.findIndex(gn.bind(null,c[p-2])):g}),l=ae(()=>i.value>-1&&t0(n.params,a.value.params)),o=ae(()=>i.value>-1&&i.value===n.matched.length-1&&so(n.params,a.value.params));function r(c={}){if(e0(c)){const p=t[Ze(e.replace)?"replace":"push"](Ze(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:ae(()=>a.value.href),isActive:l,isExactActive:o,navigate:r}}function Xu(e){return e.length===1?e[0]:e}const Zu=ys({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:El,setup(e,{slots:t}){const n=Un(El(e)),{options:a}=$e(Ma),i=ae(()=>({[Nl(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Nl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Xu(t.default(n));return e.custom?l:wi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),$u=Zu;function e0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function t0(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!at(i)||i.length!==a.length||a.some((l,o)=>l.valueOf()!==i[o].valueOf()))return!1}return!0}function Il(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nl=(e,t,n)=>e??t??n,n0=ys({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=$e(li),i=ae(()=>e.route||a.value),l=$e(Dl,0),o=ae(()=>{let p=Ze(l);const{matched:u}=i.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),r=ae(()=>i.value.matched[o.value]);Yn(Dl,ae(()=>o.value+1)),Yn(Ru,r),Yn(li,i);const c=se();return kt(()=>[c.value,r.value,e.name],([p,u,d],[g,h,M])=>{u&&(u.instances[d]=p,h&&h!==u&&p&&p===g&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),p&&u&&(!h||!gn(u,h)||!g)&&(u.enterCallbacks[d]||[]).forEach(A=>A(p))},{flush:"post"}),()=>{const p=i.value,u=e.name,d=r.value,g=d&&d.components[u];if(!g)return _l(n.default,{Component:g,route:p});const h=d.props[u],M=h?h===!0?p.params:typeof h=="function"?h(p):h:null,b=wi(g,ue({},M,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return _l(n.default,{Component:b,route:p})||b}}});function _l(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const a0=n0;function i0(e){const t=zu(e.routes,e),n=e.parseQuery||Cu,a=e.stringifyQuery||Ml,i=e.history,l=vn(),o=vn(),r=vn(),c=lr(Ct);let p=Ct;nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oa.bind(null,P=>""+P),d=Oa.bind(null,du),g=Oa.bind(null,Bn);function h(P,F){let G,V;return oo(P)?(G=t.getRecordMatcher(P),V=F):V=P,t.addRoute(V,G)}function M(P){const F=t.getRecordMatcher(P);F&&t.removeRoute(F)}function A(){return t.getRoutes().map(P=>P.record)}function b(P){return!!t.getRecordMatcher(P)}function x(P,F){if(F=ue({},F||c.value),typeof P=="string"){const k=Ka(n,P,F.path),D=t.resolve({path:k.path},F),C=i.createHref(k.fullPath);return ue(k,D,{params:g(D.params),hash:Bn(k.hash),redirectedFrom:void 0,href:C})}let G;if(P.path!=null)G=ue({},P,{path:Ka(n,P.path,F.path).path});else{const k=ue({},P.params);for(const D in k)k[D]==null&&delete k[D];G=ue({},P,{params:d(k)}),F.params=d(F.params)}const V=t.resolve(G,F),ie=P.hash||"";V.params=u(g(V.params));const f=fu(a,ue({},P,{hash:ru(ie),path:V.path})),m=i.createHref(f);return ue({fullPath:f,hash:ie,query:a===Ml?Tu(P.query):P.query||{}},V,{redirectedFrom:void 0,href:m})}function T(P){return typeof P=="string"?Ka(n,P,c.value.path):ue({},P)}function R(P,F){if(p!==P)return fn(ye.NAVIGATION_CANCELLED,{from:F,to:P})}function S(P){return oe(P)}function J(P){return S(ue(T(P),{replace:!0}))}function ne(P,F){const G=P.matched[P.matched.length-1];if(G&&G.redirect){const{redirect:V}=G;let ie=typeof V=="function"?V(P,F):V;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=T(ie):{path:ie},ie.params={}),ue({query:P.query,hash:P.hash,params:ie.path!=null?{}:P.params},ie)}}function oe(P,F){const G=p=x(P),V=c.value,ie=P.state,f=P.force,m=P.replace===!0,k=ne(G,V);if(k)return oe(ue(T(k),{state:typeof k=="object"?ue({},ie,k.state):ie,force:f,replace:m}),F||G);const D=G;D.redirectedFrom=F;let C;return!f&&mu(a,V,G)&&(C=fn(ye.NAVIGATION_DUPLICATED,{to:D,from:V}),it(V,V,!0,!1)),(C?Promise.resolve(C):ee(D,V)).catch(w=>ft(w)?ft(w,ye.NAVIGATION_GUARD_REDIRECT)?w:Pt(w):X(w,D,V)).then(w=>{if(w){if(ft(w,ye.NAVIGATION_GUARD_REDIRECT))return oe(ue({replace:m},T(w.to),{state:typeof w.to=="object"?ue({},ie,w.to.state):ie,force:f}),F||D)}else w=U(D,V,!0,m,ie);return re(D,V,w),w})}function ve(P,F){const G=R(P,F);return G?Promise.reject(G):Promise.resolve()}function W(P){const F=$t.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(P):P()}function ee(P,F){let G;const[V,ie,f]=Eu(P,F);G=ja(V.reverse(),"beforeRouteLeave",P,F);for(const k of V)k.leaveGuards.forEach(D=>{G.push(_t(D,P,F))});const m=ve.bind(null,P,F);return G.push(m),Ve(G).then(()=>{G=[];for(const k of l.list())G.push(_t(k,P,F));return G.push(m),Ve(G)}).then(()=>{G=ja(ie,"beforeRouteUpdate",P,F);for(const k of ie)k.updateGuards.forEach(D=>{G.push(_t(D,P,F))});return G.push(m),Ve(G)}).then(()=>{G=[];for(const k of f)if(k.beforeEnter)if(at(k.beforeEnter))for(const D of k.beforeEnter)G.push(_t(D,P,F));else G.push(_t(k.beforeEnter,P,F));return G.push(m),Ve(G)}).then(()=>(P.matched.forEach(k=>k.enterCallbacks={}),G=ja(f,"beforeRouteEnter",P,F,W),G.push(m),Ve(G))).then(()=>{G=[];for(const k of o.list())G.push(_t(k,P,F));return G.push(m),Ve(G)}).catch(k=>ft(k,ye.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function re(P,F,G){r.list().forEach(V=>W(()=>V(P,F,G)))}function U(P,F,G,V,ie){const f=R(P,F);if(f)return f;const m=F===Ct,k=nn?history.state:{};G&&(V||m?i.replace(P.fullPath,ue({scroll:m&&k&&k.scroll},ie)):i.push(P.fullPath,ie)),c.value=P,it(P,F,G,m),Pt()}let O;function v(){O||(O=i.listen((P,F,G)=>{if(!Gt.listening)return;const V=x(P),ie=ne(V,Gt.currentRoute.value);if(ie){oe(ue(ie,{replace:!0,force:!0}),V).catch(Cn);return}p=V;const f=c.value;nn&&Mu(yl(f.fullPath,G.delta),ya()),ee(V,f).catch(m=>ft(m,ye.NAVIGATION_ABORTED|ye.NAVIGATION_CANCELLED)?m:ft(m,ye.NAVIGATION_GUARD_REDIRECT)?(oe(ue(T(m.to),{force:!0}),V).then(k=>{ft(k,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===ai.pop&&i.go(-1,!1)}).catch(Cn),Promise.reject()):(G.delta&&i.go(-G.delta,!1),X(m,V,f))).then(m=>{m=m||U(V,f,!1),m&&(G.delta&&!ft(m,ye.NAVIGATION_CANCELLED)?i.go(-G.delta,!1):G.type===ai.pop&&ft(m,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),re(V,f,m)}).catch(Cn)}))}let me=vn(),B=vn(),te;function X(P,F,G){Pt(P);const V=B.list();return V.length?V.forEach(ie=>ie(P,F,G)):console.error(P),Promise.reject(P)}function Ue(){return te&&c.value!==Ct?Promise.resolve():new Promise((P,F)=>{me.add([P,F])})}function Pt(P){return te||(te=!P,v(),me.list().forEach(([F,G])=>P?G(P):F()),me.reset()),P}function it(P,F,G,V){const{scrollBehavior:ie}=e;if(!nn||!ie)return Promise.resolve();const f=!G&&Du(yl(P.fullPath,0))||(V||!G)&&history.state&&history.state.scroll||null;return ma().then(()=>ie(P,F,f)).then(m=>m&&yu(m)).catch(m=>X(m,P,F))}const Oe=P=>i.go(P);let Zt;const $t=new Set,Gt={currentRoute:c,listening:!0,addRoute:h,removeRoute:M,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:A,resolve:x,options:e,push:S,replace:J,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:l.add,beforeResolve:o.add,afterEach:r.add,onError:B.add,isReady:Ue,install(P){P.component("RouterLink",$u),P.component("RouterView",a0),P.config.globalProperties.$router=Gt,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(c)}),nn&&!Zt&&c.value===Ct&&(Zt=!0,S(i.location).catch(V=>{}));const F={};for(const V in Ct)Object.defineProperty(F,V,{get:()=>c.value[V],enumerable:!0});P.provide(Ma,Gt),P.provide(Si,ss(F)),P.provide(li,c);const G=P.unmount;$t.add(P),P.unmount=function(){$t.delete(P),$t.size<1&&(p=Ct,O&&O(),O=null,c.value=Ct,Zt=!1,te=!1),G()}}};function Ve(P){return P.reduce((F,G)=>F.then(()=>W(G)),Promise.resolve())}return Gt}function Ci(){return $e(Ma)}function go(e){return $e(Si)}const Xt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},l0={class:"absolute inset-0 pointer-events-none z-0"},s0={class:"fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-5xl"},o0={class:"hidden sm:flex flex-col ml-2 leading-tight overflow-hidden"},r0={class:"font-black italic text-xs md:text-base uppercase tracking-widest truncate"},c0={class:"flex-1 flex justify-center px-1 overflow-hidden"},u0={class:"relative flex bg-black/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner overflow-hidden w-fit"},d0={class:"flex justify-end z-10 pr-2 flex-shrink-0"},p0={class:"text-xs md:text-lg"},g0={class:"max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},f0={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=go(),n=Ci(),a=se(null),i=se({}),l=se({left:"0px",width:"0px",opacity:0}),o=()=>n.push("/"),r=Array.from({length:80},(d,g)=>({id:g,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),c=Array.from({length:40},(d,g)=>({id:g,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),p=(d,g)=>{d&&(i.value[g]=d.$el||d)},u=async()=>{await ma();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 6px 20px -3px rgba(245, 158, 11, 0.7)":"0 10px 25px -5px rgba(139, 92, 246, 0.7)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return hn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),kt(()=>t.path,u),(d,g)=>{const h=xi("router-link");return E(),N("div",{class:y(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[s("div",l0,[(E(!0),N(Y,null,ge(Ze(c),M=>(E(),N("div",{key:"dust-"+M.id,class:y(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:Bt({width:M.size,height:M.size,top:M.top,left:M.left,animationDuration:M.duration,animationDelay:M.delay})},null,6))),128)),(E(!0),N(Y,null,ge(Ze(r),M=>(E(),N("div",{key:"star-"+M.id,class:y(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:Bt({width:M.size,height:M.size,top:M.top,left:M.left,animationDelay:M.delay})},null,6))),128))]),s("nav",s0,[s("div",{class:y(["backdrop-blur-3xl border flex items-center justify-between rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3",e.isDark?"bg-black/50 border-white/10 shadow-indigo-500/10":"bg-white/80 border-white/50 shadow-blue-500/5"])},[s("div",{onClick:o,class:"flex items-center cursor-pointer group select-none z-10 pl-2 pr-1 active:scale-95 transition-transform flex-shrink-0"},[s("div",{class:y(["w-8 h-8 md:w-11 md:h-11 overflow-hidden rounded-full border-2 transition-all duration-300 shadow-lg shrink-0",e.isDark?"border-white/20":"border-slate-300"])},[...g[1]||(g[1]=[s("img",{src:xa,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),s("div",o0,[s("span",r0,[s("span",{class:y(e.isDark?"text-white":"text-black")},"TIMI",2),g[2]||(g[2]=s("span",{class:"ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"},"DB",-1))]),g[3]||(g[3]=s("span",{class:"text-[6px] md:text-[7px] font-bold uppercase opacity-50 tracking-widest truncate"},"Toram Online Tools",-1))])]),s("div",c0,[s("div",u0,[s("div",{ref_key:"navContainer",ref:a,class:"flex items-center relative gap-0"},[s("div",{class:"absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:Bt(l.value)},null,4),ke(h,{ref:M=>p(M,"/"),to:"/",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[4]||(g[4]=[Ge("LIST BAG",-1)])]),_:1},512),ke(h,{ref:M=>p(M,"/mq"),to:"/mq",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[5]||(g[5]=[Ge("LIST MQ",-1)])]),_:1},512),ke(h,{ref:M=>p(M,"/mq-calc"),to:"/mq-calc",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[6]||(g[6]=[Ge("MQ-CALC",-1)])]),_:1},512),ke(h,{ref:M=>p(M,"/bs-calc"),to:"/bs-calc",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[7]||(g[7]=[Ge("BS-CALC",-1)])]),_:1},512),ke(h,{ref:M=>p(M,"/xtall"),to:"/xtall",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[8]||(g[8]=[Ge("XTALL",-1)])]),_:1},512)],512)])]),s("div",d0,[s("button",{onClick:g[0]||(g[0]=M=>d.$emit("toggleDark")),class:y(["w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-500 active:scale-75 shadow-lg shrink-0",e.isDark?"bg-slate-900 border-white/10 text-orange-400":"bg-white border-slate-200 text-indigo-600"])},[s("span",p0,K(e.isDark?"🌙":"☀️"),1)],2)])],2)]),s("main",g0,[Nr(d.$slots,"default",{},void 0)])],2)}}},m0=Xt(f0,[["__scopeId","data-v-2236526c"]]),h0={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},A0={__name:"App",setup(e){const t=se(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return hn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=xi("router-view");return E(),N("div",h0,[ke(m0,{isDark:t.value,onToggleDark:n},{default:We(()=>[ke(l,null,{default:We(({Component:o})=>[ke(ti,{name:"slide-page",mode:"out-in"},{default:We(()=>[(E(),sa(Ir(o),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},b0="/toram-vue/images/Bag-Toram.png",Qn=[{id:1,slot:"50 ➔ 51",nama_item:"Colon Skin (Kulit Colon)",jumlah:"x1",spina:0,monster:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:2,slot:"51 ➔ 52",nama_item:"Gorgeous Fur (Kulit Berkualitas)",jumlah:"x1",spina:0,monster:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rakau Plains (Dataran Rakau) / Ruined Temple Town (Kota Kuil Runtuh)"},{id:3,slot:"52 ➔ 53",nama_item:"Spina",jumlah:"-",spina:1e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store (Toko Kelontong)"},{id:4,slot:"53 ➔ 54",nama_item:"Minotaur Skin (Kulit Minotaur)",jumlah:"x1",spina:0,monster:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ruined Temple: Forbidden Hall (Kuil Runtuh: Aula Terlarang)"},{id:5,slot:"53 ➔ 54",nama_item:"Orange Crystal Fragment (Pecahan Kristal Jingga)",jumlah:"x1",spina:0,monster:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:6,slot:"54 ➔ 55",nama_item:"Forest Wolf Skin (Kulit Anjing Hutan)",jumlah:"x1",spina:0,monster:"Forest Wolf (Anjing Hutan)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Marbaro Forest: Deepest Part (Hutan Marbaro: Bagian Dalam)"},{id:7,slot:"54 ➔ 55",nama_item:"Goblin Medal (Lencana Goblin)",jumlah:"x1",spina:0,monster:"Boss Goblin (Goblin Bos)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Ribisco Cave: Deepest Part (Gua Ribisco: Bagian Dalam)"},{id:8,slot:"55 ➔ 56",nama_item:"Spina",jumlah:"-",spina:2e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:9,slot:"56 ➔ 57",nama_item:"Mochelo Fur (Bulu Mochelo)",jumlah:"x1",spina:0,monster:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:10,slot:"56 ➔ 57",nama_item:"Linen Cloth (Kain Linen)",jumlah:"x10",spina:0,monster:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Douce Hamlet (Dusun Douce)"},{id:11,slot:"57 ➔ 58",nama_item:"Green Dragon Fur (Bulu Naga Giok)",jumlah:"x1",spina:0,monster:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Land of Chaos (Tanah Kaos)"},{id:12,slot:"57 ➔ 58",nama_item:"High Quality Horn (Tanduk Berkualitas)",jumlah:"x10",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Yorl Highlands (Tanah Tinggi Yorl)"},{id:13,slot:"58 ➔ 59",nama_item:"Boss Roga Belt (Sabuk Bos Roga)",jumlah:"x1",spina:0,monster:"Boss Roga (Bos Roga)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:14,slot:"58 ➔ 59",nama_item:"Broadcloth (Kain Beludu)",jumlah:"x10",spina:0,monster:"Orc / Orc Warrior (Orc Petarung)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Saham Crater (Kawah Saham) / Saham Underground Cave (Gua Bawah Tanah Saham)"},{id:15,slot:"59 ➔ 60",nama_item:"Spina",jumlah:"-",spina:4e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:16,slot:"60 ➔ 61",nama_item:"Sharp Bear Claw (Cakar Beruang)",jumlah:"x2",spina:0,monster:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Darkanon Plain (Padang Darkanon)"},{id:17,slot:"60 ➔ 61",nama_item:"Sheeting Fabric (Kain Alas)",jumlah:"x20",spina:0,monster:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ancient Empress Tomb (Makam Ratu Kuno: Area 2/3)"},{id:18,slot:"61 ➔ 62",nama_item:"Heavy Tough Chain (Rantai Kukuh)",jumlah:"x2",spina:0,monster:"Masked Warrior (Pendekar Beratopeng)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:19,slot:"61 ➔ 62",nama_item:"Polyester Cloth (Kain Polister)",jumlah:"x20",spina:0,monster:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Lost Town (Kota Hilang)"},{id:20,slot:"62 ➔ 63",nama_item:"Grass Dragon Scale (Sisik Naga Sabana)",jumlah:"x2",spina:0,monster:"Grass Dragon Yelb (Naga Sabana Yelb)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Albatif Village (Desa Albatif)"},{id:21,slot:"62 ➔ 63",nama_item:"Space Wolf Fur (Kulit Serigala Alien)",jumlah:"x20",spina:0,monster:"Outer World Wolf (Serigala Luar)",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Gate to Another World (Gerbang Dunia Lain)"},{id:22,slot:"63 ➔ 64",nama_item:"Spina",jumlah:"-",spina:8e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:23,slot:"64 ➔ 65",nama_item:"Torn Cloak (Jubah Sobek)",jumlah:"x2",spina:0,monster:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Akaku Desert: Hill (Gurun Akaku: Bukit)"},{id:24,slot:"64 ➔ 65",nama_item:"Squirrel Fur (Kulit Tupai)",jumlah:"x20",spina:0,monster:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item:"Jade Raptor Horn (Tanduk Elang Zamrud)",jumlah:"x2",spina:0,monster:"Jade Raptor (Elang Zamrud)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Gravel Terrace (Teras Kerikil)"},{id:26,slot:"65 ➔ 66",nama_item:"Goat Fur (Bulu Kambing)",jumlah:"x20",spina:0,monster:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dunkel Valley (Jurang Dunkel)"},{id:27,slot:"66 ➔ 67",nama_item:"Twilight Dragon Wing (Sayap Naga Senja)",jumlah:"x2",spina:0,monster:"Twilight Dragon (Naga Senja)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fort Solfini: Roof (Benteng Solfini: Atap)"},{id:28,slot:"66 ➔ 67",nama_item:"Fleecy Fur (Bulu Halus)",jumlah:"x20",spina:0,monster:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Polde Ice Valley (Lembah Es Polde)"},{id:29,slot:"67 ➔ 68",nama_item:"Spina",jumlah:"-",spina:16e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:30,slot:"68 ➔ 69",nama_item:"Chain of Purgatory (Rantai Penyucian)",jumlah:"x2",spina:0,monster:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi:"Spring of Rebirth: Top (Mata Air Kelahiran: Puncak)"},{id:31,slot:"68 ➔ 69",nama_item:"Wavering Cloth (Kain Goyah)",jumlah:"x20",spina:0,monster:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Spring of Rebirth (Mata Air Kelahiran: Tengah/Atas)"},{id:32,slot:"69 ➔ 70",nama_item:"Aranea Silk (Benang Aranea)",jumlah:"x2",spina:0,monster:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Pusat)"},{id:33,slot:"69 ➔ 70",nama_item:"Small Spider Silk (Benang Laba-Laba Kecil)",jumlah:"x20",spina:0,monster:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Area 2/3)"},{id:34,slot:"70 ➔ 71",nama_item:"Copied Goddess Robe (Kain Dewi Tiruan)",jumlah:"x3",spina:0,monster:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Dark Castle: Grand Hall (Istana Gelap: Aula Besar)"},{id:35,slot:"70 ➔ 71",nama_item:"Floating Cloth (Kain Apung)",jumlah:"x10",spina:0,monster:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cradle of Soldier (Buaian Prajurit)"},{id:36,slot:"70 ➔ 71",nama_item:"Soft Paw (Tapak Lembut)",jumlah:"x20",spina:0,monster:"Bunny Summoner / Lapin (Dukun Lapin)",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Trace of Dark River (Sungai Kegelapan)"},{id:37,slot:"71 ➔ 72",nama_item:"Evil Beast Mane (Surai Hewan Iblis)",jumlah:"x3",spina:0,monster:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Dark Castle: Area 2 (Istana Gelap: Area 2)"},{id:38,slot:"71 ➔ 72",nama_item:"Hard Paw Pad (Bantalan Tapak Keras)",jumlah:"x10",spina:0,monster:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:39,slot:"71 ➔ 72",nama_item:"Dark Shadow Feather (Bulu Bayangan Hitam)",jumlah:"x20",spina:0,monster:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:40,slot:"72 ➔ 73",nama_item:"Spina",jumlah:"-",spina:32e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:41,slot:"73 ➔ 74",nama_item:"Tapir Fur (Bulu Tapir)",jumlah:"x3",spina:0,monster:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:42,slot:"73 ➔ 74",nama_item:"Stiff Fur (Bulu Kaku)",jumlah:"x10",spina:0,monster:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:43,slot:"73 ➔ 74",nama_item:"Anti-Rust Oil (Minyak Anti-Karat)",jumlah:"x20",spina:0,monster:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Artillery Defense Line (Garis Pertahanan Artileri Otomatis)"},{id:44,slot:"74 ➔ 75",nama_item:"Ancient Fabric (Kain Kuno)",jumlah:"x3",spina:0,monster:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Singolare Ruins: 3rd Floor (Reruntuhan Singolare: Lantai 3)"},{id:45,slot:"74 ➔ 75",nama_item:"Soft Tree Bark (Kulit Pohon Lunak)",jumlah:"x10",spina:0,monster:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Site of Simscracker (Situs Simcracker)"},{id:46,slot:"74 ➔ 75",nama_item:"Dirty Potum Hair (Rambut Potum Kotor)",jumlah:"x20",spina:0,monster:"Slum Potum",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Klaspe Slum (Klaspe Kumuh)"},{id:47,slot:"75 ➔ 76",nama_item:"Crimson Huge Bone (Tulang Raksasa Merah)",jumlah:"x3",spina:0,monster:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil: Area 2)"},{id:48,slot:"75 ➔ 76",nama_item:"Torn Black Coat (Mantel Hitam Sobek)",jumlah:"x10",spina:0,monster:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:49,slot:"75 ➔ 76",nama_item:"Torn Chain (Rantai Putus)",jumlah:"x20",spina:0,monster:"Torture Machina (Machina Penyiksa)",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:50,slot:"76 ➔ 77",nama_item:"Chimera Scale (Sisik Chimera)",jumlah:"x3",spina:0,monster:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar: Bagian Terdalam)"},{id:51,slot:"76 ➔ 77",nama_item:"Mysterious Luminary (Benda Pendar Aneh)",jumlah:"x10",spina:0,monster:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:52,slot:"76 ➔ 77",nama_item:"Tough Tentacle (Tentakel Tangguh)",jumlah:"x20",spina:0,monster:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:53,slot:"77 ➔ 78",nama_item:"Spina",jumlah:"-",spina:64e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:54,slot:"78 ➔ 79",nama_item:"Forest Spirit Robe (Jubah Roh Hutan)",jumlah:"x3",spina:0,monster:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Monster Forest: Deep Part (Hutan Monster: Bagian Dalam)"},{id:55,slot:"78 ➔ 79",nama_item:"Plant Fang (Taring Tanaman)",jumlah:"x10",spina:0,monster:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Monster Forest (Hutan Monster)"},{id:56,slot:"78 ➔ 79",nama_item:"Felt Fabric (Kain Felt)",jumlah:"x20",spina:0,monster:"Puppet Dragon (Naga Boneka)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lufenas Mansion (Mansion Lufenas)"},{id:57,slot:"79 ➔ 80",nama_item:"Lyark Alloy (Aloi Lyark)",jumlah:"x3",spina:0,monster:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Cuervo Jail: Roof (Penjara Cuervo: Atap)"},{id:58,slot:"79 ➔ 80",nama_item:"Torn Officer Clothes (Baju Penjaga Robek)",jumlah:"x10",spina:0,monster:"Lyark Jailer (Sipir Lyark)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cuervo Jail (Penjara Cuervo)"},{id:59,slot:"79 ➔ 80",nama_item:"Ox Fabric (Kain Lembu)",jumlah:"x20",spina:0,monster:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Brahe Laboratory (Laboratorium Brahe)"},{id:60,slot:"80 ➔ 81",nama_item:"Light Emitting Cloth (Kain Bercahaya)",jumlah:"x4",spina:0,monster:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Buried Tower: Inside (Menara Penembus Bumi: Sisi Dalam)"},{id:61,slot:"80 ➔ 81",nama_item:"Damaged Artificial Leather (Kulit Sintetis Rusak)",jumlah:"x20",spina:0,monster:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:62,slot:"80 ➔ 81",nama_item:"Executioner Loincloth (Cawat Pengeksekusi)",jumlah:"x20",spina:0,monster:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:63,slot:"81 ➔ 82",nama_item:"Lil Empress Cloth Piece (Potongan Baju K. Kecil)",jumlah:"x4",spina:0,monster:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ultimea Palace: Throne (Istana Ultimea: Takhta)"},{id:64,slot:"81 ➔ 82",nama_item:"Hard Armor Bit (Pecahan Zirah Keras)",jumlah:"x20",spina:0,monster:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Ultimea Palace (Istana Ultimea)"},{id:65,slot:"81 ➔ 82",nama_item:"Snake Skin (Kulit Ular)",jumlah:"x20",spina:0,monster:"Pond Snake (Ular Kolam)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Copia Reservoirs (Reservoir Copia)"},{id:66,slot:"82 ➔ 83",nama_item:"Spina",jumlah:"-",spina:1e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:67,slot:"83 ➔ 84",nama_item:"Mom Fluck Skin (Kulit Mama Fluck)",jumlah:"x4",spina:0,monster:"Mom Fluck (Mama Fluck)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Forgotten Cave (Gua Pelupa)"},{id:68,slot:"83 ➔ 84",nama_item:"Colon Big Leaf (Daun Besar Colon)",jumlah:"x20",spina:0,monster:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Rokoko Plains (Dataran Rakoko)"},{id:69,slot:"83 ➔ 84",nama_item:"Vertical Stripe Fur (Bulu Garis Vertikal)",jumlah:"x20",spina:0,monster:"Tehon (Rakun Tambun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Curonne Forest (Hutan Currone)"},{id:70,slot:"84 ➔ 85",nama_item:"Mardula Spiritual Cloth (Kain Rohani Mardula)",jumlah:"x4",spina:0,monster:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Hall of Blessings Gods (Serambi Dewa Berkah)"},{id:71,slot:"84 ➔ 85",nama_item:"Mysterious Shiny Cloth (Kain Berkilau Misterius)",jumlah:"x20",spina:0,monster:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:72,slot:"84 ➔ 85",nama_item:"Grey Feather (Bulu Kelabu)",jumlah:"x20",spina:0,monster:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Ruins of Mt. Mithurna (Reruntuhan G. Mithurna)"},{id:73,slot:"85 ➔ 86",nama_item:"Carbuncle Fur (Mantel Carbuncle)",jumlah:"x4",spina:0,monster:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Hall of Construction Gods (Serambi Dewa Pembangunan)"},{id:74,slot:"85 ➔ 86",nama_item:"Knit Fabric (Kain Rajut)",jumlah:"x20",spina:0,monster:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Heresy Corridor (Koridor Heresi)"},{id:75,slot:"85 ➔ 86",nama_item:"Bag Bear Tail (Ekor Beruang Berkantong)",jumlah:"x20",spina:0,monster:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:76,slot:"86 ➔ 87",nama_item:"King Piton Fur (Bulu Raja Piton)",jumlah:"x4",spina:0,monster:"King Piton (Raja Piton)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Elf Mountains: Shrine (Pegunungan Elf: Kuil)"},{id:77,slot:"86 ➔ 87",nama_item:"Thick White Fur (Bulu Putih Lebat)",jumlah:"x20",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Garden of Ice & Snow (Taman Es & Salju)"},{id:78,slot:"86 ➔ 87",nama_item:"Stiff Grey Fur (Bulu Abu Kaku)",jumlah:"x20",spina:0,monster:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:79,slot:"87 ➔ 88",nama_item:"Ancient Ingot (Ingot Kuno)",jumlah:"x4",spina:0,monster:"Thug Golem (Golem Preman)",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi:"Dark Dragon Shrine: Middle (Kuil Naga Kegelapan: Tengah)"},{id:80,slot:"87 ➔ 88",nama_item:"Ice Wolf Fang (Taring Serigala Es)",jumlah:"x20",spina:0,monster:"Courloup (Serigala Tanduk)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:81,slot:"87 ➔ 88",nama_item:"Dusky Fabric (Kain Gelap)",jumlah:"x20",spina:0,monster:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Dragon Shrine (Kuil Naga Kegelapan)"},{id:82,slot:"88 ➔ 89",nama_item:"Spina",jumlah:"-",spina:2e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:83,slot:"89 ➔ 90",nama_item:"Tuscog Fang (Taring Tuscog)",jumlah:"x4",spina:0,monster:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:84,slot:"89 ➔ 90",nama_item:"Larva Silk (Sutra Ulat)",jumlah:"x20",spina:0,monster:"Moss Mole (Tikus Lumut)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Forest of Ein (Hutan Ein)"},{id:85,slot:"89 ➔ 90",nama_item:"Werewolf Fur (Taring Manusia Serigala)",jumlah:"x20",spina:0,monster:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:86,slot:"90 ➔ 91",nama_item:"Kuzto Splinter (Serpihan Kayu Kuzto)",jumlah:"x4",spina:0,monster:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi:"Labilans Sector: Square (Distrik Labilans: Alun-alun)"},{id:87,slot:"90 ➔ 91",nama_item:"Stoat Fur (Bulu Cerpelai)",jumlah:"x20",spina:0,monster:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fabriska Sector (Distrik Fabriska)"},{id:88,slot:"90 ➔ 91",nama_item:"Mysterious Waist Sash (Sabuk Pinggang Misterius)",jumlah:"x30",spina:0,monster:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fractum Sector (Distrik Fractum)"},{id:89,slot:"91 ➔ 92",nama_item:"Crystal Pouch (Kantong Kristal)",jumlah:"x5",spina:0,monster:"Canemofish (Nemopirania)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:90,slot:"91 ➔ 92",nama_item:"Cushy Tail (Ekor Lembu)",jumlah:"x20",spina:0,monster:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Labilans Sector (Distrik Labilans)"},{id:91,slot:"91 ➔ 92",nama_item:"Sturdy Papula (Papula Kuat)",jumlah:"x30",spina:0,monster:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:92,slot:"92 ➔ 93",nama_item:"Repthon Wings (Sayap Repthon)",jumlah:"x5",spina:0,monster:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone: Deepest Area (Zona Riset Deltzon: Area Terdalam)"},{id:93,slot:"92 ➔ 93",nama_item:"Legume Button (Kancing Polong)",jumlah:"x20",spina:0,monster:"Marquis Colon (Colon Marquis)",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Old Lufenas Mansion Ruins (Reruntuhan Mansion Lufenas Tua)"},{id:94,slot:"92 ➔ 93",nama_item:"Frock Coat Scrap (Kain Perca Jas Panjang)",jumlah:"x30",spina:0,monster:"Swirly Whirly (Gulingkar)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone (Zona Riset Deltzon)"},{id:95,slot:"93 ➔ 94",nama_item:"Empress Ogre Hair (Rambut Kaisar Siluman)",jumlah:"x5",spina:0,monster:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item:"Torn Red Cloth (Kain Merah Sobek)",jumlah:"x20",spina:0,monster:"Sand Bandits Potum (Potum Bandit Gurun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Geist Desert (Gurun Pasir Geist)"},{id:97,slot:"93 ➔ 94",nama_item:"Corroded Leather (Kulit Karatan)",jumlah:"x30",spina:0,monster:"Cabrigo (Jasman)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ruins of Urban Elban (Reruntuhan Elban Urban)"},{id:98,slot:"94 ➔ 95",nama_item:"Spina",jumlah:"-",spina:3e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:99,slot:"95 ➔ 96",nama_item:"Pisteus Bone (Tulang Pisteus)",jumlah:"x5",spina:0,monster:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Ducia Coast: Depths (Pesisir Ducia: Area Terdalam)"},{id:100,slot:"95 ➔ 96",nama_item:"Phantom Cloth (Kain Phantom)",jumlah:"x20",spina:0,monster:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lunagent Cliff Base (Dasar Tebing Lunagent)"},{id:101,slot:"95 ➔ 96",nama_item:"Sea Otter Fur (Bulu Berang-Berang Laut)",jumlah:"x30",spina:0,monster:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ducia Coast (Pesisir Ducia)"},{id:102,slot:"96 ➔ 97",nama_item:"Arachnidemon Wing (Sayap Arachnidemon)",jumlah:"x5",spina:0,monster:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Arche Valley: Depths (Lembah Arche: Area Terdalam)"},{id:103,slot:"96 ➔ 97",nama_item:"Metal Shackles (Belenggu Logam)",jumlah:"x20",spina:0,monster:"Bessy (Besy) / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi:"Arche Valley (Lembah Arche)"},{id:104,slot:"96 ➔ 97",nama_item:"Weird Snake Skin (Kulit Ular Aneh)",jumlah:"x30",spina:0,monster:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rokoko City Ruins (Reruntuhan Kota Rokoko) / Nezim Wetlands"},{id:105,slot:"97 ➔ 98",nama_item:"Slimy Hide (Jangat Berlendir)",jumlah:"x5",spina:0,monster:"Lord of Nezim (Datuk Nezim)",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:106,slot:"97 ➔ 98",nama_item:"Enty Cloth (Kain Enty)",jumlah:"x20",spina:0,monster:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:107,slot:"97 ➔ 98",nama_item:"Sturdy Core (Poros Kokoh)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:108,slot:"98 ➔ 99",nama_item:"Inferno Curse Cloth Scrap (Perca Gendam Geni)",jumlah:"x5",spina:0,monster:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Witch's Woods Depths (Rimba Penyihir: Area Terdalam)"},{id:109,slot:"98 ➔ 99",nama_item:"Kappa's Plate (Piring Kappa)",jumlah:"x20",spina:0,monster:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:110,slot:"98 ➔ 99",nama_item:"Crow Feather (Bulu Gagak)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:111,slot:"99 ➔ 100",nama_item:"Wriggling Latebra (Inti Latebra Menggeliat)",jumlah:"x5",spina:0,monster:"Trocostida (Trokostida)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item:"Viscous Liquid (Cairan Lekat)",jumlah:"x20",spina:0,monster:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item:"Bizarre Skin (Kulit Pelik)",jumlah:"x30",spina:0,monster:"Evil Eye (Mata Jahat) / Demonic Eye",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Morga Wasteland (Padang Morga)"}],k0={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},v0={class:"relative z-10 text-center md:text-left"},x0={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},y0={class:"flex items-center gap-2 select-none whitespace-nowrap"},M0={class:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"},D0={class:"text-[10px] md:text-xs font-black opacity-80 uppercase tracking-widest"},w0={class:"text-3xl md:text-5xl font-black italic mt-1 leading-none"},P0={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},S0={class:"relative"},C0={class:"relative group"},T0={class:"relative"},R0={class:"relative group"},E0={class:"relative"},I0={class:"relative group"},N0=["value"],_0={class:"hidden lg:block overflow-x-auto no-scrollbar"},L0={class:"w-full min-w-[1100px] border-collapse"},O0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},K0={class:"font-black text-blue-500 italic text-3xl"},B0={class:"p-8 font-black uppercase text-base border-r-[2px] border-lime-500/10"},j0={class:"p-8 text-center bg-black/5 border-r-[2px] border-lime-500/10"},G0={class:"font-black italic text-lime-600 text-5xl"},U0={class:"p-8 text-center font-black text-xl text-amber-600 border-r-[2px] border-lime-500/10"},H0={class:"p-8 text-[11px] font-bold uppercase opacity-60 border-r-[2px] border-lime-500/10"},F0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},J0={class:"p-8 font-black text-xl italic text-blue-600 uppercase tracking-tighter"},V0={class:"flex justify-between items-start"},z0={class:"flex-1 pr-4"},W0={class:"text-[10px] font-black text-blue-500 mb-1"},Q0={class:"text-4xl font-black italic text-lime-600"},q0={class:"border-l-[2px] pl-3 border-slate-300/30"},Y0={class:"text-xl font-black block mt-1"},X0={class:"space-y-3"},Z0={class:"flex items-center gap-3"},$0={class:"flex-1"},ed={class:"text-xs font-black uppercase text-indigo-500"},td={class:"flex items-center gap-3"},nd={class:"flex-1"},ad={class:"text-sm font-black italic text-blue-600 uppercase"},id={class:"flex flex-col gap-8 justify-center items-center pb-20"},ld={key:0,class:"flex flex-wrap justify-center items-center gap-2"},sd=["disabled"],od={key:0,class:"text-blue-600 font-black px-2"},rd=["onClick"],cd=["disabled"],ud={__name:"ListBag",props:["isDark"],setup(e){const t=se(""),n=se("All Class"),a=se("All Slot"),i=se(1),l=se(10),o=()=>{l.value===10?l.value=c.value.length:l.value=10,i.value=1},r=A=>{if(!A||A==="-")return"-";let b=A.toString().replace(/x/gi,"").trim();return b==="0"||b===""?"-":b},c=ae(()=>Qn.filter(b=>{const x=t.value.toLowerCase(),T=b.kelas_mob||"",R=!t.value||b.nama_item?.toLowerCase().includes(x)||b.monster?.toLowerCase().includes(x)||b.lokasi?.toLowerCase().includes(x);let S=!0;n.value!=="All Class"&&(n.value==="Mob"?S=T==="Mob"||T==="Miniboss/Mob":n.value==="Miniboss"?S=T==="Miniboss"||T==="Miniboss/Mob":S=T===n.value);const J=a.value==="All Slot"||String(b.slot).includes(String(a.value));return R&&S&&J}).sort((b,x)=>{const T=parseInt(String(b.slot).match(/\d+/))||0,R=parseInt(String(x.slot).match(/\d+/))||0;return T-R}));kt([t,n,a],()=>{i.value=1});const p=ae(()=>Math.ceil(c.value.length/l.value)||1),u=ae(()=>{const A=p.value,b=i.value;if(A<=5)return Array.from({length:A},(T,R)=>R+1);let x=[];return b<=3?x=[1,2,3,"...",A]:b>=A-2?x=[1,"...",A-2,A-1,A]:x=[1,"...",b,"...",A],x}),d=ae(()=>{const A=(i.value-1)*l.value;return c.value.slice(A,A+l.value)}),g=ae(()=>[...new Set(Qn.map(b=>b.slot))].sort((b,x)=>(parseInt(b)||0)-(parseInt(x)||0))),h=ae(()=>[{label:"ALL ITEM",val:Qn.length,grad:"from-blue-700 to-blue-500"},{label:"RESULTS",val:c.value.length,grad:"from-fuchsia-600 to-purple-600"},{label:"BOSS",val:Qn.filter(A=>A.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600"},{label:"SLOTS",val:g.value.length,grad:"from-lime-500 to-emerald-600"}]),M=A=>{const b="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return A==="Mob"?b+"bg-green-500/10 text-green-500 border-green-500/50":A==="Miniboss/Mob"?b+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":A==="Miniboss"?b+"bg-purple-500/10 text-purple-500 border-purple-500/50":A==="Boss"?b+"bg-red-500/10 text-red-500 border-red-500/50":A==="Spina"?b+"bg-amber-500/10 text-amber-500 border-amber-500/50":b+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(A,b)=>(E(),N("div",{class:y(["bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans relative z-10",e.isDark?"text-white":"text-slate-900"])},[s("div",k0,[s("div",{class:y(["relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[b[8]||(b[8]=s("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[s("img",{src:b0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),s("div",v0,[s("h2",{class:y(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[...b[5]||(b[5]=[Ge(" LIST BAG",-1),s("br",null,null,-1),s("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},"EXPANSION",-1)])],2),s("div",x0,[b[7]||(b[7]=s("div",{class:"flex items-center gap-3"},[s("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),s("img",{src:xa,class:"h-8 md:h-12 w-auto object-contain"})],-1)),s("div",y0,[s("span",{class:y(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),b[6]||(b[6]=s("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),s("div",M0,[(E(!0),N(Y,null,ge(h.value,x=>(E(),N("div",{key:x.label,class:y(["p-6 rounded-[2rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white",x.grad,e.isDark?"border-white/20":"border-black/5"])},[s("div",D0,K(x.label),1),s("div",w0,K(x.val),1)],2))),128))]),s("div",{class:y(["p-6 md:p-8 rounded-[2.5rem] border-[4px] backdrop-blur-xl shadow-2xl transition-all",e.isDark?"bg-black/40 border-indigo-500/50":"bg-white/80 border-indigo-600 shadow-indigo-100"])},[s("div",P0,[s("div",S0,[b[10]||(b[10]=s("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Search Item",-1)),s("div",C0,[xe(s("input",{"onUpdate:modelValue":b[0]||(b[0]=x=>t.value=x),type:"text",placeholder:"Find items...",class:y(["w-full h-14 pl-14 pr-6 rounded-2xl border-[3px] font-bold outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},null,2),[[Qe,t.value]]),b[9]||(b[9]=s("div",{class:"absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"11",cy:"11",r:"8"}),s("path",{d:"m21 21-4.3-4.3"})])],-1))])]),s("div",T0,[b[13]||(b[13]=s("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Category",-1)),s("div",R0,[xe(s("select",{"onUpdate:modelValue":b[1]||(b[1]=x=>n.value=x),class:y(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[...b[11]||(b[11]=[s("option",null,"All Class",-1),s("option",null,"Mob",-1),s("option",null,"Miniboss",-1),s("option",null,"Boss",-1),s("option",null,"Spina",-1)])],2),[[xt,n.value]]),b[12]||(b[12]=cn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><rect width="7" height="7" x="3" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="14" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="3" y="14" rx="1" data-v-b5293da0></rect></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])]),s("div",E0,[b[16]||(b[16]=s("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Jump to Slot",-1)),s("div",I0,[xe(s("select",{"onUpdate:modelValue":b[2]||(b[2]=x=>a.value=x),class:y(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[b[14]||(b[14]=s("option",null,"All Slot",-1)),(E(!0),N(Y,null,ge(g.value,x=>(E(),N("option",{key:x,value:x},"Slot "+K(x),9,N0))),128))],2),[[xt,a.value]]),b[15]||(b[15]=cn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><circle cx="12" cy="12" r="10" data-v-b5293da0></circle><line x1="12" y1="8" x2="12" y2="16" data-v-b5293da0></line><line x1="8" y1="12" x2="16" y2="12" data-v-b5293da0></line></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])])])],2),s("div",{class:y(["border-[4px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80 shadow-lime-100"])},[s("div",_0,[s("table",L0,[s("thead",null,[s("tr",{class:y(["uppercase text-[10px] font-black tracking-widest border-b-[3px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[...b[17]||(b[17]=[s("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Slot",-1),s("th",{class:"p-8 w-[20%] text-left border-r-[2px] border-lime-500/20"},"Item Name",-1),s("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Total Need",-1),s("th",{class:"p-8 w-[15%] text-center border-r-[2px] border-lime-500/20"},"Spina Cost",-1),s("th",{class:"p-8 w-[15%] text-left border-r-[2px] border-lime-500/20"},"Source",-1),s("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Type",-1),s("th",{class:"p-8 w-[20%] text-left"},"Location",-1)])],2)]),s("tbody",{class:y(["divide-y-[2px]",e.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(E(!0),N(Y,null,ge(d.value,x=>(E(),N("tr",{key:x.id,class:"hover:bg-indigo-500/5 transition-all group"},[s("td",O0,[s("span",K0,K(x.slot),1)]),s("td",B0,K(x.nama_item),1),s("td",j0,[s("span",G0,K(r(x.jumlah)),1)]),s("td",U0,K(x.spina>0?Number(x.spina).toLocaleString():"-"),1),s("td",H0,K(x.monster||"-"),1),s("td",F0,[s("span",{class:y(M(x.kelas_mob))},K(x.kelas_mob),3)]),s("td",J0,K(x.lokasi),1)]))),128))],2)])]),s("div",{class:y(["lg:hidden divide-y-[3px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(E(!0),N(Y,null,ge(d.value,x=>(E(),N("div",{key:x.id,class:"p-6 space-y-4"},[s("div",V0,[s("div",z0,[s("div",W0,"SLOT "+K(x.slot),1),s("h3",{class:y(["font-black uppercase text-xl leading-tight",e.isDark?"text-white":"text-slate-900"])},K(x.nama_item),3)]),s("div",{class:y([M(x.kelas_mob),"!min-w-fit !px-2"])},K(x.kelas_mob),3)]),s("div",{class:y(["grid grid-cols-2 gap-3 border-[3px] p-4 rounded-2xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[s("div",null,[b[18]||(b[18]=s("span",{class:"text-[9px] font-black text-lime-600 uppercase block"},"Need",-1)),s("span",Q0,K(r(x.jumlah)),1)]),s("div",q0,[b[19]||(b[19]=s("span",{class:"text-[9px] font-black text-amber-600 uppercase block"},"Cost",-1)),s("span",Y0,K(x.spina>0?Number(x.spina).toLocaleString():"-"),1)])],2),s("div",X0,[s("div",Z0,[b[21]||(b[21]=cn('<div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-indigo-500" data-v-b5293da0><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" data-v-b5293da0></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-b5293da0></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-b5293da0></line></svg></div>',1)),s("div",$0,[b[20]||(b[20]=s("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Drop From:",-1)),s("span",ed,K(x.monster||"-"),1)])]),s("div",td,[b[23]||(b[23]=s("div",{class:"w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3",class:"text-red-500"},[s("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),s("circle",{cx:"12",cy:"10",r:"3"})])],-1)),s("div",nd,[b[22]||(b[22]=s("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Map:",-1)),s("span",ad,K(x.lokasi),1)])])])]))),128))],2)],2),s("div",id,[p.value>1?(E(),N("div",ld,[s("button",{onClick:b[3]||(b[3]=x=>i.value--),disabled:i.value===1,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," « ",8,sd),(E(!0),N(Y,null,ge(u.value,(x,T)=>(E(),N(Y,{key:T},[x==="..."?(E(),N("span",od,"...")):(E(),N("button",{key:1,onClick:R=>i.value=x,class:y(["h-12 w-12 rounded-xl border-[3px] font-black transition-all active:scale-90",i.value===x?"bg-blue-600 border-blue-600 text-white shadow-lg":e.isDark?"bg-black/40 border-blue-800 text-blue-400":"bg-white border-blue-200 text-blue-600"])},K(x),11,rd))],64))),128)),s("button",{onClick:b[4]||(b[4]=x=>i.value++),disabled:i.value===p.value,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," » ",8,cd)])):Ne("",!0),s("button",{onClick:o,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:brightness-110 active:scale-95 transition-all shadow-xl"},K(l.value===10?"Explore All Database":"Collapse to 10 Rows"),1)])])],2))}},dd=Xt(ud,[["__scopeId","data-v-b5293da0"]]),pd="/toram-vue/images/mq.png",si=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],gd=()=>[...new Set(si.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),fd={class:"bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans"},md={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},hd={class:"relative z-10 text-center md:text-left"},Ad={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},bd={class:"flex items-center gap-2 select-none whitespace-nowrap"},kd={class:"grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"},vd={class:"text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mb-1"},xd={class:"text-3xl md:text-6xl font-black italic tracking-tighter leading-none"},yd={class:"flex flex-col gap-2"},Md={class:"flex flex-col gap-2"},Dd=["value"],wd={class:"hidden lg:block overflow-x-auto"},Pd={class:"w-full border-collapse"},Sd={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},Cd={class:"p-8 text-center bg-black/5"},Td={class:"font-black italic text-5xl text-indigo-600"},Rd={class:"flex justify-between items-center"},Ed={class:"text-2xl font-black italic text-indigo-500/30"},Id={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},Nd={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},_d={class:"text-right"},Ld={class:"text-4xl font-black italic text-indigo-600"},Od={class:"flex flex-col gap-6 justify-center items-center pb-20"},Kd={key:0,class:"flex flex-wrap justify-center items-center gap-2"},Bd=["disabled"],jd={key:0,class:"text-indigo-500 font-black px-2"},Gd=["onClick"],Ud=["disabled"],Hd={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=go(),i=Ci(),l=se(a.query.search||""),o=se(a.query.chapter||"Semua Chapter"),r=se(parseInt(a.query.page)||1),c=se(parseInt(a.query.per_page)||10),p=gd(),u=ae(()=>si.filter(T=>{const R=l.value.toLowerCase(),S=T.nama_item.toLowerCase().includes(R)||T.chapter.toLowerCase().includes(R),J=o.value==="Semua Chapter"||T.chapter===o.value;return S&&J})),d=ae(()=>Math.ceil(u.value.length/c.value)||1),g=ae(()=>{const T=(r.value-1)*c.value;return u.value.slice(T,T+c.value)}),h=()=>{c.value===10?c.value=u.value.length:c.value=10,r.value=1,M()},M=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:o.value!=="Semua Chapter"?o.value:void 0,per_page:c.value,page:r.value}})},A=T=>{T>=1&&T<=d.value&&(r.value=T,M())};kt([l,o],()=>{r.value=1,M()});const b=ae(()=>{const T=d.value,R=r.value;if(T<=5)return Array.from({length:T},(J,ne)=>ne+1);let S=[];return R<=3?S=[1,2,3,"...",T]:R>=T-2?S=[1,"...",T-2,T-1,T]:S=[1,"...",R,"...",T],S}),x=ae(()=>[{label:"ALL ITEM",val:si.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:p.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:p.length>0?p[p.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]);return(T,R)=>(E(),N("div",fd,[s("div",md,[s("div",{class:y(["relative p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-[4px] shadow-2xl overflow-hidden backdrop-blur-xl transition-all",n.isDark?"border-indigo-500 bg-black/40":"border-indigo-600 bg-white/70 shadow-indigo-100"])},[R[7]||(R[7]=s("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[s("img",{src:pd,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),s("div",hd,[s("h2",{class:y(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[...R[4]||(R[4]=[Ge(" MAIN QUEST",-1),s("br",null,null,-1),s("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),s("div",Ad,[R[6]||(R[6]=s("div",{class:"flex items-center gap-3"},[s("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),s("img",{src:xa,class:"h-8 md:h-12 w-auto object-contain"})],-1)),s("div",bd,[s("span",{class:y(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),R[5]||(R[5]=s("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),s("div",kd,[(E(!0),N(Y,null,ge(x.value,S=>(E(),N("div",{key:S.label,class:y(["aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] border-white/20 shadow-xl text-white bg-gradient-to-br transition-all hover:scale-105 active:scale-95",S.grad])},[s("span",vd,K(S.label),1),s("span",xd,K(S.val),1)],2))),128))]),s("div",{class:y(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[s("div",yd,[R[8]||(R[8]=s("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),xe(s("input",{"onUpdate:modelValue":R[0]||(R[0]=S=>l.value=S),type:"text",placeholder:"Find MQ item...",class:y(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[Qe,l.value]])]),s("div",Md,[R[10]||(R[10]=s("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),xe(s("select",{"onUpdate:modelValue":R[1]||(R[1]=S=>o.value=S),class:y(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[R[9]||(R[9]=s("option",{value:"Semua Chapter"},"All Chapter",-1)),(E(!0),N(Y,null,ge(Ze(p),S=>(E(),N("option",{key:S,value:S},K(S),9,Dd))),128))],2),[[xt,o.value]])])],2),s("div",{class:y(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[s("div",wd,[s("table",Pd,[s("thead",null,[s("tr",{class:y(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[s("th",{class:y(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),s("th",{class:y(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),s("th",{class:y(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),R[11]||(R[11]=s("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),s("tbody",{class:y(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(E(!0),N(Y,null,ge(g.value,(S,J)=>(E(),N("tr",{key:J,class:"hover:bg-indigo-500/5 transition-all"},[s("td",{class:y(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},K((r.value-1)*c.value+J+1),3),s("td",{class:y(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[s("span",Sd,K(S.chapter),1)],2),s("td",{class:y(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},K(S.nama_item),3),s("td",Cd,[s("span",Td,K(S.jumlah),1)])]))),128))],2)])]),s("div",{class:y(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(E(!0),N(Y,null,ge(g.value,(S,J)=>(E(),N("div",{key:J,class:"p-6 space-y-4"},[s("div",Rd,[s("span",Ed,"#"+K((r.value-1)*c.value+J+1),1),s("span",Id,K(S.chapter),1)]),s("div",{class:y(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[s("div",Nd,K(S.nama_item),1),s("div",_d,[R[12]||(R[12]=s("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),s("span",Ld,K(S.jumlah),1)])],2)]))),128))],2)],2),s("div",Od,[d.value>1?(E(),N("div",Kd,[s("button",{onClick:R[2]||(R[2]=S=>A(r.value-1)),disabled:r.value===1,class:y(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,Bd),(E(!0),N(Y,null,ge(b.value,(S,J)=>(E(),N(Y,{key:J},[S==="..."?(E(),N("span",jd,"...")):(E(),N("button",{key:1,onClick:ne=>A(S),class:y(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",r.value===S?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},K(S),11,Gd))],64))),128)),s("button",{onClick:R[3]||(R[3]=S=>A(r.value+1)),disabled:r.value===d.value,class:y(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,Ud)])):Ne("",!0),s("button",{onClick:h,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},K(c.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},Fd=Xt(Hd,[["__scopeId","data-v-fbb29068"]]),fo="data:application/octet-stream;base64,PHRlbXBsYXRlPgogIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICA8cGF0aAogICAgICBkPSJNMTUgNGExIDEgMCAxIDAgMCAyVjR6bTAgMTF2LTFhMSAxIDAgMCAwLTEgMWgxem0wIDRsLS43MDcuNzA3QTEgMSAwIDAgMCAxNiAxOWgtMXptLTQtNGwuNzA3LS43MDdBMSAxIDAgMCAwIDExIDE0djF6bS00LjcwNy0xLjI5M2ExIDEgMCAwIDAtMS40MTQgMS40MTRsMS40MTQtMS40MTR6bS0uNzA3LjcwN2wtLjcwNy0uNzA3LjcwNy43MDd6TTkgMTF2LTFhMSAxIDAgMCAwLS43MDcuMjkzTDkgMTF6bS00IDBoMWExIDEgMCAwIDAtMS0xdjF6bTAgNEg0YTEgMSAwIDAgMCAxLjcwNy43MDdMNSAxNXptMTAtOWgyVjRoLTJ2MnptMiAwYTEgMSAwIDAgMSAxIDFoMmEzIDMgMCAwIDAtMy0zdjJ6bTEgMXY2aDJWN2gtMnptMCA2YTEgMSAwIDAgMS0xIDF2MmEzIDMgMCAwIDAgMy0zaC0yem0tMSAxaC0ydjJoMnYtMnptLTMgMXY0aDJ2LTRoLTJ6bTEuNzA3IDMuMjkzbC00LTQtMS40MTQgMS40MTQgNCA0IDEuNDE0LTEuNDE0ek0xMSAxNEg3djJoNHYtMnptLTQgMGMtLjI3NiAwLS41MjUtLjExMS0uNzA3LS4yOTNsLTEuNDE0IDEuNDE0QzUuNDIgMTUuNjYzIDYuMTcyIDE2IDcgMTZ2LTJ6bS0uNzA3IDEuMTIxbDMuNDE0LTMuNDE0LTEuNDE0LTEuNDE0LTMuNDE0IDMuNDE0IDEuNDE0IDEuNDE0ek05IDEyaDR2LTJIOXYyem00IDBhMyAzIDAgMCAwIDMtM2gtMmExIDEgMCAwIDEtMSAxdjJ6bTMtM1YzaC0ydjZoMnptMC02YTMgMyAwIDAgMC0zLTN2MmExIDEgMCAwIDEgMSAxaDJ6bS0zLTNIM3YyaDEwVjB6TTMgMGEzIDMgMCAwIDAtMyAzaDJhMSAxIDAgMCAxIDEtMVYwek0wIDN2NmgyVjNIMHptMCA2YTMgMyAwIDAgMCAzIDN2LTJhMSAxIDAgMCAxLTEtMUgwem0zIDNoMnYtMkgzdjJ6bTEtMXY0aDJ2LTRINHptMS43MDcgNC43MDdsLjU4Ni0uNTg2LTEuNDE0LTEuNDE0LS41ODYuNTg2IDEuNDE0IDEuNDE0eiIKICAgIC8+CiAgPC9zdmc+CjwvdGVtcGxhdGU+Cg==",mo="data:application/octet-stream;base64,PHRlbXBsYXRlPgogIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMTciIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICA8cGF0aAogICAgICBkPSJNMTEgMi4yNTNhMSAxIDAgMSAwLTIgMGgyem0tMiAxM2ExIDEgMCAxIDAgMiAwSDl6bS40NDctMTIuMTY3YTEgMSAwIDEgMCAxLjEwNy0xLjY2Nkw5LjQ0NyAzLjA4NnpNMSAyLjI1M0wuNDQ3IDEuNDJBMSAxIDAgMCAwIDAgMi4yNTNoMXptMCAxM0gwYTEgMSAwIDAgMCAxLjU1My44MzNMMSAxNS4yNTN6bTguNDQ3LjgzM2ExIDEgMCAxIDAgMS4xMDctMS42NjZsLTEuMTA3IDEuNjY2em0wLTE0LjY2NmExIDEgMCAxIDAgMS4xMDcgMS42NjZMOS40NDcgMS40MnpNMTkgMi4yNTNoMWExIDEgMCAwIDAtLjQ0Ny0uODMzTDE5IDIuMjUzem0wIDEzbC0uNTUzLjgzM0ExIDEgMCAwIDAgMjAgMTUuMjUzaC0xem0tOS41NTMtLjgzM2ExIDEgMCAxIDAgMS4xMDcgMS42NjZMOS40NDcgMTQuNDJ6TTkgMi4yNTN2MTNoMnYtMTNIOXptMS41NTMtLjgzM0M5LjIwMy41MjMgNy40MiAwIDUuNSAwdjJjMS41NzIgMCAyLjk2MS40MzEgMy45NDcgMS4wODZsMS4xMDctMS42NjZ6TTUuNSAwQzMuNTggMCAxLjc5Ny41MjMuNDQ3IDEuNDJsMS4xMDcgMS42NjZDMi41MzkgMi40MzEgMy45MjggMiA1LjUgMlYwek0wIDIuMjUzdjEzaDJ2LTEzSDB6bTEuNTUzIDEzLjgzM0MyLjUzOSAxNS40MzEgMy45MjggMTUgNS41IDE1di0yYy0xLjkyIDAtMy43MDMuNTIzLTUuMDUzIDEuNDJsMS4xMDcgMS42NjZ6TTUuNSAxNWMxLjU3MiAwIDIuOTYxLjQzMSAzLjk0NyAxLjA4NmwxLjEwNy0xLjY2NkM5LjIwMyAxMy41MjMgNy40MiAxMyA1LjUgMTN2MnptNS4wNTMtMTEuOTE0QzExLjUzOSAyLjQzMSAxMi45MjggMiAxNC41IDJWMGMtMS45MiAwLTMuNzAzLjUyMy01LjA1MyAxLjQybDEuMTA3IDEuNjY2ek0xNC41IDJjMS41NzMgMCAyLjk2MS40MzEgMy45NDcgMS4wODZsMS4xMDctMS42NjZDMTguMjAzLjUyMyAxNi40MjEgMCAxNC41IDB2MnptMy41LjI1M3YxM2gydi0xM2gtMnptMS41NTMgMTIuMTY3QzE4LjIwMyAxMy41MjMgMTYuNDIxIDEzIDE0LjUgMTN2MmMxLjU3MyAwIDIuOTYxLjQzMSAzLjk0NyAxLjA4NmwxLjEwNy0xLjY2NnpNMTQuNSAxM2MtMS45MiAwLTMuNzAzLjUyMy01LjA1MyAxLjQybDEuMTA3IDEuNjY2QzExLjUzOSAxNS40MzEgMTIuOTI4IDE1IDE0LjUgMTV2LTJ6IgogICAgLz4KICA8L3N2Zz4KPC90ZW1wbGF0ZT4K",ho="data:application/octet-stream;base64,PHRlbXBsYXRlPgogIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICA8cGF0aAogICAgICBkPSJNMTEuNDQ3IDguODk0YTEgMSAwIDEgMC0uODk0LTEuNzg5bC44OTQgMS43ODl6bS0yLjg5NC0uNzg5YTEgMSAwIDEgMCAuODk0IDEuNzg5bC0uODk0LTEuNzg5em0wIDEuNzg5YTEgMSAwIDEgMCAuODk0LTEuNzg5bC0uODk0IDEuNzg5ek03LjQ0NyA3LjEwNmExIDEgMCAxIDAtLjg5NCAxLjc4OWwuODk0LTEuNzg5ek0xMCA5YTEgMSAwIDEgMC0yIDBoMnptLTIgMi41YTEgMSAwIDEgMCAyIDBIOHptOS40NDctNS42MDZhMSAxIDAgMSAwLS44OTQtMS43ODlsLjg5NCAxLjc4OXptLTIuODk0LS43ODlhMSAxIDAgMSAwIC44OTQgMS43ODlsLS44OTQtMS43ODl6bTIgLjc4OWExIDEgMCAxIDAgLjg5NC0xLjc4OWwtLjg5NCAxLjc4OXptLTEuMTA2LTIuNzg5YTEgMSAwIDEgMC0uODk0IDEuNzg5bC44OTQtMS43ODl6TTE4IDVhMSAxIDAgMSAwLTIgMGgyem0tMiAyLjVhMSAxIDAgMSAwIDIgMGgtMnptLTUuNDQ3LTQuNjA2YTEgMSAwIDEgMCAuODk0LTEuNzg5bC0uODk0IDEuNzg5ek05IDFsLjQ0Ny0uODk0YTEgMSAwIDAgMC0uODk0IDBMOSAxem0tMi40NDcuMTA2YTEgMSAwIDEgMCAuODk0IDEuNzg5bC0uODk0LTEuNzg5em0tNiAzYTEgMSAwIDEgMCAuODk0IDEuNzg5TC41NTMgNC4xMDZ6bTIuODk0Ljc4OWExIDEgMCAxIDAtLjg5NC0xLjc4OWwuODk0IDEuNzg5em0tMi0uNzg5YTEgMSAwIDEgMC0uODk0IDEuNzg5bC44OTQtMS43ODl6bTEuMTA2IDIuNzg5YTEgMSAwIDEgMCAuODk0LTEuNzg5bC0uODk0IDEuNzg5ek0yIDVhMSAxIDAgMSAwLTIgMGgyek0wIDcuNWExIDEgMCAxIDAgMiAwSDB6bTguNTUzIDEyLjM5NGExIDEgMCAxIDAgLjg5NC0xLjc4OWwtLjg5NCAxLjc4OXptLTEuMTA2LTIuNzg5YTEgMSAwIDEgMC0uODk0IDEuNzg5bC44OTQtMS43ODl6bTEuMTA2IDFhMSAxIDAgMSAwIC44OTQgMS43ODlsLS44OTQtMS43ODl6bTIuODk0Ljc4OWExIDEgMCAxIDAtLjg5NC0xLjc4OWwuODk0IDEuNzg5ek04IDE5YTEgMSAwIDEgMCAyIDBIOHptMi0yLjVhMSAxIDAgMSAwLTIgMGgyem0tNy40NDcuMzk0YTEgMSAwIDEgMCAuODk0LTEuNzg5bC0uODk0IDEuNzg5ek0xIDE1SDBhMSAxIDAgMCAwIC41NTMuODk0TDEgMTV6bTEtMi41YTEgMSAwIDEgMC0yIDBoMnptMTIuNTUzIDIuNjA2YTEgMSAwIDEgMCAuODk0IDEuNzg5bC0uODk0LTEuNzg5ek0xNyAxNWwuNDQ3Ljg5NEExIDEgMCAwIDAgMTggMTVoLTF6bTEtMi41YTEgMSAwIDEgMC0yIDBoMnptLTcuNDQ3LTUuMzk0bC0yIDEgLjg5NCAxLjc4OSAyLTEtLjg5NC0xLjc4OXptLTEuMTA2IDFsLTItMS0uODk0IDEuNzg5IDIgMSAuODk0LTEuNzg5ek04IDl2Mi41aDJWOUg4em04LjU1My00Ljg5NGwtMiAxIC44OTQgMS43ODkgMi0xLS44OTQtMS43ODl6bS44OTQgMGwtMi0xLS44OTQgMS43ODkgMiAxIC44OTQtMS43ODl6TTE2IDV2Mi41aDJWNWgtMnptLTQuNTUzLTMuODk0bC0yLTEtLjg5NCAxLjc4OSAyIDEgLjg5NC0xLjc4OXptLTIuODk0LTFsLTIgMSAuODk0IDEuNzg5IDItMUw4LjU1My4xMDZ6TTEuNDQ3IDUuODk0bDItMS0uODk0LTEuNzg5LTIgMSAuODk0IDEuNzg5em0tLjg5NCAwbDIgMSAuODk0LTEuNzg5LTItMS0uODk0IDEuNzg5ek0wIDV2Mi41aDJWNUgwem05LjQ0NyAxMy4xMDZsLTItMS0uODk0IDEuNzg5IDIgMSAuODk0LTEuNzg5em0wIDEuNzg5bDItMS0uODk0LTEuNzg5LTIgMSAuODk0IDEuNzg5ek0xMCAxOXYtMi41SDhWMTloMnptLTYuNTUzLTMuODk0bC0yLTEtLjg5NCAxLjc4OSAyIDEgLjg5NC0xLjc4OXpNMiAxNXYtMi41SDBWMTVoMnptMTMuNDQ3IDEuODk0bDItMS0uODk0LTEuNzg5LTIgMSAuODk0IDEuNzg5ek0xOCAxNXYtMi41aC0yVjE1aDJ6IgogICAgLz4KICA8L3N2Zz4KPC90ZW1wbGF0ZT4K",Ao="data:application/octet-stream;base64,PHRlbXBsYXRlPgogIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICA8cGF0aAogICAgICBkPSJNMTAgMy4yMmwtLjYxLS42YTUuNSA1LjUgMCAwIDAtNy42NjYuMTA1IDUuNSA1LjUgMCAwIDAtLjExNCA3LjY2NUwxMCAxOC43OGw4LjM5LTguNGE1LjUgNS41IDAgMCAwLS4xMTQtNy42NjUgNS41IDUuNSAwIDAgMC03LjY2Ni0uMTA1bC0uNjEuNjF6IgogICAgLz4KICA8L3N2Zz4KPC90ZW1wbGF0ZT4K",bo="data:application/octet-stream;base64,PCEtLSBUaGlzIGljb24gaXMgZnJvbSA8aHR0cHM6Ly9naXRodWIuY29tL1RlbXBsYXJpYW4vTWF0ZXJpYWxEZXNpZ24+LCBkaXN0cmlidXRlZCB1bmRlciBBcGFjaGUgMi4wIChodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBsaWNlbnNlLS0+Cjx0ZW1wbGF0ZT4KICA8c3ZnCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgIGFyaWEtaGlkZGVuPSJ0cnVlIgogICAgcm9sZT0iaW1nIgogICAgY2xhc3M9Imljb25pZnkgaWNvbmlmeS0tbWRpIgogICAgd2lkdGg9IjI0IgogICAgaGVpZ2h0PSIyNCIKICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiCiAgICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgPgogICAgPHBhdGgKICAgICAgZD0iTTIwIDE4di00aC0zdjFoLTJ2LTFIOXYxSDd2LTFINHY0aDE2TTYuMzMgOGwtMS43NCA0SDd2LTFoMnYxaDZ2LTFoMnYxaDIuNDFsLTEuNzQtNEg2LjMzTTkgNXYxaDZWNUg5bTEyLjg0IDcuNjFjLjEuMjIuMTYuNDguMTYuOFYxOGMwIC41My0uMjEgMS0uNiAxLjQxYy0uNC40LS44NS41OS0xLjQuNTlINGMtLjU1IDAtMS0uMTktMS40LS41OUMyLjIxIDE5IDIgMTguNTMgMiAxOHYtNC41OWMwLS4zMi4wNi0uNTguMTYtLjhMNC41IDcuMjJDNC44NCA2LjQxIDUuNDUgNiA2LjMzIDZIN1Y1YzAtLjU1LjE4LTEgLjU3LTEuNDFDNy45NiAzLjIgOC40NCAzIDkgM2g2Yy41NiAwIDEuMDQuMiAxLjQzLjU5Yy4zOS40MS41Ny44Ni41NyAxLjQxdjFoLjY3Yy44OCAwIDEuNDkuNDEgMS44MyAxLjIybDIuMzQgNS4zOXoiCiAgICAgIGZpbGw9ImN1cnJlbnRDb2xvciIKICAgID48L3BhdGg+CiAgPC9zdmc+CjwvdGVtcGxhdGU+Cg==",ko="data:image/jpeg;base64,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",vo="data:image/jpeg;base64,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",xo="data:image/jpeg;base64,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",yo="data:image/jpeg;base64,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",Mo="data:image/jpeg;base64,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",Do="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCABJAEkDASIAAhEBAxEB/8QAHgAAAQMFAQEAAAAAAAAAAAAAAQAICQIEBQYHAwr/xAAyEAABAgUDAgQFAwUBAAAAAAABAgMABAUGEQcSIQgxE0FRcQkiMmGBFCOhFUJSkZLB/8QAHAEAAgIDAQEAAAAAAAAAAAAAAgUABAEDCAcG/8QAJxEAAQQCAQMEAgMAAAAAAAAAAQACAwQFETEGEiETMkFRFcFxgbH/2gAMAwEAAhEDEQA/AIA9uO6vxCGO2I9ZRLa5lDbn0lQBhwdD6YaVd1FlpmQaWtb7Y2BoZJP2AEapJWRe5KsnmKmJDXWDoOTeNp7nz8oEdb1F6W7qtFKphinzCWs4BdZUnn3MczqFu1WlOqanJRYKT/jGWyseNgrbSylG/GHwvBVgO8VFIHJV/EIkg7e32gBJJ5gtlMEt2PpELao94JwjnGTAKieIiiXA78+0DI9BBCPOBtH3/wCoiiqRuSoLHkYfV0AXlR645TJabqv6aZlQP0zu7Gx3PBJ9oYorOeTn2jrHTBfjlq3D+mW+UpWsEHPYxXtR+pEvk+ssZ+Sw7g3lvkJ9s9qNcqbkftzUOiStwtS75UJKqN7gseShk+hjETvSN0762yK39Payui1Xw1F2nVdW5LzufpbISAge/pGwV+nt6s6aSOrtuIWJ6mlMvVngrP7uCUqHnjaBGNl7XfuOim4ZMOsTksrDzsucKScefqIQh8kbtArn1t67jp9RPLf4/YTUdfuim7tMKrMSVWoa5VTS8eKgb2lHGRhaeDx944JXbWq9BdU3NSxCQrAUBEqclcF512w1WpqFR1XHQM4V4LZW5KKx9SU8ndj+4DzjgmufSHIVqmTl16YPJqFNbaLzsoSPHlkjghXbcc+g84ZQXDsNkXp+A64sRFsV7g8H4P8AaYptOcE/iKsJHGI2+/NNZ+3J11hUq42tCvmacQQR+DGnrStpZQpOCDyPSGQPcNher1rUNqMPjOwUieeSPsIpyfUwoWD6GCCsKpWAMd/tFzR6lMUyotzjCyClQPEWwSByowiQeAPzE58IXsa9paeCpCvh46/UJFXb0/vOcJo9xMiTnPEX8jClEYex6gDH5hw9EtaY0u1ImqNVacZlhhX78qOBOSqsK4zxnkf6iLLRa9X6FPoCZkpUlQKSFRKjpDq7SupHRGl3xT1ly8LNYDdZaUvKp6XBJCwPQAoT59oR3YCx3cFzt13gJcbbM8I8ErMXUif0FmpDW3Sv9+hTjmVJWNyU8nLLoGP8TwccYjoFuaAaI9aFtPal9I1Zas3UOVWF1Gzpp9KZapObeTLgbUtk8fUTzkxmKzbtnad2YzcNyyf63S+/aaRV1NupKqbUN2wPIRyQoIQoZAJ5hdK2g/Rjp3qXTtT7V63qKUNzyTKST9CmkLS53CVFQAwOee0DHqRqqYdzbdXTWhzXe5pPB+wmhdRPSHNaqVOati5bX/oN7ySi08HW9qJxQGfm9VnIwrOMCI99WtKKlZlbmKbUJFxiYl3Sh1txBBBHqDH1LdVPSfZvUBMT2oNv/wBPnZmqSiHadV5FaV5KUJTuCgT5pMQ2fE60Ekq3QZTVhujiXnmSuRuB7GFPTYUspUr7+GlMHVnkhk9N3CY9IdS38Xl34+wD2A6aT9KL5xBZUUKTg+kU7z6D/cXlwy65Oquy6gRtUQOIsYdgDS6CjcHsDh8olRzk/wAwirIx/wCQCE+RMEIJ5MZ8I1c0mfdkJtLzS8c8w6Xo66i6zo/etPu6mTalNtqSmelQ5hMyzkbm1jzScDj7Q1QADtGyWPdi6G+lKnCBnnMaJmCVukhz+KjydNzCNqX65Kzc2pGkTDGnk4upWnM1BE9LtNHeZM7SFNFI5T8xUeRGk03pqdu9xTkmthg4yttRCSD7Ew3Xpb61b20Qp7zNm1/bKTuDOSTiippwgYyU5GTjiHZWX8QTpuvSjJVqPpU/L1cJ+efoU43LpX7pKFH+YSuhkjJ0uebmByVKw9kZ7Rvwdf6nD/D66q7o6d7mp+h92VZ6coPieBLNur3CWyckJ9E5JOPUxxn4nChcWg1wX5SJYt0qsXyh2S3J27sSykkge6TGYoPUn8Pm3ZEXs4/Xpyps/OiRM1hQV6by3iGvfEp+JPQNcbRpum2nFqKoNuUhRW1JuzCXFuu5V85KQB2UfKNkMTy7ZTbA4W4bYfK4Of8AGv2o99UmEMVxTYSAdxyR5xq8ZO6K0uv1RU2o9yeTGN2H1EPGDTQCuhKcb4qzWu5AVQSB2EIn0GYMBvsPeBVpI8ckwPEV5GB/cfzAgtAKLKUa7KtRvll5g7c9o2OS1jq0qBteUkiNIgK7H2jBY13IVOahUsHb2ArpD3UDcP6XwJeZWMjknMaZXLnrFxTCn6lNqXk8AmMYfoHvFcD2MZwENbG0qju6NgBQ+VPMDePQwF9/xAjKvL//2Q==",un=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
Akurasi +16`},{code:2,link:null,name:"Dodge+16",type:"NORMAL",view:`
Dodge +16`},{code:3,link:null,name:"ASPD+140",type:"NORMAL",view:`
ASPD +140`},{code:4,link:null,name:"CSPD+140",type:"NORMAL",view:`
CSPD +140`},{code:5,link:null,name:"DEX+7",type:"NORMAL",view:`
DEX +7`},{code:6,link:null,name:"INT+7",type:"NORMAL",view:`
INT +7`},{code:7,link:null,name:"STR+7",type:"NORMAL",view:`
STR +7`},{code:8,link:null,name:"AGI+7",type:"NORMAL",view:`
AGI +7`},{code:9,link:null,name:"Kalajengkel",type:"NORMAL",view:`
Critical Rate +10%
Stability +2%
Daya Jarak Dekat -1%`},{code:10,link:null,name:"Akurasi+14",type:"NORMAL",view:`
Akurasi +14`},{code:12,link:null,name:"Dodge+14",type:"NORMAL",view:`
Dodge +14`},{code:13,link:null,name:"VIT+14",type:"NORMAL",view:`
VIT +14`},{code:14,link:null,name:"Gurita Raksasa",type:"NORMAL",view:`
Attack MP Recovery +5
Critical Rate +10
ASPD +150
CSPD +250
Kebal Api -4%
Resistensi Status Buruk -2%
Reduksi DMG (Bowling) -1%`},{code:15,link:null,name:"HP+700",type:"NORMAL",view:`
HP +700`},{code:16,link:null,name:"CSPD+120",type:"NORMAL",view:`
CSPD +120`},{code:17,link:null,name:"INT+6",type:"NORMAL",view:`
INT +6`},{code:18,link:null,name:"MP+300",type:"NORMAL",view:`
CSPD +120`},{code:19,link:null,name:"STR+6",type:"NORMAL",view:`
STR +6`},{code:20,link:null,name:"AGI+6",type:"NORMAL",view:`
AGI +6`},{code:21,link:null,name:"VIT+6",type:"NORMAL",view:`
VIT +6`},{code:22,link:null,name:"Gravicep",type:"NORMAL",view:`
Daya Jarak Dekat +7%
Akurasi +3%
MaxMP +200
Critical Rate -5
MaxHP -100`},{code:23,link:null,name:"DODGE+12",type:"NORMAL",view:`
DODGE +12`},{code:24,link:null,name:"ASPD+120",type:"NORMAL",view:`
ASPD +120`},{code:25,link:null,name:"Shawle",type:"NORMAL",view:`
Antisipasi 5%
Guard Break 5%
Akurasi +20%
Aggro +10%`},{code:26,link:null,name:"Gerumi",type:"NORMAL",view:`
MaxHP +200
MaxMP +100`},{code:27,link:null,name:"DEX+6",type:"NORMAL",view:`
DEX +6`},{code:28,link:null,name:"Akurasi+12",type:"NORMAL",view:`
Akurasi +12`},{code:29,link:null,name:"Critical Rate+5",type:"NORMAL",view:`
Critical Rate +5`},{code:30,link:null,name:"STR+5",type:"NORMAL",view:`
STR+5`},{code:31,link:null,name:"Carbuncle",type:"NORMAL",view:`
MaxHP +1000
Refleks +10%
Dodge -10%`},{code:32,link:null,name:"VIT+5",type:"NORMAL",view:`
VIT +5`},{code:33,link:null,name:"Lynx Mithurna",type:"NORMAL",view:`
Daya Jarak Dekat +3%
Stability +3%
Evasion Recharge +3%
Daya Jarak Jauh -9%`},{code:34,link:null,name:"HP+500",type:"NORMAL",view:`
HP +500`},{code:35,link:null,name:"Yashiro Azuki",type:"NORMAL",view:`
EXP +1%
MaxHP +200
MaxMP +100`},{code:36,link:null,name:"P. Avatar",type:"NORMAL",view:`
Untradable
          EXP +1%
Kebal Api +1%
Kebal Angin +%
Kebal Air +1%
Kebal Bumi +1%
Kebal Cahaya +1%
Kebal Gelap -1%`},{code:37,link:null,name:"Bos Petapa Kadal",type:"NORMAL",view:`
Critical Damage +3
Reduksi DMG (Sekitar Pemain) -3%
Reduksi DMG (Sekitar Musuh) -3%`},{code:38,link:null,name:"INT+5",type:"NORMAL",view:`
INT +5`},{code:39,link:null,name:"DEX+5",type:"NORMAL",view:`
DEX +5`},{code:40,link:null,name:"INT+4",type:"NORMAL",view:`
INT +4`},{code:41,link:null,name:"Critical Rate+4",type:"NORMAL",view:`
Critical Rate +4`},{code:42,link:null,name:"DEX+4",type:"NORMAL",view:`
DEX +4`},{code:43,link:null,name:"Dodge+8",type:"NORMAL",view:`
Dodge +8`},{code:44,link:null,type:"NORMAL",name:"Akurasi+10",view:`
Akurasi +10`},{code:45,link:null,type:"NORMAL",name:"ASPD+100",view:`
ASPD +100`},{code:46,link:null,type:"NORMAL",name:"CSPD+100",view:`
CSPD +100`},{code:47,link:null,type:"NORMAL",name:"Dodge+10",view:`
Dodge +10`},{code:48,link:null,type:"NORMAL",name:"",view:`
`},{code:49,link:null,type:"NORMAL",name:"AGI+5",view:`
AGI +5`},{code:50,link:null,type:"NORMAL",name:"Odelon Machina",view:`
Dodge -5%
Evasion Recharge -5%
Serangan Menghunus +10%`},{code:51,link:null,type:"NORMAL",name:"Ksatriaja",view:`
.ATK +1%
Critical Damage +1
STR +1%
Akurasi -10%
Critical Rate -10%`},{code:52,link:null,type:"NORMAL",name:"VIT+4",view:`
VIT +4`},{code:53,link:null,type:"NORMAL",name:"VIT+3",view:`
VIT +3`},{code:54,link:null,type:"NORMAL",name:"",view:`
`},{code:55,link:null,type:"NORMAL",name:"VIT+2",view:`
VIT +2`},{code:56,link:null,type:"NORMAL",name:"HP+600",view:`
MaxHP +600`},{code:57,link:null,type:"NORMAL",name:"Super Night Mushroom",view:`
MaxHP +500
Daya Jarak Jauh +1%
Daya Jarak Dekat +1%`},{code:58,link:null,type:"NORMAL",name:"STR+4",view:`
STR +4`},{code:59,link:null,type:"NORMAL",name:"STR+3",view:`
STR +3`},{code:60,link:null,type:"NORMAL",name:"",view:`
`},{code:61,link:null,type:"NORMAL",name:"STR+2",view:`
STR +2`},{code:62,link:null,type:"NORMAL",name:"STR+1",view:`
STR +1`},{code:63,link:null,type:"NORMAL",name:"Silver Roar",view:`
MaxHP -8%
Attack MP Recovery +4`},{code:64,link:null,type:"NORMAL",name:"Scrader",view:`
Natural MP Regen -10%
MaxHP +300
MATK +3%
Kekebalan Fisik -20%
Daya Jarak Jauh +2%`},{code:65,link:null,type:"NORMAL",name:"Golem Kuno",view:`
MaxHP +200
MDEF +5%
Kekebalan Sihir +1%`},{code:66,link:null,type:"NORMAL",name:"",view:`
`},{code:67,link:null,type:"NORMAL",name:"Nurethoth",view:`
.ATK +3%
MATK +3%
ASPD -150
CSPD -150`},{code:68,link:null,type:"NORMAL",name:"MP+50",view:`
MaxMP +50`},{code:69,link:null,type:"NORMAL",name:"MP+200",view:`
MaxMP +200`},{code:70,link:null,type:"NORMAL",name:"MP+150",view:`
MaxMP +150`},{code:71,link:null,type:"NORMAL",name:"MP+100",view:`
MaxMP +100`},{code:72,link:null,type:"NORMAL",name:"",view:`
`},{code:73,link:null,type:"NORMAL",name:"Mochelo",view:`
MaxHP +5%
CSPD +10%`},{code:74,link:null,type:"NORMAL",name:"Minotaur",view:`
ASPD +10%
MaxHP +5%`},{code:75,link:null,type:"NORMAL",name:"Metal Stinger",view:`
.ATK +2%
Kekebalan Sihir-10%
Critical Damage +3
Motion Speed -1%`},{code:76,link:null,type:"NORMAL",name:"Megiston",view:`
STR +1
INT +1
VIT +1
AGI +1
DEX +1
MaxHP +100
MaxMP +50`},{code:77,link:null,type:"NORMAL",name:"Mauez",view:`
MaxMP +150
Akurasi -4%
Critical Rate +2`},{code:78,link:null,type:"NORMAL",name:"",view:`
`},{code:79,link:null,type:"NORMAL",name:"Pendekar Bertopeng",view:`
MaxHP -3%
Akurasi -3
.ATK +1%
MATK +1%
Attack MP Recovery +2`},{code:80,link:null,type:"NORMAL",name:"Potum Raja",view:`
MaxHP +10%
Kekebalan Fisik -5%
Kekebalan Sihir -5%`},{code:81,link:null,type:"NORMAL",name:"Inzanio",view:`
Guard Recharge +1%
Attack MP Recovery -1
Weapon ATK +10
Pelindung Fraksional+3%`},{code:82,link:null,type:"NORMAL",name:"INT+3",view:`
INT +3`},{code:83,link:null,type:"NORMAL",name:"INT+2",view:`
INT +2`},{code:84,link:null,type:"NORMAL",name:"",view:`
`},{code:85,link:null,type:"NORMAL",name:"INT+1",view:`
INT +1`},{code:86,link:null,type:"NORMAL",name:"HP+400",view:`
MaxHP +400`},{code:87,link:null,type:"NORMAL",name:"HP+300",view:`
MaxHP +300`},{code:88,link:null,type:"NORMAL",name:"HP+200",view:`
MaxHP +200`},{code:89,link:null,type:"NORMAL",name:"HP+100",view:`
MaxHP +100`},{code:90,link:null,type:"NORMAL",name:"",view:`
`},{code:91,link:null,type:"NORMAL",name:"Gespenst",view:`
MaxMP +150
.ATK -1%
MATK -1%`},{code:92,link:null,type:"NORMAL",name:"Anjing Hutan",view:`
Dodge +6
Evasion Recharge +2%`},{code:93,link:null,type:"NORMAL",name:"Flare Volg",view:`
STR +3
Kekebalan Sihir -4%
Daya Jarak Jauh +2%`},{code:94,link:null,type:"NORMAL",name:"Dodge+6",view:`
Dodge +6`},{code:95,link:null,type:"NORMAL",name:"Dodge+4",view:`
Dodge +4`},{code:96,link:null,type:"NORMAL",name:"",view:`
`},{code:97,link:null,type:"NORMAL",name:"Dodge+2",view:`
Dodge +2`},{code:98,link:null,type:"NORMAL",name:"DEX+3",view:`
DEX +3`},{code:99,link:null,type:"NORMAL",name:"DEX+2",view:`
DEX +2`},{code:100,link:null,type:"NORMAL",name:"DEX+1",view:`
DEX +1`},{code:101,link:null,type:"NORMAL",name:"CSPD+80",view:`
CSPD +80`},{code:102,link:null,type:"NORMAL",name:"",view:`
`},{code:103,link:null,type:"NORMAL",name:"CSPD+60",view:`
CSPD +60`},{code:104,link:null,type:"NORMAL",name:"CSPD+40",view:`
CSPD +40`},{code:105,link:null,type:"NORMAL",name:"CSPD+20",view:`
CSPD +20`},{code:106,link:null,type:"NORMAL",name:"Critical Rate+3",view:`
Critical Rate +3`},{code:107,link:null,type:"NORMAL",name:"Critical Rate+2",view:`
Critical Rate +2`},{code:108,link:null,type:"NORMAL",name:"",view:`
`},{code:109,link:null,type:"NORMAL",name:"Critical Rate+1",view:`
Critical Rate +1`},{code:110,link:null,type:"NORMAL",name:"Crimsosch",view:`
AGI +3
Dodge +3
Critical Rate -9
Evasion Recharge +3%`},{code:111,link:null,type:"NORMAL",name:"Caspy",view:`
Resistensi Status Buruk -6%
Guard Power +2%
Guard Recharge +2%
Evasion Recharge +2%`},{code:112,link:null,type:"NORMAL",name:"Goblin Bos",view:`
.ATK +1%
Akurasi -4
Critical Rate +2%`},{code:113,link:null,type:"NORMAL",name:"Coryn Besar",view:`
Kekebalan Fisik+1%
Kekebalan Sihir +1%
Resistensi Status Buruk +1%`},{code:114,link:null,type:"NORMAL",name:"",view:`
`},{code:115,link:null,type:"NORMAL",name:"B.B. Goblin",view:`
.ATK +2%
Critical Rate -1
Aggro +5%`},{code:116,link:null,type:"NORMAL",name:"Astol",view:`
.DEF -10%
Kekebalan Sihir +1%
Evasion Recharge +3%`},{code:117,link:null,type:"NORMAL",name:"ASPD+80",view:`
ASPD +80`},{code:118,link:null,type:"NORMAL",name:"ASPD+60",view:`
ASPD +60`},{code:119,link:null,type:"NORMAL",name:"ASPD+40",view:`
ASPD +40`},{code:120,link:null,type:"NORMAL",name:"",view:`
`},{code:121,link:null,type:"NORMAL",name:"ASPD+20",view:`
ASPD +20`},{code:122,link:null,type:"NORMAL",name:"Aranea",view:`
MaxHP +400
MaxMP +200
Aggro +1%`},{code:123,link:null,type:"NORMAL",name:"AGI+4",view:`
AGI +4`},{code:124,link:null,type:"NORMAL",name:"AGI+3",view:`
AGI +3`},{code:125,link:null,type:"NORMAL",name:"AGI+2",view:`
AGI +2`},{code:126,link:null,type:"NORMAL",name:"",view:`
`},{code:127,link:null,type:"NORMAL",name:"AGI+1",view:`
AGI +1`},{code:128,link:null,type:"NORMAL",name:"Akurasi+8",view:`
Akurasi +8`},{code:129,link:null,type:"NORMAL",name:"Akurasi+6",view:`
Akurasi +6`},{code:130,link:null,type:"NORMAL",name:"Akurasi+4",view:`
Akurasi +4`},{code:131,link:null,type:"NORMAL",name:"Boss Colon",view:`
MaxHP +70
MaxMP +30`},{code:132,link:null,type:"NORMAL",name:"",view:`
`},{code:133,link:null,type:"NORMAL",name:"Akurasi +2",view:`
Akurasi +2`},{code:134,link:null,type:"NORMAL",name:"Naga Beringas Decel",view:`
.ATK +1%
MATK +1%
MaxMP -50`},{code:135,link:null,type:"NORMAL",name:"MP+250",view:`
MaxMP +250`},{code:136,link:229,type:"UPGRADE",name:"Don Profundo",view:`
.ATK +10%
STR +7%
Critical Rate +8%
.DEF -27%`},{code:137,link:286,type:"UPGRADE",name:"Capo Profundo",view:`
Guard Recharge +8%
Kekebalan Fisik +12%
MaxHP +16%`},{code:138,link:470,type:"UPGRADE",name:"Fantica",view:`
MaxHP +500
Guard Power +15%
.DEF +10%`},{code:139,link:22,type:"UPGRADE",name:"Naga Abu Merah Rudis",view:`
Daya Jarak Dekat +9%
Akurasi +5%
MaxMP +200
Critical Rate -7
MaxHP -300`},{code:140,link:null,type:"UPGRADE",name:"",view:`
`},{code:141,link:364,type:"UPGRADE",name:"Zapo",view:`
.ATK +10%
Critical Rate +10
MaxHP -400
MaxMP -400
Dengan Perisai:
Daya Jarak Dekat +5%
STR +1%`},{code:142,link:33,type:"UPGRADE",name:"Kuffania",view:`
Daya Jarak Dekat +4%
Stability +4%
Evasion Recharge +4%
Daya Jarak Jauh -12%`},{code:143,link:208,type:"UPGRADE",name:"Eripmav",view:`
Attack MP Recovery +18
Kebal Api +12%
Critical Damage +6`},{code:144,link:358,type:"UPGRADE",name:"Dr. Leonardo II",view:`
MATK +3%
Daya Jarak Jauh +6%
Critical Rate +20%
MaxHP +6000
Resistansi Status Buruk +5%`},{code:145,link:360,type:"UPGRADE",name:"DX Fighter II",view:`
.ATK +3%
Daya Jarak Dekat +6%
Akurasi +15%
MaxHP +6000
Pelindung Fraksional +5%`},{code:146,link:null,type:"UPGRADE",name:"",view:`
`},{code:147,link:409,type:"UPGRADE",name:"Etoise",view:`
Critical Rate +40%
ASPD +1100
Motion Speed +5%
CSPD -70%`},{code:148,link:287,type:"UPGRADE",name:"Dominaredor",view:`
.ATK +8%
MATK +8%
ASPD +20%
Reduksi DMG (Lantai) +20%`},{code:149,link:241,type:"UPGRADE",name:"Lilicarolla",view:`
Serangan Menghunus +18%
Dodge -5%
MaxMP -100`},{code:150,link:225,type:"UPGRADE",name:"Baavgai",view:`
MaxHP +7000
Critical Damage +7
Daya Jarak Dekat +5%`},{code:151,link:93,type:"UPGRADE",name:"Charugon",view:`
STR +6
Daya Jarak Dekat +3%
Daya Jarak Jauh +6%
Kekebalan Sihir -12%`},{code:152,link:null,type:"UPGRADE",name:"",view:`
`},{code:153,link:247,type:"UPGRADE",name:"Naga Trompet Reguita",view:`
.ATK +10%
MATK +10%
Natural HP Regen -12%
Natural MP Regen -12%`},{code:154,link:361,type:"UPGRADE",name:"Kruztor II",view:`
MaxHP +7%
Dodge +7%
Kekebalan Fisik +7%
Kekebalan Sihir +7%
Kebal Normal +7%`},{code:155,link:204,type:"UPGRADE",name:"Walican",view:`
MaxHP +6000
Weapon ATK +6%`},{code:156,link:37,type:"UPGRADE",name:"Orictoceras",view:`
Critical Damage +9
Reduksi DMG (Sekitar Pemain) -3%
Reduksi DMG (Sekitar Musuh) -3%`},{code:157,link:246,type:"UPGRADE",name:"Sicanokami",view:`
Daya Jarak Dekat +5%
Attack MP Recovery +20
Akurasi +50
Dengan Tombak:
Daya Jarak Jauh +5%`},{code:158,link:112,type:"UPGRADE",name:"Colon Boss",view:`
MATK +10%
Akurasi -40
Critical Rate +20%`},{code:159,link:478,type:"UPGRADE",name:"Chocolate Ooze II",view:`
MaxHP -15%
MaxMP +300
CSPD +600`},{code:160,link:268,type:"UPGRADE",name:"Amargon",view:`
ASPD +800
MaxHP +30%
MaxMP +300`},{code:161,link:162,type:"UPGRADE",name:"Sang Juara Megiston V",view:`
MaxHP +1800
Critical Rate +23
Kebal Api +6%
Kebal Air +6%
Kebal Angin +3%
Kebal Bumi +3%
Kebal Cahaya +3%`},{code:162,link:163,type:"UPGRADE",name:"Sang Juara Megiston IV",view:`
MaxHP +1600
Critical Rate +20
Kebal Api +6%
Kebal Air +3%
Kebal Angin +3%
Kebal Cahaya +3%`},{code:163,link:165,type:"UPGRADE",name:"Sang Juara Megiston III",view:`
MaxHP +1400
Critical Rate +18
Kebal Api +3%
Kebal Angin +3%
Kebal Cahaya +3%`},{code:164,link:170,type:"UPGRADE",name:"Zega IX",view:`
MaxHP +1200
Attack MP Recovery +11
Magical Resistance +10%
Water resistance +9%`},{code:165,link:328,type:"UPGRADE",name:"Sang Juara Megiston II",view:`
MaxHP +1200
Critical Rate +16
Kebal Api +3%
Kebal Cahaya +3%`},{code:166,link:213,type:"UPGRADE",name:"Zega VII",view:`
MaxHP +1000
Attack MP Recovery +9
Kekebalan Sihir +8%
Kebal Air +7%`},{code:167,link:386,type:"UPGRADE",name:"Goleps",view:`
MaxMP +250
MaxHP +750`},{code:168,link:322,type:"UPGRADE",name:"Cakar Kucing Kissatpam",view:`
.ATK +10%
AGI +4%
Resistensi Status Buruk +2%
Attack MP Recovery +2
MaxHP -12%`},{code:169,link:171,type:"UPGRADE",name:"Gem Mas",view:`
MaxHP +3000
Reduksi DMG (Terjang) +10%
Reduksi DMG (Linear) +10%
Reduksi DMG (Sekitar Pemain) +10%`},{code:170,link:166,type:"UPGRADE",name:"Zega VIII",view:`
MaxHP +1100
Attack MP Recovery +10
Magical Resistance +9%
Water resistance +8%`},{code:171,link:460,type:"UPGRADE",name:"Kodok Riang",view:`
MaxHP +2000
Reduksi DMG (Terjang) +10%
Reduksi DMG (Linear) +10%`},{code:172,link:250,type:"UPGRADE",name:"Crysmort",view:`
Attack MP Recovery +11
MaxHP +3000
Stability +1%`},{code:173,link:279,type:"UPGRADE",name:"Roda Kelana Neo",view:`
Daya Jarak Jauh -16%
MATK +5%
CSPD +75%`},{code:174,link:67,type:"UPGRADE",name:"Nuthoreth",view:`
.ATK +2%
MATK +2%
ASPD +150
CSPD +150`},{code:175,link:468,type:"UPGRADE",name:"Jeila",view:`
Attack MP Recovery +6
Kebal Api +4%
Critical Damage +2`},{code:176,link:164,type:"UPGRADE",name:"Zega X",view:`
MaxHP +1300
Attack MP Recovery +12
Magical Resistance +11%
Water resistance +10%`},{code:177,link:370,type:"UPGRADE",name:"Velly Hitam",view:`
MaxHP +3000
MaxMP +400
MATK +9%
Evasion Recharge -20%`},{code:178,link:323,type:"UPGRADE",name:"Kadal Bunga",view:`
Stability +5%
Peneterasi Sihir +20%
Aggro -15%`},{code:179,link:325,type:"UPGRADE",name:"Pedrio",view:`
.ATK +10%
MATK +10%
Reduksi DMG (Bowling) +20%
Reduksi DMG (Peluru) +20%
Aggro -40%`},{code:226,link:331,type:"UPGRADE",name:"Potum Pahlawan II",view:`
MaxHP +11%
Pelindung Fraksional +12%
Akurasi +13%
Aggro +14%`},{code:181,link:329,type:"UPGRADE",name:"Pomie Chan II",view:`
.ATK +9%
AGI +7%
Aggro -15%
Dengan Sarung Tinju:
Dodge Absolut +5%
`},{code:182,link:177,type:"UPGRADE",name:"Glocke",view:`
MaxHP +4500
MaxMP +500
MATK +12%
Evasion Recharge -30%`},{code:183,link:465,type:"UPGRADE",name:"Baphomela",view:`
Daya Jarak Dekat +6%
Daya Jarak Jauh +6%
Serangan menghunus +6%`},{code:184,link:238,type:"UPGRADE",name:"Naga Jahat Fazzino",view:`
MATK +9%
DEX +7%
CSPD +5%`},{code:185,link:372,type:"UPGRADE",name:"Filrocas",view:`
MaxHP +60%
Kekebalan Sihir -7%
Kekebalan Fisik -7%
Dengan Sarung Tinju:
Aggro +15%
Dengan Pedang 1 Tangan:
Aggro +15%`},{code:186,link:477,type:"UPGRADE",name:"Exdocus",view:`
.DEF +150
MDEF +150
Pelindung Fisik +1500
Pelindung Sihir +1500`},{code:187,link:294,type:"UPGRADE",name:"Brassozard",view:`
STR +3%
.ATK +3%
Akurasi -10%
Critical Rate -10%
Critical Damage +3`},{code:188,link:null,type:"UPGRADE",name:"",view:`
`},{code:189,link:265,type:"UPGRADE",name:"Naga Membara Igneus",view:`
AGI +3%
Critical Rate +15
Critical Damage +8`},{code:190,link:373,type:"UPGRADE",name:"Naga Langkisau",view:`
CSPD +20%
Aggro -30%
Pelindung Fraksional +10%`},{code:191,link:289,type:"UPGRADE",name:"Golem Satpam",view:`
.ATK +9%
MATK +9%
ASPD -225
CSPD -225`},{code:192,link:274,type:"UPGRADE",name:"Gordel",view:`
MaxMP +800
Pelindung Fraksional +17%
Critical Rate +3`},{code:193,link:264,type:"UPGRADE",name:"Oculasignio",view:`
MaxMP +300
MATK +9%
Guard Break +13%`},{code:194,link:196,type:"UPGRADE",name:"Bakuzan",view:`
.ATK +11%
DEX +9%
ASPD +7%`},{code:195,link:385,type:"UPGRADE",name:"Glaucius",view:`
Evasion Recharge +15%
Kekebalan Sihir +6%
MATK +6%
Dengan Zirah Ringan:
MATK UP (AGI25%
)`},{code:196,link:243,type:"UPGRADE",name:"Naga Penyamar Mimyugon",view:`
.ATK +9%
DEX +7%
ASPD +5%`},{code:197,link:443,type:"UPGRADE",name:"Garnache",view:`
MaxHP +18%
MATK +3%
Peneterasi Sihir +10%
Aggro -15%`},{code:198,link:269,type:"UPGRADE",name:"Velum",view:`
.ATK +9%
Attack MP Recovery +6
Antisipasi 13%
MaxMP -100`},{code:199,link:122,type:"UPGRADE",name:"Blazingur",view:`
MaxHP +600
MaxMP +300
Aggro +2%`},{code:200,link:202,type:"UPGRADE",name:"Chiromina",view:`
Stability +6%
Akurasi +6%
Critical Rate +6%`},{code:201,link:293,type:"UPGRADE",name:"Vlam si Naga Api",view:`
MaxMP +400
Daya Jarak Dekat +6%
Physical Pierce +7%`},{code:202,link:481,type:"UPGRADE",name:"Melancia",view:`
Stability +5%
Akurasi +5%
Critical Rate +5%`},{code:203,link:183,type:"UPGRADE",name:"Bayangan Biru Tafakur",view:`
Daya Jarak Dekat +8%
Daya Jarak Jauh +8%
Serangan Menghunus +8%
MaxMP -150`},{code:204,link:252,type:"UPGRADE",name:"Ferzen si Naga Batu",view:`
MaxHP +5000
WeaponATK +5%`},{code:205,link:271,type:"UPGRADE",name:"Naga Milisi Turba",view:`
Critical Rate +11
Weapon Attack +14%
Akurasi +17%
MaxMP -200`},{code:206,link:203,type:"UPGRADE",name:"Shawle Terlarang",view:`
Daya Jarak Dekat +10%
Daya Jarak Jauh +10%
Serangan Menghunus +10%
MaxMP -200`},{code:207,link:279,type:"UPGRADE",name:"Gordo",view:`
Daya Jarak Jauh -15%
.ATK +7%
ASPD +80%`},{code:208,link:259,type:"UPGRADE",name:"Neewollah",view:`
Attack MP Recovery +15
Kebal Api +10%
Critical Damage +5`},{code:209,link:301,type:"UPGRADE",name:"Bullamius",view:`
MP +250
.ATK +3%
MATK +3%`},{code:210,link:431,type:"UPGRADE",name:"Teertocrit",view:`
.ATK +6%
MATK +6%
Motion Speed +2%`},{code:211,link:280,type:"UPGRADE",name:"Usamochi",view:`
MaxMP +300
.ATK +6%
Serangan Menghunus +6%
Kebal Normal -10%`},{code:212,link:181,type:"UPGRADE",name:"Pomie Chan III",view:`
.ATK +12%
AGI +10%
Aggro -20%
Dengan Sarung Tinju:
Dodge Absolut +10%
`},{code:213,link:237,type:"UPGRADE",name:"Zega VI",view:`
MaxHP +900
Attack MP Recovery +8
Kekebalan Sihir +7%
Kebal Air +6%`},{code:214,link:367,type:"UPGRADE",name:"Yuveria",view:`
MaxMP+300
Kekebalan Fisik +3%
Kekebalan Sihir +3%
Daya Jarak Dekat +6%
Aggro -15%`},{code:215,link:333,type:"UPGRADE",name:"Penyihir Besi Bercakar",view:`
Daya Jarak Dekat +5%
Attack MP Recovery +10
Pelindung Fisik +2000
Pelindung Sihir +2000`},{code:216,link:258,type:"UPGRADE",name:"Gemma",view:`
Serangan Menghunus +7%
Physical Pierce +5%
Critical Damage +6`},{code:217,link:74,type:"UPGRADE",name:"Rhinosaurus",view:`
MaxHP +10%
ASPD +15%
.ATK +5%`},{code:218,link:217,type:"UPGRADE",name:"Lixi Monster Buas",view:`
MaxHP +15%
ASPD +20%
.ATK +10%
MaxMP -100`},{code:219,link:446,type:"UPGRADE",name:"Paduka Raja Kerbau",view:`
Daya Jarak Dekat +8%
Akurasi +40
MaxMP +200
MaxHP -20%`},{code:220,link:446,type:"UPGRADE",name:"Pillow Kitagawa",view:`
Serangan Menghunus +8%
Critical Rate +4
MaxHP +2000
Revive Time +20%`},{code:221,link:282,type:"UPGRADE",name:"Irestida",view:`
MATK +8%
Peneterasi Sihir +6%
Aggro -9%
MDEF -24%`},{code:222,link:476,type:"UPGRADE",name:"Trocostida",view:`
MaxHP +20%
Critical Rate +5
Aggro +15%
Daya Jarak Jauh -10%`},{code:223,link:456,type:"UPGRADE",name:"Alfenix",view:`
.ATK +3%
Physical Pierce +10%
MaxHP +18%
Aggro -15%`},{code:224,link:223,type:"UPGRADE",name:"Zuccoto Goblin",view:`
.ATK 10%
Physical Pierce +10%
MaxHP +24%
Aggro -15%
Dengan Perisai:
Motion speed +1%`},{code:225,link:267,type:"UPGRADE",name:"Sakura Merah Jelita",view:`
MaxHP +4000
Critical Damage +4
Daya Jarak Dekat +2%`},{code:180,link:226,type:"UPGRADE",name:"Potum Pahlawan III",view:`
MaxHP +12%
Pelindung Fraksional +14%
Akurasi +16%
Aggro +18%`},{code:227,link:228,type:"UPGRADE",name:"✝Raja Kegelapan✝",view:`
.ATK +5%
Daya Jarak Dekat +3%
ASPD +20%
Aggro -10%`},{code:228,link:454,type:"UPGRADE",name:"Ibu Yashiro Azuki II",view:`
MATK +5%
Daya Jarak Jauh +3%
CSPD +20%
Aggro -10%`},{code:229,link:292,type:"UPGRADE",name:"Hexter",view:`
.ATK +8%
STR +6%
Critical Rate +6%
.DEF -21%`},{code:230,link:444,type:"UPGRADE",name:"Gula",view:`
.ATK +10%
Critical Rate +15
MaxMP +200
Guard Break 10%`},{code:231,link:263,type:"UPGRADE",name:"Bayangan Hitam",view:`
.ATK +8%
MATK +8%
Attack MP Recovery+3
MaxMP -150`},{code:232,link:443,type:"UPGRADE",name:"Gernache",view:`
MATK +3%
Peneterasi Sihir +10%
MaxHP +18%
Aggro -15%`},{code:233,link:461,type:"UPGRADE",name:"Stellar Ooze",view:`
Critical Rate +20
Akurasi +60
MaxMP +300
CSPD +600`},{code:234,link:273,type:"UPGRADE",name:"Kucing Yule",view:`
MATK +7%
INT +3%
CSPD +35%
Attack MP Recovery +10%`},{code:235,link:423,type:"UPGRADE",name:"Roh Orang Mati",view:`
Attack MP Recovery +4
.ATK +2%
MATK +2%
Critical Damage +2%`},{code:236,link:197,type:"UPGRADE",name:"Erkuch",view:`
MaxHP +24%
MATK +10%
Peneterasi Sihir +10%
Aggro -15%
Dengan Perisai:
Motion Speed 1%`},{code:237,link:257,type:"UPGRADE",name:"Zega V",view:`
MaxHP +800
Attack MP Recovery +7
Kekebalan Sihir +6%
Kebal Air +5%`},{code:238,link:295,type:"UPGRADE",name:"Pisteus",view:`
MATK +7%
DEX +5%
CSPD +3%`},{code:239,link:291,type:"UPGRADE",name:"Ageladanios",view:`
.ATK +6%
Critical Damage +8
Motion Speed -1%
Kekebalan Sihir -15%`},{code:240,link:418,type:"UPGRADE",name:"Venena II",view:`
MaxMP +600
.ATK +2%
MATK +2%
Stability +3%`},{code:241,link:50,type:"UPGRADE",name:"Pret",view:`
Serangan Menghunus +12%
Dodge -5%
Evasion Recharge -3%
MaxMP -50`},{code:242,link:null,type:"UPGRADE",name:"",view:`
`},{code:243,link:298,type:"UPGRADE",name:"Vulture",view:`
.ATK +7%
DEX +5%
ASPD +3%`},{code:244,link:421,type:"UPGRADE",name:"Ketua Bandit Gurun",view:`
Evasion Recharge +8%
Aggro +16%
MATK -5%`},{code:245,link:467,type:"UPGRADE",name:"Tardigrademon",view:`
CSPD +450
MaxMP -200`},{code:246,link:300,type:"UPGRADE",name:"Patissia",view:`
Attack MP Recovery +15
Akurasi +25`},{code:247,link:335,type:"UPGRADE",name:"Repthon",view:`
.ATK +6%
MATK +6%
Natural MP Regen -10%
Natural HP Regen -10%`},{code:248,link:null,type:"UPGRADE",name:"",view:`
`},{code:249,link:368,type:"UPGRADE",name:"Mata Jahanam",view:`
MaxHP +1000
ASPD +300
Tumble Unavailable`},{code:250,link:299,type:"UPGRADE",name:"Amalgam",view:`
Attack MP Recovery +9
MaxHP +2000`},{code:251,link:348,type:"UPGRADE",name:"Kristal Berlumur Darah",view:`
Attack MP Recovery +7
Critical Damage +6
Aggro +10%`},{code:252,link:277,type:"UPGRADE",name:"Roga Safir",view:`
MaxHP +4000
Weapon ATK +4%`},{code:253,link:474,type:"UPGRADE",name:"Mega Alpoca",view:`
Daya Jarak Dekat +6%
MaxHP +300
MaxMP +300`},{code:254,link:null,type:"UPGRADE",name:"",view:`
`},{code:255,link:336,type:"UPGRADE",name:"Zega II",view:`
MaxHP +500
Attack MP Recovery +4
Kekebalan Sihir +3%
Kebal Air +2%`},{code:256,link:255,type:"UPGRADE",name:"Zega III",view:`
MaxHP +600
Attack MP Recovery +5
Kekebalan Sihir +4%
Kebal Air +3%`},{code:257,link:256,type:"UPGRADE",name:"Zega IV",view:`
MaxHP +700
Attack MP Recovery +6
Kekebalan Sihir +5%
Kebal Air +4%`},{code:258,link:387,type:"UPGRADE",name:"Pyxtica",view:`
Serangan Menghunus +4%
Physical Pierce +4%
Critical Damage +4`},{code:259,link:276,type:"UPGRADE",name:"Zarth",view:`
Attack MP Recovery +12
Kebal Api +8%
Critical Damage +4`},{code:260,link:null,type:"UPGRADE",name:"",view:`
`},{code:261,link:330,type:"UPGRADE",name:"Mbah Dukun Usasama II",view:`
MATK +7%
CSPD +14%
Motion Speed +3%
MaxHP -15%
Attack MP Recovery -30%`},{code:262,link:346,type:"UPGRADE",name:"Kepiting Bulan Besar",view:`
.ATK +6%
VIT +4%
Motion Speed +1%`},{code:263,link:297,type:"UPGRADE",name:"Tuscog",view:`
.ATK +6%
MATK +6%
Attack MP Recovery +2
MaxMP -100`},{code:264,link:345,type:"UPGRADE",name:"Finstern si Naga Kegelapan",view:`
MATK +7%
MaxMP +300
Guard Break +12%`},{code:265,link:303,type:"UPGRADE",name:"Piton Raja",view:`
Critical Rate +10
Critical Damage +4`},{code:266,link:341,type:"WEAPON",name:"Ultra Potum",view:`
Evasion Recharge +15%
Daya Jarak Jauh 10%
Tambahan Fisik +20%`},{code:267,link:388,type:"UPGRADE",name:"Mimesia",view:`
MaxHP +2000
Critical Damage +2`},{code:268,link:479,type:"UPGRADE",name:"Candela II",view:`
MaxHP +20%
MaxMP -250
ASPD +600`},{code:269,link:353,type:"UPGRADE",name:"Mardula",view:`
.ATK +7%
Attack MP Recovery +4
Antisipasi +12%`},{code:270,link:343,type:"UPGRADE",name:"Momok Gelembung",view:`
Tambahan Sihir +125%
CSPD +200
Pelindung Sihir +200`},{code:271,link:433,type:"UPGRADE",name:"Zelbuse",view:`
Critical Rate +8
Weapon ATK +12%
Akurasi +16%
MaxMP -150`},{code:272,link:275,type:"UPGRADE",name:"Potum Kue",view:`
MaxHP +30%
Kekebalan Fisik -15%
Kekebalan Sihir -15%`},{code:273,link:375,type:"UPGRADE",name:"Noeliel si Patung Es Suci",view:`
MATK +5%
CSPD +30%
Attack MP Recovery +10%`},{code:274,link:384,type:"UPGRADE",name:"Mama Fluck",view:`
MaxMP +700
Pelindung Fraksional +15%`},{code:275,link:80,type:"UPGRADE",name:"Potum Platina",view:`
MaxHP +20%
Kekebalan Fisik -10%
Kekebalan Sihir -10%`},{code:276,link:175,type:"UPGRADE",name:"Zoe",view:`
Attack MP Recovery +9
Kebal Api +6%
Critical Damage +3`},{code:277,link:305,type:"UPGRADE",name:"Ornlarf",view:`
MaxHP +3000
Weapon ATK +3%`},{code:278,link:193,type:"UPGRADE",name:"Menti",view:`
MaxMP +300
MATK +11%
Guard Break +14
Dengan Perisai:
Attack speed +250`},{code:279,link:471,type:"UPGRADE",name:"Roda Kelana",view:`
.ATK +5%
ASPD +75%
Daya Jarak Jauh -14%`},{code:280,link:379,type:"UPGRADE",name:"Usami",view:`
MaxMP +300
.ATK +3%
Serangan Menghunus +3%
Kebal Normal -10%`},{code:281,link:473,type:"UPGRADE",name:"Solopy",view:`
ASPD +450
MaxHP -15%`},{code:282,link:354,type:"UPGRADE",name:"Shampy",view:`
MATK +6%
Peneterasi Sihir +5%
Aggro -7%
MDEF -18%`},{code:283,link:110,type:"UPGRADE",name:"Amoeba Machina",view:`
AGI +6
Dodge +5
Evasion Recharge +4%
Critical Rate -6`},{code:284,link:317,type:"UPGRADE",name:"Fubbit",view:`
.ATK +6%
Physical Pierce +20%
Aggro -15%
Resistansi Status Buruk -15%
MaxMP -200`},{code:285,link:113,type:"UPGRADE",name:"Seraph Machina",view:`
Resistensi Status Buruk +3%
Kekebalan Fisik +3%
Kekebalan Sihir +3%`},{code:286,link:381,type:"UPGRADE",name:"Daddy Finpen",view:`
MaxHP +6%
Guard Rate +6%
Kekebalan Fisik +6%`},{code:287,link:424,type:"UPGRADE",name:"Lalvada",view:`
.ATK +4%
MATK +4%
.DEF -4%
MDEF-4%`},{code:288,link:382,type:"UPGRADE",name:"Jamur Super Mampus",view:`
MaxMP +400
CSPD +200
Attack MP Recovery +3`},{code:289,link:67,type:"UPGRADE",name:"Guignol",view:`
.ATK +5%
MATK +5%
ASPD -175
CSPD -175`},{code:290,link:466,type:"UPGRADE",name:"Potum Bintang Top",view:`
ASPD +900
CSPD +900
MaxHP -10%
MaxMP -150`},{code:291,link:75,type:"UPGRADE",name:"Kapten Lyark Spesialis",view:`
.ATK +3%
Critical Damage +4
Kebal Sihir -15%
Motion Speed -2%`},{code:292,link:352,type:"UPGRADE",name:"Gwaimol",view:`
.ATK +6%
STR +5%
Critical Rate +4%
.DEF -15%`},{code:293,link:337,type:"UPGRADE",name:"Machina Ultima",view:`
MaxMP +400
Physical Pierce +4%
Daya Jarak Dekat +4%`},{code:294,link:51,type:"UPGRADE",name:"Volotur",view:`
.ATK +2%
STR +2%
Critical Damage +2
Akurasi -10%
Critical Rate -10%`},{code:295,link:349,type:"UPGRADE",name:"Mozto Machina",view:`
DEX +4%
MATK +6%
CSPD +2%`},{code:296,link:null,type:"UPGRADE",name:"",view:`
`},{code:297,link:134,type:"UPGRADE",name:"York",view:`
.ATK +4%
MATK +4%
Attack MP Recovery +1
MaxMP -75`},{code:298,link:346,type:"UPGRADE",name:"Tyrant Machina",view:`
.ATK +6%
DEX +4%
ASPD +2%`},{code:299,link:419,type:"UPGRADE",name:"Deniala",view:`
MaxHP +1000
Attack MP Recovery +6`},{code:300,link:429,type:"UPGRADE",name:"Tapir",view:`
Attack MP Recovery +10`},{code:301,link:91,type:"UPGRADE",name:"Salamander",view:`
MaxMP +200
.ATK +1%
MATK +1%`},{code:302,link:312,type:"UPGRADE",name:"Gusti Ilusi Melodi",view:`
.ATK +12%
MATK +12%
STR +4%
INT +4%
Daya Jarak Jauh -6%
Tumble Unavailable
Dengan Perisai:
Aggro -50%`},{code:303,link:464,type:"UPGRADE",name:"Proto Leon",view:`
Critical Rate +8
Critical Damage +3`},{code:304,link:422,type:"UPGRADE",name:"Memecoleous",view:`
.ATK -4%
Guard Recharge +5%
Aggro +12%`},{code:305,link:390,type:"UPGRADE",name:"Iconos",view:`
MaxHP +2000
Weapon ATK +2%`},{code:306,link:347,type:"UPGRADE",name:"Builder Golem",view:`
Guard Power +7%
Guard Recharge +7%`},{code:307,link:480,type:"UPGRADE",name:"Ratu Kuno II",view:`
MATK +5%
CSPD +30%
Daya Jarak Dekat -20%`},{code:308,link:374,type:"UPGRADE",name:"Merzehal",view:`
MaxHP +25%
Kekebalan Fisik +15%
MATK +13%
Peneterasi Sihir +10%
CSPD +25
MaxMP -200`},{code:309,link:449,type:"UPGRADE",name:"Monster Dasar Laut",view:`
MATK+8%
Critical Damage +8
MaxHP +1000
Dengan Zirah Berat:
Aggro +20%`},{code:310,link:null,type:"WEAPON",name:"Sinar Rembulan Purba",view:`
.ATK +10%
MATK +10%
MaxHP +10%
Antisipasi +10%
Guard Break +10%
MaxMP -200`},{code:311,link:null,type:"WEAPON",name:"Crysta Terkutuk",view:`
.ATK +5%
MATK +5%
Stability +5%
Motion Speed +5%
Recoil +20%`},{code:312,link:null,type:"WEAPON",name:"Putri Natal Berbaju Hitam",view:`
.ATK +9%
MATK +9%
STR +3%
INT +3%
Daya Jarak Jauh -6%
Tumble Unavailable
Dengan Perisai:
Aggro -50%`},{code:313,link:null,type:"WEAPON",name:"Semangat Musim Panas",view:`
MaxHP +15%
Critical Rate +20
Kebal Api +25%
Recoil +3,00%`},{code:314,link:null,type:"WEAPON",name:"",view:`
`},{code:315,link:null,type:"WEAPON",name:"Serigala Merah Mata Satu",view:`
Daya Jarak Dekat +8%
Antisipasi +4%
Kekebalan Fisik -16%
Kekebalan Sihir -8%
Dengan Belati:
Critical Damage +1%
Dengan Pedang Ganda :
Aggro -20%`},{code:316,link:null,type:"WEAPON",name:"Arbogazella",view:`
Daya Jarak Jauh +7%
Akurasi +14%
MaxHP -28%`},{code:317,link:null,type:"WEAPON",name:"Dango Iblis",view:`
.ATK +4%
Physical Pierce +20%
Aggro -10%
Resistansi Status Buruk -15%
MaxMP -200`},{code:318,link:null,type:"WEAPON",name:"Tikus Kecil Ajaib",view:`
Daya Jarak Jauh +4%
Serangan Menghunus +4%
Aggro -20%
Dengan Tongkat:MATK +6%`},{code:319,link:null,type:"WEAPON",name:"Jeandoux",view:`
Critical Damage +7
STR +3%
Aggro -10%`},{code:320,link:321,type:"UPGRADE",name:"Sakura Musim Semi",view:`
MATK +11%
Critical Rate +13
Aggro -15%`},{code:321,link:null,type:"WEAPON",name:"Kuzto",view:`
MATK +7%
Critical Rate +7
Aggro -7%`},{code:322,link:null,type:"WEAPON",name:"Metasrigala",view:`
.ATK +7%
AGI +4%
Attack MP Recovery +1
MaxHP -12%`},{code:323,link:null,type:"WEAPON",name:"Armasite",view:`
MATK +5%
Peneterasi Sihir +20%
CSPD -15%`},{code:324,link:null,type:"WEAPON",name:"Badut Tukang Sandiwara",view:`
Akurasi +10%
Critical Rate +10
ASPD +200
CSPD +200`},{code:325,link:null,type:"WEAPON",name:"Pedang Neo Maton",view:`
.ATK +7%
MATK +7%
Reduksi DMG (Bowling) +14%
Reduksi DMG (Peluru) +14%
Aggro -28%`},{code:326,link:null,type:"WEAPON",name:"",view:`
`},{code:327,link:null,type:"WEAPON",name:"Grecia",view:`
.ATK +6%
MATK +6%
Physical Pierce +3%
Peneterasi Sihir +3%`},{code:328,link:null,type:"WEAPON",name:"Sang Juara Megiston",view:`
MaxHP +1000
Critical Rate +15
Kebal Api +3%`},{code:329,link:null,type:"WEAPON",name:"Pomie Chan",view:`
.ATK +5%
AGI +5%
Aggro -5%
Dengan Sarung Tinju:
Dodge Absolut +5%`},{code:330,link:null,type:"WEAPON",name:"Mbah Dukun Usasama",view:`
MATK +6%
CSPD +12%
Motion Speed +3%
MaxHP -25%
Attack MP Recovery -50%`},{code:331,link:null,type:"WEAPON",name:"Potum Pahlawan",view:`
MaxHP +10%
Pelindung Fraksional +10%
Akurasi +10%
Aggro +10%`},{code:332,link:null,type:"WEAPON",name:"",view:`
`},{code:333,link:null,type:"WEAPON",name:"Zahhak Machina",view:`
Attack MP Recovery +5
Pelindung Fisik +1000
Magical Barrier +1000`},{code:334,link:null,type:"WEAPON",name:"Komandan Golem",view:`
ASPD +100
Pelindung Fisik +100
Tambahan Fisik +100%`},{code:335,link:null,type:"WEAPON",name:"Zolban",view:`
Natural HP Regen -10%
Natural MP Regen -10%
.ATK +4%
MATK +4%`},{code:336,link:null,type:"WEAPON",name:"Zega",view:`
MaxHP +400
Kekebalan Sihir +2%
Kebal Air +1%
Attack MP Recovery +3`},{code:337,link:null,type:"WEAPON",name:"Golem Pilar",view:`
MaxMP +300
Physical Pierce +3%
Daya Jarak Dekat +3%`},{code:338,link:null,type:"WEAPON",name:"",view:`
`},{code:339,link:null,type:"WEAPON",name:"Nightmare Potum",view:`
Aggro +10%
Pelindung Fraksional+2%
MaxHP -5%`},{code:340,link:null,type:"WEAPON",name:"Potum Rembulan",view:`
Attack MP Recovery +3
CSPD -90%`},{code:341,link:null,type:"WEAPON",name:"Potum Ajaib",view:`
MaxHP -10%
Evasion Recharge +5%`},{code:342,link:null,type:"WEAPON",name:"Marchitar",view:`
Stability +5%
Dodge +15%`},{code:343,link:null,type:"WEAPON",name:"Dukun Lapin",view:`
CSPD +100
Pelindung Sihir +100
Tambahan Sihir +100%`},{code:344,link:null,type:"WEAPON",name:"",view:`
`},{code:345,link:null,type:"WEAPON",name:"Imitacia",view:`
MaxMP +200
MATK +5%
Guard Break +10%`},{code:346,link:null,type:"WEAPON",name:"Ganglef",view:`
DEX +2%
.ATK +3%
ASPD +1%`},{code:347,link:null,type:"WEAPON",name:"Golem Galian",view:`
Guard Power +5%
Guard Rate +5%`},{code:348,link:null,type:"WEAPON",name:"Pedang Sihir Iblis",view:`
Critical Damage +5
Aggro +10%
Attack MP Recovery +5`},{code:349,link:null,type:"WEAPON",name:"Gerbang Iblis",view:`
DEX +2%
MATK +3%
CSPD +1%`},{code:350,link:null,type:"WEAPON",name:"",view:`
`},{code:351,link:null,type:"WEAPON",name:"Colon Maut",view:`
MaxMP -2000
ASPD +1000
Daya Jarak Dekat +10%`},{code:352,link:null,type:"WEAPON",name:"Ksatria Buruk Dusta",view:`
STR +3%
.ATK +4%
.DEF -9%
Critical +2%`},{code:353,link:null,type:"WEAPON",name:"Imitator",view:`
.ATK +5%
Attack MP Recovery +2
Antisipasi +10%`},{code:354,link:null,type:"WEAPON",name:"Iblis kristal Jahanam",view:`
MATK+4%
Peneterasi Sihir +3%
Aggro -5%`},{code:355,link:null,type:"ARMOR",name:"Altadar",view:`
Stability +11%
STR +6%
VIT +6%
Dengan Zirah Ringan:
Daya Jarak Dekat +11%
Stability -5%
Dengan Zirah Berat:
Daya Jarak Jauh +11%
Stability -5%`},{code:356,link:null,type:"ARMOR",name:"Auberkasa",view:`
MaxHP +15%
Aggro +30%
.DEF +45`},{code:357,link:null,type:"ARMOR",name:"Sibylares",view:`
.ATK +5%
MATK +5%
Physical Pierce +5%
Peneterasi Sihir +5%
Critical Rate +15
MaxMP -100`},{code:358,link:null,type:"ARMOR",name:"Dr. Leonardo",view:`
MATK +2%
Daya Jarak Jauh +6%
Critical Rate +10%
MaxHP +5000
Resistansi Status Buruk +5%`},{code:359,link:357,type:"UPGRADE",name:"Bemoz",view:`
MaxMP -150
.ATK 6%
MATK +6%
Physical Pierce +8%
Peneterasi Sihir +8%
Critical Rate +17`},{code:360,link:null,type:"ARMOR",name:"DX Fighter",view:`
.ATK +2%
Daya Jarak Dekat +6%
Akurasi +10%
MaxHP +5000
Pelindung Fraksional +5%`},{code:361,link:null,type:"ARMOR",name:"Kruztor",view:`
MaxHP +5%
Dodge +5%
Kekebalan Fisik +5%
Kekebalan Sihir +5%
Kebal Normal +5%`},{code:362,link:null,type:"ARMOR",name:"Doktor Pom Pom",view:`
Daya Jarak Dekat +7%
Critical Rate +7%
Resistensi Status Buruk +7%`},{code:363,link:null,type:"ARMOR",name:"Orang2an Sawah Maut",view:`
Daya Jarak Jauh +6%
Aggro -15%
MaxHP -30%`},{code:364,link:null,type:"ARMOR",name:"Arachnidemon",view:`
.ATK +8%
Critical Rate +8
MaxHP -400
MaxMP -400
Dengan Perisai:
Daya Jarak Dekat +4%`},{code:365,link:null,type:"ARMOR",name:"",view:`
`},{code:366,link:null,type:"ARMOR",name:"Phantom Wisp",view:`
Akurasi +20%
Critical Rate +10
Evasion Recharge +10%
Dodge Absolut +5%`},{code:367,link:null,type:"ARMOR",name:"Gopherga",view:`
MaxHP +3000
Kekebalan Fisik +3%
Kekebalan Sihir +3%
Daya Jarak Dekat +6%
Aggro +15%`},{code:368,link:null,type:"ARMOR",name:"Quasar Jahanam",view:`
MaxMP +1000
CSPD +300
Motion Speed +1%`},{code:369,link:null,type:"ARMOR",name:"Nemopirania",view:`
Attack MP Recovery +10
Kecepatan Pelindung +10%
Kebal Air +10%`},{code:370,link:null,type:"ARMOR",name:"Sosok Jahat",view:`
MaxHP +1500
MaxMP +300
MATK +6%
Evasion Recharge -10%`},{code:371,link:null,type:"ARMOR",name:"",view:`
`},{code:372,link:null,type:"ARMOR",name:"Pilz Erosi",view:`
MaxHP +30%
Kekebalan Fisik -10%
Kekebalan Sihir -10%`},{code:373,link:null,type:"ARMOR",name:"Golem Preman",view:`
Pelindung Fraksional 10%
CSPD +15%
Aggro -20%`},{code:374,link:null,type:"ARMOR",name:"Permaisuri Besi",view:`
MaxHP +20%
Kekebalan Fisik +10%
MATK +5%
Peneterasi Sihir +10%
CSPD +20%
MaxMP -300`},{code:375,link:null,type:"ARMOR",name:"Noeliel",view:`
MATK +5%
CSPD +3%
Attack MP Recovery +1%`},{code:376,link:null,type:"ARMOR",name:"Gagak Penyihir Hebat",view:`
Stability +4%
Motion Speed +2%
Akurasi Absolut +1%
Resistensi Status Buruk -14%`},{code:377,link:null,type:"ARMOR",name:"",view:`
`},{code:378,link:null,type:"ARMOR",name:"Goldoon",view:`
.ATK +3%
MATK +3%
Akurasi +3%
Aggro -3%`},{code:379,link:null,type:"ARMOR",name:"Usakichi",view:`
MaxMP +100 
.ATK +1%
Serangan Menghunus +1%
Kebal Normal -1%`},{code:380,link:null,type:"ARMOR",name:"Pedang Maton",view:`
STR +3%
Daya Jarak Jauh +4%
Akurasi +5%
MaxHP -1000`},{code:381,link:null,type:"ARMOR",name:"Tortuga",view:`
MaxHP +1%
Kekebalan Fisik +3%
Guard Recharge +5%`},{code:382,link:null,type:"ARMOR",name:"Elang Zamrud",view:`
MaxMP +300
CSPD +100
Attack MP Recovery +1`},{code:383,link:null,type:"ARMOR",name:"",view:`
`},{code:384,link:null,type:"ARMOR",name:"Ifrid",view:`
MaxMP +600
Pelindung Fraksional +12%`},{code:385,link:null,type:"ARMOR",name:"Forestia",view:`
MATK +1%
Kekebalan Sihir +3%
Evasion Recharge +5%`},{code:386,link:null,type:"ARMOR",name:"Colon Komandan",view:`
MaxHP +150
MaxMP +50`},{code:387,link:null,type:"ARMOR",name:"Cerberus",view:`
Physical Pierce +3%
Critical Damage +3
Serangan Menghunus +3%`},{code:388,link:null,type:"ARMOR",name:"Cerabes",view:`
MaxHP +1000
Critical Damage +1`},{code:389,link:null,type:"ARMOR",name:"",view:`
`},{code:390,link:null,type:"ARMOR",name:"Boss Roga",view:`
MaxHP +1000
Weapon ATK +1%`},{code:391,link:null,type:"ARMOR",name:"Arcoiris",view:`
Natural HP Regen +10%
MaxHP +10%
.DEF +10%`},{code:392,link:null,type:"SPECIAL",name:"Naga Terong Auvio",view:`
MaxMP +300
Daya Jarak Dekat +4%
ASPD +500
Daya Jarak Jauh -12%
Dengan Kitab Ninjutsu:
Serangan Menghunus +5%
Critical Rate +5`},{code:393,link:null,type:"SPECIAL",name:"Vodre",view:`
Antisipasi +5%
Kekebalan Fisik +5%
Kekebalan Sihir +5%
Critical Damage -150`},{code:394,link:null,type:"SPECIAL",name:"Syaman Hitam Hutan Hantu",view:`
Peneterasi Sihir +5%
CSPD +20%
Evasion Recharge +10%
MaxMP -300
Dengan Perisai:
Stability +5%
.ATK -10%`},{code:395,link:null,type:"SPECIAL",name:"Goblin Makelar",view:`
MaxMP +300
Daya Jarak Jauh +3%
DEX +3%
Dengan Panah:
Daya Jarak Jauh +5%
Dengan Belati:
Tambahan Fisik +50%
Dengan Perisai:
Aggro +25%`},{code:396,link:null,type:"SPECIAL",name:"",view:`
`},{code:397,link:null,type:"SPECIAL",name:"Kapten Sihir & si B",view:`
Daya Jarak Dekat +3%
Serangan Menghunus +3%
MaxMP -150
Kebal Api +10%
Kebal Air +10%
Kebal Angin +10%
Kebal Bumi +15%`},{code:398,link:null,type:"SPECIAL",name:"Stellar Ooze II",view:`
.ATK +5%
Serangan Menghunus +5%
Physical Pierce +5%
MaxMP +150
Natural MP Regen +15%
Reduksi DMG (Bowling) +15%
Revive Time +60%`},{code:399,link:null,type:"SPECIAL",name:"Trus",view:`
Guard Break +10%
Physical Pierce +10%
Dengan Pedang Ganda :
Guard Recharge +25%
Guard Power +25%`},{code:400,link:null,type:"SPECIAL",name:"Wolkissa",view:`
Attack MP Recovery +5
VIT +5%
Resistensi Status Buruk +5%
Dengan Perisai:
Aggro +15%`},{code:401,link:null,type:"SPECIAL",name:"Ignitrus",view:`
MaxHP +1000
MaxMP +100
Kebal Api +20%
+5% stronger against Fire`},{code:402,link:null,type:"SPECIAL",name:"",view:`
`},{code:403,link:null,type:"SPECIAL",name:"Ruzart",view:`
Dodge +10
Critical Rate +10`},{code:404,link:null,type:"SPECIAL",name:"Kapten Amiya",view:`
MaxHP +1000
MaxMP +100
Attack MP Recovery +10`},{code:405,link:null,type:"SPECIAL",name:"Penyihir Bintang",view:`
MATK +9%
CSPD +9%
Antisipasi +9%
Dengan Tongkat:
Aggro -9%
Dengan Perisai:
Aggro +9%`},{code:406,link:null,type:"SPECIAL",name:"Penyihir Naga",view:`
Critical Damage +5%
Attack MP Recovery -100%`},{code:407,link:null,type:"SPECIAL",name:"Potumotter",view:`
MaxMP +400
Aggro -30%
Kebal Normal +20%`},{code:408,link:null,type:"SPECIAL",name:"",view:`
`},{code:409,link:null,type:"SPECIAL",name:"Volgagon",view:`
Critical Rate +20%
ASPD +1000
CSPD -80%`},{code:410,link:null,type:"SPECIAL",name:"Violangkara",view:`
Tambahan Fisik +50%
.ATK +1%
ASPD +250`},{code:411,link:null,type:"SPECIAL",name:"Grimuckus",view:`
Tambahan Sihir +50%
MATK +1%
ASPD +250`},{code:412,link:null,type:"SPECIAL",name:"Puaka Maut",view:`
Serangan Menghunus +10%
Akurasi +15%
Aggro -20%`},{code:413,link:null,type:"SPECIAL",name:"Seele Zauga",view:`
Critical Rate +15
Kekebalan Fisik +5%
Kekebalan Sihir +5%
Kecepatan Item -1.0s`},{code:414,link:null,type:"SPECIAL",name:"Lixi Hitam",view:`
ASPD +300
Resistansi Status Buruk +10%
Aggro +40%
Attack MP Recovery +20
Dengan Zirah Berat:
Pelindung Fraksional 10%
Dengan Zirah Ringan:
Kecepatan Pelindung +10%`},{code:415,link:null,type:"SPECIAL",name:"Felien",view:`
MaxMP +300
Akurasi +20
Akurasi +10%
Akurasi Absolut +5%`},{code:416,link:null,type:"SPECIAL",name:"Crystal Titan",view:`
MaxHP +1000
MaxHP +10%
Pelindung Fraksional 10%`},{code:417,link:null,type:"SPECIAL",name:"Choiyaki Mentai",view:`
MaxMP +300
Daya Jarak Dekat +2%
Kebal Api +1%
MATK -10%
Reduksi DMG (Lantai) -20%`},{code:418,link:null,type:"SPECIAL",name:"Venena",view:`
MaxMP +500
.ATK +1%
MATK +1%
Stability +2%`},{code:419,link:null,type:"SPECIAL",name:"Viscum",view:`
MaxHP +100
Attack MP Recovery +3`},{code:420,link:null,type:"SPECIAL",name:"",view:`
`},{code:421,link:null,type:"SPECIAL",name:"Violacoon",view:`
MATK -6%
Evasion Recharge +4%
Aggro +8%`},{code:422,link:null,type:"SPECIAL",name:"Tentara Batu",view:`
.ATK -6%
Guard Recharge +4%
Aggro +8%`},{code:423,link:null,type:"SPECIAL",name:"Baron Bling-bling",view:`
.ATK +1%
MATK +1%
Critical Damage +1%
Attack MP Recovery +3`},{code:424,link:null,type:"SPECIAL",name:"Ooze",view:`
.ATK +2%
MATK +2%
.DEF -2%
MDEF -2%`},{code:425,link:null,type:"SPECIAL",name:"Nini",view:`
MATK +100
CSPD -1000`},{code:426,link:null,type:"SPECIAL",name:"",view:`
`},{code:427,link:null,type:"SPECIAL",name:"Goovua",view:`
Serangan Menghunus +100
Evasion Recharge +6%
AGI +3%`},{code:428,link:null,type:"SPECIAL",name:"Potum Emas",view:`
Untradable
          Base Drop Rate +1%`},{code:429,link:null,type:"SPECIAL",name:"Kristal Jahat",view:`
Attack MP Recovery +5`},{code:430,link:null,type:"SPECIAL",name:"Don Yeti",view:`
.ATK +100
ASPD -1000`},{code:431,link:null,type:"SPECIAL",name:"Dark Mushroom",view:`
.ATK +1%
MATK +1%
Motion Speed +1%`},{code:432,link:null,type:"SPECIAL",name:"Olobaid",view:`
Kekebalan Fisik +10%
Magical Resistance +10%
Kebal Gelap +20%
Aggro +20%`},{code:433,link:null,type:"SPECIAL",name:"Bexiz",view:`
MaxMP -100
Akurasi +15%
Critical Rate +5
Weapon ATK +10%`},{code:434,link:null,type:"SPECIAL",name:"Titeres",view:`
Attack MP Recovery +10
Dodge +20
Dodge +10%
Dodge Absolut +5%`},{code:435,link:null,type:"ADDITIONAL",name:"Fallburrows",view:`
Daya Jarak Jauh +9%
MaxMP +200
Dodge +10%
Dodge Absolut +5%
Dengan Bowgun:
Daya Jarak Dekat +9%`},{code:436,link:null,type:"ADDITIONAL",name:"Magi Filecia",view:`
MATK +9%
INT +3%
Stability +6%
Dengan Tongkat:
Guard Break +10%
Dengan Pesawat Sihir:
Reduksi DMG (Bowling) +20%`},{code:437,link:null,type:"ADDITIONAL",name:"Lunadore",view:`
Base Drop Rate +1%`},{code:438,link:null,type:"ADDITIONAL",name:"Purro",view:`
Base Drop Rate +1%`},{code:439,link:null,type:"ADDITIONAL",name:"Castilia",view:`
Akurasi +10%
INT +3%
ASPD -900
Daya Jarak Dekat +12%
Daya Jarak Jauh +6%
Dengan Pesawat Sihir:
Motion Speed +5%
Dengan Kitab Ninjutsu:
Peneterasi Sihir +10%`},{code:440,link:null,type:"ADDITIONAL",name:"Perro",view:`
Base Drop Rate +1%`},{code:441,link:null,type:"ADDITIONAL",name:"Mieli",view:`
Peneterasi Sihir +10%
Critical Rate +20%
ASPD +400
CSPD +400
MaxHP -20%`},{code:442,link:null,type:"ADDITIONAL",name:"Lefina Jahat",view:`
.ATK +8%
Physical Pierce +10%
Critical Rate +12
MATK -4%
Kekebalan Fisik -20%
Dengan Zirah Berat:
Kekebalan Fisik +24%`},{code:443,link:null,type:"ADDITIONAL",name:"Eidenliebe",view:`
MaxHP +12%
Peneterasi Sihir +10%
Aggro -15%`},{code:444,link:null,type:"ADDITIONAL",name:"Naga Junior Zyvio",view:`
.ATK +5%
Critical Rate +15
MaxMP +100
Guard Break 5%`},{code:445,link:null,type:"ADDITIONAL",name:"",view:`
`},{code:446,link:null,type:"ADDITIONAL",name:"Raja Kerbau",view:`
Aggro -20%`},{code:447,link:null,type:"ADDITIONAL",name:"Bonivio",view:`
Base Drop Rate +1%`},{code:448,link:null,type:"ADDITIONAL",name:"Datuk Nezim",view:`
MaxHP +3000
VIT +2%
Critical Rate +10
Dengan Sarung Tinju:
 Daya Jarak Dekat +3%`},{code:449,link:null,type:"ADDITIONAL",name:"Adaro",view:`
MATK +6%
Critical Damage +6
MaxHP +1000
Dengan Zirah Berat:
Aggro +10%`},{code:450,link:null,type:"ADDITIONAL",name:"Mercy",view:`
Critical Rate +15
Aggro -15%`},{code:451,link:null,type:"ADDITIONAL",name:"",view:`
`},{code:452,link:null,type:"ADDITIONAL",name:"Omochi",view:`
Base Drop Rate +1%`},{code:453,link:null,type:"ADDITIONAL",name:"Ayah Yashiro Azuki",view:`
.ATK +4%
Daya Jarak Dekat +3%
ASPD +20%
Aggro -10%`},{code:454,link:null,type:"ADDITIONAL",name:"Narumi Hina",view:`
MATK +4%
Daya Jarak Jauh +3%
CSPD +20%
Aggro -10%`},{code:455,link:null,type:"ADDITIONAL",name:"Goldenia",view:`
MaxHP +2000
Pelindung Fraksional 10%
MaxMP -300`},{code:456,link:null,type:"ADDITIONAL",name:"Biskuit Buatan Tangan",view:`
Physical Pierce +10%
MaxHP +12%
Aggro -15%`},{code:457,link:null,type:"ADDITIONAL",name:"",view:`
`},{code:458,link:null,type:"ADDITIONAL",name:"Celeng Mini Merah Putih",view:`
Base Drop Rate +1%`},{code:459,link:null,type:"ADDITIONAL",name:"Altoblepas",view:`
Critical Damage +4
DEX +1%
Akurasi -20%`},{code:460,link:null,type:"ADDITIONAL",name:"Iconos Emas",view:`
MaxHP +1000
Reduksi DMG (Terjang) +10%`},{code:461,link:null,type:"ADDITIONAL",name:"Gespenst II",view:`
Critical Rate +10
Akurasi +30
MaxMP +200
CSPD +200`},{code:462,link:null,type:"ADDITIONAL",name:"Ibu Yashiro Azuki",view:`
Critical Rate +10
Kekebalan Fisik +5%
Kekebalan Sihir +5%
Reduksi DMG (Peluru) +10%`},{code:463,link:null,type:"ADDITIONAL",name:"",view:`
`},{code:464,link:null,type:"ADDITIONAL",name:"Warmonger",view:`
Critical Rate +6
Critical Damage +2`},{code:465,link:null,type:"ADDITIONAL",name:"Naga Senja",view:`
Daya Jarak Dekat +4%
Daya Jarak Jauh +4%
Serangan Menghunus +4%`},{code:466,link:null,type:"ADDITIONAL",name:"Potum Surya",view:`
ASPD +300
CSPD +300
MaxHP -5%
MaxMP -75`},{code:467,link:null,type:"ADDITIONAL",name:"Seltirios",view:`
MaxMP -150
CSPD +300`},{code:468,link:null,type:"ADDITIONAL",name:"Pumpking",view:`
Critical Damage +1
Kebal Api +2%
Attack MP Recovery +3`},{code:469,link:null,type:"ADDITIONAL",name:"",view:`
`},{code:470,link:null,type:"ADDITIONAL",name:"Grylle",view:`
MaxHP +500
.DEF +5%
Guard Power +5%`},{code:471,link:null,type:"ADDITIONAL",name:"Naga Sabana Yelb",view:`
.ATK +3%
ASPD +50%
Daya Jarak Jauh -10%`},{code:472,link:null,type:"ADDITIONAL",name:"Grand Pojo",view:`
Base Drop Rate +1%`},{code:473,link:null,type:"ADDITIONAL",name:"Tengkorak Emas",view:`
MaxHP -10%
ASPD +300`},{code:474,link:null,type:"ADDITIONAL",name:"Celeng Raksasa",view:`
MaxHP +50
MaxMP +50
Daya Jarak Dekat +1%`},{code:475,link:null,type:"ADDITIONAL",name:"",view:`
`},{code:476,link:null,type:"ADDITIONAL",name:"Dusk Machina",view:`
MaxHP +20%
Aggro +10%
Daya Jarak Jauh -10%`},{code:477,link:null,type:"ADDITIONAL",name:"Kapten Karatan",view:`
.DEF +100 MDEF +100
Pelindung Fisik +500
Pelindung Sihir +500`},{code:478,link:null,type:"ADDITIONAL",name:"Chocolate Ooze",view:`
CSPD +500
MaxHP -10%
MaxMP +200`},{code:479,link:null,type:"ADDITIONAL",name:"Candela",view:`
MaxHP +10%
MaxMP -200
ASPD +500`},{code:480,link:null,type:"ADDITIONAL",name:"Ratu Kuno",view:`
MATK +3%
CSPD +50%
Daya Jarak Dekat -10%`},{code:481,link:null,type:"NORMAL",name:"Lobalawar",view:`
Stability 4%
Akurasi 4%
Critical Rate 4%`},{code:482,link:323,type:"UPGRADE",name:"Diark",view:`
MATK +8%
Peneterasi Sihir +20%
CSPD -16%`},{code:483,link:234,type:"UPGRADE",name:"Gegner",view:`
MATK +10%
INT +6%
CSPD +40%
Attack MP Recovery +10%`},{code:484,link:null,type:"SPECIAL",name:"Bayangan Jeritan",view:`
MaxMP +300
Critical Rate +20%
CSPD +1000
.DEF -40%`},{code:485,link:26,type:"UPGRADE",name:"Gerumi Kuat",view:`
MaxHP +400
MaxMP +200
Stability +2%
Accuracy +2%
Critical Rate +4`},{code:486,link:null,type:"SPECIAL",name:"Pelulu Raksasa",view:`
Daya Jarak Dekat +10%
MaxHP +30%
Critical Rate +50%
MaxMP -100
Dengan Zirah Ringan:
Physical Pierce -10%`},{code:487,link:null,type:"ARMOR",name:"Bangrudom",view:`
.ATK +10%
MATK +10%
ASPD +10%
CSPD +10%
MaxHP -20%
Dengan Perisai
Dex +5%
Dengan ZIrah Ringan
Peneterasi SIhir +5%`},{code:488,link:285,type:"UPGRADE",name:"limacina",view:`
Resistensi Status Buruk +5%
Kekebalan Fisik +5%
Kekebalan Sihir +5%`},{code:489,link:221,type:"UPGRADE",name:"Vatudo",view:`
MATK +10%
Peneterasi Sihir +7%
Aggro -11%
MDEF -30%`},{code:490,link:459,type:"UPGRADE",name:"Jiva",view:`
MATK +8%
Critical Damage +6
Dex +3%
Accuracy -20%`},{code:491,link:215,type:"UPGRADE",name:"Naga Meraung Bovinari",view:`
Daya Jarak Dekat +7%
Attack MP Recovery +15
Pelindung Fisik +3000
Pelindung Sihir +3000`},{code:492,link:316,type:"UPGRADE",name:"Doridodi",view:`
Daya Jarak Jauh +10%
Accuracy +17%
MaxHP -25%`},{code:493,link:240,type:"UPGRADE",name:"Humida",view:`
MaxMP +700
.ATK +4%
MATK +4%
Stability +4%`},{code:494,link:231,type:"UPGRADE",name:"Torexesa",view:`
.ATK +10%
MATK +10%
Attack MP Recovery +4
MaxMP -200`},{code:495,link:172,type:"UPGRADE",name:"Breeta",view:`
Attack MP Recovery +15%
MaxHP +5000%
Stability +2%`},{code:496,link:null,type:"NORMAL",name:"VIT+8",view:`
VIT +8`},{code:497,link:216,type:"UPGRADE",name:"Meteora",view:`
Serangan Menghunus +9%
Physical Pierce +5%
Critical Damage +7`},{code:498,link:null,type:"ARMOR",name:"Tangan Mulgoon",view:`
Daya Jarak Dekat +6%
Daya Jarak Jauh +4%
Accuracy +5%
MaxHP +10000
MaxMP -100`},{code:499,link:null,type:"ADDITIONAL",name:"Jibril",view:`
Daya Jarak Dekat +3%
Daya Jarak Jauh +5%
MaxMP +100
Critical Rate +8
Antisipasi +1%
Natural MP Regen +2
Natural MP Regen +4%`},{code:500,link:499,type:"UPGRADE",name:"Jibril II",view:`
Daya Jarak Dekat +6%
Daya Jarak Jauh +8%
MaxMP +100
Critical Rate +12
Antisipasi +2%
Natural MP Regen +4
Natural MP Regen +8%`},{code:501,link:500,type:"UPGRADE",name:"Jibril III",view:`
Daya Jarak Dekat +9%
Daya Jarak Jauh +11%
MaxMP +100
Critical Rate +16
Antisipasi +3%
Natural MP Regen +6
Natural MP Regen +12%`},{code:502,link:407,type:"UPGRADE",name:"Potumotter II",view:`
MaxMP +400
Motion Speed +1%
Aggro -30%
Kebal Normal +25%`},{code:503,link:180,type:"UPGRADE",name:"Potum Pahlawan IV",view:`
MaxHP +13%
Pelindung Fraksional +16%
Akurasi +19%
Aggro +22%`},{code:504,link:198,type:"UPGRADE",name:"Deformis",view:`
.ATK +11%
Attack MP Recovery +8
Antisipasi 14%
MaxMP -200`},{code:505,link:191,type:"UPGRADE",name:"Piscruva",view:`
.ATK +11%
MATK +11%
ASPD -300
CSPD -300`},{code:505,link:239,type:"UPGRADE",name:"Wiltileaf",view:`
.ATK +9%
Critical Damage +12
Motion Speed 0%
Kekebalan Sihir -15%`}],Jd=["NORMAL","UPGRADE","ADDITIONAL","WEAPON","ARMOR","SPECIAL"],Vd={class:"fixed inset-0 pointer-events-none z-0"},zd={key:0,class:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Wd={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse",style:{"animation-delay":"2s"}},Qd={class:"relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-8 md:space-y-14"},qd={class:"flex items-center gap-6"},Yd={class:"text-center md:text-left space-y-1"},Xd={class:"flex items-center gap-3"},Zd={class:"text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all"},$d={class:"flex flex-col items-center md:items-end gap-3"},ep={class:"flex gap-2"},tp={class:"space-y-2 col-span-2 md:col-span-2 lg:col-span-2"},np={class:"relative group"},ap={class:"space-y-2 col-span-1"},ip={class:"truncate"},lp={class:"space-y-1.5 max-h-[300px] overflow-y-auto custom-scroll pr-1"},sp={key:0,class:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"},op=["onClick"],rp={key:0,class:"w-3.5 h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},cp={class:"space-y-2 col-span-1"},up={class:"truncate"},dp={class:"flex justify-between items-center mb-4 pb-2 border-b border-white/5"},pp={class:"grid grid-cols-1 gap-2 max-h-[55vh] overflow-y-auto custom-scroll pr-1"},gp={class:"flex items-center gap-2 mb-2"},fp={class:"flex flex-wrap gap-1.5"},mp=["onClick"],hp={key:0,class:"w-2 h-2 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Ap={class:"space-y-2 col-span-1"},bp={class:"relative group"},kp={class:"space-y-2 col-span-1"},vp={class:"relative group"},xp={class:"relative py-4 flex items-center justify-center"},yp={class:"space-y-10 relative z-10 pb-32"},Mp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Dp=["onClick"],wp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Pp={class:"lg:col-span-6 relative group"},Sp={class:"relative p-6 md:p-10"},Cp={class:"flex flex-col md:flex-row gap-8 items-start"},Tp={class:"relative shrink-0 mx-auto md:mx-0"},Rp=["src","alt"],Ep={class:"flex-1 space-y-6 w-full"},Ip={class:"space-y-2"},Np={class:"grid grid-cols-1 gap-4"},_p={class:"flex items-center gap-4"},Lp={class:"flex flex-col"},Op={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Kp=["onClick"],Bp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},jp={key:0,class:"py-40 text-center animate-pulse"},Gp={class:"flex flex-col items-center gap-10 py-20"},Up={key:0,class:"flex flex-wrap justify-center items-center gap-3"},Hp=["disabled"],Fp={class:"flex gap-2.5 items-center"},Jp=["onClick"],Vp={key:1,class:"px-2 font-black text-blue-500"},zp=["disabled"],Wp={class:"flex items-center gap-4 opacity-50"},Qp={class:"text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"},qp={class:"fixed bottom-8 left-8 z-[200] hidden lg:block"},Yp={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",bg:"bg-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",bg:"bg-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",bg:"bg-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",bg:"bg-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",bg:"bg-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",bg:"bg-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",bg:"bg-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",bg:"bg-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",bg:"bg-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",bg:"bg-indigo-400"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",bg:"bg-teal-400"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",bg:"bg-purple-500"}},n={"Base Stats":[{label:"STR",value:"STR"},{label:"INT",value:"INT"},{label:"DEX",value:"DEX"},{label:"AGI",value:"AGI"},{label:"VIT",value:"VIT"}],"ATK & DEF":[{label:"ATK",value:".ATK"},{label:"MATK",value:"MATK"},{label:"DEF",value:".DEF"},{label:"MDEF",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Accuracy",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Crit Rate",value:"Critical Rate"},{label:"Crit Damage",value:"Critical Damage"}],Speed:[{label:"ASPD",value:"ASPD"},{label:"CSPD",value:"CSPD"},{label:"Motion",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP",value:"MaxHP"},{label:"MaxMP",value:"MaxMP"},{label:"AMPR",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"W.ATK",value:"Weapon ATK"},{label:"DTE",value:"stronger against"}],"Element Resistance":[{label:"Phys Res",value:"Kekebalan Fisik"},{label:"Magic Res",value:"Kekebalan Sihir"},{label:"Fire Res",value:"kebal Api"}],"Barrier & Defense Effect":[{label:"Barrier",value:"Pelindung"},{label:"Ailment",value:"Resistansi Status"},{label:"Aggro",value:"Aggro"}],"Offensive Effect":[{label:"Pierce",value:"Pierce"},{label:"Short Dmg",value:"Jarak Dekat"},{label:"Long Dmg",value:"Jarak Jauh"},{label:"Unsheathe",value:"Menghunus"}],"Reduce DMG":[{label:"Dmg Area",value:"Sekitar Pemain"},{label:"Dmg Floor",value:"Lantai"},{label:"Dmg Bullet",value:"Peluru"}],"Other Stat":[{label:"Drop Rate",value:"Drop Rate"},{label:"EXP",value:"EXP"},{label:"Revive",value:"Revive Time"}]},a=se(""),i=se([]),l=se([]),o=se(!1),r=se(!1),c=se(1),p=se(10),u=se("asc"),d=se(null),g=se(null),h=()=>{r.value=!r.value,r.value&&(o.value=!1)},M=()=>{o.value=!o.value,o.value&&(r.value=!1)},A=O=>{const v=i.value.indexOf(O);v===-1?i.value.push(O):i.value.splice(v,1)},b=O=>{const v=l.value.indexOf(O);v===-1?l.value.push(O):l.value.splice(v,1)},x=()=>{a.value="",i.value=[],l.value=[],c.value=1},T=O=>{const me={NORMAL:"crysta_normal.jpg",WEAPON:"crysta_senjata.jpg",ARMOR:"crysta_zirah.jpg",ADDITIONAL:"crysta_pelengkap.jpg",SPECIAL:"crysta_tambahan.jpg",UPGRADE:"crysta_up.jpg"}[O?.toUpperCase()]||"crysta_normal.jpg";return new URL(Object.assign({"../assets/icons/IconCommunity.vue":fo,"../assets/icons/IconDocumentation.vue":mo,"../assets/icons/IconEcosystem.vue":ho,"../assets/icons/IconSupport.vue":Ao,"../assets/icons/IconTooling.vue":bo,"../assets/icons/crysta_normal.jpg":ko,"../assets/icons/crysta_pelengkap.jpg":vo,"../assets/icons/crysta_senjata.jpg":xo,"../assets/icons/crysta_tambahan.jpg":yo,"../assets/icons/crysta_up.jpg":Mo,"../assets/icons/crysta_zirah.jpg":Do})[`../assets/icons/${me}`],import.meta.url).href},R=O=>({NORMAL:"bg-blue-500/10 text-blue-500 border-blue-500/40",UPGRADE:"bg-purple-500/10 text-purple-500 border-purple-500/40",ADDITIONAL:"bg-yellow-500/10 text-yellow-500 border-yellow-500/40",WEAPON:"bg-red-500/10 text-red-500 border-red-500/40",ARMOR:"bg-green-500/10 text-green-500 border-green-500/40",SPECIAL:"bg-pink-500/10 text-pink-500 border-pink-500/40"})[O?.toUpperCase()]||"bg-slate-500/10 text-slate-500 border-slate-500/40",S=O=>O.link?un.find(v=>String(v.code)===String(O.link)):null,J=O=>un.filter(v=>String(v.link)===String(O.code)),ne=O=>O?Array.isArray(O)?O:O.split(/,|\n/).map(v=>v.trim()).filter(v=>v):[],oe=O=>{a.value=O,window.scrollTo({top:0,behavior:"smooth"})},ve=ae(()=>{let O=un.filter(v=>v.name?.trim());if(a.value){const v=a.value.toLowerCase();O=O.filter(me=>me.name.toLowerCase().includes(v))}return i.value.length>0&&(O=O.filter(v=>i.value.includes(v.type))),l.value.length>0&&(O=O.filter(v=>{const me=(v.view||"").toUpperCase();return l.value.every(B=>me.includes(B.toUpperCase()))})),O.sort((v,me)=>u.value==="asc"?v.name.localeCompare(me.name):me.name.localeCompare(v.name))}),W=ae(()=>{const O=(c.value-1)*p.value;return ve.value.slice(O,O+p.value)}),ee=ae(()=>Math.ceil(ve.value.length/p.value)||1),re=ae(()=>{let O=Math.max(1,c.value-2),v=Math.min(ee.value,O+4);v-O<4&&(O=Math.max(1,v-4));const me=[];for(let B=O;B<=v;B++)me.push(B);return me}),U=O=>{d.value&&!d.value.contains(O.target)&&(o.value=!1),g.value&&!g.value.contains(O.target)&&(r.value=!1)};return hn(()=>{window.addEventListener("click",U)}),vi(()=>{window.removeEventListener("click",U)}),kt([a,i,l,p,u],()=>{c.value=1}),(O,v)=>{const me=xi("router-link");return E(),N("div",{class:y(["min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent",e.isDark?"text-slate-200":"text-slate-900"])},[s("div",Vd,[s("div",{class:y(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),v[8]||(v[8]=s("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-transparent"},null,-1)),e.isDark?(E(),N("div",zd)):Ne("",!0),e.isDark?(E(),N("div",Wd)):Ne("",!0)]),s("div",Qd,[s("header",{class:y(["relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500",e.isDark?"border-white/5":"border-black/5"])},[s("div",qd,[v[11]||(v[11]=s("div",{class:"relative group"},[s("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"}),s("img",{src:xa,class:"relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110",alt:"Logo"})],-1)),s("div",Yd,[s("div",Xd,[s("h1",Zd,[s("span",{class:y(e.isDark?"text-white":"text-slate-900")},"TIMI",2),v[9]||(v[9]=s("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"},"DB",-1))]),v[10]||(v[10]=s("div",{class:"px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase"},"Bahasa Indonesia",-1))]),s("p",{class:y(["text-xs font-black uppercase tracking-[0.5em] opacity-60",e.isDark?"text-slate-400":"text-slate-500"])},"Toram Online Database",2)])]),s("div",$d,[s("div",{class:y(["group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white border-slate-200 shadow-xl shadow-slate-200/50"])},[v[12]||(v[12]=s("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"},null,-1)),s("span",{class:y(["relative text-xs font-black uppercase tracking-[0.2em]",e.isDark?"text-cyan-400":"text-blue-600"])}," Results : "+K(ve.value.length)+" Xtall ",3)],2),s("div",ep,[(E(),N(Y,null,ge(3,B=>s("div",{key:B,class:"w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"})),64))])])],2),s("section",{class:y(["grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl",e.isDark?"bg-slate-950/60 border-white/10 shadow-black/40":"bg-white/80 border-slate-200 shadow-slate-300/50"])},[s("div",tp,[v[15]||(v[15]=s("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2"},[s("span",{class:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"}),Ge(" Search Name ")],-1)),s("div",np,[v[13]||(v[13]=s("div",{class:"absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"},null,-1)),xe(s("input",{"onUpdate:modelValue":v[0]||(v[0]=B=>a.value=B),type:"text",placeholder:"Search xtall name...",class:y(["relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm",e.isDark?"bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600":"bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400"])},null,2),[[Qe,a.value]]),v[14]||(v[14]=s("svg",{class:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-width":"3"})],-1))])]),s("div",ap,[v[19]||(v[19]=s("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 ml-4"},"Type Xtall",-1)),s("div",{class:"relative",ref_key:"typeRef",ref:g},[s("button",{onClick:La(h,["stop"]),class:y(["w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300",r.value?"border-orange-500 ring-4 ring-orange-500/10 scale-[0.98]":"",e.isDark?r.value?"bg-orange-500/10":"bg-slate-900/50 border-white/5":r.value?"bg-orange-50 text-orange-700":"bg-white border-slate-200 shadow-sm"])},[s("span",ip,K(i.value.length===0?"All Type":i.value.length===1?i.value[0]:i.value.length+" Terpilih"),1),(E(),N("svg",{class:y(["w-4 h-4 transition-transform duration-500",r.value?"rotate-180 text-orange-500":"text-slate-500"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...v[16]||(v[16]=[s("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"},null,-1)])],2))],2),ke(ti,{name:"dropdown-slide"},{default:We(()=>[r.value?(E(),N("div",{key:0,class:y(["absolute left-0 top-full mt-3 w-64 z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-3xl",e.isDark?"bg-slate-950/95 border-white/10":"bg-white border-slate-100"])},[s("div",lp,[s("div",{onClick:v[1]||(v[1]=B=>i.value=[]),class:y(["group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all",i.value.length===0?"bg-orange-500 text-white":e.isDark?"hover:bg-white/5 text-slate-400":"hover:bg-slate-50 text-slate-600"])},[v[17]||(v[17]=s("span",{class:"text-[10px] font-black uppercase tracking-widest"},"All Type",-1)),i.value.length===0?(E(),N("div",sp)):Ne("",!0)],2),s("div",{class:y(["h-[1px] my-2",e.isDark?"bg-white/5":"bg-slate-100"])},null,2),(E(!0),N(Y,null,ge(Ze(Jd),B=>(E(),N("div",{key:B,onClick:te=>A(B),class:y(["group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all border border-transparent",i.value.includes(B)?"bg-orange-500/10 border-orange-500/20":e.isDark?"hover:bg-white/5":"hover:bg-slate-50"])},[s("div",{class:y(["w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300",i.value.includes(B)?"border-orange-500 bg-orange-500":"border-slate-500 group-hover:border-orange-400"])},[i.value.includes(B)?(E(),N("svg",rp,[...v[18]||(v[18]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):Ne("",!0)],2),s("span",{class:y(["text-xs font-bold",i.value.includes(B)?"text-orange-500":e.isDark?"text-slate-400":"text-slate-600"])},K(B),3)],10,op))),128))])],2)):Ne("",!0)]),_:1})],512)]),s("div",cp,[v[23]||(v[23]=s("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 ml-4"},"Attributes",-1)),s("div",{class:"relative",ref_key:"statusRef",ref:d},[s("button",{onClick:La(M,["stop"]),class:y(["w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300",o.value?"border-teal-500 ring-4 ring-teal-500/10 scale-[0.98]":"",e.isDark?o.value?"bg-teal-500/10":"bg-slate-900/50 border-white/5":o.value?"bg-teal-50 text-teal-700":"bg-white border-slate-200 shadow-sm"])},[s("span",up,K(l.value.length>0?l.value.length+" Filters Selected":"Attribute Status"),1),(E(),N("svg",{class:y(["w-4 h-4 transition-transform duration-500",o.value?"rotate-180 text-teal-500":"text-slate-500"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...v[20]||(v[20]=[s("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"},null,-1)])],2))],2),ke(ti,{name:"dropdown-slide"},{default:We(()=>[o.value?(E(),N("div",{key:0,class:y(["absolute right-0 md:left-0 top-full mt-3 w-[280px] z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl",e.isDark?"bg-slate-950/98 border-white/10":"bg-white/98 border-slate-200"])},[s("div",dp,[v[21]||(v[21]=s("div",null,[s("h4",{class:"text-xs font-black uppercase italic tracking-tighter"},"Attribute Status"),s("p",{class:"text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5"},"Narrow your results")],-1)),s("button",{onClick:v[2]||(v[2]=B=>l.value=[]),class:"px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg text-[10px] font-black uppercase transition-all duration-300"},"Reset")]),s("div",pp,[(E(),N(Y,null,ge(n,(B,te)=>s("div",{key:te,class:y(["group p-3 rounded-[1.5rem] border-2 transition-all duration-500",e.isDark?"bg-white/[0.02] hover:bg-white/[0.04]":"bg-slate-50",t[te]?.border||"border-transparent"])},[s("div",gp,[s("div",{class:y(["w-1 h-3 rounded-full",t[te]?.bg||"bg-slate-500"])},null,2),s("h5",{class:y(["text-[9px] font-black uppercase tracking-widest",t[te]?.text||"text-slate-400"])},K(te),3)]),s("div",fp,[(E(!0),N(Y,null,ge(B,X=>(E(),N("div",{key:X.value,onClick:La(Ue=>b(X.value),["stop"]),class:y(["group/stat px-2 py-1 rounded-lg text-[9px] font-black transition-all duration-300 border flex items-center gap-1.5 cursor-pointer",l.value.includes(X.value)?t[te]?.text+" border-current bg-current/10 shadow-sm":e.isDark?"text-slate-500 border-white/5 hover:border-white/20":"text-slate-500 border-slate-200 bg-white hover:border-slate-400"])},[s("div",{class:y(["w-2.5 h-2.5 rounded-sm border flex items-center justify-center transition-all",l.value.includes(X.value)?"bg-current border-transparent":"border-current/30"])},[l.value.includes(X.value)?(E(),N("svg",hp,[...v[22]||(v[22]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):Ne("",!0)],2),Ge(" "+K(X.label),1)],10,mp))),128))])],2)),64))])],2)):Ne("",!0)]),_:1})],512)]),s("div",Ap,[v[26]||(v[26]=s("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4"},"Scale",-1)),s("div",bp,[xe(s("select",{"onUpdate:modelValue":v[3]||(v[3]=B=>p.value=B),class:y(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200":"bg-white border-slate-200 focus:border-purple-500 shadow-sm"])},[...v[24]||(v[24]=[s("option",{value:10},"10 Units",-1),s("option",{value:25},"25 Units",-1),s("option",{value:50},"50 Units",-1),s("option",{value:9999},"Show All",-1)])],2),[[xt,p.value]]),v[25]||(v[25]=s("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"})],-1))])]),s("div",kp,[v[29]||(v[29]=s("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 ml-4"},"Sequence",-1)),s("div",vp,[xe(s("select",{"onUpdate:modelValue":v[4]||(v[4]=B=>u.value=B),class:y(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-pink-500 text-slate-200":"bg-white border-slate-200 focus:border-pink-500 shadow-sm"])},[...v[27]||(v[27]=[s("option",{value:"asc"},"A to Z [ASC]",-1),s("option",{value:"desc"},"Z to A [DESC]",-1)])],2),[[xt,u.value]]),v[28]||(v[28]=s("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:scale-y-[-1] transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4","stroke-width":"2"})],-1))])])],2),s("div",xp,[s("div",{class:y(["absolute inset-0 h-[1px] my-auto",e.isDark?"bg-white/5":"bg-slate-200"])},null,2),v[30]||(v[30]=s("div",{class:"absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"},null,-1)),s("div",{class:y(["relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all",e.isDark?"bg-[#020617] border-white/10 text-slate-500":"bg-transparent-50 border-slate-200 text-slate-400"])}," Xtall Versi Indonesia ",2)]),s("main",yp,[(E(!0),N(Y,null,ge(W.value,(B,te)=>(E(),N("div",{key:B.code,class:"flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry",style:Bt({animationDelay:te*70+"ms"})},[s("div",Mp,[S(B)?(E(),N("div",{key:0,onClick:X=>oe(S(B).name),class:y(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/5 hover:border-cyan-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-cyan-400"])},[v[31]||(v[31]=cn('<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-a2372f67></div><div class="flex items-center gap-2 mb-2" data-v-a2372f67><svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" data-v-a2372f67><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-a2372f67></path></svg><span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest" data-v-a2372f67>Previous</span></div>',2)),s("p",{class:y(["text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},K(S(B).name),3),v[32]||(v[32]=s("div",{class:"absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🧬",-1))],10,Dp)):(E(),N("div",wp,[...v[33]||(v[33]=[s("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))]),s("div",Pp,[s("div",{class:y(["absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",B.type==="UPGRADE"?"bg-purple-600":"bg-blue-600"])},null,2),s("div",{class:y(["h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl",e.isDark?"bg-[#0b1226]/90 border-white/10 group-hover:border-white/20":"bg-white border-slate-200 group-hover:border-blue-400"])},[s("div",Sp,[s("div",Cp,[s("div",Tp,[v[34]||(v[34]=s("div",{class:"absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"},null,-1)),s("div",{class:y(["relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110",e.isDark?"bg-slate-950 border-white/10":"bg-slate-50 border-slate-200"])},[s("img",{src:T(B.type),class:"w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]",alt:B.type},null,8,Rp)],2),s("div",{class:y(["absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black",R(B.type)])},K(B.type.charAt(0)),3)]),s("div",Ep,[s("div",Ip,[v[35]||(v[35]=s("div",{class:"flex flex-wrap items-center gap-3"},null,-1)),s("h3",{class:y(["text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400",e.isDark?"text-white":"text-slate-900"])},K(B.name),3)]),s("div",{class:y(["p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]",e.isDark?"bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]":"bg-slate-50 border-slate-100"])},[s("div",Np,[(E(!0),N(Y,null,ge(ne(B.view),(X,Ue)=>(E(),N("div",{key:Ue,class:"flex items-center gap-4 group/item"},[v[36]||(v[36]=s("div",{class:"w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/item:scale-150 transition-transform"},null,-1)),s("p",{class:y(["text-xs md:text-sm font-bold tracking-tight transition-all duration-300",X.includes("-")?"text-red-500":e.isDark?"text-slate-300 group-hover/item:text-white":"text-slate-600 group-hover/item:text-slate-900"])},K(X),3)]))),128))])],2)])])]),s("div",{class:y(["px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4",e.isDark?"bg-white/[0.02] border-white/5":"bg-slate-50 border-slate-100"])},[s("div",_p,[s("div",Lp,[s("span",{class:y(["text-[10px] font-black tracking-widest transition-colors",e.isDark?"text-slate-400":"text-slate-500"])}," TYPE XTALL ",2),s("span",{class:y(["text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter",R(B.type)])},K(B.type),3)]),v[37]||(v[37]=s("div",{class:"h-8 w-[1px] bg-white/10 hidden sm:block"},null,-1))]),ke(me,{to:"/xtall/"+B.code,class:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"},{default:We(()=>[...v[38]||(v[38]=[Ge(" Details ",-1)])]),_:1},8,["to"])],2)],2)]),s("div",Op,[J(B).length?(E(!0),N(Y,{key:0},ge(J(B),X=>(E(),N("div",{key:X.code,onClick:Ue=>oe(X.name),class:y(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/5 hover:border-purple-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-purple-400"])},[v[39]||(v[39]=cn('<div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-500 to-pink-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-a2372f67></div><div class="flex items-center justify-end gap-2 mb-2 text-right" data-v-a2372f67><span class="text-[9px] font-black uppercase text-purple-500 tracking-widest" data-v-a2372f67>Next Upgrade</span><svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24" data-v-a2372f67><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-a2372f67></path></svg></div>',2)),s("p",{class:y(["text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},K(X.name),3),v[40]||(v[40]=s("div",{class:"absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🚀",-1))],10,Kp))),128)):(E(),N("div",Bp,[...v[41]||(v[41]=[s("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))])],4))),128)),ve.value.length===0?(E(),N("div",jp,[v[42]||(v[42]=cn('<div class="inline-flex relative mb-8" data-v-a2372f67><div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping" data-v-a2372f67></div><div class="text-8xl relative" data-v-a2372f67>🔎</div></div><h2 class="text-3xl font-[1000] uppercase italic tracking-tighter" data-v-a2372f67>Xtall not found</h2><p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4" data-v-a2372f67>Search xtall name with correct Indonesian name.</p>',3)),s("button",{onClick:x,class:"mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"},"Reset")])):Ne("",!0),s("div",Gp,[ee.value>1&&p.value<1e3?(E(),N("nav",Up,[s("button",{onClick:v[5]||(v[5]=B=>c.value--),disabled:c.value===1,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," « ",8,Hp),s("div",Fp,[(E(!0),N(Y,null,ge(re.value,B=>(E(),N(Y,{key:B},[B!=="..."?(E(),N("button",{key:0,onClick:te=>c.value=B,class:y(["w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center",c.value===B?"bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1":e.isDark?"bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500":"bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm"])},K(B),11,Jp)):(E(),N("span",Vp,"..."))],64))),128))]),s("button",{onClick:v[6]||(v[6]=B=>c.value++),disabled:c.value===ee.value,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," » ",8,zp)])):Ne("",!0),p.value<100?(E(),N("button",{key:1,onClick:v[7]||(v[7]=B=>p.value=9999),class:"group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl"},[...v[43]||(v[43]=[s("div",{class:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"},null,-1),s("span",{class:"relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic"},"Explore All",-1)])])):Ne("",!0),s("div",Wp,[v[44]||(v[44]=s("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1)),s("p",Qp,"Page "+K(c.value)+" of "+K(ee.value),1),v[45]||(v[45]=s("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1))])])])]),s("div",qp,[s("div",{class:y(["px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500",e.isDark?"bg-slate-900/80 border-white/10":"bg-white/80 border-slate-200 shadow-2xl"])},[...v[46]||(v[46]=[s("div",{class:"flex items-center gap-4"},[s("div",{class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),s("span",{class:"text-[9px] font-black uppercase tracking-widest opacity-60"},"Versi Nama Indonesia")],-1)])],2)])],2)}}},Xp=Xt(Yp,[["__scopeId","data-v-a2372f67"]]),Ll=310,Ga={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Ua={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5},Lt=e=>Math.floor(.025*Math.pow(e,4)+2*e),Zp=(e,t,n)=>{let a=Math.floor((1-t/100)*Lt(e));for(let i=e+1;i<n;i++)a+=Lt(i);return a},Ha=(e,t,n)=>{let a=n,i=(1-t/100)*Lt(e);if(n<i){let l=t/100*Lt(e)+n;return[e,Math.floor(100*l/Lt(e))]}else{a-=i;let l=e+1;for(;Lt(l)<=a;)a-=Lt(l),l+=1;let o=Math.floor(100*a/Lt(l));return[l,o]}},$p={class:"space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4"},eg={class:"flex flex-col items-center gap-6 animate-bounce-slow"},tg={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},ng={class:"lg:col-span-2 space-y-6"},ag={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},ig={class:"group"},lg={class:"group"},sg={class:"group"},og={key:0,class:"space-y-8 animate-in slide-in-from-top-2"},rg={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},cg={class:"relative group select-container"},ug={class:"relative"},dg=["value"],pg={class:"relative group select-container"},gg={class:"relative"},fg=["value"],mg={class:"flex flex-wrap gap-8 ml-2"},hg={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},Ag={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},bg={key:1,class:"space-y-8 animate-in slide-in-from-top-2"},kg={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},vg={class:"relative group select-container"},xg={class:"relative"},yg=["value"],Mg={class:"lg:col-span-1"},Dg={class:"space-y-6 sticky top-8"},wg={class:"relative z-10 space-y-8"},Pg={class:"result-item"},Sg={class:"text-2xl font-black tabular-nums tracking-tighter"},Cg={class:"pt-8 border-t border-white/20 result-item"},Tg={class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-2"},Rg={class:"flex items-baseline gap-2"},Eg={class:"text-6xl font-black italic tracking-tighter drop-shadow-lg block"},Ig={class:"text-xl font-bold opacity-70"},Ng={class:"bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item"},_g={class:"text-sm font-black tabular-nums tracking-wide"},Lg={class:"absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text"},Og={class:"space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll"},Kg={class:"text-[11px] font-black opacity-40"},Bg={class:"text-right"},jg={class:"text-[10px] font-bold opacity-50 ml-1"},Gg={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=se("mq"),n=se(1),a=se(0),i=se(Ll),l=se(!0),o=se(!1),r=Object.keys(Ua),c=se(1),p=se(r.length-1),u=se(Object.keys(Ga)[1]),d=se(1),g=ae(()=>{let M=[],A=0;return r.forEach((b,x)=>{b.startsWith("Chapter")?A++:Ua[b]!==""&&M.push({id:x,label:`CH${A} - ${b}`})}),M}),h=ae(()=>{const M=Number(n.value)||1,A=Number(a.value)||0,b=Number(i.value)||Ll,x=Zp(M,A,b);let T=0;for(let W=c.value;W<=p.value;W++){const ee=Ua[r[W]];typeof ee=="number"&&(T+=ee),r[W].includes("Coenubia")&&!l.value&&(T+=125e5)}const[R,S]=Ha(M,A,T);let J=[];if(o.value&&T>0){let W=M,ee=A;for(let re=1;re<=20;re++){const[U,O]=Ha(W,ee,T);if(J.push({run:re,lv:U,p:O}),W=U,ee=O,W>=b)break}}const ne=(Ga[u.value]||0)*(d.value||0),[oe,ve]=Ha(M,A,ne);return{xpNeeded:x,totalMqXP:T,resLv:R,resP:S,diaryRuns:J,sqLv:oe,sqPercent:ve,sqXP:ne}});return(M,A)=>(E(),N("div",$p,[s("div",eg,[A[11]||(A[11]=s("div",{class:"text-center"},[s("h1",{class:"text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl"}," MQ Calculator "),s("p",{class:"text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse"},"Timi DB System")],-1)),s("div",{class:y(["p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl",e.isDark?"bg-white/5 border-white/10":"bg-slate-200/50 border-slate-300"])},[s("button",{onClick:A[0]||(A[0]=b=>t.value="mq"),class:y(["tab-btn",t.value==="mq"?"tab-active":""])},"Main Quest",2),s("button",{onClick:A[1]||(A[1]=b=>t.value="npc"),class:y(["tab-btn",t.value==="npc"?"tab-active":""])},"NPC Quest",2)],2)]),s("div",tg,[s("div",ng,[s("div",{class:y(["p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/60 border-white/40"])},[s("div",ag,[s("div",ig,[A[12]||(A[12]=s("label",{class:"label-text"},"Current Lv",-1)),xe(s("input",{"onUpdate:modelValue":A[2]||(A[2]=b=>n.value=b),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Qe,n.value,void 0,{number:!0}]])]),s("div",lg,[A[13]||(A[13]=s("label",{class:"label-text"},"Percent %",-1)),xe(s("input",{"onUpdate:modelValue":A[3]||(A[3]=b=>a.value=b),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Qe,a.value,void 0,{number:!0}]])]),s("div",sg,[A[14]||(A[14]=s("label",{class:"label-text text-pink-500"},"Target Lv",-1)),xe(s("input",{"onUpdate:modelValue":A[4]||(A[4]=b=>i.value=b),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Qe,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(E(),N("div",og,[s("div",rg,[s("div",cg,[A[16]||(A[16]=s("label",{class:"label-text text-indigo-400"},"Start From",-1)),s("div",ug,[xe(s("select",{"onUpdate:modelValue":A[5]||(A[5]=b=>c.value=b),class:y(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(E(!0),N(Y,null,ge(g.value,b=>(E(),N("option",{key:b.id,value:b.id,class:"dropdown-item"},K(b.label),9,dg))),128))],2),[[xt,c.value]]),A[15]||(A[15]=s("div",{class:"select-arrow text-indigo-500"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),s("div",pg,[A[18]||(A[18]=s("label",{class:"label-text text-indigo-400"},"End At",-1)),s("div",gg,[xe(s("select",{"onUpdate:modelValue":A[6]||(A[6]=b=>p.value=b),class:y(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(E(!0),N(Y,null,ge(g.value,b=>(E(),N("option",{key:b.id,value:b.id,class:"dropdown-item"},K(b.label),9,fg))),128))],2),[[xt,p.value]]),A[17]||(A[17]=s("div",{class:"select-arrow text-indigo-500"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])]),s("div",mg,[s("label",hg,[xe(s("input",{type:"checkbox","onUpdate:modelValue":A[7]||(A[7]=b=>l.value=b),class:"w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer"},null,512),[[ml,l.value]]),A[19]||(A[19]=s("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),s("label",Ag,[xe(s("input",{type:"checkbox","onUpdate:modelValue":A[8]||(A[8]=b=>o.value=b),class:"w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer"},null,512),[[ml,o.value]]),A[20]||(A[20]=s("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])])])):(E(),N("div",bg,[s("div",kg,[s("div",vg,[A[22]||(A[22]=s("label",{class:"label-text text-emerald-400"},"Select Quest",-1)),s("div",xg,[xe(s("select",{"onUpdate:modelValue":A[9]||(A[9]=b=>u.value=b),class:y(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(E(!0),N(Y,null,ge(Ze(Ga),(b,x)=>(E(),N("option",{key:x,value:x,class:"dropdown-item"},K(x),9,yg))),128))],2),[[xt,u.value]]),A[21]||(A[21]=s("div",{class:"select-arrow text-emerald-500"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),s("div",null,[A[23]||(A[23]=s("label",{class:"label-text text-emerald-400"},"Amount (Stack/Times)",-1)),xe(s("input",{"onUpdate:modelValue":A[10]||(A[10]=b=>d.value=b),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Qe,d.value,void 0,{number:!0}]])])])]))],2)]),s("div",Mg,[s("div",Dg,[s("div",{class:y(["p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive",t.value==="mq"?"bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30":"bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30"])},[s("div",wg,[s("div",Pg,[A[24]||(A[24]=s("p",{class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-1"},"XP Required to Target",-1)),s("h3",Sg,K(h.value.xpNeeded.toLocaleString()),1)]),s("div",Cg,[s("p",Tg,K(t.value==="mq"?"Result After 1 Run":"Result After Turn-in"),1),s("div",Rg,[s("span",Eg," Lv "+K(t.value==="mq"?h.value.resLv:h.value.sqLv),1),s("span",Ig,K(t.value==="mq"?h.value.resP:h.value.sqPercent)+"% ",1)])]),s("div",Ng,[A[25]||(A[25]=s("p",{class:"text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1"},"Total XP Gained",-1)),s("p",_g,K((t.value==="mq"?h.value.totalMqXP:h.value.sqXP).toLocaleString())+" XP ",1)])]),s("div",Lg,K(t.value),1)],2),t.value==="mq"&&o.value&&h.value.diaryRuns.length>0?(E(),N("div",{key:0,class:y(["p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4",e.isDark?"bg-white/5 border-white/10":"bg-white border-slate-200 shadow-lg"])},[A[26]||(A[26]=s("p",{class:"text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2"},"Diary Projection",-1)),s("div",Og,[(E(!0),N(Y,null,ge(h.value.diaryRuns,b=>(E(),N("div",{key:b.run,class:"flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors"},[s("span",Kg,"RUN #"+K(b.run),1),s("div",Bg,[s("span",{class:y(["font-black",e.isDark?"text-white":"text-slate-800"])},"Lv "+K(b.lv),3),s("span",jg,K(b.p)+"%",1)])]))),128))])],2)):Ne("",!0)])])])]))}},Ug=Xt(Gg,[["__scopeId","data-v-c84703e0"]]),Hg=280,Ol=54,Fg=55,Kl=265,Jg=300,Tt=510,Rt=277,{floor:Se,min:Vg,max:zg}=Math,Wg=(e,t,n,a,i)=>{const l=Se(n*(100+(i||0))/100+(a||0));return(e||0)+Se((t||0)/2)+Se(l/6)},Qg=(e,t,n,a,i,l)=>{const o=Se(a*(100+(l||0))/100+(i||0)),r=(50+5*(e||0))/100,c=10+(t||0)-(n||0)+Se(o/10);return Vg(100,zg(0,Se(r*c)))},qg=(e,t,n,a,i)=>{let l=Se((e||0)*(1+(t||0)*.01+(n||0)*.02));const o=i;switch(a){case"Armor":l+=Se(o.VIT/10);break;case"1H Sword":case"Bow":l+=Se((o.DEX+o.STR)/20);break;case"2H Sword":l+=Se(o.STR/10);break;case"Bowgun":l+=Se(o.DEX/10);break;case"Staff":l+=Se(o.INT/10);break;case"Magic Device":l+=Se((o.INT+o.AGI)/20);break;case"Knuckle":l+=Se(o.AGI/10);break;case"Halberd":l+=Se((o.STR+o.AGI)/20);break;case"Katana":l+=Se((o.DEX+o.AGI)/20);break}return l},Yg={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},Xg={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},Zg={class:"lg:col-span-4 space-y-6 animate-float"},$g={class:"grid grid-cols-2 gap-x-4 gap-y-5"},ef={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},tf=["onUpdate:modelValue"],nf={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},af={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},lf=["onUpdate:modelValue"],sf={class:"lg:col-span-4 space-y-6"},of={class:"space-y-4"},rf={class:"relative group select-container"},cf={class:"relative overflow-hidden rounded-xl"},uf=["value"],df={class:"grid grid-cols-2 gap-4"},pf={class:"group"},gf={class:"group"},ff={class:"space-y-3 pt-2"},mf={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},hf=["onUpdate:modelValue"],Af={class:"lg:col-span-4 space-y-6 animate-float-slow"},bf={class:"flex items-baseline gap-2"},kf={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},vf={class:"flex items-baseline gap-2"},xf={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},yf={class:"space-y-4"},Mf={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},Df={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},wf={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},Pf={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=ae(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=Un({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:Hg,createSkill:10,itemDiff:Kl,basePot:Ol,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(p=>i.stats[p]=0),i.craftType==="Armor"?(i.stats.VIT=Tt,i.stats.TEC=Rt,i.itemDiff=Kl,i.basePot=Ol):(i.itemDiff=Jg,i.basePot=Fg,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=Tt,i.stats.STR=Rt):i.craftType==="2H Sword"?(i.stats.STR=Tt,i.stats.DEX=Rt):i.craftType==="Staff"?(i.stats.INT=Tt,i.stats.TEC=Rt):i.craftType==="Magic Device"?(i.stats.INT=Tt,i.stats.AGI=Rt):i.craftType==="Knuckle"?(i.stats.AGI=Tt,i.stats.DEX=Rt):i.craftType==="Halberd"?(i.stats.STR=Tt,i.stats.AGI=Rt):i.craftType==="Katana"&&(i.stats.DEX=Tt,i.stats.AGI=Rt))};hn(()=>l());const o=ae(()=>Wg(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),r=ae(()=>Qg(i.createSkill,o.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),c=ae(()=>qg(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(p,u)=>(E(),N("div",Yg,[u[17]||(u[17]=s("div",{class:"text-center py-4 animate-bounce-slow"},[s("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),s("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),s("div",Xg,[s("div",Zg,[s("div",{class:y(n.value)},[u[3]||(u[3]=s("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),s("div",$g,[(E(!0),N(Y,null,ge(i.stats,(d,g)=>(E(),N("div",{key:g,class:"transition-all hover:scale-105"},[s("label",ef,K(g),1),xe(s("input",{type:"number","onUpdate:modelValue":h=>i.stats[g]=h,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,tf),[[Qe,i.stats[g],void 0,{number:!0}]])]))),128))]),s("div",nf,[(E(),N(Y,null,ge([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>s("div",{key:d[0]},[s("label",af,K(d[1]),1),xe(s("input",{type:"number","onUpdate:modelValue":g=>i[d[0]]=g,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,lf),[[Qe,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),s("div",sf,[s("div",{class:y([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=s("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),s("div",of,[s("div",rf,[u[5]||(u[5]=s("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),s("div",cf,[xe(s("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(E(),N(Y,null,ge(a,d=>s("option",{key:d,value:d,class:"dropdown-item"},K(d),9,uf)),64))],544),[[xt,i.craftType]]),u[4]||(u[4]=s("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),s("div",df,[s("div",pf,[u[6]||(u[6]=s("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),xe(s("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[Qe,i.prof,void 0,{number:!0}]])]),s("div",gf,[u[7]||(u[7]=s("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),xe(s("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[Qe,i.level,void 0,{number:!0}]])])]),s("div",ff,[(E(),N(Y,null,ge([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>s("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[s("span",mf,K(d[1]),1),xe(s("input",{type:"number","onUpdate:modelValue":g=>i[d[0]]=g,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,hf),[[Qe,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),s("div",Af,[s("div",{class:y([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=s("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=s("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),s("div",bf,[s("span",{class:y(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",r.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},K(r.value),3),u[9]||(u[9]=s("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),s("div",kf,[s("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:Bt({width:r.value+"%"})},null,4)])],2),s("div",{class:y([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=s("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=s("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),s("div",vf,[s("span",xf,K(c.value),1),u[12]||(u[12]=s("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),s("div",{class:y(n.value)},[s("div",yf,[s("div",Mf,[s("span",null,"Diff Status: "+K(o.value)+" / "+K(i.itemDiff),1)]),o.value<i.itemDiff?(E(),N("div",Df,[...u[15]||(u[15]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),s("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(E(),N("div",wf,[...u[16]||(u[16]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),s("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},Sf=Xt(Pf,[["__scopeId","data-v-676556a4"]]),Cf={class:"fixed inset-0 pointer-events-none z-0"},Tf={key:0,class:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"},Rf={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"},Ef={key:0,class:"relative z-10 max-w-5xl mx-auto p-6 md:p-20"},If={class:"grid lg:grid-cols-12 gap-12 items-start"},Nf={class:"lg:col-span-5 space-y-6"},_f=["src"],Lf={class:"lg:col-span-7 space-y-8"},Of={class:"text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4"},Kf={class:"text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500"},Bf={class:"flex items-center gap-4"},jf={class:"text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]"},Gf={class:"space-y-6"},Uf={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Hf={class:"text-sm font-bold flex items-center gap-2"},Ff={class:"text-sm font-bold flex items-center gap-2 justify-between"},Jf={key:1,class:"h-screen flex items-center justify-center"},Vf={__name:"XtallDetail",props:["id","isDark"],setup(e){const t=e,n=Ci(),a=ae(()=>un.find(d=>String(d.code)===String(t.id))),i=ae(()=>!a.value||!a.value.link?null:un.find(d=>String(d.code)===String(a.value.link))),l=ae(()=>a.value?un.find(d=>String(d.link)===String(a.value.code)):null),o=d=>{n.push(`/xtall/${d}`)};kt(()=>t.id,()=>{window.scrollTo({top:0,behavior:"smooth"})});const r=d=>d?Array.isArray(d)?d:d.split(/,|\n/).map(g=>g.trim()).filter(g=>g):[],c=d=>{const h={NORMAL:"crysta_normal.jpg",WEAPON:"crysta_senjata.jpg",ARMOR:"crysta_zirah.jpg",ADDITIONAL:"crysta_pelengkap.jpg",SPECIAL:"crysta_tambahan.jpg",UPGRADE:"crysta_up.jpg"}[d?.toUpperCase()]||"crysta_normal.jpg";return new URL(Object.assign({"../assets/icons/IconCommunity.vue":fo,"../assets/icons/IconDocumentation.vue":mo,"../assets/icons/IconEcosystem.vue":ho,"../assets/icons/IconSupport.vue":Ao,"../assets/icons/IconTooling.vue":bo,"../assets/icons/crysta_normal.jpg":ko,"../assets/icons/crysta_pelengkap.jpg":vo,"../assets/icons/crysta_senjata.jpg":xo,"../assets/icons/crysta_tambahan.jpg":yo,"../assets/icons/crysta_up.jpg":Mo,"../assets/icons/crysta_zirah.jpg":Do})[`../assets/icons/${h}`],import.meta.url).href},p=d=>({NORMAL:"bg-blue-500 text-white border-blue-400",ADDITIONAL:"bg-yellow-500 text-white border-yellow-400",UPGRADE:"bg-purple-500 text-white border-purple-400",WEAPON:"bg-red-500 text-white border-red-400",ARMOR:"bg-green-500 text-white border-green-400"})[d?.toUpperCase()]||"bg-slate-700 text-white border-slate-600",u=d=>({NORMAL:"bg-blue-600",UPGRADE:"bg-purple-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600"})[d?.toUpperCase()]||"bg-cyan-600";return(d,g)=>(E(),N("div",{class:y(["min-h-screen relative overflow-hidden font-sans transition-all duration-700",e.isDark?"bg-[#020617] text-slate-200":"bg-slate-50 text-slate-900"])},[s("div",Cf,[s("div",{class:y(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),e.isDark?(E(),N("div",Tf)):Ne("",!0),e.isDark?(E(),N("div",Rf)):Ne("",!0)]),a.value?(E(),N("div",Ef,[s("button",{onClick:g[0]||(g[0]=h=>d.$router.push("/xtall")),class:"group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2"},[...g[3]||(g[3]=[s("div",{class:"w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-colors"},[s("svg",{class:"w-5 h-5 text-cyan-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{d:"M15 19l-7-7 7-7","stroke-width":"3"})])],-1),s("span",{class:"text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500"},"Back to Database",-1)])]),s("div",If,[s("div",Nf,[s("div",{class:y(["relative aspect-square rounded-[3.5rem] border-2 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-700 group",e.isDark?"bg-slate-950/80 border-white/10":"bg-white border-slate-200"])},[s("div",{class:y(["absolute inset-0 opacity-20 blur-3xl animate-pulse",u(a.value.type)])},null,2),s("img",{src:c(a.value.type),class:"relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110"},null,8,_f),s("div",{class:y(["absolute bottom-8 px-6 py-2 rounded-5xl border-2 font-black text-[10px] tracking-widest uppercase shadow-xl",p(a.value.type)])},K(a.value.type),3)],2)]),s("div",Lf,[s("div",null,[s("h1",Of,[s("span",Kf,K(a.value.name),1)]),s("div",Bf,[g[4]||(g[4]=s("div",{class:"h-[2px] w-12 bg-cyan-500"},null,-1)),s("p",jf,"ID Code: #"+K(a.value.code),1)])]),s("div",{class:y(["p-8 md:p-12 rounded-[3rem] border-2 backdrop-blur-3xl shadow-2xl relative overflow-hidden",e.isDark?"bg-slate-950/50 border-white/70 shadow-black/50":"bg-white/80 border-slate-200 shadow-slate-200/50"])},[g[6]||(g[6]=s("div",{class:"absolute top-0 right-0 p-8 text-8xl opacity-[0.03] grayscale pointer-events-none"},"🧬",-1)),g[7]||(g[7]=s("h3",{class:"text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8 flex items-center gap-3"},[s("span",{class:"w-2 h-2 rounded-full bg-cyan-500"}),Ge(" Status/Effect ")],-1)),s("div",Gf,[(E(!0),N(Y,null,ge(r(a.value.view),(h,M)=>(E(),N("div",{key:M,class:"flex items-start gap-4 group/stat"},[g[5]||(g[5]=s("div",{class:"mt-1.5 w-2 h-2 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 group-hover/stat:scale-150 transition-transform"},null,-1)),s("p",{class:y(["text-lg md:text-xl font-bold tracking-tight transition-colors",h.includes("-")?"text-red-500":e.isDark?"text-slate-200 group-hover/stat:text-cyan-400":"text-slate-700"])},K(h),3)]))),128))])],2),s("div",Uf,[i.value?(E(),N("div",{key:0,onClick:g[1]||(g[1]=h=>o(i.value.code)),class:y(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden",e.isDark?"bg-white/5 border-white/5 hover:border-cyan-500/50":"bg-slate-100 border-slate-200 hover:border-cyan-500 shadow-lg"])},[g[9]||(g[9]=s("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Evolution",-1)),s("p",Hf,[g[8]||(g[8]=s("span",{class:"text-cyan-500 group-hover:-translate-x-1 transition-transform"},"←",-1)),Ge(" "+K(i.value.name),1)])],2)):(E(),N("div",{key:1,class:y(["p-6 rounded-[2.5rem] border-2 border-dashed opacity-50",e.isDark?"border-white/100":"border-slate-300"])},[...g[10]||(g[10]=[s("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Evolution",-1),s("p",{class:"text-xs font-bold opacity-70 italic"},"None (Base Xtall)",-1)])],2)),l.value?(E(),N("div",{key:2,onClick:g[2]||(g[2]=h=>o(l.value.code)),class:y(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden",e.isDark?"bg-white/5 border-white/5 hover:border-purple-500/50":"bg-slate-100 border-slate-200 hover:border-purple-500 shadow-lg"])},[g[12]||(g[12]=s("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Next Upgrade",-1)),s("p",Ff,[Ge(K(l.value.name)+" ",1),g[11]||(g[11]=s("span",{class:"text-purple-500 group-hover:translate-x-1 transition-transform"},"→",-1))])],2)):(E(),N("div",{key:3,class:y(["p-6 rounded-[2.5rem] border-2 border-dashed opacity-50",e.isDark?"border-white/100":"border-slate-300"])},[...g[13]||(g[13]=[s("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Next Upgrade",-1),s("p",{class:"text-xs font-bold opacity-70 italic"},"Max Upgrade",-1)])],2))])])])])):(E(),N("div",Jf,[...g[14]||(g[14]=[s("div",{class:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"},null,-1)])]))],2))}},zf=Xt(Vf,[["__scopeId","data-v-21c89edf"]]),Wf=[{path:"/",name:"bag",component:dd},{path:"/mq",name:"mainquest",component:Fd},{path:"/mq-calc",name:"mqcalc",component:Ug},{path:"/bs-calc",name:"bs-calc",component:Sf},{path:"/xtall",name:"xtall",component:Xp},{path:"/xtall/:id",name:"XtallDetail",component:zf,props:!0}],Qf=i0({history:Ou("/toram-vue/"),routes:Wf});document.title||(document.title="Timi DB Vue | Toram Online Database");const wo=qc(A0);wo.use(Qf);wo.mount("#app");
