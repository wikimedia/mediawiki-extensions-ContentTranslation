/*@nomin*/
var Ud = Object.defineProperty, Rd = Object.defineProperties;
var Vd = Object.getOwnPropertyDescriptors;
var gr = Object.getOwnPropertySymbols;
var zd = Object.prototype.hasOwnProperty, jd = Object.prototype.propertyIsEnumerable;
var fr = (e, t, n) => t in e ? Ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lt = (e, t) => {
  for (var n in t || (t = {}))
    zd.call(t, n) && fr(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      jd.call(t, n) && fr(e, n, t[n]);
  return e;
}, yt = (e, t) => Rd(e, Vd(t));
var W = (e, t, n) => new Promise((o, s) => {
  var a = (l) => {
    try {
      r(n.next(l));
    } catch (d) {
      s(d);
    }
  }, i = (l) => {
    try {
      r(n.throw(l));
    } catch (d) {
      s(d);
    }
  }, r = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  r((n = n.apply(e, t)).next());
});
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function tn(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const Be = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, co = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], Xe = () => {
}, Ml = () => !1, Go = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ps = (e) => e.startsWith("onUpdate:"), ze = Object.assign, pi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hd = Object.prototype.hasOwnProperty, ke = (e, t) => Hd.call(e, t), le = Array.isArray, zn = (e) => Wo(e) === "[object Map]", Ol = (e) => Wo(e) === "[object Set]", pr = (e) => Wo(e) === "[object Date]", ge = (e) => typeof e == "function", Ve = (e) => typeof e == "string", Cn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", mi = (e) => (Fe(e) || ge(e)) && ge(e.then) && ge(e.catch), Il = Object.prototype.toString, Wo = (e) => Il.call(e), hi = (e) => Wo(e).slice(8, -1), Bl = (e) => Wo(e) === "[object Object]", _i = (e) => Ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Cs = /* @__PURE__ */ tn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qd = /* @__PURE__ */ tn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Gs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gd = /-(\w)/g, zt = Gs((e) => e.replace(Gd, (t, n) => n ? n.toUpperCase() : "")), Wd = /\B([A-Z])/g, en = Gs(
  (e) => e.replace(Wd, "-$1").toLowerCase()
), Yn = Gs((e) => e.charAt(0).toUpperCase() + e.slice(1)), gn = Gs((e) => e ? `on${Yn(e)}` : ""), xn = (e, t) => !Object.is(e, t), ao = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ns = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Kd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xd = (e) => {
  const t = Ve(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let mr;
const Ws = () => mr || (mr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function ot(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = Ve(o) ? Qd(o) : ot(o);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else if (Ve(e) || Fe(e))
    return e;
}
const Yd = /;(?![^(]*\))/g, Jd = /:([^]+)/, Zd = /\/\*[^]*?\*\//g;
function Qd(e) {
  const t = {};
  return e.replace(Zd, "").split(Yd).forEach((n) => {
    if (n) {
      const o = n.split(Jd);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function _e(e) {
  let t = "";
  if (Ve(e))
    t = e;
  else if (le(e))
    for (let n = 0; n < e.length; n++) {
      const o = _e(e[n]);
      o && (t += o + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function vi(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !Ve(t) && (e.class = _e(t)), n && (e.style = ot(n)), e;
}
const eg = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tg = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ng = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", og = /* @__PURE__ */ tn(eg), sg = /* @__PURE__ */ tn(tg), ag = /* @__PURE__ */ tn(ng), ig = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rg = /* @__PURE__ */ tn(ig);
function $l(e) {
  return !!e || e === "";
}
function lg(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Fs(e[o], t[o]);
  return n;
}
function Fs(e, t) {
  if (e === t)
    return !0;
  let n = pr(e), o = pr(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Cn(e), o = Cn(t), n || o)
    return e === t;
  if (n = le(e), o = le(t), n || o)
    return n && o ? lg(e, t) : !1;
  if (n = Fe(e), o = Fe(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, a = Object.keys(t).length;
    if (s !== a)
      return !1;
    for (const i in e) {
      const r = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (r && !l || !r && l || !Fs(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ae = (e) => Ve(e) ? e : e == null ? "" : le(e) || Fe(e) && (e.toString === Il || !ge(e.toString)) ? JSON.stringify(e, Ul, 2) : String(e), Ul = (e, t) => t && t.__v_isRef ? Ul(e, t.value) : zn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], a) => (n[ma(o, a) + " =>"] = s, n),
    {}
  )
} : Ol(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ma(n))
} : Cn(t) ? ma(t) : Fe(t) && !le(t) && !Bl(t) ? String(t) : t, ma = (e, t = "") => {
  var n;
  return Cn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Oa(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Dt;
class Rl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Dt, !t && Dt && (this.index = (Dt.scopes || (Dt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Dt;
      try {
        return Dt = this, t();
      } finally {
        Dt = n;
      }
    } else
      ({}).NODE_ENV !== "production" && Oa("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Dt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Dt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function cg(e) {
  return new Rl(e);
}
function ug(e, t = Dt) {
  t && t.active && t.effects.push(e);
}
function dg() {
  return Dt;
}
let jn;
class yi {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ug(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Tn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (gg(n.computed), this._dirtyLevel >= 2))
          break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Dn();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = wn, n = jn;
    try {
      return wn = !0, jn = this, this._runnings++, hr(this), this.fn();
    } finally {
      _r(this), this._runnings--, jn = n, wn = t;
    }
  }
  stop() {
    var t;
    this.active && (hr(this), _r(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function gg(e) {
  return e.value;
}
function hr(e) {
  e._trackId++, e._depsLength = 0;
}
function _r(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Vl(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Vl(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let wn = !0, Ia = 0;
const zl = [];
function Tn() {
  zl.push(wn), wn = !1;
}
function Dn() {
  const e = zl.pop();
  wn = e === void 0 ? !0 : e;
}
function bi() {
  Ia++;
}
function Si() {
  for (Ia--; !Ia && Ba.length; )
    Ba.shift()();
}
function jl(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Vl(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, {}.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, ze({ effect: e }, n)));
  }
}
const Ba = [];
function Hl(e, t, n) {
  var o;
  bi();
  for (const s of e.keys())
    if (s._dirtyLevel < t && e.get(s) === s._trackId) {
      const a = s._dirtyLevel;
      s._dirtyLevel = t, a === 0 && (s._shouldSchedule = !0, {}.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, ze({ effect: s }, n))), s.trigger());
    }
  ql(e), Si();
}
function ql(e) {
  for (const t of e.keys())
    t.scheduler && t._shouldSchedule && (!t._runnings || t.allowRecurse) && e.get(t) === t._trackId && (t._shouldSchedule = !1, Ba.push(t.scheduler));
}
const Gl = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, $a = /* @__PURE__ */ new WeakMap(), Hn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Ua = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
function at(e, t, n) {
  if (wn && jn) {
    let o = $a.get(e);
    o || $a.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Gl(() => o.delete(n))), jl(
      jn,
      s,
      {}.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Vt(e, t, n, o, s, a) {
  const i = $a.get(e);
  if (!i)
    return;
  let r = [];
  if (t === "clear")
    r = [...i.values()];
  else if (n === "length" && le(e)) {
    const l = Number(o);
    i.forEach((d, c) => {
      (c === "length" || !Cn(c) && c >= l) && r.push(d);
    });
  } else
    switch (n !== void 0 && r.push(i.get(n)), t) {
      case "add":
        le(e) ? _i(n) && r.push(i.get("length")) : (r.push(i.get(Hn)), zn(e) && r.push(i.get(Ua)));
        break;
      case "delete":
        le(e) || (r.push(i.get(Hn)), zn(e) && r.push(i.get(Ua)));
        break;
      case "set":
        zn(e) && r.push(i.get(Hn));
        break;
    }
  bi();
  for (const l of r)
    l && Hl(
      l,
      2,
      {}.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: s,
        oldTarget: a
      } : void 0
    );
  Si();
}
const fg = /* @__PURE__ */ tn("__proto__,__v_isRef,__isVue"), Wl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Cn)
), vr = /* @__PURE__ */ pg();
function pg() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = ye(this);
      for (let a = 0, i = this.length; a < i; a++)
        at(o, "get", a + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(ye)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Tn(), bi();
      const o = ye(this)[t].apply(this, n);
      return Si(), Dn(), o;
    };
  }), e;
}
function mg(e) {
  const t = ye(this);
  return at(t, "has", e), t.hasOwnProperty(e);
}
class Kl {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, a = this._shallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return o === (s ? a ? tc : ec : a ? Ql : Zl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = le(t);
    if (!s) {
      if (i && ke(vr, n))
        return Reflect.get(vr, n, o);
      if (n === "hasOwnProperty")
        return mg;
    }
    const r = Reflect.get(t, n, o);
    return (Cn(n) ? Wl.has(n) : fg(n)) || (s || at(t, "get", n), a) ? r : st(r) ? i && _i(n) ? r : r.value : Fe(r) ? s ? oc(r) : ho(r) : r;
  }
}
class Xl extends Kl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let a = t[n];
    if (!this._shallow) {
      const l = En(a);
      if (!Ms(o) && !En(o) && (a = ye(a), o = ye(o)), !le(t) && st(a) && !st(o))
        return l ? !1 : (a.value = o, !0);
    }
    const i = le(t) && _i(n) ? Number(n) < t.length : ke(t, n), r = Reflect.set(t, n, o, s);
    return t === ye(s) && (i ? xn(o, a) && Vt(t, "set", n, o, a) : Vt(t, "add", n, o)), r;
  }
  deleteProperty(t, n) {
    const o = ke(t, n), s = t[n], a = Reflect.deleteProperty(t, n);
    return a && o && Vt(t, "delete", n, void 0, s), a;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Cn(n) || !Wl.has(n)) && at(t, "has", n), o;
  }
  ownKeys(t) {
    return at(
      t,
      "iterate",
      le(t) ? "length" : Hn
    ), Reflect.ownKeys(t);
  }
}
class Yl extends Kl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return {}.NODE_ENV !== "production" && Oa(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return {}.NODE_ENV !== "production" && Oa(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const hg = /* @__PURE__ */ new Xl(), _g = /* @__PURE__ */ new Yl(), vg = /* @__PURE__ */ new Xl(
  !0
), yg = /* @__PURE__ */ new Yl(!0), wi = (e) => e, Ks = (e) => Reflect.getPrototypeOf(e);
function ps(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = ye(e), a = ye(t);
  n || (xn(t, a) && at(s, "get", t), at(s, "get", a));
  const { has: i } = Ks(s), r = o ? wi : n ? Ci : Oo;
  if (i.call(s, t))
    return r(e.get(t));
  if (i.call(s, a))
    return r(e.get(a));
  e !== s && e.get(t);
}
function ms(e, t = !1) {
  const n = this.__v_raw, o = ye(n), s = ye(e);
  return t || (xn(e, s) && at(o, "has", e), at(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function hs(e, t = !1) {
  return e = e.__v_raw, !t && at(ye(e), "iterate", Hn), Reflect.get(e, "size", e);
}
function yr(e) {
  e = ye(e);
  const t = ye(this);
  return Ks(t).has.call(t, e) || (t.add(e), Vt(t, "add", e, e)), this;
}
function br(e, t) {
  t = ye(t);
  const n = ye(this), { has: o, get: s } = Ks(n);
  let a = o.call(n, e);
  a ? {}.NODE_ENV !== "production" && Jl(n, o, e) : (e = ye(e), a = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), a ? xn(t, i) && Vt(n, "set", e, t, i) : Vt(n, "add", e, t), this;
}
function Sr(e) {
  const t = ye(this), { has: n, get: o } = Ks(t);
  let s = n.call(t, e);
  s ? {}.NODE_ENV !== "production" && Jl(t, n, e) : (e = ye(e), s = n.call(t, e));
  const a = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && Vt(t, "delete", e, void 0, a), i;
}
function wr() {
  const e = ye(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? zn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Vt(e, "clear", void 0, void 0, n), o;
}
function _s(e, t) {
  return function(o, s) {
    const a = this, i = a.__v_raw, r = ye(i), l = t ? wi : e ? Ci : Oo;
    return !e && at(r, "iterate", Hn), i.forEach((d, c) => o.call(s, l(d), l(c), a));
  };
}
function vs(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, a = ye(s), i = zn(a), r = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, d = s[e](...o), c = n ? wi : t ? Ci : Oo;
    return !t && at(
      a,
      "iterate",
      l ? Ua : Hn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: g } = d.next();
        return g ? { value: u, done: g } : {
          value: r ? [c(u[0]), c(u[1])] : c(u),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function an(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Yn(e)} operation ${n}failed: target is readonly.`,
        ye(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function bg() {
  const e = {
    get(a) {
      return ps(this, a);
    },
    get size() {
      return hs(this);
    },
    has: ms,
    add: yr,
    set: br,
    delete: Sr,
    clear: wr,
    forEach: _s(!1, !1)
  }, t = {
    get(a) {
      return ps(this, a, !1, !0);
    },
    get size() {
      return hs(this);
    },
    has: ms,
    add: yr,
    set: br,
    delete: Sr,
    clear: wr,
    forEach: _s(!1, !0)
  }, n = {
    get(a) {
      return ps(this, a, !0);
    },
    get size() {
      return hs(this, !0);
    },
    has(a) {
      return ms.call(this, a, !0);
    },
    add: an("add"),
    set: an("set"),
    delete: an("delete"),
    clear: an("clear"),
    forEach: _s(!0, !1)
  }, o = {
    get(a) {
      return ps(this, a, !0, !0);
    },
    get size() {
      return hs(this, !0);
    },
    has(a) {
      return ms.call(this, a, !0);
    },
    add: an("add"),
    set: an("set"),
    delete: an("delete"),
    clear: an("clear"),
    forEach: _s(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = vs(
      a,
      !1,
      !1
    ), n[a] = vs(
      a,
      !0,
      !1
    ), t[a] = vs(
      a,
      !1,
      !0
    ), o[a] = vs(
      a,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Sg,
  wg,
  Cg,
  xg
] = /* @__PURE__ */ bg();
function Xs(e, t) {
  const n = t ? e ? xg : Cg : e ? wg : Sg;
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    ke(n, s) && s in o ? n : o,
    s,
    a
  );
}
const Eg = {
  get: /* @__PURE__ */ Xs(!1, !1)
}, Ag = {
  get: /* @__PURE__ */ Xs(!1, !0)
}, kg = {
  get: /* @__PURE__ */ Xs(!0, !1)
}, Tg = {
  get: /* @__PURE__ */ Xs(!0, !0)
};
function Jl(e, t, n) {
  const o = ye(n);
  if (o !== n && t.call(e, o)) {
    const s = hi(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Zl = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap(), ec = /* @__PURE__ */ new WeakMap(), tc = /* @__PURE__ */ new WeakMap();
function Dg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Lg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dg(hi(e));
}
function ho(e) {
  return En(e) ? e : Ys(
    e,
    !1,
    hg,
    Eg,
    Zl
  );
}
function nc(e) {
  return Ys(
    e,
    !1,
    vg,
    Ag,
    Ql
  );
}
function oc(e) {
  return Ys(
    e,
    !0,
    _g,
    kg,
    ec
  );
}
function lo(e) {
  return Ys(
    e,
    !0,
    yg,
    Tg,
    tc
  );
}
function Ys(e, t, n, o, s) {
  if (!Fe(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = s.get(e);
  if (a)
    return a;
  const i = Lg(e);
  if (i === 0)
    return e;
  const r = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, r), r;
}
function qn(e) {
  return En(e) ? qn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function En(e) {
  return !!(e && e.__v_isReadonly);
}
function Ms(e) {
  return !!(e && e.__v_isShallow);
}
function Ra(e) {
  return qn(e) || En(e);
}
function ye(e) {
  const t = e && e.__v_raw;
  return t ? ye(t) : e;
}
function sc(e) {
  return Ns(e, "__v_skip", !0), e;
}
const Oo = (e) => Fe(e) ? ho(e) : e, Ci = (e) => Fe(e) ? oc(e) : e;
class ac {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new yi(
      () => t(this._value),
      () => xs(this, 1),
      () => this.dep && ql(this.dep)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = ye(this);
    return (!t._cacheable || t.effect.dirty) && xn(t._value, t._value = t.effect.run()) && xs(t, 2), ic(t), t.effect._dirtyLevel >= 1 && xs(t, 1), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Pg(e, t, n = !1) {
  let o, s;
  const a = ge(e);
  a ? (o = e, s = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Xe) : (o = e.get, s = e.set);
  const i = new ac(o, s, a || !s, n);
  return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function ic(e) {
  wn && jn && (e = ye(e), jl(
    jn,
    e.dep || (e.dep = Gl(
      () => e.dep = void 0,
      e instanceof ac ? e : void 0
    )),
    {}.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function xs(e, t = 2, n) {
  e = ye(e);
  const o = e.dep;
  o && Hl(
    o,
    t,
    {}.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function st(e) {
  return !!(e && e.__v_isRef === !0);
}
function Q(e) {
  return rc(e, !1);
}
function Ng(e) {
  return rc(e, !0);
}
function rc(e, t) {
  return st(e) ? e : new Fg(e, t);
}
class Fg {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ye(t), this._value = n ? t : Oo(t);
  }
  get value() {
    return ic(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ms(t) || En(t);
    t = n ? t : ye(t), xn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Oo(t), xs(this, 2, t));
  }
}
function pe(e) {
  return st(e) ? e.value : e;
}
const Mg = {
  get: (e, t, n) => pe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return st(s) && !st(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function lc(e) {
  return qn(e) ? e : new Proxy(e, Mg);
}
/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Gn = [];
function Es(e) {
  Gn.push(e);
}
function As() {
  Gn.pop();
}
function z(e, ...t) {
  Tn();
  const n = Gn.length ? Gn[Gn.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Og();
  if (o)
    Qt(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: a }) => `at <${aa(n, a.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    s.length && a.push(`
`, ...Ig(s)), console.warn(...a);
  }
  Dn();
}
function Og() {
  let e = Gn[Gn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ig(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Bg(n));
  }), t;
}
function Bg({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${aa(
    e.component,
    e.type,
    o
  )}`, a = ">" + n;
  return e.props ? [s, ...$g(e.props), a] : [s + a];
}
function $g(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...cc(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function cc(e, t, n) {
  return Ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : st(t) ? (t = cc(e, ye(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ge(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ye(t), n ? t : [`${e}=`, t]);
}
function Ug(e, t) {
  ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? z(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && z(`${t} is NaN - the duration expression might be incorrect.`));
}
const xi = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Qt(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (a) {
    Ko(a, t, n);
  }
  return s;
}
function kt(e, t, n, o) {
  if (ge(e)) {
    const a = Qt(e, t, n, o);
    return a && mi(a) && a.catch((i) => {
      Ko(i, t, n);
    }), a;
  }
  const s = [];
  for (let a = 0; a < e.length; a++)
    s.push(kt(e[a], t, n, o));
  return s;
}
function Ko(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const i = t.proxy, r = {}.NODE_ENV !== "production" ? xi[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, i, r) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Qt(
        l,
        null,
        10,
        [e, i, r]
      );
      return;
    }
  }
  Rg(e, n, s, o);
}
function Rg(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const s = xi[t];
    if (n && Es(n), z(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && As(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Io = !1, Va = !1;
const ct = [];
let Ut = 0;
const uo = [];
let Jt = null, fn = 0;
const uc = /* @__PURE__ */ Promise.resolve();
let Ei = null;
const Vg = 100;
function _o(e) {
  const t = Ei || uc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zg(e) {
  let t = Ut + 1, n = ct.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = ct[o], a = Bo(s);
    a < e || a === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Js(e) {
  (!ct.length || !ct.includes(
    e,
    Io && e.allowRecurse ? Ut + 1 : Ut
  )) && (e.id == null ? ct.push(e) : ct.splice(zg(e.id), 0, e), dc());
}
function dc() {
  !Io && !Va && (Va = !0, Ei = uc.then(pc));
}
function jg(e) {
  const t = ct.indexOf(e);
  t > Ut && ct.splice(t, 1);
}
function gc(e) {
  le(e) ? uo.push(...e) : (!Jt || !Jt.includes(
    e,
    e.allowRecurse ? fn + 1 : fn
  )) && uo.push(e), dc();
}
function Cr(e, t, n = Io ? Ut + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ct.length; n++) {
    const o = ct[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || {}.NODE_ENV !== "production" && Ai(t, o))
        continue;
      ct.splice(n, 1), n--, o();
    }
  }
}
function fc(e) {
  if (uo.length) {
    const t = [...new Set(uo)].sort(
      (n, o) => Bo(n) - Bo(o)
    );
    if (uo.length = 0, Jt) {
      Jt.push(...t);
      return;
    }
    for (Jt = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fn = 0; fn < Jt.length; fn++)
      ({}).NODE_ENV !== "production" && Ai(e, Jt[fn]) || Jt[fn]();
    Jt = null, fn = 0;
  }
}
const Bo = (e) => e.id == null ? 1 / 0 : e.id, Hg = (e, t) => {
  const n = Bo(e) - Bo(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function pc(e) {
  Va = !1, Io = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ct.sort(Hg);
  const t = {}.NODE_ENV !== "production" ? (n) => Ai(e, n) : Xe;
  try {
    for (Ut = 0; Ut < ct.length; Ut++) {
      const n = ct[Ut];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        Qt(n, null, 14);
      }
    }
  } finally {
    Ut = 0, ct.length = 0, fc(e), Io = !1, Ei = null, (ct.length || uo.length) && pc(e);
  }
}
function Ai(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Vg) {
      const o = t.ownerInstance, s = o && Ii(o.type);
      return Ko(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Wn = !1;
const io = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (Ws().__VUE_HMR_RUNTIME__ = {
  createRecord: ha(mc),
  rerender: ha(Wg),
  reload: ha(Kg)
});
const Jn = /* @__PURE__ */ new Map();
function qg(e) {
  const t = e.type.__hmrId;
  let n = Jn.get(t);
  n || (mc(t, e.type), n = Jn.get(t)), n.instances.add(e);
}
function Gg(e) {
  Jn.get(e.type.__hmrId).instances.delete(e);
}
function mc(e, t) {
  return Jn.has(e) ? !1 : (Jn.set(e, {
    initialDef: Lo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Lo(e) {
  return Jc(e) ? e.__vccOpts : e;
}
function Wg(e, t) {
  const n = Jn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Lo(o.type).render = t), o.renderCache = [], Wn = !0, o.effect.dirty = !0, o.update(), Wn = !1;
  }));
}
function Kg(e, t) {
  const n = Jn.get(e);
  if (!n)
    return;
  t = Lo(t), xr(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const a = Lo(s.type);
    io.has(a) || (a !== n.initialDef && xr(a, t), io.add(a)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (io.add(a), s.ceReload(t.styles), io.delete(a)) : s.parent ? (s.parent.effect.dirty = !0, Js(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  gc(() => {
    for (const s of o)
      io.delete(
        Lo(s.type)
      );
  });
}
function xr(e, t) {
  ze(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ha(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Rt, To = [], za = !1;
function Xo(e, ...t) {
  Rt ? Rt.emit(e, ...t) : za || To.push({ event: e, args: t });
}
function hc(e, t) {
  var n, o;
  Rt = e, Rt ? (Rt.enabled = !0, To.forEach(({ event: s, args: a }) => Rt.emit(s, ...a)), To = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    hc(a, t);
  }), setTimeout(() => {
    Rt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, za = !0, To = []);
  }, 3e3)) : (za = !0, To = []);
}
function Xg(e, t) {
  Xo("app:init", e, t, {
    Fragment: Ae,
    Text: Jo,
    Comment: nt,
    Static: Ds
  });
}
function Yg(e) {
  Xo("app:unmount", e);
}
const Jg = /* @__PURE__ */ ki(
  "component:added"
  /* COMPONENT_ADDED */
), _c = /* @__PURE__ */ ki(
  "component:updated"
  /* COMPONENT_UPDATED */
), Zg = /* @__PURE__ */ ki(
  "component:removed"
  /* COMPONENT_REMOVED */
), Qg = (e) => {
  Rt && typeof Rt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Rt.cleanupBuffer(e) && Zg(e);
};
function ki(e) {
  return (t) => {
    Xo(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ef = /* @__PURE__ */ vc(
  "perf:start"
  /* PERFORMANCE_START */
), tf = /* @__PURE__ */ vc(
  "perf:end"
  /* PERFORMANCE_END */
);
function vc(e) {
  return (t, n, o) => {
    Xo(e, t.appContext.app, t.uid, t, n, o);
  };
}
function nf(e, t, n) {
  Xo(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function of(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || Be;
  if ({}.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [u]
    } = e;
    if (c)
      if (!(t in c))
        (!u || !(gn(t) in u)) && z(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gn(t)}" prop.`
        );
      else {
        const g = c[t];
        ge(g) && (g(...n) || z(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const a = t.startsWith("update:"), i = a && t.slice(7);
  if (i && i in o) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`, { number: u, trim: g } = o[c] || Be;
    g && (s = n.map((f) => Ve(f) ? f.trim() : f)), u && (s = n.map(Kd));
  }
  if ({}.NODE_ENV !== "production" && nf(e, t, s), {}.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && o[gn(c)] && z(
      `Event "${c}" is emitted in component ${aa(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${en(
        t
      )}" instead of "${t}".`
    );
  }
  let r, l = o[r = gn(t)] || // also try camelCase event handler (#2249)
  o[r = gn(zt(t))];
  !l && a && (l = o[r = gn(en(t))]), l && kt(
    l,
    e,
    6,
    s
  );
  const d = o[r + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, kt(
      d,
      e,
      6,
      s
    );
  }
}
function yc(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const a = e.emits;
  let i = {}, r = !1;
  if (!ge(e)) {
    const l = (d) => {
      const c = yc(d, t, !0);
      c && (r = !0, ze(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !r ? (Fe(e) && o.set(e, null), null) : (le(a) ? a.forEach((l) => i[l] = null) : ze(i, a), Fe(e) && o.set(e, i), i);
}
function Zs(e, t) {
  return !e || !Go(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, en(t)) || ke(e, t));
}
let We = null, bc = null;
function Os(e) {
  const t = We;
  return We = e, bc = e && e.type.__scopeId || null, t;
}
function y(e, t = We, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && $r(-1);
    const a = Os(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Os(a), o._d && $r(1);
    }
    return {}.NODE_ENV !== "production" && _c(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let ja = !1;
function Is() {
  ja = !0;
}
function _a(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    props: a,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: d,
    render: c,
    renderCache: u,
    data: g,
    setupState: f,
    ctx: m,
    inheritAttrs: C
  } = e;
  let x, E;
  const L = Os(e);
  ({}).NODE_ENV !== "production" && (ja = !1);
  try {
    if (n.shapeFlag & 4) {
      const J = s || o, se = {}.NODE_ENV !== "production" && f.__isScriptSetup ? new Proxy(J, {
        get(M, O, fe) {
          return z(
            `Property '${String(
              O
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, O, fe);
        }
      }) : J;
      x = Lt(
        c.call(
          se,
          J,
          u,
          a,
          f,
          g,
          m
        )
      ), E = l;
    } else {
      const J = t;
      ({}).NODE_ENV !== "production" && l === a && Is(), x = Lt(
        J.length > 1 ? J(
          a,
          {}.NODE_ENV !== "production" ? {
            get attrs() {
              return Is(), l;
            },
            slots: r,
            emit: d
          } : { attrs: l, slots: r, emit: d }
        ) : J(
          a,
          null
          /* we know it doesn't need it */
        )
      ), E = t.props ? l : sf(l);
    }
  } catch (J) {
    No.length = 0, Ko(J, e, 1), x = p(nt);
  }
  let I = x, V;
  if ({}.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([I, V] = Sc(x)), E && C !== !1) {
    const J = Object.keys(E), { shapeFlag: se } = I;
    if (J.length) {
      if (se & 7)
        i && J.some(Ps) && (E = af(
          E,
          i
        )), I = jt(I, E);
      else if ({}.NODE_ENV !== "production" && !ja && I.type !== nt) {
        const M = Object.keys(l), O = [], fe = [];
        for (let Te = 0, De = M.length; Te < De; Te++) {
          const Z = M[Te];
          Go(Z) ? Ps(Z) || O.push(Z[2].toLowerCase() + Z.slice(3)) : fe.push(Z);
        }
        fe.length && z(
          `Extraneous non-props attributes (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), O.length && z(
          `Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !Er(I) && z(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), I = jt(I), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !Er(I) && z(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), I.transition = n.transition), {}.NODE_ENV !== "production" && V ? V(I) : x = I, Os(L), x;
}
const Sc = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Ti(t, !1);
  if (o) {
    if ({}.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Sc(o);
  } else
    return [e, void 0];
  const s = t.indexOf(o), a = n ? n.indexOf(o) : -1, i = (r) => {
    t[s] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
  };
  return [Lt(o), i];
};
function Ti(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (go(s)) {
      if (s.type !== nt || s.children === "v-if") {
        if (n)
          return;
        if (n = s, {}.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ti(n.children);
      }
    } else
      return;
  }
  return n;
}
const sf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Go(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, af = (e, t) => {
  const n = {};
  for (const o in e)
    (!Ps(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Er = (e) => e.shapeFlag & 7 || e.type === nt;
function rf(e, t, n) {
  const { props: o, children: s, component: a } = e, { props: i, children: r, patchFlag: l } = t, d = a.emitsOptions;
  if ({}.NODE_ENV !== "production" && (s || r) && Wn || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? Ar(o, i, d) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const g = c[u];
        if (i[g] !== o[g] && !Zs(d, g))
          return !0;
      }
    }
  } else
    return (s || r) && (!r || !r.$stable) ? !0 : o === i ? !1 : o ? i ? Ar(o, i, d) : !0 : !!i;
  return !1;
}
function Ar(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (t[a] !== e[a] && !Zs(n, a))
      return !0;
  }
  return !1;
}
function lf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Bs = "components", cf = "directives";
function v(e, t) {
  return Di(Bs, e, !0, t) || e;
}
const wc = Symbol.for("v-ndc");
function vo(e) {
  return Ve(e) ? Di(Bs, e, !1) || e : e || wc;
}
function Ee(e) {
  return Di(cf, e);
}
function Di(e, t, n = !0, o = !1) {
  const s = We || Qe;
  if (s) {
    const a = s.type;
    if (e === Bs) {
      const r = Ii(
        a,
        !1
      );
      if (r && (r === t || r === zt(t) || r === Yn(zt(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      kr(s[e] || a[e], t) || // global registration
      kr(s.appContext[e], t)
    );
    if (!i && o)
      return a;
    if ({}.NODE_ENV !== "production" && n && !i) {
      const r = e === Bs ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      z(`Failed to resolve ${e.slice(0, -1)}: ${t}${r}`);
    }
    return i;
  } else
    ({}).NODE_ENV !== "production" && z(
      `resolve${Yn(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function kr(e, t) {
  return e && (e[t] || e[zt(t)] || e[Yn(zt(t))]);
}
const uf = (e) => e.__isSuspense;
function df(e, t) {
  t && t.pendingBranch ? le(e) ? t.effects.push(...e) : t.effects.push(e) : gc(e);
}
const gf = Symbol.for("v-scx"), ff = () => {
  {
    const e = Ke(gf);
    return e || {}.NODE_ENV !== "production" && z(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Cc(e, t) {
  return Li(e, null, t);
}
const ys = {};
function He(e, t, n) {
  return {}.NODE_ENV !== "production" && !ge(t) && z(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Li(e, t, n);
}
function Li(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: a,
  onTrack: i,
  onTrigger: r
} = Be) {
  if (t && a) {
    const M = t;
    t = (...O) => {
      M(...O), se();
    };
  }
  ({}).NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && z(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), {}.NODE_ENV !== "production" && !t && (n !== void 0 && z(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && z(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && z(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (M) => {
    z(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = Qe, c = (M) => o === !0 ? M : (
    // for deep: false, only traverse root-level properties
    Vn(M, o === !1 ? 1 : void 0)
  );
  let u, g = !1, f = !1;
  if (st(e) ? (u = () => e.value, g = Ms(e)) : qn(e) ? (u = () => c(e), g = !0) : le(e) ? (f = !0, g = e.some((M) => qn(M) || Ms(M)), u = () => e.map((M) => {
    if (st(M))
      return M.value;
    if (qn(M))
      return c(M);
    if (ge(M))
      return Qt(M, d, 2);
    ({}).NODE_ENV !== "production" && l(M);
  })) : ge(e) ? t ? u = () => Qt(e, d, 2) : u = () => (m && m(), kt(
    e,
    d,
    3,
    [C]
  )) : (u = Xe, {}.NODE_ENV !== "production" && l(e)), t && o) {
    const M = u;
    u = () => Vn(M());
  }
  let m, C = (M) => {
    m = V.onStop = () => {
      Qt(M, d, 4), m = V.onStop = void 0;
    };
  }, x;
  if (oa)
    if (C = Xe, t ? n && kt(t, d, 3, [
      u(),
      f ? [] : void 0,
      C
    ]) : u(), s === "sync") {
      const M = ff();
      x = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return Xe;
  let E = f ? new Array(e.length).fill(ys) : ys;
  const L = () => {
    if (!(!V.active || !V.dirty))
      if (t) {
        const M = V.run();
        (o || g || (f ? M.some((O, fe) => xn(O, E[fe])) : xn(M, E))) && (m && m(), kt(t, d, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          E === ys ? void 0 : f && E[0] === ys ? [] : E,
          C
        ]), E = M);
      } else
        V.run();
  };
  L.allowRecurse = !!t;
  let I;
  s === "sync" ? I = L : s === "post" ? I = () => ht(L, d && d.suspense) : (L.pre = !0, d && (L.id = d.uid), I = () => Js(L));
  const V = new yi(u, Xe, I), J = dg(), se = () => {
    V.stop(), J && pi(J.effects, V);
  };
  return {}.NODE_ENV !== "production" && (V.onTrack = i, V.onTrigger = r), t ? n ? L() : E = V.run() : s === "post" ? ht(
    V.run.bind(V),
    d && d.suspense
  ) : V.run(), x && x.push(se), se;
}
function pf(e, t, n) {
  const o = this.proxy, s = Ve(e) ? e.includes(".") ? xc(o, e) : () => o[e] : e.bind(o, o);
  let a;
  ge(t) ? a = t : (a = t.handler, n = t);
  const i = Zo(this), r = Li(s, a.bind(o), n);
  return i(), r;
}
function xc(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function Vn(e, t, n = 0, o) {
  if (!Fe(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), st(e))
    Vn(e.value, t, n, o);
  else if (le(e))
    for (let s = 0; s < e.length; s++)
      Vn(e[s], t, n, o);
  else if (Ol(e) || zn(e))
    e.forEach((s) => {
      Vn(s, t, n, o);
    });
  else if (Bl(e))
    for (const s in e)
      Vn(e[s], t, n, o);
  return e;
}
function Ec(e) {
  qd(e) && z("Do not use built-in directive ids as custom directive id: " + e);
}
function H(e, t) {
  if (We === null)
    return {}.NODE_ENV !== "production" && z("withDirectives can only be used inside render functions."), e;
  const n = sa(We) || We.proxy, o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [a, i, r, l = Be] = t[s];
    a && (ge(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Vn(i), o.push({
      dir: a,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: r,
      modifiers: l
    }));
  }
  return e;
}
function On(e, t, n, o) {
  const s = e.dirs, a = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    a && (r.oldValue = a[i].value);
    let l = r.dir[o];
    l && (Tn(), kt(l, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Dn());
  }
}
const pn = Symbol("_leaveCb"), bs = Symbol("_enterCb");
function mf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return pt(() => {
    e.isMounted = !0;
  }), Pc(() => {
    e.isUnmounting = !0;
  }), e;
}
const Et = [Function, Array], Ac = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Et,
  onEnter: Et,
  onAfterEnter: Et,
  onEnterCancelled: Et,
  // leave
  onBeforeLeave: Et,
  onLeave: Et,
  onAfterLeave: Et,
  onLeaveCancelled: Et,
  // appear
  onBeforeAppear: Et,
  onAppear: Et,
  onAfterAppear: Et,
  onAppearCancelled: Et
}, hf = {
  name: "BaseTransition",
  props: Ac,
  setup(e, { slots: t }) {
    const n = Oi(), o = mf();
    let s;
    return () => {
      const a = t.default && Tc(t.default(), !0);
      if (!a || !a.length)
        return;
      let i = a[0];
      if (a.length > 1) {
        let C = !1;
        for (const x of a)
          if (x.type !== nt) {
            if ({}.NODE_ENV !== "production" && C) {
              z(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (i = x, C = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const r = ye(e), { mode: l } = r;
      if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && z(`invalid <transition> mode: ${l}`), o.isLeaving)
        return va(i);
      const d = Tr(i);
      if (!d)
        return va(i);
      const c = Ha(
        d,
        r,
        o,
        n
      );
      qa(d, c);
      const u = n.subTree, g = u && Tr(u);
      let f = !1;
      const { getTransitionKey: m } = d.type;
      if (m) {
        const C = m();
        s === void 0 ? s = C : C !== s && (s = C, f = !0);
      }
      if (g && g.type !== nt && (!Un(d, g) || f)) {
        const C = Ha(
          g,
          r,
          o,
          n
        );
        if (qa(g, C), l === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, va(i);
        l === "in-out" && d.type !== nt && (C.delayLeave = (x, E, L) => {
          const I = kc(
            o,
            g
          );
          I[String(g.key)] = g, x[pn] = () => {
            E(), x[pn] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = L;
        });
      }
      return i;
    };
  }
}, _f = hf;
function kc(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Ha(e, t, n, o) {
  const {
    appear: s,
    mode: a,
    persisted: i = !1,
    onBeforeEnter: r,
    onEnter: l,
    onAfterEnter: d,
    onEnterCancelled: c,
    onBeforeLeave: u,
    onLeave: g,
    onAfterLeave: f,
    onLeaveCancelled: m,
    onBeforeAppear: C,
    onAppear: x,
    onAfterAppear: E,
    onAppearCancelled: L
  } = t, I = String(e.key), V = kc(n, e), J = (O, fe) => {
    O && kt(
      O,
      o,
      9,
      fe
    );
  }, se = (O, fe) => {
    const Te = fe[1];
    J(O, fe), le(O) ? O.every((De) => De.length <= 1) && Te() : O.length <= 1 && Te();
  }, M = {
    mode: a,
    persisted: i,
    beforeEnter(O) {
      let fe = r;
      if (!n.isMounted)
        if (s)
          fe = C || r;
        else
          return;
      O[pn] && O[pn](
        !0
        /* cancelled */
      );
      const Te = V[I];
      Te && Un(e, Te) && Te.el[pn] && Te.el[pn](), J(fe, [O]);
    },
    enter(O) {
      let fe = l, Te = d, De = c;
      if (!n.isMounted)
        if (s)
          fe = x || l, Te = E || d, De = L || c;
        else
          return;
      let Z = !1;
      const Le = O[bs] = (Ye) => {
        Z || (Z = !0, Ye ? J(De, [O]) : J(Te, [O]), M.delayedLeave && M.delayedLeave(), O[bs] = void 0);
      };
      fe ? se(fe, [O, Le]) : Le();
    },
    leave(O, fe) {
      const Te = String(e.key);
      if (O[bs] && O[bs](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return fe();
      J(u, [O]);
      let De = !1;
      const Z = O[pn] = (Le) => {
        De || (De = !0, fe(), Le ? J(m, [O]) : J(f, [O]), O[pn] = void 0, V[Te] === e && delete V[Te]);
      };
      V[Te] = e, g ? se(g, [O, Z]) : Z();
    },
    clone(O) {
      return Ha(O, t, n, o);
    }
  };
  return M;
}
function va(e) {
  if (Yo(e))
    return e = jt(e), e.children = null, e;
}
function Tr(e) {
  return Yo(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    {}.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function qa(e, t) {
  e.shapeFlag & 6 && e.component ? qa(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Tc(e, t = !1, n) {
  let o = [], s = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === Ae ? (i.patchFlag & 128 && s++, o = o.concat(
      Tc(i.children, t, r)
    )) : (t || i.type !== nt) && o.push(r != null ? jt(i, { key: r }) : i);
  }
  if (s > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
function Dc(e, t) {
  return ge(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ze({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Po = (e) => !!e.type.__asyncLoader, Yo = (e) => e.type.__isKeepAlive;
function vf(e, t) {
  Lc(e, "a", t);
}
function yf(e, t) {
  Lc(e, "da", t);
}
function Lc(e, t, n = Qe) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Qs(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Yo(s.parent.vnode) && bf(o, t, n, s), s = s.parent;
  }
}
function bf(e, t, n, o) {
  const s = Qs(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Nc(() => {
    pi(o[t], s);
  }, n);
}
function Qs(e, t, n = Qe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Tn();
      const r = Zo(n), l = kt(t, n, e, i);
      return r(), Dn(), l;
    });
    return o ? s.unshift(a) : s.push(a), a;
  } else if ({}.NODE_ENV !== "production") {
    const s = gn(xi[e].replace(/ hook$/, ""));
    z(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const nn = (e) => (t, n = Qe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!oa || e === "sp") && Qs(e, (...o) => t(...o), n)
), Sf = nn("bm"), pt = nn("m"), wf = nn("bu"), Cf = nn("u"), Pc = nn("bum"), Nc = nn("um"), xf = nn("sp"), Ef = nn(
  "rtg"
), Af = nn(
  "rtc"
);
function kf(e, t = Qe) {
  Qs("ec", e, t);
}
function et(e, t, n, o) {
  let s;
  const a = n && n[o];
  if (le(e) || Ve(e)) {
    s = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++)
      s[i] = t(e[i], i, void 0, a && a[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && z(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, a && a[i]);
  } else if (Fe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, r) => t(i, r, void 0, a && a[r])
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let r = 0, l = i.length; r < l; r++) {
        const d = i[r];
        s[r] = t(e[d], d, r, a && a[r]);
      }
    }
  else
    s = [];
  return n && (n[o] = s), s;
}
function je(e, t, n = {}, o, s) {
  if (We.isCE || We.parent && Po(We.parent) && We.parent.isCE)
    return t !== "default" && (n.name = t), p("slot", n, o && o());
  let a = e[t];
  ({}).NODE_ENV !== "production" && a && a.length > 1 && (z(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), a = () => []), a && a._c && (a._d = !1), _();
  const i = a && Fc(a(n)), r = N(
    Ae,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !s && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]), a && a._c && (a._d = !0), r;
}
function Fc(e) {
  return e.some((t) => go(t) ? !(t.type === nt || t.type === Ae && !Fc(t.children)) : !0) ? e : null;
}
const Ga = (e) => e ? Kc(e) ? sa(e) || e.proxy : Ga(e.parent) : null, Kn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ze(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? lo(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? lo(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? lo(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? lo(e.refs) : e.refs,
    $parent: (e) => Ga(e.parent),
    $root: (e) => Ga(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ni(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Js(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _o.bind(e.proxy)),
    $watch: (e) => pf.bind(e)
  })
), Pi = (e) => e === "_" || e === "$", ya = (e, t) => e !== Be && !e.__isScriptSetup && ke(e, t), Mc = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: a, accessCache: i, type: r, appContext: l } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const f = i[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (ya(o, t))
          return i[t] = 1, o[t];
        if (s !== Be && ke(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && ke(d, t)
        )
          return i[t] = 3, a[t];
        if (n !== Be && ke(n, t))
          return i[t] = 4, n[t];
        Wa && (i[t] = 0);
      }
    }
    const c = Kn[t];
    let u, g;
    if (c)
      return t === "$attrs" ? (at(e, "get", t), {}.NODE_ENV !== "production" && Is()) : {}.NODE_ENV !== "production" && t === "$slots" && at(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Be && ke(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, ke(g, t)
    )
      return g[t];
    ({}).NODE_ENV !== "production" && We && (!Ve(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== Be && Pi(t[0]) && ke(s, t) ? z(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === We && z(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: a } = e;
    return ya(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && ke(s, t) ? (z(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Be && ke(o, t) ? (o[t] = n, !0) : ke(e.props, t) ? ({}.NODE_ENV !== "production" && z(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && z(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(a, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: a }
  }, i) {
    let r;
    return !!n[i] || e !== Be && ke(e, i) || ya(t, i) || (r = a[0]) && ke(r, i) || ke(o, i) || ke(Kn, i) || ke(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (Mc.ownKeys = (e) => (z(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Tf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Kn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Kn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Xe
    });
  }), t;
}
function Df(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Xe
    });
  });
}
function Lf(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ye(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Pi(o[0])) {
        z(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Xe
      });
    }
  });
}
function Dr(e) {
  return le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Pf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? z(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Wa = !0;
function Nf(e) {
  const t = Ni(e), n = e.proxy, o = e.ctx;
  Wa = !1, t.beforeCreate && Lr(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: a,
    methods: i,
    watch: r,
    provide: l,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: g,
    beforeUpdate: f,
    updated: m,
    activated: C,
    deactivated: x,
    beforeDestroy: E,
    beforeUnmount: L,
    destroyed: I,
    unmounted: V,
    render: J,
    renderTracked: se,
    renderTriggered: M,
    errorCaptured: O,
    serverPrefetch: fe,
    // public API
    expose: Te,
    inheritAttrs: De,
    // assets
    components: Z,
    directives: Le,
    filters: Ye
  } = t, Je = {}.NODE_ENV !== "production" ? Pf() : null;
  if ({}.NODE_ENV !== "production") {
    const [me] = e.propsOptions;
    if (me)
      for (const re in me)
        Je("Props", re);
  }
  if (d && Ff(d, o, Je), i)
    for (const me in i) {
      const re = i[me];
      ge(re) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, me, {
        value: re.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[me] = re.bind(n), {}.NODE_ENV !== "production" && Je("Methods", me)) : {}.NODE_ENV !== "production" && z(
        `Method "${me}" has type "${typeof re}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    ({}).NODE_ENV !== "production" && !ge(s) && z(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const me = s.call(n, n);
    if ({}.NODE_ENV !== "production" && mi(me) && z(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Fe(me))
      ({}).NODE_ENV !== "production" && z("data() should return an object.");
    else if (e.data = ho(me), {}.NODE_ENV !== "production")
      for (const re in me)
        Je("Data", re), Pi(re[0]) || Object.defineProperty(o, re, {
          configurable: !0,
          enumerable: !0,
          get: () => me[re],
          set: Xe
        });
  }
  if (Wa = !0, a)
    for (const me in a) {
      const re = a[me], it = ge(re) ? re.bind(n, n) : ge(re.get) ? re.get.bind(n, n) : Xe;
      ({}).NODE_ENV !== "production" && it === Xe && z(`Computed property "${me}" has no getter.`);
      const Ct = !ge(re) && ge(re.set) ? re.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        z(
          `Write operation failed: computed property "${me}" is readonly.`
        );
      } : Xe, vt = b({
        get: it,
        set: Ct
      });
      Object.defineProperty(o, me, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (dt) => vt.value = dt
      }), {}.NODE_ENV !== "production" && Je("Computed", me);
    }
  if (r)
    for (const me in r)
      Oc(r[me], o, n, me);
  if (l) {
    const me = ge(l) ? l.call(n) : l;
    Reflect.ownKeys(me).forEach((re) => {
      ks(re, me[re]);
    });
  }
  c && Lr(c, e, "c");
  function Ue(me, re) {
    le(re) ? re.forEach((it) => me(it.bind(n))) : re && me(re.bind(n));
  }
  if (Ue(Sf, u), Ue(pt, g), Ue(wf, f), Ue(Cf, m), Ue(vf, C), Ue(yf, x), Ue(kf, O), Ue(Af, se), Ue(Ef, M), Ue(Pc, L), Ue(Nc, V), Ue(xf, fe), le(Te))
    if (Te.length) {
      const me = e.exposed || (e.exposed = {});
      Te.forEach((re) => {
        Object.defineProperty(me, re, {
          get: () => n[re],
          set: (it) => n[re] = it
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === Xe && (e.render = J), De != null && (e.inheritAttrs = De), Z && (e.components = Z), Le && (e.directives = Le);
}
function Ff(e, t, n = Xe) {
  le(e) && (e = Ka(e));
  for (const o in e) {
    const s = e[o];
    let a;
    Fe(s) ? "default" in s ? a = Ke(
      s.from || o,
      s.default,
      !0
    ) : a = Ke(s.from || o) : a = Ke(s), st(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[o] = a, {}.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Lr(e, t, n) {
  kt(
    le(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Oc(e, t, n, o) {
  const s = o.includes(".") ? xc(n, o) : () => n[o];
  if (Ve(e)) {
    const a = t[e];
    ge(a) ? He(s, a) : {}.NODE_ENV !== "production" && z(`Invalid watch handler specified by key "${e}"`, a);
  } else if (ge(e))
    He(s, e.bind(n));
  else if (Fe(e))
    if (le(e))
      e.forEach((a) => Oc(a, t, n, o));
    else {
      const a = ge(e.handler) ? e.handler.bind(n) : t[e.handler];
      ge(a) ? He(s, a, e) : {}.NODE_ENV !== "production" && z(`Invalid watch handler specified by key "${e.handler}"`, a);
    }
  else
    ({}).NODE_ENV !== "production" && z(`Invalid watch option: "${o}"`, e);
}
function Ni(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = e.appContext, r = a.get(t);
  let l;
  return r ? l = r : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach(
    (d) => $s(l, d, i, !0)
  ), $s(l, t, i)), Fe(t) && a.set(t, l), l;
}
function $s(e, t, n, o = !1) {
  const { mixins: s, extends: a } = t;
  a && $s(e, a, n, !0), s && s.forEach(
    (i) => $s(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      ({}).NODE_ENV !== "production" && z(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const r = Mf[i] || n && n[i];
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const Mf = {
  data: Pr,
  props: Nr,
  emits: Nr,
  // objects
  methods: Do,
  computed: Do,
  // lifecycle
  beforeCreate: ft,
  created: ft,
  beforeMount: ft,
  mounted: ft,
  beforeUpdate: ft,
  updated: ft,
  beforeDestroy: ft,
  beforeUnmount: ft,
  destroyed: ft,
  unmounted: ft,
  activated: ft,
  deactivated: ft,
  errorCaptured: ft,
  serverPrefetch: ft,
  // assets
  components: Do,
  directives: Do,
  // watch
  watch: If,
  // provide / inject
  provide: Pr,
  inject: Of
};
function Pr(e, t) {
  return t ? e ? function() {
    return ze(
      ge(e) ? e.call(this, this) : e,
      ge(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Of(e, t) {
  return Do(Ka(e), Ka(t));
}
function Ka(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Do(e, t) {
  return e ? ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Nr(e, t) {
  return e ? le(e) && le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ze(
    /* @__PURE__ */ Object.create(null),
    Dr(e),
    Dr(t != null ? t : {})
  ) : t;
}
function If(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ze(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ft(e[o], t[o]);
  return n;
}
function Ic() {
  return {
    app: null,
    config: {
      isNativeTag: Ml,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Bf = 0;
function $f(e, t) {
  return function(o, s = null) {
    ge(o) || (o = ze({}, o)), s != null && !Fe(s) && ({}.NODE_ENV !== "production" && z("root props passed to app.mount() must be an object."), s = null);
    const a = Ic(), i = /* @__PURE__ */ new WeakSet();
    let r = !1;
    const l = a.app = {
      _uid: Bf++,
      _component: o,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: zr,
      get config() {
        return a.config;
      },
      set config(d) {
        ({}).NODE_ENV !== "production" && z(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return i.has(d) ? {}.NODE_ENV !== "production" && z("Plugin has already been applied to target app.") : d && ge(d.install) ? (i.add(d), d.install(l, ...c)) : ge(d) ? (i.add(d), d(l, ...c)) : {}.NODE_ENV !== "production" && z(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(d) {
        return a.mixins.includes(d) ? {}.NODE_ENV !== "production" && z(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : a.mixins.push(d), l;
      },
      component(d, c) {
        return {}.NODE_ENV !== "production" && Qa(d, a.config), c ? ({}.NODE_ENV !== "production" && a.components[d] && z(`Component "${d}" has already been registered in target app.`), a.components[d] = c, l) : a.components[d];
      },
      directive(d, c) {
        return {}.NODE_ENV !== "production" && Ec(d), c ? ({}.NODE_ENV !== "production" && a.directives[d] && z(`Directive "${d}" has already been registered in target app.`), a.directives[d] = c, l) : a.directives[d];
      },
      mount(d, c, u) {
        if (r)
          ({}).NODE_ENV !== "production" && z(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          ({}).NODE_ENV !== "production" && d.__vue_app__ && z(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const g = p(o, s);
          return g.appContext = a, u === !0 ? u = "svg" : u === !1 && (u = void 0), {}.NODE_ENV !== "production" && (a.reload = () => {
            e(
              jt(g),
              d,
              u
            );
          }), c && t ? t(g, d) : e(g, d, u), r = !0, l._container = d, d.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = g.component, Xg(l, zr)), sa(g.component) || g.component.proxy;
        }
      },
      unmount() {
        r ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, Yg(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && z("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return {}.NODE_ENV !== "production" && d in a.provides && z(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), a.provides[d] = c, l;
      },
      runWithContext(d) {
        Us = l;
        try {
          return d();
        } finally {
          Us = null;
        }
      }
    };
    return l;
  };
}
let Us = null;
function ks(e, t) {
  if (!Qe)
    ({}).NODE_ENV !== "production" && z("provide() can only be used inside setup().");
  else {
    let n = Qe.provides;
    const o = Qe.parent && Qe.parent.provides;
    o === n && (n = Qe.provides = Object.create(o)), n[e] = t;
  }
}
function Ke(e, t, n = !1) {
  const o = Qe || We;
  if (o || Us) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Us._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ge(t) ? t.call(o && o.proxy) : t;
    ({}).NODE_ENV !== "production" && z(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && z("inject() can only be used inside setup() or functional components.");
}
function Uf(e, t, n, o = !1) {
  const s = {}, a = {};
  Ns(a, ea, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Bc(e, t, s, a);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  ({}).NODE_ENV !== "production" && Uc(t || {}, s, e), n ? e.props = o ? s : nc(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
}
function Rf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Vf(e, t, n, o) {
  const {
    props: s,
    attrs: a,
    vnode: { patchFlag: i }
  } = e, r = ye(s), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !({}.NODE_ENV !== "production" && Rf(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let g = c[u];
        if (Zs(e.emitsOptions, g))
          continue;
        const f = t[g];
        if (l)
          if (ke(a, g))
            f !== a[g] && (a[g] = f, d = !0);
          else {
            const m = zt(g);
            s[m] = Xa(
              l,
              r,
              m,
              f,
              e,
              !1
            );
          }
        else
          f !== a[g] && (a[g] = f, d = !0);
      }
    }
  } else {
    Bc(e, t, s, a) && (d = !0);
    let c;
    for (const u in r)
      (!t || // for camelCase
      !ke(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = en(u)) === u || !ke(t, c))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[u] = Xa(
        l,
        r,
        u,
        void 0,
        e,
        !0
      )) : delete s[u]);
    if (a !== r)
      for (const u in a)
        (!t || !ke(t, u)) && (delete a[u], d = !0);
  }
  d && Vt(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Uc(t || {}, s, e);
}
function Bc(e, t, n, o) {
  const [s, a] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let l in t) {
      if (Cs(l))
        continue;
      const d = t[l];
      let c;
      s && ke(s, c = zt(l)) ? !a || !a.includes(c) ? n[c] = d : (r || (r = {}))[c] = d : Zs(e.emitsOptions, l) || (!(l in o) || d !== o[l]) && (o[l] = d, i = !0);
    }
  if (a) {
    const l = ye(n), d = r || Be;
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      n[u] = Xa(
        s,
        l,
        u,
        d[u],
        e,
        !ke(d, u)
      );
    }
  }
  return i;
}
function Xa(e, t, n, o, s, a) {
  const i = e[n];
  if (i != null) {
    const r = ke(i, "default");
    if (r && o === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ge(l)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const c = Zo(s);
          o = d[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        o = l;
    }
    i[
      0
      /* shouldCast */
    ] && (a && !r ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === en(n)) && (o = !0));
  }
  return o;
}
function $c(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const a = e.props, i = {}, r = [];
  let l = !1;
  if (!ge(e)) {
    const c = (u) => {
      l = !0;
      const [g, f] = $c(u, t, !0);
      ze(i, g), f && r.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !l)
    return Fe(e) && o.set(e, co), co;
  if (le(a))
    for (let c = 0; c < a.length; c++) {
      ({}).NODE_ENV !== "production" && !Ve(a[c]) && z("props must be strings when using array syntax.", a[c]);
      const u = zt(a[c]);
      Fr(u) && (i[u] = Be);
    }
  else if (a) {
    ({}).NODE_ENV !== "production" && !Fe(a) && z("invalid props options", a);
    for (const c in a) {
      const u = zt(c);
      if (Fr(u)) {
        const g = a[c], f = i[u] = le(g) || ge(g) ? { type: g } : ze({}, g);
        if (f) {
          const m = Or(Boolean, f.type), C = Or(String, f.type);
          f[
            0
            /* shouldCast */
          ] = m > -1, f[
            1
            /* shouldCastTrue */
          ] = C < 0 || m < C, (m > -1 || ke(f, "default")) && r.push(u);
        }
      }
    }
  }
  const d = [i, r];
  return Fe(e) && o.set(e, d), d;
}
function Fr(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && z(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ya(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Mr(e, t) {
  return Ya(e) === Ya(t);
}
function Or(e, t) {
  return le(t) ? t.findIndex((n) => Mr(n, e)) : ge(t) && Mr(t, e) ? 0 : -1;
}
function Uc(e, t, n) {
  const o = ye(t), s = n.propsOptions[0];
  for (const a in s) {
    let i = s[a];
    i != null && zf(
      a,
      o[a],
      i,
      {}.NODE_ENV !== "production" ? lo(o) : o,
      !ke(e, a) && !ke(e, en(a))
    );
  }
}
function zf(e, t, n, o, s) {
  const { type: a, required: i, validator: r, skipCheck: l } = n;
  if (i && s) {
    z('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (a != null && a !== !0 && !l) {
      let d = !1;
      const c = le(a) ? a : [a], u = [];
      for (let g = 0; g < c.length && !d; g++) {
        const { valid: f, expectedType: m } = Hf(t, c[g]);
        u.push(m || ""), d = f;
      }
      if (!d) {
        z(qf(e, t, u));
        return;
      }
    }
    r && !r(t, o) && z('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const jf = /* @__PURE__ */ tn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Hf(e, t) {
  let n;
  const o = Ya(t);
  if (jf(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Fe(e) : o === "Array" ? n = le(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function qf(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Yn).join(" | ")}`;
  const s = n[0], a = hi(t), i = Ir(t, s), r = Ir(t, a);
  return n.length === 1 && Br(s) && !Gf(s, a) && (o += ` with value ${i}`), o += `, got ${a} `, Br(a) && (o += `with value ${r}.`), o;
}
function Ir(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Br(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Gf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Rc = (e) => e[0] === "_" || e === "$stable", Fi = (e) => le(e) ? e.map(Lt) : [Lt(e)], Wf = (e, t, n) => {
  if (t._n)
    return t;
  const o = y((...s) => ({}.NODE_ENV !== "production" && Qe && (!n || n.root === Qe.root) && z(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Fi(t(...s))), n);
  return o._c = !1, o;
}, Vc = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Rc(s))
      continue;
    const a = e[s];
    if (ge(a))
      t[s] = Wf(s, a, o);
    else if (a != null) {
      ({}).NODE_ENV !== "production" && z(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Fi(a);
      t[s] = () => i;
    }
  }
}, zc = (e, t) => {
  ({}).NODE_ENV !== "production" && !Yo(e.vnode) && z(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Fi(t);
  e.slots.default = () => n;
}, Kf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = ye(t), Ns(t, "_", n)) : Vc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && zc(e, t);
  Ns(e.slots, ea, 1);
}, Xf = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let a = !0, i = Be;
  if (o.shapeFlag & 32) {
    const r = t._;
    r ? {}.NODE_ENV !== "production" && Wn ? (ze(s, t), Vt(e, "set", "$slots")) : n && r === 1 ? a = !1 : (ze(s, t), !n && r === 1 && delete s._) : (a = !t.$stable, Vc(t, s)), i = t;
  } else
    t && (zc(e, t), i = { default: 1 });
  if (a)
    for (const r in s)
      !Rc(r) && i[r] == null && delete s[r];
};
function Ja(e, t, n, o, s = !1) {
  if (le(e)) {
    e.forEach(
      (g, f) => Ja(
        g,
        t && (le(t) ? t[f] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Po(o) && !s)
    return;
  const a = o.shapeFlag & 4 ? sa(o.component) || o.component.proxy : o.el, i = s ? null : a, { i: r, r: l } = e;
  if ({}.NODE_ENV !== "production" && !r) {
    z(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, c = r.refs === Be ? r.refs = {} : r.refs, u = r.setupState;
  if (d != null && d !== l && (Ve(d) ? (c[d] = null, ke(u, d) && (u[d] = null)) : st(d) && (d.value = null)), ge(l))
    Qt(l, r, 12, [i, c]);
  else {
    const g = Ve(l), f = st(l), m = e.f;
    if (g || f) {
      const C = () => {
        if (m) {
          const x = g ? ke(u, l) ? u[l] : c[l] : l.value;
          s ? le(x) && pi(x, a) : le(x) ? x.includes(a) || x.push(a) : g ? (c[l] = [a], ke(u, l) && (u[l] = c[l])) : (l.value = [a], e.k && (c[e.k] = l.value));
        } else
          g ? (c[l] = i, ke(u, l) && (u[l] = i)) : f ? (l.value = i, e.k && (c[e.k] = i)) : {}.NODE_ENV !== "production" && z("Invalid template ref type:", l, `(${typeof l})`);
      };
      s || m ? C() : (C.id = -1, ht(C, n));
    } else
      ({}).NODE_ENV !== "production" && z("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let Co, yn;
function Xt(e, t) {
  e.appContext.config.performance && Rs() && yn.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && ef(e, t, Rs() ? yn.now() : Date.now());
}
function Yt(e, t) {
  if (e.appContext.config.performance && Rs()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    yn.mark(o), yn.measure(
      `<${aa(e, e.type)}> ${t}`,
      n,
      o
    ), yn.clearMarks(n), yn.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && tf(e, t, Rs() ? yn.now() : Date.now());
}
function Rs() {
  return Co !== void 0 || (typeof window != "undefined" && window.performance ? (Co = !0, yn = window.performance) : Co = !1), Co;
}
function Yf() {
  const e = [];
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && ({}.NODE_ENV !== "production" && e.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), Ws().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), {}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ht = df;
function Jf(e) {
  return Zf(e);
}
function Zf(e, t) {
  Yf();
  const n = Ws();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && hc(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: a,
    createElement: i,
    createText: r,
    createComment: l,
    setText: d,
    setElementText: c,
    parentNode: u,
    nextSibling: g,
    setScopeId: f = Xe,
    insertStaticContent: m
  } = e, C = (h, S, A, T = null, F = null, R = null, G = void 0, U = null, j = {}.NODE_ENV !== "production" && Wn ? !1 : !!S.dynamicChildren) => {
    if (h === S)
      return;
    h && !Un(h, S) && (T = X(h), gt(h, F, R, !0), h = null), S.patchFlag === -2 && (j = !1, S.dynamicChildren = null);
    const { type: B, ref: Y, shapeFlag: ce } = S;
    switch (B) {
      case Jo:
        x(h, S, A, T);
        break;
      case nt:
        E(h, S, A, T);
        break;
      case Ds:
        h == null ? L(S, A, T, G) : {}.NODE_ENV !== "production" && I(h, S, A, G);
        break;
      case Ae:
        Le(
          h,
          S,
          A,
          T,
          F,
          R,
          G,
          U,
          j
        );
        break;
      default:
        ce & 1 ? se(
          h,
          S,
          A,
          T,
          F,
          R,
          G,
          U,
          j
        ) : ce & 6 ? Ye(
          h,
          S,
          A,
          T,
          F,
          R,
          G,
          U,
          j
        ) : ce & 64 || ce & 128 ? B.process(
          h,
          S,
          A,
          T,
          F,
          R,
          G,
          U,
          j,
          we
        ) : {}.NODE_ENV !== "production" && z("Invalid VNode type:", B, `(${typeof B})`);
    }
    Y != null && F && Ja(Y, h && h.ref, R, S || h, !S);
  }, x = (h, S, A, T) => {
    if (h == null)
      o(
        S.el = r(S.children),
        A,
        T
      );
    else {
      const F = S.el = h.el;
      S.children !== h.children && d(F, S.children);
    }
  }, E = (h, S, A, T) => {
    h == null ? o(
      S.el = l(S.children || ""),
      A,
      T
    ) : S.el = h.el;
  }, L = (h, S, A, T) => {
    [h.el, h.anchor] = m(
      h.children,
      S,
      A,
      T,
      h.el,
      h.anchor
    );
  }, I = (h, S, A, T) => {
    if (S.children !== h.children) {
      const F = g(h.anchor);
      J(h), [S.el, S.anchor] = m(
        S.children,
        A,
        F,
        T
      );
    } else
      S.el = h.el, S.anchor = h.anchor;
  }, V = ({ el: h, anchor: S }, A, T) => {
    let F;
    for (; h && h !== S; )
      F = g(h), o(h, A, T), h = F;
    o(S, A, T);
  }, J = ({ el: h, anchor: S }) => {
    let A;
    for (; h && h !== S; )
      A = g(h), s(h), h = A;
    s(S);
  }, se = (h, S, A, T, F, R, G, U, j) => {
    S.type === "svg" ? G = "svg" : S.type === "math" && (G = "mathml"), h == null ? M(
      S,
      A,
      T,
      F,
      R,
      G,
      U,
      j
    ) : Te(
      h,
      S,
      F,
      R,
      G,
      U,
      j
    );
  }, M = (h, S, A, T, F, R, G, U) => {
    let j, B;
    const { props: Y, shapeFlag: ce, transition: oe, dirs: ue } = h;
    if (j = h.el = i(
      h.type,
      R,
      Y && Y.is,
      Y
    ), ce & 8 ? c(j, h.children) : ce & 16 && fe(
      h.children,
      j,
      null,
      T,
      F,
      ba(h, R),
      G,
      U
    ), ue && On(h, null, T, "created"), O(j, h, h.scopeId, G, T), Y) {
      for (const P in Y)
        P !== "value" && !Cs(P) && a(
          j,
          P,
          null,
          Y[P],
          R,
          h.children,
          T,
          F,
          k
        );
      "value" in Y && a(j, "value", null, Y.value, R), (B = Y.onVnodeBeforeMount) && $t(B, T, h);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(j, "__vnode", {
      value: h,
      enumerable: !1
    }), Object.defineProperty(j, "__vueParentComponent", {
      value: T,
      enumerable: !1
    })), ue && On(h, null, T, "beforeMount");
    const Ce = Qf(F, oe);
    Ce && oe.beforeEnter(j), o(j, S, A), ((B = Y && Y.onVnodeMounted) || Ce || ue) && ht(() => {
      B && $t(B, T, h), Ce && oe.enter(j), ue && On(h, null, T, "mounted");
    }, F);
  }, O = (h, S, A, T, F) => {
    if (A && f(h, A), T)
      for (let R = 0; R < T.length; R++)
        f(h, T[R]);
    if (F) {
      let R = F.subTree;
      if ({}.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && (R = Ti(R.children) || R), S === R) {
        const G = F.vnode;
        O(
          h,
          G,
          G.scopeId,
          G.slotScopeIds,
          F.parent
        );
      }
    }
  }, fe = (h, S, A, T, F, R, G, U, j = 0) => {
    for (let B = j; B < h.length; B++) {
      const Y = h[B] = U ? mn(h[B]) : Lt(h[B]);
      C(
        null,
        Y,
        S,
        A,
        T,
        F,
        R,
        G,
        U
      );
    }
  }, Te = (h, S, A, T, F, R, G) => {
    const U = S.el = h.el;
    let { patchFlag: j, dynamicChildren: B, dirs: Y } = S;
    j |= h.patchFlag & 16;
    const ce = h.props || Be, oe = S.props || Be;
    let ue;
    if (A && In(A, !1), (ue = oe.onVnodeBeforeUpdate) && $t(ue, A, S, h), Y && On(S, h, A, "beforeUpdate"), A && In(A, !0), {}.NODE_ENV !== "production" && Wn && (j = 0, G = !1, B = null), B ? (De(
      h.dynamicChildren,
      B,
      U,
      A,
      T,
      ba(S, F),
      R
    ), {}.NODE_ENV !== "production" && Ts(h, S)) : G || it(
      h,
      S,
      U,
      null,
      A,
      T,
      ba(S, F),
      R,
      !1
    ), j > 0) {
      if (j & 16)
        Z(
          U,
          S,
          ce,
          oe,
          A,
          T,
          F
        );
      else if (j & 2 && ce.class !== oe.class && a(U, "class", null, oe.class, F), j & 4 && a(U, "style", ce.style, oe.style, F), j & 8) {
        const Ce = S.dynamicProps;
        for (let P = 0; P < Ce.length; P++) {
          const ee = Ce[P], Ne = ce[ee], Ge = oe[ee];
          (Ge !== Ne || ee === "value") && a(
            U,
            ee,
            Ne,
            Ge,
            F,
            h.children,
            A,
            T,
            k
          );
        }
      }
      j & 1 && h.children !== S.children && c(U, S.children);
    } else
      !G && B == null && Z(
        U,
        S,
        ce,
        oe,
        A,
        T,
        F
      );
    ((ue = oe.onVnodeUpdated) || Y) && ht(() => {
      ue && $t(ue, A, S, h), Y && On(S, h, A, "updated");
    }, T);
  }, De = (h, S, A, T, F, R, G) => {
    for (let U = 0; U < S.length; U++) {
      const j = h[U], B = S[U], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Un(j, B) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 70) ? u(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      C(
        j,
        B,
        Y,
        null,
        T,
        F,
        R,
        G,
        !0
      );
    }
  }, Z = (h, S, A, T, F, R, G) => {
    if (A !== T) {
      if (A !== Be)
        for (const U in A)
          !Cs(U) && !(U in T) && a(
            h,
            U,
            A[U],
            null,
            G,
            S.children,
            F,
            R,
            k
          );
      for (const U in T) {
        if (Cs(U))
          continue;
        const j = T[U], B = A[U];
        j !== B && U !== "value" && a(
          h,
          U,
          B,
          j,
          G,
          S.children,
          F,
          R,
          k
        );
      }
      "value" in T && a(h, "value", A.value, T.value, G);
    }
  }, Le = (h, S, A, T, F, R, G, U, j) => {
    const B = S.el = h ? h.el : r(""), Y = S.anchor = h ? h.anchor : r("");
    let { patchFlag: ce, dynamicChildren: oe, slotScopeIds: ue } = S;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Wn || ce & 2048) && (ce = 0, j = !1, oe = null), ue && (U = U ? U.concat(ue) : ue), h == null ? (o(B, A, T), o(Y, A, T), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      A,
      Y,
      F,
      R,
      G,
      U,
      j
    )) : ce > 0 && ce & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (De(
      h.dynamicChildren,
      oe,
      A,
      F,
      R,
      G,
      U
    ), {}.NODE_ENV !== "production" ? Ts(h, S) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (S.key != null || F && S === F.subTree) && Ts(
        h,
        S,
        !0
        /* shallow */
      )
    )) : it(
      h,
      S,
      A,
      Y,
      F,
      R,
      G,
      U,
      j
    );
  }, Ye = (h, S, A, T, F, R, G, U, j) => {
    S.slotScopeIds = U, h == null ? S.shapeFlag & 512 ? F.ctx.activate(
      S,
      A,
      T,
      G,
      j
    ) : Je(
      S,
      A,
      T,
      F,
      R,
      G,
      j
    ) : Ue(h, S, j);
  }, Je = (h, S, A, T, F, R, G) => {
    const U = h.component = ip(
      h,
      T,
      F
    );
    if ({}.NODE_ENV !== "production" && U.type.__hmrId && qg(U), {}.NODE_ENV !== "production" && (Es(h), Xt(U, "mount")), Yo(h) && (U.ctx.renderer = we), {}.NODE_ENV !== "production" && Xt(U, "init"), lp(U), {}.NODE_ENV !== "production" && Yt(U, "init"), U.asyncDep) {
      if (F && F.registerDep(U, me), !h.el) {
        const j = U.subTree = p(nt);
        E(null, j, S, A);
      }
    } else
      me(
        U,
        h,
        S,
        A,
        F,
        R,
        G
      );
    ({}).NODE_ENV !== "production" && (As(), Yt(U, "mount"));
  }, Ue = (h, S, A) => {
    const T = S.component = h.component;
    if (rf(h, S, A))
      if (T.asyncDep && !T.asyncResolved) {
        ({}).NODE_ENV !== "production" && Es(S), re(T, S, A), {}.NODE_ENV !== "production" && As();
        return;
      } else
        T.next = S, jg(T.update), T.effect.dirty = !0, T.update();
    else
      S.el = h.el, T.vnode = S;
  }, me = (h, S, A, T, F, R, G) => {
    const U = () => {
      if (h.isMounted) {
        let { next: Y, bu: ce, u: oe, parent: ue, vnode: Ce } = h;
        {
          const rt = jc(h);
          if (rt) {
            Y && (Y.el = Ce.el, re(h, Y, G)), rt.asyncDep.then(() => {
              h.isUnmounted || U();
            });
            return;
          }
        }
        let P = Y, ee;
        ({}).NODE_ENV !== "production" && Es(Y || h.vnode), In(h, !1), Y ? (Y.el = Ce.el, re(h, Y, G)) : Y = Ce, ce && ao(ce), (ee = Y.props && Y.props.onVnodeBeforeUpdate) && $t(ee, ue, Y, Ce), In(h, !0), {}.NODE_ENV !== "production" && Xt(h, "render");
        const Ne = _a(h);
        ({}).NODE_ENV !== "production" && Yt(h, "render");
        const Ge = h.subTree;
        h.subTree = Ne, {}.NODE_ENV !== "production" && Xt(h, "patch"), C(
          Ge,
          Ne,
          // parent may have changed if it's in a teleport
          u(Ge.el),
          // anchor may have changed if it's in a fragment
          X(Ge),
          h,
          F,
          R
        ), {}.NODE_ENV !== "production" && Yt(h, "patch"), Y.el = Ne.el, P === null && lf(h, Ne.el), oe && ht(oe, F), (ee = Y.props && Y.props.onVnodeUpdated) && ht(
          () => $t(ee, ue, Y, Ce),
          F
        ), {}.NODE_ENV !== "production" && _c(h), {}.NODE_ENV !== "production" && As();
      } else {
        let Y;
        const { el: ce, props: oe } = S, { bm: ue, m: Ce, parent: P } = h, ee = Po(S);
        if (In(h, !1), ue && ao(ue), !ee && (Y = oe && oe.onVnodeBeforeMount) && $t(Y, P, S), In(h, !0), ce && he) {
          const Ne = () => {
            ({}).NODE_ENV !== "production" && Xt(h, "render"), h.subTree = _a(h), {}.NODE_ENV !== "production" && Yt(h, "render"), {}.NODE_ENV !== "production" && Xt(h, "hydrate"), he(
              ce,
              h.subTree,
              h,
              F,
              null
            ), {}.NODE_ENV !== "production" && Yt(h, "hydrate");
          };
          ee ? S.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && Ne()
          ) : Ne();
        } else {
          ({}).NODE_ENV !== "production" && Xt(h, "render");
          const Ne = h.subTree = _a(h);
          ({}).NODE_ENV !== "production" && Yt(h, "render"), {}.NODE_ENV !== "production" && Xt(h, "patch"), C(
            null,
            Ne,
            A,
            T,
            h,
            F,
            R
          ), {}.NODE_ENV !== "production" && Yt(h, "patch"), S.el = Ne.el;
        }
        if (Ce && ht(Ce, F), !ee && (Y = oe && oe.onVnodeMounted)) {
          const Ne = S;
          ht(
            () => $t(Y, P, Ne),
            F
          );
        }
        (S.shapeFlag & 256 || P && Po(P.vnode) && P.vnode.shapeFlag & 256) && h.a && ht(h.a, F), h.isMounted = !0, {}.NODE_ENV !== "production" && Jg(h), S = A = T = null;
      }
    }, j = h.effect = new yi(
      U,
      Xe,
      () => Js(B),
      h.scope
      // track it in component's effect scope
    ), B = h.update = () => {
      j.dirty && j.run();
    };
    B.id = h.uid, In(h, !0), {}.NODE_ENV !== "production" && (j.onTrack = h.rtc ? (Y) => ao(h.rtc, Y) : void 0, j.onTrigger = h.rtg ? (Y) => ao(h.rtg, Y) : void 0, B.ownerInstance = h), B();
  }, re = (h, S, A) => {
    S.component = h;
    const T = h.vnode.props;
    h.vnode = S, h.next = null, Vf(h, S.props, T, A), Xf(h, S.children, A), Tn(), Cr(h), Dn();
  }, it = (h, S, A, T, F, R, G, U, j = !1) => {
    const B = h && h.children, Y = h ? h.shapeFlag : 0, ce = S.children, { patchFlag: oe, shapeFlag: ue } = S;
    if (oe > 0) {
      if (oe & 128) {
        vt(
          B,
          ce,
          A,
          T,
          F,
          R,
          G,
          U,
          j
        );
        return;
      } else if (oe & 256) {
        Ct(
          B,
          ce,
          A,
          T,
          F,
          R,
          G,
          U,
          j
        );
        return;
      }
    }
    ue & 8 ? (Y & 16 && k(B, F, R), ce !== B && c(A, ce)) : Y & 16 ? ue & 16 ? vt(
      B,
      ce,
      A,
      T,
      F,
      R,
      G,
      U,
      j
    ) : k(B, F, R, !0) : (Y & 8 && c(A, ""), ue & 16 && fe(
      ce,
      A,
      T,
      F,
      R,
      G,
      U,
      j
    ));
  }, Ct = (h, S, A, T, F, R, G, U, j) => {
    h = h || co, S = S || co;
    const B = h.length, Y = S.length, ce = Math.min(B, Y);
    let oe;
    for (oe = 0; oe < ce; oe++) {
      const ue = S[oe] = j ? mn(S[oe]) : Lt(S[oe]);
      C(
        h[oe],
        ue,
        A,
        null,
        F,
        R,
        G,
        U,
        j
      );
    }
    B > Y ? k(
      h,
      F,
      R,
      !0,
      !1,
      ce
    ) : fe(
      S,
      A,
      T,
      F,
      R,
      G,
      U,
      j,
      ce
    );
  }, vt = (h, S, A, T, F, R, G, U, j) => {
    let B = 0;
    const Y = S.length;
    let ce = h.length - 1, oe = Y - 1;
    for (; B <= ce && B <= oe; ) {
      const ue = h[B], Ce = S[B] = j ? mn(S[B]) : Lt(S[B]);
      if (Un(ue, Ce))
        C(
          ue,
          Ce,
          A,
          null,
          F,
          R,
          G,
          U,
          j
        );
      else
        break;
      B++;
    }
    for (; B <= ce && B <= oe; ) {
      const ue = h[ce], Ce = S[oe] = j ? mn(S[oe]) : Lt(S[oe]);
      if (Un(ue, Ce))
        C(
          ue,
          Ce,
          A,
          null,
          F,
          R,
          G,
          U,
          j
        );
      else
        break;
      ce--, oe--;
    }
    if (B > ce) {
      if (B <= oe) {
        const ue = oe + 1, Ce = ue < Y ? S[ue].el : T;
        for (; B <= oe; )
          C(
            null,
            S[B] = j ? mn(S[B]) : Lt(S[B]),
            A,
            Ce,
            F,
            R,
            G,
            U,
            j
          ), B++;
      }
    } else if (B > oe)
      for (; B <= ce; )
        gt(h[B], F, R, !0), B++;
    else {
      const ue = B, Ce = B, P = /* @__PURE__ */ new Map();
      for (B = Ce; B <= oe; B++) {
        const Ze = S[B] = j ? mn(S[B]) : Lt(S[B]);
        Ze.key != null && ({}.NODE_ENV !== "production" && P.has(Ze.key) && z(
          "Duplicate keys found during update:",
          JSON.stringify(Ze.key),
          "Make sure keys are unique."
        ), P.set(Ze.key, B));
      }
      let ee, Ne = 0;
      const Ge = oe - Ce + 1;
      let rt = !1, no = 0;
      const sn = new Array(Ge);
      for (B = 0; B < Ge; B++)
        sn[B] = 0;
      for (B = ue; B <= ce; B++) {
        const Ze = h[B];
        if (Ne >= Ge) {
          gt(Ze, F, R, !0);
          continue;
        }
        let xt;
        if (Ze.key != null)
          xt = P.get(Ze.key);
        else
          for (ee = Ce; ee <= oe; ee++)
            if (sn[ee - Ce] === 0 && Un(Ze, S[ee])) {
              xt = ee;
              break;
            }
        xt === void 0 ? gt(Ze, F, R, !0) : (sn[xt - Ce] = B + 1, xt >= no ? no = xt : rt = !0, C(
          Ze,
          S[xt],
          A,
          null,
          F,
          R,
          G,
          U,
          j
        ), Ne++);
      }
      const So = rt ? ep(sn) : co;
      for (ee = So.length - 1, B = Ge - 1; B >= 0; B--) {
        const Ze = Ce + B, xt = S[Ze], wo = Ze + 1 < Y ? S[Ze + 1].el : T;
        sn[B] === 0 ? C(
          null,
          xt,
          A,
          wo,
          F,
          R,
          G,
          U,
          j
        ) : rt && (ee < 0 || B !== So[ee] ? dt(xt, A, wo, 2) : ee--);
      }
    }
  }, dt = (h, S, A, T, F = null) => {
    const { el: R, type: G, transition: U, children: j, shapeFlag: B } = h;
    if (B & 6) {
      dt(h.component.subTree, S, A, T);
      return;
    }
    if (B & 128) {
      h.suspense.move(S, A, T);
      return;
    }
    if (B & 64) {
      G.move(h, S, A, we);
      return;
    }
    if (G === Ae) {
      o(R, S, A);
      for (let ce = 0; ce < j.length; ce++)
        dt(j[ce], S, A, T);
      o(h.anchor, S, A);
      return;
    }
    if (G === Ds) {
      V(h, S, A);
      return;
    }
    if (T !== 2 && B & 1 && U)
      if (T === 0)
        U.beforeEnter(R), o(R, S, A), ht(() => U.enter(R), F);
      else {
        const { leave: ce, delayLeave: oe, afterLeave: ue } = U, Ce = () => o(R, S, A), P = () => {
          ce(R, () => {
            Ce(), ue && ue();
          });
        };
        oe ? oe(R, Ce, P) : P();
      }
    else
      o(R, S, A);
  }, gt = (h, S, A, T = !1, F = !1) => {
    const {
      type: R,
      props: G,
      ref: U,
      children: j,
      dynamicChildren: B,
      shapeFlag: Y,
      patchFlag: ce,
      dirs: oe
    } = h;
    if (U != null && Ja(U, null, A, h, !0), Y & 256) {
      S.ctx.deactivate(h);
      return;
    }
    const ue = Y & 1 && oe, Ce = !Po(h);
    let P;
    if (Ce && (P = G && G.onVnodeBeforeUnmount) && $t(P, S, h), Y & 6)
      Bt(h.component, A, T);
    else {
      if (Y & 128) {
        h.suspense.unmount(A, T);
        return;
      }
      ue && On(h, null, S, "beforeUnmount"), Y & 64 ? h.type.remove(
        h,
        S,
        A,
        F,
        we,
        T
      ) : B && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== Ae || ce > 0 && ce & 64) ? k(
        B,
        S,
        A,
        !1,
        !0
      ) : (R === Ae && ce & 384 || !F && Y & 16) && k(j, S, A), T && Tt(h);
    }
    (Ce && (P = G && G.onVnodeUnmounted) || ue) && ht(() => {
      P && $t(P, S, h), ue && On(h, null, S, "unmounted");
    }, A);
  }, Tt = (h) => {
    const { type: S, el: A, anchor: T, transition: F } = h;
    if (S === Ae) {
      ({}).NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && F && !F.persisted ? h.children.forEach((G) => {
        G.type === nt ? s(G.el) : Tt(G);
      }) : Fn(A, T);
      return;
    }
    if (S === Ds) {
      J(h);
      return;
    }
    const R = () => {
      s(A), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (h.shapeFlag & 1 && F && !F.persisted) {
      const { leave: G, delayLeave: U } = F, j = () => G(A, R);
      U ? U(h.el, R, j) : j();
    } else
      R();
  }, Fn = (h, S) => {
    let A;
    for (; h !== S; )
      A = g(h), s(h), h = A;
    s(S);
  }, Bt = (h, S, A) => {
    ({}).NODE_ENV !== "production" && h.type.__hmrId && Gg(h);
    const { bum: T, scope: F, update: R, subTree: G, um: U } = h;
    T && ao(T), F.stop(), R && (R.active = !1, gt(G, h, S, A)), U && ht(U, S), ht(() => {
      h.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), {}.NODE_ENV !== "production" && Qg(h);
  }, k = (h, S, A, T = !1, F = !1, R = 0) => {
    for (let G = R; G < h.length; G++)
      gt(h[G], S, A, T, F);
  }, X = (h) => h.shapeFlag & 6 ? X(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : g(h.anchor || h.el);
  let K = !1;
  const ne = (h, S, A) => {
    h == null ? S._vnode && gt(S._vnode, null, null, !0) : C(
      S._vnode || null,
      h,
      S,
      null,
      null,
      null,
      A
    ), K || (K = !0, Cr(), fc(), K = !1), S._vnode = h;
  }, we = {
    p: C,
    um: gt,
    m: dt,
    r: Tt,
    mt: Je,
    mc: fe,
    pc: it,
    pbc: De,
    n: X,
    o: e
  };
  let $e, he;
  return t && ([$e, he] = t(
    we
  )), {
    render: ne,
    hydrate: $e,
    createApp: $f(ne, $e)
  };
}
function ba({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function In({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Qf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ts(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (le(o) && le(s))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let r = s[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = mn(s[a]), r.el = i.el), n || Ts(i, r)), r.type === Jo && (r.el = i.el), {}.NODE_ENV !== "production" && r.type === nt && !r.el && (r.el = i.el);
    }
}
function ep(e) {
  const t = e.slice(), n = [0];
  let o, s, a, i, r;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (a = 0, i = n.length - 1; a < i; )
        r = a + i >> 1, e[n[r]] < d ? a = r + 1 : i = r;
      d < e[n[a]] && (a > 0 && (t[o] = n[a - 1]), n[a] = o);
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; )
    n[a] = i, i = t[i];
  return n;
}
function jc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : jc(t);
}
const tp = (e) => e.__isTeleport, Ae = Symbol.for("v-fgt"), Jo = Symbol.for("v-txt"), nt = Symbol.for("v-cmt"), Ds = Symbol.for("v-stc"), No = [];
let Pt = null;
function _(e = !1) {
  No.push(Pt = e ? null : []);
}
function np() {
  No.pop(), Pt = No[No.length - 1] || null;
}
let $o = 1;
function $r(e) {
  $o += e;
}
function Hc(e) {
  return e.dynamicChildren = $o > 0 ? Pt || co : null, np(), $o > 0 && Pt && Pt.push(e), e;
}
function D(e, t, n, o, s, a) {
  return Hc(
    w(
      e,
      t,
      n,
      o,
      s,
      a,
      !0
    )
  );
}
function N(e, t, n, o, s) {
  return Hc(
    p(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function go(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Un(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && io.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const op = (...e) => Gc(
  ...e
), ea = "__vInternal", qc = ({ key: e }) => e != null ? e : null, Ls = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ve(e) || st(e) || ge(e) ? { i: We, r: e, k: t, f: !!n } : e : null);
function w(e, t = null, n = null, o = 0, s = null, a = e === Ae ? 0 : 1, i = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qc(t),
    ref: t && Ls(t),
    scopeId: bc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: We
  };
  return r ? (Mi(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ve(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && z("VNode created with invalid key (NaN). VNode type:", l.type), $o > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Pt.push(l), l;
}
const p = {}.NODE_ENV !== "production" ? op : Gc;
function Gc(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === wc) && ({}.NODE_ENV !== "production" && !e && z(`Invalid vnode type when creating vnode: ${e}.`), e = nt), go(e)) {
    const r = jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Mi(r, n), $o > 0 && !a && Pt && (r.shapeFlag & 6 ? Pt[Pt.indexOf(e)] = r : Pt.push(r)), r.patchFlag |= -2, r;
  }
  if (Jc(e) && (e = e.__vccOpts), t) {
    t = ta(t);
    let { class: r, style: l } = t;
    r && !Ve(r) && (t.class = _e(r)), Fe(l) && (Ra(l) && !le(l) && (l = ze({}, l)), t.style = ot(l));
  }
  const i = Ve(e) ? 1 : uf(e) ? 128 : tp(e) ? 64 : Fe(e) ? 4 : ge(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && Ra(e) && (e = ye(e), z(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), w(
    e,
    t,
    n,
    o,
    s,
    i,
    a,
    !0
  );
}
function ta(e) {
  return e ? Ra(e) || ea in e ? ze({}, e) : e : null;
}
function jt(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: i } = e, r = t ? na(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: r,
    key: r && qc(r),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? le(s) ? s.concat(Ls(t)) : [s, Ls(t)] : Ls(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && a === -1 && le(i) ? i.map(Wc) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ae ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && jt(e.ssContent),
    ssFallback: e.ssFallback && jt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Wc(e) {
  const t = jt(e);
  return le(e.children) && (t.children = e.children.map(Wc)), t;
}
function Uo(e = " ", t = 0) {
  return p(Jo, null, e, t);
}
function ie(e = "", t = !1) {
  return t ? (_(), N(nt, null, e)) : p(nt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? p(nt) : le(e) ? p(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? mn(e) : p(Jo, null, String(e));
}
function mn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jt(e);
}
function Mi(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (le(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Mi(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(ea in t) ? t._ctx = We : s === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    ge(t) ? (t = { default: t, _ctx: We }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Uo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function na(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = _e([t.class, o.class]));
      else if (s === "style")
        t.style = ot([t.style, o.style]);
      else if (Go(s)) {
        const a = t[s], i = o[s];
        i && a !== i && !(le(a) && a.includes(i)) && (t[s] = a ? [].concat(a, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function $t(e, t, n, o = null) {
  kt(e, t, 7, [
    n,
    o
  ]);
}
const sp = Ic();
let ap = 0;
function ip(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || sp, a = {
    uid: ap++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Rl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: $c(o, s),
    emitsOptions: yc(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Be,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Be,
    data: Be,
    props: Be,
    attrs: Be,
    slots: Be,
    refs: Be,
    setupState: Be,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return {}.NODE_ENV !== "production" ? a.ctx = Tf(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = of.bind(null, a), e.ce && e.ce(a), a;
}
let Qe = null;
const Oi = () => Qe || We;
let Vs, Za;
{
  const e = Ws(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (a) => {
      s.length > 1 ? s.forEach((i) => i(a)) : s[0](a);
    };
  };
  Vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Qe = n
  ), Za = t(
    "__VUE_SSR_SETTERS__",
    (n) => oa = n
  );
}
const Zo = (e) => {
  const t = Qe;
  return Vs(e), e.scope.on(), () => {
    e.scope.off(), Vs(t);
  };
}, Ur = () => {
  Qe && Qe.scope.off(), Vs(null);
}, rp = /* @__PURE__ */ tn("slot,component");
function Qa(e, t) {
  const n = t.isNativeTag || Ml;
  (rp(e) || n(e)) && z(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Kc(e) {
  return e.vnode.shapeFlag & 4;
}
let oa = !1;
function lp(e, t = !1) {
  t && Za(t);
  const { props: n, children: o } = e.vnode, s = Kc(e);
  Uf(e, n, s, t), Kf(e, o);
  const a = s ? cp(e, t) : void 0;
  return t && Za(!1), a;
}
function cp(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && Qa(o.name, e.appContext.config), o.components) {
      const a = Object.keys(o.components);
      for (let i = 0; i < a.length; i++)
        Qa(a[i], e.appContext.config);
    }
    if (o.directives) {
      const a = Object.keys(o.directives);
      for (let i = 0; i < a.length; i++)
        Ec(a[i]);
    }
    o.compilerOptions && Xc() && z(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = sc(new Proxy(e.ctx, Mc)), {}.NODE_ENV !== "production" && Df(e);
  const { setup: s } = o;
  if (s) {
    const a = e.setupContext = s.length > 1 ? dp(e) : null, i = Zo(e);
    Tn();
    const r = Qt(
      s,
      e,
      0,
      [
        {}.NODE_ENV !== "production" ? lo(e.props) : e.props,
        a
      ]
    );
    if (Dn(), i(), mi(r)) {
      if (r.then(Ur, Ur), t)
        return r.then((l) => {
          Rr(e, l, t);
        }).catch((l) => {
          Ko(l, e, 0);
        });
      if (e.asyncDep = r, {}.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) != null ? n : "Anonymous";
        z(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Rr(e, r, t);
  } else
    Yc(e, t);
}
function Rr(e, t, n) {
  ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) ? ({}.NODE_ENV !== "production" && go(t) && z(
    "setup() should not return VNodes directly - return a render function instead."
  ), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = lc(t), {}.NODE_ENV !== "production" && Lf(e)) : {}.NODE_ENV !== "production" && t !== void 0 && z(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Yc(e, n);
}
let ei;
const Xc = () => !ei;
function Yc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ei && !o.render) {
      const s = o.template || Ni(e).template;
      if (s) {
        ({}).NODE_ENV !== "production" && Xt(e, "compile");
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: r, compilerOptions: l } = o, d = ze(
          ze(
            {
              isCustomElement: a,
              delimiters: r
            },
            i
          ),
          l
        );
        o.render = ei(s, d), {}.NODE_ENV !== "production" && Yt(e, "compile");
      }
    }
    e.render = o.render || Xe;
  }
  {
    const s = Zo(e);
    Tn();
    try {
      Nf(e);
    } finally {
      Dn(), s();
    }
  }
  ({}).NODE_ENV !== "production" && !o.render && e.render === Xe && !t && (o.template ? z(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : z("Component is missing template or render function."));
}
function Vr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return Is(), at(e, "get", "$attrs"), t[n];
      },
      set() {
        return z("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return z("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return at(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function up(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return at(e, "get", "$slots"), t[n];
    }
  }));
}
function dp(e) {
  const t = (n) => {
    if ({}.NODE_ENV !== "production" && (e.exposed && z("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (le(n) ? o = "array" : st(n) && (o = "ref")), o !== "object" && z(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Vr(e);
    },
    get slots() {
      return up(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return Vr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function sa(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(lc(sc(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Kn)
          return Kn[n](e);
      },
      has(t, n) {
        return n in t || n in Kn;
      }
    }));
}
const gp = /(?:^|[-_])(\w)/g, fp = (e) => e.replace(gp, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ii(e, t = !0) {
  return ge(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function aa(e, t, n = !1) {
  let o = Ii(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (a) => {
      for (const i in a)
        if (a[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? fp(o) : n ? "App" : "Anonymous";
}
function Jc(e) {
  return ge(e) && "__vccOpts" in e;
}
const b = (e, t) => Pg(e, t, oa);
function Ro(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Fe(t) && !le(t) ? go(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && go(n) && (n = [n]), p(e, t, n));
}
function Sa(e) {
  return !!(e && e.__v_isShallow);
}
function pp() {
  if ({}.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    header(u) {
      return Fe(u) ? u.__isVue ? ["div", e, "VueInstance"] : st(u) ? [
        "div",
        {},
        ["span", e, c(u)],
        "<",
        r(u.value),
        ">"
      ] : qn(u) ? [
        "div",
        {},
        ["span", e, Sa(u) ? "ShallowReactive" : "Reactive"],
        "<",
        r(u),
        `>${En(u) ? " (readonly)" : ""}`
      ] : En(u) ? [
        "div",
        {},
        ["span", e, Sa(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        r(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...a(u.$)
        ];
    }
  };
  function a(u) {
    const g = [];
    u.type.props && u.props && g.push(i("props", ye(u.props))), u.setupState !== Be && g.push(i("setup", u.setupState)), u.data !== Be && g.push(i("data", ye(u.data)));
    const f = l(u, "computed");
    f && g.push(i("computed", f));
    const m = l(u, "inject");
    return m && g.push(i("injected", m)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function i(u, g) {
    return g = ze({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((f) => [
          "div",
          {},
          ["span", o, f + ": "],
          r(g[f], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function r(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : Fe(u) ? ["object", { object: g ? ye(u) : u }] : ["span", n, String(u)];
  }
  function l(u, g) {
    const f = u.type;
    if (ge(f))
      return;
    const m = {};
    for (const C in u.ctx)
      d(f, C, g) && (m[C] = u.ctx[C]);
    return m;
  }
  function d(u, g, f) {
    const m = u[f];
    if (le(m) && m.includes(g) || Fe(m) && g in m || u.extends && d(u.extends, g, f) || u.mixins && u.mixins.some((C) => d(C, g, f)))
      return !0;
  }
  function c(u) {
    return Sa(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const zr = "3.4.15", Xn = {}.NODE_ENV !== "production" ? z : Xe;
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const mp = "http://www.w3.org/2000/svg", hp = "http://www.w3.org/1998/Math/MathML", hn = typeof document != "undefined" ? document : null, jr = hn && /* @__PURE__ */ hn.createElement("template"), _p = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? hn.createElementNS(mp, e) : t === "mathml" ? hn.createElementNS(hp, e) : hn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => hn.createTextNode(e),
  createComment: (e) => hn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => hn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, a) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === a || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === a || !(s = s.nextSibling)); )
        ;
    else {
      jr.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const r = jr.content;
      if (o === "svg" || o === "mathml") {
        const l = r.firstChild;
        for (; l.firstChild; )
          r.appendChild(l.firstChild);
        r.removeChild(l);
      }
      t.insertBefore(r, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, rn = "transition", xo = "animation", Vo = Symbol("_vtc"), bn = (e, { slots: t }) => Ro(_f, vp(e), t);
bn.displayName = "Transition";
const Zc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
bn.props = /* @__PURE__ */ ze(
  {},
  Ac,
  Zc
);
const Bn = (e, t = []) => {
  le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Hr = (e) => e ? le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vp(e) {
  const t = {};
  for (const Z in e)
    Z in Zc || (t[Z] = e[Z]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: s,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: r = `${n}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: d = i,
    appearToClass: c = r,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: f = `${n}-leave-to`
  } = e, m = yp(s), C = m && m[0], x = m && m[1], {
    onBeforeEnter: E,
    onEnter: L,
    onEnterCancelled: I,
    onLeave: V,
    onLeaveCancelled: J,
    onBeforeAppear: se = E,
    onAppear: M = L,
    onAppearCancelled: O = I
  } = t, fe = (Z, Le, Ye) => {
    $n(Z, Le ? c : r), $n(Z, Le ? d : i), Ye && Ye();
  }, Te = (Z, Le) => {
    Z._isLeaving = !1, $n(Z, u), $n(Z, f), $n(Z, g), Le && Le();
  }, De = (Z) => (Le, Ye) => {
    const Je = Z ? M : L, Ue = () => fe(Le, Z, Ye);
    Bn(Je, [Le, Ue]), qr(() => {
      $n(Le, Z ? l : a), ln(Le, Z ? c : r), Hr(Je) || Gr(Le, o, C, Ue);
    });
  };
  return ze(t, {
    onBeforeEnter(Z) {
      Bn(E, [Z]), ln(Z, a), ln(Z, i);
    },
    onBeforeAppear(Z) {
      Bn(se, [Z]), ln(Z, l), ln(Z, d);
    },
    onEnter: De(!1),
    onAppear: De(!0),
    onLeave(Z, Le) {
      Z._isLeaving = !0;
      const Ye = () => Te(Z, Le);
      ln(Z, u), wp(), ln(Z, g), qr(() => {
        Z._isLeaving && ($n(Z, u), ln(Z, f), Hr(V) || Gr(Z, o, x, Ye));
      }), Bn(V, [Z, Ye]);
    },
    onEnterCancelled(Z) {
      fe(Z, !1), Bn(I, [Z]);
    },
    onAppearCancelled(Z) {
      fe(Z, !0), Bn(O, [Z]);
    },
    onLeaveCancelled(Z) {
      Te(Z), Bn(J, [Z]);
    }
  });
}
function yp(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [wa(e.enter), wa(e.leave)];
  {
    const t = wa(e);
    return [t, t];
  }
}
function wa(e) {
  const t = Xd(e);
  return {}.NODE_ENV !== "production" && Ug(t, "<transition> explicit duration"), t;
}
function ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vo] || (e[Vo] = /* @__PURE__ */ new Set())).add(t);
}
function $n(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Vo];
  n && (n.delete(t), n.size || (e[Vo] = void 0));
}
function qr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let bp = 0;
function Gr(e, t, n, o) {
  const s = e._endId = ++bp, a = () => {
    s === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: r, propCount: l } = Sp(e, t);
  if (!i)
    return o();
  const d = i + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(d, g), a();
  }, g = (f) => {
    f.target === e && ++c >= l && u();
  };
  setTimeout(() => {
    c < l && u();
  }, r + 1), e.addEventListener(d, g);
}
function Sp(e, t) {
  const n = window.getComputedStyle(e), o = (m) => (n[m] || "").split(", "), s = o(`${rn}Delay`), a = o(`${rn}Duration`), i = Wr(s, a), r = o(`${xo}Delay`), l = o(`${xo}Duration`), d = Wr(r, l);
  let c = null, u = 0, g = 0;
  t === rn ? i > 0 && (c = rn, u = i, g = a.length) : t === xo ? d > 0 && (c = xo, u = d, g = l.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? rn : xo : null, g = c ? c === rn ? a.length : l.length : 0);
  const f = c === rn && /\b(transform|all)(,|$)/.test(
    o(`${rn}Property`).toString()
  );
  return {
    type: c,
    timeout: u,
    propCount: g,
    hasTransform: f
  };
}
function Wr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Kr(n) + Kr(e[o])));
}
function Kr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wp() {
  return document.body.offsetHeight;
}
function Cp(e, t, n) {
  const o = e[Vo];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Bi = Symbol("_vod"), $i = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Bi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Eo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Eo(e, !0), o.enter(e)) : o.leave(e, () => {
      Eo(e, !1);
    }) : Eo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Eo(e, t);
  }
};
({}).NODE_ENV !== "production" && ($i.name = "show");
function Eo(e, t) {
  e.style.display = t ? e[Bi] : "none";
}
const xp = Symbol({}.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Ep(e, t, n) {
  const o = e.style, s = o.display, a = Ve(n);
  if (n && !a) {
    if (t && !Ve(t))
      for (const i in t)
        n[i] == null && ti(o, i, "");
    for (const i in n)
      ti(o, i, n[i]);
  } else if (a) {
    if (t !== n) {
      const i = o[xp];
      i && (n += ";" + i), o.cssText = n;
    }
  } else
    t && e.removeAttribute("style");
  Bi in e && (o.display = s);
}
const Ap = /[^\\];\s*$/, Xr = /\s*!important$/;
function ti(e, t, n) {
  if (le(n))
    n.forEach((o) => ti(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && Ap.test(n) && Xn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = kp(e, t);
    Xr.test(n) ? e.setProperty(
      en(o),
      n.replace(Xr, ""),
      "important"
    ) : e[o] = n;
  }
}
const Yr = ["Webkit", "Moz", "ms"], Ca = {};
function kp(e, t) {
  const n = Ca[t];
  if (n)
    return n;
  let o = zt(t);
  if (o !== "filter" && o in e)
    return Ca[t] = o;
  o = Yn(o);
  for (let s = 0; s < Yr.length; s++) {
    const a = Yr[s] + o;
    if (a in e)
      return Ca[t] = a;
  }
  return t;
}
const Jr = "http://www.w3.org/1999/xlink";
function Tp(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Jr, t.slice(6, t.length)) : e.setAttributeNS(Jr, t, n);
  else {
    const a = rg(t);
    n == null || a && !$l(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function Dp(e, t, n, o, s, a, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, a), e[t] = n == null ? "" : n;
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    e._value = n;
    const d = r === "OPTION" ? e.getAttribute("value") : e.value, c = n == null ? "" : n;
    d !== c && (e.value = c), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = $l(n) : n == null && d === "string" ? (n = "", l = !0) : d === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    ({}).NODE_ENV !== "production" && !l && Xn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  l && e.removeAttribute(t);
}
function Qc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Lp(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Zr = Symbol("_vei");
function Pp(e, t, n, o, s = null) {
  const a = e[Zr] || (e[Zr] = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [r, l] = Np(t);
    if (o) {
      const d = a[t] = Op(o, s);
      Qc(e, r, d, l);
    } else
      i && (Lp(e, r, i, l), a[t] = void 0);
  }
}
const Qr = /(?:Once|Passive|Capture)$/;
function Np(e) {
  let t;
  if (Qr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Qr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : en(e.slice(2)), t];
}
let xa = 0;
const Fp = /* @__PURE__ */ Promise.resolve(), Mp = () => xa || (Fp.then(() => xa = 0), xa = Date.now());
function Op(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    kt(
      Ip(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Mp(), n;
}
function Ip(e, t) {
  if (le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const el = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bp = (e, t, n, o, s, a, i, r, l) => {
  const d = s === "svg";
  t === "class" ? Cp(e, o, d) : t === "style" ? Ep(e, n, o) : Go(t) ? Ps(t) || Pp(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $p(e, t, o, d)) ? Dp(
    e,
    t,
    o,
    a,
    i,
    r,
    l
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Tp(e, t, o, d));
};
function $p(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && el(t) && ge(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return el(t) && Ve(n) ? !1 : t in e;
}
const tl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return le(t) ? (n) => ao(t, n) : t;
}, Ea = Symbol("_assign"), Up = {
  created(e, { value: t }, n) {
    e.checked = Fs(t, n.props.value), e[Ea] = tl(n), Qc(e, "change", () => {
      e[Ea](Rp(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[Ea] = tl(o), t !== n && (e.checked = Fs(t, o.props.value));
  }
};
function Rp(e) {
  return "_value" in e ? e._value : e.value;
}
const Vp = ["ctrl", "shift", "alt", "meta"], zp = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Vp.some((n) => e[`${n}Key`] && !t.includes(n))
}, tt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (s, ...a) => {
    for (let i = 0; i < t.length; i++) {
      const r = zp[t[i]];
      if (r && r(s, t))
        return;
    }
    return e(s, ...a);
  });
}, jp = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ro = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (s) => {
    if (!("key" in s))
      return;
    const a = en(s.key);
    if (t.some((i) => i === a || jp[i] === a))
      return e(s);
  });
}, Hp = /* @__PURE__ */ ze({ patchProp: Bp }, _p);
let nl;
function qp() {
  return nl || (nl = Jf(Hp));
}
const eu = (...e) => {
  const t = qp().createApp(...e);
  ({}).NODE_ENV !== "production" && (Wp(t), Kp(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Xp(o);
    if (!s)
      return;
    const a = t._component;
    !ge(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, Gp(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Gp(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => og(t) || sg(t) || ag(t),
    writable: !1
  });
}
function Kp(e) {
  if (Xc()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Xn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Xn(o), n;
      },
      set() {
        Xn(o);
      }
    });
  }
}
function Xp(e) {
  if (Ve(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && Xn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Xn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yp() {
  pp();
}
({}).NODE_ENV !== "production" && Yp();
const q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Jp = {
  name: "MWIcon",
  props: {
    /**
     * Icon - An svg path or an object with path and flippable properties.
     **/
    icon: {
      type: [String, Object],
      default: null
    },
    iconName: {
      type: String,
      default: null
    },
    /**
     * Icon color
     **/
    iconColor: {
      type: String,
      default: "currentColor"
    },
    /**
     * Icon size
     **/
    size: {
      type: [Number, String],
      default: 20
    }
  },
  computed: {
    classes: (e) => ({
      "mw-ui-icon--noflip": !e.flip
    }),
    iconImagePath: (e) => {
      var t;
      return ((t = e.icon) == null ? void 0 : t.path) || e.icon;
    },
    /**
     * Whether the icon should be flipped on RTL(Default: true)
     */
    flip: (e) => {
      var t;
      return ((t = e.icon) == null ? void 0 : t.flippable) !== !1;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
}, Zp = ["width", "height", "aria-labelledby"], Qp = ["id"], em = ["fill"], tm = ["d"];
function nm(e, t, n, o, s, a) {
  return _(), D("span", {
    class: _e(["mw-ui-icon notranslate", a.classes])
  }, [
    (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (_(), D("title", {
        key: 0,
        id: n.iconName
      }, ae(n.iconName), 9, Qp)) : ie("", !0),
      w("g", { fill: n.iconColor }, [
        w("path", { d: a.iconImagePath }, null, 8, tm)
      ], 8, em)
    ], 8, Zp))
  ], 2);
}
const qe = /* @__PURE__ */ q(Jp, [["render", nm]]);
const om = {
  name: "MwButton",
  components: {
    MwIcon: qe
  },
  props: {
    /**
     * Button label
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Whether to disable button
     */
    disabled: Boolean,
    depressed: Boolean,
    /**
     * Whether to have large button
     */
    large: Boolean,
    icon: {
      type: [Object, String],
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: 20
    },
    indicatorSize: {
      type: [Number, String],
      default: 12
    },
    indicator: {
      type: [Object, String],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    /**
     * Progressive button used for primary, constructive actions
     */
    progressive: {
      type: Boolean,
      default: !1
    },
    /**
     * Progressive button used for primary, destructive actions
     */
    destructive: {
      type: Boolean,
      default: !1
    },
    /**
     * Type of the button. Can be one of "button", "toggle", "icon" or "text"
     */
    type: {
      type: String,
      default: "button",
      validator: (e) => ["button", "toggle", "icon", "text"].indexOf(e) !== -1
    }
  },
  emits: ["indicator-icon-clicked"],
  computed: {
    component: (e) => e.href ? "a" : "button",
    classes: (e) => ({
      "mw-ui-button--depressed": e.depressed,
      "mw-ui-button--disabled": e.disabled,
      "mw-ui-button--large": e.large,
      "mw-ui-button--progressive": e.progressive,
      "mw-ui-button--destructive": e.destructive,
      "mw-ui-button--icon": e.isIcon,
      "mw-ui-button--text": e.type === "text"
    }),
    hasIndicatorClickListener: (e) => !!e.$attrs["indicator-icon-clicked"],
    isIcon: (e) => e.type === "icon",
    iconClass: (e) => !e.isIcon && "pe-2",
    indicatorClass: (e) => !e.isIcon && "ps-2",
    indicatorClickEvent: (e) => e.hasIndicatorClickListener ? "click" : null
  }
}, sm = { class: "mw-ui-button__content" }, am = ["textContent"];
function im(e, t, n, o, s, a) {
  const i = v("mw-icon");
  return _(), N(vo(a.component), {
    class: _e(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: y(() => [
      je(e.$slots, "default", {}, () => [
        w("span", sm, [
          n.icon ? (_(), N(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: _e(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : ie("", !0),
          !a.isIcon && n.label ? (_(), D("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: ae(n.label)
          }, null, 8, am)) : ie("", !0),
          n.indicator ? (_(), N(i, na({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [gn(a.indicatorClickEvent)]: t[0] || (t[0] = tt((r) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : ie("", !0)
        ])
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const be = /* @__PURE__ */ q(om, [["render", im]]);
const rm = {
  name: "MwButtonGroup",
  components: {
    MwButton: be
  },
  props: {
    /**
     * Array of objects that are options for building a button.
     * Example: { value: "ButtonLabel", props: { button props}}
     **/
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Value of the button that should be active
     **/
    active: {
      type: String,
      default: null
    },
    activeIndicatorColor: {
      type: String,
      required: !1,
      default: "#202122"
    }
  },
  emits: ["select"],
  methods: {
    isActive(e) {
      return this.active === e.value;
    },
    activeIndicatorStyle(e) {
      return this.isActive(e) ? { "border-bottom-color": this.activeIndicatorColor } : {};
    },
    buttonClasses(e) {
      return {
        "mw-ui-button--selected": this.isActive(e),
        [e.props.class || ""]: !0
      };
    }
  }
}, lm = { class: "row mw-ui-button-group ma-0 pa-0" };
function cm(e, t, n, o, s, a) {
  const i = v("mw-button");
  return _(), D("div", lm, [
    (_(!0), D(Ae, null, et(n.items, (r) => (_(), N(i, na({
      key: r.value,
      value: r.value,
      "aria-selected": a.isActive(r) || null
    }, r.props, {
      class: ["ma-0", a.buttonClasses(r)],
      style: a.activeIndicatorStyle(r),
      onClick: tt((l) => e.$emit("select", r.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Qo = /* @__PURE__ */ q(rm, [["render", cm]]);
const um = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: Qo },
  props: {
    /**
     * Array of objects that are options for building a button.
     * Example: { value: "ButtonLabel", props: { button props}}
     **/
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Value of the button that should be active
     **/
    active: {
      type: String,
      default: null
    }
  },
  emits: ["update:active"]
}, dm = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, gm = { class: "col-12 ma-0 pa-0" };
function fm(e, t, n, o, s, a) {
  const i = v("mw-button-group");
  return _(), D("footer", dm, [
    w("div", gm, [
      je(e.$slots, "default", {}, () => [
        p(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (r) => e.$emit("update:active", r))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const pm = /* @__PURE__ */ q(um, [["render", fm]]);
const mm = {
  name: "MwCard",
  props: {
    /**
     * Card title
     **/
    title: {
      type: String,
      default: null
    }
  }
}, hm = { class: "mw-ui-card" }, _m = ["textContent"], vm = { class: "mw-ui-card__content" };
function ym(e, t, n, o, s, a) {
  return _(), D("div", hm, [
    je(e.$slots, "header", {}, () => [
      n.title ? (_(), D("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: ae(n.title)
      }, null, 8, _m)) : ie("", !0)
    ]),
    w("div", vm, [
      je(e.$slots, "default")
    ])
  ]);
}
const Gt = /* @__PURE__ */ q(mm, [["render", ym]]);
const bm = {}, Sm = { class: "mw-ui-divider row" };
function wm(e, t) {
  return _(), D("div", Sm);
}
const es = /* @__PURE__ */ q(bm, [["render", wm]]);
const Cm = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
function xm(e, t, n, o, s, a) {
  return _(), N(vo(n.tag), { class: "mw-grid container" }, {
    default: y(() => [
      je(e.$slots, "default")
    ], void 0),
    _: 3
  });
}
const tu = /* @__PURE__ */ q(Cm, [["render", xm]]), Em = {
  name: "MwRow",
  props: {
    /**
     * Applies the align-items css property.
     **/
    align: {
      type: String,
      default: "center",
      validator: (e) => ["normal", "start", "end", "center", "stretch"].includes(e)
    },
    /**
     * Applies the justify-content css property.
     **/
    justify: {
      type: String,
      default: "start",
      validator: (e) => ["start", "end", "center", "between", "around"].includes(e)
    },
    /**
     * Specify a custom tag used on the root element.
     **/
    tag: {
      type: String,
      default: "div"
    },
    direction: {
      type: String,
      default: "row",
      validator: (e) => ["row", "column"].includes(e)
    },
    /**
     * If set to true, elements inside row (or column if direction is set to "column")
     * are rendered in reverse order by setting flex-direction property accordingly
     */
    reverse: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    classes() {
      const e = [
        this.direction,
        `items-${this.align}`,
        `justify-${this.justify}`
      ];
      return this.reverse && e.push("reverse"), e;
    }
  }
};
function Am(e, t, n, o, s, a) {
  return _(), N(vo(n.tag), {
    class: _e(a.classes)
  }, {
    default: y(() => [
      je(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const Se = /* @__PURE__ */ q(Em, [["render", Am]]), ni = ["mobile", "tablet", "desktop", "desktop-wide"], km = ni.reduce(
  (e, t) => yt(lt({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Tm = {
  name: "MwCol",
  props: yt(lt({}, km), {
    /**
     * Sets the default number of columns the component extends.
     * Available options are 1 -> 12
     **/
    cols: {
      type: [String, Number],
      default: null,
      validator: (e) => Number.parseInt(e) >= 1 && Number.parseInt(e) <= 12
    },
    grow: {
      type: Boolean,
      default: !1
    },
    shrink: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    },
    /**
     * Applies the align-items css property.
     **/
    align: {
      type: String,
      // TODO: There is a small bug in grid css that adds display:flex
      // When items* class is present anywhere. After fixing that, we
      // can have a sensible default here.
      default: null,
      validator: (e) => e ? ["start", "end", "center", "stretch"].includes(e) : !0
    }
  }),
  computed: {
    classes() {
      let e = [];
      for (let n = 0; n < ni.length; n++) {
        let o = ni[n], s = this.$props[o];
        s && e.push(`col-${o}-${s}`);
      }
      this.cols && e.push(`col-${this.cols}`);
      const t = e.some(
        (n) => n == null ? void 0 : n.startsWith("col-")
      );
      return e.push({
        col: !t,
        grow: this.grow,
        shrink: this.shrink,
        [`items-${this.align}`]: this.align
      }), e;
    }
  }
};
function Dm(e, t, n, o, s, a) {
  return _(), N(vo(n.tag), {
    class: _e(a.classes)
  }, {
    default: y(() => [
      je(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const xe = /* @__PURE__ */ q(Tm, [["render", Dm]]), zs = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Lm = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", Pm = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", nu = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Zn = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Nm = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Fm = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Mm = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", ou = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", su = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Ln = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", au = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z", Mt = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", ia = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Ui = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Ri = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", iu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", ru = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", lu = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", cu = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ts = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", uu = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", du = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", oi = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", ns = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Om = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Im = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Sn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Bm = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, fo = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, $m = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Um = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z", ol = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z", Vi = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Rm = "M 1 3 L 1 15 A 2 2 0 0 0 3 17 L 15 17 L 15 12.234375 A 3 3 0 0 0 17 13 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 A 3 3 0 0 0 15 7.7636719 L 15 3 L 10.580078 3 A 3 3 0 0 1 11 4.5 A 3 3 0 0 1 5 4.5 A 3 3 0 0 1 5.4199219 3 L 1 3 z", Vm = "M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z", zm = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", jm = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Hm = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const qm = {
  name: "MwDialog",
  components: {
    MwButton: be,
    MwRow: Se,
    MwCol: xe,
    MwDivider: es
  },
  props: {
    /**
     * Animation
     * @values slide-right, slide-left, slide-up, slide-down
     **/
    animation: {
      type: String,
      default: "slide-left",
      validator: (e) => ["slide-right", "slide-left", "slide-up", "slide-down"].indexOf(
        e
      ) !== -1
    },
    /**
     * Whether the dialog should be shown fullscreen or not.
     **/
    fullscreen: {
      type: Boolean,
      default: !1
    },
    /**
     * Title of the dialog
     **/
    title: {
      type: String,
      default: null
    },
    /**
     * Whether the dialog should close on `escape` key press or not.
     **/
    closeOnEscapeKey: {
      type: Boolean,
      default: !0
    },
    /**
     * Whether the dialog should close when clicking on the overlay.
     * If false, it closes on overlay click.
     **/
    persistent: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the dialog should have header or not.
     **/
    header: {
      type: Boolean,
      default: !0
    },
    /**
     * Color of the overlay
     **/
    overlayColor: {
      type: String,
      default: "#fff"
    },
    /**
     * Opacity of the overlay
     **/
    overlayOpacity: {
      type: Number,
      default: 1
    },
    value: {
      type: Boolean,
      default: !0
    },
    minHeight: {
      type: String,
      default: "200px"
    }
  },
  emits: ["input", "close"],
  setup(e, t) {
    const n = Q(null), o = b(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = b(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    He(
      () => e.value,
      (l) => {
        l ? (i(), _o(() => {
          n.value.focus();
        })) : a();
      }
    );
    const r = b(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: r,
      overlayStyles: s,
      mwIconClose: Mt,
      root: n
    };
  }
}, Gm = { class: "mw-ui-dialog__shell items-stretch" }, Wm = { class: "mw-ui-dialog__body" };
function Km(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-button"), l = v("mw-row"), d = v("mw-divider");
  return _(), N(bn, {
    name: `mw-ui-animation-${n.animation}`,
    style: ot(o.cssVars)
  }, {
    default: y(() => [
      n.value ? (_(), D("div", {
        key: 0,
        ref: "root",
        class: _e(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = ro((c) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        w("div", {
          class: "mw-ui-dialog__overlay",
          style: ot(o.overlayStyles),
          onClick: t[0] || (t[0] = (c) => !n.persistent && o.close)
        }, null, 4),
        w("div", Gm, [
          n.header ? je(e.$slots, "header", { key: 0 }, () => [
            p(l, { class: "mw-ui-dialog__header" }, {
              default: y(() => [
                p(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                p(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: y(() => [
                    p(r, {
                      type: "icon",
                      icon: o.mwIconClose,
                      onClick: o.close
                    }, null, 8, ["icon", "onClick"])
                  ], void 0, !0),
                  _: 1
                })
              ], void 0, !0),
              _: 1
            }),
            p(d)
          ]) : ie("", !0),
          w("div", Wm, [
            je(e.$slots, "default")
          ]),
          je(e.$slots, "footer")
        ])
      ], 34)) : ie("", !0)
    ], void 0),
    _: 3
  }, 8, ["name", "style"]);
}
const Ot = /* @__PURE__ */ q(qm, [["render", Km]]);
const Xm = {
  name: "MwInput",
  components: {
    MwIcon: qe
  },
  props: {
    disabled: Boolean,
    large: Boolean,
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: "24"
    },
    indicatorSize: {
      type: [Number, String],
      default: "24"
    },
    indicator: {
      type: String,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "input",
      validator: (e) => ["input", "search", "textarea"].indexOf(e) !== -1
    }
  },
  emits: ["click", "focus", "blur", "indicator-clicked"],
  data: () => ({
    focused: !1
  }),
  computed: {
    classes() {
      return {
        "mw-ui-input": !0,
        container: !0,
        // This is a sub flex system
        "mw-ui-input--disabled": this.disabled,
        "mw-ui-input--large": this.large,
        "mw-ui-input--focused": this.focused
      };
    },
    customAttrs: (e) => {
      const t = lt({}, e.$attrs);
      return delete t.class, t;
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    focus() {
      const e = this.$refs.input;
      e.focus(), this.selectAll && e.setSelectionRange(0, e.value.length);
    },
    onBlur(e) {
      this.focused = !1, this.$emit("blur", e);
    },
    onFocus(e) {
      this.focused = !0, this.$emit("focus", e);
    }
  }
}, Ym = { class: "mw-ui-input__content" };
function Jm(e, t, n, o, s, a) {
  const i = v("mw-icon");
  return _(), D("div", {
    class: _e(a.classes),
    onClick: t[2] || (t[2] = (r) => a.focus())
  }, [
    w("div", Ym, [
      je(e.$slots, "icon", {}, () => [
        n.icon ? (_(), N(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : ie("", !0)
      ]),
      (_(), N(vo(n.type === "textarea" ? n.type : "input"), na({
        ref: "input",
        class: "mw-ui-input__input",
        disabled: n.disabled || null,
        "aria-disabled": n.disabled || null,
        ".value": n.value,
        placeholder: n.placeholder
      }, a.customAttrs, {
        type: n.type,
        onInput: t[0] || (t[0] = (r) => e.$emit("update:value", r.target.value)),
        onFocus: a.onFocus,
        onBlur: a.onBlur,
        onClick: a.onClick,
        textContent: ae(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      je(e.$slots, "indicator", {}, () => [
        n.indicator ? (_(), N(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = tt((r) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : ie("", !0)
      ])
    ])
  ], 2);
}
const zi = /* @__PURE__ */ q(Xm, [["render", Jm]]);
const Zm = {
  name: "MwMessage",
  components: { MwCol: xe, MwRow: Se, MwIcon: qe, MwButton: be },
  props: {
    /**
     * Type of the message.
     * @values notice, error, success, warning
     **/
    type: {
      type: String,
      default: "notice",
      validator: (e) => ["notice", "error", "success", "warning"].indexOf(e) !== -1
    },
    /**
     * Inline messages does not have borders
     **/
    inline: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the message can be dismissed by clicking the close button.
     **/
    dismissable: {
      type: Boolean,
      default: !1
    }
  },
  data: () => ({
    shown: !0,
    mwIconClose: Mt,
    id: ""
  }),
  computed: {
    classes: (e) => ({
      "mw-ui-message--notice": e.type === "notice",
      "mw-ui-message--warning": e.type === "warning",
      "mw-ui-message--error": e.type === "error",
      "mw-ui-message--success": e.type === "success",
      "mw-ui-message--inline": e.inline
    }),
    icon: (e) => ({
      notice: Im,
      warning: fo,
      success: Sn,
      error: Bm
    })[e.type]
  },
  mounted() {
    this.id = this.type + Math.floor(Math.random() * 100);
  },
  methods: {
    hideMessage() {
      this.shown = !1;
    }
  }
};
function Qm(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-col"), l = v("mw-button"), d = v("mw-row");
  return e.shown ? (_(), N(d, {
    key: 0,
    class: _e([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: y(() => [
      je(e.$slots, "icon", {}, () => [
        p(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      p(r, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: y(() => [
          je(e.$slots, "default")
        ], void 0, !0),
        _: 3
      }, 8, ["id"]),
      je(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (_(), N(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : ie("", !0)
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : ie("", !0);
}
const eh = /* @__PURE__ */ q(Zm, [["render", Qm]]);
const th = {}, nh = { class: "mw-ui-spinner" }, oh = /* @__PURE__ */ w("div", { class: "mw-ui-spinner__bounce" }, null, -1), sh = [
  oh
];
function ah(e, t) {
  return _(), D("div", nh, sh);
}
const on = /* @__PURE__ */ q(th, [["render", ah]]), At = {
  gray200: "#eaecf0",
  gray300: "#c8ccd1",
  gray500: "#72777d",
  gray600: "#54595d",
  gray700: "#202122",
  blue600: "#36c",
  green500: "#00af89",
  green600: "#14866d",
  red600: "#d73333",
  yellow500: "#fc3",
  yellow700: "#ac6600"
};
const ih = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: qe },
  props: {
    thumbnail: {
      type: Object,
      default: null
    },
    thumbnailSize: {
      type: Number,
      default: 84
    },
    placeholderIcon: {
      type: String,
      default: Vi
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: At.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: At.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = b(() => {
      var a;
      const s = {
        height: `${e.thumbnailSize}px`,
        width: `${e.thumbnailSize}px`
      };
      return (a = e.thumbnail) != null && a.source ? s["background-image"] = `url(${e.thumbnail.source})` : (s.color = e.placeholderColor, s["background-color"] = e.placeholderBackgroundColor), s;
    });
    return {
      handleClick: (s) => t("click", s),
      style: n
    };
  }
};
function rh(e, t, n, o, s, a) {
  const i = v("mw-ui-icon");
  return n.thumbnail ? (_(), D("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: ot(o.style)
  }, null, 4)) : (_(), N(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: ot(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const ji = /* @__PURE__ */ q(ih, [["render", rh]]);
const lh = {
  name: "MwRadio",
  components: { MwRow: Se },
  props: {
    /**
     * Id of current radio button. If not provided
     * an id will automatically created
     **/
    id: {
      type: String,
      required: !1,
      default() {
        return `radio-button-${Math.floor(Math.random() * 1e4)}`;
      }
    },
    /**
     * Represents the value of the currently checked button
     * inside a radio button group
     **/
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: !1,
      default: null
    },
    /**
     * Removes the ability to click or target the component.
     **/
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Sets radio button label
     **/
    label: {
      type: String,
      required: !0
    },
    /**
     * Sets value attribute of current radio button
     **/
    // eslint-disable-next-line vue/require-prop-types
    inputValue: {
      required: !0
    },
    /**
     * Sets the name of current radio button
     **/
    name: {
      type: String,
      required: !1,
      default: null
    }
  },
  computed: {
    isSelected: (e) => e.value ? e.value === e.inputValue : e.$parent.value === e.inputValue,
    widgetClass: (e) => ({
      "mw-ui-radio--selected": e.isSelected,
      "mw-ui-radio--disabled": e.disabled
    }),
    inputModel: {
      get() {
        return this.value || this.$parent.value;
      },
      set() {
        this.$emit("change", this.inputValue);
      }
    }
  }
}, ch = { class: "mw-ui-radio__controls" }, uh = ["id", "disabled", "name", "value"], dh = /* @__PURE__ */ w("span", { class: "mw-ui-radio__controls__icon" }, null, -1), gh = ["for", "textContent"];
function fh(e, t, n, o, s, a) {
  const i = v("mw-row");
  return _(), N(i, {
    class: _e(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: y(() => [
      w("div", ch, [
        H(w("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => a.inputModel = r),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, uh), [
          [Up, a.inputModel]
        ]),
        dh
      ]),
      w("label", {
        for: n.id,
        class: "ps-2",
        textContent: ae(n.label)
      }, null, 8, gh)
    ], void 0),
    _: 1
  }, 8, ["class"]);
}
const js = /* @__PURE__ */ q(lh, [["render", fh]]), gu = {
  name: "MwRadioGroup",
  components: { MwRadio: js },
  props: {
    /**
     * The value of the currently checked radio button.
     **/
    // eslint-disable-next-line vue/no-unused-properties
    value: {
      type: [String, Number],
      required: !0
    },
    /**
     * An array of objects that corresponds to the radio button to be created,
     * in { value: "", text: "", disabled: false } format.
     * If not provided, radio buttons should be explicitly defined inside
     * default slot
     **/
    items: {
      type: Array,
      required: !1,
      default: () => [],
      validator: (e) => e.every((t) => t.hasOwnProperty("value"))
    },
    /**
     * Sets the name for radio buttons inside group.
     * If not provided, a name will automatically be created
     **/
    name: {
      type: String,
      required: !0,
      // See explanation inside MWRadio about default id
      default() {
        return `radio-group-${Math.floor(Math.random() * 1e4)}`;
      }
    }
  },
  render(e, t) {
    let n = [];
    return e.items.length ? n = e.items.map(
      (o) => Ro(js, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Ro("div", { class: "mw-ui-radio-group" }, n);
  }
};
const ph = {
  name: "MwProgressBar",
  props: {
    value: {
      type: Number,
      required: !0
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 100
    },
    height: {
      type: String,
      default: "1rem"
    },
    width: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "#36c"
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    pending: {
      type: Boolean,
      default: !1
    },
    background: {
      type: String,
      default: null
    }
  },
  computed: {
    containerStyles: (e) => ({
      height: e.height,
      width: e.width || "unset",
      "background-color": e.background
    }),
    containerClass: (e) => ({
      "mw-progress-bar--pending": e.pending
    }),
    barStyles: (e) => ({
      width: `${e.percentage}%`,
      "background-color": e.color
    }),
    percentage: (e) => e.value / e.maxValue * 100,
    barClass: (e) => ({
      "mw-progress-bar__bar--indeterminate": e.indeterminate
    })
  }
}, mh = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function hh(e, t, n, o, s, a) {
  return _(), D("div", {
    class: _e(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: ot(a.containerStyles)
  }, [
    w("div", {
      class: _e(["mw-progress-bar__bar", a.barClass]),
      style: ot(a.barStyles)
    }, null, 6)
  ], 14, mh);
}
const fu = /* @__PURE__ */ q(ph, [["render", hh]]), _h = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), r = (d) => {
    o.value = !1;
    let c = Math.min(
      i + d.clientY - a,
      e.value
    );
    c = Math.max(c, t.value), n.value.style.height = c + "px";
  }, l = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      r,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      l,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", r, !1), document.documentElement.addEventListener("pointerup", l, !1);
}, vh = (e, t, n, o) => ({ initiateDrag: _h(
  e,
  t,
  n,
  o
) }), yh = (e, t, n, o) => {
  const s = Q(0), a = b(
    () => t.value > e.value
  ), i = b(
    () => t.value <= e.value * (s.value + 1)
  ), r = (d) => {
    s.value = d, n.value.scroll(0, e.value * s.value);
  };
  return {
    handleArrowUpClick: () => {
      if (!o.value) {
        n.value.style.removeProperty("height"), o.value = !0, r(0);
        return;
      }
      r(s.value - 1);
    },
    isScrolledToEnd: i,
    scrollToStepByIndex: r,
    scrollable: a,
    scrollIndex: s
  };
};
const bh = {
  name: "MwExpandableContent",
  components: {
    MwButton: be
  },
  props: {
    /**
     * The height of the content panel when it is collapsed
     */
    minHeight: {
      type: Number,
      required: !0
    },
    /**
     * Controls whether scroll functionality should be enabled
     */
    scroll: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = Q(!0), n = Q(null), o = b(
      () => Math.min(e.minHeight, s.value)
    ), s = Q(1), { initiateDrag: a } = vh(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: r,
      scrollIndex: l,
      scrollToStepByIndex: d,
      handleArrowUpClick: c
    } = yh(o, s, n, t), u = () => d(l.value + 1), g = Q(null), f = b(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const x = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, x) {
        let E = Math.min(x, s.value);
        E = Math.max(E, o.value), E === o.value && (t.value = !0), n.value.style.height = E + "px";
      }
    };
    return pt(() => W(this, null, function* () {
      var x;
      yield _o(), s.value = n.value.scrollHeight, (x = g.value) == null || x.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: f,
      dragIndicatorRef: g,
      handleArrowUpClick: c,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: $m,
      mwIconExpand: su,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: r,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, Sh = { class: "mw-ui-expandable-content__container" }, wh = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, Ch = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function xh(e, t, n, o, s, a) {
  const i = v("mw-button");
  return _(), D("div", {
    class: "mw-ui-expandable-content",
    style: ot(o.cssVars)
  }, [
    w("div", Sh, [
      w("div", {
        ref: "contentRef",
        class: _e(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        je(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (_(), D("div", wh, [
        p(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (_(), N(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : ie("", !0)
      ])) : ie("", !0)
    ]),
    w("div", Ch, [
      w("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...r) => o.onDragButtonClicked && o.onDragButtonClicked(...r))
      })
    ], 512)
  ], 4);
}
const Eh = /* @__PURE__ */ q(bh, [["render", xh]]);
const Ah = {
  name: "MwCircleProgressBar",
  props: {
    size: {
      type: Number,
      required: !0
    },
    percentage: {
      type: Number,
      required: !0
    },
    activeColor: {
      type: String,
      default: At.blue600
    },
    inactiveColor: {
      type: String,
      default: At.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = b(() => e.size / 2 * 0.9), n = b(() => Math.PI * (t.value * 2)), o = b(
      () => (100 - e.percentage) / 100 * n.value
    ), s = b(() => ({
      "--active-color": e.activeColor,
      "--inactive-color": e.inactiveColor,
      "--stroke-width": `${e.strokeWidth}px`
    })), a = `M ${e.size} 0 A ${e.size} ${e.size} 0 1 1 19 0`;
    return {
      cssVars: s,
      dashArray: n,
      path: a,
      radius: t,
      strokeDashOffset: o
    };
  }
}, kh = ["width", "height", "viewport"], Th = ["r", "cx", "cy", "stroke-dasharray"], Dh = ["r", "cx", "cy", "stroke-dasharray"];
function Lh(e, t, n, o, s, a) {
  return _(), D("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: ot(o.cssVars)
  }, [
    w("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Th),
    w("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: ot({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Dh)
  ], 12, kh);
}
const pu = /* @__PURE__ */ q(Ah, [["render", Lh]]), cn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, un = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${cn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${cn.tablet}px) and (max-width: ${cn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${cn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${cn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${cn.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${cn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${cn["desktop-wide"]}px)`
}, Aa = {
  mobile: () => matchMedia(un.mobile).matches,
  tablet: () => matchMedia(un.tablet).matches,
  desktop: () => matchMedia(un.desktop).matches,
  desktopwide: () => matchMedia(un["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(un["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(un["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(un["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(un["desktop-and-down"]).matches
}, Ph = {
  install: (e) => {
    const t = () => {
      for (let o in Aa)
        Aa.hasOwnProperty(o) && (n.value[o] = Aa[o]());
    }, n = Q({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = yt(lt({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, Nh = {
  install: (e) => {
    e.config.globalProperties.$mwui = yt(lt({}, e.config.globalProperties.$mwui || {}), {
      colors: At
    }), e.provide("colors", At);
  }
};
function Fh() {
  return mu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function mu() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Mh = typeof Proxy == "function", Oh = "devtools-plugin:setup", Ih = "plugin:settings:set";
let oo, si;
function Bh() {
  var e;
  return oo !== void 0 || (typeof window != "undefined" && window.performance ? (oo = !0, si = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (oo = !0, si = global.perf_hooks.performance) : oo = !1), oo;
}
function $h() {
  return Bh() ? si.now() : Date.now();
}
class Uh {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const r = t.settings[i];
        o[i] = r.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), r = JSON.parse(i);
      Object.assign(a, r);
    } catch (i) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch (r) {
        }
        a = i;
      },
      now() {
        return $h();
      }
    }, n && n.on(Ih, (i, r) => {
      i === this.plugin.id && this.fallbacks.setSettings(r);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, r) => this.target ? this.target.on[r] : (...l) => {
        this.onQueue.push({
          method: r,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, r) => this.target ? this.target[r] : r === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(r) ? (...l) => (this.targetQueue.push({
        method: r,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[r](...l)) : (...l) => new Promise((d) => {
        this.targetQueue.push({
          method: r,
          args: l,
          resolve: d
        });
      })
    });
  }
  setRealTarget(t) {
    return W(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function hu(e, t) {
  const n = e, o = mu(), s = Fh(), a = Mh && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Oh, e, t);
  else {
    const i = a ? new Uh(n, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var _u = "store";
function te(e) {
  return e === void 0 && (e = null), Ke(e !== null ? e : _u);
}
function Qn(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function vu(e) {
  return e !== null && typeof e == "object";
}
function Rh(e) {
  return e && typeof e.then == "function";
}
function Nt(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Vh(e, t) {
  return function() {
    return e(t);
  };
}
function yu(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var o = t.indexOf(e);
    o > -1 && t.splice(o, 1);
  };
}
function bu(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  ra(e, n, [], e._modules.root, !0), Hi(e, n, t);
}
function Hi(e, t, n) {
  var o = e._state, s = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var a = e._wrappedGetters, i = {}, r = {}, l = cg(!0);
  l.run(function() {
    Qn(a, function(d, c) {
      i[c] = Vh(d, e), r[c] = b(function() {
        return i[c]();
      }), Object.defineProperty(e.getters, c, {
        get: function() {
          return r[c].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = ho({
    data: t
  }), e._scope = l, e.strict && Gh(e), o && n && e._withCommit(function() {
    o.data = null;
  }), s && s.stop();
}
function ra(e, t, n, o, s) {
  var a = !n.length, i = e._modules.getNamespace(n);
  if (o.namespaced && (e._modulesNamespaceMap[i] && {}.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = o), !a && !s) {
    var r = qi(t, n.slice(0, -1)), l = n[n.length - 1];
    e._withCommit(function() {
      ({}).NODE_ENV !== "production" && l in r && console.warn(
        '[vuex] state field "' + l + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), r[l] = o.state;
    });
  }
  var d = o.context = zh(e, i, n);
  o.forEachMutation(function(c, u) {
    var g = i + u;
    jh(e, g, c, d);
  }), o.forEachAction(function(c, u) {
    var g = c.root ? u : i + u, f = c.handler || c;
    Hh(e, g, f, d);
  }), o.forEachGetter(function(c, u) {
    var g = i + u;
    qh(e, g, c, d);
  }), o.forEachChild(function(c, u) {
    ra(e, t, n.concat(u), c, s);
  });
}
function zh(e, t, n) {
  var o = t === "", s = {
    dispatch: o ? e.dispatch : function(a, i, r) {
      var l = Hs(a, i, r), d = l.payload, c = l.options, u = l.type;
      if ((!c || !c.root) && (u = t + u, {}.NODE_ENV !== "production" && !e._actions[u])) {
        console.error("[vuex] unknown local action type: " + l.type + ", global type: " + u);
        return;
      }
      return e.dispatch(u, d);
    },
    commit: o ? e.commit : function(a, i, r) {
      var l = Hs(a, i, r), d = l.payload, c = l.options, u = l.type;
      if ((!c || !c.root) && (u = t + u, {}.NODE_ENV !== "production" && !e._mutations[u])) {
        console.error("[vuex] unknown local mutation type: " + l.type + ", global type: " + u);
        return;
      }
      e.commit(u, d, c);
    }
  };
  return Object.defineProperties(s, {
    getters: {
      get: o ? function() {
        return e.getters;
      } : function() {
        return Su(e, t);
      }
    },
    state: {
      get: function() {
        return qi(e.state, n);
      }
    }
  }), s;
}
function Su(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {}, o = t.length;
    Object.keys(e.getters).forEach(function(s) {
      if (s.slice(0, o) === t) {
        var a = s.slice(o);
        Object.defineProperty(n, a, {
          get: function() {
            return e.getters[s];
          },
          enumerable: !0
        });
      }
    }), e._makeLocalGettersCache[t] = n;
  }
  return e._makeLocalGettersCache[t];
}
function jh(e, t, n, o) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function(i) {
    n.call(e, o.state, i);
  });
}
function Hh(e, t, n, o) {
  var s = e._actions[t] || (e._actions[t] = []);
  s.push(function(i) {
    var r = n.call(e, {
      dispatch: o.dispatch,
      commit: o.commit,
      getters: o.getters,
      state: o.state,
      rootGetters: e.getters,
      rootState: e.state
    }, i);
    return Rh(r) || (r = Promise.resolve(r)), e._devtoolHook ? r.catch(function(l) {
      throw e._devtoolHook.emit("vuex:error", l), l;
    }) : r;
  });
}
function qh(e, t, n, o) {
  if (e._wrappedGetters[t]) {
    ({}).NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  e._wrappedGetters[t] = function(a) {
    return n(
      o.state,
      // local state
      o.getters,
      // local getters
      a.state,
      // root state
      a.getters
      // root getters
    );
  };
}
function Gh(e) {
  He(function() {
    return e._state.data;
  }, function() {
    ({}).NODE_ENV !== "production" && Nt(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function qi(e, t) {
  return t.reduce(function(n, o) {
    return n[o];
  }, e);
}
function Hs(e, t, n) {
  return vu(e) && e.type && (n = t, t = e, e = e.type), {}.NODE_ENV !== "production" && Nt(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var Wh = "vuex bindings", sl = "vuex:mutations", ka = "vuex:actions", so = "vuex", Kh = 0;
function Xh(e, t) {
  hu(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Wh]
    },
    function(n) {
      n.addTimelineLayer({
        id: sl,
        label: "Vuex Mutations",
        color: al
      }), n.addTimelineLayer({
        id: ka,
        label: "Vuex Actions",
        color: al
      }), n.addInspector({
        id: so,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(o) {
        if (o.app === e && o.inspectorId === so)
          if (o.filter) {
            var s = [];
            Eu(s, t._modules.root, o.filter, ""), o.rootNodes = s;
          } else
            o.rootNodes = [
              xu(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(o) {
        if (o.app === e && o.inspectorId === so) {
          var s = o.nodeId;
          Su(t, s), o.state = Zh(
            e_(t._modules, s),
            s === "root" ? t.getters : t._makeLocalGettersCache,
            s
          );
        }
      }), n.on.editInspectorState(function(o) {
        if (o.app === e && o.inspectorId === so) {
          var s = o.nodeId, a = o.path;
          s !== "root" && (a = s.split("/").filter(Boolean).concat(a)), t._withCommit(function() {
            o.set(t._state.data, a, o.state.value);
          });
        }
      }), t.subscribe(function(o, s) {
        var a = {};
        o.payload && (a.payload = o.payload), a.state = s, n.notifyComponentUpdate(), n.sendInspectorTree(so), n.sendInspectorState(so), n.addTimelineEvent({
          layerId: sl,
          event: {
            time: Date.now(),
            title: o.type,
            data: a
          }
        });
      }), t.subscribeAction({
        before: function(o, s) {
          var a = {};
          o.payload && (a.payload = o.payload), o._id = Kh++, o._time = Date.now(), a.state = s, n.addTimelineEvent({
            layerId: ka,
            event: {
              time: o._time,
              title: o.type,
              groupId: o._id,
              subtitle: "start",
              data: a
            }
          });
        },
        after: function(o, s) {
          var a = {}, i = Date.now() - o._time;
          a.duration = {
            _custom: {
              type: "duration",
              display: i + "ms",
              tooltip: "Action duration",
              value: i
            }
          }, o.payload && (a.payload = o.payload), a.state = s, n.addTimelineEvent({
            layerId: ka,
            event: {
              time: Date.now(),
              title: o.type,
              groupId: o._id,
              subtitle: "end",
              data: a
            }
          });
        }
      });
    }
  );
}
var al = 8702998, Yh = 6710886, Jh = 16777215, wu = {
  label: "namespaced",
  textColor: Jh,
  backgroundColor: Yh
};
function Cu(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function xu(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: Cu(t),
    tags: e.namespaced ? [wu] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return xu(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function Eu(e, t, n, o) {
  o.includes(n) && e.push({
    id: o || "root",
    label: o.endsWith("/") ? o.slice(0, o.length - 1) : o || "Root",
    tags: t.namespaced ? [wu] : []
  }), Object.keys(t._children).forEach(function(s) {
    Eu(e, t._children[s], n, o + s + "/");
  });
}
function Zh(e, t, n) {
  t = n === "root" ? t : t[n];
  var o = Object.keys(t), s = {
    state: Object.keys(e.state).map(function(i) {
      return {
        key: i,
        editable: !0,
        value: e.state[i]
      };
    })
  };
  if (o.length) {
    var a = Qh(t);
    s.getters = Object.keys(a).map(function(i) {
      return {
        key: i.endsWith("/") ? Cu(i) : i,
        editable: !1,
        value: ai(function() {
          return a[i];
        })
      };
    });
  }
  return s;
}
function Qh(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var o = n.split("/");
    if (o.length > 1) {
      var s = t, a = o.pop();
      o.forEach(function(i) {
        s[i] || (s[i] = {
          _custom: {
            value: {},
            display: i,
            tooltip: "Module",
            abstract: !0
          }
        }), s = s[i]._custom.value;
      }), s[a] = ai(function() {
        return e[n];
      });
    } else
      t[n] = ai(function() {
        return e[n];
      });
  }), t;
}
function e_(e, t) {
  var n = t.split("/").filter(function(o) {
    return o;
  });
  return n.reduce(
    function(o, s, a) {
      var i = o[s];
      if (!i)
        throw new Error('Missing module "' + s + '" for path "' + t + '".');
      return a === n.length - 1 ? i : i._children;
    },
    t === "root" ? e : e.root._children
  );
}
function ai(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var It = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var o = t.state;
  this.state = (typeof o == "function" ? o() : o) || {};
}, Au = { namespaced: { configurable: !0 } };
Au.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
It.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
It.prototype.removeChild = function(t) {
  delete this._children[t];
};
It.prototype.getChild = function(t) {
  return this._children[t];
};
It.prototype.hasChild = function(t) {
  return t in this._children;
};
It.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
It.prototype.forEachChild = function(t) {
  Qn(this._children, t);
};
It.prototype.forEachGetter = function(t) {
  this._rawModule.getters && Qn(this._rawModule.getters, t);
};
It.prototype.forEachAction = function(t) {
  this._rawModule.actions && Qn(this._rawModule.actions, t);
};
It.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && Qn(this._rawModule.mutations, t);
};
Object.defineProperties(It.prototype, Au);
var eo = function(t) {
  this.register([], t, !1);
};
eo.prototype.get = function(t) {
  return t.reduce(function(n, o) {
    return n.getChild(o);
  }, this.root);
};
eo.prototype.getNamespace = function(t) {
  var n = this.root;
  return t.reduce(function(o, s) {
    return n = n.getChild(s), o + (n.namespaced ? s + "/" : "");
  }, "");
};
eo.prototype.update = function(t) {
  ku([], this.root, t);
};
eo.prototype.register = function(t, n, o) {
  var s = this;
  o === void 0 && (o = !0), {}.NODE_ENV !== "production" && Tu(t, n);
  var a = new It(n, o);
  if (t.length === 0)
    this.root = a;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], a);
  }
  n.modules && Qn(n.modules, function(r, l) {
    s.register(t.concat(l), r, o);
  });
};
eo.prototype.unregister = function(t) {
  var n = this.get(t.slice(0, -1)), o = t[t.length - 1], s = n.getChild(o);
  if (!s) {
    ({}).NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + o + "', which is not registered"
    );
    return;
  }
  s.runtime && n.removeChild(o);
};
eo.prototype.isRegistered = function(t) {
  var n = this.get(t.slice(0, -1)), o = t[t.length - 1];
  return n ? n.hasChild(o) : !1;
};
function ku(e, t, n) {
  if ({}.NODE_ENV !== "production" && Tu(e, n), t.update(n), n.modules)
    for (var o in n.modules) {
      if (!t.getChild(o)) {
        ({}).NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + o + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      ku(
        e.concat(o),
        t.getChild(o),
        n.modules[o]
      );
    }
}
var il = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, t_ = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, rl = {
  getters: il,
  mutations: il,
  actions: t_
};
function Tu(e, t) {
  Object.keys(rl).forEach(function(n) {
    if (t[n]) {
      var o = rl[n];
      Qn(t[n], function(s, a) {
        Nt(
          o.assert(s),
          n_(e, n, a, s, o.expected)
        );
      });
    }
  });
}
function n_(e, t, n, o, s) {
  var a = t + " should be " + s + ' but "' + t + "." + n + '"';
  return e.length > 0 && (a += ' in module "' + e.join(".") + '"'), a += " is " + JSON.stringify(o) + ".", a;
}
function o_(e) {
  return new _t(e);
}
var _t = function e(t) {
  var n = this;
  t === void 0 && (t = {}), {}.NODE_ENV !== "production" && (Nt(typeof Promise != "undefined", "vuex requires a Promise polyfill in this browser."), Nt(this instanceof e, "store must be called with the new operator."));
  var o = t.plugins;
  o === void 0 && (o = []);
  var s = t.strict;
  s === void 0 && (s = !1);
  var a = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new eo(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = a;
  var i = this, r = this, l = r.dispatch, d = r.commit;
  this.dispatch = function(g, f) {
    return l.call(i, g, f);
  }, this.commit = function(g, f, m) {
    return d.call(i, g, f, m);
  }, this.strict = s;
  var c = this._modules.root.state;
  ra(this, c, [], this._modules.root), Hi(this, c), o.forEach(function(u) {
    return u(n);
  });
}, Gi = { state: { configurable: !0 } };
_t.prototype.install = function(t, n) {
  t.provide(n || _u, this), t.config.globalProperties.$store = this;
  var o = this._devtools !== void 0 ? this._devtools : {}.NODE_ENV !== "production" || !1;
  o && Xh(t, this);
};
Gi.state.get = function() {
  return this._state.data;
};
Gi.state.set = function(e) {
  ({}).NODE_ENV !== "production" && Nt(!1, "use store.replaceState() to explicit replace store state.");
};
_t.prototype.commit = function(t, n, o) {
  var s = this, a = Hs(t, n, o), i = a.type, r = a.payload, l = a.options, d = { type: i, payload: r }, c = this._mutations[i];
  if (!c) {
    ({}).NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + i);
    return;
  }
  this._withCommit(function() {
    c.forEach(function(g) {
      g(r);
    });
  }), this._subscribers.slice().forEach(function(u) {
    return u(d, s.state);
  }), {}.NODE_ENV !== "production" && l && l.silent && console.warn(
    "[vuex] mutation type: " + i + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
_t.prototype.dispatch = function(t, n) {
  var o = this, s = Hs(t, n), a = s.type, i = s.payload, r = { type: a, payload: i }, l = this._actions[a];
  if (!l) {
    ({}).NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + a);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(c) {
      return c.before;
    }).forEach(function(c) {
      return c.before(r, o.state);
    });
  } catch (c) {
    ({}).NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(c));
  }
  var d = l.length > 1 ? Promise.all(l.map(function(c) {
    return c(i);
  })) : l[0](i);
  return new Promise(function(c, u) {
    d.then(function(g) {
      try {
        o._actionSubscribers.filter(function(f) {
          return f.after;
        }).forEach(function(f) {
          return f.after(r, o.state);
        });
      } catch (f) {
        ({}).NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(f));
      }
      c(g);
    }, function(g) {
      try {
        o._actionSubscribers.filter(function(f) {
          return f.error;
        }).forEach(function(f) {
          return f.error(r, o.state, g);
        });
      } catch (f) {
        ({}).NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(f));
      }
      u(g);
    });
  });
};
_t.prototype.subscribe = function(t, n) {
  return yu(t, this._subscribers, n);
};
_t.prototype.subscribeAction = function(t, n) {
  var o = typeof t == "function" ? { before: t } : t;
  return yu(o, this._actionSubscribers, n);
};
_t.prototype.watch = function(t, n, o) {
  var s = this;
  return {}.NODE_ENV !== "production" && Nt(typeof t == "function", "store.watch only accepts a function."), He(function() {
    return t(s.state, s.getters);
  }, n, Object.assign({}, o));
};
_t.prototype.replaceState = function(t) {
  var n = this;
  this._withCommit(function() {
    n._state.data = t;
  });
};
_t.prototype.registerModule = function(t, n, o) {
  o === void 0 && (o = {}), typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && (Nt(Array.isArray(t), "module path must be a string or an Array."), Nt(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), ra(this, this.state, t, this._modules.get(t), o.preserveState), Hi(this, this.state);
};
_t.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var o = qi(n.state, t.slice(0, -1));
    delete o[t[t.length - 1]];
  }), bu(this);
};
_t.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
_t.prototype.hotUpdate = function(t) {
  this._modules.update(t), bu(this, !0);
};
_t.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties(_t.prototype, Gi);
var s_ = i_(function(e, t) {
  var n = {};
  return {}.NODE_ENV !== "production" && !Du(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), a_(t).forEach(function(o) {
    var s = o.key, a = o.val;
    n[s] = function() {
      var r = this.$store.state, l = this.$store.getters;
      if (e) {
        var d = r_(this.$store, "mapState", e);
        if (!d)
          return;
        r = d.context.state, l = d.context.getters;
      }
      return typeof a == "function" ? a.call(this, r, l) : r[a];
    }, n[s].vuex = !0;
  }), n;
});
function a_(e) {
  return Du(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function Du(e) {
  return Array.isArray(e) || vu(e);
}
function i_(e) {
  return function(t, n) {
    return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
  };
}
function r_(e, t, n) {
  var o = e._modulesNamespaceMap[n];
  return {}.NODE_ENV !== "production" && !o && console.error("[vuex] module namespace not found in " + t + "(): " + n), o;
}
class yo extends Error {
}
const l_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new yo();
}), Lu = { assertUser: l_ };
const c_ = { class: "pa-4 sx-login-dialog__header" }, u_ = { class: "sx-login-dialog__body px-6 pb-4" }, d_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, g_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = te(), n = b(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = Q(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const r = Ee("i18n");
      return n.value ? (_(), N(pe(Ot), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: y(() => [
          w("div", c_, [
            H(w("h4", null, null, 512), [
              [r, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: y(() => [
          H(w("div", u_, null, 512), [
            [r, void 0, "cx-sx-login-dialog-body"]
          ]),
          w("div", d_, [
            p(pe(be), {
              type: "text",
              progressive: "",
              label: a.$i18n("cx-sx-login-dialog-button-label"),
              href: s.value,
              target: "_blank"
            }, null, 8, ["label", "href"])
          ])
        ], void 0),
        _: 1
      })) : ie("", !0);
    };
  }
};
const f_ = {
  __name: "App",
  setup(e) {
    const t = te(), n = b(
      () => t.state.application.autoSavePending
    );
    return pt(() => {
      window.addEventListener("beforeunload", (o) => {
        n.value && (o.preventDefault(), o.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (o) => {
        document.visibilityState === "visible" && Lu.assertUser().then(() => t.commit("application/setIsLoginDialogOn", !1)).catch((s) => {
          s instanceof yo && t.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (o, s) => {
      const a = v("router-view");
      return _(), N(pe(tu), { id: "contenttranslation" }, {
        default: y(() => [
          p(pe(Se), { class: "cx-container" }, {
            default: y(() => [
              p(pe(xe), { cols: "12" }, {
                default: y(() => [
                  p(a, null, {
                    default: y(({ Component: i, route: r }) => [
                      p(bn, {
                        name: r.meta.transitionName
                      }, {
                        default: y(() => [
                          (_(), N(vo(i)))
                        ], void 0, !0),
                        _: 2
                      }, 1032, ["name"]),
                      p(g_)
                    ]),
                    _: 1
                  })
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      });
    };
  }
}, p_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, m_ = {
  /**
   * @param {Object} state
   * @return {function(string, string): Translation[]}
   */
  getPublishedTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.status === "published"
  ),
  getTranslationsByStatus: (e) => (
    /**
     * @param {"draft"|"published"} status
     * @return {Translation[]}
     */
    (t) => e.translations.filter(
      (n) => n.status === t
    )
  ),
  userHasSectionTranslations: (e) => e.translations.some(
    (t) => !!t.sectionTranslationId
  ),
  /**
   * @param state
   * @return {function(sourceLanguage: string, targetLanguage: string): Translation[]}
   */
  getAllTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ),
  getDraftTranslation: (e) => (t, n, o, s) => e.translations.filter((a) => a.status === "draft").find(
    /** @param {DraftTranslation} translation */
    (a) => a.sourceTitle === t && a.sourceSectionTitle === n && a.sourceLanguage === o && a.targetLanguage === s
  ),
  translationExists: (e) => (
    /**
     * @param {Translation} translation
     */
    (t) => {
      const n = e.translations.filter(
        (a) => a.status === t.status
      ), o = n.some(
        (a) => !!a.sectionTranslationId && a.sectionTranslationId === t.sectionTranslationId
      ), s = n.some(
        (a) => !a.sectionTranslationId && a.translationId === t.translationId
      );
      return o || s;
    }
  )
}, h_ = [
  "cjy-hans",
  "cjy-hant",
  "gan-hans",
  "gan",
  "hak-hans",
  "hak-hant",
  "hsn",
  "ii",
  "ja",
  "jje",
  "ko-kp",
  "ko",
  "lzh",
  "ryu",
  "wuu",
  "yue",
  "zh",
  "zh-cn",
  "zh-hans",
  "zh-hant",
  "zh-hk",
  "zh-mo",
  "zh-my",
  "zh-sg",
  "zh-tw"
], __ = (e, t, n) => {
  let o, s, a, i, r;
  return !e || !t ? 0 : e === t ? 1 : (s = i = ll(e, n), a = r = ll(t, n), r.length > i.length && (s = r, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, ll = function(e, t) {
  return e ? h_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, v_ = 95, y_ = 85, b_ = [
  { status: "failure", value: 100 - v_ },
  { status: "warning", value: 100 - y_ },
  { status: "success", value: 100 }
], Pu = (e, t, n) => {
  const o = cl(e).textContent, s = cl(t).textContent, a = 100 - 100 * __(s, o, n);
  return Math.ceil(a);
}, S_ = (e) => b_.find((t) => e <= t.value).status, w_ = (e, t) => Pu(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), cl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, An = { calculateScore: Pu, getScoreStatus: S_, getMTScoreForPageSection: w_ }, Ta = "original", Da = "empty", C_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class Re {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      Ta,
      Da
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return C_[t] || t;
  }
  /**
   * Given a language pair, this static method returns the key to be used to store the
   * preferred MT provider for this language pair inside localStorage (Web Storage API)
   *
   *
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   */
  static getStorageKey(t, n) {
    return ["cxMTProvider", t, n].join("-");
  }
  static get ORIGINAL_TEXT_PROVIDER_KEY() {
    return Ta;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Da;
  }
  static isUserMTProvider(t) {
    return [Ta, Da].includes(
      t
    );
  }
}
const Ie = new mw.cx.SiteMapper(), x_ = mw.util.getUrl, E_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Nu {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class po {
  /**
   * @param {Object} options
   * @param {string} [options.text] Plain text (HTML not accepted)
   * @param {string} [options.title] Plain text (HTML not accepted)
   * @param {"mt"|"generic"|"captcha"} [options.type]
   * @param {"warning"|"error"} [options.status]
   * @param {CaptchaDetails|null} [options.details] an object containing details for the message. Currently, only used for CAPTCHA support.
   */
  constructor({
    text: t = "",
    title: n = "",
    type: o = "generic",
    status: s,
    details: a = null
  }) {
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Nu(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const ul = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => yt(lt({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class A_ {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"MinT"|"Google"|"Yandex"
   * @param {number} unit.sequenceId
   */
  constructor({ user: t, source: n, mt: o, sequenceId: s }) {
    this.user = t, this.source = n, this.mt = o, this.sequenceId = s;
  }
  /**
   * @return {Node}
   */
  get sourceSectionEl() {
    const t = document.createElement("div");
    return t.innerHTML = this.source.content, t.firstChild;
  }
  /**
   * @return {number}
   */
  get pageSectionId() {
    return parseInt(this.sourceSectionEl.dataset.mwSectionNumber);
  }
  get subSectionId() {
    return this.sourceSectionEl.id.replace(/\D/g, "");
  }
  /**
   * @return {{mt: object, id: string, user: object}[]}
   */
  get segments() {
    var s, a;
    const t = ul((s = this.user) == null ? void 0 : s.content), n = ul((a = this.mt) == null ? void 0 : a.content);
    return [
      .../* @__PURE__ */ new Set([
        ...Object.keys(t),
        ...Object.keys(n)
      ])
    ].map((i) => ({
      id: i,
      mt: n[i] || null,
      user: t[i] || null
    }));
  }
}
class os {
  /**
   * @param {number} sectionTranslationId
   * @param {number} translationId
   * @param {string} sourceTitle
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} startTimestamp
   * @param {string} lastUpdatedTimestamp
   * @param {string} pageRevision
   * @param {string} status
   * @param {string|null} targetTitle
   */
  constructor({
    translationId: t,
    sourceTitle: n,
    sourceLanguage: o,
    targetLanguage: s,
    startTimestamp: a,
    lastUpdatedTimestamp: i,
    pageRevision: r,
    status: l,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = r, this.status = l, this.targetTitle = d;
  }
}
class _n {
  /**
   * @param {Object} options
   * @param {string} options.id
   * @param {string} options.originalContent
   * @param {string} options.translatedContent
   * @param {Element} options.node
   * @param {Object<string, string>} options.proposedTranslations
   * @param {boolean} options.selected
   */
  constructor({
    id: t,
    originalContent: n,
    translatedContent: o = "",
    node: s = null,
    proposedTranslations: a = {},
    selected: i = !1
  } = {}) {
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = yt(lt({}, a), {
      [Re.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [Re.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [Re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[Re.ORIGINAL_TEXT_PROVIDER_KEY];
  }
  /**
   * @return {string}
   */
  get content() {
    return this.translatedContent || this.originalContent;
  }
  /**
   * @return {boolean}
   */
  get isTranslated() {
    return this.translatedContent !== "";
  }
  get mtProposedTranslationUsed() {
    return this.proposedTranslations[this.mtProviderUsed];
  }
  /**
   * This method sets the proposed translation for the given MT provider,
   * inside "proposedTranslations" object property.
   *
   * @param {string} mtProvider
   * @param {string} proposedTranslation
   */
  addProposedTranslation(t, n) {
    this.originalContent.endsWith(" ") && !n.endsWith(" ") && (n += " "), this.proposedTranslations[t] = n;
  }
}
const dl = (e) => {
  var n;
  const t = qs(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, qs = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Rn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Fu = (e) => {
  const t = qs(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = k_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, k_ = (e) => {
  let t = e, n = "", o = !1, s = 0, a = 0;
  for (; t.length > 0; ) {
    const i = t.match(
      /(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/
    );
    if (!i) {
      n += t;
      break;
    }
    if (n += t.slice(0, i.index), t = t.slice(i.index + i[0].length), o)
      i[0] === "</nowiki>" && (o = !1), n += i[0];
    else {
      let r = !0;
      i[0] === "<nowiki>" ? (o = !0, r = !1) : i[0] === "</nowiki>" || i[0].match(/<nowiki\s*\/>/) ? r = !1 : i[0].match(/(?:\[\[)/) ? (a++, r = !1) : i[0].match(/(?:\]\])/) ? a > 0 && (a--, r = !1) : i[0].match(/(?:\{\{)/) ? (s++, r = !1) : i[0].match(/(?:\}\})/) ? s > 0 && (s--, r = !1) : i[0].match(/\|+/) && (s > 0 || a > 0) && (r = !1), r ? n += "<nowiki>" + i[0] + "</nowiki>" : n += i[0];
    }
  }
  return n;
}, Mu = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Ou = (e) => {
  const t = Mu(e);
  return t == null ? void 0 : t.targetExists;
};
class La {
  /**
   * @param {string} baseSectionId the base section id that will be used as "cxsx_section_id" inside "cx_section_translations" for the page section that the translation unit belongs to
   * @param {string} subSectionId the id of the subsection that the translation unit belongs to
   * @param {string} content the content of the translated translation unit (i.e. subsection)
   * @param {boolean} validate abuse filter validation flag
   * @param {string} origin the content origin, i.e. the most used MT provider for this subsection
   */
  constructor({
    baseSectionId: t,
    subSectionId: n,
    content: o,
    validate: s = !1,
    origin: a
  } = {}) {
    this.baseSectionId = t, this.subSectionId = n, this.content = o, this.validate = s, this.origin = a;
  }
  /**
   * This getter returns the value to be stored as "cxc_section_id" field inside "cx_corpora" table,
   * in the following form: "{page_revision_id}_{page_section_id}_{subsection_id}"
   *
   * @returns {string}
   */
  get sectionId() {
    return `${this.baseSectionId}_${this.subSectionId}`;
  }
  /**
   * @returns {{origin: string, sectionId: string, content: string, validate: boolean}}
   */
  get payload() {
    return {
      content: this.content,
      sectionId: this.sectionId,
      origin: this.origin,
      validate: !1
    };
  }
}
let bt = class {
  /**
   * @param {Object} options
   * @param {SectionSentence[]} options.sentences
   * @param {HTMLElement} options.node
   */
  constructor({ sentences: t, node: n }) {
    this.id = n.id.replace(/\D/g, ""), this.sentences = t, this.node = n, this.blockTemplateSelected = !1, this.blockTemplateTranslatedContent = "", this.blockTemplateProposedTranslations = {}, this.blockTemplateAdaptationInfo = {}, this.blockTemplateMTProviderUsed = "", this.editedTranslation = null, this.corporaRestoredUnit = null;
  }
  reset() {
    this.blockTemplateSelected = !1, this.blockTemplateTranslatedContent = "", this.blockTemplateProposedTranslations = {}, this.blockTemplateAdaptationInfo = {}, this.blockTemplateMTProviderUsed = "", this.editedTranslation = null, this.corporaRestoredUnit = null, this.sentences.forEach((t) => t.reset());
  }
  /**
   * Given the MT provider and the HTML string of the template as returned by cxserver,
   * this method checks if the HTML contains any nested transclusion node and if the template
   * actually exists in the target language (based on the adaptation information provided by
   * cxserver through the data-cx attribute) and in case the above conditions are met, it sets
   * a key-value pair to the "blockTemplateAdaptationInfo" for this subsection, with the key
   * being the given MT provider and the value being the parsed JSON object that was stored
   * inside the data-cx attribute of the template HTML.
   *
   * @param {string} provider the MT provider used for the template translation
   * @param {string} templateHtml the HTML string of the template
   */
  setBlockTemplateAdaptationInfoByHtml(t, n) {
    let o = document.createElement("div");
    o.innerHTML = n, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
    const s = Array.from(o.children).find(
      (a) => Rn(a)
    );
    s && Ou(s) && (this.blockTemplateAdaptationInfo[t] = Mu(s));
  }
  /**
   * @return {boolean}
   */
  get isHeadingSection() {
    return this.node.firstElementChild instanceof HTMLHeadingElement;
  }
  get originalHtml() {
    return this.node.outerHTML;
  }
  /**
   * This getter returns a string containing the translated content
   * of this subsection. If the subsection is a block template, it
   * returns the translated contents of this template. If not, it
   * returns the contents of all translated sentences within this
   * section.
   *
   * @return {string}
   */
  get translatedContent() {
    if (this.editedTranslation !== null)
      return this.editedTranslation;
    if (this.isBlockTemplate)
      return this.blockTemplateTranslatedContent;
    const t = this.node.cloneNode(!0);
    return Array.from(
      t.getElementsByClassName("cx-segment")
    ).forEach((o) => {
      const s = this.getSentenceById(o.dataset.segmentid);
      if (s.isTranslated) {
        o.innerHTML = s.translatedContent;
        return;
      }
      o.parentNode.removeChild(o);
    }), t.innerHTML;
  }
  /**
   * This getter returns the proposed translation that was used for translating
   * the current subSection. If the current subSection is a block template,
   * then the proposed translation that was used for this block template is
   * returned. If not, then the proposed translations that was used for
   * translating each translated section sentence are returned.
   *
   * @returns {string|null}
   */
  get proposedContentForMTValidation() {
    if (this.isBlockTemplate)
      return this.blockTemplateProposedTranslations[this.blockTemplateMTProviderUsed];
    const t = this.node.cloneNode(!0);
    return Array.from(
      t.getElementsByClassName("cx-segment")
    ).forEach((o) => {
      const s = this.getSentenceById(o.dataset.segmentid);
      if (s.isTranslated) {
        o.innerHTML = s.mtProposedTranslationUsed;
        return;
      }
      o.parentNode.removeChild(o);
    }), t.innerHTML;
  }
  get isTranslated() {
    return this.editedTranslation ? !0 : this.isBlockTemplate ? !!this.blockTemplateTranslatedContent : this.sentences.some((t) => t.isTranslated);
  }
  get targetSectionId() {
    return `cxTargetSection${this.id}`;
  }
  /**
   * @param id
   * @return {SectionSentence}
   */
  getSentenceById(t) {
    return this.sentences.find((n) => n.id === t);
  }
  /**
   * This getter returns a boolean indicating whether this subsection
   * has been selected as a block template or not.
   *
   * @type {boolean}
   */
  get selected() {
    return this.isBlockTemplate && this.blockTemplateSelected;
  }
  /**
   * This getters returns a boolean indicating whether
   * this subsection is a block template or not.
   *
   * @return {boolean}
   */
  get isBlockTemplate() {
    return !!this.transclusionNode;
  }
  /**
   * This getter returns the first transclusion node
   * inside this subsection, if it exists or null.
   * otherwise.
   *
   * @return {HTMLElement|null}
   */
  get transclusionNode() {
    return Array.from(this.node.children).find(
      (t) => Rn(t)
    );
  }
  /**
   * This method returns an object containing the source template parameters
   * and their values, in the following form:
   * { paramName1: { wt: "paramValue1" }, paramName2: { wt: "paramValue2" } }
   *
   * @return {object}
   */
  get sourceTemplateParams() {
    const t = qs(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? dl(this.transclusionNode) : null;
  }
  /**
   * Given an MT provider, this method returns an object containing the
   * target template parameters and their values, in the following form:
   * { paramName1: { wt: "paramValue1" }, paramName2: { wt: "paramValue2" } }
   *
   * @param {string} provider MT provider
   * @return {Element}
   */
  getTargetTemplateNodeByProvider(t) {
    if (!this.blockTemplateProposedTranslations[t])
      return null;
    const n = document.createElement("div");
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Rn(o));
  }
  /**
   * Given an MT provider, this method returns the template
   * name based on the corresponding proposed translation of
   * a block template subsection. If the block template
   * translation has not yet been fetched, null is returned.
   * If the translation has been fetched but no template node
   * can be found, then an empty string is returned.
   *
   * @param {string} provider MT provider
   * @return {string|null} Target block template name
   */
  getTargetBlockTemplateNameByProvider(t) {
    const n = this.getTargetTemplateNodeByProvider(t);
    return n && dl(n) || "";
  }
  /**
   * Given an MT provider, this method returns an object containing the
   * target template parameters and their values, in the following form:
   * { paramName1: { wt: "paramValue1" }, paramName2: { wt: "paramValue2" } }
   *
   * @param {string} provider MT provider
   * @return {object|null}
   */
  getTargetTemplateParamsByProvider(t) {
    const n = this.getTargetTemplateNodeByProvider(t);
    if (!n)
      return null;
    const o = qs(n);
    return (o == null ? void 0 : o.params) || null;
  }
  /**
   * This getter returns the translation units, nested inside
   * this subsection. If the subsection is a block template,
   * an array containing only the current subsection model is
   * returned. Otherwise, an array including all nested section
   * sentences is returned.
   *
   * @return {SubSection[]|SectionSentence[]}
   */
  get translationUnits() {
    return this.isBlockTemplate ? [this] : this.sentences;
  }
  /**
   *
   * @param {string} baseSectionId the base section id that will be used as "cxsx_section_id" inside "cx_section_translations"
   * @returns {TranslationUnitPayload[]}
   */
  getParallelCorporaTranslationPayloads(t) {
    const n = this.node.cloneNode(!0);
    n.setAttribute(
      "data-mw-cx-source",
      this.mtProviderUsed
    ), n.innerHTML = this.translatedContent;
    const o = Array.from(n.children).find(
      (a) => Rn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new La({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new La({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new La({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.parallelCorporaMTContent,
        origin: this.mtProviderUsed
      })
    ), s;
  }
  /**
   * This getter returns:
   * 1. if the subsection is an adapted block template, it returns the MT provider
   * selected when the template was adapted
   * 2. if not, it returns the MT provider used to translate the first translated
   * sentence of the subsection
   * 3. if section is not translated, it returns null
   * @return {string|null}
   */
  get mtProviderUsed() {
    var t, n;
    return this.blockTemplateMTProviderUsed ? this.blockTemplateMTProviderUsed : ((n = (t = this.translatedSentences) == null ? void 0 : t[0]) == null ? void 0 : n.mtProviderUsed) || null;
  }
  get translatedSentences() {
    return this.isBlockTemplate ? [] : this.sentences.filter((t) => t.isTranslated);
  }
  get parallelCorporaMTContent() {
    const t = this.mtProviderUsed, n = this.node.cloneNode(!0);
    if (!t || Re.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => Rn(s)
      );
      o && (o.dataset.cx = JSON.stringify([
        this.blockTemplateAdaptationInfo[t]
      ]));
    } else {
      if (!this.translatedSentences.every(
        (a) => a.mtProviderUsed === t
      ))
        return null;
      Array.from(
        n.getElementsByClassName("cx-segment")
      ).forEach((a) => {
        const i = this.getSentenceById(a.dataset.segmentid);
        if (i.isTranslated) {
          a.innerHTML = i.mtProposedTranslationUsed;
          return;
        }
        a.parentNode.removeChild(a);
      });
    }
    return n.setAttribute("data-mw-cx-source", t), n.outerHTML;
  }
};
const Pa = "__LEAD_SECTION__";
class Wi {
  /**
   * Creates an instance of PageSection.
   * @param {Object} options
   * @param {string} [options.id]
   * @param {string|null} [options.title] the title of the section or the page title when section is a lead section
   * @param {boolean} [options.isLeadSection]
   * @param {SubSection[]} [options.subSections]
   */
  constructor({
    id: t,
    title: n = null,
    subSections: o = [],
    isLeadSection: s = !1,
    isTitleSelected: a = !1
  } = {}) {
    this.id = t, this.proposedTitleTranslations = {
      [Re.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.mtProviderUsedForTitle = "", this.translatedTitle = "", this.subSections = o, this.isLeadSection = s, this.isTitleSelected = a;
  }
  /**
   * @param {SubSection[]} updatedSubSections
   */
  updateSubSections(t) {
    for (const n of t) {
      const o = this.subSections.find(
        (s) => s.id === n.id
      );
      if (!o)
        return;
      o.node = n.node, o.sentences = n.sentences;
    }
  }
  reset() {
    this.proposedTitleTranslations = {
      [Re.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [Re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Pa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[Re.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[Re.ORIGINAL_TEXT_PROVIDER_KEY];
  }
  get mtProposedTranslationUsedForTitle() {
    var o;
    const t = this.subSections.filter(
      (s) => s.isTranslated
    ), n = this.mtProviderUsedForTitle || ((o = t == null ? void 0 : t[0]) == null ? void 0 : o.mtProviderUsed);
    return this.proposedTitleTranslations[n];
  }
  /**
   * @return {string}
   */
  get title() {
    return this.translatedTitle || this.originalTitle;
  }
  /**
   * This getter returns an array containing all nested
   * translation units inside the subsections of the current
   * page section. These translation units can be either
   * instances of SubSection model (in case a subsection is
   * a block template), or instances of SectionSentence model.
   *
   * @return {(SubSection|SectionSentence)[]}
   */
  get contentTranslationUnits() {
    return this.subSections.reduce(
      (t, n) => [...t, ...n.translationUnits],
      []
    );
  }
  /**
   * @return {SubSection|SectionSentence|null}
   */
  get lastTranslatedContentTranslationUnit() {
    return [...this.contentTranslationUnits].reverse().find((t) => t.isTranslated);
  }
  /**
   * @return {SubSection|SectionSentence|null}
   */
  get selectedContentTranslationUnit() {
    return this.contentTranslationUnits.find((t) => t.selected);
  }
  /**
   * @return {number}
   */
  get selectedContentTranslationUnitIndex() {
    return this.contentTranslationUnits.findIndex((t) => t.selected);
  }
  /**
   * @param {string} id
   * @return {SubSection|SectionSentence|null}
   */
  getContentTranslationUnitById(t) {
    return this.contentTranslationUnits.find((n) => n.id === t);
  }
  /**
   * Returns the id of the currently selected translation unit.
   * In case of selected title, 0 is returned
   * @return {string|0}
   */
  get selectedTranslationUnitId() {
    var t;
    return this.isTitleSelected ? 0 : (t = this.selectedContentTranslationUnit) == null ? void 0 : t.id;
  }
  /**
   * @return {boolean}
   */
  get isSelectedTranslationUnitLast() {
    return this.selectedContentTranslationUnitIndex === this.contentTranslationUnits.length - 1;
  }
  /**
   * @return {SectionSentence|null}
   */
  get followingTranslationUnit() {
    var n;
    const t = this.selectedContentTranslationUnitIndex + 1;
    return (n = this.contentTranslationUnits) == null ? void 0 : n[t];
  }
  /**
   * @return {string}
   */
  get html() {
    return this.subSections.reduce(
      (t, n) => t + n.originalHtml,
      ""
    );
  }
  set editedTranslation(t) {
    const n = document.createElement("div");
    n.innerHTML = t;
    const o = Array.from(n.children), s = (a) => o.find(
      (i) => i.id === a.targetSectionId
    );
    this.subSections.forEach((a) => {
      const i = s(a);
      let r = "";
      i && (r = i.innerHTML), a.editedTranslation = r;
    });
  }
  /**
   * @return {string}
   */
  get translationHtml() {
    return this.subSections.filter((t) => t.isTranslated).reduce(
      (t, n) => t + n.translatedContent,
      ""
    );
  }
  /**
   * This getter returns the proposed translation of the PageSection as
   * an HTML string, to be used for calculating the percentage of the modified MT
   *
   * @return {string}
   */
  get proposedTranslationHTMLForMTValidation() {
    return this.subSections.filter((t) => t.isTranslated).reduce(
      (t, n) => t + n.proposedContentForMTValidation,
      ""
    );
  }
  /**
   * @return {boolean}
   */
  get isTranslated() {
    return this.subSections.some((t) => t.isTranslated);
  }
  getOriginalContentByTranslationUnitId(t) {
    if (t === 0)
      return this.originalTitle;
    const n = this.getContentTranslationUnitById(t);
    return n instanceof bt ? n.transclusionNode.outerHTML : n instanceof _n ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof bt ? t.blockTemplateSelected = !1 : t instanceof _n && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof bt ? n.blockTemplateSelected = !0 : n instanceof _n && (n.selected = !0);
  }
  /**
   * Given a translation unit id (or 0 for section title)
   * and an MT provider, this method returns a boolean
   * indicating whether the corresponding translation
   * unit has a proposed translation for this MT provider.
   * This method is used inside "translateTranslationUnitById"
   * action, to make sure we don't fetch translation for
   * translation units that have already been translated.
   *
   * @param {string|0} id
   * @param {string} mtProvider
   * @return {boolean}
   */
  hasProposedTranslationByTranslationUnitId(t, n) {
    if (t === 0)
      return this.proposedTitleTranslations.hasOwnProperty(n);
    const o = this.getContentTranslationUnitById(t);
    if (o instanceof bt)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof _n)
      return o.proposedTranslations.hasOwnProperty(n);
  }
  /**
   * Given an MT provider, this method returns the proposed translation for the
   * currently selected translation unit (title/block template/sentence).
   * @param {string} mtProvider
   * @returns {string|null}
   */
  getProposedTranslationByMtProvider(t) {
    const n = this.selectedContentTranslationUnit;
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof bt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof _n ? n.proposedTranslations[t] || "" : null;
  }
  /**
   * This method sets the applied translation and the MT provider used
   * for the selected translation unit
   * @param {string} translation
   * @param {string} provider
   */
  setTranslationForSelectedTranslationUnit(t, n) {
    if (this.isTitleSelected) {
      this.translatedTitle = t, this.mtProviderUsedForTitle = n;
      return;
    }
    this.selectedContentTranslationUnit instanceof bt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof _n && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = An.getMTScoreForPageSection(this, t) / 100;
    return { any: o, mt: 1 - s, human: s };
  }
  /**
   * Lead section should also be stored in the "cx_section_translations" database table.
   * Since the "cxsx_source_section_title" field is non-nullable inside that table,
   * we should just give an empty string for lead sections, as empty strings are allowed
   * as valid values for non-nullable fields in MySQL.
   *
   * @return {string}
   */
  get sourceSectionTitleForPublishing() {
    return this.isLeadSection ? Pa : this.originalTitle;
  }
  /**
   * Lead section should also be stored in the "cx_section_translations" database table.
   * Since the "cxsx_target_section_title" field is non-nullable inside that table,
   * we should just give an empty string for lead sections, as empty strings are allowed
   * as valid values for non-nullable fields in MySQL.
   *
   * @return {string}
   */
  get targetSectionTitleForPublishing() {
    return this.isLeadSection ? Pa : this.title;
  }
  /**
   * @return {boolean}
   */
  get isSelectedTranslationUnitTranslated() {
    var t;
    return this.isTitleSelected ? !!this.translatedTitle : !!((t = this.selectedContentTranslationUnit) != null && t.isTranslated);
  }
  /**
   * This getter returns the translation units that should be stored
   * inside "cx_corpora" table when the current page section is
   * published. A TranslationUnitPayload DTO is created for each
   * translated subsection and finally an array of such DTOs is
   * returned by the getter.
   *
   * @param {string} baseSectionId
   * @returns {TranslationUnitPayload[]}
   */
  getParallelCorporaUnits(t) {
    return this.subSections.filter((n) => n.isTranslated).reduce(
      (n, o) => [
        ...n,
        ...o.getParallelCorporaTranslationPayloads(t)
      ],
      []
    );
  }
}
class Ki extends os {
  /**
   * @param {number} sectionTranslationId
   * @param {number} translationId
   * @param {string} sectionId
   * @param {string} sourceTitle
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} startTimestamp
   * @param {string} lastUpdatedTimestamp
   * @param {string} status
   * @param {string} pageRevision
   * @param {string|null} targetTitle
   * @param {string|null} sourceSectionTitle
   * @param {string|null} targetSectionTitle
   * @param {{any: number, mt: number, human: number}} progress
   */
  constructor({
    sectionTranslationId: t,
    translationId: n,
    sectionId: o,
    sourceTitle: s,
    sourceLanguage: a,
    targetLanguage: i,
    startTimestamp: r,
    lastUpdatedTimestamp: l,
    status: d,
    pageRevision: c,
    targetTitle: u,
    sourceSectionTitle: g,
    targetSectionTitle: f,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: r,
      lastUpdatedTimestamp: l,
      pageRevision: c,
      status: d,
      targetTitle: u
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = g, this.targetSectionTitle = f, this.progress = m, this.restored = !1;
  }
  /**
   * Used inside CXTranslationList.vue
   * @return {`sx-${number}`|`cx-${number}`}
   */
  get key() {
    return this.sectionTranslationId && `sx-${this.sectionTranslationId}` || `cx-${this.translationId}`;
  }
  /**
   * This getter returns a boolean indicating whether this is a plain article translation. By that,
   * we mean that there is no section translation row in the database that is associated with this
   * draft translation. This is the case for draft translations started on CX and never been edited on SX.
   *
   * @return {boolean}
   */
  get isArticleTranslation() {
    return !!this.translationId && !this.sectionTranslationId;
  }
  /**
   * This method returns a boolean indicating whether this translation will result in the creation
   * of a new page, if published in the main namespace. This is different from the "isArticleTranslation"
   * getter, because in addition to article translations, this getter also returns true for section
   * translations of lead sections, created in mobile editor.
   * @return {boolean}
   */
  get isLeadSectionTranslation() {
    return !this.sourceSectionTitle || this.sourceSectionTitle === Wi.LEAD_SECTION_DUMMY_TITLE;
  }
}
class Iu extends os {
  /**
   * @param {number} sectionTranslationId
   * @param {number} translationId
   * @param {string} sourceTitle
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} startTimestamp
   * @param {string} lastUpdatedTimestamp
   * @param {string} pageRevision
   * @param {string} status
   * @param {string} targetTitle
   * @param {string} targetUrl
   * @param {object[]} sectionTranslations
   */
  constructor({
    translationId: t,
    sourceTitle: n,
    sourceLanguage: o,
    targetLanguage: s,
    startTimestamp: a,
    lastUpdatedTimestamp: i,
    pageRevision: r,
    status: l,
    targetTitle: d,
    targetUrl: c,
    sectionTranslations: u
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: i,
      pageRevision: r,
      status: l,
      targetTitle: d
    }), this.targetUrl = c, this.sectionTranslations = u;
  }
}
const Bu = mw.user.isAnon() ? void 0 : "user", $u = (e) => {
  if (e === "assertuserfailed")
    throw new yo();
};
function Uu(e, t = null) {
  return W(this, null, function* () {
    if (mw.user.isAnon())
      return Promise.resolve([]);
    const n = {
      action: "query",
      format: "json",
      assert: "user",
      formatversion: 2,
      list: "contenttranslation",
      usecase: "unified-dashboard",
      type: e
    };
    return t && (n.offset = t), new mw.Api().get(n).then((s) => W(this, null, function* () {
      var r;
      const a = s.query.contenttranslation.translations;
      let i;
      if (e === "draft" ? i = a.map(
        (l) => new Ki(yt(lt({}, l), { status: e }))
      ) : i = a.map(
        (l) => new Iu(yt(lt({}, l), { status: e }))
      ), (r = s.continue) != null && r.offset) {
        const l = yield Uu(
          e,
          s.continue.offset
        );
        i = i.concat(l);
      }
      return i;
    }));
  });
}
function T_(e) {
  if (mw.user.isAnon())
    return Promise.resolve([]);
  const t = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    translationid: e,
    list: "contenttranslation",
    usecase: "translation-corpora-units"
  };
  return new mw.Api().get(t).then((o) => {
    const { translation: s } = o.query.contenttranslation;
    return Object.values(s.translationUnits).map(
      (a) => new A_(a)
    );
  });
}
function D_(e, t, n, o, s) {
  return W(this, null, function* () {
    if (!o)
      return;
    let a = `/translate/${e}/${t}`;
    n !== Re.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = Ie.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then((r) => r.json()).then((r) => {
      var d, c;
      return (c = (d = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(r.contents)) == null ? void 0 : d.groups) == null ? void 0 : c.content;
    }).catch((r) => Promise.reject(r));
  });
}
const L_ = (e, t, n) => {
  const o = Ie.getApi(t);
  return Promise.resolve(
    o.post({
      origin: "*",
      action: "visualeditor",
      paction: "parsefragment",
      page: n,
      wikitext: e,
      pst: !0
    })
  ).then((s) => s.visualeditor.content).catch((s) => (mw.log.error(s), Promise.reject(s)));
}, P_ = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: r,
  captchaId: l,
  captchaWord: d,
  isSandbox: c,
  sectionTranslationId: u
}) => {
  const g = {
    assert: Bu,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: r,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: i,
    issandbox: c,
    sectiontranslationid: u
  };
  return l && (g.captchaid = l, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new po({
            type: "captcha",
            status: "error",
            details: m.edit.captcha
          }),
          targetTitle: null
        };
      throw new Error();
    }
    return {
      publishFeedbackMessage: null,
      targetUrl: m.targeturl
    };
  }).catch((m, C) => {
    $u(m);
    let x;
    return C = C || {}, C.exception ? x = C.exception.message : C.error ? x = C.error.info : x = "Unknown error", {
      publishFeedbackMessage: new po({
        text: x,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, N_ = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: r,
  sectionId: l,
  isSandbox: d,
  progress: c
}) => {
  const u = {
    assert: Bu,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(r),
    sectionid: l,
    issandbox: d,
    progress: JSON.stringify(c)
  };
  return new mw.Api().postWithToken("csrf", u).then((f) => f.sxsave.sectiontranslationid).catch((f, m) => {
    $u(f);
    let C;
    return m.exception ? C = m.exception.message : m.error ? C = m.error.info : C = "Unknown error", new po({ text: C, status: "error" });
  });
}, F_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, M_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, O_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Ht = {
  fetchTranslations: Uu,
  fetchTranslationUnits: T_,
  fetchSegmentTranslation: D_,
  parseTemplateWikitext: L_,
  publishTranslation: P_,
  saveTranslation: N_,
  deleteTranslation: F_,
  fetchTranslatorStats: O_,
  deleteCXTranslation: M_
}, I_ = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (r) => !Re.isUserMTProvider(r)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, B_ = (e) => {
  const t = document.createElement("article");
  return t.innerHTML = e, Array.prototype.forEach.call(
    t.querySelectorAll("article, section, [data-segmentid]"),
    (n) => {
      const o = n.parentNode;
      for (; n.firstChild; )
        o.insertBefore(n.firstChild, n);
      n.remove();
    }
  ), Array.prototype.forEach.call(t.querySelectorAll(".cx-link"), (n) => {
    var s;
    const o = JSON.parse(n.getAttribute("data-cx") || "{}");
    (o == null ? void 0 : o.adapted) === !1 && ((s = o == null ? void 0 : o.targetTitle) == null ? void 0 : s.missing) !== !0 ? n.replaceWith(...n.childNodes) : ["data-linkid", "class", "title", "id"].forEach((a) => {
      n.removeAttribute(a);
    });
  }), Array.prototype.forEach.call(t.querySelectorAll(".mw-ref"), (n) => {
    const o = JSON.parse(n.getAttribute("data-cx") || "{}");
    (o == null ? void 0 : o.adapted) === !1 && n.parentNode.removeChild(n);
  }), Array.prototype.forEach.call(t.querySelectorAll("[data-cx]"), (n) => {
    n.removeAttribute("data-cx");
  }), Array.prototype.forEach.call(
    t.querySelectorAll(
      "tr[id], td[id], th[id], table[id], tbody[id], thead[id], div[id]"
    ),
    (n) => {
      n.removeAttribute("id");
    }
  ), t.innerHTML;
};
function $_({ rootState: e }) {
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = An.getMTScoreForPageSection(
    t,
    n
  ), s = An.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let r, l;
  return i === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new po({
    title: r,
    text: l,
    status: i,
    type: "mt"
  });
}
function U_({ rootState: e, rootGetters: t }) {
  const n = t["application/getCurrentPage"], {
    /** @type {PageSection} */
    currentSourceSection: o,
    /** @type {SectionSuggestion} */
    sourceLanguage: s,
    targetLanguage: a
  } = e.application, i = n.title, r = t["application/getTargetPageTitleForPublishing"], l = t["mediawiki/getSupportedMTProviders"](
    s,
    a
  ), d = t["application/getParallelCorporaBaseId"], c = o.getParallelCorporaUnits(d);
  c.forEach(
    (f) => I_(f, l)
  );
  const u = o.getTranslationProgress(a), g = t["application/isSandboxTarget"];
  return Ht.saveTranslation({
    sourceTitle: i,
    targetTitle: r,
    // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
    sourceSectionTitle: o.sourceSectionTitleForPublishing,
    // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
    targetSectionTitle: o.targetSectionTitleForPublishing,
    sourceLanguage: s,
    targetLanguage: a,
    revision: t["application/getCurrentRevision"],
    units: c.map((f) => f.payload),
    // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
    sectionId: d,
    isSandbox: g,
    progress: u
  });
}
function R_(a) {
  return W(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i instanceof po)
      return { publishFeedbackMessage: i, targetTitle: null };
    const r = i, l = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: d,
      sourceLanguage: c,
      targetLanguage: u
    } = e.application, g = l.title, f = t["application/getTargetPageTitleForPublishing"], m = t["application/isSandboxTarget"], C = {
      html: B_(d.translationHtml),
      sourceTitle: g,
      targetTitle: f,
      sourceSectionTitle: d.sourceSectionTitleForPublishing,
      targetSectionTitle: d.targetSectionTitleForPublishing,
      sourceLanguage: c,
      targetLanguage: u,
      revision: t["application/getCurrentRevision"],
      isSandbox: m,
      sectionTranslationId: r
    };
    return o && (C.captchaId = o, C.captchaWord = s), yield Ht.publishTranslation(C);
  });
}
function V_(a, i) {
  return W(this, arguments, function* ({ rootGetters: e, dispatch: t, rootState: n }, { provider: o, originalContent: s }) {
    const { sourceLanguage: r, targetLanguage: l } = n.application;
    if (!e["mediawiki/isValidProviderForTranslation"](r, l, o))
      return Promise.resolve();
    try {
      const c = yield t(
        "application/getCXServerToken",
        {},
        { root: !0 }
      );
      return yield Ht.fetchSegmentTranslation(
        r,
        l,
        o,
        s,
        c
      );
    } catch (c) {
      return mw.log.error("Error while translating segment", c), s;
    }
  });
}
function z_(t) {
  return W(this, arguments, function* ({ commit: e }) {
    const n = yield Ht.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const j_ = {
  validateMT: $_,
  saveTranslation: U_,
  publishTranslation: R_,
  translateContent: V_,
  fetchTranslatorStats: z_
}, H_ = {
  clearTranslationsByStatus(e, t) {
    e.translations = e.translations.filter(
      (n) => n.status !== t
    );
  },
  addTranslation(e, t) {
    e.translations.push(t);
  },
  removeTranslationBySectionTranslationId(e, t) {
    e.translations = e.translations.filter(
      (n) => n.sectionTranslationId !== t
    );
  },
  removeCXTranslation(e, t) {
    e.translations = e.translations.filter(
      (n) => n.translationId !== t
    );
  },
  /**
   * @param state
   * @param {"draft"|"published"} status
   * @param {boolean} value
   */
  setTranslationsLoaded: (e, { status: t, value: n }) => {
    e.translationsLoaded[t] = n;
  },
  setTranslatorStats: (e, t) => {
    e.translatorStats = t;
  }
}, q_ = {
  namespaced: !0,
  state: p_,
  getters: m_,
  actions: j_,
  mutations: H_
}, Ru = [
  "Works",
  "Publications",
  "Bibliography",
  "Discography",
  "Filmography",
  "See also",
  "Notes",
  "Citations",
  "References",
  "Further reading",
  "External links"
], G_ = [
  "Bibliografía",
  "Referencias",
  "Citas",
  "Discografía",
  "Filmografía",
  "Notas",
  "Publicaciones",
  "Obra",
  "Enlaces externos",
  "Otras lecturas",
  "Lecturas relacionadas",
  "Véase también"
], W_ = [
  "গ্রন্থপঞ্জী",
  "গ্রন্থপঞ্জি",
  "তথ্যাবলি",
  "উদ্ধৃতিসমূহ",
  "বর্ণনসমূহ",
  "উদ্ধৃতি",
  "উদ্ধ্বৃতি",
  "তথ্যসূত্র",
  "ডিস্কোগ্রাফি",
  "বহিঃসংযোগ",
  "চলচ্চিত্রের তালিকা",
  "আরও পড়ুন",
  "আরও পড়ুন",
  "আরো পড়ুন",
  "টীকা",
  "নোট",
  "প্রকাশনা",
  "প্রকাশিত গ্রন্থ",
  "আরও দেখুন",
  "আরো দেখুন",
  "কাজ",
  "কর্মজীবন"
], K_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], X_ = [
  "Literatur",
  "Bibliographie",
  "Anmerkungen",
  "Zitate",
  "Belege",
  "Diskografie",
  "Diskographie",
  "Weblinks",
  "Filmografie",
  "Literatur",
  "Einzelnachweise",
  "Veröffentlichungen",
  "Einzelnachweise",
  "Arbeit",
  "Siehe auch"
], Y_ = {
  en: Ru,
  es: G_,
  bn: W_,
  fr: K_,
  de: X_
}, J_ = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestionsForPublished: [],
  /** @type FavoriteSuggestion[] */
  favorites: [],
  /**
   * Counter that indicates how many section suggestion fetching
   * requests are currently in progress
   * @type {number}
   */
  sectionSuggestionsLoadingCount: 0,
  /**
   * Counter that indicates how many page suggestion fetching
   * requests are currently in progress
   * @type {number}
   */
  pageSuggestionsLoadingCount: 0,
  /**
   * Maximum number of suggestions being displayed in the dashboard
   * at the same time
   */
  maxSuggestionsPerSlice: 3,
  /**
   * Stores collections of seeds for different language pairs
   * Each seed collection corresponds to a specific language pair
   * and contains all available seeds to be used for suggestion fetching.
   * Having this information stored prevents unnecessary requests to fetch
   * seeds every time they are needed
   * @type {SuggestionSeedCollection[]}
   */
  suggestionSeedCollections: [],
  /**
   * Stores appendix section titles, grouped by language
   * @type Object - { language1: [titles1], ... }
   */
  appendixSectionTitles: Y_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, Z_ = {
  getFavoriteTitlesByLanguagePair: (e) => (t, n) => e.favorites.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ).map((o) => o.title),
  /**
   * @return {SuggestionSeedCollection|undefined}
   */
  findSuggestionSeedCollection: (e) => (t, n) => e.suggestionSeedCollections.find(
    (o) => o.matchesLanguagePair(t, n)
  ),
  getPageSuggestionsForPair: (e) => (t, n) => e.pageSuggestions.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ),
  getSectionSuggestionsForPair: (e) => (t, n) => e.sectionSuggestions.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForArticle: (e) => (t, n, o) => e.sectionSuggestions.find(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.sourceTitle === o
  ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForPublishedArticle: (e) => (t, n, o) => e.sectionSuggestionsForPublished.find(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.sourceTitle === o
  ),
  sectionSuggestionsForArticleExists: (e) => (t, n, o) => e.sectionSuggestions.some(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.sourceTitle === o
  ),
  /**
   * This getter returns the first (by order of appearance) appendix section
   * title found inside target article page. Appendix section titles for each
   * language are stored in appendixSectionTitles state variable.
   * Such titles are "References" and similar section titles.
   * If none such section is found, it returns null
   *
   * @param {Object} state
   * @return {function(SectionSuggestion): String|null}
   */
  getFirstAppendixTitleBySectionSuggestion: (e) => (
    /**
     * @param {SectionSuggestion} sectionSuggestion
     * @return {String|null}
     */
    (t) => {
      const n = e.appendixSectionTitles[t.targetLanguage] || [];
      return (t.targetSections || []).find(
        (o) => n.includes(o)
      );
    }
  ),
  appendixTitlesExistForLanguage: (e) => (t) => {
    var n;
    return (((n = e.appendixSectionTitles) == null ? void 0 : n[t]) || []).length > 0;
  },
  /**
   * This getter calculates and returns the number of section suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @param {Object} state
   * @param {Object} getters
   * @return {function(sourceLanguage: string, targetLanguage: string): number}
   */
  getNumberOfSectionSuggestionsToFetch: (e, t) => (n, o) => {
    const s = t.getSectionSuggestionsForPair(n, o), a = e.maxSuggestionsPerSlice;
    return a - s.length % a;
  },
  /**
   * This getter calculates and returns the number of page suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @param {Object} state
   * @param {Object} getters
   * @return {function(sourceLanguage: string, targetLanguage: string): number}
   */
  getNumberOfPageSuggestionsToFetch: (e, t) => (n, o) => {
    const s = t.getPageSuggestionsForPair(n, o), a = e.maxSuggestionsPerSlice;
    return a - s.length % a;
  }
};
class Xi {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    langLinksCount: a,
    wikidataId: i
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = i, this.langLinksCount = a;
  }
  /**
   * @returns {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
}
class Ft {
  /**
   * Creates an instance of SectionSuggestion.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {string[]} options.sourceSections Array of all section titles in source article ordered by their order of appearance in the article
   * @param {string[]} options.targetSections  Array of all section titles in target article  ordered by their order of appearance in the article
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    present: a,
    missing: i,
    sourceSections: r,
    targetSections: l
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = r, this.targetSections = l;
  }
  /**
   * @return {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
  /**
   * Returns the number of missing core (non-appendix)
   * sections for the current section suggestion
   *
   * @internal
   * @param {string[]} appendixTargetTitles
   * @return {number}
   */
  missingCoreSectionsCount(t) {
    return Object.values(this.missingSections).filter(
      (n) => !t.includes(n)
    ).length;
  }
  /**
   * Given an array of appendix section titles in target language,
   * this method returns a boolean indicating if current section suggestion
   * is valid (should be stored and displayed to the user) by
   * checking if suggestion has at least one core (non-appendix)
   * missing section
   *
   * @param {string[]} appendixTargetTitles
   * @return {boolean}
   */
  isValid(t) {
    return this.missingCoreSectionsCount(t) > 0;
  }
  /**
   * @return {number}
   */
  get missingSectionsCount() {
    return Object.keys(this.missingSections || {}).length;
  }
  /**
   * @return {number}
   */
  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }
  /**
   * @return {{targetTitle: string, sourceTitle: string}[]}
   */
  get orderedMissingSections() {
    return Object.entries(this.missingSections || {}).map((t) => ({
      sourceTitle: t[0],
      targetTitle: t[1]
    })).sort(
      (t, n) => this.sourceSections.indexOf(t.sourceTitle) - this.sourceSections.indexOf(n.sourceTitle)
    );
  }
  /**
   * @return {{targetTitle: string, sourceTitle: string}[]}
   */
  get orderedPresentSections() {
    return Object.entries(this.presentSections || {}).map((t) => ({
      sourceTitle: t[0],
      targetTitle: t[1]
    })).sort(
      (t, n) => this.sourceSections.indexOf(t.sourceTitle) - this.sourceSections.indexOf(n.sourceTitle)
    );
  }
  /**
   * @param {string} sectionTitle
   * @return {boolean}
   */
  hasSectionTitle(t) {
    return this.sourceSections.includes(t);
  }
}
class zo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const Q_ = Ru;
function e0(e, t, n, o = 24) {
  return W(this, null, function* () {
    var c;
    let a = `/data/recommendation/article/creation/translation/${Ie.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = Ie.getRestbaseUrl(t, a), r = new URLSearchParams({ count: `${o}` }), l = yield fetch(`${i}?${r}`);
    if (!l.ok)
      throw new Error("Failed to load data from server");
    return (((c = yield l.json()) == null ? void 0 : c.items) || []).map(
      (u) => new Xi({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function t0(e, t, n) {
  return W(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = Ie.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Ft(a) : null;
  });
}
function n0(e, t) {
  return W(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = Ie.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function o0(e) {
  const t = Q_.map((o) => encodeURIComponent(o)).join("|"), n = Ie.getCXServerUrl(
    `/suggest/sections/titles/en/${e}?titles=${t}`
  );
  return fetch(n).then(
    (o) => o.ok ? o.json() : Promise.reject(
      new Error(
        `Failed to load appendix target section titles for language: ${e}`
      )
    )
  ).then((o) => Object.values(o).flat()).catch((o) => []);
}
const s0 = (e) => {
  const t = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "add",
    titles: e.sourceTitle,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((o) => {
    mw.log.error("Error while marking suggestion as favorite", o);
  });
}, a0 = (e) => {
  const t = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "remove",
    titles: e.title,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((o) => {
    mw.log.error("Error while unmarking favorite suggestion", o);
  });
}, i0 = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((r) => new zo(r));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, qt = {
  fetchFavorites: i0,
  fetchPageSuggestions: e0,
  fetchSectionSuggestions: t0,
  fetchSuggestionSeeds: n0,
  fetchAppendixTargetSectionTitles: o0,
  markFavorite: s0,
  unmarkFavorite: a0
};
class r0 {
  /**
   * Creates an instance of SuggestionSeedCollection.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string[]} options.seeds
   */
  constructor({ sourceLanguage: t, targetLanguage: n, seeds: o = [] }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.seeds = o;
  }
  /**
   * Check whether another language pair match with same language pair
   * of this instance.
   * @param sourceLanguage
   * @param targetLanguage
   * @return {boolean}
   */
  matchesLanguagePair(t, n) {
    return this.sourceLanguage === t && this.targetLanguage === n;
  }
  /**
   * Return first seed and remove it from the array
   *
   * @return {string|undefined}
   */
  shiftSeeds() {
    return this.seeds.shift();
  }
}
function l0(r, l) {
  return W(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
    let d = n.getSectionSuggestionsForArticle(
      s,
      a,
      i
    );
    if (!d) {
      d = yield qt.fetchSectionSuggestions(
        s,
        i,
        a
      );
      try {
        if (yield t(
          "mediawiki/fetchPageMetadata",
          { language: s, titles: [i] },
          { root: !0 }
        ), d)
          e("addSectionSuggestion", d);
        else {
          const c = o["mediawiki/getPage"](
            s,
            i
          );
          d = new Ft({
            sourceLanguage: s,
            targetLanguage: a,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: c.title
          }), e(
            "addPageSuggestion",
            new Xi({
              sourceLanguage: s,
              targetLanguage: a,
              sourceTitle: i,
              langLinksCount: c.langLinksCount,
              wikidataId: c.wikidataId
            })
          );
        }
      } catch (c) {
        throw new Error(
          `No page metadata found for title ${i} and language pair ${s}-${a}`
        );
      }
    }
    return d;
  });
}
function c0(o, s) {
  return W(this, arguments, function* ({ getters: e }, { sourceLanguage: t, targetLanguage: n }) {
    let a = e.findSuggestionSeedCollection(
      t,
      n
    );
    return !a || !a.seeds.length ? (mw.log.error("No suggestion seed found! Suggestion fetching will fail!"), null) : a.shiftSeeds();
  });
}
function u0(s) {
  return W(this, arguments, function* ({
    rootGetters: e,
    dispatch: t,
    rootState: n,
    state: o
  }) {
    const { targetLanguage: a } = n.application, i = e["application/getSectionSuggestionsSliceByIndex"](0), r = e["application/getPageSuggestionsSliceByIndex"](0), l = i.length === o.maxSuggestionsPerSlice, d = r.length === o.maxSuggestionsPerSlice;
    l && d || (yield t("suggestions/fetchAppendixSectionTitles", a, {
      root: !0
    }), t("fetchNextSectionSuggestionsSlice"), t("fetchNextPageSuggestionsSlice"));
  });
}
function d0(a) {
  return W(this, arguments, function* ({
    state: e,
    commit: t,
    getters: n,
    dispatch: o,
    rootState: s
  }) {
    const { sourceLanguage: i, targetLanguage: r } = s.application;
    t("increaseSectionSuggestionsLoadingCount");
    const l = n.getNumberOfSectionSuggestionsToFetch(
      i,
      r
    );
    let d = 0;
    for (; d < l; ) {
      const u = yield o("getSuggestionSeed", {
        sourceLanguage: i,
        targetLanguage: r
      });
      if (!u)
        break;
      const g = yield qt.fetchSectionSuggestions(
        i,
        u,
        r
      ), f = e.appendixSectionTitles[r] || [];
      g != null && g.isValid(f) && (d++, t("addSectionSuggestion", g));
    }
    t("decreaseSectionSuggestionsLoadingCount");
    const c = n.getSectionSuggestionsForPair(i, r).map((u) => u.sourceTitle);
    o(
      "mediawiki/fetchPageMetadata",
      { language: i, titles: c },
      { root: !0 }
    );
  });
}
function g0(s) {
  return W(this, arguments, function* ({
    commit: e,
    dispatch: t,
    getters: n,
    rootState: o
  }) {
    e("increasePageSuggestionsLoadingCount");
    const { sourceLanguage: a, targetLanguage: i } = o.application, r = yield t("getSuggestionSeed", {
      sourceLanguage: a,
      targetLanguage: i
    }), l = n.getNumberOfPageSuggestionsToFetch(
      a,
      i
    );
    try {
      const d = yield qt.fetchPageSuggestions(
        a,
        i,
        r,
        l
      );
      d.forEach(
        (u) => e("addPageSuggestion", u)
      );
      const c = d.map((u) => u.sourceTitle);
      c.length && t(
        "mediawiki/fetchPageMetadata",
        { language: a, titles: c },
        { root: !0 }
      );
    } catch (d) {
      mw.log.error("Page suggestions fetching failed!");
    }
    e("decreasePageSuggestionsLoadingCount");
  });
}
function f0(o, s) {
  return W(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield qt.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
function p0(o, s) {
  return W(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removeSectionSuggestion", n), t("fetchNextSectionSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function m0(o, s) {
  return W(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removePageSuggestion", n), t("fetchNextPageSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function h0(o, s) {
  return W(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    yield qt.markFavorite(n);
    const { sourceTitle: a, sourceLanguage: i, targetLanguage: r } = n, l = new zo({
      title: a,
      sourceLanguage: i,
      targetLanguage: r
    });
    e("addFavoriteSuggestion", l);
  });
}
function _0(n, o) {
  return W(this, arguments, function* ({ commit: e }, t) {
    e("removeFavoriteSuggestion", t), yield qt.unmarkFavorite(t);
  });
}
function v0(o) {
  return W(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
    if (n.favorites.length)
      return;
    const s = yield qt.fetchFavorites();
    if (!s || !s.length)
      return;
    const a = {};
    for (const i of s)
      e("addFavoriteSuggestion", i), qt.fetchSectionSuggestions(
        i.sourceLanguage,
        i.title,
        i.targetLanguage
      ).then(
        (r) => i.missingSectionsCount = (r == null ? void 0 : r.missingSectionsCount) || 0
      ), a[i.sourceLanguage] = [
        ...a[i.sourceLanguage] || [],
        i
      ];
    for (const [i, r] of Object.entries(
      a
    ))
      t(
        "mediawiki/fetchPageMetadata",
        {
          language: i,
          titles: r.map((l) => l.title)
        },
        { root: !0 }
      );
  });
}
const y0 = {
  addPageSuggestionAsFavorite: m0,
  addSectionSuggestionAsFavorite: p0,
  doMarkSuggestionAsFavorite: h0,
  fetchFavorites: v0,
  fetchAppendixSectionTitles: f0,
  fetchNextPageSuggestionsSlice: g0,
  fetchNextSectionSuggestionsSlice: d0,
  getSuggestionSeed: c0,
  initializeSuggestions: u0,
  loadSectionSuggestion: l0,
  removeFavoriteSuggestion: _0
}, b0 = {
  /**
   * @param {object} state
   * @param {ArticleSuggestion} suggestion
   */
  addPageSuggestion(e, t) {
    e.pageSuggestions.push(t);
  },
  addSectionSuggestion(e, t) {
    e.sectionSuggestions.push(t);
  },
  addSectionSuggestionForPublished(e, t) {
    e.sectionSuggestionsForPublished.push(t);
  },
  /**
   * @param {Object} state
   * @param {SectionSuggestion} suggestionToRemove
   */
  removeSectionSuggestion(e, t) {
    e.sectionSuggestions = e.sectionSuggestions.filter(
      (n) => n.id !== t.id
    );
  },
  /**
   * @param {Object} state
   * @param {ArticleSuggestion} suggestionToRemove
   */
  removePageSuggestion(e, t) {
    e.pageSuggestions = e.pageSuggestions.filter(
      (n) => n.id !== t.id
    );
  },
  increaseSectionSuggestionsLoadingCount(e) {
    e.sectionSuggestionsLoadingCount++;
  },
  decreaseSectionSuggestionsLoadingCount(e) {
    e.sectionSuggestionsLoadingCount--;
  },
  increasePageSuggestionsLoadingCount(e) {
    e.pageSuggestionsLoadingCount++;
  },
  decreasePageSuggestionsLoadingCount(e) {
    e.pageSuggestionsLoadingCount--;
  },
  /**
   * @param state
   * @param {SuggestionSeedCollection} collection
   */
  addSuggestionSeedCollection(e, t) {
    e.suggestionSeedCollections.push(t);
  },
  addAppendixSectionTitlesForLanguage(e, { language: t, titles: n }) {
    e.appendixSectionTitles[t] = n;
  },
  /**
   * @param {object} state
   * @param {FavoriteSuggestion} favoriteSuggestion
   */
  addFavoriteSuggestion(e, t) {
    e.favorites.push(t);
  },
  /**
   * @param {object} state
   * @param {FavoriteSuggestion} favoriteSuggestion
   */
  removeFavoriteSuggestion(e, t) {
    const { title: n, sourceLanguage: o, targetLanguage: s } = t;
    e.favorites = e.favorites.filter(
      (a) => a.title !== n || a.sourceLanguage !== o || a.targetLanguage !== s
    );
  }
}, S0 = {
  namespaced: !0,
  state: J_,
  getters: Z_,
  actions: y0,
  mutations: b0
}, w0 = {
  /** @type {Page[]} */
  pages: [],
  /** @type {Boolean} */
  languagesRequested: !1,
  languageTitleGroups: [],
  /**
   * All language codes that are supported by cxserver
   * and can be used as source/target languages
   * @type {string[]}
   */
  supportedLanguageCodes: [],
  /** @type {Boolean} */
  supportedLanguageCodesRequested: !1,
  supportedMTProviderGroups: [],
  /**
   * Stores nearby pages to be used as suggestions for section translation
   * Format: {{ en: Page[], es: Page[], ... }}
   * @type {Object}
   */
  nearbyPages: {},
  enabledTargetLanguages: mw.config.get("wgSectionTranslationTargetLanguages")
}, C0 = {
  /**
   * In case of a null or empty title, this getter should
   * return null
   * @param {Object} state
   * @return {function(string, string|null): Page|null}
   */
  getPage: (e) => (t, n) => e.pages.find(
    (o) => o.language === t && (o.title === n || o.alias && o.alias === n)
  ),
  /**
   * @param {object} state
   * @return {function(string, string): LanguageTitleGroup|null}
   */
  getLanguageTitleGroup: (e) => (t, n) => e.languageTitleGroups.find(
    (o) => o.titles.find(
      (s) => s.lang === t && s.title === n
    )
  ),
  getLanguageTitleGroupByWikidataId: (e) => (t) => e.languageTitleGroups.find((n) => n.wikidataId === t),
  /**
   * Get MTProviderGroup for the given language pair
   * @param {object} state
   * @returns {function(sourceLanguage: string, targetLanguage: string): string[]} - method returning an array of supported providers
   */
  getSupportedMTProviders: (e) => (t, n) => {
    var o;
    return ((o = e.supportedMTProviderGroups.find(
      (s) => s.sourceLanguage === t && s.targetLanguage === n
    )) == null ? void 0 : o.providers) || [];
  },
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== Re.EMPTY_TEXT_PROVIDER_KEY,
  /**
   * Get recently edited cx translations by current user if any,
   * for the current language pair.
   *
   * @param {Object} state
   * @param {Object} rootGetters
   * @param {Object} getters
   * @param {Object} rootState
   * @return {Page[]}
   */
  getRecentlyEditedPages: (e, t, n, o) => {
    const s = n.application.sourceLanguage, a = n.application.targetLanguage;
    return o["translator/getAllTranslationsForLanguagePair"](s, a).slice(
      0,
      n.suggestions.maxRecentlyEditedSuggestions
    ).map(
      (l) => t.getPage(s, l.sourceTitle)
    ).filter((l) => !!l);
  },
  /**
   * Get nearby articles (based on user location) in current source language
   *
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   * @return {Page[]}
   */
  getNearbyPages: (e, t, n) => {
    const o = n.application.sourceLanguage;
    return e.nearbyPages[o];
  }
};
class bo {
  /**
   * @param {Object} options
   * @param {string} [options.description]
   * @param {string|number} [options.langlinkscount]
   * @param {string} [options.lastrevid]
   * @param {string} [options.original]
   * @param {string} [options.pageid]
   * @param {string} [options.pagelanguage]
   * @param {{wikibase_item: string}} [options.pageprops]
   * @param {string} [options.pageviews]
   * @param {string} [options.thumbnail]
   * @param {string} [options.title]
   * @param {string|null} [options._alias] The normalized page title or the title from which this page is a redirection, if any. See mw/api/page.js#fetchMetadata
   * @param {string|null} [options.content]
   * @param {PageSection[]} [options.sections]
   */
  constructor({
    description: t,
    langlinkscount: n,
    lastrevid: o,
    original: s,
    pageid: a,
    pagelanguage: i,
    pageprops: r,
    pageviews: l,
    thumbnail: d,
    title: c,
    _alias: u,
    content: g = null,
    sections: f = []
  } = {}) {
    this.language = i, this.title = c, this.pageId = a, this.description = t, this.image = s, this.pageprops = r, this.pageviews = l, this.thumbnail = d, this.langLinksCount = n, this.revision = o, this.alias = u, this.wikidataId = r == null ? void 0 : r.wikibase_item, this.content = g, this.sections = f;
  }
  /**
   * @return {string}
   */
  get id() {
    return `${this.language}/${this.title}`;
  }
  /**
   * @return {PageSection|null}
   */
  get leadSection() {
    return this.sections.find((t) => t.isLeadSection);
  }
  /**
   * @param {string} sectionTitle
   * @return {PageSection|null}
   */
  getSectionByTitle(t) {
    return (this.sections || []).find(
      (n) => n.originalTitle === t
    );
  }
  /**
   * @param {PageSection[]} updatedSections
   */
  updateSections(t) {
    for (const n of t) {
      const o = this.sections.find(
        (s) => s.id === n.id
      );
      if (!o)
        return;
      o.updateSubSections(n.subSections);
    }
  }
}
class x0 {
  /**
   * @param {string} wikidataId
   * @param {{ lang: string, title: string}[]} titles
   */
  constructor(t, n) {
    this.wikidataId = t, this.titles = n;
  }
  /**
   * @param {string} language
   * @return {string|null}
   */
  getTitleForLanguage(t) {
    var n;
    return (n = this.titles.find((o) => o.lang === t)) == null ? void 0 : n.title;
  }
  /**
   * @param {string} language
   * @return {boolean}
   */
  hasLanguage(t) {
    return this.titles.some((n) => n.lang === t);
  }
}
function E0() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const A0 = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), E0();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, k0 = (e, t) => {
  let n, o;
  return t ? (n = A0(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, i) => {
    const r = $(i).data("view").getModel();
    if (r)
      return ve.dm.converter.getDomFromNode(
        r,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, T0 = (e, t) => {
  const n = Array.from(
    k0(e, t)
  );
  return D0(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let r = "";
      const l = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? r = a.textContent.trim() : i.unshift(a);
      const d = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (u) => new bt({
          sentences: L0(u),
          node: u
        })
      ), c = !r;
      return new Wi({ id: l, title: r, subSections: d, isLeadSection: c });
    }
  );
}, D0 = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, L0 = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new _n({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Vu = {
  convertSegmentedContentToPageSections: T0
}, Yi = 120, P0 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: Yi,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Ie.getApi(e).get(n).then((s) => {
    const a = s.query.pages, r = (s.query.redirects || []).reduce(
      (c, u) => yt(lt({}, c), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (c, u) => yt(lt({}, c), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((c) => {
      const u = d[c.title] || r[c.title] || null;
      return new bo(yt(lt({}, c), { _alias: u }));
    });
  });
}, N0 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "langlinks|pageprops",
    // pageprops for wikidataId
    titles: t,
    lllimit: 500,
    // Max limit. We have only ~300 wikis.
    origin: "*",
    redirects: !0
  };
  return Ie.getApi(e).get(n).then((s) => W(void 0, null, function* () {
    var l, d;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], r = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return r ? Object.freeze(new x0(r, i)) : null;
  }));
}, F0 = (e, t, n, o = null) => zu(
  e,
  t,
  n,
  o
).then(
  (s) => new bo({
    sections: Vu.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), zu = (e, t, n, o = null) => {
  const s = Ie.getWikiDomainCode(e), a = Ie.getWikiDomainCode(t), i = [s, a, n].map(
    (l) => encodeURIComponent(l)
  );
  let r = Ie.getCXServerUrl(
    `/page/${i.join("/")}`
  );
  return o && (r += `/${o}`), fetch(r).then((l) => l.json()).then((l) => l.segmentedContent);
}, M0 = (e) => W(void 0, null, function* () {
  const t = E_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Yi,
    lllang: e,
    ggscoord: t,
    ggsradius: 1e3,
    // Search radius in meters
    ggslimit: 3,
    ggsnamespace: mw.config.get("wgNamespaceIds")[""],
    // Main namespace
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return yield Ie.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new bo(s))).catch((o) => []);
}), O0 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Yi,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Ie.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new bo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, ss = {
  fetchPages: P0,
  fetchLanguageTitles: N0,
  fetchPageContent: F0,
  fetchSegmentedContent: zu,
  fetchNearbyPages: M0,
  searchPagesByTitlePrefix: O0
};
function I0() {
  return Ie.getLanguagePairs().then((e) => e.sourceLanguages);
}
function B0(e, t) {
  return W(this, null, function* () {
    const n = Ie.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Re(e, t, o.mt)
      )
    );
  });
}
function $0() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function U0(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = {
    action: "wblinktitles",
    fromsite: s.replace(t, e),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, i = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(i.postWithToken("csrf", a)).then((r) => {
    const d = {
      action: "tag",
      revid: r.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(i.postWithToken("csrf", d));
  });
}
const la = {
  fetchSupportedLanguageCodes: I0,
  fetchSupportedMTProviders: B0,
  fetchCXServerToken: $0,
  addWikibaseLink: U0
};
function R0({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const r = o.slice(i, i + s), l = ss.fetchPages(n, r).then(
      (d) => d.forEach((c) => t("addPage", c))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function V0({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || ss.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function z0(n) {
  return W(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield la.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function j0(r, l) {
  return W(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let d = t.getPage(o, a);
    if (d && d.content)
      return;
    const c = yield ss.fetchPageContent(
      o,
      s,
      a,
      i
    );
    d = t.getPage(o, a), d ? d.content || (d.content = c.content, e("setPageSections", {
      page: d,
      sections: c.sections
    })) : e("addPage", c);
  });
}
function H0(o) {
  return W(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield ss.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const q0 = {
  fetchLanguageTitles: V0,
  fetchNearbyPages: H0,
  fetchPageContent: j0,
  fetchPageMetadata: R0,
  fetchSupportedLanguageCodes: z0
}, G0 = {
  addPage(e, t) {
    e.pages.push(t);
  },
  addLanguageTitleGroup(e, t) {
    e.languageTitleGroups.push(t);
  },
  setSupportedLanguageCodes(e, t) {
    e.supportedLanguageCodes = t;
  },
  /**
   * @param {Object} state
   * @param {MTProviderGroup} mtProviderGroup
   */
  addMtProviderGroup(e, t) {
    e.supportedMTProviderGroups.push(t);
  },
  /**
   * @param {object} state
   * @param {Page} page
   * @param {PageSection[]} sections
   */
  setPageSections(e, { page: t, sections: n }) {
    t.sections = n;
  },
  setLanguagesRequested(e, t) {
    e.languagesRequested = t;
  },
  setSupportedLanguageCodesRequested(e, t) {
    e.supportedLanguageCodesRequested = t;
  },
  /**
   * Adds an entry inside nearbyPages state variable object
   * with given language as key and given page models as value
   * @param {Object} state
   * @param {Object} payload
   * @param {string} language current application source language
   * @param {Page[]} pages array of nearby pages as Page models
   */
  addNearbyPages(e, { language: t, pages: n }) {
    e.nearbyPages[t] = n;
  }
}, W0 = {
  namespaced: !0,
  state: w0,
  getters: C0,
  actions: q0,
  mutations: G0
}, K0 = {
  /**@type Array */
  mtRequestsPending: [],
  /** @type SectionSuggestion */
  currentSectionSuggestion: null,
  /** @type PageSection */
  currentSourceSection: null,
  /** @type Translation */
  currentTranslation: null,
  /** @type String */
  currentMTProvider: "",
  /**
   * Current source language for SX application. It can be changed by using the
   * language selector. The initial value is set to "en" (could be set to any other
   * valid language code), so that it's always a string (and thus it can be properly
   * used as prop with type "String" in Vue components).
   *
   * @type {String}
   */
  sourceLanguage: "en",
  /**
   * Current target language for SX application. It can be changed by using the
   * language selector. The initial value is set to "en" (could be set to any other
   * valid language code), so that it's always a string (and thus it can be properly
   * used as prop with type "String" in Vue components).
   *
   * @type {String}
   */
  targetLanguage: "en",
  publishTarget: "NEW_SECTION",
  /**
   * This variable indicates whether an auto-save request is pending.
   * Auto-save requests are being debounced during sentence-by-sentence
   * translation. This variable is true when the debounce queue is non-empty.
   * @type Boolean
   */
  autoSavePending: !1,
  /**
   * The cxserver token, mainly used for accessing external machine translation services.
   * @type String
   */
  cxServerToken: null,
  translationDataLoadingCounter: 0,
  isLoginDialogOn: !1,
  /**
   * The name of the previous route (as defined in vue-router config)
   * @type String
   */
  previousRoute: null
}, X0 = {
  /**
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @param {object} rootGetters
   * @return {Page|null}
   */
  getCurrentPage: (e, t, n, o) => {
    var a, i;
    const s = ((a = e.currentSectionSuggestion) == null ? void 0 : a.sourceTitle) || ((i = e.currentTranslation) == null ? void 0 : i.sourceTitle);
    return o["mediawiki/getPage"](e.sourceLanguage, s);
  },
  getCurrentTargetPage: (e, t, n, o) => {
    var a, i;
    const s = ((a = e.currentSectionSuggestion) == null ? void 0 : a.targetTitle) || ((i = e.currentTranslation) == null ? void 0 : i.targetTitle);
    return o["mediawiki/getPage"](e.targetLanguage, s);
  },
  getCurrentSourceSectionTitle: (e) => {
    var t;
    return ((t = e.currentSourceSection) == null ? void 0 : t.originalTitle) || "";
  },
  getCurrentSourceSectionAnchor: (e, t) => (t.getCurrentSourceSectionTitle || "").replace(/ /g, "_"),
  isCurrentSourceSectionMissing: (e, t) => {
    var n;
    return (n = e.currentSectionSuggestion) == null ? void 0 : n.missingSections.hasOwnProperty(
      t.getCurrentSourceSectionTitle
    );
  },
  isCurrentSourceSectionPresent: (e, t) => {
    var n;
    return (n = e.currentSectionSuggestion) == null ? void 0 : n.presentSections.hasOwnProperty(
      t.getCurrentSourceSectionTitle
    );
  },
  /**
   * Machine translation of currently selected translation unit (title or sentence)
   * for currently selected MT provider
   */
  getCurrentProposedTranslation: (e) => {
    const { currentSourceSection: t, currentMTProvider: n } = e;
    return t == null ? void 0 : t.getProposedTranslationByMtProvider(
      n
    );
  },
  /**
   * @return {LanguageTitleGroup|null}
   */
  getCurrentLanguageTitleGroup: (e, t, n, o) => {
    var s, a;
    return o["mediawiki/getLanguageTitleGroup"](
      (s = e.currentSectionSuggestion) == null ? void 0 : s.sourceLanguage,
      (a = e.currentSectionSuggestion) == null ? void 0 : a.sourceTitle
    );
  },
  /**
   * @return {ArticleSuggestion[]}
   */
  getCurrentPageSuggestions: (e, t, n, o) => o["suggestions/getPageSuggestionsForPair"](
    e.sourceLanguage,
    e.targetLanguage
  ),
  /**
   * @return {SectionSuggestion[]}
   */
  getCurrentSectionSuggestions: (e, t, n, o) => o["suggestions/getSectionSuggestionsForPair"](
    e.sourceLanguage,
    e.targetLanguage
  ),
  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): SectionSuggestion[]}
   */
  getSectionSuggestionsSliceByIndex: (e, t, n) => (o) => t.getCurrentSectionSuggestions.slice(
    n.suggestions.maxSuggestionsPerSlice * o,
    n.suggestions.maxSuggestionsPerSlice * (o + 1)
  ),
  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): ArticleSuggestion[]}
   */
  getPageSuggestionsSliceByIndex: (e, t, n) => (o) => t.getCurrentPageSuggestions.slice(
    n.suggestions.maxSuggestionsPerSlice * o,
    n.suggestions.maxSuggestionsPerSlice * (o + 1)
  ),
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION",
  /**
   * @param {object} state
   * @param {object} getters
   * @return {string}
   */
  getCurrentRevision: (e, t) => {
    var n;
    return ((n = e.currentTranslation) == null ? void 0 : n.pageRevision) || t.getCurrentPage.revision;
  },
  /**
   * @param {object} state
   * @param {object} getters
   * @return {string}
   */
  getParallelCorporaBaseId: (e, t) => `${t.getCurrentRevision}_${e.currentSourceSection.id}`,
  getTargetPageTitleForPublishing: (e, t) => {
    const { currentSourceSection: n } = e;
    return n.isLeadSection ? n.title : t.getCurrentTargetPage.title;
  }
}, Y0 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Rn(a)
  );
  return s && Ou(s) ? Ht.parseTemplateWikitext(
    Fu(s),
    n,
    t
  ) : Promise.resolve(null);
}, ju = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Rn(a)
  );
  return s ? Ht.parseTemplateWikitext(
    Fu(s),
    n,
    t
  ) : Promise.resolve(null);
};
function Ji(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, r = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(r, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let Ss;
const Zi = ({ dispatch: e, commit: t }) => {
  if (!Ss) {
    let n = 1e3, o = 0;
    Ss = Ji(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then((a) => {
        a instanceof po ? (n *= o + 1, o++, setTimeout(Ss, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
      }).catch((a) => {
        if (a instanceof yo)
          t("setIsLoginDialogOn", !0);
        else
          throw a;
      });
    }, 3e3);
  }
  return Ss;
}, J0 = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), Zi({ dispatch: e, commit: t }).cancel();
}, Z0 = (o) => W(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield la.fetchCXServerToken().then(
    (r) => {
      r.age <= 30 && (r.age = 3600);
      const l = Math.floor(Date.now() / 1e3);
      r.refreshAt = l + r.age - 30, n("setCXServerToken", r);
    },
    (r) => {
      if (r === "token-impossible") {
        const l = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: l + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (i = t.cxServerToken) == null ? void 0 : i.jwt;
});
function Q0(n, o) {
  return W(this, arguments, function* ({ dispatch: e }, t) {
    const s = yield e(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage: t.sourceLanguage,
        targetLanguage: t.targetLanguage,
        sourceTitle: t.title
      },
      { root: !0 }
    );
    e("initializeSectionTranslation", s);
  });
}
function e1({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
}
function t1({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentTranslation", n);
}
function n1(n) {
  return W(this, arguments, function* ({
    dispatch: e,
    state: t
  }) {
    const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
    yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
  });
}
function o1(s, a) {
  return W(this, arguments, function* ({ commit: e, dispatch: t, state: n }, o) {
    const { currentSourceSection: i, currentMTProvider: r } = n;
    i.selectTranslationUnitById(o), yield t("translateTranslationUnitById", {
      id: o,
      provider: r
    });
    const { followingTranslationUnit: l } = i;
    l && (yield t("translateTranslationUnitById", {
      id: l.id,
      provider: r
    }));
  });
}
function s1({
  dispatch: e,
  getters: t,
  commit: n,
  state: o
}) {
  const s = t.getCurrentProposedTranslation, { currentSourceSection: a, currentMTProvider: i } = o;
  a.setTranslationForSelectedTranslationUnit(
    s,
    i
  ), Zi({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function a1(a, i) {
  return W(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
    const r = document.createElement("div");
    r.innerHTML = s, r.querySelectorAll(".sx-edit-dummy-node").forEach((f) => f.remove()), s = r.innerHTML;
    const { currentSourceSection: l, targetLanguage: d, currentMTProvider: c } = e, { selectedContentTranslationUnit: u } = l;
    if (u instanceof bt) {
      const f = o.getCurrentPage, m = o.getCurrentTargetPage;
      s = (yield ju(
        s,
        (m == null ? void 0 : m.title) || f.title,
        d
      )) || s;
    }
    l.setTranslationForSelectedTranslationUnit(
      s,
      c
    ), Zi({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
  });
}
function i1({ state: e, dispatch: t }) {
  const { followingTranslationUnit: n } = e.currentSourceSection;
  n && t("selectTranslationUnitById", n.id);
}
function r1({ state: e, dispatch: t }) {
  const { selectedContentTranslationUnitIndex: n, contentTranslationUnits: o } = e.currentSourceSection, s = n - 1;
  let a = 0;
  s > -1 && (a = o[s].id), t("selectTranslationUnitById", a);
}
function l1({ commit: e, dispatch: t, state: n }, o) {
  e("setCurrentMTProvider", o);
  const { currentSourceSection: s } = n, { selectedTranslationUnitId: a } = s;
  t("translateTranslationUnitById", { id: a, provider: o });
}
function c1(i, r) {
  return W(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
    const { currentSourceSection: l, targetLanguage: d } = t;
    if (l.hasProposedTranslationByTranslationUnitId(s, a))
      return;
    let c = l.getOriginalContentByTranslationUnitId(s);
    const u = l.getContentTranslationUnitById(s);
    let g;
    if (e("addMtRequestsPending", s), g = yield n(
      "translator/translateContent",
      { originalContent: c, provider: a },
      { root: !0 }
    ), !g) {
      e("removeMtRequestsPending", s);
      return;
    }
    if (u instanceof bt) {
      u.setBlockTemplateAdaptationInfoByHtml(
        a,
        g
      );
      const f = o.getCurrentPage, m = o.getCurrentTargetPage;
      g = (yield Y0(
        g,
        (m == null ? void 0 : m.title) || f.title,
        d
      )) || "";
    }
    e("setProposedTranslationForTranslationUnitById", {
      id: s,
      provider: a,
      proposedTranslation: g
    }), e("removeMtRequestsPending", s);
  });
}
function u1({
  rootGetters: e,
  dispatch: t,
  state: n
}) {
  const { sourceLanguage: o, targetLanguage: s, currentSourceSection: a } = n, i = e["mediawiki/getSupportedMTProviders"](
    o,
    s
  ), { selectedTranslationUnitId: r } = a;
  i.forEach(
    (l) => t("translateTranslationUnitById", { id: r, provider: l })
  );
}
function d1({ commit: e }) {
  e("setCurrentSectionSuggestion", null);
}
const g1 = {
  applyEditedTranslationToSelectedTranslationUnit: a1,
  applyProposedTranslationToSelectedTranslationUnit: s1,
  clearCurrentSectionSuggestion: d1,
  clearPendingSaveTranslationRequests: J0,
  fetchCurrentSectionSuggestionLanguageTitles: n1,
  getCXServerToken: Z0,
  initializeSectionTranslation: e1,
  restoreSectionTranslation: t1,
  selectNextTranslationUnit: i1,
  selectPreviousTranslationUnit: r1,
  selectTranslationUnitById: o1,
  startFavoriteSectionTranslation: Q0,
  translateTranslationUnitById: c1,
  translateSelectedTranslationUnitForAllProviders: u1,
  updateMTProvider: l1
}, f1 = {
  /**
   * @param state
   * @param {string|0} value
   */
  addMtRequestsPending(e, t) {
    e.mtRequestsPending.push(t);
  },
  /**
   * @param state
   * @param {string|0} value
   */
  removeMtRequestsPending(e, t) {
    e.mtRequestsPending = e.mtRequestsPending.filter(
      (n) => n !== t
    );
  },
  /**
   * This mutation is being called both for section suggestions and for
   * page suggestions. However, "currentSectionSuggestion" state variable
   * should be a instance of SectionSuggestion class. For that reason, we should
   * cast the argument to SectionSuggestion object before setting it as
   * "currentSectionSuggestion", for type integrity.
   *
   * @param {object} state
   * @param {SectionSuggestion|ArticleSuggestion|null} suggestion
   */
  setCurrentSectionSuggestion(e, t) {
    e.currentSectionSuggestion = t && new Ft(yt(lt({}, t), {
      missing: (t == null ? void 0 : t.missingSections) || {},
      present: (t == null ? void 0 : t.presentSections) || {}
    }));
  },
  /**
   * @param {object} state
   * @param {boolean} isRestored
   */
  setCurrentTranslationRestored(e, t) {
    e.currentTranslation.restored = t;
  },
  /**
   * @param {object} state
   * @param {Translation} translation
   */
  setCurrentTranslation(e, t) {
    e.currentTranslation = t;
  },
  /**
   * @param state
   * @param {PageSection} section
   */
  setCurrentSourceSection(e, t) {
    e.currentSourceSection = t;
  },
  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionTitleTranslation(e, t) {
    e.currentSourceSection.translatedTitle = t;
  },
  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionEditedTranslation(e, t) {
    e.currentSourceSection.editedTranslation = t;
  },
  setProposedTranslationForTranslationUnitById(e, { id: t, provider: n, proposedTranslation: o }) {
    if (t === 0) {
      e.currentSourceSection.proposedTitleTranslations[n] = o;
      return;
    }
    const s = e.currentSourceSection.getContentTranslationUnitById(t);
    s instanceof bt ? s.blockTemplateProposedTranslations[n] = o : s instanceof _n && s.addProposedTranslation(n, o);
  },
  /**
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (e, t) => {
    e.currentMTProvider = t;
    const { sourceLanguage: n, targetLanguage: o } = e, s = Re.getStorageKey(
      n,
      o
    );
    mw.storage.set(s, t);
  },
  setSourceLanguage: (e, t) => {
    e.sourceLanguage = t;
  },
  setTargetLanguage: (e, t) => {
    e.targetLanguage = t;
  },
  /**
   * @param state
   * @param {("NEW_SECTION"|"SANDBOX_SECTION")} target
   */
  setPublishTarget: (e, t) => {
    if (!["NEW_SECTION", "SANDBOX_SECTION"].includes(t))
      throw "Invalid publish target";
    e.publishTarget = t;
  },
  /**
   * @param {object} state
   * @param {boolean} value
   */
  setAutoSavePending: (e, t) => {
    e.autoSavePending = t;
  },
  setCXServerToken: (e, t) => {
    e.cxServerToken = t;
  },
  /**
   * @param {object} state
   */
  increaseTranslationDataLoadingCounter(e) {
    e.translationDataLoadingCounter++;
  },
  /**
   * @param {object} state
   */
  decreaseTranslationDataLoadingCounter(e) {
    e.translationDataLoadingCounter--;
  },
  /**
   * @param {object} state
   * @param {boolean} value
   */
  setIsLoginDialogOn: (e, t) => {
    e.isLoginDialogOn = t;
  },
  setPreviousRoute: (e, t) => {
    e.previousRoute = t;
  }
}, p1 = {
  namespaced: !0,
  state: K0,
  getters: X0,
  actions: g1,
  mutations: f1
}, Hu = o_({
  modules: { translator: q_, suggestions: S0, mediawiki: W0, application: p1 }
});
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Zt = typeof window != "undefined";
function m1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Oe = Object.assign;
function Na(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = St(s) ? s.map(e) : e(s);
  }
  return n;
}
const Fo = () => {
}, St = Array.isArray;
function Pe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const h1 = /\/$/, _1 = (e) => e.replace(h1, "");
function Fa(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const r = t.indexOf("#");
  let l = t.indexOf("?");
  return r < l && r >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, r > -1 ? r : t.length), s = e(a)), r > -1 && (o = o || t.slice(0, r), i = t.slice(r, t.length)), o = b1(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function v1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function gl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function fl(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && kn(t.matched[o], n.matched[s]) && qu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function kn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function qu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!y1(e[n], t[n]))
      return !1;
  return !0;
}
function y1(e, t) {
  return St(e) ? pl(e, t) : St(t) ? pl(t, e) : e === t;
}
function pl(e, t) {
  return St(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function b1(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return Pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, i, r;
  for (i = 0; i < o.length; i++)
    if (r = o[i], r !== ".")
      if (r === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/");
}
var jo;
(function(e) {
  e.pop = "pop", e.push = "push";
})(jo || (jo = {}));
var Mo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Mo || (Mo = {}));
function S1(e) {
  if (!e)
    if (Zt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), _1(e);
}
const w1 = /^[^#]+#/;
function C1(e, t) {
  return e.replace(w1, "#") + t;
}
function x1(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const ca = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function E1(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          Pe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        Pe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && Pe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = x1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function ml(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ii = /* @__PURE__ */ new Map();
function A1(e, t) {
  ii.set(e, t);
}
function k1(e) {
  const t = ii.get(e);
  return ii.delete(e), t;
}
let T1 = () => location.protocol + "//" + location.host;
function Gu(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(r);
    return l[0] !== "/" && (l = "/" + l), gl(l, "");
  }
  return gl(n, e) + o + s;
}
function D1(e, t, n, o) {
  let s = [], a = [], i = null;
  const r = ({ state: g }) => {
    const f = Gu(e, location), m = n.value, C = t.value;
    let x = 0;
    if (g) {
      if (n.value = f, t.value = g, i && i === m) {
        i = null;
        return;
      }
      x = C ? g.position - C.position : 0;
    } else
      o(f);
    s.forEach((E) => {
      E(n.value, m, {
        delta: x,
        type: jo.pop,
        direction: x ? x > 0 ? Mo.forward : Mo.back : Mo.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function d(g) {
    s.push(g);
    const f = () => {
      const m = s.indexOf(g);
      m > -1 && s.splice(m, 1);
    };
    return a.push(f), f;
  }
  function c() {
    const { history: g } = window;
    g.state && g.replaceState(Oe({}, g.state, { scroll: ca() }), "");
  }
  function u() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", r), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", r), window.addEventListener("beforeunload", c, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: d,
    destroy: u
  };
}
function hl(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? ca() : null
  };
}
function L1(e) {
  const { history: t, location: n } = window, o = {
    value: Gu(e, n)
  }, s = { value: t.state };
  s.value || a(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function a(l, d, c) {
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : T1() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (f) {
      ({}).NODE_ENV !== "production" ? Pe("Error with push/replace State", f) : console.error(f), n[c ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const c = Oe({}, t.state, hl(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(l, c, !0), o.value = l;
  }
  function r(l, d) {
    const c = Oe(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: l,
        scroll: ca()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(c.current, c, !0);
    const u = Oe({}, hl(o.value, l, null), { position: c.position + 1 }, d);
    a(l, u, !1), o.value = l;
  }
  return {
    location: o,
    state: s,
    push: r,
    replace: i
  };
}
function P1(e) {
  e = S1(e);
  const t = L1(e), n = D1(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = Oe({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: C1.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function N1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Pe(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), P1(e);
}
function F1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Wu(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const dn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, ri = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var _l;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(_l || (_l = {}));
const M1 = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${I1(t)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function mo(e, t) {
  return {}.NODE_ENV !== "production" ? Oe(new Error(M1[e](t)), {
    type: e,
    [ri]: !0
  }, t) : Oe(new Error(), {
    type: e,
    [ri]: !0
  }, t);
}
function Kt(e, t) {
  return e instanceof Error && ri in e && (t == null || !!(e.type & t));
}
const O1 = ["params", "query", "hash"];
function I1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of O1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const vl = "[^/]+?", B1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, $1 = /[.+*?^${}()[\]/\\]/g;
function U1(e, t) {
  const n = Oe({}, B1, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const c = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let u = 0; u < d.length; u++) {
      const g = d[u];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        u || (s += "/"), s += g.value.replace($1, "\\$&"), f += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: C, optional: x, regexp: E } = g;
        a.push({
          name: m,
          repeatable: C,
          optional: x
        });
        const L = E || vl;
        if (L !== vl) {
          f += 10;
          try {
            new RegExp(`(${L})`);
          } catch (V) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${L}): ` + V.message);
          }
        }
        let I = C ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
        u || (I = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        x && d.length < 2 ? `(?:/${I})` : "/" + I), x && (I += "?"), s += I, f += 20, x && (f += -8), C && (f += -20), L === ".*" && (f += -50);
      }
      c.push(f);
    }
    o.push(c);
  }
  if (n.strict && n.end) {
    const d = o.length - 1;
    o[d][o[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function r(d) {
    const c = d.match(i), u = {};
    if (!c)
      return null;
    for (let g = 1; g < c.length; g++) {
      const f = c[g] || "", m = a[g - 1];
      u[m.name] = f && m.repeatable ? f.split("/") : f;
    }
    return u;
  }
  function l(d) {
    let c = "", u = !1;
    for (const g of e) {
      (!u || !c.endsWith("/")) && (c += "/"), u = !1;
      for (const f of g)
        if (f.type === 0)
          c += f.value;
        else if (f.type === 1) {
          const { value: m, repeatable: C, optional: x } = f, E = m in d ? d[m] : "";
          if (St(E) && !C)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const L = St(E) ? E.join("/") : E;
          if (!L)
            if (x)
              g.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : u = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          c += L;
        }
    }
    return c || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: r,
    stringify: l
  };
}
function R1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function V1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = R1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (yl(o))
      return 1;
    if (yl(s))
      return -1;
  }
  return s.length - o.length;
}
function yl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const z1 = {
  type: 0,
  value: ""
}, j1 = /[a-zA-Z0-9_]/;
function H1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[z1]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(f) {
    throw new Error(`ERR (${n})/"${d}": ${f}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let r = 0, l, d = "", c = "";
  function u() {
    d && (n === 0 ? a.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: d,
      regexp: c,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += l;
  }
  for (; r < e.length; ) {
    if (l = e[r++], l === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (d && u(), i()) : l === ":" ? (u(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        l === "(" ? n = 2 : j1.test(l) ? g() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && r--);
        break;
      case 2:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
        break;
      case 3:
        u(), n = 0, l !== "*" && l !== "?" && l !== "+" && r--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), u(), i(), s;
}
function q1(e, t, n) {
  const o = U1(H1(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && Pe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = Oe(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function G1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = wl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return o.get(c);
  }
  function a(c, u, g) {
    const f = !g, m = W1(c);
    ({}).NODE_ENV !== "production" && J1(m, u), m.aliasOf = g && g.record;
    const C = wl(t, c), x = [
      m
    ];
    if ("alias" in c) {
      const I = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const V of I)
        x.push(Oe({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: V,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let E, L;
    for (const I of x) {
      const { path: V } = I;
      if (u && V[0] !== "/") {
        const J = u.record.path, se = J[J.length - 1] === "/" ? "" : "/";
        I.path = u.record.path + (V && se + V);
      }
      if ({}.NODE_ENV !== "production" && I.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (E = q1(I, u, C), {}.NODE_ENV !== "production" && u && V[0] === "/" && Z1(E, u), g ? (g.alias.push(E), {}.NODE_ENV !== "production" && Y1(g, E)) : (L = L || E, L !== E && L.alias.push(E), f && c.name && !Sl(E) && i(c.name)), m.children) {
        const J = m.children;
        for (let se = 0; se < J.length; se++)
          a(J[se], E, g && g.children[se]);
      }
      g = g || E, (E.record.components && Object.keys(E.record.components).length || E.record.name || E.record.redirect) && l(E);
    }
    return L ? () => {
      i(L);
    } : Fo;
  }
  function i(c) {
    if (Wu(c)) {
      const u = o.get(c);
      u && (o.delete(c), n.splice(n.indexOf(u), 1), u.children.forEach(i), u.alias.forEach(i));
    } else {
      const u = n.indexOf(c);
      u > -1 && (n.splice(u, 1), c.record.name && o.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i));
    }
  }
  function r() {
    return n;
  }
  function l(c) {
    let u = 0;
    for (; u < n.length && V1(c, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (c.record.path !== n[u].record.path || !Ku(c, n[u])); )
      u++;
    n.splice(u, 0, c), c.record.name && !Sl(c) && o.set(c.record.name, c);
  }
  function d(c, u) {
    let g, f = {}, m, C;
    if ("name" in c && c.name) {
      if (g = o.get(c.name), !g)
        throw mo(1, {
          location: c
        });
      if ({}.NODE_ENV !== "production") {
        const L = Object.keys(c.params || {}).filter((I) => !g.keys.find((V) => V.name === I));
        L.length && Pe(`Discarded invalid param(s) "${L.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      C = g.record.name, f = Oe(
        // paramsFromLocation is a new object
        bl(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((L) => !L.optional).map((L) => L.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && bl(c.params, g.keys.map((L) => L.name))
      ), m = g.stringify(f);
    } else if ("path" in c)
      m = c.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && Pe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((L) => L.re.test(m)), g && (f = g.parse(m), C = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((L) => L.re.test(u.path)), !g)
        throw mo(1, {
          location: c,
          currentLocation: u
        });
      C = g.record.name, f = Oe({}, u.params, c.params), m = g.stringify(f);
    }
    const x = [];
    let E = g;
    for (; E; )
      x.unshift(E.record), E = E.parent;
    return {
      name: C,
      path: m,
      params: f,
      matched: x,
      meta: X1(x)
    };
  }
  return e.forEach((c) => a(c)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: r, getRecordMatcher: s };
}
function bl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function W1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: K1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function K1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Sl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function X1(e) {
  return e.reduce((t, n) => Oe(t, n.meta), {});
}
function wl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function li(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Y1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(li.bind(null, n)))
      return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(li.bind(null, n)))
      return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function J1(e, t) {
  t && t.record.name && !e.name && !e.path && Pe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Z1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(li.bind(null, n)))
      return Pe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Ku(e, t) {
  return t.children.some((n) => n === e || Ku(e, n));
}
const Xu = /#/g, Q1 = /&/g, ev = /\//g, tv = /=/g, nv = /\?/g, Yu = /\+/g, ov = /%5B/g, sv = /%5D/g, Ju = /%5E/g, av = /%60/g, Zu = /%7B/g, iv = /%7C/g, Qu = /%7D/g, rv = /%20/g;
function Qi(e) {
  return encodeURI("" + e).replace(iv, "|").replace(ov, "[").replace(sv, "]");
}
function lv(e) {
  return Qi(e).replace(Zu, "{").replace(Qu, "}").replace(Ju, "^");
}
function ci(e) {
  return Qi(e).replace(Yu, "%2B").replace(rv, "+").replace(Xu, "%23").replace(Q1, "%26").replace(av, "`").replace(Zu, "{").replace(Qu, "}").replace(Ju, "^");
}
function cv(e) {
  return ci(e).replace(tv, "%3D");
}
function uv(e) {
  return Qi(e).replace(Xu, "%23").replace(nv, "%3F");
}
function dv(e) {
  return e == null ? "" : uv(e).replace(ev, "%2F");
}
function Ho(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Pe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function gv(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Yu, " "), i = a.indexOf("="), r = Ho(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : Ho(a.slice(i + 1));
    if (r in t) {
      let d = t[r];
      St(d) || (d = t[r] = [d]), d.push(l);
    } else
      t[r] = l;
  }
  return t;
}
function Cl(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = cv(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (St(o) ? o.map((a) => a && ci(a)) : [o && ci(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function fv(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = St(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const pv = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), xl = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ua = Symbol({}.NODE_ENV !== "production" ? "router" : ""), ed = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), ui = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Ao() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const s = e.indexOf(o);
      s > -1 && e.splice(s, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function vn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, r) => {
    const l = (u) => {
      u === !1 ? r(mo(4, {
        from: n,
        to: t
      })) : u instanceof Error ? r(u) : F1(u) ? r(mo(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? mv(l, t, n) : l);
    let c = Promise.resolve(d);
    if (e.length < 3 && (c = c.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        c = c.then((g) => l._called ? g : (Pe(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !l._called) {
        Pe(u), r(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((u) => r(u));
  });
}
function mv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ma(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && Pe(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let r = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!r || typeof r != "object" && typeof r != "function")
          throw Pe(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(r)}".`), new Error("Invalid route component");
        if ("then" in r) {
          Pe(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = r;
          r = () => l;
        } else
          r.__asyncLoader && // warn only once per component
          !r.__warnedDefineAsync && (r.__warnedDefineAsync = !0, Pe(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (hv(r)) {
          const d = (r.__vccOpts || r)[t];
          d && s.push(vn(d, n, o, a, i));
        } else {
          let l = r();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (Pe(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const c = m1(d) ? d.default : d;
            a.components[i] = c;
            const g = (c.__vccOpts || c)[t];
            return g && vn(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function hv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function El(e) {
  const t = Ke(ua), n = Ke(ed), o = b(() => t.resolve(pe(e.to))), s = b(() => {
    const { matched: l } = o.value, { length: d } = l, c = l[d - 1], u = n.matched;
    if (!c || !u.length)
      return -1;
    const g = u.findIndex(kn.bind(null, c));
    if (g > -1)
      return g;
    const f = Al(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Al(c) === f && // avoid comparing the child with its parent
      u[u.length - 1].path !== f ? u.findIndex(kn.bind(null, l[d - 2])) : g
    );
  }), a = b(() => s.value > -1 && bv(n.params, o.value.params)), i = b(() => s.value > -1 && s.value === n.matched.length - 1 && qu(n.params, o.value.params));
  function r(l = {}) {
    return yv(l) ? t[pe(e.replace) ? "replace" : "push"](
      pe(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Fo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Zt) {
    const l = Oi();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), Cc(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: b(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: r
  };
}
const _v = /* @__PURE__ */ Dc({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: El,
  setup(e, { slots: t }) {
    const n = ho(El(e)), { options: o } = Ke(ua), s = b(() => ({
      [kl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [kl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Ro("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), vv = _v;
function yv(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function bv(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!St(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function Al(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const kl = (e, t, n) => e != null ? e : t != null ? t : n, Sv = /* @__PURE__ */ Dc({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    ({}).NODE_ENV !== "production" && Cv();
    const o = Ke(ui), s = b(() => e.route || o.value), a = Ke(xl, 0), i = b(() => {
      let d = pe(a);
      const { matched: c } = s.value;
      let u;
      for (; (u = c[d]) && !u.components; )
        d++;
      return d;
    }), r = b(() => s.value.matched[i.value]);
    ks(xl, b(() => i.value + 1)), ks(pv, r), ks(ui, s);
    const l = Q();
    return He(() => [l.value, r.value, e.name], ([d, c, u], [g, f, m]) => {
      c && (c.instances[u] = d, f && f !== c && d && d === g && (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards), c.updateGuards.size || (c.updateGuards = f.updateGuards))), d && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!f || !kn(c, f) || !g) && (c.enterCallbacks[u] || []).forEach((C) => C(d));
    }, { flush: "post" }), () => {
      const d = s.value, c = e.name, u = r.value, g = u && u.components[c];
      if (!g)
        return Tl(n.default, { Component: g, route: d });
      const f = u.props[c], m = f ? f === !0 ? d.params : typeof f == "function" ? f(d) : f : null, x = Ro(g, Oe({}, m, t, {
        onVnodeUnmounted: (E) => {
          E.component.isUnmounted && (u.instances[c] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && Zt && x.ref) {
        const E = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (St(x.ref) ? x.ref.map((I) => I.i) : [x.ref.i]).forEach((I) => {
          I.__vrv_devtools = E;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Tl(n.default, { Component: x, route: d }) || x
      );
    };
  }
});
function Tl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const wv = Sv;
function Cv() {
  const e = Oi(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    Pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function ko(e, t) {
  const n = Oe({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Nv(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function ws(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let xv = 0;
function Ev(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = xv++;
  hu({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((c, u) => {
      c.instanceData && c.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ko(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: c, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        c.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: td
        });
      }
      St(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let f = sd, m = "";
        g.isExactActive ? (f = od, m = "This is exactly active") : g.isActive && (f = nd, m = "This link is active"), c.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: f
        });
      }));
    }), He(t.currentRoute, () => {
      l(), s.notifyComponentUpdate(), s.sendInspectorTree(r), s.sendInspectorState(r);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((c, u) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: u.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: c },
          groupId: u.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((c, u) => {
      const g = {
        guard: ws("beforeEach"),
        from: ko(u, "Current Location during this navigation"),
        to: ko(c, "Target location")
      };
      Object.defineProperty(c.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: c.fullPath,
          data: g,
          groupId: c.meta.__navigationId
        }
      });
    }), t.afterEach((c, u, g) => {
      const f = {
        guard: ws("afterEach")
      };
      g ? (f.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, f.status = ws("❌")) : f.status = ws("✅"), f.from = ko(u, "Current Location during this navigation"), f.to = ko(c, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: c.fullPath,
          time: s.now(),
          data: f,
          logType: g ? "warning" : "default",
          groupId: c.meta.__navigationId
        }
      });
    });
    const r = "router-inspector:" + o;
    s.addInspector({
      id: r,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!d)
        return;
      const c = d;
      let u = n.getRoutes().filter((g) => !g.parent);
      u.forEach(rd), c.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        di(g, c.filter.toLowerCase())
      ))), u.forEach((g) => id(g, t.currentRoute.value)), c.rootNodes = u.map(ad);
    }
    let d;
    s.on.getInspectorTree((c) => {
      d = c, c.app === e && c.inspectorId === r && l();
    }), s.on.getInspectorState((c) => {
      if (c.app === e && c.inspectorId === r) {
        const g = n.getRoutes().find((f) => f.record.__vd_id === c.nodeId);
        g && (c.state = {
          options: kv(g)
        });
      }
    }), s.sendInspectorTree(r), s.sendInspectorState(r);
  });
}
function Av(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function kv(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${Av(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const td = 15485081, nd = 2450411, od = 8702998, Tv = 2282478, sd = 16486972, Dv = 6710886;
function ad(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Tv
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: sd
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: td
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: od
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: nd
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Dv
  });
  let o = n.__vd_id;
  return o == null && (o = String(Lv++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(ad)
  };
}
let Lv = 0;
const Pv = /^\/(.*)\/([a-z]*)$/;
function id(e, t) {
  const n = t.matched.length && kn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => kn(o, e.record))), e.children.forEach((o) => id(o, t));
}
function rd(e) {
  e.__vd_match = !1, e.children.forEach(rd);
}
function di(e, t) {
  const n = String(e.re).match(Pv);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => di(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ho(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => di(i, t));
}
function Nv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Fv(e) {
  const t = G1(e.routes, e), n = e.parseQuery || gv, o = e.stringifyQuery || Cl, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Ao(), i = Ao(), r = Ao(), l = Ng(dn);
  let d = dn;
  Zt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Na.bind(null, (k) => "" + k), u = Na.bind(null, dv), g = (
    // @ts-expect-error: intentionally avoid the type check
    Na.bind(null, Ho)
  );
  function f(k, X) {
    let K, ne;
    return Wu(k) ? (K = t.getRecordMatcher(k), ne = X) : ne = k, t.addRoute(ne, K);
  }
  function m(k) {
    const X = t.getRecordMatcher(k);
    X ? t.removeRoute(X) : {}.NODE_ENV !== "production" && Pe(`Cannot remove non-existent route "${String(k)}"`);
  }
  function C() {
    return t.getRoutes().map((k) => k.record);
  }
  function x(k) {
    return !!t.getRecordMatcher(k);
  }
  function E(k, X) {
    if (X = Oe({}, X || l.value), typeof k == "string") {
      const h = Fa(n, k, X.path), S = t.resolve({ path: h.path }, X), A = s.createHref(h.fullPath);
      return {}.NODE_ENV !== "production" && (A.startsWith("//") ? Pe(`Location "${k}" resolved to "${A}". A resolved location cannot start with multiple slashes.`) : S.matched.length || Pe(`No match found for location with path "${k}"`)), Oe(h, S, {
        params: g(S.params),
        hash: Ho(h.hash),
        redirectedFrom: void 0,
        href: A
      });
    }
    let K;
    if ("path" in k)
      ({}).NODE_ENV !== "production" && "params" in k && !("name" in k) && // @ts-expect-error: the type is never
      Object.keys(k.params).length && Pe(`Path "${k.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), K = Oe({}, k, {
        path: Fa(n, k.path, X.path).path
      });
    else {
      const h = Oe({}, k.params);
      for (const S in h)
        h[S] == null && delete h[S];
      K = Oe({}, k, {
        params: u(h)
      }), X.params = u(X.params);
    }
    const ne = t.resolve(K, X), we = k.hash || "";
    ({}).NODE_ENV !== "production" && we && !we.startsWith("#") && Pe(`A \`hash\` should always start with the character "#". Replace "${we}" with "#${we}".`), ne.params = c(g(ne.params));
    const $e = v1(o, Oe({}, k, {
      hash: lv(we),
      path: ne.path
    })), he = s.createHref($e);
    return {}.NODE_ENV !== "production" && (he.startsWith("//") ? Pe(`Location "${k}" resolved to "${he}". A resolved location cannot start with multiple slashes.`) : ne.matched.length || Pe(`No match found for location with path "${"path" in k ? k.path : k}"`)), Oe({
      fullPath: $e,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: we,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Cl ? fv(k.query) : k.query || {}
      )
    }, ne, {
      redirectedFrom: void 0,
      href: he
    });
  }
  function L(k) {
    return typeof k == "string" ? Fa(n, k, l.value.path) : Oe({}, k);
  }
  function I(k, X) {
    if (d !== k)
      return mo(8, {
        from: X,
        to: k
      });
  }
  function V(k) {
    return M(k);
  }
  function J(k) {
    return V(Oe(L(k), { replace: !0 }));
  }
  function se(k) {
    const X = k.matched[k.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: K } = X;
      let ne = typeof K == "function" ? K(k) : K;
      if (typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = L(ne) : (
        // force empty params
        { path: ne }
      ), ne.params = {}), {}.NODE_ENV !== "production" && !("path" in ne) && !("name" in ne))
        throw Pe(`Invalid redirect found:
${JSON.stringify(ne, null, 2)}
 when navigating to "${k.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Oe({
        query: k.query,
        hash: k.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in ne ? {} : k.params
      }, ne);
    }
  }
  function M(k, X) {
    const K = d = E(k), ne = l.value, we = k.state, $e = k.force, he = k.replace === !0, h = se(K);
    if (h)
      return M(
        Oe(L(h), {
          state: typeof h == "object" ? Oe({}, we, h.state) : we,
          force: $e,
          replace: he
        }),
        // keep original redirectedFrom if it exists
        X || K
      );
    const S = K;
    S.redirectedFrom = X;
    let A;
    return !$e && fl(o, ne, K) && (A = mo(16, { to: S, from: ne }), vt(
      ne,
      ne,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (A ? Promise.resolve(A) : Te(S, ne)).catch((T) => Kt(T) ? (
      // navigation redirects still mark the router as ready
      Kt(
        T,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? T : Ct(T)
    ) : (
      // reject any unknown error
      re(T, S, ne)
    )).then((T) => {
      if (T) {
        if (Kt(
          T,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          fl(o, E(T.to), S) && // and we have done it a couple of times
          X && // @ts-expect-error: added only in dev
          (X._count = X._count ? (
            // @ts-expect-error
            X._count + 1
          ) : 1) > 30 ? (Pe(`Detected a possibly infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${S.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : M(
            // keep options
            Oe({
              // preserve an existing replacement but allow the redirect to override it
              replace: he
            }, L(T.to), {
              state: typeof T.to == "object" ? Oe({}, we, T.to.state) : we,
              force: $e
            }),
            // preserve the original redirectedFrom if any
            X || S
          );
      } else
        T = Z(S, ne, !0, he, we);
      return De(S, ne, T), T;
    });
  }
  function O(k, X) {
    const K = I(k, X);
    return K ? Promise.reject(K) : Promise.resolve();
  }
  function fe(k) {
    const X = Tt.values().next().value;
    return X && typeof X.runWithContext == "function" ? X.runWithContext(k) : k();
  }
  function Te(k, X) {
    let K;
    const [ne, we, $e] = Mv(k, X);
    K = Ma(ne.reverse(), "beforeRouteLeave", k, X);
    for (const h of ne)
      h.leaveGuards.forEach((S) => {
        K.push(vn(S, k, X));
      });
    const he = O.bind(null, k, X);
    return K.push(he), Bt(K).then(() => {
      K = [];
      for (const h of a.list())
        K.push(vn(h, k, X));
      return K.push(he), Bt(K);
    }).then(() => {
      K = Ma(we, "beforeRouteUpdate", k, X);
      for (const h of we)
        h.updateGuards.forEach((S) => {
          K.push(vn(S, k, X));
        });
      return K.push(he), Bt(K);
    }).then(() => {
      K = [];
      for (const h of $e)
        if (h.beforeEnter)
          if (St(h.beforeEnter))
            for (const S of h.beforeEnter)
              K.push(vn(S, k, X));
          else
            K.push(vn(h.beforeEnter, k, X));
      return K.push(he), Bt(K);
    }).then(() => (k.matched.forEach((h) => h.enterCallbacks = {}), K = Ma($e, "beforeRouteEnter", k, X), K.push(he), Bt(K))).then(() => {
      K = [];
      for (const h of i.list())
        K.push(vn(h, k, X));
      return K.push(he), Bt(K);
    }).catch((h) => Kt(
      h,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? h : Promise.reject(h));
  }
  function De(k, X, K) {
    r.list().forEach((ne) => fe(() => ne(k, X, K)));
  }
  function Z(k, X, K, ne, we) {
    const $e = I(k, X);
    if ($e)
      return $e;
    const he = X === dn, h = Zt ? history.state : {};
    K && (ne || he ? s.replace(k.fullPath, Oe({
      scroll: he && h && h.scroll
    }, we)) : s.push(k.fullPath, we)), l.value = k, vt(k, X, K, he), Ct();
  }
  let Le;
  function Ye() {
    Le || (Le = s.listen((k, X, K) => {
      if (!Fn.listening)
        return;
      const ne = E(k), we = se(ne);
      if (we) {
        M(Oe(we, { replace: !0 }), ne).catch(Fo);
        return;
      }
      d = ne;
      const $e = l.value;
      Zt && A1(ml($e.fullPath, K.delta), ca()), Te(ne, $e).catch((he) => Kt(
        he,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? he : Kt(
        he,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (M(
        he.to,
        ne
        // avoid an uncaught rejection, let push call triggerError
      ).then((h) => {
        Kt(
          h,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !K.delta && K.type === jo.pop && s.go(-1, !1);
      }).catch(Fo), Promise.reject()) : (K.delta && s.go(-K.delta, !1), re(he, ne, $e))).then((he) => {
        he = he || Z(
          // after navigation, all matched components are resolved
          ne,
          $e,
          !1
        ), he && (K.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Kt(
          he,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-K.delta, !1) : K.type === jo.pop && Kt(
          he,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), De(ne, $e, he);
      }).catch(Fo);
    }));
  }
  let Je = Ao(), Ue = Ao(), me;
  function re(k, X, K) {
    Ct(k);
    const ne = Ue.list();
    return ne.length ? ne.forEach((we) => we(k, X, K)) : ({}.NODE_ENV !== "production" && Pe("uncaught error during route navigation:"), console.error(k)), Promise.reject(k);
  }
  function it() {
    return me && l.value !== dn ? Promise.resolve() : new Promise((k, X) => {
      Je.add([k, X]);
    });
  }
  function Ct(k) {
    return me || (me = !k, Ye(), Je.list().forEach(([X, K]) => k ? K(k) : X()), Je.reset()), k;
  }
  function vt(k, X, K, ne) {
    const { scrollBehavior: we } = e;
    if (!Zt || !we)
      return Promise.resolve();
    const $e = !K && k1(ml(k.fullPath, 0)) || (ne || !K) && history.state && history.state.scroll || null;
    return _o().then(() => we(k, X, $e)).then((he) => he && E1(he)).catch((he) => re(he, k, X));
  }
  const dt = (k) => s.go(k);
  let gt;
  const Tt = /* @__PURE__ */ new Set(), Fn = {
    currentRoute: l,
    listening: !0,
    addRoute: f,
    removeRoute: m,
    hasRoute: x,
    getRoutes: C,
    resolve: E,
    options: e,
    push: V,
    replace: J,
    go: dt,
    back: () => dt(-1),
    forward: () => dt(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: r.add,
    onError: Ue.add,
    isReady: it,
    install(k) {
      const X = this;
      k.component("RouterLink", vv), k.component("RouterView", wv), k.config.globalProperties.$router = X, Object.defineProperty(k.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => pe(l)
      }), Zt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !gt && l.value === dn && (gt = !0, V(s.location).catch((we) => {
        ({}).NODE_ENV !== "production" && Pe("Unexpected error when starting the router:", we);
      }));
      const K = {};
      for (const we in dn)
        Object.defineProperty(K, we, {
          get: () => l.value[we],
          enumerable: !0
        });
      k.provide(ua, X), k.provide(ed, nc(K)), k.provide(ui, l);
      const ne = k.unmount;
      Tt.add(k), k.unmount = function() {
        Tt.delete(k), Tt.size < 1 && (d = dn, Le && Le(), Le = null, l.value = dn, gt = !1, me = !1), ne();
      }, {}.NODE_ENV !== "production" && Zt && Ev(k, X, t);
    }
  };
  function Bt(k) {
    return k.reduce((X, K) => X.then(() => fe(K)), Promise.resolve());
  }
  return Fn;
}
function Mv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const r = t.matched[i];
    r && (e.matched.find((d) => kn(d, r)) ? o.push(r) : n.push(r));
    const l = e.matched[i];
    l && (t.matched.find((d) => kn(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function mt() {
  return Ke(ua);
}
const Ov = {
  aa: [
    "Latn",
    [
      "AF"
    ],
    "Qafár af"
  ],
  aae: [
    "Latn",
    [
      "EU"
    ],
    "arbërisht"
  ],
  ab: [
    "Cyrl",
    [
      "EU"
    ],
    "аԥсшәа"
  ],
  abe: [
    "Latn",
    [
      "AM"
    ],
    "Wôbanakiôdwawôgan"
  ],
  abs: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Ambon"
  ],
  ace: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Acèh"
  ],
  acf: [
    "Latn",
    [
      "AM"
    ],
    "kwéyòl"
  ],
  acm: [
    "Arab",
    [
      "ME"
    ],
    "عراقي"
  ],
  ady: [
    "Cyrl",
    [
      "EU",
      "ME"
    ],
    "адыгабзэ"
  ],
  "ady-cyrl": [
    "ady"
  ],
  "ady-latn": [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "Adygabze"
  ],
  aeb: [
    "aeb-arab"
  ],
  "aeb-arab": [
    "Arab",
    [
      "AF"
    ],
    "تونسي"
  ],
  "aeb-latn": [
    "Latn",
    [
      "AF"
    ],
    "Tûnsî"
  ],
  af: [
    "Latn",
    [
      "AF"
    ],
    "Afrikaans"
  ],
  agq: [
    "Latn",
    [
      "AF"
    ],
    "aghɨ̂m"
  ],
  ahr: [
    "Deva",
    [
      "AS"
    ],
    "अहिराणी"
  ],
  ajg: [
    "Latn",
    [
      "AF"
    ],
    "ajagbe"
  ],
  ajp: [
    "Arab",
    [
      "ME"
    ],
    "شامي"
  ],
  "ajp-arab": [
    "ajp"
  ],
  "ajp-latn": [
    "Latn",
    [
      "ME"
    ],
    "šāmi"
  ],
  ak: [
    "Latn",
    [
      "AF"
    ],
    "Akan"
  ],
  akz: [
    "Latn",
    [
      "AM"
    ],
    "Albaamo innaaɬiilka"
  ],
  ale: [
    "Latn",
    [
      "AM",
      "AS"
    ],
    "unangam tunuu"
  ],
  "ale-cyrl": [
    "Cyrl",
    [
      "AS"
    ],
    "унаӈам тунуу"
  ],
  aln: [
    "Latn",
    [
      "EU"
    ],
    "Gegë"
  ],
  alt: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "алтай тил"
  ],
  am: [
    "Ethi",
    [
      "AF"
    ],
    "አማርኛ"
  ],
  ami: [
    "Latn",
    [
      "AS"
    ],
    "Pangcah"
  ],
  an: [
    "Latn",
    [
      "EU"
    ],
    "aragonés"
  ],
  ang: [
    "Latn",
    [
      "EU"
    ],
    "Ænglisc"
  ],
  ann: [
    "Latn",
    [
      "AF"
    ],
    "Obolo"
  ],
  anp: [
    "Deva",
    [
      "AS"
    ],
    "अंगिका"
  ],
  ar: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "العربية"
  ],
  arc: [
    "Syrc",
    [
      "ME"
    ],
    "ܐܪܡܝܐ"
  ],
  arn: [
    "Latn",
    [
      "AM"
    ],
    "mapudungun"
  ],
  aro: [
    "Latn",
    [
      "AM"
    ],
    "Araona"
  ],
  arq: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "جازايرية"
  ],
  ary: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "الدارجة"
  ],
  "ary-arab": [
    "ary"
  ],
  "ary-latn": [
    "Latn",
    [
      "AF",
      "ME"
    ],
    "ed-dārija"
  ],
  arz: [
    "Arab",
    [
      "AF",
      "ME"
    ],
    "مصرى"
  ],
  as: [
    "Beng",
    [
      "AS"
    ],
    "অসমীয়া"
  ],
  ase: [
    "Sgnw",
    [
      "AM"
    ],
    "American sign language"
  ],
  ast: [
    "Latn",
    [
      "EU"
    ],
    "asturianu"
  ],
  atj: [
    "Latn",
    [
      "AM"
    ],
    "atikamekw"
  ],
  atv: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "тÿндÿк алтай тил"
  ],
  av: [
    "Cyrl",
    [
      "EU"
    ],
    "авар"
  ],
  avk: [
    "Latn",
    [
      "WW"
    ],
    "Kotava"
  ],
  awa: [
    "Deva",
    [
      "AS"
    ],
    "अवधी"
  ],
  ay: [
    "Latn",
    [
      "AM"
    ],
    "Aymar aru"
  ],
  az: [
    "az-latn"
  ],
  "az-arab": [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "تۆرکجه"
  ],
  "az-latn": [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "azərbaycanca"
  ],
  "az-cyrl": [
    "Cyrl",
    [
      "EU",
      "ME"
    ],
    "азәрбајҹанҹа"
  ],
  azb: [
    "az-arab"
  ],
  azj: [
    "az-latn"
  ],
  ba: [
    "Cyrl",
    [
      "EU"
    ],
    "башҡортса"
  ],
  ban: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Bali"
  ],
  "ban-bali": [
    "Bali",
    [
      "AS",
      "PA"
    ],
    "ᬩᬮᬶ"
  ],
  bar: [
    "Latn",
    [
      "EU"
    ],
    "Boarisch"
  ],
  bas: [
    "Latn",
    [
      "AF"
    ],
    "ɓasaá"
  ],
  "bat-smg": [
    "sgs"
  ],
  "bbc-latn": [
    "Latn",
    [
      "AS"
    ],
    "Batak Toba"
  ],
  "bbc-batk": [
    "Batk",
    [
      "AS"
    ],
    "ᯅᯖᯂ᯲ ᯖᯬᯅ"
  ],
  bbc: [
    "bbc-latn"
  ],
  bcc: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "جهلسری بلوچی"
  ],
  bci: [
    "Latn",
    [
      "AF"
    ],
    "wawle"
  ],
  bcl: [
    "Latn",
    [
      "AS"
    ],
    "Bikol Central"
  ],
  bdr: [
    "Latn",
    [
      "AS"
    ],
    "Bajau Sama"
  ],
  "be-tarask": [
    "Cyrl",
    [
      "EU"
    ],
    "беларуская (тарашкевіца)"
  ],
  "be-x-old": [
    "be-tarask"
  ],
  be: [
    "Cyrl",
    [
      "EU"
    ],
    "беларуская"
  ],
  bew: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Betawi"
  ],
  bfa: [
    "Latn",
    [
      "AF"
    ],
    "Bari"
  ],
  bft: [
    "Arab",
    [
      "AS"
    ],
    "بلتی"
  ],
  bfq: [
    "Taml",
    [
      "AS"
    ],
    "படகா"
  ],
  bg: [
    "Cyrl",
    [
      "EU"
    ],
    "български"
  ],
  bgn: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "روچ کپتین بلوچی"
  ],
  bh: [
    "bho"
  ],
  bho: [
    "Deva",
    [
      "AS"
    ],
    "भोजपुरी"
  ],
  bi: [
    "Latn",
    [
      "PA"
    ],
    "Bislama"
  ],
  bjn: [
    "Latn",
    [
      "AS"
    ],
    "Banjar"
  ],
  bkm: [
    "Latn",
    [
      "AF"
    ],
    "Itaŋikom"
  ],
  blc: [
    "Latn",
    [
      "AM"
    ],
    "ItNuxalkmc"
  ],
  blk: [
    "Mymr",
    [
      "AS"
    ],
    "ပအိုဝ်ႏဘာႏသာႏ"
  ],
  bm: [
    "Latn",
    [
      "AF"
    ],
    "bamanankan"
  ],
  bn: [
    "Beng",
    [
      "AS"
    ],
    "বাংলা"
  ],
  bnn: [
    "Latn",
    [
      "AS"
    ],
    "bunun"
  ],
  bom: [
    "Latn",
    [
      "AF"
    ],
    "bèrom"
  ],
  bo: [
    "Tibt",
    [
      "AS"
    ],
    "བོད་ཡིག"
  ],
  bpy: [
    "Beng",
    [
      "AS"
    ],
    "বিষ্ণুপ্রিয়া মণিপুরী"
  ],
  bqi: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "بختیاری"
  ],
  br: [
    "Latn",
    [
      "EU"
    ],
    "brezhoneg"
  ],
  brh: [
    "Latn",
    [
      "ME",
      "AS"
    ],
    "Bráhuí"
  ],
  brx: [
    "Deva",
    [
      "AS"
    ],
    "बर'"
  ],
  bs: [
    "Latn",
    [
      "EU"
    ],
    "bosanski"
  ],
  btm: [
    "Latn",
    [
      "AS"
    ],
    "Mandailing"
  ],
  bto: [
    "Latn",
    [
      "AS"
    ],
    "Iriga Bicolano"
  ],
  bug: [
    "Bugi",
    [
      "AS"
    ],
    "ᨅᨔ ᨕᨘᨁᨗ"
  ],
  bum: [
    "Latn",
    [
      "AF"
    ],
    "bulu"
  ],
  bwr: [
    "Latn",
    [
      "AF"
    ],
    "bura"
  ],
  bxr: [
    "Cyrl",
    [
      "AS"
    ],
    "буряад"
  ],
  byn: [
    "Ethi",
    [
      "AF"
    ],
    "ብሊን"
  ],
  bzj: [
    "Latn",
    [
      "AM"
    ],
    "Bileez Kriol"
  ],
  ca: [
    "Latn",
    [
      "EU"
    ],
    "català"
  ],
  cak: [
    "Latn",
    [
      "AM"
    ],
    "Kaqchikel"
  ],
  cbk: [
    "Latn",
    [
      "AS"
    ],
    "Chavacano de Zamboanga"
  ],
  "cbk-zam": [
    "cbk"
  ],
  ccp: [
    "Cakm",
    [
      "AS"
    ],
    "𑄌𑄋𑄴𑄟𑄳𑄦"
  ],
  cdo: [
    "Latn",
    [
      "AS"
    ],
    "Mìng-dĕ̤ng-ngṳ̄"
  ],
  "cdo-latn": [
    "Latn",
    [
      "AS"
    ],
    "Mìng-dĕ̤ng-ngṳ̄ Bàng-uâ-cê"
  ],
  "cdo-hani": [
    "Hani",
    [
      "AS"
    ],
    "閩東語（漢字）"
  ],
  ce: [
    "Cyrl",
    [
      "EU"
    ],
    "нохчийн"
  ],
  ceb: [
    "Latn",
    [
      "AS"
    ],
    "Cebuano"
  ],
  ch: [
    "Latn",
    [
      "PA"
    ],
    "Chamoru"
  ],
  chm: [
    "mhr"
  ],
  chn: [
    "Latn",
    [
      "AM"
    ],
    "chinuk wawa"
  ],
  cho: [
    "Latn",
    [
      "AM"
    ],
    "Choctaw"
  ],
  chr: [
    "Cher",
    [
      "AM"
    ],
    "ᏣᎳᎩ"
  ],
  chy: [
    "Latn",
    [
      "AM"
    ],
    "Tsetsêhestâhese"
  ],
  ciw: [
    "Latn",
    [
      "AM"
    ],
    "Anishinaabemowin"
  ],
  cjy: [
    "cjy-hant"
  ],
  "cjy-hans": [
    "Hans",
    [
      "AS"
    ],
    "晋语（简化字）"
  ],
  "cjy-hant": [
    "Hant",
    [
      "AS"
    ],
    "晉語"
  ],
  ckb: [
    "Arab",
    [
      "ME"
    ],
    "کوردی"
  ],
  ckt: [
    "Cyrl",
    [
      "AS"
    ],
    "ԓыгъоравэтԓьэн"
  ],
  cnh: [
    "Latn",
    [
      "AS"
    ],
    "Lai holh"
  ],
  cnr: [
    "cnr-latn"
  ],
  "cnr-cyrl": [
    "Cyrl",
    [
      "EU"
    ],
    "црногорски"
  ],
  "cnr-latn": [
    "Latn",
    [
      "EU"
    ],
    "crnogorski"
  ],
  co: [
    "Latn",
    [
      "EU"
    ],
    "corsu"
  ],
  cop: [
    "Copt",
    [
      "AF",
      "ME"
    ],
    "ϯⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ"
  ],
  cps: [
    "Latn",
    [
      "AS"
    ],
    "Capiceño"
  ],
  cr: [
    "Cans",
    [
      "AM"
    ],
    "ᓀᐦᐃᔭᐍᐏᐣ"
  ],
  "cr-cans": [
    "cr"
  ],
  "cr-latn": [
    "Latn",
    [
      "AM"
    ],
    "Nēhiyawēwin"
  ],
  crh: [
    "Latn",
    [
      "EU"
    ],
    "qırımtatarca"
  ],
  "crh-cyrl": [
    "Cyrl",
    [
      "EU"
    ],
    "къырымтатарджа"
  ],
  "crh-latn": [
    "crh"
  ],
  cs: [
    "Latn",
    [
      "EU"
    ],
    "čeština"
  ],
  csb: [
    "Latn",
    [
      "EU"
    ],
    "kaszëbsczi"
  ],
  cu: [
    "Cyrl",
    [
      "EU"
    ],
    "словѣньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ"
  ],
  cv: [
    "Cyrl",
    [
      "EU"
    ],
    "чӑвашла"
  ],
  cy: [
    "Latn",
    [
      "EU"
    ],
    "Cymraeg"
  ],
  da: [
    "Latn",
    [
      "EU"
    ],
    "dansk"
  ],
  dag: [
    "Latn",
    [
      "AF"
    ],
    "dagbanli"
  ],
  dar: [
    "Cyrl",
    [
      "EU"
    ],
    "дарган"
  ],
  "de-at": [
    "Latn",
    [
      "EU"
    ],
    "Österreichisches Deutsch"
  ],
  "de-ch": [
    "Latn",
    [
      "EU"
    ],
    "Schweizer Hochdeutsch"
  ],
  "de-formal": [
    "Latn",
    [
      "EU"
    ],
    "Deutsch (Sie-Form)"
  ],
  de: [
    "Latn",
    [
      "EU"
    ],
    "Deutsch"
  ],
  dga: [
    "Latn",
    [
      "AF"
    ],
    "Dagaare"
  ],
  din: [
    "Latn",
    [
      "AF"
    ],
    "Thuɔŋjäŋ"
  ],
  diq: [
    "Latn",
    [
      "EU",
      "AS"
    ],
    "Zazaki"
  ],
  doi: [
    "Deva",
    [
      "AS"
    ],
    "डोगरी"
  ],
  dsb: [
    "Latn",
    [
      "EU"
    ],
    "dolnoserbski"
  ],
  dtp: [
    "Latn",
    [
      "AS"
    ],
    "Dusun Bundu-liwan"
  ],
  dty: [
    "Deva",
    [
      "AS"
    ],
    "डोटेली"
  ],
  dv: [
    "Thaa",
    [
      "AS"
    ],
    "ދިވެހިބަސް"
  ],
  dz: [
    "Tibt",
    [
      "AS"
    ],
    "ཇོང་ཁ"
  ],
  ee: [
    "Latn",
    [
      "AF"
    ],
    "eʋegbe"
  ],
  efi: [
    "Latn",
    [
      "AF"
    ],
    "efịk"
  ],
  egl: [
    "Latn",
    [
      "EU"
    ],
    "Emiliàn"
  ],
  el: [
    "Grek",
    [
      "EU"
    ],
    "Ελληνικά"
  ],
  elm: [
    "Latn",
    [
      "AF"
    ],
    "Eleme"
  ],
  eml: [
    "Latn",
    [
      "EU"
    ],
    "emiliàn e rumagnòl"
  ],
  "en-ca": [
    "Latn",
    [
      "AM"
    ],
    "Canadian English"
  ],
  "en-gb": [
    "Latn",
    [
      "EU",
      "AS",
      "PA"
    ],
    "British English"
  ],
  "en-simple": [
    "Latn",
    [
      "WW"
    ],
    "Simple English"
  ],
  en: [
    "Latn",
    [
      "EU",
      "AM",
      "AF",
      "ME",
      "AS",
      "PA",
      "WW"
    ],
    "English"
  ],
  eo: [
    "Latn",
    [
      "WW"
    ],
    "Esperanto"
  ],
  "es-419": [
    "Latn",
    [
      "AM"
    ],
    "español de América Latina"
  ],
  "es-formal": [
    "Latn",
    [
      "EU",
      "AM",
      "AF",
      "WW"
    ],
    "español (formal)"
  ],
  es: [
    "Latn",
    [
      "EU",
      "AM",
      "AF",
      "WW",
      "PA"
    ],
    "español"
  ],
  "es-ni": [
    "Latn",
    [
      "AM"
    ],
    "español nicaragüense"
  ],
  esu: [
    "Latn",
    [
      "AM"
    ],
    "Yup'ik"
  ],
  et: [
    "Latn",
    [
      "EU"
    ],
    "eesti"
  ],
  eu: [
    "Latn",
    [
      "EU"
    ],
    "euskara"
  ],
  ext: [
    "Latn",
    [
      "EU"
    ],
    "estremeñu"
  ],
  eya: [
    "Latn",
    [
      "AM"
    ],
    "I·ya·q"
  ],
  fa: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "فارسی"
  ],
  fan: [
    "Latn",
    [
      "AF"
    ],
    "Faŋ"
  ],
  fat: [
    "Latn",
    [
      "AF"
    ],
    "mfantse"
  ],
  fax: [
    "Latn",
    [
      "EU"
    ],
    "Fala"
  ],
  ff: [
    "Latn",
    [
      "AF"
    ],
    "Fulfulde"
  ],
  fi: [
    "Latn",
    [
      "EU"
    ],
    "suomi"
  ],
  fil: [
    "tl"
  ],
  fit: [
    "Latn",
    [
      "EU"
    ],
    "meänkieli"
  ],
  "fiu-vro": [
    "vro"
  ],
  fj: [
    "Latn",
    [
      "PA"
    ],
    "Na Vosa Vakaviti"
  ],
  fkv: [
    "Latn",
    [
      "EU"
    ],
    "kvääni"
  ],
  fo: [
    "Latn",
    [
      "EU"
    ],
    "føroyskt"
  ],
  fon: [
    "Latn",
    [
      "AF"
    ],
    "fɔ̀ngbè"
  ],
  fr: [
    "Latn",
    [
      "EU",
      "AM",
      "WW"
    ],
    "français"
  ],
  frc: [
    "Latn",
    [
      "AM"
    ],
    "français cadien"
  ],
  frp: [
    "Latn",
    [
      "EU"
    ],
    "arpetan"
  ],
  frr: [
    "Latn",
    [
      "EU"
    ],
    "Nordfriisk"
  ],
  fuf: [
    "Latn",
    [
      "AF"
    ],
    "Fuuta Jalon"
  ],
  fur: [
    "Latn",
    [
      "EU"
    ],
    "furlan"
  ],
  fvr: [
    "Latn",
    [
      "AF"
    ],
    "poor’íŋ belé’ŋ"
  ],
  fy: [
    "Latn",
    [
      "EU"
    ],
    "Frysk"
  ],
  ga: [
    "Latn",
    [
      "EU"
    ],
    "Gaeilge"
  ],
  gaa: [
    "Latn",
    [
      "AF"
    ],
    "Ga"
  ],
  gag: [
    "Latn",
    [
      "EU"
    ],
    "Gagauz"
  ],
  gah: [
    "Latn",
    [
      "AS"
    ],
    "Alekano"
  ],
  "gan-hans": [
    "Hans",
    [
      "AS"
    ],
    "赣语（简体）"
  ],
  "gan-hant": [
    "gan"
  ],
  gan: [
    "Hant",
    [
      "AS"
    ],
    "贛語"
  ],
  gbm: [
    "Deva",
    [
      "AS"
    ],
    "गढ़वळि"
  ],
  gbz: [
    "Latn",
    [
      "AS"
    ],
    "Dari-e Mazdeyasnā"
  ],
  gcf: [
    "Latn",
    [
      "AM"
    ],
    "Guadeloupean Creole French"
  ],
  gcr: [
    "Latn",
    [
      "AM"
    ],
    "kriyòl gwiyannen"
  ],
  gd: [
    "Latn",
    [
      "EU"
    ],
    "Gàidhlig"
  ],
  gez: [
    "Ethi",
    [
      "AF"
    ],
    "ግዕዝ"
  ],
  gl: [
    "Latn",
    [
      "EU"
    ],
    "galego"
  ],
  gld: [
    "Cyrl",
    [
      "AS"
    ],
    "на̄ни"
  ],
  glk: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "گیلکی"
  ],
  gn: [
    "Latn",
    [
      "AM"
    ],
    "Avañe'ẽ"
  ],
  gom: [
    "gom-deva"
  ],
  "gom-deva": [
    "Deva",
    [
      "AS"
    ],
    "गोंयची कोंकणी"
  ],
  "gom-latn": [
    "Latn",
    [
      "AS"
    ],
    "Gõychi Konknni"
  ],
  gor: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Hulontalo"
  ],
  got: [
    "Goth",
    [
      "EU"
    ],
    "𐌲𐌿𐍄𐌹𐍃𐌺"
  ],
  gpe: [
    "Latn",
    [
      "AF"
    ],
    "Ghanaian Pidgin"
  ],
  grc: [
    "Grek",
    [
      "EU"
    ],
    "Ἀρχαία ἑλληνικὴ"
  ],
  gsw: [
    "Latn",
    [
      "EU"
    ],
    "Alemannisch"
  ],
  gu: [
    "Gujr",
    [
      "AS"
    ],
    "ગુજરાતી"
  ],
  guc: [
    "Latn",
    [
      "AM"
    ],
    "wayuunaiki"
  ],
  gum: [
    "Latn",
    [
      "AM"
    ],
    "Namtrik"
  ],
  gur: [
    "Latn",
    [
      "AF"
    ],
    "farefare"
  ],
  guw: [
    "Latn",
    [
      "AF"
    ],
    "gungbe"
  ],
  gv: [
    "Latn",
    [
      "EU"
    ],
    "Gaelg"
  ],
  ha: [
    "Latn",
    [
      "AF"
    ],
    "Hausa"
  ],
  "ha-arab": [
    "Arab",
    [
      "AF"
    ],
    "هَوُسَ"
  ],
  "ha-latn": [
    "ha"
  ],
  hai: [
    "Latn",
    [
      "AM"
    ],
    "X̱aat Kíl"
  ],
  hak: [
    "Latn",
    [
      "AS"
    ],
    "Hak-kâ-fa"
  ],
  haw: [
    "Latn",
    [
      "AM",
      "PA"
    ],
    "Hawaiʻi"
  ],
  he: [
    "Hebr",
    [
      "ME"
    ],
    "עברית"
  ],
  "hak-hans": [
    "Hans",
    [
      "AS"
    ],
    "客家语（简体）"
  ],
  "hak-hant": [
    "Hant",
    [
      "AS"
    ],
    "客家語（繁體）"
  ],
  hi: [
    "Deva",
    [
      "AS"
    ],
    "हिन्दी"
  ],
  hif: [
    "Latn",
    [
      "PA",
      "AS"
    ],
    "Fiji Hindi"
  ],
  "hif-deva": [
    "Deva",
    [
      "AS"
    ],
    "फ़ीजी हिन्दी"
  ],
  "hif-latn": [
    "hif"
  ],
  hil: [
    "Latn",
    [
      "AS"
    ],
    "Ilonggo"
  ],
  hne: [
    "Deva",
    [
      "AS"
    ],
    "छत्तीसगढ़ी"
  ],
  ho: [
    "Latn",
    [
      "PA"
    ],
    "Hiri Motu"
  ],
  hoc: [
    "Wara",
    [
      "AS"
    ],
    "𑢹𑣉𑣉"
  ],
  hr: [
    "Latn",
    [
      "EU"
    ],
    "hrvatski"
  ],
  hrx: [
    "Latn",
    [
      "AM"
    ],
    "Hunsrik"
  ],
  hsb: [
    "Latn",
    [
      "EU"
    ],
    "hornjoserbsce"
  ],
  hsn: [
    "Hans",
    [
      "AS"
    ],
    "湘语"
  ],
  ht: [
    "Latn",
    [
      "AM"
    ],
    "Kreyòl ayisyen"
  ],
  "hu-formal": [
    "Latn",
    [
      "EU"
    ],
    "Magyar (magázó)"
  ],
  hu: [
    "Latn",
    [
      "EU"
    ],
    "magyar"
  ],
  hy: [
    "Armn",
    [
      "EU",
      "ME"
    ],
    "հայերեն"
  ],
  hyw: [
    "Armn",
    [
      "EU",
      "ME"
    ],
    "Արեւմտահայերէն"
  ],
  hz: [
    "Latn",
    [
      "AF"
    ],
    "Otsiherero"
  ],
  ia: [
    "Latn",
    [
      "WW"
    ],
    "interlingua"
  ],
  id: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Bahasa Indonesia"
  ],
  ie: [
    "Latn",
    [
      "WW"
    ],
    "Interlingue"
  ],
  ig: [
    "Latn",
    [
      "AF"
    ],
    "Igbo"
  ],
  igl: [
    "Latn",
    [
      "AF"
    ],
    "Igala"
  ],
  ii: [
    "Yiii",
    [
      "AS"
    ],
    "ꆇꉙ"
  ],
  ik: [
    "Latn",
    [
      "AM"
    ],
    "Iñupiatun"
  ],
  "ike-cans": [
    "Cans",
    [
      "AM"
    ],
    "ᐃᓄᒃᑎᑐᑦ"
  ],
  "ike-latn": [
    "Latn",
    [
      "AM"
    ],
    "inuktitut"
  ],
  ilo: [
    "Latn",
    [
      "AS"
    ],
    "Ilokano"
  ],
  inh: [
    "Cyrl",
    [
      "EU"
    ],
    "гӀалгӀай"
  ],
  io: [
    "Latn",
    [
      "WW"
    ],
    "Ido"
  ],
  is: [
    "Latn",
    [
      "EU"
    ],
    "íslenska"
  ],
  ish: [
    "Latn",
    [
      "AF"
    ],
    "awain"
  ],
  it: [
    "Latn",
    [
      "EU"
    ],
    "italiano"
  ],
  iu: [
    "ike-cans"
  ],
  izh: [
    "Latn",
    [
      "EU"
    ],
    "ižoran keel"
  ],
  ja: [
    "Jpan",
    [
      "AS"
    ],
    "日本語"
  ],
  jam: [
    "Latn",
    [
      "AM"
    ],
    "Patois"
  ],
  jbo: [
    "Latn",
    [
      "WW"
    ],
    "lojban"
  ],
  jdt: [
    "jdt-cyrl"
  ],
  "jdt-cyrl": [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "жугьури"
  ],
  jje: [
    "Kore",
    [
      "AS"
    ],
    "제주말"
  ],
  jut: [
    "Latn",
    [
      "EU"
    ],
    "jysk"
  ],
  jv: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Jawa"
  ],
  "jv-java": [
    "Java",
    [
      "AS",
      "PA"
    ],
    "ꦗꦮ"
  ],
  ka: [
    "Geor",
    [
      "EU"
    ],
    "ქართული"
  ],
  kaa: [
    "Latn",
    [
      "AS"
    ],
    "Qaraqalpaqsha"
  ],
  kab: [
    "Latn",
    [
      "AF",
      "EU"
    ],
    "Taqbaylit"
  ],
  kac: [
    "Latn",
    [
      "AS"
    ],
    "Jinghpaw"
  ],
  "kbd-cyrl": [
    "kbd"
  ],
  "kbd-latn": [
    "Latn",
    [
      "EU"
    ],
    "Qabardjajəbza"
  ],
  kbd: [
    "Cyrl",
    [
      "EU",
      "ME"
    ],
    "адыгэбзэ"
  ],
  kbp: [
    "Latn",
    [
      "AF"
    ],
    "Kabɩyɛ"
  ],
  kcg: [
    "Latn",
    [
      "AF"
    ],
    "Tyap"
  ],
  kck: [
    "Latn",
    [
      "AF"
    ],
    "tjikalanga"
  ],
  kea: [
    "Latn",
    [
      "AF"
    ],
    "kabuverdianu"
  ],
  ken: [
    "Latn",
    [
      "AF"
    ],
    "kɛ́nyáŋ"
  ],
  kg: [
    "Latn",
    [
      "AF"
    ],
    "Kongo"
  ],
  kgp: [
    "Latn",
    [
      "AM"
    ],
    "Kaingáng"
  ],
  khw: [
    "Arab",
    [
      "ME",
      "AS"
    ],
    "کھوار"
  ],
  ki: [
    "Latn",
    [
      "AF"
    ],
    "Gĩkũyũ"
  ],
  kiu: [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "Kırmancki"
  ],
  kj: [
    "Latn",
    [
      "AF"
    ],
    "Kwanyama"
  ],
  kjh: [
    "Cyrl",
    [
      "AS"
    ],
    "хакас"
  ],
  kjp: [
    "Mymr",
    [
      "AS"
    ],
    "ဖၠုံလိက်"
  ],
  kk: [
    "kk-cyrl"
  ],
  "kk-arab": [
    "Arab",
    [
      "EU",
      "AS"
    ],
    "قازاقشا (تٶتە)"
  ],
  "kk-cn": [
    "kk-arab"
  ],
  "kk-cyrl": [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "қазақша"
  ],
  "kk-kz": [
    "kk-cyrl"
  ],
  "kk-latn": [
    "Latn",
    [
      "EU",
      "AS",
      "ME"
    ],
    "qazaqşa"
  ],
  "kk-tr": [
    "kk-latn"
  ],
  kl: [
    "Latn",
    [
      "AM",
      "EU"
    ],
    "kalaallisut"
  ],
  km: [
    "Khmr",
    [
      "AS"
    ],
    "ភាសាខ្មែរ"
  ],
  kn: [
    "Knda",
    [
      "AS"
    ],
    "ಕನ್ನಡ"
  ],
  knn: [
    "Deva",
    [
      "AS"
    ],
    "महाराष्ट्रीय कोंकणी"
  ],
  "ko-kp": [
    "Kore",
    [
      "AS"
    ],
    "조선말"
  ],
  ko: [
    "Kore",
    [
      "AS"
    ],
    "한국어"
  ],
  koi: [
    "Cyrl",
    [
      "EU"
    ],
    "перем коми"
  ],
  koy: [
    "Latn",
    [
      "AM"
    ],
    "Denaakkenaageʼ"
  ],
  kr: [
    "Latn",
    [
      "AF"
    ],
    "kanuri"
  ],
  krc: [
    "Cyrl",
    [
      "EU"
    ],
    "къарачай-малкъар"
  ],
  kri: [
    "Latn",
    [
      "AF"
    ],
    "Krio"
  ],
  krj: [
    "Latn",
    [
      "AS"
    ],
    "Kinaray-a"
  ],
  krl: [
    "Latn",
    [
      "EU"
    ],
    "Karjala"
  ],
  "ks-arab": [
    "Arab",
    [
      "AS"
    ],
    "کٲشُر"
  ],
  "ks-deva": [
    "Deva",
    [
      "AS"
    ],
    "कॉशुर"
  ],
  ks: [
    "ks-arab"
  ],
  ksf: [
    "Latn",
    [
      "AF"
    ],
    "Bafia"
  ],
  ksh: [
    "Latn",
    [
      "EU"
    ],
    "Ripoarisch"
  ],
  ksw: [
    "Mymr",
    [
      "AS"
    ],
    "စှီၤ"
  ],
  ku: [
    "ku-latn"
  ],
  "ku-arab": [
    "Arab",
    [
      "EU",
      "ME"
    ],
    "كوردي"
  ],
  "ku-latn": [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "kurdî"
  ],
  kus: [
    "Latn",
    [
      "AF"
    ],
    "Kʋsaal"
  ],
  kum: [
    "Cyrl",
    [
      "EU"
    ],
    "къумукъ"
  ],
  kv: [
    "Cyrl",
    [
      "EU"
    ],
    "коми"
  ],
  kw: [
    "Latn",
    [
      "EU"
    ],
    "kernowek"
  ],
  ky: [
    "Cyrl",
    [
      "AS"
    ],
    "кыргызча"
  ],
  la: [
    "Latn",
    [
      "EU"
    ],
    "Latina"
  ],
  lad: [
    "lad-latn"
  ],
  "lad-latn": [
    "Latn",
    [
      "ME",
      "EU",
      "AM"
    ],
    "Ladino"
  ],
  "lad-hebr": [
    "Hebr",
    [
      "ME",
      "EU",
      "AM"
    ],
    "לאדינו"
  ],
  lag: [
    "Latn",
    [
      "AF"
    ],
    "Kilaangi"
  ],
  lb: [
    "Latn",
    [
      "EU"
    ],
    "Lëtzebuergesch"
  ],
  lbe: [
    "Cyrl",
    [
      "EU"
    ],
    "лакку"
  ],
  lez: [
    "Cyrl",
    [
      "EU"
    ],
    "лезги"
  ],
  lfn: [
    "Latn",
    [
      "WW"
    ],
    "Lingua Franca Nova"
  ],
  lg: [
    "Latn",
    [
      "AF"
    ],
    "Luganda"
  ],
  li: [
    "Latn",
    [
      "EU"
    ],
    "Limburgs"
  ],
  lij: [
    "Latn",
    [
      "EU"
    ],
    "Ligure"
  ],
  "lij-mc": [
    "Latn",
    [
      "EU"
    ],
    "munegascu"
  ],
  liv: [
    "Latn",
    [
      "EU"
    ],
    "Līvõ kēļ"
  ],
  lki: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "لەکی"
  ],
  lkt: [
    "Latn",
    [
      "AM"
    ],
    "Lakȟótiyapi"
  ],
  lld: [
    "Latn",
    [
      "EU"
    ],
    "Ladin"
  ],
  lmo: [
    "Latn",
    [
      "EU"
    ],
    "lombard"
  ],
  ln: [
    "Latn",
    [
      "AF"
    ],
    "lingála"
  ],
  lo: [
    "Laoo",
    [
      "AS"
    ],
    "ລາວ"
  ],
  loz: [
    "Latn",
    [
      "AF"
    ],
    "Silozi"
  ],
  lt: [
    "Latn",
    [
      "EU"
    ],
    "lietuvių"
  ],
  lrc: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "لۊری شومالی"
  ],
  ltg: [
    "Latn",
    [
      "EU"
    ],
    "latgaļu"
  ],
  lud: [
    "Latn",
    [
      "EU"
    ],
    "lüüdi"
  ],
  lus: [
    "Latn",
    [
      "AS"
    ],
    "Mizo ţawng"
  ],
  lut: [
    "Latn",
    [
      "AM"
    ],
    "dxʷləšucid"
  ],
  luz: [
    "Arab",
    [
      "ME"
    ],
    "لئری دوٙمینی"
  ],
  lv: [
    "Latn",
    [
      "EU"
    ],
    "latviešu"
  ],
  lzh: [
    "Hant",
    [
      "AS"
    ],
    "文言"
  ],
  lzz: [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "Lazuri"
  ],
  mad: [
    "Latn",
    [
      "AS"
    ],
    "Madhurâ"
  ],
  mag: [
    "Deva",
    [
      "AS"
    ],
    "मगही"
  ],
  mai: [
    "Deva",
    [
      "AS"
    ],
    "मैथिली"
  ],
  mak: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Mangkasarak"
  ],
  "mak-bugi": [
    "Bugi",
    [
      "AS",
      "PA"
    ],
    "ᨆᨀᨔᨑ"
  ],
  "map-bms": [
    "Latn",
    [
      "AS"
    ],
    "Basa Banyumasan"
  ],
  mcn: [
    "Latn",
    [
      "AF"
    ],
    "vùn màsànà"
  ],
  mdf: [
    "Cyrl",
    [
      "EU"
    ],
    "мокшень"
  ],
  mfe: [
    "Latn",
    [
      "AM"
    ],
    "Morisyen"
  ],
  mg: [
    "Latn",
    [
      "AF"
    ],
    "Malagasy"
  ],
  mh: [
    "Latn",
    [
      "PA"
    ],
    "Ebon"
  ],
  mhr: [
    "Cyrl",
    [
      "EU"
    ],
    "олык марий"
  ],
  mi: [
    "Latn",
    [
      "PA"
    ],
    "Māori"
  ],
  mic: [
    "Latn",
    [
      "AM"
    ],
    "Mi'kmaq"
  ],
  min: [
    "Latn",
    [
      "AS"
    ],
    "Minangkabau"
  ],
  miq: [
    "Latn",
    [
      "AM"
    ],
    "Mískitu"
  ],
  mk: [
    "Cyrl",
    [
      "EU"
    ],
    "македонски"
  ],
  ml: [
    "Mlym",
    [
      "AS",
      "ME"
    ],
    "മലയാളം"
  ],
  mn: [
    "Cyrl",
    [
      "AS"
    ],
    "монгол"
  ],
  "mn-cyrl": [
    "mn"
  ],
  "mn-mong": [
    "mvf"
  ],
  mnc: [
    "Mong",
    [
      "AS"
    ],
    "ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ"
  ],
  mni: [
    "Mtei",
    [
      "AS"
    ],
    "ꯃꯤꯇꯩ ꯂꯣꯟ"
  ],
  "mni-beng": [
    "Beng",
    [
      "AS"
    ],
    "মেইতেই লোন্"
  ],
  mnw: [
    "Mymr",
    [
      "AS"
    ],
    "ဘာသာ မန်"
  ],
  mo: [
    "Cyrl",
    [
      "EU"
    ],
    "молдовеняскэ"
  ],
  moe: [
    "Latn",
    [
      "AM"
    ],
    "innu-aimun"
  ],
  mos: [
    "Latn",
    [
      "AF"
    ],
    "moore"
  ],
  mr: [
    "Deva",
    [
      "AS",
      "ME"
    ],
    "मराठी"
  ],
  mrh: [
    "Latn",
    [
      "AS"
    ],
    "Mara"
  ],
  mrj: [
    "Cyrl",
    [
      "EU"
    ],
    "кырык мары"
  ],
  mrv: [
    "Latn",
    [
      "PA"
    ],
    "Magareva"
  ],
  ms: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Melayu"
  ],
  "ms-arab": [
    "Arab",
    [
      "AS"
    ],
    "بهاس ملايو"
  ],
  mt: [
    "Latn",
    [
      "EU"
    ],
    "Malti"
  ],
  mui: [
    "Latn",
    [
      "AS"
    ],
    "Musi"
  ],
  mus: [
    "Latn",
    [
      "AM"
    ],
    "Mvskoke"
  ],
  mvf: [
    "Mong",
    [
      "AS"
    ],
    "ᠮᠣᠩᠭᠣᠯ"
  ],
  mwl: [
    "Latn",
    [
      "EU"
    ],
    "Mirandés"
  ],
  mwv: [
    "Latn",
    [
      "AS"
    ],
    "Behase Mentawei"
  ],
  mww: [
    "mww-latn"
  ],
  "mww-latn": [
    "Latn",
    [
      "AS"
    ],
    "Hmoob Dawb"
  ],
  my: [
    "Mymr",
    [
      "AS"
    ],
    "မြန်မာဘာသာ"
  ],
  myv: [
    "Cyrl",
    [
      "EU"
    ],
    "эрзянь"
  ],
  mzn: [
    "Arab",
    [
      "ME",
      "AS"
    ],
    "مازِرونی"
  ],
  na: [
    "Latn",
    [
      "PA"
    ],
    "Dorerin Naoero"
  ],
  nah: [
    "Latn",
    [
      "AM"
    ],
    "Nāhuatl"
  ],
  nan: [
    "Latn",
    [
      "AS"
    ],
    "Bân-lâm-gú"
  ],
  "nan-hani": [
    "Hani",
    [
      "AS"
    ],
    "閩南語（漢字）"
  ],
  nap: [
    "Latn",
    [
      "EU"
    ],
    "Napulitano"
  ],
  nb: [
    "Latn",
    [
      "EU"
    ],
    "norsk (bokmål)"
  ],
  nd: [
    "Latn",
    [
      "AF"
    ],
    "siNdebele saseNyakatho"
  ],
  "nds-nl": [
    "Latn",
    [
      "EU"
    ],
    "Nedersaksisch"
  ],
  nds: [
    "Latn",
    [
      "EU"
    ],
    "Plattdüütsch"
  ],
  ne: [
    "Deva",
    [
      "AS"
    ],
    "नेपाली"
  ],
  new: [
    "Deva",
    [
      "AS"
    ],
    "नेपाल भाषा"
  ],
  ng: [
    "Latn",
    [
      "AF"
    ],
    "Oshiwambo"
  ],
  nia: [
    "Latn",
    [
      "AS"
    ],
    "Li Niha"
  ],
  niu: [
    "Latn",
    [
      "PA"
    ],
    "ko e vagahau Niuē"
  ],
  njo: [
    "Latn",
    [
      "AS"
    ],
    "Ao"
  ],
  "nl-informal": [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Nederlands (informeel)"
  ],
  nl: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Nederlands"
  ],
  nmz: [
    "Latn",
    [
      "AF"
    ],
    "nawdm"
  ],
  nn: [
    "Latn",
    [
      "EU"
    ],
    "norsk (nynorsk)"
  ],
  "nn-hognorsk": [
    "Latn",
    [
      "EU"
    ],
    "norsk (høgnorsk)"
  ],
  no: [
    "Latn",
    [
      "EU"
    ],
    "norsk"
  ],
  nod: [
    "Lana",
    [
      "AS"
    ],
    "ᨣᩴᩤᨾᩮᩥᩬᨦ"
  ],
  "nod-thai": [
    "Thai",
    [
      "AS"
    ],
    "คำเมือง"
  ],
  nog: [
    "Cyrl",
    [
      "EU"
    ],
    "ногайша"
  ],
  nov: [
    "Latn",
    [
      "WW"
    ],
    "Novial"
  ],
  nqo: [
    "Nkoo",
    [
      "AF"
    ],
    "ߒߞߏ"
  ],
  nr: [
    "Latn",
    [
      "AF"
    ],
    "isiNdebele seSewula"
  ],
  nrm: [
    "Latn",
    [
      "EU"
    ],
    "Nouormand"
  ],
  nso: [
    "Latn",
    [
      "AF"
    ],
    "Sesotho sa Leboa"
  ],
  nus: [
    "Latn",
    [
      "AF"
    ],
    "Thok Naath"
  ],
  nv: [
    "Latn",
    [
      "AM"
    ],
    "Diné bizaad"
  ],
  ny: [
    "Latn",
    [
      "AF"
    ],
    "Chi-Chewa"
  ],
  nyn: [
    "Latn",
    [
      "AF"
    ],
    "runyankore"
  ],
  nys: [
    "Latn",
    [
      "PA"
    ],
    "Nyungar"
  ],
  nzi: [
    "Latn",
    [
      "AF"
    ],
    "Nzema"
  ],
  oc: [
    "Latn",
    [
      "EU"
    ],
    "occitan"
  ],
  ojb: [
    "Latn",
    [
      "AM"
    ],
    "Ojibwemowin"
  ],
  oka: [
    "Latn",
    [
      "AM"
    ],
    "n̓səl̓xcin̓"
  ],
  olo: [
    "Latn",
    [
      "EU"
    ],
    "livvinkarjala"
  ],
  om: [
    "Latn",
    [
      "AF"
    ],
    "Oromoo"
  ],
  ood: [
    "Latn",
    [
      "AM"
    ],
    "ʼOʼodham ha-ñeʼokĭ"
  ],
  or: [
    "Orya",
    [
      "AS"
    ],
    "ଓଡ଼ିଆ"
  ],
  os: [
    "Cyrl",
    [
      "EU"
    ],
    "ирон"
  ],
  osi: [
    "Latn",
    [
      "AS"
    ],
    "Using"
  ],
  ota: [
    "Arab",
    [
      "AS",
      "EU"
    ],
    "لسان عثمانى"
  ],
  ovd: [
    "Latn",
    [
      "EU"
    ],
    "övdalsk"
  ],
  pa: [
    "pa-guru"
  ],
  "pa-guru": [
    "Guru",
    [
      "AS"
    ],
    "ਪੰਜਾਬੀ"
  ],
  pag: [
    "Latn",
    [
      "AS"
    ],
    "Pangasinan"
  ],
  pam: [
    "Latn",
    [
      "AS"
    ],
    "Kapampangan"
  ],
  pap: [
    "Latn",
    [
      "AM"
    ],
    "Papiamentu"
  ],
  "pap-aw": [
    "Latn",
    [
      "AM"
    ],
    "Papiamento"
  ],
  pbb: [
    "Latn",
    [
      "AM"
    ],
    "Nasa Yuwe"
  ],
  pcd: [
    "Latn",
    [
      "EU"
    ],
    "Picard"
  ],
  pcm: [
    "Latn",
    [
      "AF"
    ],
    "Naijá"
  ],
  pdc: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Deitsch"
  ],
  pdt: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "Plautdietsch"
  ],
  pfl: [
    "Latn",
    [
      "EU"
    ],
    "Pälzisch"
  ],
  pi: [
    "Deva",
    [
      "AS"
    ],
    "पालि"
  ],
  pih: [
    "Latn",
    [
      "PA"
    ],
    "Norfuk / Pitkern"
  ],
  pis: [
    "Latn",
    [
      "PA"
    ],
    "Pijin"
  ],
  pjt: [
    "Latn",
    [
      "PA"
    ],
    "Pitjantjatjara"
  ],
  pko: [
    "Latn",
    [
      "AF"
    ],
    "Pökoot"
  ],
  pl: [
    "Latn",
    [
      "EU"
    ],
    "polski"
  ],
  pms: [
    "Latn",
    [
      "EU"
    ],
    "Piemontèis"
  ],
  pnb: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "پنجابی"
  ],
  pnt: [
    "Grek",
    [
      "EU"
    ],
    "Ποντιακά"
  ],
  pov: [
    "Latn",
    [
      "AF"
    ],
    "guinensi"
  ],
  ppl: [
    "Latn",
    [
      "AM"
    ],
    "Nawat"
  ],
  prg: [
    "Latn",
    [
      "EU"
    ],
    "Prūsiskan"
  ],
  prs: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "دری"
  ],
  ps: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "پښتو"
  ],
  "pt-br": [
    "Latn",
    [
      "AM"
    ],
    "português do Brasil"
  ],
  pt: [
    "Latn",
    [
      "EU",
      "AM",
      "AS",
      "PA",
      "AF",
      "WW"
    ],
    "português"
  ],
  pwn: [
    "Latn",
    [
      "AS"
    ],
    "pinayuanan"
  ],
  qu: [
    "Latn",
    [
      "AM"
    ],
    "Runa Simi"
  ],
  quc: [
    "Latn",
    [
      "AM"
    ],
    "K'iche'"
  ],
  qug: [
    "Latn",
    [
      "AM"
    ],
    "Runa shimi"
  ],
  qwh: [
    "Latn",
    [
      "AM"
    ],
    "anqash qichwa"
  ],
  rag: [
    "Latn",
    [
      "AF"
    ],
    "Lologooli"
  ],
  rap: [
    "Latn",
    [
      "PA",
      "AM"
    ],
    "arero rapa nui"
  ],
  rcf: [
    "Latn",
    [
      "AF"
    ],
    "Kreol Réyoné"
  ],
  rej: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Jang"
  ],
  rgn: [
    "Latn",
    [
      "EU"
    ],
    "Rumagnôl"
  ],
  rhg: [
    "Rohg",
    [
      "AS"
    ],
    "𐴌𐴟𐴇𐴥𐴝𐴚𐴒𐴙𐴝"
  ],
  rif: [
    "Latn",
    [
      "AF"
    ],
    "Tarifit"
  ],
  rki: [
    "Mymr",
    [
      "AS"
    ],
    "ရခိုင်"
  ],
  rm: [
    "Latn",
    [
      "EU"
    ],
    "rumantsch"
  ],
  "rm-puter": [
    "Latn",
    [
      "EU"
    ],
    "puter"
  ],
  "rm-rumgr": [
    "Latn",
    [
      "EU"
    ],
    "rumantsch grischun"
  ],
  "rm-surmiran": [
    "Latn",
    [
      "EU"
    ],
    "surmiran"
  ],
  "rm-sursilv": [
    "Latn",
    [
      "EU"
    ],
    "sursilvan"
  ],
  "rm-sutsilv": [
    "Latn",
    [
      "EU"
    ],
    "sutsilvan"
  ],
  "rm-vallader": [
    "Latn",
    [
      "EU"
    ],
    "vallader"
  ],
  rmc: [
    "Latn",
    [
      "EU"
    ],
    "romaňi čhib"
  ],
  rmf: [
    "Latn",
    [
      "EU"
    ],
    "kaalengo tšimb"
  ],
  rmy: [
    "Latn",
    [
      "EU"
    ],
    "Romani"
  ],
  rn: [
    "Latn",
    [
      "AF"
    ],
    "ikirundi"
  ],
  ro: [
    "Latn",
    [
      "EU"
    ],
    "română"
  ],
  "roa-rup": [
    "rup"
  ],
  "roa-tara": [
    "Latn",
    [
      "EU"
    ],
    "tarandíne"
  ],
  rsk: [
    "Cyrl",
    [
      "EU"
    ],
    "руски"
  ],
  rtm: [
    "Latn",
    [
      "PA"
    ],
    "Faeag Rotuma"
  ],
  ru: [
    "Cyrl",
    [
      "EU",
      "AS",
      "ME"
    ],
    "русский"
  ],
  rue: [
    "Cyrl",
    [
      "EU"
    ],
    "русиньскый"
  ],
  rup: [
    "Latn",
    [
      "EU"
    ],
    "armãneashti"
  ],
  ruq: [
    "Cyrl",
    [
      "EU"
    ],
    "Влахесте"
  ],
  "ruq-cyrl": [
    "ruq"
  ],
  "ruq-grek": [
    "Grek",
    [
      "EU"
    ],
    "Megleno-Romanian (Greek script)"
  ],
  "ruq-latn": [
    "Latn",
    [
      "EU"
    ],
    "Vlăheşte"
  ],
  rut: [
    "Cyrl",
    [
      "EU"
    ],
    "мыхаӀбишды"
  ],
  rw: [
    "Latn",
    [
      "AF"
    ],
    "Ikinyarwanda"
  ],
  rwr: [
    "Deva",
    [
      "AS"
    ],
    "मारवाड़ी"
  ],
  ryu: [
    "Jpan",
    [
      "AS"
    ],
    "うちなーぐち"
  ],
  sa: [
    "Deva",
    [
      "AS"
    ],
    "संस्कृतम्"
  ],
  sah: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "саха тыла"
  ],
  sat: [
    "Olck",
    [
      "AS"
    ],
    "ᱥᱟᱱᱛᱟᱲᱤ"
  ],
  saz: [
    "Saur",
    [
      "AS"
    ],
    "ꢱꣃꢬꢵꢯ꣄ꢡ꣄ꢬꢵ"
  ],
  sc: [
    "Latn",
    [
      "EU"
    ],
    "sardu"
  ],
  scn: [
    "Latn",
    [
      "EU"
    ],
    "sicilianu"
  ],
  sco: [
    "Latn",
    [
      "EU"
    ],
    "Scots"
  ],
  sd: [
    "Arab",
    [
      "AS"
    ],
    "سنڌي"
  ],
  sdc: [
    "Latn",
    [
      "EU"
    ],
    "Sassaresu"
  ],
  sdh: [
    "Arab",
    [
      "ME"
    ],
    "کوردی خوارگ"
  ],
  se: [
    "Latn",
    [
      "EU"
    ],
    "davvisámegiella"
  ],
  "se-fi": [
    "Latn",
    [
      "EU"
    ],
    "davvisámegiella (Suoma bealde)"
  ],
  "se-no": [
    "Latn",
    [
      "EU"
    ],
    "davvisámegiella (Norgga bealde)"
  ],
  "se-se": [
    "Latn",
    [
      "EU"
    ],
    "davvisámegiella (Ruoŧa bealde)"
  ],
  ses: [
    "Latn",
    [
      "AF"
    ],
    "Koyraboro Senni"
  ],
  sei: [
    "Latn",
    [
      "AM"
    ],
    "Cmique Itom"
  ],
  sg: [
    "Latn",
    [
      "AF"
    ],
    "Sängö"
  ],
  sgs: [
    "Latn",
    [
      "EU"
    ],
    "žemaitėška"
  ],
  sh: [
    "Latn",
    [
      "EU"
    ],
    "srpskohrvatski"
  ],
  "shi-latn": [
    "Latn",
    [
      "AF"
    ],
    "Taclḥit"
  ],
  "shi-tfng": [
    "Tfng",
    [
      "AF"
    ],
    "ⵜⴰⵛⵍⵃⵉⵜ"
  ],
  shi: [
    "shi-latn"
  ],
  shn: [
    "Mymr",
    [
      "AS"
    ],
    "လိၵ်ႈတႆး"
  ],
  "shy-latn": [
    "Latn",
    [
      "AF"
    ],
    "tacawit"
  ],
  shy: [
    "shy-latn"
  ],
  si: [
    "Sinh",
    [
      "AS"
    ],
    "සිංහල"
  ],
  simple: [
    "en-simple"
  ],
  sjd: [
    "Cyrl",
    [
      "EU"
    ],
    "кӣллт са̄мь кӣлл"
  ],
  sje: [
    "Latn",
    [
      "EU"
    ],
    "bidumsámegiella"
  ],
  sjo: [
    "Mong",
    [
      "AS"
    ],
    "ᠰᡞᠪᡝ ᡤᡞᠰᡠᠨ"
  ],
  sju: [
    "Latn",
    [
      "EU"
    ],
    "ubmejesámiengiälla"
  ],
  sk: [
    "Latn",
    [
      "EU"
    ],
    "slovenčina"
  ],
  sl: [
    "Latn",
    [
      "EU"
    ],
    "slovenščina"
  ],
  sli: [
    "Latn",
    [
      "EU"
    ],
    "Schläsch"
  ],
  slr: [
    "Latn",
    [
      "AS"
    ],
    "Salırça"
  ],
  sly: [
    "Latn",
    [
      "AS"
    ],
    "Bahasa Selayar"
  ],
  "skr-arab": [
    "Arab",
    [
      "AS"
    ],
    "سرائیکی"
  ],
  skr: [
    "skr-arab"
  ],
  srq: [
    "Latn",
    [
      "AM"
    ],
    "mbia cheë"
  ],
  syc: [
    "Syrc",
    [
      "ME"
    ],
    "ܣܘܪܝܝܐ"
  ],
  syl: [
    "Sylo",
    [
      "AS"
    ],
    "ꠍꠤꠟꠐꠤ"
  ],
  "syl-beng": [
    "Beng",
    [
      "AS"
    ],
    "সিলেটি"
  ],
  "syl-sylo": [
    "syl"
  ],
  sm: [
    "Latn",
    [
      "PA"
    ],
    "Gagana Samoa"
  ],
  sma: [
    "Latn",
    [
      "EU"
    ],
    "åarjelsaemien"
  ],
  smj: [
    "Latn",
    [
      "EU"
    ],
    "julevsámegiella"
  ],
  smn: [
    "Latn",
    [
      "EU"
    ],
    "anarâškielâ"
  ],
  sms: [
    "Latn",
    [
      "EU"
    ],
    "nuõrttsääʹmǩiõll"
  ],
  sn: [
    "Latn",
    [
      "AF"
    ],
    "chiShona"
  ],
  so: [
    "Latn",
    [
      "AF"
    ],
    "Soomaaliga"
  ],
  son: [
    "Latn",
    [
      "AF"
    ],
    "soŋay"
  ],
  sq: [
    "Latn",
    [
      "EU"
    ],
    "shqip"
  ],
  sr: [
    "sr-cyrl"
  ],
  "sr-ec": [
    "sr-cyrl"
  ],
  "sr-cyrl": [
    "Cyrl",
    [
      "EU"
    ],
    "српски"
  ],
  "sr-el": [
    "sr-latn"
  ],
  "sr-latn": [
    "Latn",
    [
      "EU"
    ],
    "srpski"
  ],
  srn: [
    "Latn",
    [
      "AM",
      "EU"
    ],
    "Sranantongo"
  ],
  sro: [
    "Latn",
    [
      "EU"
    ],
    "sardu campidanesu"
  ],
  ss: [
    "Latn",
    [
      "AF"
    ],
    "SiSwati"
  ],
  st: [
    "Latn",
    [
      "AF"
    ],
    "Sesotho"
  ],
  stq: [
    "Latn",
    [
      "EU"
    ],
    "Seeltersk"
  ],
  sty: [
    "Cyrl",
    [
      "EU",
      "AS"
    ],
    "себертатар"
  ],
  su: [
    "Latn",
    [
      "AS"
    ],
    "Sunda"
  ],
  sv: [
    "Latn",
    [
      "EU"
    ],
    "svenska"
  ],
  sw: [
    "Latn",
    [
      "AF"
    ],
    "Kiswahili"
  ],
  swb: [
    "Latn",
    [
      "AF"
    ],
    "Shikomoro"
  ],
  sxu: [
    "Latn",
    [
      "EU"
    ],
    "Säggssch"
  ],
  szl: [
    "Latn",
    [
      "EU"
    ],
    "ślůnski"
  ],
  szy: [
    "Latn",
    [
      "AS"
    ],
    "Sakizaya"
  ],
  ta: [
    "Taml",
    [
      "AS"
    ],
    "தமிழ்"
  ],
  tay: [
    "Latn",
    [
      "AS"
    ],
    "Tayal"
  ],
  tcy: [
    "Knda",
    [
      "AS"
    ],
    "ತುಳು"
  ],
  tdd: [
    "Tale",
    [
      "AS"
    ],
    "ᥖᥭᥰᥖᥬᥳᥑᥨᥒᥰ"
  ],
  te: [
    "Telu",
    [
      "AS"
    ],
    "తెలుగు"
  ],
  tet: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "tetun"
  ],
  "tg-cyrl": [
    "Cyrl",
    [
      "AS"
    ],
    "тоҷикӣ"
  ],
  "tg-latn": [
    "Latn",
    [
      "AS"
    ],
    "tojikī"
  ],
  tg: [
    "tg-cyrl"
  ],
  th: [
    "Thai",
    [
      "AS"
    ],
    "ไทย"
  ],
  ti: [
    "Ethi",
    [
      "AF"
    ],
    "ትግርኛ"
  ],
  tig: [
    "Ethi",
    [
      "AF"
    ],
    "ትግረ"
  ],
  tk: [
    "Latn",
    [
      "AS"
    ],
    "Türkmençe"
  ],
  tkr: [
    "Cyrl",
    [
      "AS"
    ],
    "цӀаӀхна миз"
  ],
  tl: [
    "Latn",
    [
      "AS"
    ],
    "Tagalog"
  ],
  tly: [
    "Latn",
    [
      "EU",
      "AS",
      "ME"
    ],
    "tolışi"
  ],
  "tly-cyrl": [
    "Cyrl",
    [
      "EU",
      "AS",
      "ME"
    ],
    "толыши"
  ],
  tmr: [
    "Hebr",
    [
      "ME",
      "EU",
      "AM"
    ],
    "ארמית בבלית"
  ],
  tn: [
    "Latn",
    [
      "AF"
    ],
    "Setswana"
  ],
  to: [
    "Latn",
    [
      "PA"
    ],
    "lea faka-Tonga"
  ],
  tok: [
    "Latn",
    [
      "WW"
    ],
    "toki pona"
  ],
  tokipona: [
    "tok"
  ],
  tpi: [
    "Latn",
    [
      "PA",
      "AS"
    ],
    "Tok Pisin"
  ],
  tr: [
    "Latn",
    [
      "EU",
      "ME"
    ],
    "Türkçe"
  ],
  trp: [
    "Latn",
    [
      "AS"
    ],
    "Kokborok"
  ],
  tru: [
    "Latn",
    [
      "AS"
    ],
    "Ṫuroyo"
  ],
  trv: [
    "Latn",
    [
      "AS"
    ],
    "Seediq"
  ],
  ts: [
    "Latn",
    [
      "AF"
    ],
    "Xitsonga"
  ],
  tsd: [
    "Grek",
    [
      "EU"
    ],
    "Τσακωνικά"
  ],
  tt: [
    "Cyrl",
    [
      "EU"
    ],
    "татарча"
  ],
  "tt-cyrl": [
    "tt"
  ],
  "tt-latn": [
    "Latn",
    [
      "EU"
    ],
    "tatarça"
  ],
  ttt: [
    "Cyrl",
    [
      "AS"
    ],
    "Tati"
  ],
  tum: [
    "Latn",
    [
      "AF"
    ],
    "chiTumbuka"
  ],
  tw: [
    "Latn",
    [
      "AF"
    ],
    "Twi"
  ],
  twd: [
    "Latn",
    [
      "EU"
    ],
    "Tweants"
  ],
  ty: [
    "Latn",
    [
      "PA"
    ],
    "reo tahiti"
  ],
  tyv: [
    "Cyrl",
    [
      "AS"
    ],
    "тыва дыл"
  ],
  tzl: [
    "Latn",
    [
      "WW"
    ],
    "Talossan"
  ],
  tzm: [
    "Tfng",
    [
      "AF"
    ],
    "ⵜⴰⵎⴰⵣⵉⵖⵜ"
  ],
  udm: [
    "Cyrl",
    [
      "EU"
    ],
    "удмурт"
  ],
  ug: [
    "ug-arab"
  ],
  "ug-arab": [
    "Arab",
    [
      "AS"
    ],
    "ئۇيغۇرچە"
  ],
  "ug-latn": [
    "Latn",
    [
      "AS"
    ],
    "uyghurche"
  ],
  "ug-cyrl": [
    "Cyrl",
    [
      "AS"
    ],
    "уйғурчә"
  ],
  uk: [
    "Cyrl",
    [
      "EU"
    ],
    "українська"
  ],
  umu: [
    "Latn",
    [
      "AM"
    ],
    "Huluníixsuwaakan"
  ],
  ur: [
    "Arab",
    [
      "AS",
      "ME"
    ],
    "اردو"
  ],
  uz: [
    "Latn",
    [
      "AS"
    ],
    "oʻzbekcha"
  ],
  "uz-cyrl": [
    "Cyrl",
    [
      "AS"
    ],
    "ўзбекча"
  ],
  "uz-latn": [
    "uz"
  ],
  ve: [
    "Latn",
    [
      "AF"
    ],
    "Tshivenda"
  ],
  vai: [
    "Vaii",
    [
      "AF"
    ],
    "ꕙꔤ"
  ],
  vec: [
    "Latn",
    [
      "EU",
      "AM"
    ],
    "vèneto"
  ],
  vep: [
    "Latn",
    [
      "EU"
    ],
    "vepsän kel’"
  ],
  vi: [
    "Latn",
    [
      "AS"
    ],
    "Tiếng Việt"
  ],
  vls: [
    "Latn",
    [
      "EU"
    ],
    "West-Vlams"
  ],
  vmf: [
    "Latn",
    [
      "EU"
    ],
    "Mainfränkisch"
  ],
  vmw: [
    "Latn",
    [
      "AF"
    ],
    "emakhuwa"
  ],
  vo: [
    "Latn",
    [
      "WW"
    ],
    "Volapük"
  ],
  vot: [
    "Latn",
    [
      "EU"
    ],
    "Vaďďa"
  ],
  vro: [
    "Latn",
    [
      "EU"
    ],
    "võro"
  ],
  wa: [
    "Latn",
    [
      "EU"
    ],
    "walon"
  ],
  wal: [
    "Latn",
    [
      "AF"
    ],
    "wolaytta"
  ],
  war: [
    "Latn",
    [
      "AS"
    ],
    "Winaray"
  ],
  wls: [
    "Latn",
    [
      "PA"
    ],
    "Faka'uvea"
  ],
  wo: [
    "Latn",
    [
      "AF"
    ],
    "Wolof"
  ],
  wuu: [
    "Hans",
    [
      "AS"
    ],
    "吴语"
  ],
  xal: [
    "Cyrl",
    [
      "EU"
    ],
    "хальмг"
  ],
  xh: [
    "Latn",
    [
      "AF"
    ],
    "isiXhosa"
  ],
  xmf: [
    "Geor",
    [
      "EU"
    ],
    "მარგალური"
  ],
  xmm: [
    "Latn",
    [
      "AS",
      "PA"
    ],
    "Manado"
  ],
  xsy: [
    "Latn",
    [
      "AS"
    ],
    "SaiSiyat"
  ],
  ydd: [
    "yi"
  ],
  yi: [
    "Hebr",
    [
      "ME",
      "EU",
      "AM"
    ],
    "ייִדיש"
  ],
  yo: [
    "Latn",
    [
      "AF"
    ],
    "Yorùbá"
  ],
  yoi: [
    "Jpan",
    [
      "AS"
    ],
    "与那国物言"
  ],
  yrk: [
    "Cyrl",
    [
      "AS"
    ],
    "ненэцяʼ вада"
  ],
  yrl: [
    "Latn",
    [
      "AM"
    ],
    "Nhẽẽgatú"
  ],
  yua: [
    "Latn",
    [
      "AM"
    ],
    "Maaya T'aan"
  ],
  yue: [
    "Hant",
    [
      "AS"
    ],
    "粵語"
  ],
  za: [
    "Latn",
    [
      "AS"
    ],
    "Vahcuengh"
  ],
  zea: [
    "Latn",
    [
      "EU"
    ],
    "Zeêuws"
  ],
  zgh: [
    "Tfng",
    [
      "AF"
    ],
    "ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⴰⵏⴰⵡⴰⵢⵜ"
  ],
  zh: [
    "Hans",
    [
      "AS",
      "PA",
      "AM"
    ],
    "中文"
  ],
  "zh-classical": [
    "lzh"
  ],
  "zh-cn": [
    "Hans",
    [
      "AS"
    ],
    "中文（中国大陆）"
  ],
  "zh-hans": [
    "Hans",
    [
      "AS",
      "PA",
      "AM"
    ],
    "中文（简体）"
  ],
  "zh-hant": [
    "Hant",
    [
      "AS",
      "PA",
      "AM"
    ],
    "中文（繁體）"
  ],
  "zh-hk": [
    "Hant",
    [
      "AS"
    ],
    "中文（香港）"
  ],
  "zh-min-nan": [
    "nan"
  ],
  "zh-mo": [
    "Hant",
    [
      "AS"
    ],
    "中文（澳門）"
  ],
  "zh-my": [
    "Hans",
    [
      "AS"
    ],
    "中文（马来西亚）"
  ],
  "zh-sg": [
    "Hans",
    [
      "AS"
    ],
    "中文（新加坡）"
  ],
  "zh-tw": [
    "Hant",
    [
      "AS"
    ],
    "中文（台灣）"
  ],
  "zh-yue": [
    "yue"
  ],
  "zh-cdo": [
    "cdo"
  ],
  zu: [
    "Latn",
    [
      "AF"
    ],
    "isiZulu"
  ],
  zun: [
    "Latn",
    [
      "AM"
    ],
    "Shiwi'ma"
  ]
}, Iv = {
  Latin: [
    "Latn",
    "Goth"
  ],
  Greek: [
    "Grek"
  ],
  WestCaucasian: [
    "Armn",
    "Geor"
  ],
  Arabic: [
    "Arab"
  ],
  MiddleEastern: [
    "Hebr",
    "Syrc"
  ],
  African: [
    "Copt",
    "Ethi",
    "Nkoo",
    "Tfng",
    "Vaii"
  ],
  SouthAsian: [
    "Beng",
    "Cakm",
    "Deva",
    "Gujr",
    "Guru",
    "Knda",
    "Mlym",
    "Mtei",
    "Olck",
    "Orya",
    "Rohg",
    "Saur",
    "Sinh",
    "Sylo",
    "Taml",
    "Telu",
    "Tibt",
    "Thaa",
    "Wara"
  ],
  Cyrillic: [
    "Cyrl"
  ],
  CJK: [
    "Hani",
    "Hans",
    "Hant",
    "Kore",
    "Jpan",
    "Yiii"
  ],
  SouthEastAsian: [
    "Bali",
    "Batk",
    "Bugi",
    "Java",
    "Khmr",
    "Laoo",
    "Lana",
    "Mymr",
    "Thai",
    "Tale"
  ],
  Mongolian: [
    "Mong"
  ],
  SignWriting: [
    "Sgnw"
  ],
  NativeAmerican: [
    "Cher",
    "Cans"
  ],
  Special: [
    "Zyyy"
  ]
}, Bv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], $v = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Uv = {
  AC: [
    "en"
  ],
  AD: [
    "ca",
    "es",
    "fr"
  ],
  AE: [
    "ar",
    "en",
    "ml",
    "ps",
    "fa"
  ],
  AF: [
    "fa",
    "ps",
    "uz",
    "tk",
    "bgn",
    "ug-arab",
    "kk-arab",
    "kk-cyrl"
  ],
  AG: [
    "en",
    "pt"
  ],
  AI: [
    "en"
  ],
  AL: [
    "sq",
    "el",
    "mk"
  ],
  AM: [
    "hy",
    "ku-latn",
    "az-latn"
  ],
  AO: [
    "pt",
    "ln"
  ],
  AR: [
    "es",
    "en",
    "cy",
    "gn"
  ],
  AS: [
    "sm",
    "en"
  ],
  AT: [
    "de",
    "bar",
    "en",
    "fr",
    "it",
    "hr",
    "sl",
    "hu"
  ],
  AU: [
    "en",
    "zh-hant",
    "zh",
    "it"
  ],
  AW: [
    "nl",
    "pap",
    "en"
  ],
  AX: [
    "sv"
  ],
  AZ: [
    "az-latn",
    "az-cyrl",
    "tly",
    "ku-latn",
    "ttt",
    "tkr"
  ],
  BA: [
    "bs",
    "en",
    "hr",
    "sr-cyrl",
    "sr-latn"
  ],
  BB: [
    "en"
  ],
  BD: [
    "bn",
    "en",
    "syl",
    "rhg",
    "ccp",
    "my",
    "mni"
  ],
  BE: [
    "en",
    "nl",
    "fr",
    "de",
    "vls",
    "wa"
  ],
  BF: [
    "mos",
    "fr",
    "ff"
  ],
  BG: [
    "bg",
    "en",
    "ru",
    "tr",
    "de"
  ],
  BH: [
    "ar",
    "ml"
  ],
  BI: [
    "rn",
    "fr",
    "sw",
    "en"
  ],
  BJ: [
    "fr",
    "fon",
    "yo"
  ],
  BL: [
    "fr"
  ],
  BM: [
    "en"
  ],
  BN: [
    "ms",
    "zh-hant",
    "zh",
    "ms-arab",
    "en"
  ],
  BO: [
    "es",
    "qu",
    "ay",
    "gn",
    "aro"
  ],
  BQ: [
    "pap",
    "nl"
  ],
  BR: [
    "pt",
    "en",
    "de",
    "it",
    "vec",
    "ja",
    "es",
    "kgp",
    "ko",
    "yrl"
  ],
  BS: [
    "en"
  ],
  BT: [
    "dz",
    "ne",
    "en"
  ],
  BW: [
    "en",
    "tn",
    "af"
  ],
  BY: [
    "be",
    "ru"
  ],
  BZ: [
    "en",
    "es"
  ],
  CA: [
    "en",
    "fr",
    "zh",
    "yue",
    "es",
    "pa-guru",
    "ar",
    "tl",
    "it",
    "de",
    "ur",
    "fa",
    "pt",
    "ru",
    "hi",
    "ta",
    "vi",
    "pl",
    "ko",
    "gu",
    "el",
    "ro",
    "bn",
    "pdt",
    "uk",
    "sr-cyrl",
    "nl",
    "ja",
    "hu",
    "so",
    "hr",
    "ike-cans",
    "tr",
    "moe",
    "cr",
    "mic",
    "atj",
    "war",
    "oka"
  ],
  CC: [
    "ms-arab",
    "ms",
    "en"
  ],
  CD: [
    "sw",
    "fr",
    "ln",
    "kg",
    "rw"
  ],
  CF: [
    "fr",
    "sg",
    "ln"
  ],
  CG: [
    "fr",
    "ln"
  ],
  CH: [
    "de",
    "gsw",
    "en",
    "fr",
    "it",
    "lmo",
    "pt",
    "rm"
  ],
  CI: [
    "fr",
    "bci"
  ],
  CK: [
    "en"
  ],
  CL: [
    "es",
    "en",
    "arn"
  ],
  CM: [
    "fr",
    "en",
    "bum",
    "ff",
    "bkm",
    "bas",
    "ar",
    "ksf",
    "ken",
    "agq",
    "ha-arab",
    "ha"
  ],
  CN: [
    "zh",
    "wuu",
    "yue",
    "hsn",
    "hak",
    "nan",
    "gan",
    "ii",
    "ug-arab",
    "za",
    "mvf",
    "mn",
    "bo",
    "ko",
    "kk-arab",
    "kk-cyrl",
    "ky",
    "tdd",
    "en",
    "ru",
    "vi",
    "uz-cyrl",
    "uz",
    "lzh"
  ],
  CO: [
    "es",
    "guc",
    "yrl"
  ],
  CR: [
    "es"
  ],
  CU: [
    "es"
  ],
  CV: [
    "kea",
    "pt"
  ],
  CW: [
    "pap",
    "nl",
    "es"
  ],
  CX: [
    "en"
  ],
  CY: [
    "el",
    "en",
    "tr",
    "fr",
    "hy",
    "ar"
  ],
  CZ: [
    "cs",
    "en",
    "sk",
    "de",
    "pl"
  ],
  DE: [
    "de",
    "en",
    "fr",
    "bar",
    "nds",
    "nl",
    "it",
    "es",
    "ru",
    "vmf",
    "tr",
    "gsw",
    "da",
    "hr",
    "ku-latn",
    "el",
    "ksh",
    "pl",
    "hsb",
    "frr",
    "dsb",
    "stq",
    "pfl"
  ],
  DG: [
    "en"
  ],
  DJ: [
    "aa",
    "so",
    "ar",
    "fr"
  ],
  DK: [
    "da",
    "en",
    "de",
    "sv",
    "fo",
    "kl",
    "jut"
  ],
  DM: [
    "en"
  ],
  DO: [
    "es",
    "en"
  ],
  DZ: [
    "arq",
    "ar",
    "fr",
    "kab",
    "en"
  ],
  EA: [
    "es"
  ],
  EC: [
    "es",
    "qu",
    "qug"
  ],
  EE: [
    "et",
    "ru",
    "en",
    "fi",
    "vro"
  ],
  EG: [
    "ar",
    "arz",
    "en",
    "el"
  ],
  EH: [
    "ar"
  ],
  ER: [
    "ti",
    "en",
    "tig",
    "ar",
    "aa",
    "byn"
  ],
  ES: [
    "es",
    "en",
    "ca",
    "gl",
    "eu",
    "ast",
    "ext",
    "an",
    "oc"
  ],
  ET: [
    "en",
    "am",
    "om",
    "so",
    "ti",
    "wal",
    "aa",
    "gez"
  ],
  FI: [
    "fi",
    "en",
    "sv",
    "de",
    "ru",
    "et",
    "rmf",
    "se",
    "smn",
    "sms"
  ],
  FJ: [
    "en",
    "hi",
    "hif",
    "fj",
    "rtm"
  ],
  FK: [
    "en"
  ],
  FM: [
    "en"
  ],
  FO: [
    "fo"
  ],
  FR: [
    "fr",
    "en",
    "es",
    "de",
    "oc",
    "it",
    "pt",
    "pcd",
    "gsw",
    "br",
    "co",
    "ca",
    "nl",
    "eu",
    "frp",
    "ia"
  ],
  GA: [
    "fr"
  ],
  GB: [
    "en",
    "fr",
    "de",
    "es",
    "pl",
    "pa-guru",
    "ur",
    "ta",
    "gu",
    "sco",
    "cy",
    "bn",
    "ar",
    "zh-hant",
    "zh",
    "it",
    "lt",
    "pt",
    "so",
    "tr",
    "ga",
    "gd",
    "kw"
  ],
  GD: [
    "en"
  ],
  GE: [
    "ka",
    "xmf",
    "ru",
    "hy",
    "ab",
    "os",
    "ku-latn"
  ],
  GF: [
    "fr",
    "gcr",
    "zh-hant",
    "zh"
  ],
  GG: [
    "en"
  ],
  GH: [
    "ak",
    "en",
    "ee",
    "gur",
    "gaa",
    "nzi",
    "ha",
    "ff"
  ],
  GI: [
    "en",
    "es"
  ],
  GL: [
    "kl",
    "da"
  ],
  GM: [
    "en",
    "ff"
  ],
  GN: [
    "fr",
    "ff",
    "nqo"
  ],
  GP: [
    "fr"
  ],
  GQ: [
    "es",
    "fan",
    "fr",
    "pt"
  ],
  GR: [
    "el",
    "en",
    "fr",
    "de",
    "pnt",
    "mk",
    "tr",
    "bg",
    "sq",
    "tsd"
  ],
  GT: [
    "es",
    "quc"
  ],
  GU: [
    "en",
    "ch"
  ],
  GW: [
    "pt",
    "ff"
  ],
  GY: [
    "en"
  ],
  HK: [
    "zh-hant",
    "zh",
    "yue",
    "en"
  ],
  HN: [
    "es",
    "en"
  ],
  HR: [
    "hr",
    "en",
    "it",
    "vec"
  ],
  HT: [
    "ht",
    "fr"
  ],
  HU: [
    "hu",
    "en",
    "de",
    "fr",
    "ro",
    "hr",
    "sk",
    "sl"
  ],
  IC: [
    "es"
  ],
  ID: [
    "id",
    "jv",
    "su",
    "mad",
    "ms",
    "min",
    "bew",
    "ban",
    "bug",
    "bjn",
    "ace",
    "ms-arab",
    "bbc-latn",
    "zh-hant",
    "zh",
    "mak",
    "rej",
    "gor",
    "sly",
    "mwv"
  ],
  IE: [
    "en",
    "ga",
    "fr"
  ],
  IL: [
    "he",
    "en",
    "ar",
    "ajp",
    "ru",
    "ro",
    "yi",
    "pl",
    "lad-latn",
    "hu",
    "am",
    "ti",
    "ml"
  ],
  IM: [
    "en",
    "gv"
  ],
  IN: [
    "hi",
    "en",
    "bn",
    "te",
    "mr",
    "ta",
    "ur",
    "gu",
    "kn",
    "ml",
    "or",
    "pa-guru",
    "bho",
    "awa",
    "as",
    "mag",
    "mai",
    "hne",
    "ne",
    "sat",
    "ks-arab",
    "gom-deva",
    "gbm",
    "sd",
    "doi",
    "tcy",
    "brx",
    "mni",
    "hoc",
    "saz",
    "ccp",
    "bfq",
    "njo",
    "bo",
    "bpy",
    "bft",
    "sa",
    "dv",
    "dz"
  ],
  IO: [
    "en"
  ],
  IQ: [
    "ar",
    "en",
    "ckb",
    "az-arab",
    "az-latn",
    "fa",
    "lrc"
  ],
  IR: [
    "fa",
    "az-arab",
    "az-latn",
    "mzn",
    "glk",
    "ckb",
    "sdh",
    "tk",
    "lrc",
    "ar",
    "bqi",
    "luz",
    "lki",
    "bgn",
    "hy",
    "ps",
    "ka",
    "gbz",
    "kk-arab",
    "kk-cyrl"
  ],
  IS: [
    "is",
    "da"
  ],
  IT: [
    "it",
    "en",
    "fr",
    "sc",
    "de",
    "vec",
    "nap",
    "lij",
    "scn",
    "sl",
    "sdc",
    "fur",
    "egl",
    "ca",
    "el",
    "lmo",
    "pms",
    "hr",
    "rgn"
  ],
  JE: [
    "en"
  ],
  JM: [
    "en",
    "jam"
  ],
  JO: [
    "ar",
    "ajp",
    "en"
  ],
  JP: [
    "ja",
    "ryu",
    "ko"
  ],
  KE: [
    "sw",
    "en",
    "ki",
    "so",
    "pko",
    "om",
    "ar",
    "pa-guru",
    "gu"
  ],
  KG: [
    "ky",
    "ru"
  ],
  KH: [
    "km"
  ],
  KI: [
    "en"
  ],
  KM: [
    "ar",
    "fr"
  ],
  KN: [
    "en"
  ],
  KP: [
    "ko"
  ],
  KR: [
    "ko"
  ],
  KW: [
    "ar"
  ],
  KY: [
    "en"
  ],
  KZ: [
    "ru",
    "kk-cyrl",
    "en",
    "de",
    "ug-cyrl",
    "ug-arab"
  ],
  LA: [
    "lo"
  ],
  LB: [
    "ar",
    "en",
    "hy",
    "ku-arab",
    "ku-latn",
    "fr"
  ],
  LC: [
    "en"
  ],
  LI: [
    "de",
    "gsw"
  ],
  LK: [
    "si",
    "ta",
    "en"
  ],
  LR: [
    "en",
    "vai",
    "ff"
  ],
  LS: [
    "st",
    "en",
    "zu",
    "ss",
    "xh"
  ],
  LT: [
    "lt",
    "ru",
    "en",
    "de",
    "sgs"
  ],
  LU: [
    "fr",
    "lb",
    "de",
    "en",
    "pt"
  ],
  LV: [
    "lv",
    "en",
    "ru",
    "ltg"
  ],
  LY: [
    "ar"
  ],
  MA: [
    "ary",
    "ar",
    "zgh",
    "fr",
    "en",
    "tzm",
    "shi-latn",
    "rif",
    "es"
  ],
  MC: [
    "fr"
  ],
  MD: [
    "ro",
    "uk",
    "bg",
    "gag",
    "ru"
  ],
  ME: [
    "sr-latn",
    "sr-cyrl",
    "sq"
  ],
  MF: [
    "fr"
  ],
  MG: [
    "mg",
    "fr",
    "en"
  ],
  MH: [
    "en",
    "mh"
  ],
  MK: [
    "mk",
    "sq",
    "tr"
  ],
  ML: [
    "bm",
    "fr",
    "ses",
    "ar"
  ],
  MM: [
    "my",
    "shn",
    "kac",
    "rhg",
    "mnw"
  ],
  MN: [
    "mn",
    "kk-arab",
    "kk-cyrl",
    "zh",
    "ru",
    "ug-cyrl",
    "ug-arab"
  ],
  MO: [
    "zh-hant",
    "zh",
    "pt",
    "en"
  ],
  MP: [
    "en",
    "ch"
  ],
  MQ: [
    "fr"
  ],
  MR: [
    "ar",
    "fr",
    "ff",
    "wo"
  ],
  MS: [
    "en"
  ],
  MT: [
    "mt",
    "en",
    "it",
    "fr"
  ],
  MU: [
    "mfe",
    "en",
    "bho",
    "ur",
    "fr",
    "ta"
  ],
  MV: [
    "dv",
    "en"
  ],
  MW: [
    "en",
    "ny",
    "tum",
    "zu"
  ],
  MX: [
    "es",
    "en",
    "yua",
    "vec",
    "sei"
  ],
  MY: [
    "ms",
    "en",
    "zh",
    "ta",
    "jv",
    "dtp",
    "ml",
    "bug",
    "bjn"
  ],
  MZ: [
    "pt",
    "vmw",
    "ts",
    "ny",
    "sw",
    "zu"
  ],
  NA: [
    "af",
    "kj",
    "ng",
    "hz",
    "en",
    "de",
    "tn"
  ],
  NC: [
    "fr"
  ],
  NE: [
    "ha",
    "fr",
    "ar",
    "ff"
  ],
  NF: [
    "en"
  ],
  NG: [
    "en",
    "pcm",
    "ha",
    "ig",
    "yo",
    "efi",
    "ha-arab",
    "kcg",
    "ar",
    "ff",
    "ann"
  ],
  NI: [
    "es"
  ],
  NL: [
    "nl",
    "en",
    "de",
    "fr",
    "nds",
    "li",
    "fy",
    "id",
    "zea",
    "rif",
    "tr"
  ],
  NO: [
    "nb",
    "no",
    "nn",
    "se"
  ],
  NP: [
    "ne",
    "mai",
    "bho",
    "new",
    "en",
    "dty",
    "awa",
    "hi",
    "bo",
    "bn"
  ],
  NR: [
    "en",
    "na"
  ],
  NU: [
    "en",
    "niu"
  ],
  NZ: [
    "en",
    "mi"
  ],
  OM: [
    "ar",
    "fa"
  ],
  PA: [
    "es",
    "en",
    "zh-hant",
    "zh"
  ],
  PE: [
    "es",
    "qu",
    "ay"
  ],
  PF: [
    "fr",
    "ty",
    "zh-hant",
    "zh"
  ],
  PG: [
    "tpi",
    "en",
    "ho"
  ],
  PH: [
    "en",
    "tl",
    "es",
    "ceb",
    "ilo",
    "hil",
    "war",
    "pam",
    "pag",
    "zh-hant",
    "zh",
    "cps",
    "krj",
    "bto"
  ],
  PK: [
    "ur",
    "pa-guru",
    "en",
    "ps",
    "sd",
    "skr-arab",
    "brh",
    "fa",
    "bgn",
    "tg-cyrl",
    "bft",
    "khw",
    "ks-arab"
  ],
  PL: [
    "pl",
    "en",
    "de",
    "ru",
    "szl",
    "be",
    "uk",
    "csb",
    "sli",
    "lt",
    "prg"
  ],
  PM: [
    "fr",
    "en"
  ],
  PN: [
    "en"
  ],
  PR: [
    "es",
    "en"
  ],
  PS: [
    "ar",
    "ajp"
  ],
  PT: [
    "pt",
    "en",
    "fr",
    "es",
    "gl"
  ],
  PW: [
    "en"
  ],
  PY: [
    "gn",
    "es",
    "de"
  ],
  QA: [
    "ar",
    "fa",
    "ml"
  ],
  RE: [
    "fr",
    "rcf",
    "ta"
  ],
  RO: [
    "ro",
    "en",
    "fr",
    "es",
    "hu",
    "de",
    "tr",
    "sr-latn",
    "sr-cyrl",
    "bg",
    "el",
    "pl"
  ],
  RS: [
    "sr-cyrl",
    "sr-latn",
    "sq",
    "hu",
    "ro",
    "hr",
    "sk",
    "uk"
  ],
  RU: [
    "ru",
    "tt",
    "ba",
    "cv",
    "hy",
    "ce",
    "av",
    "udm",
    "mhr",
    "sah",
    "os",
    "kbd",
    "myv",
    "dar",
    "mdf",
    "kum",
    "kv",
    "lez",
    "krc",
    "inh",
    "tyv",
    "az-cyrl",
    "az-latn",
    "ady",
    "krl",
    "lbe",
    "koi",
    "mrj",
    "alt",
    "fi",
    "sr-latn",
    "sr-cyrl",
    "vep",
    "mn",
    "izh",
    "vot",
    "cu"
  ],
  RW: [
    "rw",
    "en",
    "fr"
  ],
  SA: [
    "ar"
  ],
  SB: [
    "en",
    "pis"
  ],
  SC: [
    "fr",
    "en"
  ],
  SD: [
    "ar",
    "en",
    "fvr",
    "ha-arab",
    "ha"
  ],
  SE: [
    "sv",
    "en",
    "fi",
    "fit",
    "se",
    "yi",
    "smj",
    "sma",
    "ia"
  ],
  SG: [
    "en",
    "zh",
    "ms",
    "ta",
    "ml",
    "pa-guru"
  ],
  SH: [
    "en"
  ],
  SI: [
    "sl",
    "hr",
    "en",
    "de",
    "vec",
    "hu",
    "it"
  ],
  SJ: [
    "nb",
    "ru"
  ],
  SK: [
    "sk",
    "cs",
    "en",
    "de",
    "hu",
    "uk",
    "pl"
  ],
  SL: [
    "kri",
    "en",
    "ff"
  ],
  SM: [
    "it",
    "eo"
  ],
  SN: [
    "wo",
    "fr",
    "ff"
  ],
  SO: [
    "so",
    "ar",
    "sw",
    "om"
  ],
  SR: [
    "nl",
    "srn",
    "zh-hant",
    "zh"
  ],
  SS: [
    "ar",
    "en",
    "nus"
  ],
  ST: [
    "pt"
  ],
  SV: [
    "es"
  ],
  SX: [
    "en",
    "es",
    "nl"
  ],
  SY: [
    "ar",
    "ku-latn",
    "fr",
    "hy"
  ],
  SZ: [
    "en",
    "ss",
    "zu",
    "ts"
  ],
  TA: [
    "en"
  ],
  TC: [
    "en"
  ],
  TD: [
    "fr",
    "ar"
  ],
  TF: [
    "fr"
  ],
  TG: [
    "fr",
    "ee"
  ],
  TH: [
    "th",
    "en",
    "nod",
    "zh-hant",
    "zh",
    "mnw",
    "shn"
  ],
  TJ: [
    "tg-cyrl",
    "ru",
    "fa",
    "ar"
  ],
  TK: [
    "en"
  ],
  TL: [
    "pt",
    "tet"
  ],
  TM: [
    "tk",
    "ru",
    "uz",
    "ku-latn"
  ],
  TN: [
    "aeb-arab",
    "ar",
    "fr"
  ],
  TO: [
    "to",
    "en"
  ],
  TR: [
    "tr",
    "en",
    "ku-latn",
    "kbd",
    "az-latn",
    "az-arab",
    "ar",
    "bg",
    "ady",
    "kiu",
    "hy",
    "ka",
    "sr-latn",
    "sr-cyrl",
    "lzz",
    "sq",
    "ab",
    "el",
    "tru",
    "uz",
    "ky",
    "kk-cyrl"
  ],
  TT: [
    "en",
    "es"
  ],
  TV: [
    "en"
  ],
  TW: [
    "zh-hant",
    "zh",
    "trv"
  ],
  TZ: [
    "sw",
    "en",
    "lag"
  ],
  UA: [
    "uk",
    "ru",
    "pl",
    "yi",
    "rue",
    "be",
    "crh",
    "ro",
    "bg",
    "tr",
    "hu",
    "el"
  ],
  UG: [
    "sw",
    "lg",
    "nyn",
    "en",
    "rw",
    "hi"
  ],
  UM: [
    "en"
  ],
  US: [
    "en",
    "es",
    "zh-hant",
    "zh",
    "fr",
    "de",
    "tl",
    "it",
    "vi",
    "ko",
    "ru",
    "nv",
    "yi",
    "pdc",
    "haw",
    "frc",
    "chr",
    "esu",
    "cho",
    "lkt",
    "ik",
    "mus",
    "io",
    "jbo"
  ],
  UY: [
    "es"
  ],
  UZ: [
    "uz",
    "uz-cyrl",
    "ru",
    "kaa",
    "tr"
  ],
  VA: [
    "it",
    "la"
  ],
  VC: [
    "en"
  ],
  VE: [
    "es",
    "yrl"
  ],
  VG: [
    "en"
  ],
  VI: [
    "en"
  ],
  VN: [
    "vi",
    "zh-hant",
    "zh"
  ],
  VU: [
    "bi",
    "en",
    "fr"
  ],
  WF: [
    "wls",
    "fr"
  ],
  WS: [
    "sm",
    "en"
  ],
  XK: [
    "sq",
    "aln",
    "sr-cyrl",
    "sr-latn"
  ],
  YE: [
    "ar",
    "en"
  ],
  YT: [
    "swb",
    "fr",
    "sw"
  ],
  ZA: [
    "en",
    "zu",
    "xh",
    "af",
    "nso",
    "tn",
    "st",
    "ts",
    "ss",
    "ve",
    "hi",
    "nr",
    "sw"
  ],
  ZM: [
    "en",
    "ny",
    "loz"
  ],
  ZW: [
    "sn",
    "en",
    "nd",
    "kck",
    "ny",
    "ve",
    "tn"
  ]
}, Rv = {
  languages: Ov,
  scriptgroups: Iv,
  rtlscripts: Bv,
  regiongroups: $v,
  territories: Uv
};
var ut = Rv;
function as(e) {
  return !!ut.languages[e];
}
function Pn(e) {
  return as(e) && ut.languages[e].length === 1 ? ut.languages[e][0] : !1;
}
function Vv() {
  return ut.languages;
}
function is(e) {
  var t = Pn(e);
  return t ? is(t) : as(e) ? ut.languages[e][0] : "Zyyy";
}
function er(e) {
  var t = Pn(e);
  return t ? er(t) : as(e) && ut.languages[e][1] || "UNKNOWN";
}
function qo(e) {
  var t = Pn(e);
  return t ? qo(t) : as(e) && ut.languages[e][2] || e;
}
function zv() {
  var e, t = {};
  for (e in ut.languages)
    Pn(e) || (t[e] = qo(e));
  return t;
}
function ld(e) {
  var t, n, o = [];
  for (t in ut.languages)
    if (!Pn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === is(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function jv(e) {
  return ld([e]);
}
function cd(e) {
  var t;
  for (t in ut.scriptgroups)
    if (ut.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function tr(e) {
  return cd(is(e));
}
function ud(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Pn(n) || n, a = tr(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function dd(e) {
  var t, n, o, s = {};
  for (t in ut.languages)
    if (!Pn(t)) {
      for (n = 0; n < e.length; n++)
        if (er(t).includes(e[n])) {
          o = tr(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Hv(e) {
  return dd([e]);
}
function qv(e) {
  var t, n, o, s = [];
  for (t = ud(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Gv(e, t) {
  var n = qo(e) || e, o = qo(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function gd(e) {
  return ut.rtlscripts.includes(is(e));
}
function Wv(e) {
  return gd(e) ? "rtl" : "ltr";
}
function Kv(e) {
  return ut.territories[e] || [];
}
function Xv(e, t) {
  t.target ? ut.languages[e] = [t.target] : ut.languages[e] = [t.script, t.regions, t.autonym];
}
var Me = {
  addLanguage: Xv,
  getAutonym: qo,
  getAutonyms: zv,
  getDir: Wv,
  getGroupOfScript: cd,
  getLanguages: Vv,
  getLanguagesByScriptGroup: ud,
  getLanguagesByScriptGroupInRegion: Hv,
  getLanguagesByScriptGroupInRegions: dd,
  getLanguagesInScript: jv,
  getLanguagesInScripts: ld,
  getLanguagesInTerritory: Kv,
  getRegions: er,
  getScript: is,
  getScriptGroupOfLanguage: tr,
  isKnown: as,
  isRedirect: Pn,
  isRtl: gd,
  sortByScriptGroup: qv,
  sortByAutonym: Gv
};
const Yv = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), r = new Date(Date.UTC(t, n, o, s, a, i)), d = (/* @__PURE__ */ new Date()).getTime() - r.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, Jv = (e) => {
  const t = Yv(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
var Zv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, fd = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Zv, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(u) {
        this.locale = u;
      }
      convertPlural(u, g) {
        const f = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let C = 0; C < g.length; C++) {
          const x = g[C];
          if (f.test(x)) {
            if (parseInt(x.slice(0, x.indexOf("=")), 10) === u)
              return x.slice(x.indexOf("=") + 1);
            g[C] = void 0;
          }
        }
        g = g.filter((C) => !!C);
        let m = this.getPluralForm(u, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(u, g) {
        const f = new Intl.PluralRules(g), m = f.resolvedOptions().pluralCategories, C = f.select(u);
        return ["zero", "one", "two", "few", "many", "other"].filter((x) => m.includes(x)).indexOf(C);
      }
      convertNumber(u, g = !1) {
        let f = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(u, 10) === u || !f)
            return u;
          const C = [];
          for (const E in f)
            C[f[E]] = E;
          f = C;
          const x = String(u);
          for (let E = 0; E < x.length; E++)
            m += f[x[E]] || x[E];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let C;
          const x = [...o[this.locale] || [], "en"];
          return C = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : x, m = new Intl.NumberFormat(C).format(u), m === "NaN" && (m = u), m;
        }
      }
      convertGrammar(u, g) {
        return u;
      }
      gender(u, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return u === "male" ? g[0] : u === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
      }
      digitTransformTable(u) {
        return !!n[u] && n[u].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "instrumental":
            c = "s " + c;
            break;
          case "lokativ":
            c = "o " + c;
        }
        return c;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "instrumental":
            c = "z " + c;
            break;
          case "lokatiw":
            c = "wo " + c;
        }
        return c;
      }
    }, fi: class extends s {
      convertGrammar(c, u) {
        let g = c.match(/[aou][^äöy]*$/i);
        const f = c;
        switch (c.match(/wiki$/i) && (g = !1), c.match(/[bcdfghjklmnpqrstvwxz]$/i) && (c += "i"), u) {
          case "genitive":
            c += "n";
            break;
          case "elative":
            c += g ? "sta" : "stä";
            break;
          case "partitive":
            c += g ? "a" : "ä";
            break;
          case "illative":
            c += c.slice(-1) + "n";
            break;
          case "inessive":
            c += g ? "ssa" : "ssä";
            break;
          default:
            c = f;
        }
        return c;
      }
    }, ga: class extends s {
      convertGrammar(c, u) {
        if (u === "ainmlae")
          switch (c) {
            case "an Domhnach":
              c = "Dé Domhnaigh";
              break;
            case "an Luan":
              c = "Dé Luain";
              break;
            case "an Mháirt":
              c = "Dé Mháirt";
              break;
            case "an Chéadaoin":
              c = "Dé Chéadaoin";
              break;
            case "an Déardaoin":
              c = "Déardaoin";
              break;
            case "an Aoine":
              c = "Dé hAoine";
              break;
            case "an Satharn":
              c = "Dé Sathairn";
          }
        return c;
      }
    }, he: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "prefixed":
          case "תחילית":
            c.slice(0, 1) === "ו" && c.slice(0, 2) !== "וו" && (c = "ו" + c), c.slice(0, 1) === "ה" && (c = c.slice(1)), (c.slice(0, 1) < "א" || c.slice(0, 1) > "ת") && (c = "־" + c);
        }
        return c;
      }
    }, hsb: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "instrumental":
            c = "z " + c;
            break;
          case "lokatiw":
            c = "wo " + c;
        }
        return c;
      }
    }, hu: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "rol":
            c += "ról";
            break;
          case "ba":
            c += "ba";
            break;
          case "k":
            c += "k";
        }
        return c;
      }
    }, hy: class extends s {
      convertGrammar(c, u) {
        return u === "genitive" && (c.slice(-1) === "ա" ? c = c.slice(0, -1) + "այի" : c.slice(-1) === "ո" ? c = c.slice(0, -1) + "ոյի" : c.slice(-4) === "գիրք" ? c = c.slice(0, -4) + "գրքի" : c += "ի"), c;
      }
    }, la: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "genitive":
            c = (c = (c = (c = (c = (c = (c = (c = (c = c.replace(/u[ms]$/i, "i")).replace(/ommunia$/i, "ommunium")).replace(/a$/i, "ae")).replace(/libri$/i, "librorum")).replace(/nuntii$/i, "nuntiorum")).replace(/tio$/i, "tionis")).replace(/ns$/i, "ntis")).replace(/as$/i, "atis")).replace(/es$/i, "ei");
            break;
          case "accusative":
            c = (c = (c = (c = (c = (c = (c = (c = (c = c.replace(/u[ms]$/i, "um")).replace(/ommunia$/i, "am")).replace(/a$/i, "ommunia")).replace(/libri$/i, "libros")).replace(/nuntii$/i, "nuntios")).replace(/tio$/i, "tionem")).replace(/ns$/i, "ntem")).replace(/as$/i, "atem")).replace(/es$/i, "em");
            break;
          case "ablative":
            c = (c = (c = (c = (c = (c = (c = (c = (c = c.replace(/u[ms]$/i, "o")).replace(/ommunia$/i, "ommunibus")).replace(/a$/i, "a")).replace(/libri$/i, "libris")).replace(/nuntii$/i, "nuntiis")).replace(/tio$/i, "tione")).replace(/ns$/i, "nte")).replace(/as$/i, "ate")).replace(/es$/i, "e");
        }
        return c;
      }
    }, os: class extends s {
      convertGrammar(c, u) {
        let g, f, m, C;
        switch (g = "мæ", f = "", m = "", C = "", c.match(/тæ$/i) ? (c = c.slice(0, -1), g = "æм") : c.match(/[аæеёиоыэюя]$/i) ? f = "й" : c.match(/у$/i) ? c.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (f = "й") : c.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), u) {
          case "genitive":
            C = m + f + "ы";
            break;
          case "dative":
            C = m + f + "æн";
            break;
          case "allative":
            C = m + g;
            break;
          case "ablative":
            C = f === "й" ? m + f + "æ" : m + f + "æй";
            break;
          case "superessive":
            C = m + f + "ыл";
            break;
          case "equative":
            C = m + f + "ау";
            break;
          case "comitative":
            C = m + "имæ";
        }
        return c + C;
      }
    }, ru: class extends s {
      convertGrammar(c, u) {
        return u === "genitive" && (c.slice(-1) === "ь" ? c = c.slice(0, -1) + "я" : c.slice(-2) === "ия" ? c = c.slice(0, -2) + "ии" : c.slice(-2) === "ка" ? c = c.slice(0, -2) + "ки" : c.slice(-2) === "ти" ? c = c.slice(0, -2) + "тей" : c.slice(-2) === "ды" ? c = c.slice(0, -2) + "дов" : c.slice(-3) === "ник" && (c = c.slice(0, -3) + "ника")), c;
      }
    }, sl: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "mestnik":
            c = "o " + c;
            break;
          case "orodnik":
            c = "z " + c;
        }
        return c;
      }
    }, uk: class extends s {
      convertGrammar(c, u) {
        switch (u) {
          case "genitive":
            c.slice(-1) === "ь" ? c = c.slice(0, -1) + "я" : c.slice(-2) === "ія" ? c = c.slice(0, -2) + "ії" : c.slice(-2) === "ка" ? c = c.slice(0, -2) + "ки" : c.slice(-2) === "ти" ? c = c.slice(0, -2) + "тей" : c.slice(-2) === "ды" ? c = c.slice(0, -2) + "дов" : c.slice(-3) === "ник" && (c = c.slice(0, -3) + "ника");
            break;
          case "accusative":
            c.slice(-2) === "ія" && (c = c.slice(0, -2) + "ію");
        }
        return c;
      }
    } };
    const i = new RegExp("(?:([A-Za-zªµºÀ-ÖØ-öø-ʸʻ-ˁːˑˠ-ˤˮͰ-ͳͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-҂Ҋ-ԯԱ-Ֆՙ-՟ա-և։ः-हऻऽ-ीॉ-ौॎ-ॐक़-ॡ।-ঀংঃঅ-ঌএঐও-নপ-রলশ-হঽ-ীেৈোৌৎৗড়ঢ়য়-ৡ০-ৱ৴-৺ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ીૉોૌૐૠૡ૦-૰ૹଂଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽାୀେୈୋୌୗଡ଼ଢ଼ୟ-ୡ୦-୷ஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹாிுூெ-ைொ-ௌௐௗ௦-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౚౠౡ౦-౯౿ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊೋೕೖೞೠೡ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ീെ-ൈൊ-ൌൎൗൟ-ൡ൦-൵൹-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-෴ก-ะาำเ-ๆ๏-๛ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆ໐-໙ໜ-ໟༀ-༗༚-༴༶༸༾-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿚က-ာေးျြဿ-ၗၚ-ၝၡ-ၰၵ-ႁႃႄႇ-ႌႎ-ႜ႞-ჅჇჍა-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፼ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙿᚁ-ᚚᚠ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះៈ។-៚ៜ០-៩᠐-᠙ᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸ᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧚ᨀ-ᨖᨙᨚ᨞-ᩕᩗᩡᩣᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪭ᬄ-ᬳᬵᬻᬽ-ᭁᭃ-ᭋ᭐-᭪᭴-᭼ᮂ-ᮡᮦᮧ᮪ᮮ-ᯥᯧᯪ-ᯬᯮ᯲᯳᯼-ᰫᰴᰵ᰻-᱉ᱍ-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〮〯〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎ㆐-ㆺㇰ-㈜㈠-㉏㉠-㉻㉿-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿕ꀀ-ꒌꓐ-ꘌꘐ-ꘫꙀ-ꙮꚀ-ꚝꚠ-ꛯ꛲-꛷Ꜣ-ꞇ꞉-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠤꠧ꠰-꠷ꡀ-ꡳꢀ-ꣃ꣎-꣙ꣲ-ꣽ꤀-ꤥ꤮-ꥆꥒ꥓꥟-ꥼꦃ-ꦲꦴꦵꦺꦻꦽ-꧍ꧏ-꧙꧞-ꧤꧦ-ꧾꨀ-ꨨꨯꨰꨳꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-ꩻꩽ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫫꫮ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭥꭰ-ꯤꯦꯧꯩ-꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|\uD800[\uDC00-\uDC0B]|\uD800[\uDC0D-\uDC26]|\uD800[\uDC28-\uDC3A]|𐀼|𐀽|\uD800[\uDC3F-\uDC4D]|\uD800[\uDC50-\uDC5D]|\uD800[\uDC80-\uDCFA]|𐄀|𐄂|\uD800[\uDD07-\uDD33]|\uD800[\uDD37-\uDD3F]|\uD800[\uDDD0-\uDDFC]|\uD800[\uDE80-\uDE9C]|\uD800[\uDEA0-\uDED0]|\uD800[\uDF00-\uDF23]|\uD800[\uDF30-\uDF4A]|\uD800[\uDF50-\uDF75]|\uD800[\uDF80-\uDF9D]|\uD800[\uDF9F-\uDFC3]|\uD800[\uDFC8-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD801[\uDCA0-\uDCA9]|\uD801[\uDD00-\uDD27]|\uD801[\uDD30-\uDD63]|𐕯|\uD801[\uDE00-\uDF36]|\uD801[\uDF40-\uDF55]|\uD801[\uDF60-\uDF67]|𑀀|\uD804[\uDC02-\uDC37]|\uD804[\uDC47-\uDC4D]|\uD804[\uDC66-\uDC6F]|\uD804[\uDC82-\uDCB2]|𑂷|𑂸|\uD804[\uDCBB-\uDCC1]|\uD804[\uDCD0-\uDCE8]|\uD804[\uDCF0-\uDCF9]|\uD804[\uDD03-\uDD26]|𑄬|\uD804[\uDD36-\uDD43]|\uD804[\uDD50-\uDD72]|\uD804[\uDD74-\uDD76]|\uD804[\uDD82-\uDDB5]|\uD804[\uDDBF-\uDDC9]|𑇍|\uD804[\uDDD0-\uDDDF]|\uD804[\uDDE1-\uDDF4]|\uD804[\uDE00-\uDE11]|\uD804[\uDE13-\uDE2E]|𑈲|𑈳|𑈵|\uD804[\uDE38-\uDE3D]|\uD804[\uDE80-\uDE86]|𑊈|\uD804[\uDE8A-\uDE8D]|\uD804[\uDE8F-\uDE9D]|\uD804[\uDE9F-\uDEA9]|\uD804[\uDEB0-\uDEDE]|\uD804[\uDEE0-\uDEE2]|\uD804[\uDEF0-\uDEF9]|𑌂|𑌃|\uD804[\uDF05-\uDF0C]|𑌏|𑌐|\uD804[\uDF13-\uDF28]|\uD804[\uDF2A-\uDF30]|𑌲|𑌳|\uD804[\uDF35-\uDF39]|\uD804[\uDF3D-\uDF3F]|\uD804[\uDF41-\uDF44]|𑍇|𑍈|\uD804[\uDF4B-\uDF4D]|𑍐|𑍗|\uD804[\uDF5D-\uDF63]|\uD805[\uDC80-\uDCB2]|𑒹|\uD805[\uDCBB-\uDCBE]|𑓁|\uD805[\uDCC4-\uDCC7]|\uD805[\uDCD0-\uDCD9]|\uD805[\uDD80-\uDDB1]|\uD805[\uDDB8-\uDDBB]|𑖾|\uD805[\uDDC1-\uDDDB]|\uD805[\uDE00-\uDE32]|𑘻|𑘼|𑘾|\uD805[\uDE41-\uDE44]|\uD805[\uDE50-\uDE59]|\uD805[\uDE80-\uDEAA]|𑚬|𑚮|𑚯|𑚶|\uD805[\uDEC0-\uDEC9]|\uD805[\uDF00-\uDF19]|𑜠|𑜡|𑜦|\uD805[\uDF30-\uDF3F]|\uD806[\uDCA0-\uDCF2]|𑣿|\uD806[\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E]|\uD809[\uDC70-\uDC74]|\uD809[\uDC80-\uDD43]|\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38]|\uD81A[\uDE40-\uDE5E]|\uD81A[\uDE60-\uDE69]|𖩮|𖩯|\uD81A[\uDED0-\uDEED]|𖫵|\uD81A[\uDF00-\uDF2F]|\uD81A[\uDF37-\uDF45]|\uD81A[\uDF50-\uDF59]|\uD81A[\uDF5B-\uDF61]|\uD81A[\uDF63-\uDF77]|\uD81A[\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44]|\uD81B[\uDF50-\uDF7E]|\uD81B[\uDF93-\uDF9F]|𛀀|𛀁|\uD82F[\uDC00-\uDC6A]|\uD82F[\uDC70-\uDC7C]|\uD82F[\uDC80-\uDC88]|\uD82F[\uDC90-\uDC99]|𛲜|𛲟|\uD834[\uDC00-\uDCF5]|\uD834[\uDD00-\uDD26]|\uD834[\uDD29-\uDD66]|\uD834[\uDD6A-\uDD72]|𝆃|𝆄|\uD834[\uDD8C-\uDDA9]|\uD834[\uDDAE-\uDDE8]|\uD834[\uDF60-\uDF71]|\uD835[\uDC00-\uDC54]|\uD835[\uDC56-\uDC9C]|𝒞|𝒟|𝒢|𝒥|𝒦|\uD835[\uDCA9-\uDCAC]|\uD835[\uDCAE-\uDCB9]|𝒻|\uD835[\uDCBD-\uDCC3]|\uD835[\uDCC5-\uDD05]|\uD835[\uDD07-\uDD0A]|\uD835[\uDD0D-\uDD14]|\uD835[\uDD16-\uDD1C]|\uD835[\uDD1E-\uDD39]|\uD835[\uDD3B-\uDD3E]|\uD835[\uDD40-\uDD44]|𝕆|\uD835[\uDD4A-\uDD50]|\uD835[\uDD52-\uDEA5]|\uD835[\uDEA8-\uDEDA]|\uD835[\uDEDC-\uDF14]|\uD835[\uDF16-\uDF4E]|\uD835[\uDF50-\uDF88]|\uD835[\uDF8A-\uDFC2]|\uD835[\uDFC4-\uDFCB]|\uD836[\uDC00-\uDDFF]|\uD836[\uDE37-\uDE3A]|\uD836[\uDE6D-\uDE74]|\uD836[\uDE76-\uDE83]|\uD836[\uDE85-\uDE8B]|\uD83C[\uDD10-\uDD2E]|\uD83C[\uDD30-\uDD69]|\uD83C[\uDD70-\uDD9A]|\uD83C[\uDDE6-\uDE02]|\uD83C[\uDE10-\uDE3A]|\uD83C[\uDE40-\uDE48]|🉐|🉑|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34]|\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|[\uDB80-\uDBBE][\uDC00-\uDFFF]|\uDBBF[\uDC00-\uDFFD]|[\uDBC0-\uDBFE][\uDC00-\uDFFF]|\uDBFF[\uDC00-\uDFFD])|([֐־׀׃׆׈-׿߀-ߪߴߵߺ-ࠕࠚࠤࠨ࠮-ࡘ࡜-࢟‏יִײַ-ﬨשׁ-ﭏ؈؋؍؛-ي٭-ٯٱ-ەۥۦۮۯۺ-ܐܒ-ܯ݋-ޥޱ-޿ࢠ-࣢ﭐ-ﴽ﵀-﷏ﷰ-﷼﷾﷿ﹰ-﻾]|\uD802[\uDC00-\uDD1E]|\uD802[\uDD20-\uDE00]|𐨄|\uD802[\uDE07-\uDE0B]|\uD802[\uDE10-\uDE37]|\uD802[\uDE3B-\uDE3E]|\uD802[\uDE40-\uDEE4]|\uD802[\uDEE7-\uDF38]|\uD802[\uDF40-\uDFFF]|\uD803[\uDC00-\uDE5F]|\uD803[\uDE7F-\uDFFF]|\uD83A[\uDC00-\uDCCF]|\uD83A[\uDCD7-\uDFFF]|\uD83B[\uDC00-\uDDFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDE00-\uDEEF]|\uD83B[\uDEF2-\uDEFF]))");
    class r {
      constructor(u) {
        this.locale = u, this.language = new (a[u] || a.default)(u);
      }
      emit(u, g) {
        let f, m, C;
        switch (typeof u) {
          case "string":
          case "number":
            f = u;
            break;
          case "object":
            if (m = u.slice(1).map((x) => this.emit(x, g)), C = u[0].toLowerCase(), typeof this[C] != "function")
              throw new Error('unknown operation "' + C + '"');
            f = this[C](m, g);
            break;
          case "undefined":
            f = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof u);
        }
        return f;
      }
      concat(u) {
        let g = "";
        return u.forEach((f) => {
          g += f;
        }), g;
      }
      replace(u, g) {
        const f = parseInt(u[0], 10);
        return f < g.length ? g[f] : "$" + (f + 1);
      }
      plural(u) {
        const g = parseFloat(this.language.convertNumber(u[0], 10)), f = u.slice(1);
        return f.length ? this.language.convertPlural(g, f) : "";
      }
      gender(u) {
        const g = u[0], f = u.slice(1);
        return this.language.gender(g, f);
      }
      grammar(u) {
        const g = u[0], f = u[1];
        return f && g && this.language.convertGrammar(f, g);
      }
      wikilink(u) {
        let g, f = u[0];
        f.charAt(0) === ":" && (f = f.slice(1));
        const m = `./${f}`;
        return g = u.length === 1 ? f : u[1], `<a href="${m}" title="${f}">${g}</a>`;
      }
      extlink(u) {
        if (u.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${u[0]}">${u[1]}</a>`;
      }
      bidi(u) {
        const g = function(f) {
          const m = f.match(i);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(u[0]);
        return g === "ltr" ? "‪" + u[0] + "‬" : g === "rtl" ? "‫" + u[0] + "‬" : u[0];
      }
      formatnum(u) {
        const g = !!u[1] && u[1] === "R", f = u[0];
        return typeof f == "string" || typeof f == "number" ? this.language.convertNumber(f, g) : f;
      }
      htmlattributes(u) {
        const g = {};
        for (let f = 0, m = u.length; f < m; f += 2)
          g[u[f]] = u[f + 1];
        return g;
      }
      htmlelement(u) {
        const g = u.shift(), f = u.shift();
        let m = u, C = "";
        for (const x in f)
          C += ` ${x}="${f[x]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${C}>${m.join("")}</${g}>`;
      }
    }
    class l {
      constructor(u, { wikilinks: g = !1 } = {}) {
        this.locale = u, this.wikilinks = g, this.emitter = new r(this.locale);
      }
      parse(u, g) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const f = function(m, { wikilinks: C = !1 } = {}) {
            let x = 0;
            function E(P) {
              return () => {
                for (let ee = 0; ee < P.length; ee++) {
                  const Ne = P[ee]();
                  if (Ne !== null)
                    return Ne;
                }
                return null;
              };
            }
            function L(P) {
              const ee = x, Ne = [];
              for (let Ge = 0; Ge < P.length; Ge++) {
                const rt = P[Ge]();
                if (rt === null)
                  return x = ee, null;
                Ne.push(rt);
              }
              return Ne;
            }
            function I(P, ee) {
              return () => {
                const Ne = x, Ge = [];
                let rt = ee();
                for (; rt !== null; )
                  Ge.push(rt), rt = ee();
                return Ge.length < P ? (x = Ne, null) : Ge;
              };
            }
            function V(P) {
              const ee = P.length;
              return () => {
                let Ne = null;
                return m.slice(x, x + ee) === P && (Ne = P, x += ee), Ne;
              };
            }
            function J(P) {
              return () => {
                const ee = m.slice(x).match(P);
                return ee === null ? null : (x += ee[0].length, ee[0]);
              };
            }
            const se = J(/^\s+/), M = V("|"), O = V(":"), fe = V("\\"), Te = J(/^./), De = V("$"), Z = J(/^\d+/), Le = V('"'), Ye = V("'"), Je = J(C ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Ue = J(C ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), me = E([re, J(C ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function re() {
              const P = L([fe, Te]);
              return P === null ? null : P[1];
            }
            const it = E([re, Ue]), Ct = E([re, Je]);
            function vt() {
              const P = L([De, Z]);
              return P === null ? null : ["REPLACE", parseInt(P[1], 10) - 1];
            }
            const dt = (gt = J(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Tt = function(P) {
              return P.toString();
            }, () => {
              const P = gt();
              return P === null ? null : Tt(P);
            });
            var gt, Tt;
            function Fn() {
              const P = L([M, I(0, ue)]);
              if (P === null)
                return null;
              const ee = P[1];
              return ee.length > 1 ? ["CONCAT"].concat(ee) : ee[0];
            }
            function Bt() {
              const P = L([dt, O, vt]);
              return P === null ? null : [P[0], P[2]];
            }
            function k() {
              const P = L([dt, O, ue]);
              return P === null ? null : [P[0], P[2]];
            }
            function X() {
              const P = L([dt, O]);
              return P === null ? null : [P[0], ""];
            }
            const K = E([function() {
              const P = L([E([Bt, k, X]), I(0, Fn)]);
              return P === null ? null : P[0].concat(P[1]);
            }, function() {
              const P = L([dt, I(0, Fn)]);
              return P === null ? null : [P[0]].concat(P[1]);
            }]), ne = V("{{"), we = V("}}"), $e = V("[["), he = V("]]"), h = V("["), S = V("]");
            function A() {
              const P = L([ne, K, we]);
              return P === null ? null : P[1];
            }
            const T = E([function() {
              const P = L([I(1, ue), M, I(1, oe)]);
              return P === null ? null : [["CONCAT"].concat(P[0]), ["CONCAT"].concat(P[2])];
            }, function() {
              const P = L([I(1, ue)]);
              return P === null ? null : [["CONCAT"].concat(P[0])];
            }]);
            function F() {
              let P = null;
              const ee = L([$e, T, he]);
              if (ee !== null) {
                const Ne = ee[1];
                P = ["WIKILINK"].concat(Ne);
              }
              return P;
            }
            function R() {
              let P = null;
              const ee = L([h, I(1, ce), se, I(1, oe), S]);
              return ee !== null && (P = ["EXTLINK", ee[1].length === 1 ? ee[1][0] : ["CONCAT"].concat(ee[1]), ["CONCAT"].concat(ee[3])]), P;
            }
            const G = J(/^[A-Za-z]+/);
            function U() {
              const P = J(/^[^"]*/), ee = L([Le, P, Le]);
              return ee === null ? null : ee[1];
            }
            function j() {
              const P = J(/^[^']*/), ee = L([Ye, P, Ye]);
              return ee === null ? null : ee[1];
            }
            function B() {
              const P = J(/^\s*=\s*/), ee = L([se, G, P, E([U, j])]);
              return ee === null ? null : [ee[1], ee[3]];
            }
            function Y() {
              const P = I(0, B)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], P);
            }
            const ce = E([A, vt, F, R, function() {
              const P = I(1, me)();
              return P === null ? null : P.join("");
            }]), oe = E([A, vt, F, R, function() {
              let P = null;
              const ee = x, Ne = V("<"), Ge = J(/^\/?/), rt = J(/^\s*>/), no = L([Ne, G, Y, Ge, rt]);
              if (no === null)
                return null;
              const sn = x, So = no[1], Ze = I(0, oe)(), xt = x, wo = L([V("</"), G, rt]);
              if (wo === null)
                return ["CONCAT", m.slice(ee, sn)].concat(Ze);
              const Od = x, Id = wo[1], dr = no[2];
              if (function(Mn, gs, ga, fa = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Mn = Mn.toLowerCase()) !== (gs = gs.toLowerCase()) || fa.allowedHtmlElements.indexOf(Mn) === -1)
                  return !1;
                const Bd = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let fs = 0, $d = ga.length; fs < $d; fs += 2) {
                  const pa = ga[fs];
                  if (fa.allowedHtmlCommonAttributes.indexOf(pa) === -1 && (fa.allowedHtmlAttributesByElement[Mn] || []).indexOf(pa) === -1 || pa === "style" && ga[fs + 1].search(Bd) !== -1)
                    return !1;
                }
                return !0;
              }(So, Id, dr.slice(1)))
                P = ["HTMLELEMENT", So, dr].concat(Ze);
              else {
                const Mn = (gs) => gs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                P = ["CONCAT", Mn(m.slice(ee, sn))].concat(Ze, Mn(m.slice(xt, Od)));
              }
              return P;
            }, function() {
              const P = I(1, Ct)();
              return P === null ? null : P.join("");
            }]), ue = E([A, vt, function() {
              const P = I(1, it)();
              return P === null ? null : P.join("");
            }]), Ce = function() {
              const P = I(0, oe)();
              return P === null ? null : ["CONCAT"].concat(P);
            }();
            if (Ce === null || x !== m.length)
              throw new Error("Parse error at position " + x.toString() + " in input: " + m);
            return Ce;
          }(u, { wikilinks: this.wikilinks });
          return this.emitter.emit(f, g);
        }
        return this.simpleParse(u, g);
      }
      simpleParse(u, g) {
        return u.replace(/\$(\d+)/g, (f, m) => {
          const C = parseInt(m, 10) - 1;
          return g[C] !== void 0 ? g[C] : "$" + m;
        });
      }
    }
    class d {
      constructor(u) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(u, g) {
        if (typeof u != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const f in u)
            if (f.indexOf("@") !== 0) {
              if (typeof u[f] == "object")
                return this.load(u);
              if (typeof u[f] != "string")
                throw new Error(`Invalid message for message ${f} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), u)) : this.sourceMap.set(g, u);
        } else
          for (g in u)
            this.load(u[g], g);
      }
      getMessage(u, g) {
        const f = this.sourceMap.get(g);
        return f ? f[u] : null;
      }
      hasLocale(u) {
        return this.sourceMap.has(u);
      }
    }
    return class {
      constructor(c, { finalFallback: u = "en", messages: g, wikilinks: f = !1 } = {}) {
        this.locale = c, this.parser = new l(this.locale, { wikilinks: f }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = u, this.wikilinks = f;
      }
      load(c, u) {
        return this.messageStore.load(c, u || this.locale);
      }
      i18n(c, ...u) {
        return this.parser.parse(this.getMessage(c), u);
      }
      setLocale(c) {
        this.locale = c, this.parser = new l(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(c) {
        let u = this.locale, g = 0;
        const f = this.getFallbackLocales(this.locale);
        for (; u; ) {
          const m = u.split("-");
          let C = m.length;
          do {
            const x = m.slice(0, C).join("-"), E = this.messageStore.getMessage(c, x);
            if (typeof E == "string")
              return E;
            C--;
          } while (C);
          u = f[g], g++;
        }
        return c;
      }
      registerParserPlugin(c, u) {
        r.prototype[c] = u;
      }
    };
  });
})(fd);
var Qv = fd.exports;
const Dl = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, pd = Symbol("banana-context");
function wt() {
  const e = Ke(pd);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function ey(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = ho(new Qv(e.locale, e));
  return {
    install: (n) => {
      n.provide(pd, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Dl(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Dl(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const ty = {
  name: "CxTranslationWork",
  components: { MwRow: Se, MwCol: xe, MwThumbnail: ji, MwIcon: qe },
  props: {
    translation: {
      type: os,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = te(), n = (a, i) => {
      const r = t.getters["mediawiki/getPage"](a, i);
      return r == null ? void 0 : r.thumbnail;
    }, o = wt();
    return {
      timeagoMessage: b(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = Jv(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      getImage: n,
      mwIconArrowForward: Ln,
      mwIconArrowNext: Ri
    };
  }
}, ny = { class: "col shrink pe-4" }, oy = { class: "col" }, sy = { class: "cx-translation__details column justify-between ma-0" }, ay = { class: "row ma-0" }, iy = { class: "col grow" }, ry = { class: "col shrink ps-2" }, ly = ["dir", "textContent"], cy = ["dir", "textContent"], uy = ["textContent"];
function dy(e, t, n, o, s, a) {
  const i = v("mw-thumbnail"), r = v("mw-icon"), l = v("mw-col"), d = v("mw-row");
  return n.translation ? (_(), D("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = tt((c) => e.$emit("click"), ["stop"]))
  }, [
    w("div", ny, [
      p(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    w("div", oy, [
      w("div", sy, [
        w("div", ay, [
          w("div", iy, [
            je(e.$slots, "title")
          ]),
          w("div", ry, [
            p(r, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = tt((c) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        je(e.$slots, "mid-content"),
        p(d, { class: "cx-translation__footer ma-0" }, {
          default: y(() => [
            p(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: y(() => [
                w("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: ae(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, ly),
                p(r, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                w("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: ae(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, cy)
              ], void 0, !0),
              _: 1
            }),
            p(l, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: y(() => [
                w("span", {
                  textContent: ae(o.timeagoMessage)
                }, null, 8, uy)
              ], void 0, !0),
              _: 1
            })
          ], void 0),
          _: 1
        })
      ])
    ])
  ])) : ie("", !0);
}
const md = /* @__PURE__ */ q(ty, [["render", dy]]);
const gy = ["lang", "textContent"], fy = ["lang", "textContent"], py = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Ki,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Ke("colors").gray200, s = b(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, i) => (_(), N(md, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": pe(ou),
      onActionIconClicked: i[0] || (i[0] = (r) => a.$emit("delete-translation"))
    }, {
      title: y(() => [
        w("h5", {
          class: _e(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: ae(e.translation.sourceTitle)
        }, null, 10, gy),
        e.translation.isLeadSectionTranslation ? ie("", !0) : (_(), D("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: ae(e.translation.sourceSectionTitle)
        }, null, 8, fy))
      ]),
      "mid-content": y(() => [
        e.translation.progress ? (_(), N(pe(Se), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: y(() => [
            p(pe(xe), null, {
              default: y(() => [
                p(pe(fu), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: pe(o)
                }, null, 8, ["value", "background"])
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        })) : ie("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, rs = () => {
  const e = Ke("breakpoints");
  return { isDesktop: b(
    () => !Ie.isMobileDomain() && e.value.tabletAndUp
  ) };
};
function de(e) {
  const t = b(() => e.state.application.sourceLanguage), n = b(() => e.state.application.targetLanguage), o = b(
    () => e.state.application.currentMTProvider
  ), s = b(
    () => e.state.application.currentSectionSuggestion
  ), a = b(
    () => e.state.application.currentSourceSection
  ), i = b(
    () => Me.getAutonym(t.value)
  ), r = b(
    () => Me.getAutonym(n.value)
  ), l = b(
    () => {
      var m;
      return (m = a.value) == null ? void 0 : m.isTitleSelected;
    }
  ), d = b(
    () => {
      var m;
      return (m = a.value) == null ? void 0 : m.selectedContentTranslationUnit;
    }
  ), c = b(
    () => e.getters["application/getCurrentProposedTranslation"]
  ), u = b(
    () => e.getters["application/getCurrentPage"]
  ), g = b(
    () => e.getters["application/getCurrentTargetPage"]
  ), f = b(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    currentSectionSuggestion: s,
    currentSourcePage: u,
    currentSourceSection: a,
    currentTargetPage: g,
    isSectionTitleSelected: l,
    previousRoute: f,
    proposedTranslation: c,
    selectedContentTranslationUnit: d,
    sourceLanguage: t,
    sourceLanguageAutonym: i,
    targetLanguage: n,
    targetLanguageAutonym: r
  };
}
const nr = () => {
  const e = te(), t = mt();
  return (n, o) => W(void 0, null, function* () {
    const { sourceLanguage: s, targetLanguage: a } = de(e), i = yield e.dispatch(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage: s.value,
        targetLanguage: a.value,
        sourceTitle: n
      }
    );
    i && (e.dispatch("application/initializeSectionTranslation", i), t.push({
      name: "sx-translation-confirmer",
      query: { eventSource: o }
    }));
  });
};
function ls() {
  const e = te(), t = b(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: b(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const my = (e, t) => {
  const n = new URLSearchParams(location.search), o = n.get("from"), s = n.get("to"), a = Ie.getCurrentWikiLanguageCode(), i = (g) => !e || Array.isArray(e) && e.includes(g), r = (g) => t.includes(g), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let d;
  return s && i(s) && r(s) ? d = s : i(a) && r(a) ? d = a : d = (e == null ? void 0 : e[0]) || l.targetLanguage, { sourceLanguage: [
    o,
    l.sourceLanguage,
    a,
    l.targetLanguage
  ].filter((g) => r(g)).find((g) => g !== d), targetLanguage: d };
}, gi = (e) => {
  if (!history.pushState)
    return;
  const t = e instanceof os, n = new URLSearchParams(location.search);
  n.set("page", e == null ? void 0 : e.sourceTitle), n.set("from", e == null ? void 0 : e.sourceLanguage), n.set("to", e == null ? void 0 : e.targetLanguage), n.set("sx", !0), t && n.set("draft", !0), n.delete("title"), to(Object.fromEntries(n));
}, hy = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), to(Object.fromEntries(n));
}, to = (e) => {
  history.replaceState(
    {},
    document.title,
    x_("Special:ContentTranslation", e)
  );
}, hd = () => new URLSearchParams(location.search).get("force-quick-tutorial"), _y = () => {
  const e = te();
  return () => W(void 0, null, function* () {
    const { sourceLanguage: t, targetLanguage: n } = de(e);
    let o = yield qt.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    const s = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getPublishedTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    o = o.filter(
      (l) => !s.includes(l) && !i.includes(l)
    );
    const r = new r0({
      sourceLanguage: t,
      targetLanguage: n,
      seeds: o
    });
    return e.commit("suggestions/addSuggestionSeedCollection", r), r;
  });
}, or = () => {
  const e = te(), t = _y();
  return () => W(void 0, null, function* () {
    return yield t(), e.dispatch("suggestions/initializeSuggestions");
  });
}, cs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = Ie.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = lt({ sx: !0 }, s), o && (s.section = o), location.href = Ie.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, us = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), to(Object.fromEntries(o));
}, _d = () => {
  const e = te(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = ls();
  return () => W(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = my(
      t.value,
      n.value
    ), a = new URLSearchParams(location.search), i = a.get("page"), r = a.get("section");
    cs(
      o,
      s,
      i,
      r
    ) || us(e, o, s);
  });
}, vd = () => {
  const e = te(), t = or();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = de(e);
    n === o && (n = a.value, o = s.value), cs(
      n,
      o,
      null,
      null
    ) || (us(e, n, o), t());
  };
}, vy = () => {
  const e = te(), t = or();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      cs(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (us(e, o, s), t());
    }
  );
}, yy = () => {
  const e = te();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    cs(
      n,
      o,
      s,
      null
    ) || us(e, n, o);
  };
}, by = () => {
  const e = te();
  return (t, n) => W(void 0, null, function* () {
    const { sourceLanguage: o, targetLanguage: s } = de(e);
    t === n && (t = s.value, n = o.value);
    const a = e.getters["application/getCurrentLanguageTitleGroup"], i = a.getTitleForLanguage(t);
    if (!cs(
      t,
      n,
      i,
      null
    )) {
      us(e, t, n);
      let l = new Ft({
        sourceLanguage: o.value,
        targetLanguage: s.value,
        sourceTitle: i,
        missing: {}
      });
      a.hasLanguage(s.value) && (l = yield e.dispatch(
        "suggestions/loadSectionSuggestion",
        l
      )), e.dispatch("application/initializeSectionTranslation", l);
    }
  });
}, yd = "cx-translation-session-position-", bd = () => yd + mw.user.sessionId(), Sd = () => {
  const e = bd();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, Sy = function() {
  const e = Sd();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(yd)).forEach((n) => mw.storage.remove(n));
  const t = bd();
  mw.storage.set(t, e + 1);
};
let fi = null;
function wy(e) {
  if (fi)
    return Promise.resolve(fi);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  });
  return fetch(`${t}?${n}`).then((o) => o.json()).then((o) => o.query.globaluserinfo.editcount).catch((o) => {
    mw.log.error("Error while fetching global edit count for user. ", o);
  });
}
function Cy(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function xy(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), r = Sd(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.2.0",
    translation_type: "section",
    wiki_db: n,
    access_method: t,
    user_name: i,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: r
  };
  let d;
  return a ? d = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : d = wy(i).then((c) => {
    fi = c, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: Cy(c)
      })
    );
  }), d.then(() => {
    Sy();
  });
}
const wd = Symbol("event-logging-context"), Wt = function() {
  const e = Ke(wd);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, Ey = () => ({
  install: (e) => {
    e.provide(wd, xy);
  }
}), Ay = (e, t, n, o) => W(void 0, null, function* () {
  var r, l, d;
  const s = ((r = t.user) == null ? void 0 : r.content) || ((l = t.mt) == null ? void 0 : l.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, i = yield ju(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), ky = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const r = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(r, n.mt.innerHTML), o.mtProviderUsed = r;
    }
  });
}, Ty = (e, t, n, o) => W(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return Ay(e, t, n, o);
  ky(e, t);
}), Dy = (e, t, n) => {
  const o = [];
  for (const s of e.sections || [])
    if (n.filter(
      (i) => i.pageSectionId === parseInt(s.id)
    ).length)
      for (const i of s.subSections) {
        const r = n.find(
          (d) => d.subSectionId === i.id
        );
        if (!r)
          continue;
        const l = Ty(
          i,
          r,
          (t == null ? void 0 : t.title) || e.title,
          t.language
        );
        o.push(l);
      }
  return Promise.all(o);
}, Ly = { restoreCorporaDraft: Dy }, sr = () => (e, t, n, o = {}) => {
  Ie.setCXToken(e, t, n), location.href = Ie.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
};
function Py(e) {
  return e.$el = $(e), e;
}
function Ny(e, t, n, o) {
  e.clearSurfaces();
  const s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(
      // When content is empty, add a dummy span node so that VE doesn't add a new paragraph
      t || "<span class='sx-edit-dummy-node' />"
    ),
    { lang: n, dir: o }
  ), a = e.createSurface(s);
  return e.surfaces.push(a), e.setSurface(a), a.initialize(), a;
}
function Fy() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function My(e, t) {
  return W(this, null, function* () {
    yield ar(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Py(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
function Oy(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const Iy = {
  name: "VisualEditor",
  props: {
    content: {
      type: String,
      required: !0
    },
    language: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    dir: {
      type: String,
      default: "auto"
    }
  },
  emits: ["ready", "close", "edit-completed"],
  setup(e, t) {
    const n = Q(null);
    let o = null;
    const s = b(() => o.getHtml()), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, l = {
      placeholder: !1,
      log: console.log,
      sectionId: 0,
      onBack: () => {
        a(), t.emit("close");
      },
      onNext: () => {
        t.emit("edit-completed", s.value), a();
      },
      language: e.language,
      title: e.title,
      siteMapper: new mw.cx.SiteMapper()
    };
    return pt(() => W(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Oy;
      const c = yield My(l, n.value);
      t.emit("ready"), n.value.appendChild(c.$element[0]), o = Ny(
        c,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Fy, o.focus();
    })), { sxeditor: n };
  }
}, By = ["lang", "dir"], $y = /* @__PURE__ */ w("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ w("div", { class: "toolbar" })
], -1), Uy = ["lang", "dir"];
function Ry(e, t, n, o, s, a) {
  return _(), D("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    $y,
    w("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, Uy)
  ], 8, By);
}
const Vy = /* @__PURE__ */ q(Iy, [["render", Ry]]);
function ar() {
  return mw.loader.using("mw.cx3.ve");
}
const Cd = () => {
  const e = te();
  return (t, n) => W(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield ar(), new Promise((s) => {
      setTimeout(() => {
        const a = Vu.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, ds = () => {
  const e = Wt(), t = te(), n = mt(), {
    currentSourcePage: o,
    currentTargetPage: s,
    sourceLanguage: a,
    targetLanguage: i
  } = de(t), r = vy(), l = Cd(), { isDesktop: d } = rs(), c = sr();
  return (u) => W(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: g,
      targetLanguage: f,
      sourceTitle: m,
      pageRevision: C,
      isLeadSectionTranslation: x
    } = u;
    if (d.value) {
      const I = {};
      x || (I.sourcesection = u.sourceSectionTitle), c(
        a.value,
        i.value,
        m,
        I
      );
      return;
    }
    Ie.unsetCXToken(
      g,
      f,
      m
    ), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (a.value !== g || i.value !== f) && r(u), t.dispatch("application/restoreSectionTranslation", u), e({
      event_type: "dashboard_translation_continue",
      translation_id: u.sectionTranslationId,
      translation_source_language: a.value,
      translation_source_title: m,
      translation_source_section: u.sourceSectionTitle,
      translation_target_language: i.value,
      translation_target_title: u.targetTitle,
      translation_target_section: u.targetSectionTitle
    }), yield t.dispatch("mediawiki/fetchPageContent", {
      sourceLanguage: a.value,
      targetLanguage: i.value,
      sourceTitle: m,
      revision: C
    }), yield l(a.value, m), u.restored || (yield Ht.fetchTranslationUnits(u.translationId).then(
      (I) => Ly.restoreCorporaDraft(
        o.value,
        s.value,
        I
      )
    ).then(() => u.restored = !0));
    let E, L;
    u.isLeadSectionTranslation ? (E = o.value.leadSection, E.originalTitle = u.sourceTitle, L = u.targetTitle) : (E = o.value.getSectionByTitle(
      u.sourceSectionTitle
    ), L = u.targetSectionTitle), t.commit("application/setCurrentSourceSection", E), t.commit(
      "application/setCurrentSourceSectionTitleTranslation",
      L
    ), t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, ir = () => {
  const e = nr(), t = ds(), n = te(), { sourceLanguage: o, targetLanguage: s } = de(n), a = (u, g) => {
    const f = n.getters["translator/getDraftTranslation"](
      u,
      Wi.LEAD_SECTION_DUMMY_TITLE,
      o.value,
      s.value
    );
    return f ? t(f) : e(u, g);
  };
  return {
    startRecentlyEditedSectionTranslation: (u) => a(u.title, "suggestion_recent_edit"),
    startNearbySectionTranslation: (u) => a(u.title, "suggestion_nearby"),
    startSearchResultSectionTranslation: (u) => a(u.title, "search_result"),
    startPageSuggestion: (u) => a(u.sourceTitle, "suggestion_no_seed"),
    startPublishedTranslation: (u) => a(u.sourceTitle, "continue_published")
  };
}, zy = () => {
  const e = te();
  return (t, n, o) => W(void 0, null, function* () {
    const s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o), a = e.getters["suggestions/getSectionSuggestionsForPublishedArticle"](t, n, o);
    let i = s || a;
    return i || (i = yield qt.fetchSectionSuggestions(
      t,
      o,
      n
    ), i || (i = new Ft({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o
    })), e.commit("suggestions/addSectionSuggestionForPublished", i)), i;
  });
};
const jy = ["lang", "href", "textContent"], Hy = { key: 1 }, qy = { key: 2 }, Gy = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Iu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = te(), o = Q(!0), s = Q(null), a = b(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.missingSections;
    }), i = b(
      () => a.value && Object.keys(a.value)[0]
    );
    zy()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => s.value = m).catch((m) => console.log(m)).finally(() => o.value = !1);
    const l = mt();
    rs();
    const d = () => {
      n.dispatch("application/initializeSectionTranslation", s.value), l.push({ name: "sx-section-selector", query: { force: !0 } });
    }, c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: u } = ir();
    de(n);
    const g = yy(), f = () => {
      g(t.translation), u(t.translation);
    };
    return (m, C) => (_(), N(md, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: y(() => [
        w("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: C[0] || (C[0] = tt(() => {
          }, ["stop"])),
          textContent: ae(e.translation.sourceTitle)
        }, null, 8, jy)
      ]),
      "mid-content": y(() => [
        p(pe(Se), { class: "ma-0 py-2" }, {
          default: y(() => [
            p(pe(xe), null, {
              default: y(() => [
                o.value ? (_(), N(pe(on), { key: 0 })) : a.value ? (_(), D("div", Hy, [
                  p(be, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: pe(zs),
                    type: "text",
                    label: i.value,
                    progressive: "",
                    onClick: tt(d, ["stop"])
                  }, null, 8, ["icon", "label"]),
                  p(be, {
                    class: "cx-published-translation__missing-sections-button pa-0 ms-4",
                    icon: pe(ns),
                    type: "icon",
                    progressive: "",
                    onClick: tt(d, ["stop"])
                  }, null, 8, ["icon"])
                ])) : (_(), D("div", qy, [
                  p(be, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: pe(zs),
                    type: "text",
                    label: m.$i18n("sx-published-translation-new-translation-button-label"),
                    progressive: "",
                    onClick: tt(f, ["stop"])
                  }, null, 8, ["icon", "label"])
                ]))
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["translation"]));
  }
}, Wy = () => {
  const e = te(), { commit: t } = te(), { sourceLanguage: n, targetLanguage: o } = de(e), s = Wt();
  return (a) => W(void 0, null, function* () {
    a.sectionTranslationId ? (yield Ht.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield Ht.deleteCXTranslation(
      a
    )) && t("translator/removeCXTranslation", a.translationId), s({
      event_type: "dashboard_translation_discard",
      translation_id: a.sectionTranslationId,
      translation_source_language: n.value,
      translation_source_title: a.sourceTitle,
      translation_source_section: a.sourceSectionTitle,
      translation_target_language: o.value,
      translation_target_title: a.targetTitle,
      translation_target_section: a.targetSectionTitle
    });
  });
};
const Ky = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: be,
    MwDialog: Ot
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: os,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Wy();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Xy = { class: "pa-4" }, Yy = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Jy(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-dialog"), l = Ee("i18n");
  return _(), N(r, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: y(() => [
      w("div", Yy, [
        p(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        p(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: y(() => [
      w("div", Xy, [
        H(w("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const Zy = /* @__PURE__ */ q(Ky, [["render", Jy]]), Qy = { class: "pa-4" }, eb = { class: "flex pt-2" }, tb = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ki,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = ds(), i = () => {
      a(n.translation), s();
    };
    return (r, l) => {
      const d = Ee("i18n");
      return _(), N(pe(Ot), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": r.$mwui.colors.gray700,
        "min-height": "unset",
        title: r.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: y(() => [
          w("div", eb, [
            p(pe(be), {
              class: "grow py-3",
              large: "",
              label: r.$i18n("sx-confirm-draft-translation-start-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: y(() => [
          w("div", Qy, [
            H(w("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            H(w("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            w("p", null, [
              H(w("strong", null, null, 512), [
                [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            H(w("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ], void 0),
        _: 1
      }, 8, ["value", "overlay-color", "title"]);
    };
  }
};
function nb(e, t, n) {
  return W(this, null, function* () {
    if (!t || t.trim().length === 0)
      return e;
    const o = e.filter(
      (a) => t.toLowerCase() === a.toLowerCase()
    );
    if (o.length)
      return o;
    const s = e.filter(
      (a) => (
        // Search using autonym
        Me.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        Me.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield ob(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function Ll(e, t, n) {
  return W(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(Me.sortByAutonym) : (yield nb(e, t, n)).sort(Me.sortByAutonym);
  });
}
function ob(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function sb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function ab(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function ib(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
function rb(e, t) {
  const n = b(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = Me.getAutonym(t.value[s]);
      if (a.startsWith(e.value))
        return a;
    }
    return "";
  });
  return {
    autocompletion: n,
    onTabSelect: () => {
      e.value = n.value;
    }
  };
}
function lb(e, t, n) {
  const o = Q(""), s = Q(-1), a = Q(null), i = () => {
    s.value++, s.value >= r.value.length && (s.value = 0);
  }, r = b(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return He(e, () => {
    s.value = -1;
  }), He(s, () => W(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = r.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const cb = {
  name: "MwLanguageSelector",
  components: {
    MwInput: zi
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: !0
    },
    languages: {
      type: Array,
      default: () => [],
      validator: (e) => e.every((t) => typeof t == "string")
    },
    allOptionEnabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Suggested languages
     **/
    suggestions: {
      type: Array,
      default: () => [],
      validator: (e) => e.every((t) => typeof t == "string")
    },
    /**
     * Search API URL for language search.
     */
    searchAPI: {
      type: String,
      default: sb
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = Q(null), o = Q(""), s = Q([]), a = b(
      () => ab(s.value)
    ), i = b(
      () => ib(s.value)
    ), r = (E) => t.emit("select", E), l = () => t.emit("close"), { autocompletion: d, onTabSelect: c } = rb(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: f, selectedLanguage: m } = lb(o, s, e.suggestions), C = () => {
      if (o.value && e.languages.includes(o.value)) {
        r(o.value);
        return;
      }
      if (m.value) {
        r(m.value);
        return;
      }
      if (s.value.length === 1) {
        r(s.value[0]);
        return;
      }
    };
    return He(o, Ji(() => W(this, null, function* () {
      s.value = yield Ll(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), pt(() => W(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Ll(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: d,
      close: l,
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      langSelectorContainer: f,
      mwIconClose: Mt,
      mwIconSearch: iu,
      next: u,
      onEnter: C,
      onTabSelect: c,
      prev: g,
      resultsDisplayClass: i,
      searchInputElement: n,
      searchQuery: o,
      searchResultsByScript: a,
      select: r,
      selectedLanguage: m
    };
  }
}, ub = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, db = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, gb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, fb = { class: "results px-3 pt-4" }, pb = { class: "results-header ps-8 pb-2" }, mb = { class: "results-languages--suggestions pa-0 ma-0" }, hb = ["lang", "dir", "aria-selected", "onClick", "textContent"], _b = { class: "results px-3 pt-4" }, vb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, yb = ["lang", "dir", "aria-selected", "onClick", "textContent"], bb = ["aria-selected"], Sb = { class: "no-results px-3 py-4" }, wb = { class: "ps-8" };
function Cb(e, t, n, o, s, a) {
  const i = v("mw-input"), r = Ee("i18n");
  return _(), D("div", ub, [
    je(e.$slots, "search", {}, () => [
      w("div", db, [
        p(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (l) => o.autocompletion = l),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        p(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (l) => o.searchQuery = l),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            ro(tt(o.onEnter, ["prevent"]), ["enter"]),
            ro(tt(o.next, ["stop", "prevent"]), ["down"]),
            ro(tt(o.prev, ["stop", "prevent"]), ["up"]),
            ro(tt(o.close, ["prevent"]), ["esc"]),
            ro(tt(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    w("section", gb, [
      n.suggestions.length && !o.searchQuery ? je(e.$slots, "suggestions", { key: 0 }, () => [
        w("section", fb, [
          H(w("p", pb, null, 512), [
            [r, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          w("ul", mb, [
            (_(!0), D(Ae, null, et(n.suggestions, (l) => (_(), D("li", {
              key: l,
              class: _e(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: ae(o.getAutonym(l))
            }, null, 10, hb))), 128))
          ])
        ])
      ]) : ie("", !0),
      o.searchResultsByScript.length ? je(e.$slots, "search", { key: 1 }, () => [
        w("section", _b, [
          n.suggestions.length && !o.searchQuery ? H((_(), D("p", vb, null, 512)), [
            [r, void 0, "cx-sx-language-selector-all-languages"]
          ]) : ie("", !0),
          (_(!0), D(Ae, null, et(o.searchResultsByScript, (l, d) => (_(), D("ul", {
            key: d,
            class: _e(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (_(!0), D(Ae, null, et(l, (c) => (_(), D("li", {
              key: c,
              class: _e(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
              lang: c,
              dir: o.getDir(c),
              role: "option",
              "aria-selected": c === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(c),
              textContent: ae(o.getAutonym(c))
            }, null, 10, yb))), 128)),
            n.allOptionEnabled && !o.searchQuery ? H((_(), D("li", {
              key: 0,
              class: _e(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (c) => o.select("all"))
            }, null, 10, bb)), [
              [r, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : ie("", !0)
          ], 2))), 128))
        ])
      ]) : je(e.$slots, "noresults", { key: 2 }, () => [
        w("section", Sb, [
          H(w("h3", wb, null, 512), [
            [r, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const xd = /* @__PURE__ */ q(cb, [["render", Cb]]);
const xb = {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector: xd,
    MwDialog: Ot,
    MwIcon: qe,
    MwButton: be
  },
  props: {
    /** @type string[] array of language codes */
    sourceLanguages: {
      type: Array,
      required: !0,
      validator: (e) => e.every((t) => typeof t == "string")
    },
    /** @type string[] array of language codes */
    targetLanguages: {
      type: Array,
      required: !0,
      validator: (e) => e.every((t) => typeof t == "string")
    },
    selectedSourceLanguage: {
      type: String,
      required: !0
    },
    selectedTargetLanguage: {
      type: String,
      required: !0
    },
    allOptionEnabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:selectedSourceLanguage", "update:selectedTargetLanguage"],
  setup(e, { emit: t }) {
    const n = Ke("breakpoints"), o = b(() => n.value.mobile), s = Q(!1), a = Q(!1), i = () => s.value = !0, r = () => a.value = !0, l = () => s.value = !1, d = () => a.value = !1, c = (m) => {
      s.value = !1, t("update:selectedSourceLanguage", m);
    }, u = (m) => {
      a.value = !1, t("update:selectedTargetLanguage", m);
    }, g = b(
      () => e.selectedSourceLanguage === "all"
    ), f = b(
      () => e.selectedTargetLanguage === "all"
    );
    return {
      fullscreen: o,
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      mwIconArrowNext: Ri,
      mwIconExpand: su,
      onSourceLanguageDialogClose: l,
      onSourceLanguageSelected: c,
      onTargetLanguageDialogClose: d,
      onTargetLanguageSelected: u,
      openSourceLanguageDialog: i,
      openTargetLanguageDialog: r,
      sourceLanguageSelectOn: s,
      targetLanguageSelectOn: a,
      allLanguagesSelectedAsSource: g,
      allLanguagesSelectedAsTarget: f
    };
  }
}, Eb = { class: "row sx-translation-list-language-selector ma-0 justify-center items-center" }, Ab = { class: "col-5 justify-end" }, kb = {
  key: 0,
  class: "mw-ui-autonym"
}, Tb = ["lang", "dir", "textContent"], Db = { class: "sx-translation-list-language-selector__arrow col-2 justify-center" }, Lb = { class: "col-5 justify-start" }, Pb = {
  key: 0,
  class: "mw-ui-autonym"
}, Nb = ["lang", "dir", "textContent"];
function Fb(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-language-selector"), l = v("mw-dialog"), d = v("mw-icon"), c = Ee("i18n");
  return _(), D("div", Eb, [
    w("div", Ab, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        onClick: tt(o.openSourceLanguageDialog, ["stop"])
      }, {
        default: y(() => [
          o.allLanguagesSelectedAsSource ? H((_(), D("span", kb, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (_(), D("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedSourceLanguage,
            dir: o.getDir(n.selectedSourceLanguage),
            textContent: ae(o.getAutonym(n.selectedSourceLanguage))
          }, null, 8, Tb))
        ], void 0),
        _: 1
      }, 8, ["indicator", "onClick"]),
      p(l, {
        value: o.sourceLanguageSelectOn,
        "onUpdate:value": t[0] || (t[0] = (u) => o.sourceLanguageSelectOn = u),
        animation: "slide-up",
        title: e.$i18n("sx-translation-list-language-selector-dialog-title"),
        fullscreen: o.fullscreen,
        header: o.fullscreen,
        "overlay-opacity": 0,
        onClose: o.onSourceLanguageDialogClose
      }, {
        default: y(() => [
          p(r, {
            class: "sx-translation-list-language-selector__widget col-12",
            placeholder: e.$i18n("cx-sx-language-selector-placeholder"),
            languages: n.sourceLanguages,
            "all-option-enabled": n.allOptionEnabled,
            onSelect: o.onSourceLanguageSelected,
            onClose: o.onSourceLanguageDialogClose
          }, null, 8, ["placeholder", "languages", "all-option-enabled", "onSelect", "onClose"])
        ], void 0),
        _: 1
      }, 8, ["value", "title", "fullscreen", "header", "onClose"])
    ]),
    w("div", Db, [
      p(d, { icon: o.mwIconArrowNext }, null, 8, ["icon"])
    ]),
    w("div", Lb, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        disabled: n.targetLanguages.length < 2,
        onClick: tt(o.openTargetLanguageDialog, ["stop"])
      }, {
        default: y(() => [
          o.allLanguagesSelectedAsTarget ? H((_(), D("span", Pb, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (_(), D("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedTargetLanguage,
            dir: o.getDir(n.selectedTargetLanguage),
            textContent: ae(o.getAutonym(n.selectedTargetLanguage))
          }, null, 8, Nb))
        ], void 0),
        _: 1
      }, 8, ["indicator", "disabled", "onClick"]),
      p(l, {
        value: o.targetLanguageSelectOn,
        "onUpdate:value": t[1] || (t[1] = (u) => o.targetLanguageSelectOn = u),
        animation: "slide-up",
        fullscreen: o.fullscreen,
        header: o.fullscreen,
        "overlay-opacity": 0,
        title: e.$i18n("sx-translation-list-language-selector-dialog-title"),
        onClose: o.onTargetLanguageDialogClose
      }, {
        default: y(() => [
          p(r, {
            class: "sx-translation-list-language-selector__widget col-12",
            placeholder: e.$i18n("cx-sx-language-selector-placeholder"),
            languages: n.targetLanguages,
            "all-option-enabled": n.allOptionEnabled,
            onSelect: o.onTargetLanguageSelected,
            onClose: o.onTargetLanguageDialogClose
          }, null, 8, ["placeholder", "languages", "all-option-enabled", "onSelect", "onClose"])
        ], void 0),
        _: 1
      }, 8, ["value", "fullscreen", "header", "title", "onClose"])
    ])
  ]);
}
const rr = /* @__PURE__ */ q(xb, [["render", Fb]]), Mb = ["textContent"], Ob = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, Ib = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Pl = {
  __name: "CXTranslationList",
  props: {
    activeStatus: {
      type: String,
      required: !0,
      validator: (e) => ["suggestions", "published", "draft"].indexOf(e) !== -1
    },
    translationStatus: {
      type: String,
      required: !0,
      validator: (e) => ["published", "draft"].indexOf(e) !== -1
    }
  },
  setup(e) {
    const t = e, n = Q("all"), o = Q("all"), s = te(), a = b(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = ls(), r = Q(!1), l = Q(!1), d = Q(null), c = Q(null), u = b(
      () => t.translationStatus === "draft"
    ), g = b(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), f = b(
      () => n.value === "all"
    ), m = b(
      () => o.value === "all"
    ), C = b(
      () => g.value.filter(
        (se) => (f.value || se.sourceLanguage === n.value) && (m.value || se.targetLanguage === o.value)
      ).sort((se, M) => se.lastUpdatedTimestamp < M.lastUpdatedTimestamp)
    ), x = b(() => {
      let se = g.value.map(
        (M) => M.targetLanguage
      );
      return i.value && (se = se.filter(
        (M) => i.value.includes(M)
      )), [...new Set(se)];
    }), E = b(() => {
      const se = g.value.map(
        (M) => M.sourceLanguage
      );
      return [...new Set(se)];
    }), L = (se) => {
      d.value = se, r.value = !0;
    }, I = b(() => t.activeStatus === t.translationStatus), V = ds(), J = (se) => {
      se.isArticleTranslation ? (c.value = se, l.value = !0) : V(se);
    };
    return (se, M) => I.value ? (_(), N(pe(Gt), {
      key: 0,
      class: _e(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: y(() => [
        w("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: ae(se.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, Mb)
      ]),
      default: y(() => [
        p(rr, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": M[0] || (M[0] = (O) => n.value = O),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": M[1] || (M[1] = (O) => o.value = O),
          "source-languages": E.value,
          "target-languages": x.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? ie("", !0) : (_(), N(pe(on), { key: 0 })),
        u.value ? (_(), D("div", Ob, [
          (_(!0), D(Ae, null, et(C.value, (O) => (_(), N(py, {
            key: `${e.translationStatus}-${O.key}`,
            translation: O,
            onClick: (fe) => J(O),
            onDeleteTranslation: (fe) => L(O)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (_(), D("div", Ib, [
          (_(!0), D(Ae, null, et(C.value, (O) => (_(), N(Gy, {
            key: `${e.translationStatus}-${O.key}`,
            translation: O,
            onDeleteTranslation: (fe) => L(O)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        p(Zy, {
          modelValue: r.value,
          "onUpdate:modelValue": M[2] || (M[2] = (O) => r.value = O),
          translation: d.value
        }, null, 8, ["modelValue", "translation"]),
        p(tb, {
          modelValue: l.value,
          "onUpdate:modelValue": M[3] || (M[3] = (O) => l.value = O),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ], void 0),
      _: 1
    }, 8, ["class"])) : ie("", !0);
  }
};
const Bb = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: ji, MwIcon: qe, MwRow: Se, MwCol: xe },
  props: {
    suggestion: {
      type: [Xi, Ft, zo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = te(), n = b(() => e.suggestion), o = b(
      () => n.value.sourceTitle || n.value.title
    ), s = b(
      () => t.getters["mediawiki/getPage"](
        n.value.sourceLanguage,
        o.value
      )
    ), a = b(
      () => {
        var m;
        return (m = n.value) == null ? void 0 : m.missingSectionsCount;
      }
    ), i = b(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.description;
    }), r = b(
      () => n.value instanceof Ft
    ), l = b(
      () => n.value instanceof zo
    ), { sourceLanguageAutonym: d, targetLanguageAutonym: c } = de(t), u = b(
      () => l.value ? lu : ru
    ), g = Ke("colors"), f = b(
      () => l.value ? g.blue600 : "currentColor"
    );
    return {
      bookmarkIcon: u,
      bookmarkIconColor: f,
      description: i,
      getDir: Me.getDir,
      isFavoriteSuggestion: l,
      isSectionSuggestion: r,
      missingSectionsCount: a,
      mwIconArrowNext: Ri,
      mwIconClose: Mt,
      page: s,
      sourceLanguageAutonym: d,
      targetLanguageAutonym: c,
      title: o
    };
  }
}, $b = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Ub = { class: "col shrink pe-4" }, Rb = { class: "col cx-suggestion__information-panel" }, Vb = ["lang", "dir", "textContent"], zb = ["lang", "dir", "textContent"], jb = ["textContent"], Hb = ["textContent"];
function qb(e, t, n, o, s, a) {
  const i = v("mw-thumbnail"), r = v("mw-col"), l = v("mw-row"), d = v("mw-icon"), c = Ee("i18n");
  return n.suggestion ? (_(), D("div", $b, [
    w("div", Ub, [
      p(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    w("div", Rb, [
      p(l, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: y(() => [
          p(r, {
            shrink: "",
            class: "cx-suggestion__information-panel__top pb-2"
          }, {
            default: y(() => [
              p(l, {
                class: "ma-0",
                align: "start",
                justify: "between"
              }, {
                default: y(() => [
                  p(r, {
                    grow: "",
                    class: "pe-2"
                  }, {
                    default: y(() => [
                      p(l, {
                        direction: "column",
                        class: "ma-0",
                        align: "start"
                      }, {
                        default: y(() => [
                          p(r, {
                            shrink: "",
                            class: "mb-2"
                          }, {
                            default: y(() => [
                              w("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: ae(o.title)
                              }, null, 8, Vb)
                            ], void 0, !0),
                            _: 1
                          }),
                          p(r, { shrink: "" }, {
                            default: y(() => [
                              w("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: ae(o.description)
                              }, null, 8, zb)
                            ], void 0, !0),
                            _: 1
                          })
                        ], void 0, !0),
                        _: 1
                      })
                    ], void 0, !0),
                    _: 1
                  }),
                  p(r, { shrink: "" }, {
                    default: y(() => [
                      o.isFavoriteSuggestion ? ie("", !0) : (_(), N(d, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "cx-suggestion__discard-button mb-4",
                        onClick: t[0] || (t[0] = tt((u) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      p(d, {
                        class: "cx-suggestion__favorite-button",
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = tt((u) => e.$emit("bookmark"), ["stop"]))
                      }, null, 8, ["icon", "icon-color"])
                    ], void 0, !0),
                    _: 1
                  })
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          }),
          o.isSectionSuggestion ? (_(), N(r, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: y(() => [
              H(w("small", null, null, 512), [
                [c, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ], void 0, !0),
            _: 1
          })) : o.isFavoriteSuggestion ? (_(), N(r, {
            key: 1,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
            shrink: ""
          }, {
            default: y(() => [
              p(l, {
                justify: "between",
                class: "ma-0"
              }, {
                default: y(() => [
                  p(r, { grow: "" }, {
                    default: y(() => [
                      w("small", {
                        textContent: ae(o.sourceLanguageAutonym)
                      }, null, 8, jb),
                      p(d, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      w("small", {
                        textContent: ae(o.targetLanguageAutonym)
                      }, null, 8, Hb)
                    ], void 0, !0),
                    _: 1
                  }),
                  o.missingSectionsCount ? (_(), N(r, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: y(() => [
                      H(w("small", null, null, 512), [
                        [c, [
                          o.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ], void 0, !0),
                    _: 1
                  })) : ie("", !0)
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })) : ie("", !0)
        ], void 0),
        _: 1
      })
    ])
  ])) : ie("", !0);
}
const Ed = /* @__PURE__ */ q(Bb, [["render", qb]]), Gb = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ls(), n = b(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Wb = () => {
  const e = te(), { sourceLanguage: t, targetLanguage: n } = de(e), o = Wt(), s = b(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = b(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = b(
    () => !s.value && !a.value
  ), r = Q(0), l = Q(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, c = 4, u = b(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      r.value
    )
  ), g = b(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), f = () => {
    m(), C();
  }, m = () => {
    const V = u.value.length === d, J = (r.value + 1) % c, se = V && e.getters["application/getSectionSuggestionsSliceByIndex"](J).length > 0;
    (!V || !se) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), V && L();
  }, C = () => {
    const V = g.value.length === d, J = (l.value + 1) % c, se = V && e.getters["application/getPageSuggestionsSliceByIndex"](J).length > 0;
    (!V || !se) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), V && I();
  }, x = (V) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestion", V), m();
  }, E = (V) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", V), C();
  }, L = () => r.value = (r.value + 1) % c, I = () => l.value = (l.value + 1) % c;
  return {
    currentPageSuggestionsSlice: g,
    currentSectionSuggestionsSlice: u,
    discardPageSuggestion: E,
    discardSectionSuggestion: x,
    onSuggestionRefresh: f,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
}, Ad = (e) => W(void 0, null, function* () {
  return Hu.dispatch("suggestions/removeFavoriteSuggestion", e);
});
const Kb = {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector: rr,
    CxTranslationSuggestion: Ed,
    MwCard: Gt,
    MwButton: be,
    MwSpinner: on
  },
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = te(), { sourceLanguage: t, targetLanguage: n } = de(e), { supportedLanguageCodes: o, availableTargetLanguages: s } = Gb(), a = vd(), i = (O) => a(O, n.value), r = (O) => a(t.value, O), l = nr(), d = (O) => l(O.sourceTitle, "suggestion_no_seed"), { startPageSuggestion: c } = ir(), {
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      onSuggestionRefresh: C,
      pageSuggestionsLoading: x,
      sectionSuggestionsLoading: E,
      showRefreshButton: L
    } = Wb(), I = Q(null), V = Wt();
    return {
      availableTargetLanguages: s,
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      mwIconRefresh: au,
      markFavoritePageSuggestion: (O) => W(this, null, function* () {
        return e.dispatch("suggestions/addPageSuggestionAsFavorite", O);
      }),
      markFavoriteSectionSuggestion: (O) => W(this, null, function* () {
        return e.dispatch("suggestions/addSectionSuggestionAsFavorite", O);
      }),
      unmarkFavoriteSectionSuggestion: Ad,
      pageSuggestionsLoading: x,
      pageSuggestionsList: I,
      refreshSuggestions: () => {
        V({
          event_type: "dashboard_refresh_suggestions",
          translation_source_language: t.value,
          translation_target_language: n.value
        }), C(), I.value.$el.scrollIntoView({ behavior: "smooth" });
      },
      sectionSuggestionsLoading: E,
      showRefreshButton: L,
      startPageSuggestion: c,
      startSectionTranslation: d,
      supportedLanguageCodes: o,
      updateSourceLanguage: i,
      updateTargetLanguage: r,
      sourceLanguage: t,
      targetLanguage: n
    };
  }
}, Xb = ["textContent"], Yb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Jb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Zb = { class: "cx-suggestion-list__refresh-button-container justify-center" };
function Qb(e, t, n, o, s, a) {
  const i = v("sx-translation-list-language-selector"), r = v("mw-card"), l = v("cx-translation-suggestion"), d = v("mw-spinner"), c = v("mw-button"), u = Ee("i18n");
  return H((_(), D("div", null, [
    p(r, { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
      header: y(() => [
        w("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: ae(e.$i18n("cx-suggestionlist-title"))
        }, null, 8, Xb)
      ]),
      default: y(() => [
        p(i, {
          "source-languages": o.supportedLanguageCodes,
          "target-languages": o.availableTargetLanguages,
          "selected-source-language": o.sourceLanguage,
          "selected-target-language": o.targetLanguage,
          "onUpdate:selectedSourceLanguage": o.updateSourceLanguage,
          "onUpdate:selectedTargetLanguage": o.updateTargetLanguage
        }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"])
      ], void 0),
      _: 1
    }),
    p(r, {
      ref: "pageSuggestionsList",
      class: "cx-translation-list--page-suggestions pa-0 mb-0"
    }, {
      default: y(() => [
        H(w("h5", Yb, null, 512), [
          [u, void 0, "cx-suggestion-list-new-pages-division"]
        ]),
        (_(!0), D(Ae, null, et(o.currentPageSuggestionsSlice, (g, f) => (_(), N(l, {
          key: `page-suggestion-${f}`,
          suggestion: g,
          onClose: (m) => o.discardPageSuggestion(g),
          onClick: (m) => o.startPageSuggestion(g),
          onBookmark: (m) => o.markFavoritePageSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.pageSuggestionsLoading ? (_(), N(d, { key: 0 })) : ie("", !0)
      ], void 0),
      _: 1
    }, 512),
    p(r, { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
      default: y(() => [
        H(w("h5", Jb, null, 512), [
          [u, void 0, "cx-suggestionlist-expand-sections-title"]
        ]),
        (_(!0), D(Ae, null, et(o.currentSectionSuggestionsSlice, (g, f) => (_(), N(l, {
          key: `section-suggestion-${f}`,
          class: "ma-0",
          suggestion: g,
          onClose: (m) => o.discardSectionSuggestion(g),
          onClick: (m) => o.startSectionTranslation(g),
          onBookmark: (m) => o.markFavoriteSectionSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.sectionSuggestionsLoading ? (_(), N(d, { key: 0 })) : ie("", !0)
      ], void 0),
      _: 1
    }),
    w("div", Zb, [
      o.showRefreshButton ? (_(), N(c, {
        key: 0,
        class: "ma-0 pa-4",
        type: "text",
        label: e.$i18n("cx-suggestionlist-refresh"),
        icon: o.mwIconRefresh,
        onClick: o.refreshSuggestions
      }, null, 8, ["label", "icon", "onClick"])) : ie("", !0)
    ])
  ], 512)), [
    [$i, n.active]
  ]);
}
const eS = /* @__PURE__ */ q(Kb, [["render", Qb]]), tS = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Ed,
    MwCard: Gt
  },
  setup() {
    const e = mt(), t = te();
    return {
      favorites: b(() => t.state.suggestions.favorites || []),
      startFavoriteTranslation: (s) => W(this, null, function* () {
        yield t.dispatch(
          "application/startFavoriteSectionTranslation",
          s
        ), e.push({ name: "sx-translation-confirmer" });
      }),
      unmarkFavoriteSectionSuggestion: Ad
    };
  }
}, nS = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function oS(e, t, n, o, s, a) {
  const i = v("cx-translation-suggestion"), r = v("mw-card"), l = Ee("i18n");
  return o.favorites.length ? (_(), N(r, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: y(() => [
      H(w("h3", nS, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: y(() => [
      (_(!0), D(Ae, null, et(o.favorites, (d, c) => (_(), N(i, {
        key: `favorite-${c}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.unmarkFavoriteSectionSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ], void 0),
    _: 1
  })) : ie("", !0);
}
const sS = /* @__PURE__ */ q(tS, [["render", oS]]);
const aS = {
  name: "CxHelpPanel",
  components: { MwIcon: qe },
  setup() {
    const e = wt();
    return { listItems: [
      {
        icon: jm,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Pm,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Hm,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, iS = { class: "cx-help-panel pa-4" }, rS = { class: "cx-help-panel__item-list mt-6 ps-2" }, lS = ["href"], cS = ["textContent"];
function uS(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = Ee("i18n");
  return _(), D("div", iS, [
    H(w("h5", null, null, 512), [
      [r, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    w("ul", rS, [
      (_(!0), D(Ae, null, et(o.listItems, (l, d) => (_(), D("li", {
        key: d,
        class: "mt-4"
      }, [
        w("a", {
          href: l.href,
          target: "_blank"
        }, [
          p(i, {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          w("span", {
            textContent: ae(l.label)
          }, null, 8, cS)
        ], 8, lS)
      ]))), 128))
    ])
  ]);
}
const dS = /* @__PURE__ */ q(aS, [["render", uS]]);
const gS = {
  name: "CxStatsPanel",
  components: { MwCol: xe, MwRow: Se },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = b(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = b(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = Q(null);
    return He(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), r = Object.keys(e.stats || {}).sort(), l = r.reduce(
          (I, V) => Math.max(I, a[V].delta),
          0
        ), d = r.map((I) => a[I].delta), c = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = c, s.value.height = u;
        const g = 4, f = 6, m = 50, C = (m - g) / l;
        let x = g;
        const E = Math.floor(
          (c - g) / (f + g)
        ), L = d.slice(
          Math.max(d.length - E, 0)
        );
        L.forEach((I, V) => {
          V === L.length - 1 && (i.fillStyle = "#36c");
          const J = m - I * C;
          i.fillRect(x, J, f, I * C), x += f + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, fS = { class: "cx-stats-panel pa-4" }, pS = ["textContent"], mS = { class: "cx-stats-panel__monthly-stats-label" }, hS = ["textContent"], _S = { class: "cx-stats-panel__total-stats-label" }, vS = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function yS(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-row"), l = Ee("i18n");
  return _(), D("div", fS, [
    H(w("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    p(r, null, {
      default: y(() => [
        p(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: y(() => [
            w("h3", {
              textContent: ae(o.thisMonthStats)
            }, null, 8, pS),
            H(w("h5", mS, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, { class: "cx-stats-panel__total-stats" }, {
          default: y(() => [
            w("h3", {
              textContent: ae(o.total)
            }, null, 8, hS),
            H(w("h5", _S, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    w("canvas", vS, null, 512)
  ]);
}
const bS = /* @__PURE__ */ q(gS, [["render", yS]]);
const SS = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: xe, MwRow: Se, MwCard: Gt, MwIcon: qe },
  data: () => ({
    mwIconLabFlask: uu,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, wS = { class: "complementary" }, CS = { class: "complementary mt-4" }, xS = ["href"], ES = { class: "complementary" }, AS = ["href"];
function kS(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-col"), l = v("mw-row"), d = v("mw-card"), c = Ee("i18n");
  return _(), N(d, { class: "experimental-support-banner mb-1" }, {
    default: y(() => [
      p(l, null, {
        default: y(() => [
          p(r, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: y(() => [
              p(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ], void 0, !0),
            _: 1
          }),
          p(r, null, {
            default: y(() => [
              H(w("h5", null, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              H(w("p", wS, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              w("p", CS, [
                H(w("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, xS), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              w("p", ES, [
                H(w("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, AS), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-share-feedback-anchor"]
                ])
              ])
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
const TS = /* @__PURE__ */ q(SS, [["render", kS]]), da = () => {
  const e = te(), t = (o) => W(void 0, null, function* () {
    let s = yield Ht.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (i) => e.commit("translator/addTranslation", i)
    );
    const a = {};
    for (const i of s) {
      const r = i.sourceLanguage;
      a[r] = a[r] || [], a[r].push(i);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [i, r] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: i,
        titles: r.map((l) => l.sourceTitle)
      }), r.forEach((l) => {
        const { targetLanguage: d, targetTitle: c } = l, u = !!e.getters["mediawiki/getPage"](
          d,
          c
        );
        c && !u && e.commit(
          "mediawiki/addPage",
          new bo({ title: c, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, kd = () => {
  const e = {
    ulsmissinglanguages: "content_language_selector",
    mflanguagesearcher: "content_language_selector",
    mfrecenttranslation: "recent_translation",
    mfrecentedit: "recent_edit",
    mffrequentlanguages: "frequent_languages",
    newbytranslationmobile: "invite_new_article_creation",
    specialcontribute: "contributions_page",
    publishingfollowup: "followup_after_publishing",
    ulsaddlanguages: "language_selector_options"
  }, n = new URLSearchParams(location.search).get("campaign");
  return e[n];
}, DS = () => {
  const e = te(), t = nr(), n = Wt(), o = ds(), { fetchAllTranslations: s } = da();
  return (l) => W(void 0, [l], function* ({ pageTitle: a, isDraftTranslation: i, sectionTitle: r }) {
    const d = kd() || "direct_preselect", { sourceLanguage: c, targetLanguage: u } = de(e);
    if (n({
      event_type: "dashboard_open",
      event_source: d,
      translation_source_language: c.value,
      translation_target_language: u.value
    }), i) {
      yield s();
      const g = e.getters["translator/getDraftTranslation"](
        a,
        r,
        c.value,
        u.value
      );
      if (!g)
        return;
      o(g);
    } else
      t(a, d);
  });
}, LS = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  if (!t || !n)
    return null;
  const o = e.get("section"), s = !!e.get("draft");
  return { pageTitle: n, isDraftTranslation: s, sectionTitle: o };
}, PS = () => {
  const e = Wt(), t = te(), n = DS(), { fetchAllTranslations: o } = da(), s = or();
  return () => W(void 0, null, function* () {
    yield _d()();
    const i = LS();
    if (i) {
      n(i);
      return;
    }
    const { sourceLanguage: r, targetLanguage: l, previousRoute: d } = de(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const g = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[d.value];
        return g || kd() || "direct";
      })(),
      translation_source_language: r.value,
      translation_target_language: l.value
    });
    try {
      yield t.dispatch("suggestions/fetchFavorites");
    } catch (u) {
      mw.log.error("[CX] Error while fetching favorite suggestions", u);
    }
    yield o(), s();
  });
}, NS = ["suggestions", "draft", "published"], FS = () => {
  const e = te(), n = new URLSearchParams(location.search).get("active-list"), o = Q(null);
  if (NS.includes(n))
    o.value = n;
  else {
    const s = b(
      () => e.state.translator.translationsLoaded.draft
    ), a = b(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", He(s, (i) => {
      i && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return Cc(() => {
    hy("active-list", o.value), window.scrollTo(0, 0);
  }), o;
}, MS = () => {
  const e = wt();
  return b(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Fm,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Zn,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: Nm,
        type: "text"
      }
    }
  ]);
};
const OS = {
  __name: "CXDashboard",
  setup(e) {
    const t = mt(), n = () => t.push({ name: "sx-article-search" });
    PS()();
    const s = te();
    s.dispatch("translator/fetchTranslatorStats");
    const a = b(() => s.state.translator.translatorStats), i = FS(), r = MS();
    return (l, d) => (_(), D("div", null, [
      l.$incompleteVersion ? (_(), N(TS, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : ie("", !0),
      p(pe(Se), { class: "ma-0" }, {
        default: y(() => [
          p(pe(be), {
            id: "dashboard-search-translation-button",
            progressive: "",
            icon: pe(zs),
            label: l.$i18n("cx-create-new-translation"),
            class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12 my-4",
            onClick: n
          }, null, 8, ["icon", "label"])
        ], void 0),
        _: 1
      }),
      p(pe(Se), {
        class: "ma-0",
        align: "start"
      }, {
        default: y(() => [
          l.$mwui.breakpoint.tabletAndUp ? (_(), N(pe(xe), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: y(() => [
              p(pe(Qo), {
                id: "dashboard-list-selector--desktop",
                items: pe(r),
                active: pe(i),
                onSelect: d[0] || (d[0] = (c) => i.value = c)
              }, null, 8, ["items", "active"])
            ], void 0, !0),
            _: 1
          })) : ie("", !0),
          p(pe(xe), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: y(() => [
              p(sS),
              p(eS, {
                active: pe(i) === "suggestions"
              }, null, 8, ["active"]),
              p(Pl, {
                "translation-status": "draft",
                "active-status": pe(i)
              }, null, 8, ["active-status"]),
              p(Pl, {
                "translation-status": "published",
                "active-status": pe(i)
              }, null, 8, ["active-status"])
            ], void 0, !0),
            _: 1
          }),
          p(pe(xe), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: y(() => [
              p(pe(Se), {
                class: "ma-0",
                align: "start"
              }, {
                default: y(() => [
                  p(pe(xe), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: y(() => [
                      p(bS, { stats: a.value }, null, 8, ["stats"])
                    ], void 0, !0),
                    _: 1
                  }),
                  p(pe(xe), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: y(() => [
                      p(dS)
                    ], void 0, !0),
                    _: 1
                  })
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      }),
      l.$mwui.breakpoint.mobile ? (_(), N(pe(pm), {
        key: 1,
        active: pe(i),
        "onUpdate:active": d[1] || (d[1] = (c) => st(i) ? i.value = c : null),
        items: pe(r)
      }, null, 8, ["active", "items"])) : ie("", !0)
    ]));
  }
}, IS = {
  name: "DashboardView",
  components: { CxDashboard: OS }
}, BS = { class: "cx-translation-dashboard" };
function $S(e, t, n, o, s, a) {
  const i = v("cx-dashboard");
  return _(), D("main", BS, [
    p(i, { class: "mb-4 pb-12" })
  ]);
}
const Nl = /* @__PURE__ */ q(IS, [["render", $S]]), US = (e) => {
  const t = b(
    () => {
      var d, c;
      return (c = (d = e.value.orderedMissingSections) == null ? void 0 : d[0]) == null ? void 0 : c.sourceTitle;
    }
  ), n = b(
    () => e.value.missingSectionsCount
  ), o = b(
    () => e.value.presentSectionsCount
  ), s = b(
    () => {
      var d;
      return !!((d = e.value) != null && d.targetTitle);
    }
  ), a = b(
    () => {
      var d, c;
      return Ie.getPageUrl(
        ((d = e.value) == null ? void 0 : d.targetLanguage) || "",
        ((c = e.value) == null ? void 0 : c.targetTitle) || ""
      );
    }
  ), i = (d) => {
    if (d)
      return "cx-sx-translation-confirmer-translate-prefilled-section-button-label";
    if (!s.value)
      return "cx-sx-start-translation-button-label";
    if (n.value > 1 || n.value === 1 && o.value > 0)
      return "cx-sx-select-section";
    if (n.value === 1 && o.value === 0)
      return "cx-sx-translation-confirmer-action-view-section";
    if (n.value === 0 && o.value > 0)
      return "cx-sx-select-section";
    if (n.value === 0 && o.value === 0)
      return "cx-sx-translation-confirmer-action-new-translation";
  }, r = b(() => {
    let d;
    return n.value > 1 ? d = [
      "cx-sx-existing-translation-additional-info",
      `"${t.value}"`,
      n.value - 1
    ] : n.value === 1 && o.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${t.value}"`
    ] : n.value === 1 && o.value === 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${t.value}"`
    ] : o.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : d = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], d;
  }), l = b(
    () => {
      var d;
      return !s.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: i,
    isProgressiveButton: l,
    targetArticlePath: a,
    targetPageExists: s
  };
}, lr = () => {
  const e = te(), { currentSectionSuggestion: t, currentSourcePage: n } = de(e), o = Cd(), s = (r, l) => W(void 0, null, function* () {
    r() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield e.dispatch("mediawiki/fetchPageContent", t.value), yield o(
      t.value.sourceLanguage,
      t.value.sourceTitle
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), l();
  });
  return {
    selectPageSectionByIndex: (r) => {
      const l = () => {
        var c;
        return (c = n.value.sections) == null ? void 0 : c[r];
      };
      return s(l, () => {
        const c = l();
        r === 0 && (c.originalTitle = n.value.title), e.commit("application/setCurrentSourceSection", c);
      });
    },
    selectPageSectionByTitle: (r) => {
      const l = () => n.value.getSectionByTitle(r);
      return s(l, () => e.commit("application/setCurrentSourceSection", l()));
    }
  };
}, RS = () => {
  const e = mt(), t = te(), { isDesktop: n } = rs(), o = new URLSearchParams(location.search), s = Q(o.get("section")), {
    currentSourceSection: a,
    currentSectionSuggestion: i,
    sourceLanguage: r,
    targetLanguage: l
  } = de(t), d = b(
    () => {
      var E;
      return !!((E = i.value) != null && E.targetTitle);
    }
  ), c = () => {
    s.value = null, o.delete("section"), to(Object.fromEntries(o));
  }, { selectPageSectionByIndex: u, selectPageSectionByTitle: g } = lr(), f = sr(), m = () => W(void 0, null, function* () {
    if (!i.value.hasSectionTitle(s.value)) {
      c();
      return;
    }
    n.value ? f(
      r.value,
      l.value,
      i.value.sourceTitle,
      { sourcesection: s.value }
    ) : (yield g(s.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), C = () => {
    s.value ? m() : d.value ? e.push({ name: "sx-section-selector" }) : x(), gi(i.value);
  }, x = () => W(void 0, null, function* () {
    var E;
    if (n.value) {
      const L = (E = i.value) == null ? void 0 : E.sourceTitle;
      f(r.value, l.value, L);
    } else
      u(0), hd() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }), gi(i.value);
  });
  return {
    clearPreFilledSection: c,
    startNewTranslation: x,
    onSectionSelectorClick: C,
    preFilledSectionTitle: s
  };
};
const VS = {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton: be,
    MwRow: Se,
    MwCol: xe,
    MwIcon: qe
  },
  setup() {
    const e = mt(), t = te(), n = Ke("colors"), { targetLanguageAutonym: o, currentSectionSuggestion: s } = de(t), {
      clearPreFilledSection: a,
      startNewTranslation: i,
      onSectionSelectorClick: r,
      preFilledSectionTitle: l
    } = RS(), {
      actionInformationMessageArgs: d,
      getActionButtonLabel: c,
      isProgressiveButton: u,
      targetArticlePath: g,
      targetPageExists: f
    } = US(s), m = wt(), C = b(
      () => m.i18n(c(!!l.value))
    ), { isDesktop: x } = rs(), E = b(
      () => m.i18n(...d.value)
    ), L = () => {
      e.push({ name: "sx-section-selector" }), gi(s.value);
    };
    return pt(() => {
      const I = l.value;
      I && !s.value.hasSectionTitle(I) && a();
    }), {
      actionButtonLabel: C,
      actionInformationMessage: E,
      isProgressiveButton: u,
      mwIconLinkExternal: ts,
      onMoreSectionsClick: L,
      startNewTranslation: i,
      onSectionSelectorClick: r,
      preFilledSectionTitle: l,
      targetArticlePath: g,
      targetLanguageAutonym: o,
      targetPageExists: f,
      colors: n,
      isDesktop: x
    };
  }
}, zS = { class: "sx-translation-confirmer-body pb-4" }, jS = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, HS = ["textContent"], qS = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, GS = ["href"], WS = ["textContent"];
function KS(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-icon"), l = v("mw-row"), d = v("mw-button"), c = Ee("i18n");
  return _(), D("section", zS, [
    o.preFilledSectionTitle ? (_(), D("section", jS, [
      H(w("h6", null, null, 512), [
        [c, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
      ]),
      w("h5", {
        class: "ma-0",
        textContent: ae(o.preFilledSectionTitle)
      }, null, 8, HS)
    ])) : o.targetPageExists ? (_(), D("section", qS, [
      p(l, {
        class: "sx-translation-confirmer__translation-status ma-0 pb-2",
        justify: "between"
      }, {
        default: y(() => [
          H(p(i, {
            tag: "h5",
            class: "ma-0 pe-2"
          }, null, 512), [
            [c, [o.targetLanguageAutonym], "cx-sx-existing-translation-status"]
          ]),
          p(i, { shrink: "" }, {
            default: y(() => [
              w("a", {
                href: o.targetArticlePath,
                target: "_blank"
              }, [
                p(r, {
                  icon: o.mwIconLinkExternal,
                  size: "16",
                  "icon-color": o.colors.gray500
                }, null, 8, ["icon", "icon-color"])
              ], 8, GS)
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      }),
      p(l, { class: "ma-0" }, {
        default: y(() => [
          p(i, null, {
            default: y(() => [
              w("span", {
                textContent: ae(o.actionInformationMessage)
              }, null, 8, WS)
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])) : ie("", !0),
    p(l, {
      class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
      justify: "center"
    }, {
      default: y(() => [
        o.preFilledSectionTitle ? (_(), N(i, {
          key: 0,
          shrink: "",
          class: "me-4"
        }, {
          default: y(() => [
            H(p(d, {
              large: "",
              progressive: "",
              type: "text",
              onClick: o.onMoreSectionsClick
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-more-sections-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : ie("", !0),
        o.targetPageExists && o.isDesktop ? (_(), N(i, {
          key: 1,
          shrink: "",
          class: "me-4"
        }, {
          default: y(() => [
            H(p(d, {
              large: "",
              onClick: o.startNewTranslation
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-new-desktop-translation-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : ie("", !0),
        p(i, { shrink: "" }, {
          default: y(() => [
            p(d, {
              large: "",
              progressive: o.isProgressiveButton,
              label: o.actionButtonLabel,
              onClick: o.onSectionSelectorClick
            }, null, 8, ["progressive", "label", "onClick"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })
  ]);
}
const XS = /* @__PURE__ */ q(VS, [["render", KS]]);
const YS = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: rr
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ls(), n = te(), { sourceLanguage: o, targetLanguage: s } = de(n), a = b(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = b(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), r = b(
      () => t.value || e.value
    ), l = by();
    return {
      availableSourceLanguages: i,
      targetLanguages: r,
      onSourceLanguageSelected: (u) => l(u, s.value),
      onTargetLanguageSelected: (u) => l(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
};
function JS(e, t, n, o, s, a) {
  const i = v("sx-translation-list-language-selector");
  return _(), N(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const Td = /* @__PURE__ */ q(YS, [["render", JS]]);
const ZS = {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow: Se,
    MwCol: xe,
    MwIcon: qe,
    MwButton: be
  },
  setup() {
    const e = te(), {
      currentSectionSuggestion: t,
      currentSourcePage: n
    } = de(e), o = b(() => e.state.suggestions.favorites || []), s = b(
      () => o.value.some(
        (f) => t.value.sourceTitle === f.title && t.value.sourceLanguage === f.sourceLanguage && t.value.targetLanguage === f.targetLanguage
      )
    ), a = () => W(this, null, function* () {
      return e.dispatch(
        "suggestions/removeFavoriteSuggestion",
        new zo({
          title: t.value.sourceTitle,
          sourceLanguage: t.value.sourceLanguage,
          targetLanguage: t.value.targetLanguage
        })
      );
    }), i = () => W(this, null, function* () {
      return e.dispatch(
        "suggestions/doMarkSuggestionAsFavorite",
        t.value
      );
    }), r = b(
      () => s.value ? lu : ru
    ), l = b(
      () => s.value ? a : i
    ), d = b(() => {
      var f;
      return (f = t.value) == null ? void 0 : f.sourceTitle;
    }), c = b(
      () => {
        var f;
        return Ie.getPageUrl(
          ((f = t.value) == null ? void 0 : f.sourceLanguage) || "",
          d.value || ""
        );
      }
    ), u = b(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.langLinksCount;
    }), g = b(
      () => {
        var f;
        return Object.values(((f = n.value) == null ? void 0 : f.pageviews) || {}).reduce(
          (m, C) => m + C,
          0
        );
      }
    );
    return {
      bookmarkIcon: r,
      isFavorite: s,
      langLinksCount: u,
      mwIconLanguage: cu,
      mwIconLinkExternal: ts,
      sourceArticle: n,
      sourceArticlePath: c,
      sourceTitle: d,
      toggleFavorite: l,
      weeklyViews: g
    };
  }
}, QS = ["textContent"], ew = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, tw = ["textContent"];
function nw(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-col"), l = v("mw-button"), d = v("mw-row"), c = Ee("i18n");
  return _(), N(d, {
    class: "sx-translation-confirmer__article-information ma-0 pa-4",
    align: "stretch",
    justify: "start"
  }, {
    default: y(() => [
      p(r, null, {
        default: y(() => [
          p(d, {
            justify: "between",
            class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
          }, {
            default: y(() => [
              p(r, {
                class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                tag: "a",
                href: o.sourceArticlePath,
                target: "_blank"
              }, {
                default: y(() => [
                  w("h5", {
                    class: "ma-0 me-1",
                    textContent: ae(o.sourceTitle)
                  }, null, 8, QS),
                  p(i, {
                    icon: o.mwIconLinkExternal,
                    size: "10",
                    "icon-color": e.$mwui.colors.gray500
                  }, null, 8, ["icon", "icon-color"])
                ], void 0, !0),
                _: 1
              }, 8, ["href"]),
              p(r, {
                shrink: "",
                align: "start"
              }, {
                default: y(() => [
                  p(l, {
                    class: "pa-0",
                    type: "icon",
                    icon: o.bookmarkIcon,
                    progressive: o.isFavorite,
                    onClick: o.toggleFavorite
                  }, null, 8, ["icon", "progressive", "onClick"])
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          }),
          w("p", ew, [
            p(i, {
              icon: o.mwIconLanguage,
              size: "16",
              class: "me-1"
            }, null, 8, ["icon"]),
            w("span", {
              class: "pe-3",
              textContent: ae(o.langLinksCount)
            }, null, 8, tw),
            H(w("span", null, null, 512), [
              [c, [o.weeklyViews], "cx-sx-translation-confirmer-views-count"]
            ])
          ])
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
const ow = /* @__PURE__ */ q(ZS, [["render", nw]]);
const sw = {
  name: "SxTranslationConfirmer",
  components: {
    MwIcon: qe,
    SxTranslationConfirmerArticleInformation: ow,
    MwRow: Se,
    MwCol: xe,
    MwButton: be,
    SxArticleLanguageSelector: Td,
    SxTranslationConfirmerActionPanel: XS
  },
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = te(), { sourceLanguage: n, targetLanguage: o, currentSourcePage: s, previousRoute: a } = de(t), i = b(
      () => {
        var c, u;
        return (u = (c = s.value) == null ? void 0 : c.image) == null ? void 0 : u.source;
      }
    ), r = Wt();
    pt(() => {
      t.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), r({
        event_type: "dashboard_translation_start",
        event_source: e.eventSource,
        translation_source_language: n.value,
        translation_target_language: o.value
      }), ar(), t.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        o.value
      );
    });
    const l = mt();
    return {
      articleImageSource: i,
      mwIconArticle: Vi,
      mwIconClose: Mt,
      onClose: () => {
        t.dispatch("application/clearCurrentSectionSuggestion"), to(null), l.push({ name: a.value });
      }
    };
  }
}, aw = { class: "sx-translation-confirmer" }, iw = { class: "mb-0" }, rw = { class: "sx-translation-confirmer__article-image flex justify-center" }, lw = ["src"], cw = { class: "ma-3" };
function uw(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-button"), l = v("mw-row"), d = v("mw-icon"), c = v("sx-translation-confirmer-article-information"), u = v("sx-article-language-selector"), g = v("sx-translation-confirmer-action-panel"), f = Ee("i18n"), m = Ee("i18n-html");
  return _(), D("section", aw, [
    p(l, {
      class: "sx-translation-confirmer__header ma-0 py-3",
      align: "stretch",
      justify: "start"
    }, {
      default: y(() => [
        p(i, {
          grow: "",
          class: "px-4",
          align: "center"
        }, {
          default: y(() => [
            H(w("h5", iw, null, 512), [
              [f, void 0, "cx-sx-translation-confirmer-title"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, {
          shrink: "",
          align: "start",
          class: "pe-4"
        }, {
          default: y(() => [
            p(r, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconClose,
              "icon-size": 20,
              onClick: o.onClose
            }, null, 8, ["icon", "onClick"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    w("div", rw, [
      o.articleImageSource ? (_(), D("img", {
        key: 0,
        src: o.articleImageSource
      }, null, 8, lw)) : (_(), N(d, {
        key: 1,
        size: "120",
        icon: o.mwIconArticle,
        "icon-color": e.$mwui.colors.blue600
      }, null, 8, ["icon", "icon-color"]))
    ]),
    p(c),
    p(u),
    p(g),
    p(l, {
      justify: "center",
      class: "sx-translation-confirmer__license ma-0"
    }, {
      default: y(() => [
        w("p", cw, [
          H(w("small", null, null, 512), [
            [m, void 0, "cx-license-agreement"]
          ])
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const dw = /* @__PURE__ */ q(sw, [["render", uw]]);
const gw = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: dw
  },
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function fw(e, t, n, o, s, a) {
  const i = v("sx-translation-confirmer");
  return _(), D("main", {
    class: _e(["sx-translation-confirmer-view", a.classes])
  }, [
    p(i, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const pw = /* @__PURE__ */ q(gw, [["render", fw]]), hw = {
  name: "SxSectionSelectorViewArticleItem",
  components: {
    MwRow: Se,
    MwButton: be
  },
  props: {
    path: {
      type: String,
      required: !0
    },
    autonym: {
      type: String,
      required: !0
    }
  },
  data: () => ({
    mwIconLinkExternal: ts
  })
};
function _w(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-row");
  return _(), N(r, {
    tag: "li",
    class: "ma-0"
  }, {
    default: y(() => [
      p(i, {
        href: n.path,
        target: "_blank",
        class: "col justify-between py-3 px-4",
        indicator: e.mwIconLinkExternal,
        label: e.$i18n("cx-sx-section-selector-view-article-button-label", n.autonym),
        type: "text"
      }, null, 8, ["href", "indicator", "label"])
    ], void 0),
    _: 1
  });
}
const vw = /* @__PURE__ */ q(hw, [["render", _w]]);
const yw = {
  name: "SxSectionSelectorHeader",
  components: {
    MwRow: Se,
    MwCol: xe,
    MwButton: be
  },
  props: {
    suggestion: {
      type: Ft,
      required: !0
    }
  },
  emits: ["close"],
  data: () => ({
    mwIconClose: Mt
  })
}, bw = { class: "sx-section-selector__header pa-4" }, Sw = { class: "sx-section-selector__header-text ma-0" }, ww = ["textContent"], Cw = { class: "pt-0 ma-0" }, xw = { class: "ma-0" };
function Ew(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-button"), l = v("mw-row"), d = Ee("i18n");
  return _(), D("div", bw, [
    p(l, { class: "ma-0 pb-3" }, {
      default: y(() => [
        p(i, null, {
          default: y(() => [
            H(w("h6", Sw, null, 512), [
              [d, void 0, "cx-sx-section-selector-title"]
            ]),
            w("h2", {
              class: "sx-section-selector__title ma-0 py-0",
              textContent: ae(n.suggestion.sourceTitle)
            }, null, 8, ww)
          ], void 0, !0),
          _: 1
        }),
        p(i, {
          shrink: "",
          class: "justify-end"
        }, {
          default: y(() => [
            p(r, {
              class: "pa-0",
              large: !0,
              type: "icon",
              icon: e.mwIconClose,
              onClick: t[0] || (t[0] = (c) => e.$emit("close"))
            }, null, 8, ["icon"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    H(w("h4", Cw, null, 512), [
      [d, void 0, "cx-sx-section-selector-subtitle"]
    ]),
    H(w("p", xw, null, 512), [
      [d, void 0, "cx-sx-section-selector-desc"]
    ])
  ]);
}
const Aw = /* @__PURE__ */ q(yw, [["render", Ew]]), kw = {
  name: "SxSectionSelectorSectionList",
  components: {
    MwRow: Se,
    MwButton: be,
    MwIcon: qe
  },
  props: {
    /**
     * @type {{targetTitle: string, sourceTitle: string}[]}
     */
    sections: {
      type: Array,
      required: !0
    }
  },
  emits: ["select-section"],
  data: () => ({ mwIconArrowForward: Ln })
}, Tw = { class: "sx-section-selector__sections-list ma-0 pa-0" };
function Dw(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-button"), l = v("mw-row");
  return _(), D("ul", Tw, [
    (_(!0), D(Ae, null, et(n.sections, (d) => (_(), N(l, {
      key: d.sourceTitle,
      tag: "li",
      class: "ma-0"
    }, {
      default: y(() => [
        p(r, {
          class: "col justify-between py-3 px-4",
          label: d.sourceTitle,
          type: "text",
          onClick: (c) => e.$emit("select-section", d.sourceTitle)
        }, {
          default: y(() => [
            je(e.$slots, "default", {
              targetSection: d.targetTitle,
              sourceSection: d.sourceTitle
            }),
            p(i, {
              icon: e.mwIconArrowForward,
              class: "mw-ui-button__indicator"
            }, null, 8, ["icon"])
          ], void 0, !0),
          _: 2
        }, 1032, ["label", "onClick"])
      ], void 0),
      _: 2
    }, 1024))), 128))
  ]);
}
const Dd = /* @__PURE__ */ q(kw, [["render", Dw]]), Lw = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const Pw = {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList: Dd,
    MwRow: Se,
    MwCol: xe,
    MwButton: be
  },
  props: {
    suggestion: {
      type: Ft,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = b(
      () => Me.getAutonym(e.suggestion.targetLanguage)
    ), n = b(
      () => Object.keys(e.suggestion.missingSections).length === 0
    );
    return {
      sadRobotSVG: Lw,
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      targetLanguageAutonym: t,
      emptySections: n
    };
  }
}, Nw = { class: "sx-section-selector__missing-sections py-2" }, Fw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Mw = ["lang", "dir", "textContent"];
function Ow(e, t, n, o, s, a) {
  const i = v("sx-section-selector-section-list"), r = v("mw-col"), l = v("mw-button"), d = v("mw-row"), c = Ee("i18n");
  return _(), D("section", Nw, [
    H(w("h4", Fw, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-missing-sections-title"]
    ]),
    o.emptySections ? ie("", !0) : (_(), N(i, {
      key: 0,
      sections: n.suggestion.orderedMissingSections,
      onSelectSection: t[0] || (t[0] = (u) => e.$emit("select-section", u))
    }, {
      default: y(({ sourceSection: u }) => [
        w("h5", {
          class: "ma-0",
          lang: n.suggestion.sourceLanguage,
          dir: o.getDir(n.suggestion.sourceLanguage),
          textContent: ae(u)
        }, null, 8, Mw)
      ]),
      _: 1
    }, 8, ["sections"])),
    o.emptySections ? (_(), N(d, {
      key: 1,
      class: "sx-section-selector__empty-missing-sections px-4 my-0"
    }, {
      default: y(() => [
        p(r, {
          class: "py-6 justify-center",
          innerHTML: o.sadRobotSVG
        }, null, 8, ["innerHTML"]),
        p(r, {
          cols: "12",
          class: "sx-section-selector__empty-missing-sections-details pa-0"
        }, {
          default: y(() => [
            H(w("h6", null, null, 512), [
              [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(r, {
          cols: "12",
          class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
        }, {
          default: y(() => [
            H(w("p", null, null, 512), [
              [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(r, {
          cols: "12",
          class: "pa-0 mb-2"
        }, {
          default: y(() => [
            H(p(l, {
              class: "sx-section-selector__empty-missing-sections__close-button px-0",
              type: "text",
              onClick: t[1] || (t[1] = (u) => e.$emit("close"))
            }, null, 512), [
              [c, void 0, "cx-sx-section-selector-pick-other-translation-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : ie("", !0)
  ]);
}
const Iw = /* @__PURE__ */ q(Pw, [["render", Ow]]);
const Bw = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Dd
  },
  props: {
    suggestion: {
      type: Ft,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = b(
      () => Me.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: Ln, getAutonym: Me.getAutonym, getDir: Me.getDir, targetLanguageAutonym: t };
  }
}, $w = { class: "sx-section-selector__present-sections py-2" }, Uw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Rw = { class: "sx-section-selector__present-section-button-content" }, Vw = ["lang", "dir", "textContent"], zw = ["lang", "dir", "textContent"];
function jw(e, t, n, o, s, a) {
  const i = v("sx-section-selector-section-list"), r = Ee("i18n");
  return _(), D("section", $w, [
    H(w("h4", Uw, null, 512), [
      [r, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    p(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: y(({ sourceSection: l, targetSection: d }) => [
        w("div", Rw, [
          w("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: ae(l)
          }, null, 8, Vw),
          w("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: ae(d)
          }, null, 8, zw)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const Hw = /* @__PURE__ */ q(Bw, [["render", jw]]);
const qw = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: Hw,
    SxSectionSelectorSectionListMissing: Iw,
    SxSectionSelectorHeader: Aw,
    SxSectionSelectorViewArticleItem: vw,
    MwRow: Se,
    MwCol: xe,
    MwIcon: qe,
    SxArticleLanguageSelector: Td
  },
  setup() {
    const e = te(), {
      currentSectionSuggestion: t,
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = de(e), i = b(
      () => Ie.getPageUrl(n.value, t.value.sourceTitle)
    ), r = b(
      () => Ie.getPageUrl(o.value, t.value.targetTitle)
    ), l = b(() => [
      { path: i.value, autonym: s.value },
      { path: r.value, autonym: a.value }
    ]), d = mt(), c = () => {
      to(null), d.push({ name: "dashboard" });
    }, u = ds(), { selectPageSectionByTitle: g } = lr(), { isDesktop: f } = rs(), m = sr();
    return {
      goToDashboard: c,
      mwIconRobot: du,
      mwIconLabFlask: uu,
      selectSection: (x) => {
        if (f.value) {
          m(
            n.value,
            o.value,
            t.value.sourceTitle,
            { sourcesection: x }
          );
          return;
        }
        const E = e.getters["translator/getDraftTranslation"](
          t.value.sourceTitle,
          x,
          n.value,
          o.value
        );
        E ? u(E) : (g(x), d.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: l
    };
  }
}, Gw = { class: "sx-section-selector" }, Ww = { class: "sx-section-selector__body" }, Kw = { class: "py-2" }, Xw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Yw = { class: "ma-0 pa-0" }, Jw = { class: "sx-section-selector__additional-consideration-title" }, Zw = { href: "#" }, Qw = { class: "sx-section-selector__additional-consideration-title" }, eC = { href: "#" };
function tC(e, t, n, o, s, a) {
  const i = v("sx-section-selector-header"), r = v("sx-article-language-selector"), l = v("sx-section-selector-section-list-missing"), d = v("sx-section-selector-section-list-present"), c = v("sx-section-selector-view-article-item"), u = v("mw-icon"), g = v("mw-col"), f = v("mw-row"), m = Ee("i18n");
  return _(), D("section", Gw, [
    p(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    w("section", Ww, [
      p(r),
      p(l, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["suggestion", "onSelectSection", "onClose"]),
      p(d, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection
      }, null, 8, ["suggestion", "onSelectSection"]),
      w("section", Kw, [
        H(w("h4", Xw, null, 512), [
          [m, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        w("ul", Yw, [
          (_(!0), D(Ae, null, et(o.viewArticleItems, (C, x) => (_(), N(c, {
            key: `view-article-item-${x}`,
            path: C.path,
            autonym: C.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      p(f, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: y(() => [
          p(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: y(() => [
              w("h6", Jw, [
                p(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Uo(" " + ae(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              H(w("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              H(w("a", Zw, null, 512), [
                [m, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ], void 0, !0),
            _: 1
          }),
          p(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: y(() => [
              w("h6", Qw, [
                p(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Uo(" " + ae(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              H(w("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              H(w("a", eC, null, 512), [
                [m, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])
  ]);
}
const nC = /* @__PURE__ */ q(qw, [["render", tC]]);
const oC = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: nC
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function sC(e, t, n, o, s, a) {
  const i = v("sx-section-selector");
  return _(), D("main", {
    class: _e(["sx-section-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const aC = /* @__PURE__ */ q(oC, [["render", sC]]), iC = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = de(
    te()
  ), o = wt();
  return b(() => {
    const s = {
      value: "source_section",
      props: {
        label: o.i18n(
          "cx-sx-content-comparator-source-selector-title",
          t.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let a;
    switch (!0) {
      case e.isMappedSection:
        a = {
          value: "target_section",
          props: {
            label: o.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              n.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        a = {
          value: "target_article",
          props: {
            label: o.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              n.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [s, a];
  });
};
const rC = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: Qo },
  props: {
    selection: {
      type: String,
      required: !0
    },
    isMappedSection: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = (s) => t("update:selection", s), o = iC(e);
    return He(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, lC = { class: "sx-content-comparator__source-target-selector" };
function cC(e, t, n, o, s, a) {
  const i = v("mw-button-group");
  return _(), D("div", lC, [
    p(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const uC = /* @__PURE__ */ q(rC, [["render", cC]]), cr = (e) => {
  const t = Q([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o,
    currentTargetPage: s
  } = de(e), a = b(
    () => e.getters["application/getCurrentSourceSectionTitle"]
  ), i = b(
    () => n.value.missingSections[a.value] || n.value.presentSections[a.value] || ""
  ), r = b(
    () => {
      var g;
      return (((g = l.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), l = b(
    () => {
      var g;
      return (g = s.value) == null ? void 0 : g.getSectionByTitle(i.value);
    }
  ), d = b(() => {
    var g;
    return (g = o.value) == null ? void 0 : g.html;
  }), c = b(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), u = b(
    () => !e.getters["application/isCurrentSourceSectionMissing"] && !t.value.includes(i.value)
  );
  return {
    activeSectionTargetTitle: i,
    discardedSections: t,
    isCurrentSectionMapped: u,
    sourceSectionContent: d,
    sourceSectionTitle: a,
    targetSectionAnchor: r,
    targetSectionContent: c
  };
};
const dC = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: uC,
    MwRow: Se,
    MwCol: xe,
    MwButton: be
  },
  props: {
    sourceVsTargetSelection: {
      type: String,
      required: !0
    },
    isMappedSection: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:sourceVsTargetSelection", "translation-button-clicked"],
  setup(e, t) {
    const n = te(), o = Q(!1), { currentSectionSuggestion: s } = de(n), a = b(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = b(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), r = (f) => t.emit("update:sourceVsTargetSelection", f), { activeSectionTargetTitle: l, targetSectionAnchor: d } = cr(n), c = b(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: a.value,
            path: `${Ie.getPageUrl(
              s.value.sourceLanguage,
              s.value.sourceTitle
            )}#${i.value}`,
            lang: s.value.sourceLanguage,
            dir: Me.getDir(s.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: s.value.targetTitle,
            path: u.value,
            lang: s.value.targetLanguage,
            dir: Me.getDir(s.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${u.value}#${d.value}`
          };
      }
    }), u = b(
      () => Ie.getPageUrl(
        s.value.targetLanguage,
        s.value.targetTitle
      )
    ), g = Q(null);
    return pt(() => {
      new IntersectionObserver(
        ([m]) => {
          o.value = m.intersectionRect.height < m.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(g.value.$el);
    }), {
      activeContent: c,
      contentHeader: g,
      isSticky: o,
      mwIconLinkExternal: ts,
      mwIconEdit: Zn,
      updateSelection: r
    };
  }
}, gC = ["lang", "dir", "textContent"];
function fC(e, t, n, o, s, a) {
  const i = v("sx-content-comparator-source-vs-target-selector"), r = v("mw-col"), l = v("mw-button"), d = v("mw-row");
  return _(), N(d, {
    ref: "contentHeader",
    class: _e(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: y(() => [
      p(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      p(d, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: y(() => [
          p(r, null, {
            default: y(() => [
              w("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: ae(o.activeContent.title)
              }, null, 8, gC)
            ], void 0, !0),
            _: 1
          }),
          p(r, { shrink: "" }, {
            default: y(() => [
              o.isSticky ? (_(), N(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (c) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (_(), N(l, {
                key: 1,
                class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                icon: o.mwIconLinkExternal,
                type: "icon",
                href: o.activeContent.path,
                target: "_blank"
              }, null, 8, ["icon", "href"]))
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  }, 8, ["class", "reverse"]);
}
const pC = /* @__PURE__ */ q(dC, [["render", fC]]), mC = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: xe,
    MwButton: be
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = te(), n = b(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = b(
      () => e.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByIndex: s } = lr();
    return {
      goToNextSection: () => {
        const r = (o.value + 1) % e.sectionSourceTitles.length;
        s(r);
      },
      goToPreviousSection: () => {
        const r = (o.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length;
        s(r);
      },
      mwIconPrevious: ia,
      mwIconArrowForward: Ln
    };
  }
};
function hC(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-col");
  return _(), N(r, {
    class: "justify-end",
    align: "center"
  }, {
    default: y(() => [
      p(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      p(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ], void 0),
    _: 1
  });
}
const _C = /* @__PURE__ */ q(mC, [["render", hC]]);
const vC = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: Se,
    MwCol: xe,
    MwButton: be
  },
  props: {
    suggestion: {
      type: Ft,
      required: !0
    },
    targetSectionTitle: {
      type: String,
      required: !0
    },
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  data: () => ({
    mwIconTrash: ou,
    mwIconUndo: Om
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        Me.getAutonym(this.suggestion.targetLanguage)
      );
    }
  },
  methods: {
    discardMapping() {
      this.isDiscardedSection || this.$emit("update:discardedSections", [
        ...this.discardedSections,
        this.targetSectionTitle
      ]);
    },
    undoDiscard() {
      this.isDiscardedSection && this.$emit(
        "update:discardedSections",
        this.discardedSections.filter(
          (e) => e !== this.targetSectionTitle
        )
      );
    }
  }
}, yC = { class: "sx-content-comparator-header__mapped-section" }, bC = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, SC = { key: 0 }, wC = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, CC = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function xC(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-button"), l = v("mw-row"), d = Ee("i18n");
  return _(), D("div", yC, [
    p(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: y(() => [
        p(i, { grow: "" }, {
          default: y(() => [
            w("h6", bC, [
              Uo(ae(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? H((_(), D("span", SC, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : ie("", !0)
            ]),
            w("h6", {
              class: _e(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, ae(n.targetSectionTitle), 3)
          ], void 0, !0),
          _: 1
        }),
        p(i, { shrink: "" }, {
          default: y(() => [
            a.isDiscardedSection ? (_(), N(r, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (_(), N(r, {
              key: 0,
              class: "pa-0",
              icon: e.mwIconTrash,
              type: "icon",
              onClick: a.discardMapping
            }, null, 8, ["icon", "onClick"]))
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    a.isDiscardedSection ? H((_(), D("p", CC, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : H((_(), D("p", wC, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const EC = /* @__PURE__ */ q(vC, [["render", xC]]);
const AC = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: EC,
    SxContentComparatorHeaderNavigation: _C,
    MwButton: be,
    MwCol: xe,
    MwRow: Se,
    MwIcon: qe
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const e = te(), {
      currentSectionSuggestion: t,
      currentSourceSection: n
    } = de(e), o = b(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = b(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = cr(e), r = b(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = b(() => [
      ...Object.keys(t.value.missingSections),
      ...Object.keys(t.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: Ui,
      mwIconEdit: Zn,
      mwIconEye: oi,
      sectionSourceTitles: l,
      sourceSectionContent: r,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: Me.getDir
    };
  }
}, kC = { class: "sx-content-comparator__header pa-4" }, TC = ["lang", "dir"], DC = ["lang", "dir"], LC = /* @__PURE__ */ w("br", null, null, -1);
function PC(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-col"), l = v("sx-content-comparator-header-navigation"), d = v("mw-row"), c = v("mw-icon"), u = v("sx-content-comparator-header-mapped-section"), g = Ee("i18n");
  return _(), D("div", kC, [
    p(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (f) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    p(d, { class: "my-1 py-2 mx-0" }, {
      default: y(() => [
        p(r, { grow: "" }, {
          default: y(() => [
            w("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, ae(o.suggestion.sourceTitle), 9, TC),
            w("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, ae(o.sourceSectionTitle), 9, DC)
          ], void 0, !0),
          _: 1
        }),
        p(l, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        p(r, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: y(() => [
            p(i, {
              icon: o.mwIconEdit,
              progressive: "",
              label: e.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !o.sourceSectionContent,
              onClick: t[1] || (t[1] = (f) => e.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    o.isCurrentSectionMissing ? (_(), N(d, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: y(() => [
        p(r, {
          shrink: "",
          class: "pe-2"
        }, {
          default: y(() => [
            p(c, { icon: o.mwIconEye }, null, 8, ["icon"])
          ], void 0, !0),
          _: 1
        }),
        p(r, { class: "ma-0" }, {
          default: y(() => [
            H(w("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            LC,
            H(w("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : ie("", !0),
    o.isCurrentSectionPresent ? (_(), N(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (f) => e.$emit("update:discardedSections", f))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : ie("", !0)
  ]);
}
const NC = /* @__PURE__ */ q(AC, [["render", PC]]);
const FC = {
  name: "SxContentComparatorNewSectionPlaceholder",
  props: {
    placeholderTitle: {
      type: String,
      required: !0
    },
    placeholderSubtitle: {
      type: String,
      required: !1,
      default: null
    }
  }
}, MC = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, OC = ["textContent"], IC = ["textContent"];
function BC(e, t, n, o, s, a) {
  return _(), D("section", MC, [
    w("h5", {
      textContent: ae(n.placeholderTitle)
    }, null, 8, OC),
    n.placeholderSubtitle ? (_(), D("p", {
      key: 0,
      textContent: ae(n.placeholderSubtitle)
    }, null, 8, IC)) : ie("", !0)
  ]);
}
const Ld = /* @__PURE__ */ q(FC, [["render", BC]]), $C = () => {
  const e = te(), {
    currentSectionSuggestion: t,
    currentTargetPage: n
  } = de(e), o = wt(), s = () => eu(
    Ld,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (r) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    r
  ), i = (r) => {
    const l = r.getElementsByTagName("base");
    Array.from(l).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return b(() => {
    var c;
    const r = document.createElement("div");
    r.innerHTML = (c = n.value) == null ? void 0 : c.content, i(r);
    const l = s(), d = a(
      t.value
    );
    if (d) {
      const u = Array.from(
        r.querySelectorAll("h2")
      ).filter((g) => g.textContent.match(d));
      if (u && u.length) {
        const g = u[0].parentNode;
        g.parentNode.insertBefore(
          l,
          g
        );
      }
    } else
      r.appendChild(l);
    return r.innerHTML;
  });
};
const UC = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Ld,
    SxContentComparatorHeader: NC,
    SxContentComparatorContentHeader: pC,
    MwSpinner: on
  },
  setup() {
    const e = te(), t = mt(), n = Q("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      hd() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: r,
      sourceSectionContent: l,
      targetSectionContent: d
    } = cr(e), c = $C(), {
      currentSectionSuggestion: u,
      sourceLanguage: g,
      targetLanguage: f
    } = de(e), m = b(() => u.value.targetTitle);
    return He(
      m,
      () => e.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: f.value,
        targetLanguage: g.value,
        sourceTitle: m.value
      }),
      { immediate: !0 }
    ), {
      getDir: Me.getDir,
      activeSectionTargetTitle: a,
      discardedSections: i,
      goToSectionSelector: o,
      isCurrentSectionMapped: r,
      sourceSectionContent: l,
      sourceVsTargetSelection: n,
      targetPageContent: c,
      targetSectionContent: d,
      translateSection: s,
      sourceLanguage: g,
      targetLanguage: f
    };
  }
}, RC = { class: "sx-content-comparator" }, VC = { class: "sx-content-comparator__source-content" }, zC = ["lang", "dir", "innerHTML"], jC = ["lang", "dir", "innerHTML"], HC = ["innerHTML"];
function qC(e, t, n, o, s, a) {
  const i = v("sx-content-comparator-header"), r = v("sx-content-comparator-content-header"), l = v("mw-spinner"), d = v("sx-content-comparator-new-section-placeholder");
  return _(), D("section", RC, [
    p(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (c) => o.discardedSections = c),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    p(r, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (c) => o.sourceVsTargetSelection = c),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    w("section", VC, [
      o.sourceVsTargetSelection === "source_section" ? (_(), D(Ae, { key: 0 }, [
        o.sourceSectionContent ? ie("", !0) : (_(), N(l, { key: 0 })),
        w("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, zC)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (_(), D(Ae, { key: 1 }, [
        o.targetPageContent ? ie("", !0) : (_(), N(l, { key: 0 })),
        w("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, jC)
      ], 64)) : (_(), D(Ae, { key: 2 }, [
        w("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, HC),
        p(d, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const GC = /* @__PURE__ */ q(UC, [["render", qC]]);
const WC = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: GC
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function KC(e, t, n, o, s, a) {
  const i = v("sx-content-comparator");
  return _(), D("main", {
    class: _e(["sx-content-comparator-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const XC = /* @__PURE__ */ q(WC, [["render", KC]]);
const YC = {
  name: "SxConfirmBackNavigationDialog",
  components: {
    MwButton: be,
    MwDivider: es,
    MwDialog: Ot
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1);
    return { continueTranslation: () => {
      t("continue-translation"), n();
    }, discardTranslation: () => {
      t("discard-translation"), n();
    } };
  }
}, JC = { class: "mw-ui-dialog__header px-4 py-3" }, ZC = { class: "mw-ui-dialog__header-title" }, QC = { class: "pa-4" }, ex = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" };
function tx(e, t, n, o, s, a) {
  const i = v("mw-divider"), r = v("mw-button"), l = v("mw-dialog"), d = Ee("i18n");
  return _(), N(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700
  }, {
    header: y(() => [
      w("div", JC, [
        H(w("span", ZC, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-title"]
        ])
      ])
    ]),
    footer: y(() => [
      w("div", ex, [
        p(r, {
          type: "text",
          label: e.$i18n("sx-confirm-back-navigation-dialog-continue-button-label"),
          onClick: o.continueTranslation
        }, null, 8, ["label", "onClick"]),
        p(r, {
          type: "text",
          destructive: "",
          label: e.$i18n("sx-confirm-back-navigation-dialog-discard-button-label"),
          onClick: o.discardTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: y(() => [
      p(i),
      w("div", QC, [
        H(w("span", null, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const nx = /* @__PURE__ */ q(YC, [["render", tx]]);
const ox = {
  name: "SxTranslationSelector",
  components: { MwCard: Gt, MwButton: be, MwDialog: Ot },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Re.EMPTY_TEXT_PROVIDER_KEY, o = Re.ORIGINAL_TEXT_PROVIDER_KEY, s = te(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = de(s), c = b(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        a.value,
        i.value
      )
    ), u = b(() => {
      const x = [o, n];
      return c.value.filter(
        (E) => !x.includes(E)
      );
    }), g = b(
      () => l.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
    ), f = (x) => {
      s.dispatch("application/updateMTProvider", x), C();
    }, m = Re.getMTProviderLabel, C = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: C,
      emptyTextProviderKey: n,
      getDir: Me.getDir,
      getMTProviderLabel: m,
      mwIconClose: Mt,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: f,
      sourceLanguage: a
    };
  }
}, sx = { class: "mw-ui-dialog__header pa-4" }, ax = { class: "row ma-0 py-2" }, ix = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, rx = { class: "mb-0" }, lx = { class: "col shrink justify-center" }, cx = { class: "pb-2 mb-0" }, ux = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, dx = ["dir", "lang", "innerHTML"], gx = ["textContent"], fx = ["innerHTML"], px = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, mx = /* @__PURE__ */ w("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function hx(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-card"), l = v("mw-dialog"), d = Ee("i18n");
  return n.active ? (_(), N(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: y(() => [
      w("div", sx, [
        w("div", ax, [
          w("div", ix, [
            H(w("h4", rx, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          w("div", lx, [
            p(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        H(w("h6", cx, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: y(() => [
      p(r, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (c) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: y(() => [
          H(w("h5", ux, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: y(() => [
          w("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, dx)
        ], void 0, !0),
        _: 1
      }),
      (_(!0), D(Ae, null, et(o.apiMtProviders, (c) => (_(), N(r, {
        key: c,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(c)
      }, {
        header: y(() => [
          w("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: ae(o.getMTProviderLabel(c))
          }, null, 8, gx)
        ]),
        default: y(() => [
          w("p", {
            innerHTML: o.proposedTranslations[c]
          }, null, 8, fx)
        ], void 0, !0),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      p(r, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (c) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: y(() => [
          H(w("h5", px, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: y(() => [
          mx
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : ie("", !0);
}
const _x = /* @__PURE__ */ q(ox, [["render", hx]]);
const vx = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: qe, MwCol: xe },
  setup() {
    const e = te(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = de(e), i = b(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.title;
    }), r = b(
      () => {
        var f;
        return ((f = n.value) == null ? void 0 : f.title) || i.value;
      }
    ), l = b(
      () => Ie.getPageUrl(a.value, i.value)
    ), d = b(
      () => {
        var f;
        return !!((f = n.value) != null && f.translatedTitle);
      }
    ), c = b(
      () => d.value ? "translated" : "selected"
    ), u = b(() => {
      const f = [t];
      return o.value && f.push(`${t}--${c.value}`), f;
    });
    return {
      mwIconLinkExternal: ts,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: r,
      titleClasses: u
    };
  }
}, yx = ["href"], bx = ["textContent"], Sx = ["innerHTML"];
function wx(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-col");
  return _(), N(r, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: y(() => [
      w("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        w("strong", {
          textContent: ae(o.sourceArticleTitle)
        }, null, 8, bx),
        p(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, yx),
      w("h2", {
        class: _e(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, Sx)
    ], void 0),
    _: 1
  });
}
const Cx = /* @__PURE__ */ q(vx, [["render", wx]]);
const xx = {
  name: "ProposedTranslationActionButtons",
  components: {
    MwRow: Se,
    MwButton: be
  },
  emits: ["select-previous-segment", "apply-translation", "skip-translation"],
  setup() {
    const {
      currentSourceSection: e,
      proposedTranslation: t,
      isSectionTitleSelected: n
    } = de(te());
    return {
      isLastTranslationUnit: b(
        () => e.value.isSelectedTranslationUnitLast
      ),
      isSectionTitleSelected: n,
      mwIconPrevious: ia,
      mwIconArrowForward: Ln,
      proposedTranslation: t
    };
  }
};
function Ex(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-row");
  return _(), N(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
    default: y(() => [
      p(i, {
        icon: o.mwIconPrevious,
        type: "icon",
        class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
        disabled: o.isSectionTitleSelected,
        onClick: t[0] || (t[0] = (l) => e.$emit("select-previous-segment"))
      }, null, 8, ["icon", "disabled"]),
      p(i, {
        type: "text",
        label: e.$i18n("cx-sx-sentence-selector-apply-translation-button-label"),
        class: "sx-sentence-selector__apply-translation-button col grow pa-4",
        disabled: !o.proposedTranslation,
        onClick: t[1] || (t[1] = (l) => e.$emit("apply-translation"))
      }, null, 8, ["label", "disabled"]),
      p(i, {
        type: "text",
        indicator: o.mwIconArrowForward,
        label: e.$i18n("cx-sx-sentence-selector-skip-translation-button-label"),
        class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
        disabled: o.isLastTranslationUnit,
        onClick: t[2] || (t[2] = (l) => e.$emit("skip-translation"))
      }, null, 8, ["indicator", "label", "disabled"])
    ], void 0),
    _: 1
  });
}
const Pd = /* @__PURE__ */ q(xx, [["render", Ex]]);
const Ax = {
  name: "ProposedTranslationHeader",
  components: {
    MwRow: Se,
    MwCol: xe,
    MwButton: be
  },
  emits: ["configure-options"],
  setup() {
    const e = te(), t = b(
      () => e.state.application.currentMTProvider
    ), n = wt(), o = b(() => ({
      [Re.ORIGINAL_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Re.EMPTY_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), s = b(
      () => o.value[t.value] || n.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Re.getMTProviderLabel(t.value)
      )
    );
    return {
      mwIconEllipsis: ns,
      mtOptionLabel: s
    };
  }
};
function kx(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-button"), l = v("mw-row");
  return _(), N(i, { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
    default: y(() => [
      p(l, { class: "ma-0 ps-5 pb-4" }, {
        default: y(() => [
          p(i, {
            tag: "h6",
            grow: "",
            class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
            textContent: ae(o.mtOptionLabel)
          }, null, 8, ["textContent"]),
          p(i, {
            shrink: "",
            class: "pe-5"
          }, {
            default: y(() => [
              p(r, {
                icon: o.mwIconEllipsis,
                type: "icon",
                class: "sx-sentence-selector__proposed-translation__header-settings-button pa-0",
                onClick: t[0] || (t[0] = (d) => e.$emit("configure-options"))
              }, null, 8, ["icon"])
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
const Tx = /* @__PURE__ */ q(Ax, [["render", kx]]), Dx = {
  name: "RetryMtCard",
  components: { MwButton: be, MwIcon: qe, MwGrid: tu, MwCol: xe, MwRow: Se },
  emits: ["configure-options", "retry-translation"],
  setup() {
    return {
      mwIconAlert: fo,
      mwIconRefresh: au,
      mwIconMenu: Vm
    };
  }
}, Lx = { class: "mt-retry-body" };
function Px(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-col"), l = v("mw-row"), d = v("mw-button"), c = Ee("i18n");
  return _(), D("div", Lx, [
    p(l, { class: "retry-body__action-buttons" }, {
      default: y(() => [
        p(r, { cols: "12" }, {
          default: y(() => [
            p(i, { icon: o.mwIconAlert }, null, 8, ["icon"]),
            H(w("span", null, null, 512), [
              [c, void 0, "cx-sx-proposed-translation-not-available-message"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    p(l, { class: "retry-body__action-buttons" }, {
      default: y(() => [
        p(r, { cols: "6" }, {
          default: y(() => [
            p(d, {
              icon: o.mwIconRefresh,
              type: "text",
              label: e.$i18n("cx-sx-proposed-translation-retry-button"),
              class: "retry-button pa-5 pt-4",
              progressive: "",
              onClick: t[0] || (t[0] = (u) => e.$emit("retry-translation"))
            }, null, 8, ["icon", "label"])
          ], void 0, !0),
          _: 1
        }),
        p(r, { cols: "6" }, {
          default: y(() => [
            p(d, {
              icon: o.mwIconMenu,
              type: "text",
              label: e.$i18n("cx-sx-proposed-translation-other-options-button"),
              class: "other-options-button pa-5 pt-4",
              progressive: "",
              onClick: t[1] || (t[1] = (u) => e.$emit("configure-options"))
            }, null, 8, ["icon", "label"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })
  ]);
}
const Nx = /* @__PURE__ */ q(Dx, [["render", Px]]);
const Fx = {
  name: "ProposedTranslationCard",
  components: {
    RetryMtCard: Nx,
    MwSpinner: on,
    MwCard: Gt,
    ProposedTranslationHeader: Tx,
    MwRow: Se,
    MwCol: xe,
    MwButton: be,
    ProposedTranslationActionButtons: Pd
  },
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup() {
    const e = Q(0), t = Q(null), n = Q(null), o = te(), {
      currentMTProvider: s,
      targetLanguage: a,
      proposedTranslation: i,
      currentSourceSection: r
    } = de(o), l = b(
      () => {
        var g;
        return (g = o.state.application.mtRequestsPending) == null ? void 0 : g.includes(
          r.value.selectedTranslationUnitId
        );
      }
    ), d = b(() => ({
      "max-height": `calc(100% - ${e.value}px)`
    })), c = b(
      () => !!i.value || s.value === Re.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      e.value = t.value.$el.clientHeight + n.value.$el.clientHeight;
    };
    return He(s, u), pt(() => W(this, null, function* () {
      yield _o(), u();
    })), {
      footer: n,
      getDir: Me.getDir,
      header: t,
      mwIconEllipsis: ns,
      mwIconEdit: Zn,
      proposedTranslation: i,
      hasProposedTranslation: c,
      targetLanguage: a,
      contentsStyle: d,
      mtRequestPending: l
    };
  }
}, Mx = ["lang", "dir", "innerHTML"];
function Ox(e, t, n, o, s, a) {
  const i = v("proposed-translation-header"), r = v("mw-spinner"), l = v("retry-mt-card"), d = v("mw-col"), c = v("mw-button"), u = v("proposed-translation-action-buttons"), g = v("mw-row"), f = v("mw-card");
  return _(), N(f, { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
    default: y(() => [
      p(g, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: y(() => [
          p(i, {
            ref: "header",
            onConfigureOptions: t[0] || (t[0] = (m) => e.$emit("configure-options"))
          }, null, 512),
          p(d, {
            class: _e(["sx-sentence-selector__proposed-translation__contents px-5", {
              "sx-sentence-selector__proposed-translation__contents--empty": !o.hasProposedTranslation
            }]),
            style: ot(o.contentsStyle)
          }, {
            default: y(() => [
              o.hasProposedTranslation ? (_(), D("section", {
                key: 0,
                lang: o.targetLanguage,
                dir: o.getDir(o.targetLanguage),
                innerHTML: o.proposedTranslation
              }, null, 8, Mx)) : o.mtRequestPending ? (_(), N(r, { key: 1 })) : (_(), N(l, {
                key: 2,
                onConfigureOptions: t[1] || (t[1] = (m) => e.$emit("configure-options")),
                onRetryTranslation: t[2] || (t[2] = (m) => e.$emit("retry-translation"))
              }))
            ], void 0, !0),
            _: 1
          }, 8, ["class", "style"]),
          p(d, {
            ref: "footer",
            shrink: "",
            class: "sx-sentence-selector__proposed-translation__footer"
          }, {
            default: y(() => [
              o.hasProposedTranslation || o.mtRequestPending ? (_(), N(c, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                progressive: "",
                disabled: !o.hasProposedTranslation,
                onClick: t[3] || (t[3] = (m) => e.$emit("edit-translation", o.proposedTranslation))
              }, null, 8, ["icon", "label", "disabled"])) : ie("", !0),
              p(u, vi(ta(e.$attrs)), null, 16)
            ], void 0, !0),
            _: 1
          }, 512)
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
const Ix = /* @__PURE__ */ q(Fx, [["render", Ox]]), Bx = (e) => b(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (l) => `${t}--${l}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const r = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${r}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const $x = {
  name: "SubSection",
  props: {
    subSection: {
      type: bt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = Q(null), o = Bx(e.subSection);
    pt(() => {
      n.value.addEventListener("click", (r) => {
        let l;
        if (e.subSection.isBlockTemplate)
          l = e.subSection;
        else {
          const d = r.composedPath().find(
            (c) => c instanceof Element && c.classList.contains("cx-segment")
          );
          if (!d)
            return;
          l = e.subSection.getSentenceById(
            d.dataset.segmentid
          );
        }
        a(l);
      });
    });
    const s = te(), a = (r) => {
      if (r.selected) {
        t("bounce-translation");
        return;
      }
      s.dispatch(
        "application/selectTranslationUnitById",
        r.id
      );
    }, i = b(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, Ux = ["innerHTML"];
function Rx(e, t, n, o, s, a) {
  return _(), D("div", {
    ref: "subSectionRoot",
    class: _e(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, Ux);
}
const Vx = /* @__PURE__ */ q($x, [["render", Rx]]);
const zx = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: pu,
    MwIcon: qe
  },
  props: {
    isTemplateAdapted: {
      type: Boolean,
      required: !0
    },
    size: {
      type: Number,
      required: !0
    },
    percentage: {
      type: Number,
      required: !0
    },
    strokeWidth: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const t = b(() => ({ "--size": e.size })), n = b(
      () => !e.isTemplateAdapted || e.percentage === 0 ? fo : Sn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
};
function jx(e, t, n, o, s, a) {
  const i = v("mw-circle-progress-bar"), r = v("mw-icon");
  return _(), D("div", {
    class: "block-template-status-indicator",
    style: ot(o.cssVars)
  }, [
    p(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    p(r, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: ot({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const Nd = /* @__PURE__ */ q(zx, [["render", jx]]), Hx = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: xe,
    MwRow: Se,
    MwButton: be,
    MwIcon: qe,
    MwRadioGroup: gu,
    MwRadio: js,
    MwDivider: es,
    MwDialog: Ot,
    MwCircleProgressBar: pu,
    BlockTemplateStatusIndicator: Nd
  },
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    sourceParamsCount: {
      type: Number,
      required: !0
    },
    targetParamsCount: {
      type: Number,
      required: !0
    },
    mandatoryMissingParamsCount: {
      type: Number,
      required: !0
    },
    optionalMissingParamsCount: {
      type: Number,
      required: !0
    },
    isTemplateAdapted: {
      type: Boolean,
      required: !0
    },
    targetTemplateExists: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e) {
    const { targetLanguageAutonym: t } = de(te()), n = b(
      () => !e.isTemplateAdapted || o.value === 0 ? fo : Sn
    ), o = b(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = wt(), a = b(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), i = b(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), r = b(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: zm,
          color: At.gray500
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Mt,
          color: At.gray500
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: Sn,
          color: At.blue600
        });
      else {
        let d;
        e.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : d = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), l.push({
          text: d,
          icon: Sn,
          color: At.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: Zn,
        color: At.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: zs,
        color: At.gray500
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: Sn,
      mwIconInfo: nu,
      notes: r
    };
  }
}, qx = { class: "pa-4" }, Gx = ["textContent"], Wx = ["textContent"];
function Kx(e, t, n, o, s, a) {
  const i = v("block-template-status-indicator"), r = v("mw-icon"), l = v("mw-col"), d = v("mw-row"), c = v("mw-dialog");
  return _(), N(c, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: y(() => [
      p(d, {
        justify: "center",
        class: "mt-4"
      }, {
        default: y(() => [
          p(l, { shrink: "" }, {
            default: y(() => [
              n.targetTemplateExists ? (_(), N(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (_(), N(r, {
                key: 1,
                icon: o.mwIconInfo
              }, null, 8, ["icon"]))
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ]),
    default: y(() => [
      w("div", qx, [
        w("h3", {
          textContent: ae(o.statusText)
        }, null, 8, Gx),
        w("p", {
          class: "mt-6 text-small",
          textContent: ae(o.statusExplanation)
        }, null, 8, Wx),
        (_(!0), D(Ae, null, et(o.notes, (u, g) => (_(), N(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: y(() => [
            p(l, { shrink: "" }, {
              default: y(() => [
                p(r, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ], void 0, !0),
              _: 2
            }, 1024),
            p(l, {
              textContent: ae(u.text)
            }, null, 8, ["textContent"])
          ], void 0, !0),
          _: 2
        }, 1024))), 128))
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const Xx = /* @__PURE__ */ q(Hx, [["render", Kx]]);
const Yx = {
  name: "BlockTemplateAdaptationCard",
  components: {
    SxBlockTemplateStatusDialog: Xx,
    MwSpinner: on,
    MwIcon: qe,
    MwCard: Gt,
    MwRow: Se,
    MwCol: xe,
    MwButton: be,
    ProposedTranslationActionButtons: Pd,
    BlockTemplateStatusIndicator: Nd
  },
  emits: ["edit-translation"],
  setup() {
    const e = te(), {
      selectedContentTranslationUnit: t,
      targetLanguageAutonym: n,
      currentMTProvider: o,
      proposedTranslation: s
    } = de(e), a = b(() => {
      var O;
      return ((O = t.value) == null ? void 0 : O.blockTemplateTranslatedContent) || s.value;
    }), i = b(
      () => {
        var M;
        return (M = t.value) == null ? void 0 : M.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), r = b(
      () => {
        var M;
        return !((M = e.state.application.mtRequestsPending) != null && M.includes(
          t.value.id
        ));
      }
    ), l = wt(), d = b(
      // Strip HTML comments and return
      () => {
        var M, O;
        return ((O = (M = t.value) == null ? void 0 : M.sourceBlockTemplateName) == null ? void 0 : O.replace(
          /<\!--.*?-->/g,
          ""
        )) || l.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = b(
      () => {
        var M;
        return (M = t.value.blockTemplateAdaptationInfo) == null ? void 0 : M[o.value];
      }
    ), u = b(
      () => {
        var M, O;
        return ((M = c.value) == null ? void 0 : M.adapted) || !!((O = c.value) != null && O.partial);
      }
    ), g = b(() => c.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), f = b(() => c.value ? u.value ? l.i18n("sx-block-template-adaptation-card-edit-button-label") : l.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), m = b(
      () => {
        var M;
        return Object.keys(((M = t.value) == null ? void 0 : M.sourceTemplateParams) || {}).length;
      }
    ), C = b(() => {
      var O;
      const M = (O = t.value) == null ? void 0 : O.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(M || {});
    }), x = b(() => C.value.length), E = b(() => {
      const M = J.value;
      return m.value + M === 0 ? 100 : x.value / (m.value + M) * 100 || 0;
    }), L = Q(!1), I = () => {
      L.value = !0;
    }, V = (M) => M.filter((O) => !C.value.includes(O)), J = b(() => {
      var O;
      const M = ((O = c.value) == null ? void 0 : O.mandatoryTargetParams) || [];
      return V(M).length;
    }), se = b(() => {
      var O;
      const M = ((O = c.value) == null ? void 0 : O.optionalTargetParams) || [];
      return V(M).length;
    });
    return {
      adaptationRatio: E,
      adaptedTemplateCardClass: g,
      blockEditableContent: a,
      editBlockTranslationButtonLabel: f,
      isTemplateAdapted: u,
      mandatoryMissingTargetParamsCount: J,
      mwIconInfo: nu,
      mwIconPuzzle: Rm,
      optionalMissingTargetParamsCount: se,
      showTemplateStatus: I,
      sourceParamsCount: m,
      sourceTemplateName: d,
      targetLanguageAutonym: n,
      targetParamsCount: x,
      targetTemplateName: i,
      templateStatusDialogOn: L,
      translationLoaded: r
    };
  }
}, Jx = { class: "block-template-adaptation-card__container pa-4" }, Zx = ["textContent"], Qx = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
};
function eE(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-col"), l = v("mw-row"), d = v("block-template-status-indicator"), c = v("mw-button"), u = v("mw-spinner"), g = v("proposed-translation-action-buttons"), f = v("sx-block-template-status-dialog"), m = v("mw-card"), C = Ee("i18n");
  return _(), N(m, { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
    default: y(() => [
      w("div", Jx, [
        p(l, { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
          default: y(() => [
            p(r, { shrink: "" }, {
              default: y(() => [
                p(i, {
                  icon: o.mwIconPuzzle,
                  class: "me-2"
                }, null, 8, ["icon"])
              ], void 0, !0),
              _: 1
            }),
            p(r, {
              class: "ma-0",
              tag: "h5"
            }, {
              default: y(() => [
                Uo(ae(o.sourceTemplateName), 1)
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        }),
        o.targetTemplateName ? (_(), D("div", {
          key: 0,
          class: _e(["pa-4 mb-4", o.adaptedTemplateCardClass])
        }, [
          p(l, {
            class: "block-template-adaptation-card__body__header ma-0 pb-1",
            align: "start"
          }, {
            default: y(() => [
              H(p(r, { tag: "h5" }, null, 512), [
                [C, void 0, "sx-block-template-adaptation-card-body-header-success"]
              ]),
              p(r, { shrink: "" }, {
                default: y(() => [
                  p(d, {
                    percentage: o.adaptationRatio,
                    size: 20,
                    "is-template-adapted": o.isTemplateAdapted,
                    "stroke-width": 2,
                    onClick: o.showTemplateStatus
                  }, null, 8, ["percentage", "is-template-adapted", "onClick"])
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          }),
          w("h5", {
            class: "block-template-adaptation-card__body__template-title pb-2",
            textContent: ae(o.targetTemplateName)
          }, null, 8, Zx),
          p(c, {
            class: "px-0",
            type: "text",
            progressive: "",
            label: o.editBlockTranslationButtonLabel,
            onClick: t[0] || (t[0] = (x) => e.$emit("edit-translation", o.blockEditableContent))
          }, null, 8, ["label"])
        ], 2)) : o.translationLoaded ? (_(), D("div", Qx, [
          p(l, {
            class: "block-template-adaptation-card__body__header pb-0 mb-0",
            align: "start"
          }, {
            default: y(() => [
              H(p(r, { tag: "h5" }, null, 512), [
                [C, [
                  o.targetLanguageAutonym
                ], "sx-block-template-adaptation-card-body-header-failure"]
              ]),
              p(r, { shrink: "" }, {
                default: y(() => [
                  p(i, {
                    icon: o.mwIconInfo,
                    onClick: o.showTemplateStatus
                  }, null, 8, ["icon", "onClick"])
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })
        ])) : (_(), N(u, { key: 2 }))
      ]),
      p(g, vi(ta(e.$attrs)), null, 16),
      p(f, {
        active: o.templateStatusDialogOn,
        "onUpdate:active": t[1] || (t[1] = (x) => o.templateStatusDialogOn = x),
        "source-params-count": o.sourceParamsCount,
        "target-params-count": o.targetParamsCount,
        "mandatory-missing-params-count": o.mandatoryMissingTargetParamsCount,
        "optional-missing-params-count": o.optionalMissingTargetParamsCount,
        "is-template-adapted": o.isTemplateAdapted,
        "target-template-exists": !!o.targetTemplateName
      }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
    ], void 0),
    _: 1
  });
}
const tE = /* @__PURE__ */ q(Yx, [["render", eE]]);
const nE = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: Qo },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = de(te()), o = wt();
    return { scopeOptions: b(() => [
      {
        value: "sentence",
        props: {
          label: o.i18n(
            "cx-sx-sentence-selector-translated-segment-sentence-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      },
      {
        value: "paragraph",
        props: {
          label: o.i18n(
            "cx-sx-sentence-selector-translated-segment-paragraph-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4",
          disabled: n.value
        }
      }
    ]), updateSelection: (i) => t("update:selection", i) };
  }
}, oE = { class: "translated-segment-card-header" };
function sE(e, t, n, o, s, a) {
  const i = v("mw-button-group");
  return _(), D("div", oE, [
    p(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const aE = /* @__PURE__ */ q(nE, [["render", sE]]), iE = {
  name: "TranslatedSegmentCardActionButtons",
  components: {
    MwRow: Se,
    MwButton: be
  },
  emits: ["select-previous-segment", "skip-translation"],
  setup() {
    const { currentSourceSection: e, isSectionTitleSelected: t } = de(te()), n = b(
      () => e.value.isSelectedTranslationUnitLast
    );
    return {
      mwIconArrowForward: Ln,
      mwIconPrevious: ia,
      isLastTranslationUnit: n,
      isSectionTitleSelected: t
    };
  }
};
function rE(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-row");
  return _(), N(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
    default: y(() => [
      p(i, {
        icon: o.mwIconPrevious,
        type: "icon",
        class: "sx-sentence-selector__previous-sentence-button col pa-4",
        disabled: o.isSectionTitleSelected,
        onClick: t[0] || (t[0] = (l) => e.$emit("select-previous-segment"))
      }, null, 8, ["icon", "disabled"]),
      p(i, {
        type: "icon",
        icon: o.mwIconArrowForward,
        class: "sx-sentence-selector__skip-translation-button col pa-4 items-start",
        disabled: o.isLastTranslationUnit,
        onClick: t[1] || (t[1] = (l) => e.$emit("skip-translation"))
      }, null, 8, ["icon", "disabled"])
    ], void 0),
    _: 1
  });
}
const lE = /* @__PURE__ */ q(iE, [["render", rE]]);
const cE = {
  name: "TranslatedSegmentCard",
  components: {
    TranslatedSegmentCardActionButtons: lE,
    MwProgressBar: fu,
    MwIcon: qe,
    TranslatedSegmentCardHeader: aE,
    MwCard: Gt,
    MwRow: Se,
    MwCol: xe,
    MwButton: be
  },
  emits: ["edit-translation"],
  setup() {
    const e = Q("sentence"), {
      isSectionTitleSelected: t,
      currentSourceSection: n,
      selectedContentTranslationUnit: o,
      targetLanguage: s
    } = de(te()), a = b(() => e.value === "sentence"), i = b(
      () => n.value.subSections.find(
        (E) => E.sentences.some(
          (L) => {
            var I;
            return L.id === ((I = o.value) == null ? void 0 : I.id);
          }
        )
      )
    ), r = b(() => {
      var E;
      return t.value ? n.value.mtProposedTranslationUsedForTitle : a.value ? (E = o.value) == null ? void 0 : E.mtProposedTranslationUsed : i.value.proposedContentForMTValidation;
    }), l = Ke("colors"), d = l.gray200, c = l.red600, u = b(() => t.value ? n.value.translatedTitle : a.value ? o.value.translatedContent : i.value.translatedContent), g = b(
      () => An.calculateScore(
        u.value,
        r.value,
        s.value
      )
    ), f = b(
      () => An.getScoreStatus(g.value)
    ), m = b(
      () => `translated-segment-card__modification-stats__percentage--${f.value}`
    ), C = b(() => ({
      failure: g.value === 0 ? null : l.yellow700,
      warning: l.yellow700,
      success: l.green600
    })), x = b(
      () => C.value[f.value]
    );
    return {
      errorColor: c,
      modificationPercentageClass: m,
      mtScore: g,
      mwIconEdit: Zn,
      mwIconEllipsis: ns,
      mwIconRobot: du,
      mwIconUserAvatar: Lm,
      progressBarBackgroundColor: d,
      scopeSelection: e,
      showSentenceTab: a,
      translation: u,
      userIconColor: x
    };
  }
};
function uE(e, t, n, o, s, a) {
  const i = v("translated-segment-card-header"), r = v("mw-col"), l = v("mw-icon"), d = v("mw-progress-bar"), c = v("mw-row"), u = v("mw-button"), g = v("translated-segment-card-action-buttons"), f = v("mw-card"), m = Ee("i18n"), C = Ee("i18n-html");
  return _(), N(f, { class: "translated-segment-card col shrink pa-0 mb-0" }, {
    default: y(() => [
      p(c, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: y(() => [
          p(i, {
            selection: o.scopeSelection,
            "onUpdate:selection": t[0] || (t[0] = (x) => o.scopeSelection = x)
          }, null, 8, ["selection"]),
          p(r, {
            tag: "section",
            class: "translated-segment-card__body pa-5"
          }, {
            default: y(() => [
              p(c, { class: "ma-0" }, {
                default: y(() => [
                  p(r, {
                    class: "translated-segment-card__modification-stats",
                    grow: ""
                  }, {
                    default: y(() => [
                      H(w("h5", null, null, 512), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                      ]),
                      o.mtScore === 0 ? H((_(), D("p", {
                        key: 0,
                        style: ot({ color: o.errorColor })
                      }, null, 4)), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                      ]) : H((_(), D("p", {
                        key: 1,
                        class: _e(o.modificationPercentageClass)
                      }, null, 2)), [
                        [C, [
                          o.mtScore
                        ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                      ])
                    ], void 0, !0),
                    _: 1
                  }),
                  p(r, {
                    shrink: "",
                    class: "translated-segment-card__animated-stats"
                  }, {
                    default: y(() => [
                      p(c, { class: "ma-0 ms-2" }, {
                        default: y(() => [
                          p(r, {
                            shrink: "",
                            align: "center"
                          }, {
                            default: y(() => [
                              p(l, {
                                icon: o.mwIconUserAvatar,
                                "icon-color": o.userIconColor
                              }, null, 8, ["icon", "icon-color"])
                            ], void 0, !0),
                            _: 1
                          }),
                          p(r, {
                            shrink: "",
                            class: "px-3"
                          }, {
                            default: y(() => [
                              p(d, {
                                value: o.mtScore,
                                height: "4px",
                                width: "64px",
                                color: o.userIconColor,
                                background: o.progressBarBackgroundColor
                              }, null, 8, ["value", "color", "background"])
                            ], void 0, !0),
                            _: 1
                          }),
                          p(r, { shrink: "" }, {
                            default: y(() => [
                              p(l, { icon: o.mwIconRobot }, null, 8, ["icon"])
                            ], void 0, !0),
                            _: 1
                          })
                        ], void 0, !0),
                        _: 1
                      })
                    ], void 0, !0),
                    _: 1
                  })
                ], void 0, !0),
                _: 1
              }),
              o.showSentenceTab ? (_(), N(u, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-0 mt-4",
                progressive: "",
                onClick: t[1] || (t[1] = (x) => e.$emit("edit-translation", o.translation))
              }, null, 8, ["icon", "label"])) : ie("", !0)
            ], void 0, !0),
            _: 1
          }),
          p(r, { class: "translated-segment-card__actions" }, {
            default: y(() => [
              p(g, vi(ta(e.$attrs)), null, 16)
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
const dE = /* @__PURE__ */ q(cE, [["render", uE]]), gE = () => {
  const e = te();
  return () => {
    const { currentTranslation: t } = e.state.application, { currentSourceSection: n, selectedContentTranslationUnit: o } = de(e);
    if (n.value)
      if (t && !o.value) {
        const { lastTranslatedContentTranslationUnit: s } = n.value;
        n.value.selectTranslationUnitById(
          (s == null ? void 0 : s.id) || 0
        ), e.dispatch("application/selectNextTranslationUnit");
      } else
        o.value || e.dispatch("application/selectTranslationUnitById", 0);
  };
}, fE = () => {
  const e = te(), { sourceLanguage: t, targetLanguage: n } = de(e);
  return () => W(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield la.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, pE = () => {
  const e = te(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = de(e), s = fE();
  return () => W(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = Re.getStorageKey(
        n.value,
        o.value
      ), r = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", r);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, mE = (e) => {
  Array.from(e.getClientRects()).every(
    // use "elementFromPoint" method to get the topmost element
    // at the coordinates of the border box of each line.
    // If the line of the segment is inside the viewport and not
    // hidden by another element (e.g. the proposed translation card),
    // the returned element should match the "segment" element.
    // Note that we only check for the top-left corner of the rectangle, so
    // if a small portion of a line is hidden, the line is still considered
    // to be visible.
    (n) => document.elementFromPoint(n.x, n.y) === e
  ) || e.scrollIntoView({
    behavior: "smooth",
    // set "block" property to "start" so that it works well with block templates too
    block: "start",
    inline: "nearest"
  });
}, hE = () => {
  const e = te(), { selectedContentTranslationUnit: t } = de(e), n = b(
    () => t.value instanceof bt
  );
  return () => {
    if (!t.value)
      return;
    const o = t.value.id, s = n.value ? document.getElementById(o) : document.querySelector(`[data-segmentid='${o}']`);
    s && mE(s);
  };
};
const _E = {
  name: "SxSentenceSelector",
  components: {
    SxConfirmBackNavigationDialog: nx,
    BlockTemplateAdaptationCard: tE,
    TranslatedSegmentCard: dE,
    ProposedTranslationCard: Ix,
    SubSection: Vx,
    SxSentenceSelectorContentHeader: Cx,
    MwRow: Se,
    MwSpinner: on,
    MwCol: xe,
    SxTranslationSelector: _x,
    MwButton: be
  },
  setup() {
    const e = Q(!1), t = Q(!1), n = Q("100%"), o = te(), {
      currentSourcePage: s,
      currentTargetPage: a,
      currentSourceSection: i,
      selectedContentTranslationUnit: r,
      currentMTProvider: l,
      sourceLanguage: d,
      targetLanguage: c
    } = de(o), u = b(
      () => o.state.application.translationDataLoadingCounter === 0
    ), g = b(
      () => {
        var re;
        return (re = i.value) == null ? void 0 : re.isSelectedTranslationUnitTranslated;
      }
    ), f = b(() => {
      var re;
      return (re = i.value) == null ? void 0 : re.subSections;
    }), m = b(
      () => {
        var re;
        return (re = i.value) == null ? void 0 : re.selectedTranslationUnitOriginalContent;
      }
    ), C = b(
      () => isNaN(n.value) ? n.value : `${n.value}px`
    ), x = Wt(), E = gE();
    pE()();
    const I = hE();
    pt(() => {
      He(
        u,
        () => W(this, null, function* () {
          u.value && (yield _o(), E(), I());
        }),
        { immediate: !0 }
      ), n.value = window.innerHeight;
    }), He(r, I);
    const V = () => o.dispatch("application/selectNextTranslationUnit"), J = () => o.dispatch("application/selectPreviousTranslationUnit"), se = () => {
      x({
        event_type: "editor_segment_add",
        translation_source_language: d.value,
        translation_target_language: c.value
      }), o.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
    }, M = () => {
      t.value = !0, setTimeout(() => {
        t.value = !1;
      }, 100);
    }, O = mt(), fe = () => {
      const { autoSavePending: re } = o.state.application;
      if (re) {
        me.value = !0;
        return;
      }
      De();
    }, { fetchTranslationsByStatus: Te } = da(), De = () => W(this, null, function* () {
      Te("draft"), to(null), o.dispatch("application/clearPendingSaveTranslationRequests"), yield O.push({ name: "dashboard" }), i.value.reset(), o.commit("application/setCurrentSourceSection", null), o.commit("application/setCurrentSectionSuggestion", null);
      const { currentTranslation: re } = o.state.application;
      re && (o.commit("application/setCurrentTranslationRestored", !1), o.commit("application/setCurrentTranslation", null));
    }), Z = () => {
      Ue.value || (e.value = !0, o.dispatch(
        "application/translateSelectedTranslationUnitForAllProviders"
      ));
    }, Le = (re, it) => {
      var Ct;
      O.push({
        name: "sx-editor",
        state: {
          content: re,
          originalContent: m.value,
          title: ((Ct = a.value) == null ? void 0 : Ct.title) || s.value.title,
          isInitialEdit: it || null
        }
      });
    }, Ye = () => O.push({ name: "sx-publisher" }), Je = () => W(this, null, function* () {
      r.value ? yield o.dispatch("application/translateTranslationUnitById", {
        id: r.value.id,
        provider: l.value
      }) : yield o.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: l.value
      });
    }), Ue = b(
      () => r.value instanceof bt
    ), me = Q(!1);
    return {
      applyTranslation: se,
      bounceTranslation: M,
      configureTranslationOptions: Z,
      currentPageSection: i,
      doGoToDashboard: De,
      editTranslation: Le,
      getDir: Me.getDir,
      goToDashboard: fe,
      isBlockTemplateSelected: Ue,
      isSelectedTranslationUnitTranslated: g,
      isTranslationOptionsActive: e,
      mwIconArrowPrevious: Ui,
      previewTranslation: Ye,
      retryTranslation: Je,
      selectPreviousTranslationUnit: J,
      sentenceSelectorStyle: C,
      shouldProposedTranslationBounce: t,
      skipTranslation: V,
      sourceLanguage: d,
      subSections: f,
      translationDataReady: u,
      verifyBackNavigationDialogOn: me
    };
  }
}, vE = { class: "sx-sentence-selector__header-title" }, yE = { class: "sx-sentence-selector__section-contents px-4" };
function bE(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-col"), l = v("mw-row"), d = v("sx-sentence-selector-content-header"), c = v("sub-section"), u = v("translated-segment-card"), g = v("proposed-translation-card"), f = v("block-template-adaptation-card"), m = v("mw-spinner"), C = v("sx-translation-selector"), x = v("sx-confirm-back-navigation-dialog"), E = Ee("i18n");
  return _(), D("section", {
    class: "sx-sentence-selector fill-height column ma-0 no-wrap",
    style: ot(o.sentenceSelectorStyle)
  }, [
    p(l, { class: "sx-sentence-selector__header ma-0 py-2" }, {
      default: y(() => [
        p(r, { shrink: "" }, {
          default: y(() => [
            p(i, {
              class: "px-3",
              type: "icon",
              icon: o.mwIconArrowPrevious,
              onClick: o.goToDashboard
            }, null, 8, ["icon", "onClick"])
          ], void 0, !0),
          _: 1
        }),
        p(r, {
          grow: "",
          class: "px-1"
        }, {
          default: y(() => [
            H(w("h4", vE, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-header-title"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(r, {
          shrink: "",
          class: "px-3"
        }, {
          default: y(() => [
            p(i, {
              label: e.$i18n("cx-sx-sentence-selector-done-button-label"),
              disabled: !(o.currentPageSection && o.currentPageSection.isTranslated),
              onClick: o.previewTranslation
            }, null, 8, ["label", "disabled", "onClick"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    o.translationDataReady ? (_(), N(l, {
      key: 0,
      tag: "section",
      direction: "column",
      align: "start",
      justify: "between",
      class: "sx-sentence-selector__body fill-height ma-0"
    }, {
      default: y(() => [
        p(r, {
          dir: o.getDir(o.sourceLanguage),
          lang: o.sourceLanguage,
          class: "sx-sentence-selector__section"
        }, {
          default: y(() => [
            p(d),
            w("div", yE, [
              (_(!0), D(Ae, null, et(o.subSections, (L) => (_(), N(c, {
                id: L.id,
                key: `sub-section-${L.id}`,
                "sub-section": L,
                onBounceTranslation: o.bounceTranslation
              }, null, 8, ["id", "sub-section", "onBounceTranslation"]))), 128))
            ])
          ], void 0, !0),
          _: 1
        }, 8, ["dir", "lang"]),
        !o.isBlockTemplateSelected && o.isSelectedTranslationUnitTranslated ? (_(), N(u, {
          key: 0,
          onEditTranslation: t[0] || (t[0] = (L) => o.editTranslation(L, !1)),
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : o.isBlockTemplateSelected ? (_(), N(f, {
          key: 2,
          onEditTranslation: o.editTranslation,
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onEditTranslation", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment"])) : (_(), N(g, {
          key: 1,
          class: _e({ "mb-0": !o.shouldProposedTranslationBounce }),
          onConfigureOptions: o.configureTranslationOptions,
          onEditTranslation: t[1] || (t[1] = (L) => o.editTranslation(L, !0)),
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit,
          onRetryTranslation: o.retryTranslation
        }, null, 8, ["class", "onConfigureOptions", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment", "onRetryTranslation"]))
      ], void 0),
      _: 1
    })) : (_(), N(l, {
      key: 1,
      column: "",
      class: "grow"
    }, {
      default: y(() => [
        p(m, { class: "mt-0" })
      ], void 0),
      _: 1
    })),
    p(C, {
      active: o.isTranslationOptionsActive,
      "onUpdate:active": t[2] || (t[2] = (L) => o.isTranslationOptionsActive = L)
    }, null, 8, ["active"]),
    p(x, {
      modelValue: o.verifyBackNavigationDialogOn,
      "onUpdate:modelValue": t[3] || (t[3] = (L) => o.verifyBackNavigationDialogOn = L),
      onDiscardTranslation: o.doGoToDashboard
    }, null, 8, ["modelValue", "onDiscardTranslation"])
  ], 4);
}
const SE = /* @__PURE__ */ q(_E, [["render", bE]]);
const wE = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: SE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function CE(e, t, n, o, s, a) {
  const i = v("sx-sentence-selector");
  return _(), D("main", {
    class: _e(["sx-sentence-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const xE = /* @__PURE__ */ q(wE, [["render", CE]]), EE = `<svg width="375" height="200" viewBox="0 0 375 200"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>illustration-mt</title>
    <defs>
        <path d="M105.208249,19.5680105 C105.208249,18.4685389 106.107813,17.5382516 107.198217,17.4909907 L233.21828,12.0289647 C234.31731,11.98133 235.208249,12.8435441 235.208249,13.9420961 L235.208249,47.1312078 C235.208249,48.2354359 234.308684,49.0916001 233.21828,49.0443393 L107.198217,43.5823132 C106.099188,43.5346786 105.208249,42.6038785 105.208249,41.5052935 L105.208249,19.5680105 Z" id="path-1"></path>
        <pattern id="pattern-2" width="30" height="30" x="75.2082489" y="-17.9633462" patternUnits="userSpaceOnUse">
            <use xlink:href="#image-3"></use>
        </pattern>
        <image id="image-3" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAP1JREFUSA3t1V0OgyAMAOC1Hmu7giHhXQ/n9mw0XmG7xm6izpphBAENk/IyXgxJ06/lT2ia5p1lWZnn+fPiGG3bXsdxvJ8ZBzGSHikSqMkU+AynwBeYG9dgTnwDc+FWmAN3wrFx7LruRohtCCFeAFD0fV+dHYcxkh4p8v9ynfoj8L3Z2qnmfLM1mE72F38Mw1BIKfd+lcFxaF4jukKEImJV17X3qv0St+lYFUIo4VPy0td5aJwTpgJCk6rize86H9LEDFBz6pQ63lv2kLgpp38vQ5IeaQbW7cfYS7V65nfe4xT4cri48QWmpeDENZgT38BcuBXmwJ1wbDzZy/UBR/bTV8buNroAAAAASUVORK5CYII="></image>
    </defs>
    <g id="illustration-mt" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Oval-9-+-Path-79" transform="translate(97.500000, 27.500000) rotate(-50.000000) translate(-97.500000, -27.500000) translate(20.000000, -66.000000)" stroke="#72777D" stroke-width="20">
            <path d="M154.758243,0.558837385 C154.758243,0.558837385 79.2075256,2.3963732 49.094702,27.6101739 C18.9818785,52.8239746 29.5592009,127.558837 29.5592009,127.558837" id="Path-79"></path>
        </g>
        <path d="M181.241058,153 L157,153 L188.486036,60 L218.513964,60 L250,153 L225.758942,153 L219.607545,133.473633 L187.392455,133.473633 L181.241058,153 Z M192.598076,116.303848 L213.598076,116.303848 L203.432471,83.3038476 L202.719095,83.3038476 L192.598076,116.303848 Z" id="A" fill="#3366CC" fill-rule="nonzero" transform="translate(203.500000, 106.500000) rotate(-330.000000) translate(-203.500000, -106.500000) "></path>
        <g id="arm-copy-4" transform="translate(314.833239, 182.732618) rotate(-329.000000) translate(-314.833239, -182.732618) translate(196.833239, 154.732618)">
            <path d="M169,12.1867168 L64.5255867,14.5368942 C64.5255867,14.5368942 38.6533364,0.293924123 36.3838532,0.0311149624 C34.1143701,-0.231694198 20.2523322,1.25606343 18,1.27917976 C15.7476678,1.30229608 9,3.27917976 12,6.27917976 C15,9.27917976 28.451814,7.12235683 28.451814,7.12235683 C28.451814,7.12235683 22.2576379,8.12682834 18,8.27917976 C13.7423621,8.43153117 7,10.2791798 6,11.2791798 C5,12.2791798 2.6908933,14.5356877 5,17.2791798 C7.3091067,20.0226718 10.0523609,16.5535169 14,15.2791798 C17.9476391,14.0048426 21.6134118,13.280923 21.6134118,13.280923 C21.6134118,13.280923 7.85041029,19.2016743 4,20.2791798 C0.149589712,21.3566852 -1.63791203e-12,29.2791798 2,29.2791798 C4,29.2791798 9,25.2791798 13,23.2791798 C17,21.2791798 23.3140547,21.176528 23.3140547,21.176528 C23.3140547,21.176528 16.3546483,21.4775454 11.7049518,25.3672069 C7.05525531,29.2568684 1.32619796,33.6951745 1.32619796,33.6951745 C1.32619796,33.6951745 -0.567607229,37.0708809 2.35598778,38.7088114 C5.27958279,40.3467419 7.87811658,37.6181113 13.8697335,34.1155551 C19.8613504,30.612999 22.589031,29.6485498 28.2960593,28.8249462 C34.0030875,28.0013426 39.6510908,31.1919149 39.6510908,31.1919149 C39.6510908,31.1919149 39.1989211,39.8077746 33.6894438,42.3746361 C28.1799665,44.9414977 24.3125288,46.5228395 24.3125288,46.5228395 C24.3125288,46.5228395 17.7211381,44.596389 15.8777945,45.5701061 C14.0344509,46.5438231 14.5480459,48.8787631 15.8777943,51.3510398 C17.2075426,53.8233164 22.9685773,55.5294131 26.8131232,55.2490614 C30.6576692,54.9687098 48.3207932,51.7120573 57.5216871,44.0151357 C66.7225811,36.3182142 69.893072,35.056104 69.893072,35.056104 L169,35.2909101 L169,12.1867168 Z" id="Path-11" fill="#D7A57A" transform="translate(84.861497, 27.639590) scale(1, -1) translate(-84.861497, -27.639590) "></path>
            <g id="Rectangle-37">
                <use fill="#FFB50D" xlink:href="#path-1"></use>
                <use fill-opacity="0.5" fill="url(#pattern-2)" style="mix-blend-mode: multiply;" xlink:href="#path-1"></use>
            </g>
        </g>
        <polyline id="Path" stroke="#72777D" stroke-width="18" transform="translate(119.011851, 100.500000) rotate(-30.000000) translate(-119.011851, -100.500000) " points="119.011851 134 90 117.25 90 83.75 119.011851 67 148.023702 83.75 148.023702 117.25"></polyline>
    </g>
</svg>
`, AE = `<svg  width="375" height="200" viewBox="0 0 375 200"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>illustration-sections</title>
    <defs>
        <rect id="path-1" x="0" y="0" width="137" height="174"></rect>
        <filter x="-3.6%" y="-2.3%" width="107.3%" height="105.7%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-3" x="0.17674259" y="0.678736183" width="75" height="5"></rect>
        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-4">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-5" x="1.05473569" y="20.5842412" width="75" height="5"></rect>
        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-6">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-7" x="0.745148663" y="10.1485258" width="75" height="5"></rect>
        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-8">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-9" x="0.526966096" y="31.3803116" width="33" height="5"></rect>
        <filter x="-12.1%" y="-40.0%" width="124.2%" height="260.0%" filterUnits="objectBoundingBox" id="filter-10">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-11" x="0.17674259" y="0.678736183" width="75" height="5"></rect>
        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-12">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-13" x="1.05473569" y="20.5842412" width="75" height="5"></rect>
        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-14">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-15" x="0.745148663" y="10.1485258" width="75" height="5"></rect>
        <filter x="-5.3%" y="-40.0%" width="110.7%" height="260.0%" filterUnits="objectBoundingBox" id="filter-16">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <rect id="path-17" x="0.526966096" y="31.3803116" width="33" height="5"></rect>
        <filter x="-12.1%" y="-40.0%" width="124.2%" height="260.0%" filterUnits="objectBoundingBox" id="filter-18">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19958673 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M119.009619,18.1031535 C119.009619,17.0036819 119.909183,16.0733946 120.999588,16.0261337 L247.01965,10.5641077 C248.11868,10.516473 249.009619,11.3786871 249.009619,12.4772391 L249.009619,45.6663508 C249.009619,46.7705789 248.110054,47.6267431 247.01965,47.5794823 L120.999588,42.1174562 C119.900558,42.0698215 119.009619,41.1390215 119.009619,40.0404364 L119.009619,18.1031535 Z" id="path-19"></path>
        <pattern id="pattern-20" width="30" height="30" x="89.0096189" y="-19.4282032" patternUnits="userSpaceOnUse">
            <use xlink:href="#image-21"></use>
        </pattern>
        <image id="image-21" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAP1JREFUSA3t1V0OgyAMAOC1Hmu7giHhXQ/n9mw0XmG7xm6izpphBAENk/IyXgxJ06/lT2ia5p1lWZnn+fPiGG3bXsdxvJ8ZBzGSHikSqMkU+AynwBeYG9dgTnwDc+FWmAN3wrFx7LruRohtCCFeAFD0fV+dHYcxkh4p8v9ynfoj8L3Z2qnmfLM1mE72F38Mw1BIKfd+lcFxaF4jukKEImJV17X3qv0St+lYFUIo4VPy0td5aJwTpgJCk6rize86H9LEDFBz6pQ63lv2kLgpp38vQ5IeaQbW7cfYS7V65nfe4xT4cri48QWmpeDENZgT38BcuBXmwJ1wbDzZy/UBR/bTV8buNroAAAAASUVORK5CYII="></image>
        <path d="M113.1747,17.4559811 C113.1747,16.3565095 114.074265,15.4262222 115.164669,15.3789613 L241.184731,9.91693528 C242.283761,9.86930059 243.1747,10.7315147 243.1747,11.8300667 L243.1747,45.0191784 C243.1747,46.1234065 242.275136,46.9795707 241.184731,46.9323099 L115.164669,41.4702838 C114.065639,41.4226491 113.1747,40.4918491 113.1747,39.393264 L113.1747,17.4559811 Z" id="path-22"></path>
        <pattern id="pattern-23" width="30" height="30" x="83.1747" y="-20.0753756" patternUnits="userSpaceOnUse">
            <use xlink:href="#image-24"></use>
        </pattern>
        <image id="image-24" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAP1JREFUSA3t1V0OgyAMAOC1Hmu7giHhXQ/n9mw0XmG7xm6izpphBAENk/IyXgxJ06/lT2ia5p1lWZnn+fPiGG3bXsdxvJ8ZBzGSHikSqMkU+AynwBeYG9dgTnwDc+FWmAN3wrFx7LruRohtCCFeAFD0fV+dHYcxkh4p8v9ynfoj8L3Z2qnmfLM1mE72F38Mw1BIKfd+lcFxaF4jukKEImJV17X3qv0St+lYFUIo4VPy0td5aJwTpgJCk6rize86H9LEDFBz6pQ63lv2kLgpp38vQ5IeaQbW7cfYS7V65nfe4xT4cri48QWmpeDENZgT38BcuBXmwJ1wbDzZy/UBR/bTV8buNroAAAAASUVORK5CYII="></image>
    </defs>
    <g id="illustration-sections" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="paper-blank" transform="translate(119.000000, 13.000000)">
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                <rect stroke="#CCCCCC" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF" fill-rule="evenodd" x="0.5" y="0.5" width="136" height="173"></rect>
            </g>
        </g>
        <g id="paragraph" transform="translate(206.500000, 93.500000) rotate(-10.000000) translate(-206.500000, -93.500000) translate(168.000000, 75.000000)">
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-3"></use>
            </g>
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-5"></use>
            </g>
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-8)" xlink:href="#path-7"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-7"></use>
            </g>
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-10)" xlink:href="#path-9"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-9"></use>
            </g>
        </g>
        <g id="paragraph" transform="translate(183.500000, 161.500000) rotate(10.000000) translate(-183.500000, -161.500000) translate(145.000000, 143.000000)">
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-12)" xlink:href="#path-11"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-11"></use>
            </g>
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-14)" xlink:href="#path-13"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-13"></use>
            </g>
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-16)" xlink:href="#path-15"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-15"></use>
            </g>
            <g id="Rectangle-1">
                <use fill="black" fill-opacity="1" filter="url(#filter-18)" xlink:href="#path-17"></use>
                <use fill="#72777D" fill-rule="evenodd" xlink:href="#path-17"></use>
            </g>
        </g>
        <polygon id="Rectangle-Copy" fill="#C8CCD1" points="131 43 244 43 244 48 131 48"></polygon>
        <polygon id="Rectangle-Copy-2" fill="#C8CCD1" points="131 53 193 53 193 58 131 58"></polygon>
        <g id="arm-copy-3" transform="translate(56.625927, 185.496072) scale(-1, 1) rotate(30.000000) translate(-56.625927, -185.496072) translate(-68.374073, 155.496072)">
            <path d="M172,16.907537 L67.5255867,19.2577145 C67.5255867,19.2577145 41.6533364,5.01474437 39.3838532,4.75193521 C37.1143701,4.48912604 24.3528844,2.1824462 21.4239694,1.25709257 C18.4950543,0.331738948 15.513093,-1.46076951 15.6763016,2.23397625 C15.8395102,5.92872201 31.451814,11.8431771 31.451814,11.8431771 C31.451814,11.8431771 18.6374608,8.56771268 14.3798228,8.72006409 C10.1221849,8.87241551 3.15683142,10.5136571 3.15683142,10.5136571 C3.15683142,10.5136571 -1.68501113,12.8086486 0.624095573,15.5521407 C2.93320227,18.2956327 11.8935866,14.6092418 15.9476391,15.7256629 C20.0016915,16.8420839 24.6134118,18.0017432 24.6134118,18.0017432 C24.6134118,18.0017432 10.4209026,18.1597695 6.57049232,19.2372749 C2.72008204,20.3147804 0.884786525,23.0820714 2.61880922,25.1423062 C4.35283192,27.2025411 12.8816827,24.8622434 17.5059597,24.825123 C22.1302366,24.7880027 26.3140547,25.8973482 26.3140547,25.8973482 C26.3140547,25.8973482 19.3546483,26.1983657 14.7049518,30.0880272 C10.0552553,33.9776887 4.32619796,38.4159948 4.32619796,38.4159948 C4.32619796,38.4159948 2.43239277,41.7917011 5.35598778,43.4296316 C8.27958279,45.0675621 10.8781166,42.3389315 16.8697335,38.8363754 C22.8613504,35.3338192 25.589031,34.3693701 31.2960593,33.5457664 C37.0030875,32.7221628 42.6510908,35.9127352 42.6510908,35.9127352 C42.6510908,35.9127352 42.1989211,44.5285948 36.6894438,47.0954564 C31.1799665,49.6623179 27.3125288,51.2436598 27.3125288,51.2436598 C27.3125288,51.2436598 20.7211381,49.3172092 18.8777945,50.2909263 C17.0344509,51.2646434 17.5480459,53.5995834 18.8777943,56.07186 C20.2075426,58.5441366 25.9685773,60.2502333 29.8131232,59.9698817 C33.6576692,59.68953 51.3207932,56.4328775 60.5216871,48.735956 C69.7225811,41.0390344 72.893072,39.7769243 72.893072,39.7769243 L172,40.0117303" id="Path-11" fill="#BE6F41"></path>
            <g id="Rectangle-37">
                <use fill="#3366CC" xlink:href="#path-19"></use>
                <use fill-opacity="0.5" fill="url(#pattern-20)" style="mix-blend-mode: multiply;" xlink:href="#path-19"></use>
            </g>
        </g>
        <g id="arm-copy" transform="translate(321.614539, 14.504839) rotate(-29.000000) translate(-321.614539, -14.504839) translate(199.614539, -15.495161)">
            <path d="M172,16.907537 L67.5255867,19.2577145 C67.5255867,19.2577145 41.6533364,5.01474437 39.3838532,4.75193521 C37.1143701,4.48912604 24.3528844,2.1824462 21.4239694,1.25709257 C18.4950543,0.331738948 15.513093,-1.46076951 15.6763016,2.23397625 C15.8395102,5.92872201 31.451814,11.8431771 31.451814,11.8431771 C31.451814,11.8431771 18.6374608,8.56771268 14.3798228,8.72006409 C10.1221849,8.87241551 3.15683142,10.5136571 3.15683142,10.5136571 C3.15683142,10.5136571 -1.68501113,12.8086486 0.624095573,15.5521407 C2.93320227,18.2956327 11.8935866,14.6092418 15.9476391,15.7256629 C20.0016915,16.8420839 24.6134118,18.0017432 24.6134118,18.0017432 C24.6134118,18.0017432 10.4209026,18.1597695 6.57049232,19.2372749 C2.72008204,20.3147804 0.884786525,23.0820714 2.61880922,25.1423062 C4.35283192,27.2025411 12.8816827,24.8622434 17.5059597,24.825123 C22.1302366,24.7880027 26.3140547,25.8973482 26.3140547,25.8973482 C26.3140547,25.8973482 19.3546483,26.1983657 14.7049518,30.0880272 C10.0552553,33.9776887 4.32619796,38.4159948 4.32619796,38.4159948 C4.32619796,38.4159948 2.43239277,41.7917011 5.35598778,43.4296316 C8.27958279,45.0675621 10.8781166,42.3389315 16.8697335,38.8363754 C22.8613504,35.3338192 25.589031,34.3693701 31.2960593,33.5457664 C37.0030875,32.7221628 42.6510908,35.9127352 42.6510908,35.9127352 C42.6510908,35.9127352 42.1989211,44.5285948 36.6894438,47.0954564 C31.1799665,49.6623179 27.3125288,51.2436598 27.3125288,51.2436598 C27.3125288,51.2436598 20.7211381,49.3172092 18.8777945,50.2909263 C17.0344509,51.2646434 17.5480459,53.5995834 18.8777943,56.07186 C20.2075426,58.5441366 25.9685773,60.2502333 29.8131232,59.9698817 C33.6576692,59.68953 51.3207932,56.4328775 60.5216871,48.735956 C69.7225811,41.0390344 72.893072,39.7769243 72.893072,39.7769243 L172,40.0117303" id="Path-11" fill="#D7A57A"></path>
            <g id="Rectangle-37">
                <use fill="#FFB50D" xlink:href="#path-22"></use>
                <use fill-opacity="0.5" fill="url(#pattern-23)" style="mix-blend-mode: multiply;" xlink:href="#path-22"></use>
            </g>
        </g>
        <rect id="Rectangle" fill="#C8CCD1" x="131" y="25" width="42" height="10"></rect>
    </g>
</svg>`;
const kE = {
  name: "SxQuickTutorial",
  components: {
    MwButton: be,
    MwRow: Se
  },
  data: () => ({
    mwIconArrowForward: Ln,
    totalSteps: 2,
    activeStep: 1,
    tutorialSvgMT: EE,
    tutorialSvgSections: AE
  }),
  methods: {
    goToNextStep() {
      this.activeStep < this.totalSteps && this.activeStep++;
    },
    isActiveStep(e) {
      return e === this.activeStep;
    },
    completeTutorial() {
      this.$router.push({ name: "sx-sentence-selector" });
    }
  }
}, TE = { class: "sx-quick-tutorial" }, DE = { class: "sx-quick-tutorial__main-point py-9 px-6" }, LE = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, PE = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, NE = { class: "sx-quick-tutorial__illustration" }, FE = ["innerHTML"], ME = ["innerHTML"], OE = { class: "sx-quick-tutorial__step-indicator py-3" }, IE = ["onClick"], BE = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, $E = {
  key: "secondary-point-1",
  class: "ma-0"
}, UE = {
  key: "secondary-point-2",
  class: "ma-0"
}, RE = { class: "sx-quick-tutorial__action-button pt-4 pb-6" };
function VE(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-row"), l = Ee("i18n");
  return _(), D("section", TE, [
    p(r, {
      direction: "column",
      class: "sx-quick-tutorial__body-container ma-0"
    }, {
      default: y(() => [
        w("section", DE, [
          p(bn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: y(() => [
              a.isActiveStep(1) ? H((_(), D("h2", LE, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-1"]
              ]) : a.isActiveStep(2) ? H((_(), D("h2", PE, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-2"]
              ]) : ie("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("section", NE, [
          p(bn, { name: "mw-ui-animation-slide-left" }, {
            default: y(() => [
              a.isActiveStep(1) ? (_(), D("div", {
                key: "illustration-1",
                innerHTML: e.tutorialSvgSections
              }, null, 8, FE)) : a.isActiveStep(2) ? (_(), D("div", {
                key: "illustration-2",
                innerHTML: e.tutorialSvgMT
              }, null, 8, ME)) : ie("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("div", OE, [
          (_(!0), D(Ae, null, et(e.totalSteps, (d) => (_(), D("span", {
            key: `dot-${d}`,
            class: _e(["dot mx-1", { "dot-active": a.isActiveStep(d) }]),
            role: "button",
            onClick: (c) => e.activeStep = d
          }, null, 10, IE))), 128))
        ]),
        w("section", BE, [
          p(bn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: y(() => [
              a.isActiveStep(1) ? H((_(), D("h3", $E, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-1"]
              ]) : a.isActiveStep(2) ? H((_(), D("h3", UE, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-2"]
              ]) : ie("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("div", RE, [
          p(bn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: y(() => [
              a.isActiveStep(1) ? (_(), N(i, {
                key: "quick-tutorial-action-button-1",
                class: "px-8 mx-4",
                icon: e.mwIconArrowForward,
                progressive: !0,
                onClick: a.goToNextStep
              }, null, 8, ["icon", "onClick"])) : a.isActiveStep(2) ? (_(), N(i, {
                key: "quick-tutorial-action-button-2",
                class: "mx-4",
                label: e.$i18n("sx-quick-tutorial-translate-button-label"),
                progressive: !0,
                onClick: a.completeTutorial
              }, null, 8, ["label", "onClick"])) : ie("", !0)
            ], void 0, !0),
            _: 1
          })
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const zE = /* @__PURE__ */ q(kE, [["render", VE]]);
const jE = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: zE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function HE(e, t, n, o, s, a) {
  const i = v("sx-quick-tutorial");
  return _(), D("main", {
    class: _e(["sx-quick-tutorial-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const qE = /* @__PURE__ */ q(jE, [["render", HE]]);
function GE(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = Ie.getPageUrl(t, o.title), o.target = "_blank";
}
const WE = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: Eh },
  props: {
    originalContent: {
      type: String,
      required: !0
    },
    language: {
      type: String,
      required: !0
    },
    dir: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Q(null), n = Q(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return pt(() => {
      n.value = 2 * o(), GE(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, KE = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, XE = { class: "sx-editor__original-content-panel__header mb-2" }, YE = ["lang", "dir", "innerHTML"];
function JE(e, t, n, o, s, a) {
  const i = v("mw-expandable-content"), r = Ee("i18n");
  return _(), D("section", KE, [
    H(w("h5", XE, null, 512), [
      [r, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    p(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: y(() => [
        w("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, YE)
      ], void 0),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const ZE = /* @__PURE__ */ q(WE, [["render", JE]]), QE = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const e8 = {
  name: "EditCompleteFeedback",
  props: {
    showFeedback: {
      type: Boolean,
      required: !0
    },
    editedTranslation: {
      type: String,
      default: null
    },
    proposedTranslation: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const { targetLanguage: t } = de(te()), n = b(
      () => An.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = b(() => {
      const a = An.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = b(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: QE,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, t8 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, n8 = { class: "sx-editor__feedback-overlay-content px-4" }, o8 = ["innerHTML"], s8 = { class: "sx-editor__feedback-overlay-content__title" }, a8 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function i8(e, t, n, o, s, a) {
  const i = Ee("i18n"), r = Ee("i18n-html");
  return n.showFeedback ? (_(), D("div", t8, [
    w("div", n8, [
      w("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, o8),
      H(w("h2", s8, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      H(w("p", a8, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      H(w("p", {
        class: _e(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [r, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : ie("", !0);
}
const r8 = /* @__PURE__ */ q(e8, [["render", i8]]);
const l8 = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: r8,
    MwRow: Se,
    SxEditorOriginalContent: ZE,
    VisualEditor: Vy,
    MwSpinner: on
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Q(!1), n = mt(), o = te(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: r, content: l, originalContent: d, title: c } = history.state, u = Q(null), g = Q(!1), f = Wt(), { targetLanguage: m, sourceLanguage: C } = de(o), x = b(
      () => An.calculateScore(
        u.value,
        l,
        m.value
      )
    ), E = (L) => W(this, null, function* () {
      u.value = L, g.value = !0;
      const I = new Promise((J) => setTimeout(J, 2e3));
      let V = Promise.resolve();
      i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        L
      ) : (x.value === 0 && r && f({
        event_type: "editor_segment_add",
        translation_source_language: C.value,
        translation_target_language: m.value
      }), V = o.dispatch(
        "application/applyEditedTranslationToSelectedTranslationUnit",
        L
      )), yield Promise.all([I, V]), g.value = !1, a();
    });
    return {
      closeEditor: a,
      content: l,
      editedTranslation: u,
      editorReady: t,
      getDir: Me.getDir,
      sourceLanguage: C,
      targetLanguage: m,
      onEditorReady: s,
      onEditCompleted: E,
      originalContent: d,
      showFeedback: g,
      title: c
    };
  }
}, c8 = { class: "sx-editor__editing-surface-container grow" };
function u8(e, t, n, o, s, a) {
  const i = v("sx-editor-original-content"), r = v("mw-spinner"), l = v("edit-complete-feedback"), d = v("visual-editor"), c = v("mw-row");
  return _(), N(c, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: y(() => [
      o.originalContent ? (_(), N(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : ie("", !0),
      o.editorReady ? ie("", !0) : (_(), N(r, { key: 1 })),
      w("div", c8, [
        p(l, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        p(d, {
          content: o.content,
          language: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          title: o.title,
          onReady: o.onEditorReady,
          onClose: o.closeEditor,
          onEditCompleted: o.onEditCompleted
        }, null, 8, ["content", "language", "dir", "title", "onReady", "onClose", "onEditCompleted"])
      ])
    ], void 0),
    _: 1
  });
}
const d8 = /* @__PURE__ */ q(l8, [["render", u8]]);
const g8 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: d8
  },
  beforeRouteEnter(e, t, n) {
    n((o) => {
      o.fromRoute = t.name;
    });
  },
  data: () => ({
    fromRoute: ""
  }),
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
};
function f8(e, t, n, o, s, a) {
  const i = v("sx-editor");
  return _(), D("main", {
    class: _e(["sx-editor-view", a.classes])
  }, [
    p(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const p8 = /* @__PURE__ */ q(g8, [["render", f8]]);
const m8 = {
  name: "SxPublisherHeader",
  components: { MwCol: xe, MwButton: be, MwRow: Se },
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup() {
    const e = mt();
    return {
      mwIconCheck: Sn,
      mwIconClose: Mt,
      onClose: () => e.push({ name: "sx-sentence-selector" })
    };
  }
};
function h8(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-col"), l = v("mw-row"), d = Ee("i18n");
  return _(), N(l, { class: "ma-0 sx-publisher__header" }, {
    default: y(() => [
      p(r, { shrink: "" }, {
        default: y(() => [
          p(i, {
            icon: o.mwIconClose,
            type: "icon",
            onClick: o.onClose
          }, null, 8, ["icon", "onClick"])
        ], void 0, !0),
        _: 1
      }),
      H(p(r, {
        grow: "",
        tag: "h5",
        class: "ma-0"
      }, null, 512), [
        [d, void 0, "cx-sx-publisher-header-title"]
      ]),
      p(r, { shrink: "" }, {
        default: y(() => [
          p(i, {
            progressive: "",
            type: "button",
            icon: o.mwIconCheck,
            disabled: n.isPublishingDisabled,
            onClick: t[0] || (t[0] = (c) => e.$emit("publish-translation"))
          }, null, 8, ["icon", "disabled"])
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  });
}
const _8 = /* @__PURE__ */ q(m8, [["render", h8]]), v8 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-launching</title>
    <defs>
        <path d="M52.8,74.8 C52.8,79.64 44,83.6 44,83.6 C44,83.6 35.2,79.64 35.2,74.8 L52.8,74.8 Z M44,30.8 C40.3939316,30.707512 37.49251,27.806064 37.4,24.2 C37.4,20.554908 40.3549256,17.6 44,17.6 C47.645092,17.6 50.6,20.554908 50.6,24.2 C50.507468,27.806064 47.606064,30.707512 44,30.8 Z M58.52,51.48 C62.04,34.76 55.88,4.4 44,4.4 C32.12,4.4 25.52,33.88 29.04,50.6 L22,66 L33.88,66 L35.2,70.4 L52.8,70.4 C53.68,69.08 53.24,68.2 54.12,66 L66,66 L58.52,51.48 Z" id="path-1"></path>
    </defs>
    <g id="publishing-launching" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle id="Oval" cx="68" cy="68" r="68" fill="#EAF3FF"></circle>
        <g id="🔣-Icon/Wikimedia-logos/logoWikimediaDiscovery" transform="translate(24.000000, 24.000000)">
            <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
            </mask>
            <use id="Mask-2" fill="#000000" fill-rule="evenodd" xlink:href="#path-1"></use>
            <g id="🎨-Color/Accent50-#36c" mask="url(#mask-2)" fill="#3366CC" fill-rule="evenodd">
                <rect id="Rectangle-1" x="0" y="0" width="105.6" height="105.6"></rect>
            </g>
        </g>
    </g>
</svg>`, y8 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-success</title>
    <defs>
        <polygon id="path-1" points="29.5385666 61.8098361 10.7522184 42.6688525 4.4 49.1409836 29.5385666 74.8 83.6 19.7180328 77.2477816 13.2"></polygon>
    </defs>
    <g id="publishing-success" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" fill="#D5FDF4">
            <circle id="Oval" cx="68" cy="68" r="68"></circle>
        </g>
        <g id="check" transform="translate(24.000000, 24.000000)">
            <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
            </mask>
            <use id="Mask" fill="#000000" fill-rule="evenodd" xlink:href="#path-1"></use>
            <g id="green500-#14866d" mask="url(#mask-2)" fill="#14866d" fill-rule="evenodd">
                <rect id="Rectangle-1" x="0" y="0" width="88" height="88"></rect>
            </g>
        </g>
    </g>
</svg>`, Fl = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const b8 = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: Ot, MwRow: Se, MwCol: xe },
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    status: {
      type: String,
      required: !0,
      validator: (e) => ["pending", "success", "failure", "warning"].includes(e)
    }
  },
  data: (e) => ({
    animations: {
      pending: {
        svg: v8,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: y8,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Fl,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Fl,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }
  }),
  computed: {
    animationSvg: (e) => e.animations[e.status].svg,
    animationTitle: (e) => e.animations[e.status].title,
    animationSubtitle: (e) => e.animations[e.status].subtitle
  }
}, S8 = ["innerHTML"], w8 = ["textContent"], C8 = ["textContent"];
function x8(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-row"), l = v("mw-dialog");
  return n.active ? (_(), N(l, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: y(() => [
      p(r, { class: "ma-4" }, {
        default: y(() => [
          p(i, null, {
            default: y(() => [
              w("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, S8),
              w("h2", {
                textContent: ae(a.animationTitle)
              }, null, 8, w8),
              w("p", {
                class: "ma-0",
                textContent: ae(a.animationSubtitle)
              }, null, 8, C8)
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : ie("", !0);
}
const E8 = /* @__PURE__ */ q(b8, [["render", x8]]);
const A8 = {
  name: "SxPublisherCaptchaDialog",
  components: { MwInput: zi, MwDialog: Ot, MwRow: Se, MwCol: xe, MwButton: be, MwDivider: es },
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Nu,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = Q(""), o = () => t("close"), s = () => t("publish", n.value), a = Ke("breakpoints"), i = b(() => a.value.mobile);
    return {
      captchaInput: n,
      close: o,
      fullscreen: i,
      mwIconCheck: Sn,
      mwIconClose: Mt,
      publish: s
    };
  }
}, k8 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, T8 = ["src"], D8 = ["textContent"], L8 = /* @__PURE__ */ w("p", { class: "mt-0" }, null, -1);
function P8(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-col"), l = v("mw-row"), d = v("mw-divider"), c = v("mw-input"), u = v("mw-dialog"), g = Ee("i18n");
  return n.active && n.captchaDetails ? (_(), N(u, {
    key: 0,
    "overlay-opacity": 0.65,
    fullscreen: o.fullscreen,
    class: "sx-publisher__captcha-dialog"
  }, {
    header: y(() => [
      p(l, {
        class: "mw-ui-dialog__header ma-0",
        align: "stretch"
      }, {
        default: y(() => [
          p(r, { shrink: "" }, {
            default: y(() => [
              p(i, {
                class: "py-4 ps-6 pe-4",
                type: "icon",
                icon: o.mwIconClose,
                onClick: o.close
              }, null, 8, ["icon", "onClick"])
            ], void 0, !0),
            _: 1
          }),
          H(p(r, {
            grow: "",
            class: "sx-publisher__captcha-dialog__header-title items-center justify-start"
          }, null, 512), [
            [g, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
          ]),
          p(r, {
            shrink: "",
            class: "justify-center"
          }, {
            default: y(() => [
              H(p(i, {
                progressive: "",
                onClick: o.publish
              }, null, 8, ["onClick"]), [
                [g, void 0, "cx-sx-publisher-captcha-dialog-publish-button"]
              ])
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      }),
      p(d)
    ]),
    default: y(() => [
      w("div", k8, [
        n.captchaDetails.type === "image" ? (_(), D("img", {
          key: 0,
          class: "sx-publisher__captcha-dialog__puzzle-image",
          src: n.captchaDetails.url
        }, null, 8, T8)) : (_(), D("p", {
          key: 1,
          textContent: ae(n.captchaDetails.question)
        }, null, 8, D8)),
        L8,
        p(l, { class: "ma-0" }, {
          default: y(() => [
            p(r, null, {
              default: y(() => [
                p(c, {
                  value: o.captchaInput,
                  "onUpdate:value": t[0] || (t[0] = (f) => o.captchaInput = f),
                  class: "pa-1"
                }, null, 8, ["value"])
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        })
      ])
    ], void 0),
    _: 1
  }, 8, ["fullscreen"])) : ie("", !0);
}
const N8 = /* @__PURE__ */ q(A8, [["render", P8]]);
const F8 = {
  name: "SxPublishOptionSelector",
  components: {
    MwButton: be,
    MwRadioGroup: gu,
    MwRadio: js,
    MwDivider: es,
    MwDialog: Ot
  },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = te(), o = b(
      () => n.state.application.publishTarget
    ), s = b(() => n.state.translator.isAnon), a = wt(), { currentSourceSection: i } = de(n), r = b(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-label") : a.i18n("cx-sx-publisher-new-section-option-label")
    ), l = b(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-details") : a.i18n("cx-sx-publisher-new-section-option-details")
    ), d = b(() => [
      {
        label: r.value,
        details: l.value,
        value: "NEW_SECTION",
        disabled: !1
      },
      {
        label: a.i18n("cx-sx-publisher-sandbox-option-label"),
        details: a.i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: s.value
      }
    ]), c = (f) => f === d.value.length - 1 ? "mb-1" : "mb-4", u = () => t("update:active", !1);
    return {
      getMarginBottomClassByOptionIndex: c,
      isAnon: s,
      mwIconArrowPrevious: Ui,
      onPublishOptionsClose: u,
      publishOptions: d,
      selectedOption: o,
      updateOption: (f) => {
        const m = f.target.value;
        n.commit("application/setPublishTarget", m), u();
      }
    };
  }
}, M8 = { class: "mw-ui-dialog__header" }, O8 = { class: "row ma-0 pa-4" }, I8 = { class: "col shrink justify-center" }, B8 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, $8 = { class: "mb-0" }, U8 = { class: "pa-4" }, R8 = ["textContent"];
function V8(e, t, n, o, s, a) {
  const i = v("mw-button"), r = v("mw-divider"), l = v("mw-radio"), d = v("mw-radio-group"), c = v("mw-dialog"), u = Ee("i18n");
  return _(), N(c, {
    value: n.active,
    class: "sx-publisher__publish-options",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (g) => e.$emit("update:active", g)),
    onClose: o.onPublishOptionsClose
  }, {
    header: y(() => [
      w("div", M8, [
        w("div", O8, [
          w("div", I8, [
            p(i, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconArrowPrevious,
              onClick: o.onPublishOptionsClose
            }, null, 8, ["icon", "onClick"])
          ]),
          w("div", B8, [
            H(w("h4", $8, null, 512), [
              [u, void 0, "cx-sx-publisher-preview-options-title"]
            ])
          ])
        ]),
        p(r)
      ])
    ]),
    default: y(() => [
      w("div", U8, [
        p(d, {
          value: o.selectedOption,
          name: "publish-options",
          onInput: o.updateOption
        }, {
          default: y(() => [
            (_(!0), D(Ae, null, et(o.publishOptions, (g, f) => (_(), D(Ae, {
              key: g.label
            }, [
              p(l, {
                class: "pa-0 my-1",
                label: g.label,
                "input-value": g.value,
                disabled: g.disabled
              }, null, 8, ["label", "input-value", "disabled"]),
              w("p", {
                class: _e(["complementary ms-7 mt-0", o.getMarginBottomClassByOptionIndex(f)]),
                textContent: ae(g.details)
              }, null, 10, R8)
            ], 64))), 128))
          ], void 0, !0),
          _: 1
        }, 8, ["value", "onInput"])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-color", "onClose"]);
}
const z8 = /* @__PURE__ */ q(F8, [["render", V8]]);
const j8 = {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton: be,
    MwCol: xe,
    MwRow: Se,
    MwMessage: eh,
    MwIcon: qe
  },
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = Q(0), n = Q(null);
    He(n, () => {
      var C;
      const m = (C = n.value) == null ? void 0 : C.$el;
      if (m instanceof HTMLElement) {
        const x = m.querySelector("a");
        x && x.setAttribute("target", "_blank");
      }
    });
    const o = b(
      () => {
        var m;
        return (m = e.publishFeedbackMessages) == null ? void 0 : m[t.value];
      }
    ), s = b(() => {
      var m;
      return ((m = o.value) == null ? void 0 : m.status) || "default";
    }), a = b(() => {
      switch (s.value) {
        case "warning":
          return fo;
        case "error":
          return ol;
        default:
          return oi;
      }
    }), i = b(() => s.value === "default"), r = b(
      () => i.value ? "notice" : s.value
    ), l = b(
      () => `sx-publisher__review-info--${r.value}`
    ), d = wt(), c = b(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.text;
    }), u = b(
      () => {
        var m;
        return ((m = o.value) == null ? void 0 : m.title) || d.i18n("cx-sx-publisher-review-info-error");
      }
    );
    return {
      goToNextMessage: () => {
        t.value = (t.value + 1) % e.publishFeedbackMessages.length;
      },
      goToPreviousMessage: () => {
        const m = e.publishFeedbackMessages.length;
        t.value = (t.value - 1 + m) % m;
      },
      isMessageInline: i,
      learnMoreContainer: n,
      messageText: c,
      messageTitle: u,
      messageType: r,
      mwIconAlert: fo,
      mwIconArrowForward: Ln,
      mwIconBlock: ol,
      mwIconEye: oi,
      mwIconPrevious: ia,
      reviewIcon: a,
      reviewInfoClass: l,
      status: s
    };
  }
}, H8 = { class: "sx-publisher__review-info__content" }, q8 = {
  key: 0,
  class: "complementary ma-0"
}, G8 = ["textContent"], W8 = ["textContent"];
function K8(e, t, n, o, s, a) {
  const i = v("mw-icon"), r = v("mw-col"), l = v("mw-button"), d = v("mw-row"), c = v("mw-message"), u = Ee("i18n-html");
  return _(), N(c, {
    type: o.messageType,
    class: _e(["sx-publisher__review-info ma-0 pa-4", o.reviewInfoClass]),
    inline: o.isMessageInline
  }, {
    icon: y(() => [
      p(i, {
        icon: o.reviewIcon,
        class: "shrink mw-ui-message__icon items-start"
      }, null, 8, ["icon"])
    ]),
    default: y(() => [
      w("div", H8, [
        o.status === "default" ? H((_(), D("p", q8, null, 512)), [
          [u, void 0, "cx-sx-publisher-review-info"]
        ]) : (_(), D(Ae, { key: 1 }, [
          w("h5", {
            textContent: ae(o.messageTitle)
          }, null, 8, G8),
          w("p", {
            textContent: ae(o.messageText)
          }, null, 8, W8),
          p(d, {
            justify: "between",
            class: "ma-0"
          }, {
            default: y(() => [
              H(p(r, {
                ref: "learnMoreContainer",
                class: "sx-publisher__review-info__learn-more-anchor"
              }, null, 512), [
                [u, void 0, "cx-sx-publisher-review-info-learn-more"]
              ]),
              n.publishFeedbackMessages.length > 1 ? (_(), N(r, {
                key: 0,
                class: "sx-publisher__review-info__navigation-buttons justify-end",
                align: "center"
              }, {
                default: y(() => [
                  p(l, {
                    class: "pa-0 pe-1",
                    type: "icon",
                    icon: o.mwIconPrevious,
                    onClick: o.goToPreviousMessage
                  }, null, 8, ["icon", "onClick"]),
                  p(l, {
                    class: "pa-0 ps-1",
                    type: "icon",
                    icon: o.mwIconArrowForward,
                    onClick: o.goToNextMessage
                  }, null, 8, ["icon", "onClick"])
                ], void 0, !0),
                _: 1
              })) : ie("", !0)
            ], void 0, !0),
            _: 1
          })
        ], 64))
      ])
    ], void 0),
    _: 1
  }, 8, ["type", "class", "inline"]);
}
const X8 = /* @__PURE__ */ q(j8, [["render", K8]]), Y8 = (e, t, n, o) => W(void 0, null, function* () {
  if (n.value) {
    t.value = !1;
    return;
  }
  const {
    currentSourceSection: s,
    sourceLanguage: a,
    targetLanguage: i,
    currentSourcePage: r
  } = de(e), l = e.getters["application/getTargetPageTitleForPublishing"], d = e.getters["application/isSandboxTarget"], c = r.value.title, u = new mw.Title(c), g = mw.config.get("wgNamespaceIds");
  if (s.value.isLeadSection && !d && u.getNamespaceId() !== g.user)
    try {
      yield la.addWikibaseLink(
        a.value,
        i.value,
        c,
        l
      );
    } catch (f) {
      mw.log.error("Error while adding wikibase link", f);
    }
  if (!o) {
    const f = "[CX] Target URL is empty after successful publishing";
    throw mw.log.error(f), new Error(f);
  }
  location.href = o;
}), J8 = (e) => {
  const t = Q(!1), n = Q("pending"), o = Q(!1), s = Q(!1), a = Q(null), i = Q([]), r = b(
    () => i.value.some((u) => u.isError)
  );
  return He(o, (u) => {
    u || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (u = null) => W(void 0, null, function* () {
      var C;
      n.value = "pending", t.value = !0;
      let g;
      try {
        g = yield e.dispatch("translator/publishTranslation", {
          captchaId: (C = a.value) == null ? void 0 : C.id,
          captchaAnswer: u
        });
      } catch (x) {
        if (x instanceof yo) {
          e.commit("application/setIsLoginDialogOn", !0);
          return;
        }
        throw x;
      }
      const { publishFeedbackMessage: f, targetUrl: m } = g;
      if (f && f.type === "captcha") {
        a.value = f.details, t.value = !1, s.value = !0;
        return;
      } else
        f && (i.value.push(f), i.value.sort((x, E) => +E.isError - +x.isError));
      a.value = null, n.value = r.value ? "failure" : "success", setTimeout(
        () => Y8(
          e,
          t,
          r,
          m
        ),
        1e3
      );
    }),
    isPublishDialogActive: t,
    isPublishingDisabled: r,
    onCaptchaDialogClose: () => {
      s.value = !1, a.value = null;
    },
    publishOptionsOn: o,
    publishFeedbackMessages: i,
    publishStatus: n
  };
}, Z8 = (e, t) => {
  const {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = de(e), a = b(
    () => s.value.subSections.reduce(
      (r, l) => l.isTranslated ? `${r}<section rel="cx:Section" id="${l.targetSectionId}">${l.translatedContent}</section>` : r,
      ""
    )
  );
  return { editTranslation: () => {
    var r, l;
    return t.push({
      name: "sx-editor",
      state: {
        content: a.value,
        title: ((r = o.value) == null ? void 0 : r.title) || ((l = n.value) == null ? void 0 : l.title),
        isFinalEdit: !0
      }
    });
  } };
};
const Q8 = {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo: X8,
    SxPublishOptionSelector: z8,
    SxPublisherAnimationDialog: E8,
    SxPublisherCaptchaDialog: N8,
    MwButton: be,
    SxPublisherHeader: _8,
    MwRow: Se,
    MwCol: xe
  },
  setup() {
    const e = te(), { currentSourceSection: t } = de(e), n = b(() => {
      var x;
      return (x = t.value) == null ? void 0 : x.title;
    }), o = wt(), s = b(() => e.getters["application/isSandboxTarget"] ? o.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : t.value.isLeadSection ? o.i18n(
      "cx-sx-publisher-publish-panel-lead-section-result"
    ) : o.i18n(
      "cx-sx-publisher-publish-panel-new-section-result"
    )), {
      captchaDetails: a,
      captchaDialogOn: i,
      configureTranslationOptions: r,
      doPublish: l,
      isPublishDialogActive: d,
      isPublishingDisabled: c,
      onCaptchaDialogClose: u,
      publishOptionsOn: g,
      publishFeedbackMessages: f,
      publishStatus: m
    } = J8(e);
    pt(() => W(this, null, function* () {
      const x = yield e.dispatch("translator/validateMT");
      x && f.value.push(x);
    }));
    const { editTranslation: C } = Z8(e, mt());
    return {
      captchaDetails: a,
      captchaDialogOn: i,
      configureTranslationOptions: r,
      currentPageSection: t,
      doPublish: l,
      editTranslation: C,
      isPublishDialogActive: d,
      isPublishingDisabled: c,
      mwIconEdit: Zn,
      mwIconSettings: Um,
      onCaptchaDialogClose: u,
      panelResult: s,
      publishFeedbackMessages: f,
      publishOptionsOn: g,
      publishStatus: m,
      translatedTitle: n
    };
  }
}, e2 = { class: "sx-publisher" }, t2 = { class: "sx-publisher__publish-panel pa-4" }, n2 = { class: "mb-2" }, o2 = ["innerHTML"], s2 = { class: "sx-publisher__section-preview pa-5" }, a2 = ["innerHTML"];
function i2(e, t, n, o, s, a) {
  const i = v("sx-publisher-header"), r = v("mw-button"), l = v("mw-col"), d = v("mw-row"), c = v("sx-publisher-review-info"), u = v("sx-publish-option-selector"), g = v("sx-publisher-captcha-dialog"), f = v("sx-publisher-animation-dialog"), m = Ee("i18n");
  return _(), D("section", e2, [
    p(i, {
      "is-publishing-disabled": o.isPublishingDisabled,
      onPublishTranslation: o.doPublish
    }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
    w("div", t2, [
      H(w("h5", n2, null, 512), [
        [m, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
      ]),
      w("h6", {
        class: "mb-2",
        innerHTML: o.panelResult
      }, null, 8, o2),
      p(d, {
        justify: "end",
        class: "ma-0"
      }, {
        default: y(() => [
          p(l, { shrink: "" }, {
            default: y(() => [
              p(r, {
                type: "icon",
                icon: o.mwIconSettings,
                class: "pa-0 mx-1",
                onClick: o.configureTranslationOptions
              }, null, 8, ["icon", "onClick"])
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ]),
    p(c, { "publish-feedback-messages": o.publishFeedbackMessages }, null, 8, ["publish-feedback-messages"]),
    w("section", s2, [
      p(d, { class: "pb-5 ma-0" }, {
        default: y(() => [
          p(l, {
            tag: "h2",
            grow: "",
            class: "sx-publisher__section-preview__title ma-0",
            innerHTML: o.translatedTitle
          }, null, 8, ["innerHTML"]),
          p(l, { shrink: "" }, {
            default: y(() => [
              p(r, {
                icon: o.mwIconEdit,
                type: "icon",
                onClick: o.editTranslation
              }, null, 8, ["icon", "onClick"])
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      }),
      w("div", {
        innerHTML: o.currentPageSection.translationHtml
      }, null, 8, a2)
    ]),
    p(u, {
      active: o.publishOptionsOn,
      "onUpdate:active": t[0] || (t[0] = (C) => o.publishOptionsOn = C)
    }, null, 8, ["active"]),
    p(g, {
      active: o.captchaDialogOn,
      "captcha-details": o.captchaDetails,
      onClose: o.onCaptchaDialogClose,
      onPublish: t[1] || (t[1] = (C) => o.doPublish(C))
    }, null, 8, ["active", "captcha-details", "onClose"]),
    p(f, {
      active: o.isPublishDialogActive,
      status: o.publishStatus
    }, null, 8, ["active", "status"])
  ]);
}
const r2 = /* @__PURE__ */ q(Q8, [["render", i2]]);
const l2 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: r2
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function c2(e, t, n, o, s, a) {
  const i = v("sx-publisher");
  return _(), D("main", {
    class: _e(["sx-publisher-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const u2 = /* @__PURE__ */ q(l2, [["render", c2]]);
const d2 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: ji, MwIcon: qe, MwRow: Se, MwCol: xe },
  props: {
    suggestion: {
      type: bo,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Mm, mwIconLanguage: cu, mwIconArticle: Vi, getDir: Me.getDir };
  }
}, g2 = ["textContent"], f2 = ["textContent"], p2 = ["textContent"];
function m2(e, t, n, o, s, a) {
  const i = v("mw-thumbnail"), r = v("mw-col"), l = v("mw-icon"), d = v("mw-row");
  return _(), N(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: y(() => [
      p(r, { shrink: "" }, {
        default: y(() => [
          p(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ], void 0, !0),
        _: 1
      }),
      p(r, { class: "ms-4" }, {
        default: y(() => [
          p(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: y(() => [
              p(r, {
                shrink: "",
                class: "mb-1"
              }, {
                default: y(() => [
                  w("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: ae(n.suggestion.title)
                  }, null, 8, g2)
                ], void 0, !0),
                _: 1
              }),
              p(r, {
                shrink: "",
                class: "mb-1"
              }, {
                default: y(() => [
                  w("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: ae(n.suggestion.description)
                  }, null, 8, f2)
                ], void 0, !0),
                _: 1
              }),
              p(r, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: y(() => [
                  p(l, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  w("small", {
                    textContent: ae(n.suggestion.langLinksCount)
                  }, null, 8, p2)
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  }, 8, ["lang", "dir"]);
}
const Fd = /* @__PURE__ */ q(d2, [["render", m2]]), h2 = (e, t) => {
  const o = Q([]), s = Q(!1), a = b(
    () => o.value.slice(0, 4)
  ), i = Ji(() => W(void 0, null, function* () {
    try {
      o.value = yield ss.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return He(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const _2 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: Fd, MwCard: Gt, MwSpinner: on },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = de(
      te()
    ), o = b(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = h2(
      t,
      o
    );
    return {
      searchResultsLoading: s,
      /** @type {ComputedRef<Page[]>} */
      searchResultsSlice: a,
      sourceLanguageAutonym: n
    };
  }
}, v2 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function y2(e, t, n, o, s, a) {
  const i = v("mw-spinner"), r = v("sx-search-article-suggestion"), l = v("mw-card"), d = Ee("i18n");
  return _(), N(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: y(() => [
      o.searchResultsLoading ? (_(), N(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? H((_(), D("p", v2, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : ie("", !0),
      (_(!0), D(Ae, null, et(o.searchResultsSlice, (c) => (_(), N(r, {
        key: c.pageid,
        suggestion: c,
        onClick: (u) => e.$emit("suggestion-clicked", c)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const b2 = /* @__PURE__ */ q(_2, [["render", y2]]);
const S2 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: Fd, MwCard: Gt },
  props: {
    cardTitle: {
      type: String,
      required: !0
    },
    suggestions: {
      type: Array,
      required: !0
    }
  },
  emits: ["suggestion-clicked"],
  computed: lt({}, s_({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, w2 = ["textContent"];
function C2(e, t, n, o, s, a) {
  const i = v("sx-search-article-suggestion"), r = v("mw-card");
  return _(), N(r, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: y(() => [
      w("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: ae(n.cardTitle)
      }, null, 8, w2)
    ]),
    default: y(() => [
      (_(!0), D(Ae, null, et(n.suggestions, (l) => (_(), N(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const x2 = /* @__PURE__ */ q(S2, [["render", C2]]), E2 = (e, t) => b(() => {
  const o = {
    value: "other",
    props: {
      icon: ns,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, r) => s.findIndex((l) => l === i) === r
  ).map((i) => ({
    value: i,
    props: {
      label: Me.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), A2 = (e, t, n) => b(() => {
  const o = (navigator.language || "").split("-")[0], s = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((i) => i.split("-")[0]), a = [
    // User's current interface language
    mw.config.get("wgUserLanguage"),
    // Current wiki's content language
    mw.config.get("wgContentLanguage"),
    o,
    ...n.value,
    ...s
  ];
  return [...new Set(a)].filter(
    (i) => i !== e.value && i !== t.value && Me.getAutonym(i) !== i
  );
});
const k2 = {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard: x2,
    SearchResultsCard: b2,
    MwInput: zi,
    MwDialog: Ot,
    MwLanguageSelector: xd,
    MwButtonGroup: Qo,
    MwRow: Se,
    MwCol: xe,
    MwButton: be
  },
  setup() {
    const e = Q(""), t = Q(!1), n = Q(null), o = Q(!1), s = Q([]), a = te(), { sourceLanguage: i, targetLanguage: r } = de(a), { supportedLanguageCodes: l } = ls(), d = A2(
      i,
      r,
      s
    ), c = E2(
      i,
      d
    ), u = mt(), { fetchAllTranslations: g } = da();
    pt(() => W(this, null, function* () {
      var Z;
      yield _d()(), g();
      try {
        s.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (Le) {
      }
      (Z = n.value) == null || Z.focus();
    }));
    const f = () => {
      u.push({ name: "dashboard" });
    }, m = vd(), C = (De) => m(De, r.value), x = (De) => {
      if (De === "other") {
        o.value = !0;
        return;
      }
      C(De);
    };
    He(i, () => a.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const E = Wt();
    He(e, () => {
      t.value || (t.value = !0, E({
        event_type: "dashboard_search",
        translation_source_language: i.value,
        translation_target_language: r.value
      }));
    });
    const L = () => {
      o.value = !1;
    }, I = (De) => {
      o.value = !1, s.value.push(De), x(De);
    }, V = b(
      () => a.getters["mediawiki/getRecentlyEditedPages"]
    ), J = b(
      () => a.getters["mediawiki/getNearbyPages"]
    ), se = Ke("breakpoints"), M = b(() => se.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: O,
      startNearbySectionTranslation: fe,
      startSearchResultSectionTranslation: Te
    } = ir();
    return {
      supportedLanguageCodes: l,
      close: f,
      fullscreen: M,
      mwIconClose: Mt,
      mwIconSearch: iu,
      nearbyPages: J,
      onSourceLanguageDialogClose: L,
      onSourceLanguageSelected: I,
      recentlyEditedPages: V,
      searchInput: e,
      searchInputRef: n,
      sourceLanguage: i,
      sourceLanguageOptions: c,
      sourceLanguageSelectOn: o,
      startNearbySectionTranslation: fe,
      startRecentlyEditedSectionTranslation: O,
      startSearchResultSectionTranslation: Te,
      suggestedSourceLanguages: d,
      updateSelection: x
    };
  }
}, T2 = { class: "sx-article-search" }, D2 = { class: "mb-0" }, L2 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
};
function P2(e, t, n, o, s, a) {
  const i = v("mw-col"), r = v("mw-button"), l = v("mw-row"), d = v("mw-input"), c = v("mw-button-group"), u = v("article-suggestions-card"), g = v("search-results-card"), f = v("mw-language-selector"), m = v("mw-dialog"), C = Ee("i18n");
  return _(), D("section", T2, [
    p(l, {
      class: "sx-article-search__header ma-0 py-3",
      align: "stretch",
      justify: "start"
    }, {
      default: y(() => [
        p(i, {
          grow: "",
          class: "px-4",
          align: "center"
        }, {
          default: y(() => [
            H(w("h5", D2, null, 512), [
              [C, void 0, "cx-sx-article-search-header"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, {
          shrink: "",
          align: "start",
          class: "pe-4"
        }, {
          default: y(() => [
            p(r, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconClose,
              "icon-size": 20,
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    p(d, {
      ref: "searchInputRef",
      value: o.searchInput,
      "onUpdate:value": t[0] || (t[0] = (x) => o.searchInput = x),
      "icon-size": 20,
      icon: o.mwIconSearch,
      placeholder: e.$i18n("cx-sx-article-search-input-placeholder"),
      type: "search"
    }, null, 8, ["value", "icon", "placeholder"]),
    p(c, {
      class: "sx-article-search__language-button-group",
      items: o.sourceLanguageOptions,
      active: o.sourceLanguage,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"]),
    o.searchInput ? ie("", !0) : (_(), D(Ae, { key: 0 }, [
      o.recentlyEditedPages && o.recentlyEditedPages.length ? (_(), N(u, {
        key: 0,
        "card-title": e.$i18n("cx-sx-article-search-recently-edited-title"),
        suggestions: o.recentlyEditedPages,
        onSuggestionClicked: o.startRecentlyEditedSectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : o.nearbyPages && o.nearbyPages.length ? (_(), N(u, {
        key: 1,
        "card-title": e.$i18n("cx-sx-article-search-nearby-title"),
        suggestions: o.nearbyPages,
        onSuggestionClicked: o.startNearbySectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : H((_(), D("p", L2, null, 512)), [
        [C, void 0, "cx-sx-article-search-no-suggestions-message"]
      ])
    ], 64)),
    H(p(g, {
      "search-input": o.searchInput,
      onSuggestionClicked: o.startSearchResultSectionTranslation
    }, null, 8, ["search-input", "onSuggestionClicked"]), [
      [$i, !!o.searchInput]
    ]),
    p(m, {
      value: o.sourceLanguageSelectOn,
      "onUpdate:value": t[1] || (t[1] = (x) => o.sourceLanguageSelectOn = x),
      class: "sx-article-search-language-selector",
      animation: "slide-up",
      fullscreen: o.fullscreen,
      header: o.fullscreen,
      "overlay-opacity": 0,
      title: e.$i18n("sx-article-search-language-selector-dialog-title"),
      onClose: o.onSourceLanguageDialogClose
    }, {
      default: y(() => [
        p(f, {
          class: "sx-article-search-language-selector__widget col-12",
          languages: o.supportedLanguageCodes,
          suggestions: o.suggestedSourceLanguages,
          placeholder: e.$i18n("cx-sx-language-selector-placeholder"),
          onSelect: o.onSourceLanguageSelected,
          onClose: o.onSourceLanguageDialogClose
        }, null, 8, ["languages", "suggestions", "placeholder", "onSelect", "onClose"])
      ], void 0),
      _: 1
    }, 8, ["value", "fullscreen", "header", "title", "onClose"])
  ]);
}
const N2 = /* @__PURE__ */ q(k2, [["render", P2]]);
const F2 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: N2
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
};
function M2(e, t, n, o, s, a) {
  const i = v("sx-article-search");
  return _(), D("main", {
    class: _e(["sx-article-search-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const O2 = /* @__PURE__ */ q(F2, [["render", M2]]), Md = [
  {
    path: "",
    name: "dashboard",
    component: Nl,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: O2,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: pw,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: aC,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: XC,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: qE,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: xE,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: p8,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: u2,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Nl,
    meta: { workflowStep: 0 }
  }
], ur = Fv({
  history: N1(),
  routes: Md
});
ur.beforeEach((e, t, n) => {
  const o = te();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Lu.assertUser().catch((r) => {
    r instanceof yo && o.commit("application/setIsLoginDialogOn", !0);
  }), e.query.force) {
    n();
    return;
  }
  const s = t.meta.workflowStep, a = e.meta.workflowStep;
  if (isNaN(s) && a >= 1) {
    n({ name: "dashboard" });
    return;
  }
  if (Math.ceil(a) - Math.floor(s) > 1) {
    const r = Math.ceil(a) - 1, l = Md.find(
      (d) => d.meta.workflowStep === r
    );
    n({ name: l.name });
    return;
  }
  n();
});
ur.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const I2 = mw.config.get("wgUserLanguage"), B2 = "en", $2 = mw.messages.values || {}, Nn = eu(f_);
Nn.config.globalProperties.$incompleteVersion = !0;
const U2 = Ey();
Nn.use(U2);
Nn.use(ur);
Nn.use(Hu);
Nn.use(Nh);
Nn.use(Ph);
const R2 = ey({
  locale: I2,
  finalFallback: B2,
  messages: $2,
  wikilinks: !0
});
Nn.use(R2);
Nn.mount("#contenttranslation");
