(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function yM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xd={exports:{}},fl={};var M0;function EM(){if(M0)return fl;M0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return fl.Fragment=e,fl.jsx=i,fl.jsxs=i,fl}var T0;function MM(){return T0||(T0=1,xd.exports=EM()),xd.exports}var O=MM(),Sd={exports:{}},ce={};var b0;function TM(){if(b0)return ce;b0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(B){return B===null||typeof B!="object"?null:(B=E&&B[E]||B["@@iterator"],typeof B=="function"?B:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function N(B,ht,$){this.props=B,this.context=ht,this.refs=S,this.updater=$||A}N.prototype.isReactComponent={},N.prototype.setState=function(B,ht){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ht,"setState")},N.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function L(){}L.prototype=N.prototype;function D(B,ht,$){this.props=B,this.context=ht,this.refs=S,this.updater=$||A}var F=D.prototype=new L;F.constructor=D,y(F,N.prototype),F.isPureReactComponent=!0;var H=Array.isArray;function z(){}var k={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(B,ht,$){var at=$.ref;return{$$typeof:r,type:B,key:ht,ref:at!==void 0?at:null,props:$}}function X(B,ht){return C(B.type,ht,B.props)}function nt(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function ft(B){var ht={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function($){return ht[$]})}var vt=/\/+/g;function ut(B,ht){return typeof B=="object"&&B!==null&&B.key!=null?ft(""+B.key):ht.toString(36)}function q(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(z,z):(B.status="pending",B.then(function(ht){B.status==="pending"&&(B.status="fulfilled",B.value=ht)},function(ht){B.status==="pending"&&(B.status="rejected",B.reason=ht)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function rt(B,ht,$,at,Mt){var Lt=typeof B;(Lt==="undefined"||Lt==="boolean")&&(B=null);var Ct=!1;if(B===null)Ct=!0;else switch(Lt){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(B.$$typeof){case r:case e:Ct=!0;break;case v:return Ct=B._init,rt(Ct(B._payload),ht,$,at,Mt)}}if(Ct)return Mt=Mt(B),Ct=at===""?"."+ut(B,0):at,H(Mt)?($="",Ct!=null&&($=Ct.replace(vt,"$&/")+"/"),rt(Mt,ht,$,"",function(I){return I})):Mt!=null&&(nt(Mt)&&(Mt=X(Mt,$+(Mt.key==null||B&&B.key===Mt.key?"":(""+Mt.key).replace(vt,"$&/")+"/")+Ct)),ht.push(Mt)),1;Ct=0;var Tt=at===""?".":at+":";if(H(B))for(var Yt=0;Yt<B.length;Yt++)at=B[Yt],Lt=Tt+ut(at,Yt),Ct+=rt(at,ht,$,Lt,Mt);else if(Yt=T(B),typeof Yt=="function")for(B=Yt.call(B),Yt=0;!(at=B.next()).done;)at=at.value,Lt=Tt+ut(at,Yt++),Ct+=rt(at,ht,$,Lt,Mt);else if(Lt==="object"){if(typeof B.then=="function")return rt(q(B),ht,$,at,Mt);throw ht=String(B),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function Z(B,ht,$){if(B==null)return B;var at=[],Mt=0;return rt(B,at,"","",function(Lt){return ht.call($,Lt,Mt++)}),at}function xt(B){if(B._status===-1){var ht=B._result,$=ht();$.then(function(at){(B._status===0||B._status===-1)&&(B._status=1,B._result=at,$.status===void 0&&($.status="fulfilled",$.value=at))},function(at){(B._status===0||B._status===-1)&&(B._status=2,B._result=at,$.status===void 0&&($.status="rejected",$.reason=at))}),B._status===-1&&(B._status=0,B._result=$)}if(B._status===1)return B._result.default;throw B._result}var yt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Vt(B){var ht=k.T,$={};$.types=ht!==null?ht.types:null,k.T=$;try{var at=B(),Mt=k.S;Mt!==null&&Mt($,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(z,yt)}catch(Lt){yt(Lt)}finally{ht!==null&&$.types!==null&&(ht.types=$.types),k.T=ht}}function se(B){var ht=k.T;if(ht!==null){var $=ht.types;$===null?ht.types=[B]:$.indexOf(B)===-1&&$.push(B)}else Vt(se.bind(null,B))}var ne={map:Z,forEach:function(B,ht,$){Z(B,function(){ht.apply(this,arguments)},$)},count:function(B){var ht=0;return Z(B,function(){ht++}),ht},toArray:function(B){return Z(B,function(ht){return ht})||[]},only:function(B){if(!nt(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ce.Activity=m,ce.Children=ne,ce.Component=N,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=D,ce.StrictMode=s,ce.Suspense=p,ce.ViewTransition=x,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ce.__COMPILER_RUNTIME={__proto__:null,c:function(B){return k.H.useMemoCache(B)}},ce.addTransitionType=se,ce.cache=function(B){return function(){return B.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(B,ht,$){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var at=y({},B.props),Mt=B.key;if(ht!=null)for(Lt in ht.key!==void 0&&(Mt=""+ht.key),ht)!w.call(ht,Lt)||Lt==="key"||Lt==="__self"||Lt==="__source"||Lt==="ref"&&ht.ref===void 0||(at[Lt]=ht[Lt]);var Lt=arguments.length-2;if(Lt===1)at.children=$;else if(1<Lt){for(var Ct=Array(Lt),Tt=0;Tt<Lt;Tt++)Ct[Tt]=arguments[Tt+2];at.children=Ct}return C(B.type,Mt,at)},ce.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ce.createElement=function(B,ht,$){var at,Mt={},Lt=null;if(ht!=null)for(at in ht.key!==void 0&&(Lt=""+ht.key),ht)w.call(ht,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(Mt[at]=ht[at]);var Ct=arguments.length-2;if(Ct===1)Mt.children=$;else if(1<Ct){for(var Tt=Array(Ct),Yt=0;Yt<Ct;Yt++)Tt[Yt]=arguments[Yt+2];Mt.children=Tt}if(B&&B.defaultProps)for(at in Ct=B.defaultProps,Ct)Mt[at]===void 0&&(Mt[at]=Ct[at]);return C(B,Lt,Mt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(B){return{$$typeof:d,render:B}},ce.isValidElement=nt,ce.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:xt}},ce.memo=function(B,ht){return{$$typeof:g,type:B,compare:ht===void 0?null:ht}},ce.startTransition=Vt,ce.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ce.use=function(B){return k.H.use(B)},ce.useActionState=function(B,ht,$){return k.H.useActionState(B,ht,$)},ce.useCallback=function(B,ht){return k.H.useCallback(B,ht)},ce.useContext=function(B){return k.H.useContext(B)},ce.useDebugValue=function(){},ce.useDeferredValue=function(B,ht){return k.H.useDeferredValue(B,ht)},ce.useEffect=function(B,ht){return k.H.useEffect(B,ht)},ce.useEffectEvent=function(B){return k.H.useEffectEvent(B)},ce.useId=function(){return k.H.useId()},ce.useImperativeHandle=function(B,ht,$){return k.H.useImperativeHandle(B,ht,$)},ce.useInsertionEffect=function(B,ht){return k.H.useInsertionEffect(B,ht)},ce.useLayoutEffect=function(B,ht){return k.H.useLayoutEffect(B,ht)},ce.useMemo=function(B,ht){return k.H.useMemo(B,ht)},ce.useOptimistic=function(B,ht){return k.H.useOptimistic(B,ht)},ce.useReducer=function(B,ht,$){return k.H.useReducer(B,ht,$)},ce.useRef=function(B){return k.H.useRef(B)},ce.useState=function(B){return k.H.useState(B)},ce.useSyncExternalStore=function(B,ht,$){return k.H.useSyncExternalStore(B,ht,$)},ce.useTransition=function(){return k.H.useTransition()},ce.version="19.3.1",ce}var A0;function Zp(){return A0||(A0=1,Sd.exports=TM()),Sd.exports}var ct=Zp();const bM=yM(ct);var yd={exports:{}},hl={},Ed={exports:{}},Md={};var R0;function AM(){return R0||(R0=1,(function(r){function e(q,rt){var Z=q.length;q.push(rt);t:for(;0<Z;){var xt=Z-1>>>1,yt=q[xt];if(0<l(yt,rt))q[xt]=rt,q[Z]=yt,Z=xt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var rt=q[0],Z=q.pop();if(Z!==rt){q[0]=Z;t:for(var xt=0,yt=q.length,Vt=yt>>>1;xt<Vt;){var se=2*(xt+1)-1,ne=q[se],B=se+1,ht=q[B];if(0>l(ne,Z))B<yt&&0>l(ht,ne)?(q[xt]=ht,q[B]=Z,xt=B):(q[xt]=ne,q[se]=Z,xt=se);else if(B<yt&&0>l(ht,Z))q[xt]=ht,q[B]=Z,xt=B;else break t}}return rt}function l(q,rt){var Z=q.sortIndex-rt.sortIndex;return Z!==0?Z:q.id-rt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],g=[],v=1,m=null,x=3,E=!1,T=!1,A=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(q){for(var rt=i(g);rt!==null;){if(rt.callback===null)s(g);else if(rt.startTime<=q)s(g),rt.sortIndex=rt.expirationTime,e(p,rt);else break;rt=i(g)}}function F(q){if(A=!1,D(q),!T)if(i(p)!==null)T=!0,H||(H=!0,nt());else{var rt=i(g);rt!==null&&ut(F,rt.startTime-q)}}var H=!1,z=-1,k=5,w=-1;function C(){return y?!0:!(r.unstable_now()-w<k)}function X(){if(y=!1,H){var q=r.unstable_now();w=q;var rt=!0;try{t:{T=!1,A&&(A=!1,N(z),z=-1),E=!0;var Z=x;try{e:{for(D(q),m=i(p);m!==null&&!(m.expirationTime>q&&C());){var xt=m.callback;if(typeof xt=="function"){m.callback=null,x=m.priorityLevel;var yt=xt(m.expirationTime<=q);if(q=r.unstable_now(),typeof yt=="function"){m.callback=yt,D(q),rt=!0;break e}m===i(p)&&s(p),D(q)}else s(p);m=i(p)}if(m!==null)rt=!0;else{var Vt=i(g);Vt!==null&&ut(F,Vt.startTime-q),rt=!1}}break t}finally{m=null,x=Z,E=!1}rt=void 0}}finally{rt?nt():H=!1}}}var nt;if(typeof L=="function")nt=function(){L(X)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,vt=ft.port2;ft.port1.onmessage=X,nt=function(){vt.postMessage(null)}}else nt=function(){S(X,0)};function ut(q,rt){z=S(function(){q(r.unstable_now())},rt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(q){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var Z=x;x=rt;try{return q()}finally{x=Z}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(q,rt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=x;x=q;try{return rt()}finally{x=Z}},r.unstable_scheduleCallback=function(q,rt,Z){var xt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,q){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Z+yt,q={id:v++,callback:rt,priorityLevel:q,startTime:Z,expirationTime:yt,sortIndex:-1},Z>xt?(q.sortIndex=Z,e(g,q),i(p)===null&&q===i(g)&&(A?(N(z),z=-1):A=!0,ut(F,Z-xt))):(q.sortIndex=yt,e(p,q),T||E||(T=!0,H||(H=!0,nt()))),q},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(q){var rt=x;return function(){var Z=x;x=rt;try{return q.apply(this,arguments)}finally{x=Z}}}})(Md)),Md}var C0;function RM(){return C0||(C0=1,Ed.exports=AM()),Ed.exports}var Td={exports:{}},wn={};var w0;function CM(){if(w0)return wn;w0=1;var r=Zp();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===h?h:""+E,children:v,containerInfo:m,implementation:x}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.browser=function(v){return{$$typeof:c,_reason:v}},wn.createPortal=function(v,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,x)},wn.flushSync=function(v){var m=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=x,s.d.f()}},wn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},wn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},wn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var x=m.as,E=g(x,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:A}):x==="script"&&s.d.X(v,{crossOrigin:E,integrity:T,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=g(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},wn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,E=g(x,m.crossOrigin);s.d.L(v,x,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(v,m){if(typeof v=="string")if(m){var x=g(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},wn.requestFormReset=function(v){s.d.r(v)},wn.unstable_batchedUpdates=function(v,m){return v(m)},wn.useFormState=function(v,m,x){return p.H.useFormState(v,m,x)},wn.useFormStatus=function(){return p.H.useHostTransitionStatus()},wn.version="19.3.1",wn}var D0;function wM(){if(D0)return Td.exports;D0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=CM(),Td.exports}var U0;function DM(){if(U0)return hl;U0=1;var r=RM(),e=Zp(),i=wM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,M=u.child;M;){if(M===a){_=!0,a=u,o=f;break}if(M===o){_=!0,o=u,a=f;break}M=M.sibling}if(!_){for(M=f.child;M;){if(M===a){_=!0,a=f,o=u;break}if(M===o){_=!0,o=f,a=u;break}M=M.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,o,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,o,u,f))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=x(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,o))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,N=null;function L(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function D(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(S=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function H(t,n,a){for(var o=0,u=t;u;u=a(u))o++;u=0;for(var f=n;f;f=a(f))u++;for(;0<o-u;)t=a(t),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,k=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Vt=Symbol.for("react.activity"),se=Symbol.for("react.legacy_hidden"),ne=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),$=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case ft:return"Profiler";case nt:return"StrictMode";case rt:return"Suspense";case Z:return"SuspenseList";case Vt:return"Activity";case B:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ut:return t.displayName||"Context";case vt:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Lt(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Lt(t(n))}catch{}}return null}var Ct=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Fe=[],le=-1;function Jt(t){return{current:t}}function Ot(t){0>le||(t.current=Fe[le],Fe[le]=null,le--)}function re(t,n){le++,Fe[le]=t.current,t.current=n}var Ht=Jt(null),ue=Jt(null),je=Jt(null),Ye=Jt(null);function U(t,n){switch(re(je,n),re(ue,t),re(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?N_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=N_(n),t=L_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ot(Ht),re(Ht,t)}function b(){Ot(Ht),Ot(ue),Ot(je)}function et(t){var n=t.memoizedState;n!==null&&(Hs._currentValue=n.memoizedState,re(Ye,t)),n=Ht.current;var a=L_(n,t.type);n!==a&&(re(ue,t),re(Ht,a))}function mt(t){ue.current===t&&(Ot(Ht),Ot(ue)),Ye.current===t&&(Ot(Ye),Hs._currentValue=I)}var St,dt;function kt(t){if(St===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+dt}var wt=!1;function Zt(t,n){if(!t||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Nt){var j=Nt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Nt){j=Nt}gt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){j=Nt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Nt){if(Nt&&j&&typeof Nt.stack=="string")return[Nt.stack,j.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],M=f[1];if(_&&M){var P=_.split(`
`),W=M.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===W.length)for(o=P.length-1,u=W.length-1;1<=o&&0<=u&&P[o]!==W[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==W[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==W[u]){var it=`
`+P[o].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?kt(a):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Zt(t.type,!1);case 11:return Zt(t.type.render,!1);case 1:return Zt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function At(t){try{var n="",a=null;do n+=Qt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Pt=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,Kt=r.unstable_cancelCallback,zt=r.unstable_shouldYield,he=r.unstable_requestPaint,G=r.unstable_now,Rt=r.unstable_getCurrentPriorityLevel,Ut=r.unstable_ImmediatePriority,Xt=r.unstable_UserBlockingPriority,Et=r.unstable_NormalPriority,_t=r.unstable_LowPriority,Wt=r.unstable_IdlePriority,fe=r.log,He=r.unstable_setDisableYieldValue,Ee=null,$e=null;function pn(t){if(typeof fe=="function"&&He(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Ee,t)}catch{}}var Dn=Math.clz32?Math.clz32:Pl,ea=Math.log,yo=Math.LN2;function Pl(t){return t>>>=0,t===0?32:31-(ea(t)/yo|0)|0}var gr=256,na=262144,vr=4194304;function li(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _r(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var M=o&134217727;return M!==0?(o=M&~f,o!==0?u=li(o):(_&=M,_!==0?u=li(_):a||(a=M&~t,a!==0&&(u=li(a))))):(M=o&~f,M!==0?u=li(M):_!==0?u=li(_):a||(a=o&~t,a!==0&&(u=li(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function wa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function zl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var o=31-Dn(a),u=1<<o;n|=t[o],a&=~u}return n}function qc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Il(){var t=vr;return vr<<=1,(vr&62914560)===0&&(vr=4194304),t}function Eo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function xr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yc(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var M=t.entanglements,P=t.expirationTimes,W=t.hiddenUpdates;for(a=_&~a;0<a;){var it=31-Dn(a),gt=1<<it;M[it]=0,P[it]=-1;var j=W[it];if(j!==null)for(W[it]=null,it=0;it<j.length;it++){var tt=j[it];tt!==null&&(tt.lane&=-536870913)}a&=~gt}o!==0&&R(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Dn(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function K(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Dn(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function st(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Yt.p;return t!==0?t:(t=window.event,t===void 0?32:g0(t.type))}function It(t,n){var a=Yt.p;try{return Yt.p=t,n()}finally{Yt.p=a}}var Ft=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ft,jt="__reactProps$"+Ft,ie="__reactContainer$"+Ft,te="__reactEvents$"+Ft,xe="__reactListeners$"+Ft,Oe="__reactHandles$"+Ft,Qe="__reactResources$"+Ft,Ue="__reactMarker$"+Ft,Re="__reactLoad$"+Ft;function ee(t){delete t[Dt],delete t[jt],delete t[xe],delete t[Oe]}function Ne(t){var n;if(n=t[Dt])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=K_(t);t!==null;){if(a=t[Dt])return a;t=K_(t)}return n}t=a,a=t.parentNode}return null}function ve(t){if(t=t[Dt]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Kn(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ce(t){t[Ue]=!0}function Da(t){t[Re]=void 0}var We=new Set,Pn={};function ln(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(Pn[t]=n,t=0;t<n.length;t++)We.add(n[t])}var Un=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),is={},zi={};function HS(t){return Pt.call(zi,t)?!0:Pt.call(is,t)?!1:Un.test(t)?zi[t]=!0:(is[t]=!0,!1)}var we=!1;function _m(){var t=we;return we=!1,t}function Bl(t,n,a){if(HS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Fl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,o)}}function Qn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function VS(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wc(t){if(!t._valueTracker){var n=xm(t)?"checked":"value";t._valueTracker=VS(t,n,""+t[n])}}function Sm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=xm(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}var GS=/[\n"\\]/g;function ui(t){return t.replace(GS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zc(t,n,a,o,u,f,_,M){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qn(n)):t.value!==""+Qn(n)&&(t.value=""+Qn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Kc(t,Qn(t.value)):Kc(t,Qn(n)):a!=null?Kc(t,Qn(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.name=""+Qn(M):t.removeAttribute("name")}function ym(t,n,a,o,u,f,_,M){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wc(t);return}a=a!=null?""+Qn(a):"",n=n!=null?""+Qn(n):a,M||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=M?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Wc(t)}function Kc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function as(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Qn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Em(t,n,a){if(n!=null&&(n=""+Qn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Qn(a):""}function Mm(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Qn(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wc(t)}function rs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var XS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tm(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||XS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",we=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(Tm(t,u,o),we=!0)}else for(var f in n)n.hasOwnProperty(f)&&Tm(t,f,n[f])}function Qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hl(t){return jS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ss=null,os=null;function Am(t){var n=ve(t);if(n&&(t=n.stateNode)){var a=t[jt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Zc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ui(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[jt]||null;if(!u)throw Error(s(90));Zc(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Sm(o)}break t;case"textarea":Em(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&as(t,!!a.multiple,n,!1)}}}var tf=!1;function Rm(t,n,a){if(tf)return t(n,a);tf=!0;try{var o=t(n);return o}finally{if(tf=!1,(ss!==null||os!==null)&&(Hu(),ss&&(n=ss,t=os,os=ss=null,Am(n),t)))for(n=0;n<t.length;n++)Am(t[n])}}function Mo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[jt]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(aa)try{var To={};Object.defineProperty(To,"passive",{get:function(){ef=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{ef=!1}var Ua=null,nf=null,Vl=null;function Cm(){if(Vl)return Vl;var t,n=nf,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return Vl=u.slice(t,1<o?1-o:void 0)}function Gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function wm(){return!1}function zn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var M in t)t.hasOwnProperty(M)&&(a=t[M],this[M]=a?a(f):f[M]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xl:wm,this.isPropagationStopped=wm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=zn(Na),bo=z({},Na,{view:0,detail:0}),qS=zn(bo),af,rf,Ao,jl=z({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(af=t.screenX-Ao.screenX,rf=t.screenY-Ao.screenY):rf=af=0,Ao=t),af)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),Dm=zn(jl),YS=z({},jl,{dataTransfer:0}),WS=zn(YS),ZS=z({},bo,{relatedTarget:0}),sf=zn(ZS),KS=z({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=zn(KS),JS=z({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=zn(JS),ty=z({},Na,{data:0}),Um=zn(ty),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=iy[t])?!!n[t]:!1}function of(){return ay}var ry=z({},bo,{key:function(t){if(t.key){var n=ey[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sy=zn(ry),oy=z({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=zn(oy),ly=z({},Na,{submitter:0}),uy=zn(ly),cy=z({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),fy=zn(cy),hy=z({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=zn(hy),py=z({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=zn(py),gy=z({},Na,{newState:0,oldState:0,source:0}),vy=zn(gy),_y=[9,13,27,32],lf=aa&&"CompositionEvent"in window,Ro=null;aa&&"documentMode"in document&&(Ro=document.documentMode);var xy=aa&&"TextEvent"in window&&!Ro,Lm=aa&&(!lf||Ro&&8<Ro&&11>=Ro),Om=" ",Pm=!1;function zm(t,n){switch(t){case"keyup":return _y.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function Sy(t,n){switch(t){case"compositionend":return Im(n);case"keypress":return n.which!==32?null:(Pm=!0,Om);case"textInput":return t=n.data,t===Om&&Pm?null:t;default:return null}}function yy(t,n){if(ls)return t==="compositionend"||!lf&&zm(t,n)?(t=Cm(),Vl=nf=Ua=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lm&&n.locale!=="ko"?null:n.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ey[t.type]:n==="textarea"}function Fm(t,n,a,o){ss?os?os.push(o):os=[o]:ss=o,n=qu(n,"onChange"),0<n.length&&(a=new kl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Co=null,wo=null;function My(t){A_(t,0)}function ql(t){var n=mn(t);if(Sm(n))return t}function Hm(t,n){if(t==="change")return n}var Vm=!1;if(aa){var uf;if(aa){var cf="oninput"in document;if(!cf){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),cf=typeof Gm.oninput=="function"}uf=cf}else uf=!1;Vm=uf&&(!document.documentMode||9<document.documentMode)}function Xm(){Co&&(Co.detachEvent("onpropertychange",km),wo=Co=null)}function km(t){if(t.propertyName==="value"&&ql(wo)){var n=[];Fm(n,wo,t,$c(t)),Rm(My,n)}}function Ty(t,n,a){t==="focusin"?(Xm(),Co=n,wo=a,Co.attachEvent("onpropertychange",km)):t==="focusout"&&Xm()}function by(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(wo)}function Ay(t,n){if(t==="click")return ql(n)}function Ry(t,n){if(t==="input"||t==="change")return ql(n)}function Cy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:Cy;function Do(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Pt.call(n,u)||!Jn(t[u],n[u]))return!1}return!0}function ff(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,n){var a=jm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jm(a)}}function Ym(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ym(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ff(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ff(t.document)}return n}function hf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wy=aa&&"documentMode"in document&&11>=document.documentMode,us=null,df=null,Uo=null,pf=!1;function Zm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||us==null||us!==ff(o)||(o=us,"selectionStart"in o&&hf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Uo&&Do(Uo,o)||(Uo=o,o=qu(df,"onSelect"),0<o.length&&(n=new kl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=us)))}function Sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var cs={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},mf={},Km={};aa&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function yr(t){if(mf[t])return mf[t];if(!cs[t])return t;var n=cs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Km)return mf[t]=n[a];return t}var Qm=yr("animationend"),Jm=yr("animationiteration"),$m=yr("animationstart"),Dy=yr("transitionrun"),Uy=yr("transitionstart"),Ny=yr("transitioncancel"),tg=yr("transitionend"),eg=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function yi(t,n){eg.set(t,n),ln(n,[t])}var Ly=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=bi.identifierPrefix;var a=Ly++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function ng(t){if(t==null||typeof t=="string")return t;var n=null,a=Ds;if(a!==null)for(var o=0;o<a.length;o++){var u=t[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function sa(t,n){return t=ng(t),n=ng(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],fs=0,vf=0;function Wl(){for(var t=fs,n=vf=fs=0;n<t;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&ig(a,u,f)}}function Zl(t,n,a,o){ci[fs++]=t,ci[fs++]=n,ci[fs++]=a,ci[fs++]=o,vf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _f(t,n,a,o){return Zl(t,n,a,o),Kl(t)}function Er(t,n){return Zl(t,null,null,n),Kl(t)}function ig(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Dn(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Kl(t){if(50<$o)throw $o=0,Fu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hs={};function Oy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,o){return new Oy(t,n,a,o)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ag(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ql(t,n,a,o,u,f){var _=0;if(o=t,typeof o=="function")xf(o)&&(_=1);else if(typeof o=="string")_=lM(t,a,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(o){case Vt:return t=Xn(31,a,n,u),t.elementType=Vt,t.lanes=f,t;case X:return Mr(a.children,u,f,n);case nt:_=8,u|=24;break;case ft:return t=Xn(12,a,n,u|2),t.elementType=ft,t.lanes=f,t;case rt:return t=Xn(13,a,n,u),t.elementType=rt,t.lanes=f,t;case Z:return t=Xn(19,a,n,u),t.elementType=Z,t.lanes=f,t;case se:case B:return t=u|32,t=Xn(30,a,n,t),t.elementType=B,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case ut:_=10;break t;case vt:_=9;break t;case q:_=11;break t;case xt:_=14;break t;case yt:_=16,o=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Xn(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Mr(t,n,a,o){return t=Xn(7,t,o,n),t.lanes=a,t}function Sf(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function rg(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function yf(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var sg=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=sg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:At(n)},sg.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var ds=[],ps=0,Jl=null,No=0,hi=[],di=0,La=null,Bi=1,Fi="";function la(t,n){ds[ps++]=No,ds[ps++]=Jl,Jl=t,No=n}function og(t,n,a){hi[di++]=Bi,hi[di++]=Fi,hi[di++]=La,La=t;var o=Bi;t=Fi;var u=32-Dn(o)-1;o&=~(1<<u),a+=1;var f=32-Dn(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Bi=1<<32-Dn(n)+u|a<<u|o,Fi=f+t}else Bi=1<<f|a<<u|o,Fi=t}function $l(t){t.return!==null&&(la(t,1),og(t,1,0))}function Ef(t){for(;t===Jl;)Jl=ds[--ps],ds[ps]=null,No=ds[--ps],ds[ps]=null;for(;t===La;)La=hi[--di],hi[di]=null,Fi=hi[--di],hi[di]=null,Bi=hi[--di],hi[di]=null}function lg(t,n){hi[di++]=Bi,hi[di++]=Fi,hi[di++]=La,Bi=n.id,Fi=n.overflow,La=t}var Sn=null,Ze=null,_e=!1,Oa=null,pi=!1,Mf=Error(s(519));function Pa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(fi(n,t)),Mf}function ug(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Dt]=t,n[jt]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<el.length;a++)ye(el[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),ym(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Mm(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||D_(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Pa(t,!0)}function tu(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Sn=Sn.return}}function ms(t){if(t!==Sn)return!1;if(!_e)return tu(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$h(t.type,t.memoizedProps)),a=!a),a&&Ze&&Pa(t),tu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=Z_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=Z_(t)}else n===27?(n=Ze,Qa(t.type)?(t=ld,ld=null,Ze=t):Ze=n):Ze=Sn?gi(t.stateNode.nextSibling):null;return!0}function Tr(){Ze=Sn=null,_e=!1}function Tf(){var t=Oa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Oa=null),t}function Lo(t){Oa===null?Oa=[t]:Oa.push(t)}var bf=Jt(null),br=null,ua=null;function za(t,n,a){re(bf,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=bf.current,Ot(bf)}function eu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var M=f;f=u;for(var P=0;P<n.length;P++)if(M.context===n[P]){f.lanes|=a,M=f.alternate,M!==null&&(M.lanes|=a),eu(f.return,a,t),o||(_=null);break t}f=M.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),eu(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),eu(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ar(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var M=u.type;Jn(u.pendingProps.value,_.value)||(t!==null?t.push(M):t=[M])}}else if(u===Ye.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Hs):t=[Hs])}u=u.return}return t!==null&&Af(n,t,a,o),n.flags|=262144,t!==null}function nu(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){br=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return cg(br,t)}function iu(t,n){return br===null&&Rr(t),cg(t,n)}function cg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(s(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var Py=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},zy=r.unstable_scheduleCallback,Iy=r.unstable_NormalPriority,un={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new Py,data:new Map,refCount:0}}function Oo(t){t.refCount--,t.refCount===0&&zy(Iy,function(){t.controller.abort()})}function fg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var o=n[t];a.indexOf(o)===-1&&a.push(o)}}}var Po=null;function By(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var zo=null,Cf=0,Cr=0,gs=null;function Fy(t,n){if(zo===null){var a=zo=[];Cf=0,Cr=kh(),gs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cf++,n.then(hg,hg),n}function hg(){if(--Cf===0&&(Po=null,zo!==null)){gs!==null&&(gs.status="fulfilled");var t=zo;zo=null,Cr=0,gs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Hy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dg=Tt.S;Tt.S=function(t,n){if(r_=G(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fy(t,n),Po!==null)for(var a=Os;a!==null;)fg(a,Po),a=a.next;if(a=t.types,a!==null){for(var o=Os;o!==null;)fg(o,a),o=o.next;if(Cr!==0){o=Po,o===null&&(o=Po=[]);for(var u=0;u<a.length;u++){var f=a[u];o.indexOf(f)===-1&&o.push(f)}}}dg!==null&&dg(t,n)};var wr=Jt(null);function wf(){var t=wr.current;return t!==null?t:qe.pooledCache}function au(t,n){n===null?re(wr,wr.current):re(wr,n.pool)}function pg(){var t=wf();return t===null?null:{parent:un._currentValue,pool:t}}var vs=Error(s(460)),Df=Error(s(474)),ru=Error(s(542)),su={then:function(){}};function mg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_g(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_g(t),t}throw Ur=n,vs}}function Dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,vs):a}}var Ur=null;function vg(){if(Ur===null)throw Error(s(459));var t=Ur;return Ur=null,t}function _g(t){if(t===vs||t===ru)throw Error(s(483))}var _s=null,Io=0;function ou(t){var n=Io;return Io+=1,_s===null&&(_s=[]),gg(_s,t,n)}function Ia(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function lu(t,n){throw n.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xg(t){function n(Y,V){if(t){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key===null?V.set(Y.index,Y):V.set(Y.key,Y),Y=Y.sibling;return V}function u(Y,V){return Y=oa(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=2,V):J):(Y.flags|=134217730,V)):(Y.flags|=1048576,V)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function M(Y,V,J,pt){return V===null||V.tag!==6?(V=Sf(J,Y.mode,pt),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function P(Y,V,J,pt){var Gt=J.type;return Gt===X?(Y=it(Y,V,J.props.children,pt,J.key),Ia(Y,J),Y):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===yt&&Dr(Gt)===V.type)?(V=u(V,J.props),Ia(V,J),V.return=Y,V):(V=Ql(J.type,J.key,J.props,null,Y.mode,pt),Ia(V,J),V.return=Y,V)}function W(Y,V,J,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=yf(J,Y.mode,pt),V.return=Y,V):(V=u(V,J.children||[]),V.return=Y,V)}function it(Y,V,J,pt,Gt){return V===null||V.tag!==7?(V=Mr(J,Y.mode,pt,Gt),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function gt(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Sf(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return J=Ql(V.type,V.key,V.props,null,Y.mode,J),Ia(J,V),J.return=Y,J;case C:return V=yf(V,Y.mode,J),V.return=Y,V;case yt:return V=Dr(V),gt(Y,V,J)}if(Ct(V)||at(V))return V=Mr(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,ou(V),J);if(V.$$typeof===ut)return gt(Y,iu(Y,V),J);lu(Y,V)}return null}function j(Y,V,J,pt){var Gt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:M(Y,V,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return J.key===Gt?P(Y,V,J,pt):null;case C:return J.key===Gt?W(Y,V,J,pt):null;case yt:return J=Dr(J),j(Y,V,J,pt)}if(Ct(J)||at(J))return Gt!==null?null:it(Y,V,J,pt,null);if(typeof J.then=="function")return j(Y,V,ou(J),pt);if(J.$$typeof===ut)return j(Y,V,iu(Y,J),pt);lu(Y,J)}return null}function tt(Y,V,J,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,M(V,Y,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case w:return Y=Y.get(pt.key===null?J:pt.key)||null,P(V,Y,pt,Gt);case C:return Y=Y.get(pt.key===null?J:pt.key)||null,W(V,Y,pt,Gt);case yt:return pt=Dr(pt),tt(Y,V,J,pt,Gt)}if(Ct(pt)||at(pt))return Y=Y.get(J)||null,it(V,Y,pt,Gt,null);if(typeof pt.then=="function")return tt(Y,V,J,ou(pt),Gt);if(pt.$$typeof===ut)return tt(Y,V,J,iu(V,pt),Gt);lu(V,pt)}return null}function Nt(Y,V,J,pt){for(var Gt=null,Te=null,$t=V,oe=V=0,hn=null;$t!==null&&oe<J.length;oe++){$t.index>oe?(hn=$t,$t=null):hn=$t.sibling;var Ae=j(Y,$t,J[oe],pt);if(Ae===null){$t===null&&($t=hn);break}t&&$t&&Ae.alternate===null&&n(Y,$t),V=f(Ae,V,oe),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae,$t=hn}if(oe===J.length)return a(Y,$t),_e&&la(Y,oe),Gt;if($t===null){for(;oe<J.length;oe++)$t=gt(Y,J[oe],pt),$t!==null&&(V=f($t,V,oe),Te===null?Gt=$t:Te.sibling=$t,Te=$t);return _e&&la(Y,oe),Gt}for($t=o($t);oe<J.length;oe++)hn=tt($t,Y,oe,J[oe],pt),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&$t.delete(Ae.key===null?oe:Ae.key)),V=f(hn,V,oe),Te===null?Gt=hn:Te.sibling=hn,Te=hn);return t&&$t.forEach(function(nr){return n(Y,nr)}),_e&&la(Y,oe),Gt}function qt(Y,V,J,pt){if(J==null)throw Error(s(151));for(var Gt=null,Te=null,$t=V,oe=V=0,hn=null,Ae=J.next();$t!==null&&!Ae.done;oe++,Ae=J.next()){$t.index>oe?(hn=$t,$t=null):hn=$t.sibling;var nr=j(Y,$t,Ae.value,pt);if(nr===null){$t===null&&($t=hn);break}t&&$t&&nr.alternate===null&&n(Y,$t),V=f(nr,V,oe),Te===null?Gt=nr:Te.sibling=nr,Te=nr,$t=hn}if(Ae.done)return a(Y,$t),_e&&la(Y,oe),Gt;if($t===null){for(;!Ae.done;oe++,Ae=J.next())Ae=gt(Y,Ae.value,pt),Ae!==null&&(V=f(Ae,V,oe),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae);return _e&&la(Y,oe),Gt}for($t=o($t);!Ae.done;oe++,Ae=J.next())Ae=tt($t,Y,oe,Ae.value,pt),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&$t.delete(hn.key===null?oe:hn.key)),V=f(Ae,V,oe),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae);return t&&$t.forEach(function(SM){return n(Y,SM)}),_e&&la(Y,oe),Gt}function pe(Y,V,J,pt){if(typeof J=="object"&&J!==null&&J.type===X&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case w:t:{for(var Gt=J.key;V!==null;){if(V.key===Gt){if(Gt=J.type,Gt===X){if(V.tag===7){a(Y,V.sibling),pt=u(V,J.props.children),Ia(pt,J),pt.return=Y,Y=pt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===yt&&Dr(Gt)===V.type){a(Y,V.sibling),pt=u(V,J.props),Ia(pt,J),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}J.type===X?(pt=Mr(J.props.children,Y.mode,pt,J.key),Ia(pt,J),pt.return=Y,Y=pt):(pt=Ql(J.type,J.key,J.props,null,Y.mode,pt),Ia(pt,J),pt.return=Y,Y=pt)}return _(Y);case C:t:{for(Gt=J.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Y,V.sibling),pt=u(V,J.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=yf(J,Y.mode,pt),pt.return=Y,Y=pt}return _(Y);case yt:return J=Dr(J),pe(Y,V,J,pt)}if(Ct(J))return Nt(Y,V,J,pt);if(at(J)){if(Gt=at(J),typeof Gt!="function")throw Error(s(150));return J=Gt.call(J),qt(Y,V,J,pt)}if(typeof J.then=="function")return pe(Y,V,ou(J),pt);if(J.$$typeof===ut)return pe(Y,V,iu(Y,J),pt);lu(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Y,V.sibling),pt=u(V,J),pt.return=Y,Y=pt):(a(Y,V),pt=Sf(J,Y.mode,pt),pt.return=Y,Y=pt),_(Y)):a(Y,V)}return function(Y,V,J,pt){try{Io=0;var Gt=pe(Y,V,J,pt);return _s=null,Gt}catch($t){if($t===vs||$t===ru)throw $t;var Te=Xn(29,$t,null,Y.mode);return Te.lanes=pt,Te.return=Y,Te}}}var Nr=xg(!0),Sg=xg(!1),Ba=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Kl(t),ig(t,null,a),n}return Zl(t,o,n,a),Kl(t)}function Bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,K(t,a)}}function Lf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function Fo(){if(Of){var t=gs;if(t!==null)throw t}}function Ho(t,n,a,o){Of=!1;var u=t.updateQueue;Ba=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,M=u.shared.pending;if(M!==null){u.shared.pending=null;var P=M,W=P.next;P.next=null,_===null?f=W:_.next=W,_=P;var it=t.alternate;it!==null&&(it=it.updateQueue,M=it.lastBaseUpdate,M!==_&&(M===null?it.firstBaseUpdate=W:M.next=W,it.lastBaseUpdate=P))}if(f!==null){var gt=u.baseState;_=0,it=W=P=null,M=f;do{var j=M.lane&-536870913,tt=j!==M.lane;if(tt?(Me&j)===j:(o&j)===j){j!==0&&j===Cr&&(Of=!0),it!==null&&(it=it.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});t:{var Nt=t,qt=M;j=n;var pe=a;switch(qt.tag){case 1:if(Nt=qt.payload,typeof Nt=="function"){gt=Nt.call(pe,gt,j);break t}gt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=qt.payload,j=typeof Nt=="function"?Nt.call(pe,gt,j):Nt,j==null)break t;gt=z({},gt,j);break t;case 2:Ba=!0}}j=M.callback,j!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=u.callbacks,tt===null?u.callbacks=[j]:tt.push(j))}else tt={lane:j,tag:M.tag,payload:M.payload,callback:M.callback,next:null},it===null?(W=it=tt,P=gt):it=it.next=tt,_|=j;if(M=M.next,M===null){if(M=u.shared.pending,M===null)break;tt=M,M=tt.next,tt.next=null,u.lastBaseUpdate=tt,u.shared.pending=null}}while(!0);it===null&&(P=gt),u.baseState=P,u.firstBaseUpdate=W,u.lastBaseUpdate=it,f===null&&(u.shared.lanes=0),Ya|=_,t.lanes=_,t.memoizedState=gt}}function yg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Eg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yg(a[t],n)}var Va=Jt(null),uu=Jt(0);function Mg(t,n){t=ma,re(uu,t),re(Va,n),ma=t|n.baseLanes}function Pf(){re(uu,ma),re(Va,Va.current)}function zf(){ma=uu.current,Ot(Va),Ot(uu)}var bn=Jt(null),Nn=null;function Ga(t){var n=t.alternate;re(An,An.current&1),re(bn,t),Nn===null&&(n===null||Va.current!==null||n.memoizedState!==null)&&(Nn=t)}function If(t){re(An,An.current),re(bn,t),Nn===null&&(Nn=t)}function Tg(t){t.tag===22?(re(An,An.current),re(bn,t),Nn===null&&(Nn=t)):Xa()}function Xa(){re(An,An.current),re(bn,bn.current)}function $n(t){Ot(bn),Nn===t&&(Nn=null),Ot(An)}var An=Jt(0);function Vo(t,n){re(bn,bn.current),re(An,n)}function Bf(t){Ot(An),Ot(bn),Nn===t&&(Nn=null)}function cu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,de=null,Ve=null,cn=null,fu=!1,xs=!1,Lr=!1,hu=0,Go=0,Ss=null,Vy=0;function an(){throw Error(s(321))}function Ff(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Jn(t[a],n[a]))return!1;return!0}function Hf(t,n,a,o,u,f){return fa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?ov:lv,Lr=!1,f=a(o,u),Lr=!1,xs&&(f=Ag(n,a,o,u)),bg(t),f}function bg(t){Tt.H=xu;var n=Ve!==null&&Ve.next!==null;if(fa=0,cn=Ve=de=null,fu=!1,Go=0,Ss=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&nu(t)&&(fn=!0))}function Ag(t,n,a,o){de=t;var u=0;do{if(xs&&(Ss=null),Go=0,xs=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ve=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Tt.H=Zy,f=n(a,o)}while(xs);return f}function Gy(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(de.flags|=1024),n}function Vf(){var t=hu!==0;return hu=0,t}function Gf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xf(t){if(fu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fu=!1}fa=0,cn=Ve=de=null,xs=!1,Go=hu=0,Ss=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?de.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Ve===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=cn===null?de.memoizedState:cn.next;if(n!==null)cn=n,Ve=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?de.memoizedState=cn=t:cn=cn.next=t}return cn}function du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=Go;return Go+=1,Ss===null&&(Ss=[]),t=gg(Ss,t,n),n=de,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?ov:lv),t}function pu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===ht)return;if(t.$$typeof===ut)return Tn(t)}throw Error(s(438,String(t)))}function kf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=du(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=ne;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function mu(t){var n=sn();return jf(n,Ve,t)}function jf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var M=_=null,P=null,W=n,it=!1;do{var gt=W.lane&-536870913;if(gt!==W.lane?(Me&gt)===gt:(fa&gt)===gt){var j=W.revertLane;if(j===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),gt===Cr&&(it=!0);else if((fa&j)===j){W=W.next,j===Cr&&(it=!0);continue}else gt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},P===null?(M=P=gt,_=f):P=P.next=gt,de.lanes|=j,Ya|=j;gt=W.action,Lr&&a(f,gt),f=W.hasEagerState?W.eagerState:a(f,gt)}else j={lane:gt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},P===null?(M=P=j,_=f):P=P.next=j,de.lanes|=gt,Ya|=gt;W=W.next}while(W!==null&&W!==n);if(P===null?_=f:P.next=M,!Jn(f,t.memoizedState)&&(fn=!0,it&&(a=gs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=P,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function qf(t){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Jn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Rg(t,n,a){var o=de,u=sn(),f=_e;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Jn((Ve||u).memoizedState,a);if(_&&(u.memoizedState=a,fn=!0),u=u.queue,Zf(Dg.bind(null,o,u,t),[t]),t=u.getSnapshot!==n||_||cn!==null&&(cn.memoizedState.tag&1)!==0,ys(t?9:8,{destroy:void 0},wg.bind(null,o,u,a,n),null),t){if(o.flags|=2048,qe===null)throw Error(s(349));f||(fa&127)!==0||Cg(o,n,a)}return a}function Cg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=du(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wg(t,n,a,o){n.value=a,n.getSnapshot=o,Ug(n)&&Ng(t)}function Dg(t,n,a){return a(function(){Ug(n)&&Ng(t)})}function Ug(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Jn(t,a)}catch{return!0}}function Ng(t){var n=Er(t,2);n!==null&&Yn(n,t,2)}function Yf(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),Lr){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function Lg(t,n,a,o){return t.baseState=a,jf(t,Ve,typeof o=="function"?o:ha)}function Xy(t,n,a,o,u){if(_u(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};Tt.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Og(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Og(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=Tt.T,_={};_.types=f!==null?f.types:null,Tt.T=_;try{var M=a(u,o),P=Tt.S;P!==null&&P(_,M),Pg(t,n,M)}catch(W){Wf(t,n,W)}finally{f!==null&&_.types!==null&&(f.types=_.types),Tt.T=f}}else try{f=a(u,o),Pg(t,n,f)}catch(W){Wf(t,n,W)}}function Pg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zg(t,n,o)},function(o){return Wf(t,n,o)}):zg(t,n,a)}function zg(t,n,a){n.status="fulfilled",n.value=a,Ig(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Og(t,a)))}function Wf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ig(n),n=n.next;while(n!==o)}t.action=null}function Ig(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Bg(t,n){return n}function Fg(t,n){if(_e){var a=qe.formState;if(a!==null){t:{var o=de;if(_e){if(Ze){e:{for(var u=Ze,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=gi(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bg,lastRenderedState:n},a.queue=o,a=av.bind(null,de,o),o.dispatch=a,o=Yf(!1),f=th.bind(null,de,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Xy.bind(null,de,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Hg(t){var n=sn();return Vg(n,Ve,t)}function Vg(t,n,a){if(n=jf(t,n,Bg)[0],t=mu(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Xo(n)}catch(_){throw _===vs?ru:_}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,ys(9,{destroy:void 0},ky.bind(null,u,a),null)),[o,f,t]}function ky(t,n){t.action=n}function Gg(t){var n=sn(),a=Ve;if(a!==null)return Vg(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ys(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=du(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Xg(){return sn().memoizedState}function gu(t,n,a,o){var u=In();de.flags|=t,u.memoizedState=ys(1|n,{destroy:void 0},a,o===void 0?null:o)}function vu(t,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ve!==null&&o!==null&&Ff(o,Ve.memoizedState.deps)?u.memoizedState=ys(n,f,a,o):(de.flags|=t,u.memoizedState=ys(1|n,f,a,o))}function kg(t,n){gu(8390656,8,t,n)}function Zf(t,n){vu(2048,8,t,n)}function jy(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=du(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function jg(t){var n=sn().memoizedState;return jy({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qg(t,n){return vu(4,2,t,n)}function Yg(t,n){return vu(4,4,t,n)}function Wg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zg(t,n,a){a=a!=null?a.concat([t]):null,vu(4,4,Wg.bind(null,n,t),a)}function Kf(){}function Kg(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ff(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Qg(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ff(n,o[1]))return o[0];if(o=t(),Lr){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[o,n],o}function Qf(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=o_(),de.lanes|=t,Ya|=t,a)}function Jg(t,n,a,o){return Jn(a,n)?a:Va.current!==null?(t=Qf(t,a,o),Jn(t,n)||(fn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Me&261930)===0?(fn=!0,t.memoizedState=a):(t=o_(),de.lanes|=t,Ya|=t,n)}function $g(t,n,a,o,u){var f=Yt.p;Yt.p=f!==0&&8>f?f:8;var _=Tt.T,M={};M.types=_!==null?_.types:null,Tt.T=M,th(t,!1,n,a);try{var P=u(),W=Tt.S;if(W!==null&&W(M,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var it=Hy(P,o);ko(t,n,it,ii(t))}else ko(t,n,o,ii(t))}catch(gt){ko(t,n,{then:function(){},status:"rejected",reason:gt},ii())}finally{Yt.p=f,_!==null&&M.types!==null&&(_.types=M.types),Tt.T=_}}function qy(){}function Jf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=tv(t).queue;$g(t,u,n,I,a===null?qy:function(){return ev(t),a(o)})}function tv(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ev(t){var n=tv(t);n.next===null&&(n=t.alternate.memoizedState),ko(t,n.next.queue,{},ii())}function $f(){return Tn(Hs)}function nv(){return sn().memoizedState}function iv(){return sn().memoizedState}function Yy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=Fa(a);var o=Ha(n,t,a);o!==null&&(Yn(o,n,a),Bo(o,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function Wy(t,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_u(t)?rv(n,a):(a=_f(t,n,a,o),a!==null&&(Yn(a,t,o),sv(a,n,o)))}function av(t,n,a){var o=ii();ko(t,n,a,o)}function ko(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_u(t))rv(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,M=f(_,a);if(u.hasEagerState=!0,u.eagerState=M,Jn(M,_))return Zl(t,n,u,0),qe===null&&Wl(),!1}catch{}if(a=_f(t,n,u,o),a!==null)return Yn(a,t,o),sv(a,n,o),!0}return!1}function th(t,n,a,o){if(o={lane:2,revertLane:kh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},_u(t)){if(n)throw Error(s(479))}else n=_f(t,a,o,2),n!==null&&Yn(n,t,2)}function _u(t){var n=t.alternate;return t===de||n!==null&&n===de}function rv(t,n){xs=fu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function sv(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,K(t,a)}}var xu={readContext:Tn,use:pu,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},ov={readContext:Tn,use:pu,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:kg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gu(4194308,4,Wg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gu(4194308,4,t,n)},useInsertionEffect:function(t,n){gu(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(Lr){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(Lr){pn(!0);try{a(n)}finally{pn(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Wy.bind(null,de,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Yf(t);var n=t.queue,a=av.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Kf,useDeferredValue:function(t,n){var a=In();return Qf(a,t,n)},useTransition:function(){var t=Yf(!1);return t=$g.bind(null,de,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=de,u=In();if(_e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Me&127)!==0||Cg(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,kg(Dg.bind(null,o,f,t),[t]),o.flags|=2048,ys(9,{destroy:void 0},wg.bind(null,o,f,a,n),null),a},useId:function(){var t=In(),n=qe.identifierPrefix;if(_e){var a=Fi,o=Bi;a=(o&~(1<<32-Dn(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$f,useFormState:Fg,useActionState:Fg,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=th.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:kf,useCacheRefresh:function(){return In().memoizedState=Yy.bind(null,de)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lv={readContext:Tn,use:pu,useCallback:Kg,useContext:Tn,useEffect:Zf,useImperativeHandle:Zg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Qg,useReducer:mu,useRef:Xg,useState:function(){return mu(ha)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=sn();return Jg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=mu(ha)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:Rg,useId:nv,useHostTransitionStatus:$f,useFormState:Hg,useActionState:Hg,useOptimistic:function(t,n){var a=sn();return Lg(a,Ve,t,n)},useMemoCache:kf,useCacheRefresh:iv,useEffectEvent:jg},Zy={readContext:Tn,use:pu,useCallback:Kg,useContext:Tn,useEffect:Zf,useImperativeHandle:Zg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Qg,useReducer:qf,useRef:Xg,useState:function(){return qf(ha)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=sn();return Ve===null?Qf(a,t,n):Jg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=qf(ha)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:Rg,useId:nv,useHostTransitionStatus:$f,useFormState:Gg,useActionState:Gg,useOptimistic:function(t,n){var a=sn();return Ve!==null?Lg(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:kf,useCacheRefresh:iv,useEffectEvent:jg};function eh(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nh={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Yn(n,t,o),Bo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Yn(n,t,o),Bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&(Yn(n,t,a),Bo(n,t,a))}};function uv(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!Do(a,o)||!Do(u,f):!0}function cv(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&nh.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function fv(t){Yl(t)}function hv(t){console.error(t)}function dv(t){Yl(t)}function Su(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pv(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ih(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Su(t,n)},a}function mv(t){return t=Fa(t),t.tag=3,t}function gv(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){pv(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){pv(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var M=o.stack;this.componentDidCatch(o.value,{componentStack:M!==null?M:""})})}function Ky(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ar(n,a,u,!0),a=bn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Nn===null?Vu():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===su?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vh(t,o,u)),!1;case 22:return a.flags|=65536,o===su?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vh(t,o,u)),!1}throw Error(s(435,a.tag))}return Vh(t,o,u),Vu(),!1}if(_e)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Mf&&(t=Error(s(422),{cause:o}),Lo(fi(t,a)))):(o!==Mf&&(n=Error(s(423),{cause:o}),Lo(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=ih(t.stateNode,o,u),Lf(t,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),Jo===null?Jo=[f]:Jo.push(f),rn!==4&&(rn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ih(a.stateNode,o,t),Lf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mv(u),gv(u,t,a,o),Lf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ah=Error(s(461)),fn=!1;function gn(t,n,a,o){n.child=t===null?Sg(n,null,a,o):Nr(n,t.child,a,o)}function vv(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var M in o)M!=="ref"&&(_[M]=o[M])}else _=o;return Rr(n),o=Hf(t,n,a,_,f,u),M=Vf(),t!==null&&!fn?(Gf(t,n,u),da(t,n,u)):(_e&&M&&$l(n),n.flags|=1,gn(t,n,o,u),n.child)}function _v(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!xf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xv(t,n,f,o,u)):(t=Ql(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hh(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(_,o)&&t.ref===n.ref)return da(t,n,u)}return n.flags|=1,t=oa(f,o),t.ref=n.ref,t.return=n,n.child=t}function xv(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Do(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,hh(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,da(t,n,u)}return rh(t,n,a,o,u)}function Sv(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return yv(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&au(n,f!==null?f.cachePool:null),f!==null?Mg(n,f):Pf(),Tg(n);else return o=n.lanes=536870912,yv(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(au(n,f.cachePool),Mg(n,f),Xa(),n.memoizedState=null):(t!==null&&au(n,null),Pf(),Xa());return gn(t,n,u,a),n.child}function jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function yv(t,n,a,o,u){var f=wf();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&au(n,null),Pf(),Tg(n),t!==null&&Ar(t,n,o,!0),n.childLanes=u,null}function yu(t,n){return n=Eu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ev(t,n,a){return Nr(n,t.child,null,a),t=yu(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function Qy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(o.mode==="hidden")return t=yu(n,o),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},jo(null,t);if(If(n),(t=Ze)?(t=W_(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=rg(t),a.return=n,n.child=a,Sn=n,Ze=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return yu(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(If(n),u)if(n.flags&256)n.flags&=-257,n=Ev(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Ar(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(Va.current===null){if(o=qe,o!==null&&(_=st(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Er(t,_),Yn(o,t,_),ah;Vu()}n=Ev(t,n,a)}else t=f.treeContext,Ze=gi(_.nextSibling),Sn=n,_e=!0,Oa=null,pi=!1,t!==null&&lg(n,t),n=yu(n,o),n.flags|=134221824;return n}return t=oa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Es(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rh(t,n,a,o,u){return Rr(n),a=Hf(t,n,a,o,void 0,u),o=Vf(),t!==null&&!fn?(Gf(t,n,u),da(t,n,u)):(_e&&o&&$l(n),n.flags|=1,gn(t,n,a,u),n.child)}function Mv(t,n,a,o,u,f){return Rr(n),n.updateQueue=null,a=Ag(n,o,a,u),bg(t),o=Vf(),t!==null&&!fn?(Gf(t,n,f),da(t,n,f)):(_e&&o&&$l(n),n.flags|=1,gn(t,n,a,f),n.child)}function Tv(t,n,a,o,u){if(Rr(n),n.stateNode===null){var f=hs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Tn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Uf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Tn(_):hs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(eh(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&nh.enqueueReplaceState(f,f.state,null),Ho(n,o,f,u),Fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var M=n.memoizedProps,P=Or(a,M);f.props=P;var W=f.context,it=a.contextType;_=hs,typeof it=="object"&&it!==null&&(_=Tn(it));var gt=a.getDerivedStateFromProps;it=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",M=n.pendingProps!==M,it||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M||W!==_)&&cv(n,f,o,_),Ba=!1;var j=n.memoizedState;f.state=j,Ho(n,o,f,u),Fo(),W=n.memoizedState,M||j!==W||Ba?(typeof gt=="function"&&(eh(n,a,gt,o),W=n.memoizedState),(P=Ba||uv(n,a,P,o,j,W,_))?(it||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=W),f.props=o,f.state=W,f.context=_,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Nf(t,n),_=n.memoizedProps,it=Or(a,_),f.props=it,gt=n.pendingProps,j=f.context,W=a.contextType,P=hs,typeof W=="object"&&W!==null&&(P=Tn(W)),M=a.getDerivedStateFromProps,(W=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||j!==P)&&cv(n,f,o,P),Ba=!1,j=n.memoizedState,f.state=j,Ho(n,o,f,u),Fo();var tt=n.memoizedState;_!==gt||j!==tt||Ba||t!==null&&t.dependencies!==null&&nu(t.dependencies)?(typeof M=="function"&&(eh(n,a,M,o),tt=n.memoizedState),(it=Ba||uv(n,a,it,o,j,tt,P)||t!==null&&t.dependencies!==null&&nu(t.dependencies))?(W||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,tt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,tt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=P,o=it):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Es(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Nr(n,t.child,null,u),n.child=Nr(n,null,a,u)):gn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=da(t,n,u),t}function bv(t,n,a,o){return Tr(),n.flags|=256,gn(t,n,a,o),n.child}var sh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(t){return{baseLanes:t,cachePool:pg()}}function lh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function Av(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?Ga(n):Xa(),(t=Ze)?(t=W_(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=rg(t),a.return=n,n.child=a,Sn=n,Ze=null)):t=null,t===null)throw Pa(n);return od(t)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?(Xa(),u=n.mode,f=Eu({mode:"hidden",children:f},u),o=Mr(o,u,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=oh(a),o.childLanes=lh(t,_,a),n.memoizedState=sh,jo(null,o)):(Ga(n),uh(n,f))}var M=t.memoizedState;if(M!==null){var P=M.dehydrated;if(P!==null)return Jy(t,n,f,_,o,P,M,a)}return u?(Xa(),u=o.fallback,f=n.mode,M=t.child,P=M.sibling,o=oa(M,{mode:"hidden",children:o.children}),o.subtreeFlags=M.subtreeFlags&1206910976,P!==null?u=oa(P,u):(u=Mr(u,f,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,jo(null,o),o=n.child,u=t.child.memoizedState,u===null?u=oh(a):(f=u.cachePool,f!==null?(M=un._currentValue,f=f.parent!==M?{parent:M,pool:M}:f):f=pg(),u={baseLanes:u.baseLanes|a,cachePool:f}),o.memoizedState=u,o.childLanes=lh(t,_,a),n.memoizedState=sh,jo(t.child,o)):(Ga(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function uh(t,n){return n=Eu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Eu(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function Mu(t,n,a){return Nr(n,t.child,null,a),t=uh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jy(t,n,a,o,u,f,_,M){if(a)return n.flags&256?(Ga(n),n.flags&=-257,Mu(t,n,M)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,null):(Xa(),f=u.fallback,_=n.mode,u=Eu({mode:"visible",children:u.children},_),f=Mr(f,_,M,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Nr(n,t.child,null,M),u=n.child,u.memoizedState=oh(M),u.childLanes=lh(t,o,M),n.memoizedState=sh,jo(null,u));if(Ga(n),od(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var P=o.dgst;return o=P,o!==""&&(u=Error(s(419)),u.stack="",u.digest=o,Lo({value:u,source:null,stack:null})),Mu(t,n,M)}if(fn||Ar(t,n,M,!1),o=(M&t.childLanes)!==0,fn||o){if(Va.current!==null)return Mu(t,n,M);if(o=qe,o!==null&&(u=st(o,M),u!==0&&u!==_.retryLane))throw _.retryLane=u,Er(t,u),Yn(o,t,u),ah;return sd(f)||Vu(),Mu(t,n,M)}return sd(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=gi(f.nextSibling),Sn=n,_e=!0,Oa=null,pi=!1,t!==null&&lg(n,t),n=uh(n,u.children),n.flags|=134221824,n)}function Rv(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),eu(t.return,n,a)}function Cv(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&cu(a)===null&&(n=t),t=t.sibling}return n}function Tu(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function ch(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function fh(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=An.current;if(n.flags&128)return Vo(n,_),null;var M=(_&2)!==0;if(M?(_=_&1|2,n.flags|=128):_&=1,Vo(n,_),u==="backwards"&&t!==null?(ch(t),gn(t,n,o,a),ch(t)):gn(t,n,o,a),o=_e?No:0,!M&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,a,n);else if(t.tag===19)Rv(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=Cv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,ch(n)),Tu(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Tu(n,!0,a,null,f,o);break;case"together":Tu(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=Cv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tu(n,!1,u,a,f,o)}return n.child}function wv(t,n,a){var o=n.pendingProps;return za(n,n.type,o.value),gn(t,n,o.children,a),n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ar(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nu(t)))}function $y(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),za(n,un,t.memoizedState.cache),Tr();break;case 27:case 5:et(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,If(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Ga(n),n.flags|=128,null;o=Ar(t,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?Av(t,n,a):(Ga(n),t=da(t,n,a),t!==null?t.sibling:null)}Ga(n);break;case 19:if(n.flags&128)return fh(t,n,a);if(u=(t.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Ar(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return fh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Vo(n,An.current),o)break;return null;case 22:return n.lanes=0,Sv(t,n,a,n.pendingProps);case 24:za(n,un,t.memoizedState.cache)}return da(t,n,a)}function Dv(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!hh(t,a)&&(n.flags&128)===0)return fn=!1,$y(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&og(n,No,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=Dr(n.elementType),n.type=t,typeof t=="function")xf(t)?(o=Or(t,o),n.tag=1,n=Tv(null,n,t,o,a)):(n.tag=0,n=rh(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=vv(null,n,t,o,a);break t}else if(u===xt){n.tag=14,n=_v(null,n,t,o,a);break t}else if(u===ut){n.tag=10,n.type=t,n=wv(null,n,a);break t}}throw n=Lt(t)||t,Error(s(306,n,""))}}return n;case 0:return rh(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Or(o,n.pendingProps),Tv(t,n,o,u,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Nf(t,n),Ho(n,o,null,a);var _=n.memoizedState;if(o=_.cache,za(n,un,o),o!==f.cache&&Af(n,[un],a,!0),Fo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bv(t,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),Lo(u),n=bv(t,n,o,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=gi(t.firstChild),Sn=n,_e=!0,Oa=null,pi=!0,a=Sg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Tr(),o===u){n=da(t,n,a);break t}gn(t,n,o,a)}n=n.child}return n;case 26:return Es(t,n),t===null?(a=e0(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=O_(n.type,n.pendingProps,je.current,n)):n.memoizedState=e0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&_e&&(o=n.stateNode=Q_(n.type,n.pendingProps,je.current),Sn=n,pi=!0,u=Ze,Qa(n.type)?(ld=u,Ze=gi(o.firstChild)):Ze=u),gn(t,n,n.pendingProps.children,a),Es(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=o=Ze)&&(o=YE(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Sn=n,Ze=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Pa(n)),et(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,$h(u,f)?o=null:_!==null&&$h(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Hf(t,n,Gy,null,null,a),Hs._currentValue=u),Es(t,n),gn(t,n,o,a),n.child;case 6:return t===null&&_e&&((t=a=Ze)&&(a=WE(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Sn=n,Ze=null,t=!0):t=!1),t||Pa(n)),null;case 13:return Av(t,n,a);case 4:return U(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Nr(n,null,o,a):gn(t,n,o,a),n.child;case 11:return vv(t,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Es(t,n),gn(t,n,o,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return wv(t,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,Rr(n),u=Tn(u),o=o(u),n.flags|=1,gn(t,n,o,a),n.child;case 14:return _v(t,n,n.type,n.pendingProps,a);case 15:return xv(t,n,n.type,n.pendingProps,a);case 19:return fh(t,n,a);case 31:return Qy(t,n,a);case 22:return Sv(t,n,a,n.pendingProps);case 24:return Rr(n),o=Tn(un),t===null?(u=wf(),u===null&&(u=qe,f=Rf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Uf(n),za(n,un,u)):((t.lanes&a)!==0&&(Nf(t,n),Ho(n,null,null,a),Fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,un,o)):(o=f.cache,za(n,un,o),o!==u.cache&&Af(n,[un],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&$l(n),t!==null&&t.memoizedProps.name!==o.name?n.flags|=4194816:Es(t,n),gn(t,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(t){t.flags|=4}function dh(t,n,a,o,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?r0(n,o):r0(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(f_())t.flags|=8192;else throw Ur=su,Df}else t.flags&=-16777217}function Uv(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!s0(n))if(f_())t.flags|=8192;else throw Ur=su,Df}function bu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Il():536870912,t.lanes|=n,Rs|=n)}function qo(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function tE(t,n,a){var o=n.pendingProps;switch(Ef(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(un),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ms(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tf())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(pa(n),f!==null?(Ke(n),Uv(n,f)):(Ke(n),dh(n,u,null,o,a))):f?f!==t.memoizedState?(pa(n),Ke(n),Uv(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&pa(n),Ke(n),dh(n,u,t,o,a)),null;case 27:if(mt(n),a=je.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Ht.current,ms(n)?ug(n):(t=Q_(u,o,a),n.stateNode=t,pa(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(f=Ht.current,ms(n))ug(n);else{var _=il(je.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[Dt]=n,f[jt]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&pa(n)}}return Ke(n),n.subtreeFlags&=-33554433,dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=je.current,ms(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||D_(t.nodeValue,a)),t||Pa(n,!0)}else t=il(t).createTextNode(o),t[Dt]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ms(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ms(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Dt]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),bu(n,n.updateQueue),Ke(n),null);case 4:return b(),t===null&&Wh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return ca(n.type),Ke(n),null;case 19:if(Bf(n),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)qo(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cu(t),f!==null){for(n.flags|=128,qo(o,!1),t=f.updateQueue,n.updateQueue=t,bu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ag(a,t),a=a.sibling;return Vo(n,An.current&1|2),_e&&la(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&G()>Iu&&(n.flags|=128,u=!0,qo(o,!1),n.lanes=4194304)}else{if(!u)if(t=cu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,bu(n,t),qo(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!_e)return Ke(n),null}else 2*G()-o.renderingStartTime>Iu&&a!==536870912&&(n.flags|=128,u=!0,qo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){t=o.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,f=An.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||_e?Vo(n,f):(a=f,re(bn,n),re(An,a),Nn===null&&(Nn=n)),_e&&la(n,o.treeForkCount),t}return Ke(n),null;case 22:case 23:return $n(n),zf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&bu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Ot(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(un),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function eE(t,n){switch(Ef(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(un),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Bf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return ca(n.type),null;case 22:case 23:return $n(n),zf(),t!==null&&Ot(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function Nv(t,n){switch(Ef(n),n.tag){case 3:ca(un),b();break;case 26:case 27:case 5:mt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:Bf(n);break;case 10:ca(n.type);break;case 22:case 23:$n(n),zf(),t!==null&&Ot(wr);break;case 24:ca(un)}}function Yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(M){Ie(n,n.return,M)}}function ka(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,M=_.destroy;if(M!==void 0){_.destroy=void 0,u=n;var P=a,W=M;try{W()}catch(it){Ie(u,P,it)}}}o=o.next}while(o!==f)}}catch(it){Ie(n,n.return,it)}}function Lv(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Eg(n,a)}catch(o){Ie(t,t.return,o)}}}function Ov(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(t,n,o)}}function Hi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var u=t.stateNode,f=ra(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=V_(f)),o=u.ref;break;case 7:if(t.stateNode===null){var _=new ai(t);m(t.child,!1,jE,_,void 0,void 0),t.stateNode=_}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(M){Ie(t,n,M)}}function Rn(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ie(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(t,n,u)}else a.current=null}function Au(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Y_(t.stateNode,n[a])}function Pv(t){for(var n=t.return;n!==null&&(mh(n)&&Y_(t.stateNode,n.stateNode),!ph(n));)n=n.return}function Wo(t){for(var n=t.return;n!==null&&(mh(n)&&qE(t.stateNode,n.stateNode),!ph(n));)n=n.return}function ph(t){return t.tag===5||t.tag===3||t.tag===27}function mh(t){return t&&t.tag===7&&t.stateNode!==null}function gh(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ie(t,t.return,u)}}function vh(t,n,a){try{var o=t.stateNode;RE(o,t.type,a,n),o[jt]=n}catch(u){Ie(t,t.return,u)}}function zv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function _h(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,n,a,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii)),Au(t,o),we=!0;else if(u!==4&&(u===27&&(Au(t,o),o=null,Qa(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(xh(t,n,a,o),t=t.sibling;t!==null;)xh(t,n,a,o),t=t.sibling}function Ru(t,n,a,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Au(t,o),we=!0;else if(u!==4&&(u===27&&(Au(t,o),o=null,Qa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Ru(t,n,a,o),t=t.sibling;t!==null;)Ru(t,n,a,o),t=t.sibling}function Iv(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[Dt]=t,n[jt]=a}catch(f){Ie(t,t.return,f)}}var Cu=!1,ti=null;function Bv(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Cu=!0)}var Vi=null;function Fv(){var t=Vi;return Vi=null,t}var kn=0;function Ms(t,n,a,o,u){return kn=0,Hv(t.child,n,a,o,u)}function Hv(t,n,a,o,u){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(o!==null){var M=nd(_);o.push(M),M.view&&(f=!0)}else f||nd(_).view&&(f=!0);Cu=!0,F_(_,kn===0?n:n+"_"+kn,a),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||Hv(t.child,n,a,o,u)&&(f=!0));t=t.sibling}return f}function Gi(t,n){for(;t!==null;)t.tag===5?H_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Gi(t.child,n)),t=t.sibling}function wu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(wu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=sa(n.default,n.share),n!=="none"&&(Ms(t,a,n,null,!1)||Gi(t.child,!1))}t=t.sibling}}function Sh(t,n){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,u=ra(o,a),f=sa(o.default,a.paired?o.share:o.enter);f!=="none"?Ms(t,u,f,null,!1)?(wu(t),a.paired||n||Us(t,o.onEnter)):Gi(t.child,!1):wu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sh(t,n),t=t.sibling;else wu(t)}function yh(t){if(ti!==null&&ti.size!==0){var n=ti;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=sa(a.default,a.share);if(f!=="none"&&(Ms(t,o,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Us(t,a.onShare)):Gi(t.child,!1)),n.delete(o),n.size===0)break}}}yh(t)}t=t.sibling}}}function Eh(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),o=ti!==null?ti.get(a):void 0,u=sa(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(Ms(t,a,u,null,!1)?o!==void 0?(u=t.stateNode,o.paired=u,u.paired=o,ti.delete(a),Us(t,n.onShare)):Us(t,n.onExit):Gi(t.child,!1)),ti!==null&&yh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Eh(t),t=t.sibling;else ti!==null&&yh(t)}function Vv(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=sa(n.default,n.update),t.flags&=-5,n!=="none"&&Ms(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Vv(t);t=t.sibling}}function Mh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Gi(t.child,!1))}Mh(t)}t=t.sibling}}function Du(t){if(t.tag===30)t.stateNode.paired=null,Gi(t.child,!1),Mh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Du(t),t=t.sibling;else Mh(t)}function Gv(t){for(t=t.child;t!==null;)t.tag===30?Gi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Gv(t),t=t.sibling}function Th(t,n,a,o,u,f,_){for(var M=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(f!==null&&kn<f.length){var W=f[kn],it=nd(P);(W.view||it.view)&&(M=!0);var gt;if(gt=(t.flags&4)===0)if(it.clip)gt=!0;else{gt=W.rect;var j=it.rect;gt=gt.y!==j.y||gt.x!==j.x||gt.height!==j.height||gt.width!==j.width}gt&&(t.flags|=4),it.abs?it=!W.abs:(W=W.rect,it=it.rect,it=W.height!==it.height||W.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&F_(P,kn===0?a:a+"_"+kn,u),M&&(t.flags&4)!==0||(Vi===null&&(Vi=[]),Vi.push(P,kn===0?o:o+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Th(t,n.child,a,o,u,f,_)&&(M=!0));n=n.sibling}return M}function Xv(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,u=ra(a,o),f=sa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,o=t;var M=t.child;kn=0,u=Th(o,M,u,u,f,_,!1),(t.flags&4)!==0&&u&&Us(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Xv(t);t=t.sibling}}var yn=!1,Pe=!1,Xi=!1,bh=!1,kv=typeof WeakSet=="function"?WeakSet:Set,En=null,ki=!1,Zo=!1,Uu=!1,Ah=!1;function nE(t,n,a){if(t=t.containerInfo,Qh=Vs,t=Wm(t),hf(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else t:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break t}var M=0,P=-1,W=-1,it=0,gt=0,j=t,tt=null;e:for(;;){for(var Nt;j!==o||f!==0&&j.nodeType!==3||(P=M+f),j!==_||u!==0&&j.nodeType!==3||(W=M+u),j.nodeType===3&&(M+=j.nodeValue.length),(Nt=j.firstChild)!==null;)tt=j,j=Nt;for(;;){if(j===t)break e;if(tt===o&&++it===f&&(P=M),tt===_&&++gt===u&&(W=M),(Nt=j.nextSibling)!==null)break;j=tt,tt=j.parentNode}j=Nt}o=P===-1||W===-1?null:{start:P,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jh={focusedElem:t,selectionRange:o},Vs=!1,a=(a&335544064)===a,En=n,n=a?9270:1024;En!==null;){if(t=En,a&&(o=t.deletions,o!==null))for(f=0;f<o.length;f++)a&&Eh(o[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&Bv(t),Nu(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&Eh(o),Nu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&Bv(t),Nu(a);continue}}o=t.child,(t.subtreeFlags&n)!==0&&o!==null?(o.return=t,En=o):(a&&Vv(t),Nu(a))}}ti=null}function Nu(t){for(;En!==null;){var n=En,a=t,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var _=Or(n.type,u);a=f.getSnapshotBeforeUpdate(_,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(M){Ie(n,n.return,M)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)rd(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":rd(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=ra(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=sa(u.default,u.update),u!=="none"&&Ms(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,En=o;break}En=n.return}}function jv(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),o&4&&Yo(5,a);break;case 1:if(ji(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ie(a,a.return,_)}else{var u=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ie(a,a.return,_)}}o&64&&Lv(a),o&512&&Hi(a,a.return);break;case 3:if(ji(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Eg(t,n)}catch(_){Ie(a,a.return,_)}}break;case 27:n===null&&o&4&&Iv(a);case 26:case 5:ji(t,a),n===null&&o&4&&gh(a),o&512&&Hi(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),o&4&&Zv(t,a);break;case 13:ji(t,a),o&4&&Kv(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=pE.bind(null,a),ZE(t,a))));break;case 22:if(o=a.memoizedState!==null||yn,!o){var f=n!==null&&n.memoizedState!==null||Pe;n=yn,u=Pe,yn=o,(Pe=f)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Ti(t,a,o)):ji(t,a),yn=n,Pe=u}break;case 30:ji(t,a),o&512&&Hi(a,a.return);break;case 7:o&512&&Hi(a,a.return);default:ji(t,a)}}function Rh(t,n){for(t=t.child;t!==null;)qv(t,n),t=t.sibling}function qv(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(P){Ie(t,t.return,P)}Ch(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,we=!0}catch(P){Ie(t,t.return,P)}break;case 18:try{var M=t.stateNode;n?B_(M,!0):B_(t.stateNode,!1)}catch(P){Ie(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Rh(t,n);break;default:Rh(t,n)}}function Ch(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,o=n;switch(a.tag){case 4:qv(a,o);break t;case 22:a.memoizedState===null&&Ch(a,o);break t;default:Ch(a,o)}}t=t.sibling}}function Yv(t){var n=t.alternate;n!==null&&(t.alternate=null,Yv(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ee(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,jn=!1;function Ei(t,n,a){for(a=a.child;a!==null;)Wv(t,n,a),a=a.sibling}function Wv(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:Pe||Rn(a,n),Ei(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Pe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Pe||Rn(a,n),Wo(a);var o=Je,u=jn;Qa(a.type)&&(Je=a.stateNode,jn=!1),Ei(t,n,a),J_(a.stateNode,a.type,a.memoizedProps),Je=o,jn=u;break;case 5:Pe||Rn(a,n),Wo(a);case 6:if(a.tag===6&&Wo(a),o=Je,u=jn,Je=null,Ei(t,n,a),Je=o,jn=u,Je!==null)if(jn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),we=!0}catch(f){Ie(a,n,f)}else try{Je.removeChild(a.stateNode),we=!0}catch(f){Ie(a,n,f)}break;case 18:Je!==null&&(jn?(t=Je,I_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gs(t)):I_(Je,a.stateNode));break;case 4:o=Je,u=jn,Je=a.stateNode.containerInfo,jn=!0,Ei(t,n,a),Je=o,jn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),Pe||ka(4,a,n),Ei(t,n,a);break;case 1:Pe||(Rn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ov(a,n,o)),Ei(t,n,a);break;case 21:Ei(t,n,a);break;case 22:Pe=(o=Pe)||a.memoizedState!==null,Ei(t,n,a),Pe=o;break;case 30:Rn(a,n),Ei(t,n,a);break;case 7:Pe||Rn(a,n),Ei(t,n,a);break;default:Ei(t,n,a)}}function Zv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gs(t)}catch(a){Ie(n,n.return,a)}}}function Kv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(a){Ie(n,n.return,a)}}function iE(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new kv),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new kv),n;default:throw Error(s(435,t.tag))}}function Lu(t,n){var a=iE(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=mE.bind(null,t,o);o.then(u,u)}})}function Bn(t,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],_=t,M=n,P=M;t:for(;P!==null;){switch(P.tag){case 27:if(Qa(P.type)){Je=P.stateNode,jn=!1;break t}break;case 5:Je=P.stateNode,jn=!1;break t;case 3:case 4:Je=P.stateNode.containerInfo,jn=!0;break t}P=P.return}if(Je===null)throw Error(s(160));Wv(_,M,f),Je=null,jn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qv(n,t,a),n=n.sibling}var Mi=null;function Qv(t,n,a){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var _=o[f];_.ref.impl=_.nextImpl}Bn(n,t,a),Fn(t),u&4&&(ka(3,t,t.return),Yo(3,t),ka(5,t,t.return));break;case 1:Bn(n,t,a),Fn(t),u&512&&(Pe||o===null||Rn(o,o.return)),u&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Mi,Bn(n,t,a),Fn(t),u&512&&(Pe||o===null||Rn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(yn)t.stateNode=O_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Ue]||o[Dt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),Cn(o,n,a),o[Dt]=t,Ce(o),n=o;break t;case"link":if(f=a0("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(o=f[_],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}o=u.createElement(n),Cn(o,n,a),u.head.appendChild(o);break;case"meta":if(f=a0("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(o=f[_],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}o=u.createElement(n),Cn(o,n,a),u.head.appendChild(o);break;default:throw Error(s(468,n))}o[Dt]=t,Ce(o),n=o}t.stateNode=n}else yn||hd(f,t.type,t.stateNode);else t.stateNode=i0(f,a,t.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||Pe||n.parentNode.removeChild(n)):u.count--,a===null?yn||hd(f,t.type,t.stateNode):i0(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&vh(t,t.memoizedProps,o.memoizedProps);break;case 27:Bn(n,t,a),Fn(t),u&512&&(Pe||o===null||Rn(o,o.return)),o!==null&&u&4&&vh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(f=Xi,Xi=!1,Bn(n,t,a),Xi=f,Fn(t),u&512&&(Pe||o===null||Rn(o,o.return)),t.flags&32){n=t.stateNode;try{rs(n,""),we=!0}catch(it){Ie(t,t.return,it)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,vh(t,n,o!==null?o.memoizedProps:n)),u&1024&&(bh=!0);break;case 6:if(Bn(n,t,a),Fn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,we=!0}catch(it){Ie(t,t.return,it)}}break;case 3:if(we=!1,Wu=null,f=Mi,Mi=al(n.containerInfo),Bn(n,t,a),Mi=f,Fn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(it){Ie(t,t.return,it)}bh&&(bh=!1,Jv(t)),we=!1;break;case 4:u=Xi,Xi=yn,o=_m(),f=Mi,Mi=al(t.stateNode.containerInfo),Bn(n,t,a),Fn(t),Mi=f,we&&Zo&&(Uu=!0),we=o,Xi=u;break;case 12:Bn(n,t,a),Fn(t);break;case 31:Bn(n,t,a),Fn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Lu(t,n)));break;case 13:Bn(n,t,a),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(zu=G()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Lu(t,n)));break;case 22:f=t.memoizedState!==null,_=o!==null&&o.memoizedState!==null;var M=yn,P=Pe,W=Xi;yn=M||f,Xi=W||f,Pe=P||_,Bn(n,t,a),Pe=P,Xi=W,yn=M,Fn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||_||yn||Pe||(n=_||Pe,a=yn,o=Pe,yn=f||yn,Pe=n,ja(t,2),yn=a,Pe=o),!f&&Xi||Rh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Lu(t,a))));break;case 19:Bn(n,t,a),Fn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Lu(t,n)));break;case 30:u&512&&(Pe||o===null||Rn(o,o.return)),u=_m(),f=Zo,_=(a&335544064)===a,M=t.memoizedProps,Zo=_&&sa(M.default,M.update)!=="none",Bn(n,t,a),Fn(t),_&&o!==null&&we&&(t.flags|=4),Zo=f,we=u;break;case 21:break;case 7:u&512&&(Pe||o===null||Rn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:Bn(n,t,a),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(zv(o)){a=o;break}o=o.return}o=null;for(var u=t.return;u!==null;){if(mh(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(ph(u))break;u=u.return}var _=o;if(a==null)throw Error(s(160));switch(a.tag){case 27:var M=a.stateNode,P=_h(t);Ru(t,P,M,_);break;case 5:var W=a.stateNode;a.flags&32&&(rs(W,""),a.flags&=-33);var it=_h(t);Ru(t,it,W,_);break;case 3:case 4:var gt=a.stateNode.containerInfo,j=_h(t);xh(t,j,gt,_);break;default:throw Error(s(161))}}catch(tt){Ie(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Jv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Jv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Vs=!0,n.reset(),Vs=!1),t=t.sibling}}function Ts(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)$v(n,t),n=n.sibling;else Xv(n)}function $v(t,n){var a=t.alternate;if(a===null)Sh(t,!1);else switch(t.tag){case 3:if(Ah=ki=!1,Fv(),Ts(n,t),!ki&&!Uu){if(t=Vi,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var u=t[o+1];H_(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ah=!0}Vi=null;break;case 5:Ts(n,t);break;case 4:o=ki,ki=!1,Ts(n,t),ki&&(Uu=!0),ki=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Sh(t,!1):Ts(n,t));break;case 30:o=ki,u=Fv(),ki=!1,Ts(n,t),ki&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=ra(f,_),_=ra(a.memoizedProps,_);var M=sa(f.default,f.update);M==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,kn=0,n=Th(t,a,n,_,M,f,!0),kn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Us(t,t.memoizedProps.onUpdate),Vi=u):u!==null&&(u.push.apply(u,Vi),Vi=u),ki=(t.flags&32)!==0?!0:o;break;default:Ts(n,t)}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jv(t,n.alternate,n),n=n.sibling}function ja(t,n){for(t=t.child;t!==null;){var a=t,o=n;switch(a.tag){case 0:case 11:case 14:case 15:ka(4,a,a.return),ja(a,o);break;case 1:Rn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Ov(a,a.return,u),ja(a,o);break;case 27:(o&2)!==0&&J_(a.stateNode,a.type,a.memoizedProps);case 5:Rn(a,a.return),a.tag!==5&&a.tag!==27||Wo(a),ja(a,o);break;case 6:Wo(a);break;case 26:Rn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Pe||u.parentNode.removeChild(u),ja(a,o);break;case 22:a.memoizedState===null&&ja(a,o);break;case 30:Rn(a,a.return),ja(a,o);break;case 7:Rn(a,a.return);default:ja(a,o)}t=t.sibling}}function Ti(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags,M=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ti(u,f,a),Yo(4,f);break;case 1:if(Ti(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ie(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var P=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)yg(W[u],P)}catch(it){Ie(o,o.return,it)}}M&&_&64&&Lv(f),Hi(f,f.return);break;case 27:(a&2)!==0&&Iv(f);case 5:f.tag!==5&&f.tag!==27||Pv(f),Ti(u,f,a),M&&o===null&&_&4&&gh(f),Hi(f,f.return);break;case 6:Pv(f);break;case 26:P=f.stateNode,f.memoizedState!==null||P===null||yn||hd(al(P.ownerDocument),f.type,P),Ti(u,f,a),M&&o===null&&_&4&&gh(f),Hi(f,f.return);break;case 12:Ti(u,f,a);break;case 31:Ti(u,f,a),M&&_&4&&Zv(u,f);break;case 13:Ti(u,f,a),M&&_&4&&Kv(u,f);break;case 22:f.memoizedState===null&&Ti(u,f,a),Hi(f,f.return);break;case 30:Ti(u,f,a),Hi(f,f.return);break;case 7:Hi(f,f.return);default:Ti(u,f,a)}n=n.sibling}}function wh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Oo(a))}function Dh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Oo(t))}function mi(t,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)t_(t,n,a,o),n=n.sibling;else u&&Gv(n)}function t_(t,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Du(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,o),f&2048&&Yo(9,n);break;case 1:mi(t,n,a,o);break;case 3:mi(t,n,a,o),u&&Ah&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Oo(f)));break;case 12:if(f&2048){mi(t,n,a,o),f=n.stateNode;try{var _=n.memoizedProps,M=_.id,P=_.onPostCommit;typeof P=="function"&&P(M,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(W){Ie(n,n.return,W)}}else mi(t,n,a,o);break;case 31:mi(t,n,a,o);break;case 13:mi(t,n,a,o);break;case 23:break;case 22:_=n.stateNode,M=n.alternate,n.memoizedState!==null?(u&&M!==null&&M.memoizedState===null&&Du(M),_._visibility&2?mi(t,n,a,o):Ko(t,n)):(u&&M!==null&&M.memoizedState!==null&&Du(n),_._visibility&2?mi(t,n,a,o):(_._visibility|=2,bs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&wh(M,n);break;case 24:mi(t,n,a,o),f&2048&&Dh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Gi(f.child,!0),Gi(n.child,!0))),mi(t,n,a,o);break;default:mi(t,n,a,o)}}function bs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,M=a,P=o,W=_.flags;switch(_.tag){case 0:case 11:case 15:bs(f,_,M,P,u),Yo(8,_);break;case 23:break;case 22:var it=_.stateNode;_.memoizedState!==null?it._visibility&2?bs(f,_,M,P,u):Ko(f,_):(it._visibility|=2,bs(f,_,M,P,u)),u&&W&2048&&wh(_.alternate,_);break;case 24:bs(f,_,M,P,u),u&&W&2048&&Dh(_.alternate,_);break;default:bs(f,_,M,P,u)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ko(a,o),u&2048&&wh(o.alternate,o);break;case 24:Ko(a,o),u&2048&&Dh(o.alternate,o);break;default:Ko(a,o)}n=n.sibling}}var Pr=8192;function zr(t,n,a){if(t.subtreeFlags&Pr)for(t=t.child;t!==null;)e_(t,n,a),t=t.sibling}function e_(t,n,a){switch(t.tag){case 26:zr(t,n,a),t.flags&Pr&&(t.memoizedState!==null?uM(a,Mi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&l0(a,t)));break;case 5:zr(t,n,a),t.flags&Pr&&(t=t.stateNode,(n&335544128)===n&&l0(a,t));break;case 3:case 4:var o=Mi;Mi=al(t.stateNode.containerInfo),zr(t,n,a),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Pr,Pr=16777216,zr(t,n,a),Pr=o):zr(t,n,a));break;case 30:if((t.flags&Pr)!==0&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var u=t.stateNode;u.paired=null,ti===null&&(ti=new Map),ti.set(o,u)}zr(t,n,a);break;default:zr(t,n,a)}}function n_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,a_(o,t)}n_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)i_(t),t=t.sibling}function i_(t){switch(t.tag){case 0:case 11:case 15:Qo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Qo(t);break;case 12:Qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ou(t)):Qo(t);break;default:Qo(t)}}function Ou(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,a_(o,t)}n_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Ou(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ou(n));break;default:Ou(n)}t=t.sibling}}function a_(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=t;En!==null;){o=En;var u=o.sibling,f=o.return;if(Yv(o),o===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var aE={getCacheForType:function(t){var n=Tn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(un).controller.signal}},rE=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,Se=null,Me=0,ze=0,ei=null,qa=!1,As=!1,Uh=!1,ma=0,rn=0,Ya=0,Ir=0,Pu=0,ni=0,Rs=0,Jo=null,qn=null,Nh=!1,zu=0,r_=0,Iu=1/0,Bu=null,Wa=null,tn=0,bi=null,Br=null,qi=0,Lh=0,Oh=null,s_=null,Cs=null,ws=null,Ds=null,$o=0,Fu=null;function ii(){return(Le&2)!==0&&Me!==0?Me&-Me:Tt.T!==null?kh():bt()}function o_(){if(ni===0)if((Me&536870912)===0||_e){var t=na;na<<=1,(na&3932160)===0&&(na=262144),ni=t}else ni=536870912;return t=bn.current,t!==null&&(t.flags|=32),ni}function Us(t,n){if(n!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=V_(ra(t.memoizedProps,a))),ws===null&&(ws=[]),ws.push(n.bind(null,o))}}function Yn(t,n,a){(t===qe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Ns(t,0),Za(t,Me,ni,!1)),xr(t,a),((Le&2)===0||t!==qe)&&(t===qe&&((Le&2)===0&&(Ir|=a),rn===4&&Za(t,Me,ni,!1)),Yi(t))}function l_(t,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||wa(t,n),u=o?lE(t,n):zh(t,n,!0),f=o;do{if(u===0){As&&!o&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!sE(a)){u=zh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var M=t;u=Jo;var P=M.current.memoizedState.isDehydrated;if(P&&(Ns(M,_).flags|=256),_=zh(M,_,!1),_!==2&&_!==6){if(Uh&&!P){M.errorRecoveryDisabledLanes|=f,Ir|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Ns(t,0),Za(t,n,0,!0);break}t:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Za(o,n,ni,!qa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=zu+300-G(),10<u)){if(Za(o,n,ni,!qa),_r(o,0,!0)!==0)break t;qi=n,o.timeoutHandle=ed(u_.bind(null,o,a,qn,Bu,Nh,n,ni,Ir,Rs,qa,f,"Throttled",-0,0),u);break t}u_(o,a,qn,Bu,Nh,n,ni,Ir,Rs,qa,f,null,-0,0)}}break}while(!0);Yi(t)}function u_(t,n,a,o,u,f,_,M,P,W,it,gt,j,tt){t.timeoutHandle=-1;var Nt=n.subtreeFlags,qt=(f&335544064)===f;if(gt=null,(qt||Nt&8192||(Nt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ti=null,e_(n,f,gt),qt&&(Nt=gt,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=ol.bind(Nt),qt.finished.then(Nt,Nt))),Nt=(f&62914560)===f?zu-G():(f&4194048)===f?r_-G():0,Nt=cM(gt,Nt),Nt!==null)){qi=f,t.cancelPendingCommit=Nt(v_.bind(null,t,n,f,a,o,u,_,M,P,W,it,gt,null,j,tt)),Za(t,f,_,!W);return}v_(t,n,f,a,o,u,_,M,P,W,it,gt)}function sE(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,o){n=zl(t,n),n&=~Pu,n&=~Ir,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Dn(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&R(t,a,n)}function Hu(){return(Le&6)===0?(tl(0),!1):!0}function Ph(){if(Se!==null){if(ze===0)var t=Se.return;else t=Se,ua=br=null,Xf(t),_s=null,Io=0,t=Se;for(;t!==null;)Nv(t.alternate,t),t=t.return;Se=null}}function Ns(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,DE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,Ph(),qe=t,Se=a=oa(t.current,null),Me=n,ze=0,ei=null,qa=!1,As=wa(t,n),Uh=!1,Rs=ni=Pu=Ir=Ya=rn=0,qn=Jo=null,Nh=!1,ma=zl(t,n),Wl(),a}function c_(t,n){de=null,Tt.H=xu,n===vs||n===ru?(n=vg(),ze=3):n===Df?(n=vg(),ze=4):ze=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,Se===null&&(rn=1,Su(t,fi(n,t.current)))}function f_(){var t=bn.current;return t===null?!0:(Me&4194048)===Me?Nn===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Nn:!1}function h_(){var t=Tt.H;return Tt.H=xu,t===null?xu:t}function d_(){var t=Tt.A;return Tt.A=aE,t}function Vu(){rn=4,qa||(Me&4194048)!==Me&&bn.current!==null||(As=!0),(Ya&134217727)===0&&(Ir&134217727)===0||qe===null||Za(qe,Me,ni,!1)}function zh(t,n,a){var o=Le;Le|=2;var u=h_(),f=d_();(qe!==t||Me!==n)&&(Bu=null,Ns(t,n)),n=!1;var _=rn;t:do try{if(ze!==0&&Se!==null){var M=Se,P=ei;switch(ze){case 8:Ph(),_=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(n=!0);var W=ze;if(ze=0,ei=null,Ls(t,M,P,W),a&&As){_=0;break t}break;default:W=ze,ze=0,ei=null,Ls(t,M,P,W)}}oE(),_=rn;break}catch(it){c_(t,it)}while(!0);return n&&t.shellSuspendCounter++,ua=br=null,Le=o,Tt.H=u,Tt.A=f,Se===null&&(qe=null,Me=0,Wl()),_}function oE(){for(;Se!==null;)p_(Se)}function lE(t,n){var a=Le;Le|=2;var o=h_(),u=d_();qe!==t||Me!==n?(Bu=null,Iu=G()+500,Ns(t,n)):As=wa(t,n);t:do try{if(ze!==0&&Se!==null){n=Se;var f=ei;e:switch(ze){case 1:ze=0,ei=null,Ls(t,n,f,1);break;case 2:case 9:if(mg(f)){ze=0,ei=null,m_(n);break}n=function(){ze!==2&&ze!==9||qe!==t||(ze=7),Yi(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:mg(f)?(ze=0,ei=null,m_(n)):(ze=0,ei=null,Ls(t,n,f,7));break;case 5:var _=null;switch(Se.tag){case 26:_=Se.memoizedState;case 5:case 27:var M=Se;if(_?s0(_):M.stateNode.complete){ze=0,ei=null;var P=M.sibling;if(P!==null)Se=P;else{var W=M.return;W!==null?(Se=W,Gu(W)):Se=null}break e}}ze=0,ei=null,Ls(t,n,f,5);break;case 6:ze=0,ei=null,Ls(t,n,f,6);break;case 8:Ph(),rn=6;break t;default:throw Error(s(462))}}uE();break}catch(it){c_(t,it)}while(!0);return ua=br=null,Tt.H=o,Tt.A=u,Le=a,Se!==null?0:(qe=null,Me=0,Wl(),rn)}function uE(){for(;Se!==null&&!zt();)p_(Se)}function p_(t){var n=Dv(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Gu(t):Se=n}function m_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Mv(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Mv(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Xf(n);var o=n;o===Sn&&(_e?(tu(o),o.tag===5&&o.stateNode!=null&&(Ze=o.stateNode)):(tu(o),_e=!0));default:Nv(a,n),n=Se=ag(n,ma),n=Dv(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Gu(t):Se=n}function Ls(t,n,a,o){ua=br=null,Xf(n),_s=null,Io=0;var u=n.return;try{if(Ky(t,u,n,a,Me)){rn=1,Su(t,fi(a,t.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;rn=1,Su(t,fi(a,t.current)),Se=null;return}n.flags&32768?(_e||o===1?t=!0:As||(Me&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=bn.current,o!==null&&o.tag===13&&(o.flags|=16384))),g_(n,t)):Gu(n)}function Gu(t){var n=t;do{if((n.flags&32768)!==0){g_(n,qa);return}t=n.return;var a=tE(n.alternate,n,ma);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);rn===0&&(rn=5)}function g_(t,n){do{var a=eE(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);rn=6,Se=null}function v_(t,n,a,o,u,f,_,M,P,W,it,gt){t.cancelPendingCommit=null;do Xu();while(tn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===qe&&(Se=qe=null,Me=0),Br=n,bi=t,qi=a,Oh=u,s_=o,cE(t,n,a,_,M,P,gt)}}function cE(t,n,a,o,u,f,_){var M=n.lanes|n.childLanes;if(Lh=M,M|=vf,Yc(t,a,M,o,u,f),ws=null,(a&335544064)===a?(Ds=By(t),o=10262):(Ds=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(t.callbackNode=null,t.callbackPriority=0,gE(Et,function(){return Hh(),null})):(t.callbackNode=null,t.callbackPriority=0),Cu=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Tt.T,Tt.T=null,u=Yt.p,Yt.p=2,f=Le,Le|=4;try{nE(t,n,a)}finally{Le=f,Yt.p=u,Tt.T=o}}tn=1,Cu?Cs=zE(_,t.containerInfo,Ds,Ih,Bh,hE,Fh,Hh,fE):(Ih(),Bh(),Fh())}function fE(t){if(tn!==0){var n=bi.onRecoverableError;n(t,{componentStack:null})}}function hE(){tn===3&&(tn=0,$v(Br,bi),tn=4)}function Ih(){if(tn===1){tn=0;var t=bi,n=Br,a=qi,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=Tt.T,Tt.T=null;var u=Yt.p;Yt.p=2;var f=Le;Le|=4;try{Zo=Uu=!1,Qv(n,t,a),a=Jh;var _=Wm(t.containerInfo),M=a.focusedElem,P=a.selectionRange;if(_!==M&&M&&M.ownerDocument&&Ym(M.ownerDocument.documentElement,M)){if(P!==null&&hf(M)){var W=P.start,it=P.end;if(it===void 0&&(it=W),"selectionStart"in M)M.selectionStart=W,M.selectionEnd=Math.min(it,M.value.length);else{var gt=M.ownerDocument||document,j=gt&&gt.defaultView||window;if(j.getSelection){var tt=j.getSelection(),Nt=M.textContent.length,qt=Math.min(P.start,Nt),pe=P.end===void 0?qt:Math.min(P.end,Nt);!tt.extend&&qt>pe&&(_=pe,pe=qt,qt=_);var Y=qm(M,qt),V=qm(M,pe);if(Y&&V&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==V.node||tt.focusOffset!==V.offset)){var J=gt.createRange();J.setStart(Y.node,Y.offset),tt.removeAllRanges(),qt>pe?(tt.addRange(J),tt.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),tt.addRange(J))}}}}for(gt=[],tt=M;tt=tt.parentNode;)tt.nodeType===1&&gt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<gt.length;M++){var pt=gt[M];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Vs=!!Qh,Jh=Qh=null}finally{Le=f,Yt.p=u,Tt.T=o}}t.current=n,tn=2}}function Bh(){if(tn===2){tn=0;var t=bi,n=Br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var o=Yt.p;Yt.p=2;var u=Le;Le|=4;try{jv(t,n.alternate,n)}finally{Le=u,Yt.p=o,Tt.T=a}}tn=3}}function Fh(){if(tn===4||tn===3){tn=0;var t=Cs;Cs=null,he();var n=bi,a=Br,o=qi,u=s_,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?tn=5:(tn=0,Br=bi=null,__(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Wa=null),Q(o),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Ee,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Tt.T,f=Yt.p,Yt.p=2,Tt.T=null;try{for(var _=n.onRecoverableError,M=0;M<u.length;M++){var P=u[M];_(P.value,{componentStack:P.stack})}}finally{Tt.T=a,Yt.p=f}}if(u=ws,_=Ds,Ds=null,u!==null&&(ws=null,_===null&&(_=[]),t!==null))for(P=0;P<u.length;P++)a=(0,u[P])(_),a!==void 0&&t.finished.finally(a);(qi&3)!==0&&Xu(),Yi(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===Fu?$o++:($o=0,Fu=n):($o=0,Fu=null),tl(0)}}function __(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Oo(n)))}function Xu(){return Cs!==null&&(Cs.skipTransition(),Cs=null),Ih(),Bh(),Fh(),Hh()}function Hh(){if(tn!==5)return!1;var t=bi,n=Lh;Lh=0;var a=Q(qi),o=Tt.T,u=Yt.p;try{Yt.p=32>a?32:a,Tt.T=null,a=Oh,Oh=null;var f=bi,_=qi;if(tn=0,Br=bi=null,qi=0,(Le&6)!==0)throw Error(s(331));var M=Le;if(Le|=4,i_(f.current),t_(f,f.current,_,a),Le=M,tl(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{Yt.p=u,Tt.T=o,__(t,n)}}function x_(t,n,a){n=fi(a,n),n=ih(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(xr(t,2),Yi(t))}function Ie(t,n,a){if(t.tag===3)x_(t,t,a);else for(;n!==null;){if(n.tag===3){x_(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){t=fi(a,t),a=mv(2),o=Ha(n,a,2),o!==null&&(gv(a,o,n,t),xr(o,2),Yi(o));break}}n=n.return}}function Vh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new rE;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Uh=!0,u.add(a),t=dE.bind(null,t,n,a),n.then(t,t))}function dE(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Me&a)===a&&((rn===4||rn===3&&(Me&62914560)===Me&&300>G()-zu)&&(Le&2)===0?Ns(t,0):Pu|=a,Rs===Me&&(Rs=0)),Yi(t)}function S_(t,n){n===0&&(n=Il()),t=Er(t,n),t!==null&&(xr(t,n),Yi(t))}function pE(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),S_(t,a)}function mE(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),S_(t,a)}function gE(t,n){return ae(t,n)}var Os=null,Ps=null,Gh=!1,ku=!1,Xh=!1,Ka=0;function Yi(t){t!==Ps&&t.next===null&&(Ps===null?Os=Ps=t:Ps=Ps.next=t),ku=!0,Gh||(Gh=!0,_E())}function tl(t,n){if(!Xh&&ku){Xh=!0;do for(var a=!1,o=Os;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,M=o.pingedLanes;f=(1<<31-Dn(42|t)+1)-1,f&=u&~(_&~M),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,T_(o,f))}else f=Me,f=_r(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||wa(o,f)||(a=!0,T_(o,f));o=o.next}while(a);Xh=!1}}function vE(){y_()}function y_(){ku=Gh=!1;var t=0;Ka!==0&&wE()&&(t=Ka);for(var n=G(),a=null,o=Os;o!==null;){var u=o.next,f=E_(o,n);f===0?(o.next=null,a===null?Os=u:a.next=u,u===null&&(Ps=a)):(a=o,(t!==0||(f&3)!==0)&&(ku=!0)),o=u}tn!==0&&tn!==5||tl(t),Ka!==0&&(Ka=0)}function E_(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Dn(f),M=1<<_,P=u[_];P===-1?((M&a)===0||(M&o)!==0)&&(u[_]=qc(M,n)):P<=n&&(t.expiredLanes|=M),f&=~M}if(n=qe,a=Me,a=_r(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Kt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Kt(o),Q(a)){case 2:case 8:a=Xt;break;case 32:a=Et;break;case 268435456:a=Wt;break;default:a=Et}return o=M_.bind(null,t),a=ae(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Kt(o),t.callbackPriority=2,t.callbackNode=null,2}function M_(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xu()&&t.callbackNode!==a)return null;var o=Me;return o=_r(t,t===qe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(l_(t,o,n),E_(t,G()),t.callbackNode!=null&&t.callbackNode===a?M_.bind(null,t):null)}function T_(t,n){if(Xu())return null;l_(t,n,!0)}function _E(){UE(function(){(Le&6)!==0?ae(Ut,vE):y_()})}function kh(){if(Ka===0){var t=Cr;t===0&&(t=gr,gr<<=1,(gr&261888)===0&&(gr=256)),Ka=t}return Ka}function b_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Hl(t)}function xE(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=b_((u[jt]||null).action),_=o.submitter;_&&(n=(n=_[jt]||null)?b_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var M=new kl("action","action",null,o,u);t.push({event:M,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var P=new FormData(u,_);Jf(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(M.preventDefault(),P=new FormData(u,_),Jf(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var jh=0;jh<gf.length;jh++){var qh=gf[jh],SE=qh.toLowerCase(),yE=qh[0].toUpperCase()+qh.slice(1);yi(SE,"on"+yE)}yi(Qm,"onAnimationEnd"),yi(Jm,"onAnimationIteration"),yi($m,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Dy,"onTransitionRun"),yi(Uy,"onTransitionStart"),yi(Ny,"onTransitionCancel"),yi(tg,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function A_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var M=o[_],P=M.instance,W=M.currentTarget;if(M=M.listener,P!==f&&u.isPropagationStopped())break t;f=M,u.currentTarget=W;try{f(u)}catch(it){Yl(it)}u.currentTarget=null,f=P}else for(_=0;_<o.length;_++){if(M=o[_],P=M.instance,W=M.currentTarget,M=M.listener,P!==f&&u.isPropagationStopped())break t;f=M,u.currentTarget=W;try{f(u)}catch(it){Yl(it)}u.currentTarget=null,f=P}}}}function ye(t,n){var a=n[te];a===void 0&&(a=n[te]=new Set);var o=t+"__bubble";a.has(o)||(R_(n,t,2,!1),a.add(o))}function Yh(t,n,a){var o=0;n&&(o|=4),R_(a,t,o,n)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Wh(t){if(!t[ju]){t[ju]=!0,We.forEach(function(a){a!=="selectionchange"&&(EE.has(a)||Yh(a,!1,t),Yh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ju]||(n[ju]=!0,Yh("selectionchange",!1,n))}}function R_(t,n,a,o){switch(g0(n)){case 2:var u=pM;break;case 8:u=mM;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Zh(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var M=o.stateNode.containerInfo;if(M===u)break;if(_===4)for(_=o.return;_!==null;){var P=_.tag;if((P===3||P===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;M!==null;){if(_=Ne(M),_===null)return;if(P=_.tag,P===5||P===6||P===26||P===27){o=f=_;continue t}M=M.parentNode}}o=o.return}Rm(function(){var W=f,it=$c(a),gt=[];t:{var j=eg.get(t);if(j!==void 0){var tt=kl,Nt=t;switch(t){case"keypress":if(Gl(a)===0)break t;case"keydown":case"keyup":tt=sy;break;case"focusin":Nt="focus",tt=sf;break;case"focusout":Nt="blur",tt=sf;break;case"beforeblur":case"afterblur":tt=sf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=fy;break;case Qm:case Jm:case $m:tt=QS;break;case tg:tt=dy;break;case"scroll":case"scrollend":tt=qS;break;case"wheel":tt=my;break;case"copy":case"cut":case"paste":tt=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Nm;break;case"submit":tt=uy;break;case"toggle":case"beforetoggle":tt=vy}var qt=(n&4)!==0,pe=!qt&&(t==="scroll"||t==="scrollend"),Y=qt?j!==null?j+"Capture":null:j;qt=[];for(var V=W,J;V!==null;){var pt=V;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=Mo(V,Y),pt!=null&&qt.push(nl(V,pt,J))),pe)break;V=V.return}0<qt.length&&(j=new tt(j,Nt,null,a,it),gt.push({event:j,listeners:qt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",tt&&a!==Jc&&(Nt=a.relatedTarget||a.fromElement)&&(Ne(Nt)||Nt[ie]))break t;(j||tt)&&(Nt=it.window===it?it:(tt=it.ownerDocument)?tt.defaultView||tt.parentWindow:window,j?(tt=a.relatedTarget||a.toElement,j=W,tt=tt?Ne(tt):null,tt!==null&&(pe=c(tt),qt=tt.tag,tt!==pe||qt!==5&&qt!==27&&qt!==6)&&(tt=null)):(j=null,tt=W),j!==tt&&(qt=Dm,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(qt=Nm,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),pe=j==null?Nt:mn(j),J=tt==null?Nt:mn(tt),Nt=new qt(pt,V+"leave",j,a,it),Nt.target=pe,Nt.relatedTarget=J,pt=null,Ne(it)===W&&(qt=new qt(Y,V+"enter",tt,a,it),qt.target=J,qt.relatedTarget=pe,pt=qt),pe=pt,qt=j&&tt?H(j,tt,ME):null,j!==null&&C_(gt,Nt,j,qt,!1),tt!==null&&pe!==null&&C_(gt,pe,tt,qt,!0)))}t:{if(j=W?mn(W):window,tt=j.nodeName&&j.nodeName.toLowerCase(),tt==="select"||tt==="input"&&j.type==="file")var Gt=Hm;else if(Bm(j))if(Vm)Gt=Ry;else{Gt=by;var Te=Ty}else tt=j.nodeName,!tt||tt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?W&&Qc(W.elementType)&&(Gt=Hm):Gt=Ay;if(Gt&&(Gt=Gt(t,W))){Fm(gt,Gt,a,it);break t}Te&&Te(t,j,W)}switch(Te=W?mn(W):window,t){case"focusin":(Bm(Te)||Te.contentEditable==="true")&&(us=Te,df=W,Uo=null);break;case"focusout":Uo=df=us=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Zm(gt,a,it);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Zm(gt,a,it)}var $t;if(lf)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ls?zm(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Lm&&a.locale!=="ko"&&(ls||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ls&&($t=Cm()):(Ua=it,nf="value"in Ua?Ua.value:Ua.textContent,ls=!0)),Te=qu(W,oe),0<Te.length&&(oe=new Um(oe,t,null,a,it),gt.push({event:oe,listeners:Te}),$t?oe.data=$t:($t=Im(a),$t!==null&&(oe.data=$t)))),($t=xy?Sy(t,a):yy(t,a))&&(oe=qu(W,"onBeforeInput"),0<oe.length&&(Te=new Um("onBeforeInput","beforeinput",null,a,it),gt.push({event:Te,listeners:oe}),Te.data=$t)),xE(gt,t,W,a,it)}A_(gt,n)})}function nl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function qu(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Mo(t,a),u!=null&&o.unshift(nl(t,u,f)),u=Mo(t,n),u!=null&&o.push(nl(t,u,f))),t.tag===3)return o;t=t.return}return[]}function ME(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function C_(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var M=a,P=M.alternate,W=M.stateNode;if(M=M.tag,P!==null&&P===o)break;M!==5&&M!==26&&M!==27||W===null||(P=W,u?(W=Mo(a,f),W!=null&&_.unshift(nl(a,W,P))):u||(W=Mo(a,f),W!=null&&_.push(nl(a,W,P)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var TE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function w_(t){return(typeof t=="string"?t:""+t).replace(TE,`
`).replace(bE,"")}function D_(t,n){return n=w_(n),w_(t)===n}function Be(t,n,a,o,u,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||rs(t,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&rs(t,""+o);else return;break;case"className":Fl(t,"class",o);break;case"tabIndex":Fl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(t,a,o);break;case"style":bm(t,o,f);return;case"data":if(n!=="object"){Fl(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Hl(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",u.name,u,null),Be(t,n,"formEncType",u.formEncType,u,null),Be(t,n,"formMethod",u.formMethod,u,null),Be(t,n,"formTarget",u.formTarget,u,null)):(Be(t,n,"encType",u.encType,u,null),Be(t,n,"method",u.method,u,null),Be(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Hl(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ii);return;case"onScroll":o!=null&&ye("scroll",t);return;case"onScrollEnd":o!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Hl(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":ye("beforetoggle",t),ye("toggle",t),Bl(t,"popover",o);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Bl(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=kS.get(a)||a,Bl(t,a,o);else return}we=!0}function Kh(t,n,a,o,u,f){switch(a){case"style":bm(t,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")rs(t,o);else if(typeof o=="number"||typeof o=="bigint")rs(t,""+o);else return;break;case"onScroll":o!=null&&ye("scroll",t);return;case"onScrollEnd":o!=null&&ye("scrollend",t);return;case"onClick":o!=null&&(t.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Pn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[jt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,o,u);break t}we=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):Bl(t,a,o)}return}we=!0}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,_,a,null)}}u&&Be(t,n,"srcSet",a.srcSet,a,null),o&&Be(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var M=f=_=u=null,P=null,W=null;for(o in a)if(a.hasOwnProperty(o)){var it=a[o];if(it!=null)switch(o){case"name":u=it;break;case"type":_=it;break;case"checked":P=it;break;case"defaultChecked":W=it;break;case"value":f=it;break;case"defaultValue":M=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Be(t,n,o,it,a,null)}}ym(t,f,M,P,W,_,u,!1);return;case"select":ye("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(M=a[u],M!=null))switch(u){case"value":f=M;break;case"defaultValue":_=M;break;case"multiple":o=M;default:Be(t,n,u,M,a,null)}n=f,a=_,t.multiple=!!o,n!=null?as(t,!!o,n,!1):a!=null&&as(t,!!o,a,!0);return;case"textarea":ye("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(M=a[_],M!=null))switch(_){case"value":o=M;break;case"defaultValue":u=M;break;case"children":f=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(91));break;default:Be(t,n,_,M,a,null)}Mm(t,o,u,f);return;case"option":for(P in a)a.hasOwnProperty(P)&&(o=a[P],o!=null)&&(P==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Be(t,n,P,o,a,null));return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(o=0;o<el.length;o++)ye(el[o],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(o=a[W],o!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,W,o,a,null)}return;default:if(Qc(n)){for(it in a)a.hasOwnProperty(it)&&(o=a[it],o!==void 0&&Kh(t,n,it,o,a,void 0));return}}for(M in a)a.hasOwnProperty(M)&&(o=a[M],o!=null&&Be(t,n,M,o,a,null))}var AE={};function RE(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,M=null,P=null,W=null,it=null;for(tt in a){var gt=a[tt];if(a.hasOwnProperty(tt)&&gt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":P=gt;default:o.hasOwnProperty(tt)||Be(t,n,tt,null,o,gt)}}for(var j in o){var tt=o[j];if(gt=a[j],o.hasOwnProperty(j)&&(tt!=null||gt!=null))switch(j){case"type":tt!==gt&&(we=!0),f=tt;break;case"name":tt!==gt&&(we=!0),u=tt;break;case"checked":tt!==gt&&(we=!0),W=tt;break;case"defaultChecked":tt!==gt&&(we=!0),it=tt;break;case"value":tt!==gt&&(we=!0),_=tt;break;case"defaultValue":tt!==gt&&(we=!0),M=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==gt&&Be(t,n,j,tt,o,gt)}}Zc(t,_,M,P,W,it,f,u);return;case"select":tt=_=M=j=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":tt=P;default:o.hasOwnProperty(f)||Be(t,n,f,null,o,P)}for(u in o)if(f=o[u],P=a[u],o.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":f!==P&&(we=!0),j=f;break;case"defaultValue":f!==P&&(we=!0),M=f;break;case"multiple":f!==P&&(we=!0),_=f;default:f!==P&&Be(t,n,u,f,o,P)}n=M,a=_,o=tt,j!=null?as(t,!!a,j,!1):!!o!=!!a&&(n!=null?as(t,!!a,n,!0):as(t,!!a,a?[]:"",!1));return;case"textarea":tt=j=null;for(M in a)if(u=a[M],a.hasOwnProperty(M)&&u!=null&&!o.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:Be(t,n,M,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(we=!0),j=u;break;case"defaultValue":u!==f&&(we=!0),tt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(t,n,_,u,o,f)}Em(t,j,tt);return;case"option":for(var Nt in a)j=a[Nt],a.hasOwnProperty(Nt)&&j!=null&&!o.hasOwnProperty(Nt)&&(Nt==="selected"?t.selected=!1:Be(t,n,Nt,null,o,j));for(P in o)j=o[P],tt=a[P],o.hasOwnProperty(P)&&j!==tt&&(j!=null||tt!=null)&&(P==="selected"?(j!==tt&&(we=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):Be(t,n,P,j,o,tt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)j=a[qt],a.hasOwnProperty(qt)&&j!=null&&!o.hasOwnProperty(qt)&&Be(t,n,qt,null,o,j);for(W in o)if(j=o[W],tt=a[W],o.hasOwnProperty(W)&&j!==tt&&(j!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:Be(t,n,W,j,o,tt)}return;default:if(Qc(n)){for(var pe in a)j=a[pe],a.hasOwnProperty(pe)&&j!==void 0&&!o.hasOwnProperty(pe)&&Kh(t,n,pe,void 0,o,j);for(it in o)j=o[it],tt=a[it],!o.hasOwnProperty(it)||j===tt||j===void 0&&tt===void 0||Kh(t,n,it,j,o,tt);return}}for(var Y in a)j=a[Y],a.hasOwnProperty(Y)&&j!=null&&!o.hasOwnProperty(Y)&&Be(t,n,Y,null,o,j);for(gt in o)j=o[gt],tt=a[gt],!o.hasOwnProperty(gt)||j===tt||j==null&&tt==null||Be(t,n,gt,j,o,tt)}function U_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,M=u.duration;if(f&&M&&U_(_)){for(_=0,M=u.responseEnd,o+=1;o<a.length;o++){var P=a[o],W=P.startTime;if(W>M)break;var it=P.transferSize,gt=P.initiatorType;it&&U_(gt)&&(P=P.responseEnd,_+=it*(P<M?1:(M-W)/(P-W)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qh=null,Jh=null;function il(t){return t.nodeType===9?t:t.ownerDocument}function N_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function O_(t,n,a,o){return a=il(a).createElement(t),a[Dt]=o,a[jt]=n,Cn(a,t,n),Ce(a),a}function $h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function wE(){var t=window.event;return t&&t.type==="popstate"?t===td?!1:(td=t,!0):(td=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,z_=typeof requestAnimationFrame=="function"?requestAnimationFrame:ed,UE=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(t){return P_.resolve(null).then(t).catch(NE)}:ed;function NE(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function I_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Gs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ud(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ud(a);for(var f=a.firstChild;f;){var _=f.nextSibling,M=f.nodeName;f[Ue]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&ud(t.ownerDocument.body);a=u}while(a);Gs(n)}function B_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function F_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function H_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function LE(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function nd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return LE(n,a,t)}function OE(t){return t.documentElement.clientHeight}function PE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function zE(t,n,a,o,u,f,_,M,P){var W=n.nodeType===9?n:n.ownerDocument;try{var it=W.startViewTransition({update:function(){var j=W.defaultView,tt=j.navigation&&j.navigation.transition,Nt=W.fonts.status;o();var qt=[];if(Nt==="loaded"&&(OE(W),W.fonts.status==="loading"&&qt.push(W.fonts.ready)),Nt=qt.length,t!==null)for(var pe=t.suspenseyImages,Y=0,V=0;V<pe.length;V++){var J=pe[V];if(!J.complete){var pt=J.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<j.innerHeight&&pt.left<j.innerWidth){if(Y+=o0(J),Y>Zu){qt.length=Nt;break}J=new Promise(PE.bind(J)),qt.push(J)}}}if(0<qt.length)return j=Promise.race([Promise.all(qt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(u,u),(tt?Promise.allSettled([tt.finished,j]):j).then(f,f);if(u(),tt)return tt.finished.then(f,f);f()},types:a});W.__reactViewTransition=it;var gt=[];return it.ready.then(function(){for(var j=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<j.length;tt++){var Nt=j[tt],qt=Nt.effect,pe=qt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){gt.push(Nt),Nt=qt.getKeyframes();for(var Y=pe=void 0,V=!0,J=0;J<Nt.length;J++){var pt=Nt[J],Gt=pt.width;if(pe===void 0)pe=Gt;else if(pe!==Gt){V=!1;break}if(Gt=pt.height,Y===void 0)Y=Gt;else if(Y!==Gt){V=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}V&&pe!==void 0&&Y!==void 0&&(qt.setKeyframes(Nt),V=getComputedStyle(qt.target,qt.pseudoElement),V.width!==pe||V.height!==Y)&&(V=Nt[0],V.width=pe,V.height=Y,V=Nt[Nt.length-1],V.width=pe,V.height=Y,qt.setKeyframes(Nt))}}_()},function(j){W.__reactViewTransition===it&&(W.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&P(j)}finally{o(),u(),_()}}),it.finished.finally(function(){for(var j=0;j<gt.length;j++)gt[j].cancel();W.__reactViewTransition===it&&(W.__reactViewTransition=null),M()}),it}catch{return o(),u(),_(),null}}function Fr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Fr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Fr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&o.push(a[u])}return o},Fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function V_(t){return{name:t,group:new Fr("group",t),imagePair:new Fr("image-pair",t),old:new Fr("old",t),new:new Fr("new",t)}}function ai(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ai.prototype.addEventListener=function(t,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(X_(f,t,n,a)===-1){var _=this,M=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(M=function(P){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),o!==null&&(u=_.removeEventListener.bind(_,t,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=zs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:M,cleanup:u}),m(this._fragmentFiber.child,!1,IE,t,M,o)}this._eventListeners=f}};function IE(t,n,a,o){return y(t).addEventListener(n,a,o),!1}ai.prototype.removeEventListener=function(t,n,a){var o=this._eventListeners;if(o!==null&&(n=X_(o,t,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var f=u.cleanup;u=zs(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,BE,t,a,u),o.splice(n,1),f!==null&&f()}};function BE(t,n,a,o){return y(t).removeEventListener(n,a,o),!1}function zs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function G_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function X_(t,n,a,o){if(t.length===0)return-1;o=G_(o);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&G_(f.optionsOrUseCapture)===o)return u}return-1}ai.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];o.addEventListener(f.type,f.attachedListener,zs(f.optionsOrUseCapture))}if(n.appendChild(o),t=o.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],o.removeEventListener(f.type,f.attachedListener,zs(f.optionsOrUseCapture));return n.removeChild(o),t}return n.dispatchEvent(t)},ai.prototype.focus=function(t){m(this._fragmentFiber.child,!0,k_,t,void 0,void 0)};function k_(t,n){return t.tag===6?!1:(t=y(t),KE(t,n))}ai.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,id,n,void 0,void 0);for(var a=n.length-1;0<=a&&!k_(n[a],t);a--);};function id(t,n){return n.push(t),!1}ai.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=il(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,FE,t,void 0,void 0))};function FE(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ai.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,HE,t,void 0,void 0)};function HE(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ai.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,VE,t,void 0,void 0);for(var a=n=0;a<Ai.length;a++){var o=Ai[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):Ai[n++]=o}Ai.length=n}};function VE(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ai=[],ad=!1;function GE(t,n,a){Ai.push({fragmentInstance:t,observer:n,instance:a}),ad||(ad=!0,QE(function(){ad=!1;var o=Ai;Ai=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}ai.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,XE,t,void 0,void 0),t};function XE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ai.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ai.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,id,a,void 0,void 0);var o=y(n);if(a.length===0){if(a=o,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),M=u.compareDocumentPosition(t),P=_&Node.DOCUMENT_POSITION_CONTAINED_BY||M&Node.DOCUMENT_POSITION_CONTAINED_BY;return M=o&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&M&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===t||f&&u===t||P||M?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||kE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function kE(t,n,a,o,u){var f=Ne(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=H(a,f,F),n===null?n=!1:(m(n,!0,L,f,a),f=S,S=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=H(o,f,F),n===null?n=!1:(m(n,!0,D,f,o),f=S,N=S=null,n=f!==null)),n):!1}function j_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ai.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,id,n,void 0,void 0);var a=t!==!1;if(n.length===0){var o=T(this._fragmentFiber);if(o=a?o[1]||o[0]||x(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=y(o),j_(t,a);return}if(o=y(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=y(u),j_(u,a)):y(u).scrollIntoView(t),o+=a?-1:1}};function jE(t,n){return t=y(t),q_(t,n),!1}function q_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Y_(t,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];t.addEventListener(u.type,u.attachedListener,zs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,M=0;M<Ai.length;M++){var P=Ai[M];(P.fragmentInstance!==n||P.observer!==f||P.instance!==t)&&(Ai[_++]=P)}Ai.length=_,f.observe(t)}),q_(t,n))}function qE(t,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];t.removeEventListener(u.type,u.attachedListener,zs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?GE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),ee(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function YE(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ue])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function WE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function W_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ZE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Z_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function K_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function KE(t,n){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function QE(t){z_(function(){z_(function(n){return t(n)})})}function Q_(t,n,a){switch(n=il(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function J_(t,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&Be(t,n,o,null,AE,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ii&&(t.onclick=null),ee(t)}function ud(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ee(t)}var vi=new Map,$_=new Set;function al(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=Yt.d;Yt.d={f:JE,r:$E,D:tM,C:eM,L:nM,m:iM,X:rM,S:aM,M:sM};function JE(){var t=ga.f(),n=Hu();return t||n}function $E(t){var n=ve(t);n!==null&&n.tag===5&&n.type==="form"?ev(n):ga.r(t)}var Is=typeof document>"u"?null:document;function t0(t,n,a){var o=Is;if(o&&typeof n=="string"&&n){var u=ui(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),$_.has(u)||($_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),Ce(n),o.head.appendChild(n)))}}function tM(t){ga.D(t),t0("dns-prefetch",t,null)}function eM(t,n){ga.C(t,n),t0("preconnect",t,n)}function nM(t,n,a){ga.L(t,n,a);var o=Is;if(o&&t&&n){var u='link[rel="preload"][as="'+ui(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ui(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ui(a.imageSizes)+'"]')):u+='[href="'+ui(t)+'"]';var f=u;switch(n){case"style":f=Bs(t);break;case"script":f=Fs(t)}if(!(vi.has(f)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(rl(f))||n==="script"&&o.querySelector(sl(f))))){var _=o.createElement("link");Cn(_,"link",t),n==="style"&&(_[Re]=!0,_.onload=_.onerror=function(){Da(_)}),Ce(_),o.head.appendChild(_)}}}function iM(t,n){ga.m(t,n);var a=Is;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ui(o)+'"][href="'+ui(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Fs(t)}if(!vi.has(f)&&(t=z({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(sl(f)))return}o=a.createElement("link"),Cn(o,"link",t),Ce(o),a.head.appendChild(o)}}}function aM(t,n,a){ga.S(t,n,a);var o=Is;if(o&&t){var u=Kn(o).hoistableStyles,f=Bs(t);n=n||"default";var _=u.get(f);if(!_){var M={loading:0,preload:null};if(_=o.querySelector(rl(f)))M.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&cd(t,a);var P=_=o.createElement("link");Ce(P),Cn(P,"link",t),P._p=new Promise(function(W,it){P.onload=W,P.onerror=it}),P.addEventListener("load",function(){M.loading|=1}),P.addEventListener("error",function(){M.loading|=2}),M.loading|=4,Yu(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:M},u.set(f,_)}}}function rM(t,n){ga.X(t,n);var a=Is;if(a&&t){var o=Kn(a).hoistableScripts,u=Fs(t),f=o.get(u);f||(f=a.querySelector(sl(u)),f||(t=z({src:t,async:!0},n),(n=vi.get(u))&&fd(t,n),f=a.createElement("script"),Ce(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function sM(t,n){ga.M(t,n);var a=Is;if(a&&t){var o=Kn(a).hoistableScripts,u=Fs(t),f=o.get(u);f||(f=a.querySelector(sl(u)),f||(t=z({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&fd(t,n),f=a.createElement("script"),Ce(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function e0(t,n,a,o){var u=(u=je.current)?al(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Bs(a.href),n=Kn(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Bs(a.href);var f=Kn(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(rl(t)))?f._p||(_.instance=f,_.state.loading=5):(f=vi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,f)),oM(u,t,f,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fs(a),n=Kn(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Bs(t){return'href="'+ui(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function n0(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function oM(t,n,a,o){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Re]!==!0){o.loading=1;return}}else n=t.createElement("link"),n[Re]=!0,n.onload=n.onerror=Da.bind(null,n),Cn(n,"link",a),Ce(n),t.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Fs(t){return'[src="'+ui(t)+'"]'}function sl(t){return"script[async]"+t}function i0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ui(a.href)+'"]');if(o)return n.instance=o,Ce(o),o;var u=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ce(o),Cn(o,"style",u),Yu(o,a.precedence,t),n.instance=o;case"stylesheet":u=Bs(a.href);var f=t.querySelector(rl(u));if(f)return n.state.loading|=4,n.instance=f,Ce(f),f;o=n0(a),(u=vi.get(u))&&cd(o,u),f=(t.ownerDocument||t).createElement("link"),Ce(f);var _=f;return _._p=new Promise(function(M,P){_.onload=M,_.onerror=P}),Cn(f,"link",o),n.state.loading|=4,Yu(f,a.precedence,t),n.instance=f;case"script":return f=Fs(a.src),(u=t.querySelector(sl(f)))?(n.instance=u,Ce(u),u):(o=a,(u=vi.get(f))&&(o=z({},a),fd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ce(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yu(o,a.precedence,t));return n.instance}function Yu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var M=o[_];if(M.dataset.precedence===n)f=M;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wu=null;function a0(t,n,a){if(Wu===null){var o=new Map,u=Wu=new Map;u.set(a,o)}else u=Wu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ue]||f[Dt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var M=o.get(_);M?M.push(f):o.set(_,[f])}}return o}function hd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function s0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function o0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function l0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=o0(n),t.suspenseyImages.push(n)),t=fM.bind(t),n.decode().then(t,t))}function uM(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Bs(o.href),f=n.querySelector(rl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ol.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ce(f);return}f=n.ownerDocument||n,o=n0(o),(u=vi.get(u))&&cd(o,u),f=f.createElement("link"),Ce(f);var _=f;_._p=new Promise(function(M,P){_.onload=M,_.onerror=P}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ol.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zu=0;function cM(t,n){return t.stylesheets&&t.count===0&&Qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Zu===0&&(Zu=62500*CE());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Zu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function u0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Qu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ol(){this.count--,u0(this)}function fM(){this.imgCount--,u0(this)}var Ku=null;function Qu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ku=new Map,n.forEach(hM,t),Ku=null,ol.call(t))}function hM(t,n){if(!(n.state.loading&4)){var a=Ku.get(t);if(a)var o=a.get(null);else{a=new Map,Ku.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=ol.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Hs={$$typeof:ut,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function dM(t,n,a,o,u,f,_,M,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.hiddenUpdates=Eo(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function c0(t,n,a,o,u,f,_,M,P,W,it,gt){return t=new dM(t,n,a,_,P,W,it,gt,M),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Uf(f),t}function f0(t){return t?(t=hs,t):hs}function h0(t,n,a,o,u,f){u=f0(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ha(t,o,n),a!==null&&(Yn(a,t,n),Bo(a,t,n))}function d0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){d0(t,n),(t=t.alternate)&&d0(t,n)}function p0(t){if(t.tag===13||t.tag===31){var n=Er(t,67108864);n!==null&&Yn(n,t,67108864),dd(t,67108864)}}function m0(t){if(t.tag===13||t.tag===31){var n=ii();n=ot(n);var a=Er(t,n);a!==null&&Yn(a,t,n),dd(t,n)}}var Vs=!0;function pM(t,n,a,o){var u=Tt.T;Tt.T=null;var f=Yt.p;try{Yt.p=2,pd(t,n,a,o)}finally{Yt.p=f,Tt.T=u}}function mM(t,n,a,o){var u=Tt.T;Tt.T=null;var f=Yt.p;try{Yt.p=8,pd(t,n,a,o)}finally{Yt.p=f,Tt.T=u}}function pd(t,n,a,o){if(Vs){var u=md(o);if(u===null)Zh(t,n,o,Ju,a),v0(t,o);else if(vM(u,t,n,a,o))o.stopPropagation();else if(v0(t,o),n&4&&-1<gM.indexOf(t)){for(;u!==null;){var f=ve(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=li(f.pendingLanes);if(_!==0){var M=f;for(M.pendingLanes|=2,M.entangledLanes|=2;_;){var P=1<<31-Dn(_);M.entanglements[1]|=P,_&=~P}Yi(f),(Le&6)===0&&(Iu=G()+500,tl(0))}}break;case 31:case 13:M=Er(f,2),M!==null&&Yn(M,f,2),Hu(),dd(f,2)}if(f=md(o),f===null&&Zh(t,n,o,Ju,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Zh(t,n,o,null,a)}}function md(t){return t=$c(t),gd(t)}var Ju=null;function gd(t){if(Ju=null,t=Ne(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ju=t,null}function g0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case Ut:return 2;case Xt:return 8;case Et:case _t:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var vd=!1,Ja=null,$a=null,tr=null,ll=new Map,ul=new Map,er=[],gM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function cl(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ve(n),n!==null&&p0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function vM(t,n,a,o,u){switch(n){case"focusin":return Ja=cl(Ja,t,n,a,o,u),!0;case"dragenter":return $a=cl($a,t,n,a,o,u),!0;case"mouseover":return tr=cl(tr,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ll.set(f,cl(ll.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ul.set(f,cl(ul.get(f)||null,t,n,a,o,u)),!0}return!1}function _0(t){var n=Ne(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,It(t.priority,function(){m0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,It(t.priority,function(){m0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Jc=o,a.target.dispatchEvent(o),Jc=null}else return n=ve(a),n!==null&&p0(n),t.blockedOn=a,!1;n.shift()}return!0}function x0(t,n,a){$u(t)&&a.delete(n)}function _M(){vd=!1,Ja!==null&&$u(Ja)&&(Ja=null),$a!==null&&$u($a)&&($a=null),tr!==null&&$u(tr)&&(tr=null),ll.forEach(x0),ul.forEach(x0)}function tc(t,n){t.blockedOn===n&&(t.blockedOn=null,vd||(vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_M)))}var ec=null;function S0(t){ec!==t&&(ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ec===t&&(ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var f=ve(a);f!==null&&(t.splice(n,3),n-=3,Jf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Gs(t){function n(P){return tc(P,t)}Ja!==null&&tc(Ja,t),$a!==null&&tc($a,t),tr!==null&&tc(tr,t),ll.forEach(n),ul.forEach(n);for(var a=0;a<er.length;a++){var o=er[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)_0(a),a.blockedOn===null&&er.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[jt]||null;if(typeof f=="function")_||S0(a);else if(_){var M=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[jt]||null)M=_.formAction;else if(gd(u)!==null)continue}else M=_.action;typeof M=="function"?a[o+1]=M:(a.splice(o,3),o-=3),S0(a)}}}function y0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}nc.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();h0(a,o,t,n,null,null)},nc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;h0(t.current,2,null,t,null,null),Hu(),n[ie]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,t),a===0&&_0(t)}};var E0=e.version;if(E0!=="19.3.1")throw Error(s(527,E0,"19.3.1"));Yt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var xM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Ee=ic.inject(xM),$e=ic}catch{}}return hl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=fv,f=hv,_=dv;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=c0(t,1,!1,null,null,a,o,null,u,f,_,y0),t[ie]=n.current,Wh(t),new _d(n)},hl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=fv,_=hv,M=dv,P=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=c0(t,1,!0,n,a??null,o,u,P,f,_,M,y0),n.context=f0(null),a=n.current,o=ii(),o=ot(o),u=Fa(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,xr(n,a),Yi(n),t[ie]=n.current,Wh(t),new nc(n)},hl.version="19.3.1",hl}var N0;function UM(){if(N0)return yd.exports;N0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yd.exports=DM(),yd.exports}var NM=UM();var Kp=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Hx=/^[\\/]{2}/;function LM(r,e){return e+r.replace(/\\/g,"/")}var L0="popstate";function O0(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function OM(r={}){function e(l,c){let{pathname:h="/",search:d="",hash:p=""}=es(l.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),rp("",{pathname:h,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let h=l.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let p=l.location.href,g=p.indexOf("#");d=g===-1?p:p.slice(0,g)}return d+"#"+(typeof c=="string"?c:uo(c))}function s(l,c){Oi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return zM(e,i,s,r)}function en(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Oi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PM(){return Math.random().toString(36).substring(2,10)}function P0(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function rp(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?es(e):e,state:i,key:e&&e.key||s||PM(),mask:l}}function uo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function es(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function zM(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,h=l.history,d="POP",p=null,g=v();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function v(){return(h.state||{idx:null}).idx}function m(){d="POP";let y=v(),S=y==null?null:y-g;g=y,p&&p({action:d,location:A.location,delta:S})}function x(y,S){d="PUSH";let N=O0(y)?y:rp(A.location,y,S);i&&i(N,y),g=v()+1;let L=P0(N,g),D=A.createHref(N.mask||N);try{h.pushState(L,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(D)}c&&p&&p({action:d,location:A.location,delta:1})}function E(y,S){d="REPLACE";let N=O0(y)?y:rp(A.location,y,S);i&&i(N,y),g=v();let L=P0(N,g),D=A.createHref(N.mask||N);h.replaceState(L,"",D),c&&p&&p({action:d,location:A.location,delta:0})}function T(y){return IM(l,y)}let A={get action(){return d},get location(){return r(l,h)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(L0,m),p=y,()=>{l.removeEventListener(L0,m),p=null}},createHref(y){return e(l,y)},createURL:T,encodeLocation(y){let S=T(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:x,replace:E,go(y){return h.go(y)}};return A}function IM(r,e,i=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),en(s,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:uo(e);return l=l.replace(/ $/,"%20"),!i&&Hx.test(l)&&(l=s+l),new URL(l,s)}function Vx(r,e,i="/"){return BM(r,e,i,!1)}function BM(r,e,i,s,l){let c=typeof e=="string"?es(e):e,h=Aa(c.pathname||"/",i);if(h==null)return null;let d=FM(r),p=null,g=KM(h);for(let v=0;p==null&&v<d.length;++v)p=ZM(d[v],g,s);return p}function FM(r){let e=Gx(r);return HM(e),e}function Gx(r,e=[],i=[],s="",l=!1){let c=(h,d,p=l,g)=>{let v={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&p)return;en(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let m=Ni([s,v.relativePath]),x=i.concat(v);h.children&&h.children.length>0&&(en(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Gx(h.children,e,x,m,p)),!(h.path==null&&!h.index)&&e.push({path:m,score:YM(m,h.index),routesMeta:x.map((E,T)=>{let[A,y]=jx(E.relativePath,E.caseSensitive,T===x.length-1);return{...E,matcher:A,compiledParams:y}})})};return r.forEach((h,d)=>{if(h.path===""||!h.path?.includes("?"))c(h,d);else for(let p of Xx(h.path))c(h,d,!0,p)}),e}function Xx(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let h=Xx(s.join("/")),d=[];return d.push(...h.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...h),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function HM(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:WM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var VM=/^:[\w-]+$/,GM=3,XM=2,kM=1,jM=10,qM=-2,z0=r=>r==="*";function YM(r,e){let i=r.split("/"),s=i.length;return i.some(z0)&&(s+=qM),e&&(s+=XM),i.filter(l=>!z0(l)).reduce((l,c)=>l+(VM.test(c)?GM:c===""?kM:jM),s)}function WM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function ZM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",h=[];for(let d=0;d<s.length;++d){let p=s[d],g=d===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",m={path:p.relativePath,caseSensitive:p.caseSensitive,end:g},x=p.matcher&&p.compiledParams?kx(m,v,p.matcher,p.compiledParams):Oc(m,v),E=p.route;if(!x&&g&&i&&!s[s.length-1].route.index&&(x=Oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:Ni([c,x.pathname]),pathnameBase:$M(Ni([c,x.pathnameBase])),route:E}),x.pathnameBase!=="/"&&(c=Ni([c,x.pathnameBase]))}return h}function Oc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=jx(r.path,r.caseSensitive,r.end);return kx(r,e,i,s)}function kx(r,e,i,s){let l=e.match(i);if(!l)return null;let c=l[0],h=co(c,1),d=l.slice(1);return{params:s.reduce((g,{paramName:v,isOptional:m},x)=>{if(v==="*"){let T=d[x]||"";h=co(c.slice(0,c.length-T.length),1)}const E=d[x];return m&&!E?g[v]=void 0:g[v]=(E||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:h,pattern:r}}function jx(r,e=!1,i=!0){Oi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p,g,v)=>{if(s.push({paramName:d,isOptional:p!=null}),p){let m=v.charAt(g+h.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function KM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Oi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Aa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function QM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?es(r):r,c;return i?(i=Yx(i),i.startsWith("/")||i.startsWith("\\")?c=I0(i.substring(1),"/"):c=I0(i,e)):c=e,{pathname:c,search:tT(s),hash:eT(l)}}function I0(r,e){let i=co(e).split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function bd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function JM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function qx(r){let e=JM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Qp(r,e,i,s=!1){let l;typeof r=="string"?l=es(r):(l={...r},en(!l.pathname||!l.pathname.includes("?"),bd("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),bd("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),bd("#","search","hash",l)));let c=r===""||l.pathname==="",h=c?"/":l.pathname,d;if(h==null)d=i;else{let m=e.length-1;if(!s&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),m-=1;l.pathname=x.join("/")}d=m>=0?e[m]:"/"}let p=QM(l,d),g=h&&h!=="/"&&h.endsWith("/"),v=(c||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var Yx=r=>r.replace(/[\\/]{2,}/g,"/"),Ni=r=>Yx(r.join("/"));function co(r,e=0){let i=r.length;for(;i>e&&r.charCodeAt(i-1)===47;)i--;return i===r.length?r:r.slice(0,i)}var $M=r=>co(r).replace(/^\/*/,"/"),tT=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,eT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,nT=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function iT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function aT(r){let e=r.map(i=>i.route.path).filter(Boolean);return Ni(e)||"/"}var Wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zx(r,e){let i=r;if(typeof i!="string"||!Kp.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Wx)try{let c=new URL(window.location.href),h=Hx.test(i)?new URL(LM(i,c.protocol)):new URL(i),d=Aa(h.pathname,e);h.origin===c.origin&&d!=null?i=d+h.search+h.hash:l=!0}catch{Oi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var B0=new URL("http://localhost");function Kx(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),B0)}catch{return B0}}function Ad(r,e){return r.origin===e.origin&&(r.origin!=="null"||r.protocol===e.protocol&&r.host===e.host)}function rT(r,e){if(r.startsWith("//"))return!0;let i=e.protocol.toLowerCase();return r.toLowerCase().startsWith(i)?e.host===""||r.slice(i.length).startsWith("//"):!1}function Qx(r,e,i,s){let l=null;try{l=r==null?null:new URL(r,i)}catch{}let c=new URL(e,i),h=l!=null&&!Ad(l,i),d=!Ad(c,i);if(s==="reject"){if(h||d)throw new Error("External navigation is not allowed")}else if(d&&(l==null||!rT(r,l)||!Ad(l,c)))throw new Error("External navigation is not allowed")}var Jx=["POST","PUT","PATCH","DELETE"];new Set(Jx);var sT=["GET",...Jx];new Set(sT);var oT=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function lT(r){try{return oT.includes(new URL(r).protocol)}catch{return!1}}var vo=ct.createContext(null);vo.displayName="DataRouter";var Bc=ct.createContext(null);Bc.displayName="DataRouterState";var $x=ct.createContext(!1);function uT(){return ct.useContext($x)}var tS=ct.createContext({isTransitioning:!1});tS.displayName="ViewTransition";var cT=ct.createContext(new Map);cT.displayName="Fetchers";var fT=ct.createContext(null);fT.displayName="Await";var Si=ct.createContext(null);Si.displayName="Navigation";var Cl=ct.createContext(null);Cl.displayName="Location";var ta=ct.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var Jp=ct.createContext(null);Jp.displayName="RouteError";var eS="REACT_ROUTER_ERROR",hT="REDIRECT",dT="ROUTE_ERROR_RESPONSE";function pT(r){if(r.startsWith(`${eS}:${hT}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function mT(r){if(r.startsWith(`${eS}:${dT}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new nT(e.status,e.statusText,e.data)}catch{}}function gT(r,{relative:e}={}){en(wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ct.useContext(Si),{hash:l,pathname:c,search:h}=Dl(r,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:Ni([i,c])),s.createHref({pathname:d,search:h,hash:l})}function wl(){return ct.useContext(Cl)!=null}function Pi(){return en(wl(),"useLocation() may be used only in the context of a <Router> component."),ct.useContext(Cl).location}var nS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function iS(r){ct.useContext(Si).static||ct.useLayoutEffect(r)}function ns(){let{isDataRoute:r}=ct.useContext(ta);return r?DT():vT()}function vT(){en(wl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ct.useContext(vo),{basename:e,navigator:i}=ct.useContext(Si),{matches:s}=ct.useContext(ta),{pathname:l}=Pi(),c=JSON.stringify(qx(s)),h=ct.useRef(!1);return iS(()=>{h.current=!0}),ct.useCallback((p,g={})=>{if(Oi(h.current,nS),!h.current)return;if(typeof p=="number"){i.go(p);return}let v=Qp(p,JSON.parse(c),l,g.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ni([e,v.pathname])),Qx(typeof p=="string"?p:uo(p),i.createHref(v),Kx(i),"reject"),(g.replace?i.replace:i.push)(v,g.state,g)},[e,i,c,l,r])}ct.createContext(null);function _T(){let{matches:r}=ct.useContext(ta);return r[r.length-1]?.params??{}}function Dl(r,{relative:e}={}){let{matches:i}=ct.useContext(ta),{pathname:s}=Pi(),l=JSON.stringify(qx(i));return ct.useMemo(()=>Qp(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function xT(r,e){return aS(r,e)}function aS(r,e,i){en(wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=ct.useContext(Si),{matches:l}=ct.useContext(ta),c=l[l.length-1],h=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",g=c&&c.route;{let y=g&&g.path||"";sS(d,!g||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let v=Pi(),m;if(e){let y=typeof e=="string"?es(e):e;en(p==="/"||y.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${y.pathname}" was given in the \`location\` prop.`),m=y}else m=v;let x=m.pathname||"/",E=x;if(p!=="/"){let y=p.replace(/^\//,"").split("/");E="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let T=i&&i.state.matches.length?i.state.matches.map(y=>Object.assign(y,{route:i.manifest[y.route.id]||y.route})):Vx(r,{pathname:E});Oi(g||T!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Oi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=TT(T&&T.map(y=>Object.assign({},y,{params:Object.assign({},h,y.params),pathname:Ni([p,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:Ni([p,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i);return e&&A?ct.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...m},navigationType:"POP"}},A):A}function ST(){let r=wT(),e=iT(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=ct.createElement(ct.Fragment,null,ct.createElement("p",null,"💿 Hey developer 👋"),ct.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ct.createElement("code",{style:c},"ErrorBoundary")," or"," ",ct.createElement("code",{style:c},"errorElement")," prop on your route.")),ct.createElement(ct.Fragment,null,ct.createElement("h2",null,"Unexpected Application Error!"),ct.createElement("h3",{style:{fontStyle:"italic"}},e),i?ct.createElement("pre",{style:l},i):null,h)}var yT=ct.createElement(ST,null),rS=class extends ct.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=mT(r.digest);i&&(r=i)}let e=r!==void 0?ct.createElement(ta.Provider,{value:this.props.routeContext},ct.createElement(Jp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ct.createElement(ET,{error:r},e):e}};rS.contextType=$x;var Rd=new WeakMap;function ET({children:r,error:e}){let{basename:i,navigator:s}=ct.useContext(Si);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let l=pT(e.digest);if(l){let c=Rd.get(e);if(c)throw c;let h=Zx(l.location,i),d=h.absoluteURL||h.to;if(Qx(l.location,d,Kx(s),"allow-explicit"),lT(d))throw new Error("Invalid redirect location");if(Wx&&!Rd.get(e))if(h.isExternal||l.reloadDocument)window.location.href=d;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:l.replace}));throw Rd.set(e,p),p}return ct.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d}`})}}return r}function MT({routeContext:r,match:e,children:i}){let s=ct.useContext(vo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ct.createElement(ta.Provider,{value:r},i)}function TT(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s?.errors;if(c!=null){let v=l.findIndex(m=>m.route.id&&c?.[m.route.id]!==void 0);en(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let h=!1,d=-1;if(i&&s){h=s.renderFallback;for(let v=0;v<l.length;v++){let m=l[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=v),m.route.id){let{loaderData:x,errors:E}=s,T=m.route.loader&&!x.hasOwnProperty(m.route.id)&&(!E||E[m.route.id]===void 0);if(m.route.lazy||T){i.isStatic&&(h=!0),d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}}let p=i?.onError,g=s&&p?(v,m)=>{p(v,{location:s.location,params:s.matches?.[0]?.params??{},pattern:aT(s.matches),errorInfo:m})}:void 0;return l.reduceRight((v,m,x)=>{let E,T=!1,A=null,y=null;s&&(E=c&&m.route.id?c[m.route.id]:void 0,A=m.route.errorElement||yT,h&&(d<0&&x===0?(sS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,y=null):d===x&&(T=!0,y=m.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,x+1)),N=()=>{let L;return E?L=A:T?L=y:m.route.Component?L=ct.createElement(m.route.Component,null):m.route.element?L=m.route.element:L=v,ct.createElement(MT,{match:m,routeContext:{outlet:v,matches:S,isDataRoute:s!=null},children:L})};return s&&(m.route.ErrorBoundary||m.route.errorElement||x===0)?ct.createElement(rS,{location:s.location,revalidation:s.revalidation,component:A,error:E,children:N(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:g}):N()},null)}function $p(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bT(r){let e=ct.useContext(vo);return en(e,$p(r)),e}function AT(r){let e=ct.useContext(Bc);return en(e,$p(r)),e}function RT(r){let e=ct.useContext(ta);return en(e,$p(r)),e}function tm(r){let e=RT(r),i=e.matches[e.matches.length-1];return en(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function CT(){return tm("useRouteId")}function wT(){let r=ct.useContext(Jp),e=AT("useRouteError"),i=tm("useRouteError");return r!==void 0?r:e.errors?.[i]}function DT(){let{router:r}=bT("useNavigate"),e=tm("useNavigate"),i=ct.useRef(!1);return iS(()=>{i.current=!0}),ct.useCallback(async(l,c={})=>{Oi(i.current,nS),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var F0={};function sS(r,e,i){!e&&!F0[r]&&(F0[r]=!0,Oi(!1,i))}ct.memo(UT);function UT({routes:r,manifest:e,future:i,state:s,isStatic:l,onError:c}){return aS(r,void 0,{manifest:e,state:s,isStatic:l,onError:c})}function ur(r){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NT({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,useTransitions:h}){en(!wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),p=ct.useMemo(()=>({basename:d,navigator:l,static:c,useTransitions:h,future:{}}),[d,l,c,h]);typeof i=="string"&&(i=es(i));let{pathname:g="/",search:v="",hash:m="",state:x=null,key:E="default",mask:T}=i,A=ct.useMemo(()=>{let y=Aa(g,d);return y==null?null:{location:{pathname:y,search:v,hash:m,state:x,key:E,mask:T},navigationType:s}},[d,g,v,m,x,E,s,T]);return Oi(A!=null,`<Router basename="${d}"> is not able to match the URL "${g}${v}${m}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:ct.createElement(Si.Provider,{value:p},ct.createElement(Cl.Provider,{children:e,value:A}))}function LT({children:r,location:e}){return xT(sp(r),e)}function sp(r,e=[]){let i=[];return ct.Children.forEach(r,(s,l)=>{if(!ct.isValidElement(s))return;let c=[...e,l];if(s.type===ct.Fragment){i.push.apply(i,sp(s.props.children,c));return}en(s.type===ur,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=sp(s.props.children,c)),i.push(h)}),i}var Rc="get",Cc="application/x-www-form-urlencoded";function Fc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function OT(r){return Fc(r)&&r.tagName.toLowerCase()==="button"}function PT(r){return Fc(r)&&r.tagName.toLowerCase()==="form"}function zT(r){return Fc(r)&&r.tagName.toLowerCase()==="input"}function IT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function BT(r,e){return r.button===0&&(!e||e==="_self")&&!IT(r)}var ac=null;function FT(){if(ac===null)try{new FormData(document.createElement("form"),0),ac=!1}catch{ac=!0}return ac}var HT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cd(r){return r!=null&&!HT.has(r)?(Oi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cc}"`),null):r}function VT(r,e){let i,s,l,c,h;if(PT(r)){let d=r.getAttribute("action");s=d?Aa(d,e):null,i=r.getAttribute("method")||Rc,l=Cd(r.getAttribute("enctype"))||Cc,c=new FormData(r)}else if(OT(r)||zT(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||d.getAttribute("action");if(s=p?Aa(p,e):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||Rc,l=Cd(r.getAttribute("formenctype"))||Cd(d.getAttribute("enctype"))||Cc,c=new FormData(d,r),!FT()){let{name:g,type:v,value:m}=r;if(v==="image"){let x=g?`${g}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else g&&c.append(g,m)}}else{if(Fc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Rc,s=null,l=Cc,h=r}return c&&l==="text/plain"&&(h=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function em(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function oS(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Aa(l.pathname,e)==="/"?l.pathname=`${co(e)}/_root.${s}`:l.pathname=`${co(l.pathname)}.${s}`,l}async function GT(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function XT(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function kT(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let h=await GT(c,i);return h.links?h.links():[]}return[]}));return WT(s.flat(1).filter(XT).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function H0(r,e,i,s,l,c){let h=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,d=(p,g)=>i[g].pathname!==p.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,g)=>h(p,g)||d(p,g)):c==="data"?e.filter((p,g)=>{let v=s.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(h(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let m=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function jT(r,e,{includeHydrateFallback:i}={}){return qT(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function qT(r){return[...new Set(r)]}function YT(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function WT(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(YT(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function nm(){let r=ct.useContext(vo);return em(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ZT(){let r=ct.useContext(Bc);return em(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var im=ct.createContext(void 0);im.displayName="FrameworkContext";function Hc(){let r=ct.useContext(im);return em(r,"You must render this element inside a <HydratedRouter> element"),r}function KT(r,e){let i=ct.useContext(im),[s,l]=ct.useState(!1),[c,h]=ct.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:m}=e,x=ct.useRef(null);ct.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let A=S=>{S.forEach(N=>{h(N.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[r]),ct.useEffect(()=>{if(s){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[s]);let E=()=>{l(!0)},T=()=>{l(!1),h(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:dl(d,E),onBlur:dl(p,T),onMouseEnter:dl(g,E),onMouseLeave:dl(v,T),onTouchStart:dl(m,E)}]:[!1,x,{}]}function dl(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function QT({page:r,...e}){let i=uT(),{nonce:s}=Hc(),{router:l}=nm(),c=ct.useMemo(()=>Vx(l.routes,r,l.basename),[l.routes,r,l.basename]);return c?(e.nonce==null&&s&&(e={...e,nonce:s}),i?ct.createElement($T,{page:r,matches:c,...e}):ct.createElement(tb,{page:r,matches:c,...e})):null}function JT(r){let{manifest:e,routeModules:i}=Hc(),[s,l]=ct.useState([]);return ct.useEffect(()=>{let c=!1;return kT(r,e,i).then(h=>{c||l(h)}),()=>{c=!0}},[r,e,i]),s}function $T({page:r,matches:e,...i}){let s=Pi(),{future:l}=Hc(),{basename:c}=nm(),h=ct.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let d=oS(r,c,l.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,g=[];for(let v of e)typeof v.route.shouldRevalidate=="function"?p=!0:g.push(v.route.id);return p&&g.length>0&&d.searchParams.set("_routes",g.join(",")),[d.pathname+d.search]},[c,l.v8_trailingSlashAwareDataRequests,r,s,e]);return ct.createElement(ct.Fragment,null,h.map(d=>ct.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...i})))}function tb({page:r,matches:e,...i}){let s=Pi(),{future:l,manifest:c,routeModules:h}=Hc(),{basename:d}=nm(),{loaderData:p,matches:g}=ZT(),v=ct.useMemo(()=>H0(r,e,g,c,s,"data"),[r,e,g,c,s]),m=ct.useMemo(()=>H0(r,e,g,c,s,"assets"),[r,e,g,c,s]),x=ct.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let A=new Set,y=!1;if(e.forEach(N=>{let L=c.routes[N.route.id];!L||!L.hasLoader||(!v.some(D=>D.route.id===N.route.id)&&N.route.id in p&&h[N.route.id]?.shouldRevalidate||L.hasClientLoader?y=!0:A.add(N.route.id))}),A.size===0)return[];let S=oS(r,d,l.v8_trailingSlashAwareDataRequests,"data");return y&&A.size>0&&S.searchParams.set("_routes",e.filter(N=>A.has(N.route.id)).map(N=>N.route.id).join(",")),[S.pathname+S.search]},[d,l.v8_trailingSlashAwareDataRequests,p,s,c,v,e,r,h]),E=ct.useMemo(()=>jT(m,c),[m,c]),T=JT(m);return ct.createElement(ct.Fragment,null,x.map(A=>ct.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),E.map(A=>ct.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),T.map(({key:A,link:y})=>ct.createElement("link",{key:A,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function eb(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var nb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nb&&(window.__reactRouterVersion="7.18.5")}catch{}function ib({basename:r,children:e,useTransitions:i,window:s}){let l=ct.useRef();l.current==null&&(l.current=OM({window:s,v5Compat:!0}));let c=l.current,[h,d]=ct.useState({action:c.action,location:c.location}),p=ct.useCallback(g=>{i===!1?d(g):ct.startTransition(()=>d(g))},[i]);return ct.useLayoutEffect(()=>c.listen(p),[c,p]),ct.createElement(NT,{basename:r,children:e,location:h.location,navigationType:h.action,navigator:c,useTransitions:i})}var lS=ct.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:h,mask:d,state:p,target:g,to:v,preventScrollReset:m,viewTransition:x,defaultShouldRevalidate:E,...T},A){let{basename:y,navigator:S,useTransitions:N}=ct.useContext(Si),L=typeof v=="string"&&Kp.test(v),D=Zx(v,y);v=D.to;let F=gT(v,{relative:l}),H=Pi(),z=null;if(d){let ut=Qp(d,[],H.mask?H.mask.pathname:"/",!0);y!=="/"&&(ut.pathname=ut.pathname==="/"?y:Ni([y,ut.pathname])),z=S.createHref(ut)}let[k,w,C]=KT(s,T),X=ob(v,{replace:h,mask:d,state:p,target:g,preventScrollReset:m,relative:l,viewTransition:x,defaultShouldRevalidate:E,useTransitions:N});function nt(ut){e&&e(ut),ut.defaultPrevented||X(ut)}let ft=!(D.isExternal||c),vt=ct.createElement("a",{...T,...C,href:(ft?z:void 0)||D.absoluteURL||F,onClick:ft?nt:e,ref:eb(A,w),target:g,"data-discover":!L&&i==="render"?"true":void 0});return k&&!L?ct.createElement(ct.Fragment,null,vt,ct.createElement(QT,{page:F})):vt});lS.displayName="Link";var ab=ct.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:h,viewTransition:d,children:p,...g},v){let m=Dl(h,{relative:g.relative}),x=Pi(),E=ct.useContext(Bc),{navigator:T,basename:A}=ct.useContext(Si),y=E!=null&&hb(m)&&d===!0,S=T.encodeLocation?T.encodeLocation(m).pathname:m.pathname,N=x.pathname,L=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(N=N.toLowerCase(),L=L?L.toLowerCase():null,S=S.toLowerCase()),L&&A&&(L=Aa(L,A)||L);const D=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let F=N===S||!l&&N.startsWith(S)&&N.charAt(D)==="/",H=L!=null&&(L===S||!l&&L.startsWith(S)&&L.charAt(S.length)==="/"),z={isActive:F,isPending:H,isTransitioning:y},k=F?e:void 0,w;typeof s=="function"?w=s(z):w=[s,F?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(z):c;return ct.createElement(lS,{...g,"aria-current":k,className:w,ref:v,style:C,to:h,viewTransition:d},typeof p=="function"?p(z):p)});ab.displayName="NavLink";var rb=ct.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:h=Rc,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:m,defaultShouldRevalidate:x,...E},T)=>{let{useTransitions:A}=ct.useContext(Si),y=cb(),S=fb(d,{relative:g}),N=h.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&Kp.test(d),D=F=>{if(p&&p(F),F.defaultPrevented)return;F.preventDefault();let H=F.nativeEvent.submitter,z=H?.getAttribute("formmethod")||h,k=()=>y(H||F.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:g,preventScrollReset:v,viewTransition:m,defaultShouldRevalidate:x});A&&i!==!1?ct.startTransition(()=>k()):k()};return ct.createElement("form",{ref:T,method:N,action:S,onSubmit:s?p:D,...E,"data-discover":!L&&r==="render"?"true":void 0})});rb.displayName="Form";function sb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uS(r){let e=ct.useContext(vo);return en(e,sb(r)),e}function ob(r,{target:e,replace:i,mask:s,state:l,preventScrollReset:c,relative:h,viewTransition:d,defaultShouldRevalidate:p,useTransitions:g}={}){let v=ns(),m=Pi(),x=Dl(r,{relative:h});return ct.useCallback(E=>{if(BT(E,e)){E.preventDefault();let T=i!==void 0?i:uo(m)===uo(x),A=()=>v(r,{replace:T,mask:s,state:l,preventScrollReset:c,relative:h,viewTransition:d,defaultShouldRevalidate:p});g?ct.startTransition(()=>A()):A()}},[m,v,x,i,s,l,e,r,c,h,d,p,g])}var lb=0,ub=()=>`__${String(++lb)}__`;function cb(){let{router:r}=uS("useSubmit"),{basename:e}=ct.useContext(Si),i=CT(),s=r.fetch,l=r.navigate;return ct.useCallback(async(c,h={})=>{let{action:d,method:p,encType:g,formData:v,body:m}=VT(c,e);if(h.navigate===!1){let x=h.fetcherKey||ub();await s(x,i,h.action||d,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:m,formMethod:h.method||p,formEncType:h.encType||g,flushSync:h.flushSync})}else await l(h.action||d,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:m,formMethod:h.method||p,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:i,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,l,e,i])}function fb(r,{relative:e}={}){let{basename:i}=ct.useContext(Si),s=ct.useContext(ta);en(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Dl(r||".",{relative:e})},h=Pi();if(r==null){c.search=h.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(m=>m).forEach(m=>d.append("index",m));let v=d.toString();c.search=v?`?${v}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ni([i,c.pathname])),uo(c)}function hb(r,{relative:e}={}){let i=ct.useContext(tS);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=uS("useViewTransitionState"),l=Dl(r,{relative:e});if(!i.isTransitioning)return!1;let c=Aa(i.currentLocation.pathname,s)||i.currentLocation.pathname,h=Aa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Oc(l.pathname,h)!=null||Oc(l.pathname,c)!=null}const Pc={id:"mg-block",name:"Mahatma Gandhi Block",shortName:"MG BLOCK",university:"VIT-AP UNIVERSITY",status:"Prototype Available"},db={id:"floor-1",name:"Floor 1",label:"FLOOR 1",available:!0},Wr="./panoramas/sample-360.jpg",pb={P1:{id:"P1",label:"P1 · START",panorama:Wr,next:"P2",previous:null,rooms:[]},P2:{id:"P2",label:"P2 · SOUTH CORRIDOR",panorama:Wr,next:"P3",previous:"P1",rooms:[]},P3:{id:"P3",label:"P3 · CENTRAL CORRIDOR",panorama:Wr,next:"P4",previous:"P2",rooms:[]},P4:{id:"P4",label:"P4 · NORTH TURN",panorama:Wr,next:"P5",previous:"P3",rooms:["101"]},P5:{id:"P5",label:"P5 · END",panorama:Wr,next:null,previous:"P4",rooms:["102"]}},mb={101:{id:"101",name:"Room 101",panorama:Wr,entryViewpoint:"P4"},102:{id:"102",name:"Room 102",panorama:Wr,entryViewpoint:"P5"}},gb={width:1e3,height:620,corridorPath:[{x:130,y:500},{x:300,y:500},{x:500,y:500},{x:700,y:500},{x:700,y:380},{x:700,y:260},{x:700,y:150},{x:560,y:150},{x:390,y:150}],viewpoints:[{id:"P1",x:130,y:500,label:"P1 · START"},{id:"P2",x:300,y:500,label:"P2 · SOUTH CORRIDOR"},{id:"P3",x:500,y:500,label:"P3 · CENTRAL CORRIDOR"},{id:"P4",x:700,y:260,label:"P4 · NORTH TURN"},{id:"P5",x:390,y:150,label:"P5 · END"}],rooms:[{id:"101",label:"101",x:790,y:290,entryViewpoint:"P4"},{id:"102",label:"102",x:390,y:70,entryViewpoint:"P5"}],stairs:[{id:"ST1",label:"STAIRCASE",x:850,y:500}],start:{x:80,y:500,label:"START"},end:{x:300,y:150,label:"END"}},cS=ct.createContext(null);function vb({children:r}){const[e,i]=ct.useState("P1"),[s,l]=ct.useState("P4"),c=ct.useMemo(()=>({building:Pc,floor:db,floorMap:gb,viewpoints:pb,rooms:mb}),[]),h=ct.useMemo(()=>({data:c,currentViewpoint:e,setCurrentViewpoint:i,returnViewpoint:s,setReturnViewpoint:l}),[c,e,s]);return O.jsx(cS.Provider,{value:h,children:r})}function Vc(){const r=ct.useContext(cS);if(!r)throw new Error("useCampus must be used inside CampusProvider");return r}function V0(){const r=ns();return O.jsxs("main",{className:"home",children:[O.jsxs("header",{className:"home-header",children:[O.jsxs("button",{className:"brand",onClick:()=>r("/"),children:[O.jsx("span",{className:"brand-icon",children:"C"}),O.jsxs("span",{children:[O.jsx("b",{children:"CAMPUS 360°"}),O.jsx("small",{children:"VIT-AP VIRTUAL NAVIGATION"})]})]}),O.jsx("span",{className:"status",children:"● PROTOTYPE · MG BLOCK"})]}),O.jsxs("section",{className:"hero",children:[O.jsxs("div",{className:"hero-copy",children:[O.jsx("span",{className:"eyebrow",children:"DIGITAL CAMPUS EXPERIENCE"}),O.jsxs("h1",{children:["Explore VIT-AP",O.jsx("br",{}),O.jsx("em",{children:"from anywhere."})]}),O.jsx("p",{children:"An interactive 360° virtual navigation experience for exploring campus buildings, corridors and rooms."}),O.jsxs("div",{className:"actions",children:[O.jsx("button",{className:"primary",onClick:()=>r("/buildings"),children:"Explore Campus →"}),O.jsx("button",{className:"secondary",onClick:()=>document.getElementById("how")?.scrollIntoView({behavior:"smooth"}),children:"How It Works"})]}),O.jsxs("div",{className:"metrics",children:[O.jsxs("span",{children:[O.jsx("b",{children:"360°"}),"Immersive views"]}),O.jsxs("span",{children:[O.jsx("b",{children:"01"}),"Prototype floor"]}),O.jsxs("span",{children:[O.jsx("b",{children:"05"}),"Viewpoints"]})]})]}),O.jsxs("div",{className:"hero-art",children:[O.jsx("div",{className:"grid"}),O.jsxs("div",{className:"building",children:[O.jsxs("div",{className:"roof",children:["MG BLOCK",O.jsx("br",{}),O.jsx("small",{children:"FLOOR 01"})]}),O.jsx("div",{className:"face front",children:Array.from({length:12},(e,i)=>O.jsx("i",{},i))}),O.jsx("div",{className:"face side",children:Array.from({length:8},(e,i)=>O.jsx("i",{},i))}),O.jsx("div",{className:"nodes",children:Array.from({length:5},(e,i)=>O.jsx("b",{},i))})]}),O.jsx("span",{className:"float one",children:"◉ 360° Navigation"}),O.jsx("span",{className:"float two",children:"◇ Virtual Tour"}),O.jsx("span",{className:"float three",children:"✦ Indoor Exploration"})]})]}),O.jsxs("section",{id:"how",className:"how",children:[O.jsx("span",{className:"eyebrow",children:"SIMPLE BY DESIGN"}),O.jsxs("h2",{children:["From floor plan to ",O.jsx("em",{children:"presence."})]}),O.jsxs("div",{className:"steps",children:[O.jsxs("article",{children:[O.jsx("b",{children:"01"}),O.jsx("h3",{children:"Select a block"}),O.jsx("p",{children:"Start with Mahatma Gandhi Block."})]}),O.jsxs("article",{children:[O.jsx("b",{children:"02"}),O.jsx("h3",{children:"Pick a viewpoint"}),O.jsx("p",{children:"Choose a blue 360° node on the floor map."})]}),O.jsxs("article",{children:[O.jsx("b",{children:"03"}),O.jsx("h3",{children:"Explore in 360°"}),O.jsx("p",{children:"Move through corridors and enter rooms."})]})]})]})]})}function so(){const r=ns(),e=Pi(),{data:i,currentViewpoint:s}=Vc(),l=e.pathname.startsWith("/panorama")||e.pathname.startsWith("/room");return O.jsxs("header",{className:"header",children:[O.jsxs("button",{className:"brand",onClick:()=>r("/"),children:[O.jsx("span",{className:"brand-icon",children:"C"}),O.jsxs("span",{children:[O.jsx("b",{children:"CAMPUS 360°"}),O.jsx("small",{children:"VIT-AP VIRTUAL NAVIGATION"})]})]}),O.jsxs("div",{className:"header-crumb",children:[i.building.shortName," ",O.jsx("i",{children:"/"})," ",i.floor.label,l&&O.jsxs(O.Fragment,{children:[" ",O.jsx("i",{children:"/"})," ",s]})]}),O.jsxs("div",{className:"header-actions",children:[e.pathname!=="/"&&O.jsx("button",{onClick:()=>r(-1),children:"← Back"}),e.pathname!=="/map"&&e.pathname!=="/"&&O.jsx("button",{onClick:()=>r("/map"),children:"⌖ Floor Map"})]})]})}function _b(){const r=ns();return O.jsxs("main",{className:"page",children:[O.jsx(so,{}),O.jsxs("div",{className:"content",children:[O.jsx("div",{className:"eyebrow",children:"CAMPUS DIRECTORY"}),O.jsx("h1",{children:"Select building"}),O.jsx("p",{className:"lead",children:"Choose an available building to begin your virtual indoor journey."}),O.jsxs("button",{className:"building-card",onClick:()=>r("/buildings/mg-block"),children:[O.jsx("div",{className:"building-art",children:O.jsx("div",{className:"mini-building",children:Array.from({length:12},(e,i)=>O.jsx("i",{},i))})}),O.jsxs("div",{className:"building-info",children:[O.jsx("span",{className:"available",children:"● PROTOTYPE AVAILABLE"}),O.jsx("h2",{children:Pc.name}),O.jsx("p",{children:Pc.university}),O.jsx("div",{className:"meta",children:"Central Block · 01 floor implemented"})]}),O.jsx("strong",{className:"arrow",children:"→"})]})]})]})}function xb(){const r=ns();return O.jsxs("main",{className:"page",children:[O.jsx(so,{}),O.jsxs("div",{className:"content",children:[O.jsxs("div",{className:"eyebrow",children:[Pc.shortName," · LEVELS"]}),O.jsx("h1",{children:"Select floor"}),O.jsx("p",{className:"lead",children:"The prototype currently includes one mapped floor with connected panorama viewpoints."}),O.jsxs("div",{className:"floor-grid",children:[O.jsxs("button",{className:"floor-card",onClick:()=>r("/map"),children:[O.jsx("span",{className:"floor-no",children:"01"}),O.jsx("span",{className:"available",children:"● AVAILABLE"}),O.jsxs("div",{className:"u-shape",children:[O.jsx("i",{}),O.jsx("i",{}),O.jsx("i",{})]}),O.jsxs("div",{className:"floor-bottom",children:[O.jsxs("div",{children:[O.jsx("h2",{children:"Floor 1"}),O.jsx("p",{children:"Virtual tour available"})]}),O.jsx("b",{children:"→"})]})]}),O.jsxs("div",{className:"coming",children:[O.jsx("b",{children:"＋"}),O.jsx("h3",{children:"More floors"}),O.jsx("p",{children:"Additional levels can be added when their geometry and panorama data are supplied."}),O.jsx("small",{children:"COMING SOON"})]})]})]})]})}function Sb({onSelect:r}){const{data:e,currentViewpoint:i}=Vc(),s=e.floorMap,[l,c]=ct.useState(null),h=s.corridorPath.map((d,p)=>`${p?"L":"M"} ${d.x} ${d.y}`).join(" ");return O.jsxs("div",{className:"map-shell",children:[O.jsxs("svg",{viewBox:`0 0 ${s.width} ${s.height}`,className:"map-svg",children:[O.jsxs("defs",{children:[O.jsx("filter",{id:"shadow",children:O.jsx("feDropShadow",{dx:"0",dy:"14",stdDeviation:"12",floodOpacity:".25"})}),O.jsxs("filter",{id:"glow",children:[O.jsx("feGaussianBlur",{stdDeviation:"5",result:"blur"}),O.jsxs("feMerge",{children:[O.jsx("feMergeNode",{in:"blur"}),O.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),O.jsx("rect",{x:"30",y:"30",width:"940",height:"560",rx:"30",fill:"#dce7ee",filter:"url(#shadow)"}),O.jsxs("g",{opacity:".2",children:[Array.from({length:20},(d,p)=>O.jsx("line",{x1:60+p*45,y1:"50",x2:60+p*45,y2:"570",stroke:"#6e8796"},"v"+p)),Array.from({length:12},(d,p)=>O.jsx("line",{x1:"50",y1:70+p*42,x2:"950",y2:70+p*42,stroke:"#6e8796"},"h"+p))]}),O.jsx("path",{d:h,fill:"none",stroke:"#8fa4b0",strokeWidth:"116",strokeLinecap:"round",strokeLinejoin:"round"}),O.jsx("path",{d:h,fill:"none",stroke:"#f8fbfd",strokeWidth:"94",strokeLinecap:"round",strokeLinejoin:"round"}),O.jsx("path",{d:h,fill:"none",stroke:"#56a8d7",strokeWidth:"3",strokeDasharray:"9 12",opacity:".55"}),s.rooms.map(d=>O.jsxs("g",{children:[O.jsx("rect",{x:d.x,y:d.y,width:"105",height:"68",rx:"12",fill:"#c5d4dd",stroke:"#849ba9",strokeWidth:"2"}),O.jsx("rect",{x:d.x+9,y:d.y+9,width:"87",height:"50",rx:"8",fill:"#edf4f7"}),O.jsxs("text",{x:d.x+52,y:d.y+40,textAnchor:"middle",className:"room-text",children:["ROOM ",d.label]})]},d.id)),s.stairs.map(d=>O.jsxs("g",{transform:`translate(${d.x} ${d.y})`,children:[O.jsx("rect",{x:"-42",y:"-28",width:"84",height:"56",rx:"10",fill:"#162a3a"}),[-24,-12,0,12,24].map(p=>O.jsx("line",{x1:p,y1:"-18",x2:p,y2:"18",stroke:"white",opacity:".7"},p)),O.jsx("text",{y:"44",textAnchor:"middle",className:"small-label",children:"STAIRCASE"})]},d.id)),O.jsxs("g",{transform:`translate(${s.start.x} ${s.start.y})`,children:[O.jsx("circle",{r:"18",fill:"#102131"}),O.jsx("circle",{r:"8",fill:"#44d69b"}),O.jsx("text",{y:"-27",textAnchor:"middle",className:"map-tag",children:"START"})]}),O.jsxs("g",{transform:`translate(${s.end.x} ${s.end.y})`,children:[O.jsx("circle",{r:"18",fill:"#102131"}),O.jsx("circle",{r:"8",fill:"#ff7b86"}),O.jsx("text",{y:"-27",textAnchor:"middle",className:"map-tag",children:"END"})]}),s.viewpoints.map(d=>O.jsxs("g",{transform:`translate(${d.x} ${d.y})`,className:"view-node",onMouseEnter:()=>c(d.id),onMouseLeave:()=>c(null),onClick:()=>r(d.id),children:[d.id===i&&O.jsxs("circle",{r:"28",fill:"#1686ff",opacity:".14",children:[O.jsx("animate",{attributeName:"r",from:"20",to:"34",dur:"1.6s",repeatCount:"indefinite"}),O.jsx("animate",{attributeName:"opacity",from:".25",to:"0",dur:"1.6s",repeatCount:"indefinite"})]}),O.jsx("circle",{r:"19",fill:"#1686ff",opacity:".18",filter:"url(#glow)"}),O.jsx("circle",{r:"11",fill:"#087dff",stroke:"white",strokeWidth:"3"}),d.id===i&&O.jsx("circle",{r:"4",fill:"white"}),l===d.id&&O.jsxs("g",{transform:"translate(18 -58)",children:[O.jsx("rect",{width:"190",height:"45",rx:"10",fill:"#081827"}),O.jsxs("text",{x:"13",y:"19",className:"tip-title",children:["Viewpoint ",d.id]}),O.jsx("text",{x:"13",y:"35",className:"tip-sub",children:"Click to enter 360°"})]})]},d.id))]}),O.jsxs("div",{className:"map-caption",children:[O.jsx("span",{children:"● BLUE = 360° VIEWPOINT"}),O.jsx("span",{children:"PLACEHOLDER GEOMETRY · NOT TO SCALE"})]})]})}function yb(){const r=ns(),{data:e,currentViewpoint:i,setCurrentViewpoint:s}=Vc(),l=c=>{s(c),r("/panorama/"+c)};return O.jsxs("main",{className:"page map-page",children:[O.jsx(so,{}),O.jsxs("div",{className:"content wide",children:[O.jsx("div",{className:"eyebrow",children:"DIGITAL TWIN · LEVEL 01"}),O.jsxs("div",{className:"map-heading",children:[O.jsxs("div",{children:[O.jsxs("h1",{children:[e.building.shortName," ",O.jsx("span",{children:"/"})," Floor 1"]}),O.jsx("p",{className:"lead",children:"Click a glowing blue viewpoint to enter the 360° corridor."})]}),O.jsx("span",{className:"system",children:"● SYSTEM READY · 05 VIEWPOINTS"})]}),O.jsxs("div",{className:"map-layout",children:[O.jsxs("aside",{children:[O.jsxs("div",{className:"side-card",children:[O.jsx("small",{children:"CURRENT LOCATION"}),O.jsx("strong",{children:i}),O.jsx("span",{children:e.viewpoints[i]?.label}),O.jsx("button",{onClick:()=>r("/panorama/"+i),children:"Enter current view →"})]}),O.jsxs("div",{className:"side-card",children:[O.jsx("small",{children:"NAVIGATION"}),O.jsx("p",{children:"Blue nodes are panorama locations. Room markers appear where a room panorama is available."})]}),O.jsxs("div",{className:"side-card legend",children:[O.jsx("small",{children:"LEGEND"}),O.jsx("p",{children:"🔵 360° Viewpoint"}),O.jsx("p",{children:"🟢 Start"}),O.jsx("p",{children:"🔴 End"}),O.jsx("p",{children:"🚪 Room"}),O.jsx("p",{children:"▣ Staircase"})]})]}),O.jsx(Sb,{onSelect:l})]}),O.jsx("p",{className:"disclaimer",children:"Placeholder geometry — not to scale. Replace with verified VIT-AP measurements later."})]})]})}const am="180",Eb=0,G0=1,Mb=2,fS=1,Tb=2,Ea=3,dr=0,Zn=1,Ma=2,fr=0,oo=1,X0=2,k0=3,j0=4,bb=5,Zr=100,Ab=101,Rb=102,Cb=103,wb=104,Db=200,Ub=201,Nb=202,Lb=203,op=204,lp=205,Ob=206,Pb=207,zb=208,Ib=209,Bb=210,Fb=211,Hb=212,Vb=213,Gb=214,up=0,cp=1,fp=2,fo=3,hp=4,dp=5,pp=6,mp=7,hS=0,Xb=1,kb=2,hr=0,jb=1,qb=2,Yb=3,Wb=4,Zb=5,Kb=6,Qb=7,dS=300,ho=301,po=302,gp=303,vp=304,Gc=306,_p=1e3,Qr=1001,xp=1002,Li=1003,Jb=1004,rc=1005,Zi=1006,wd=1007,Jr=1008,Ra=1009,pS=1010,mS=1011,yl=1012,rm=1013,$r=1014,Ta=1015,Ul=1016,sm=1017,om=1018,El=1020,gS=35902,vS=35899,_S=1021,xS=1022,Ui=1023,Ml=1026,Tl=1027,SS=1028,lm=1029,yS=1030,um=1031,cm=1033,wc=33776,Dc=33777,Uc=33778,Nc=33779,Sp=35840,yp=35841,Ep=35842,Mp=35843,Tp=36196,bp=37492,Ap=37496,Rp=37808,Cp=37809,wp=37810,Dp=37811,Up=37812,Np=37813,Lp=37814,Op=37815,Pp=37816,zp=37817,Ip=37818,Bp=37819,Fp=37820,Hp=37821,Vp=36492,Gp=36494,Xp=36495,kp=36283,jp=36284,qp=36285,Yp=36286,$b=3200,tA=3201,eA=0,nA=1,cr="",Wn="srgb",mo="srgb-linear",zc="linear",Ge="srgb",Xs=7680,q0=519,iA=512,aA=513,rA=514,ES=515,sA=516,oA=517,lA=518,uA=519,Y0=35044,W0="300 es",Ki=2e3,Ic=2001;class _o{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Z0=1234567;const xl=Math.PI/180,bl=180/Math.PI;function xo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function be(r,e,i){return Math.max(e,Math.min(i,r))}function fm(r,e){return(r%e+e)%e}function cA(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function fA(r,e,i){return r!==e?(i-r)/(e-r):0}function Sl(r,e,i){return(1-i)*r+i*e}function hA(r,e,i,s){return Sl(r,e,1-Math.exp(-i*s))}function dA(r,e=1){return e-Math.abs(fm(r,e*2)-e)}function pA(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function mA(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function gA(r,e){return r+Math.floor(Math.random()*(e-r+1))}function vA(r,e){return r+Math.random()*(e-r)}function _A(r){return r*(.5-Math.random())}function xA(r){r!==void 0&&(Z0=r);let e=Z0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SA(r){return r*xl}function yA(r){return r*bl}function EA(r){return(r&r-1)===0&&r!==0}function MA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function TA(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bA(r,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),g=c((e+s)/2),v=h((e+s)/2),m=c((e-s)/2),x=h((e-s)/2),E=c((s-e)/2),T=h((s-e)/2);switch(l){case"XYX":r.set(d*v,p*m,p*x,d*g);break;case"YZY":r.set(p*x,d*v,p*m,d*g);break;case"ZXZ":r.set(p*m,p*x,d*v,d*g);break;case"XZX":r.set(d*v,p*T,p*E,d*g);break;case"YXY":r.set(p*E,d*v,p*T,d*g);break;case"ZYZ":r.set(p*T,p*E,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ao(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const K0={DEG2RAD:xl,RAD2DEG:bl,generateUUID:xo,clamp:be,euclideanModulo:fm,mapLinear:cA,inverseLerp:fA,lerp:Sl,damp:hA,pingpong:dA,smoothstep:pA,smootherstep:mA,randInt:gA,randFloat:vA,randFloatSpread:_A,seededRandom:xA,degToRad:SA,radToDeg:yA,isPowerOfTwo:EA,ceilPowerOfTwo:MA,floorPowerOfTwo:TA,setQuaternionFromProperEuler:bA,normalize:Hn,denormalize:ao};class ke{constructor(e=0,i=0){ke.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],g=s[l+1],v=s[l+2],m=s[l+3];const x=c[h+0],E=c[h+1],T=c[h+2],A=c[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=v,e[i+3]=m;return}if(d===1){e[i+0]=x,e[i+1]=E,e[i+2]=T,e[i+3]=A;return}if(m!==A||p!==x||g!==E||v!==T){let y=1-d;const S=p*x+g*E+v*T+m*A,N=S>=0?1:-1,L=1-S*S;if(L>Number.EPSILON){const F=Math.sqrt(L),H=Math.atan2(F,S*N);y=Math.sin(y*H)/F,d=Math.sin(d*H)/F}const D=d*N;if(p=p*y+x*D,g=g*y+E*D,v=v*y+T*D,m=m*y+A*D,y===1-d){const F=1/Math.sqrt(p*p+g*g+v*v+m*m);p*=F,g*=F,v*=F,m*=F}}e[i]=p,e[i+1]=g,e[i+2]=v,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],g=s[l+2],v=s[l+3],m=c[h],x=c[h+1],E=c[h+2],T=c[h+3];return e[i]=d*T+v*m+p*E-g*x,e[i+1]=p*T+v*x+g*m-d*E,e[i+2]=g*T+v*E+d*x-p*m,e[i+3]=v*T-d*m-p*x-g*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(s/2),v=d(l/2),m=d(c/2),x=p(s/2),E=p(l/2),T=p(c/2);switch(h){case"XYZ":this._x=x*v*m+g*E*T,this._y=g*E*m-x*v*T,this._z=g*v*T+x*E*m,this._w=g*v*m-x*E*T;break;case"YXZ":this._x=x*v*m+g*E*T,this._y=g*E*m-x*v*T,this._z=g*v*T-x*E*m,this._w=g*v*m+x*E*T;break;case"ZXY":this._x=x*v*m-g*E*T,this._y=g*E*m+x*v*T,this._z=g*v*T+x*E*m,this._w=g*v*m-x*E*T;break;case"ZYX":this._x=x*v*m-g*E*T,this._y=g*E*m+x*v*T,this._z=g*v*T-x*E*m,this._w=g*v*m+x*E*T;break;case"YZX":this._x=x*v*m+g*E*T,this._y=g*E*m+x*v*T,this._z=g*v*T-x*E*m,this._w=g*v*m-x*E*T;break;case"XZY":this._x=x*v*m-g*E*T,this._y=g*E*m-x*v*T,this._z=g*v*T+x*E*m,this._w=g*v*m+x*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],g=i[2],v=i[6],m=i[10],x=s+d+m;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(c-g)*E,this._z=(h-l)*E}else if(s>d&&s>m){const E=2*Math.sqrt(1+s-d-m);this._w=(v-p)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+g)/E}else if(d>m){const E=2*Math.sqrt(1+d-s-m);this._w=(c-g)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+m-s-d);this._w=(h-l)/E,this._x=(c+g)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,g=i._z,v=i._w;return this._x=s*v+h*d+l*g-c*p,this._y=l*v+h*p+c*d-s*g,this._z=c*v+h*g+s*p-l*d,this._w=h*v-s*d-l*p-c*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,d),m=Math.sin((1-i)*v)/g,x=Math.sin(i*v)/g;return this._w=h*m+this._w*x,this._x=s*m+this._x*x,this._y=l*m+this._y*x,this._z=c*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(e=0,i=0,s=0){lt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Q0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Q0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*s),v=2*(d*i-c*l),m=2*(c*s-h*i);return this.x=i+p*g+h*m-d*v,this.y=s+p*v+d*g-c*m,this.z=l+p*m+c*v-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new lt,Q0=new Nl;class me{constructor(e,i,s,l,c,h,d,p,g){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,g)}set(e,i,s,l,c,h,d,p,g){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],v=s[4],m=s[7],x=s[2],E=s[5],T=s[8],A=l[0],y=l[3],S=l[6],N=l[1],L=l[4],D=l[7],F=l[2],H=l[5],z=l[8];return c[0]=h*A+d*N+p*F,c[3]=h*y+d*L+p*H,c[6]=h*S+d*D+p*z,c[1]=g*A+v*N+m*F,c[4]=g*y+v*L+m*H,c[7]=g*S+v*D+m*z,c[2]=x*A+E*N+T*F,c[5]=x*y+E*L+T*H,c[8]=x*S+E*D+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8];return i*h*v-i*d*g-s*c*v+s*d*p+l*c*g-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],m=v*h-d*g,x=d*p-v*c,E=g*c-h*p,T=i*m+s*x+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=m*A,e[1]=(l*g-v*s)*A,e[2]=(d*s-l*h)*A,e[3]=x*A,e[4]=(v*i-l*p)*A,e[5]=(l*c-d*i)*A,e[6]=E*A,e[7]=(s*p-g*i)*A,e[8]=(h*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),g=Math.sin(c);return this.set(s*p,s*g,-s*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Ud.makeScale(e,i)),this}rotate(e){return this.premultiply(Ud.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ud.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ud=new me;function MS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AA(){const r=Al("canvas");return r.style.display="block",r}const J0={};function Rl(r){r in J0||(J0[r]=!0,console.warn(r))}function RA(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const $0=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tx=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CA(){const r={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=lo(l.r),l.g=lo(l.g),l.b=lo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cr?zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Rl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Rl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[mo]:{primaries:e,whitePoint:s,transfer:zc,toXYZ:$0,fromXYZ:tx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:s,transfer:Ge,toXYZ:$0,fromXYZ:tx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const De=CA();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class wA{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ks===void 0&&(ks=Al("canvas")),ks.width=e.width,ks.height=e.height;const l=ks.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ks}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Al("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ba(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DA=0;class hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Nd(l[h].image)):c.push(Nd(l[h]))}else c=Nd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Nd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wA.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UA=0;const Ld=new lt;class Gn extends _o{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Qr,l=Qr,c=Zi,h=Jr,d=Ui,p=Ra,g=Gn.DEFAULT_ANISOTROPY,v=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=xo(),this.name="",this.source=new hm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _p:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _p:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=dS;Gn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,g=p[0],v=p[4],m=p[8],x=p[1],E=p[5],T=p[9],A=p[2],y=p[6],S=p[10];if(Math.abs(v-x)<.01&&Math.abs(m-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(m+A)<.1&&Math.abs(T+y)<.1&&Math.abs(g+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(g+1)/2,D=(E+1)/2,F=(S+1)/2,H=(v+x)/4,z=(m+A)/4,k=(T+y)/4;return L>D&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=z/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=k/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=k/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-T)*(y-T)+(m-A)*(m-A)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(m-A)/N,this.z=(x-v)/N,this.w=Math.acos((g+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this.w=be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this.w=be(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NA extends _o{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Zi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new hm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends NA{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class TS extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LA extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(e=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(c,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),oc.subVectors(this.max,pl),js.subVectors(e.a,pl),qs.subVectors(e.b,pl),Ys.subVectors(e.c,pl),ir.subVectors(qs,js),ar.subVectors(Ys,qs),Hr.subVectors(js,Ys);let i=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-Hr.z,Hr.y,ir.z,0,-ir.x,ar.z,0,-ar.x,Hr.z,0,-Hr.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-Hr.y,Hr.x,0];return!Od(i,js,qs,Ys,oc)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,js,qs,Ys,oc))?!1:(lc.crossVectors(ir,ar),i=[lc.x,lc.y,lc.z],Od(i,js,qs,Ys,oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Ri=new lt,sc=new Ll,js=new lt,qs=new lt,Ys=new lt,ir=new lt,ar=new lt,Hr=new lt,pl=new lt,oc=new lt,lc=new lt,Vr=new lt;function Od(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Vr.fromArray(r,c);const d=l.x*Math.abs(Vr.x)+l.y*Math.abs(Vr.y)+l.z*Math.abs(Vr.z),p=e.dot(Vr),g=i.dot(Vr),v=s.dot(Vr);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>d)return!1}return!0}const OA=new Ll,ml=new lt,Pd=new lt;class dm{constructor(e=new lt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):OA.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ml,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(Pd)),this.expandByPoint(ml.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _a=new lt,zd=new lt,uc=new lt,rr=new lt,Id=new lt,cc=new lt,Bd=new lt;class PA{constructor(e=new lt,i=new lt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){zd.copy(e).add(i).multiplyScalar(.5),uc.copy(i).sub(e).normalize(),rr.copy(this.origin).sub(zd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(uc),d=rr.dot(this.direction),p=-rr.dot(uc),g=rr.lengthSq(),v=Math.abs(1-h*h);let m,x,E,T;if(v>0)if(m=h*p-d,x=h*d-p,T=c*v,m>=0)if(x>=-T)if(x<=T){const A=1/v;m*=A,x*=A,E=m*(m+h*x+2*d)+x*(h*m+x+2*p)+g}else x=c,m=Math.max(0,-(h*x+d)),E=-m*m+x*(x+2*p)+g;else x=-c,m=Math.max(0,-(h*x+d)),E=-m*m+x*(x+2*p)+g;else x<=-T?(m=Math.max(0,-(-h*c+d)),x=m>0?-c:Math.min(Math.max(-c,-p),c),E=-m*m+x*(x+2*p)+g):x<=T?(m=0,x=Math.min(Math.max(-c,-p),c),E=x*(x+2*p)+g):(m=Math.max(0,-(h*c+d)),x=m>0?c:Math.min(Math.max(-c,-p),c),E=-m*m+x*(x+2*p)+g);else x=h>0?-c:c,m=Math.max(0,-(h*x+d)),E=-m*m+x*(x+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(zd).addScaledVector(uc,x),E}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const g=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,x=this.origin;return g>=0?(s=(e.min.x-x.x)*g,l=(e.max.x-x.x)*g):(s=(e.max.x-x.x)*g,l=(e.min.x-x.x)*g),v>=0?(c=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-x.z)*m,p=(e.max.z-x.z)*m):(d=(e.max.z-x.z)*m,p=(e.min.z-x.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,s,l,c){Id.subVectors(i,e),cc.subVectors(s,e),Bd.crossVectors(Id,cc);let h=this.direction.dot(Bd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;rr.subVectors(this.origin,e);const p=d*this.direction.dot(cc.crossVectors(rr,cc));if(p<0)return null;const g=d*this.direction.dot(Id.cross(rr));if(g<0||p+g>h)return null;const v=-d*rr.dot(Bd);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn{constructor(e,i,s,l,c,h,d,p,g,v,m,x,E,T,A,y){vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,g,v,m,x,E,T,A,y)}set(e,i,s,l,c,h,d,p,g,v,m,x,E,T,A,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=p,S[2]=g,S[6]=v,S[10]=m,S[14]=x,S[3]=E,S[7]=T,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Ws.setFromMatrixColumn(e,0).length(),c=1/Ws.setFromMatrixColumn(e,1).length(),h=1/Ws.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),v=Math.cos(c),m=Math.sin(c);if(e.order==="XYZ"){const x=h*v,E=h*m,T=d*v,A=d*m;i[0]=p*v,i[4]=-p*m,i[8]=g,i[1]=E+T*g,i[5]=x-A*g,i[9]=-d*p,i[2]=A-x*g,i[6]=T+E*g,i[10]=h*p}else if(e.order==="YXZ"){const x=p*v,E=p*m,T=g*v,A=g*m;i[0]=x+A*d,i[4]=T*d-E,i[8]=h*g,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=E*d-T,i[6]=A+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*v,E=p*m,T=g*v,A=g*m;i[0]=x-A*d,i[4]=-h*m,i[8]=T+E*d,i[1]=E+T*d,i[5]=h*v,i[9]=A-x*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*v,E=h*m,T=d*v,A=d*m;i[0]=p*v,i[4]=T*g-E,i[8]=x*g+A,i[1]=p*m,i[5]=A*g+x,i[9]=E*g-T,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,E=h*g,T=d*p,A=d*g;i[0]=p*v,i[4]=A-x*m,i[8]=T*m+E,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-g*v,i[6]=E*m+T,i[10]=x-A*m}else if(e.order==="XZY"){const x=h*p,E=h*g,T=d*p,A=d*g;i[0]=p*v,i[4]=-m,i[8]=g*v,i[1]=x*m+A,i[5]=h*v,i[9]=E*m-T,i[2]=T*m-E,i[6]=d*v,i[10]=A*m+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zA,e,IA)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),sr.crossVectors(s,ri),sr.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),sr.crossVectors(s,ri)),sr.normalize(),fc.crossVectors(ri,sr),l[0]=sr.x,l[4]=fc.x,l[8]=ri.x,l[1]=sr.y,l[5]=fc.y,l[9]=ri.y,l[2]=sr.z,l[6]=fc.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],v=s[1],m=s[5],x=s[9],E=s[13],T=s[2],A=s[6],y=s[10],S=s[14],N=s[3],L=s[7],D=s[11],F=s[15],H=l[0],z=l[4],k=l[8],w=l[12],C=l[1],X=l[5],nt=l[9],ft=l[13],vt=l[2],ut=l[6],q=l[10],rt=l[14],Z=l[3],xt=l[7],yt=l[11],Vt=l[15];return c[0]=h*H+d*C+p*vt+g*Z,c[4]=h*z+d*X+p*ut+g*xt,c[8]=h*k+d*nt+p*q+g*yt,c[12]=h*w+d*ft+p*rt+g*Vt,c[1]=v*H+m*C+x*vt+E*Z,c[5]=v*z+m*X+x*ut+E*xt,c[9]=v*k+m*nt+x*q+E*yt,c[13]=v*w+m*ft+x*rt+E*Vt,c[2]=T*H+A*C+y*vt+S*Z,c[6]=T*z+A*X+y*ut+S*xt,c[10]=T*k+A*nt+y*q+S*yt,c[14]=T*w+A*ft+y*rt+S*Vt,c[3]=N*H+L*C+D*vt+F*Z,c[7]=N*z+L*X+D*ut+F*xt,c[11]=N*k+L*nt+D*q+F*yt,c[15]=N*w+L*ft+D*rt+F*Vt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],g=e[13],v=e[2],m=e[6],x=e[10],E=e[14],T=e[3],A=e[7],y=e[11],S=e[15];return T*(+c*p*m-l*g*m-c*d*x+s*g*x+l*d*E-s*p*E)+A*(+i*p*E-i*g*x+c*h*x-l*h*E+l*g*v-c*p*v)+y*(+i*g*m-i*d*E-c*h*m+s*h*E+c*d*v-s*g*v)+S*(-l*d*v-i*p*m+i*d*x+l*h*m-s*h*x+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],m=e[9],x=e[10],E=e[11],T=e[12],A=e[13],y=e[14],S=e[15],N=m*y*g-A*x*g+A*p*E-d*y*E-m*p*S+d*x*S,L=T*x*g-v*y*g-T*p*E+h*y*E+v*p*S-h*x*S,D=v*A*g-T*m*g+T*d*E-h*A*E-v*d*S+h*m*S,F=T*m*p-v*A*p-T*d*x+h*A*x+v*d*y-h*m*y,H=i*N+s*L+l*D+c*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return e[0]=N*z,e[1]=(A*x*c-m*y*c-A*l*E+s*y*E+m*l*S-s*x*S)*z,e[2]=(d*y*c-A*p*c+A*l*g-s*y*g-d*l*S+s*p*S)*z,e[3]=(m*p*c-d*x*c-m*l*g+s*x*g+d*l*E-s*p*E)*z,e[4]=L*z,e[5]=(v*y*c-T*x*c+T*l*E-i*y*E-v*l*S+i*x*S)*z,e[6]=(T*p*c-h*y*c-T*l*g+i*y*g+h*l*S-i*p*S)*z,e[7]=(h*x*c-v*p*c+v*l*g-i*x*g-h*l*E+i*p*E)*z,e[8]=D*z,e[9]=(T*m*c-v*A*c-T*s*E+i*A*E+v*s*S-i*m*S)*z,e[10]=(h*A*c-T*d*c+T*s*g-i*A*g-h*s*S+i*d*S)*z,e[11]=(v*d*c-h*m*c-v*s*g+i*m*g+h*s*E-i*d*E)*z,e[12]=F*z,e[13]=(v*A*l-T*m*l+T*s*x-i*A*x-v*s*y+i*m*y)*z,e[14]=(T*d*l-h*A*l-T*s*p+i*A*p+h*s*y-i*d*y)*z,e[15]=(h*m*l-v*d*l+v*s*p-i*m*p-h*s*x+i*d*x)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,g=c*h,v=c*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,v*d+s,v*p-l*h,0,g*p-l*d,v*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,g=c+c,v=h+h,m=d+d,x=c*g,E=c*v,T=c*m,A=h*v,y=h*m,S=d*m,N=p*g,L=p*v,D=p*m,F=s.x,H=s.y,z=s.z;return l[0]=(1-(A+S))*F,l[1]=(E+D)*F,l[2]=(T-L)*F,l[3]=0,l[4]=(E-D)*H,l[5]=(1-(x+S))*H,l[6]=(y+N)*H,l[7]=0,l[8]=(T+L)*z,l[9]=(y-N)*z,l[10]=(1-(x+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Ws.set(l[0],l[1],l[2]).length();const h=Ws.set(l[4],l[5],l[6]).length(),d=Ws.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ci.copy(this);const g=1/c,v=1/h,m=1/d;return Ci.elements[0]*=g,Ci.elements[1]*=g,Ci.elements[2]*=g,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=m,Ci.elements[9]*=m,Ci.elements[10]*=m,i.setFromRotationMatrix(Ci),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Ki,p=!1){const g=this.elements,v=2*c/(i-e),m=2*c/(s-l),x=(i+e)/(i-e),E=(s+l)/(s-l);let T,A;if(p)T=c/(h-c),A=h*c/(h-c);else if(d===Ki)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Ic)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=m,g[9]=E,g[13]=0,g[2]=0,g[6]=0,g[10]=T,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Ki,p=!1){const g=this.elements,v=2/(i-e),m=2/(s-l),x=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,A;if(p)T=1/(h-c),A=h/(h-c);else if(d===Ki)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===Ic)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=m,g[9]=0,g[13]=E,g[2]=0,g[6]=0,g[10]=T,g[14]=A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ws=new lt,Ci=new vn,zA=new lt(0,0,0),IA=new lt(1,1,1),sr=new lt,fc=new lt,ri=new lt,ex=new vn,nx=new Nl;class Ca{constructor(e=0,i=0,s=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],g=l[5],v=l[9],m=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,E),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-m,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return ex.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ex,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return nx.setFromEuler(this),this.setFromQuaternion(nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class bS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BA=0;const ix=new lt,Zs=new Nl,xa=new vn,hc=new lt,gl=new lt,FA=new lt,HA=new Nl,ax=new lt(1,0,0),rx=new lt(0,1,0),sx=new lt(0,0,1),ox={type:"added"},VA={type:"removed"},Ks={type:"childadded",child:null},Fd={type:"childremoved",child:null};class oi extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const e=new lt,i=new Ca,s=new Nl,l=new lt(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new vn},normalMatrix:{value:new me}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Zs.setFromAxisAngle(e,i),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,i){return Zs.setFromAxisAngle(e,i),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(ax,e)}rotateY(e){return this.rotateOnAxis(rx,e)}rotateZ(e){return this.rotateOnAxis(sx,e)}translateOnAxis(e,i){return ix.copy(e).applyQuaternion(this.quaternion),this.position.add(ix.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ax,e)}translateY(e){return this.translateOnAxis(rx,e)}translateZ(e){return this.translateOnAxis(sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?hc.copy(e):hc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(gl,hc,this.up):xa.lookAt(hc,gl,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),Zs.setFromRotationMatrix(xa),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ox),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VA),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ox),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,FA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,HA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const m=p[g];c(e.shapes,m)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),v=h(e.images),m=h(e.shapes),x=h(e.skeletons),E=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),x.length>0&&(s.skeletons=x),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const p=[];for(const g in d){const v=d[g];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}oi.DEFAULT_UP=new lt(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new lt,Sa=new lt,Hd=new lt,ya=new lt,Qs=new lt,Js=new lt,lx=new lt,Vd=new lt,Gd=new lt,Xd=new lt,kd=new on,jd=new on,qd=new on;class Di{constructor(e=new lt,i=new lt,s=new lt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),Sa.subVectors(s,i),Hd.subVectors(e,i);const h=wi.dot(wi),d=wi.dot(Sa),p=wi.dot(Hd),g=Sa.dot(Sa),v=Sa.dot(Hd),m=h*g-d*d;if(m===0)return c.set(0,0,0),null;const x=1/m,E=(g*p-d*v)*x,T=(h*v-d*p)*x;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,ya)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ya.x),p.addScaledVector(h,ya.y),p.addScaledVector(d,ya.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return kd.setScalar(0),jd.setScalar(0),qd.setScalar(0),kd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(kd,c.x),h.addScaledVector(jd,c.y),h.addScaledVector(qd,c.z),h}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),Sa.subVectors(e,i),wi.cross(Sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),wi.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Qs.subVectors(l,s),Js.subVectors(c,s),Vd.subVectors(e,s);const p=Qs.dot(Vd),g=Js.dot(Vd);if(p<=0&&g<=0)return i.copy(s);Gd.subVectors(e,l);const v=Qs.dot(Gd),m=Js.dot(Gd);if(v>=0&&m<=v)return i.copy(l);const x=p*m-v*g;if(x<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(Qs,h);Xd.subVectors(e,c);const E=Qs.dot(Xd),T=Js.dot(Xd);if(T>=0&&E<=T)return i.copy(c);const A=E*g-p*T;if(A<=0&&g>=0&&T<=0)return d=g/(g-T),i.copy(s).addScaledVector(Js,d);const y=v*T-E*m;if(y<=0&&m-v>=0&&E-T>=0)return lx.subVectors(c,l),d=(m-v)/(m-v+(E-T)),i.copy(l).addScaledVector(lx,d);const S=1/(y+A+x);return h=A*S,d=x*S,i.copy(s).addScaledVector(Qs,h).addScaledVector(Js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const AS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Yd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Xe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=De.workingColorSpace){if(e=fm(e,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Yd(h,c,e+1/3),this.g=Yd(h,c,e),this.b=Yd(h,c,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=Wn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Wn){const s=AS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return De.workingToColorSpace(On.copy(this),e),Math.round(be(On.r*255,0,255))*65536+Math.round(be(On.g*255,0,255))*256+Math.round(be(On.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,g;const v=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=v<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-c)/m+(l<c?6:0);break;case l:p=(c-s)/m+2;break;case c:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=v,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Wn){De.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==Wn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(or),this.setHSL(or.h+e,or.s+i,or.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(or),e.getHSL(dc);const s=Sl(or.h,dc.h,i),l=Sl(or.s,dc.s,i),c=Sl(or.l,dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Xe;Xe.NAMES=AS;let GA=0;class Xc extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=oo,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=lp,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(s.blending=this.blending),this.side!==dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==op&&(s.blendSrc=this.blendSrc),this.blendDst!==lp&&(s.blendDst=this.blendDst),this.blendEquation!==Zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pm extends Xc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=hS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new lt,pc=new ke;let XA=0;class Ji{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XA++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Y0,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ao(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y0&&(e.usage=this.usage),e}}class RS extends Ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class CS extends Ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class $i extends Ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}let kA=0;const _i=new vn,Wd=new oi,$s=new lt,si=new Ll,vl=new Ll,Mn=new lt;class mr extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(MS(e)?CS:RS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,s){return _i.makeTranslation(e,i,s),this.applyMatrix4(_i),this}scale(e,i,s){return _i.makeScale(e,i,s),this.applyMatrix4(_i),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $i(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];vl.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(si.min,vl.min),si.expandByPoint(Mn),Mn.addVectors(si.max,vl.max),si.expandByPoint(Mn)):(si.expandByPoint(vl.min),si.expandByPoint(vl.max))}si.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)Mn.fromBufferAttribute(d,g),p&&($s.fromBufferAttribute(e,g),Mn.add($s)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<s.count;k++)d[k]=new lt,p[k]=new lt;const g=new lt,v=new lt,m=new lt,x=new ke,E=new ke,T=new ke,A=new lt,y=new lt;function S(k,w,C){g.fromBufferAttribute(s,k),v.fromBufferAttribute(s,w),m.fromBufferAttribute(s,C),x.fromBufferAttribute(c,k),E.fromBufferAttribute(c,w),T.fromBufferAttribute(c,C),v.sub(g),m.sub(g),E.sub(x),T.sub(x);const X=1/(E.x*T.y-T.x*E.y);isFinite(X)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(m,-E.y).multiplyScalar(X),y.copy(m).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(X),d[k].add(A),d[w].add(A),d[C].add(A),p[k].add(y),p[w].add(y),p[C].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let k=0,w=N.length;k<w;++k){const C=N[k],X=C.start,nt=C.count;for(let ft=X,vt=X+nt;ft<vt;ft+=3)S(e.getX(ft+0),e.getX(ft+1),e.getX(ft+2))}const L=new lt,D=new lt,F=new lt,H=new lt;function z(k){F.fromBufferAttribute(l,k),H.copy(F);const w=d[k];L.copy(w),L.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(H,w);const X=D.dot(p[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,X)}for(let k=0,w=N.length;k<w;++k){const C=N[k],X=C.start,nt=C.count;for(let ft=X,vt=X+nt;ft<vt;ft+=3)z(e.getX(ft+0)),z(e.getX(ft+1)),z(e.getX(ft+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,E=s.count;x<E;x++)s.setXYZ(x,0,0,0);const l=new lt,c=new lt,h=new lt,d=new lt,p=new lt,g=new lt,v=new lt,m=new lt;if(e)for(let x=0,E=e.count;x<E;x+=3){const T=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),v.subVectors(h,c),m.subVectors(l,c),v.cross(m),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,y),d.add(v),p.add(v),g.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(y,g.x,g.y,g.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),m.subVectors(l,c),v.cross(m),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,p){const g=d.array,v=d.itemSize,m=d.normalized,x=new g.constructor(p.length*v);let E=0,T=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?E=p[A]*d.data.stride+d.offset:E=p[A]*v;for(let S=0;S<v;S++)x[T++]=g[E++]}return new Ji(x,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mr,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,s);i.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const p=[],g=c[d];for(let v=0,m=g.length;v<m;v++){const x=g[v],E=e(x,s);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let m=0,x=g.length;m<x;m++){const E=g[m];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const c=e.morphAttributes;for(const g in c){const v=[],m=c[g];for(let x=0,E=m.length;x<E;x++)v.push(m[x].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,v=h.length;g<v;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ux=new vn,Gr=new PA,mc=new dm,cx=new lt,gc=new lt,vc=new lt,_c=new lt,Zd=new lt,xc=new lt,fx=new lt,Sc=new lt;class Qi extends oi{constructor(e=new mr,i=new pm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){xc.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const v=d[p],m=c[p];v!==0&&(Zd.fromBufferAttribute(m,e),h?xc.addScaledVector(Zd,v):xc.addScaledVector(Zd.sub(i),v))}i.add(xc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(c),Gr.copy(e.ray).recast(e.near),!(mc.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(mc,cx)===null||Gr.origin.distanceToSquared(cx)>(e.far-e.near)**2))&&(ux.copy(c).invert(),Gr.copy(e.ray).applyMatrix4(ux),!(s.boundingBox!==null&&Gr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Gr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,m=c.attributes.normal,x=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const y=x[T],S=h[y.materialIndex],N=Math.max(y.start,E.start),L=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let D=N,F=L;D<F;D+=3){const H=d.getX(D),z=d.getX(D+1),k=d.getX(D+2);l=yc(this,S,e,s,g,v,m,H,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),A=Math.min(d.count,E.start+E.count);for(let y=T,S=A;y<S;y+=3){const N=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);l=yc(this,h,e,s,g,v,m,N,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const y=x[T],S=h[y.materialIndex],N=Math.max(y.start,E.start),L=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let D=N,F=L;D<F;D+=3){const H=D,z=D+1,k=D+2;l=yc(this,S,e,s,g,v,m,H,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),A=Math.min(p.count,E.start+E.count);for(let y=T,S=A;y<S;y+=3){const N=y,L=y+1,D=y+2;l=yc(this,h,e,s,g,v,m,N,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function jA(r,e,i,s,l,c,h,d){let p;if(e.side===Zn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===dr,d),p===null)return null;Sc.copy(d),Sc.applyMatrix4(r.matrixWorld);const g=i.ray.origin.distanceTo(Sc);return g<i.near||g>i.far?null:{distance:g,point:Sc.clone(),object:r}}function yc(r,e,i,s,l,c,h,d,p,g){r.getVertexPosition(d,gc),r.getVertexPosition(p,vc),r.getVertexPosition(g,_c);const v=jA(r,e,i,s,gc,vc,_c,fx);if(v){const m=new lt;Di.getBarycoord(fx,gc,vc,_c,m),l&&(v.uv=Di.getInterpolatedAttribute(l,d,p,g,m,new ke)),c&&(v.uv1=Di.getInterpolatedAttribute(c,d,p,g,m,new ke)),h&&(v.normal=Di.getInterpolatedAttribute(h,d,p,g,m,new lt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:g,normal:new lt,materialIndex:0};Di.getNormal(gc,vc,_c,x.normal),v.face=x,v.barycoord=m}return v}class Ol extends mr{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],g=[],v=[],m=[];let x=0,E=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new $i(g,3)),this.setAttribute("normal",new $i(v,3)),this.setAttribute("uv",new $i(m,2));function T(A,y,S,N,L,D,F,H,z,k,w){const C=D/z,X=F/k,nt=D/2,ft=F/2,vt=H/2,ut=z+1,q=k+1;let rt=0,Z=0;const xt=new lt;for(let yt=0;yt<q;yt++){const Vt=yt*X-ft;for(let se=0;se<ut;se++){const ne=se*C-nt;xt[A]=ne*N,xt[y]=Vt*L,xt[S]=vt,g.push(xt.x,xt.y,xt.z),xt[A]=0,xt[y]=0,xt[S]=H>0?1:-1,v.push(xt.x,xt.y,xt.z),m.push(se/z),m.push(1-yt/k),rt+=1}}for(let yt=0;yt<k;yt++)for(let Vt=0;Vt<z;Vt++){const se=x+Vt+ut*yt,ne=x+Vt+ut*(yt+1),B=x+(Vt+1)+ut*(yt+1),ht=x+(Vt+1)+ut*yt;p.push(se,ne,ht),p.push(ne,B,ht),Z+=6}d.addGroup(E,Z,w),E+=Z,x+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Vn(r){const e={};for(let i=0;i<r.length;i++){const s=go(r[i]);for(const l in s)e[l]=s[l]}return e}function qA(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function wS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const YA={clone:go,merge:Vn};var WA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Xc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WA,this.fragmentShader=ZA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=qA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class DS extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new lt,hx=new ke,dx=new ke;class xi extends DS{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,i){return this.getViewBounds(e,hx,dx),i.subVectors(dx,hx)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const to=-90,eo=1;class KA extends oi{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(to,eo,e,i);l.layers=this.layers,this.add(l);const c=new xi(to,eo,e,i);c.layers=this.layers,this.add(c);const h=new xi(to,eo,e,i);h.layers=this.layers,this.add(h);const d=new xi(to,eo,e,i);d.layers=this.layers,this.add(d);const p=new xi(to,eo,e,i);p.layers=this.layers,this.add(p);const g=new xi(to,eo,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const g of i)this.remove(g);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,g,v]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(m,x,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class US extends Gn{constructor(e=[],i=ho,s,l,c,h,d,p,g,v){super(e,i,s,l,c,h,d,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QA extends ts{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new US(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ol(5,5,5),c=new pr({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:fr});c.uniforms.tEquirect.value=i;const h=new Qi(l,c),d=i.minFilter;return i.minFilter===Jr&&(i.minFilter=Zi),new KA(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Ec extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JA={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),S=this._getHandJoint(g,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],x=v.position.distanceTo(m.position),E=.02,T=.005;g.inputState.pinching&&x>E+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=E-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(JA)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class $A extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Qd=new lt,t1=new lt,e1=new me;class qr{constructor(e=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Qd.subVectors(s,i).cross(t1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Qd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||e1.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new dm,n1=new ke(.5,.5),Mc=new lt;class NS{constructor(e=new qr,i=new qr,s=new qr,l=new qr,c=new qr,h=new qr){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ki,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],g=c[3],v=c[4],m=c[5],x=c[6],E=c[7],T=c[8],A=c[9],y=c[10],S=c[11],N=c[12],L=c[13],D=c[14],F=c[15];if(l[0].setComponents(g-h,E-v,S-T,F-N).normalize(),l[1].setComponents(g+h,E+v,S+T,F+N).normalize(),l[2].setComponents(g+d,E+m,S+A,F+L).normalize(),l[3].setComponents(g-d,E-m,S-A,F-L).normalize(),s)l[4].setComponents(p,x,y,D).normalize(),l[5].setComponents(g-p,E-x,S-y,F-D).normalize();else if(l[4].setComponents(g-p,E-x,S-y,F-D).normalize(),i===Ki)l[5].setComponents(g+p,E+x,S+y,F+D).normalize();else if(i===Ic)l[5].setComponents(p,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const i=n1.distanceTo(e.center);return Xr.radius=.7071067811865476+i,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mc.x=l.normal.x>0?e.max.x:e.min.x,Mc.y=l.normal.y>0?e.max.y:e.min.y,Mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LS extends Gn{constructor(e,i,s=$r,l,c,h,d=Li,p=Li,g,v=Ml,m=1){if(v!==Ml&&v!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:m};super(x,l,c,h,d,p,v,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class OS extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kc extends mr{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,v=p+1,m=e/d,x=i/p,E=[],T=[],A=[],y=[];for(let S=0;S<v;S++){const N=S*x-h;for(let L=0;L<g;L++){const D=L*m-c;T.push(D,-N,0),A.push(0,0,1),y.push(L/d),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let N=0;N<d;N++){const L=N+g*S,D=N+g*(S+1),F=N+1+g*(S+1),H=N+1+g*S;E.push(L,D,H),E.push(D,F,H)}this.setIndex(E),this.setAttribute("position",new $i(T,3)),this.setAttribute("normal",new $i(A,3)),this.setAttribute("uv",new $i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.widthSegments,e.heightSegments)}}class mm extends mr{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const v=[],m=new lt,x=new lt,E=[],T=[],A=[],y=[];for(let S=0;S<=s;S++){const N=[],L=S/s;let D=0;S===0&&h===0?D=.5/i:S===s&&p===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const H=F/i;m.x=-e*Math.cos(l+H*c)*Math.sin(h+L*d),m.y=e*Math.cos(h+L*d),m.z=e*Math.sin(l+H*c)*Math.sin(h+L*d),T.push(m.x,m.y,m.z),x.copy(m).normalize(),A.push(x.x,x.y,x.z),y.push(H+D,1-L),N.push(g++)}v.push(N)}for(let S=0;S<s;S++)for(let N=0;N<i;N++){const L=v[S][N+1],D=v[S][N],F=v[S+1][N],H=v[S+1][N+1];(S!==0||h>0)&&E.push(L,D,H),(S!==s-1||p<Math.PI)&&E.push(D,F,H)}this.setIndex(E),this.setAttribute("position",new $i(T,3)),this.setAttribute("normal",new $i(A,3)),this.setAttribute("uv",new $i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class i1 extends Xc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a1 extends Xc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class r1{constructor(e,i,s){const l=this;let c=!1,h=0,d=0,p;const g=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(v){d++,c===!1&&l.onStart!==void 0&&l.onStart(v,h,d),c=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,m){return g.push(v,m),this},this.removeHandler=function(v){const m=g.indexOf(v);return m!==-1&&g.splice(m,2),this},this.getHandler=function(v){for(let m=0,x=g.length;m<x;m+=2){const E=g[m],T=g[m+1];if(E.global&&(E.lastIndex=0),E.test(v))return T}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const s1=new r1;class gm{constructor(e){this.manager=e!==void 0?e:s1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gm.DEFAULT_MATERIAL_NAME="__DEFAULT";const no=new WeakMap;class o1 extends gm{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Jd.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let m=no.get(h);m===void 0&&(m=[],no.set(h,m)),m.push({onLoad:i,onError:l})}return h}const d=Al("img");function p(){v(),i&&i(this);const m=no.get(this)||[];for(let x=0;x<m.length;x++){const E=m[x];E.onLoad&&E.onLoad(this)}no.delete(this),c.manager.itemEnd(e)}function g(m){v(),l&&l(m),Jd.remove(`image:${e}`);const x=no.get(this)||[];for(let E=0;E<x.length;E++){const T=x[E];T.onError&&T.onError(m)}no.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",g,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",g,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Jd.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class l1 extends gm{constructor(e){super(e)}load(e,i,s,l){const c=new Gn,h=new o1(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class u1 extends DS{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,h=c+g*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class c1 extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function px(r,e,i,s){const l=f1(s);switch(i){case _S:return r*e;case SS:return r*e/l.components*l.byteLength;case lm:return r*e/l.components*l.byteLength;case yS:return r*e*2/l.components*l.byteLength;case um:return r*e*2/l.components*l.byteLength;case xS:return r*e*3/l.components*l.byteLength;case Ui:return r*e*4/l.components*l.byteLength;case cm:return r*e*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yp:case Mp:return Math.max(r,16)*Math.max(e,8)/4;case Sp:case Ep:return Math.max(r,8)*Math.max(e,8)/2;case Tp:case bp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ap:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Up:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Np:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Op:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vp:case Gp:case Xp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kp:case jp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case qp:case Yp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function f1(r){switch(r){case Ra:case pS:return{byteLength:1,components:1};case yl:case mS:case Ul:return{byteLength:2,components:1};case sm:case om:return{byteLength:2,components:4};case $r:case rm:case Ta:return{byteLength:4,components:1};case gS:case vS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);function PS(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function h1(r){const e=new WeakMap;function i(d,p){const g=d.array,v=d.usage,m=g.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,g,v),d.onUploadCallback();let E;if(g instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)E=r.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=r.SHORT;else if(g instanceof Uint32Array)E=r.UNSIGNED_INT;else if(g instanceof Int32Array)E=r.INT;else if(g instanceof Int8Array)E=r.BYTE;else if(g instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const v=p.array,m=p.updateRanges;if(r.bindBuffer(g,d),m.length===0)r.bufferSubData(g,0,v);else{m.sort((E,T)=>E.start-T.start);let x=0;for(let E=1;E<m.length;E++){const T=m[x],A=m[E];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,m[x]=A)}m.length=x+1;for(let E=0,T=m.length;E<T;E++){const A=m[E];r.bufferSubData(g,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:c,update:h}}var d1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X1="gl_FragColor = linearToOutputTexel( gl_FragColor );",k1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_R=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ER=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$R=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:d1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:v1,alphatest_pars_fragment:_1,aomap_fragment:x1,aomap_pars_fragment:S1,batching_pars_vertex:y1,batching_vertex:E1,begin_vertex:M1,beginnormal_vertex:T1,bsdfs:b1,iridescence_fragment:A1,bumpmap_pars_fragment:R1,clipping_planes_fragment:C1,clipping_planes_pars_fragment:w1,clipping_planes_pars_vertex:D1,clipping_planes_vertex:U1,color_fragment:N1,color_pars_fragment:L1,color_pars_vertex:O1,color_vertex:P1,common:z1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:B1,displacementmap_pars_vertex:F1,displacementmap_vertex:H1,emissivemap_fragment:V1,emissivemap_pars_fragment:G1,colorspace_fragment:X1,colorspace_pars_fragment:k1,envmap_fragment:j1,envmap_common_pars_fragment:q1,envmap_pars_fragment:Y1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:rR,envmap_vertex:Z1,fog_vertex:K1,fog_pars_vertex:Q1,fog_fragment:J1,fog_pars_fragment:$1,gradientmap_pars_fragment:tR,lightmap_pars_fragment:eR,lights_lambert_fragment:nR,lights_lambert_pars_fragment:iR,lights_pars_begin:aR,lights_toon_fragment:sR,lights_toon_pars_fragment:oR,lights_phong_fragment:lR,lights_phong_pars_fragment:uR,lights_physical_fragment:cR,lights_physical_pars_fragment:fR,lights_fragment_begin:hR,lights_fragment_maps:dR,lights_fragment_end:pR,logdepthbuf_fragment:mR,logdepthbuf_pars_fragment:gR,logdepthbuf_pars_vertex:vR,logdepthbuf_vertex:_R,map_fragment:xR,map_pars_fragment:SR,map_particle_fragment:yR,map_particle_pars_fragment:ER,metalnessmap_fragment:MR,metalnessmap_pars_fragment:TR,morphinstance_vertex:bR,morphcolor_vertex:AR,morphnormal_vertex:RR,morphtarget_pars_vertex:CR,morphtarget_vertex:wR,normal_fragment_begin:DR,normal_fragment_maps:UR,normal_pars_fragment:NR,normal_pars_vertex:LR,normal_vertex:OR,normalmap_pars_fragment:PR,clearcoat_normal_fragment_begin:zR,clearcoat_normal_fragment_maps:IR,clearcoat_pars_fragment:BR,iridescence_pars_fragment:FR,opaque_fragment:HR,packing:VR,premultiplied_alpha_fragment:GR,project_vertex:XR,dithering_fragment:kR,dithering_pars_fragment:jR,roughnessmap_fragment:qR,roughnessmap_pars_fragment:YR,shadowmap_pars_fragment:WR,shadowmap_pars_vertex:ZR,shadowmap_vertex:KR,shadowmask_pars_fragment:QR,skinbase_vertex:JR,skinning_pars_vertex:$R,skinning_vertex:tC,skinnormal_vertex:eC,specularmap_fragment:nC,specularmap_pars_fragment:iC,tonemapping_fragment:aC,tonemapping_pars_fragment:rC,transmission_fragment:sC,transmission_pars_fragment:oC,uv_pars_fragment:lC,uv_pars_vertex:uC,uv_vertex:cC,worldpos_vertex:fC,background_vert:hC,background_frag:dC,backgroundCube_vert:pC,backgroundCube_frag:mC,cube_vert:gC,cube_frag:vC,depth_vert:_C,depth_frag:xC,distanceRGBA_vert:SC,distanceRGBA_frag:yC,equirect_vert:EC,equirect_frag:MC,linedashed_vert:TC,linedashed_frag:bC,meshbasic_vert:AC,meshbasic_frag:RC,meshlambert_vert:CC,meshlambert_frag:wC,meshmatcap_vert:DC,meshmatcap_frag:UC,meshnormal_vert:NC,meshnormal_frag:LC,meshphong_vert:OC,meshphong_frag:PC,meshphysical_vert:zC,meshphysical_frag:IC,meshtoon_vert:BC,meshtoon_frag:FC,points_vert:HC,points_frag:VC,shadow_vert:GC,shadow_frag:XC,sprite_vert:kC,sprite_frag:jC},Bt={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Vn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Vn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Vn([Bt.points,Bt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Vn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Vn([Bt.common,Bt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Vn([Bt.sprite,Bt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Vn([Bt.common,Bt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Vn([Bt.lights,Bt.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Tc={r:0,b:0,g:0},kr=new Ca,qC=new vn;function YC(r,e,i,s,l,c,h){const d=new Xe(0);let p=c===!0?0:1,g,v,m=null,x=0,E=null;function T(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function A(L){let D=!1;const F=T(L);F===null?S(d,p):F&&F.isColor&&(S(F,1),D=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,D){const F=T(D);F&&(F.isCubeTexture||F.mapping===Gc)?(v===void 0&&(v=new Qi(new Ol(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:go(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),kr.copy(D.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(qC.makeRotationFromEuler(kr)),v.material.toneMapped=De.getTransfer(F.colorSpace)!==Ge,(m!==F||x!==F.version||E!==r.toneMapping)&&(v.material.needsUpdate=!0,m=F,x=F.version,E=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new Qi(new kc(2,2),new pr({name:"BackgroundMaterial",uniforms:go(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=De.getTransfer(F.colorSpace)!==Ge,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||x!==F.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,m=F,x=F.version,E=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null))}function S(L,D){L.getRGB(Tc,wS(r)),s.buffers.color.setClear(Tc.r,Tc.g,Tc.b,D,h)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),p=D,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,S(d,p)},render:A,addToRenderList:y,dispose:N}}function WC(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(C,X,nt,ft,vt){let ut=!1;const q=m(ft,nt,X);c!==q&&(c=q,g(c.object)),ut=E(C,ft,nt,vt),ut&&T(C,ft,nt,vt),vt!==null&&e.update(vt,r.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(C,X,nt,ft),vt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function p(){return r.createVertexArray()}function g(C){return r.bindVertexArray(C)}function v(C){return r.deleteVertexArray(C)}function m(C,X,nt){const ft=nt.wireframe===!0;let vt=s[C.id];vt===void 0&&(vt={},s[C.id]=vt);let ut=vt[X.id];ut===void 0&&(ut={},vt[X.id]=ut);let q=ut[ft];return q===void 0&&(q=x(p()),ut[ft]=q),q}function x(C){const X=[],nt=[],ft=[];for(let vt=0;vt<i;vt++)X[vt]=0,nt[vt]=0,ft[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:nt,attributeDivisors:ft,object:C,attributes:{},index:null}}function E(C,X,nt,ft){const vt=c.attributes,ut=X.attributes;let q=0;const rt=nt.getAttributes();for(const Z in rt)if(rt[Z].location>=0){const yt=vt[Z];let Vt=ut[Z];if(Vt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Vt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Vt=C.instanceColor)),yt===void 0||yt.attribute!==Vt||Vt&&yt.data!==Vt.data)return!0;q++}return c.attributesNum!==q||c.index!==ft}function T(C,X,nt,ft){const vt={},ut=X.attributes;let q=0;const rt=nt.getAttributes();for(const Z in rt)if(rt[Z].location>=0){let yt=ut[Z];yt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const Vt={};Vt.attribute=yt,yt&&yt.data&&(Vt.data=yt.data),vt[Z]=Vt,q++}c.attributes=vt,c.attributesNum=q,c.index=ft}function A(){const C=c.newAttributes;for(let X=0,nt=C.length;X<nt;X++)C[X]=0}function y(C){S(C,0)}function S(C,X){const nt=c.newAttributes,ft=c.enabledAttributes,vt=c.attributeDivisors;nt[C]=1,ft[C]===0&&(r.enableVertexAttribArray(C),ft[C]=1),vt[C]!==X&&(r.vertexAttribDivisor(C,X),vt[C]=X)}function N(){const C=c.newAttributes,X=c.enabledAttributes;for(let nt=0,ft=X.length;nt<ft;nt++)X[nt]!==C[nt]&&(r.disableVertexAttribArray(nt),X[nt]=0)}function L(C,X,nt,ft,vt,ut,q){q===!0?r.vertexAttribIPointer(C,X,nt,vt,ut):r.vertexAttribPointer(C,X,nt,ft,vt,ut)}function D(C,X,nt,ft){A();const vt=ft.attributes,ut=nt.getAttributes(),q=X.defaultAttributeValues;for(const rt in ut){const Z=ut[rt];if(Z.location>=0){let xt=vt[rt];if(xt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const yt=xt.normalized,Vt=xt.itemSize,se=e.get(xt);if(se===void 0)continue;const ne=se.buffer,B=se.type,ht=se.bytesPerElement,$=B===r.INT||B===r.UNSIGNED_INT||xt.gpuType===rm;if(xt.isInterleavedBufferAttribute){const at=xt.data,Mt=at.stride,Lt=xt.offset;if(at.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Z.locationSize;Ct++)S(Z.location+Ct,at.meshPerAttribute);C.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ct=0;Ct<Z.locationSize;Ct++)y(Z.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let Ct=0;Ct<Z.locationSize;Ct++)L(Z.location+Ct,Vt/Z.locationSize,B,yt,Mt*ht,(Lt+Vt/Z.locationSize*Ct)*ht,$)}else{if(xt.isInstancedBufferAttribute){for(let at=0;at<Z.locationSize;at++)S(Z.location+at,xt.meshPerAttribute);C.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let at=0;at<Z.locationSize;at++)y(Z.location+at);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let at=0;at<Z.locationSize;at++)L(Z.location+at,Vt/Z.locationSize,B,yt,Vt*ht,Vt/Z.locationSize*at*ht,$)}}else if(q!==void 0){const yt=q[rt];if(yt!==void 0)switch(yt.length){case 2:r.vertexAttrib2fv(Z.location,yt);break;case 3:r.vertexAttrib3fv(Z.location,yt);break;case 4:r.vertexAttrib4fv(Z.location,yt);break;default:r.vertexAttrib1fv(Z.location,yt)}}}}N()}function F(){k();for(const C in s){const X=s[C];for(const nt in X){const ft=X[nt];for(const vt in ft)v(ft[vt].object),delete ft[vt];delete X[nt]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const X=s[C.id];for(const nt in X){const ft=X[nt];for(const vt in ft)v(ft[vt].object),delete ft[vt];delete X[nt]}delete s[C.id]}function z(C){for(const X in s){const nt=s[X];if(nt[C.id]===void 0)continue;const ft=nt[C.id];for(const vt in ft)v(ft[vt].object),delete ft[vt];delete nt[C.id]}}function k(){w(),h=!0,c!==l&&(c=l,g(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:N}}function ZC(r,e,i){let s;function l(g){s=g}function c(g,v){r.drawArrays(s,g,v),i.update(v,s,1)}function h(g,v,m){m!==0&&(r.drawArraysInstanced(s,g,v,m),i.update(v,s,m))}function d(g,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,m);let E=0;for(let T=0;T<m;T++)E+=v[T];i.update(E,s,1)}function p(g,v,m,x){if(m===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<g.length;T++)h(g[T],v[T],x[T]);else{E.multiDrawArraysInstancedWEBGL(s,g,0,v,0,x,0,m);let T=0;for(let A=0;A<m;A++)T+=v[A]*x[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function KC(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ui&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const k=z===Ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ra&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ta&&!k)}function p(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const m=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:F,maxSamples:H}}function QC(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new qr,d=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const E=m.length!==0||x||s!==0||l;return l=x,s=m.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(m,x){i=v(m,x,0)},this.setState=function(m,x,E){const T=m.clippingPlanes,A=m.clipIntersection,y=m.clipShadows,S=r.get(m);if(!l||T===null||T.length===0||c&&!y)c?v(null):g();else{const N=c?0:s,L=N*4;let D=S.clippingState||null;p.value=D,D=v(T,x,L,E);for(let F=0;F!==L;++F)D[F]=i[F];S.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,x,E,T){const A=m!==null?m.length:0;let y=null;if(A!==0){if(y=p.value,T!==!0||y===null){const S=E+A*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,D=E;L!==A;++L,D+=4)h.copy(m[L]).applyMatrix4(N,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function JC(r){let e=new WeakMap;function i(h,d){return d===gp?h.mapping=ho:d===vp&&(h.mapping=po),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===gp||d===vp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new QA(p.height);return g.fromEquirectangularTexture(r,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ro=4,mx=[.125,.215,.35,.446,.526,.582],Kr=20,$d=new u1,gx=new Xe;let tp=null,ep=0,np=0,ip=!1;const Yr=(1+Math.sqrt(5))/2,io=1/Yr,vx=[new lt(-Yr,io,0),new lt(Yr,io,0),new lt(-io,0,Yr),new lt(io,0,Yr),new lt(0,Yr,-io),new lt(0,Yr,io),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],$C=new lt;class _x{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=$C}=c;tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tp,ep,np),this._renderer.xr.enabled=ip,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:Ul,format:Ui,colorSpace:mo,depthBuffer:!1},l=xx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xx(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tw(c)),this._blurMaterial=ew(c,e,i)}return l}_compileMaterial(e){const i=new Qi(this._lodPlanes[0],e);this._renderer.compile(i,$d)}_sceneToCubeUV(e,i,s,l,c){const p=new xi(90,1,i,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,E=m.toneMapping;m.getClearColor(gx),m.toneMapping=hr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const A=new pm({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),y=new Qi(new Ol,A);let S=!1;const N=e.background;N?N.isColor&&(A.color.copy(N),e.background=null,S=!0):(A.color.copy(gx),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(p.up.set(0,g[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[L],c.y,c.z)):D===1?(p.up.set(0,0,g[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[L],c.z)):(p.up.set(0,g[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[L]));const F=this._cubeSize;bc(l,D*F,L>2?F:0,F,F),m.setRenderTarget(l),S&&m.render(y,p),m.render(e,p)}y.geometry.dispose(),y.material.dispose(),m.toneMapping=E,m.autoClear=x,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ho||e.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Qi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;bc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,$d)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=vx[(l-c-1)%vx.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new Qi(this._lodPlanes[l],g),x=g.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Kr-1),A=c/T,y=isFinite(c)?1+Math.floor(v*A):Kr;y>Kr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const S=[];let N=0;for(let z=0;z<Kr;++z){const k=z/A,w=Math.exp(-k*k/2);S.push(w),z===0?N+=w:z<y&&(N+=2*w)}for(let z=0;z<S.length;z++)S[z]=S[z]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-s;const D=this._sizeLods[l],F=3*D*(l>L-ro?l-L+ro:0),H=4*(this._cubeSize-D);bc(i,F,H,3*D,2*D),p.setRenderTarget(i),p.render(m,$d)}}function tw(r){const e=[],i=[],s=[];let l=r;const c=r-ro+1+mx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-ro?p=mx[h-r+ro-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),v=-g,m=1+g,x=[v,v,m,v,m,m,v,v,m,m,v,m],E=6,T=6,A=3,y=2,S=1,N=new Float32Array(A*T*E),L=new Float32Array(y*T*E),D=new Float32Array(S*T*E);for(let H=0;H<E;H++){const z=H%3*2/3-1,k=H>2?0:-1,w=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];N.set(w,A*T*H),L.set(x,y*T*H);const C=[H,H,H,H,H,H];D.set(C,S*T*H)}const F=new mr;F.setAttribute("position",new Ji(N,A)),F.setAttribute("uv",new Ji(L,y)),F.setAttribute("faceIndex",new Ji(D,S)),e.push(F),l>ro&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function xx(r,e,i){const s=new ts(r,e,i);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function bc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function ew(r,e,i){const s=new Float32Array(Kr),l=new lt(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Sx(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function yx(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function vm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nw(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===gp||p===vp,v=p===ho||p===po;if(g||v){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new _x(r)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const E=d.image;return g&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new _x(r)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function iw(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Rl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function aw(r,e,i,s){const l={},c=new WeakMap;function h(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(m,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(m){const x=m.attributes;for(const E in x)e.update(x[E],r.ARRAY_BUFFER)}function g(m){const x=[],E=m.index,T=m.attributes.position;let A=0;if(E!==null){const N=E.array;A=E.version;for(let L=0,D=N.length;L<D;L+=3){const F=N[L+0],H=N[L+1],z=N[L+2];x.push(F,H,H,z,z,F)}}else if(T!==void 0){const N=T.array;A=T.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const F=L+0,H=L+1,z=L+2;x.push(F,H,H,z,z,F)}}else return;const y=new(MS(x)?CS:RS)(x,1);y.version=A;const S=c.get(m);S&&e.remove(S),c.set(m,y)}function v(m){const x=c.get(m);if(x){const E=m.index;E!==null&&x.version<E.version&&g(m)}else g(m);return c.get(m)}return{get:d,update:p,getWireframeAttribute:v}}function rw(r,e,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,E){r.drawElements(s,E,c,x*h),i.update(E,s,1)}function g(x,E,T){T!==0&&(r.drawElementsInstanced(s,E,c,x*h,T),i.update(E,s,T))}function v(x,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,x,0,T);let y=0;for(let S=0;S<T;S++)y+=E[S];i.update(y,s,1)}function m(x,E,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)g(x[S]/h,E[S],A[S]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,c,x,0,A,0,T);let S=0;for(let N=0;N<T;N++)S+=E[N]*A[N];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function sw(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ow(r,e,i){const s=new WeakMap,l=new on;function c(h,d,p){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==m){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var E=C;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let F=d.attributes.position.count*D,H=1;F>e.maxTextureSize&&(H=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*H*4*m),k=new TS(z,F,H,m);k.type=Ta,k.needsUpdate=!0;const w=D*4;for(let X=0;X<m;X++){const nt=S[X],ft=N[X],vt=L[X],ut=F*H*4*X;for(let q=0;q<nt.count;q++){const rt=q*w;T===!0&&(l.fromBufferAttribute(nt,q),z[ut+rt+0]=l.x,z[ut+rt+1]=l.y,z[ut+rt+2]=l.z,z[ut+rt+3]=0),A===!0&&(l.fromBufferAttribute(ft,q),z[ut+rt+4]=l.x,z[ut+rt+5]=l.y,z[ut+rt+6]=l.z,z[ut+rt+7]=0),y===!0&&(l.fromBufferAttribute(vt,q),z[ut+rt+8]=l.x,z[ut+rt+9]=l.y,z[ut+rt+10]=l.z,z[ut+rt+11]=vt.itemSize===4?l.w:1)}}x={count:m,texture:k,size:new ke(F,H)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<g.length;y++)T+=g[y];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",g)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function lw(r,e,i,s){let l=new WeakMap;function c(p){const g=s.render.frame,v=p.geometry,m=e.get(p,v);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:h}}const zS=new Gn,Ex=new LS(1,1),IS=new TS,BS=new LA,FS=new US,Mx=[],Tx=[],bx=new Float32Array(16),Ax=new Float32Array(9),Rx=new Float32Array(4);function So(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Mx[l];if(c===void 0&&(c=new Float32Array(l),Mx[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function _n(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function xn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function jc(r,e){let i=Tx[e];i===void 0&&(i=new Int32Array(e),Tx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function uw(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function cw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2fv(this.addr,e),xn(i,e)}}function fw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;r.uniform3fv(this.addr,e),xn(i,e)}}function hw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4fv(this.addr,e),xn(i,e)}}function dw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,s))return;Rx.set(s),r.uniformMatrix2fv(this.addr,!1,Rx),xn(i,s)}}function pw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,s))return;Ax.set(s),r.uniformMatrix3fv(this.addr,!1,Ax),xn(i,s)}}function mw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,s))return;bx.set(s),r.uniformMatrix4fv(this.addr,!1,bx),xn(i,s)}}function gw(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function vw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2iv(this.addr,e),xn(i,e)}}function _w(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;r.uniform3iv(this.addr,e),xn(i,e)}}function xw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4iv(this.addr,e),xn(i,e)}}function Sw(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function yw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2uiv(this.addr,e),xn(i,e)}}function Ew(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;r.uniform3uiv(this.addr,e),xn(i,e)}}function Mw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4uiv(this.addr,e),xn(i,e)}}function Tw(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ex.compareFunction=ES,c=Ex):c=zS,i.setTexture2D(e||c,l)}function bw(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||BS,l)}function Aw(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||FS,l)}function Rw(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||IS,l)}function Cw(r){switch(r){case 5126:return uw;case 35664:return cw;case 35665:return fw;case 35666:return hw;case 35674:return dw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return xw;case 5125:return Sw;case 36294:return yw;case 36295:return Ew;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Rw}}function ww(r,e){r.uniform1fv(this.addr,e)}function Dw(r,e){const i=So(e,this.size,2);r.uniform2fv(this.addr,i)}function Uw(r,e){const i=So(e,this.size,3);r.uniform3fv(this.addr,i)}function Nw(r,e){const i=So(e,this.size,4);r.uniform4fv(this.addr,i)}function Lw(r,e){const i=So(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Ow(r,e){const i=So(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Pw(r,e){const i=So(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function zw(r,e){r.uniform1iv(this.addr,e)}function Iw(r,e){r.uniform2iv(this.addr,e)}function Bw(r,e){r.uniform3iv(this.addr,e)}function Fw(r,e){r.uniform4iv(this.addr,e)}function Hw(r,e){r.uniform1uiv(this.addr,e)}function Vw(r,e){r.uniform2uiv(this.addr,e)}function Gw(r,e){r.uniform3uiv(this.addr,e)}function Xw(r,e){r.uniform4uiv(this.addr,e)}function kw(r,e,i){const s=this.cache,l=e.length,c=jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||zS,c[h])}function jw(r,e,i){const s=this.cache,l=e.length,c=jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||BS,c[h])}function qw(r,e,i){const s=this.cache,l=e.length,c=jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||FS,c[h])}function Yw(r,e,i){const s=this.cache,l=e.length,c=jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||IS,c[h])}function Ww(r){switch(r){case 5126:return ww;case 35664:return Dw;case 35665:return Uw;case 35666:return Nw;case 35674:return Lw;case 35675:return Ow;case 35676:return Pw;case 5124:case 35670:return zw;case 35667:case 35671:return Iw;case 35668:case 35672:return Bw;case 35669:case 35673:return Fw;case 5125:return Hw;case 36294:return Vw;case 36295:return Gw;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return Yw}}class Zw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Cw(i.type)}}class Kw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ww(i.type)}}class Qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function Cx(r,e){r.seq.push(e),r.map[e.id]=e}function Jw(r,e,i){const s=r.name,l=s.length;for(ap.lastIndex=0;;){const c=ap.exec(s),h=ap.lastIndex;let d=c[1];const p=c[2]==="]",g=c[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){Cx(i,g===void 0?new Zw(d,r,e):new Kw(d,r,e));break}else{let m=i.map[d];m===void 0&&(m=new Qw(d),Cx(i,m)),i=m}}}class Lc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);Jw(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function wx(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const $w=37297;let t2=0;function e2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Dx=new me;function n2(r){De._getMatrix(Dx,De.workingColorSpace,r);const e=`mat3( ${Dx.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case zc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ux(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+e2(r.getShaderSource(e),d)}else return c}function i2(r,e){const i=n2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function a2(r,e){let i;switch(e){case jb:i="Linear";break;case qb:i="Reinhard";break;case Yb:i="Cineon";break;case Wb:i="ACESFilmic";break;case Kb:i="AgX";break;case Qb:i="Neutral";break;case Zb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new lt;function r2(){De.getLuminanceCoefficients(Ac);const r=Ac.x.toFixed(4),e=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function o2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function l2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function _l(r){return r!==""}function Nx(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(r){return r.replace(u2,f2)}const c2=new Map;function f2(r,e){let i=ge[e];if(i===void 0){const s=c2.get(e);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wp(i)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ox(r){return r.replace(h2,d2)}function d2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Px(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fS?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Tb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function m2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g2(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===po&&(e="ENVMAP_MODE_REFRACTION"),e}function v2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hS:e="ENVMAP_BLENDING_MULTIPLY";break;case Xb:e="ENVMAP_BLENDING_MIX";break;case kb:e="ENVMAP_BLENDING_ADD";break}return e}function _2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function x2(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=p2(i),g=m2(i),v=g2(i),m=v2(i),x=_2(i),E=s2(i),T=o2(c),A=l.createProgram();let y,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(_l).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(_l).join(`
`),S.length>0&&(S+=`
`)):(y=[Px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),S=[Px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==hr?"#define TONE_MAPPING":"",i.toneMapping!==hr?ge.tonemapping_pars_fragment:"",i.toneMapping!==hr?a2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,i2("linearToOutputTexel",i.outputColorSpace),r2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),h=Wp(h),h=Nx(h,i),h=Lx(h,i),d=Wp(d),d=Nx(d,i),d=Lx(d,i),h=Ox(h),d=Ox(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=N+y+h,D=N+S+d,F=wx(l,l.VERTEX_SHADER,L),H=wx(l,l.FRAGMENT_SHADER,D);l.attachShader(A,F),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(X){if(r.debug.checkShaderErrors){const nt=l.getProgramInfoLog(A)||"",ft=l.getShaderInfoLog(F)||"",vt=l.getShaderInfoLog(H)||"",ut=nt.trim(),q=ft.trim(),rt=vt.trim();let Z=!0,xt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,F,H);else{const yt=Ux(l,F,"vertex"),Vt=Ux(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ut+`
`+yt+`
`+Vt)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(q===""||rt==="")&&(xt=!1);xt&&(X.diagnostics={runnable:Z,programLog:ut,vertexShader:{log:q,prefix:y},fragmentShader:{log:rt,prefix:S}})}l.deleteShader(F),l.deleteShader(H),k=new Lc(l,A),w=l2(l,A)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,$w)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=H,this}let S2=0;class y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new E2(e),i.set(e,s)),s}}class E2{constructor(e){this.id=S2++,this.code=e,this.usedTimes=0}}function M2(r,e,i,s,l,c,h){const d=new bS,p=new y2,g=new Set,v=[],m=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return g.add(w),w===0?"uv":`uv${w}`}function y(w,C,X,nt,ft){const vt=nt.fog,ut=ft.geometry,q=w.isMeshStandardMaterial?nt.environment:null,rt=(w.isMeshStandardMaterial?i:e).get(w.envMap||q),Z=rt&&rt.mapping===Gc?rt.image.height:null,xt=T[w.type];w.precision!==null&&(E=l.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const yt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Vt=yt!==void 0?yt.length:0;let se=0;ut.morphAttributes.position!==void 0&&(se=1),ut.morphAttributes.normal!==void 0&&(se=2),ut.morphAttributes.color!==void 0&&(se=3);let ne,B,ht,$;if(xt){const Ee=Wi[xt];ne=Ee.vertexShader,B=Ee.fragmentShader}else ne=w.vertexShader,B=w.fragmentShader,p.update(w),ht=p.getVertexShaderID(w),$=p.getFragmentShaderID(w);const at=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Lt=ft.isInstancedMesh===!0,Ct=ft.isBatchedMesh===!0,Tt=!!w.map,Yt=!!w.matcap,I=!!rt,Fe=!!w.aoMap,le=!!w.lightMap,Jt=!!w.bumpMap,Ot=!!w.normalMap,re=!!w.displacementMap,Ht=!!w.emissiveMap,ue=!!w.metalnessMap,je=!!w.roughnessMap,Ye=w.anisotropy>0,U=w.clearcoat>0,b=w.dispersion>0,et=w.iridescence>0,mt=w.sheen>0,St=w.transmission>0,dt=Ye&&!!w.anisotropyMap,kt=U&&!!w.clearcoatMap,wt=U&&!!w.clearcoatNormalMap,Zt=U&&!!w.clearcoatRoughnessMap,Qt=et&&!!w.iridescenceMap,At=et&&!!w.iridescenceThicknessMap,Pt=mt&&!!w.sheenColorMap,ae=mt&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,zt=!!w.specularColorMap,he=!!w.specularIntensityMap,G=St&&!!w.transmissionMap,Rt=St&&!!w.thicknessMap,Ut=!!w.gradientMap,Xt=!!w.alphaMap,Et=w.alphaTest>0,_t=!!w.alphaHash,Wt=!!w.extensions;let fe=hr;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(fe=r.toneMapping);const He={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:ne,fragmentShader:B,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:Ct,batchingColor:Ct&&ft._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&ft.instanceColor!==null,instancingMorph:Lt&&ft.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:mo,alphaToCoverage:!!w.alphaToCoverage,map:Tt,matcap:Yt,envMap:I,envMapMode:I&&rt.mapping,envMapCubeUVHeight:Z,aoMap:Fe,lightMap:le,bumpMap:Jt,normalMap:Ot,displacementMap:x&&re,emissiveMap:Ht,normalMapObjectSpace:Ot&&w.normalMapType===nA,normalMapTangentSpace:Ot&&w.normalMapType===eA,metalnessMap:ue,roughnessMap:je,anisotropy:Ye,anisotropyMap:dt,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:b,iridescence:et,iridescenceMap:Qt,iridescenceThicknessMap:At,sheen:mt,sheenColorMap:Pt,sheenRoughnessMap:ae,specularMap:Kt,specularColorMap:zt,specularIntensityMap:he,transmission:St,transmissionMap:G,thicknessMap:Rt,gradientMap:Ut,opaque:w.transparent===!1&&w.blending===oo&&w.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Et,alphaHash:_t,combine:w.combine,mapUv:Tt&&A(w.map.channel),aoMapUv:Fe&&A(w.aoMap.channel),lightMapUv:le&&A(w.lightMap.channel),bumpMapUv:Jt&&A(w.bumpMap.channel),normalMapUv:Ot&&A(w.normalMap.channel),displacementMapUv:re&&A(w.displacementMap.channel),emissiveMapUv:Ht&&A(w.emissiveMap.channel),metalnessMapUv:ue&&A(w.metalnessMap.channel),roughnessMapUv:je&&A(w.roughnessMap.channel),anisotropyMapUv:dt&&A(w.anisotropyMap.channel),clearcoatMapUv:kt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:ae&&A(w.sheenRoughnessMap.channel),specularMapUv:Kt&&A(w.specularMap.channel),specularColorMapUv:zt&&A(w.specularColorMap.channel),specularIntensityMapUv:he&&A(w.specularIntensityMap.channel),transmissionMapUv:G&&A(w.transmissionMap.channel),thicknessMapUv:Rt&&A(w.thicknessMap.channel),alphaMapUv:Xt&&A(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Ot||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!ut.attributes.uv&&(Tt||Xt),fog:!!vt,useFog:w.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Mt,skinning:ft.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:Tt&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===Ge,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ma,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Ct)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return He.vertexUv1s=g.has(1),He.vertexUv2s=g.has(2),He.vertexUv3s=g.has(3),g.clear(),He}function S(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)C.push(X),C.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(N(C,w),L(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=T[w.type];let X;if(C){const nt=Wi[C];X=YA.clone(nt.uniforms)}else X=w.uniforms;return X}function F(w,C){let X;for(let nt=0,ft=v.length;nt<ft;nt++){const vt=v[nt];if(vt.cacheKey===C){X=vt,++X.usedTimes;break}}return X===void 0&&(X=new x2(r,C,w,c),v.push(X)),X}function H(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function z(w){p.remove(w)}function k(){p.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:D,acquireProgram:F,releaseProgram:H,releaseShaderCache:z,programs:v,dispose:k}}function T2(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function b2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ix(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(m,x,E,T,A,y){let S=r[e];return S===void 0?(S={id:m.id,object:m,geometry:x,material:E,groupOrder:T,renderOrder:m.renderOrder,z:A,group:y},r[e]=S):(S.id=m.id,S.object=m,S.geometry=x,S.material=E,S.groupOrder=T,S.renderOrder=m.renderOrder,S.z=A,S.group=y),e++,S}function d(m,x,E,T,A,y){const S=h(m,x,E,T,A,y);E.transmission>0?s.push(S):E.transparent===!0?l.push(S):i.push(S)}function p(m,x,E,T,A,y){const S=h(m,x,E,T,A,y);E.transmission>0?s.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function g(m,x){i.length>1&&i.sort(m||b2),s.length>1&&s.sort(x||zx),l.length>1&&l.sort(x||zx)}function v(){for(let m=e,x=r.length;m<x;m++){const E=r[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:v,sort:g}}function A2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new Ix,r.set(s,[h])):l>=c.length?(h=new Ix,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function R2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new lt,color:new Xe};break;case"SpotLight":i={position:new lt,direction:new lt,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return r[e.id]=i,i}}}function C2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let w2=0;function D2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function U2(r){const e=new R2,i=C2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new lt);const l=new lt,c=new vn,h=new vn;function d(g){let v=0,m=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let E=0,T=0,A=0,y=0,S=0,N=0,L=0,D=0,F=0,H=0,z=0;g.sort(D2);for(let w=0,C=g.length;w<C;w++){const X=g[w],nt=X.color,ft=X.intensity,vt=X.distance,ut=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)v+=nt.r*ft,m+=nt.g*ft,x+=nt.b*ft;else if(X.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(X.sh.coefficients[q],ft);z++}else if(X.isDirectionalLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const rt=X.shadow,Z=i.get(X);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,s.directionalShadow[E]=Z,s.directionalShadowMap[E]=ut,s.directionalShadowMatrix[E]=X.shadow.matrix,N++}s.directional[E]=q,E++}else if(X.isSpotLight){const q=e.get(X);q.position.setFromMatrixPosition(X.matrixWorld),q.color.copy(nt).multiplyScalar(ft),q.distance=vt,q.coneCos=Math.cos(X.angle),q.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),q.decay=X.decay,s.spot[A]=q;const rt=X.shadow;if(X.map&&(s.spotLightMap[F]=X.map,F++,rt.updateMatrices(X),X.castShadow&&H++),s.spotLightMatrix[A]=rt.matrix,X.castShadow){const Z=i.get(X);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=ut,D++}A++}else if(X.isRectAreaLight){const q=e.get(X);q.color.copy(nt).multiplyScalar(ft),q.halfWidth.set(X.width*.5,0,0),q.halfHeight.set(0,X.height*.5,0),s.rectArea[y]=q,y++}else if(X.isPointLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity),q.distance=X.distance,q.decay=X.decay,X.castShadow){const rt=X.shadow,Z=i.get(X);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,Z.shadowCameraNear=rt.camera.near,Z.shadowCameraFar=rt.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=ut,s.pointShadowMatrix[T]=X.shadow.matrix,L++}s.point[T]=q,T++}else if(X.isHemisphereLight){const q=e.get(X);q.skyColor.copy(X.color).multiplyScalar(ft),q.groundColor.copy(X.groundColor).multiplyScalar(ft),s.hemi[S]=q,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==E||k.pointLength!==T||k.spotLength!==A||k.rectAreaLength!==y||k.hemiLength!==S||k.numDirectionalShadows!==N||k.numPointShadows!==L||k.numSpotShadows!==D||k.numSpotMaps!==F||k.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=A,s.rectArea.length=y,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+F-H,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,k.directionalLength=E,k.pointLength=T,k.spotLength=A,k.rectAreaLength=y,k.hemiLength=S,k.numDirectionalShadows=N,k.numPointShadows=L,k.numSpotShadows=D,k.numSpotMaps=F,k.numLightProbes=z,s.version=w2++)}function p(g,v){let m=0,x=0,E=0,T=0,A=0;const y=v.matrixWorldInverse;for(let S=0,N=g.length;S<N;S++){const L=g[S];if(L.isDirectionalLight){const D=s.directional[m];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),m++}else if(L.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:s}}function Bx(r){const e=new U2(r),i=[],s=[];function l(v){g.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function N2(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Bx(r),e.set(l,[d])):c>=h.length?(d=new Bx(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const L2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P2(r,e,i){let s=new NS;const l=new ke,c=new ke,h=new on,d=new i1({depthPacking:tA}),p=new a1,g={},v=i.maxTextureSize,m={[dr]:Zn,[Zn]:dr,[Ma]:Ma},x=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:L2,fragmentShader:O2}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const T=new mr;T.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fS;let S=this.type;this.render=function(H,z,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),nt=r.state;nt.setBlending(fr),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ft=S!==Ea&&this.type===Ea,vt=S===Ea&&this.type!==Ea;for(let ut=0,q=H.length;ut<q;ut++){const rt=H[ut],Z=rt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),c.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/xt.x),l.x=c.x*xt.x,Z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/xt.y),l.y=c.y*xt.y,Z.mapSize.y=c.y)),Z.map===null||ft===!0||vt===!0){const Vt=this.type!==Ea?{minFilter:Li,magFilter:Li}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ts(l.x,l.y,Vt),Z.map.texture.name=rt.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const yt=Z.getViewportCount();for(let Vt=0;Vt<yt;Vt++){const se=Z.getViewport(Vt);h.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),nt.viewport(h),Z.updateMatrices(rt,Vt),s=Z.getFrustum(),D(z,k,Z.camera,rt,this.type)}Z.isPointLightShadow!==!0&&this.type===Ea&&N(Z,k),Z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(w,C,X)};function N(H,z){const k=e.update(A);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ts(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(z,null,k,x,A,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(z,null,k,E,A,null)}function L(H,z,k,w){let C=null;const X=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(X!==void 0)C=X;else if(C=k.isPointLight===!0?p:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const nt=C.uuid,ft=z.uuid;let vt=g[nt];vt===void 0&&(vt={},g[nt]=vt);let ut=vt[ft];ut===void 0&&(ut=C.clone(),vt[ft]=ut,z.addEventListener("dispose",F)),C=ut}if(C.visible=z.visible,C.wireframe=z.wireframe,w===Ea?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:m[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=r.properties.get(C);nt.light=k}return C}function D(H,z,k,w,C){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Ea)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const ft=e.update(H),vt=H.material;if(Array.isArray(vt)){const ut=ft.groups;for(let q=0,rt=ut.length;q<rt;q++){const Z=ut[q],xt=vt[Z.materialIndex];if(xt&&xt.visible){const yt=L(H,xt,w,C);H.onBeforeShadow(r,H,z,k,ft,yt,Z),r.renderBufferDirect(k,null,ft,yt,H,Z),H.onAfterShadow(r,H,z,k,ft,yt,Z)}}}else if(vt.visible){const ut=L(H,vt,w,C);H.onBeforeShadow(r,H,z,k,ft,ut,null),r.renderBufferDirect(k,null,ft,ut,H,null),H.onAfterShadow(r,H,z,k,ft,ut,null)}}const nt=H.children;for(let ft=0,vt=nt.length;ft<vt;ft++)D(nt[ft],z,k,w,C)}function F(H){H.target.removeEventListener("dispose",F);for(const k in g){const w=g[k],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const z2={[up]:cp,[fp]:pp,[hp]:mp,[fo]:dp,[cp]:up,[pp]:fp,[mp]:hp,[dp]:fo};function I2(r,e){function i(){let G=!1;const Rt=new on;let Ut=null;const Xt=new on(0,0,0,0);return{setMask:function(Et){Ut!==Et&&!G&&(r.colorMask(Et,Et,Et,Et),Ut=Et)},setLocked:function(Et){G=Et},setClear:function(Et,_t,Wt,fe,He){He===!0&&(Et*=fe,_t*=fe,Wt*=fe),Rt.set(Et,_t,Wt,fe),Xt.equals(Rt)===!1&&(r.clearColor(Et,_t,Wt,fe),Xt.copy(Rt))},reset:function(){G=!1,Ut=null,Xt.set(-1,0,0,0)}}}function s(){let G=!1,Rt=!1,Ut=null,Xt=null,Et=null;return{setReversed:function(_t){if(Rt!==_t){const Wt=e.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Rt=_t;const fe=Et;Et=null,this.setClear(fe)}},getReversed:function(){return Rt},setTest:function(_t){_t?at(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(_t){Ut!==_t&&!G&&(r.depthMask(_t),Ut=_t)},setFunc:function(_t){if(Rt&&(_t=z2[_t]),Xt!==_t){switch(_t){case up:r.depthFunc(r.NEVER);break;case cp:r.depthFunc(r.ALWAYS);break;case fp:r.depthFunc(r.LESS);break;case fo:r.depthFunc(r.LEQUAL);break;case hp:r.depthFunc(r.EQUAL);break;case dp:r.depthFunc(r.GEQUAL);break;case pp:r.depthFunc(r.GREATER);break;case mp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Xt=_t}},setLocked:function(_t){G=_t},setClear:function(_t){Et!==_t&&(Rt&&(_t=1-_t),r.clearDepth(_t),Et=_t)},reset:function(){G=!1,Ut=null,Xt=null,Et=null,Rt=!1}}}function l(){let G=!1,Rt=null,Ut=null,Xt=null,Et=null,_t=null,Wt=null,fe=null,He=null;return{setTest:function(Ee){G||(Ee?at(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!G&&(r.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,$e,pn){(Ut!==Ee||Xt!==$e||Et!==pn)&&(r.stencilFunc(Ee,$e,pn),Ut=Ee,Xt=$e,Et=pn)},setOp:function(Ee,$e,pn){(_t!==Ee||Wt!==$e||fe!==pn)&&(r.stencilOp(Ee,$e,pn),_t=Ee,Wt=$e,fe=pn)},setLocked:function(Ee){G=Ee},setClear:function(Ee){He!==Ee&&(r.clearStencil(Ee),He=Ee)},reset:function(){G=!1,Rt=null,Ut=null,Xt=null,Et=null,_t=null,Wt=null,fe=null,He=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let v={},m={},x=new WeakMap,E=[],T=null,A=!1,y=null,S=null,N=null,L=null,D=null,F=null,H=null,z=new Xe(0,0,0),k=0,w=!1,C=null,X=null,nt=null,ft=null,vt=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,rt=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=rt>=2);let xt=null,yt={};const Vt=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),ne=new on().fromArray(Vt),B=new on().fromArray(se);function ht(G,Rt,Ut,Xt){const Et=new Uint8Array(4),_t=r.createTexture();r.bindTexture(G,_t),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<Ut;Wt++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Xt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(Rt+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return _t}const $={};$[r.TEXTURE_2D]=ht(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),at(r.DEPTH_TEST),h.setFunc(fo),Jt(!1),Ot(G0),at(r.CULL_FACE),Fe(fr);function at(G){v[G]!==!0&&(r.enable(G),v[G]=!0)}function Mt(G){v[G]!==!1&&(r.disable(G),v[G]=!1)}function Lt(G,Rt){return m[G]!==Rt?(r.bindFramebuffer(G,Rt),m[G]=Rt,G===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Rt),G===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ct(G,Rt){let Ut=E,Xt=!1;if(G){Ut=x.get(Rt),Ut===void 0&&(Ut=[],x.set(Rt,Ut));const Et=G.textures;if(Ut.length!==Et.length||Ut[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Wt=Et.length;_t<Wt;_t++)Ut[_t]=r.COLOR_ATTACHMENT0+_t;Ut.length=Et.length,Xt=!0}}else Ut[0]!==r.BACK&&(Ut[0]=r.BACK,Xt=!0);Xt&&r.drawBuffers(Ut)}function Tt(G){return T!==G?(r.useProgram(G),T=G,!0):!1}const Yt={[Zr]:r.FUNC_ADD,[Ab]:r.FUNC_SUBTRACT,[Rb]:r.FUNC_REVERSE_SUBTRACT};Yt[Cb]=r.MIN,Yt[wb]=r.MAX;const I={[Db]:r.ZERO,[Ub]:r.ONE,[Nb]:r.SRC_COLOR,[op]:r.SRC_ALPHA,[Bb]:r.SRC_ALPHA_SATURATE,[zb]:r.DST_COLOR,[Ob]:r.DST_ALPHA,[Lb]:r.ONE_MINUS_SRC_COLOR,[lp]:r.ONE_MINUS_SRC_ALPHA,[Ib]:r.ONE_MINUS_DST_COLOR,[Pb]:r.ONE_MINUS_DST_ALPHA,[Fb]:r.CONSTANT_COLOR,[Hb]:r.ONE_MINUS_CONSTANT_COLOR,[Vb]:r.CONSTANT_ALPHA,[Gb]:r.ONE_MINUS_CONSTANT_ALPHA};function Fe(G,Rt,Ut,Xt,Et,_t,Wt,fe,He,Ee){if(G===fr){A===!0&&(Mt(r.BLEND),A=!1);return}if(A===!1&&(at(r.BLEND),A=!0),G!==bb){if(G!==y||Ee!==w){if((S!==Zr||D!==Zr)&&(r.blendEquation(r.FUNC_ADD),S=Zr,D=Zr),Ee)switch(G){case oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case X0:r.blendFunc(r.ONE,r.ONE);break;case k0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case j0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case X0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case k0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,L=null,F=null,H=null,z.set(0,0,0),k=0,y=G,w=Ee}return}Et=Et||Rt,_t=_t||Ut,Wt=Wt||Xt,(Rt!==S||Et!==D)&&(r.blendEquationSeparate(Yt[Rt],Yt[Et]),S=Rt,D=Et),(Ut!==N||Xt!==L||_t!==F||Wt!==H)&&(r.blendFuncSeparate(I[Ut],I[Xt],I[_t],I[Wt]),N=Ut,L=Xt,F=_t,H=Wt),(fe.equals(z)===!1||He!==k)&&(r.blendColor(fe.r,fe.g,fe.b,He),z.copy(fe),k=He),y=G,w=!1}function le(G,Rt){G.side===Ma?Mt(r.CULL_FACE):at(r.CULL_FACE);let Ut=G.side===Zn;Rt&&(Ut=!Ut),Jt(Ut),G.blending===oo&&G.transparent===!1?Fe(fr):Fe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),c.setMask(G.colorWrite);const Xt=G.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ht(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function Ot(G){G!==Eb?(at(r.CULL_FACE),G!==X&&(G===G0?r.cullFace(r.BACK):G===Mb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),X=G}function re(G){G!==nt&&(q&&r.lineWidth(G),nt=G)}function Ht(G,Rt,Ut){G?(at(r.POLYGON_OFFSET_FILL),(ft!==Rt||vt!==Ut)&&(r.polygonOffset(Rt,Ut),ft=Rt,vt=Ut)):Mt(r.POLYGON_OFFSET_FILL)}function ue(G){G?at(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function je(G){G===void 0&&(G=r.TEXTURE0+ut-1),xt!==G&&(r.activeTexture(G),xt=G)}function Ye(G,Rt,Ut){Ut===void 0&&(xt===null?Ut=r.TEXTURE0+ut-1:Ut=xt);let Xt=yt[Ut];Xt===void 0&&(Xt={type:void 0,texture:void 0},yt[Ut]=Xt),(Xt.type!==G||Xt.texture!==Rt)&&(xt!==Ut&&(r.activeTexture(Ut),xt=Ut),r.bindTexture(G,Rt||$[G]),Xt.type=G,Xt.texture=Rt)}function U(){const G=yt[xt];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{r.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{r.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{r.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(){try{r.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(){try{r.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{r.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(G){ne.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),ne.copy(G))}function ae(G){B.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),B.copy(G))}function Kt(G,Rt){let Ut=g.get(Rt);Ut===void 0&&(Ut=new WeakMap,g.set(Rt,Ut));let Xt=Ut.get(G);Xt===void 0&&(Xt=r.getUniformBlockIndex(Rt,G.name),Ut.set(G,Xt))}function zt(G,Rt){const Xt=g.get(Rt).get(G);p.get(Rt)!==Xt&&(r.uniformBlockBinding(Rt,Xt,G.__bindingPointIndex),p.set(Rt,Xt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},xt=null,yt={},m={},x=new WeakMap,E=[],T=null,A=!1,y=null,S=null,N=null,L=null,D=null,F=null,H=null,z=new Xe(0,0,0),k=0,w=!1,C=null,X=null,nt=null,ft=null,vt=null,ne.set(0,0,r.canvas.width,r.canvas.height),B.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:at,disable:Mt,bindFramebuffer:Lt,drawBuffers:Ct,useProgram:Tt,setBlending:Fe,setMaterial:le,setFlipSided:Jt,setCullFace:Ot,setLineWidth:re,setPolygonOffset:Ht,setScissorTest:ue,activeTexture:je,bindTexture:Ye,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Qt,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:kt,scissor:Pt,viewport:ae,reset:he}}function B2(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ke,v=new WeakMap;let m;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return E?new OffscreenCanvas(U,b):Al("canvas")}function A(U,b,et){let mt=1;const St=Ye(U);if((St.width>et||St.height>et)&&(mt=et/Math.max(St.width,St.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(mt*St.width),kt=Math.floor(mt*St.height);m===void 0&&(m=T(dt,kt));const wt=b?T(dt,kt):m;return wt.width=dt,wt.height=kt,wt.getContext("2d").drawImage(U,0,0,dt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+kt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function y(U){return U.generateMipmaps}function S(U){r.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(U,b,et,mt,St=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=b;if(b===r.RED&&(et===r.FLOAT&&(dt=r.R32F),et===r.HALF_FLOAT&&(dt=r.R16F),et===r.UNSIGNED_BYTE&&(dt=r.R8)),b===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.R8UI),et===r.UNSIGNED_SHORT&&(dt=r.R16UI),et===r.UNSIGNED_INT&&(dt=r.R32UI),et===r.BYTE&&(dt=r.R8I),et===r.SHORT&&(dt=r.R16I),et===r.INT&&(dt=r.R32I)),b===r.RG&&(et===r.FLOAT&&(dt=r.RG32F),et===r.HALF_FLOAT&&(dt=r.RG16F),et===r.UNSIGNED_BYTE&&(dt=r.RG8)),b===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RG8UI),et===r.UNSIGNED_SHORT&&(dt=r.RG16UI),et===r.UNSIGNED_INT&&(dt=r.RG32UI),et===r.BYTE&&(dt=r.RG8I),et===r.SHORT&&(dt=r.RG16I),et===r.INT&&(dt=r.RG32I)),b===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),et===r.UNSIGNED_INT&&(dt=r.RGB32UI),et===r.BYTE&&(dt=r.RGB8I),et===r.SHORT&&(dt=r.RGB16I),et===r.INT&&(dt=r.RGB32I)),b===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),et===r.UNSIGNED_INT&&(dt=r.RGBA32UI),et===r.BYTE&&(dt=r.RGBA8I),et===r.SHORT&&(dt=r.RGBA16I),et===r.INT&&(dt=r.RGBA32I)),b===r.RGB&&(et===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),et===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),b===r.RGBA){const kt=St?zc:De.getTransfer(mt);et===r.FLOAT&&(dt=r.RGBA32F),et===r.HALF_FLOAT&&(dt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(dt=kt===Ge?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(U,b){let et;return U?b===null||b===$r||b===El?et=r.DEPTH24_STENCIL8:b===Ta?et=r.DEPTH32F_STENCIL8:b===yl&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$r||b===El?et=r.DEPTH_COMPONENT24:b===Ta?et=r.DEPTH_COMPONENT32F:b===yl&&(et=r.DEPTH_COMPONENT16),et}function F(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Li&&U.minFilter!==Zi?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function H(U){const b=U.target;b.removeEventListener("dispose",H),k(b),b.isVideoTexture&&v.delete(b)}function z(U){const b=U.target;b.removeEventListener("dispose",z),C(b)}function k(U){const b=s.get(U);if(b.__webglInit===void 0)return;const et=U.source,mt=x.get(et);if(mt){const St=mt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(U),Object.keys(mt).length===0&&x.delete(et)}s.remove(U)}function w(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const et=U.source,mt=x.get(et);delete mt[b.__cacheKey],h.memory.textures--}function C(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let St=0;St<b.__webglFramebuffer[mt].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[mt][St]);else r.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[mt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let mt=0,St=et.length;mt<St;mt++){const dt=s.get(et[mt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(et[mt])}s.remove(U)}let X=0;function nt(){X=0}function ft(){const U=X;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),X+=1,U}function vt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ut(U,b){const et=s.get(U);if(U.isVideoTexture&&ue(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){const mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,U,b);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+b)}function q(U,b){const et=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+b)}function rt(U,b){const et=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+b)}function Z(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){at(et,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+b)}const xt={[_p]:r.REPEAT,[Qr]:r.CLAMP_TO_EDGE,[xp]:r.MIRRORED_REPEAT},yt={[Li]:r.NEAREST,[Jb]:r.NEAREST_MIPMAP_NEAREST,[rc]:r.NEAREST_MIPMAP_LINEAR,[Zi]:r.LINEAR,[wd]:r.LINEAR_MIPMAP_NEAREST,[Jr]:r.LINEAR_MIPMAP_LINEAR},Vt={[iA]:r.NEVER,[uA]:r.ALWAYS,[aA]:r.LESS,[ES]:r.LEQUAL,[rA]:r.EQUAL,[lA]:r.GEQUAL,[sA]:r.GREATER,[oA]:r.NOTEQUAL};function se(U,b){if(b.type===Ta&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Zi||b.magFilter===wd||b.magFilter===rc||b.magFilter===Jr||b.minFilter===Zi||b.minFilter===wd||b.minFilter===rc||b.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,xt[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,xt[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,xt[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,yt[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Vt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Li||b.minFilter!==rc&&b.minFilter!==Jr||b.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ne(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",H));const mt=b.source;let St=x.get(mt);St===void 0&&(St={},x.set(mt,St));const dt=vt(b);if(dt!==U.__cacheKey){St[dt]===void 0&&(St[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),St[dt].usedTimes++;const kt=St[U.__cacheKey];kt!==void 0&&(St[U.__cacheKey].usedTimes--,kt.usedTimes===0&&w(b)),U.__cacheKey=dt,U.__webglTexture=St[dt].texture}return et}function B(U,b,et){return Math.floor(Math.floor(U/et)/b)}function ht(U,b,et,mt){const dt=U.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,et,mt,b.data);else{dt.sort((At,Pt)=>At.start-Pt.start);let kt=0;for(let At=1;At<dt.length;At++){const Pt=dt[kt],ae=dt[At],Kt=Pt.start+Pt.count,zt=B(ae.start,b.width,4),he=B(Pt.start,b.width,4);ae.start<=Kt+1&&zt===he&&B(ae.start+ae.count-1,b.width,4)===zt?Pt.count=Math.max(Pt.count,ae.start+ae.count-Pt.start):(++kt,dt[kt]=ae)}dt.length=kt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),Qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let At=0,Pt=dt.length;At<Pt;At++){const ae=dt[At],Kt=Math.floor(ae.start/4),zt=Math.ceil(ae.count/4),he=Kt%b.width,G=Math.floor(Kt/b.width),Rt=zt,Ut=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),i.texSubImage2D(r.TEXTURE_2D,0,he,G,Rt,Ut,et,mt,b.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qt)}}function $(U,b,et){let mt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=r.TEXTURE_3D);const St=ne(U,b),dt=b.source;i.bindTexture(mt,U.__webglTexture,r.TEXTURE0+et);const kt=s.get(dt);if(dt.version!==kt.__version||St===!0){i.activeTexture(r.TEXTURE0+et);const wt=De.getPrimaries(De.workingColorSpace),Zt=b.colorSpace===cr?null:De.getPrimaries(b.colorSpace),Qt=b.colorSpace===cr||wt===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let At=A(b.image,!1,l.maxTextureSize);At=je(b,At);const Pt=c.convert(b.format,b.colorSpace),ae=c.convert(b.type);let Kt=L(b.internalFormat,Pt,ae,b.colorSpace,b.isVideoTexture);se(mt,b);let zt;const he=b.mipmaps,G=b.isVideoTexture!==!0,Rt=kt.__version===void 0||St===!0,Ut=dt.dataReady,Xt=F(b,At);if(b.isDepthTexture)Kt=D(b.format===Tl,b.type),Rt&&(G?i.texStorage2D(r.TEXTURE_2D,1,Kt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Kt,At.width,At.height,0,Pt,ae,null));else if(b.isDataTexture)if(he.length>0){G&&Rt&&i.texStorage2D(r.TEXTURE_2D,Xt,Kt,he[0].width,he[0].height);for(let Et=0,_t=he.length;Et<_t;Et++)zt=he[Et],G?Ut&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,zt.width,zt.height,Pt,ae,zt.data):i.texImage2D(r.TEXTURE_2D,Et,Kt,zt.width,zt.height,0,Pt,ae,zt.data);b.generateMipmaps=!1}else G?(Rt&&i.texStorage2D(r.TEXTURE_2D,Xt,Kt,At.width,At.height),Ut&&ht(b,At,Pt,ae)):i.texImage2D(r.TEXTURE_2D,0,Kt,At.width,At.height,0,Pt,ae,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xt,Kt,he[0].width,he[0].height,At.depth);for(let Et=0,_t=he.length;Et<_t;Et++)if(zt=he[Et],b.format!==Ui)if(Pt!==null)if(G){if(Ut)if(b.layerUpdates.size>0){const Wt=px(zt.width,zt.height,b.format,b.type);for(const fe of b.layerUpdates){const He=zt.data.subarray(fe*Wt/zt.data.BYTES_PER_ELEMENT,(fe+1)*Wt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,fe,zt.width,zt.height,1,Pt,He)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,Pt,zt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Kt,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ut&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,Pt,ae,zt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Et,Kt,zt.width,zt.height,At.depth,0,Pt,ae,zt.data)}else{G&&Rt&&i.texStorage2D(r.TEXTURE_2D,Xt,Kt,he[0].width,he[0].height);for(let Et=0,_t=he.length;Et<_t;Et++)zt=he[Et],b.format!==Ui?Pt!==null?G?Ut&&i.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,zt.width,zt.height,Pt,zt.data):i.compressedTexImage2D(r.TEXTURE_2D,Et,Kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ut&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,zt.width,zt.height,Pt,ae,zt.data):i.texImage2D(r.TEXTURE_2D,Et,Kt,zt.width,zt.height,0,Pt,ae,zt.data)}else if(b.isDataArrayTexture)if(G){if(Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xt,Kt,At.width,At.height,At.depth),Ut)if(b.layerUpdates.size>0){const Et=px(At.width,At.height,b.format,b.type);for(const _t of b.layerUpdates){const Wt=At.data.subarray(_t*Et/At.data.BYTES_PER_ELEMENT,(_t+1)*Et/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Pt,ae,Wt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Pt,ae,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,At.width,At.height,At.depth,0,Pt,ae,At.data);else if(b.isData3DTexture)G?(Rt&&i.texStorage3D(r.TEXTURE_3D,Xt,Kt,At.width,At.height,At.depth),Ut&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Pt,ae,At.data)):i.texImage3D(r.TEXTURE_3D,0,Kt,At.width,At.height,At.depth,0,Pt,ae,At.data);else if(b.isFramebufferTexture){if(Rt)if(G)i.texStorage2D(r.TEXTURE_2D,Xt,Kt,At.width,At.height);else{let Et=At.width,_t=At.height;for(let Wt=0;Wt<Xt;Wt++)i.texImage2D(r.TEXTURE_2D,Wt,Kt,Et,_t,0,Pt,ae,null),Et>>=1,_t>>=1}}else if(he.length>0){if(G&&Rt){const Et=Ye(he[0]);i.texStorage2D(r.TEXTURE_2D,Xt,Kt,Et.width,Et.height)}for(let Et=0,_t=he.length;Et<_t;Et++)zt=he[Et],G?Ut&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Pt,ae,zt):i.texImage2D(r.TEXTURE_2D,Et,Kt,Pt,ae,zt);b.generateMipmaps=!1}else if(G){if(Rt){const Et=Ye(At);i.texStorage2D(r.TEXTURE_2D,Xt,Kt,Et.width,Et.height)}Ut&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,ae,At)}else i.texImage2D(r.TEXTURE_2D,0,Kt,Pt,ae,At);y(b)&&S(mt),kt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function at(U,b,et){if(b.image.length!==6)return;const mt=ne(U,b),St=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+et);const dt=s.get(St);if(St.version!==dt.__version||mt===!0){i.activeTexture(r.TEXTURE0+et);const kt=De.getPrimaries(De.workingColorSpace),wt=b.colorSpace===cr?null:De.getPrimaries(b.colorSpace),Zt=b.colorSpace===cr||kt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Qt&&!At?Pt[_t]=A(b.image[_t],!0,l.maxCubemapSize):Pt[_t]=At?b.image[_t].image:b.image[_t],Pt[_t]=je(b,Pt[_t]);const ae=Pt[0],Kt=c.convert(b.format,b.colorSpace),zt=c.convert(b.type),he=L(b.internalFormat,Kt,zt,b.colorSpace),G=b.isVideoTexture!==!0,Rt=dt.__version===void 0||mt===!0,Ut=St.dataReady;let Xt=F(b,ae);se(r.TEXTURE_CUBE_MAP,b);let Et;if(Qt){G&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,he,ae.width,ae.height);for(let _t=0;_t<6;_t++){Et=Pt[_t].mipmaps;for(let Wt=0;Wt<Et.length;Wt++){const fe=Et[Wt];b.format!==Ui?Kt!==null?G?Ut&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,fe.width,fe.height,Kt,fe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,fe.width,fe.height,Kt,zt,fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,he,fe.width,fe.height,0,Kt,zt,fe.data)}}}else{if(Et=b.mipmaps,G&&Rt){Et.length>0&&Xt++;const _t=Ye(Pt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,he,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){G?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,Kt,zt,Pt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,Pt[_t].width,Pt[_t].height,0,Kt,zt,Pt[_t].data);for(let Wt=0;Wt<Et.length;Wt++){const He=Et[Wt].image[_t].image;G?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,He.width,He.height,Kt,zt,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,he,He.width,He.height,0,Kt,zt,He.data)}}else{G?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Kt,zt,Pt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,Kt,zt,Pt[_t]);for(let Wt=0;Wt<Et.length;Wt++){const fe=Et[Wt];G?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Kt,zt,fe.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,he,Kt,zt,fe.image[_t])}}}y(b)&&S(r.TEXTURE_CUBE_MAP),dt.__version=St.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Mt(U,b,et,mt,St,dt){const kt=c.convert(et.format,et.colorSpace),wt=c.convert(et.type),Zt=L(et.internalFormat,kt,wt,et.colorSpace),Qt=s.get(b),At=s.get(et);if(At.__renderTarget=b,!Qt.__hasExternalTextures){const Pt=Math.max(1,b.width>>dt),ae=Math.max(1,b.height>>dt);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,dt,Zt,Pt,ae,b.depth,0,kt,wt,null):i.texImage2D(St,dt,Zt,Pt,ae,0,kt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,St,At.__webglTexture,0,re(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,St,At.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(U,b,et){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const mt=b.depthTexture,St=mt&&mt.isDepthTexture?mt.type:null,dt=D(b.stencilBuffer,St),kt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=re(b);Ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,dt,b.width,b.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,dt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,dt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,U)}else{const mt=b.textures;for(let St=0;St<mt.length;St++){const dt=mt[St],kt=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),Zt=L(dt.internalFormat,kt,wt,dt.colorSpace),Qt=re(b);et&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Zt,b.width,b.height):Ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt,Zt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const St=mt.__webglTexture,dt=re(b);if(b.depthTexture.format===Ml)Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0);else if(b.depthTexture.format===Tl)Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Tt(U){const b=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const mt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",St)};mt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=mt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const mt=U.texture.mipmaps;mt&&mt.length>0?Ct(b.__webglFramebuffer[0],U):Ct(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=r.createRenderbuffer(),Lt(b.__webglDepthbuffer[mt],U,!1);else{const St=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,dt)}}else{const mt=U.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Lt(b.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(U,b,et){const mt=s.get(U);b!==void 0&&Mt(mt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Tt(U)}function I(U){const b=U.texture,et=s.get(U),mt=s.get(b);U.addEventListener("dispose",z);const St=U.textures,dt=U.isWebGLCubeRenderTarget===!0,kt=St.length>1;if(kt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=b.version,h.memory.textures++),dt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<b.mipmaps.length;Zt++)et.__webglFramebuffer[wt][Zt]=r.createFramebuffer()}else et.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)et.__webglFramebuffer[wt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(kt)for(let wt=0,Zt=St.length;wt<Zt;wt++){const Qt=s.get(St[wt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Zt=St[wt];et.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const Qt=c.convert(Zt.format,Zt.colorSpace),At=c.convert(Zt.type),Pt=L(Zt.internalFormat,Qt,At,Zt.colorSpace,U.isXRRenderTarget===!0),ae=re(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,Pt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),se(r.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Mt(et.__webglFramebuffer[wt][Zt],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else Mt(et.__webglFramebuffer[wt],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(b)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let wt=0,Zt=St.length;wt<Zt;wt++){const Qt=St[wt],At=s.get(Qt);let Pt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pt,At.__webglTexture),se(Pt,Qt),Mt(et.__webglFramebuffer,U,Qt,r.COLOR_ATTACHMENT0+wt,Pt,0),y(Qt)&&S(Pt)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,mt.__webglTexture),se(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Mt(et.__webglFramebuffer[Zt],U,b,r.COLOR_ATTACHMENT0,wt,Zt);else Mt(et.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,wt,0);y(b)&&S(wt),i.unbindTexture()}U.depthBuffer&&Tt(U)}function Fe(U){const b=U.textures;for(let et=0,mt=b.length;et<mt;et++){const St=b[et];if(y(St)){const dt=N(U),kt=s.get(St).__webglTexture;i.bindTexture(dt,kt),S(dt),i.unbindTexture()}}}const le=[],Jt=[];function Ot(U){if(U.samples>0){if(Ht(U)===!1){const b=U.textures,et=U.width,mt=U.height;let St=r.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=s.get(U),wt=b.length>1;if(wt)for(let Qt=0;Qt<b.length;Qt++)i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Qt=0;Qt<b.length;Qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[Qt]);const At=s.get(b[Qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,et,mt,0,0,et,mt,St,r.NEAREST),p===!0&&(le.length=0,Jt.length=0,le.push(r.COLOR_ATTACHMENT0+Qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(le.push(dt),Jt.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Jt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let Qt=0;Qt<b.length;Qt++){i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,kt.__webglColorRenderbuffer[Qt]);const At=s.get(b[Qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function re(U){return Math.min(l.maxSamples,U.samples)}function Ht(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(U){const b=h.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function je(U,b){const et=U.colorSpace,mt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==mo&&et!==cr&&(De.getTransfer(et)===Ge?(mt!==Ui||St!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Ye(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=ft,this.resetTextureUnits=nt,this.setTexture2D=ut,this.setTexture2DArray=q,this.setTexture3D=rt,this.setTextureCube=Z,this.rebindTextures=Yt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ht}function F2(r,e){function i(s,l=cr){let c;const h=De.getTransfer(l);if(s===Ra)return r.UNSIGNED_BYTE;if(s===sm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===om)return r.UNSIGNED_SHORT_5_5_5_1;if(s===gS)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===vS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===pS)return r.BYTE;if(s===mS)return r.SHORT;if(s===yl)return r.UNSIGNED_SHORT;if(s===rm)return r.INT;if(s===$r)return r.UNSIGNED_INT;if(s===Ta)return r.FLOAT;if(s===Ul)return r.HALF_FLOAT;if(s===_S)return r.ALPHA;if(s===xS)return r.RGB;if(s===Ui)return r.RGBA;if(s===Ml)return r.DEPTH_COMPONENT;if(s===Tl)return r.DEPTH_STENCIL;if(s===SS)return r.RED;if(s===lm)return r.RED_INTEGER;if(s===yS)return r.RG;if(s===um)return r.RG_INTEGER;if(s===cm)return r.RGBA_INTEGER;if(s===wc||s===Dc||s===Uc||s===Nc)if(h===Ge)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sp||s===yp||s===Ep||s===Mp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ep)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tp||s===bp||s===Ap)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Tp||s===bp)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ap)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rp||s===Cp||s===wp||s===Dp||s===Up||s===Np||s===Lp||s===Op||s===Pp||s===zp||s===Ip||s===Bp||s===Fp||s===Hp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Up)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Np)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Op)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ip)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vp||s===Gp||s===Xp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Vp)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kp||s===jp||s===qp||s===Yp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===kp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===El?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const H2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new OS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new pr({vertexShader:H2,fragmentShader:V2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new kc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X2 extends _o{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,g=null,v=null,m=null,x=null,E=null,T=null;const A=typeof XRWebGLBinding<"u",y=new G2,S={},N=i.getContextAttributes();let L=null,D=null;const F=[],H=[],z=new ke;let k=null;const w=new xi;w.viewport=new on;const C=new xi;C.viewport=new on;const X=[w,C],nt=new c1;let ft=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=F[$];return at===void 0&&(at=new Kd,F[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=F[$];return at===void 0&&(at=new Kd,F[$]=at),at.getGripSpace()},this.getHand=function($){let at=F[$];return at===void 0&&(at=new Kd,F[$]=at),at.getHandSpace()};function ut($){const at=H.indexOf($.inputSource);if(at===-1)return;const Mt=F[at];Mt!==void 0&&(Mt.update($.inputSource,$.frame,g||h),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",rt);for(let $=0;$<F.length;$++){const at=H[$];at!==null&&(H[$]=null,F[$].disconnect(at))}ft=null,vt=null,y.reset();for(const $ in S)delete S[$];e.setRenderTarget(L),E=null,x=null,m=null,l=null,D=null,ht.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function($){g=$},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",q),l.addEventListener("inputsourceschange",rt),N.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Lt=null,Ct=null;N.depth&&(Ct=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=N.stencil?Tl:Ml,Lt=N.stencil?El:$r);const Tt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};m=this.getBinding(),x=m.createProjectionLayer(Tt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new ts(x.textureWidth,x.textureHeight,{format:Ui,type:Ra,depthTexture:new LS(x.textureWidth,x.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new ts(E.framebufferWidth,E.framebufferHeight,{format:Ui,type:Ra,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),ht.setContext(l),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function rt($){for(let at=0;at<$.removed.length;at++){const Mt=$.removed[at],Lt=H.indexOf(Mt);Lt>=0&&(H[Lt]=null,F[Lt].disconnect(Mt))}for(let at=0;at<$.added.length;at++){const Mt=$.added[at];let Lt=H.indexOf(Mt);if(Lt===-1){for(let Tt=0;Tt<F.length;Tt++)if(Tt>=H.length){H.push(Mt),Lt=Tt;break}else if(H[Tt]===null){H[Tt]=Mt,Lt=Tt;break}if(Lt===-1)break}const Ct=F[Lt];Ct&&Ct.connect(Mt)}}const Z=new lt,xt=new lt;function yt($,at,Mt){Z.setFromMatrixPosition(at.matrixWorld),xt.setFromMatrixPosition(Mt.matrixWorld);const Lt=Z.distanceTo(xt),Ct=at.projectionMatrix.elements,Tt=Mt.projectionMatrix.elements,Yt=Ct[14]/(Ct[10]-1),I=Ct[14]/(Ct[10]+1),Fe=(Ct[9]+1)/Ct[5],le=(Ct[9]-1)/Ct[5],Jt=(Ct[8]-1)/Ct[0],Ot=(Tt[8]+1)/Tt[0],re=Yt*Jt,Ht=Yt*Ot,ue=Lt/(-Jt+Ot),je=ue*-Jt;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ(ue),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Ye=Yt+ue,U=I+ue,b=re-je,et=Ht+(Lt-je),mt=Fe*I/U*Ye,St=le*I/U*Ye;$.projectionMatrix.makePerspective(b,et,mt,St,Ye,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Vt($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let at=$.near,Mt=$.far;y.texture!==null&&(y.depthNear>0&&(at=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),nt.near=C.near=w.near=at,nt.far=C.far=w.far=Mt,(ft!==nt.near||vt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ft=nt.near,vt=nt.far),nt.layers.mask=$.layers.mask|6,w.layers.mask=nt.layers.mask&3,C.layers.mask=nt.layers.mask&5;const Lt=$.parent,Ct=nt.cameras;Vt(nt,Lt);for(let Tt=0;Tt<Ct.length;Tt++)Vt(Ct[Tt],Lt);Ct.length===2?yt(nt,w,C):nt.projectionMatrix.copy(w.projectionMatrix),se($,nt,Lt)};function se($,at,Mt){Mt===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function($){p=$,x!==null&&(x.fixedFoveation=$),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(nt)},this.getCameraTexture=function($){return S[$]};let ne=null;function B($,at){if(v=at.getViewerPose(g||h),T=at,v!==null){const Mt=v.views;E!==null&&(e.setRenderTargetFramebuffer(D,E.framebuffer),e.setRenderTarget(D));let Lt=!1;Mt.length!==nt.cameras.length&&(nt.cameras.length=0,Lt=!0);for(let I=0;I<Mt.length;I++){const Fe=Mt[I];let le=null;if(E!==null)le=E.getViewport(Fe);else{const Ot=m.getViewSubImage(x,Fe);le=Ot.viewport,I===0&&(e.setRenderTargetTextures(D,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(D))}let Jt=X[I];Jt===void 0&&(Jt=new xi,Jt.layers.enable(I),Jt.viewport=new on,X[I]=Jt),Jt.matrix.fromArray(Fe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Fe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(le.x,le.y,le.width,le.height),I===0&&(nt.matrix.copy(Jt.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Lt===!0&&nt.cameras.push(Jt)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){m=s.getBinding();const I=m.getDepthInformation(Mt[0]);I&&I.isValid&&I.texture&&y.init(I,l.renderState)}if(Ct&&Ct.includes("camera-access")&&A){e.state.unbindTexture(),m=s.getBinding();for(let I=0;I<Mt.length;I++){const Fe=Mt[I].camera;if(Fe){let le=S[Fe];le||(le=new OS,S[Fe]=le);const Jt=m.getCameraImage(Fe);le.sourceTexture=Jt}}}}for(let Mt=0;Mt<F.length;Mt++){const Lt=H[Mt],Ct=F[Mt];Lt!==null&&Ct!==void 0&&Ct.update(Lt,at,g||h)}ne&&ne($,at),at.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:at}),T=null}const ht=new PS;ht.setAnimationLoop(B),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}const jr=new Ca,k2=new vn;function j2(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,wS(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,N,L,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(y,S):S.isMeshToonMaterial?(c(y,S),m(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S)):S.isMeshStandardMaterial?(c(y,S),x(y,S),S.isMeshPhysicalMaterial&&E(y,S,D)):S.isMeshMatcapMaterial?(c(y,S),T(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?p(y,S,N,L):S.isSpriteMaterial?g(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Zn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Zn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=e.get(S),L=N.envMap,D=N.envMapRotation;L&&(y.envMap.value=L,jr.copy(D),jr.x*=-1,jr.y*=-1,jr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),y.envMapRotation.value.setFromMatrix4(k2.makeRotationFromEuler(jr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,N,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=L*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const N=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function q2(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const D=L.program;s.uniformBlockBinding(N,D)}function g(N,L){let D=l[N.id];D===void 0&&(T(N),D=v(N),l[N.id]=D,N.addEventListener("dispose",y));const F=L.program;s.updateUBOMapping(N,F);const H=e.render.frame;c[N.id]!==H&&(x(N),c[N.id]=H)}function v(N){const L=m();N.__bindingPointIndex=L;const D=r.createBuffer(),F=N.__size,H=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function m(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],D=N.uniforms,F=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,z=D.length;H<z;H++){const k=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=k.length;w<C;w++){const X=k[w];if(E(X,H,w,F)===!0){const nt=X.__offset,ft=Array.isArray(X.value)?X.value:[X.value];let vt=0;for(let ut=0;ut<ft.length;ut++){const q=ft[ut],rt=A(q);typeof q=="number"||typeof q=="boolean"?(X.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,nt+vt,X.__data)):q.isMatrix3?(X.__data[0]=q.elements[0],X.__data[1]=q.elements[1],X.__data[2]=q.elements[2],X.__data[3]=0,X.__data[4]=q.elements[3],X.__data[5]=q.elements[4],X.__data[6]=q.elements[5],X.__data[7]=0,X.__data[8]=q.elements[6],X.__data[9]=q.elements[7],X.__data[10]=q.elements[8],X.__data[11]=0):(q.toArray(X.__data,vt),vt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,nt,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(N,L,D,F){const H=N.value,z=L+"_"+D;if(F[z]===void 0)return typeof H=="number"||typeof H=="boolean"?F[z]=H:F[z]=H.clone(),!0;{const k=F[z];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return F[z]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function T(N){const L=N.uniforms;let D=0;const F=16;for(let z=0,k=L.length;z<k;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,X=w.length;C<X;C++){const nt=w[C],ft=Array.isArray(nt.value)?nt.value:[nt.value];for(let vt=0,ut=ft.length;vt<ut;vt++){const q=ft[vt],rt=A(q),Z=D%F,xt=Z%rt.boundary,yt=Z+xt;D+=xt,yt!==0&&F-yt<rt.storage&&(D+=F-yt),nt.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=D,D+=rt.storage}}}const H=D%F;return H>0&&(D+=F-H),N.__size=D,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const N in l)r.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:p,update:g,dispose:S}}class Y2{constructor(e={}){const{canvas:i=AA(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,S=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=Wn;let H=0,z=0,k=null,w=-1,C=null;const X=new on,nt=new on;let ft=null;const vt=new Xe(0);let ut=0,q=i.width,rt=i.height,Z=1,xt=null,yt=null;const Vt=new on(0,0,q,rt),se=new on(0,0,q,rt);let ne=!1;const B=new NS;let ht=!1,$=!1;const at=new vn,Mt=new lt,Lt=new on,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Yt(){return k===null?Z:1}let I=s;function Fe(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${am}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",Xt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),I===null){const K="webgl2";if(I=Fe(K,R),I===null)throw Fe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,Jt,Ot,re,Ht,ue,je,Ye,U,b,et,mt,St,dt,kt,wt,Zt,Qt,At,Pt,ae,Kt,zt,he;function G(){le=new iw(I),le.init(),Kt=new F2(I,le),Jt=new KC(I,le,e,Kt),Ot=new I2(I,le),Jt.reversedDepthBuffer&&x&&Ot.buffers.depth.setReversed(!0),re=new sw(I),Ht=new T2,ue=new B2(I,le,Ot,Ht,Jt,Kt,re),je=new JC(D),Ye=new nw(D),U=new h1(I),zt=new WC(I,U),b=new aw(I,U,re,zt),et=new lw(I,b,U,re),At=new ow(I,Jt,ue),wt=new QC(Ht),mt=new M2(D,je,Ye,le,Jt,zt,wt),St=new j2(D,Ht),dt=new A2,kt=new N2(le),Qt=new YC(D,je,Ye,Ot,et,E,p),Zt=new P2(D,et,Jt),he=new q2(I,re,Jt,Ot),Pt=new ZC(I,le,re),ae=new rw(I,le,re),re.programs=mt.programs,D.capabilities=Jt,D.extensions=le,D.properties=Ht,D.renderLists=dt,D.shadowMap=Zt,D.state=Ot,D.info=re}G();const Rt=new X2(D,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(q,rt,!1))},this.getSize=function(R){return R.set(q,rt)},this.setSize=function(R,K,st=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,rt=K,i.width=Math.floor(R*Z),i.height=Math.floor(K*Z),st===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(q*Z,rt*Z).floor()},this.setDrawingBufferSize=function(R,K,st){q=R,rt=K,Z=st,i.width=Math.floor(R*st),i.height=Math.floor(K*st),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(Vt)},this.setViewport=function(R,K,st,ot){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,K,st,ot),Ot.viewport(X.copy(Vt).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,K,st,ot){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,K,st,ot),Ot.scissor(nt.copy(se).multiplyScalar(Z).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){Ot.setScissorTest(ne=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,st=!0){let ot=0;if(R){let Q=!1;if(k!==null){const bt=k.texture.format;Q=bt===cm||bt===um||bt===lm}if(Q){const bt=k.texture.type,It=bt===Ra||bt===$r||bt===yl||bt===El||bt===sm||bt===om,Ft=Qt.getClearColor(),Dt=Qt.getClearAlpha(),jt=Ft.r,ie=Ft.g,te=Ft.b;It?(T[0]=jt,T[1]=ie,T[2]=te,T[3]=Dt,I.clearBufferuiv(I.COLOR,0,T)):(A[0]=jt,A[1]=ie,A[2]=te,A[3]=Dt,I.clearBufferiv(I.COLOR,0,A))}else ot|=I.COLOR_BUFFER_BIT}K&&(ot|=I.DEPTH_BUFFER_BIT),st&&(ot|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",Xt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Qt.dispose(),dt.dispose(),kt.dispose(),Ht.dispose(),je.dispose(),Ye.dispose(),et.dispose(),zt.dispose(),he.dispose(),mt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",pn),Rt.removeEventListener("sessionend",Dn),ea.stop()};function Ut(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=re.autoReset,K=Zt.enabled,st=Zt.autoUpdate,ot=Zt.needsUpdate,Q=Zt.type;G(),re.autoReset=R,Zt.enabled=K,Zt.autoUpdate=st,Zt.needsUpdate=ot,Zt.type=Q}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const K=R.target;K.removeEventListener("dispose",_t),Wt(K)}function Wt(R){fe(R),Ht.remove(R)}function fe(R){const K=Ht.get(R).programs;K!==void 0&&(K.forEach(function(st){mt.releaseProgram(st)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,st,ot,Q,bt){K===null&&(K=Ct);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=zl(R,K,st,ot,Q);Ot.setMaterial(ot,It);let Dt=st.index,jt=1;if(ot.wireframe===!0){if(Dt=b.getWireframeAttribute(st),Dt===void 0)return;jt=2}const ie=st.drawRange,te=st.attributes.position;let xe=ie.start*jt,Oe=(ie.start+ie.count)*jt;bt!==null&&(xe=Math.max(xe,bt.start*jt),Oe=Math.min(Oe,(bt.start+bt.count)*jt)),Dt!==null?(xe=Math.max(xe,0),Oe=Math.min(Oe,Dt.count)):te!=null&&(xe=Math.max(xe,0),Oe=Math.min(Oe,te.count));const Qe=Oe-xe;if(Qe<0||Qe===1/0)return;zt.setup(Q,ot,Ft,st,Dt);let Ue,Re=Pt;if(Dt!==null&&(Ue=U.get(Dt),Re=ae,Re.setIndex(Ue)),Q.isMesh)ot.wireframe===!0?(Ot.setLineWidth(ot.wireframeLinewidth*Yt()),Re.setMode(I.LINES)):Re.setMode(I.TRIANGLES);else if(Q.isLine){let ee=ot.linewidth;ee===void 0&&(ee=1),Ot.setLineWidth(ee*Yt()),Q.isLineSegments?Re.setMode(I.LINES):Q.isLineLoop?Re.setMode(I.LINE_LOOP):Re.setMode(I.LINE_STRIP)}else Q.isPoints?Re.setMode(I.POINTS):Q.isSprite&&Re.setMode(I.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ee=Q._multiDrawStarts,Ne=Q._multiDrawCounts,ve=Q._multiDrawCount,mn=Dt?U.get(Dt).bytesPerElement:1,Kn=Ht.get(ot).currentProgram.getUniforms();for(let Ce=0;Ce<ve;Ce++)Kn.setValue(I,"_gl_DrawID",Ce),Re.render(ee[Ce]/mn,Ne[Ce])}else if(Q.isInstancedMesh)Re.renderInstances(xe,Qe,Q.count);else if(st.isInstancedBufferGeometry){const ee=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ne=Math.min(st.instanceCount,ee);Re.renderInstances(xe,Qe,Ne)}else Re.render(xe,Qe)};function He(R,K,st){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,li(R,K,st),R.side=dr,R.needsUpdate=!0,li(R,K,st),R.side=Ma):li(R,K,st)}this.compile=function(R,K,st=null){st===null&&(st=R),S=kt.get(st),S.init(K),L.push(S),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),R!==st&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const bt=Q.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Ft=bt[It];He(Ft,st,Q),ot.add(Ft)}else He(bt,st,Q),ot.add(bt)}),S=L.pop(),ot},this.compileAsync=function(R,K,st=null){const ot=this.compile(R,K,st);return new Promise(Q=>{function bt(){if(ot.forEach(function(It){Ht.get(It).currentProgram.isReady()&&ot.delete(It)}),ot.size===0){Q(R);return}setTimeout(bt,10)}le.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ee=null;function $e(R){Ee&&Ee(R)}function pn(){ea.stop()}function Dn(){ea.start()}const ea=new PS;ea.setAnimationLoop($e),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(R){Ee=R,Rt.setAnimationLoop(R),R===null?ea.stop():ea.start()},Rt.addEventListener("sessionstart",pn),Rt.addEventListener("sessionend",Dn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(K),K=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,K,k),S=kt.get(R,L.length),S.init(K),L.push(S),at.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B.setFromProjectionMatrix(at,Ki,K.reversedDepth),$=this.localClippingEnabled,ht=wt.init(this.clippingPlanes,$),y=dt.get(R,N.length),y.init(),N.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&yo(bt,K,-1/0,D.sortObjects)}yo(R,K,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,yt),Tt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Tt&&Qt.addToRenderList(y,R),this.info.render.frame++,ht===!0&&wt.beginShadows();const st=S.state.shadowsArray;Zt.render(st,R,K),ht===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Q=y.transmissive;if(S.setupLights(),K.isArrayCamera){const bt=K.cameras;if(Q.length>0)for(let It=0,Ft=bt.length;It<Ft;It++){const Dt=bt[It];gr(ot,Q,R,Dt)}Tt&&Qt.render(R);for(let It=0,Ft=bt.length;It<Ft;It++){const Dt=bt[It];Pl(y,R,Dt,Dt.viewport)}}else Q.length>0&&gr(ot,Q,R,K),Tt&&Qt.render(R),Pl(y,R,K);k!==null&&z===0&&(ue.updateMultisampleRenderTarget(k),ue.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(D,R,K),zt.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(S=L[L.length-1],ht===!0&&wt.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function yo(R,K,st,ot){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||B.intersectsSprite(R)){ot&&Lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);const It=et.update(R),Ft=R.material;Ft.visible&&y.push(R,It,Ft,st,Lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||B.intersectsObject(R))){const It=et.update(R),Ft=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Lt.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Lt.copy(It.boundingSphere.center)),Lt.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(Ft)){const Dt=It.groups;for(let jt=0,ie=Dt.length;jt<ie;jt++){const te=Dt[jt],xe=Ft[te.materialIndex];xe&&xe.visible&&y.push(R,It,xe,st,Lt.z,te)}}else Ft.visible&&y.push(R,It,Ft,st,Lt.z,null)}}const bt=R.children;for(let It=0,Ft=bt.length;It<Ft;It++)yo(bt[It],K,st,ot)}function Pl(R,K,st,ot){const Q=R.opaque,bt=R.transmissive,It=R.transparent;S.setupLightsView(st),ht===!0&&wt.setGlobalState(D.clippingPlanes,st),ot&&Ot.viewport(X.copy(ot)),Q.length>0&&na(Q,K,st),bt.length>0&&na(bt,K,st),It.length>0&&na(It,K,st),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function gr(R,K,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ot.id]===void 0&&(S.state.transmissionRenderTarget[ot.id]=new ts(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Ul:Ra,minFilter:Jr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=S.state.transmissionRenderTarget[ot.id],It=ot.viewport||X;bt.setSize(It.z*D.transmissionResolutionScale,It.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Dt=D.getActiveCubeFace(),jt=D.getActiveMipmapLevel();D.setRenderTarget(bt),D.getClearColor(vt),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Tt&&Qt.render(st);const ie=D.toneMapping;D.toneMapping=hr;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),S.setupLightsView(ot),ht===!0&&wt.setGlobalState(D.clippingPlanes,ot),na(R,st,ot),ue.updateMultisampleRenderTarget(bt),ue.updateRenderTargetMipmap(bt),le.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Oe=0,Qe=K.length;Oe<Qe;Oe++){const Ue=K[Oe],Re=Ue.object,ee=Ue.geometry,Ne=Ue.material,ve=Ue.group;if(Ne.side===Ma&&Re.layers.test(ot.layers)){const mn=Ne.side;Ne.side=Zn,Ne.needsUpdate=!0,vr(Re,st,ot,ee,Ne,ve),Ne.side=mn,Ne.needsUpdate=!0,xe=!0}}xe===!0&&(ue.updateMultisampleRenderTarget(bt),ue.updateRenderTargetMipmap(bt))}D.setRenderTarget(Ft,Dt,jt),D.setClearColor(vt,ut),te!==void 0&&(ot.viewport=te),D.toneMapping=ie}function na(R,K,st){const ot=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,bt=R.length;Q<bt;Q++){const It=R[Q],Ft=It.object,Dt=It.geometry,jt=It.group;let ie=It.material;ie.allowOverride===!0&&ot!==null&&(ie=ot),Ft.layers.test(st.layers)&&vr(Ft,K,st,Dt,ie,jt)}}function vr(R,K,st,ot,Q,bt){R.onBeforeRender(D,K,st,ot,Q,bt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(D,K,st,ot,R,bt),Q.transparent===!0&&Q.side===Ma&&Q.forceSinglePass===!1?(Q.side=Zn,Q.needsUpdate=!0,D.renderBufferDirect(st,K,ot,Q,R,bt),Q.side=dr,Q.needsUpdate=!0,D.renderBufferDirect(st,K,ot,Q,R,bt),Q.side=Ma):D.renderBufferDirect(st,K,ot,Q,R,bt),R.onAfterRender(D,K,st,ot,Q,bt)}function li(R,K,st){K.isScene!==!0&&(K=Ct);const ot=Ht.get(R),Q=S.state.lights,bt=S.state.shadowsArray,It=Q.state.version,Ft=mt.getParameters(R,Q.state,bt,K,st),Dt=mt.getProgramCacheKey(Ft);let jt=ot.programs;ot.environment=R.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(R.isMeshStandardMaterial?Ye:je).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",_t),jt=new Map,ot.programs=jt);let ie=jt.get(Dt);if(ie!==void 0){if(ot.currentProgram===ie&&ot.lightsStateVersion===It)return wa(R,Ft),ie}else Ft.uniforms=mt.getUniforms(R),R.onBeforeCompile(Ft,D),ie=mt.acquireProgram(Ft,Dt),jt.set(Dt,ie),ot.uniforms=Ft.uniforms;const te=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=wt.uniform),wa(R,Ft),ot.needsLights=Il(R),ot.lightsStateVersion=It,ot.needsLights&&(te.ambientLightColor.value=Q.state.ambient,te.lightProbe.value=Q.state.probe,te.directionalLights.value=Q.state.directional,te.directionalLightShadows.value=Q.state.directionalShadow,te.spotLights.value=Q.state.spot,te.spotLightShadows.value=Q.state.spotShadow,te.rectAreaLights.value=Q.state.rectArea,te.ltc_1.value=Q.state.rectAreaLTC1,te.ltc_2.value=Q.state.rectAreaLTC2,te.pointLights.value=Q.state.point,te.pointLightShadows.value=Q.state.pointShadow,te.hemisphereLights.value=Q.state.hemi,te.directionalShadowMap.value=Q.state.directionalShadowMap,te.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,te.spotShadowMap.value=Q.state.spotShadowMap,te.spotLightMatrix.value=Q.state.spotLightMatrix,te.spotLightMap.value=Q.state.spotLightMap,te.pointShadowMap.value=Q.state.pointShadowMap,te.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ie,ot.uniformsList=null,ie}function _r(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Lc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function wa(R,K){const st=Ht.get(R);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function zl(R,K,st,ot,Q){K.isScene!==!0&&(K=Ct),ue.resetTextureUnits();const bt=K.fog,It=ot.isMeshStandardMaterial?K.environment:null,Ft=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:mo,Dt=(ot.isMeshStandardMaterial?Ye:je).get(ot.envMap||It),jt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ie=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),te=!!st.morphAttributes.position,xe=!!st.morphAttributes.normal,Oe=!!st.morphAttributes.color;let Qe=hr;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Ue=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Re=Ue!==void 0?Ue.length:0,ee=Ht.get(ot),Ne=S.state.lights;if(ht===!0&&($===!0||R!==C)){const nn=R===C&&ot.id===w;wt.setState(ot,R,nn)}let ve=!1;ot.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ne.state.version||ee.outputColorSpace!==Ft||Q.isBatchedMesh&&ee.batching===!1||!Q.isBatchedMesh&&ee.batching===!0||Q.isBatchedMesh&&ee.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ee.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ee.instancing===!1||!Q.isInstancedMesh&&ee.instancing===!0||Q.isSkinnedMesh&&ee.skinning===!1||!Q.isSkinnedMesh&&ee.skinning===!0||Q.isInstancedMesh&&ee.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ee.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ee.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ee.instancingMorph===!1&&Q.morphTexture!==null||ee.envMap!==Dt||ot.fog===!0&&ee.fog!==bt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==wt.numPlanes||ee.numIntersection!==wt.numIntersection)||ee.vertexAlphas!==jt||ee.vertexTangents!==ie||ee.morphTargets!==te||ee.morphNormals!==xe||ee.morphColors!==Oe||ee.toneMapping!==Qe||ee.morphTargetsCount!==Re)&&(ve=!0):(ve=!0,ee.__version=ot.version);let mn=ee.currentProgram;ve===!0&&(mn=li(ot,K,Q));let Kn=!1,Ce=!1,Da=!1;const We=mn.getUniforms(),Pn=ee.uniforms;if(Ot.useProgram(mn.program)&&(Kn=!0,Ce=!0,Da=!0),ot.id!==w&&(w=ot.id,Ce=!0),Kn||C!==R){Ot.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),We.setValue(I,"projectionMatrix",R.projectionMatrix),We.setValue(I,"viewMatrix",R.matrixWorldInverse);const Un=We.map.cameraPosition;Un!==void 0&&Un.setValue(I,Mt.setFromMatrixPosition(R.matrixWorld)),Jt.logarithmicDepthBuffer&&We.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&We.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ce=!0,Da=!0)}if(Q.isSkinnedMesh){We.setOptional(I,Q,"bindMatrix"),We.setOptional(I,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),We.setValue(I,"boneTexture",nn.boneTexture,ue))}Q.isBatchedMesh&&(We.setOptional(I,Q,"batchingTexture"),We.setValue(I,"batchingTexture",Q._matricesTexture,ue),We.setOptional(I,Q,"batchingIdTexture"),We.setValue(I,"batchingIdTexture",Q._indirectTexture,ue),We.setOptional(I,Q,"batchingColorTexture"),Q._colorsTexture!==null&&We.setValue(I,"batchingColorTexture",Q._colorsTexture,ue));const ln=st.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&At.update(Q,st,mn),(Ce||ee.receiveShadow!==Q.receiveShadow)&&(ee.receiveShadow=Q.receiveShadow,We.setValue(I,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Pn.envMap.value=Dt,Pn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(Pn.envMapIntensity.value=K.environmentIntensity),Ce&&(We.setValue(I,"toneMappingExposure",D.toneMappingExposure),ee.needsLights&&qc(Pn,Da),bt&&ot.fog===!0&&St.refreshFogUniforms(Pn,bt),St.refreshMaterialUniforms(Pn,ot,Z,rt,S.state.transmissionRenderTarget[R.id]),Lc.upload(I,_r(ee),Pn,ue)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Lc.upload(I,_r(ee),Pn,ue),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&We.setValue(I,"center",Q.center),We.setValue(I,"modelViewMatrix",Q.modelViewMatrix),We.setValue(I,"normalMatrix",Q.normalMatrix),We.setValue(I,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let Un=0,is=nn.length;Un<is;Un++){const zi=nn[Un];he.update(zi,mn),he.bind(zi,mn)}}return mn}function qc(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Il(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,K,st){const ot=Ht.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ht.get(R.texture).__webglTexture=K,Ht.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const st=Ht.get(R);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0};const Eo=I.createFramebuffer();this.setRenderTarget=function(R,K=0,st=0){k=R,H=K,z=st;let ot=!0,Q=null,bt=!1,It=!1;if(R){const Dt=Ht.get(R);if(Dt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(I.FRAMEBUFFER,null),ot=!1;else if(Dt.__webglFramebuffer===void 0)ue.setupRenderTarget(R);else if(Dt.__hasExternalTextures)ue.rebindTextures(R,Ht.get(R.texture).__webglTexture,Ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Dt.__boundDepthTexture!==te){if(te!==null&&Ht.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(It=!0);const ie=Ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[K])?Q=ie[K][st]:Q=ie[K],bt=!0):R.samples>0&&ue.useMultisampledRTT(R)===!1?Q=Ht.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[st]:Q=ie,X.copy(R.viewport),nt.copy(R.scissor),ft=R.scissorTest}else X.copy(Vt).multiplyScalar(Z).floor(),nt.copy(se).multiplyScalar(Z).floor(),ft=ne;if(st!==0&&(Q=Eo),Ot.bindFramebuffer(I.FRAMEBUFFER,Q)&&ot&&Ot.drawBuffers(R,Q),Ot.viewport(X),Ot.scissor(nt),Ot.setScissorTest(ft),bt){const Dt=Ht.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,st)}else if(It){const Dt=K;for(let jt=0;jt<R.textures.length;jt++){const ie=Ht.get(R.textures[jt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+jt,ie.__webglTexture,st,Dt)}}else if(R!==null&&st!==0){const Dt=Ht.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,st)}w=-1},this.readRenderTargetPixels=function(R,K,st,ot,Q,bt,It,Ft=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){Ot.bindFramebuffer(I.FRAMEBUFFER,Dt);try{const jt=R.textures[Ft],ie=jt.format,te=jt.type;if(!Jt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ot&&st>=0&&st<=R.height-Q&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(K,st,ot,Q,Kt.convert(ie),Kt.convert(te),bt))}finally{const jt=k!==null?Ht.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(I.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,K,st,ot,Q,bt,It,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if(K>=0&&K<=R.width-ot&&st>=0&&st<=R.height-Q){Ot.bindFramebuffer(I.FRAMEBUFFER,Dt);const jt=R.textures[Ft],ie=jt.format,te=jt.type;if(!Jt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(K,st,ot,Q,Kt.convert(ie),Kt.convert(te),0);const Oe=k!==null?Ht.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(I.FRAMEBUFFER,Oe);const Qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await RA(I,Qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(xe),I.deleteSync(Qe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,st=0){const ot=Math.pow(2,-st),Q=Math.floor(R.image.width*ot),bt=Math.floor(R.image.height*ot),It=K!==null?K.x:0,Ft=K!==null?K.y:0;ue.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,It,Ft,Q,bt),Ot.unbindTexture()};const xr=I.createFramebuffer(),Yc=I.createFramebuffer();this.copyTextureToTexture=function(R,K,st=null,ot=null,Q=0,bt=null){bt===null&&(Q!==0?(Rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Q,Q=0):bt=0);let It,Ft,Dt,jt,ie,te,xe,Oe,Qe;const Ue=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(st!==null)It=st.max.x-st.min.x,Ft=st.max.y-st.min.y,Dt=st.isBox3?st.max.z-st.min.z:1,jt=st.min.x,ie=st.min.y,te=st.isBox3?st.min.z:0;else{const ln=Math.pow(2,-Q);It=Math.floor(Ue.width*ln),Ft=Math.floor(Ue.height*ln),R.isDataArrayTexture?Dt=Ue.depth:R.isData3DTexture?Dt=Math.floor(Ue.depth*ln):Dt=1,jt=0,ie=0,te=0}ot!==null?(xe=ot.x,Oe=ot.y,Qe=ot.z):(xe=0,Oe=0,Qe=0);const Re=Kt.convert(K.format),ee=Kt.convert(K.type);let Ne;K.isData3DTexture?(ue.setTexture3D(K,0),Ne=I.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ue.setTexture2DArray(K,0),Ne=I.TEXTURE_2D_ARRAY):(ue.setTexture2D(K,0),Ne=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);const ve=I.getParameter(I.UNPACK_ROW_LENGTH),mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Kn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ce=I.getParameter(I.UNPACK_SKIP_ROWS),Da=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);const We=R.isDataArrayTexture||R.isData3DTexture,Pn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const ln=Ht.get(R),nn=Ht.get(K),Un=Ht.get(ln.__renderTarget),is=Ht.get(nn.__renderTarget);Ot.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),Ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let zi=0;zi<Dt;zi++)We&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(R).__webglTexture,Q,te+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(K).__webglTexture,bt,Qe+zi)),I.blitFramebuffer(jt,ie,It,Ft,xe,Oe,It,Ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Ht.has(R)){const ln=Ht.get(R),nn=Ht.get(K);Ot.bindFramebuffer(I.READ_FRAMEBUFFER,xr),Ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yc);for(let Un=0;Un<Dt;Un++)We?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,Q,te+Un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,Q),Pn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,bt,Qe+Un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,bt),Q!==0?I.blitFramebuffer(jt,ie,It,Ft,xe,Oe,It,Ft,I.COLOR_BUFFER_BIT,I.NEAREST):Pn?I.copyTexSubImage3D(Ne,bt,xe,Oe,Qe+Un,jt,ie,It,Ft):I.copyTexSubImage2D(Ne,bt,xe,Oe,jt,ie,It,Ft);Ot.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Pn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Ne,bt,xe,Oe,Qe,It,Ft,Dt,Re,ee,Ue.data):K.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,bt,xe,Oe,Qe,It,Ft,Dt,Re,Ue.data):I.texSubImage3D(Ne,bt,xe,Oe,Qe,It,Ft,Dt,Re,ee,Ue):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,xe,Oe,It,Ft,Re,ee,Ue.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,xe,Oe,Ue.width,Ue.height,Re,Ue.data):I.texSubImage2D(I.TEXTURE_2D,bt,xe,Oe,It,Ft,Re,ee,Ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Da),bt===0&&K.generateMipmaps&&I.generateMipmap(Ne),Ot.unbindTexture()},this.initRenderTarget=function(R){Ht.get(R).__webglFramebuffer===void 0&&ue.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ue.setTextureCube(R,0):R.isData3DTexture?ue.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ue.setTexture2DArray(R,0):ue.setTexture2D(R,0),Ot.unbindTexture()},this.resetState=function(){H=0,z=0,k=null,Ot.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}function W2({src:r,title:e,onForward:i,onBack:s,onRoom:l,onCorridor:c,roomLabel:h,roomMode:d}){const p=ct.useRef(null),[g,v]=ct.useState(75),[m,x]=ct.useState(!1),[E,T]=ct.useState(!1);return ct.useEffect(()=>{const A=p.current;if(!A)return;let y=!0,S=0,N=0,L=!1,D=0,F=0,H=0,z=0;const k=new $A,w=new xi(75,1,.1,1100),C=new Y2({antialias:!0});C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),C.outputColorSpace=Wn,A.appendChild(C.domElement);const X=new mm(100,64,40);X.scale(-1,1,1);const nt=new pm,ft=new Qi(X,nt);k.add(ft);const vt=()=>{const ne=Math.max(A.clientWidth,1),B=Math.max(A.clientHeight,1);w.aspect=ne/B,w.updateProjectionMatrix(),C.setSize(ne,B)};vt(),window.addEventListener("resize",vt),new l1().load(r,ne=>{y&&(ne.colorSpace=Wn,nt.map=ne,nt.needsUpdate=!0,x(!1))},void 0,()=>y&&x(!0));const q=()=>{N=Math.max(-80,Math.min(80,N))},rt=ne=>{L=!0,D=ne.clientX,F=ne.clientY,H=S,z=N,C.domElement.setPointerCapture?.(ne.pointerId)},Z=ne=>{L&&(S=H-(ne.clientX-D)*.12,N=z+(ne.clientY-F)*.12,q())},xt=()=>{L=!1},yt=ne=>{ne.preventDefault(),v(B=>Math.max(45,Math.min(100,B+ne.deltaY*.04)))};C.domElement.addEventListener("pointerdown",rt),C.domElement.addEventListener("pointermove",Z),C.domElement.addEventListener("pointerup",xt),C.domElement.addEventListener("pointercancel",xt),C.domElement.addEventListener("pointerleave",xt),C.domElement.addEventListener("wheel",yt,{passive:!1});let Vt;const se=()=>{if(!y)return;Vt=requestAnimationFrame(se);const ne=K0.degToRad(90-N),B=K0.degToRad(S);w.fov=g,w.updateProjectionMatrix(),w.lookAt(100*Math.sin(ne)*Math.cos(B),100*Math.cos(ne),100*Math.sin(ne)*Math.sin(B)),C.render(k,w)};return se(),()=>{y=!1,cancelAnimationFrame(Vt),window.removeEventListener("resize",vt),C.domElement.removeEventListener("pointerdown",rt),C.domElement.removeEventListener("pointermove",Z),C.domElement.removeEventListener("pointerup",xt),C.domElement.removeEventListener("pointercancel",xt),C.domElement.removeEventListener("pointerleave",xt),C.domElement.removeEventListener("wheel",yt),X.dispose(),nt.dispose(),C.dispose(),A.innerHTML=""}},[r,g]),O.jsxs("div",{className:E?"viewer fullscreen":"viewer",children:[O.jsx("div",{ref:p,className:"viewer-canvas"}),O.jsx("div",{className:"viewer-shade"}),O.jsxs("div",{className:"viewer-top",children:[O.jsx("span",{children:"360° VIEW"}),O.jsx("b",{children:e}),O.jsx("span",{children:"DRAG / SCROLL"})]}),m&&O.jsxs("div",{className:"viewer-error",children:["Panorama image could not be loaded.",O.jsx("br",{}),"Check ",O.jsx("b",{children:"public/panoramas/sample-360.jpg"}),"."]}),s&&O.jsxs("button",{className:"hotspot left",onClick:s,children:["‹ ",O.jsx("small",{children:"BACK"})]}),i&&O.jsxs("button",{className:"hotspot right",onClick:i,children:["› ",O.jsx("small",{children:"CONTINUE"})]}),l&&O.jsxs("button",{className:"hotspot room",onClick:l,children:["🚪 ",O.jsxs("small",{children:["ROOM ",h]})]}),c&&O.jsxs("button",{className:"hotspot corridor",onClick:c,children:["↩ ",O.jsx("small",{children:"BACK TO CORRIDOR"})]}),O.jsxs("div",{className:"viewer-tools",children:[O.jsx("button",{onClick:()=>v(A=>Math.max(45,A-8)),children:"−"}),O.jsxs("span",{children:[Math.round(g),"°"]}),O.jsx("button",{onClick:()=>v(A=>Math.min(100,A+8)),children:"+"}),O.jsx("button",{onClick:()=>T(A=>!A),children:E?"⤢":"⛶"})]})]})}function Fx({roomMode:r=!1}){const e=ns(),{viewpointId:i,roomId:s}=_T(),{data:l,currentViewpoint:c,setCurrentViewpoint:h,returnViewpoint:d,setReturnViewpoint:p}=Vc(),g=r?l.rooms[s]:null,v=l.viewpoints[i||c];if(r&&!g)return O.jsxs("main",{className:"page",children:[O.jsx(so,{}),O.jsxs("div",{className:"error-page",children:[O.jsx("h2",{children:"Room not found"}),O.jsx("button",{onClick:()=>e("/map"),children:"Back to Floor Map"})]})]});const m=r?g.entryViewpoint:i||c,x=r?g:v;if(!x)return O.jsxs("main",{className:"page",children:[O.jsx(so,{}),O.jsxs("div",{className:"error-page",children:[O.jsx("h2",{children:"Viewpoint not found"}),O.jsx("button",{onClick:()=>e("/map"),children:"Back to Floor Map"})]})]});const E=y=>{h(y),e("/panorama/"+y)},T=y=>{p(m),e("/room/"+y)},A=()=>{h(d),e("/panorama/"+d)};return O.jsxs("main",{className:"viewer-page",children:[O.jsx(so,{}),O.jsx("div",{className:"viewer-area",children:O.jsx(W2,{src:x.panorama,title:r?x.name:x.label,onBack:!r&&x.previous?()=>E(x.previous):null,onForward:!r&&x.next?()=>E(x.next):null,onRoom:!r&&x.rooms?.[0]?()=>T(x.rooms[0]):null,roomLabel:!r&&x.rooms?.[0],onCorridor:r?A:null,roomMode:r})}),O.jsxs("div",{className:"viewer-footer",children:[O.jsxs("span",{children:["● ",r?"ROOM VIEW":"CORRIDOR VIEW"," · ",m]}),O.jsx("button",{onClick:()=>e("/map"),children:"⌖ Floor Map"})]})]})}function Z2(){const r=Pi();return O.jsx("div",{className:"route-shell",children:O.jsxs(LT,{children:[O.jsx(ur,{path:"/",element:O.jsx(V0,{})}),O.jsx(ur,{path:"/buildings",element:O.jsx(_b,{})}),O.jsx(ur,{path:"/buildings/mg-block",element:O.jsx(xb,{})}),O.jsx(ur,{path:"/map",element:O.jsx(yb,{})}),O.jsx(ur,{path:"/panorama/:viewpointId",element:O.jsx(Fx,{})}),O.jsx(ur,{path:"/room/:roomId",element:O.jsx(Fx,{roomMode:!0})}),O.jsx(ur,{path:"*",element:O.jsx(V0,{})})]})},r.pathname)}function K2(){return O.jsx(ib,{children:O.jsx(vb,{children:O.jsx(Z2,{})})})}NM.createRoot(document.getElementById("root")).render(O.jsx(bM.StrictMode,{children:O.jsx(K2,{})}));
