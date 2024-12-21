(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const M=(e,t)=>e===t,q={equals:M};let R=U;const w=1,v=2,B={owned:null,cleanups:null,context:null,owner:null};var h=null;let C=null,V=null,u=null,a=null,g=null,x=0;function H(e,t){const s=u,l=h,n=e.length===0,i=t===void 0?l:t,r=n?B:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=n?e:()=>e(()=>T(()=>b(r)));h=r,u=null;try{return m(o,!0)}finally{u=s,h=l}}function K(e,t){t=t?Object.assign({},q,t):q;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=n=>(typeof n=="function"&&(n=n(s.value)),I(s,n));return[W.bind(s),l]}function $(e,t,s){const l=J(e,t,!1,w);O(l)}function T(e){if(u===null)return e();const t=u;u=null;try{return e()}finally{u=t}}function W(){if(this.sources&&this.state)if(this.state===w)O(this);else{const e=a;a=null,m(()=>S(this),!1),a=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function I(e,t,s){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&m(()=>{for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n],r=C&&C.running;r&&C.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?a.push(i):g.push(i),i.observers&&D(i)),r||(i.state=w)}if(a.length>1e6)throw a=[],new Error},!1)),t}function O(e){if(!e.fn)return;b(e);const t=x;X(e,e.value,t)}function X(e,t,s){let l;const n=h,i=u;u=h=e;try{l=e.fn(t)}catch(r){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(b),e.owned=null),e.updatedAt=s+1,j(r)}finally{u=i,h=n}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?I(e,l):e.value=l,e.updatedAt=s)}function J(e,t,s,l=w,n){const i={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:s};return h===null||h!==B&&(h.owned?h.owned.push(i):h.owned=[i]),i}function Q(e){if(e.state===0)return;if(e.state===v)return S(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<x);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===w)O(e);else if(e.state===v){const l=a;a=null,m(()=>S(e,t[0]),!1),a=l}}function m(e,t){if(a)return e();let s=!1;t||(a=[]),g?s=!0:g=[],x++;try{const l=e();return Y(s),l}catch(l){s||(g=null),a=null,j(l)}}function Y(e){if(a&&(U(a),a=null),e)return;const t=g;g=null,t.length&&m(()=>R(t),!1)}function U(e){for(let t=0;t<e.length;t++)Q(e[t])}function S(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];if(l.sources){const n=l.state;n===w?l!==t&&(!l.updatedAt||l.updatedAt<x)&&Q(l):n===v&&S(l,t)}}}function D(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=v,s.pure?a.push(s):g.push(s),s.observers&&D(s))}}function b(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),l=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const i=n.pop(),r=s.observerSlots.pop();l<n.length&&(i.sourceSlots[r]=l,n[l]=i,s.observerSlots[l]=r)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)b(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)b(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Z(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function j(e,t=h){throw Z(e)}function k(e,t){return T(()=>e(t||{}))}function z(e,t,s){let l=s.length,n=t.length,i=l,r=0,o=0,f=t[n-1].nextSibling,c=null;for(;r<n||o<i;){if(t[r]===s[o]){r++,o++;continue}for(;t[n-1]===s[i-1];)n--,i--;if(n===r){const d=i<l?o?s[o-1].nextSibling:s[i-o]:f;for(;o<i;)e.insertBefore(s[o++],d)}else if(i===o)for(;r<n;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[i-1]&&s[o]===t[n-1]){const d=t[--n].nextSibling;e.insertBefore(s[o++],t[r++].nextSibling),e.insertBefore(s[--i],d),t[n]=s[i]}else{if(!c){c=new Map;let p=o;for(;p<i;)c.set(s[p],p++)}const d=c.get(t[r]);if(d!=null)if(o<d&&d<i){let p=r,E=1,_;for(;++p<n&&p<i&&!((_=c.get(t[p]))==null||_!==d+E);)E++;if(E>d-o){const G=t[r];for(;o<d;)e.insertBefore(s[o++],G)}else e.replaceChild(s[o++],t[r++])}else r++;else t[r++].remove()}}}const L="_$DX_DELEGATE";function ee(e,t,s,l={}){let n;return H(i=>{n=i,t===document?e():F(t,e(),t.firstChild?null:void 0,s)},l.owner),()=>{n(),t.textContent=""}}function te(e,t,s){let l;const n=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},i=()=>(l||(l=n())).cloneNode(!0);return i.cloneNode=i,i}function se(e,t=window.document){const s=t[L]||(t[L]=new Set);for(let l=0,n=e.length;l<n;l++){const i=e[l];s.has(i)||(s.add(i),t.addEventListener(i,ne))}}function F(e,t,s,l){if(s!==void 0&&!l&&(l=[]),typeof t!="function")return A(e,t,l,s);$(n=>A(e,t(),n,s),l)}function ne(e){let t=e.target;const s=`$$${e.type}`,l=e.target,n=e.currentTarget,i=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),r=()=>{const f=t[s];if(f&&!t.disabled){const c=t[`${s}Data`];if(c!==void 0?f.call(t,c,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},o=()=>{for(;r()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const f=e.composedPath();i(f[0]);for(let c=0;c<f.length-2&&(t=f[c],!!r());c++){if(t._$host){t=t._$host,o();break}if(t.parentNode===n)break}}else o();i(l)}function A(e,t,s,l,n){for(;typeof s=="function";)s=s();if(t===s)return s;const i=typeof t,r=l!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===s))return s;if(r){let o=s[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),s=y(e,s,l,o)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||i==="boolean")s=y(e,s,l);else{if(i==="function")return $(()=>{let o=t();for(;typeof o=="function";)o=o();s=A(e,o,s,l)}),()=>s;if(Array.isArray(t)){const o=[],f=s&&Array.isArray(s);if(N(o,t,s,n))return $(()=>s=A(e,o,s,l,!0)),()=>s;if(o.length===0){if(s=y(e,s,l),r)return s}else f?s.length===0?P(e,o,l):z(e,s,o):(s&&y(e),P(e,o));s=o}else if(t.nodeType){if(Array.isArray(s)){if(r)return s=y(e,s,l,t);y(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function N(e,t,s,l){let n=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],f=s&&s[e.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))n=N(e,o,f)||n;else if(c==="function")if(l){for(;typeof o=="function";)o=o();n=N(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||n}else e.push(o),n=!0;else{const d=String(o);f&&f.nodeType===3&&f.data===d?e.push(f):e.push(document.createTextNode(d))}}return n}function P(e,t,s=null){for(let l=0,n=t.length;l<n;l++)e.insertBefore(t[l],s)}function y(e,t,s,l){if(s===void 0)return e.textContent="";const n=l||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const f=o.parentNode===e;!i&&!r?f?e.replaceChild(n,o):e.insertBefore(n,s):f&&o.remove()}else i=!0}}else e.insertBefore(n,s);return[n]}var ie=te("<div class=set-center><div class=welcome-text><div class=small-welcome>嘿，这里是</div><div class=big-welcome>张某赐呦!</div></div><div class=links><a href=#>关注我</a><div class=split-line></div><div class=qq-number>QQ</div><div class=split-line></div><a href=#>提建议</a></div><div class=qq-number-show-box>");function le(){const[e,t]=K();function s(){let l="3791794423",n=0,i=setInterval(()=>{console.log("开始打字"),t(l.slice(0,n)),n++,n>=l.length+1&&clearInterval(i)},30)}return(()=>{var l=ie(),n=l.firstChild,i=n.nextSibling,r=i.firstChild,o=r.nextSibling,f=o.nextSibling,c=i.nextSibling;return f.$$click=()=>{s()},F(c,e),l})()}se(["click"]);const oe=document.getElementById("root");ee(()=>k(le,{}),oe);