"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=String.fromCharCode(8203);function t(e,t,r=" "){const n=e.substring(0,t).lastIndexOf(r),o=-1===n?t:n;return e.substring(0,o)}function r(e){return!("object"!=typeof e||!e)&&e.constructor===Object}const n=["string","bigint","number","boolean"];function o(e){return n.includes(typeof e)}function s(e){if(null===e||o(e))return e;if(Array.isArray(e)){const t=[];for(const r of e)t.push(s(r));return t}if(r(e)){const t={};for(const[r,n]of Object.entries(e))t[r]=s(n);return t}if(e instanceof Map){const t=new e.constructor;for(const[r,n]of e.entries())t.set(r,s(n));return t}if(e instanceof Set){const t=new e.constructor;for(const r of e.values())t.add(s(r));return t}return e}const c=String.fromCharCode(8203);function u(e){return"function"==typeof e}const i=/[-/\\^$*+?.()|[\]{}]/g;const f=/[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g,l={textchannel:"TextChannel",voicechannel:"VoiceChannel",categorychannel:"CategoryChannel",guildmember:"GuildMember"};exports.arrayStrictEquals=function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r]||typeof e[r]!=typeof t[r])return!1;return!0},exports.chunk=function(e,t){if(!Array.isArray(e))throw new TypeError("entries must be an array.");if(!Number.isInteger(t))throw new TypeError("chunkSize must be an integer.");if(t<1)throw new RangeError("chunkSize must be 1 or greater.");const r=e.slice(),n=[];for(;r.length;)n.push(r.splice(0,t));return n},exports.classExtends=function(e,t){let r=e;for(;null!==r;){if(r===t)return!0;r=Object.getPrototypeOf(r)}return!1},exports.codeBlock=function(t,r="md"){return 0===t.length?`\`\`\`${e}\`\`\``:`\`\`\`${r}\n${t.replace(/```/,`\`${e}\`\``).replace(/`$/g,"`"+e)}\`\`\``},exports.cutText=function(e,r){if(e.length<r)return e;const n=t(e,r-3);return n.length<r-3?n+"...":n.slice(0,r-3)+"..."},exports.deepClone=s,exports.inlineCodeBlock=function(e){return`\`${e.replace(/ /g," ").replace(/`/g,"`"+c)}\``},exports.isClass=function(e){return"function"==typeof e&&"object"==typeof e.prototype},exports.isFunction=u,exports.isNullOrUndefined=function(e){return null==e},exports.isNumber=function(e){return"number"==typeof e&&!isNaN(e)&&Number.isFinite(e)},exports.isObject=r,exports.isPrimitive=o,exports.isThenable=function(e){return"object"==typeof e&&null!==e&&(e instanceof Promise||e!==Promise.prototype&&function(e){return Reflect.has(e,"then")&&u(e.then)}(e)&&function(e){return Reflect.has(e,"catch")&&u(e.catch)}(e))},exports.makeObject=function(e,t,r={}){if(e.includes(".")){const n=e.split("."),o=n.pop();let s=r;for(const e of n)s[e]||(s[e]={}),s=s[e];s[o]=t}else r[e]=t;return r},exports.mergeDefault=function e(t,n){if(!n)return s(t);for(const[o,c]of Object.entries(t)){const t=Reflect.get(n,o);void 0===t?Reflect.set(n,o,s(c)):r(t)&&Reflect.set(n,o,e(c,t))}return n},exports.mergeObjects=function e(t,n){for(const[o,s]of Object.entries(n)){const n=Reflect.get(t,o);r(s)?Reflect.set(t,o,r(n)?e(n,s):s):r(n)||Reflect.set(t,o,s)}return t},exports.noop=function(){},exports.objectToTuples=function e(t,n=""){const o=[];for(const[s,c]of Object.entries(t))r(c)?o.push(...e(c,`${n}${s}.`)):o.push([`${n}${s}`,c]);return o},exports.parseURL=function(e){try{return new URL(e)}catch{return null}},exports.regExpEsc=function(e){return e.replace(i,"\\$&")},exports.roundNumber=function(e,t=0){if(!e.toString().includes("e"))return Number(`${Math.round(Number(`${e}e+${t}`))}e-${t}`);const r=(""+e).split("e");let n="";return Number(r[1])+t>0&&(n="+"),Number(`${Math.round(Number(`${Number(r[0])}e${n}${Number(r[1])+t}`))}e-${t}`)},exports.splitText=t,exports.toTitleCase=function(e){return e.replace(f,e=>l[e]||e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())},exports.tryParse=function(e){try{return JSON.parse(e)}catch(t){return e}};
//# sourceMappingURL=index.js.map
