(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function ui(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ae={},on=[],ft=()=>{},Ql=()=>!1,pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),di=e=>e.startsWith("onUpdate:"),Ce=Object.assign,pi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ps=Object.prototype.hasOwnProperty,pe=(e,t)=>Ps.call(e,t),Q=Array.isArray,sn=e=>Hn(e)==="[object Map]",hn=e=>Hn(e)==="[object Set]",Ui=e=>Hn(e)==="[object Date]",X=e=>typeof e=="function",De=e=>typeof e=="string",lt=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",ql=e=>(he(e)||X(e))&&X(e.then)&&X(e.catch),zl=Object.prototype.toString,Hn=e=>zl.call(e),Ms=e=>Hn(e).slice(8,-1),$l=e=>Hn(e)==="[object Object]",gi=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_n=ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ds=/-\w/g,tt=ga(e=>e.replace(Ds,t=>t.slice(1).toUpperCase())),Rs=/\B([A-Z])/g,en=ga(e=>e.replace(Rs,"-$1").toLowerCase()),ma=ga(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ca=ga(e=>e?`on${ma(e)}`:""),Ht=(e,t)=>!Object.is(e,t),Zn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Zl=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},fa=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cs=e=>{const t=De(e)?Number(e):NaN;return isNaN(t)?e:t};let Hi;const ha=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ht(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=De(a)?Bs(a):ht(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(De(e)||he(e))return e}const Ss=/;(?![^(]*\))/g,Es=/:([^]+)/,Is=/\/\*[^]*?\*\//g;function Bs(e){const t={};return e.replace(Is,"").split(Ss).forEach(n=>{if(n){const a=n.split(Es);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function w(e){let t="";if(De(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const a=w(e[n]);a&&(t+=a+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ks=ui(Ts);function Xl(e){return!!e||e===""}function Ns(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=jn(e[a],t[a]);return n}function jn(e,t){if(e===t)return!0;let n=Ui(e),a=Ui(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=lt(e),a=lt(t),n||a)return e===t;if(n=Q(e),a=Q(t),n||a)return n&&a?Ns(e,t):!1;if(n=he(e),a=he(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const s in e){const r=e.hasOwnProperty(s),c=t.hasOwnProperty(s);if(r&&!c||!r&&c||!jn(e[s],t[s]))return!1}}return String(e)===String(t)}function mi(e,t){return e.findIndex(n=>jn(n,t))}const eo=e=>!!(e&&e.__v_isRef===!0),B=e=>De(e)?e:e==null?"":Q(e)||he(e)&&(e.toString===zl||!X(e.toString))?eo(e)?B(e.value):JSON.stringify(e,to,2):String(e),to=(e,t)=>eo(t)?to(e,t.value):sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[Sa(a,l)+" =>"]=i,n),{})}:hn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Sa(n))}:lt(t)?Sa(t):he(t)&&!Q(t)&&!$l(t)?String(t):t,Sa=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Je;class Gs{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){this._on>0&&--this._on===0&&(Je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Os(){return Je}let ke;const Ea=new WeakSet;class no{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||io(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ji(this),lo(this);const t=ke,n=nt;ke=this,nt=!0;try{return this.fn()}finally{oo(this),ke=t,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ai(t);this.deps=this.depsTail=void 0,ji(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ya(this)&&this.run()}get dirty(){return Ya(this)}}let ao=0,wn,Pn;function io(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=wn,wn=e}function fi(){ao++}function hi(){if(--ao>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;wn;){let t=wn;for(wn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function lo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function oo(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),Ai(a),Ls(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function Ya(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(so(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function so(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sn)||(e.globalVersion=Sn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ya(e))))return;e.flags|=2;const t=e.dep,n=ke,a=nt;ke=e,nt=!0;try{lo(e);const i=e.fn(e._value);(t.version===0||Ht(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ke=n,nt=a,oo(e),e.flags&=-3}}function Ai(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)Ai(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ls(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let nt=!0;const ro=[];function Dt(){ro.push(nt),nt=!1}function Rt(){const e=ro.pop();nt=e===void 0?!0:e}function ji(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let Sn=0;class Fs{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!nt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Fs(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=a)}return n}trigger(t){this.version++,Sn++,this.notify(t)}notify(t){fi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hi()}}}function co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)co(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Qa=new WeakMap,Zt=Symbol(""),qa=Symbol(""),En=Symbol("");function Be(e,t,n){if(nt&&ke){let a=Qa.get(e);a||Qa.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new bi),i.map=a,i.key=n),i.track()}}function _t(e,t,n,a,i,l){const s=Qa.get(e);if(!s){Sn++;return}const r=c=>{c&&c.trigger()};if(fi(),t==="clear")s.forEach(r);else{const c=Q(e),p=c&&gi(n);if(c&&n==="length"){const u=Number(a);s.forEach((d,m)=>{(m==="length"||m===En||!lt(m)&&m>=u)&&r(d)})}else switch((n!==void 0||s.has(void 0))&&r(s.get(n)),p&&r(s.get(En)),t){case"add":c?p&&r(s.get("length")):(r(s.get(Zt)),sn(e)&&r(s.get(qa)));break;case"delete":c||(r(s.get(Zt)),sn(e)&&r(s.get(qa)));break;case"set":sn(e)&&r(s.get(Zt));break}}hi()}function nn(e){const t=ce(e);return t===e?t:(Be(t,"iterate",En),et(e)?t:t.map(ot))}function Aa(e){return Be(e=ce(e),"iterate",En),e}function Kt(e,t){return Ct(e)?Xt(e)?pn(ot(t)):pn(t):ot(t)}const Us={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,e=>Kt(this,e))},concat(...e){return nn(this).concat(...e.map(t=>Q(t)?nn(t):t))},entries(){return Ia(this,"entries",e=>(e[1]=Kt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(a=>Kt(this,a)),arguments)},find(e,t){return bt(this,"find",e,t,n=>Kt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>Kt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ba(this,"includes",e)},indexOf(...e){return Ba(this,"indexOf",e)},join(e){return nn(this).join(e)},lastIndexOf(...e){return Ba(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return kn(this,"pop")},push(...e){return kn(this,"push",e)},reduce(e,...t){return Wi(this,"reduce",e,t)},reduceRight(e,...t){return Wi(this,"reduceRight",e,t)},shift(){return kn(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return kn(this,"splice",e)},toReversed(){return nn(this).toReversed()},toSorted(e){return nn(this).toSorted(e)},toSpliced(...e){return nn(this).toSpliced(...e)},unshift(...e){return kn(this,"unshift",e)},values(){return Ia(this,"values",e=>Kt(this,e))}};function Ia(e,t,n){const a=Aa(e),i=a[t]();return a!==e&&!et(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const Hs=Array.prototype;function bt(e,t,n,a,i,l){const s=Aa(e),r=s!==e&&!et(e),c=s[t];if(c!==Hs[t]){const d=c.apply(e,l);return r?ot(d):d}let p=n;s!==e&&(r?p=function(d,m){return n.call(this,Kt(e,d),m,e)}:n.length>2&&(p=function(d,m){return n.call(this,d,m,e)}));const u=c.call(s,p,a);return r&&i?i(u):u}function Wi(e,t,n,a){const i=Aa(e);let l=n;return i!==e&&(et(e)?n.length>3&&(l=function(s,r,c){return n.call(this,s,r,c,e)}):l=function(s,r,c){return n.call(this,s,Kt(e,r),c,e)}),i[t](l,...a)}function Ba(e,t,n){const a=ce(e);Be(a,"iterate",En);const i=a[t](...n);return(i===-1||i===!1)&&yi(n[0])?(n[0]=ce(n[0]),a[t](...n)):i}function kn(e,t,n=[]){Dt(),fi();const a=ce(e)[t].apply(e,n);return hi(),Rt(),a}const js=ui("__proto__,__v_isRef,__isVue"),uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt));function Ws(e){lt(e)||(e=String(e));const t=ce(this);return Be(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?er:ho:l?fo:mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const s=Q(t);if(!i){let c;if(s&&(c=Us[n]))return c;if(n==="hasOwnProperty")return Ws}const r=Reflect.get(t,n,Oe(t)?t:a);if((lt(n)?uo.has(n):js(n))||(i||Be(t,"get",n),l))return r;if(Oe(r)){const c=s&&gi(n)?r:r.value;return i&&he(c)?$a(c):c}return he(r)?i?$a(r):An(r):r}}class go extends po{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const s=Q(t)&&gi(n);if(!this._isShallow){const p=Ct(l);if(!et(a)&&!Ct(a)&&(l=ce(l),a=ce(a)),!s&&Oe(l)&&!Oe(a))return p||(l.value=a),!0}const r=s?Number(n)<t.length:pe(t,n),c=Reflect.set(t,n,a,Oe(t)?t:i);return t===ce(i)&&(r?Ht(a,l)&&_t(t,"set",n,a):_t(t,"add",n,a)),c}deleteProperty(t,n){const a=pe(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&_t(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!lt(n)||!uo.has(n))&&Be(t,"has",n),a}ownKeys(t){return Be(t,"iterate",Q(t)?"length":Zt),Reflect.ownKeys(t)}}class Js extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vs=new go,Ys=new Js,Qs=new go(!0);const za=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function qs(e,t,n){return function(...a){const i=this.__v_raw,l=ce(i),s=sn(l),r=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,p=i[e](...a),u=n?za:t?pn:ot;return!t&&Be(l,"iterate",c?qa:Zt),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:r?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function Qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zs(e,t){const n={get(i){const l=this.__v_raw,s=ce(l),r=ce(i);e||(Ht(i,r)&&Be(s,"get",i),Be(s,"get",r));const{has:c}=Yn(s),p=t?za:e?pn:ot;if(c.call(s,i))return p(l.get(i));if(c.call(s,r))return p(l.get(r));l!==s&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Be(ce(i),"iterate",Zt),i.size},has(i){const l=this.__v_raw,s=ce(l),r=ce(i);return e||(Ht(i,r)&&Be(s,"has",i),Be(s,"has",r)),i===r?l.has(i):l.has(i)||l.has(r)},forEach(i,l){const s=this,r=s.__v_raw,c=ce(r),p=t?za:e?pn:ot;return!e&&Be(c,"iterate",Zt),r.forEach((u,d)=>i.call(l,p(u),p(d),s))}};return Ce(n,e?{add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear")}:{add(i){!t&&!et(i)&&!Ct(i)&&(i=ce(i));const l=ce(this);return Yn(l).has.call(l,i)||(l.add(i),_t(l,"add",i,i)),this},set(i,l){!t&&!et(l)&&!Ct(l)&&(l=ce(l));const s=ce(this),{has:r,get:c}=Yn(s);let p=r.call(s,i);p||(i=ce(i),p=r.call(s,i));const u=c.call(s,i);return s.set(i,l),p?Ht(l,u)&&_t(s,"set",i,l):_t(s,"add",i,l),this},delete(i){const l=ce(this),{has:s,get:r}=Yn(l);let c=s.call(l,i);c||(i=ce(i),c=s.call(l,i)),r&&r.call(l,i);const p=l.delete(i);return c&&_t(l,"delete",i,void 0),p},clear(){const i=ce(this),l=i.size!==0,s=i.clear();return l&&_t(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=qs(i,e,t)}),n}function ki(e,t){const n=zs(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(pe(n,i)&&i in a?n:a,i,l)}const $s={get:ki(!1,!1)},Zs={get:ki(!1,!0)},Xs={get:ki(!0,!1)};const mo=new WeakMap,fo=new WeakMap,ho=new WeakMap,er=new WeakMap;function tr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nr(e){return e.__v_skip||!Object.isExtensible(e)?0:tr(Ms(e))}function An(e){return Ct(e)?e:vi(e,!1,Vs,$s,mo)}function Ao(e){return vi(e,!1,Qs,Zs,fo)}function $a(e){return vi(e,!0,Ys,Xs,ho)}function vi(e,t,n,a,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=nr(e);if(l===0)return e;const s=i.get(e);if(s)return s;const r=new Proxy(e,l===2?a:n);return i.set(e,r),r}function Xt(e){return Ct(e)?Xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function yi(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function ar(e){return!pe(e,"__v_skip")&&Object.isExtensible(e)&&Zl(e,"__v_skip",!0),e}const ot=e=>he(e)?An(e):e,pn=e=>he(e)?$a(e):e;function Oe(e){return e?e.__v_isRef===!0:!1}function le(e){return bo(e,!1)}function ir(e){return bo(e,!0)}function bo(e,t){return Oe(e)?e:new lr(e,t)}class lr{constructor(t,n){this.dep=new bi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||Ct(t);t=a?t:ce(t),Ht(t,n)&&(this._rawValue=t,this._value=a?t:ot(t),this.dep.trigger())}}function Ge(e){return Oe(e)?e.value:e}const or={get:(e,t,n)=>t==="__v_raw"?e:Ge(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function ko(e){return Xt(e)?e:new Proxy(e,or)}class sr{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new bi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return io(this,!0),!0}get value(){const t=this.dep.track();return so(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function rr(e,t,n=!1){let a,i;return X(e)?a=e:(a=e.get,i=e.set),new sr(a,i,n)}const qn={},aa=new WeakMap;let qt;function cr(e,t=!1,n=qt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function ur(e,t,n=Ae){const{immediate:a,deep:i,once:l,scheduler:s,augmentJob:r,call:c}=n,p=b=>i?b:et(b)||i===!1||i===0?wt(b,1):wt(b);let u,d,m,A,y=!1,h=!1;if(Oe(e)?(d=()=>e.value,y=et(e)):Xt(e)?(d=()=>p(e),y=!0):Q(e)?(h=!0,y=e.some(b=>Xt(b)||et(b)),d=()=>e.map(b=>{if(Oe(b))return b.value;if(Xt(b))return p(b);if(X(b))return c?c(b,2):b()})):X(e)?t?d=c?()=>c(e,2):e:d=()=>{if(m){Dt();try{m()}finally{Rt()}}const b=qt;qt=u;try{return c?c(e,3,[A]):e(A)}finally{qt=b}}:d=ft,t&&i){const b=d,H=i===!0?1/0:i;d=()=>wt(b(),H)}const R=Os(),K=()=>{u.stop(),R&&R.active&&pi(R.effects,u)};if(l&&t){const b=t;t=(...H)=>{b(...H),K()}}let _=h?new Array(e.length).fill(qn):qn;const v=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const H=u.run();if(i||y||(h?H.some((ee,oe)=>Ht(ee,_[oe])):Ht(H,_))){m&&m();const ee=qt;qt=u;try{const oe=[H,_===qn?void 0:h&&_[0]===qn?[]:_,A];_=H,c?c(t,3,oe):t(...oe)}finally{qt=ee}}}else u.run()};return r&&r(v),u=new no(d),u.scheduler=s?()=>s(v,!1):v,A=b=>cr(b,!1,u),m=u.onStop=()=>{const b=aa.get(u);if(b){if(c)c(b,4);else for(const H of b)H();aa.delete(u)}},t?a?v(!0):_=u.run():s?s(v.bind(null,!0),!0):u.run(),K.pause=u.pause.bind(u),K.resume=u.resume.bind(u),K.stop=K,K}function wt(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Oe(e))wt(e.value,t,n);else if(Q(e))for(let a=0;a<e.length;a++)wt(e[a],t,n);else if(hn(e)||sn(e))e.forEach(a=>{wt(a,t,n)});else if($l(e)){for(const a in e)wt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&wt(e[a],t,n)}return e}function Wn(e,t,n,a){try{return a?e(...a):e()}catch(i){ba(i,t,n)}}function st(e,t,n,a){if(X(e)){const i=Wn(e,t,n,a);return i&&ql(i)&&i.catch(l=>{ba(l,t,n)}),i}if(Q(e)){const i=[];for(let l=0;l<e.length;l++)i.push(st(e[l],t,n,a));return i}}function ba(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Ae;if(t){let r=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}r=r.parent}if(l){Dt(),Wn(l,null,10,[e,c,p]),Rt();return}}dr(e,n,i,a,s)}function dr(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const He=[];let gt=-1;const rn=[];let Nt=null,an=0;const vo=Promise.resolve();let ia=null;function ka(e){const t=ia||vo;return e?t.then(this?e.bind(this):e):t}function pr(e){let t=gt+1,n=He.length;for(;t<n;){const a=t+n>>>1,i=He[a],l=In(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function xi(e){if(!(e.flags&1)){const t=In(e),n=He[He.length-1];!n||!(e.flags&2)&&t>=In(n)?He.push(e):He.splice(pr(t),0,e),e.flags|=1,yo()}}function yo(){ia||(ia=vo.then(_o))}function gr(e){Q(e)?rn.push(...e):Nt&&e.id===-1?Nt.splice(an+1,0,e):e.flags&1||(rn.push(e),e.flags|=1),yo()}function Ji(e,t,n=gt+1){for(;n<He.length;n++){const a=He[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;He.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function xo(e){if(rn.length){const t=[...new Set(rn)].sort((n,a)=>In(n)-In(a));if(rn.length=0,Nt){Nt.push(...t);return}for(Nt=t,an=0;an<Nt.length;an++){const n=Nt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,an=0}}const In=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _o(e){try{for(gt=0;gt<He.length;gt++){const t=He[gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Wn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;gt<He.length;gt++){const t=He[gt];t&&(t.flags&=-2)}gt=-1,He.length=0,xo(),ia=null,(He.length||rn.length)&&_o()}}let Se=null,wo=null;function la(e){const t=Se;return Se=e,wo=e&&e.type.__scopeId||null,t}function Xe(e,t=Se,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&ca(-1);const l=la(t);let s;try{s=e(...i)}finally{la(l),a._d&&ca(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function ve(e,t){if(Se===null)return e;const n=wa(Se),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,s,r,c=Ae]=t[i];l&&(X(l)&&(l={mounted:l,updated:l}),l.deep&&wt(s),a.push({dir:l,instance:n,value:s,oldValue:void 0,arg:r,modifiers:c}))}return e}function Jt(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let s=0;s<i.length;s++){const r=i[s];l&&(r.oldValue=l[s].value);let c=r.dir[a];c&&(Dt(),st(c,n,8,[e.el,r,e,t]),Rt())}}function Xn(e,t){if(Ne){let n=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===n&&(n=Ne.provides=Object.create(a)),n[e]=t}}function at(e,t,n=!1){const a=ls();if(a||un){let i=un?un._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&X(t)?t.call(a&&a.proxy):t}}const mr=Symbol.for("v-scx"),fr=()=>at(mr);function Pt(e,t,n){return Po(e,t,n)}function Po(e,t,n=Ae){const{immediate:a,deep:i,flush:l,once:s}=n,r=Ce({},n),c=t&&a||!t&&l!=="post";let p;if(Nn){if(l==="sync"){const A=fr();p=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=ft,A.resume=ft,A.pause=ft,A}}const u=Ne;r.call=(A,y,h)=>st(A,u,y,h);let d=!1;l==="post"?r.scheduler=A=>{Qe(A,u&&u.suspense)}:l!=="sync"&&(d=!0,r.scheduler=(A,y)=>{y?A():xi(A)}),r.augmentJob=A=>{t&&(A.flags|=4),d&&(A.flags|=2,u&&(A.id=u.uid,A.i=u))};const m=ur(e,t,r);return Nn&&(p?p.push(m):c&&m()),m}function hr(e,t,n){const a=this.proxy,i=De(e)?e.includes(".")?Mo(a,e):()=>a[e]:e.bind(a,a);let l;X(t)?l=t:(l=t.handler,n=t);const s=Jn(this),r=Po(i,l.bind(a),n);return s(),r}function Mo(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const Ar=Symbol("_vte"),Do=e=>e.__isTeleport,xt=Symbol("_leaveCb"),zn=Symbol("_enterCb");function br(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),No(()=>{e.isUnmounting=!0}),e}const Ze=[Function,Array],Ro={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},Co=e=>{const t=e.subTree;return t.component?Co(t.component):t},kr={name:"BaseTransition",props:Ro,setup(e,{slots:t}){const n=ls(),a=br();return()=>{const i=t.default&&Io(t.default(),!0);if(!i||!i.length)return;const l=So(i),s=ce(e),{mode:r}=s;if(a.isLeaving)return Ta(l);const c=Vi(l);if(!c)return Ta(l);let p=Za(c,s,a,n,d=>p=d);c.type!==Ke&&Bn(c,p);let u=n.subTree&&Vi(n.subTree);if(u&&u.type!==Ke&&!zt(u,c)&&Co(n).type!==Ke){let d=Za(u,s,a,n);if(Bn(u,d),r==="out-in"&&c.type!==Ke)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ta(l);r==="in-out"&&c.type!==Ke?d.delayLeave=(m,A,y)=>{const h=Eo(a,u);h[String(u.key)]=u,m[xt]=()=>{A(),m[xt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{y(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function So(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ke){t=n;break}}return t}const vr=kr;function Eo(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Za(e,t,n,a,i){const{appear:l,mode:s,persisted:r=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:A,onAfterLeave:y,onLeaveCancelled:h,onBeforeAppear:R,onAppear:K,onAfterAppear:_,onAppearCancelled:v}=t,b=String(e.key),H=Eo(n,e),ee=(J,Z)=>{J&&st(J,a,9,Z)},oe=(J,Z)=>{const ne=Z[1];ee(J,Z),Q(J)?J.every(L=>L.length<=1)&&ne():J.length<=1&&ne()},xe={mode:s,persisted:r,beforeEnter(J){let Z=c;if(!n.isMounted)if(l)Z=R||c;else return;J[xt]&&J[xt](!0);const ne=H[b];ne&&zt(e,ne)&&ne.el[xt]&&ne.el[xt](),ee(Z,[J])},enter(J){let Z=p,ne=u,L=d;if(!n.isMounted)if(l)Z=K||p,ne=_||u,L=v||d;else return;let ae=!1;const Pe=J[zn]=Le=>{ae||(ae=!0,Le?ee(L,[J]):ee(ne,[J]),xe.delayedLeave&&xe.delayedLeave(),J[zn]=void 0)};Z?oe(Z,[J,Pe]):Pe()},leave(J,Z){const ne=String(e.key);if(J[zn]&&J[zn](!0),n.isUnmounting)return Z();ee(m,[J]);let L=!1;const ae=J[xt]=Pe=>{L||(L=!0,Z(),Pe?ee(h,[J]):ee(y,[J]),J[xt]=void 0,H[ne]===e&&delete H[ne])};H[ne]=e,A?oe(A,[J,ae]):ae()},clone(J){const Z=Za(J,t,n,a,i);return i&&i(Z),Z}};return xe}function Ta(e){if(va(e))return e=jt(e),e.children=null,e}function Vi(e){if(!va(e))return Do(e.type)&&e.children?So(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&X(n.default))return n.default()}}function Bn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Io(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let s=e[l];const r=n==null?s.key:String(n)+String(s.key!=null?s.key:l);s.type===z?(s.patchFlag&128&&i++,a=a.concat(Io(s.children,t,r))):(t||s.type!==Ke)&&a.push(r!=null?jt(s,{key:r}):s)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Bo(e,t){return X(e)?Ce({name:e.name},t,{setup:e}):e}function To(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const oa=new WeakMap;function Mn(e,t,n,a,i=!1){if(Q(e)){e.forEach((y,h)=>Mn(y,t&&(Q(t)?t[h]:t),n,a,i));return}if(cn(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Mn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?wa(a.component):a.el,s=i?null:l,{i:r,r:c}=e,p=t&&t.r,u=r.refs===Ae?r.refs={}:r.refs,d=r.setupState,m=ce(d),A=d===Ae?Ql:y=>pe(m,y);if(p!=null&&p!==c){if(Yi(t),De(p))u[p]=null,A(p)&&(d[p]=null);else if(Oe(p)){p.value=null;const y=t;y.k&&(u[y.k]=null)}}if(X(c))Wn(c,r,12,[s,u]);else{const y=De(c),h=Oe(c);if(y||h){const R=()=>{if(e.f){const K=y?A(c)?d[c]:u[c]:c.value;if(i)Q(K)&&pi(K,l);else if(Q(K))K.includes(l)||K.push(l);else if(y)u[c]=[l],A(c)&&(d[c]=u[c]);else{const _=[l];c.value=_,e.k&&(u[e.k]=_)}}else y?(u[c]=s,A(c)&&(d[c]=s)):h&&(c.value=s,e.k&&(u[e.k]=s))};if(s){const K=()=>{R(),oa.delete(e)};K.id=-1,oa.set(e,K),Qe(K,n)}else Yi(e),R()}}}function Yi(e){const t=oa.get(e);t&&(t.flags|=8,oa.delete(e))}ha().requestIdleCallback;ha().cancelIdleCallback;const cn=e=>!!e.type.__asyncLoader,va=e=>e.type.__isKeepAlive;function yr(e,t){Ko(e,"a",t)}function xr(e,t){Ko(e,"da",t)}function Ko(e,t,n=Ne){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ya(t,a,n),n){let i=n.parent;for(;i&&i.parent;)va(i.parent.vnode)&&_r(a,t,n,i),i=i.parent}}function _r(e,t,n,a){const i=ya(t,e,a,!0);_i(()=>{pi(a[t],i)},n)}function ya(e,t,n=Ne,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...s)=>{Dt();const r=Jn(n),c=st(t,n,e,s);return r(),Rt(),c});return a?i.unshift(l):i.push(l),l}}const St=e=>(t,n=Ne)=>{(!Nn||e==="sp")&&ya(e,(...a)=>t(...a),n)},wr=St("bm"),tn=St("m"),Pr=St("bu"),Mr=St("u"),No=St("bum"),_i=St("um"),Dr=St("sp"),Rr=St("rtg"),Cr=St("rtc");function Sr(e,t=Ne){ya("ec",e,t)}const Go="components";function sa(e,t){return Lo(Go,e,!0,t)||e}const Oo=Symbol.for("v-ndc");function Er(e){return De(e)?Lo(Go,e,!1)||e:e||Oo}function Lo(e,t,n=!0,a=!1){const i=Se||Ne;if(i){const l=i.type;{const r=hc(l,!1);if(r&&(r===t||r===tt(t)||r===ma(tt(t))))return l}const s=Qi(i[e]||l[e],t)||Qi(i.appContext[e],t);return!s&&a?l:s}}function Qi(e,t){return e&&(e[t]||e[tt(t)]||e[ma(tt(t))])}function ue(e,t,n,a){let i;const l=n,s=Q(e);if(s||De(e)){const r=s&&Xt(e);let c=!1,p=!1;r&&(c=!et(e),p=Ct(e),e=Aa(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(c?p?pn(ot(e[u])):ot(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l)}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,p=r.length;c<p;c++){const u=r[c];i[c]=t(e[u],u,c,l)}}else i=[];return i}function Ir(e,t,n={},a,i){if(Se.ce||Se.parent&&cn(Se.parent)&&Se.parent.ce){const p=Object.keys(n).length>0;return S(),ua(z,null,[ye("slot",n,a)],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),S();const s=l&&Fo(l(n)),r=n.key||s&&s.key,c=ua(z,{key:(r&&!lt(r)?r:`_${t}`)+(!s&&a?"_fb":"")},s||[],s&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function Fo(e){return e.some(t=>Kn(t)?!(t.type===Ke||t.type===z&&!Fo(t.children)):!0)?e:null}const Xa=e=>e?os(e)?wa(e):Xa(e.parent):null,Dn=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xa(e.parent),$root:e=>Xa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ho(e),$forceUpdate:e=>e.f||(e.f=()=>{xi(e.update)}),$nextTick:e=>e.n||(e.n=ka.bind(e.proxy)),$watch:e=>hr.bind(e)}),Ka=(e,t)=>e!==Ae&&!e.__isScriptSetup&&pe(e,t),Br={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:s,type:r,appContext:c}=e;if(t[0]!=="$"){const m=s[t];if(m!==void 0)switch(m){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Ka(a,t))return s[t]=1,a[t];if(i!==Ae&&pe(i,t))return s[t]=2,i[t];if(pe(l,t))return s[t]=3,l[t];if(n!==Ae&&pe(n,t))return s[t]=4,n[t];ei&&(s[t]=0)}}const p=Dn[t];let u,d;if(p)return t==="$attrs"&&Be(e.attrs,"get",""),p(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==Ae&&pe(n,t))return s[t]=4,n[t];if(d=c.config.globalProperties,pe(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Ka(i,t)?(i[t]=n,!0):a!==Ae&&pe(a,t)?(a[t]=n,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:s}},r){let c;return!!(n[r]||e!==Ae&&r[0]!=="$"&&pe(e,r)||Ka(t,r)||pe(l,r)||pe(a,r)||pe(Dn,r)||pe(i.config.globalProperties,r)||(c=s.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qi(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ei=!0;function Tr(e){const t=Ho(e),n=e.proxy,a=e.ctx;ei=!1,t.beforeCreate&&zi(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:s,watch:r,provide:c,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:A,updated:y,activated:h,deactivated:R,beforeDestroy:K,beforeUnmount:_,destroyed:v,unmounted:b,render:H,renderTracked:ee,renderTriggered:oe,errorCaptured:xe,serverPrefetch:J,expose:Z,inheritAttrs:ne,components:L,directives:ae,filters:Pe}=t;if(p&&Kr(p,a,null),s)for(const T in s){const x=s[T];X(x)&&(a[T]=x.bind(n))}if(i){const T=i.call(n,n);he(T)&&(e.data=An(T))}if(ei=!0,l)for(const T in l){const x=l[T],ie=X(x)?x.bind(n,n):X(x.get)?x.get.bind(n,n):ft,fe=!X(x)&&X(x.set)?x.set.bind(n):ft,W=te({get:ie,set:fe});Object.defineProperty(a,T,{enumerable:!0,configurable:!0,get:()=>W.value,set:we=>W.value=we})}if(r)for(const T in r)Uo(r[T],a,n,T);if(c){const T=X(c)?c.call(n):c;Reflect.ownKeys(T).forEach(x=>{Xn(x,T[x])})}u&&zi(u,e,"c");function _e(T,x){Q(x)?x.forEach(ie=>T(ie.bind(n))):x&&T(x.bind(n))}if(_e(wr,d),_e(tn,m),_e(Pr,A),_e(Mr,y),_e(yr,h),_e(xr,R),_e(Sr,xe),_e(Cr,ee),_e(Rr,oe),_e(No,_),_e(_i,b),_e(Dr,J),Q(Z))if(Z.length){const T=e.exposed||(e.exposed={});Z.forEach(x=>{Object.defineProperty(T,x,{get:()=>n[x],set:ie=>n[x]=ie,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===ft&&(e.render=H),ne!=null&&(e.inheritAttrs=ne),L&&(e.components=L),ae&&(e.directives=ae),J&&To(e)}function Kr(e,t,n=ft){Q(e)&&(e=ti(e));for(const a in e){const i=e[a];let l;he(i)?"default"in i?l=at(i.from||a,i.default,!0):l=at(i.from||a):l=at(i),Oe(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:s=>l.value=s}):t[a]=l}}function zi(e,t,n){st(Q(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Uo(e,t,n,a){let i=a.includes(".")?Mo(n,a):()=>n[a];if(De(e)){const l=t[e];X(l)&&Pt(i,l)}else if(X(e))Pt(i,e.bind(n));else if(he(e))if(Q(e))e.forEach(l=>Uo(l,t,n,a));else{const l=X(e.handler)?e.handler.bind(n):t[e.handler];X(l)&&Pt(i,l,e)}}function Ho(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:s}}=e.appContext,r=l.get(t);let c;return r?c=r:!i.length&&!n&&!a?c=t:(c={},i.length&&i.forEach(p=>ra(c,p,s,!0)),ra(c,t,s)),he(t)&&l.set(t,c),c}function ra(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&ra(e,l,n,!0),i&&i.forEach(s=>ra(e,s,n,!0));for(const s in t)if(!(a&&s==="expose")){const r=Nr[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Nr={data:$i,props:Zi,emits:Zi,methods:xn,computed:xn,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:xn,directives:xn,watch:Or,provide:$i,inject:Gr};function $i(e,t){return t?e?function(){return Ce(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function Gr(e,t){return xn(ti(e),ti(t))}function ti(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fe(e,t){return e?[...new Set([].concat(e,t))]:t}function xn(e,t){return e?Ce(Object.create(null),e,t):t}function Zi(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:Ce(Object.create(null),qi(e),qi(t??{})):t}function Or(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const a in t)n[a]=Fe(e[a],t[a]);return n}function jo(){return{app:null,config:{isNativeTag:Ql,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lr=0;function Fr(e,t){return function(a,i=null){X(a)||(a=Ce({},a)),i!=null&&!he(i)&&(i=null);const l=jo(),s=new WeakSet,r=[];let c=!1;const p=l.app={_uid:Lr++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:bc,get config(){return l.config},set config(u){},use(u,...d){return s.has(u)||(u&&X(u.install)?(s.add(u),u.install(p,...d)):X(u)&&(s.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,m){if(!c){const A=p._ceVNode||ye(a,i);return A.appContext=l,m===!0?m="svg":m===!1&&(m=void 0),e(A,u,m),c=!0,p._container=u,u.__vue_app__=p,wa(A.component)}},onUnmount(u){r.push(u)},unmount(){c&&(st(r,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p},runWithContext(u){const d=un;un=p;try{return u()}finally{un=d}}};return p}}let un=null;const Ur=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${en(t)}Modifiers`];function Hr(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||Ae;let i=n;const l=t.startsWith("update:"),s=l&&Ur(a,t.slice(7));s&&(s.trim&&(i=n.map(u=>De(u)?u.trim():u)),s.number&&(i=n.map(fa)));let r,c=a[r=Ca(t)]||a[r=Ca(tt(t))];!c&&l&&(c=a[r=Ca(en(t))]),c&&st(c,e,6,i);const p=a[r+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,st(p,e,6,i)}}const jr=new WeakMap;function Wo(e,t,n=!1){const a=n?jr:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let s={},r=!1;if(!X(e)){const c=p=>{const u=Wo(p,t,!0);u&&(r=!0,Ce(s,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!r?(he(e)&&a.set(e,null),null):(Q(l)?l.forEach(c=>s[c]=null):Ce(s,l),he(e)&&a.set(e,s),s)}function xa(e,t){return!e||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,en(t))||pe(e,t))}function Xi(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:s,attrs:r,emit:c,render:p,renderCache:u,props:d,data:m,setupState:A,ctx:y,inheritAttrs:h}=e,R=la(e);let K,_;try{if(n.shapeFlag&4){const b=i||a,H=b;K=mt(p.call(H,b,u,d,A,m,y)),_=r}else{const b=t;K=mt(b.length>1?b(d,{attrs:r,slots:s,emit:c}):b(d,null)),_=t.props?r:Wr(r)}}catch(b){Rn.length=0,ba(b,e,1),K=ye(Ke)}let v=K;if(_&&h!==!1){const b=Object.keys(_),{shapeFlag:H}=v;b.length&&H&7&&(l&&b.some(di)&&(_=Jr(_,l)),v=jt(v,_,!1,!0))}return n.dirs&&(v=jt(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Bn(v,n.transition),K=v,la(R),K}const Wr=e=>{let t;for(const n in e)(n==="class"||n==="style"||pa(n))&&((t||(t={}))[n]=e[n]);return t},Jr=(e,t)=>{const n={};for(const a in e)(!di(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Vr(e,t,n){const{props:a,children:i,component:l}=e,{props:s,children:r,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?el(a,s,p):!!s;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(s[m]!==a[m]&&!xa(p,m))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:a===s?!1:a?s?el(a,s,p):!0:!!s;return!1}function el(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!xa(n,l))return!0}return!1}function Yr({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const Jo={},Vo=()=>Object.create(Jo),Yo=e=>Object.getPrototypeOf(e)===Jo;function Qr(e,t,n,a=!1){const i={},l=Vo();e.propsDefaults=Object.create(null),Qo(e,t,i,l);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=a?i:Ao(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function qr(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:s}}=e,r=ce(i),[c]=e.propsOptions;let p=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(xa(e.emitsOptions,m))continue;const A=t[m];if(c)if(pe(l,m))A!==l[m]&&(l[m]=A,p=!0);else{const y=tt(m);i[y]=ni(c,r,y,A,e,!1)}else A!==l[m]&&(l[m]=A,p=!0)}}}else{Qo(e,t,i,l)&&(p=!0);let u;for(const d in r)(!t||!pe(t,d)&&((u=en(d))===d||!pe(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ni(c,r,d,void 0,e,!0)):delete i[d]);if(l!==r)for(const d in l)(!t||!pe(t,d))&&(delete l[d],p=!0)}p&&_t(e.attrs,"set","")}function Qo(e,t,n,a){const[i,l]=e.propsOptions;let s=!1,r;if(t)for(let c in t){if(_n(c))continue;const p=t[c];let u;i&&pe(i,u=tt(c))?!l||!l.includes(u)?n[u]=p:(r||(r={}))[u]=p:xa(e.emitsOptions,c)||(!(c in a)||p!==a[c])&&(a[c]=p,s=!0)}if(l){const c=ce(n),p=r||Ae;for(let u=0;u<l.length;u++){const d=l[u];n[d]=ni(i,c,d,p[d],e,!pe(p,d))}}return s}function ni(e,t,n,a,i,l){const s=e[n];if(s!=null){const r=pe(s,"default");if(r&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&X(c)){const{propsDefaults:p}=i;if(n in p)a=p[n];else{const u=Jn(i);a=p[n]=c.call(null,t),u()}}else a=c;i.ce&&i.ce._setProp(n,a)}s[0]&&(l&&!r?a=!1:s[1]&&(a===""||a===en(n))&&(a=!0))}return a}const zr=new WeakMap;function qo(e,t,n=!1){const a=n?zr:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,s={},r=[];let c=!1;if(!X(e)){const u=d=>{c=!0;const[m,A]=qo(d,t,!0);Ce(s,m),A&&r.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!c)return he(e)&&a.set(e,on),on;if(Q(l))for(let u=0;u<l.length;u++){const d=tt(l[u]);tl(d)&&(s[d]=Ae)}else if(l)for(const u in l){const d=tt(u);if(tl(d)){const m=l[u],A=s[d]=Q(m)||X(m)?{type:m}:Ce({},m),y=A.type;let h=!1,R=!0;if(Q(y))for(let K=0;K<y.length;++K){const _=y[K],v=X(_)&&_.name;if(v==="Boolean"){h=!0;break}else v==="String"&&(R=!1)}else h=X(y)&&y.name==="Boolean";A[0]=h,A[1]=R,(h||pe(A,"default"))&&r.push(d)}}const p=[s,r];return he(e)&&a.set(e,p),p}function tl(e){return e[0]!=="$"&&!_n(e)}const wi=e=>e==="_"||e==="_ctx"||e==="$stable",Pi=e=>Q(e)?e.map(mt):[mt(e)],$r=(e,t,n)=>{if(t._n)return t;const a=Xe((...i)=>Pi(t(...i)),n);return a._c=!1,a},zo=(e,t,n)=>{const a=e._ctx;for(const i in e){if(wi(i))continue;const l=e[i];if(X(l))t[i]=$r(i,l,a);else if(l!=null){const s=Pi(l);t[i]=()=>s}}},$o=(e,t)=>{const n=Pi(t);e.slots.default=()=>n},Zo=(e,t,n)=>{for(const a in t)(n||!wi(a))&&(e[a]=t[a])},Zr=(e,t,n)=>{const a=e.slots=Vo();if(e.vnode.shapeFlag&32){const i=t._;i?(Zo(a,t,n),n&&Zl(a,"_",i,!0)):zo(t,a)}else t&&$o(e,t)},Xr=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,s=Ae;if(a.shapeFlag&32){const r=t._;r?n&&r===1?l=!1:Zo(i,t,n):(l=!t.$stable,zo(t,i)),s=t}else t&&($o(e,t),s={default:1});if(l)for(const r in i)!wi(r)&&s[r]==null&&delete i[r]},Qe=ic;function ec(e){return tc(e)}function tc(e,t){const n=ha();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:s,createText:r,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:A=ft,insertStaticContent:y}=e,h=(g,f,k,P=null,C=null,M=null,O=void 0,G=null,N=!!f.dynamicChildren)=>{if(g===f)return;g&&!zt(g,f)&&(P=D(g),we(g,C,M,!0),g=null),f.patchFlag===-2&&(N=!1,f.dynamicChildren=null);const{type:E,ref:q,shapeFlag:U}=f;switch(E){case _a:R(g,f,k,P);break;case Ke:K(g,f,k,P);break;case ea:g==null&&_(f,k,P,O);break;case z:L(g,f,k,P,C,M,O,G,N);break;default:U&1?H(g,f,k,P,C,M,O,G,N):U&6?ae(g,f,k,P,C,M,O,G,N):(U&64||U&128)&&E.process(g,f,k,P,C,M,O,G,N,V)}q!=null&&C?Mn(q,g&&g.ref,M,f||g,!f):q==null&&g&&g.ref!=null&&Mn(g.ref,null,M,g,!0)},R=(g,f,k,P)=>{if(g==null)a(f.el=r(f.children),k,P);else{const C=f.el=g.el;f.children!==g.children&&p(C,f.children)}},K=(g,f,k,P)=>{g==null?a(f.el=c(f.children||""),k,P):f.el=g.el},_=(g,f,k,P)=>{[g.el,g.anchor]=y(g.children,f,k,P,g.el,g.anchor)},v=({el:g,anchor:f},k,P)=>{let C;for(;g&&g!==f;)C=m(g),a(g,k,P),g=C;a(f,k,P)},b=({el:g,anchor:f})=>{let k;for(;g&&g!==f;)k=m(g),i(g),g=k;i(f)},H=(g,f,k,P,C,M,O,G,N)=>{if(f.type==="svg"?O="svg":f.type==="math"&&(O="mathml"),g==null)ee(f,k,P,C,M,O,G,N);else{const E=g.el&&g.el._isVueCE?g.el:null;try{E&&E._beginPatch(),J(g,f,C,M,O,G,N)}finally{E&&E._endPatch()}}},ee=(g,f,k,P,C,M,O,G)=>{let N,E;const{props:q,shapeFlag:U,transition:Y,dirs:$}=g;if(N=g.el=s(g.type,M,q&&q.is,q),U&8?u(N,g.children):U&16&&xe(g.children,N,null,P,C,Na(g,M),O,G),$&&Jt(g,null,P,"created"),oe(N,g,g.scopeId,O,P),q){for(const be in q)be!=="value"&&!_n(be)&&l(N,be,null,q[be],M,P);"value"in q&&l(N,"value",null,q.value,M),(E=q.onVnodeBeforeMount)&&pt(E,P,g)}$&&Jt(g,null,P,"beforeMount");const re=nc(C,Y);re&&Y.beforeEnter(N),a(N,f,k),((E=q&&q.onVnodeMounted)||re||$)&&Qe(()=>{E&&pt(E,P,g),re&&Y.enter(N),$&&Jt(g,null,P,"mounted")},C)},oe=(g,f,k,P,C)=>{if(k&&A(g,k),P)for(let M=0;M<P.length;M++)A(g,P[M]);if(C){let M=C.subTree;if(f===M||ns(M.type)&&(M.ssContent===f||M.ssFallback===f)){const O=C.vnode;oe(g,O,O.scopeId,O.slotScopeIds,C.parent)}}},xe=(g,f,k,P,C,M,O,G,N=0)=>{for(let E=N;E<g.length;E++){const q=g[E]=G?Gt(g[E]):mt(g[E]);h(null,q,f,k,P,C,M,O,G)}},J=(g,f,k,P,C,M,O)=>{const G=f.el=g.el;let{patchFlag:N,dynamicChildren:E,dirs:q}=f;N|=g.patchFlag&16;const U=g.props||Ae,Y=f.props||Ae;let $;if(k&&Vt(k,!1),($=Y.onVnodeBeforeUpdate)&&pt($,k,f,g),q&&Jt(f,g,k,"beforeUpdate"),k&&Vt(k,!0),(U.innerHTML&&Y.innerHTML==null||U.textContent&&Y.textContent==null)&&u(G,""),E?Z(g.dynamicChildren,E,G,k,P,Na(f,C),M):O||x(g,f,G,null,k,P,Na(f,C),M,!1),N>0){if(N&16)ne(G,U,Y,k,C);else if(N&2&&U.class!==Y.class&&l(G,"class",null,Y.class,C),N&4&&l(G,"style",U.style,Y.style,C),N&8){const re=f.dynamicProps;for(let be=0;be<re.length;be++){const me=re[be],je=U[me],We=Y[me];(We!==je||me==="value")&&l(G,me,je,We,C,k)}}N&1&&g.children!==f.children&&u(G,f.children)}else!O&&E==null&&ne(G,U,Y,k,C);(($=Y.onVnodeUpdated)||q)&&Qe(()=>{$&&pt($,k,f,g),q&&Jt(f,g,k,"updated")},P)},Z=(g,f,k,P,C,M,O)=>{for(let G=0;G<f.length;G++){const N=g[G],E=f[G],q=N.el&&(N.type===z||!zt(N,E)||N.shapeFlag&198)?d(N.el):k;h(N,E,q,null,P,C,M,O,!0)}},ne=(g,f,k,P,C)=>{if(f!==k){if(f!==Ae)for(const M in f)!_n(M)&&!(M in k)&&l(g,M,f[M],null,C,P);for(const M in k){if(_n(M))continue;const O=k[M],G=f[M];O!==G&&M!=="value"&&l(g,M,G,O,C,P)}"value"in k&&l(g,"value",f.value,k.value,C)}},L=(g,f,k,P,C,M,O,G,N)=>{const E=f.el=g?g.el:r(""),q=f.anchor=g?g.anchor:r("");let{patchFlag:U,dynamicChildren:Y,slotScopeIds:$}=f;$&&(G=G?G.concat($):$),g==null?(a(E,k,P),a(q,k,P),xe(f.children||[],k,q,C,M,O,G,N)):U>0&&U&64&&Y&&g.dynamicChildren&&g.dynamicChildren.length===Y.length?(Z(g.dynamicChildren,Y,k,C,M,O,G),(f.key!=null||C&&f===C.subTree)&&Xo(g,f,!0)):x(g,f,k,q,C,M,O,G,N)},ae=(g,f,k,P,C,M,O,G,N)=>{f.slotScopeIds=G,g==null?f.shapeFlag&512?C.ctx.activate(f,k,P,O,N):Pe(f,k,P,C,M,O,N):Le(g,f,N)},Pe=(g,f,k,P,C,M,O)=>{const G=g.component=dc(g,P,C);if(va(g)&&(G.ctx.renderer=V),pc(G,!1,O),G.asyncDep){if(C&&C.registerDep(G,_e,O),!g.el){const N=G.subTree=ye(Ke);K(null,N,f,k),g.placeholder=N.el}}else _e(G,g,f,k,C,M,O)},Le=(g,f,k)=>{const P=f.component=g.component;if(Vr(g,f,k))if(P.asyncDep&&!P.asyncResolved){T(P,f,k);return}else P.next=f,P.update();else f.el=g.el,P.vnode=f},_e=(g,f,k,P,C,M,O)=>{const G=()=>{if(g.isMounted){let{next:U,bu:Y,u:$,parent:re,vnode:be}=g;{const ut=es(g);if(ut){U&&(U.el=be.el,T(g,U,O)),ut.asyncDep.then(()=>{g.isUnmounted||G()});return}}let me=U,je;Vt(g,!1),U?(U.el=be.el,T(g,U,O)):U=be,Y&&Zn(Y),(je=U.props&&U.props.onVnodeBeforeUpdate)&&pt(je,re,U,be),Vt(g,!0);const We=Xi(g),ct=g.subTree;g.subTree=We,h(ct,We,d(ct.el),D(ct),g,C,M),U.el=We.el,me===null&&Yr(g,We.el),$&&Qe($,C),(je=U.props&&U.props.onVnodeUpdated)&&Qe(()=>pt(je,re,U,be),C)}else{let U;const{el:Y,props:$}=f,{bm:re,m:be,parent:me,root:je,type:We}=g,ct=cn(f);Vt(g,!1),re&&Zn(re),!ct&&(U=$&&$.onVnodeBeforeMount)&&pt(U,me,f),Vt(g,!0);{je.ce&&je.ce._def.shadowRoot!==!1&&je.ce._injectChildStyle(We);const ut=g.subTree=Xi(g);h(null,ut,k,P,g,C,M),f.el=ut.el}if(be&&Qe(be,C),!ct&&(U=$&&$.onVnodeMounted)){const ut=f;Qe(()=>pt(U,me,ut),C)}(f.shapeFlag&256||me&&cn(me.vnode)&&me.vnode.shapeFlag&256)&&g.a&&Qe(g.a,C),g.isMounted=!0,f=k=P=null}};g.scope.on();const N=g.effect=new no(G);g.scope.off();const E=g.update=N.run.bind(N),q=g.job=N.runIfDirty.bind(N);q.i=g,q.id=g.uid,N.scheduler=()=>xi(q),Vt(g,!0),E()},T=(g,f,k)=>{f.component=g;const P=g.vnode.props;g.vnode=f,g.next=null,qr(g,f.props,P,k),Xr(g,f.children,k),Dt(),Ji(g),Rt()},x=(g,f,k,P,C,M,O,G,N=!1)=>{const E=g&&g.children,q=g?g.shapeFlag:0,U=f.children,{patchFlag:Y,shapeFlag:$}=f;if(Y>0){if(Y&128){fe(E,U,k,P,C,M,O,G,N);return}else if(Y&256){ie(E,U,k,P,C,M,O,G,N);return}}$&8?(q&16&&$e(E,C,M),U!==E&&u(k,U)):q&16?$&16?fe(E,U,k,P,C,M,O,G,N):$e(E,C,M,!0):(q&8&&u(k,""),$&16&&xe(U,k,P,C,M,O,G,N))},ie=(g,f,k,P,C,M,O,G,N)=>{g=g||on,f=f||on;const E=g.length,q=f.length,U=Math.min(E,q);let Y;for(Y=0;Y<U;Y++){const $=f[Y]=N?Gt(f[Y]):mt(f[Y]);h(g[Y],$,k,null,C,M,O,G,N)}E>q?$e(g,C,M,!0,!1,U):xe(f,k,P,C,M,O,G,N,U)},fe=(g,f,k,P,C,M,O,G,N)=>{let E=0;const q=f.length;let U=g.length-1,Y=q-1;for(;E<=U&&E<=Y;){const $=g[E],re=f[E]=N?Gt(f[E]):mt(f[E]);if(zt($,re))h($,re,k,null,C,M,O,G,N);else break;E++}for(;E<=U&&E<=Y;){const $=g[U],re=f[Y]=N?Gt(f[Y]):mt(f[Y]);if(zt($,re))h($,re,k,null,C,M,O,G,N);else break;U--,Y--}if(E>U){if(E<=Y){const $=Y+1,re=$<q?f[$].el:P;for(;E<=Y;)h(null,f[E]=N?Gt(f[E]):mt(f[E]),k,re,C,M,O,G,N),E++}}else if(E>Y)for(;E<=U;)we(g[E],C,M,!0),E++;else{const $=E,re=E,be=new Map;for(E=re;E<=Y;E++){const Ye=f[E]=N?Gt(f[E]):mt(f[E]);Ye.key!=null&&be.set(Ye.key,E)}let me,je=0;const We=Y-re+1;let ct=!1,ut=0;const bn=new Array(We);for(E=0;E<We;E++)bn[E]=0;for(E=$;E<=U;E++){const Ye=g[E];if(je>=We){we(Ye,C,M,!0);continue}let dt;if(Ye.key!=null)dt=be.get(Ye.key);else for(me=re;me<=Y;me++)if(bn[me-re]===0&&zt(Ye,f[me])){dt=me;break}dt===void 0?we(Ye,C,M,!0):(bn[dt-re]=E+1,dt>=ut?ut=dt:ct=!0,h(Ye,f[dt],k,null,C,M,O,G,N),je++)}const Oi=ct?ac(bn):on;for(me=Oi.length-1,E=We-1;E>=0;E--){const Ye=re+E,dt=f[Ye],Li=f[Ye+1],Fi=Ye+1<q?Li.el||ts(Li):P;bn[E]===0?h(null,dt,k,Fi,C,M,O,G,N):ct&&(me<0||E!==Oi[me]?W(dt,k,Fi,2):me--)}}},W=(g,f,k,P,C=null)=>{const{el:M,type:O,transition:G,children:N,shapeFlag:E}=g;if(E&6){W(g.component.subTree,f,k,P);return}if(E&128){g.suspense.move(f,k,P);return}if(E&64){O.move(g,f,k,V);return}if(O===z){a(M,f,k);for(let U=0;U<N.length;U++)W(N[U],f,k,P);a(g.anchor,f,k);return}if(O===ea){v(g,f,k);return}if(P!==2&&E&1&&G)if(P===0)G.beforeEnter(M),a(M,f,k),Qe(()=>G.enter(M),C);else{const{leave:U,delayLeave:Y,afterLeave:$}=G,re=()=>{g.ctx.isUnmounted?i(M):a(M,f,k)},be=()=>{M._isLeaving&&M[xt](!0),U(M,()=>{re(),$&&$()})};Y?Y(M,re,be):be()}else a(M,f,k)},we=(g,f,k,P=!1,C=!1)=>{const{type:M,props:O,ref:G,children:N,dynamicChildren:E,shapeFlag:q,patchFlag:U,dirs:Y,cacheIndex:$}=g;if(U===-2&&(C=!1),G!=null&&(Dt(),Mn(G,null,k,g,!0),Rt()),$!=null&&(f.renderCache[$]=void 0),q&256){f.ctx.deactivate(g);return}const re=q&1&&Y,be=!cn(g);let me;if(be&&(me=O&&O.onVnodeBeforeUnmount)&&pt(me,f,g),q&6)At(g.component,k,P);else{if(q&128){g.suspense.unmount(k,P);return}re&&Jt(g,null,f,"beforeUnmount"),q&64?g.type.remove(g,f,k,V,P):E&&!E.hasOnce&&(M!==z||U>0&&U&64)?$e(E,f,k,!1,!0):(M===z&&U&384||!C&&q&16)&&$e(N,f,k),P&&ge(g)}(be&&(me=O&&O.onVnodeUnmounted)||re)&&Qe(()=>{me&&pt(me,f,g),re&&Jt(g,null,f,"unmounted")},k)},ge=g=>{const{type:f,el:k,anchor:P,transition:C}=g;if(f===z){Ee(k,P);return}if(f===ea){b(g);return}const M=()=>{i(k),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(g.shapeFlag&1&&C&&!C.persisted){const{leave:O,delayLeave:G}=C,N=()=>O(k,M);G?G(g.el,M,N):N()}else M()},Ee=(g,f)=>{let k;for(;g!==f;)k=m(g),i(g),g=k;i(f)},At=(g,f,k)=>{const{bum:P,scope:C,job:M,subTree:O,um:G,m:N,a:E}=g;nl(N),nl(E),P&&Zn(P),C.stop(),M&&(M.flags|=8,we(O,g,f,k)),G&&Qe(G,f),Qe(()=>{g.isUnmounted=!0},f)},$e=(g,f,k,P=!1,C=!1,M=0)=>{for(let O=M;O<g.length;O++)we(g[O],f,k,P,C)},D=g=>{if(g.shapeFlag&6)return D(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const f=m(g.anchor||g.el),k=f&&f[Ar];return k?m(k):f};let j=!1;const F=(g,f,k)=>{let P;g==null?f._vnode&&(we(f._vnode,null,null,!0),P=f._vnode.component):h(f._vnode||null,g,f,null,null,null,k),f._vnode=g,j||(j=!0,Ji(P),xo(),j=!1)},V={p:h,um:we,m:W,r:ge,mt:Pe,mc:xe,pc:x,pbc:Z,n:D,o:e};return{render:F,hydrate:void 0,createApp:Fr(F)}}function Na({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function nc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xo(e,t,n=!1){const a=e.children,i=t.children;if(Q(a)&&Q(i))for(let l=0;l<a.length;l++){const s=a[l];let r=i[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[l]=Gt(i[l]),r.el=s.el),!n&&r.patchFlag!==-2&&Xo(s,r)),r.type===_a&&(r.patchFlag!==-1?r.el=s.el:r.__elIndex=l+(e.type===z?1:0)),r.type===Ke&&!r.el&&(r.el=s.el)}}function ac(e){const t=e.slice(),n=[0];let a,i,l,s,r;const c=e.length;for(a=0;a<c;a++){const p=e[a];if(p!==0){if(i=n[n.length-1],e[i]<p){t[a]=i,n.push(a);continue}for(l=0,s=n.length-1;l<s;)r=l+s>>1,e[n[r]]<p?l=r+1:s=r;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,s=n[l-1];l-- >0;)n[l]=s,s=t[s];return n}function es(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:es(t)}function nl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ts(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ts(t.subTree):null}const ns=e=>e.__isSuspense;function ic(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):gr(e)}const z=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),Rn=[];let ze=null;function S(e=!1){Rn.push(ze=e?null:[])}function lc(){Rn.pop(),ze=Rn[Rn.length-1]||null}let Tn=1;function ca(e,t=!1){Tn+=e,e<0&&ze&&t&&(ze.hasOnce=!0)}function as(e){return e.dynamicChildren=Tn>0?ze||on:null,lc(),Tn>0&&ze&&ze.push(e),e}function I(e,t,n,a,i,l){return as(o(e,t,n,a,i,l,!0))}function ua(e,t,n,a,i){return as(ye(e,t,n,a,i,!0))}function Kn(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const is=({key:e})=>e??null,ta=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||Oe(e)||X(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function o(e,t=null,n=null,a=0,i=null,l=e===z?0:1,s=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&is(t),ref:t&&ta(t),scopeId:wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Se};return r?(Mi(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Tn>0&&!s&&ze&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&ze.push(c),c}const ye=oc;function oc(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Oo)&&(e=Ke),Kn(e)){const r=jt(e,t,!0);return n&&Mi(r,n),Tn>0&&!l&&ze&&(r.shapeFlag&6?ze[ze.indexOf(e)]=r:ze.push(r)),r.patchFlag=-2,r}if(Ac(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:r,style:c}=t;r&&!De(r)&&(t.class=w(r)),he(c)&&(yi(c)&&!Q(c)&&(c=Ce({},c)),t.style=ht(c))}const s=De(e)?1:ns(e)?128:Do(e)?64:he(e)?4:X(e)?2:0;return o(e,t,n,a,i,s,l,!0)}function sc(e){return e?yi(e)||Yo(e)?Ce({},e):e:null}function jt(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:s,children:r,transition:c}=e,p=t?rc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&is(p),ref:t&&t.ref?n&&l?Q(l)?l.concat(ta(t)):[l,ta(t)]:ta(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&Bn(u,c.clone(u)),u}function Ve(e=" ",t=0){return ye(_a,null,e,t)}function dn(e,t){const n=ye(ea,null,e);return n.staticCount=t,n}function Te(e="",t=!1){return t?(S(),ua(Ke,null,e)):ye(Ke,null,e)}function mt(e){return e==null||typeof e=="boolean"?ye(Ke):Q(e)?ye(z,null,e.slice()):Kn(e)?Gt(e):ye(_a,null,String(e))}function Gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Mi(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),Mi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Yo(t)?t._ctx=Se:i===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),a&64?(n=16,t=[Ve(t)]):n=8);e.children=t,e.shapeFlag|=n}function rc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=w([t.class,a.class]));else if(i==="style")t.style=ht([t.style,a.style]);else if(pa(i)){const l=t[i],s=a[i];s&&l!==s&&!(Q(l)&&l.includes(s))&&(t[i]=l?[].concat(l,s):s)}else i!==""&&(t[i]=a[i])}return t}function pt(e,t,n,a=null){st(e,t,7,[n,a])}const cc=jo();let uc=0;function dc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||cc,l={uid:uc++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qo(a,i),emitsOptions:Wo(a,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:a.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Hr.bind(null,l),e.ce&&e.ce(l),l}let Ne=null;const ls=()=>Ne||Se;let da,ai;{const e=ha(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(s=>s(l)):i[0](l)}};da=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),ai=t("__VUE_SSR_SETTERS__",n=>Nn=n)}const Jn=e=>{const t=Ne;return da(e),e.scope.on(),()=>{e.scope.off(),da(t)}},al=()=>{Ne&&Ne.scope.off(),da(null)};function os(e){return e.vnode.shapeFlag&4}let Nn=!1;function pc(e,t=!1,n=!1){t&&ai(t);const{props:a,children:i}=e.vnode,l=os(e);Qr(e,a,l,t),Zr(e,i,n||t);const s=l?gc(e,t):void 0;return t&&ai(!1),s}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Br);const{setup:a}=n;if(a){Dt();const i=e.setupContext=a.length>1?fc(e):null,l=Jn(e),s=Wn(a,e,0,[e.props,i]),r=ql(s);if(Rt(),l(),(r||e.sp)&&!cn(e)&&To(e),r){if(s.then(al,al),t)return s.then(c=>{il(e,c)}).catch(c=>{ba(c,e,0)});e.asyncDep=s}else il(e,s)}else ss(e)}function il(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=ko(t)),ss(e)}function ss(e,t,n){const a=e.type;e.render||(e.render=a.render||ft);{const i=Jn(e);Dt();try{Tr(e)}finally{Rt(),i()}}}const mc={get(e,t){return Be(e,"get",""),e[t]}};function fc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mc),slots:e.slots,emit:e.emit,expose:t}}function wa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ko(ar(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)},has(t,n){return n in t||n in Dn}})):e.proxy}function hc(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function Ac(e){return X(e)&&"__vccOpts"in e}const te=(e,t)=>rr(e,t,Nn);function Di(e,t,n){try{ca(-1);const a=arguments.length;return a===2?he(t)&&!Q(t)?Kn(t)?ye(e,null,[t]):ye(e,t):ye(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Kn(n)&&(n=[n]),ye(e,t,n))}finally{ca(1)}}const bc="3.5.26";let ii;const ll=typeof window<"u"&&window.trustedTypes;if(ll)try{ii=ll.createPolicy("vue",{createHTML:e=>e})}catch{}const rs=ii?e=>ii.createHTML(e):e=>e,kc="http://www.w3.org/2000/svg",vc="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,ol=yt&&yt.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?yt.createElementNS(kc,e):t==="mathml"?yt.createElementNS(vc,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const s=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{ol.innerHTML=rs(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const r=ol.content;if(a==="svg"||a==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Et="transition",vn="animation",Gn=Symbol("_vtc"),cs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xc=Ce({},Ro,cs),_c=e=>(e.displayName="Transition",e.props=xc,e),us=_c((e,{slots:t})=>Di(vr,wc(e),t)),Yt=(e,t=[])=>{Q(e)?e.forEach(n=>n(...t)):e&&e(...t)},sl=e=>e?Q(e)?e.some(t=>t.length>1):e.length>1:!1;function wc(e){const t={};for(const L in e)L in cs||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:p=s,appearToClass:u=r,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=e,y=Pc(i),h=y&&y[0],R=y&&y[1],{onBeforeEnter:K,onEnter:_,onEnterCancelled:v,onLeave:b,onLeaveCancelled:H,onBeforeAppear:ee=K,onAppear:oe=_,onAppearCancelled:xe=v}=t,J=(L,ae,Pe,Le)=>{L._enterCancelled=Le,Qt(L,ae?u:r),Qt(L,ae?p:s),Pe&&Pe()},Z=(L,ae)=>{L._isLeaving=!1,Qt(L,d),Qt(L,A),Qt(L,m),ae&&ae()},ne=L=>(ae,Pe)=>{const Le=L?oe:_,_e=()=>J(ae,L,Pe);Yt(Le,[ae,_e]),rl(()=>{Qt(ae,L?c:l),kt(ae,L?u:r),sl(Le)||cl(ae,a,h,_e)})};return Ce(t,{onBeforeEnter(L){Yt(K,[L]),kt(L,l),kt(L,s)},onBeforeAppear(L){Yt(ee,[L]),kt(L,c),kt(L,p)},onEnter:ne(!1),onAppear:ne(!0),onLeave(L,ae){L._isLeaving=!0;const Pe=()=>Z(L,ae);kt(L,d),L._enterCancelled?(kt(L,m),pl(L)):(pl(L),kt(L,m)),rl(()=>{L._isLeaving&&(Qt(L,d),kt(L,A),sl(b)||cl(L,a,R,Pe))}),Yt(b,[L,Pe])},onEnterCancelled(L){J(L,!1,void 0,!0),Yt(v,[L])},onAppearCancelled(L){J(L,!0,void 0,!0),Yt(xe,[L])},onLeaveCancelled(L){Z(L),Yt(H,[L])}})}function Pc(e){if(e==null)return null;if(he(e))return[Ga(e.enter),Ga(e.leave)];{const t=Ga(e);return[t,t]}}function Ga(e){return Cs(e)}function kt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Gn]||(e[Gn]=new Set)).add(t)}function Qt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Gn];n&&(n.delete(t),n.size||(e[Gn]=void 0))}function rl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Mc=0;function cl(e,t,n,a){const i=e._endId=++Mc,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:s,timeout:r,propCount:c}=Dc(e,t);if(!s)return a();const p=s+"end";let u=0;const d=()=>{e.removeEventListener(p,m),l()},m=A=>{A.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},r+1),e.addEventListener(p,m)}function Dc(e,t){const n=window.getComputedStyle(e),a=y=>(n[y]||"").split(", "),i=a(`${Et}Delay`),l=a(`${Et}Duration`),s=ul(i,l),r=a(`${vn}Delay`),c=a(`${vn}Duration`),p=ul(r,c);let u=null,d=0,m=0;t===Et?s>0&&(u=Et,d=s,m=l.length):t===vn?p>0&&(u=vn,d=p,m=c.length):(d=Math.max(s,p),u=d>0?s>p?Et:vn:null,m=u?u===Et?l.length:c.length:0);const A=u===Et&&/\b(?:transform|all)(?:,|$)/.test(a(`${Et}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:A}}function ul(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>dl(n)+dl(e[a])))}function dl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function pl(e){return(e?e.ownerDocument:document).body.offsetHeight}function Rc(e,t,n){const a=e[Gn];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const gl=Symbol("_vod"),Cc=Symbol("_vsh"),Sc=Symbol(""),Ec=/(?:^|;)\s*display\s*:/;function Ic(e,t,n){const a=e.style,i=De(n);let l=!1;if(n&&!i){if(t)if(De(t))for(const s of t.split(";")){const r=s.slice(0,s.indexOf(":")).trim();n[r]==null&&na(a,r,"")}else for(const s in t)n[s]==null&&na(a,s,"");for(const s in n)s==="display"&&(l=!0),na(a,s,n[s])}else if(i){if(t!==n){const s=a[Sc];s&&(n+=";"+s),a.cssText=n,l=Ec.test(n)}}else t&&e.removeAttribute("style");gl in e&&(e[gl]=l?a.display:"",e[Cc]&&(a.display="none"))}const ml=/\s*!important$/;function na(e,t,n){if(Q(n))n.forEach(a=>na(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Bc(e,t);ml.test(n)?e.setProperty(en(a),n.replace(ml,""),"important"):e[a]=n}}const fl=["Webkit","Moz","ms"],Oa={};function Bc(e,t){const n=Oa[t];if(n)return n;let a=tt(t);if(a!=="filter"&&a in e)return Oa[t]=a;a=ma(a);for(let i=0;i<fl.length;i++){const l=fl[i]+a;if(l in e)return Oa[t]=l}return t}const hl="http://www.w3.org/1999/xlink";function Al(e,t,n,a,i,l=Ks(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hl,t.slice(6,t.length)):e.setAttributeNS(hl,t,n):n==null||l&&!Xl(n)?e.removeAttribute(t):e.setAttribute(t,l?"":lt(n)?String(n):n)}function bl(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?rs(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const r=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Xl(n):n==null&&r==="string"?(n="",s=!0):r==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function Ft(e,t,n,a){e.addEventListener(t,n,a)}function Tc(e,t,n,a){e.removeEventListener(t,n,a)}const kl=Symbol("_vei");function Kc(e,t,n,a,i=null){const l=e[kl]||(e[kl]={}),s=l[t];if(a&&s)s.value=a;else{const[r,c]=Nc(t);if(a){const p=l[t]=Lc(a,i);Ft(e,r,p,c)}else s&&(Tc(e,r,s,c),l[t]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function Nc(e){let t;if(vl.test(e)){t={};let a;for(;a=e.match(vl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let La=0;const Gc=Promise.resolve(),Oc=()=>La||(Gc.then(()=>La=0),La=Date.now());function Lc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;st(Fc(a,n.value),t,5,[a])};return n.value=e,n.attached=Oc(),n}function Fc(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const yl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Uc=(e,t,n,a,i,l)=>{const s=i==="svg";t==="class"?Rc(e,a,s):t==="style"?Ic(e,n,a):pa(t)?di(t)||Kc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hc(e,t,a,s))?(bl(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Al(e,t,a,s,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!De(a))?bl(e,tt(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Al(e,t,a,s))};function Hc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&yl(t)&&X(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return yl(t)&&De(n)?!1:t in e}const gn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>Zn(t,n):t};function jc(e){e.target.composing=!0}function xl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign");function _l(e,t,n){return t&&(e=e.trim()),n&&(e=fa(e)),e}const qe={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[Mt]=gn(i);const l=a||i.props&&i.props.type==="number";Ft(e,t?"change":"input",s=>{s.target.composing||e[Mt](_l(e.value,n,l))}),(n||l)&&Ft(e,"change",()=>{e.value=_l(e.value,n,l)}),t||(Ft(e,"compositionstart",jc),Ft(e,"compositionend",xl),Ft(e,"change",xl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},s){if(e[Mt]=gn(s),e.composing)return;const r=(l||e.type==="number")&&!/^0\d/.test(e.value)?fa(e.value):e.value,c=t??"";r!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===c)||(e.value=c))}},wl={deep:!0,created(e,t,n){e[Mt]=gn(n),Ft(e,"change",()=>{const a=e._modelValue,i=On(e),l=e.checked,s=e[Mt];if(Q(a)){const r=mi(a,i),c=r!==-1;if(l&&!c)s(a.concat(i));else if(!l&&c){const p=[...a];p.splice(r,1),s(p)}}else if(hn(a)){const r=new Set(a);l?r.add(i):r.delete(i),s(r)}else s(ds(e,l))})},mounted:Pl,beforeUpdate(e,t,n){e[Mt]=gn(n),Pl(e,t,n)}};function Pl(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(Q(t))i=mi(t,a.props.value)>-1;else if(hn(t))i=t.has(a.props.value);else{if(t===n)return;i=jn(t,ds(e,!0))}e.checked!==i&&(e.checked=i)}const it={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=hn(t);Ft(e,"change",()=>{const l=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?fa(On(s)):On(s));e[Mt](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,ka(()=>{e._assigning=!1})}),e[Mt]=gn(a)},mounted(e,{value:t}){Ml(e,t)},beforeUpdate(e,t,n){e[Mt]=gn(n)},updated(e,{value:t}){e._assigning||Ml(e,t)}};function Ml(e,t){const n=e.multiple,a=Q(t);if(!(n&&!a&&!hn(t))){for(let i=0,l=e.options.length;i<l;i++){const s=e.options[i],r=On(s);if(n)if(a){const c=typeof r;c==="string"||c==="number"?s.selected=t.some(p=>String(p)===String(r)):s.selected=mi(t,r)>-1}else s.selected=t.has(r);else if(jn(On(s),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function On(e){return"_value"in e?e._value:e.value}function ds(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Wc=["ctrl","shift","alt","meta"],Jc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Wc.some(n=>e[`${n}Key`]&&!t.includes(n))},Vc=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let s=0;s<t.length;s++){const r=Jc[t[s]];if(r&&r(i,t))return}return e(i,...l)}))},Yc=Ce({patchProp:Uc},yc);let Dl;function Qc(){return Dl||(Dl=ec(Yc))}const qc=((...e)=>{const t=Qc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=$c(a);if(!i)return;const l=t._component;!X(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,zc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t});function zc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $c(e){return De(e)?document.querySelector(e):e}const Pa="/toram-vue/images/logo.png";const ln=typeof document<"u";function ps(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ps(e.default)}const de=Object.assign;function Fa(e,t){const n={};for(const a in t){const i=t[a];n[a]=rt(i)?i.map(e):e(i)}return n}const Cn=()=>{},rt=Array.isArray;function Rl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const gs=/#/g,Xc=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,ms=/\+/g,au=/%5B/g,iu=/%5D/g,fs=/%5E/g,lu=/%60/g,hs=/%7B/g,ou=/%7C/g,As=/%7D/g,su=/%20/g;function Ri(e){return e==null?"":encodeURI(""+e).replace(ou,"|").replace(au,"[").replace(iu,"]")}function ru(e){return Ri(e).replace(hs,"{").replace(As,"}").replace(fs,"^")}function li(e){return Ri(e).replace(ms,"%2B").replace(su,"+").replace(gs,"%23").replace(Xc,"%26").replace(lu,"`").replace(hs,"{").replace(As,"}").replace(fs,"^")}function cu(e){return li(e).replace(tu,"%3D")}function uu(e){return Ri(e).replace(gs,"%23").replace(nu,"%3F")}function du(e){return uu(e).replace(eu,"%2F")}function Ln(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pu=/\/$/,gu=e=>e.replace(pu,"");function Ua(e,t,n="/"){let a,i={},l="",s="";const r=t.indexOf("#");let c=t.indexOf("?");return c=r>=0&&c>r?-1:c,c>=0&&(a=t.slice(0,c),l=t.slice(c,r>0?r:t.length),i=e(l.slice(1))),r>=0&&(a=a||t.slice(0,r),s=t.slice(r,t.length)),a=Au(a??t,n),{fullPath:a+l+s,path:a,query:i,hash:Ln(s)}}function mu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Cl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fu(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&mn(t.matched[a],n.matched[i])&&bs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return rt(e)?Sl(e,t):rt(t)?Sl(t,e):e?.valueOf()===t?.valueOf()}function Sl(e,t){return rt(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Au(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,s,r;for(s=0;s<a.length;s++)if(r=a[s],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(s).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let oi=(function(e){return e.pop="pop",e.push="push",e})({}),Ha=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function bu(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),gu(e)}const ku=/^[^#]+#/;function vu(e,t){return e.replace(ku,"#")+t}function yu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function xu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=yu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function El(e,t){return(history.state?history.state.position-t:-1)+e}const si=new Map;function _u(e,t){si.set(e,t)}function wu(e){const t=si.get(e);return si.delete(e),t}function Pu(e){return typeof e=="string"||e&&typeof e=="object"}function ks(e){return typeof e=="string"||typeof e=="symbol"}let Me=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const vs=Symbol("");Me.MATCHER_NOT_FOUND+"",Me.NAVIGATION_GUARD_REDIRECT+"",Me.NAVIGATION_ABORTED+"",Me.NAVIGATION_CANCELLED+"",Me.NAVIGATION_DUPLICATED+"";function fn(e,t){return de(new Error,{type:e,[vs]:!0},t)}function vt(e,t){return e instanceof Error&&vs in e&&(t==null||!!(e.type&t))}const Mu=["params","query","hash"];function Du(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Mu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Ru(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(ms," "),l=i.indexOf("="),s=Ln(l<0?i:i.slice(0,l)),r=l<0?null:Ln(i.slice(l+1));if(s in t){let c=t[s];rt(c)||(c=t[s]=[c]),c.push(r)}else t[s]=r}return t}function Il(e){let t="";for(let n in e){const a=e[n];if(n=cu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(rt(a)?a.map(i=>i&&li(i)):[a&&li(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Cu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=rt(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const Su=Symbol(""),Bl=Symbol(""),Da=Symbol(""),Ci=Symbol(""),ri=Symbol("");function yn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ot(e,t,n,a,i,l=s=>s()){const s=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const p=m=>{m===!1?c(fn(Me.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):Pu(m)?c(fn(Me.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(s&&a.enterCallbacks[i]===s&&typeof m=="function"&&s.push(m),r())},u=l(()=>e.call(a&&a.instances[i],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(m=>c(m))})}function ja(e,t,n,a,i=l=>l()){const l=[];for(const s of e)for(const r in s.components){let c=s.components[r];if(!(t!=="beforeRouteEnter"&&!s.instances[r]))if(ps(c)){const p=(c.__vccOpts||c)[t];p&&l.push(Ot(p,n,a,s,r,i))}else{let p=c();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${r}" at "${s.path}"`);const d=Zc(u)?u.default:u;s.mods[r]=u,s.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&Ot(m,n,a,s,r,i)()}))}}return l}function Eu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let s=0;s<l;s++){const r=t.matched[s];r&&(e.matched.find(p=>mn(p,r))?a.push(r):n.push(r));const c=e.matched[s];c&&(t.matched.find(p=>mn(p,c))||i.push(c))}return[n,a,i]}let Iu=()=>location.protocol+"//"+location.host;function ys(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let s=i.includes(e.slice(l))?e.slice(l).length:1,r=i.slice(s);return r[0]!=="/"&&(r="/"+r),Cl(r,"")}return Cl(n,e)+a+i}function Bu(e,t,n,a){let i=[],l=[],s=null;const r=({state:m})=>{const A=ys(e,location),y=n.value,h=t.value;let R=0;if(m){if(n.value=A,t.value=m,s&&s===y){s=null;return}R=h?m.position-h.position:0}else a(A);i.forEach(K=>{K(n.value,y,{delta:R,type:oi.pop,direction:R?R>0?Ha.forward:Ha.back:Ha.unknown})})};function c(){s=n.value}function p(m){i.push(m);const A=()=>{const y=i.indexOf(m);y>-1&&i.splice(y,1)};return l.push(A),A}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(de({},m.state,{scroll:Ma()}),"")}}function d(){for(const m of l)m();l=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Tl(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?Ma():null}}function Tu(e){const{history:t,location:n}=window,a={value:ys(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,p,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Iu()+e+c;try{t[u?"replaceState":"pushState"](p,"",m),i.value=p}catch(A){console.error(A),n[u?"replace":"assign"](m)}}function s(c,p){l(c,de({},t.state,Tl(i.value.back,c,i.value.forward,!0),p,{position:i.value.position}),!0),a.value=c}function r(c,p){const u=de({},i.value,t.state,{forward:c,scroll:Ma()});l(u.current,u,!0),l(c,de({},Tl(a.value,c,null),{position:u.position+1},p),!1),a.value=c}return{location:a,state:i,push:r,replace:s}}function Ku(e){e=bu(e);const t=Tu(e),n=Bu(e,t.state,t.location,t.replace);function a(l,s=!0){s||n.pauseListeners(),history.go(l)}const i=de({location:"",base:e,go:a,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ku(e)}let $t=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Re=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Re||{});const Gu={type:$t.Static,value:""},Ou=/[a-zA-Z0-9_]/;function Lu(e){if(!e)return[[]];if(e==="/")return[[Gu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(A){throw new Error(`ERR (${n})/"${p}": ${A}`)}let n=Re.Static,a=n;const i=[];let l;function s(){l&&i.push(l),l=[]}let r=0,c,p="",u="";function d(){p&&(n===Re.Static?l.push({type:$t.Static,value:p}):n===Re.Param||n===Re.ParamRegExp||n===Re.ParamRegExpEnd?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:$t.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==Re.ParamRegExp){a=n,n=Re.EscapeNext;continue}switch(n){case Re.Static:c==="/"?(p&&d(),s()):c===":"?(d(),n=Re.Param):m();break;case Re.EscapeNext:m(),n=a;break;case Re.Param:c==="("?n=Re.ParamRegExp:Ou.test(c)?m():(d(),n=Re.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case Re.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=Re.ParamRegExpEnd:u+=c;break;case Re.ParamRegExpEnd:d(),n=Re.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--,u="";break;default:t("Unknown state");break}}return n===Re.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),s(),i}const Kl="[^/]+?",Fu={sensitive:!1,strict:!1,start:!0,end:!0};var Ue=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ue||{});const Uu=/[.+*?^${}()[\]/\\]/g;function Hu(e,t){const n=de({},Fu,t),a=[];let i=n.start?"^":"";const l=[];for(const p of e){const u=p.length?[]:[Ue.Root];n.strict&&!p.length&&(i+="/");for(let d=0;d<p.length;d++){const m=p[d];let A=Ue.Segment+(n.sensitive?Ue.BonusCaseSensitive:0);if(m.type===$t.Static)d||(i+="/"),i+=m.value.replace(Uu,"\\$&"),A+=Ue.Static;else if(m.type===$t.Param){const{value:y,repeatable:h,optional:R,regexp:K}=m;l.push({name:y,repeatable:h,optional:R});const _=K||Kl;if(_!==Kl){A+=Ue.BonusCustomRegExp;try{`${_}`}catch(b){throw new Error(`Invalid custom RegExp for param "${y}" (${_}): `+b.message)}}let v=h?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(v=R&&p.length<2?`(?:/${v})`:"/"+v),R&&(v+="?"),i+=v,A+=Ue.Dynamic,R&&(A+=Ue.BonusOptional),h&&(A+=Ue.BonusRepeatable),_===".*"&&(A+=Ue.BonusWildcard)}u.push(A)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=Ue.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function r(p){const u=p.match(s),d={};if(!u)return null;for(let m=1;m<u.length;m++){const A=u[m]||"",y=l[m-1];d[y.name]=A&&y.repeatable?A.split("/"):A}return d}function c(p){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const A of m)if(A.type===$t.Static)u+=A.value;else if(A.type===$t.Param){const{value:y,repeatable:h,optional:R}=A,K=y in p?p[y]:"";if(rt(K)&&!h)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const _=rt(K)?K.join("/"):K;if(!_)if(R)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=_}}return u||"/"}return{re:s,score:a,keys:l,parse:r,stringify:c}}function ju(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ue.Static+Ue.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ue.Static+Ue.Segment?1:-1:0}function xs(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=ju(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(Nl(a))return 1;if(Nl(i))return-1}return i.length-a.length}function Nl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wu={strict:!1,end:!0,sensitive:!1};function Ju(e,t,n){const a=Hu(Lu(e.path),n),i=de(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Vu(e,t){const n=[],a=new Map;t=Rl(Wu,t);function i(d){return a.get(d)}function l(d,m,A){const y=!A,h=Ol(d);h.aliasOf=A&&A.record;const R=Rl(t,d),K=[h];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of b)K.push(Ol(de({},h,{components:A?A.record.components:h.components,path:H,aliasOf:A?A.record:h})))}let _,v;for(const b of K){const{path:H}=b;if(m&&H[0]!=="/"){const ee=m.record.path,oe=ee[ee.length-1]==="/"?"":"/";b.path=m.record.path+(H&&oe+H)}if(_=Ju(b,m,R),A?A.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),y&&d.name&&!Ll(_)&&s(d.name)),_s(_)&&c(_),h.children){const ee=h.children;for(let oe=0;oe<ee.length;oe++)l(ee[oe],_,A&&A.children[oe])}A=A||_}return v?()=>{s(v)}:Cn}function s(d){if(ks(d)){const m=a.get(d);m&&(a.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(s),m.alias.forEach(s))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function r(){return n}function c(d){const m=qu(d,n);n.splice(m,0,d),d.record.name&&!Ll(d)&&a.set(d.record.name,d)}function p(d,m){let A,y={},h,R;if("name"in d&&d.name){if(A=a.get(d.name),!A)throw fn(Me.MATCHER_NOT_FOUND,{location:d});R=A.record.name,y=de(Gl(m.params,A.keys.filter(v=>!v.optional).concat(A.parent?A.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),d.params&&Gl(d.params,A.keys.map(v=>v.name))),h=A.stringify(y)}else if(d.path!=null)h=d.path,A=n.find(v=>v.re.test(h)),A&&(y=A.parse(h),R=A.record.name);else{if(A=m.name?a.get(m.name):n.find(v=>v.re.test(m.path)),!A)throw fn(Me.MATCHER_NOT_FOUND,{location:d,currentLocation:m});R=A.record.name,y=de({},m.params,d.params),h=A.stringify(y)}const K=[];let _=A;for(;_;)K.unshift(_.record),_=_.parent;return{name:R,path:h,params:y,matched:K,meta:Qu(K)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:p,removeRoute:s,clearRoutes:u,getRoutes:r,getRecordMatcher:i}}function Gl(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Ol(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Yu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Yu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Ll(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qu(e){return e.reduce((t,n)=>de(t,n.meta),{})}function qu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;xs(e,t[l])<0?a=l:n=l+1}const i=zu(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function zu(e){let t=e;for(;t=t.parent;)if(_s(t)&&xs(e,t)===0)return t}function _s({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Fl(e){const t=at(Da),n=at(Ci),a=te(()=>{const c=Ge(e.to);return t.resolve(c)}),i=te(()=>{const{matched:c}=a.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(mn.bind(null,u));if(m>-1)return m;const A=Ul(c[p-2]);return p>1&&Ul(u)===A&&d[d.length-1].path!==A?d.findIndex(mn.bind(null,c[p-2])):m}),l=te(()=>i.value>-1&&td(n.params,a.value.params)),s=te(()=>i.value>-1&&i.value===n.matched.length-1&&bs(n.params,a.value.params));function r(c={}){if(ed(c)){const p=t[Ge(e.replace)?"replace":"push"](Ge(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:te(()=>a.value.href),isActive:l,isExactActive:s,navigate:r}}function $u(e){return e.length===1?e[0]:e}const Zu=Bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Fl,setup(e,{slots:t}){const n=An(Fl(e)),{options:a}=at(Da),i=te(()=>({[Hl(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Hl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&$u(t.default(n));return e.custom?l:Di("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),Xu=Zu;function ed(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function td(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!rt(i)||i.length!==a.length||a.some((l,s)=>l.valueOf()!==i[s].valueOf()))return!1}return!0}function Ul(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hl=(e,t,n)=>e??t??n,nd=Bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=at(ri),i=te(()=>e.route||a.value),l=at(Bl,0),s=te(()=>{let p=Ge(l);const{matched:u}=i.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),r=te(()=>i.value.matched[s.value]);Xn(Bl,te(()=>s.value+1)),Xn(Su,r),Xn(ri,i);const c=le();return Pt(()=>[c.value,r.value,e.name],([p,u,d],[m,A,y])=>{u&&(u.instances[d]=p,A&&A!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=A.leaveGuards),u.updateGuards.size||(u.updateGuards=A.updateGuards))),p&&u&&(!A||!mn(u,A)||!m)&&(u.enterCallbacks[d]||[]).forEach(h=>h(p))},{flush:"post"}),()=>{const p=i.value,u=e.name,d=r.value,m=d&&d.components[u];if(!m)return jl(n.default,{Component:m,route:p});const A=d.props[u],y=A?A===!0?p.params:typeof A=="function"?A(p):A:null,R=Di(m,de({},y,t,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return jl(n.default,{Component:R,route:p})||R}}});function jl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ad=nd;function id(e){const t=Vu(e.routes,e),n=e.parseQuery||Ru,a=e.stringifyQuery||Il,i=e.history,l=yn(),s=yn(),r=yn(),c=ir(It);let p=It;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,D=>""+D),d=Fa.bind(null,du),m=Fa.bind(null,Ln);function A(D,j){let F,V;return ks(D)?(F=t.getRecordMatcher(D),V=j):V=D,t.addRoute(V,F)}function y(D){const j=t.getRecordMatcher(D);j&&t.removeRoute(j)}function h(){return t.getRoutes().map(D=>D.record)}function R(D){return!!t.getRecordMatcher(D)}function K(D,j){if(j=de({},j||c.value),typeof D=="string"){const k=Ua(n,D,j.path),P=t.resolve({path:k.path},j),C=i.createHref(k.fullPath);return de(k,P,{params:m(P.params),hash:Ln(k.hash),redirectedFrom:void 0,href:C})}let F;if(D.path!=null)F=de({},D,{path:Ua(n,D.path,j.path).path});else{const k=de({},D.params);for(const P in k)k[P]==null&&delete k[P];F=de({},D,{params:d(k)}),j.params=d(j.params)}const V=t.resolve(F,j),se=D.hash||"";V.params=u(m(V.params));const g=mu(a,de({},D,{hash:ru(se),path:V.path})),f=i.createHref(g);return de({fullPath:g,hash:se,query:a===Il?Cu(D.query):D.query||{}},V,{redirectedFrom:void 0,href:f})}function _(D){return typeof D=="string"?Ua(n,D,c.value.path):de({},D)}function v(D,j){if(p!==D)return fn(Me.NAVIGATION_CANCELLED,{from:j,to:D})}function b(D){return oe(D)}function H(D){return b(de(_(D),{replace:!0}))}function ee(D,j){const F=D.matched[D.matched.length-1];if(F&&F.redirect){const{redirect:V}=F;let se=typeof V=="function"?V(D,j):V;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=_(se):{path:se},se.params={}),de({query:D.query,hash:D.hash,params:se.path!=null?{}:D.params},se)}}function oe(D,j){const F=p=K(D),V=c.value,se=D.state,g=D.force,f=D.replace===!0,k=ee(F,V);if(k)return oe(de(_(k),{state:typeof k=="object"?de({},se,k.state):se,force:g,replace:f}),j||F);const P=F;P.redirectedFrom=j;let C;return!g&&fu(a,V,F)&&(C=fn(Me.NAVIGATION_DUPLICATED,{to:P,from:V}),W(V,V,!0,!1)),(C?Promise.resolve(C):Z(P,V)).catch(M=>vt(M)?vt(M,Me.NAVIGATION_GUARD_REDIRECT)?M:fe(M):x(M,P,V)).then(M=>{if(M){if(vt(M,Me.NAVIGATION_GUARD_REDIRECT))return oe(de({replace:f},_(M.to),{state:typeof M.to=="object"?de({},se,M.to.state):se,force:g}),j||P)}else M=L(P,V,!0,f,se);return ne(P,V,M),M})}function xe(D,j){const F=v(D,j);return F?Promise.reject(F):Promise.resolve()}function J(D){const j=Ee.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(D):D()}function Z(D,j){let F;const[V,se,g]=Eu(D,j);F=ja(V.reverse(),"beforeRouteLeave",D,j);for(const k of V)k.leaveGuards.forEach(P=>{F.push(Ot(P,D,j))});const f=xe.bind(null,D,j);return F.push(f),$e(F).then(()=>{F=[];for(const k of l.list())F.push(Ot(k,D,j));return F.push(f),$e(F)}).then(()=>{F=ja(se,"beforeRouteUpdate",D,j);for(const k of se)k.updateGuards.forEach(P=>{F.push(Ot(P,D,j))});return F.push(f),$e(F)}).then(()=>{F=[];for(const k of g)if(k.beforeEnter)if(rt(k.beforeEnter))for(const P of k.beforeEnter)F.push(Ot(P,D,j));else F.push(Ot(k.beforeEnter,D,j));return F.push(f),$e(F)}).then(()=>(D.matched.forEach(k=>k.enterCallbacks={}),F=ja(g,"beforeRouteEnter",D,j,J),F.push(f),$e(F))).then(()=>{F=[];for(const k of s.list())F.push(Ot(k,D,j));return F.push(f),$e(F)}).catch(k=>vt(k,Me.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function ne(D,j,F){r.list().forEach(V=>J(()=>V(D,j,F)))}function L(D,j,F,V,se){const g=v(D,j);if(g)return g;const f=j===It,k=ln?history.state:{};F&&(V||f?i.replace(D.fullPath,de({scroll:f&&k&&k.scroll},se)):i.push(D.fullPath,se)),c.value=D,W(D,j,F,f),fe()}let ae;function Pe(){ae||(ae=i.listen((D,j,F)=>{if(!At.listening)return;const V=K(D),se=ee(V,At.currentRoute.value);if(se){oe(de(se,{replace:!0,force:!0}),V).catch(Cn);return}p=V;const g=c.value;ln&&_u(El(g.fullPath,F.delta),Ma()),Z(V,g).catch(f=>vt(f,Me.NAVIGATION_ABORTED|Me.NAVIGATION_CANCELLED)?f:vt(f,Me.NAVIGATION_GUARD_REDIRECT)?(oe(de(_(f.to),{force:!0}),V).then(k=>{vt(k,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&!F.delta&&F.type===oi.pop&&i.go(-1,!1)}).catch(Cn),Promise.reject()):(F.delta&&i.go(-F.delta,!1),x(f,V,g))).then(f=>{f=f||L(V,g,!1),f&&(F.delta&&!vt(f,Me.NAVIGATION_CANCELLED)?i.go(-F.delta,!1):F.type===oi.pop&&vt(f,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ne(V,g,f)}).catch(Cn)}))}let Le=yn(),_e=yn(),T;function x(D,j,F){fe(D);const V=_e.list();return V.length?V.forEach(se=>se(D,j,F)):console.error(D),Promise.reject(D)}function ie(){return T&&c.value!==It?Promise.resolve():new Promise((D,j)=>{Le.add([D,j])})}function fe(D){return T||(T=!D,Pe(),Le.list().forEach(([j,F])=>D?F(D):j()),Le.reset()),D}function W(D,j,F,V){const{scrollBehavior:se}=e;if(!ln||!se)return Promise.resolve();const g=!F&&wu(El(D.fullPath,0))||(V||!F)&&history.state&&history.state.scroll||null;return ka().then(()=>se(D,j,g)).then(f=>f&&xu(f)).catch(f=>x(f,D,j))}const we=D=>i.go(D);let ge;const Ee=new Set,At={currentRoute:c,listening:!0,addRoute:A,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:R,getRoutes:h,resolve:K,options:e,push:b,replace:H,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:l.add,beforeResolve:s.add,afterEach:r.add,onError:_e.add,isReady:ie,install(D){D.component("RouterLink",Xu),D.component("RouterView",ad),D.config.globalProperties.$router=At,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(c)}),ln&&!ge&&c.value===It&&(ge=!0,b(i.location).catch(V=>{}));const j={};for(const V in It)Object.defineProperty(j,V,{get:()=>c.value[V],enumerable:!0});D.provide(Da,At),D.provide(Ci,Ao(j)),D.provide(ri,c);const F=D.unmount;Ee.add(D),D.unmount=function(){Ee.delete(D),Ee.size<1&&(p=It,ae&&ae(),ae=null,c.value=It,ge=!1,T=!1),F()}}};function $e(D){return D.reduce((j,F)=>j.then(()=>J(F)),Promise.resolve())}return At}function Vn(){return at(Da)}function Ra(e){return at(Ci)}const Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},ld={class:"absolute inset-0 pointer-events-none z-0"},od={class:"fixed top-4 md:top-2 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-15xl"},sd={class:"flex-1 flex justify-start items-center"},rd={class:"hidden lg:flex flex-col leading-tight"},cd={class:"text-[24px] md:text-[36px] font-[1000] uppercase tracking-tighter"},ud={class:"flex-shrink-0 flex justify-center items-center px-2"},dd={class:"relative flex bg-slate-200/50 dark:bg-white/10 p-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-xl backdrop-blur-md"},pd={class:"flex-1 flex justify-end pr-4 md:pr-6"},gd={class:"text-base md:text-2xl"},md={class:"max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},fd={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=Ra(),n=Vn(),a=le(null),i=le({}),l=le({left:"0px",width:"0px",opacity:0}),s=()=>n.push("/"),r=Array.from({length:80},(d,m)=>({id:m,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),c=Array.from({length:40},(d,m)=>({id:m,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),p=(d,m)=>{d&&(i.value[m]=d.$el||d)},u=async()=>{await ka();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 6px 20px -3px rgba(245, 158, 11, 0.7)":"0 10px 25px -5px rgba(139, 92, 246, 0.7)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return tn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),Pt(()=>t.path,u),(d,m)=>{const A=sa("router-link");return S(),I("div",{class:w(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[o("div",ld,[(S(!0),I(z,null,ue(Ge(c),y=>(S(),I("div",{key:"dust-"+y.id,class:w(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:ht({width:y.size,height:y.size,top:y.top,left:y.left,animationDuration:y.duration,animationDelay:y.delay})},null,6))),128)),(S(!0),I(z,null,ue(Ge(r),y=>(S(),I("div",{key:"star-"+y.id,class:w(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:ht({width:y.size,height:y.size,top:y.top,left:y.left,animationDelay:y.delay})},null,6))),128))]),o("nav",od,[o("div",{class:w(["backdrop-blur-3xl border flex items-center rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3",e.isDark?"bg-black/50 border-white/10 shadow-indigo-500/10":"bg-white/80 border-white/50 shadow-blue-500/5"])},[o("div",sd,[o("div",{onClick:s,class:"flex items-center cursor-pointer group select-none pl-4 pr-2 active:scale-95 transition-transform gap-4"},[o("div",{class:w(["w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-full border-[3px] transition-all duration-300 shadow-2xl shrink-0",e.isDark?"border-white/30 shadow-indigo-500/20":"border-slate-400 shadow-slate-300"])},[...m[1]||(m[1]=[o("img",{src:Pa,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),o("div",rd,[o("span",cd,[o("span",{class:w(e.isDark?"text-white":"text-slate-900")},"TIMI ",2),m[2]||(m[2]=o("span",{class:"ml-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-indigo-600"},"DB",-1))]),m[3]||(m[3]=o("span",{class:"text-[7px] md:text-[8px] font-black uppercase opacity-60 tracking-[0.3em] italic"},"Toram Online Tools",-1))])])]),o("div",ud,[o("div",dd,[o("div",{ref_key:"navContainer",ref:a,class:"flex items-center relative gap-1 md:gap-2"},[o("div",{class:"absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:ht(l.value)},null,4),ye(A,{ref:y=>p(y,"/"),to:"/",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:Xe(()=>[...m[4]||(m[4]=[Ve("LIST BAG",-1)])]),_:1},512),ye(A,{ref:y=>p(y,"/mq"),to:"/mq",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:Xe(()=>[...m[5]||(m[5]=[Ve("LIST MQ",-1)])]),_:1},512),ye(A,{ref:y=>p(y,"/mq-calc"),to:"/mq-calc",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:Xe(()=>[...m[6]||(m[6]=[Ve("MQ-CALC",-1)])]),_:1},512),ye(A,{ref:y=>p(y,"/bs-calc"),to:"/bs-calc",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:Xe(()=>[...m[7]||(m[7]=[Ve("BS-CALC",-1)])]),_:1},512),ye(A,{ref:y=>p(y,"/xtall"),to:"/xtall",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:Xe(()=>[...m[8]||(m[8]=[Ve("XTALL",-1)])]),_:1},512)],512)])]),o("div",pd,[o("button",{onClick:m[0]||(m[0]=y=>d.$emit("toggleDark")),class:w(["w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 active:scale-75 shadow-xl",e.isDark?"bg-slate-900 border-white/20 text-orange-400":"bg-white border-slate-300 text-indigo-600"])},[o("span",gd,B(e.isDark?"🌙":"☀️"),1)],2)])],2)]),o("main",md,[Ir(d.$slots,"default",{},void 0)])],2)}}},hd=Wt(fd,[["__scopeId","data-v-55db152f"]]),Ad={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},bd={__name:"App",setup(e){const t=le(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return tn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=sa("router-view");return S(),I("div",Ad,[ye(hd,{isDark:t.value,onToggleDark:n},{default:Xe(()=>[ye(l,null,{default:Xe(({Component:s})=>[ye(us,{name:"slide-page",mode:"out-in"},{default:Xe(()=>[(S(),ua(Er(s),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},kd="/toram-vue/images/Bag-Toram.png",$n=[{id:1,slot:"50 ➔ 51",nama_item_en:"Colon Skin",nama_item_id:"Kulit Colon",jumlah:"x1",spina:0,monster_en:"Colon",monster_id:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Land Under Development",lokasi_id:"Tanah Pembangunan"},{id:2,slot:"51 ➔ 52",nama_item_en:"Gorgeous Fur",nama_item_id:"Kulit Berkualitas",jumlah:"x1",spina:0,monster_en:"Lavarca",monster_id:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Rakau Plains / Ruined Temple Town",lokasi_id:"Dataran Rakau / Kota Kuil Runtuh"},{id:3,slot:"52 ➔ 53",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:1e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:4,slot:"53 ➔ 54",nama_item_en:"Minotaur Skin",nama_item_id:"Kulit Minotaur",jumlah:"x1",spina:0,monster_en:"Minotaur",monster_id:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Ruined Temple: Forbidden Hall",lokasi_id:"Kuil Runtuh: Aula Terlarang"},{id:5,slot:"53 ➔ 54",nama_item_en:"Orange Crystal Fragment",nama_item_id:"Pecahan Kristal Jingga",jumlah:"x1",spina:0,monster_en:"Cobre",monster_id:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Land Under Development",lokasi_id:"Tanah Pembangunan"},{id:6,slot:"54 ➔ 55",nama_item_en:"Forest Wolf Skin",nama_item_id:"Kulit Anjing Hutan",jumlah:"x1",spina:0,monster_en:"Forest Wolf",monster_id:"Serigala Hutan",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Marbaro Forest: Deepest Part",lokasi_id:"Hutan Marbaro: Bagian Dalam"},{id:7,slot:"54 ➔ 55",nama_item_en:"Goblin Medal",nama_item_id:"Lencana Goblin",jumlah:"x1",spina:0,monster_en:"Boss Goblin",monster_id:"Bos Goblin",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Ribisco Cave: Deepest Part",lokasi_id:"Gua Ribisco: Bagian Dalam"},{id:8,slot:"55 ➔ 56",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:2e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:9,slot:"56 ➔ 57",nama_item_en:"Mochelo Fur",nama_item_id:"Bulu Mochelo",jumlah:"x1",spina:0,monster_en:"Mochelo",monster_id:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:10,slot:"56 ➔ 57",nama_item_en:"Linen Cloth",nama_item_id:"Kain Linen",jumlah:"x10",spina:0,monster_en:"Crow Killer",monster_id:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Douce Hamlet",lokasi_id:"Dusun Douce"},{id:11,slot:"57 ➔ 58",nama_item_en:"Green Dragon Fur",nama_item_id:"Bulu Naga Giok",jumlah:"x1",spina:0,monster_en:"Forestia",monster_id:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Land of Chaos",lokasi_id:"Tanah Kaos"},{id:12,slot:"57 ➔ 58",nama_item_en:"High Quality Horn",nama_item_id:"Tanduk Berkualitas",jumlah:"x10",spina:0,monster_en:"Billy",monster_id:"Billy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Yorl Highlands",lokasi_id:"Tanah Tinggi Yorl"},{id:13,slot:"58 ➔ 59",nama_item_en:"Boss Roga Belt",nama_item_id:"Sabuk Bos Roga",jumlah:"x1",spina:0,monster_en:"Boss Roga",monster_id:"Bos Roga",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:14,slot:"58 ➔ 59",nama_item_en:"Broadcloth",nama_item_id:"Kain Beludu",jumlah:"x10",spina:0,monster_en:"Orc / Orc Warrior",monster_id:"Orc / Orc Warrior",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Saham Crater / Saham Underground Cave",lokasi_id:"Kawah Saham / Gua Bawah Tanah Saham"},{id:15,slot:"59 ➔ 60",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:4e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:16,slot:"60 ➔ 61",nama_item_en:"Sharp Bear Claw",nama_item_id:"Cakar Beruang",jumlah:"x2",spina:0,monster_en:"Violacoon",monster_id:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Darkanon Plain",lokasi_id:"Padang Darkanon"},{id:17,slot:"60 ➔ 61",nama_item_en:"Sheeting Fabric",nama_item_id:"Kain Alas",jumlah:"x20",spina:0,monster_en:"Cassy",monster_id:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ancient Empress Tomb: Area 2/3",lokasi_id:"Makam Ratu Kuno: Area 2/3"},{id:18,slot:"61 ➔ 62",nama_item_en:"Heavy Tough Chain",nama_item_id:"Rantai Kukuh",jumlah:"x2",spina:0,monster_en:"Masked Warrior",monster_id:"Pendekar Bertopeng",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:19,slot:"61 ➔ 62",nama_item_en:"Polyester Cloth",nama_item_id:"Kain Polister",jumlah:"x20",spina:0,monster_en:"Shining Gentleman / Wandering Shadow",monster_id:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Lost Town",lokasi_id:"Kota Hilang"},{id:20,slot:"62 ➔ 63",nama_item_en:"Grass Dragon Scale",nama_item_id:"Sisik Naga Sabana",jumlah:"x2",spina:0,monster_en:"Grass Dragon Yelb",monster_id:"Naga Padang Rumput Yelb",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Albatif Village",lokasi_id:"Desa Albatif"},{id:21,slot:"62 ➔ 63",nama_item_en:"Space Wolf Fur",nama_item_id:"Kulit Serigala Alien",jumlah:"x20",spina:0,monster_en:"Outer World Wolf",monster_id:"Serigala Dunia Luar",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Gate to Another World",lokasi_id:"Gerbang Dunia Lain"},{id:22,slot:"63 ➔ 64",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:8e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:23,slot:"64 ➔ 65",nama_item_en:"Torn Cloak",nama_item_id:"Jubah Sobek",jumlah:"x2",spina:0,monster_en:"Goovua",monster_id:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Akaku Desert: Hill",lokasi_id:"Gurun Akaku: Bukit"},{id:24,slot:"64 ➔ 65",nama_item_en:"Squirrel Fur",nama_item_id:"Kulit Tupai",jumlah:"x20",spina:0,monster_en:"Rodentail",monster_id:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Maia Deila",lokasi_id:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item_en:"Jade Raptor Horn",nama_item_id:"Tanduk Elang Zamrud",jumlah:"x2",spina:0,monster_en:"Jade Raptor",monster_id:"Jade Raptor",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Gravel Terrace",lokasi_id:"Teras Kerikil"},{id:26,slot:"65 ➔ 66",nama_item_en:"Goat Fur",nama_item_id:"Bulu Kambing",jumlah:"x20",spina:0,monster_en:"Koza",monster_id:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dunkel Valley",lokasi_id:"Jurang Dunkel"},{id:27,slot:"66 ➔ 67",nama_item_en:"Twilight Dragon Wing",nama_item_id:"Sayap Naga Senja",jumlah:"x2",spina:0,monster_en:"Twilight Dragon",monster_id:"Naga Senja",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fort Solfini: Roof",lokasi_id:"Benteng Solfini: Atap"},{id:28,slot:"66 ➔ 67",nama_item_en:"Fleecy Fur",nama_item_id:"Bulu Halus",jumlah:"x20",spina:0,monster_en:"Rabby / Little Snow Bear",monster_id:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Polde Ice Valley",lokasi_id:"Lembah Es Polde"},{id:29,slot:"67 ➔ 68",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:16e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:30,slot:"68 ➔ 69",nama_item_en:"Chain of Purgatory",nama_item_id:"Rantai Penyucian",jumlah:"x2",spina:0,monster_en:"Cerberus",monster_id:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi_en:"Spring of Rebirth: Top",lokasi_id:"Mata Air Kelahiran: Puncak"},{id:31,slot:"68 ➔ 69",nama_item_en:"Wavering Cloth",nama_item_id:"Kain Goyah",jumlah:"x20",spina:0,monster_en:"Jewel Eye",monster_id:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Spring of Rebirth",lokasi_id:"Mata Air Kelahiran: Tengah/Atas"},{id:32,slot:"69 ➔ 70",nama_item_en:"Aranea Silk",nama_item_id:"Benang Aranea",jumlah:"x2",spina:0,monster_en:"Aranea",monster_id:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Garden of Sublimation",lokasi_id:"Taman Sublimasi: Pusat"},{id:33,slot:"69 ➔ 70",nama_item_en:"Small Spider Silk",nama_item_id:"Benang Laba-Laba Kecil",jumlah:"x20",spina:0,monster_en:"Aramia",monster_id:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Garden of Sublimation",lokasi_id:"Taman Sublimasi: Area 2/3"},{id:34,slot:"70 ➔ 71",nama_item_en:"Copied Goddess Robe",nama_item_id:"Kain Dewi Tiruan",jumlah:"x3",spina:0,monster_en:"Imitacia",monster_id:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Dark Castle: Grand Hall",lokasi_id:"Istana Gelap: Aula Besar"},{id:35,slot:"70 ➔ 71",nama_item_en:"Floating Cloth",nama_item_id:"Kain Apung",jumlah:"x10",spina:0,monster_en:"Flying Executioner",monster_id:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Cradle of Soldier",lokasi_id:"Buaian Prajurit"},{id:36,slot:"70 ➔ 71",nama_item_en:"Soft Paw",nama_item_id:"Tapak Lembut",jumlah:"x20",spina:0,monster_en:"Bunny Summoner / Lapin",monster_id:"Bunny Summoner / Lapin",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Trace of Dark River",lokasi_id:"Sungai Kegelapan"},{id:37,slot:"71 ➔ 72",nama_item_en:"Evil Beast Mane",nama_item_id:"Surai Hewan Iblis",jumlah:"x3",spina:0,monster_en:"Memecoleous",monster_id:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Dark Castle: Area 2",lokasi_id:"Istana Gelap: Area 2"},{id:38,slot:"71 ➔ 72",nama_item_en:"Hard Paw Pad",nama_item_id:"Bantalan Tapak Keras",jumlah:"x10",spina:0,monster_en:"Manticore",monster_id:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Dark Castle",lokasi_id:"Istana Gelap: Area 1/2/3"},{id:39,slot:"71 ➔ 72",nama_item_en:"Dark Shadow Feather",nama_item_id:"Bulu Bayangan Hitam",jumlah:"x20",spina:0,monster_en:"Shadow Fly",monster_id:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dark Castle",lokasi_id:"Istana Gelap: Area 1/2/3"},{id:40,slot:"72 ➔ 73",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:32e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:41,slot:"73 ➔ 74",nama_item_en:"Tapir Fur",nama_item_id:"Bulu Tapir",jumlah:"x3",spina:0,monster_en:"Tapir",monster_id:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Blazing Graben: Surface",lokasi_id:"Graben Membara: Permukaan"},{id:42,slot:"73 ➔ 74",nama_item_en:"Stiff Fur",nama_item_id:"Bulu Kaku",jumlah:"x10",spina:0,monster_en:"Wooly",monster_id:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Blazing Graben: Surface",lokasi_id:"Graben Membara: Permukaan"},{id:43,slot:"73 ➔ 74",nama_item_en:"Anti-Rust Oil",nama_item_id:"Minyak Anti-Karat",jumlah:"x20",spina:0,monster_en:"Ornis Demi Machina",monster_id:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Artillery Defense Line",lokasi_id:"Garis Pertahanan Artileri Otomatis"},{id:44,slot:"74 ➔ 75",nama_item_en:"Ancient Fabric",nama_item_id:"Kain Kuno",jumlah:"x3",spina:0,monster_en:"Proto Leon",monster_id:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Singolare Ruins: 3rd Floor",lokasi_id:"Reruntuhan Singolare: Lantai 3"},{id:45,slot:"74 ➔ 75",nama_item_en:"Soft Tree Bark",nama_item_id:"Kulit Pohon Lunak",jumlah:"x10",spina:0,monster_en:"Floral Bee",monster_id:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Site of Simscracker",lokasi_id:"Situs Simcracker"},{id:46,slot:"74 ➔ 75",nama_item_en:"Dirty Potum Hair",nama_item_id:"Rambut Potum Kotor",jumlah:"x20",spina:0,monster_en:"Slum Potum",monster_id:"Potum Kumuh",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Klaspe Slum",lokasi_id:"Klaspe Kumuh"},{id:47,slot:"75 ➔ 76",nama_item_en:"Crimson Huge Bone",nama_item_id:"Tulang Raksasa Merah",jumlah:"x3",spina:0,monster_en:"Dusk Machina",monster_id:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Small Demi Machina Factory: Area 2",lokasi_id:"Pabrik Demi Machina Kecil: Area 2"},{id:48,slot:"75 ➔ 76",nama_item_en:"Torn Black Coat",nama_item_id:"Mantel Hitam Sobek",jumlah:"x10",spina:0,monster_en:"Rugos Demi Machina",monster_id:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Small Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Kecil"},{id:49,slot:"75 ➔ 76",nama_item_en:"Torn Chain",nama_item_id:"Rantai Putus",jumlah:"x20",spina:0,monster_en:"Torture Machina",monster_id:"Machina Penyiksa",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Small Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Kecil"},{id:50,slot:"76 ➔ 77",nama_item_en:"Chimera Scale",nama_item_id:"Sisik Chimera",jumlah:"x3",spina:0,monster_en:"Mozto Machina",monster_id:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Large Demi Machina Factory: Depths",lokasi_id:"Pabrik Demi Machina Besar: Bagian Terdalam"},{id:51,slot:"76 ➔ 77",nama_item_en:"Mysterious Luminary",nama_item_id:"Benda Pendar Aneh",jumlah:"x10",spina:0,monster_en:"Horn Machina",monster_id:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi_en:"Large Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Besar"},{id:52,slot:"76 ➔ 77",nama_item_en:"Tough Tentacle",nama_item_id:"Tentakel Tangguh",jumlah:"x20",spina:0,monster_en:"Ledon / Odelon Machina",monster_id:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Large Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Besar"},{id:53,slot:"77 ➔ 78",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:64e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:54,slot:"78 ➔ 79",nama_item_en:"Forest Spirit Robe",nama_item_id:"Jubah Roh Hutan",jumlah:"x3",spina:0,monster_en:"Lalvada",monster_id:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Monster Forest: Deep Part",lokasi_id:"Hutan Monster: Bagian Dalam"},{id:55,slot:"78 ➔ 79",nama_item_en:"Plant Fang",nama_item_id:"Taring Tanaman",jumlah:"x10",spina:0,monster_en:"Nepenthe",monster_id:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Monster Forest",lokasi_id:"Hutan Monster"},{id:56,slot:"78 ➔ 79",nama_item_en:"Felt Fabric",nama_item_id:"Kain Felt",jumlah:"x20",spina:0,monster_en:"Puppet Dragon",monster_id:"Naga Boneka",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Lufenas Mansion",lokasi_id:"Mansion Lufenas"},{id:57,slot:"79 ➔ 80",nama_item_en:"Lyark Alloy",nama_item_id:"Aloi Lyark",jumlah:"x3",spina:0,monster_en:"Gwaimol",monster_id:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Cuervo Jail: Roof",lokasi_id:"Penjara Cuervo: Atap"},{id:58,slot:"79 ➔ 80",nama_item_en:"Torn Officer Clothes",nama_item_id:"Baju Penjaga Robek",jumlah:"x10",spina:0,monster_en:"Lyark Jailer",monster_id:"Sipir Lyark",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Cuervo Jail",lokasi_id:"Penjara Cuervo"},{id:59,slot:"79 ➔ 80",nama_item_en:"Ox Fabric",nama_item_id:"Kain Lembu",jumlah:"x20",spina:0,monster_en:"Lyark Specialist / Master Specialist",monster_id:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Brahe Laboratory",lokasi_id:"Laboratorium Brahe"},{id:60,slot:"80 ➔ 81",nama_item_en:"Light Emitting Cloth",nama_item_id:"Kain Bercahaya",jumlah:"x4",spina:0,monster_en:"Seraph Machina",monster_id:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Buried Tower: Inside",lokasi_id:"Menara Penembus Bumi: Sisi Dalam"},{id:61,slot:"80 ➔ 81",nama_item_en:"Damaged Artificial Leather",nama_item_id:"Kulit Sintetis Rusak",jumlah:"x20",spina:0,monster_en:"Lyark Brawler",monster_id:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Suburb of Droma Square",lokasi_id:"Sekitar Alun-alun Droma"},{id:62,slot:"80 ➔ 81",nama_item_en:"Executioner Loincloth",nama_item_id:"Cawat Pengeksekusi",jumlah:"x20",spina:0,monster_en:"Volo",monster_id:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Suburb of Droma Square",lokasi_id:"Sekitar Alun-alun Droma"},{id:63,slot:"81 ➔ 82",nama_item_en:"Lil Empress Cloth Piece",nama_item_id:"Potongan Baju Kaisar Kecil",jumlah:"x4",spina:0,monster_en:"Venena Coenubia",monster_id:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Ultimea Palace: Throne",lokasi_id:"Istana Ultimea: Takhta"},{id:64,slot:"81 ➔ 82",nama_item_en:"Hard Armor Bit",nama_item_id:"Pecahan Zirah Keras",jumlah:"x20",spina:0,monster_en:"High Tigris",monster_id:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Ultimea Palace",lokasi_id:"Istana Ultimea"},{id:65,slot:"81 ➔ 82",nama_item_en:"Snake Skin",nama_item_id:"Kulit Ular",jumlah:"x20",spina:0,monster_en:"Pond Snake",monster_id:"Ular Kolam",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Copia Reservoirs",lokasi_id:"Reservoir Copia"},{id:66,slot:"82 ➔ 83",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:1e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:67,slot:"83 ➔ 84",nama_item_en:"Mom Fluck Skin",nama_item_id:"Kulit Mama Fluck",jumlah:"x4",spina:0,monster_en:"Mom Fluck",monster_id:"Mom Fluck",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Forgotten Cave",lokasi_id:"Gua Pelupa"},{id:68,slot:"83 ➔ 84",nama_item_en:"Colon Big Leaf",nama_item_id:"Daun Besar Colon",jumlah:"x20",spina:0,monster_en:"Leedle Colon",monster_id:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Rokoko Plains",lokasi_id:"Dataran Rakoko"},{id:69,slot:"83 ➔ 84",nama_item_en:"Vertical Stripe Fur",nama_item_id:"Bulu Garis Vertikal",jumlah:"x20",spina:0,monster_en:"Tehon",monster_id:"Rakun Tambun",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Curonne Forest",lokasi_id:"Hutan Currone"},{id:70,slot:"84 ➔ 85",nama_item_en:"Mardula Spiritual Cloth",nama_item_id:"Kain Rohani Mardula",jumlah:"x4",spina:0,monster_en:"Mardula",monster_id:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Hall of Blessings Gods",lokasi_id:"Serambi Dewa Berkah"},{id:71,slot:"84 ➔ 85",nama_item_en:"Mysterious Shiny Cloth",nama_item_id:"Kain Berkilau Misterius",jumlah:"x20",spina:0,monster_en:"Bubble Angel / Bubble Bogey",monster_id:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Shrine of the Gods",lokasi_id:"Kuil Para Dewa"},{id:72,slot:"84 ➔ 85",nama_item_en:"Grey Feather",nama_item_id:"Bulu Kelabu",jumlah:"x20",spina:0,monster_en:"Haliabubo",monster_id:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Ruins of Mt. Mithurna",lokasi_id:"Reruntuhan G. Mithurna"},{id:73,slot:"85 ➔ 86",nama_item_en:"Carbuncle Fur",nama_item_id:"Mantel Carbuncle",jumlah:"x4",spina:0,monster_en:"Carbuncle",monster_id:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Hall of Construction Gods",lokasi_id:"Serambi Dewa Pembangunan"},{id:74,slot:"85 ➔ 86",nama_item_en:"Knit Fabric",nama_item_id:"Kain Rajut",jumlah:"x20",spina:0,monster_en:"Bubble Angel",monster_id:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Heresy Corridor",lokasi_id:"Koridor Heresi"},{id:75,slot:"85 ➔ 86",nama_item_en:"Bag Bear Tail",nama_item_id:"Ekor Beruang Berkantong",jumlah:"x20",spina:0,monster_en:"Oddy",monster_id:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Shrine of the Gods",lokasi_id:"Kuil Para Dewa"},{id:76,slot:"86 ➔ 87",nama_item_en:"King Piton Fur",nama_item_id:"Bulu Raja Piton",jumlah:"x4",spina:0,monster_en:"King Piton",monster_id:"King Piton",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Elf Mountains: Shrine",lokasi_id:"Pegunungan Elf: Kuil"},{id:77,slot:"86 ➔ 87",nama_item_en:"Thick White Fur",nama_item_id:"Bulu Putih Lebat",jumlah:"x20",spina:0,monster_en:"Billy",monster_id:"Billy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Garden of Ice & Snow",lokasi_id:"Taman Es & Salju"},{id:78,slot:"86 ➔ 87",nama_item_en:"Stiff Grey Fur",nama_item_id:"Bulu Abu Kaku",jumlah:"x20",spina:0,monster_en:"Silveria",monster_id:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Elf Mountains",lokasi_id:"Pegunungan Elf"},{id:79,slot:"87 ➔ 88",nama_item_en:"Ancient Ingot",nama_item_id:"Ingot Kuno",jumlah:"x4",spina:0,monster_en:"Thug Golem",monster_id:"Golem Preman",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi_en:"Dark Dragon Shrine: Middle",lokasi_id:"Kuil Naga Kegelapan: Tengah"},{id:80,slot:"87 ➔ 88",nama_item_en:"Ice Wolf Fang",nama_item_id:"Taring Serigala Es",jumlah:"x20",spina:0,monster_en:"Courloup",monster_id:"Serigala Tanduk",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Elf Mountains",lokasi_id:"Pegunungan Elf"},{id:81,slot:"87 ➔ 88",nama_item_en:"Dusky Fabric",nama_item_id:"Kain Gelap",jumlah:"x20",spina:0,monster_en:"Soul Reaper",monster_id:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dark Dragon Shrine",lokasi_id:"Kuil Naga Kegelapan"},{id:82,slot:"88 ➔ 89",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:2e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:83,slot:"89 ➔ 90",nama_item_en:"Tuscog Fang",nama_item_id:"Taring Tuscog",jumlah:"x4",spina:0,monster_en:"Tuscog",monster_id:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Eryldan Street",lokasi_id:"Jalan Eryldan"},{id:84,slot:"89 ➔ 90",nama_item_en:"Larva Silk",nama_item_id:"Sutra Ulat",jumlah:"x20",spina:0,monster_en:"Moss Mole",monster_id:"Tikus Lumut",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Forest of Ein",lokasi_id:"Hutan Ein"},{id:85,slot:"89 ➔ 90",nama_item_en:"Werewolf Fur",nama_item_id:"Taring Manusia Serigala",jumlah:"x20",spina:0,monster_en:"Wolfre",monster_id:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Eryldan Street",lokasi_id:"Jalan Eryldan"},{id:86,slot:"90 ➔ 91",nama_item_en:"Kuzto Splinter",nama_item_id:"Serpihan Kayu Kuzto",jumlah:"x4",spina:0,monster_en:"Kuzto",monster_id:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi_en:"Labilans Sector: Square",lokasi_id:"Distrik Labilans: Alun-alun"},{id:87,slot:"90 ➔ 91",nama_item_en:"Stoat Fur",nama_item_id:"Bulu Cerpelai",jumlah:"x20",spina:0,monster_en:"Sentreast",monster_id:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Fabriska Sector",lokasi_id:"Distrik Fabriska"},{id:88,slot:"90 ➔ 91",nama_item_en:"Mysterious Waist Sash",nama_item_id:"Sabuk Pinggang Misterius",jumlah:"x30",spina:0,monster_en:"Moculus",monster_id:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Fractum Sector",lokasi_id:"Distrik Fractum"},{id:89,slot:"91 ➔ 92",nama_item_en:"Crystal Pouch",nama_item_id:"Kantong Kristal",jumlah:"x5",spina:0,monster_en:"Canemofish",monster_id:"Nempirania",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi_en:"Recetacula Sector",lokasi_id:"Distrik Recetacula"},{id:90,slot:"91 ➔ 92",nama_item_en:"Cushy Tail",nama_item_id:"Ekor Lembu",jumlah:"x20",spina:0,monster_en:"Alpoca",monster_id:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Labilans Sector",lokasi_id:"Distrik Labilans"},{id:91,slot:"91 ➔ 92",nama_item_en:"Sturdy Papula",nama_item_id:"Papula Kuat",jumlah:"x30",spina:0,monster_en:"Toxinaria",monster_id:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Recetacula Sector",lokasi_id:"Distrik Recetacula"},{id:92,slot:"92 ➔ 93",nama_item_en:"Repthon Wings",nama_item_id:"Sayap Repthon",jumlah:"x5",spina:0,monster_en:"Repthon",monster_id:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Deltzon Research Zone: Deepest Area",lokasi_id:"Zona Riset Deltzon: Area Terdalam"},{id:93,slot:"92 ➔ 93",nama_item_en:"Legume Button",nama_item_id:"Kancing Polong",jumlah:"x20",spina:0,monster_en:"Marquis Colon",monster_id:"Colon Marquis",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Old Lufenas Mansion Ruins",lokasi_id:"Reruntuhan Mansion Lufenas Tua"},{id:94,slot:"92 ➔ 93",nama_item_en:"Frock Coat Scrap",nama_item_id:"Kain Perca Jas Panjang",jumlah:"x30",spina:0,monster_en:"Swirly Whirly",monster_id:"Gulingkar",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Deltzon Research Zone",lokasi_id:"Zona Riset Deltzon"},{id:95,slot:"93 ➔ 94",nama_item_en:"Empress Ogre Hair",nama_item_id:"Rambut Kaisar Siluman",jumlah:"x5",spina:0,monster_en:"Venena Metacoenubia",monster_id:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Neo Plastida",lokasi_id:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item_en:"Torn Red Cloth",nama_item_id:"Kain Merah Sobek",jumlah:"x20",spina:0,monster_en:"Sand Bandits Potum",monster_id:"Potum Bandit Gurun",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Geist Desert",lokasi_id:"Gurun Pasir Geist"},{id:97,slot:"93 ➔ 94",nama_item_en:"Corroded Leather",nama_item_id:"Kulit Karatan",jumlah:"x30",spina:0,monster_en:"Cabrigo",monster_id:"Jasman",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ruins of Urban Elban",lokasi_id:"Reruntuhan Elban Urban"},{id:98,slot:"94 ➔ 95",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:3e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:99,slot:"95 ➔ 96",nama_item_en:"Pisteus Bone",nama_item_id:"Tulang Pisteus",jumlah:"x5",spina:0,monster_en:"Pisteus",monster_id:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Ducia Coast: Depths",lokasi_id:"Pesisir Ducia: Area Terdalam"},{id:100,slot:"95 ➔ 96",nama_item_en:"Phantom Cloth",nama_item_id:"Kain Phantom",jumlah:"x20",spina:0,monster_en:"Flooray",monster_id:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Lunagent Cliff Base",lokasi_id:"Dasar Tebing Lunagent"},{id:101,slot:"95 ➔ 96",nama_item_en:"Sea Otter Fur",nama_item_id:"Bulu Berang-Berang Laut",jumlah:"x30",spina:0,monster_en:"Lutris",monster_id:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ducia Coast",lokasi_id:"Pesisir Ducia"},{id:102,slot:"96 ➔ 97",nama_item_en:"Arachnidemon Wing",nama_item_id:"Sayap Arachnidemon",jumlah:"x5",spina:0,monster_en:"Arachnidemon",monster_id:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Arche Valley: Depths",lokasi_id:"Lembah Arche: Area Terdalam"},{id:103,slot:"96 ➔ 97",nama_item_en:"Metal Shackles",nama_item_id:"Belenggu Logam",jumlah:"x20",spina:0,monster_en:"Bessy / Espectro",monster_id:"Bessy / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi_en:"Arche Valley",lokasi_id:"Lembah Arche"},{id:104,slot:"96 ➔ 97",nama_item_en:"Weird Snake Skin",nama_item_id:"Kulit Ular Aneh",jumlah:"x30",spina:0,monster_en:"Coofer",monster_id:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Rokoko City Ruins / Nezim Wetlands",lokasi_id:"Reruntuhan Kota Rokoko / Lahan Basah Nezim"},{id:105,slot:"97 ➔ 98",nama_item_en:"Slimy Hide",nama_item_id:"Jangat Berlendir",jumlah:"x5",spina:0,monster_en:"Lord of Nezim",monster_id:"Datuk Nezim",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Nezim Wetlands",lokasi_id:"Lahan Basah Nezim"},{id:106,slot:"97 ➔ 98",nama_item_en:"Enty Cloth",nama_item_id:"Kain Enty",jumlah:"x20",spina:0,monster_en:"Enty",monster_id:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:107,slot:"97 ➔ 98",nama_item_en:"Sturdy Core",nama_item_id:"Poros Kokoh",jumlah:"x30",spina:0,monster_en:"Eerie Scarecrow / Grim Reaper Scarecrow",monster_id:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:108,slot:"98 ➔ 99",nama_item_en:"Inferno Curse Cloth Scrap",nama_item_id:"Perca Gendam Geni",jumlah:"x5",spina:0,monster_en:"Hexter",monster_id:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Witch's Woods Depths",lokasi_id:"Rimba Penyihir: Area Terdalam"},{id:109,slot:"98 ➔ 99",nama_item_en:"Kappa's Plate",nama_item_id:"Piring Kappa",jumlah:"x20",spina:0,monster_en:"Kappadon",monster_id:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Nezim Wetlands",lokasi_id:"Lahan Basah Nezim"},{id:110,slot:"98 ➔ 99",nama_item_en:"Crow Feather",nama_item_id:"Bulu Gagak",jumlah:"x30",spina:0,monster_en:"Eerie Scarecrow / Grim Reaper Scarecrow",monster_id:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:111,slot:"99 ➔ 100",nama_item_en:"Wriggling Latebra",nama_item_id:"Inti Latebra Menggeliat",jumlah:"x5",spina:0,monster_en:"Trocostida",monster_id:"Trocostida",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi_en:"Nov Diela: Area 1",lokasi_id:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item_en:"Viscous Liquid",nama_item_id:"Cairan Lekat",jumlah:"x20",spina:0,monster_en:"Juvestida",monster_id:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Nov Diela",lokasi_id:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item_en:"Bizarre Skin",nama_item_id:"Kulit Pelik",jumlah:"x30",spina:0,monster_en:"Evil Eye / Demonic Eye",monster_id:"Mata Jahat / Mata Iblis",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Morga Wasteland",lokasi_id:"Padang Morga"}],vd="data:image/png;base64,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",yd="/toram-vue/assets/en-CZmi2sa3.png",xd={class:"max-w-9xl mx-auto flex justify-center md:justify-end mb-2 sticky top-0 z-50"},_d={class:"flex flex-col items-center gap-1 pt-2"},wd={class:"inline-flex p-1 rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl"},Pd=["onClick"],Md=["src"],Dd={class:"max-w-7xl mx-auto space-y-4 md:space-y-6"},Rd={class:"relative z-10 text-center md:text-left animate-in slide-in-from-left duration-700"},Cd={class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},Sd={class:"grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"},Ed={class:"text-[9px] font-black opacity-80 uppercase"},Id={class:"text-2xl md:text-4xl font-black italic mt-0.5"},Bd={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},Td={class:"relative"},Kd={class:"text-[9px] font-black uppercase ml-4 mb-1 block text-indigo-500 tracking-widest"},Nd={class:"relative group"},Gd=["placeholder"],Od={class:"relative"},Ld={class:"text-[9px] font-black uppercase ml-4 mb-1 block text-indigo-500 tracking-widest"},Fd={class:"relative group"},Ud={value:"All Class"},Hd=["value"],jd={class:"relative"},Wd={class:"text-[9px] font-black uppercase ml-4 mb-1 block text-indigo-500 tracking-widest"},Jd={class:"relative group"},Vd={value:"All Slot"},Yd=["value"],Qd={class:"hidden lg:block overflow-x-auto no-scrollbar"},qd={class:"w-full min-w-[1000px] border-collapse"},zd={class:"p-4 w-[10%] text-center"},$d={class:"p-4 w-[20%] text-left"},Zd={class:"p-4 w-[10%] text-center"},Xd={class:"p-4 w-[15%] text-center"},e0={class:"p-4 w-[15%] text-left"},t0={class:"p-4 w-[10%] text-center"},n0={class:"p-4 w-[20%] text-left"},a0={class:"p-4 text-center font-black text-blue-500 italic text-2xl"},i0={class:"p-4 font-black uppercase text-sm leading-tight"},l0={class:"p-4 text-center bg-black/5"},o0={class:"font-black italic text-lime-600 text-3xl"},s0={class:"p-4 text-center font-black text-lg text-amber-600"},r0={class:"p-4 text-[10px] font-bold uppercase opacity-60"},c0={class:"p-4 text-center"},u0={class:"p-4 font-black text-sm italic text-blue-600 uppercase"},d0={class:"lg:hidden divide-y-[2px] divide-slate-200/10"},p0={class:"flex justify-between items-center"},g0={class:"text-[9px] font-black text-blue-500 uppercase"},m0={class:"font-black uppercase text-base leading-tight"},f0={class:"text-2xl font-black italic text-lime-600"},h0={class:"border-l-[1px] pl-3 border-slate-300/30"},A0={class:"text-base font-black mt-1"},b0={class:"flex flex-col gap-6 justify-center items-center pb-10"},k0={key:0,class:"flex flex-wrap justify-center items-center gap-1.5"},v0=["disabled"],y0=["onClick"],x0=["disabled"],_0={__name:"ListBag",props:["isDark"],setup(e){const t=le("en"),n={id:{title:"DAFTAR TAS",subtitle:"EKSPANSI",searchLabel:"Cari Item",searchPlaceholder:"Cari nama, monster, atau lokasi...",catLabel:"Kategori",slotLabel:"Lompat ke Slot",allClass:"Semua Kelas",allSlot:"Semua Slot",exploreBtn:"Lihat Semua Database",collapseBtn:"Sembunyikan Data",stats:{all:"SEMUA ITEM",res:"HASIL",boss:"BOSS",slot:"SLOTS"},table:{slot:"Slot",name:"Nama Item",need:"Total Butuh",cost:"Biaya Spina",src:"Sumber",type:"Tipe",loc:"Lokasi"},mobile:{need:"Butuh",cost:"Biaya",drop:"Drop Dari:",map:"Peta:"}},en:{title:"BAG LIST",subtitle:"EXPANSION",searchLabel:"Search Item",searchPlaceholder:"Find items, monsters, or maps...",catLabel:"Category",slotLabel:"Jump to Slot",allClass:"All Class",allSlot:"All Slot",exploreBtn:"Explore All Database",collapseBtn:"Collapse to 10 Rows",stats:{all:"ALL ITEM",res:"RESULTS",boss:"BOSS",slot:"SLOTS"},table:{slot:"Slot",name:"Item Name",need:"Total Need",cost:"Spina Cost",src:"Source",type:"Type",loc:"Location"},mobile:{need:"Need",cost:"Cost",drop:"Drop From:",map:"Map:"}}},a=te(()=>n[t.value]),i=le(""),l=le("All Class"),s=le("All Slot"),r=le(1),c=le(10),p=()=>{c.value===10?c.value=d.value.length||10:c.value=10,r.value=1},u=_=>{if(!_||_==="-")return"-";let v=_.toString().replace(/x/gi,"").trim();return v==="0"||v===""?"-":v},d=te(()=>$n.filter(v=>{const b=i.value.toLowerCase(),H=v.kelas_mob||"",ee=t.value==="id"?v.nama_item_id||v.nama_item_en:v.nama_item_en||v.nama_item_id,oe=t.value==="id"?v.lokasi_id||v.lokasi_en:v.lokasi_en||v.lokasi_id,xe=t.value==="id"?v.monster_id||v.monster_en:v.monster_en||v.monster_id,J=!i.value||ee?.toLowerCase().includes(b)||xe?.toLowerCase().includes(b)||oe?.toLowerCase().includes(b);let Z=!0;l.value!=="All Class"&&(l.value==="Mob"?Z=H==="Mob"||H==="Miniboss/Mob":l.value==="Miniboss"?Z=H==="Miniboss"||H==="Miniboss/Mob":Z=H===l.value);const ne=s.value==="All Slot"||String(v.slot).includes(String(s.value));return J&&Z&&ne}).sort((v,b)=>{const H=parseInt(String(v.slot).match(/\d+/))||0,ee=parseInt(String(b.slot).match(/\d+/))||0;return H-ee}));Pt([i,l,s,t],()=>{r.value=1});const m=te(()=>Math.ceil(d.value.length/c.value)||1),A=te(()=>{const _=m.value,v=r.value;return _<=5?Array.from({length:_},(b,H)=>H+1):v<=3?[1,2,3,"...",_]:v>=_-2?[1,"...",_-2,_-1,_]:[1,"...",v,"...",_]}),y=te(()=>{const _=(r.value-1)*c.value;return d.value.slice(_,_+c.value)}),h=te(()=>[...new Set($n.map(v=>v.slot))].sort((v,b)=>(parseInt(v)||0)-(parseInt(b)||0))),R=te(()=>[{label:a.value.stats.all,val:$n.length,grad:"from-blue-700 to-blue-500"},{label:a.value.stats.res,val:d.value.length,grad:"from-fuchsia-600 to-purple-600"},{label:a.value.stats.boss,val:$n.filter(_=>_.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600"},{label:a.value.stats.slot,val:h.value.length,grad:"from-lime-500 to-emerald-600"}]),K=_=>{const v="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return _==="Mob"?v+"bg-green-500/10 text-green-500 border-green-500/50":_==="Miniboss/Mob"?v+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":_==="Miniboss"?v+"bg-purple-500/10 text-purple-500 border-purple-500/50":_==="Boss"?v+"bg-red-500/10 text-red-500 border-red-500/50":_==="Spina"?v+"bg-amber-500/10 text-amber-500 border-amber-500/50":v+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(_,v)=>(S(),I("div",{class:w(["bg-transparent py-0 px-2 md:px-4 font-sans relative z-10 transition-all duration-500",e.isDark?"text-white":"text-slate-900"])},[o("div",xd,[o("div",_d,[v[5]||(v[5]=o("span",{class:"text-[12px] font-[1000] tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 uppercase text-center w-full opacity-90"}," LANGUAGE THIS PAGE ",-1)),o("div",wd,[(S(),I(z,null,ue(["id","en"],b=>o("button",{key:b,onClick:H=>t.value=b,class:w(["px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all duration-300 flex items-center gap-3 group/btn",t.value===b?"bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105":"text-slate-400 hover:text-blue-500 hover:bg-white/5"])},[o("img",{src:Ge(b==="id"?vd:yd),class:"w-5 h-3.5 object-cover rounded-sm shadow-sm group-hover/btn:scale-110 transition-transform",alt:"flag"},null,8,Md),o("span",null,B(b==="id"?"INDO":"ENG"),1)],10,Pd)),64))])])]),o("div",Dd,[o("div",{class:w(["relative p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[v[8]||(v[8]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:kd,class:"w-full h-full object-contain object-right scale-105"})],-1)),o("div",Rd,[o("h2",{class:w(["text-3xl md:text-6xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[Ve(B(a.value.title),1),v[6]||(v[6]=o("br",null,null,-1)),o("span",Cd,B(a.value.subtitle),1)],2),v[7]||(v[7]=dn('<div class="flex items-center justify-center md:justify-start gap-3 mt-2" data-v-5020d367><div class="h-1.5 w-12 bg-blue-600 rounded-full" data-v-5020d367></div><img src="'+Pa+'" class="h-6 md:h-10 w-auto object-contain" data-v-5020d367><span class="font-[1000] italic uppercase text-2xl md:text-3xl" data-v-5020d367>TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500" data-v-5020d367>DB</span></span></div>',1))])],2),o("div",Sd,[(S(!0),I(z,null,ue(R.value,(b,H)=>(S(),I("div",{key:H,class:w(["p-4 md:p-5 rounded-[1.5rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white animate-in zoom-in",b.grad]),style:ht({transitionDelay:H*100+"ms"})},[o("div",Ed,B(b.label),1),o("div",Id,B(b.val),1)],6))),128))]),o("div",Bd,[o("div",Td,[o("label",Kd,B(a.value.searchLabel),1),o("div",Nd,[ve(o("input",{"onUpdate:modelValue":v[0]||(v[0]=b=>i.value=b),type:"text",placeholder:a.value.searchPlaceholder,class:w(["w-full h-12 pl-12 pr-4 rounded-xl border-[3px] font-bold outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},null,10,Gd),[[qe,i.value]]),v[9]||(v[9]=o("div",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"11",cy:"11",r:"8"}),o("path",{d:"m21 21-4.3-4.3"})])],-1))])]),o("div",Od,[o("label",Ld,B(a.value.catLabel),1),o("div",Fd,[ve(o("select",{"onUpdate:modelValue":v[1]||(v[1]=b=>l.value=b),class:w(["w-full h-12 pl-12 pr-10 rounded-xl border-[3px] font-bold outline-none appearance-none cursor-pointer transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[o("option",Ud,B(a.value.allClass),1),(S(),I(z,null,ue(["Mob","Miniboss","Boss","Spina"],b=>o("option",{key:b,value:b},B(b),9,Hd)),64))],2),[[it,l.value]]),v[10]||(v[10]=dn('<div class="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" data-v-5020d367><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-5020d367><rect width="7" height="7" x="3" y="3" rx="1" data-v-5020d367></rect><rect width="7" height="7" x="14" y="3" rx="1" data-v-5020d367></rect><rect width="7" height="7" x="14" y="14" rx="1" data-v-5020d367></rect><rect width="7" height="7" x="3" y="14" rx="1" data-v-5020d367></rect></svg></div><div class="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-hover:translate-y-[-40%] transition-transform" data-v-5020d367><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-5020d367><path d="m6 9 6 6 6-6" data-v-5020d367></path></svg></div>',2))])]),o("div",jd,[o("label",Wd,B(a.value.slotLabel),1),o("div",Jd,[ve(o("select",{"onUpdate:modelValue":v[2]||(v[2]=b=>s.value=b),class:w(["w-full h-12 pl-12 pr-10 rounded-xl border-[3px] font-bold outline-none appearance-none cursor-pointer transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[o("option",Vd,B(a.value.allSlot),1),(S(!0),I(z,null,ue(h.value,b=>(S(),I("option",{key:b,value:b},"Slot "+B(b),9,Yd))),128))],2),[[it,s.value]]),v[11]||(v[11]=dn('<div class="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" data-v-5020d367><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-5020d367><line x1="12" y1="5" x2="12" y2="19" data-v-5020d367></line><line x1="5" y1="12" x2="19" y2="12" data-v-5020d367></line></svg></div><div class="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-hover:translate-y-[-40%] transition-transform" data-v-5020d367><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-5020d367><path d="m6 9 6 6 6-6" data-v-5020d367></path></svg></div>',2))])])]),o("div",{class:w(["border-[3px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80 shadow-lime-100"])},[o("div",Qd,[o("table",qd,[o("thead",null,[o("tr",{class:w(["uppercase text-[9px] font-black tracking-widest border-b-[2px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[o("th",zd,B(a.value.table.slot),1),o("th",$d,B(a.value.table.name),1),o("th",Zd,B(a.value.table.need),1),o("th",Xd,B(a.value.table.cost),1),o("th",e0,B(a.value.table.src),1),o("th",t0,B(a.value.table.type),1),o("th",n0,B(a.value.table.loc),1)],2)]),o("tbody",{class:w(["divide-y-[1px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(S(!0),I(z,null,ue(y.value,b=>(S(),I("tr",{key:b.id,class:"hover:bg-indigo-500/5 transition-all group"},[o("td",a0,B(b.slot),1),o("td",i0,B(t.value==="id"?b.nama_item_id||b.nama_item_en:b.nama_item_en||b.nama_item_id),1),o("td",l0,[o("span",o0,B(u(b.jumlah)),1)]),o("td",s0,B(b.spina>0?Number(b.spina).toLocaleString():"-"),1),o("td",r0,B(t.value==="id"?b.monster_id||b.monster_en||"-":b.monster_en||b.monster_id||"-"),1),o("td",c0,[o("span",{class:w([K(b.kelas_mob),"scale-90"])},B(b.kelas_mob),3)]),o("td",u0,B(t.value==="id"?b.lokasi_id||b.lokasi_en:b.lokasi_en||b.lokasi_id),1)]))),128))],2)])]),o("div",d0,[(S(!0),I(z,null,ue(y.value,b=>(S(),I("div",{key:b.id,class:"p-4 space-y-3"},[o("div",p0,[o("div",g0,"SLOT "+B(b.slot),1),o("div",{class:w([K(b.kelas_mob),"!min-w-fit px-2 py-0.5 text-[8px]"])},B(b.kelas_mob),3)]),o("h3",m0,B(t.value==="id"?b.nama_item_id||b.nama_item_en:b.nama_item_en||b.nama_item_id),1),o("div",{class:w(["grid grid-cols-2 gap-2 border-2 p-3 rounded-xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[o("div",null,[v[12]||(v[12]=o("span",{class:"text-[8px] font-black text-lime-600 block uppercase"},"Need",-1)),o("span",f0,B(u(b.jumlah)),1)]),o("div",h0,[v[13]||(v[13]=o("span",{class:"text-[8px] font-black text-amber-600 block uppercase"},"Cost",-1)),o("span",A0,B(b.spina>0?Number(b.spina).toLocaleString():"-"),1)])],2)]))),128))])],2),o("div",b0,[m.value>1?(S(),I("div",k0,[o("button",{onClick:v[3]||(v[3]=b=>r.value--),disabled:r.value===1,class:"h-10 w-10 rounded-lg border-2 font-black border-blue-600 disabled:opacity-20"},"«",8,v0),(S(!0),I(z,null,ue(A.value,b=>(S(),I("button",{key:b,onClick:H=>typeof b=="number"?r.value=b:null,class:w(["h-10 w-10 rounded-lg border-2 font-black transition-all text-sm",b===r.value?"bg-blue-600 text-white shadow-md":"text-blue-600 border-blue-100 hover:border-blue-500"])},B(b),11,y0))),128)),o("button",{onClick:v[4]||(v[4]=b=>r.value++),disabled:r.value===m.value,class:"h-10 w-10 rounded-lg border-2 font-black border-blue-600 disabled:opacity-20"},"»",8,x0)])):Te("",!0),o("button",{onClick:p,class:"h-12 px-10 rounded-xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic text-xs tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg"},B(c.value===10?a.value.exploreBtn:a.value.collapseBtn),1)])])],2))}},w0=Wt(_0,[["__scopeId","data-v-5020d367"]]),P0="/toram-vue/images/mq.png",ci=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],M0=()=>[...new Set(ci.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),D0={class:"bg-transparent py-0 px-2 md:px-4 font-sans"},R0={class:"max-w-9xl mx-auto space-y-6 md:space-y-10"},C0={class:"relative z-10 text-center md:text-left"},S0={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},E0={class:"flex items-center gap-2 select-none whitespace-nowrap"},I0={class:"grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"},B0={class:"text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] opacity-80 mb-0.5"},T0={class:"text-xl md:text-3xl font-black italic tracking-tighter leading-none"},K0={class:"flex flex-col gap-2"},N0={class:"relative group"},G0={class:"flex flex-col gap-1.5 relative"},O0={class:"relative group"},L0=["value"],F0={class:"hidden lg:block overflow-x-auto"},U0={class:"w-full border-collapse"},H0={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},j0={class:"p-8 text-center bg-black/5"},W0={class:"font-black italic text-5xl text-indigo-600"},J0={class:"flex justify-between items-center"},V0={class:"text-2xl font-black italic text-indigo-500/30"},Y0={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},Q0={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},q0={class:"text-right"},z0={class:"text-4xl font-black italic text-indigo-600"},$0={class:"flex flex-col gap-6 justify-center items-center pb-20"},Z0={key:0,class:"flex flex-wrap justify-center items-center gap-2"},X0=["disabled"],ep={key:0,class:"text-indigo-500 font-black px-2"},tp=["onClick"],np=["disabled"],ap={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=Ra(),i=Vn(),l=le(a.query.search||""),s=le(a.query.chapter||"Semua Chapter"),r=le(parseInt(a.query.page)||1),c=le(parseInt(a.query.per_page)||10),p=M0(),u=te(()=>ci.filter(_=>{const v=l.value.toLowerCase(),b=_.nama_item.toLowerCase().includes(v)||_.chapter.toLowerCase().includes(v),H=s.value==="Semua Chapter"||_.chapter===s.value;return b&&H})),d=te(()=>Math.ceil(u.value.length/c.value)||1),m=te(()=>{const _=(r.value-1)*c.value;return u.value.slice(_,_+c.value)}),A=()=>{c.value===10?c.value=u.value.length:c.value=10,r.value=1,y()},y=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:s.value!=="Semua Chapter"?s.value:void 0,per_page:c.value,page:r.value}})},h=_=>{_>=1&&_<=d.value&&(r.value=_,y())};Pt([l,s],()=>{r.value=1,y()});const R=te(()=>{const _=d.value,v=r.value;if(_<=5)return Array.from({length:_},(H,ee)=>ee+1);let b=[];return v<=3?b=[1,2,3,"...",_]:v>=_-2?b=[1,"...",_-2,_-1,_]:b=[1,"...",v,"...",_],b}),K=te(()=>[{label:"ALL ITEM",val:ci.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:p.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:p.length>0?p[p.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]);return(_,v)=>(S(),I("div",D0,[o("div",R0,[o("div",{class:w(["relative p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[v[7]||(v[7]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:P0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),o("div",C0,[o("h2",{class:w(["text-3xl md:text-6xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[...v[4]||(v[4]=[Ve(" MAIN QUEST",-1),o("br",null,null,-1),o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),o("div",S0,[v[6]||(v[6]=o("div",{class:"flex items-center gap-3"},[o("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),o("img",{src:Pa,class:"h-8 md:h-12 w-auto object-contain"})],-1)),o("div",E0,[o("span",{class:w(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),v[5]||(v[5]=o("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),o("div",I0,[(S(!0),I(z,null,ue(K.value,b=>(S(),I("div",{key:b.label,class:w(["py-8 px-5 flex flex-col items-center justify-center rounded-[2rem] md:rounded-[2.5rem] border-[2px] border-white/20 shadow-lg text-white bg-gradient-to-br transition-all hover:scale-105 active:scale-95",b.grad])},[o("span",B0,B(b.label),1),o("span",T0,B(b.val),1)],2))),128))]),o("div",{class:w(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[o("div",K0,[v[9]||(v[9]=o("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),o("div",N0,[ve(o("input",{"onUpdate:modelValue":v[0]||(v[0]=b=>l.value=b),type:"text",placeholder:"       Find MQ item...",class:w(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[qe,l.value]]),v[8]||(v[8]=o("div",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"11",cy:"11",r:"8"}),o("path",{d:"m21 21-4.3-4.3"})])],-1))])]),o("div",G0,[v[12]||(v[12]=o("label",{class:"text-[9px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),o("div",O0,[ve(o("select",{"onUpdate:modelValue":v[1]||(v[1]=b=>s.value=b),class:w(["w-full h-18 border-[3px] rounded-xl px-4 pr-10 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500 appearance-none",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[v[10]||(v[10]=o("option",{value:"Semua Chapter"},"All Chapter",-1)),(S(!0),I(z,null,ue(Ge(p),b=>(S(),I("option",{key:b,value:b},B(b),9,L0))),128))],2),[[it,s.value]]),v[11]||(v[11]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-fuchsia-500 opacity-70"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"m6 9 6 6 6-6"})])],-1))])])],2),o("div",{class:w(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[o("div",F0,[o("table",U0,[o("thead",null,[o("tr",{class:w(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[o("th",{class:w(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),o("th",{class:w(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),o("th",{class:w(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),v[13]||(v[13]=o("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),o("tbody",{class:w(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(S(!0),I(z,null,ue(m.value,(b,H)=>(S(),I("tr",{key:H,class:"hover:bg-indigo-500/5 transition-all"},[o("td",{class:w(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},B((r.value-1)*c.value+H+1),3),o("td",{class:w(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[o("span",H0,B(b.chapter),1)],2),o("td",{class:w(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},B(b.nama_item),3),o("td",j0,[o("span",W0,B(b.jumlah),1)])]))),128))],2)])]),o("div",{class:w(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(S(!0),I(z,null,ue(m.value,(b,H)=>(S(),I("div",{key:H,class:"p-6 space-y-4"},[o("div",J0,[o("span",V0,"#"+B((r.value-1)*c.value+H+1),1),o("span",Y0,B(b.chapter),1)]),o("div",{class:w(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[o("div",Q0,B(b.nama_item),1),o("div",q0,[v[14]||(v[14]=o("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),o("span",z0,B(b.jumlah),1)])],2)]))),128))],2)],2),o("div",$0,[d.value>1?(S(),I("div",Z0,[o("button",{onClick:v[2]||(v[2]=b=>h(r.value-1)),disabled:r.value===1,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,X0),(S(!0),I(z,null,ue(R.value,(b,H)=>(S(),I(z,{key:H},[b==="..."?(S(),I("span",ep,"...")):(S(),I("button",{key:1,onClick:ee=>h(b),class:w(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",r.value===b?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},B(b),11,tp))],64))),128)),o("button",{onClick:v[3]||(v[3]=b=>h(r.value+1)),disabled:r.value===d.value,class:w(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,np)])):Te("",!0),o("button",{onClick:A,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},B(c.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},ip=Wt(ap,[["__scopeId","data-v-cfffbd19"]]),Fn="data:image/jpeg;base64,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",Si="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCABHAEcDASIAAhEBAxEB/8QAHgAAAQQDAQEBAAAAAAAAAAAAAAEDBwgCBgkEBQr/xAAwEAABAgUDAwIGAgIDAAAAAAABAgMABAUGEQcSIQgxQRNRCRQiQmGBMnEloVJikf/EABwBAAAHAQEAAAAAAAAAAAAAAAABAgQFBgcIA//EACgRAAEDAwQBBAIDAAAAAAAAAAEAAgMEBREGEiFRMQcUYXEiQROBof/aAAwDAQACEQMRAD8A4FyUk9OzCZZhBUtR4Aj1zdqV6WyVyK8fhJhbNmkytxyzrmMFzBzFnbF05tG4qNN1y6p6Zk5KXaBQ/LSyXNyyR9JyRjg5iDul0dbpG5bkFXrSuko9S07y1+1zSqoOsusK2OtlJHgiMYs5dPStSrzZen9Ma7L1P0mgTJuEImlqJxhLac7v/feIdvPQu8LNnXafWqNMycw0cLYmGilSf7Bj0pL1RVQ5OD0vC76HvdrcTs3N7C0XPiCH56mTsgsomGFJx5Ihj8xLtcHDIVPfG+N21wwUQY4zAceIINIS8Y4GYITMEBBZsOqZeS6g4KVAiLS9MeoErXaMqxq44n5apt+ktZ7oV3BH5yAIquASeeP7jdtJrvdo1RbZQ6UkKBSrPY+IhL5Re7pMgchXjQl7Nnu4Dj+L+Cp8nKFWbIuqYtyouvSU9KOlLD6CUqSR4PaN4pmsTE/TkWfrPabFXkDnE7sCXEkjG4rSAo++CY9lfo0jq7o/TNUqShTk/TgJWukj6lrAz6vHg7gM/iPRZmmk5qNbTj1uynr1SlNByblgnPqtcAOAeTk9u2BGbSSfmAfP+/0un4It1MXjBaRnsYPajHVzpot+p09FxaR1FdakXWtzzPpAPsK5JylJP0485iudz2S/TXSqXQcA9o6I6M9P9L1xmXbesK7mrfvhDeZKmzbuyWqix3QSclKiM/SlPge8RlrjoHPUm739NtebHm7Ku2XUouh+V2B/wPpOAlOfuAix2661NI0OedzO+vtZnqLSNsvUrmwAMm87e/oqjS2nGV7XRtI8GMST5MSRq1o5XrDq7lNq8lyOWX2+W3k+FIV9yfzEdzEs9LrKHRtIi701XFVRhzCsIulpq7VUOimaQQmwkD+R/UELxn6U/swQ4UWsefeH6dNLkpxEwgnKT4MM7j7QAkHMG4BzcFKY8seHDyFbPog1vp1vXeLYu2Y/w1fZ+TqIVghIJykgHjO4J54ie6XY146TatPWrb7i2qjJOlymq8TTX/Aj7gRu94572RcbtOmmwh0pUhQKVDwYvr08a4L1cs6muzT2busza9Kur5+dlQQkoz9yxuUcY7DvGZajtclPL/LHwunvTbVMNbSe0qDnjH2FuvUFpVX7mtSR6nNCadNSc0zNfL3VSZNSg7SZ5I3Kxjn08KQAo45OMRZXo5uGT+Jjpinpw6qrKlXKnRKUsW5ePKJ5p1CCraogJ9XgH+RPeK9ap9V9c051Za1Q6VZ5qiv1unJm6tKzUuiYZceKiFbmnQpAOAPEb3pB8czqssW7JJ27dPbaq1NASzPy0vSGJQuAnCnAtloKBwewPiGtJUQujy523PkfoqTutBWw1GI49+05a7PI+PlQ9qR0gVu26a9p/qgwDITylM0isJRuclnRyM5xwcbcZ43RQrW7Set6ZXhUbSuKWCJqnTKmX9qsjcD4MfoN1aqGg3WJ023FemmaES6hLiZlmVgB2VUlSVYIycHjH7jj98R+3KWKvblel5fbNVq2WZ2or8rfUtYUr/QhxpypqqWqMT3ZaUx9RrdbbvaxVMjLJAOQe8Kl5Ow8frMEOzct8rMraUckGCNNBBGVy49pa4gpkDyTj2g4ycDP5MATkwbUp5VCjjKSnZOYXLvJcCjwewiV9HNUa3ZVdlK/Qp0szEuvKSDwr3B8EEGIj3EduI91NrExTnUutKOQe5hjXUjauItKnbFeJLTViQHAXR2w3NBtcpCSrUreTFt3FMYTNSE4oJl/U9kKUSdv67xI1U6V9W6HSPSY0sFVbeTmXqFLCnUuDwewEc1aBqa6wEOIm1NrHIwrGIky0esDU+1FsrpOoFRaLBBZ3TilJSf6JxGfVGnJGuIIJHwuhrf6kU0sbXBzQcfsZBXRDpg6fOraiSVZt+Xtuo0im1qXQ0tcy2oJQA4lSjgjA+kYirfxf6rpzS9aJCwbIqzc01bdvtU6bdbOR66FuFQ/2IjTUn4h+vN80ZNOuTVefcabSdqGFhrPH/TEVvvi/qjddQcm5mbcdU4rK3XFlSlH3JPeJe02csdwCB2VU9XayZPCdz2k4IAb45Xwqk4lyccWkZGfEEM7lK7QRd2jaAFhb3b3l3aNxPPYQgJOQmCCDCQskoA5gKgDiCCE+SglDi0/wWR74hROTKeQ8QO0EEDAKUHOb4KRUxMO/Spwn+zCbB3JzBBAPHARFznHJKWCCCCRL//Z",Ei="data:image/jpeg;base64,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",Un="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEMAQgMBIgACEQEDEQH/xAAvAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQEAAAAAAAAAAAAAAAMCAAEE/9oADAMBAAIQAxAAAALneeq3N6YxITinTDAnozEmTYDNnc1Jk36ya03xNxQh2XBIwO8PQ+5S7efN6JekqjdjO3yuzKMLiKvm1JFgrc1Jm3wWbZybdtjTc4NQOO/AmvLAJKcBtzAO7//EAAL/2gAMAwEAAgADAAAAIc0nU/TKJNccTyFf+RLLPggHnfP/xAAC/9oADAMBAAIAAwAAABDhTpTB5g1LPEJAf6IdAjMNyGPz/8QAJBEAAQQBAwMFAAAAAAAAAAAAAQACAwQhEBESFCIxEzJScZH/2gAIAQIBAT8AB4nwFXmi3AcE2vDK3t2VujxBwujHxU8RZsdtK9ySEjOE2xHZi85XohSQNlg8Z2T2FjiCNIpXROBB+11TVTstLQCcFXoA7vas6044+Psb+K45wcACQnlDT//EACIRAAEEAQQCAwAAAAAAAAAAAAEAAgMRBBAhIjESFBNhgf/aAAgBAwEBPwAix2p4ZaJaU6eWN3K1i5lkbr2yoJQ6xemRiMlB2op0EmPJ1svlKjmMU31aY4PaCDpLE2RpB/F6xWVjkOsBYU5bxctq0sLKe/yPIrEALSSE3rX/xAAkEAADAAECBgMBAQAAAAAAAAAAAQIDERIEEBMhMVEiMkFhcf/aAAgBAQABPwLbP6zpejYKDpjxjgcib0Mi1WpNNE5Zr7G31y0KgqReCO/YqdtGhFXIsifO0aEmSd0biBw4ZGKMq7dqH1MT0tCpMrlJHouNtEPd8KL34bMObHxE7Mi7+zNw9Yb7H2nlD5Wt8f0iN+Pt5RriyLTK9rRhwcNDTWYzY92jMkdPJ/psoiiWJ6GvTrVeC/lTNKOF4mp+NM4rSoT5SyLFQmv06Kf1Ztc+ZGnr2Rjm626+D4GNJ+SYn0bVyTFT0ISLqkbq9n//xAAeEAADAAIDAQEBAAAAAAAAAAAAAREhMRBBUXFhIP/aAAgBAQABPyHCgl7mP8gmJ7IHwmIaZmMQ9vRP0h8kmHwZJXY5hkqaRm7wxDzwrFcFqTZFj0XnRlUFviFOBRaQuDetMwfR9hpmhqEshP6EydonEhNOgxgkmVwKJI/gjuKELwOhmKFRfbhrf08WxeqkOo74i+BDNLQbl4MN5BN6NjaNiBQQheI0MXZKyQWIWOODs8j/xAAeEAEBAQEAAgMBAQAAAAAAAAABABEhMUFRYYFxkf/aAAgBAQABPxBbRF9TtdCF5DC+2an3Kb1tEIZPV8L4lnZvW56gDO2EAB9FkoJPFjyx9XpfSY+Kc85PO5IaiEyZhpYEeLf5xHMYQOPJEe2iGd9GXgif7fpiR98/i4MT8i0nL8Tky+x0YsfQaDNoPEtrzMMduiF9IWfwdIeHInl5iR4HGyVy0IdhdJShfhYYmU2fgrSw92H6hEw54fM7t8t9ipIFPG8S5lebLKPpG4ckcbHOxh2eHd2cDvcvE/SJoJZbj5RxpxSVgbA5iJhiPU1ojGebv+hI22/kT5voJre5v//Z",Ii="data:image/jpeg;base64,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",Bi="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCABJAEsDASIAAhEBAxEB/8QAHgAAAAYDAQEAAAAAAAAAAAAAAAECBQYHAwgJBAr/xAA3EAABAgUDAgQFAQYHAAAAAAABAgMABAUGEQcSIQgxIkFRgRMyYXGRCRQWI0JSwRUXJEOCodH/xAAbAQACAwEBAQAAAAAAAAAAAAAEBwADBQEGAv/EACYRAAEEAgIBAwUBAAAAAAAAAAEAAgMEBREhMUEGElETFSJxseH/2gAMAwEAAhEDEQA/AOA+RBb0jjEJQNygD2zFo2ppLTLlt9ibbBUpxA+Xvn0g2hj58g8si7AWhjsZZychZD2FWHjVwPeDAx37+sWNdugVwUJlUw1ITKEJ+YusqAH5EQWeodSpzikPyyuPpHbWOuU3alaQpcxV6g/2ysIXkQnPKvYQZPGAPxBHcng5gbgOE/mAFn65R4CR/aEKJxgDv9IPPrCVrwcCJ4UQ4GScQeVnkH/uEQtPyxBsLoGyiGfIYH1i/wDpNuCkTc9J0msTBbQ2+Mrzgg8YP5xFABRJ75iU6V3AuhV9LnxNoJHaNrAXjRyTHno8Le9NZD7flWPPR4K3Iv7Ua9KNek1QrjUzWKe89vZlp5BW0+jORjJx5Zjwf5QaAa0qcRIPqtituOKU6zNDdK5PZDaUpykZyOSY9dJlJbWzR8TtObW5WLcQlT6wr5pY4SjA75BzDHQbam7nknSW1malUglTZwsjyUIdAgq3odvaCPG0+G1a2Qi3I0OB635VU629JF2adzaxP0o/CKN7U1LkLbUk9jlOQPsYpasW3UaO4pL7ZKQfmAjfax6xqR+7E1bi2f3gpCk4naU6CpSU+SgCfEc8jA4xFa6kdO9DvFt2oabbg4hCjM0ad8L7SkjKj4gnj6d+I8TmPS1efb6vY7C8Fm/SFSfb6nDvLfP+rULPGVDEIMSu9LCn6JNKbelHGVDnY4gpP4MRZxtbSyhxOCO8LuxWmrSFjxpK61UnqSFkg0kxk7RjjIkKKQceUDkcIcHSAGO0KZfUw6l1s8pOeIR3GTwILd5AcfSON2DsKAkHYWzfRzromxLqkpioKU9KTH+nn5bfhLiFjb4ge+M59o2Muiy1aYapNz9uuB2mzhEzSphI8MwwonKfdIP5jnxYdZcps+lPxMenMdAOmzUildQmiaNMalNYui2QX6O8tY/jy4Cf4KfsErPfzhv+kMwyxEIJT0nh6HzjLcArzHkKdXXbQt6isdRWh7TrDEq+P8RkkKy5IugjclQGPAdwGcYPPMWVYFh9L36jVuvu2tVZfTrWSSl0rMytYRIVxwHtsSBtdJ3ZUpeDkekYNNWEaf6fyWuctRkVC26mldL1Foi3EhO0IwlZSe5Q45uHB5TCtH+l/oJevZjUyz+uek0qWlptt40eoUCbU+wdw2oUsJCVEHGSBiNXKM+hNy4jXLXD+Fa+ZiEM/wCTiNctcPj4K1w6i+mS75O6JjSDX21zR7skvDLVTAUl/nACljIWk4OCD3MaYax6Q1nTq5Zu3K3JKZmZV0oV4cBWD3HqD6x9JXVT0xWB1Q0G378pFYpFyMN22xT5Ws08pIW60lR3AZJQfEDg8iOUHXv08PzNjTxqVN3VqyJ9cnVJ5Q8TkoClDP3G7d+YDzOHp5bFNts179c/tA57A08xhGXYyPqa5/a5putLaVsWORCefWHG55NUlVXGSnAB4huhOSMMchb8JEzRmKQsPhK2k8k5gEhIwIBX5CExTyq1kl5hxh0OJOCD5RbWhmqNZse4pK5KHUnZealHQpLjKyk7fMZ+oyPeKhAzDpb9WNOeBCjjMaeLuvpWA4FauIvvoWw8FdMm9Qbj1Y0vqlU0vUXKdXUtrrVGYVn9kmQsLWoIHODwM48ogUlok7dMwG0oRKvf7iHU7Dn3xFDdPPUjdmj9RNdsquKlnXmwiYbCjteT/SoDuMmNrtOuv/RK7KP+wa5aQInJ5KcN1SjOol1/c7kqyf8A2HLSzNK1Xa5/J+E+KGdo26zHP5Pkb/isvor6k746OLtlbCmK29M29Mzu5+n/ABcttuLISVpHYE4GT6CJZ+oBU5TUqxNXtUbVlymlOsyUq44U4C3UTeVYzjPzCIRaOtn6brsqbpuNFwCdZ8aKa7NbzuHIG4NYireuv9TGx9RdGVaGaJ2G/QKK7Ml6pvTc0l1ycV4SCSlKccpzzA+SydVsBbE32jztC5fL1W1iyFha3ySufepDSWp9Q2gErJ+sReHW6K0qszynFZPPENhbP9Q/EJ27KySy5zekib8kc1t7m9bSfKABmB5e8BPcfeAggkYSRyQYPJxx5QZ/m+w/vCf5PeJ2ovVT6vO09zMs6QIe5W/p9hABdII84jaO3vAX294vitzw8MdpFw3LMA/BxUwTqvVEtfDaeVmGCsXLVa06VzM0ojPbMNh+T/lGSLJb9udmnuOl9z5G5YZ7XvJCAGIECBAaBX//2Q==",Ut=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
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
Kecepatan Item -1.0s`}],Ti="/toram-vue/assets/enhance_weapon_crysta-eGLehiWn.png",Ki="/toram-vue/assets/enhance_armor_crysta-YvncoZmF.png",Ni="/toram-vue/assets/enhance_additional_crysta-mE1Kazx1.png",Gi="/toram-vue/assets/enhace_special_crysta-CIVkxwj2.png";function lp(e){const t={};return e&&e.split(`
`).map(n=>n.trim()).forEach(n=>{if(!n.match(/[+-]\s*\d/))return;const a=n.match(/^(.+?)\s*([+-])\s*(\d+)(%)?$/);if(!a)return;const[,i,l,s]=a;t[i.trim().toUpperCase()]={sign:l,value:Number(s)}}),t}const op={class:"fixed inset-0 pointer-events-none z-0"},sp={key:0,class:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},rp={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse",style:{"animation-delay":"2s"}},cp={class:"relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-0"},up={class:"flex items-center gap-1"},dp={class:"text-center md:text-left space-y-1"},pp={class:"flex items-center gap-3"},gp={class:"text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all"},mp={class:"flex flex-col items-center md:items-end gap-3"},fp={class:"flex gap-2"},hp={class:"space-y-2 col-span-2 md:col-span-2 lg:col-span-2"},Ap={class:"relative group"},bp={class:"space-y-2 col-span-1"},kp={class:"relative group"},vp={class:"space-y-0 w-full col-span-2 lg:col-span-3"},yp={class:"flex flex-col md:flex-row items-center gap-3 w-full"},xp={class:"relative group w-full"},_p={class:"relative py-4 flex items-center justify-center"},wp={class:"space-y-10 relative z-10 pb-32"},Pp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Mp=["onClick"],Dp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Rp={class:"lg:col-span-6 relative group"},Cp={class:"relative p-6 md:p-10"},Sp={class:"flex flex-col md:flex-row gap-8 items-start"},Ep={class:"relative shrink-0 mx-auto md:mx-0"},Ip=["src","alt"],Bp={class:"flex-1 space-y-6 w-full"},Tp={class:"space-y-2"},Kp={class:"grid grid-cols-1 gap-4"},Np={key:0,class:"w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0"},Gp={class:"flex items-center gap-4"},Op={class:"flex flex-col"},Lp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Fp=["onClick"],Up={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Hp={key:0,class:"py-40 text-center animate-pulse"},jp={class:"flex flex-col items-center gap-10 py-20"},Wp={key:0,class:"flex flex-wrap justify-center items-center gap-3"},Jp=["disabled"],Vp={class:"flex gap-2.5 items-center"},Yp=["onClick"],Qp={key:1,class:"px-2 font-black text-blue-500"},qp=["disabled"],zp={class:"flex items-center gap-4 opacity-50"},$p={class:"text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"},Zp={class:"fixed bottom-8 left-8 z-[200] hidden lg:block"},Xp={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t=new Map;function n(T){return t.has(T.code)||t.set(T.code,lp(T.view)),t.get(T.code)}const a=Vn();function i(){l.value="",s.value=[],r.value=[],m.value="asc",d.value=10,a.push({query:{}})}const l=le(""),s=le([]),r=le([]),c=le(!1),p=le(!1),u=le(1),d=le(10),m=le("asc"),A=le(null),y=le(null),h=Ra(),R=te(()=>{try{return h.query.filter?JSON.parse(h.query.filter):null}catch{return null}}),K=()=>{l.value="",s.value=[],r.value=[],u.value=1},_=T=>{const x=T.type?.toUpperCase();if(x!=="UPGRADE")return ee[x]||Fn;const ie=xe(T);return ee[`${ie}_UPGRADE`]||Un},v=T=>({NORMAL:"bg-blue-500/10 text-blue-500 border-blue-500/40",UPGRADE:"bg-purple-500/10 text-purple-500 border-purple-500/40",ADDITIONAL:"bg-yellow-500/10 text-yellow-500 border-yellow-500/40",WEAPON:"bg-red-500/10 text-red-500 border-red-500/40",ARMOR:"bg-green-500/10 text-green-500 border-green-500/40",SPECIAL:"bg-pink-500/10 text-pink-500 border-pink-500/40"})[T?.toUpperCase()]||"bg-slate-500/10 text-slate-500 border-slate-500/40",b=T=>T.link?Ut.find(x=>String(x.code)===String(T.link)):null,H=T=>Ut.filter(x=>String(x.link)===String(T.code)),ee={NORMAL:Fn,UPGRADE:Un,ADDITIONAL:Ei,ADDITIONAL_UPGRADE:Ni,ARMOR:Ii,ARMOR_UPGRADE:Ki,WEAPON:Si,WEAPON_UPGRADE:Ti,SPECIAL:Bi,SPECIAL_UPGRADE:Gi},oe=T=>{if(!T)return null;let x=T,ie=0;for(;x.link&&ie<10;){const fe=Ut.find(W=>String(W.code)===String(x.link));if(!fe)break;x=fe,ie++}return x},xe=T=>oe(T)?.type?.toUpperCase()||"NORMAL",J=T=>{if(!T)return"text-cyan-500";const x=T.type?.toUpperCase();if(x==="UPGRADE"||x==="ENHANCER")return"text-gray-400";const ie=xe(T);return{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[ie]||"text-cyan-500"},Z=T=>T?Array.isArray(T)?T:T.split(/,|\n/).map(x=>x.trim()).filter(x=>x):[],ne=T=>{l.value=T,window.scrollTo({top:0,behavior:"smooth"})},L=te(()=>{let T=Ut.filter(x=>x.name?.trim());if(R.value){const{stats:x,types:ie}=R.value;x&&Object.keys(x).length>0&&(T=T.filter(fe=>{const W=n(fe);return Object.entries(x).every(([we,ge])=>{const Ee=W[we.toUpperCase()];return!(!Ee||Ee.sign!==ge.sign||ge.value!==null&&(ge.op===">="&&Ee.value<ge.value||ge.op==="<="&&Ee.value>ge.value))})})),ie&&ie.length>0&&(T=T.filter(fe=>{const W=xe(fe),we=fe.type==="UPGRADE";return ie.some(ge=>{if(!ge.includes("_"))return!we&&W===ge;const[Ee,At]=ge.split("_");return At==="UPGRADE"&&we&&W===Ee})}))}if(l.value){const x=l.value.toLowerCase();T=T.filter(ie=>ie.name.toLowerCase().includes(x))}return s.value.length>0&&(T=T.filter(x=>{const ie=xe(x),fe=x.type==="UPGRADE";return s.value.some(W=>{if(!W.includes("_"))return!fe&&ie===W;const[we,ge]=W.split("_");return ge==="UPGRADE"&&fe&&ie===we})})),r.value.length>0&&(T=T.filter(x=>{const ie=(x.view||"").toUpperCase();return r.value.every(fe=>ie.includes(fe.toUpperCase()))})),T.sort((x,ie)=>m.value==="asc"?x.name.localeCompare(ie.name):ie.name.localeCompare(x.name))}),ae=te(()=>{const T=(u.value-1)*d.value;return L.value.slice(T,T+d.value)}),Pe=te(()=>Math.ceil(L.value.length/d.value)||1),Le=te(()=>{let T=Math.max(1,u.value-2),x=Math.min(Pe.value,T+4);x-T<4&&(T=Math.max(1,x-4));const ie=[];for(let fe=T;fe<=x;fe++)ie.push(fe);return ie}),_e=T=>{A.value&&!A.value.contains(T.target)&&(c.value=!1),y.value&&!y.value.contains(T.target)&&(p.value=!1)};return tn(()=>{window.addEventListener("click",_e)}),_i(()=>{window.removeEventListener("click",_e)}),Pt([l,s,r,d,m],()=>{u.value=1}),(T,x)=>{const ie=sa("RouterLink"),fe=sa("router-link");return S(),I("div",{class:w(["min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent",e.isDark?"text-slate-200":"text-slate-900"])},[o("div",op,[o("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),x[6]||(x[6]=o("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-transparent"},null,-1)),e.isDark?(S(),I("div",sp)):Te("",!0),e.isDark?(S(),I("div",rp)):Te("",!0)]),o("div",cp,[o("header",{class:w(["relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500",e.isDark?"border-white/5":"border-black/5"])},[o("div",up,[x[9]||(x[9]=o("div",{class:"relative group"},[o("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"}),o("img",{src:Pa,class:"relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110",alt:"Logo"})],-1)),o("div",dp,[o("div",pp,[o("h1",gp,[o("span",{class:w(T.text-T.white)},"TIMI ",2),x[7]||(x[7]=o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"},"DB",-1))]),x[8]||(x[8]=o("div",{class:"px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase"},"Bahasa Indonesia",-1))]),o("p",{class:w(["text-xs font-black uppercase tracking-[0.5em] opacity-60",e.isDark?"text-slate-400":"text-slate-500"])},"Toram Online Database",2)])]),o("div",mp,[o("div",{class:w(["group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white border-slate-200 shadow-xl shadow-slate-200/50"])},[x[10]||(x[10]=o("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"},null,-1)),o("span",{class:w(["relative text-xs font-black uppercase tracking-[0.2em]",e.isDark?"text-cyan-400":"text-blue-600"])}," Results : "+B(L.value.length)+" Xtall ",3)],2),o("div",fp,[(S(),I(z,null,ue(3,W=>o("div",{key:W,class:"w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"})),64))])])],2),ye(ie,{to:"/xtall/advanced",class:"mb-6 block w-full rounded-2xl border-2 border-indigo-500 bg-gradient-to-t from-indigo-400 to-purple-500 px-6 py-5 text-center text-lg font-black text-white shadow-xl hover:scale-[1.02] transition"},{default:Xe(()=>[...x[11]||(x[11]=[Ve(" 🔎 Advanced Xtall Search ",-1)])]),_:1}),o("section",{class:w(["grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl",e.isDark?"bg-slate-950/60 border-red/100 shadow-black/40":"bg-red/80 border-slate-200 shadow-slate-300/50"])},[o("div",hp,[x[14]||(x[14]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2"},[o("span",{class:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"}),Ve(" Search Name ")],-1)),o("div",Ap,[x[12]||(x[12]=o("div",{class:"absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"},null,-1)),ve(o("input",{"onUpdate:modelValue":x[0]||(x[0]=W=>l.value=W),type:"text",placeholder:"Search xtall name...",class:w(["relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm",e.isDark?"bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600":"bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400"])},null,2),[[qe,l.value]]),x[13]||(x[13]=o("svg",{class:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-width":"3"})],-1))])]),o("div",bp,[x[17]||(x[17]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4"},"Scale",-1)),o("div",kp,[ve(o("select",{"onUpdate:modelValue":x[1]||(x[1]=W=>d.value=W),class:w(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200":"bg-white border-slate-200 focus:border-purple-500 shadow-sm"])},[...x[15]||(x[15]=[o("option",{value:10},"10 Units",-1),o("option",{value:25},"25 Units",-1),o("option",{value:50},"50 Units",-1),o("option",{value:9999},"Show All",-1)])],2),[[it,d.value]]),x[16]||(x[16]=o("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"})],-1))])]),o("div",vp,[x[21]||(x[21]=o("div",{class:"flex items-center gap-2 ml-4"},[o("div",{class:"w-1.5 h-4 bg-red-600 rounded-full"}),o("label",{class:"text-[11px] font-[1000] uppercase tracking-[0.25em] text-red-600"}," Sequence & Reset Control Center ")],-1)),o("div",yp,[o("div",xp,[ve(o("select",{"onUpdate:modelValue":x[2]||(x[2]=W=>m.value=W),class:w(["w-full h-[60px] px-6 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-12",e.isDark?"bg-slate-900 border-white/10 focus:border-red-500 text-slate-200":"bg-white border-slate-200 focus:border-red-500 shadow-sm"])},[...x[18]||(x[18]=[o("option",{value:"asc"},"Sequence: A to Z",-1),o("option",{value:"desc"},"Sequence: Z to A",-1)])],2),[[it,m.value]]),x[19]||(x[19]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-500"},[o("svg",{class:"w-5 h-5 group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))]),o("button",{onClick:i,class:"h-[60px] w-full px-1 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]"},[...x[20]||(x[20]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 group-hover:rotate-180 transition-transform duration-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),o("span",{class:"whitespace-nowrap"},"Reset",-1)])])])])],2),o("div",_p,[o("div",{class:w(["absolute inset-0 h-[1px] my-auto",e.isDark?"bg-white/5":"bg-slate-200"])},null,2),x[22]||(x[22]=o("div",{class:"absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"},null,-1)),o("div",{class:w(["relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all",e.isDark?"bg-[#020617] border-white/10 text-slate-500":"bg-transparent-50 border-slate-200 text-slate-400"])}," Xtall Versi Indonesia ",2)]),o("main",wp,[(S(!0),I(z,null,ue(ae.value,(W,we)=>(S(),I("div",{key:W.code,class:"flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry",style:ht({animationDelay:we*70+"ms"})},[o("div",Pp,[b(W)?(S(),I("div",{key:0,onClick:ge=>ne(b(W).name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/300 border-white/65 hover:border-cyan-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-cyan-400"])},[x[23]||(x[23]=dn('<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-4ca8d73f></div><div class="flex items-center gap-2 mb-2" data-v-4ca8d73f><svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" data-v-4ca8d73f><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-4ca8d73f></path></svg><span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest" data-v-4ca8d73f>Previous</span></div>',2)),o("p",{class:w(["text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},B(b(W).name),3),x[24]||(x[24]=o("div",{class:"absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🧬",-1))],10,Mp)):(S(),I("div",Dp,[...x[25]||(x[25]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))]),o("div",Rp,[o("div",{class:w(["absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",W.type==="UPGRADE"?"bg-purple-600":"bg-blue-600"])},null,2),o("div",{class:w(["h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl",e.isDark?"bg-[#0b1226]/90 border-white/80 group-hover:border-white/80":"bg-white border-slate-200 group-hover:border-blue-400"])},[o("div",Cp,[o("div",Sp,[o("div",Ep,[x[26]||(x[26]=o("div",{class:"absolute inset-0 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"},null,-1)),o("div",{class:w(["relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110",e.isDark?"bg-slate-950 border-white/70":"bg-slate-50 border-slate-200"])},[o("img",{src:_(W),class:"w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]",alt:W.type},null,8,Ip)],2),o("div",{class:w(["absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black",v(W.type)])},B(W.type.charAt(0)),3)]),o("div",Bp,[o("div",Tp,[x[27]||(x[27]=o("div",{class:"flex flex-wrap items-center gap-3"},null,-1)),o("h3",{class:w(["text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400",J(W)])},B(W.name),3)]),o("div",{class:w(["p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]",e.isDark?"bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]":"bg-slate-50 border-slate-100"])},[o("div",Kp,[(S(!0),I(z,null,ue(Z(W.view),(ge,Ee)=>(S(),I("div",{key:Ee,class:"flex items-center gap-4 group/item"},[ge.includes("Dengan")?Te("",!0):(S(),I("div",Np)),o("p",{class:w(["text-xs md:text-sm font-bold tracking-tight transition-all duration-300",ge.includes("Dengan")?"text-green-500 italic":ge.includes("-")?"text-red-500":e.isDark?"text-slate-300 group-hover/item:text-white":"text-slate-600 group-hover/item:text-slate-900"])},B(ge),3)]))),128))])],2)])])]),o("div",{class:w(["px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4",e.isDark?"bg-white/[0.02] border-white/5":"bg-slate-50 border-slate-100"])},[o("div",Gp,[o("div",Op,[o("span",{class:w(["text-[10px] font-black tracking-widest transition-colors",e.isDark?"text-slate-400":"text-slate-500"])}," TYPE XTALL ",2),o("span",{class:w(["text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter",v(W.type)])},B(W.type),3)]),x[28]||(x[28]=o("div",{class:"h-8 w-[1px] bg-white/10 hidden sm:block"},null,-1))]),ye(fe,{to:"/xtall/"+W.code,class:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"},{default:Xe(()=>[...x[29]||(x[29]=[Ve(" Details ",-1)])]),_:1},8,["to"])],2)],2)]),o("div",Lp,[H(W).length?(S(!0),I(z,{key:0},ue(H(W),ge=>(S(),I("div",{key:ge.code,onClick:Ee=>ne(ge.name),class:w(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/65 hover:border-purple-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-purple-400"])},[x[30]||(x[30]=dn('<div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-600 to-yellow-700 opacity-40 group-hover:opacity-100 transition-opacity" data-v-4ca8d73f></div><div class="flex items-center justify-end gap-2 mb-2 text-right" data-v-4ca8d73f><span class="text-[9px] font-black uppercase text-purple-500 tracking-widest" data-v-4ca8d73f>Next Upgrade</span><svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24" data-v-4ca8d73f><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-4ca8d73f></path></svg></div>',2)),o("p",{class:w(["text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},B(ge.name),3),x[31]||(x[31]=o("div",{class:"absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🚀",-1))],10,Fp))),128)):(S(),I("div",Up,[...x[32]||(x[32]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))])],4))),128)),L.value.length===0?(S(),I("div",Hp,[x[33]||(x[33]=dn('<div class="inline-flex relative mb-8" data-v-4ca8d73f><div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping" data-v-4ca8d73f></div><div class="text-8xl relative" data-v-4ca8d73f>🔎</div></div><h2 class="text-3xl font-[1000] uppercase italic tracking-tighter" data-v-4ca8d73f>Xtall not found</h2><p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4" data-v-4ca8d73f>Search xtall name with correct Indonesian name.</p>',3)),o("button",{onClick:K,class:"mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"},"Reset")])):Te("",!0),o("div",jp,[Pe.value>1&&d.value<1e3?(S(),I("nav",Wp,[o("button",{onClick:x[3]||(x[3]=W=>u.value--),disabled:u.value===1,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," « ",8,Jp),o("div",Vp,[(S(!0),I(z,null,ue(Le.value,W=>(S(),I(z,{key:W},[W!=="..."?(S(),I("button",{key:0,onClick:we=>u.value=W,class:w(["w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center",u.value===W?"bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1":e.isDark?"bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500":"bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm"])},B(W),11,Yp)):(S(),I("span",Qp,"..."))],64))),128))]),o("button",{onClick:x[4]||(x[4]=W=>u.value++),disabled:u.value===Pe.value,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," » ",8,qp)])):Te("",!0),d.value<100?(S(),I("button",{key:1,onClick:x[5]||(x[5]=W=>d.value=9999),class:"group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl"},[...x[34]||(x[34]=[o("div",{class:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"},null,-1),o("span",{class:"relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic"},"Explore All",-1)])])):Te("",!0),o("div",zp,[x[35]||(x[35]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1)),o("p",$p,"Page "+B(u.value)+" of "+B(Pe.value),1),x[36]||(x[36]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1))])])])]),o("div",Zp,[o("div",{class:w(["px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500",e.isDark?"bg-slate-900/80 border-white/10":"bg-white/80 border-slate-200 shadow-2xl"])},[...x[37]||(x[37]=[o("div",{class:"flex items-center gap-4"},[o("div",{class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),o("span",{class:"text-[9px] font-black uppercase tracking-widest opacity-60"},"Versi Nama Indonesia")],-1)])],2)])],2)}}},eg=Wt(Xp,[["__scopeId","data-v-4ca8d73f"]]),Wl=310,Wa={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Ja={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5},Lt=e=>Math.floor(.025*Math.pow(e,4)+2*e),tg=(e,t,n)=>{let a=Math.floor((1-t/100)*Lt(e));for(let i=e+1;i<n;i++)a+=Lt(i);return a},Va=(e,t,n)=>{let a=n,i=(1-t/100)*Lt(e);if(n<i){let l=t/100*Lt(e)+n;return[e,Math.floor(100*l/Lt(e))]}else{a-=i;let l=e+1;for(;Lt(l)<=a;)a-=Lt(l),l+=1;let s=Math.floor(100*a/Lt(l));return[l,s]}},ng={class:"space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4"},ag={class:"flex flex-col items-center gap-6 animate-bounce-slow"},ig={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},lg={class:"lg:col-span-2 space-y-6"},og={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},sg={class:"group"},rg={class:"group"},cg={class:"group"},ug={key:0,class:"space-y-8 animate-in slide-in-from-top-2"},dg={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},pg={class:"relative group select-container"},gg={class:"relative"},mg=["value"],fg={class:"relative group select-container"},hg={class:"relative"},Ag=["value"],bg={class:"flex flex-wrap gap-8 ml-2"},kg={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},vg={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},yg={key:1,class:"space-y-8 animate-in slide-in-from-top-2"},xg={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},_g={class:"relative group select-container"},wg={class:"relative"},Pg=["value"],Mg={class:"lg:col-span-1"},Dg={class:"space-y-6 sticky top-8"},Rg={class:"relative z-10 space-y-8"},Cg={class:"result-item"},Sg={class:"text-2xl font-black tabular-nums tracking-tighter"},Eg={class:"pt-8 border-t border-white/20 result-item"},Ig={class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-2"},Bg={class:"flex items-baseline gap-2"},Tg={class:"text-6xl font-black italic tracking-tighter drop-shadow-lg block"},Kg={class:"text-xl font-bold opacity-70"},Ng={class:"bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item"},Gg={class:"text-sm font-black tabular-nums tracking-wide"},Og={class:"absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text"},Lg={class:"space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll"},Fg={class:"text-[11px] font-black opacity-40"},Ug={class:"text-right"},Hg={class:"text-[10px] font-bold opacity-50 ml-1"},jg={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=le("mq"),n=le(1),a=le(0),i=le(Wl),l=le(!0),s=le(!1),r=Object.keys(Ja),c=le(1),p=le(r.length-1),u=le(Object.keys(Wa)[1]),d=le(1),m=te(()=>{let y=[],h=0;return r.forEach((R,K)=>{R.startsWith("Chapter")?h++:Ja[R]!==""&&y.push({id:K,label:`CH${h} - ${R}`})}),y}),A=te(()=>{const y=Number(n.value)||1,h=Number(a.value)||0,R=Number(i.value)||Wl,K=tg(y,h,R);let _=0;for(let J=c.value;J<=p.value;J++){const Z=Ja[r[J]];typeof Z=="number"&&(_+=Z),r[J].includes("Coenubia")&&!l.value&&(_+=125e5)}const[v,b]=Va(y,h,_);let H=[];if(s.value&&_>0){let J=y,Z=h;for(let ne=1;ne<=20;ne++){const[L,ae]=Va(J,Z,_);if(H.push({run:ne,lv:L,p:ae}),J=L,Z=ae,J>=R)break}}const ee=(Wa[u.value]||0)*(d.value||0),[oe,xe]=Va(y,h,ee);return{xpNeeded:K,totalMqXP:_,resLv:v,resP:b,diaryRuns:H,sqLv:oe,sqPercent:xe,sqXP:ee}});return(y,h)=>(S(),I("div",ng,[o("div",ag,[h[11]||(h[11]=o("div",{class:"text-center"},[o("h1",{class:"text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl"}," MQ Calculator "),o("p",{class:"text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse"},"Timi DB System")],-1)),o("div",{class:w(["p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl",e.isDark?"bg-white/5 border-white/10":"bg-slate-200/50 border-slate-300"])},[o("button",{onClick:h[0]||(h[0]=R=>t.value="mq"),class:w(["tab-btn",t.value==="mq"?"tab-active":""])},"Main Quest",2),o("button",{onClick:h[1]||(h[1]=R=>t.value="npc"),class:w(["tab-btn",t.value==="npc"?"tab-active":""])},"NPC Quest",2)],2)]),o("div",ig,[o("div",lg,[o("div",{class:w(["p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/60 border-white/40"])},[o("div",og,[o("div",sg,[h[12]||(h[12]=o("label",{class:"label-text"},"Current Lv",-1)),ve(o("input",{"onUpdate:modelValue":h[2]||(h[2]=R=>n.value=R),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,n.value,void 0,{number:!0}]])]),o("div",rg,[h[13]||(h[13]=o("label",{class:"label-text"},"Percent %",-1)),ve(o("input",{"onUpdate:modelValue":h[3]||(h[3]=R=>a.value=R),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,a.value,void 0,{number:!0}]])]),o("div",cg,[h[14]||(h[14]=o("label",{class:"label-text text-pink-500"},"Target Lv",-1)),ve(o("input",{"onUpdate:modelValue":h[4]||(h[4]=R=>i.value=R),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(S(),I("div",ug,[o("div",dg,[o("div",pg,[h[16]||(h[16]=o("label",{class:"label-text text-indigo-400"},"Start From",-1)),o("div",gg,[ve(o("select",{"onUpdate:modelValue":h[5]||(h[5]=R=>c.value=R),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(S(!0),I(z,null,ue(m.value,R=>(S(),I("option",{key:R.id,value:R.id,class:"dropdown-item"},B(R.label),9,mg))),128))],2),[[it,c.value]]),h[15]||(h[15]=o("div",{class:"select-arrow text-indigo-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",fg,[h[18]||(h[18]=o("label",{class:"label-text text-indigo-400"},"End At",-1)),o("div",hg,[ve(o("select",{"onUpdate:modelValue":h[6]||(h[6]=R=>p.value=R),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(S(!0),I(z,null,ue(m.value,R=>(S(),I("option",{key:R.id,value:R.id,class:"dropdown-item"},B(R.label),9,Ag))),128))],2),[[it,p.value]]),h[17]||(h[17]=o("div",{class:"select-arrow text-indigo-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])]),o("div",bg,[o("label",kg,[ve(o("input",{type:"checkbox","onUpdate:modelValue":h[7]||(h[7]=R=>l.value=R),class:"w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer"},null,512),[[wl,l.value]]),h[19]||(h[19]=o("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),o("label",vg,[ve(o("input",{type:"checkbox","onUpdate:modelValue":h[8]||(h[8]=R=>s.value=R),class:"w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer"},null,512),[[wl,s.value]]),h[20]||(h[20]=o("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])])])):(S(),I("div",yg,[o("div",xg,[o("div",_g,[h[22]||(h[22]=o("label",{class:"label-text text-emerald-400"},"Select Quest",-1)),o("div",wg,[ve(o("select",{"onUpdate:modelValue":h[9]||(h[9]=R=>u.value=R),class:w(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(S(!0),I(z,null,ue(Ge(Wa),(R,K)=>(S(),I("option",{key:K,value:K,class:"dropdown-item"},B(K),9,Pg))),128))],2),[[it,u.value]]),h[21]||(h[21]=o("div",{class:"select-arrow text-emerald-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",null,[h[23]||(h[23]=o("label",{class:"label-text text-emerald-400"},"Amount (Stack/Times)",-1)),ve(o("input",{"onUpdate:modelValue":h[10]||(h[10]=R=>d.value=R),type:"number",class:w(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,d.value,void 0,{number:!0}]])])])]))],2)]),o("div",Mg,[o("div",Dg,[o("div",{class:w(["p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive",t.value==="mq"?"bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30":"bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30"])},[o("div",Rg,[o("div",Cg,[h[24]||(h[24]=o("p",{class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-1"},"XP Required to Target",-1)),o("h3",Sg,B(A.value.xpNeeded.toLocaleString()),1)]),o("div",Eg,[o("p",Ig,B(t.value==="mq"?"Result After 1 Run":"Result After Turn-in"),1),o("div",Bg,[o("span",Tg," Lv "+B(t.value==="mq"?A.value.resLv:A.value.sqLv),1),o("span",Kg,B(t.value==="mq"?A.value.resP:A.value.sqPercent)+"% ",1)])]),o("div",Ng,[h[25]||(h[25]=o("p",{class:"text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1"},"Total XP Gained",-1)),o("p",Gg,B((t.value==="mq"?A.value.totalMqXP:A.value.sqXP).toLocaleString())+" XP ",1)])]),o("div",Og,B(t.value),1)],2),t.value==="mq"&&s.value&&A.value.diaryRuns.length>0?(S(),I("div",{key:0,class:w(["p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4",e.isDark?"bg-white/5 border-white/10":"bg-white border-slate-200 shadow-lg"])},[h[26]||(h[26]=o("p",{class:"text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2"},"Diary Projection",-1)),o("div",Lg,[(S(!0),I(z,null,ue(A.value.diaryRuns,R=>(S(),I("div",{key:R.run,class:"flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors"},[o("span",Fg,"RUN #"+B(R.run),1),o("div",Ug,[o("span",{class:w(["font-black",e.isDark?"text-white":"text-slate-800"])},"Lv "+B(R.lv),3),o("span",Hg,B(R.p)+"%",1)])]))),128))])],2)):Te("",!0)])])])]))}},Wg=Wt(jg,[["__scopeId","data-v-c84703e0"]]),Jg=280,Jl=54,Vg=55,Vl=265,Yg=300,Bt=510,Tt=277,{floor:Ie,min:Qg,max:qg}=Math,zg=(e,t,n,a,i)=>{const l=Ie(n*(100+(i||0))/100+(a||0));return(e||0)+Ie((t||0)/2)+Ie(l/6)},$g=(e,t,n,a,i,l)=>{const s=Ie(a*(100+(l||0))/100+(i||0)),r=(50+5*(e||0))/100,c=10+(t||0)-(n||0)+Ie(s/10);return Qg(100,qg(0,Ie(r*c)))},Zg=(e,t,n,a,i)=>{let l=Ie((e||0)*(1+(t||0)*.01+(n||0)*.02));const s=i;switch(a){case"Armor":l+=Ie(s.VIT/10);break;case"1H Sword":case"Bow":l+=Ie((s.DEX+s.STR)/20);break;case"2H Sword":l+=Ie(s.STR/10);break;case"Bowgun":l+=Ie(s.DEX/10);break;case"Staff":l+=Ie(s.INT/10);break;case"Magic Device":l+=Ie((s.INT+s.AGI)/20);break;case"Knuckle":l+=Ie(s.AGI/10);break;case"Halberd":l+=Ie((s.STR+s.AGI)/20);break;case"Katana":l+=Ie((s.DEX+s.AGI)/20);break}return l},Xg={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},em={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},tm={class:"lg:col-span-4 space-y-6 animate-float"},nm={class:"grid grid-cols-2 gap-x-4 gap-y-5"},am={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},im=["onUpdate:modelValue"],lm={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},om={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},sm=["onUpdate:modelValue"],rm={class:"lg:col-span-4 space-y-6"},cm={class:"space-y-4"},um={class:"relative group select-container"},dm={class:"relative overflow-hidden rounded-xl"},pm=["value"],gm={class:"grid grid-cols-2 gap-4"},mm={class:"group"},fm={class:"group"},hm={class:"space-y-3 pt-2"},Am={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},bm=["onUpdate:modelValue"],km={class:"lg:col-span-4 space-y-6 animate-float-slow"},vm={class:"flex items-baseline gap-2"},ym={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},xm={class:"flex items-baseline gap-2"},_m={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},wm={class:"space-y-4"},Pm={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},Mm={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},Dm={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},Rm={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=te(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=An({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:Jg,createSkill:10,itemDiff:Vl,basePot:Jl,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(p=>i.stats[p]=0),i.craftType==="Armor"?(i.stats.VIT=Bt,i.stats.TEC=Tt,i.itemDiff=Vl,i.basePot=Jl):(i.itemDiff=Yg,i.basePot=Vg,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=Bt,i.stats.STR=Tt):i.craftType==="2H Sword"?(i.stats.STR=Bt,i.stats.DEX=Tt):i.craftType==="Staff"?(i.stats.INT=Bt,i.stats.TEC=Tt):i.craftType==="Magic Device"?(i.stats.INT=Bt,i.stats.AGI=Tt):i.craftType==="Knuckle"?(i.stats.AGI=Bt,i.stats.DEX=Tt):i.craftType==="Halberd"?(i.stats.STR=Bt,i.stats.AGI=Tt):i.craftType==="Katana"&&(i.stats.DEX=Bt,i.stats.AGI=Tt))};tn(()=>l());const s=te(()=>zg(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),r=te(()=>$g(i.createSkill,s.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),c=te(()=>Zg(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(p,u)=>(S(),I("div",Xg,[u[17]||(u[17]=o("div",{class:"text-center py-4 animate-bounce-slow"},[o("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),o("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),o("div",em,[o("div",tm,[o("div",{class:w(n.value)},[u[3]||(u[3]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),o("div",nm,[(S(!0),I(z,null,ue(i.stats,(d,m)=>(S(),I("div",{key:m,class:"transition-all hover:scale-105"},[o("label",am,B(m),1),ve(o("input",{type:"number","onUpdate:modelValue":A=>i.stats[m]=A,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,im),[[qe,i.stats[m],void 0,{number:!0}]])]))),128))]),o("div",lm,[(S(),I(z,null,ue([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>o("div",{key:d[0]},[o("label",om,B(d[1]),1),ve(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,sm),[[qe,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),o("div",rm,[o("div",{class:w([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),o("div",cm,[o("div",um,[u[5]||(u[5]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),o("div",dm,[ve(o("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(S(),I(z,null,ue(a,d=>o("option",{key:d,value:d,class:"dropdown-item"},B(d),9,pm)),64))],544),[[it,i.craftType]]),u[4]||(u[4]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",gm,[o("div",mm,[u[6]||(u[6]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),ve(o("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[qe,i.prof,void 0,{number:!0}]])]),o("div",fm,[u[7]||(u[7]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),ve(o("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[qe,i.level,void 0,{number:!0}]])])]),o("div",hm,[(S(),I(z,null,ue([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>o("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[o("span",Am,B(d[1]),1),ve(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,bm),[[qe,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),o("div",km,[o("div",{class:w([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=o("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=o("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),o("div",vm,[o("span",{class:w(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",r.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},B(r.value),3),u[9]||(u[9]=o("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),o("div",ym,[o("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:ht({width:r.value+"%"})},null,4)])],2),o("div",{class:w([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=o("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=o("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),o("div",xm,[o("span",_m,B(c.value),1),u[12]||(u[12]=o("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),o("div",{class:w(n.value)},[o("div",wm,[o("div",Pm,[o("span",null,"Diff Status: "+B(s.value)+" / "+B(i.itemDiff),1)]),s.value<i.itemDiff?(S(),I("div",Mm,[...u[15]||(u[15]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(S(),I("div",Dm,[...u[16]||(u[16]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},Cm=Wt(Rm,[["__scopeId","data-v-676556a4"]]),Sm={class:"fixed inset-0 pointer-events-none z-0"},Em={key:0,class:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Im={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"},Bm={key:0,class:"relative z-10 max-w-5xl mx-auto p-6 md:p-20 animate-fade-in"},Tm={class:"grid lg:grid-cols-12 gap-12 items-start"},Km={class:"lg:col-span-5 space-y-2 animate-slide-right"},Nm=["src"],Gm={class:"lg:col-span-7 space-y-8 animate-slide-left"},Om={class:"flex items-center gap-4"},Lm={class:"text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]"},Fm={class:"space-y-5"},Um={key:0,class:"mt-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)] group-hover/stat:scale-150 transition-transform flex-shrink-0"},Hm={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},jm={class:"text-sm font-bold flex items-center gap-2"},Wm={class:"text-sm font-bold flex items-center gap-2 justify-between"},Jm={key:1,class:"h-screen flex items-center justify-center"},Vm={__name:"XtallDetail",props:["id","isDark"],setup(e){const t=e,n=Vn(),a=te(()=>Ut.find(y=>String(y.code)===String(t.id))),i=y=>{if(!y)return"NORMAL";let h=y,R=0;for(;h.link&&R<10;){const K=Ut.find(_=>String(_.code)===String(h.link));if(K)h=K,R++;else break}return h.type?.toUpperCase()},l=y=>{const h=i(a.value);return y?.toUpperCase()==="UPGRADE"||y?.toUpperCase()==="ENHANCER"?"text-gray-400":{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[h]||"text-cyan-500"},s=y=>{const h=i(a.value);return{NORMAL:"bg-blue-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",ADDITIONAL:"bg-yellow-600",SPECIAL:"bg-cyan-600"}[h]||"bg-cyan-600"},r=y=>{const h=y?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?"bg-purple-600 text-white border-purple-400":({NORMAL:"bg-blue-600",ADDITIONAL:"bg-yellow-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",SPECIAL:"bg-cyan-600"}[h]||"bg-slate-700")+" text-white border-white/20"},c=y=>{const h=y?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?`${i(a.value)} ENHANCER`:h},p=te(()=>a.value?.link?Ut.find(y=>String(y.code)===String(a.value.link)):null),u=te(()=>a.value?Ut.find(y=>String(y.link)===String(a.value.code)):null),d=y=>{n.push(`/xtall/${y}`)};Pt(()=>t.id,()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=y=>y?Array.isArray(y)?y:y.split(/,|\n/).map(h=>h.trim()).filter(h=>h):[],A=y=>{const h=y?.toUpperCase(),R=i(a.value);return h==="UPGRADE"||h==="ENHANCER"?{NORMAL:Un,WEAPON:Ti,ARMOR:Ki,ADDITIONAL:Ni,SPECIAL:Gi}[R]||Un:{NORMAL:Fn,WEAPON:Si,ARMOR:Ii,ADDITIONAL:Ei,SPECIAL:Bi}[R]||Fn};return(y,h)=>(S(),I("div",{class:w(["min-h-screen relative overflow-hidden font-sans transition-all duration-700",e.isDark?"bg-[#020617] text-slate-200":"bg-slate-50 text-slate-900"])},[o("div",Sm,[o("div",{class:w(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),e.isDark?(S(),I("div",Em)):Te("",!0),e.isDark?(S(),I("div",Im)):Te("",!0)]),a.value?(S(),I("div",Bm,[o("button",{onClick:h[0]||(h[0]=R=>y.$router.push("/xtall")),class:"group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2"},[...h[3]||(h[3]=[o("div",{class:"w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"},[o("svg",{class:"w-5 h-5 text-cyan-500 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M15 19l-7-7 7-7","stroke-width":"3"})])],-1),o("span",{class:"text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500"},"Back to Database",-1)])]),o("div",Tm,[o("div",Km,[o("div",{class:w(["relative aspect-square rounded-[3.5rem] border-4 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 group",e.isDark?"bg-slate-900 border-white/20":"bg-white border-slate-300"])},[o("div",{class:w(["absolute inset-0 opacity-30 blur-3xl animate-pulse transition-colors duration-700",s(a.value.type)])},null,2),o("img",{src:A(a.value.type),class:"relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 animate-float"},null,8,Nm),o("div",{class:w(["absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-2xl whitespace-nowrap transition-all duration-500 group-hover:scale-110",r(a.value.type)])},B(c(a.value.type)),3)],2)]),o("div",Gm,[o("div",null,[o("p",{class:w(["text-xs font-black uppercase tracking-[0.4em] mb-2 drop-shadow-sm",l(a.value.name)])},B(c(a.value.type)),3),o("h1",{class:w(["text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4 drop-shadow-2xl transition-all duration-500 brightness-100 saturate-70",l(a.value.type),e.isDark?"[-webkit-text-stroke:1px_white]":"[-webkit-text-stroke:1px_black]"]),style:{maskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)",webkitMaskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)"}},B(a.value.name),3),o("div",Om,[h[4]||(h[4]=o("div",{class:"h-[3px] w-16 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"},null,-1)),o("p",Lm,"System ID: #"+B(a.value.code),1)])]),o("div",{class:w(["p-8 md:p-12 rounded-[3rem] border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden transition-all hover:border-cyan-500/50",e.isDark?"bg-slate-900/80 border-white/10 shadow-black":"bg-white border-slate-200 shadow-slate-300"])},[h[5]||(h[5]=o("div",{class:"absolute top-0 right-0 p-8 text-8xl opacity-[0.05] grayscale pointer-events-none animate-spin-slow"},"✨",-1)),h[6]||(h[6]=o("h3",{class:"text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-8 flex items-center gap-3"},[o("span",{class:"w-2 h-2 bg-cyan-500 rounded-full animate-ping"}),Ve(" Status/ Effect ")],-1)),o("div",Fm,[(S(!0),I(z,null,ue(m(a.value.view),(R,K)=>(S(),I("div",{key:K,class:"flex items-start gap-4 group/stat animate-fade-in",style:ht({animationDelay:K*100+"ms"})},[R.includes("Dengan")?Te("",!0):(S(),I("div",Um)),o("p",{class:w(["text-base md:text-lg font-bold tracking-tight transition-colors",R.includes("Dengan")?"text-green-500 italic":R.includes("-")?"text-red-500":e.isDark?"text-slate-200 group-hover/stat:text-cyan-400":"text-slate-700"])},B(R),3)],4))),128))])],2),o("div",Hm,[p.value?(S(),I("div",{key:0,onClick:h[1]||(h[1]=R=>d(p.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-900/20":"bg-white border-slate-200 hover:border-cyan-500 shadow-slate-200"])},[h[8]||(h[8]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Model",-1)),o("p",jm,[h[7]||(h[7]=o("span",{class:"text-cyan-500 group-hover:-translate-x-2 transition-transform"},"←",-1)),Ve(" "+B(p.value.name),1)])],2)):Te("",!0),u.value?(S(),I("div",{key:1,onClick:h[2]||(h[2]=R=>d(u.value.code)),class:w(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-purple-500/50 hover:shadow-purple-900/20":"bg-white border-slate-200 hover:border-purple-500 shadow-slate-200"])},[h[10]||(h[10]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Advanced Upgrade",-1)),o("p",Wm,[Ve(B(u.value.name)+" ",1),h[9]||(h[9]=o("span",{class:"text-purple-500 group-hover:translate-x-2 transition-transform"},"→",-1))])],2)):Te("",!0)])])])])):(S(),I("div",Jm,[...h[11]||(h[11]=[o("div",{class:"relative w-24 h-24"},[o("div",{class:"absolute inset-0 border-4 border-cyan-500/20 rounded-full"}),o("div",{class:"absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"})],-1)])]))],2))}},Ym=Wt(Vm,[["__scopeId","data-v-d58076e3"]]),Qm={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF / DEF%",value:".DEF"},{label:"MDEF / MDEF%",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD / ASPD%",value:"ASPD"},{label:"CSPD / CSPD%",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen%",value:"Natural MP Regen"},{label:"Natural HP Regen%",value:"Natural HP Regen"},{label:"Attack MP Recovery / AMPR%",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK%",value:"Weapon ATK"},{label:"DTE (Elements)%",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee%",value:"Tambahan Fisik"},{label:"Additional Magic%",value:"Tambahan Sihir"},{label:"Antisipasi%",value:"Antisipasi"},{label:"Guard Break%",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)%",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)%",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)%",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)%",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)%",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)%",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)%",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable%",value:"Tumble Unavailable"},{label:"Evasion Recharge%",value:"Evasion Recharge"},{label:"Refleks%",value:"Refleks"},{label:"Recoil%",value:"Recoil"}]},Yl={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},qm=[{label:"Weapon Crystas",value:"WEAPON",icon:Si,color:"red"},{label:"Weapon Enhancer Crystas",value:"WEAPON_UPGRADE",icon:Ti,color:"red"},{label:"Armor Crystas",value:"ARMOR",icon:Ii,color:"green"},{label:"Armor Enhancer Crystas",value:"ARMOR_UPGRADE",icon:Ki,color:"green"},{label:"Additional Crystas",value:"ADDITIONAL",icon:Ei,color:"yellow"},{label:"Additional Enhancer Crystas",value:"ADDITIONAL_UPGRADE",icon:Ni,color:"yellow"},{label:"Normal Crystas",value:"NORMAL",icon:Fn,color:"blue"},{label:"Normal Enhancer Crystas",value:"NORMAL_UPGRADE",icon:Un,color:"blue"},{label:"Special Crystas",value:"SPECIAL",icon:Bi,color:"pink"},{label:"Special Enhancer Crystas",value:"SPECIAL_UPGRADE",icon:Gi,color:"pink"}],zm={class:"max-w-[1600px] mx-auto mb-6 flex items-center justify-between"},$m={class:"max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"},Zm={class:"text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]"},Xm={class:"text-2xl md:text-2xl font-[100] tracking-tighter uppercase italic leading-[0.8]"},ef={class:"max-w-[1600px] mx-auto space-y-5"},tf={class:"grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"},nf=["onClick"],af=["src","alt"],lf={key:0,class:"absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"},of={class:"flex items-center gap-1 mb-4 ml-2"},sf={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2"},rf=["onClick"],cf={class:"flex items-start justify-between gap-2 mb-4"},uf={key:0,class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},df={class:"flex gap-1"},pf=["onUpdate:modelValue"],gf=["onUpdate:modelValue"],mf=["onUpdate:modelValue"],ff={__name:"XtallAdvancedSearch",props:{isDark:Boolean},setup(e){const t=Vn(),n=Ra(),a=An({stats:{},types:[]});tn(()=>{if(n.query.filter)try{const p=JSON.parse(n.query.filter);p?.stats&&(a.stats=p.stats),p?.types&&(a.types=p.types)}catch{console.warn("Invalid filter data")}});function i(){t.back()}function l(){Object.keys(a.stats).forEach(p=>delete a.stats[p]),a.types=[]}function s(p){a.stats[p]?delete a.stats[p]:a.stats[p]={sign:"+",op:">=",value:null}}function r(p){const u=a.types.indexOf(p);u>-1?a.types.splice(u,1):a.types.push(p)}function c(){t.push({name:"xtall",query:{filter:JSON.stringify(a)}})}return(p,u)=>(S(),I("div",{class:w(["p-4 md:p-8 font-sans transition-all duration-700 min-h-screen",e.isDark?"bg-[#050505] text-white":"bg-slate-50 text-slate-900"])},[o("div",zm,[o("button",{onClick:i,class:"group flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:bg-white/5 active:scale-95"},[o("div",{class:w(["w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",e.isDark?"border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10":"border-slate-200 group-hover:border-orange-500/50 group-hover:bg-orange-50"])},[...u[1]||(u[1]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 transition-transform group-hover:-translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M15 19l-7-7 7-7"})],-1)])],2),u[2]||(u[2]=o("span",{class:"text-[11px] font-[1000] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100"},"Back",-1))])]),o("div",$m,[o("div",null,[o("h1",Zm,[o("span",{class:w(e.isDark?"text-white":"text-black")},"Advanced",2),u[3]||(u[3]=o("br",null,null,-1)),u[4]||(u[4]=o("span",{class:"bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x"},"Search",-1))]),o("h2",Xm,[u[5]||(u[5]=o("br",null,null,-1)),o("span",{class:w(e.isDark?"text-white":"text-black")},"All Flat and percent(%) stats are combined ",2),u[6]||(u[6]=o("br",null,null,-1))])]),o("div",{class:"flex flex-row items-center gap-4 w-full lg:w-auto"},[o("button",{onClick:l,class:"flex-1 lg:flex-none px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300"}," Clear Page "),o("button",{onClick:c,class:"flex-[2] lg:flex-none px-10 py-5 bg-orange-600 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(234,88,12,0.3)]"},[...u[7]||(u[7]=[o("span",{class:"text-xs font-[1000] uppercase tracking-[0.2em] text-white"},"Apply Parameters",-1)])])])]),o("div",ef,[o("section",null,[u[8]||(u[8]=o("div",{class:"flex items-center gap-3 mb-8 ml-2"},[o("div",{class:"w-1.5 h-6 rounded-full bg-cyan-500"}),o("h2",{class:"text-lg font-[1000] uppercase tracking-[0.3em] italic text-cyan-500"},"Type Crysta")],-1)),o("div",tf,[(S(!0),I(z,null,ue(Ge(qm),d=>(S(),I("div",{key:d.value,onClick:m=>r(d.value),class:w(["group relative p-5 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col items-center gap-4 min-h-[160px] justify-center",a.types.includes(d.value)?"bg-[#468FE0] border-cyan-400 shadow-xl shadow-cyan-600/80 scale-[1.12]":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 shadow-sm hover:border-slate-300"])},[o("div",{class:w(["w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner",a.types.includes(d.value)?"border-white shadow-lg":"border-slate-800/50"])},[o("img",{src:d.icon,class:"w-full h-full object-cover",alt:d.label},null,8,af)],2),o("span",{class:w(["text-[10px] font-black uppercase tracking-[0.15em] text-center leading-tight transition-colors",a.types.includes(d.value)?"text-white":e.isDark?"text-slate-400":"text-slate-500"])},B(d.label),3),a.types.includes(d.value)?(S(),I("div",lf)):Te("",!0)],10,nf))),128))])]),(S(!0),I(z,null,ue(Ge(Qm),(d,m)=>(S(),I("div",{key:m},[o("div",of,[o("div",{class:w(["w-1.5 h-6 rounded-full",Ge(Yl)[m]?.bg||"bg-slate-500"])},null,2),o("h2",{class:w(["text-lg font-[1000] uppercase tracking-[0.3em] italic",Ge(Yl)[m]?.text||"text-slate-500"])},B(m),3)]),o("div",sf,[(S(!0),I(z,null,ue(d,A=>(S(),I("div",{key:A.value,onClick:y=>s(A.value),class:w(["group/item relative rounded-[2rem] border-2 p-2 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[70px]",a.stats[A.value]?e.isDark?"bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-500/20":"bg-orange-50 border-orange-500":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 hover:border-slate-300 shadow-sm"])},[o("div",cf,[o("span",{class:w(["text-[11px] font-[1000] uppercase leading-tight tracking-wide transition-colors",a.stats[A.value]?e.isDark?"text-white":"text-orange-600":e.isDark?"text-slate-500":"text-slate-400"])},B(A.label),3),o("div",{class:w(["shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500",a.stats[A.value]?"bg-orange-500 border-orange-400 rotate-0":e.isDark?"bg-white/5 border-white/10 rotate-45":"bg-slate-50 border-slate-200 rotate-45"])},[a.stats[A.value]?(S(),I("svg",uf,[...u[9]||(u[9]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):(S(),I("div",{key:1,class:w(["text-lg leading-none",e.isDark?"text-white/20":"text-slate-300"])},"+",2))],2)]),ye(us,{name:"fade"},{default:Xe(()=>[a.stats[A.value]?(S(),I("div",{key:0,onClick:u[0]||(u[0]=Vc(()=>{},["stop"])),class:"space-y-2 mt-auto pt-4 border-t border-orange-500/20"},[o("div",df,[ve(o("select",{"onUpdate:modelValue":y=>a.stats[A.value].sign=y,class:w(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-orange-400":"bg-white border-slate-200 text-orange-600"])},[...u[10]||(u[10]=[o("option",{value:"+"},"Stats +",-1),o("option",{value:"-"},"Stats -",-1)])],10,pf),[[it,a.stats[A.value].sign]]),ve(o("select",{"onUpdate:modelValue":y=>a.stats[A.value].op=y,class:w(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-cyan-400":"bg-white border-slate-200 text-cyan-600"])},[...u[11]||(u[11]=[o("option",{value:">="},"≥",-1),o("option",{value:"<="},"≤",-1)])],10,gf),[[it,a.stats[A.value].op]])]),ve(o("input",{type:"number","onUpdate:modelValue":y=>a.stats[A.value].value=y,class:w(["w-full py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-all focus:border-orange-500",e.isDark?"bg-black border-white/10 text-white":"bg-white border-slate-200 text-black"]),placeholder:"VALUE"},null,10,mf),[[qe,a.stats[A.value].value,void 0,{number:!0}]])])):Te("",!0)]),_:2},1024)],10,rf))),128))])]))),128))])],2))}},hf=Wt(ff,[["__scopeId","data-v-1f142105"]]),Af=[{path:"/",name:"bag",component:w0},{path:"/mq",name:"mainquest",component:ip},{path:"/mq-calc",name:"mqcalc",component:Wg},{path:"/bs-calc",name:"bs-calc",component:Cm},{path:"/xtall",name:"xtall",component:eg},{path:"/xtall/advanced",name:"xtall-advanced",component:hf},{path:"/xtall/:id(\\d+)",name:"xtall-detail",component:Ym,props:!0}],bf=id({history:Nu("/toram-vue/"),routes:Af});document.title||(document.title="Timi DB | Toram Online Database");const ws=qc(bd);ws.use(bf);ws.mount("#app");window.addEventListener("unhandledrejection",e=>{console.warn("Ignored async listener error:",e.reason)});
