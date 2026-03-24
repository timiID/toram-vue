(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function pi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ke={},sn=[],mt=()=>{},zl=()=>!1,ma=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),gi=e=>e.startsWith("onUpdate:"),Se=Object.assign,mi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ms=Object.prototype.hasOwnProperty,me=(e,t)=>Ms.call(e,t),q=Array.isArray,rn=e=>Hn(e)==="[object Map]",hn=e=>Hn(e)==="[object Set]",Hi=e=>Hn(e)==="[object Date]",ee=e=>typeof e=="function",Re=e=>typeof e=="string",it=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Zl=e=>(be(e)||ee(e))&&ee(e.then)&&ee(e.catch),Xl=Object.prototype.toString,Hn=e=>Xl.call(e),Ds=e=>Hn(e).slice(8,-1),$l=e=>Hn(e)==="[object Object]",fi=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Rs=/-\w/g,tt=fa(e=>e.replace(Rs,t=>t.slice(1).toUpperCase())),Cs=/\B([A-Z])/g,en=fa(e=>e.replace(Cs,"-$1").toLowerCase()),ha=fa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ea=fa(e=>e?`on${ha(e)}`:""),Ut=(e,t)=>!Object.is(e,t),$n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},eo=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},Aa=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ss=e=>{const t=Re(e)?Number(e):NaN;return isNaN(t)?e:t};let Wi;const ba=()=>Wi||(Wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wt(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=Re(a)?Ts(a):wt(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(Re(e)||be(e))return e}const Es=/;(?![^(]*\))/g,Is=/:([^]+)/,Bs=/\/\*[^]*?\*\//g;function Ts(e){const t={};return e.replace(Bs,"").split(Es).forEach(n=>{if(n){const a=n.split(Is);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function y(e){let t="";if(Re(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const a=y(e[n]);a&&(t+=a+" ")}else if(be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ks="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Os=pi(Ks);function to(e){return!!e||e===""}function Ns(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=Wn(e[a],t[a]);return n}function Wn(e,t){if(e===t)return!0;let n=Hi(e),a=Hi(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=it(e),a=it(t),n||a)return e===t;if(n=q(e),a=q(t),n||a)return n&&a?Ns(e,t):!1;if(n=be(e),a=be(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const s in e){const r=e.hasOwnProperty(s),c=t.hasOwnProperty(s);if(r&&!c||!r&&c||!Wn(e[s],t[s]))return!1}}return String(e)===String(t)}function hi(e,t){return e.findIndex(n=>Wn(n,t))}const no=e=>!!(e&&e.__v_isRef===!0),T=e=>Re(e)?e:e==null?"":q(e)||be(e)&&(e.toString===Xl||!ee(e.toString))?no(e)?T(e.value):JSON.stringify(e,ao,2):String(e),ao=(e,t)=>no(t)?ao(e,t.value):rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[Ia(a,l)+" =>"]=i,n),{})}:hn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ia(n))}:it(t)?Ia(t):be(t)&&!q(t)&&!$l(t)?String(t):t,Ia=(e,t="")=>{var n;return it(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Qe;class Gs{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!t&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Qe;try{return Qe=this,t()}finally{Qe=n}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){this._on>0&&--this._on===0&&(Qe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ls(){return Qe}let xe;const Ba=new WeakSet;class io{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ba.has(this)&&(Ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ji(this),so(this);const t=xe,n=nt;xe=this,nt=!0;try{return this.fn()}finally{ro(this),xe=t,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ki(t);this.deps=this.depsTail=void 0,Ji(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qa(this)&&this.run()}get dirty(){return qa(this)}}let lo=0,Pn,_n;function oo(e,t=!1){if(e.flags|=8,t){e.next=_n,_n=e;return}e.next=Pn,Pn=e}function Ai(){lo++}function bi(){if(--lo>0)return;if(_n){let t=_n;for(_n=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pn;){let t=Pn;for(Pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function so(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ro(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),ki(a),Fs(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function qa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(co(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function co(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===En)||(e.globalVersion=En,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qa(e))))return;e.flags|=2;const t=e.dep,n=xe,a=nt;xe=e,nt=!0;try{so(e);const i=e.fn(e._value);(t.version===0||Ut(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{xe=n,nt=a,ro(e),e.flags&=-3}}function ki(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)ki(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fs(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let nt=!0;const uo=[];function Mt(){uo.push(nt),nt=!1}function Dt(){const e=uo.pop();nt=e===void 0?!0:e}function Ji(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=xe;xe=void 0;try{t()}finally{xe=n}}}let En=0;class Us{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!nt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new Us(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,po(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=a)}return n}trigger(t){this.version++,En++,this.notify(t)}notify(t){Ai();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bi()}}}function po(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)po(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const za=new WeakMap,Xt=Symbol(""),Za=Symbol(""),In=Symbol("");function Ke(e,t,n){if(nt&&xe){let a=za.get(e);a||za.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new vi),i.map=a,i.key=n),i.track()}}function xt(e,t,n,a,i,l){const s=za.get(e);if(!s){En++;return}const r=c=>{c&&c.trigger()};if(Ai(),t==="clear")s.forEach(r);else{const c=q(e),p=c&&fi(n);if(c&&n==="length"){const u=Number(a);s.forEach((d,m)=>{(m==="length"||m===In||!it(m)&&m>=u)&&r(d)})}else switch((n!==void 0||s.has(void 0))&&r(s.get(n)),p&&r(s.get(In)),t){case"add":c?p&&r(s.get("length")):(r(s.get(Xt)),rn(e)&&r(s.get(Za)));break;case"delete":c||(r(s.get(Xt)),rn(e)&&r(s.get(Za)));break;case"set":rn(e)&&r(s.get(Xt));break}}bi()}function nn(e){const t=de(e);return t===e?t:(Ke(t,"iterate",In),et(e)?t:t.map(lt))}function ka(e){return Ke(e=de(e),"iterate",In),e}function Tt(e,t){return Rt(e)?$t(e)?pn(lt(t)):pn(t):lt(t)}const js={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,e=>Tt(this,e))},concat(...e){return nn(this).concat(...e.map(t=>q(t)?nn(t):t))},entries(){return Ta(this,"entries",e=>(e[1]=Tt(this,e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(a=>Tt(this,a)),arguments)},find(e,t){return ht(this,"find",e,t,n=>Tt(this,n),arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,n=>Tt(this,n),arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ka(this,"includes",e)},indexOf(...e){return Ka(this,"indexOf",e)},join(e){return nn(this).join(e)},lastIndexOf(...e){return Ka(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return kn(this,"pop")},push(...e){return kn(this,"push",e)},reduce(e,...t){return Qi(this,"reduce",e,t)},reduceRight(e,...t){return Qi(this,"reduceRight",e,t)},shift(){return kn(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return kn(this,"splice",e)},toReversed(){return nn(this).toReversed()},toSorted(e){return nn(this).toSorted(e)},toSpliced(...e){return nn(this).toSpliced(...e)},unshift(...e){return kn(this,"unshift",e)},values(){return Ta(this,"values",e=>Tt(this,e))}};function Ta(e,t,n){const a=ka(e),i=a[t]();return a!==e&&!et(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const Hs=Array.prototype;function ht(e,t,n,a,i,l){const s=ka(e),r=s!==e&&!et(e),c=s[t];if(c!==Hs[t]){const d=c.apply(e,l);return r?lt(d):d}let p=n;s!==e&&(r?p=function(d,m){return n.call(this,Tt(e,d),m,e)}:n.length>2&&(p=function(d,m){return n.call(this,d,m,e)}));const u=c.call(s,p,a);return r&&i?i(u):u}function Qi(e,t,n,a){const i=ka(e);let l=n;return i!==e&&(et(e)?n.length>3&&(l=function(s,r,c){return n.call(this,s,r,c,e)}):l=function(s,r,c){return n.call(this,s,Tt(e,r),c,e)}),i[t](l,...a)}function Ka(e,t,n){const a=de(e);Ke(a,"iterate",In);const i=a[t](...n);return(i===-1||i===!1)&&wi(n[0])?(n[0]=de(n[0]),a[t](...n)):i}function kn(e,t,n=[]){Mt(),Ai();const a=de(e)[t].apply(e,n);return bi(),Dt(),a}const Ws=pi("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(it));function Js(e){it(e)||(e=String(e));const t=de(this);return Ke(t,"has",e),t.hasOwnProperty(e)}class mo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?tr:bo:l?Ao:ho).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const s=q(t);if(!i){let c;if(s&&(c=js[n]))return c;if(n==="hasOwnProperty")return Js}const r=Reflect.get(t,n,Le(t)?t:a);if((it(n)?go.has(n):Ws(n))||(i||Ke(t,"get",n),l))return r;if(Le(r)){const c=s&&fi(n)?r:r.value;return i&&be(c)?$a(c):c}return be(r)?i?$a(r):An(r):r}}class fo extends mo{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const s=q(t)&&fi(n);if(!this._isShallow){const p=Rt(l);if(!et(a)&&!Rt(a)&&(l=de(l),a=de(a)),!s&&Le(l)&&!Le(a))return p||(l.value=a),!0}const r=s?Number(n)<t.length:me(t,n),c=Reflect.set(t,n,a,Le(t)?t:i);return t===de(i)&&(r?Ut(a,l)&&xt(t,"set",n,a):xt(t,"add",n,a)),c}deleteProperty(t,n){const a=me(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&xt(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!it(n)||!go.has(n))&&Ke(t,"has",n),a}ownKeys(t){return Ke(t,"iterate",q(t)?"length":Xt),Reflect.ownKeys(t)}}class Qs extends mo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ys=new fo,Vs=new Qs,qs=new fo(!0);const Xa=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function zs(e,t,n){return function(...a){const i=this.__v_raw,l=de(i),s=rn(l),r=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,p=i[e](...a),u=n?Xa:t?pn:lt;return!t&&Ke(l,"iterate",c?Za:Xt),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:r?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Zs(e,t){const n={get(i){const l=this.__v_raw,s=de(l),r=de(i);e||(Ut(i,r)&&Ke(s,"get",i),Ke(s,"get",r));const{has:c}=Vn(s),p=t?Xa:e?pn:lt;if(c.call(s,i))return p(l.get(i));if(c.call(s,r))return p(l.get(r));l!==s&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Ke(de(i),"iterate",Xt),i.size},has(i){const l=this.__v_raw,s=de(l),r=de(i);return e||(Ut(i,r)&&Ke(s,"has",i),Ke(s,"has",r)),i===r?l.has(i):l.has(i)||l.has(r)},forEach(i,l){const s=this,r=s.__v_raw,c=de(r),p=t?Xa:e?pn:lt;return!e&&Ke(c,"iterate",Xt),r.forEach((u,d)=>i.call(l,p(u),p(d),s))}};return Se(n,e?{add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear")}:{add(i){!t&&!et(i)&&!Rt(i)&&(i=de(i));const l=de(this);return Vn(l).has.call(l,i)||(l.add(i),xt(l,"add",i,i)),this},set(i,l){!t&&!et(l)&&!Rt(l)&&(l=de(l));const s=de(this),{has:r,get:c}=Vn(s);let p=r.call(s,i);p||(i=de(i),p=r.call(s,i));const u=c.call(s,i);return s.set(i,l),p?Ut(l,u)&&xt(s,"set",i,l):xt(s,"add",i,l),this},delete(i){const l=de(this),{has:s,get:r}=Vn(l);let c=s.call(l,i);c||(i=de(i),c=s.call(l,i)),r&&r.call(l,i);const p=l.delete(i);return c&&xt(l,"delete",i,void 0),p},clear(){const i=de(this),l=i.size!==0,s=i.clear();return l&&xt(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=zs(i,e,t)}),n}function xi(e,t){const n=Zs(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(me(n,i)&&i in a?n:a,i,l)}const Xs={get:xi(!1,!1)},$s={get:xi(!1,!0)},er={get:xi(!0,!1)};const ho=new WeakMap,Ao=new WeakMap,bo=new WeakMap,tr=new WeakMap;function nr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ar(e){return e.__v_skip||!Object.isExtensible(e)?0:nr(Ds(e))}function An(e){return Rt(e)?e:yi(e,!1,Ys,Xs,ho)}function ko(e){return yi(e,!1,qs,$s,Ao)}function $a(e){return yi(e,!0,Vs,er,bo)}function yi(e,t,n,a,i){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=ar(e);if(l===0)return e;const s=i.get(e);if(s)return s;const r=new Proxy(e,l===2?a:n);return i.set(e,r),r}function $t(e){return Rt(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function wi(e){return e?!!e.__v_raw:!1}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function ir(e){return!me(e,"__v_skip")&&Object.isExtensible(e)&&eo(e,"__v_skip",!0),e}const lt=e=>be(e)?An(e):e,pn=e=>be(e)?$a(e):e;function Le(e){return e?e.__v_isRef===!0:!1}function ne(e){return vo(e,!1)}function lr(e){return vo(e,!0)}function vo(e,t){return Le(e)?e:new or(e,t)}class or{constructor(t,n){this.dep=new vi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:de(t),this._value=n?t:lt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||Rt(t);t=a?t:de(t),Ut(t,n)&&(this._rawValue=t,this._value=a?t:lt(t),this.dep.trigger())}}function Ge(e){return Le(e)?e.value:e}const sr={get:(e,t,n)=>t==="__v_raw"?e:Ge(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function xo(e){return $t(e)?e:new Proxy(e,sr)}class rr{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new vi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=En-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return oo(this,!0),!0}get value(){const t=this.dep.track();return co(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function cr(e,t,n=!1){let a,i;return ee(e)?a=e:(a=e.get,i=e.set),new rr(a,i,n)}const zn={},la=new WeakMap;let qt;function ur(e,t=!1,n=qt){if(n){let a=la.get(n);a||la.set(n,a=[]),a.push(e)}}function dr(e,t,n=ke){const{immediate:a,deep:i,once:l,scheduler:s,augmentJob:r,call:c}=n,p=f=>i?f:et(f)||i===!1||i===0?yt(f,1):yt(f);let u,d,m,A,x=!1,w=!1;if(Le(e)?(d=()=>e.value,x=et(e)):$t(e)?(d=()=>p(e),x=!0):q(e)?(w=!0,x=e.some(f=>$t(f)||et(f)),d=()=>e.map(f=>{if(Le(f))return f.value;if($t(f))return p(f);if(ee(f))return c?c(f,2):f()})):ee(e)?t?d=c?()=>c(e,2):e:d=()=>{if(m){Mt();try{m()}finally{Dt()}}const f=qt;qt=u;try{return c?c(e,3,[A]):e(A)}finally{qt=f}}:d=mt,t&&i){const f=d,b=i===!0?1/0:i;d=()=>yt(f(),b)}const L=Ls(),I=()=>{u.stop(),L&&L.active&&mi(L.effects,u)};if(l&&t){const f=t;t=(...b)=>{f(...b),I()}}let _=w?new Array(e.length).fill(zn):zn;const P=f=>{if(!(!(u.flags&1)||!u.dirty&&!f))if(t){const b=u.run();if(i||x||(w?b.some((W,J)=>Ut(W,_[J])):Ut(b,_))){m&&m();const W=qt;qt=u;try{const J=[b,_===zn?void 0:w&&_[0]===zn?[]:_,A];_=b,c?c(t,3,J):t(...J)}finally{qt=W}}}else u.run()};return r&&r(P),u=new io(d),u.scheduler=s?()=>s(P,!1):P,A=f=>ur(f,!1,u),m=u.onStop=()=>{const f=la.get(u);if(f){if(c)c(f,4);else for(const b of f)b();la.delete(u)}},t?a?P(!0):_=u.run():s?s(P.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function yt(e,t=1/0,n){if(t<=0||!be(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Le(e))yt(e.value,t,n);else if(q(e))for(let a=0;a<e.length;a++)yt(e[a],t,n);else if(hn(e)||rn(e))e.forEach(a=>{yt(a,t,n)});else if($l(e)){for(const a in e)yt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&yt(e[a],t,n)}return e}function Jn(e,t,n,a){try{return a?e(...a):e()}catch(i){va(i,t,n)}}function ot(e,t,n,a){if(ee(e)){const i=Jn(e,t,n,a);return i&&Zl(i)&&i.catch(l=>{va(l,t,n)}),i}if(q(e)){const i=[];for(let l=0;l<e.length;l++)i.push(ot(e[l],t,n,a));return i}}function va(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||ke;if(t){let r=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}r=r.parent}if(l){Mt(),Jn(l,null,10,[e,c,p]),Dt();return}}pr(e,n,i,a,s)}function pr(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const je=[];let pt=-1;const cn=[];let Kt=null,an=0;const yo=Promise.resolve();let oa=null;function xa(e){const t=oa||yo;return e?t.then(this?e.bind(this):e):t}function gr(e){let t=pt+1,n=je.length;for(;t<n;){const a=t+n>>>1,i=je[a],l=Bn(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function Pi(e){if(!(e.flags&1)){const t=Bn(e),n=je[je.length-1];!n||!(e.flags&2)&&t>=Bn(n)?je.push(e):je.splice(gr(t),0,e),e.flags|=1,wo()}}function wo(){oa||(oa=yo.then(_o))}function mr(e){q(e)?cn.push(...e):Kt&&e.id===-1?Kt.splice(an+1,0,e):e.flags&1||(cn.push(e),e.flags|=1),wo()}function Yi(e,t,n=pt+1){for(;n<je.length;n++){const a=je[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;je.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function Po(e){if(cn.length){const t=[...new Set(cn)].sort((n,a)=>Bn(n)-Bn(a));if(cn.length=0,Kt){Kt.push(...t);return}for(Kt=t,an=0;an<Kt.length;an++){const n=Kt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kt=null,an=0}}const Bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _o(e){try{for(pt=0;pt<je.length;pt++){const t=je[pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Jn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pt<je.length;pt++){const t=je[pt];t&&(t.flags&=-2)}pt=-1,je.length=0,Po(),oa=null,(je.length||cn.length)&&_o()}}let Ie=null,Mo=null;function sa(e){const t=Ie;return Ie=e,Mo=e&&e.type.__scopeId||null,t}function He(e,t=Ie,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&da(-1);const l=sa(t);let s;try{s=e(...i)}finally{sa(l),a._d&&da(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function Me(e,t){if(Ie===null)return e;const n=Ma(Ie),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,s,r,c=ke]=t[i];l&&(ee(l)&&(l={mounted:l,updated:l}),l.deep&&yt(s),a.push({dir:l,instance:n,value:s,oldValue:void 0,arg:r,modifiers:c}))}return e}function Jt(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let s=0;s<i.length;s++){const r=i[s];l&&(r.oldValue=l[s].value);let c=r.dir[a];c&&(Mt(),ot(c,n,8,[e.el,r,e,t]),Dt())}}function ea(e,t){if(Ne){let n=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===n&&(n=Ne.provides=Object.create(a)),n[e]=t}}function at(e,t,n=!1){const a=ss();if(a||dn){let i=dn?dn._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(a&&a.proxy):t}}const fr=Symbol.for("v-scx"),hr=()=>at(fr);function Pt(e,t,n){return Do(e,t,n)}function Do(e,t,n=ke){const{immediate:a,deep:i,flush:l,once:s}=n,r=Se({},n),c=t&&a||!t&&l!=="post";let p;if(Nn){if(l==="sync"){const A=hr();p=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=mt,A.resume=mt,A.pause=mt,A}}const u=Ne;r.call=(A,x,w)=>ot(A,u,x,w);let d=!1;l==="post"?r.scheduler=A=>{qe(A,u&&u.suspense)}:l!=="sync"&&(d=!0,r.scheduler=(A,x)=>{x?A():Pi(A)}),r.augmentJob=A=>{t&&(A.flags|=4),d&&(A.flags|=2,u&&(A.id=u.uid,A.i=u))};const m=dr(e,t,r);return Nn&&(p?p.push(m):c&&m()),m}function Ar(e,t,n){const a=this.proxy,i=Re(e)?e.includes(".")?Ro(a,e):()=>a[e]:e.bind(a,a);let l;ee(t)?l=t:(l=t.handler,n=t);const s=Qn(this),r=Do(i,l.bind(a),n);return s(),r}function Ro(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const br=Symbol("_vte"),Co=e=>e.__isTeleport,vt=Symbol("_leaveCb"),Zn=Symbol("_enterCb");function kr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),Go(()=>{e.isUnmounting=!0}),e}const $e=[Function,Array],So={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},Eo=e=>{const t=e.subTree;return t.component?Eo(t.component):t},vr={name:"BaseTransition",props:So,setup(e,{slots:t}){const n=ss(),a=kr();return()=>{const i=t.default&&To(t.default(),!0);if(!i||!i.length)return;const l=Io(i),s=de(e),{mode:r}=s;if(a.isLeaving)return Oa(l);const c=Vi(l);if(!c)return Oa(l);let p=ei(c,s,a,n,d=>p=d);c.type!==Oe&&Tn(c,p);let u=n.subTree&&Vi(n.subTree);if(u&&u.type!==Oe&&!zt(u,c)&&Eo(n).type!==Oe){let d=ei(u,s,a,n);if(Tn(u,d),r==="out-in"&&c.type!==Oe)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Oa(l);r==="in-out"&&c.type!==Oe?d.delayLeave=(m,A,x)=>{const w=Bo(a,u);w[String(u.key)]=u,m[vt]=()=>{A(),m[vt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{x(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function Io(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Oe){t=n;break}}return t}const xr=vr;function Bo(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function ei(e,t,n,a,i){const{appear:l,mode:s,persisted:r=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:A,onAfterLeave:x,onLeaveCancelled:w,onBeforeAppear:L,onAppear:I,onAfterAppear:_,onAppearCancelled:P}=t,f=String(e.key),b=Bo(n,e),W=(X,ie)=>{X&&ot(X,a,9,ie)},J=(X,ie)=>{const le=ie[1];W(X,ie),q(X)?X.every(G=>G.length<=1)&&le():X.length<=1&&le()},we={mode:s,persisted:r,beforeEnter(X){let ie=c;if(!n.isMounted)if(l)ie=L||c;else return;X[vt]&&X[vt](!0);const le=b[f];le&&zt(e,le)&&le.el[vt]&&le.el[vt](),W(ie,[X])},enter(X){let ie=p,le=u,G=d;if(!n.isMounted)if(l)ie=I||p,le=_||u,G=P||d;else return;let oe=!1;const Pe=X[Zn]=Ee=>{oe||(oe=!0,Ee?W(G,[X]):W(le,[X]),we.delayedLeave&&we.delayedLeave(),X[Zn]=void 0)};ie?J(ie,[X,Pe]):Pe()},leave(X,ie){const le=String(e.key);if(X[Zn]&&X[Zn](!0),n.isUnmounting)return ie();W(m,[X]);let G=!1;const oe=X[vt]=Pe=>{G||(G=!0,ie(),Pe?W(w,[X]):W(x,[X]),X[vt]=void 0,b[le]===e&&delete b[le])};b[le]=e,A?J(A,[X,oe]):oe()},clone(X){const ie=ei(X,t,n,a,i);return i&&i(ie),ie}};return we}function Oa(e){if(ya(e))return e=jt(e),e.children=null,e}function Vi(e){if(!ya(e))return Co(e.type)&&e.children?Io(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ee(n.default))return n.default()}}function Tn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Tn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function To(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let s=e[l];const r=n==null?s.key:String(n)+String(s.key!=null?s.key:l);s.type===Z?(s.patchFlag&128&&i++,a=a.concat(To(s.children,t,r))):(t||s.type!==Oe)&&a.push(r!=null?jt(s,{key:r}):s)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Ko(e,t){return ee(e)?Se({name:e.name},t,{setup:e}):e}function Oo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ra=new WeakMap;function Mn(e,t,n,a,i=!1){if(q(e)){e.forEach((x,w)=>Mn(x,t&&(q(t)?t[w]:t),n,a,i));return}if(un(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Mn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?Ma(a.component):a.el,s=i?null:l,{i:r,r:c}=e,p=t&&t.r,u=r.refs===ke?r.refs={}:r.refs,d=r.setupState,m=de(d),A=d===ke?zl:x=>me(m,x);if(p!=null&&p!==c){if(qi(t),Re(p))u[p]=null,A(p)&&(d[p]=null);else if(Le(p)){p.value=null;const x=t;x.k&&(u[x.k]=null)}}if(ee(c))Jn(c,r,12,[s,u]);else{const x=Re(c),w=Le(c);if(x||w){const L=()=>{if(e.f){const I=x?A(c)?d[c]:u[c]:c.value;if(i)q(I)&&mi(I,l);else if(q(I))I.includes(l)||I.push(l);else if(x)u[c]=[l],A(c)&&(d[c]=u[c]);else{const _=[l];c.value=_,e.k&&(u[e.k]=_)}}else x?(u[c]=s,A(c)&&(d[c]=s)):w&&(c.value=s,e.k&&(u[e.k]=s))};if(s){const I=()=>{L(),ra.delete(e)};I.id=-1,ra.set(e,I),qe(I,n)}else qi(e),L()}}}function qi(e){const t=ra.get(e);t&&(t.flags|=8,ra.delete(e))}ba().requestIdleCallback;ba().cancelIdleCallback;const un=e=>!!e.type.__asyncLoader,ya=e=>e.type.__isKeepAlive;function yr(e,t){No(e,"a",t)}function wr(e,t){No(e,"da",t)}function No(e,t,n=Ne){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(wa(t,a,n),n){let i=n.parent;for(;i&&i.parent;)ya(i.parent.vnode)&&Pr(a,t,n,i),i=i.parent}}function Pr(e,t,n,a){const i=wa(t,e,a,!0);_i(()=>{mi(a[t],i)},n)}function wa(e,t,n=Ne,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...s)=>{Mt();const r=Qn(n),c=ot(t,n,e,s);return r(),Dt(),c});return a?i.unshift(l):i.push(l),l}}const Ct=e=>(t,n=Ne)=>{(!Nn||e==="sp")&&wa(e,(...a)=>t(...a),n)},_r=Ct("bm"),tn=Ct("m"),Mr=Ct("bu"),Dr=Ct("u"),Go=Ct("bum"),_i=Ct("um"),Rr=Ct("sp"),Cr=Ct("rtg"),Sr=Ct("rtc");function Er(e,t=Ne){wa("ec",e,t)}const Lo="components";function ca(e,t){return Uo(Lo,e,!0,t)||e}const Fo=Symbol.for("v-ndc");function Ir(e){return Re(e)?Uo(Lo,e,!1)||e:e||Fo}function Uo(e,t,n=!0,a=!1){const i=Ie||Ne;if(i){const l=i.type;{const r=Ac(l,!1);if(r&&(r===t||r===tt(t)||r===ha(tt(t))))return l}const s=zi(i[e]||l[e],t)||zi(i.appContext[e],t);return!s&&a?l:s}}function zi(e,t){return e&&(e[t]||e[tt(t)]||e[ha(tt(t))])}function pe(e,t,n,a){let i;const l=n,s=q(e);if(s||Re(e)){const r=s&&$t(e);let c=!1,p=!1;r&&(c=!et(e),p=Rt(e),e=ka(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(c?p?pn(lt(e[u])):lt(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l)}else if(be(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,p=r.length;c<p;c++){const u=r[c];i[c]=t(e[u],u,c,l)}}else i=[];return i}function Br(e,t,n={},a,i){if(Ie.ce||Ie.parent&&un(Ie.parent)&&Ie.parent.ce){const p=Object.keys(n).length>0;return M(),pa(Z,null,[Ae("slot",n,a)],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),M();const s=l&&jo(l(n)),r=n.key||s&&s.key,c=pa(Z,{key:(r&&!it(r)?r:`_${t}`)+(!s&&a?"_fb":"")},s||[],s&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function jo(e){return e.some(t=>On(t)?!(t.type===Oe||t.type===Z&&!jo(t.children)):!0)?e:null}const ti=e=>e?rs(e)?Ma(e):ti(e.parent):null,Dn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ti(e.parent),$root:e=>ti(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Wo(e),$forceUpdate:e=>e.f||(e.f=()=>{Pi(e.update)}),$nextTick:e=>e.n||(e.n=xa.bind(e.proxy)),$watch:e=>Ar.bind(e)}),Na=(e,t)=>e!==ke&&!e.__isScriptSetup&&me(e,t),Tr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:s,type:r,appContext:c}=e;if(t[0]!=="$"){const m=s[t];if(m!==void 0)switch(m){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Na(a,t))return s[t]=1,a[t];if(i!==ke&&me(i,t))return s[t]=2,i[t];if(me(l,t))return s[t]=3,l[t];if(n!==ke&&me(n,t))return s[t]=4,n[t];ni&&(s[t]=0)}}const p=Dn[t];let u,d;if(p)return t==="$attrs"&&Ke(e.attrs,"get",""),p(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==ke&&me(n,t))return s[t]=4,n[t];if(d=c.config.globalProperties,me(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Na(i,t)?(i[t]=n,!0):a!==ke&&me(a,t)?(a[t]=n,!0):me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:s}},r){let c;return!!(n[r]||e!==ke&&r[0]!=="$"&&me(e,r)||Na(t,r)||me(l,r)||me(a,r)||me(Dn,r)||me(i.config.globalProperties,r)||(c=s.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:me(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zi(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ni=!0;function Kr(e){const t=Wo(e),n=e.proxy,a=e.ctx;ni=!1,t.beforeCreate&&Xi(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:s,watch:r,provide:c,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:A,updated:x,activated:w,deactivated:L,beforeDestroy:I,beforeUnmount:_,destroyed:P,unmounted:f,render:b,renderTracked:W,renderTriggered:J,errorCaptured:we,serverPrefetch:X,expose:ie,inheritAttrs:le,components:G,directives:oe,filters:Pe}=t;if(p&&Or(p,a,null),s)for(const K in s){const v=s[K];ee(v)&&(a[K]=v.bind(n))}if(i){const K=i.call(n,n);be(K)&&(e.data=An(K))}if(ni=!0,l)for(const K in l){const v=l[K],te=ee(v)?v.bind(n,n):ee(v.get)?v.get.bind(n,n):mt,ue=!ee(v)&&ee(v.set)?v.set.bind(n):mt,Q=ae({get:te,set:ue});Object.defineProperty(a,K,{enumerable:!0,configurable:!0,get:()=>Q.value,set:_e=>Q.value=_e})}if(r)for(const K in r)Ho(r[K],a,n,K);if(c){const K=ee(c)?c.call(n):c;Reflect.ownKeys(K).forEach(v=>{ea(v,K[v])})}u&&Xi(u,e,"c");function ce(K,v){q(v)?v.forEach(te=>K(te.bind(n))):v&&K(v.bind(n))}if(ce(_r,d),ce(tn,m),ce(Mr,A),ce(Dr,x),ce(yr,w),ce(wr,L),ce(Er,we),ce(Sr,W),ce(Cr,J),ce(Go,_),ce(_i,f),ce(Rr,X),q(ie))if(ie.length){const K=e.exposed||(e.exposed={});ie.forEach(v=>{Object.defineProperty(K,v,{get:()=>n[v],set:te=>n[v]=te,enumerable:!0})})}else e.exposed||(e.exposed={});b&&e.render===mt&&(e.render=b),le!=null&&(e.inheritAttrs=le),G&&(e.components=G),oe&&(e.directives=oe),X&&Oo(e)}function Or(e,t,n=mt){q(e)&&(e=ai(e));for(const a in e){const i=e[a];let l;be(i)?"default"in i?l=at(i.from||a,i.default,!0):l=at(i.from||a):l=at(i),Le(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:s=>l.value=s}):t[a]=l}}function Xi(e,t,n){ot(q(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ho(e,t,n,a){let i=a.includes(".")?Ro(n,a):()=>n[a];if(Re(e)){const l=t[e];ee(l)&&Pt(i,l)}else if(ee(e))Pt(i,e.bind(n));else if(be(e))if(q(e))e.forEach(l=>Ho(l,t,n,a));else{const l=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(l)&&Pt(i,l,e)}}function Wo(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:s}}=e.appContext,r=l.get(t);let c;return r?c=r:!i.length&&!n&&!a?c=t:(c={},i.length&&i.forEach(p=>ua(c,p,s,!0)),ua(c,t,s)),be(t)&&l.set(t,c),c}function ua(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&ua(e,l,n,!0),i&&i.forEach(s=>ua(e,s,n,!0));for(const s in t)if(!(a&&s==="expose")){const r=Nr[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Nr={data:$i,props:el,emits:el,methods:yn,computed:yn,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:yn,directives:yn,watch:Lr,provide:$i,inject:Gr};function $i(e,t){return t?e?function(){return Se(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Gr(e,t){return yn(ai(e),ai(t))}function ai(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fe(e,t){return e?[...new Set([].concat(e,t))]:t}function yn(e,t){return e?Se(Object.create(null),e,t):t}function el(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:Se(Object.create(null),Zi(e),Zi(t??{})):t}function Lr(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const a in t)n[a]=Fe(e[a],t[a]);return n}function Jo(){return{app:null,config:{isNativeTag:zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fr=0;function Ur(e,t){return function(a,i=null){ee(a)||(a=Se({},a)),i!=null&&!be(i)&&(i=null);const l=Jo(),s=new WeakSet,r=[];let c=!1;const p=l.app={_uid:Fr++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:kc,get config(){return l.config},set config(u){},use(u,...d){return s.has(u)||(u&&ee(u.install)?(s.add(u),u.install(p,...d)):ee(u)&&(s.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,m){if(!c){const A=p._ceVNode||Ae(a,i);return A.appContext=l,m===!0?m="svg":m===!1&&(m=void 0),e(A,u,m),c=!0,p._container=u,u.__vue_app__=p,Ma(A.component)}},onUnmount(u){r.push(u)},unmount(){c&&(ot(r,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p},runWithContext(u){const d=dn;dn=p;try{return u()}finally{dn=d}}};return p}}let dn=null;const jr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${en(t)}Modifiers`];function Hr(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||ke;let i=n;const l=t.startsWith("update:"),s=l&&jr(a,t.slice(7));s&&(s.trim&&(i=n.map(u=>Re(u)?u.trim():u)),s.number&&(i=n.map(Aa)));let r,c=a[r=Ea(t)]||a[r=Ea(tt(t))];!c&&l&&(c=a[r=Ea(en(t))]),c&&ot(c,e,6,i);const p=a[r+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,ot(p,e,6,i)}}const Wr=new WeakMap;function Qo(e,t,n=!1){const a=n?Wr:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let s={},r=!1;if(!ee(e)){const c=p=>{const u=Qo(p,t,!0);u&&(r=!0,Se(s,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!r?(be(e)&&a.set(e,null),null):(q(l)?l.forEach(c=>s[c]=null):Se(s,l),be(e)&&a.set(e,s),s)}function Pa(e,t){return!e||!ma(t)?!1:(t=t.slice(2).replace(/Once$/,""),me(e,t[0].toLowerCase()+t.slice(1))||me(e,en(t))||me(e,t))}function tl(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:s,attrs:r,emit:c,render:p,renderCache:u,props:d,data:m,setupState:A,ctx:x,inheritAttrs:w}=e,L=sa(e);let I,_;try{if(n.shapeFlag&4){const f=i||a,b=f;I=gt(p.call(b,f,u,d,A,m,x)),_=r}else{const f=t;I=gt(f.length>1?f(d,{attrs:r,slots:s,emit:c}):f(d,null)),_=t.props?r:Jr(r)}}catch(f){Rn.length=0,va(f,e,1),I=Ae(Oe)}let P=I;if(_&&w!==!1){const f=Object.keys(_),{shapeFlag:b}=P;f.length&&b&7&&(l&&f.some(gi)&&(_=Qr(_,l)),P=jt(P,_,!1,!0))}return n.dirs&&(P=jt(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&Tn(P,n.transition),I=P,sa(L),I}const Jr=e=>{let t;for(const n in e)(n==="class"||n==="style"||ma(n))&&((t||(t={}))[n]=e[n]);return t},Qr=(e,t)=>{const n={};for(const a in e)(!gi(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Yr(e,t,n){const{props:a,children:i,component:l}=e,{props:s,children:r,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?nl(a,s,p):!!s;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(s[m]!==a[m]&&!Pa(p,m))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:a===s?!1:a?s?nl(a,s,p):!0:!!s;return!1}function nl(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!Pa(n,l))return!0}return!1}function Vr({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const Yo={},Vo=()=>Object.create(Yo),qo=e=>Object.getPrototypeOf(e)===Yo;function qr(e,t,n,a=!1){const i={},l=Vo();e.propsDefaults=Object.create(null),zo(e,t,i,l);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=a?i:ko(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function zr(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:s}}=e,r=de(i),[c]=e.propsOptions;let p=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(Pa(e.emitsOptions,m))continue;const A=t[m];if(c)if(me(l,m))A!==l[m]&&(l[m]=A,p=!0);else{const x=tt(m);i[x]=ii(c,r,x,A,e,!1)}else A!==l[m]&&(l[m]=A,p=!0)}}}else{zo(e,t,i,l)&&(p=!0);let u;for(const d in r)(!t||!me(t,d)&&((u=en(d))===d||!me(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ii(c,r,d,void 0,e,!0)):delete i[d]);if(l!==r)for(const d in l)(!t||!me(t,d))&&(delete l[d],p=!0)}p&&xt(e.attrs,"set","")}function zo(e,t,n,a){const[i,l]=e.propsOptions;let s=!1,r;if(t)for(let c in t){if(wn(c))continue;const p=t[c];let u;i&&me(i,u=tt(c))?!l||!l.includes(u)?n[u]=p:(r||(r={}))[u]=p:Pa(e.emitsOptions,c)||(!(c in a)||p!==a[c])&&(a[c]=p,s=!0)}if(l){const c=de(n),p=r||ke;for(let u=0;u<l.length;u++){const d=l[u];n[d]=ii(i,c,d,p[d],e,!me(p,d))}}return s}function ii(e,t,n,a,i,l){const s=e[n];if(s!=null){const r=me(s,"default");if(r&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&ee(c)){const{propsDefaults:p}=i;if(n in p)a=p[n];else{const u=Qn(i);a=p[n]=c.call(null,t),u()}}else a=c;i.ce&&i.ce._setProp(n,a)}s[0]&&(l&&!r?a=!1:s[1]&&(a===""||a===en(n))&&(a=!0))}return a}const Zr=new WeakMap;function Zo(e,t,n=!1){const a=n?Zr:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,s={},r=[];let c=!1;if(!ee(e)){const u=d=>{c=!0;const[m,A]=Zo(d,t,!0);Se(s,m),A&&r.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!c)return be(e)&&a.set(e,sn),sn;if(q(l))for(let u=0;u<l.length;u++){const d=tt(l[u]);al(d)&&(s[d]=ke)}else if(l)for(const u in l){const d=tt(u);if(al(d)){const m=l[u],A=s[d]=q(m)||ee(m)?{type:m}:Se({},m),x=A.type;let w=!1,L=!0;if(q(x))for(let I=0;I<x.length;++I){const _=x[I],P=ee(_)&&_.name;if(P==="Boolean"){w=!0;break}else P==="String"&&(L=!1)}else w=ee(x)&&x.name==="Boolean";A[0]=w,A[1]=L,(w||me(A,"default"))&&r.push(d)}}const p=[s,r];return be(e)&&a.set(e,p),p}function al(e){return e[0]!=="$"&&!wn(e)}const Mi=e=>e==="_"||e==="_ctx"||e==="$stable",Di=e=>q(e)?e.map(gt):[gt(e)],Xr=(e,t,n)=>{if(t._n)return t;const a=He((...i)=>Di(t(...i)),n);return a._c=!1,a},Xo=(e,t,n)=>{const a=e._ctx;for(const i in e){if(Mi(i))continue;const l=e[i];if(ee(l))t[i]=Xr(i,l,a);else if(l!=null){const s=Di(l);t[i]=()=>s}}},$o=(e,t)=>{const n=Di(t);e.slots.default=()=>n},es=(e,t,n)=>{for(const a in t)(n||!Mi(a))&&(e[a]=t[a])},$r=(e,t,n)=>{const a=e.slots=Vo();if(e.vnode.shapeFlag&32){const i=t._;i?(es(a,t,n),n&&eo(a,"_",i,!0)):Xo(t,a)}else t&&$o(e,t)},ec=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,s=ke;if(a.shapeFlag&32){const r=t._;r?n&&r===1?l=!1:es(i,t,n):(l=!t.$stable,Xo(t,i)),s=t}else t&&($o(e,t),s={default:1});if(l)for(const r in i)!Mi(r)&&s[r]==null&&delete i[r]},qe=lc;function tc(e){return nc(e)}function nc(e,t){const n=ba();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:s,createText:r,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:A=mt,insertStaticContent:x}=e,w=(g,h,k,D=null,E=null,C=null,F=void 0,N=null,O=!!h.dynamicChildren)=>{if(g===h)return;g&&!zt(g,h)&&(D=S(g),_e(g,E,C,!0),g=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:B,ref:z,shapeFlag:j}=h;switch(B){case _a:L(g,h,k,D);break;case Oe:I(g,h,k,D);break;case ta:g==null&&_(h,k,D,F);break;case Z:G(g,h,k,D,E,C,F,N,O);break;default:j&1?b(g,h,k,D,E,C,F,N,O):j&6?oe(g,h,k,D,E,C,F,N,O):(j&64||j&128)&&B.process(g,h,k,D,E,C,F,N,O,Y)}z!=null&&E?Mn(z,g&&g.ref,C,h||g,!h):z==null&&g&&g.ref!=null&&Mn(g.ref,null,C,g,!0)},L=(g,h,k,D)=>{if(g==null)a(h.el=r(h.children),k,D);else{const E=h.el=g.el;h.children!==g.children&&p(E,h.children)}},I=(g,h,k,D)=>{g==null?a(h.el=c(h.children||""),k,D):h.el=g.el},_=(g,h,k,D)=>{[g.el,g.anchor]=x(g.children,h,k,D,g.el,g.anchor)},P=({el:g,anchor:h},k,D)=>{let E;for(;g&&g!==h;)E=m(g),a(g,k,D),g=E;a(h,k,D)},f=({el:g,anchor:h})=>{let k;for(;g&&g!==h;)k=m(g),i(g),g=k;i(h)},b=(g,h,k,D,E,C,F,N,O)=>{if(h.type==="svg"?F="svg":h.type==="math"&&(F="mathml"),g==null)W(h,k,D,E,C,F,N,O);else{const B=g.el&&g.el._isVueCE?g.el:null;try{B&&B._beginPatch(),X(g,h,E,C,F,N,O)}finally{B&&B._endPatch()}}},W=(g,h,k,D,E,C,F,N)=>{let O,B;const{props:z,shapeFlag:j,transition:V,dirs:$}=g;if(O=g.el=s(g.type,C,z&&z.is,z),j&8?u(O,g.children):j&16&&we(g.children,O,null,D,E,Ga(g,C),F,N),$&&Jt(g,null,D,"created"),J(O,g,g.scopeId,F,D),z){for(const ve in z)ve!=="value"&&!wn(ve)&&l(O,ve,null,z[ve],C,D);"value"in z&&l(O,"value",null,z.value,C),(B=z.onVnodeBeforeMount)&&dt(B,D,g)}$&&Jt(g,null,D,"beforeMount");const re=ac(E,V);re&&V.beforeEnter(O),a(O,h,k),((B=z&&z.onVnodeMounted)||re||$)&&qe(()=>{B&&dt(B,D,g),re&&V.enter(O),$&&Jt(g,null,D,"mounted")},E)},J=(g,h,k,D,E)=>{if(k&&A(g,k),D)for(let C=0;C<D.length;C++)A(g,D[C]);if(E){let C=E.subTree;if(h===C||is(C.type)&&(C.ssContent===h||C.ssFallback===h)){const F=E.vnode;J(g,F,F.scopeId,F.slotScopeIds,E.parent)}}},we=(g,h,k,D,E,C,F,N,O=0)=>{for(let B=O;B<g.length;B++){const z=g[B]=N?Ot(g[B]):gt(g[B]);w(null,z,h,k,D,E,C,F,N)}},X=(g,h,k,D,E,C,F)=>{const N=h.el=g.el;let{patchFlag:O,dynamicChildren:B,dirs:z}=h;O|=g.patchFlag&16;const j=g.props||ke,V=h.props||ke;let $;if(k&&Qt(k,!1),($=V.onVnodeBeforeUpdate)&&dt($,k,h,g),z&&Jt(h,g,k,"beforeUpdate"),k&&Qt(k,!0),(j.innerHTML&&V.innerHTML==null||j.textContent&&V.textContent==null)&&u(N,""),B?ie(g.dynamicChildren,B,N,k,D,Ga(h,E),C):F||v(g,h,N,null,k,D,Ga(h,E),C,!1),O>0){if(O&16)le(N,j,V,k,E);else if(O&2&&j.class!==V.class&&l(N,"class",null,V.class,E),O&4&&l(N,"style",j.style,V.style,E),O&8){const re=h.dynamicProps;for(let ve=0;ve<re.length;ve++){const he=re[ve],We=j[he],Je=V[he];(Je!==We||he==="value")&&l(N,he,We,Je,E,k)}}O&1&&g.children!==h.children&&u(N,h.children)}else!F&&B==null&&le(N,j,V,k,E);(($=V.onVnodeUpdated)||z)&&qe(()=>{$&&dt($,k,h,g),z&&Jt(h,g,k,"updated")},D)},ie=(g,h,k,D,E,C,F)=>{for(let N=0;N<h.length;N++){const O=g[N],B=h[N],z=O.el&&(O.type===Z||!zt(O,B)||O.shapeFlag&198)?d(O.el):k;w(O,B,z,null,D,E,C,F,!0)}},le=(g,h,k,D,E)=>{if(h!==k){if(h!==ke)for(const C in h)!wn(C)&&!(C in k)&&l(g,C,h[C],null,E,D);for(const C in k){if(wn(C))continue;const F=k[C],N=h[C];F!==N&&C!=="value"&&l(g,C,N,F,E,D)}"value"in k&&l(g,"value",h.value,k.value,E)}},G=(g,h,k,D,E,C,F,N,O)=>{const B=h.el=g?g.el:r(""),z=h.anchor=g?g.anchor:r("");let{patchFlag:j,dynamicChildren:V,slotScopeIds:$}=h;$&&(N=N?N.concat($):$),g==null?(a(B,k,D),a(z,k,D),we(h.children||[],k,z,E,C,F,N,O)):j>0&&j&64&&V&&g.dynamicChildren&&g.dynamicChildren.length===V.length?(ie(g.dynamicChildren,V,k,E,C,F,N),(h.key!=null||E&&h===E.subTree)&&ts(g,h,!0)):v(g,h,k,z,E,C,F,N,O)},oe=(g,h,k,D,E,C,F,N,O)=>{h.slotScopeIds=N,g==null?h.shapeFlag&512?E.ctx.activate(h,k,D,F,O):Pe(h,k,D,E,C,F,O):Ee(g,h,O)},Pe=(g,h,k,D,E,C,F)=>{const N=g.component=pc(g,D,E);if(ya(g)&&(N.ctx.renderer=Y),gc(N,!1,F),N.asyncDep){if(E&&E.registerDep(N,ce,F),!g.el){const O=N.subTree=Ae(Oe);I(null,O,h,k),g.placeholder=O.el}}else ce(N,g,h,k,E,C,F)},Ee=(g,h,k)=>{const D=h.component=g.component;if(Yr(g,h,k))if(D.asyncDep&&!D.asyncResolved){K(D,h,k);return}else D.next=h,D.update();else h.el=g.el,D.vnode=h},ce=(g,h,k,D,E,C,F)=>{const N=()=>{if(g.isMounted){let{next:j,bu:V,u:$,parent:re,vnode:ve}=g;{const ct=ns(g);if(ct){j&&(j.el=ve.el,K(g,j,F)),ct.asyncDep.then(()=>{g.isUnmounted||N()});return}}let he=j,We;Qt(g,!1),j?(j.el=ve.el,K(g,j,F)):j=ve,V&&$n(V),(We=j.props&&j.props.onVnodeBeforeUpdate)&&dt(We,re,j,ve),Qt(g,!0);const Je=tl(g),rt=g.subTree;g.subTree=Je,w(rt,Je,d(rt.el),S(rt),g,E,C),j.el=Je.el,he===null&&Vr(g,Je.el),$&&qe($,E),(We=j.props&&j.props.onVnodeUpdated)&&qe(()=>dt(We,re,j,ve),E)}else{let j;const{el:V,props:$}=h,{bm:re,m:ve,parent:he,root:We,type:Je}=g,rt=un(h);Qt(g,!1),re&&$n(re),!rt&&(j=$&&$.onVnodeBeforeMount)&&dt(j,he,h),Qt(g,!0);{We.ce&&We.ce._def.shadowRoot!==!1&&We.ce._injectChildStyle(Je);const ct=g.subTree=tl(g);w(null,ct,k,D,g,E,C),h.el=ct.el}if(ve&&qe(ve,E),!rt&&(j=$&&$.onVnodeMounted)){const ct=h;qe(()=>dt(j,he,ct),E)}(h.shapeFlag&256||he&&un(he.vnode)&&he.vnode.shapeFlag&256)&&g.a&&qe(g.a,E),g.isMounted=!0,h=k=D=null}};g.scope.on();const O=g.effect=new io(N);g.scope.off();const B=g.update=O.run.bind(O),z=g.job=O.runIfDirty.bind(O);z.i=g,z.id=g.uid,O.scheduler=()=>Pi(z),Qt(g,!0),B()},K=(g,h,k)=>{h.component=g;const D=g.vnode.props;g.vnode=h,g.next=null,zr(g,h.props,D,k),ec(g,h.children,k),Mt(),Yi(g),Dt()},v=(g,h,k,D,E,C,F,N,O=!1)=>{const B=g&&g.children,z=g?g.shapeFlag:0,j=h.children,{patchFlag:V,shapeFlag:$}=h;if(V>0){if(V&128){ue(B,j,k,D,E,C,F,N,O);return}else if(V&256){te(B,j,k,D,E,C,F,N,O);return}}$&8?(z&16&&Xe(B,E,C),j!==B&&u(k,j)):z&16?$&16?ue(B,j,k,D,E,C,F,N,O):Xe(B,E,C,!0):(z&8&&u(k,""),$&16&&we(j,k,D,E,C,F,N,O))},te=(g,h,k,D,E,C,F,N,O)=>{g=g||sn,h=h||sn;const B=g.length,z=h.length,j=Math.min(B,z);let V;for(V=0;V<j;V++){const $=h[V]=O?Ot(h[V]):gt(h[V]);w(g[V],$,k,null,E,C,F,N,O)}B>z?Xe(g,E,C,!0,!1,j):we(h,k,D,E,C,F,N,O,j)},ue=(g,h,k,D,E,C,F,N,O)=>{let B=0;const z=h.length;let j=g.length-1,V=z-1;for(;B<=j&&B<=V;){const $=g[B],re=h[B]=O?Ot(h[B]):gt(h[B]);if(zt($,re))w($,re,k,null,E,C,F,N,O);else break;B++}for(;B<=j&&B<=V;){const $=g[j],re=h[V]=O?Ot(h[V]):gt(h[V]);if(zt($,re))w($,re,k,null,E,C,F,N,O);else break;j--,V--}if(B>j){if(B<=V){const $=V+1,re=$<z?h[$].el:D;for(;B<=V;)w(null,h[B]=O?Ot(h[B]):gt(h[B]),k,re,E,C,F,N,O),B++}}else if(B>V)for(;B<=j;)_e(g[B],E,C,!0),B++;else{const $=B,re=B,ve=new Map;for(B=re;B<=V;B++){const Ve=h[B]=O?Ot(h[B]):gt(h[B]);Ve.key!=null&&ve.set(Ve.key,B)}let he,We=0;const Je=V-re+1;let rt=!1,ct=0;const bn=new Array(Je);for(B=0;B<Je;B++)bn[B]=0;for(B=$;B<=j;B++){const Ve=g[B];if(We>=Je){_e(Ve,E,C,!0);continue}let ut;if(Ve.key!=null)ut=ve.get(Ve.key);else for(he=re;he<=V;he++)if(bn[he-re]===0&&zt(Ve,h[he])){ut=he;break}ut===void 0?_e(Ve,E,C,!0):(bn[ut-re]=B+1,ut>=ct?ct=ut:rt=!0,w(Ve,h[ut],k,null,E,C,F,N,O),We++)}const Fi=rt?ic(bn):sn;for(he=Fi.length-1,B=Je-1;B>=0;B--){const Ve=re+B,ut=h[Ve],Ui=h[Ve+1],ji=Ve+1<z?Ui.el||as(Ui):D;bn[B]===0?w(null,ut,k,ji,E,C,F,N,O):rt&&(he<0||B!==Fi[he]?Q(ut,k,ji,2):he--)}}},Q=(g,h,k,D,E=null)=>{const{el:C,type:F,transition:N,children:O,shapeFlag:B}=g;if(B&6){Q(g.component.subTree,h,k,D);return}if(B&128){g.suspense.move(h,k,D);return}if(B&64){F.move(g,h,k,Y);return}if(F===Z){a(C,h,k);for(let j=0;j<O.length;j++)Q(O[j],h,k,D);a(g.anchor,h,k);return}if(F===ta){P(g,h,k);return}if(D!==2&&B&1&&N)if(D===0)N.beforeEnter(C),a(C,h,k),qe(()=>N.enter(C),E);else{const{leave:j,delayLeave:V,afterLeave:$}=N,re=()=>{g.ctx.isUnmounted?i(C):a(C,h,k)},ve=()=>{C._isLeaving&&C[vt](!0),j(C,()=>{re(),$&&$()})};V?V(C,re,ve):ve()}else a(C,h,k)},_e=(g,h,k,D=!1,E=!1)=>{const{type:C,props:F,ref:N,children:O,dynamicChildren:B,shapeFlag:z,patchFlag:j,dirs:V,cacheIndex:$}=g;if(j===-2&&(E=!1),N!=null&&(Mt(),Mn(N,null,k,g,!0),Dt()),$!=null&&(h.renderCache[$]=void 0),z&256){h.ctx.deactivate(g);return}const re=z&1&&V,ve=!un(g);let he;if(ve&&(he=F&&F.onVnodeBeforeUnmount)&&dt(he,h,g),z&6)ft(g.component,k,D);else{if(z&128){g.suspense.unmount(k,D);return}re&&Jt(g,null,h,"beforeUnmount"),z&64?g.type.remove(g,h,k,Y,D):B&&!B.hasOnce&&(C!==Z||j>0&&j&64)?Xe(B,h,k,!1,!0):(C===Z&&j&384||!E&&z&16)&&Xe(O,h,k),D&&fe(g)}(ve&&(he=F&&F.onVnodeUnmounted)||re)&&qe(()=>{he&&dt(he,h,g),re&&Jt(g,null,h,"unmounted")},k)},fe=g=>{const{type:h,el:k,anchor:D,transition:E}=g;if(h===Z){Be(k,D);return}if(h===ta){f(g);return}const C=()=>{i(k),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(g.shapeFlag&1&&E&&!E.persisted){const{leave:F,delayLeave:N}=E,O=()=>F(k,C);N?N(g.el,C,O):O()}else C()},Be=(g,h)=>{let k;for(;g!==h;)k=m(g),i(g),g=k;i(h)},ft=(g,h,k)=>{const{bum:D,scope:E,job:C,subTree:F,um:N,m:O,a:B}=g;il(O),il(B),D&&$n(D),E.stop(),C&&(C.flags|=8,_e(F,g,h,k)),N&&qe(N,h),qe(()=>{g.isUnmounted=!0},h)},Xe=(g,h,k,D=!1,E=!1,C=0)=>{for(let F=C;F<g.length;F++)_e(g[F],h,k,D,E)},S=g=>{if(g.shapeFlag&6)return S(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const h=m(g.anchor||g.el),k=h&&h[br];return k?m(k):h};let H=!1;const U=(g,h,k)=>{let D;g==null?h._vnode&&(_e(h._vnode,null,null,!0),D=h._vnode.component):w(h._vnode||null,g,h,null,null,null,k),h._vnode=g,H||(H=!0,Yi(D),Po(),H=!1)},Y={p:w,um:_e,m:Q,r:fe,mt:Pe,mc:we,pc:v,pbc:ie,n:S,o:e};return{render:U,hydrate:void 0,createApp:Ur(U)}}function Ga({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Qt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ac(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ts(e,t,n=!1){const a=e.children,i=t.children;if(q(a)&&q(i))for(let l=0;l<a.length;l++){const s=a[l];let r=i[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[l]=Ot(i[l]),r.el=s.el),!n&&r.patchFlag!==-2&&ts(s,r)),r.type===_a&&(r.patchFlag!==-1?r.el=s.el:r.__elIndex=l+(e.type===Z?1:0)),r.type===Oe&&!r.el&&(r.el=s.el)}}function ic(e){const t=e.slice(),n=[0];let a,i,l,s,r;const c=e.length;for(a=0;a<c;a++){const p=e[a];if(p!==0){if(i=n[n.length-1],e[i]<p){t[a]=i,n.push(a);continue}for(l=0,s=n.length-1;l<s;)r=l+s>>1,e[n[r]]<p?l=r+1:s=r;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,s=n[l-1];l-- >0;)n[l]=s,s=t[s];return n}function ns(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ns(t)}function il(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function as(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?as(t.subTree):null}const is=e=>e.__isSuspense;function lc(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):mr(e)}const Z=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),ta=Symbol.for("v-stc"),Rn=[];let Ze=null;function M(e=!1){Rn.push(Ze=e?null:[])}function oc(){Rn.pop(),Ze=Rn[Rn.length-1]||null}let Kn=1;function da(e,t=!1){Kn+=e,e<0&&Ze&&t&&(Ze.hasOnce=!0)}function ls(e){return e.dynamicChildren=Kn>0?Ze||sn:null,oc(),Kn>0&&Ze&&Ze.push(e),e}function R(e,t,n,a,i,l){return ls(o(e,t,n,a,i,l,!0))}function pa(e,t,n,a,i){return ls(Ae(e,t,n,a,i,!0))}function On(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const os=({key:e})=>e??null,na=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Re(e)||Le(e)||ee(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function o(e,t=null,n=null,a=0,i=null,l=e===Z?0:1,s=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&na(t),scopeId:Mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ie};return r?(Ri(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),Kn>0&&!s&&Ze&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Ze.push(c),c}const Ae=sc;function sc(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Fo)&&(e=Oe),On(e)){const r=jt(e,t,!0);return n&&Ri(r,n),Kn>0&&!l&&Ze&&(r.shapeFlag&6?Ze[Ze.indexOf(e)]=r:Ze.push(r)),r.patchFlag=-2,r}if(bc(e)&&(e=e.__vccOpts),t){t=rc(t);let{class:r,style:c}=t;r&&!Re(r)&&(t.class=y(r)),be(c)&&(wi(c)&&!q(c)&&(c=Se({},c)),t.style=wt(c))}const s=Re(e)?1:is(e)?128:Co(e)?64:be(e)?4:ee(e)?2:0;return o(e,t,n,a,i,s,l,!0)}function rc(e){return e?wi(e)||qo(e)?Se({},e):e:null}function jt(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:s,children:r,transition:c}=e,p=t?cc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&os(p),ref:t&&t.ref?n&&l?q(l)?l.concat(na(t)):[l,na(t)]:na(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Z?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&Tn(u,c.clone(u)),u}function Ye(e=" ",t=0){return Ae(_a,null,e,t)}function aa(e,t){const n=Ae(ta,null,e);return n.staticCount=t,n}function ye(e="",t=!1){return t?(M(),pa(Oe,null,e)):Ae(Oe,null,e)}function gt(e){return e==null||typeof e=="boolean"?Ae(Oe):q(e)?Ae(Z,null,e.slice()):On(e)?Ot(e):Ae(_a,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Ri(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),Ri(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!qo(t)?t._ctx=Ie:i===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),a&64?(n=16,t=[Ye(t)]):n=8);e.children=t,e.shapeFlag|=n}function cc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=y([t.class,a.class]));else if(i==="style")t.style=wt([t.style,a.style]);else if(ma(i)){const l=t[i],s=a[i];s&&l!==s&&!(q(l)&&l.includes(s))&&(t[i]=l?[].concat(l,s):s)}else i!==""&&(t[i]=a[i])}return t}function dt(e,t,n,a=null){ot(e,t,7,[n,a])}const uc=Jo();let dc=0;function pc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||uc,l={uid:dc++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zo(a,i),emitsOptions:Qo(a,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:a.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Hr.bind(null,l),e.ce&&e.ce(l),l}let Ne=null;const ss=()=>Ne||Ie;let ga,li;{const e=ba(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(s=>s(l)):i[0](l)}};ga=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),li=t("__VUE_SSR_SETTERS__",n=>Nn=n)}const Qn=e=>{const t=Ne;return ga(e),e.scope.on(),()=>{e.scope.off(),ga(t)}},ll=()=>{Ne&&Ne.scope.off(),ga(null)};function rs(e){return e.vnode.shapeFlag&4}let Nn=!1;function gc(e,t=!1,n=!1){t&&li(t);const{props:a,children:i}=e.vnode,l=rs(e);qr(e,a,l,t),$r(e,i,n||t);const s=l?mc(e,t):void 0;return t&&li(!1),s}function mc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Tr);const{setup:a}=n;if(a){Mt();const i=e.setupContext=a.length>1?hc(e):null,l=Qn(e),s=Jn(a,e,0,[e.props,i]),r=Zl(s);if(Dt(),l(),(r||e.sp)&&!un(e)&&Oo(e),r){if(s.then(ll,ll),t)return s.then(c=>{ol(e,c)}).catch(c=>{va(c,e,0)});e.asyncDep=s}else ol(e,s)}else cs(e)}function ol(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=xo(t)),cs(e)}function cs(e,t,n){const a=e.type;e.render||(e.render=a.render||mt);{const i=Qn(e);Mt();try{Kr(e)}finally{Dt(),i()}}}const fc={get(e,t){return Ke(e,"get",""),e[t]}};function hc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,fc),slots:e.slots,emit:e.emit,expose:t}}function Ma(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xo(ir(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)},has(t,n){return n in t||n in Dn}})):e.proxy}function Ac(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return ee(e)&&"__vccOpts"in e}const ae=(e,t)=>cr(e,t,Nn);function Ci(e,t,n){try{da(-1);const a=arguments.length;return a===2?be(t)&&!q(t)?On(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&On(n)&&(n=[n]),Ae(e,t,n))}finally{da(1)}}const kc="3.5.26";let oi;const sl=typeof window<"u"&&window.trustedTypes;if(sl)try{oi=sl.createPolicy("vue",{createHTML:e=>e})}catch{}const us=oi?e=>oi.createHTML(e):e=>e,vc="http://www.w3.org/2000/svg",xc="http://www.w3.org/1998/Math/MathML",kt=typeof document<"u"?document:null,rl=kt&&kt.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?kt.createElementNS(vc,e):t==="mathml"?kt.createElementNS(xc,e):n?kt.createElement(e,{is:n}):kt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const s=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{rl.innerHTML=us(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const r=rl.content;if(a==="svg"||a==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},St="transition",vn="animation",Gn=Symbol("_vtc"),ds={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wc=Se({},So,ds),Pc=e=>(e.displayName="Transition",e.props=wc,e),Cn=Pc((e,{slots:t})=>Ci(xr,_c(e),t)),Yt=(e,t=[])=>{q(e)?e.forEach(n=>n(...t)):e&&e(...t)},cl=e=>e?q(e)?e.some(t=>t.length>1):e.length>1:!1;function _c(e){const t={};for(const G in e)G in ds||(t[G]=e[G]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:p=s,appearToClass:u=r,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=e,x=Mc(i),w=x&&x[0],L=x&&x[1],{onBeforeEnter:I,onEnter:_,onEnterCancelled:P,onLeave:f,onLeaveCancelled:b,onBeforeAppear:W=I,onAppear:J=_,onAppearCancelled:we=P}=t,X=(G,oe,Pe,Ee)=>{G._enterCancelled=Ee,Vt(G,oe?u:r),Vt(G,oe?p:s),Pe&&Pe()},ie=(G,oe)=>{G._isLeaving=!1,Vt(G,d),Vt(G,A),Vt(G,m),oe&&oe()},le=G=>(oe,Pe)=>{const Ee=G?J:_,ce=()=>X(oe,G,Pe);Yt(Ee,[oe,ce]),ul(()=>{Vt(oe,G?c:l),At(oe,G?u:r),cl(Ee)||dl(oe,a,w,ce)})};return Se(t,{onBeforeEnter(G){Yt(I,[G]),At(G,l),At(G,s)},onBeforeAppear(G){Yt(W,[G]),At(G,c),At(G,p)},onEnter:le(!1),onAppear:le(!0),onLeave(G,oe){G._isLeaving=!0;const Pe=()=>ie(G,oe);At(G,d),G._enterCancelled?(At(G,m),ml(G)):(ml(G),At(G,m)),ul(()=>{G._isLeaving&&(Vt(G,d),At(G,A),cl(f)||dl(G,a,L,Pe))}),Yt(f,[G,Pe])},onEnterCancelled(G){X(G,!1,void 0,!0),Yt(P,[G])},onAppearCancelled(G){X(G,!0,void 0,!0),Yt(we,[G])},onLeaveCancelled(G){ie(G),Yt(b,[G])}})}function Mc(e){if(e==null)return null;if(be(e))return[La(e.enter),La(e.leave)];{const t=La(e);return[t,t]}}function La(e){return Ss(e)}function At(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Gn]||(e[Gn]=new Set)).add(t)}function Vt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Gn];n&&(n.delete(t),n.size||(e[Gn]=void 0))}function ul(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Dc=0;function dl(e,t,n,a){const i=e._endId=++Dc,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:s,timeout:r,propCount:c}=Rc(e,t);if(!s)return a();const p=s+"end";let u=0;const d=()=>{e.removeEventListener(p,m),l()},m=A=>{A.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},r+1),e.addEventListener(p,m)}function Rc(e,t){const n=window.getComputedStyle(e),a=x=>(n[x]||"").split(", "),i=a(`${St}Delay`),l=a(`${St}Duration`),s=pl(i,l),r=a(`${vn}Delay`),c=a(`${vn}Duration`),p=pl(r,c);let u=null,d=0,m=0;t===St?s>0&&(u=St,d=s,m=l.length):t===vn?p>0&&(u=vn,d=p,m=c.length):(d=Math.max(s,p),u=d>0?s>p?St:vn:null,m=u?u===St?l.length:c.length:0);const A=u===St&&/\b(?:transform|all)(?:,|$)/.test(a(`${St}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:A}}function pl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>gl(n)+gl(e[a])))}function gl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ml(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cc(e,t,n){const a=e[Gn];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const fl=Symbol("_vod"),Sc=Symbol("_vsh"),Ec=Symbol(""),Ic=/(?:^|;)\s*display\s*:/;function Bc(e,t,n){const a=e.style,i=Re(n);let l=!1;if(n&&!i){if(t)if(Re(t))for(const s of t.split(";")){const r=s.slice(0,s.indexOf(":")).trim();n[r]==null&&ia(a,r,"")}else for(const s in t)n[s]==null&&ia(a,s,"");for(const s in n)s==="display"&&(l=!0),ia(a,s,n[s])}else if(i){if(t!==n){const s=a[Ec];s&&(n+=";"+s),a.cssText=n,l=Ic.test(n)}}else t&&e.removeAttribute("style");fl in e&&(e[fl]=l?a.display:"",e[Sc]&&(a.display="none"))}const hl=/\s*!important$/;function ia(e,t,n){if(q(n))n.forEach(a=>ia(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Tc(e,t);hl.test(n)?e.setProperty(en(a),n.replace(hl,""),"important"):e[a]=n}}const Al=["Webkit","Moz","ms"],Fa={};function Tc(e,t){const n=Fa[t];if(n)return n;let a=tt(t);if(a!=="filter"&&a in e)return Fa[t]=a;a=ha(a);for(let i=0;i<Al.length;i++){const l=Al[i]+a;if(l in e)return Fa[t]=l}return t}const bl="http://www.w3.org/1999/xlink";function kl(e,t,n,a,i,l=Os(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(bl,t.slice(6,t.length)):e.setAttributeNS(bl,t,n):n==null||l&&!to(n)?e.removeAttribute(t):e.setAttribute(t,l?"":it(n)?String(n):n)}function vl(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?us(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const r=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=to(n):n==null&&r==="string"?(n="",s=!0):r==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function Lt(e,t,n,a){e.addEventListener(t,n,a)}function Kc(e,t,n,a){e.removeEventListener(t,n,a)}const xl=Symbol("_vei");function Oc(e,t,n,a,i=null){const l=e[xl]||(e[xl]={}),s=l[t];if(a&&s)s.value=a;else{const[r,c]=Nc(t);if(a){const p=l[t]=Fc(a,i);Lt(e,r,p,c)}else s&&(Kc(e,r,s,c),l[t]=void 0)}}const yl=/(?:Once|Passive|Capture)$/;function Nc(e){let t;if(yl.test(e)){t={};let a;for(;a=e.match(yl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Ua=0;const Gc=Promise.resolve(),Lc=()=>Ua||(Gc.then(()=>Ua=0),Ua=Date.now());function Fc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;ot(Uc(a,n.value),t,5,[a])};return n.value=e,n.attached=Lc(),n}function Uc(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const wl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jc=(e,t,n,a,i,l)=>{const s=i==="svg";t==="class"?Cc(e,a,s):t==="style"?Bc(e,n,a):ma(t)?gi(t)||Oc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hc(e,t,a,s))?(vl(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&kl(e,t,a,s,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Re(a))?vl(e,tt(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),kl(e,t,a,s))};function Hc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&wl(t)&&ee(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wl(t)&&Re(n)?!1:t in e}const gn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>$n(t,n):t};function Wc(e){e.target.composing=!0}function Pl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _t=Symbol("_assign");function _l(e,t,n){return t&&(e=e.trim()),n&&(e=Aa(e)),e}const ze={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[_t]=gn(i);const l=a||i.props&&i.props.type==="number";Lt(e,t?"change":"input",s=>{s.target.composing||e[_t](_l(e.value,n,l))}),(n||l)&&Lt(e,"change",()=>{e.value=_l(e.value,n,l)}),t||(Lt(e,"compositionstart",Wc),Lt(e,"compositionend",Pl),Lt(e,"change",Pl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},s){if(e[_t]=gn(s),e.composing)return;const r=(l||e.type==="number")&&!/^0\d/.test(e.value)?Aa(e.value):e.value,c=t??"";r!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===c)||(e.value=c))}},Ml={deep:!0,created(e,t,n){e[_t]=gn(n),Lt(e,"change",()=>{const a=e._modelValue,i=Ln(e),l=e.checked,s=e[_t];if(q(a)){const r=hi(a,i),c=r!==-1;if(l&&!c)s(a.concat(i));else if(!l&&c){const p=[...a];p.splice(r,1),s(p)}}else if(hn(a)){const r=new Set(a);l?r.add(i):r.delete(i),s(r)}else s(ps(e,l))})},mounted:Dl,beforeUpdate(e,t,n){e[_t]=gn(n),Dl(e,t,n)}};function Dl(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(q(t))i=hi(t,a.props.value)>-1;else if(hn(t))i=t.has(a.props.value);else{if(t===n)return;i=Wn(t,ps(e,!0))}e.checked!==i&&(e.checked=i)}const Ht={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=hn(t);Lt(e,"change",()=>{const l=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?Aa(Ln(s)):Ln(s));e[_t](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,xa(()=>{e._assigning=!1})}),e[_t]=gn(a)},mounted(e,{value:t}){Rl(e,t)},beforeUpdate(e,t,n){e[_t]=gn(n)},updated(e,{value:t}){e._assigning||Rl(e,t)}};function Rl(e,t){const n=e.multiple,a=q(t);if(!(n&&!a&&!hn(t))){for(let i=0,l=e.options.length;i<l;i++){const s=e.options[i],r=Ln(s);if(n)if(a){const c=typeof r;c==="string"||c==="number"?s.selected=t.some(p=>String(p)===String(r)):s.selected=hi(t,r)>-1}else s.selected=t.has(r);else if(Wn(Ln(s),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ln(e){return"_value"in e?e._value:e.value}function ps(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Jc=["ctrl","shift","alt","meta"],Qc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jc.some(n=>e[`${n}Key`]&&!t.includes(n))},ln=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let s=0;s<t.length;s++){const r=Qc[t[s]];if(r&&r(i,t))return}return e(i,...l)}))},Yc=Se({patchProp:jc},yc);let Cl;function Vc(){return Cl||(Cl=tc(Yc))}const qc=((...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=Zc(a);if(!i)return;const l=t._component;!ee(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,zc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t});function zc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zc(e){return Re(e)?document.querySelector(e):e}const Da="/toram-vue/images/logo.png";const on=typeof document<"u";function gs(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&gs(e.default)}const ge=Object.assign;function ja(e,t){const n={};for(const a in t){const i=t[a];n[a]=st(i)?i.map(e):e(i)}return n}const Sn=()=>{},st=Array.isArray;function Sl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const ms=/#/g,$c=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,fs=/\+/g,au=/%5B/g,iu=/%5D/g,hs=/%5E/g,lu=/%60/g,As=/%7B/g,ou=/%7C/g,bs=/%7D/g,su=/%20/g;function Si(e){return e==null?"":encodeURI(""+e).replace(ou,"|").replace(au,"[").replace(iu,"]")}function ru(e){return Si(e).replace(As,"{").replace(bs,"}").replace(hs,"^")}function si(e){return Si(e).replace(fs,"%2B").replace(su,"+").replace(ms,"%23").replace($c,"%26").replace(lu,"`").replace(As,"{").replace(bs,"}").replace(hs,"^")}function cu(e){return si(e).replace(tu,"%3D")}function uu(e){return Si(e).replace(ms,"%23").replace(nu,"%3F")}function du(e){return uu(e).replace(eu,"%2F")}function Fn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pu=/\/$/,gu=e=>e.replace(pu,"");function Ha(e,t,n="/"){let a,i={},l="",s="";const r=t.indexOf("#");let c=t.indexOf("?");return c=r>=0&&c>r?-1:c,c>=0&&(a=t.slice(0,c),l=t.slice(c,r>0?r:t.length),i=e(l.slice(1))),r>=0&&(a=a||t.slice(0,r),s=t.slice(r,t.length)),a=Au(a??t,n),{fullPath:a+l+s,path:a,query:i,hash:Fn(s)}}function mu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function El(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fu(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&mn(t.matched[a],n.matched[i])&&ks(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ks(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return st(e)?Il(e,t):st(t)?Il(t,e):e?.valueOf()===t?.valueOf()}function Il(e,t){return st(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Au(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,s,r;for(s=0;s<a.length;s++)if(r=a[s],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(s).join("/")}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ri=(function(e){return e.pop="pop",e.push="push",e})({}),Wa=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function bu(e){if(!e)if(on){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),gu(e)}const ku=/^[^#]+#/;function vu(e,t){return e.replace(ku,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function yu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=xu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Bl(e,t){return(history.state?history.state.position-t:-1)+e}const ci=new Map;function wu(e,t){ci.set(e,t)}function Pu(e){const t=ci.get(e);return ci.delete(e),t}function _u(e){return typeof e=="string"||e&&typeof e=="object"}function vs(e){return typeof e=="string"||typeof e=="symbol"}let De=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const xs=Symbol("");De.MATCHER_NOT_FOUND+"",De.NAVIGATION_GUARD_REDIRECT+"",De.NAVIGATION_ABORTED+"",De.NAVIGATION_CANCELLED+"",De.NAVIGATION_DUPLICATED+"";function fn(e,t){return ge(new Error,{type:e,[xs]:!0},t)}function bt(e,t){return e instanceof Error&&xs in e&&(t==null||!!(e.type&t))}const Mu=["params","query","hash"];function Du(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Mu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Ru(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(fs," "),l=i.indexOf("="),s=Fn(l<0?i:i.slice(0,l)),r=l<0?null:Fn(i.slice(l+1));if(s in t){let c=t[s];st(c)||(c=t[s]=[c]),c.push(r)}else t[s]=r}return t}function Tl(e){let t="";for(let n in e){const a=e[n];if(n=cu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(a)?a.map(i=>i&&si(i)):[a&&si(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Cu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=st(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const Su=Symbol(""),Kl=Symbol(""),Ca=Symbol(""),Ei=Symbol(""),ui=Symbol("");function xn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,a,i,l=s=>s()){const s=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const p=m=>{m===!1?c(fn(De.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):_u(m)?c(fn(De.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(s&&a.enterCallbacks[i]===s&&typeof m=="function"&&s.push(m),r())},u=l(()=>e.call(a&&a.instances[i],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(m=>c(m))})}function Ja(e,t,n,a,i=l=>l()){const l=[];for(const s of e)for(const r in s.components){let c=s.components[r];if(!(t!=="beforeRouteEnter"&&!s.instances[r]))if(gs(c)){const p=(c.__vccOpts||c)[t];p&&l.push(Nt(p,n,a,s,r,i))}else{let p=c();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${r}" at "${s.path}"`);const d=Xc(u)?u.default:u;s.mods[r]=u,s.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&Nt(m,n,a,s,r,i)()}))}}return l}function Eu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let s=0;s<l;s++){const r=t.matched[s];r&&(e.matched.find(p=>mn(p,r))?a.push(r):n.push(r));const c=e.matched[s];c&&(t.matched.find(p=>mn(p,c))||i.push(c))}return[n,a,i]}let Iu=()=>location.protocol+"//"+location.host;function ys(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let s=i.includes(e.slice(l))?e.slice(l).length:1,r=i.slice(s);return r[0]!=="/"&&(r="/"+r),El(r,"")}return El(n,e)+a+i}function Bu(e,t,n,a){let i=[],l=[],s=null;const r=({state:m})=>{const A=ys(e,location),x=n.value,w=t.value;let L=0;if(m){if(n.value=A,t.value=m,s&&s===x){s=null;return}L=w?m.position-w.position:0}else a(A);i.forEach(I=>{I(n.value,x,{delta:L,type:ri.pop,direction:L?L>0?Wa.forward:Wa.back:Wa.unknown})})};function c(){s=n.value}function p(m){i.push(m);const A=()=>{const x=i.indexOf(m);x>-1&&i.splice(x,1)};return l.push(A),A}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ge({},m.state,{scroll:Ra()}),"")}}function d(){for(const m of l)m();l=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Ol(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?Ra():null}}function Tu(e){const{history:t,location:n}=window,a={value:ys(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,p,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Iu()+e+c;try{t[u?"replaceState":"pushState"](p,"",m),i.value=p}catch(A){console.error(A),n[u?"replace":"assign"](m)}}function s(c,p){l(c,ge({},t.state,Ol(i.value.back,c,i.value.forward,!0),p,{position:i.value.position}),!0),a.value=c}function r(c,p){const u=ge({},i.value,t.state,{forward:c,scroll:Ra()});l(u.current,u,!0),l(c,ge({},Ol(a.value,c,null),{position:u.position+1},p),!1),a.value=c}return{location:a,state:i,push:r,replace:s}}function Ku(e){e=bu(e);const t=Tu(e),n=Bu(e,t.state,t.location,t.replace);function a(l,s=!0){s||n.pauseListeners(),history.go(l)}const i=ge({location:"",base:e,go:a,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Ou(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ku(e)}let Zt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ce=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ce||{});const Nu={type:Zt.Static,value:""},Gu=/[a-zA-Z0-9_]/;function Lu(e){if(!e)return[[]];if(e==="/")return[[Nu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(A){throw new Error(`ERR (${n})/"${p}": ${A}`)}let n=Ce.Static,a=n;const i=[];let l;function s(){l&&i.push(l),l=[]}let r=0,c,p="",u="";function d(){p&&(n===Ce.Static?l.push({type:Zt.Static,value:p}):n===Ce.Param||n===Ce.ParamRegExp||n===Ce.ParamRegExpEnd?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Zt.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==Ce.ParamRegExp){a=n,n=Ce.EscapeNext;continue}switch(n){case Ce.Static:c==="/"?(p&&d(),s()):c===":"?(d(),n=Ce.Param):m();break;case Ce.EscapeNext:m(),n=a;break;case Ce.Param:c==="("?n=Ce.ParamRegExp:Gu.test(c)?m():(d(),n=Ce.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case Ce.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=Ce.ParamRegExpEnd:u+=c;break;case Ce.ParamRegExpEnd:d(),n=Ce.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--,u="";break;default:t("Unknown state");break}}return n===Ce.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),s(),i}const Nl="[^/]+?",Fu={sensitive:!1,strict:!1,start:!0,end:!0};var Ue=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ue||{});const Uu=/[.+*?^${}()[\]/\\]/g;function ju(e,t){const n=ge({},Fu,t),a=[];let i=n.start?"^":"";const l=[];for(const p of e){const u=p.length?[]:[Ue.Root];n.strict&&!p.length&&(i+="/");for(let d=0;d<p.length;d++){const m=p[d];let A=Ue.Segment+(n.sensitive?Ue.BonusCaseSensitive:0);if(m.type===Zt.Static)d||(i+="/"),i+=m.value.replace(Uu,"\\$&"),A+=Ue.Static;else if(m.type===Zt.Param){const{value:x,repeatable:w,optional:L,regexp:I}=m;l.push({name:x,repeatable:w,optional:L});const _=I||Nl;if(_!==Nl){A+=Ue.BonusCustomRegExp;try{`${_}`}catch(f){throw new Error(`Invalid custom RegExp for param "${x}" (${_}): `+f.message)}}let P=w?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(P=L&&p.length<2?`(?:/${P})`:"/"+P),L&&(P+="?"),i+=P,A+=Ue.Dynamic,L&&(A+=Ue.BonusOptional),w&&(A+=Ue.BonusRepeatable),_===".*"&&(A+=Ue.BonusWildcard)}u.push(A)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=Ue.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function r(p){const u=p.match(s),d={};if(!u)return null;for(let m=1;m<u.length;m++){const A=u[m]||"",x=l[m-1];d[x.name]=A&&x.repeatable?A.split("/"):A}return d}function c(p){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const A of m)if(A.type===Zt.Static)u+=A.value;else if(A.type===Zt.Param){const{value:x,repeatable:w,optional:L}=A,I=x in p?p[x]:"";if(st(I)&&!w)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const _=st(I)?I.join("/"):I;if(!_)if(L)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${x}"`);u+=_}}return u||"/"}return{re:s,score:a,keys:l,parse:r,stringify:c}}function Hu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ue.Static+Ue.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ue.Static+Ue.Segment?1:-1:0}function ws(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=Hu(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(Gl(a))return 1;if(Gl(i))return-1}return i.length-a.length}function Gl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wu={strict:!1,end:!0,sensitive:!1};function Ju(e,t,n){const a=ju(Lu(e.path),n),i=ge(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Qu(e,t){const n=[],a=new Map;t=Sl(Wu,t);function i(d){return a.get(d)}function l(d,m,A){const x=!A,w=Fl(d);w.aliasOf=A&&A.record;const L=Sl(t,d),I=[w];if("alias"in d){const f=typeof d.alias=="string"?[d.alias]:d.alias;for(const b of f)I.push(Fl(ge({},w,{components:A?A.record.components:w.components,path:b,aliasOf:A?A.record:w})))}let _,P;for(const f of I){const{path:b}=f;if(m&&b[0]!=="/"){const W=m.record.path,J=W[W.length-1]==="/"?"":"/";f.path=m.record.path+(b&&J+b)}if(_=Ju(f,m,L),A?A.alias.push(_):(P=P||_,P!==_&&P.alias.push(_),x&&d.name&&!Ul(_)&&s(d.name)),Ps(_)&&c(_),w.children){const W=w.children;for(let J=0;J<W.length;J++)l(W[J],_,A&&A.children[J])}A=A||_}return P?()=>{s(P)}:Sn}function s(d){if(vs(d)){const m=a.get(d);m&&(a.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(s),m.alias.forEach(s))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function r(){return n}function c(d){const m=qu(d,n);n.splice(m,0,d),d.record.name&&!Ul(d)&&a.set(d.record.name,d)}function p(d,m){let A,x={},w,L;if("name"in d&&d.name){if(A=a.get(d.name),!A)throw fn(De.MATCHER_NOT_FOUND,{location:d});L=A.record.name,x=ge(Ll(m.params,A.keys.filter(P=>!P.optional).concat(A.parent?A.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),d.params&&Ll(d.params,A.keys.map(P=>P.name))),w=A.stringify(x)}else if(d.path!=null)w=d.path,A=n.find(P=>P.re.test(w)),A&&(x=A.parse(w),L=A.record.name);else{if(A=m.name?a.get(m.name):n.find(P=>P.re.test(m.path)),!A)throw fn(De.MATCHER_NOT_FOUND,{location:d,currentLocation:m});L=A.record.name,x=ge({},m.params,d.params),w=A.stringify(x)}const I=[];let _=A;for(;_;)I.unshift(_.record),_=_.parent;return{name:L,path:w,params:x,matched:I,meta:Vu(I)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:p,removeRoute:s,clearRoutes:u,getRoutes:r,getRecordMatcher:i}}function Ll(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Fl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Yu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Yu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Ul(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vu(e){return e.reduce((t,n)=>ge(t,n.meta),{})}function qu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;ws(e,t[l])<0?a=l:n=l+1}const i=zu(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function zu(e){let t=e;for(;t=t.parent;)if(Ps(t)&&ws(e,t)===0)return t}function Ps({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function jl(e){const t=at(Ca),n=at(Ei),a=ae(()=>{const c=Ge(e.to);return t.resolve(c)}),i=ae(()=>{const{matched:c}=a.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(mn.bind(null,u));if(m>-1)return m;const A=Hl(c[p-2]);return p>1&&Hl(u)===A&&d[d.length-1].path!==A?d.findIndex(mn.bind(null,c[p-2])):m}),l=ae(()=>i.value>-1&&td(n.params,a.value.params)),s=ae(()=>i.value>-1&&i.value===n.matched.length-1&&ks(n.params,a.value.params));function r(c={}){if(ed(c)){const p=t[Ge(e.replace)?"replace":"push"](Ge(e.to)).catch(Sn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:ae(()=>a.value.href),isActive:l,isExactActive:s,navigate:r}}function Zu(e){return e.length===1?e[0]:e}const Xu=Ko({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jl,setup(e,{slots:t}){const n=An(jl(e)),{options:a}=at(Ca),i=ae(()=>({[Wl(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Wl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Zu(t.default(n));return e.custom?l:Ci("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),$u=Xu;function ed(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function td(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!st(i)||i.length!==a.length||a.some((l,s)=>l.valueOf()!==i[s].valueOf()))return!1}return!0}function Hl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wl=(e,t,n)=>e??t??n,nd=Ko({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=at(ui),i=ae(()=>e.route||a.value),l=at(Kl,0),s=ae(()=>{let p=Ge(l);const{matched:u}=i.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),r=ae(()=>i.value.matched[s.value]);ea(Kl,ae(()=>s.value+1)),ea(Su,r),ea(ui,i);const c=ne();return Pt(()=>[c.value,r.value,e.name],([p,u,d],[m,A,x])=>{u&&(u.instances[d]=p,A&&A!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=A.leaveGuards),u.updateGuards.size||(u.updateGuards=A.updateGuards))),p&&u&&(!A||!mn(u,A)||!m)&&(u.enterCallbacks[d]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=i.value,u=e.name,d=r.value,m=d&&d.components[u];if(!m)return Jl(n.default,{Component:m,route:p});const A=d.props[u],x=A?A===!0?p.params:typeof A=="function"?A(p):A:null,L=Ci(m,ge({},x,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Jl(n.default,{Component:L,route:p})||L}}});function Jl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ad=nd;function id(e){const t=Qu(e.routes,e),n=e.parseQuery||Ru,a=e.stringifyQuery||Tl,i=e.history,l=xn(),s=xn(),r=xn(),c=lr(Et);let p=Et;on&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ja.bind(null,S=>""+S),d=ja.bind(null,du),m=ja.bind(null,Fn);function A(S,H){let U,Y;return vs(S)?(U=t.getRecordMatcher(S),Y=H):Y=S,t.addRoute(Y,U)}function x(S){const H=t.getRecordMatcher(S);H&&t.removeRoute(H)}function w(){return t.getRoutes().map(S=>S.record)}function L(S){return!!t.getRecordMatcher(S)}function I(S,H){if(H=ge({},H||c.value),typeof S=="string"){const k=Ha(n,S,H.path),D=t.resolve({path:k.path},H),E=i.createHref(k.fullPath);return ge(k,D,{params:m(D.params),hash:Fn(k.hash),redirectedFrom:void 0,href:E})}let U;if(S.path!=null)U=ge({},S,{path:Ha(n,S.path,H.path).path});else{const k=ge({},S.params);for(const D in k)k[D]==null&&delete k[D];U=ge({},S,{params:d(k)}),H.params=d(H.params)}const Y=t.resolve(U,H),se=S.hash||"";Y.params=u(m(Y.params));const g=mu(a,ge({},S,{hash:ru(se),path:Y.path})),h=i.createHref(g);return ge({fullPath:g,hash:se,query:a===Tl?Cu(S.query):S.query||{}},Y,{redirectedFrom:void 0,href:h})}function _(S){return typeof S=="string"?Ha(n,S,c.value.path):ge({},S)}function P(S,H){if(p!==S)return fn(De.NAVIGATION_CANCELLED,{from:H,to:S})}function f(S){return J(S)}function b(S){return f(ge(_(S),{replace:!0}))}function W(S,H){const U=S.matched[S.matched.length-1];if(U&&U.redirect){const{redirect:Y}=U;let se=typeof Y=="function"?Y(S,H):Y;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=_(se):{path:se},se.params={}),ge({query:S.query,hash:S.hash,params:se.path!=null?{}:S.params},se)}}function J(S,H){const U=p=I(S),Y=c.value,se=S.state,g=S.force,h=S.replace===!0,k=W(U,Y);if(k)return J(ge(_(k),{state:typeof k=="object"?ge({},se,k.state):se,force:g,replace:h}),H||U);const D=U;D.redirectedFrom=H;let E;return!g&&fu(a,Y,U)&&(E=fn(De.NAVIGATION_DUPLICATED,{to:D,from:Y}),Q(Y,Y,!0,!1)),(E?Promise.resolve(E):ie(D,Y)).catch(C=>bt(C)?bt(C,De.NAVIGATION_GUARD_REDIRECT)?C:ue(C):v(C,D,Y)).then(C=>{if(C){if(bt(C,De.NAVIGATION_GUARD_REDIRECT))return J(ge({replace:h},_(C.to),{state:typeof C.to=="object"?ge({},se,C.to.state):se,force:g}),H||D)}else C=G(D,Y,!0,h,se);return le(D,Y,C),C})}function we(S,H){const U=P(S,H);return U?Promise.reject(U):Promise.resolve()}function X(S){const H=Be.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(S):S()}function ie(S,H){let U;const[Y,se,g]=Eu(S,H);U=Ja(Y.reverse(),"beforeRouteLeave",S,H);for(const k of Y)k.leaveGuards.forEach(D=>{U.push(Nt(D,S,H))});const h=we.bind(null,S,H);return U.push(h),Xe(U).then(()=>{U=[];for(const k of l.list())U.push(Nt(k,S,H));return U.push(h),Xe(U)}).then(()=>{U=Ja(se,"beforeRouteUpdate",S,H);for(const k of se)k.updateGuards.forEach(D=>{U.push(Nt(D,S,H))});return U.push(h),Xe(U)}).then(()=>{U=[];for(const k of g)if(k.beforeEnter)if(st(k.beforeEnter))for(const D of k.beforeEnter)U.push(Nt(D,S,H));else U.push(Nt(k.beforeEnter,S,H));return U.push(h),Xe(U)}).then(()=>(S.matched.forEach(k=>k.enterCallbacks={}),U=Ja(g,"beforeRouteEnter",S,H,X),U.push(h),Xe(U))).then(()=>{U=[];for(const k of s.list())U.push(Nt(k,S,H));return U.push(h),Xe(U)}).catch(k=>bt(k,De.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function le(S,H,U){r.list().forEach(Y=>X(()=>Y(S,H,U)))}function G(S,H,U,Y,se){const g=P(S,H);if(g)return g;const h=H===Et,k=on?history.state:{};U&&(Y||h?i.replace(S.fullPath,ge({scroll:h&&k&&k.scroll},se)):i.push(S.fullPath,se)),c.value=S,Q(S,H,U,h),ue()}let oe;function Pe(){oe||(oe=i.listen((S,H,U)=>{if(!ft.listening)return;const Y=I(S),se=W(Y,ft.currentRoute.value);if(se){J(ge(se,{replace:!0,force:!0}),Y).catch(Sn);return}p=Y;const g=c.value;on&&wu(Bl(g.fullPath,U.delta),Ra()),ie(Y,g).catch(h=>bt(h,De.NAVIGATION_ABORTED|De.NAVIGATION_CANCELLED)?h:bt(h,De.NAVIGATION_GUARD_REDIRECT)?(J(ge(_(h.to),{force:!0}),Y).then(k=>{bt(k,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&!U.delta&&U.type===ri.pop&&i.go(-1,!1)}).catch(Sn),Promise.reject()):(U.delta&&i.go(-U.delta,!1),v(h,Y,g))).then(h=>{h=h||G(Y,g,!1),h&&(U.delta&&!bt(h,De.NAVIGATION_CANCELLED)?i.go(-U.delta,!1):U.type===ri.pop&&bt(h,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),le(Y,g,h)}).catch(Sn)}))}let Ee=xn(),ce=xn(),K;function v(S,H,U){ue(S);const Y=ce.list();return Y.length?Y.forEach(se=>se(S,H,U)):console.error(S),Promise.reject(S)}function te(){return K&&c.value!==Et?Promise.resolve():new Promise((S,H)=>{Ee.add([S,H])})}function ue(S){return K||(K=!S,Pe(),Ee.list().forEach(([H,U])=>S?U(S):H()),Ee.reset()),S}function Q(S,H,U,Y){const{scrollBehavior:se}=e;if(!on||!se)return Promise.resolve();const g=!U&&Pu(Bl(S.fullPath,0))||(Y||!U)&&history.state&&history.state.scroll||null;return xa().then(()=>se(S,H,g)).then(h=>h&&yu(h)).catch(h=>v(h,S,H))}const _e=S=>i.go(S);let fe;const Be=new Set,ft={currentRoute:c,listening:!0,addRoute:A,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:w,resolve:I,options:e,push:f,replace:b,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:l.add,beforeResolve:s.add,afterEach:r.add,onError:ce.add,isReady:te,install(S){S.component("RouterLink",$u),S.component("RouterView",ad),S.config.globalProperties.$router=ft,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(c)}),on&&!fe&&c.value===Et&&(fe=!0,f(i.location).catch(Y=>{}));const H={};for(const Y in Et)Object.defineProperty(H,Y,{get:()=>c.value[Y],enumerable:!0});S.provide(Ca,ft),S.provide(Ei,ko(H)),S.provide(ui,c);const U=S.unmount;Be.add(S),S.unmount=function(){Be.delete(S),Be.size<1&&(p=Et,oe&&oe(),oe=null,c.value=Et,fe=!1,K=!1),U()}}};function Xe(S){return S.reduce((H,U)=>H.then(()=>X(U)),Promise.resolve())}return ft}function Yn(){return at(Ca)}function Sa(e){return at(Ei)}const Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},ld={class:"absolute inset-0 pointer-events-none z-0"},od={class:"fixed top-4 md:top-2 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-15xl"},sd={class:"flex-1 flex justify-start items-center"},rd={class:"hidden lg:flex flex-col leading-tight"},cd={class:"text-[24px] md:text-[36px] font-[1000] uppercase tracking-tighter"},ud={class:"flex-shrink-0 flex justify-center items-center px-2"},dd={class:"relative flex bg-slate-200/50 dark:bg-white/10 p-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-xl backdrop-blur-md"},pd={class:"flex-1 flex justify-end pr-4 md:pr-6"},gd={class:"text-base md:text-2xl"},md={class:"max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},fd={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=Sa(),n=Yn(),a=ne(null),i=ne({}),l=ne({left:"0px",width:"0px",opacity:0}),s=()=>n.push("/"),r=Array.from({length:80},(d,m)=>({id:m,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),c=Array.from({length:40},(d,m)=>({id:m,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),p=(d,m)=>{d&&(i.value[m]=d.$el||d)},u=async()=>{await xa();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 6px 20px -3px rgba(245, 158, 11, 0.7)":"0 10px 25px -5px rgba(139, 92, 246, 0.7)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return tn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),Pt(()=>t.path,u),(d,m)=>{const A=ca("router-link");return M(),R("div",{class:y(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[o("div",ld,[(M(!0),R(Z,null,pe(Ge(c),x=>(M(),R("div",{key:"dust-"+x.id,class:y(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:wt({width:x.size,height:x.size,top:x.top,left:x.left,animationDuration:x.duration,animationDelay:x.delay})},null,6))),128)),(M(!0),R(Z,null,pe(Ge(r),x=>(M(),R("div",{key:"star-"+x.id,class:y(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:wt({width:x.size,height:x.size,top:x.top,left:x.left,animationDelay:x.delay})},null,6))),128))]),o("nav",od,[o("div",{class:y(["backdrop-blur-3xl border flex items-center rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3",e.isDark?"bg-black/50 border-white/10 shadow-indigo-500/10":"bg-white/80 border-white/50 shadow-blue-500/5"])},[o("div",sd,[o("div",{onClick:s,class:"flex items-center cursor-pointer group select-none pl-4 pr-2 active:scale-95 transition-transform gap-4"},[o("div",{class:y(["w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-full border-[3px] transition-all duration-300 shadow-2xl shrink-0",e.isDark?"border-white/30 shadow-indigo-500/20":"border-slate-400 shadow-slate-300"])},[...m[1]||(m[1]=[o("img",{src:Da,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),o("div",rd,[o("span",cd,[o("span",{class:y(e.isDark?"text-white":"text-slate-900")},"TIMI ",2),m[2]||(m[2]=o("span",{class:"ml-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-indigo-600"},"DB",-1))]),m[3]||(m[3]=o("span",{class:"text-[7px] md:text-[8px] font-black uppercase opacity-60 tracking-[0.3em] italic"},"Toram Online Tools",-1))])])]),o("div",ud,[o("div",dd,[o("div",{ref_key:"navContainer",ref:a,class:"flex items-center relative gap-1 md:gap-2"},[o("div",{class:"absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:wt(l.value)},null,4),Ae(A,{ref:x=>p(x,"/"),to:"/",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:He(()=>[...m[4]||(m[4]=[Ye("LIST BAG",-1)])]),_:1},512),Ae(A,{ref:x=>p(x,"/mq"),to:"/mq",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:He(()=>[...m[5]||(m[5]=[Ye("LIST MQ",-1)])]),_:1},512),Ae(A,{ref:x=>p(x,"/mq-calc"),to:"/mq-calc",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:He(()=>[...m[6]||(m[6]=[Ye("MQ-CALC",-1)])]),_:1},512),Ae(A,{ref:x=>p(x,"/bs-calc"),to:"/bs-calc",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:He(()=>[...m[7]||(m[7]=[Ye("BS-CALC",-1)])]),_:1},512),Ae(A,{ref:x=>p(x,"/xtall"),to:"/xtall",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:He(()=>[...m[8]||(m[8]=[Ye("XTALL",-1)])]),_:1},512)],512)])]),o("div",pd,[o("button",{onClick:m[0]||(m[0]=x=>d.$emit("toggleDark")),class:y(["w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 active:scale-75 shadow-xl",e.isDark?"bg-slate-900 border-white/20 text-orange-400":"bg-white border-slate-300 text-indigo-600"])},[o("span",gd,T(e.isDark?"🌙":"☀️"),1)],2)])],2)]),o("main",md,[Br(d.$slots,"default",{},void 0)])],2)}}},hd=Wt(fd,[["__scopeId","data-v-55db152f"]]),Ad={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},bd={__name:"App",setup(e){const t=ne(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return tn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=ca("router-view");return M(),R("div",Ad,[Ae(hd,{isDark:t.value,onToggleDark:n},{default:He(()=>[Ae(l,null,{default:He(({Component:s})=>[Ae(Cn,{name:"slide-page",mode:"out-in"},{default:He(()=>[(M(),pa(Ir(s),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},kd="data:image/png;base64,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",vd="data:image/png;base64,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",xd="/toram-vue/assets/kayu-BpPWdKON.png",yd="/toram-vue/assets/logam-DD-GHzrB.png",wd="data:image/png;base64,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",Pd="/toram-vue/assets/obat-BgQf6Xsw.png",_d="data:image/png;base64,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",Md="/toram-vue/images/Bag-Toram.png",Xn=[{id:1,slot:"50 ➔ 51",nama_item_en:"Colon Skin",nama_item_id:"Kulit Colon",jumlah:"x1",spina:0,monster_en:"Colon",monster_id:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Land Under Development",lokasi_id:"Tanah Pembangunan"},{id:2,slot:"51 ➔ 52",nama_item_en:"Gorgeous Fur",nama_item_id:"Kulit Berkualitas",jumlah:"x1",spina:0,monster_en:"Lavarca",monster_id:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Rakau Plains / Ruined Temple Town",lokasi_id:"Dataran Rakau / Kota Kuil Runtuh"},{id:3,slot:"52 ➔ 53",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:1e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:4,slot:"53 ➔ 54",nama_item_en:"Minotaur Skin",nama_item_id:"Kulit Minotaur",jumlah:"x1",spina:0,monster_en:"Minotaur",monster_id:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Ruined Temple: Forbidden Hall",lokasi_id:"Kuil Runtuh: Aula Terlarang"},{id:5,slot:"53 ➔ 54",nama_item_en:"Orange Crystal Fragment",nama_item_id:"Pecahan Kristal Jingga",jumlah:"x1",spina:0,monster_en:"Cobre",monster_id:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Icule Lake",lokasi_id:"Danau Icule"},{id:6,slot:"54 ➔ 55",nama_item_en:"Forest Wolf Skin",nama_item_id:"Kulit Anjing Hutan",jumlah:"x1",spina:0,monster_en:"Forest Wolf",monster_id:"Serigala Hutan",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Marbaro Forest: Deepest Part",lokasi_id:"Hutan Marbaro: Bagian Dalam"},{id:7,slot:"54 ➔ 55",nama_item_en:"Goblin Medal",nama_item_id:"Lencana Goblin",jumlah:"x1",spina:0,monster_en:"Boss Goblin",monster_id:"Bos Goblin",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Ribisco Cave: Deepest Part",lokasi_id:"Gua Ribisco: Bagian Dalam"},{id:8,slot:"55 ➔ 56",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:2e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:9,slot:"56 ➔ 57",nama_item_en:"Mochelo Fur",nama_item_id:"Bulu Mochelo",jumlah:"x1",spina:0,monster_en:"Mochelo",monster_id:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:10,slot:"56 ➔ 57",nama_item_en:"Linen Cloth",nama_item_id:"Kain Linen",jumlah:"x10",spina:0,monster_en:"Crow Killer",monster_id:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Douce Hamlet",lokasi_id:"Dusun Douce"},{id:11,slot:"57 ➔ 58",nama_item_en:"Green Dragon Fur",nama_item_id:"Bulu Naga Giok",jumlah:"x1",spina:0,monster_en:"Forestia",monster_id:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Land of Chaos",lokasi_id:"Tanah Kaos"},{id:12,slot:"57 ➔ 58",nama_item_en:"High Quality Horn",nama_item_id:"Tanduk Berkualitas",jumlah:"x10",spina:0,monster_en:"Billy",monster_id:"Billy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Yorl Highlands",lokasi_id:"Tanah Tinggi Yorl"},{id:13,slot:"58 ➔ 59",nama_item_en:"Boss Roga Belt",nama_item_id:"Sabuk Bos Roga",jumlah:"x1",spina:0,monster_en:"Boss Roga",monster_id:"Bos Roga",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:14,slot:"58 ➔ 59",nama_item_en:"Broadcloth",nama_item_id:"Kain Beludu",jumlah:"x10",spina:0,monster_en:"Orc / Orc Warrior",monster_id:"Orc / Orc Warrior",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Saham Crater / Saham Underground Cave",lokasi_id:"Kawah Saham / Gua Bawah Tanah Saham"},{id:15,slot:"59 ➔ 60",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:4e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:16,slot:"60 ➔ 61",nama_item_en:"Sharp Bear Claw",nama_item_id:"Cakar Beruang",jumlah:"x2",spina:0,monster_en:"Violacoon",monster_id:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Darkanon Plain",lokasi_id:"Padang Darkanon"},{id:17,slot:"60 ➔ 61",nama_item_en:"Sheeting Fabric",nama_item_id:"Sheeting Fabric",jumlah:"x20",spina:0,monster_en:"Cassy",monster_id:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ancient Empress Tomb: Area 2/3",lokasi_id:"Makam Ratu Kuno: Area 2/3"},{id:18,slot:"61 ➔ 62",nama_item_en:"Heavy Tough Chain",nama_item_id:"Rantai Kukuh",jumlah:"x2",spina:0,monster_en:"Masked Warrior",monster_id:"Pendekar Bertopeng",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:19,slot:"61 ➔ 62",nama_item_en:"Polyester Cloth",nama_item_id:"Kain Polister",jumlah:"x20",spina:0,monster_en:"Shining Gentleman / Wandering Shadow",monster_id:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Lost Town",lokasi_id:"Kota Hilang"},{id:20,slot:"62 ➔ 63",nama_item_en:"Grass Dragon Scale",nama_item_id:"Sisik Naga Sabana",jumlah:"x2",spina:0,monster_en:"Grass Dragon Yelb",monster_id:"Naga Padang Rumput Yelb",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Albatif Village",lokasi_id:"Desa Albatif"},{id:21,slot:"62 ➔ 63",nama_item_en:"Space Wolf Fur",nama_item_id:"Kulit Serigala Alien",jumlah:"x20",spina:0,monster_en:"Outer World Wolf",monster_id:"Serigala Dunia Luar",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Gate to Another World",lokasi_id:"Gerbang Dunia Lain"},{id:22,slot:"63 ➔ 64",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:8e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:23,slot:"64 ➔ 65",nama_item_en:"Torn Cloak",nama_item_id:"Jubah Sobek",jumlah:"x2",spina:0,monster_en:"Goovua",monster_id:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Akaku Desert: Hill",lokasi_id:"Gurun Akaku: Bukit"},{id:24,slot:"64 ➔ 65",nama_item_en:"Squirrel Fur",nama_item_id:"Kulit Tupai",jumlah:"x20",spina:0,monster_en:"Rodentail",monster_id:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Maia Deila",lokasi_id:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item_en:"Jade Raptor Horn",nama_item_id:"Tanduk Elang Zamrud",jumlah:"x2",spina:0,monster_en:"Jade Raptor",monster_id:"Jade Raptor",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Gravel Terrace",lokasi_id:"Teras Kerikil"},{id:26,slot:"65 ➔ 66",nama_item_en:"Goat Fur",nama_item_id:"Bulu Kambing",jumlah:"x20",spina:0,monster_en:"Koza",monster_id:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dunkel Valley",lokasi_id:"Jurang Dunkel"},{id:27,slot:"66 ➔ 67",nama_item_en:"Twilight Dragon Wing",nama_item_id:"Sayap Naga Senja",jumlah:"x2",spina:0,monster_en:"Twilight Dragon",monster_id:"Naga Senja",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fort Solfini: Roof",lokasi_id:"Benteng Solfini: Atap"},{id:28,slot:"66 ➔ 67",nama_item_en:"Fleecy Fur",nama_item_id:"Bulu Halus",jumlah:"x20",spina:0,monster_en:"Rabby / Little Snow Bear",monster_id:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Polde Ice Valley",lokasi_id:"Lembah Es Polde"},{id:29,slot:"67 ➔ 68",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:16e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:30,slot:"68 ➔ 69",nama_item_en:"Chain of Purgatory",nama_item_id:"Rantai Penyucian",jumlah:"x2",spina:0,monster_en:"Cerberus",monster_id:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi_en:"Spring of Rebirth: Top",lokasi_id:"Mata Air Kelahiran: Puncak"},{id:31,slot:"68 ➔ 69",nama_item_en:"Wavering Cloth",nama_item_id:"Kain Goyah",jumlah:"x20",spina:0,monster_en:"Jewel Eye",monster_id:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Spring of Rebirth",lokasi_id:"Mata Air Kelahiran: Tengah/Atas"},{id:32,slot:"69 ➔ 70",nama_item_en:"Aranea Silk",nama_item_id:"Benang Aranea",jumlah:"x2",spina:0,monster_en:"Aranea",monster_id:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Garden of Sublimation",lokasi_id:"Taman Sublimasi: Pusat"},{id:33,slot:"69 ➔ 70",nama_item_en:"Small Spider Silk",nama_item_id:"Benang Laba-Laba Kecil",jumlah:"x20",spina:0,monster_en:"Aramia",monster_id:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Garden of Sublimation",lokasi_id:"Taman Sublimasi: Area 2/3"},{id:34,slot:"70 ➔ 71",nama_item_en:"Copied Goddess Robe",nama_item_id:"Kain Dewi Tiruan",jumlah:"x3",spina:0,monster_en:"Imitacia",monster_id:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Dark Castle: Grand Hall",lokasi_id:"Istana Gelap: Aula Besar"},{id:35,slot:"70 ➔ 71",nama_item_en:"Floating Cloth",nama_item_id:"Kain Apung",jumlah:"x10",spina:0,monster_en:"Flying Executioner",monster_id:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Cradle of Soldier",lokasi_id:"Buaian Prajurit"},{id:36,slot:"70 ➔ 71",nama_item_en:"Soft Paw",nama_item_id:"Tapak Lembut",jumlah:"x20",spina:0,monster_en:"Bunny Summoner / Lapin",monster_id:"Bunny Summoner / Lapin",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Trace of Dark River",lokasi_id:"Sungai Kegelapan"},{id:37,slot:"71 ➔ 72",nama_item_en:"Evil Beast Mane",nama_item_id:"Surai Hewan Iblis",jumlah:"x3",spina:0,monster_en:"Memecoleous",monster_id:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Dark Castle: Area 2",lokasi_id:"Istana Gelap: Area 2"},{id:38,slot:"71 ➔ 72",nama_item_en:"Hard Paw Pad",nama_item_id:"Bantalan Tapak Keras",jumlah:"x10",spina:0,monster_en:"Manticore",monster_id:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Dark Castle",lokasi_id:"Istana Gelap: Area 1/2/3"},{id:39,slot:"71 ➔ 72",nama_item_en:"Dark Shadow Feather",nama_item_id:"Bulu Bayangan Hitam",jumlah:"x20",spina:0,monster_en:"Shadow Fly",monster_id:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dark Castle",lokasi_id:"Istana Gelap: Area 1/2/3"},{id:40,slot:"72 ➔ 73",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:32e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:41,slot:"73 ➔ 74",nama_item_en:"Tapir Fur",nama_item_id:"Bulu Tapir",jumlah:"x3",spina:0,monster_en:"Tapir",monster_id:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Blazing Graben: Surface",lokasi_id:"Graben Membara: Permukaan"},{id:42,slot:"73 ➔ 74",nama_item_en:"Stiff Fur",nama_item_id:"Bulu Kaku",jumlah:"x10",spina:0,monster_en:"Wooly",monster_id:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Blazing Graben: Surface",lokasi_id:"Graben Membara: Permukaan"},{id:43,slot:"73 ➔ 74",nama_item_en:"Anti-Rust Oil",nama_item_id:"Minyak Anti-Karat",jumlah:"x20",spina:0,monster_en:"Ornis Demi Machina",monster_id:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Artillery Defense Line",lokasi_id:"Garis Pertahanan Artileri Otomatis"},{id:44,slot:"74 ➔ 75",nama_item_en:"Ancient Fabric",nama_item_id:"Kain Kuno",jumlah:"x3",spina:0,monster_en:"Proto Leon",monster_id:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Singolare Ruins: 3rd Floor",lokasi_id:"Reruntuhan Singolare: Lantai 3"},{id:45,slot:"74 ➔ 75",nama_item_en:"Soft Tree Bark",nama_item_id:"Kulit Pohon Lunak",jumlah:"x10",spina:0,monster_en:"Floral Bee",monster_id:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Site of Simscracker",lokasi_id:"Situs Simcracker"},{id:46,slot:"74 ➔ 75",nama_item_en:"Dirty Potum Hair",nama_item_id:"Rambut Potum Kotor",jumlah:"x20",spina:0,monster_en:"Slum Potum",monster_id:"Potum Kumuh",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Klaspe Slum",lokasi_id:"Klaspe Kumuh"},{id:47,slot:"75 ➔ 76",nama_item_en:"Crimson Huge Bone",nama_item_id:"Tulang Raksasa Merah",jumlah:"x3",spina:0,monster_en:"Dusk Machina",monster_id:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Small Demi Machina Factory: Area 2",lokasi_id:"Pabrik Demi Machina Kecil: Area 2"},{id:48,slot:"75 ➔ 76",nama_item_en:"Torn Black Coat",nama_item_id:"Mantel Hitam Sobek",jumlah:"x10",spina:0,monster_en:"Rugos Demi Machina",monster_id:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Small Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Kecil"},{id:49,slot:"75 ➔ 76",nama_item_en:"Torn Chain",nama_item_id:"Rantai Putus",jumlah:"x20",spina:0,monster_en:"Torture Machina",monster_id:"Machina Penyiksa",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Small Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Kecil"},{id:50,slot:"76 ➔ 77",nama_item_en:"Chimera Scale",nama_item_id:"Sisik Chimera",jumlah:"x3",spina:0,monster_en:"Mozto Machina",monster_id:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Large Demi Machina Factory: Depths",lokasi_id:"Pabrik Demi Machina Besar: Bagian Terdalam"},{id:51,slot:"76 ➔ 77",nama_item_en:"Mysterious Luminary",nama_item_id:"Benda Pendar Aneh",jumlah:"x10",spina:0,monster_en:"Horn Machina",monster_id:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi_en:"Large Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Besar"},{id:52,slot:"76 ➔ 77",nama_item_en:"Tough Tentacle",nama_item_id:"Tentakel Tangguh",jumlah:"x20",spina:0,monster_en:"Ledon / Odelon Machina",monster_id:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Large Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Besar"},{id:53,slot:"77 ➔ 78",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:64e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:54,slot:"78 ➔ 79",nama_item_en:"Forest Spirit Robe",nama_item_id:"Jubah Roh Hutan",jumlah:"x3",spina:0,monster_en:"Lalvada",monster_id:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Monster Forest: Deep Part",lokasi_id:"Hutan Monster: Bagian Dalam"},{id:55,slot:"78 ➔ 79",nama_item_en:"Plant Fang",nama_item_id:"Taring Tanaman",jumlah:"x10",spina:0,monster_en:"Nepenthe",monster_id:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Monster Forest",lokasi_id:"Hutan Monster"},{id:56,slot:"78 ➔ 79",nama_item_en:"Felt Fabric",nama_item_id:"Kain Felt",jumlah:"x20",spina:0,monster_en:"Puppet Dragon",monster_id:"Naga Boneka",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Lufenas Mansion",lokasi_id:"Mansion Lufenas"},{id:57,slot:"79 ➔ 80",nama_item_en:"Lyark Alloy",nama_item_id:"Aloi Lyark",jumlah:"x3",spina:0,monster_en:"Gwaimol",monster_id:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Cuervo Jail: Roof",lokasi_id:"Penjara Cuervo: Atap"},{id:58,slot:"79 ➔ 80",nama_item_en:"Torn Officer Clothes",nama_item_id:"Baju Penjaga Robek",jumlah:"x10",spina:0,monster_en:"Lyark Jailer",monster_id:"Sipir Lyark",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Cuervo Jail",lokasi_id:"Penjara Cuervo"},{id:59,slot:"79 ➔ 80",nama_item_en:"Ox Fabric",nama_item_id:"Kain Lembu",jumlah:"x20",spina:0,monster_en:"Lyark Specialist / Master Specialist",monster_id:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Brahe Laboratory",lokasi_id:"Laboratorium Brahe"},{id:60,slot:"80 ➔ 81",nama_item_en:"Light Emitting Cloth",nama_item_id:"Kain Bercahaya",jumlah:"x4",spina:0,monster_en:"Seraph Machina",monster_id:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Buried Tower: Inside",lokasi_id:"Menara Penembus Bumi: Sisi Dalam"},{id:61,slot:"80 ➔ 81",nama_item_en:"Damaged Artificial Leather",nama_item_id:"Kulit Sintetis Rusak",jumlah:"x20",spina:0,monster_en:"Lyark Brawler",monster_id:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Suburb of Droma Square",lokasi_id:"Sekitar Alun-alun Droma"},{id:62,slot:"80 ➔ 81",nama_item_en:"Executioner Loincloth",nama_item_id:"Cawat Pengeksekusi",jumlah:"x20",spina:0,monster_en:"Volo",monster_id:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Suburb of Droma Square",lokasi_id:"Sekitar Alun-alun Droma"},{id:63,slot:"81 ➔ 82",nama_item_en:"Lil Empress Cloth Piece",nama_item_id:"Potongan Baju Kaisar Kecil",jumlah:"x4",spina:0,monster_en:"Venena Coenubia",monster_id:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Ultimea Palace: Throne",lokasi_id:"Istana Ultimea: Takhta"},{id:64,slot:"81 ➔ 82",nama_item_en:"Hard Armor Bit",nama_item_id:"Pecahan Zirah Keras",jumlah:"x20",spina:0,monster_en:"High Tigris",monster_id:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Ultimea Palace",lokasi_id:"Istana Ultimea"},{id:65,slot:"81 ➔ 82",nama_item_en:"Snake Skin",nama_item_id:"Kulit Ular",jumlah:"x20",spina:0,monster_en:"Pond Snake",monster_id:"Ular Kolam",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Copia Reservoirs",lokasi_id:"Reservoir Copia"},{id:66,slot:"82 ➔ 83",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:1e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:67,slot:"83 ➔ 84",nama_item_en:"Mom Fluck Skin",nama_item_id:"Kulit Mama Fluck",jumlah:"x4",spina:0,monster_en:"Mom Fluck",monster_id:"Mom Fluck",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Forgotten Cave",lokasi_id:"Gua Pelupa"},{id:68,slot:"83 ➔ 84",nama_item_en:"Colon Big Leaf",nama_item_id:"Daun Besar Colon",jumlah:"x20",spina:0,monster_en:"Leedle Colon",monster_id:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Rokoko Plains",lokasi_id:"Dataran Rakoko"},{id:69,slot:"83 ➔ 84",nama_item_en:"Vertical Stripe Fur",nama_item_id:"Bulu Garis Vertikal",jumlah:"x20",spina:0,monster_en:"Tehon",monster_id:"Rakun Tambun",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Curonne Forest",lokasi_id:"Hutan Currone"},{id:70,slot:"84 ➔ 85",nama_item_en:"Mardula Spiritual Cloth",nama_item_id:"Kain Rohani Mardula",jumlah:"x4",spina:0,monster_en:"Mardula",monster_id:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Hall of Blessings Gods",lokasi_id:"Serambi Dewa Berkah"},{id:71,slot:"84 ➔ 85",nama_item_en:"Mysterious Shiny Cloth",nama_item_id:"Kain Berkilau Misterius",jumlah:"x20",spina:0,monster_en:"Bubble Angel / Bubble Bogey",monster_id:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Shrine of the Gods",lokasi_id:"Kuil Para Dewa"},{id:72,slot:"84 ➔ 85",nama_item_en:"Grey Feather",nama_item_id:"Bulu Kelabu",jumlah:"x20",spina:0,monster_en:"Haliabubo",monster_id:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Ruins of Mt. Mithurna",lokasi_id:"Reruntuhan G. Mithurna"},{id:73,slot:"85 ➔ 86",nama_item_en:"Carbuncle Fur",nama_item_id:"Mantel Carbuncle",jumlah:"x4",spina:0,monster_en:"Carbuncle",monster_id:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Hall of Construction Gods",lokasi_id:"Serambi Dewa Pembangunan"},{id:74,slot:"85 ➔ 86",nama_item_en:"Knit Fabric",nama_item_id:"Kain Rajut",jumlah:"x20",spina:0,monster_en:"Bubble Angel",monster_id:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Heresy Corridor",lokasi_id:"Koridor Heresi"},{id:75,slot:"85 ➔ 86",nama_item_en:"Bag Bear Tail",nama_item_id:"Ekor Beruang Berkantong",jumlah:"x20",spina:0,monster_en:"Oddy",monster_id:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Shrine of the Gods",lokasi_id:"Kuil Para Dewa"},{id:76,slot:"86 ➔ 87",nama_item_en:"King Piton Fur",nama_item_id:"Bulu Raja Piton",jumlah:"x4",spina:0,monster_en:"King Piton",monster_id:"King Piton",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Elf Mountains: Shrine",lokasi_id:"Pegunungan Elf: Kuil"},{id:77,slot:"86 ➔ 87",nama_item_en:"Thick White Fur",nama_item_id:"Bulu Putih Lebat",jumlah:"x20",spina:0,monster_en:"Billy",monster_id:"Billy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Garden of Ice & Snow",lokasi_id:"Taman Es & Salju"},{id:78,slot:"86 ➔ 87",nama_item_en:"Stiff Grey Fur",nama_item_id:"Bulu Abu Kaku",jumlah:"x20",spina:0,monster_en:"Silveria",monster_id:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Elf Mountains",lokasi_id:"Pegunungan Elf"},{id:79,slot:"87 ➔ 88",nama_item_en:"Ancient Ingot",nama_item_id:"Ingot Kuno",jumlah:"x4",spina:0,monster_en:"Thug Golem",monster_id:"Golem Preman",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi_en:"Dark Dragon Shrine: Middle",lokasi_id:"Kuil Naga Kegelapan: Tengah"},{id:80,slot:"87 ➔ 88",nama_item_en:"Ice Wolf Fang",nama_item_id:"Taring Serigala Es",jumlah:"x20",spina:0,monster_en:"Courloup",monster_id:"Serigala Tanduk",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Elf Mountains",lokasi_id:"Pegunungan Elf"},{id:81,slot:"87 ➔ 88",nama_item_en:"Dusky Fabric",nama_item_id:"Kain Gelap",jumlah:"x20",spina:0,monster_en:"Soul Reaper",monster_id:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dark Dragon Shrine",lokasi_id:"Kuil Naga Kegelapan"},{id:82,slot:"88 ➔ 89",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:2e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:83,slot:"89 ➔ 90",nama_item_en:"Tuscog Fang",nama_item_id:"Taring Tuscog",jumlah:"x4",spina:0,monster_en:"Tuscog",monster_id:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Eryldan Street",lokasi_id:"Jalan Eryldan"},{id:84,slot:"89 ➔ 90",nama_item_en:"Larva Silk",nama_item_id:"Sutra Ulat",jumlah:"x20",spina:0,monster_en:"Moss Mole",monster_id:"Tikus Lumut",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Forest of Ein",lokasi_id:"Hutan Ein"},{id:85,slot:"89 ➔ 90",nama_item_en:"Werewolf Fur",nama_item_id:"Taring Manusia Serigala",jumlah:"x20",spina:0,monster_en:"Wolfre",monster_id:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Eryldan Street",lokasi_id:"Jalan Eryldan"},{id:86,slot:"90 ➔ 91",nama_item_en:"Kuzto Splinter",nama_item_id:"Serpihan Kayu Kuzto",jumlah:"x4",spina:0,monster_en:"Kuzto",monster_id:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi_en:"Labilans Sector: Square",lokasi_id:"Distrik Labilans: Alun-alun"},{id:87,slot:"90 ➔ 91",nama_item_en:"Stoat Fur",nama_item_id:"Bulu Cerpelai",jumlah:"x20",spina:0,monster_en:"Sentreast",monster_id:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Fabriska Sector",lokasi_id:"Distrik Fabriska"},{id:88,slot:"90 ➔ 91",nama_item_en:"Mysterious Waist Sash",nama_item_id:"Sabuk Pinggang Misterius",jumlah:"x30",spina:0,monster_en:"Moculus",monster_id:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Fractum Sector",lokasi_id:"Distrik Fractum"},{id:89,slot:"91 ➔ 92",nama_item_en:"Crystal Pouch",nama_item_id:"Kantong Kristal",jumlah:"x5",spina:0,monster_en:"Canemofish",monster_id:"Nempirania",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi_en:"Recetacula Sector",lokasi_id:"Distrik Recetacula"},{id:90,slot:"91 ➔ 92",nama_item_en:"Cushy Tail",nama_item_id:"Ekor Lembu",jumlah:"x20",spina:0,monster_en:"Alpoca",monster_id:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Labilans Sector",lokasi_id:"Distrik Labilans"},{id:91,slot:"91 ➔ 92",nama_item_en:"Sturdy Papula",nama_item_id:"Papula Kuat",jumlah:"x30",spina:0,monster_en:"Toxinaria",monster_id:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Recetacula Sector",lokasi_id:"Distrik Recetacula"},{id:92,slot:"92 ➔ 93",nama_item_en:"Repthon Wings",nama_item_id:"Sayap Repthon",jumlah:"x5",spina:0,monster_en:"Repthon",monster_id:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Deltzon Research Zone: Deepest Area",lokasi_id:"Zona Riset Deltzon: Area Terdalam"},{id:93,slot:"92 ➔ 93",nama_item_en:"Legume Button",nama_item_id:"Kancing Polong",jumlah:"x20",spina:0,monster_en:"Marquis Colon",monster_id:"Colon Marquis",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Old Lufenas Mansion Ruins",lokasi_id:"Reruntuhan Mansion Lufenas Tua"},{id:94,slot:"92 ➔ 93",nama_item_en:"Frock Coat Scrap",nama_item_id:"Kain Perca Jas Panjang",jumlah:"x30",spina:0,monster_en:"Swirly Whirly",monster_id:"Gulingkar",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Deltzon Research Zone",lokasi_id:"Zona Riset Deltzon"},{id:95,slot:"93 ➔ 94",nama_item_en:"Empress Ogre Hair",nama_item_id:"Rambut Kaisar Siluman",jumlah:"x5",spina:0,monster_en:"Venena Metacoenubia",monster_id:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Neo Plastida",lokasi_id:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item_en:"Torn Red Cloth",nama_item_id:"Kain Merah Sobek",jumlah:"x20",spina:0,monster_en:"Sand Bandits Potum",monster_id:"Potum Bandit Gurun",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Geist Desert",lokasi_id:"Gurun Pasir Geist"},{id:97,slot:"93 ➔ 94",nama_item_en:"Corroded Leather",nama_item_id:"Kulit Karatan",jumlah:"x30",spina:0,monster_en:"Cabrigo",monster_id:"Jasman",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ruins of Urban Elban",lokasi_id:"Reruntuhan Elban Urban"},{id:98,slot:"94 ➔ 95",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:3e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:99,slot:"95 ➔ 96",nama_item_en:"Pisteus Bone",nama_item_id:"Tulang Pisteus",jumlah:"x5",spina:0,monster_en:"Pisteus",monster_id:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Ducia Coast: Depths",lokasi_id:"Pesisir Ducia: Area Terdalam"},{id:100,slot:"95 ➔ 96",nama_item_en:"Phantom Cloth",nama_item_id:"Kain Phantom",jumlah:"x20",spina:0,monster_en:"Flooray",monster_id:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Lunagent Cliff Base",lokasi_id:"Dasar Tebing Lunagent"},{id:101,slot:"95 ➔ 96",nama_item_en:"Sea Otter Fur",nama_item_id:"Bulu Berang-Berang Laut",jumlah:"x30",spina:0,monster_en:"Lutris",monster_id:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ducia Coast",lokasi_id:"Pesisir Ducia"},{id:102,slot:"96 ➔ 97",nama_item_en:"Arachnidemon Wing",nama_item_id:"Sayap Arachnidemon",jumlah:"x5",spina:0,monster_en:"Arachnidemon",monster_id:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Arche Valley: Depths",lokasi_id:"Lembah Arche: Area Terdalam"},{id:103,slot:"96 ➔ 97",nama_item_en:"Metal Shackles",nama_item_id:"Belenggu Logam",jumlah:"x20",spina:0,monster_en:"Bessy / Espectro",monster_id:"Bessy / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi_en:"Arche Valley",lokasi_id:"Lembah Arche"},{id:104,slot:"96 ➔ 97",nama_item_en:"Weird Snake Skin",nama_item_id:"Kulit Ular Aneh",jumlah:"x30",spina:0,monster_en:"Coofer",monster_id:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Rokoko City Ruins / Nezim Wetlands",lokasi_id:"Reruntuhan Kota Rokoko / Lahan Basah Nezim"},{id:105,slot:"97 ➔ 98",nama_item_en:"Slimy Hide",nama_item_id:"Jangat Berlendir",jumlah:"x5",spina:0,monster_en:"Lord of Nezim",monster_id:"Datuk Nezim",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Nezim Wetlands",lokasi_id:"Lahan Basah Nezim"},{id:106,slot:"97 ➔ 98",nama_item_en:"Enty Cloth",nama_item_id:"Kain Enty",jumlah:"x20",spina:0,monster_en:"Enty",monster_id:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:107,slot:"97 ➔ 98",nama_item_en:"Sturdy Core",nama_item_id:"Poros Kokoh",jumlah:"x30",spina:0,monster_en:"Eerie Scarecrow / Grim Reaper Scarecrow",monster_id:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:108,slot:"98 ➔ 99",nama_item_en:"Inferno Curse Cloth Scrap",nama_item_id:"Perca Gendam Geni",jumlah:"x5",spina:0,monster_en:"Hexter",monster_id:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Witch's Woods Depths",lokasi_id:"Rimba Penyihir: Area Terdalam"},{id:109,slot:"98 ➔ 99",nama_item_en:"Kappa's Plate",nama_item_id:"Piring Kappa",jumlah:"x20",spina:0,monster_en:"Kappadon",monster_id:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Nezim Wetlands",lokasi_id:"Lahan Basah Nezim"},{id:110,slot:"98 ➔ 99",nama_item_en:"Crow Feather",nama_item_id:"Bulu Gagak",jumlah:"x30",spina:0,monster_en:"Eerie Scarecrow / Grim Reaper Scarecrow",monster_id:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:111,slot:"99 ➔ 100",nama_item_en:"Wriggling Latebra",nama_item_id:"Inti Latebra Menggeliat",jumlah:"x5",spina:0,monster_en:"Trocostida",monster_id:"Trocostida",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi_en:"Nov Diela: Area 1",lokasi_id:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item_en:"Viscous Liquid",nama_item_id:"Cairan Lekat",jumlah:"x20",spina:0,monster_en:"Juvestida",monster_id:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Nov Diela",lokasi_id:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item_en:"Bizarre Skin",nama_item_id:"Kulit Pelik",jumlah:"x30",spina:0,monster_en:"Evil Eye / Demonic Eye",monster_id:"Mata Jahat / Mata Iblis",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Morga Wasteland",lokasi_id:"Padang Morga"}],Dd="data:image/png;base64,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",Rd="/toram-vue/assets/en-CZmi2sa3.png",Cd={class:"max-w-9xl mx-auto flex justify-center md:justify-end mb-2 sticky top-0 z-50"},Sd={class:"flex flex-col items-center gap-1 pt-2"},Ed={class:"inline-flex p-1 rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl"},Id=["onClick"],Bd=["src"],Td={class:"max-w-7xl mx-auto space-y-3 md:space-y-6"},Kd={class:"relative z-10 text-center md:text-left"},Od={class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},Nd={class:"grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4"},Gd={class:"absolute -right-2 -bottom-2 text-4xl opacity-20 transform -rotate-12"},Ld={class:"text-[7px] md:text-[9px] font-black opacity-80 uppercase tracking-tighter"},Fd={class:"text-lg md:text-4xl font-black italic"},Ud={class:"grid grid-cols-1 md:grid-cols-3 gap-3"},jd={class:"text-[8px] font-black uppercase ml-3 mb-0.5 block text-indigo-500 tracking-widest"},Hd={class:"relative group"},Wd=["placeholder"],Jd={value:"All Class"},Qd=["value"],Yd={value:"All Slot"},Vd=["value"],qd={class:"absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none scale-75"},zd={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},Zd={key:1,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},Xd={key:2,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},$d={key:3,class:"absolute right-3.5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none opacity-60"},e0={class:"hidden lg:block overflow-x-auto no-scrollbar"},t0={class:"w-full border-collapse"},n0={class:"p-4 w-[25%] text-left"},a0={class:"flex items-center gap-3"},i0={class:"w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden shadow-inner"},l0=["src","alt"],o0={class:"font-black uppercase text-sm"},s0={class:"flex items-center gap-2"},r0={class:"text-[10px] font-bold uppercase opacity-80"},c0={class:"p-4"},u0={class:"flex flex-col"},d0={class:"font-black text-xs italic text-blue-600 uppercase tracking-tight"},p0={class:"lg:hidden divide-y-[2px] divide-slate-200/10"},g0={class:"flex justify-between items-center"},m0={class:"flex items-center gap-2"},f0={class:"text-[10px] font-black px-2 py-0.5 bg-blue-500 text-white rounded-md"},h0={class:"text-amber-600 font-black text-[10px] uppercase"},A0={class:"flex items-start gap-3"},b0={class:"w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg"},k0=["src","alt"],v0={class:"font-black uppercase text-base leading-tight tracking-tight"},x0={class:"text-[10px] font-bold text-blue-500 mt-1 uppercase"},y0={class:"flex flex-col justify-center border-r border-dashed border-slate-400/20 pr-2"},w0={class:"text-[9px] font-black text-lime-600 uppercase"},P0={class:"text-3xl font-black italic text-lime-600"},_0={class:"pl-2 flex flex-col justify-center"},M0={class:"text-[8px] font-black opacity-50 uppercase block mb-0.5"},D0={class:"text-[10px] font-bold uppercase leading-tight line-clamp-2"},R0={class:"flex flex-col gap-4 justify-center items-center pb-10"},C0={key:0,class:"flex flex-wrap justify-center items-center gap-1"},S0=["disabled"],E0=["onClick"],I0=["disabled"],B0={class:"relative z-10"},T0={__name:"ListBag",props:["isDark"],setup(e){const t=P=>{const b={Wood:"kayu.png",Cloth:"kain.png",Metal:"logam.png",Mana:"mana.png",Beast:"fauna.png",Medic:"obat.png",Stone:"logam.png",Spina:"spina.png",S:"spina.png"}[P]||"fauna.png";return new URL(Object.assign({"/src/assets/jenis-bahan-toram/fauna.png":kd,"/src/assets/jenis-bahan-toram/kain.png":vd,"/src/assets/jenis-bahan-toram/kayu.png":xd,"/src/assets/jenis-bahan-toram/logam.png":yd,"/src/assets/jenis-bahan-toram/mana.png":wd,"/src/assets/jenis-bahan-toram/obat.png":Pd,"/src/assets/jenis-bahan-toram/spina.png":_d})[`/src/assets/jenis-bahan-toram/${b}`],import.meta.url).href},n=ne("en"),a={id:{title:"DAFTAR TAS",subtitle:"EKSPANSI",searchLabel:"Cari Item",searchPlaceholder:"Cari nama, monster, atau lokasi...",catLabel:"Kategori",slotLabel:"Lompat ke Slot",allClass:"Semua Kelas",allSlot:"Semua Slot",exploreBtn:"Lihat Semua",collapseBtn:"Sembunyikan Data",stats:{all:"SEMUA ITEM",res:"HASIL",boss:"BOSS",slot:"SLOTS"},table:{slot:"Slot",name:"Nama Item",need:"Total Butuh",cost:"Biaya Spina",src:"Sumber",type:"Tipe",loc:"Lokasi"},mobile:{need:"Butuh",cost:"Biaya",drop:"Drop Dari:",map:"Peta:"}},en:{title:"BAG LIST",subtitle:"EXPANSION",searchLabel:"Search Item",searchPlaceholder:"Find items, monsters, or maps...",catLabel:"Category",slotLabel:"Jump to Slot",allClass:"All Class",allSlot:"All Slot",exploreBtn:"Explore All",collapseBtn:"Collapse to 10 Rows",stats:{all:"ALL ITEM",res:"RESULTS",boss:"BOSS",slot:"SLOTS"},table:{slot:"Slot",name:"Item Name",need:"Total Need",cost:"Spina Cost",src:"Source",type:"Type",loc:"Location"},mobile:{need:"Need",cost:"Cost",drop:"Drop From:",map:"Map:"}}},i=ae(()=>a[n.value]),l=ne(""),s=ne("All Class"),r=ne("All Slot"),c=ne(1),p=ne(10),u=()=>{p.value===10?p.value=m.value.length||10:p.value=10,c.value=1},d=P=>{if(!P||P==="-")return"-";let f=P.toString().replace(/x/gi,"").trim();return f==="0"||f===""?"-":f},m=ae(()=>Xn.filter(f=>{const b=l.value.toLowerCase(),W=f.kelas_mob||"",J=n.value==="id"?f.nama_item_id||f.nama_item_en:f.nama_item_en||f.nama_item_id,we=n.value==="id"?f.lokasi_id||f.lokasi_en:f.lokasi_en||f.lokasi_id,X=n.value==="id"?f.monster_id||f.monster_en:f.monster_en||f.monster_id,ie=!l.value||J?.toLowerCase().includes(b)||X?.toLowerCase().includes(b)||we?.toLowerCase().includes(b);let le=!0;s.value!=="All Class"&&(s.value==="Mob"?le=W==="Mob"||W==="Miniboss/Mob":s.value==="Miniboss"?le=W==="Miniboss"||W==="Miniboss/Mob":le=W===s.value);const G=r.value==="All Slot"||String(f.slot).includes(String(r.value));return ie&&le&&G}).sort((f,b)=>{const W=parseInt(String(f.slot).match(/\d+/))||0,J=parseInt(String(b.slot).match(/\d+/))||0;return W-J}));Pt([l,s,r,n],()=>{c.value=1});const A=ae(()=>Math.ceil(m.value.length/p.value)||1),x=ae(()=>{const P=A.value,f=c.value;return P<=5?Array.from({length:P},(b,W)=>W+1):f<=3?[1,2,3,"...",P]:f>=P-2?[1,"...",P-2,P-1,P]:[1,"...",f,"...",P]}),w=ae(()=>{const P=(c.value-1)*p.value;return m.value.slice(P,P+p.value)}),L=ae(()=>[...new Set(Xn.map(f=>f.slot))].sort((f,b)=>(parseInt(f)||0)-(parseInt(b)||0))),I=ae(()=>[{label:i.value.stats.all,val:Xn.length,grad:"from-blue-700 to-blue-500",icon:"📦"},{label:i.value.stats.res,val:m.value.length,grad:"from-fuchsia-600 to-purple-600",icon:"🔍"},{label:i.value.stats.boss,val:Xn.filter(P=>P.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600",icon:"💀"},{label:i.value.stats.slot,val:L.value.length,grad:"from-lime-500 to-emerald-600",icon:"🎒"}]),_=P=>{const f="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return P==="Mob"?f+"bg-green-500/10 text-green-500 border-green-500/50":P==="Miniboss/Mob"?f+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":P==="Miniboss"?f+"bg-purple-500/10 text-purple-500 border-purple-500/50":P==="Boss"?f+"bg-red-500/10 text-red-500 border-red-500/50":P==="Spina"?f+"bg-amber-500/10 text-amber-500 border-amber-500/50":f+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(P,f)=>(M(),R("div",{class:y(["bg-transparent py-0 px-2 md:px-4 font-sans relative z-10 transition-all duration-500",e.isDark?"text-white":"text-slate-900"])},[o("div",Cd,[o("div",Sd,[f[5]||(f[5]=o("span",{class:"text-[10px] font-[1000] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 uppercase text-center w-full opacity-90"}," SELECT LANGUAGE ",-1)),o("div",Ed,[(M(),R(Z,null,pe(["id","en"],b=>o("button",{key:b,onClick:W=>n.value=b,class:y(["px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all duration-300 flex items-center gap-2 group/btn",n.value===b?"bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105":"text-slate-400 hover:text-blue-500 hover:bg-white/5"])},[o("img",{src:Ge(b==="id"?Dd:Rd),class:"w-4 h-3 object-cover rounded-sm shadow-sm",alt:"flag"},null,8,Bd),o("span",null,T(b==="id"?"INDO":"ENG"),1)],10,Id)),64))])])]),o("div",Td,[o("div",{class:y(["relative p-5 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border-[3px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[f[8]||(f[8]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:"https://toram-online.com/information/images/item/bag_expansion_en.png",class:"w-full h-full object-contain object-right scale-125 translate-x-10"})],-1)),o("div",Kd,[o("h2",{class:y(["text-2xl md:text-6xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[Ye(T(i.value.title),1),f[6]||(f[6]=o("br",null,null,-1)),o("span",Od,T(i.value.subtitle),1)],2),f[7]||(f[7]=aa('<div class="absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none" data-v-290dd4f3><img src="'+Md+'" class="w-full h-full object-contain object-right opacity-30 scale-110" data-v-290dd4f3></div><div class="flex items-center justify-center md:justify-start gap-2 mt-2" data-v-290dd4f3><div class="h-1 w-10 bg-blue-600 rounded-full" data-v-290dd4f3></div><img src="'+Da+'" class="h-5 md:h-10 w-auto object-contain" data-v-290dd4f3><span class="font-[1000] italic uppercase text-lg md:text-3xl" data-v-290dd4f3>TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500" data-v-290dd4f3>DB</span></span></div>',2))])],2),o("div",Nd,[(M(!0),R(Z,null,pe(I.value,(b,W)=>(M(),R("div",{key:W,class:y(["relative p-3 md:p-5 rounded-[1.2rem] border-[2px] shadow-lg transition-all bg-gradient-to-br text-white overflow-hidden",b.grad])},[o("div",Gd,T(b.icon),1),o("div",Ld,T(b.label),1),o("div",Fd,T(b.val),1)],2))),128))]),o("div",Ud,[(M(!0),R(Z,null,pe([{l:i.value.searchLabel,v:"search"},{l:i.value.catLabel,v:"kelas"},{l:i.value.slotLabel,v:"slot"}],(b,W)=>(M(),R("div",{key:W,class:"relative"},[o("label",jd,T(b.l),1),o("div",Hd,[b.v==="search"?Me((M(),R("input",{key:0,"onUpdate:modelValue":f[0]||(f[0]=J=>l.value=J),type:"text",placeholder:i.value.searchPlaceholder,class:y(["w-full h-10 pl-10 pr-4 rounded-xl border-[2px] font-bold text-xs outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600"])},null,10,Wd)),[[ze,l.value]]):b.v==="kelas"?Me((M(),R("select",{key:1,"onUpdate:modelValue":f[1]||(f[1]=J=>s.value=J),class:y(["w-full h-10 pl-10 pr-10 rounded-xl border-[2px] font-bold text-xs outline-none appearance-none cursor-pointer transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-600"])},[o("option",Jd,T(i.value.allClass),1),(M(),R(Z,null,pe(["Mob","Miniboss","Boss","Spina"],J=>o("option",{key:J,value:J},T(J),9,Qd)),64))],2)),[[Ht,s.value]]):Me((M(),R("select",{key:2,"onUpdate:modelValue":f[2]||(f[2]=J=>r.value=J),class:y(["w-full h-10 pl-10 pr-10 rounded-xl border-[2px] font-bold text-xs outline-none appearance-none cursor-pointer transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-600"])},[o("option",Yd,T(i.value.allSlot),1),(M(!0),R(Z,null,pe(L.value,J=>(M(),R("option",{key:J,value:J},"Slot "+T(J),9,Vd))),128))],2)),[[Ht,r.value]]),o("div",qd,[b.v==="search"?(M(),R("svg",zd,[...f[9]||(f[9]=[o("circle",{cx:"11",cy:"11",r:"8"},null,-1),o("path",{d:"m21 21-4.3-4.3"},null,-1)])])):ye("",!0),b.v==="kelas"?(M(),R("svg",Zd,[...f[10]||(f[10]=[o("rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"},null,-1),o("rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"},null,-1),o("rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"},null,-1),o("rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"},null,-1)])])):ye("",!0),b.v==="slot"?(M(),R("svg",Xd,[...f[11]||(f[11]=[o("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),o("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)])])):ye("",!0)]),b.v!=="search"?(M(),R("div",$d,[...f[12]||(f[12]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"m6 9 6 6 6-6"})],-1)])])):ye("",!0)])]))),128))]),o("div",{class:y(["border-[2px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl transition-all",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80"])},[o("div",e0,[o("table",t0,[o("thead",null,[o("tr",{class:y(["uppercase text-[9px] font-[1000] tracking-wider border-b-[2px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[o("th",{class:y(["p-4 w-[5%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},T(i.value.table.slot),3),o("th",{class:y(["p-4 w-[20%] text-left border-r",e.isDark?"border-white/10":"border-slate-200"])},T(i.value.table.name),3),o("th",{class:y(["p-4 w-[10%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},T(i.value.table.need),3),o("th",{class:y(["p-4 w-[15%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},T(i.value.table.cost),3),o("th",{class:y(["p-4 w-[15%] text-left border-r",e.isDark?"border-white/10":"border-slate-200"])},T(i.value.table.src),3),o("th",{class:y(["p-4 w-[10%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},T(i.value.table.type),3),o("th",n0,T(i.value.table.loc),1)],2)]),o("tbody",{class:y(["divide-y-[1px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(M(!0),R(Z,null,pe(w.value,b=>(M(),R("tr",{key:b.id,class:"hover:bg-indigo-500/5 transition-all group"},[o("td",{class:y(["p-4 text-center font-black text-blue-500 italic text-2xl border-r",e.isDark?"border-white/10":"border-slate-200"])},T(b.slot),3),o("td",{class:y(["p-4 border-r",e.isDark?"border-white/10":"border-slate-200"])},[o("div",a0,[o("div",i0,[o("img",{src:t(b.kelas_bahan),class:"w-7 h-7 object-contain transform group-hover:scale-110 transition-transform",alt:b.kelas_bahan},null,8,l0)]),o("span",o0,T(n.value==="id"?b.nama_item_id||b.nama_item_en:b.nama_item_en||b.nama_item_id),1)])],2),o("td",{class:y(["p-4 text-center bg-black/5 border-r font-black italic text-lime-600 text-3xl",e.isDark?"border-white/10":"border-slate-200"])},T(d(b.jumlah)),3),o("td",{class:y(["p-4 text-center font-black text-lg text-amber-600 border-r",e.isDark?"border-white/10":"border-slate-200"])},T(b.spina>0?Number(b.spina).toLocaleString():"-"),3),o("td",{class:y(["p-4 border-r",e.isDark?"border-white/10":"border-slate-200"])},[o("div",s0,[o("span",r0,T(n.value==="id"?b.monster_id||b.monster_en||"-":b.monster_en||b.monster_id||"-"),1)])],2),o("td",{class:y(["p-4 text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},[o("span",{class:y(_(b.kelas_mob))},T(b.kelas_mob),3)],2),o("td",c0,[o("div",u0,[o("span",d0,T(n.value==="id"?b.lokasi_id||b.lokasi_en:b.lokasi_en||b.lokasi_id),1)])])]))),128))],2)])]),o("div",p0,[(M(!0),R(Z,null,pe(w.value,b=>(M(),R("div",{key:b.id,class:"p-4 space-y-3"},[o("div",g0,[o("div",m0,[o("span",f0,T(i.value.table.slot.toUpperCase())+" "+T(b.slot),1),o("span",{class:y([_(b.kelas_mob),"!min-w-fit !px-2 !py-0.5 !text-[8px]"])},T(b.kelas_mob),3)]),o("div",h0,T(i.value.mobile.cost)+": "+T(b.spina>0?Number(b.spina).toLocaleString():"-"),1)]),o("div",A0,[o("div",b0,[o("img",{src:t(b.kelas_bahan),class:"w-8 h-8 object-contain",alt:b.kelas_bahan},null,8,k0)]),o("div",null,[o("h3",v0,T(n.value==="id"?b.nama_item_id||b.nama_item_en:b.nama_item_en||b.nama_item_id),1),o("p",x0,T(n.value==="id"?b.lokasi_id||b.lokasi_en:b.lokasi_en||b.lokasi_id),1)])]),o("div",{class:y(["grid grid-cols-2 gap-2 border-[2px] p-3 rounded-2xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[o("div",y0,[o("span",w0,T(i.value.mobile.need),1),o("span",P0,T(d(b.jumlah)),1)]),o("div",_0,[o("span",M0,T(i.value.mobile.drop),1),o("span",D0,T(n.value==="id"?b.monster_id||b.monster_en||"-":b.monster_en||b.monster_id||"-"),1)])],2)]))),128))])],2),o("div",R0,[A.value>1?(M(),R("div",C0,[o("button",{onClick:f[3]||(f[3]=b=>c.value--),disabled:c.value===1,class:"h-9 w-9 rounded-lg border-2 font-black border-blue-600 text-xs disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all"},"«",8,S0),(M(!0),R(Z,null,pe(x.value,b=>(M(),R("button",{key:b,onClick:W=>typeof b=="number"?c.value=b:null,class:y(["h-9 w-9 rounded-lg border-2 font-black transition-all text-xs",b===c.value?"bg-blue-600 text-white shadow-md":"text-blue-600 border-blue-100 hover:border-blue-600"])},T(b),11,E0))),128)),o("button",{onClick:f[4]||(f[4]=b=>c.value++),disabled:c.value===A.value,class:"h-9 w-9 rounded-lg border-2 font-black border-blue-600 text-xs disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all"},"»",8,I0)])):ye("",!0),o("button",{onClick:u,class:"group relative h-12 px-12 rounded-2xl border-b-4 border-indigo-800 bg-indigo-600 text-white font-black uppercase italic text-[11px] tracking-widest hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all shadow-xl"},[o("span",B0,T(p.value===10?i.value.exploreBtn:i.value.collapseBtn),1),f[13]||(f[13]=o("div",{class:"absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl"},null,-1))])])])],2))}},K0=Wt(T0,[["__scopeId","data-v-290dd4f3"]]),O0="/toram-vue/images/mq.png",di=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],N0=()=>[...new Set(di.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),G0={class:"bg-transparent py-0 px-2 md:px-4 font-sans"},L0={class:"max-w-9xl mx-auto space-y-6 md:space-y-10"},F0={class:"relative z-10 text-center md:text-left"},U0={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},j0={class:"flex items-center gap-2 select-none whitespace-nowrap"},H0={class:"flex flex-col gap-2"},W0={class:"relative group"},J0={class:"flex flex-col gap-1.5 relative"},Q0={class:"relative group"},Y0=["value"],V0={class:"hidden lg:block overflow-x-auto"},q0={class:"w-full border-collapse"},z0={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},Z0={class:"p-8 text-center bg-black/5"},X0={class:"font-black italic text-5xl text-indigo-600"},$0={class:"flex justify-between items-center"},ep={class:"text-2xl font-black italic text-indigo-500/30"},tp={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},np={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},ap={class:"text-right"},ip={class:"text-4xl font-black italic text-indigo-600"},lp={class:"flex flex-col gap-6 justify-center items-center pb-20"},op={key:0,class:"flex flex-wrap justify-center items-center gap-2"},sp=["disabled"],rp={key:0,class:"text-indigo-500 font-black px-2"},cp=["onClick"],up=["disabled"],dp={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=Sa(),i=Yn(),l=ne(a.query.search||""),s=ne(a.query.chapter||"Semua Chapter"),r=ne(parseInt(a.query.page)||1),c=ne(parseInt(a.query.per_page)||10),p=N0(),u=ae(()=>di.filter(I=>{const _=l.value.toLowerCase(),P=I.nama_item.toLowerCase().includes(_)||I.chapter.toLowerCase().includes(_),f=s.value==="Semua Chapter"||I.chapter===s.value;return P&&f})),d=ae(()=>Math.ceil(u.value.length/c.value)||1),m=ae(()=>{const I=(r.value-1)*c.value;return u.value.slice(I,I+c.value)}),A=()=>{c.value===10?c.value=u.value.length:c.value=10,r.value=1,x()},x=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:s.value!=="Semua Chapter"?s.value:void 0,per_page:c.value,page:r.value}})},w=I=>{I>=1&&I<=d.value&&(r.value=I,x())};Pt([l,s],()=>{r.value=1,x()});const L=ae(()=>{const I=d.value,_=r.value;if(I<=5)return Array.from({length:I},(f,b)=>b+1);let P=[];return _<=3?P=[1,2,3,"...",I]:_>=I-2?P=[1,"...",I-2,I-1,I]:P=[1,"...",_,"...",I],P});return ae(()=>[{label:"ALL ITEM",val:di.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:p.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:p.length>0?p[p.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]),(I,_)=>(M(),R("div",G0,[o("div",L0,[o("div",{class:y(["relative p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[_[7]||(_[7]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:O0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),o("div",F0,[o("h2",{class:y(["text-3xl md:text-6xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[..._[4]||(_[4]=[Ye(" MAIN QUEST",-1),o("br",null,null,-1),o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),o("div",U0,[_[6]||(_[6]=o("div",{class:"flex items-center gap-3"},[o("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),o("img",{src:Da,class:"h-8 md:h-12 w-auto object-contain"})],-1)),o("div",j0,[o("span",{class:y(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),_[5]||(_[5]=o("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),o("div",{class:y(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[o("div",H0,[_[9]||(_[9]=o("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),o("div",W0,[Me(o("input",{"onUpdate:modelValue":_[0]||(_[0]=P=>l.value=P),type:"text",placeholder:"Find MQ item...",class:y(["w-full border-[3px] rounded-xl md:rounded-2xl py-4 md:py-5 pr-4 pl-14 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[ze,l.value]]),_[8]||(_[8]=o("div",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"11",cy:"11",r:"8"}),o("path",{d:"m21 21-4.3-4.3"})])],-1))])]),o("div",J0,[_[12]||(_[12]=o("label",{class:"text-[9px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),o("div",Q0,[Me(o("select",{"onUpdate:modelValue":_[1]||(_[1]=P=>s.value=P),class:y(["w-full h-18 border-[3px] rounded-xl px-4 pr-10 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500 appearance-none",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[_[10]||(_[10]=o("option",{value:"Semua Chapter"},"All Chapter",-1)),(M(!0),R(Z,null,pe(Ge(p),P=>(M(),R("option",{key:P,value:P},T(P),9,Y0))),128))],2),[[Ht,s.value]]),_[11]||(_[11]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-fuchsia-500 opacity-70"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"m6 9 6 6 6-6"})])],-1))])])],2),o("div",{class:y(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[o("div",V0,[o("table",q0,[o("thead",null,[o("tr",{class:y(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[o("th",{class:y(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),o("th",{class:y(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),o("th",{class:y(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),_[13]||(_[13]=o("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),o("tbody",{class:y(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(M(!0),R(Z,null,pe(m.value,(P,f)=>(M(),R("tr",{key:f,class:"hover:bg-indigo-500/5 transition-all"},[o("td",{class:y(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},T((r.value-1)*c.value+f+1),3),o("td",{class:y(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[o("span",z0,T(P.chapter),1)],2),o("td",{class:y(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},T(P.nama_item),3),o("td",Z0,[o("span",X0,T(P.jumlah),1)])]))),128))],2)])]),o("div",{class:y(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(M(!0),R(Z,null,pe(m.value,(P,f)=>(M(),R("div",{key:f,class:"p-6 space-y-4"},[o("div",$0,[o("span",ep,"#"+T((r.value-1)*c.value+f+1),1),o("span",tp,T(P.chapter),1)]),o("div",{class:y(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[o("div",np,T(P.nama_item),1),o("div",ap,[_[14]||(_[14]=o("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),o("span",ip,T(P.jumlah),1)])],2)]))),128))],2)],2),o("div",lp,[d.value>1?(M(),R("div",op,[o("button",{onClick:_[2]||(_[2]=P=>w(r.value-1)),disabled:r.value===1,class:y(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,sp),(M(!0),R(Z,null,pe(L.value,(P,f)=>(M(),R(Z,{key:f},[P==="..."?(M(),R("span",rp,"...")):(M(),R("button",{key:1,onClick:b=>w(P),class:y(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",r.value===P?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},T(P),11,cp))],64))),128)),o("button",{onClick:_[3]||(_[3]=P=>w(r.value+1)),disabled:r.value===d.value,class:y(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,up)])):ye("",!0),o("button",{onClick:A,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},T(c.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},pp=Wt(dp,[["__scopeId","data-v-5652e557"]]),Un="data:image/jpeg;base64,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",Ii="data:image/jpeg;base64,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",Bi="data:image/jpeg;base64,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",jn="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEMAQgMBIgACEQEDEQH/xAAvAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQEAAAAAAAAAAAAAAAMCAAEE/9oADAMBAAIQAxAAAALneeq3N6YxITinTDAnozEmTYDNnc1Jk36ya03xNxQh2XBIwO8PQ+5S7efN6JekqjdjO3yuzKMLiKvm1JFgrc1Jm3wWbZybdtjTc4NQOO/AmvLAJKcBtzAO7//EAAL/2gAMAwEAAgADAAAAIc0nU/TKJNccTyFf+RLLPggHnfP/xAAC/9oADAMBAAIAAwAAABDhTpTB5g1LPEJAf6IdAjMNyGPz/8QAJBEAAQQBAwMFAAAAAAAAAAAAAQACAwQhEBESFCIxEzJScZH/2gAIAQIBAT8AB4nwFXmi3AcE2vDK3t2VujxBwujHxU8RZsdtK9ySEjOE2xHZi85XohSQNlg8Z2T2FjiCNIpXROBB+11TVTstLQCcFXoA7vas6044+Psb+K45wcACQnlDT//EACIRAAEEAQQCAwAAAAAAAAAAAAEAAgMRBBAhIjESFBNhgf/aAAgBAwEBPwAix2p4ZaJaU6eWN3K1i5lkbr2yoJQ6xemRiMlB2op0EmPJ1svlKjmMU31aY4PaCDpLE2RpB/F6xWVjkOsBYU5bxctq0sLKe/yPIrEALSSE3rX/xAAkEAADAAECBgMBAQAAAAAAAAAAAQIDERIEEBMhMVEiMkFhcf/aAAgBAQABPwLbP6zpejYKDpjxjgcib0Mi1WpNNE5Zr7G31y0KgqReCO/YqdtGhFXIsifO0aEmSd0biBw4ZGKMq7dqH1MT0tCpMrlJHouNtEPd8KL34bMObHxE7Mi7+zNw9Yb7H2nlD5Wt8f0iN+Pt5RriyLTK9rRhwcNDTWYzY92jMkdPJ/psoiiWJ6GvTrVeC/lTNKOF4mp+NM4rSoT5SyLFQmv06Kf1Ztc+ZGnr2Rjm626+D4GNJ+SYn0bVyTFT0ISLqkbq9n//xAAeEAADAAIDAQEBAAAAAAAAAAAAAREhMRBBUXFhIP/aAAgBAQABPyHCgl7mP8gmJ7IHwmIaZmMQ9vRP0h8kmHwZJXY5hkqaRm7wxDzwrFcFqTZFj0XnRlUFviFOBRaQuDetMwfR9hpmhqEshP6EydonEhNOgxgkmVwKJI/gjuKELwOhmKFRfbhrf08WxeqkOo74i+BDNLQbl4MN5BN6NjaNiBQQheI0MXZKyQWIWOODs8j/xAAeEAEBAQEAAgMBAQAAAAAAAAABABEhMUFRYYFxkf/aAAgBAQABPxBbRF9TtdCF5DC+2an3Kb1tEIZPV8L4lnZvW56gDO2EAB9FkoJPFjyx9XpfSY+Kc85PO5IaiEyZhpYEeLf5xHMYQOPJEe2iGd9GXgif7fpiR98/i4MT8i0nL8Tky+x0YsfQaDNoPEtrzMMduiF9IWfwdIeHInl5iR4HGyVy0IdhdJShfhYYmU2fgrSw92H6hEw54fM7t8t9ipIFPG8S5lebLKPpG4ckcbHOxh2eHd2cDvcvE/SJoJZbj5RxpxSVgbA5iJhiPU1ojGebv+hI22/kT5voJre5v//Z",Ti="data:image/jpeg;base64,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",Ki="data:image/jpeg;base64,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",Ft=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
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
Critical Rate +2`},{code:78,link:null,name:"INT+8",type:"NORMAL",view:`
INT +8`},{code:79,link:null,type:"NORMAL",name:"Pendekar Bertopeng",view:`
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
INT +2`},{code:84,link:null,type:"NORMAL",name:"AGI+8",view:`
AGI +8`},{code:85,link:null,type:"NORMAL",name:"INT+1",view:`
INT +1`},{code:86,link:null,type:"NORMAL",name:"HP+400",view:`
MaxHP +400`},{code:87,link:null,type:"NORMAL",name:"HP+300",view:`
MaxHP +300`},{code:88,link:null,type:"NORMAL",name:"HP+200",view:`
MaxHP +200`},{code:89,link:null,type:"NORMAL",name:"HP+100",view:`
MaxHP +100`},{code:90,link:null,name:"VIT+8",type:"NORMAL",view:`
VIT +8`},{code:91,link:null,type:"NORMAL",name:"Gespenst",view:`
MaxMP +150
.ATK -1%
MATK -1%`},{code:92,link:null,type:"NORMAL",name:"Anjing Hutan",view:`
Dodge +6
Evasion Recharge +2%`},{code:93,link:null,type:"NORMAL",name:"Flare Volg",view:`
STR +3
Kekebalan Sihir -4%
Daya Jarak Jauh +2%`},{code:94,link:null,type:"NORMAL",name:"Dodge+6",view:`
Dodge +6`},{code:95,link:null,type:"NORMAL",name:"Dodge+4",view:`
Dodge +4`},{code:96,link:null,name:"AGI+8",type:"NORMAL",view:`
AGI +8`},{code:97,link:null,type:"NORMAL",name:"Dodge+2",view:`
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
Critical Rate +2`},{code:108,link:null,name:"STR+8",type:"NORMAL",view:`
STR +8`},{code:109,link:null,type:"NORMAL",name:"Critical Rate+1",view:`
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
AGI +2`},{code:126,link:null,type:"NORMAL",name:"Panchos Kita Makura",view:`
EXP +1%
Critical Rate +5
Akurasi +3`},{code:127,link:null,type:"NORMAL",name:"AGI+1",view:`
AGI +1`},{code:128,link:null,type:"NORMAL",name:"Akurasi+8",view:`
Akurasi +8`},{code:129,link:null,type:"NORMAL",name:"Akurasi+6",view:`
Akurasi +6`},{code:130,link:null,type:"NORMAL",name:"Akurasi+4",view:`
Akurasi +4`},{code:131,link:null,type:"NORMAL",name:"Boss Colon",view:`
MaxHP +70
MaxMP +30`},{code:132,link:null,name:"DEX+8",type:"NORMAL",view:`
DEX +8`},{code:133,link:null,type:"NORMAL",name:"Akurasi +2",view:`
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
MaxHP -300`},{code:140,link:184,type:"UPGRADE",name:"Rondine",view:`
DEX +9%
MATK +11%
CSPD +7%`},{code:141,link:364,type:"UPGRADE",name:"Zapo",view:`
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
Pelindung Fraksional +5%`},{code:146,link:416,type:"UPGRADE",name:"Poundie",view:`
MaxHP +3000
MaxHP +20%
Pelindung Fraksional 15%
.ATK UP (VIT25%)`},{code:147,link:409,type:"UPGRADE",name:"Etoise",view:`
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
Kekebalan Sihir -12%`},{code:152,link:111,type:"UPGRADE",name:"Vevela",view:`
Resistensi Status Buruk -15%
Guard Power +5%
Guard Recharge +5%
Evasion Recharge +5%
Motion Speed +3%`},{code:153,link:247,type:"UPGRADE",name:"Naga Trompet Reguita",view:`
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
Critical Damage +3`},{code:188,link:153,type:"UPGRADE",name:"Goudvis",view:`
.ATK +12%
MATK +12%
Natural HP Regen -14%
Natural MP Regen -14%`},{code:189,link:265,type:"UPGRADE",name:"Naga Membara Igneus",view:`
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
MATK UP (AGI25%)`},{code:196,link:243,type:"UPGRADE",name:"Naga Penyamar Mimyugon",view:`
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
Weapon ATK +5%`},{code:205,link:271,type:"UPGRADE",name:"Naga Milisi Turba",view:`
Critical Rate +11
Weapon ATK +14%
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
MaxMP -50`},{code:242,link:369,type:"UPGRADE",name:"Tulangka",view:`
Attack MP Recovery +15
Kecepatan Pelindung +20%
Kebal Air +10%
Kebal Gelap +10%`},{code:243,link:298,type:"UPGRADE",name:"Vulture",view:`
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
Natural HP Regen -10%`},{code:248,link:281,type:"UPGRADE",name:"Potum Hiu",view:`
Critical Damage +6
ASPD +900
MaxHP -30%`},{code:249,link:368,type:"UPGRADE",name:"Mata Jahanam",view:`
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
MaxMP +300`},{code:254,link:244,type:"UPGRADE",name:"Arpoon",view:`
Evasion Recharge +12%
Aggro +24%
MATK -4%`},{code:255,link:336,type:"UPGRADE",name:"Zega II",view:`
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
Critical Damage +4`},{code:260,link:288,type:"UPGRADE",name:"Dandolion",view:`
MaxMP +500
CSPD +300
Attack MP Recovery +4
Dengan Zirah Ringan:
STability +6%`},{code:261,link:330,type:"UPGRADE",name:"Mbah Dukun Usasama II",view:`
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
CSPD +2%`},{code:296,link:215,type:"UPGRADE",name:"Ratu Rosemee",view:`
Peneterasi Sihir +5%
Critical Rate +5%
Attack MP Recovery +5
Daya Jarak Jauh +5%`},{code:297,link:134,type:"UPGRADE",name:"York",view:`
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
CSPD +25%
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
Aggro -28%`},{code:326,link:null,type:"WEAPON",name:"Stormun",view:`
.ATK +5%
MATK +5%
Daya Jarak Dekat +5%
ASPD +5%
Dengan Pedang Ganda :
Motion Speed +2%
MaxHP -9%
Dengan Pesawat Sihir:
INT +5%`},{code:327,link:null,type:"WEAPON",name:"Grecia",view:`
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
Aggro +25%`},{code:396,link:null,type:"SPECIAL",name:"Berkah Shio",view:`
.ATK +10
MATK +10
DEF +100
MDEF +100
Akurasi +10
ASPD +100
CSPD +100
Critical Rate +10
EXP +10%`},{code:397,link:null,type:"SPECIAL",name:"Kapten Sihir & si B",view:`
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
+5% stronger against Fire`},{code:402,link:null,type:"SPECIAL",name:"Zeagrysta",view:`
Stability +2%
Kekebalan Fisik +3%
Kekebalan Sihir +3%
Daya Jarak Dekat +2%
MaxMP -100
Dengan Perisai:
Resistansi Status Buruk +5%`},{code:403,link:null,type:"SPECIAL",name:"Ruzart",view:`
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
Kebal Normal +20%`},{code:408,link:null,type:"SPECIAL",name:"Dewa Mesin Maple",view:`
MaxMP +200
Kekebalan Fisik +10%
Kekebalan Sihir +10%
Daya Jarak Dekat +10%
Resistansi Status Buruk +5%
Pelindung Fraksional +5%
Dengan Zirah Berat:
Kekebalan Fisik +5%
Kekebalan Sihir +5%
Resistansi Status Buruk +10%`},{code:409,link:null,type:"SPECIAL",name:"Volgagon",view:`
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
Kekebalan Sihir -15%`},{code:506,link:138,type:"UPGRADE",name:"Obsia",view:`
MaxHP +7000
Guard Power +20%
.DEF +15%
Kekebalan Fisik +10%`},{code:507,link:199,type:"UPGRADE",name:"Brahma",view:`
MaxHP +800
MaxMP +400
Aggro +3%
Dengan Zirah Berat:
Aggro +3%`},{code:508,link:150,type:"UPGRADE",name:"Bajinja",view:`
MaxHP +10000
Critical Damage +9
Daya Jarak Dekat +6%
Dengan Kitab Ninjutsu:
Evasion Recharge +25%`},{code:509,link:150,type:"UPGRADE",name:"Ninja Persik Hitam",view:`
MaxHP +10000
Critical Damage +9
Daya Jarak Dekat +6%
Dengan Kitab Ninjutsu:
Aggro -25%`},{code:510,link:141,type:"UPGRADE",name:"Puiet",view:`
.ATK +12%
Critical Rate +12
MaxHP -800
MaxMP -400
Dengan Perisai:
Daya Jarak Dekat +6%
STR +2%`},{code:511,link:201,type:"UPGRADE",name:"Iblis Kristal Jahanam Sejati",view:`
MaxMP +400
Daya Jarak Dekat +8%
Physical Pierce +10%`},{code:512,link:402,type:"UPGRADE",name:"Monster Kristal Abisal",view:`
Stability +4%
Kekebalan Fisik +6%
Kekebalan Sihir +6%
Daya Jarak Dekat +4%
MaxMP -200
Dengan Perisai:
Resistansi Status Buruk +5%`},{code:513,link:161,type:"UPGRADE",name:"Sang Juara Megiston VI",view:`
MaxHP +2200
Critical Rate +26
Kebal Api +6%
Kebal Air +6%
Kebal Angin +6%
Kebal Bumi +3%
Kebal Cahaya +3%
Kebal Gelap +3%`},{code:514,link:513,type:"UPGRADE",name:"Sang Juara Megiston VII",view:`
MaxHP +2400
Critical Rate +29
Kebal Api +6%
Kebal Air +6%
Kebal Angin +6%
Kebal Bumi +6%
Kebal Cahaya +3%
Kebal Gelap +3%
Kebal Netral +3%`},{code:515,link:514,type:"UPGRADE",name:"Sang Juara Megiston VIII",view:`
MaxHP +2600
Critical Rate +32
Kebal Api +6%
Kebal Air +6%
Kebal Angin +6%
Kebal Bumi +6%
Kebal Cahaya +6%
Kebal Gelap +6%
Kebal Netral +3%`},{code:516,link:306,type:"UPGRADE",name:"Meduso",view:`
Guard Power +10%
Guard Recharge +10%
Dengan Zirah Berat:
Motion Speed +1%
Dengan Zirah Ringan:
Aggro +20%`},{code:517,link:219,type:"UPGRADE",name:"Paduka Raja Kerbau II",view:`
Daya Jarak Dekat +12%
Akurasi +50
MaxMP +200
MaxHP -30%`},{code:518,link:220,type:"UPGRADE",name:"Pillow Kitagawa II",view:`
Serangan Menghunus +12%
Critical Rate +6
MaxHP +3000
Revive Time +30%`},{code:519,link:446,type:"UPGRADE",name:"Pilorocas",view:"Critical Rate +50%Kekebalan Fisik +5%Kekebalan Sihir +5%Critical Rate -5"},{code:520,link:192,type:"UPGRADE",name:"Biskyva",view:`
MaxMP +900
Pelindung Fraksional +19%
Critical Rate +7
Critical Damage +2%`},{code:521,link:370,type:"UPGRADE",name:"Velly Hitam",view:`
MaxHP +3000
MaxMP +400
MATK +9%
Evasion Recharge -20%`},{code:522,link:300,type:"UPGRADE",name:"Kristal Misterius",view:`
Attack MP Recovery +5
Dengan Zirah Berat:
Stability +5%
Dengan Zirah Ringan:
Serangan Menghunus +5%
Dengan Pedang Ganda:
Attack MP Recovery +5`},{code:523,link:413,type:"UPGRADE",name:"Seele Zauga II",view:`
Critical Rate +20
Kekebalan Fisik +10%
Kekebalan Sihir +10%
Kecepatan Item -1.0s`},{code:524,link:395,type:"UPGRADE",name:"Velcaroy",view:`
MaxMP +300
Daya Jarak Jauh +5%
Tambahan Fisik +75%
Dengan Perisai:
Aggro +35%`},{code:525,link:442,type:"UPGRADE",name:"Sanmurbon",view:`
.ATK +12%
Physical Pierce +10%
Critical Rate +16
MATK -4%
Kekebalan Fisik -20%
Dengan Zirah Berat:
Kekebalan Fisik +24%`}],Oi="/toram-vue/assets/enhance_weapon_crysta-eGLehiWn.png",Ni="/toram-vue/assets/enhance_armor_crysta-YvncoZmF.png",Gi="/toram-vue/assets/enhance_additional_crysta-mE1Kazx1.png",Li="/toram-vue/assets/enhace_special_crysta-CIVkxwj2.png";function gp(e){const t={};return e&&e.split(`
`).map(n=>n.trim()).forEach(n=>{if(!n.match(/[+-]\s*\d/))return;const a=n.match(/^(.+?)\s*([+-])\s*(\d+)(%)?$/);if(!a)return;const[,i,l,s]=a;t[i.trim().toUpperCase()]={sign:l,value:Number(s)}}),t}const mp={class:"fixed inset-0 pointer-events-none z-0"},fp={key:0,class:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},hp={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse",style:{"animation-delay":"2s"}},Ap={class:"relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-0"},bp={class:"flex items-center gap-1"},kp={class:"text-center md:text-left space-y-1"},vp={class:"flex items-center gap-3"},xp={class:"text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all"},yp={class:"flex flex-col items-center md:items-end gap-3"},wp={class:"flex gap-2"},Pp={class:"space-y-2 col-span-2 md:col-span-2 lg:col-span-2"},_p={class:"relative group"},Mp={class:"space-y-2 col-span-1"},Dp={class:"relative group"},Rp={class:"space-y-0 w-full col-span-2 lg:col-span-3"},Cp={class:"flex flex-col md:flex-row items-center gap-3 w-full"},Sp={class:"relative group w-full"},Ep={class:"relative py-4 flex items-center justify-center"},Ip={class:"space-y-10 relative z-10 pb-32"},Bp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Tp=["onClick"],Kp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Op={class:"lg:col-span-6 relative group"},Np={class:"relative p-6 md:p-10"},Gp={class:"flex flex-col md:flex-row gap-8 items-start"},Lp={class:"relative shrink-0 mx-auto md:mx-0"},Fp=["src","alt"],Up={class:"flex-1 space-y-6 w-full"},jp={class:"space-y-2"},Hp={class:"grid grid-cols-1 gap-4"},Wp={key:0,class:"w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0"},Jp={class:"flex items-center gap-4"},Qp={class:"flex flex-col"},Yp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Vp=["onClick"],qp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},zp={key:0,class:"py-40 text-center animate-pulse"},Zp={class:"flex flex-col items-center gap-10 py-20"},Xp={key:0,class:"flex flex-wrap justify-center items-center gap-3"},$p=["disabled"],eg={class:"flex gap-2.5 items-center"},tg=["onClick"],ng={key:1,class:"px-2 font-black text-blue-500"},ag=["disabled"],ig={class:"flex items-center gap-4 opacity-50"},lg={class:"text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"},og={class:"fixed bottom-8 left-8 z-[200] hidden lg:block"},sg={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t=new Map;function n(K){return t.has(K.code)||t.set(K.code,gp(K.view)),t.get(K.code)}const a=Yn();function i(){l.value="",s.value=[],r.value=[],m.value="asc",d.value=10,a.push({query:{}})}const l=ne(""),s=ne([]),r=ne([]),c=ne(!1),p=ne(!1),u=ne(1),d=ne(10),m=ne("asc"),A=ne(null),x=ne(null),w=Sa(),L=ae(()=>{try{return w.query.filter?JSON.parse(w.query.filter):null}catch{return null}}),I=()=>{l.value="",s.value=[],r.value=[],u.value=1},_=K=>{const v=K.type?.toUpperCase();if(v!=="UPGRADE")return W[v]||Un;const te=we(K);return W[`${te}_UPGRADE`]||jn},P=K=>({NORMAL:"bg-blue-500/10 text-blue-500 border-blue-500/40",UPGRADE:"bg-purple-500/10 text-purple-500 border-purple-500/40",ADDITIONAL:"bg-yellow-500/10 text-yellow-500 border-yellow-500/40",WEAPON:"bg-red-500/10 text-red-500 border-red-500/40",ARMOR:"bg-green-500/10 text-green-500 border-green-500/40",SPECIAL:"bg-pink-500/10 text-pink-500 border-pink-500/40"})[K?.toUpperCase()]||"bg-slate-500/10 text-slate-500 border-slate-500/40",f=K=>K.link?Ft.find(v=>String(v.code)===String(K.link)):null,b=K=>Ft.filter(v=>String(v.link)===String(K.code)),W={NORMAL:Un,UPGRADE:jn,ADDITIONAL:Bi,ADDITIONAL_UPGRADE:Gi,ARMOR:Ti,ARMOR_UPGRADE:Ni,WEAPON:Ii,WEAPON_UPGRADE:Oi,SPECIAL:Ki,SPECIAL_UPGRADE:Li},J=K=>{if(!K)return null;let v=K,te=0;for(;v.link&&te<10;){const ue=Ft.find(Q=>String(Q.code)===String(v.link));if(!ue)break;v=ue,te++}return v},we=K=>J(K)?.type?.toUpperCase()||"NORMAL",X=K=>{if(!K)return"text-cyan-500";const v=K.type?.toUpperCase();if(v==="UPGRADE"||v==="ENHANCER")return"text-gray-400";const te=we(K);return{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[te]||"text-cyan-500"},ie=K=>K?Array.isArray(K)?K:K.split(/,|\n/).map(v=>v.trim()).filter(v=>v):[],le=K=>{l.value=K,window.scrollTo({top:0,behavior:"smooth"})},G=ae(()=>{let K=Ft.filter(v=>v.name?.trim());if(L.value){const{stats:v,types:te}=L.value;v&&Object.keys(v).length>0&&(K=K.filter(ue=>{const Q=n(ue);return Object.entries(v).every(([_e,fe])=>{const Be=Q[_e.toUpperCase()];return!(!Be||Be.sign!==fe.sign||fe.value!==null&&(fe.op===">="&&Be.value<fe.value||fe.op==="<="&&Be.value>fe.value))})})),te&&te.length>0&&(K=K.filter(ue=>{const Q=we(ue),_e=ue.type==="UPGRADE";return te.some(fe=>{if(!fe.includes("_"))return!_e&&Q===fe;const[Be,ft]=fe.split("_");return ft==="UPGRADE"&&_e&&Q===Be})}))}if(l.value){const v=l.value.toLowerCase();K=K.filter(te=>te.name.toLowerCase().includes(v))}return s.value.length>0&&(K=K.filter(v=>{const te=we(v),ue=v.type==="UPGRADE";return s.value.some(Q=>{if(!Q.includes("_"))return!ue&&te===Q;const[_e,fe]=Q.split("_");return fe==="UPGRADE"&&ue&&te===_e})})),r.value.length>0&&(K=K.filter(v=>{const te=(v.view||"").toUpperCase();return r.value.every(ue=>te.includes(ue.toUpperCase()))})),K.sort((v,te)=>m.value==="asc"?v.name.localeCompare(te.name):te.name.localeCompare(v.name))}),oe=ae(()=>{const K=(u.value-1)*d.value;return G.value.slice(K,K+d.value)}),Pe=ae(()=>Math.ceil(G.value.length/d.value)||1),Ee=ae(()=>{let K=Math.max(1,u.value-2),v=Math.min(Pe.value,K+4);v-K<4&&(K=Math.max(1,v-4));const te=[];for(let ue=K;ue<=v;ue++)te.push(ue);return te}),ce=K=>{A.value&&!A.value.contains(K.target)&&(c.value=!1),x.value&&!x.value.contains(K.target)&&(p.value=!1)};return tn(()=>{window.addEventListener("click",ce)}),_i(()=>{window.removeEventListener("click",ce)}),Pt([l,s,r,d,m],()=>{u.value=1}),(K,v)=>{const te=ca("RouterLink"),ue=ca("router-link");return M(),R("div",{class:y(["min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent",e.isDark?"text-slate-200":"text-slate-900"])},[o("div",mp,[o("div",{class:y(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),v[6]||(v[6]=o("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-transparent"},null,-1)),e.isDark?(M(),R("div",fp)):ye("",!0),e.isDark?(M(),R("div",hp)):ye("",!0)]),o("div",Ap,[o("header",{class:y(["relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500",e.isDark?"border-white/5":"border-black/5"])},[o("div",bp,[v[9]||(v[9]=o("div",{class:"relative group"},[o("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"}),o("img",{src:Da,class:"relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110",alt:"Logo"})],-1)),o("div",kp,[o("div",vp,[o("h1",xp,[o("span",{class:y(K.text-K.white)},"TIMI ",2),v[7]||(v[7]=o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"},"DB",-1))]),v[8]||(v[8]=o("div",{class:"px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase"},"Bahasa Indonesia",-1))]),o("p",{class:y(["text-xs font-black uppercase tracking-[0.5em] opacity-60",e.isDark?"text-slate-400":"text-slate-500"])},"Toram Online Database",2)])]),o("div",yp,[o("div",{class:y(["group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white border-slate-200 shadow-xl shadow-slate-200/50"])},[v[10]||(v[10]=o("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"},null,-1)),o("span",{class:y(["relative text-xs font-black uppercase tracking-[0.2em]",e.isDark?"text-cyan-400":"text-blue-600"])}," Results : "+T(G.value.length)+" Xtall ",3)],2),o("div",wp,[(M(),R(Z,null,pe(3,Q=>o("div",{key:Q,class:"w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"})),64))])])],2),Ae(te,{to:"/xtall/advanced",class:"mb-6 block w-full rounded-2xl border-2 border-indigo-500 bg-gradient-to-t from-indigo-400 to-purple-500 px-6 py-5 text-center text-lg font-black text-white shadow-xl hover:scale-[1.02] transition"},{default:He(()=>[...v[11]||(v[11]=[Ye(" 🔎 Advanced Xtall Search ",-1)])]),_:1}),o("section",{class:y(["grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl",e.isDark?"bg-slate-950/60 border-red/100 shadow-black/40":"bg-red/80 border-slate-200 shadow-slate-300/50"])},[o("div",Pp,[v[14]||(v[14]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2"},[o("span",{class:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"}),Ye(" Search Name ")],-1)),o("div",_p,[v[12]||(v[12]=o("div",{class:"absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"},null,-1)),Me(o("input",{"onUpdate:modelValue":v[0]||(v[0]=Q=>l.value=Q),type:"text",placeholder:"Search xtall name...",class:y(["relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm",e.isDark?"bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600":"bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400"])},null,2),[[ze,l.value]]),v[13]||(v[13]=o("svg",{class:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-width":"3"})],-1))])]),o("div",Mp,[v[17]||(v[17]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4"},"Scale",-1)),o("div",Dp,[Me(o("select",{"onUpdate:modelValue":v[1]||(v[1]=Q=>d.value=Q),class:y(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200":"bg-white border-slate-200 focus:border-purple-500 shadow-sm"])},[...v[15]||(v[15]=[o("option",{value:10},"10 Units",-1),o("option",{value:25},"25 Units",-1),o("option",{value:50},"50 Units",-1),o("option",{value:9999},"Show All",-1)])],2),[[Ht,d.value]]),v[16]||(v[16]=o("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"})],-1))])]),o("div",Rp,[v[21]||(v[21]=o("div",{class:"flex items-center gap-2 ml-4"},[o("div",{class:"w-1.5 h-4 bg-red-600 rounded-full"}),o("label",{class:"text-[11px] font-[1000] uppercase tracking-[0.25em] text-red-600"}," Sequence & Reset Control Center ")],-1)),o("div",Cp,[o("div",Sp,[Me(o("select",{"onUpdate:modelValue":v[2]||(v[2]=Q=>m.value=Q),class:y(["w-full h-[60px] px-6 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-12",e.isDark?"bg-slate-900 border-white/10 focus:border-red-500 text-slate-200":"bg-white border-slate-200 focus:border-red-500 shadow-sm"])},[...v[18]||(v[18]=[o("option",{value:"asc"},"Sequence: A to Z",-1),o("option",{value:"desc"},"Sequence: Z to A",-1)])],2),[[Ht,m.value]]),v[19]||(v[19]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-500"},[o("svg",{class:"w-5 h-5 group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))]),o("button",{onClick:i,class:"h-[60px] w-full px-1 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]"},[...v[20]||(v[20]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 group-hover:rotate-180 transition-transform duration-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),o("span",{class:"whitespace-nowrap"},"Reset",-1)])])])])],2),o("div",Ep,[o("div",{class:y(["absolute inset-0 h-[1px] my-auto",e.isDark?"bg-white/5":"bg-slate-200"])},null,2),v[22]||(v[22]=o("div",{class:"absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"},null,-1)),o("div",{class:y(["relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all",e.isDark?"bg-[#020617] border-white/10 text-slate-500":"bg-transparent-50 border-slate-200 text-slate-400"])}," Xtall Versi Indonesia ",2)]),o("main",Ip,[(M(!0),R(Z,null,pe(oe.value,(Q,_e)=>(M(),R("div",{key:Q.code,class:"flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry",style:wt({animationDelay:_e*70+"ms"})},[o("div",Bp,[f(Q)?(M(),R("div",{key:0,onClick:fe=>le(f(Q).name),class:y(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/300 border-white/65 hover:border-cyan-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-cyan-400"])},[v[23]||(v[23]=aa('<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-4ca8d73f></div><div class="flex items-center gap-2 mb-2" data-v-4ca8d73f><svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" data-v-4ca8d73f><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-4ca8d73f></path></svg><span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest" data-v-4ca8d73f>Previous</span></div>',2)),o("p",{class:y(["text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},T(f(Q).name),3),v[24]||(v[24]=o("div",{class:"absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🧬",-1))],10,Tp)):(M(),R("div",Kp,[...v[25]||(v[25]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))]),o("div",Op,[o("div",{class:y(["absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",Q.type==="UPGRADE"?"bg-purple-600":"bg-blue-600"])},null,2),o("div",{class:y(["h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl",e.isDark?"bg-[#0b1226]/90 border-white/80 group-hover:border-white/80":"bg-white border-slate-200 group-hover:border-blue-400"])},[o("div",Np,[o("div",Gp,[o("div",Lp,[v[26]||(v[26]=o("div",{class:"absolute inset-0 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"},null,-1)),o("div",{class:y(["relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110",e.isDark?"bg-slate-950 border-white/70":"bg-slate-50 border-slate-200"])},[o("img",{src:_(Q),class:"w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]",alt:Q.type},null,8,Fp)],2),o("div",{class:y(["absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black",P(Q.type)])},T(Q.type.charAt(0)),3)]),o("div",Up,[o("div",jp,[v[27]||(v[27]=o("div",{class:"flex flex-wrap items-center gap-3"},null,-1)),o("h3",{class:y(["text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400",X(Q)])},T(Q.name),3)]),o("div",{class:y(["p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]",e.isDark?"bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]":"bg-slate-50 border-slate-100"])},[o("div",Hp,[(M(!0),R(Z,null,pe(ie(Q.view),(fe,Be)=>(M(),R("div",{key:Be,class:"flex items-center gap-4 group/item"},[fe.includes("Dengan")?ye("",!0):(M(),R("div",Wp)),o("p",{class:y(["text-xs md:text-sm font-bold tracking-tight transition-all duration-300",fe.includes("Dengan")?"text-green-500 italic":fe.includes("-")?"text-red-500":e.isDark?"text-slate-300 group-hover/item:text-white":"text-slate-600 group-hover/item:text-slate-900"])},T(fe),3)]))),128))])],2)])])]),o("div",{class:y(["px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4",e.isDark?"bg-white/[0.02] border-white/5":"bg-slate-50 border-slate-100"])},[o("div",Jp,[o("div",Qp,[o("span",{class:y(["text-[10px] font-black tracking-widest transition-colors",e.isDark?"text-slate-400":"text-slate-500"])}," TYPE XTALL ",2),o("span",{class:y(["text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter",P(Q.type)])},T(Q.type),3)]),v[28]||(v[28]=o("div",{class:"h-8 w-[1px] bg-white/10 hidden sm:block"},null,-1))]),Ae(ue,{to:"/xtall/"+Q.code,class:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"},{default:He(()=>[...v[29]||(v[29]=[Ye(" Details ",-1)])]),_:1},8,["to"])],2)],2)]),o("div",Yp,[b(Q).length?(M(!0),R(Z,{key:0},pe(b(Q),fe=>(M(),R("div",{key:fe.code,onClick:Be=>le(fe.name),class:y(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/65 hover:border-purple-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-purple-400"])},[v[30]||(v[30]=aa('<div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-600 to-yellow-700 opacity-40 group-hover:opacity-100 transition-opacity" data-v-4ca8d73f></div><div class="flex items-center justify-end gap-2 mb-2 text-right" data-v-4ca8d73f><span class="text-[9px] font-black uppercase text-purple-500 tracking-widest" data-v-4ca8d73f>Next Upgrade</span><svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24" data-v-4ca8d73f><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-4ca8d73f></path></svg></div>',2)),o("p",{class:y(["text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},T(fe.name),3),v[31]||(v[31]=o("div",{class:"absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🚀",-1))],10,Vp))),128)):(M(),R("div",qp,[...v[32]||(v[32]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))])],4))),128)),G.value.length===0?(M(),R("div",zp,[v[33]||(v[33]=aa('<div class="inline-flex relative mb-8" data-v-4ca8d73f><div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping" data-v-4ca8d73f></div><div class="text-8xl relative" data-v-4ca8d73f>🔎</div></div><h2 class="text-3xl font-[1000] uppercase italic tracking-tighter" data-v-4ca8d73f>Xtall not found</h2><p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4" data-v-4ca8d73f>Search xtall name with correct Indonesian name.</p>',3)),o("button",{onClick:I,class:"mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"},"Reset")])):ye("",!0),o("div",Zp,[Pe.value>1&&d.value<1e3?(M(),R("nav",Xp,[o("button",{onClick:v[3]||(v[3]=Q=>u.value--),disabled:u.value===1,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," « ",8,$p),o("div",eg,[(M(!0),R(Z,null,pe(Ee.value,Q=>(M(),R(Z,{key:Q},[Q!=="..."?(M(),R("button",{key:0,onClick:_e=>u.value=Q,class:y(["w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center",u.value===Q?"bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1":e.isDark?"bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500":"bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm"])},T(Q),11,tg)):(M(),R("span",ng,"..."))],64))),128))]),o("button",{onClick:v[4]||(v[4]=Q=>u.value++),disabled:u.value===Pe.value,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," » ",8,ag)])):ye("",!0),d.value<100?(M(),R("button",{key:1,onClick:v[5]||(v[5]=Q=>d.value=9999),class:"group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl"},[...v[34]||(v[34]=[o("div",{class:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"},null,-1),o("span",{class:"relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic"},"Explore All",-1)])])):ye("",!0),o("div",ig,[v[35]||(v[35]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1)),o("p",lg,"Page "+T(u.value)+" of "+T(Pe.value),1),v[36]||(v[36]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1))])])])]),o("div",og,[o("div",{class:y(["px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500",e.isDark?"bg-slate-900/80 border-white/10":"bg-white/80 border-slate-200 shadow-2xl"])},[...v[37]||(v[37]=[o("div",{class:"flex items-center gap-4"},[o("div",{class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),o("span",{class:"text-[9px] font-black uppercase tracking-widest opacity-60"},"Versi Nama Indonesia")],-1)])],2)])],2)}}},rg=Wt(sg,[["__scopeId","data-v-4ca8d73f"]]),Ql=315,Qa={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Ya={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5,"Unda's Return":2281e5,"The Young Man and the Old Tree":234e6,"The Village of Lixis":24e7,"Visions of a Distant Past":246e6},Gt=e=>Math.floor(.025*Math.pow(e,4)+2*e),cg=(e,t,n)=>{let a=Math.floor((1-t/100)*Gt(e));for(let i=e+1;i<n;i++)a+=Gt(i);return a},Va=(e,t,n)=>{let a=n,i=(1-t/100)*Gt(e);if(n<i){let l=t/100*Gt(e)+n;return[e,Math.floor(100*l/Gt(e))]}else{a-=i;let l=e+1;for(;Gt(l)<=a;)a-=Gt(l),l+=1;let s=Math.floor(100*a/Gt(l));return[l,s]}},ug={class:"flex flex-col items-center gap-8 animate-bounce-slow pt-10"},dg={class:"grid grid-cols-1 lg:grid-cols-3 gap-10"},pg={class:"lg:col-span-2 space-y-8"},gg={class:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"},mg={class:"group"},fg={class:"group"},hg={class:"group"},Ag={key:0,class:"space-y-10 animate-in slide-in-from-bottom-4 duration-500"},bg={class:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5"},kg={class:"relative group select-container"},vg={class:"truncate font-black text-sm"},xg=["onClick"],yg={class:"relative group select-container"},wg={class:"truncate font-black text-sm"},Pg=["onClick"],_g={key:0,class:"p-5 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center gap-4 animate-pulse"},Mg={key:1,class:"flex flex-wrap gap-10 ml-4"},Dg={class:"flex items-center gap-4 cursor-pointer group active:scale-90 transition-all"},Rg={class:"relative flex items-center justify-center"},Cg={class:"h-6 w-6 border-2 border-indigo-500 rounded-lg transition-all peer-checked:bg-indigo-500 peer-checked:shadow-[0_0_15px_rgba(99,102,241,0.6)] flex items-center justify-center"},Sg={key:0,class:"h-4 w-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Eg={class:"flex items-center gap-4 cursor-pointer group active:scale-90 transition-all"},Ig={class:"relative flex items-center justify-center"},Bg={class:"h-6 w-6 border-2 border-purple-500 rounded-lg transition-all peer-checked:bg-purple-500 peer-checked:shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center"},Tg={key:0,class:"h-4 w-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Kg={key:1,class:"space-y-10 animate-in slide-in-from-bottom-4 duration-500"},Og={class:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5"},Ng={class:"relative group select-container"},Gg={class:"truncate font-black text-sm"},Lg=["onClick"],Fg={class:"lg:col-span-1 space-y-8"},Ug={class:"space-y-8 sticky top-10"},jg={class:"relative z-10 space-y-10"},Hg={key:0,class:"h-full flex flex-col justify-center items-center py-16 text-center"},Wg={class:"result-item"},Jg={class:"text-3xl font-black tabular-nums tracking-tighter"},Qg={class:"pt-10 border-t border-white/20 result-item"},Yg={class:"text-[11px] font-black tracking-widest opacity-50 uppercase mb-3"},Vg={class:"flex flex-col gap-1"},qg={class:"text-7xl font-black italic tracking-tighter drop-shadow-2xl"},zg={class:"text-2xl font-bold opacity-60 ml-2"},Zg={class:"bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md result-item"},Xg={class:"text-lg font-black tabular-nums tracking-wide text-indigo-200"},$g={class:"absolute -right-10 -bottom-10 text-[14rem] font-black italic opacity-5 pointer-events-none uppercase tracking-tighter transition-all duration-1000 deco-text"},em={class:"flex items-center justify-between mb-8"},tm={class:"px-6 py-4 rounded-[2rem] bg-gradient-to-br from-yellow-200 to-purple-700 shadow-x9 shadow-indigo-500/20 flex flex-col items-center justify-center border-t border-white/10 transition-all active:scale-95 cursor-default"},nm={class:"text-3xl font-black italic tracking-tighter leading-none text-white"},am={class:"space-y-4 max-h-[350px] overflow-y-auto pr-7 custom-scroll"},im={class:"flex flex-col"},lm={class:"text-sm font-black italic group-hover:text-white transition-all"},om={class:"flex items-baseline gap-2"},sm={class:"text-[11px] font-bold opacity-40 group-hover:text-white/60 group-hover:opacity-100"},rm={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=ne("mq"),n=ne(1),a=ne(0),i=ne(Ql),l=ne(!0),s=ne(!1),r=Object.keys(Ya),c=ne(1),p=ne(r.length-1),u=ne(Object.keys(Qa)[1]),d=ne(1),m=ne(!1),A=ne(!1),x=ne(!1),w=()=>{m.value=!1,A.value=!1,x.value=!1},L=ae(()=>{let P=[],f=0;return r.forEach((b,W)=>{b.startsWith("Chapter")?f++:Ya[b]!==""&&P.push({id:W,label:`CH${f} - ${b}`})}),P}),I=ae(()=>t.value==="mq"&&c.value>p.value),_=ae(()=>{const P=Number(n.value)||1,f=Number(a.value)||0,b=Number(i.value)||Ql;if(I.value)return null;const W=cg(P,f,b);let J=0;const we=c.value,X=p.value;for(let ce=we;ce<=X;ce++){const K=r[ce],v=Ya[K];typeof v=="number"&&(J+=v),K==="The Battle to Recapture Eldenbaum"&&!l.value&&(J+=125e5)}const[ie,le]=Va(P,f,J);let G=[];if(s.value&&J>0){let ce=P,K=f;for(let v=1;v<=100;v++){const[te,ue]=Va(ce,K,J);if(G.push({run:v,lv:te,p:ue}),ce=te,K=ue,ce>=b)break}}const oe=(Qa[u.value]||0)*(d.value||0),[Pe,Ee]=Va(P,f,oe);return{xpNeeded:W,totalMqXP:J,resLv:ie,resP:le,diaryRuns:G,sqLv:Pe,sqPercent:Ee,sqXP:oe}});return(P,f)=>(M(),R("div",{onClick:w,class:"space-y-10 animate-in fade-in zoom-in-95 duration-1000 max-w-6xl mx-auto pb-20 px-4"},[o("div",ug,[f[11]||(f[11]=o("div",{class:"text-center relative"},[o("div",{class:"absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full opacity-50"}),o("h1",{class:"relative text-6xl md:text-7xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"}," MQ Calculator "),o("p",{class:"text-[11px] font-black opacity-60 tracking-[0.5em] uppercase mt-2"},"Timi DB System")],-1)),o("div",{class:y(["p-1.5 rounded-2xl flex gap-1 border backdrop-blur-2xl transition-all shadow-2xl",e.isDark?"bg-slate-900/60 border-white/10":"bg-slate-200/50 border-slate-300"])},[o("button",{onClick:f[0]||(f[0]=ln(b=>{t.value="mq",w()},["stop"])),class:y(["tab-btn active:scale-90",t.value==="mq"?"tab-active":""])}," Main Quest ",2),o("button",{onClick:f[1]||(f[1]=ln(b=>{t.value="npc",w()},["stop"])),class:y(["tab-btn active:scale-90",t.value==="npc"?"tab-active":""])}," NPC Quest ",2)],2)]),o("div",dg,[o("div",pg,[o("div",{class:y(["p-10 rounded-[3rem] border backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700",e.isDark?"bg-slate-900/40 border-white/5":"bg-white/70 border-white"])},[o("div",gg,[o("div",mg,[f[12]||(f[12]=o("label",{class:"label-text"},"Current Lv",-1)),Me(o("input",{"onUpdate:modelValue":f[2]||(f[2]=b=>n.value=b),type:"number",class:y(["input-style active:scale-[0.98]",e.isDark?"dark-input":"light-input"])},null,2),[[ze,n.value,void 0,{number:!0}]])]),o("div",fg,[f[13]||(f[13]=o("label",{class:"label-text"},"Percent %",-1)),Me(o("input",{"onUpdate:modelValue":f[3]||(f[3]=b=>a.value=b),type:"number",class:y(["input-style active:scale-[0.98]",e.isDark?"dark-input":"light-input"])},null,2),[[ze,a.value,void 0,{number:!0}]])]),o("div",hg,[f[14]||(f[14]=o("label",{class:"label-text text-pink-500"},"Target Lv",-1)),Me(o("input",{"onUpdate:modelValue":f[4]||(f[4]=b=>i.value=b),type:"number",class:y(["input-style active:scale-[0.98]",e.isDark?"dark-input":"light-input"])},null,2),[[ze,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(M(),R("div",Ag,[o("div",bg,[o("div",kg,[o("label",{class:y(["label-text",I.value?"text-red-400 animate-pulse":"text-indigo-400"])},"✦ Start From",2),o("div",{onClick:f[5]||(f[5]=ln(b=>{m.value=!m.value,A.value=!1},["stop"])),class:y(["input-style flex items-center justify-between cursor-pointer active:scale-95",e.isDark?"dark-input":"light-input",I.value?"!border-red-500/50":""])},[o("span",vg,T(L.value.find(b=>b.id===c.value)?.label),1),(M(),R("svg",{xmlns:"http://www.w3.org/2000/svg",class:y(["h-4 w-4 transition-transform duration-500",m.value?"rotate-180":""]),viewBox:"0 0 20 20",fill:"currentColor"},[...f[15]||(f[15]=[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)])],2))],2),Ae(Cn,{name:"mega-menu"},{default:He(()=>[m.value?(M(),R("div",{key:0,class:y(["custom-list custom-scroll",e.isDark?"bg-slate-900 shadow-[0_20px_50px_rgba(79,70,229,0.3)]":"bg-white shadow-2xl"])},[(M(!0),R(Z,null,pe(L.value,b=>(M(),R("div",{key:b.id,onClick:W=>{c.value=b.id,m.value=!1},class:y(["list-item active:scale-95",c.value===b.id?"active-item":e.isDark?"hover:bg-white/5 text-slate-300":"hover:bg-slate-50 text-slate-700"])},T(b.label),11,xg))),128))],2)):ye("",!0)]),_:1})]),o("div",yg,[f[17]||(f[17]=o("label",{class:"label-text text-indigo-400"},"✦ End At",-1)),o("div",{onClick:f[6]||(f[6]=ln(b=>{A.value=!A.value,m.value=!1},["stop"])),class:y(["input-style flex items-center justify-between cursor-pointer active:scale-95",e.isDark?"dark-input":"light-input"])},[o("span",wg,T(L.value.find(b=>b.id===p.value)?.label),1),(M(),R("svg",{xmlns:"http://www.w3.org/2000/svg",class:y(["h-4 w-4 transition-transform duration-500",A.value?"rotate-180":""]),viewBox:"0 0 20 20",fill:"currentColor"},[...f[16]||(f[16]=[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)])],2))],2),Ae(Cn,{name:"mega-menu"},{default:He(()=>[A.value?(M(),R("div",{key:0,class:y(["custom-list custom-scroll",e.isDark?"bg-slate-900 shadow-[0_20px_50px_rgba(79,70,229,0.3)]":"bg-white shadow-2xl"])},[(M(!0),R(Z,null,pe(L.value,b=>(M(),R("div",{key:b.id,onClick:W=>{p.value=b.id,A.value=!1},class:y(["list-item active:scale-95",p.value===b.id?"active-item":e.isDark?"hover:bg-white/5 text-slate-300":"hover:bg-slate-50 text-slate-700"])},T(b.label),11,Pg))),128))],2)):ye("",!0)]),_:1})])]),I.value?(M(),R("div",_g,[...f[18]||(f[18]=[o("div",{class:"p-2.5 rounded-2xl bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})])],-1),o("p",{class:"text-[12px] font-black uppercase tracking-widest text-red-500"},"Selection Error: Chapter Start > Chapter End!",-1)])])):(M(),R("div",Mg,[o("label",Dg,[o("div",Rg,[Me(o("input",{type:"checkbox","onUpdate:modelValue":f[7]||(f[7]=b=>l.value=b),class:"peer h-6 w-6 opacity-0 absolute"},null,512),[[Ml,l.value]]),o("div",Cg,[l.value?(M(),R("svg",Sg,[...f[19]||(f[19]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):ye("",!0)])]),f[20]||(f[20]=o("span",{class:"text-[12px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),o("label",Eg,[o("div",Ig,[Me(o("input",{type:"checkbox","onUpdate:modelValue":f[8]||(f[8]=b=>s.value=b),class:"peer h-6 w-6 opacity-0 absolute"},null,512),[[Ml,s.value]]),o("div",Bg,[s.value?(M(),R("svg",Tg,[...f[21]||(f[21]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):ye("",!0)])]),f[22]||(f[22]=o("span",{class:"text-[12px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])]))])):(M(),R("div",Kg,[o("div",Og,[o("div",Ng,[f[24]||(f[24]=o("label",{class:"label-text text-emerald-400"},"✦ Select Quest",-1)),o("div",{onClick:f[9]||(f[9]=ln(b=>x.value=!x.value,["stop"])),class:y(["input-style flex items-center justify-between cursor-pointer active:scale-95",e.isDark?"dark-input":"light-input"])},[o("span",Gg,T(u.value),1),(M(),R("svg",{xmlns:"http://www.w3.org/2000/svg",class:y(["h-4 w-4 transition-transform duration-500",x.value?"rotate-180":""]),viewBox:"0 0 20 20",fill:"currentColor"},[...f[23]||(f[23]=[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)])],2))],2),Ae(Cn,{name:"mega-menu"},{default:He(()=>[x.value?(M(),R("div",{key:0,class:y(["custom-list custom-scroll",e.isDark?"bg-slate-900 shadow-[0_20px_50px_rgba(16,185,129,0.3)]":"bg-white shadow-2xl"])},[(M(!0),R(Z,null,pe(Ge(Qa),(b,W)=>(M(),R("div",{key:W,onClick:J=>{u.value=W,x.value=!1},class:y(["list-item active:scale-95",u.value===W?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/30":e.isDark?"hover:bg-white/5 text-slate-300":"hover:bg-slate-50 text-slate-700"])},T(W),11,Lg))),128))],2)):ye("",!0)]),_:1})]),o("div",null,[f[25]||(f[25]=o("label",{class:"label-text text-emerald-400"},"✦ Amount (Stack/Times)",-1)),Me(o("input",{"onUpdate:modelValue":f[10]||(f[10]=b=>d.value=b),type:"number",class:y(["input-style active:scale-[0.98]",e.isDark?"dark-input":"light-input"])},null,2),[[ze,d.value,void 0,{number:!0}]])])])]))],2)]),o("div",Fg,[o("div",Ug,[o("div",{class:y(["p-10 rounded-[4rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-700 result-card-interactive active:scale-95",I.value?"bg-gradient-to-br from-red-600 to-red-900 shadow-red-500/40":t.value==="mq"?"bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-900 shadow-indigo-500/40":"bg-gradient-to-br from-emerald-600 to-teal-900 shadow-emerald-500/40"])},[f[29]||(f[29]=o("div",{class:"absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"},null,-1)),o("div",jg,[I.value?(M(),R("div",Hg,[...f[26]||(f[26]=[o("div",{class:"text-6xl mb-6 animate-pulse"},"⚠️",-1),o("h2",{class:"text-2xl font-black uppercase tracking-tighter"},"System Error",-1),o("p",{class:"text-[12px] font-bold opacity-60 mt-2"},"CHAPTER RANGE INVALID",-1)])])):_.value?(M(),R(Z,{key:1},[o("div",Wg,[f[27]||(f[27]=o("p",{class:"text-[11px] font-black tracking-widest opacity-50 uppercase mb-2"},"XP Required to Target",-1)),o("h3",Jg,T(_.value.xpNeeded.toLocaleString()),1)]),o("div",Qg,[o("p",Yg,T(t.value==="mq"?"Result After 1 Run":"Post-Quest Projection"),1),o("div",Vg,[o("span",qg," Lv "+T(t.value==="mq"?_.value.resLv:_.value.sqLv),1),o("span",zg,T(t.value==="mq"?_.value.resP:_.value.sqPercent)+"% Experience ",1)])]),o("div",Zg,[f[28]||(f[28]=o("p",{class:"text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mb-1"},"Total Gain",-1)),o("p",Xg," + "+T((t.value==="mq"?_.value.totalMqXP:_.value.sqXP).toLocaleString())+" XP ",1)])],64)):ye("",!0)]),o("div",$g,T(I.value?"Err":t.value),1)],2),t.value==="mq"&&s.value&&_.value&&_.value.diaryRuns.length>0?(M(),R("div",{key:0,class:y(["p-10 rounded-[3.5rem] border backdrop-blur-3xl shadow-2xl transition-all duration-700 animate-in slide-in-from-right-10",e.isDark?"bg-slate-900/40 border-white/5 shadow-black/50":"bg-white/80 border-slate-200 shadow-slate-200"])},[o("div",em,[f[31]||(f[31]=o("div",null,[o("h4",{class:"text-[12px] font-black uppercase tracking-[0.3em] text-indigo-500"},"Diary Adventure"),o("p",{class:"text-[10px] opacity-40 font-bold uppercase mt-1"},"Simulated Progress")],-1)),o("div",tm,[f[30]||(f[30]=o("span",{class:"text-[9px] font-black opacity-100 uppercase tracking-[0.2em] leading-none mb-1"},"Total Run",-1)),o("span",nm,T(_.value?.diaryRuns?.length||0),1)])]),o("div",am,[(M(!0),R(Z,null,pe(_.value.diaryRuns,b=>(M(),R("div",{key:b.run,class:"flex items-center justify-between p-5 rounded-3xl transition-all group hover:bg-indigo-500 hover:scale-[1.02] border border-transparent hover:border-white/20 active:scale-95"},[o("div",im,[f[32]||(f[32]=o("span",{class:"text-[10px] font-black opacity-30 group-hover:opacity-100 group-hover:text-indigo-100 transition-all uppercase"},"Run",-1)),o("span",lm,"#"+T(b.run.toString().padStart(2,"0")),1)]),o("div",om,[o("span",{class:y(["text-2xl font-black italic tracking-tighter group-hover:text-white",e.isDark?"text-white":"text-slate-800"])},"Lv "+T(b.lv),3),o("span",sm,T(b.p)+"%",1)])]))),128))])],2)):ye("",!0)])])])]))}},cm=Wt(rm,[["__scopeId","data-v-d5daed5d"]]),um=280,Yl=54,dm=55,Vl=265,pm=300,It=510,Bt=277,{floor:Te,min:gm,max:mm}=Math,fm=(e,t,n,a,i)=>{const l=Te(n*(100+(i||0))/100+(a||0));return(e||0)+Te((t||0)/2)+Te(l/6)},hm=(e,t,n,a,i,l)=>{const s=Te(a*(100+(l||0))/100+(i||0)),r=(50+5*(e||0))/100,c=10+(t||0)-(n||0)+Te(s/10);return gm(100,mm(0,Te(r*c)))},Am=(e,t,n,a,i)=>{let l=Te((e||0)*(1+(t||0)*.01+(n||0)*.02));const s=i;switch(a){case"Armor":l+=Te(s.VIT/10);break;case"1H Sword":case"Bow":l+=Te((s.DEX+s.STR)/20);break;case"2H Sword":l+=Te(s.STR/10);break;case"Bowgun":l+=Te(s.DEX/10);break;case"Staff":l+=Te(s.INT/10);break;case"Magic Device":l+=Te((s.INT+s.AGI)/20);break;case"Knuckle":l+=Te(s.AGI/10);break;case"Halberd":l+=Te((s.STR+s.AGI)/20);break;case"Katana":l+=Te((s.DEX+s.AGI)/20);break}return l},bm={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},km={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},vm={class:"lg:col-span-4 space-y-6 animate-float"},xm={class:"grid grid-cols-2 gap-x-4 gap-y-5"},ym={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},wm=["onUpdate:modelValue"],Pm={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},_m={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},Mm=["onUpdate:modelValue"],Dm={class:"lg:col-span-4 space-y-6"},Rm={class:"space-y-4"},Cm={class:"relative group select-container"},Sm={class:"relative overflow-hidden rounded-xl"},Em=["value"],Im={class:"grid grid-cols-2 gap-4"},Bm={class:"group"},Tm={class:"group"},Km={class:"space-y-3 pt-2"},Om={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},Nm=["onUpdate:modelValue"],Gm={class:"lg:col-span-4 space-y-6 animate-float-slow"},Lm={class:"flex items-baseline gap-2"},Fm={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},Um={class:"flex items-baseline gap-2"},jm={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},Hm={class:"space-y-4"},Wm={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},Jm={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},Qm={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},Ym={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=ae(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=An({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:um,createSkill:10,itemDiff:Vl,basePot:Yl,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(p=>i.stats[p]=0),i.craftType==="Armor"?(i.stats.VIT=It,i.stats.TEC=Bt,i.itemDiff=Vl,i.basePot=Yl):(i.itemDiff=pm,i.basePot=dm,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=It,i.stats.STR=Bt):i.craftType==="2H Sword"?(i.stats.STR=It,i.stats.DEX=Bt):i.craftType==="Staff"?(i.stats.INT=It,i.stats.TEC=Bt):i.craftType==="Magic Device"?(i.stats.INT=It,i.stats.AGI=Bt):i.craftType==="Knuckle"?(i.stats.AGI=It,i.stats.DEX=Bt):i.craftType==="Halberd"?(i.stats.STR=It,i.stats.AGI=Bt):i.craftType==="Katana"&&(i.stats.DEX=It,i.stats.AGI=Bt))};tn(()=>l());const s=ae(()=>fm(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),r=ae(()=>hm(i.createSkill,s.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),c=ae(()=>Am(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(p,u)=>(M(),R("div",bm,[u[17]||(u[17]=o("div",{class:"text-center py-4 animate-bounce-slow"},[o("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),o("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),o("div",km,[o("div",vm,[o("div",{class:y(n.value)},[u[3]||(u[3]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),o("div",xm,[(M(!0),R(Z,null,pe(i.stats,(d,m)=>(M(),R("div",{key:m,class:"transition-all hover:scale-105"},[o("label",ym,T(m),1),Me(o("input",{type:"number","onUpdate:modelValue":A=>i.stats[m]=A,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,wm),[[ze,i.stats[m],void 0,{number:!0}]])]))),128))]),o("div",Pm,[(M(),R(Z,null,pe([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>o("div",{key:d[0]},[o("label",_m,T(d[1]),1),Me(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,Mm),[[ze,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),o("div",Dm,[o("div",{class:y([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),o("div",Rm,[o("div",Cm,[u[5]||(u[5]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),o("div",Sm,[Me(o("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(M(),R(Z,null,pe(a,d=>o("option",{key:d,value:d,class:"dropdown-item"},T(d),9,Em)),64))],544),[[Ht,i.craftType]]),u[4]||(u[4]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",Im,[o("div",Bm,[u[6]||(u[6]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),Me(o("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[ze,i.prof,void 0,{number:!0}]])]),o("div",Tm,[u[7]||(u[7]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),Me(o("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[ze,i.level,void 0,{number:!0}]])])]),o("div",Km,[(M(),R(Z,null,pe([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>o("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[o("span",Om,T(d[1]),1),Me(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,Nm),[[ze,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),o("div",Gm,[o("div",{class:y([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=o("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=o("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),o("div",Lm,[o("span",{class:y(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",r.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},T(r.value),3),u[9]||(u[9]=o("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),o("div",Fm,[o("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:wt({width:r.value+"%"})},null,4)])],2),o("div",{class:y([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=o("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=o("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),o("div",Um,[o("span",jm,T(c.value),1),u[12]||(u[12]=o("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),o("div",{class:y(n.value)},[o("div",Hm,[o("div",Wm,[o("span",null,"Diff Status: "+T(s.value)+" / "+T(i.itemDiff),1)]),s.value<i.itemDiff?(M(),R("div",Jm,[...u[15]||(u[15]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(M(),R("div",Qm,[...u[16]||(u[16]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},Vm=Wt(Ym,[["__scopeId","data-v-676556a4"]]),qm={class:"fixed inset-0 pointer-events-none z-0"},zm={key:0,class:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Zm={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"},Xm={key:0,class:"relative z-10 max-w-5xl mx-auto p-6 md:p-20 animate-fade-in"},$m={class:"grid lg:grid-cols-12 gap-12 items-start"},ef={class:"lg:col-span-5 space-y-2 animate-slide-right"},tf=["src"],nf={class:"lg:col-span-7 space-y-8 animate-slide-left"},af={class:"flex items-center gap-4"},lf={class:"text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]"},of={class:"space-y-5"},sf={key:0,class:"mt-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)] group-hover/stat:scale-150 transition-transform flex-shrink-0"},rf={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},cf={class:"text-sm font-bold flex items-center gap-2"},uf={class:"text-sm font-bold flex items-center gap-2 justify-between"},df={key:1,class:"h-screen flex items-center justify-center"},pf={__name:"XtallDetail",props:["id","isDark"],setup(e){const t=e,n=Yn(),a=ae(()=>Ft.find(x=>String(x.code)===String(t.id))),i=x=>{if(!x)return"NORMAL";let w=x,L=0;for(;w.link&&L<10;){const I=Ft.find(_=>String(_.code)===String(w.link));if(I)w=I,L++;else break}return w.type?.toUpperCase()},l=x=>{const w=i(a.value);return x?.toUpperCase()==="UPGRADE"||x?.toUpperCase()==="ENHANCER"?"text-gray-400":{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[w]||"text-cyan-500"},s=x=>{const w=i(a.value);return{NORMAL:"bg-blue-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",ADDITIONAL:"bg-yellow-600",SPECIAL:"bg-cyan-600"}[w]||"bg-cyan-600"},r=x=>{const w=x?.toUpperCase();return w==="UPGRADE"||w==="ENHANCER"?"bg-purple-600 text-white border-purple-400":({NORMAL:"bg-blue-600",ADDITIONAL:"bg-yellow-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",SPECIAL:"bg-cyan-600"}[w]||"bg-slate-700")+" text-white border-white/20"},c=x=>{const w=x?.toUpperCase();return w==="UPGRADE"||w==="ENHANCER"?`${i(a.value)} ENHANCER`:w},p=ae(()=>a.value?.link?Ft.find(x=>String(x.code)===String(a.value.link)):null),u=ae(()=>a.value?Ft.find(x=>String(x.link)===String(a.value.code)):null),d=x=>{n.push(`/xtall/${x}`)};Pt(()=>t.id,()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=x=>x?Array.isArray(x)?x:x.split(/,|\n/).map(w=>w.trim()).filter(w=>w):[],A=x=>{const w=x?.toUpperCase(),L=i(a.value);return w==="UPGRADE"||w==="ENHANCER"?{NORMAL:jn,WEAPON:Oi,ARMOR:Ni,ADDITIONAL:Gi,SPECIAL:Li}[L]||jn:{NORMAL:Un,WEAPON:Ii,ARMOR:Ti,ADDITIONAL:Bi,SPECIAL:Ki}[L]||Un};return(x,w)=>(M(),R("div",{class:y(["min-h-screen relative overflow-hidden font-sans transition-all duration-700",e.isDark?"bg-[#020617] text-slate-200":"bg-slate-50 text-slate-900"])},[o("div",qm,[o("div",{class:y(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),e.isDark?(M(),R("div",zm)):ye("",!0),e.isDark?(M(),R("div",Zm)):ye("",!0)]),a.value?(M(),R("div",Xm,[o("button",{onClick:w[0]||(w[0]=L=>x.$router.push("/xtall")),class:"group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2"},[...w[3]||(w[3]=[o("div",{class:"w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"},[o("svg",{class:"w-5 h-5 text-cyan-500 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M15 19l-7-7 7-7","stroke-width":"3"})])],-1),o("span",{class:"text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500"},"Back to Database",-1)])]),o("div",$m,[o("div",ef,[o("div",{class:y(["relative aspect-square rounded-[3.5rem] border-4 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 group",e.isDark?"bg-slate-900 border-white/20":"bg-white border-slate-300"])},[o("div",{class:y(["absolute inset-0 opacity-30 blur-3xl animate-pulse transition-colors duration-700",s(a.value.type)])},null,2),o("img",{src:A(a.value.type),class:"relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 animate-float"},null,8,tf),o("div",{class:y(["absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-2xl whitespace-nowrap transition-all duration-500 group-hover:scale-110",r(a.value.type)])},T(c(a.value.type)),3)],2)]),o("div",nf,[o("div",null,[o("p",{class:y(["text-xs font-black uppercase tracking-[0.4em] mb-2 drop-shadow-sm",l(a.value.name)])},T(c(a.value.type)),3),o("h1",{class:y(["text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4 drop-shadow-2xl transition-all duration-500 brightness-100 saturate-70",l(a.value.type),e.isDark?"[-webkit-text-stroke:1px_white]":"[-webkit-text-stroke:1px_black]"]),style:{maskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)",webkitMaskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)"}},T(a.value.name),3),o("div",af,[w[4]||(w[4]=o("div",{class:"h-[3px] w-16 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"},null,-1)),o("p",lf,"System ID: #"+T(a.value.code),1)])]),o("div",{class:y(["p-8 md:p-12 rounded-[3rem] border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden transition-all hover:border-cyan-500/50",e.isDark?"bg-slate-900/80 border-white/10 shadow-black":"bg-white border-slate-200 shadow-slate-300"])},[w[5]||(w[5]=o("div",{class:"absolute top-0 right-0 p-8 text-8xl opacity-[0.05] grayscale pointer-events-none animate-spin-slow"},"✨",-1)),w[6]||(w[6]=o("h3",{class:"text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-8 flex items-center gap-3"},[o("span",{class:"w-2 h-2 bg-cyan-500 rounded-full animate-ping"}),Ye(" Status/ Effect ")],-1)),o("div",of,[(M(!0),R(Z,null,pe(m(a.value.view),(L,I)=>(M(),R("div",{key:I,class:"flex items-start gap-4 group/stat animate-fade-in",style:wt({animationDelay:I*100+"ms"})},[L.includes("Dengan")?ye("",!0):(M(),R("div",sf)),o("p",{class:y(["text-base md:text-lg font-bold tracking-tight transition-colors",L.includes("Dengan")?"text-green-500 italic":L.includes("-")?"text-red-500":e.isDark?"text-slate-200 group-hover/stat:text-cyan-400":"text-slate-700"])},T(L),3)],4))),128))])],2),o("div",rf,[p.value?(M(),R("div",{key:0,onClick:w[1]||(w[1]=L=>d(p.value.code)),class:y(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-900/20":"bg-white border-slate-200 hover:border-cyan-500 shadow-slate-200"])},[w[8]||(w[8]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Model",-1)),o("p",cf,[w[7]||(w[7]=o("span",{class:"text-cyan-500 group-hover:-translate-x-2 transition-transform"},"←",-1)),Ye(" "+T(p.value.name),1)])],2)):ye("",!0),u.value?(M(),R("div",{key:1,onClick:w[2]||(w[2]=L=>d(u.value.code)),class:y(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-purple-500/50 hover:shadow-purple-900/20":"bg-white border-slate-200 hover:border-purple-500 shadow-slate-200"])},[w[10]||(w[10]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Advanced Upgrade",-1)),o("p",uf,[Ye(T(u.value.name)+" ",1),w[9]||(w[9]=o("span",{class:"text-purple-500 group-hover:translate-x-2 transition-transform"},"→",-1))])],2)):ye("",!0)])])])])):(M(),R("div",df,[...w[11]||(w[11]=[o("div",{class:"relative w-24 h-24"},[o("div",{class:"absolute inset-0 border-4 border-cyan-500/20 rounded-full"}),o("div",{class:"absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"})],-1)])]))],2))}},gf=Wt(pf,[["__scopeId","data-v-d58076e3"]]),mf={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF / DEF%",value:".DEF"},{label:"MDEF / MDEF%",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD / ASPD%",value:"ASPD"},{label:"CSPD / CSPD%",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen%",value:"Natural MP Regen"},{label:"Natural HP Regen%",value:"Natural HP Regen"},{label:"Attack MP Recovery / AMPR%",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK%",value:"Weapon ATK"},{label:"DTE (Elements)%",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee%",value:"Tambahan Fisik"},{label:"Additional Magic%",value:"Tambahan Sihir"},{label:"Antisipasi%",value:"Antisipasi"},{label:"Guard Break%",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)%",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)%",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)%",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)%",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)%",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)%",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)%",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable%",value:"Tumble Unavailable"},{label:"Evasion Recharge%",value:"Evasion Recharge"},{label:"Refleks%",value:"Refleks"},{label:"Recoil%",value:"Recoil"}]},ql={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},ff=[{label:"Weapon Crystas",value:"WEAPON",icon:Ii,color:"red"},{label:"Weapon Enhancer Crystas",value:"WEAPON_UPGRADE",icon:Oi,color:"red"},{label:"Armor Crystas",value:"ARMOR",icon:Ti,color:"green"},{label:"Armor Enhancer Crystas",value:"ARMOR_UPGRADE",icon:Ni,color:"green"},{label:"Additional Crystas",value:"ADDITIONAL",icon:Bi,color:"yellow"},{label:"Additional Enhancer Crystas",value:"ADDITIONAL_UPGRADE",icon:Gi,color:"yellow"},{label:"Normal Crystas",value:"NORMAL",icon:Un,color:"blue"},{label:"Normal Enhancer Crystas",value:"NORMAL_UPGRADE",icon:jn,color:"blue"},{label:"Special Crystas",value:"SPECIAL",icon:Ki,color:"pink"},{label:"Special Enhancer Crystas",value:"SPECIAL_UPGRADE",icon:Li,color:"pink"}],hf={class:"max-w-[1600px] mx-auto mb-6 flex items-center justify-between"},Af={class:"max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"},bf={class:"text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]"},kf={class:"text-2xl md:text-2xl font-[100] tracking-tighter uppercase italic leading-[0.8]"},vf={class:"max-w-[1600px] mx-auto space-y-5"},xf={class:"grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"},yf=["onClick"],wf=["src","alt"],Pf={key:0,class:"absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"},_f={class:"flex items-center gap-1 mb-4 ml-2"},Mf={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2"},Df=["onClick"],Rf={class:"flex items-start justify-between gap-2 mb-4"},Cf={key:0,class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Sf={class:"flex gap-1"},Ef=["onUpdate:modelValue"],If=["onUpdate:modelValue"],Bf=["onUpdate:modelValue"],Tf={__name:"XtallAdvancedSearch",props:{isDark:Boolean},setup(e){const t=Yn(),n=Sa(),a=An({stats:{},types:[]});tn(()=>{if(n.query.filter)try{const p=JSON.parse(n.query.filter);p?.stats&&(a.stats=p.stats),p?.types&&(a.types=p.types)}catch{console.warn("Invalid filter data")}});function i(){t.back()}function l(){Object.keys(a.stats).forEach(p=>delete a.stats[p]),a.types=[]}function s(p){a.stats[p]?delete a.stats[p]:a.stats[p]={sign:"+",op:">=",value:null}}function r(p){const u=a.types.indexOf(p);u>-1?a.types.splice(u,1):a.types.push(p)}function c(){t.push({name:"xtall",query:{filter:JSON.stringify(a)}})}return(p,u)=>(M(),R("div",{class:y(["p-4 md:p-8 font-sans transition-all duration-700 min-h-screen",e.isDark?"bg-[#050505] text-white":"bg-slate-50 text-slate-900"])},[o("div",hf,[o("button",{onClick:i,class:"group flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:bg-white/5 active:scale-95"},[o("div",{class:y(["w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",e.isDark?"border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10":"border-slate-200 group-hover:border-orange-500/50 group-hover:bg-orange-50"])},[...u[1]||(u[1]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 transition-transform group-hover:-translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M15 19l-7-7 7-7"})],-1)])],2),u[2]||(u[2]=o("span",{class:"text-[11px] font-[1000] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100"},"Back",-1))])]),o("div",Af,[o("div",null,[o("h1",bf,[o("span",{class:y(e.isDark?"text-white":"text-black")},"Advanced",2),u[3]||(u[3]=o("br",null,null,-1)),u[4]||(u[4]=o("span",{class:"bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x"},"Search",-1))]),o("h2",kf,[u[5]||(u[5]=o("br",null,null,-1)),o("span",{class:y(e.isDark?"text-white":"text-black")},"All Flat and percent(%) stats are combined ",2),u[6]||(u[6]=o("br",null,null,-1))])]),o("div",{class:"flex flex-row items-center gap-4 w-full lg:w-auto"},[o("button",{onClick:l,class:"flex-1 lg:flex-none px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300"}," Clear Page "),o("button",{onClick:c,class:"flex-[2] lg:flex-none px-10 py-5 bg-orange-600 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(234,88,12,0.3)]"},[...u[7]||(u[7]=[o("span",{class:"text-xs font-[1000] uppercase tracking-[0.2em] text-white"},"Apply Filters",-1)])])])]),o("div",vf,[o("section",null,[u[8]||(u[8]=o("div",{class:"flex items-center gap-3 mb-8 ml-2"},[o("div",{class:"w-1.5 h-6 rounded-full bg-cyan-500"}),o("h2",{class:"text-lg font-[1000] uppercase tracking-[0.3em] italic text-cyan-500"},"Type Crysta")],-1)),o("div",xf,[(M(!0),R(Z,null,pe(Ge(ff),d=>(M(),R("div",{key:d.value,onClick:m=>r(d.value),class:y(["group relative p-5 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col items-center gap-4 min-h-[160px] justify-center",a.types.includes(d.value)?"bg-[#468FE0] border-cyan-400 shadow-xl shadow-cyan-600/80 scale-[1.12]":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 shadow-sm hover:border-slate-300"])},[o("div",{class:y(["w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner",a.types.includes(d.value)?"border-white shadow-lg":"border-slate-800/50"])},[o("img",{src:d.icon,class:"w-full h-full object-cover",alt:d.label},null,8,wf)],2),o("span",{class:y(["text-[10px] font-black uppercase tracking-[0.15em] text-center leading-tight transition-colors",a.types.includes(d.value)?"text-white":e.isDark?"text-slate-400":"text-slate-500"])},T(d.label),3),a.types.includes(d.value)?(M(),R("div",Pf)):ye("",!0)],10,yf))),128))])]),(M(!0),R(Z,null,pe(Ge(mf),(d,m)=>(M(),R("div",{key:m},[o("div",_f,[o("div",{class:y(["w-1.5 h-6 rounded-full",Ge(ql)[m]?.bg||"bg-slate-500"])},null,2),o("h2",{class:y(["text-lg font-[1000] uppercase tracking-[0.3em] italic",Ge(ql)[m]?.text||"text-slate-500"])},T(m),3)]),o("div",Mf,[(M(!0),R(Z,null,pe(d,A=>(M(),R("div",{key:A.value,onClick:x=>s(A.value),class:y(["group/item relative rounded-[2rem] border-2 p-2 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[70px]",a.stats[A.value]?e.isDark?"bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-500/20":"bg-orange-50 border-orange-500":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 hover:border-slate-300 shadow-sm"])},[o("div",Rf,[o("span",{class:y(["text-[11px] font-[1000] uppercase leading-tight tracking-wide transition-colors",a.stats[A.value]?e.isDark?"text-white":"text-orange-600":e.isDark?"text-slate-500":"text-slate-400"])},T(A.label),3),o("div",{class:y(["shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500",a.stats[A.value]?"bg-orange-500 border-orange-400 rotate-0":e.isDark?"bg-white/5 border-white/10 rotate-45":"bg-slate-50 border-slate-200 rotate-45"])},[a.stats[A.value]?(M(),R("svg",Cf,[...u[9]||(u[9]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):(M(),R("div",{key:1,class:y(["text-lg leading-none",e.isDark?"text-white/20":"text-slate-300"])},"+",2))],2)]),Ae(Cn,{name:"fade"},{default:He(()=>[a.stats[A.value]?(M(),R("div",{key:0,onClick:u[0]||(u[0]=ln(()=>{},["stop"])),class:"space-y-2 mt-auto pt-4 border-t border-orange-500/20"},[o("div",Sf,[Me(o("select",{"onUpdate:modelValue":x=>a.stats[A.value].sign=x,class:y(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-orange-400":"bg-white border-slate-200 text-orange-600"])},[...u[10]||(u[10]=[o("option",{value:"+"},"Stats +",-1),o("option",{value:"-"},"Stats -",-1)])],10,Ef),[[Ht,a.stats[A.value].sign]]),Me(o("select",{"onUpdate:modelValue":x=>a.stats[A.value].op=x,class:y(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-cyan-400":"bg-white border-slate-200 text-cyan-600"])},[...u[11]||(u[11]=[o("option",{value:">="},"≥",-1),o("option",{value:"<="},"≤",-1)])],10,If),[[Ht,a.stats[A.value].op]])]),Me(o("input",{type:"number","onUpdate:modelValue":x=>a.stats[A.value].value=x,class:y(["w-full py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-all focus:border-orange-500",e.isDark?"bg-black border-white/10 text-white":"bg-white border-slate-200 text-black"]),placeholder:"VALUE"},null,10,Bf),[[ze,a.stats[A.value].value,void 0,{number:!0}]])])):ye("",!0)]),_:2},1024)],10,Df))),128))])]))),128))])],2))}},Kf=Wt(Tf,[["__scopeId","data-v-4127effe"]]),Of=[{path:"/",name:"bag",component:K0},{path:"/mq",name:"mainquest",component:pp},{path:"/mq-calc",name:"mqcalc",component:cm},{path:"/bs-calc",name:"bs-calc",component:Vm},{path:"/xtall",name:"xtall",component:rg},{path:"/xtall/advanced",name:"xtall-advanced",component:Kf},{path:"/xtall/:id(\\d+)",name:"xtall-detail",component:gf,props:!0}],Nf=id({history:Ou("/toram-vue/"),routes:Of});document.title||(document.title="Timi DB | Toram Online Database");const _s=qc(bd);_s.use(Nf);_s.mount("#app");window.addEventListener("unhandledrejection",e=>{console.warn("Ignored async listener error:",e.reason)});
