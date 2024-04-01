(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var mi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},tc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,c=u?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(p=64)),r.push(n[l],n[h],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ao(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new ec;const p=i<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const R=c<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ec extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nc=function(e){const t=Ao(e);return Ro.encodeByteArray(t,!0)},Pn=function(e){return nc(e).replace(/\./g,"")},rc=function(e){try{return Ro.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=()=>sc().__FIREBASE_DEFAULTS__,oc=()=>{if(typeof process>"u"||typeof mi>"u")return;const e=mi.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ac=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&rc(e[1]);return t&&JSON.parse(t)},fs=()=>{try{return ic()||oc()||ac()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},uc=e=>{var t,n;return(n=(t=fs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},cc=e=>{const t=uc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},So=()=>{var e;return(e=fs())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Pn(JSON.stringify(n)),Pn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dc(){var e;const t=(e=fs())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fc(){return!dc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Po(){try{return typeof indexedDB=="object"}catch{return!1}}function pc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="FirebaseError";class fe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=mc,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?gc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fe(s,a,r)}}function gc(e,t){return e.replace(_c,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const _c=/\{\$([^}]+)}/g;function Mr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(gi(i)&&gi(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return e&&e._delegate?e._delegate:e}class Oe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new lc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vc(t))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ot){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ot){return this.instances.has(t)}getOptions(t=Ot){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ec(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ot){return this.component?this.component.multipleInstances?t:Ot:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ec(e){return e===Ot?void 0:e}function vc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const Ic={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},wc=V.INFO,Ac={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Rc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Ac[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vo{constructor(t){this.name=t,this._logLevel=wc,this._logHandler=Rc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ic[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Sc=(e,t)=>t.some(n=>e instanceof n);let _i,yi;function Pc(){return _i||(_i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cc(){return yi||(yi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Do=new WeakMap,Lr=new WeakMap,bo=new WeakMap,vr=new WeakMap,ps=new WeakMap;function Vc(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Do.set(n,e)}).catch(()=>{}),ps.set(t,e),t}function Dc(e){if(Lr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Lr.set(e,t)}let Fr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Lr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bc(e){Fr=e(Fr)}function Nc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Tr(this),t,...n);return bo.set(r,t.sort?t.sort():[t]),St(r)}:Cc().includes(e)?function(...t){return e.apply(Tr(this),t),St(Do.get(this))}:function(...t){return St(e.apply(Tr(this),t))}}function kc(e){return typeof e=="function"?Nc(e):(e instanceof IDBTransaction&&Dc(e),Sc(e,Pc())?new Proxy(e,Fr):e)}function St(e){if(e instanceof IDBRequest)return Vc(e);if(vr.has(e))return vr.get(e);const t=kc(e);return t!==e&&(vr.set(e,t),ps.set(t,e)),t}const Tr=e=>ps.get(e);function Oc(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return r&&o.addEventListener("upgradeneeded",u=>{r(St(o.result),u.oldVersion,u.newVersion,St(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xc=["get","getKey","getAll","getAllKeys","count"],Mc=["put","add","delete","clear"],Ir=new Map;function Ei(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ir.get(t))return Ir.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Mc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xc.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Ir.set(t,i),i}bc(e=>({...e,get:(t,n,r)=>Ei(t,n)||e.get(t,n,r),has:(t,n)=>!!Ei(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ur="@firebase/app",vi="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Vo("@firebase/app"),Uc="@firebase/app-compat",Bc="@firebase/analytics-compat",qc="@firebase/analytics",jc="@firebase/app-check-compat",$c="@firebase/app-check",zc="@firebase/auth",Kc="@firebase/auth-compat",Gc="@firebase/database",Qc="@firebase/database-compat",Hc="@firebase/functions",Wc="@firebase/functions-compat",Yc="@firebase/installations",Xc="@firebase/installations-compat",Jc="@firebase/messaging",Zc="@firebase/messaging-compat",tl="@firebase/performance",el="@firebase/performance-compat",nl="@firebase/remote-config",rl="@firebase/remote-config-compat",sl="@firebase/storage",il="@firebase/storage-compat",ol="@firebase/firestore",al="@firebase/firestore-compat",ul="firebase",cl="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]",ll={[Ur]:"fire-core",[Uc]:"fire-core-compat",[qc]:"fire-analytics",[Bc]:"fire-analytics-compat",[$c]:"fire-app-check",[jc]:"fire-app-check-compat",[zc]:"fire-auth",[Kc]:"fire-auth-compat",[Gc]:"fire-rtdb",[Qc]:"fire-rtdb-compat",[Hc]:"fire-fn",[Wc]:"fire-fn-compat",[Yc]:"fire-iid",[Xc]:"fire-iid-compat",[Jc]:"fire-fcm",[Zc]:"fire-fcm-compat",[tl]:"fire-perf",[el]:"fire-perf-compat",[nl]:"fire-rc",[rl]:"fire-rc-compat",[sl]:"fire-gcs",[il]:"fire-gcs-compat",[ol]:"fire-fst",[al]:"fire-fst-compat","fire-js":"fire-js",[ul]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Map,hl=new Map,qr=new Map;function Ti(e,t){try{e.container.addComponent(t)}catch(n){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dn(e){const t=e.name;if(qr.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;qr.set(t,e);for(const n of Vn.values())Ti(n,e);for(const n of hl.values())Ti(n,e);return!0}function dl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Co("app","Firebase",fl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=cl;function No(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Br,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=So()),!n)throw Pt.create("no-options");const i=Vn.get(s);if(i){if(Mr(n,i.options)&&Mr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new Tc(s);for(const u of qr.values())o.addComponent(u);const a=new pl(n,r,o);return Vn.set(s,a),a}function gl(e=Br){const t=Vn.get(e);if(!t&&e===Br&&So())return No();if(!t)throw Pt.create("no-app",{appName:e});return t}function te(e,t,n){var r;let s=(r=ll[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}Dn(new Oe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="firebase-heartbeat-database",yl=1,xe="firebase-heartbeat-store";let wr=null;function ko(){return wr||(wr=Oc(_l,yl,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(xe)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pt.create("idb-open",{originalErrorMessage:e.message})})),wr}async function El(e){try{const n=(await ko()).transaction(xe),r=await n.objectStore(xe).get(Oo(e));return await n.done,r}catch(t){if(t instanceof fe)qt.warn(t.message);else{const n=Pt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(n.message)}}}async function Ii(e,t){try{const r=(await ko()).transaction(xe,"readwrite");await r.objectStore(xe).put(t,Oo(e)),await r.done}catch(n){if(n instanceof fe)qt.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function Oo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=1024,Tl=30*24*60*60*1e3;class Il{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Al(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Tl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wi(),{heartbeatsToSend:r,unsentEntries:s}=wl(this._heartbeatsCache.heartbeats),i=Pn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wi(){return new Date().toISOString().substring(0,10)}function wl(e,t=vl){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ai(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ai(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Al{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Po()?pc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await El(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ii(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ii(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ai(e){return Pn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e){Dn(new Oe("platform-logger",t=>new Lc(t),"PRIVATE")),Dn(new Oe("heartbeat",t=>new Il(t),"PRIVATE")),te(Ur,vi,e),te(Ur,vi,"esm2017"),te("fire-js","")}Rl("");var Sl="firebase",Pl="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Sl,Pl,"app");var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,ms=ms||{},I=Cl||self;function Gn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ye(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Vl(e){return Object.prototype.hasOwnProperty.call(e,Ar)&&e[Ar]||(e[Ar]=++Dl)}var Ar="closure_uid_"+(1e9*Math.random()>>>0),Dl=0;function bl(e,t,n){return e.call.apply(e.bind,arguments)}function Nl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function tt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=bl:tt=Nl,tt.apply(null,arguments)}function pn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Nt(){this.s=this.s,this.o=this.o}var kl=0;Nt.prototype.s=!1;Nt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kl!=0)&&Vl(this)};Nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function gs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ri(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Gn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var Ol=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};I.addEventListener("test",n,t),I.removeEventListener("test",n,t)}catch{}return e}();function Me(e){return/^[\s\xa0]*$/.test(e)}function Qn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return Qn().indexOf(e)!=-1}function _s(e){return _s[" "](e),e}_s[" "]=function(){};function xl(e,t){var n=Ph;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ml=dt("Opera"),ie=dt("Trident")||dt("MSIE"),Mo=dt("Edge"),jr=Mo||ie,Lo=dt("Gecko")&&!(Qn().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Ll=Qn().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function Fo(){var e=I.document;return e?e.documentMode:void 0}var $r;t:{var Rr="",Sr=function(){var e=Qn();if(Lo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Mo)return/Edge\/([\d\.]+)/.exec(e);if(ie)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ll)return/WebKit\/(\S+)/.exec(e);if(Ml)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Sr&&(Rr=Sr?Sr[1]:""),ie){var Pr=Fo();if(Pr!=null&&Pr>parseFloat(Rr)){$r=String(Pr);break t}}$r=Rr}var zr;if(I.document&&ie){var Si=Fo();zr=Si||parseInt($r,10)||void 0}else zr=void 0;var Fl=zr;function Le(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Lo){t:{try{_s(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ul[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Le.$.h.call(this)}}z(Le,et);var Ul={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xe="closure_listenable_"+(1e6*Math.random()|0),Bl=0;function ql(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Bl,this.fa=this.ia=!1}function Hn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ys(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function jl(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Uo(e){const t={};for(const n in e)t[n]=e[n];return t}const Pi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bo(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Pi.length;i++)n=Pi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Wn(e){this.src=e,this.g={},this.h=0}Wn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Gr(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ql(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Kr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=xo(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Hn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Gr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),Cr={};function qo(e,t,n,r,s){if(r&&r.once)return $o(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)qo(e,t[i],n,r,s);return null}return n=Is(n),e&&e[Xe]?e.O(t,n,Ye(r)?!!r.capture:!!r,s):jo(e,t,n,!1,r,s)}function jo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ye(s)?!!s.capture:!!s,a=Ts(e);if(a||(e[Es]=a=new Wn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=$l(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ol||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Ko(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $l(){function e(n){return t.call(e.src,e.listener,n)}const t=zl;return e}function $o(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)$o(e,t[i],n,r,s);return null}return n=Is(n),e&&e[Xe]?e.P(t,n,Ye(r)?!!r.capture:!!r,s):jo(e,t,n,!0,r,s)}function zo(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)zo(e,t[i],n,r,s);else r=Ye(r)?!!r.capture:!!r,n=Is(n),e&&e[Xe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Gr(i,n,r,s),-1<n&&(Hn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ts(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Gr(t,n,r,s)),(n=-1<e?t[e]:null)&&vs(n))}function vs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Xe])Kr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ko(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ts(t))?(Kr(n,e),n.h==0&&(n.src=null,t[Es]=null)):Hn(e)}}}function Ko(e){return e in Cr?Cr[e]:Cr[e]="on"+e}function zl(e,t){if(e.fa)e=!0;else{t=new Le(t,this);var n=e.listener,r=e.la||e.src;e.ia&&vs(e),e=n.call(r,t)}return e}function Ts(e){return e=e[Es],e instanceof Wn?e:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(e){return typeof e=="function"?e:(e[Vr]||(e[Vr]=function(t){return e.handleEvent(t)}),e[Vr])}function $(){Nt.call(this),this.i=new Wn(this),this.S=this,this.J=null}z($,Nt);$.prototype[Xe]=!0;$.prototype.removeEventListener=function(e,t,n,r){zo(this,e,t,n,r)};function W(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var s=t;t=new et(r,e),Bo(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=mn(o,r,!0,t)&&s}if(o=t.g=e,s=mn(o,r,!0,t)&&s,s=mn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=mn(o,r,!1,t)&&s}$.prototype.N=function(){if($.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Hn(n[r]);delete e.g[t],e.h--}}this.J=null};$.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};$.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function mn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Kr(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var ws=I.JSON.stringify;class Kl{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Gl(){var e=As;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ql{constructor(){this.h=this.g=null}add(t,n){const r=Go.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Go=new Kl(()=>new Hl,e=>e.reset());class Hl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wl(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Yl(e){I.setTimeout(()=>{throw e},0)}let Fe,Ue=!1,As=new Ql,Qo=()=>{const e=I.Promise.resolve(void 0);Fe=()=>{e.then(Xl)}};var Xl=()=>{for(var e;e=Gl();){try{e.h.call(e.g)}catch(n){Yl(n)}var t=Go;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ue=!1};function Yn(e,t){$.call(this),this.h=e||1,this.g=t||I,this.j=tt(this.qb,this),this.l=Date.now()}z(Yn,$);_=Yn.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(Rs(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}_.N=function(){Yn.$.N.call(this),Rs(this),delete this.g};function Ss(e,t,n){if(typeof e=="function")n&&(e=tt(e,n));else if(e&&typeof e.handleEvent=="function")e=tt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Ho(e){e.g=Ss(()=>{e.g=null,e.i&&(e.i=!1,Ho(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Jl extends Nt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){Nt.call(this),this.h=e,this.g={}}z(Be,Nt);var Ci=[];function Wo(e,t,n,r){Array.isArray(n)||(n&&(Ci[0]=n.toString()),n=Ci);for(var s=0;s<n.length;s++){var i=qo(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Yo(e){ys(e.g,function(t,n){this.g.hasOwnProperty(n)&&vs(t)},e),e.g={}}Be.prototype.N=function(){Be.$.N.call(this),Yo(this)};Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xn(){this.g=!0}Xn.prototype.Ea=function(){this.g=!1};function Zl(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function th(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Zt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+nh(e,n)+(r?" "+r:"")})}function eh(e,t){e.info(function(){return"TIMEOUT: "+t})}Xn.prototype.info=function(){};function nh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ws(n)}catch{return t}}var Kt={},Vi=null;function Jn(){return Vi=Vi||new $}Kt.Ta="serverreachability";function Xo(e){et.call(this,Kt.Ta,e)}z(Xo,et);function qe(e){const t=Jn();W(t,new Xo(t))}Kt.STAT_EVENT="statevent";function Jo(e,t){et.call(this,Kt.STAT_EVENT,e),this.stat=t}z(Jo,et);function rt(e){const t=Jn();W(t,new Jo(t,e))}Kt.Ua="timingevent";function Zo(e,t){et.call(this,Kt.Ua,e),this.size=t}z(Zo,et);function Je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Zn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ta={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ps(){}Ps.prototype.h=null;function Di(e){return e.h||(e.h=e.i())}function ea(){}var Ze={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Cs(){et.call(this,"d")}z(Cs,et);function Vs(){et.call(this,"c")}z(Vs,et);var Qr;function tr(){}z(tr,Ps);tr.prototype.g=function(){return new XMLHttpRequest};tr.prototype.i=function(){return{}};Qr=new tr;function tn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Be(this),this.P=rh,e=jr?125:void 0,this.V=new Yn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new na}function na(){this.i=null,this.g="",this.h=!1}var rh=45e3,ra={},Hr={};_=tn.prototype;_.setTimeout=function(e){this.P=e};function Wr(e,t,n){e.L=1,e.A=nr(wt(t)),e.u=n,e.S=!0,sa(e,null)}function sa(e,t){e.G=Date.now(),en(e),e.B=wt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),da(n.i,"t",r),e.o=0,n=e.l.J,e.h=new na,e.g=ka(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Jl(tt(e.Pa,e,e.g),e.O)),Wo(e.U,e.g,"readystatechange",e.nb),t=e.I?Uo(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),qe(),Zl(e.j,e.v,e.B,e.m,e.W,e.u)}_.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};_.Pa=function(e){try{if(e==this.g)t:{const l=ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||jr||this.g&&(this.h.h||this.g.ja()||Oi(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?qe(3):qe(2)),er(this);var n=this.g.da();this.ca=n;e:if(ia(this)){var r=Oi(this.g);e="";var s=r.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Ce(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,th(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Me(a)){var c=a;break e}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yr(this,n);else{this.i=!1,this.s=3,rt(12),Mt(this),Ce(this);break t}}this.S?(oa(this,l,o),jr&&this.i&&l==3&&(Wo(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),Yr(this,o)),l==4&&Mt(this),this.i&&!this.J&&(l==4?Va(this.l,this):(this.i=!1,en(this)))}else Ah(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Mt(this),Ce(this)}}}catch{}finally{}};function ia(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function oa(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=sh(e,n),s==Hr){t==4&&(e.s=4,rt(14),r=!1),Zt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==ra){e.s=4,rt(15),Zt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Zt(e.j,e.m,s,null),Yr(e,s);ia(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),xs(t),t.M=!0,rt(11))):(Zt(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Ce(e))}_.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.o<t.length&&(er(this),oa(this,e,t),this.i&&e!=4&&en(this))}};function sh(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Hr:(n=Number(t.substring(n,r)),isNaN(n)?ra:(r+=1,r+n>t.length?Hr:(t=t.slice(r,r+n),e.o=r+n,t)))}_.cancel=function(){this.J=!0,Mt(this)};function en(e){e.Y=Date.now()+e.P,aa(e,e.P)}function aa(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Je(tt(e.lb,e),t)}function er(e){e.C&&(I.clearTimeout(e.C),e.C=null)}_.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(eh(this.j,this.B),this.L!=2&&(qe(),rt(17)),Mt(this),this.s=2,Ce(this)):aa(this,this.Y-e)};function Ce(e){e.l.H==0||e.J||Va(e.l,e)}function Mt(e){er(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Rs(e.V),Yo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Yr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Xr(n.i,e))){if(!e.K&&Xr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)kn(n),or(n);else break t;Os(n),rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Je(tt(n.ib,n),6e3));if(1>=ma(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Lt(n,11)}else if((e.K||n.g==e)&&kn(n),!Me(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const l=c[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const R=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var i=r.i;i.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ds(i,i.h),i.h=null))}if(r.F){const S=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,k(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Na(r,r.J?r.pa:null,r.Y),o.K){ga(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(er(a),en(a)),r.g=o}else Pa(r);0<n.j.length&&ar(n)}else c[0]!="stop"&&c[0]!="close"||Lt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Lt(n,7):ks(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}qe(4)}catch{}}function ih(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Gn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function oh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Gn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ua(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Gn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=oh(e),r=ih(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ah(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Bt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Bt){this.h=e.h,bn(this,e.j),this.s=e.s,this.g=e.g,Nn(this,e.m),this.l=e.l;var t=e.i,n=new je;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),bi(this,n),this.o=e.o}else e&&(t=String(e).match(ca))?(this.h=!1,bn(this,t[1]||"",!0),this.s=Ae(t[2]||""),this.g=Ae(t[3]||"",!0),Nn(this,t[4]),this.l=Ae(t[5]||"",!0),bi(this,t[6]||"",!0),this.o=Ae(t[7]||"")):(this.h=!1,this.i=new je(null,this.h))}Bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Re(t,Ni,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Re(t,Ni,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Re(n,n.charAt(0)=="/"?lh:ch,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Re(n,dh)),e.join("")};function wt(e){return new Bt(e)}function bn(e,t,n){e.j=n?Ae(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function bi(e,t,n){t instanceof je?(e.i=t,fh(e.i,e.h)):(n||(t=Re(t,hh)),e.i=new je(t,e.h))}function k(e,t,n){e.i.set(t,n)}function nr(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ae(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Re(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,uh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function uh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ni=/[#\/\?@]/g,ch=/[#\?:]/g,lh=/[#\?]/g,hh=/[#\?@]/g,dh=/#/g;function je(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&ah(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=je.prototype;_.add=function(e,t){kt(this),this.i=null,e=pe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function la(e,t){kt(e),t=pe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ha(e,t){return kt(e),t=pe(e,t),e.g.has(t)}_.forEach=function(e,t){kt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};_.ta=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};_.Z=function(e){kt(this);let t=[];if(typeof e=="string")ha(this,e)&&(t=t.concat(this.g.get(pe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return kt(this),this.i=null,e=pe(this,e),ha(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function da(e,t,n){la(e,t),0<n.length&&(e.i=null,e.g.set(pe(e,t),gs(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function pe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function fh(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(la(this,r),da(this,s,n))},e)),e.j=t}var ph=class{constructor(e,t){this.g=e,this.map=t}};function fa(e){this.l=e||mh,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mh=10;function pa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ma(e){return e.h?1:e.g?e.g.size:0}function Xr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ds(e,t){e.g?e.g.add(t):e.h=t}function ga(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}fa.prototype.cancel=function(){if(this.i=_a(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function _a(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return gs(e.i)}var gh=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function _h(){this.g=new gh}function yh(e,t,n){const r=n||"";try{ua(e,function(s,i){let o=s;Ye(s)&&(o=ws(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Eh(e,t){const n=new Xn;if(I.Image){const r=new Image;r.onload=pn(gn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=pn(gn,n,r,"TestLoadImage: error",!1,t),r.onabort=pn(gn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=pn(gn,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function gn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function rr(e){this.l=e.ec||null,this.j=e.ob||!1}z(rr,Ps);rr.prototype.g=function(){return new sr(this.l,this.j)};rr.prototype.i=function(e){return function(){return e}}({});function sr(e,t){$.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=bs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(sr,$);var bs=0;_=sr.prototype;_.open=function(e,t){if(this.readyState!=bs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$e(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=bs};_.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ya(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ya(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}_.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nn(this):$e(this),this.readyState==3&&ya(this)}};_.Za=function(e){this.g&&(this.response=this.responseText=e,nn(this))};_.Ya=function(e){this.g&&(this.response=e,nn(this))};_.ka=function(){this.g&&nn(this)};function nn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$e(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $e(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var vh=I.JSON.parse;function M(e){$.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ea,this.L=this.M=!1}z(M,$);var Ea="",Th=/^https?$/i,Ih=["POST","PUT"];_=M.prototype;_.Oa=function(e){this.M=e};_.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qr.g(),this.C=this.u?Di(this.u):Di(Qr),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){ki(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&e instanceof I.FormData,!(0<=xo(Ih,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ia(this),0<this.B&&((this.L=wh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Ss(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){ki(this,i)}};function wh(e){return ie&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.ua=function(){typeof ms<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function ki(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,va(e),ir(e)}function va(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),ir(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ir(this,!0)),M.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?Ta(this):this.kb())};_.kb=function(){Ta(this)};function Ta(e){if(e.h&&typeof ms<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)Ss(e.La,0,e);else if(W(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(ca)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!Th.test(s?s.toLowerCase():"")}n=r}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var i=2<ft(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",va(e)}}finally{ir(e)}}}}function ir(e,t){if(e.g){Ia(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ia(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}_.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}_.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),vh(t)}};function Oi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ea:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Ah(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Me(e[r]))continue;var n=Wl(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}jl(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wa(e){let t="";return ys(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ns(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=wa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function Te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Aa(e){this.Ga=0,this.j=[],this.l=new Xn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Te("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Te("baseRetryDelayMs",5e3,e),this.hb=Te("retryDelaySeedMs",1e4,e),this.eb=Te("forwardChannelMaxRetries",2,e),this.xa=Te("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new fa(e&&e.concurrentRequestLimit),this.Ja=new _h,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=Aa.prototype;_.ra=8;_.H=1;function ks(e){if(Ra(e),e.H==3){var t=e.W++,n=wt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),rn(e,n),t=new tn(e,e.l,t),t.L=2,t.A=nr(wt(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.A,n=!0),n||(t.g=ka(t.l,null),t.g.ha(t.A)),t.G=Date.now(),en(t)}ba(e)}function or(e){e.g&&(xs(e),e.g.cancel(),e.g=null)}function Ra(e){or(e),e.u&&(I.clearTimeout(e.u),e.u=null),kn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function ar(e){if(!pa(e.i)&&!e.m){e.m=!0;var t=e.Na;Fe||Qo(),Ue||(Fe(),Ue=!0),As.add(t,e),e.C=0}}function Rh(e,t){return ma(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Je(tt(e.Na,e,t),Da(e,e.C)),e.C++,!0)}_.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new tn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Uo(i),Bo(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Sa(this,s,t),n=wt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),rn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(wa(i)))+"&"+t:this.o&&Ns(n,this.o,i)),Ds(this.i,s),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),s.aa=!0,Wr(s,n,null)):Wr(s,n,t),this.H=2}}else this.H==3&&(e?xi(this,e):this.j.length==0||pa(this.i)||xi(this))};function xi(e,t){var n;t?n=t.m:n=e.W++;const r=wt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),rn(e,r),e.o&&e.s&&Ns(r,e.o,e.s),n=new tn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Sa(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ds(e.i,n),Wr(n,r,t)}function rn(e,t){e.na&&ys(e.na,function(n,r){k(t,r,n)}),e.h&&ua({},function(n,r){k(t,r,n)})}function Sa(e,t,n){n=Math.min(e.j.length,n);var r=e.h?tt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].g;const l=s[u].map;if(c-=i,0>c)i=Math.max(0,s[u].g-100),a=!1;else try{yh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Pa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Fe||Qo(),Ue||(Fe(),Ue=!0),As.add(t,e),e.A=0}}function Os(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Je(tt(e.Ma,e),Da(e,e.A)),e.A++,!0)}_.Ma=function(){if(this.u=null,Ca(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Je(tt(this.jb,this),e)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),or(this),Ca(this))};function xs(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Ca(e){e.g=new tn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=wt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),rn(e,t),e.o&&e.s&&Ns(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=nr(wt(t)),n.u=null,n.S=!0,sa(n,e)}_.ib=function(){this.v!=null&&(this.v=null,or(this),Os(this),rt(19))};function kn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Va(e,t){var n=null;if(e.g==t){kn(e),xs(e),e.g=null;var r=2}else if(Xr(e.i,t))n=t.F,ga(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Jn(),W(r,new Zo(r,n)),ar(e)}else Pa(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Rh(e,t)||r==2&&Os(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Lt(e,5);break;case 4:Lt(e,10);break;case 3:Lt(e,6);break;default:Lt(e,2)}}}function Da(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Lt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=tt(e.pb,e);n||(n=new Bt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||bn(n,"https"),nr(n)),Eh(n.toString(),r)}else rt(2);e.H=0,e.h&&e.h.za(t),ba(e),Ra(e)}_.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function ba(e){if(e.H=0,e.ma=[],e.h){const t=_a(e.i);(t.length!=0||e.j.length!=0)&&(Ri(e.ma,t),Ri(e.ma,e.j),e.i.i.length=0,gs(e.j),e.j.length=0),e.h.ya()}}function Na(e,t,n){var r=n instanceof Bt?wt(n):new Bt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Nn(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Bt(null);r&&bn(i,r),t&&(i.g=t),s&&Nn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),rn(e,r),r}function ka(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new M(new rr({ob:n})):new M(e.va),t.Oa(e.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function Oa(){}_=Oa.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function On(){if(ie&&!(10<=Number(Fl)))throw Error("Environmental error: no available transport.")}On.prototype.g=function(e,t){return new it(e,t)};function it(e,t){$.call(this),this.g=new Aa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Me(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Me(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new me(this)}z(it,$);it.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Na(e,null,e.Y),ar(e)};it.prototype.close=function(){ks(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ws(e),e=n);t.j.push(new ph(t.fb++,e)),t.H==3&&ar(t)};it.prototype.N=function(){this.g.h=null,delete this.j,ks(this.g),delete this.g,it.$.N.call(this)};function xa(e){Cs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(xa,Cs);function Ma(){Vs.call(this),this.status=1}z(Ma,Vs);function me(e){this.g=e}z(me,Oa);me.prototype.Ba=function(){W(this.g,"a")};me.prototype.Aa=function(e){W(this.g,new xa(e))};me.prototype.za=function(e){W(this.g,new Ma)};me.prototype.ya=function(){W(this.g,"b")};function Sh(){this.blockSize=-1}function lt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(lt,Sh);lt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}lt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Dr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Dr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Dr(this,r),s=0;break}}this.h=s,this.i+=t};lt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Ph={};function Ms(e){return-128<=e&&128>e?xl(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function pt(e){if(isNaN(e)||!isFinite(e))return ee;if(0>e)return Q(pt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Jr;return new b(t,0)}function La(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Q(La(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(t,8)),r=ee,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=pt(Math.pow(t,i)),r=r.R(i).add(pt(o))):(r=r.R(n),r=r.add(pt(o)))}return r}var Jr=4294967296,ee=Ms(0),Zr=Ms(1),Mi=Ms(16777216);_=b.prototype;_.ea=function(){if(ot(this))return-Q(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Jr+r)*t,t*=Jr}return e};_.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(vt(this))return"0";if(ot(this))return"-"+Q(this).toString(e);for(var t=pt(Math.pow(e,6)),n=this,r="";;){var s=Mn(n,t).g;n=xn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,vt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function vt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ot(e){return e.h==-1}_.X=function(e){return e=xn(this,e),ot(e)?-1:vt(e)?0:1};function Q(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(Zr)}_.abs=function(){return ot(this)?Q(this):this};_.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new b(n,n[n.length-1]&-2147483648?-1:0)};function xn(e,t){return e.add(Q(t))}_.R=function(e){if(vt(this)||vt(e))return ee;if(ot(this))return ot(e)?Q(this).R(Q(e)):Q(Q(this).R(e));if(ot(e))return Q(this.R(Q(e)));if(0>this.X(Mi)&&0>e.X(Mi))return pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,_n(n,2*r+2*s),n[2*r+2*s+1]+=i*u,_n(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,_n(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,_n(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function _n(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ie(e,t){this.g=e,this.h=t}function Mn(e,t){if(vt(t))throw Error("division by zero");if(vt(e))return new Ie(ee,ee);if(ot(e))return t=Mn(Q(e),t),new Ie(Q(t.g),Q(t.h));if(ot(t))return t=Mn(e,Q(t)),new Ie(Q(t.g),t.h);if(30<e.g.length){if(ot(e)||ot(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Zr,r=t;0>=r.X(e);)n=Li(n),r=Li(r);var s=Wt(n,1),i=Wt(r,1);for(r=Wt(r,2),n=Wt(n,2);!vt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Wt(r,1),n=Wt(n,1)}return t=xn(e,s.R(t)),new Ie(s,t)}for(s=ee;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=pt(n),o=i.R(t);ot(o)||0<o.X(e);)n-=r,i=pt(n),o=i.R(t);vt(i)&&(i=Zr),s=s.add(i),e=xn(e,o)}return new Ie(s,e)}_.gb=function(e){return Mn(this,e).h};_.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};_.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};_.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Li(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Wt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new b(s,e.h)}On.prototype.createWebChannel=On.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Zn.NO_ERROR=0;Zn.TIMEOUT=8;Zn.HTTP_ERROR=6;ta.COMPLETE="complete";ea.EventType=Ze;Ze.OPEN="a";Ze.CLOSE="b";Ze.ERROR="c";Ze.MESSAGE="d";$.prototype.listen=$.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;lt.prototype.digest=lt.prototype.l;lt.prototype.reset=lt.prototype.reset;lt.prototype.update=lt.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=pt;b.fromString=La;var Ch=function(){return new On},Vh=function(){return Jn()},br=Zn,Dh=ta,bh=Kt,Fi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yn=ea,Nh=M,kh=lt,ne=b;const Ui="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge="10.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Vo("@firebase/firestore");function we(){return jt.logLevel}function g(e,...t){if(jt.logLevel<=V.DEBUG){const n=t.map(Ls);jt.debug(`Firestore (${ge}): ${e}`,...n)}}function _t(e,...t){if(jt.logLevel<=V.ERROR){const n=t.map(Ls);jt.error(`Firestore (${ge}): ${e}`,...n)}}function oe(e,...t){if(jt.logLevel<=V.WARN){const n=t.map(Ls);jt.warn(`Firestore (${ge}): ${e}`,...n)}}function Ls(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+e;throw _t(t),new Error(t)}function N(e,t){e||v()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends fe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class xh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new Fa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return N(t===null||typeof t=="string"),new J(t)}}class Lh{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Lh(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(N(typeof n.token=="string"),this.R=n.token,new Uh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=qh(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function ae(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new q(0,0))}static max(){return new w(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,n,r){n===void 0?n=0:n>t.length&&v(),r===void 0?r=t.length-n:r>t.length-n&&v(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ze.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ze?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends ze{construct(t,n,r){return new O(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new O(n)}static emptyPath(){return new O([])}}const jh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends ze{construct(t,n,r){return new H(t,n,r)}static isValidIdentifier(t){return jh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(n)}static emptyPath(){return new H([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(O.fromString(t))}static fromName(t){return new E(O.fromString(t).popFirst(5))}static empty(){return new E(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new O(t.slice()))}}function $h(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=w.fromTimestamp(r===1e9?new q(n+1,0):new q(n,r));return new Vt(s,E.empty(),t)}function zh(e){return new Vt(e.readTime,e.key,-1)}class Vt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Vt(w.min(),E.empty(),-1)}static max(){return new Vt(w.max(),E.empty(),-1)}}function Kh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Gh)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,r)=>{n(t)})}static reject(t){return new f((n,r)=>{r(t)})}static waitFor(t){return new f((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=f.resolve(!1);for(const r of t)n=n.next(s=>s?f.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new f((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new f((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ve(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Us(r.target.error);this.V.reject(new Ve(t,s))}}static open(t,n,r,s){try{return new Fs(n,t.transaction(s,r))}catch(i){throw new Ve(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(g("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Wh(n)}}class Ft{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Ft.S(Cn())===12.2&&_t("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return g("SimpleDb","Removing database:",t),xt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Po())return!1;if(Ft.C())return!0;const t=Cn(),n=Ft.S(t),r=0<n&&n<10,s=Ft.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Ve(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(d.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(d.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ve(t,o))},s.onupgradeneeded=i=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Fs.open(this.db,t,i?"readonly":"readwrite",r),u=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Hh{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return xt(this.k.delete())}}class Ve extends y{constructor(t,n){super(d.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function on(e){return e.name==="IndexedDbTransactionError"}class Wh{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(g("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),xt(r)}add(t){return g("SimpleDb","ADD",this.store.name,t,t),xt(this.store.add(t))}get(t){return xt(this.store.get(t)).next(n=>(n===void 0&&(n=null),g("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return g("SimpleDb","DELETE",this.store.name,t),xt(this.store.delete(t))}count(){return g("SimpleDb","COUNT",this.store.name),xt(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new f((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new f((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){g("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new f((r,s)=>{n.onerror=i=>{const o=Us(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new f((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new Hh(a),c=n(a.primaryKey,a.value,u);if(c instanceof f){const l=c.catch(h=>(u.done(),f.reject(h)));r.push(l)}u.isDone?s():u.$===null?a.continue():a.continue(u.$)}}).next(()=>f.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function xt(e){return new f((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=Us(r.target.error);n(s)}})}let Bi=!1;function Us(e){const t=Ft.S(Cn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Bi||(Bi=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Bs._e=-1;function ur(e){return e==null}function Ln(e){return e===0&&1/e==-1/0}function Yh(e){return typeof e=="number"&&Number.isInteger(e)&&!Ln(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _e(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ba(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new x(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new x(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new En(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new En(this.root,t,this.comparator,!1)}getReverseIterator(){return new En(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new En(this.root,t,this.comparator,!0)}}class En{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??G.RED,this.left=s??G.EMPTY,this.right=i??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new G(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return G.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,n,r,s,i){return this}insert(t,n,r){return new G(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.comparator=t,this.data=new x(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ji(this.data.getIterator())}getIteratorFrom(t){return new ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Y(this.comparator);return n.data=t,n}}class ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.fields=t,t.sort(H.comparator)}static empty(){return new ct([])}unionWith(t){let n=new Y(H.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qa("Invalid base64 string: "+i):i}}(t);return new nt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const Xh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(e){if(N(!!e),typeof e=="string"){let t=0;const n=Xh.exec(e);if(N(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function $t(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function js(e){const t=e.mapValue.fields.__previous_value__;return qs(t)?js(t):t}function Ke(e){const t=Dt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,n,r,s,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ge{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ge("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ge&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?qs(e)?4:Zh(e)?9007199254740991:10:v()}function yt(e,t){if(e===t)return!0;const n=zt(e);if(n!==zt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ke(e).isEqual(Ke(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dt(s.timestampValue),a=Dt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=U(s.doubleValue),a=U(i.doubleValue);return o===a?Ln(o)===Ln(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ae(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(qi(o)!==qi(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!yt(o[u],a[u])))return!1;return!0}(e,t);default:return v()}}function Qe(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function ue(e,t){if(e===t)return 0;const n=zt(e),r=zt(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=U(i.integerValue||i.doubleValue),u=U(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return $i(e.timestampValue,t.timestampValue);case 4:return $i(Ke(e),Ke(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=$t(i),u=$t(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=D(a[c],u[c]);if(l!==0)return l}return D(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(U(i.latitude),U(o.latitude));return a!==0?a:D(U(i.longitude),U(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=ue(a[c],u[c]);if(l)return l}return D(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===vn.mapValue&&o===vn.mapValue)return 0;if(i===vn.mapValue)return 1;if(o===vn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const p=D(u[h],l[h]);if(p!==0)return p;const m=ue(a[u[h]],c[l[h]]);if(m!==0)return m}return D(u.length,l.length)}(e.mapValue,t.mapValue);default:throw v()}}function $i(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Dt(e),r=Dt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function ce(e){return ts(e)}function ts(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Dt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return $t(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ts(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ts(n.fields[o])}`;return s+"}"}(e.mapValue):v()}function zi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function es(e){return!!e&&"integerValue"in e}function $s(e){return!!e&&"arrayValue"in e}function Ki(e){return!!e&&"nullValue"in e}function Gi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function wn(e){return!!e&&"mapValue"in e}function De(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _e(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=De(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=De(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Zh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!wn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=De(n)}setAll(t){let n=H.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=De(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());wn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];wn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){_e(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new at(De(this.value))}}function ja(e){const t=[];return _e(e.fields,(n,r)=>{const s=new H([n]);if(wn(r)){const i=ja(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Z(t,0,w.min(),w.min(),w.min(),at.empty(),0)}static newFoundDocument(t,n,r,s){return new Z(t,1,n,w.min(),r,s,0)}static newNoDocument(t,n){return new Z(t,2,n,w.min(),w.min(),at.empty(),0)}static newUnknownDocument(t,n){return new Z(t,3,n,w.min(),w.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,n){this.position=t,this.inclusive=n}}function Qi(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=ue(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,n="asc"){this.field=t,this.dir=n}}function td(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{}class B extends $a{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new nd(t,n,r):n==="array-contains"?new id(t,r):n==="in"?new od(t,r):n==="not-in"?new ad(t,r):n==="array-contains-any"?new ud(t,r):new B(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new rd(t,r):new sd(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ue(n,this.value)):n!==null&&zt(this.value)===zt(n)&&this.matchesComparison(ue(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends $a{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new ht(t,n)}matches(t){return za(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function za(e){return e.op==="and"}function Ka(e){return ed(e)&&za(e)}function ed(e){for(const t of e.filters)if(t instanceof ht)return!1;return!0}function ns(e){if(e instanceof B)return e.field.canonicalString()+e.op.toString()+ce(e.value);if(Ka(e))return e.filters.map(t=>ns(t)).join(",");{const t=e.filters.map(n=>ns(n)).join(",");return`${e.op}(${t})`}}function Ga(e,t){return e instanceof B?function(r,s){return s instanceof B&&r.op===s.op&&r.field.isEqual(s.field)&&yt(r.value,s.value)}(e,t):e instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ga(o,s.filters[a]),!0):!1}(e,t):void v()}function Qa(e){return e instanceof B?function(n){return`${n.field.canonicalString()} ${n.op} ${ce(n.value)}`}(e):e instanceof ht?function(n){return n.op.toString()+" {"+n.getFilters().map(Qa).join(" ,")+"}"}(e):"Filter"}class nd extends B{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class rd extends B{constructor(t,n){super(t,"in",n),this.keys=Ha("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class sd extends B{constructor(t,n){super(t,"not-in",n),this.keys=Ha("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ha(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class id extends B{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return $s(n)&&Qe(n.arrayValue,this.value)}}class od extends B{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Qe(this.value.arrayValue,n)}}class ad extends B{constructor(t,n){super(t,"not-in",n)}matches(t){if(Qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Qe(this.value.arrayValue,n)}}class ud extends B{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!$s(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qe(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Wi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new cd(e,t,n,r,s,i,o)}function zs(e){const t=A(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ns(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ur(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ce(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ce(r)).join(",")),t.ce=n}return t.ce}function Ks(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!td(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ga(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Hi(e.startAt,t.startAt)&&Hi(e.endAt,t.endAt)}function rs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ld(e,t,n,r,s,i,o,a){return new an(e,t,n,r,s,i,o,a)}function Wa(e){return new an(e)}function Yi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ya(e){return e.collectionGroup!==null}function be(e){const t=A(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Y(H.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Un(i,r))}),n.has(H.keyField().canonicalString())||t.le.push(new Un(H.keyField(),r))}return t.le}function mt(e){const t=A(e);return t.he||(t.he=hd(t,be(e))),t.he}function hd(e,t){if(e.limitType==="F")return Wi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Un(s.field,i)});const n=e.endAt?new Fn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fn(e.startAt.position,e.startAt.inclusive):null;return Wi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ss(e,t){const n=e.filters.concat([t]);return new an(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function is(e,t,n){return new an(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function cr(e,t){return Ks(mt(e),mt(t))&&e.limitType===t.limitType}function Xa(e){return`${zs(mt(e))}|lt:${e.limitType}`}function Yt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qa(s)).join(", ")}]`),ur(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ce(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ce(s)).join(",")),`Target(${r})`}(mt(e))}; limitType=${e.limitType})`}function lr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of be(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=Qi(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,be(r),s)||r.endAt&&!function(o,a,u){const c=Qi(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,be(r),s))}(e,t)}function dd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ja(e){return(t,n)=>{let r=!1;for(const s of be(e)){const i=fd(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function fd(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?ue(u,c):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Ba(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new x(E.comparator);function At(){return pd}const Za=new x(E.comparator);function Se(...e){let t=Za;for(const n of e)t=t.insert(n.key,n);return t}function tu(e){let t=Za;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ut(){return Ne()}function eu(){return Ne()}function Ne(){return new ye(e=>e.toString(),(e,t)=>e.isEqual(t))}const md=new x(E.comparator),gd=new Y(E.comparator);function P(...e){let t=gd;for(const n of e)t=t.add(n);return t}const _d=new Y(D);function yd(){return _d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ln(t)?"-0":t}}function ru(e){return{integerValue:""+e}}function Ed(e,t){return Yh(t)?ru(t):nu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this._=void 0}}function vd(e,t,n){return e instanceof Bn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qs(i)&&(i=js(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof He?iu(e,t):e instanceof We?ou(e,t):function(s,i){const o=su(s,i),a=Xi(o)+Xi(s.Ie);return es(o)&&es(s.Ie)?ru(a):nu(s.serializer,a)}(e,t)}function Td(e,t,n){return e instanceof He?iu(e,t):e instanceof We?ou(e,t):n}function su(e,t){return e instanceof qn?function(r){return es(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Bn extends hr{}class He extends hr{constructor(t){super(),this.elements=t}}function iu(e,t){const n=au(t);for(const r of e.elements)n.some(s=>yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class We extends hr{constructor(t){super(),this.elements=t}}function ou(e,t){let n=au(t);for(const r of e.elements)n=n.filter(s=>!yt(s,r));return{arrayValue:{values:n}}}class qn extends hr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Xi(e){return U(e.integerValue||e.doubleValue)}function au(e){return $s(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Id(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof He&&s instanceof He||r instanceof We&&s instanceof We?ae(r.elements,s.elements,yt):r instanceof qn&&s instanceof qn?yt(r.Ie,s.Ie):r instanceof Bn&&s instanceof Bn}(e.transform,t.transform)}class wd{constructor(t,n){this.version=t,this.transformResults=n}}class It{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function An(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class dr{}function uu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new lu(e.key,It.none()):new un(e.key,e.data,It.none());{const n=e.data,r=at.empty();let s=new Y(H.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gt(e.key,r,new ct(s.toArray()),It.none())}}function Ad(e,t,n){e instanceof un?function(s,i,o){const a=s.value.clone(),u=Zi(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Gt?function(s,i,o){if(!An(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Zi(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(cu(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ke(e,t,n,r){return e instanceof un?function(i,o,a,u){if(!An(i.precondition,o))return a;const c=i.value.clone(),l=to(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Gt?function(i,o,a,u){if(!An(i.precondition,o))return a;const c=to(i.fieldTransforms,u,o),l=o.data;return l.setAll(cu(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return An(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Rd(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=su(r.transform,s||null);i!=null&&(n===null&&(n=at.empty()),n.set(r.field,i))}return n||null}function Ji(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ae(r,s,(i,o)=>Id(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class un extends dr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gt extends dr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Zi(e,t,n){const r=new Map;N(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Td(o,a,n[s]))}return r}function to(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,vd(i,o,t))}return r}class lu extends dr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sd extends dr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Ad(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ke(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ke(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=eu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=uu(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(n,r)=>Ji(n,r))&&ae(this.baseMutations,t.baseMutations,(n,r)=>Ji(n,r))}}class Gs{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){N(t.mutations.length===r.length);let s=function(){return md}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gs(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function Dd(e){switch(e){default:return v();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function hu(e){if(e===void 0)return _t("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return v()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new ne([4294967295,4294967295],0);function eo(e){const t=bd().encode(e),n=new kh;return n.update(t),new Uint8Array(n.digest())}function no(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ne([n,r],0),new ne([s,i],0)]}class Qs{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pe(`Invalid padding: ${n}`);if(r<0)throw new Pe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Pe(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Pe(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ne.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(ne.fromNumber(r)));return s.compare(Nd)===1&&(s=new ne([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=eo(t),[r,s]=no(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Qs(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=eo(t),[r,s]=no(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Pe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,cn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new fr(w.min(),s,new x(D),At(),P())}}class cn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new cn(r,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class du{constructor(t,n){this.targetId=t,this.fe=n}}class fu{constructor(t,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ro{constructor(){this.ge=0,this.pe=io(),this.ye=nt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),n=P(),r=P();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:v()}}),new cn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=io()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,N(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class kd{constructor(t){this.Be=t,this.ke=new Map,this.qe=At(),this.Qe=so(),this.Ke=new x(D)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:v()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(rs(i))if(r===0){const o=new E(i.path);this.We(n,o,Z.newNoDocument(o,w.min()))}else N(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=$t(r).toUint8Array()}catch(u){if(u instanceof qa)return oe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Qs(o,s,i)}catch(u){return oe(u instanceof Pe?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&rs(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Z.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=P();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new fr(t,n,this.Ke,this.qe,r);return this.qe=At(),this.Qe=so(),this.Ke=new x(D),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new ro,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Y(D),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||g("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new ro),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function so(){return new x(E.comparator)}function io(){return new x(E.comparator)}const Od={asc:"ASCENDING",desc:"DESCENDING"},xd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Md={and:"AND",or:"OR"};class Ld{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function os(e,t){return e.useProto3Json||ur(t)?t:{value:t}}function jn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Fd(e,t){return jn(e,t.toTimestamp())}function gt(e){return N(!!e),w.fromTimestamp(function(n){const r=Dt(n);return new q(r.seconds,r.nanos)}(e))}function Hs(e,t){return as(e,t).canonicalString()}function as(e,t){const n=function(s){return new O(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function mu(e){const t=O.fromString(e);return N(vu(t)),t}function us(e,t){return Hs(e.databaseId,t.path)}function Nr(e,t){const n=mu(t);if(n.get(1)!==e.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(_u(n))}function gu(e,t){return Hs(e.databaseId,t)}function Ud(e){const t=mu(e);return t.length===4?O.emptyPath():_u(t)}function cs(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _u(e){return N(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function oo(e,t,n){return{name:us(e,t),fields:n.value.mapValue.fields}}function Bd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(N(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(N(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?d.UNKNOWN:hu(c.code);return new y(l,c.message||"")}(o);n=new fu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nr(e,r.document.name),i=gt(r.document.updateTime),o=r.document.createTime?gt(r.document.createTime):w.min(),a=new at({mapValue:{fields:r.document.fields}}),u=Z.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Rn(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Nr(e,r.document),i=r.readTime?gt(r.readTime):w.min(),o=Z.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Rn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Nr(e,r.document),i=r.removedTargetIds||[];n=new Rn([],i,s,null)}else{if(!("filter"in t))return v();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Vd(s,i),a=r.targetId;n=new du(a,o)}}return n}function qd(e,t){let n;if(t instanceof un)n={update:oo(e,t.key,t.value)};else if(t instanceof lu)n={delete:us(e,t.key)};else if(t instanceof Gt)n={update:oo(e,t.key,t.data),updateMask:Yd(t.fieldMask)};else{if(!(t instanceof Sd))return v();n={verify:us(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Bn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof He)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof We)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw v()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Fd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:v()}(e,t.precondition)),n}function jd(e,t){return e&&e.length>0?(N(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?gt(s.updateTime):gt(i);return o.isEqual(w.min())&&(o=gt(i)),new wd(o,s.transformResults||[])}(n,t))):[]}function $d(e,t){return{documents:[gu(e,t.path)]}}function zd(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gu(e,s);const i=function(c){if(c.length!==0)return Eu(ht.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(l=>function(p){return{field:Xt(p.field),direction:Qd(p.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=os(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:s}}function Kd(e){let t=Ud(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){N(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const p=yu(h);return p instanceof ht&&Ka(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(R){return new Un(Jt(R.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,ur(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(h){const p=!!h.before,m=h.values||[];return new Fn(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,m=h.values||[];return new Fn(m,p)}(n.endAt)),ld(t,s,o,i,a,"F",u,c)}function Gd(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function yu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jt(n.unaryFilter.field);return B.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(n.unaryFilter.field);return B.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jt(n.unaryFilter.field);return B.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jt(n.unaryFilter.field);return B.create(o,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(e):e.fieldFilter!==void 0?function(n){return B.create(Jt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ht.create(n.compositeFilter.filters.map(r=>yu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return v()}}(n.compositeFilter.op))}(e):v()}function Qd(e){return Od[e]}function Hd(e){return xd[e]}function Wd(e){return Md[e]}function Xt(e){return{fieldPath:e.canonicalString()}}function Jt(e){return H.fromServerFormat(e.fieldPath)}function Eu(e){return e instanceof B?function(n){if(n.op==="=="){if(Gi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NAN"}};if(Ki(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NAN"}};if(Ki(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(n.field),op:Hd(n.op),value:n.value}}}(e):e instanceof ht?function(n){const r=n.getFilters().map(s=>Eu(s));return r.length===1?r[0]:{compositeFilter:{op:Wd(n.op),filters:r}}}(e):v()}function Yd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function vu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,n,r,s,i=w.min(),o=w.min(),a=nt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.ct=t}}function Jd(e){const t=Kd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?is(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this._n=new tf}addToCollectionParentIndex(t,n){return this._n.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Vt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Vt.min())}updateCollectionGroup(t,n,r){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class tf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Y(O.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Y(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new le(0)}static Ln(){return new le(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.changes=new ye(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?f.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ke(r.mutation,s,ct.empty(),q.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){const s=Ut();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Se();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ut();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=At();const o=Ne(),a=function(){return Ne()}();return n.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof Gt)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),ke(l.mutation,c,l.mutation.getFieldMask(),q.now())):o.set(c.key,ct.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new nf(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ne();let s=new x((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||ct.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(s.get(a.batchId)||P()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=eu();l.forEach(p=>{if(!i.has(p)){const m=uu(n.get(p),r.get(p));m!==null&&h.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ya(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):f.resolve(Ut());let a=-1,u=i;return o.next(c=>f.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(t,l).next(p=>{u=u.insert(l,p)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,P())).next(l=>({batchId:a,changes:tu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=Se();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Se();return this.indexManager.getCollectionParents(t,i).next(a=>f.forEach(a,u=>{const c=function(h,p){return new an(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(l=>{l.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,Z.newInvalidDocument(l)))});let a=Se();return o.forEach((u,c)=>{const l=i.get(u);l!==void 0&&ke(l.mutation,c,ct.empty(),q.now()),lr(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return f.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Jd(s.bundledQuery),readTime:gt(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.overlays=new x(E.comparator),this.hr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ut();return f.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),f.resolve()}getOverlaysForCollection(t,n,r){const s=Ut(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return f.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new x((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=Ut(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Ut(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return f.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Cd(n,r));let i=this.hr.get(n);i===void 0&&(i=P(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.Pr=new Y(j.Ir),this.Tr=new Y(j.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new j(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new j(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new O([])),r=new j(n,t),s=new j(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new O([])),r=new j(n,t),s=new j(n,t+1);let i=P();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new j(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class j{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||D(t.pr,n.pr)}static Er(t,n){return D(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Y(j.Ir)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new j(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new j(n,0),s=new j(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Y(D);return n.forEach(s=>{const i=new j(s,0),o=new j(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),f.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new j(new E(i),0);let a=new Y(D);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.pr)),!0)},o),f.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){N(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return f.forEach(n.mutations,s=>{const i=new j(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new j(n,0),s=this.wr.firstAfterOrEqual(r);return f.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.vr=t,this.docs=function(){return new x(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return f.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(t,n){let r=At();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Z.newInvalidDocument(s))}),f.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=At();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Kh(zh(l),r)<=0||(s.has(l.key)||lr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,r,s){v()}Fr(t,n){return f.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new cf(this)}getSize(t){return f.resolve(this.size)}}class cf extends ef{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),f.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.persistence=t,this.Mr=new ye(n=>zs(n),Ks),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ws,this.targetCount=0,this.Lr=le.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),f.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new le(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.qn(n),f.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),f.waitFor(i).next(()=>s)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return f.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),f.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),f.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return f.resolve(r)}containsKey(t,n){return f.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,n){this.Br={},this.overlays={},this.kr=new Bs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new lf(this),this.indexManager=new Zd,this.remoteDocumentCache=function(s){return new uf(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Xd(n),this.$r=new sf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new of,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new af(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){g("MemoryPersistence","Starting transaction:",t);const s=new df(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class df extends Qh{constructor(t){super(),this.currentSequenceNumber=t}}class Ys{constructor(t){this.persistence=t,this.zr=new Ws,this.jr=null}static Hr(t){return new Ys(t)}get Jr(){if(this.jr)return this.jr;throw v()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),f.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),f.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Jr,r=>{const s=E.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,w.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return f.or([()=>f.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=P(),s=P();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xs(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return fc()?8:Ft.v(Cn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ff;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(we()<=V.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Yt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),f.resolve()):(we()<=V.DEBUG&&g("QueryEngine","Query:",Yt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(we()<=V.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Yt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,mt(n))):f.resolve())}ji(t,n){if(Yi(n))return f.resolve(null);let r=mt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=is(n,null,"F"),r=mt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=P(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(t,is(n,null,"F")):this.es(t,c,n,u)}))})))}Hi(t,n,r,s){return Yi(n)||s.isEqual(w.min())?f.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?f.resolve(null):(we()<=V.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yt(n)),this.es(t,o,n,$h(s,-1)).next(a=>a))})}Zi(t,n){let r=new Y(Ja(t));return n.forEach((s,i)=>{lr(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return we()<=V.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Yt(n)),this.zi.getDocumentsMatchingQuery(t,n,Vt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new x(D),this.rs=new ye(i=>zs(i),Ks),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function gf(e,t,n,r){return new mf(e,t,n,r)}async function Tu(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=P();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function _f(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,p=h.keys();let m=f.resolve();return p.forEach(R=>{m=m.next(()=>l.getEntry(u,R)).next(S=>{const T=c.docVersions.get(R);N(T!==null),S.version.compareTo(T)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),l.addEntry(S)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=P();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Iu(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function yf(e,t){const n=A(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((l,h)=>{const p=s.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let m=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(nt.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),s=s.insert(h,m),function(S,T,L){return S.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,m,l)&&a.push(n.Qr.updateTargetData(i,m))});let u=At(),c=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ef(i,o,t.documentUpdates).next(l=>{u=l.cs,c=l.ls})),!r.isEqual(w.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.ns=s,i))}function Ef(e,t,n){let r=P(),s=P();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=At();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(w.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:s}})}function vf(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Tf(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,f.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Rt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function ls(e,t,n){const r=A(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!on(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function ao(e,t,n){const r=A(e);let s=w.min(),i=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=A(u),p=h.rs.get(l);return p!==void 0?f.resolve(h.ns.get(p)):h.Qr.getTargetData(c,l)}(r,o,mt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:w.min(),n?i:P())).next(a=>(If(r,dd(t),a),{documents:a,hs:i})))}function If(e,t,n){let r=e.ss.get(t)||w.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class uo{constructor(){this.activeTargetIds=yd()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class wf{constructor(){this.no=new uo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new uo,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn=null;function kr(){return Tn===null?Tn=function(){return 268435456+Math.round(2147483648*Math.random())}():Tn++,"0x"+Tn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class Pf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=kr(),u=this.bo(n,r.toUriEncodedString());g("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,u,c,s).then(l=>(g("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw oe("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Rf[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=kr();return new Promise((o,a)=>{const u=new Nh;u.setWithCredentials(!0),u.listenOnce(Dh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case br.NO_ERROR:const l=u.getResponseJson();g(X,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case br.TIMEOUT:g(X,`RPC '${t}' ${i} timed out`),a(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const h=u.getStatus();if(g(X,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const R=function(T){const L=T.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(L)>=0?L:d.UNKNOWN}(m.status);a(new y(R,m.message))}else a(new y(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(d.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{g(X,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);g(X,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Fo(t,n,r){const s=kr(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ch(),a=Vh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=i.join("");g(X,`Creating RPC '${t}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);let p=!1,m=!1;const R=new Sf({lo:T=>{m?g(X,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(p||(g(X,`Opening RPC '${t}' stream ${s} transport.`),h.open(),p=!0),g(X,`RPC '${t}' stream ${s} sending:`,T),h.send(T))},ho:()=>h.close()}),S=(T,L,K)=>{T.listen(L,st=>{try{K(st)}catch(Et){setTimeout(()=>{throw Et},0)}})};return S(h,yn.EventType.OPEN,()=>{m||g(X,`RPC '${t}' stream ${s} transport opened.`)}),S(h,yn.EventType.CLOSE,()=>{m||(m=!0,g(X,`RPC '${t}' stream ${s} transport closed`),R.Vo())}),S(h,yn.EventType.ERROR,T=>{m||(m=!0,oe(X,`RPC '${t}' stream ${s} transport errored:`,T),R.Vo(new y(d.UNAVAILABLE,"The operation could not be completed")))}),S(h,yn.EventType.MESSAGE,T=>{var L;if(!m){const K=T.data[0];N(!!K);const st=K,Et=st.error||((L=st[0])===null||L===void 0?void 0:L.error);if(Et){g(X,`RPC '${t}' stream ${s} received error:`,Et);const dn=Et.status;let Ht=function(Zu){const pi=F[Zu];if(pi!==void 0)return hu(pi)}(dn),fn=Et.message;Ht===void 0&&(Ht=d.INTERNAL,fn="Unknown error status: "+dn+" with message "+Et.message),m=!0,R.Vo(new y(Ht,fn)),h.close()}else g(X,`RPC '${t}' stream ${s} received:`,K),R.mo(K)}}),S(a,bh.STAT_EVENT,T=>{T.stat===Fi.PROXY?g(X,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===Fi.NOPROXY&&g(X,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function Or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){return new Ld(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,n,r,s,i,o,a,u){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new wu(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(_t(n.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new y(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cf extends Au{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Bd(this.serializer,t),r=function(i){if(!("targetChange"in i))return w.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?gt(o.readTime):w.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=cs(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=rs(u)?{documents:$d(i,u)}:{query:zd(i,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pu(i,o.resumeToken);const c=os(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=jn(i,o.snapshotVersion.toTimestamp());const c=os(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=Gd(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=cs(this.serializer),n.removeTarget=t,this.t_(n)}}class Vf extends Au{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=jd(t.writeResults,t.commitTime),r=gt(t.commitTime);return this.listener.T_(r,n)}return N(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=cs(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>qd(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,as(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,as(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(d.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class bf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(_t(n),this.g_=!1):g("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Qt(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=A(u);c.v_.add(4),await ln(c),c.x_.set("Unknown"),c.v_.delete(4),await mr(c)}(this))})}),this.x_=new bf(r,s)}}async function mr(e){if(Qt(e))for(const t of e.F_)await t(!0)}async function ln(e){for(const t of e.F_)await t(!1)}function Ru(e,t){const n=A(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),ei(n)?ti(n):Ee(n).Jo()&&Zs(n,t))}function Js(e,t){const n=A(e),r=Ee(n);n.C_.delete(t),r.Jo()&&Su(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Qt(n)&&n.x_.set("Unknown"))}function Zs(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ee(e).c_(t)}function Su(e,t){e.O_.Oe(t),Ee(e).l_(t)}function ti(e){e.O_=new kd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ee(e).start(),e.x_.p_()}function ei(e){return Qt(e)&&!Ee(e).Ho()&&e.C_.size>0}function Qt(e){return A(e).v_.size===0}function Pu(e){e.O_=void 0}async function kf(e){e.C_.forEach((t,n)=>{Zs(e,t)})}async function Of(e,t){Pu(e),ei(e)?(e.x_.S_(t),ti(e)):e.x_.set("Unknown")}async function xf(e,t,n){if(e.x_.set("Online"),t instanceof fu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $n(e,r)}else if(t instanceof Rn?e.O_.$e(t):t instanceof du?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(w.min()))try{const r=await Iu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.C_.get(c);l&&i.C_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=i.C_.get(u);if(!l)return;i.C_.set(u,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),Su(i,u);const h=new Rt(l.target,u,c,l.sequenceNumber);Zs(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){g("RemoteStore","Failed to raise snapshot:",r),await $n(e,r)}}async function $n(e,t,n){if(!on(t))throw t;e.v_.add(1),await ln(e),e.x_.set("Offline"),n||(n=()=>Iu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await mr(e)})}function Cu(e,t){return t().catch(n=>$n(e,n,t))}async function gr(e){const t=A(e),n=bt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Mf(t);)try{const s=await vf(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,Lf(t,s)}catch(s){await $n(t,s)}Vu(t)&&Du(t)}function Mf(e){return Qt(e)&&e.D_.length<10}function Lf(e,t){e.D_.push(t);const n=bt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Vu(e){return Qt(e)&&!bt(e).Ho()&&e.D_.length>0}function Du(e){bt(e).start()}async function Ff(e){bt(e).d_()}async function Uf(e){const t=bt(e);for(const n of e.D_)t.I_(n.mutations)}async function Bf(e,t,n){const r=e.D_.shift(),s=Gs.from(r,t,n);await Cu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await gr(e)}async function qf(e,t){t&&bt(e).P_&&await async function(r,s){if(function(o){return Dd(o)&&o!==d.ABORTED}(s.code)){const i=r.D_.shift();bt(r).Zo(),await Cu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gr(r)}}(e,t),Vu(e)&&Du(e)}async function lo(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=Qt(n);n.v_.add(3),await ln(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await mr(n)}async function jf(e,t){const n=A(e);t?(n.v_.delete(2),await mr(n)):t||(n.v_.add(2),await ln(n),n.x_.set("Unknown"))}function Ee(e){return e.N_||(e.N_=function(n,r,s){const i=A(n);return i.R_(),new Cf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:kf.bind(null,e),To:Of.bind(null,e),u_:xf.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),ei(e)?ti(e):e.x_.set("Unknown")):(await e.N_.stop(),Pu(e))})),e.N_}function bt(e){return e.L_||(e.L_=function(n,r,s){const i=A(n);return i.R_(),new Vf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Ff.bind(null,e),To:qf.bind(null,e),E_:Uf.bind(null,e),T_:Bf.bind(null,e)}),e.F_.push(async t=>{t?(e.L_.Zo(),await gr(e)):(await e.L_.stop(),e.D_.length>0&&(g("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new ni(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ri(e,t){if(_t("AsyncQueue",`${t}: ${e}`),on(e))return new y(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=Se(),this.sortedSet=new x(this.comparator)}static emptySet(t){return new re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof re)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.B_=new x(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):v():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class he{constructor(t,n,r,s,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new he(t,n,re.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class zf{constructor(){this.queries=new ye(t=>Xa(t),cr),this.onlineState="Unknown",this.W_=new Set}}async function Kf(e,t){const n=A(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new $f,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=ri(o,`Initialization of query '${Yt(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&si(n)}async function Gf(e,t){const n=A(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Qf(e,t){const n=A(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&si(n)}function Hf(e,t,n){const r=A(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function si(e){e.W_.forEach(t=>{t.next()})}var hs,fo;(fo=hs||(hs={})).j_="default",fo.Cache="cache";class Wf{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new he(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=he.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==hs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.key=t}}class Nu{constructor(t){this.key=t}}class Yf{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=P(),this.mutatedKeys=P(),this.ha=Ja(t),this.Pa=new re(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new ho,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const p=s.get(l),m=lr(this.query,h)?h:null,R=!!p&&this.mutatedKeys.has(p.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;p&&m?p.data.isEqual(m.data)?R!==S&&(r.track({type:3,doc:m}),T=!0):this.da(p,m)||(r.track({type:2,doc:m}),T=!0,(u&&this.ha(m,u)>0||c&&this.ha(m,c)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),T=!0):p&&!m&&(r.track({type:1,doc:p}),T=!0,(u||c)&&(a=!0)),T&&(m?(o=o.add(m),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((l,h)=>function(m,R){const S=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return S(m)-S(R)}(l.type,h.type)||this.ha(l.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],u=this.la.size===0&&this.current&&!s?1:0,c=u!==this.ca;return this.ca=u,o.length!==0||c?{snapshot:new he(this.query,t.Pa,i,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new ho,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=P(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Nu(r))}),this.la.forEach(r=>{t.has(r)||n.push(new bu(r))}),n}fa(t){this.ua=t.hs,this.la=P();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return he.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Xf{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Jf{constructor(t){this.key=t,this.pa=!1}}class Zf{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ye(a=>Xa(a),cr),this.Sa=new Map,this.ba=new Set,this.Da=new x(E.comparator),this.Ca=new Map,this.va=new Ws,this.Fa={},this.Ma=new Map,this.xa=le.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function tp(e,t,n=!0){const r=Fu(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await ku(r,t,n,!0),s}async function ep(e,t){const n=Fu(e);await ku(n,t,!0,!1)}async function ku(e,t,n,r){const s=await Tf(e.localStore,mt(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await np(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&Ru(e.remoteStore,s),a}async function np(e,t,n,r,s){e.Na=(h,p,m)=>async function(S,T,L,K){let st=T.view.Ta(L);st.Xi&&(st=await ao(S.localStore,T.query,!1).then(({documents:fn})=>T.view.Ta(fn,st)));const Et=K&&K.targetChanges.get(T.targetId),dn=K&&K.targetMismatches.get(T.targetId)!=null,Ht=T.view.applyChanges(st,S.isPrimaryClient,Et,dn);return mo(S,T.targetId,Ht.Va),Ht.snapshot}(e,h,p,m);const i=await ao(e.localStore,t,!0),o=new Yf(t,i.hs),a=o.Ta(i.documents),u=cn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,u);mo(e,n,c.Va);const l=new Xf(t,n,o);return e.wa.set(t,l),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),c.snapshot}async function rp(e,t,n){const r=A(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!cr(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ls(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Js(r.remoteStore,s.targetId),ds(r,s.targetId)}).catch(sn)):(ds(r,s.targetId),await ls(r.localStore,s.targetId,!0))}async function sp(e,t){const n=A(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Js(n.remoteStore,r.targetId))}async function ip(e,t,n){const r=dp(e);try{const s=await function(o,a){const u=A(o),c=q.now(),l=a.reduce((m,R)=>m.add(R.key),P());let h,p;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let R=At(),S=P();return u.os.getEntries(m,l).next(T=>{R=T,R.forEach((L,K)=>{K.isValidDocument()||(S=S.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,R)).next(T=>{h=T;const L=[];for(const K of a){const st=Rd(K,h.get(K.key).overlayedDocument);st!=null&&L.push(new Gt(K.key,st,ja(st.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(m,c,L,a)}).next(T=>{p=T;const L=T.applyToLocalDocumentSet(h,S);return u.documentOverlayCache.saveOverlays(m,T.batchId,L)})}).then(()=>({batchId:p.batchId,changes:tu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Fa[o.currentUser.toKey()];c||(c=new x(D)),c=c.insert(a,u),o.Fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await hn(r,s.changes),await gr(r.remoteStore)}catch(s){const i=ri(s,"Failed to persist write");n.reject(i)}}async function Ou(e,t){const n=A(e);try{const r=await yf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(N(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?N(o.pa):s.removedDocuments.size>0&&(N(o.pa),o.pa=!1))}),await hn(n,r,t)}catch(r){await sn(r)}}function po(e,t,n){const r=A(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const p of h.Q_)p.G_(a)&&(c=!0)}),c&&si(u)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function op(e,t,n){const r=A(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new x(E.comparator);o=o.insert(i,Z.newNoDocument(i,w.min()));const a=P().add(i),u=new fr(w.min(),new Map,new x(D),o,a);await Ou(r,u),r.Da=r.Da.remove(i),r.Ca.delete(t),ii(r)}else await ls(r.localStore,t,!1).then(()=>ds(r,t,n)).catch(sn)}async function ap(e,t){const n=A(e),r=t.batch.batchId;try{const s=await _f(n.localStore,t);Mu(n,r,null),xu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hn(n,s)}catch(s){await sn(s)}}async function up(e,t,n){const r=A(e);try{const s=await function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(N(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);Mu(r,t,n),xu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await hn(r,s)}catch(s){await sn(s)}}function xu(e,t){(e.Ma.get(t)||[]).forEach(n=>{n.resolve()}),e.Ma.delete(t)}function Mu(e,t,n){const r=A(e);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Fa[r.currentUser.toKey()]=s}}function ds(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Lu(e,r)})}function Lu(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(Js(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),ii(e))}function mo(e,t,n){for(const r of n)r instanceof bu?(e.va.addReference(r.key,t),cp(e,r)):r instanceof Nu?(g("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Lu(e,r.key)):v()}function cp(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(g("SyncEngine","New document in limbo: "+n),e.ba.add(r),ii(e))}function ii(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new E(O.fromString(t)),r=e.xa.next();e.Ca.set(r,new Jf(n)),e.Da=e.Da.insert(n,r),Ru(e.remoteStore,new Rt(mt(Wa(n.path)),r,"TargetPurposeLimboResolution",Bs._e))}}async function hn(e,t,n){const r=A(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const l=Xs.Ki(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.ya.u_(s),await async function(u,c){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,p=>f.forEach(p.qi,m=>l.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>f.forEach(p.Qi,m=>l.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!on(h))throw h;g("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const m=l.ns.get(p),R=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(R);l.ns=l.ns.insert(p,S)}}}(r.localStore,i))}async function lp(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const r=await Tu(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(u=>{u.reject(new y(d.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await hn(n,r.us)}}function hp(e,t){const n=A(e),r=n.Ca.get(t);if(r&&r.pa)return P().add(r.key);{let s=P();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Fu(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ou.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=op.bind(null,t),t.ya.u_=Qf.bind(null,t.eventManager),t.ya.La=Hf.bind(null,t.eventManager),t}function dp(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ap.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=up.bind(null,t),t}class go{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=pr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return gf(this.persistence,new pf,t.initialUser,this.serializer)}createPersistence(t){return new hf(Ys.Hr,this.serializer)}createSharedClientState(t){return new wf}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>po(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lp.bind(null,this.syncEngine),await jf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zf}()}createDatastore(t){const n=pr(t.databaseInfo.databaseId),r=function(i){return new Pf(i)}(t.databaseInfo);return function(i,o,a,u){return new Df(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Nf(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>po(this.syncEngine,n,0),function(){return co.D()?new co:new Af}())}createSyncEngine(t,n){return function(s,i,o,a,u,c,l){const h=new Zf(s,i,o,a,u,c);return l&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=A(r);g("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ln(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):_t("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=J.UNAUTHENTICATED,this.clientId=Ua.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{g("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(g("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ri(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function xr(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function _o(e,t){e.asyncQueue.verifyOperationInProgress();const n=await _p(e);g("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>lo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>lo(t.remoteStore,s)),e._onlineComponents=t}function gp(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function _p(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await xr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!gp(n))throw n;oe("Error using user provided cache. Falling back to memory cache: "+n),await xr(e,new go)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await xr(e,new go);return e._offlineComponents}async function Uu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await _o(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await _o(e,new fp))),e._onlineComponents}function yp(e){return Uu(e).then(t=>t.syncEngine)}async function Ep(e){const t=await Uu(e),n=t.eventManager;return n.onListen=tp.bind(null,t.syncEngine),n.onUnlisten=rp.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ep.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=sp.bind(null,t.syncEngine),n}function vp(e,t,n={}){const r=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new pp({next:p=>{o.enqueueAndForget(()=>Gf(i,h)),p.fromCache&&u.source==="server"?c.reject(new y(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new Wf(a,l,{includeMetadataChanges:!0,ta:!0});return Kf(i,h)}(await Ep(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(e,t,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Tp(e,t,n,r){if(t===!0&&r===!0)throw new y(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Eo(e){if(!E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vo(e){if(E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function _r(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":v()}function zn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_r(e);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yr{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new To({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new To(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oh;switch(r.type){case"firstParty":return new Fh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yo.get(n);r&&(g("ComponentProvider","Removing Datastore"),yo.delete(n),r.terminate())}(this),Promise.resolve()}}function Ip(e,t,n,r={}){var s;const i=(e=zn(e,yr))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&oe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=J.MOCK_USER;else{a=hc(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new J(c)}e._authCredentials=new xh(new Fa(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ve(this.firestore,t,this._query)}}class ut{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ut(this.firestore,t,this._key)}}class Ct extends ve{constructor(t,n,r){super(t,n,Wa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ut(this.firestore,null,new E(t))}withConverter(t){return new Ct(this.firestore,t,this._path)}}function Yp(e,t,...n){if(e=se(e),qu("collection","path",t),e instanceof yr){const r=O.fromString(t,...n);return vo(r),new Ct(e,null,r)}{if(!(e instanceof ut||e instanceof Ct))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return vo(r),new Ct(e.firestore,null,r)}}function wp(e,t,...n){if(e=se(e),arguments.length===1&&(t=Ua.newId()),qu("doc","path",t),e instanceof yr){const r=O.fromString(t,...n);return Eo(r),new ut(e,null,new E(r))}{if(!(e instanceof ut||e instanceof Ct))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return Eo(r),new ut(e.firestore,e instanceof Ct?e.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new wu(this,"async_queue_retry"),this.cu=()=>{const n=Or();n&&g("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Or();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=Or();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Tt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!on(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=ni.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&v()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class oi extends yr{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Ap}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$u(this),this._firestoreClient.terminate()}}function Rp(e,t){const n=typeof e=="object"?e:gl(),r=typeof e=="string"?e:t||"(default)",s=dl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cc("firestore");i&&Ip(s,...i)}return s}function ju(e){return e._firestoreClient||$u(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $u(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,c,l){return new Jh(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Bu(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new mp(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this._byteString=t}static fromBase64String(t){try{return new de(nt.fromBase64String(t))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new de(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=/^__.*__$/;class Pp{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Gt(t,this.data,this.fieldMask,n,this.fieldTransforms):new un(t,this.data,n,this.fieldTransforms)}}function Ku(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class ci{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.pu(t),s}yu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return Kn(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(Ku(this.Vu)&&Sp.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Cp{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||pr(t)}Cu(t,n,r,s=!1){return new ci({Vu:t,methodName:n,Du:r,path:H.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gu(e){const t=e._freezeSettings(),n=pr(e._databaseId);return new Cp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Vp(e,t,n,r,s,i={}){const o=e.Cu(i.merge||i.mergeFields?2:0,t,n,s);Wu("Data must be an object, but it was:",o,r);const a=Qu(r,o);let u,c;if(i.merge)u=new ct(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const p=bp(t,h,n);if(!o.contains(p))throw new y(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);kp(l,p)||l.push(p)}u=new ct(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Pp(new at(a),u,c)}function Dp(e,t,n,r=!1){return li(n,e.Cu(r?4:3,t))}function li(e,t){if(Hu(e=se(e)))return Wu("Unsupported field value:",t,e),Qu(e,t);if(e instanceof zu)return function(r,s){if(!Ku(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=li(a,s.wu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ed(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=q.fromDate(r);return{timestampValue:jn(s.serializer,i)}}if(r instanceof q){const i=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jn(s.serializer,i)}}if(r instanceof ui)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof de)return{bytesValue:pu(s.serializer,r._byteString)};if(r instanceof ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hs(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${_r(r)}`)}(e,t)}function Qu(e,t){const n={};return Ba(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(e,(r,s)=>{const i=li(s,t.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof ui||e instanceof de||e instanceof ut||e instanceof zu)}function Wu(e,t,n){if(!Hu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_r(n);throw r==="an object"?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function bp(e,t,n){if((t=se(t))instanceof ai)return t._internalPath;if(typeof t=="string")return Yu(e,t);throw Kn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Np=new RegExp("[~\\*/\\[\\]]");function Yu(e,t,n){if(t.search(Np)>=0)throw Kn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ai(...t.split("."))._internalPath}catch{throw Kn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Kn(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new y(d.INVALID_ARGUMENT,a+e+u)}function kp(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Op(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(hi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Op extends Xu{data(){return super.data()}}function hi(e,t){return typeof t=="string"?Yu(e,t):t instanceof ai?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class di{}class Mp extends di{}function Xp(e,t,...n){let r=[];t instanceof di&&r.push(t),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof fi).length,a=i.filter(u=>u instanceof Er).length;if(o>1||o>0&&a>0)throw new y(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Er extends Mp{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Er(t,n,r)}_apply(t){const n=this._parse(t);return Ju(t._query,n),new ve(t.firestore,t.converter,ss(t._query,n))}_parse(t){const n=Gu(t.firestore);return function(i,o,a,u,c,l,h){let p;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){wo(h,l);const m=[];for(const R of h)m.push(Io(u,i,R));p={arrayValue:{values:m}}}else p=Io(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||wo(h,l),p=Dp(a,o,h,l==="in"||l==="not-in");return B.create(c,l,p)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Jp(e,t,n){const r=t,s=hi("where",e);return Er._create(s,r,n)}class fi extends di{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new fi(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ht.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)Ju(o,u),o=ss(o,u)}(t._query,n),new ve(t.firestore,t.converter,ss(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Io(e,t,n){if(typeof(n=se(n))=="string"){if(n==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ya(t)&&n.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(O.fromString(n));if(!E.isDocumentKey(r))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zi(e,new E(r))}if(n instanceof ut)return zi(e,n._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_r(n)}.`)}function wo(e,t){if(!Array.isArray(e)||e.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ju(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Lp{convertValue(t,n="none"){switch(zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes($t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw v()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return _e(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new ui(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=js(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ke(t));default:return null}}convertTimestamp(t){const n=Dt(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=O.fromString(t);N(vu(r));const s=new Ge(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||_t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Up extends Xu{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Sn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(hi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sn extends Up{data(t={}){return super.data(t)}}class Bp{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new In(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Sn(this._firestore,this._userDataWriter,r.key,r,new In(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Sn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new In(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Sn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new In(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:qp(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}class jp extends Lp{constructor(t){super(),this.firestore=t}convertBytes(t){return new de(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function Zp(e){e=zn(e,ve);const t=zn(e.firestore,oi),n=ju(t),r=new jp(t);return xp(e._query),vp(n,e._query).then(s=>new Bp(t,r,e,s))}function tm(e,t){const n=zn(e.firestore,oi),r=wp(e),s=Fp(e.converter,t);return $p(n,[Vp(Gu(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function $p(e,t){return function(r,s){const i=new Tt;return r.asyncQueue.enqueueAndForget(async()=>ip(await yp(r),s,i)),i.promise}(ju(e),t)}(function(t,n=!0){(function(s){ge=s})(ml),Dn(new Oe("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new oi(new Mh(r.getProvider("auth-internal")),new Bh(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ge(c.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),te(Ui,"4.5.1",t),te(Ui,"4.5.1","esm2017")})();const zp={apiKey:"AIzaSyCqcXlTU5A91zo5_cyPk-YBN7LEnzCGCKs",authDomain:"form-e903a.firebaseapp.com",projectId:"form-e903a",storageBucket:"form-e903a.appspot.com",messagingSenderId:"711136941489",appId:"1:711136941489:web:d259c09f8154d135a59990"},Kp=No(zp),em=Rp(Kp);export{tm as a,Yp as c,em as d,Zp as g,Xp as q,Jp as w};
