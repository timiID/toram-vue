(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function pi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ke={},rn=[],ht=()=>{},jl=()=>!1,fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fi=e=>e.startsWith("onUpdate:"),Ee=Object.assign,gi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ms=Object.prototype.hasOwnProperty,ge=(e,t)=>Ms.call(e,t),q=Array.isArray,sn=e=>jn(e)==="[object Map]",hn=e=>jn(e)==="[object Set]",Bi=e=>jn(e)==="[object Date]",Z=e=>typeof e=="function",De=e=>typeof e=="string",lt=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Fl=e=>(be(e)||Z(e))&&Z(e.then)&&Z(e.catch),Vl=Object.prototype.toString,jn=e=>Vl.call(e),Ds=e=>jn(e).slice(8,-1),Jl=e=>jn(e)==="[object Object]",mi=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Rs=/-\w/g,tt=ga(e=>e.replace(Rs,t=>t.slice(1).toUpperCase())),Ss=/\B([A-Z])/g,en=ga(e=>e.replace(Ss,"-$1").toLowerCase()),ma=ga(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ta=ga(e=>e?`on${ma(e)}`:""),jt=(e,t)=>!Object.is(e,t),$n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Wl=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},ha=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cs=e=>{const t=De(e)?Number(e):NaN;return isNaN(t)?e:t};let Ni;const ba=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pt(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=De(a)?Ks(a):Pt(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(De(e)||be(e))return e}const Es=/;(?![^(]*\))/g,Ts=/:([^]+)/,_s=/\/\*[^]*?\*\//g;function Ks(e){const t={};return e.replace(_s,"").split(Es).forEach(n=>{if(n){const a=n.split(Ts);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function w(e){let t="";if(De(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const a=w(e[n]);a&&(t+=a+" ")}else if(be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Is="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bs=pi(Is);function Ql(e){return!!e||e===""}function Ns(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=Fn(e[a],t[a]);return n}function Fn(e,t){if(e===t)return!0;let n=Bi(e),a=Bi(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=lt(e),a=lt(t),n||a)return e===t;if(n=q(e),a=q(t),n||a)return n&&a?Ns(e,t):!1;if(n=be(e),a=be(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const s in e){const o=e.hasOwnProperty(s),c=t.hasOwnProperty(s);if(o&&!c||!o&&c||!Fn(e[s],t[s]))return!1}}return String(e)===String(t)}function hi(e,t){return e.findIndex(n=>Fn(n,t))}const ql=e=>!!(e&&e.__v_isRef===!0),O=e=>De(e)?e:e==null?"":q(e)||be(e)&&(e.toString===Vl||!Z(e.toString))?ql(e)?O(e.value):JSON.stringify(e,zl,2):String(e),zl=(e,t)=>ql(t)?zl(e,t.value):sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[_a(a,l)+" =>"]=i,n),{})}:hn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>_a(n))}:lt(t)?_a(t):be(t)&&!q(t)&&!Jl(t)?String(t):t,_a=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Je;class Os{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){this._on>0&&--this._on===0&&(Je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ls(){return Je}let ve;const Ka=new WeakSet;class Xl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oi(this),Yl(this);const t=ve,n=nt;ve=this,nt=!0;try{return this.fn()}finally{er(this),ve=t,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ai(t);this.deps=this.depsTail=void 0,Oi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){za(this)&&this.run()}get dirty(){return za(this)}}let $l=0,Pn,Mn;function Zl(e,t=!1){if(e.flags|=8,t){e.next=Mn,Mn=e;return}e.next=Pn,Pn=e}function bi(){$l++}function ki(){if(--$l>0)return;if(Mn){let t=Mn;for(Mn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pn;){let t=Pn;for(Pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function Yl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function er(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),Ai(a),Gs(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function za(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(tr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function tr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===En)||(e.globalVersion=En,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!za(e))))return;e.flags|=2;const t=e.dep,n=ve,a=nt;ve=e,nt=!0;try{Yl(e);const i=e.fn(e._value);(t.version===0||jt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ve=n,nt=a,er(e),e.flags&=-3}}function Ai(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)Ai(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gs(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let nt=!0;const nr=[];function Rt(){nr.push(nt),nt=!1}function St(){const e=nr.pop();nt=e===void 0?!0:e}function Oi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ve;ve=void 0;try{t()}finally{ve=n}}}let En=0;class Us{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!nt||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new Us(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,ar(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=a)}return n}trigger(t){this.version++,En++,this.notify(t)}notify(t){bi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ki()}}}function ar(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)ar(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Xa=new WeakMap,Zt=Symbol(""),$a=Symbol(""),Tn=Symbol("");function Ke(e,t,n){if(nt&&ve){let a=Xa.get(e);a||Xa.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new vi),i.map=a,i.key=n),i.track()}}function yt(e,t,n,a,i,l){const s=Xa.get(e);if(!s){En++;return}const o=c=>{c&&c.trigger()};if(bi(),t==="clear")s.forEach(o);else{const c=q(e),p=c&&mi(n);if(c&&n==="length"){const u=Number(a);s.forEach((d,g)=>{(g==="length"||g===Tn||!lt(g)&&g>=u)&&o(d)})}else switch((n!==void 0||s.has(void 0))&&o(s.get(n)),p&&o(s.get(Tn)),t){case"add":c?p&&o(s.get("length")):(o(s.get(Zt)),sn(e)&&o(s.get($a)));break;case"delete":c||(o(s.get(Zt)),sn(e)&&o(s.get($a)));break;case"set":sn(e)&&o(s.get(Zt));break}}ki()}function nn(e){const t=ue(e);return t===e?t:(Ke(t,"iterate",Tn),et(e)?t:t.map(rt))}function ka(e){return Ke(e=ue(e),"iterate",Tn),e}function Bt(e,t){return Ct(e)?Yt(e)?pn(rt(t)):pn(t):rt(t)}const Hs={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,e=>Bt(this,e))},concat(...e){return nn(this).concat(...e.map(t=>q(t)?nn(t):t))},entries(){return Ia(this,"entries",e=>(e[1]=Bt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(a=>Bt(this,a)),arguments)},find(e,t){return bt(this,"find",e,t,n=>Bt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>Bt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ba(this,"includes",e)},indexOf(...e){return Ba(this,"indexOf",e)},join(e){return nn(this).join(e)},lastIndexOf(...e){return Ba(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return An(this,"pop")},push(...e){return An(this,"push",e)},reduce(e,...t){return Li(this,"reduce",e,t)},reduceRight(e,...t){return Li(this,"reduceRight",e,t)},shift(){return An(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return An(this,"splice",e)},toReversed(){return nn(this).toReversed()},toSorted(e){return nn(this).toSorted(e)},toSpliced(...e){return nn(this).toSpliced(...e)},unshift(...e){return An(this,"unshift",e)},values(){return Ia(this,"values",e=>Bt(this,e))}};function Ia(e,t,n){const a=ka(e),i=a[t]();return a!==e&&!et(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const js=Array.prototype;function bt(e,t,n,a,i,l){const s=ka(e),o=s!==e&&!et(e),c=s[t];if(c!==js[t]){const d=c.apply(e,l);return o?rt(d):d}let p=n;s!==e&&(o?p=function(d,g){return n.call(this,Bt(e,d),g,e)}:n.length>2&&(p=function(d,g){return n.call(this,d,g,e)}));const u=c.call(s,p,a);return o&&i?i(u):u}function Li(e,t,n,a){const i=ka(e);let l=n;return i!==e&&(et(e)?n.length>3&&(l=function(s,o,c){return n.call(this,s,o,c,e)}):l=function(s,o,c){return n.call(this,s,Bt(e,o),c,e)}),i[t](l,...a)}function Ba(e,t,n){const a=ue(e);Ke(a,"iterate",Tn);const i=a[t](...n);return(i===-1||i===!1)&&wi(n[0])?(n[0]=ue(n[0]),a[t](...n)):i}function An(e,t,n=[]){Rt(),bi();const a=ue(e)[t].apply(e,n);return ki(),St(),a}const Fs=pi("__proto__,__v_isRef,__isVue"),ir=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt));function Vs(e){lt(e)||(e=String(e));const t=ue(this);return Ke(t,"has",e),t.hasOwnProperty(e)}class lr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?eo:cr:l?or:sr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const s=q(t);if(!i){let c;if(s&&(c=Hs[n]))return c;if(n==="hasOwnProperty")return Vs}const o=Reflect.get(t,n,Ne(t)?t:a);if((lt(n)?ir.has(n):Fs(n))||(i||Ke(t,"get",n),l))return o;if(Ne(o)){const c=s&&mi(n)?o:o.value;return i&&be(c)?Ya(c):c}return be(o)?i?Ya(o):bn(o):o}}class rr extends lr{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const s=q(t)&&mi(n);if(!this._isShallow){const p=Ct(l);if(!et(a)&&!Ct(a)&&(l=ue(l),a=ue(a)),!s&&Ne(l)&&!Ne(a))return p||(l.value=a),!0}const o=s?Number(n)<t.length:ge(t,n),c=Reflect.set(t,n,a,Ne(t)?t:i);return t===ue(i)&&(o?jt(a,l)&&yt(t,"set",n,a):yt(t,"add",n,a)),c}deleteProperty(t,n){const a=ge(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&yt(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!lt(n)||!ir.has(n))&&Ke(t,"has",n),a}ownKeys(t){return Ke(t,"iterate",q(t)?"length":Zt),Reflect.ownKeys(t)}}class Js extends lr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ws=new rr,Qs=new Js,qs=new rr(!0);const Za=e=>e,Wn=e=>Reflect.getPrototypeOf(e);function zs(e,t,n){return function(...a){const i=this.__v_raw,l=ue(i),s=sn(l),o=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,p=i[e](...a),u=n?Za:t?pn:rt;return!t&&Ke(l,"iterate",c?$a:Zt),{next(){const{value:d,done:g}=p.next();return g?{value:d,done:g}:{value:o?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function Qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xs(e,t){const n={get(i){const l=this.__v_raw,s=ue(l),o=ue(i);e||(jt(i,o)&&Ke(s,"get",i),Ke(s,"get",o));const{has:c}=Wn(s),p=t?Za:e?pn:rt;if(c.call(s,i))return p(l.get(i));if(c.call(s,o))return p(l.get(o));l!==s&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Ke(ue(i),"iterate",Zt),i.size},has(i){const l=this.__v_raw,s=ue(l),o=ue(i);return e||(jt(i,o)&&Ke(s,"has",i),Ke(s,"has",o)),i===o?l.has(i):l.has(i)||l.has(o)},forEach(i,l){const s=this,o=s.__v_raw,c=ue(o),p=t?Za:e?pn:rt;return!e&&Ke(c,"iterate",Zt),o.forEach((u,d)=>i.call(l,p(u),p(d),s))}};return Ee(n,e?{add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear")}:{add(i){!t&&!et(i)&&!Ct(i)&&(i=ue(i));const l=ue(this);return Wn(l).has.call(l,i)||(l.add(i),yt(l,"add",i,i)),this},set(i,l){!t&&!et(l)&&!Ct(l)&&(l=ue(l));const s=ue(this),{has:o,get:c}=Wn(s);let p=o.call(s,i);p||(i=ue(i),p=o.call(s,i));const u=c.call(s,i);return s.set(i,l),p?jt(l,u)&&yt(s,"set",i,l):yt(s,"add",i,l),this},delete(i){const l=ue(this),{has:s,get:o}=Wn(l);let c=s.call(l,i);c||(i=ue(i),c=s.call(l,i)),o&&o.call(l,i);const p=l.delete(i);return c&&yt(l,"delete",i,void 0),p},clear(){const i=ue(this),l=i.size!==0,s=i.clear();return l&&yt(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=zs(i,e,t)}),n}function xi(e,t){const n=Xs(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(ge(n,i)&&i in a?n:a,i,l)}const $s={get:xi(!1,!1)},Zs={get:xi(!1,!0)},Ys={get:xi(!0,!1)};const sr=new WeakMap,or=new WeakMap,cr=new WeakMap,eo=new WeakMap;function to(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function no(e){return e.__v_skip||!Object.isExtensible(e)?0:to(Ds(e))}function bn(e){return Ct(e)?e:yi(e,!1,Ws,$s,sr)}function ur(e){return yi(e,!1,qs,Zs,or)}function Ya(e){return yi(e,!0,Qs,Ys,cr)}function yi(e,t,n,a,i){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=no(e);if(l===0)return e;const s=i.get(e);if(s)return s;const o=new Proxy(e,l===2?a:n);return i.set(e,o),o}function Yt(e){return Ct(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function wi(e){return e?!!e.__v_raw:!1}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function ao(e){return!ge(e,"__v_skip")&&Object.isExtensible(e)&&Wl(e,"__v_skip",!0),e}const rt=e=>be(e)?bn(e):e,pn=e=>be(e)?Ya(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function le(e){return dr(e,!1)}function io(e){return dr(e,!0)}function dr(e,t){return Ne(e)?e:new lo(e,t)}class lo{constructor(t,n){this.dep=new vi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ue(t),this._value=n?t:rt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||Ct(t);t=a?t:ue(t),jt(t,n)&&(this._rawValue=t,this._value=a?t:rt(t),this.dep.trigger())}}function Ze(e){return Ne(e)?e.value:e}const ro={get:(e,t,n)=>t==="__v_raw"?e:Ze(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function pr(e){return Yt(e)?e:new Proxy(e,ro)}class so{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new vi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=En-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return Zl(this,!0),!0}get value(){const t=this.dep.track();return tr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function oo(e,t,n=!1){let a,i;return Z(e)?a=e:(a=e.get,i=e.set),new so(a,i,n)}const qn={},aa=new WeakMap;let zt;function co(e,t=!1,n=zt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function uo(e,t,n=ke){const{immediate:a,deep:i,once:l,scheduler:s,augmentJob:o,call:c}=n,p=C=>i?C:et(C)||i===!1||i===0?wt(C,1):wt(C);let u,d,g,k,v=!1,h=!1;if(Ne(e)?(d=()=>e.value,v=et(e)):Yt(e)?(d=()=>p(e),v=!0):q(e)?(h=!0,v=e.some(C=>Yt(C)||et(C)),d=()=>e.map(C=>{if(Ne(C))return C.value;if(Yt(C))return p(C);if(Z(C))return c?c(C,2):C()})):Z(e)?t?d=c?()=>c(e,2):e:d=()=>{if(g){Rt();try{g()}finally{St()}}const C=zt;zt=u;try{return c?c(e,3,[k]):e(k)}finally{zt=C}}:d=ht,t&&i){const C=d,Q=i===!0?1/0:i;d=()=>wt(C(),Q)}const b=Ls(),y=()=>{u.stop(),b&&b.active&&gi(b.effects,u)};if(l&&t){const C=t;t=(...Q)=>{C(...Q),y()}}let S=h?new Array(e.length).fill(qn):qn;const _=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(t){const Q=u.run();if(i||v||(h?Q.some((ne,re)=>jt(ne,S[re])):jt(Q,S))){g&&g();const ne=zt;zt=u;try{const re=[Q,S===qn?void 0:h&&S[0]===qn?[]:S,k];S=Q,c?c(t,3,re):t(...re)}finally{zt=ne}}}else u.run()};return o&&o(_),u=new Xl(d),u.scheduler=s?()=>s(_,!1):_,k=C=>co(C,!1,u),g=u.onStop=()=>{const C=aa.get(u);if(C){if(c)c(C,4);else for(const Q of C)Q();aa.delete(u)}},t?a?_(!0):S=u.run():s?s(_.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function wt(e,t=1/0,n){if(t<=0||!be(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ne(e))wt(e.value,t,n);else if(q(e))for(let a=0;a<e.length;a++)wt(e[a],t,n);else if(hn(e)||sn(e))e.forEach(a=>{wt(a,t,n)});else if(Jl(e)){for(const a in e)wt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&wt(e[a],t,n)}return e}function Vn(e,t,n,a){try{return a?e(...a):e()}catch(i){Aa(i,t,n)}}function st(e,t,n,a){if(Z(e)){const i=Vn(e,t,n,a);return i&&Fl(i)&&i.catch(l=>{Aa(l,t,n)}),i}if(q(e)){const i=[];for(let l=0;l<e.length;l++)i.push(st(e[l],t,n,a));return i}}function Aa(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||ke;if(t){let o=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}o=o.parent}if(l){Rt(),Vn(l,null,10,[e,c,p]),St();return}}po(e,n,i,a,s)}function po(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const Ue=[];let gt=-1;const on=[];let Nt=null,an=0;const fr=Promise.resolve();let ia=null;function va(e){const t=ia||fr;return e?t.then(this?e.bind(this):e):t}function fo(e){let t=gt+1,n=Ue.length;for(;t<n;){const a=t+n>>>1,i=Ue[a],l=_n(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function Pi(e){if(!(e.flags&1)){const t=_n(e),n=Ue[Ue.length-1];!n||!(e.flags&2)&&t>=_n(n)?Ue.push(e):Ue.splice(fo(t),0,e),e.flags|=1,gr()}}function gr(){ia||(ia=fr.then(hr))}function go(e){q(e)?on.push(...e):Nt&&e.id===-1?Nt.splice(an+1,0,e):e.flags&1||(on.push(e),e.flags|=1),gr()}function Gi(e,t,n=gt+1){for(;n<Ue.length;n++){const a=Ue[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Ue.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function mr(e){if(on.length){const t=[...new Set(on)].sort((n,a)=>_n(n)-_n(a));if(on.length=0,Nt){Nt.push(...t);return}for(Nt=t,an=0;an<Nt.length;an++){const n=Nt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,an=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hr(e){try{for(gt=0;gt<Ue.length;gt++){const t=Ue[gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;gt<Ue.length;gt++){const t=Ue[gt];t&&(t.flags&=-2)}gt=-1,Ue.length=0,mr(),ia=null,(Ue.length||on.length)&&hr()}}let Te=null,br=null;function la(e){const t=Te;return Te=e,br=e&&e.type.__scopeId||null,t}function We(e,t=Te,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&oa(-1);const l=la(t);let s;try{s=e(...i)}finally{la(l),a._d&&oa(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function xe(e,t){if(Te===null)return e;const n=Ma(Te),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,s,o,c=ke]=t[i];l&&(Z(l)&&(l={mounted:l,updated:l}),l.deep&&wt(s),a.push({dir:l,instance:n,value:s,oldValue:void 0,arg:o,modifiers:c}))}return e}function Jt(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let s=0;s<i.length;s++){const o=i[s];l&&(o.oldValue=l[s].value);let c=o.dir[a];c&&(Rt(),st(c,n,8,[e.el,o,e,t]),St())}}function Zn(e,t){if(Be){let n=Be.provides;const a=Be.parent&&Be.parent.provides;a===n&&(n=Be.provides=Object.create(a)),n[e]=t}}function at(e,t,n=!1){const a=Zr();if(a||un){let i=un?un._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Z(t)?t.call(a&&a.proxy):t}}const mo=Symbol.for("v-scx"),ho=()=>at(mo);function Mt(e,t,n){return kr(e,t,n)}function kr(e,t,n=ke){const{immediate:a,deep:i,flush:l,once:s}=n,o=Ee({},n),c=t&&a||!t&&l!=="post";let p;if(Ln){if(l==="sync"){const k=ho();p=k.__watcherHandles||(k.__watcherHandles=[])}else if(!c){const k=()=>{};return k.stop=ht,k.resume=ht,k.pause=ht,k}}const u=Be;o.call=(k,v,h)=>st(k,u,v,h);let d=!1;l==="post"?o.scheduler=k=>{ze(k,u&&u.suspense)}:l!=="sync"&&(d=!0,o.scheduler=(k,v)=>{v?k():Pi(k)}),o.augmentJob=k=>{t&&(k.flags|=4),d&&(k.flags|=2,u&&(k.id=u.uid,k.i=u))};const g=uo(e,t,o);return Ln&&(p?p.push(g):c&&g()),g}function bo(e,t,n){const a=this.proxy,i=De(e)?e.includes(".")?Ar(a,e):()=>a[e]:e.bind(a,a);let l;Z(t)?l=t:(l=t.handler,n=t);const s=Jn(this),o=kr(i,l.bind(a),n);return s(),o}function Ar(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const ko=Symbol("_vte"),vr=e=>e.__isTeleport,xt=Symbol("_leaveCb"),zn=Symbol("_enterCb");function Ao(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),Cr(()=>{e.isUnmounting=!0}),e}const Ye=[Function,Array],xr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ye,onEnter:Ye,onAfterEnter:Ye,onEnterCancelled:Ye,onBeforeLeave:Ye,onLeave:Ye,onAfterLeave:Ye,onLeaveCancelled:Ye,onBeforeAppear:Ye,onAppear:Ye,onAfterAppear:Ye,onAppearCancelled:Ye},yr=e=>{const t=e.subTree;return t.component?yr(t.component):t},vo={name:"BaseTransition",props:xr,setup(e,{slots:t}){const n=Zr(),a=Ao();return()=>{const i=t.default&&Mr(t.default(),!0);if(!i||!i.length)return;const l=wr(i),s=ue(e),{mode:o}=s;if(a.isLeaving)return Na(l);const c=Ui(l);if(!c)return Na(l);let p=ei(c,s,a,n,d=>p=d);c.type!==Ie&&Kn(c,p);let u=n.subTree&&Ui(n.subTree);if(u&&u.type!==Ie&&!Xt(u,c)&&yr(n).type!==Ie){let d=ei(u,s,a,n);if(Kn(u,d),o==="out-in"&&c.type!==Ie)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Na(l);o==="in-out"&&c.type!==Ie?d.delayLeave=(g,k,v)=>{const h=Pr(a,u);h[String(u.key)]=u,g[xt]=()=>{k(),g[xt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{v(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function wr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ie){t=n;break}}return t}const xo=vo;function Pr(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function ei(e,t,n,a,i){const{appear:l,mode:s,persisted:o=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:k,onAfterLeave:v,onLeaveCancelled:h,onBeforeAppear:b,onAppear:y,onAfterAppear:S,onAppearCancelled:_}=t,C=String(e.key),Q=Pr(n,e),ne=(V,Y)=>{V&&st(V,a,9,Y)},re=(V,Y)=>{const se=Y[1];ne(V,Y),q(V)?V.every(j=>j.length<=1)&&se():V.length<=1&&se()},Pe={mode:s,persisted:o,beforeEnter(V){let Y=c;if(!n.isMounted)if(l)Y=b||c;else return;V[xt]&&V[xt](!0);const se=Q[C];se&&Xt(e,se)&&se.el[xt]&&se.el[xt](),ne(Y,[V])},enter(V){let Y=p,se=u,j=d;if(!n.isMounted)if(l)Y=y||p,se=S||u,j=_||d;else return;let ee=!1;const Re=V[zn]=Oe=>{ee||(ee=!0,Oe?ne(j,[V]):ne(se,[V]),Pe.delayedLeave&&Pe.delayedLeave(),V[zn]=void 0)};Y?re(Y,[V,Re]):Re()},leave(V,Y){const se=String(e.key);if(V[zn]&&V[zn](!0),n.isUnmounting)return Y();ne(g,[V]);let j=!1;const ee=V[xt]=Re=>{j||(j=!0,Y(),Re?ne(h,[V]):ne(v,[V]),V[xt]=void 0,Q[se]===e&&delete Q[se])};Q[se]=e,k?re(k,[V,ee]):ee()},clone(V){const Y=ei(V,t,n,a,i);return i&&i(Y),Y}};return Pe}function Na(e){if(xa(e))return e=Ft(e),e.children=null,e}function Ui(e){if(!xa(e))return vr(e.type)&&e.children?wr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Z(n.default))return n.default()}}function Kn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Kn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mr(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let s=e[l];const o=n==null?s.key:String(n)+String(s.key!=null?s.key:l);s.type===X?(s.patchFlag&128&&i++,a=a.concat(Mr(s.children,t,o))):(t||s.type!==Ie)&&a.push(o!=null?Ft(s,{key:o}):s)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Dr(e,t){return Z(e)?Ee({name:e.name},t,{setup:e}):e}function Rr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ra=new WeakMap;function Dn(e,t,n,a,i=!1){if(q(e)){e.forEach((v,h)=>Dn(v,t&&(q(t)?t[h]:t),n,a,i));return}if(cn(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Dn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?Ma(a.component):a.el,s=i?null:l,{i:o,r:c}=e,p=t&&t.r,u=o.refs===ke?o.refs={}:o.refs,d=o.setupState,g=ue(d),k=d===ke?jl:v=>ge(g,v);if(p!=null&&p!==c){if(Hi(t),De(p))u[p]=null,k(p)&&(d[p]=null);else if(Ne(p)){p.value=null;const v=t;v.k&&(u[v.k]=null)}}if(Z(c))Vn(c,o,12,[s,u]);else{const v=De(c),h=Ne(c);if(v||h){const b=()=>{if(e.f){const y=v?k(c)?d[c]:u[c]:c.value;if(i)q(y)&&gi(y,l);else if(q(y))y.includes(l)||y.push(l);else if(v)u[c]=[l],k(c)&&(d[c]=u[c]);else{const S=[l];c.value=S,e.k&&(u[e.k]=S)}}else v?(u[c]=s,k(c)&&(d[c]=s)):h&&(c.value=s,e.k&&(u[e.k]=s))};if(s){const y=()=>{b(),ra.delete(e)};y.id=-1,ra.set(e,y),ze(y,n)}else Hi(e),b()}}}function Hi(e){const t=ra.get(e);t&&(t.flags|=8,ra.delete(e))}ba().requestIdleCallback;ba().cancelIdleCallback;const cn=e=>!!e.type.__asyncLoader,xa=e=>e.type.__isKeepAlive;function yo(e,t){Sr(e,"a",t)}function wo(e,t){Sr(e,"da",t)}function Sr(e,t,n=Be){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ya(t,a,n),n){let i=n.parent;for(;i&&i.parent;)xa(i.parent.vnode)&&Po(a,t,n,i),i=i.parent}}function Po(e,t,n,a){const i=ya(t,e,a,!0);Mi(()=>{gi(a[t],i)},n)}function ya(e,t,n=Be,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...s)=>{Rt();const o=Jn(n),c=st(t,n,e,s);return o(),St(),c});return a?i.unshift(l):i.push(l),l}}const Et=e=>(t,n=Be)=>{(!Ln||e==="sp")&&ya(e,(...a)=>t(...a),n)},Mo=Et("bm"),tn=Et("m"),Do=Et("bu"),Ro=Et("u"),Cr=Et("bum"),Mi=Et("um"),So=Et("sp"),Co=Et("rtg"),Eo=Et("rtc");function To(e,t=Be){ya("ec",e,t)}const Er="components";function In(e,t){return _r(Er,e,!0,t)||e}const Tr=Symbol.for("v-ndc");function _o(e){return De(e)?_r(Er,e,!1)||e:e||Tr}function _r(e,t,n=!0,a=!1){const i=Te||Be;if(i){const l=i.type;{const o=bc(l,!1);if(o&&(o===t||o===tt(t)||o===ma(tt(t))))return l}const s=ji(i[e]||l[e],t)||ji(i.appContext[e],t);return!s&&a?l:s}}function ji(e,t){return e&&(e[t]||e[tt(t)]||e[ma(tt(t))])}function de(e,t,n,a){let i;const l=n,s=q(e);if(s||De(e)){const o=s&&Yt(e);let c=!1,p=!1;o&&(c=!et(e),p=Ct(e),e=ka(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(c?p?pn(rt(e[u])):rt(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,l)}else if(be(e))if(e[Symbol.iterator])i=Array.from(e,(o,c)=>t(o,c,void 0,l));else{const o=Object.keys(e);i=new Array(o.length);for(let c=0,p=o.length;c<p;c++){const u=o[c];i[c]=t(e[u],u,c,l)}}else i=[];return i}function Ko(e,t,n={},a,i){if(Te.ce||Te.parent&&cn(Te.parent)&&Te.parent.ce){const p=Object.keys(n).length>0;return R(),Nn(X,null,[he("slot",n,a)],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),R();const s=l&&Kr(l(n)),o=n.key||s&&s.key,c=Nn(X,{key:(o&&!lt(o)?o:`_${t}`)+(!s&&a?"_fb":"")},s||[],s&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function Kr(e){return e.some(t=>On(t)?!(t.type===Ie||t.type===X&&!Kr(t.children)):!0)?e:null}const ti=e=>e?Yr(e)?Ma(e):ti(e.parent):null,Rn=Ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ti(e.parent),$root:e=>ti(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Br(e),$forceUpdate:e=>e.f||(e.f=()=>{Pi(e.update)}),$nextTick:e=>e.n||(e.n=va.bind(e.proxy)),$watch:e=>bo.bind(e)}),Oa=(e,t)=>e!==ke&&!e.__isScriptSetup&&ge(e,t),Io={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:s,type:o,appContext:c}=e;if(t[0]!=="$"){const g=s[t];if(g!==void 0)switch(g){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Oa(a,t))return s[t]=1,a[t];if(i!==ke&&ge(i,t))return s[t]=2,i[t];if(ge(l,t))return s[t]=3,l[t];if(n!==ke&&ge(n,t))return s[t]=4,n[t];ni&&(s[t]=0)}}const p=Rn[t];let u,d;if(p)return t==="$attrs"&&Ke(e.attrs,"get",""),p(e);if((u=o.__cssModules)&&(u=u[t]))return u;if(n!==ke&&ge(n,t))return s[t]=4,n[t];if(d=c.config.globalProperties,ge(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Oa(i,t)?(i[t]=n,!0):a!==ke&&ge(a,t)?(a[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:s}},o){let c;return!!(n[o]||e!==ke&&o[0]!=="$"&&ge(e,o)||Oa(t,o)||ge(l,o)||ge(a,o)||ge(Rn,o)||ge(i.config.globalProperties,o)||(c=s.__cssModules)&&c[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fi(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ni=!0;function Bo(e){const t=Br(e),n=e.proxy,a=e.ctx;ni=!1,t.beforeCreate&&Vi(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:s,watch:o,provide:c,inject:p,created:u,beforeMount:d,mounted:g,beforeUpdate:k,updated:v,activated:h,deactivated:b,beforeDestroy:y,beforeUnmount:S,destroyed:_,unmounted:C,render:Q,renderTracked:ne,renderTriggered:re,errorCaptured:Pe,serverPrefetch:V,expose:Y,inheritAttrs:se,components:j,directives:ee,filters:Re}=t;if(p&&No(p,a,null),s)for(const oe in s){const ce=s[oe];Z(ce)&&(a[oe]=ce.bind(n))}if(i){const oe=i.call(n,n);be(oe)&&(e.data=bn(oe))}if(ni=!0,l)for(const oe in l){const ce=l[oe],je=Z(ce)?ce.bind(n,n):Z(ce.get)?ce.get.bind(n,n):ht,ct=!Z(ce)&&Z(ce.set)?ce.set.bind(n):ht,Qe=te({get:je,set:ct});Object.defineProperty(a,oe,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:G=>Qe.value=G})}if(o)for(const oe in o)Ir(o[oe],a,n,oe);if(c){const oe=Z(c)?c.call(n):c;Reflect.ownKeys(oe).forEach(ce=>{Zn(ce,oe[ce])})}u&&Vi(u,e,"c");function ye(oe,ce){q(ce)?ce.forEach(je=>oe(je.bind(n))):ce&&oe(ce.bind(n))}if(ye(Mo,d),ye(tn,g),ye(Do,k),ye(Ro,v),ye(yo,h),ye(wo,b),ye(To,Pe),ye(Eo,ne),ye(Co,re),ye(Cr,S),ye(Mi,C),ye(So,V),q(Y))if(Y.length){const oe=e.exposed||(e.exposed={});Y.forEach(ce=>{Object.defineProperty(oe,ce,{get:()=>n[ce],set:je=>n[ce]=je,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===ht&&(e.render=Q),se!=null&&(e.inheritAttrs=se),j&&(e.components=j),ee&&(e.directives=ee),V&&Rr(e)}function No(e,t,n=ht){q(e)&&(e=ai(e));for(const a in e){const i=e[a];let l;be(i)?"default"in i?l=at(i.from||a,i.default,!0):l=at(i.from||a):l=at(i),Ne(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:s=>l.value=s}):t[a]=l}}function Vi(e,t,n){st(q(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ir(e,t,n,a){let i=a.includes(".")?Ar(n,a):()=>n[a];if(De(e)){const l=t[e];Z(l)&&Mt(i,l)}else if(Z(e))Mt(i,e.bind(n));else if(be(e))if(q(e))e.forEach(l=>Ir(l,t,n,a));else{const l=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(l)&&Mt(i,l,e)}}function Br(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:s}}=e.appContext,o=l.get(t);let c;return o?c=o:!i.length&&!n&&!a?c=t:(c={},i.length&&i.forEach(p=>sa(c,p,s,!0)),sa(c,t,s)),be(t)&&l.set(t,c),c}function sa(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&sa(e,l,n,!0),i&&i.forEach(s=>sa(e,s,n,!0));for(const s in t)if(!(a&&s==="expose")){const o=Oo[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Oo={data:Ji,props:Wi,emits:Wi,methods:yn,computed:yn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:yn,directives:yn,watch:Go,provide:Ji,inject:Lo};function Ji(e,t){return t?e?function(){return Ee(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function Lo(e,t){return yn(ai(e),ai(t))}function ai(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function yn(e,t){return e?Ee(Object.create(null),e,t):t}function Wi(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:Ee(Object.create(null),Fi(e),Fi(t??{})):t}function Go(e,t){if(!e)return t;if(!t)return e;const n=Ee(Object.create(null),e);for(const a in t)n[a]=Le(e[a],t[a]);return n}function Nr(){return{app:null,config:{isNativeTag:jl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uo=0;function Ho(e,t){return function(a,i=null){Z(a)||(a=Ee({},a)),i!=null&&!be(i)&&(i=null);const l=Nr(),s=new WeakSet,o=[];let c=!1;const p=l.app={_uid:Uo++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:Ac,get config(){return l.config},set config(u){},use(u,...d){return s.has(u)||(u&&Z(u.install)?(s.add(u),u.install(p,...d)):Z(u)&&(s.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,g){if(!c){const k=p._ceVNode||he(a,i);return k.appContext=l,g===!0?g="svg":g===!1&&(g=void 0),e(k,u,g),c=!0,p._container=u,u.__vue_app__=p,Ma(k.component)}},onUnmount(u){o.push(u)},unmount(){c&&(st(o,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p},runWithContext(u){const d=un;un=p;try{return u()}finally{un=d}}};return p}}let un=null;const jo=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${en(t)}Modifiers`];function Fo(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||ke;let i=n;const l=t.startsWith("update:"),s=l&&jo(a,t.slice(7));s&&(s.trim&&(i=n.map(u=>De(u)?u.trim():u)),s.number&&(i=n.map(ha)));let o,c=a[o=Ta(t)]||a[o=Ta(tt(t))];!c&&l&&(c=a[o=Ta(en(t))]),c&&st(c,e,6,i);const p=a[o+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,st(p,e,6,i)}}const Vo=new WeakMap;function Or(e,t,n=!1){const a=n?Vo:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let s={},o=!1;if(!Z(e)){const c=p=>{const u=Or(p,t,!0);u&&(o=!0,Ee(s,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!o?(be(e)&&a.set(e,null),null):(q(l)?l.forEach(c=>s[c]=null):Ee(s,l),be(e)&&a.set(e,s),s)}function wa(e,t){return!e||!fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,en(t))||ge(e,t))}function Qi(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:s,attrs:o,emit:c,render:p,renderCache:u,props:d,data:g,setupState:k,ctx:v,inheritAttrs:h}=e,b=la(e);let y,S;try{if(n.shapeFlag&4){const C=i||a,Q=C;y=mt(p.call(Q,C,u,d,k,g,v)),S=o}else{const C=t;y=mt(C.length>1?C(d,{attrs:o,slots:s,emit:c}):C(d,null)),S=t.props?o:Jo(o)}}catch(C){Sn.length=0,Aa(C,e,1),y=he(Ie)}let _=y;if(S&&h!==!1){const C=Object.keys(S),{shapeFlag:Q}=_;C.length&&Q&7&&(l&&C.some(fi)&&(S=Wo(S,l)),_=Ft(_,S,!1,!0))}return n.dirs&&(_=Ft(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Kn(_,n.transition),y=_,la(b),y}const Jo=e=>{let t;for(const n in e)(n==="class"||n==="style"||fa(n))&&((t||(t={}))[n]=e[n]);return t},Wo=(e,t)=>{const n={};for(const a in e)(!fi(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Qo(e,t,n){const{props:a,children:i,component:l}=e,{props:s,children:o,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?qi(a,s,p):!!s;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(s[g]!==a[g]&&!wa(p,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:a===s?!1:a?s?qi(a,s,p):!0:!!s;return!1}function qi(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!wa(n,l))return!0}return!1}function qo({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const Lr={},Gr=()=>Object.create(Lr),Ur=e=>Object.getPrototypeOf(e)===Lr;function zo(e,t,n,a=!1){const i={},l=Gr();e.propsDefaults=Object.create(null),Hr(e,t,i,l);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=a?i:ur(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function Xo(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:s}}=e,o=ue(i),[c]=e.propsOptions;let p=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(wa(e.emitsOptions,g))continue;const k=t[g];if(c)if(ge(l,g))k!==l[g]&&(l[g]=k,p=!0);else{const v=tt(g);i[v]=ii(c,o,v,k,e,!1)}else k!==l[g]&&(l[g]=k,p=!0)}}}else{Hr(e,t,i,l)&&(p=!0);let u;for(const d in o)(!t||!ge(t,d)&&((u=en(d))===d||!ge(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ii(c,o,d,void 0,e,!0)):delete i[d]);if(l!==o)for(const d in l)(!t||!ge(t,d))&&(delete l[d],p=!0)}p&&yt(e.attrs,"set","")}function Hr(e,t,n,a){const[i,l]=e.propsOptions;let s=!1,o;if(t)for(let c in t){if(wn(c))continue;const p=t[c];let u;i&&ge(i,u=tt(c))?!l||!l.includes(u)?n[u]=p:(o||(o={}))[u]=p:wa(e.emitsOptions,c)||(!(c in a)||p!==a[c])&&(a[c]=p,s=!0)}if(l){const c=ue(n),p=o||ke;for(let u=0;u<l.length;u++){const d=l[u];n[d]=ii(i,c,d,p[d],e,!ge(p,d))}}return s}function ii(e,t,n,a,i,l){const s=e[n];if(s!=null){const o=ge(s,"default");if(o&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Z(c)){const{propsDefaults:p}=i;if(n in p)a=p[n];else{const u=Jn(i);a=p[n]=c.call(null,t),u()}}else a=c;i.ce&&i.ce._setProp(n,a)}s[0]&&(l&&!o?a=!1:s[1]&&(a===""||a===en(n))&&(a=!0))}return a}const $o=new WeakMap;function jr(e,t,n=!1){const a=n?$o:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,s={},o=[];let c=!1;if(!Z(e)){const u=d=>{c=!0;const[g,k]=jr(d,t,!0);Ee(s,g),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!c)return be(e)&&a.set(e,rn),rn;if(q(l))for(let u=0;u<l.length;u++){const d=tt(l[u]);zi(d)&&(s[d]=ke)}else if(l)for(const u in l){const d=tt(u);if(zi(d)){const g=l[u],k=s[d]=q(g)||Z(g)?{type:g}:Ee({},g),v=k.type;let h=!1,b=!0;if(q(v))for(let y=0;y<v.length;++y){const S=v[y],_=Z(S)&&S.name;if(_==="Boolean"){h=!0;break}else _==="String"&&(b=!1)}else h=Z(v)&&v.name==="Boolean";k[0]=h,k[1]=b,(h||ge(k,"default"))&&o.push(d)}}const p=[s,o];return be(e)&&a.set(e,p),p}function zi(e){return e[0]!=="$"&&!wn(e)}const Di=e=>e==="_"||e==="_ctx"||e==="$stable",Ri=e=>q(e)?e.map(mt):[mt(e)],Zo=(e,t,n)=>{if(t._n)return t;const a=We((...i)=>Ri(t(...i)),n);return a._c=!1,a},Fr=(e,t,n)=>{const a=e._ctx;for(const i in e){if(Di(i))continue;const l=e[i];if(Z(l))t[i]=Zo(i,l,a);else if(l!=null){const s=Ri(l);t[i]=()=>s}}},Vr=(e,t)=>{const n=Ri(t);e.slots.default=()=>n},Jr=(e,t,n)=>{for(const a in t)(n||!Di(a))&&(e[a]=t[a])},Yo=(e,t,n)=>{const a=e.slots=Gr();if(e.vnode.shapeFlag&32){const i=t._;i?(Jr(a,t,n),n&&Wl(a,"_",i,!0)):Fr(t,a)}else t&&Vr(e,t)},ec=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,s=ke;if(a.shapeFlag&32){const o=t._;o?n&&o===1?l=!1:Jr(i,t,n):(l=!t.$stable,Fr(t,i)),s=t}else t&&(Vr(e,t),s={default:1});if(l)for(const o in i)!Di(o)&&s[o]==null&&delete i[o]},ze=lc;function tc(e){return nc(e)}function nc(e,t){const n=ba();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:s,createText:o,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:g,setScopeId:k=ht,insertStaticContent:v}=e,h=(f,m,A,M=null,E=null,D=null,H=void 0,N=null,B=!!m.dynamicChildren)=>{if(f===m)return;f&&!Xt(f,m)&&(M=P(f),G(f,E,D,!0),f=null),m.patchFlag===-2&&(B=!1,m.dynamicChildren=null);const{type:K,ref:z,shapeFlag:F}=m;switch(K){case Pa:b(f,m,A,M);break;case Ie:y(f,m,A,M);break;case Yn:f==null&&S(m,A,M,H);break;case X:j(f,m,A,M,E,D,H,N,B);break;default:F&1?Q(f,m,A,M,E,D,H,N,B):F&6?ee(f,m,A,M,E,D,H,N,B):(F&64||F&128)&&K.process(f,m,A,M,E,D,H,N,B,J)}z!=null&&E?Dn(z,f&&f.ref,D,m||f,!m):z==null&&f&&f.ref!=null&&Dn(f.ref,null,D,f,!0)},b=(f,m,A,M)=>{if(f==null)a(m.el=o(m.children),A,M);else{const E=m.el=f.el;m.children!==f.children&&p(E,m.children)}},y=(f,m,A,M)=>{f==null?a(m.el=c(m.children||""),A,M):m.el=f.el},S=(f,m,A,M)=>{[f.el,f.anchor]=v(f.children,m,A,M,f.el,f.anchor)},_=({el:f,anchor:m},A,M)=>{let E;for(;f&&f!==m;)E=g(f),a(f,A,M),f=E;a(m,A,M)},C=({el:f,anchor:m})=>{let A;for(;f&&f!==m;)A=g(f),i(f),f=A;i(m)},Q=(f,m,A,M,E,D,H,N,B)=>{if(m.type==="svg"?H="svg":m.type==="math"&&(H="mathml"),f==null)ne(m,A,M,E,D,H,N,B);else{const K=f.el&&f.el._isVueCE?f.el:null;try{K&&K._beginPatch(),V(f,m,E,D,H,N,B)}finally{K&&K._endPatch()}}},ne=(f,m,A,M,E,D,H,N)=>{let B,K;const{props:z,shapeFlag:F,transition:W,dirs:$}=f;if(B=f.el=s(f.type,D,z&&z.is,z),F&8?u(B,f.children):F&16&&Pe(f.children,B,null,M,E,La(f,D),H,N),$&&Jt(f,null,M,"created"),re(B,f,f.scopeId,H,M),z){for(const Ae in z)Ae!=="value"&&!wn(Ae)&&l(B,Ae,null,z[Ae],D,M);"value"in z&&l(B,"value",null,z.value,D),(K=z.onVnodeBeforeMount)&&ft(K,M,f)}$&&Jt(f,null,M,"beforeMount");const ie=ac(E,W);ie&&W.beforeEnter(B),a(B,m,A),((K=z&&z.onVnodeMounted)||ie||$)&&ze(()=>{K&&ft(K,M,f),ie&&W.enter(B),$&&Jt(f,null,M,"mounted")},E)},re=(f,m,A,M,E)=>{if(A&&k(f,A),M)for(let D=0;D<M.length;D++)k(f,M[D]);if(E){let D=E.subTree;if(m===D||zr(D.type)&&(D.ssContent===m||D.ssFallback===m)){const H=E.vnode;re(f,H,H.scopeId,H.slotScopeIds,E.parent)}}},Pe=(f,m,A,M,E,D,H,N,B=0)=>{for(let K=B;K<f.length;K++){const z=f[K]=N?Ot(f[K]):mt(f[K]);h(null,z,m,A,M,E,D,H,N)}},V=(f,m,A,M,E,D,H)=>{const N=m.el=f.el;let{patchFlag:B,dynamicChildren:K,dirs:z}=m;B|=f.patchFlag&16;const F=f.props||ke,W=m.props||ke;let $;if(A&&Wt(A,!1),($=W.onVnodeBeforeUpdate)&&ft($,A,m,f),z&&Jt(m,f,A,"beforeUpdate"),A&&Wt(A,!0),(F.innerHTML&&W.innerHTML==null||F.textContent&&W.textContent==null)&&u(N,""),K?Y(f.dynamicChildren,K,N,A,M,La(m,E),D):H||ce(f,m,N,null,A,M,La(m,E),D,!1),B>0){if(B&16)se(N,F,W,A,E);else if(B&2&&F.class!==W.class&&l(N,"class",null,W.class,E),B&4&&l(N,"style",F.style,W.style,E),B&8){const ie=m.dynamicProps;for(let Ae=0;Ae<ie.length;Ae++){const me=ie[Ae],Fe=F[me],Ve=W[me];(Ve!==Fe||me==="value")&&l(N,me,Fe,Ve,E,A)}}B&1&&f.children!==m.children&&u(N,m.children)}else!H&&K==null&&se(N,F,W,A,E);(($=W.onVnodeUpdated)||z)&&ze(()=>{$&&ft($,A,m,f),z&&Jt(m,f,A,"updated")},M)},Y=(f,m,A,M,E,D,H)=>{for(let N=0;N<m.length;N++){const B=f[N],K=m[N],z=B.el&&(B.type===X||!Xt(B,K)||B.shapeFlag&198)?d(B.el):A;h(B,K,z,null,M,E,D,H,!0)}},se=(f,m,A,M,E)=>{if(m!==A){if(m!==ke)for(const D in m)!wn(D)&&!(D in A)&&l(f,D,m[D],null,E,M);for(const D in A){if(wn(D))continue;const H=A[D],N=m[D];H!==N&&D!=="value"&&l(f,D,N,H,E,M)}"value"in A&&l(f,"value",m.value,A.value,E)}},j=(f,m,A,M,E,D,H,N,B)=>{const K=m.el=f?f.el:o(""),z=m.anchor=f?f.anchor:o("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:$}=m;$&&(N=N?N.concat($):$),f==null?(a(K,A,M),a(z,A,M),Pe(m.children||[],A,z,E,D,H,N,B)):F>0&&F&64&&W&&f.dynamicChildren&&f.dynamicChildren.length===W.length?(Y(f.dynamicChildren,W,A,E,D,H,N),(m.key!=null||E&&m===E.subTree)&&Wr(f,m,!0)):ce(f,m,A,z,E,D,H,N,B)},ee=(f,m,A,M,E,D,H,N,B)=>{m.slotScopeIds=N,f==null?m.shapeFlag&512?E.ctx.activate(m,A,M,H,B):Re(m,A,M,E,D,H,B):Oe(f,m,B)},Re=(f,m,A,M,E,D,H)=>{const N=f.component=pc(f,M,E);if(xa(f)&&(N.ctx.renderer=J),fc(N,!1,H),N.asyncDep){if(E&&E.registerDep(N,ye,H),!f.el){const B=N.subTree=he(Ie);y(null,B,m,A),f.placeholder=B.el}}else ye(N,f,m,A,E,D,H)},Oe=(f,m,A)=>{const M=m.component=f.component;if(Qo(f,m,A))if(M.asyncDep&&!M.asyncResolved){oe(M,m,A);return}else M.next=m,M.update();else m.el=f.el,M.vnode=m},ye=(f,m,A,M,E,D,H)=>{const N=()=>{if(f.isMounted){let{next:F,bu:W,u:$,parent:ie,vnode:Ae}=f;{const dt=Qr(f);if(dt){F&&(F.el=Ae.el,oe(f,F,H)),dt.asyncDep.then(()=>{f.isUnmounted||N()});return}}let me=F,Fe;Wt(f,!1),F?(F.el=Ae.el,oe(f,F,H)):F=Ae,W&&$n(W),(Fe=F.props&&F.props.onVnodeBeforeUpdate)&&ft(Fe,ie,F,Ae),Wt(f,!0);const Ve=Qi(f),ut=f.subTree;f.subTree=Ve,h(ut,Ve,d(ut.el),P(ut),f,E,D),F.el=Ve.el,me===null&&qo(f,Ve.el),$&&ze($,E),(Fe=F.props&&F.props.onVnodeUpdated)&&ze(()=>ft(Fe,ie,F,Ae),E)}else{let F;const{el:W,props:$}=m,{bm:ie,m:Ae,parent:me,root:Fe,type:Ve}=f,ut=cn(m);Wt(f,!1),ie&&$n(ie),!ut&&(F=$&&$.onVnodeBeforeMount)&&ft(F,me,m),Wt(f,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(Ve);const dt=f.subTree=Qi(f);h(null,dt,A,M,f,E,D),m.el=dt.el}if(Ae&&ze(Ae,E),!ut&&(F=$&&$.onVnodeMounted)){const dt=m;ze(()=>ft(F,me,dt),E)}(m.shapeFlag&256||me&&cn(me.vnode)&&me.vnode.shapeFlag&256)&&f.a&&ze(f.a,E),f.isMounted=!0,m=A=M=null}};f.scope.on();const B=f.effect=new Xl(N);f.scope.off();const K=f.update=B.run.bind(B),z=f.job=B.runIfDirty.bind(B);z.i=f,z.id=f.uid,B.scheduler=()=>Pi(z),Wt(f,!0),K()},oe=(f,m,A)=>{m.component=f;const M=f.vnode.props;f.vnode=m,f.next=null,Xo(f,m.props,M,A),ec(f,m.children,A),Rt(),Gi(f),St()},ce=(f,m,A,M,E,D,H,N,B=!1)=>{const K=f&&f.children,z=f?f.shapeFlag:0,F=m.children,{patchFlag:W,shapeFlag:$}=m;if(W>0){if(W&128){ct(K,F,A,M,E,D,H,N,B);return}else if(W&256){je(K,F,A,M,E,D,H,N,B);return}}$&8?(z&16&&U(K,E,D),F!==K&&u(A,F)):z&16?$&16?ct(K,F,A,M,E,D,H,N,B):U(K,E,D,!0):(z&8&&u(A,""),$&16&&Pe(F,A,M,E,D,H,N,B))},je=(f,m,A,M,E,D,H,N,B)=>{f=f||rn,m=m||rn;const K=f.length,z=m.length,F=Math.min(K,z);let W;for(W=0;W<F;W++){const $=m[W]=B?Ot(m[W]):mt(m[W]);h(f[W],$,A,null,E,D,H,N,B)}K>z?U(f,E,D,!0,!1,F):Pe(m,A,M,E,D,H,N,B,F)},ct=(f,m,A,M,E,D,H,N,B)=>{let K=0;const z=m.length;let F=f.length-1,W=z-1;for(;K<=F&&K<=W;){const $=f[K],ie=m[K]=B?Ot(m[K]):mt(m[K]);if(Xt($,ie))h($,ie,A,null,E,D,H,N,B);else break;K++}for(;K<=F&&K<=W;){const $=f[F],ie=m[W]=B?Ot(m[W]):mt(m[W]);if(Xt($,ie))h($,ie,A,null,E,D,H,N,B);else break;F--,W--}if(K>F){if(K<=W){const $=W+1,ie=$<z?m[$].el:M;for(;K<=W;)h(null,m[K]=B?Ot(m[K]):mt(m[K]),A,ie,E,D,H,N,B),K++}}else if(K>W)for(;K<=F;)G(f[K],E,D,!0),K++;else{const $=K,ie=K,Ae=new Map;for(K=ie;K<=W;K++){const qe=m[K]=B?Ot(m[K]):mt(m[K]);qe.key!=null&&Ae.set(qe.key,K)}let me,Fe=0;const Ve=W-ie+1;let ut=!1,dt=0;const kn=new Array(Ve);for(K=0;K<Ve;K++)kn[K]=0;for(K=$;K<=F;K++){const qe=f[K];if(Fe>=Ve){G(qe,E,D,!0);continue}let pt;if(qe.key!=null)pt=Ae.get(qe.key);else for(me=ie;me<=W;me++)if(kn[me-ie]===0&&Xt(qe,m[me])){pt=me;break}pt===void 0?G(qe,E,D,!0):(kn[pt-ie]=K+1,pt>=dt?dt=pt:ut=!0,h(qe,m[pt],A,null,E,D,H,N,B),Fe++)}const _i=ut?ic(kn):rn;for(me=_i.length-1,K=Ve-1;K>=0;K--){const qe=ie+K,pt=m[qe],Ki=m[qe+1],Ii=qe+1<z?Ki.el||qr(Ki):M;kn[K]===0?h(null,pt,A,Ii,E,D,H,N,B):ut&&(me<0||K!==_i[me]?Qe(pt,A,Ii,2):me--)}}},Qe=(f,m,A,M,E=null)=>{const{el:D,type:H,transition:N,children:B,shapeFlag:K}=f;if(K&6){Qe(f.component.subTree,m,A,M);return}if(K&128){f.suspense.move(m,A,M);return}if(K&64){H.move(f,m,A,J);return}if(H===X){a(D,m,A);for(let F=0;F<B.length;F++)Qe(B[F],m,A,M);a(f.anchor,m,A);return}if(H===Yn){_(f,m,A);return}if(M!==2&&K&1&&N)if(M===0)N.beforeEnter(D),a(D,m,A),ze(()=>N.enter(D),E);else{const{leave:F,delayLeave:W,afterLeave:$}=N,ie=()=>{f.ctx.isUnmounted?i(D):a(D,m,A)},Ae=()=>{D._isLeaving&&D[xt](!0),F(D,()=>{ie(),$&&$()})};W?W(D,ie,Ae):Ae()}else a(D,m,A)},G=(f,m,A,M=!1,E=!1)=>{const{type:D,props:H,ref:N,children:B,dynamicChildren:K,shapeFlag:z,patchFlag:F,dirs:W,cacheIndex:$}=f;if(F===-2&&(E=!1),N!=null&&(Rt(),Dn(N,null,A,f,!0),St()),$!=null&&(m.renderCache[$]=void 0),z&256){m.ctx.deactivate(f);return}const ie=z&1&&W,Ae=!cn(f);let me;if(Ae&&(me=H&&H.onVnodeBeforeUnmount)&&ft(me,m,f),z&6)we(f.component,A,M);else{if(z&128){f.suspense.unmount(A,M);return}ie&&Jt(f,null,m,"beforeUnmount"),z&64?f.type.remove(f,m,A,J,M):K&&!K.hasOnce&&(D!==X||F>0&&F&64)?U(K,m,A,!1,!0):(D===X&&F&384||!E&&z&16)&&U(B,m,A),M&&x(f)}(Ae&&(me=H&&H.onVnodeUnmounted)||ie)&&ze(()=>{me&&ft(me,m,f),ie&&Jt(f,null,m,"unmounted")},A)},x=f=>{const{type:m,el:A,anchor:M,transition:E}=f;if(m===X){pe(A,M);return}if(m===Yn){C(f);return}const D=()=>{i(A),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:H,delayLeave:N}=E,B=()=>H(A,D);N?N(f.el,D,B):B()}else D()},pe=(f,m)=>{let A;for(;f!==m;)A=g(f),i(f),f=A;i(m)},we=(f,m,A)=>{const{bum:M,scope:E,job:D,subTree:H,um:N,m:B,a:K}=f;Xi(B),Xi(K),M&&$n(M),E.stop(),D&&(D.flags|=8,G(H,f,m,A)),N&&ze(N,m),ze(()=>{f.isUnmounted=!0},m)},U=(f,m,A,M=!1,E=!1,D=0)=>{for(let H=D;H<f.length;H++)G(f[H],m,A,M,E)},P=f=>{if(f.shapeFlag&6)return P(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=g(f.anchor||f.el),A=m&&m[ko];return A?g(A):m};let I=!1;const L=(f,m,A)=>{let M;f==null?m._vnode&&(G(m._vnode,null,null,!0),M=m._vnode.component):h(m._vnode||null,f,m,null,null,null,A),m._vnode=f,I||(I=!0,Gi(M),mr(),I=!1)},J={p:h,um:G,m:Qe,r:x,mt:Re,mc:Pe,pc:ce,pbc:Y,n:P,o:e};return{render:L,hydrate:void 0,createApp:Ho(L)}}function La({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ac(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wr(e,t,n=!1){const a=e.children,i=t.children;if(q(a)&&q(i))for(let l=0;l<a.length;l++){const s=a[l];let o=i[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[l]=Ot(i[l]),o.el=s.el),!n&&o.patchFlag!==-2&&Wr(s,o)),o.type===Pa&&(o.patchFlag!==-1?o.el=s.el:o.__elIndex=l+(e.type===X?1:0)),o.type===Ie&&!o.el&&(o.el=s.el)}}function ic(e){const t=e.slice(),n=[0];let a,i,l,s,o;const c=e.length;for(a=0;a<c;a++){const p=e[a];if(p!==0){if(i=n[n.length-1],e[i]<p){t[a]=i,n.push(a);continue}for(l=0,s=n.length-1;l<s;)o=l+s>>1,e[n[o]]<p?l=o+1:s=o;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,s=n[l-1];l-- >0;)n[l]=s,s=t[s];return n}function Qr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qr(t)}function Xi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?qr(t.subTree):null}const zr=e=>e.__isSuspense;function lc(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):go(e)}const X=Symbol.for("v-fgt"),Pa=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc"),Sn=[];let $e=null;function R(e=!1){Sn.push($e=e?null:[])}function rc(){Sn.pop(),$e=Sn[Sn.length-1]||null}let Bn=1;function oa(e,t=!1){Bn+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function Xr(e){return e.dynamicChildren=Bn>0?$e||rn:null,rc(),Bn>0&&$e&&$e.push(e),e}function T(e,t,n,a,i,l){return Xr(r(e,t,n,a,i,l,!0))}function Nn(e,t,n,a,i){return Xr(he(e,t,n,a,i,!0))}function On(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const $r=({key:e})=>e??null,ea=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||Ne(e)||Z(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function r(e,t=null,n=null,a=0,i=null,l=e===X?0:1,s=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$r(t),ref:t&&ea(t),scopeId:br,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Te};return o?(Si(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Bn>0&&!s&&$e&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&$e.push(c),c}const he=sc;function sc(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Tr)&&(e=Ie),On(e)){const o=Ft(e,t,!0);return n&&Si(o,n),Bn>0&&!l&&$e&&(o.shapeFlag&6?$e[$e.indexOf(e)]=o:$e.push(o)),o.patchFlag=-2,o}if(kc(e)&&(e=e.__vccOpts),t){t=oc(t);let{class:o,style:c}=t;o&&!De(o)&&(t.class=w(o)),be(c)&&(wi(c)&&!q(c)&&(c=Ee({},c)),t.style=Pt(c))}const s=De(e)?1:zr(e)?128:vr(e)?64:be(e)?4:Z(e)?2:0;return r(e,t,n,a,i,s,l,!0)}function oc(e){return e?wi(e)||Ur(e)?Ee({},e):e:null}function Ft(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:s,children:o,transition:c}=e,p=t?cc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&$r(p),ref:t&&t.ref?n&&l?q(l)?l.concat(ea(t)):[l,ea(t)]:ea(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==X?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&Kn(u,c.clone(u)),u}function He(e=" ",t=0){return he(Pa,null,e,t)}function dn(e,t){const n=he(Yn,null,e);return n.staticCount=t,n}function Se(e="",t=!1){return t?(R(),Nn(Ie,null,e)):he(Ie,null,e)}function mt(e){return e==null||typeof e=="boolean"?he(Ie):q(e)?he(X,null,e.slice()):On(e)?Ot(e):he(Pa,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function Si(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),Si(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ur(t)?t._ctx=Te:i===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),a&64?(n=16,t=[He(t)]):n=8);e.children=t,e.shapeFlag|=n}function cc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=w([t.class,a.class]));else if(i==="style")t.style=Pt([t.style,a.style]);else if(fa(i)){const l=t[i],s=a[i];s&&l!==s&&!(q(l)&&l.includes(s))&&(t[i]=l?[].concat(l,s):s)}else i!==""&&(t[i]=a[i])}return t}function ft(e,t,n,a=null){st(e,t,7,[n,a])}const uc=Nr();let dc=0;function pc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||uc,l={uid:dc++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jr(a,i),emitsOptions:Or(a,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:a.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Fo.bind(null,l),e.ce&&e.ce(l),l}let Be=null;const Zr=()=>Be||Te;let ca,li;{const e=ba(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(s=>s(l)):i[0](l)}};ca=t("__VUE_INSTANCE_SETTERS__",n=>Be=n),li=t("__VUE_SSR_SETTERS__",n=>Ln=n)}const Jn=e=>{const t=Be;return ca(e),e.scope.on(),()=>{e.scope.off(),ca(t)}},$i=()=>{Be&&Be.scope.off(),ca(null)};function Yr(e){return e.vnode.shapeFlag&4}let Ln=!1;function fc(e,t=!1,n=!1){t&&li(t);const{props:a,children:i}=e.vnode,l=Yr(e);zo(e,a,l,t),Yo(e,i,n||t);const s=l?gc(e,t):void 0;return t&&li(!1),s}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Io);const{setup:a}=n;if(a){Rt();const i=e.setupContext=a.length>1?hc(e):null,l=Jn(e),s=Vn(a,e,0,[e.props,i]),o=Fl(s);if(St(),l(),(o||e.sp)&&!cn(e)&&Rr(e),o){if(s.then($i,$i),t)return s.then(c=>{Zi(e,c)}).catch(c=>{Aa(c,e,0)});e.asyncDep=s}else Zi(e,s)}else es(e)}function Zi(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=pr(t)),es(e)}function es(e,t,n){const a=e.type;e.render||(e.render=a.render||ht);{const i=Jn(e);Rt();try{Bo(e)}finally{St(),i()}}}const mc={get(e,t){return Ke(e,"get",""),e[t]}};function hc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mc),slots:e.slots,emit:e.emit,expose:t}}function Ma(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pr(ao(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rn)return Rn[n](e)},has(t,n){return n in t||n in Rn}})):e.proxy}function bc(e,t=!0){return Z(e)?e.displayName||e.name:e.name||t&&e.__name}function kc(e){return Z(e)&&"__vccOpts"in e}const te=(e,t)=>oo(e,t,Ln);function Ci(e,t,n){try{oa(-1);const a=arguments.length;return a===2?be(t)&&!q(t)?On(t)?he(e,null,[t]):he(e,t):he(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&On(n)&&(n=[n]),he(e,t,n))}finally{oa(1)}}const Ac="3.5.26";let ri;const Yi=typeof window<"u"&&window.trustedTypes;if(Yi)try{ri=Yi.createPolicy("vue",{createHTML:e=>e})}catch{}const ts=ri?e=>ri.createHTML(e):e=>e,vc="http://www.w3.org/2000/svg",xc="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,el=vt&&vt.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?vt.createElementNS(vc,e):t==="mathml"?vt.createElementNS(xc,e):n?vt.createElement(e,{is:n}):vt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const s=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{el.innerHTML=ts(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const o=el.content;if(a==="svg"||a==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Tt="transition",vn="animation",Gn=Symbol("_vtc"),ns={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wc=Ee({},xr,ns),Pc=e=>(e.displayName="Transition",e.props=wc,e),ua=Pc((e,{slots:t})=>Ci(xo,Mc(e),t)),Qt=(e,t=[])=>{q(e)?e.forEach(n=>n(...t)):e&&e(...t)},tl=e=>e?q(e)?e.some(t=>t.length>1):e.length>1:!1;function Mc(e){const t={};for(const j in e)j in ns||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:p=s,appearToClass:u=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=e,v=Dc(i),h=v&&v[0],b=v&&v[1],{onBeforeEnter:y,onEnter:S,onEnterCancelled:_,onLeave:C,onLeaveCancelled:Q,onBeforeAppear:ne=y,onAppear:re=S,onAppearCancelled:Pe=_}=t,V=(j,ee,Re,Oe)=>{j._enterCancelled=Oe,qt(j,ee?u:o),qt(j,ee?p:s),Re&&Re()},Y=(j,ee)=>{j._isLeaving=!1,qt(j,d),qt(j,k),qt(j,g),ee&&ee()},se=j=>(ee,Re)=>{const Oe=j?re:S,ye=()=>V(ee,j,Re);Qt(Oe,[ee,ye]),nl(()=>{qt(ee,j?c:l),kt(ee,j?u:o),tl(Oe)||al(ee,a,h,ye)})};return Ee(t,{onBeforeEnter(j){Qt(y,[j]),kt(j,l),kt(j,s)},onBeforeAppear(j){Qt(ne,[j]),kt(j,c),kt(j,p)},onEnter:se(!1),onAppear:se(!0),onLeave(j,ee){j._isLeaving=!0;const Re=()=>Y(j,ee);kt(j,d),j._enterCancelled?(kt(j,g),rl(j)):(rl(j),kt(j,g)),nl(()=>{j._isLeaving&&(qt(j,d),kt(j,k),tl(C)||al(j,a,b,Re))}),Qt(C,[j,Re])},onEnterCancelled(j){V(j,!1,void 0,!0),Qt(_,[j])},onAppearCancelled(j){V(j,!0,void 0,!0),Qt(Pe,[j])},onLeaveCancelled(j){Y(j),Qt(Q,[j])}})}function Dc(e){if(e==null)return null;if(be(e))return[Ga(e.enter),Ga(e.leave)];{const t=Ga(e);return[t,t]}}function Ga(e){return Cs(e)}function kt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Gn]||(e[Gn]=new Set)).add(t)}function qt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Gn];n&&(n.delete(t),n.size||(e[Gn]=void 0))}function nl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Rc=0;function al(e,t,n,a){const i=e._endId=++Rc,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:s,timeout:o,propCount:c}=Sc(e,t);if(!s)return a();const p=s+"end";let u=0;const d=()=>{e.removeEventListener(p,g),l()},g=k=>{k.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},o+1),e.addEventListener(p,g)}function Sc(e,t){const n=window.getComputedStyle(e),a=v=>(n[v]||"").split(", "),i=a(`${Tt}Delay`),l=a(`${Tt}Duration`),s=il(i,l),o=a(`${vn}Delay`),c=a(`${vn}Duration`),p=il(o,c);let u=null,d=0,g=0;t===Tt?s>0&&(u=Tt,d=s,g=l.length):t===vn?p>0&&(u=vn,d=p,g=c.length):(d=Math.max(s,p),u=d>0?s>p?Tt:vn:null,g=u?u===Tt?l.length:c.length:0);const k=u===Tt&&/\b(?:transform|all)(?:,|$)/.test(a(`${Tt}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:k}}function il(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>ll(n)+ll(e[a])))}function ll(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function rl(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cc(e,t,n){const a=e[Gn];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const sl=Symbol("_vod"),Ec=Symbol("_vsh"),Tc=Symbol(""),_c=/(?:^|;)\s*display\s*:/;function Kc(e,t,n){const a=e.style,i=De(n);let l=!1;if(n&&!i){if(t)if(De(t))for(const s of t.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&ta(a,o,"")}else for(const s in t)n[s]==null&&ta(a,s,"");for(const s in n)s==="display"&&(l=!0),ta(a,s,n[s])}else if(i){if(t!==n){const s=a[Tc];s&&(n+=";"+s),a.cssText=n,l=_c.test(n)}}else t&&e.removeAttribute("style");sl in e&&(e[sl]=l?a.display:"",e[Ec]&&(a.display="none"))}const ol=/\s*!important$/;function ta(e,t,n){if(q(n))n.forEach(a=>ta(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Ic(e,t);ol.test(n)?e.setProperty(en(a),n.replace(ol,""),"important"):e[a]=n}}const cl=["Webkit","Moz","ms"],Ua={};function Ic(e,t){const n=Ua[t];if(n)return n;let a=tt(t);if(a!=="filter"&&a in e)return Ua[t]=a;a=ma(a);for(let i=0;i<cl.length;i++){const l=cl[i]+a;if(l in e)return Ua[t]=l}return t}const ul="http://www.w3.org/1999/xlink";function dl(e,t,n,a,i,l=Bs(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ul,t.slice(6,t.length)):e.setAttributeNS(ul,t,n):n==null||l&&!Ql(n)?e.removeAttribute(t):e.setAttribute(t,l?"":lt(n)?String(n):n)}function pl(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ts(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ql(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function Ut(e,t,n,a){e.addEventListener(t,n,a)}function Bc(e,t,n,a){e.removeEventListener(t,n,a)}const fl=Symbol("_vei");function Nc(e,t,n,a,i=null){const l=e[fl]||(e[fl]={}),s=l[t];if(a&&s)s.value=a;else{const[o,c]=Oc(t);if(a){const p=l[t]=Uc(a,i);Ut(e,o,p,c)}else s&&(Bc(e,o,s,c),l[t]=void 0)}}const gl=/(?:Once|Passive|Capture)$/;function Oc(e){let t;if(gl.test(e)){t={};let a;for(;a=e.match(gl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Ha=0;const Lc=Promise.resolve(),Gc=()=>Ha||(Lc.then(()=>Ha=0),Ha=Date.now());function Uc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;st(Hc(a,n.value),t,5,[a])};return n.value=e,n.attached=Gc(),n}function Hc(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const ml=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jc=(e,t,n,a,i,l)=>{const s=i==="svg";t==="class"?Cc(e,a,s):t==="style"?Kc(e,n,a):fa(t)?fi(t)||Nc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fc(e,t,a,s))?(pl(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&dl(e,t,a,s,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!De(a))?pl(e,tt(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),dl(e,t,a,s))};function Fc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&ml(t)&&Z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ml(t)&&De(n)?!1:t in e}const fn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>$n(t,n):t};function Vc(e){e.target.composing=!0}function hl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dt=Symbol("_assign");function bl(e,t,n){return t&&(e=e.trim()),n&&(e=ha(e)),e}const Xe={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[Dt]=fn(i);const l=a||i.props&&i.props.type==="number";Ut(e,t?"change":"input",s=>{s.target.composing||e[Dt](bl(e.value,n,l))}),(n||l)&&Ut(e,"change",()=>{e.value=bl(e.value,n,l)}),t||(Ut(e,"compositionstart",Vc),Ut(e,"compositionend",hl),Ut(e,"change",hl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},s){if(e[Dt]=fn(s),e.composing)return;const o=(l||e.type==="number")&&!/^0\d/.test(e.value)?ha(e.value):e.value,c=t??"";o!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===c)||(e.value=c))}},kl={deep:!0,created(e,t,n){e[Dt]=fn(n),Ut(e,"change",()=>{const a=e._modelValue,i=Un(e),l=e.checked,s=e[Dt];if(q(a)){const o=hi(a,i),c=o!==-1;if(l&&!c)s(a.concat(i));else if(!l&&c){const p=[...a];p.splice(o,1),s(p)}}else if(hn(a)){const o=new Set(a);l?o.add(i):o.delete(i),s(o)}else s(as(e,l))})},mounted:Al,beforeUpdate(e,t,n){e[Dt]=fn(n),Al(e,t,n)}};function Al(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(q(t))i=hi(t,a.props.value)>-1;else if(hn(t))i=t.has(a.props.value);else{if(t===n)return;i=Fn(t,as(e,!0))}e.checked!==i&&(e.checked=i)}const it={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=hn(t);Ut(e,"change",()=>{const l=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?ha(Un(s)):Un(s));e[Dt](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,va(()=>{e._assigning=!1})}),e[Dt]=fn(a)},mounted(e,{value:t}){vl(e,t)},beforeUpdate(e,t,n){e[Dt]=fn(n)},updated(e,{value:t}){e._assigning||vl(e,t)}};function vl(e,t){const n=e.multiple,a=q(t);if(!(n&&!a&&!hn(t))){for(let i=0,l=e.options.length;i<l;i++){const s=e.options[i],o=Un(s);if(n)if(a){const c=typeof o;c==="string"||c==="number"?s.selected=t.some(p=>String(p)===String(o)):s.selected=hi(t,o)>-1}else s.selected=t.has(o);else if(Fn(Un(s),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Un(e){return"_value"in e?e._value:e.value}function as(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Jc=["ctrl","shift","alt","meta"],Wc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jc.some(n=>e[`${n}Key`]&&!t.includes(n))},na=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let s=0;s<t.length;s++){const o=Wc[t[s]];if(o&&o(i,t))return}return e(i,...l)}))},Qc=Ee({patchProp:jc},yc);let xl;function qc(){return xl||(xl=tc(Qc))}const zc=((...e)=>{const t=qc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=$c(a);if(!i)return;const l=t._component;!Z(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,Xc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t});function Xc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $c(e){return De(e)?document.querySelector(e):e}const Da="/toram-vue/images/logo.png";const ln=typeof document<"u";function is(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&is(e.default)}const fe=Object.assign;function ja(e,t){const n={};for(const a in t){const i=t[a];n[a]=ot(i)?i.map(e):e(i)}return n}const Cn=()=>{},ot=Array.isArray;function yl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const ls=/#/g,Yc=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,rs=/\+/g,au=/%5B/g,iu=/%5D/g,ss=/%5E/g,lu=/%60/g,os=/%7B/g,ru=/%7C/g,cs=/%7D/g,su=/%20/g;function Ei(e){return e==null?"":encodeURI(""+e).replace(ru,"|").replace(au,"[").replace(iu,"]")}function ou(e){return Ei(e).replace(os,"{").replace(cs,"}").replace(ss,"^")}function si(e){return Ei(e).replace(rs,"%2B").replace(su,"+").replace(ls,"%23").replace(Yc,"%26").replace(lu,"`").replace(os,"{").replace(cs,"}").replace(ss,"^")}function cu(e){return si(e).replace(tu,"%3D")}function uu(e){return Ei(e).replace(ls,"%23").replace(nu,"%3F")}function du(e){return uu(e).replace(eu,"%2F")}function Hn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pu=/\/$/,fu=e=>e.replace(pu,"");function Fa(e,t,n="/"){let a,i={},l="",s="";const o=t.indexOf("#");let c=t.indexOf("?");return c=o>=0&&c>o?-1:c,c>=0&&(a=t.slice(0,c),l=t.slice(c,o>0?o:t.length),i=e(l.slice(1))),o>=0&&(a=a||t.slice(0,o),s=t.slice(o,t.length)),a=bu(a??t,n),{fullPath:a+l+s,path:a,query:i,hash:Hn(s)}}function gu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mu(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&gn(t.matched[a],n.matched[i])&&us(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function us(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return ot(e)?Pl(e,t):ot(t)?Pl(t,e):e?.valueOf()===t?.valueOf()}function Pl(e,t){return ot(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function bu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,s,o;for(s=0;s<a.length;s++)if(o=a[s],o!==".")if(o==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(s).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let oi=(function(e){return e.pop="pop",e.push="push",e})({}),Va=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function ku(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fu(e)}const Au=/^[^#]+#/;function vu(e,t){return e.replace(Au,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function yu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=xu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ml(e,t){return(history.state?history.state.position-t:-1)+e}const ci=new Map;function wu(e,t){ci.set(e,t)}function Pu(e){const t=ci.get(e);return ci.delete(e),t}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function ds(e){return typeof e=="string"||typeof e=="symbol"}let Me=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ps=Symbol("");Me.MATCHER_NOT_FOUND+"",Me.NAVIGATION_GUARD_REDIRECT+"",Me.NAVIGATION_ABORTED+"",Me.NAVIGATION_CANCELLED+"",Me.NAVIGATION_DUPLICATED+"";function mn(e,t){return fe(new Error,{type:e,[ps]:!0},t)}function At(e,t){return e instanceof Error&&ps in e&&(t==null||!!(e.type&t))}const Du=["params","query","hash"];function Ru(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Du)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Su(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(rs," "),l=i.indexOf("="),s=Hn(l<0?i:i.slice(0,l)),o=l<0?null:Hn(i.slice(l+1));if(s in t){let c=t[s];ot(c)||(c=t[s]=[c]),c.push(o)}else t[s]=o}return t}function Dl(e){let t="";for(let n in e){const a=e[n];if(n=cu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(ot(a)?a.map(i=>i&&si(i)):[a&&si(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Cu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=ot(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const Eu=Symbol(""),Rl=Symbol(""),Sa=Symbol(""),Ti=Symbol(""),ui=Symbol("");function xn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,a,i,l=s=>s()){const s=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((o,c)=>{const p=g=>{g===!1?c(mn(Me.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?c(g):Mu(g)?c(mn(Me.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(s&&a.enterCallbacks[i]===s&&typeof g=="function"&&s.push(g),o())},u=l(()=>e.call(a&&a.instances[i],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(g=>c(g))})}function Ja(e,t,n,a,i=l=>l()){const l=[];for(const s of e)for(const o in s.components){let c=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(is(c)){const p=(c.__vccOpts||c)[t];p&&l.push(Lt(p,n,a,s,o,i))}else{let p=c();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${s.path}"`);const d=Zc(u)?u.default:u;s.mods[o]=u,s.components[o]=d;const g=(d.__vccOpts||d)[t];return g&&Lt(g,n,a,s,o,i)()}))}}return l}function Tu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let s=0;s<l;s++){const o=t.matched[s];o&&(e.matched.find(p=>gn(p,o))?a.push(o):n.push(o));const c=e.matched[s];c&&(t.matched.find(p=>gn(p,c))||i.push(c))}return[n,a,i]}let _u=()=>location.protocol+"//"+location.host;function fs(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let s=i.includes(e.slice(l))?e.slice(l).length:1,o=i.slice(s);return o[0]!=="/"&&(o="/"+o),wl(o,"")}return wl(n,e)+a+i}function Ku(e,t,n,a){let i=[],l=[],s=null;const o=({state:g})=>{const k=fs(e,location),v=n.value,h=t.value;let b=0;if(g){if(n.value=k,t.value=g,s&&s===v){s=null;return}b=h?g.position-h.position:0}else a(k);i.forEach(y=>{y(n.value,v,{delta:b,type:oi.pop,direction:b?b>0?Va.forward:Va.back:Va.unknown})})};function c(){s=n.value}function p(g){i.push(g);const k=()=>{const v=i.indexOf(g);v>-1&&i.splice(v,1)};return l.push(k),k}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(fe({},g.state,{scroll:Ra()}),"")}}function d(){for(const g of l)g();l=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Sl(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?Ra():null}}function Iu(e){const{history:t,location:n}=window,a={value:fs(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,p,u){const d=e.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:_u()+e+c;try{t[u?"replaceState":"pushState"](p,"",g),i.value=p}catch(k){console.error(k),n[u?"replace":"assign"](g)}}function s(c,p){l(c,fe({},t.state,Sl(i.value.back,c,i.value.forward,!0),p,{position:i.value.position}),!0),a.value=c}function o(c,p){const u=fe({},i.value,t.state,{forward:c,scroll:Ra()});l(u.current,u,!0),l(c,fe({},Sl(a.value,c,null),{position:u.position+1},p),!1),a.value=c}return{location:a,state:i,push:o,replace:s}}function Bu(e){e=ku(e);const t=Iu(e),n=Ku(e,t.state,t.location,t.replace);function a(l,s=!0){s||n.pauseListeners(),history.go(l)}const i=fe({location:"",base:e,go:a,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Bu(e)}let $t=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ce=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ce||{});const Ou={type:$t.Static,value:""},Lu=/[a-zA-Z0-9_]/;function Gu(e){if(!e)return[[]];if(e==="/")return[[Ou]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(k){throw new Error(`ERR (${n})/"${p}": ${k}`)}let n=Ce.Static,a=n;const i=[];let l;function s(){l&&i.push(l),l=[]}let o=0,c,p="",u="";function d(){p&&(n===Ce.Static?l.push({type:$t.Static,value:p}):n===Ce.Param||n===Ce.ParamRegExp||n===Ce.ParamRegExpEnd?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:$t.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function g(){p+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==Ce.ParamRegExp){a=n,n=Ce.EscapeNext;continue}switch(n){case Ce.Static:c==="/"?(p&&d(),s()):c===":"?(d(),n=Ce.Param):g();break;case Ce.EscapeNext:g(),n=a;break;case Ce.Param:c==="("?n=Ce.ParamRegExp:Lu.test(c)?g():(d(),n=Ce.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case Ce.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=Ce.ParamRegExpEnd:u+=c;break;case Ce.ParamRegExpEnd:d(),n=Ce.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===Ce.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),s(),i}const Cl="[^/]+?",Uu={sensitive:!1,strict:!1,start:!0,end:!0};var Ge=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ge||{});const Hu=/[.+*?^${}()[\]/\\]/g;function ju(e,t){const n=fe({},Uu,t),a=[];let i=n.start?"^":"";const l=[];for(const p of e){const u=p.length?[]:[Ge.Root];n.strict&&!p.length&&(i+="/");for(let d=0;d<p.length;d++){const g=p[d];let k=Ge.Segment+(n.sensitive?Ge.BonusCaseSensitive:0);if(g.type===$t.Static)d||(i+="/"),i+=g.value.replace(Hu,"\\$&"),k+=Ge.Static;else if(g.type===$t.Param){const{value:v,repeatable:h,optional:b,regexp:y}=g;l.push({name:v,repeatable:h,optional:b});const S=y||Cl;if(S!==Cl){k+=Ge.BonusCustomRegExp;try{`${S}`}catch(C){throw new Error(`Invalid custom RegExp for param "${v}" (${S}): `+C.message)}}let _=h?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(_=b&&p.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),i+=_,k+=Ge.Dynamic,b&&(k+=Ge.BonusOptional),h&&(k+=Ge.BonusRepeatable),S===".*"&&(k+=Ge.BonusWildcard)}u.push(k)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=Ge.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function o(p){const u=p.match(s),d={};if(!u)return null;for(let g=1;g<u.length;g++){const k=u[g]||"",v=l[g-1];d[v.name]=k&&v.repeatable?k.split("/"):k}return d}function c(p){let u="",d=!1;for(const g of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const k of g)if(k.type===$t.Static)u+=k.value;else if(k.type===$t.Param){const{value:v,repeatable:h,optional:b}=k,y=v in p?p[v]:"";if(ot(y)&&!h)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const S=ot(y)?y.join("/"):y;if(!S)if(b)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=S}}return u||"/"}return{re:s,score:a,keys:l,parse:o,stringify:c}}function Fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ge.Static+Ge.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ge.Static+Ge.Segment?1:-1:0}function gs(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=Fu(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(El(a))return 1;if(El(i))return-1}return i.length-a.length}function El(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vu={strict:!1,end:!0,sensitive:!1};function Ju(e,t,n){const a=ju(Gu(e.path),n),i=fe(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Wu(e,t){const n=[],a=new Map;t=yl(Vu,t);function i(d){return a.get(d)}function l(d,g,k){const v=!k,h=_l(d);h.aliasOf=k&&k.record;const b=yl(t,d),y=[h];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const Q of C)y.push(_l(fe({},h,{components:k?k.record.components:h.components,path:Q,aliasOf:k?k.record:h})))}let S,_;for(const C of y){const{path:Q}=C;if(g&&Q[0]!=="/"){const ne=g.record.path,re=ne[ne.length-1]==="/"?"":"/";C.path=g.record.path+(Q&&re+Q)}if(S=Ju(C,g,b),k?k.alias.push(S):(_=_||S,_!==S&&_.alias.push(S),v&&d.name&&!Kl(S)&&s(d.name)),ms(S)&&c(S),h.children){const ne=h.children;for(let re=0;re<ne.length;re++)l(ne[re],S,k&&k.children[re])}k=k||S}return _?()=>{s(_)}:Cn}function s(d){if(ds(d)){const g=a.get(d);g&&(a.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(s),g.alias.forEach(s))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function o(){return n}function c(d){const g=zu(d,n);n.splice(g,0,d),d.record.name&&!Kl(d)&&a.set(d.record.name,d)}function p(d,g){let k,v={},h,b;if("name"in d&&d.name){if(k=a.get(d.name),!k)throw mn(Me.MATCHER_NOT_FOUND,{location:d});b=k.record.name,v=fe(Tl(g.params,k.keys.filter(_=>!_.optional).concat(k.parent?k.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Tl(d.params,k.keys.map(_=>_.name))),h=k.stringify(v)}else if(d.path!=null)h=d.path,k=n.find(_=>_.re.test(h)),k&&(v=k.parse(h),b=k.record.name);else{if(k=g.name?a.get(g.name):n.find(_=>_.re.test(g.path)),!k)throw mn(Me.MATCHER_NOT_FOUND,{location:d,currentLocation:g});b=k.record.name,v=fe({},g.params,d.params),h=k.stringify(v)}const y=[];let S=k;for(;S;)y.unshift(S.record),S=S.parent;return{name:b,path:h,params:v,matched:y,meta:qu(y)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:p,removeRoute:s,clearRoutes:u,getRoutes:o,getRecordMatcher:i}}function Tl(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function _l(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Qu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Qu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Kl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qu(e){return e.reduce((t,n)=>fe(t,n.meta),{})}function zu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;gs(e,t[l])<0?a=l:n=l+1}const i=Xu(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function Xu(e){let t=e;for(;t=t.parent;)if(ms(t)&&gs(e,t)===0)return t}function ms({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Il(e){const t=at(Sa),n=at(Ti),a=te(()=>{const c=Ze(e.to);return t.resolve(c)}),i=te(()=>{const{matched:c}=a.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(gn.bind(null,u));if(g>-1)return g;const k=Bl(c[p-2]);return p>1&&Bl(u)===k&&d[d.length-1].path!==k?d.findIndex(gn.bind(null,c[p-2])):g}),l=te(()=>i.value>-1&&t0(n.params,a.value.params)),s=te(()=>i.value>-1&&i.value===n.matched.length-1&&us(n.params,a.value.params));function o(c={}){if(e0(c)){const p=t[Ze(e.replace)?"replace":"push"](Ze(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:te(()=>a.value.href),isActive:l,isExactActive:s,navigate:o}}function $u(e){return e.length===1?e[0]:e}const Zu=Dr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Il,setup(e,{slots:t}){const n=bn(Il(e)),{options:a}=at(Sa),i=te(()=>({[Nl(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Nl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&$u(t.default(n));return e.custom?l:Ci("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),Yu=Zu;function e0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function t0(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!ot(i)||i.length!==a.length||a.some((l,s)=>l.valueOf()!==i[s].valueOf()))return!1}return!0}function Bl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nl=(e,t,n)=>e??t??n,n0=Dr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=at(ui),i=te(()=>e.route||a.value),l=at(Rl,0),s=te(()=>{let p=Ze(l);const{matched:u}=i.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),o=te(()=>i.value.matched[s.value]);Zn(Rl,te(()=>s.value+1)),Zn(Eu,o),Zn(ui,i);const c=le();return Mt(()=>[c.value,o.value,e.name],([p,u,d],[g,k,v])=>{u&&(u.instances[d]=p,k&&k!==u&&p&&p===g&&(u.leaveGuards.size||(u.leaveGuards=k.leaveGuards),u.updateGuards.size||(u.updateGuards=k.updateGuards))),p&&u&&(!k||!gn(u,k)||!g)&&(u.enterCallbacks[d]||[]).forEach(h=>h(p))},{flush:"post"}),()=>{const p=i.value,u=e.name,d=o.value,g=d&&d.components[u];if(!g)return Ol(n.default,{Component:g,route:p});const k=d.props[u],v=k?k===!0?p.params:typeof k=="function"?k(p):k:null,b=Ci(g,fe({},v,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Ol(n.default,{Component:b,route:p})||b}}});function Ol(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const a0=n0;function i0(e){const t=Wu(e.routes,e),n=e.parseQuery||Su,a=e.stringifyQuery||Dl,i=e.history,l=xn(),s=xn(),o=xn(),c=io(_t);let p=_t;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ja.bind(null,P=>""+P),d=ja.bind(null,du),g=ja.bind(null,Hn);function k(P,I){let L,J;return ds(P)?(L=t.getRecordMatcher(P),J=I):J=P,t.addRoute(J,L)}function v(P){const I=t.getRecordMatcher(P);I&&t.removeRoute(I)}function h(){return t.getRoutes().map(P=>P.record)}function b(P){return!!t.getRecordMatcher(P)}function y(P,I){if(I=fe({},I||c.value),typeof P=="string"){const A=Fa(n,P,I.path),M=t.resolve({path:A.path},I),E=i.createHref(A.fullPath);return fe(A,M,{params:g(M.params),hash:Hn(A.hash),redirectedFrom:void 0,href:E})}let L;if(P.path!=null)L=fe({},P,{path:Fa(n,P.path,I.path).path});else{const A=fe({},P.params);for(const M in A)A[M]==null&&delete A[M];L=fe({},P,{params:d(A)}),I.params=d(I.params)}const J=t.resolve(L,I),ae=P.hash||"";J.params=u(g(J.params));const f=gu(a,fe({},P,{hash:ou(ae),path:J.path})),m=i.createHref(f);return fe({fullPath:f,hash:ae,query:a===Dl?Cu(P.query):P.query||{}},J,{redirectedFrom:void 0,href:m})}function S(P){return typeof P=="string"?Fa(n,P,c.value.path):fe({},P)}function _(P,I){if(p!==P)return mn(Me.NAVIGATION_CANCELLED,{from:I,to:P})}function C(P){return re(P)}function Q(P){return C(fe(S(P),{replace:!0}))}function ne(P,I){const L=P.matched[P.matched.length-1];if(L&&L.redirect){const{redirect:J}=L;let ae=typeof J=="function"?J(P,I):J;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=S(ae):{path:ae},ae.params={}),fe({query:P.query,hash:P.hash,params:ae.path!=null?{}:P.params},ae)}}function re(P,I){const L=p=y(P),J=c.value,ae=P.state,f=P.force,m=P.replace===!0,A=ne(L,J);if(A)return re(fe(S(A),{state:typeof A=="object"?fe({},ae,A.state):ae,force:f,replace:m}),I||L);const M=L;M.redirectedFrom=I;let E;return!f&&mu(a,J,L)&&(E=mn(Me.NAVIGATION_DUPLICATED,{to:M,from:J}),Qe(J,J,!0,!1)),(E?Promise.resolve(E):Y(M,J)).catch(D=>At(D)?At(D,Me.NAVIGATION_GUARD_REDIRECT)?D:ct(D):ce(D,M,J)).then(D=>{if(D){if(At(D,Me.NAVIGATION_GUARD_REDIRECT))return re(fe({replace:m},S(D.to),{state:typeof D.to=="object"?fe({},ae,D.to.state):ae,force:f}),I||M)}else D=j(M,J,!0,m,ae);return se(M,J,D),D})}function Pe(P,I){const L=_(P,I);return L?Promise.reject(L):Promise.resolve()}function V(P){const I=pe.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(P):P()}function Y(P,I){let L;const[J,ae,f]=Tu(P,I);L=Ja(J.reverse(),"beforeRouteLeave",P,I);for(const A of J)A.leaveGuards.forEach(M=>{L.push(Lt(M,P,I))});const m=Pe.bind(null,P,I);return L.push(m),U(L).then(()=>{L=[];for(const A of l.list())L.push(Lt(A,P,I));return L.push(m),U(L)}).then(()=>{L=Ja(ae,"beforeRouteUpdate",P,I);for(const A of ae)A.updateGuards.forEach(M=>{L.push(Lt(M,P,I))});return L.push(m),U(L)}).then(()=>{L=[];for(const A of f)if(A.beforeEnter)if(ot(A.beforeEnter))for(const M of A.beforeEnter)L.push(Lt(M,P,I));else L.push(Lt(A.beforeEnter,P,I));return L.push(m),U(L)}).then(()=>(P.matched.forEach(A=>A.enterCallbacks={}),L=Ja(f,"beforeRouteEnter",P,I,V),L.push(m),U(L))).then(()=>{L=[];for(const A of s.list())L.push(Lt(A,P,I));return L.push(m),U(L)}).catch(A=>At(A,Me.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function se(P,I,L){o.list().forEach(J=>V(()=>J(P,I,L)))}function j(P,I,L,J,ae){const f=_(P,I);if(f)return f;const m=I===_t,A=ln?history.state:{};L&&(J||m?i.replace(P.fullPath,fe({scroll:m&&A&&A.scroll},ae)):i.push(P.fullPath,ae)),c.value=P,Qe(P,I,L,m),ct()}let ee;function Re(){ee||(ee=i.listen((P,I,L)=>{if(!we.listening)return;const J=y(P),ae=ne(J,we.currentRoute.value);if(ae){re(fe(ae,{replace:!0,force:!0}),J).catch(Cn);return}p=J;const f=c.value;ln&&wu(Ml(f.fullPath,L.delta),Ra()),Y(J,f).catch(m=>At(m,Me.NAVIGATION_ABORTED|Me.NAVIGATION_CANCELLED)?m:At(m,Me.NAVIGATION_GUARD_REDIRECT)?(re(fe(S(m.to),{force:!0}),J).then(A=>{At(A,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&!L.delta&&L.type===oi.pop&&i.go(-1,!1)}).catch(Cn),Promise.reject()):(L.delta&&i.go(-L.delta,!1),ce(m,J,f))).then(m=>{m=m||j(J,f,!1),m&&(L.delta&&!At(m,Me.NAVIGATION_CANCELLED)?i.go(-L.delta,!1):L.type===oi.pop&&At(m,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),se(J,f,m)}).catch(Cn)}))}let Oe=xn(),ye=xn(),oe;function ce(P,I,L){ct(P);const J=ye.list();return J.length?J.forEach(ae=>ae(P,I,L)):console.error(P),Promise.reject(P)}function je(){return oe&&c.value!==_t?Promise.resolve():new Promise((P,I)=>{Oe.add([P,I])})}function ct(P){return oe||(oe=!P,Re(),Oe.list().forEach(([I,L])=>P?L(P):I()),Oe.reset()),P}function Qe(P,I,L,J){const{scrollBehavior:ae}=e;if(!ln||!ae)return Promise.resolve();const f=!L&&Pu(Ml(P.fullPath,0))||(J||!L)&&history.state&&history.state.scroll||null;return va().then(()=>ae(P,I,f)).then(m=>m&&yu(m)).catch(m=>ce(m,P,I))}const G=P=>i.go(P);let x;const pe=new Set,we={currentRoute:c,listening:!0,addRoute:k,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:h,resolve:y,options:e,push:C,replace:Q,go:G,back:()=>G(-1),forward:()=>G(1),beforeEach:l.add,beforeResolve:s.add,afterEach:o.add,onError:ye.add,isReady:je,install(P){P.component("RouterLink",Yu),P.component("RouterView",a0),P.config.globalProperties.$router=we,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(c)}),ln&&!x&&c.value===_t&&(x=!0,C(i.location).catch(J=>{}));const I={};for(const J in _t)Object.defineProperty(I,J,{get:()=>c.value[J],enumerable:!0});P.provide(Sa,we),P.provide(Ti,ur(I)),P.provide(ui,c);const L=P.unmount;pe.add(P),P.unmount=function(){pe.delete(P),pe.size<1&&(p=_t,ee&&ee(),ee=null,c.value=_t,x=!1,oe=!1),L()}}};function U(P){return P.reduce((I,L)=>I.then(()=>V(L)),Promise.resolve())}return we}function Ca(){return at(Sa)}function Ea(e){return at(Ti)}const Vt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},l0={class:"absolute inset-0 pointer-events-none z-0"},r0={class:"fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-5xl"},s0={class:"hidden sm:flex flex-col ml-2 leading-tight overflow-hidden"},o0={class:"font-black italic text-xs md:text-base uppercase tracking-widest truncate"},c0={class:"flex-1 flex justify-center px-1 overflow-hidden"},u0={class:"relative flex bg-black/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner overflow-hidden w-fit"},d0={class:"flex justify-end z-10 pr-2 flex-shrink-0"},p0={class:"text-xs md:text-lg"},f0={class:"max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},g0={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=Ea(),n=Ca(),a=le(null),i=le({}),l=le({left:"0px",width:"0px",opacity:0}),s=()=>n.push("/"),o=Array.from({length:80},(d,g)=>({id:g,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),c=Array.from({length:40},(d,g)=>({id:g,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),p=(d,g)=>{d&&(i.value[g]=d.$el||d)},u=async()=>{await va();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 6px 20px -3px rgba(245, 158, 11, 0.7)":"0 10px 25px -5px rgba(139, 92, 246, 0.7)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return tn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),Mt(()=>t.path,u),(d,g)=>{const k=In("router-link");return R(),T("div",{class:w(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[r("div",l0,[(R(!0),T(X,null,de(Ze(c),v=>(R(),T("div",{key:"dust-"+v.id,class:w(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:Pt({width:v.size,height:v.size,top:v.top,left:v.left,animationDuration:v.duration,animationDelay:v.delay})},null,6))),128)),(R(!0),T(X,null,de(Ze(o),v=>(R(),T("div",{key:"star-"+v.id,class:w(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:Pt({width:v.size,height:v.size,top:v.top,left:v.left,animationDelay:v.delay})},null,6))),128))]),r("nav",r0,[r("div",{class:w(["backdrop-blur-3xl border flex items-center justify-between rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3",e.isDark?"bg-black/50 border-white/10 shadow-indigo-500/10":"bg-white/80 border-white/50 shadow-blue-500/5"])},[r("div",{onClick:s,class:"flex items-center cursor-pointer group select-none z-10 pl-2 pr-1 active:scale-95 transition-transform flex-shrink-0"},[r("div",{class:w(["w-8 h-8 md:w-11 md:h-11 overflow-hidden rounded-full border-2 transition-all duration-300 shadow-lg shrink-0",e.isDark?"border-white/20":"border-slate-300"])},[...g[1]||(g[1]=[r("img",{src:Da,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),r("div",s0,[r("span",o0,[r("span",{class:w(e.isDark?"text-white":"text-black")},"TIMI",2),g[2]||(g[2]=r("span",{class:"ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"},"DB",-1))]),g[3]||(g[3]=r("span",{class:"text-[6px] md:text-[7px] font-bold uppercase opacity-50 tracking-widest truncate"},"Toram Online Tools",-1))])]),r("div",c0,[r("div",u0,[r("div",{ref_key:"navContainer",ref:a,class:"flex items-center relative gap-0"},[r("div",{class:"absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:Pt(l.value)},null,4),he(k,{ref:v=>p(v,"/"),to:"/",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[4]||(g[4]=[He("LIST BAG",-1)])]),_:1},512),he(k,{ref:v=>p(v,"/mq"),to:"/mq",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[5]||(g[5]=[He("LIST MQ",-1)])]),_:1},512),he(k,{ref:v=>p(v,"/mq-calc"),to:"/mq-calc",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[6]||(g[6]=[He("MQ-CALC",-1)])]),_:1},512),he(k,{ref:v=>p(v,"/bs-calc"),to:"/bs-calc",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[7]||(g[7]=[He("BS-CALC",-1)])]),_:1},512),he(k,{ref:v=>p(v,"/xtall"),to:"/xtall",class:"nav-link","active-class":"active-link"},{default:We(()=>[...g[8]||(g[8]=[He("XTALL",-1)])]),_:1},512)],512)])]),r("div",d0,[r("button",{onClick:g[0]||(g[0]=v=>d.$emit("toggleDark")),class:w(["w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-500 active:scale-75 shadow-lg shrink-0",e.isDark?"bg-slate-900 border-white/10 text-orange-400":"bg-white border-slate-200 text-indigo-600"])},[r("span",p0,O(e.isDark?"🌙":"☀️"),1)],2)])],2)]),r("main",f0,[Ko(d.$slots,"default",{},void 0)])],2)}}},m0=Vt(g0,[["__scopeId","data-v-2236526c"]]),h0={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},b0={__name:"App",setup(e){const t=le(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return tn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=In("router-view");return R(),T("div",h0,[he(m0,{isDark:t.value,onToggleDark:n},{default:We(()=>[he(l,null,{default:We(({Component:s})=>[he(ua,{name:"slide-page",mode:"out-in"},{default:We(()=>[(R(),Nn(_o(s),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},k0="/toram-vue/images/Bag-Toram.png",Xn=[{id:1,slot:"50 ➔ 51",nama_item:"Colon Skin (Kulit Colon)",jumlah:"x1",spina:0,monster:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:2,slot:"51 ➔ 52",nama_item:"Gorgeous Fur (Kulit Berkualitas)",jumlah:"x1",spina:0,monster:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rakau Plains (Dataran Rakau) / Ruined Temple Town (Kota Kuil Runtuh)"},{id:3,slot:"52 ➔ 53",nama_item:"Spina",jumlah:"-",spina:1e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store (Toko Kelontong)"},{id:4,slot:"53 ➔ 54",nama_item:"Minotaur Skin (Kulit Minotaur)",jumlah:"x1",spina:0,monster:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ruined Temple: Forbidden Hall (Kuil Runtuh: Aula Terlarang)"},{id:5,slot:"53 ➔ 54",nama_item:"Orange Crystal Fragment (Pecahan Kristal Jingga)",jumlah:"x1",spina:0,monster:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:6,slot:"54 ➔ 55",nama_item:"Forest Wolf Skin (Kulit Anjing Hutan)",jumlah:"x1",spina:0,monster:"Forest Wolf (Anjing Hutan)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Marbaro Forest: Deepest Part (Hutan Marbaro: Bagian Dalam)"},{id:7,slot:"54 ➔ 55",nama_item:"Goblin Medal (Lencana Goblin)",jumlah:"x1",spina:0,monster:"Boss Goblin (Goblin Bos)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Ribisco Cave: Deepest Part (Gua Ribisco: Bagian Dalam)"},{id:8,slot:"55 ➔ 56",nama_item:"Spina",jumlah:"-",spina:2e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:9,slot:"56 ➔ 57",nama_item:"Mochelo Fur (Bulu Mochelo)",jumlah:"x1",spina:0,monster:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:10,slot:"56 ➔ 57",nama_item:"Linen Cloth (Kain Linen)",jumlah:"x10",spina:0,monster:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Douce Hamlet (Dusun Douce)"},{id:11,slot:"57 ➔ 58",nama_item:"Green Dragon Fur (Bulu Naga Giok)",jumlah:"x1",spina:0,monster:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Land of Chaos (Tanah Kaos)"},{id:12,slot:"57 ➔ 58",nama_item:"High Quality Horn (Tanduk Berkualitas)",jumlah:"x10",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Yorl Highlands (Tanah Tinggi Yorl)"},{id:13,slot:"58 ➔ 59",nama_item:"Boss Roga Belt (Sabuk Bos Roga)",jumlah:"x1",spina:0,monster:"Boss Roga (Bos Roga)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:14,slot:"58 ➔ 59",nama_item:"Broadcloth (Kain Beludu)",jumlah:"x10",spina:0,monster:"Orc / Orc Warrior (Orc Petarung)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Saham Crater (Kawah Saham) / Saham Underground Cave (Gua Bawah Tanah Saham)"},{id:15,slot:"59 ➔ 60",nama_item:"Spina",jumlah:"-",spina:4e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:16,slot:"60 ➔ 61",nama_item:"Sharp Bear Claw (Cakar Beruang)",jumlah:"x2",spina:0,monster:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Darkanon Plain (Padang Darkanon)"},{id:17,slot:"60 ➔ 61",nama_item:"Sheeting Fabric (Kain Alas)",jumlah:"x20",spina:0,monster:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ancient Empress Tomb (Makam Ratu Kuno: Area 2/3)"},{id:18,slot:"61 ➔ 62",nama_item:"Heavy Tough Chain (Rantai Kukuh)",jumlah:"x2",spina:0,monster:"Masked Warrior (Pendekar Beratopeng)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:19,slot:"61 ➔ 62",nama_item:"Polyester Cloth (Kain Polister)",jumlah:"x20",spina:0,monster:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Lost Town (Kota Hilang)"},{id:20,slot:"62 ➔ 63",nama_item:"Grass Dragon Scale (Sisik Naga Sabana)",jumlah:"x2",spina:0,monster:"Grass Dragon Yelb (Naga Sabana Yelb)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Albatif Village (Desa Albatif)"},{id:21,slot:"62 ➔ 63",nama_item:"Space Wolf Fur (Kulit Serigala Alien)",jumlah:"x20",spina:0,monster:"Outer World Wolf (Serigala Luar)",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Gate to Another World (Gerbang Dunia Lain)"},{id:22,slot:"63 ➔ 64",nama_item:"Spina",jumlah:"-",spina:8e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:23,slot:"64 ➔ 65",nama_item:"Torn Cloak (Jubah Sobek)",jumlah:"x2",spina:0,monster:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Akaku Desert: Hill (Gurun Akaku: Bukit)"},{id:24,slot:"64 ➔ 65",nama_item:"Squirrel Fur (Kulit Tupai)",jumlah:"x20",spina:0,monster:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item:"Jade Raptor Horn (Tanduk Elang Zamrud)",jumlah:"x2",spina:0,monster:"Jade Raptor (Elang Zamrud)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Gravel Terrace (Teras Kerikil)"},{id:26,slot:"65 ➔ 66",nama_item:"Goat Fur (Bulu Kambing)",jumlah:"x20",spina:0,monster:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dunkel Valley (Jurang Dunkel)"},{id:27,slot:"66 ➔ 67",nama_item:"Twilight Dragon Wing (Sayap Naga Senja)",jumlah:"x2",spina:0,monster:"Twilight Dragon (Naga Senja)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fort Solfini: Roof (Benteng Solfini: Atap)"},{id:28,slot:"66 ➔ 67",nama_item:"Fleecy Fur (Bulu Halus)",jumlah:"x20",spina:0,monster:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Polde Ice Valley (Lembah Es Polde)"},{id:29,slot:"67 ➔ 68",nama_item:"Spina",jumlah:"-",spina:16e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:30,slot:"68 ➔ 69",nama_item:"Chain of Purgatory (Rantai Penyucian)",jumlah:"x2",spina:0,monster:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi:"Spring of Rebirth: Top (Mata Air Kelahiran: Puncak)"},{id:31,slot:"68 ➔ 69",nama_item:"Wavering Cloth (Kain Goyah)",jumlah:"x20",spina:0,monster:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Spring of Rebirth (Mata Air Kelahiran: Tengah/Atas)"},{id:32,slot:"69 ➔ 70",nama_item:"Aranea Silk (Benang Aranea)",jumlah:"x2",spina:0,monster:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Pusat)"},{id:33,slot:"69 ➔ 70",nama_item:"Small Spider Silk (Benang Laba-Laba Kecil)",jumlah:"x20",spina:0,monster:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Area 2/3)"},{id:34,slot:"70 ➔ 71",nama_item:"Copied Goddess Robe (Kain Dewi Tiruan)",jumlah:"x3",spina:0,monster:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Dark Castle: Grand Hall (Istana Gelap: Aula Besar)"},{id:35,slot:"70 ➔ 71",nama_item:"Floating Cloth (Kain Apung)",jumlah:"x10",spina:0,monster:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cradle of Soldier (Buaian Prajurit)"},{id:36,slot:"70 ➔ 71",nama_item:"Soft Paw (Tapak Lembut)",jumlah:"x20",spina:0,monster:"Bunny Summoner / Lapin (Dukun Lapin)",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Trace of Dark River (Sungai Kegelapan)"},{id:37,slot:"71 ➔ 72",nama_item:"Evil Beast Mane (Surai Hewan Iblis)",jumlah:"x3",spina:0,monster:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Dark Castle: Area 2 (Istana Gelap: Area 2)"},{id:38,slot:"71 ➔ 72",nama_item:"Hard Paw Pad (Bantalan Tapak Keras)",jumlah:"x10",spina:0,monster:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:39,slot:"71 ➔ 72",nama_item:"Dark Shadow Feather (Bulu Bayangan Hitam)",jumlah:"x20",spina:0,monster:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:40,slot:"72 ➔ 73",nama_item:"Spina",jumlah:"-",spina:32e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:41,slot:"73 ➔ 74",nama_item:"Tapir Fur (Bulu Tapir)",jumlah:"x3",spina:0,monster:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:42,slot:"73 ➔ 74",nama_item:"Stiff Fur (Bulu Kaku)",jumlah:"x10",spina:0,monster:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:43,slot:"73 ➔ 74",nama_item:"Anti-Rust Oil (Minyak Anti-Karat)",jumlah:"x20",spina:0,monster:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Artillery Defense Line (Garis Pertahanan Artileri Otomatis)"},{id:44,slot:"74 ➔ 75",nama_item:"Ancient Fabric (Kain Kuno)",jumlah:"x3",spina:0,monster:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Singolare Ruins: 3rd Floor (Reruntuhan Singolare: Lantai 3)"},{id:45,slot:"74 ➔ 75",nama_item:"Soft Tree Bark (Kulit Pohon Lunak)",jumlah:"x10",spina:0,monster:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Site of Simscracker (Situs Simcracker)"},{id:46,slot:"74 ➔ 75",nama_item:"Dirty Potum Hair (Rambut Potum Kotor)",jumlah:"x20",spina:0,monster:"Slum Potum",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Klaspe Slum (Klaspe Kumuh)"},{id:47,slot:"75 ➔ 76",nama_item:"Crimson Huge Bone (Tulang Raksasa Merah)",jumlah:"x3",spina:0,monster:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil: Area 2)"},{id:48,slot:"75 ➔ 76",nama_item:"Torn Black Coat (Mantel Hitam Sobek)",jumlah:"x10",spina:0,monster:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:49,slot:"75 ➔ 76",nama_item:"Torn Chain (Rantai Putus)",jumlah:"x20",spina:0,monster:"Torture Machina (Machina Penyiksa)",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:50,slot:"76 ➔ 77",nama_item:"Chimera Scale (Sisik Chimera)",jumlah:"x3",spina:0,monster:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar: Bagian Terdalam)"},{id:51,slot:"76 ➔ 77",nama_item:"Mysterious Luminary (Benda Pendar Aneh)",jumlah:"x10",spina:0,monster:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:52,slot:"76 ➔ 77",nama_item:"Tough Tentacle (Tentakel Tangguh)",jumlah:"x20",spina:0,monster:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:53,slot:"77 ➔ 78",nama_item:"Spina",jumlah:"-",spina:64e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:54,slot:"78 ➔ 79",nama_item:"Forest Spirit Robe (Jubah Roh Hutan)",jumlah:"x3",spina:0,monster:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Monster Forest: Deep Part (Hutan Monster: Bagian Dalam)"},{id:55,slot:"78 ➔ 79",nama_item:"Plant Fang (Taring Tanaman)",jumlah:"x10",spina:0,monster:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Monster Forest (Hutan Monster)"},{id:56,slot:"78 ➔ 79",nama_item:"Felt Fabric (Kain Felt)",jumlah:"x20",spina:0,monster:"Puppet Dragon (Naga Boneka)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lufenas Mansion (Mansion Lufenas)"},{id:57,slot:"79 ➔ 80",nama_item:"Lyark Alloy (Aloi Lyark)",jumlah:"x3",spina:0,monster:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Cuervo Jail: Roof (Penjara Cuervo: Atap)"},{id:58,slot:"79 ➔ 80",nama_item:"Torn Officer Clothes (Baju Penjaga Robek)",jumlah:"x10",spina:0,monster:"Lyark Jailer (Sipir Lyark)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cuervo Jail (Penjara Cuervo)"},{id:59,slot:"79 ➔ 80",nama_item:"Ox Fabric (Kain Lembu)",jumlah:"x20",spina:0,monster:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Brahe Laboratory (Laboratorium Brahe)"},{id:60,slot:"80 ➔ 81",nama_item:"Light Emitting Cloth (Kain Bercahaya)",jumlah:"x4",spina:0,monster:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Buried Tower: Inside (Menara Penembus Bumi: Sisi Dalam)"},{id:61,slot:"80 ➔ 81",nama_item:"Damaged Artificial Leather (Kulit Sintetis Rusak)",jumlah:"x20",spina:0,monster:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:62,slot:"80 ➔ 81",nama_item:"Executioner Loincloth (Cawat Pengeksekusi)",jumlah:"x20",spina:0,monster:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:63,slot:"81 ➔ 82",nama_item:"Lil Empress Cloth Piece (Potongan Baju K. Kecil)",jumlah:"x4",spina:0,monster:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ultimea Palace: Throne (Istana Ultimea: Takhta)"},{id:64,slot:"81 ➔ 82",nama_item:"Hard Armor Bit (Pecahan Zirah Keras)",jumlah:"x20",spina:0,monster:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Ultimea Palace (Istana Ultimea)"},{id:65,slot:"81 ➔ 82",nama_item:"Snake Skin (Kulit Ular)",jumlah:"x20",spina:0,monster:"Pond Snake (Ular Kolam)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Copia Reservoirs (Reservoir Copia)"},{id:66,slot:"82 ➔ 83",nama_item:"Spina",jumlah:"-",spina:1e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:67,slot:"83 ➔ 84",nama_item:"Mom Fluck Skin (Kulit Mama Fluck)",jumlah:"x4",spina:0,monster:"Mom Fluck (Mama Fluck)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Forgotten Cave (Gua Pelupa)"},{id:68,slot:"83 ➔ 84",nama_item:"Colon Big Leaf (Daun Besar Colon)",jumlah:"x20",spina:0,monster:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Rokoko Plains (Dataran Rakoko)"},{id:69,slot:"83 ➔ 84",nama_item:"Vertical Stripe Fur (Bulu Garis Vertikal)",jumlah:"x20",spina:0,monster:"Tehon (Rakun Tambun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Curonne Forest (Hutan Currone)"},{id:70,slot:"84 ➔ 85",nama_item:"Mardula Spiritual Cloth (Kain Rohani Mardula)",jumlah:"x4",spina:0,monster:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Hall of Blessings Gods (Serambi Dewa Berkah)"},{id:71,slot:"84 ➔ 85",nama_item:"Mysterious Shiny Cloth (Kain Berkilau Misterius)",jumlah:"x20",spina:0,monster:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:72,slot:"84 ➔ 85",nama_item:"Grey Feather (Bulu Kelabu)",jumlah:"x20",spina:0,monster:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Ruins of Mt. Mithurna (Reruntuhan G. Mithurna)"},{id:73,slot:"85 ➔ 86",nama_item:"Carbuncle Fur (Mantel Carbuncle)",jumlah:"x4",spina:0,monster:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Hall of Construction Gods (Serambi Dewa Pembangunan)"},{id:74,slot:"85 ➔ 86",nama_item:"Knit Fabric (Kain Rajut)",jumlah:"x20",spina:0,monster:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Heresy Corridor (Koridor Heresi)"},{id:75,slot:"85 ➔ 86",nama_item:"Bag Bear Tail (Ekor Beruang Berkantong)",jumlah:"x20",spina:0,monster:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:76,slot:"86 ➔ 87",nama_item:"King Piton Fur (Bulu Raja Piton)",jumlah:"x4",spina:0,monster:"King Piton (Raja Piton)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Elf Mountains: Shrine (Pegunungan Elf: Kuil)"},{id:77,slot:"86 ➔ 87",nama_item:"Thick White Fur (Bulu Putih Lebat)",jumlah:"x20",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Garden of Ice & Snow (Taman Es & Salju)"},{id:78,slot:"86 ➔ 87",nama_item:"Stiff Grey Fur (Bulu Abu Kaku)",jumlah:"x20",spina:0,monster:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:79,slot:"87 ➔ 88",nama_item:"Ancient Ingot (Ingot Kuno)",jumlah:"x4",spina:0,monster:"Thug Golem (Golem Preman)",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi:"Dark Dragon Shrine: Middle (Kuil Naga Kegelapan: Tengah)"},{id:80,slot:"87 ➔ 88",nama_item:"Ice Wolf Fang (Taring Serigala Es)",jumlah:"x20",spina:0,monster:"Courloup (Serigala Tanduk)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:81,slot:"87 ➔ 88",nama_item:"Dusky Fabric (Kain Gelap)",jumlah:"x20",spina:0,monster:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Dragon Shrine (Kuil Naga Kegelapan)"},{id:82,slot:"88 ➔ 89",nama_item:"Spina",jumlah:"-",spina:2e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:83,slot:"89 ➔ 90",nama_item:"Tuscog Fang (Taring Tuscog)",jumlah:"x4",spina:0,monster:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:84,slot:"89 ➔ 90",nama_item:"Larva Silk (Sutra Ulat)",jumlah:"x20",spina:0,monster:"Moss Mole (Tikus Lumut)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Forest of Ein (Hutan Ein)"},{id:85,slot:"89 ➔ 90",nama_item:"Werewolf Fur (Taring Manusia Serigala)",jumlah:"x20",spina:0,monster:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:86,slot:"90 ➔ 91",nama_item:"Kuzto Splinter (Serpihan Kayu Kuzto)",jumlah:"x4",spina:0,monster:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi:"Labilans Sector: Square (Distrik Labilans: Alun-alun)"},{id:87,slot:"90 ➔ 91",nama_item:"Stoat Fur (Bulu Cerpelai)",jumlah:"x20",spina:0,monster:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fabriska Sector (Distrik Fabriska)"},{id:88,slot:"90 ➔ 91",nama_item:"Mysterious Waist Sash (Sabuk Pinggang Misterius)",jumlah:"x30",spina:0,monster:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fractum Sector (Distrik Fractum)"},{id:89,slot:"91 ➔ 92",nama_item:"Crystal Pouch (Kantong Kristal)",jumlah:"x5",spina:0,monster:"Canemofish (Nemopirania)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:90,slot:"91 ➔ 92",nama_item:"Cushy Tail (Ekor Lembu)",jumlah:"x20",spina:0,monster:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Labilans Sector (Distrik Labilans)"},{id:91,slot:"91 ➔ 92",nama_item:"Sturdy Papula (Papula Kuat)",jumlah:"x30",spina:0,monster:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:92,slot:"92 ➔ 93",nama_item:"Repthon Wings (Sayap Repthon)",jumlah:"x5",spina:0,monster:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone: Deepest Area (Zona Riset Deltzon: Area Terdalam)"},{id:93,slot:"92 ➔ 93",nama_item:"Legume Button (Kancing Polong)",jumlah:"x20",spina:0,monster:"Marquis Colon (Colon Marquis)",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Old Lufenas Mansion Ruins (Reruntuhan Mansion Lufenas Tua)"},{id:94,slot:"92 ➔ 93",nama_item:"Frock Coat Scrap (Kain Perca Jas Panjang)",jumlah:"x30",spina:0,monster:"Swirly Whirly (Gulingkar)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone (Zona Riset Deltzon)"},{id:95,slot:"93 ➔ 94",nama_item:"Empress Ogre Hair (Rambut Kaisar Siluman)",jumlah:"x5",spina:0,monster:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item:"Torn Red Cloth (Kain Merah Sobek)",jumlah:"x20",spina:0,monster:"Sand Bandits Potum (Potum Bandit Gurun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Geist Desert (Gurun Pasir Geist)"},{id:97,slot:"93 ➔ 94",nama_item:"Corroded Leather (Kulit Karatan)",jumlah:"x30",spina:0,monster:"Cabrigo (Jasman)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ruins of Urban Elban (Reruntuhan Elban Urban)"},{id:98,slot:"94 ➔ 95",nama_item:"Spina",jumlah:"-",spina:3e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:99,slot:"95 ➔ 96",nama_item:"Pisteus Bone (Tulang Pisteus)",jumlah:"x5",spina:0,monster:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Ducia Coast: Depths (Pesisir Ducia: Area Terdalam)"},{id:100,slot:"95 ➔ 96",nama_item:"Phantom Cloth (Kain Phantom)",jumlah:"x20",spina:0,monster:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lunagent Cliff Base (Dasar Tebing Lunagent)"},{id:101,slot:"95 ➔ 96",nama_item:"Sea Otter Fur (Bulu Berang-Berang Laut)",jumlah:"x30",spina:0,monster:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ducia Coast (Pesisir Ducia)"},{id:102,slot:"96 ➔ 97",nama_item:"Arachnidemon Wing (Sayap Arachnidemon)",jumlah:"x5",spina:0,monster:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Arche Valley: Depths (Lembah Arche: Area Terdalam)"},{id:103,slot:"96 ➔ 97",nama_item:"Metal Shackles (Belenggu Logam)",jumlah:"x20",spina:0,monster:"Bessy (Besy) / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi:"Arche Valley (Lembah Arche)"},{id:104,slot:"96 ➔ 97",nama_item:"Weird Snake Skin (Kulit Ular Aneh)",jumlah:"x30",spina:0,monster:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rokoko City Ruins (Reruntuhan Kota Rokoko) / Nezim Wetlands"},{id:105,slot:"97 ➔ 98",nama_item:"Slimy Hide (Jangat Berlendir)",jumlah:"x5",spina:0,monster:"Lord of Nezim (Datuk Nezim)",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:106,slot:"97 ➔ 98",nama_item:"Enty Cloth (Kain Enty)",jumlah:"x20",spina:0,monster:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:107,slot:"97 ➔ 98",nama_item:"Sturdy Core (Poros Kokoh)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:108,slot:"98 ➔ 99",nama_item:"Inferno Curse Cloth Scrap (Perca Gendam Geni)",jumlah:"x5",spina:0,monster:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Witch's Woods Depths (Rimba Penyihir: Area Terdalam)"},{id:109,slot:"98 ➔ 99",nama_item:"Kappa's Plate (Piring Kappa)",jumlah:"x20",spina:0,monster:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:110,slot:"98 ➔ 99",nama_item:"Crow Feather (Bulu Gagak)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:111,slot:"99 ➔ 100",nama_item:"Wriggling Latebra (Inti Latebra Menggeliat)",jumlah:"x5",spina:0,monster:"Trocostida (Trokostida)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item:"Viscous Liquid (Cairan Lekat)",jumlah:"x20",spina:0,monster:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item:"Bizarre Skin (Kulit Pelik)",jumlah:"x30",spina:0,monster:"Evil Eye (Mata Jahat) / Demonic Eye",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Morga Wasteland (Padang Morga)"}],A0={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},v0={class:"relative z-10 text-center md:text-left"},x0={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},y0={class:"flex items-center gap-2 select-none whitespace-nowrap"},w0={class:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"},P0={class:"text-[10px] md:text-xs font-black opacity-80 uppercase tracking-widest"},M0={class:"text-3xl md:text-5xl font-black italic mt-1 leading-none"},D0={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},R0={class:"relative"},S0={class:"relative group"},C0={class:"relative"},E0={class:"relative group"},T0={class:"relative"},_0={class:"relative group"},K0=["value"],I0={class:"hidden lg:block overflow-x-auto no-scrollbar"},B0={class:"w-full min-w-[1100px] border-collapse"},N0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},O0={class:"font-black text-blue-500 italic text-3xl"},L0={class:"p-8 font-black uppercase text-base border-r-[2px] border-lime-500/10"},G0={class:"p-8 text-center bg-black/5 border-r-[2px] border-lime-500/10"},U0={class:"font-black italic text-lime-600 text-5xl"},H0={class:"p-8 text-center font-black text-xl text-amber-600 border-r-[2px] border-lime-500/10"},j0={class:"p-8 text-[11px] font-bold uppercase opacity-60 border-r-[2px] border-lime-500/10"},F0={class:"p-8 text-center border-r-[2px] border-lime-500/10"},V0={class:"p-8 font-black text-xl italic text-blue-600 uppercase tracking-tighter"},J0={class:"flex justify-between items-start"},W0={class:"flex-1 pr-4"},Q0={class:"text-[10px] font-black text-blue-500 mb-1"},q0={class:"text-4xl font-black italic text-lime-600"},z0={class:"border-l-[2px] pl-3 border-slate-300/30"},X0={class:"text-xl font-black block mt-1"},$0={class:"space-y-3"},Z0={class:"flex items-center gap-3"},Y0={class:"flex-1"},ed={class:"text-xs font-black uppercase text-indigo-500"},td={class:"flex items-center gap-3"},nd={class:"flex-1"},ad={class:"text-sm font-black italic text-blue-600 uppercase"},id={class:"flex flex-col gap-8 justify-center items-center pb-20"},ld={key:0,class:"flex flex-wrap justify-center items-center gap-2"},rd=["disabled"],sd={key:0,class:"text-blue-600 font-black px-2"},od=["onClick"],cd=["disabled"],ud={__name:"ListBag",props:["isDark"],setup(e){const t=le(""),n=le("All Class"),a=le("All Slot"),i=le(1),l=le(10),s=()=>{l.value===10?l.value=c.value.length:l.value=10,i.value=1},o=h=>{if(!h||h==="-")return"-";let b=h.toString().replace(/x/gi,"").trim();return b==="0"||b===""?"-":b},c=te(()=>Xn.filter(b=>{const y=t.value.toLowerCase(),S=b.kelas_mob||"",_=!t.value||b.nama_item?.toLowerCase().includes(y)||b.monster?.toLowerCase().includes(y)||b.lokasi?.toLowerCase().includes(y);let C=!0;n.value!=="All Class"&&(n.value==="Mob"?C=S==="Mob"||S==="Miniboss/Mob":n.value==="Miniboss"?C=S==="Miniboss"||S==="Miniboss/Mob":C=S===n.value);const Q=a.value==="All Slot"||String(b.slot).includes(String(a.value));return _&&C&&Q}).sort((b,y)=>{const S=parseInt(String(b.slot).match(/\d+/))||0,_=parseInt(String(y.slot).match(/\d+/))||0;return S-_}));Mt([t,n,a],()=>{i.value=1});const p=te(()=>Math.ceil(c.value.length/l.value)||1),u=te(()=>{const h=p.value,b=i.value;if(h<=5)return Array.from({length:h},(S,_)=>_+1);let y=[];return b<=3?y=[1,2,3,"...",h]:b>=h-2?y=[1,"...",h-2,h-1,h]:y=[1,"...",b,"...",h],y}),d=te(()=>{const h=(i.value-1)*l.value;return c.value.slice(h,h+l.value)}),g=te(()=>[...new Set(Xn.map(b=>b.slot))].sort((b,y)=>(parseInt(b)||0)-(parseInt(y)||0))),k=te(()=>[{label:"ALL ITEM",val:Xn.length,grad:"from-blue-700 to-blue-500"},{label:"RESULTS",val:c.value.length,grad:"from-fuchsia-600 to-purple-600"},{label:"BOSS",val:Xn.filter(h=>h.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600"},{label:"SLOTS",val:g.value.length,grad:"from-lime-500 to-emerald-600"}]),v=h=>{const b="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return h==="Mob"?b+"bg-green-500/10 text-green-500 border-green-500/50":h==="Miniboss/Mob"?b+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":h==="Miniboss"?b+"bg-purple-500/10 text-purple-500 border-purple-500/50":h==="Boss"?b+"bg-red-500/10 text-red-500 border-red-500/50":h==="Spina"?b+"bg-amber-500/10 text-amber-500 border-amber-500/50":b+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(h,b)=>(R(),T("div",{class:w(["bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans relative z-10",e.isDark?"text-white":"text-slate-900"])},[r("div",A0,[r("div",{class:w(["relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[b[8]||(b[8]=r("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[r("img",{src:k0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),r("div",v0,[r("h2",{class:w(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[...b[5]||(b[5]=[He(" LIST BAG",-1),r("br",null,null,-1),r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},"EXPANSION",-1)])],2),r("div",x0,[b[7]||(b[7]=r("div",{class:"flex items-center gap-3"},[r("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),r("img",{src:Da,class:"h-8 md:h-12 w-auto object-contain"})],-1)),r("div",y0,[r("span",{class:w(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),b[6]||(b[6]=r("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),r("div",w0,[(R(!0),T(X,null,de(k.value,y=>(R(),T("div",{key:y.label,class:w(["p-6 rounded-[2rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white",y.grad,e.isDark?"border-white/20":"border-black/5"])},[r("div",P0,O(y.label),1),r("div",M0,O(y.val),1)],2))),128))]),r("div",{class:w(["p-6 md:p-8 rounded-[2.5rem] border-[4px] backdrop-blur-xl shadow-2xl transition-all",e.isDark?"bg-black/40 border-indigo-500/50":"bg-white/80 border-indigo-600 shadow-indigo-100"])},[r("div",D0,[r("div",R0,[b[10]||(b[10]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Search Item",-1)),r("div",S0,[xe(r("input",{"onUpdate:modelValue":b[0]||(b[0]=y=>t.value=y),type:"text",placeholder:"Find items...",class:w(["w-full h-14 pl-14 pr-6 rounded-2xl border-[3px] font-bold outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},null,2),[[Xe,t.value]]),b[9]||(b[9]=r("div",{class:"absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[r("circle",{cx:"11",cy:"11",r:"8"}),r("path",{d:"m21 21-4.3-4.3"})])],-1))])]),r("div",C0,[b[13]||(b[13]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Category",-1)),r("div",E0,[xe(r("select",{"onUpdate:modelValue":b[1]||(b[1]=y=>n.value=y),class:w(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[...b[11]||(b[11]=[r("option",null,"All Class",-1),r("option",null,"Mob",-1),r("option",null,"Miniboss",-1),r("option",null,"Boss",-1),r("option",null,"Spina",-1)])],2),[[it,n.value]]),b[12]||(b[12]=dn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><rect width="7" height="7" x="3" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="3" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="14" y="14" rx="1" data-v-b5293da0></rect><rect width="7" height="7" x="3" y="14" rx="1" data-v-b5293da0></rect></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])]),r("div",T0,[b[16]||(b[16]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Jump to Slot",-1)),r("div",_0,[xe(r("select",{"onUpdate:modelValue":b[2]||(b[2]=y=>a.value=y),class:w(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[b[14]||(b[14]=r("option",null,"All Slot",-1)),(R(!0),T(X,null,de(g.value,y=>(R(),T("option",{key:y,value:y},"Slot "+O(y),9,K0))),128))],2),[[it,a.value]]),b[15]||(b[15]=dn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><circle cx="12" cy="12" r="10" data-v-b5293da0></circle><line x1="12" y1="8" x2="12" y2="16" data-v-b5293da0></line><line x1="8" y1="12" x2="16" y2="12" data-v-b5293da0></line></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b5293da0><path d="m6 9 6 6 6-6" data-v-b5293da0></path></svg></div>',2))])])])],2),r("div",{class:w(["border-[4px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80 shadow-lime-100"])},[r("div",I0,[r("table",B0,[r("thead",null,[r("tr",{class:w(["uppercase text-[10px] font-black tracking-widest border-b-[3px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[...b[17]||(b[17]=[r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Slot",-1),r("th",{class:"p-8 w-[20%] text-left border-r-[2px] border-lime-500/20"},"Item Name",-1),r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Total Need",-1),r("th",{class:"p-8 w-[15%] text-center border-r-[2px] border-lime-500/20"},"Spina Cost",-1),r("th",{class:"p-8 w-[15%] text-left border-r-[2px] border-lime-500/20"},"Source",-1),r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Type",-1),r("th",{class:"p-8 w-[20%] text-left"},"Location",-1)])],2)]),r("tbody",{class:w(["divide-y-[2px]",e.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(R(!0),T(X,null,de(d.value,y=>(R(),T("tr",{key:y.id,class:"hover:bg-indigo-500/5 transition-all group"},[r("td",N0,[r("span",O0,O(y.slot),1)]),r("td",L0,O(y.nama_item),1),r("td",G0,[r("span",U0,O(o(y.jumlah)),1)]),r("td",H0,O(y.spina>0?Number(y.spina).toLocaleString():"-"),1),r("td",j0,O(y.monster||"-"),1),r("td",F0,[r("span",{class:w(v(y.kelas_mob))},O(y.kelas_mob),3)]),r("td",V0,O(y.lokasi),1)]))),128))],2)])]),r("div",{class:w(["lg:hidden divide-y-[3px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(R(!0),T(X,null,de(d.value,y=>(R(),T("div",{key:y.id,class:"p-6 space-y-4"},[r("div",J0,[r("div",W0,[r("div",Q0,"SLOT "+O(y.slot),1),r("h3",{class:w(["font-black uppercase text-xl leading-tight",e.isDark?"text-white":"text-slate-900"])},O(y.nama_item),3)]),r("div",{class:w([v(y.kelas_mob),"!min-w-fit !px-2"])},O(y.kelas_mob),3)]),r("div",{class:w(["grid grid-cols-2 gap-3 border-[3px] p-4 rounded-2xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[r("div",null,[b[18]||(b[18]=r("span",{class:"text-[9px] font-black text-lime-600 uppercase block"},"Need",-1)),r("span",q0,O(o(y.jumlah)),1)]),r("div",z0,[b[19]||(b[19]=r("span",{class:"text-[9px] font-black text-amber-600 uppercase block"},"Cost",-1)),r("span",X0,O(y.spina>0?Number(y.spina).toLocaleString():"-"),1)])],2),r("div",$0,[r("div",Z0,[b[21]||(b[21]=dn('<div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0" data-v-b5293da0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-indigo-500" data-v-b5293da0><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" data-v-b5293da0></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-b5293da0></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-b5293da0></line></svg></div>',1)),r("div",Y0,[b[20]||(b[20]=r("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Drop From:",-1)),r("span",ed,O(y.monster||"-"),1)])]),r("div",td,[b[23]||(b[23]=r("div",{class:"w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3",class:"text-red-500"},[r("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),r("circle",{cx:"12",cy:"10",r:"3"})])],-1)),r("div",nd,[b[22]||(b[22]=r("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Map:",-1)),r("span",ad,O(y.lokasi),1)])])])]))),128))],2)],2),r("div",id,[p.value>1?(R(),T("div",ld,[r("button",{onClick:b[3]||(b[3]=y=>i.value--),disabled:i.value===1,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," « ",8,rd),(R(!0),T(X,null,de(u.value,(y,S)=>(R(),T(X,{key:S},[y==="..."?(R(),T("span",sd,"...")):(R(),T("button",{key:1,onClick:_=>i.value=y,class:w(["h-12 w-12 rounded-xl border-[3px] font-black transition-all active:scale-90",i.value===y?"bg-blue-600 border-blue-600 text-white shadow-lg":e.isDark?"bg-black/40 border-blue-800 text-blue-400":"bg-white border-blue-200 text-blue-600"])},O(y),11,od))],64))),128)),r("button",{onClick:b[4]||(b[4]=y=>i.value++),disabled:i.value===p.value,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," » ",8,cd)])):Se("",!0),r("button",{onClick:s,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:brightness-110 active:scale-95 transition-all shadow-xl"},O(l.value===10?"Explore All Database":"Collapse to 10 Rows"),1)])])],2))}},dd=Vt(ud,[["__scopeId","data-v-b5293da0"]]),pd="/toram-vue/images/mq.png",di=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],fd=()=>[...new Set(di.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),gd={class:"bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans"},md={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},hd={class:"relative z-10 text-center md:text-left"},bd={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},kd={class:"flex items-center gap-2 select-none whitespace-nowrap"},Ad={class:"grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"},vd={class:"text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mb-1"},xd={class:"text-3xl md:text-6xl font-black italic tracking-tighter leading-none"},yd={class:"flex flex-col gap-2"},wd={class:"flex flex-col gap-2"},Pd=["value"],Md={class:"hidden lg:block overflow-x-auto"},Dd={class:"w-full border-collapse"},Rd={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},Sd={class:"p-8 text-center bg-black/5"},Cd={class:"font-black italic text-5xl text-indigo-600"},Ed={class:"flex justify-between items-center"},Td={class:"text-2xl font-black italic text-indigo-500/30"},_d={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},Kd={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},Id={class:"text-right"},Bd={class:"text-4xl font-black italic text-indigo-600"},Nd={class:"flex flex-col gap-6 justify-center items-center pb-20"},Od={key:0,class:"flex flex-wrap justify-center items-center gap-2"},Ld=["disabled"],Gd={key:0,class:"text-indigo-500 font-black px-2"},Ud=["onClick"],Hd=["disabled"],jd={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=Ea(),i=Ca(),l=le(a.query.search||""),s=le(a.query.chapter||"Semua Chapter"),o=le(parseInt(a.query.page)||1),c=le(parseInt(a.query.per_page)||10),p=fd(),u=te(()=>di.filter(S=>{const _=l.value.toLowerCase(),C=S.nama_item.toLowerCase().includes(_)||S.chapter.toLowerCase().includes(_),Q=s.value==="Semua Chapter"||S.chapter===s.value;return C&&Q})),d=te(()=>Math.ceil(u.value.length/c.value)||1),g=te(()=>{const S=(o.value-1)*c.value;return u.value.slice(S,S+c.value)}),k=()=>{c.value===10?c.value=u.value.length:c.value=10,o.value=1,v()},v=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:s.value!=="Semua Chapter"?s.value:void 0,per_page:c.value,page:o.value}})},h=S=>{S>=1&&S<=d.value&&(o.value=S,v())};Mt([l,s],()=>{o.value=1,v()});const b=te(()=>{const S=d.value,_=o.value;if(S<=5)return Array.from({length:S},(Q,ne)=>ne+1);let C=[];return _<=3?C=[1,2,3,"...",S]:_>=S-2?C=[1,"...",S-2,S-1,S]:C=[1,"...",_,"...",S],C}),y=te(()=>[{label:"ALL ITEM",val:di.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:p.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:p.length>0?p[p.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]);return(S,_)=>(R(),T("div",gd,[r("div",md,[r("div",{class:w(["relative p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-[4px] shadow-2xl overflow-hidden backdrop-blur-xl transition-all",n.isDark?"border-indigo-500 bg-black/40":"border-indigo-600 bg-white/70 shadow-indigo-100"])},[_[7]||(_[7]=r("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[r("img",{src:pd,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),r("div",hd,[r("h2",{class:w(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[..._[4]||(_[4]=[He(" MAIN QUEST",-1),r("br",null,null,-1),r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),r("div",bd,[_[6]||(_[6]=r("div",{class:"flex items-center gap-3"},[r("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),r("img",{src:Da,class:"h-8 md:h-12 w-auto object-contain"})],-1)),r("div",kd,[r("span",{class:w(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),_[5]||(_[5]=r("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),r("div",Ad,[(R(!0),T(X,null,de(y.value,C=>(R(),T("div",{key:C.label,class:w(["aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] border-white/20 shadow-xl text-white bg-gradient-to-br transition-all hover:scale-105 active:scale-95",C.grad])},[r("span",vd,O(C.label),1),r("span",xd,O(C.val),1)],2))),128))]),r("div",{class:w(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[r("div",yd,[_[8]||(_[8]=r("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),xe(r("input",{"onUpdate:modelValue":_[0]||(_[0]=C=>l.value=C),type:"text",placeholder:"Find MQ item...",class:w(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[Xe,l.value]])]),r("div",wd,[_[10]||(_[10]=r("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),xe(r("select",{"onUpdate:modelValue":_[1]||(_[1]=C=>s.value=C),class:w(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[_[9]||(_[9]=r("option",{value:"Semua Chapter"},"All Chapter",-1)),(R(!0),T(X,null,de(Ze(p),C=>(R(),T("option",{key:C,value:C},O(C),9,Pd))),128))],2),[[it,s.value]])])],2),r("div",{class:w(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[r("div",Md,[r("table",Dd,[r("thead",null,[r("tr",{class:w(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[r("th",{class:w(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),r("th",{class:w(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),r("th",{class:w(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),_[11]||(_[11]=r("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),r("tbody",{class:w(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(R(!0),T(X,null,de(g.value,(C,Q)=>(R(),T("tr",{key:Q,class:"hover:bg-indigo-500/5 transition-all"},[r("td",{class:w(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},O((o.value-1)*c.value+Q+1),3),r("td",{class:w(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[r("span",Rd,O(C.chapter),1)],2),r("td",{class:w(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},O(C.nama_item),3),r("td",Sd,[r("span",Cd,O(C.jumlah),1)])]))),128))],2)])]),r("div",{class:w(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(R(!0),T(X,null,de(g.value,(C,Q)=>(R(),T("div",{key:Q,class:"p-6 space-y-4"},[r("div",Ed,[r("span",Td,"#"+O((o.value-1)*c.value+Q+1),1),r("span",_d,O(C.chapter),1)]),r("div",{class:w(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[r("div",Kd,O(C.nama_item),1),r("div",Id,[_[12]||(_[12]=r("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),r("span",Bd,O(C.jumlah),1)])],2)]))),128))],2)],2),r("div",Nd,[d.value>1?(R(),T("div",Od,[r("button",{onClick:_[2]||(_[2]=C=>h(o.value-1)),disabled:o.value===1,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,Ld),(R(!0),T(X,null,de(b.value,(C,Q)=>(R(),T(X,{key:Q},[C==="..."?(R(),T("span",Gd,"...")):(R(),T("button",{key:1,onClick:ne=>h(C),class:w(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",o.value===C?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},O(C),11,Ud))],64))),128)),r("button",{onClick:_[3]||(_[3]=C=>h(o.value+1)),disabled:o.value===d.value,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,Hd)])):Se("",!0),r("button",{onClick:k,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},O(c.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},Fd=Vt(jd,[["__scopeId","data-v-fbb29068"]]),da="data:image/jpeg;base64,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",hs="data:image/jpeg;base64,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",bs="data:image/jpeg;base64,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",pa="data:image/jpeg;base64,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",ks="data:image/jpeg;base64,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",As="data:image/jpeg;base64,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",Ht=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
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
`).map(n=>n.trim()).forEach(n=>{if(!n.match(/[+-]\s*\d/))return;const a=n.match(/^(.+?)\s*([+-])\s*(\d+)(%)?$/);if(!a)return;const[,i,l,s]=a;t[i.trim().toUpperCase()]={sign:l,value:Number(s)}}),t}const Jd={class:"fixed inset-0 pointer-events-none z-0"},Wd={key:0,class:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Qd={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse",style:{"animation-delay":"2s"}},qd={class:"relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-8 md:space-y-14"},zd={class:"flex items-center gap-6"},Xd={class:"text-center md:text-left space-y-1"},$d={class:"flex items-center gap-3"},Zd={class:"text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all"},Yd={class:"flex flex-col items-center md:items-end gap-3"},ep={class:"flex gap-2"},tp={class:"space-y-2 col-span-2 md:col-span-2 lg:col-span-2"},np={class:"relative group"},ap={class:"space-y-2 col-span-1"},ip={class:"truncate"},lp={class:"space-y-1.5 max-h-[300px] overflow-y-auto custom-scroll pr-1"},rp={key:0,class:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"},sp=["onClick"],op={key:0,class:"w-3.5 h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},cp={class:"space-y-2 col-span-1"},up={class:"truncate"},dp={class:"flex justify-between items-center mb-4 pb-2 border-b border-white/5"},pp={class:"grid grid-cols-1 gap-2 max-h-[55vh] overflow-y-auto custom-scroll pr-1"},fp={class:"flex items-center gap-2 mb-2"},gp={class:"flex flex-wrap gap-1.5"},mp=["onClick"],hp={key:0,class:"w-2 h-2 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},bp={class:"space-y-2 col-span-1"},kp={class:"relative group"},Ap={class:"space-y-2 col-span-2 md:col-span-1 lg:col-span-2"},vp={class:"flex items-center gap-2"},xp={class:"relative group flex-1"},yp={class:"relative py-4 flex items-center justify-center"},wp={class:"space-y-10 relative z-10 pb-32"},Pp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Mp=["onClick"],Dp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Rp={class:"lg:col-span-6 relative group"},Sp={class:"relative p-6 md:p-10"},Cp={class:"flex flex-col md:flex-row gap-8 items-start"},Ep={class:"relative shrink-0 mx-auto md:mx-0"},Tp=["src","alt"],_p={class:"flex-1 space-y-6 w-full"},Kp={class:"space-y-2"},Ip={class:"grid grid-cols-1 gap-4"},Bp={key:0,class:"w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0"},Np={class:"flex items-center gap-4"},Op={class:"flex flex-col"},Lp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Gp=["onClick"],Up={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Hp={key:0,class:"py-40 text-center animate-pulse"},jp={class:"flex flex-col items-center gap-10 py-20"},Fp={key:0,class:"flex flex-wrap justify-center items-center gap-3"},Vp=["disabled"],Jp={class:"flex gap-2.5 items-center"},Wp=["onClick"],Qp={key:1,class:"px-2 font-black text-blue-500"},qp=["disabled"],zp={class:"flex items-center gap-4 opacity-50"},Xp={class:"text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"},$p={class:"fixed bottom-8 left-8 z-[200] hidden lg:block"},Zp={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t=new Map;function n(G){return t.has(G.code)||t.set(G.code,Vd(G.view)),t.get(G.code)}const a={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},i={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF",value:".DEF"},{label:"MDEF",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD",value:"ASPD"},{label:"CSPD",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen",value:"Natural MP Regen"},{label:"Natural HP Regen",value:"Natural HP Regen"},{label:"Attack MP Recovery",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK",value:"Weapon ATK"},{label:"DTE (Elements)",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee",value:"Tambahan Fisik"},{label:"Additional Magic",value:"Tambahan Sihir"},{label:"Antisipasi",value:"Antisipasi"},{label:"Guard Break",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable",value:"Tumble Unavailable"},{label:"Evasion Recharge",value:"Evasion Recharge"},{label:"Refleks",value:"Refleks"},{label:"Recoil",value:"Recoil"}]},l=le(""),s=le([]),o=le([]),c=le(!1),p=le(!1),u=le(1),d=le(10),g=le("asc"),k=le(null),v=le(null),h=Ea(),b=te(()=>{try{return h.query.filter?JSON.parse(h.query.filter):null}catch{return null}}),y=()=>{p.value=!p.value,p.value&&(c.value=!1)},S=()=>{c.value=!c.value,c.value&&(p.value=!1)},_=G=>{const x=s.value.indexOf(G);x===-1?s.value.push(G):s.value.splice(x,1)},C=G=>{const x=o.value.indexOf(G);x===-1?o.value.push(G):o.value.splice(x,1)},Q=()=>{l.value="",s.value=[],o.value=[],u.value=1},ne=G=>{const x=G.type?.toUpperCase();if(x!=="UPGRADE")return se[x]||da;const pe=ee(G);return se[`${pe}_UPGRADE`]||pa},re=G=>({NORMAL:"bg-blue-500/10 text-blue-500 border-blue-500/40",UPGRADE:"bg-purple-500/10 text-purple-500 border-purple-500/40",ADDITIONAL:"bg-yellow-500/10 text-yellow-500 border-yellow-500/40",WEAPON:"bg-red-500/10 text-red-500 border-red-500/40",ARMOR:"bg-green-500/10 text-green-500 border-green-500/40",SPECIAL:"bg-pink-500/10 text-pink-500 border-pink-500/40"})[G?.toUpperCase()]||"bg-slate-500/10 text-slate-500 border-slate-500/40",Pe=G=>G.link?Ht.find(x=>String(x.code)===String(G.link)):null,V=G=>Ht.filter(x=>String(x.link)===String(G.code)),Y=[{label:"Weapon Crystas",value:"WEAPON"},{label:"Weapon Enhancer Crystas",value:"WEAPON_UPGRADE"},{label:"Armor Crystas",value:"ARMOR"},{label:"Armor Enhancer Crystas",value:"ARMOR_UPGRADE"},{label:"Additional Crystas",value:"ADDITIONAL"},{label:"Additional Enhancer Crystas",value:"ADDITIONAL_UPGRADE"},{label:"Normal Crystas",value:"NORMAL"},{label:"Normal Enhancer Crystas",value:"NORMAL_UPGRADE"},{label:"Special Crystas",value:"SPECIAL"},{label:"Special Enhancer Crystas",value:"SPECIAL_UPGRADE"}],se={NORMAL:da,UPGRADE:pa,ADDITIONAL:As,ADDITIONAL_UPGRADE:ys,ARMOR:ks,ARMOR_UPGRADE:xs,WEAPON:hs,WEAPON_UPGRADE:vs,SPECIAL:bs,SPECIAL_UPGRADE:ws},j=G=>{if(!G)return null;let x=G,pe=0;for(;x.link&&pe<10;){const we=Ht.find(U=>String(U.code)===String(x.link));if(!we)break;x=we,pe++}return x},ee=G=>j(G)?.type?.toUpperCase()||"NORMAL",Re=G=>{if(!G)return"text-cyan-500";const x=G.type?.toUpperCase();if(x==="UPGRADE"||x==="ENHANCER")return"text-gray-400";const pe=ee(G);return{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[pe]||"text-cyan-500"},Oe=G=>G?Array.isArray(G)?G:G.split(/,|\n/).map(x=>x.trim()).filter(x=>x):[],ye=G=>{l.value=G,window.scrollTo({top:0,behavior:"smooth"})},oe=te(()=>{let G=Ht.filter(x=>x.name?.trim());if(b.value?.stats&&(G=G.filter(x=>{const pe=n(x);return Object.entries(b.value.stats).every(([we,U])=>{const P=pe[we.toUpperCase()];return!(!P||P.sign!==U.sign||U.value!==null&&(U.op===">="&&P.value<U.value||U.op==="<="&&P.value>U.value))})})),l.value){const x=l.value.toLowerCase();G=G.filter(pe=>pe.name.toLowerCase().includes(x))}return s.value.length>0&&(G=G.filter(x=>{const pe=ee(x),we=x.type==="UPGRADE";return s.value.some(U=>{if(!U.includes("_"))return!we&&pe===U;const[P,I]=U.split("_");return I==="UPGRADE"&&we&&pe===P})})),o.value.length>0&&(G=G.filter(x=>{const pe=(x.view||"").toUpperCase();return o.value.every(we=>pe.includes(we.toUpperCase()))})),G.sort((x,pe)=>g.value==="asc"?x.name.localeCompare(pe.name):pe.name.localeCompare(x.name))}),ce=te(()=>{const G=(u.value-1)*d.value;return oe.value.slice(G,G+d.value)}),je=te(()=>Math.ceil(oe.value.length/d.value)||1),ct=te(()=>{let G=Math.max(1,u.value-2),x=Math.min(je.value,G+4);x-G<4&&(G=Math.max(1,x-4));const pe=[];for(let we=G;we<=x;we++)pe.push(we);return pe}),Qe=G=>{k.value&&!k.value.contains(G.target)&&(c.value=!1),v.value&&!v.value.contains(G.target)&&(p.value=!1)};return tn(()=>{window.addEventListener("click",Qe)}),Mi(()=>{window.removeEventListener("click",Qe)}),Mt([l,s,o,d,g],()=>{u.value=1}),(G,x)=>{const pe=In("RouterLink"),we=In("router-link");return R(),T("div",{class:w(["min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent",e.isDark?"text-slate-200":"text-slate-900"])},[r("div",Jd,[r("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),x[9]||(x[9]=r("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-transparent"},null,-1)),e.isDark?(R(),T("div",Wd)):Se("",!0),e.isDark?(R(),T("div",Qd)):Se("",!0)]),r("div",qd,[r("header",{class:w(["relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500",e.isDark?"border-white/5":"border-black/5"])},[r("div",zd,[x[12]||(x[12]=r("div",{class:"relative group"},[r("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"}),r("img",{src:Da,class:"relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110",alt:"Logo"})],-1)),r("div",Xd,[r("div",$d,[r("h1",Zd,[r("span",{class:w(e.isDark?"text-white":"text-slate-900")},"TIMI",2),x[10]||(x[10]=r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"},"DB",-1))]),x[11]||(x[11]=r("div",{class:"px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase"},"Bahasa Indonesia",-1))]),r("p",{class:w(["text-xs font-black uppercase tracking-[0.5em] opacity-60",e.isDark?"text-slate-400":"text-slate-500"])},"Toram Online Database",2)])]),r("div",Yd,[r("div",{class:w(["group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white border-slate-200 shadow-xl shadow-slate-200/50"])},[x[13]||(x[13]=r("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"},null,-1)),r("span",{class:w(["relative text-xs font-black uppercase tracking-[0.2em]",e.isDark?"text-cyan-400":"text-blue-600"])}," Results : "+O(oe.value.length)+" Xtall ",3)],2),r("div",ep,[(R(),T(X,null,de(3,U=>r("div",{key:U,class:"w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"})),64))])])],2),he(pe,{to:"/xtall/advanced",class:"mb-6 block w-full rounded-2xl border-2 border-orange-500 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-5 text-center text-lg font-black text-white shadow-xl hover:scale-[1.02] transition"},{default:We(()=>[...x[14]||(x[14]=[He(" 🔎 Advanced Xtall Search ",-1)])]),_:1}),r("section",{class:w(["grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl",e.isDark?"bg-slate-950/60 border-red/100 shadow-black/40":"bg-red/80 border-slate-200 shadow-slate-300/50"])},[r("div",tp,[x[17]||(x[17]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2"},[r("span",{class:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"}),He(" Search Name ")],-1)),r("div",np,[x[15]||(x[15]=r("div",{class:"absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"},null,-1)),xe(r("input",{"onUpdate:modelValue":x[0]||(x[0]=U=>l.value=U),type:"text",placeholder:"Search xtall name...",class:w(["relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm",e.isDark?"bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600":"bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400"])},null,2),[[Xe,l.value]]),x[16]||(x[16]=r("svg",{class:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-width":"3"})],-1))])]),r("div",ap,[x[21]||(x[21]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 ml-4"},"Type Xtall",-1)),r("div",{class:"relative",ref_key:"typeRef",ref:v},[r("button",{onClick:na(y,["stop"]),class:w(["w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300",p.value?"border-orange-500 ring-4 ring-orange-500/10 scale-[0.98]":"",e.isDark?p.value?"bg-orange-500/10":"bg-slate-900/50 border-white/5":p.value?"bg-orange-50 text-orange-700":"bg-white border-slate-200 shadow-sm"])},[r("span",ip,O(s.value.length===0?"All Type":s.value.length===1?s.value[0]:s.value.length+" Terpilih"),1),(R(),T("svg",{class:w(["w-4 h-4 transition-transform duration-500",p.value?"rotate-180 text-orange-500":"text-slate-500"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...x[18]||(x[18]=[r("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"},null,-1)])],2))],2),he(ua,{name:"dropdown-slide"},{default:We(()=>[p.value?(R(),T("div",{key:0,class:w(["absolute left-0 top-full mt-3 w-64 z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-3xl",e.isDark?"bg-slate-950/95 border-white/10":"bg-white border-slate-100"])},[r("div",lp,[r("div",{onClick:x[1]||(x[1]=U=>s.value=[]),class:w(["group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all",s.value.length===0?"bg-orange-500 text-white":e.isDark?"hover:bg-white/5 text-slate-400":"hover:bg-slate-50 text-slate-600"])},[x[19]||(x[19]=r("span",{class:"text-[10px] font-black uppercase tracking-widest"}," All Type ",-1)),s.value.length===0?(R(),T("div",rp)):Se("",!0)],2),r("div",{class:w(["h-[1px] my-2",e.isDark?"bg-white/5":"bg-slate-100"])},null,2),(R(),T(X,null,de(Y,U=>r("div",{key:U.value,onClick:P=>_(U.value),class:w(["group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all border border-transparent",s.value.includes(U.value)?"bg-orange-500/10 border-orange-500/20":e.isDark?"hover:bg-white/5":"hover:bg-slate-50"])},[r("div",{class:w(["w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300",s.value.includes(U.value)?"border-orange-500 bg-orange-500":"border-slate-500 group-hover:border-orange-400"])},[s.value.includes(U.value)?(R(),T("svg",op,[...x[20]||(x[20]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):Se("",!0)],2),r("span",{class:w(["text-xs font-bold",s.value.includes(U.value)?"text-orange-500":e.isDark?"text-slate-400":"text-slate-600"])},O(U.label),3)],10,sp)),64))])],2)):Se("",!0)]),_:1})],512)]),r("div",cp,[x[25]||(x[25]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 ml-4"},"Attributes",-1)),r("div",{class:"relative",ref_key:"statusRef",ref:k},[r("button",{onClick:na(S,["stop"]),class:w(["w-full px-5 py-4 rounded-2xl border-2 text-left font-bold text-sm flex justify-between items-center transition-all duration-300",c.value?"border-teal-500 ring-4 ring-teal-500/10 scale-[0.98]":"",e.isDark?c.value?"bg-teal-500/10":"bg-slate-900/50 border-white/5":c.value?"bg-teal-50 text-teal-700":"bg-white border-slate-200 shadow-sm"])},[r("span",up,O(o.value.length>0?o.value.length+" Filters Selected":"Attribute Status"),1),(R(),T("svg",{class:w(["w-4 h-4 transition-transform duration-500",c.value?"rotate-180 text-teal-500":"text-slate-500"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...x[22]||(x[22]=[r("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"},null,-1)])],2))],2),he(ua,{name:"dropdown-slide"},{default:We(()=>[c.value?(R(),T("div",{key:0,class:w(["absolute right-0 md:left-0 top-full mt-3 w-[280px] z-[9999] p-4 rounded-[2rem] border-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl",e.isDark?"bg-slate-950/98 border-white/10":"bg-white/98 border-slate-200"])},[r("div",dp,[x[23]||(x[23]=r("div",null,[r("h4",{class:"text-xs font-black uppercase italic tracking-tighter"},"Attribute Status"),r("p",{class:"text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5"},"Narrow your results")],-1)),r("button",{onClick:x[2]||(x[2]=U=>o.value=[]),class:"px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg text-[10px] font-black uppercase transition-all duration-300"},"Reset")]),r("div",pp,[(R(),T(X,null,de(i,(U,P)=>r("div",{key:P,class:w(["group p-3 rounded-[1.5rem] border-2 transition-all duration-500",e.isDark?"bg-white/[0.02] hover:bg-white/[0.04]":"bg-slate-50",a[P]?.border||"border-transparent"])},[r("div",fp,[r("div",{class:w(["w-1 h-3 rounded-full",a[P]?.bg||"bg-slate-500"])},null,2),r("h5",{class:w(["text-[9px] font-black uppercase tracking-widest",a[P]?.text||"text-slate-400"])},O(P),3)]),r("div",gp,[(R(!0),T(X,null,de(U,I=>(R(),T("div",{key:I.value,onClick:na(L=>C(I.value),["stop"]),class:w(["group/stat px-2 py-1 rounded-lg text-[9px] font-black transition-all duration-300 border flex items-center gap-1.5 cursor-pointer",o.value.includes(I.value)?a[P]?.text+" border-current bg-current/10 shadow-sm":e.isDark?"text-slate-500 border-white/5 hover:border-white/20":"text-slate-500 border-slate-200 bg-white hover:border-slate-400"])},[r("div",{class:w(["w-2.5 h-2.5 rounded-sm border flex items-center justify-center transition-all",o.value.includes(I.value)?"bg-current border-transparent":"border-current/30"])},[o.value.includes(I.value)?(R(),T("svg",hp,[...x[24]||(x[24]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):Se("",!0)],2),He(" "+O(I.label),1)],10,mp))),128))])],2)),64))])],2)):Se("",!0)]),_:1})],512)]),r("div",bp,[x[28]||(x[28]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4"},"Scale",-1)),r("div",kp,[xe(r("select",{"onUpdate:modelValue":x[3]||(x[3]=U=>d.value=U),class:w(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200":"bg-white border-slate-200 focus:border-purple-500 shadow-sm"])},[...x[26]||(x[26]=[r("option",{value:10},"10 Units",-1),r("option",{value:25},"25 Units",-1),r("option",{value:50},"50 Units",-1),r("option",{value:9999},"Show All",-1)])],2),[[it,d.value]]),x[27]||(x[27]=r("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"})],-1))])]),r("div",Ap,[x[32]||(x[32]=r("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 ml-4"},"Sequence Control",-1)),r("div",vp,[r("div",xp,[xe(r("select",{"onUpdate:modelValue":x[4]||(x[4]=U=>g.value=U),class:w(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-pink-500 text-slate-200":"bg-white border-slate-200 focus:border-pink-500 shadow-sm"])},[...x[29]||(x[29]=[r("option",{value:"asc"},"A to Z [ASC]",-1),r("option",{value:"desc"},"Z to A [DESC]",-1)])],2),[[it,g.value]]),x[30]||(x[30]=r("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:scale-y-[-1] transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4","stroke-width":"2"})],-1))]),r("button",{onClick:x[5]||(x[5]=U=>{l.value="",s.value=[],o.value=[],g.value="asc",d.value=10}),class:"h-[56px] px-5 rounded-2xl bg-red-500 hover:bg-red-600 text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-500/20 active:scale-95 border-2 border-transparent",title:"Reset All Filters"},[...x[31]||(x[31]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),r("span",{class:"text-[10px] font-black uppercase tracking-widest hidden sm:inline"},"Reset All",-1)])])])])],2),r("div",yp,[r("div",{class:w(["absolute inset-0 h-[1px] my-auto",e.isDark?"bg-white/5":"bg-slate-200"])},null,2),x[33]||(x[33]=r("div",{class:"absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"},null,-1)),r("div",{class:w(["relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all",e.isDark?"bg-[#020617] border-white/10 text-slate-500":"bg-transparent-50 border-slate-200 text-slate-400"])}," Xtall Versi Indonesia ",2)]),r("main",wp,[(R(!0),T(X,null,de(ce.value,(U,P)=>(R(),T("div",{key:U.code,class:"flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry",style:Pt({animationDelay:P*70+"ms"})},[r("div",Pp,[Pe(U)?(R(),T("div",{key:0,onClick:I=>ye(Pe(U).name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/300 border-white/65 hover:border-cyan-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-cyan-400"])},[x[34]||(x[34]=dn('<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-7a5327d4></div><div class="flex items-center gap-2 mb-2" data-v-7a5327d4><svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" data-v-7a5327d4><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-7a5327d4></path></svg><span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest" data-v-7a5327d4>Previous</span></div>',2)),r("p",{class:w(["text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},O(Pe(U).name),3),x[35]||(x[35]=r("div",{class:"absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🧬",-1))],10,Mp)):(R(),T("div",Dp,[...x[36]||(x[36]=[r("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))]),r("div",Rp,[r("div",{class:w(["absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",U.type==="UPGRADE"?"bg-purple-600":"bg-blue-600"])},null,2),r("div",{class:w(["h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl",e.isDark?"bg-[#0b1226]/90 border-white/80 group-hover:border-white/80":"bg-white border-slate-200 group-hover:border-blue-400"])},[r("div",Sp,[r("div",Cp,[r("div",Ep,[x[37]||(x[37]=r("div",{class:"absolute inset-0 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"},null,-1)),r("div",{class:w(["relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110",e.isDark?"bg-slate-950 border-white/70":"bg-slate-50 border-slate-200"])},[r("img",{src:ne(U),class:"w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]",alt:U.type},null,8,Tp)],2),r("div",{class:w(["absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black",re(U.type)])},O(U.type.charAt(0)),3)]),r("div",_p,[r("div",Kp,[x[38]||(x[38]=r("div",{class:"flex flex-wrap items-center gap-3"},null,-1)),r("h3",{class:w(["text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400",Re(U)])},O(U.name),3)]),r("div",{class:w(["p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]",e.isDark?"bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]":"bg-slate-50 border-slate-100"])},[r("div",Ip,[(R(!0),T(X,null,de(Oe(U.view),(I,L)=>(R(),T("div",{key:L,class:"flex items-center gap-4 group/item"},[I.includes("Dengan")?Se("",!0):(R(),T("div",Bp)),r("p",{class:w(["text-xs md:text-sm font-bold tracking-tight transition-all duration-300",I.includes("Dengan")?"text-green-500 italic":I.includes("-")?"text-red-500":e.isDark?"text-slate-300 group-hover/item:text-white":"text-slate-600 group-hover/item:text-slate-900"])},O(I),3)]))),128))])],2)])])]),r("div",{class:w(["px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4",e.isDark?"bg-white/[0.02] border-white/5":"bg-slate-50 border-slate-100"])},[r("div",Np,[r("div",Op,[r("span",{class:w(["text-[10px] font-black tracking-widest transition-colors",e.isDark?"text-slate-400":"text-slate-500"])}," TYPE XTALL ",2),r("span",{class:w(["text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter",re(U.type)])},O(U.type),3)]),x[39]||(x[39]=r("div",{class:"h-8 w-[1px] bg-white/10 hidden sm:block"},null,-1))]),he(we,{to:"/xtall/"+U.code,class:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"},{default:We(()=>[...x[40]||(x[40]=[He(" Details ",-1)])]),_:1},8,["to"])],2)],2)]),r("div",Lp,[V(U).length?(R(!0),T(X,{key:0},de(V(U),I=>(R(),T("div",{key:I.code,onClick:L=>ye(I.name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/65 hover:border-purple-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-purple-400"])},[x[41]||(x[41]=dn('<div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-600 to-yellow-700 opacity-40 group-hover:opacity-100 transition-opacity" data-v-7a5327d4></div><div class="flex items-center justify-end gap-2 mb-2 text-right" data-v-7a5327d4><span class="text-[9px] font-black uppercase text-purple-500 tracking-widest" data-v-7a5327d4>Next Upgrade</span><svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24" data-v-7a5327d4><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-7a5327d4></path></svg></div>',2)),r("p",{class:w(["text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},O(I.name),3),x[42]||(x[42]=r("div",{class:"absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🚀",-1))],10,Gp))),128)):(R(),T("div",Up,[...x[43]||(x[43]=[r("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))])],4))),128)),oe.value.length===0?(R(),T("div",Hp,[x[44]||(x[44]=dn('<div class="inline-flex relative mb-8" data-v-7a5327d4><div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping" data-v-7a5327d4></div><div class="text-8xl relative" data-v-7a5327d4>🔎</div></div><h2 class="text-3xl font-[1000] uppercase italic tracking-tighter" data-v-7a5327d4>Xtall not found</h2><p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4" data-v-7a5327d4>Search xtall name with correct Indonesian name.</p>',3)),r("button",{onClick:Q,class:"mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"},"Reset")])):Se("",!0),r("div",jp,[je.value>1&&d.value<1e3?(R(),T("nav",Fp,[r("button",{onClick:x[6]||(x[6]=U=>u.value--),disabled:u.value===1,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," « ",8,Vp),r("div",Jp,[(R(!0),T(X,null,de(ct.value,U=>(R(),T(X,{key:U},[U!=="..."?(R(),T("button",{key:0,onClick:P=>u.value=U,class:w(["w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center",u.value===U?"bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1":e.isDark?"bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500":"bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm"])},O(U),11,Wp)):(R(),T("span",Qp,"..."))],64))),128))]),r("button",{onClick:x[7]||(x[7]=U=>u.value++),disabled:u.value===je.value,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," » ",8,qp)])):Se("",!0),d.value<100?(R(),T("button",{key:1,onClick:x[8]||(x[8]=U=>d.value=9999),class:"group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl"},[...x[45]||(x[45]=[r("div",{class:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"},null,-1),r("span",{class:"relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic"},"Explore All",-1)])])):Se("",!0),r("div",zp,[x[46]||(x[46]=r("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1)),r("p",Xp,"Page "+O(u.value)+" of "+O(je.value),1),x[47]||(x[47]=r("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1))])])])]),r("div",$p,[r("div",{class:w(["px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500",e.isDark?"bg-slate-900/80 border-white/10":"bg-white/80 border-slate-200 shadow-2xl"])},[...x[48]||(x[48]=[r("div",{class:"flex items-center gap-4"},[r("div",{class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),r("span",{class:"text-[9px] font-black uppercase tracking-widest opacity-60"},"Versi Nama Indonesia")],-1)])],2)])],2)}}},Yp=Vt(Zp,[["__scopeId","data-v-7a5327d4"]]),Ll=310,Wa={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Qa={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5},Gt=e=>Math.floor(.025*Math.pow(e,4)+2*e),ef=(e,t,n)=>{let a=Math.floor((1-t/100)*Gt(e));for(let i=e+1;i<n;i++)a+=Gt(i);return a},qa=(e,t,n)=>{let a=n,i=(1-t/100)*Gt(e);if(n<i){let l=t/100*Gt(e)+n;return[e,Math.floor(100*l/Gt(e))]}else{a-=i;let l=e+1;for(;Gt(l)<=a;)a-=Gt(l),l+=1;let s=Math.floor(100*a/Gt(l));return[l,s]}},tf={class:"space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4"},nf={class:"flex flex-col items-center gap-6 animate-bounce-slow"},af={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},lf={class:"lg:col-span-2 space-y-6"},rf={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},sf={class:"group"},of={class:"group"},cf={class:"group"},uf={key:0,class:"space-y-8 animate-in slide-in-from-top-2"},df={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},pf={class:"relative group select-container"},ff={class:"relative"},gf=["value"],mf={class:"relative group select-container"},hf={class:"relative"},bf=["value"],kf={class:"flex flex-wrap gap-8 ml-2"},Af={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},vf={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},xf={key:1,class:"space-y-8 animate-in slide-in-from-top-2"},yf={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},wf={class:"relative group select-container"},Pf={class:"relative"},Mf=["value"],Df={class:"lg:col-span-1"},Rf={class:"space-y-6 sticky top-8"},Sf={class:"relative z-10 space-y-8"},Cf={class:"result-item"},Ef={class:"text-2xl font-black tabular-nums tracking-tighter"},Tf={class:"pt-8 border-t border-white/20 result-item"},_f={class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-2"},Kf={class:"flex items-baseline gap-2"},If={class:"text-6xl font-black italic tracking-tighter drop-shadow-lg block"},Bf={class:"text-xl font-bold opacity-70"},Nf={class:"bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item"},Of={class:"text-sm font-black tabular-nums tracking-wide"},Lf={class:"absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text"},Gf={class:"space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll"},Uf={class:"text-[11px] font-black opacity-40"},Hf={class:"text-right"},jf={class:"text-[10px] font-bold opacity-50 ml-1"},Ff={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=le("mq"),n=le(1),a=le(0),i=le(Ll),l=le(!0),s=le(!1),o=Object.keys(Qa),c=le(1),p=le(o.length-1),u=le(Object.keys(Wa)[1]),d=le(1),g=te(()=>{let v=[],h=0;return o.forEach((b,y)=>{b.startsWith("Chapter")?h++:Qa[b]!==""&&v.push({id:y,label:`CH${h} - ${b}`})}),v}),k=te(()=>{const v=Number(n.value)||1,h=Number(a.value)||0,b=Number(i.value)||Ll,y=ef(v,h,b);let S=0;for(let V=c.value;V<=p.value;V++){const Y=Qa[o[V]];typeof Y=="number"&&(S+=Y),o[V].includes("Coenubia")&&!l.value&&(S+=125e5)}const[_,C]=qa(v,h,S);let Q=[];if(s.value&&S>0){let V=v,Y=h;for(let se=1;se<=20;se++){const[j,ee]=qa(V,Y,S);if(Q.push({run:se,lv:j,p:ee}),V=j,Y=ee,V>=b)break}}const ne=(Wa[u.value]||0)*(d.value||0),[re,Pe]=qa(v,h,ne);return{xpNeeded:y,totalMqXP:S,resLv:_,resP:C,diaryRuns:Q,sqLv:re,sqPercent:Pe,sqXP:ne}});return(v,h)=>(R(),T("div",tf,[r("div",nf,[h[11]||(h[11]=r("div",{class:"text-center"},[r("h1",{class:"text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl"}," MQ Calculator "),r("p",{class:"text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse"},"Timi DB System")],-1)),r("div",{class:w(["p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl",e.isDark?"bg-white/5 border-white/10":"bg-slate-200/50 border-slate-300"])},[r("button",{onClick:h[0]||(h[0]=b=>t.value="mq"),class:w(["tab-btn",t.value==="mq"?"tab-active":""])},"Main Quest",2),r("button",{onClick:h[1]||(h[1]=b=>t.value="npc"),class:w(["tab-btn",t.value==="npc"?"tab-active":""])},"NPC Quest",2)],2)]),r("div",af,[r("div",lf,[r("div",{class:w(["p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/60 border-white/40"])},[r("div",rf,[r("div",sf,[h[12]||(h[12]=r("label",{class:"label-text"},"Current Lv",-1)),xe(r("input",{"onUpdate:modelValue":h[2]||(h[2]=b=>n.value=b),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Xe,n.value,void 0,{number:!0}]])]),r("div",of,[h[13]||(h[13]=r("label",{class:"label-text"},"Percent %",-1)),xe(r("input",{"onUpdate:modelValue":h[3]||(h[3]=b=>a.value=b),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Xe,a.value,void 0,{number:!0}]])]),r("div",cf,[h[14]||(h[14]=r("label",{class:"label-text text-pink-500"},"Target Lv",-1)),xe(r("input",{"onUpdate:modelValue":h[4]||(h[4]=b=>i.value=b),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Xe,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(R(),T("div",uf,[r("div",df,[r("div",pf,[h[16]||(h[16]=r("label",{class:"label-text text-indigo-400"},"Start From",-1)),r("div",ff,[xe(r("select",{"onUpdate:modelValue":h[5]||(h[5]=b=>c.value=b),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(R(!0),T(X,null,de(g.value,b=>(R(),T("option",{key:b.id,value:b.id,class:"dropdown-item"},O(b.label),9,gf))),128))],2),[[it,c.value]]),h[15]||(h[15]=r("div",{class:"select-arrow text-indigo-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",mf,[h[18]||(h[18]=r("label",{class:"label-text text-indigo-400"},"End At",-1)),r("div",hf,[xe(r("select",{"onUpdate:modelValue":h[6]||(h[6]=b=>p.value=b),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(R(!0),T(X,null,de(g.value,b=>(R(),T("option",{key:b.id,value:b.id,class:"dropdown-item"},O(b.label),9,bf))),128))],2),[[it,p.value]]),h[17]||(h[17]=r("div",{class:"select-arrow text-indigo-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])]),r("div",kf,[r("label",Af,[xe(r("input",{type:"checkbox","onUpdate:modelValue":h[7]||(h[7]=b=>l.value=b),class:"w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer"},null,512),[[kl,l.value]]),h[19]||(h[19]=r("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),r("label",vf,[xe(r("input",{type:"checkbox","onUpdate:modelValue":h[8]||(h[8]=b=>s.value=b),class:"w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer"},null,512),[[kl,s.value]]),h[20]||(h[20]=r("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])])])):(R(),T("div",xf,[r("div",yf,[r("div",wf,[h[22]||(h[22]=r("label",{class:"label-text text-emerald-400"},"Select Quest",-1)),r("div",Pf,[xe(r("select",{"onUpdate:modelValue":h[9]||(h[9]=b=>u.value=b),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(R(!0),T(X,null,de(Ze(Wa),(b,y)=>(R(),T("option",{key:y,value:y,class:"dropdown-item"},O(y),9,Mf))),128))],2),[[it,u.value]]),h[21]||(h[21]=r("div",{class:"select-arrow text-emerald-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",null,[h[23]||(h[23]=r("label",{class:"label-text text-emerald-400"},"Amount (Stack/Times)",-1)),xe(r("input",{"onUpdate:modelValue":h[10]||(h[10]=b=>d.value=b),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Xe,d.value,void 0,{number:!0}]])])])]))],2)]),r("div",Df,[r("div",Rf,[r("div",{class:w(["p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive",t.value==="mq"?"bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30":"bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30"])},[r("div",Sf,[r("div",Cf,[h[24]||(h[24]=r("p",{class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-1"},"XP Required to Target",-1)),r("h3",Ef,O(k.value.xpNeeded.toLocaleString()),1)]),r("div",Tf,[r("p",_f,O(t.value==="mq"?"Result After 1 Run":"Result After Turn-in"),1),r("div",Kf,[r("span",If," Lv "+O(t.value==="mq"?k.value.resLv:k.value.sqLv),1),r("span",Bf,O(t.value==="mq"?k.value.resP:k.value.sqPercent)+"% ",1)])]),r("div",Nf,[h[25]||(h[25]=r("p",{class:"text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1"},"Total XP Gained",-1)),r("p",Of,O((t.value==="mq"?k.value.totalMqXP:k.value.sqXP).toLocaleString())+" XP ",1)])]),r("div",Lf,O(t.value),1)],2),t.value==="mq"&&s.value&&k.value.diaryRuns.length>0?(R(),T("div",{key:0,class:w(["p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4",e.isDark?"bg-white/5 border-white/10":"bg-white border-slate-200 shadow-lg"])},[h[26]||(h[26]=r("p",{class:"text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2"},"Diary Projection",-1)),r("div",Gf,[(R(!0),T(X,null,de(k.value.diaryRuns,b=>(R(),T("div",{key:b.run,class:"flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors"},[r("span",Uf,"RUN #"+O(b.run),1),r("div",Hf,[r("span",{class:w(["font-black",e.isDark?"text-white":"text-slate-800"])},"Lv "+O(b.lv),3),r("span",jf,O(b.p)+"%",1)])]))),128))])],2)):Se("",!0)])])])]))}},Vf=Vt(Ff,[["__scopeId","data-v-c84703e0"]]),Jf=280,Gl=54,Wf=55,Ul=265,Qf=300,Kt=510,It=277,{floor:_e,min:qf,max:zf}=Math,Xf=(e,t,n,a,i)=>{const l=_e(n*(100+(i||0))/100+(a||0));return(e||0)+_e((t||0)/2)+_e(l/6)},$f=(e,t,n,a,i,l)=>{const s=_e(a*(100+(l||0))/100+(i||0)),o=(50+5*(e||0))/100,c=10+(t||0)-(n||0)+_e(s/10);return qf(100,zf(0,_e(o*c)))},Zf=(e,t,n,a,i)=>{let l=_e((e||0)*(1+(t||0)*.01+(n||0)*.02));const s=i;switch(a){case"Armor":l+=_e(s.VIT/10);break;case"1H Sword":case"Bow":l+=_e((s.DEX+s.STR)/20);break;case"2H Sword":l+=_e(s.STR/10);break;case"Bowgun":l+=_e(s.DEX/10);break;case"Staff":l+=_e(s.INT/10);break;case"Magic Device":l+=_e((s.INT+s.AGI)/20);break;case"Knuckle":l+=_e(s.AGI/10);break;case"Halberd":l+=_e((s.STR+s.AGI)/20);break;case"Katana":l+=_e((s.DEX+s.AGI)/20);break}return l},Yf={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},eg={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},tg={class:"lg:col-span-4 space-y-6 animate-float"},ng={class:"grid grid-cols-2 gap-x-4 gap-y-5"},ag={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},ig=["onUpdate:modelValue"],lg={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},rg={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},sg=["onUpdate:modelValue"],og={class:"lg:col-span-4 space-y-6"},cg={class:"space-y-4"},ug={class:"relative group select-container"},dg={class:"relative overflow-hidden rounded-xl"},pg=["value"],fg={class:"grid grid-cols-2 gap-4"},gg={class:"group"},mg={class:"group"},hg={class:"space-y-3 pt-2"},bg={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},kg=["onUpdate:modelValue"],Ag={class:"lg:col-span-4 space-y-6 animate-float-slow"},vg={class:"flex items-baseline gap-2"},xg={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},yg={class:"flex items-baseline gap-2"},wg={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},Pg={class:"space-y-4"},Mg={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},Dg={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},Rg={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},Sg={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=te(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=bn({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:Jf,createSkill:10,itemDiff:Ul,basePot:Gl,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(p=>i.stats[p]=0),i.craftType==="Armor"?(i.stats.VIT=Kt,i.stats.TEC=It,i.itemDiff=Ul,i.basePot=Gl):(i.itemDiff=Qf,i.basePot=Wf,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=Kt,i.stats.STR=It):i.craftType==="2H Sword"?(i.stats.STR=Kt,i.stats.DEX=It):i.craftType==="Staff"?(i.stats.INT=Kt,i.stats.TEC=It):i.craftType==="Magic Device"?(i.stats.INT=Kt,i.stats.AGI=It):i.craftType==="Knuckle"?(i.stats.AGI=Kt,i.stats.DEX=It):i.craftType==="Halberd"?(i.stats.STR=Kt,i.stats.AGI=It):i.craftType==="Katana"&&(i.stats.DEX=Kt,i.stats.AGI=It))};tn(()=>l());const s=te(()=>Xf(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),o=te(()=>$f(i.createSkill,s.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),c=te(()=>Zf(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(p,u)=>(R(),T("div",Yf,[u[17]||(u[17]=r("div",{class:"text-center py-4 animate-bounce-slow"},[r("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),r("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),r("div",eg,[r("div",tg,[r("div",{class:w(n.value)},[u[3]||(u[3]=r("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),r("div",ng,[(R(!0),T(X,null,de(i.stats,(d,g)=>(R(),T("div",{key:g,class:"transition-all hover:scale-105"},[r("label",ag,O(g),1),xe(r("input",{type:"number","onUpdate:modelValue":k=>i.stats[g]=k,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,ig),[[Xe,i.stats[g],void 0,{number:!0}]])]))),128))]),r("div",lg,[(R(),T(X,null,de([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>r("div",{key:d[0]},[r("label",rg,O(d[1]),1),xe(r("input",{type:"number","onUpdate:modelValue":g=>i[d[0]]=g,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,sg),[[Xe,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),r("div",og,[r("div",{class:w([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=r("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),r("div",cg,[r("div",ug,[u[5]||(u[5]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),r("div",dg,[xe(r("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(R(),T(X,null,de(a,d=>r("option",{key:d,value:d,class:"dropdown-item"},O(d),9,pg)),64))],544),[[it,i.craftType]]),u[4]||(u[4]=r("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",fg,[r("div",gg,[u[6]||(u[6]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),xe(r("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[Xe,i.prof,void 0,{number:!0}]])]),r("div",mg,[u[7]||(u[7]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),xe(r("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[Xe,i.level,void 0,{number:!0}]])])]),r("div",hg,[(R(),T(X,null,de([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>r("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[r("span",bg,O(d[1]),1),xe(r("input",{type:"number","onUpdate:modelValue":g=>i[d[0]]=g,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,kg),[[Xe,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),r("div",Ag,[r("div",{class:w([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=r("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=r("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),r("div",vg,[r("span",{class:w(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",o.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},O(o.value),3),u[9]||(u[9]=r("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),r("div",xg,[r("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:Pt({width:o.value+"%"})},null,4)])],2),r("div",{class:w([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=r("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=r("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),r("div",yg,[r("span",wg,O(c.value),1),u[12]||(u[12]=r("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),r("div",{class:w(n.value)},[r("div",Pg,[r("div",Mg,[r("span",null,"Diff Status: "+O(s.value)+" / "+O(i.itemDiff),1)]),s.value<i.itemDiff?(R(),T("div",Dg,[...u[15]||(u[15]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),r("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(R(),T("div",Rg,[...u[16]||(u[16]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),r("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},Cg=Vt(Sg,[["__scopeId","data-v-676556a4"]]),Eg={class:"fixed inset-0 pointer-events-none z-0"},Tg={key:0,class:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},_g={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"},Kg={key:0,class:"relative z-10 max-w-5xl mx-auto p-6 md:p-20 animate-fade-in"},Ig={class:"grid lg:grid-cols-12 gap-12 items-start"},Bg={class:"lg:col-span-5 space-y-6 animate-slide-right"},Ng=["src"],Og={class:"lg:col-span-7 space-y-8 animate-slide-left"},Lg={class:"flex items-center gap-4"},Gg={class:"text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]"},Ug={class:"space-y-5"},Hg={key:0,class:"mt-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)] group-hover/stat:scale-150 transition-transform flex-shrink-0"},jg={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Fg={class:"text-sm font-bold flex items-center gap-2"},Vg={class:"text-sm font-bold flex items-center gap-2 justify-between"},Jg={key:1,class:"h-screen flex items-center justify-center"},Wg={__name:"XtallDetail",props:["id","isDark"],setup(e){const t=e,n=Ca(),a=te(()=>Ht.find(v=>String(v.code)===String(t.id))),i=v=>{if(!v)return"NORMAL";let h=v,b=0;for(;h.link&&b<10;){const y=Ht.find(S=>String(S.code)===String(h.link));if(y)h=y,b++;else break}return h.type?.toUpperCase()},l=v=>{const h=i(a.value);return v?.toUpperCase()==="UPGRADE"||v?.toUpperCase()==="ENHANCER"?"text-gray-400":{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[h]||"text-cyan-500"},s=v=>{const h=i(a.value);return{NORMAL:"bg-blue-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",ADDITIONAL:"bg-yellow-600",SPECIAL:"bg-cyan-600"}[h]||"bg-cyan-600"},o=v=>{const h=v?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?"bg-purple-600 text-white border-purple-400":({NORMAL:"bg-blue-600",ADDITIONAL:"bg-yellow-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",SPECIAL:"bg-cyan-600"}[h]||"bg-slate-700")+" text-white border-white/20"},c=v=>{const h=v?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?`${i(a.value)} ENHANCER`:h},p=te(()=>a.value?.link?Ht.find(v=>String(v.code)===String(a.value.link)):null),u=te(()=>a.value?Ht.find(v=>String(v.link)===String(a.value.code)):null),d=v=>{n.push(`/xtall/${v}`)};Mt(()=>t.id,()=>{window.scrollTo({top:0,behavior:"smooth"})});const g=v=>v?Array.isArray(v)?v:v.split(/,|\n/).map(h=>h.trim()).filter(h=>h):[],k=v=>{const h=v?.toUpperCase(),b=i(a.value);return h==="UPGRADE"||h==="ENHANCER"?{NORMAL:pa,WEAPON:vs,ARMOR:xs,ADDITIONAL:ys,SPECIAL:ws}[b]||pa:{NORMAL:da,WEAPON:hs,ARMOR:ks,ADDITIONAL:As,SPECIAL:bs}[b]||da};return(v,h)=>(R(),T("div",{class:w(["min-h-screen relative overflow-hidden font-sans transition-all duration-700",e.isDark?"bg-[#020617] text-slate-200":"bg-slate-50 text-slate-900"])},[r("div",Eg,[r("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),e.isDark?(R(),T("div",Tg)):Se("",!0),e.isDark?(R(),T("div",_g)):Se("",!0)]),a.value?(R(),T("div",Kg,[r("button",{onClick:h[0]||(h[0]=b=>v.$router.push("/xtall")),class:"group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2"},[...h[3]||(h[3]=[r("div",{class:"w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"},[r("svg",{class:"w-5 h-5 text-cyan-500 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M15 19l-7-7 7-7","stroke-width":"3"})])],-1),r("span",{class:"text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500"},"Back to Database",-1)])]),r("div",Ig,[r("div",Bg,[r("div",{class:w(["relative aspect-square rounded-[3.5rem] border-4 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 group",e.isDark?"bg-slate-900 border-white/20":"bg-white border-slate-300"])},[r("div",{class:w(["absolute inset-0 opacity-30 blur-3xl animate-pulse transition-colors duration-700",s(a.value.type)])},null,2),r("img",{src:k(a.value.type),class:"relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 animate-float"},null,8,Ng),r("div",{class:w(["absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-2xl whitespace-nowrap transition-all duration-500 group-hover:scale-110",o(a.value.type)])},O(c(a.value.type)),3)],2)]),r("div",Og,[r("div",null,[r("p",{class:w(["text-xs font-black uppercase tracking-[0.4em] mb-2 drop-shadow-sm",l(a.value.name)])},O(c(a.value.type)),3),r("h1",{class:w(["text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4 drop-shadow-2xl transition-all duration-500 brightness-100 saturate-70",l(a.value.type),e.isDark?"[-webkit-text-stroke:1px_white]":"[-webkit-text-stroke:1px_black]"]),style:{maskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)",webkitMaskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)"}},O(a.value.name),3),r("div",Lg,[h[4]||(h[4]=r("div",{class:"h-[3px] w-16 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"},null,-1)),r("p",Gg,"System ID: #"+O(a.value.code),1)])]),r("div",{class:w(["p-8 md:p-12 rounded-[3rem] border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden transition-all hover:border-cyan-500/50",e.isDark?"bg-slate-900/80 border-white/10 shadow-black":"bg-white border-slate-200 shadow-slate-300"])},[h[5]||(h[5]=r("div",{class:"absolute top-0 right-0 p-8 text-8xl opacity-[0.05] grayscale pointer-events-none animate-spin-slow"},"✨",-1)),h[6]||(h[6]=r("h3",{class:"text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-8 flex items-center gap-3"},[r("span",{class:"w-2 h-2 bg-cyan-500 rounded-full animate-ping"}),He(" Status/ Effect ")],-1)),r("div",Ug,[(R(!0),T(X,null,de(g(a.value.view),(b,y)=>(R(),T("div",{key:y,class:"flex items-start gap-4 group/stat animate-fade-in",style:Pt({animationDelay:y*100+"ms"})},[b.includes("Dengan")?Se("",!0):(R(),T("div",Hg)),r("p",{class:w(["text-base md:text-lg font-bold tracking-tight transition-colors",b.includes("Dengan")?"text-green-500 italic":b.includes("-")?"text-red-500":e.isDark?"text-slate-200 group-hover/stat:text-cyan-400":"text-slate-700"])},O(b),3)],4))),128))])],2),r("div",jg,[p.value?(R(),T("div",{key:0,onClick:h[1]||(h[1]=b=>d(p.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-900/20":"bg-white border-slate-200 hover:border-cyan-500 shadow-slate-200"])},[h[8]||(h[8]=r("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Model",-1)),r("p",Fg,[h[7]||(h[7]=r("span",{class:"text-cyan-500 group-hover:-translate-x-2 transition-transform"},"←",-1)),He(" "+O(p.value.name),1)])],2)):Se("",!0),u.value?(R(),T("div",{key:1,onClick:h[2]||(h[2]=b=>d(u.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-purple-500/50 hover:shadow-purple-900/20":"bg-white border-slate-200 hover:border-purple-500 shadow-slate-200"])},[h[10]||(h[10]=r("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Advanced Upgrade",-1)),r("p",Vg,[He(O(u.value.name)+" ",1),h[9]||(h[9]=r("span",{class:"text-purple-500 group-hover:translate-x-2 transition-transform"},"→",-1))])],2)):Se("",!0)])])])])):(R(),T("div",Jg,[...h[11]||(h[11]=[r("div",{class:"relative w-24 h-24"},[r("div",{class:"absolute inset-0 border-4 border-cyan-500/20 rounded-full"}),r("div",{class:"absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"})],-1)])]))],2))}},Qg=Vt(Wg,[["__scopeId","data-v-5b64479f"]]),qg={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF",value:".DEF"},{label:"MDEF",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD",value:"ASPD"},{label:"CSPD",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen",value:"Natural MP Regen"},{label:"Natural HP Regen",value:"Natural HP Regen"},{label:"Attack MP Recovery",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK",value:"Weapon ATK"},{label:"DTE (Elements)",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee",value:"Tambahan Fisik"},{label:"Additional Magic",value:"Tambahan Sihir"},{label:"Antisipasi",value:"Antisipasi"},{label:"Guard Break",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable",value:"Tumble Unavailable"},{label:"Evasion Recharge",value:"Evasion Recharge"},{label:"Refleks",value:"Refleks"},{label:"Recoil",value:"Recoil"}]},Hl={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},zg={class:"max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"},Xg={class:"text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]"},$g={class:"max-w-[1600px] mx-auto space-y-16"},Zg={class:"flex items-center gap-3 mb-8 ml-2"},Yg={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"},em=["onClick"],tm={class:"flex items-start justify-between gap-2 mb-4"},nm={key:0,class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},am={class:"flex gap-1.5"},im=["onUpdate:modelValue"],lm=["onUpdate:modelValue"],rm=["onUpdate:modelValue"],sm={__name:"XtallAdvancedSearch",props:{isDark:Boolean},setup(e){const t=Ca(),n=Ea(),a=bn({stats:{}});tn(()=>{if(n.query.filter)try{const o=JSON.parse(n.query.filter);o?.stats&&(a.stats=o.stats)}catch{console.warn("Invalid filter data")}});function i(){Object.keys(a.stats).forEach(o=>delete a.stats[o])}function l(o){a.stats[o]?delete a.stats[o]:a.stats[o]={sign:"+",op:">=",value:null}}function s(){t.push({name:"xtall",query:{filter:JSON.stringify(a)}})}return(o,c)=>{const p=In("plus");return R(),T("div",{class:w(["p-4 md:p-8 font-sans transition-all duration-700",e.isDark?"text-white":"text-slate-900"])},[r("div",zg,[r("div",null,[r("h1",Xg,[r("span",{class:w(e.isDark?"text-white":"text-black")},"Advanced",2),c[1]||(c[1]=r("br",null,null,-1)),c[2]||(c[2]=r("span",{class:"bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x"}," Search ",-1))])]),r("div",{class:"flex items-center gap-4"},[r("button",{onClick:i,class:"px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all"}," Clear All "),r("button",{onClick:s,class:"group px-10 py-5 bg-orange-500 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(249,115,22,0.3)]"},[...c[3]||(c[3]=[r("span",{class:"text-xs font-[1000] uppercase tracking-[0.2em] text-white"},"Apply Parameters",-1)])])])]),r("div",$g,[(R(!0),T(X,null,de(Ze(qg),(u,d)=>(R(),T("div",{key:d},[r("div",Zg,[r("div",{class:w(["w-2 h-6 rounded-full",Ze(Hl)[d].bg])},null,2),r("h2",{class:w(["text-lg font-[1000] uppercase tracking-[0.3em] italic",Ze(Hl)[d].text])},O(d),3)]),r("div",Yg,[(R(!0),T(X,null,de(u,g=>(R(),T("div",{key:g.value,onClick:k=>l(g.value),class:w(["group/item relative rounded-[2rem] border-2 p-5 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[140px]",a.stats[g.value]?e.isDark?"bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-500/20":"bg-orange-50 border-orange-500":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 hover:border-slate-300 shadow-sm"])},[r("div",tm,[r("span",{class:w(["text-[11px] font-[1000] uppercase leading-tight tracking-wide transition-colors",a.stats[g.value]?e.isDark?"text-white":"text-orange-600":e.isDark?"text-slate-500":"text-slate-400"])},O(g.label),3),r("div",{class:w(["shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-500",a.stats[g.value]?"bg-orange-500 border-orange-400":e.isDark?"bg-white/5 border-white/10":"bg-slate-50 border-slate-200"])},[a.stats[g.value]?(R(),T("svg",nm,[...c[4]||(c[4]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):(R(),Nn(p,{key:1,class:w(["w-4 h-4",e.isDark?"text-white/20":"text-slate-300"])},null,8,["class"]))],2)]),he(ua,{name:"fade"},{default:We(()=>[a.stats[g.value]?(R(),T("div",{key:0,onClick:c[0]||(c[0]=na(()=>{},["stop"])),class:"space-y-2 mt-auto pt-3 border-t border-orange-500/20"},[r("div",am,[xe(r("select",{"onUpdate:modelValue":k=>a.stats[g.value].sign=k,class:w(["flex-1 py-2 rounded-lg text-center font-black text-[10px] outline-none border",e.isDark?"bg-black border-white/10 text-orange-400":"bg-white border-slate-200 text-orange-600"])},[...c[5]||(c[5]=[r("option",{value:"+"},"Stats +",-1),r("option",{value:"-"},"Stats -",-1)])],10,im),[[it,a.stats[g.value].sign]]),xe(r("select",{"onUpdate:modelValue":k=>a.stats[g.value].op=k,class:w(["flex-1 py-2 rounded-lg text-center font-black text-[10px] outline-none border",e.isDark?"bg-black border-white/10 text-cyan-400":"bg-white border-slate-200 text-cyan-600"])},[...c[6]||(c[6]=[r("option",{value:">="},"≥",-1),r("option",{value:"<="},"≤",-1)])],10,lm),[[it,a.stats[g.value].op]])]),xe(r("input",{type:"number","onUpdate:modelValue":k=>a.stats[g.value].value=k,class:w(["w-full py-2 rounded-lg text-center font-black text-[10px] outline-none border",e.isDark?"bg-black border-white/10 text-white":"bg-white border-slate-200 text-black"]),placeholder:"VALUE"},null,10,rm),[[Xe,a.stats[g.value].value,void 0,{number:!0}]])])):Se("",!0)]),_:2},1024)],10,em))),128))])]))),128))])],2)}}},om=Vt(sm,[["__scopeId","data-v-3a37962d"]]),cm=[{path:"/",name:"bag",component:dd},{path:"/mq",name:"mainquest",component:Fd},{path:"/mq-calc",name:"mqcalc",component:Vf},{path:"/bs-calc",name:"bs-calc",component:Cg},{path:"/xtall",name:"xtall",component:Yp},{path:"/xtall/advanced",name:"xtall-advanced",component:om},{path:"/xtall/:id(\\d+)",name:"xtall-detail",component:Qg,props:!0}],um=i0({history:Nu("/toram-vue/"),routes:cm});document.title||(document.title="Timi DB | Toram Online Database");const Ps=zc(b0);Ps.use(um);Ps.mount("#app");window.addEventListener("unhandledrejection",e=>{console.warn("Ignored async listener error:",e.reason)});
