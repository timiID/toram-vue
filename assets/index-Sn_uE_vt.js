(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function ui(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},on=[],gt=()=>{},ql=()=>!1,pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),di=e=>e.startsWith("onUpdate:"),Ce=Object.assign,pi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ms=Object.prototype.hasOwnProperty,de=(e,t)=>Ms.call(e,t),q=Array.isArray,sn=e=>jn(e)==="[object Map]",hn=e=>jn(e)==="[object Set]",Hi=e=>jn(e)==="[object Date]",Z=e=>typeof e=="function",Re=e=>typeof e=="string",lt=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",zl=e=>(he(e)||Z(e))&&Z(e.then)&&Z(e.catch),$l=Object.prototype.toString,jn=e=>$l.call(e),Ds=e=>jn(e).slice(8,-1),Xl=e=>jn(e)==="[object Object]",fi=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Rs=/-\w/g,tt=fa(e=>e.replace(Rs,t=>t.slice(1).toUpperCase())),Ss=/\B([A-Z])/g,en=fa(e=>e.replace(Ss,"-$1").toLowerCase()),ma=fa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ca=fa(e=>e?`on${ma(e)}`:""),jt=(e,t)=>!Object.is(e,t),Zn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Zl=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},ga=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cs=e=>{const t=Re(e)?Number(e):NaN;return isNaN(t)?e:t};let ji;const ha=()=>ji||(ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pt(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=Re(a)?Is(a):Pt(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(Re(e)||he(e))return e}const Es=/;(?![^(]*\))/g,Ts=/:([^]+)/,_s=/\/\*[^]*?\*\//g;function Is(e){const t={};return e.replace(_s,"").split(Es).forEach(n=>{if(n){const a=n.split(Ts);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function w(e){let t="";if(Re(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const a=w(e[n]);a&&(t+=a+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ks="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bs=ui(Ks);function Yl(e){return!!e||e===""}function Ns(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=Fn(e[a],t[a]);return n}function Fn(e,t){if(e===t)return!0;let n=Hi(e),a=Hi(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=lt(e),a=lt(t),n||a)return e===t;if(n=q(e),a=q(t),n||a)return n&&a?Ns(e,t):!1;if(n=he(e),a=he(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const s in e){const r=e.hasOwnProperty(s),c=t.hasOwnProperty(s);if(r&&!c||!r&&c||!Fn(e[s],t[s]))return!1}}return String(e)===String(t)}function mi(e,t){return e.findIndex(n=>Fn(n,t))}const eo=e=>!!(e&&e.__v_isRef===!0),O=e=>Re(e)?e:e==null?"":q(e)||he(e)&&(e.toString===$l||!Z(e.toString))?eo(e)?O(e.value):JSON.stringify(e,to,2):String(e),to=(e,t)=>eo(t)?to(e,t.value):sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[Ea(a,l)+" =>"]=i,n),{})}:hn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ea(n))}:lt(t)?Ea(t):he(t)&&!q(t)&&!Xl(t)?String(t):t,Ea=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ve;class Os{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ve;try{return Ve=this,t()}finally{Ve=n}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ls(){return Ve}let ke;const Ta=new WeakSet;class no{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ta.has(this)&&(Ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||io(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fi(this),lo(this);const t=ke,n=nt;ke=this,nt=!0;try{return this.fn()}finally{oo(this),ke=t,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)bi(t);this.deps=this.depsTail=void 0,Fi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qa(this)&&this.run()}get dirty(){return Qa(this)}}let ao=0,Pn,Mn;function io(e,t=!1){if(e.flags|=8,t){e.next=Mn,Mn=e;return}e.next=Pn,Pn=e}function gi(){ao++}function hi(){if(--ao>0)return;if(Mn){let t=Mn;for(Mn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pn;){let t=Pn;for(Pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function lo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function oo(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),bi(a),Gs(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function Qa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(so(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function so(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===En)||(e.globalVersion=En,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Qa(e))))return;e.flags|=2;const t=e.dep,n=ke,a=nt;ke=e,nt=!0;try{lo(e);const i=e.fn(e._value);(t.version===0||jt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ke=n,nt=a,oo(e),e.flags&=-3}}function bi(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)bi(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gs(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let nt=!0;const ro=[];function Rt(){ro.push(nt),nt=!1}function St(){const e=ro.pop();nt=e===void 0?!0:e}function Fi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let En=0;class Us{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ai{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!nt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Us(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=a)}return n}trigger(t){this.version++,En++,this.notify(t)}notify(t){gi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hi()}}}function co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)co(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qa=new WeakMap,Zt=Symbol(""),za=Symbol(""),Tn=Symbol("");function Ie(e,t,n){if(nt&&ke){let a=qa.get(e);a||qa.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new Ai),i.map=a,i.key=n),i.track()}}function yt(e,t,n,a,i,l){const s=qa.get(e);if(!s){En++;return}const r=c=>{c&&c.trigger()};if(gi(),t==="clear")s.forEach(r);else{const c=q(e),p=c&&fi(n);if(c&&n==="length"){const u=Number(a);s.forEach((d,m)=>{(m==="length"||m===Tn||!lt(m)&&m>=u)&&r(d)})}else switch((n!==void 0||s.has(void 0))&&r(s.get(n)),p&&r(s.get(Tn)),t){case"add":c?p&&r(s.get("length")):(r(s.get(Zt)),sn(e)&&r(s.get(za)));break;case"delete":c||(r(s.get(Zt)),sn(e)&&r(s.get(za)));break;case"set":sn(e)&&r(s.get(Zt));break}}hi()}function nn(e){const t=ce(e);return t===e?t:(Ie(t,"iterate",Tn),et(e)?t:t.map(ot))}function ba(e){return Ie(e=ce(e),"iterate",Tn),e}function Bt(e,t){return Ct(e)?Yt(e)?pn(ot(t)):pn(t):ot(t)}const Hs={__proto__:null,[Symbol.iterator](){return _a(this,Symbol.iterator,e=>Bt(this,e))},concat(...e){return nn(this).concat(...e.map(t=>q(t)?nn(t):t))},entries(){return _a(this,"entries",e=>(e[1]=Bt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(a=>Bt(this,a)),arguments)},find(e,t){return bt(this,"find",e,t,n=>Bt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>Bt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ia(this,"includes",e)},indexOf(...e){return Ia(this,"indexOf",e)},join(e){return nn(this).join(e)},lastIndexOf(...e){return Ia(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return kn(this,"pop")},push(...e){return kn(this,"push",e)},reduce(e,...t){return Vi(this,"reduce",e,t)},reduceRight(e,...t){return Vi(this,"reduceRight",e,t)},shift(){return kn(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return kn(this,"splice",e)},toReversed(){return nn(this).toReversed()},toSorted(e){return nn(this).toSorted(e)},toSpliced(...e){return nn(this).toSpliced(...e)},unshift(...e){return kn(this,"unshift",e)},values(){return _a(this,"values",e=>Bt(this,e))}};function _a(e,t,n){const a=ba(e),i=a[t]();return a!==e&&!et(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const js=Array.prototype;function bt(e,t,n,a,i,l){const s=ba(e),r=s!==e&&!et(e),c=s[t];if(c!==js[t]){const d=c.apply(e,l);return r?ot(d):d}let p=n;s!==e&&(r?p=function(d,m){return n.call(this,Bt(e,d),m,e)}:n.length>2&&(p=function(d,m){return n.call(this,d,m,e)}));const u=c.call(s,p,a);return r&&i?i(u):u}function Vi(e,t,n,a){const i=ba(e);let l=n;return i!==e&&(et(e)?n.length>3&&(l=function(s,r,c){return n.call(this,s,r,c,e)}):l=function(s,r,c){return n.call(this,s,Bt(e,r),c,e)}),i[t](l,...a)}function Ia(e,t,n){const a=ce(e);Ie(a,"iterate",Tn);const i=a[t](...n);return(i===-1||i===!1)&&xi(n[0])?(n[0]=ce(n[0]),a[t](...n)):i}function kn(e,t,n=[]){Rt(),gi();const a=ce(e)[t].apply(e,n);return hi(),St(),a}const Fs=ui("__proto__,__v_isRef,__isVue"),uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt));function Vs(e){lt(e)||(e=String(e));const t=ce(this);return Ie(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?er:ho:l?go:mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const s=q(t);if(!i){let c;if(s&&(c=Hs[n]))return c;if(n==="hasOwnProperty")return Vs}const r=Reflect.get(t,n,Oe(t)?t:a);if((lt(n)?uo.has(n):Fs(n))||(i||Ie(t,"get",n),l))return r;if(Oe(r)){const c=s&&fi(n)?r:r.value;return i&&he(c)?Xa(c):c}return he(r)?i?Xa(r):bn(r):r}}class fo extends po{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const s=q(t)&&fi(n);if(!this._isShallow){const p=Ct(l);if(!et(a)&&!Ct(a)&&(l=ce(l),a=ce(a)),!s&&Oe(l)&&!Oe(a))return p||(l.value=a),!0}const r=s?Number(n)<t.length:de(t,n),c=Reflect.set(t,n,a,Oe(t)?t:i);return t===ce(i)&&(r?jt(a,l)&&yt(t,"set",n,a):yt(t,"add",n,a)),c}deleteProperty(t,n){const a=de(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&yt(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!lt(n)||!uo.has(n))&&Ie(t,"has",n),a}ownKeys(t){return Ie(t,"iterate",q(t)?"length":Zt),Reflect.ownKeys(t)}}class Js extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ws=new fo,Qs=new Js,qs=new fo(!0);const $a=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function zs(e,t,n){return function(...a){const i=this.__v_raw,l=ce(i),s=sn(l),r=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,p=i[e](...a),u=n?$a:t?pn:ot;return!t&&Ie(l,"iterate",c?za:Zt),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:r?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $s(e,t){const n={get(i){const l=this.__v_raw,s=ce(l),r=ce(i);e||(jt(i,r)&&Ie(s,"get",i),Ie(s,"get",r));const{has:c}=Qn(s),p=t?$a:e?pn:ot;if(c.call(s,i))return p(l.get(i));if(c.call(s,r))return p(l.get(r));l!==s&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Ie(ce(i),"iterate",Zt),i.size},has(i){const l=this.__v_raw,s=ce(l),r=ce(i);return e||(jt(i,r)&&Ie(s,"has",i),Ie(s,"has",r)),i===r?l.has(i):l.has(i)||l.has(r)},forEach(i,l){const s=this,r=s.__v_raw,c=ce(r),p=t?$a:e?pn:ot;return!e&&Ie(c,"iterate",Zt),r.forEach((u,d)=>i.call(l,p(u),p(d),s))}};return Ce(n,e?{add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear")}:{add(i){!t&&!et(i)&&!Ct(i)&&(i=ce(i));const l=ce(this);return Qn(l).has.call(l,i)||(l.add(i),yt(l,"add",i,i)),this},set(i,l){!t&&!et(l)&&!Ct(l)&&(l=ce(l));const s=ce(this),{has:r,get:c}=Qn(s);let p=r.call(s,i);p||(i=ce(i),p=r.call(s,i));const u=c.call(s,i);return s.set(i,l),p?jt(l,u)&&yt(s,"set",i,l):yt(s,"add",i,l),this},delete(i){const l=ce(this),{has:s,get:r}=Qn(l);let c=s.call(l,i);c||(i=ce(i),c=s.call(l,i)),r&&r.call(l,i);const p=l.delete(i);return c&&yt(l,"delete",i,void 0),p},clear(){const i=ce(this),l=i.size!==0,s=i.clear();return l&&yt(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=zs(i,e,t)}),n}function ki(e,t){const n=$s(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(de(n,i)&&i in a?n:a,i,l)}const Xs={get:ki(!1,!1)},Zs={get:ki(!1,!0)},Ys={get:ki(!0,!1)};const mo=new WeakMap,go=new WeakMap,ho=new WeakMap,er=new WeakMap;function tr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nr(e){return e.__v_skip||!Object.isExtensible(e)?0:tr(Ds(e))}function bn(e){return Ct(e)?e:vi(e,!1,Ws,Xs,mo)}function bo(e){return vi(e,!1,qs,Zs,go)}function Xa(e){return vi(e,!0,Qs,Ys,ho)}function vi(e,t,n,a,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=nr(e);if(l===0)return e;const s=i.get(e);if(s)return s;const r=new Proxy(e,l===2?a:n);return i.set(e,r),r}function Yt(e){return Ct(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function xi(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function ar(e){return!de(e,"__v_skip")&&Object.isExtensible(e)&&Zl(e,"__v_skip",!0),e}const ot=e=>he(e)?bn(e):e,pn=e=>he(e)?Xa(e):e;function Oe(e){return e?e.__v_isRef===!0:!1}function oe(e){return Ao(e,!1)}function ir(e){return Ao(e,!0)}function Ao(e,t){return Oe(e)?e:new lr(e,t)}class lr{constructor(t,n){this.dep=new Ai,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||Ct(t);t=a?t:ce(t),jt(t,n)&&(this._rawValue=t,this._value=a?t:ot(t),this.dep.trigger())}}function We(e){return Oe(e)?e.value:e}const or={get:(e,t,n)=>t==="__v_raw"?e:We(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function ko(e){return Yt(e)?e:new Proxy(e,or)}class sr{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ai(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=En-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return io(this,!0),!0}get value(){const t=this.dep.track();return so(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function rr(e,t,n=!1){let a,i;return Z(e)?a=e:(a=e.get,i=e.set),new sr(a,i,n)}const zn={},aa=new WeakMap;let zt;function cr(e,t=!1,n=zt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function ur(e,t,n=be){const{immediate:a,deep:i,once:l,scheduler:s,augmentJob:r,call:c}=n,p=R=>i?R:et(R)||i===!1||i===0?wt(R,1):wt(R);let u,d,m,b,v=!1,h=!1;if(Oe(e)?(d=()=>e.value,v=et(e)):Yt(e)?(d=()=>p(e),v=!0):q(e)?(h=!0,v=e.some(R=>Yt(R)||et(R)),d=()=>e.map(R=>{if(Oe(R))return R.value;if(Yt(R))return p(R);if(Z(R))return c?c(R,2):R()})):Z(e)?t?d=c?()=>c(e,2):e:d=()=>{if(m){Rt();try{m()}finally{St()}}const R=zt;zt=u;try{return c?c(e,3,[b]):e(b)}finally{zt=R}}:d=gt,t&&i){const R=d,V=i===!0?1/0:i;d=()=>wt(R(),V)}const A=Ls(),y=()=>{u.stop(),A&&A.active&&pi(A.effects,u)};if(l&&t){const R=t;t=(...V)=>{R(...V),y()}}let S=h?new Array(e.length).fill(zn):zn;const E=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(t){const V=u.run();if(i||v||(h?V.some((ee,re)=>jt(ee,S[re])):jt(V,S))){m&&m();const ee=zt;zt=u;try{const re=[V,S===zn?void 0:h&&S[0]===zn?[]:S,b];S=V,c?c(t,3,re):t(...re)}finally{zt=ee}}}else u.run()};return r&&r(E),u=new no(d),u.scheduler=s?()=>s(E,!1):E,b=R=>cr(R,!1,u),m=u.onStop=()=>{const R=aa.get(u);if(R){if(c)c(R,4);else for(const V of R)V();aa.delete(u)}},t?a?E(!0):S=u.run():s?s(E.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function wt(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Oe(e))wt(e.value,t,n);else if(q(e))for(let a=0;a<e.length;a++)wt(e[a],t,n);else if(hn(e)||sn(e))e.forEach(a=>{wt(a,t,n)});else if(Xl(e)){for(const a in e)wt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&wt(e[a],t,n)}return e}function Vn(e,t,n,a){try{return a?e(...a):e()}catch(i){Aa(i,t,n)}}function st(e,t,n,a){if(Z(e)){const i=Vn(e,t,n,a);return i&&zl(i)&&i.catch(l=>{Aa(l,t,n)}),i}if(q(e)){const i=[];for(let l=0;l<e.length;l++)i.push(st(e[l],t,n,a));return i}}function Aa(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||be;if(t){let r=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}r=r.parent}if(l){Rt(),Vn(l,null,10,[e,c,p]),St();return}}dr(e,n,i,a,s)}function dr(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const He=[];let ft=-1;const rn=[];let Nt=null,an=0;const vo=Promise.resolve();let ia=null;function ka(e){const t=ia||vo;return e?t.then(this?e.bind(this):e):t}function pr(e){let t=ft+1,n=He.length;for(;t<n;){const a=t+n>>>1,i=He[a],l=_n(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function yi(e){if(!(e.flags&1)){const t=_n(e),n=He[He.length-1];!n||!(e.flags&2)&&t>=_n(n)?He.push(e):He.splice(pr(t),0,e),e.flags|=1,xo()}}function xo(){ia||(ia=vo.then(wo))}function fr(e){q(e)?rn.push(...e):Nt&&e.id===-1?Nt.splice(an+1,0,e):e.flags&1||(rn.push(e),e.flags|=1),xo()}function Ji(e,t,n=ft+1){for(;n<He.length;n++){const a=He[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;He.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function yo(e){if(rn.length){const t=[...new Set(rn)].sort((n,a)=>_n(n)-_n(a));if(rn.length=0,Nt){Nt.push(...t);return}for(Nt=t,an=0;an<Nt.length;an++){const n=Nt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,an=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wo(e){try{for(ft=0;ft<He.length;ft++){const t=He[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<He.length;ft++){const t=He[ft];t&&(t.flags&=-2)}ft=-1,He.length=0,yo(),ia=null,(He.length||rn.length)&&wo()}}let Ee=null,Po=null;function la(e){const t=Ee;return Ee=e,Po=e&&e.type.__scopeId||null,t}function Ye(e,t=Ee,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&ca(-1);const l=la(t);let s;try{s=e(...i)}finally{la(l),a._d&&ca(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function ve(e,t){if(Ee===null)return e;const n=Pa(Ee),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,s,r,c=be]=t[i];l&&(Z(l)&&(l={mounted:l,updated:l}),l.deep&&wt(s),a.push({dir:l,instance:n,value:s,oldValue:void 0,arg:r,modifiers:c}))}return e}function Jt(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let s=0;s<i.length;s++){const r=i[s];l&&(r.oldValue=l[s].value);let c=r.dir[a];c&&(Rt(),st(c,n,8,[e.el,r,e,t]),St())}}function Yn(e,t){if(Ne){let n=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===n&&(n=Ne.provides=Object.create(a)),n[e]=t}}function at(e,t,n=!1){const a=ls();if(a||un){let i=un?un._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Z(t)?t.call(a&&a.proxy):t}}const mr=Symbol.for("v-scx"),gr=()=>at(mr);function Mt(e,t,n){return Mo(e,t,n)}function Mo(e,t,n=be){const{immediate:a,deep:i,flush:l,once:s}=n,r=Ce({},n),c=t&&a||!t&&l!=="post";let p;if(Nn){if(l==="sync"){const b=gr();p=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=gt,b.resume=gt,b.pause=gt,b}}const u=Ne;r.call=(b,v,h)=>st(b,u,v,h);let d=!1;l==="post"?r.scheduler=b=>{qe(b,u&&u.suspense)}:l!=="sync"&&(d=!0,r.scheduler=(b,v)=>{v?b():yi(b)}),r.augmentJob=b=>{t&&(b.flags|=4),d&&(b.flags|=2,u&&(b.id=u.uid,b.i=u))};const m=ur(e,t,r);return Nn&&(p?p.push(m):c&&m()),m}function hr(e,t,n){const a=this.proxy,i=Re(e)?e.includes(".")?Do(a,e):()=>a[e]:e.bind(a,a);let l;Z(t)?l=t:(l=t.handler,n=t);const s=Jn(this),r=Mo(i,l.bind(a),n);return s(),r}function Do(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const br=Symbol("_vte"),Ro=e=>e.__isTeleport,xt=Symbol("_leaveCb"),$n=Symbol("_enterCb");function Ar(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),No(()=>{e.isUnmounting=!0}),e}const Ze=[Function,Array],So={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},Co=e=>{const t=e.subTree;return t.component?Co(t.component):t},kr={name:"BaseTransition",props:So,setup(e,{slots:t}){const n=ls(),a=Ar();return()=>{const i=t.default&&_o(t.default(),!0);if(!i||!i.length)return;const l=Eo(i),s=ce(e),{mode:r}=s;if(a.isLeaving)return Ka(l);const c=Wi(l);if(!c)return Ka(l);let p=Za(c,s,a,n,d=>p=d);c.type!==Be&&In(c,p);let u=n.subTree&&Wi(n.subTree);if(u&&u.type!==Be&&!$t(u,c)&&Co(n).type!==Be){let d=Za(u,s,a,n);if(In(u,d),r==="out-in"&&c.type!==Be)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ka(l);r==="in-out"&&c.type!==Be?d.delayLeave=(m,b,v)=>{const h=To(a,u);h[String(u.key)]=u,m[xt]=()=>{b(),m[xt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{v(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function Eo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Be){t=n;break}}return t}const vr=kr;function To(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Za(e,t,n,a,i){const{appear:l,mode:s,persisted:r=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:b,onAfterLeave:v,onLeaveCancelled:h,onBeforeAppear:A,onAppear:y,onAfterAppear:S,onAppearCancelled:E}=t,R=String(e.key),V=To(n,e),ee=(Q,Y)=>{Q&&st(Q,a,9,Y)},re=(Q,Y)=>{const se=Y[1];ee(Q,Y),q(Q)?Q.every(G=>G.length<=1)&&se():Q.length<=1&&se()},Pe={mode:s,persisted:r,beforeEnter(Q){let Y=c;if(!n.isMounted)if(l)Y=A||c;else return;Q[xt]&&Q[xt](!0);const se=V[R];se&&$t(e,se)&&se.el[xt]&&se.el[xt](),ee(Y,[Q])},enter(Q){let Y=p,se=u,G=d;if(!n.isMounted)if(l)Y=y||p,se=S||u,G=E||d;else return;let ne=!1;const Me=Q[$n]=Le=>{ne||(ne=!0,Le?ee(G,[Q]):ee(se,[Q]),Pe.delayedLeave&&Pe.delayedLeave(),Q[$n]=void 0)};Y?re(Y,[Q,Me]):Me()},leave(Q,Y){const se=String(e.key);if(Q[$n]&&Q[$n](!0),n.isUnmounting)return Y();ee(m,[Q]);let G=!1;const ne=Q[xt]=Me=>{G||(G=!0,Y(),Me?ee(h,[Q]):ee(v,[Q]),Q[xt]=void 0,V[se]===e&&delete V[se])};V[se]=e,b?re(b,[Q,ne]):ne()},clone(Q){const Y=Za(Q,t,n,a,i);return i&&i(Y),Y}};return Pe}function Ka(e){if(va(e))return e=Ft(e),e.children=null,e}function Wi(e){if(!va(e))return Ro(e.type)&&e.children?Eo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Z(n.default))return n.default()}}function In(e,t){e.shapeFlag&6&&e.component?(e.transition=t,In(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _o(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let s=e[l];const r=n==null?s.key:String(n)+String(s.key!=null?s.key:l);s.type===$?(s.patchFlag&128&&i++,a=a.concat(_o(s.children,t,r))):(t||s.type!==Be)&&a.push(r!=null?Ft(s,{key:r}):s)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Io(e,t){return Z(e)?Ce({name:e.name},t,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const oa=new WeakMap;function Dn(e,t,n,a,i=!1){if(q(e)){e.forEach((v,h)=>Dn(v,t&&(q(t)?t[h]:t),n,a,i));return}if(cn(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Dn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?Pa(a.component):a.el,s=i?null:l,{i:r,r:c}=e,p=t&&t.r,u=r.refs===be?r.refs={}:r.refs,d=r.setupState,m=ce(d),b=d===be?ql:v=>de(m,v);if(p!=null&&p!==c){if(Qi(t),Re(p))u[p]=null,b(p)&&(d[p]=null);else if(Oe(p)){p.value=null;const v=t;v.k&&(u[v.k]=null)}}if(Z(c))Vn(c,r,12,[s,u]);else{const v=Re(c),h=Oe(c);if(v||h){const A=()=>{if(e.f){const y=v?b(c)?d[c]:u[c]:c.value;if(i)q(y)&&pi(y,l);else if(q(y))y.includes(l)||y.push(l);else if(v)u[c]=[l],b(c)&&(d[c]=u[c]);else{const S=[l];c.value=S,e.k&&(u[e.k]=S)}}else v?(u[c]=s,b(c)&&(d[c]=s)):h&&(c.value=s,e.k&&(u[e.k]=s))};if(s){const y=()=>{A(),oa.delete(e)};y.id=-1,oa.set(e,y),qe(y,n)}else Qi(e),A()}}}function Qi(e){const t=oa.get(e);t&&(t.flags|=8,oa.delete(e))}ha().requestIdleCallback;ha().cancelIdleCallback;const cn=e=>!!e.type.__asyncLoader,va=e=>e.type.__isKeepAlive;function xr(e,t){Bo(e,"a",t)}function yr(e,t){Bo(e,"da",t)}function Bo(e,t,n=Ne){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(xa(t,a,n),n){let i=n.parent;for(;i&&i.parent;)va(i.parent.vnode)&&wr(a,t,n,i),i=i.parent}}function wr(e,t,n,a){const i=xa(t,e,a,!0);wi(()=>{pi(a[t],i)},n)}function xa(e,t,n=Ne,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...s)=>{Rt();const r=Jn(n),c=st(t,n,e,s);return r(),St(),c});return a?i.unshift(l):i.push(l),l}}const Et=e=>(t,n=Ne)=>{(!Nn||e==="sp")&&xa(e,(...a)=>t(...a),n)},Pr=Et("bm"),tn=Et("m"),Mr=Et("bu"),Dr=Et("u"),No=Et("bum"),wi=Et("um"),Rr=Et("sp"),Sr=Et("rtg"),Cr=Et("rtc");function Er(e,t=Ne){xa("ec",e,t)}const Oo="components";function sa(e,t){return Go(Oo,e,!0,t)||e}const Lo=Symbol.for("v-ndc");function Tr(e){return Re(e)?Go(Oo,e,!1)||e:e||Lo}function Go(e,t,n=!0,a=!1){const i=Ee||Ne;if(i){const l=i.type;{const r=hc(l,!1);if(r&&(r===t||r===tt(t)||r===ma(tt(t))))return l}const s=qi(i[e]||l[e],t)||qi(i.appContext[e],t);return!s&&a?l:s}}function qi(e,t){return e&&(e[t]||e[tt(t)]||e[ma(tt(t))])}function me(e,t,n,a){let i;const l=n,s=q(e);if(s||Re(e)){const r=s&&Yt(e);let c=!1,p=!1;r&&(c=!et(e),p=Ct(e),e=ba(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(c?p?pn(ot(e[u])):ot(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l)}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,p=r.length;c<p;c++){const u=r[c];i[c]=t(e[u],u,c,l)}}else i=[];return i}function _r(e,t,n={},a,i){if(Ee.ce||Ee.parent&&cn(Ee.parent)&&Ee.parent.ce){const p=Object.keys(n).length>0;return T(),ua($,null,[xe("slot",n,a)],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),T();const s=l&&Uo(l(n)),r=n.key||s&&s.key,c=ua($,{key:(r&&!lt(r)?r:`_${t}`)+(!s&&a?"_fb":"")},s||[],s&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function Uo(e){return e.some(t=>Bn(t)?!(t.type===Be||t.type===$&&!Uo(t.children)):!0)?e:null}const Ya=e=>e?os(e)?Pa(e):Ya(e.parent):null,Rn=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ya(e.parent),$root:e=>Ya(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>e.f||(e.f=()=>{yi(e.update)}),$nextTick:e=>e.n||(e.n=ka.bind(e.proxy)),$watch:e=>hr.bind(e)}),Ba=(e,t)=>e!==be&&!e.__isScriptSetup&&de(e,t),Ir={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:s,type:r,appContext:c}=e;if(t[0]!=="$"){const m=s[t];if(m!==void 0)switch(m){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Ba(a,t))return s[t]=1,a[t];if(i!==be&&de(i,t))return s[t]=2,i[t];if(de(l,t))return s[t]=3,l[t];if(n!==be&&de(n,t))return s[t]=4,n[t];ei&&(s[t]=0)}}const p=Rn[t];let u,d;if(p)return t==="$attrs"&&Ie(e.attrs,"get",""),p(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==be&&de(n,t))return s[t]=4,n[t];if(d=c.config.globalProperties,de(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Ba(i,t)?(i[t]=n,!0):a!==be&&de(a,t)?(a[t]=n,!0):de(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:s}},r){let c;return!!(n[r]||e!==be&&r[0]!=="$"&&de(e,r)||Ba(t,r)||de(l,r)||de(a,r)||de(Rn,r)||de(i.config.globalProperties,r)||(c=s.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:de(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function zi(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ei=!0;function Kr(e){const t=jo(e),n=e.proxy,a=e.ctx;ei=!1,t.beforeCreate&&$i(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:s,watch:r,provide:c,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:b,updated:v,activated:h,deactivated:A,beforeDestroy:y,beforeUnmount:S,destroyed:E,unmounted:R,render:V,renderTracked:ee,renderTriggered:re,errorCaptured:Pe,serverPrefetch:Q,expose:Y,inheritAttrs:se,components:G,directives:ne,filters:Me}=t;if(p&&Br(p,a,null),s)for(const K in s){const x=s[K];Z(x)&&(a[K]=x.bind(n))}if(i){const K=i.call(n,n);he(K)&&(e.data=bn(K))}if(ei=!0,l)for(const K in l){const x=l[K],ae=Z(x)?x.bind(n,n):Z(x.get)?x.get.bind(n,n):gt,ge=!Z(x)&&Z(x.set)?x.set.bind(n):gt,F=te({get:ae,set:ge});Object.defineProperty(a,K,{enumerable:!0,configurable:!0,get:()=>F.value,set:we=>F.value=we})}if(r)for(const K in r)Ho(r[K],a,n,K);if(c){const K=Z(c)?c.call(n):c;Reflect.ownKeys(K).forEach(x=>{Yn(x,K[x])})}u&&$i(u,e,"c");function ye(K,x){q(x)?x.forEach(ae=>K(ae.bind(n))):x&&K(x.bind(n))}if(ye(Pr,d),ye(tn,m),ye(Mr,b),ye(Dr,v),ye(xr,h),ye(yr,A),ye(Er,Pe),ye(Cr,ee),ye(Sr,re),ye(No,S),ye(wi,R),ye(Rr,Q),q(Y))if(Y.length){const K=e.exposed||(e.exposed={});Y.forEach(x=>{Object.defineProperty(K,x,{get:()=>n[x],set:ae=>n[x]=ae,enumerable:!0})})}else e.exposed||(e.exposed={});V&&e.render===gt&&(e.render=V),se!=null&&(e.inheritAttrs=se),G&&(e.components=G),ne&&(e.directives=ne),Q&&Ko(e)}function Br(e,t,n=gt){q(e)&&(e=ti(e));for(const a in e){const i=e[a];let l;he(i)?"default"in i?l=at(i.from||a,i.default,!0):l=at(i.from||a):l=at(i),Oe(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:s=>l.value=s}):t[a]=l}}function $i(e,t,n){st(q(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ho(e,t,n,a){let i=a.includes(".")?Do(n,a):()=>n[a];if(Re(e)){const l=t[e];Z(l)&&Mt(i,l)}else if(Z(e))Mt(i,e.bind(n));else if(he(e))if(q(e))e.forEach(l=>Ho(l,t,n,a));else{const l=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(l)&&Mt(i,l,e)}}function jo(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:s}}=e.appContext,r=l.get(t);let c;return r?c=r:!i.length&&!n&&!a?c=t:(c={},i.length&&i.forEach(p=>ra(c,p,s,!0)),ra(c,t,s)),he(t)&&l.set(t,c),c}function ra(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&ra(e,l,n,!0),i&&i.forEach(s=>ra(e,s,n,!0));for(const s in t)if(!(a&&s==="expose")){const r=Nr[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Nr={data:Xi,props:Zi,emits:Zi,methods:yn,computed:yn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:yn,directives:yn,watch:Lr,provide:Xi,inject:Or};function Xi(e,t){return t?e?function(){return Ce(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function Or(e,t){return yn(ti(e),ti(t))}function ti(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function yn(e,t){return e?Ce(Object.create(null),e,t):t}function Zi(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:Ce(Object.create(null),zi(e),zi(t??{})):t}function Lr(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const a in t)n[a]=Ge(e[a],t[a]);return n}function Fo(){return{app:null,config:{isNativeTag:ql,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gr=0;function Ur(e,t){return function(a,i=null){Z(a)||(a=Ce({},a)),i!=null&&!he(i)&&(i=null);const l=Fo(),s=new WeakSet,r=[];let c=!1;const p=l.app={_uid:Gr++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:Ac,get config(){return l.config},set config(u){},use(u,...d){return s.has(u)||(u&&Z(u.install)?(s.add(u),u.install(p,...d)):Z(u)&&(s.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,m){if(!c){const b=p._ceVNode||xe(a,i);return b.appContext=l,m===!0?m="svg":m===!1&&(m=void 0),e(b,u,m),c=!0,p._container=u,u.__vue_app__=p,Pa(b.component)}},onUnmount(u){r.push(u)},unmount(){c&&(st(r,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p},runWithContext(u){const d=un;un=p;try{return u()}finally{un=d}}};return p}}let un=null;const Hr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${en(t)}Modifiers`];function jr(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||be;let i=n;const l=t.startsWith("update:"),s=l&&Hr(a,t.slice(7));s&&(s.trim&&(i=n.map(u=>Re(u)?u.trim():u)),s.number&&(i=n.map(ga)));let r,c=a[r=Ca(t)]||a[r=Ca(tt(t))];!c&&l&&(c=a[r=Ca(en(t))]),c&&st(c,e,6,i);const p=a[r+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,st(p,e,6,i)}}const Fr=new WeakMap;function Vo(e,t,n=!1){const a=n?Fr:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let s={},r=!1;if(!Z(e)){const c=p=>{const u=Vo(p,t,!0);u&&(r=!0,Ce(s,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!r?(he(e)&&a.set(e,null),null):(q(l)?l.forEach(c=>s[c]=null):Ce(s,l),he(e)&&a.set(e,s),s)}function ya(e,t){return!e||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),de(e,t[0].toLowerCase()+t.slice(1))||de(e,en(t))||de(e,t))}function Yi(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:s,attrs:r,emit:c,render:p,renderCache:u,props:d,data:m,setupState:b,ctx:v,inheritAttrs:h}=e,A=la(e);let y,S;try{if(n.shapeFlag&4){const R=i||a,V=R;y=mt(p.call(V,R,u,d,b,m,v)),S=r}else{const R=t;y=mt(R.length>1?R(d,{attrs:r,slots:s,emit:c}):R(d,null)),S=t.props?r:Vr(r)}}catch(R){Sn.length=0,Aa(R,e,1),y=xe(Be)}let E=y;if(S&&h!==!1){const R=Object.keys(S),{shapeFlag:V}=E;R.length&&V&7&&(l&&R.some(di)&&(S=Jr(S,l)),E=Ft(E,S,!1,!0))}return n.dirs&&(E=Ft(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&In(E,n.transition),y=E,la(A),y}const Vr=e=>{let t;for(const n in e)(n==="class"||n==="style"||pa(n))&&((t||(t={}))[n]=e[n]);return t},Jr=(e,t)=>{const n={};for(const a in e)(!di(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Wr(e,t,n){const{props:a,children:i,component:l}=e,{props:s,children:r,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?el(a,s,p):!!s;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(s[m]!==a[m]&&!ya(p,m))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:a===s?!1:a?s?el(a,s,p):!0:!!s;return!1}function el(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!ya(n,l))return!0}return!1}function Qr({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const Jo={},Wo=()=>Object.create(Jo),Qo=e=>Object.getPrototypeOf(e)===Jo;function qr(e,t,n,a=!1){const i={},l=Wo();e.propsDefaults=Object.create(null),qo(e,t,i,l);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=a?i:bo(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function zr(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:s}}=e,r=ce(i),[c]=e.propsOptions;let p=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(ya(e.emitsOptions,m))continue;const b=t[m];if(c)if(de(l,m))b!==l[m]&&(l[m]=b,p=!0);else{const v=tt(m);i[v]=ni(c,r,v,b,e,!1)}else b!==l[m]&&(l[m]=b,p=!0)}}}else{qo(e,t,i,l)&&(p=!0);let u;for(const d in r)(!t||!de(t,d)&&((u=en(d))===d||!de(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ni(c,r,d,void 0,e,!0)):delete i[d]);if(l!==r)for(const d in l)(!t||!de(t,d))&&(delete l[d],p=!0)}p&&yt(e.attrs,"set","")}function qo(e,t,n,a){const[i,l]=e.propsOptions;let s=!1,r;if(t)for(let c in t){if(wn(c))continue;const p=t[c];let u;i&&de(i,u=tt(c))?!l||!l.includes(u)?n[u]=p:(r||(r={}))[u]=p:ya(e.emitsOptions,c)||(!(c in a)||p!==a[c])&&(a[c]=p,s=!0)}if(l){const c=ce(n),p=r||be;for(let u=0;u<l.length;u++){const d=l[u];n[d]=ni(i,c,d,p[d],e,!de(p,d))}}return s}function ni(e,t,n,a,i,l){const s=e[n];if(s!=null){const r=de(s,"default");if(r&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Z(c)){const{propsDefaults:p}=i;if(n in p)a=p[n];else{const u=Jn(i);a=p[n]=c.call(null,t),u()}}else a=c;i.ce&&i.ce._setProp(n,a)}s[0]&&(l&&!r?a=!1:s[1]&&(a===""||a===en(n))&&(a=!0))}return a}const $r=new WeakMap;function zo(e,t,n=!1){const a=n?$r:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,s={},r=[];let c=!1;if(!Z(e)){const u=d=>{c=!0;const[m,b]=zo(d,t,!0);Ce(s,m),b&&r.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!c)return he(e)&&a.set(e,on),on;if(q(l))for(let u=0;u<l.length;u++){const d=tt(l[u]);tl(d)&&(s[d]=be)}else if(l)for(const u in l){const d=tt(u);if(tl(d)){const m=l[u],b=s[d]=q(m)||Z(m)?{type:m}:Ce({},m),v=b.type;let h=!1,A=!0;if(q(v))for(let y=0;y<v.length;++y){const S=v[y],E=Z(S)&&S.name;if(E==="Boolean"){h=!0;break}else E==="String"&&(A=!1)}else h=Z(v)&&v.name==="Boolean";b[0]=h,b[1]=A,(h||de(b,"default"))&&r.push(d)}}const p=[s,r];return he(e)&&a.set(e,p),p}function tl(e){return e[0]!=="$"&&!wn(e)}const Pi=e=>e==="_"||e==="_ctx"||e==="$stable",Mi=e=>q(e)?e.map(mt):[mt(e)],Xr=(e,t,n)=>{if(t._n)return t;const a=Ye((...i)=>Mi(t(...i)),n);return a._c=!1,a},$o=(e,t,n)=>{const a=e._ctx;for(const i in e){if(Pi(i))continue;const l=e[i];if(Z(l))t[i]=Xr(i,l,a);else if(l!=null){const s=Mi(l);t[i]=()=>s}}},Xo=(e,t)=>{const n=Mi(t);e.slots.default=()=>n},Zo=(e,t,n)=>{for(const a in t)(n||!Pi(a))&&(e[a]=t[a])},Zr=(e,t,n)=>{const a=e.slots=Wo();if(e.vnode.shapeFlag&32){const i=t._;i?(Zo(a,t,n),n&&Zl(a,"_",i,!0)):$o(t,a)}else t&&Xo(e,t)},Yr=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,s=be;if(a.shapeFlag&32){const r=t._;r?n&&r===1?l=!1:Zo(i,t,n):(l=!t.$stable,$o(t,i)),s=t}else t&&(Xo(e,t),s={default:1});if(l)for(const r in i)!Pi(r)&&s[r]==null&&delete i[r]},qe=ic;function ec(e){return tc(e)}function tc(e,t){const n=ha();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:s,createText:r,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:b=gt,insertStaticContent:v}=e,h=(f,g,k,P=null,C=null,M=null,L=void 0,N=null,B=!!g.dynamicChildren)=>{if(f===g)return;f&&!$t(f,g)&&(P=D(f),we(f,C,M,!0),f=null),g.patchFlag===-2&&(B=!1,g.dynamicChildren=null);const{type:_,ref:z,shapeFlag:H}=g;switch(_){case wa:A(f,g,k,P);break;case Be:y(f,g,k,P);break;case ea:f==null&&S(g,k,P,L);break;case $:G(f,g,k,P,C,M,L,N,B);break;default:H&1?V(f,g,k,P,C,M,L,N,B):H&6?ne(f,g,k,P,C,M,L,N,B):(H&64||H&128)&&_.process(f,g,k,P,C,M,L,N,B,J)}z!=null&&C?Dn(z,f&&f.ref,M,g||f,!g):z==null&&f&&f.ref!=null&&Dn(f.ref,null,M,f,!0)},A=(f,g,k,P)=>{if(f==null)a(g.el=r(g.children),k,P);else{const C=g.el=f.el;g.children!==f.children&&p(C,g.children)}},y=(f,g,k,P)=>{f==null?a(g.el=c(g.children||""),k,P):g.el=f.el},S=(f,g,k,P)=>{[f.el,f.anchor]=v(f.children,g,k,P,f.el,f.anchor)},E=({el:f,anchor:g},k,P)=>{let C;for(;f&&f!==g;)C=m(f),a(f,k,P),f=C;a(g,k,P)},R=({el:f,anchor:g})=>{let k;for(;f&&f!==g;)k=m(f),i(f),f=k;i(g)},V=(f,g,k,P,C,M,L,N,B)=>{if(g.type==="svg"?L="svg":g.type==="math"&&(L="mathml"),f==null)ee(g,k,P,C,M,L,N,B);else{const _=f.el&&f.el._isVueCE?f.el:null;try{_&&_._beginPatch(),Q(f,g,C,M,L,N,B)}finally{_&&_._endPatch()}}},ee=(f,g,k,P,C,M,L,N)=>{let B,_;const{props:z,shapeFlag:H,transition:W,dirs:X}=f;if(B=f.el=s(f.type,M,z&&z.is,z),H&8?u(B,f.children):H&16&&Pe(f.children,B,null,P,C,Na(f,M),L,N),X&&Jt(f,null,P,"created"),re(B,f,f.scopeId,L,P),z){for(const Ae in z)Ae!=="value"&&!wn(Ae)&&l(B,Ae,null,z[Ae],M,P);"value"in z&&l(B,"value",null,z.value,M),(_=z.onVnodeBeforeMount)&&pt(_,P,f)}X&&Jt(f,null,P,"beforeMount");const le=nc(C,W);le&&W.beforeEnter(B),a(B,g,k),((_=z&&z.onVnodeMounted)||le||X)&&qe(()=>{_&&pt(_,P,f),le&&W.enter(B),X&&Jt(f,null,P,"mounted")},C)},re=(f,g,k,P,C)=>{if(k&&b(f,k),P)for(let M=0;M<P.length;M++)b(f,P[M]);if(C){let M=C.subTree;if(g===M||ns(M.type)&&(M.ssContent===g||M.ssFallback===g)){const L=C.vnode;re(f,L,L.scopeId,L.slotScopeIds,C.parent)}}},Pe=(f,g,k,P,C,M,L,N,B=0)=>{for(let _=B;_<f.length;_++){const z=f[_]=N?Ot(f[_]):mt(f[_]);h(null,z,g,k,P,C,M,L,N)}},Q=(f,g,k,P,C,M,L)=>{const N=g.el=f.el;let{patchFlag:B,dynamicChildren:_,dirs:z}=g;B|=f.patchFlag&16;const H=f.props||be,W=g.props||be;let X;if(k&&Wt(k,!1),(X=W.onVnodeBeforeUpdate)&&pt(X,k,g,f),z&&Jt(g,f,k,"beforeUpdate"),k&&Wt(k,!0),(H.innerHTML&&W.innerHTML==null||H.textContent&&W.textContent==null)&&u(N,""),_?Y(f.dynamicChildren,_,N,k,P,Na(g,C),M):L||x(f,g,N,null,k,P,Na(g,C),M,!1),B>0){if(B&16)se(N,H,W,k,C);else if(B&2&&H.class!==W.class&&l(N,"class",null,W.class,C),B&4&&l(N,"style",H.style,W.style,C),B&8){const le=g.dynamicProps;for(let Ae=0;Ae<le.length;Ae++){const fe=le[Ae],je=H[fe],Fe=W[fe];(Fe!==je||fe==="value")&&l(N,fe,je,Fe,C,k)}}B&1&&f.children!==g.children&&u(N,g.children)}else!L&&_==null&&se(N,H,W,k,C);((X=W.onVnodeUpdated)||z)&&qe(()=>{X&&pt(X,k,g,f),z&&Jt(g,f,k,"updated")},P)},Y=(f,g,k,P,C,M,L)=>{for(let N=0;N<g.length;N++){const B=f[N],_=g[N],z=B.el&&(B.type===$||!$t(B,_)||B.shapeFlag&198)?d(B.el):k;h(B,_,z,null,P,C,M,L,!0)}},se=(f,g,k,P,C)=>{if(g!==k){if(g!==be)for(const M in g)!wn(M)&&!(M in k)&&l(f,M,g[M],null,C,P);for(const M in k){if(wn(M))continue;const L=k[M],N=g[M];L!==N&&M!=="value"&&l(f,M,N,L,C,P)}"value"in k&&l(f,"value",g.value,k.value,C)}},G=(f,g,k,P,C,M,L,N,B)=>{const _=g.el=f?f.el:r(""),z=g.anchor=f?f.anchor:r("");let{patchFlag:H,dynamicChildren:W,slotScopeIds:X}=g;X&&(N=N?N.concat(X):X),f==null?(a(_,k,P),a(z,k,P),Pe(g.children||[],k,z,C,M,L,N,B)):H>0&&H&64&&W&&f.dynamicChildren&&f.dynamicChildren.length===W.length?(Y(f.dynamicChildren,W,k,C,M,L,N),(g.key!=null||C&&g===C.subTree)&&Yo(f,g,!0)):x(f,g,k,z,C,M,L,N,B)},ne=(f,g,k,P,C,M,L,N,B)=>{g.slotScopeIds=N,f==null?g.shapeFlag&512?C.ctx.activate(g,k,P,L,B):Me(g,k,P,C,M,L,B):Le(f,g,B)},Me=(f,g,k,P,C,M,L)=>{const N=f.component=dc(f,P,C);if(va(f)&&(N.ctx.renderer=J),pc(N,!1,L),N.asyncDep){if(C&&C.registerDep(N,ye,L),!f.el){const B=N.subTree=xe(Be);y(null,B,g,k),f.placeholder=B.el}}else ye(N,f,g,k,C,M,L)},Le=(f,g,k)=>{const P=g.component=f.component;if(Wr(f,g,k))if(P.asyncDep&&!P.asyncResolved){K(P,g,k);return}else P.next=g,P.update();else g.el=f.el,P.vnode=g},ye=(f,g,k,P,C,M,L)=>{const N=()=>{if(f.isMounted){let{next:H,bu:W,u:X,parent:le,vnode:Ae}=f;{const ut=es(f);if(ut){H&&(H.el=Ae.el,K(f,H,L)),ut.asyncDep.then(()=>{f.isUnmounted||N()});return}}let fe=H,je;Wt(f,!1),H?(H.el=Ae.el,K(f,H,L)):H=Ae,W&&Zn(W),(je=H.props&&H.props.onVnodeBeforeUpdate)&&pt(je,le,H,Ae),Wt(f,!0);const Fe=Yi(f),ct=f.subTree;f.subTree=Fe,h(ct,Fe,d(ct.el),D(ct),f,C,M),H.el=Fe.el,fe===null&&Qr(f,Fe.el),X&&qe(X,C),(je=H.props&&H.props.onVnodeUpdated)&&qe(()=>pt(je,le,H,Ae),C)}else{let H;const{el:W,props:X}=g,{bm:le,m:Ae,parent:fe,root:je,type:Fe}=f,ct=cn(g);Wt(f,!1),le&&Zn(le),!ct&&(H=X&&X.onVnodeBeforeMount)&&pt(H,fe,g),Wt(f,!0);{je.ce&&je.ce._def.shadowRoot!==!1&&je.ce._injectChildStyle(Fe);const ut=f.subTree=Yi(f);h(null,ut,k,P,f,C,M),g.el=ut.el}if(Ae&&qe(Ae,C),!ct&&(H=X&&X.onVnodeMounted)){const ut=g;qe(()=>pt(H,fe,ut),C)}(g.shapeFlag&256||fe&&cn(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&qe(f.a,C),f.isMounted=!0,g=k=P=null}};f.scope.on();const B=f.effect=new no(N);f.scope.off();const _=f.update=B.run.bind(B),z=f.job=B.runIfDirty.bind(B);z.i=f,z.id=f.uid,B.scheduler=()=>yi(z),Wt(f,!0),_()},K=(f,g,k)=>{g.component=f;const P=f.vnode.props;f.vnode=g,f.next=null,zr(f,g.props,P,k),Yr(f,g.children,k),Rt(),Ji(f),St()},x=(f,g,k,P,C,M,L,N,B=!1)=>{const _=f&&f.children,z=f?f.shapeFlag:0,H=g.children,{patchFlag:W,shapeFlag:X}=g;if(W>0){if(W&128){ge(_,H,k,P,C,M,L,N,B);return}else if(W&256){ae(_,H,k,P,C,M,L,N,B);return}}X&8?(z&16&&Xe(_,C,M),H!==_&&u(k,H)):z&16?X&16?ge(_,H,k,P,C,M,L,N,B):Xe(_,C,M,!0):(z&8&&u(k,""),X&16&&Pe(H,k,P,C,M,L,N,B))},ae=(f,g,k,P,C,M,L,N,B)=>{f=f||on,g=g||on;const _=f.length,z=g.length,H=Math.min(_,z);let W;for(W=0;W<H;W++){const X=g[W]=B?Ot(g[W]):mt(g[W]);h(f[W],X,k,null,C,M,L,N,B)}_>z?Xe(f,C,M,!0,!1,H):Pe(g,k,P,C,M,L,N,B,H)},ge=(f,g,k,P,C,M,L,N,B)=>{let _=0;const z=g.length;let H=f.length-1,W=z-1;for(;_<=H&&_<=W;){const X=f[_],le=g[_]=B?Ot(g[_]):mt(g[_]);if($t(X,le))h(X,le,k,null,C,M,L,N,B);else break;_++}for(;_<=H&&_<=W;){const X=f[H],le=g[W]=B?Ot(g[W]):mt(g[W]);if($t(X,le))h(X,le,k,null,C,M,L,N,B);else break;H--,W--}if(_>H){if(_<=W){const X=W+1,le=X<z?g[X].el:P;for(;_<=W;)h(null,g[_]=B?Ot(g[_]):mt(g[_]),k,le,C,M,L,N,B),_++}}else if(_>W)for(;_<=H;)we(f[_],C,M,!0),_++;else{const X=_,le=_,Ae=new Map;for(_=le;_<=W;_++){const Qe=g[_]=B?Ot(g[_]):mt(g[_]);Qe.key!=null&&Ae.set(Qe.key,_)}let fe,je=0;const Fe=W-le+1;let ct=!1,ut=0;const An=new Array(Fe);for(_=0;_<Fe;_++)An[_]=0;for(_=X;_<=H;_++){const Qe=f[_];if(je>=Fe){we(Qe,C,M,!0);continue}let dt;if(Qe.key!=null)dt=Ae.get(Qe.key);else for(fe=le;fe<=W;fe++)if(An[fe-le]===0&&$t(Qe,g[fe])){dt=fe;break}dt===void 0?we(Qe,C,M,!0):(An[dt-le]=_+1,dt>=ut?ut=dt:ct=!0,h(Qe,g[dt],k,null,C,M,L,N,B),je++)}const Li=ct?ac(An):on;for(fe=Li.length-1,_=Fe-1;_>=0;_--){const Qe=le+_,dt=g[Qe],Gi=g[Qe+1],Ui=Qe+1<z?Gi.el||ts(Gi):P;An[_]===0?h(null,dt,k,Ui,C,M,L,N,B):ct&&(fe<0||_!==Li[fe]?F(dt,k,Ui,2):fe--)}}},F=(f,g,k,P,C=null)=>{const{el:M,type:L,transition:N,children:B,shapeFlag:_}=f;if(_&6){F(f.component.subTree,g,k,P);return}if(_&128){f.suspense.move(g,k,P);return}if(_&64){L.move(f,g,k,J);return}if(L===$){a(M,g,k);for(let H=0;H<B.length;H++)F(B[H],g,k,P);a(f.anchor,g,k);return}if(L===ea){E(f,g,k);return}if(P!==2&&_&1&&N)if(P===0)N.beforeEnter(M),a(M,g,k),qe(()=>N.enter(M),C);else{const{leave:H,delayLeave:W,afterLeave:X}=N,le=()=>{f.ctx.isUnmounted?i(M):a(M,g,k)},Ae=()=>{M._isLeaving&&M[xt](!0),H(M,()=>{le(),X&&X()})};W?W(M,le,Ae):Ae()}else a(M,g,k)},we=(f,g,k,P=!1,C=!1)=>{const{type:M,props:L,ref:N,children:B,dynamicChildren:_,shapeFlag:z,patchFlag:H,dirs:W,cacheIndex:X}=f;if(H===-2&&(C=!1),N!=null&&(Rt(),Dn(N,null,k,f,!0),St()),X!=null&&(g.renderCache[X]=void 0),z&256){g.ctx.deactivate(f);return}const le=z&1&&W,Ae=!cn(f);let fe;if(Ae&&(fe=L&&L.onVnodeBeforeUnmount)&&pt(fe,g,f),z&6)ht(f.component,k,P);else{if(z&128){f.suspense.unmount(k,P);return}le&&Jt(f,null,g,"beforeUnmount"),z&64?f.type.remove(f,g,k,J,P):_&&!_.hasOnce&&(M!==$||H>0&&H&64)?Xe(_,g,k,!1,!0):(M===$&&H&384||!C&&z&16)&&Xe(B,g,k),P&&pe(f)}(Ae&&(fe=L&&L.onVnodeUnmounted)||le)&&qe(()=>{fe&&pt(fe,g,f),le&&Jt(f,null,g,"unmounted")},k)},pe=f=>{const{type:g,el:k,anchor:P,transition:C}=f;if(g===$){Te(k,P);return}if(g===ea){R(f);return}const M=()=>{i(k),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:L,delayLeave:N}=C,B=()=>L(k,M);N?N(f.el,M,B):B()}else M()},Te=(f,g)=>{let k;for(;f!==g;)k=m(f),i(f),f=k;i(g)},ht=(f,g,k)=>{const{bum:P,scope:C,job:M,subTree:L,um:N,m:B,a:_}=f;nl(B),nl(_),P&&Zn(P),C.stop(),M&&(M.flags|=8,we(L,f,g,k)),N&&qe(N,g),qe(()=>{f.isUnmounted=!0},g)},Xe=(f,g,k,P=!1,C=!1,M=0)=>{for(let L=M;L<f.length;L++)we(f[L],g,k,P,C)},D=f=>{if(f.shapeFlag&6)return D(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=m(f.anchor||f.el),k=g&&g[br];return k?m(k):g};let j=!1;const U=(f,g,k)=>{let P;f==null?g._vnode&&(we(g._vnode,null,null,!0),P=g._vnode.component):h(g._vnode||null,f,g,null,null,null,k),g._vnode=f,j||(j=!0,Ji(P),yo(),j=!1)},J={p:h,um:we,m:F,r:pe,mt:Me,mc:Pe,pc:x,pbc:Y,n:D,o:e};return{render:U,hydrate:void 0,createApp:Ur(U)}}function Na({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function nc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Yo(e,t,n=!1){const a=e.children,i=t.children;if(q(a)&&q(i))for(let l=0;l<a.length;l++){const s=a[l];let r=i[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[l]=Ot(i[l]),r.el=s.el),!n&&r.patchFlag!==-2&&Yo(s,r)),r.type===wa&&(r.patchFlag!==-1?r.el=s.el:r.__elIndex=l+(e.type===$?1:0)),r.type===Be&&!r.el&&(r.el=s.el)}}function ac(e){const t=e.slice(),n=[0];let a,i,l,s,r;const c=e.length;for(a=0;a<c;a++){const p=e[a];if(p!==0){if(i=n[n.length-1],e[i]<p){t[a]=i,n.push(a);continue}for(l=0,s=n.length-1;l<s;)r=l+s>>1,e[n[r]]<p?l=r+1:s=r;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,s=n[l-1];l-- >0;)n[l]=s,s=t[s];return n}function es(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:es(t)}function nl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ts(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ts(t.subTree):null}const ns=e=>e.__isSuspense;function ic(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):fr(e)}const $=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),Be=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),Sn=[];let $e=null;function T(e=!1){Sn.push($e=e?null:[])}function lc(){Sn.pop(),$e=Sn[Sn.length-1]||null}let Kn=1;function ca(e,t=!1){Kn+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function as(e){return e.dynamicChildren=Kn>0?$e||on:null,lc(),Kn>0&&$e&&$e.push(e),e}function I(e,t,n,a,i,l){return as(o(e,t,n,a,i,l,!0))}function ua(e,t,n,a,i){return as(xe(e,t,n,a,i,!0))}function Bn(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const is=({key:e})=>e??null,ta=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Re(e)||Oe(e)||Z(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function o(e,t=null,n=null,a=0,i=null,l=e===$?0:1,s=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&is(t),ref:t&&ta(t),scopeId:Po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ee};return r?(Di(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),Kn>0&&!s&&$e&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&$e.push(c),c}const xe=oc;function oc(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Lo)&&(e=Be),Bn(e)){const r=Ft(e,t,!0);return n&&Di(r,n),Kn>0&&!l&&$e&&(r.shapeFlag&6?$e[$e.indexOf(e)]=r:$e.push(r)),r.patchFlag=-2,r}if(bc(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:r,style:c}=t;r&&!Re(r)&&(t.class=w(r)),he(c)&&(xi(c)&&!q(c)&&(c=Ce({},c)),t.style=Pt(c))}const s=Re(e)?1:ns(e)?128:Ro(e)?64:he(e)?4:Z(e)?2:0;return o(e,t,n,a,i,s,l,!0)}function sc(e){return e?xi(e)||Qo(e)?Ce({},e):e:null}function Ft(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:s,children:r,transition:c}=e,p=t?rc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&is(p),ref:t&&t.ref?n&&l?q(l)?l.concat(ta(t)):[l,ta(t)]:ta(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&In(u,c.clone(u)),u}function Je(e=" ",t=0){return xe(wa,null,e,t)}function dn(e,t){const n=xe(ea,null,e);return n.staticCount=t,n}function Ke(e="",t=!1){return t?(T(),ua(Be,null,e)):xe(Be,null,e)}function mt(e){return e==null||typeof e=="boolean"?xe(Be):q(e)?xe($,null,e.slice()):Bn(e)?Ot(e):xe(wa,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function Di(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),Di(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Qo(t)?t._ctx=Ee:i===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),a&64?(n=16,t=[Je(t)]):n=8);e.children=t,e.shapeFlag|=n}function rc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=w([t.class,a.class]));else if(i==="style")t.style=Pt([t.style,a.style]);else if(pa(i)){const l=t[i],s=a[i];s&&l!==s&&!(q(l)&&l.includes(s))&&(t[i]=l?[].concat(l,s):s)}else i!==""&&(t[i]=a[i])}return t}function pt(e,t,n,a=null){st(e,t,7,[n,a])}const cc=Fo();let uc=0;function dc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||cc,l={uid:uc++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zo(a,i),emitsOptions:Vo(a,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:a.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=jr.bind(null,l),e.ce&&e.ce(l),l}let Ne=null;const ls=()=>Ne||Ee;let da,ai;{const e=ha(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(s=>s(l)):i[0](l)}};da=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),ai=t("__VUE_SSR_SETTERS__",n=>Nn=n)}const Jn=e=>{const t=Ne;return da(e),e.scope.on(),()=>{e.scope.off(),da(t)}},al=()=>{Ne&&Ne.scope.off(),da(null)};function os(e){return e.vnode.shapeFlag&4}let Nn=!1;function pc(e,t=!1,n=!1){t&&ai(t);const{props:a,children:i}=e.vnode,l=os(e);qr(e,a,l,t),Zr(e,i,n||t);const s=l?fc(e,t):void 0;return t&&ai(!1),s}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ir);const{setup:a}=n;if(a){Rt();const i=e.setupContext=a.length>1?gc(e):null,l=Jn(e),s=Vn(a,e,0,[e.props,i]),r=zl(s);if(St(),l(),(r||e.sp)&&!cn(e)&&Ko(e),r){if(s.then(al,al),t)return s.then(c=>{il(e,c)}).catch(c=>{Aa(c,e,0)});e.asyncDep=s}else il(e,s)}else ss(e)}function il(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=ko(t)),ss(e)}function ss(e,t,n){const a=e.type;e.render||(e.render=a.render||gt);{const i=Jn(e);Rt();try{Kr(e)}finally{St(),i()}}}const mc={get(e,t){return Ie(e,"get",""),e[t]}};function gc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mc),slots:e.slots,emit:e.emit,expose:t}}function Pa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ko(ar(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rn)return Rn[n](e)},has(t,n){return n in t||n in Rn}})):e.proxy}function hc(e,t=!0){return Z(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return Z(e)&&"__vccOpts"in e}const te=(e,t)=>rr(e,t,Nn);function Ri(e,t,n){try{ca(-1);const a=arguments.length;return a===2?he(t)&&!q(t)?Bn(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Bn(n)&&(n=[n]),xe(e,t,n))}finally{ca(1)}}const Ac="3.5.26";let ii;const ll=typeof window<"u"&&window.trustedTypes;if(ll)try{ii=ll.createPolicy("vue",{createHTML:e=>e})}catch{}const rs=ii?e=>ii.createHTML(e):e=>e,kc="http://www.w3.org/2000/svg",vc="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,ol=vt&&vt.createElement("template"),xc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?vt.createElementNS(kc,e):t==="mathml"?vt.createElementNS(vc,e):n?vt.createElement(e,{is:n}):vt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const s=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{ol.innerHTML=rs(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const r=ol.content;if(a==="svg"||a==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Tt="transition",vn="animation",On=Symbol("_vtc"),cs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yc=Ce({},So,cs),wc=e=>(e.displayName="Transition",e.props=yc,e),us=wc((e,{slots:t})=>Ri(vr,Pc(e),t)),Qt=(e,t=[])=>{q(e)?e.forEach(n=>n(...t)):e&&e(...t)},sl=e=>e?q(e)?e.some(t=>t.length>1):e.length>1:!1;function Pc(e){const t={};for(const G in e)G in cs||(t[G]=e[G]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:p=s,appearToClass:u=r,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,v=Mc(i),h=v&&v[0],A=v&&v[1],{onBeforeEnter:y,onEnter:S,onEnterCancelled:E,onLeave:R,onLeaveCancelled:V,onBeforeAppear:ee=y,onAppear:re=S,onAppearCancelled:Pe=E}=t,Q=(G,ne,Me,Le)=>{G._enterCancelled=Le,qt(G,ne?u:r),qt(G,ne?p:s),Me&&Me()},Y=(G,ne)=>{G._isLeaving=!1,qt(G,d),qt(G,b),qt(G,m),ne&&ne()},se=G=>(ne,Me)=>{const Le=G?re:S,ye=()=>Q(ne,G,Me);Qt(Le,[ne,ye]),rl(()=>{qt(ne,G?c:l),At(ne,G?u:r),sl(Le)||cl(ne,a,h,ye)})};return Ce(t,{onBeforeEnter(G){Qt(y,[G]),At(G,l),At(G,s)},onBeforeAppear(G){Qt(ee,[G]),At(G,c),At(G,p)},onEnter:se(!1),onAppear:se(!0),onLeave(G,ne){G._isLeaving=!0;const Me=()=>Y(G,ne);At(G,d),G._enterCancelled?(At(G,m),pl(G)):(pl(G),At(G,m)),rl(()=>{G._isLeaving&&(qt(G,d),At(G,b),sl(R)||cl(G,a,A,Me))}),Qt(R,[G,Me])},onEnterCancelled(G){Q(G,!1,void 0,!0),Qt(E,[G])},onAppearCancelled(G){Q(G,!0,void 0,!0),Qt(Pe,[G])},onLeaveCancelled(G){Y(G),Qt(V,[G])}})}function Mc(e){if(e==null)return null;if(he(e))return[Oa(e.enter),Oa(e.leave)];{const t=Oa(e);return[t,t]}}function Oa(e){return Cs(e)}function At(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[On]||(e[On]=new Set)).add(t)}function qt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[On];n&&(n.delete(t),n.size||(e[On]=void 0))}function rl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Dc=0;function cl(e,t,n,a){const i=e._endId=++Dc,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:s,timeout:r,propCount:c}=Rc(e,t);if(!s)return a();const p=s+"end";let u=0;const d=()=>{e.removeEventListener(p,m),l()},m=b=>{b.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},r+1),e.addEventListener(p,m)}function Rc(e,t){const n=window.getComputedStyle(e),a=v=>(n[v]||"").split(", "),i=a(`${Tt}Delay`),l=a(`${Tt}Duration`),s=ul(i,l),r=a(`${vn}Delay`),c=a(`${vn}Duration`),p=ul(r,c);let u=null,d=0,m=0;t===Tt?s>0&&(u=Tt,d=s,m=l.length):t===vn?p>0&&(u=vn,d=p,m=c.length):(d=Math.max(s,p),u=d>0?s>p?Tt:vn:null,m=u?u===Tt?l.length:c.length:0);const b=u===Tt&&/\b(?:transform|all)(?:,|$)/.test(a(`${Tt}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:b}}function ul(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>dl(n)+dl(e[a])))}function dl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function pl(e){return(e?e.ownerDocument:document).body.offsetHeight}function Sc(e,t,n){const a=e[On];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const fl=Symbol("_vod"),Cc=Symbol("_vsh"),Ec=Symbol(""),Tc=/(?:^|;)\s*display\s*:/;function _c(e,t,n){const a=e.style,i=Re(n);let l=!1;if(n&&!i){if(t)if(Re(t))for(const s of t.split(";")){const r=s.slice(0,s.indexOf(":")).trim();n[r]==null&&na(a,r,"")}else for(const s in t)n[s]==null&&na(a,s,"");for(const s in n)s==="display"&&(l=!0),na(a,s,n[s])}else if(i){if(t!==n){const s=a[Ec];s&&(n+=";"+s),a.cssText=n,l=Tc.test(n)}}else t&&e.removeAttribute("style");fl in e&&(e[fl]=l?a.display:"",e[Cc]&&(a.display="none"))}const ml=/\s*!important$/;function na(e,t,n){if(q(n))n.forEach(a=>na(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Ic(e,t);ml.test(n)?e.setProperty(en(a),n.replace(ml,""),"important"):e[a]=n}}const gl=["Webkit","Moz","ms"],La={};function Ic(e,t){const n=La[t];if(n)return n;let a=tt(t);if(a!=="filter"&&a in e)return La[t]=a;a=ma(a);for(let i=0;i<gl.length;i++){const l=gl[i]+a;if(l in e)return La[t]=l}return t}const hl="http://www.w3.org/1999/xlink";function bl(e,t,n,a,i,l=Bs(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hl,t.slice(6,t.length)):e.setAttributeNS(hl,t,n):n==null||l&&!Yl(n)?e.removeAttribute(t):e.setAttribute(t,l?"":lt(n)?String(n):n)}function Al(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?rs(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const r=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Yl(n):n==null&&r==="string"?(n="",s=!0):r==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function Ut(e,t,n,a){e.addEventListener(t,n,a)}function Kc(e,t,n,a){e.removeEventListener(t,n,a)}const kl=Symbol("_vei");function Bc(e,t,n,a,i=null){const l=e[kl]||(e[kl]={}),s=l[t];if(a&&s)s.value=a;else{const[r,c]=Nc(t);if(a){const p=l[t]=Gc(a,i);Ut(e,r,p,c)}else s&&(Kc(e,r,s,c),l[t]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function Nc(e){let t;if(vl.test(e)){t={};let a;for(;a=e.match(vl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Ga=0;const Oc=Promise.resolve(),Lc=()=>Ga||(Oc.then(()=>Ga=0),Ga=Date.now());function Gc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;st(Uc(a,n.value),t,5,[a])};return n.value=e,n.attached=Lc(),n}function Uc(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const xl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hc=(e,t,n,a,i,l)=>{const s=i==="svg";t==="class"?Sc(e,a,s):t==="style"?_c(e,n,a):pa(t)?di(t)||Bc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jc(e,t,a,s))?(Al(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bl(e,t,a,s,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Re(a))?Al(e,tt(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),bl(e,t,a,s))};function jc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&xl(t)&&Z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return xl(t)&&Re(n)?!1:t in e}const fn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>Zn(t,n):t};function Fc(e){e.target.composing=!0}function yl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dt=Symbol("_assign");function wl(e,t,n){return t&&(e=e.trim()),n&&(e=ga(e)),e}const ze={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[Dt]=fn(i);const l=a||i.props&&i.props.type==="number";Ut(e,t?"change":"input",s=>{s.target.composing||e[Dt](wl(e.value,n,l))}),(n||l)&&Ut(e,"change",()=>{e.value=wl(e.value,n,l)}),t||(Ut(e,"compositionstart",Fc),Ut(e,"compositionend",yl),Ut(e,"change",yl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},s){if(e[Dt]=fn(s),e.composing)return;const r=(l||e.type==="number")&&!/^0\d/.test(e.value)?ga(e.value):e.value,c=t??"";r!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===c)||(e.value=c))}},Pl={deep:!0,created(e,t,n){e[Dt]=fn(n),Ut(e,"change",()=>{const a=e._modelValue,i=Ln(e),l=e.checked,s=e[Dt];if(q(a)){const r=mi(a,i),c=r!==-1;if(l&&!c)s(a.concat(i));else if(!l&&c){const p=[...a];p.splice(r,1),s(p)}}else if(hn(a)){const r=new Set(a);l?r.add(i):r.delete(i),s(r)}else s(ds(e,l))})},mounted:Ml,beforeUpdate(e,t,n){e[Dt]=fn(n),Ml(e,t,n)}};function Ml(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(q(t))i=mi(t,a.props.value)>-1;else if(hn(t))i=t.has(a.props.value);else{if(t===n)return;i=Fn(t,ds(e,!0))}e.checked!==i&&(e.checked=i)}const it={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=hn(t);Ut(e,"change",()=>{const l=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?ga(Ln(s)):Ln(s));e[Dt](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,ka(()=>{e._assigning=!1})}),e[Dt]=fn(a)},mounted(e,{value:t}){Dl(e,t)},beforeUpdate(e,t,n){e[Dt]=fn(n)},updated(e,{value:t}){e._assigning||Dl(e,t)}};function Dl(e,t){const n=e.multiple,a=q(t);if(!(n&&!a&&!hn(t))){for(let i=0,l=e.options.length;i<l;i++){const s=e.options[i],r=Ln(s);if(n)if(a){const c=typeof r;c==="string"||c==="number"?s.selected=t.some(p=>String(p)===String(r)):s.selected=mi(t,r)>-1}else s.selected=t.has(r);else if(Fn(Ln(s),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ln(e){return"_value"in e?e._value:e.value}function ds(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Vc=["ctrl","shift","alt","meta"],Jc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Vc.some(n=>e[`${n}Key`]&&!t.includes(n))},Wc=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let s=0;s<t.length;s++){const r=Jc[t[s]];if(r&&r(i,t))return}return e(i,...l)}))},Qc=Ce({patchProp:Hc},xc);let Rl;function qc(){return Rl||(Rl=ec(Qc))}const zc=((...e)=>{const t=qc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=Xc(a);if(!i)return;const l=t._component;!Z(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,$c(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t});function $c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xc(e){return Re(e)?document.querySelector(e):e}const Ma="/toram-vue/images/logo.png";const ln=typeof document<"u";function ps(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ps(e.default)}const ue=Object.assign;function Ua(e,t){const n={};for(const a in t){const i=t[a];n[a]=rt(i)?i.map(e):e(i)}return n}const Cn=()=>{},rt=Array.isArray;function Sl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const fs=/#/g,Yc=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,ms=/\+/g,au=/%5B/g,iu=/%5D/g,gs=/%5E/g,lu=/%60/g,hs=/%7B/g,ou=/%7C/g,bs=/%7D/g,su=/%20/g;function Si(e){return e==null?"":encodeURI(""+e).replace(ou,"|").replace(au,"[").replace(iu,"]")}function ru(e){return Si(e).replace(hs,"{").replace(bs,"}").replace(gs,"^")}function li(e){return Si(e).replace(ms,"%2B").replace(su,"+").replace(fs,"%23").replace(Yc,"%26").replace(lu,"`").replace(hs,"{").replace(bs,"}").replace(gs,"^")}function cu(e){return li(e).replace(tu,"%3D")}function uu(e){return Si(e).replace(fs,"%23").replace(nu,"%3F")}function du(e){return uu(e).replace(eu,"%2F")}function Gn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pu=/\/$/,fu=e=>e.replace(pu,"");function Ha(e,t,n="/"){let a,i={},l="",s="";const r=t.indexOf("#");let c=t.indexOf("?");return c=r>=0&&c>r?-1:c,c>=0&&(a=t.slice(0,c),l=t.slice(c,r>0?r:t.length),i=e(l.slice(1))),r>=0&&(a=a||t.slice(0,r),s=t.slice(r,t.length)),a=bu(a??t,n),{fullPath:a+l+s,path:a,query:i,hash:Gn(s)}}function mu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Cl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gu(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&mn(t.matched[a],n.matched[i])&&As(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function As(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return rt(e)?El(e,t):rt(t)?El(t,e):e?.valueOf()===t?.valueOf()}function El(e,t){return rt(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function bu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,s,r;for(s=0;s<a.length;s++)if(r=a[s],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(s).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let oi=(function(e){return e.pop="pop",e.push="push",e})({}),ja=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Au(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fu(e)}const ku=/^[^#]+#/;function vu(e,t){return e.replace(ku,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Da=()=>({left:window.scrollX,top:window.scrollY});function yu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=xu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Tl(e,t){return(history.state?history.state.position-t:-1)+e}const si=new Map;function wu(e,t){si.set(e,t)}function Pu(e){const t=si.get(e);return si.delete(e),t}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function ks(e){return typeof e=="string"||typeof e=="symbol"}let De=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const vs=Symbol("");De.MATCHER_NOT_FOUND+"",De.NAVIGATION_GUARD_REDIRECT+"",De.NAVIGATION_ABORTED+"",De.NAVIGATION_CANCELLED+"",De.NAVIGATION_DUPLICATED+"";function gn(e,t){return ue(new Error,{type:e,[vs]:!0},t)}function kt(e,t){return e instanceof Error&&vs in e&&(t==null||!!(e.type&t))}const Du=["params","query","hash"];function Ru(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Du)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Su(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(ms," "),l=i.indexOf("="),s=Gn(l<0?i:i.slice(0,l)),r=l<0?null:Gn(i.slice(l+1));if(s in t){let c=t[s];rt(c)||(c=t[s]=[c]),c.push(r)}else t[s]=r}return t}function _l(e){let t="";for(let n in e){const a=e[n];if(n=cu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(rt(a)?a.map(i=>i&&li(i)):[a&&li(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Cu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=rt(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const Eu=Symbol(""),Il=Symbol(""),Ra=Symbol(""),Ci=Symbol(""),ri=Symbol("");function xn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,a,i,l=s=>s()){const s=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const p=m=>{m===!1?c(gn(De.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):Mu(m)?c(gn(De.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(s&&a.enterCallbacks[i]===s&&typeof m=="function"&&s.push(m),r())},u=l(()=>e.call(a&&a.instances[i],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(m=>c(m))})}function Fa(e,t,n,a,i=l=>l()){const l=[];for(const s of e)for(const r in s.components){let c=s.components[r];if(!(t!=="beforeRouteEnter"&&!s.instances[r]))if(ps(c)){const p=(c.__vccOpts||c)[t];p&&l.push(Lt(p,n,a,s,r,i))}else{let p=c();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${r}" at "${s.path}"`);const d=Zc(u)?u.default:u;s.mods[r]=u,s.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&Lt(m,n,a,s,r,i)()}))}}return l}function Tu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let s=0;s<l;s++){const r=t.matched[s];r&&(e.matched.find(p=>mn(p,r))?a.push(r):n.push(r));const c=e.matched[s];c&&(t.matched.find(p=>mn(p,c))||i.push(c))}return[n,a,i]}let _u=()=>location.protocol+"//"+location.host;function xs(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let s=i.includes(e.slice(l))?e.slice(l).length:1,r=i.slice(s);return r[0]!=="/"&&(r="/"+r),Cl(r,"")}return Cl(n,e)+a+i}function Iu(e,t,n,a){let i=[],l=[],s=null;const r=({state:m})=>{const b=xs(e,location),v=n.value,h=t.value;let A=0;if(m){if(n.value=b,t.value=m,s&&s===v){s=null;return}A=h?m.position-h.position:0}else a(b);i.forEach(y=>{y(n.value,v,{delta:A,type:oi.pop,direction:A?A>0?ja.forward:ja.back:ja.unknown})})};function c(){s=n.value}function p(m){i.push(m);const b=()=>{const v=i.indexOf(m);v>-1&&i.splice(v,1)};return l.push(b),b}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ue({},m.state,{scroll:Da()}),"")}}function d(){for(const m of l)m();l=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Kl(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?Da():null}}function Ku(e){const{history:t,location:n}=window,a={value:xs(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,p,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:_u()+e+c;try{t[u?"replaceState":"pushState"](p,"",m),i.value=p}catch(b){console.error(b),n[u?"replace":"assign"](m)}}function s(c,p){l(c,ue({},t.state,Kl(i.value.back,c,i.value.forward,!0),p,{position:i.value.position}),!0),a.value=c}function r(c,p){const u=ue({},i.value,t.state,{forward:c,scroll:Da()});l(u.current,u,!0),l(c,ue({},Kl(a.value,c,null),{position:u.position+1},p),!1),a.value=c}return{location:a,state:i,push:r,replace:s}}function Bu(e){e=Au(e);const t=Ku(e),n=Iu(e,t.state,t.location,t.replace);function a(l,s=!0){s||n.pauseListeners(),history.go(l)}const i=ue({location:"",base:e,go:a,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Bu(e)}let Xt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Se=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Se||{});const Ou={type:Xt.Static,value:""},Lu=/[a-zA-Z0-9_]/;function Gu(e){if(!e)return[[]];if(e==="/")return[[Ou]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${p}": ${b}`)}let n=Se.Static,a=n;const i=[];let l;function s(){l&&i.push(l),l=[]}let r=0,c,p="",u="";function d(){p&&(n===Se.Static?l.push({type:Xt.Static,value:p}):n===Se.Param||n===Se.ParamRegExp||n===Se.ParamRegExpEnd?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Xt.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==Se.ParamRegExp){a=n,n=Se.EscapeNext;continue}switch(n){case Se.Static:c==="/"?(p&&d(),s()):c===":"?(d(),n=Se.Param):m();break;case Se.EscapeNext:m(),n=a;break;case Se.Param:c==="("?n=Se.ParamRegExp:Lu.test(c)?m():(d(),n=Se.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case Se.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=Se.ParamRegExpEnd:u+=c;break;case Se.ParamRegExpEnd:d(),n=Se.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--,u="";break;default:t("Unknown state");break}}return n===Se.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),s(),i}const Bl="[^/]+?",Uu={sensitive:!1,strict:!1,start:!0,end:!0};var Ue=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ue||{});const Hu=/[.+*?^${}()[\]/\\]/g;function ju(e,t){const n=ue({},Uu,t),a=[];let i=n.start?"^":"";const l=[];for(const p of e){const u=p.length?[]:[Ue.Root];n.strict&&!p.length&&(i+="/");for(let d=0;d<p.length;d++){const m=p[d];let b=Ue.Segment+(n.sensitive?Ue.BonusCaseSensitive:0);if(m.type===Xt.Static)d||(i+="/"),i+=m.value.replace(Hu,"\\$&"),b+=Ue.Static;else if(m.type===Xt.Param){const{value:v,repeatable:h,optional:A,regexp:y}=m;l.push({name:v,repeatable:h,optional:A});const S=y||Bl;if(S!==Bl){b+=Ue.BonusCustomRegExp;try{`${S}`}catch(R){throw new Error(`Invalid custom RegExp for param "${v}" (${S}): `+R.message)}}let E=h?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(E=A&&p.length<2?`(?:/${E})`:"/"+E),A&&(E+="?"),i+=E,b+=Ue.Dynamic,A&&(b+=Ue.BonusOptional),h&&(b+=Ue.BonusRepeatable),S===".*"&&(b+=Ue.BonusWildcard)}u.push(b)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=Ue.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function r(p){const u=p.match(s),d={};if(!u)return null;for(let m=1;m<u.length;m++){const b=u[m]||"",v=l[m-1];d[v.name]=b&&v.repeatable?b.split("/"):b}return d}function c(p){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const b of m)if(b.type===Xt.Static)u+=b.value;else if(b.type===Xt.Param){const{value:v,repeatable:h,optional:A}=b,y=v in p?p[v]:"";if(rt(y)&&!h)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const S=rt(y)?y.join("/"):y;if(!S)if(A)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=S}}return u||"/"}return{re:s,score:a,keys:l,parse:r,stringify:c}}function Fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ue.Static+Ue.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ue.Static+Ue.Segment?1:-1:0}function ys(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=Fu(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(Nl(a))return 1;if(Nl(i))return-1}return i.length-a.length}function Nl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vu={strict:!1,end:!0,sensitive:!1};function Ju(e,t,n){const a=ju(Gu(e.path),n),i=ue(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Wu(e,t){const n=[],a=new Map;t=Sl(Vu,t);function i(d){return a.get(d)}function l(d,m,b){const v=!b,h=Ll(d);h.aliasOf=b&&b.record;const A=Sl(t,d),y=[h];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of R)y.push(Ll(ue({},h,{components:b?b.record.components:h.components,path:V,aliasOf:b?b.record:h})))}let S,E;for(const R of y){const{path:V}=R;if(m&&V[0]!=="/"){const ee=m.record.path,re=ee[ee.length-1]==="/"?"":"/";R.path=m.record.path+(V&&re+V)}if(S=Ju(R,m,A),b?b.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),v&&d.name&&!Gl(S)&&s(d.name)),ws(S)&&c(S),h.children){const ee=h.children;for(let re=0;re<ee.length;re++)l(ee[re],S,b&&b.children[re])}b=b||S}return E?()=>{s(E)}:Cn}function s(d){if(ks(d)){const m=a.get(d);m&&(a.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(s),m.alias.forEach(s))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function r(){return n}function c(d){const m=zu(d,n);n.splice(m,0,d),d.record.name&&!Gl(d)&&a.set(d.record.name,d)}function p(d,m){let b,v={},h,A;if("name"in d&&d.name){if(b=a.get(d.name),!b)throw gn(De.MATCHER_NOT_FOUND,{location:d});A=b.record.name,v=ue(Ol(m.params,b.keys.filter(E=>!E.optional).concat(b.parent?b.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&Ol(d.params,b.keys.map(E=>E.name))),h=b.stringify(v)}else if(d.path!=null)h=d.path,b=n.find(E=>E.re.test(h)),b&&(v=b.parse(h),A=b.record.name);else{if(b=m.name?a.get(m.name):n.find(E=>E.re.test(m.path)),!b)throw gn(De.MATCHER_NOT_FOUND,{location:d,currentLocation:m});A=b.record.name,v=ue({},m.params,d.params),h=b.stringify(v)}const y=[];let S=b;for(;S;)y.unshift(S.record),S=S.parent;return{name:A,path:h,params:v,matched:y,meta:qu(y)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:p,removeRoute:s,clearRoutes:u,getRoutes:r,getRecordMatcher:i}}function Ol(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Ll(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Qu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Qu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Gl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qu(e){return e.reduce((t,n)=>ue(t,n.meta),{})}function zu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;ys(e,t[l])<0?a=l:n=l+1}const i=$u(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function $u(e){let t=e;for(;t=t.parent;)if(ws(t)&&ys(e,t)===0)return t}function ws({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ul(e){const t=at(Ra),n=at(Ci),a=te(()=>{const c=We(e.to);return t.resolve(c)}),i=te(()=>{const{matched:c}=a.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(mn.bind(null,u));if(m>-1)return m;const b=Hl(c[p-2]);return p>1&&Hl(u)===b&&d[d.length-1].path!==b?d.findIndex(mn.bind(null,c[p-2])):m}),l=te(()=>i.value>-1&&t0(n.params,a.value.params)),s=te(()=>i.value>-1&&i.value===n.matched.length-1&&As(n.params,a.value.params));function r(c={}){if(e0(c)){const p=t[We(e.replace)?"replace":"push"](We(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:te(()=>a.value.href),isActive:l,isExactActive:s,navigate:r}}function Xu(e){return e.length===1?e[0]:e}const Zu=Io({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ul,setup(e,{slots:t}){const n=bn(Ul(e)),{options:a}=at(Ra),i=te(()=>({[jl(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[jl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Xu(t.default(n));return e.custom?l:Ri("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),Yu=Zu;function e0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function t0(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!rt(i)||i.length!==a.length||a.some((l,s)=>l.valueOf()!==i[s].valueOf()))return!1}return!0}function Hl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jl=(e,t,n)=>e??t??n,n0=Io({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=at(ri),i=te(()=>e.route||a.value),l=at(Il,0),s=te(()=>{let p=We(l);const{matched:u}=i.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),r=te(()=>i.value.matched[s.value]);Yn(Il,te(()=>s.value+1)),Yn(Eu,r),Yn(ri,i);const c=oe();return Mt(()=>[c.value,r.value,e.name],([p,u,d],[m,b,v])=>{u&&(u.instances[d]=p,b&&b!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),p&&u&&(!b||!mn(u,b)||!m)&&(u.enterCallbacks[d]||[]).forEach(h=>h(p))},{flush:"post"}),()=>{const p=i.value,u=e.name,d=r.value,m=d&&d.components[u];if(!m)return Fl(n.default,{Component:m,route:p});const b=d.props[u],v=b?b===!0?p.params:typeof b=="function"?b(p):b:null,A=Ri(m,ue({},v,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Fl(n.default,{Component:A,route:p})||A}}});function Fl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const a0=n0;function i0(e){const t=Wu(e.routes,e),n=e.parseQuery||Su,a=e.stringifyQuery||_l,i=e.history,l=xn(),s=xn(),r=xn(),c=ir(_t);let p=_t;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ua.bind(null,D=>""+D),d=Ua.bind(null,du),m=Ua.bind(null,Gn);function b(D,j){let U,J;return ks(D)?(U=t.getRecordMatcher(D),J=j):J=D,t.addRoute(J,U)}function v(D){const j=t.getRecordMatcher(D);j&&t.removeRoute(j)}function h(){return t.getRoutes().map(D=>D.record)}function A(D){return!!t.getRecordMatcher(D)}function y(D,j){if(j=ue({},j||c.value),typeof D=="string"){const k=Ha(n,D,j.path),P=t.resolve({path:k.path},j),C=i.createHref(k.fullPath);return ue(k,P,{params:m(P.params),hash:Gn(k.hash),redirectedFrom:void 0,href:C})}let U;if(D.path!=null)U=ue({},D,{path:Ha(n,D.path,j.path).path});else{const k=ue({},D.params);for(const P in k)k[P]==null&&delete k[P];U=ue({},D,{params:d(k)}),j.params=d(j.params)}const J=t.resolve(U,j),ie=D.hash||"";J.params=u(m(J.params));const f=mu(a,ue({},D,{hash:ru(ie),path:J.path})),g=i.createHref(f);return ue({fullPath:f,hash:ie,query:a===_l?Cu(D.query):D.query||{}},J,{redirectedFrom:void 0,href:g})}function S(D){return typeof D=="string"?Ha(n,D,c.value.path):ue({},D)}function E(D,j){if(p!==D)return gn(De.NAVIGATION_CANCELLED,{from:j,to:D})}function R(D){return re(D)}function V(D){return R(ue(S(D),{replace:!0}))}function ee(D,j){const U=D.matched[D.matched.length-1];if(U&&U.redirect){const{redirect:J}=U;let ie=typeof J=="function"?J(D,j):J;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=S(ie):{path:ie},ie.params={}),ue({query:D.query,hash:D.hash,params:ie.path!=null?{}:D.params},ie)}}function re(D,j){const U=p=y(D),J=c.value,ie=D.state,f=D.force,g=D.replace===!0,k=ee(U,J);if(k)return re(ue(S(k),{state:typeof k=="object"?ue({},ie,k.state):ie,force:f,replace:g}),j||U);const P=U;P.redirectedFrom=j;let C;return!f&&gu(a,J,U)&&(C=gn(De.NAVIGATION_DUPLICATED,{to:P,from:J}),F(J,J,!0,!1)),(C?Promise.resolve(C):Y(P,J)).catch(M=>kt(M)?kt(M,De.NAVIGATION_GUARD_REDIRECT)?M:ge(M):x(M,P,J)).then(M=>{if(M){if(kt(M,De.NAVIGATION_GUARD_REDIRECT))return re(ue({replace:g},S(M.to),{state:typeof M.to=="object"?ue({},ie,M.to.state):ie,force:f}),j||P)}else M=G(P,J,!0,g,ie);return se(P,J,M),M})}function Pe(D,j){const U=E(D,j);return U?Promise.reject(U):Promise.resolve()}function Q(D){const j=Te.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(D):D()}function Y(D,j){let U;const[J,ie,f]=Tu(D,j);U=Fa(J.reverse(),"beforeRouteLeave",D,j);for(const k of J)k.leaveGuards.forEach(P=>{U.push(Lt(P,D,j))});const g=Pe.bind(null,D,j);return U.push(g),Xe(U).then(()=>{U=[];for(const k of l.list())U.push(Lt(k,D,j));return U.push(g),Xe(U)}).then(()=>{U=Fa(ie,"beforeRouteUpdate",D,j);for(const k of ie)k.updateGuards.forEach(P=>{U.push(Lt(P,D,j))});return U.push(g),Xe(U)}).then(()=>{U=[];for(const k of f)if(k.beforeEnter)if(rt(k.beforeEnter))for(const P of k.beforeEnter)U.push(Lt(P,D,j));else U.push(Lt(k.beforeEnter,D,j));return U.push(g),Xe(U)}).then(()=>(D.matched.forEach(k=>k.enterCallbacks={}),U=Fa(f,"beforeRouteEnter",D,j,Q),U.push(g),Xe(U))).then(()=>{U=[];for(const k of s.list())U.push(Lt(k,D,j));return U.push(g),Xe(U)}).catch(k=>kt(k,De.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function se(D,j,U){r.list().forEach(J=>Q(()=>J(D,j,U)))}function G(D,j,U,J,ie){const f=E(D,j);if(f)return f;const g=j===_t,k=ln?history.state:{};U&&(J||g?i.replace(D.fullPath,ue({scroll:g&&k&&k.scroll},ie)):i.push(D.fullPath,ie)),c.value=D,F(D,j,U,g),ge()}let ne;function Me(){ne||(ne=i.listen((D,j,U)=>{if(!ht.listening)return;const J=y(D),ie=ee(J,ht.currentRoute.value);if(ie){re(ue(ie,{replace:!0,force:!0}),J).catch(Cn);return}p=J;const f=c.value;ln&&wu(Tl(f.fullPath,U.delta),Da()),Y(J,f).catch(g=>kt(g,De.NAVIGATION_ABORTED|De.NAVIGATION_CANCELLED)?g:kt(g,De.NAVIGATION_GUARD_REDIRECT)?(re(ue(S(g.to),{force:!0}),J).then(k=>{kt(k,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&!U.delta&&U.type===oi.pop&&i.go(-1,!1)}).catch(Cn),Promise.reject()):(U.delta&&i.go(-U.delta,!1),x(g,J,f))).then(g=>{g=g||G(J,f,!1),g&&(U.delta&&!kt(g,De.NAVIGATION_CANCELLED)?i.go(-U.delta,!1):U.type===oi.pop&&kt(g,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),se(J,f,g)}).catch(Cn)}))}let Le=xn(),ye=xn(),K;function x(D,j,U){ge(D);const J=ye.list();return J.length?J.forEach(ie=>ie(D,j,U)):console.error(D),Promise.reject(D)}function ae(){return K&&c.value!==_t?Promise.resolve():new Promise((D,j)=>{Le.add([D,j])})}function ge(D){return K||(K=!D,Me(),Le.list().forEach(([j,U])=>D?U(D):j()),Le.reset()),D}function F(D,j,U,J){const{scrollBehavior:ie}=e;if(!ln||!ie)return Promise.resolve();const f=!U&&Pu(Tl(D.fullPath,0))||(J||!U)&&history.state&&history.state.scroll||null;return ka().then(()=>ie(D,j,f)).then(g=>g&&yu(g)).catch(g=>x(g,D,j))}const we=D=>i.go(D);let pe;const Te=new Set,ht={currentRoute:c,listening:!0,addRoute:b,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:h,resolve:y,options:e,push:R,replace:V,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:l.add,beforeResolve:s.add,afterEach:r.add,onError:ye.add,isReady:ae,install(D){D.component("RouterLink",Yu),D.component("RouterView",a0),D.config.globalProperties.$router=ht,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>We(c)}),ln&&!pe&&c.value===_t&&(pe=!0,R(i.location).catch(J=>{}));const j={};for(const J in _t)Object.defineProperty(j,J,{get:()=>c.value[J],enumerable:!0});D.provide(Ra,ht),D.provide(Ci,bo(j)),D.provide(ri,c);const U=D.unmount;Te.add(D),D.unmount=function(){Te.delete(D),Te.size<1&&(p=_t,ne&&ne(),ne=null,c.value=_t,pe=!1,K=!1),U()}}};function Xe(D){return D.reduce((j,U)=>j.then(()=>Q(U)),Promise.resolve())}return ht}function Wn(){return at(Ra)}function Sa(e){return at(Ci)}const Vt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},l0={class:"absolute inset-0 pointer-events-none z-0"},o0={class:"fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-5xl"},s0={class:"hidden sm:flex flex-col ml-2 leading-tight overflow-hidden"},r0={class:"font-black italic text-xs md:text-base uppercase tracking-widest truncate"},c0={class:"flex-1 flex justify-center px-1 overflow-hidden"},u0={class:"relative flex bg-black/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner overflow-hidden w-fit"},d0={class:"flex justify-end z-10 pr-2 flex-shrink-0"},p0={class:"text-xs md:text-lg"},f0={class:"max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},m0={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=Sa(),n=Wn(),a=oe(null),i=oe({}),l=oe({left:"0px",width:"0px",opacity:0}),s=()=>n.push("/"),r=Array.from({length:80},(d,m)=>({id:m,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),c=Array.from({length:40},(d,m)=>({id:m,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),p=(d,m)=>{d&&(i.value[m]=d.$el||d)},u=async()=>{await ka();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 6px 20px -3px rgba(245, 158, 11, 0.7)":"0 10px 25px -5px rgba(139, 92, 246, 0.7)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return tn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),Mt(()=>t.path,u),(d,m)=>{const b=sa("router-link");return T(),I("div",{class:w(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[o("div",l0,[(T(!0),I($,null,me(We(c),v=>(T(),I("div",{key:"dust-"+v.id,class:w(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:Pt({width:v.size,height:v.size,top:v.top,left:v.left,animationDuration:v.duration,animationDelay:v.delay})},null,6))),128)),(T(!0),I($,null,me(We(r),v=>(T(),I("div",{key:"star-"+v.id,class:w(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:Pt({width:v.size,height:v.size,top:v.top,left:v.left,animationDelay:v.delay})},null,6))),128))]),o("nav",o0,[o("div",{class:w(["backdrop-blur-3xl border flex items-center justify-between rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3",e.isDark?"bg-black/50 border-white/10 shadow-indigo-500/10":"bg-white/80 border-white/50 shadow-blue-500/5"])},[o("div",{onClick:s,class:"flex items-center cursor-pointer group select-none z-10 pl-2 pr-1 active:scale-95 transition-transform flex-shrink-0"},[o("div",{class:w(["w-8 h-8 md:w-11 md:h-11 overflow-hidden rounded-full border-2 transition-all duration-300 shadow-lg shrink-0",e.isDark?"border-white/20":"border-slate-300"])},[...m[1]||(m[1]=[o("img",{src:Ma,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),o("div",s0,[o("span",r0,[o("span",{class:w(e.isDark?"text-white":"text-black")},"TIMI",2),m[2]||(m[2]=o("span",{class:"ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"},"DB",-1))]),m[3]||(m[3]=o("span",{class:"text-[6px] md:text-[7px] font-bold uppercase opacity-50 tracking-widest truncate"},"Toram Online Tools",-1))])]),o("div",c0,[o("div",u0,[o("div",{ref_key:"navContainer",ref:a,class:"flex items-center relative gap-0"},[o("div",{class:"absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:Pt(l.value)},null,4),xe(b,{ref:v=>p(v,"/"),to:"/",class:"nav-link","active-class":"active-link"},{default:Ye(()=>[...m[4]||(m[4]=[Je("LIST BAG",-1)])]),_:1},512),xe(b,{ref:v=>p(v,"/mq"),to:"/mq",class:"nav-link","active-class":"active-link"},{default:Ye(()=>[...m[5]||(m[5]=[Je("LIST MQ",-1)])]),_:1},512),xe(b,{ref:v=>p(v,"/mq-calc"),to:"/mq-calc",class:"nav-link","active-class":"active-link"},{default:Ye(()=>[...m[6]||(m[6]=[Je("MQ-CALC",-1)])]),_:1},512),xe(b,{ref:v=>p(v,"/bs-calc"),to:"/bs-calc",class:"nav-link","active-class":"active-link"},{default:Ye(()=>[...m[7]||(m[7]=[Je("BS-CALC",-1)])]),_:1},512),xe(b,{ref:v=>p(v,"/xtall"),to:"/xtall",class:"nav-link","active-class":"active-link"},{default:Ye(()=>[...m[8]||(m[8]=[Je("XTALL",-1)])]),_:1},512)],512)])]),o("div",d0,[o("button",{onClick:m[0]||(m[0]=v=>d.$emit("toggleDark")),class:w(["w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-500 active:scale-75 shadow-lg shrink-0",e.isDark?"bg-slate-900 border-white/10 text-orange-400":"bg-white border-slate-200 text-indigo-600"])},[o("span",p0,O(e.isDark?"🌙":"☀️"),1)],2)])],2)]),o("main",f0,[_r(d.$slots,"default",{},void 0)])],2)}}},g0=Vt(m0,[["__scopeId","data-v-2236526c"]]),h0={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},b0={__name:"App",setup(e){const t=oe(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return tn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=sa("router-view");return T(),I("div",h0,[xe(g0,{isDark:t.value,onToggleDark:n},{default:Ye(()=>[xe(l,null,{default:Ye(({Component:s})=>[xe(us,{name:"slide-page",mode:"out-in"},{default:Ye(()=>[(T(),ua(Tr(s),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},A0="/toram-vue/images/Bag-Toram.png",Xn=[{id:1,slot:"50 ➔ 51",nama_item:"Colon Skin (Kulit Colon)",jumlah:"x1",spina:0,monster:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:2,slot:"51 ➔ 52",nama_item:"Gorgeous Fur (Kulit Berkualitas)",jumlah:"x1",spina:0,monster:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rakau Plains (Dataran Rakau) / Ruined Temple Town (Kota Kuil Runtuh)"},{id:3,slot:"52 ➔ 53",nama_item:"Spina",jumlah:"-",spina:1e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store (Toko Kelontong)"},{id:4,slot:"53 ➔ 54",nama_item:"Minotaur Skin (Kulit Minotaur)",jumlah:"x1",spina:0,monster:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ruined Temple: Forbidden Hall (Kuil Runtuh: Aula Terlarang)"},{id:5,slot:"53 ➔ 54",nama_item:"Orange Crystal Fragment (Pecahan Kristal Jingga)",jumlah:"x1",spina:0,monster:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:6,slot:"54 ➔ 55",nama_item:"Forest Wolf Skin (Kulit Anjing Hutan)",jumlah:"x1",spina:0,monster:"Forest Wolf (Anjing Hutan)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Marbaro Forest: Deepest Part (Hutan Marbaro: Bagian Dalam)"},{id:7,slot:"54 ➔ 55",nama_item:"Goblin Medal (Lencana Goblin)",jumlah:"x1",spina:0,monster:"Boss Goblin (Goblin Bos)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Ribisco Cave: Deepest Part (Gua Ribisco: Bagian Dalam)"},{id:8,slot:"55 ➔ 56",nama_item:"Spina",jumlah:"-",spina:2e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:9,slot:"56 ➔ 57",nama_item:"Mochelo Fur (Bulu Mochelo)",jumlah:"x1",spina:0,monster:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:10,slot:"56 ➔ 57",nama_item:"Linen Cloth (Kain Linen)",jumlah:"x10",spina:0,monster:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Douce Hamlet (Dusun Douce)"},{id:11,slot:"57 ➔ 58",nama_item:"Green Dragon Fur (Bulu Naga Giok)",jumlah:"x1",spina:0,monster:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Land of Chaos (Tanah Kaos)"},{id:12,slot:"57 ➔ 58",nama_item:"High Quality Horn (Tanduk Berkualitas)",jumlah:"x10",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Yorl Highlands (Tanah Tinggi Yorl)"},{id:13,slot:"58 ➔ 59",nama_item:"Boss Roga Belt (Sabuk Bos Roga)",jumlah:"x1",spina:0,monster:"Boss Roga (Bos Roga)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:14,slot:"58 ➔ 59",nama_item:"Broadcloth (Kain Beludu)",jumlah:"x10",spina:0,monster:"Orc / Orc Warrior (Orc Petarung)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Saham Crater (Kawah Saham) / Saham Underground Cave (Gua Bawah Tanah Saham)"},{id:15,slot:"59 ➔ 60",nama_item:"Spina",jumlah:"-",spina:4e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:16,slot:"60 ➔ 61",nama_item:"Sharp Bear Claw (Cakar Beruang)",jumlah:"x2",spina:0,monster:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Darkanon Plain (Padang Darkanon)"},{id:17,slot:"60 ➔ 61",nama_item:"Sheeting Fabric (Kain Alas)",jumlah:"x20",spina:0,monster:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ancient Empress Tomb (Makam Ratu Kuno: Area 2/3)"},{id:18,slot:"61 ➔ 62",nama_item:"Heavy Tough Chain (Rantai Kukuh)",jumlah:"x2",spina:0,monster:"Masked Warrior (Pendekar Beratopeng)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:19,slot:"61 ➔ 62",nama_item:"Polyester Cloth (Kain Polister)",jumlah:"x20",spina:0,monster:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Lost Town (Kota Hilang)"},{id:20,slot:"62 ➔ 63",nama_item:"Grass Dragon Scale (Sisik Naga Sabana)",jumlah:"x2",spina:0,monster:"Grass Dragon Yelb (Naga Sabana Yelb)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Albatif Village (Desa Albatif)"},{id:21,slot:"62 ➔ 63",nama_item:"Space Wolf Fur (Kulit Serigala Alien)",jumlah:"x20",spina:0,monster:"Outer World Wolf (Serigala Luar)",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Gate to Another World (Gerbang Dunia Lain)"},{id:22,slot:"63 ➔ 64",nama_item:"Spina",jumlah:"-",spina:8e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:23,slot:"64 ➔ 65",nama_item:"Torn Cloak (Jubah Sobek)",jumlah:"x2",spina:0,monster:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Akaku Desert: Hill (Gurun Akaku: Bukit)"},{id:24,slot:"64 ➔ 65",nama_item:"Squirrel Fur (Kulit Tupai)",jumlah:"x20",spina:0,monster:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item:"Jade Raptor Horn (Tanduk Elang Zamrud)",jumlah:"x2",spina:0,monster:"Jade Raptor (Elang Zamrud)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Gravel Terrace (Teras Kerikil)"},{id:26,slot:"65 ➔ 66",nama_item:"Goat Fur (Bulu Kambing)",jumlah:"x20",spina:0,monster:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dunkel Valley (Jurang Dunkel)"},{id:27,slot:"66 ➔ 67",nama_item:"Twilight Dragon Wing (Sayap Naga Senja)",jumlah:"x2",spina:0,monster:"Twilight Dragon (Naga Senja)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fort Solfini: Roof (Benteng Solfini: Atap)"},{id:28,slot:"66 ➔ 67",nama_item:"Fleecy Fur (Bulu Halus)",jumlah:"x20",spina:0,monster:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Polde Ice Valley (Lembah Es Polde)"},{id:29,slot:"67 ➔ 68",nama_item:"Spina",jumlah:"-",spina:16e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:30,slot:"68 ➔ 69",nama_item:"Chain of Purgatory (Rantai Penyucian)",jumlah:"x2",spina:0,monster:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi:"Spring of Rebirth: Top (Mata Air Kelahiran: Puncak)"},{id:31,slot:"68 ➔ 69",nama_item:"Wavering Cloth (Kain Goyah)",jumlah:"x20",spina:0,monster:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Spring of Rebirth (Mata Air Kelahiran: Tengah/Atas)"},{id:32,slot:"69 ➔ 70",nama_item:"Aranea Silk (Benang Aranea)",jumlah:"x2",spina:0,monster:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Pusat)"},{id:33,slot:"69 ➔ 70",nama_item:"Small Spider Silk (Benang Laba-Laba Kecil)",jumlah:"x20",spina:0,monster:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Area 2/3)"},{id:34,slot:"70 ➔ 71",nama_item:"Copied Goddess Robe (Kain Dewi Tiruan)",jumlah:"x3",spina:0,monster:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Dark Castle: Grand Hall (Istana Gelap: Aula Besar)"},{id:35,slot:"70 ➔ 71",nama_item:"Floating Cloth (Kain Apung)",jumlah:"x10",spina:0,monster:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cradle of Soldier (Buaian Prajurit)"},{id:36,slot:"70 ➔ 71",nama_item:"Soft Paw (Tapak Lembut)",jumlah:"x20",spina:0,monster:"Bunny Summoner / Lapin (Dukun Lapin)",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Trace of Dark River (Sungai Kegelapan)"},{id:37,slot:"71 ➔ 72",nama_item:"Evil Beast Mane (Surai Hewan Iblis)",jumlah:"x3",spina:0,monster:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Dark Castle: Area 2 (Istana Gelap: Area 2)"},{id:38,slot:"71 ➔ 72",nama_item:"Hard Paw Pad (Bantalan Tapak Keras)",jumlah:"x10",spina:0,monster:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:39,slot:"71 ➔ 72",nama_item:"Dark Shadow Feather (Bulu Bayangan Hitam)",jumlah:"x20",spina:0,monster:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:40,slot:"72 ➔ 73",nama_item:"Spina",jumlah:"-",spina:32e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:41,slot:"73 ➔ 74",nama_item:"Tapir Fur (Bulu Tapir)",jumlah:"x3",spina:0,monster:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:42,slot:"73 ➔ 74",nama_item:"Stiff Fur (Bulu Kaku)",jumlah:"x10",spina:0,monster:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:43,slot:"73 ➔ 74",nama_item:"Anti-Rust Oil (Minyak Anti-Karat)",jumlah:"x20",spina:0,monster:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Artillery Defense Line (Garis Pertahanan Artileri Otomatis)"},{id:44,slot:"74 ➔ 75",nama_item:"Ancient Fabric (Kain Kuno)",jumlah:"x3",spina:0,monster:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Singolare Ruins: 3rd Floor (Reruntuhan Singolare: Lantai 3)"},{id:45,slot:"74 ➔ 75",nama_item:"Soft Tree Bark (Kulit Pohon Lunak)",jumlah:"x10",spina:0,monster:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Site of Simscracker (Situs Simcracker)"},{id:46,slot:"74 ➔ 75",nama_item:"Dirty Potum Hair (Rambut Potum Kotor)",jumlah:"x20",spina:0,monster:"Slum Potum",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Klaspe Slum (Klaspe Kumuh)"},{id:47,slot:"75 ➔ 76",nama_item:"Crimson Huge Bone (Tulang Raksasa Merah)",jumlah:"x3",spina:0,monster:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil: Area 2)"},{id:48,slot:"75 ➔ 76",nama_item:"Torn Black Coat (Mantel Hitam Sobek)",jumlah:"x10",spina:0,monster:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:49,slot:"75 ➔ 76",nama_item:"Torn Chain (Rantai Putus)",jumlah:"x20",spina:0,monster:"Torture Machina (Machina Penyiksa)",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:50,slot:"76 ➔ 77",nama_item:"Chimera Scale (Sisik Chimera)",jumlah:"x3",spina:0,monster:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar: Bagian Terdalam)"},{id:51,slot:"76 ➔ 77",nama_item:"Mysterious Luminary (Benda Pendar Aneh)",jumlah:"x10",spina:0,monster:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:52,slot:"76 ➔ 77",nama_item:"Tough Tentacle (Tentakel Tangguh)",jumlah:"x20",spina:0,monster:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:53,slot:"77 ➔ 78",nama_item:"Spina",jumlah:"-",spina:64e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:54,slot:"78 ➔ 79",nama_item:"Forest Spirit Robe (Jubah Roh Hutan)",jumlah:"x3",spina:0,monster:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Monster Forest: Deep Part (Hutan Monster: Bagian Dalam)"},{id:55,slot:"78 ➔ 79",nama_item:"Plant Fang (Taring Tanaman)",jumlah:"x10",spina:0,monster:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Monster Forest (Hutan Monster)"},{id:56,slot:"78 ➔ 79",nama_item:"Felt Fabric (Kain Felt)",jumlah:"x20",spina:0,monster:"Puppet Dragon (Naga Boneka)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lufenas Mansion (Mansion Lufenas)"},{id:57,slot:"79 ➔ 80",nama_item:"Lyark Alloy (Aloi Lyark)",jumlah:"x3",spina:0,monster:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Cuervo Jail: Roof (Penjara Cuervo: Atap)"},{id:58,slot:"79 ➔ 80",nama_item:"Torn Officer Clothes (Baju Penjaga Robek)",jumlah:"x10",spina:0,monster:"Lyark Jailer (Sipir Lyark)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cuervo Jail (Penjara Cuervo)"},{id:59,slot:"79 ➔ 80",nama_item:"Ox Fabric (Kain Lembu)",jumlah:"x20",spina:0,monster:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Brahe Laboratory (Laboratorium Brahe)"},{id:60,slot:"80 ➔ 81",nama_item:"Light Emitting Cloth (Kain Bercahaya)",jumlah:"x4",spina:0,monster:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Buried Tower: Inside (Menara Penembus Bumi: Sisi Dalam)"},{id:61,slot:"80 ➔ 81",nama_item:"Damaged Artificial Leather (Kulit Sintetis Rusak)",jumlah:"x20",spina:0,monster:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:62,slot:"80 ➔ 81",nama_item:"Executioner Loincloth (Cawat Pengeksekusi)",jumlah:"x20",spina:0,monster:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:63,slot:"81 ➔ 82",nama_item:"Lil Empress Cloth Piece (Potongan Baju K. Kecil)",jumlah:"x4",spina:0,monster:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ultimea Palace: Throne (Istana Ultimea: Takhta)"},{id:64,slot:"81 ➔ 82",nama_item:"Hard Armor Bit (Pecahan Zirah Keras)",jumlah:"x20",spina:0,monster:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Ultimea Palace (Istana Ultimea)"},{id:65,slot:"81 ➔ 82",nama_item:"Snake Skin (Kulit Ular)",jumlah:"x20",spina:0,monster:"Pond Snake (Ular Kolam)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Copia Reservoirs (Reservoir Copia)"},{id:66,slot:"82 ➔ 83",nama_item:"Spina",jumlah:"-",spina:1e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:67,slot:"83 ➔ 84",nama_item:"Mom Fluck Skin (Kulit Mama Fluck)",jumlah:"x4",spina:0,monster:"Mom Fluck (Mama Fluck)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Forgotten Cave (Gua Pelupa)"},{id:68,slot:"83 ➔ 84",nama_item:"Colon Big Leaf (Daun Besar Colon)",jumlah:"x20",spina:0,monster:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Rokoko Plains (Dataran Rakoko)"},{id:69,slot:"83 ➔ 84",nama_item:"Vertical Stripe Fur (Bulu Garis Vertikal)",jumlah:"x20",spina:0,monster:"Tehon (Rakun Tambun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Curonne Forest (Hutan Currone)"},{id:70,slot:"84 ➔ 85",nama_item:"Mardula Spiritual Cloth (Kain Rohani Mardula)",jumlah:"x4",spina:0,monster:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Hall of Blessings Gods (Serambi Dewa Berkah)"},{id:71,slot:"84 ➔ 85",nama_item:"Mysterious Shiny Cloth (Kain Berkilau Misterius)",jumlah:"x20",spina:0,monster:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:72,slot:"84 ➔ 85",nama_item:"Grey Feather (Bulu Kelabu)",jumlah:"x20",spina:0,monster:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Ruins of Mt. Mithurna (Reruntuhan G. Mithurna)"},{id:73,slot:"85 ➔ 86",nama_item:"Carbuncle Fur (Mantel Carbuncle)",jumlah:"x4",spina:0,monster:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Hall of Construction Gods (Serambi Dewa Pembangunan)"},{id:74,slot:"85 ➔ 86",nama_item:"Knit Fabric (Kain Rajut)",jumlah:"x20",spina:0,monster:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Heresy Corridor (Koridor Heresi)"},{id:75,slot:"85 ➔ 86",nama_item:"Bag Bear Tail (Ekor Beruang Berkantong)",jumlah:"x20",spina:0,monster:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:76,slot:"86 ➔ 87",nama_item:"King Piton Fur (Bulu Raja Piton)",jumlah:"x4",spina:0,monster:"King Piton (Raja Piton)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Elf Mountains: Shrine (Pegunungan Elf: Kuil)"},{id:77,slot:"86 ➔ 87",nama_item:"Thick White Fur (Bulu Putih Lebat)",jumlah:"x20",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Garden of Ice & Snow (Taman Es & Salju)"},{id:78,slot:"86 ➔ 87",nama_item:"Stiff Grey Fur (Bulu Abu Kaku)",jumlah:"x20",spina:0,monster:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:79,slot:"87 ➔ 88",nama_item:"Ancient Ingot (Ingot Kuno)",jumlah:"x4",spina:0,monster:"Thug Golem (Golem Preman)",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi:"Dark Dragon Shrine: Middle (Kuil Naga Kegelapan: Tengah)"},{id:80,slot:"87 ➔ 88",nama_item:"Ice Wolf Fang (Taring Serigala Es)",jumlah:"x20",spina:0,monster:"Courloup (Serigala Tanduk)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:81,slot:"87 ➔ 88",nama_item:"Dusky Fabric (Kain Gelap)",jumlah:"x20",spina:0,monster:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Dragon Shrine (Kuil Naga Kegelapan)"},{id:82,slot:"88 ➔ 89",nama_item:"Spina",jumlah:"-",spina:2e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:83,slot:"89 ➔ 90",nama_item:"Tuscog Fang (Taring Tuscog)",jumlah:"x4",spina:0,monster:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:84,slot:"89 ➔ 90",nama_item:"Larva Silk (Sutra Ulat)",jumlah:"x20",spina:0,monster:"Moss Mole (Tikus Lumut)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Forest of Ein (Hutan Ein)"},{id:85,slot:"89 ➔ 90",nama_item:"Werewolf Fur (Taring Manusia Serigala)",jumlah:"x20",spina:0,monster:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:86,slot:"90 ➔ 91",nama_item:"Kuzto Splinter (Serpihan Kayu Kuzto)",jumlah:"x4",spina:0,monster:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi:"Labilans Sector: Square (Distrik Labilans: Alun-alun)"},{id:87,slot:"90 ➔ 91",nama_item:"Stoat Fur (Bulu Cerpelai)",jumlah:"x20",spina:0,monster:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fabriska Sector (Distrik Fabriska)"},{id:88,slot:"90 ➔ 91",nama_item:"Mysterious Waist Sash (Sabuk Pinggang Misterius)",jumlah:"x30",spina:0,monster:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fractum Sector (Distrik Fractum)"},{id:89,slot:"91 ➔ 92",nama_item:"Crystal Pouch (Kantong Kristal)",jumlah:"x5",spina:0,monster:"Canemofish (Nemopirania)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:90,slot:"91 ➔ 92",nama_item:"Cushy Tail (Ekor Lembu)",jumlah:"x20",spina:0,monster:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Labilans Sector (Distrik Labilans)"},{id:91,slot:"91 ➔ 92",nama_item:"Sturdy Papula (Papula Kuat)",jumlah:"x30",spina:0,monster:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:92,slot:"92 ➔ 93",nama_item:"Repthon Wings (Sayap Repthon)",jumlah:"x5",spina:0,monster:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone: Deepest Area (Zona Riset Deltzon: Area Terdalam)"},{id:93,slot:"92 ➔ 93",nama_item:"Legume Button (Kancing Polong)",jumlah:"x20",spina:0,monster:"Marquis Colon (Colon Marquis)",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Old Lufenas Mansion Ruins (Reruntuhan Mansion Lufenas Tua)"},{id:94,slot:"92 ➔ 93",nama_item:"Frock Coat Scrap (Kain Perca Jas Panjang)",jumlah:"x30",spina:0,monster:"Swirly Whirly (Gulingkar)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone (Zona Riset Deltzon)"},{id:95,slot:"93 ➔ 94",nama_item:"Empress Ogre Hair (Rambut Kaisar Siluman)",jumlah:"x5",spina:0,monster:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item:"Torn Red Cloth (Kain Merah Sobek)",jumlah:"x20",spina:0,monster:"Sand Bandits Potum (Potum Bandit Gurun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Geist Desert (Gurun Pasir Geist)"},{id:97,slot:"93 ➔ 94",nama_item:"Corroded Leather (Kulit Karatan)",jumlah:"x30",spina:0,monster:"Cabrigo (Jasman)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ruins of Urban Elban (Reruntuhan Elban Urban)"},{id:98,slot:"94 ➔ 95",nama_item:"Spina",jumlah:"-",spina:3e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:99,slot:"95 ➔ 96",nama_item:"Pisteus Bone (Tulang Pisteus)",jumlah:"x5",spina:0,monster:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Ducia Coast: Depths (Pesisir Ducia: Area Terdalam)"},{id:100,slot:"95 ➔ 96",nama_item:"Phantom Cloth (Kain Phantom)",jumlah:"x20",spina:0,monster:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lunagent Cliff Base (Dasar Tebing Lunagent)"},{id:101,slot:"95 ➔ 96",nama_item:"Sea Otter Fur (Bulu Berang-Berang Laut)",jumlah:"x30",spina:0,monster:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ducia Coast (Pesisir Ducia)"},{id:102,slot:"96 ➔ 97",nama_item:"Arachnidemon Wing (Sayap Arachnidemon)",jumlah:"x5",spina:0,monster:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Arche Valley: Depths (Lembah Arche: Area Terdalam)"},{id:103,slot:"96 ➔ 97",nama_item:"Metal Shackles (Belenggu Logam)",jumlah:"x20",spina:0,monster:"Bessy (Besy) / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi:"Arche Valley (Lembah Arche)"},{id:104,slot:"96 ➔ 97",nama_item:"Weird Snake Skin (Kulit Ular Aneh)",jumlah:"x30",spina:0,monster:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rokoko City Ruins (Reruntuhan Kota Rokoko) / Nezim Wetlands"},{id:105,slot:"97 ➔ 98",nama_item:"Slimy Hide (Jangat Berlendir)",jumlah:"x5",spina:0,monster:"Lord of Nezim (Datuk Nezim)",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:106,slot:"97 ➔ 98",nama_item:"Enty Cloth (Kain Enty)",jumlah:"x20",spina:0,monster:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:107,slot:"97 ➔ 98",nama_item:"Sturdy Core (Poros Kokoh)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:108,slot:"98 ➔ 99",nama_item:"Inferno Curse Cloth Scrap (Perca Gendam Geni)",jumlah:"x5",spina:0,monster:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Witch's Woods Depths (Rimba Penyihir: Area Terdalam)"},{id:109,slot:"98 ➔ 99",nama_item:"Kappa's Plate (Piring Kappa)",jumlah:"x20",spina:0,monster:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:110,slot:"98 ➔ 99",nama_item:"Crow Feather (Bulu Gagak)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:111,slot:"99 ➔ 100",nama_item:"Wriggling Latebra (Inti Latebra Menggeliat)",jumlah:"x5",spina:0,monster:"Trocostida (Trokostida)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item:"Viscous Liquid (Cairan Lekat)",jumlah:"x20",spina:0,monster:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item:"Bizarre Skin (Kulit Pelik)",jumlah:"x30",spina:0,monster:"Evil Eye (Mata Jahat) / Demonic Eye",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Morga Wasteland (Padang Morga)"}],k0={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},v0={class:"relative z-10 text-center md:text-left"},x0={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},y0={class:"flex items-center gap-2 select-none whitespace-nowrap"},w0={class:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"},P0={class:"text-[10px] md:text-xs font-black opacity-80 uppercase tracking-widest"},M0={class:"text-3xl md:text-5xl font-black italic mt-1 leading-none"},D0={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},R0={class:"relative"},S0={class:"relative group"},C0={class:"relative"},E0={class:"relative group"},T0={class:"relative"},_0={class:"relative group"},I0=["value"],K0={class:"hidden lg:block overflow-x-auto no-scrollbar"},B0={class:"w-full min-w-[1100px] border-collapse"},N0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},O0={class:"font-black text-blue-500 italic text-3xl"},L0={class:"p-8 font-black uppercase text-base border-r-[2px] border-lime-500/10"},G0={class:"p-8 text-center bg-black/5 border-r-[2px] border-lime-500/10"},U0={class:"font-black italic text-lime-600 text-5xl"},H0={class:"p-8 text-center font-black text-xl text-amber-600 border-r-[2px] border-lime-500/10"},j0={class:"p-8 text-[11px] font-bold uppercase opacity-60 border-r-[2px] border-lime-500/10"},F0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},V0={class:"p-8 font-black text-xl italic text-blue-600 uppercase tracking-tighter"},J0={class:"flex justify-between items-start"},W0={class:"flex-1 pr-4"},Q0={class:"text-[10px] font-black text-blue-500 mb-1"},q0={class:"text-4xl font-black italic text-lime-600"},z0={class:"border-l-[2px] pl-3 border-slate-300/30"},$0={class:"text-xl font-black block mt-1"},X0={class:"space-y-3"},Z0={class:"flex items-center gap-3"},Y0={class:"flex-1"},ed={class:"text-xs font-black uppercase text-indigo-500"},td={class:"flex items-center gap-3"},nd={class:"flex-1"},ad={class:"text-sm font-black italic text-blue-600 uppercase"},id={class:"flex flex-col gap-8 justify-center items-center pb-20"},ld={key:0,class:"flex flex-wrap justify-center items-center gap-2"},od=["disabled"],sd={key:0,class:"text-blue-600 font-black px-2"},rd=["onClick"],cd=["disabled"],ud={__name:"ListBag",props:["isDark"],setup(e){const t=oe(""),n=oe("All Class"),a=oe("All Slot"),i=oe(1),l=oe(10),s=()=>{l.value===10?l.value=c.value.length:l.value=10,i.value=1},r=h=>{if(!h||h==="-")return"-";let A=h.toString().replace(/x/gi,"").trim();return A==="0"||A===""?"-":A},c=te(()=>Xn.filter(A=>{const y=t.value.toLowerCase(),S=A.kelas_mob||"",E=!t.value||A.nama_item?.toLowerCase().includes(y)||A.monster?.toLowerCase().includes(y)||A.lokasi?.toLowerCase().includes(y);let R=!0;n.value!=="All Class"&&(n.value==="Mob"?R=S==="Mob"||S==="Miniboss/Mob":n.value==="Miniboss"?R=S==="Miniboss"||S==="Miniboss/Mob":R=S===n.value);const V=a.value==="All Slot"||String(A.slot).includes(String(a.value));return E&&R&&V}).sort((A,y)=>{const S=parseInt(String(A.slot).match(/\d+/))||0,E=parseInt(String(y.slot).match(/\d+/))||0;return S-E}));Mt([t,n,a],()=>{i.value=1});const p=te(()=>Math.ceil(c.value.length/l.value)||1),u=te(()=>{const h=p.value,A=i.value;if(h<=5)return Array.from({length:h},(S,E)=>E+1);let y=[];return A<=3?y=[1,2,3,"...",h]:A>=h-2?y=[1,"...",h-2,h-1,h]:y=[1,"...",A,"...",h],y}),d=te(()=>{const h=(i.value-1)*l.value;return c.value.slice(h,h+l.value)}),m=te(()=>[...new Set(Xn.map(A=>A.slot))].sort((A,y)=>(parseInt(A)||0)-(parseInt(y)||0))),b=te(()=>[{label:"ALL ITEM",val:Xn.length,grad:"from-blue-700 to-blue-500"},{label:"RESULTS",val:c.value.length,grad:"from-fuchsia-600 to-purple-600"},{label:"BOSS",val:Xn.filter(h=>h.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600"},{label:"SLOTS",val:m.value.length,grad:"from-lime-500 to-emerald-600"}]),v=h=>{const A="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return h==="Mob"?A+"bg-green-500/10 text-green-500 border-green-500/50":h==="Miniboss/Mob"?A+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":h==="Miniboss"?A+"bg-purple-500/10 text-purple-500 border-purple-500/50":h==="Boss"?A+"bg-red-500/10 text-red-500 border-red-500/50":h==="Spina"?A+"bg-amber-500/10 text-amber-500 border-amber-500/50":A+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(h,A)=>(T(),I("div",{class:w(["bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans relative z-10",e.isDark?"text-white":"text-slate-900"])},[o("div",k0,[o("div",{class:w(["relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[A[8]||(A[8]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:A0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),o("div",v0,[o("h2",{class:w(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[...A[5]||(A[5]=[Je(" LIST BAG",-1),o("br",null,null,-1),o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},"EXPANSION",-1)])],2),o("div",x0,[A[7]||(A[7]=o("div",{class:"flex items-center gap-3"},[o("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),o("img",{src:Ma,class:"h-8 md:h-12 w-auto object-contain"})],-1)),o("div",y0,[o("span",{class:w(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),A[6]||(A[6]=o("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),o("div",w0,[(T(!0),I($,null,me(b.value,y=>(T(),I("div",{key:y.label,class:w(["p-6 rounded-[2rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white",y.grad,e.isDark?"border-white/20":"border-black/5"])},[o("div",P0,O(y.label),1),o("div",M0,O(y.val),1)],2))),128))]),o("div",{class:w(["p-6 md:p-8 rounded-[2.5rem] border-[4px] backdrop-blur-xl shadow-2xl transition-all",e.isDark?"bg-black/40 border-indigo-500/50":"bg-white/80 border-indigo-600 shadow-indigo-100"])},[o("div",D0,[o("div",R0,[A[10]||(A[10]=o("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Search Item",-1)),o("div",S0,[ve(o("input",{"onUpdate:modelValue":A[0]||(A[0]=y=>t.value=y),type:"text",placeholder:"Find items...",class:w(["w-full h-14 pl-14 pr-6 rounded-2xl border-[3px] font-bold outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},null,2),[[ze,t.value]]),A[9]||(A[9]=o("div",{class:"absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"11",cy:"11",r:"8"}),o("path",{d:"m21 21-4.3-4.3"})])],-1))])]),o("div",C0,[A[13]||(A[13]=o("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Category",-1)),o("div",E0,[ve(o("select",{"onUpdate:modelValue":A[1]||(A[1]=y=>n.value=y),class:w(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[...A[11]||(A[11]=[o("option",null,"All Class",-1),o("option",null,"Mob",-1),o("option",null,"Miniboss",-1),o("option",null,"Boss",-1),o("option",null,"Spina",-1)])],2),[[it,n.value]]),A[12]||(A[12]=dn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><rect width="7" height="7" x="3" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="14" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="3" y="14" rx="1" data-v-b5293da0></rect></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])]),o("div",T0,[A[16]||(A[16]=o("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Jump to Slot",-1)),o("div",_0,[ve(o("select",{"onUpdate:modelValue":A[2]||(A[2]=y=>a.value=y),class:w(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[A[14]||(A[14]=o("option",null,"All Slot",-1)),(T(!0),I($,null,me(m.value,y=>(T(),I("option",{key:y,value:y},"Slot "+O(y),9,I0))),128))],2),[[it,a.value]]),A[15]||(A[15]=dn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><circle cx="12" cy="12" r="10" data-v-b5293da0></circle><line x1="12" y1="8" x2="12" y2="16" data-v-b5293da0></line><line x1="8" y1="12" x2="16" y2="12" data-v-b5293da0></line></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])])])],2),o("div",{class:w(["border-[4px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80 shadow-lime-100"])},[o("div",K0,[o("table",B0,[o("thead",null,[o("tr",{class:w(["uppercase text-[10px] font-black tracking-widest border-b-[3px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[...A[17]||(A[17]=[o("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Slot",-1),o("th",{class:"p-8 w-[20%] text-left border-r-[2px] border-lime-500/20"},"Item Name",-1),o("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Total Need",-1),o("th",{class:"p-8 w-[15%] text-center border-r-[2px] border-lime-500/20"},"Spina Cost",-1),o("th",{class:"p-8 w-[15%] text-left border-r-[2px] border-lime-500/20"},"Source",-1),o("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Type",-1),o("th",{class:"p-8 w-[20%] text-left"},"Location",-1)])],2)]),o("tbody",{class:w(["divide-y-[2px]",e.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(T(!0),I($,null,me(d.value,y=>(T(),I("tr",{key:y.id,class:"hover:bg-indigo-500/5 transition-all group"},[o("td",N0,[o("span",O0,O(y.slot),1)]),o("td",L0,O(y.nama_item),1),o("td",G0,[o("span",U0,O(r(y.jumlah)),1)]),o("td",H0,O(y.spina>0?Number(y.spina).toLocaleString():"-"),1),o("td",j0,O(y.monster||"-"),1),o("td",F0,[o("span",{class:w(v(y.kelas_mob))},O(y.kelas_mob),3)]),o("td",V0,O(y.lokasi),1)]))),128))],2)])]),o("div",{class:w(["lg:hidden divide-y-[3px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(T(!0),I($,null,me(d.value,y=>(T(),I("div",{key:y.id,class:"p-6 space-y-4"},[o("div",J0,[o("div",W0,[o("div",Q0,"SLOT "+O(y.slot),1),o("h3",{class:w(["font-black uppercase text-xl leading-tight",e.isDark?"text-white":"text-slate-900"])},O(y.nama_item),3)]),o("div",{class:w([v(y.kelas_mob),"!min-w-fit !px-2"])},O(y.kelas_mob),3)]),o("div",{class:w(["grid grid-cols-2 gap-3 border-[3px] p-4 rounded-2xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[o("div",null,[A[18]||(A[18]=o("span",{class:"text-[9px] font-black text-lime-600 uppercase block"},"Need",-1)),o("span",q0,O(r(y.jumlah)),1)]),o("div",z0,[A[19]||(A[19]=o("span",{class:"text-[9px] font-black text-amber-600 uppercase block"},"Cost",-1)),o("span",$0,O(y.spina>0?Number(y.spina).toLocaleString():"-"),1)])],2),o("div",X0,[o("div",Z0,[A[21]||(A[21]=dn('<div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-indigo-500" data-v-b5293da0><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" data-v-b5293da0></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-b5293da0></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-b5293da0></line></svg></div>',1)),o("div",Y0,[A[20]||(A[20]=o("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Drop From:",-1)),o("span",ed,O(y.monster||"-"),1)])]),o("div",td,[A[23]||(A[23]=o("div",{class:"w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3",class:"text-red-500"},[o("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),o("circle",{cx:"12",cy:"10",r:"3"})])],-1)),o("div",nd,[A[22]||(A[22]=o("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Map:",-1)),o("span",ad,O(y.lokasi),1)])])])]))),128))],2)],2),o("div",id,[p.value>1?(T(),I("div",ld,[o("button",{onClick:A[3]||(A[3]=y=>i.value--),disabled:i.value===1,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," « ",8,od),(T(!0),I($,null,me(u.value,(y,S)=>(T(),I($,{key:S},[y==="..."?(T(),I("span",sd,"...")):(T(),I("button",{key:1,onClick:E=>i.value=y,class:w(["h-12 w-12 rounded-xl border-[3px] font-black transition-all active:scale-90",i.value===y?"bg-blue-600 border-blue-600 text-white shadow-lg":e.isDark?"bg-black/40 border-blue-800 text-blue-400":"bg-white border-blue-200 text-blue-600"])},O(y),11,rd))],64))),128)),o("button",{onClick:A[4]||(A[4]=y=>i.value++),disabled:i.value===p.value,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," » ",8,cd)])):Ke("",!0),o("button",{onClick:s,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:brightness-110 active:scale-95 transition-all shadow-xl"},O(l.value===10?"Explore All Database":"Collapse to 10 Rows"),1)])])],2))}},dd=Vt(ud,[["__scopeId","data-v-b5293da0"]]),pd="/toram-vue/images/mq.png",ci=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],fd=()=>[...new Set(ci.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),md={class:"bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans"},gd={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},hd={class:"relative z-10 text-center md:text-left"},bd={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},Ad={class:"flex items-center gap-2 select-none whitespace-nowrap"},kd={class:"grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"},vd={class:"text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mb-1"},xd={class:"text-3xl md:text-6xl font-black italic tracking-tighter leading-none"},yd={class:"flex flex-col gap-2"},wd={class:"flex flex-col gap-2"},Pd=["value"],Md={class:"hidden lg:block overflow-x-auto"},Dd={class:"w-full border-collapse"},Rd={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},Sd={class:"p-8 text-center bg-black/5"},Cd={class:"font-black italic text-5xl text-indigo-600"},Ed={class:"flex justify-between items-center"},Td={class:"text-2xl font-black italic text-indigo-500/30"},_d={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},Id={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},Kd={class:"text-right"},Bd={class:"text-4xl font-black italic text-indigo-600"},Nd={class:"flex flex-col gap-6 justify-center items-center pb-20"},Od={key:0,class:"flex flex-wrap justify-center items-center gap-2"},Ld=["disabled"],Gd={key:0,class:"text-indigo-500 font-black px-2"},Ud=["onClick"],Hd=["disabled"],jd={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=Sa(),i=Wn(),l=oe(a.query.search||""),s=oe(a.query.chapter||"Semua Chapter"),r=oe(parseInt(a.query.page)||1),c=oe(parseInt(a.query.per_page)||10),p=fd(),u=te(()=>ci.filter(S=>{const E=l.value.toLowerCase(),R=S.nama_item.toLowerCase().includes(E)||S.chapter.toLowerCase().includes(E),V=s.value==="Semua Chapter"||S.chapter===s.value;return R&&V})),d=te(()=>Math.ceil(u.value.length/c.value)||1),m=te(()=>{const S=(r.value-1)*c.value;return u.value.slice(S,S+c.value)}),b=()=>{c.value===10?c.value=u.value.length:c.value=10,r.value=1,v()},v=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:s.value!=="Semua Chapter"?s.value:void 0,per_page:c.value,page:r.value}})},h=S=>{S>=1&&S<=d.value&&(r.value=S,v())};Mt([l,s],()=>{r.value=1,v()});const A=te(()=>{const S=d.value,E=r.value;if(S<=5)return Array.from({length:S},(V,ee)=>ee+1);let R=[];return E<=3?R=[1,2,3,"...",S]:E>=S-2?R=[1,"...",S-2,S-1,S]:R=[1,"...",E,"...",S],R}),y=te(()=>[{label:"ALL ITEM",val:ci.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:p.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:p.length>0?p[p.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]);return(S,E)=>(T(),I("div",md,[o("div",gd,[o("div",{class:w(["relative p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-[4px] shadow-2xl overflow-hidden backdrop-blur-xl transition-all",n.isDark?"border-indigo-500 bg-black/40":"border-indigo-600 bg-white/70 shadow-indigo-100"])},[E[7]||(E[7]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:pd,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),o("div",hd,[o("h2",{class:w(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[...E[4]||(E[4]=[Je(" MAIN QUEST",-1),o("br",null,null,-1),o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),o("div",bd,[E[6]||(E[6]=o("div",{class:"flex items-center gap-3"},[o("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),o("img",{src:Ma,class:"h-8 md:h-12 w-auto object-contain"})],-1)),o("div",Ad,[o("span",{class:w(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),E[5]||(E[5]=o("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),o("div",kd,[(T(!0),I($,null,me(y.value,R=>(T(),I("div",{key:R.label,class:w(["aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] border-white/20 shadow-xl text-white bg-gradient-to-br transition-all hover:scale-105 active:scale-95",R.grad])},[o("span",vd,O(R.label),1),o("span",xd,O(R.val),1)],2))),128))]),o("div",{class:w(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[o("div",yd,[E[8]||(E[8]=o("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),ve(o("input",{"onUpdate:modelValue":E[0]||(E[0]=R=>l.value=R),type:"text",placeholder:"Find MQ item...",class:w(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[ze,l.value]])]),o("div",wd,[E[10]||(E[10]=o("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),ve(o("select",{"onUpdate:modelValue":E[1]||(E[1]=R=>s.value=R),class:w(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[E[9]||(E[9]=o("option",{value:"Semua Chapter"},"All Chapter",-1)),(T(!0),I($,null,me(We(p),R=>(T(),I("option",{key:R,value:R},O(R),9,Pd))),128))],2),[[it,s.value]])])],2),o("div",{class:w(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[o("div",Md,[o("table",Dd,[o("thead",null,[o("tr",{class:w(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[o("th",{class:w(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),o("th",{class:w(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),o("th",{class:w(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),E[11]||(E[11]=o("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),o("tbody",{class:w(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(T(!0),I($,null,me(m.value,(R,V)=>(T(),I("tr",{key:V,class:"hover:bg-indigo-500/5 transition-all"},[o("td",{class:w(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},O((r.value-1)*c.value+V+1),3),o("td",{class:w(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[o("span",Rd,O(R.chapter),1)],2),o("td",{class:w(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},O(R.nama_item),3),o("td",Sd,[o("span",Cd,O(R.jumlah),1)])]))),128))],2)])]),o("div",{class:w(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(T(!0),I($,null,me(m.value,(R,V)=>(T(),I("div",{key:V,class:"p-6 space-y-4"},[o("div",Ed,[o("span",Td,"#"+O((r.value-1)*c.value+V+1),1),o("span",_d,O(R.chapter),1)]),o("div",{class:w(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[o("div",Id,O(R.nama_item),1),o("div",Kd,[E[12]||(E[12]=o("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),o("span",Bd,O(R.jumlah),1)])],2)]))),128))],2)],2),o("div",Nd,[d.value>1?(T(),I("div",Od,[o("button",{onClick:E[2]||(E[2]=R=>h(r.value-1)),disabled:r.value===1,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,Ld),(T(!0),I($,null,me(A.value,(R,V)=>(T(),I($,{key:V},[R==="..."?(T(),I("span",Gd,"...")):(T(),I("button",{key:1,onClick:ee=>h(R),class:w(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",r.value===R?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},O(R),11,Ud))],64))),128)),o("button",{onClick:E[3]||(E[3]=R=>h(r.value+1)),disabled:r.value===d.value,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,Hd)])):Ke("",!0),o("button",{onClick:b,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},O(c.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},Fd=Vt(jd,[["__scopeId","data-v-fbb29068"]]),Un="data:image/jpeg;base64,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",Ei="data:image/jpeg;base64,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",Ti="data:image/jpeg;base64,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",Hn="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEMAQgMBIgACEQEDEQH/xAAvAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQEAAAAAAAAAAAAAAAMCAAEE/9oADAMBAAIQAxAAAALneeq3N6YxITinTDAnozEmTYDNnc1Jk36ya03xNxQh2XBIwO8PQ+5S7efN6JekqjdjO3yuzKMLiKvm1JFgrc1Jm3wWbZybdtjTc4NQOO/AmvLAJKcBtzAO7//EAAL/2gAMAwEAAgADAAAAIc0nU/TKJNccTyFf+RLLPggHnfP/xAAC/9oADAMBAAIAAwAAABDhTpTB5g1LPEJAf6IdAjMNyGPz/8QAJBEAAQQBAwMFAAAAAAAAAAAAAQACAwQhEBESFCIxEzJScZH/2gAIAQIBAT8AB4nwFXmi3AcE2vDK3t2VujxBwujHxU8RZsdtK9ySEjOE2xHZi85XohSQNlg8Z2T2FjiCNIpXROBB+11TVTstLQCcFXoA7vas6044+Psb+K45wcACQnlDT//EACIRAAEEAQQCAwAAAAAAAAAAAAEAAgMRBBAhIjESFBNhgf/aAAgBAwEBPwAix2p4ZaJaU6eWN3K1i5lkbr2yoJQ6xemRiMlB2op0EmPJ1svlKjmMU31aY4PaCDpLE2RpB/F6xWVjkOsBYU5bxctq0sLKe/yPIrEALSSE3rX/xAAkEAADAAECBgMBAQAAAAAAAAAAAQIDERIEEBMhMVEiMkFhcf/aAAgBAQABPwLbP6zpejYKDpjxjgcib0Mi1WpNNE5Zr7G31y0KgqReCO/YqdtGhFXIsifO0aEmSd0biBw4ZGKMq7dqH1MT0tCpMrlJHouNtEPd8KL34bMObHxE7Mi7+zNw9Yb7H2nlD5Wt8f0iN+Pt5RriyLTK9rRhwcNDTWYzY92jMkdPJ/psoiiWJ6GvTrVeC/lTNKOF4mp+NM4rSoT5SyLFQmv06Kf1Ztc+ZGnr2Rjm626+D4GNJ+SYn0bVyTFT0ISLqkbq9n//xAAeEAADAAIDAQEBAAAAAAAAAAAAAREhMRBBUXFhIP/aAAgBAQABPyHCgl7mP8gmJ7IHwmIaZmMQ9vRP0h8kmHwZJXY5hkqaRm7wxDzwrFcFqTZFj0XnRlUFviFOBRaQuDetMwfR9hpmhqEshP6EydonEhNOgxgkmVwKJI/gjuKELwOhmKFRfbhrf08WxeqkOo74i+BDNLQbl4MN5BN6NjaNiBQQheI0MXZKyQWIWOODs8j/xAAeEAEBAQEAAgMBAQAAAAAAAAABABEhMUFRYYFxkf/aAAgBAQABPxBbRF9TtdCF5DC+2an3Kb1tEIZPV8L4lnZvW56gDO2EAB9FkoJPFjyx9XpfSY+Kc85PO5IaiEyZhpYEeLf5xHMYQOPJEe2iGd9GXgif7fpiR98/i4MT8i0nL8Tky+x0YsfQaDNoPEtrzMMduiF9IWfwdIeHInl5iR4HGyVy0IdhdJShfhYYmU2fgrSw92H6hEw54fM7t8t9ipIFPG8S5lebLKPpG4ckcbHOxh2eHd2cDvcvE/SJoJZbj5RxpxSVgbA5iJhiPU1ojGebv+hI22/kT5voJre5v//Z",_i="data:image/jpeg;base64,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",Ii="data:image/jpeg;base64,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",Ht=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
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
Aggro +25%`},{code:396,link:null,type:"SPECIAL",name:"Zodiac's Blessing (EN)",view:`
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
Physical Pierce +10%`},{code:512,link:402,type:"UPGRADE",name:"Abyssal Crystal Monster (EN)",view:`
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
Kecepatan Item -1.0s`}],Ki="/toram-vue/assets/enhance_weapon_crysta-eGLehiWn.png",Bi="/toram-vue/assets/enhance_armor_crysta-YvncoZmF.png",Ni="/toram-vue/assets/enhance_additional_crysta-mE1Kazx1.png",Oi="/toram-vue/assets/enhace_special_crysta-CIVkxwj2.png";function Vd(e){const t={};return e&&e.split(`
`).map(n=>n.trim()).forEach(n=>{if(!n.match(/[+-]\s*\d/))return;const a=n.match(/^(.+?)\s*([+-])\s*(\d+)(%)?$/);if(!a)return;const[,i,l,s]=a;t[i.trim().toUpperCase()]={sign:l,value:Number(s)}}),t}const Jd={class:"fixed inset-0 pointer-events-none z-0"},Wd={key:0,class:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Qd={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse",style:{"animation-delay":"2s"}},qd={class:"relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-8 md:space-y-14"},zd={class:"flex items-center gap-6"},$d={class:"text-center md:text-left space-y-1"},Xd={class:"flex items-center gap-3"},Zd={class:"text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all"},Yd={class:"flex flex-col items-center md:items-end gap-3"},ep={class:"flex gap-2"},tp={class:"space-y-2 col-span-2 md:col-span-2 lg:col-span-2"},np={class:"relative group"},ap={class:"space-y-2 col-span-1"},ip={class:"relative group"},lp={class:"space-y-0 w-full col-span-2 lg:col-span-3"},op={class:"flex flex-col md:flex-row items-center gap-3 w-full"},sp={class:"relative group w-full"},rp={class:"relative py-4 flex items-center justify-center"},cp={class:"space-y-10 relative z-10 pb-32"},up={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},dp=["onClick"],pp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},fp={class:"lg:col-span-6 relative group"},mp={class:"relative p-6 md:p-10"},gp={class:"flex flex-col md:flex-row gap-8 items-start"},hp={class:"relative shrink-0 mx-auto md:mx-0"},bp=["src","alt"],Ap={class:"flex-1 space-y-6 w-full"},kp={class:"space-y-2"},vp={class:"grid grid-cols-1 gap-4"},xp={key:0,class:"w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0"},yp={class:"flex items-center gap-4"},wp={class:"flex flex-col"},Pp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Mp=["onClick"],Dp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Rp={key:0,class:"py-40 text-center animate-pulse"},Sp={class:"flex flex-col items-center gap-10 py-20"},Cp={key:0,class:"flex flex-wrap justify-center items-center gap-3"},Ep=["disabled"],Tp={class:"flex gap-2.5 items-center"},_p=["onClick"],Ip={key:1,class:"px-2 font-black text-blue-500"},Kp=["disabled"],Bp={class:"flex items-center gap-4 opacity-50"},Np={class:"text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"},Op={class:"fixed bottom-8 left-8 z-[200] hidden lg:block"},Lp={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t=new Map;function n(K){return t.has(K.code)||t.set(K.code,Vd(K.view)),t.get(K.code)}const a=Wn();function i(){l.value="",s.value=[],r.value=[],m.value="asc",d.value=10,a.push({query:{}})}const l=oe(""),s=oe([]),r=oe([]),c=oe(!1),p=oe(!1),u=oe(1),d=oe(10),m=oe("asc"),b=oe(null),v=oe(null),h=Sa(),A=te(()=>{try{return h.query.filter?JSON.parse(h.query.filter):null}catch{return null}}),y=()=>{l.value="",s.value=[],r.value=[],u.value=1},S=K=>{const x=K.type?.toUpperCase();if(x!=="UPGRADE")return ee[x]||Un;const ae=Pe(K);return ee[`${ae}_UPGRADE`]||Hn},E=K=>({NORMAL:"bg-blue-500/10 text-blue-500 border-blue-500/40",UPGRADE:"bg-purple-500/10 text-purple-500 border-purple-500/40",ADDITIONAL:"bg-yellow-500/10 text-yellow-500 border-yellow-500/40",WEAPON:"bg-red-500/10 text-red-500 border-red-500/40",ARMOR:"bg-green-500/10 text-green-500 border-green-500/40",SPECIAL:"bg-pink-500/10 text-pink-500 border-pink-500/40"})[K?.toUpperCase()]||"bg-slate-500/10 text-slate-500 border-slate-500/40",R=K=>K.link?Ht.find(x=>String(x.code)===String(K.link)):null,V=K=>Ht.filter(x=>String(x.link)===String(K.code)),ee={NORMAL:Un,UPGRADE:Hn,ADDITIONAL:Ti,ADDITIONAL_UPGRADE:Ni,ARMOR:_i,ARMOR_UPGRADE:Bi,WEAPON:Ei,WEAPON_UPGRADE:Ki,SPECIAL:Ii,SPECIAL_UPGRADE:Oi},re=K=>{if(!K)return null;let x=K,ae=0;for(;x.link&&ae<10;){const ge=Ht.find(F=>String(F.code)===String(x.link));if(!ge)break;x=ge,ae++}return x},Pe=K=>re(K)?.type?.toUpperCase()||"NORMAL",Q=K=>{if(!K)return"text-cyan-500";const x=K.type?.toUpperCase();if(x==="UPGRADE"||x==="ENHANCER")return"text-gray-400";const ae=Pe(K);return{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[ae]||"text-cyan-500"},Y=K=>K?Array.isArray(K)?K:K.split(/,|\n/).map(x=>x.trim()).filter(x=>x):[],se=K=>{l.value=K,window.scrollTo({top:0,behavior:"smooth"})},G=te(()=>{let K=Ht.filter(x=>x.name?.trim());if(A.value){const{stats:x,types:ae}=A.value;x&&Object.keys(x).length>0&&(K=K.filter(ge=>{const F=n(ge);return Object.entries(x).every(([we,pe])=>{const Te=F[we.toUpperCase()];return!(!Te||Te.sign!==pe.sign||pe.value!==null&&(pe.op===">="&&Te.value<pe.value||pe.op==="<="&&Te.value>pe.value))})})),ae&&ae.length>0&&(K=K.filter(ge=>{const F=Pe(ge),we=ge.type==="UPGRADE";return ae.some(pe=>{if(!pe.includes("_"))return!we&&F===pe;const[Te,ht]=pe.split("_");return ht==="UPGRADE"&&we&&F===Te})}))}if(l.value){const x=l.value.toLowerCase();K=K.filter(ae=>ae.name.toLowerCase().includes(x))}return s.value.length>0&&(K=K.filter(x=>{const ae=Pe(x),ge=x.type==="UPGRADE";return s.value.some(F=>{if(!F.includes("_"))return!ge&&ae===F;const[we,pe]=F.split("_");return pe==="UPGRADE"&&ge&&ae===we})})),r.value.length>0&&(K=K.filter(x=>{const ae=(x.view||"").toUpperCase();return r.value.every(ge=>ae.includes(ge.toUpperCase()))})),K.sort((x,ae)=>m.value==="asc"?x.name.localeCompare(ae.name):ae.name.localeCompare(x.name))}),ne=te(()=>{const K=(u.value-1)*d.value;return G.value.slice(K,K+d.value)}),Me=te(()=>Math.ceil(G.value.length/d.value)||1),Le=te(()=>{let K=Math.max(1,u.value-2),x=Math.min(Me.value,K+4);x-K<4&&(K=Math.max(1,x-4));const ae=[];for(let ge=K;ge<=x;ge++)ae.push(ge);return ae}),ye=K=>{b.value&&!b.value.contains(K.target)&&(c.value=!1),v.value&&!v.value.contains(K.target)&&(p.value=!1)};return tn(()=>{window.addEventListener("click",ye)}),wi(()=>{window.removeEventListener("click",ye)}),Mt([l,s,r,d,m],()=>{u.value=1}),(K,x)=>{const ae=sa("RouterLink"),ge=sa("router-link");return T(),I("div",{class:w(["min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent",e.isDark?"text-slate-200":"text-slate-900"])},[o("div",Jd,[o("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),x[6]||(x[6]=o("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-transparent"},null,-1)),e.isDark?(T(),I("div",Wd)):Ke("",!0),e.isDark?(T(),I("div",Qd)):Ke("",!0)]),o("div",qd,[o("header",{class:w(["relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500",e.isDark?"border-white/5":"border-black/5"])},[o("div",zd,[x[9]||(x[9]=o("div",{class:"relative group"},[o("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"}),o("img",{src:Ma,class:"relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110",alt:"Logo"})],-1)),o("div",$d,[o("div",Xd,[o("h1",Zd,[o("span",{class:w(K.text-K.white)},"TIMI ",2),x[7]||(x[7]=o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"},"DB",-1))]),x[8]||(x[8]=o("div",{class:"px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase"},"Bahasa Indonesia",-1))]),o("p",{class:w(["text-xs font-black uppercase tracking-[0.5em] opacity-60",e.isDark?"text-slate-400":"text-slate-500"])},"Toram Online Database",2)])]),o("div",Yd,[o("div",{class:w(["group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white border-slate-200 shadow-xl shadow-slate-200/50"])},[x[10]||(x[10]=o("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"},null,-1)),o("span",{class:w(["relative text-xs font-black uppercase tracking-[0.2em]",e.isDark?"text-cyan-400":"text-blue-600"])}," Results : "+O(G.value.length)+" Xtall ",3)],2),o("div",ep,[(T(),I($,null,me(3,F=>o("div",{key:F,class:"w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"})),64))])])],2),xe(ae,{to:"/xtall/advanced",class:"mb-6 block w-full rounded-2xl border-2 border-indigo-500 bg-gradient-to-t from-indigo-400 to-purple-500 px-6 py-5 text-center text-lg font-black text-white shadow-xl hover:scale-[1.02] transition"},{default:Ye(()=>[...x[11]||(x[11]=[Je(" 🔎 Advanced Xtall Search ",-1)])]),_:1}),o("section",{class:w(["grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl",e.isDark?"bg-slate-950/60 border-red/100 shadow-black/40":"bg-red/80 border-slate-200 shadow-slate-300/50"])},[o("div",tp,[x[14]||(x[14]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2"},[o("span",{class:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"}),Je(" Search Name ")],-1)),o("div",np,[x[12]||(x[12]=o("div",{class:"absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"},null,-1)),ve(o("input",{"onUpdate:modelValue":x[0]||(x[0]=F=>l.value=F),type:"text",placeholder:"Search xtall name...",class:w(["relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm",e.isDark?"bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600":"bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400"])},null,2),[[ze,l.value]]),x[13]||(x[13]=o("svg",{class:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-width":"3"})],-1))])]),o("div",ap,[x[17]||(x[17]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4"},"Scale",-1)),o("div",ip,[ve(o("select",{"onUpdate:modelValue":x[1]||(x[1]=F=>d.value=F),class:w(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200":"bg-white border-slate-200 focus:border-purple-500 shadow-sm"])},[...x[15]||(x[15]=[o("option",{value:10},"10 Units",-1),o("option",{value:25},"25 Units",-1),o("option",{value:50},"50 Units",-1),o("option",{value:9999},"Show All",-1)])],2),[[it,d.value]]),x[16]||(x[16]=o("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"})],-1))])]),o("div",lp,[x[21]||(x[21]=o("div",{class:"flex items-center gap-2 ml-4"},[o("div",{class:"w-1.5 h-4 bg-red-600 rounded-full"}),o("label",{class:"text-[11px] font-[1000] uppercase tracking-[0.25em] text-red-600"}," Sequence & Reset Control Center ")],-1)),o("div",op,[o("div",sp,[ve(o("select",{"onUpdate:modelValue":x[2]||(x[2]=F=>m.value=F),class:w(["w-full h-[60px] px-6 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-12",e.isDark?"bg-slate-900 border-white/10 focus:border-red-500 text-slate-200":"bg-white border-slate-200 focus:border-red-500 shadow-sm"])},[...x[18]||(x[18]=[o("option",{value:"asc"},"Sequence: A to Z",-1),o("option",{value:"desc"},"Sequence: Z to A",-1)])],2),[[it,m.value]]),x[19]||(x[19]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-500"},[o("svg",{class:"w-5 h-5 group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))]),o("button",{onClick:i,class:"h-[60px] w-full px-1 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]"},[...x[20]||(x[20]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 group-hover:rotate-180 transition-transform duration-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),o("span",{class:"whitespace-nowrap"},"Reset",-1)])])])])],2),o("div",rp,[o("div",{class:w(["absolute inset-0 h-[1px] my-auto",e.isDark?"bg-white/5":"bg-slate-200"])},null,2),x[22]||(x[22]=o("div",{class:"absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"},null,-1)),o("div",{class:w(["relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all",e.isDark?"bg-[#020617] border-white/10 text-slate-500":"bg-transparent-50 border-slate-200 text-slate-400"])}," Xtall Versi Indonesia ",2)]),o("main",cp,[(T(!0),I($,null,me(ne.value,(F,we)=>(T(),I("div",{key:F.code,class:"flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry",style:Pt({animationDelay:we*70+"ms"})},[o("div",up,[R(F)?(T(),I("div",{key:0,onClick:pe=>se(R(F).name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/300 border-white/65 hover:border-cyan-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-cyan-400"])},[x[23]||(x[23]=dn('<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-7bbcb7cc></div><div class="flex items-center gap-2 mb-2" data-v-7bbcb7cc><svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" data-v-7bbcb7cc><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-7bbcb7cc></path></svg><span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest" data-v-7bbcb7cc>Previous</span></div>',2)),o("p",{class:w(["text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},O(R(F).name),3),x[24]||(x[24]=o("div",{class:"absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🧬",-1))],10,dp)):(T(),I("div",pp,[...x[25]||(x[25]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))]),o("div",fp,[o("div",{class:w(["absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",F.type==="UPGRADE"?"bg-purple-600":"bg-blue-600"])},null,2),o("div",{class:w(["h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl",e.isDark?"bg-[#0b1226]/90 border-white/80 group-hover:border-white/80":"bg-white border-slate-200 group-hover:border-blue-400"])},[o("div",mp,[o("div",gp,[o("div",hp,[x[26]||(x[26]=o("div",{class:"absolute inset-0 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"},null,-1)),o("div",{class:w(["relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110",e.isDark?"bg-slate-950 border-white/70":"bg-slate-50 border-slate-200"])},[o("img",{src:S(F),class:"w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]",alt:F.type},null,8,bp)],2),o("div",{class:w(["absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black",E(F.type)])},O(F.type.charAt(0)),3)]),o("div",Ap,[o("div",kp,[x[27]||(x[27]=o("div",{class:"flex flex-wrap items-center gap-3"},null,-1)),o("h3",{class:w(["text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400",Q(F)])},O(F.name),3)]),o("div",{class:w(["p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]",e.isDark?"bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]":"bg-slate-50 border-slate-100"])},[o("div",vp,[(T(!0),I($,null,me(Y(F.view),(pe,Te)=>(T(),I("div",{key:Te,class:"flex items-center gap-4 group/item"},[pe.includes("Dengan")?Ke("",!0):(T(),I("div",xp)),o("p",{class:w(["text-xs md:text-sm font-bold tracking-tight transition-all duration-300",pe.includes("Dengan")?"text-green-500 italic":pe.includes("-")?"text-red-500":e.isDark?"text-slate-300 group-hover/item:text-white":"text-slate-600 group-hover/item:text-slate-900"])},O(pe),3)]))),128))])],2)])])]),o("div",{class:w(["px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4",e.isDark?"bg-white/[0.02] border-white/5":"bg-slate-50 border-slate-100"])},[o("div",yp,[o("div",wp,[o("span",{class:w(["text-[10px] font-black tracking-widest transition-colors",e.isDark?"text-slate-400":"text-slate-500"])}," TYPE XTALL ",2),o("span",{class:w(["text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter",E(F.type)])},O(F.type),3)]),x[28]||(x[28]=o("div",{class:"h-8 w-[1px] bg-white/10 hidden sm:block"},null,-1))]),xe(ge,{to:"/xtall/"+F.code,class:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"},{default:Ye(()=>[...x[29]||(x[29]=[Je(" Details ",-1)])]),_:1},8,["to"])],2)],2)]),o("div",Pp,[V(F).length?(T(!0),I($,{key:0},me(V(F),pe=>(T(),I("div",{key:pe.code,onClick:Te=>se(pe.name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/65 hover:border-purple-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-purple-400"])},[x[30]||(x[30]=dn('<div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-600 to-yellow-700 opacity-40 group-hover:opacity-100 transition-opacity" data-v-7bbcb7cc></div><div class="flex items-center justify-end gap-2 mb-2 text-right" data-v-7bbcb7cc><span class="text-[9px] font-black uppercase text-purple-500 tracking-widest" data-v-7bbcb7cc>Next Upgrade</span><svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24" data-v-7bbcb7cc><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-7bbcb7cc></path></svg></div>',2)),o("p",{class:w(["text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},O(pe.name),3),x[31]||(x[31]=o("div",{class:"absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🚀",-1))],10,Mp))),128)):(T(),I("div",Dp,[...x[32]||(x[32]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))])],4))),128)),G.value.length===0?(T(),I("div",Rp,[x[33]||(x[33]=dn('<div class="inline-flex relative mb-8" data-v-7bbcb7cc><div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping" data-v-7bbcb7cc></div><div class="text-8xl relative" data-v-7bbcb7cc>🔎</div></div><h2 class="text-3xl font-[1000] uppercase italic tracking-tighter" data-v-7bbcb7cc>Xtall not found</h2><p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4" data-v-7bbcb7cc>Search xtall name with correct Indonesian name.</p>',3)),o("button",{onClick:y,class:"mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"},"Reset")])):Ke("",!0),o("div",Sp,[Me.value>1&&d.value<1e3?(T(),I("nav",Cp,[o("button",{onClick:x[3]||(x[3]=F=>u.value--),disabled:u.value===1,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," « ",8,Ep),o("div",Tp,[(T(!0),I($,null,me(Le.value,F=>(T(),I($,{key:F},[F!=="..."?(T(),I("button",{key:0,onClick:we=>u.value=F,class:w(["w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center",u.value===F?"bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1":e.isDark?"bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500":"bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm"])},O(F),11,_p)):(T(),I("span",Ip,"..."))],64))),128))]),o("button",{onClick:x[4]||(x[4]=F=>u.value++),disabled:u.value===Me.value,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," » ",8,Kp)])):Ke("",!0),d.value<100?(T(),I("button",{key:1,onClick:x[5]||(x[5]=F=>d.value=9999),class:"group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl"},[...x[34]||(x[34]=[o("div",{class:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"},null,-1),o("span",{class:"relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic"},"Explore All",-1)])])):Ke("",!0),o("div",Bp,[x[35]||(x[35]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1)),o("p",Np,"Page "+O(u.value)+" of "+O(Me.value),1),x[36]||(x[36]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1))])])])]),o("div",Op,[o("div",{class:w(["px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500",e.isDark?"bg-slate-900/80 border-white/10":"bg-white/80 border-slate-200 shadow-2xl"])},[...x[37]||(x[37]=[o("div",{class:"flex items-center gap-4"},[o("div",{class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),o("span",{class:"text-[9px] font-black uppercase tracking-widest opacity-60"},"Versi Nama Indonesia")],-1)])],2)])],2)}}},Gp=Vt(Lp,[["__scopeId","data-v-7bbcb7cc"]]),Vl=310,Va={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Ja={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5},Gt=e=>Math.floor(.025*Math.pow(e,4)+2*e),Up=(e,t,n)=>{let a=Math.floor((1-t/100)*Gt(e));for(let i=e+1;i<n;i++)a+=Gt(i);return a},Wa=(e,t,n)=>{let a=n,i=(1-t/100)*Gt(e);if(n<i){let l=t/100*Gt(e)+n;return[e,Math.floor(100*l/Gt(e))]}else{a-=i;let l=e+1;for(;Gt(l)<=a;)a-=Gt(l),l+=1;let s=Math.floor(100*a/Gt(l));return[l,s]}},Hp={class:"space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4"},jp={class:"flex flex-col items-center gap-6 animate-bounce-slow"},Fp={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},Vp={class:"lg:col-span-2 space-y-6"},Jp={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},Wp={class:"group"},Qp={class:"group"},qp={class:"group"},zp={key:0,class:"space-y-8 animate-in slide-in-from-top-2"},$p={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},Xp={class:"relative group select-container"},Zp={class:"relative"},Yp=["value"],ef={class:"relative group select-container"},tf={class:"relative"},nf=["value"],af={class:"flex flex-wrap gap-8 ml-2"},lf={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},of={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},sf={key:1,class:"space-y-8 animate-in slide-in-from-top-2"},rf={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},cf={class:"relative group select-container"},uf={class:"relative"},df=["value"],pf={class:"lg:col-span-1"},ff={class:"space-y-6 sticky top-8"},mf={class:"relative z-10 space-y-8"},gf={class:"result-item"},hf={class:"text-2xl font-black tabular-nums tracking-tighter"},bf={class:"pt-8 border-t border-white/20 result-item"},Af={class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-2"},kf={class:"flex items-baseline gap-2"},vf={class:"text-6xl font-black italic tracking-tighter drop-shadow-lg block"},xf={class:"text-xl font-bold opacity-70"},yf={class:"bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item"},wf={class:"text-sm font-black tabular-nums tracking-wide"},Pf={class:"absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text"},Mf={class:"space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll"},Df={class:"text-[11px] font-black opacity-40"},Rf={class:"text-right"},Sf={class:"text-[10px] font-bold opacity-50 ml-1"},Cf={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=oe("mq"),n=oe(1),a=oe(0),i=oe(Vl),l=oe(!0),s=oe(!1),r=Object.keys(Ja),c=oe(1),p=oe(r.length-1),u=oe(Object.keys(Va)[1]),d=oe(1),m=te(()=>{let v=[],h=0;return r.forEach((A,y)=>{A.startsWith("Chapter")?h++:Ja[A]!==""&&v.push({id:y,label:`CH${h} - ${A}`})}),v}),b=te(()=>{const v=Number(n.value)||1,h=Number(a.value)||0,A=Number(i.value)||Vl,y=Up(v,h,A);let S=0;for(let Q=c.value;Q<=p.value;Q++){const Y=Ja[r[Q]];typeof Y=="number"&&(S+=Y),r[Q].includes("Coenubia")&&!l.value&&(S+=125e5)}const[E,R]=Wa(v,h,S);let V=[];if(s.value&&S>0){let Q=v,Y=h;for(let se=1;se<=20;se++){const[G,ne]=Wa(Q,Y,S);if(V.push({run:se,lv:G,p:ne}),Q=G,Y=ne,Q>=A)break}}const ee=(Va[u.value]||0)*(d.value||0),[re,Pe]=Wa(v,h,ee);return{xpNeeded:y,totalMqXP:S,resLv:E,resP:R,diaryRuns:V,sqLv:re,sqPercent:Pe,sqXP:ee}});return(v,h)=>(T(),I("div",Hp,[o("div",jp,[h[11]||(h[11]=o("div",{class:"text-center"},[o("h1",{class:"text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl"}," MQ Calculator "),o("p",{class:"text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse"},"Timi DB System")],-1)),o("div",{class:w(["p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl",e.isDark?"bg-white/5 border-white/10":"bg-slate-200/50 border-slate-300"])},[o("button",{onClick:h[0]||(h[0]=A=>t.value="mq"),class:w(["tab-btn",t.value==="mq"?"tab-active":""])},"Main Quest",2),o("button",{onClick:h[1]||(h[1]=A=>t.value="npc"),class:w(["tab-btn",t.value==="npc"?"tab-active":""])},"NPC Quest",2)],2)]),o("div",Fp,[o("div",Vp,[o("div",{class:w(["p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/60 border-white/40"])},[o("div",Jp,[o("div",Wp,[h[12]||(h[12]=o("label",{class:"label-text"},"Current Lv",-1)),ve(o("input",{"onUpdate:modelValue":h[2]||(h[2]=A=>n.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,n.value,void 0,{number:!0}]])]),o("div",Qp,[h[13]||(h[13]=o("label",{class:"label-text"},"Percent %",-1)),ve(o("input",{"onUpdate:modelValue":h[3]||(h[3]=A=>a.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,a.value,void 0,{number:!0}]])]),o("div",qp,[h[14]||(h[14]=o("label",{class:"label-text text-pink-500"},"Target Lv",-1)),ve(o("input",{"onUpdate:modelValue":h[4]||(h[4]=A=>i.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(T(),I("div",zp,[o("div",$p,[o("div",Xp,[h[16]||(h[16]=o("label",{class:"label-text text-indigo-400"},"Start From",-1)),o("div",Zp,[ve(o("select",{"onUpdate:modelValue":h[5]||(h[5]=A=>c.value=A),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(T(!0),I($,null,me(m.value,A=>(T(),I("option",{key:A.id,value:A.id,class:"dropdown-item"},O(A.label),9,Yp))),128))],2),[[it,c.value]]),h[15]||(h[15]=o("div",{class:"select-arrow text-indigo-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",ef,[h[18]||(h[18]=o("label",{class:"label-text text-indigo-400"},"End At",-1)),o("div",tf,[ve(o("select",{"onUpdate:modelValue":h[6]||(h[6]=A=>p.value=A),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(T(!0),I($,null,me(m.value,A=>(T(),I("option",{key:A.id,value:A.id,class:"dropdown-item"},O(A.label),9,nf))),128))],2),[[it,p.value]]),h[17]||(h[17]=o("div",{class:"select-arrow text-indigo-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])]),o("div",af,[o("label",lf,[ve(o("input",{type:"checkbox","onUpdate:modelValue":h[7]||(h[7]=A=>l.value=A),class:"w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer"},null,512),[[Pl,l.value]]),h[19]||(h[19]=o("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),o("label",of,[ve(o("input",{type:"checkbox","onUpdate:modelValue":h[8]||(h[8]=A=>s.value=A),class:"w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer"},null,512),[[Pl,s.value]]),h[20]||(h[20]=o("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])])])):(T(),I("div",sf,[o("div",rf,[o("div",cf,[h[22]||(h[22]=o("label",{class:"label-text text-emerald-400"},"Select Quest",-1)),o("div",uf,[ve(o("select",{"onUpdate:modelValue":h[9]||(h[9]=A=>u.value=A),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(T(!0),I($,null,me(We(Va),(A,y)=>(T(),I("option",{key:y,value:y,class:"dropdown-item"},O(y),9,df))),128))],2),[[it,u.value]]),h[21]||(h[21]=o("div",{class:"select-arrow text-emerald-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",null,[h[23]||(h[23]=o("label",{class:"label-text text-emerald-400"},"Amount (Stack/Times)",-1)),ve(o("input",{"onUpdate:modelValue":h[10]||(h[10]=A=>d.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,d.value,void 0,{number:!0}]])])])]))],2)]),o("div",pf,[o("div",ff,[o("div",{class:w(["p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive",t.value==="mq"?"bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30":"bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30"])},[o("div",mf,[o("div",gf,[h[24]||(h[24]=o("p",{class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-1"},"XP Required to Target",-1)),o("h3",hf,O(b.value.xpNeeded.toLocaleString()),1)]),o("div",bf,[o("p",Af,O(t.value==="mq"?"Result After 1 Run":"Result After Turn-in"),1),o("div",kf,[o("span",vf," Lv "+O(t.value==="mq"?b.value.resLv:b.value.sqLv),1),o("span",xf,O(t.value==="mq"?b.value.resP:b.value.sqPercent)+"% ",1)])]),o("div",yf,[h[25]||(h[25]=o("p",{class:"text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1"},"Total XP Gained",-1)),o("p",wf,O((t.value==="mq"?b.value.totalMqXP:b.value.sqXP).toLocaleString())+" XP ",1)])]),o("div",Pf,O(t.value),1)],2),t.value==="mq"&&s.value&&b.value.diaryRuns.length>0?(T(),I("div",{key:0,class:w(["p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4",e.isDark?"bg-white/5 border-white/10":"bg-white border-slate-200 shadow-lg"])},[h[26]||(h[26]=o("p",{class:"text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2"},"Diary Projection",-1)),o("div",Mf,[(T(!0),I($,null,me(b.value.diaryRuns,A=>(T(),I("div",{key:A.run,class:"flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors"},[o("span",Df,"RUN #"+O(A.run),1),o("div",Rf,[o("span",{class:w(["font-black",e.isDark?"text-white":"text-slate-800"])},"Lv "+O(A.lv),3),o("span",Sf,O(A.p)+"%",1)])]))),128))])],2)):Ke("",!0)])])])]))}},Ef=Vt(Cf,[["__scopeId","data-v-c84703e0"]]),Tf=280,Jl=54,_f=55,Wl=265,If=300,It=510,Kt=277,{floor:_e,min:Kf,max:Bf}=Math,Nf=(e,t,n,a,i)=>{const l=_e(n*(100+(i||0))/100+(a||0));return(e||0)+_e((t||0)/2)+_e(l/6)},Of=(e,t,n,a,i,l)=>{const s=_e(a*(100+(l||0))/100+(i||0)),r=(50+5*(e||0))/100,c=10+(t||0)-(n||0)+_e(s/10);return Kf(100,Bf(0,_e(r*c)))},Lf=(e,t,n,a,i)=>{let l=_e((e||0)*(1+(t||0)*.01+(n||0)*.02));const s=i;switch(a){case"Armor":l+=_e(s.VIT/10);break;case"1H Sword":case"Bow":l+=_e((s.DEX+s.STR)/20);break;case"2H Sword":l+=_e(s.STR/10);break;case"Bowgun":l+=_e(s.DEX/10);break;case"Staff":l+=_e(s.INT/10);break;case"Magic Device":l+=_e((s.INT+s.AGI)/20);break;case"Knuckle":l+=_e(s.AGI/10);break;case"Halberd":l+=_e((s.STR+s.AGI)/20);break;case"Katana":l+=_e((s.DEX+s.AGI)/20);break}return l},Gf={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},Uf={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},Hf={class:"lg:col-span-4 space-y-6 animate-float"},jf={class:"grid grid-cols-2 gap-x-4 gap-y-5"},Ff={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},Vf=["onUpdate:modelValue"],Jf={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},Wf={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},Qf=["onUpdate:modelValue"],qf={class:"lg:col-span-4 space-y-6"},zf={class:"space-y-4"},$f={class:"relative group select-container"},Xf={class:"relative overflow-hidden rounded-xl"},Zf=["value"],Yf={class:"grid grid-cols-2 gap-4"},em={class:"group"},tm={class:"group"},nm={class:"space-y-3 pt-2"},am={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},im=["onUpdate:modelValue"],lm={class:"lg:col-span-4 space-y-6 animate-float-slow"},om={class:"flex items-baseline gap-2"},sm={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},rm={class:"flex items-baseline gap-2"},cm={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},um={class:"space-y-4"},dm={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},pm={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},fm={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},mm={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=te(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=bn({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:Tf,createSkill:10,itemDiff:Wl,basePot:Jl,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(p=>i.stats[p]=0),i.craftType==="Armor"?(i.stats.VIT=It,i.stats.TEC=Kt,i.itemDiff=Wl,i.basePot=Jl):(i.itemDiff=If,i.basePot=_f,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=It,i.stats.STR=Kt):i.craftType==="2H Sword"?(i.stats.STR=It,i.stats.DEX=Kt):i.craftType==="Staff"?(i.stats.INT=It,i.stats.TEC=Kt):i.craftType==="Magic Device"?(i.stats.INT=It,i.stats.AGI=Kt):i.craftType==="Knuckle"?(i.stats.AGI=It,i.stats.DEX=Kt):i.craftType==="Halberd"?(i.stats.STR=It,i.stats.AGI=Kt):i.craftType==="Katana"&&(i.stats.DEX=It,i.stats.AGI=Kt))};tn(()=>l());const s=te(()=>Nf(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),r=te(()=>Of(i.createSkill,s.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),c=te(()=>Lf(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(p,u)=>(T(),I("div",Gf,[u[17]||(u[17]=o("div",{class:"text-center py-4 animate-bounce-slow"},[o("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),o("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),o("div",Uf,[o("div",Hf,[o("div",{class:w(n.value)},[u[3]||(u[3]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),o("div",jf,[(T(!0),I($,null,me(i.stats,(d,m)=>(T(),I("div",{key:m,class:"transition-all hover:scale-105"},[o("label",Ff,O(m),1),ve(o("input",{type:"number","onUpdate:modelValue":b=>i.stats[m]=b,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,Vf),[[ze,i.stats[m],void 0,{number:!0}]])]))),128))]),o("div",Jf,[(T(),I($,null,me([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>o("div",{key:d[0]},[o("label",Wf,O(d[1]),1),ve(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,Qf),[[ze,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),o("div",qf,[o("div",{class:w([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),o("div",zf,[o("div",$f,[u[5]||(u[5]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),o("div",Xf,[ve(o("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(T(),I($,null,me(a,d=>o("option",{key:d,value:d,class:"dropdown-item"},O(d),9,Zf)),64))],544),[[it,i.craftType]]),u[4]||(u[4]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",Yf,[o("div",em,[u[6]||(u[6]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),ve(o("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[ze,i.prof,void 0,{number:!0}]])]),o("div",tm,[u[7]||(u[7]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),ve(o("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[ze,i.level,void 0,{number:!0}]])])]),o("div",nm,[(T(),I($,null,me([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>o("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[o("span",am,O(d[1]),1),ve(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,im),[[ze,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),o("div",lm,[o("div",{class:w([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=o("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=o("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),o("div",om,[o("span",{class:w(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",r.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},O(r.value),3),u[9]||(u[9]=o("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),o("div",sm,[o("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:Pt({width:r.value+"%"})},null,4)])],2),o("div",{class:w([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=o("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=o("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),o("div",rm,[o("span",cm,O(c.value),1),u[12]||(u[12]=o("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),o("div",{class:w(n.value)},[o("div",um,[o("div",dm,[o("span",null,"Diff Status: "+O(s.value)+" / "+O(i.itemDiff),1)]),s.value<i.itemDiff?(T(),I("div",pm,[...u[15]||(u[15]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(T(),I("div",fm,[...u[16]||(u[16]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},gm=Vt(mm,[["__scopeId","data-v-676556a4"]]),hm={class:"fixed inset-0 pointer-events-none z-0"},bm={key:0,class:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Am={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"},km={key:0,class:"relative z-10 max-w-5xl mx-auto p-6 md:p-20 animate-fade-in"},vm={class:"grid lg:grid-cols-12 gap-12 items-start"},xm={class:"lg:col-span-5 space-y-6 animate-slide-right"},ym=["src"],wm={class:"lg:col-span-7 space-y-8 animate-slide-left"},Pm={class:"flex items-center gap-4"},Mm={class:"text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]"},Dm={class:"space-y-5"},Rm={key:0,class:"mt-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)] group-hover/stat:scale-150 transition-transform flex-shrink-0"},Sm={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Cm={class:"text-sm font-bold flex items-center gap-2"},Em={class:"text-sm font-bold flex items-center gap-2 justify-between"},Tm={key:1,class:"h-screen flex items-center justify-center"},_m={__name:"XtallDetail",props:["id","isDark"],setup(e){const t=e,n=Wn(),a=te(()=>Ht.find(v=>String(v.code)===String(t.id))),i=v=>{if(!v)return"NORMAL";let h=v,A=0;for(;h.link&&A<10;){const y=Ht.find(S=>String(S.code)===String(h.link));if(y)h=y,A++;else break}return h.type?.toUpperCase()},l=v=>{const h=i(a.value);return v?.toUpperCase()==="UPGRADE"||v?.toUpperCase()==="ENHANCER"?"text-gray-400":{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[h]||"text-cyan-500"},s=v=>{const h=i(a.value);return{NORMAL:"bg-blue-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",ADDITIONAL:"bg-yellow-600",SPECIAL:"bg-cyan-600"}[h]||"bg-cyan-600"},r=v=>{const h=v?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?"bg-purple-600 text-white border-purple-400":({NORMAL:"bg-blue-600",ADDITIONAL:"bg-yellow-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",SPECIAL:"bg-cyan-600"}[h]||"bg-slate-700")+" text-white border-white/20"},c=v=>{const h=v?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?`${i(a.value)} ENHANCER`:h},p=te(()=>a.value?.link?Ht.find(v=>String(v.code)===String(a.value.link)):null),u=te(()=>a.value?Ht.find(v=>String(v.link)===String(a.value.code)):null),d=v=>{n.push(`/xtall/${v}`)};Mt(()=>t.id,()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=v=>v?Array.isArray(v)?v:v.split(/,|\n/).map(h=>h.trim()).filter(h=>h):[],b=v=>{const h=v?.toUpperCase(),A=i(a.value);return h==="UPGRADE"||h==="ENHANCER"?{NORMAL:Hn,WEAPON:Ki,ARMOR:Bi,ADDITIONAL:Ni,SPECIAL:Oi}[A]||Hn:{NORMAL:Un,WEAPON:Ei,ARMOR:_i,ADDITIONAL:Ii,SPECIAL:Ti}[A]||Un};return(v,h)=>(T(),I("div",{class:w(["min-h-screen relative overflow-hidden font-sans transition-all duration-700",e.isDark?"bg-[#020617] text-slate-200":"bg-slate-50 text-slate-900"])},[o("div",hm,[o("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),e.isDark?(T(),I("div",bm)):Ke("",!0),e.isDark?(T(),I("div",Am)):Ke("",!0)]),a.value?(T(),I("div",km,[o("button",{onClick:h[0]||(h[0]=A=>v.$router.push("/xtall")),class:"group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2"},[...h[3]||(h[3]=[o("div",{class:"w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"},[o("svg",{class:"w-5 h-5 text-cyan-500 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M15 19l-7-7 7-7","stroke-width":"3"})])],-1),o("span",{class:"text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500"},"Back to Database",-1)])]),o("div",vm,[o("div",xm,[o("div",{class:w(["relative aspect-square rounded-[3.5rem] border-4 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 group",e.isDark?"bg-slate-900 border-white/20":"bg-white border-slate-300"])},[o("div",{class:w(["absolute inset-0 opacity-30 blur-3xl animate-pulse transition-colors duration-700",s(a.value.type)])},null,2),o("img",{src:b(a.value.type),class:"relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 animate-float"},null,8,ym),o("div",{class:w(["absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-2xl whitespace-nowrap transition-all duration-500 group-hover:scale-110",r(a.value.type)])},O(c(a.value.type)),3)],2)]),o("div",wm,[o("div",null,[o("p",{class:w(["text-xs font-black uppercase tracking-[0.4em] mb-2 drop-shadow-sm",l(a.value.name)])},O(c(a.value.type)),3),o("h1",{class:w(["text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4 drop-shadow-2xl transition-all duration-500 brightness-100 saturate-70",l(a.value.type),e.isDark?"[-webkit-text-stroke:1px_white]":"[-webkit-text-stroke:1px_black]"]),style:{maskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)",webkitMaskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)"}},O(a.value.name),3),o("div",Pm,[h[4]||(h[4]=o("div",{class:"h-[3px] w-16 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"},null,-1)),o("p",Mm,"System ID: #"+O(a.value.code),1)])]),o("div",{class:w(["p-8 md:p-12 rounded-[3rem] border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden transition-all hover:border-cyan-500/50",e.isDark?"bg-slate-900/80 border-white/10 shadow-black":"bg-white border-slate-200 shadow-slate-300"])},[h[5]||(h[5]=o("div",{class:"absolute top-0 right-0 p-8 text-8xl opacity-[0.05] grayscale pointer-events-none animate-spin-slow"},"✨",-1)),h[6]||(h[6]=o("h3",{class:"text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-8 flex items-center gap-3"},[o("span",{class:"w-2 h-2 bg-cyan-500 rounded-full animate-ping"}),Je(" Status/ Effect ")],-1)),o("div",Dm,[(T(!0),I($,null,me(m(a.value.view),(A,y)=>(T(),I("div",{key:y,class:"flex items-start gap-4 group/stat animate-fade-in",style:Pt({animationDelay:y*100+"ms"})},[A.includes("Dengan")?Ke("",!0):(T(),I("div",Rm)),o("p",{class:w(["text-base md:text-lg font-bold tracking-tight transition-colors",A.includes("Dengan")?"text-green-500 italic":A.includes("-")?"text-red-500":e.isDark?"text-slate-200 group-hover/stat:text-cyan-400":"text-slate-700"])},O(A),3)],4))),128))])],2),o("div",Sm,[p.value?(T(),I("div",{key:0,onClick:h[1]||(h[1]=A=>d(p.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-900/20":"bg-white border-slate-200 hover:border-cyan-500 shadow-slate-200"])},[h[8]||(h[8]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Model",-1)),o("p",Cm,[h[7]||(h[7]=o("span",{class:"text-cyan-500 group-hover:-translate-x-2 transition-transform"},"←",-1)),Je(" "+O(p.value.name),1)])],2)):Ke("",!0),u.value?(T(),I("div",{key:1,onClick:h[2]||(h[2]=A=>d(u.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-purple-500/50 hover:shadow-purple-900/20":"bg-white border-slate-200 hover:border-purple-500 shadow-slate-200"])},[h[10]||(h[10]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Advanced Upgrade",-1)),o("p",Em,[Je(O(u.value.name)+" ",1),h[9]||(h[9]=o("span",{class:"text-purple-500 group-hover:translate-x-2 transition-transform"},"→",-1))])],2)):Ke("",!0)])])])])):(T(),I("div",Tm,[...h[11]||(h[11]=[o("div",{class:"relative w-24 h-24"},[o("div",{class:"absolute inset-0 border-4 border-cyan-500/20 rounded-full"}),o("div",{class:"absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"})],-1)])]))],2))}},Im=Vt(_m,[["__scopeId","data-v-5b64479f"]]),Km={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF",value:".DEF"},{label:"MDEF",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD",value:"ASPD"},{label:"CSPD",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen",value:"Natural MP Regen"},{label:"Natural HP Regen",value:"Natural HP Regen"},{label:"Attack MP Recovery",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK",value:"Weapon ATK"},{label:"DTE (Elements)",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee",value:"Tambahan Fisik"},{label:"Additional Magic",value:"Tambahan Sihir"},{label:"Antisipasi",value:"Antisipasi"},{label:"Guard Break",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable",value:"Tumble Unavailable"},{label:"Evasion Recharge",value:"Evasion Recharge"},{label:"Refleks",value:"Refleks"},{label:"Recoil",value:"Recoil"}]},Ql={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},Bm=[{label:"Weapon Crystas",value:"WEAPON",icon:Ei,color:"red"},{label:"Weapon Enhancer Crystas",value:"WEAPON_UPGRADE",icon:Ki,color:"red"},{label:"Armor Crystas",value:"ARMOR",icon:_i,color:"green"},{label:"Armor Enhancer Crystas",value:"ARMOR_UPGRADE",icon:Bi,color:"green"},{label:"Additional Crystas",value:"ADDITIONAL",icon:Ti,color:"yellow"},{label:"Additional Enhancer Crystas",value:"ADDITIONAL_UPGRADE",icon:Ni,color:"yellow"},{label:"Normal Crystas",value:"NORMAL",icon:Un,color:"blue"},{label:"Normal Enhancer Crystas",value:"NORMAL_UPGRADE",icon:Hn,color:"blue"},{label:"Special Crystas",value:"SPECIAL",icon:Ii,color:"pink"},{label:"Special Enhancer Crystas",value:"SPECIAL_UPGRADE",icon:Oi,color:"pink"}],Nm={class:"max-w-[1600px] mx-auto mb-6 flex items-center justify-between"},Om={class:"max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"},Lm={class:"text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]"},Gm={class:"max-w-[1600px] mx-auto space-y-5"},Um={class:"grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"},Hm=["onClick"],jm=["src","alt"],Fm={key:0,class:"absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"},Vm={class:"flex items-center gap-1 mb-4 ml-2"},Jm={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2"},Wm=["onClick"],Qm={class:"flex items-start justify-between gap-2 mb-4"},qm={key:0,class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},zm={class:"flex gap-1"},$m=["onUpdate:modelValue"],Xm=["onUpdate:modelValue"],Zm=["onUpdate:modelValue"],Ym={__name:"XtallAdvancedSearch",props:{isDark:Boolean},setup(e){const t=Wn(),n=Sa(),a=bn({stats:{},types:[]});tn(()=>{if(n.query.filter)try{const p=JSON.parse(n.query.filter);p?.stats&&(a.stats=p.stats),p?.types&&(a.types=p.types)}catch{console.warn("Invalid filter data")}});function i(){t.back()}function l(){Object.keys(a.stats).forEach(p=>delete a.stats[p]),a.types=[]}function s(p){a.stats[p]?delete a.stats[p]:a.stats[p]={sign:"+",op:">=",value:null}}function r(p){const u=a.types.indexOf(p);u>-1?a.types.splice(u,1):a.types.push(p)}function c(){t.push({name:"xtall",query:{filter:JSON.stringify(a)}})}return(p,u)=>(T(),I("div",{class:w(["p-4 md:p-8 font-sans transition-all duration-700 min-h-screen",e.isDark?"bg-[#050505] text-white":"bg-slate-50 text-slate-900"])},[o("div",Nm,[o("button",{onClick:i,class:"group flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:bg-white/5 active:scale-95"},[o("div",{class:w(["w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",e.isDark?"border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10":"border-slate-200 group-hover:border-orange-500/50 group-hover:bg-orange-50"])},[...u[1]||(u[1]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 transition-transform group-hover:-translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M15 19l-7-7 7-7"})],-1)])],2),u[2]||(u[2]=o("span",{class:"text-[11px] font-[1000] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100"},"Back",-1))])]),o("div",Om,[o("div",null,[o("h1",Lm,[o("span",{class:w(e.isDark?"text-white":"text-black")},"Advanced",2),u[3]||(u[3]=o("br",null,null,-1)),u[4]||(u[4]=o("span",{class:"bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x"},"Search",-1))])]),o("div",{class:"flex flex-row items-center gap-4 w-full lg:w-auto"},[o("button",{onClick:l,class:"flex-1 lg:flex-none px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300"}," Clear Page "),o("button",{onClick:c,class:"flex-[2] lg:flex-none px-10 py-5 bg-orange-600 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(234,88,12,0.3)]"},[...u[5]||(u[5]=[o("span",{class:"text-xs font-[1000] uppercase tracking-[0.2em] text-white"},"Apply Parameters",-1)])])])]),o("div",Gm,[o("section",null,[u[6]||(u[6]=o("div",{class:"flex items-center gap-3 mb-8 ml-2"},[o("div",{class:"w-1.5 h-6 rounded-full bg-cyan-500"}),o("h2",{class:"text-lg font-[1000] uppercase tracking-[0.3em] italic text-cyan-500"},"Type Crysta")],-1)),o("div",Um,[(T(!0),I($,null,me(We(Bm),d=>(T(),I("div",{key:d.value,onClick:m=>r(d.value),class:w(["group relative p-5 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col items-center gap-4 min-h-[160px] justify-center",a.types.includes(d.value)?"bg-[#468FE0] border-cyan-400 shadow-xl shadow-cyan-600/80 scale-[1.12]":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 shadow-sm hover:border-slate-300"])},[o("div",{class:w(["w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner",a.types.includes(d.value)?"border-white shadow-lg":"border-slate-800/50"])},[o("img",{src:d.icon,class:"w-full h-full object-cover",alt:d.label},null,8,jm)],2),o("span",{class:w(["text-[10px] font-black uppercase tracking-[0.15em] text-center leading-tight transition-colors",a.types.includes(d.value)?"text-white":e.isDark?"text-slate-400":"text-slate-500"])},O(d.label),3),a.types.includes(d.value)?(T(),I("div",Fm)):Ke("",!0)],10,Hm))),128))])]),(T(!0),I($,null,me(We(Km),(d,m)=>(T(),I("div",{key:m},[o("div",Vm,[o("div",{class:w(["w-1.5 h-6 rounded-full",We(Ql)[m]?.bg||"bg-slate-500"])},null,2),o("h2",{class:w(["text-lg font-[1000] uppercase tracking-[0.3em] italic",We(Ql)[m]?.text||"text-slate-500"])},O(m),3)]),o("div",Jm,[(T(!0),I($,null,me(d,b=>(T(),I("div",{key:b.value,onClick:v=>s(b.value),class:w(["group/item relative rounded-[2rem] border-2 p-2 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[70px]",a.stats[b.value]?e.isDark?"bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-500/20":"bg-orange-50 border-orange-500":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 hover:border-slate-300 shadow-sm"])},[o("div",Qm,[o("span",{class:w(["text-[11px] font-[1000] uppercase leading-tight tracking-wide transition-colors",a.stats[b.value]?e.isDark?"text-white":"text-orange-600":e.isDark?"text-slate-500":"text-slate-400"])},O(b.label),3),o("div",{class:w(["shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500",a.stats[b.value]?"bg-orange-500 border-orange-400 rotate-0":e.isDark?"bg-white/5 border-white/10 rotate-45":"bg-slate-50 border-slate-200 rotate-45"])},[a.stats[b.value]?(T(),I("svg",qm,[...u[7]||(u[7]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):(T(),I("div",{key:1,class:w(["text-lg leading-none",e.isDark?"text-white/20":"text-slate-300"])},"+",2))],2)]),xe(us,{name:"fade"},{default:Ye(()=>[a.stats[b.value]?(T(),I("div",{key:0,onClick:u[0]||(u[0]=Wc(()=>{},["stop"])),class:"space-y-2 mt-auto pt-4 border-t border-orange-500/20"},[o("div",zm,[ve(o("select",{"onUpdate:modelValue":v=>a.stats[b.value].sign=v,class:w(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-orange-400":"bg-white border-slate-200 text-orange-600"])},[...u[8]||(u[8]=[o("option",{value:"+"},"Stats +",-1),o("option",{value:"-"},"Stats -",-1)])],10,$m),[[it,a.stats[b.value].sign]]),ve(o("select",{"onUpdate:modelValue":v=>a.stats[b.value].op=v,class:w(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-cyan-400":"bg-white border-slate-200 text-cyan-600"])},[...u[9]||(u[9]=[o("option",{value:">="},"≥",-1),o("option",{value:"<="},"≤",-1)])],10,Xm),[[it,a.stats[b.value].op]])]),ve(o("input",{type:"number","onUpdate:modelValue":v=>a.stats[b.value].value=v,class:w(["w-full py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-all focus:border-orange-500",e.isDark?"bg-black border-white/10 text-white":"bg-white border-slate-200 text-black"]),placeholder:"VALUE"},null,10,Zm),[[ze,a.stats[b.value].value,void 0,{number:!0}]])])):Ke("",!0)]),_:2},1024)],10,Wm))),128))])]))),128))])],2))}},eg=Vt(Ym,[["__scopeId","data-v-0059a3da"]]),tg=[{path:"/",name:"bag",component:dd},{path:"/mq",name:"mainquest",component:Fd},{path:"/mq-calc",name:"mqcalc",component:Ef},{path:"/bs-calc",name:"bs-calc",component:gm},{path:"/xtall",name:"xtall",component:Gp},{path:"/xtall/advanced",name:"xtall-advanced",component:eg},{path:"/xtall/:id(\\d+)",name:"xtall-detail",component:Im,props:!0}],ng=i0({history:Nu("/toram-vue/"),routes:tg});document.title||(document.title="Timi DB | Toram Online Database");const Ps=zc(b0);Ps.use(ng);Ps.mount("#app");window.addEventListener("unhandledrejection",e=>{console.warn("Ignored async listener error:",e.reason)});
