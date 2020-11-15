!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SapphireEventIterator={})}(this,(function(e){"use strict";function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,i){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,i),i}var t,i,s,r,a,l,n;class EventIterator{constructor(e,h,o={}){Object.defineProperty(this,"emitter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"event",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"filter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),t.set(this,!1),i.set(this,void 0),s.set(this,[]),r.set(this,0),a.set(this,void 0),l.set(this,null),n.set(this,void 0),this.emitter=e,this.event=h,__classPrivateFieldSet(this,a,o.limit??1/0),__classPrivateFieldSet(this,i,o.idle),this.filter=o.filter??(()=>!0),__classPrivateFieldGet(this,i)&&__classPrivateFieldSet(this,l,setTimeout(this.end.bind(this),__classPrivateFieldGet(this,i))),__classPrivateFieldSet(this,n,this.push.bind(this));const d=this.emitter.getMaxListeners();0!==d&&this.emitter.setMaxListeners(d+1),this.emitter.on(this.event,__classPrivateFieldGet(this,n))}get ended(){return __classPrivateFieldGet(this,t)}end(){if(__classPrivateFieldGet(this,t))return;__classPrivateFieldSet(this,t,!0),__classPrivateFieldSet(this,s,[]),this.emitter.off(this.event,__classPrivateFieldGet(this,n));const e=this.emitter.getMaxListeners();0!==e&&this.emitter.setMaxListeners(e-1)}async next(){if(__classPrivateFieldGet(this,s).length){const e=__classPrivateFieldGet(this,s).shift();return this.filter(e)?(__classPrivateFieldSet(this,r,+__classPrivateFieldGet(this,r)+1)>=__classPrivateFieldGet(this,a)&&this.end(),__classPrivateFieldGet(this,l)&&__classPrivateFieldGet(this,l).refresh(),{done:!1,value:e}):this.next()}return __classPrivateFieldGet(this,t)?(__classPrivateFieldGet(this,l)&&clearTimeout(__classPrivateFieldGet(this,l)),{done:!0,value:void 0}):new Promise((e=>{let t=null;__classPrivateFieldGet(this,i)&&(t=setTimeout((()=>{this.end(),e(this.next())}),__classPrivateFieldGet(this,i))),this.emitter.once(this.event,(()=>{t&&clearTimeout(t),e(this.next())}))}))}return(){return this.end(),Promise.resolve({done:!0,value:void 0})}throw(){return this.end(),Promise.resolve({done:!0,value:void 0})}[(t=new WeakMap,i=new WeakMap,s=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,n=new WeakMap,Symbol.asyncIterator)](){return this}push(...e){__classPrivateFieldGet(this,s).push(e)}}e.EventIterator=EventIterator,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map