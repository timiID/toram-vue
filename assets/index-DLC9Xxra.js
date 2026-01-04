(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function si(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const fe={},an=[],st=()=>{},Bl=()=>!1,ra=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ri=e=>e.startsWith("onUpdate:"),Pe=Object.assign,ci=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hs=Object.prototype.hasOwnProperty,se=(e,t)=>hs.call(e,t),J=Array.isArray,ln=e=>Gn(e)==="[object Map]",fn=e=>Gn(e)==="[object Set]",Ei=e=>Gn(e)==="[object Date]",z=e=>typeof e=="function",ve=e=>typeof e=="string",Xe=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ol=e=>(pe(e)||z(e))&&z(e.then)&&z(e.catch),Nl=Object.prototype.toString,Gn=e=>Nl.call(e),gs=e=>Gn(e).slice(8,-1),Ll=e=>Gn(e)==="[object Object]",ui=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},As=/-\w/g,Qe=ca(e=>e.replace(As,t=>t.slice(1).toUpperCase())),ks=/\B([A-Z])/g,Zt=ca(e=>e.replace(ks,"-$1").toLowerCase()),ua=ca(e=>e.charAt(0).toUpperCase()+e.slice(1)),wa=ca(e=>e?`on${ua(e)}`:""),Ot=(e,t)=>!Object.is(e,t),Xn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Gl=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},da=e=>{const t=parseFloat(e);return isNaN(t)?e:t},bs=e=>{const t=ve(e)?Number(e):NaN;return isNaN(t)?e:t};let Ti;const pa=()=>Ti||(Ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qt(e){if(J(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],i=ve(a)?ws(a):Qt(a);if(i)for(const l in i)t[l]=i[l]}return t}else if(ve(e)||pe(e))return e}const vs=/;(?![^(]*\))/g,ys=/:([^]+)/,xs=/\/\*[^]*?\*\//g;function ws(e){const t={};return e.replace(xs,"").split(vs).forEach(n=>{if(n){const a=n.split(ys);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function E(e){let t="";if(ve(e))t=e;else if(J(e))for(let n=0;n<e.length;n++){const a=E(e[n]);a&&(t+=a+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ms=si(Ps);function Ul(e){return!!e||e===""}function Ds(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=Un(e[a],t[a]);return n}function Un(e,t){if(e===t)return!0;let n=Ei(e),a=Ei(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=Xe(e),a=Xe(t),n||a)return e===t;if(n=J(e),a=J(t),n||a)return n&&a?Ds(e,t):!1;if(n=pe(e),a=pe(t),n||a){if(!n||!a)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const o in e){const s=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(s&&!c||!s&&c||!Un(e[o],t[o]))return!1}}return String(e)===String(t)}function di(e,t){return e.findIndex(n=>Un(n,t))}const Hl=e=>!!(e&&e.__v_isRef===!0),U=e=>ve(e)?e:e==null?"":J(e)||pe(e)&&(e.toString===Nl||!z(e.toString))?Hl(e)?U(e.value):JSON.stringify(e,jl,2):String(e),jl=(e,t)=>Hl(t)?jl(e,t.value):ln(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,i],l)=>(n[Pa(a,l)+" =>"]=i,n),{})}:fn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Pa(n))}:Xe(t)?Pa(t):pe(t)&&!J(t)&&!Ll(t)?String(t):t,Pa=(e,t="")=>{var n;return Xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Le;class Rs{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ss(){return Le}let he;const Ma=new WeakSet;class Fl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ma.has(this)&&(Ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_i(this),Wl(this);const t=he,n=qe;he=this,qe=!0;try{return this.fn()}finally{Ql(this),he=t,qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)mi(t);this.deps=this.depsTail=void 0,_i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fa(this)&&this.run()}get dirty(){return Fa(this)}}let Vl=0,xn,wn;function Jl(e,t=!1){if(e.flags|=8,t){e.next=wn,wn=e;return}e.next=xn,xn=e}function pi(){Vl++}function fi(){if(--Vl>0)return;if(wn){let t=wn;for(wn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;xn;){let t=xn;for(xn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function Wl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ql(e){let t,n=e.depsTail,a=n;for(;a;){const i=a.prevDep;a.version===-1?(a===n&&(n=i),mi(a),Cs(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=n}function Fa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ql(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ql(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Cn)||(e.globalVersion=Cn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fa(e))))return;e.flags|=2;const t=e.dep,n=he,a=qe;he=e,qe=!0;try{Wl(e);const i=e.fn(e._value);(t.version===0||Ot(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{he=n,qe=a,Ql(e),e.flags&=-3}}function mi(e,t=!1){const{dep:n,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)mi(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Cs(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const zl=[];function yt(){zl.push(qe),qe=!1}function xt(){const e=zl.pop();qe=e===void 0?!0:e}function _i(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=he;he=void 0;try{t()}finally{he=n}}}let Cn=0;class Es{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!he||!qe||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new Es(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,Xl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=a)}return n}trigger(t){this.version++,Cn++,this.notify(t)}notify(t){pi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fi()}}}function Xl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)Xl(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Va=new WeakMap,qt=Symbol(""),Ja=Symbol(""),En=Symbol("");function Re(e,t,n){if(qe&&he){let a=Va.get(e);a||Va.set(e,a=new Map);let i=a.get(n);i||(a.set(n,i=new hi),i.map=a,i.key=n),i.track()}}function ht(e,t,n,a,i,l){const o=Va.get(e);if(!o){Cn++;return}const s=c=>{c&&c.trigger()};if(pi(),t==="clear")o.forEach(s);else{const c=J(e),f=c&&ui(n);if(c&&n==="length"){const u=Number(a);o.forEach((d,h)=>{(h==="length"||h===En||!Xe(h)&&h>=u)&&s(d)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),f&&s(o.get(En)),t){case"add":c?f&&s(o.get("length")):(s(o.get(qt)),ln(e)&&s(o.get(Ja)));break;case"delete":c||(s(o.get(qt)),ln(e)&&s(o.get(Ja)));break;case"set":ln(e)&&s(o.get(qt));break}}fi()}function en(e){const t=ae(e);return t===e?t:(Re(t,"iterate",En),We(e)?t:t.map(Ze))}function fa(e){return Re(e=ae(e),"iterate",En),e}function Et(e,t){return wt(e)?zt(e)?cn(Ze(t)):cn(t):Ze(t)}const Ts={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,e=>Et(this,e))},concat(...e){return en(this).concat(...e.map(t=>J(t)?en(t):t))},entries(){return Da(this,"entries",e=>(e[1]=Et(this,e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(a=>Et(this,a)),arguments)},find(e,t){return ct(this,"find",e,t,n=>Et(this,n),arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,n=>Et(this,n),arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ra(this,"includes",e)},indexOf(...e){return Ra(this,"indexOf",e)},join(e){return en(this).join(e)},lastIndexOf(...e){return Ra(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return gn(this,"pop")},push(...e){return gn(this,"push",e)},reduce(e,...t){return Ki(this,"reduce",e,t)},reduceRight(e,...t){return Ki(this,"reduceRight",e,t)},shift(){return gn(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return gn(this,"splice",e)},toReversed(){return en(this).toReversed()},toSorted(e){return en(this).toSorted(e)},toSpliced(...e){return en(this).toSpliced(...e)},unshift(...e){return gn(this,"unshift",e)},values(){return Da(this,"values",e=>Et(this,e))}};function Da(e,t,n){const a=fa(e),i=a[t]();return a!==e&&!We(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const _s=Array.prototype;function ct(e,t,n,a,i,l){const o=fa(e),s=o!==e&&!We(e),c=o[t];if(c!==_s[t]){const d=c.apply(e,l);return s?Ze(d):d}let f=n;o!==e&&(s?f=function(d,h){return n.call(this,Et(e,d),h,e)}:n.length>2&&(f=function(d,h){return n.call(this,d,h,e)}));const u=c.call(o,f,a);return s&&i?i(u):u}function Ki(e,t,n,a){const i=fa(e);let l=n;return i!==e&&(We(e)?n.length>3&&(l=function(o,s,c){return n.call(this,o,s,c,e)}):l=function(o,s,c){return n.call(this,o,Et(e,s),c,e)}),i[t](l,...a)}function Ra(e,t,n){const a=ae(e);Re(a,"iterate",En);const i=a[t](...n);return(i===-1||i===!1)&&ki(n[0])?(n[0]=ae(n[0]),a[t](...n)):i}function gn(e,t,n=[]){yt(),pi();const a=ae(e)[t].apply(e,n);return fi(),xt(),a}const Ks=si("__proto__,__v_isRef,__isVue"),Zl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xe));function Is(e){Xe(e)||(e=String(e));const t=ae(this);return Re(t,"has",e),t.hasOwnProperty(e)}class Yl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return a===(i?l?Vs:no:l?to:eo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=J(t);if(!i){let c;if(o&&(c=Ts[n]))return c;if(n==="hasOwnProperty")return Is}const s=Reflect.get(t,n,Ee(t)?t:a);if((Xe(n)?Zl.has(n):Ks(n))||(i||Re(t,"get",n),l))return s;if(Ee(s)){const c=o&&ui(n)?s:s.value;return i&&pe(c)?Qa(c):c}return pe(s)?i?Qa(s):Hn(s):s}}class $l extends Yl{constructor(t=!1){super(!1,t)}set(t,n,a,i){let l=t[n];const o=J(t)&&ui(n);if(!this._isShallow){const f=wt(l);if(!We(a)&&!wt(a)&&(l=ae(l),a=ae(a)),!o&&Ee(l)&&!Ee(a))return f||(l.value=a),!0}const s=o?Number(n)<t.length:se(t,n),c=Reflect.set(t,n,a,Ee(t)?t:i);return t===ae(i)&&(s?Ot(a,l)&&ht(t,"set",n,a):ht(t,"add",n,a)),c}deleteProperty(t,n){const a=se(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&a&&ht(t,"delete",n,void 0),i}has(t,n){const a=Reflect.has(t,n);return(!Xe(n)||!Zl.has(n))&&Re(t,"has",n),a}ownKeys(t){return Re(t,"iterate",J(t)?"length":qt),Reflect.ownKeys(t)}}class Bs extends Yl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Os=new $l,Ns=new Bs,Ls=new $l(!0);const Wa=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function Gs(e,t,n){return function(...a){const i=this.__v_raw,l=ae(i),o=ln(l),s=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,f=i[e](...a),u=n?Wa:t?cn:Ze;return!t&&Re(l,"iterate",c?Ja:qt),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:s?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Us(e,t){const n={get(i){const l=this.__v_raw,o=ae(l),s=ae(i);e||(Ot(i,s)&&Re(o,"get",i),Re(o,"get",s));const{has:c}=Jn(o),f=t?Wa:e?cn:Ze;if(c.call(o,i))return f(l.get(i));if(c.call(o,s))return f(l.get(s));l!==o&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Re(ae(i),"iterate",qt),i.size},has(i){const l=this.__v_raw,o=ae(l),s=ae(i);return e||(Ot(i,s)&&Re(o,"has",i),Re(o,"has",s)),i===s?l.has(i):l.has(i)||l.has(s)},forEach(i,l){const o=this,s=o.__v_raw,c=ae(s),f=t?Wa:e?cn:Ze;return!e&&Re(c,"iterate",qt),s.forEach((u,d)=>i.call(l,f(u),f(d),o))}};return Pe(n,e?{add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear")}:{add(i){!t&&!We(i)&&!wt(i)&&(i=ae(i));const l=ae(this);return Jn(l).has.call(l,i)||(l.add(i),ht(l,"add",i,i)),this},set(i,l){!t&&!We(l)&&!wt(l)&&(l=ae(l));const o=ae(this),{has:s,get:c}=Jn(o);let f=s.call(o,i);f||(i=ae(i),f=s.call(o,i));const u=c.call(o,i);return o.set(i,l),f?Ot(l,u)&&ht(o,"set",i,l):ht(o,"add",i,l),this},delete(i){const l=ae(this),{has:o,get:s}=Jn(l);let c=o.call(l,i);c||(i=ae(i),c=o.call(l,i)),s&&s.call(l,i);const f=l.delete(i);return c&&ht(l,"delete",i,void 0),f},clear(){const i=ae(this),l=i.size!==0,o=i.clear();return l&&ht(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Gs(i,e,t)}),n}function gi(e,t){const n=Us(e,t);return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(se(n,i)&&i in a?n:a,i,l)}const Hs={get:gi(!1,!1)},js={get:gi(!1,!0)},Fs={get:gi(!0,!1)};const eo=new WeakMap,to=new WeakMap,no=new WeakMap,Vs=new WeakMap;function Js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ws(e){return e.__v_skip||!Object.isExtensible(e)?0:Js(gs(e))}function Hn(e){return wt(e)?e:Ai(e,!1,Os,Hs,eo)}function ao(e){return Ai(e,!1,Ls,js,to)}function Qa(e){return Ai(e,!0,Ns,Fs,no)}function Ai(e,t,n,a,i){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Ws(e);if(l===0)return e;const o=i.get(e);if(o)return o;const s=new Proxy(e,l===2?a:n);return i.set(e,s),s}function zt(e){return wt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function wt(e){return!!(e&&e.__v_isReadonly)}function We(e){return!!(e&&e.__v_isShallow)}function ki(e){return e?!!e.__v_raw:!1}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function Qs(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Gl(e,"__v_skip",!0),e}const Ze=e=>pe(e)?Hn(e):e,cn=e=>pe(e)?Qa(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function re(e){return io(e,!1)}function qs(e){return io(e,!0)}function io(e,t){return Ee(e)?e:new zs(e,t)}class zs{constructor(t,n){this.dep=new hi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ae(t),this._value=n?t:Ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||We(t)||wt(t);t=a?t:ae(t),Ot(t,n)&&(this._rawValue=t,this._value=a?t:Ze(t),this.dep.trigger())}}function Ie(e){return Ee(e)?e.value:e}const Xs={get:(e,t,n)=>t==="__v_raw"?e:Ie(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const i=e[t];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(e,t,n,a)}};function lo(e){return zt(e)?e:new Proxy(e,Xs)}class Zs{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new hi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Jl(this,!0),!0}get value(){const t=this.dep.track();return ql(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ys(e,t,n=!1){let a,i;return z(e)?a=e:(a=e.get,i=e.set),new Zs(a,i,n)}const Qn={},ta=new WeakMap;let Vt;function $s(e,t=!1,n=Vt){if(n){let a=ta.get(n);a||ta.set(n,a=[]),a.push(e)}}function er(e,t,n=fe){const{immediate:a,deep:i,once:l,scheduler:o,augmentJob:s,call:c}=n,f=w=>i?w:We(w)||i===!1||i===0?gt(w,1):gt(w);let u,d,h,g,P=!1,A=!1;if(Ee(e)?(d=()=>e.value,P=We(e)):zt(e)?(d=()=>f(e),P=!0):J(e)?(A=!0,P=e.some(w=>zt(w)||We(w)),d=()=>e.map(w=>{if(Ee(w))return w.value;if(zt(w))return f(w);if(z(w))return c?c(w,2):w()})):z(e)?t?d=c?()=>c(e,2):e:d=()=>{if(h){yt();try{h()}finally{xt()}}const w=Vt;Vt=u;try{return c?c(e,3,[g]):e(g)}finally{Vt=w}}:d=st,t&&i){const w=d,H=i===!0?1/0:i;d=()=>gt(w(),H)}const b=Ss(),y=()=>{u.stop(),b&&b.active&&ci(b.effects,u)};if(l&&t){const w=t;t=(...H)=>{w(...H),y()}}let v=A?new Array(e.length).fill(Qn):Qn;const x=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const H=u.run();if(i||P||(A?H.some((X,te)=>Ot(X,v[te])):Ot(H,v))){h&&h();const X=Vt;Vt=u;try{const te=[H,v===Qn?void 0:A&&v[0]===Qn?[]:v,g];v=H,c?c(t,3,te):t(...te)}finally{Vt=X}}}else u.run()};return s&&s(x),u=new Fl(d),u.scheduler=o?()=>o(x,!1):x,g=w=>$s(w,!1,u),h=u.onStop=()=>{const w=ta.get(u);if(w){if(c)c(w,4);else for(const H of w)H();ta.delete(u)}},t?a?x(!0):v=u.run():o?o(x.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function gt(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))gt(e.value,t,n);else if(J(e))for(let a=0;a<e.length;a++)gt(e[a],t,n);else if(fn(e)||ln(e))e.forEach(a=>{gt(a,t,n)});else if(Ll(e)){for(const a in e)gt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&gt(e[a],t,n)}return e}function jn(e,t,n,a){try{return a?e(...a):e()}catch(i){ma(i,t,n)}}function Ye(e,t,n,a){if(z(e)){const i=jn(e,t,n,a);return i&&Ol(i)&&i.catch(l=>{ma(l,t,n)}),i}if(J(e)){const i=[];for(let l=0;l<e.length;l++)i.push(Ye(e[l],t,n,a));return i}}function ma(e,t,n,a=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||fe;if(t){let s=t.parent;const c=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,f)===!1)return}s=s.parent}if(l){yt(),jn(l,null,10,[e,c,f]),xt();return}}tr(e,n,i,a,o)}function tr(e,t,n,a=!0,i=!1){if(i)throw e;console.error(e)}const Ke=[];let lt=-1;const on=[];let Tt=null,tn=0;const oo=Promise.resolve();let na=null;function ha(e){const t=na||oo;return e?t.then(this?e.bind(this):e):t}function nr(e){let t=lt+1,n=Ke.length;for(;t<n;){const a=t+n>>>1,i=Ke[a],l=Tn(i);l<e||l===e&&i.flags&2?t=a+1:n=a}return t}function bi(e){if(!(e.flags&1)){const t=Tn(e),n=Ke[Ke.length-1];!n||!(e.flags&2)&&t>=Tn(n)?Ke.push(e):Ke.splice(nr(t),0,e),e.flags|=1,so()}}function so(){na||(na=oo.then(co))}function ar(e){J(e)?on.push(...e):Tt&&e.id===-1?Tt.splice(tn+1,0,e):e.flags&1||(on.push(e),e.flags|=1),so()}function Ii(e,t,n=lt+1){for(;n<Ke.length;n++){const a=Ke[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Ke.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function ro(e){if(on.length){const t=[...new Set(on)].sort((n,a)=>Tn(n)-Tn(a));if(on.length=0,Tt){Tt.push(...t);return}for(Tt=t,tn=0;tn<Tt.length;tn++){const n=Tt[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,tn=0}}const Tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function co(e){try{for(lt=0;lt<Ke.length;lt++){const t=Ke[lt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),jn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;lt<Ke.length;lt++){const t=Ke[lt];t&&(t.flags&=-2)}lt=-1,Ke.length=0,ro(),na=null,(Ke.length||on.length)&&co()}}let Me=null,uo=null;function aa(e){const t=Me;return Me=e,uo=e&&e.type.__scopeId||null,t}function At(e,t=Me,n){if(!t||e._n)return e;const a=(...i)=>{a._d&&oa(-1);const l=aa(t);let o;try{o=e(...i)}finally{aa(l),a._d&&oa(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function ge(e,t){if(Me===null)return e;const n=va(Me),a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,o,s,c=fe]=t[i];l&&(z(l)&&(l={mounted:l,updated:l}),l.deep&&gt(o),a.push({dir:l,instance:n,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Ut(e,t,n,a){const i=e.dirs,l=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];l&&(s.oldValue=l[o].value);let c=s.dir[a];c&&(yt(),Ye(c,n,8,[e.el,s,e,t]),xt())}}function Zn(e,t){if(Ce){let n=Ce.provides;const a=Ce.parent&&Ce.parent.provides;a===n&&(n=Ce.provides=Object.create(a)),n[e]=t}}function ze(e,t,n=!1){const a=qo();if(a||rn){let i=rn?rn._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&z(t)?t.call(a&&a.proxy):t}}const ir=Symbol.for("v-scx"),lr=()=>ze(ir);function Nt(e,t,n){return po(e,t,n)}function po(e,t,n=fe){const{immediate:a,deep:i,flush:l,once:o}=n,s=Pe({},n),c=t&&a||!t&&l!=="post";let f;if(Bn){if(l==="sync"){const g=lr();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=st,g.resume=st,g.pause=st,g}}const u=Ce;s.call=(g,P,A)=>Ye(g,u,P,A);let d=!1;l==="post"?s.scheduler=g=>{He(g,u&&u.suspense)}:l!=="sync"&&(d=!0,s.scheduler=(g,P)=>{P?g():bi(g)}),s.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=er(e,t,s);return Bn&&(f?f.push(h):c&&h()),h}function or(e,t,n){const a=this.proxy,i=ve(e)?e.includes(".")?fo(a,e):()=>a[e]:e.bind(a,a);let l;z(t)?l=t:(l=t.handler,n=t);const o=Vn(this),s=po(i,l.bind(a),n);return o(),s}function fo(e,t){const n=t.split(".");return()=>{let a=e;for(let i=0;i<n.length&&a;i++)a=a[n[i]];return a}}const sr=Symbol("_vte"),mo=e=>e.__isTeleport,ft=Symbol("_leaveCb"),qn=Symbol("_enterCb");function rr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fn(()=>{e.isMounted=!0}),wo(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],ho={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},go=e=>{const t=e.subTree;return t.component?go(t.component):t},cr={name:"BaseTransition",props:ho,setup(e,{slots:t}){const n=qo(),a=rr();return()=>{const i=t.default&&bo(t.default(),!0);if(!i||!i.length)return;const l=Ao(i),o=ae(e),{mode:s}=o;if(a.isLeaving)return Sa(l);const c=Bi(l);if(!c)return Sa(l);let f=qa(c,o,a,n,d=>f=d);c.type!==Se&&_n(c,f);let u=n.subTree&&Bi(n.subTree);if(u&&u.type!==Se&&!Jt(u,c)&&go(n).type!==Se){let d=qa(u,o,a,n);if(_n(u,d),s==="out-in"&&c.type!==Se)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Sa(l);s==="in-out"&&c.type!==Se?d.delayLeave=(h,g,P)=>{const A=ko(a,u);A[String(u.key)]=u,h[ft]=()=>{g(),h[ft]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{P(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function Ao(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Se){t=n;break}}return t}const ur=cr;function ko(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function qa(e,t,n,a,i){const{appear:l,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:g,onAfterLeave:P,onLeaveCancelled:A,onBeforeAppear:b,onAppear:y,onAfterAppear:v,onAppearCancelled:x}=t,w=String(e.key),H=ko(n,e),X=(j,Z)=>{j&&Ye(j,a,9,Z)},te=(j,Z)=>{const ie=Z[1];X(j,Z),J(j)?j.every(L=>L.length<=1)&&ie():j.length<=1&&ie()},Ae={mode:o,persisted:s,beforeEnter(j){let Z=c;if(!n.isMounted)if(l)Z=b||c;else return;j[ft]&&j[ft](!0);const ie=H[w];ie&&Jt(e,ie)&&ie.el[ft]&&ie.el[ft](),X(Z,[j])},enter(j){let Z=f,ie=u,L=d;if(!n.isMounted)if(l)Z=y||f,ie=v||u,L=x||d;else return;let ne=!1;const we=j[qn]=Ge=>{ne||(ne=!0,Ge?X(L,[j]):X(ie,[j]),Ae.delayedLeave&&Ae.delayedLeave(),j[qn]=void 0)};Z?te(Z,[j,we]):we()},leave(j,Z){const ie=String(e.key);if(j[qn]&&j[qn](!0),n.isUnmounting)return Z();X(h,[j]);let L=!1;const ne=j[ft]=we=>{L||(L=!0,Z(),we?X(A,[j]):X(P,[j]),j[ft]=void 0,H[ie]===e&&delete H[ie])};H[ie]=e,g?te(g,[j,ne]):ne()},clone(j){const Z=qa(j,t,n,a,i);return i&&i(Z),Z}};return Ae}function Sa(e){if(ga(e))return e=Lt(e),e.children=null,e}function Bi(e){if(!ga(e))return mo(e.type)&&e.children?Ao(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&z(n.default))return n.default()}}function _n(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_n(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bo(e,t=!1,n){let a=[],i=0;for(let l=0;l<e.length;l++){let o=e[l];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:l);o.type===q?(o.patchFlag&128&&i++,a=a.concat(bo(o.children,t,s))):(t||o.type!==Se)&&a.push(s!=null?Lt(o,{key:s}):o)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function vo(e,t){return z(e)?Pe({name:e.name},t,{setup:e}):e}function yo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ia=new WeakMap;function Pn(e,t,n,a,i=!1){if(J(e)){e.forEach((P,A)=>Pn(P,t&&(J(t)?t[A]:t),n,a,i));return}if(sn(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Pn(e,t,n,a.component.subTree);return}const l=a.shapeFlag&4?va(a.component):a.el,o=i?null:l,{i:s,r:c}=e,f=t&&t.r,u=s.refs===fe?s.refs={}:s.refs,d=s.setupState,h=ae(d),g=d===fe?Bl:P=>se(h,P);if(f!=null&&f!==c){if(Oi(t),ve(f))u[f]=null,g(f)&&(d[f]=null);else if(Ee(f)){f.value=null;const P=t;P.k&&(u[P.k]=null)}}if(z(c))jn(c,s,12,[o,u]);else{const P=ve(c),A=Ee(c);if(P||A){const b=()=>{if(e.f){const y=P?g(c)?d[c]:u[c]:c.value;if(i)J(y)&&ci(y,l);else if(J(y))y.includes(l)||y.push(l);else if(P)u[c]=[l],g(c)&&(d[c]=u[c]);else{const v=[l];c.value=v,e.k&&(u[e.k]=v)}}else P?(u[c]=o,g(c)&&(d[c]=o)):A&&(c.value=o,e.k&&(u[e.k]=o))};if(o){const y=()=>{b(),ia.delete(e)};y.id=-1,ia.set(e,y),He(y,n)}else Oi(e),b()}}}function Oi(e){const t=ia.get(e);t&&(t.flags|=8,ia.delete(e))}pa().requestIdleCallback;pa().cancelIdleCallback;const sn=e=>!!e.type.__asyncLoader,ga=e=>e.type.__isKeepAlive;function dr(e,t){xo(e,"a",t)}function pr(e,t){xo(e,"da",t)}function xo(e,t,n=Ce){const a=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Aa(t,a,n),n){let i=n.parent;for(;i&&i.parent;)ga(i.parent.vnode)&&fr(a,t,n,i),i=i.parent}}function fr(e,t,n,a){const i=Aa(t,e,a,!0);Po(()=>{ci(a[t],i)},n)}function Aa(e,t,n=Ce,a=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{yt();const s=Vn(n),c=Ye(t,n,e,o);return s(),xt(),c});return a?i.unshift(l):i.push(l),l}}const Pt=e=>(t,n=Ce)=>{(!Bn||e==="sp")&&Aa(e,(...a)=>t(...a),n)},mr=Pt("bm"),Fn=Pt("m"),hr=Pt("bu"),gr=Pt("u"),wo=Pt("bum"),Po=Pt("um"),Ar=Pt("sp"),kr=Pt("rtg"),br=Pt("rtc");function vr(e,t=Ce){Aa("ec",e,t)}const Mo="components";function Do(e,t){return So(Mo,e,!0,t)||e}const Ro=Symbol.for("v-ndc");function yr(e){return ve(e)?So(Mo,e,!1)||e:e||Ro}function So(e,t,n=!0,a=!1){const i=Me||Ce;if(i){const l=i.type;{const s=oc(l,!1);if(s&&(s===t||s===Qe(t)||s===ua(Qe(t))))return l}const o=Ni(i[e]||l[e],t)||Ni(i.appContext[e],t);return!o&&a?l:o}}function Ni(e,t){return e&&(e[t]||e[Qe(t)]||e[ua(Qe(t))])}function de(e,t,n,a){let i;const l=n,o=J(e);if(o||ve(e)){const s=o&&zt(e);let c=!1,f=!1;s&&(c=!We(e),f=wt(e),e=fa(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(c?f?cn(Ze(e[u])):Ze(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,l)}else if(pe(e))if(e[Symbol.iterator])i=Array.from(e,(s,c)=>t(s,c,void 0,l));else{const s=Object.keys(e);i=new Array(s.length);for(let c=0,f=s.length;c<f;c++){const u=s[c];i[c]=t(e[u],u,c,l)}}else i=[];return i}function xr(e,t,n={},a,i){if(Me.ce||Me.parent&&sn(Me.parent)&&Me.parent.ce){const f=Object.keys(n).length>0;return T(),Xt(q,null,[ke("slot",n,a)],f?-2:64)}let l=e[t];l&&l._c&&(l._d=!1),T();const o=l&&Co(l(n)),s=n.key||o&&o.key,c=Xt(q,{key:(s&&!Xe(s)?s:`_${t}`)+(!o&&a?"_fb":"")},o||[],o&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function Co(e){return e.some(t=>In(t)?!(t.type===Se||t.type===q&&!Co(t.children)):!0)?e:null}const za=e=>e?zo(e)?va(e):za(e.parent):null,Mn=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>za(e.parent),$root:e=>za(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>To(e),$forceUpdate:e=>e.f||(e.f=()=>{bi(e.update)}),$nextTick:e=>e.n||(e.n=ha.bind(e.proxy)),$watch:e=>or.bind(e)}),Ca=(e,t)=>e!==fe&&!e.__isScriptSetup&&se(e,t),wr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:i,props:l,accessCache:o,type:s,appContext:c}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return a[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Ca(a,t))return o[t]=1,a[t];if(i!==fe&&se(i,t))return o[t]=2,i[t];if(se(l,t))return o[t]=3,l[t];if(n!==fe&&se(n,t))return o[t]=4,n[t];Xa&&(o[t]=0)}}const f=Mn[t];let u,d;if(f)return t==="$attrs"&&Re(e.attrs,"get",""),f(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==fe&&se(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:i,ctx:l}=e;return Ca(i,t)?(i[t]=n,!0):a!==fe&&se(a,t)?(a[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:i,props:l,type:o}},s){let c;return!!(n[s]||e!==fe&&s[0]!=="$"&&se(e,s)||Ca(t,s)||se(l,s)||se(a,s)||se(Mn,s)||se(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Li(e){return J(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xa=!0;function Pr(e){const t=To(e),n=e.proxy,a=e.ctx;Xa=!1,t.beforeCreate&&Gi(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:o,watch:s,provide:c,inject:f,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:P,activated:A,deactivated:b,beforeDestroy:y,beforeUnmount:v,destroyed:x,unmounted:w,render:H,renderTracked:X,renderTriggered:te,errorCaptured:Ae,serverPrefetch:j,expose:Z,inheritAttrs:ie,components:L,directives:ne,filters:we}=t;if(f&&Mr(f,a,null),o)for(const ue in o){const le=o[ue];z(le)&&(a[ue]=le.bind(n))}if(i){const ue=i.call(n,n);pe(ue)&&(e.data=Hn(ue))}if(Xa=!0,l)for(const ue in l){const le=l[ue],rt=z(le)?le.bind(n,n):z(le.get)?le.get.bind(n,n):st,Mt=!z(le)&&z(le.set)?le.set.bind(n):st,et=Y({get:rt,set:Mt});Object.defineProperty(a,ue,{enumerable:!0,configurable:!0,get:()=>et.value,set:Be=>et.value=Be})}if(s)for(const ue in s)Eo(s[ue],a,n,ue);if(c){const ue=z(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(le=>{Zn(le,ue[le])})}u&&Gi(u,e,"c");function ye(ue,le){J(le)?le.forEach(rt=>ue(rt.bind(n))):le&&ue(le.bind(n))}if(ye(mr,d),ye(Fn,h),ye(hr,g),ye(gr,P),ye(dr,A),ye(pr,b),ye(vr,Ae),ye(br,X),ye(kr,te),ye(wo,v),ye(Po,w),ye(Ar,j),J(Z))if(Z.length){const ue=e.exposed||(e.exposed={});Z.forEach(le=>{Object.defineProperty(ue,le,{get:()=>n[le],set:rt=>n[le]=rt,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===st&&(e.render=H),ie!=null&&(e.inheritAttrs=ie),L&&(e.components=L),ne&&(e.directives=ne),j&&yo(e)}function Mr(e,t,n=st){J(e)&&(e=Za(e));for(const a in e){const i=e[a];let l;pe(i)?"default"in i?l=ze(i.from||a,i.default,!0):l=ze(i.from||a):l=ze(i),Ee(l)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[a]=l}}function Gi(e,t,n){Ye(J(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Eo(e,t,n,a){let i=a.includes(".")?fo(n,a):()=>n[a];if(ve(e)){const l=t[e];z(l)&&Nt(i,l)}else if(z(e))Nt(i,e.bind(n));else if(pe(e))if(J(e))e.forEach(l=>Eo(l,t,n,a));else{const l=z(e.handler)?e.handler.bind(n):t[e.handler];z(l)&&Nt(i,l,e)}}function To(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,s=l.get(t);let c;return s?c=s:!i.length&&!n&&!a?c=t:(c={},i.length&&i.forEach(f=>la(c,f,o,!0)),la(c,t,o)),pe(t)&&l.set(t,c),c}function la(e,t,n,a=!1){const{mixins:i,extends:l}=t;l&&la(e,l,n,!0),i&&i.forEach(o=>la(e,o,n,!0));for(const o in t)if(!(a&&o==="expose")){const s=Dr[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Dr={data:Ui,props:Hi,emits:Hi,methods:vn,computed:vn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:vn,directives:vn,watch:Sr,provide:Ui,inject:Rr};function Ui(e,t){return t?e?function(){return Pe(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Rr(e,t){return vn(Za(e),Za(t))}function Za(e){if(J(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?Pe(Object.create(null),e,t):t}function Hi(e,t){return e?J(e)&&J(t)?[...new Set([...e,...t])]:Pe(Object.create(null),Li(e),Li(t??{})):t}function Sr(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const a in t)n[a]=Te(e[a],t[a]);return n}function _o(){return{app:null,config:{isNativeTag:Bl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cr=0;function Er(e,t){return function(a,i=null){z(a)||(a=Pe({},a)),i!=null&&!pe(i)&&(i=null);const l=_o(),o=new WeakSet,s=[];let c=!1;const f=l.app={_uid:Cr++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:rc,get config(){return l.config},set config(u){},use(u,...d){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(f,...d)):z(u)&&(o.add(u),u(f,...d))),f},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),f},component(u,d){return d?(l.components[u]=d,f):l.components[u]},directive(u,d){return d?(l.directives[u]=d,f):l.directives[u]},mount(u,d,h){if(!c){const g=f._ceVNode||ke(a,i);return g.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),e(g,u,h),c=!0,f._container=u,u.__vue_app__=f,va(g.component)}},onUnmount(u){s.push(u)},unmount(){c&&(Ye(s,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,d){return l.provides[u]=d,f},runWithContext(u){const d=rn;rn=f;try{return u()}finally{rn=d}}};return f}}let rn=null;const Tr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Qe(t)}Modifiers`]||e[`${Zt(t)}Modifiers`];function _r(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||fe;let i=n;const l=t.startsWith("update:"),o=l&&Tr(a,t.slice(7));o&&(o.trim&&(i=n.map(u=>ve(u)?u.trim():u)),o.number&&(i=n.map(da)));let s,c=a[s=wa(t)]||a[s=wa(Qe(t))];!c&&l&&(c=a[s=wa(Zt(t))]),c&&Ye(c,e,6,i);const f=a[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ye(f,e,6,i)}}const Kr=new WeakMap;function Ko(e,t,n=!1){const a=n?Kr:t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let o={},s=!1;if(!z(e)){const c=f=>{const u=Ko(f,t,!0);u&&(s=!0,Pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!s?(pe(e)&&a.set(e,null),null):(J(l)?l.forEach(c=>o[c]=null):Pe(o,l),pe(e)&&a.set(e,o),o)}function ka(e,t){return!e||!ra(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Zt(t))||se(e,t))}function ji(e){const{type:t,vnode:n,proxy:a,withProxy:i,propsOptions:[l],slots:o,attrs:s,emit:c,render:f,renderCache:u,props:d,data:h,setupState:g,ctx:P,inheritAttrs:A}=e,b=aa(e);let y,v;try{if(n.shapeFlag&4){const w=i||a,H=w;y=ot(f.call(H,w,u,d,g,h,P)),v=s}else{const w=t;y=ot(w.length>1?w(d,{attrs:s,slots:o,emit:c}):w(d,null)),v=t.props?s:Ir(s)}}catch(w){Dn.length=0,ma(w,e,1),y=ke(Se)}let x=y;if(v&&A!==!1){const w=Object.keys(v),{shapeFlag:H}=x;w.length&&H&7&&(l&&w.some(ri)&&(v=Br(v,l)),x=Lt(x,v,!1,!0))}return n.dirs&&(x=Lt(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&_n(x,n.transition),y=x,aa(b),y}const Ir=e=>{let t;for(const n in e)(n==="class"||n==="style"||ra(n))&&((t||(t={}))[n]=e[n]);return t},Br=(e,t)=>{const n={};for(const a in e)(!ri(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Or(e,t,n){const{props:a,children:i,component:l}=e,{props:o,children:s,patchFlag:c}=t,f=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?Fi(a,o,f):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==a[h]&&!ka(f,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:a===o?!1:a?o?Fi(a,o,f):!0:!!o;return!1}function Fi(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!ka(n,l))return!0}return!1}function Nr({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const Io={},Bo=()=>Object.create(Io),Oo=e=>Object.getPrototypeOf(e)===Io;function Lr(e,t,n,a=!1){const i={},l=Bo();e.propsDefaults=Object.create(null),No(e,t,i,l);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=a?i:ao(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function Gr(e,t,n,a){const{props:i,attrs:l,vnode:{patchFlag:o}}=e,s=ae(i),[c]=e.propsOptions;let f=!1;if((a||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ka(e.emitsOptions,h))continue;const g=t[h];if(c)if(se(l,h))g!==l[h]&&(l[h]=g,f=!0);else{const P=Qe(h);i[P]=Ya(c,s,P,g,e,!1)}else g!==l[h]&&(l[h]=g,f=!0)}}}else{No(e,t,i,l)&&(f=!0);let u;for(const d in s)(!t||!se(t,d)&&((u=Zt(d))===d||!se(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ya(c,s,d,void 0,e,!0)):delete i[d]);if(l!==s)for(const d in l)(!t||!se(t,d))&&(delete l[d],f=!0)}f&&ht(e.attrs,"set","")}function No(e,t,n,a){const[i,l]=e.propsOptions;let o=!1,s;if(t)for(let c in t){if(yn(c))continue;const f=t[c];let u;i&&se(i,u=Qe(c))?!l||!l.includes(u)?n[u]=f:(s||(s={}))[u]=f:ka(e.emitsOptions,c)||(!(c in a)||f!==a[c])&&(a[c]=f,o=!0)}if(l){const c=ae(n),f=s||fe;for(let u=0;u<l.length;u++){const d=l[u];n[d]=Ya(i,c,d,f[d],e,!se(f,d))}}return o}function Ya(e,t,n,a,i,l){const o=e[n];if(o!=null){const s=se(o,"default");if(s&&a===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:f}=i;if(n in f)a=f[n];else{const u=Vn(i);a=f[n]=c.call(null,t),u()}}else a=c;i.ce&&i.ce._setProp(n,a)}o[0]&&(l&&!s?a=!1:o[1]&&(a===""||a===Zt(n))&&(a=!0))}return a}const Ur=new WeakMap;function Lo(e,t,n=!1){const a=n?Ur:t.propsCache,i=a.get(e);if(i)return i;const l=e.props,o={},s=[];let c=!1;if(!z(e)){const u=d=>{c=!0;const[h,g]=Lo(d,t,!0);Pe(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!c)return pe(e)&&a.set(e,an),an;if(J(l))for(let u=0;u<l.length;u++){const d=Qe(l[u]);Vi(d)&&(o[d]=fe)}else if(l)for(const u in l){const d=Qe(u);if(Vi(d)){const h=l[u],g=o[d]=J(h)||z(h)?{type:h}:Pe({},h),P=g.type;let A=!1,b=!0;if(J(P))for(let y=0;y<P.length;++y){const v=P[y],x=z(v)&&v.name;if(x==="Boolean"){A=!0;break}else x==="String"&&(b=!1)}else A=z(P)&&P.name==="Boolean";g[0]=A,g[1]=b,(A||se(g,"default"))&&s.push(d)}}const f=[o,s];return pe(e)&&a.set(e,f),f}function Vi(e){return e[0]!=="$"&&!yn(e)}const vi=e=>e==="_"||e==="_ctx"||e==="$stable",yi=e=>J(e)?e.map(ot):[ot(e)],Hr=(e,t,n)=>{if(t._n)return t;const a=At((...i)=>yi(t(...i)),n);return a._c=!1,a},Go=(e,t,n)=>{const a=e._ctx;for(const i in e){if(vi(i))continue;const l=e[i];if(z(l))t[i]=Hr(i,l,a);else if(l!=null){const o=yi(l);t[i]=()=>o}}},Uo=(e,t)=>{const n=yi(t);e.slots.default=()=>n},Ho=(e,t,n)=>{for(const a in t)(n||!vi(a))&&(e[a]=t[a])},jr=(e,t,n)=>{const a=e.slots=Bo();if(e.vnode.shapeFlag&32){const i=t._;i?(Ho(a,t,n),n&&Gl(a,"_",i,!0)):Go(t,a)}else t&&Uo(e,t)},Fr=(e,t,n)=>{const{vnode:a,slots:i}=e;let l=!0,o=fe;if(a.shapeFlag&32){const s=t._;s?n&&s===1?l=!1:Ho(i,t,n):(l=!t.$stable,Go(t,i)),o=t}else t&&(Uo(e,t),o={default:1});if(l)for(const s in i)!vi(s)&&o[s]==null&&delete i[s]},He=qr;function Vr(e){return Jr(e)}function Jr(e,t){const n=pa();n.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:o,createText:s,createComment:c,setText:f,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=st,insertStaticContent:P}=e,A=(p,m,k,M=null,S=null,D=null,B=void 0,K=null,_=!!m.dynamicChildren)=>{if(p===m)return;p&&!Jt(p,m)&&(M=R(p),Be(p,S,D,!0),p=null),m.patchFlag===-2&&(_=!1,m.dynamicChildren=null);const{type:C,ref:W,shapeFlag:N}=m;switch(C){case ba:b(p,m,k,M);break;case Se:y(p,m,k,M);break;case Yn:p==null&&v(m,k,M,B);break;case q:L(p,m,k,M,S,D,B,K,_);break;default:N&1?H(p,m,k,M,S,D,B,K,_):N&6?ne(p,m,k,M,S,D,B,K,_):(N&64||N&128)&&C.process(p,m,k,M,S,D,B,K,_,F)}W!=null&&S?Pn(W,p&&p.ref,D,m||p,!m):W==null&&p&&p.ref!=null&&Pn(p.ref,null,D,p,!0)},b=(p,m,k,M)=>{if(p==null)a(m.el=s(m.children),k,M);else{const S=m.el=p.el;m.children!==p.children&&f(S,m.children)}},y=(p,m,k,M)=>{p==null?a(m.el=c(m.children||""),k,M):m.el=p.el},v=(p,m,k,M)=>{[p.el,p.anchor]=P(p.children,m,k,M,p.el,p.anchor)},x=({el:p,anchor:m},k,M)=>{let S;for(;p&&p!==m;)S=h(p),a(p,k,M),p=S;a(m,k,M)},w=({el:p,anchor:m})=>{let k;for(;p&&p!==m;)k=h(p),i(p),p=k;i(m)},H=(p,m,k,M,S,D,B,K,_)=>{if(m.type==="svg"?B="svg":m.type==="math"&&(B="mathml"),p==null)X(m,k,M,S,D,B,K,_);else{const C=p.el&&p.el._isVueCE?p.el:null;try{C&&C._beginPatch(),j(p,m,S,D,B,K,_)}finally{C&&C._endPatch()}}},X=(p,m,k,M,S,D,B,K)=>{let _,C;const{props:W,shapeFlag:N,transition:V,dirs:Q}=p;if(_=p.el=o(p.type,D,W&&W.is,W),N&8?u(_,p.children):N&16&&Ae(p.children,_,null,M,S,Ea(p,D),B,K),Q&&Ut(p,null,M,"created"),te(_,p,p.scopeId,B,M),W){for(const me in W)me!=="value"&&!yn(me)&&l(_,me,null,W[me],D,M);"value"in W&&l(_,"value",null,W.value,D),(C=W.onVnodeBeforeMount)&&it(C,M,p)}Q&&Ut(p,null,M,"beforeMount");const ee=Wr(S,V);ee&&V.beforeEnter(_),a(_,m,k),((C=W&&W.onVnodeMounted)||ee||Q)&&He(()=>{C&&it(C,M,p),ee&&V.enter(_),Q&&Ut(p,null,M,"mounted")},S)},te=(p,m,k,M,S)=>{if(k&&g(p,k),M)for(let D=0;D<M.length;D++)g(p,M[D]);if(S){let D=S.subTree;if(m===D||Jo(D.type)&&(D.ssContent===m||D.ssFallback===m)){const B=S.vnode;te(p,B,B.scopeId,B.slotScopeIds,S.parent)}}},Ae=(p,m,k,M,S,D,B,K,_=0)=>{for(let C=_;C<p.length;C++){const W=p[C]=K?_t(p[C]):ot(p[C]);A(null,W,m,k,M,S,D,B,K)}},j=(p,m,k,M,S,D,B)=>{const K=m.el=p.el;let{patchFlag:_,dynamicChildren:C,dirs:W}=m;_|=p.patchFlag&16;const N=p.props||fe,V=m.props||fe;let Q;if(k&&Ht(k,!1),(Q=V.onVnodeBeforeUpdate)&&it(Q,k,m,p),W&&Ut(m,p,k,"beforeUpdate"),k&&Ht(k,!0),(N.innerHTML&&V.innerHTML==null||N.textContent&&V.textContent==null)&&u(K,""),C?Z(p.dynamicChildren,C,K,k,M,Ea(m,S),D):B||le(p,m,K,null,k,M,Ea(m,S),D,!1),_>0){if(_&16)ie(K,N,V,k,S);else if(_&2&&N.class!==V.class&&l(K,"class",null,V.class,S),_&4&&l(K,"style",N.style,V.style,S),_&8){const ee=m.dynamicProps;for(let me=0;me<ee.length;me++){const ce=ee[me],Oe=N[ce],Ne=V[ce];(Ne!==Oe||ce==="value")&&l(K,ce,Oe,Ne,S,k)}}_&1&&p.children!==m.children&&u(K,m.children)}else!B&&C==null&&ie(K,N,V,k,S);((Q=V.onVnodeUpdated)||W)&&He(()=>{Q&&it(Q,k,m,p),W&&Ut(m,p,k,"updated")},M)},Z=(p,m,k,M,S,D,B)=>{for(let K=0;K<m.length;K++){const _=p[K],C=m[K],W=_.el&&(_.type===q||!Jt(_,C)||_.shapeFlag&198)?d(_.el):k;A(_,C,W,null,M,S,D,B,!0)}},ie=(p,m,k,M,S)=>{if(m!==k){if(m!==fe)for(const D in m)!yn(D)&&!(D in k)&&l(p,D,m[D],null,S,M);for(const D in k){if(yn(D))continue;const B=k[D],K=m[D];B!==K&&D!=="value"&&l(p,D,K,B,S,M)}"value"in k&&l(p,"value",m.value,k.value,S)}},L=(p,m,k,M,S,D,B,K,_)=>{const C=m.el=p?p.el:s(""),W=m.anchor=p?p.anchor:s("");let{patchFlag:N,dynamicChildren:V,slotScopeIds:Q}=m;Q&&(K=K?K.concat(Q):Q),p==null?(a(C,k,M),a(W,k,M),Ae(m.children||[],k,W,S,D,B,K,_)):N>0&&N&64&&V&&p.dynamicChildren&&p.dynamicChildren.length===V.length?(Z(p.dynamicChildren,V,k,S,D,B,K),(m.key!=null||S&&m===S.subTree)&&jo(p,m,!0)):le(p,m,k,W,S,D,B,K,_)},ne=(p,m,k,M,S,D,B,K,_)=>{m.slotScopeIds=K,p==null?m.shapeFlag&512?S.ctx.activate(m,k,M,B,_):we(m,k,M,S,D,B,_):Ge(p,m,_)},we=(p,m,k,M,S,D,B)=>{const K=p.component=tc(p,M,S);if(ga(p)&&(K.ctx.renderer=F),nc(K,!1,B),K.asyncDep){if(S&&S.registerDep(K,ye,B),!p.el){const _=K.subTree=ke(Se);y(null,_,m,k),p.placeholder=_.el}}else ye(K,p,m,k,S,D,B)},Ge=(p,m,k)=>{const M=m.component=p.component;if(Or(p,m,k))if(M.asyncDep&&!M.asyncResolved){ue(M,m,k);return}else M.next=m,M.update();else m.el=p.el,M.vnode=m},ye=(p,m,k,M,S,D,B)=>{const K=()=>{if(p.isMounted){let{next:N,bu:V,u:Q,parent:ee,vnode:me}=p;{const nt=Fo(p);if(nt){N&&(N.el=me.el,ue(p,N,B)),nt.asyncDep.then(()=>{p.isUnmounted||K()});return}}let ce=N,Oe;Ht(p,!1),N?(N.el=me.el,ue(p,N,B)):N=me,V&&Xn(V),(Oe=N.props&&N.props.onVnodeBeforeUpdate)&&it(Oe,ee,N,me),Ht(p,!0);const Ne=ji(p),tt=p.subTree;p.subTree=Ne,A(tt,Ne,d(tt.el),R(tt),p,S,D),N.el=Ne.el,ce===null&&Nr(p,Ne.el),Q&&He(Q,S),(Oe=N.props&&N.props.onVnodeUpdated)&&He(()=>it(Oe,ee,N,me),S)}else{let N;const{el:V,props:Q}=m,{bm:ee,m:me,parent:ce,root:Oe,type:Ne}=p,tt=sn(m);Ht(p,!1),ee&&Xn(ee),!tt&&(N=Q&&Q.onVnodeBeforeMount)&&it(N,ce,m),Ht(p,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(Ne);const nt=p.subTree=ji(p);A(null,nt,k,M,p,S,D),m.el=nt.el}if(me&&He(me,S),!tt&&(N=Q&&Q.onVnodeMounted)){const nt=m;He(()=>it(N,ce,nt),S)}(m.shapeFlag&256||ce&&sn(ce.vnode)&&ce.vnode.shapeFlag&256)&&p.a&&He(p.a,S),p.isMounted=!0,m=k=M=null}};p.scope.on();const _=p.effect=new Fl(K);p.scope.off();const C=p.update=_.run.bind(_),W=p.job=_.runIfDirty.bind(_);W.i=p,W.id=p.uid,_.scheduler=()=>bi(W),Ht(p,!0),C()},ue=(p,m,k)=>{m.component=p;const M=p.vnode.props;p.vnode=m,p.next=null,Gr(p,m.props,M,k),Fr(p,m.children,k),yt(),Ii(p),xt()},le=(p,m,k,M,S,D,B,K,_=!1)=>{const C=p&&p.children,W=p?p.shapeFlag:0,N=m.children,{patchFlag:V,shapeFlag:Q}=m;if(V>0){if(V&128){Mt(C,N,k,M,S,D,B,K,_);return}else if(V&256){rt(C,N,k,M,S,D,B,K,_);return}}Q&8?(W&16&&Fe(C,S,D),N!==C&&u(k,N)):W&16?Q&16?Mt(C,N,k,M,S,D,B,K,_):Fe(C,S,D,!0):(W&8&&u(k,""),Q&16&&Ae(N,k,M,S,D,B,K,_))},rt=(p,m,k,M,S,D,B,K,_)=>{p=p||an,m=m||an;const C=p.length,W=m.length,N=Math.min(C,W);let V;for(V=0;V<N;V++){const Q=m[V]=_?_t(m[V]):ot(m[V]);A(p[V],Q,k,null,S,D,B,K,_)}C>W?Fe(p,S,D,!0,!1,N):Ae(m,k,M,S,D,B,K,_,N)},Mt=(p,m,k,M,S,D,B,K,_)=>{let C=0;const W=m.length;let N=p.length-1,V=W-1;for(;C<=N&&C<=V;){const Q=p[C],ee=m[C]=_?_t(m[C]):ot(m[C]);if(Jt(Q,ee))A(Q,ee,k,null,S,D,B,K,_);else break;C++}for(;C<=N&&C<=V;){const Q=p[N],ee=m[V]=_?_t(m[V]):ot(m[V]);if(Jt(Q,ee))A(Q,ee,k,null,S,D,B,K,_);else break;N--,V--}if(C>N){if(C<=V){const Q=V+1,ee=Q<W?m[Q].el:M;for(;C<=V;)A(null,m[C]=_?_t(m[C]):ot(m[C]),k,ee,S,D,B,K,_),C++}}else if(C>V)for(;C<=N;)Be(p[C],S,D,!0),C++;else{const Q=C,ee=C,me=new Map;for(C=ee;C<=V;C++){const Ue=m[C]=_?_t(m[C]):ot(m[C]);Ue.key!=null&&me.set(Ue.key,C)}let ce,Oe=0;const Ne=V-ee+1;let tt=!1,nt=0;const hn=new Array(Ne);for(C=0;C<Ne;C++)hn[C]=0;for(C=Q;C<=N;C++){const Ue=p[C];if(Oe>=Ne){Be(Ue,S,D,!0);continue}let at;if(Ue.key!=null)at=me.get(Ue.key);else for(ce=ee;ce<=V;ce++)if(hn[ce-ee]===0&&Jt(Ue,m[ce])){at=ce;break}at===void 0?Be(Ue,S,D,!0):(hn[at-ee]=C+1,at>=nt?nt=at:tt=!0,A(Ue,m[at],k,null,S,D,B,K,_),Oe++)}const Ri=tt?Qr(hn):an;for(ce=Ri.length-1,C=Ne-1;C>=0;C--){const Ue=ee+C,at=m[Ue],Si=m[Ue+1],Ci=Ue+1<W?Si.el||Vo(Si):M;hn[C]===0?A(null,at,k,Ci,S,D,B,K,_):tt&&(ce<0||C!==Ri[ce]?et(at,k,Ci,2):ce--)}}},et=(p,m,k,M,S=null)=>{const{el:D,type:B,transition:K,children:_,shapeFlag:C}=p;if(C&6){et(p.component.subTree,m,k,M);return}if(C&128){p.suspense.move(m,k,M);return}if(C&64){B.move(p,m,k,F);return}if(B===q){a(D,m,k);for(let N=0;N<_.length;N++)et(_[N],m,k,M);a(p.anchor,m,k);return}if(B===Yn){x(p,m,k);return}if(M!==2&&C&1&&K)if(M===0)K.beforeEnter(D),a(D,m,k),He(()=>K.enter(D),S);else{const{leave:N,delayLeave:V,afterLeave:Q}=K,ee=()=>{p.ctx.isUnmounted?i(D):a(D,m,k)},me=()=>{D._isLeaving&&D[ft](!0),N(D,()=>{ee(),Q&&Q()})};V?V(D,ee,me):me()}else a(D,m,k)},Be=(p,m,k,M=!1,S=!1)=>{const{type:D,props:B,ref:K,children:_,dynamicChildren:C,shapeFlag:W,patchFlag:N,dirs:V,cacheIndex:Q}=p;if(N===-2&&(S=!1),K!=null&&(yt(),Pn(K,null,k,p,!0),xt()),Q!=null&&(m.renderCache[Q]=void 0),W&256){m.ctx.deactivate(p);return}const ee=W&1&&V,me=!sn(p);let ce;if(me&&(ce=B&&B.onVnodeBeforeUnmount)&&it(ce,m,p),W&6)Gt(p.component,k,M);else{if(W&128){p.suspense.unmount(k,M);return}ee&&Ut(p,null,m,"beforeUnmount"),W&64?p.type.remove(p,m,k,F,M):C&&!C.hasOnce&&(D!==q||N>0&&N&64)?Fe(C,m,k,!1,!0):(D===q&&N&384||!S&&W&16)&&Fe(_,m,k),M&&Yt(p)}(me&&(ce=B&&B.onVnodeUnmounted)||ee)&&He(()=>{ce&&it(ce,m,p),ee&&Ut(p,null,m,"unmounted")},k)},Yt=p=>{const{type:m,el:k,anchor:M,transition:S}=p;if(m===q){$t(k,M);return}if(m===Yn){w(p);return}const D=()=>{i(k),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:B,delayLeave:K}=S,_=()=>B(k,D);K?K(p.el,D,_):_()}else D()},$t=(p,m)=>{let k;for(;p!==m;)k=h(p),i(p),p=k;i(m)},Gt=(p,m,k)=>{const{bum:M,scope:S,job:D,subTree:B,um:K,m:_,a:C}=p;Ji(_),Ji(C),M&&Xn(M),S.stop(),D&&(D.flags|=8,Be(B,p,m,k)),K&&He(K,m),He(()=>{p.isUnmounted=!0},m)},Fe=(p,m,k,M=!1,S=!1,D=0)=>{for(let B=D;B<p.length;B++)Be(p[B],m,k,M,S)},R=p=>{if(p.shapeFlag&6)return R(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=h(p.anchor||p.el),k=m&&m[sr];return k?h(k):m};let G=!1;const O=(p,m,k)=>{let M;p==null?m._vnode&&(Be(m._vnode,null,null,!0),M=m._vnode.component):A(m._vnode||null,p,m,null,null,null,k),m._vnode=p,G||(G=!0,Ii(M),ro(),G=!1)},F={p:A,um:Be,m:et,r:Yt,mt:we,mc:Ae,pc:le,pbc:Z,n:R,o:e};return{render:O,hydrate:void 0,createApp:Er(O)}}function Ea({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function jo(e,t,n=!1){const a=e.children,i=t.children;if(J(a)&&J(i))for(let l=0;l<a.length;l++){const o=a[l];let s=i[l];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[l]=_t(i[l]),s.el=o.el),!n&&s.patchFlag!==-2&&jo(o,s)),s.type===ba&&(s.patchFlag!==-1?s.el=o.el:s.__elIndex=l+(e.type===q?1:0)),s.type===Se&&!s.el&&(s.el=o.el)}}function Qr(e){const t=e.slice(),n=[0];let a,i,l,o,s;const c=e.length;for(a=0;a<c;a++){const f=e[a];if(f!==0){if(i=n[n.length-1],e[i]<f){t[a]=i,n.push(a);continue}for(l=0,o=n.length-1;l<o;)s=l+o>>1,e[n[s]]<f?l=s+1:o=s;f<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function Fo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fo(t)}function Ji(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Vo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Vo(t.subTree):null}const Jo=e=>e.__isSuspense;function qr(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):ar(e)}const q=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),Se=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc"),Dn=[];let je=null;function T(e=!1){Dn.push(je=e?null:[])}function zr(){Dn.pop(),je=Dn[Dn.length-1]||null}let Kn=1;function oa(e,t=!1){Kn+=e,e<0&&je&&t&&(je.hasOnce=!0)}function Wo(e){return e.dynamicChildren=Kn>0?je||an:null,zr(),Kn>0&&je&&je.push(e),e}function I(e,t,n,a,i,l){return Wo(r(e,t,n,a,i,l,!0))}function Xt(e,t,n,a,i){return Wo(ke(e,t,n,a,i,!0))}function In(e){return e?e.__v_isVNode===!0:!1}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Qo=({key:e})=>e??null,$n=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||Ee(e)||z(e)?{i:Me,r:e,k:t,f:!!n}:e:null);function r(e,t=null,n=null,a=0,i=null,l=e===q?0:1,o=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qo(t),ref:t&&$n(t),scopeId:uo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Me};return s?(xi(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),Kn>0&&!o&&je&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&je.push(c),c}const ke=Xr;function Xr(e,t=null,n=null,a=0,i=null,l=!1){if((!e||e===Ro)&&(e=Se),In(e)){const s=Lt(e,t,!0);return n&&xi(s,n),Kn>0&&!l&&je&&(s.shapeFlag&6?je[je.indexOf(e)]=s:je.push(s)),s.patchFlag=-2,s}if(sc(e)&&(e=e.__vccOpts),t){t=Zr(t);let{class:s,style:c}=t;s&&!ve(s)&&(t.class=E(s)),pe(c)&&(ki(c)&&!J(c)&&(c=Pe({},c)),t.style=Qt(c))}const o=ve(e)?1:Jo(e)?128:mo(e)?64:pe(e)?4:z(e)?2:0;return r(e,t,n,a,i,o,l,!0)}function Zr(e){return e?ki(e)||Oo(e)?Pe({},e):e:null}function Lt(e,t,n=!1,a=!1){const{props:i,ref:l,patchFlag:o,children:s,transition:c}=e,f=t?Yr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Qo(f),ref:t&&t.ref?n&&l?J(l)?l.concat($n(t)):[l,$n(t)]:$n(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==q?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&_n(u,c.clone(u)),u}function kt(e=" ",t=0){return ke(ba,null,e,t)}function Rn(e,t){const n=ke(Yn,null,e);return n.staticCount=t,n}function mt(e="",t=!1){return t?(T(),Xt(Se,null,e)):ke(Se,null,e)}function ot(e){return e==null||typeof e=="boolean"?ke(Se):J(e)?ke(q,null,e.slice()):In(e)?_t(e):ke(ba,null,String(e))}function _t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function xi(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(J(t))n=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),xi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Oo(t)?t._ctx=Me:i===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),a&64?(n=16,t=[kt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yr(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=E([t.class,a.class]));else if(i==="style")t.style=Qt([t.style,a.style]);else if(ra(i)){const l=t[i],o=a[i];o&&l!==o&&!(J(l)&&l.includes(o))&&(t[i]=l?[].concat(l,o):o)}else i!==""&&(t[i]=a[i])}return t}function it(e,t,n,a=null){Ye(e,t,7,[n,a])}const $r=_o();let ec=0;function tc(e,t,n){const a=e.type,i=(t?t.appContext:e.appContext)||$r,l={uid:ec++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lo(a,i),emitsOptions:Ko(a,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:a.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=_r.bind(null,l),e.ce&&e.ce(l),l}let Ce=null;const qo=()=>Ce||Me;let sa,$a;{const e=pa(),t=(n,a)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(a),l=>{i.length>1?i.forEach(o=>o(l)):i[0](l)}};sa=t("__VUE_INSTANCE_SETTERS__",n=>Ce=n),$a=t("__VUE_SSR_SETTERS__",n=>Bn=n)}const Vn=e=>{const t=Ce;return sa(e),e.scope.on(),()=>{e.scope.off(),sa(t)}},Wi=()=>{Ce&&Ce.scope.off(),sa(null)};function zo(e){return e.vnode.shapeFlag&4}let Bn=!1;function nc(e,t=!1,n=!1){t&&$a(t);const{props:a,children:i}=e.vnode,l=zo(e);Lr(e,a,l,t),jr(e,i,n||t);const o=l?ac(e,t):void 0;return t&&$a(!1),o}function ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wr);const{setup:a}=n;if(a){yt();const i=e.setupContext=a.length>1?lc(e):null,l=Vn(e),o=jn(a,e,0,[e.props,i]),s=Ol(o);if(xt(),l(),(s||e.sp)&&!sn(e)&&yo(e),s){if(o.then(Wi,Wi),t)return o.then(c=>{Qi(e,c)}).catch(c=>{ma(c,e,0)});e.asyncDep=o}else Qi(e,o)}else Xo(e)}function Qi(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=lo(t)),Xo(e)}function Xo(e,t,n){const a=e.type;e.render||(e.render=a.render||st);{const i=Vn(e);yt();try{Pr(e)}finally{xt(),i()}}}const ic={get(e,t){return Re(e,"get",""),e[t]}};function lc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ic),slots:e.slots,emit:e.emit,expose:t}}function va(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(lo(Qs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Mn)return Mn[n](e)},has(t,n){return n in t||n in Mn}})):e.proxy}function oc(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function sc(e){return z(e)&&"__vccOpts"in e}const Y=(e,t)=>Ys(e,t,Bn);function wi(e,t,n){try{oa(-1);const a=arguments.length;return a===2?pe(t)&&!J(t)?In(t)?ke(e,null,[t]):ke(e,t):ke(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&In(n)&&(n=[n]),ke(e,t,n))}finally{oa(1)}}const rc="3.5.26";let ei;const qi=typeof window<"u"&&window.trustedTypes;if(qi)try{ei=qi.createPolicy("vue",{createHTML:e=>e})}catch{}const Zo=ei?e=>ei.createHTML(e):e=>e,cc="http://www.w3.org/2000/svg",uc="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,zi=pt&&pt.createElement("template"),dc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const i=t==="svg"?pt.createElementNS(cc,e):t==="mathml"?pt.createElementNS(uc,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,i,l){const o=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{zi.innerHTML=Zo(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const s=zi.content;if(a==="svg"||a==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Dt="transition",An="animation",On=Symbol("_vtc"),Yo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pc=Pe({},ho,Yo),fc=e=>(e.displayName="Transition",e.props=pc,e),mc=fc((e,{slots:t})=>wi(ur,hc(e),t)),jt=(e,t=[])=>{J(e)?e.forEach(n=>n(...t)):e&&e(...t)},Xi=e=>e?J(e)?e.some(t=>t.length>1):e.length>1:!1;function hc(e){const t={};for(const L in e)L in Yo||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:a,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,P=gc(i),A=P&&P[0],b=P&&P[1],{onBeforeEnter:y,onEnter:v,onEnterCancelled:x,onLeave:w,onLeaveCancelled:H,onBeforeAppear:X=y,onAppear:te=v,onAppearCancelled:Ae=x}=t,j=(L,ne,we,Ge)=>{L._enterCancelled=Ge,Ft(L,ne?u:s),Ft(L,ne?f:o),we&&we()},Z=(L,ne)=>{L._isLeaving=!1,Ft(L,d),Ft(L,g),Ft(L,h),ne&&ne()},ie=L=>(ne,we)=>{const Ge=L?te:v,ye=()=>j(ne,L,we);jt(Ge,[ne,ye]),Zi(()=>{Ft(ne,L?c:l),ut(ne,L?u:s),Xi(Ge)||Yi(ne,a,A,ye)})};return Pe(t,{onBeforeEnter(L){jt(y,[L]),ut(L,l),ut(L,o)},onBeforeAppear(L){jt(X,[L]),ut(L,c),ut(L,f)},onEnter:ie(!1),onAppear:ie(!0),onLeave(L,ne){L._isLeaving=!0;const we=()=>Z(L,ne);ut(L,d),L._enterCancelled?(ut(L,h),tl(L)):(tl(L),ut(L,h)),Zi(()=>{L._isLeaving&&(Ft(L,d),ut(L,g),Xi(w)||Yi(L,a,b,we))}),jt(w,[L,we])},onEnterCancelled(L){j(L,!1,void 0,!0),jt(x,[L])},onAppearCancelled(L){j(L,!0,void 0,!0),jt(Ae,[L])},onLeaveCancelled(L){Z(L),jt(H,[L])}})}function gc(e){if(e==null)return null;if(pe(e))return[Ta(e.enter),Ta(e.leave)];{const t=Ta(e);return[t,t]}}function Ta(e){return bs(e)}function ut(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[On]||(e[On]=new Set)).add(t)}function Ft(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[On];n&&(n.delete(t),n.size||(e[On]=void 0))}function Zi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ac=0;function Yi(e,t,n,a){const i=e._endId=++Ac,l=()=>{i===e._endId&&a()};if(n!=null)return setTimeout(l,n);const{type:o,timeout:s,propCount:c}=kc(e,t);if(!o)return a();const f=o+"end";let u=0;const d=()=>{e.removeEventListener(f,h),l()},h=g=>{g.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(f,h)}function kc(e,t){const n=window.getComputedStyle(e),a=P=>(n[P]||"").split(", "),i=a(`${Dt}Delay`),l=a(`${Dt}Duration`),o=$i(i,l),s=a(`${An}Delay`),c=a(`${An}Duration`),f=$i(s,c);let u=null,d=0,h=0;t===Dt?o>0&&(u=Dt,d=o,h=l.length):t===An?f>0&&(u=An,d=f,h=c.length):(d=Math.max(o,f),u=d>0?o>f?Dt:An:null,h=u?u===Dt?l.length:c.length:0);const g=u===Dt&&/\b(?:transform|all)(?:,|$)/.test(a(`${Dt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:g}}function $i(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>el(n)+el(e[a])))}function el(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function tl(e){return(e?e.ownerDocument:document).body.offsetHeight}function bc(e,t,n){const a=e[On];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nl=Symbol("_vod"),vc=Symbol("_vsh"),yc=Symbol(""),xc=/(?:^|;)\s*display\s*:/;function wc(e,t,n){const a=e.style,i=ve(n);let l=!1;if(n&&!i){if(t)if(ve(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&ea(a,s,"")}else for(const o in t)n[o]==null&&ea(a,o,"");for(const o in n)o==="display"&&(l=!0),ea(a,o,n[o])}else if(i){if(t!==n){const o=a[yc];o&&(n+=";"+o),a.cssText=n,l=xc.test(n)}}else t&&e.removeAttribute("style");nl in e&&(e[nl]=l?a.display:"",e[vc]&&(a.display="none"))}const al=/\s*!important$/;function ea(e,t,n){if(J(n))n.forEach(a=>ea(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Pc(e,t);al.test(n)?e.setProperty(Zt(a),n.replace(al,""),"important"):e[a]=n}}const il=["Webkit","Moz","ms"],_a={};function Pc(e,t){const n=_a[t];if(n)return n;let a=Qe(t);if(a!=="filter"&&a in e)return _a[t]=a;a=ua(a);for(let i=0;i<il.length;i++){const l=il[i]+a;if(l in e)return _a[t]=l}return t}const ll="http://www.w3.org/1999/xlink";function ol(e,t,n,a,i,l=Ms(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ll,t.slice(6,t.length)):e.setAttributeNS(ll,t,n):n==null||l&&!Ul(n)?e.removeAttribute(t):e.setAttribute(t,l?"":Xe(n)?String(n):n)}function sl(e,t,n,a,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zo(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const s=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(s!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Ul(n):n==null&&s==="string"?(n="",o=!0):s==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Bt(e,t,n,a){e.addEventListener(t,n,a)}function Mc(e,t,n,a){e.removeEventListener(t,n,a)}const rl=Symbol("_vei");function Dc(e,t,n,a,i=null){const l=e[rl]||(e[rl]={}),o=l[t];if(a&&o)o.value=a;else{const[s,c]=Rc(t);if(a){const f=l[t]=Ec(a,i);Bt(e,s,f,c)}else o&&(Mc(e,s,o,c),l[t]=void 0)}}const cl=/(?:Once|Passive|Capture)$/;function Rc(e){let t;if(cl.test(e)){t={};let a;for(;a=e.match(cl);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let Ka=0;const Sc=Promise.resolve(),Cc=()=>Ka||(Sc.then(()=>Ka=0),Ka=Date.now());function Ec(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;Ye(Tc(a,n.value),t,5,[a])};return n.value=e,n.attached=Cc(),n}function Tc(e,t){if(J(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const ul=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_c=(e,t,n,a,i,l)=>{const o=i==="svg";t==="class"?bc(e,a,o):t==="style"?wc(e,n,a):ra(t)?ri(t)||Dc(e,t,n,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kc(e,t,a,o))?(sl(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ol(e,t,a,o,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ve(a))?sl(e,Qe(t),a,l,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),ol(e,t,a,o))};function Kc(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&ul(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ul(t)&&ve(n)?!1:t in e}const un=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?n=>Xn(t,n):t};function Ic(e){e.target.composing=!0}function dl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bt=Symbol("_assign");function pl(e,t,n){return t&&(e=e.trim()),n&&(e=da(e)),e}const Je={created(e,{modifiers:{lazy:t,trim:n,number:a}},i){e[bt]=un(i);const l=a||i.props&&i.props.type==="number";Bt(e,t?"change":"input",o=>{o.target.composing||e[bt](pl(e.value,n,l))}),(n||l)&&Bt(e,"change",()=>{e.value=pl(e.value,n,l)}),t||(Bt(e,"compositionstart",Ic),Bt(e,"compositionend",dl),Bt(e,"change",dl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:i,number:l}},o){if(e[bt]=un(o),e.composing)return;const s=(l||e.type==="number")&&!/^0\d/.test(e.value)?da(e.value):e.value,c=t??"";s!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&t===n||i&&e.value.trim()===c)||(e.value=c))}},ti={deep:!0,created(e,t,n){e[bt]=un(n),Bt(e,"change",()=>{const a=e._modelValue,i=Nn(e),l=e.checked,o=e[bt];if(J(a)){const s=di(a,i),c=s!==-1;if(l&&!c)o(a.concat(i));else if(!l&&c){const f=[...a];f.splice(s,1),o(f)}}else if(fn(a)){const s=new Set(a);l?s.add(i):s.delete(i),o(s)}else o($o(e,l))})},mounted:fl,beforeUpdate(e,t,n){e[bt]=un(n),fl(e,t,n)}};function fl(e,{value:t,oldValue:n},a){e._modelValue=t;let i;if(J(t))i=di(t,a.props.value)>-1;else if(fn(t))i=t.has(a.props.value);else{if(t===n)return;i=Un(t,$o(e,!0))}e.checked!==i&&(e.checked=i)}const vt={deep:!0,created(e,{value:t,modifiers:{number:n}},a){const i=fn(t);Bt(e,"change",()=>{const l=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?da(Nn(o)):Nn(o));e[bt](e.multiple?i?new Set(l):l:l[0]),e._assigning=!0,ha(()=>{e._assigning=!1})}),e[bt]=un(a)},mounted(e,{value:t}){ml(e,t)},beforeUpdate(e,t,n){e[bt]=un(n)},updated(e,{value:t}){e._assigning||ml(e,t)}};function ml(e,t){const n=e.multiple,a=J(t);if(!(n&&!a&&!fn(t))){for(let i=0,l=e.options.length;i<l;i++){const o=e.options[i],s=Nn(o);if(n)if(a){const c=typeof s;c==="string"||c==="number"?o.selected=t.some(f=>String(f)===String(s)):o.selected=di(t,s)>-1}else o.selected=t.has(s);else if(Un(Nn(o),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Nn(e){return"_value"in e?e._value:e.value}function $o(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Bc=["ctrl","shift","alt","meta"],Oc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Bc.some(n=>e[`${n}Key`]&&!t.includes(n))},Nc=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((i,...l)=>{for(let o=0;o<t.length;o++){const s=Oc[t[o]];if(s&&s(i,t))return}return e(i,...l)}))},Lc=Pe({patchProp:_c},dc);let hl;function Gc(){return hl||(hl=Vr(Lc))}const Uc=((...e)=>{const t=Gc().createApp(...e),{mount:n}=t;return t.mount=a=>{const i=jc(a);if(!i)return;const l=t._component;!z(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Hc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t});function Hc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jc(e){return ve(e)?document.querySelector(e):e}const Pi="/toram-vue/images/logo.png";const nn=typeof document<"u";function es(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&es(e.default)}const oe=Object.assign;function Ia(e,t){const n={};for(const a in t){const i=t[a];n[a]=$e(i)?i.map(e):e(i)}return n}const Sn=()=>{},$e=Array.isArray;function gl(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const ts=/#/g,Vc=/&/g,Jc=/\//g,Wc=/=/g,Qc=/\?/g,ns=/\+/g,qc=/%5B/g,zc=/%5D/g,as=/%5E/g,Xc=/%60/g,is=/%7B/g,Zc=/%7C/g,ls=/%7D/g,Yc=/%20/g;function Mi(e){return e==null?"":encodeURI(""+e).replace(Zc,"|").replace(qc,"[").replace(zc,"]")}function $c(e){return Mi(e).replace(is,"{").replace(ls,"}").replace(as,"^")}function ni(e){return Mi(e).replace(ns,"%2B").replace(Yc,"+").replace(ts,"%23").replace(Vc,"%26").replace(Xc,"`").replace(is,"{").replace(ls,"}").replace(as,"^")}function eu(e){return ni(e).replace(Wc,"%3D")}function tu(e){return Mi(e).replace(ts,"%23").replace(Qc,"%3F")}function nu(e){return tu(e).replace(Jc,"%2F")}function Ln(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const au=/\/$/,iu=e=>e.replace(au,"");function Ba(e,t,n="/"){let a,i={},l="",o="";const s=t.indexOf("#");let c=t.indexOf("?");return c=s>=0&&c>s?-1:c,c>=0&&(a=t.slice(0,c),l=t.slice(c,s>0?s:t.length),i=e(l.slice(1))),s>=0&&(a=a||t.slice(0,s),o=t.slice(s,t.length)),a=ru(a??t,n),{fullPath:a+l+o,path:a,query:i,hash:Ln(o)}}function lu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Al(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ou(e,t,n){const a=t.matched.length-1,i=n.matched.length-1;return a>-1&&a===i&&dn(t.matched[a],n.matched[i])&&os(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function dn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function os(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!su(e[n],t[n]))return!1;return!0}function su(e,t){return $e(e)?kl(e,t):$e(t)?kl(t,e):e?.valueOf()===t?.valueOf()}function kl(e,t){return $e(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function ru(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=n.length-1,o,s;for(o=0;o<a.length;o++)if(s=a[o],s!==".")if(s==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(o).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ai=(function(e){return e.pop="pop",e.push="push",e})({}),Oa=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function cu(e){if(!e)if(nn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),iu(e)}const uu=/^[^#]+#/;function du(e,t){return e.replace(uu,"#")+t}function pu(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function fu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=pu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function bl(e,t){return(history.state?history.state.position-t:-1)+e}const ii=new Map;function mu(e,t){ii.set(e,t)}function hu(e){const t=ii.get(e);return ii.delete(e),t}function gu(e){return typeof e=="string"||e&&typeof e=="object"}function ss(e){return typeof e=="string"||typeof e=="symbol"}let be=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const rs=Symbol("");be.MATCHER_NOT_FOUND+"",be.NAVIGATION_GUARD_REDIRECT+"",be.NAVIGATION_ABORTED+"",be.NAVIGATION_CANCELLED+"",be.NAVIGATION_DUPLICATED+"";function pn(e,t){return oe(new Error,{type:e,[rs]:!0},t)}function dt(e,t){return e instanceof Error&&rs in e&&(t==null||!!(e.type&t))}const Au=["params","query","hash"];function ku(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Au)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function bu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const i=n[a].replace(ns," "),l=i.indexOf("="),o=Ln(l<0?i:i.slice(0,l)),s=l<0?null:Ln(i.slice(l+1));if(o in t){let c=t[o];$e(c)||(c=t[o]=[c]),c.push(s)}else t[o]=s}return t}function vl(e){let t="";for(let n in e){const a=e[n];if(n=eu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(a)?a.map(i=>i&&ni(i)):[a&&ni(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function vu(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=$e(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const yu=Symbol(""),yl=Symbol(""),xa=Symbol(""),Di=Symbol(""),li=Symbol("");function kn(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Kt(e,t,n,a,i,l=o=>o()){const o=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{const f=h=>{h===!1?c(pn(be.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?c(h):gu(h)?c(pn(be.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&a.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),s())},u=l(()=>e.call(a&&a.instances[i],t,n,f));let d=Promise.resolve(u);e.length<3&&(d=d.then(f)),d.catch(h=>c(h))})}function Na(e,t,n,a,i=l=>l()){const l=[];for(const o of e)for(const s in o.components){let c=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(es(c)){const f=(c.__vccOpts||c)[t];f&&l.push(Kt(f,n,a,o,s,i))}else{let f=c();l.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${s}" at "${o.path}"`);const d=Fc(u)?u.default:u;o.mods[s]=u,o.components[s]=d;const h=(d.__vccOpts||d)[t];return h&&Kt(h,n,a,o,s,i)()}))}}return l}function xu(e,t){const n=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let o=0;o<l;o++){const s=t.matched[o];s&&(e.matched.find(f=>dn(f,s))?a.push(s):n.push(s));const c=e.matched[o];c&&(t.matched.find(f=>dn(f,c))||i.push(c))}return[n,a,i]}let wu=()=>location.protocol+"//"+location.host;function cs(e,t){const{pathname:n,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let o=i.includes(e.slice(l))?e.slice(l).length:1,s=i.slice(o);return s[0]!=="/"&&(s="/"+s),Al(s,"")}return Al(n,e)+a+i}function Pu(e,t,n,a){let i=[],l=[],o=null;const s=({state:h})=>{const g=cs(e,location),P=n.value,A=t.value;let b=0;if(h){if(n.value=g,t.value=h,o&&o===P){o=null;return}b=A?h.position-A.position:0}else a(g);i.forEach(y=>{y(n.value,P,{delta:b,type:ai.pop,direction:b?b>0?Oa.forward:Oa.back:Oa.unknown})})};function c(){o=n.value}function f(h){i.push(h);const g=()=>{const P=i.indexOf(h);P>-1&&i.splice(P,1)};return l.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(oe({},h.state,{scroll:ya()}),"")}}function d(){for(const h of l)h();l=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:f,destroy:d}}function xl(e,t,n,a=!1,i=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:i?ya():null}}function Mu(e){const{history:t,location:n}=window,a={value:cs(e,n)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,f,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:wu()+e+c;try{t[u?"replaceState":"pushState"](f,"",h),i.value=f}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,f){l(c,oe({},t.state,xl(i.value.back,c,i.value.forward,!0),f,{position:i.value.position}),!0),a.value=c}function s(c,f){const u=oe({},i.value,t.state,{forward:c,scroll:ya()});l(u.current,u,!0),l(c,oe({},xl(a.value,c,null),{position:u.position+1},f),!1),a.value=c}return{location:a,state:i,push:s,replace:o}}function Du(e){e=cu(e);const t=Mu(e),n=Pu(e,t.state,t.location,t.replace);function a(l,o=!0){o||n.pauseListeners(),history.go(l)}const i=oe({location:"",base:e,go:a,createHref:du.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Ru(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Du(e)}let Wt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var xe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(xe||{});const Su={type:Wt.Static,value:""},Cu=/[a-zA-Z0-9_]/;function Eu(e){if(!e)return[[]];if(e==="/")return[[Su]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=xe.Static,a=n;const i=[];let l;function o(){l&&i.push(l),l=[]}let s=0,c,f="",u="";function d(){f&&(n===xe.Static?l.push({type:Wt.Static,value:f}):n===xe.Param||n===xe.ParamRegExp||n===xe.ParamRegExpEnd?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Wt.Param,value:f,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&n!==xe.ParamRegExp){a=n,n=xe.EscapeNext;continue}switch(n){case xe.Static:c==="/"?(f&&d(),o()):c===":"?(d(),n=xe.Param):h();break;case xe.EscapeNext:h(),n=a;break;case xe.Param:c==="("?n=xe.ParamRegExp:Cu.test(c)?h():(d(),n=xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case xe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=xe.ParamRegExpEnd:u+=c;break;case xe.ParamRegExpEnd:d(),n=xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--,u="";break;default:t("Unknown state");break}}return n===xe.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),i}const wl="[^/]+?",Tu={sensitive:!1,strict:!1,start:!0,end:!0};var _e=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(_e||{});const _u=/[.+*?^${}()[\]/\\]/g;function Ku(e,t){const n=oe({},Tu,t),a=[];let i=n.start?"^":"";const l=[];for(const f of e){const u=f.length?[]:[_e.Root];n.strict&&!f.length&&(i+="/");for(let d=0;d<f.length;d++){const h=f[d];let g=_e.Segment+(n.sensitive?_e.BonusCaseSensitive:0);if(h.type===Wt.Static)d||(i+="/"),i+=h.value.replace(_u,"\\$&"),g+=_e.Static;else if(h.type===Wt.Param){const{value:P,repeatable:A,optional:b,regexp:y}=h;l.push({name:P,repeatable:A,optional:b});const v=y||wl;if(v!==wl){g+=_e.BonusCustomRegExp;try{`${v}`}catch(w){throw new Error(`Invalid custom RegExp for param "${P}" (${v}): `+w.message)}}let x=A?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(x=b&&f.length<2?`(?:/${x})`:"/"+x),b&&(x+="?"),i+=x,g+=_e.Dynamic,b&&(g+=_e.BonusOptional),A&&(g+=_e.BonusRepeatable),v===".*"&&(g+=_e.BonusWildcard)}u.push(g)}a.push(u)}if(n.strict&&n.end){const f=a.length-1;a[f][a[f].length-1]+=_e.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(f){const u=f.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",P=l[h-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function c(f){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===Wt.Static)u+=g.value;else if(g.type===Wt.Param){const{value:P,repeatable:A,optional:b}=g,y=P in f?f[P]:"";if($e(y)&&!A)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const v=$e(y)?y.join("/"):y;if(!v)if(b)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);u+=v}}return u||"/"}return{re:o,score:a,keys:l,parse:s,stringify:c}}function Iu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===_e.Static+_e.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===_e.Static+_e.Segment?1:-1:0}function us(e,t){let n=0;const a=e.score,i=t.score;for(;n<a.length&&n<i.length;){const l=Iu(a[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-a.length)===1){if(Pl(a))return 1;if(Pl(i))return-1}return i.length-a.length}function Pl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Bu={strict:!1,end:!0,sensitive:!1};function Ou(e,t,n){const a=Ku(Eu(e.path),n),i=oe(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Nu(e,t){const n=[],a=new Map;t=gl(Bu,t);function i(d){return a.get(d)}function l(d,h,g){const P=!g,A=Dl(d);A.aliasOf=g&&g.record;const b=gl(t,d),y=[A];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of w)y.push(Dl(oe({},A,{components:g?g.record.components:A.components,path:H,aliasOf:g?g.record:A})))}let v,x;for(const w of y){const{path:H}=w;if(h&&H[0]!=="/"){const X=h.record.path,te=X[X.length-1]==="/"?"":"/";w.path=h.record.path+(H&&te+H)}if(v=Ou(w,h,b),g?g.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),P&&d.name&&!Rl(v)&&o(d.name)),ds(v)&&c(v),A.children){const X=A.children;for(let te=0;te<X.length;te++)l(X[te],v,g&&g.children[te])}g=g||v}return x?()=>{o(x)}:Sn}function o(d){if(ss(d)){const h=a.get(d);h&&(a.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&a.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function s(){return n}function c(d){const h=Uu(d,n);n.splice(h,0,d),d.record.name&&!Rl(d)&&a.set(d.record.name,d)}function f(d,h){let g,P={},A,b;if("name"in d&&d.name){if(g=a.get(d.name),!g)throw pn(be.MATCHER_NOT_FOUND,{location:d});b=g.record.name,P=oe(Ml(h.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Ml(d.params,g.keys.map(x=>x.name))),A=g.stringify(P)}else if(d.path!=null)A=d.path,g=n.find(x=>x.re.test(A)),g&&(P=g.parse(A),b=g.record.name);else{if(g=h.name?a.get(h.name):n.find(x=>x.re.test(h.path)),!g)throw pn(be.MATCHER_NOT_FOUND,{location:d,currentLocation:h});b=g.record.name,P=oe({},h.params,d.params),A=g.stringify(P)}const y=[];let v=g;for(;v;)y.unshift(v.record),v=v.parent;return{name:b,path:A,params:P,matched:y,meta:Gu(y)}}e.forEach(d=>l(d));function u(){n.length=0,a.clear()}return{addRoute:l,resolve:f,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Ml(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Dl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Lu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Lu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Rl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Gu(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function Uu(e,t){let n=0,a=t.length;for(;n!==a;){const l=n+a>>1;us(e,t[l])<0?a=l:n=l+1}const i=Hu(e);return i&&(a=t.lastIndexOf(i,a-1)),a}function Hu(e){let t=e;for(;t=t.parent;)if(ds(t)&&us(e,t)===0)return t}function ds({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Sl(e){const t=ze(xa),n=ze(Di),a=Y(()=>{const c=Ie(e.to);return t.resolve(c)}),i=Y(()=>{const{matched:c}=a.value,{length:f}=c,u=c[f-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(dn.bind(null,u));if(h>-1)return h;const g=Cl(c[f-2]);return f>1&&Cl(u)===g&&d[d.length-1].path!==g?d.findIndex(dn.bind(null,c[f-2])):h}),l=Y(()=>i.value>-1&&Wu(n.params,a.value.params)),o=Y(()=>i.value>-1&&i.value===n.matched.length-1&&os(n.params,a.value.params));function s(c={}){if(Ju(c)){const f=t[Ie(e.replace)?"replace":"push"](Ie(e.to)).catch(Sn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:a,href:Y(()=>a.value.href),isActive:l,isExactActive:o,navigate:s}}function ju(e){return e.length===1?e[0]:e}const Fu=vo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sl,setup(e,{slots:t}){const n=Hn(Sl(e)),{options:a}=ze(xa),i=Y(()=>({[El(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[El(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&ju(t.default(n));return e.custom?l:wi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),Vu=Fu;function Ju(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wu(e,t){for(const n in t){const a=t[n],i=e[n];if(typeof a=="string"){if(a!==i)return!1}else if(!$e(i)||i.length!==a.length||a.some((l,o)=>l.valueOf()!==i[o].valueOf()))return!1}return!0}function Cl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const El=(e,t,n)=>e??t??n,Qu=vo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=ze(li),i=Y(()=>e.route||a.value),l=ze(yl,0),o=Y(()=>{let f=Ie(l);const{matched:u}=i.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),s=Y(()=>i.value.matched[o.value]);Zn(yl,Y(()=>o.value+1)),Zn(yu,s),Zn(li,i);const c=re();return Nt(()=>[c.value,s.value,e.name],([f,u,d],[h,g,P])=>{u&&(u.instances[d]=f,g&&g!==u&&f&&f===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),f&&u&&(!g||!dn(u,g)||!h)&&(u.enterCallbacks[d]||[]).forEach(A=>A(f))},{flush:"post"}),()=>{const f=i.value,u=e.name,d=s.value,h=d&&d.components[u];if(!h)return Tl(n.default,{Component:h,route:f});const g=d.props[u],P=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=wi(h,oe({},P,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Tl(n.default,{Component:b,route:f})||b}}});function Tl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const qu=Qu;function zu(e){const t=Nu(e.routes,e),n=e.parseQuery||bu,a=e.stringifyQuery||vl,i=e.history,l=kn(),o=kn(),s=kn(),c=qs(Rt);let f=Rt;nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ia.bind(null,R=>""+R),d=Ia.bind(null,nu),h=Ia.bind(null,Ln);function g(R,G){let O,F;return ss(R)?(O=t.getRecordMatcher(R),F=G):F=R,t.addRoute(F,O)}function P(R){const G=t.getRecordMatcher(R);G&&t.removeRoute(G)}function A(){return t.getRoutes().map(R=>R.record)}function b(R){return!!t.getRecordMatcher(R)}function y(R,G){if(G=oe({},G||c.value),typeof R=="string"){const k=Ba(n,R,G.path),M=t.resolve({path:k.path},G),S=i.createHref(k.fullPath);return oe(k,M,{params:h(M.params),hash:Ln(k.hash),redirectedFrom:void 0,href:S})}let O;if(R.path!=null)O=oe({},R,{path:Ba(n,R.path,G.path).path});else{const k=oe({},R.params);for(const M in k)k[M]==null&&delete k[M];O=oe({},R,{params:d(k)}),G.params=d(G.params)}const F=t.resolve(O,G),$=R.hash||"";F.params=u(h(F.params));const p=lu(a,oe({},R,{hash:$c($),path:F.path})),m=i.createHref(p);return oe({fullPath:p,hash:$,query:a===vl?vu(R.query):R.query||{}},F,{redirectedFrom:void 0,href:m})}function v(R){return typeof R=="string"?Ba(n,R,c.value.path):oe({},R)}function x(R,G){if(f!==R)return pn(be.NAVIGATION_CANCELLED,{from:G,to:R})}function w(R){return te(R)}function H(R){return w(oe(v(R),{replace:!0}))}function X(R,G){const O=R.matched[R.matched.length-1];if(O&&O.redirect){const{redirect:F}=O;let $=typeof F=="function"?F(R,G):F;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=v($):{path:$},$.params={}),oe({query:R.query,hash:R.hash,params:$.path!=null?{}:R.params},$)}}function te(R,G){const O=f=y(R),F=c.value,$=R.state,p=R.force,m=R.replace===!0,k=X(O,F);if(k)return te(oe(v(k),{state:typeof k=="object"?oe({},$,k.state):$,force:p,replace:m}),G||O);const M=O;M.redirectedFrom=G;let S;return!p&&ou(a,F,O)&&(S=pn(be.NAVIGATION_DUPLICATED,{to:M,from:F}),et(F,F,!0,!1)),(S?Promise.resolve(S):Z(M,F)).catch(D=>dt(D)?dt(D,be.NAVIGATION_GUARD_REDIRECT)?D:Mt(D):le(D,M,F)).then(D=>{if(D){if(dt(D,be.NAVIGATION_GUARD_REDIRECT))return te(oe({replace:m},v(D.to),{state:typeof D.to=="object"?oe({},$,D.to.state):$,force:p}),G||M)}else D=L(M,F,!0,m,$);return ie(M,F,D),D})}function Ae(R,G){const O=x(R,G);return O?Promise.reject(O):Promise.resolve()}function j(R){const G=$t.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(R):R()}function Z(R,G){let O;const[F,$,p]=xu(R,G);O=Na(F.reverse(),"beforeRouteLeave",R,G);for(const k of F)k.leaveGuards.forEach(M=>{O.push(Kt(M,R,G))});const m=Ae.bind(null,R,G);return O.push(m),Fe(O).then(()=>{O=[];for(const k of l.list())O.push(Kt(k,R,G));return O.push(m),Fe(O)}).then(()=>{O=Na($,"beforeRouteUpdate",R,G);for(const k of $)k.updateGuards.forEach(M=>{O.push(Kt(M,R,G))});return O.push(m),Fe(O)}).then(()=>{O=[];for(const k of p)if(k.beforeEnter)if($e(k.beforeEnter))for(const M of k.beforeEnter)O.push(Kt(M,R,G));else O.push(Kt(k.beforeEnter,R,G));return O.push(m),Fe(O)}).then(()=>(R.matched.forEach(k=>k.enterCallbacks={}),O=Na(p,"beforeRouteEnter",R,G,j),O.push(m),Fe(O))).then(()=>{O=[];for(const k of o.list())O.push(Kt(k,R,G));return O.push(m),Fe(O)}).catch(k=>dt(k,be.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function ie(R,G,O){s.list().forEach(F=>j(()=>F(R,G,O)))}function L(R,G,O,F,$){const p=x(R,G);if(p)return p;const m=G===Rt,k=nn?history.state:{};O&&(F||m?i.replace(R.fullPath,oe({scroll:m&&k&&k.scroll},$)):i.push(R.fullPath,$)),c.value=R,et(R,G,O,m),Mt()}let ne;function we(){ne||(ne=i.listen((R,G,O)=>{if(!Gt.listening)return;const F=y(R),$=X(F,Gt.currentRoute.value);if($){te(oe($,{replace:!0,force:!0}),F).catch(Sn);return}f=F;const p=c.value;nn&&mu(bl(p.fullPath,O.delta),ya()),Z(F,p).catch(m=>dt(m,be.NAVIGATION_ABORTED|be.NAVIGATION_CANCELLED)?m:dt(m,be.NAVIGATION_GUARD_REDIRECT)?(te(oe(v(m.to),{force:!0}),F).then(k=>{dt(k,be.NAVIGATION_ABORTED|be.NAVIGATION_DUPLICATED)&&!O.delta&&O.type===ai.pop&&i.go(-1,!1)}).catch(Sn),Promise.reject()):(O.delta&&i.go(-O.delta,!1),le(m,F,p))).then(m=>{m=m||L(F,p,!1),m&&(O.delta&&!dt(m,be.NAVIGATION_CANCELLED)?i.go(-O.delta,!1):O.type===ai.pop&&dt(m,be.NAVIGATION_ABORTED|be.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ie(F,p,m)}).catch(Sn)}))}let Ge=kn(),ye=kn(),ue;function le(R,G,O){Mt(R);const F=ye.list();return F.length?F.forEach($=>$(R,G,O)):console.error(R),Promise.reject(R)}function rt(){return ue&&c.value!==Rt?Promise.resolve():new Promise((R,G)=>{Ge.add([R,G])})}function Mt(R){return ue||(ue=!R,we(),Ge.list().forEach(([G,O])=>R?O(R):G()),Ge.reset()),R}function et(R,G,O,F){const{scrollBehavior:$}=e;if(!nn||!$)return Promise.resolve();const p=!O&&hu(bl(R.fullPath,0))||(F||!O)&&history.state&&history.state.scroll||null;return ha().then(()=>$(R,G,p)).then(m=>m&&fu(m)).catch(m=>le(m,R,G))}const Be=R=>i.go(R);let Yt;const $t=new Set,Gt={currentRoute:c,listening:!0,addRoute:g,removeRoute:P,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:A,resolve:y,options:e,push:w,replace:H,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:l.add,beforeResolve:o.add,afterEach:s.add,onError:ye.add,isReady:rt,install(R){R.component("RouterLink",Vu),R.component("RouterView",qu),R.config.globalProperties.$router=Gt,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(c)}),nn&&!Yt&&c.value===Rt&&(Yt=!0,w(i.location).catch(F=>{}));const G={};for(const F in Rt)Object.defineProperty(G,F,{get:()=>c.value[F],enumerable:!0});R.provide(xa,Gt),R.provide(Di,ao(G)),R.provide(li,c);const O=R.unmount;$t.add(R),R.unmount=function(){$t.delete(R),$t.size<1&&(f=Rt,ne&&ne(),ne=null,c.value=Rt,Yt=!1,ue=!1),O()}}};function Fe(R){return R.reduce((G,O)=>G.then(()=>j(O)),Promise.resolve())}return Gt}function ps(){return ze(xa)}function fs(e){return ze(Di)}const mn=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},Xu={class:"absolute inset-0 pointer-events-none z-0"},Zu={class:"fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl"},Yu={class:"hidden sm:flex flex-col ml-2 leading-tight overflow-hidden"},$u={class:"font-black italic text-xs md:text-base uppercase tracking-widest truncate"},ed={class:"flex justify-center px-1 md:px-4 overflow-hidden"},td={class:"relative flex bg-black/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner w-full max-w-fit overflow-hidden"},nd={class:"flex justify-end z-10 pr-1 min-w-fit"},ad={class:"text-xs md:text-lg"},id={class:"max-w-7xl mx-auto pt-24 md:pt-44 px-4 md:px-8 pb-20 relative z-10 animate-page-in"},ld={__name:"AppLayout",props:["isDark"],emits:["toggleDark"],setup(e){const t=fs(),n=ps(),a=re(null),i=re({}),l=re({left:"0px",width:"0px",opacity:0}),o=()=>n.push("/"),s=Array.from({length:80},(d,h)=>({id:h,size:Math.random()*5+2+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*3+2+"s",delay:Math.random()*5+"s"})),c=Array.from({length:40},(d,h)=>({id:h,size:Math.random()*2+1+"px",top:Math.random()*100+"%",left:Math.random()*100+"%",duration:Math.random()*15+10+"s",delay:Math.random()*10+"s"})),f=(d,h)=>{d&&(i.value[h]=d.$el||d)},u=async()=>{await ha();const d=i.value[t.path];d&&(l.value={left:`${d.offsetLeft}px`,width:`${d.offsetWidth}px`,opacity:1,boxShadow:t.path==="/bs-calc"?"0 4px 15px -3px rgba(245, 158, 11, 0.6)":"0 8px 20px -5px rgba(139, 92, 246, 0.6)",background:t.path==="/bs-calc"?"linear-gradient(to right, #f59e0b, #ef4444)":"linear-gradient(to right, #ef4444, #a855f7)"},d.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))};return Fn(()=>{setTimeout(u,400),window.addEventListener("resize",u)}),Nt(()=>t.path,u),(d,h)=>{const g=Do("router-link");return T(),I("div",{class:E(["min-h-screen transition-all duration-[1000ms] relative overflow-hidden bg-fixed",e.isDark?"bg-mesh-dark text-white":"bg-mesh-light text-slate-900"])},[r("div",Xu,[(T(!0),I(q,null,de(Ie(c),P=>(T(),I("div",{key:"dust-"+P.id,class:E(["absolute rounded-full blur-[1px] animate-float opacity-20",e.isDark?"bg-indigo-400":"bg-blue-300"]),style:Qt({width:P.size,height:P.size,top:P.top,left:P.left,animationDuration:P.duration,animationDelay:P.delay})},null,6))),128)),(T(!0),I(q,null,de(Ie(s),P=>(T(),I("div",{key:"star-"+P.id,class:E(["absolute animate-twinkle star-flare shadow-glow",e.isDark?"bg-white":"bg-indigo-600"]),style:Qt({width:P.size,height:P.size,top:P.top,left:P.left,animationDelay:P.delay})},null,6))),128))]),r("nav",Zu,[r("div",{class:E(["backdrop-blur-3xl border grid grid-cols-[auto_1fr_auto] items-center rounded-full transition-all duration-700 shadow-2xl p-1.5 md:p-2",e.isDark?"bg-black/40 border-white/10 shadow-indigo-500/10":"bg-white/70 border-white/50 shadow-blue-500/5"])},[r("div",{onClick:o,class:"flex items-center cursor-pointer group select-none z-10 pl-2 pr-1 active:scale-95 transition-transform min-w-fit"},[r("div",{class:E(["w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border-2 transition-all duration-300 shadow-lg shrink-0",e.isDark?"border-white/20":"border-slate-300"])},[...h[1]||(h[1]=[r("img",{src:Pi,alt:"Logo",class:"w-full h-full object-cover scale-110 group-hover:rotate-[360deg] transition-transform duration-[1.5s]"},null,-1)])],2),r("div",Yu,[r("span",$u,[r("span",{class:E(e.isDark?"text-white":"text-black")},"TIMI",2),h[2]||(h[2]=r("span",{class:"ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"},"DB",-1))]),h[3]||(h[3]=r("span",{class:"text-[6px] md:text-[7px] font-bold uppercase opacity-50 tracking-widest truncate"},"Toram Online Tools",-1))])]),r("div",ed,[r("div",td,[r("div",{ref_key:"navContainer",ref:a,class:"flex items-center overflow-x-auto no-scrollbar scroll-smooth relative gap-0"},[r("div",{class:"absolute h-[calc(100%-4px)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0",style:Qt(l.value)},null,4),ke(g,{ref:P=>f(P,"/"),to:"/",class:"nav-link","active-class":"active-link"},{default:At(()=>[...h[4]||(h[4]=[kt("LIST BAG",-1)])]),_:1},512),ke(g,{ref:P=>f(P,"/mq"),to:"/mq",class:"nav-link","active-class":"active-link"},{default:At(()=>[...h[5]||(h[5]=[kt("LIST MQ",-1)])]),_:1},512),ke(g,{ref:P=>f(P,"/mq-calc"),to:"/mq-calc",class:"nav-link","active-class":"active-link"},{default:At(()=>[...h[6]||(h[6]=[kt("MQ-CALC",-1)])]),_:1},512),ke(g,{ref:P=>f(P,"/bs-calc"),to:"/bs-calc",class:"nav-link","active-class":"active-link"},{default:At(()=>[...h[7]||(h[7]=[kt("BS-CALC",-1)])]),_:1},512),ke(g,{ref:P=>f(P,"/xtall"),to:"/xtall",class:"nav-link","active-class":"active-link"},{default:At(()=>[...h[8]||(h[8]=[kt("XTALL",-1)])]),_:1},512)],512)])]),r("div",nd,[r("button",{onClick:h[0]||(h[0]=P=>d.$emit("toggleDark")),class:E(["w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all duration-500 active:scale-75 shadow-lg shrink-0",e.isDark?"bg-slate-900 border-white/10 text-orange-400":"bg-white border-slate-200 text-indigo-600"])},[r("span",ad,U(e.isDark?"🌙":"☀️"),1)],2)])],2)]),r("main",id,[xr(d.$slots,"default",{},void 0)])],2)}}},od=mn(ld,[["__scopeId","data-v-0aa6fff7"]]),sd={class:"min-h-screen font-sans selection:bg-indigo-500 selection:text-white"},rd={__name:"App",setup(e){const t=re(!1),n=()=>{t.value=!t.value,document.documentElement.classList.toggle("dark",t.value),localStorage.setItem("theme",t.value?"dark":"light")};return Fn(()=>{const a=localStorage.getItem("theme");t.value=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",t.value)}),(a,i)=>{const l=Do("router-view");return T(),I("div",sd,[ke(od,{isDark:t.value,onToggleDark:n},{default:At(()=>[ke(l,null,{default:At(({Component:o})=>[ke(mc,{name:"slide-page",mode:"out-in"},{default:At(()=>[(T(),Xt(yr(o),{isDark:t.value},null,8,["isDark"]))]),_:2},1024)]),_:1})]),_:1},8,["isDark"])])}}},cd="/toram-vue/images/Bag-Toram.png",zn=[{id:1,slot:"50 ➔ 51",nama_item:"Colon Skin (Kulit Colon)",jumlah:"x1",spina:0,monster:"Colon",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:2,slot:"51 ➔ 52",nama_item:"Gorgeous Fur (Kulit Berkualitas)",jumlah:"x1",spina:0,monster:"Lavarca",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rakau Plains (Dataran Rakau) / Ruined Temple Town (Kota Kuil Runtuh)"},{id:3,slot:"52 ➔ 53",nama_item:"Spina",jumlah:"-",spina:1e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store (Toko Kelontong)"},{id:4,slot:"53 ➔ 54",nama_item:"Minotaur Skin (Kulit Minotaur)",jumlah:"x1",spina:0,monster:"Minotaur",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ruined Temple: Forbidden Hall (Kuil Runtuh: Aula Terlarang)"},{id:5,slot:"53 ➔ 54",nama_item:"Orange Crystal Fragment (Pecahan Kristal Jingga)",jumlah:"x1",spina:0,monster:"Cobre",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Land Under Development (Tanah Pembangunan)"},{id:6,slot:"54 ➔ 55",nama_item:"Forest Wolf Skin (Kulit Anjing Hutan)",jumlah:"x1",spina:0,monster:"Forest Wolf (Anjing Hutan)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Marbaro Forest: Deepest Part (Hutan Marbaro: Bagian Dalam)"},{id:7,slot:"54 ➔ 55",nama_item:"Goblin Medal (Lencana Goblin)",jumlah:"x1",spina:0,monster:"Boss Goblin (Goblin Bos)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Ribisco Cave: Deepest Part (Gua Ribisco: Bagian Dalam)"},{id:8,slot:"55 ➔ 56",nama_item:"Spina",jumlah:"-",spina:2e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:9,slot:"56 ➔ 57",nama_item:"Mochelo Fur (Bulu Mochelo)",jumlah:"x1",spina:0,monster:"Mochelo",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:10,slot:"56 ➔ 57",nama_item:"Linen Cloth (Kain Linen)",jumlah:"x10",spina:0,monster:"Crow Killer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Douce Hamlet (Dusun Douce)"},{id:11,slot:"57 ➔ 58",nama_item:"Green Dragon Fur (Bulu Naga Giok)",jumlah:"x1",spina:0,monster:"Forestia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Land of Chaos (Tanah Kaos)"},{id:12,slot:"57 ➔ 58",nama_item:"High Quality Horn (Tanduk Berkualitas)",jumlah:"x10",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Yorl Highlands (Tanah Tinggi Yorl)"},{id:13,slot:"58 ➔ 59",nama_item:"Boss Roga Belt (Sabuk Bos Roga)",jumlah:"x1",spina:0,monster:"Boss Roga (Bos Roga)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:14,slot:"58 ➔ 59",nama_item:"Broadcloth (Kain Beludu)",jumlah:"x10",spina:0,monster:"Orc / Orc Warrior (Orc Petarung)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Saham Crater (Kawah Saham) / Saham Underground Cave (Gua Bawah Tanah Saham)"},{id:15,slot:"59 ➔ 60",nama_item:"Spina",jumlah:"-",spina:4e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:16,slot:"60 ➔ 61",nama_item:"Sharp Bear Claw (Cakar Beruang)",jumlah:"x2",spina:0,monster:"Violacoon",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Darkanon Plain (Padang Darkanon)"},{id:17,slot:"60 ➔ 61",nama_item:"Sheeting Fabric (Kain Alas)",jumlah:"x20",spina:0,monster:"Cassy",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ancient Empress Tomb (Makam Ratu Kuno: Area 2/3)"},{id:18,slot:"61 ➔ 62",nama_item:"Heavy Tough Chain (Rantai Kukuh)",jumlah:"x2",spina:0,monster:"Masked Warrior (Pendekar Beratopeng)",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Fiery Volcano: Area 3 (Lereng Merapi: Area 3)"},{id:19,slot:"61 ➔ 62",nama_item:"Polyester Cloth (Kain Polister)",jumlah:"x20",spina:0,monster:"Shining Gentleman / Wandering Shadow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Lost Town (Kota Hilang)"},{id:20,slot:"62 ➔ 63",nama_item:"Grass Dragon Scale (Sisik Naga Sabana)",jumlah:"x2",spina:0,monster:"Grass Dragon Yelb (Naga Sabana Yelb)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Albatif Village (Desa Albatif)"},{id:21,slot:"62 ➔ 63",nama_item:"Space Wolf Fur (Kulit Serigala Alien)",jumlah:"x20",spina:0,monster:"Outer World Wolf (Serigala Luar)",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Gate to Another World (Gerbang Dunia Lain)"},{id:22,slot:"63 ➔ 64",nama_item:"Spina",jumlah:"-",spina:8e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:23,slot:"64 ➔ 65",nama_item:"Torn Cloak (Jubah Sobek)",jumlah:"x2",spina:0,monster:"Goovua",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Akaku Desert: Hill (Gurun Akaku: Bukit)"},{id:24,slot:"64 ➔ 65",nama_item:"Squirrel Fur (Kulit Tupai)",jumlah:"x20",spina:0,monster:"Rodentail",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Maia Deila"},{id:25,slot:"65 ➔ 66",nama_item:"Jade Raptor Horn (Tanduk Elang Zamrud)",jumlah:"x2",spina:0,monster:"Jade Raptor (Elang Zamrud)",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Gravel Terrace (Teras Kerikil)"},{id:26,slot:"65 ➔ 66",nama_item:"Goat Fur (Bulu Kambing)",jumlah:"x20",spina:0,monster:"Koza",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dunkel Valley (Jurang Dunkel)"},{id:27,slot:"66 ➔ 67",nama_item:"Twilight Dragon Wing (Sayap Naga Senja)",jumlah:"x2",spina:0,monster:"Twilight Dragon (Naga Senja)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Fort Solfini: Roof (Benteng Solfini: Atap)"},{id:28,slot:"66 ➔ 67",nama_item:"Fleecy Fur (Bulu Halus)",jumlah:"x20",spina:0,monster:"Rabby / Little Snow Bear",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Polde Ice Valley (Lembah Es Polde)"},{id:29,slot:"67 ➔ 68",nama_item:"Spina",jumlah:"-",spina:16e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:30,slot:"68 ➔ 69",nama_item:"Chain of Purgatory (Rantai Penyucian)",jumlah:"x2",spina:0,monster:"Cerberus",kelas_mob:"Boss",kelas_bahan:"Mana",lokasi:"Spring of Rebirth: Top (Mata Air Kelahiran: Puncak)"},{id:31,slot:"68 ➔ 69",nama_item:"Wavering Cloth (Kain Goyah)",jumlah:"x20",spina:0,monster:"Jewel Eye",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Spring of Rebirth (Mata Air Kelahiran: Tengah/Atas)"},{id:32,slot:"69 ➔ 70",nama_item:"Aranea Silk (Benang Aranea)",jumlah:"x2",spina:0,monster:"Aranea",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Pusat)"},{id:33,slot:"69 ➔ 70",nama_item:"Small Spider Silk (Benang Laba-Laba Kecil)",jumlah:"x20",spina:0,monster:"Aramia",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Garden of Sublimation (Taman Sublimasi: Area 2/3)"},{id:34,slot:"70 ➔ 71",nama_item:"Copied Goddess Robe (Kain Dewi Tiruan)",jumlah:"x3",spina:0,monster:"Imitacia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Dark Castle: Grand Hall (Istana Gelap: Aula Besar)"},{id:35,slot:"70 ➔ 71",nama_item:"Floating Cloth (Kain Apung)",jumlah:"x10",spina:0,monster:"Flying Executioner",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cradle of Soldier (Buaian Prajurit)"},{id:36,slot:"70 ➔ 71",nama_item:"Soft Paw (Tapak Lembut)",jumlah:"x20",spina:0,monster:"Bunny Summoner / Lapin (Dukun Lapin)",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Trace of Dark River (Sungai Kegelapan)"},{id:37,slot:"71 ➔ 72",nama_item:"Evil Beast Mane (Surai Hewan Iblis)",jumlah:"x3",spina:0,monster:"Memecoleous",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Dark Castle: Area 2 (Istana Gelap: Area 2)"},{id:38,slot:"71 ➔ 72",nama_item:"Hard Paw Pad (Bantalan Tapak Keras)",jumlah:"x10",spina:0,monster:"Manticore",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:39,slot:"71 ➔ 72",nama_item:"Dark Shadow Feather (Bulu Bayangan Hitam)",jumlah:"x20",spina:0,monster:"Shadow Fly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Castle (Istana Gelap: Area 1/2/3)"},{id:40,slot:"72 ➔ 73",nama_item:"Spina",jumlah:"-",spina:32e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:41,slot:"73 ➔ 74",nama_item:"Tapir Fur (Bulu Tapir)",jumlah:"x3",spina:0,monster:"Tapir",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:42,slot:"73 ➔ 74",nama_item:"Stiff Fur (Bulu Kaku)",jumlah:"x10",spina:0,monster:"Wooly",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Blazing Graben: Surface (Graben Membara: Permukaan)"},{id:43,slot:"73 ➔ 74",nama_item:"Anti-Rust Oil (Minyak Anti-Karat)",jumlah:"x20",spina:0,monster:"Ornis Demi Machina",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Artillery Defense Line (Garis Pertahanan Artileri Otomatis)"},{id:44,slot:"74 ➔ 75",nama_item:"Ancient Fabric (Kain Kuno)",jumlah:"x3",spina:0,monster:"Proto Leon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Singolare Ruins: 3rd Floor (Reruntuhan Singolare: Lantai 3)"},{id:45,slot:"74 ➔ 75",nama_item:"Soft Tree Bark (Kulit Pohon Lunak)",jumlah:"x10",spina:0,monster:"Floral Bee",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Site of Simscracker (Situs Simcracker)"},{id:46,slot:"74 ➔ 75",nama_item:"Dirty Potum Hair (Rambut Potum Kotor)",jumlah:"x20",spina:0,monster:"Slum Potum",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Klaspe Slum (Klaspe Kumuh)"},{id:47,slot:"75 ➔ 76",nama_item:"Crimson Huge Bone (Tulang Raksasa Merah)",jumlah:"x3",spina:0,monster:"Dusk Machina",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil: Area 2)"},{id:48,slot:"75 ➔ 76",nama_item:"Torn Black Coat (Mantel Hitam Sobek)",jumlah:"x10",spina:0,monster:"Rugos Demi Machina",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:49,slot:"75 ➔ 76",nama_item:"Torn Chain (Rantai Putus)",jumlah:"x20",spina:0,monster:"Torture Machina (Machina Penyiksa)",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Small Demi Machina Factory (Pabrik Demi Machina Kecil)"},{id:50,slot:"76 ➔ 77",nama_item:"Chimera Scale (Sisik Chimera)",jumlah:"x3",spina:0,monster:"Mozto Machina",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar: Bagian Terdalam)"},{id:51,slot:"76 ➔ 77",nama_item:"Mysterious Luminary (Benda Pendar Aneh)",jumlah:"x10",spina:0,monster:"Horn Machina",kelas_mob:"Mob",kelas_bahan:"Mana",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:52,slot:"76 ➔ 77",nama_item:"Tough Tentacle (Tentakel Tangguh)",jumlah:"x20",spina:0,monster:"Ledon / Odelon Machina",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Large Demi Machina Factory (Pabrik Demi Machina Besar)"},{id:53,slot:"77 ➔ 78",nama_item:"Spina",jumlah:"-",spina:64e3,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:54,slot:"78 ➔ 79",nama_item:"Forest Spirit Robe (Jubah Roh Hutan)",jumlah:"x3",spina:0,monster:"Lalvada",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Monster Forest: Deep Part (Hutan Monster: Bagian Dalam)"},{id:55,slot:"78 ➔ 79",nama_item:"Plant Fang (Taring Tanaman)",jumlah:"x10",spina:0,monster:"Nepenthe",kelas_mob:"Mob",kelas_bahan:"Wood",lokasi:"Monster Forest (Hutan Monster)"},{id:56,slot:"78 ➔ 79",nama_item:"Felt Fabric (Kain Felt)",jumlah:"x20",spina:0,monster:"Puppet Dragon (Naga Boneka)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lufenas Mansion (Mansion Lufenas)"},{id:57,slot:"79 ➔ 80",nama_item:"Lyark Alloy (Aloi Lyark)",jumlah:"x3",spina:0,monster:"Gwaimol",kelas_mob:"Boss",kelas_bahan:"Metal",lokasi:"Cuervo Jail: Roof (Penjara Cuervo: Atap)"},{id:58,slot:"79 ➔ 80",nama_item:"Torn Officer Clothes (Baju Penjaga Robek)",jumlah:"x10",spina:0,monster:"Lyark Jailer (Sipir Lyark)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Cuervo Jail (Penjara Cuervo)"},{id:59,slot:"79 ➔ 80",nama_item:"Ox Fabric (Kain Lembu)",jumlah:"x20",spina:0,monster:"Lyark Specialist / Master Specialist",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Brahe Laboratory (Laboratorium Brahe)"},{id:60,slot:"80 ➔ 81",nama_item:"Light Emitting Cloth (Kain Bercahaya)",jumlah:"x4",spina:0,monster:"Seraph Machina",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Buried Tower: Inside (Menara Penembus Bumi: Sisi Dalam)"},{id:61,slot:"80 ➔ 81",nama_item:"Damaged Artificial Leather (Kulit Sintetis Rusak)",jumlah:"x20",spina:0,monster:"Lyark Brawler",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:62,slot:"80 ➔ 81",nama_item:"Executioner Loincloth (Cawat Pengeksekusi)",jumlah:"x20",spina:0,monster:"Volo",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Suburb of Droma Square (Sekitar Alun-alun Droma)"},{id:63,slot:"81 ➔ 82",nama_item:"Lil Empress Cloth Piece (Potongan Baju K. Kecil)",jumlah:"x4",spina:0,monster:"Venena Coenubia",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Ultimea Palace: Throne (Istana Ultimea: Takhta)"},{id:64,slot:"81 ➔ 82",nama_item:"Hard Armor Bit (Pecahan Zirah Keras)",jumlah:"x20",spina:0,monster:"High Tigris",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Ultimea Palace (Istana Ultimea)"},{id:65,slot:"81 ➔ 82",nama_item:"Snake Skin (Kulit Ular)",jumlah:"x20",spina:0,monster:"Pond Snake (Ular Kolam)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Copia Reservoirs (Reservoir Copia)"},{id:66,slot:"82 ➔ 83",nama_item:"Spina",jumlah:"-",spina:1e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:67,slot:"83 ➔ 84",nama_item:"Mom Fluck Skin (Kulit Mama Fluck)",jumlah:"x4",spina:0,monster:"Mom Fluck (Mama Fluck)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Forgotten Cave (Gua Pelupa)"},{id:68,slot:"83 ➔ 84",nama_item:"Colon Big Leaf (Daun Besar Colon)",jumlah:"x20",spina:0,monster:"Leedle Colon",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Rokoko Plains (Dataran Rakoko)"},{id:69,slot:"83 ➔ 84",nama_item:"Vertical Stripe Fur (Bulu Garis Vertikal)",jumlah:"x20",spina:0,monster:"Tehon (Rakun Tambun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Curonne Forest (Hutan Currone)"},{id:70,slot:"84 ➔ 85",nama_item:"Mardula Spiritual Cloth (Kain Rohani Mardula)",jumlah:"x4",spina:0,monster:"Mardula",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Hall of Blessings Gods (Serambi Dewa Berkah)"},{id:71,slot:"84 ➔ 85",nama_item:"Mysterious Shiny Cloth (Kain Berkilau Misterius)",jumlah:"x20",spina:0,monster:"Bubble Angel / Bubble Bogey",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:72,slot:"84 ➔ 85",nama_item:"Grey Feather (Bulu Kelabu)",jumlah:"x20",spina:0,monster:"Haliabubo",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Ruins of Mt. Mithurna (Reruntuhan G. Mithurna)"},{id:73,slot:"85 ➔ 86",nama_item:"Carbuncle Fur (Mantel Carbuncle)",jumlah:"x4",spina:0,monster:"Carbuncle",kelas_mob:"Miniboss",kelas_bahan:"Cloth",lokasi:"Hall of Construction Gods (Serambi Dewa Pembangunan)"},{id:74,slot:"85 ➔ 86",nama_item:"Knit Fabric (Kain Rajut)",jumlah:"x20",spina:0,monster:"Bubble Angel",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Heresy Corridor (Koridor Heresi)"},{id:75,slot:"85 ➔ 86",nama_item:"Bag Bear Tail (Ekor Beruang Berkantong)",jumlah:"x20",spina:0,monster:"Oddy",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Shrine of the Gods (Kuil Para Dewa)"},{id:76,slot:"86 ➔ 87",nama_item:"King Piton Fur (Bulu Raja Piton)",jumlah:"x4",spina:0,monster:"King Piton (Raja Piton)",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Elf Mountains: Shrine (Pegunungan Elf: Kuil)"},{id:77,slot:"86 ➔ 87",nama_item:"Thick White Fur (Bulu Putih Lebat)",jumlah:"x20",spina:0,monster:"Billy (Bandot)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Garden of Ice & Snow (Taman Es & Salju)"},{id:78,slot:"86 ➔ 87",nama_item:"Stiff Grey Fur (Bulu Abu Kaku)",jumlah:"x20",spina:0,monster:"Silveria",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:79,slot:"87 ➔ 88",nama_item:"Ancient Ingot (Ingot Kuno)",jumlah:"x4",spina:0,monster:"Thug Golem (Golem Preman)",kelas_mob:"Miniboss",kelas_bahan:"Metal",lokasi:"Dark Dragon Shrine: Middle (Kuil Naga Kegelapan: Tengah)"},{id:80,slot:"87 ➔ 88",nama_item:"Ice Wolf Fang (Taring Serigala Es)",jumlah:"x20",spina:0,monster:"Courloup (Serigala Tanduk)",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Elf Mountains (Pegunungan Elf)"},{id:81,slot:"87 ➔ 88",nama_item:"Dusky Fabric (Kain Gelap)",jumlah:"x20",spina:0,monster:"Soul Reaper",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Dark Dragon Shrine (Kuil Naga Kegelapan)"},{id:82,slot:"88 ➔ 89",nama_item:"Spina",jumlah:"-",spina:2e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:83,slot:"89 ➔ 90",nama_item:"Tuscog Fang (Taring Tuscog)",jumlah:"x4",spina:0,monster:"Tuscog",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:84,slot:"89 ➔ 90",nama_item:"Larva Silk (Sutra Ulat)",jumlah:"x20",spina:0,monster:"Moss Mole (Tikus Lumut)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Forest of Ein (Hutan Ein)"},{id:85,slot:"89 ➔ 90",nama_item:"Werewolf Fur (Taring Manusia Serigala)",jumlah:"x20",spina:0,monster:"Wolfre",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Eryldan Street (Jalan Eryldan)"},{id:86,slot:"90 ➔ 91",nama_item:"Kuzto Splinter (Serpihan Kayu Kuzto)",jumlah:"x4",spina:0,monster:"Kuzto",kelas_mob:"Boss",kelas_bahan:"Wood",lokasi:"Labilans Sector: Square (Distrik Labilans: Alun-alun)"},{id:87,slot:"90 ➔ 91",nama_item:"Stoat Fur (Bulu Cerpelai)",jumlah:"x20",spina:0,monster:"Sentreast",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fabriska Sector (Distrik Fabriska)"},{id:88,slot:"90 ➔ 91",nama_item:"Mysterious Waist Sash (Sabuk Pinggang Misterius)",jumlah:"x30",spina:0,monster:"Moculus",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Fractum Sector (Distrik Fractum)"},{id:89,slot:"91 ➔ 92",nama_item:"Crystal Pouch (Kantong Kristal)",jumlah:"x5",spina:0,monster:"Canemofish (Nemopirania)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:90,slot:"91 ➔ 92",nama_item:"Cushy Tail (Ekor Lembu)",jumlah:"x20",spina:0,monster:"Alpoca",kelas_mob:"Mob",kelas_bahan:"Beast",lokasi:"Labilans Sector (Distrik Labilans)"},{id:91,slot:"91 ➔ 92",nama_item:"Sturdy Papula (Papula Kuat)",jumlah:"x30",spina:0,monster:"Toxinaria",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Recetacula Sector (Distrik Recetacula)"},{id:92,slot:"92 ➔ 93",nama_item:"Repthon Wings (Sayap Repthon)",jumlah:"x5",spina:0,monster:"Repthon",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone: Deepest Area (Zona Riset Deltzon: Area Terdalam)"},{id:93,slot:"92 ➔ 93",nama_item:"Legume Button (Kancing Polong)",jumlah:"x20",spina:0,monster:"Marquis Colon (Colon Marquis)",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Old Lufenas Mansion Ruins (Reruntuhan Mansion Lufenas Tua)"},{id:94,slot:"92 ➔ 93",nama_item:"Frock Coat Scrap (Kain Perca Jas Panjang)",jumlah:"x30",spina:0,monster:"Swirly Whirly (Gulingkar)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Deltzon Research Zone (Zona Riset Deltzon)"},{id:95,slot:"93 ➔ 94",nama_item:"Empress Ogre Hair (Rambut Kaisar Siluman)",jumlah:"x5",spina:0,monster:"Venena Metacoenubia",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Neo Plastida"},{id:96,slot:"93 ➔ 94",nama_item:"Torn Red Cloth (Kain Merah Sobek)",jumlah:"x20",spina:0,monster:"Sand Bandits Potum (Potum Bandit Gurun)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Geist Desert (Gurun Pasir Geist)"},{id:97,slot:"93 ➔ 94",nama_item:"Corroded Leather (Kulit Karatan)",jumlah:"x30",spina:0,monster:"Cabrigo (Jasman)",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ruins of Urban Elban (Reruntuhan Elban Urban)"},{id:98,slot:"94 ➔ 95",nama_item:"Spina",jumlah:"-",spina:3e5,monster:"-",kelas_mob:"Spina",kelas_bahan:"S",lokasi:"General Store"},{id:99,slot:"95 ➔ 96",nama_item:"Pisteus Bone (Tulang Pisteus)",jumlah:"x5",spina:0,monster:"Pisteus",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Ducia Coast: Depths (Pesisir Ducia: Area Terdalam)"},{id:100,slot:"95 ➔ 96",nama_item:"Phantom Cloth (Kain Phantom)",jumlah:"x20",spina:0,monster:"Flooray",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Lunagent Cliff Base (Dasar Tebing Lunagent)"},{id:101,slot:"95 ➔ 96",nama_item:"Sea Otter Fur (Bulu Berang-Berang Laut)",jumlah:"x30",spina:0,monster:"Lutris",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Ducia Coast (Pesisir Ducia)"},{id:102,slot:"96 ➔ 97",nama_item:"Arachnidemon Wing (Sayap Arachnidemon)",jumlah:"x5",spina:0,monster:"Arachnidemon",kelas_mob:"Boss",kelas_bahan:"Beast",lokasi:"Arche Valley: Depths (Lembah Arche: Area Terdalam)"},{id:103,slot:"96 ➔ 97",nama_item:"Metal Shackles (Belenggu Logam)",jumlah:"x20",spina:0,monster:"Bessy (Besy) / Espectro",kelas_mob:"Miniboss/Mob",kelas_bahan:"Metal",lokasi:"Arche Valley (Lembah Arche)"},{id:104,slot:"96 ➔ 97",nama_item:"Weird Snake Skin (Kulit Ular Aneh)",jumlah:"x30",spina:0,monster:"Coofer",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Rokoko City Ruins (Reruntuhan Kota Rokoko) / Nezim Wetlands"},{id:105,slot:"97 ➔ 98",nama_item:"Slimy Hide (Jangat Berlendir)",jumlah:"x5",spina:0,monster:"Lord of Nezim (Datuk Nezim)",kelas_mob:"Miniboss",kelas_bahan:"Beast",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:106,slot:"97 ➔ 98",nama_item:"Enty Cloth (Kain Enty)",jumlah:"x20",spina:0,monster:"Enty",kelas_mob:"Mob",kelas_bahan:"Cloth",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:107,slot:"97 ➔ 98",nama_item:"Sturdy Core (Poros Kokoh)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Wood",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:108,slot:"98 ➔ 99",nama_item:"Inferno Curse Cloth Scrap (Perca Gendam Geni)",jumlah:"x5",spina:0,monster:"Hexter",kelas_mob:"Boss",kelas_bahan:"Cloth",lokasi:"Witch's Woods Depths (Rimba Penyihir: Area Terdalam)"},{id:109,slot:"98 ➔ 99",nama_item:"Kappa's Plate (Piring Kappa)",jumlah:"x20",spina:0,monster:"Kappadon",kelas_mob:"Mob",kelas_bahan:"Metal",lokasi:"Nezim Wetlands (Lahan Basah Nezim)"},{id:110,slot:"98 ➔ 99",nama_item:"Crow Feather (Bulu Gagak)",jumlah:"x30",spina:0,monster:"Eerie Scarecrow / Grim Reaper Scarecrow",kelas_mob:"Miniboss/Mob",kelas_bahan:"Beast",lokasi:"Witch's Woods (Rimba Penyihir)"},{id:111,slot:"99 ➔ 100",nama_item:"Wriggling Latebra (Inti Latebra Menggeliat)",jumlah:"x5",spina:0,monster:"Trocostida (Trokostida)",kelas_mob:"Miniboss",kelas_bahan:"Mana",lokasi:"Nov Diela: Area 1"},{id:112,slot:"99 ➔ 100",nama_item:"Viscous Liquid (Cairan Lekat)",jumlah:"x20",spina:0,monster:"Juvestida",kelas_mob:"Mob",kelas_bahan:"Medic",lokasi:"Nov Diela"},{id:113,slot:"99 ➔ 100",nama_item:"Bizarre Skin (Kulit Pelik)",jumlah:"x30",spina:0,monster:"Evil Eye (Mata Jahat) / Demonic Eye",kelas_mob:"Miniboss/Mob",kelas_bahan:"Cloth",lokasi:"Morga Wasteland (Padang Morga)"}],ud={class:"bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans relative z-10"},dd={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},pd={class:"relative z-10 text-center md:text-left"},fd={class:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"},md={class:"text-[10px] md:text-xs font-black opacity-80 uppercase tracking-widest"},hd={class:"text-3xl md:text-5xl font-black italic mt-1 leading-none"},gd={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},Ad={class:"relative"},kd={class:"relative group"},bd={class:"relative"},vd={class:"relative group"},yd={class:"relative"},xd={class:"relative group"},wd=["value"],Pd={class:"hidden lg:block overflow-x-auto no-scrollbar"},Md={class:"w-full min-w-[1100px] border-collapse"},Dd={class:"p-8 text-center border-r-[2px] border-lime-500/10"},Rd={class:"font-black text-blue-500 italic text-3xl"},Sd={class:"p-8 font-black uppercase text-base border-r-[2px] border-lime-500/10"},Cd={class:"p-8 text-center bg-black/5 border-r-[2px] border-lime-500/10"},Ed={class:"font-black italic text-lime-600 text-5xl"},Td={class:"p-8 text-center font-black text-xl text-amber-600 border-r-[2px] border-lime-500/10"},_d={class:"p-8 text-[11px] font-bold uppercase opacity-60 border-r-[2px] border-lime-500/10"},Kd={class:"p-8 text-center border-r-[2px] border-lime-500/10"},Id={class:"p-8 font-black text-xl italic text-blue-600 uppercase tracking-tighter"},Bd={class:"flex justify-between items-start"},Od={class:"flex-1 pr-4"},Nd={class:"text-[10px] font-black text-blue-500 mb-1"},Ld={class:"text-4xl font-black italic text-lime-600"},Gd={class:"border-l-[2px] pl-3 border-slate-300/30"},Ud={class:"text-xl font-black block mt-1"},Hd={class:"space-y-3"},jd={class:"flex items-center gap-3"},Fd={class:"flex-1"},Vd={class:"text-xs font-black uppercase text-indigo-500"},Jd={class:"flex items-center gap-3"},Wd={class:"flex-1"},Qd={class:"text-sm font-black italic text-blue-600 uppercase"},qd={class:"flex flex-col gap-8 justify-center items-center pb-20"},zd={key:0,class:"flex flex-wrap justify-center items-center gap-2"},Xd=["disabled"],Zd={key:0,class:"text-blue-600 font-black px-2"},Yd=["onClick"],$d=["disabled"],e0={__name:"ListBag",props:["isDark"],setup(e){const t=re(""),n=re("All Class"),a=re("All Slot"),i=re(1),l=re(10),o=()=>{l.value===10?l.value=c.value.length:l.value=10,i.value=1},s=A=>{if(!A||A==="-")return"-";let b=A.toString().replace(/x/gi,"").trim();return b==="0"||b===""?"-":b},c=Y(()=>zn.filter(b=>{const y=t.value.toLowerCase(),v=b.kelas_mob||"",x=!t.value||b.nama_item?.toLowerCase().includes(y)||b.monster?.toLowerCase().includes(y)||b.lokasi?.toLowerCase().includes(y);let w=!0;n.value!=="All Class"&&(n.value==="Mob"?w=v==="Mob"||v==="Miniboss/Mob":n.value==="Miniboss"?w=v==="Miniboss"||v==="Miniboss/Mob":w=v===n.value);const H=a.value==="All Slot"||String(b.slot).includes(String(a.value));return x&&w&&H}).sort((b,y)=>{const v=parseInt(String(b.slot).match(/\d+/))||0,x=parseInt(String(y.slot).match(/\d+/))||0;return v-x}));Nt([t,n,a],()=>{i.value=1});const f=Y(()=>Math.ceil(c.value.length/l.value)||1),u=Y(()=>{const A=f.value,b=i.value;if(A<=5)return Array.from({length:A},(v,x)=>x+1);let y=[];return b<=3?y=[1,2,3,"...",A]:b>=A-2?y=[1,"...",A-2,A-1,A]:y=[1,"...",b,"...",A],y}),d=Y(()=>{const A=(i.value-1)*l.value;return c.value.slice(A,A+l.value)}),h=Y(()=>[...new Set(zn.map(b=>b.slot))].sort((b,y)=>(parseInt(b)||0)-(parseInt(y)||0))),g=Y(()=>[{label:"ALL ITEM",val:zn.length,grad:"from-blue-700 to-blue-500"},{label:"RESULTS",val:c.value.length,grad:"from-fuchsia-600 to-purple-600"},{label:"BOSS",val:zn.filter(A=>A.kelas_mob==="Boss").length,grad:"from-orange-600 to-red-600"},{label:"SLOTS",val:h.value.length,grad:"from-lime-500 to-emerald-600"}]),P=A=>{const b="px-3 py-1 rounded-lg text-[10px] font-black uppercase border-2 inline-flex items-center justify-center min-w-[85px] ";return A==="Mob"?b+"bg-green-500/10 text-green-500 border-green-500/50":A==="Miniboss/Mob"?b+"bg-indigo-500/10 text-indigo-500 border-indigo-500/50":A==="Miniboss"?b+"bg-purple-500/10 text-purple-500 border-purple-500/50":A==="Boss"?b+"bg-red-500/10 text-red-500 border-red-500/50":A==="Spina"?b+"bg-amber-500/10 text-amber-500 border-amber-500/50":b+"bg-emerald-500/10 text-emerald-500 border-emerald-500/50"};return(A,b)=>(T(),I("div",ud,[r("div",dd,[r("div",{class:E(["relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-[4px] overflow-hidden backdrop-blur-2xl transition-all duration-700 shadow-2xl",e.isDark?"border-blue-500 bg-black/40":"border-blue-600 bg-white/60 shadow-blue-200"])},[b[7]||(b[7]=r("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[r("img",{src:cd,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),r("div",pd,[r("h2",{class:E(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",e.isDark?"text-white":"text-slate-900"])},[...b[5]||(b[5]=[kt(" LIST BAG",-1),r("br",null,null,-1),r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"},"EXPANSION",-1)])],2),b[6]||(b[6]=r("div",{class:"mt-4 flex items-center justify-center md:justify-start gap-3"},[r("div",{class:"h-1.5 w-16 bg-blue-600 rounded-full"}),r("img",{src:Pi,class:"h-8 md:h-12 w-auto object-contain"}),r("span",{class:"text-xl md:text-4xl font-black italic text-blue-600 uppercase tracking-tighter"},"TIMI DB")],-1))])],2),r("div",fd,[(T(!0),I(q,null,de(g.value,y=>(T(),I("div",{key:y.label,class:E(["p-6 rounded-[2rem] border-[3px] shadow-xl transition-all hover:scale-105 bg-gradient-to-br text-white",y.grad,e.isDark?"border-white/20":"border-black/5"])},[r("div",md,U(y.label),1),r("div",hd,U(y.val),1)],2))),128))]),r("div",{class:E(["p-6 md:p-8 rounded-[2.5rem] border-[4px] backdrop-blur-xl shadow-2xl transition-all",e.isDark?"bg-black/40 border-indigo-500/50":"bg-white/80 border-indigo-600 shadow-indigo-100"])},[r("div",gd,[r("div",Ad,[b[9]||(b[9]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Search Item",-1)),r("div",kd,[ge(r("input",{"onUpdate:modelValue":b[0]||(b[0]=y=>t.value=y),type:"text",placeholder:"Find items...",class:E(["w-full h-14 pl-14 pr-6 rounded-2xl border-[3px] font-bold outline-none transition-all",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},null,2),[[Je,t.value]]),b[8]||(b[8]=r("div",{class:"absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[r("circle",{cx:"11",cy:"11",r:"8"}),r("path",{d:"m21 21-4.3-4.3"})])],-1))])]),r("div",bd,[b[12]||(b[12]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Category",-1)),r("div",vd,[ge(r("select",{"onUpdate:modelValue":b[1]||(b[1]=y=>n.value=y),class:E(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[...b[10]||(b[10]=[r("option",null,"All Class",-1),r("option",null,"Mob",-1),r("option",null,"Miniboss",-1),r("option",null,"Boss",-1),r("option",null,"Spina",-1)])],2),[[vt,n.value]]),b[11]||(b[11]=Rn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-a613e142><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-a613e142><rect width="7" height="7" x="3" y="3" rx="1" data-v-a613e142></rect><rect width="7" height="7" x="14" y="3" rx="1" data-v-a613e142></rect><rect width="7" height="7" x="14" y="14" rx="1" data-v-a613e142></rect><rect width="7" height="7" x="3" y="14" rx="1" data-v-a613e142></rect></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-a613e142><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-a613e142><path d="m6 9 6 6 6-6" data-v-a613e142></path></svg></div>',2))])]),r("div",yd,[b[15]||(b[15]=r("label",{class:"text-[10px] font-black uppercase ml-4 mb-2 block text-indigo-500 tracking-widest"},"Jump to Slot",-1)),r("div",xd,[ge(r("select",{"onUpdate:modelValue":b[2]||(b[2]=y=>a.value=y),class:E(["w-full h-14 pl-14 pr-10 rounded-2xl border-[3px] font-bold outline-none transition-all appearance-none cursor-pointer",e.isDark?"bg-white/5 border-white/10 text-white focus:border-indigo-500":"bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white"])},[b[13]||(b[13]=r("option",null,"All Slot",-1)),(T(!0),I(q,null,de(h.value,y=>(T(),I("option",{key:y,value:y},"Slot "+U(y),9,wd))),128))],2),[[vt,a.value]]),b[14]||(b[14]=Rn('<div class="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none group-focus-within:scale-110 transition-transform" data-v-a613e142><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-a613e142><circle cx="12" cy="12" r="10" data-v-a613e142></circle><line x1="12" y1="8" x2="12" y2="16" data-v-a613e142></line><line x1="8" y1="12" x2="16" y2="12" data-v-a613e142></line></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 text-indigo-500/50 pointer-events-none" data-v-a613e142><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-a613e142><path d="m6 9 6 6 6-6" data-v-a613e142></path></svg></div>',2))])])])],2),r("div",{class:E(["border-[4px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",e.isDark?"border-lime-400 bg-black/60":"border-lime-500 bg-white/80 shadow-lime-100"])},[r("div",Pd,[r("table",Md,[r("thead",null,[r("tr",{class:E(["uppercase text-[10px] font-black tracking-widest border-b-[3px]",e.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-lime-700 border-lime-200"])},[...b[16]||(b[16]=[r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Slot",-1),r("th",{class:"p-8 w-[20%] text-left border-r-[2px] border-lime-500/20"},"Item Name",-1),r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Total Need",-1),r("th",{class:"p-8 w-[15%] text-center border-r-[2px] border-lime-500/20"},"Spina Cost",-1),r("th",{class:"p-8 w-[15%] text-left border-r-[2px] border-lime-500/20"},"Source",-1),r("th",{class:"p-8 w-[10%] text-center border-r-[2px] border-lime-500/20"},"Type",-1),r("th",{class:"p-8 w-[20%] text-left"},"Location",-1)])],2)]),r("tbody",{class:E(["divide-y-[2px]",e.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(T(!0),I(q,null,de(d.value,y=>(T(),I("tr",{key:y.id,class:"hover:bg-indigo-500/5 transition-all group"},[r("td",Dd,[r("span",Rd,U(y.slot),1)]),r("td",Sd,U(y.nama_item),1),r("td",Cd,[r("span",Ed,U(s(y.jumlah)),1)]),r("td",Td,U(y.spina>0?Number(y.spina).toLocaleString():"-"),1),r("td",_d,U(y.monster||"-"),1),r("td",Kd,[r("span",{class:E(P(y.kelas_mob))},U(y.kelas_mob),3)]),r("td",Id,U(y.lokasi),1)]))),128))],2)])]),r("div",{class:E(["lg:hidden divide-y-[3px]",e.isDark?"divide-white/10":"divide-slate-200"])},[(T(!0),I(q,null,de(d.value,y=>(T(),I("div",{key:y.id,class:"p-6 space-y-4"},[r("div",Bd,[r("div",Od,[r("div",Nd,"SLOT "+U(y.slot),1),r("h3",{class:E(["font-black uppercase text-xl leading-tight",e.isDark?"text-white":"text-slate-900"])},U(y.nama_item),3)]),r("div",{class:E([P(y.kelas_mob),"!min-w-fit !px-2"])},U(y.kelas_mob),3)]),r("div",{class:E(["grid grid-cols-2 gap-3 border-[3px] p-4 rounded-2xl",e.isDark?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50"])},[r("div",null,[b[17]||(b[17]=r("span",{class:"text-[9px] font-black text-lime-600 uppercase block"},"Need",-1)),r("span",Ld,U(s(y.jumlah)),1)]),r("div",Gd,[b[18]||(b[18]=r("span",{class:"text-[9px] font-black text-amber-600 uppercase block"},"Cost",-1)),r("span",Ud,U(y.spina>0?Number(y.spina).toLocaleString():"-"),1)])],2),r("div",Hd,[r("div",jd,[b[20]||(b[20]=Rn('<div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0" data-v-a613e142><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-indigo-500" data-v-a613e142><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" data-v-a613e142></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-a613e142></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-a613e142></line></svg></div>',1)),r("div",Fd,[b[19]||(b[19]=r("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Drop From:",-1)),r("span",Vd,U(y.monster||"-"),1)])]),r("div",Jd,[b[22]||(b[22]=r("div",{class:"w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3",class:"text-red-500"},[r("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),r("circle",{cx:"12",cy:"10",r:"3"})])],-1)),r("div",Wd,[b[21]||(b[21]=r("span",{class:"text-[9px] font-black text-slate-500 uppercase block"},"Map:",-1)),r("span",Qd,U(y.lokasi),1)])])])]))),128))],2)],2),r("div",qd,[f.value>1?(T(),I("div",zd,[r("button",{onClick:b[3]||(b[3]=y=>i.value--),disabled:i.value===1,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," « ",8,Xd),(T(!0),I(q,null,de(u.value,(y,v)=>(T(),I(q,{key:v},[y==="..."?(T(),I("span",Zd,"...")):(T(),I("button",{key:1,onClick:x=>i.value=y,class:E(["h-12 w-12 rounded-xl border-[3px] font-black transition-all active:scale-90",i.value===y?"bg-blue-600 border-blue-600 text-white shadow-lg":e.isDark?"bg-black/40 border-blue-800 text-blue-400":"bg-white border-blue-200 text-blue-600"])},U(y),11,Yd))],64))),128)),r("button",{onClick:b[4]||(b[4]=y=>i.value++),disabled:i.value===f.value,class:"h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all border-blue-600 disabled:opacity-20 active:scale-90"}," » ",8,$d)])):mt("",!0),r("button",{onClick:o,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:brightness-110 active:scale-95 transition-all shadow-xl"},U(l.value===10?"Explore All Database":"Collapse to 10 Rows"),1)])])]))}},t0=mn(e0,[["__scopeId","data-v-a613e142"]]),n0="/toram-vue/images/mq.png",oi=[{id:1,chapter:"Chapter 1",nama_item:"Colon Leaf (Daun Colon)",jumlah:"x5"},{id:2,chapter:"Chapter 1",nama_item:"Hard Dragon Skin (Sisik Naga)",jumlah:"x2"},{id:3,chapter:"Chapter 1",nama_item:"Lamb Meat (Daging Domba)",jumlah:"x1"},{id:4,chapter:"Chapter 1",nama_item:"Fairy Feather (Sayap Peri)",jumlah:"x3"},{id:5,chapter:"Chapter 1",nama_item:"Thick Beak (Paruh tebal)",jumlah:"x3"},{id:6,chapter:"Chapter 1",nama_item:"Vine (Sulur)",jumlah:"x3"},{id:7,chapter:"Chapter 2",nama_item:"Swordsman Stone Coin (Koin Ksatria)",jumlah:"x20"},{id:8,chapter:"Chapter 3",nama_item:"Sand Mole Meat (Daging Tikus Pasir)",jumlah:"x1"},{id:9,chapter:"Chapter 3",nama_item:"Beast Claw (Cakar Binatang Buas)",jumlah:"x5"},{id:10,chapter:"Chapter 3",nama_item:"Sand Frog Skin (Kulit Kodok Pasir)",jumlah:"x5"},{id:11,chapter:"Chapter 3",nama_item:"Jagged Fang (Taring Bergerigi)",jumlah:"x10"},{id:12,chapter:"Chapter 3",nama_item:"Saham Crystal (Kristal Saham)",jumlah:"x5"},{id:13,chapter:"Chapter 3",nama_item:"Spiritual Gemstone (Permata Jiwa)",jumlah:"x1"},{id:14,chapter:"Chapter 8",nama_item:"Rokoko Grape (Anggur rokoko)",jumlah:"x5"},{id:15,chapter:"Chapter 9",nama_item:"Labilans Wood (Kayu labilans)",jumlah:"x10"},{id:16,chapter:"Chapter 11",nama_item:"Broken Horn (Tanduk Patah)",jumlah:"x20"},{id:17,chapter:"Chapter 12",nama_item:"Jabali Stone (Batu Jabali)",jumlah:"x5"},{id:18,chapter:"Chapter 12",nama_item:"Growing Ore (Biji Berkembang)",jumlah:"x5"},{id:19,chapter:"Chapter 14",nama_item:"Kulit Tebal Berlendir (Slimy Thick Skin)",jumlah:"x20"},{id:20,chapter:"Chapter 14",nama_item:"Akar Melilit (Tangled Roots)",jumlah:"x10"},{id:21,chapter:"Chapter 14",nama_item:"Kayu Menabra (Menabra Wood)",jumlah:"x10"},{id:22,chapter:"Chapter 15",nama_item:"Pupuk Keruh (Stagnant Fertillizer)",jumlah:"x10"}],a0=()=>[...new Set(oi.map(e=>e.chapter))].sort((e,t)=>parseInt(e.replace("Chapter ",""))-parseInt(t.replace("Chapter ",""))),i0={class:"bg-transparent py-4 md:py-10 px-2 md:px-4 font-sans"},l0={class:"max-w-7xl mx-auto space-y-6 md:space-y-10"},o0={class:"relative z-10 text-center md:text-left"},s0={class:"grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"},r0={class:"text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mb-1"},c0={class:"text-3xl md:text-6xl font-black italic tracking-tighter leading-none"},u0={class:"flex flex-col gap-2"},d0={class:"flex flex-col gap-2"},p0=["value"],f0={class:"hidden lg:block overflow-x-auto"},m0={class:"w-full border-collapse"},h0={class:"px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[10px] font-black uppercase"},g0={class:"p-8 text-center bg-black/5"},A0={class:"font-black italic text-5xl text-indigo-600"},k0={class:"flex justify-between items-center"},b0={class:"text-2xl font-black italic text-indigo-500/30"},v0={class:"px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border-2 border-indigo-500 text-[9px] font-black uppercase"},y0={class:"font-black uppercase text-sm leading-tight max-w-[60%]"},x0={class:"text-right"},w0={class:"text-4xl font-black italic text-indigo-600"},P0={class:"flex flex-col gap-6 justify-center items-center pb-20"},M0={key:0,class:"flex flex-wrap justify-center items-center gap-2"},D0=["disabled"],R0={key:0,class:"text-indigo-500 font-black px-2"},S0=["onClick"],C0=["disabled"],E0={__name:"MainQuest",props:["isDark"],emits:["toggleDark"],setup(e,{emit:t}){const n=e,a=fs(),i=ps(),l=re(a.query.search||""),o=re(a.query.chapter||"Semua Chapter"),s=re(parseInt(a.query.page)||1),c=re(parseInt(a.query.per_page)||10),f=a0(),u=Y(()=>oi.filter(v=>{const x=l.value.toLowerCase(),w=v.nama_item.toLowerCase().includes(x)||v.chapter.toLowerCase().includes(x),H=o.value==="Semua Chapter"||v.chapter===o.value;return w&&H})),d=Y(()=>Math.ceil(u.value.length/c.value)||1),h=Y(()=>{const v=(s.value-1)*c.value;return u.value.slice(v,v+c.value)}),g=()=>{c.value===10?c.value=u.value.length:c.value=10,s.value=1,P()},P=()=>{i.push({query:{...a.query,search:l.value||void 0,chapter:o.value!=="Semua Chapter"?o.value:void 0,per_page:c.value,page:s.value}})},A=v=>{v>=1&&v<=d.value&&(s.value=v,P())};Nt([l,o],()=>{s.value=1,P()});const b=Y(()=>{const v=d.value,x=s.value;if(v<=5)return Array.from({length:v},(H,X)=>X+1);let w=[];return x<=3?w=[1,2,3,"...",v]:x>=v-2?w=[1,"...",v-2,v-1,v]:w=[1,"...",x,"...",v],w}),y=Y(()=>[{label:"ALL ITEM",val:oi.length,grad:"from-blue-700 to-blue-500"},{label:"CHAPTERS",val:f.length,grad:"from-purple-600 to-fuchsia-600"},{label:"RESULTS",val:u.value.length,grad:"from-emerald-600 to-teal-600"},{label:"LATEST",val:f.length>0?f[f.length-1].split(" ").pop():"-",grad:"from-orange-600 to-amber-500"}]);return(v,x)=>(T(),I("div",i0,[r("div",l0,[r("div",{class:E(["relative p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-[4px] shadow-2xl overflow-hidden backdrop-blur-xl transition-all",n.isDark?"border-indigo-500 bg-black/40":"border-indigo-600 bg-white/70 shadow-indigo-100"])},[x[6]||(x[6]=r("div",{class:"absolute top-0 right-0 h-full w-1/3 hidden lg:block pointer-events-none"},[r("img",{src:n0,class:"w-full h-full object-contain object-right opacity-30 scale-110"})],-1)),r("div",o0,[r("h2",{class:E(["text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter",n.isDark?"text-white":"text-slate-900"])},[...x[4]||(x[4]=[kt(" MAIN QUEST",-1),r("br",null,null,-1),r("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"},"LIST DB",-1)])],2),x[5]||(x[5]=r("div",{class:"mt-4 flex items-center justify-center md:justify-start gap-3"},[r("div",{class:"h-1.5 w-16 bg-indigo-600 rounded-full"}),r("img",{src:Pi,class:"h-8 md:h-12 w-auto object-contain"}),r("span",{class:"text-xl md:text-4xl font-black italic text-blue-500 uppercase tracking-tighter"},"TIMI DB")],-1))])],2),r("div",s0,[(T(!0),I(q,null,de(y.value,w=>(T(),I("div",{key:w.label,class:E(["aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] border-[3px] border-white/20 shadow-xl text-white bg-gradient-to-br transition-all hover:scale-105 active:scale-95",w.grad])},[r("span",r0,U(w.label),1),r("span",c0,U(w.val),1)],2))),128))]),r("div",{class:E(["grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 border-[4px] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl backdrop-blur-md",n.isDark?"border-fuchsia-500 bg-black/40":"border-fuchsia-600 bg-white/80"])},[r("div",u0,[x[7]||(x[7]=r("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Search Item",-1)),ge(r("input",{"onUpdate:modelValue":x[0]||(x[0]=w=>l.value=w),type:"text",placeholder:"Find MQ item...",class:E(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-bold outline-none transition-all focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white placeholder:text-white/20":"bg-slate-50 border-slate-200 text-slate-900"])},null,2),[[Je,l.value]])]),r("div",d0,[x[9]||(x[9]=r("label",{class:"text-[10px] font-black uppercase tracking-widest ml-4 text-fuchsia-500"},"Chapter Filter",-1)),ge(r("select",{"onUpdate:modelValue":x[1]||(x[1]=w=>o.value=w),class:E(["w-full border-[3px] rounded-xl md:rounded-2xl p-4 md:p-5 text-sm font-black outline-none transition-all cursor-pointer focus:border-indigo-500",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900"])},[x[8]||(x[8]=r("option",{value:"Semua Chapter"},"All Chapter",-1)),(T(!0),I(q,null,de(Ie(f),w=>(T(),I("option",{key:w,value:w},U(w),9,p0))),128))],2),[[vt,o.value]])])],2),r("div",{class:E(["border-[4px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all backdrop-blur-xl",n.isDark?"border-lime-400 bg-black/60":"border-indigo-600 bg-white/90"])},[r("div",f0,[r("table",m0,[r("thead",null,[r("tr",{class:E(["uppercase text-[10px] font-black tracking-widest border-b-[4px]",n.isDark?"bg-white/5 text-lime-400 border-lime-500/30":"bg-slate-50 text-indigo-700 border-indigo-200"])},[r("th",{class:E(["p-8 w-[10%] text-center border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"No.",2),r("th",{class:E(["p-8 w-[25%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Chapter Info",2),r("th",{class:E(["p-8 w-[45%] text-left border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},"Required Item",2),x[10]||(x[10]=r("th",{class:"p-8 w-[20%] text-center"},"Need",-1))],2)]),r("tbody",{class:E(["divide-y-[2px]",n.isDark?"divide-white/10 text-white/80":"divide-slate-200 text-slate-700"])},[(T(!0),I(q,null,de(h.value,(w,H)=>(T(),I("tr",{key:H,class:"hover:bg-indigo-500/5 transition-all"},[r("td",{class:E(["p-8 text-center font-black italic text-2xl opacity-40 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},U((s.value-1)*c.value+H+1),3),r("td",{class:E(["p-8 border-r-[2px]",n.isDark?"border-white/10":"border-slate-200"])},[r("span",h0,U(w.chapter),1)],2),r("td",{class:E(["p-8 border-r-[2px] font-black uppercase text-lg tracking-tight",n.isDark?"text-white border-white/10":"text-slate-800 border-slate-200"])},U(w.nama_item),3),r("td",g0,[r("span",A0,U(w.jumlah),1)])]))),128))],2)])]),r("div",{class:E(["lg:hidden divide-y-[3px]",n.isDark?"divide-white/10":"divide-slate-200"])},[(T(!0),I(q,null,de(h.value,(w,H)=>(T(),I("div",{key:H,class:"p-6 space-y-4"},[r("div",k0,[r("span",b0,"#"+U((s.value-1)*c.value+H+1),1),r("span",v0,U(w.chapter),1)]),r("div",{class:E(["flex justify-between items-center p-5 rounded-2xl border-[3px]",n.isDark?"bg-white/5 border-white/10 text-white":"bg-slate-50 border-slate-200 text-slate-900 shadow-inner"])},[r("div",y0,U(w.nama_item),1),r("div",x0,[x[11]||(x[11]=r("span",{class:"block text-[9px] font-black uppercase text-indigo-600 opacity-60"},"Need",-1)),r("span",w0,U(w.jumlah),1)])],2)]))),128))],2)],2),r("div",P0,[d.value>1?(T(),I("div",M0,[r("button",{onClick:x[2]||(x[2]=w=>A(s.value-1)),disabled:s.value===1,class:E(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," « ",10,D0),(T(!0),I(q,null,de(b.value,(w,H)=>(T(),I(q,{key:H},[w==="..."?(T(),I("span",R0,"...")):(T(),I("button",{key:1,onClick:X=>A(w),class:E(["h-12 w-12 rounded-xl border-[3px] font-black transition-all",s.value===w?"bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110":n.isDark?"bg-black/40 border-indigo-800 text-indigo-400":"bg-white border-indigo-200 text-indigo-600"])},U(w),11,S0))],64))),128)),r("button",{onClick:x[3]||(x[3]=w=>A(s.value+1)),disabled:s.value===d.value,class:E(["h-12 w-12 flex items-center justify-center rounded-xl border-[3px] font-black transition-all disabled:opacity-20",n.isDark?"border-indigo-600 bg-black/40 text-indigo-400":"border-indigo-600 bg-white text-indigo-600"])}," » ",10,C0)])):mt("",!0),r("button",{onClick:g,class:"w-full md:w-auto h-14 px-12 rounded-2xl border-[3px] border-indigo-400 bg-indigo-600 text-white font-black uppercase italic tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"},U(c.value===10?"Show All Database":"Show 10 Rows"),1)])])]))}},T0=mn(E0,[["__scopeId","data-v-283892c2"]]),_0={class:"flex justify-between items-start mb-6"},K0={class:"text-[9px] font-mono text-slate-500 opacity-50"},I0={class:"flex items-center gap-5 mb-6"},B0={class:"relative shrink-0"},O0=["src"],N0={class:"space-y-2"},L0=["onClick"],La={__name:"XtallCard",props:{data:Object,icons:Object,isDark:Boolean,isMain:Boolean},emits:["search"],setup(e){const t=e,n=Y(()=>t.data.view?t.data.view.split(`
`).filter(l=>l.trim()!==""):[]),a=l=>l.replace(/[+-\d%]/g,"").trim(),i=Y(()=>({UPGRADE:"bg-pink-500/10 text-pink-500 border border-pink-500/20",NORMAL:"bg-blue-500/10 text-blue-500 border border-blue-500/20",WEAPON:"bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",ARMOR:"bg-purple-500/10 text-purple-500 border border-purple-500/20",ADDITIONAL:"bg-orange-500/10 text-orange-500 border border-orange-500/20",SPECIAL:"bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"})[t.data.type]||"bg-slate-500/10 text-slate-400");return(l,o)=>(T(),I("div",{class:E(["group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl",e.isMain?"p-8":"p-6",e.isDark?"bg-slate-900/60 border-white/5 hover:border-cyan-500/30":"bg-white border-slate-100 hover:border-cyan-200"])},[r("div",_0,[r("span",{class:E(["px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",i.value])},U(e.data.type),3),r("span",K0,"#"+U(e.data.code),1)]),r("div",I0,[r("div",B0,[o[0]||(o[0]=r("div",{class:"absolute inset-0 bg-cyan-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"},null,-1)),r("img",{src:e.icons[e.data.type]||e.icons.NORMAL,class:"relative w-14 h-14 object-contain transform group-hover:scale-110 transition-transform duration-500"},null,8,O0)]),r("h3",{class:E(["text-xl font-black leading-tight",e.isDark?"text-white":"text-slate-800"])},U(e.data.name),3)]),r("div",{class:E(["rounded-3xl p-5",e.isDark?"bg-black/20":"bg-slate-50"])},[r("div",N0,[(T(!0),I(q,null,de(n.value,(s,c)=>(T(),I("div",{key:c,class:"flex items-start gap-3 group/stat cursor-pointer",onClick:f=>l.$emit("search",a(s))},[o[1]||(o[1]=r("div",{class:"mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500"},null,-1)),r("p",{class:E(["text-sm font-bold",e.isDark?"text-slate-300 group-hover/stat:text-cyan-400":"text-slate-600 group-hover/stat:text-cyan-600"])},U(s),3)],8,L0))),128))])],2)],2))}},G0="data:image/jpeg;base64,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",U0="data:image/jpeg;base64,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",H0="data:image/jpeg;base64,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",j0="data:image/jpeg;base64,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",F0="data:image/jpeg;base64,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",V0="data:image/jpeg;base64,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",bn=[{code:1,link:null,name:"Akurasi+16",type:"NORMAL",view:`
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
ATK -1%
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
Daya Jarak Jauh +5%`},{code:158,link:null,type:"UPGRADE",name:"",view:`
`},{code:159,link:478,type:"UPGRADE",name:"Chocolate Ooze II",view:`
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
Kebal Cahaya +3%`},{code:164,link:null,type:"UPGRADE",name:"",view:`
`},{code:165,link:328,type:"UPGRADE",name:"Sang Juara Megiston II",view:`
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
Reduksi DMG (Sekitar Pemain) +10%`},{code:170,link:null,type:"UPGRADE",name:"",view:`
`},{code:171,link:460,type:"UPGRADE",name:"Kodok Riang",view:`
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
Critical Damage +2`},{code:176,link:null,type:"UPGRADE",name:"",view:`
`},{code:177,link:370,type:"UPGRADE",name:"Velly Hitam",view:`
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
`},{code:182,link:null,type:"UPGRADE",name:"",view:`
`},{code:183,link:465,type:"UPGRADE",name:"Baphomela",view:`
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
Guard Break +13%`},{code:194,link:null,type:"UPGRADE",name:"",view:`
`},{code:195,link:385,type:"UPGRADE",name:"Glaucius",view:`
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
Aggro +2%`},{code:200,link:null,type:"UPGRADE",name:"",view:`
`},{code:201,link:293,type:"UPGRADE",name:"Vlam si Naga Api",view:`
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
MaxMP -200`},{code:206,link:null,type:"UPGRADE",name:"",view:`
`},{code:207,link:279,type:"UPGRADE",name:"Gordo",view:`
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
Kebal Normal -10%`},{code:212,link:null,type:"UPGRADE",name:"",view:`
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
.ATK +5%`},{code:218,link:null,type:"UPGRADE",name:"",view:`
`},{code:219,link:446,type:"UPGRADE",name:"Paduka Raja Kerbau",view:`
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
Aggro -15%`},{code:224,link:null,type:"UPGRADE",name:"",view:`
`},{code:225,link:267,type:"UPGRADE",name:"Sakura Merah Jelita",view:`
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
.DEF -21%`},{code:230,link:null,type:"UPGRADE",name:"",view:`
`},{code:231,link:263,type:"UPGRADE",name:"Bayangan Hitam",view:`
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
Critical Damage +2%`},{code:236,link:null,type:"UPGRADE",name:"",view:`
`},{code:237,link:257,type:"UPGRADE",name:"Zega V",view:`
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
Critical Damage +4`},{code:266,link:null,type:"UPGRADE",name:"",view:`
`},{code:267,link:388,type:"UPGRADE",name:"Mimesia",view:`
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
MaxMP -150`},{code:272,link:null,type:"UPGRADE",name:"",view:`
`},{code:273,link:375,type:"UPGRADE",name:"Noeliel si Patung Es Suci",view:`
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
Weapon ATK +3%`},{code:278,link:null,type:"UPGRADE",name:"",view:`
`},{code:279,link:471,type:"UPGRADE",name:"Roda Kelana",view:`
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
Critical Rate -6`},{code:284,link:null,type:"UPGRADE",name:"",view:`
`},{code:285,link:113,type:"UPGRADE",name:"Seraph Machina",view:`
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
CSPD -175`},{code:290,link:null,type:"UPGRADE",name:"",view:`
`},{code:291,link:75,type:"UPGRADE",name:"Kapten Lyark Spesialis",view:`
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
MATK +1%`},{code:302,link:null,type:"UPGRADE",name:"",view:`
`},{code:303,link:464,type:"UPGRADE",name:"Proto Leon",view:`
Critical Rate +8
Critical Damage +3`},{code:304,link:422,type:"UPGRADE",name:"Memecoleous",view:`
ATK -4%
Guard Recharge +5%
Aggro +12%`},{code:305,link:390,type:"UPGRADE",name:"Iconos",view:`
MaxHP +2000
Weapon ATK +2%`},{code:306,link:347,type:"UPGRADE",name:"Builder Golem",view:`
Guard Power +7%
Guard Recharge +7%`},{code:307,link:480,type:"UPGRADE",name:"Ratu Kuno II",view:`
MATK +5%
CSPD +30%
Daya Jarak Dekat -20%`},{code:308,link:null,type:"UPGRADE",name:"",view:`
`},{code:309,link:449,type:"UPGRADE",name:"Monster Dasar Laut",view:`
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
Aggro -10%`},{code:320,link:null,type:"WEAPON",name:"",view:`
`},{code:321,link:null,type:"WEAPON",name:"Kuzto",view:`
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
Resistansi Status Buruk +5%`},{code:359,link:null,type:"ARMOR",name:"",view:`
`},{code:360,link:null,type:"ARMOR",name:"DX Fighter",view:`
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
ATK -10%`},{code:395,link:null,type:"SPECIAL",name:"Goblin Makelar",view:`
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
Kecepatan Item -1.0s`},{code:414,link:null,type:"SPECIAL",name:"",view:`
`},{code:415,link:null,type:"SPECIAL",name:"Felien",view:`
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
ATK -6%
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
Motion Speed +1%`},{code:432,link:null,type:"SPECIAL",name:"",view:`
`},{code:433,link:null,type:"SPECIAL",name:"Bexiz",view:`
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
Base Drop Rate +1%`},{code:439,link:null,type:"ADDITIONAL",name:"",view:`
`},{code:440,link:null,type:"ADDITIONAL",name:"Perro",view:`
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
MaxMP -200`},{code:505,link:239,type:"UPGRADE",name:"Wiltileaf",view:`
.ATK +9%
Critical Damage +12
Motion Speed 0%
Kekebalan Sihir -15%`}],Ga={NORMAL:G0,UPGRADE:j0,ADDITIONAL:H0,WEAPON:U0,ARMOR:F0,SPECIAL:V0},J0=["NORMAL","UPGRADE","ADDITIONAL","WEAPON","ARMOR","SPECIAL"],W0={class:E(["relative z-10 w-full max-w-7xl mx-auto p-4 md:p-8 space-y-8 min-h-screen font-sans transition-all duration-500"])},Q0={class:"space-y-2 relative"},q0={class:"relative group"},z0={class:"space-y-2 relative"},X0={class:"relative"},Z0=["value"],Y0={class:"space-y-2 relative"},$0={class:"relative"},ep=["value"],tp={class:"space-y-2 relative"},np={class:"relative"},ap=["value"],ip={key:0,class:"lg:col-span-3 space-y-4"},lp={key:0,class:"text-[10px] font-black uppercase ml-6 mb-4 tracking-[0.2em] text-slate-400"},op={key:0,class:"flex justify-center items-center gap-2 py-10 flex-wrap"},sp=["disabled"],rp={class:"flex gap-2"},cp=["onClick"],up=["disabled"],dp={key:1,class:"text-center py-20 rounded-[3rem] border border-dashed border-slate-200"},pp={key:1,class:"lg:col-span-3 space-y-4"},fp={key:0,class:"text-[10px] font-black uppercase ml-6 mb-4 tracking-[0.2em] text-slate-400"},mp={__name:"XtallView",props:{isDark:{type:Boolean,default:!0}},setup(e){const t=re(""),n=re(""),a=re([]),i=re(!1),l=re(1),o=re(10),s={ATTACK:{text:"text-cyan-400",border:"border-cyan-500/30",accent:"text-cyan-500 focus:ring-cyan-500"},DEFENSE:{text:"text-emerald-400",border:"border-emerald-500/30",accent:"text-emerald-500 focus:ring-emerald-500"},"BASE STATS":{text:"text-orange-400",border:"border-orange-500/30",accent:"text-orange-500 focus:ring-orange-500"},OTHER:{text:"text-purple-400",border:"border-purple-500/30",accent:"text-purple-500 focus:ring-purple-500"}},c={ATTACK:[{label:"ATK / ATK%",value:".ATK"},{label:"MATK / MATK%",value:"MATK"},{label:"Weapon ATK",value:"Weapon ATK"},{label:"DTE (Elements)",value:"stronger against"},{label:"Critical Rate / CR%",value:"Critical Rate"},{label:"Critical Damage / CD%",value:"Critical Damage"},{label:"Short Range Dmg%",value:"Daya Jarak Dekat"},{label:"Long Range Dmg%",value:"Daya Jarak Jauh"},{label:"Physical Pierce%",value:"Physical Pierce"},{label:"Magic Pierce%",value:"Peneterasi Sihir"},{label:"Additional Melee",value:"Tambahan Fisik"},{label:"Additional Magic",value:"Tambahan Sihir"},{label:"Dodge",value:"Dodge"},{label:"Evasion Recharge",value:"Evasion Recharge"},{label:"Unsheathe Attack%",value:"Serangan Menghunus"},{label:"Stability",value:"Stability"},{label:"Antisipasi",value:"Antisipasi"},{label:"Guard Break",value:"Guard Break"}],DEFENSE:[{label:"DEF",value:".DEF"},{label:"MDEF",value:"MDEF"},{label:"Aggro%",value:"Aggro"},{label:"Phys Resistance%",value:"Kekebalan Fisik"},{label:"Magic Resistance%",value:"Kekebalan Sihir"},{label:"Light Resistance%",value:"kebal Cahaya"},{label:"Dark Resistance%",value:"kebal Gelap"},{label:"Earth Resistance%",value:"kebal Bumi"},{label:"Fire Resistance%",value:"kebal Api"},{label:"Water Resistance%",value:"kebal Air"},{label:"Wind Resistance%",value:"kebal Angin"},{label:"Ailment Resistance%",value:"Resistansi Status Buruk"},{label:"Fractional Barrier%",value:"Pelindung Fraksional"},{label:"Reduksi DMG (Sekitar Pemain)",value:"Reduksi DMG (Sekitar Pemain)"},{label:"Reduksi DMG (Sekitar Musuh)",value:"Reduksi DMG (Sekitar Musuh)"},{label:"Reduksi DMG (Lantai)",value:"Reduksi DMG (Lantai)"},{label:"Reduksi DMG (Linear)",value:"Reduksi DMG (Linear)"},{label:"Reduksi DMG (Bowling)",value:"Reduksi DMG (Bowling)"},{label:"Reduksi DMG (Terjang)",value:"Reduksi DMG (Terjang)"},{label:"Reduksi DMG (Peluru)",value:"Reduksi DMG (Peluru)"},{label:"Akurasi",value:"Akurasi"},{label:"Guard Break",value:"Guard Break"},{label:"Guard Break",value:"Guard Break"},{label:"MaxHP / MaxHP%",value:"MaxHP"},{label:"MaxMP / MaxMP%",value:"MaxMP"}],"BASE STATS":[{label:"STR / STR%",value:"STR"},{label:"INT / INT%",value:"INT"},{label:"DEX / DEX%",value:"DEX"},{label:"AGI / AGI%",value:"AGI"},{label:"VIT / VIT%",value:"VIT"}],OTHER:[{label:"ASPD",value:"ASPD"},{label:"CSPD",value:"CSPD"},{label:"Motion Speed%",value:"Motion Speed"},{label:"AMPR",value:"Attack MP Recovery"},{label:"Natural MP Regen",value:"Natural MP Regen"},{label:"Natural HP Regen",value:"Natural HP Regen"},{label:"Drop Rate%",value:"Drop Rate"},{label:"EXP%",value:"EXP"},{label:"Revive Time%",value:"Revive Time"}]},f=Y(()=>t.value.trim()!==""||n.value!==""||a.value.length>0);Nt([t,n,a,o],()=>{l.value=1});const u=y=>{t.value=y,a.value=[],i.value=!1,window.scrollTo({top:0,behavior:"smooth"})},d=Y(()=>{const y=t.value.toLowerCase().trim(),v=n.value,x=a.value;return f.value?bn.filter(w=>{const H=!y||w.name.toLowerCase().includes(y),X=!v||w.type===v;let te=!0;if(x.length>0){if(!w.view)return!1;const Ae=w.view.toUpperCase();te=x.every(j=>j==="REG_ATK"?/\bATK\b/.test(Ae)&&!Ae.includes("MATK")&&!Ae.includes("WEAPON ATK"):Ae.includes(j.toUpperCase()))}return H&&X&&te}).sort((w,H)=>w.name.localeCompare(H.name)):[...bn].sort((w,H)=>w.name.localeCompare(H.name))}),h=Y(()=>Math.ceil(d.value.length/o.value)),g=Y(()=>d.value.slice((l.value-1)*o.value,l.value*o.value)),P=Y(()=>{const y=h.value,v=l.value;return y<=7?Array.from({length:y},(x,w)=>w+1):v<=4?[1,2,3,4,5,"...",y]:v>=y-3?[1,"...",y-4,y-3,y-2,y-1,y]:[1,"...",v-1,v,v+1,"...",y]}),A=Y(()=>{if(t.value===""||!d.value.length)return[];const y=[];let v=d.value[0];for(;v?.link;){const x=bn.find(w=>w.code===v.link);if(x)y.unshift(x),v=x;else break}return y}),b=Y(()=>t.value!==""&&d.value.length?bn.filter(y=>y.link===d.value[0].code):[]);return(y,v)=>(T(),I("div",W0,[v[19]||(v[19]=Rn('<div class="fixed inset-0 pointer-events-none z-[-1] opacity-30" data-v-dddbe31e><svg class="absolute -top-20 -left-20 w-[500px] h-[500px] blur-[100px] animate-slow-float" viewBox="0 0 200 200" data-v-dddbe31e><circle cx="100" cy="100" r="80" fill="#06b6d4" data-v-dddbe31e></circle></svg><svg class="absolute -bottom-20 -right-20 w-[500px] h-[500px] blur-[100px] animate-slow-float-delayed" viewBox="0 0 200 200" data-v-dddbe31e><circle cx="100" cy="100" r="80" fill="#a855f7" data-v-dddbe31e></circle></svg></div>',1)),r("div",{class:E(["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-[3rem] border backdrop-blur-xl shadow-2xl transition-all relative z-[100] overflow-visible",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/70 border-white shadow-blue-100/50 text-slate-900"])},[r("div",Q0,[r("label",{class:E(["block text-[10px] font-black uppercase tracking-widest ml-4",e.isDark?"text-cyan-400":"text-cyan-600"])},"Search Name",2),r("div",q0,[ge(r("input",{"onUpdate:modelValue":v[0]||(v[0]=x=>t.value=x),type:"text",placeholder:"Search Crysta...",class:E(["w-full pl-14 pr-4 py-5 rounded-[2rem] border outline-none transition-all shadow-inner",e.isDark?"bg-slate-800/50 border-white/10 text-white focus:ring-cyan-500/50":"bg-white/80 border-slate-100 text-slate-900 shadow-blue-50/50"])},null,2),[[Je,t.value]]),v[8]||(v[8]=r("div",{class:"absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-cyan-500/10"},[r("svg",{class:"w-5 h-5 text-cyan-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[r("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","stroke-linecap":"round"})])],-1))])]),r("div",z0,[r("label",{class:E(["block text-[10px] font-black uppercase tracking-widest ml-4",e.isDark?"text-orange-400":"text-orange-600"])},"Type Crysta",2),r("div",X0,[ge(r("select",{"onUpdate:modelValue":v[1]||(v[1]=x=>n.value=x),class:E(["w-full pl-14 pr-12 py-5 rounded-[2rem] border outline-none cursor-pointer font-bold appearance-none transition-all shadow-inner",e.isDark?"bg-slate-800/50 border-white/10 text-white":"bg-white/80 border-slate-100 text-slate-900 shadow-orange-50/50"])},[v[9]||(v[9]=r("option",{value:""},"All Types",-1)),(T(!0),I(q,null,de(Ie(J0),x=>(T(),I("option",{key:x,value:x},U(x),9,Z0))),128))],2),[[vt,n.value]]),v[10]||(v[10]=Rn('<div class="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-orange-500/10 pointer-events-none" data-v-dddbe31e><svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" data-v-dddbe31e><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke-linecap="round" data-v-dddbe31e></path></svg></div><div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" data-v-dddbe31e><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3" data-v-dddbe31e><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" data-v-dddbe31e></path></svg></div>',2))])]),r("div",Y0,[r("label",{class:E(["block text-[10px] font-black uppercase tracking-widest ml-4",e.isDark?"text-emerald-400":"text-emerald-600"])}," Status ("+U(a.value.length)+") ",3),r("div",$0,[r("button",{onClick:v[2]||(v[2]=Nc(x=>i.value=!i.value,["stop"])),class:E(["w-full pl-14 pr-12 py-5 rounded-[2rem] border text-left font-bold transition-all shadow-inner truncate relative",e.isDark?"bg-slate-800/50 border-white/10 text-white":"bg-white/80 border-slate-100 text-slate-900 shadow-emerald-50/50"])},[kt(U(a.value.length>0?a.value.length+" dipilih":"Pilih Status...")+" ",1),r("div",{class:E(["absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 opacity-40",i.value?"rotate-180":""])},[...v[11]||(v[11]=[r("svg",{class:"w-4 h-4 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"3"},[r("path",{d:"M19 9l-7 7-7-7","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)],2),i.value?(T(),I("div",{key:0,class:E(["absolute left-0 top-full mt-4 w-[320px] md:w-[500px] z-[9999] p-6 rounded-[2.5rem] border shadow-2xl backdrop-blur-3xl max-h-[500px] overflow-y-auto scale-in-center",e.isDark?"bg-slate-900/95 border-white/10 shadow-black":"bg-white/95 border-slate-200 shadow-emerald-200/50"])},[(T(),I(q,null,de(c,(x,w)=>r("div",{key:w,class:"mb-8 last:mb-0 relative"},[r("h5",{class:E(["text-[11px] font-black uppercase tracking-[0.2em] mb-4 pl-4",s[w].text])},U(w),3),r("div",{class:E(["grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 pl-4 border-l-2 ml-1 transition-colors duration-300",s[w].border])},[(T(!0),I(q,null,de(x,H=>(T(),I("label",{key:H.value,class:"flex items-center gap-3 px-2 py-1.5 rounded-xl cursor-pointer hover:bg-white/5 transition-all group"},[ge(r("input",{type:"checkbox","onUpdate:modelValue":v[3]||(v[3]=X=>a.value=X),value:H.value,class:E(["w-4 h-4 rounded border-slate-500 bg-transparent focus:ring-offset-0",s[w].accent])},null,10,ep),[[ti,a.value]]),r("span",{class:E(["text-[11px] font-bold transition-colors duration-200",a.value.includes(H.value)?s[w].text:e.isDark?"text-slate-400":"text-slate-700","group-hover:"+s[w].text])},U(H.label),3)]))),128))],2)])),64))],2)):mt("",!0),v[12]||(v[12]=r("div",{class:"absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-emerald-500/10 pointer-events-none"},[r("svg",{class:"w-5 h-5 text-emerald-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2"},[r("path",{d:"M13 10V3L4 14h7v7l9-11h-7z","stroke-linecap":"round"})])],-1))])]),r("div",tp,[r("label",{class:E(["block text-[10px] font-black uppercase tracking-widest ml-4",e.isDark?"text-purple-400":"text-purple-600"])},"Display",2),r("div",np,[ge(r("select",{"onUpdate:modelValue":v[4]||(v[4]=x=>o.value=x),class:E(["w-full pl-6 pr-12 py-5 rounded-[2rem] border outline-none cursor-pointer font-bold appearance-none transition-all shadow-inner relative",e.isDark?"bg-slate-800/50 border-white/10 text-white":"bg-white/80 border-slate-100 text-slate-900 shadow-purple-50/50"])},[v[13]||(v[13]=r("option",{value:10},"Show 10",-1)),v[14]||(v[14]=r("option",{value:20},"Show 20",-1)),r("option",{value:Ie(bn).length},"Show All",8,ap)],2),[[vt,o.value]]),v[15]||(v[15]=r("div",{class:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"},[r("svg",{class:"w-4 h-4 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"3"},[r("path",{d:"M19 9l-7 7-7-7","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))])])],2),r("div",{class:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-0",onClick:v[7]||(v[7]=x=>i.value=!1)},[t.value.trim()!==""?(T(),I("div",ip,[A.value.length?(T(),I("h4",lp,"Evolution Chain")):mt("",!0),(T(!0),I(q,null,de(A.value,x=>(T(),Xt(La,{key:"down-"+x.code,data:x,icons:Ie(Ga),"is-dark":e.isDark,"is-main":!1,onSearch:u},null,8,["data","icons","is-dark"]))),128))])):mt("",!0),r("div",{class:E([t.value.trim()!==""?"lg:col-span-6":"lg:col-span-12 max-w-5xl mx-auto w-full","space-y-6"])},[g.value.length>0?(T(),I(q,{key:0},[(T(!0),I(q,null,de(g.value,x=>(T(),Xt(La,{key:x.code,data:x,"is-main":!0,icons:Ie(Ga),"is-dark":e.isDark,onSearch:u},null,8,["data","icons","is-dark"]))),128)),h.value>1?(T(),I("div",op,[r("button",{onClick:v[5]||(v[5]=x=>l.value--),disabled:l.value===1,class:"p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 disabled:opacity-20 shadow-sm transition-all hover:bg-slate-50"},[...v[16]||(v[16]=[r("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M15 19l-7-7 7-7","stroke-width":"3","stroke-linecap":"round"})],-1)])],8,sp),r("div",rp,[(T(!0),I(q,null,de(P.value,x=>(T(),I("button",{key:x,onClick:w=>x!=="..."&&(l.value=x),class:E(["w-12 h-12 rounded-2xl font-black transition-all shadow-sm",l.value===x?"bg-cyan-500 text-white":"bg-white text-slate-400 hover:bg-slate-50"])},U(x),11,cp))),128))]),r("button",{onClick:v[6]||(v[6]=x=>l.value++),disabled:l.value===h.value,class:"p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 disabled:opacity-20 shadow-sm transition-all hover:bg-slate-50"},[...v[17]||(v[17]=[r("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{d:"M9 5l7 7-7 7","stroke-width":"3","stroke-linecap":"round"})],-1)])],8,up)])):mt("",!0)],64)):(T(),I("div",dp,[...v[18]||(v[18]=[r("p",{class:"text-slate-400 font-black uppercase tracking-widest"},"No Crystals Found",-1)])]))],2),t.value.trim()!==""?(T(),I("div",pp,[b.value.length?(T(),I("h4",fp,"Next Upgrade")):mt("",!0),(T(!0),I(q,null,de(b.value,x=>(T(),Xt(La,{key:"up-"+x.code,data:x,icons:Ie(Ga),"is-dark":e.isDark,"is-main":!1,onSearch:u},null,8,["data","icons","is-dark"]))),128))])):mt("",!0)])]))}},hp=mn(mp,[["__scopeId","data-v-dddbe31e"]]),_l=310,Ua={"Custom Experience Value":0,"Nightmare Crystal (Stack)":297e3,"Lapin's Soul (Piece)":344e3,"Parasited Crystal (Stack)":38e4,"Free from Infesters! (2k f/k)":15e6,"Defeat Metal Stinger (x100)":324e4,"Minotaur Skin (Stack)":999900,"Cracked Platinum Armguard (Stack)":677e3},Ha={"Chapter 1":"","First Time Visit":30,"Straye Brother and Sister":80,"A Golem on a Rampage":730,"The Goddess of Wisdom":2050,"The Dragon's Den":4700,"The Ruined Temple":9330,"The First Magic Stone":16700,"Purification Incense":27900,"The Dragon and Black Crystal":43e3,"Chapter 2":"","The Merchant Girl":64e3,"Where Are the Gems?":92e3,"Who is the Black Knight?!":118200,"Trials in the Palace":149e3,"The Moon Wizard":172e3,"The Follower and Hater":227e3,"The Wizard's Cave":24e4,"The Star Wizard":255e3,"Chapter 3":"","The Invincible... Enemy??":27e4,"The Ancient Empress":284e3,"The Culprit":319e3,"Fate of the Fortress":335e3,"Memory in the Lost Town":398e3,"The Stolen Sorcery Gem":417e3,"Living with a Dragon":462300,"Monsters from Outerworld":54e4,"Chapter 4":"","The Mage Diels":562e3,"Journey for Reconstruction":585e3,"The Sacred Gem in Akaku":71e4,"The King of Darkan":74e4,"The Lurking Evil":803e3,"Find the False Black Knight!":913e3,"Technista's Movement":1e6,"The Falling Feather of Death":11e5,"Chapter 5":"","In The Unknown Darkness":115e4,"The Charm":131e4,"Parching Dark Mirror":137e4,"Fierce Battle in the Garden":155e4,"A Light in the Darkness":175e4,"The Ones Nesting in the Manor":197e4,"The Dark Castle":221e4,"To The Living World":222e4,"Chapter 6":"","Demi Machina":26e5,"The Town of Pax Faction":27e5,"Mechanical Heart":28e5,"Black Knights of Lyark":282e4,"The Mysterious Artifact":303e4,"Truth of the Artifact":3099e3,"The Price of Treachery":332e4,"The Blasphemous Factory":364e4,"Mystery of the Black Knights":402e4,"Chapter 7":"","Monster's Forest":473e4,"The Underground Town":482e4,"The Elves in Lyark":507e4,"The Mad Laboratory":55e5,"Tragedy in the Jail":6e6,"Calamity in Droma Square":64e5,"Head for Ultimea Palace":69e5,"The Chaotic Truth":74e5,"Chapter 8":"","The Mine Where Monsters Lurk":84e5,"The Mysterious Shadow":85e5,"The New Diel Country":86e5,"The Ruins of the Gods":88e5,"The Former God of Justice":91e5,"The Remaining Thrones in the Shrine":97e5,"Gods' Whereabouts":104e5,"The Wait at Specia's Shrine":111e5,"The Warden of Ice & Snow":118e5,"At Mountains' End":125e5,"Chapter 9":"","Deadly Road to Eldenbaum":158e5,"Unforeseen Traps":171e5,"Traces of Technological Progress":182e5,"An Unexpected Acquaintance":192e5,"Front Line Base Operation":203e5,"Strategy to Redeem the Treetop Harbor":215e5,"The Teleporter Left Behind":227e5,"The Man Who Seeks Death":239e5,"The Battle to Recapture Eldenbaum":25e6,"A New Beginning":13e6,"Chapter 10":"","Off to the Fateful Land":26e6,"The Inhabitants Under the Cliff":274e5,"The Nightmare Returns":288e5,"The Whereabouts of the Missing Monks":302e5,"The Goddess of Justice and the Squatters":316e5,"Navigator of the Ark":331e5,"Witch in the Woods":346e5,"The Duel in Nov Diela":362e5,"Chapter 11":"","Flying the Ark":378e5,"Land of the Unknown":49e6,"The Strolling Forest":51e6,"Eumanos the Forest Dwellers":534e5,"A Sproutling is Born":557e5,"The Blessing-Bearer":581e5,"Intense Battle in Coenubia's Stronghold":605e5,"The Shadow of a Smoky Mountain":63e6,"The Weredragons & the Underground World":655e5,"Chapter 12":"","The Sky with a Ceiling":734e5,"Rivalry Between Dragons and Weredragons":763e5,"Weredragon Couple and a Baby":793e5,"Weredragons' Vital Point":823e5,"Intense Battle in Propulsion System":853e5,"Discovering a New Technology":442e5,"Ark Repair":927e5,"Weredragon Dispute":96e6,"Cocoon in the Ice Wall":993e5,"Chapter 13":"","Underwater Inhabitants":1126e5,"Water Dome":1165e5,"Underwater City":602e5,"The Thing in the Abandoned District":1258e5,"Shadow from the Abyss":1299e5,"The Ruthless Council":67e6,"Mysterious Entity in the Little Shrine":1399e5,"The Great Battle Underwater":1442e5,"Chapter 14":"","Crisis in the Sky":1591e5,"The Surviving Siblings":164e6,"Chaotic Situation":1689e5,"The Bitter Truth":1738e5,"The Uncouth Rana Prince":1788e5,"Mutant Coenubia Village":1839e5,"Fierce Battle with Mutant Lixis":189e6,"Chapter 15":"","Ark Crisis":2105e5,"Coastal Clash":2163e5,"Unda's Rescue Operation":2222e5},It=e=>Math.floor(.025*Math.pow(e,4)+2*e),gp=(e,t,n)=>{let a=Math.floor((1-t/100)*It(e));for(let i=e+1;i<n;i++)a+=It(i);return a},ja=(e,t,n)=>{let a=n,i=(1-t/100)*It(e);if(n<i){let l=t/100*It(e)+n;return[e,Math.floor(100*l/It(e))]}else{a-=i;let l=e+1;for(;It(l)<=a;)a-=It(l),l+=1;let o=Math.floor(100*a/It(l));return[l,o]}},Ap={class:"space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto pb-20 px-4"},kp={class:"flex flex-col items-center gap-6 animate-bounce-slow"},bp={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},vp={class:"lg:col-span-2 space-y-6"},yp={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},xp={class:"group"},wp={class:"group"},Pp={class:"group"},Mp={key:0,class:"space-y-8 animate-in slide-in-from-top-2"},Dp={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},Rp={class:"relative group select-container"},Sp={class:"relative"},Cp=["value"],Ep={class:"relative group select-container"},Tp={class:"relative"},_p=["value"],Kp={class:"flex flex-wrap gap-8 ml-2"},Ip={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},Bp={class:"flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform"},Op={key:1,class:"space-y-8 animate-in slide-in-from-top-2"},Np={class:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"},Lp={class:"relative group select-container"},Gp={class:"relative"},Up=["value"],Hp={class:"lg:col-span-1"},jp={class:"space-y-6 sticky top-8"},Fp={class:"relative z-10 space-y-8"},Vp={class:"result-item"},Jp={class:"text-2xl font-black tabular-nums tracking-tighter"},Wp={class:"pt-8 border-t border-white/20 result-item"},Qp={class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-2"},qp={class:"flex items-baseline gap-2"},zp={class:"text-6xl font-black italic tracking-tighter drop-shadow-lg block"},Xp={class:"text-xl font-bold opacity-70"},Zp={class:"bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm result-item"},Yp={class:"text-sm font-black tabular-nums tracking-wide"},$p={class:"absolute -right-6 -bottom-6 text-[12rem] font-black italic opacity-10 pointer-events-none uppercase tracking-tighter transition-transform duration-700 deco-text"},ef={class:"space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scroll"},tf={class:"text-[11px] font-black opacity-40"},nf={class:"text-right"},af={class:"text-[10px] font-bold opacity-50 ml-1"},lf={__name:"CalculatorMQ",props:{isDark:Boolean},setup(e){const t=re("mq"),n=re(1),a=re(0),i=re(_l),l=re(!0),o=re(!1),s=Object.keys(Ha),c=re(1),f=re(s.length-1),u=re(Object.keys(Ua)[1]),d=re(1),h=Y(()=>{let P=[],A=0;return s.forEach((b,y)=>{b.startsWith("Chapter")?A++:Ha[b]!==""&&P.push({id:y,label:`CH${A} - ${b}`})}),P}),g=Y(()=>{const P=Number(n.value)||1,A=Number(a.value)||0,b=Number(i.value)||_l,y=gp(P,A,b);let v=0;for(let j=c.value;j<=f.value;j++){const Z=Ha[s[j]];typeof Z=="number"&&(v+=Z),s[j].includes("Coenubia")&&!l.value&&(v+=125e5)}const[x,w]=ja(P,A,v);let H=[];if(o.value&&v>0){let j=P,Z=A;for(let ie=1;ie<=20;ie++){const[L,ne]=ja(j,Z,v);if(H.push({run:ie,lv:L,p:ne}),j=L,Z=ne,j>=b)break}}const X=(Ua[u.value]||0)*(d.value||0),[te,Ae]=ja(P,A,X);return{xpNeeded:y,totalMqXP:v,resLv:x,resP:w,diaryRuns:H,sqLv:te,sqPercent:Ae,sqXP:X}});return(P,A)=>(T(),I("div",Ap,[r("div",kp,[A[11]||(A[11]=r("div",{class:"text-center"},[r("h1",{class:"text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl"}," MQ Calculator "),r("p",{class:"text-[10px] font-bold opacity-50 tracking-[0.4em] uppercase animate-pulse"},"Timi DB System")],-1)),r("div",{class:E(["p-1 rounded-full flex gap-1 border backdrop-blur-md transition-all shadow-xl",e.isDark?"bg-white/5 border-white/10":"bg-slate-200/50 border-slate-300"])},[r("button",{onClick:A[0]||(A[0]=b=>t.value="mq"),class:E(["tab-btn",t.value==="mq"?"tab-active":""])},"Main Quest",2),r("button",{onClick:A[1]||(A[1]=b=>t.value="npc"),class:E(["tab-btn",t.value==="npc"?"tab-active":""])},"NPC Quest",2)],2)]),r("div",bp,[r("div",vp,[r("div",{class:E(["p-8 rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500",e.isDark?"bg-slate-900/40 border-white/10":"bg-white/60 border-white/40"])},[r("div",yp,[r("div",xp,[A[12]||(A[12]=r("label",{class:"label-text"},"Current Lv",-1)),ge(r("input",{"onUpdate:modelValue":A[2]||(A[2]=b=>n.value=b),type:"number",class:E(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Je,n.value,void 0,{number:!0}]])]),r("div",wp,[A[13]||(A[13]=r("label",{class:"label-text"},"Percent %",-1)),ge(r("input",{"onUpdate:modelValue":A[3]||(A[3]=b=>a.value=b),type:"number",class:E(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Je,a.value,void 0,{number:!0}]])]),r("div",Pp,[A[14]||(A[14]=r("label",{class:"label-text text-pink-500"},"Target Lv",-1)),ge(r("input",{"onUpdate:modelValue":A[4]||(A[4]=b=>i.value=b),type:"number",class:E(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Je,i.value,void 0,{number:!0}]])])]),t.value==="mq"?(T(),I("div",Mp,[r("div",Dp,[r("div",Rp,[A[16]||(A[16]=r("label",{class:"label-text text-indigo-400"},"Start From",-1)),r("div",Sp,[ge(r("select",{"onUpdate:modelValue":A[5]||(A[5]=b=>c.value=b),class:E(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(T(!0),I(q,null,de(h.value,b=>(T(),I("option",{key:b.id,value:b.id,class:"dropdown-item"},U(b.label),9,Cp))),128))],2),[[vt,c.value]]),A[15]||(A[15]=r("div",{class:"select-arrow text-indigo-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",Ep,[A[18]||(A[18]=r("label",{class:"label-text text-indigo-400"},"End At",-1)),r("div",Tp,[ge(r("select",{"onUpdate:modelValue":A[6]||(A[6]=b=>f.value=b),class:E(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(T(!0),I(q,null,de(h.value,b=>(T(),I("option",{key:b.id,value:b.id,class:"dropdown-item"},U(b.label),9,_p))),128))],2),[[vt,f.value]]),A[17]||(A[17]=r("div",{class:"select-arrow text-indigo-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])]),r("div",Kp,[r("label",Ip,[ge(r("input",{type:"checkbox","onUpdate:modelValue":A[7]||(A[7]=b=>l.value=b),class:"w-5 h-5 rounded border-indigo-500 accent-indigo-600 cursor-pointer"},null,512),[[ti,l.value]]),A[19]||(A[19]=r("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Skip Pre-Venena",-1))]),r("label",Bp,[ge(r("input",{type:"checkbox","onUpdate:modelValue":A[8]||(A[8]=b=>o.value=b),class:"w-5 h-5 rounded border-purple-500 accent-purple-600 cursor-pointer"},null,512),[[ti,o.value]]),A[20]||(A[20]=r("span",{class:"text-[11px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"},"Spam Diaries",-1))])])])):(T(),I("div",Op,[r("div",Np,[r("div",Lp,[A[22]||(A[22]=r("label",{class:"label-text text-emerald-400"},"Select Quest",-1)),r("div",Gp,[ge(r("select",{"onUpdate:modelValue":A[9]||(A[9]=b=>u.value=b),class:E(["input-style custom-select pr-10",e.isDark?"dark-input":"light-input"])},[(T(!0),I(q,null,de(Ie(Ua),(b,y)=>(T(),I("option",{key:y,value:y,class:"dropdown-item"},U(y),9,Up))),128))],2),[[vt,u.value]]),A[21]||(A[21]=r("div",{class:"select-arrow text-emerald-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",null,[A[23]||(A[23]=r("label",{class:"label-text text-emerald-400"},"Amount (Stack/Times)",-1)),ge(r("input",{"onUpdate:modelValue":A[10]||(A[10]=b=>d.value=b),type:"number",class:E(["input-style",e.isDark?"dark-input":"light-input"])},null,2),[[Je,d.value,void 0,{number:!0}]])])])]))],2)]),r("div",Hp,[r("div",jp,[r("div",{class:E(["p-8 rounded-[3rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-500 result-card-interactive",t.value==="mq"?"bg-gradient-to-br from-indigo-600 to-purple-800 shadow-indigo-500/30":"bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-500/30"])},[r("div",Fp,[r("div",Vp,[A[24]||(A[24]=r("p",{class:"text-[10px] font-black tracking-widest opacity-60 uppercase mb-1"},"XP Required to Target",-1)),r("h3",Jp,U(g.value.xpNeeded.toLocaleString()),1)]),r("div",Wp,[r("p",Qp,U(t.value==="mq"?"Result After 1 Run":"Result After Turn-in"),1),r("div",qp,[r("span",zp," Lv "+U(t.value==="mq"?g.value.resLv:g.value.sqLv),1),r("span",Xp,U(t.value==="mq"?g.value.resP:g.value.sqPercent)+"% ",1)])]),r("div",Zp,[A[25]||(A[25]=r("p",{class:"text-[9px] font-bold opacity-50 uppercase tracking-widest mb-1"},"Total XP Gained",-1)),r("p",Yp,U((t.value==="mq"?g.value.totalMqXP:g.value.sqXP).toLocaleString())+" XP ",1)])]),r("div",$p,U(t.value),1)],2),t.value==="mq"&&o.value&&g.value.diaryRuns.length>0?(T(),I("div",{key:0,class:E(["p-6 rounded-[2.5rem] border backdrop-blur-md animate-in slide-in-from-bottom-4",e.isDark?"bg-white/5 border-white/10":"bg-white border-slate-200 shadow-lg"])},[A[26]||(A[26]=r("p",{class:"text-[10px] font-black uppercase tracking-widest opacity-50 mb-4 px-2"},"Diary Projection",-1)),r("div",ef,[(T(!0),I(q,null,de(g.value.diaryRuns,b=>(T(),I("div",{key:b.run,class:"flex justify-between items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-colors"},[r("span",tf,"RUN #"+U(b.run),1),r("div",nf,[r("span",{class:E(["font-black",e.isDark?"text-white":"text-slate-800"])},"Lv "+U(b.lv),3),r("span",af,U(b.p)+"%",1)])]))),128))])],2)):mt("",!0)])])])]))}},of=mn(lf,[["__scopeId","data-v-c84703e0"]]),sf=280,Kl=54,rf=55,Il=265,cf=300,St=510,Ct=277,{floor:De,min:uf,max:df}=Math,pf=(e,t,n,a,i)=>{const l=De(n*(100+(i||0))/100+(a||0));return(e||0)+De((t||0)/2)+De(l/6)},ff=(e,t,n,a,i,l)=>{const o=De(a*(100+(l||0))/100+(i||0)),s=(50+5*(e||0))/100,c=10+(t||0)-(n||0)+De(o/10);return uf(100,df(0,De(s*c)))},mf=(e,t,n,a,i)=>{let l=De((e||0)*(1+(t||0)*.01+(n||0)*.02));const o=i;switch(a){case"Armor":l+=De(o.VIT/10);break;case"1H Sword":case"Bow":l+=De((o.DEX+o.STR)/20);break;case"2H Sword":l+=De(o.STR/10);break;case"Bowgun":l+=De(o.DEX/10);break;case"Staff":l+=De(o.INT/10);break;case"Magic Device":l+=De((o.INT+o.AGI)/20);break;case"Knuckle":l+=De(o.AGI/10);break;case"Halberd":l+=De((o.STR+o.AGI)/20);break;case"Katana":l+=De((o.DEX+o.AGI)/20);break}return l},hf={class:"relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8"},gf={class:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"},Af={class:"lg:col-span-4 space-y-6 animate-float"},kf={class:"grid grid-cols-2 gap-x-4 gap-y-5"},bf={class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 ml-1"},vf=["onUpdate:modelValue"],yf={class:"mt-8 pt-6 border-t dark:border-white/5 border-slate-100 grid grid-cols-2 gap-3"},xf={class:"block text-[8px] font-black text-slate-500 uppercase mb-1 ml-1"},wf=["onUpdate:modelValue"],Pf={class:"lg:col-span-4 space-y-6"},Mf={class:"space-y-4"},Df={class:"relative group select-container"},Rf={class:"relative overflow-hidden rounded-xl"},Sf=["value"],Cf={class:"grid grid-cols-2 gap-4"},Ef={class:"group"},Tf={class:"group"},_f={class:"space-y-3 pt-2"},Kf={class:"text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-cyan-200"},If=["onUpdate:modelValue"],Bf={class:"lg:col-span-4 space-y-6 animate-float-slow"},Of={class:"flex items-baseline gap-2"},Nf={class:"mt-6 w-full bg-slate-500/10 h-3 rounded-full overflow-hidden p-[2px]"},Lf={class:"flex items-baseline gap-2"},Gf={class:"text-8xl font-black italic tracking-tighter leading-none dark:text-white text-slate-900 hover:scale-105 transition-transform duration-700 block"},Uf={class:"space-y-4"},Hf={class:"flex justify-between items-center text-[10px] font-black text-slate-500 uppercase border-b border-white/5 pb-3"},jf={key:0,class:"flex flex-col items-center justify-center gap-2 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2rem] text-rose-500 animate-shake shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]"},Ff={key:1,class:"group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-[2rem] text-emerald-400 animate-pulse transition-all hover:border-emerald-500/50"},Vf={__name:"BSCalculator",props:["isDark"],setup(e){const t=e,n=Y(()=>["p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500",t.isDark?"bg-slate-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]":"bg-white/80 border-slate-200 shadow-xl"]),a=["Armor","1H Sword","2H Sword","Bow","Bowgun","Staff","Magic Device","Knuckle","Halberd","Katana"],i=Hn({level:305,craftType:"Armor",stats:{STR:0,INT:0,VIT:0,DEX:0,AGI:0,TEC:0},eStr:0,eStrP:0,eDex:0,eDexP:0,prof:sf,createSkill:10,itemDiff:Il,basePot:Kl,careful:10,expert:10}),l=()=>{Object.keys(i.stats).forEach(f=>i.stats[f]=0),i.craftType==="Armor"?(i.stats.VIT=St,i.stats.TEC=Ct,i.itemDiff=Il,i.basePot=Kl):(i.itemDiff=cf,i.basePot=rf,["1H Sword","Bow","Bowgun"].includes(i.craftType)?(i.stats.DEX=St,i.stats.STR=Ct):i.craftType==="2H Sword"?(i.stats.STR=St,i.stats.DEX=Ct):i.craftType==="Staff"?(i.stats.INT=St,i.stats.TEC=Ct):i.craftType==="Magic Device"?(i.stats.INT=St,i.stats.AGI=Ct):i.craftType==="Knuckle"?(i.stats.AGI=St,i.stats.DEX=Ct):i.craftType==="Halberd"?(i.stats.STR=St,i.stats.AGI=Ct):i.craftType==="Katana"&&(i.stats.DEX=St,i.stats.AGI=Ct))};Fn(()=>l());const o=Y(()=>pf(i.prof,i.stats.TEC,i.stats.DEX,i.eDex,i.eDexP)),s=Y(()=>ff(i.createSkill,o.value,i.itemDiff,i.stats.STR,i.eStr,i.eStrP)),c=Y(()=>mf(i.basePot,i.careful,i.expert,i.craftType,i.stats));return(f,u)=>(T(),I("div",hf,[u[17]||(u[17]=r("div",{class:"text-center py-4 animate-bounce-slow"},[r("h1",{class:"text-6xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-orange-400 to-slate-500 dark:from-white dark:via-orange-500 dark:to-slate-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"}," Blacksmith Calculator "),r("p",{class:"text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mt-2 animate-pulse"},"Timi DB")],-1)),r("div",gf,[r("div",Af,[r("div",{class:E(n.value)},[u[3]||(u[3]=r("p",{class:"text-[10px] font-black uppercase tracking-widest text-orange-500/60 mb-6 border-b border-orange-500/10 pb-2"},"Character Parameters",-1)),r("div",kf,[(T(!0),I(q,null,de(i.stats,(d,h)=>(T(),I("div",{key:h,class:"transition-all hover:scale-105"},[r("label",bf,U(h),1),ge(r("input",{type:"number","onUpdate:modelValue":g=>i.stats[h]=g,class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"},null,8,vf),[[Je,i.stats[h],void 0,{number:!0}]])]))),128))]),r("div",yf,[(T(),I(q,null,de([["eStr","STR+"],["eStrP","STR%"],["eDex","DEX+"],["eDexP","DEX%"]],d=>r("div",{key:d[0]},[r("label",xf,U(d[1]),1),ge(r("input",{type:"number","onUpdate:modelValue":h=>i[d[0]]=h,class:"w-full bg-orange-500/5 border dark:border-white/5 border-slate-200 rounded-lg p-2 text-center text-xs font-black text-orange-500 outline-none hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all"},null,8,wf),[[Je,i[d[0]],void 0,{number:!0}]])])),64))])],2)]),r("div",Pf,[r("div",{class:E([n.value,"relative border-t-4 border-t-cyan-500/50 shadow-cyan-500/5"])},[u[8]||(u[8]=r("p",{class:"text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-500/10 pb-2"},"Crafting Configuration",-1)),r("div",Mf,[r("div",Df,[u[5]||(u[5]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400 transition-colors"},"Equipment Type",-1)),r("div",Rf,[ge(r("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.craftType=d),onChange:l,class:"w-full bg-slate-500/10 border dark:border-white/10 border-slate-200 rounded-xl p-4 font-black dark:text-cyan-100 text-slate-900 outline-none cursor-pointer appearance-none transition-all focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 custom-select"},[(T(),I(q,null,de(a,d=>r("option",{key:d,value:d,class:"dropdown-item"},U(d),9,Sf)),64))],544),[[vt,i.craftType]]),u[4]||(u[4]=r("div",{class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 group-hover:scale-125 transition-transform z-20"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),r("div",Cf,[r("div",Ef,[u[6]||(u[6]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Proficiency",-1)),ge(r("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=d=>i.prof=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[Je,i.prof,void 0,{number:!0}]])]),r("div",Tf,[u[7]||(u[7]=r("label",{class:"block text-[9px] font-black text-slate-500 uppercase mb-1.5 group-hover:text-cyan-400"},"Player Lv",-1)),ge(r("input",{type:"number","onUpdate:modelValue":u[2]||(u[2]=d=>i.level=d),class:"w-full bg-slate-500/5 border dark:border-white/10 border-slate-200 rounded-xl p-3 text-center font-black dark:text-white outline-none focus:border-cyan-500 transition-all"},null,512),[[Je,i.level,void 0,{number:!0}]])])]),r("div",_f,[(T(),I(q,null,de([["createSkill","Create Equipment"],["careful","Careful Creation"],["expert","Expert's Creation"]],d=>r("div",{key:d[0],class:"flex justify-between items-center bg-gradient-to-r from-slate-500/5 to-transparent p-4 rounded-2xl border border-transparent hover:border-cyan-500/30 hover:from-cyan-500/10 transition-all group"},[r("span",Kf,U(d[1]),1),ge(r("input",{type:"number","onUpdate:modelValue":h=>i[d[0]]=h,class:"w-10 bg-transparent text-right font-black text-cyan-400 outline-none group-hover:scale-125 transition-transform"},null,8,If),[[Je,i[d[0]],void 0,{number:!0}]])])),64))])])],2)]),r("div",Bf,[r("div",{class:E([n.value,"relative overflow-hidden group shadow-2xl"])},[u[10]||(u[10]=r("div",{class:"absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-[50px]"},null,-1)),u[11]||(u[11]=r("p",{class:"text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4"},"Success Rate",-1)),r("div",Of,[r("span",{class:E(["text-8xl font-black italic tracking-tighter leading-none transition-all duration-700 hover:tracking-normal block",s.value>=100?"text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]":"dark:text-white text-slate-900"])},U(s.value),3),u[9]||(u[9]=r("span",{class:"text-3xl font-black text-orange-500"},"%",-1))]),r("div",Nf,[r("div",{class:"h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-emerald-400 transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]",style:Qt({width:s.value+"%"})},null,4)])],2),r("div",{class:E([n.value,"border-l-4 border-l-cyan-500 relative overflow-hidden"])},[u[13]||(u[13]=r("div",{class:"absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 blur-[50px]"},null,-1)),u[14]||(u[14]=r("p",{class:"text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4"},"Total Potential",-1)),r("div",Lf,[r("span",Gf,U(c.value),1),u[12]||(u[12]=r("span",{class:"text-2xl font-black text-cyan-500/50 uppercase text-[12px]"},"Pts",-1))])],2),r("div",{class:E(n.value)},[r("div",Uf,[r("div",Hf,[r("span",null,"Diff Status: "+U(o.value)+" / "+U(i.itemDiff),1)]),o.value<i.itemDiff?(T(),I("div",jf,[...u[15]||(u[15]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),r("span",{class:"text-[10px] font-black uppercase tracking-widest"},"Low Difficulty",-1)])])):(T(),I("div",Ff,[...u[16]||(u[16]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1),r("span",{class:"text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform"},"Ready to Craft",-1)])]))])],2)])])]))}},Jf=mn(Vf,[["__scopeId","data-v-676556a4"]]),Wf=[{path:"/",name:"bag",component:t0},{path:"/mq",name:"mainquest",component:T0},{path:"/mq-calc",name:"mqcalc",component:of},{path:"/bs-calc",name:"bs-calc",component:Jf},{path:"/xtall",name:"xtall",component:hp}],Qf=zu({history:Ru("/toram-vue/"),routes:Wf}),ms=Uc(rd);ms.use(Qf);ms.mount("#app");
