(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function ui(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ae={},on=[],ft=()=>{},Vl=()=>!1,pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),di=e=>e.startsWith("onUpdate:"),Se=Object.assign,pi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ms=Object.prototype.hasOwnProperty,pe=(e,t)=>Ms.call(e,t),V=Array.isArray,sn=e=>Un(e)==="[object Map]",fn=e=>Un(e)==="[object Set]",Ui=e=>Un(e)==="[object Date]",ee=e=>typeof e=="function",De=e=>typeof e=="string",lt=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",ql=e=>(he(e)||ee(e))&&ee(e.then)&&ee(e.catch),zl=Object.prototype.toString,Un=e=>zl.call(e),_s=e=>Un(e).slice(8,-1),Zl=e=>Un(e)==="[object Object]",gi=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ds=/-\w/g,tt=ga(e=>e.replace(Ds,t=>t.slice(1).toUpperCase())),Rs=/\B([A-Z])/g,en=ga(e=>e.replace(Rs,"-$1").toLowerCase()),ma=ga(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ca=ga(e=>e?`on${ma(e)}`:""),jt=(e,t)=>!Object.is(e,t),Zn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xl=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},fa=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cs=e=>{const t=De(e)?Number(e):NaN;return isNaN(t)?e:t};let ji;const ha=()=>ji||(ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pt(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=De(a)?Bs(a):Pt(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(De(e)||he(e))return e}const Ss=/;(?![^(]*\))/g,Es=/:([^]+)/,Is=/\/\*[^]*?\*\//g;function Bs(e){const t={};return e.replace(Is,"").split(Ss).forEach(n=>{if(n){const a=n.split(Es);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function y(e){let t="";if(De(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const a=y(e[n]);a&&(t+=a+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ks=ui(Ts);function $l(e){return!!e||e===""}function Os(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=jn(e[a],t[a]);return n}function jn(e,t){if(e===t)return!0;let n=Ui(e),a=Ui(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=lt(e),a=lt(t),n||a)return e===t;if(n=V(e),a=V(t),n||a)return n&&a?Os(e,t):!1;if(n=he(e),a=he(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const s in e){const r=e.hasOwnProperty(s),c=t.hasOwnProperty(s);if(r&&!c||!r&&c||!jn(e[s],t[s]))return!1}}return String(e)===String(t)}function mi(e,t){return e.findIndex(n=>jn(n,t))}const eo=e=>!!(e&&e.__v_isRef===!0),K=e=>De(e)?e:e==null?"":V(e)||he(e)&&(e.toString===zl||!ee(e.toString))?eo(e)?K(e.value):JSON.stringify(e,to,2):String(e),to=(e,t)=>eo(t)?to(e,t.value):sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[Sa(a,l)+" =>"]=i,n),{})}:fn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Sa(n))}:lt(t)?Sa(t):he(t)&&!V(t)&&!Zl(t)?String(t):t,Sa=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Je;class Ns{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){this._on>0&&--this._on===0&&(Je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Gs(){return Je}let ke;const Ea=new WeakSet;class no{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||io(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hi(this),lo(this);const t=ke,n=nt;ke=this,nt=!0;try{return this.fn()}finally{oo(this),ke=t,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ai(t);this.deps=this.depsTail=void 0,Hi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ya(this)&&this.run()}get dirty(){return Ya(this)}}let ao=0,wn,Pn;function io(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=wn,wn=e}function fi(){ao++}function hi(){if(--ao>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;wn;){let t=wn;for(wn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function lo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function oo(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),Ai(a),Ls(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function Ya(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(so(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function so(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Cn)||(e.globalVersion=Cn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ya(e))))return;e.flags|=2;const t=e.dep,n=ke,a=nt;ke=e,nt=!0;try{lo(e);const i=e.fn(e._value);(t.version===0||jt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ke=n,nt=a,oo(e),e.flags&=-3}}function Ai(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)Ai(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ls(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let nt=!0;const ro=[];function Dt(){ro.push(nt),nt=!1}function Rt(){const e=ro.pop();nt=e===void 0?!0:e}function Hi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let Cn=0;class Fs{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!nt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Fs(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=a)}return n}trigger(t){this.version++,Cn++,this.notify(t)}notify(t){fi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hi()}}}function co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)co(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Va=new WeakMap,Xt=Symbol(""),qa=Symbol(""),Sn=Symbol("");function Te(e,t,n){if(nt&&ke){let a=Va.get(e);a||Va.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new bi),i.map=a,i.key=n),i.track()}}function yt(e,t,n,a,i,l){const s=Va.get(e);if(!s){Cn++;return}const r=c=>{c&&c.trigger()};if(fi(),t==="clear")s.forEach(r);else{const c=V(e),p=c&&gi(n);if(c&&n==="length"){const u=Number(a);s.forEach((d,m)=>{(m==="length"||m===Sn||!lt(m)&&m>=u)&&r(d)})}else switch((n!==void 0||s.has(void 0))&&r(s.get(n)),p&&r(s.get(Sn)),t){case"add":c?p&&r(s.get("length")):(r(s.get(Xt)),sn(e)&&r(s.get(qa)));break;case"delete":c||(r(s.get(Xt)),sn(e)&&r(s.get(qa)));break;case"set":sn(e)&&r(s.get(Xt));break}}hi()}function nn(e){const t=ce(e);return t===e?t:(Te(t,"iterate",Sn),et(e)?t:t.map(ot))}function Aa(e){return Te(e=ce(e),"iterate",Sn),e}function Kt(e,t){return Ct(e)?$t(e)?dn(ot(t)):dn(t):ot(t)}const Us={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,e=>Kt(this,e))},concat(...e){return nn(this).concat(...e.map(t=>V(t)?nn(t):t))},entries(){return Ia(this,"entries",e=>(e[1]=Kt(this,e[1]),e))},every(e,t){return At(this,"every",e,t,void 0,arguments)},filter(e,t){return At(this,"filter",e,t,n=>n.map(a=>Kt(this,a)),arguments)},find(e,t){return At(this,"find",e,t,n=>Kt(this,n),arguments)},findIndex(e,t){return At(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return At(this,"findLast",e,t,n=>Kt(this,n),arguments)},findLastIndex(e,t){return At(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return At(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ba(this,"includes",e)},indexOf(...e){return Ba(this,"indexOf",e)},join(e){return nn(this).join(e)},lastIndexOf(...e){return Ba(this,"lastIndexOf",e)},map(e,t){return At(this,"map",e,t,void 0,arguments)},pop(){return bn(this,"pop")},push(...e){return bn(this,"push",e)},reduce(e,...t){return Wi(this,"reduce",e,t)},reduceRight(e,...t){return Wi(this,"reduceRight",e,t)},shift(){return bn(this,"shift")},some(e,t){return At(this,"some",e,t,void 0,arguments)},splice(...e){return bn(this,"splice",e)},toReversed(){return nn(this).toReversed()},toSorted(e){return nn(this).toSorted(e)},toSpliced(...e){return nn(this).toSpliced(...e)},unshift(...e){return bn(this,"unshift",e)},values(){return Ia(this,"values",e=>Kt(this,e))}};function Ia(e,t,n){const a=Aa(e),i=a[t]();return a!==e&&!et(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const js=Array.prototype;function At(e,t,n,a,i,l){const s=Aa(e),r=s!==e&&!et(e),c=s[t];if(c!==js[t]){const d=c.apply(e,l);return r?ot(d):d}let p=n;s!==e&&(r?p=function(d,m){return n.call(this,Kt(e,d),m,e)}:n.length>2&&(p=function(d,m){return n.call(this,d,m,e)}));const u=c.call(s,p,a);return r&&i?i(u):u}function Wi(e,t,n,a){const i=Aa(e);let l=n;return i!==e&&(et(e)?n.length>3&&(l=function(s,r,c){return n.call(this,s,r,c,e)}):l=function(s,r,c){return n.call(this,s,Kt(e,r),c,e)}),i[t](l,...a)}function Ba(e,t,n){const a=ce(e);Te(a,"iterate",Sn);const i=a[t](...n);return(i===-1||i===!1)&&xi(n[0])?(n[0]=ce(n[0]),a[t](...n)):i}function bn(e,t,n=[]){Dt(),fi();const a=ce(e)[t].apply(e,n);return hi(),Rt(),a}const Hs=ui("__proto__,__v_isRef,__isVue"),uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt));function Ws(e){lt(e)||(e=String(e));const t=ce(this);return Te(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?er:ho:l?fo:mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const s=V(t);if(!i){let c;if(s&&(c=Us[n]))return c;if(n==="hasOwnProperty")return Ws}const r=Reflect.get(t,n,Ge(t)?t:a);if((lt(n)?uo.has(n):Hs(n))||(i||Te(t,"get",n),l))return r;if(Ge(r)){const c=s&&gi(n)?r:r.value;return i&&he(c)?Za(c):c}return he(r)?i?Za(r):hn(r):r}}class go extends po{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const s=V(t)&&gi(n);if(!this._isShallow){const p=Ct(l);if(!et(a)&&!Ct(a)&&(l=ce(l),a=ce(a)),!s&&Ge(l)&&!Ge(a))return p||(l.value=a),!0}const r=s?Number(n)<t.length:pe(t,n),c=Reflect.set(t,n,a,Ge(t)?t:i);return t===ce(i)&&(r?jt(a,l)&&yt(t,"set",n,a):yt(t,"add",n,a)),c}deleteProperty(t,n){const a=pe(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&yt(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!lt(n)||!uo.has(n))&&Te(t,"has",n),a}ownKeys(t){return Te(t,"iterate",V(t)?"length":Xt),Reflect.ownKeys(t)}}class Js extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qs=new go,Ys=new Js,Vs=new go(!0);const za=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function qs(e,t,n){return function(...a){const i=this.__v_raw,l=ce(i),s=sn(l),r=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,p=i[e](...a),u=n?za:t?dn:ot;return!t&&Te(l,"iterate",c?qa:Xt),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:r?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function Yn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zs(e,t){const n={get(i){const l=this.__v_raw,s=ce(l),r=ce(i);e||(jt(i,r)&&Te(s,"get",i),Te(s,"get",r));const{has:c}=Qn(s),p=t?za:e?dn:ot;if(c.call(s,i))return p(l.get(i));if(c.call(s,r))return p(l.get(r));l!==s&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Te(ce(i),"iterate",Xt),i.size},has(i){const l=this.__v_raw,s=ce(l),r=ce(i);return e||(jt(i,r)&&Te(s,"has",i),Te(s,"has",r)),i===r?l.has(i):l.has(i)||l.has(r)},forEach(i,l){const s=this,r=s.__v_raw,c=ce(r),p=t?za:e?dn:ot;return!e&&Te(c,"iterate",Xt),r.forEach((u,d)=>i.call(l,p(u),p(d),s))}};return Se(n,e?{add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear")}:{add(i){!t&&!et(i)&&!Ct(i)&&(i=ce(i));const l=ce(this);return Qn(l).has.call(l,i)||(l.add(i),yt(l,"add",i,i)),this},set(i,l){!t&&!et(l)&&!Ct(l)&&(l=ce(l));const s=ce(this),{has:r,get:c}=Qn(s);let p=r.call(s,i);p||(i=ce(i),p=r.call(s,i));const u=c.call(s,i);return s.set(i,l),p?jt(l,u)&&yt(s,"set",i,l):yt(s,"add",i,l),this},delete(i){const l=ce(this),{has:s,get:r}=Qn(l);let c=s.call(l,i);c||(i=ce(i),c=s.call(l,i)),r&&r.call(l,i);const p=l.delete(i);return c&&yt(l,"delete",i,void 0),p},clear(){const i=ce(this),l=i.size!==0,s=i.clear();return l&&yt(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=qs(i,e,t)}),n}function ki(e,t){const n=zs(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(pe(n,i)&&i in a?n:a,i,l)}const Zs={get:ki(!1,!1)},Xs={get:ki(!1,!0)},$s={get:ki(!0,!1)};const mo=new WeakMap,fo=new WeakMap,ho=new WeakMap,er=new WeakMap;function tr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nr(e){return e.__v_skip||!Object.isExtensible(e)?0:tr(_s(e))}function hn(e){return Ct(e)?e:vi(e,!1,Qs,Zs,mo)}function Ao(e){return vi(e,!1,Vs,Xs,fo)}function Za(e){return vi(e,!0,Ys,$s,ho)}function vi(e,t,n,a,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=nr(e);if(l===0)return e;const s=i.get(e);if(s)return s;const r=new Proxy(e,l===2?a:n);return i.set(e,r),r}function $t(e){return Ct(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function xi(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function ar(e){return!pe(e,"__v_skip")&&Object.isExtensible(e)&&Xl(e,"__v_skip",!0),e}const ot=e=>he(e)?hn(e):e,dn=e=>he(e)?Za(e):e;function Ge(e){return e?e.__v_isRef===!0:!1}function oe(e){return bo(e,!1)}function ir(e){return bo(e,!0)}function bo(e,t){return Ge(e)?e:new lr(e,t)}class lr{constructor(t,n){this.dep=new bi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||Ct(t);t=a?t:ce(t),jt(t,n)&&(this._rawValue=t,this._value=a?t:ot(t),this.dep.trigger())}}function Ne(e){return Ge(e)?e.value:e}const or={get:(e,t,n)=>t==="__v_raw"?e:Ne(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Ge(i)&&!Ge(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function ko(e){return $t(e)?e:new Proxy(e,or)}class sr{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new bi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return io(this,!0),!0}get value(){const t=this.dep.track();return so(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function rr(e,t,n=!1){let a,i;return ee(e)?a=e:(a=e.get,i=e.set),new sr(a,i,n)}const Vn={},aa=new WeakMap;let qt;function cr(e,t=!1,n=qt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function ur(e,t,n=Ae){const{immediate:a,deep:i,once:l,scheduler:s,augmentJob:r,call:c}=n,p=x=>i?x:et(x)||i===!1||i===0?wt(x,1):wt(x);let u,d,m,A,k=!1,h=!1;if(Ge(e)?(d=()=>e.value,k=et(e)):$t(e)?(d=()=>p(e),k=!0):V(e)?(h=!0,k=e.some(x=>$t(x)||et(x)),d=()=>e.map(x=>{if(Ge(x))return x.value;if($t(x))return p(x);if(ee(x))return c?c(x,2):x()})):ee(e)?t?d=c?()=>c(e,2):e:d=()=>{if(m){Dt();try{m()}finally{Rt()}}const x=qt;qt=u;try{return c?c(e,3,[A]):e(A)}finally{qt=x}}:d=ft,t&&i){const x=d,w=i===!0?1/0:i;d=()=>wt(x(),w)}const C=Gs(),B=()=>{u.stop(),C&&C.active&&pi(C.effects,u)};if(l&&t){const x=t;t=(...w)=>{x(...w),B()}}let M=h?new Array(e.length).fill(Vn):Vn;const P=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const w=u.run();if(i||k||(h?w.some((Z,q)=>jt(Z,M[q])):jt(w,M))){m&&m();const Z=qt;qt=u;try{const q=[w,M===Vn?void 0:h&&M[0]===Vn?[]:M,A];M=w,c?c(t,3,q):t(...q)}finally{qt=Z}}}else u.run()};return r&&r(P),u=new no(d),u.scheduler=s?()=>s(P,!1):P,A=x=>cr(x,!1,u),m=u.onStop=()=>{const x=aa.get(u);if(x){if(c)c(x,4);else for(const w of x)w();aa.delete(u)}},t?a?P(!0):M=u.run():s?s(P.bind(null,!0),!0):u.run(),B.pause=u.pause.bind(u),B.resume=u.resume.bind(u),B.stop=B,B}function wt(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ge(e))wt(e.value,t,n);else if(V(e))for(let a=0;a<e.length;a++)wt(e[a],t,n);else if(fn(e)||sn(e))e.forEach(a=>{wt(a,t,n)});else if(Zl(e)){for(const a in e)wt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&wt(e[a],t,n)}return e}function Hn(e,t,n,a){try{return a?e(...a):e()}catch(i){ba(i,t,n)}}function st(e,t,n,a){if(ee(e)){const i=Hn(e,t,n,a);return i&&ql(i)&&i.catch(l=>{ba(l,t,n)}),i}if(V(e)){const i=[];for(let l=0;l<e.length;l++)i.push(st(e[l],t,n,a));return i}}function ba(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Ae;if(t){let r=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}r=r.parent}if(l){Dt(),Hn(l,null,10,[e,c,p]),Rt();return}}dr(e,n,i,a,s)}function dr(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const je=[];let gt=-1;const rn=[];let Ot=null,an=0;const vo=Promise.resolve();let ia=null;function ka(e){const t=ia||vo;return e?t.then(this?e.bind(this):e):t}function pr(e){let t=gt+1,n=je.length;for(;t<n;){const a=t+n>>>1,i=je[a],l=En(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function yi(e){if(!(e.flags&1)){const t=En(e),n=je[je.length-1];!n||!(e.flags&2)&&t>=En(n)?je.push(e):je.splice(pr(t),0,e),e.flags|=1,xo()}}function xo(){ia||(ia=vo.then(wo))}function gr(e){V(e)?rn.push(...e):Ot&&e.id===-1?Ot.splice(an+1,0,e):e.flags&1||(rn.push(e),e.flags|=1),xo()}function Ji(e,t,n=gt+1){for(;n<je.length;n++){const a=je[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;je.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function yo(e){if(rn.length){const t=[...new Set(rn)].sort((n,a)=>En(n)-En(a));if(rn.length=0,Ot){Ot.push(...t);return}for(Ot=t,an=0;an<Ot.length;an++){const n=Ot[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,an=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wo(e){try{for(gt=0;gt<je.length;gt++){const t=je[gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;gt<je.length;gt++){const t=je[gt];t&&(t.flags&=-2)}gt=-1,je.length=0,yo(),ia=null,(je.length||rn.length)&&wo()}}let Ee=null,Po=null;function la(e){const t=Ee;return Ee=e,Po=e&&e.type.__scopeId||null,t}function $e(e,t=Ee,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&ca(-1);const l=la(t);let s;try{s=e(...i)}finally{la(l),a._d&&ca(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function ve(e,t){if(Ee===null)return e;const n=Pa(Ee),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,s,r,c=Ae]=t[i];l&&(ee(l)&&(l={mounted:l,updated:l}),l.deep&&wt(s),a.push({dir:l,instance:n,value:s,oldValue:void 0,arg:r,modifiers:c}))}return e}function Jt(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let s=0;s<i.length;s++){const r=i[s];l&&(r.oldValue=l[s].value);let c=r.dir[a];c&&(Dt(),st(c,n,8,[e.el,r,e,t]),Rt())}}function Xn(e,t){if(Oe){let n=Oe.provides;const a=Oe.parent&&Oe.parent.provides;a===n&&(n=Oe.provides=Object.create(a)),n[e]=t}}function at(e,t,n=!1){const a=ls();if(a||un){let i=un?un._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(a&&a.proxy):t}}const mr=Symbol.for("v-scx"),fr=()=>at(mr);function Mt(e,t,n){return Mo(e,t,n)}function Mo(e,t,n=Ae){const{immediate:a,deep:i,flush:l,once:s}=n,r=Se({},n),c=t&&a||!t&&l!=="post";let p;if(Kn){if(l==="sync"){const A=fr();p=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=ft,A.resume=ft,A.pause=ft,A}}const u=Oe;r.call=(A,k,h)=>st(A,u,k,h);let d=!1;l==="post"?r.scheduler=A=>{Ve(A,u&&u.suspense)}:l!=="sync"&&(d=!0,r.scheduler=(A,k)=>{k?A():yi(A)}),r.augmentJob=A=>{t&&(A.flags|=4),d&&(A.flags|=2,u&&(A.id=u.uid,A.i=u))};const m=ur(e,t,r);return Kn&&(p?p.push(m):c&&m()),m}function hr(e,t,n){const a=this.proxy,i=De(e)?e.includes(".")?_o(a,e):()=>a[e]:e.bind(a,a);let l;ee(t)?l=t:(l=t.handler,n=t);const s=Wn(this),r=Mo(i,l.bind(a),n);return s(),r}function _o(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const Ar=Symbol("_vte"),Do=e=>e.__isTeleport,xt=Symbol("_leaveCb"),qn=Symbol("_enterCb");function br(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),Oo(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],Ro={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},Co=e=>{const t=e.subTree;return t.component?Co(t.component):t},kr={name:"BaseTransition",props:Ro,setup(e,{slots:t}){const n=ls(),a=br();return()=>{const i=t.default&&Io(t.default(),!0);if(!i||!i.length)return;const l=So(i),s=ce(e),{mode:r}=s;if(a.isLeaving)return Ta(l);const c=Qi(l);if(!c)return Ta(l);let p=Xa(c,s,a,n,d=>p=d);c.type!==Ke&&In(c,p);let u=n.subTree&&Qi(n.subTree);if(u&&u.type!==Ke&&!zt(u,c)&&Co(n).type!==Ke){let d=Xa(u,s,a,n);if(In(u,d),r==="out-in"&&c.type!==Ke)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ta(l);r==="in-out"&&c.type!==Ke?d.delayLeave=(m,A,k)=>{const h=Eo(a,u);h[String(u.key)]=u,m[xt]=()=>{A(),m[xt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{k(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function So(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ke){t=n;break}}return t}const vr=kr;function Eo(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Xa(e,t,n,a,i){const{appear:l,mode:s,persisted:r=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:A,onAfterLeave:k,onLeaveCancelled:h,onBeforeAppear:C,onAppear:B,onAfterAppear:M,onAppearCancelled:P}=t,x=String(e.key),w=Eo(n,e),Z=(J,te)=>{J&&st(J,a,9,te)},q=(J,te)=>{const ne=te[1];Z(J,te),V(J)?J.every(L=>L.length<=1)&&ne():J.length<=1&&ne()},ye={mode:s,persisted:r,beforeEnter(J){let te=c;if(!n.isMounted)if(l)te=C||c;else return;J[xt]&&J[xt](!0);const ne=w[x];ne&&zt(e,ne)&&ne.el[xt]&&ne.el[xt](),Z(te,[J])},enter(J){let te=p,ne=u,L=d;if(!n.isMounted)if(l)te=B||p,ne=M||u,L=P||d;else return;let ie=!1;const Me=J[qn]=Le=>{ie||(ie=!0,Le?Z(L,[J]):Z(ne,[J]),ye.delayedLeave&&ye.delayedLeave(),J[qn]=void 0)};te?q(te,[J,Me]):Me()},leave(J,te){const ne=String(e.key);if(J[qn]&&J[qn](!0),n.isUnmounting)return te();Z(m,[J]);let L=!1;const ie=J[xt]=Me=>{L||(L=!0,te(),Me?Z(h,[J]):Z(k,[J]),J[xt]=void 0,w[ne]===e&&delete w[ne])};w[ne]=e,A?q(A,[J,ie]):ie()},clone(J){const te=Xa(J,t,n,a,i);return i&&i(te),te}};return ye}function Ta(e){if(va(e))return e=Ht(e),e.children=null,e}function Qi(e){if(!va(e))return Do(e.type)&&e.children?So(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ee(n.default))return n.default()}}function In(e,t){e.shapeFlag&6&&e.component?(e.transition=t,In(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Io(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let s=e[l];const r=n==null?s.key:String(n)+String(s.key!=null?s.key:l);s.type===X?(s.patchFlag&128&&i++,a=a.concat(Io(s.children,t,r))):(t||s.type!==Ke)&&a.push(r!=null?Ht(s,{key:r}):s)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Bo(e,t){return ee(e)?Se({name:e.name},t,{setup:e}):e}function To(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const oa=new WeakMap;function Mn(e,t,n,a,i=!1){if(V(e)){e.forEach((k,h)=>Mn(k,t&&(V(t)?t[h]:t),n,a,i));return}if(cn(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Mn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?Pa(a.component):a.el,s=i?null:l,{i:r,r:c}=e,p=t&&t.r,u=r.refs===Ae?r.refs={}:r.refs,d=r.setupState,m=ce(d),A=d===Ae?Vl:k=>pe(m,k);if(p!=null&&p!==c){if(Yi(t),De(p))u[p]=null,A(p)&&(d[p]=null);else if(Ge(p)){p.value=null;const k=t;k.k&&(u[k.k]=null)}}if(ee(c))Hn(c,r,12,[s,u]);else{const k=De(c),h=Ge(c);if(k||h){const C=()=>{if(e.f){const B=k?A(c)?d[c]:u[c]:c.value;if(i)V(B)&&pi(B,l);else if(V(B))B.includes(l)||B.push(l);else if(k)u[c]=[l],A(c)&&(d[c]=u[c]);else{const M=[l];c.value=M,e.k&&(u[e.k]=M)}}else k?(u[c]=s,A(c)&&(d[c]=s)):h&&(c.value=s,e.k&&(u[e.k]=s))};if(s){const B=()=>{C(),oa.delete(e)};B.id=-1,oa.set(e,B),Ve(B,n)}else Yi(e),C()}}}function Yi(e){const t=oa.get(e);t&&(t.flags|=8,oa.delete(e))}ha().requestIdleCallback;ha().cancelIdleCallback;const cn=e=>!!e.type.__asyncLoader,va=e=>e.type.__isKeepAlive;function xr(e,t){Ko(e,"a",t)}function yr(e,t){Ko(e,"da",t)}function Ko(e,t,n=Oe){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(xa(t,a,n),n){let i=n.parent;for(;i&&i.parent;)va(i.parent.vnode)&&wr(a,t,n,i),i=i.parent}}function wr(e,t,n,a){const i=xa(t,e,a,!0);wi(()=>{pi(a[t],i)},n)}function xa(e,t,n=Oe,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...s)=>{Dt();const r=Wn(n),c=st(t,n,e,s);return r(),Rt(),c});return a?i.unshift(l):i.push(l),l}}const St=e=>(t,n=Oe)=>{(!Kn||e==="sp")&&xa(e,(...a)=>t(...a),n)},Pr=St("bm"),tn=St("m"),Mr=St("bu"),_r=St("u"),Oo=St("bum"),wi=St("um"),Dr=St("sp"),Rr=St("rtg"),Cr=St("rtc");function Sr(e,t=Oe){xa("ec",e,t)}const No="components";function sa(e,t){return Lo(No,e,!0,t)||e}const Go=Symbol.for("v-ndc");function Er(e){return De(e)?Lo(No,e,!1)||e:e||Go}function Lo(e,t,n=!0,a=!1){const i=Ee||Oe;if(i){const l=i.type;{const r=hc(l,!1);if(r&&(r===t||r===tt(t)||r===ma(tt(t))))return l}const s=Vi(i[e]||l[e],t)||Vi(i.appContext[e],t);return!s&&a?l:s}}function Vi(e,t){return e&&(e[t]||e[tt(t)]||e[ma(tt(t))])}function ue(e,t,n,a){let i;const l=n,s=V(e);if(s||De(e)){const r=s&&$t(e);let c=!1,p=!1;r&&(c=!et(e),p=Ct(e),e=Aa(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(c?p?dn(ot(e[u])):ot(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l)}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,p=r.length;c<p;c++){const u=r[c];i[c]=t(e[u],u,c,l)}}else i=[];return i}function Ir(e,t,n={},a,i){if(Ee.ce||Ee.parent&&cn(Ee.parent)&&Ee.parent.ce){const p=Object.keys(n).length>0;return S(),ua(X,null,[xe("slot",n,a)],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),S();const s=l&&Fo(l(n)),r=n.key||s&&s.key,c=ua(X,{key:(r&&!lt(r)?r:`_${t}`)+(!s&&a?"_fb":"")},s||[],s&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function Fo(e){return e.some(t=>Tn(t)?!(t.type===Ke||t.type===X&&!Fo(t.children)):!0)?e:null}const $a=e=>e?os(e)?Pa(e):$a(e.parent):null,_n=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$a(e.parent),$root:e=>$a(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>e.f||(e.f=()=>{yi(e.update)}),$nextTick:e=>e.n||(e.n=ka.bind(e.proxy)),$watch:e=>hr.bind(e)}),Ka=(e,t)=>e!==Ae&&!e.__isScriptSetup&&pe(e,t),Br={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:s,type:r,appContext:c}=e;if(t[0]!=="$"){const m=s[t];if(m!==void 0)switch(m){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Ka(a,t))return s[t]=1,a[t];if(i!==Ae&&pe(i,t))return s[t]=2,i[t];if(pe(l,t))return s[t]=3,l[t];if(n!==Ae&&pe(n,t))return s[t]=4,n[t];ei&&(s[t]=0)}}const p=_n[t];let u,d;if(p)return t==="$attrs"&&Te(e.attrs,"get",""),p(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==Ae&&pe(n,t))return s[t]=4,n[t];if(d=c.config.globalProperties,pe(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Ka(i,t)?(i[t]=n,!0):a!==Ae&&pe(a,t)?(a[t]=n,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:s}},r){let c;return!!(n[r]||e!==Ae&&r[0]!=="$"&&pe(e,r)||Ka(t,r)||pe(l,r)||pe(a,r)||pe(_n,r)||pe(i.config.globalProperties,r)||(c=s.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qi(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ei=!0;function Tr(e){const t=jo(e),n=e.proxy,a=e.ctx;ei=!1,t.beforeCreate&&zi(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:s,watch:r,provide:c,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:A,updated:k,activated:h,deactivated:C,beforeDestroy:B,beforeUnmount:M,destroyed:P,unmounted:x,render:w,renderTracked:Z,renderTriggered:q,errorCaptured:ye,serverPrefetch:J,expose:te,inheritAttrs:ne,components:L,directives:ie,filters:Me}=t;if(p&&Kr(p,a,null),s)for(const O in s){const v=s[O];ee(v)&&(a[O]=v.bind(n))}if(i){const O=i.call(n,n);he(O)&&(e.data=hn(O))}if(ei=!0,l)for(const O in l){const v=l[O],le=ee(v)?v.bind(n,n):ee(v.get)?v.get.bind(n,n):ft,fe=!ee(v)&&ee(v.set)?v.set.bind(n):ft,W=ae({get:le,set:fe});Object.defineProperty(a,O,{enumerable:!0,configurable:!0,get:()=>W.value,set:Pe=>W.value=Pe})}if(r)for(const O in r)Uo(r[O],a,n,O);if(c){const O=ee(c)?c.call(n):c;Reflect.ownKeys(O).forEach(v=>{Xn(v,O[v])})}u&&zi(u,e,"c");function we(O,v){V(v)?v.forEach(le=>O(le.bind(n))):v&&O(v.bind(n))}if(we(Pr,d),we(tn,m),we(Mr,A),we(_r,k),we(xr,h),we(yr,C),we(Sr,ye),we(Cr,Z),we(Rr,q),we(Oo,M),we(wi,x),we(Dr,J),V(te))if(te.length){const O=e.exposed||(e.exposed={});te.forEach(v=>{Object.defineProperty(O,v,{get:()=>n[v],set:le=>n[v]=le,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===ft&&(e.render=w),ne!=null&&(e.inheritAttrs=ne),L&&(e.components=L),ie&&(e.directives=ie),J&&To(e)}function Kr(e,t,n=ft){V(e)&&(e=ti(e));for(const a in e){const i=e[a];let l;he(i)?"default"in i?l=at(i.from||a,i.default,!0):l=at(i.from||a):l=at(i),Ge(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:s=>l.value=s}):t[a]=l}}function zi(e,t,n){st(V(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Uo(e,t,n,a){let i=a.includes(".")?_o(n,a):()=>n[a];if(De(e)){const l=t[e];ee(l)&&Mt(i,l)}else if(ee(e))Mt(i,e.bind(n));else if(he(e))if(V(e))e.forEach(l=>Uo(l,t,n,a));else{const l=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(l)&&Mt(i,l,e)}}function jo(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:s}}=e.appContext,r=l.get(t);let c;return r?c=r:!i.length&&!n&&!a?c=t:(c={},i.length&&i.forEach(p=>ra(c,p,s,!0)),ra(c,t,s)),he(t)&&l.set(t,c),c}function ra(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&ra(e,l,n,!0),i&&i.forEach(s=>ra(e,s,n,!0));for(const s in t)if(!(a&&s==="expose")){const r=Or[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Or={data:Zi,props:Xi,emits:Xi,methods:xn,computed:xn,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:xn,directives:xn,watch:Gr,provide:Zi,inject:Nr};function Zi(e,t){return t?e?function(){return Se(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Nr(e,t){return xn(ti(e),ti(t))}function ti(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fe(e,t){return e?[...new Set([].concat(e,t))]:t}function xn(e,t){return e?Se(Object.create(null),e,t):t}function Xi(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:Se(Object.create(null),qi(e),qi(t??{})):t}function Gr(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const a in t)n[a]=Fe(e[a],t[a]);return n}function Ho(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lr=0;function Fr(e,t){return function(a,i=null){ee(a)||(a=Se({},a)),i!=null&&!he(i)&&(i=null);const l=Ho(),s=new WeakSet,r=[];let c=!1;const p=l.app={_uid:Lr++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:bc,get config(){return l.config},set config(u){},use(u,...d){return s.has(u)||(u&&ee(u.install)?(s.add(u),u.install(p,...d)):ee(u)&&(s.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,m){if(!c){const A=p._ceVNode||xe(a,i);return A.appContext=l,m===!0?m="svg":m===!1&&(m=void 0),e(A,u,m),c=!0,p._container=u,u.__vue_app__=p,Pa(A.component)}},onUnmount(u){r.push(u)},unmount(){c&&(st(r,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p},runWithContext(u){const d=un;un=p;try{return u()}finally{un=d}}};return p}}let un=null;const Ur=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${en(t)}Modifiers`];function jr(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||Ae;let i=n;const l=t.startsWith("update:"),s=l&&Ur(a,t.slice(7));s&&(s.trim&&(i=n.map(u=>De(u)?u.trim():u)),s.number&&(i=n.map(fa)));let r,c=a[r=Ca(t)]||a[r=Ca(tt(t))];!c&&l&&(c=a[r=Ca(en(t))]),c&&st(c,e,6,i);const p=a[r+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,st(p,e,6,i)}}const Hr=new WeakMap;function Wo(e,t,n=!1){const a=n?Hr:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let s={},r=!1;if(!ee(e)){const c=p=>{const u=Wo(p,t,!0);u&&(r=!0,Se(s,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!r?(he(e)&&a.set(e,null),null):(V(l)?l.forEach(c=>s[c]=null):Se(s,l),he(e)&&a.set(e,s),s)}function ya(e,t){return!e||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,en(t))||pe(e,t))}function $i(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:s,attrs:r,emit:c,render:p,renderCache:u,props:d,data:m,setupState:A,ctx:k,inheritAttrs:h}=e,C=la(e);let B,M;try{if(n.shapeFlag&4){const x=i||a,w=x;B=mt(p.call(w,x,u,d,A,m,k)),M=r}else{const x=t;B=mt(x.length>1?x(d,{attrs:r,slots:s,emit:c}):x(d,null)),M=t.props?r:Wr(r)}}catch(x){Dn.length=0,ba(x,e,1),B=xe(Ke)}let P=B;if(M&&h!==!1){const x=Object.keys(M),{shapeFlag:w}=P;x.length&&w&7&&(l&&x.some(di)&&(M=Jr(M,l)),P=Ht(P,M,!1,!0))}return n.dirs&&(P=Ht(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&In(P,n.transition),B=P,la(C),B}const Wr=e=>{let t;for(const n in e)(n==="class"||n==="style"||pa(n))&&((t||(t={}))[n]=e[n]);return t},Jr=(e,t)=>{const n={};for(const a in e)(!di(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Qr(e,t,n){const{props:a,children:i,component:l}=e,{props:s,children:r,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?el(a,s,p):!!s;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(s[m]!==a[m]&&!ya(p,m))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:a===s?!1:a?s?el(a,s,p):!0:!!s;return!1}function el(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!ya(n,l))return!0}return!1}function Yr({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const Jo={},Qo=()=>Object.create(Jo),Yo=e=>Object.getPrototypeOf(e)===Jo;function Vr(e,t,n,a=!1){const i={},l=Qo();e.propsDefaults=Object.create(null),Vo(e,t,i,l);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=a?i:Ao(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function qr(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:s}}=e,r=ce(i),[c]=e.propsOptions;let p=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(ya(e.emitsOptions,m))continue;const A=t[m];if(c)if(pe(l,m))A!==l[m]&&(l[m]=A,p=!0);else{const k=tt(m);i[k]=ni(c,r,k,A,e,!1)}else A!==l[m]&&(l[m]=A,p=!0)}}}else{Vo(e,t,i,l)&&(p=!0);let u;for(const d in r)(!t||!pe(t,d)&&((u=en(d))===d||!pe(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ni(c,r,d,void 0,e,!0)):delete i[d]);if(l!==r)for(const d in l)(!t||!pe(t,d))&&(delete l[d],p=!0)}p&&yt(e.attrs,"set","")}function Vo(e,t,n,a){const[i,l]=e.propsOptions;let s=!1,r;if(t)for(let c in t){if(yn(c))continue;const p=t[c];let u;i&&pe(i,u=tt(c))?!l||!l.includes(u)?n[u]=p:(r||(r={}))[u]=p:ya(e.emitsOptions,c)||(!(c in a)||p!==a[c])&&(a[c]=p,s=!0)}if(l){const c=ce(n),p=r||Ae;for(let u=0;u<l.length;u++){const d=l[u];n[d]=ni(i,c,d,p[d],e,!pe(p,d))}}return s}function ni(e,t,n,a,i,l){const s=e[n];if(s!=null){const r=pe(s,"default");if(r&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&ee(c)){const{propsDefaults:p}=i;if(n in p)a=p[n];else{const u=Wn(i);a=p[n]=c.call(null,t),u()}}else a=c;i.ce&&i.ce._setProp(n,a)}s[0]&&(l&&!r?a=!1:s[1]&&(a===""||a===en(n))&&(a=!0))}return a}const zr=new WeakMap;function qo(e,t,n=!1){const a=n?zr:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,s={},r=[];let c=!1;if(!ee(e)){const u=d=>{c=!0;const[m,A]=qo(d,t,!0);Se(s,m),A&&r.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!c)return he(e)&&a.set(e,on),on;if(V(l))for(let u=0;u<l.length;u++){const d=tt(l[u]);tl(d)&&(s[d]=Ae)}else if(l)for(const u in l){const d=tt(u);if(tl(d)){const m=l[u],A=s[d]=V(m)||ee(m)?{type:m}:Se({},m),k=A.type;let h=!1,C=!0;if(V(k))for(let B=0;B<k.length;++B){const M=k[B],P=ee(M)&&M.name;if(P==="Boolean"){h=!0;break}else P==="String"&&(C=!1)}else h=ee(k)&&k.name==="Boolean";A[0]=h,A[1]=C,(h||pe(A,"default"))&&r.push(d)}}const p=[s,r];return he(e)&&a.set(e,p),p}function tl(e){return e[0]!=="$"&&!yn(e)}const Pi=e=>e==="_"||e==="_ctx"||e==="$stable",Mi=e=>V(e)?e.map(mt):[mt(e)],Zr=(e,t,n)=>{if(t._n)return t;const a=$e((...i)=>Mi(t(...i)),n);return a._c=!1,a},zo=(e,t,n)=>{const a=e._ctx;for(const i in e){if(Pi(i))continue;const l=e[i];if(ee(l))t[i]=Zr(i,l,a);else if(l!=null){const s=Mi(l);t[i]=()=>s}}},Zo=(e,t)=>{const n=Mi(t);e.slots.default=()=>n},Xo=(e,t,n)=>{for(const a in t)(n||!Pi(a))&&(e[a]=t[a])},Xr=(e,t,n)=>{const a=e.slots=Qo();if(e.vnode.shapeFlag&32){const i=t._;i?(Xo(a,t,n),n&&Xl(a,"_",i,!0)):zo(t,a)}else t&&Zo(e,t)},$r=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,s=Ae;if(a.shapeFlag&32){const r=t._;r?n&&r===1?l=!1:Xo(i,t,n):(l=!t.$stable,zo(t,i)),s=t}else t&&(Zo(e,t),s={default:1});if(l)for(const r in i)!Pi(r)&&s[r]==null&&delete i[r]},Ve=ic;function ec(e){return tc(e)}function tc(e,t){const n=ha();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:s,createText:r,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:A=ft,insertStaticContent:k}=e,h=(g,f,b,_=null,E=null,D=null,F=void 0,G=null,N=!!f.dynamicChildren)=>{if(g===f)return;g&&!zt(g,f)&&(_=R(g),Pe(g,E,D,!0),g=null),f.patchFlag===-2&&(N=!1,f.dynamicChildren=null);const{type:T,ref:z,shapeFlag:j}=f;switch(T){case wa:C(g,f,b,_);break;case Ke:B(g,f,b,_);break;case $n:g==null&&M(f,b,_,F);break;case X:L(g,f,b,_,E,D,F,G,N);break;default:j&1?w(g,f,b,_,E,D,F,G,N):j&6?ie(g,f,b,_,E,D,F,G,N):(j&64||j&128)&&T.process(g,f,b,_,E,D,F,G,N,Q)}z!=null&&E?Mn(z,g&&g.ref,D,f||g,!f):z==null&&g&&g.ref!=null&&Mn(g.ref,null,D,g,!0)},C=(g,f,b,_)=>{if(g==null)a(f.el=r(f.children),b,_);else{const E=f.el=g.el;f.children!==g.children&&p(E,f.children)}},B=(g,f,b,_)=>{g==null?a(f.el=c(f.children||""),b,_):f.el=g.el},M=(g,f,b,_)=>{[g.el,g.anchor]=k(g.children,f,b,_,g.el,g.anchor)},P=({el:g,anchor:f},b,_)=>{let E;for(;g&&g!==f;)E=m(g),a(g,b,_),g=E;a(f,b,_)},x=({el:g,anchor:f})=>{let b;for(;g&&g!==f;)b=m(g),i(g),g=b;i(f)},w=(g,f,b,_,E,D,F,G,N)=>{if(f.type==="svg"?F="svg":f.type==="math"&&(F="mathml"),g==null)Z(f,b,_,E,D,F,G,N);else{const T=g.el&&g.el._isVueCE?g.el:null;try{T&&T._beginPatch(),J(g,f,E,D,F,G,N)}finally{T&&T._endPatch()}}},Z=(g,f,b,_,E,D,F,G)=>{let N,T;const{props:z,shapeFlag:j,transition:Y,dirs:$}=g;if(N=g.el=s(g.type,D,z&&z.is,z),j&8?u(N,g.children):j&16&&ye(g.children,N,null,_,E,Oa(g,D),F,G),$&&Jt(g,null,_,"created"),q(N,g,g.scopeId,F,_),z){for(const be in z)be!=="value"&&!yn(be)&&l(N,be,null,z[be],D,_);"value"in z&&l(N,"value",null,z.value,D),(T=z.onVnodeBeforeMount)&&pt(T,_,g)}$&&Jt(g,null,_,"beforeMount");const re=nc(E,Y);re&&Y.beforeEnter(N),a(N,f,b),((T=z&&z.onVnodeMounted)||re||$)&&Ve(()=>{T&&pt(T,_,g),re&&Y.enter(N),$&&Jt(g,null,_,"mounted")},E)},q=(g,f,b,_,E)=>{if(b&&A(g,b),_)for(let D=0;D<_.length;D++)A(g,_[D]);if(E){let D=E.subTree;if(f===D||ns(D.type)&&(D.ssContent===f||D.ssFallback===f)){const F=E.vnode;q(g,F,F.scopeId,F.slotScopeIds,E.parent)}}},ye=(g,f,b,_,E,D,F,G,N=0)=>{for(let T=N;T<g.length;T++){const z=g[T]=G?Nt(g[T]):mt(g[T]);h(null,z,f,b,_,E,D,F,G)}},J=(g,f,b,_,E,D,F)=>{const G=f.el=g.el;let{patchFlag:N,dynamicChildren:T,dirs:z}=f;N|=g.patchFlag&16;const j=g.props||Ae,Y=f.props||Ae;let $;if(b&&Qt(b,!1),($=Y.onVnodeBeforeUpdate)&&pt($,b,f,g),z&&Jt(f,g,b,"beforeUpdate"),b&&Qt(b,!0),(j.innerHTML&&Y.innerHTML==null||j.textContent&&Y.textContent==null)&&u(G,""),T?te(g.dynamicChildren,T,G,b,_,Oa(f,E),D):F||v(g,f,G,null,b,_,Oa(f,E),D,!1),N>0){if(N&16)ne(G,j,Y,b,E);else if(N&2&&j.class!==Y.class&&l(G,"class",null,Y.class,E),N&4&&l(G,"style",j.style,Y.style,E),N&8){const re=f.dynamicProps;for(let be=0;be<re.length;be++){const me=re[be],He=j[me],We=Y[me];(We!==He||me==="value")&&l(G,me,He,We,E,b)}}N&1&&g.children!==f.children&&u(G,f.children)}else!F&&T==null&&ne(G,j,Y,b,E);(($=Y.onVnodeUpdated)||z)&&Ve(()=>{$&&pt($,b,f,g),z&&Jt(f,g,b,"updated")},_)},te=(g,f,b,_,E,D,F)=>{for(let G=0;G<f.length;G++){const N=g[G],T=f[G],z=N.el&&(N.type===X||!zt(N,T)||N.shapeFlag&198)?d(N.el):b;h(N,T,z,null,_,E,D,F,!0)}},ne=(g,f,b,_,E)=>{if(f!==b){if(f!==Ae)for(const D in f)!yn(D)&&!(D in b)&&l(g,D,f[D],null,E,_);for(const D in b){if(yn(D))continue;const F=b[D],G=f[D];F!==G&&D!=="value"&&l(g,D,G,F,E,_)}"value"in b&&l(g,"value",f.value,b.value,E)}},L=(g,f,b,_,E,D,F,G,N)=>{const T=f.el=g?g.el:r(""),z=f.anchor=g?g.anchor:r("");let{patchFlag:j,dynamicChildren:Y,slotScopeIds:$}=f;$&&(G=G?G.concat($):$),g==null?(a(T,b,_),a(z,b,_),ye(f.children||[],b,z,E,D,F,G,N)):j>0&&j&64&&Y&&g.dynamicChildren&&g.dynamicChildren.length===Y.length?(te(g.dynamicChildren,Y,b,E,D,F,G),(f.key!=null||E&&f===E.subTree)&&$o(g,f,!0)):v(g,f,b,z,E,D,F,G,N)},ie=(g,f,b,_,E,D,F,G,N)=>{f.slotScopeIds=G,g==null?f.shapeFlag&512?E.ctx.activate(f,b,_,F,N):Me(f,b,_,E,D,F,N):Le(g,f,N)},Me=(g,f,b,_,E,D,F)=>{const G=g.component=dc(g,_,E);if(va(g)&&(G.ctx.renderer=Q),pc(G,!1,F),G.asyncDep){if(E&&E.registerDep(G,we,F),!g.el){const N=G.subTree=xe(Ke);B(null,N,f,b),g.placeholder=N.el}}else we(G,g,f,b,E,D,F)},Le=(g,f,b)=>{const _=f.component=g.component;if(Qr(g,f,b))if(_.asyncDep&&!_.asyncResolved){O(_,f,b);return}else _.next=f,_.update();else f.el=g.el,_.vnode=f},we=(g,f,b,_,E,D,F)=>{const G=()=>{if(g.isMounted){let{next:j,bu:Y,u:$,parent:re,vnode:be}=g;{const ut=es(g);if(ut){j&&(j.el=be.el,O(g,j,F)),ut.asyncDep.then(()=>{g.isUnmounted||G()});return}}let me=j,He;Qt(g,!1),j?(j.el=be.el,O(g,j,F)):j=be,Y&&Zn(Y),(He=j.props&&j.props.onVnodeBeforeUpdate)&&pt(He,re,j,be),Qt(g,!0);const We=$i(g),ct=g.subTree;g.subTree=We,h(ct,We,d(ct.el),R(ct),g,E,D),j.el=We.el,me===null&&Yr(g,We.el),$&&Ve($,E),(He=j.props&&j.props.onVnodeUpdated)&&Ve(()=>pt(He,re,j,be),E)}else{let j;const{el:Y,props:$}=f,{bm:re,m:be,parent:me,root:He,type:We}=g,ct=cn(f);Qt(g,!1),re&&Zn(re),!ct&&(j=$&&$.onVnodeBeforeMount)&&pt(j,me,f),Qt(g,!0);{He.ce&&He.ce._def.shadowRoot!==!1&&He.ce._injectChildStyle(We);const ut=g.subTree=$i(g);h(null,ut,b,_,g,E,D),f.el=ut.el}if(be&&Ve(be,E),!ct&&(j=$&&$.onVnodeMounted)){const ut=f;Ve(()=>pt(j,me,ut),E)}(f.shapeFlag&256||me&&cn(me.vnode)&&me.vnode.shapeFlag&256)&&g.a&&Ve(g.a,E),g.isMounted=!0,f=b=_=null}};g.scope.on();const N=g.effect=new no(G);g.scope.off();const T=g.update=N.run.bind(N),z=g.job=N.runIfDirty.bind(N);z.i=g,z.id=g.uid,N.scheduler=()=>yi(z),Qt(g,!0),T()},O=(g,f,b)=>{f.component=g;const _=g.vnode.props;g.vnode=f,g.next=null,qr(g,f.props,_,b),$r(g,f.children,b),Dt(),Ji(g),Rt()},v=(g,f,b,_,E,D,F,G,N=!1)=>{const T=g&&g.children,z=g?g.shapeFlag:0,j=f.children,{patchFlag:Y,shapeFlag:$}=f;if(Y>0){if(Y&128){fe(T,j,b,_,E,D,F,G,N);return}else if(Y&256){le(T,j,b,_,E,D,F,G,N);return}}$&8?(z&16&&Ze(T,E,D),j!==T&&u(b,j)):z&16?$&16?fe(T,j,b,_,E,D,F,G,N):Ze(T,E,D,!0):(z&8&&u(b,""),$&16&&ye(j,b,_,E,D,F,G,N))},le=(g,f,b,_,E,D,F,G,N)=>{g=g||on,f=f||on;const T=g.length,z=f.length,j=Math.min(T,z);let Y;for(Y=0;Y<j;Y++){const $=f[Y]=N?Nt(f[Y]):mt(f[Y]);h(g[Y],$,b,null,E,D,F,G,N)}T>z?Ze(g,E,D,!0,!1,j):ye(f,b,_,E,D,F,G,N,j)},fe=(g,f,b,_,E,D,F,G,N)=>{let T=0;const z=f.length;let j=g.length-1,Y=z-1;for(;T<=j&&T<=Y;){const $=g[T],re=f[T]=N?Nt(f[T]):mt(f[T]);if(zt($,re))h($,re,b,null,E,D,F,G,N);else break;T++}for(;T<=j&&T<=Y;){const $=g[j],re=f[Y]=N?Nt(f[Y]):mt(f[Y]);if(zt($,re))h($,re,b,null,E,D,F,G,N);else break;j--,Y--}if(T>j){if(T<=Y){const $=Y+1,re=$<z?f[$].el:_;for(;T<=Y;)h(null,f[T]=N?Nt(f[T]):mt(f[T]),b,re,E,D,F,G,N),T++}}else if(T>Y)for(;T<=j;)Pe(g[T],E,D,!0),T++;else{const $=T,re=T,be=new Map;for(T=re;T<=Y;T++){const Ye=f[T]=N?Nt(f[T]):mt(f[T]);Ye.key!=null&&be.set(Ye.key,T)}let me,He=0;const We=Y-re+1;let ct=!1,ut=0;const An=new Array(We);for(T=0;T<We;T++)An[T]=0;for(T=$;T<=j;T++){const Ye=g[T];if(He>=We){Pe(Ye,E,D,!0);continue}let dt;if(Ye.key!=null)dt=be.get(Ye.key);else for(me=re;me<=Y;me++)if(An[me-re]===0&&zt(Ye,f[me])){dt=me;break}dt===void 0?Pe(Ye,E,D,!0):(An[dt-re]=T+1,dt>=ut?ut=dt:ct=!0,h(Ye,f[dt],b,null,E,D,F,G,N),He++)}const Gi=ct?ac(An):on;for(me=Gi.length-1,T=We-1;T>=0;T--){const Ye=re+T,dt=f[Ye],Li=f[Ye+1],Fi=Ye+1<z?Li.el||ts(Li):_;An[T]===0?h(null,dt,b,Fi,E,D,F,G,N):ct&&(me<0||T!==Gi[me]?W(dt,b,Fi,2):me--)}}},W=(g,f,b,_,E=null)=>{const{el:D,type:F,transition:G,children:N,shapeFlag:T}=g;if(T&6){W(g.component.subTree,f,b,_);return}if(T&128){g.suspense.move(f,b,_);return}if(T&64){F.move(g,f,b,Q);return}if(F===X){a(D,f,b);for(let j=0;j<N.length;j++)W(N[j],f,b,_);a(g.anchor,f,b);return}if(F===$n){P(g,f,b);return}if(_!==2&&T&1&&G)if(_===0)G.beforeEnter(D),a(D,f,b),Ve(()=>G.enter(D),E);else{const{leave:j,delayLeave:Y,afterLeave:$}=G,re=()=>{g.ctx.isUnmounted?i(D):a(D,f,b)},be=()=>{D._isLeaving&&D[xt](!0),j(D,()=>{re(),$&&$()})};Y?Y(D,re,be):be()}else a(D,f,b)},Pe=(g,f,b,_=!1,E=!1)=>{const{type:D,props:F,ref:G,children:N,dynamicChildren:T,shapeFlag:z,patchFlag:j,dirs:Y,cacheIndex:$}=g;if(j===-2&&(E=!1),G!=null&&(Dt(),Mn(G,null,b,g,!0),Rt()),$!=null&&(f.renderCache[$]=void 0),z&256){f.ctx.deactivate(g);return}const re=z&1&&Y,be=!cn(g);let me;if(be&&(me=F&&F.onVnodeBeforeUnmount)&&pt(me,f,g),z&6)ht(g.component,b,_);else{if(z&128){g.suspense.unmount(b,_);return}re&&Jt(g,null,f,"beforeUnmount"),z&64?g.type.remove(g,f,b,Q,_):T&&!T.hasOnce&&(D!==X||j>0&&j&64)?Ze(T,f,b,!1,!0):(D===X&&j&384||!E&&z&16)&&Ze(N,f,b),_&&ge(g)}(be&&(me=F&&F.onVnodeUnmounted)||re)&&Ve(()=>{me&&pt(me,f,g),re&&Jt(g,null,f,"unmounted")},b)},ge=g=>{const{type:f,el:b,anchor:_,transition:E}=g;if(f===X){Ie(b,_);return}if(f===$n){x(g);return}const D=()=>{i(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(g.shapeFlag&1&&E&&!E.persisted){const{leave:F,delayLeave:G}=E,N=()=>F(b,D);G?G(g.el,D,N):N()}else D()},Ie=(g,f)=>{let b;for(;g!==f;)b=m(g),i(g),g=b;i(f)},ht=(g,f,b)=>{const{bum:_,scope:E,job:D,subTree:F,um:G,m:N,a:T}=g;nl(N),nl(T),_&&Zn(_),E.stop(),D&&(D.flags|=8,Pe(F,g,f,b)),G&&Ve(G,f),Ve(()=>{g.isUnmounted=!0},f)},Ze=(g,f,b,_=!1,E=!1,D=0)=>{for(let F=D;F<g.length;F++)Pe(g[F],f,b,_,E)},R=g=>{if(g.shapeFlag&6)return R(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const f=m(g.anchor||g.el),b=f&&f[Ar];return b?m(b):f};let H=!1;const U=(g,f,b)=>{let _;g==null?f._vnode&&(Pe(f._vnode,null,null,!0),_=f._vnode.component):h(f._vnode||null,g,f,null,null,null,b),f._vnode=g,H||(H=!0,Ji(_),yo(),H=!1)},Q={p:h,um:Pe,m:W,r:ge,mt:Me,mc:ye,pc:v,pbc:te,n:R,o:e};return{render:U,hydrate:void 0,createApp:Fr(U)}}function Oa({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Qt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function nc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $o(e,t,n=!1){const a=e.children,i=t.children;if(V(a)&&V(i))for(let l=0;l<a.length;l++){const s=a[l];let r=i[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[l]=Nt(i[l]),r.el=s.el),!n&&r.patchFlag!==-2&&$o(s,r)),r.type===wa&&(r.patchFlag!==-1?r.el=s.el:r.__elIndex=l+(e.type===X?1:0)),r.type===Ke&&!r.el&&(r.el=s.el)}}function ac(e){const t=e.slice(),n=[0];let a,i,l,s,r;const c=e.length;for(a=0;a<c;a++){const p=e[a];if(p!==0){if(i=n[n.length-1],e[i]<p){t[a]=i,n.push(a);continue}for(l=0,s=n.length-1;l<s;)r=l+s>>1,e[n[r]]<p?l=r+1:s=r;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,s=n[l-1];l-- >0;)n[l]=s,s=t[s];return n}function es(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:es(t)}function nl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ts(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ts(t.subTree):null}const ns=e=>e.__isSuspense;function ic(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):gr(e)}const X=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),Dn=[];let ze=null;function S(e=!1){Dn.push(ze=e?null:[])}function lc(){Dn.pop(),ze=Dn[Dn.length-1]||null}let Bn=1;function ca(e,t=!1){Bn+=e,e<0&&ze&&t&&(ze.hasOnce=!0)}function as(e){return e.dynamicChildren=Bn>0?ze||on:null,lc(),Bn>0&&ze&&ze.push(e),e}function I(e,t,n,a,i,l){return as(o(e,t,n,a,i,l,!0))}function ua(e,t,n,a,i){return as(xe(e,t,n,a,i,!0))}function Tn(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const is=({key:e})=>e??null,ea=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||Ge(e)||ee(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function o(e,t=null,n=null,a=0,i=null,l=e===X?0:1,s=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&is(t),ref:t&&ea(t),scopeId:Po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ee};return r?(_i(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Bn>0&&!s&&ze&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&ze.push(c),c}const xe=oc;function oc(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Go)&&(e=Ke),Tn(e)){const r=Ht(e,t,!0);return n&&_i(r,n),Bn>0&&!l&&ze&&(r.shapeFlag&6?ze[ze.indexOf(e)]=r:ze.push(r)),r.patchFlag=-2,r}if(Ac(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:r,style:c}=t;r&&!De(r)&&(t.class=y(r)),he(c)&&(xi(c)&&!V(c)&&(c=Se({},c)),t.style=Pt(c))}const s=De(e)?1:ns(e)?128:Do(e)?64:he(e)?4:ee(e)?2:0;return o(e,t,n,a,i,s,l,!0)}function sc(e){return e?xi(e)||Yo(e)?Se({},e):e:null}function Ht(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:s,children:r,transition:c}=e,p=t?rc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&is(p),ref:t&&t.ref?n&&l?V(l)?l.concat(ea(t)):[l,ea(t)]:ea(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==X?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&In(u,c.clone(u)),u}function Qe(e=" ",t=0){return xe(wa,null,e,t)}function ta(e,t){const n=xe($n,null,e);return n.staticCount=t,n}function Re(e="",t=!1){return t?(S(),ua(Ke,null,e)):xe(Ke,null,e)}function mt(e){return e==null||typeof e=="boolean"?xe(Ke):V(e)?xe(X,null,e.slice()):Tn(e)?Nt(e):xe(wa,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function _i(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),_i(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Yo(t)?t._ctx=Ee:i===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),a&64?(n=16,t=[Qe(t)]):n=8);e.children=t,e.shapeFlag|=n}function rc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=y([t.class,a.class]));else if(i==="style")t.style=Pt([t.style,a.style]);else if(pa(i)){const l=t[i],s=a[i];s&&l!==s&&!(V(l)&&l.includes(s))&&(t[i]=l?[].concat(l,s):s)}else i!==""&&(t[i]=a[i])}return t}function pt(e,t,n,a=null){st(e,t,7,[n,a])}const cc=Ho();let uc=0;function dc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||cc,l={uid:uc++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qo(a,i),emitsOptions:Wo(a,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:a.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=jr.bind(null,l),e.ce&&e.ce(l),l}let Oe=null;const ls=()=>Oe||Ee;let da,ai;{const e=ha(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(s=>s(l)):i[0](l)}};da=t("__VUE_INSTANCE_SETTERS__",n=>Oe=n),ai=t("__VUE_SSR_SETTERS__",n=>Kn=n)}const Wn=e=>{const t=Oe;return da(e),e.scope.on(),()=>{e.scope.off(),da(t)}},al=()=>{Oe&&Oe.scope.off(),da(null)};function os(e){return e.vnode.shapeFlag&4}let Kn=!1;function pc(e,t=!1,n=!1){t&&ai(t);const{props:a,children:i}=e.vnode,l=os(e);Vr(e,a,l,t),Xr(e,i,n||t);const s=l?gc(e,t):void 0;return t&&ai(!1),s}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Br);const{setup:a}=n;if(a){Dt();const i=e.setupContext=a.length>1?fc(e):null,l=Wn(e),s=Hn(a,e,0,[e.props,i]),r=ql(s);if(Rt(),l(),(r||e.sp)&&!cn(e)&&To(e),r){if(s.then(al,al),t)return s.then(c=>{il(e,c)}).catch(c=>{ba(c,e,0)});e.asyncDep=s}else il(e,s)}else ss(e)}function il(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=ko(t)),ss(e)}function ss(e,t,n){const a=e.type;e.render||(e.render=a.render||ft);{const i=Wn(e);Dt();try{Tr(e)}finally{Rt(),i()}}}const mc={get(e,t){return Te(e,"get",""),e[t]}};function fc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mc),slots:e.slots,emit:e.emit,expose:t}}function Pa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ko(ar(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _n)return _n[n](e)},has(t,n){return n in t||n in _n}})):e.proxy}function hc(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function Ac(e){return ee(e)&&"__vccOpts"in e}const ae=(e,t)=>rr(e,t,Kn);function Di(e,t,n){try{ca(-1);const a=arguments.length;return a===2?he(t)&&!V(t)?Tn(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Tn(n)&&(n=[n]),xe(e,t,n))}finally{ca(1)}}const bc="3.5.26";let ii;const ll=typeof window<"u"&&window.trustedTypes;if(ll)try{ii=ll.createPolicy("vue",{createHTML:e=>e})}catch{}const rs=ii?e=>ii.createHTML(e):e=>e,kc="http://www.w3.org/2000/svg",vc="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,ol=vt&&vt.createElement("template"),xc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?vt.createElementNS(kc,e):t==="mathml"?vt.createElementNS(vc,e):n?vt.createElement(e,{is:n}):vt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const s=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{ol.innerHTML=rs(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const r=ol.content;if(a==="svg"||a==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Et="transition",kn="animation",On=Symbol("_vtc"),cs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yc=Se({},Ro,cs),wc=e=>(e.displayName="Transition",e.props=yc,e),us=wc((e,{slots:t})=>Di(vr,Pc(e),t)),Yt=(e,t=[])=>{V(e)?e.forEach(n=>n(...t)):e&&e(...t)},sl=e=>e?V(e)?e.some(t=>t.length>1):e.length>1:!1;function Pc(e){const t={};for(const L in e)L in cs||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:p=s,appearToClass:u=r,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=e,k=Mc(i),h=k&&k[0],C=k&&k[1],{onBeforeEnter:B,onEnter:M,onEnterCancelled:P,onLeave:x,onLeaveCancelled:w,onBeforeAppear:Z=B,onAppear:q=M,onAppearCancelled:ye=P}=t,J=(L,ie,Me,Le)=>{L._enterCancelled=Le,Vt(L,ie?u:r),Vt(L,ie?p:s),Me&&Me()},te=(L,ie)=>{L._isLeaving=!1,Vt(L,d),Vt(L,A),Vt(L,m),ie&&ie()},ne=L=>(ie,Me)=>{const Le=L?q:M,we=()=>J(ie,L,Me);Yt(Le,[ie,we]),rl(()=>{Vt(ie,L?c:l),bt(ie,L?u:r),sl(Le)||cl(ie,a,h,we)})};return Se(t,{onBeforeEnter(L){Yt(B,[L]),bt(L,l),bt(L,s)},onBeforeAppear(L){Yt(Z,[L]),bt(L,c),bt(L,p)},onEnter:ne(!1),onAppear:ne(!0),onLeave(L,ie){L._isLeaving=!0;const Me=()=>te(L,ie);bt(L,d),L._enterCancelled?(bt(L,m),pl(L)):(pl(L),bt(L,m)),rl(()=>{L._isLeaving&&(Vt(L,d),bt(L,A),sl(x)||cl(L,a,C,Me))}),Yt(x,[L,Me])},onEnterCancelled(L){J(L,!1,void 0,!0),Yt(P,[L])},onAppearCancelled(L){J(L,!0,void 0,!0),Yt(ye,[L])},onLeaveCancelled(L){te(L),Yt(w,[L])}})}function Mc(e){if(e==null)return null;if(he(e))return[Na(e.enter),Na(e.leave)];{const t=Na(e);return[t,t]}}function Na(e){return Cs(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[On]||(e[On]=new Set)).add(t)}function Vt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[On];n&&(n.delete(t),n.size||(e[On]=void 0))}function rl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _c=0;function cl(e,t,n,a){const i=e._endId=++_c,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:s,timeout:r,propCount:c}=Dc(e,t);if(!s)return a();const p=s+"end";let u=0;const d=()=>{e.removeEventListener(p,m),l()},m=A=>{A.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},r+1),e.addEventListener(p,m)}function Dc(e,t){const n=window.getComputedStyle(e),a=k=>(n[k]||"").split(", "),i=a(`${Et}Delay`),l=a(`${Et}Duration`),s=ul(i,l),r=a(`${kn}Delay`),c=a(`${kn}Duration`),p=ul(r,c);let u=null,d=0,m=0;t===Et?s>0&&(u=Et,d=s,m=l.length):t===kn?p>0&&(u=kn,d=p,m=c.length):(d=Math.max(s,p),u=d>0?s>p?Et:kn:null,m=u?u===Et?l.length:c.length:0);const A=u===Et&&/\b(?:transform|all)(?:,|$)/.test(a(`${Et}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:A}}function ul(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>dl(n)+dl(e[a])))}function dl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function pl(e){return(e?e.ownerDocument:document).body.offsetHeight}function Rc(e,t,n){const a=e[On];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const gl=Symbol("_vod"),Cc=Symbol("_vsh"),Sc=Symbol(""),Ec=/(?:^|;)\s*display\s*:/;function Ic(e,t,n){const a=e.style,i=De(n);let l=!1;if(n&&!i){if(t)if(De(t))for(const s of t.split(";")){const r=s.slice(0,s.indexOf(":")).trim();n[r]==null&&na(a,r,"")}else for(const s in t)n[s]==null&&na(a,s,"");for(const s in n)s==="display"&&(l=!0),na(a,s,n[s])}else if(i){if(t!==n){const s=a[Sc];s&&(n+=";"+s),a.cssText=n,l=Ec.test(n)}}else t&&e.removeAttribute("style");gl in e&&(e[gl]=l?a.display:"",e[Cc]&&(a.display="none"))}const ml=/\s*!important$/;function na(e,t,n){if(V(n))n.forEach(a=>na(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Bc(e,t);ml.test(n)?e.setProperty(en(a),n.replace(ml,""),"important"):e[a]=n}}const fl=["Webkit","Moz","ms"],Ga={};function Bc(e,t){const n=Ga[t];if(n)return n;let a=tt(t);if(a!=="filter"&&a in e)return Ga[t]=a;a=ma(a);for(let i=0;i<fl.length;i++){const l=fl[i]+a;if(l in e)return Ga[t]=l}return t}const hl="http://www.w3.org/1999/xlink";function Al(e,t,n,a,i,l=Ks(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hl,t.slice(6,t.length)):e.setAttributeNS(hl,t,n):n==null||l&&!$l(n)?e.removeAttribute(t):e.setAttribute(t,l?"":lt(n)?String(n):n)}function bl(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?rs(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const r=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=$l(n):n==null&&r==="string"?(n="",s=!0):r==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function Ft(e,t,n,a){e.addEventListener(t,n,a)}function Tc(e,t,n,a){e.removeEventListener(t,n,a)}const kl=Symbol("_vei");function Kc(e,t,n,a,i=null){const l=e[kl]||(e[kl]={}),s=l[t];if(a&&s)s.value=a;else{const[r,c]=Oc(t);if(a){const p=l[t]=Lc(a,i);Ft(e,r,p,c)}else s&&(Tc(e,r,s,c),l[t]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function Oc(e){let t;if(vl.test(e)){t={};let a;for(;a=e.match(vl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let La=0;const Nc=Promise.resolve(),Gc=()=>La||(Nc.then(()=>La=0),La=Date.now());function Lc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;st(Fc(a,n.value),t,5,[a])};return n.value=e,n.attached=Gc(),n}function Fc(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const xl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Uc=(e,t,n,a,i,l)=>{const s=i==="svg";t==="class"?Rc(e,a,s):t==="style"?Ic(e,n,a):pa(t)?di(t)||Kc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jc(e,t,a,s))?(bl(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Al(e,t,a,s,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!De(a))?bl(e,tt(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Al(e,t,a,s))};function jc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&xl(t)&&ee(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return xl(t)&&De(n)?!1:t in e}const pn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>Zn(t,n):t};function Hc(e){e.target.composing=!0}function yl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _t=Symbol("_assign");function wl(e,t,n){return t&&(e=e.trim()),n&&(e=fa(e)),e}const qe={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[_t]=pn(i);const l=a||i.props&&i.props.type==="number";Ft(e,t?"change":"input",s=>{s.target.composing||e[_t](wl(e.value,n,l))}),(n||l)&&Ft(e,"change",()=>{e.value=wl(e.value,n,l)}),t||(Ft(e,"compositionstart",Hc),Ft(e,"compositionend",yl),Ft(e,"change",yl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},s){if(e[_t]=pn(s),e.composing)return;const r=(l||e.type==="number")&&!/^0\d/.test(e.value)?fa(e.value):e.value,c=t??"";r!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===c)||(e.value=c))}},Pl={deep:!0,created(e,t,n){e[_t]=pn(n),Ft(e,"change",()=>{const a=e._modelValue,i=Nn(e),l=e.checked,s=e[_t];if(V(a)){const r=mi(a,i),c=r!==-1;if(l&&!c)s(a.concat(i));else if(!l&&c){const p=[...a];p.splice(r,1),s(p)}}else if(fn(a)){const r=new Set(a);l?r.add(i):r.delete(i),s(r)}else s(ds(e,l))})},mounted:Ml,beforeUpdate(e,t,n){e[_t]=pn(n),Ml(e,t,n)}};function Ml(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(V(t))i=mi(t,a.props.value)>-1;else if(fn(t))i=t.has(a.props.value);else{if(t===n)return;i=jn(t,ds(e,!0))}e.checked!==i&&(e.checked=i)}const it={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=fn(t);Ft(e,"change",()=>{const l=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?fa(Nn(s)):Nn(s));e[_t](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,ka(()=>{e._assigning=!1})}),e[_t]=pn(a)},mounted(e,{value:t}){_l(e,t)},beforeUpdate(e,t,n){e[_t]=pn(n)},updated(e,{value:t}){e._assigning||_l(e,t)}};function _l(e,t){const n=e.multiple,a=V(t);if(!(n&&!a&&!fn(t))){for(let i=0,l=e.options.length;i<l;i++){const s=e.options[i],r=Nn(s);if(n)if(a){const c=typeof r;c==="string"||c==="number"?s.selected=t.some(p=>String(p)===String(r)):s.selected=mi(t,r)>-1}else s.selected=t.has(r);else if(jn(Nn(s),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Nn(e){return"_value"in e?e._value:e.value}function ds(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Wc=["ctrl","shift","alt","meta"],Jc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Wc.some(n=>e[`${n}Key`]&&!t.includes(n))},Qc=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let s=0;s<t.length;s++){const r=Jc[t[s]];if(r&&r(i,t))return}return e(i,...l)}))},Yc=Se({patchProp:Uc},xc);let Dl;function Vc(){return Dl||(Dl=ec(Yc))}const qc=((...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=Zc(a);if(!i)return;const l=t._component;!ee(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,zc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t});function zc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zc(e){return De(e)?document.querySelector(e):e}const Ma="/toram-vue/images/logo.png";const ln=typeof document<"u";function ps(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ps(e.default)}const de=Object.assign;function Fa(e,t){const n={};for(const a in t){const i=t[a];n[a]=rt(i)?i.map(e):e(i)}return n}const Rn=()=>{},rt=Array.isArray;function Rl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const gs=/#/g,$c=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,ms=/\+/g,au=/%5B/g,iu=/%5D/g,fs=/%5E/g,lu=/%60/g,hs=/%7B/g,ou=/%7C/g,As=/%7D/g,su=/%20/g;function Ri(e){return e==null?"":encodeURI(""+e).replace(ou,"|").replace(au,"[").replace(iu,"]")}function ru(e){return Ri(e).replace(hs,"{").replace(As,"}").replace(fs,"^")}function li(e){return Ri(e).replace(ms,"%2B").replace(su,"+").replace(gs,"%23").replace($c,"%26").replace(lu,"`").replace(hs,"{").replace(As,"}").replace(fs,"^")}function cu(e){return li(e).replace(tu,"%3D")}function uu(e){return Ri(e).replace(gs,"%23").replace(nu,"%3F")}function du(e){return uu(e).replace(eu,"%2F")}function Gn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pu=/\/$/,gu=e=>e.replace(pu,"");function Ua(e,t,n="/"){let a,i={},l="",s="";const r=t.indexOf("#");let c=t.indexOf("?");return c=r>=0&&c>r?-1:c,c>=0&&(a=t.slice(0,c),l=t.slice(c,r>0?r:t.length),i=e(l.slice(1))),r>=0&&(a=a||t.slice(0,r),s=t.slice(r,t.length)),a=Au(a??t,n),{fullPath:a+l+s,path:a,query:i,hash:Gn(s)}}function mu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Cl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fu(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&gn(t.matched[a],n.matched[i])&&bs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return rt(e)?Sl(e,t):rt(t)?Sl(t,e):e?.valueOf()===t?.valueOf()}function Sl(e,t){return rt(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Au(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,s,r;for(s=0;s<a.length;s++)if(r=a[s],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(s).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let oi=(function(e){return e.pop="pop",e.push="push",e})({}),ja=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function bu(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),gu(e)}const ku=/^[^#]+#/;function vu(e,t){return e.replace(ku,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const _a=()=>({left:window.scrollX,top:window.scrollY});function yu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=xu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function El(e,t){return(history.state?history.state.position-t:-1)+e}const si=new Map;function wu(e,t){si.set(e,t)}function Pu(e){const t=si.get(e);return si.delete(e),t}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function ks(e){return typeof e=="string"||typeof e=="symbol"}let _e=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const vs=Symbol("");_e.MATCHER_NOT_FOUND+"",_e.NAVIGATION_GUARD_REDIRECT+"",_e.NAVIGATION_ABORTED+"",_e.NAVIGATION_CANCELLED+"",_e.NAVIGATION_DUPLICATED+"";function mn(e,t){return de(new Error,{type:e,[vs]:!0},t)}function kt(e,t){return e instanceof Error&&vs in e&&(t==null||!!(e.type&t))}const _u=["params","query","hash"];function Du(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of _u)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Ru(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(ms," "),l=i.indexOf("="),s=Gn(l<0?i:i.slice(0,l)),r=l<0?null:Gn(i.slice(l+1));if(s in t){let c=t[s];rt(c)||(c=t[s]=[c]),c.push(r)}else t[s]=r}return t}function Il(e){let t="";for(let n in e){const a=e[n];if(n=cu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(rt(a)?a.map(i=>i&&li(i)):[a&&li(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Cu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=rt(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const Su=Symbol(""),Bl=Symbol(""),Da=Symbol(""),Ci=Symbol(""),ri=Symbol("");function vn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Gt(e,t,n,a,i,l=s=>s()){const s=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const p=m=>{m===!1?c(mn(_e.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):Mu(m)?c(mn(_e.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(s&&a.enterCallbacks[i]===s&&typeof m=="function"&&s.push(m),r())},u=l(()=>e.call(a&&a.instances[i],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(m=>c(m))})}function Ha(e,t,n,a,i=l=>l()){const l=[];for(const s of e)for(const r in s.components){let c=s.components[r];if(!(t!=="beforeRouteEnter"&&!s.instances[r]))if(ps(c)){const p=(c.__vccOpts||c)[t];p&&l.push(Gt(p,n,a,s,r,i))}else{let p=c();l.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${r}" at "${s.path}"`);const d=Xc(u)?u.default:u;s.mods[r]=u,s.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&Gt(m,n,a,s,r,i)()}))}}return l}function Eu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let s=0;s<l;s++){const r=t.matched[s];r&&(e.matched.find(p=>gn(p,r))?a.push(r):n.push(r));const c=e.matched[s];c&&(t.matched.find(p=>gn(p,c))||i.push(c))}return[n,a,i]}let Iu=()=>location.protocol+"//"+location.host;function xs(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let s=i.includes(e.slice(l))?e.slice(l).length:1,r=i.slice(s);return r[0]!=="/"&&(r="/"+r),Cl(r,"")}return Cl(n,e)+a+i}function Bu(e,t,n,a){let i=[],l=[],s=null;const r=({state:m})=>{const A=xs(e,location),k=n.value,h=t.value;let C=0;if(m){if(n.value=A,t.value=m,s&&s===k){s=null;return}C=h?m.position-h.position:0}else a(A);i.forEach(B=>{B(n.value,k,{delta:C,type:oi.pop,direction:C?C>0?ja.forward:ja.back:ja.unknown})})};function c(){s=n.value}function p(m){i.push(m);const A=()=>{const k=i.indexOf(m);k>-1&&i.splice(k,1)};return l.push(A),A}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(de({},m.state,{scroll:_a()}),"")}}function d(){for(const m of l)m();l=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Tl(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?_a():null}}function Tu(e){const{history:t,location:n}=window,a={value:xs(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,p,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Iu()+e+c;try{t[u?"replaceState":"pushState"](p,"",m),i.value=p}catch(A){console.error(A),n[u?"replace":"assign"](m)}}function s(c,p){l(c,de({},t.state,Tl(i.value.back,c,i.value.forward,!0),p,{position:i.value.position}),!0),a.value=c}function r(c,p){const u=de({},i.value,t.state,{forward:c,scroll:_a()});l(u.current,u,!0),l(c,de({},Tl(a.value,c,null),{position:u.position+1},p),!1),a.value=c}return{location:a,state:i,push:r,replace:s}}function Ku(e){e=bu(e);const t=Tu(e),n=Bu(e,t.state,t.location,t.replace);function a(l,s=!0){s||n.pauseListeners(),history.go(l)}const i=de({location:"",base:e,go:a,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Ou(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ku(e)}let Zt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ce=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ce||{});const Nu={type:Zt.Static,value:""},Gu=/[a-zA-Z0-9_]/;function Lu(e){if(!e)return[[]];if(e==="/")return[[Nu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(A){throw new Error(`ERR (${n})/"${p}": ${A}`)}let n=Ce.Static,a=n;const i=[];let l;function s(){l&&i.push(l),l=[]}let r=0,c,p="",u="";function d(){p&&(n===Ce.Static?l.push({type:Zt.Static,value:p}):n===Ce.Param||n===Ce.ParamRegExp||n===Ce.ParamRegExpEnd?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Zt.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==Ce.ParamRegExp){a=n,n=Ce.EscapeNext;continue}switch(n){case Ce.Static:c==="/"?(p&&d(),s()):c===":"?(d(),n=Ce.Param):m();break;case Ce.EscapeNext:m(),n=a;break;case Ce.Param:c==="("?n=Ce.ParamRegExp:Gu.test(c)?m():(d(),n=Ce.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case Ce.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=Ce.ParamRegExpEnd:u+=c;break;case Ce.ParamRegExpEnd:d(),n=Ce.Static,c!=="*"&&c!=="?"&&c!=="+"&&r--,u="";break;default:t("Unknown state");break}}return n===Ce.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),s(),i}const Kl="[^/]+?",Fu={sensitive:!1,strict:!1,start:!0,end:!0};var Ue=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ue||{});const Uu=/[.+*?^${}()[\]/\\]/g;function ju(e,t){const n=de({},Fu,t),a=[];let i=n.start?"^":"";const l=[];for(const p of e){const u=p.length?[]:[Ue.Root];n.strict&&!p.length&&(i+="/");for(let d=0;d<p.length;d++){const m=p[d];let A=Ue.Segment+(n.sensitive?Ue.BonusCaseSensitive:0);if(m.type===Zt.Static)d||(i+="/"),i+=m.value.replace(Uu,"\\$&"),A+=Ue.Static;else if(m.type===Zt.Param){const{value:k,repeatable:h,optional:C,regexp:B}=m;l.push({name:k,repeatable:h,optional:C});const M=B||Kl;if(M!==Kl){A+=Ue.BonusCustomRegExp;try{`${M}`}catch(x){throw new Error(`Invalid custom RegExp for param "${k}" (${M}): `+x.message)}}let P=h?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(P=C&&p.length<2?`(?:/${P})`:"/"+P),C&&(P+="?"),i+=P,A+=Ue.Dynamic,C&&(A+=Ue.BonusOptional),h&&(A+=Ue.BonusRepeatable),M===".*"&&(A+=Ue.BonusWildcard)}u.push(A)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=Ue.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function r(p){const u=p.match(s),d={};if(!u)return null;for(let m=1;m<u.length;m++){const A=u[m]||"",k=l[m-1];d[k.name]=A&&k.repeatable?A.split("/"):A}return d}function c(p){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const A of m)if(A.type===Zt.Static)u+=A.value;else if(A.type===Zt.Param){const{value:k,repeatable:h,optional:C}=A,B=k in p?p[k]:"";if(rt(B)&&!h)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const M=rt(B)?B.join("/"):B;if(!M)if(C)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);u+=M}}return u||"/"}return{re:s,score:a,keys:l,parse:r,stringify:c}}function Hu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ue.Static+Ue.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ue.Static+Ue.Segment?1:-1:0}function ys(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=Hu(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(Ol(a))return 1;if(Ol(i))return-1}return i.length-a.length}function Ol(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wu={strict:!1,end:!0,sensitive:!1};function Ju(e,t,n){const a=ju(Lu(e.path),n),i=de(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Qu(e,t){const n=[],a=new Map;t=Rl(Wu,t);function i(d){return a.get(d)}function l(d,m,A){const k=!A,h=Gl(d);h.aliasOf=A&&A.record;const C=Rl(t,d),B=[h];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of x)B.push(Gl(de({},h,{components:A?A.record.components:h.components,path:w,aliasOf:A?A.record:h})))}let M,P;for(const x of B){const{path:w}=x;if(m&&w[0]!=="/"){const Z=m.record.path,q=Z[Z.length-1]==="/"?"":"/";x.path=m.record.path+(w&&q+w)}if(M=Ju(x,m,C),A?A.alias.push(M):(P=P||M,P!==M&&P.alias.push(M),k&&d.name&&!Ll(M)&&s(d.name)),ws(M)&&c(M),h.children){const Z=h.children;for(let q=0;q<Z.length;q++)l(Z[q],M,A&&A.children[q])}A=A||M}return P?()=>{s(P)}:Rn}function s(d){if(ks(d)){const m=a.get(d);m&&(a.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(s),m.alias.forEach(s))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function r(){return n}function c(d){const m=qu(d,n);n.splice(m,0,d),d.record.name&&!Ll(d)&&a.set(d.record.name,d)}function p(d,m){let A,k={},h,C;if("name"in d&&d.name){if(A=a.get(d.name),!A)throw mn(_e.MATCHER_NOT_FOUND,{location:d});C=A.record.name,k=de(Nl(m.params,A.keys.filter(P=>!P.optional).concat(A.parent?A.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),d.params&&Nl(d.params,A.keys.map(P=>P.name))),h=A.stringify(k)}else if(d.path!=null)h=d.path,A=n.find(P=>P.re.test(h)),A&&(k=A.parse(h),C=A.record.name);else{if(A=m.name?a.get(m.name):n.find(P=>P.re.test(m.path)),!A)throw mn(_e.MATCHER_NOT_FOUND,{location:d,currentLocation:m});C=A.record.name,k=de({},m.params,d.params),h=A.stringify(k)}const B=[];let M=A;for(;M;)B.unshift(M.record),M=M.parent;return{name:C,path:h,params:k,matched:B,meta:Vu(B)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:p,removeRoute:s,clearRoutes:u,getRoutes:r,getRecordMatcher:i}}function Nl(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Gl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Yu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Yu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Ll(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vu(e){return e.reduce((t,n)=>de(t,n.meta),{})}function qu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;ys(e,t[l])<0?a=l:n=l+1}const i=zu(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function zu(e){let t=e;for(;t=t.parent;)if(ws(t)&&ys(e,t)===0)return t}function ws({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Fl(e){const t=at(Da),n=at(Ci),a=ae(()=>{const c=Ne(e.to);return t.resolve(c)}),i=ae(()=>{const{matched:c}=a.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(gn.bind(null,u));if(m>-1)return m;const A=Ul(c[p-2]);return p>1&&Ul(u)===A&&d[d.length-1].path!==A?d.findIndex(gn.bind(null,c[p-2])):m}),l=ae(()=>i.value>-1&&td(n.params,a.value.params)),s=ae(()=>i.value>-1&&i.value===n.matched.length-1&&bs(n.params,a.value.params));function r(c={}){if(ed(c)){const p=t[Ne(e.replace)?"replace":"push"](Ne(e.to)).catch(Rn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:ae(()=>a.value.href),isActive:l,isExactActive:s,navigate:r}}function Zu(e){return e.length===1?e[0]:e}const Xu=Bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Fl,setup(e,{slots:t}){const n=hn(Fl(e)),{options:a}=at(Da),i=ae(()=>({[jl(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[jl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Zu(t.default(n));return e.custom?l:Di("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),$u=Xu;function ed(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function td(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!rt(i)||i.length!==a.length||a.some((l,s)=>l.valueOf()!==i[s].valueOf()))return!1}return!0}function Ul(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jl=(e,t,n)=>e??t??n,nd=Bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=at(ri),i=ae(()=>e.route||a.value),l=at(Bl,0),s=ae(()=>{let p=Ne(l);const{matched:u}=i.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),r=ae(()=>i.value.matched[s.value]);Xn(Bl,ae(()=>s.value+1)),Xn(Su,r),Xn(ri,i);const c=oe();return Mt(()=>[c.value,r.value,e.name],([p,u,d],[m,A,k])=>{u&&(u.instances[d]=p,A&&A!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=A.leaveGuards),u.updateGuards.size||(u.updateGuards=A.updateGuards))),p&&u&&(!A||!gn(u,A)||!m)&&(u.enterCallbacks[d]||[]).forEach(h=>h(p))},{flush:"post"}),()=>{const p=i.value,u=e.name,d=r.value,m=d&&d.components[u];if(!m)return Hl(n.default,{Component:m,route:p});const A=d.props[u],k=A?A===!0?p.params:typeof A=="function"?A(p):A:null,C=Di(m,de({},k,t,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Hl(n.default,{Component:C,route:p})||C}}});function Hl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ad=nd;function id(e){const t=Qu(e.routes,e),n=e.parseQuery||Ru,a=e.stringifyQuery||Il,i=e.history,l=vn(),s=vn(),r=vn(),c=ir(It);let p=It;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,R=>""+R),d=Fa.bind(null,du),m=Fa.bind(null,Gn);function A(R,H){let U,Q;return ks(R)?(U=t.getRecordMatcher(R),Q=H):Q=R,t.addRoute(Q,U)}function k(R){const H=t.getRecordMatcher(R);H&&t.removeRoute(H)}function h(){return t.getRoutes().map(R=>R.record)}function C(R){return!!t.getRecordMatcher(R)}function B(R,H){if(H=de({},H||c.value),typeof R=="string"){const b=Ua(n,R,H.path),_=t.resolve({path:b.path},H),E=i.createHref(b.fullPath);return de(b,_,{params:m(_.params),hash:Gn(b.hash),redirectedFrom:void 0,href:E})}let U;if(R.path!=null)U=de({},R,{path:Ua(n,R.path,H.path).path});else{const b=de({},R.params);for(const _ in b)b[_]==null&&delete b[_];U=de({},R,{params:d(b)}),H.params=d(H.params)}const Q=t.resolve(U,H),se=R.hash||"";Q.params=u(m(Q.params));const g=mu(a,de({},R,{hash:ru(se),path:Q.path})),f=i.createHref(g);return de({fullPath:g,hash:se,query:a===Il?Cu(R.query):R.query||{}},Q,{redirectedFrom:void 0,href:f})}function M(R){return typeof R=="string"?Ua(n,R,c.value.path):de({},R)}function P(R,H){if(p!==R)return mn(_e.NAVIGATION_CANCELLED,{from:H,to:R})}function x(R){return q(R)}function w(R){return x(de(M(R),{replace:!0}))}function Z(R,H){const U=R.matched[R.matched.length-1];if(U&&U.redirect){const{redirect:Q}=U;let se=typeof Q=="function"?Q(R,H):Q;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=M(se):{path:se},se.params={}),de({query:R.query,hash:R.hash,params:se.path!=null?{}:R.params},se)}}function q(R,H){const U=p=B(R),Q=c.value,se=R.state,g=R.force,f=R.replace===!0,b=Z(U,Q);if(b)return q(de(M(b),{state:typeof b=="object"?de({},se,b.state):se,force:g,replace:f}),H||U);const _=U;_.redirectedFrom=H;let E;return!g&&fu(a,Q,U)&&(E=mn(_e.NAVIGATION_DUPLICATED,{to:_,from:Q}),W(Q,Q,!0,!1)),(E?Promise.resolve(E):te(_,Q)).catch(D=>kt(D)?kt(D,_e.NAVIGATION_GUARD_REDIRECT)?D:fe(D):v(D,_,Q)).then(D=>{if(D){if(kt(D,_e.NAVIGATION_GUARD_REDIRECT))return q(de({replace:f},M(D.to),{state:typeof D.to=="object"?de({},se,D.to.state):se,force:g}),H||_)}else D=L(_,Q,!0,f,se);return ne(_,Q,D),D})}function ye(R,H){const U=P(R,H);return U?Promise.reject(U):Promise.resolve()}function J(R){const H=Ie.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(R):R()}function te(R,H){let U;const[Q,se,g]=Eu(R,H);U=Ha(Q.reverse(),"beforeRouteLeave",R,H);for(const b of Q)b.leaveGuards.forEach(_=>{U.push(Gt(_,R,H))});const f=ye.bind(null,R,H);return U.push(f),Ze(U).then(()=>{U=[];for(const b of l.list())U.push(Gt(b,R,H));return U.push(f),Ze(U)}).then(()=>{U=Ha(se,"beforeRouteUpdate",R,H);for(const b of se)b.updateGuards.forEach(_=>{U.push(Gt(_,R,H))});return U.push(f),Ze(U)}).then(()=>{U=[];for(const b of g)if(b.beforeEnter)if(rt(b.beforeEnter))for(const _ of b.beforeEnter)U.push(Gt(_,R,H));else U.push(Gt(b.beforeEnter,R,H));return U.push(f),Ze(U)}).then(()=>(R.matched.forEach(b=>b.enterCallbacks={}),U=Ha(g,"beforeRouteEnter",R,H,J),U.push(f),Ze(U))).then(()=>{U=[];for(const b of s.list())U.push(Gt(b,R,H));return U.push(f),Ze(U)}).catch(b=>kt(b,_e.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function ne(R,H,U){r.list().forEach(Q=>J(()=>Q(R,H,U)))}function L(R,H,U,Q,se){const g=P(R,H);if(g)return g;const f=H===It,b=ln?history.state:{};U&&(Q||f?i.replace(R.fullPath,de({scroll:f&&b&&b.scroll},se)):i.push(R.fullPath,se)),c.value=R,W(R,H,U,f),fe()}let ie;function Me(){ie||(ie=i.listen((R,H,U)=>{if(!ht.listening)return;const Q=B(R),se=Z(Q,ht.currentRoute.value);if(se){q(de(se,{replace:!0,force:!0}),Q).catch(Rn);return}p=Q;const g=c.value;ln&&wu(El(g.fullPath,U.delta),_a()),te(Q,g).catch(f=>kt(f,_e.NAVIGATION_ABORTED|_e.NAVIGATION_CANCELLED)?f:kt(f,_e.NAVIGATION_GUARD_REDIRECT)?(q(de(M(f.to),{force:!0}),Q).then(b=>{kt(b,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&!U.delta&&U.type===oi.pop&&i.go(-1,!1)}).catch(Rn),Promise.reject()):(U.delta&&i.go(-U.delta,!1),v(f,Q,g))).then(f=>{f=f||L(Q,g,!1),f&&(U.delta&&!kt(f,_e.NAVIGATION_CANCELLED)?i.go(-U.delta,!1):U.type===oi.pop&&kt(f,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ne(Q,g,f)}).catch(Rn)}))}let Le=vn(),we=vn(),O;function v(R,H,U){fe(R);const Q=we.list();return Q.length?Q.forEach(se=>se(R,H,U)):console.error(R),Promise.reject(R)}function le(){return O&&c.value!==It?Promise.resolve():new Promise((R,H)=>{Le.add([R,H])})}function fe(R){return O||(O=!R,Me(),Le.list().forEach(([H,U])=>R?U(R):H()),Le.reset()),R}function W(R,H,U,Q){const{scrollBehavior:se}=e;if(!ln||!se)return Promise.resolve();const g=!U&&Pu(El(R.fullPath,0))||(Q||!U)&&history.state&&history.state.scroll||null;return ka().then(()=>se(R,H,g)).then(f=>f&&yu(f)).catch(f=>v(f,R,H))}const Pe=R=>i.go(R);let ge;const Ie=new Set,ht={currentRoute:c,listening:!0,addRoute:A,removeRoute:k,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:h,resolve:B,options:e,push:x,replace:w,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:l.add,beforeResolve:s.add,afterEach:r.add,onError:we.add,isReady:le,install(R){R.component("RouterLink",$u),R.component("RouterView",ad),R.config.globalProperties.$router=ht,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>Ne(c)}),ln&&!ge&&c.value===It&&(ge=!0,x(i.location).catch(Q=>{}));const H={};for(const Q in It)Object.defineProperty(H,Q,{get:()=>c.value[Q],enumerable:!0});R.provide(Da,ht),R.provide(Ci,Ao(H)),R.provide(ri,c);const U=R.unmount;Ie.add(R),R.unmount=function(){Ie.delete(R),Ie.size<1&&(p=It,ie&&ie(),ie=null,c.value=It,ge=!1,O=!1),U()}}};function Ze(R){return R.reduce((H,U)=>H.then(()=>J(U)),Promise.resolve())}return ht}function Jn(){return at(Da)}function Ra(e){return at(Ci)}const Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},ld={class:"absolute inset-0 pointer-events-none z-0"},od={class:"fixed top-4 md:top-2 left-1/2 -translate-x-1/2 z-[100] w-[98%] max-w-15xl"},sd={class:"flex-1 flex justify-start items-center"},rd={class:"hidden lg:flex flex-col leading-tight"},cd={class:"text-[24px] md:text-[36px] font-[1000] uppercase tracking-tighter"},ud={class:"flex-shrink-0 flex justify-center items-center px-2"},dd={class:"relative flex bg-slate-200/50 dark:bg-white/10 p-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-xl backdrop-blur-md"},pd={class:"flex-1 flex justify-end pr-4 md:pr-6"},gd={class:"text-base md:text-2xl"},md={class:"max-w-7xl mx-auto pt-32 md:pt-48 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},fd={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=Ra(),n=Jn(),a=oe(null),i=oe({}),l=oe({left:"0px",width:"0px",opacity:0}),s=()=>n.push("/"),r=Array.from({length:80},(d,m)=>({id:m,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),c=Array.from({length:40},(d,m)=>({id:m,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),p=(d,m)=>{d&&(i.value[m]=d.$el||d)},u=async()=>{await ka();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 6px 20px -3px rgba(245, 158, 11, 0.7)":"0 10px 25px -5px rgba(139, 92, 246, 0.7)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return tn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),Mt(()=>t.path,u),(d,m)=>{const A=sa("router-link");return S(),I("div",{class:y(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[o("div",ld,[(S(!0),I(X,null,ue(Ne(c),k=>(S(),I("div",{key:"dust-"+k.id,class:y(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:Pt({width:k.size,height:k.size,top:k.top,left:k.left,animationDuration:k.duration,animationDelay:k.delay})},null,6))),128)),(S(!0),I(X,null,ue(Ne(r),k=>(S(),I("div",{key:"star-"+k.id,class:y(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:Pt({width:k.size,height:k.size,top:k.top,left:k.left,animationDelay:k.delay})},null,6))),128))]),o("nav",od,[o("div",{class:y(["backdrop-blur-3xl border flex items-center rounded-full transition-all duration-700 shadow-2xl p-2 md:p-3",e.isDark?"bg-black/50 border-white/10 shadow-indigo-500/10":"bg-white/80 border-white/50 shadow-blue-500/5"])},[o("div",sd,[o("div",{onClick:s,class:"flex items-center cursor-pointer group select-none pl-4 pr-2 active:scale-95 transition-transform gap-4"},[o("div",{class:y(["w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-full border-[3px] transition-all duration-300 shadow-2xl shrink-0",e.isDark?"border-white/30 shadow-indigo-500/20":"border-slate-400 shadow-slate-300"])},[...m[1]||(m[1]=[o("img",{src:Ma,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),o("div",rd,[o("span",cd,[o("span",{class:y(e.isDark?"text-white":"text-slate-900")},"TIMI ",2),m[2]||(m[2]=o("span",{class:"ml-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-indigo-600"},"DB",-1))]),m[3]||(m[3]=o("span",{class:"text-[7px] md:text-[8px] font-black uppercase opacity-60 tracking-[0.3em] italic"},"Toram Online Tools",-1))])])]),o("div",ud,[o("div",dd,[o("div",{ref_key:"navContainer",ref:a,class:"flex items-center relative gap-1 md:gap-2"},[o("div",{class:"absolute h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:Pt(l.value)},null,4),xe(A,{ref:k=>p(k,"/"),to:"/",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:$e(()=>[...m[4]||(m[4]=[Qe("LIST BAG",-1)])]),_:1},512),xe(A,{ref:k=>p(k,"/mq"),to:"/mq",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:$e(()=>[...m[5]||(m[5]=[Qe("LIST MQ",-1)])]),_:1},512),xe(A,{ref:k=>p(k,"/mq-calc"),to:"/mq-calc",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:$e(()=>[...m[6]||(m[6]=[Qe("MQ-CALC",-1)])]),_:1},512),xe(A,{ref:k=>p(k,"/bs-calc"),to:"/bs-calc",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:$e(()=>[...m[7]||(m[7]=[Qe("BS-CALC",-1)])]),_:1},512),xe(A,{ref:k=>p(k,"/xtall"),to:"/xtall",class:"nav-link text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-3 font-black","active-class":"active-link"},{default:$e(()=>[...m[8]||(m[8]=[Qe("XTALL",-1)])]),_:1},512)],512)])]),o("div",pd,[o("button",{onClick:m[0]||(m[0]=k=>d.$emit("toggleDark")),class:y(["w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 active:scale-75 shadow-xl",e.isDark?"bg-slate-900 border-white/20 text-orange-400":"bg-white border-slate-300 text-indigo-600"])},[o("span",gd,K(e.isDark?"🌙":"☀️"),1)],2)])],2)]),o("main",md,[Ir(d.$slots,"default",{},void 0)])],2)}}},hd=Wt(fd,[["__scopeId","data-v-55db152f"]]),Ad={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},bd={__name:"App",setup(e){const t=oe(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return tn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=sa("router-view");return S(),I("div",Ad,[xe(hd,{isDark:t.value,onToggleDark:n},{default:$e(()=>[xe(l,null,{default:$e(({Component:s})=>[xe(us,{name:"slide-page",mode:"out-in"},{default:$e(()=>[(S(),ua(Er(s),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},kd="data:image/png;base64,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",vd="data:image/png;base64,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",xd="/toram-vue/assets/kayu-BpPWdKON.png",yd="/toram-vue/assets/logam-DD-GHzrB.png",wd="data:image/png;base64,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",Pd="/toram-vue/assets/obat-BgQf6Xsw.png",Md="data:image/png;base64,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",_d="/toram-vue/images/Bag-Toram.png",zn=[{id:1,slot:"50 ➔ 51",nama_item_en:"Colon Skin",nama_item_id:"Kulit Colon",jumlah:"x1",spina:0,monster_en:"Colon",monster_id:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Land Under Development",lokasi_id:"Tanah Pembangunan"},{id:2,slot:"51 ➔ 52",nama_item_en:"Gorgeous Fur",nama_item_id:"Kulit Berkualitas",jumlah:"x1",spina:0,monster_en:"Lavarca",monster_id:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Rakau Plains / Ruined Temple Town",lokasi_id:"Dataran Rakau / Kota Kuil Runtuh"},{id:3,slot:"52 ➔ 53",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:1e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:4,slot:"53 ➔ 54",nama_item_en:"Minotaur Skin",nama_item_id:"Kulit Minotaur",jumlah:"x1",spina:0,monster_en:"Minotaur",monster_id:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Ruined Temple: Forbidden Hall",lokasi_id:"Kuil Runtuh: Aula Terlarang"},{id:5,slot:"53 ➔ 54",nama_item_en:"Orange Crystal Fragment",nama_item_id:"Pecahan Kristal Jingga",jumlah:"x1",spina:0,monster_en:"Cobre",monster_id:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Icule Lake",lokasi_id:"Danau Icule"},{id:6,slot:"54 ➔ 55",nama_item_en:"Forest Wolf Skin",nama_item_id:"Kulit Anjing Hutan",jumlah:"x1",spina:0,monster_en:"Forest Wolf",monster_id:"Serigala Hutan",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Marbaro Forest: Deepest Part",lokasi_id:"Hutan Marbaro: Bagian Dalam"},{id:7,slot:"54 ➔ 55",nama_item_en:"Goblin Medal",nama_item_id:"Lencana Goblin",jumlah:"x1",spina:0,monster_en:"Boss Goblin",monster_id:"Bos Goblin",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Ribisco Cave: Deepest Part",lokasi_id:"Gua Ribisco: Bagian Dalam"},{id:8,slot:"55 ➔ 56",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:2e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:9,slot:"56 ➔ 57",nama_item_en:"Mochelo Fur",nama_item_id:"Bulu Mochelo",jumlah:"x1",spina:0,monster_en:"Mochelo",monster_id:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:10,slot:"56 ➔ 57",nama_item_en:"Linen Cloth",nama_item_id:"Kain Linen",jumlah:"x10",spina:0,monster_en:"Crow Killer",monster_id:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Douce Hamlet",lokasi_id:"Dusun Douce"},{id:11,slot:"57 ➔ 58",nama_item_en:"Green Dragon Fur",nama_item_id:"Bulu Naga Giok",jumlah:"x1",spina:0,monster_en:"Forestia",monster_id:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Land of Chaos",lokasi_id:"Tanah Kaos"},{id:12,slot:"57 ➔ 58",nama_item_en:"High Quality Horn",nama_item_id:"Tanduk Berkualitas",jumlah:"x10",spina:0,monster_en:"Billy",monster_id:"Billy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Yorl Highlands",lokasi_id:"Tanah Tinggi Yorl"},{id:13,slot:"58 ➔ 59",nama_item_en:"Boss Roga Belt",nama_item_id:"Sabuk Bos Roga",jumlah:"x1",spina:0,monster_en:"Boss Roga",monster_id:"Bos Roga",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:14,slot:"58 ➔ 59",nama_item_en:"Broadcloth",nama_item_id:"Kain Beludu",jumlah:"x10",spina:0,monster_en:"Orc / Orc Warrior",monster_id:"Orc / Orc Warrior",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Saham Crater / Saham Underground Cave",lokasi_id:"Kawah Saham / Gua Bawah Tanah Saham"},{id:15,slot:"59 ➔ 60",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:4e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:16,slot:"60 ➔ 61",nama_item_en:"Sharp Bear Claw",nama_item_id:"Cakar Beruang",jumlah:"x2",spina:0,monster_en:"Violacoon",monster_id:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Darkanon Plain",lokasi_id:"Padang Darkanon"},{id:17,slot:"60 ➔ 61",nama_item_en:"Sheeting Fabric",nama_item_id:"Sheeting Fabric",jumlah:"x20",spina:0,monster_en:"Cassy",monster_id:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ancient Empress Tomb: Area 2/3",lokasi_id:"Makam Ratu Kuno: Area 2/3"},{id:18,slot:"61 ➔ 62",nama_item_en:"Heavy Tough Chain",nama_item_id:"Rantai Kukuh",jumlah:"x2",spina:0,monster_en:"Masked Warrior",monster_id:"Pendekar Bertopeng",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Fiery Volcano: Area 3",lokasi_id:"Lereng Merapi: Area 3"},{id:19,slot:"61 ➔ 62",nama_item_en:"Polyester Cloth",nama_item_id:"Kain Polister",jumlah:"x20",spina:0,monster_en:"Shining Gentleman / Wandering Shadow",monster_id:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Lost Town",lokasi_id:"Kota Hilang"},{id:20,slot:"62 ➔ 63",nama_item_en:"Grass Dragon Scale",nama_item_id:"Sisik Naga Sabana",jumlah:"x2",spina:0,monster_en:"Grass Dragon Yelb",monster_id:"Naga Padang Rumput Yelb",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Albatif Village",lokasi_id:"Desa Albatif"},{id:21,slot:"62 ➔ 63",nama_item_en:"Space Wolf Fur",nama_item_id:"Kulit Serigala Alien",jumlah:"x20",spina:0,monster_en:"Outer World Wolf",monster_id:"Serigala Dunia Luar",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Gate to Another World",lokasi_id:"Gerbang Dunia Lain"},{id:22,slot:"63 ➔ 64",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:8e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:23,slot:"64 ➔ 65",nama_item_en:"Torn Cloak",nama_item_id:"Jubah Sobek",jumlah:"x2",spina:0,monster_en:"Goovua",monster_id:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Akaku Desert: Hill",lokasi_id:"Gurun Akaku: Bukit"},{id:24,slot:"64 ➔ 65",nama_item_en:"Squirrel Fur",nama_item_id:"Kulit Tupai",jumlah:"x20",spina:0,monster_en:"Rodentail",monster_id:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Maia Deila",lokasi_id:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item_en:"Jade Raptor Horn",nama_item_id:"Tanduk Elang Zamrud",jumlah:"x2",spina:0,monster_en:"Jade Raptor",monster_id:"Jade Raptor",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Gravel Terrace",lokasi_id:"Teras Kerikil"},{id:26,slot:"65 ➔ 66",nama_item_en:"Goat Fur",nama_item_id:"Bulu Kambing",jumlah:"x20",spina:0,monster_en:"Koza",monster_id:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dunkel Valley",lokasi_id:"Jurang Dunkel"},{id:27,slot:"66 ➔ 67",nama_item_en:"Twilight Dragon Wing",nama_item_id:"Sayap Naga Senja",jumlah:"x2",spina:0,monster_en:"Twilight Dragon",monster_id:"Naga Senja",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Fort Solfini: Roof",lokasi_id:"Benteng Solfini: Atap"},{id:28,slot:"66 ➔ 67",nama_item_en:"Fleecy Fur",nama_item_id:"Bulu Halus",jumlah:"x20",spina:0,monster_en:"Rabby / Little Snow Bear",monster_id:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Polde Ice Valley",lokasi_id:"Lembah Es Polde"},{id:29,slot:"67 ➔ 68",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:16e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:30,slot:"68 ➔ 69",nama_item_en:"Chain of Purgatory",nama_item_id:"Rantai Penyucian",jumlah:"x2",spina:0,monster_en:"Cerberus",monster_id:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi_en:"Spring of Rebirth: Top",lokasi_id:"Mata Air Kelahiran: Puncak"},{id:31,slot:"68 ➔ 69",nama_item_en:"Wavering Cloth",nama_item_id:"Kain Goyah",jumlah:"x20",spina:0,monster_en:"Jewel Eye",monster_id:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Spring of Rebirth",lokasi_id:"Mata Air Kelahiran: Tengah/Atas"},{id:32,slot:"69 ➔ 70",nama_item_en:"Aranea Silk",nama_item_id:"Benang Aranea",jumlah:"x2",spina:0,monster_en:"Aranea",monster_id:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Garden of Sublimation",lokasi_id:"Taman Sublimasi: Pusat"},{id:33,slot:"69 ➔ 70",nama_item_en:"Small Spider Silk",nama_item_id:"Benang Laba-Laba Kecil",jumlah:"x20",spina:0,monster_en:"Aramia",monster_id:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Garden of Sublimation",lokasi_id:"Taman Sublimasi: Area 2/3"},{id:34,slot:"70 ➔ 71",nama_item_en:"Copied Goddess Robe",nama_item_id:"Kain Dewi Tiruan",jumlah:"x3",spina:0,monster_en:"Imitacia",monster_id:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Dark Castle: Grand Hall",lokasi_id:"Istana Gelap: Aula Besar"},{id:35,slot:"70 ➔ 71",nama_item_en:"Floating Cloth",nama_item_id:"Kain Apung",jumlah:"x10",spina:0,monster_en:"Flying Executioner",monster_id:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Cradle of Soldier",lokasi_id:"Buaian Prajurit"},{id:36,slot:"70 ➔ 71",nama_item_en:"Soft Paw",nama_item_id:"Tapak Lembut",jumlah:"x20",spina:0,monster_en:"Bunny Summoner / Lapin",monster_id:"Bunny Summoner / Lapin",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Trace of Dark River",lokasi_id:"Sungai Kegelapan"},{id:37,slot:"71 ➔ 72",nama_item_en:"Evil Beast Mane",nama_item_id:"Surai Hewan Iblis",jumlah:"x3",spina:0,monster_en:"Memecoleous",monster_id:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Dark Castle: Area 2",lokasi_id:"Istana Gelap: Area 2"},{id:38,slot:"71 ➔ 72",nama_item_en:"Hard Paw Pad",nama_item_id:"Bantalan Tapak Keras",jumlah:"x10",spina:0,monster_en:"Manticore",monster_id:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Dark Castle",lokasi_id:"Istana Gelap: Area 1/2/3"},{id:39,slot:"71 ➔ 72",nama_item_en:"Dark Shadow Feather",nama_item_id:"Bulu Bayangan Hitam",jumlah:"x20",spina:0,monster_en:"Shadow Fly",monster_id:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dark Castle",lokasi_id:"Istana Gelap: Area 1/2/3"},{id:40,slot:"72 ➔ 73",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:32e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:41,slot:"73 ➔ 74",nama_item_en:"Tapir Fur",nama_item_id:"Bulu Tapir",jumlah:"x3",spina:0,monster_en:"Tapir",monster_id:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Blazing Graben: Surface",lokasi_id:"Graben Membara: Permukaan"},{id:42,slot:"73 ➔ 74",nama_item_en:"Stiff Fur",nama_item_id:"Bulu Kaku",jumlah:"x10",spina:0,monster_en:"Wooly",monster_id:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Blazing Graben: Surface",lokasi_id:"Graben Membara: Permukaan"},{id:43,slot:"73 ➔ 74",nama_item_en:"Anti-Rust Oil",nama_item_id:"Minyak Anti-Karat",jumlah:"x20",spina:0,monster_en:"Ornis Demi Machina",monster_id:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Artillery Defense Line",lokasi_id:"Garis Pertahanan Artileri Otomatis"},{id:44,slot:"74 ➔ 75",nama_item_en:"Ancient Fabric",nama_item_id:"Kain Kuno",jumlah:"x3",spina:0,monster_en:"Proto Leon",monster_id:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Singolare Ruins: 3rd Floor",lokasi_id:"Reruntuhan Singolare: Lantai 3"},{id:45,slot:"74 ➔ 75",nama_item_en:"Soft Tree Bark",nama_item_id:"Kulit Pohon Lunak",jumlah:"x10",spina:0,monster_en:"Floral Bee",monster_id:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Site of Simscracker",lokasi_id:"Situs Simcracker"},{id:46,slot:"74 ➔ 75",nama_item_en:"Dirty Potum Hair",nama_item_id:"Rambut Potum Kotor",jumlah:"x20",spina:0,monster_en:"Slum Potum",monster_id:"Potum Kumuh",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Klaspe Slum",lokasi_id:"Klaspe Kumuh"},{id:47,slot:"75 ➔ 76",nama_item_en:"Crimson Huge Bone",nama_item_id:"Tulang Raksasa Merah",jumlah:"x3",spina:0,monster_en:"Dusk Machina",monster_id:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Small Demi Machina Factory: Area 2",lokasi_id:"Pabrik Demi Machina Kecil: Area 2"},{id:48,slot:"75 ➔ 76",nama_item_en:"Torn Black Coat",nama_item_id:"Mantel Hitam Sobek",jumlah:"x10",spina:0,monster_en:"Rugos Demi Machina",monster_id:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Small Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Kecil"},{id:49,slot:"75 ➔ 76",nama_item_en:"Torn Chain",nama_item_id:"Rantai Putus",jumlah:"x20",spina:0,monster_en:"Torture Machina",monster_id:"Machina Penyiksa",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Small Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Kecil"},{id:50,slot:"76 ➔ 77",nama_item_en:"Chimera Scale",nama_item_id:"Sisik Chimera",jumlah:"x3",spina:0,monster_en:"Mozto Machina",monster_id:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Large Demi Machina Factory: Depths",lokasi_id:"Pabrik Demi Machina Besar: Bagian Terdalam"},{id:51,slot:"76 ➔ 77",nama_item_en:"Mysterious Luminary",nama_item_id:"Benda Pendar Aneh",jumlah:"x10",spina:0,monster_en:"Horn Machina",monster_id:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi_en:"Large Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Besar"},{id:52,slot:"76 ➔ 77",nama_item_en:"Tough Tentacle",nama_item_id:"Tentakel Tangguh",jumlah:"x20",spina:0,monster_en:"Ledon / Odelon Machina",monster_id:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Large Demi Machina Factory",lokasi_id:"Pabrik Demi Machina Besar"},{id:53,slot:"77 ➔ 78",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:64e3,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:54,slot:"78 ➔ 79",nama_item_en:"Forest Spirit Robe",nama_item_id:"Jubah Roh Hutan",jumlah:"x3",spina:0,monster_en:"Lalvada",monster_id:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Monster Forest: Deep Part",lokasi_id:"Hutan Monster: Bagian Dalam"},{id:55,slot:"78 ➔ 79",nama_item_en:"Plant Fang",nama_item_id:"Taring Tanaman",jumlah:"x10",spina:0,monster_en:"Nepenthe",monster_id:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi_en:"Monster Forest",lokasi_id:"Hutan Monster"},{id:56,slot:"78 ➔ 79",nama_item_en:"Felt Fabric",nama_item_id:"Kain Felt",jumlah:"x20",spina:0,monster_en:"Puppet Dragon",monster_id:"Naga Boneka",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Lufenas Mansion",lokasi_id:"Mansion Lufenas"},{id:57,slot:"79 ➔ 80",nama_item_en:"Lyark Alloy",nama_item_id:"Aloi Lyark",jumlah:"x3",spina:0,monster_en:"Gwaimol",monster_id:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi_en:"Cuervo Jail: Roof",lokasi_id:"Penjara Cuervo: Atap"},{id:58,slot:"79 ➔ 80",nama_item_en:"Torn Officer Clothes",nama_item_id:"Baju Penjaga Robek",jumlah:"x10",spina:0,monster_en:"Lyark Jailer",monster_id:"Sipir Lyark",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Cuervo Jail",lokasi_id:"Penjara Cuervo"},{id:59,slot:"79 ➔ 80",nama_item_en:"Ox Fabric",nama_item_id:"Kain Lembu",jumlah:"x20",spina:0,monster_en:"Lyark Specialist / Master Specialist",monster_id:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Brahe Laboratory",lokasi_id:"Laboratorium Brahe"},{id:60,slot:"80 ➔ 81",nama_item_en:"Light Emitting Cloth",nama_item_id:"Kain Bercahaya",jumlah:"x4",spina:0,monster_en:"Seraph Machina",monster_id:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Buried Tower: Inside",lokasi_id:"Menara Penembus Bumi: Sisi Dalam"},{id:61,slot:"80 ➔ 81",nama_item_en:"Damaged Artificial Leather",nama_item_id:"Kulit Sintetis Rusak",jumlah:"x20",spina:0,monster_en:"Lyark Brawler",monster_id:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Suburb of Droma Square",lokasi_id:"Sekitar Alun-alun Droma"},{id:62,slot:"80 ➔ 81",nama_item_en:"Executioner Loincloth",nama_item_id:"Cawat Pengeksekusi",jumlah:"x20",spina:0,monster_en:"Volo",monster_id:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Suburb of Droma Square",lokasi_id:"Sekitar Alun-alun Droma"},{id:63,slot:"81 ➔ 82",nama_item_en:"Lil Empress Cloth Piece",nama_item_id:"Potongan Baju Kaisar Kecil",jumlah:"x4",spina:0,monster_en:"Venena Coenubia",monster_id:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Ultimea Palace: Throne",lokasi_id:"Istana Ultimea: Takhta"},{id:64,slot:"81 ➔ 82",nama_item_en:"Hard Armor Bit",nama_item_id:"Pecahan Zirah Keras",jumlah:"x20",spina:0,monster_en:"High Tigris",monster_id:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Ultimea Palace",lokasi_id:"Istana Ultimea"},{id:65,slot:"81 ➔ 82",nama_item_en:"Snake Skin",nama_item_id:"Kulit Ular",jumlah:"x20",spina:0,monster_en:"Pond Snake",monster_id:"Ular Kolam",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Copia Reservoirs",lokasi_id:"Reservoir Copia"},{id:66,slot:"82 ➔ 83",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:1e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:67,slot:"83 ➔ 84",nama_item_en:"Mom Fluck Skin",nama_item_id:"Kulit Mama Fluck",jumlah:"x4",spina:0,monster_en:"Mom Fluck",monster_id:"Mom Fluck",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Forgotten Cave",lokasi_id:"Gua Pelupa"},{id:68,slot:"83 ➔ 84",nama_item_en:"Colon Big Leaf",nama_item_id:"Daun Besar Colon",jumlah:"x20",spina:0,monster_en:"Leedle Colon",monster_id:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Rokoko Plains",lokasi_id:"Dataran Rakoko"},{id:69,slot:"83 ➔ 84",nama_item_en:"Vertical Stripe Fur",nama_item_id:"Bulu Garis Vertikal",jumlah:"x20",spina:0,monster_en:"Tehon",monster_id:"Rakun Tambun",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Curonne Forest",lokasi_id:"Hutan Currone"},{id:70,slot:"84 ➔ 85",nama_item_en:"Mardula Spiritual Cloth",nama_item_id:"Kain Rohani Mardula",jumlah:"x4",spina:0,monster_en:"Mardula",monster_id:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Hall of Blessings Gods",lokasi_id:"Serambi Dewa Berkah"},{id:71,slot:"84 ➔ 85",nama_item_en:"Mysterious Shiny Cloth",nama_item_id:"Kain Berkilau Misterius",jumlah:"x20",spina:0,monster_en:"Bubble Angel / Bubble Bogey",monster_id:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Shrine of the Gods",lokasi_id:"Kuil Para Dewa"},{id:72,slot:"84 ➔ 85",nama_item_en:"Grey Feather",nama_item_id:"Bulu Kelabu",jumlah:"x20",spina:0,monster_en:"Haliabubo",monster_id:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Ruins of Mt. Mithurna",lokasi_id:"Reruntuhan G. Mithurna"},{id:73,slot:"85 ➔ 86",nama_item_en:"Carbuncle Fur",nama_item_id:"Mantel Carbuncle",jumlah:"x4",spina:0,monster_en:"Carbuncle",monster_id:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi_en:"Hall of Construction Gods",lokasi_id:"Serambi Dewa Pembangunan"},{id:74,slot:"85 ➔ 86",nama_item_en:"Knit Fabric",nama_item_id:"Kain Rajut",jumlah:"x20",spina:0,monster_en:"Bubble Angel",monster_id:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Heresy Corridor",lokasi_id:"Koridor Heresi"},{id:75,slot:"85 ➔ 86",nama_item_en:"Bag Bear Tail",nama_item_id:"Ekor Beruang Berkantong",jumlah:"x20",spina:0,monster_en:"Oddy",monster_id:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Shrine of the Gods",lokasi_id:"Kuil Para Dewa"},{id:76,slot:"86 ➔ 87",nama_item_en:"King Piton Fur",nama_item_id:"Bulu Raja Piton",jumlah:"x4",spina:0,monster_en:"King Piton",monster_id:"King Piton",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Elf Mountains: Shrine",lokasi_id:"Pegunungan Elf: Kuil"},{id:77,slot:"86 ➔ 87",nama_item_en:"Thick White Fur",nama_item_id:"Bulu Putih Lebat",jumlah:"x20",spina:0,monster_en:"Billy",monster_id:"Billy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Garden of Ice & Snow",lokasi_id:"Taman Es & Salju"},{id:78,slot:"86 ➔ 87",nama_item_en:"Stiff Grey Fur",nama_item_id:"Bulu Abu Kaku",jumlah:"x20",spina:0,monster_en:"Silveria",monster_id:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Elf Mountains",lokasi_id:"Pegunungan Elf"},{id:79,slot:"87 ➔ 88",nama_item_en:"Ancient Ingot",nama_item_id:"Ingot Kuno",jumlah:"x4",spina:0,monster_en:"Thug Golem",monster_id:"Golem Preman",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi_en:"Dark Dragon Shrine: Middle",lokasi_id:"Kuil Naga Kegelapan: Tengah"},{id:80,slot:"87 ➔ 88",nama_item_en:"Ice Wolf Fang",nama_item_id:"Taring Serigala Es",jumlah:"x20",spina:0,monster_en:"Courloup",monster_id:"Serigala Tanduk",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Elf Mountains",lokasi_id:"Pegunungan Elf"},{id:81,slot:"87 ➔ 88",nama_item_en:"Dusky Fabric",nama_item_id:"Kain Gelap",jumlah:"x20",spina:0,monster_en:"Soul Reaper",monster_id:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Dark Dragon Shrine",lokasi_id:"Kuil Naga Kegelapan"},{id:82,slot:"88 ➔ 89",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:2e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:83,slot:"89 ➔ 90",nama_item_en:"Tuscog Fang",nama_item_id:"Taring Tuscog",jumlah:"x4",spina:0,monster_en:"Tuscog",monster_id:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Eryldan Street",lokasi_id:"Jalan Eryldan"},{id:84,slot:"89 ➔ 90",nama_item_en:"Larva Silk",nama_item_id:"Sutra Ulat",jumlah:"x20",spina:0,monster_en:"Moss Mole",monster_id:"Tikus Lumut",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Forest of Ein",lokasi_id:"Hutan Ein"},{id:85,slot:"89 ➔ 90",nama_item_en:"Werewolf Fur",nama_item_id:"Taring Manusia Serigala",jumlah:"x20",spina:0,monster_en:"Wolfre",monster_id:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Eryldan Street",lokasi_id:"Jalan Eryldan"},{id:86,slot:"90 ➔ 91",nama_item_en:"Kuzto Splinter",nama_item_id:"Serpihan Kayu Kuzto",jumlah:"x4",spina:0,monster_en:"Kuzto",monster_id:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi_en:"Labilans Sector: Square",lokasi_id:"Distrik Labilans: Alun-alun"},{id:87,slot:"90 ➔ 91",nama_item_en:"Stoat Fur",nama_item_id:"Bulu Cerpelai",jumlah:"x20",spina:0,monster_en:"Sentreast",monster_id:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Fabriska Sector",lokasi_id:"Distrik Fabriska"},{id:88,slot:"90 ➔ 91",nama_item_en:"Mysterious Waist Sash",nama_item_id:"Sabuk Pinggang Misterius",jumlah:"x30",spina:0,monster_en:"Moculus",monster_id:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Fractum Sector",lokasi_id:"Distrik Fractum"},{id:89,slot:"91 ➔ 92",nama_item_en:"Crystal Pouch",nama_item_id:"Kantong Kristal",jumlah:"x5",spina:0,monster_en:"Canemofish",monster_id:"Nempirania",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi_en:"Recetacula Sector",lokasi_id:"Distrik Recetacula"},{id:90,slot:"91 ➔ 92",nama_item_en:"Cushy Tail",nama_item_id:"Ekor Lembu",jumlah:"x20",spina:0,monster_en:"Alpoca",monster_id:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi_en:"Labilans Sector",lokasi_id:"Distrik Labilans"},{id:91,slot:"91 ➔ 92",nama_item_en:"Sturdy Papula",nama_item_id:"Papula Kuat",jumlah:"x30",spina:0,monster_en:"Toxinaria",monster_id:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Recetacula Sector",lokasi_id:"Distrik Recetacula"},{id:92,slot:"92 ➔ 93",nama_item_en:"Repthon Wings",nama_item_id:"Sayap Repthon",jumlah:"x5",spina:0,monster_en:"Repthon",monster_id:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Deltzon Research Zone: Deepest Area",lokasi_id:"Zona Riset Deltzon: Area Terdalam"},{id:93,slot:"92 ➔ 93",nama_item_en:"Legume Button",nama_item_id:"Kancing Polong",jumlah:"x20",spina:0,monster_en:"Marquis Colon",monster_id:"Colon Marquis",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Old Lufenas Mansion Ruins",lokasi_id:"Reruntuhan Mansion Lufenas Tua"},{id:94,slot:"92 ➔ 93",nama_item_en:"Frock Coat Scrap",nama_item_id:"Kain Perca Jas Panjang",jumlah:"x30",spina:0,monster_en:"Swirly Whirly",monster_id:"Gulingkar",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Deltzon Research Zone",lokasi_id:"Zona Riset Deltzon"},{id:95,slot:"93 ➔ 94",nama_item_en:"Empress Ogre Hair",nama_item_id:"Rambut Kaisar Siluman",jumlah:"x5",spina:0,monster_en:"Venena Metacoenubia",monster_id:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Neo Plastida",lokasi_id:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item_en:"Torn Red Cloth",nama_item_id:"Kain Merah Sobek",jumlah:"x20",spina:0,monster_en:"Sand Bandits Potum",monster_id:"Potum Bandit Gurun",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Geist Desert",lokasi_id:"Gurun Pasir Geist"},{id:97,slot:"93 ➔ 94",nama_item_en:"Corroded Leather",nama_item_id:"Kulit Karatan",jumlah:"x30",spina:0,monster_en:"Cabrigo",monster_id:"Jasman",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ruins of Urban Elban",lokasi_id:"Reruntuhan Elban Urban"},{id:98,slot:"94 ➔ 95",nama_item_en:"Spina",nama_item_id:"Spina",jumlah:"-",spina:3e5,monster_en:"-",monster_id:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi_en:"General Store",lokasi_id:"Toko Kelontong"},{id:99,slot:"95 ➔ 96",nama_item_en:"Pisteus Bone",nama_item_id:"Tulang Pisteus",jumlah:"x5",spina:0,monster_en:"Pisteus",monster_id:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Ducia Coast: Depths",lokasi_id:"Pesisir Ducia: Area Terdalam"},{id:100,slot:"95 ➔ 96",nama_item_en:"Phantom Cloth",nama_item_id:"Kain Phantom",jumlah:"x20",spina:0,monster_en:"Flooray",monster_id:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Lunagent Cliff Base",lokasi_id:"Dasar Tebing Lunagent"},{id:101,slot:"95 ➔ 96",nama_item_en:"Sea Otter Fur",nama_item_id:"Bulu Berang-Berang Laut",jumlah:"x30",spina:0,monster_en:"Lutris",monster_id:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Ducia Coast",lokasi_id:"Pesisir Ducia"},{id:102,slot:"96 ➔ 97",nama_item_en:"Arachnidemon Wing",nama_item_id:"Sayap Arachnidemon",jumlah:"x5",spina:0,monster_en:"Arachnidemon",monster_id:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi_en:"Arche Valley: Depths",lokasi_id:"Lembah Arche: Area Terdalam"},{id:103,slot:"96 ➔ 97",nama_item_en:"Metal Shackles",nama_item_id:"Belenggu Logam",jumlah:"x20",spina:0,monster_en:"Bessy / Espectro",monster_id:"Bessy / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi_en:"Arche Valley",lokasi_id:"Lembah Arche"},{id:104,slot:"96 ➔ 97",nama_item_en:"Weird Snake Skin",nama_item_id:"Kulit Ular Aneh",jumlah:"x30",spina:0,monster_en:"Coofer",monster_id:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Rokoko City Ruins / Nezim Wetlands",lokasi_id:"Reruntuhan Kota Rokoko / Lahan Basah Nezim"},{id:105,slot:"97 ➔ 98",nama_item_en:"Slimy Hide",nama_item_id:"Jangat Berlendir",jumlah:"x5",spina:0,monster_en:"Lord of Nezim",monster_id:"Datuk Nezim",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi_en:"Nezim Wetlands",lokasi_id:"Lahan Basah Nezim"},{id:106,slot:"97 ➔ 98",nama_item_en:"Enty Cloth",nama_item_id:"Kain Enty",jumlah:"x20",spina:0,monster_en:"Enty",monster_id:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:107,slot:"97 ➔ 98",nama_item_en:"Sturdy Core",nama_item_id:"Poros Kokoh",jumlah:"x30",spina:0,monster_en:"Eerie Scarecrow / Grim Reaper Scarecrow",monster_id:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:108,slot:"98 ➔ 99",nama_item_en:"Inferno Curse Cloth Scrap",nama_item_id:"Perca Gendam Geni",jumlah:"x5",spina:0,monster_en:"Hexter",monster_id:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi_en:"Witch's Woods Depths",lokasi_id:"Rimba Penyihir: Area Terdalam"},{id:109,slot:"98 ➔ 99",nama_item_en:"Kappa's Plate",nama_item_id:"Piring Kappa",jumlah:"x20",spina:0,monster_en:"Kappadon",monster_id:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi_en:"Nezim Wetlands",lokasi_id:"Lahan Basah Nezim"},{id:110,slot:"98 ➔ 99",nama_item_en:"Crow Feather",nama_item_id:"Bulu Gagak",jumlah:"x30",spina:0,monster_en:"Eerie Scarecrow / Grim Reaper Scarecrow",monster_id:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi_en:"Witch's Woods",lokasi_id:"Rimba Penyihir"},{id:111,slot:"99 ➔ 100",nama_item_en:"Wriggling Latebra",nama_item_id:"Inti Latebra Menggeliat",jumlah:"x5",spina:0,monster_en:"Trocostida",monster_id:"Trocostida",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi_en:"Nov Diela: Area 1",lokasi_id:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item_en:"Viscous Liquid",nama_item_id:"Cairan Lekat",jumlah:"x20",spina:0,monster_en:"Juvestida",monster_id:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi_en:"Nov Diela",lokasi_id:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item_en:"Bizarre Skin",nama_item_id:"Kulit Pelik",jumlah:"x30",spina:0,monster_en:"Evil Eye / Demonic Eye",monster_id:"Mata Jahat / Mata Iblis",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi_en:"Morga Wasteland",lokasi_id:"Padang Morga"}],Dd="data:image/png;base64,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",Rd="/toram-vue/assets/en-CZmi2sa3.png",Cd={class:"max-w-9xl mx-auto flex justify-center md:justify-end mb-2 sticky top-0 z-50"},Sd={class:"flex flex-col items-center gap-1 pt-2"},Ed={class:"inline-flex p-1 rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl"},Id=["onClick"],Bd=["src"],Td={class:"max-w-7xl mx-auto space-y-3 md:space-y-6"},Kd={class:"relative z-10 text-center md:text-left"},Od={class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},Nd={class:"grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4"},Gd={class:"absolute -right-2 -bottom-2 text-4xl opacity-20 transform -rotate-12"},Ld={class:"text-[7px] md:text-[9px] font-black opacity-80 uppercase tracking-tighter"},Fd={class:"text-lg md:text-4xl font-black italic"},Ud={class:"grid grid-cols-1 md:grid-cols-3 gap-3"},jd={class:"text-[8px] font-black uppercase ml-3 mb-0.5 block text-indigo-500 tracking-widest"},Hd={class:"relative group"},Wd=["placeholder"],Jd={value:"All Class"},Qd=["value"],Yd={value:"All Slot"},Vd=["value"],qd={class:"absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none scale-75"},zd={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},Zd={key:1,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},Xd={key:2,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},$d={key:3,class:"absolute right-3.5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none opacity-60"},e0={class:"hidden lg:block overflow-x-auto no-scrollbar"},t0={class:"w-full border-collapse"},n0={class:"p-4 w-[25%] text-left"},a0={class:"flex items-center gap-3"},i0={class:"w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden shadow-inner"},l0=["src","alt"],o0={class:"font-black uppercase text-sm"},s0={class:"flex items-center gap-2"},r0={class:"text-[10px] font-bold uppercase opacity-80"},c0={class:"p-4"},u0={class:"flex flex-col"},d0={class:"font-black text-xs italic text-blue-600 uppercase tracking-tight"},p0={class:"lg:hidden divide-y-[2px] divide-slate-200/10"},g0={class:"flex justify-between items-center"},m0={class:"flex items-center gap-2"},f0={class:"text-[10px] font-black px-2 py-0.5 bg-blue-500 text-white rounded-md"},h0={class:"text-amber-600 font-black text-[10px] uppercase"},A0={class:"flex items-start gap-3"},b0={class:"w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg"},k0=["src","alt"],v0={class:"font-black uppercase text-base leading-tight tracking-tight"},x0={class:"text-[10px] font-bold text-blue-500 mt-1 uppercase"},y0={class:"flex flex-col justify-center border-r border-dashed border-slate-400/20 pr-2"},w0={class:"text-[9px] font-black text-lime-600 uppercase"},P0={class:"text-3xl font-black italic text-lime-600"},M0={class:"pl-2 flex flex-col justify-center"},_0={class:"text-[8px] font-black opacity-50 uppercase block mb-0.5"},D0={class:"text-[10px] font-bold uppercase leading-tight line-clamp-2"},R0={class:"flex flex-col gap-4 justify-center items-center pb-10"},C0={key:0,class:"flex flex-wrap justify-center items-center gap-1"},S0=["disabled"],E0=["onClick"],I0=["disabled"],B0={class:"relative z-10"},T0={__name:"ListBag",props:["isDark"],setup(e){const t=P=>{const w={Wood:"kayu.png",Cloth:"kain.png",Metal:"logam.png",Mana:"mana.png",Beast:"fauna.png",Medic:"obat.png",Stone:"logam.png",Spina:"spina.png",S:"spina.png"}[P]||"fauna.png";return new URL(Object.assign({"/src/assets/jenis-bahan-toram/fauna.png":kd,"/src/assets/jenis-bahan-toram/kain.png":vd,"/src/assets/jenis-bahan-toram/kayu.png":xd,"/src/assets/jenis-bahan-toram/logam.png":yd,"/src/assets/jenis-bahan-toram/mana.png":wd,"/src/assets/jenis-bahan-toram/obat.png":Pd,"/src/assets/jenis-bahan-toram/spina.png":Md})[`/src/assets/jenis-bahan-toram/${w}`],import.meta.url).href},n=oe("en"),a={id:{title:"DAFTAR TAS",subtitle:"EKSPANSI",searchLabel:"Cari Item",searchPlaceholder:"Cari nama, monster, atau lokasi...",catLabel:"Kategori",slotLabel:"Lompat ke Slot",allClass:"Semua Kelas",allSlot:"Semua Slot",exploreBtn:"Lihat Semua",collapseBtn:"Sembunyikan Data",stats:{all:"SEMUA ITEM",res:"HASIL",boss:"BOSS",slot:"SLOTS"},table:{slot:"Slot",name:"Nama Item",need:"Total Butuh",cost:"Biaya Spina",src:"Sumber",type:"Tipe",loc:"Lokasi"},mobile:{need:"Butuh",cost:"Biaya",drop:"Drop Dari:",map:"Peta:"}},en:{title:"BAG LIST",subtitle:"EXPANSION",searchLabel:"Search Item",searchPlaceholder:"Find items, monsters, or maps...",catLabel:"Category",slotLabel:"Jump to Slot",allClass:"All Class",allSlot:"All Slot",exploreBtn:"Explore All",collapseBtn:"Collapse to 10 Rows",stats:{all:"ALL ITEM",res:"RESULTS",boss:"BOSS",slot:"SLOTS"},table:{slot:"Slot",name:"Item Name",need:"Total Need",cost:"Spina Cost",src:"Source",type:"Type",loc:"Location"},mobile:{need:"Need",cost:"Cost",drop:"Drop From:",map:"Map:"}}},i=ae(()=>a[n.value]),l=oe(""),s=oe("All Class"),r=oe("All Slot"),c=oe(1),p=oe(10),u=()=>{p.value===10?p.value=m.value.length||10:p.value=10,c.value=1},d=P=>{if(!P||P==="-")return"-";let x=P.toString().replace(/x/gi,"").trim();return x==="0"||x===""?"-":x},m=ae(()=>zn.filter(x=>{const w=l.value.toLowerCase(),Z=x.kelas_mob||"",q=n.value==="id"?x.nama_item_id||x.nama_item_en:x.nama_item_en||x.nama_item_id,ye=n.value==="id"?x.lokasi_id||x.lokasi_en:x.lokasi_en||x.lokasi_id,J=n.value==="id"?x.monster_id||x.monster_en:x.monster_en||x.monster_id,te=!l.value||q?.toLowerCase().includes(w)||J?.toLowerCase().includes(w)||ye?.toLowerCase().includes(w);let ne=!0;s.value!=="All Class"&&(s.value==="Mob"?ne=Z==="Mob"||Z==="Miniboss/Mob":s.value==="Miniboss"?ne=Z==="Miniboss"||Z==="Miniboss/Mob":ne=Z===s.value);const L=r.value==="All Slot"||String(x.slot).includes(String(r.value));return te&&ne&&L}).sort((x,w)=>{const Z=parseInt(String(x.slot).match(/\d+/))||0,q=parseInt(String(w.slot).match(/\d+/))||0;return Z-q}));Mt([l,s,r,n],()=>{c.value=1});const A=ae(()=>Math.ceil(m.value.length/p.value)||1),k=ae(()=>{const P=A.value,x=c.value;return P<=5?Array.from({length:P},(w,Z)=>Z+1):x<=3?[1,2,3,"...",P]:x>=P-2?[1,"...",P-2,P-1,P]:[1,"...",x,"...",P]}),h=ae(()=>{const P=(c.value-1)*p.value;return m.value.slice(P,P+p.value)}),C=ae(()=>[...new Set(zn.map(x=>x.slot))].sort((x,w)=>(parseInt(x)||0)-(parseInt(w)||0))),B=ae(()=>[{label:i.value.stats.all,val:zn.length,grad:"from-blue-700 to-blue-500",icon:"📦"},{label:i.value.stats.res,val:m.value.length,grad:"from-fuchsia-600 to-purple-600",icon:"🔍"},{label:i.value.stats.boss,val:zn.filter(P=>P.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600",icon:"💀"},{label:i.value.stats.slot,val:C.value.length,grad:"from-lime-500 to-emerald-600",icon:"🎒"}]),M=P=>{const x="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return P==="Mob"?x+"bg-green-500/10 text-green-500 border-green-500/50":P==="Miniboss/Mob"?x+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":P==="Miniboss"?x+"bg-purple-500/10 text-purple-500 border-purple-500/50":P==="Boss"?x+"bg-red-500/10 text-red-500 border-red-500/50":P==="Spina"?x+"bg-amber-500/10 text-amber-500 border-amber-500/50":x+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(P,x)=>(S(),I("div",{class:y(["bg-transparent py-0 px-2 md:px-4 font-sans relative z-10 transition-all duration-500",e.isDark?"text-white":"text-slate-900"])},[o("div",Cd,[o("div",Sd,[x[5]||(x[5]=o("span",{class:"text-[10px] font-[1000] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 uppercase text-center w-full opacity-90"}," SELECT LANGUAGE ",-1)),o("div",Ed,[(S(),I(X,null,ue(["id","en"],w=>o("button",{key:w,onClick:Z=>n.value=w,class:y(["px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all duration-300 flex items-center gap-2 group/btn",n.value===w?"bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105":"text-slate-400 hover:text-blue-500 hover:bg-white/5"])},[o("img",{src:Ne(w==="id"?Dd:Rd),class:"w-4 h-3 object-cover rounded-sm shadow-sm",alt:"flag"},null,8,Bd),o("span",null,K(w==="id"?"INDO":"ENG"),1)],10,Id)),64))])])]),o("div",Td,[o("div",{class:y(["relative p-5 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border-[3px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[x[8]||(x[8]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:"https://toram-online.com/information/images/item/bag_expansion_en.png",class:"w-full h-full object-contain object-right scale-125 translate-x-10"})],-1)),o("div",Kd,[o("h2",{class:y(["text-2xl md:text-6xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[Qe(K(i.value.title),1),x[6]||(x[6]=o("br",null,null,-1)),o("span",Od,K(i.value.subtitle),1)],2),x[7]||(x[7]=ta('<div class="absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none" data-v-290dd4f3><img src="'+_d+'" class="w-full h-full object-contain object-right opacity-30 scale-110" data-v-290dd4f3></div><div class="flex items-center justify-center md:justify-start gap-2 mt-2" data-v-290dd4f3><div class="h-1 w-10 bg-blue-600 rounded-full" data-v-290dd4f3></div><img src="'+Ma+'" class="h-5 md:h-10 w-auto object-contain" data-v-290dd4f3><span class="font-[1000] italic uppercase text-lg md:text-3xl" data-v-290dd4f3>TIMI <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500" data-v-290dd4f3>DB</span></span></div>',2))])],2),o("div",Nd,[(S(!0),I(X,null,ue(B.value,(w,Z)=>(S(),I("div",{key:Z,class:y(["relative p-3 md:p-5 rounded-[1.2rem] border-[2px] shadow-lg transition-all bg-gradient-to-br text-white overflow-hidden",w.grad])},[o("div",Gd,K(w.icon),1),o("div",Ld,K(w.label),1),o("div",Fd,K(w.val),1)],2))),128))]),o("div",Ud,[(S(!0),I(X,null,ue([{l:i.value.searchLabel,v:"search"},{l:i.value.catLabel,v:"kelas"},{l:i.value.slotLabel,v:"slot"}],(w,Z)=>(S(),I("div",{key:Z,class:"relative"},[o("label",jd,K(w.l),1),o("div",Hd,[w.v==="search"?ve((S(),I("input",{key:0,"onUpdate:modelValue":x[0]||(x[0]=q=>l.value=q),type:"text",placeholder:i.value.searchPlaceholder,class:y(["w-full h-10 pl-10 pr-4 rounded-xl border-[2px] font-bold text-xs outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600"])},null,10,Wd)),[[qe,l.value]]):w.v==="kelas"?ve((S(),I("select",{key:1,"onUpdate:modelValue":x[1]||(x[1]=q=>s.value=q),class:y(["w-full h-10 pl-10 pr-10 rounded-xl border-[2px] font-bold text-xs outline-none appearance-none cursor-pointer transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-600"])},[o("option",Jd,K(i.value.allClass),1),(S(),I(X,null,ue(["Mob","Miniboss","Boss","Spina"],q=>o("option",{key:q,value:q},K(q),9,Qd)),64))],2)),[[it,s.value]]):ve((S(),I("select",{key:2,"onUpdate:modelValue":x[2]||(x[2]=q=>r.value=q),class:y(["w-full h-10 pl-10 pr-10 rounded-xl border-[2px] font-bold text-xs outline-none appearance-none cursor-pointer transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-600"])},[o("option",Yd,K(i.value.allSlot),1),(S(!0),I(X,null,ue(C.value,q=>(S(),I("option",{key:q,value:q},"Slot "+K(q),9,Vd))),128))],2)),[[it,r.value]]),o("div",qd,[w.v==="search"?(S(),I("svg",zd,[...x[9]||(x[9]=[o("circle",{cx:"11",cy:"11",r:"8"},null,-1),o("path",{d:"m21 21-4.3-4.3"},null,-1)])])):Re("",!0),w.v==="kelas"?(S(),I("svg",Zd,[...x[10]||(x[10]=[o("rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"},null,-1),o("rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"},null,-1),o("rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"},null,-1),o("rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"},null,-1)])])):Re("",!0),w.v==="slot"?(S(),I("svg",Xd,[...x[11]||(x[11]=[o("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),o("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)])])):Re("",!0)]),w.v!=="search"?(S(),I("div",$d,[...x[12]||(x[12]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"m6 9 6 6 6-6"})],-1)])])):Re("",!0)])]))),128))]),o("div",{class:y(["border-[2px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl transition-all",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80"])},[o("div",e0,[o("table",t0,[o("thead",null,[o("tr",{class:y(["uppercase text-[9px] font-[1000] tracking-wider border-b-[2px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[o("th",{class:y(["p-4 w-[5%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},K(i.value.table.slot),3),o("th",{class:y(["p-4 w-[20%] text-left border-r",e.isDark?"border-white/10":"border-slate-200"])},K(i.value.table.name),3),o("th",{class:y(["p-4 w-[10%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},K(i.value.table.need),3),o("th",{class:y(["p-4 w-[15%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},K(i.value.table.cost),3),o("th",{class:y(["p-4 w-[15%] text-left border-r",e.isDark?"border-white/10":"border-slate-200"])},K(i.value.table.src),3),o("th",{class:y(["p-4 w-[10%] text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},K(i.value.table.type),3),o("th",n0,K(i.value.table.loc),1)],2)]),o("tbody",{class:y(["divide-y-[1px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(S(!0),I(X,null,ue(h.value,w=>(S(),I("tr",{key:w.id,class:"hover:bg-indigo-500/5 transition-all group"},[o("td",{class:y(["p-4 text-center font-black text-blue-500 italic text-2xl border-r",e.isDark?"border-white/10":"border-slate-200"])},K(w.slot),3),o("td",{class:y(["p-4 border-r",e.isDark?"border-white/10":"border-slate-200"])},[o("div",a0,[o("div",i0,[o("img",{src:t(w.kelas_bahan),class:"w-7 h-7 object-contain transform group-hover:scale-110 transition-transform",alt:w.kelas_bahan},null,8,l0)]),o("span",o0,K(n.value==="id"?w.nama_item_id||w.nama_item_en:w.nama_item_en||w.nama_item_id),1)])],2),o("td",{class:y(["p-4 text-center bg-black/5 border-r font-black italic text-lime-600 text-3xl",e.isDark?"border-white/10":"border-slate-200"])},K(d(w.jumlah)),3),o("td",{class:y(["p-4 text-center font-black text-lg text-amber-600 border-r",e.isDark?"border-white/10":"border-slate-200"])},K(w.spina>0?Number(w.spina).toLocaleString():"-"),3),o("td",{class:y(["p-4 border-r",e.isDark?"border-white/10":"border-slate-200"])},[o("div",s0,[o("span",r0,K(n.value==="id"?w.monster_id||w.monster_en||"-":w.monster_en||w.monster_id||"-"),1)])],2),o("td",{class:y(["p-4 text-center border-r",e.isDark?"border-white/10":"border-slate-200"])},[o("span",{class:y(M(w.kelas_mob))},K(w.kelas_mob),3)],2),o("td",c0,[o("div",u0,[o("span",d0,K(n.value==="id"?w.lokasi_id||w.lokasi_en:w.lokasi_en||w.lokasi_id),1)])])]))),128))],2)])]),o("div",p0,[(S(!0),I(X,null,ue(h.value,w=>(S(),I("div",{key:w.id,class:"p-4 space-y-3"},[o("div",g0,[o("div",m0,[o("span",f0,K(i.value.table.slot.toUpperCase())+" "+K(w.slot),1),o("span",{class:y([M(w.kelas_mob),"!min-w-fit !px-2 !py-0.5 !text-[8px]"])},K(w.kelas_mob),3)]),o("div",h0,K(i.value.mobile.cost)+": "+K(w.spina>0?Number(w.spina).toLocaleString():"-"),1)]),o("div",A0,[o("div",b0,[o("img",{src:t(w.kelas_bahan),class:"w-8 h-8 object-contain",alt:w.kelas_bahan},null,8,k0)]),o("div",null,[o("h3",v0,K(n.value==="id"?w.nama_item_id||w.nama_item_en:w.nama_item_en||w.nama_item_id),1),o("p",x0,K(n.value==="id"?w.lokasi_id||w.lokasi_en:w.lokasi_en||w.lokasi_id),1)])]),o("div",{class:y(["grid grid-cols-2 gap-2 border-[2px] p-3 rounded-2xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[o("div",y0,[o("span",w0,K(i.value.mobile.need),1),o("span",P0,K(d(w.jumlah)),1)]),o("div",M0,[o("span",_0,K(i.value.mobile.drop),1),o("span",D0,K(n.value==="id"?w.monster_id||w.monster_en||"-":w.monster_en||w.monster_id||"-"),1)])],2)]))),128))])],2),o("div",R0,[A.value>1?(S(),I("div",C0,[o("button",{onClick:x[3]||(x[3]=w=>c.value--),disabled:c.value===1,class:"h-9 w-9 rounded-lg border-2 font-black border-blue-600 text-xs disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all"},"«",8,S0),(S(!0),I(X,null,ue(k.value,w=>(S(),I("button",{key:w,onClick:Z=>typeof w=="number"?c.value=w:null,class:y(["h-9 w-9 rounded-lg border-2 font-black transition-all text-xs",w===c.value?"bg-blue-600 text-white shadow-md":"text-blue-600 border-blue-100 hover:border-blue-600"])},K(w),11,E0))),128)),o("button",{onClick:x[4]||(x[4]=w=>c.value++),disabled:c.value===A.value,class:"h-9 w-9 rounded-lg border-2 font-black border-blue-600 text-xs disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all"},"»",8,I0)])):Re("",!0),o("button",{onClick:u,class:"group relative h-12 px-12 rounded-2xl border-b-4 border-indigo-800 bg-indigo-600 text-white font-black uppercase italic text-[11px] tracking-widest hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all shadow-xl"},[o("span",B0,K(p.value===10?i.value.exploreBtn:i.value.collapseBtn),1),x[13]||(x[13]=o("div",{class:"absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl"},null,-1))])])])],2))}},K0=Wt(T0,[["__scopeId","data-v-290dd4f3"]]),O0="/toram-vue/images/mq.png",ci=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],N0=()=>[...new Set(ci.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),G0={class:"bg-transparent py-0 px-2 md:px-4 font-sans"},L0={class:"max-w-9xl mx-auto space-y-6 md:space-y-10"},F0={class:"relative z-10 text-center md:text-left"},U0={class:"mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"},j0={class:"flex items-center gap-2 select-none whitespace-nowrap"},H0={class:"flex flex-col gap-2"},W0={class:"relative group"},J0={class:"flex flex-col gap-1.5 relative"},Q0={class:"relative group"},Y0=["value"],V0={class:"hidden lg:block overflow-x-auto"},q0={class:"w-full border-collapse"},z0={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},Z0={class:"p-8 text-center bg-black/5"},X0={class:"font-black italic text-5xl text-indigo-600"},$0={class:"flex justify-between items-center"},ep={class:"text-2xl font-black italic text-indigo-500/30"},tp={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},np={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},ap={class:"text-right"},ip={class:"text-4xl font-black italic text-indigo-600"},lp={class:"flex flex-col gap-6 justify-center items-center pb-20"},op={key:0,class:"flex flex-wrap justify-center items-center gap-2"},sp=["disabled"],rp={key:0,class:"text-indigo-500 font-black px-2"},cp=["onClick"],up=["disabled"],dp={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=Ra(),i=Jn(),l=oe(a.query.search||""),s=oe(a.query.chapter||"Semua Chapter"),r=oe(parseInt(a.query.page)||1),c=oe(parseInt(a.query.per_page)||10),p=N0(),u=ae(()=>ci.filter(B=>{const M=l.value.toLowerCase(),P=B.nama_item.toLowerCase().includes(M)||B.chapter.toLowerCase().includes(M),x=s.value==="Semua Chapter"||B.chapter===s.value;return P&&x})),d=ae(()=>Math.ceil(u.value.length/c.value)||1),m=ae(()=>{const B=(r.value-1)*c.value;return u.value.slice(B,B+c.value)}),A=()=>{c.value===10?c.value=u.value.length:c.value=10,r.value=1,k()},k=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:s.value!=="Semua Chapter"?s.value:void 0,per_page:c.value,page:r.value}})},h=B=>{B>=1&&B<=d.value&&(r.value=B,k())};Mt([l,s],()=>{r.value=1,k()});const C=ae(()=>{const B=d.value,M=r.value;if(B<=5)return Array.from({length:B},(x,w)=>w+1);let P=[];return M<=3?P=[1,2,3,"...",B]:M>=B-2?P=[1,"...",B-2,B-1,B]:P=[1,"...",M,"...",B],P});return ae(()=>[{label:"ALL ITEM",val:ci.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:p.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:p.length>0?p[p.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]),(B,M)=>(S(),I("div",G0,[o("div",L0,[o("div",{class:y(["relative p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[M[7]||(M[7]=o("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[o("img",{src:O0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),o("div",F0,[o("h2",{class:y(["text-3xl md:text-6xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[...M[4]||(M[4]=[Qe(" MAIN QUEST",-1),o("br",null,null,-1),o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),o("div",U0,[M[6]||(M[6]=o("div",{class:"flex items-center gap-3"},[o("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),o("img",{src:Ma,class:"h-8 md:h-12 w-auto object-contain"})],-1)),o("div",j0,[o("span",{class:y(["font-[1000] tracking-tighter italic uppercase leading-none transition-all duration-700 text-4xl md:text-4xl",e.isDark?"text-white":"text-slate-900"])}," TIMI ",2),M[5]||(M[5]=o("span",{class:"text-3xl md:text-4xl font-[1000] tracking-tighter italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"}," DB ",-1))])])])],2),o("div",{class:y(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[o("div",H0,[M[9]||(M[9]=o("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),o("div",W0,[ve(o("input",{"onUpdate:modelValue":M[0]||(M[0]=P=>l.value=P),type:"text",placeholder:"Find MQ item...",class:y(["w-full border-[3px] rounded-xl md:rounded-2xl py-4 md:py-5 pr-4 pl-14 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[qe,l.value]]),M[8]||(M[8]=o("div",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"11",cy:"11",r:"8"}),o("path",{d:"m21 21-4.3-4.3"})])],-1))])]),o("div",J0,[M[12]||(M[12]=o("label",{class:"text-[9px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),o("div",Q0,[ve(o("select",{"onUpdate:modelValue":M[1]||(M[1]=P=>s.value=P),class:y(["w-full h-18 border-[3px] rounded-xl px-4 pr-10 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500 appearance-none",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[M[10]||(M[10]=o("option",{value:"Semua Chapter"},"All Chapter",-1)),(S(!0),I(X,null,ue(Ne(p),P=>(S(),I("option",{key:P,value:P},K(P),9,Y0))),128))],2),[[it,s.value]]),M[11]||(M[11]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-fuchsia-500 opacity-70"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"m6 9 6 6 6-6"})])],-1))])])],2),o("div",{class:y(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[o("div",V0,[o("table",q0,[o("thead",null,[o("tr",{class:y(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[o("th",{class:y(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),o("th",{class:y(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),o("th",{class:y(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),M[13]||(M[13]=o("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),o("tbody",{class:y(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(S(!0),I(X,null,ue(m.value,(P,x)=>(S(),I("tr",{key:x,class:"hover:bg-indigo-500/5 transition-all"},[o("td",{class:y(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},K((r.value-1)*c.value+x+1),3),o("td",{class:y(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[o("span",z0,K(P.chapter),1)],2),o("td",{class:y(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},K(P.nama_item),3),o("td",Z0,[o("span",X0,K(P.jumlah),1)])]))),128))],2)])]),o("div",{class:y(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(S(!0),I(X,null,ue(m.value,(P,x)=>(S(),I("div",{key:x,class:"p-6 space-y-4"},[o("div",$0,[o("span",ep,"#"+K((r.value-1)*c.value+x+1),1),o("span",tp,K(P.chapter),1)]),o("div",{class:y(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[o("div",np,K(P.nama_item),1),o("div",ap,[M[14]||(M[14]=o("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),o("span",ip,K(P.jumlah),1)])],2)]))),128))],2)],2),o("div",lp,[d.value>1?(S(),I("div",op,[o("button",{onClick:M[2]||(M[2]=P=>h(r.value-1)),disabled:r.value===1,class:y(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,sp),(S(!0),I(X,null,ue(C.value,(P,x)=>(S(),I(X,{key:x},[P==="..."?(S(),I("span",rp,"...")):(S(),I("button",{key:1,onClick:w=>h(P),class:y(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",r.value===P?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},K(P),11,cp))],64))),128)),o("button",{onClick:M[3]||(M[3]=P=>h(r.value+1)),disabled:r.value===d.value,class:y(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,up)])):Re("",!0),o("button",{onClick:A,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},K(c.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},pp=Wt(dp,[["__scopeId","data-v-5652e557"]]),Ln="data:image/jpeg;base64,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",Si="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCABHAEcDASIAAhEBAxEB/8QAHgAAAQQDAQEBAAAAAAAAAAAAAAEDBwgCBgkEBQr/xAAwEAABAgUDAwIGAgIDAAAAAAABAgMABAUGEQcSIQgxQRNRCRQiQmGBMnEloVJikf/EABwBAAAHAQEAAAAAAAAAAAAAAAABAgQFBgcIA//EACgRAAEDAwQBBAIDAAAAAAAAAAEAAgMEBREGEiFRMQcUYXEiQROBof/aAAwDAQACEQMRAD8A4FyUk9OzCZZhBUtR4Aj1zdqV6WyVyK8fhJhbNmkytxyzrmMFzBzFnbF05tG4qNN1y6p6Zk5KXaBQ/LSyXNyyR9JyRjg5iDul0dbpG5bkFXrSuko9S07y1+1zSqoOsusK2OtlJHgiMYs5dPStSrzZen9Ma7L1P0mgTJuEImlqJxhLac7v/feIdvPQu8LNnXafWqNMycw0cLYmGilSf7Bj0pL1RVQ5OD0vC76HvdrcTs3N7C0XPiCH56mTsgsomGFJx5Ihj8xLtcHDIVPfG+N21wwUQY4zAceIINIS8Y4GYITMEBBZsOqZeS6g4KVAiLS9MeoErXaMqxq44n5apt+ktZ7oV3BH5yAIquASeeP7jdtJrvdo1RbZQ6UkKBSrPY+IhL5Re7pMgchXjQl7Nnu4Dj+L+Cp8nKFWbIuqYtyouvSU9KOlLD6CUqSR4PaN4pmsTE/TkWfrPabFXkDnE7sCXEkjG4rSAo++CY9lfo0jq7o/TNUqShTk/TgJWukj6lrAz6vHg7gM/iPRZmmk5qNbTj1uynr1SlNByblgnPqtcAOAeTk9u2BGbSSfmAfP+/0un4It1MXjBaRnsYPajHVzpot+p09FxaR1FdakXWtzzPpAPsK5JylJP0485iudz2S/TXSqXQcA9o6I6M9P9L1xmXbesK7mrfvhDeZKmzbuyWqix3QSclKiM/SlPge8RlrjoHPUm739NtebHm7Ku2XUouh+V2B/wPpOAlOfuAix2661NI0OedzO+vtZnqLSNsvUrmwAMm87e/oqjS2nGV7XRtI8GMST5MSRq1o5XrDq7lNq8lyOWX2+W3k+FIV9yfzEdzEs9LrKHRtIi701XFVRhzCsIulpq7VUOimaQQmwkD+R/UELxn6U/swQ4UWsefeH6dNLkpxEwgnKT4MM7j7QAkHMG4BzcFKY8seHDyFbPog1vp1vXeLYu2Y/w1fZ+TqIVghIJykgHjO4J54ie6XY146TatPWrb7i2qjJOlymq8TTX/Aj7gRu94572RcbtOmmwh0pUhQKVDwYvr08a4L1cs6muzT2busza9Kur5+dlQQkoz9yxuUcY7DvGZajtclPL/LHwunvTbVMNbSe0qDnjH2FuvUFpVX7mtSR6nNCadNSc0zNfL3VSZNSg7SZ5I3Kxjn08KQAo45OMRZXo5uGT+Jjpinpw6qrKlXKnRKUsW5ePKJ5p1CCraogJ9XgH+RPeK9ap9V9c051Za1Q6VZ5qiv1unJm6tKzUuiYZceKiFbmnQpAOAPEb3pB8czqssW7JJ27dPbaq1NASzPy0vSGJQuAnCnAtloKBwewPiGtJUQujy523PkfoqTutBWw1GI49+05a7PI+PlQ9qR0gVu26a9p/qgwDITylM0isJRuclnRyM5xwcbcZ43RQrW7Set6ZXhUbSuKWCJqnTKmX9qsjcD4MfoN1aqGg3WJ023FemmaES6hLiZlmVgB2VUlSVYIycHjH7jj98R+3KWKvblel5fbNVq2WZ2or8rfUtYUr/QhxpypqqWqMT3ZaUx9RrdbbvaxVMjLJAOQe8Kl5Ow8frMEOzct8rMraUckGCNNBBGVy49pa4gpkDyTj2g4ycDP5MATkwbUp5VCjjKSnZOYXLvJcCjwewiV9HNUa3ZVdlK/Qp0szEuvKSDwr3B8EEGIj3EduI91NrExTnUutKOQe5hjXUjauItKnbFeJLTViQHAXR2w3NBtcpCSrUreTFt3FMYTNSE4oJl/U9kKUSdv67xI1U6V9W6HSPSY0sFVbeTmXqFLCnUuDwewEc1aBqa6wEOIm1NrHIwrGIky0esDU+1FsrpOoFRaLBBZ3TilJSf6JxGfVGnJGuIIJHwuhrf6kU0sbXBzQcfsZBXRDpg6fOraiSVZt+Xtuo0im1qXQ0tcy2oJQA4lSjgjA+kYirfxf6rpzS9aJCwbIqzc01bdvtU6bdbOR66FuFQ/2IjTUn4h+vN80ZNOuTVefcabSdqGFhrPH/TEVvvi/qjddQcm5mbcdU4rK3XFlSlH3JPeJe02csdwCB2VU9XayZPCdz2k4IAb45Xwqk4lyccWkZGfEEM7lK7QRd2jaAFhb3b3l3aNxPPYQgJOQmCCDCQskoA5gKgDiCCE+SglDi0/wWR74hROTKeQ8QO0EEDAKUHOb4KRUxMO/Spwn+zCbB3JzBBAPHARFznHJKWCCCCRL//Z",Ei="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCABJAEcDASIAAhEBAxEB/8QAHgAAAQQCAwEAAAAAAAAAAAAACQABAggFBgMEBwr/xAA0EAABAgUDAgQFAwMFAAAAAAABAgMABAUGEQcSIQgxCRNBYSIjMlFxFIHRFSRiFhdygqH/xAAcAQAABwEBAAAAAAAAAAAAAAAAAQMEBQYIBwL/xAArEQABBAECBAYBBQAAAAAAAAABAAIDEQQFBhIhMUEHEyJRYYEUFTJxkbH/2gAMAwEAAhEDEQA/AADMS7806GZdpS1K7Ac5jlmKbOyh2zMo4g/5Jja9BjTF6m0yWqrAWy4/tUFAeoMEBtboWoOr0m+aLSqYP00sHXXJyZbZABOOCrucntFN3Fu/E23kMZkNNOF2nUGK6dttQzQFEYJ/MOAlI4i4HUX4aN/2Et+p0ygOOSyGvNXM0/57DaScDctGQDn7/cRWi49HL1t7cp+luFCfqISYkdL3JpGrxB8Eo59u6TkgliPMLVCsniHG5X8xN2VdlnC0+2UqB5ChiIg+h/aJ/iFckikEgfmHzn+IipW3sf3iOfSBRKCmVCFEACe0KD6ILvW3V3qHXJWqsnBYeSoftBbOinUq29Y9GX7NUoNVKfl90o/v2neMHaVegwDAiEowQYtT0Ga8vWbVZWmCd2LYdBbyfWOb+JOh/q2kCVg9cZv6T/Am8uWj0Kvfp/fWoNsTc3bjM8JlyXV/e0Sp/MYnEg/Zfw++MHtGz1rTfpR6nJN2mXHQGbMul9Si4+xLhMu4ojhKGQEgDPqPv7R3tTrJavO36B1AWu6zmsthU+ZVICJeawSpohPA+HHHvE63plIXjazF0NU1YW0Q3OKYyl6XWOfqHO3kc+8ZofmmDIa6Nxafcdj8juFYCA5vMWFRvrH8Nu49JX0vz9MZWxNN+ZKz9PdDrSgc8FSMgK45SeRmKb3xplXbMmizMMKWgdlhMHAotqanMWZMOIpCLytqXbJmqe4yHZqUSeCpLZClLOD9QA/8itmuXQtZ+sFHdufQWcbfUFLVMUSedCXWEAZHKjlSs8bcZjr+1/EDN09rItSNsPR/Y/fYqKyMFr/VH/SFWQRwYfbgZMem6xaIVuxq1MyE9SXpWZlnCh6XeaKVJUO4II4MeaOtuNuFtxOCO4Md1w83HzoRJEbBUO5pYaKYDI4OBChux4GYUO15TlQxySYzenl0TNq3TLVNh0pCXBuwfSMFDpUUqCh6GEpYWzRuY7oRSMEg2EZfwtuomgaqUSb6c73nWhJ3CxupDjqgkS06MK37j90o2447xZnTymXDZT1UpiqOl+epv9tXKa43kvsgj5gBHByc5x6YgJ3StrPUrIrchUKbPqamZN9DjSkrwcpIMG80F6l6Dr3SKB1P05uXVVpJaJTUClMhILiDx5+wDhBK0jOMZEZD8SNs5Wial+Tij0k38X7H4KsmBkNlj4XLVdSLhvHpyuOl6y6Uzrj1CqyQuWVsKkEHOWXU8jdjulXOCOI9asTRbSDr8pH+4GjMl/o/UaTlA7UpKSZ8qSn1Dk4bTtQ2ec9j2iHUld+m/T1d85bkvQmb6sm6XTWZaiNKDKpEOfB8twBWPoxwB6xl+knr86INGL4kGaPo3W7aTNLAenlVF2a8tavh2lOwZT29oPSJoMzBLGSNDHjmx3Y12+0JOJkl9wqqdW3h6VnWGiTzF0WZ/Tb4lWFfo5laPLZqZTyoFZACl7Qo7iSTgCA+a7aQVWx7jmqbVKW7JzEs4UPMPNlCkEHkEHsY+vrqj06tHV3Q2ZvSx5mXm35FCZumTjCgc/EnPI/xzHz/AHjP6TUUX25qFISzSJi6ZT+qLQ2gJCFLUoFOB/xiY8Ldzazgag7Ts39oPI3Yq/8AEjqEMcrPMahcFISdohRyz8q7Izjks+NpQrBBhRqQHiFhQC60PjjtEgkDkQ24AcDPtCloLKWjXHaJVG5gLIAVzzF8ugjq+n9G7paqKFfqKdPsiWq0io8Psk5wfwcK/aB8gqBCiO0bzpnqhM2nPsl5R8tKhkAxU91aBFreE5hbZTnHmMT0fZnR1GqlrUjVTT64kVyiPSCW5KWbmAZmXaBJDamgSpJGScH7w8loPpMKY7UKpMOy1QZORLTkuWzu/wC3eBn6Fddl4afolZqzrympZDagsMszKkpz7gHEWvtrxjbmq8lLNXjRLfqS2sBanKSwlbox6r25z7xl3P2HqmPIWFzmi+RAvl8hTzMuN3OleXpn6lb1svT649N2gqoS7skG6ZLFRO1alpSQO/ATzgQPfxpbaatKv0G1p6otrmpO12kzCN4+Wve5lPtHo17+MzOW/bgd01sK3KHNBs75lcow8e3cZRwYGR1q9Zt36831PXPcNwKnp2ccKn3QcJySeAOwHsIu+ydpTRZI4SXGxbiKoBNsrIbwqu12rS9cUyoKzheMwox8xMuTLqnlnlRyTCjSUbSyMN9lBE2VEbld+BDhKRyD2h440/zHtEuTHPeFnB7wyew/ERH0H8wSC7tPuGp0pQMlNLGDwNxwIyzGqN0MYWmaXkevmERrcOPoP5hOTFx5Db2gow4hZ+r6mXTWWSxM1BwJI5AcMYBxxbqit1ZUfUqOYaFAihihFMaB/CBJPVL3xCiaew/EKFbRL//Z",Fn="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEMAQgMBIgACEQEDEQH/xAAvAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQEAAAAAAAAAAAAAAAMCAAEE/9oADAMBAAIQAxAAAALneeq3N6YxITinTDAnozEmTYDNnc1Jk36ya03xNxQh2XBIwO8PQ+5S7efN6JekqjdjO3yuzKMLiKvm1JFgrc1Jm3wWbZybdtjTc4NQOO/AmvLAJKcBtzAO7//EAAL/2gAMAwEAAgADAAAAIc0nU/TKJNccTyFf+RLLPggHnfP/xAAC/9oADAMBAAIAAwAAABDhTpTB5g1LPEJAf6IdAjMNyGPz/8QAJBEAAQQBAwMFAAAAAAAAAAAAAQACAwQhEBESFCIxEzJScZH/2gAIAQIBAT8AB4nwFXmi3AcE2vDK3t2VujxBwujHxU8RZsdtK9ySEjOE2xHZi85XohSQNlg8Z2T2FjiCNIpXROBB+11TVTstLQCcFXoA7vas6044+Psb+K45wcACQnlDT//EACIRAAEEAQQCAwAAAAAAAAAAAAEAAgMRBBAhIjESFBNhgf/aAAgBAwEBPwAix2p4ZaJaU6eWN3K1i5lkbr2yoJQ6xemRiMlB2op0EmPJ1svlKjmMU31aY4PaCDpLE2RpB/F6xWVjkOsBYU5bxctq0sLKe/yPIrEALSSE3rX/xAAkEAADAAECBgMBAQAAAAAAAAAAAQIDERIEEBMhMVEiMkFhcf/aAAgBAQABPwLbP6zpejYKDpjxjgcib0Mi1WpNNE5Zr7G31y0KgqReCO/YqdtGhFXIsifO0aEmSd0biBw4ZGKMq7dqH1MT0tCpMrlJHouNtEPd8KL34bMObHxE7Mi7+zNw9Yb7H2nlD5Wt8f0iN+Pt5RriyLTK9rRhwcNDTWYzY92jMkdPJ/psoiiWJ6GvTrVeC/lTNKOF4mp+NM4rSoT5SyLFQmv06Kf1Ztc+ZGnr2Rjm626+D4GNJ+SYn0bVyTFT0ISLqkbq9n//xAAeEAADAAIDAQEBAAAAAAAAAAAAAREhMRBBUXFhIP/aAAgBAQABPyHCgl7mP8gmJ7IHwmIaZmMQ9vRP0h8kmHwZJXY5hkqaRm7wxDzwrFcFqTZFj0XnRlUFviFOBRaQuDetMwfR9hpmhqEshP6EydonEhNOgxgkmVwKJI/gjuKELwOhmKFRfbhrf08WxeqkOo74i+BDNLQbl4MN5BN6NjaNiBQQheI0MXZKyQWIWOODs8j/xAAeEAEBAQEAAgMBAQAAAAAAAAABABEhMUFRYYFxkf/aAAgBAQABPxBbRF9TtdCF5DC+2an3Kb1tEIZPV8L4lnZvW56gDO2EAB9FkoJPFjyx9XpfSY+Kc85PO5IaiEyZhpYEeLf5xHMYQOPJEe2iGd9GXgif7fpiR98/i4MT8i0nL8Tky+x0YsfQaDNoPEtrzMMduiF9IWfwdIeHInl5iR4HGyVy0IdhdJShfhYYmU2fgrSw92H6hEw54fM7t8t9ipIFPG8S5lebLKPpG4ckcbHOxh2eHd2cDvcvE/SJoJZbj5RxpxSVgbA5iJhiPU1ojGebv+hI22/kT5voJre5v//Z",Ii="data:image/jpeg;base64,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",Bi="data:image/jpeg;base64,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",Ut=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
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
Kecepatan Item -1.0s`}],Ti="/toram-vue/assets/enhance_weapon_crysta-eGLehiWn.png",Ki="/toram-vue/assets/enhance_armor_crysta-YvncoZmF.png",Oi="/toram-vue/assets/enhance_additional_crysta-mE1Kazx1.png",Ni="/toram-vue/assets/enhace_special_crysta-CIVkxwj2.png";function gp(e){const t={};return e&&e.split(`
`).map(n=>n.trim()).forEach(n=>{if(!n.match(/[+-]\s*\d/))return;const a=n.match(/^(.+?)\s*([+-])\s*(\d+)(%)?$/);if(!a)return;const[,i,l,s]=a;t[i.trim().toUpperCase()]={sign:l,value:Number(s)}}),t}const mp={class:"fixed inset-0 pointer-events-none z-0"},fp={key:0,class:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},hp={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse",style:{"animation-delay":"2s"}},Ap={class:"relative z-10 max-w-[1700px] mx-auto p-4 md:p-10 space-y-0"},bp={class:"flex items-center gap-1"},kp={class:"text-center md:text-left space-y-1"},vp={class:"flex items-center gap-3"},xp={class:"text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none transition-all"},yp={class:"flex flex-col items-center md:items-end gap-3"},wp={class:"flex gap-2"},Pp={class:"space-y-2 col-span-2 md:col-span-2 lg:col-span-2"},Mp={class:"relative group"},_p={class:"space-y-2 col-span-1"},Dp={class:"relative group"},Rp={class:"space-y-0 w-full col-span-2 lg:col-span-3"},Cp={class:"flex flex-col md:flex-row items-center gap-3 w-full"},Sp={class:"relative group w-full"},Ep={class:"relative py-4 flex items-center justify-center"},Ip={class:"space-y-10 relative z-10 pb-32"},Bp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Tp=["onClick"],Kp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},Op={class:"lg:col-span-6 relative group"},Np={class:"relative p-6 md:p-10"},Gp={class:"flex flex-col md:flex-row gap-8 items-start"},Lp={class:"relative shrink-0 mx-auto md:mx-0"},Fp=["src","alt"],Up={class:"flex-1 space-y-6 w-full"},jp={class:"space-y-2"},Hp={class:"grid grid-cols-1 gap-4"},Wp={key:0,class:"w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 group-hover/item:scale-150 transition-transform flex-shrink-0"},Jp={class:"flex items-center gap-4"},Qp={class:"flex flex-col"},Yp={class:"lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scroll-hide"},Vp=["onClick"],qp={key:1,class:"hidden lg:flex flex-1 items-center justify-center opacity-10"},zp={key:0,class:"py-40 text-center animate-pulse"},Zp={class:"flex flex-col items-center gap-10 py-20"},Xp={key:0,class:"flex flex-wrap justify-center items-center gap-3"},$p=["disabled"],eg={class:"flex gap-2.5 items-center"},tg=["onClick"],ng={key:1,class:"px-2 font-black text-blue-500"},ag=["disabled"],ig={class:"flex items-center gap-4 opacity-50"},lg={class:"text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"},og={class:"fixed bottom-8 left-8 z-[200] hidden lg:block"},sg={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t=new Map;function n(O){return t.has(O.code)||t.set(O.code,gp(O.view)),t.get(O.code)}const a=Jn();function i(){l.value="",s.value=[],r.value=[],m.value="asc",d.value=10,a.push({query:{}})}const l=oe(""),s=oe([]),r=oe([]),c=oe(!1),p=oe(!1),u=oe(1),d=oe(10),m=oe("asc"),A=oe(null),k=oe(null),h=Ra(),C=ae(()=>{try{return h.query.filter?JSON.parse(h.query.filter):null}catch{return null}}),B=()=>{l.value="",s.value=[],r.value=[],u.value=1},M=O=>{const v=O.type?.toUpperCase();if(v!=="UPGRADE")return Z[v]||Ln;const le=ye(O);return Z[`${le}_UPGRADE`]||Fn},P=O=>({NORMAL:"bg-blue-500/10 text-blue-500 border-blue-500/40",UPGRADE:"bg-purple-500/10 text-purple-500 border-purple-500/40",ADDITIONAL:"bg-yellow-500/10 text-yellow-500 border-yellow-500/40",WEAPON:"bg-red-500/10 text-red-500 border-red-500/40",ARMOR:"bg-green-500/10 text-green-500 border-green-500/40",SPECIAL:"bg-pink-500/10 text-pink-500 border-pink-500/40"})[O?.toUpperCase()]||"bg-slate-500/10 text-slate-500 border-slate-500/40",x=O=>O.link?Ut.find(v=>String(v.code)===String(O.link)):null,w=O=>Ut.filter(v=>String(v.link)===String(O.code)),Z={NORMAL:Ln,UPGRADE:Fn,ADDITIONAL:Ei,ADDITIONAL_UPGRADE:Oi,ARMOR:Ii,ARMOR_UPGRADE:Ki,WEAPON:Si,WEAPON_UPGRADE:Ti,SPECIAL:Bi,SPECIAL_UPGRADE:Ni},q=O=>{if(!O)return null;let v=O,le=0;for(;v.link&&le<10;){const fe=Ut.find(W=>String(W.code)===String(v.link));if(!fe)break;v=fe,le++}return v},ye=O=>q(O)?.type?.toUpperCase()||"NORMAL",J=O=>{if(!O)return"text-cyan-500";const v=O.type?.toUpperCase();if(v==="UPGRADE"||v==="ENHANCER")return"text-gray-400";const le=ye(O);return{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[le]||"text-cyan-500"},te=O=>O?Array.isArray(O)?O:O.split(/,|\n/).map(v=>v.trim()).filter(v=>v):[],ne=O=>{l.value=O,window.scrollTo({top:0,behavior:"smooth"})},L=ae(()=>{let O=Ut.filter(v=>v.name?.trim());if(C.value){const{stats:v,types:le}=C.value;v&&Object.keys(v).length>0&&(O=O.filter(fe=>{const W=n(fe);return Object.entries(v).every(([Pe,ge])=>{const Ie=W[Pe.toUpperCase()];return!(!Ie||Ie.sign!==ge.sign||ge.value!==null&&(ge.op===">="&&Ie.value<ge.value||ge.op==="<="&&Ie.value>ge.value))})})),le&&le.length>0&&(O=O.filter(fe=>{const W=ye(fe),Pe=fe.type==="UPGRADE";return le.some(ge=>{if(!ge.includes("_"))return!Pe&&W===ge;const[Ie,ht]=ge.split("_");return ht==="UPGRADE"&&Pe&&W===Ie})}))}if(l.value){const v=l.value.toLowerCase();O=O.filter(le=>le.name.toLowerCase().includes(v))}return s.value.length>0&&(O=O.filter(v=>{const le=ye(v),fe=v.type==="UPGRADE";return s.value.some(W=>{if(!W.includes("_"))return!fe&&le===W;const[Pe,ge]=W.split("_");return ge==="UPGRADE"&&fe&&le===Pe})})),r.value.length>0&&(O=O.filter(v=>{const le=(v.view||"").toUpperCase();return r.value.every(fe=>le.includes(fe.toUpperCase()))})),O.sort((v,le)=>m.value==="asc"?v.name.localeCompare(le.name):le.name.localeCompare(v.name))}),ie=ae(()=>{const O=(u.value-1)*d.value;return L.value.slice(O,O+d.value)}),Me=ae(()=>Math.ceil(L.value.length/d.value)||1),Le=ae(()=>{let O=Math.max(1,u.value-2),v=Math.min(Me.value,O+4);v-O<4&&(O=Math.max(1,v-4));const le=[];for(let fe=O;fe<=v;fe++)le.push(fe);return le}),we=O=>{A.value&&!A.value.contains(O.target)&&(c.value=!1),k.value&&!k.value.contains(O.target)&&(p.value=!1)};return tn(()=>{window.addEventListener("click",we)}),wi(()=>{window.removeEventListener("click",we)}),Mt([l,s,r,d,m],()=>{u.value=1}),(O,v)=>{const le=sa("RouterLink"),fe=sa("router-link");return S(),I("div",{class:y(["min-h-screen relative overflow-x-hidden font-sans transition-all duration-700 bg-transparent",e.isDark?"text-slate-200":"text-slate-900"])},[o("div",mp,[o("div",{class:y(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03] transition-opacity duration-1000",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),v[6]||(v[6]=o("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-transparent"},null,-1)),e.isDark?(S(),I("div",fp)):Re("",!0),e.isDark?(S(),I("div",hp)):Re("",!0)]),o("div",Ap,[o("header",{class:y(["relative group flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pb-10 border-b-2 transition-all duration-500",e.isDark?"border-white/5":"border-black/5"])},[o("div",bp,[v[9]||(v[9]=o("div",{class:"relative group"},[o("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"}),o("img",{src:Ma,class:"relative h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110",alt:"Logo"})],-1)),o("div",kp,[o("div",vp,[o("h1",xp,[o("span",{class:y(O.text-O.white)},"TIMI ",2),v[7]||(v[7]=o("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"},"DB",-1))]),v[8]||(v[8]=o("div",{class:"px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] font-black text-blue-500 tracking-widest uppercase"},"Bahasa Indonesia",-1))]),o("p",{class:y(["text-xs font-black uppercase tracking-[0.5em] opacity-60",e.isDark?"text-slate-400":"text-slate-500"])},"Toram Online Database",2)])]),o("div",yp,[o("div",{class:y(["group relative px-8 py-3 rounded-2xl border-2 overflow-hidden transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white border-slate-200 shadow-xl shadow-slate-200/50"])},[v[10]||(v[10]=o("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"},null,-1)),o("span",{class:y(["relative text-xs font-black uppercase tracking-[0.2em]",e.isDark?"text-cyan-400":"text-blue-600"])}," Results : "+K(L.value.length)+" Xtall ",3)],2),o("div",wp,[(S(),I(X,null,ue(3,W=>o("div",{key:W,class:"w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"})),64))])])],2),xe(le,{to:"/xtall/advanced",class:"mb-6 block w-full rounded-2xl border-2 border-indigo-500 bg-gradient-to-t from-indigo-400 to-purple-500 px-6 py-5 text-center text-lg font-black text-white shadow-xl hover:scale-[1.02] transition"},{default:$e(()=>[...v[11]||(v[11]=[Qe(" 🔎 Advanced Xtall Search ",-1)])]),_:1}),o("section",{class:y(["grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 md:p-8 rounded-[3rem] border-2 backdrop-blur-3xl relative z-[100] transition-all duration-500 shadow-2xl",e.isDark?"bg-slate-950/60 border-red/100 shadow-black/40":"bg-red/80 border-slate-200 shadow-slate-300/50"])},[o("div",Pp,[v[14]||(v[14]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 ml-4 flex items-center gap-2"},[o("span",{class:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"}),Qe(" Search Name ")],-1)),o("div",Mp,[v[12]||(v[12]=o("div",{class:"absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"},null,-1)),ve(o("input",{"onUpdate:modelValue":v[0]||(v[0]=W=>l.value=W),type:"text",placeholder:"Search xtall name...",class:y(["relative w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm",e.isDark?"bg-slate-900/50 border-white/5 focus:border-cyan-500 text-white placeholder-slate-600":"bg-white border-slate-200 focus:border-cyan-500 text-slate-800 placeholder-slate-400"])},null,2),[[qe,l.value]]),v[13]||(v[13]=o("svg",{class:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500 transition-transform group-focus-within:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-width":"3"})],-1))])]),o("div",_p,[v[17]||(v[17]=o("label",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 ml-4"},"Scale",-1)),o("div",Dp,[ve(o("select",{"onUpdate:modelValue":v[1]||(v[1]=W=>d.value=W),class:y(["w-full px-4 py-4 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-10",e.isDark?"bg-slate-900/50 border-white/5 focus:border-purple-500 text-slate-200":"bg-white border-slate-200 focus:border-purple-500 shadow-sm"])},[...v[15]||(v[15]=[o("option",{value:10},"10 Units",-1),o("option",{value:25},"25 Units",-1),o("option",{value:50},"50 Units",-1),o("option",{value:9999},"Show All",-1)])],2),[[it,d.value]]),v[16]||(v[16]=o("svg",{class:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M19 9l-7 7-7-7","stroke-width":"3"})],-1))])]),o("div",Rp,[v[21]||(v[21]=o("div",{class:"flex items-center gap-2 ml-4"},[o("div",{class:"w-1.5 h-4 bg-red-600 rounded-full"}),o("label",{class:"text-[11px] font-[1000] uppercase tracking-[0.25em] text-red-600"}," Sequence & Reset Control Center ")],-1)),o("div",Cp,[o("div",Sp,[ve(o("select",{"onUpdate:modelValue":v[2]||(v[2]=W=>m.value=W),class:y(["w-full h-[60px] px-6 rounded-2xl border-2 outline-none font-bold text-sm appearance-none cursor-pointer transition-all pr-12",e.isDark?"bg-slate-900 border-white/10 focus:border-red-500 text-slate-200":"bg-white border-slate-200 focus:border-red-500 shadow-sm"])},[...v[18]||(v[18]=[o("option",{value:"asc"},"Sequence: A to Z",-1),o("option",{value:"desc"},"Sequence: Z to A",-1)])],2),[[it,m.value]]),v[19]||(v[19]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-500"},[o("svg",{class:"w-5 h-5 group-hover:rotate-180 transition-transform duration-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))]),o("button",{onClick:i,class:"h-[60px] w-full px-1 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-600/20 group font-black uppercase tracking-widest text-[10px]"},[...v[20]||(v[20]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 group-hover:rotate-180 transition-transform duration-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),o("span",{class:"whitespace-nowrap"},"Reset",-1)])])])])],2),o("div",Ep,[o("div",{class:y(["absolute inset-0 h-[1px] my-auto",e.isDark?"bg-white/5":"bg-slate-200"])},null,2),v[22]||(v[22]=o("div",{class:"absolute h-[2px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"},null,-1)),o("div",{class:y(["relative px-6 py-1 rounded-full border-2 text-[8px] font-black uppercase tracking-[0.4em] transition-all",e.isDark?"bg-[#020617] border-white/10 text-slate-500":"bg-transparent-50 border-slate-200 text-slate-400"])}," Xtall Versi Indonesia ",2)]),o("main",Ip,[(S(!0),I(X,null,ue(ie.value,(W,Pe)=>(S(),I("div",{key:W.code,class:"flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch animate-entry",style:Pt({animationDelay:Pe*70+"ms"})},[o("div",Bp,[x(W)?(S(),I("div",{key:0,onClick:ge=>ne(x(W).name),class:y(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/300 border-white/65 hover:border-cyan-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-cyan-400"])},[v[23]||(v[23]=ta('<div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-sky-400 to cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" data-v-4ca8d73f></div><div class="flex items-center gap-2 mb-2" data-v-4ca8d73f><svg class="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" data-v-4ca8d73f><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-4ca8d73f></path></svg><span class="text-[9px] font-black uppercase text-cyan-500 tracking-widest" data-v-4ca8d73f>Previous</span></div>',2)),o("p",{class:y(["text-xs font-bold truncate group-hover:translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},K(x(W).name),3),v[24]||(v[24]=o("div",{class:"absolute bottom-[-10px] right-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🧬",-1))],10,Tp)):(S(),I("div",Kp,[...v[25]||(v[25]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))]),o("div",Op,[o("div",{class:y(["absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",W.type==="UPGRADE"?"bg-purple-600":"bg-blue-600"])},null,2),o("div",{class:y(["h-full relative rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 shadow-2xl",e.isDark?"bg-[#0b1226]/90 border-white/80 group-hover:border-white/80":"bg-white border-slate-200 group-hover:border-blue-400"])},[o("div",Np,[o("div",Gp,[o("div",Lp,[v[26]||(v[26]=o("div",{class:"absolute inset-0 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 animate-pulse"},null,-1)),o("div",{class:y(["relative w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-2 flex items-center justify-center shadow-inner transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110",e.isDark?"bg-slate-950 border-white/70":"bg-slate-50 border-slate-200"])},[o("img",{src:M(W),class:"w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]",alt:W.type},null,8,Fp)],2),o("div",{class:y(["absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-[10px] font-black",P(W.type)])},K(W.type.charAt(0)),3)]),o("div",Up,[o("div",jp,[v[27]||(v[27]=o("div",{class:"flex flex-wrap items-center gap-3"},null,-1)),o("h3",{class:y(["text-2xl md:text-4xl font-[1000] tracking-tighter leading-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400",J(W)])},K(W.name),3)]),o("div",{class:y(["p-6 rounded-3xl border-2 transition-all duration-500 group-hover:scale-[1.02]",e.isDark?"bg-white/[0.02] border-white/5 group-hover:bg-white/[0.04]":"bg-slate-50 border-slate-100"])},[o("div",Hp,[(S(!0),I(X,null,ue(te(W.view),(ge,Ie)=>(S(),I("div",{key:Ie,class:"flex items-center gap-4 group/item"},[ge.includes("Dengan")?Re("",!0):(S(),I("div",Wp)),o("p",{class:y(["text-xs md:text-sm font-bold tracking-tight transition-all duration-300",ge.includes("Dengan")?"text-green-500 italic":ge.includes("-")?"text-red-500":e.isDark?"text-slate-300 group-hover/item:text-white":"text-slate-600 group-hover/item:text-slate-900"])},K(ge),3)]))),128))])],2)])])]),o("div",{class:y(["px-8 py-5 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-4",e.isDark?"bg-white/[0.02] border-white/5":"bg-slate-50 border-slate-100"])},[o("div",Jp,[o("div",Qp,[o("span",{class:y(["text-[10px] font-black tracking-widest transition-colors",e.isDark?"text-slate-400":"text-slate-500"])}," TYPE XTALL ",2),o("span",{class:y(["text-[9px] font-black px-2.5 py-0.5 rounded-full border transition-all uppercase tracking-tighter",P(W.type)])},K(W.type),3)]),v[28]||(v[28]=o("div",{class:"h-8 w-[1px] bg-white/10 hidden sm:block"},null,-1))]),xe(fe,{to:"/xtall/"+W.code,class:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 text-center"},{default:$e(()=>[...v[29]||(v[29]=[Qe(" Details ",-1)])]),_:1},8,["to"])],2)],2)]),o("div",Yp,[w(W).length?(S(!0),I(X,{key:0},ue(w(W),ge=>(S(),I("div",{key:ge.code,onClick:Ie=>ne(ge.name),class:y(["flex-shrink-0 w-[200px] lg:w-full p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group shadow-xl",e.isDark?"bg-slate-900/30 border-white/65 hover:border-purple-500/50 hover:bg-slate-900/60":"bg-white border-slate-200 hover:border-purple-400"])},[v[30]||(v[30]=ta('<div class="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-600 to-yellow-700 opacity-40 group-hover:opacity-100 transition-opacity" data-v-4ca8d73f></div><div class="flex items-center justify-end gap-2 mb-2 text-right" data-v-4ca8d73f><span class="text-[9px] font-black uppercase text-purple-500 tracking-widest" data-v-4ca8d73f>Next Upgrade</span><svg class="w-3 h-3 text-purple-500 rotate-180" fill="currentColor" viewBox="0 0 24 24" data-v-4ca8d73f><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" data-v-4ca8d73f></path></svg></div>',2)),o("p",{class:y(["text-xs font-bold truncate text-right group-hover:-translate-x-1 transition-transform duration-300",e.isDark?"text-slate-300":"text-slate-700"])},K(ge.name),3),v[31]||(v[31]=o("div",{class:"absolute bottom-[-10px] left-[-10px] text-4xl opacity-[0.03] group-hover:scale-125 transition-transform"},"🚀",-1))],10,Vp))),128)):(S(),I("div",qp,[...v[32]||(v[32]=[o("div",{class:"w-[2px] h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"},null,-1)])]))])],4))),128)),L.value.length===0?(S(),I("div",zp,[v[33]||(v[33]=ta('<div class="inline-flex relative mb-8" data-v-4ca8d73f><div class="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-ping" data-v-4ca8d73f></div><div class="text-8xl relative" data-v-4ca8d73f>🔎</div></div><h2 class="text-3xl font-[1000] uppercase italic tracking-tighter" data-v-4ca8d73f>Xtall not found</h2><p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4" data-v-4ca8d73f>Search xtall name with correct Indonesian name.</p>',3)),o("button",{onClick:B,class:"mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-blue/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"},"Reset")])):Re("",!0),o("div",Zp,[Me.value>1&&d.value<1e3?(S(),I("nav",Xp,[o("button",{onClick:v[3]||(v[3]=W=>u.value--),disabled:u.value===1,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," « ",8,$p),o("div",eg,[(S(!0),I(X,null,ue(Le.value,W=>(S(),I(X,{key:W},[W!=="..."?(S(),I("button",{key:0,onClick:Pe=>u.value=W,class:y(["w-14 h-14 rounded-2xl font-black text-lg transition-all duration-300 border-2 flex items-center justify-center",u.value===W?"bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-110 -translate-y-1":e.isDark?"bg-slate-900 border-white/5 text-blue-500 hover:border-blue-500":"bg-white border-slate-100 text-blue-600 hover:border-blue-200 shadow-sm"])},K(W),11,tg)):(S(),I("span",ng,"..."))],64))),128))]),o("button",{onClick:v[4]||(v[4]=W=>u.value++),disabled:u.value===Me.value,class:"w-14 h-14 flex items-center justify-center rounded-2xl border-2 font-black disabled:opacity-30 transition-all duration-300 shadow-sm isDark ? 'bg-slate-900 border-white/10 text-slate-400 hover:border-blue-500 hover:text-blue-500' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-500'"}," » ",8,ag)])):Re("",!0),d.value<100?(S(),I("button",{key:1,onClick:v[5]||(v[5]=W=>d.value=9999),class:"group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] shadow-xl"},[...v[34]||(v[34]=[o("div",{class:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"},null,-1),o("span",{class:"relative text-xs font-[1000] text-white uppercase tracking-[0.3em] italic"},"Explore All",-1)])])):Re("",!0),o("div",ig,[v[35]||(v[35]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1)),o("p",lg,"Page "+K(u.value)+" of "+K(Me.value),1),v[36]||(v[36]=o("div",{class:"h-[1px] w-12 bg-blue-500/30"},null,-1))])])])]),o("div",og,[o("div",{class:y(["px-6 py-3 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500",e.isDark?"bg-slate-900/80 border-white/10":"bg-white/80 border-slate-200 shadow-2xl"])},[...v[37]||(v[37]=[o("div",{class:"flex items-center gap-4"},[o("div",{class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),o("span",{class:"text-[9px] font-black uppercase tracking-widest opacity-60"},"Versi Nama Indonesia")],-1)])],2)])],2)}}},rg=Wt(sg,[["__scopeId","data-v-4ca8d73f"]]),Wl=310,Wa={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Ja={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5},Lt=e=>Math.floor(.025*Math.pow(e,4)+2*e),cg=(e,t,n)=>{let a=Math.floor((1-t/100)*Lt(e));for(let i=e+1;i<n;i++)a+=Lt(i);return a},Qa=(e,t,n)=>{let a=n,i=(1-t/100)*Lt(e);if(n<i){let l=t/100*Lt(e)+n;return[e,Math.floor(100*l/Lt(e))]}else{a-=i;let l=e+1;for(;Lt(l)<=a;)a-=Lt(l),l+=1;let s=Math.floor(100*a/Lt(l));return[l,s]}},ug={class:"space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4"},dg={class:"flex flex-col items-center gap-6 animate-bounce-slow"},pg={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},gg={class:"lg:col-span-2 space-y-6"},mg={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},fg={class:"group"},hg={class:"group"},Ag={class:"group"},bg={key:0,class:"space-y-8 animate-in slide-in-from-top-2"},kg={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},vg={class:"relative group select-container"},xg={class:"relative"},yg=["value"],wg={class:"relative group select-container"},Pg={class:"relative"},Mg=["value"],_g={class:"flex flex-wrap gap-8 ml-2"},Dg={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},Rg={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},Cg={key:1,class:"space-y-8 animate-in slide-in-from-top-2"},Sg={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},Eg={class:"relative group select-container"},Ig={class:"relative"},Bg=["value"],Tg={class:"lg:col-span-1"},Kg={class:"space-y-6 sticky top-8"},Og={class:"relative z-10 space-y-8"},Ng={class:"result-item"},Gg={class:"text-2xl font-black tabular-nums tracking-tighter"},Lg={class:"pt-8 border-t border-white/20 result-item"},Fg={class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-2"},Ug={class:"flex items-baseline gap-2"},jg={class:"text-6xl font-black italic tracking-tighter drop-shadow-lg block"},Hg={class:"text-xl font-bold opacity-70"},Wg={class:"bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item"},Jg={class:"text-sm font-black tabular-nums tracking-wide"},Qg={class:"absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text"},Yg={class:"space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll"},Vg={class:"text-[11px] font-black opacity-40"},qg={class:"text-right"},zg={class:"text-[10px] font-bold opacity-50 ml-1"},Zg={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=oe("mq"),n=oe(1),a=oe(0),i=oe(Wl),l=oe(!0),s=oe(!1),r=Object.keys(Ja),c=oe(1),p=oe(r.length-1),u=oe(Object.keys(Wa)[1]),d=oe(1),m=ae(()=>{let k=[],h=0;return r.forEach((C,B)=>{C.startsWith("Chapter")?h++:Ja[C]!==""&&k.push({id:B,label:`CH${h} - ${C}`})}),k}),A=ae(()=>{const k=Number(n.value)||1,h=Number(a.value)||0,C=Number(i.value)||Wl,B=cg(k,h,C);let M=0;for(let J=c.value;J<=p.value;J++){const te=Ja[r[J]];typeof te=="number"&&(M+=te),r[J].includes("Coenubia")&&!l.value&&(M+=125e5)}const[P,x]=Qa(k,h,M);let w=[];if(s.value&&M>0){let J=k,te=h;for(let ne=1;ne<=20;ne++){const[L,ie]=Qa(J,te,M);if(w.push({run:ne,lv:L,p:ie}),J=L,te=ie,J>=C)break}}const Z=(Wa[u.value]||0)*(d.value||0),[q,ye]=Qa(k,h,Z);return{xpNeeded:B,totalMqXP:M,resLv:P,resP:x,diaryRuns:w,sqLv:q,sqPercent:ye,sqXP:Z}});return(k,h)=>(S(),I("div",ug,[o("div",dg,[h[11]||(h[11]=o("div",{class:"text-center"},[o("h1",{class:"text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl"}," MQ Calculator "),o("p",{class:"text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse"},"Timi DB System")],-1)),o("div",{class:y(["p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl",e.isDark?"bg-white/5 border-white/10":"bg-slate-200/50 border-slate-300"])},[o("button",{onClick:h[0]||(h[0]=C=>t.value="mq"),class:y(["tab-btn",t.value==="mq"?"tab-active":""])},"Main Quest",2),o("button",{onClick:h[1]||(h[1]=C=>t.value="npc"),class:y(["tab-btn",t.value==="npc"?"tab-active":""])},"NPC Quest",2)],2)]),o("div",pg,[o("div",gg,[o("div",{class:y(["p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/60 border-white/40"])},[o("div",mg,[o("div",fg,[h[12]||(h[12]=o("label",{class:"label-text"},"Current Lv",-1)),ve(o("input",{"onUpdate:modelValue":h[2]||(h[2]=C=>n.value=C),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,n.value,void 0,{number:!0}]])]),o("div",hg,[h[13]||(h[13]=o("label",{class:"label-text"},"Percent %",-1)),ve(o("input",{"onUpdate:modelValue":h[3]||(h[3]=C=>a.value=C),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,a.value,void 0,{number:!0}]])]),o("div",Ag,[h[14]||(h[14]=o("label",{class:"label-text text-pink-500"},"Target Lv",-1)),ve(o("input",{"onUpdate:modelValue":h[4]||(h[4]=C=>i.value=C),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(S(),I("div",bg,[o("div",kg,[o("div",vg,[h[16]||(h[16]=o("label",{class:"label-text text-indigo-400"},"Start From",-1)),o("div",xg,[ve(o("select",{"onUpdate:modelValue":h[5]||(h[5]=C=>c.value=C),class:y(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(S(!0),I(X,null,ue(m.value,C=>(S(),I("option",{key:C.id,value:C.id,class:"dropdown-item"},K(C.label),9,yg))),128))],2),[[it,c.value]]),h[15]||(h[15]=o("div",{class:"select-arrow text-indigo-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",wg,[h[18]||(h[18]=o("label",{class:"label-text text-indigo-400"},"End At",-1)),o("div",Pg,[ve(o("select",{"onUpdate:modelValue":h[6]||(h[6]=C=>p.value=C),class:y(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(S(!0),I(X,null,ue(m.value,C=>(S(),I("option",{key:C.id,value:C.id,class:"dropdown-item"},K(C.label),9,Mg))),128))],2),[[it,p.value]]),h[17]||(h[17]=o("div",{class:"select-arrow text-indigo-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])]),o("div",_g,[o("label",Dg,[ve(o("input",{type:"checkbox","onUpdate:modelValue":h[7]||(h[7]=C=>l.value=C),class:"w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer"},null,512),[[Pl,l.value]]),h[19]||(h[19]=o("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),o("label",Rg,[ve(o("input",{type:"checkbox","onUpdate:modelValue":h[8]||(h[8]=C=>s.value=C),class:"w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer"},null,512),[[Pl,s.value]]),h[20]||(h[20]=o("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])])])):(S(),I("div",Cg,[o("div",Sg,[o("div",Eg,[h[22]||(h[22]=o("label",{class:"label-text text-emerald-400"},"Select Quest",-1)),o("div",Ig,[ve(o("select",{"onUpdate:modelValue":h[9]||(h[9]=C=>u.value=C),class:y(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(S(!0),I(X,null,ue(Ne(Wa),(C,B)=>(S(),I("option",{key:B,value:B,class:"dropdown-item"},K(B),9,Bg))),128))],2),[[it,u.value]]),h[21]||(h[21]=o("div",{class:"select-arrow text-emerald-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",null,[h[23]||(h[23]=o("label",{class:"label-text text-emerald-400"},"Amount (Stack/Times)",-1)),ve(o("input",{"onUpdate:modelValue":h[10]||(h[10]=C=>d.value=C),type:"number",class:y(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[qe,d.value,void 0,{number:!0}]])])])]))],2)]),o("div",Tg,[o("div",Kg,[o("div",{class:y(["p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive",t.value==="mq"?"bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30":"bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30"])},[o("div",Og,[o("div",Ng,[h[24]||(h[24]=o("p",{class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-1"},"XP Required to Target",-1)),o("h3",Gg,K(A.value.xpNeeded.toLocaleString()),1)]),o("div",Lg,[o("p",Fg,K(t.value==="mq"?"Result After 1 Run":"Result After Turn-in"),1),o("div",Ug,[o("span",jg," Lv "+K(t.value==="mq"?A.value.resLv:A.value.sqLv),1),o("span",Hg,K(t.value==="mq"?A.value.resP:A.value.sqPercent)+"% ",1)])]),o("div",Wg,[h[25]||(h[25]=o("p",{class:"text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1"},"Total XP Gained",-1)),o("p",Jg,K((t.value==="mq"?A.value.totalMqXP:A.value.sqXP).toLocaleString())+" XP ",1)])]),o("div",Qg,K(t.value),1)],2),t.value==="mq"&&s.value&&A.value.diaryRuns.length>0?(S(),I("div",{key:0,class:y(["p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4",e.isDark?"bg-white/5 border-white/10":"bg-white border-slate-200 shadow-lg"])},[h[26]||(h[26]=o("p",{class:"text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2"},"Diary Projection",-1)),o("div",Yg,[(S(!0),I(X,null,ue(A.value.diaryRuns,C=>(S(),I("div",{key:C.run,class:"flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors"},[o("span",Vg,"RUN #"+K(C.run),1),o("div",qg,[o("span",{class:y(["font-black",e.isDark?"text-white":"text-slate-800"])},"Lv "+K(C.lv),3),o("span",zg,K(C.p)+"%",1)])]))),128))])],2)):Re("",!0)])])])]))}},Xg=Wt(Zg,[["__scopeId","data-v-c84703e0"]]),$g=280,Jl=54,em=55,Ql=265,tm=300,Bt=510,Tt=277,{floor:Be,min:nm,max:am}=Math,im=(e,t,n,a,i)=>{const l=Be(n*(100+(i||0))/100+(a||0));return(e||0)+Be((t||0)/2)+Be(l/6)},lm=(e,t,n,a,i,l)=>{const s=Be(a*(100+(l||0))/100+(i||0)),r=(50+5*(e||0))/100,c=10+(t||0)-(n||0)+Be(s/10);return nm(100,am(0,Be(r*c)))},om=(e,t,n,a,i)=>{let l=Be((e||0)*(1+(t||0)*.01+(n||0)*.02));const s=i;switch(a){case"Armor":l+=Be(s.VIT/10);break;case"1H Sword":case"Bow":l+=Be((s.DEX+s.STR)/20);break;case"2H Sword":l+=Be(s.STR/10);break;case"Bowgun":l+=Be(s.DEX/10);break;case"Staff":l+=Be(s.INT/10);break;case"Magic Device":l+=Be((s.INT+s.AGI)/20);break;case"Knuckle":l+=Be(s.AGI/10);break;case"Halberd":l+=Be((s.STR+s.AGI)/20);break;case"Katana":l+=Be((s.DEX+s.AGI)/20);break}return l},sm={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},rm={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},cm={class:"lg:col-span-4 space-y-6 animate-float"},um={class:"grid grid-cols-2 gap-x-4 gap-y-5"},dm={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},pm=["onUpdate:modelValue"],gm={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},mm={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},fm=["onUpdate:modelValue"],hm={class:"lg:col-span-4 space-y-6"},Am={class:"space-y-4"},bm={class:"relative group select-container"},km={class:"relative overflow-hidden rounded-xl"},vm=["value"],xm={class:"grid grid-cols-2 gap-4"},ym={class:"group"},wm={class:"group"},Pm={class:"space-y-3 pt-2"},Mm={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},_m=["onUpdate:modelValue"],Dm={class:"lg:col-span-4 space-y-6 animate-float-slow"},Rm={class:"flex items-baseline gap-2"},Cm={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},Sm={class:"flex items-baseline gap-2"},Em={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},Im={class:"space-y-4"},Bm={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},Tm={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},Km={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},Om={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=ae(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=hn({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:$g,createSkill:10,itemDiff:Ql,basePot:Jl,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(p=>i.stats[p]=0),i.craftType==="Armor"?(i.stats.VIT=Bt,i.stats.TEC=Tt,i.itemDiff=Ql,i.basePot=Jl):(i.itemDiff=tm,i.basePot=em,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=Bt,i.stats.STR=Tt):i.craftType==="2H Sword"?(i.stats.STR=Bt,i.stats.DEX=Tt):i.craftType==="Staff"?(i.stats.INT=Bt,i.stats.TEC=Tt):i.craftType==="Magic Device"?(i.stats.INT=Bt,i.stats.AGI=Tt):i.craftType==="Knuckle"?(i.stats.AGI=Bt,i.stats.DEX=Tt):i.craftType==="Halberd"?(i.stats.STR=Bt,i.stats.AGI=Tt):i.craftType==="Katana"&&(i.stats.DEX=Bt,i.stats.AGI=Tt))};tn(()=>l());const s=ae(()=>im(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),r=ae(()=>lm(i.createSkill,s.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),c=ae(()=>om(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(p,u)=>(S(),I("div",sm,[u[17]||(u[17]=o("div",{class:"text-center py-4 animate-bounce-slow"},[o("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),o("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),o("div",rm,[o("div",cm,[o("div",{class:y(n.value)},[u[3]||(u[3]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),o("div",um,[(S(!0),I(X,null,ue(i.stats,(d,m)=>(S(),I("div",{key:m,class:"transition-all hover:scale-105"},[o("label",dm,K(m),1),ve(o("input",{type:"number","onUpdate:modelValue":A=>i.stats[m]=A,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,pm),[[qe,i.stats[m],void 0,{number:!0}]])]))),128))]),o("div",gm,[(S(),I(X,null,ue([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>o("div",{key:d[0]},[o("label",mm,K(d[1]),1),ve(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,fm),[[qe,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),o("div",hm,[o("div",{class:y([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=o("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),o("div",Am,[o("div",bm,[u[5]||(u[5]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),o("div",km,[ve(o("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(S(),I(X,null,ue(a,d=>o("option",{key:d,value:d,class:"dropdown-item"},K(d),9,vm)),64))],544),[[it,i.craftType]]),u[4]||(u[4]=o("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),o("div",xm,[o("div",ym,[u[6]||(u[6]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),ve(o("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[qe,i.prof,void 0,{number:!0}]])]),o("div",wm,[u[7]||(u[7]=o("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),ve(o("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[qe,i.level,void 0,{number:!0}]])])]),o("div",Pm,[(S(),I(X,null,ue([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>o("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[o("span",Mm,K(d[1]),1),ve(o("input",{type:"number","onUpdate:modelValue":m=>i[d[0]]=m,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,_m),[[qe,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),o("div",Dm,[o("div",{class:y([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=o("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=o("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),o("div",Rm,[o("span",{class:y(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",r.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},K(r.value),3),u[9]||(u[9]=o("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),o("div",Cm,[o("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:Pt({width:r.value+"%"})},null,4)])],2),o("div",{class:y([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=o("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=o("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),o("div",Sm,[o("span",Em,K(c.value),1),u[12]||(u[12]=o("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),o("div",{class:y(n.value)},[o("div",Im,[o("div",Bm,[o("span",null,"Diff Status: "+K(s.value)+" / "+K(i.itemDiff),1)]),s.value<i.itemDiff?(S(),I("div",Tm,[...u[15]||(u[15]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(S(),I("div",Km,[...u[16]||(u[16]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),o("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},Nm=Wt(Om,[["__scopeId","data-v-676556a4"]]),Gm={class:"fixed inset-0 pointer-events-none z-0"},Lm={key:0,class:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"},Fm={key:1,class:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"},Um={key:0,class:"relative z-10 max-w-5xl mx-auto p-6 md:p-20 animate-fade-in"},jm={class:"grid lg:grid-cols-12 gap-12 items-start"},Hm={class:"lg:col-span-5 space-y-2 animate-slide-right"},Wm=["src"],Jm={class:"lg:col-span-7 space-y-8 animate-slide-left"},Qm={class:"flex items-center gap-4"},Ym={class:"text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]"},Vm={class:"space-y-5"},qm={key:0,class:"mt-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)] group-hover/stat:scale-150 transition-transform flex-shrink-0"},zm={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Zm={class:"text-sm font-bold flex items-center gap-2"},Xm={class:"text-sm font-bold flex items-center gap-2 justify-between"},$m={key:1,class:"h-screen flex items-center justify-center"},ef={__name:"XtallDetail",props:["id","isDark"],setup(e){const t=e,n=Jn(),a=ae(()=>Ut.find(k=>String(k.code)===String(t.id))),i=k=>{if(!k)return"NORMAL";let h=k,C=0;for(;h.link&&C<10;){const B=Ut.find(M=>String(M.code)===String(h.link));if(B)h=B,C++;else break}return h.type?.toUpperCase()},l=k=>{const h=i(a.value);return k?.toUpperCase()==="UPGRADE"||k?.toUpperCase()==="ENHANCER"?"text-gray-400":{WEAPON:"text-red-500",ARMOR:"text-green-500",NORMAL:"text-sky-500",ADDITIONAL:"text-yellow-500",SPECIAL:"text-purple-500"}[h]||"text-cyan-500"},s=k=>{const h=i(a.value);return{NORMAL:"bg-blue-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",ADDITIONAL:"bg-yellow-600",SPECIAL:"bg-cyan-600"}[h]||"bg-cyan-600"},r=k=>{const h=k?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?"bg-purple-600 text-white border-purple-400":({NORMAL:"bg-blue-600",ADDITIONAL:"bg-yellow-600",WEAPON:"bg-red-600",ARMOR:"bg-green-600",SPECIAL:"bg-cyan-600"}[h]||"bg-slate-700")+" text-white border-white/20"},c=k=>{const h=k?.toUpperCase();return h==="UPGRADE"||h==="ENHANCER"?`${i(a.value)} ENHANCER`:h},p=ae(()=>a.value?.link?Ut.find(k=>String(k.code)===String(a.value.link)):null),u=ae(()=>a.value?Ut.find(k=>String(k.link)===String(a.value.code)):null),d=k=>{n.push(`/xtall/${k}`)};Mt(()=>t.id,()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=k=>k?Array.isArray(k)?k:k.split(/,|\n/).map(h=>h.trim()).filter(h=>h):[],A=k=>{const h=k?.toUpperCase(),C=i(a.value);return h==="UPGRADE"||h==="ENHANCER"?{NORMAL:Fn,WEAPON:Ti,ARMOR:Ki,ADDITIONAL:Oi,SPECIAL:Ni}[C]||Fn:{NORMAL:Ln,WEAPON:Si,ARMOR:Ii,ADDITIONAL:Ei,SPECIAL:Bi}[C]||Ln};return(k,h)=>(S(),I("div",{class:y(["min-h-screen relative overflow-hidden font-sans transition-all duration-700",e.isDark?"bg-[#020617] text-slate-200":"bg-slate-50 text-slate-900"])},[o("div",Gm,[o("div",{class:y(["absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.03]",e.isDark?"brightness-200":"invert opacity-[0.02]"])},null,2),e.isDark?(S(),I("div",Lm)):Re("",!0),e.isDark?(S(),I("div",Fm)):Re("",!0)]),a.value?(S(),I("div",Um,[o("button",{onClick:h[0]||(h[0]=C=>k.$router.push("/xtall")),class:"group flex items-center gap-3 mb-10 transition-all hover:-translate-x-2"},[...h[3]||(h[3]=[o("div",{class:"w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"},[o("svg",{class:"w-5 h-5 text-cyan-500 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M15 19l-7-7 7-7","stroke-width":"3"})])],-1),o("span",{class:"text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-cyan-500"},"Back to Database",-1)])]),o("div",jm,[o("div",Hm,[o("div",{class:y(["relative aspect-square rounded-[3.5rem] border-4 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 group",e.isDark?"bg-slate-900 border-white/20":"bg-white border-slate-300"])},[o("div",{class:y(["absolute inset-0 opacity-30 blur-3xl animate-pulse transition-colors duration-700",s(a.value.type)])},null,2),o("img",{src:A(a.value.type),class:"relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110 animate-float"},null,8,Wm),o("div",{class:y(["absolute bottom-8 px-6 py-2 rounded-2xl border-2 font-black text-[10px] tracking-widest uppercase shadow-2xl whitespace-nowrap transition-all duration-500 group-hover:scale-110",r(a.value.type)])},K(c(a.value.type)),3)],2)]),o("div",Jm,[o("div",null,[o("p",{class:y(["text-xs font-black uppercase tracking-[0.4em] mb-2 drop-shadow-sm",l(a.value.name)])},K(c(a.value.type)),3),o("h1",{class:y(["text-5xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none mb-4 drop-shadow-2xl transition-all duration-500 brightness-100 saturate-70",l(a.value.type),e.isDark?"[-webkit-text-stroke:1px_white]":"[-webkit-text-stroke:1px_black]"]),style:{maskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)",webkitMaskImage:"linear-gradient(to bottom, black 10%, rgba(0,0,0,0.5) 100%)"}},K(a.value.name),3),o("div",Qm,[h[4]||(h[4]=o("div",{class:"h-[3px] w-16 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"},null,-1)),o("p",Ym,"System ID: #"+K(a.value.code),1)])]),o("div",{class:y(["p-8 md:p-12 rounded-[3rem] border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden transition-all hover:border-cyan-500/50",e.isDark?"bg-slate-900/80 border-white/10 shadow-black":"bg-white border-slate-200 shadow-slate-300"])},[h[5]||(h[5]=o("div",{class:"absolute top-0 right-0 p-8 text-8xl opacity-[0.05] grayscale pointer-events-none animate-spin-slow"},"✨",-1)),h[6]||(h[6]=o("h3",{class:"text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-8 flex items-center gap-3"},[o("span",{class:"w-2 h-2 bg-cyan-500 rounded-full animate-ping"}),Qe(" Status/ Effect ")],-1)),o("div",Vm,[(S(!0),I(X,null,ue(m(a.value.view),(C,B)=>(S(),I("div",{key:B,class:"flex items-start gap-4 group/stat animate-fade-in",style:Pt({animationDelay:B*100+"ms"})},[C.includes("Dengan")?Re("",!0):(S(),I("div",qm)),o("p",{class:y(["text-base md:text-lg font-bold tracking-tight transition-colors",C.includes("Dengan")?"text-green-500 italic":C.includes("-")?"text-red-500":e.isDark?"text-slate-200 group-hover/stat:text-cyan-400":"text-slate-700"])},K(C),3)],4))),128))])],2),o("div",zm,[p.value?(S(),I("div",{key:0,onClick:h[1]||(h[1]=C=>d(p.value.code)),class:y(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-900/20":"bg-white border-slate-200 hover:border-cyan-500 shadow-slate-200"])},[h[8]||(h[8]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Previous Model",-1)),o("p",Zm,[h[7]||(h[7]=o("span",{class:"text-cyan-500 group-hover:-translate-x-2 transition-transform"},"←",-1)),Qe(" "+K(p.value.name),1)])],2)):Re("",!0),u.value?(S(),I("div",{key:1,onClick:h[2]||(h[2]=C=>d(u.value.code)),class:y(["group p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl",e.isDark?"bg-slate-900 border-white/5 hover:border-purple-500/50 hover:shadow-purple-900/20":"bg-white border-slate-200 hover:border-purple-500 shadow-slate-200"])},[h[10]||(h[10]=o("p",{class:"text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2"},"Advanced Upgrade",-1)),o("p",Xm,[Qe(K(u.value.name)+" ",1),h[9]||(h[9]=o("span",{class:"text-purple-500 group-hover:translate-x-2 transition-transform"},"→",-1))])],2)):Re("",!0)])])])])):(S(),I("div",$m,[...h[11]||(h[11]=[o("div",{class:"relative w-24 h-24"},[o("div",{class:"absolute inset-0 border-4 border-cyan-500/20 rounded-full"}),o("div",{class:"absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"})],-1)])]))],2))}},tf=Wt(ef,[["__scopeId","data-v-d58076e3"]]),nf={"Base Stats":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],"ATK & DEF":[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"DEF / DEF%",value:".DEF"},{label:"MDEF / MDEF%",value:"MDEF"}],"Stability, Accuracy, Dodge":[{label:"Stability",value:"Stability"},{label:"Akurasi",value:"Akurasi"},{label:"Dodge",value:"Dodge"}],Critical:[{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"}],Speed:[{label:"ASPD / ASPD%",value:"ASPD"},{label:"CSPD / CSPD%",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"}],"HP & MP":[{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"},{label:"Natural MP Regen%",value:"Natural MP Regen"},{label:"Natural HP Regen%",value:"Natural HP Regen"},{label:"Attack MP Recovery / AMPR%",value:"Attack MP Recovery"}],"Weapon ATK & Element":[{label:"Weapon ATK%",value:"Weapon ATK"},{label:"DTE (Elements)%",value:"stronger against"}],"Element Resistance":[{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"}],"Barrier & Defense Effect":[{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Aggro%",value:"Aggro"}],"Offensive Effect":[{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Additional Melee%",value:"Tambahan Fisik"},{label:"Additional Magic%",value:"Tambahan Sihir"},{label:"Antisipasi%",value:"Antisipasi"},{label:"Guard Break%",value:"Guard Break"}],"Reduce DMG":[{label:"Reduksi DMG (Sekitar Pemain)%",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)%",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)%",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)%",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)%",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)%",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)%",value:"Reduksi DMG (Peluru)"}],"Other Stat":[{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"},{label:"Tumble Unavailable%",value:"Tumble Unavailable"},{label:"Evasion Recharge%",value:"Evasion Recharge"},{label:"Refleks%",value:"Refleks"},{label:"Recoil%",value:"Recoil"}]},Yl={"Base Stats":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},"ATK & DEF":{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},"Stability, Accuracy, Dodge":{text:"text-blue-400",border:"border-blue-500/30",accent:"text-blue-500 focus:ring-blue-500"},Critical:{text:"text-red-400",border:"border-red-500/30",accent:"text-red-500 focus:ring-red-500"},Speed:{text:"text-pink-400",border:"border-pink-500/30",accent:"text-pink-500 focus:ring-pink-500"},"HP & MP":{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"Weapon ATK & Element":{text:"text-yellow-400",border:"border-yellow-500/30",accent:"text-yellow-500 focus:ring-yellow-500"},"Element Resistance":{text:"text-amber-500",border:"border-amber-500/30",accent:"text-amber-500 focus:ring-amber-500"},"Barrier & Defense Effect":{text:"text-green-500",border:"border-green-500/30",accent:"text-green-500 focus:ring-green-500"},"Offensive Effect":{text:"text-indigo-400",border:"border-indigo-500/30",accent:"text-indigo-500 focus:ring-indigo-500"},"Reduce DMG":{text:"text-teal-400",border:"border-teal-500/30",accent:"text-teal-500 focus:ring-teal-500"},"Other Stat":{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},af=[{label:"Weapon Crystas",value:"WEAPON",icon:Si,color:"red"},{label:"Weapon Enhancer Crystas",value:"WEAPON_UPGRADE",icon:Ti,color:"red"},{label:"Armor Crystas",value:"ARMOR",icon:Ii,color:"green"},{label:"Armor Enhancer Crystas",value:"ARMOR_UPGRADE",icon:Ki,color:"green"},{label:"Additional Crystas",value:"ADDITIONAL",icon:Ei,color:"yellow"},{label:"Additional Enhancer Crystas",value:"ADDITIONAL_UPGRADE",icon:Oi,color:"yellow"},{label:"Normal Crystas",value:"NORMAL",icon:Ln,color:"blue"},{label:"Normal Enhancer Crystas",value:"NORMAL_UPGRADE",icon:Fn,color:"blue"},{label:"Special Crystas",value:"SPECIAL",icon:Bi,color:"pink"},{label:"Special Enhancer Crystas",value:"SPECIAL_UPGRADE",icon:Ni,color:"pink"}],lf={class:"max-w-[1600px] mx-auto mb-6 flex items-center justify-between"},of={class:"max-w-[1600px] mx-auto mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"},sf={class:"text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic leading-[0.8]"},rf={class:"text-2xl md:text-2xl font-[100] tracking-tighter uppercase italic leading-[0.8]"},cf={class:"max-w-[1600px] mx-auto space-y-5"},uf={class:"grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"},df=["onClick"],pf=["src","alt"],gf={key:0,class:"absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"},mf={class:"flex items-center gap-1 mb-4 ml-2"},ff={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2"},hf=["onClick"],Af={class:"flex items-start justify-between gap-2 mb-4"},bf={key:0,class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},kf={class:"flex gap-1"},vf=["onUpdate:modelValue"],xf=["onUpdate:modelValue"],yf=["onUpdate:modelValue"],wf={__name:"XtallAdvancedSearch",props:{isDark:Boolean},setup(e){const t=Jn(),n=Ra(),a=hn({stats:{},types:[]});tn(()=>{if(n.query.filter)try{const p=JSON.parse(n.query.filter);p?.stats&&(a.stats=p.stats),p?.types&&(a.types=p.types)}catch{console.warn("Invalid filter data")}});function i(){t.back()}function l(){Object.keys(a.stats).forEach(p=>delete a.stats[p]),a.types=[]}function s(p){a.stats[p]?delete a.stats[p]:a.stats[p]={sign:"+",op:">=",value:null}}function r(p){const u=a.types.indexOf(p);u>-1?a.types.splice(u,1):a.types.push(p)}function c(){t.push({name:"xtall",query:{filter:JSON.stringify(a)}})}return(p,u)=>(S(),I("div",{class:y(["p-4 md:p-8 font-sans transition-all duration-700 min-h-screen",e.isDark?"bg-[#050505] text-white":"bg-slate-50 text-slate-900"])},[o("div",lf,[o("button",{onClick:i,class:"group flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:bg-white/5 active:scale-95"},[o("div",{class:y(["w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",e.isDark?"border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10":"border-slate-200 group-hover:border-orange-500/50 group-hover:bg-orange-50"])},[...u[1]||(u[1]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 transition-transform group-hover:-translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M15 19l-7-7 7-7"})],-1)])],2),u[2]||(u[2]=o("span",{class:"text-[11px] font-[1000] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100"},"Back",-1))])]),o("div",of,[o("div",null,[o("h1",sf,[o("span",{class:y(e.isDark?"text-white":"text-black")},"Advanced",2),u[3]||(u[3]=o("br",null,null,-1)),u[4]||(u[4]=o("span",{class:"bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x"},"Search",-1))]),o("h2",rf,[u[5]||(u[5]=o("br",null,null,-1)),o("span",{class:y(e.isDark?"text-white":"text-black")},"All Flat and percent(%) stats are combined ",2),u[6]||(u[6]=o("br",null,null,-1))])]),o("div",{class:"flex flex-row items-center gap-4 w-full lg:w-auto"},[o("button",{onClick:l,class:"flex-1 lg:flex-none px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300"}," Clear Page "),o("button",{onClick:c,class:"flex-[2] lg:flex-none px-10 py-5 bg-orange-600 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(234,88,12,0.3)]"},[...u[7]||(u[7]=[o("span",{class:"text-xs font-[1000] uppercase tracking-[0.2em] text-white"},"Apply Parameters",-1)])])])]),o("div",cf,[o("section",null,[u[8]||(u[8]=o("div",{class:"flex items-center gap-3 mb-8 ml-2"},[o("div",{class:"w-1.5 h-6 rounded-full bg-cyan-500"}),o("h2",{class:"text-lg font-[1000] uppercase tracking-[0.3em] italic text-cyan-500"},"Type Crysta")],-1)),o("div",uf,[(S(!0),I(X,null,ue(Ne(af),d=>(S(),I("div",{key:d.value,onClick:m=>r(d.value),class:y(["group relative p-5 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col items-center gap-4 min-h-[160px] justify-center",a.types.includes(d.value)?"bg-[#468FE0] border-cyan-400 shadow-xl shadow-cyan-600/80 scale-[1.12]":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 shadow-sm hover:border-slate-300"])},[o("div",{class:y(["w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner",a.types.includes(d.value)?"border-white shadow-lg":"border-slate-800/50"])},[o("img",{src:d.icon,class:"w-full h-full object-cover",alt:d.label},null,8,pf)],2),o("span",{class:y(["text-[10px] font-black uppercase tracking-[0.15em] text-center leading-tight transition-colors",a.types.includes(d.value)?"text-white":e.isDark?"text-slate-400":"text-slate-500"])},K(d.label),3),a.types.includes(d.value)?(S(),I("div",gf)):Re("",!0)],10,df))),128))])]),(S(!0),I(X,null,ue(Ne(nf),(d,m)=>(S(),I("div",{key:m},[o("div",mf,[o("div",{class:y(["w-1.5 h-6 rounded-full",Ne(Yl)[m]?.bg||"bg-slate-500"])},null,2),o("h2",{class:y(["text-lg font-[1000] uppercase tracking-[0.3em] italic",Ne(Yl)[m]?.text||"text-slate-500"])},K(m),3)]),o("div",ff,[(S(!0),I(X,null,ue(d,A=>(S(),I("div",{key:A.value,onClick:k=>s(A.value),class:y(["group/item relative rounded-[2rem] border-2 p-2 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[70px]",a.stats[A.value]?e.isDark?"bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-500/20":"bg-orange-50 border-orange-500":e.isDark?"bg-[#0a0a0a] border-white/5 hover:border-white/20":"bg-white border-slate-100 hover:border-slate-300 shadow-sm"])},[o("div",Af,[o("span",{class:y(["text-[11px] font-[1000] uppercase leading-tight tracking-wide transition-colors",a.stats[A.value]?e.isDark?"text-white":"text-orange-600":e.isDark?"text-slate-500":"text-slate-400"])},K(A.label),3),o("div",{class:y(["shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500",a.stats[A.value]?"bg-orange-500 border-orange-400 rotate-0":e.isDark?"bg-white/5 border-white/10 rotate-45":"bg-slate-50 border-slate-200 rotate-45"])},[a.stats[A.value]?(S(),I("svg",bf,[...u[9]||(u[9]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M5 13l4 4L19 7"},null,-1)])])):(S(),I("div",{key:1,class:y(["text-lg leading-none",e.isDark?"text-white/20":"text-slate-300"])},"+",2))],2)]),xe(us,{name:"fade"},{default:$e(()=>[a.stats[A.value]?(S(),I("div",{key:0,onClick:u[0]||(u[0]=Qc(()=>{},["stop"])),class:"space-y-2 mt-auto pt-4 border-t border-orange-500/20"},[o("div",kf,[ve(o("select",{"onUpdate:modelValue":k=>a.stats[A.value].sign=k,class:y(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-orange-400":"bg-white border-slate-200 text-orange-600"])},[...u[10]||(u[10]=[o("option",{value:"+"},"Stats +",-1),o("option",{value:"-"},"Stats -",-1)])],10,vf),[[it,a.stats[A.value].sign]]),ve(o("select",{"onUpdate:modelValue":k=>a.stats[A.value].op=k,class:y(["flex-1 py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-colors",e.isDark?"bg-black border-white/10 text-cyan-400":"bg-white border-slate-200 text-cyan-600"])},[...u[11]||(u[11]=[o("option",{value:">="},"≥",-1),o("option",{value:"<="},"≤",-1)])],10,xf),[[it,a.stats[A.value].op]])]),ve(o("input",{type:"number","onUpdate:modelValue":k=>a.stats[A.value].value=k,class:y(["w-full py-2.5 rounded-xl text-center font-black text-[10px] outline-none border transition-all focus:border-orange-500",e.isDark?"bg-black border-white/10 text-white":"bg-white border-slate-200 text-black"]),placeholder:"VALUE"},null,10,yf),[[qe,a.stats[A.value].value,void 0,{number:!0}]])])):Re("",!0)]),_:2},1024)],10,hf))),128))])]))),128))])],2))}},Pf=Wt(wf,[["__scopeId","data-v-1f142105"]]),Mf=[{path:"/",name:"bag",component:K0},{path:"/mq",name:"mainquest",component:pp},{path:"/mq-calc",name:"mqcalc",component:Xg},{path:"/bs-calc",name:"bs-calc",component:Nm},{path:"/xtall",name:"xtall",component:rg},{path:"/xtall/advanced",name:"xtall-advanced",component:Pf},{path:"/xtall/:id(\\d+)",name:"xtall-detail",component:tf,props:!0}],_f=id({history:Ou("/toram-vue/"),routes:Mf});document.title||(document.title="Timi DB | Toram Online Database");const Ps=qc(bd);Ps.use(_f);Ps.mount("#app");window.addEventListener("unhandledrejection",e=>{console.warn("Ignored async listener error:",e.reason)});
