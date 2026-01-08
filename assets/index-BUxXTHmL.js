(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function pi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},rn=[],mt=()=>{},Hl=()=>!1,ga=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fi=e=>e.startsWith("onUpdate:"),Se=Object.assign,gi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ms=Object.prototype.hasOwnProperty,fe=(e,t)=>Ms.call(e,t),Q=Array.isArray,sn=e=>Un(e)==="[object Map]",hn=e=>Un(e)==="[object Set]",Bi=e=>Un(e)==="[object Date]",X=e=>typeof e=="function",we=e=>typeof e=="string",it=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Fl=e=>(he(e)||X(e))&&X(e.then)&&X(e.catch),Vl=Object.prototype.toString,Un=e=>Vl.call(e),Ds=e=>Un(e).slice(8,-1),Jl=e=>Un(e)==="[object Object]",mi=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Rs=/-\w/g,et=ma(e=>e.replace(Rs,t=>t.slice(1).toUpperCase())),Ss=/\B([A-Z])/g,en=ma(e=>e.replace(Ss,"-$1").toLowerCase()),ha=ma(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ta=ma(e=>e?`on${ha(e)}`:""),Ht=(e,t)=>!Object.is(e,t),$n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Wl=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},ba=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cs=e=>{const t=we(e)?Number(e):NaN;return isNaN(t)?e:t};let Ni;const Aa=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pt(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=we(a)?Is(a):Pt(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(we(e)||he(e))return e}const Es=/;(?![^(]*\))/g,Ts=/:([^]+)/,_s=/\/\*[^]*?\*\//g;function Is(e){const t={};return e.replace(_s,"").split(Es).forEach(n=>{if(n){const a=n.split(Ts);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function w(e){let t="";if(we(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const a=w(e[n]);a&&(t+=a+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ks="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bs=pi(Ks);function Ql(e){return!!e||e===""}function Ns(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=jn(e[a],t[a]);return n}function jn(e,t){if(e===t)return!0;let n=Bi(e),a=Bi(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=it(e),a=it(t),n||a)return e===t;if(n=Q(e),a=Q(t),n||a)return n&&a?Ns(e,t):!1;if(n=he(e),a=he(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const s in e){const c=e.hasOwnProperty(s),o=t.hasOwnProperty(s);if(c&&!o||!c&&o||!jn(e[s],t[s]))return!1}}return String(e)===String(t)}function hi(e,t){return e.findIndex(n=>jn(n,t))}const ql=e=>!!(e&&e.__v_isRef===!0),L=e=>we(e)?e:e==null?"":Q(e)||he(e)&&(e.toString===Vl||!X(e.toString))?ql(e)?L(e.value):JSON.stringify(e,zl,2):String(e),zl=(e,t)=>ql(t)?zl(e,t.value):sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[_a(a,l)+" =>"]=i,n),{})}:hn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>_a(n))}:it(t)?_a(t):he(t)&&!Q(t)&&!Jl(t)?String(t):t,_a=(e,t="")=>{var n;return it(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Je;class Os{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){this._on>0&&--this._on===0&&(Je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ls(){return Je}let ke;const Ia=new WeakSet;class $l{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oi(this),Yl(this);const t=ke,n=tt;ke=this,tt=!0;try{return this.fn()}finally{er(this),ke=t,tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ki(t);this.deps=this.depsTail=void 0,Oi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){za(this)&&this.run()}get dirty(){return za(this)}}let Xl=0,Pn,Mn;function Zl(e,t=!1){if(e.flags|=8,t){e.next=Mn,Mn=e;return}e.next=Pn,Pn=e}function bi(){Xl++}function Ai(){if(--Xl>0)return;if(Mn){let t=Mn;for(Mn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pn;){let t=Pn;for(Pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function Yl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function er(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),ki(a),Gs(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function za(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(tr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function tr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===En)||(e.globalVersion=En,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!za(e))))return;e.flags|=2;const t=e.dep,n=ke,a=tt;ke=e,tt=!0;try{Yl(e);const i=e.fn(e._value);(t.version===0||Ht(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ke=n,tt=a,er(e),e.flags&=-3}}function ki(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)ki(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gs(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let tt=!0;const nr=[];function Rt(){nr.push(tt),tt=!1}function St(){const e=nr.pop();tt=e===void 0?!0:e}function Oi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let En=0;class Us{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!tt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Us(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,ar(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=a)}return n}trigger(t){this.version++,En++,this.notify(t)}notify(t){bi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ai()}}}function ar(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)ar(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const $a=new WeakMap,Zt=Symbol(""),Xa=Symbol(""),Tn=Symbol("");function Ie(e,t,n){if(tt&&ke){let a=$a.get(e);a||$a.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new vi),i.map=a,i.key=n),i.track()}}function yt(e,t,n,a,i,l){const s=$a.get(e);if(!s){En++;return}const c=o=>{o&&o.trigger()};if(bi(),t==="clear")s.forEach(c);else{const o=Q(e),p=o&&mi(n);if(o&&n==="length"){const u=Number(a);s.forEach((d,g)=>{(g==="length"||g===Tn||!it(g)&&g>=u)&&c(d)})}else switch((n!==void 0||s.has(void 0))&&c(s.get(n)),p&&c(s.get(Tn)),t){case"add":o?p&&c(s.get("length")):(c(s.get(Zt)),sn(e)&&c(s.get(Xa)));break;case"delete":o||(c(s.get(Zt)),sn(e)&&c(s.get(Xa)));break;case"set":sn(e)&&c(s.get(Zt));break}}Ai()}function nn(e){const t=ce(e);return t===e?t:(Ie(t,"iterate",Tn),Ye(e)?t:t.map(lt))}function ka(e){return Ie(e=ce(e),"iterate",Tn),e}function Bt(e,t){return Ct(e)?Yt(e)?pn(lt(t)):pn(t):lt(t)}const js={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,e=>Bt(this,e))},concat(...e){return nn(this).concat(...e.map(t=>Q(t)?nn(t):t))},entries(){return Ka(this,"entries",e=>(e[1]=Bt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(a=>Bt(this,a)),arguments)},find(e,t){return bt(this,"find",e,t,n=>Bt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>Bt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ba(this,"includes",e)},indexOf(...e){return Ba(this,"indexOf",e)},join(e){return nn(this).join(e)},lastIndexOf(...e){return Ba(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return kn(this,"pop")},push(...e){return kn(this,"push",e)},reduce(e,...t){return Li(this,"reduce",e,t)},reduceRight(e,...t){return Li(this,"reduceRight",e,t)},shift(){return kn(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return kn(this,"splice",e)},toReversed(){return nn(this).toReversed()},toSorted(e){return nn(this).toSorted(e)},toSpliced(...e){return nn(this).toSpliced(...e)},unshift(...e){return kn(this,"unshift",e)},values(){return Ka(this,"values",e=>Bt(this,e))}};function Ka(e,t,n){const a=ka(e),i=a[t]();return a!==e&&!Ye(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const Hs=Array.prototype;function bt(e,t,n,a,i,l){const s=ka(e),c=s!==e&&!Ye(e),o=s[t];if(o!==Hs[t]){const d=o.apply(e,l);return c?lt(d):d}let p=n;s!==e&&(c?p=function(d,g){return n.call(this,Bt(e,d),g,e)}:n.length>2&&(p=function(d,g){return n.call(this,d,g,e)}));const u=o.call(s,p,a);return c&&i?i(u):u}function Li(e,t,n,a){const i=ka(e);let l=n;return i!==e&&(Ye(e)?n.length>3&&(l=function(s,c,o){return n.call(this,s,c,o,e)}):l=function(s,c,o){return n.call(this,s,Bt(e,c),o,e)}),i[t](l,...a)}function Ba(e,t,n){const a=ce(e);Ie(a,"iterate",Tn);const i=a[t](...n);return(i===-1||i===!1)&&wi(n[0])?(n[0]=ce(n[0]),a[t](...n)):i}function kn(e,t,n=[]){Rt(),bi();const a=ce(e)[t].apply(e,n);return Ai(),St(),a}const Fs=pi("__proto__,__v_isRef,__isVue"),ir=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(it));function Vs(e){it(e)||(e=String(e));const t=ce(this);return Ie(t,"has",e),t.hasOwnProperty(e)}class lr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?eo:cr:l?or:sr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const s=Q(t);if(!i){let o;if(s&&(o=js[n]))return o;if(n==="hasOwnProperty")return Vs}const c=Reflect.get(t,n,Ne(t)?t:a);if((it(n)?ir.has(n):Fs(n))||(i||Ie(t,"get",n),l))return c;if(Ne(c)){const o=s&&mi(n)?c:c.value;return i&&he(o)?Ya(o):o}return he(c)?i?Ya(c):bn(c):c}}class rr extends lr{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const s=Q(t)&&mi(n);if(!this._isShallow){const p=Ct(l);if(!Ye(a)&&!Ct(a)&&(l=ce(l),a=ce(a)),!s&&Ne(l)&&!Ne(a))return p||(l.value=a),!0}const c=s?Number(n)<t.length:fe(t,n),o=Reflect.set(t,n,a,Ne(t)?t:i);return t===ce(i)&&(c?Ht(a,l)&&yt(t,"set",n,a):yt(t,"add",n,a)),o}deleteProperty(t,n){const a=fe(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&yt(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!it(n)||!ir.has(n))&&Ie(t,"has",n),a}ownKeys(t){return Ie(t,"iterate",Q(t)?"length":Zt),Reflect.ownKeys(t)}}class Js extends lr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ws=new rr,Qs=new Js,qs=new rr(!0);const Za=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function zs(e,t,n){return function(...a){const i=this.__v_raw,l=ce(i),s=sn(l),c=e==="entries"||e===Symbol.iterator&&s,o=e==="keys"&&s,p=i[e](...a),u=n?Za:t?pn:lt;return!t&&Ie(l,"iterate",o?Xa:Zt),{next(){const{value:d,done:g}=p.next();return g?{value:d,done:g}:{value:c?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function Wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $s(e,t){const n={get(i){const l=this.__v_raw,s=ce(l),c=ce(i);e||(Ht(i,c)&&Ie(s,"get",i),Ie(s,"get",c));const{has:o}=Jn(s),p=t?Za:e?pn:lt;if(o.call(s,i))return p(l.get(i));if(o.call(s,c))return p(l.get(c));l!==s&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Ie(ce(i),"iterate",Zt),i.size},has(i){const l=this.__v_raw,s=ce(l),c=ce(i);return e||(Ht(i,c)&&Ie(s,"has",i),Ie(s,"has",c)),i===c?l.has(i):l.has(i)||l.has(c)},forEach(i,l){const s=this,c=s.__v_raw,o=ce(c),p=t?Za:e?pn:lt;return!e&&Ie(o,"iterate",Zt),c.forEach((u,d)=>i.call(l,p(u),p(d),s))}};return Se(n,e?{add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear")}:{add(i){!t&&!Ye(i)&&!Ct(i)&&(i=ce(i));const l=ce(this);return Jn(l).has.call(l,i)||(l.add(i),yt(l,"add",i,i)),this},set(i,l){!t&&!Ye(l)&&!Ct(l)&&(l=ce(l));const s=ce(this),{has:c,get:o}=Jn(s);let p=c.call(s,i);p||(i=ce(i),p=c.call(s,i));const u=o.call(s,i);return s.set(i,l),p?Ht(l,u)&&yt(s,"set",i,l):yt(s,"add",i,l),this},delete(i){const l=ce(this),{has:s,get:c}=Jn(l);let o=s.call(l,i);o||(i=ce(i),o=s.call(l,i)),c&&c.call(l,i);const p=l.delete(i);return o&&yt(l,"delete",i,void 0),p},clear(){const i=ce(this),l=i.size!==0,s=i.clear();return l&&yt(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=zs(i,e,t)}),n}function xi(e,t){const n=$s(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(fe(n,i)&&i in a?n:a,i,l)}const Xs={get:xi(!1,!1)},Zs={get:xi(!1,!0)},Ys={get:xi(!0,!1)};const sr=new WeakMap,or=new WeakMap,cr=new WeakMap,eo=new WeakMap;function to(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function no(e){return e.__v_skip||!Object.isExtensible(e)?0:to(Ds(e))}function bn(e){return Ct(e)?e:yi(e,!1,Ws,Xs,sr)}function ur(e){return yi(e,!1,qs,Zs,or)}function Ya(e){return yi(e,!0,Qs,Ys,cr)}function yi(e,t,n,a,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=no(e);if(l===0)return e;const s=i.get(e);if(s)return s;const c=new Proxy(e,l===2?a:n);return i.set(e,c),c}function Yt(e){return Ct(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function Ye(e){return!!(e&&e.__v_isShallow)}function wi(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function ao(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&Wl(e,"__v_skip",!0),e}const lt=e=>he(e)?bn(e):e,pn=e=>he(e)?Ya(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function le(e){return dr(e,!1)}function io(e){return dr(e,!0)}function dr(e,t){return Ne(e)?e:new lo(e,t)}class lo{constructor(t,n){this.dep=new vi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:lt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||Ye(t)||Ct(t);t=a?t:ce(t),Ht(t,n)&&(this._rawValue=t,this._value=a?t:lt(t),this.dep.trigger())}}function Xe(e){return Ne(e)?e.value:e}const ro={get:(e,t,n)=>t==="__v_raw"?e:Xe(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function pr(e){return Yt(e)?e:new Proxy(e,ro)}class so{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new vi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=En-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Zl(this,!0),!0}get value(){const t=this.dep.track();return tr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function oo(e,t,n=!1){let a,i;return X(e)?a=e:(a=e.get,i=e.set),new so(a,i,n)}const Qn={},na=new WeakMap;let zt;function co(e,t=!1,n=zt){if(n){let a=na.get(n);a||na.set(n,a=[]),a.push(e)}}function uo(e,t,n=be){const{immediate:a,deep:i,once:l,scheduler:s,augmentJob:c,call:o}=n,p=E=>i?E:Ye(E)||i===!1||i===0?wt(E,1):wt(E);let u,d,g,b,v=!1,h=!1;if(Ne(e)?(d=()=>e.value,v=Ye(e)):Yt(e)?(d=()=>p(e),v=!0):Q(e)?(h=!0,v=e.some(E=>Yt(E)||Ye(E)),d=()=>e.map(E=>{if(Ne(E))return E.value;if(Yt(E))return p(E);if(X(E))return o?o(E,2):E()})):X(e)?t?d=o?()=>o(e,2):e:d=()=>{if(g){Rt();try{g()}finally{St()}}const E=zt;zt=u;try{return o?o(e,3,[b]):e(b)}finally{zt=E}}:d=mt,t&&i){const E=d,W=i===!0?1/0:i;d=()=>wt(E(),W)}const A=Ls(),y=()=>{u.stop(),A&&A.active&&gi(A.effects,u)};if(l&&t){const E=t;t=(...W)=>{E(...W),y()}}let S=h?new Array(e.length).fill(Qn):Qn;const I=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const W=u.run();if(i||v||(h?W.some((ae,oe)=>Ht(ae,S[oe])):Ht(W,S))){g&&g();const ae=zt;zt=u;try{const oe=[W,S===Qn?void 0:h&&S[0]===Qn?[]:S,b];S=W,o?o(t,3,oe):t(...oe)}finally{zt=ae}}}else u.run()};return c&&c(I),u=new $l(d),u.scheduler=s?()=>s(I,!1):I,b=E=>co(E,!1,u),g=u.onStop=()=>{const E=na.get(u);if(E){if(o)o(E,4);else for(const W of E)W();na.delete(u)}},t?a?I(!0):S=u.run():s?s(I.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function wt(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ne(e))wt(e.value,t,n);else if(Q(e))for(let a=0;a<e.length;a++)wt(e[a],t,n);else if(hn(e)||sn(e))e.forEach(a=>{wt(a,t,n)});else if(Jl(e)){for(const a in e)wt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&wt(e[a],t,n)}return e}function Hn(e,t,n,a){try{return a?e(...a):e()}catch(i){va(i,t,n)}}function rt(e,t,n,a){if(X(e)){const i=Hn(e,t,n,a);return i&&Fl(i)&&i.catch(l=>{va(l,t,n)}),i}if(Q(e)){const i=[];for(let l=0;l<e.length;l++)i.push(rt(e[l],t,n,a));return i}}function va(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||be;if(t){let c=t.parent;const o=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,p)===!1)return}c=c.parent}if(l){Rt(),Hn(l,null,10,[e,o,p]),St();return}}po(e,n,i,a,s)}function po(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const Ue=[];let ft=-1;const on=[];let Nt=null,an=0;const fr=Promise.resolve();let aa=null;function xa(e){const t=aa||fr;return e?t.then(this?e.bind(this):e):t}function fo(e){let t=ft+1,n=Ue.length;for(;t<n;){const a=t+n>>>1,i=Ue[a],l=_n(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function Pi(e){if(!(e.flags&1)){const t=_n(e),n=Ue[Ue.length-1];!n||!(e.flags&2)&&t>=_n(n)?Ue.push(e):Ue.splice(fo(t),0,e),e.flags|=1,gr()}}function gr(){aa||(aa=fr.then(hr))}function go(e){Q(e)?on.push(...e):Nt&&e.id===-1?Nt.splice(an+1,0,e):e.flags&1||(on.push(e),e.flags|=1),gr()}function Gi(e,t,n=ft+1){for(;n<Ue.length;n++){const a=Ue[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Ue.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function mr(e){if(on.length){const t=[...new Set(on)].sort((n,a)=>_n(n)-_n(a));if(on.length=0,Nt){Nt.push(...t);return}for(Nt=t,an=0;an<Nt.length;an++){const n=Nt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,an=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hr(e){try{for(ft=0;ft<Ue.length;ft++){const t=Ue[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<Ue.length;ft++){const t=Ue[ft];t&&(t.flags&=-2)}ft=-1,Ue.length=0,mr(),aa=null,(Ue.length||on.length)&&hr()}}let Ee=null,br=null;function ia(e){const t=Ee;return Ee=e,br=e&&e.type.__scopeId||null,t}function We(e,t=Ee,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&oa(-1);const l=ia(t);let s;try{s=e(...i)}finally{ia(l),a._d&&oa(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function ve(e,t){if(Ee===null)return e;const n=Da(Ee),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,s,c,o=be]=t[i];l&&(X(l)&&(l={mounted:l,updated:l}),l.deep&&wt(s),a.push({dir:l,instance:n,value:s,oldValue:void 0,arg:c,modifiers:o}))}return e}function Jt(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let s=0;s<i.length;s++){const c=i[s];l&&(c.oldValue=l[s].value);let o=c.dir[a];o&&(Rt(),rt(o,n,8,[e.el,c,e,t]),St())}}function Xn(e,t){if(Be){let n=Be.provides;const a=Be.parent&&Be.parent.provides;a===n&&(n=Be.provides=Object.create(a)),n[e]=t}}function nt(e,t,n=!1){const a=Zr();if(a||un){let i=un?un._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&X(t)?t.call(a&&a.proxy):t}}const mo=Symbol.for("v-scx"),ho=()=>nt(mo);function Mt(e,t,n){return Ar(e,t,n)}function Ar(e,t,n=be){const{immediate:a,deep:i,flush:l,once:s}=n,c=Se({},n),o=t&&a||!t&&l!=="post";let p;if(Nn){if(l==="sync"){const b=ho();p=b.__watcherHandles||(b.__watcherHandles=[])}else if(!o){const b=()=>{};return b.stop=mt,b.resume=mt,b.pause=mt,b}}const u=Be;c.call=(b,v,h)=>rt(b,u,v,h);let d=!1;l==="post"?c.scheduler=b=>{qe(b,u&&u.suspense)}:l!=="sync"&&(d=!0,c.scheduler=(b,v)=>{v?b():Pi(b)}),c.augmentJob=b=>{t&&(b.flags|=4),d&&(b.flags|=2,u&&(b.id=u.uid,b.i=u))};const g=uo(e,t,c);return Nn&&(p?p.push(g):o&&g()),g}function bo(e,t,n){const a=this.proxy,i=we(e)?e.includes(".")?kr(a,e):()=>a[e]:e.bind(a,a);let l;X(t)?l=t:(l=t.handler,n=t);const s=Fn(this),c=Ar(i,l.bind(a),n);return s(),c}function kr(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const Ao=Symbol("_vte"),vr=e=>e.__isTeleport,xt=Symbol("_leaveCb"),qn=Symbol("_enterCb");function ko(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),Cr(()=>{e.isUnmounting=!0}),e}const Ze=[Function,Array],xr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},yr=e=>{const t=e.subTree;return t.component?yr(t.component):t},vo={name:"BaseTransition",props:xr,setup(e,{slots:t}){const n=Zr(),a=ko();return()=>{const i=t.default&&Mr(t.default(),!0);if(!i||!i.length)return;const l=wr(i),s=ce(e),{mode:c}=s;if(a.isLeaving)return Na(l);const o=Ui(l);if(!o)return Na(l);let p=ei(o,s,a,n,d=>p=d);o.type!==Ke&&In(o,p);let u=n.subTree&&Ui(n.subTree);if(u&&u.type!==Ke&&!$t(u,o)&&yr(n).type!==Ke){let d=ei(u,s,a,n);if(In(u,d),c==="out-in"&&o.type!==Ke)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Na(l);c==="in-out"&&o.type!==Ke?d.delayLeave=(g,b,v)=>{const h=Pr(a,u);h[String(u.key)]=u,g[xt]=()=>{b(),g[xt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{v(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function wr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ke){t=n;break}}return t}const xo=vo;function Pr(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function ei(e,t,n,a,i){const{appear:l,mode:s,persisted:c=!1,onBeforeEnter:o,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:b,onAfterLeave:v,onLeaveCancelled:h,onBeforeAppear:A,onAppear:y,onAfterAppear:S,onAppearCancelled:I}=t,E=String(e.key),W=Pr(n,e),ae=(V,Z)=>{V&&rt(V,a,9,Z)},oe=(V,Z)=>{const re=Z[1];ae(V,Z),Q(V)?V.every(j=>j.length<=1)&&re():V.length<=1&&re()},Pe={mode:s,persisted:c,beforeEnter(V){let Z=o;if(!n.isMounted)if(l)Z=A||o;else return;V[xt]&&V[xt](!0);const re=W[E];re&&$t(e,re)&&re.el[xt]&&re.el[xt](),ae(Z,[V])},enter(V){let Z=p,re=u,j=d;if(!n.isMounted)if(l)Z=y||p,re=S||u,j=I||d;else return;let ee=!1;const Me=V[qn]=Ce=>{ee||(ee=!0,Ce?ae(j,[V]):ae(re,[V]),Pe.delayedLeave&&Pe.delayedLeave(),V[qn]=void 0)};Z?oe(Z,[V,Me]):Me()},leave(V,Z){const re=String(e.key);if(V[qn]&&V[qn](!0),n.isUnmounting)return Z();ae(g,[V]);let j=!1;const ee=V[xt]=Me=>{j||(j=!0,Z(),Me?ae(h,[V]):ae(v,[V]),V[xt]=void 0,W[re]===e&&delete W[re])};W[re]=e,b?oe(b,[V,ee]):ee()},clone(V){const Z=ei(V,t,n,a,i);return i&&i(Z),Z}};return Pe}function Na(e){if(ya(e))return e=Ft(e),e.children=null,e}function Ui(e){if(!ya(e))return vr(e.type)&&e.children?wr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&X(n.default))return n.default()}}function In(e,t){e.shapeFlag&6&&e.component?(e.transition=t,In(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mr(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let s=e[l];const c=n==null?s.key:String(n)+String(s.key!=null?s.key:l);s.type===z?(s.patchFlag&128&&i++,a=a.concat(Mr(s.children,t,c))):(t||s.type!==Ke)&&a.push(c!=null?Ft(s,{key:c}):s)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Dr(e,t){return X(e)?Se({name:e.name},t,{setup:e}):e}function Rr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const la=new WeakMap;function Dn(e,t,n,a,i=!1){if(Q(e)){e.forEach((v,h)=>Dn(v,t&&(Q(t)?t[h]:t),n,a,i));return}if(cn(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Dn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?Da(a.component):a.el,s=i?null:l,{i:c,r:o}=e,p=t&&t.r,u=c.refs===be?c.refs={}:c.refs,d=c.setupState,g=ce(d),b=d===be?Hl:v=>fe(g,v);if(p!=null&&p!==o){if(ji(t),we(p))u[p]=null,b(p)&&(d[p]=null);else if(Ne(p)){p.value=null;const v=t;v.k&&(u[v.k]=null)}}if(X(o))Hn(o,c,12,[s,u]);else{const v=we(o),h=Ne(o);if(v||h){const A=()=>{if(e.f){const y=v?b(o)?d[o]:u[o]:o.value;if(i)Q(y)&&gi(y,l);else if(Q(y))y.includes(l)||y.push(l);else if(v)u[o]=[l],b(o)&&(d[o]=u[o]);else{const S=[l];o.value=S,e.k&&(u[e.k]=S)}}else v?(u[o]=s,b(o)&&(d[o]=s)):h&&(o.value=s,e.k&&(u[e.k]=s))};if(s){const y=()=>{A(),la.delete(e)};y.id=-1,la.set(e,y),qe(y,n)}else ji(e),A()}}}function ji(e){const t=la.get(e);t&&(t.flags|=8,la.delete(e))}Aa().requestIdleCallback;Aa().cancelIdleCallback;const cn=e=>!!e.type.__asyncLoader,ya=e=>e.type.__isKeepAlive;function yo(e,t){Sr(e,"a",t)}function wo(e,t){Sr(e,"da",t)}function Sr(e,t,n=Be){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(wa(t,a,n),n){let i=n.parent;for(;i&&i.parent;)ya(i.parent.vnode)&&Po(a,t,n,i),i=i.parent}}function Po(e,t,n,a){const i=wa(t,e,a,!0);Mi(()=>{gi(a[t],i)},n)}function wa(e,t,n=Be,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...s)=>{Rt();const c=Fn(n),o=rt(t,n,e,s);return c(),St(),o});return a?i.unshift(l):i.push(l),l}}const Et=e=>(t,n=Be)=>{(!Nn||e==="sp")&&wa(e,(...a)=>t(...a),n)},Mo=Et("bm"),tn=Et("m"),Do=Et("bu"),Ro=Et("u"),Cr=Et("bum"),Mi=Et("um"),So=Et("sp"),Co=Et("rtg"),Eo=Et("rtc");function To(e,t=Be){wa("ec",e,t)}const Er="components";function ra(e,t){return _r(Er,e,!0,t)||e}const Tr=Symbol.for("v-ndc");function _o(e){return we(e)?_r(Er,e,!1)||e:e||Tr}function _r(e,t,n=!0,a=!1){const i=Ee||Be;if(i){const l=i.type;{const c=bc(l,!1);if(c&&(c===t||c===et(t)||c===ha(et(t))))return l}const s=Hi(i[e]||l[e],t)||Hi(i.appContext[e],t);return!s&&a?l:s}}function Hi(e,t){return e&&(e[t]||e[et(t)]||e[ha(et(t))])}function ue(e,t,n,a){let i;const l=n,s=Q(e);if(s||we(e)){const c=s&&Yt(e);let o=!1,p=!1;c&&(o=!Ye(e),p=Ct(e),e=ka(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(o?p?pn(lt(e[u])):lt(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let c=0;c<e;c++)i[c]=t(c+1,c,void 0,l)}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(c,o)=>t(c,o,void 0,l));else{const c=Object.keys(e);i=new Array(c.length);for(let o=0,p=c.length;o<p;o++){const u=c[o];i[o]=t(e[u],u,o,l)}}else i=[];return i}function Io(e,t,n={},a,i){if(Ee.ce||Ee.parent&&cn(Ee.parent)&&Ee.parent.ce){const p=Object.keys(n).length>0;return C(),ca(z,null,[me("slot",n,a)],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),C();const s=l&&Ir(l(n)),c=n.key||s&&s.key,o=ca(z,{key:(c&&!it(c)?c:`_${t}`)+(!s&&a?"_fb":"")},s||[],s&&e._===1?64:-2);return l&&l._c&&(l._d=!0),o}function Ir(e){return e.some(t=>Bn(t)?!(t.type===Ke||t.type===z&&!Ir(t.children)):!0)?e:null}const ti=e=>e?Yr(e)?Da(e):ti(e.parent):null,Rn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ti(e.parent),$root:e=>ti(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Br(e),$forceUpdate:e=>e.f||(e.f=()=>{Pi(e.update)}),$nextTick:e=>e.n||(e.n=xa.bind(e.proxy)),$watch:e=>bo.bind(e)}),Oa=(e,t)=>e!==be&&!e.__isScriptSetup&&fe(e,t),Ko={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:s,type:c,appContext:o}=e;if(t[0]!=="$"){const g=s[t];if(g!==void 0)switch(g){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Oa(a,t))return s[t]=1,a[t];if(i!==be&&fe(i,t))return s[t]=2,i[t];if(fe(l,t))return s[t]=3,l[t];if(n!==be&&fe(n,t))return s[t]=4,n[t];ni&&(s[t]=0)}}const p=Rn[t];let u,d;if(p)return t==="$attrs"&&Ie(e.attrs,"get",""),p(e);if((u=c.__cssModules)&&(u=u[t]))return u;if(n!==be&&fe(n,t))return s[t]=4,n[t];if(d=o.config.globalProperties,fe(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Oa(i,t)?(i[t]=n,!0):a!==be&&fe(a,t)?(a[t]=n,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:s}},c){let o;return!!(n[c]||e!==be&&c[0]!=="$"&&fe(e,c)||Oa(t,c)||fe(l,c)||fe(a,c)||fe(Rn,c)||fe(i.config.globalProperties,c)||(o=s.__cssModules)&&o[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fi(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ni=!0;function Bo(e){const t=Br(e),n=e.proxy,a=e.ctx;ni=!1,t.beforeCreate&&Vi(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:s,watch:c,provide:o,inject:p,created:u,beforeMount:d,mounted:g,beforeUpdate:b,updated:v,activated:h,deactivated:A,beforeDestroy:y,beforeUnmount:S,destroyed:I,unmounted:E,render:W,renderTracked:ae,renderTriggered:oe,errorCaptured:Pe,serverPrefetch:V,expose:Z,inheritAttrs:re,components:j,directives:ee,filters:Me}=t;if(p&&No(p,a,null),s)for(const de in s){const se=s[de];X(se)&&(a[de]=se.bind(n))}if(i){const de=i.call(n,n);he(de)&&(e.data=bn(de))}if(ni=!0,l)for(const de in l){const se=l[de],He=X(se)?se.bind(n,n):X(se.get)?se.get.bind(n,n):mt,ot=!X(se)&&X(se.set)?se.set.bind(n):mt,Oe=ne({get:He,set:ot});Object.defineProperty(a,de,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:Te=>Oe.value=Te})}if(c)for(const de in c)Kr(c[de],a,n,de);if(o){const de=X(o)?o.call(n):o;Reflect.ownKeys(de).forEach(se=>{Xn(se,de[se])})}u&&Vi(u,e,"c");function xe(de,se){Q(se)?se.forEach(He=>de(He.bind(n))):se&&de(se.bind(n))}if(xe(Mo,d),xe(tn,g),xe(Do,b),xe(Ro,v),xe(yo,h),xe(wo,A),xe(To,Pe),xe(Eo,ae),xe(Co,oe),xe(Cr,S),xe(Mi,E),xe(So,V),Q(Z))if(Z.length){const de=e.exposed||(e.exposed={});Z.forEach(se=>{Object.defineProperty(de,se,{get:()=>n[se],set:He=>n[se]=He,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===mt&&(e.render=W),re!=null&&(e.inheritAttrs=re),j&&(e.components=j),ee&&(e.directives=ee),V&&Rr(e)}function No(e,t,n=mt){Q(e)&&(e=ai(e));for(const a in e){const i=e[a];let l;he(i)?"default"in i?l=nt(i.from||a,i.default,!0):l=nt(i.from||a):l=nt(i),Ne(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:s=>l.value=s}):t[a]=l}}function Vi(e,t,n){rt(Q(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Kr(e,t,n,a){let i=a.includes(".")?kr(n,a):()=>n[a];if(we(e)){const l=t[e];X(l)&&Mt(i,l)}else if(X(e))Mt(i,e.bind(n));else if(he(e))if(Q(e))e.forEach(l=>Kr(l,t,n,a));else{const l=X(e.handler)?e.handler.bind(n):t[e.handler];X(l)&&Mt(i,l,e)}}function Br(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:s}}=e.appContext,c=l.get(t);let o;return c?o=c:!i.length&&!n&&!a?o=t:(o={},i.length&&i.forEach(p=>sa(o,p,s,!0)),sa(o,t,s)),he(t)&&l.set(t,o),o}function sa(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&sa(e,l,n,!0),i&&i.forEach(s=>sa(e,s,n,!0));for(const s in t)if(!(a&&s==="expose")){const c=Oo[s]||n&&n[s];e[s]=c?c(e[s],t[s]):t[s]}return e}const Oo={data:Ji,props:Wi,emits:Wi,methods:yn,computed:yn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:yn,directives:yn,watch:Go,provide:Ji,inject:Lo};function Ji(e,t){return t?e?function(){return Se(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function Lo(e,t){return yn(ai(e),ai(t))}function ai(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function yn(e,t){return e?Se(Object.create(null),e,t):t}function Wi(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:Se(Object.create(null),Fi(e),Fi(t??{})):t}function Go(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const a in t)n[a]=Le(e[a],t[a]);return n}function Nr(){return{app:null,config:{isNativeTag:Hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uo=0;function jo(e,t){return function(a,i=null){X(a)||(a=Se({},a)),i!=null&&!he(i)&&(i=null);const l=Nr(),s=new WeakSet,c=[];let o=!1;const p=l.app={_uid:Uo++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:kc,get config(){return l.config},set config(u){},use(u,...d){return s.has(u)||(u&&X(u.install)?(s.add(u),u.install(p,...d)):X(u)&&(s.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,g){if(!o){const b=p._ceVNode||me(a,i);return b.appContext=l,g===!0?g="svg":g===!1&&(g=void 0),e(b,u,g),o=!0,p._container=u,u.__vue_app__=p,Da(b.component)}},onUnmount(u){c.push(u)},unmount(){o&&(rt(c,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p},runWithContext(u){const d=un;un=p;try{return u()}finally{un=d}}};return p}}let un=null;const Ho=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${et(t)}Modifiers`]||e[`${en(t)}Modifiers`];function Fo(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||be;let i=n;const l=t.startsWith("update:"),s=l&&Ho(a,t.slice(7));s&&(s.trim&&(i=n.map(u=>we(u)?u.trim():u)),s.number&&(i=n.map(ba)));let c,o=a[c=Ta(t)]||a[c=Ta(et(t))];!o&&l&&(o=a[c=Ta(en(t))]),o&&rt(o,e,6,i);const p=a[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,rt(p,e,6,i)}}const Vo=new WeakMap;function Or(e,t,n=!1){const a=n?Vo:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let s={},c=!1;if(!X(e)){const o=p=>{const u=Or(p,t,!0);u&&(c=!0,Se(s,u))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!l&&!c?(he(e)&&a.set(e,null),null):(Q(l)?l.forEach(o=>s[o]=null):Se(s,l),he(e)&&a.set(e,s),s)}function Pa(e,t){return!e||!ga(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,en(t))||fe(e,t))}function Qi(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:s,attrs:c,emit:o,render:p,renderCache:u,props:d,data:g,setupState:b,ctx:v,inheritAttrs:h}=e,A=ia(e);let y,S;try{if(n.shapeFlag&4){const E=i||a,W=E;y=gt(p.call(W,E,u,d,b,g,v)),S=c}else{const E=t;y=gt(E.length>1?E(d,{attrs:c,slots:s,emit:o}):E(d,null)),S=t.props?c:Jo(c)}}catch(E){Sn.length=0,va(E,e,1),y=me(Ke)}let I=y;if(S&&h!==!1){const E=Object.keys(S),{shapeFlag:W}=I;E.length&&W&7&&(l&&E.some(fi)&&(S=Wo(S,l)),I=Ft(I,S,!1,!0))}return n.dirs&&(I=Ft(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&In(I,n.transition),y=I,ia(A),y}const Jo=e=>{let t;for(const n in e)(n==="class"||n==="style"||ga(n))&&((t||(t={}))[n]=e[n]);return t},Wo=(e,t)=>{const n={};for(const a in e)(!fi(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Qo(e,t,n){const{props:a,children:i,component:l}=e,{props:s,children:c,patchFlag:o}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return a?qi(a,s,p):!!s;if(o&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(s[g]!==a[g]&&!Pa(p,g))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:a===s?!1:a?s?qi(a,s,p):!0:!!s;return!1}function qi(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!Pa(n,l))return!0}return!1}function qo({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const Lr={},Gr=()=>Object.create(Lr),Ur=e=>Object.getPrototypeOf(e)===Lr;function zo(e,t,n,a=!1){const i={},l=Gr();e.propsDefaults=Object.create(null),jr(e,t,i,l);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=a?i:ur(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function $o(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:s}}=e,c=ce(i),[o]=e.propsOptions;let p=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(Pa(e.emitsOptions,g))continue;const b=t[g];if(o)if(fe(l,g))b!==l[g]&&(l[g]=b,p=!0);else{const v=et(g);i[v]=ii(o,c,v,b,e,!1)}else b!==l[g]&&(l[g]=b,p=!0)}}}else{jr(e,t,i,l)&&(p=!0);let u;for(const d in c)(!t||!fe(t,d)&&((u=en(d))===d||!fe(t,u)))&&(o?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ii(o,c,d,void 0,e,!0)):delete i[d]);if(l!==c)for(const d in l)(!t||!fe(t,d))&&(delete l[d],p=!0)}p&&yt(e.attrs,"set","")}function jr(e,t,n,a){const[i,l]=e.propsOptions;let s=!1,c;if(t)for(let o in t){if(wn(o))continue;const p=t[o];let u;i&&fe(i,u=et(o))?!l||!l.includes(u)?n[u]=p:(c||(c={}))[u]=p:Pa(e.emitsOptions,o)||(!(o in a)||p!==a[o])&&(a[o]=p,s=!0)}if(l){const o=ce(n),p=c||be;for(let u=0;u<l.length;u++){const d=l[u];n[d]=ii(i,o,d,p[d],e,!fe(p,d))}}return s}function ii(e,t,n,a,i,l){const s=e[n];if(s!=null){const c=fe(s,"default");if(c&&a===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&X(o)){const{propsDefaults:p}=i;if(n in p)a=p[n];else{const u=Fn(i);a=p[n]=o.call(null,t),u()}}else a=o;i.ce&&i.ce._setProp(n,a)}s[0]&&(l&&!c?a=!1:s[1]&&(a===""||a===en(n))&&(a=!0))}return a}const Xo=new WeakMap;function Hr(e,t,n=!1){const a=n?Xo:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,s={},c=[];let o=!1;if(!X(e)){const u=d=>{o=!0;const[g,b]=Hr(d,t,!0);Se(s,g),b&&c.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!o)return he(e)&&a.set(e,rn),rn;if(Q(l))for(let u=0;u<l.length;u++){const d=et(l[u]);zi(d)&&(s[d]=be)}else if(l)for(const u in l){const d=et(u);if(zi(d)){const g=l[u],b=s[d]=Q(g)||X(g)?{type:g}:Se({},g),v=b.type;let h=!1,A=!0;if(Q(v))for(let y=0;y<v.length;++y){const S=v[y],I=X(S)&&S.name;if(I==="Boolean"){h=!0;break}else I==="String"&&(A=!1)}else h=X(v)&&v.name==="Boolean";b[0]=h,b[1]=A,(h||fe(b,"default"))&&c.push(d)}}const p=[s,c];return he(e)&&a.set(e,p),p}function zi(e){return e[0]!=="$"&&!wn(e)}const Di=e=>e==="_"||e==="_ctx"||e==="$stable",Ri=e=>Q(e)?e.map(gt):[gt(e)],Zo=(e,t,n)=>{if(t._n)return t;const a=We((...i)=>Ri(t(...i)),n);return a._c=!1,a},Fr=(e,t,n)=>{const a=e._ctx;for(const i in e){if(Di(i))continue;const l=e[i];if(X(l))t[i]=Zo(i,l,a);else if(l!=null){const s=Ri(l);t[i]=()=>s}}},Vr=(e,t)=>{const n=Ri(t);e.slots.default=()=>n},Jr=(e,t,n)=>{for(const a in t)(n||!Di(a))&&(e[a]=t[a])},Yo=(e,t,n)=>{const a=e.slots=Gr();if(e.vnode.shapeFlag&32){const i=t._;i?(Jr(a,t,n),n&&Wl(a,"_",i,!0)):Fr(t,a)}else t&&Vr(e,t)},ec=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,s=be;if(a.shapeFlag&32){const c=t._;c?n&&c===1?l=!1:Jr(i,t,n):(l=!t.$stable,Fr(t,i)),s=t}else t&&(Vr(e,t),s={default:1});if(l)for(const c in i)!Di(c)&&s[c]==null&&delete i[c]},qe=lc;function tc(e){return nc(e)}function nc(e,t){const n=Aa();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:s,createText:c,createComment:o,setText:p,setElementText:u,parentNode:d,nextSibling:g,setScopeId:b=mt,insertStaticContent:v}=e,h=(f,m,k,D=null,T=null,R=null,G=void 0,O=null,N=!!m.dynamicChildren)=>{if(f===m)return;f&&!$t(f,m)&&(D=P(f),Te(f,T,R,!0),f=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:K,ref:q,shapeFlag:H}=m;switch(K){case Ma:A(f,m,k,D);break;case Ke:y(f,m,k,D);break;case Zn:f==null&&S(m,k,D,G);break;case z:j(f,m,k,D,T,R,G,O,N);break;default:H&1?W(f,m,k,D,T,R,G,O,N):H&6?ee(f,m,k,D,T,R,G,O,N):(H&64||H&128)&&K.process(f,m,k,D,T,R,G,O,N,U)}q!=null&&T?Dn(q,f&&f.ref,R,m||f,!m):q==null&&f&&f.ref!=null&&Dn(f.ref,null,R,f,!0)},A=(f,m,k,D)=>{if(f==null)a(m.el=c(m.children),k,D);else{const T=m.el=f.el;m.children!==f.children&&p(T,m.children)}},y=(f,m,k,D)=>{f==null?a(m.el=o(m.children||""),k,D):m.el=f.el},S=(f,m,k,D)=>{[f.el,f.anchor]=v(f.children,m,k,D,f.el,f.anchor)},I=({el:f,anchor:m},k,D)=>{let T;for(;f&&f!==m;)T=g(f),a(f,k,D),f=T;a(m,k,D)},E=({el:f,anchor:m})=>{let k;for(;f&&f!==m;)k=g(f),i(f),f=k;i(m)},W=(f,m,k,D,T,R,G,O,N)=>{if(m.type==="svg"?G="svg":m.type==="math"&&(G="mathml"),f==null)ae(m,k,D,T,R,G,O,N);else{const K=f.el&&f.el._isVueCE?f.el:null;try{K&&K._beginPatch(),V(f,m,T,R,G,O,N)}finally{K&&K._endPatch()}}},ae=(f,m,k,D,T,R,G,O)=>{let N,K;const{props:q,shapeFlag:H,transition:J,dirs:$}=f;if(N=f.el=s(f.type,R,q&&q.is,q),H&8?u(N,f.children):H&16&&Pe(f.children,N,null,D,T,La(f,R),G,O),$&&Jt(f,null,D,"created"),oe(N,f,f.scopeId,G,D),q){for(const Ae in q)Ae!=="value"&&!wn(Ae)&&l(N,Ae,null,q[Ae],R,D);"value"in q&&l(N,"value",null,q.value,R),(K=q.onVnodeBeforeMount)&&pt(K,D,f)}$&&Jt(f,null,D,"beforeMount");const ie=ac(T,J);ie&&J.beforeEnter(N),a(N,m,k),((K=q&&q.onVnodeMounted)||ie||$)&&qe(()=>{K&&pt(K,D,f),ie&&J.enter(N),$&&Jt(f,null,D,"mounted")},T)},oe=(f,m,k,D,T)=>{if(k&&b(f,k),D)for(let R=0;R<D.length;R++)b(f,D[R]);if(T){let R=T.subTree;if(m===R||zr(R.type)&&(R.ssContent===m||R.ssFallback===m)){const G=T.vnode;oe(f,G,G.scopeId,G.slotScopeIds,T.parent)}}},Pe=(f,m,k,D,T,R,G,O,N=0)=>{for(let K=N;K<f.length;K++){const q=f[K]=O?Ot(f[K]):gt(f[K]);h(null,q,m,k,D,T,R,G,O)}},V=(f,m,k,D,T,R,G)=>{const O=m.el=f.el;let{patchFlag:N,dynamicChildren:K,dirs:q}=m;N|=f.patchFlag&16;const H=f.props||be,J=m.props||be;let $;if(k&&Wt(k,!1),($=J.onVnodeBeforeUpdate)&&pt($,k,m,f),q&&Jt(m,f,k,"beforeUpdate"),k&&Wt(k,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&u(O,""),K?Z(f.dynamicChildren,K,O,k,D,La(m,T),R):G||se(f,m,O,null,k,D,La(m,T),R,!1),N>0){if(N&16)re(O,H,J,k,T);else if(N&2&&H.class!==J.class&&l(O,"class",null,J.class,T),N&4&&l(O,"style",H.style,J.style,T),N&8){const ie=m.dynamicProps;for(let Ae=0;Ae<ie.length;Ae++){const ge=ie[Ae],Fe=H[ge],Ve=J[ge];(Ve!==Fe||ge==="value")&&l(O,ge,Fe,Ve,T,k)}}N&1&&f.children!==m.children&&u(O,m.children)}else!G&&K==null&&re(O,H,J,k,T);(($=J.onVnodeUpdated)||q)&&qe(()=>{$&&pt($,k,m,f),q&&Jt(m,f,k,"updated")},D)},Z=(f,m,k,D,T,R,G)=>{for(let O=0;O<m.length;O++){const N=f[O],K=m[O],q=N.el&&(N.type===z||!$t(N,K)||N.shapeFlag&198)?d(N.el):k;h(N,K,q,null,D,T,R,G,!0)}},re=(f,m,k,D,T)=>{if(m!==k){if(m!==be)for(const R in m)!wn(R)&&!(R in k)&&l(f,R,m[R],null,T,D);for(const R in k){if(wn(R))continue;const G=k[R],O=m[R];G!==O&&R!=="value"&&l(f,R,O,G,T,D)}"value"in k&&l(f,"value",m.value,k.value,T)}},j=(f,m,k,D,T,R,G,O,N)=>{const K=m.el=f?f.el:c(""),q=m.anchor=f?f.anchor:c("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:$}=m;$&&(O=O?O.concat($):$),f==null?(a(K,k,D),a(q,k,D),Pe(m.children||[],k,q,T,R,G,O,N)):H>0&&H&64&&J&&f.dynamicChildren&&f.dynamicChildren.length===J.length?(Z(f.dynamicChildren,J,k,T,R,G,O),(m.key!=null||T&&m===T.subTree)&&Wr(f,m,!0)):se(f,m,k,q,T,R,G,O,N)},ee=(f,m,k,D,T,R,G,O,N)=>{m.slotScopeIds=O,f==null?m.shapeFlag&512?T.ctx.activate(m,k,D,G,N):Me(m,k,D,T,R,G,N):Ce(f,m,N)},Me=(f,m,k,D,T,R,G)=>{const O=f.component=pc(f,D,T);if(ya(f)&&(O.ctx.renderer=U),fc(O,!1,G),O.asyncDep){if(T&&T.registerDep(O,xe,G),!f.el){const N=O.subTree=me(Ke);y(null,N,m,k),f.placeholder=N.el}}else xe(O,f,m,k,T,R,G)},Ce=(f,m,k)=>{const D=m.component=f.component;if(Qo(f,m,k))if(D.asyncDep&&!D.asyncResolved){de(D,m,k);return}else D.next=m,D.update();else m.el=f.el,D.vnode=m},xe=(f,m,k,D,T,R,G)=>{const O=()=>{if(f.isMounted){let{next:H,bu:J,u:$,parent:ie,vnode:Ae}=f;{const ut=Qr(f);if(ut){H&&(H.el=Ae.el,de(f,H,G)),ut.asyncDep.then(()=>{f.isUnmounted||O()});return}}let ge=H,Fe;Wt(f,!1),H?(H.el=Ae.el,de(f,H,G)):H=Ae,J&&$n(J),(Fe=H.props&&H.props.onVnodeBeforeUpdate)&&pt(Fe,ie,H,Ae),Wt(f,!0);const Ve=Qi(f),ct=f.subTree;f.subTree=Ve,h(ct,Ve,d(ct.el),P(ct),f,T,R),H.el=Ve.el,ge===null&&qo(f,Ve.el),$&&qe($,T),(Fe=H.props&&H.props.onVnodeUpdated)&&qe(()=>pt(Fe,ie,H,Ae),T)}else{let H;const{el:J,props:$}=m,{bm:ie,m:Ae,parent:ge,root:Fe,type:Ve}=f,ct=cn(m);Wt(f,!1),ie&&$n(ie),!ct&&(H=$&&$.onVnodeBeforeMount)&&pt(H,ge,m),Wt(f,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(Ve);const ut=f.subTree=Qi(f);h(null,ut,k,D,f,T,R),m.el=ut.el}if(Ae&&qe(Ae,T),!ct&&(H=$&&$.onVnodeMounted)){const ut=m;qe(()=>pt(H,ge,ut),T)}(m.shapeFlag&256||ge&&cn(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&qe(f.a,T),f.isMounted=!0,m=k=D=null}};f.scope.on();const N=f.effect=new $l(O);f.scope.off();const K=f.update=N.run.bind(N),q=f.job=N.runIfDirty.bind(N);q.i=f,q.id=f.uid,N.scheduler=()=>Pi(q),Wt(f,!0),K()},de=(f,m,k)=>{m.component=f;const D=f.vnode.props;f.vnode=m,f.next=null,$o(f,m.props,D,k),ec(f,m.children,k),Rt(),Gi(f),St()},se=(f,m,k,D,T,R,G,O,N=!1)=>{const K=f&&f.children,q=f?f.shapeFlag:0,H=m.children,{patchFlag:J,shapeFlag:$}=m;if(J>0){if(J&128){ot(K,H,k,D,T,R,G,O,N);return}else if(J&256){He(K,H,k,D,T,R,G,O,N);return}}$&8?(q&16&&te(K,T,R),H!==K&&u(k,H)):q&16?$&16?ot(K,H,k,D,T,R,G,O,N):te(K,T,R,!0):(q&8&&u(k,""),$&16&&Pe(H,k,D,T,R,G,O,N))},He=(f,m,k,D,T,R,G,O,N)=>{f=f||rn,m=m||rn;const K=f.length,q=m.length,H=Math.min(K,q);let J;for(J=0;J<H;J++){const $=m[J]=N?Ot(m[J]):gt(m[J]);h(f[J],$,k,null,T,R,G,O,N)}K>q?te(f,T,R,!0,!1,H):Pe(m,k,D,T,R,G,O,N,H)},ot=(f,m,k,D,T,R,G,O,N)=>{let K=0;const q=m.length;let H=f.length-1,J=q-1;for(;K<=H&&K<=J;){const $=f[K],ie=m[K]=N?Ot(m[K]):gt(m[K]);if($t($,ie))h($,ie,k,null,T,R,G,O,N);else break;K++}for(;K<=H&&K<=J;){const $=f[H],ie=m[J]=N?Ot(m[J]):gt(m[J]);if($t($,ie))h($,ie,k,null,T,R,G,O,N);else break;H--,J--}if(K>H){if(K<=J){const $=J+1,ie=$<q?m[$].el:D;for(;K<=J;)h(null,m[K]=N?Ot(m[K]):gt(m[K]),k,ie,T,R,G,O,N),K++}}else if(K>J)for(;K<=H;)Te(f[K],T,R,!0),K++;else{const $=K,ie=K,Ae=new Map;for(K=ie;K<=J;K++){const Qe=m[K]=N?Ot(m[K]):gt(m[K]);Qe.key!=null&&Ae.set(Qe.key,K)}let ge,Fe=0;const Ve=J-ie+1;let ct=!1,ut=0;const An=new Array(Ve);for(K=0;K<Ve;K++)An[K]=0;for(K=$;K<=H;K++){const Qe=f[K];if(Fe>=Ve){Te(Qe,T,R,!0);continue}let dt;if(Qe.key!=null)dt=Ae.get(Qe.key);else for(ge=ie;ge<=J;ge++)if(An[ge-ie]===0&&$t(Qe,m[ge])){dt=ge;break}dt===void 0?Te(Qe,T,R,!0):(An[dt-ie]=K+1,dt>=ut?ut=dt:ct=!0,h(Qe,m[dt],k,null,T,R,G,O,N),Fe++)}const _i=ct?ic(An):rn;for(ge=_i.length-1,K=Ve-1;K>=0;K--){const Qe=ie+K,dt=m[Qe],Ii=m[Qe+1],Ki=Qe+1<q?Ii.el||qr(Ii):D;An[K]===0?h(null,dt,k,Ki,T,R,G,O,N):ct&&(ge<0||K!==_i[ge]?Oe(dt,k,Ki,2):ge--)}}},Oe=(f,m,k,D,T=null)=>{const{el:R,type:G,transition:O,children:N,shapeFlag:K}=f;if(K&6){Oe(f.component.subTree,m,k,D);return}if(K&128){f.suspense.move(m,k,D);return}if(K&64){G.move(f,m,k,U);return}if(G===z){a(R,m,k);for(let H=0;H<N.length;H++)Oe(N[H],m,k,D);a(f.anchor,m,k);return}if(G===Zn){I(f,m,k);return}if(D!==2&&K&1&&O)if(D===0)O.beforeEnter(R),a(R,m,k),qe(()=>O.enter(R),T);else{const{leave:H,delayLeave:J,afterLeave:$}=O,ie=()=>{f.ctx.isUnmounted?i(R):a(R,m,k)},Ae=()=>{R._isLeaving&&R[xt](!0),H(R,()=>{ie(),$&&$()})};J?J(R,ie,Ae):Ae()}else a(R,m,k)},Te=(f,m,k,D=!1,T=!1)=>{const{type:R,props:G,ref:O,children:N,dynamicChildren:K,shapeFlag:q,patchFlag:H,dirs:J,cacheIndex:$}=f;if(H===-2&&(T=!1),O!=null&&(Rt(),Dn(O,null,k,f,!0),St()),$!=null&&(m.renderCache[$]=void 0),q&256){m.ctx.deactivate(f);return}const ie=q&1&&J,Ae=!cn(f);let ge;if(Ae&&(ge=G&&G.onVnodeBeforeUnmount)&&pt(ge,m,f),q&6)x(f.component,k,D);else{if(q&128){f.suspense.unmount(k,D);return}ie&&Jt(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,k,U,D):K&&!K.hasOnce&&(R!==z||H>0&&H&64)?te(K,m,k,!1,!0):(R===z&&H&384||!T&&q&16)&&te(N,m,k),D&&ht(f)}(Ae&&(ge=G&&G.onVnodeUnmounted)||ie)&&qe(()=>{ge&&pt(ge,m,f),ie&&Jt(f,null,m,"unmounted")},k)},ht=f=>{const{type:m,el:k,anchor:D,transition:T}=f;if(m===z){F(k,D);return}if(m===Zn){E(f);return}const R=()=>{i(k),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:G,delayLeave:O}=T,N=()=>G(k,R);O?O(f.el,R,N):N()}else R()},F=(f,m)=>{let k;for(;f!==m;)k=g(f),i(f),f=k;i(m)},x=(f,m,k)=>{const{bum:D,scope:T,job:R,subTree:G,um:O,m:N,a:K}=f;$i(N),$i(K),D&&$n(D),T.stop(),R&&(R.flags|=8,Te(G,f,m,k)),O&&qe(O,m),qe(()=>{f.isUnmounted=!0},m)},te=(f,m,k,D=!1,T=!1,R=0)=>{for(let G=R;G<f.length;G++)Te(f[G],m,k,D,T)},P=f=>{if(f.shapeFlag&6)return P(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=g(f.anchor||f.el),k=m&&m[Ao];return k?g(k):m};let M=!1;const B=(f,m,k)=>{let D;f==null?m._vnode&&(Te(m._vnode,null,null,!0),D=m._vnode.component):h(m._vnode||null,f,m,null,null,null,k),m._vnode=f,M||(M=!0,Gi(D),mr(),M=!1)},U={p:h,um:Te,m:Oe,r:ht,mt:Me,mc:Pe,pc:se,pbc:Z,n:P,o:e};return{render:B,hydrate:void 0,createApp:jo(B)}}function La({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ac(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wr(e,t,n=!1){const a=e.children,i=t.children;if(Q(a)&&Q(i))for(let l=0;l<a.length;l++){const s=a[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=Ot(i[l]),c.el=s.el),!n&&c.patchFlag!==-2&&Wr(s,c)),c.type===Ma&&(c.patchFlag!==-1?c.el=s.el:c.__elIndex=l+(e.type===z?1:0)),c.type===Ke&&!c.el&&(c.el=s.el)}}function ic(e){const t=e.slice(),n=[0];let a,i,l,s,c;const o=e.length;for(a=0;a<o;a++){const p=e[a];if(p!==0){if(i=n[n.length-1],e[i]<p){t[a]=i,n.push(a);continue}for(l=0,s=n.length-1;l<s;)c=l+s>>1,e[n[c]]<p?l=c+1:s=c;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,s=n[l-1];l-- >0;)n[l]=s,s=t[s];return n}function Qr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qr(t)}function $i(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?qr(t.subTree):null}const zr=e=>e.__isSuspense;function lc(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):go(e)}const z=Symbol.for("v-fgt"),Ma=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),Sn=[];let $e=null;function C(e=!1){Sn.push($e=e?null:[])}function rc(){Sn.pop(),$e=Sn[Sn.length-1]||null}let Kn=1;function oa(e,t=!1){Kn+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function $r(e){return e.dynamicChildren=Kn>0?$e||rn:null,rc(),Kn>0&&$e&&$e.push(e),e}function _(e,t,n,a,i,l){return $r(r(e,t,n,a,i,l,!0))}function ca(e,t,n,a,i){return $r(me(e,t,n,a,i,!0))}function Bn(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const Xr=({key:e})=>e??null,Yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||Ne(e)||X(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function r(e,t=null,n=null,a=0,i=null,l=e===z?0:1,s=!1,c=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xr(t),ref:t&&Yn(t),scopeId:br,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ee};return c?(Si(o,n),l&128&&e.normalize(o)):n&&(o.shapeFlag|=we(n)?8:16),Kn>0&&!s&&$e&&(o.patchFlag>0||l&6)&&o.patchFlag!==32&&$e.push(o),o}const me=sc;function sc(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Tr)&&(e=Ke),Bn(e)){const c=Ft(e,t,!0);return n&&Si(c,n),Kn>0&&!l&&$e&&(c.shapeFlag&6?$e[$e.indexOf(e)]=c:$e.push(c)),c.patchFlag=-2,c}if(Ac(e)&&(e=e.__vccOpts),t){t=oc(t);let{class:c,style:o}=t;c&&!we(c)&&(t.class=w(c)),he(o)&&(wi(o)&&!Q(o)&&(o=Se({},o)),t.style=Pt(o))}const s=we(e)?1:zr(e)?128:vr(e)?64:he(e)?4:X(e)?2:0;return r(e,t,n,a,i,s,l,!0)}function oc(e){return e?wi(e)||Ur(e)?Se({},e):e:null}function Ft(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:s,children:c,transition:o}=e,p=t?cc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Xr(p),ref:t&&t.ref?n&&l?Q(l)?l.concat(Yn(t)):[l,Yn(t)]:Yn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:o,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return o&&a&&In(u,o.clone(u)),u}function je(e=" ",t=0){return me(Ma,null,e,t)}function dn(e,t){const n=me(Zn,null,e);return n.staticCount=t,n}function De(e="",t=!1){return t?(C(),ca(Ke,null,e)):me(Ke,null,e)}function gt(e){return e==null||typeof e=="boolean"?me(Ke):Q(e)?me(z,null,e.slice()):Bn(e)?Ot(e):me(Ma,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function Si(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),Si(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ur(t)?t._ctx=Ee:i===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),a&64?(n=16,t=[je(t)]):n=8);e.children=t,e.shapeFlag|=n}function cc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=w([t.class,a.class]));else if(i==="style")t.style=Pt([t.style,a.style]);else if(ga(i)){const l=t[i],s=a[i];s&&l!==s&&!(Q(l)&&l.includes(s))&&(t[i]=l?[].concat(l,s):s)}else i!==""&&(t[i]=a[i])}return t}function pt(e,t,n,a=null){rt(e,t,7,[n,a])}const uc=Nr();let dc=0;function pc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||uc,l={uid:dc++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hr(a,i),emitsOptions:Or(a,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:a.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Fo.bind(null,l),e.ce&&e.ce(l),l}let Be=null;const Zr=()=>Be||Ee;let ua,li;{const e=Aa(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(s=>s(l)):i[0](l)}};ua=t("__VUE_INSTANCE_SETTERS__",n=>Be=n),li=t("__VUE_SSR_SETTERS__",n=>Nn=n)}const Fn=e=>{const t=Be;return ua(e),e.scope.on(),()=>{e.scope.off(),ua(t)}},Xi=()=>{Be&&Be.scope.off(),ua(null)};function Yr(e){return e.vnode.shapeFlag&4}let Nn=!1;function fc(e,t=!1,n=!1){t&&li(t);const{props:a,children:i}=e.vnode,l=Yr(e);zo(e,a,l,t),Yo(e,i,n||t);const s=l?gc(e,t):void 0;return t&&li(!1),s}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ko);const{setup:a}=n;if(a){Rt();const i=e.setupContext=a.length>1?hc(e):null,l=Fn(e),s=Hn(a,e,0,[e.props,i]),c=Fl(s);if(St(),l(),(c||e.sp)&&!cn(e)&&Rr(e),c){if(s.then(Xi,Xi),t)return s.then(o=>{Zi(e,o)}).catch(o=>{va(o,e,0)});e.asyncDep=s}else Zi(e,s)}else es(e)}function Zi(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=pr(t)),es(e)}function es(e,t,n){const a=e.type;e.render||(e.render=a.render||mt);{const i=Fn(e);Rt();try{Bo(e)}finally{St(),i()}}}const mc={get(e,t){return Ie(e,"get",""),e[t]}};function hc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mc),slots:e.slots,emit:e.emit,expose:t}}function Da(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pr(ao(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rn)return Rn[n](e)},has(t,n){return n in t||n in Rn}})):e.proxy}function bc(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function Ac(e){return X(e)&&"__vccOpts"in e}const ne=(e,t)=>oo(e,t,Nn);function Ci(e,t,n){try{oa(-1);const a=arguments.length;return a===2?he(t)&&!Q(t)?Bn(t)?me(e,null,[t]):me(e,t):me(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Bn(n)&&(n=[n]),me(e,t,n))}finally{oa(1)}}const kc="3.5.26";let ri;const Yi=typeof window<"u"&&window.trustedTypes;if(Yi)try{ri=Yi.createPolicy("vue",{createHTML:e=>e})}catch{}const ts=ri?e=>ri.createHTML(e):e=>e,vc="http://www.w3.org/2000/svg",xc="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,el=vt&&vt.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?vt.createElementNS(vc,e):t==="mathml"?vt.createElementNS(xc,e):n?vt.createElement(e,{is:n}):vt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const s=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{el.innerHTML=ts(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const c=el.content;if(a==="svg"||a==="mathml"){const o=c.firstChild;for(;o.firstChild;)c.appendChild(o.firstChild);c.removeChild(o)}t.insertBefore(c,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Tt="transition",vn="animation",On=Symbol("_vtc"),ns={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wc=Se({},xr,ns),Pc=e=>(e.displayName="Transition",e.props=wc,e),da=Pc((e,{slots:t})=>Ci(xo,Mc(e),t)),Qt=(e,t=[])=>{Q(e)?e.forEach(n=>n(...t)):e&&e(...t)},tl=e=>e?Q(e)?e.some(t=>t.length>1):e.length>1:!1;function Mc(e){const t={};for(const j in e)j in ns||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:o=l,appearActiveClass:p=s,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,v=Dc(i),h=v&&v[0],A=v&&v[1],{onBeforeEnter:y,onEnter:S,onEnterCancelled:I,onLeave:E,onLeaveCancelled:W,onBeforeAppear:ae=y,onAppear:oe=S,onAppearCancelled:Pe=I}=t,V=(j,ee,Me,Ce)=>{j._enterCancelled=Ce,qt(j,ee?u:c),qt(j,ee?p:s),Me&&Me()},Z=(j,ee)=>{j._isLeaving=!1,qt(j,d),qt(j,b),qt(j,g),ee&&ee()},re=j=>(ee,Me)=>{const Ce=j?oe:S,xe=()=>V(ee,j,Me);Qt(Ce,[ee,xe]),nl(()=>{qt(ee,j?o:l),At(ee,j?u:c),tl(Ce)||al(ee,a,h,xe)})};return Se(t,{onBeforeEnter(j){Qt(y,[j]),At(j,l),At(j,s)},onBeforeAppear(j){Qt(ae,[j]),At(j,o),At(j,p)},onEnter:re(!1),onAppear:re(!0),onLeave(j,ee){j._isLeaving=!0;const Me=()=>Z(j,ee);At(j,d),j._enterCancelled?(At(j,g),rl(j)):(rl(j),At(j,g)),nl(()=>{j._isLeaving&&(qt(j,d),At(j,b),tl(E)||al(j,a,A,Me))}),Qt(E,[j,Me])},onEnterCancelled(j){V(j,!1,void 0,!0),Qt(I,[j])},onAppearCancelled(j){V(j,!0,void 0,!0),Qt(Pe,[j])},onLeaveCancelled(j){Z(j),Qt(W,[j])}})}function Dc(e){if(e==null)return null;if(he(e))return[Ga(e.enter),Ga(e.leave)];{const t=Ga(e);return[t,t]}}function Ga(e){return Cs(e)}function At(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[On]||(e[On]=new Set)).add(t)}function qt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[On];n&&(n.delete(t),n.size||(e[On]=void 0))}function nl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Rc=0;function al(e,t,n,a){const i=e._endId=++Rc,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:s,timeout:c,propCount:o}=Sc(e,t);if(!s)return a();const p=s+"end";let u=0;const d=()=>{e.removeEventListener(p,g),l()},g=b=>{b.target===e&&++u>=o&&d()};setTimeout(()=>{u<o&&d()},c+1),e.addEventListener(p,g)}function Sc(e,t){const n=window.getComputedStyle(e),a=v=>(n[v]||"").split(", "),i=a(`${Tt}Delay`),l=a(`${Tt}Duration`),s=il(i,l),c=a(`${vn}Delay`),o=a(`${vn}Duration`),p=il(c,o);let u=null,d=0,g=0;t===Tt?s>0&&(u=Tt,d=s,g=l.length):t===vn?p>0&&(u=vn,d=p,g=o.length):(d=Math.max(s,p),u=d>0?s>p?Tt:vn:null,g=u?u===Tt?l.length:o.length:0);const b=u===Tt&&/\b(?:transform|all)(?:,|$)/.test(a(`${Tt}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:b}}function il(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>ll(n)+ll(e[a])))}function ll(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function rl(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cc(e,t,n){const a=e[On];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const sl=Symbol("_vod"),Ec=Symbol("_vsh"),Tc=Symbol(""),_c=/(?:^|;)\s*display\s*:/;function Ic(e,t,n){const a=e.style,i=we(n);let l=!1;if(n&&!i){if(t)if(we(t))for(const s of t.split(";")){const c=s.slice(0,s.indexOf(":")).trim();n[c]==null&&ea(a,c,"")}else for(const s in t)n[s]==null&&ea(a,s,"");for(const s in n)s==="display"&&(l=!0),ea(a,s,n[s])}else if(i){if(t!==n){const s=a[Tc];s&&(n+=";"+s),a.cssText=n,l=_c.test(n)}}else t&&e.removeAttribute("style");sl in e&&(e[sl]=l?a.display:"",e[Ec]&&(a.display="none"))}const ol=/\s*!important$/;function ea(e,t,n){if(Q(n))n.forEach(a=>ea(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Kc(e,t);ol.test(n)?e.setProperty(en(a),n.replace(ol,""),"important"):e[a]=n}}const cl=["Webkit","Moz","ms"],Ua={};function Kc(e,t){const n=Ua[t];if(n)return n;let a=et(t);if(a!=="filter"&&a in e)return Ua[t]=a;a=ha(a);for(let i=0;i<cl.length;i++){const l=cl[i]+a;if(l in e)return Ua[t]=l}return t}const ul="http://www.w3.org/1999/xlink";function dl(e,t,n,a,i,l=Bs(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ul,t.slice(6,t.length)):e.setAttributeNS(ul,t,n):n==null||l&&!Ql(n)?e.removeAttribute(t):e.setAttribute(t,l?"":it(n)?String(n):n)}function pl(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ts(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const c=l==="OPTION"?e.getAttribute("value")||"":e.value,o=n==null?e.type==="checkbox"?"on":"":String(n);(c!==o||!("_value"in e))&&(e.value=o),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ql(n):n==null&&c==="string"?(n="",s=!0):c==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function Ut(e,t,n,a){e.addEventListener(t,n,a)}function Bc(e,t,n,a){e.removeEventListener(t,n,a)}const fl=Symbol("_vei");function Nc(e,t,n,a,i=null){const l=e[fl]||(e[fl]={}),s=l[t];if(a&&s)s.value=a;else{const[c,o]=Oc(t);if(a){const p=l[t]=Uc(a,i);Ut(e,c,p,o)}else s&&(Bc(e,c,s,o),l[t]=void 0)}}const gl=/(?:Once|Passive|Capture)$/;function Oc(e){let t;if(gl.test(e)){t={};let a;for(;a=e.match(gl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let ja=0;const Lc=Promise.resolve(),Gc=()=>ja||(Lc.then(()=>ja=0),ja=Date.now());function Uc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;rt(jc(a,n.value),t,5,[a])};return n.value=e,n.attached=Gc(),n}function jc(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const ml=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hc=(e,t,n,a,i,l)=>{const s=i==="svg";t==="class"?Cc(e,a,s):t==="style"?Ic(e,n,a):ga(t)?fi(t)||Nc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fc(e,t,a,s))?(pl(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&dl(e,t,a,s,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!we(a))?pl(e,et(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),dl(e,t,a,s))};function Fc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&ml(t)&&X(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ml(t)&&we(n)?!1:t in e}const fn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>$n(t,n):t};function Vc(e){e.target.composing=!0}function hl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dt=Symbol("_assign");function bl(e,t,n){return t&&(e=e.trim()),n&&(e=ba(e)),e}const ze={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[Dt]=fn(i);const l=a||i.props&&i.props.type==="number";Ut(e,t?"change":"input",s=>{s.target.composing||e[Dt](bl(e.value,n,l))}),(n||l)&&Ut(e,"change",()=>{e.value=bl(e.value,n,l)}),t||(Ut(e,"compositionstart",Vc),Ut(e,"compositionend",hl),Ut(e,"change",hl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},s){if(e[Dt]=fn(s),e.composing)return;const c=(l||e.type==="number")&&!/^0\d/.test(e.value)?ba(e.value):e.value,o=t??"";c!==o&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===o)||(e.value=o))}},Al={deep:!0,created(e,t,n){e[Dt]=fn(n),Ut(e,"change",()=>{const a=e._modelValue,i=Ln(e),l=e.checked,s=e[Dt];if(Q(a)){const c=hi(a,i),o=c!==-1;if(l&&!o)s(a.concat(i));else if(!l&&o){const p=[...a];p.splice(c,1),s(p)}}else if(hn(a)){const c=new Set(a);l?c.add(i):c.delete(i),s(c)}else s(as(e,l))})},mounted:kl,beforeUpdate(e,t,n){e[Dt]=fn(n),kl(e,t,n)}};function kl(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(Q(t))i=hi(t,a.props.value)>-1;else if(hn(t))i=t.has(a.props.value);else{if(t===n)return;i=jn(t,as(e,!0))}e.checked!==i&&(e.checked=i)}const at={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=hn(t);Ut(e,"change",()=>{const l=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?ba(Ln(s)):Ln(s));e[Dt](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,xa(()=>{e._assigning=!1})}),e[Dt]=fn(a)},mounted(e,{value:t}){vl(e,t)},beforeUpdate(e,t,n){e[Dt]=fn(n)},updated(e,{value:t}){e._assigning||vl(e,t)}};function vl(e,t){const n=e.multiple,a=Q(t);if(!(n&&!a&&!hn(t))){for(let i=0,l=e.options.length;i<l;i++){const s=e.options[i],c=Ln(s);if(n)if(a){const o=typeof c;o==="string"||o==="number"?s.selected=t.some(p=>String(p)===String(c)):s.selected=hi(t,c)>-1}else s.selected=t.has(c);else if(jn(Ln(s),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ln(e){return"_value"in e?e._value:e.value}function as(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Jc=["ctrl","shift","alt","meta"],Wc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jc.some(n=>e[`${n}Key`]&&!t.includes(n))},ta=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let s=0;s<t.length;s++){const c=Wc[t[s]];if(c&&c(i,t))return}return e(i,...l)}))},Qc=Se({patchProp:Hc},yc);let xl;function qc(){return xl||(xl=tc(Qc))}const zc=((...e)=>{const t=qc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=Xc(a);if(!i)return;const l=t._component;!X(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,$c(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t});function $c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xc(e){return we(e)?document.querySelector(e):e}const Ra="/toram-vue/images/logo.png";const ln=typeof document<"u";function is(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&is(e.default)}const pe=Object.assign;function Ha(e,t){const n={};for(const a in t){const i=t[a];n[a]=st(i)?i.map(e):e(i)}return n}const Cn=()=>{},st=Array.isArray;function yl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const ls=/#/g,Yc=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,rs=/\+/g,au=/%5B/g,iu=/%5D/g,ss=/%5E/g,lu=/%60/g,os=/%7B/g,ru=/%7C/g,cs=/%7D/g,su=/%20/g;function Ei(e){return e==null?"":encodeURI(""+e).replace(ru,"|").replace(au,"[").replace(iu,"]")}function ou(e){return Ei(e).replace(os,"{").replace(cs,"}").replace(ss,"^")}function si(e){return Ei(e).replace(rs,"%2B").replace(su,"+").replace(ls,"%23").replace(Yc,"%26").replace(lu,"`").replace(os,"{").replace(cs,"}").replace(ss,"^")}function cu(e){return si(e).replace(tu,"%3D")}function uu(e){return Ei(e).replace(ls,"%23").replace(nu,"%3F")}function du(e){return uu(e).replace(eu,"%2F")}function Gn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pu=/\/$/,fu=e=>e.replace(pu,"");function Fa(e,t,n="/"){let a,i={},l="",s="";const c=t.indexOf("#");let o=t.indexOf("?");return o=c>=0&&o>c?-1:o,o>=0&&(a=t.slice(0,o),l=t.slice(o,c>0?c:t.length),i=e(l.slice(1))),c>=0&&(a=a||t.slice(0,c),s=t.slice(c,t.length)),a=bu(a??t,n),{fullPath:a+l+s,path:a,query:i,hash:Gn(s)}}function gu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mu(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&gn(t.matched[a],n.matched[i])&&us(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function us(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return st(e)?Pl(e,t):st(t)?Pl(t,e):e?.valueOf()===t?.valueOf()}function Pl(e,t){return st(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function bu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,s,c;for(s=0;s<a.length;s++)if(c=a[s],c!==".")if(c==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(s).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let oi=(function(e){return e.pop="pop",e.push="push",e})({}),Va=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Au(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fu(e)}const ku=/^[^#]+#/;function vu(e,t){return e.replace(ku,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Sa=()=>({left:window.scrollX,top:window.scrollY});function yu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=xu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ml(e,t){return(history.state?history.state.position-t:-1)+e}const ci=new Map;function wu(e,t){ci.set(e,t)}function Pu(e){const t=ci.get(e);return ci.delete(e),t}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function ds(e){return typeof e=="string"||typeof e=="symbol"}let ye=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ps=Symbol("");ye.MATCHER_NOT_FOUND+"",ye.NAVIGATION_GUARD_REDIRECT+"",ye.NAVIGATION_ABORTED+"",ye.NAVIGATION_CANCELLED+"",ye.NAVIGATION_DUPLICATED+"";function mn(e,t){return pe(new Error,{type:e,[ps]:!0},t)}function kt(e,t){return e instanceof Error&&ps in e&&(t==null||!!(e.type&t))}const Du=["params","query","hash"];function Ru(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Du)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Su(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(rs," "),l=i.indexOf("="),s=Gn(l<0?i:i.slice(0,l)),c=l<0?null:Gn(i.slice(l+1));if(s in t){let o=t[s];st(o)||(o=t[s]=[o]),o.push(c)}else t[s]=c}return t}function Dl(e){let t="";for(let n in e){const a=e[n];if(n=cu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(a)?a.map(i=>i&&si(i)):[a&&si(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Cu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=st(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const Eu=Symbol(""),Rl=Symbol(""),Ca=Symbol(""),Ti=Symbol(""),ui=Symbol("");function xn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,a,i,l=s=>s()){const s=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((c,o)=>{const p=g=>{g===!1?o(mn(ye.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?o(g):Mu(g)?o(mn(ye.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(s&&a.enterCallbacks[i]===s&&typeof g=="function"&&s.push(g),c())},u=l(()=>e.call(a&&a.instances[i],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(g=>o(g))})}function Ja(e,t,n,a,i=l=>l()){const l=[];for(const s of e)for(const c in s.components){let o=s.components[c];if(!(t!=="beforeRouteEnter"&&!s.instances[c]))if(is(o)){const p=(o.__vccOpts||o)[t];p&&l.push(Lt(p,n,a,s,c,i))}else{let p=o();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${s.path}"`);const d=Zc(u)?u.default:u;s.mods[c]=u,s.components[c]=d;const g=(d.__vccOpts||d)[t];return g&&Lt(g,n,a,s,c,i)()}))}}return l}function Tu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let s=0;s<l;s++){const c=t.matched[s];c&&(e.matched.find(p=>gn(p,c))?a.push(c):n.push(c));const o=e.matched[s];o&&(t.matched.find(p=>gn(p,o))||i.push(o))}return[n,a,i]}let _u=()=>location.protocol+"//"+location.host;function fs(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let s=i.includes(e.slice(l))?e.slice(l).length:1,c=i.slice(s);return c[0]!=="/"&&(c="/"+c),wl(c,"")}return wl(n,e)+a+i}function Iu(e,t,n,a){let i=[],l=[],s=null;const c=({state:g})=>{const b=fs(e,location),v=n.value,h=t.value;let A=0;if(g){if(n.value=b,t.value=g,s&&s===v){s=null;return}A=h?g.position-h.position:0}else a(b);i.forEach(y=>{y(n.value,v,{delta:A,type:oi.pop,direction:A?A>0?Va.forward:Va.back:Va.unknown})})};function o(){s=n.value}function p(g){i.push(g);const b=()=>{const v=i.indexOf(g);v>-1&&i.splice(v,1)};return l.push(b),b}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(pe({},g.state,{scroll:Sa()}),"")}}function d(){for(const g of l)g();l=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:o,listen:p,destroy:d}}function Sl(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?Sa():null}}function Ku(e){const{history:t,location:n}=window,a={value:fs(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(o,p,u){const d=e.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+o:_u()+e+o;try{t[u?"replaceState":"pushState"](p,"",g),i.value=p}catch(b){console.error(b),n[u?"replace":"assign"](g)}}function s(o,p){l(o,pe({},t.state,Sl(i.value.back,o,i.value.forward,!0),p,{position:i.value.position}),!0),a.value=o}function c(o,p){const u=pe({},i.value,t.state,{forward:o,scroll:Sa()});l(u.current,u,!0),l(o,pe({},Sl(a.value,o,null),{position:u.position+1},p),!1),a.value=o}return{location:a,state:i,push:c,replace:s}}function Bu(e){e=Au(e);const t=Ku(e),n=Iu(e,t.state,t.location,t.replace);function a(l,s=!0){s||n.pauseListeners(),history.go(l)}const i=pe({location:"",base:e,go:a,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Bu(e)}let Xt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Re=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Re||{});const Ou={type:Xt.Static,value:""},Lu=/[a-zA-Z0-9_]/;function Gu(e){if(!e)return[[]];if(e==="/")return[[Ou]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${p}": ${b}`)}let n=Re.Static,a=n;const i=[];let l;function s(){l&&i.push(l),l=[]}let c=0,o,p="",u="";function d(){p&&(n===Re.Static?l.push({type:Xt.Static,value:p}):n===Re.Param||n===Re.ParamRegExp||n===Re.ParamRegExpEnd?(l.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Xt.Param,value:p,regexp:u,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),p="")}function g(){p+=o}for(;c<e.length;){if(o=e[c++],o==="\\"&&n!==Re.ParamRegExp){a=n,n=Re.EscapeNext;continue}switch(n){case Re.Static:o==="/"?(p&&d(),s()):o===":"?(d(),n=Re.Param):g();break;case Re.EscapeNext:g(),n=a;break;case Re.Param:o==="("?n=Re.ParamRegExp:Lu.test(o)?g():(d(),n=Re.Static,o!=="*"&&o!=="?"&&o!=="+"&&c--);break;case Re.ParamRegExp:o===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+o:n=Re.ParamRegExpEnd:u+=o;break;case Re.ParamRegExpEnd:d(),n=Re.Static,o!=="*"&&o!=="?"&&o!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===Re.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),s(),i}const Cl="[^/]+?",Uu={sensitive:!1,strict:!1,start:!0,end:!0};var Ge=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ge||{});const ju=/[.+*?^${}()[\]/\\]/g;function Hu(e,t){const n=pe({},Uu,t),a=[];let i=n.start?"^":"";const l=[];for(const p of e){const u=p.length?[]:[Ge.Root];n.strict&&!p.length&&(i+="/");for(let d=0;d<p.length;d++){const g=p[d];let b=Ge.Segment+(n.sensitive?Ge.BonusCaseSensitive:0);if(g.type===Xt.Static)d||(i+="/"),i+=g.value.replace(ju,"\\$&"),b+=Ge.Static;else if(g.type===Xt.Param){const{value:v,repeatable:h,optional:A,regexp:y}=g;l.push({name:v,repeatable:h,optional:A});const S=y||Cl;if(S!==Cl){b+=Ge.BonusCustomRegExp;try{`${S}`}catch(E){throw new Error(`Invalid custom RegExp for param "${v}" (${S}): `+E.message)}}let I=h?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(I=A&&p.length<2?`(?:/${I})`:"/"+I),A&&(I+="?"),i+=I,b+=Ge.Dynamic,A&&(b+=Ge.BonusOptional),h&&(b+=Ge.BonusRepeatable),S===".*"&&(b+=Ge.BonusWildcard)}u.push(b)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=Ge.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(p){const u=p.match(s),d={};if(!u)return null;for(let g=1;g<u.length;g++){const b=u[g]||"",v=l[g-1];d[v.name]=b&&v.repeatable?b.split("/"):b}return d}function o(p){let u="",d=!1;for(const g of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const b of g)if(b.type===Xt.Static)u+=b.value;else if(b.type===Xt.Param){const{value:v,repeatable:h,optional:A}=b,y=v in p?p[v]:"";if(st(y)&&!h)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const S=st(y)?y.join("/"):y;if(!S)if(A)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=S}}return u||"/"}return{re:s,score:a,keys:l,parse:c,stringify:o}}function Fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ge.Static+Ge.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ge.Static+Ge.Segment?1:-1:0}function gs(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=Fu(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(El(a))return 1;if(El(i))return-1}return i.length-a.length}function El(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vu={strict:!1,end:!0,sensitive:!1};function Ju(e,t,n){const a=Hu(Gu(e.path),n),i=pe(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Wu(e,t){const n=[],a=new Map;t=yl(Vu,t);function i(d){return a.get(d)}function l(d,g,b){const v=!b,h=_l(d);h.aliasOf=b&&b.record;const A=yl(t,d),y=[h];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const W of E)y.push(_l(pe({},h,{components:b?b.record.components:h.components,path:W,aliasOf:b?b.record:h})))}let S,I;for(const E of y){const{path:W}=E;if(g&&W[0]!=="/"){const ae=g.record.path,oe=ae[ae.length-1]==="/"?"":"/";E.path=g.record.path+(W&&oe+W)}if(S=Ju(E,g,A),b?b.alias.push(S):(I=I||S,I!==S&&I.alias.push(S),v&&d.name&&!Il(S)&&s(d.name)),ms(S)&&o(S),h.children){const ae=h.children;for(let oe=0;oe<ae.length;oe++)l(ae[oe],S,b&&b.children[oe])}b=b||S}return I?()=>{s(I)}:Cn}function s(d){if(ds(d)){const g=a.get(d);g&&(a.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(s),g.alias.forEach(s))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function c(){return n}function o(d){const g=zu(d,n);n.splice(g,0,d),d.record.name&&!Il(d)&&a.set(d.record.name,d)}function p(d,g){let b,v={},h,A;if("name"in d&&d.name){if(b=a.get(d.name),!b)throw mn(ye.MATCHER_NOT_FOUND,{location:d});A=b.record.name,v=pe(Tl(g.params,b.keys.filter(I=>!I.optional).concat(b.parent?b.parent.keys.filter(I=>I.optional):[]).map(I=>I.name)),d.params&&Tl(d.params,b.keys.map(I=>I.name))),h=b.stringify(v)}else if(d.path!=null)h=d.path,b=n.find(I=>I.re.test(h)),b&&(v=b.parse(h),A=b.record.name);else{if(b=g.name?a.get(g.name):n.find(I=>I.re.test(g.path)),!b)throw mn(ye.MATCHER_NOT_FOUND,{location:d,currentLocation:g});A=b.record.name,v=pe({},g.params,d.params),h=b.stringify(v)}const y=[];let S=b;for(;S;)y.unshift(S.record),S=S.parent;return{name:A,path:h,params:v,matched:y,meta:qu(y)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:p,removeRoute:s,clearRoutes:u,getRoutes:c,getRecordMatcher:i}}function Tl(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function _l(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Qu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Qu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Il(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qu(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function zu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;gs(e,t[l])<0?a=l:n=l+1}const i=$u(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function $u(e){let t=e;for(;t=t.parent;)if(ms(t)&&gs(e,t)===0)return t}function ms({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Kl(e){const t=nt(Ca),n=nt(Ti),a=ne(()=>{const o=Xe(e.to);return t.resolve(o)}),i=ne(()=>{const{matched:o}=a.value,{length:p}=o,u=o[p-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(gn.bind(null,u));if(g>-1)return g;const b=Bl(o[p-2]);return p>1&&Bl(u)===b&&d[d.length-1].path!==b?d.findIndex(gn.bind(null,o[p-2])):g}),l=ne(()=>i.value>-1&&t0(n.params,a.value.params)),s=ne(()=>i.value>-1&&i.value===n.matched.length-1&&us(n.params,a.value.params));function c(o={}){if(e0(o)){const p=t[Xe(e.replace)?"replace":"push"](Xe(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:ne(()=>a.value.href),isActive:l,isExactActive:s,navigate:c}}function Xu(e){return e.length===1?e[0]:e}const Zu=Dr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Kl,setup(e,{slots:t}){const n=bn(Kl(e)),{options:a}=nt(Ca),i=ne(()=>({[Nl(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Nl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Xu(t.default(n));return e.custom?l:Ci("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),Yu=Zu;function e0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function t0(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!st(i)||i.length!==a.length||a.some((l,s)=>l.valueOf()!==i[s].valueOf()))return!1}return!0}function Bl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nl=(e,t,n)=>e??t??n,n0=Dr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=nt(ui),i=ne(()=>e.route||a.value),l=nt(Rl,0),s=ne(()=>{let p=Xe(l);const{matched:u}=i.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),c=ne(()=>i.value.matched[s.value]);Xn(Rl,ne(()=>s.value+1)),Xn(Eu,c),Xn(ui,i);const o=le();return Mt(()=>[o.value,c.value,e.name],([p,u,d],[g,b,v])=>{u&&(u.instances[d]=p,b&&b!==u&&p&&p===g&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),p&&u&&(!b||!gn(u,b)||!g)&&(u.enterCallbacks[d]||[]).forEach(h=>h(p))},{flush:"post"}),()=>{const p=i.value,u=e.name,d=c.value,g=d&&d.components[u];if(!g)return Ol(n.default,{Component:g,route:p});const b=d.props[u],v=b?b===!0?p.params:typeof b=="function"?b(p):b:null,A=Ci(g,pe({},v,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[u]=null)},ref:o}));return Ol(n.default,{Component:A,route:p})||A}}});function Ol(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const a0=n0;function i0(e){const t=Wu(e.routes,e),n=e.parseQuery||Su,a=e.stringifyQuery||Dl,i=e.history,l=xn(),s=xn(),c=xn(),o=io(_t);let p=_t;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ha.bind(null,P=>""+P),d=Ha.bind(null,du),g=Ha.bind(null,Gn);function b(P,M){let B,U;return ds(P)?(B=t.getRecordMatcher(P),U=M):U=P,t.addRoute(U,B)}function v(P){const M=t.getRecordMatcher(P);M&&t.removeRoute(M)}function h(){return t.getRoutes().map(P=>P.record)}function A(P){return!!t.getRecordMatcher(P)}function y(P,M){if(M=pe({},M||o.value),typeof P=="string"){const k=Fa(n,P,M.path),D=t.resolve({path:k.path},M),T=i.createHref(k.fullPath);return pe(k,D,{params:g(D.params),hash:Gn(k.hash),redirectedFrom:void 0,href:T})}let B;if(P.path!=null)B=pe({},P,{path:Fa(n,P.path,M.path).path});else{const k=pe({},P.params);for(const D in k)k[D]==null&&delete k[D];B=pe({},P,{params:d(k)}),M.params=d(M.params)}const U=t.resolve(B,M),Y=P.hash||"";U.params=u(g(U.params));const f=gu(a,pe({},P,{hash:ou(Y),path:U.path})),m=i.createHref(f);return pe({fullPath:f,hash:Y,query:a===Dl?Cu(P.query):P.query||{}},U,{redirectedFrom:void 0,href:m})}function S(P){return typeof P=="string"?Fa(n,P,o.value.path):pe({},P)}function I(P,M){if(p!==P)return mn(ye.NAVIGATION_CANCELLED,{from:M,to:P})}function E(P){return oe(P)}function W(P){return E(pe(S(P),{replace:!0}))}function ae(P,M){const B=P.matched[P.matched.length-1];if(B&&B.redirect){const{redirect:U}=B;let Y=typeof U=="function"?U(P,M):U;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=S(Y):{path:Y},Y.params={}),pe({query:P.query,hash:P.hash,params:Y.path!=null?{}:P.params},Y)}}function oe(P,M){const B=p=y(P),U=o.value,Y=P.state,f=P.force,m=P.replace===!0,k=ae(B,U);if(k)return oe(pe(S(k),{state:typeof k=="object"?pe({},Y,k.state):Y,force:f,replace:m}),M||B);const D=B;D.redirectedFrom=M;let T;return!f&&mu(a,U,B)&&(T=mn(ye.NAVIGATION_DUPLICATED,{to:D,from:U}),Oe(U,U,!0,!1)),(T?Promise.resolve(T):Z(D,U)).catch(R=>kt(R)?kt(R,ye.NAVIGATION_GUARD_REDIRECT)?R:ot(R):se(R,D,U)).then(R=>{if(R){if(kt(R,ye.NAVIGATION_GUARD_REDIRECT))return oe(pe({replace:m},S(R.to),{state:typeof R.to=="object"?pe({},Y,R.to.state):Y,force:f}),M||D)}else R=j(D,U,!0,m,Y);return re(D,U,R),R})}function Pe(P,M){const B=I(P,M);return B?Promise.reject(B):Promise.resolve()}function V(P){const M=F.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(P):P()}function Z(P,M){let B;const[U,Y,f]=Tu(P,M);B=Ja(U.reverse(),"beforeRouteLeave",P,M);for(const k of U)k.leaveGuards.forEach(D=>{B.push(Lt(D,P,M))});const m=Pe.bind(null,P,M);return B.push(m),te(B).then(()=>{B=[];for(const k of l.list())B.push(Lt(k,P,M));return B.push(m),te(B)}).then(()=>{B=Ja(Y,"beforeRouteUpdate",P,M);for(const k of Y)k.updateGuards.forEach(D=>{B.push(Lt(D,P,M))});return B.push(m),te(B)}).then(()=>{B=[];for(const k of f)if(k.beforeEnter)if(st(k.beforeEnter))for(const D of k.beforeEnter)B.push(Lt(D,P,M));else B.push(Lt(k.beforeEnter,P,M));return B.push(m),te(B)}).then(()=>(P.matched.forEach(k=>k.enterCallbacks={}),B=Ja(f,"beforeRouteEnter",P,M,V),B.push(m),te(B))).then(()=>{B=[];for(const k of s.list())B.push(Lt(k,P,M));return B.push(m),te(B)}).catch(k=>kt(k,ye.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function re(P,M,B){c.list().forEach(U=>V(()=>U(P,M,B)))}function j(P,M,B,U,Y){const f=I(P,M);if(f)return f;const m=M===_t,k=ln?history.state:{};B&&(U||m?i.replace(P.fullPath,pe({scroll:m&&k&&k.scroll},Y)):i.push(P.fullPath,Y)),o.value=P,Oe(P,M,B,m),ot()}let ee;function Me(){ee||(ee=i.listen((P,M,B)=>{if(!x.listening)return;const U=y(P),Y=ae(U,x.currentRoute.value);if(Y){oe(pe(Y,{replace:!0,force:!0}),U).catch(Cn);return}p=U;const f=o.value;ln&&wu(Ml(f.fullPath,B.delta),Sa()),Z(U,f).catch(m=>kt(m,ye.NAVIGATION_ABORTED|ye.NAVIGATION_CANCELLED)?m:kt(m,ye.NAVIGATION_GUARD_REDIRECT)?(oe(pe(S(m.to),{force:!0}),U).then(k=>{kt(k,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&!B.delta&&B.type===oi.pop&&i.go(-1,!1)}).catch(Cn),Promise.reject()):(B.delta&&i.go(-B.delta,!1),se(m,U,f))).then(m=>{m=m||j(U,f,!1),m&&(B.delta&&!kt(m,ye.NAVIGATION_CANCELLED)?i.go(-B.delta,!1):B.type===oi.pop&&kt(m,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),re(U,f,m)}).catch(Cn)}))}let Ce=xn(),xe=xn(),de;function se(P,M,B){ot(P);const U=xe.list();return U.length?U.forEach(Y=>Y(P,M,B)):console.error(P),Promise.reject(P)}function He(){return de&&o.value!==_t?Promise.resolve():new Promise((P,M)=>{Ce.add([P,M])})}function ot(P){return de||(de=!P,Me(),Ce.list().forEach(([M,B])=>P?B(P):M()),Ce.reset()),P}function Oe(P,M,B,U){const{scrollBehavior:Y}=e;if(!ln||!Y)return Promise.resolve();const f=!B&&Pu(Ml(P.fullPath,0))||(U||!B)&&history.state&&history.state.scroll||null;return xa().then(()=>Y(P,M,f)).then(m=>m&&yu(m)).catch(m=>se(m,P,M))}const Te=P=>i.go(P);let ht;const F=new Set,x={currentRoute:o,listening:!0,addRoute:b,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:h,resolve:y,options:e,push:E,replace:W,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:l.add,beforeResolve:s.add,afterEach:c.add,onError:xe.add,isReady:He,install(P){P.component("RouterLink",Yu),P.component("RouterView",a0),P.config.globalProperties.$router=x,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(o)}),ln&&!ht&&o.value===_t&&(ht=!0,E(i.location).catch(U=>{}));const M={};for(const U in _t)Object.defineProperty(M,U,{get:()=>o.value[U],enumerable:!0});P.provide(Ca,x),P.provide(Ti,ur(M)),P.provide(ui,o);const B=P.unmount;F.add(P),P.unmount=function(){F.delete(P),F.size<1&&(p=_t,ee&&ee(),ee=null,o.value=_t,ht=!1,de=!1),B()}}};function te(P){return P.reduce((M,B)=>M.then(()=>V(B)),Promise.resolve())}return x}function Vn(){return nt(Ca)}function Ea(e){return nt(Ti)}const Vt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},l0={class:"absolute inset-0 pointer-events-none z-0"},r0={class:"fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-5xl"},s0={class:"hidden sm:flex flex-col ml-2 leading-tight overflow-hidden"},o0={class:"font-black italic text-xs md:text-base uppercase tracking-widest truncate"},c0={class:"flex-1 flex justify-center px-1 overflow-hidden"},u0={class:"relative flex bg-black/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner overflow-hidden w-fit"},d0={class:"flex justify-end z-10 pr-2 flex-shrink-0"},p0={class:"text-xs md:text-lg"},f0={class:"max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},g0={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=Ea(),n=Vn(),a=le(null),i=le({}),l=le({left:"0px",width:"0px",opacity:0}),s=()=>n.push("/"),c=Array.from({length:80},(d,g)=>({id:g,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),o=Array.from({length:40},(d,g)=>({id:g,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),p=(d,g)=>{d&&(i.value[g]=d.$el||d)},u=async()=>{await xa();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 6px 20px -3px rgba(245, 158, 11, 0.7)":"0 10px 25px -5px rgba(139, 92, 246, 0.7)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return tn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),Mt(()=>t.path,u),(d,g)=>{const b=ra("router-link");return C(),_("div",{class:w(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[r("div",l0,[(C(!0),_(z,null,ue(Xe(o),v=>(C(),_("div",{key:"dust-"+v.id,class:w(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:Pt({width:v.size,height:v.size,top:v.top,left:v.left,animationDuration:v.duration,animationDelay:v.delay})},null,6))),128)),(C(!0),_(z,null,ue(Xe(c),v=>(C(),_("div",{key:"star-"+v.id,class:w(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:Pt({width:v.size,height:v.size,top:v.top,left:v.left,animationDelay:v.delay})},null,6))),128))]),r("nav",r0,[r("div",{class:w(["backdrop-blur-3xl border flex items-center justify-between rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3",e.isDark?"bg-black/50 border-white/10 shadow-indigo-500/10":"bg-white/80 border-white/50 shadow-blue-500/5"])},[r("div",{onClick:s,class:"flex items-center cursor-pointer group select-none z-10 pl-2 pr-1 active:scale-95 transition-transform flex-shrink-0"},[r("div",{class:w(["w-8 h-8 md:w-11 md:h-11 overflow-hidden rounded-full border-2 transition-all duration-300 shadow-lg shrink-0",e.isDark?"border-white/20":"border-slate-300"])},[...g[1]||(g[1]=[r("img",{src:Ra,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),r("div",s0,[r("span",o0,[r("span",{class:w(e.isDark?"text-white":"text-black")},"TIMI",2),g[2]||(g[2]=r("span",{class:"ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"},"DB",-1))]),g[3]||(g[3]=r("span",{class:"text-[6px] md:text-[7px] font-bold uppercase opacity-50 tracking-widest truncate"},"Toram Online Tools",-1))])]),r("div",c0,[r("div",u0,[r("div",{ref_key:"navContainer",ref:a,class:"flex items-center relative gap-0"},[r("div",{class:"absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:Pt(l.value)},null,4),me(b,{ref:v=>p(v,"/"),to:"/",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[4]||(g[4]=[je("LIST BAG",-1)])]),_:1},512),me(b,{ref:v=>p(v,"/mq"),to:"/mq",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[5]||(g[5]=[je("LIST MQ",-1)])]),_:1},512),me(b,{ref:v=>p(v,"/mq-calc"),to:"/mq-calc",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[6]||(g[6]=[je("MQ-CALC",-1)])]),_:1},512),me(b,{ref:v=>p(v,"/bs-calc"),to:"/bs-calc",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[7]||(g[7]=[je("BS-CALC",-1)])]),_:1},512),me(b,{ref:v=>p(v,"/xtall"),to:"/xtall",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[8]||(g[8]=[je("XTALL",-1)])]),_:1},512)],512)])]),r("div",d0,[r("button",{onClick:g[0]||(g[0]=v=>d.$emit("toggleDark")),class:w(["w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-500 active:scale-75 shadow-lg shrink-0",e.isDark?"bg-slate-900 border-white/10 text-orange-400":"bg-white border-slate-200 text-indigo-600"])},[r("span",p0,L(e.isDark?"🌙":"☀️"),1)],2)])],2)]),r("main",f0,[Io(d.$slots,"default",{},void 0)])],2)}}},m0=Vt(g0,[["__scopeId","data-v-2236526c"]]),h0={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},b0={__name:"App",setup(e){const t=le(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return tn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=ra("router-view");return C(),_("div",h0,[me(m0,{isDark:t.value,onToggleDark:n},{default:We(()=>[me(l,null,{default:We(({Component:s})=>[me(da,{name:"slide-page",mode:"out-in"},{default:We(()=>[(C(),ca(_o(s),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},A0="/toram-vue/images/Bag-Toram.png",zn=[{id:1,slot:"50 ➔ 51",nama_item:"Colon Skin (Kulit Colon)",jumlah:"x1",spina:0,monster:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:2,slot:"51 ➔ 52",nama_item:"Gorgeous Fur (Kulit Berkualitas)",jumlah:"x1",spina:0,monster:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rakau Plains (Dataran Rakau) / Ruined Temple Town (Kota Kuil Runtuh)"},{id:3,slot:"52 ➔ 53",nama_item:"Spina",jumlah:"-",spina:1e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store (Toko Kelontong)"},{id:4,slot:"53 ➔ 54",nama_item:"Minotaur Skin (Kulit Minotaur)",jumlah:"x1",spina:0,monster:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ruined Temple: Forbidden Hall (Kuil Runtuh: Aula Terlarang)"},{id:5,slot:"53 ➔ 54",nama_item:"Orange Crystal Fragment (Pecahan Kristal Jingga)",jumlah:"x1",spina:0,monster:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:6,slot:"54 ➔ 55",nama_item:"Forest Wolf Skin (Kulit Anjing Hutan)",jumlah:"x1",spina:0,monster:"Forest Wolf (Anjing Hutan)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Marbaro Forest: Deepest Part (Hutan Marbaro: Bagian Dalam)"},{id:7,slot:"54 ➔ 55",nama_item:"Goblin Medal (Lencana Goblin)",jumlah:"x1",spina:0,monster:"Boss Goblin (Goblin Bos)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Ribisco Cave: Deepest Part (Gua Ribisco: Bagian Dalam)"},{id:8,slot:"55 ➔ 56",nama_item:"Spina",jumlah:"-",spina:2e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:9,slot:"56 ➔ 57",nama_item:"Mochelo Fur (Bulu Mochelo)",jumlah:"x1",spina:0,monster:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:10,slot:"56 ➔ 57",nama_item:"Linen Cloth (Kain Linen)",jumlah:"x10",spina:0,monster:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Douce Hamlet (Dusun Douce)"},{id:11,slot:"57 ➔ 58",nama_item:"Green Dragon Fur (Bulu Naga Giok)",jumlah:"x1",spina:0,monster:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Land of Chaos (Tanah Kaos)"},{id:12,slot:"57 ➔ 58",nama_item:"High Quality Horn (Tanduk Berkualitas)",jumlah:"x10",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Yorl Highlands (Tanah Tinggi Yorl)"},{id:13,slot:"58 ➔ 59",nama_item:"Boss Roga Belt (Sabuk Bos Roga)",jumlah:"x1",spina:0,monster:"Boss Roga (Bos Roga)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:14,slot:"58 ➔ 59",nama_item:"Broadcloth (Kain Beludu)",jumlah:"x10",spina:0,monster:"Orc / Orc Warrior (Orc Petarung)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Saham Crater (Kawah Saham) / Saham Underground Cave (Gua Bawah Tanah Saham)"},{id:15,slot:"59 ➔ 60",nama_item:"Spina",jumlah:"-",spina:4e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:16,slot:"60 ➔ 61",nama_item:"Sharp Bear Claw (Cakar Beruang)",jumlah:"x2",spina:0,monster:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Darkanon Plain (Padang Darkanon)"},{id:17,slot:"60 ➔ 61",nama_item:"Sheeting Fabric (Kain Alas)",jumlah:"x20",spina:0,monster:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ancient Empress Tomb (Makam Ratu Kuno: Area 2/3)"},{id:18,slot:"61 ➔ 62",nama_item:"Heavy Tough Chain (Rantai Kukuh)",jumlah:"x2",spina:0,monster:"Masked Warrior (Pendekar Beratopeng)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:19,slot:"61 ➔ 62",nama_item:"Polyester Cloth (Kain Polister)",jumlah:"x20",spina:0,monster:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Lost Town (Kota Hilang)"},{id:20,slot:"62 ➔ 63",nama_item:"Grass Dragon Scale (Sisik Naga Sabana)",jumlah:"x2",spina:0,monster:"Grass Dragon Yelb (Naga Sabana Yelb)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Albatif Village (Desa Albatif)"},{id:21,slot:"62 ➔ 63",nama_item:"Space Wolf Fur (Kulit Serigala Alien)",jumlah:"x20",spina:0,monster:"Outer World Wolf (Serigala Luar)",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Gate to Another World (Gerbang Dunia Lain)"},{id:22,slot:"63 ➔ 64",nama_item:"Spina",jumlah:"-",spina:8e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:23,slot:"64 ➔ 65",nama_item:"Torn Cloak (Jubah Sobek)",jumlah:"x2",spina:0,monster:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Akaku Desert: Hill (Gurun Akaku: Bukit)"},{id:24,slot:"64 ➔ 65",nama_item:"Squirrel Fur (Kulit Tupai)",jumlah:"x20",spina:0,monster:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item:"Jade Raptor Horn (Tanduk Elang Zamrud)",jumlah:"x2",spina:0,monster:"Jade Raptor (Elang Zamrud)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Gravel Terrace (Teras Kerikil)"},{id:26,slot:"65 ➔ 66",nama_item:"Goat Fur (Bulu Kambing)",jumlah:"x20",spina:0,monster:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dunkel Valley (Jurang Dunkel)"},{id:27,slot:"66 ➔ 67",nama_item:"Twilight Dragon Wing (Sayap Naga Senja)",jumlah:"x2",spina:0,monster:"Twilight Dragon (Naga Senja)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fort Solfini: Roof (Benteng Solfini: Atap)"},{id:28,slot:"66 ➔ 67",nama_item:"Fleecy Fur (Bulu Halus)",jumlah:"x20",spina:0,monster:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Polde Ice Valley (Lembah Es Polde)"},{id:29,slot:"67 ➔ 68",nama_item:"Spina",jumlah:"-",spina:16e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:30,slot:"68 ➔ 69",nama_item:"Chain of Purgatory (Rantai Penyucian)",jumlah:"x2",spina:0,monster:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi:"Spring of Rebirth: Top (Mata Air Kelahiran: Puncak)"},{id:31,slot:"68 ➔ 69",nama_item:"Wavering Cloth (Kain Goyah)",jumlah:"x20",spina:0,monster:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Spring of Rebirth (Mata Air Kelahiran: Tengah/Atas)"},{id:32,slot:"69 ➔ 70",nama_item:"Aranea Silk (Benang Aranea)",jumlah:"x2",spina:0,monster:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Pusat)"},{id:33,slot:"69 ➔ 70",nama_item:"Small Spider Silk (Benang Laba-Laba Kecil)",jumlah:"x20",spina:0,monster:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Area 2/3)"},{id:34,slot:"70 ➔ 71",nama_item:"Copied Goddess Robe (Kain Dewi Tiruan)",jumlah:"x3",spina:0,monster:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Dark Castle: Grand Hall (Istana Gelap: Aula Besar)"},{id:35,slot:"70 ➔ 71",nama_item:"Floating Cloth (Kain Apung)",jumlah:"x10",spina:0,monster:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cradle of Soldier (Buaian Prajurit)"},{id:36,slot:"70 ➔ 71",nama_item:"Soft Paw (Tapak Lembut)",jumlah:"x20",spina:0,monster:"Bunny Summoner / Lapin (Dukun Lapin)",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Trace of Dark River (Sungai Kegelapan)"},{id:37,slot:"71 ➔ 72",nama_item:"Evil Beast Mane (Surai Hewan Iblis)",jumlah:"x3",spina:0,monster:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Dark Castle: Area 2 (Istana Gelap: Area 2)"},{id:38,slot:"71 ➔ 72",nama_item:"Hard Paw Pad (Bantalan Tapak Keras)",jumlah:"x10",spina:0,monster:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:39,slot:"71 ➔ 72",nama_item:"Dark Shadow Feather (Bulu Bayangan Hitam)",jumlah:"x20",spina:0,monster:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:40,slot:"72 ➔ 73",nama_item:"Spina",jumlah:"-",spina:32e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:41,slot:"73 ➔ 74",nama_item:"Tapir Fur (Bulu Tapir)",jumlah:"x3",spina:0,monster:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:42,slot:"73 ➔ 74",nama_item:"Stiff Fur (Bulu Kaku)",jumlah:"x10",spina:0,monster:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:43,slot:"73 ➔ 74",nama_item:"Anti-Rust Oil (Minyak Anti-Karat)",jumlah:"x20",spina:0,monster:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Artillery Defense Line (Garis Pertahanan Artileri Otomatis)"},{id:44,slot:"74 ➔ 75",nama_item:"Ancient Fabric (Kain Kuno)",jumlah:"x3",spina:0,monster:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Singolare Ruins: 3rd Floor (Reruntuhan Singolare: Lantai 3)"},{id:45,slot:"74 ➔ 75",nama_item:"Soft Tree Bark (Kulit Pohon Lunak)",jumlah:"x10",spina:0,monster:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Site of Simscracker (Situs Simcracker)"},{id:46,slot:"74 ➔ 75",nama_item:"Dirty Potum Hair (Rambut Potum Kotor)",jumlah:"x20",spina:0,monster:"Slum Potum",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Klaspe Slum (Klaspe Kumuh)"},{id:47,slot:"75 ➔ 76",nama_item:"Crimson Huge Bone (Tulang Raksasa Merah)",jumlah:"x3",spina:0,monster:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil: Area 2)"},{id:48,slot:"75 ➔ 76",nama_item:"Torn Black Coat (Mantel Hitam Sobek)",jumlah:"x10",spina:0,monster:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:49,slot:"75 ➔ 76",nama_item:"Torn Chain (Rantai Putus)",jumlah:"x20",spina:0,monster:"Torture Machina (Machina Penyiksa)",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:50,slot:"76 ➔ 77",nama_item:"Chimera Scale (Sisik Chimera)",jumlah:"x3",spina:0,monster:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar: Bagian Terdalam)"},{id:51,slot:"76 ➔ 77",nama_item:"Mysterious Luminary (Benda Pendar Aneh)",jumlah:"x10",spina:0,monster:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:52,slot:"76 ➔ 77",nama_item:"Tough Tentacle (Tentakel Tangguh)",jumlah:"x20",spina:0,monster:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:53,slot:"77 ➔ 78",nama_item:"Spina",jumlah:"-",spina:64e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:54,slot:"78 ➔ 79",nama_item:"Forest Spirit Robe (Jubah Roh Hutan)",jumlah:"x3",spina:0,monster:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Monster Forest: Deep Part (Hutan Monster: Bagian Dalam)"},{id:55,slot:"78 ➔ 79",nama_item:"Plant Fang (Taring Tanaman)",jumlah:"x10",spina:0,monster:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Monster Forest (Hutan Monster)"},{id:56,slot:"78 ➔ 79",nama_item:"Felt Fabric (Kain Felt)",jumlah:"x20",spina:0,monster:"Puppet Dragon (Naga Boneka)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lufenas Mansion (Mansion Lufenas)"},{id:57,slot:"79 ➔ 80",nama_item:"Lyark Alloy (Aloi Lyark)",jumlah:"x3",spina:0,monster:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Cuervo Jail: Roof (Penjara Cuervo: Atap)"},{id:58,slot:"79 ➔ 80",nama_item:"Torn Officer Clothes (Baju Penjaga Robek)",jumlah:"x10",spina:0,monster:"Lyark Jailer (Sipir Lyark)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cuervo Jail (Penjara Cuervo)"},{id:59,slot:"79 ➔ 80",nama_item:"Ox Fabric (Kain Lembu)",jumlah:"x20",spina:0,monster:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Brahe Laboratory (Laboratorium Brahe)"},{id:60,slot:"80 ➔ 81",nama_item:"Light Emitting Cloth (Kain Bercahaya)",jumlah:"x4",spina:0,monster:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Buried Tower: Inside (Menara Penembus Bumi: Sisi Dalam)"},{id:61,slot:"80 ➔ 81",nama_item:"Damaged Artificial Leather (Kulit Sintetis Rusak)",jumlah:"x20",spina:0,monster:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:62,slot:"80 ➔ 81",nama_item:"Executioner Loincloth (Cawat Pengeksekusi)",jumlah:"x20",spina:0,monster:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:63,slot:"81 ➔ 82",nama_item:"Lil Empress Cloth Piece (Potongan Baju K. Kecil)",jumlah:"x4",spina:0,monster:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ultimea Palace: Throne (Istana Ultimea: Takhta)"},{id:64,slot:"81 ➔ 82",nama_item:"Hard Armor Bit (Pecahan Zirah Keras)",jumlah:"x20",spina:0,monster:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Ultimea Palace (Istana Ultimea)"},{id:65,slot:"81 ➔ 82",nama_item:"Snake Skin (Kulit Ular)",jumlah:"x20",spina:0,monster:"Pond Snake (Ular Kolam)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Copia Reservoirs (Reservoir Copia)"},{id:66,slot:"82 ➔ 83",nama_item:"Spina",jumlah:"-",spina:1e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:67,slot:"83 ➔ 84",nama_item:"Mom Fluck Skin (Kulit Mama Fluck)",jumlah:"x4",spina:0,monster:"Mom Fluck (Mama Fluck)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Forgotten Cave (Gua Pelupa)"},{id:68,slot:"83 ➔ 84",nama_item:"Colon Big Leaf (Daun Besar Colon)",jumlah:"x20",spina:0,monster:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Rokoko Plains (Dataran Rakoko)"},{id:69,slot:"83 ➔ 84",nama_item:"Vertical Stripe Fur (Bulu Garis Vertikal)",jumlah:"x20",spina:0,monster:"Tehon (Rakun Tambun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Curonne Forest (Hutan Currone)"},{id:70,slot:"84 ➔ 85",nama_item:"Mardula Spiritual Cloth (Kain Rohani Mardula)",jumlah:"x4",spina:0,monster:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Hall of Blessings Gods (Serambi Dewa Berkah)"},{id:71,slot:"84 ➔ 85",nama_item:"Mysterious Shiny Cloth (Kain Berkilau Misterius)",jumlah:"x20",spina:0,monster:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:72,slot:"84 ➔ 85",nama_item:"Grey Feather (Bulu Kelabu)",jumlah:"x20",spina:0,monster:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Ruins of Mt. Mithurna (Reruntuhan G. Mithurna)"},{id:73,slot:"85 ➔ 86",nama_item:"Carbuncle Fur (Mantel Carbuncle)",jumlah:"x4",spina:0,monster:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Hall of Construction Gods (Serambi Dewa Pembangunan)"},{id:74,slot:"85 ➔ 86",nama_item:"Knit Fabric (Kain Rajut)",jumlah:"x20",spina:0,monster:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Heresy Corridor (Koridor Heresi)"},{id:75,slot:"85 ➔ 86",nama_item:"Bag Bear Tail (Ekor Beruang Berkantong)",jumlah:"x20",spina:0,monster:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:76,slot:"86 ➔ 87",nama_item:"King Piton Fur (Bulu Raja Piton)",jumlah:"x4",spina:0,monster:"King Piton (Raja Piton)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Elf Mountains: Shrine (Pegunungan Elf: Kuil)"},{id:77,slot:"86 ➔ 87",nama_item:"Thick White Fur (Bulu Putih Lebat)",jumlah:"x20",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Garden of Ice & Snow (Taman Es & Salju)"},{id:78,slot:"86 ➔ 87",nama_item:"Stiff Grey Fur (Bulu Abu Kaku)",jumlah:"x20",spina:0,monster:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:79,slot:"87 ➔ 88",nama_item:"Ancient Ingot (Ingot Kuno)",jumlah:"x4",spina:0,monster:"Thug Golem (Golem Preman)",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi:"Dark Dragon Shrine: Middle (Kuil Naga Kegelapan: Tengah)"},{id:80,slot:"87 ➔ 88",nama_item:"Ice Wolf Fang (Taring Serigala Es)",jumlah:"x20",spina:0,monster:"Courloup (Serigala Tanduk)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:81,slot:"87 ➔ 88",nama_item:"Dusky Fabric (Kain Gelap)",jumlah:"x20",spina:0,monster:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Dragon Shrine (Kuil Naga Kegelapan)"},{id:82,slot:"88 ➔ 89",nama_item:"Spina",jumlah:"-",spina:2e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:83,slot:"89 ➔ 90",nama_item:"Tuscog Fang (Taring Tuscog)",jumlah:"x4",spina:0,monster:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:84,slot:"89 ➔ 90",nama_item:"Larva Silk (Sutra Ulat)",jumlah:"x20",spina:0,monster:"Moss Mole (Tikus Lumut)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Forest of Ein (Hutan Ein)"},{id:85,slot:"89 ➔ 90",nama_item:"Werewolf Fur (Taring Manusia Serigala)",jumlah:"x20",spina:0,monster:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:86,slot:"90 ➔ 91",nama_item:"Kuzto Splinter (Serpihan Kayu Kuzto)",jumlah:"x4",spina:0,monster:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi:"Labilans Sector: Square (Distrik Labilans: Alun-alun)"},{id:87,slot:"90 ➔ 91",nama_item:"Stoat Fur (Bulu Cerpelai)",jumlah:"x20",spina:0,monster:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fabriska Sector (Distrik Fabriska)"},{id:88,slot:"90 ➔ 91",nama_item:"Mysterious Waist Sash (Sabuk Pinggang Misterius)",jumlah:"x30",spina:0,monster:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fractum Sector (Distrik Fractum)"},{id:89,slot:"91 ➔ 92",nama_item:"Crystal Pouch (Kantong Kristal)",jumlah:"x5",spina:0,monster:"Canemofish (Nemopirania)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:90,slot:"91 ➔ 92",nama_item:"Cushy Tail (Ekor Lembu)",jumlah:"x20",spina:0,monster:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Labilans Sector (Distrik Labilans)"},{id:91,slot:"91 ➔ 92",nama_item:"Sturdy Papula (Papula Kuat)",jumlah:"x30",spina:0,monster:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:92,slot:"92 ➔ 93",nama_item:"Repthon Wings (Sayap Repthon)",jumlah:"x5",spina:0,monster:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone: Deepest Area (Zona Riset Deltzon: Area Terdalam)"},{id:93,slot:"92 ➔ 93",nama_item:"Legume Button (Kancing Polong)",jumlah:"x20",spina:0,monster:"Marquis Colon (Colon Marquis)",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Old Lufenas Mansion Ruins (Reruntuhan Mansion Lufenas Tua)"},{id:94,slot:"92 ➔ 93",nama_item:"Frock Coat Scrap (Kain Perca Jas Panjang)",jumlah:"x30",spina:0,monster:"Swirly Whirly (Gulingkar)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone (Zona Riset Deltzon)"},{id:95,slot:"93 ➔ 94",nama_item:"Empress Ogre Hair (Rambut Kaisar Siluman)",jumlah:"x5",spina:0,monster:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item:"Torn Red Cloth (Kain Merah Sobek)",jumlah:"x20",spina:0,monster:"Sand Bandits Potum (Potum Bandit Gurun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Geist Desert (Gurun Pasir Geist)"},{id:97,slot:"93 ➔ 94",nama_item:"Corroded Leather (Kulit Karatan)",jumlah:"x30",spina:0,monster:"Cabrigo (Jasman)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ruins of Urban Elban (Reruntuhan Elban Urban)"},{id:98,slot:"94 ➔ 95",nama_item:"Spina",jumlah:"-",spina:3e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:99,slot:"95 ➔ 96",nama_item:"Pisteus Bone (Tulang Pisteus)",jumlah:"x5",spina:0,monster:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Ducia Coast: Depths (Pesisir Ducia: Area Terdalam)"},{id:100,slot:"95 ➔ 96",nama_item:"Phantom Cloth (Kain Phantom)",jumlah:"x20",spina:0,monster:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lunagent Cliff Base (Dasar Tebing Lunagent)"},{id:101,slot:"95 ➔ 96",nama_item:"Sea Otter Fur (Bulu Berang-Berang Laut)",jumlah:"x30",spina:0,monster:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ducia Coast (Pesisir Ducia)"},{id:102,slot:"96 ➔ 97",nama_item:"Arachnidemon Wing (Sayap Arachnidemon)",jumlah:"x5",spina:0,monster:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Arche Valley: Depths (Lembah Arche: Area Terdalam)"},{id:103,slot:"96 ➔ 97",nama_item:"Metal Shackles (Belenggu Logam)",jumlah:"x20",spina:0,monster:"Bessy (Besy) / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi:"Arche Valley (Lembah Arche)"},{id:104,slot:"96 ➔ 97",nama_item:"Weird Snake Skin (Kulit Ular Aneh)",jumlah:"x30",spina:0,monster:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rokoko City Ruins (Reruntuhan Kota Rokoko) / Nezim Wetlands"},{id:105,slot:"97 ➔ 98",nama_item:"Slimy Hide (Jangat Berlendir)",jumlah:"x5",spina:0,monster:"Lord of Nezim (Datuk Nezim)",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:106,slot:"97 ➔ 98",nama_item:"Enty Cloth (Kain Enty)",jumlah:"x20",spina:0,monster:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:107,slot:"97 ➔ 98",nama_item:"Sturdy Core (Poros Kokoh)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:108,slot:"98 ➔ 99",nama_item:"Inferno Curse Cloth Scrap (Perca Gendam Geni)",jumlah:"x5",spina:0,monster:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Witch's Woods Depths (Rimba Penyihir: Area Terdalam)"},{id:109,slot:"98 ➔ 99",nama_item:"Kappa's Plate (Piring Kappa)",jumlah:"x20",spina:0,monster:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:110,slot:"98 ➔ 99",nama_item:"Crow Feather (Bulu Gagak)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:111,slot:"99 ➔ 100",nama_item:"Wriggling Latebra (Inti Latebra Menggeliat)",jumlah:"x5",spina:0,monster:"Trocostida (Trokostida)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item:"Viscous Liquid (Cairan Lekat)",jumlah:"x20",spina:0,monster:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item:"Bizarre Skin (Kulit Pelik)",jumlah:"x30",spina:0,monster:"Evil Eye (Mata Jahat) / Demonic Eye",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Morga Wasteland (Padang Morga)"}],k0={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},v0={class:"relative z-10 text-center md:text-left"},x0={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},y0={class:"flex items-center gap-2 select-none whitespace-nowrap"},w0={class:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"},P0={class:"text-[10px] md:text-xs font-black opacity-80 uppercase tracking-widest"},M0={class:"text-3xl md:text-5xl font-black italic mt-1 leading-none"},D0={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},R0={class:"relative"},S0={class:"relative group"},C0={class:"relative"},E0={class:"relative group"},T0={class:"relative"},_0={class:"relative group"},I0=["value"],K0={class:"hidden lg:block overflow-x-auto no-scrollbar"},B0={class:"w-full min-w-[1100px] border-collapse"},N0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},O0={class:"font-black text-blue-500 italic text-3xl"},L0={class:"p-8 font-black uppercase text-base border-r-[2px] border-lime-500/10"},G0={class:"p-8 text-center bg-black/5 border-r-[2px] border-lime-500/10"},U0={class:"font-black italic text-lime-600 text-5xl"},j0={class:"p-8 text-center font-black text-xl text-amber-600 border-r-[2px] border-lime-500/10"},H0={class:"p-8 text-[11px] font-bold uppercase opacity-60 border-r-[2px] border-lime-500/10"},F0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},V0={class:"p-8 font-black text-xl italic text-blue-600 uppercase tracking-tighter"},J0={class:"flex justify-between items-start"},W0={class:"flex-1 pr-4"},Q0={class:"text-[10px] font-black text-blue-500 mb-1"},q0={class:"text-4xl font-black italic text-lime-600"},z0={class:"border-l-[2px] pl-3 border-slate-300/30"},$0={class:"text-xl font-black block mt-1"},X0={class:"space-y-3"},Z0={class:"flex items-center gap-3"},Y0={class:"flex-1"},ed={class:"text-xs font-black uppercase text-indigo-500"},td={class:"flex items-center gap-3"},nd={class:"flex-1"},ad={class:"text-sm font-black italic text-blue-600 uppercase"},id={class:"flex flex-col gap-8 justify-center items-center pb-20"},ld={key:0,class:"flex flex-wrap justify-center items-center gap-2"},rd=["disabled"],sd={key:0,class:"text-blue-600 font-black px-2"},od=["onClick"],cd=["disabled"],ud={__name:"ListBag",props:["isDark"],setup(e){const t=le(""),n=le("All Class"),a=le("All Slot"),i=le(1),l=le(10),s=()=>{l.value===10?l.value=o.value.length:l.value=10,i.value=1},c=h=>{if(!h||h==="-")return"-";let A=h.toString().replace(/x/gi,"").trim();return A==="0"||A===""?"-":A},o=ne(()=>zn.filter(A=>{const y=t.value.toLowerCase(),S=A.kelas_mob||"",I=!t.value||A.nama_item?.toLowerCase().includes(y)||A.monster?.toLowerCase().includes(y)||A.lokasi?.toLowerCase().includes(y);let E=!0;n.value!=="All Class"&&(n.value==="Mob"?E=S==="Mob"||S==="Miniboss/Mob":n.value==="Miniboss"?E=S==="Miniboss"||S==="Miniboss/Mob":E=S===n.value);const W=a.value==="All Slot"||String(A.slot).includes(String(a.value));return I&&E&&W}).sort((A,y)=>{const S=parseInt(String(A.slot).match(/\d+/))||0,I=parseInt(String(y.slot).match(/\d+/))||0;return S-I}));Mt([t,n,a],()=>{i.value=1});const p=ne(()=>Math.ceil(o.value.length/l.value)||1),u=ne(()=>{const h=p.value,A=i.value;if(h<=5)return Array.from({length:h},(S,I)=>I+1);let y=[];return A<=3?y=[1,2,3,"...",h]:A>=h-2?y=[1,"...",h-2,h-1,h]:y=[1,"...",A,"...",h],y}),d=ne(()=>{const h=(i.value-1)*l.value;return o.value.slice(h,h+l.value)}),g=ne(()=>[...new Set(zn.map(A=>A.slot))].sort((A,y)=>(parseInt(A)||0)-(parseInt(y)||0))),b=ne(()=>[{label:"ALL ITEM",val:zn.length,grad:"from-blue-700 to-blue-500"},{label:"RESULTS",val:o.value.length,grad:"from-fuchsia-600 to-purple-600"},{label:"BOSS",val:zn.filter(h=>h.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600"},{label:"SLOTS",val:g.value.length,grad:"from-lime-500 to-emerald-600"}]),v=h=>{const A="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return h==="Mob"?A+"bg-green-500/10 text-green-500 border-green-500/50":h==="Miniboss/Mob"?A+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":h==="Miniboss"?A+"bg-purple-500/10 text-purple-500 border-purple-500/50":h==="Boss"?A+"bg-red-500/10 text-red-500 border-red-500/50":h==="Spina"?A+"bg-amber-500/10 text-amber-500 border-amber-500/50":A+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(h,A)=>(C(),_("div",{class:w(["bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans relative z-10",e.isDark?"text-white":"text-slate-900"])},[r("div",k0,[r("div",{class:w(["relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[A[8]||(A[8]=r("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[r("img",{src:A0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),r("div",v0,[r("h2",{class:w(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[...A[5]||(A[5]=[je(" LIST BAG",-1),r("br",null,null,-1),r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},"EXPANSION",-1)])],2),r("div",x0,[A[7]||(A[7]=r("div",{class:"flex items-center gap-3"},[r("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),r("img",{src:Ra,class:"h-8 md:h-12 w-auto object-contain"})],-1)),r("div",y0,[r("span",{class:w(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),A[6]||(A[6]=r("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),r("div",w0,[(C(!0),_(z,null,ue(b.value,y=>(C(),_("div",{key:y.label,class:w(["p-6 rounded-[2rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white",y.grad,e.isDark?"border-white/20":"border-black/5"])},[r("div",P0,L(y.label),1),r("div",M0,L(y.val),1)],2))),128))]),r("div",{class:w(["p-6 md:p-8 rounded-[2.5rem] border-[4px] backdrop-blur-xl shadow-2xl transition-all",e.isDark?"bg-black/40 border-indigo-500/50":"bg-white/80 border-indigo-600 shadow-indigo-100"])},[r("div",D0,[r("div",R0,[A[10]||(A[10]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Search Item",-1)),r("div",S0,[ve(r("input",{"onUpdate:modelValue":A[0]||(A[0]=y=>t.value=y),type:"text",placeholder:"Find items...",class:w(["w-full h-14 pl-14 pr-6 rounded-2xl border-[3px] font-bold outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},null,2),[[ze,t.value]]),A[9]||(A[9]=r("div",{class:"absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[r("circle",{cx:"11",cy:"11",r:"8"}),r("path",{d:"m21 21-4.3-4.3"})])],-1))])]),r("div",C0,[A[13]||(A[13]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Category",-1)),r("div",E0,[ve(r("select",{"onUpdate:modelValue":A[1]||(A[1]=y=>n.value=y),class:w(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[...A[11]||(A[11]=[r("option",null,"All Class",-1),r("option",null,"Mob",-1),r("option",null,"Miniboss",-1),r("option",null,"Boss",-1),r("option",null,"Spina",-1)])],2),[[at,n.value]]),A[12]||(A[12]=dn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><rect width="7" height="7" x="3" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="14" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="3" y="14" rx="1" data-v-b5293da0></rect></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])]),r("div",T0,[A[16]||(A[16]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Jump to Slot",-1)),r("div",_0,[ve(r("select",{"onUpdate:modelValue":A[2]||(A[2]=y=>a.value=y),class:w(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[A[14]||(A[14]=r("option",null,"All Slot",-1)),(C(!0),_(z,null,ue(g.value,y=>(C(),_("option",{key:y,value:y},"Slot "+L(y),9,I0))),128))],2),[[at,a.value]]),A[15]||(A[15]=dn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><circle cx="12" cy="12" r="10" data-v-b5293da0></circle><line x1="12" y1="8" x2="12" y2="16" data-v-b5293da0></line><line x1="8" y1="12" x2="16" y2="12" data-v-b5293da0></line></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])])])],2),r("div",{class:w(["border-[4px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80 shadow-lime-100"])},[r("div",K0,[r("table",B0,[r("thead",null,[r("tr",{class:w(["uppercase text-[10px] font-black tracking-widest border-b-[3px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[...A[17]||(A[17]=[r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Slot",-1),r("th",{class:"p-8 w-[20%] text-left border-r-[2px] border-lime-500/20"},"Item Name",-1),r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Total Need",-1),r("th",{class:"p-8 w-[15%] text-center border-r-[2px] border-lime-500/20"},"Spina Cost",-1),r("th",{class:"p-8 w-[15%] text-left border-r-[2px] border-lime-500/20"},"Source",-1),r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Type",-1),r("th",{class:"p-8 w-[20%] text-left"},"Location",-1)])],2)]),r("tbody",{class:w(["divide-y-[2px]",e.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(C(!0),_(z,null,ue(d.value,y=>(C(),_("tr",{key:y.id,class:"hover:bg-indigo-500/5 transition-all group"},[r("td",N0,[r("span",O0,L(y.slot),1)]),r("td",L0,L(y.nama_item),1),r("td",G0,[r("span",U0,L(c(y.jumlah)),1)]),r("td",j0,L(y.spina>0?Number(y.spina).toLocaleString():"-"),1),r("td",H0,L(y.monster||"-"),1),r("td",F0,[r("span",{class:w(v(y.kelas_mob))},L(y.kelas_mob),3)]),r("td",V0,L(y.lokasi),1)]))),128))],2)])]),r("div",{class:w(["lg:hidden divide-y-[3px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(C(!0),_(z,null,ue(d.value,y=>(C(),_("div",{key:y.id,class:"p-6 space-y-4"},[r("div",J0,[r("div",W0,[r("div",Q0,"SLOT "+L(y.slot),1),r("h3",{class:w(["font-black uppercase text-xl leading-tight",e.isDark?"text-white":"text-slate-900"])},L(y.nama_item),3)]),r("div",{class:w([v(y.kelas_mob),"!min-w-fit !px-2"])},L(y.kelas_mob),3)]),r("div",{class:w(["grid grid-cols-2 gap-3 border-[3px] p-4 rounded-2xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[r("div",null,[A[18]||(A[18]=r("span",{class:"text-[9px] font-black text-lime-600 uppercase block"},"Need",-1)),r("span",q0,L(c(y.jumlah)),1)]),r("div",z0,[A[19]||(A[19]=r("span",{class:"text-[9px] font-black text-amber-600 uppercase block"},"Cost",-1)),r("span",$0,L(y.spina>0?Number(y.spina).toLocaleString():"-"),1)])],2),r("div",X0,[r("div",Z0,[A[21]||(A[21]=dn('<div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-indigo-500" data-v-b5293da0><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" data-v-b5293da0></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-b5293da0></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-b5293da0></line></svg></div>',1)),r("div",Y0,[A[20]||(A[20]=r("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Drop From:",-1)),r("span",ed,L(y.monster||"-"),1)])]),r("div",td,[A[23]||(A[23]=r("div",{class:"w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3",class:"text-red-500"},[r("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),r("circle",{cx:"12",cy:"10",r:"3"})])],-1)),r("div",nd,[A[22]||(A[22]=r("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Map:",-1)),r("span",ad,L(y.lokasi),1)])])])]))),128))],2)],2),r("div",id,[p.value>1?(C(),_("div",ld,[r("button",{onClick:A[3]||(A[3]=y=>i.value--),disabled:i.value===1,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," « ",8,rd),(C(!0),_(z,null,ue(u.value,(y,S)=>(C(),_(z,{key:S},[y==="..."?(C(),_("span",sd,"...")):(C(),_("button",{key:1,onClick:I=>i.value=y,class:w(["h-12 w-12 rounded-xl border-[3px] font-black transition-all active:scale-90",i.value===y?"bg-blue-600 border-blue-600 text-white shadow-lg":e.isDark?"bg-black/40 border-blue-800 text-blue-400":"bg-white border-blue-200 text-blue-600"])},L(y),11,od))],64))),128)),r("button",{onClick:A[4]||(A[4]=y=>i.value++),disabled:i.value===p.value,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," » ",8,cd)])):De("",!0),r("button",{onClick:s,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:brightness-110 active:scale-95 transition-all shadow-xl"},L(l.value===10?"Explore All Database":"Collapse to 10 Rows"),1)])])],2))}},dd=Vt(ud,[["__scopeId","data-v-b5293da0"]]),pd="/toram-vue/images/mq.png",di=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],fd=()=>[...new Set(di.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),gd={class:"bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans"},md={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},hd={class:"relative z-10 text-center md:text-left"},bd={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},Ad={class:"flex items-center gap-2 select-none whitespace-nowrap"},kd={class:"grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"},vd={class:"text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mb-1"},xd={class:"text-3xl md:text-6xl font-black italic tracking-tighter leading-none"},yd={class:"flex flex-col gap-2"},wd={class:"flex flex-col gap-2"},Pd=["value"],Md={class:"hidden lg:block overflow-x-auto"},Dd={class:"w-full border-collapse"},Rd={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},Sd={class:"p-8 text-center bg-black/5"},Cd={class:"font-black italic text-5xl text-indigo-600"},Ed={class:"flex justify-between items-center"},Td={class:"text-2xl font-black italic text-indigo-500/30"},_d={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},Id={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},Kd={class:"text-right"},Bd={class:"text-4xl font-black italic text-indigo-600"},Nd={class:"flex flex-col gap-6 justify-center items-center pb-20"},Od={key:0,class:"flex flex-wrap justify-center items-center gap-2"},Ld=["disabled"],Gd={key:0,class:"text-indigo-500 font-black px-2"},Ud=["onClick"],jd=["disabled"],Hd={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=Ea(),i=Vn(),l=le(a.query.search||""),s=le(a.query.chapter||"Semua Chapter"),c=le(parseInt(a.query.page)||1),o=le(parseInt(a.query.per_page)||10),p=fd(),u=ne(()=>di.filter(S=>{const I=l.value.toLowerCase(),E=S.nama_item.toLowerCase().includes(I)||S.chapter.toLowerCase().includes(I),W=s.value==="Semua Chapter"||S.chapter===s.value;return E&&W})),d=ne(()=>Math.ceil(u.value.length/o.value)||1),g=ne(()=>{const S=(c.value-1)*o.value;return u.value.slice(S,S+o.value)}),b=()=>{o.value===10?o.value=u.value.length:o.value=10,c.value=1,v()},v=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:s.value!=="Semua Chapter"?s.value:void 0,per_page:o.value,page:c.value}})},h=S=>{S>=1&&S<=d.value&&(c.value=S,v())};Mt([l,s],()=>{c.value=1,v()});const A=ne(()=>{const S=d.value,I=c.value;if(S<=5)return Array.from({length:S},(W,ae)=>ae+1);let E=[];return I<=3?E=[1,2,3,"...",S]:I>=S-2?E=[1,"...",S-2,S-1,S]:E=[1,"...",I,"...",S],E}),y=ne(()=>[{label:"ALL ITEM",val:di.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:p.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:p.length>0?p[p.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]);return(S,I)=>(C(),_("div",gd,[r("div",md,[r("div",{class:w(["relative p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-[4px] shadow-2xl overflow-hidden backdrop-blur-xl transition-all",n.isDark?"border-indigo-500 bg-black/40":"border-indigo-600 bg-white/70 shadow-indigo-100"])},[I[7]||(I[7]=r("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[r("img",{src:pd,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),r("div",hd,[r("h2",{class:w(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[...I[4]||(I[4]=[je(" MAIN QUEST",-1),r("br",null,null,-1),r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),r("div",bd,[I[6]||(I[6]=r("div",{class:"flex items-center gap-3"},[r("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),r("img",{src:Ra,class:"h-8 md:h-12 w-auto object-contain"})],-1)),r("div",Ad,[r("span",{class:w(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),I[5]||(I[5]=r("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),r("div",kd,[(C(!0),_(z,null,ue(y.value,E=>(C(),_("div",{key:E.label,class:w(["aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] border-white/20 shadow-xl text-white bg-gradient-to-br transition-all hover:scale-105 active:scale-95",E.grad])},[r("span",vd,L(E.label),1),r("span",xd,L(E.val),1)],2))),128))]),r("div",{class:w(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[r("div",yd,[I[8]||(I[8]=r("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),ve(r("input",{"onUpdate:modelValue":I[0]||(I[0]=E=>l.value=E),type:"text",placeholder:"Find MQ item...",class:w(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[ze,l.value]])]),r("div",wd,[I[10]||(I[10]=r("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),ve(r("select",{"onUpdate:modelValue":I[1]||(I[1]=E=>s.value=E),class:w(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[I[9]||(I[9]=r("option",{value:"Semua Chapter"},"All Chapter",-1)),(C(!0),_(z,null,ue(Xe(p),E=>(C(),_("option",{key:E,value:E},L(E),9,Pd))),128))],2),[[at,s.value]])])],2),r("div",{class:w(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[r("div",Md,[r("table",Dd,[r("thead",null,[r("tr",{class:w(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[r("th",{class:w(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),r("th",{class:w(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),r("th",{class:w(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),I[11]||(I[11]=r("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),r("tbody",{class:w(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(C(!0),_(z,null,ue(g.value,(E,W)=>(C(),_("tr",{key:W,class:"hover:bg-indigo-500/5 transition-all"},[r("td",{class:w(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},L((c.value-1)*o.value+W+1),3),r("td",{class:w(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[r("span",Rd,L(E.chapter),1)],2),r("td",{class:w(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},L(E.nama_item),3),r("td",Sd,[r("span",Cd,L(E.jumlah),1)])]))),128))],2)])]),r("div",{class:w(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(C(!0),_(z,null,ue(g.value,(E,W)=>(C(),_("div",{key:W,class:"p-6 space-y-4"},[r("div",Ed,[r("span",Td,"#"+L((c.value-1)*o.value+W+1),1),r("span",_d,L(E.chapter),1)]),r("div",{class:w(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[r("div",Id,L(E.nama_item),1),r("div",Kd,[I[12]||(I[12]=r("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),r("span",Bd,L(E.jumlah),1)])],2)]))),128))],2)],2),r("div",Nd,[d.value>1?(C(),_("div",Od,[r("button",{onClick:I[2]||(I[2]=E=>h(c.value-1)),disabled:c.value===1,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,Ld),(C(!0),_(z,null,ue(A.value,(E,W)=>(C(),_(z,{key:W},[E==="..."?(C(),_("span",Gd,"...")):(C(),_("button",{key:1,onClick:ae=>h(E),class:w(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",c.value===E?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},L(E),11,Ud))],64))),128)),r("button",{onClick:I[3]||(I[3]=E=>h(c.value+1)),disabled:c.value===d.value,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,jd)])):De("",!0),r("button",{onClick:b,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},L(o.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},Fd=Vt(Hd,[["__scopeId","data-v-fbb29068"]]),pa="data:image/jpeg;base64,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",hs="data:image/jpeg;base64,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",bs="data:image/jpeg;base64,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",fa="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEMAQgMBIgACEQEDEQH/xAAvAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQEAAAAAAAAAAAAAAAMCAAEE/9oADAMBAAIQAxAAAALneeq3N6YxITinTDAnozEmTYDNnc1Jk36ya03xNxQh2XBIwO8PQ+5S7efN6JekqjdjO3yuzKMLiKvm1JFgrc1Jm3wWbZybdtjTc4NQOO/AmvLAJKcBtzAO7//EAAL/2gAMAwEAAgADAAAAIc0nU/TKJNccTyFf+RLLPggHnfP/xAAC/9oADAMBAAIAAwAAABDhTpTB5g1LPEJAf6IdAjMNyGPz/8QAJBEAAQQBAwMFAAAAAAAAAAAAAQACAwQhEBESFCIxEzJScZH/2gAIAQIBAT8AB4nwFXmi3AcE2vDK3t2VujxBwujHxU8RZsdtK9ySEjOE2xHZi85XohSQNlg8Z2T2FjiCNIpXROBB+11TVTstLQCcFXoA7vas6044+Psb+K45wcACQnlDT//EACIRAAEEAQQCAwAAAAAAAAAAAAEAAgMRBBAhIjESFBNhgf/aAAgBAwEBPwAix2p4ZaJaU6eWN3K1i5lkbr2yoJQ6xemRiMlB2op0EmPJ1svlKjmMU31aY4PaCDpLE2RpB/F6xWVjkOsBYU5bxctq0sLKe/yPIrEALSSE3rX/xAAkEAADAAECBgMBAQAAAAAAAAAAAQIDERIEEBMhMVEiMkFhcf/aAAgBAQABPwLbP6zpejYKDpjxjgcib0Mi1WpNNE5Zr7G31y0KgqReCO/YqdtGhFXIsifO0aEmSd0biBw4ZGKMq7dqH1MT0tCpMrlJHouNtEPd8KL34bMObHxE7Mi7+zNw9Yb7H2nlD5Wt8f0iN+Pt5RriyLTK9rRhwcNDTWYzY92jMkdPJ/psoiiWJ6GvTrVeC/lTNKOF4mp+NM4rSoT5SyLFQmv06Kf1Ztc+ZGnr2Rjm626+D4GNJ+SYn0bVyTFT0ISLqkbq9n//xAAeEAADAAIDAQEBAAAAAAAAAAAAAREhMRBBUXFhIP/aAAgBAQABPyHCgl7mP8gmJ7IHwmIaZmMQ9vRP0h8kmHwZJXY5hkqaRm7wxDzwrFcFqTZFj0XnRlUFviFOBRaQuDetMwfR9hpmhqEshP6EydonEhNOgxgkmVwKJI/gjuKELwOhmKFRfbhrf08WxeqkOo74i+BDNLQbl4MN5BN6NjaNiBQQheI0MXZKyQWIWOODs8j/xAAeEAEBAQEAAgMBAQAAAAAAAAABABEhMUFRYYFxkf/aAAgBAQABPxBbRF9TtdCF5DC+2an3Kb1tEIZPV8L4lnZvW56gDO2EAB9FkoJPFjyx9XpfSY+Kc85PO5IaiEyZhpYEeLf5xHMYQOPJEe2iGd9GXgif7fpiR98/i4MT8i0nL8Tky+x0YsfQaDNoPEtrzMMduiF9IWfwdIeHInl5iR4HGyVy0IdhdJShfhYYmU2fgrSw92H6hEw54fM7t8t9ipIFPG8S5lebLKPpG4ckcbHOxh2eHd2cDvcvE/SJoJZbj5RxpxSVgbA5iJhiPU1ojGebv+hI22/kT5voJre5v//Z",As="data:image/jpeg;base64,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",ks="data:image/jpeg;base64,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",jt=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
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
STR +2%`},{code:511,link:402,type:"SPECIAL",name:"Abyssal Crystal Monster (EN)",view:`
Stability +4%
Kekebalan Fisik +6%
Kekebalan Sihir +6%
Daya Jarak Dekat +4%
MaxMP -200
Dengan Perisai:
Resistansi Status Buruk +5%`}],vs="/toram-vue/assets/enhance_weapon_crysta-eGLehiWn.png",xs="/toram-vue/assets/enhance_armor_crysta-YvncoZmF.png",ys="/toram-vue/assets/enhance_additional_crysta-mE1Kazx1.png",ws="/toram-vue/assets/enhace_special_crysta-CIVkxwj2.png";function Vd(e){const t={};return e&&e.split(`
`).map(n=>n.trim()).forEach(n=>{if(!n.match(/[+-]\s*\d/))return;const a=n.match(/^(.+?)\s*([+-])\s*(\d+)(%)?$/);if(!a)return;const[,i,l,s]=a;t[i.trim().toUpperCase()]={sign:l,value:Number(s)}}),t}const Jd={class:"fixed inset-0 pointer-events-none z-0"},Wd={key:0,class:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Qd={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse",style:{"animation-delay":"2s"}},qd={class:"relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-8 md:space-y-14"},zd={class:"flex items-center gap-6"},$d={class:"text-center md:text-left space-y-1"},Xd={class:"flex items-center gap-3"},Zd={class:"text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all"},Yd={class:"flex flex-col items-center md:items-end gap-3"},ep={class:"flex gap-2"},tp={class:"space-y-2 col-span-2 md:col-span-2 lg:col-span-2"},np={class:"relative group"},ap={class:"space-y-2 col-span-1"},ip={class:"truncate"},lp={class:"space-y-1.5 max-h-[300px] overflow-y-auto custom-scroll pr-1"},rp={key:0,class:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"},sp=["onClick"],op={key:0,class:"w-3.5 h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},cp={class:"space-y-2 col-span-1"},up={class:"truncate"},dp={class:"flex justify-between items-center mb-4 pb-2 border-b border-white/5"},pp={class:"grid grid-cols-1 gap-2 max-h-[55vh] overflow-y-auto custom-scroll pr-1"},fp={class:"flex items-center gap-2 mb-2"},gp={class:"flex flex-wrap gap-1.5"},mp=["onClick"],hp={key:0,class:"w-2 h-2 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},bp={class:"space-y-2 col-span-1"},Ap={class:"relative group"},kp={class:"space-y-4 w-full col-span-2 lg:col-span-3"},vp={class:"flex flex-col md:flex-row items-center gap-3 w-full"},xp={class:"relative group flex-[2.5] w-full"},yp={class:"relative py-4 flex items-center justify-center"},wp={class:"space-y-10 relative z-10 pb-32"},Pp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Mp=["onClick"],Dp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Rp={class:"lg:col-span-6 relative group"},Sp={class:"relative p-6 md:p-10"},Cp={class:"flex flex-col md:flex-row gap-8 items-start"},Ep={class:"relative shrink-0 mx-auto md:mx-0"},Tp=["src","alt"],_p={class:"flex-1 space-y-6 w-full"},Ip={class:"space-y-2"},Kp={class:"grid grid-cols-1 gap-4"},Bp={key:0,class:"w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0"},Np={class:"flex items-center gap-4"},Op={class:"flex flex-col"},Lp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Gp=["onClick"],Up={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},jp={key:0,class:"py-40 text-center animate-pulse"},Hp={class:"flex flex-col items-center gap-10 py-20"},Fp={key:0,class:"flex flex-wrap justify-center items-center gap-3"},Vp=["disabled"],Jp={class:"flex gap-2.5 items-center"},Wp=["onClick"],Qp={key:1,class:"px-2 font-black text-blue-500"},qp=["disabled"],zp={class:"flex items-center gap-4 opacity-50"},$p={class:"text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"},Xp={class:"fixed bottom-8 left-8 z-[200] hidden lg:block"},Zp={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t=new Map;function n(F){return t.has(F.code)||t.set(F.code,Vd(F.view)),t.get(F.code)}const a=Vn();function i(){c.value="",o.value=[],p.value=[],v.value="asc",b.value=10,a.push({query:{}})}const l={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},s={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF",value:".DEF"},{label:"MDEF",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD",value:"ASPD"},{label:"CSPD",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen",value:"Natural MP Regen"},{label:"Natural HP Regen",value:"Natural HP Regen"},{label:"Attack MP Recovery",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK",value:"Weapon ATK"},{label:"DTE (Elements)",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee",value:"Tambahan Fisik"},{label:"Additional Magic",value:"Tambahan Sihir"},{label:"Antisipasi",value:"Antisipasi"},{label:"Guard Break",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable",value:"Tumble Unavailable"},{label:"Evasion Recharge",value:"Evasion Recharge"},{label:"Refleks",value:"Refleks"},{label:"Recoil",value:"Recoil"}]},c=le(""),o=le([]),p=le([]),u=le(!1),d=le(!1),g=le(1),b=le(10),v=le("asc"),h=le(null),A=le(null),y=Ea(),S=ne(()=>{try{return y.query.filter?JSON.parse(y.query.filter):null}catch{return null}}),I=()=>{d.value=!d.value,d.value&&(u.value=!1)},E=()=>{u.value=!u.value,u.value&&(d.value=!1)},W=F=>{const x=o.value.indexOf(F);x===-1?o.value.push(F):o.value.splice(x,1)},ae=F=>{const x=p.value.indexOf(F);x===-1?p.value.push(F):p.value.splice(x,1)},oe=()=>{c.value="",o.value=[],p.value=[],g.value=1},Pe=F=>{const x=F.type?.toUpperCase();if(x!=="UPGRADE")return ee[x]||pa;const te=Ce(F);return ee[`${te}_UPGRADE`]||fa},V=F=>({NORMAL:"bg-blue-500/10 text-blue-500 border-blue-500/40",UPGRADE:"bg-purple-500/10 text-purple-500 border-purple-500/40",ADDITIONAL:"bg-yellow-500/10 text-yellow-500 border-yellow-500/40",WEAPON:"bg-red-500/10 text-red-500 border-red-500/40",ARMOR:"bg-green-500/10 text-green-500 border-green-500/40",SPECIAL:"bg-pink-500/10 text-pink-500 border-pink-500/40"})[F?.toUpperCase()]||"bg-slate-500/10 text-slate-500 border-slate-500/40",Z=F=>F.link?jt.find(x=>String(x.code)===String(F.link)):null,re=F=>jt.filter(x=>String(x.link)===String(F.code)),j=[{label:"Weapon Crystas",value:"WEAPON"},{label:"Weapon Enhancer Crystas",value:"WEAPON_UPGRADE"},{label:"Armor Crystas",value:"ARMOR"},{label:"Armor Enhancer Crystas",value:"ARMOR_UPGRADE"},{label:"Additional Crystas",value:"ADDITIONAL"},{label:"Additional Enhancer Crystas",value:"ADDITIONAL_UPGRADE"},{label:"Normal Crystas",value:"NORMAL"},{label:"Normal Enhancer Crystas",value:"NORMAL_UPGRADE"},{label:"Special Crystas",value:"SPECIAL"},{label:"Special Enhancer Crystas",value:"SPECIAL_UPGRADE"}],ee={NORMAL:pa,UPGRADE:fa,ADDITIONAL:ks,ADDITIONAL_UPGRADE:ys,ARMOR:As,ARMOR_UPGRADE:xs,WEAPON:hs,WEAPON_UPGRADE:vs,SPECIAL:bs,SPECIAL_UPGRADE:ws},Me=F=>{if(!F)return null;let x=F,te=0;for(;x.link&&te<10;){const P=jt.find(M=>String(M.code)===String(x.link));if(!P)break;x=P,te++}return x},Ce=F=>Me(F)?.type?.toUpperCase()||"NORMAL",xe=F=>{if(!F)return"text-cyan-500";const x=F.type?.toUpperCase();if(x==="UPGRADE"||x==="ENHANCER")return"text-gray-400";const te=Ce(F);return{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[te]||"text-cyan-500"},de=F=>F?Array.isArray(F)?F:F.split(/,|\n/).map(x=>x.trim()).filter(x=>x):[],se=F=>{c.value=F,window.scrollTo({top:0,behavior:"smooth"})},He=ne(()=>{let F=jt.filter(x=>x.name?.trim());if(S.value?.stats&&(F=F.filter(x=>{const te=n(x);return Object.entries(S.value.stats).every(([P,M])=>{const B=te[P.toUpperCase()];return!(!B||B.sign!==M.sign||M.value!==null&&(M.op===">="&&B.value<M.value||M.op==="<="&&B.value>M.value))})})),c.value){const x=c.value.toLowerCase();F=F.filter(te=>te.name.toLowerCase().includes(x))}return o.value.length>0&&(F=F.filter(x=>{const te=Ce(x),P=x.type==="UPGRADE";return o.value.some(M=>{if(!M.includes("_"))return!P&&te===M;const[B,U]=M.split("_");return U==="UPGRADE"&&P&&te===B})})),p.value.length>0&&(F=F.filter(x=>{const te=(x.view||"").toUpperCase();return p.value.every(P=>te.includes(P.toUpperCase()))})),F.sort((x,te)=>v.value==="asc"?x.name.localeCompare(te.name):te.name.localeCompare(x.name))}),ot=ne(()=>{const F=(g.value-1)*b.value;return He.value.slice(F,F+b.value)}),Oe=ne(()=>Math.ceil(He.value.length/b.value)||1),Te=ne(()=>{let F=Math.max(1,g.value-2),x=Math.min(Oe.value,F+4);x-F<4&&(F=Math.max(1,x-4));const te=[];for(let P=F;P<=x;P++)te.push(P);return te}),ht=F=>{h.value&&!h.value.contains(F.target)&&(u.value=!1),A.value&&!A.value.contains(F.target)&&(d.value=!1)};return tn(()=>{window.addEventListener("click",ht)}),Mi(()=>{window.removeEventListener("click",ht)}),Mt([c,o,p,b,v],()=>{g.value=1}),(F,x)=>{const te=ra("RouterLink"),P=ra("router-link");return C(),_("div",{class:w(["min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent",e.isDark?"text-slate-200":"text-slate-900"])},[r("div",Jd,[r("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),x[9]||(x[9]=r("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-transparent"},null,-1)),e.isDark?(C(),_("div",Wd)):De("",!0),e.isDark?(C(),_("div",Qd)):De("",!0)]),r("div",qd,[r("header",{class:w(["relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500",e.isDark?"border-white/5":"border-black/5"])},[r("div",zd,[x[12]||(x[12]=r("div",{class:"relative group"},[r("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"}),r("img",{src:Ra,class:"relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110",alt:"Logo"})],-1)),r("div",$d,[r("div",Xd,[r("h1",Zd,[r("span",{class:w(e.isDark?"text-white":"text-slate-900")},"TIMI",2),x[10]||(x[10]=r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"},"DB",-1))]),x[11]||(x[11]=r("div",{class:"px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase"},"Bahasa Indonesia",-1))]),r("p",{class:w(["text-xs font-black uppercase tracking-[0.5em] opacity-60",e.isDark?"text-slate-400":"text-slate-500"])},"Toram Online Database",2)])]),r("div",Yd,[r("div",{class:w(["group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white border-slate-200 shadow-xl shadow-slate-200/50"])},[x[13]||(x[13]=r("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"},null,-1)),r("span",{class:w(["relative text-xs font-black uppercase tracking-[0.2em]",e.isDark?"text-cyan-400":"text-blue-600"])}," Results : "+L(He.value.length)+" Xtall ",3)],2),r("div",ep,[(C(),_(z,null,ue(3,M=>r("div",{key:M,class:"w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"})),64))])])],2),me(te,{to:"/xtall/advanced",class:"mb-6 block w-full rounded-2xl border-2 border-indigo-500 bg-gradient-to-t from-indigo-400 to-purple-500 px-6 py-5 text-center text-lg font-black text-white shadow-xl hover:scale-[1.02] transition"},{default:We(()=>[...x[14]||(x[14]=[je(" 🔎 Advanced Xtall Search ",-1)])]),_:1}),r("section",{class:w(["grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl",e.isDark?"bg-slate-950/60 border-red/100 shadow-black/40":"bg-red/80 border-slate-200 shadow-slate-300/50"])},[r("div",tp,[x[17]||(x[17]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2"},[r("span",{class:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"}),je(" Search Name ")],-1)),r("div",np,[x[15]||(x[15]=r("div",{class:"absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"},null,-1)),ve(r("input",{"onUpdate:modelValue":x[0]||(x[0]=M=>c.value=M),type:"text",placeholder:"Search xtall name...",class:w(["relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm",e.isDark?"bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600":"bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400"])},null,2),[[ze,c.value]]),x[16]||(x[16]=r("svg",{class:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-width":"3"})],-1))])]),r("div",ap,[x[21]||(x[21]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 ml-4"},"Type Xtall",-1)),r("div",{class:"relative",ref_key:"typeRef",ref:A},[r("button",{onClick:ta(I,["stop"]),class:w(["w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300",d.value?"border-orange-500 ring-4 ring-orange-500/10 scale-[0.98]":"",e.isDark?d.value?"bg-orange-500/10":"bg-slate-900/50 border-white/5":d.value?"bg-orange-50 text-orange-700":"bg-white border-slate-200 shadow-sm"])},[r("span",ip,L(o.value.length===0?"All Type":o.value.length===1?o.value[0]:o.value.length+" Terpilih"),1),(C(),_("svg",{class:w(["w-4 h-4 transition-transform duration-500",d.value?"rotate-180 text-orange-500":"text-slate-500"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...x[18]||(x[18]=[r("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"},null,-1)])],2))],2),me(da,{name:"dropdown-slide"},{default:We(()=>[d.value?(C(),_("div",{key:0,class:w(["absolute left-0 top-full mt-3 w-64 z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-3xl",e.isDark?"bg-slate-950/95 border-white/10":"bg-white border-slate-100"])},[r("div",lp,[r("div",{onClick:x[1]||(x[1]=M=>o.value=[]),class:w(["group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all",o.value.length===0?"bg-orange-500 text-white":e.isDark?"hover:bg-white/5 text-slate-400":"hover:bg-slate-50 text-slate-600"])},[x[19]||(x[19]=r("span",{class:"text-[10px] font-black uppercase tracking-widest"}," All Type ",-1)),o.value.length===0?(C(),_("div",rp)):De("",!0)],2),r("div",{class:w(["h-[1px] my-2",e.isDark?"bg-white/5":"bg-slate-100"])},null,2),(C(),_(z,null,ue(j,M=>r("div",{key:M.value,onClick:B=>W(M.value),class:w(["group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all border border-transparent",o.value.includes(M.value)?"bg-orange-500/10 border-orange-500/20":e.isDark?"hover:bg-white/5":"hover:bg-slate-50"])},[r("div",{class:w(["w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300",o.value.includes(M.value)?"border-orange-500 bg-orange-500":"border-slate-500 group-hover:border-orange-400"])},[o.value.includes(M.value)?(C(),_("svg",op,[...x[20]||(x[20]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):De("",!0)],2),r("span",{class:w(["text-xs font-bold",o.value.includes(M.value)?"text-orange-500":e.isDark?"text-slate-400":"text-slate-600"])},L(M.label),3)],10,sp)),64))])],2)):De("",!0)]),_:1})],512)]),r("div",cp,[x[25]||(x[25]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 ml-4"},"Attributes",-1)),r("div",{class:"relative",ref_key:"statusRef",ref:h},[r("button",{onClick:ta(E,["stop"]),class:w(["w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300",u.value?"border-teal-500 ring-4 ring-teal-500/10 scale-[0.98]":"",e.isDark?u.value?"bg-teal-500/10":"bg-slate-900/50 border-white/5":u.value?"bg-teal-50 text-teal-700":"bg-white border-slate-200 shadow-sm"])},[r("span",up,L(p.value.length>0?p.value.length+" Filters Selected":"Attribute Status"),1),(C(),_("svg",{class:w(["w-4 h-4 transition-transform duration-500",u.value?"rotate-180 text-teal-500":"text-slate-500"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...x[22]||(x[22]=[r("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"},null,-1)])],2))],2),me(da,{name:"dropdown-slide"},{default:We(()=>[u.value?(C(),_("div",{key:0,class:w(["absolute right-0 md:left-0 top-full mt-3 w-[280px] z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl",e.isDark?"bg-slate-950/98 border-white/10":"bg-white/98 border-slate-200"])},[r("div",dp,[x[23]||(x[23]=r("div",null,[r("h4",{class:"text-xs font-black uppercase italic tracking-tighter"},"Attribute Status"),r("p",{class:"text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5"},"Narrow your results")],-1)),r("button",{onClick:x[2]||(x[2]=M=>p.value=[]),class:"px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg text-[10px] font-black uppercase transition-all duration-300"},"Reset")]),r("div",pp,[(C(),_(z,null,ue(s,(M,B)=>r("div",{key:B,class:w(["group p-3 rounded-[1.5rem] border-2 transition-all duration-500",e.isDark?"bg-white/[0.02] hover:bg-white/[0.04]":"bg-slate-50",l[B]?.border||"border-transparent"])},[r("div",fp,[r("div",{class:w(["w-1 h-3 rounded-full",l[B]?.bg||"bg-slate-500"])},null,2),r("h5",{class:w(["text-[9px] font-black uppercase tracking-widest",l[B]?.text||"text-slate-400"])},L(B),3)]),r("div",gp,[(C(!0),_(z,null,ue(M,U=>(C(),_("div",{key:U.value,onClick:ta(Y=>ae(U.value),["stop"]),class:w(["group/stat px-2 py-1 rounded-lg text-[9px] font-black transition-all duration-300 border flex items-center gap-1.5 cursor-pointer",p.value.includes(U.value)?l[B]?.text+" border-current bg-current/10 shadow-sm":e.isDark?"text-slate-500 border-white/5 hover:border-white/20":"text-slate-500 border-slate-200 bg-white hover:border-slate-400"])},[r("div",{class:w(["w-2.5 h-2.5 rounded-sm border flex items-center justify-center transition-all",p.value.includes(U.value)?"bg-current border-transparent":"border-current/30"])},[p.value.includes(U.value)?(C(),_("svg",hp,[...x[24]||(x[24]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):De("",!0)],2),je(" "+L(U.label),1)],10,mp))),128))])],2)),64))])],2)):De("",!0)]),_:1})],512)]),r("div",bp,[x[28]||(x[28]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4"},"Scale",-1)),r("div",Ap,[ve(r("select",{"onUpdate:modelValue":x[3]||(x[3]=M=>b.value=M),class:w(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200":"bg-white border-slate-200 focus:border-purple-500 shadow-sm"])},[...x[26]||(x[26]=[r("option",{value:10},"10 Units",-1),r("option",{value:25},"25 Units",-1),r("option",{value:50},"50 Units",-1),r("option",{value:9999},"Show All",-1)])],2),[[at,b.value]]),x[27]||(x[27]=r("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"})],-1))])]),r("div",kp,[x[33]||(x[33]=r("div",{class:"flex items-center gap-2 ml-4"},[r("div",{class:"w-1.5 h-4 bg-red-600 rounded-full"}),r("label",{class:"text-[11px] font-[1000] uppercase tracking-[0.25em] text-red-600"}," Sequence & Reset Control Center ")],-1)),r("div",vp,[r("div",xp,[ve(r("select",{"onUpdate:modelValue":x[4]||(x[4]=M=>v.value=M),class:w(["w-full h-[60px] px-6 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-12",e.isDark?"bg-slate-900 border-white/10 focus:border-red-500 text-slate-200":"bg-white border-slate-200 focus:border-red-500 shadow-sm"])},[...x[29]||(x[29]=[r("option",{value:"asc"},"Sequence: A to Z",-1),r("option",{value:"desc"},"Sequence: Z to A",-1)])],2),[[at,v.value]]),x[30]||(x[30]=r("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-500"},[r("svg",{class:"w-5 h-5 group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))]),r("button",{onClick:x[5]||(x[5]=M=>{c.value="",o.value=[],v.value="asc"}),class:"h-[60px] flex-1 w-full px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]"},[...x[31]||(x[31]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M6 18L18 6M6 6l12 12"})],-1),r("span",{class:"whitespace-nowrap"},"Reset Filters",-1)])]),r("button",{onClick:i,class:"h-[60px] flex-1 w-full px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]"},[...x[32]||(x[32]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 group-hover:rotate-180 transition-transform duration-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),r("span",{class:"whitespace-nowrap"},"Reset All",-1)])])])])],2),r("div",yp,[r("div",{class:w(["absolute inset-0 h-[1px] my-auto",e.isDark?"bg-white/5":"bg-slate-200"])},null,2),x[34]||(x[34]=r("div",{class:"absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"},null,-1)),r("div",{class:w(["relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all",e.isDark?"bg-[#020617] border-white/10 text-slate-500":"bg-transparent-50 border-slate-200 text-slate-400"])}," Xtall Versi Indonesia ",2)]),r("main",wp,[(C(!0),_(z,null,ue(ot.value,(M,B)=>(C(),_("div",{key:M.code,class:"flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry",style:Pt({animationDelay:B*70+"ms"})},[r("div",Pp,[Z(M)?(C(),_("div",{key:0,onClick:U=>se(Z(M).name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/300 border-white/65 hover:border-cyan-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-cyan-400"])},[x[35]||(x[35]=dn('<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-9cd12a75></div><div class="flex items-center gap-2 mb-2" data-v-9cd12a75><svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" data-v-9cd12a75><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-9cd12a75></path></svg><span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest" data-v-9cd12a75>Previous</span></div>',2)),r("p",{class:w(["text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},L(Z(M).name),3),x[36]||(x[36]=r("div",{class:"absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🧬",-1))],10,Mp)):(C(),_("div",Dp,[...x[37]||(x[37]=[r("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))]),r("div",Rp,[r("div",{class:w(["absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",M.type==="UPGRADE"?"bg-purple-600":"bg-blue-600"])},null,2),r("div",{class:w(["h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl",e.isDark?"bg-[#0b1226]/90 border-white/80 group-hover:border-white/80":"bg-white border-slate-200 group-hover:border-blue-400"])},[r("div",Sp,[r("div",Cp,[r("div",Ep,[x[38]||(x[38]=r("div",{class:"absolute inset-0 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"},null,-1)),r("div",{class:w(["relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110",e.isDark?"bg-slate-950 border-white/70":"bg-slate-50 border-slate-200"])},[r("img",{src:Pe(M),class:"w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]",alt:M.type},null,8,Tp)],2),r("div",{class:w(["absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black",V(M.type)])},L(M.type.charAt(0)),3)]),r("div",_p,[r("div",Ip,[x[39]||(x[39]=r("div",{class:"flex flex-wrap items-center gap-3"},null,-1)),r("h3",{class:w(["text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400",xe(M)])},L(M.name),3)]),r("div",{class:w(["p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]",e.isDark?"bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]":"bg-slate-50 border-slate-100"])},[r("div",Kp,[(C(!0),_(z,null,ue(de(M.view),(U,Y)=>(C(),_("div",{key:Y,class:"flex items-center gap-4 group/item"},[U.includes("Dengan")?De("",!0):(C(),_("div",Bp)),r("p",{class:w(["text-xs md:text-sm font-bold tracking-tight transition-all duration-300",U.includes("Dengan")?"text-green-500 italic":U.includes("-")?"text-red-500":e.isDark?"text-slate-300 group-hover/item:text-white":"text-slate-600 group-hover/item:text-slate-900"])},L(U),3)]))),128))])],2)])])]),r("div",{class:w(["px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4",e.isDark?"bg-white/[0.02] border-white/5":"bg-slate-50 border-slate-100"])},[r("div",Np,[r("div",Op,[r("span",{class:w(["text-[10px] font-black tracking-widest transition-colors",e.isDark?"text-slate-400":"text-slate-500"])}," TYPE XTALL ",2),r("span",{class:w(["text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter",V(M.type)])},L(M.type),3)]),x[40]||(x[40]=r("div",{class:"h-8 w-[1px] bg-white/10 hidden sm:block"},null,-1))]),me(P,{to:"/xtall/"+M.code,class:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"},{default:We(()=>[...x[41]||(x[41]=[je(" Details ",-1)])]),_:1},8,["to"])],2)],2)]),r("div",Lp,[re(M).length?(C(!0),_(z,{key:0},ue(re(M),U=>(C(),_("div",{key:U.code,onClick:Y=>se(U.name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/65 hover:border-purple-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-purple-400"])},[x[42]||(x[42]=dn('<div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-600 to-yellow-700 opacity-40 group-hover:opacity-100 transition-opacity" data-v-9cd12a75></div><div class="flex items-center justify-end gap-2 mb-2 text-right" data-v-9cd12a75><span class="text-[9px] font-black uppercase text-purple-500 tracking-widest" data-v-9cd12a75>Next Upgrade</span><svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24" data-v-9cd12a75><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-9cd12a75></path></svg></div>',2)),r("p",{class:w(["text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},L(U.name),3),x[43]||(x[43]=r("div",{class:"absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🚀",-1))],10,Gp))),128)):(C(),_("div",Up,[...x[44]||(x[44]=[r("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))])],4))),128)),He.value.length===0?(C(),_("div",jp,[x[45]||(x[45]=dn('<div class="inline-flex relative mb-8" data-v-9cd12a75><div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping" data-v-9cd12a75></div><div class="text-8xl relative" data-v-9cd12a75>🔎</div></div><h2 class="text-3xl font-[1000] uppercase italic tracking-tighter" data-v-9cd12a75>Xtall not found</h2><p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4" data-v-9cd12a75>Search xtall name with correct Indonesian name.</p>',3)),r("button",{onClick:oe,class:"mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"},"Reset")])):De("",!0),r("div",Hp,[Oe.value>1&&b.value<1e3?(C(),_("nav",Fp,[r("button",{onClick:x[6]||(x[6]=M=>g.value--),disabled:g.value===1,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," « ",8,Vp),r("div",Jp,[(C(!0),_(z,null,ue(Te.value,M=>(C(),_(z,{key:M},[M!=="..."?(C(),_("button",{key:0,onClick:B=>g.value=M,class:w(["w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center",g.value===M?"bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1":e.isDark?"bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500":"bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm"])},L(M),11,Wp)):(C(),_("span",Qp,"..."))],64))),128))]),r("button",{onClick:x[7]||(x[7]=M=>g.value++),disabled:g.value===Oe.value,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," » ",8,qp)])):De("",!0),b.value<100?(C(),_("button",{key:1,onClick:x[8]||(x[8]=M=>b.value=9999),class:"group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl"},[...x[46]||(x[46]=[r("div",{class:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"},null,-1),r("span",{class:"relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic"},"Explore All",-1)])])):De("",!0),r("div",zp,[x[47]||(x[47]=r("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1)),r("p",$p,"Page "+L(g.value)+" of "+L(Oe.value),1),x[48]||(x[48]=r("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1))])])])]),r("div",Xp,[r("div",{class:w(["px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500",e.isDark?"bg-slate-900/80 border-white/10":"bg-white/80 border-slate-200 shadow-2xl"])},[...x[49]||(x[49]=[r("div",{class:"flex items-center gap-4"},[r("div",{class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),r("span",{class:"text-[9px] font-black uppercase tracking-widest opacity-60"},"Versi Nama Indonesia")],-1)])],2)])],2)}}},Yp=Vt(Zp,[["__scopeId","data-v-9cd12a75"]]),Ll=310,Wa={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Qa={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5},Gt=e=>Math.floor(.025*Math.pow(e,4)+2*e),ef=(e,t,n)=>{let a=Math.floor((1-t/100)*Gt(e));for(let i=e+1;i<n;i++)a+=Gt(i);return a},qa=(e,t,n)=>{let a=n,i=(1-t/100)*Gt(e);if(n<i){let l=t/100*Gt(e)+n;return[e,Math.floor(100*l/Gt(e))]}else{a-=i;let l=e+1;for(;Gt(l)<=a;)a-=Gt(l),l+=1;let s=Math.floor(100*a/Gt(l));return[l,s]}},tf={class:"space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4"},nf={class:"flex flex-col items-center gap-6 animate-bounce-slow"},af={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},lf={class:"lg:col-span-2 space-y-6"},rf={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},sf={class:"group"},of={class:"group"},cf={class:"group"},uf={key:0,class:"space-y-8 animate-in slide-in-from-top-2"},df={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},pf={class:"relative group select-container"},ff={class:"relative"},gf=["value"],mf={class:"relative group select-container"},hf={class:"relative"},bf=["value"],Af={class:"flex flex-wrap gap-8 ml-2"},kf={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},vf={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},xf={key:1,class:"space-y-8 animate-in slide-in-from-top-2"},yf={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},wf={class:"relative group select-container"},Pf={class:"relative"},Mf=["value"],Df={class:"lg:col-span-1"},Rf={class:"space-y-6 sticky top-8"},Sf={class:"relative z-10 space-y-8"},Cf={class:"result-item"},Ef={class:"text-2xl font-black tabular-nums tracking-tighter"},Tf={class:"pt-8 border-t border-white/20 result-item"},_f={class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-2"},If={class:"flex items-baseline gap-2"},Kf={class:"text-6xl font-black italic tracking-tighter drop-shadow-lg block"},Bf={class:"text-xl font-bold opacity-70"},Nf={class:"bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item"},Of={class:"text-sm font-black tabular-nums tracking-wide"},Lf={class:"absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text"},Gf={class:"space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll"},Uf={class:"text-[11px] font-black opacity-40"},jf={class:"text-right"},Hf={class:"text-[10px] font-bold opacity-50 ml-1"},Ff={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=le("mq"),n=le(1),a=le(0),i=le(Ll),l=le(!0),s=le(!1),c=Object.keys(Qa),o=le(1),p=le(c.length-1),u=le(Object.keys(Wa)[1]),d=le(1),g=ne(()=>{let v=[],h=0;return c.forEach((A,y)=>{A.startsWith("Chapter")?h++:Qa[A]!==""&&v.push({id:y,label:`CH${h} - ${A}`})}),v}),b=ne(()=>{const v=Number(n.value)||1,h=Number(a.value)||0,A=Number(i.value)||Ll,y=ef(v,h,A);let S=0;for(let V=o.value;V<=p.value;V++){const Z=Qa[c[V]];typeof Z=="number"&&(S+=Z),c[V].includes("Coenubia")&&!l.value&&(S+=125e5)}const[I,E]=qa(v,h,S);let W=[];if(s.value&&S>0){let V=v,Z=h;for(let re=1;re<=20;re++){const[j,ee]=qa(V,Z,S);if(W.push({run:re,lv:j,p:ee}),V=j,Z=ee,V>=A)break}}const ae=(Wa[u.value]||0)*(d.value||0),[oe,Pe]=qa(v,h,ae);return{xpNeeded:y,totalMqXP:S,resLv:I,resP:E,diaryRuns:W,sqLv:oe,sqPercent:Pe,sqXP:ae}});return(v,h)=>(C(),_("div",tf,[r("div",nf,[h[11]||(h[11]=r("div",{class:"text-center"},[r("h1",{class:"text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl"}," MQ Calculator "),r("p",{class:"text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse"},"Timi DB System")],-1)),r("div",{class:w(["p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl",e.isDark?"bg-white/5 border-white/10":"bg-slate-200/50 border-slate-300"])},[r("button",{onClick:h[0]||(h[0]=A=>t.value="mq"),class:w(["tab-btn",t.value==="mq"?"tab-active":""])},"Main Quest",2),r("button",{onClick:h[1]||(h[1]=A=>t.value="npc"),class:w(["tab-btn",t.value==="npc"?"tab-active":""])},"NPC Quest",2)],2)]),r("div",af,[r("div",lf,[r("div",{class:w(["p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/60 border-white/40"])},[r("div",rf,[r("div",sf,[h[12]||(h[12]=r("label",{class:"label-text"},"Current Lv",-1)),ve(r("input",{"onUpdate:modelValue":h[2]||(h[2]=A=>n.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,n.value,void 0,{number:!0}]])]),r("div",of,[h[13]||(h[13]=r("label",{class:"label-text"},"Percent %",-1)),ve(r("input",{"onUpdate:modelValue":h[3]||(h[3]=A=>a.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,a.value,void 0,{number:!0}]])]),r("div",cf,[h[14]||(h[14]=r("label",{class:"label-text text-pink-500"},"Target Lv",-1)),ve(r("input",{"onUpdate:modelValue":h[4]||(h[4]=A=>i.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(C(),_("div",uf,[r("div",df,[r("div",pf,[h[16]||(h[16]=r("label",{class:"label-text text-indigo-400"},"Start From",-1)),r("div",ff,[ve(r("select",{"onUpdate:modelValue":h[5]||(h[5]=A=>o.value=A),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(C(!0),_(z,null,ue(g.value,A=>(C(),_("option",{key:A.id,value:A.id,class:"dropdown-item"},L(A.label),9,gf))),128))],2),[[at,o.value]]),h[15]||(h[15]=r("div",{class:"select-arrow text-indigo-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",mf,[h[18]||(h[18]=r("label",{class:"label-text text-indigo-400"},"End At",-1)),r("div",hf,[ve(r("select",{"onUpdate:modelValue":h[6]||(h[6]=A=>p.value=A),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(C(!0),_(z,null,ue(g.value,A=>(C(),_("option",{key:A.id,value:A.id,class:"dropdown-item"},L(A.label),9,bf))),128))],2),[[at,p.value]]),h[17]||(h[17]=r("div",{class:"select-arrow text-indigo-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])]),r("div",Af,[r("label",kf,[ve(r("input",{type:"checkbox","onUpdate:modelValue":h[7]||(h[7]=A=>l.value=A),class:"w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer"},null,512),[[Al,l.value]]),h[19]||(h[19]=r("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),r("label",vf,[ve(r("input",{type:"checkbox","onUpdate:modelValue":h[8]||(h[8]=A=>s.value=A),class:"w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer"},null,512),[[Al,s.value]]),h[20]||(h[20]=r("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])])])):(C(),_("div",xf,[r("div",yf,[r("div",wf,[h[22]||(h[22]=r("label",{class:"label-text text-emerald-400"},"Select Quest",-1)),r("div",Pf,[ve(r("select",{"onUpdate:modelValue":h[9]||(h[9]=A=>u.value=A),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(C(!0),_(z,null,ue(Xe(Wa),(A,y)=>(C(),_("option",{key:y,value:y,class:"dropdown-item"},L(y),9,Mf))),128))],2),[[at,u.value]]),h[21]||(h[21]=r("div",{class:"select-arrow text-emerald-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",null,[h[23]||(h[23]=r("label",{class:"label-text text-emerald-400"},"Amount (Stack/Times)",-1)),ve(r("input",{"onUpdate:modelValue":h[10]||(h[10]=A=>d.value=A),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[ze,d.value,void 0,{number:!0}]])])])]))],2)]),r("div",Df,[r("div",Rf,[r("div",{class:w(["p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive",t.value==="mq"?"bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30":"bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30"])},[r("div",Sf,[r("div",Cf,[h[24]||(h[24]=r("p",{class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-1"},"XP Required to Target",-1)),r("h3",Ef,L(b.value.xpNeeded.toLocaleString()),1)]),r("div",Tf,[r("p",_f,L(t.value==="mq"?"Result After 1 Run":"Result After Turn-in"),1),r("div",If,[r("span",Kf," Lv "+L(t.value==="mq"?b.value.resLv:b.value.sqLv),1),r("span",Bf,L(t.value==="mq"?b.value.resP:b.value.sqPercent)+"% ",1)])]),r("div",Nf,[h[25]||(h[25]=r("p",{class:"text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1"},"Total XP Gained",-1)),r("p",Of,L((t.value==="mq"?b.value.totalMqXP:b.value.sqXP).toLocaleString())+" XP ",1)])]),r("div",Lf,L(t.value),1)],2),t.value==="mq"&&s.value&&b.value.diaryRuns.length>0?(C(),_("div",{key:0,class:w(["p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4",e.isDark?"bg-white/5 border-white/10":"bg-white border-slate-200 shadow-lg"])},[h[26]||(h[26]=r("p",{class:"text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2"},"Diary Projection",-1)),r("div",Gf,[(C(!0),_(z,null,ue(b.value.diaryRuns,A=>(C(),_("div",{key:A.run,class:"flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors"},[r("span",Uf,"RUN #"+L(A.run),1),r("div",jf,[r("span",{class:w(["font-black",e.isDark?"text-white":"text-slate-800"])},"Lv "+L(A.lv),3),r("span",Hf,L(A.p)+"%",1)])]))),128))])],2)):De("",!0)])])])]))}},Vf=Vt(Ff,[["__scopeId","data-v-c84703e0"]]),Jf=280,Gl=54,Wf=55,Ul=265,Qf=300,It=510,Kt=277,{floor:_e,min:qf,max:zf}=Math,$f=(e,t,n,a,i)=>{const l=_e(n*(100+(i||0))/100+(a||0));return(e||0)+_e((t||0)/2)+_e(l/6)},Xf=(e,t,n,a,i,l)=>{const s=_e(a*(100+(l||0))/100+(i||0)),c=(50+5*(e||0))/100,o=10+(t||0)-(n||0)+_e(s/10);return qf(100,zf(0,_e(c*o)))},Zf=(e,t,n,a,i)=>{let l=_e((e||0)*(1+(t||0)*.01+(n||0)*.02));const s=i;switch(a){case"Armor":l+=_e(s.VIT/10);break;case"1H Sword":case"Bow":l+=_e((s.DEX+s.STR)/20);break;case"2H Sword":l+=_e(s.STR/10);break;case"Bowgun":l+=_e(s.DEX/10);break;case"Staff":l+=_e(s.INT/10);break;case"Magic Device":l+=_e((s.INT+s.AGI)/20);break;case"Knuckle":l+=_e(s.AGI/10);break;case"Halberd":l+=_e((s.STR+s.AGI)/20);break;case"Katana":l+=_e((s.DEX+s.AGI)/20);break}return l},Yf={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},eg={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},tg={class:"lg:col-span-4 space-y-6 animate-float"},ng={class:"grid grid-cols-2 gap-x-4 gap-y-5"},ag={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},ig=["onUpdate:modelValue"],lg={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},rg={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},sg=["onUpdate:modelValue"],og={class:"lg:col-span-4 space-y-6"},cg={class:"space-y-4"},ug={class:"relative group select-container"},dg={class:"relative overflow-hidden rounded-xl"},pg=["value"],fg={class:"grid grid-cols-2 gap-4"},gg={class:"group"},mg={class:"group"},hg={class:"space-y-3 pt-2"},bg={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},Ag=["onUpdate:modelValue"],kg={class:"lg:col-span-4 space-y-6 animate-float-slow"},vg={class:"flex items-baseline gap-2"},xg={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},yg={class:"flex items-baseline gap-2"},wg={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},Pg={class:"space-y-4"},Mg={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},Dg={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},Rg={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},Sg={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=ne(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=bn({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:Jf,createSkill:10,itemDiff:Ul,basePot:Gl,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(p=>i.stats[p]=0),i.craftType==="Armor"?(i.stats.VIT=It,i.stats.TEC=Kt,i.itemDiff=Ul,i.basePot=Gl):(i.itemDiff=Qf,i.basePot=Wf,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=It,i.stats.STR=Kt):i.craftType==="2H Sword"?(i.stats.STR=It,i.stats.DEX=Kt):i.craftType==="Staff"?(i.stats.INT=It,i.stats.TEC=Kt):i.craftType==="Magic Device"?(i.stats.INT=It,i.stats.AGI=Kt):i.craftType==="Knuckle"?(i.stats.AGI=It,i.stats.DEX=Kt):i.craftType==="Halberd"?(i.stats.STR=It,i.stats.AGI=Kt):i.craftType==="Katana"&&(i.stats.DEX=It,i.stats.AGI=Kt))};tn(()=>l());const s=ne(()=>$f(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),c=ne(()=>Xf(i.createSkill,s.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),o=ne(()=>Zf(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(p,u)=>(C(),_("div",Yf,[u[17]||(u[17]=r("div",{class:"text-center py-4 animate-bounce-slow"},[r("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),r("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),r("div",eg,[r("div",tg,[r("div",{class:w(n.value)},[u[3]||(u[3]=r("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),r("div",ng,[(C(!0),_(z,null,ue(i.stats,(d,g)=>(C(),_("div",{key:g,class:"transition-all hover:scale-105"},[r("label",ag,L(g),1),ve(r("input",{type:"number","onUpdate:modelValue":b=>i.stats[g]=b,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,ig),[[ze,i.stats[g],void 0,{number:!0}]])]))),128))]),r("div",lg,[(C(),_(z,null,ue([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>r("div",{key:d[0]},[r("label",rg,L(d[1]),1),ve(r("input",{type:"number","onUpdate:modelValue":g=>i[d[0]]=g,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,sg),[[ze,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),r("div",og,[r("div",{class:w([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=r("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),r("div",cg,[r("div",ug,[u[5]||(u[5]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),r("div",dg,[ve(r("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(C(),_(z,null,ue(a,d=>r("option",{key:d,value:d,class:"dropdown-item"},L(d),9,pg)),64))],544),[[at,i.craftType]]),u[4]||(u[4]=r("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",fg,[r("div",gg,[u[6]||(u[6]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),ve(r("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[ze,i.prof,void 0,{number:!0}]])]),r("div",mg,[u[7]||(u[7]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),ve(r("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[ze,i.level,void 0,{number:!0}]])])]),r("div",hg,[(C(),_(z,null,ue([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>r("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[r("span",bg,L(d[1]),1),ve(r("input",{type:"number","onUpdate:modelValue":g=>i[d[0]]=g,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,Ag),[[ze,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),r("div",kg,[r("div",{class:w([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=r("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=r("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),r("div",vg,[r("span",{class:w(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",c.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},L(c.value),3),u[9]||(u[9]=r("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),r("div",xg,[r("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:Pt({width:c.value+"%"})},null,4)])],2),r("div",{class:w([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=r("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=r("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),r("div",yg,[r("span",wg,L(o.value),1),u[12]||(u[12]=r("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),r("div",{class:w(n.value)},[r("div",Pg,[r("div",Mg,[r("span",null,"Diff Status: "+L(s.value)+" / "+L(i.itemDiff),1)]),s.value<i.itemDiff?(C(),_("div",Dg,[...u[15]||(u[15]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),r("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(C(),_("div",Rg,[...u[16]||(u[16]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),r("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},Cg=Vt(Sg,[["__scopeId","data-v-676556a4"]]),Eg={class:"fixed inset-0 pointer-events-none z-0"},Tg={key:0,class:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},_g={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"},Ig={key:0,class:"relative z-10 max-w-5xl mx-auto p-6 md:p-20 animate-fade-in"},Kg={class:"grid lg:grid-cols-12 gap-12 items-start"},Bg={class:"lg:col-span-5 space-y-6 animate-slide-right"},Ng=["src"],Og={class:"lg:col-span-7 space-y-8 animate-slide-left"},Lg={class:"flex items-center gap-4"},Gg={class:"text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]"},Ug={class:"space-y-5"},jg={key:0,class:"mt-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)] group-hover/stat:scale-150 transition-transform flex-shrink-0"},Hg={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Fg={class:"text-sm font-bold flex items-center gap-2"},Vg={class:"text-sm font-bold flex items-center gap-2 justify-between"},Jg={key:1,class:"h-screen flex items-center justify-center"},Wg={__name:"XtallDetail",props:["id","isDark"],setup(e){const t=e,n=Vn(),a=ne(()=>jt.find(v=>String(v.code)===String(t.id))),i=v=>{if(!v)return"NORMAL";let h=v,A=0;for(;h.link&&A<10;){const y=jt.find(S=>String(S.code)===String(h.link));if(y)h=y,A++;else break}return h.type?.toUpperCase()},l=v=>{const h=i(a.value);return v?.toUpperCase()==="UPGRADE"||v?.toUpperCase()==="ENHANCER"?"text-gray-400":{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[h]||"text-cyan-500"},s=v=>{const h=i(a.value);return{NORMAL:"bg-blue-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",ADDITIONAL:"bg-yellow-600",SPECIAL:"bg-cyan-600"}[h]||"bg-cyan-600"},c=v=>{const h=v?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?"bg-purple-600 text-white border-purple-400":({NORMAL:"bg-blue-600",ADDITIONAL:"bg-yellow-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",SPECIAL:"bg-cyan-600"}[h]||"bg-slate-700")+" text-white border-white/20"},o=v=>{const h=v?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?`${i(a.value)} ENHANCER`:h},p=ne(()=>a.value?.link?jt.find(v=>String(v.code)===String(a.value.link)):null),u=ne(()=>a.value?jt.find(v=>String(v.link)===String(a.value.code)):null),d=v=>{n.push(`/xtall/${v}`)};Mt(()=>t.id,()=>{window.scrollTo({top:0,behavior:"smooth"})});const g=v=>v?Array.isArray(v)?v:v.split(/,|\n/).map(h=>h.trim()).filter(h=>h):[],b=v=>{const h=v?.toUpperCase(),A=i(a.value);return h==="UPGRADE"||h==="ENHANCER"?{NORMAL:fa,WEAPON:vs,ARMOR:xs,ADDITIONAL:ys,SPECIAL:ws}[A]||fa:{NORMAL:pa,WEAPON:hs,ARMOR:As,ADDITIONAL:ks,SPECIAL:bs}[A]||pa};return(v,h)=>(C(),_("div",{class:w(["min-h-screen relative overflow-hidden font-sans transition-all duration-700",e.isDark?"bg-[#020617] text-slate-200":"bg-slate-50 text-slate-900"])},[r("div",Eg,[r("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),e.isDark?(C(),_("div",Tg)):De("",!0),e.isDark?(C(),_("div",_g)):De("",!0)]),a.value?(C(),_("div",Ig,[r("button",{onClick:h[0]||(h[0]=A=>v.$router.push("/xtall")),class:"group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2"},[...h[3]||(h[3]=[r("div",{class:"w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"},[r("svg",{class:"w-5 h-5 text-cyan-500 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M15 19l-7-7 7-7","stroke-width":"3"})])],-1),r("span",{class:"text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500"},"Back to Database",-1)])]),r("div",Kg,[r("div",Bg,[r("div",{class:w(["relative aspect-square rounded-[3.5rem] border-4 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 group",e.isDark?"bg-slate-900 border-white/20":"bg-white border-slate-300"])},[r("div",{class:w(["absolute inset-0 opacity-30 blur-3xl animate-pulse transition-colors duration-700",s(a.value.type)])},null,2),r("img",{src:b(a.value.type),class:"relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 animate-float"},null,8,Ng),r("div",{class:w(["absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-2xl whitespace-nowrap transition-all duration-500 group-hover:scale-110",c(a.value.type)])},L(o(a.value.type)),3)],2)]),r("div",Og,[r("div",null,[r("p",{class:w(["text-xs font-black uppercase tracking-[0.4em] mb-2 drop-shadow-sm",l(a.value.name)])},L(o(a.value.type)),3),r("h1",{class:w(["text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4 drop-shadow-2xl transition-all duration-500 brightness-100 saturate-70",l(a.value.type),e.isDark?"[-webkit-text-stroke:1px_white]":"[-webkit-text-stroke:1px_black]"]),style:{maskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)",webkitMaskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)"}},L(a.value.name),3),r("div",Lg,[h[4]||(h[4]=r("div",{class:"h-[3px] w-16 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"},null,-1)),r("p",Gg,"System ID: #"+L(a.value.code),1)])]),r("div",{class:w(["p-8 md:p-12 rounded-[3rem] border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden transition-all hover:border-cyan-500/50",e.isDark?"bg-slate-900/80 border-white/10 shadow-black":"bg-white border-slate-200 shadow-slate-300"])},[h[5]||(h[5]=r("div",{class:"absolute top-0 right-0 p-8 text-8xl opacity-[0.05] grayscale pointer-events-none animate-spin-slow"},"✨",-1)),h[6]||(h[6]=r("h3",{class:"text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-8 flex items-center gap-3"},[r("span",{class:"w-2 h-2 bg-cyan-500 rounded-full animate-ping"}),je(" Status/ Effect ")],-1)),r("div",Ug,[(C(!0),_(z,null,ue(g(a.value.view),(A,y)=>(C(),_("div",{key:y,class:"flex items-start gap-4 group/stat animate-fade-in",style:Pt({animationDelay:y*100+"ms"})},[A.includes("Dengan")?De("",!0):(C(),_("div",jg)),r("p",{class:w(["text-base md:text-lg font-bold tracking-tight transition-colors",A.includes("Dengan")?"text-green-500 italic":A.includes("-")?"text-red-500":e.isDark?"text-slate-200 group-hover/stat:text-cyan-400":"text-slate-700"])},L(A),3)],4))),128))])],2),r("div",Hg,[p.value?(C(),_("div",{key:0,onClick:h[1]||(h[1]=A=>d(p.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-900/20":"bg-white border-slate-200 hover:border-cyan-500 shadow-slate-200"])},[h[8]||(h[8]=r("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Model",-1)),r("p",Fg,[h[7]||(h[7]=r("span",{class:"text-cyan-500 group-hover:-translate-x-2 transition-transform"},"←",-1)),je(" "+L(p.value.name),1)])],2)):De("",!0),u.value?(C(),_("div",{key:1,onClick:h[2]||(h[2]=A=>d(u.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-purple-500/50 hover:shadow-purple-900/20":"bg-white border-slate-200 hover:border-purple-500 shadow-slate-200"])},[h[10]||(h[10]=r("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Advanced Upgrade",-1)),r("p",Vg,[je(L(u.value.name)+" ",1),h[9]||(h[9]=r("span",{class:"text-purple-500 group-hover:translate-x-2 transition-transform"},"→",-1))])],2)):De("",!0)])])])])):(C(),_("div",Jg,[...h[11]||(h[11]=[r("div",{class:"relative w-24 h-24"},[r("div",{class:"absolute inset-0 border-4 border-cyan-500/20 rounded-full"}),r("div",{class:"absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"})],-1)])]))],2))}},Qg=Vt(Wg,[["__scopeId","data-v-5b64479f"]]),qg={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF",value:".DEF"},{label:"MDEF",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD",value:"ASPD"},{label:"CSPD",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen",value:"Natural MP Regen"},{label:"Natural HP Regen",value:"Natural HP Regen"},{label:"Attack MP Recovery",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK",value:"Weapon ATK"},{label:"DTE (Elements)",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee",value:"Tambahan Fisik"},{label:"Additional Magic",value:"Tambahan Sihir"},{label:"Antisipasi",value:"Antisipasi"},{label:"Guard Break",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable",value:"Tumble Unavailable"},{label:"Evasion Recharge",value:"Evasion Recharge"},{label:"Refleks",value:"Refleks"},{label:"Recoil",value:"Recoil"}]},jl={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},zg={class:"max-w-[1600px] mx-auto mb-6 flex items-center justify-between"},$g={class:"max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"},Xg={class:"text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]"},Zg={class:"max-w-[1600px] mx-auto space-y-16"},Yg={class:"flex items-center gap-3 mb-8 ml-2"},em={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"},tm=["onClick"],nm={class:"flex items-start justify-between gap-2 mb-4"},am={key:0,class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},im={class:"flex gap-1.5"},lm=["onUpdate:modelValue"],rm=["onUpdate:modelValue"],sm=["onUpdate:modelValue"],om={__name:"XtallAdvancedSearch",props:{isDark:Boolean},setup(e){const t=Vn(),n=Ea(),a=bn({stats:{}});tn(()=>{if(n.query.filter)try{const o=JSON.parse(n.query.filter);o?.stats&&(a.stats=o.stats)}catch{console.warn("Invalid filter data")}});function i(){t.back()}function l(){Object.keys(a.stats).forEach(o=>delete a.stats[o])}function s(o){a.stats[o]?delete a.stats[o]:a.stats[o]={sign:"+",op:">=",value:null}}function c(){t.push({name:"xtall",query:{filter:JSON.stringify(a)}})}return(o,p)=>(C(),_("div",{class:w(["p-4 md:p-8 font-sans transition-all duration-700 min-h-screen",e.isDark?"bg-transparent text-white":"bg-slate-50 text-slate-900"])},[r("div",zg,[r("button",{onClick:i,class:"group flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:bg-white/5 active:scale-95"},[r("div",{class:w(["w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",e.isDark?"border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10":"border-slate-200 group-hover:border-orange-500/50 group-hover:bg-orange-50"])},[...p[1]||(p[1]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 transition-transform group-hover:-translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M15 19l-7-7 7-7"})],-1)])],2),p[2]||(p[2]=r("span",{class:"text-[11px] font-[1000] uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100"},"Back",-1))])]),r("div",$g,[r("div",null,[r("h1",Xg,[r("span",{class:w(e.isDark?"text-white":"text-black")},"Advanced",2),p[3]||(p[3]=r("br",null,null,-1)),p[4]||(p[4]=r("span",{class:"bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x"}," Search ",-1))])]),r("div",{class:"flex items-center gap-4"},[r("button",{onClick:l,class:"px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all"}," Clear All "),r("button",{onClick:c,class:"group px-10 py-5 bg-orange-500 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(249,115,22,0.3)]"},[...p[5]||(p[5]=[r("span",{class:"text-xs font-[1000] uppercase tracking-[0.2em] text-white"},"Apply Parameters",-1)])])])]),r("div",Zg,[(C(!0),_(z,null,ue(Xe(qg),(u,d)=>(C(),_("div",{key:d},[r("div",Yg,[r("div",{class:w(["w-2 h-6 rounded-full",Xe(jl)[d]?.bg||"bg-slate-500"])},null,2),r("h2",{class:w(["text-lg font-[1000] uppercase tracking-[0.3em] italic",Xe(jl)[d]?.text||"text-slate-500"])},L(d),3)]),r("div",em,[(C(!0),_(z,null,ue(u,g=>(C(),_("div",{key:g.value,onClick:b=>s(g.value),class:w(["group/item relative rounded-[2rem] border-2 p-5 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[140px]",a.stats[g.value]?e.isDark?"bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-500/20":"bg-orange-50 border-orange-500":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 hover:border-slate-300 shadow-sm"])},[r("div",nm,[r("span",{class:w(["text-[11px] font-[1000] uppercase leading-tight tracking-wide transition-colors",a.stats[g.value]?e.isDark?"text-white":"text-orange-600":e.isDark?"text-slate-500":"text-slate-400"])},L(g.label),3),r("div",{class:w(["shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-500",a.stats[g.value]?"bg-orange-500 border-orange-400":e.isDark?"bg-white/5 border-white/10":"bg-slate-50 border-slate-200"])},[a.stats[g.value]?(C(),_("svg",am,[...p[6]||(p[6]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):(C(),_("div",{key:1,class:w(["text-lg leading-none",e.isDark?"text-white/20":"text-slate-300"])},"+",2))],2)]),me(da,{name:"fade"},{default:We(()=>[a.stats[g.value]?(C(),_("div",{key:0,onClick:p[0]||(p[0]=ta(()=>{},["stop"])),class:"space-y-2 mt-auto pt-3 border-t border-orange-500/20"},[r("div",im,[ve(r("select",{"onUpdate:modelValue":b=>a.stats[g.value].sign=b,class:w(["flex-1 py-2 rounded-lg text-center font-black text-[10px] outline-none border",e.isDark?"bg-black border-white/10 text-orange-400":"bg-white border-slate-200 text-orange-600"])},[...p[7]||(p[7]=[r("option",{value:"+"},"Stats +",-1),r("option",{value:"-"},"Stats -",-1)])],10,lm),[[at,a.stats[g.value].sign]]),ve(r("select",{"onUpdate:modelValue":b=>a.stats[g.value].op=b,class:w(["flex-1 py-2 rounded-lg text-center font-black text-[10px] outline-none border",e.isDark?"bg-black border-white/10 text-cyan-400":"bg-white border-slate-200 text-cyan-600"])},[...p[8]||(p[8]=[r("option",{value:">="},"≥",-1),r("option",{value:"<="},"≤",-1)])],10,rm),[[at,a.stats[g.value].op]])]),ve(r("input",{type:"number","onUpdate:modelValue":b=>a.stats[g.value].value=b,class:w(["w-full py-2 rounded-lg text-center font-black text-[10px] outline-none border",e.isDark?"bg-black border-white/10 text-white":"bg-white border-slate-200 text-black"]),placeholder:"VALUE"},null,10,sm),[[ze,a.stats[g.value].value,void 0,{number:!0}]])])):De("",!0)]),_:2},1024)],10,tm))),128))])]))),128))])],2))}},cm=Vt(om,[["__scopeId","data-v-ab908c60"]]),um=[{path:"/",name:"bag",component:dd},{path:"/mq",name:"mainquest",component:Fd},{path:"/mq-calc",name:"mqcalc",component:Vf},{path:"/bs-calc",name:"bs-calc",component:Cg},{path:"/xtall",name:"xtall",component:Yp},{path:"/xtall/advanced",name:"xtall-advanced",component:cm},{path:"/xtall/:id(\\d+)",name:"xtall-detail",component:Qg,props:!0}],dm=i0({history:Nu("/toram-vue/"),routes:um});document.title||(document.title="Timi DB | Toram Online Database");const Ps=zc(b0);Ps.use(dm);Ps.mount("#app");window.addEventListener("unhandledrejection",e=>{console.warn("Ignored async listener error:",e.reason)});
