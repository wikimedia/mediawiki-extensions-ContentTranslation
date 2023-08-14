/*@nomin*/
var fd = Object.defineProperty, pd = Object.defineProperties;
var md = Object.getOwnPropertyDescriptors;
var Yi = Object.getOwnPropertySymbols;
var hd = Object.prototype.hasOwnProperty, _d = Object.prototype.propertyIsEnumerable;
var Ji = (e, t, n) => t in e ? fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dt = (e, t) => {
  for (var n in t || (t = {}))
    hd.call(t, n) && Ji(e, n, t[n]);
  if (Yi)
    for (var n of Yi(t))
      _d.call(t, n) && Ji(e, n, t[n]);
  return e;
}, xt = (e, t) => pd(e, md(t));
var K = (e, t, n) => new Promise((o, s) => {
  var a = (l) => {
    try {
      r(n.next(l));
    } catch (u) {
      s(u);
    }
  }, i = (l) => {
    try {
      r(n.throw(l));
    } catch (u) {
      s(u);
    }
  }, r = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  r((n = n.apply(e, t)).next());
});
function kn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function nt(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = je(o) ? Sd(o) : nt(o);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else {
    if (je(e))
      return e;
    if (Fe(e))
      return e;
  }
}
const vd = /;(?![^(]*\))/g, yd = /:([^]+)/, bd = new RegExp("\\/\\*.*?\\*\\/", "gs");
function Sd(e) {
  const t = {};
  return e.replace(bd, "").split(vd).forEach((n) => {
    if (n) {
      const o = n.split(yd);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function he(e) {
  let t = "";
  if (je(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const o = he(e[n]);
      o && (t += o + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ri(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !je(t) && (e.class = he(t)), n && (e.style = nt(n)), e;
}
const wd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Cd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", xd = /* @__PURE__ */ kn(wd), Ed = /* @__PURE__ */ kn(Cd), kd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ad = /* @__PURE__ */ kn(kd);
function hl(e) {
  return !!e || e === "";
}
function Td(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = ks(e[o], t[o]);
  return n;
}
function ks(e, t) {
  if (e === t)
    return !0;
  let n = Zi(e), o = Zi(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Oo(e), o = Oo(t), n || o)
    return e === t;
  if (n = ie(e), o = ie(t), n || o)
    return n && o ? Td(e, t) : !1;
  if (n = Fe(e), o = Fe(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, a = Object.keys(t).length;
    if (s !== a)
      return !1;
    for (const i in e) {
      const r = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (r && !l || !r && l || !ks(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ae = (e) => je(e) ? e : e == null ? "" : ie(e) || Fe(e) && (e.toString === bl || !ce(e.toString)) ? JSON.stringify(e, _l, 2) : String(e), _l = (e, t) => t && t.__v_isRef ? _l(e, t.value) : Vn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : yl(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Fe(t) && !ie(t) && !Sl(t) ? String(t) : t, Ue = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, co = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], ot = () => {
}, vl = () => !1, Dd = /^on[^a-z]/, Xo = (e) => Dd.test(e), As = (e) => e.startsWith("onUpdate:"), Xe = Object.assign, li = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ld = Object.prototype.hasOwnProperty, Ee = (e, t) => Ld.call(e, t), ie = Array.isArray, Vn = (e) => Yo(e) === "[object Map]", yl = (e) => Yo(e) === "[object Set]", Zi = (e) => Yo(e) === "[object Date]", ce = (e) => typeof e == "function", je = (e) => typeof e == "string", Oo = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", ci = (e) => Fe(e) && ce(e.then) && ce(e.catch), bl = Object.prototype.toString, Yo = (e) => bl.call(e), ui = (e) => Yo(e).slice(8, -1), Sl = (e) => Yo(e) === "[object Object]", di = (e) => je(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ys = /* @__PURE__ */ kn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pd = /* @__PURE__ */ kn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), $s = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Nd = /-(\w)/g, Ut = $s((e) => e.replace(Nd, (t, n) => n ? n.toUpperCase() : "")), Fd = /\B([A-Z])/g, Qt = $s((e) => e.replace(Fd, "-$1").toLowerCase()), Wn = $s((e) => e.charAt(0).toUpperCase() + e.slice(1)), gn = $s((e) => e ? `on${Wn(e)}` : ""), Bo = (e, t) => !Object.is(e, t), so = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ts = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Md = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Od = (e) => {
  const t = je(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Qi;
const wl = () => Qi || (Qi = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function Da(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Dt;
class Cl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Dt, !t && Dt && (this.index = (Dt.scopes || (Dt.scopes = [])).push(this) - 1);
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
      ({}).NODE_ENV !== "production" && Da("cannot run an inactive effect scope.");
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
function Bd(e) {
  return new Cl(e);
}
function Id(e, t = Dt) {
  t && t.active && t.effects.push(e);
}
function $d() {
  return Dt;
}
const Io = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, xl = (e) => (e.w & wn) > 0, El = (e) => (e.n & wn) > 0, Ud = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= wn;
}, Rd = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      xl(s) && !El(s) ? s.delete(e) : t[n++] = s, s.w &= ~wn, s.n &= ~wn;
    }
    t.length = n;
  }
}, La = /* @__PURE__ */ new WeakMap();
let To = 0, wn = 1;
const Pa = 30;
let ft;
const zn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Na = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class gi {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Id(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ft, n = bn;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ft, ft = this, bn = !0, wn = 1 << ++To, To <= Pa ? Ud(this) : er(this), this.fn();
    } finally {
      To <= Pa && Rd(this), wn = 1 << --To, ft = this.parent, bn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ft === this ? this.deferStop = !0 : this.active && (er(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function er(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let bn = !0;
const kl = [];
function Yn() {
  kl.push(bn), bn = !1;
}
function Jn() {
  const e = kl.pop();
  bn = e === void 0 ? !0 : e;
}
function pt(e, t, n) {
  if (bn && ft) {
    let o = La.get(e);
    o || La.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Io());
    const a = {}.NODE_ENV !== "production" ? { effect: ft, target: e, type: t, key: n } : void 0;
    Fa(s, a);
  }
}
function Fa(e, t) {
  let n = !1;
  To <= Pa ? El(e) || (e.n |= wn, n = !xl(e)) : n = !e.has(ft), n && (e.add(ft), ft.deps.push(e), {}.NODE_ENV !== "production" && ft.onTrack && ft.onTrack(Object.assign({ effect: ft }, t)));
}
function en(e, t, n, o, s, a) {
  const i = La.get(e);
  if (!i)
    return;
  let r = [];
  if (t === "clear")
    r = [...i.values()];
  else if (n === "length" && ie(e)) {
    const u = Number(o);
    i.forEach((c, d) => {
      (d === "length" || d >= u) && r.push(c);
    });
  } else
    switch (n !== void 0 && r.push(i.get(n)), t) {
      case "add":
        ie(e) ? di(n) && r.push(i.get("length")) : (r.push(i.get(zn)), Vn(e) && r.push(i.get(Na)));
        break;
      case "delete":
        ie(e) || (r.push(i.get(zn)), Vn(e) && r.push(i.get(Na)));
        break;
      case "set":
        Vn(e) && r.push(i.get(zn));
        break;
    }
  const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: a } : void 0;
  if (r.length === 1)
    r[0] && ({}.NODE_ENV !== "production" ? ro(r[0], l) : ro(r[0]));
  else {
    const u = [];
    for (const c of r)
      c && u.push(...c);
    ({}).NODE_ENV !== "production" ? ro(Io(u), l) : ro(Io(u));
  }
}
function ro(e, t) {
  const n = ie(e) ? e : [...e];
  for (const o of n)
    o.computed && tr(o, t);
  for (const o of n)
    o.computed || tr(o, t);
}
function tr(e, t) {
  (e !== ft || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Xe({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Vd = /* @__PURE__ */ kn("__proto__,__v_isRef,__isVue"), Al = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Oo)
), zd = /* @__PURE__ */ Us(), jd = /* @__PURE__ */ Us(!1, !0), Hd = /* @__PURE__ */ Us(!0), qd = /* @__PURE__ */ Us(!0, !0), nr = /* @__PURE__ */ Gd();
function Gd() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = _e(this);
      for (let a = 0, i = this.length; a < i; a++)
        pt(o, "get", a + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(_e)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Yn();
      const o = _e(this)[t].apply(this, n);
      return Jn(), o;
    };
  }), e;
}
function Kd(e) {
  const t = _e(this);
  return pt(t, "has", e), t.hasOwnProperty(e);
}
function Us(e = !1, t = !1) {
  return function(o, s, a) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && a === (e ? t ? Ol : Ml : t ? Fl : Nl).get(o))
      return o;
    const i = ie(o);
    if (!e) {
      if (i && Ee(nr, s))
        return Reflect.get(nr, s, a);
      if (s === "hasOwnProperty")
        return Kd;
    }
    const r = Reflect.get(o, s, a);
    return (Oo(s) ? Al.has(s) : Vd(s)) || (e || pt(o, "get", s), t) ? r : Je(r) ? i && di(s) ? r : r.value : Fe(r) ? e ? Bl(r) : Zn(r) : r;
  };
}
const Wd = /* @__PURE__ */ Tl(), Xd = /* @__PURE__ */ Tl(!0);
function Tl(e = !1) {
  return function(n, o, s, a) {
    let i = n[o];
    if (Cn(i) && Je(i) && !Je(s))
      return !1;
    if (!e && (!Ds(s) && !Cn(s) && (i = _e(i), s = _e(s)), !ie(n) && Je(i) && !Je(s)))
      return i.value = s, !0;
    const r = ie(n) && di(o) ? Number(o) < n.length : Ee(n, o), l = Reflect.set(n, o, s, a);
    return n === _e(a) && (r ? Bo(s, i) && en(n, "set", o, s, i) : en(n, "add", o, s)), l;
  };
}
function Yd(e, t) {
  const n = Ee(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && en(e, "delete", t, void 0, o), s;
}
function Jd(e, t) {
  const n = Reflect.has(e, t);
  return (!Oo(t) || !Al.has(t)) && pt(e, "has", t), n;
}
function Zd(e) {
  return pt(e, "iterate", ie(e) ? "length" : zn), Reflect.ownKeys(e);
}
const Dl = {
  get: zd,
  set: Wd,
  deleteProperty: Yd,
  has: Jd,
  ownKeys: Zd
}, Ll = {
  get: Hd,
  set(e, t) {
    return {}.NODE_ENV !== "production" && Da(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && Da(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Qd = /* @__PURE__ */ Xe({}, Dl, {
  get: jd,
  set: Xd
}), eg = /* @__PURE__ */ Xe({}, Ll, {
  get: qd
}), fi = (e) => e, Rs = (e) => Reflect.getPrototypeOf(e);
function ds(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _e(e), a = _e(t);
  n || (t !== a && pt(s, "get", t), pt(s, "get", a));
  const { has: i } = Rs(s), r = o ? fi : n ? pi : $o;
  if (i.call(s, t))
    return r(e.get(t));
  if (i.call(s, a))
    return r(e.get(a));
  e !== s && e.get(t);
}
function gs(e, t = !1) {
  const n = this.__v_raw, o = _e(n), s = _e(e);
  return t || (e !== s && pt(o, "has", e), pt(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function fs(e, t = !1) {
  return e = e.__v_raw, !t && pt(_e(e), "iterate", zn), Reflect.get(e, "size", e);
}
function or(e) {
  e = _e(e);
  const t = _e(this);
  return Rs(t).has.call(t, e) || (t.add(e), en(t, "add", e, e)), this;
}
function sr(e, t) {
  t = _e(t);
  const n = _e(this), { has: o, get: s } = Rs(n);
  let a = o.call(n, e);
  a ? {}.NODE_ENV !== "production" && Pl(n, o, e) : (e = _e(e), a = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), a ? Bo(t, i) && en(n, "set", e, t, i) : en(n, "add", e, t), this;
}
function ar(e) {
  const t = _e(this), { has: n, get: o } = Rs(t);
  let s = n.call(t, e);
  s ? {}.NODE_ENV !== "production" && Pl(t, n, e) : (e = _e(e), s = n.call(t, e));
  const a = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && en(t, "delete", e, void 0, a), i;
}
function ir() {
  const e = _e(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? Vn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && en(e, "clear", void 0, void 0, n), o;
}
function ps(e, t) {
  return function(o, s) {
    const a = this, i = a.__v_raw, r = _e(i), l = t ? fi : e ? pi : $o;
    return !e && pt(r, "iterate", zn), i.forEach((u, c) => o.call(s, l(u), l(c), a));
  };
}
function ms(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, a = _e(s), i = Vn(a), r = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...o), c = n ? fi : t ? pi : $o;
    return !t && pt(a, "iterate", l ? Na : zn), {
      // iterator protocol
      next() {
        const { value: d, done: g } = u.next();
        return g ? { value: d, done: g } : {
          value: r ? [c(d[0]), c(d[1])] : c(d),
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
      console.warn(`${Wn(e)} operation ${n}failed: target is readonly.`, _e(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function tg() {
  const e = {
    get(a) {
      return ds(this, a);
    },
    get size() {
      return fs(this);
    },
    has: gs,
    add: or,
    set: sr,
    delete: ar,
    clear: ir,
    forEach: ps(!1, !1)
  }, t = {
    get(a) {
      return ds(this, a, !1, !0);
    },
    get size() {
      return fs(this);
    },
    has: gs,
    add: or,
    set: sr,
    delete: ar,
    clear: ir,
    forEach: ps(!1, !0)
  }, n = {
    get(a) {
      return ds(this, a, !0);
    },
    get size() {
      return fs(this, !0);
    },
    has(a) {
      return gs.call(this, a, !0);
    },
    add: an(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: an(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: an(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: an(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: ps(!0, !1)
  }, o = {
    get(a) {
      return ds(this, a, !0, !0);
    },
    get size() {
      return fs(this, !0);
    },
    has(a) {
      return gs.call(this, a, !0);
    },
    add: an(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: an(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: an(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: an(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: ps(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = ms(a, !1, !1), n[a] = ms(a, !0, !1), t[a] = ms(a, !1, !0), o[a] = ms(a, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [ng, og, sg, ag] = /* @__PURE__ */ tg();
function Vs(e, t) {
  const n = t ? e ? ag : sg : e ? og : ng;
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(Ee(n, s) && s in o ? n : o, s, a);
}
const ig = {
  get: /* @__PURE__ */ Vs(!1, !1)
}, rg = {
  get: /* @__PURE__ */ Vs(!1, !0)
}, lg = {
  get: /* @__PURE__ */ Vs(!0, !1)
}, cg = {
  get: /* @__PURE__ */ Vs(!0, !0)
};
function Pl(e, t, n) {
  const o = _e(n);
  if (o !== n && t.call(e, o)) {
    const s = ui(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Nl = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ new WeakMap();
function ug(e) {
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
function dg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ug(ui(e));
}
function Zn(e) {
  return Cn(e) ? e : zs(e, !1, Dl, ig, Nl);
}
function gg(e) {
  return zs(e, !1, Qd, rg, Fl);
}
function Bl(e) {
  return zs(e, !0, Ll, lg, Ml);
}
function lo(e) {
  return zs(e, !0, eg, cg, Ol);
}
function zs(e, t, n, o, s) {
  if (!Fe(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = s.get(e);
  if (a)
    return a;
  const i = dg(e);
  if (i === 0)
    return e;
  const r = new Proxy(e, i === 2 ? o : n);
  return s.set(e, r), r;
}
function jn(e) {
  return Cn(e) ? jn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Cn(e) {
  return !!(e && e.__v_isReadonly);
}
function Ds(e) {
  return !!(e && e.__v_isShallow);
}
function Ma(e) {
  return jn(e) || Cn(e);
}
function _e(e) {
  const t = e && e.__v_raw;
  return t ? _e(t) : e;
}
function Il(e) {
  return Ts(e, "__v_skip", !0), e;
}
const $o = (e) => Fe(e) ? Zn(e) : e, pi = (e) => Fe(e) ? Bl(e) : e;
function $l(e) {
  bn && ft && (e = _e(e), {}.NODE_ENV !== "production" ? Fa(e.dep || (e.dep = Io()), {
    target: e,
    type: "get",
    key: "value"
  }) : Fa(e.dep || (e.dep = Io())));
}
function Ul(e, t) {
  e = _e(e);
  const n = e.dep;
  n && ({}.NODE_ENV !== "production" ? ro(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ro(n));
}
function Je(e) {
  return !!(e && e.__v_isRef === !0);
}
function Z(e) {
  return Rl(e, !1);
}
function fg(e) {
  return Rl(e, !0);
}
function Rl(e, t) {
  return Je(e) ? e : new pg(e, t);
}
class pg {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : _e(t), this._value = n ? t : $o(t);
  }
  get value() {
    return $l(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ds(t) || Cn(t);
    t = n ? t : _e(t), Bo(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : $o(t), Ul(this, t));
  }
}
function Sn(e) {
  return Je(e) ? e.value : e;
}
const mg = {
  get: (e, t, n) => Sn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Je(s) && !Je(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Vl(e) {
  return jn(e) ? e : new Proxy(e, mg);
}
var zl;
class hg {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[zl] = !1, this._dirty = !0, this.effect = new gi(t, () => {
      this._dirty || (this._dirty = !0, Ul(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = _e(this);
    return $l(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
zl = "__v_isReadonly";
function _g(e, t, n = !1) {
  let o, s;
  const a = ce(e);
  a ? (o = e, s = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ot) : (o = e.get, s = e.set);
  const i = new hg(o, s, a || !s, n);
  return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const Hn = [];
function bs(e) {
  Hn.push(e);
}
function Ss() {
  Hn.pop();
}
function I(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  Yn();
  const n = Hn.length ? Hn[Hn.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = vg();
  if (o)
    Zt(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: a }) => `at <${Js(n, a.type)}>`).join(`
`),
      s
    ]);
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    s.length && a.push(`
`, ...yg(s)), console.warn(...a);
  }
  Jn();
}
function vg() {
  let e = Hn[Hn.length - 1];
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
function yg(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...bg(n));
  }), t;
}
function bg({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Js(e.component, e.type, o)}`, a = ">" + n;
  return e.props ? [s, ...Sg(e.props), a] : [s + a];
}
function Sg(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...jl(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function jl(e, t, n) {
  return je(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Je(t) ? (t = jl(e, _e(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ce(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _e(t), n ? t : [`${e}=`, t]);
}
function wg(e, t) {
  ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? I(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && I(`${t} is NaN - the duration expression might be incorrect.`));
}
const mi = {
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
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Zt(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (a) {
    js(a, t, n);
  }
  return s;
}
function Tt(e, t, n, o) {
  if (ce(e)) {
    const a = Zt(e, t, n, o);
    return a && ci(a) && a.catch((i) => {
      js(i, t, n);
    }), a;
  }
  const s = [];
  for (let a = 0; a < e.length; a++)
    s.push(Tt(e[a], t, n, o));
  return s;
}
function js(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const i = t.proxy, r = {}.NODE_ENV !== "production" ? mi[n] : n;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, i, r) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Zt(l, null, 10, [e, i, r]);
      return;
    }
  }
  Cg(e, n, s, o);
}
function Cg(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const s = mi[t];
    if (n && bs(n), I(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ss(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Uo = !1, Oa = !1;
const it = [];
let It = 0;
const uo = [];
let Bt = null, fn = 0;
const Hl = /* @__PURE__ */ Promise.resolve();
let hi = null;
const xg = 100;
function vo(e) {
  const t = hi || Hl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Eg(e) {
  let t = It + 1, n = it.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ro(it[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Hs(e) {
  (!it.length || !it.includes(e, Uo && e.allowRecurse ? It + 1 : It)) && (e.id == null ? it.push(e) : it.splice(Eg(e.id), 0, e), ql());
}
function ql() {
  !Uo && !Oa && (Oa = !0, hi = Hl.then(Wl));
}
function kg(e) {
  const t = it.indexOf(e);
  t > It && it.splice(t, 1);
}
function Gl(e) {
  ie(e) ? uo.push(...e) : (!Bt || !Bt.includes(e, e.allowRecurse ? fn + 1 : fn)) && uo.push(e), ql();
}
function rr(e, t = Uo ? It + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < it.length; t++) {
    const n = it[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && _i(e, n))
        continue;
      it.splice(t, 1), t--, n();
    }
  }
}
function Kl(e) {
  if (uo.length) {
    const t = [...new Set(uo)];
    if (uo.length = 0, Bt) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Bt.sort((n, o) => Ro(n) - Ro(o)), fn = 0; fn < Bt.length; fn++)
      ({}).NODE_ENV !== "production" && _i(e, Bt[fn]) || Bt[fn]();
    Bt = null, fn = 0;
  }
}
const Ro = (e) => e.id == null ? 1 / 0 : e.id, Ag = (e, t) => {
  const n = Ro(e) - Ro(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wl(e) {
  Oa = !1, Uo = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), it.sort(Ag);
  const t = {}.NODE_ENV !== "production" ? (n) => _i(e, n) : ot;
  try {
    for (It = 0; It < it.length; It++) {
      const n = it[It];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        Zt(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    It = 0, it.length = 0, Kl(e), Uo = !1, hi = null, (it.length || uo.length) && Wl(e);
  }
}
function _i(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > xg) {
      const o = t.ownerInstance, s = o && ki(o.type);
      return I(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let qn = !1;
const ao = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (wl().__VUE_HMR_RUNTIME__ = {
  createRecord: ga(Xl),
  rerender: ga(Lg),
  reload: ga(Pg)
});
const Xn = /* @__PURE__ */ new Map();
function Tg(e) {
  const t = e.type.__hmrId;
  let n = Xn.get(t);
  n || (Xl(t, e.type), n = Xn.get(t)), n.instances.add(e);
}
function Dg(e) {
  Xn.get(e.type.__hmrId).instances.delete(e);
}
function Xl(e, t) {
  return Xn.has(e) ? !1 : (Xn.set(e, {
    initialDef: Lo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Lo(e) {
  return Dc(e) ? e.__vccOpts : e;
}
function Lg(e, t) {
  const n = Xn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Lo(o.type).render = t), o.renderCache = [], qn = !0, o.update(), qn = !1;
  }));
}
function Pg(e, t) {
  const n = Xn.get(e);
  if (!n)
    return;
  t = Lo(t), lr(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const a = Lo(s.type);
    ao.has(a) || (a !== n.initialDef && lr(a, t), ao.add(a)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (ao.add(a), s.ceReload(t.styles), ao.delete(a)) : s.parent ? Hs(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Gl(() => {
    for (const s of o)
      ao.delete(Lo(s.type));
  });
}
function lr(e, t) {
  Xe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ga(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let $t, Do = [], Ba = !1;
function Jo(e, ...t) {
  $t ? $t.emit(e, ...t) : Ba || Do.push({ event: e, args: t });
}
function Yl(e, t) {
  var n, o;
  $t = e, $t ? ($t.enabled = !0, Do.forEach(({ event: s, args: a }) => $t.emit(s, ...a)), Do = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    Yl(a, t);
  }), setTimeout(() => {
    $t || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ba = !0, Do = []);
  }, 3e3)) : (Ba = !0, Do = []);
}
function Ng(e, t) {
  Jo("app:init", e, t, {
    Fragment: ke,
    Text: Qo,
    Comment: tt,
    Static: xs
  });
}
function Fg(e) {
  Jo("app:unmount", e);
}
const Mg = /* @__PURE__ */ vi(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), Jl = /* @__PURE__ */ vi(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), Og = /* @__PURE__ */ vi(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Bg = (e) => {
  $t && typeof $t.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !$t.cleanupBuffer(e) && Og(e);
};
function vi(e) {
  return (t) => {
    Jo(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Ig = /* @__PURE__ */ Zl(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), $g = /* @__PURE__ */ Zl(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Zl(e) {
  return (t, n, o) => {
    Jo(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ug(e, t, n) {
  Jo("component:emit", e.appContext.app, e, t, n);
}
function Rg(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || Ue;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: c, propsOptions: [d] } = e;
    if (c)
      if (!(t in c))
        (!d || !(gn(t) in d)) && I(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gn(t)}" prop.`);
      else {
        const g = c[t];
        ce(g) && (g(...n) || I(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let s = n;
  const a = t.startsWith("update:"), i = a && t.slice(7);
  if (i && i in o) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[c] || Ue;
    g && (s = n.map((f) => je(f) ? f.trim() : f)), d && (s = n.map(Md));
  }
  if ({}.NODE_ENV !== "production" && Ug(e, t, s), {}.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && o[gn(c)] && I(`Event "${c}" is emitted in component ${Js(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Qt(t)}" instead of "${t}".`);
  }
  let r, l = o[r = gn(t)] || // also try camelCase event handler (#2249)
  o[r = gn(Ut(t))];
  !l && a && (l = o[r = gn(Qt(t))]), l && Tt(l, e, 6, s);
  const u = o[r + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, Tt(u, e, 6, s);
  }
}
function Ql(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const a = e.emits;
  let i = {}, r = !1;
  if (!ce(e)) {
    const l = (u) => {
      const c = Ql(u, t, !0);
      c && (r = !0, Xe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !r ? (Fe(e) && o.set(e, null), null) : (ie(a) ? a.forEach((l) => i[l] = null) : Xe(i, a), Fe(e) && o.set(e, i), i);
}
function qs(e, t) {
  return !e || !Xo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, Qt(t)) || Ee(e, t));
}
let Ze = null, ec = null;
function Ls(e) {
  const t = Ze;
  return Ze = e, ec = e && e.type.__scopeId || null, t;
}
function b(e, t = Ze, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && br(-1);
    const a = Ls(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Ls(a), o._d && br(1);
    }
    return {}.NODE_ENV !== "production" && Jl(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Ia = !1;
function Ps() {
  Ia = !0;
}
function fa(e) {
  const { type: t, vnode: n, proxy: o, withProxy: s, props: a, propsOptions: [i], slots: r, attrs: l, emit: u, render: c, renderCache: d, data: g, setupState: f, ctx: m, inheritAttrs: S } = e;
  let x, k;
  const D = Ls(e);
  ({}).NODE_ENV !== "production" && (Ia = !1);
  try {
    if (n.shapeFlag & 4) {
      const X = s || o;
      x = Lt(c.call(X, X, d, a, f, g, m)), k = l;
    } else {
      const X = t;
      ({}).NODE_ENV !== "production" && l === a && Ps(), x = Lt(X.length > 1 ? X(a, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return Ps(), l;
        },
        slots: r,
        emit: u
      } : { attrs: l, slots: r, emit: u }) : X(
        a,
        null
        /* we know it doesn't need it */
      )), k = t.props ? l : zg(l);
    }
  } catch (X) {
    No.length = 0, js(
      X,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), x = p(tt);
  }
  let U = x, M;
  if ({}.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([U, M] = Vg(x)), k && S !== !1) {
    const X = Object.keys(k), { shapeFlag: Se } = U;
    if (X.length) {
      if (Se & 7)
        i && X.some(As) && (k = jg(k, i)), U = Rt(U, k);
      else if ({}.NODE_ENV !== "production" && !Ia && U.type !== tt) {
        const oe = Object.keys(l), j = [], pe = [];
        for (let Ae = 0, xe = oe.length; Ae < xe; Ae++) {
          const W = oe[Ae];
          Xo(W) ? As(W) || j.push(W[2].toLowerCase() + W.slice(3)) : pe.push(W);
        }
        pe.length && I(`Extraneous non-props attributes (${pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), j.length && I(`Extraneous non-emits event listeners (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !cr(U) && I("Runtime directive used on component with non-element root node. The directives will not function as intended."), U = Rt(U), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !cr(U) && I("Component inside <Transition> renders non-element root node that cannot be animated."), U.transition = n.transition), {}.NODE_ENV !== "production" && M ? M(U) : x = U, Ls(D), x;
}
const Vg = (e) => {
  const t = e.children, n = e.dynamicChildren, o = tc(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), a = n ? n.indexOf(o) : -1, i = (r) => {
    t[s] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
  };
  return [Lt(o), i];
};
function tc(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (go(o)) {
      if (o.type !== tt || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const zg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, jg = (e, t) => {
  const n = {};
  for (const o in e)
    (!As(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, cr = (e) => e.shapeFlag & 7 || e.type === tt;
function Hg(e, t, n) {
  const { props: o, children: s, component: a } = e, { props: i, children: r, patchFlag: l } = t, u = a.emitsOptions;
  if ({}.NODE_ENV !== "production" && (s || r) && qn || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? ur(o, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const g = c[d];
        if (i[g] !== o[g] && !qs(u, g))
          return !0;
      }
    }
  } else
    return (s || r) && (!r || !r.$stable) ? !0 : o === i ? !1 : o ? i ? ur(o, i, u) : !0 : !!i;
  return !1;
}
function ur(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (t[a] !== e[a] && !qs(n, a))
      return !0;
  }
  return !1;
}
function qg({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Gg = (e) => e.__isSuspense;
function Kg(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Gl(e);
}
function ws(e, t) {
  if (!Ke)
    ({}).NODE_ENV !== "production" && I("provide() can only be used inside setup().");
  else {
    let n = Ke.provides;
    const o = Ke.parent && Ke.parent.provides;
    o === n && (n = Ke.provides = Object.create(o)), n[e] = t;
  }
}
function We(e, t, n = !1) {
  const o = Ke || Ze;
  if (o) {
    const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(o.proxy) : t;
    ({}).NODE_ENV !== "production" && I(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && I("inject() can only be used inside setup() or functional components.");
}
function Wg(e, t) {
  return yi(e, null, t);
}
const hs = {};
function He(e, t, n) {
  return {}.NODE_ENV !== "production" && !ce(t) && I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), yi(e, t, n);
}
function yi(e, t, { immediate: n, deep: o, flush: s, onTrack: a, onTrigger: i } = Ue) {
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const r = (M) => {
    I("Invalid watch source: ", M, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = $d() === (Ke == null ? void 0 : Ke.scope) ? Ke : null;
  let u, c = !1, d = !1;
  if (Je(e) ? (u = () => e.value, c = Ds(e)) : jn(e) ? (u = () => e, o = !0) : ie(e) ? (d = !0, c = e.some((M) => jn(M) || Ds(M)), u = () => e.map((M) => {
    if (Je(M))
      return M.value;
    if (jn(M))
      return Rn(M);
    if (ce(M))
      return Zt(
        M,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    ({}).NODE_ENV !== "production" && r(M);
  })) : ce(e) ? t ? u = () => Zt(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : u = () => {
    if (!(l && l.isUnmounted))
      return g && g(), Tt(e, l, 3, [f]);
  } : (u = ot, {}.NODE_ENV !== "production" && r(e)), t && o) {
    const M = u;
    u = () => Rn(M());
  }
  let g, f = (M) => {
    g = D.onStop = () => {
      Zt(
        M,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, m;
  if (jo)
    if (f = ot, t ? n && Tt(t, l, 3, [
      u(),
      d ? [] : void 0,
      f
    ]) : u(), s === "sync") {
      const M = Xf();
      m = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return ot;
  let S = d ? new Array(e.length).fill(hs) : hs;
  const x = () => {
    if (D.active)
      if (t) {
        const M = D.run();
        (o || c || (d ? M.some((X, Se) => Bo(X, S[Se])) : Bo(M, S))) && (g && g(), Tt(t, l, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          S === hs ? void 0 : d && S[0] === hs ? [] : S,
          f
        ]), S = M);
      } else
        D.run();
  };
  x.allowRecurse = !!t;
  let k;
  s === "sync" ? k = x : s === "post" ? k = () => vt(x, l && l.suspense) : (x.pre = !0, l && (x.id = l.uid), k = () => Hs(x));
  const D = new gi(u, k);
  ({}).NODE_ENV !== "production" && (D.onTrack = a, D.onTrigger = i), t ? n ? x() : S = D.run() : s === "post" ? vt(D.run.bind(D), l && l.suspense) : D.run();
  const U = () => {
    D.stop(), l && l.scope && li(l.scope.effects, D);
  };
  return m && m.push(U), U;
}
function Xg(e, t, n) {
  const o = this.proxy, s = je(e) ? e.includes(".") ? nc(o, e) : () => o[e] : e.bind(o, o);
  let a;
  ce(t) ? a = t : (a = t.handler, n = t);
  const i = Ke;
  fo(this);
  const r = yi(s, a.bind(o), n);
  return i ? fo(i) : Kn(), r;
}
function nc(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function Rn(e, t) {
  if (!Fe(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Je(e))
    Rn(e.value, t);
  else if (ie(e))
    for (let n = 0; n < e.length; n++)
      Rn(e[n], t);
  else if (yl(e) || Vn(e))
    e.forEach((n) => {
      Rn(n, t);
    });
  else if (Sl(e))
    for (const n in e)
      Rn(e[n], t);
  return e;
}
function Yg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lt(() => {
    e.isMounted = !0;
  }), lc(() => {
    e.isUnmounting = !0;
  }), e;
}
const Et = [Function, Array], Jg = {
  name: "BaseTransition",
  props: {
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
  },
  setup(e, { slots: t }) {
    const n = Ei(), o = Yg();
    let s;
    return () => {
      const a = t.default && ac(t.default(), !0);
      if (!a || !a.length)
        return;
      let i = a[0];
      if (a.length > 1) {
        let S = !1;
        for (const x of a)
          if (x.type !== tt) {
            if ({}.NODE_ENV !== "production" && S) {
              I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = x, S = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const r = _e(e), { mode: l } = r;
      if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && I(`invalid <transition> mode: ${l}`), o.isLeaving)
        return pa(i);
      const u = dr(i);
      if (!u)
        return pa(i);
      const c = $a(u, r, o, n);
      Ua(u, c);
      const d = n.subTree, g = d && dr(d);
      let f = !1;
      const { getTransitionKey: m } = u.type;
      if (m) {
        const S = m();
        s === void 0 ? s = S : S !== s && (s = S, f = !0);
      }
      if (g && g.type !== tt && (!In(u, g) || f)) {
        const S = $a(g, r, o, n);
        if (Ua(g, S), l === "out-in")
          return o.isLeaving = !0, S.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, pa(i);
        l === "in-out" && u.type !== tt && (S.delayLeave = (x, k, D) => {
          const U = sc(o, g);
          U[String(g.key)] = g, x._leaveCb = () => {
            k(), x._leaveCb = void 0, delete c.delayedLeave;
          }, c.delayedLeave = D;
        });
      }
      return i;
    };
  }
}, oc = Jg;
function sc(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function $a(e, t, n, o) {
  const { appear: s, mode: a, persisted: i = !1, onBeforeEnter: r, onEnter: l, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: d, onLeave: g, onAfterLeave: f, onLeaveCancelled: m, onBeforeAppear: S, onAppear: x, onAfterAppear: k, onAppearCancelled: D } = t, U = String(e.key), M = sc(n, e), X = (j, pe) => {
    j && Tt(j, o, 9, pe);
  }, Se = (j, pe) => {
    const Ae = pe[1];
    X(j, pe), ie(j) ? j.every((xe) => xe.length <= 1) && Ae() : j.length <= 1 && Ae();
  }, oe = {
    mode: a,
    persisted: i,
    beforeEnter(j) {
      let pe = r;
      if (!n.isMounted)
        if (s)
          pe = S || r;
        else
          return;
      j._leaveCb && j._leaveCb(
        !0
        /* cancelled */
      );
      const Ae = M[U];
      Ae && In(e, Ae) && Ae.el._leaveCb && Ae.el._leaveCb(), X(pe, [j]);
    },
    enter(j) {
      let pe = l, Ae = u, xe = c;
      if (!n.isMounted)
        if (s)
          pe = x || l, Ae = k || u, xe = D || c;
        else
          return;
      let W = !1;
      const Ne = j._enterCb = (Ge) => {
        W || (W = !0, Ge ? X(xe, [j]) : X(Ae, [j]), oe.delayedLeave && oe.delayedLeave(), j._enterCb = void 0);
      };
      pe ? Se(pe, [j, Ne]) : Ne();
    },
    leave(j, pe) {
      const Ae = String(e.key);
      if (j._enterCb && j._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return pe();
      X(d, [j]);
      let xe = !1;
      const W = j._leaveCb = (Ne) => {
        xe || (xe = !0, pe(), Ne ? X(m, [j]) : X(f, [j]), j._leaveCb = void 0, M[Ae] === e && delete M[Ae]);
      };
      M[Ae] = e, g ? Se(g, [j, W]) : W();
    },
    clone(j) {
      return $a(j, t, n, o);
    }
  };
  return oe;
}
function pa(e) {
  if (Zo(e))
    return e = Rt(e), e.children = null, e;
}
function dr(e) {
  return Zo(e) ? e.children ? e.children[0] : void 0 : e;
}
function Ua(e, t) {
  e.shapeFlag & 6 && e.component ? Ua(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ac(e, t = !1, n) {
  let o = [], s = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === ke ? (i.patchFlag & 128 && s++, o = o.concat(ac(i.children, t, r))) : (t || i.type !== tt) && o.push(r != null ? Rt(i, { key: r }) : i);
  }
  if (s > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
function ic(e) {
  return ce(e) ? { setup: e, name: e.name } : e;
}
const Po = (e) => !!e.type.__asyncLoader, Zo = (e) => e.type.__isKeepAlive;
function Zg(e, t) {
  rc(e, "a", t);
}
function Qg(e, t) {
  rc(e, "da", t);
}
function rc(e, t, n = Ke) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Gs(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Zo(s.parent.vnode) && ef(o, t, n, s), s = s.parent;
  }
}
function ef(e, t, n, o) {
  const s = Gs(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  cc(() => {
    li(o[t], s);
  }, n);
}
function Gs(e, t, n = Ke, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Yn(), fo(n);
      const r = Tt(t, n, e, i);
      return Kn(), Jn(), r;
    });
    return o ? s.unshift(a) : s.push(a), a;
  } else if ({}.NODE_ENV !== "production") {
    const s = gn(mi[e].replace(/ hook$/, ""));
    I(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const on = (e) => (t, n = Ke) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!jo || e === "sp") && Gs(e, (...o) => t(...o), n)
), tf = on(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), lt = on(
  "m"
  /* LifecycleHooks.MOUNTED */
), nf = on(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), of = on(
  "u"
  /* LifecycleHooks.UPDATED */
), lc = on(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), cc = on(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), sf = on(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), af = on(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), rf = on(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function lf(e, t = Ke) {
  Gs("ec", e, t);
}
function uc(e) {
  Pd(e) && I("Do not use built-in directive ids as custom directive id: " + e);
}
function H(e, t) {
  const n = Ze;
  if (n === null)
    return {}.NODE_ENV !== "production" && I("withDirectives can only be used inside render functions."), e;
  const o = Ys(n) || n.proxy, s = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, r, l, u = Ue] = t[a];
    i && (ce(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Rn(r), s.push({
      dir: i,
      instance: o,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function Nn(e, t, n, o) {
  const s = e.dirs, a = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    a && (r.oldValue = a[i].value);
    let l = r.dir[o];
    l && (Yn(), Tt(l, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Jn());
  }
}
const Ns = "components", cf = "directives";
function _(e, t) {
  return bi(Ns, e, !0, t) || e;
}
const dc = Symbol();
function yo(e) {
  return je(e) ? bi(Ns, e, !1) || e : e || dc;
}
function be(e) {
  return bi(cf, e);
}
function bi(e, t, n = !0, o = !1) {
  const s = Ze || Ke;
  if (s) {
    const a = s.type;
    if (e === Ns) {
      const r = ki(
        a,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (r && (r === t || r === Ut(t) || r === Wn(Ut(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      gr(s[e] || a[e], t) || // global registration
      gr(s.appContext[e], t)
    );
    if (!i && o)
      return a;
    if ({}.NODE_ENV !== "production" && n && !i) {
      const r = e === Ns ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      I(`Failed to resolve ${e.slice(0, -1)}: ${t}${r}`);
    }
    return i;
  } else
    ({}).NODE_ENV !== "production" && I(`resolve${Wn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function gr(e, t) {
  return e && (e[t] || e[Ut(t)] || e[Wn(Ut(t))]);
}
function et(e, t, n, o) {
  let s;
  const a = n && n[o];
  if (ie(e) || je(e)) {
    s = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++)
      s[i] = t(e[i], i, void 0, a && a[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && I(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, a && a[i]);
  } else if (Fe(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, r) => t(i, r, void 0, a && a[r]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let r = 0, l = i.length; r < l; r++) {
        const u = i[r];
        s[r] = t(e[u], u, r, a && a[r]);
      }
    }
  else
    s = [];
  return n && (n[o] = s), s;
}
function Ye(e, t, n = {}, o, s) {
  if (Ze.isCE || Ze.parent && Po(Ze.parent) && Ze.parent.isCE)
    return t !== "default" && (n.name = t), p("slot", n, o && o());
  let a = e[t];
  ({}).NODE_ENV !== "production" && a && a.length > 1 && (I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), a = () => []), a && a._c && (a._d = !1), v();
  const i = a && gc(a(n)), r = F(
    ke,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !s && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]), a && a._c && (a._d = !0), r;
}
function gc(e) {
  return e.some((t) => go(t) ? !(t.type === tt || t.type === ke && !gc(t.children)) : !0) ? e : null;
}
const Ra = (e) => e ? kc(e) ? Ys(e) || e.proxy : Ra(e.parent) : null, Gn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Xe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? lo(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? lo(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? lo(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? lo(e.refs) : e.refs,
    $parent: (e) => Ra(e.parent),
    $root: (e) => Ra(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wi(e),
    $forceUpdate: (e) => e.f || (e.f = () => Hs(e.update)),
    $nextTick: (e) => e.n || (e.n = vo.bind(e.proxy)),
    $watch: (e) => Xg.bind(e)
  })
), Si = (e) => e === "_" || e === "$", ma = (e, t) => e !== Ue && !e.__isScriptSetup && Ee(e, t), fc = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: a, accessCache: i, type: r, appContext: l } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
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
        if (ma(o, t))
          return i[t] = 1, o[t];
        if (s !== Ue && Ee(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && Ee(u, t)
        )
          return i[t] = 3, a[t];
        if (n !== Ue && Ee(n, t))
          return i[t] = 4, n[t];
        Va && (i[t] = 0);
      }
    }
    const c = Gn[t];
    let d, g;
    if (c)
      return t === "$attrs" && (pt(e, "get", t), {}.NODE_ENV !== "production" && Ps()), c(e);
    if (
      // css module (injected by vue-loader)
      (d = r.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Ue && Ee(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, Ee(g, t)
    )
      return g[t];
    ({}).NODE_ENV !== "production" && Ze && (!je(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== Ue && Si(t[0]) && Ee(s, t) ? I(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Ze && I(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: a } = e;
    return ma(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && Ee(s, t) ? (I(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Ue && Ee(o, t) ? (o[t] = n, !0) : Ee(e.props, t) ? ({}.NODE_ENV !== "production" && I(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && I(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(a, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : a[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: a } }, i) {
    let r;
    return !!n[i] || e !== Ue && Ee(e, i) || ma(t, i) || (r = a[0]) && Ee(r, i) || Ee(o, i) || Ee(Gn, i) || Ee(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (fc.ownKeys = (e) => (I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function uf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Gn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Gn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ot
    });
  }), t;
}
function df(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ot
    });
  });
}
function gf(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(_e(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Si(o[0])) {
        I(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ot
      });
    }
  });
}
function ff() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? I(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Va = !0;
function pf(e) {
  const t = wi(e), n = e.proxy, o = e.ctx;
  Va = !1, t.beforeCreate && fr(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: s,
    computed: a,
    methods: i,
    watch: r,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: g,
    beforeUpdate: f,
    updated: m,
    activated: S,
    deactivated: x,
    beforeDestroy: k,
    beforeUnmount: D,
    destroyed: U,
    unmounted: M,
    render: X,
    renderTracked: Se,
    renderTriggered: oe,
    errorCaptured: j,
    serverPrefetch: pe,
    // public API
    expose: Ae,
    inheritAttrs: xe,
    // assets
    components: W,
    directives: Ne,
    filters: Ge
  } = t, Le = {}.NODE_ENV !== "production" ? ff() : null;
  if ({}.NODE_ENV !== "production") {
    const [ue] = e.propsOptions;
    if (ue)
      for (const ge in ue)
        Le("Props", ge);
  }
  if (u && mf(u, o, Le, e.appContext.config.unwrapInjectedRef), i)
    for (const ue in i) {
      const ge = i[ue];
      ce(ge) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, ue, {
        value: ge.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[ue] = ge.bind(n), {}.NODE_ENV !== "production" && Le("Methods", ue)) : {}.NODE_ENV !== "production" && I(`Method "${ue}" has type "${typeof ge}" in the component definition. Did you reference the function correctly?`);
    }
  if (s) {
    ({}).NODE_ENV !== "production" && !ce(s) && I("The data option must be a function. Plain object usage is no longer supported.");
    const ue = s.call(n, n);
    if ({}.NODE_ENV !== "production" && ci(ue) && I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Fe(ue))
      ({}).NODE_ENV !== "production" && I("data() should return an object.");
    else if (e.data = Zn(ue), {}.NODE_ENV !== "production")
      for (const ge in ue)
        Le("Data", ge), Si(ge[0]) || Object.defineProperty(o, ge, {
          configurable: !0,
          enumerable: !0,
          get: () => ue[ge],
          set: ot
        });
  }
  if (Va = !0, a)
    for (const ue in a) {
      const ge = a[ue], st = ce(ge) ? ge.bind(n, n) : ce(ge.get) ? ge.get.bind(n, n) : ot;
      ({}).NODE_ENV !== "production" && st === ot && I(`Computed property "${ue}" has no getter.`);
      const sn = !ce(ge) && ce(ge.set) ? ge.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        I(`Write operation failed: computed property "${ue}" is readonly.`);
      } : ot, ht = y({
        get: st,
        set: sn
      });
      Object.defineProperty(o, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (ct) => ht.value = ct
      }), {}.NODE_ENV !== "production" && Le("Computed", ue);
    }
  if (r)
    for (const ue in r)
      pc(r[ue], o, n, ue);
  if (l) {
    const ue = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(ue).forEach((ge) => {
      ws(ge, ue[ge]);
    });
  }
  c && fr(
    c,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function Be(ue, ge) {
    ie(ge) ? ge.forEach((st) => ue(st.bind(n))) : ge && ue(ge.bind(n));
  }
  if (Be(tf, d), Be(lt, g), Be(nf, f), Be(of, m), Be(Zg, S), Be(Qg, x), Be(lf, j), Be(rf, Se), Be(af, oe), Be(lc, D), Be(cc, M), Be(sf, pe), ie(Ae))
    if (Ae.length) {
      const ue = e.exposed || (e.exposed = {});
      Ae.forEach((ge) => {
        Object.defineProperty(ue, ge, {
          get: () => n[ge],
          set: (st) => n[ge] = st
        });
      });
    } else
      e.exposed || (e.exposed = {});
  X && e.render === ot && (e.render = X), xe != null && (e.inheritAttrs = xe), W && (e.components = W), Ne && (e.directives = Ne);
}
function mf(e, t, n = ot, o = !1) {
  ie(e) && (e = za(e));
  for (const s in e) {
    const a = e[s];
    let i;
    Fe(a) ? "default" in a ? i = We(
      a.from || s,
      a.default,
      !0
      /* treat default function as factory */
    ) : i = We(a.from || s) : i = We(a), Je(i) ? o ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : ({}.NODE_ENV !== "production" && I(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, {}.NODE_ENV !== "production" && n("Inject", s);
  }
}
function fr(e, t, n) {
  Tt(ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function pc(e, t, n, o) {
  const s = o.includes(".") ? nc(n, o) : () => n[o];
  if (je(e)) {
    const a = t[e];
    ce(a) ? He(s, a) : {}.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e}"`, a);
  } else if (ce(e))
    He(s, e.bind(n));
  else if (Fe(e))
    if (ie(e))
      e.forEach((a) => pc(a, t, n, o));
    else {
      const a = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(a) ? He(s, a, e) : {}.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e.handler}"`, a);
    }
  else
    ({}).NODE_ENV !== "production" && I(`Invalid watch option: "${o}"`, e);
}
function wi(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: a, config: { optionMergeStrategies: i } } = e.appContext, r = a.get(t);
  let l;
  return r ? l = r : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach((u) => Fs(l, u, i, !0)), Fs(l, t, i)), Fe(t) && a.set(t, l), l;
}
function Fs(e, t, n, o = !1) {
  const { mixins: s, extends: a } = t;
  a && Fs(e, a, n, !0), s && s.forEach((i) => Fs(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      ({}).NODE_ENV !== "production" && I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const r = hf[i] || n && n[i];
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const hf = {
  data: pr,
  props: Bn,
  emits: Bn,
  // objects
  methods: Bn,
  computed: Bn,
  // lifecycle
  beforeCreate: gt,
  created: gt,
  beforeMount: gt,
  mounted: gt,
  beforeUpdate: gt,
  updated: gt,
  beforeDestroy: gt,
  beforeUnmount: gt,
  destroyed: gt,
  unmounted: gt,
  activated: gt,
  deactivated: gt,
  errorCaptured: gt,
  serverPrefetch: gt,
  // assets
  components: Bn,
  directives: Bn,
  // watch
  watch: vf,
  // provide / inject
  provide: pr,
  inject: _f
};
function pr(e, t) {
  return t ? e ? function() {
    return Xe(ce(e) ? e.call(this, this) : e, ce(t) ? t.call(this, this) : t);
  } : t : e;
}
function _f(e, t) {
  return Bn(za(e), za(t));
}
function za(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function gt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bn(e, t) {
  return e ? Xe(Xe(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function vf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Xe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = gt(e[o], t[o]);
  return n;
}
function yf(e, t, n, o = !1) {
  const s = {}, a = {};
  Ts(a, Ks, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), mc(e, t, s, a);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  ({}).NODE_ENV !== "production" && _c(t || {}, s, e), n ? e.props = o ? s : gg(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
}
function bf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Sf(e, t, n, o) {
  const { props: s, attrs: a, vnode: { patchFlag: i } } = e, r = _e(s), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !({}.NODE_ENV !== "production" && bf(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let g = c[d];
        if (qs(e.emitsOptions, g))
          continue;
        const f = t[g];
        if (l)
          if (Ee(a, g))
            f !== a[g] && (a[g] = f, u = !0);
          else {
            const m = Ut(g);
            s[m] = ja(
              l,
              r,
              m,
              f,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          f !== a[g] && (a[g] = f, u = !0);
      }
    }
  } else {
    mc(e, t, s, a) && (u = !0);
    let c;
    for (const d in r)
      (!t || // for camelCase
      !Ee(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Qt(d)) === d || !Ee(t, c))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[d] = ja(
        l,
        r,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete s[d]);
    if (a !== r)
      for (const d in a)
        (!t || !Ee(t, d)) && (delete a[d], u = !0);
  }
  u && en(e, "set", "$attrs"), {}.NODE_ENV !== "production" && _c(t || {}, s, e);
}
function mc(e, t, n, o) {
  const [s, a] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let l in t) {
      if (ys(l))
        continue;
      const u = t[l];
      let c;
      s && Ee(s, c = Ut(l)) ? !a || !a.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : qs(e.emitsOptions, l) || (!(l in o) || u !== o[l]) && (o[l] = u, i = !0);
    }
  if (a) {
    const l = _e(n), u = r || Ue;
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      n[d] = ja(s, l, d, u[d], e, !Ee(u, d));
    }
  }
  return i;
}
function ja(e, t, n, o, s, a) {
  const i = e[n];
  if (i != null) {
    const r = Ee(i, "default");
    if (r && o === void 0) {
      const l = i.default;
      if (i.type !== Function && ce(l)) {
        const { propsDefaults: u } = s;
        n in u ? o = u[n] : (fo(s), o = u[n] = l.call(null, t), Kn());
      } else
        o = l;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (a && !r ? o = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Qt(n)) && (o = !0));
  }
  return o;
}
function hc(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const a = e.props, i = {}, r = [];
  let l = !1;
  if (!ce(e)) {
    const c = (d) => {
      l = !0;
      const [g, f] = hc(d, t, !0);
      Xe(i, g), f && r.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !l)
    return Fe(e) && o.set(e, co), co;
  if (ie(a))
    for (let c = 0; c < a.length; c++) {
      ({}).NODE_ENV !== "production" && !je(a[c]) && I("props must be strings when using array syntax.", a[c]);
      const d = Ut(a[c]);
      mr(d) && (i[d] = Ue);
    }
  else if (a) {
    ({}).NODE_ENV !== "production" && !Fe(a) && I("invalid props options", a);
    for (const c in a) {
      const d = Ut(c);
      if (mr(d)) {
        const g = a[c], f = i[d] = ie(g) || ce(g) ? { type: g } : Object.assign({}, g);
        if (f) {
          const m = _r(Boolean, f.type), S = _r(String, f.type);
          f[
            0
            /* BooleanFlags.shouldCast */
          ] = m > -1, f[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = S < 0 || m < S, (m > -1 || Ee(f, "default")) && r.push(d);
        }
      }
    }
  }
  const u = [i, r];
  return Fe(e) && o.set(e, u), u;
}
function mr(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && I(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ha(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function hr(e, t) {
  return Ha(e) === Ha(t);
}
function _r(e, t) {
  return ie(t) ? t.findIndex((n) => hr(n, e)) : ce(t) && hr(t, e) ? 0 : -1;
}
function _c(e, t, n) {
  const o = _e(t), s = n.propsOptions[0];
  for (const a in s) {
    let i = s[a];
    i != null && wf(a, o[a], i, !Ee(e, a) && !Ee(e, Qt(a)));
  }
}
function wf(e, t, n, o) {
  const { type: s, required: a, validator: i } = n;
  if (a && o) {
    I('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (s != null && s !== !0) {
      let r = !1;
      const l = ie(s) ? s : [s], u = [];
      for (let c = 0; c < l.length && !r; c++) {
        const { valid: d, expectedType: g } = xf(t, l[c]);
        u.push(g || ""), r = d;
      }
      if (!r) {
        I(Ef(e, t, u));
        return;
      }
    }
    i && !i(t) && I('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Cf = /* @__PURE__ */ kn("String,Number,Boolean,Function,Symbol,BigInt");
function xf(e, t) {
  let n;
  const o = Ha(t);
  if (Cf(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Fe(e) : o === "Array" ? n = ie(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Ef(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Wn).join(" | ")}`;
  const s = n[0], a = ui(t), i = vr(t, s), r = vr(t, a);
  return n.length === 1 && yr(s) && !kf(s, a) && (o += ` with value ${i}`), o += `, got ${a} `, yr(a) && (o += `with value ${r}.`), o;
}
function vr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function yr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function kf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const vc = (e) => e[0] === "_" || e === "$stable", Ci = (e) => ie(e) ? e.map(Lt) : [Lt(e)], Af = (e, t, n) => {
  if (t._n)
    return t;
  const o = b((...s) => ({}.NODE_ENV !== "production" && Ke && I(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Ci(t(...s))), n);
  return o._c = !1, o;
}, yc = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (vc(s))
      continue;
    const a = e[s];
    if (ce(a))
      t[s] = Af(s, a, o);
    else if (a != null) {
      ({}).NODE_ENV !== "production" && I(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
      const i = Ci(a);
      t[s] = () => i;
    }
  }
}, bc = (e, t) => {
  ({}).NODE_ENV !== "production" && !Zo(e.vnode) && I("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Ci(t);
  e.slots.default = () => n;
}, Tf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = _e(t), Ts(t, "_", n)) : yc(t, e.slots = {});
  } else
    e.slots = {}, t && bc(e, t);
  Ts(e.slots, Ks, 1);
}, Df = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let a = !0, i = Ue;
  if (o.shapeFlag & 32) {
    const r = t._;
    r ? {}.NODE_ENV !== "production" && qn ? Xe(s, t) : n && r === 1 ? a = !1 : (Xe(s, t), !n && r === 1 && delete s._) : (a = !t.$stable, yc(t, s)), i = t;
  } else
    t && (bc(e, t), i = { default: 1 });
  if (a)
    for (const r in s)
      !vc(r) && !(r in i) && delete s[r];
};
function Sc() {
  return {
    app: null,
    config: {
      isNativeTag: vl,
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
let Lf = 0;
function Pf(e, t) {
  return function(o, s = null) {
    ce(o) || (o = Object.assign({}, o)), s != null && !Fe(s) && ({}.NODE_ENV !== "production" && I("root props passed to app.mount() must be an object."), s = null);
    const a = Sc(), i = /* @__PURE__ */ new Set();
    let r = !1;
    const l = a.app = {
      _uid: Lf++,
      _component: o,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: Cr,
      get config() {
        return a.config;
      },
      set config(u) {
        ({}).NODE_ENV !== "production" && I("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...c) {
        return i.has(u) ? {}.NODE_ENV !== "production" && I("Plugin has already been applied to target app.") : u && ce(u.install) ? (i.add(u), u.install(l, ...c)) : ce(u) ? (i.add(u), u(l, ...c)) : {}.NODE_ENV !== "production" && I('A plugin must either be a function or an object with an "install" function.'), l;
      },
      mixin(u) {
        return a.mixins.includes(u) ? {}.NODE_ENV !== "production" && I("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : a.mixins.push(u), l;
      },
      component(u, c) {
        return {}.NODE_ENV !== "production" && Ga(u, a.config), c ? ({}.NODE_ENV !== "production" && a.components[u] && I(`Component "${u}" has already been registered in target app.`), a.components[u] = c, l) : a.components[u];
      },
      directive(u, c) {
        return {}.NODE_ENV !== "production" && uc(u), c ? ({}.NODE_ENV !== "production" && a.directives[u] && I(`Directive "${u}" has already been registered in target app.`), a.directives[u] = c, l) : a.directives[u];
      },
      mount(u, c, d) {
        if (r)
          ({}).NODE_ENV !== "production" && I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && u.__vue_app__ && I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = p(o, s);
          return g.appContext = a, {}.NODE_ENV !== "production" && (a.reload = () => {
            e(Rt(g), u, d);
          }), c && t ? t(g, u) : e(g, u, d), r = !0, l._container = u, u.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = g.component, Ng(l, Cr)), Ys(g.component) || g.component.proxy;
        }
      },
      unmount() {
        r ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, Fg(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && I("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return {}.NODE_ENV !== "production" && u in a.provides && I(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), a.provides[u] = c, l;
      }
    };
    return l;
  };
}
function qa(e, t, n, o, s = !1) {
  if (ie(e)) {
    e.forEach((g, f) => qa(g, t && (ie(t) ? t[f] : t), n, o, s));
    return;
  }
  if (Po(o) && !s)
    return;
  const a = o.shapeFlag & 4 ? Ys(o.component) || o.component.proxy : o.el, i = s ? null : a, { i: r, r: l } = e;
  if ({}.NODE_ENV !== "production" && !r) {
    I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = t && t.r, c = r.refs === Ue ? r.refs = {} : r.refs, d = r.setupState;
  if (u != null && u !== l && (je(u) ? (c[u] = null, Ee(d, u) && (d[u] = null)) : Je(u) && (u.value = null)), ce(l))
    Zt(l, r, 12, [i, c]);
  else {
    const g = je(l), f = Je(l);
    if (g || f) {
      const m = () => {
        if (e.f) {
          const S = g ? Ee(d, l) ? d[l] : c[l] : l.value;
          s ? ie(S) && li(S, a) : ie(S) ? S.includes(a) || S.push(a) : g ? (c[l] = [a], Ee(d, l) && (d[l] = c[l])) : (l.value = [a], e.k && (c[e.k] = l.value));
        } else
          g ? (c[l] = i, Ee(d, l) && (d[l] = i)) : f ? (l.value = i, e.k && (c[e.k] = i)) : {}.NODE_ENV !== "production" && I("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (m.id = -1, vt(m, n)) : m();
    } else
      ({}).NODE_ENV !== "production" && I("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let Co, _n;
function Xt(e, t) {
  e.appContext.config.performance && Ms() && _n.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Ig(e, t, Ms() ? _n.now() : Date.now());
}
function Yt(e, t) {
  if (e.appContext.config.performance && Ms()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    _n.mark(o), _n.measure(`<${Js(e, e.type)}> ${t}`, n, o), _n.clearMarks(n), _n.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && $g(e, t, Ms() ? _n.now() : Date.now());
}
function Ms() {
  return Co !== void 0 || (typeof window != "undefined" && window.performance ? (Co = !0, _n = window.performance) : Co = !1), Co;
}
function Nf() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const vt = Kg;
function Ff(e) {
  return Mf(e);
}
function Mf(e, t) {
  Nf();
  const n = wl();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && Yl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: s, patchProp: a, createElement: i, createText: r, createComment: l, setText: u, setElementText: c, parentNode: d, nextSibling: g, setScopeId: f = ot, insertStaticContent: m } = e, S = (h, w, E, N = null, P = null, R = null, G = !1, B = null, z = {}.NODE_ENV !== "production" && qn ? !1 : !!w.dynamicChildren) => {
    if (h === w)
      return;
    h && !In(h, w) && (N = Q(h), ut(h, P, R, !0), h = null), w.patchFlag === -2 && (z = !1, w.dynamicChildren = null);
    const { type: O, ref: te, shapeFlag: J } = w;
    switch (O) {
      case Qo:
        x(h, w, E, N);
        break;
      case tt:
        k(h, w, E, N);
        break;
      case xs:
        h == null ? D(w, E, N, G) : {}.NODE_ENV !== "production" && U(h, w, E, G);
        break;
      case ke:
        Ne(h, w, E, N, P, R, G, B, z);
        break;
      default:
        J & 1 ? Se(h, w, E, N, P, R, G, B, z) : J & 6 ? Ge(h, w, E, N, P, R, G, B, z) : J & 64 || J & 128 ? O.process(h, w, E, N, P, R, G, B, z, $e) : {}.NODE_ENV !== "production" && I("Invalid VNode type:", O, `(${typeof O})`);
    }
    te != null && P && qa(te, h && h.ref, R, w || h, !w);
  }, x = (h, w, E, N) => {
    if (h == null)
      o(w.el = r(w.children), E, N);
    else {
      const P = w.el = h.el;
      w.children !== h.children && u(P, w.children);
    }
  }, k = (h, w, E, N) => {
    h == null ? o(w.el = l(w.children || ""), E, N) : w.el = h.el;
  }, D = (h, w, E, N) => {
    [h.el, h.anchor] = m(h.children, w, E, N, h.el, h.anchor);
  }, U = (h, w, E, N) => {
    if (w.children !== h.children) {
      const P = g(h.anchor);
      X(h), [w.el, w.anchor] = m(w.children, E, P, N);
    } else
      w.el = h.el, w.anchor = h.anchor;
  }, M = ({ el: h, anchor: w }, E, N) => {
    let P;
    for (; h && h !== w; )
      P = g(h), o(h, E, N), h = P;
    o(w, E, N);
  }, X = ({ el: h, anchor: w }) => {
    let E;
    for (; h && h !== w; )
      E = g(h), s(h), h = E;
    s(w);
  }, Se = (h, w, E, N, P, R, G, B, z) => {
    G = G || w.type === "svg", h == null ? oe(w, E, N, P, R, G, B, z) : Ae(h, w, P, R, G, B, z);
  }, oe = (h, w, E, N, P, R, G, B) => {
    let z, O;
    const { type: te, props: J, shapeFlag: se, transition: re, dirs: ye } = h;
    if (z = h.el = i(h.type, R, J && J.is, J), se & 8 ? c(z, h.children) : se & 16 && pe(h.children, z, null, N, P, R && te !== "foreignObject", G, B), ye && Nn(h, null, N, "created"), j(z, h, h.scopeId, G, N), J) {
      for (const L in J)
        L !== "value" && !ys(L) && a(z, L, null, J[L], R, h.children, N, P, q);
      "value" in J && a(z, "value", null, J.value), (O = J.onVnodeBeforeMount) && Ot(O, N, h);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(z, "__vnode", {
      value: h,
      enumerable: !1
    }), Object.defineProperty(z, "__vueParentComponent", {
      value: N,
      enumerable: !1
    })), ye && Nn(h, null, N, "beforeMount");
    const Ie = (!P || P && !P.pendingBranch) && re && !re.persisted;
    Ie && re.beforeEnter(z), o(z, w, E), ((O = J && J.onVnodeMounted) || Ie || ye) && vt(() => {
      O && Ot(O, N, h), Ie && re.enter(z), ye && Nn(h, null, N, "mounted");
    }, P);
  }, j = (h, w, E, N, P) => {
    if (E && f(h, E), N)
      for (let R = 0; R < N.length; R++)
        f(h, N[R]);
    if (P) {
      let R = P.subTree;
      if ({}.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && (R = tc(R.children) || R), w === R) {
        const G = P.vnode;
        j(h, G, G.scopeId, G.slotScopeIds, P.parent);
      }
    }
  }, pe = (h, w, E, N, P, R, G, B, z = 0) => {
    for (let O = z; O < h.length; O++) {
      const te = h[O] = B ? pn(h[O]) : Lt(h[O]);
      S(null, te, w, E, N, P, R, G, B);
    }
  }, Ae = (h, w, E, N, P, R, G) => {
    const B = w.el = h.el;
    let { patchFlag: z, dynamicChildren: O, dirs: te } = w;
    z |= h.patchFlag & 16;
    const J = h.props || Ue, se = w.props || Ue;
    let re;
    E && Fn(E, !1), (re = se.onVnodeBeforeUpdate) && Ot(re, E, w, h), te && Nn(w, h, E, "beforeUpdate"), E && Fn(E, !0), {}.NODE_ENV !== "production" && qn && (z = 0, G = !1, O = null);
    const ye = P && w.type !== "foreignObject";
    if (O ? (xe(h.dynamicChildren, O, B, E, N, ye, R), {}.NODE_ENV !== "production" && E && E.type.__hmrId && Cs(h, w)) : G || st(h, w, B, null, E, N, ye, R, !1), z > 0) {
      if (z & 16)
        W(B, w, J, se, E, N, P);
      else if (z & 2 && J.class !== se.class && a(B, "class", null, se.class, P), z & 4 && a(B, "style", J.style, se.style, P), z & 8) {
        const Ie = w.dynamicProps;
        for (let L = 0; L < Ie.length; L++) {
          const ee = Ie[L], Ve = J[ee], at = se[ee];
          (at !== Ve || ee === "value") && a(B, ee, Ve, at, P, h.children, E, N, q);
        }
      }
      z & 1 && h.children !== w.children && c(B, w.children);
    } else
      !G && O == null && W(B, w, J, se, E, N, P);
    ((re = se.onVnodeUpdated) || te) && vt(() => {
      re && Ot(re, E, w, h), te && Nn(w, h, E, "updated");
    }, N);
  }, xe = (h, w, E, N, P, R, G) => {
    for (let B = 0; B < w.length; B++) {
      const z = h[B], O = w[B], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !In(z, O) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 70) ? d(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      S(z, O, te, null, N, P, R, G, !0);
    }
  }, W = (h, w, E, N, P, R, G) => {
    if (E !== N) {
      if (E !== Ue)
        for (const B in E)
          !ys(B) && !(B in N) && a(h, B, E[B], null, G, w.children, P, R, q);
      for (const B in N) {
        if (ys(B))
          continue;
        const z = N[B], O = E[B];
        z !== O && B !== "value" && a(h, B, O, z, G, w.children, P, R, q);
      }
      "value" in N && a(h, "value", E.value, N.value);
    }
  }, Ne = (h, w, E, N, P, R, G, B, z) => {
    const O = w.el = h ? h.el : r(""), te = w.anchor = h ? h.anchor : r("");
    let { patchFlag: J, dynamicChildren: se, slotScopeIds: re } = w;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (qn || J & 2048) && (J = 0, z = !1, se = null), re && (B = B ? B.concat(re) : re), h == null ? (o(O, E, N), o(te, E, N), pe(w.children, E, te, P, R, G, B, z)) : J > 0 && J & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (xe(h.dynamicChildren, se, E, P, R, G, B), {}.NODE_ENV !== "production" && P && P.type.__hmrId ? Cs(h, w) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (w.key != null || P && w === P.subTree) && Cs(
        h,
        w,
        !0
        /* shallow */
      )
    )) : st(h, w, E, te, P, R, G, B, z);
  }, Ge = (h, w, E, N, P, R, G, B, z) => {
    w.slotScopeIds = B, h == null ? w.shapeFlag & 512 ? P.ctx.activate(w, E, N, G, z) : Le(w, E, N, P, R, G, z) : Be(h, w, z);
  }, Le = (h, w, E, N, P, R, G) => {
    const B = h.component = Vf(h, N, P);
    if ({}.NODE_ENV !== "production" && B.type.__hmrId && Tg(B), {}.NODE_ENV !== "production" && (bs(h), Xt(B, "mount")), Zo(h) && (B.ctx.renderer = $e), {}.NODE_ENV !== "production" && Xt(B, "init"), jf(B), {}.NODE_ENV !== "production" && Yt(B, "init"), B.asyncDep) {
      if (P && P.registerDep(B, ue), !h.el) {
        const z = B.subTree = p(tt);
        k(null, z, w, E);
      }
      return;
    }
    ue(B, h, w, E, P, R, G), {}.NODE_ENV !== "production" && (Ss(), Yt(B, "mount"));
  }, Be = (h, w, E) => {
    const N = w.component = h.component;
    if (Hg(h, w, E))
      if (N.asyncDep && !N.asyncResolved) {
        ({}).NODE_ENV !== "production" && bs(w), ge(N, w, E), {}.NODE_ENV !== "production" && Ss();
        return;
      } else
        N.next = w, kg(N.update), N.update();
    else
      w.el = h.el, N.vnode = w;
  }, ue = (h, w, E, N, P, R, G) => {
    const B = () => {
      if (h.isMounted) {
        let { next: te, bu: J, u: se, parent: re, vnode: ye } = h, Ie = te, L;
        ({}).NODE_ENV !== "production" && bs(te || h.vnode), Fn(h, !1), te ? (te.el = ye.el, ge(h, te, G)) : te = ye, J && so(J), (L = te.props && te.props.onVnodeBeforeUpdate) && Ot(L, re, te, ye), Fn(h, !0), {}.NODE_ENV !== "production" && Xt(h, "render");
        const ee = fa(h);
        ({}).NODE_ENV !== "production" && Yt(h, "render");
        const Ve = h.subTree;
        h.subTree = ee, {}.NODE_ENV !== "production" && Xt(h, "patch"), S(
          Ve,
          ee,
          // parent may have changed if it's in a teleport
          d(Ve.el),
          // anchor may have changed if it's in a fragment
          Q(Ve),
          h,
          P,
          R
        ), {}.NODE_ENV !== "production" && Yt(h, "patch"), te.el = ee.el, Ie === null && qg(h, ee.el), se && vt(se, P), (L = te.props && te.props.onVnodeUpdated) && vt(() => Ot(L, re, te, ye), P), {}.NODE_ENV !== "production" && Jl(h), {}.NODE_ENV !== "production" && Ss();
      } else {
        let te;
        const { el: J, props: se } = w, { bm: re, m: ye, parent: Ie } = h, L = Po(w);
        if (Fn(h, !1), re && so(re), !L && (te = se && se.onVnodeBeforeMount) && Ot(te, Ie, w), Fn(h, !0), J && de) {
          const ee = () => {
            ({}).NODE_ENV !== "production" && Xt(h, "render"), h.subTree = fa(h), {}.NODE_ENV !== "production" && Yt(h, "render"), {}.NODE_ENV !== "production" && Xt(h, "hydrate"), de(J, h.subTree, h, P, null), {}.NODE_ENV !== "production" && Yt(h, "hydrate");
          };
          L ? w.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && ee()
          ) : ee();
        } else {
          ({}).NODE_ENV !== "production" && Xt(h, "render");
          const ee = h.subTree = fa(h);
          ({}).NODE_ENV !== "production" && Yt(h, "render"), {}.NODE_ENV !== "production" && Xt(h, "patch"), S(null, ee, E, N, h, P, R), {}.NODE_ENV !== "production" && Yt(h, "patch"), w.el = ee.el;
        }
        if (ye && vt(ye, P), !L && (te = se && se.onVnodeMounted)) {
          const ee = w;
          vt(() => Ot(te, Ie, ee), P);
        }
        (w.shapeFlag & 256 || Ie && Po(Ie.vnode) && Ie.vnode.shapeFlag & 256) && h.a && vt(h.a, P), h.isMounted = !0, {}.NODE_ENV !== "production" && Mg(h), w = E = N = null;
      }
    }, z = h.effect = new gi(
      B,
      () => Hs(O),
      h.scope
      // track it in component's effect scope
    ), O = h.update = () => z.run();
    O.id = h.uid, Fn(h, !0), {}.NODE_ENV !== "production" && (z.onTrack = h.rtc ? (te) => so(h.rtc, te) : void 0, z.onTrigger = h.rtg ? (te) => so(h.rtg, te) : void 0, O.ownerInstance = h), O();
  }, ge = (h, w, E) => {
    w.component = h;
    const N = h.vnode.props;
    h.vnode = w, h.next = null, Sf(h, w.props, N, E), Df(h, w.children, E), Yn(), rr(), Jn();
  }, st = (h, w, E, N, P, R, G, B, z = !1) => {
    const O = h && h.children, te = h ? h.shapeFlag : 0, J = w.children, { patchFlag: se, shapeFlag: re } = w;
    if (se > 0) {
      if (se & 128) {
        ht(O, J, E, N, P, R, G, B, z);
        return;
      } else if (se & 256) {
        sn(O, J, E, N, P, R, G, B, z);
        return;
      }
    }
    re & 8 ? (te & 16 && q(O, P, R), J !== O && c(E, J)) : te & 16 ? re & 16 ? ht(O, J, E, N, P, R, G, B, z) : q(O, P, R, !0) : (te & 8 && c(E, ""), re & 16 && pe(J, E, N, P, R, G, B, z));
  }, sn = (h, w, E, N, P, R, G, B, z) => {
    h = h || co, w = w || co;
    const O = h.length, te = w.length, J = Math.min(O, te);
    let se;
    for (se = 0; se < J; se++) {
      const re = w[se] = z ? pn(w[se]) : Lt(w[se]);
      S(h[se], re, E, null, P, R, G, B, z);
    }
    O > te ? q(h, P, R, !0, !1, J) : pe(w, E, N, P, R, G, B, z, J);
  }, ht = (h, w, E, N, P, R, G, B, z) => {
    let O = 0;
    const te = w.length;
    let J = h.length - 1, se = te - 1;
    for (; O <= J && O <= se; ) {
      const re = h[O], ye = w[O] = z ? pn(w[O]) : Lt(w[O]);
      if (In(re, ye))
        S(re, ye, E, null, P, R, G, B, z);
      else
        break;
      O++;
    }
    for (; O <= J && O <= se; ) {
      const re = h[J], ye = w[se] = z ? pn(w[se]) : Lt(w[se]);
      if (In(re, ye))
        S(re, ye, E, null, P, R, G, B, z);
      else
        break;
      J--, se--;
    }
    if (O > J) {
      if (O <= se) {
        const re = se + 1, ye = re < te ? w[re].el : N;
        for (; O <= se; )
          S(null, w[O] = z ? pn(w[O]) : Lt(w[O]), E, ye, P, R, G, B, z), O++;
      }
    } else if (O > se)
      for (; O <= J; )
        ut(h[O], P, R, !0), O++;
    else {
      const re = O, ye = O, Ie = /* @__PURE__ */ new Map();
      for (O = ye; O <= se; O++) {
        const Qe = w[O] = z ? pn(w[O]) : Lt(w[O]);
        Qe.key != null && ({}.NODE_ENV !== "production" && Ie.has(Qe.key) && I("Duplicate keys found during update:", JSON.stringify(Qe.key), "Make sure keys are unique."), Ie.set(Qe.key, O));
      }
      let L, ee = 0;
      const Ve = se - ye + 1;
      let at = !1, Ct = 0;
      const Kt = new Array(Ve);
      for (O = 0; O < Ve; O++)
        Kt[O] = 0;
      for (O = re; O <= J; O++) {
        const Qe = h[O];
        if (ee >= Ve) {
          ut(Qe, P, R, !0);
          continue;
        }
        let _t;
        if (Qe.key != null)
          _t = Ie.get(Qe.key);
        else
          for (L = ye; L <= se; L++)
            if (Kt[L - ye] === 0 && In(Qe, w[L])) {
              _t = L;
              break;
            }
        _t === void 0 ? ut(Qe, P, R, !0) : (Kt[_t - ye] = O + 1, _t >= Ct ? Ct = _t : at = !0, S(Qe, w[_t], E, null, P, R, G, B, z), ee++);
      }
      const wo = at ? Of(Kt) : co;
      for (L = wo.length - 1, O = Ve - 1; O >= 0; O--) {
        const Qe = ye + O, _t = w[Qe], ls = Qe + 1 < te ? w[Qe + 1].el : N;
        Kt[O] === 0 ? S(null, _t, E, ls, P, R, G, B, z) : at && (L < 0 || O !== wo[L] ? ct(
          _t,
          E,
          ls,
          2
          /* MoveType.REORDER */
        ) : L--);
      }
    }
  }, ct = (h, w, E, N, P = null) => {
    const { el: R, type: G, transition: B, children: z, shapeFlag: O } = h;
    if (O & 6) {
      ct(h.component.subTree, w, E, N);
      return;
    }
    if (O & 128) {
      h.suspense.move(w, E, N);
      return;
    }
    if (O & 64) {
      G.move(h, w, E, $e);
      return;
    }
    if (G === ke) {
      o(R, w, E);
      for (let J = 0; J < z.length; J++)
        ct(z[J], w, E, N);
      o(h.anchor, w, E);
      return;
    }
    if (G === xs) {
      M(h, w, E);
      return;
    }
    if (N !== 2 && O & 1 && B)
      if (N === 0)
        B.beforeEnter(R), o(R, w, E), vt(() => B.enter(R), P);
      else {
        const { leave: J, delayLeave: se, afterLeave: re } = B, ye = () => o(R, w, E), Ie = () => {
          J(R, () => {
            ye(), re && re();
          });
        };
        se ? se(R, ye, Ie) : Ie();
      }
    else
      o(R, w, E);
  }, ut = (h, w, E, N = !1, P = !1) => {
    const { type: R, props: G, ref: B, children: z, dynamicChildren: O, shapeFlag: te, patchFlag: J, dirs: se } = h;
    if (B != null && qa(B, null, E, h, !0), te & 256) {
      w.ctx.deactivate(h);
      return;
    }
    const re = te & 1 && se, ye = !Po(h);
    let Ie;
    if (ye && (Ie = G && G.onVnodeBeforeUnmount) && Ot(Ie, w, h), te & 6)
      Y(h.component, E, N);
    else {
      if (te & 128) {
        h.suspense.unmount(E, N);
        return;
      }
      re && Nn(h, null, w, "beforeUnmount"), te & 64 ? h.type.remove(h, w, E, P, $e, N) : O && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== ke || J > 0 && J & 64) ? q(O, w, E, !1, !0) : (R === ke && J & 384 || !P && te & 16) && q(z, w, E), N && Gt(h);
    }
    (ye && (Ie = G && G.onVnodeUnmounted) || re) && vt(() => {
      Ie && Ot(Ie, w, h), re && Nn(h, null, w, "unmounted");
    }, E);
  }, Gt = (h) => {
    const { type: w, el: E, anchor: N, transition: P } = h;
    if (w === ke) {
      ({}).NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && P && !P.persisted ? h.children.forEach((G) => {
        G.type === tt ? s(G.el) : Gt(G);
      }) : A(E, N);
      return;
    }
    if (w === xs) {
      X(h);
      return;
    }
    const R = () => {
      s(E), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (h.shapeFlag & 1 && P && !P.persisted) {
      const { leave: G, delayLeave: B } = P, z = () => G(E, R);
      B ? B(h.el, R, z) : z();
    } else
      R();
  }, A = (h, w) => {
    let E;
    for (; h !== w; )
      E = g(h), s(h), h = E;
    s(w);
  }, Y = (h, w, E) => {
    ({}).NODE_ENV !== "production" && h.type.__hmrId && Dg(h);
    const { bum: N, scope: P, update: R, subTree: G, um: B } = h;
    N && so(N), P.stop(), R && (R.active = !1, ut(G, h, w, E)), B && vt(B, w), vt(() => {
      h.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve()), {}.NODE_ENV !== "production" && Bg(h);
  }, q = (h, w, E, N = !1, P = !1, R = 0) => {
    for (let G = R; G < h.length; G++)
      ut(h[G], w, E, N, P);
  }, Q = (h) => h.shapeFlag & 6 ? Q(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : g(h.anchor || h.el), Te = (h, w, E) => {
    h == null ? w._vnode && ut(w._vnode, null, null, !0) : S(w._vnode || null, h, w, null, null, null, E), rr(), Kl(), w._vnode = h;
  }, $e = {
    p: S,
    um: ut,
    m: ct,
    r: Gt,
    mt: Le,
    mc: pe,
    pc: st,
    pbc: xe,
    n: Q,
    o: e
  };
  let me, de;
  return t && ([me, de] = t($e)), {
    render: Te,
    hydrate: me,
    createApp: Pf(Te, me)
  };
}
function Fn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Cs(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (ie(o) && ie(s))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let r = s[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = pn(s[a]), r.el = i.el), n || Cs(i, r)), r.type === Qo && (r.el = i.el), {}.NODE_ENV !== "production" && r.type === tt && !r.el && (r.el = i.el);
    }
}
function Of(e) {
  const t = e.slice(), n = [0];
  let o, s, a, i, r;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const u = e[o];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[o] = s, n.push(o);
        continue;
      }
      for (a = 0, i = n.length - 1; a < i; )
        r = a + i >> 1, e[n[r]] < u ? a = r + 1 : i = r;
      u < e[n[a]] && (a > 0 && (t[o] = n[a - 1]), n[a] = o);
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; )
    n[a] = i, i = t[i];
  return n;
}
const Bf = (e) => e.__isTeleport, ke = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), Qo = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), tt = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), xs = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), No = [];
let Pt = null;
function v(e = !1) {
  No.push(Pt = e ? null : []);
}
function If() {
  No.pop(), Pt = No[No.length - 1] || null;
}
let Vo = 1;
function br(e) {
  Vo += e;
}
function wc(e) {
  return e.dynamicChildren = Vo > 0 ? Pt || co : null, If(), Vo > 0 && Pt && Pt.push(e), e;
}
function T(e, t, n, o, s, a) {
  return wc(C(
    e,
    t,
    n,
    o,
    s,
    a,
    !0
    /* isBlock */
  ));
}
function F(e, t, n, o, s) {
  return wc(p(
    e,
    t,
    n,
    o,
    s,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function go(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function In(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && ao.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const $f = (...e) => xc(...e), Ks = "__vInternal", Cc = ({ key: e }) => e != null ? e : null, Es = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? je(e) || Je(e) || ce(e) ? { i: Ze, r: e, k: t, f: !!n } : e : null;
function C(e, t = null, n = null, o = 0, s = null, a = e === ke ? 0 : 1, i = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cc(t),
    ref: t && Es(t),
    scopeId: ec,
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
    ctx: Ze
  };
  return r ? (xi(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= je(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && I("VNode created with invalid key (NaN). VNode type:", l.type), Vo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Pt.push(l), l;
}
const p = {}.NODE_ENV !== "production" ? $f : xc;
function xc(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === dc) && ({}.NODE_ENV !== "production" && !e && I(`Invalid vnode type when creating vnode: ${e}.`), e = tt), go(e)) {
    const r = Rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xi(r, n), Vo > 0 && !a && Pt && (r.shapeFlag & 6 ? Pt[Pt.indexOf(e)] = r : Pt.push(r)), r.patchFlag |= -2, r;
  }
  if (Dc(e) && (e = e.__vccOpts), t) {
    t = Ws(t);
    let { class: r, style: l } = t;
    r && !je(r) && (t.class = he(r)), Fe(l) && (Ma(l) && !ie(l) && (l = Xe({}, l)), t.style = nt(l));
  }
  const i = je(e) ? 1 : Gg(e) ? 128 : Bf(e) ? 64 : Fe(e) ? 4 : ce(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && Ma(e) && (e = _e(e), I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), C(e, t, n, o, s, i, a, !0);
}
function Ws(e) {
  return e ? Ma(e) || Ks in e ? Xe({}, e) : e : null;
}
function Rt(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: i } = e, r = t ? Xs(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: r,
    key: r && Cc(r),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? ie(s) ? s.concat(Es(t)) : [s, Es(t)] : Es(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && a === -1 && ie(i) ? i.map(Ec) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ke ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Rt(e.ssContent),
    ssFallback: e.ssFallback && Rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ec(e) {
  const t = Rt(e);
  return ie(e.children) && (t.children = e.children.map(Ec)), t;
}
function zo(e = " ", t = 0) {
  return p(Qo, null, e, t);
}
function ne(e = "", t = !1) {
  return t ? (v(), F(tt, null, e)) : p(tt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? p(tt) : ie(e) ? p(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? pn(e) : p(Qo, null, String(e));
}
function pn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
}
function xi(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), xi(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Ks in t) ? t._ctx = Ze : s === 3 && Ze && (Ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    ce(t) ? (t = { default: t, _ctx: Ze }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [zo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Xs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = he([t.class, o.class]));
      else if (s === "style")
        t.style = nt([t.style, o.style]);
      else if (Xo(s)) {
        const a = t[s], i = o[s];
        i && a !== i && !(ie(a) && a.includes(i)) && (t[s] = a ? [].concat(a, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ot(e, t, n, o = null) {
  Tt(e, t, 7, [
    n,
    o
  ]);
}
const Uf = Sc();
let Rf = 0;
function Vf(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Uf, a = {
    uid: Rf++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Cl(
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
    propsOptions: hc(o, s),
    emitsOptions: Ql(o, s),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: Ue,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Ue,
    data: Ue,
    props: Ue,
    attrs: Ue,
    slots: Ue,
    refs: Ue,
    setupState: Ue,
    setupContext: null,
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
  return {}.NODE_ENV !== "production" ? a.ctx = uf(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Rg.bind(null, a), e.ce && e.ce(a), a;
}
let Ke = null;
const Ei = () => Ke || Ze, fo = (e) => {
  Ke = e, e.scope.on();
}, Kn = () => {
  Ke && Ke.scope.off(), Ke = null;
}, zf = /* @__PURE__ */ kn("slot,component");
function Ga(e, t) {
  const n = t.isNativeTag || vl;
  (zf(e) || n(e)) && I("Do not use built-in or reserved HTML elements as component id: " + e);
}
function kc(e) {
  return e.vnode.shapeFlag & 4;
}
let jo = !1;
function jf(e, t = !1) {
  jo = t;
  const { props: n, children: o } = e.vnode, s = kc(e);
  yf(e, n, s, t), Tf(e, o);
  const a = s ? Hf(e, t) : void 0;
  return jo = !1, a;
}
function Hf(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && Ga(o.name, e.appContext.config), o.components) {
      const a = Object.keys(o.components);
      for (let i = 0; i < a.length; i++)
        Ga(a[i], e.appContext.config);
    }
    if (o.directives) {
      const a = Object.keys(o.directives);
      for (let i = 0; i < a.length; i++)
        uc(a[i]);
    }
    o.compilerOptions && Ac() && I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Il(new Proxy(e.ctx, fc)), {}.NODE_ENV !== "production" && df(e);
  const { setup: s } = o;
  if (s) {
    const a = e.setupContext = s.length > 1 ? qf(e) : null;
    fo(e), Yn();
    const i = Zt(s, e, 0, [{}.NODE_ENV !== "production" ? lo(e.props) : e.props, a]);
    if (Jn(), Kn(), ci(i)) {
      if (i.then(Kn, Kn), t)
        return i.then((r) => {
          Sr(e, r, t);
        }).catch((r) => {
          js(
            r,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = i, {}.NODE_ENV !== "production" && !e.suspense) {
        const r = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        I(`Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Sr(e, i, t);
  } else
    Tc(e, t);
}
function Sr(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) ? ({}.NODE_ENV !== "production" && go(t) && I("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Vl(t), {}.NODE_ENV !== "production" && gf(e)) : {}.NODE_ENV !== "production" && t !== void 0 && I(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Tc(e, n);
}
let Ka;
const Ac = () => !Ka;
function Tc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Ka && !o.render) {
      const s = o.template || wi(e).template;
      if (s) {
        ({}).NODE_ENV !== "production" && Xt(e, "compile");
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: r, compilerOptions: l } = o, u = Xe(Xe({
          isCustomElement: a,
          delimiters: r
        }, i), l);
        o.render = Ka(s, u), {}.NODE_ENV !== "production" && Yt(e, "compile");
      }
    }
    e.render = o.render || ot;
  }
  fo(e), Yn(), pf(e), Jn(), Kn(), {}.NODE_ENV !== "production" && !o.render && e.render === ot && !t && (o.template ? I(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : I("Component is missing template or render function."));
}
function wr(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(t, n) {
      return Ps(), pt(e, "get", "$attrs"), t[n];
    },
    set() {
      return I("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return I("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return pt(e, "get", "$attrs"), t[n];
    }
  });
}
function qf(e) {
  const t = (o) => {
    if ({}.NODE_ENV !== "production" && (e.exposed && I("expose() should be called only once per setup()."), o != null)) {
      let s = typeof o;
      s === "object" && (ie(o) ? s = "array" : Je(o) && (s = "ref")), s !== "object" && I(`expose() should be passed a plain object, received ${s}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = wr(e));
    },
    get slots() {
      return lo(e.slots);
    },
    get emit() {
      return (o, ...s) => e.emit(o, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = wr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ys(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Vl(Il(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Gn)
          return Gn[n](e);
      },
      has(t, n) {
        return n in t || n in Gn;
      }
    }));
}
const Gf = /(?:^|[-_])(\w)/g, Kf = (e) => e.replace(Gf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ki(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Js(e, t, n = !1) {
  let o = ki(t);
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
    o = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return o ? Kf(o) : n ? "App" : "Anonymous";
}
function Dc(e) {
  return ce(e) && "__vccOpts" in e;
}
const y = (e, t) => _g(e, t, jo);
function Ho(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Fe(t) && !ie(t) ? go(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && go(n) && (n = [n]), p(e, t, n));
}
const Wf = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), Xf = () => {
  {
    const e = We(Wf);
    return e || {}.NODE_ENV !== "production" && I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function ha(e) {
  return !!(e && e.__v_isShallow);
}
function Yf() {
  if ({}.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(d) {
      return Fe(d) ? d.__isVue ? ["div", e, "VueInstance"] : Je(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        r(d.value),
        ">"
      ] : jn(d) ? [
        "div",
        {},
        ["span", e, ha(d) ? "ShallowReactive" : "Reactive"],
        "<",
        r(d),
        `>${Cn(d) ? " (readonly)" : ""}`
      ] : Cn(d) ? [
        "div",
        {},
        ["span", e, ha(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        r(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...a(d.$)
        ];
    }
  };
  function a(d) {
    const g = [];
    d.type.props && d.props && g.push(i("props", _e(d.props))), d.setupState !== Ue && g.push(i("setup", d.setupState)), d.data !== Ue && g.push(i("data", _e(d.data)));
    const f = l(d, "computed");
    f && g.push(i("computed", f));
    const m = l(d, "inject");
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
      ["object", { object: d }]
    ]), g;
  }
  function i(d, g) {
    return g = Xe({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
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
  function r(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : Fe(d) ? ["object", { object: g ? _e(d) : d }] : ["span", n, String(d)];
  }
  function l(d, g) {
    const f = d.type;
    if (ce(f))
      return;
    const m = {};
    for (const S in d.ctx)
      u(f, S, g) && (m[S] = d.ctx[S]);
    return m;
  }
  function u(d, g, f) {
    const m = d[f];
    if (ie(m) && m.includes(g) || Fe(m) && g in m || d.extends && u(d.extends, g, f) || d.mixins && d.mixins.some((S) => u(S, g, f)))
      return !0;
  }
  function c(d) {
    return ha(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Cr = "3.2.47", Jf = "http://www.w3.org/2000/svg", $n = typeof document != "undefined" ? document : null, xr = $n && /* @__PURE__ */ $n.createElement("template"), Zf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? $n.createElementNS(Jf, e) : $n.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => $n.createTextNode(e),
  createComment: (e) => $n.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $n.querySelector(e),
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
      xr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const r = xr.content;
      if (o) {
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
};
function Qf(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ep(e, t, n) {
  const o = e.style, s = je(n);
  if (n && !s) {
    if (t && !je(t))
      for (const a in t)
        n[a] == null && Wa(o, a, "");
    for (const a in n)
      Wa(o, a, n[a]);
  } else {
    const a = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = a);
  }
}
const tp = /[^\\];\s*$/, Er = /\s*!important$/;
function Wa(e, t, n) {
  if (ie(n))
    n.forEach((o) => Wa(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && tp.test(n) && I(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = np(e, t);
    Er.test(n) ? e.setProperty(Qt(o), n.replace(Er, ""), "important") : e[o] = n;
  }
}
const kr = ["Webkit", "Moz", "ms"], _a = {};
function np(e, t) {
  const n = _a[t];
  if (n)
    return n;
  let o = Ut(t);
  if (o !== "filter" && o in e)
    return _a[t] = o;
  o = Wn(o);
  for (let s = 0; s < kr.length; s++) {
    const a = kr[s] + o;
    if (a in e)
      return _a[t] = a;
  }
  return t;
}
const Ar = "http://www.w3.org/1999/xlink";
function op(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ar, t.slice(6, t.length)) : e.setAttributeNS(Ar, t, n);
  else {
    const a = Ad(t);
    n == null || a && !hl(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function sp(e, t, n, o, s, a, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, a), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const l = n == null ? "" : n;
    (e.value !== l || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = hl(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ({}).NODE_ENV !== "production" && !r && I(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
  }
  r && e.removeAttribute(t);
}
function Lc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ap(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function ip(e, t, n, o, s = null) {
  const a = e._vei || (e._vei = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [r, l] = rp(t);
    if (o) {
      const u = a[t] = up(o, s);
      Lc(e, r, u, l);
    } else
      i && (ap(e, r, i, l), a[t] = void 0);
  }
}
const Tr = /(?:Once|Passive|Capture)$/;
function rp(e) {
  let t;
  if (Tr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Tr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qt(e.slice(2)), t];
}
let va = 0;
const lp = /* @__PURE__ */ Promise.resolve(), cp = () => va || (lp.then(() => va = 0), va = Date.now());
function up(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Tt(dp(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = cp(), n;
}
function dp(e, t) {
  if (ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const Dr = /^on[a-z]/, gp = (e, t, n, o, s = !1, a, i, r, l) => {
  t === "class" ? Qf(e, o, s) : t === "style" ? ep(e, n, o) : Xo(t) ? As(t) || ip(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fp(e, t, o, s)) ? sp(e, t, o, a, i, r, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), op(e, t, o, s));
};
function fp(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Dr.test(t) && ce(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Dr.test(t) && je(n) ? !1 : t in e;
}
const rn = "transition", xo = "animation", vn = (e, { slots: t }) => Ho(oc, pp(e), t);
vn.displayName = "Transition";
const Pc = {
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
vn.props = /* @__PURE__ */ Xe({}, oc.props, Pc);
const Mn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Lr = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function pp(e) {
  const t = {};
  for (const W in e)
    W in Pc || (t[W] = e[W]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: o, duration: s, enterFromClass: a = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: g = `${n}-leave-active`, leaveToClass: f = `${n}-leave-to` } = e, m = mp(s), S = m && m[0], x = m && m[1], { onBeforeEnter: k, onEnter: D, onEnterCancelled: U, onLeave: M, onLeaveCancelled: X, onBeforeAppear: Se = k, onAppear: oe = D, onAppearCancelled: j = U } = t, pe = (W, Ne, Ge) => {
    On(W, Ne ? c : r), On(W, Ne ? u : i), Ge && Ge();
  }, Ae = (W, Ne) => {
    W._isLeaving = !1, On(W, d), On(W, f), On(W, g), Ne && Ne();
  }, xe = (W) => (Ne, Ge) => {
    const Le = W ? oe : D, Be = () => pe(Ne, W, Ge);
    Mn(Le, [Ne, Be]), Pr(() => {
      On(Ne, W ? l : a), ln(Ne, W ? c : r), Lr(Le) || Nr(Ne, o, S, Be);
    });
  };
  return Xe(t, {
    onBeforeEnter(W) {
      Mn(k, [W]), ln(W, a), ln(W, i);
    },
    onBeforeAppear(W) {
      Mn(Se, [W]), ln(W, l), ln(W, u);
    },
    onEnter: xe(!1),
    onAppear: xe(!0),
    onLeave(W, Ne) {
      W._isLeaving = !0;
      const Ge = () => Ae(W, Ne);
      ln(W, d), vp(), ln(W, g), Pr(() => {
        W._isLeaving && (On(W, d), ln(W, f), Lr(M) || Nr(W, o, x, Ge));
      }), Mn(M, [W, Ge]);
    },
    onEnterCancelled(W) {
      pe(W, !1), Mn(U, [W]);
    },
    onAppearCancelled(W) {
      pe(W, !0), Mn(j, [W]);
    },
    onLeaveCancelled(W) {
      Ae(W), Mn(X, [W]);
    }
  });
}
function mp(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [ya(e.enter), ya(e.leave)];
  {
    const t = ya(e);
    return [t, t];
  }
}
function ya(e) {
  const t = Od(e);
  return {}.NODE_ENV !== "production" && wg(t, "<transition> explicit duration"), t;
}
function ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function On(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Pr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hp = 0;
function Nr(e, t, n, o) {
  const s = e._endId = ++hp, a = () => {
    s === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: r, propCount: l } = _p(e, t);
  if (!i)
    return o();
  const u = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, g), a();
  }, g = (f) => {
    f.target === e && ++c >= l && d();
  };
  setTimeout(() => {
    c < l && d();
  }, r + 1), e.addEventListener(u, g);
}
function _p(e, t) {
  const n = window.getComputedStyle(e), o = (m) => (n[m] || "").split(", "), s = o(`${rn}Delay`), a = o(`${rn}Duration`), i = Fr(s, a), r = o(`${xo}Delay`), l = o(`${xo}Duration`), u = Fr(r, l);
  let c = null, d = 0, g = 0;
  t === rn ? i > 0 && (c = rn, d = i, g = a.length) : t === xo ? u > 0 && (c = xo, d = u, g = l.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? rn : xo : null, g = c ? c === rn ? a.length : l.length : 0);
  const f = c === rn && /\b(transform|all)(,|$)/.test(o(`${rn}Property`).toString());
  return {
    type: c,
    timeout: d,
    propCount: g,
    hasTransform: f
  };
}
function Fr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Mr(n) + Mr(e[o])));
}
function Mr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vp() {
  return document.body.offsetHeight;
}
const Or = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ie(t) ? (n) => so(t, n) : t;
}, yp = {
  created(e, { value: t }, n) {
    e.checked = ks(t, n.props.value), e._assign = Or(n), Lc(e, "change", () => {
      e._assign(bp(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e._assign = Or(o), t !== n && (e.checked = ks(t, o.props.value));
  }
};
function bp(e) {
  return "_value" in e ? e._value : e.value;
}
const Sp = ["ctrl", "shift", "alt", "meta"], wp = {
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
  exact: (e, t) => Sp.some((n) => e[`${n}Key`] && !t.includes(n))
}, bt = (e, t) => (n, ...o) => {
  for (let s = 0; s < t.length; s++) {
    const a = wp[t[s]];
    if (a && a(n, t))
      return;
  }
  return e(n, ...o);
}, Cp = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, io = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const o = Qt(n.key);
  if (t.some((s) => s === o || Cp[s] === o))
    return e(n);
}, Ai = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Eo(e, t);
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
function Eo(e, t) {
  e.style.display = t ? e._vod : "none";
}
const xp = /* @__PURE__ */ Xe({ patchProp: gp }, Zf);
let Br;
function Ep() {
  return Br || (Br = Ff(xp));
}
const Nc = (...e) => {
  const t = Ep().createApp(...e);
  ({}).NODE_ENV !== "production" && (kp(t), Ap(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Tp(o);
    if (!s)
      return;
    const a = t._component;
    !ce(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function kp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => xd(t) || Ed(t),
    writable: !1
  });
}
function Ap(e) {
  if (Ac()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        I("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return I(o), n;
      },
      set() {
        I(o);
      }
    });
  }
}
function Tp(e) {
  if (je(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && I(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function Dp() {
  Yf();
}
({}).NODE_ENV !== "production" && Dp();
const V = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Lp = {
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
}, Pp = ["width", "height", "aria-labelledby"], Np = ["id"], Fp = ["fill"], Mp = ["d"];
function Op(e, t, n, o, s, a) {
  return v(), T("span", {
    class: he(["mw-ui-icon notranslate", a.classes])
  }, [
    (v(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (v(), T("title", {
        key: 0,
        id: n.iconName
      }, ae(n.iconName), 9, Np)) : ne("", !0),
      C("g", { fill: n.iconColor }, [
        C("path", { d: a.iconImagePath }, null, 8, Mp)
      ], 8, Fp)
    ], 8, Pp))
  ], 2);
}
const qe = /* @__PURE__ */ V(Lp, [["render", Op]]);
const Bp = {
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
}, Ip = { class: "mw-ui-button__content" }, $p = ["textContent"];
function Up(e, t, n, o, s, a) {
  const i = _("mw-icon");
  return v(), F(yo(a.component), {
    class: he(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: b(() => [
      Ye(e.$slots, "default", {}, () => [
        C("span", Ip, [
          n.icon ? (v(), F(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: he(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : ne("", !0),
          !a.isIcon && n.label ? (v(), T("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: ae(n.label)
          }, null, 8, $p)) : ne("", !0),
          n.indicator ? (v(), F(i, Xs({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [gn(a.indicatorClickEvent)]: t[0] || (t[0] = bt((r) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : ne("", !0)
        ])
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const we = /* @__PURE__ */ V(Bp, [["render", Up]]);
const Rp = {
  name: "MwButtonGroup",
  components: {
    MwButton: we
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
}, Vp = { class: "row mw-ui-button-group ma-0 pa-0" };
function zp(e, t, n, o, s, a) {
  const i = _("mw-button");
  return v(), T("div", Vp, [
    (v(!0), T(ke, null, et(n.items, (r) => (v(), F(i, Xs({
      key: r.value,
      value: r.value,
      "aria-selected": a.isActive(r) || null
    }, r.props, {
      class: ["ma-0", a.buttonClasses(r)],
      style: a.activeIndicatorStyle(r),
      onClick: bt((l) => e.$emit("select", r.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const es = /* @__PURE__ */ V(Rp, [["render", zp]]);
const jp = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: es },
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
}, Hp = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, qp = { class: "col-12 ma-0 pa-0" };
function Gp(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return v(), T("footer", Hp, [
    C("div", qp, [
      Ye(e.$slots, "default", {}, () => [
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
const Kp = /* @__PURE__ */ V(jp, [["render", Gp]]);
const Wp = {
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
}, Xp = { class: "mw-ui-card" }, Yp = ["textContent"], Jp = { class: "mw-ui-card__content" };
function Zp(e, t, n, o, s, a) {
  return v(), T("div", Xp, [
    Ye(e.$slots, "header", {}, () => [
      n.title ? (v(), T("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: ae(n.title)
      }, null, 8, Yp)) : ne("", !0)
    ]),
    C("div", Jp, [
      Ye(e.$slots, "default")
    ])
  ]);
}
const jt = /* @__PURE__ */ V(Wp, [["render", Zp]]);
const Qp = {}, em = { class: "mw-ui-divider row" };
function tm(e, t) {
  return v(), T("div", em);
}
const ts = /* @__PURE__ */ V(Qp, [["render", tm]]);
const nm = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
function om(e, t, n, o, s, a) {
  return v(), F(yo(n.tag), { class: "mw-grid container" }, {
    default: b(() => [
      Ye(e.$slots, "default")
    ], void 0),
    _: 3
  });
}
const Fc = /* @__PURE__ */ V(nm, [["render", om]]), sm = {
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
function am(e, t, n, o, s, a) {
  return v(), F(yo(n.tag), {
    class: he(a.classes)
  }, {
    default: b(() => [
      Ye(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const Ce = /* @__PURE__ */ V(sm, [["render", am]]), Xa = ["mobile", "tablet", "desktop", "desktop-wide"], im = Xa.reduce(
  (e, t) => xt(dt({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), rm = {
  name: "MwCol",
  props: xt(dt({}, im), {
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
      for (let n = 0; n < Xa.length; n++) {
        let o = Xa[n], s = this.$props[o];
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
function lm(e, t, n, o, s, a) {
  return v(), F(yo(n.tag), {
    class: he(a.classes)
  }, {
    default: b(() => [
      Ye(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const Pe = /* @__PURE__ */ V(rm, [["render", lm]]), Mc = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", cm = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", um = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Oc = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", tn = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", dm = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Ir = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", gm = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Bc = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Ic = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", An = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", $c = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z", Ft = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Zs = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Ti = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Di = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Uc = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Rc = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Vc = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", zc = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ns = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", jc = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Hc = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Ya = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Qs = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", fm = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", pm = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, yn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, mm = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, po = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, hm = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, _m = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z", $r = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z", Li = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", vm = "M 1 3 L 1 15 A 2 2 0 0 0 3 17 L 15 17 L 15 12.234375 A 3 3 0 0 0 17 13 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 A 3 3 0 0 0 15 7.7636719 L 15 3 L 10.580078 3 A 3 3 0 0 1 11 4.5 A 3 3 0 0 1 5 4.5 A 3 3 0 0 1 5.4199219 3 L 1 3 z", ym = "M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z", bm = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", Sm = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", wm = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Cm = {
  name: "MwDialog",
  components: {
    MwButton: we,
    MwRow: Ce,
    MwCol: Pe,
    MwDivider: ts
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
     * Whether the dialog should have closed on `escape` key press or not.
     **/
    closeOnEscapeKey: {
      type: Boolean,
      default: !0
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
    const n = Z(null), o = y(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = y(() => ({
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
        l ? (i(), vo(() => {
          n.value.focus();
        })) : a();
      }
    );
    const r = y(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: r,
      overlayStyles: s,
      mwIconClose: Ft,
      root: n
    };
  }
}, xm = { class: "mw-ui-dialog__shell items-stretch" }, Em = { class: "mw-ui-dialog__body" };
function km(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), u = _("mw-divider");
  return v(), F(vn, {
    name: `mw-ui-animation-${n.animation}`,
    style: nt(o.cssVars)
  }, {
    default: b(() => [
      n.value ? (v(), T("div", {
        key: 0,
        ref: "root",
        class: he(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = io((c) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        C("div", {
          class: "mw-ui-dialog__overlay",
          style: nt(o.overlayStyles),
          onClick: t[0] || (t[0] = (...c) => o.close && o.close(...c))
        }, null, 4),
        C("div", xm, [
          n.header ? Ye(e.$slots, "header", { key: 0 }, () => [
            p(l, { class: "mw-ui-dialog__header" }, {
              default: b(() => [
                p(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                p(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: b(() => [
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
            p(u)
          ]) : ne("", !0),
          C("div", Em, [
            Ye(e.$slots, "default")
          ]),
          Ye(e.$slots, "footer")
        ])
      ], 34)) : ne("", !0)
    ], void 0),
    _: 3
  }, 8, ["name", "style"]);
}
const Ht = /* @__PURE__ */ V(Cm, [["render", km]]);
const Am = {
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
      const t = dt({}, e.$attrs);
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
}, Tm = { class: "mw-ui-input__content" };
function Dm(e, t, n, o, s, a) {
  const i = _("mw-icon");
  return v(), T("div", {
    class: he(a.classes),
    onClick: t[2] || (t[2] = (r) => a.focus())
  }, [
    C("div", Tm, [
      Ye(e.$slots, "icon", {}, () => [
        n.icon ? (v(), F(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : ne("", !0)
      ]),
      (v(), F(yo(n.type === "textarea" ? n.type : "input"), Xs({
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
      }), null, 16, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Ye(e.$slots, "indicator", {}, () => [
        n.indicator ? (v(), F(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = bt((r) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : ne("", !0)
      ])
    ])
  ], 2);
}
const Pi = /* @__PURE__ */ V(Am, [["render", Dm]]);
const Lm = {
  name: "MwMessage",
  components: { MwCol: Pe, MwRow: Ce, MwIcon: qe, MwButton: we },
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
    mwIconClose: Ft,
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
      notice: pm,
      warning: po,
      success: yn,
      error: mm
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
function Pm(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), u = _("mw-row");
  return e.shown ? (v(), F(u, {
    key: 0,
    class: he([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: b(() => [
      Ye(e.$slots, "icon", {}, () => [
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
        default: b(() => [
          Ye(e.$slots, "default")
        ], void 0, !0),
        _: 3
      }, 8, ["id"]),
      Ye(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (v(), F(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : ne("", !0)
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : ne("", !0);
}
const Nm = /* @__PURE__ */ V(Lm, [["render", Pm]]);
const Fm = {}, Mm = { class: "mw-ui-spinner" }, Om = /* @__PURE__ */ C("div", { class: "mw-ui-spinner__bounce" }, null, -1), Bm = [
  Om
];
function Im(e, t) {
  return v(), T("div", Mm, Bm);
}
const Tn = /* @__PURE__ */ V(Fm, [["render", Im]]), kt = {
  base10: "#202122",
  base20: "#54595d",
  base30: "#72777d",
  base70: "#c8ccd1",
  base80: "#eaecf0",
  green30: "#14866d",
  green50: "#00af89",
  red50: "#d33",
  yellow30: "#ac6600",
  yellow50: "#fc3",
  primary: "#36c"
};
const $m = {
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
      default: Li
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: kt.base20
    },
    placeholderBackgroundColor: {
      type: String,
      default: kt.base80
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = y(() => {
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
function Um(e, t, n, o, s, a) {
  const i = _("mw-ui-icon");
  return n.thumbnail ? (v(), T("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: nt(o.style)
  }, null, 4)) : (v(), F(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: nt(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Ni = /* @__PURE__ */ V($m, [["render", Um]]);
const Rm = {
  name: "MwRadio",
  components: { MwRow: Ce },
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
}, Vm = { class: "mw-ui-radio__controls" }, zm = ["id", "disabled", "name", "value"], jm = /* @__PURE__ */ C("span", { class: "mw-ui-radio__controls__icon" }, null, -1), Hm = ["for", "textContent"];
function qm(e, t, n, o, s, a) {
  const i = _("mw-row");
  return v(), F(i, {
    class: he(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: b(() => [
      C("div", Vm, [
        H(C("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => a.inputModel = r),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, zm), [
          [yp, a.inputModel]
        ]),
        jm
      ]),
      C("label", {
        for: n.id,
        class: "ps-2",
        textContent: ae(n.label)
      }, null, 8, Hm)
    ], void 0),
    _: 1
  }, 8, ["class"]);
}
const Os = /* @__PURE__ */ V(Rm, [["render", qm]]), qc = {
  name: "MwRadioGroup",
  components: { MwRadio: Os },
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
      (o) => Ho(Os, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Ho("div", { class: "mw-ui-radio-group" }, n);
  }
};
const Gm = {
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
}, Km = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function Wm(e, t, n, o, s, a) {
  return v(), T("div", {
    class: he(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: nt(a.containerStyles)
  }, [
    C("div", {
      class: he(["mw-progress-bar__bar", a.barClass]),
      style: nt(a.barStyles)
    }, null, 6)
  ], 14, Km);
}
const Gc = /* @__PURE__ */ V(Gm, [["render", Wm]]), Xm = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), r = (u) => {
    o.value = !1;
    let c = Math.min(
      i + u.clientY - a,
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
}, Ym = (e, t, n, o) => ({ initiateDrag: Xm(
  e,
  t,
  n,
  o
) }), Jm = (e, t, n, o) => {
  const s = Z(0), a = y(
    () => t.value > e.value
  ), i = y(
    () => t.value <= e.value * (s.value + 1)
  ), r = (u) => {
    s.value = u, n.value.scroll(0, e.value * s.value);
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
const Zm = {
  name: "MwExpandableContent",
  components: {
    MwButton: we
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
    const t = Z(!0), n = Z(null), o = y(
      () => Math.min(e.minHeight, s.value)
    ), s = Z(1), { initiateDrag: a } = Ym(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: r,
      scrollIndex: l,
      scrollToStepByIndex: u,
      handleArrowUpClick: c
    } = Jm(o, s, n, t), d = () => u(l.value + 1), g = Z(null), f = y(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const x = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, x) {
        let k = Math.min(x, s.value);
        k = Math.max(k, o.value), k === o.value && (t.value = !0), n.value.style.height = k + "px";
      }
    };
    return lt(() => K(this, null, function* () {
      var x;
      yield vo(), s.value = n.value.scrollHeight, (x = g.value) == null || x.addEventListener(
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
      mwIconCollapse: hm,
      mwIconExpand: Ic,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: r,
      scrollIndex: l,
      scrollToNextStep: d
    };
  }
}, Qm = { class: "mw-ui-expandable-content__container" }, eh = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, th = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function nh(e, t, n, o, s, a) {
  const i = _("mw-button");
  return v(), T("div", {
    class: "mw-ui-expandable-content",
    style: nt(o.cssVars)
  }, [
    C("div", Qm, [
      C("div", {
        ref: "contentRef",
        class: he(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        Ye(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (v(), T("div", eh, [
        p(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (v(), F(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : ne("", !0)
      ])) : ne("", !0)
    ]),
    C("div", th, [
      C("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...r) => o.onDragButtonClicked && o.onDragButtonClicked(...r))
      })
    ], 512)
  ], 4);
}
const oh = /* @__PURE__ */ V(Zm, [["render", nh]]);
const sh = {
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
      default: kt.primary
    },
    inactiveColor: {
      type: String,
      default: kt.base70
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = y(() => e.size / 2 * 0.9), n = y(() => Math.PI * (t.value * 2)), o = y(
      () => (100 - e.percentage) / 100 * n.value
    ), s = y(() => ({
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
}, ah = ["width", "height", "viewport"], ih = ["r", "cx", "cy", "stroke-dasharray"], rh = ["r", "cx", "cy", "stroke-dasharray"];
function lh(e, t, n, o, s, a) {
  return v(), T("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: nt(o.cssVars)
  }, [
    C("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, ih),
    C("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: nt({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, rh)
  ], 12, ah);
}
const Kc = /* @__PURE__ */ V(sh, [["render", lh]]), cn = {
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
}, ba = {
  mobile: () => matchMedia(un.mobile).matches,
  tablet: () => matchMedia(un.tablet).matches,
  desktop: () => matchMedia(un.desktop).matches,
  desktopwide: () => matchMedia(un["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(un["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(un["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(un["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(un["desktop-and-down"]).matches
}, ch = {
  install: (e) => {
    const t = () => {
      for (let o in ba)
        ba.hasOwnProperty(o) && (n.value[o] = ba[o]());
    }, n = Z({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = xt(dt({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, uh = {
  install: (e) => {
    e.config.globalProperties.$mwui = xt(dt({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
function dh() {
  return Wc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Wc() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const gh = typeof Proxy == "function", fh = "devtools-plugin:setup", ph = "plugin:settings:set";
let to, Ja;
function mh() {
  var e;
  return to !== void 0 || (typeof window != "undefined" && window.performance ? (to = !0, Ja = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (to = !0, Ja = global.perf_hooks.performance) : to = !1), to;
}
function hh() {
  return mh() ? Ja.now() : Date.now();
}
class _h {
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
        return hh();
      }
    }, n && n.on(ph, (i, r) => {
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
      }), this.fallbacks[r](...l)) : (...l) => new Promise((u) => {
        this.targetQueue.push({
          method: r,
          args: l,
          resolve: u
        });
      })
    });
  }
  setRealTarget(t) {
    return K(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Xc(e, t) {
  const n = e, o = Wc(), s = dh(), a = gh && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(fh, e, t);
  else {
    const i = a ? new _h(n, s) : null;
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
var Yc = "store";
function le(e) {
  return e === void 0 && (e = null), We(e !== null ? e : Yc);
}
function Qn(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function Jc(e) {
  return e !== null && typeof e == "object";
}
function vh(e) {
  return e && typeof e.then == "function";
}
function Nt(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function yh(e, t) {
  return function() {
    return e(t);
  };
}
function Zc(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var o = t.indexOf(e);
    o > -1 && t.splice(o, 1);
  };
}
function Qc(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  ea(e, n, [], e._modules.root, !0), Fi(e, n, t);
}
function Fi(e, t, n) {
  var o = e._state, s = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var a = e._wrappedGetters, i = {}, r = {}, l = Bd(!0);
  l.run(function() {
    Qn(a, function(u, c) {
      i[c] = yh(u, e), r[c] = y(function() {
        return i[c]();
      }), Object.defineProperty(e.getters, c, {
        get: function() {
          return r[c].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Zn({
    data: t
  }), e._scope = l, e.strict && xh(e), o && n && e._withCommit(function() {
    o.data = null;
  }), s && s.stop();
}
function ea(e, t, n, o, s) {
  var a = !n.length, i = e._modules.getNamespace(n);
  if (o.namespaced && (e._modulesNamespaceMap[i] && {}.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = o), !a && !s) {
    var r = Mi(t, n.slice(0, -1)), l = n[n.length - 1];
    e._withCommit(function() {
      ({}).NODE_ENV !== "production" && l in r && console.warn(
        '[vuex] state field "' + l + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), r[l] = o.state;
    });
  }
  var u = o.context = bh(e, i, n);
  o.forEachMutation(function(c, d) {
    var g = i + d;
    Sh(e, g, c, u);
  }), o.forEachAction(function(c, d) {
    var g = c.root ? d : i + d, f = c.handler || c;
    wh(e, g, f, u);
  }), o.forEachGetter(function(c, d) {
    var g = i + d;
    Ch(e, g, c, u);
  }), o.forEachChild(function(c, d) {
    ea(e, t, n.concat(d), c, s);
  });
}
function bh(e, t, n) {
  var o = t === "", s = {
    dispatch: o ? e.dispatch : function(a, i, r) {
      var l = Bs(a, i, r), u = l.payload, c = l.options, d = l.type;
      if ((!c || !c.root) && (d = t + d, {}.NODE_ENV !== "production" && !e._actions[d])) {
        console.error("[vuex] unknown local action type: " + l.type + ", global type: " + d);
        return;
      }
      return e.dispatch(d, u);
    },
    commit: o ? e.commit : function(a, i, r) {
      var l = Bs(a, i, r), u = l.payload, c = l.options, d = l.type;
      if ((!c || !c.root) && (d = t + d, {}.NODE_ENV !== "production" && !e._mutations[d])) {
        console.error("[vuex] unknown local mutation type: " + l.type + ", global type: " + d);
        return;
      }
      e.commit(d, u, c);
    }
  };
  return Object.defineProperties(s, {
    getters: {
      get: o ? function() {
        return e.getters;
      } : function() {
        return eu(e, t);
      }
    },
    state: {
      get: function() {
        return Mi(e.state, n);
      }
    }
  }), s;
}
function eu(e, t) {
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
function Sh(e, t, n, o) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function(i) {
    n.call(e, o.state, i);
  });
}
function wh(e, t, n, o) {
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
    return vh(r) || (r = Promise.resolve(r)), e._devtoolHook ? r.catch(function(l) {
      throw e._devtoolHook.emit("vuex:error", l), l;
    }) : r;
  });
}
function Ch(e, t, n, o) {
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
function xh(e) {
  He(function() {
    return e._state.data;
  }, function() {
    ({}).NODE_ENV !== "production" && Nt(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Mi(e, t) {
  return t.reduce(function(n, o) {
    return n[o];
  }, e);
}
function Bs(e, t, n) {
  return Jc(e) && e.type && (n = t, t = e, e = e.type), {}.NODE_ENV !== "production" && Nt(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var Eh = "vuex bindings", Ur = "vuex:mutations", Sa = "vuex:actions", no = "vuex", kh = 0;
function Ah(e, t) {
  Xc(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Eh]
    },
    function(n) {
      n.addTimelineLayer({
        id: Ur,
        label: "Vuex Mutations",
        color: Rr
      }), n.addTimelineLayer({
        id: Sa,
        label: "Vuex Actions",
        color: Rr
      }), n.addInspector({
        id: no,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(o) {
        if (o.app === e && o.inspectorId === no)
          if (o.filter) {
            var s = [];
            su(s, t._modules.root, o.filter, ""), o.rootNodes = s;
          } else
            o.rootNodes = [
              ou(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(o) {
        if (o.app === e && o.inspectorId === no) {
          var s = o.nodeId;
          eu(t, s), o.state = Lh(
            Nh(t._modules, s),
            s === "root" ? t.getters : t._makeLocalGettersCache,
            s
          );
        }
      }), n.on.editInspectorState(function(o) {
        if (o.app === e && o.inspectorId === no) {
          var s = o.nodeId, a = o.path;
          s !== "root" && (a = s.split("/").filter(Boolean).concat(a)), t._withCommit(function() {
            o.set(t._state.data, a, o.state.value);
          });
        }
      }), t.subscribe(function(o, s) {
        var a = {};
        o.payload && (a.payload = o.payload), a.state = s, n.notifyComponentUpdate(), n.sendInspectorTree(no), n.sendInspectorState(no), n.addTimelineEvent({
          layerId: Ur,
          event: {
            time: Date.now(),
            title: o.type,
            data: a
          }
        });
      }), t.subscribeAction({
        before: function(o, s) {
          var a = {};
          o.payload && (a.payload = o.payload), o._id = kh++, o._time = Date.now(), a.state = s, n.addTimelineEvent({
            layerId: Sa,
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
            layerId: Sa,
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
var Rr = 8702998, Th = 6710886, Dh = 16777215, tu = {
  label: "namespaced",
  textColor: Dh,
  backgroundColor: Th
};
function nu(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function ou(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: nu(t),
    tags: e.namespaced ? [tu] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return ou(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function su(e, t, n, o) {
  o.includes(n) && e.push({
    id: o || "root",
    label: o.endsWith("/") ? o.slice(0, o.length - 1) : o || "Root",
    tags: t.namespaced ? [tu] : []
  }), Object.keys(t._children).forEach(function(s) {
    su(e, t._children[s], n, o + s + "/");
  });
}
function Lh(e, t, n) {
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
    var a = Ph(t);
    s.getters = Object.keys(a).map(function(i) {
      return {
        key: i.endsWith("/") ? nu(i) : i,
        editable: !1,
        value: Za(function() {
          return a[i];
        })
      };
    });
  }
  return s;
}
function Ph(e) {
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
      }), s[a] = Za(function() {
        return e[n];
      });
    } else
      t[n] = Za(function() {
        return e[n];
      });
  }), t;
}
function Nh(e, t) {
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
function Za(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Mt = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var o = t.state;
  this.state = (typeof o == "function" ? o() : o) || {};
}, au = { namespaced: { configurable: !0 } };
au.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Mt.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
Mt.prototype.removeChild = function(t) {
  delete this._children[t];
};
Mt.prototype.getChild = function(t) {
  return this._children[t];
};
Mt.prototype.hasChild = function(t) {
  return t in this._children;
};
Mt.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
Mt.prototype.forEachChild = function(t) {
  Qn(this._children, t);
};
Mt.prototype.forEachGetter = function(t) {
  this._rawModule.getters && Qn(this._rawModule.getters, t);
};
Mt.prototype.forEachAction = function(t) {
  this._rawModule.actions && Qn(this._rawModule.actions, t);
};
Mt.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && Qn(this._rawModule.mutations, t);
};
Object.defineProperties(Mt.prototype, au);
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
  iu([], this.root, t);
};
eo.prototype.register = function(t, n, o) {
  var s = this;
  o === void 0 && (o = !0), {}.NODE_ENV !== "production" && ru(t, n);
  var a = new Mt(n, o);
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
function iu(e, t, n) {
  if ({}.NODE_ENV !== "production" && ru(e, n), t.update(n), n.modules)
    for (var o in n.modules) {
      if (!t.getChild(o)) {
        ({}).NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + o + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      iu(
        e.concat(o),
        t.getChild(o),
        n.modules[o]
      );
    }
}
var Vr = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Fh = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, zr = {
  getters: Vr,
  mutations: Vr,
  actions: Fh
};
function ru(e, t) {
  Object.keys(zr).forEach(function(n) {
    if (t[n]) {
      var o = zr[n];
      Qn(t[n], function(s, a) {
        Nt(
          o.assert(s),
          Mh(e, n, a, s, o.expected)
        );
      });
    }
  });
}
function Mh(e, t, n, o, s) {
  var a = t + " should be " + s + ' but "' + t + "." + n + '"';
  return e.length > 0 && (a += ' in module "' + e.join(".") + '"'), a += " is " + JSON.stringify(o) + ".", a;
}
function Oh(e) {
  return new yt(e);
}
var yt = function e(t) {
  var n = this;
  t === void 0 && (t = {}), {}.NODE_ENV !== "production" && (Nt(typeof Promise != "undefined", "vuex requires a Promise polyfill in this browser."), Nt(this instanceof e, "store must be called with the new operator."));
  var o = t.plugins;
  o === void 0 && (o = []);
  var s = t.strict;
  s === void 0 && (s = !1);
  var a = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new eo(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = a;
  var i = this, r = this, l = r.dispatch, u = r.commit;
  this.dispatch = function(g, f) {
    return l.call(i, g, f);
  }, this.commit = function(g, f, m) {
    return u.call(i, g, f, m);
  }, this.strict = s;
  var c = this._modules.root.state;
  ea(this, c, [], this._modules.root), Fi(this, c), o.forEach(function(d) {
    return d(n);
  });
}, Oi = { state: { configurable: !0 } };
yt.prototype.install = function(t, n) {
  t.provide(n || Yc, this), t.config.globalProperties.$store = this;
  var o = this._devtools !== void 0 ? this._devtools : {}.NODE_ENV !== "production" || !1;
  o && Ah(t, this);
};
Oi.state.get = function() {
  return this._state.data;
};
Oi.state.set = function(e) {
  ({}).NODE_ENV !== "production" && Nt(!1, "use store.replaceState() to explicit replace store state.");
};
yt.prototype.commit = function(t, n, o) {
  var s = this, a = Bs(t, n, o), i = a.type, r = a.payload, l = a.options, u = { type: i, payload: r }, c = this._mutations[i];
  if (!c) {
    ({}).NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + i);
    return;
  }
  this._withCommit(function() {
    c.forEach(function(g) {
      g(r);
    });
  }), this._subscribers.slice().forEach(function(d) {
    return d(u, s.state);
  }), {}.NODE_ENV !== "production" && l && l.silent && console.warn(
    "[vuex] mutation type: " + i + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
yt.prototype.dispatch = function(t, n) {
  var o = this, s = Bs(t, n), a = s.type, i = s.payload, r = { type: a, payload: i }, l = this._actions[a];
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
  var u = l.length > 1 ? Promise.all(l.map(function(c) {
    return c(i);
  })) : l[0](i);
  return new Promise(function(c, d) {
    u.then(function(g) {
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
      d(g);
    });
  });
};
yt.prototype.subscribe = function(t, n) {
  return Zc(t, this._subscribers, n);
};
yt.prototype.subscribeAction = function(t, n) {
  var o = typeof t == "function" ? { before: t } : t;
  return Zc(o, this._actionSubscribers, n);
};
yt.prototype.watch = function(t, n, o) {
  var s = this;
  return {}.NODE_ENV !== "production" && Nt(typeof t == "function", "store.watch only accepts a function."), He(function() {
    return t(s.state, s.getters);
  }, n, Object.assign({}, o));
};
yt.prototype.replaceState = function(t) {
  var n = this;
  this._withCommit(function() {
    n._state.data = t;
  });
};
yt.prototype.registerModule = function(t, n, o) {
  o === void 0 && (o = {}), typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && (Nt(Array.isArray(t), "module path must be a string or an Array."), Nt(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), ea(this, this.state, t, this._modules.get(t), o.preserveState), Fi(this, this.state);
};
yt.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var o = Mi(n.state, t.slice(0, -1));
    delete o[t[t.length - 1]];
  }), Qc(this);
};
yt.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
yt.prototype.hotUpdate = function(t) {
  this._modules.update(t), Qc(this, !0);
};
yt.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties(yt.prototype, Oi);
var Bh = $h(function(e, t) {
  var n = {};
  return {}.NODE_ENV !== "production" && !lu(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), Ih(t).forEach(function(o) {
    var s = o.key, a = o.val;
    n[s] = function() {
      var r = this.$store.state, l = this.$store.getters;
      if (e) {
        var u = Uh(this.$store, "mapState", e);
        if (!u)
          return;
        r = u.context.state, l = u.context.getters;
      }
      return typeof a == "function" ? a.call(this, r, l) : r[a];
    }, n[s].vuex = !0;
  }), n;
});
function Ih(e) {
  return lu(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function lu(e) {
  return Array.isArray(e) || Jc(e);
}
function $h(e) {
  return function(t, n) {
    return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
  };
}
function Uh(e, t, n) {
  var o = e._modulesNamespaceMap[n];
  return {}.NODE_ENV !== "production" && !o && console.error("[vuex] module namespace not found in " + t + "(): " + n), o;
}
const Rh = () => new mw.Api().get({ assert: "user" }), Vh = { assertUser: Rh };
const zh = { class: "pa-4 sx-login-dialog__header" }, jh = { class: "sx-login-dialog__body px-6" }, Hh = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, qh = {
  __name: "SXLoginDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  setup(e) {
    const t = Z(mw.util.getUrl("Special:UserLogin"));
    return (n, o) => {
      const s = be("i18n");
      return e.modelValue ? (v(), F(Sn(Ht), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        class: "sx-login-dialog"
      }, {
        header: b(() => [
          C("div", zh, [
            H(C("h4", null, null, 512), [
              [s, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: b(() => [
          H(C("div", jh, null, 512), [
            [s, void 0, "cx-sx-login-dialog-body"]
          ]),
          C("div", Hh, [
            p(Sn(we), {
              type: "text",
              progressive: "",
              label: n.$i18n("cx-sx-login-dialog-button-label"),
              href: t.value,
              target: "_blank"
            }, null, 8, ["label", "href"])
          ])
        ], void 0),
        _: 1
      }, 8, ["overlay-opacity"])) : ne("", !0);
    };
  }
};
const Gh = {
  name: "ContentTranslationApp",
  components: { MwGrid: Fc, MwCol: Pe, MwRow: Ce, SxLoginDialog: qh },
  setup() {
    const e = le(), t = y(
      () => e.state.application.autoSavePending
    ), n = Z(!1);
    return lt(() => {
      window.addEventListener("beforeunload", (s) => {
        t.value && (s.preventDefault(), s.returnValue = "");
      }), mw.config.get(
        "wgContentTranslationEnableAnonSectionTranslation"
      ) || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Vh.assertUser().then(() => n.value = !1).catch((a) => {
          a === "assertuserfailed" && (n.value = !0);
        });
      });
    }), { isLoginDialogOn: n };
  }
};
function Kh(e, t, n, o, s, a) {
  const i = _("sx-login-dialog"), r = _("router-view"), l = _("mw-col"), u = _("mw-row"), c = _("mw-grid");
  return v(), F(c, { id: "contenttranslation" }, {
    default: b(() => [
      p(u, { class: "cx-container" }, {
        default: b(() => [
          p(l, { cols: "12" }, {
            default: b(() => [
              p(r, null, {
                default: b(({ Component: d, route: g }) => [
                  p(vn, {
                    name: g.meta.transitionName
                  }, {
                    default: b(() => [
                      (v(), F(yo(d)))
                    ], void 0, !0),
                    _: 2
                  }, 1032, ["name"]),
                  p(i, {
                    modelValue: o.isLoginDialogOn,
                    "onUpdate:modelValue": t[0] || (t[0] = (f) => o.isLoginDialogOn = f)
                  }, null, 8, ["modelValue"])
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
}
const Wh = /* @__PURE__ */ V(Gh, [["render", Kh]]), Xh = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, Yh = {
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
  getTranslation: (e) => (t, n, o, s) => e.translations.find(
    /** @param {Translation} translation */
    (a) => a.sourceTitle === t && a.sourceSectionTitle === n && a.sourceLanguage === o && a.targetLanguage === s
  ),
  translationExists: (e) => (
    /**
     * @param {Translation} translation
     */
    (t) => {
      const n = e.translations.some(
        (s) => !!s.sectionTranslationId && s.sectionTranslationId === t.sectionTranslationId
      ), o = e.translations.some(
        (s) => !s.sectionTranslationId && s.translationId === t.translationId
      );
      return n || o;
    }
  )
}, Jh = [
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
], Zh = (e, t, n) => {
  let o, s, a, i, r;
  return !e || !t ? 0 : e === t ? 1 : (s = i = jr(e, n), a = r = jr(t, n), r.length > i.length && (s = r, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, jr = function(e, t) {
  return e ? Jh.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Qh = 95, e_ = 85, t_ = [
  { status: "failure", value: 100 - Qh },
  { status: "warning", value: 100 - e_ },
  { status: "success", value: 100 }
], cu = (e, t, n) => {
  const o = Hr(e).textContent, s = Hr(t).textContent, a = 100 - 100 * Zh(s, o, n);
  return Math.ceil(a);
}, n_ = (e) => t_.find((t) => e <= t.value).status, o_ = (e, t) => cu(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Hr = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, xn = { calculateScore: cu, getScoreStatus: n_, getMTScoreForPageSection: o_ }, wa = "original", Ca = "empty", s_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class ze {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      wa,
      Ca
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return s_[t] || t;
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
    return wa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ca;
  }
  static isUserMTProvider(t) {
    return [wa, Ca].includes(
      t
    );
  }
}
class mn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = xt(dt({}, a), {
      [ze.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ze.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [ze.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [ze.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[ze.ORIGINAL_TEXT_PROVIDER_KEY];
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
const qr = (e) => {
  var n;
  const t = Is(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Is = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Un = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), uu = (e) => {
  const t = Is(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = a_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, a_ = (e) => {
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
}, du = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, gu = (e) => {
  const t = du(e);
  return t == null ? void 0 : t.targetExists;
};
class xa {
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
let At = class {
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
      (a) => Un(a)
    );
    s && gu(s) && (this.blockTemplateAdaptationInfo[t] = du(s));
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
      (t) => Un(t)
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
    const t = Is(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? qr(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Un(o));
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
    return n && qr(n) || "";
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
    const o = Is(n);
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
      (a) => Un(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new xa({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new xa({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new xa({
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
    if (ze.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => Un(s)
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
const Ea = "__LEAD_SECTION__";
class ta {
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
      [ze.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ze.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [ze.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ze.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Ea;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[ze.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[ze.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof At ? n.transclusionNode.outerHTML : n instanceof mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof At ? t.blockTemplateSelected = !1 : t instanceof mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof At ? n.blockTemplateSelected = !0 : n instanceof mn && (n.selected = !0);
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
    if (o instanceof At)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof mn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof At ? n.blockTemplateProposedTranslations[t] || "" : n instanceof mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof At ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = xn.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Ea : this.originalTitle;
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
    return this.isLeadSection ? Ea : this.title;
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
class na {
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
    status: u,
    pageRevision: c,
    targetTitle: d,
    sourceSectionTitle: g,
    targetSectionTitle: f,
    progress: m
  }) {
    this.sectionTranslationId = t, this.translationId = n, this.sectionId = o, this.sourceTitle = s, this.sourceLanguage = a, this.targetLanguage = i, this.startTimestamp = r, this.lastUpdatedTimestamp = l, this.status = u, this.pageRevision = c, this.targetTitle = d, this.sourceSectionTitle = g, this.targetSectionTitle = f, this.progress = m, this.restored = !1;
  }
  /**
   * Used inside CXTranslationList.vue
   * @return {`sx-${number}`|`cx-${number}`}
   */
  get key() {
    return this.sectionTranslationId && `sx-${this.sectionTranslationId}` || `cx-${this.translationId}`;
  }
  get isLeadSectionTranslation() {
    return !this.sourceSectionTitle || this.sourceSectionTitle === ta.LEAD_SECTION_DUMMY_TITLE;
  }
}
const Re = new mw.cx.SiteMapper(), fu = mw.util.getUrl, i_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class pu {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class mo {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new pu(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Gr = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => xt(dt({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class r_ {
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
    const t = Gr((s = this.user) == null ? void 0 : s.content), n = Gr((a = this.mt) == null ? void 0 : a.content);
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
function mu(e, t) {
  return K(this, null, function* () {
    if (mw.user.isAnon())
      return Promise.resolve([]);
    const n = {
      action: "query",
      format: "json",
      assert: "user",
      formatversion: 2,
      list: "contenttranslation",
      sectiontranslationsonly: !0,
      type: e
    };
    return t && (n.offset = t), new mw.Api().get(n).then((s) => K(this, null, function* () {
      var r;
      let i = s.query.contenttranslation.translations.map(
        (l) => new na(xt(dt({}, l), { status: e }))
      );
      if ((r = s.continue) != null && r.offset) {
        const l = yield mu(
          e,
          s.continue.offset
        );
        i = i.concat(l);
      }
      return i;
    }));
  });
}
function l_(e) {
  if (mw.user.isAnon())
    return Promise.resolve([]);
  const t = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    translationid: e,
    list: "contenttranslation"
  };
  return new mw.Api().get(t).then((o) => {
    const { translation: s } = o.query.contenttranslation;
    return Object.values(s.translationUnits).map(
      (a) => new r_(a)
    );
  });
}
function c_(e, t, n, o, s) {
  return K(this, null, function* () {
    if (!o)
      return;
    let a = `/translate/${e}/${t}`;
    n !== ze.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = Re.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then((r) => r.json()).then((r) => {
      var u, c;
      return (c = (u = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(r.contents)) == null ? void 0 : u.groups) == null ? void 0 : c.content;
    }).catch((r) => Promise.reject(r));
  });
}
const u_ = (e, t, n) => {
  const o = Re.getApi(t);
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
}, d_ = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: r,
  captchaId: l,
  captchaWord: u,
  isSandbox: c,
  sectionTranslationId: d
}) => {
  const g = {
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
    sectiontranslationid: d
  };
  return l && (g.captchaid = l, g.captchaword = u), new mw.Api().postWithToken("csrf", g).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new mo({
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
      targetTitle: m.targettitle
    };
  }).catch((m, S) => {
    let x;
    return S = S || {}, S.exception ? x = S.exception.message : S.error ? x = S.error.info : x = "Unknown error", {
      publishFeedbackMessage: new mo({
        text: x,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, g_ = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: r,
  sectionId: l,
  isSandbox: u,
  progress: c
}) => {
  const d = {
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
    issandbox: u,
    progress: JSON.stringify(c)
  };
  return new mw.Api().postWithToken("csrf", d).then((f) => f.sxsave.sectiontranslationid).catch((f, m) => {
    let S;
    return m.exception ? S = m.exception.message : m.error ? S = m.error.info : S = "Unknown error", new mo({ text: S, status: "error" });
  });
}, f_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, p_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, m_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Vt = {
  fetchTranslations: mu,
  fetchTranslationUnits: l_,
  fetchSegmentTranslation: c_,
  parseTemplateWikitext: u_,
  publishTranslation: d_,
  saveTranslation: g_,
  deleteTranslation: f_,
  fetchTranslatorStats: m_,
  deleteCXTranslation: p_
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
    thumbnail: u,
    title: c,
    _alias: d,
    content: g = null,
    sections: f = []
  } = {}) {
    this.language = i, this.title = c, this.pageId = a, this.description = t, this.image = s, this.pageprops = r, this.pageviews = l, this.thumbnail = u, this.langLinksCount = n, this.revision = o, this.alias = d, this.wikidataId = r == null ? void 0 : r.wikibase_item, this.content = g, this.sections = f;
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
const h_ = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (r) => !ze.isUserMTProvider(r)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, __ = (e) => {
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
function v_({ rootState: e }) {
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = xn.getMTScoreForPageSection(
    t,
    n
  ), s = xn.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let r, l;
  return i === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new mo({
    title: r,
    text: l,
    status: i,
    type: "mt"
  });
}
function y_({ rootState: e, rootGetters: t }) {
  const n = t["application/getCurrentPage"], {
    /** @type {PageSection} */
    currentSourceSection: o,
    /** @type {SectionSuggestion} */
    sourceLanguage: s,
    targetLanguage: a
  } = e.application, i = n.title, r = t["application/getTargetPageTitleForPublishing"], l = t["mediawiki/getSupportedMTProviders"](
    s,
    a
  ), u = t["application/getParallelCorporaBaseId"], c = o.getParallelCorporaUnits(u);
  c.forEach(
    (f) => h_(f, l)
  );
  const d = o.getTranslationProgress(a), g = t["application/isSandboxTarget"];
  return Vt.saveTranslation({
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
    sectionId: u,
    isSandbox: g,
    progress: d
  });
}
function b_(a) {
  return K(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i instanceof mo)
      return { publishFeedbackMessage: i, targetTitle: null };
    const r = i, l = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: u,
      sourceLanguage: c,
      targetLanguage: d
    } = e.application, g = l.title, f = t["application/getTargetPageTitleForPublishing"], m = t["application/isSandboxTarget"], S = {
      html: __(u.translationHtml),
      sourceTitle: g,
      targetTitle: f,
      sourceSectionTitle: u.sourceSectionTitleForPublishing,
      targetSectionTitle: u.targetSectionTitleForPublishing,
      sourceLanguage: c,
      targetLanguage: d,
      revision: t["application/getCurrentRevision"],
      isSandbox: m,
      sectionTranslationId: r
    };
    return o && (S.captchaId = o, S.captchaWord = s), yield Vt.publishTranslation(S);
  });
}
function S_(a, i) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, s) {
    let r = yield Vt.fetchTranslations(s);
    r = r.filter(
      (u) => !n.translationExists(u)
    ), r.forEach((u) => e("addTranslation", u));
    const l = r.reduce((u, c) => {
      const d = c.sourceLanguage;
      return u[d] = u[d] || [], u[d].push(c), u;
    }, {});
    e("setTranslationsLoaded", { status: s, value: !0 });
    for (const [u, c] of Object.entries(l))
      t(
        "mediawiki/fetchPageMetadata",
        {
          language: u,
          titles: c.map((d) => d.sourceTitle)
        },
        { root: !0 }
      ), c.forEach((d) => {
        const { targetLanguage: g, targetTitle: f } = d, m = !!o["mediawiki/getPage"](
          g,
          f
        );
        f && !m && e(
          "mediawiki/addPage",
          new bo({ title: f, pagelanguage: g }),
          { root: !0 }
        );
      });
  });
}
function w_(a, i) {
  return K(this, arguments, function* ({ rootGetters: e, dispatch: t, rootState: n }, { provider: o, originalContent: s }) {
    const { sourceLanguage: r, targetLanguage: l } = n.application;
    if (!e["mediawiki/isValidProviderForTranslation"](r, l, o))
      return Promise.resolve();
    try {
      const c = yield t(
        "application/getCXServerToken",
        {},
        { root: !0 }
      );
      return yield Vt.fetchSegmentTranslation(
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
function C_(t) {
  return K(this, arguments, function* ({ commit: e }) {
    const n = yield Vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const x_ = {
  validateMT: v_,
  saveTranslation: y_,
  publishTranslation: b_,
  fetchTranslationsByStatus: S_,
  translateContent: w_,
  fetchTranslatorStats: C_
}, E_ = {
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
}, k_ = {
  namespaced: !0,
  state: Xh,
  getters: Yh,
  actions: x_,
  mutations: E_
}, hu = [
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
], A_ = [
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
], T_ = [
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
], D_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], L_ = [
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
], P_ = {
  en: hu,
  es: A_,
  bn: T_,
  fr: D_,
  de: L_
}, N_ = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
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
   * and contains all available seeds to be used for section
   * suggestion fetching. Having this information stored prevents
   * unnecessary requests to fetch seeds every time they are needed
   * @type {SuggestionSeedCollection[]}
   */
  sectionSuggestionSeedCollections: [],
  /**
   * This state variable works exactly the same as sectionSuggestionSeedCollections,
   * only difference that it refers to page suggestions instead.
   * @type {SuggestionSeedCollection[]}
   */
  pageSuggestionSeedCollections: [],
  /**
   * Stores appendix section titles, grouped by language
   * @type Object - { language1: [titles1], ... }
   */
  appendixSectionTitles: P_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, F_ = {
  /**
   * @return {SuggestionSeedCollection}
   */
  findSectionSuggestionSeedCollection: (e) => (t, n) => e.sectionSuggestionSeedCollections.find(
    (o) => o.doesBelongToLanguagePair(t, n)
  ),
  /**
   * @return {SuggestionSeedCollection}
   */
  findPageSuggestionSeedCollection: (e) => (t, n) => e.pageSuggestionSeedCollections.find(
    (o) => o.doesBelongToLanguagePair(t, n)
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
class Bi {
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
class zt {
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
class qo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const M_ = hu;
function O_(e, t, n, o = 24) {
  return K(this, null, function* () {
    var u;
    let s = `/data/recommendation/article/creation/translation/${e}`;
    n && (s += `/${n}`);
    const a = Re.getRestbaseUrl(t, s), i = new URLSearchParams({ count: `${o}` }), r = yield fetch(`${a}?${i}`);
    if (!r.ok)
      throw new Error("Failed to load data from server");
    return (((u = yield r.json()) == null ? void 0 : u.items) || []).map(
      (c) => new Bi({
        sourceTitle: c.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: c.wikidata_id,
        langLinksCount: parseInt(c.sitelink_count)
      })
    );
  });
}
function B_(e, t, n) {
  return K(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = Re.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new zt(a) : null;
  });
}
function I_(e, t) {
  return K(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = Re.getApi(e);
    try {
      const s = yield o.get(n);
      return $_(s.result.translations);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
const $_ = (e) => {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1));
    [e[t], e[n]] = [e[n], e[t]];
  }
  return e;
};
function U_(e) {
  const t = M_.map((o) => encodeURIComponent(o)).join("|"), n = Re.getCXServerUrl(
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
const R_ = (e) => {
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
}, V_ = (e) => {
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
}, z_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((r) => new qo(r));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, nn = {
  fetchFavorites: z_,
  fetchPageSuggestions: O_,
  fetchSectionSuggestions: B_,
  fetchSuggestionSeeds: I_,
  fetchAppendixTargetSectionTitles: U_,
  markFavorite: R_,
  unmarkFavorite: V_
}, Kr = ["cx-published-translations"];
class _u {
  /**
   * Creates an instance of SuggestionSeedCollection.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]} options.seeds
   * @param {string[]} options.exhaustedProviders
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    seeds: o = [],
    exhaustedProviders: s = []
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.seeds = o, this.exhaustedProviders = s;
  }
  /**
   * Check whether another language pair match with same language pair
   * of this instance.
   * @param sourceLanguage
   * @param targetLanguage
   * @return {boolean}
   */
  doesBelongToLanguagePair(t, n) {
    return this.sourceLanguage === t && this.targetLanguage === n;
  }
  /**
   * Whether all known providers of this seed collection exhausted(used up)
   *
   * @returns {boolean}
   */
  get allProvidersExhausted() {
    return Kr.every(
      (t) => this.exhaustedProviders.includes(t)
    );
  }
  /**
   * Get next provider that is not used yet, if any
   *
   * @returns {string|null}
   */
  get nextUnexhaustedProvider() {
    return Kr.find(
      (t) => !this.exhaustedProviders.includes(t)
    );
  }
  /**
   * @param {string} provider
   */
  addExhaustedProvider(t) {
    this.exhaustedProviders.push(t);
  }
  /**
   * Return first seed and remove it from the array
   *
   * @return {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}}
   */
  getSeedArticleForSuggestion() {
    return this.seeds.shift();
  }
}
function j_(r, l) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
    let u = n.getSectionSuggestionsForArticle(
      s,
      a,
      i
    );
    if (!u) {
      u = yield nn.fetchSectionSuggestions(
        s,
        i,
        a
      );
      try {
        if (yield t(
          "mediawiki/fetchPageMetadata",
          { language: s, titles: [i] },
          { root: !0 }
        ), u)
          e("addSectionSuggestion", u);
        else {
          const c = o["mediawiki/getPage"](
            s,
            i
          );
          u = new zt({
            sourceLanguage: s,
            targetLanguage: a,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: c.title
          }), e(
            "addPageSuggestion",
            new Bi({
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
    return u;
  });
}
function H_({ rootGetters: e }, t) {
  return {
    /**
     * @param sourceLanguage
     * @param targetLanguage
     * @return {Promise<Object[]>}
     */
    "cx-published-translations": (o, s) => nn.fetchSuggestionSeeds(o, s),
    /**
     * @param {string} sourceLanguage
     * @param {string} targetLanguage
     * @return {Promise<Translation[]>}
     */
    "user-published-translations": (o, s) => Promise.resolve(
      e["translator/getPublishedTranslationsForLanguagePair"](
        o,
        s
      )
    )
  }[t] || null;
}
function q_(i, r) {
  return K(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
    let l = o.findSectionSuggestionSeedCollection(
      s,
      a
    );
    if (l || (l = new _u({
      sourceLanguage: s,
      targetLanguage: a
    }), e("addSectionSuggestionSeedCollection", l)), !l.seeds.length) {
      e("increaseSectionSuggestionsLoadingCount");
      do {
        const u = l.nextUnexhaustedProvider, c = yield n(
          "getSeedProviderHandlerByName",
          u
        );
        if (c) {
          const d = yield c(s, a);
          l.addExhaustedProvider(u), d.forEach((g) => e("addSectionSuggestionSeed", g));
        }
      } while (l.seeds.length === 0 && !l.allProvidersExhausted);
      e("decreaseSectionSuggestionsLoadingCount");
    }
    return l.seeds;
  });
}
function G_(i, r) {
  return K(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
    let l = o.findPageSuggestionSeedCollection(
      s,
      a
    );
    if (l || (l = new _u({
      sourceLanguage: s,
      targetLanguage: a
    }), e("addPageSuggestionSeedCollection", l)), !l.seeds.length)
      do {
        const u = l.nextUnexhaustedProvider, c = yield n(
          "getSeedProviderHandlerByName",
          u
        );
        if (c) {
          const d = yield c(s, a);
          l.addExhaustedProvider(u), d.forEach((g) => e("addPageSuggestionSeed", g));
        }
      } while (l.seeds.length === 0 && !l.allProvidersExhausted);
    return l.getSeedArticleForSuggestion();
  });
}
function K_(s) {
  return K(this, arguments, function* ({
    rootGetters: e,
    dispatch: t,
    rootState: n,
    state: o
  }) {
    const { targetLanguage: a } = n.application, i = e["application/getSectionSuggestionsSliceByIndex"](0), r = e["application/getPageSuggestionsSliceByIndex"](0), l = i.length === o.maxSuggestionsPerSlice, u = r.length === o.maxSuggestionsPerSlice;
    l && u || (yield t("suggestions/fetchAppendixSectionTitles", a, {
      root: !0
    }), t("fetchNextSectionSuggestionsSlice"), t("fetchNextPageSuggestionsSlice"));
  });
}
function W_(a) {
  return K(this, arguments, function* ({
    state: e,
    commit: t,
    getters: n,
    dispatch: o,
    rootState: s
  }) {
    const { sourceLanguage: i, targetLanguage: r } = s.application;
    let l = yield o("getSectionSuggestionSeeds", {
      sourceLanguage: i,
      targetLanguage: r
    });
    if (!l || !l.length)
      return;
    t("increaseSectionSuggestionsLoadingCount"), l = l.filter(
      (g) => !n.sectionSuggestionsForArticleExists(
        i,
        r,
        g.sourceTitle
      )
    );
    const u = n.getNumberOfSectionSuggestionsToFetch(
      i,
      r
    );
    let c = 0;
    for (const g of l) {
      const f = yield nn.fetchSectionSuggestions(
        i,
        g.sourceTitle,
        r
      );
      t("removeSectionSuggestionSeed", g);
      const m = e.appendixSectionTitles[r] || [];
      if (f != null && f.isValid(m) && (c++, t("addSectionSuggestion", f)), c === u)
        break;
    }
    t("decreaseSectionSuggestionsLoadingCount");
    const d = n.getSectionSuggestionsForPair(i, r).map((g) => g.sourceTitle);
    o(
      "mediawiki/fetchPageMetadata",
      { language: i, titles: d },
      { root: !0 }
    );
  });
}
function X_(s) {
  return K(this, arguments, function* ({
    commit: e,
    dispatch: t,
    getters: n,
    rootState: o
  }) {
    e("increasePageSuggestionsLoadingCount");
    const { sourceLanguage: a, targetLanguage: i } = o.application, r = yield t("getPageSuggestionSeed", {
      sourceLanguage: a,
      targetLanguage: i
    }), l = n.getNumberOfPageSuggestionsToFetch(
      a,
      i
    );
    try {
      const u = yield nn.fetchPageSuggestions(
        a,
        i,
        r == null ? void 0 : r.sourceTitle,
        l
      );
      u.forEach(
        (d) => e("addPageSuggestion", d)
      );
      const c = u.map((d) => d.sourceTitle);
      c.length && t(
        "mediawiki/fetchPageMetadata",
        { language: a, titles: c },
        { root: !0 }
      );
    } catch (u) {
      mw.log.error("Page suggestions fetching failed!");
    }
    e("decreasePageSuggestionsLoadingCount");
  });
}
function Y_(o, s) {
  return K(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield nn.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
function J_(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removeSectionSuggestion", n), t("fetchNextSectionSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function Z_(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removePageSuggestion", n), t("fetchNextPageSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function Q_(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    yield nn.markFavorite(n);
    const { sourceTitle: a, sourceLanguage: i, targetLanguage: r } = n, l = new qo({
      title: a,
      sourceLanguage: i,
      targetLanguage: r
    });
    e("addFavoriteSuggestion", l);
  });
}
function e0(n, o) {
  return K(this, arguments, function* ({ commit: e }, t) {
    e("removeFavoriteSuggestion", t), yield nn.unmarkFavorite(t);
  });
}
function t0(o) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
    if (n.favorites.length)
      return;
    const s = yield nn.fetchFavorites();
    if (!s || !s.length)
      return;
    const a = {};
    for (const i of s)
      e("addFavoriteSuggestion", i), nn.fetchSectionSuggestions(
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
const n0 = {
  addPageSuggestionAsFavorite: Z_,
  addSectionSuggestionAsFavorite: J_,
  doMarkSuggestionAsFavorite: Q_,
  fetchFavorites: t0,
  fetchAppendixSectionTitles: Y_,
  fetchNextPageSuggestionsSlice: X_,
  fetchNextSectionSuggestionsSlice: W_,
  getPageSuggestionSeed: G_,
  getSectionSuggestionSeeds: q_,
  getSeedProviderHandlerByName: H_,
  initializeSuggestions: K_,
  loadSectionSuggestion: j_,
  removeFavoriteSuggestion: e0
}, o0 = {
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
  addSectionSuggestionSeedCollection(e, t) {
    e.sectionSuggestionSeedCollections.push(t);
  },
  /**
   * @param state
   * @param {SuggestionSeedCollection} collection
   */
  addPageSuggestionSeedCollection(e, t) {
    e.pageSuggestionSeedCollections.push(t);
  },
  /**
   * @param state
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}} seed
   */
  addSectionSuggestionSeed(e, t) {
    const { sourceLanguage: n, targetLanguage: o } = t;
    e.sectionSuggestionSeedCollections.find(
      (a) => a.doesBelongToLanguagePair(n, o)
    ).seeds.push(t);
  },
  /**
   * @param state
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}} seed
   */
  addPageSuggestionSeed(e, t) {
    const { sourceLanguage: n, targetLanguage: o } = t;
    e.pageSuggestionSeedCollections.find(
      (a) => a.doesBelongToLanguagePair(n, o)
    ).seeds.push(t);
  },
  removeSectionSuggestionSeed(e, t) {
    const { sourceLanguage: n, targetLanguage: o } = t, s = e.sectionSuggestionSeedCollections.find(
      (a) => a.doesBelongToLanguagePair(n, o)
    );
    s.seeds = s.seeds.filter(
      (a) => a.sourceTitle !== t.sourceTitle
    );
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
}, s0 = {
  namespaced: !0,
  state: N_,
  getters: F_,
  actions: n0,
  mutations: o0
}, a0 = {
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
}, i0 = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== ze.EMPTY_TEXT_PROVIDER_KEY,
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
class r0 {
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
function l0() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const c0 = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), l0();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, u0 = (e, t) => {
  let n, o;
  return t ? (n = c0(e), o = n.$element.find(
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
}, d0 = (e, t) => {
  const n = Array.from(
    u0(e, t)
  );
  return g0(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let r = "";
      const l = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? r = a.textContent.trim() : i.unshift(a);
      const u = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (d) => new At({
          sentences: f0(d),
          node: d
        })
      ), c = !r;
      return new ta({ id: l, title: r, subSections: u, isLeadSection: c });
    }
  );
}, g0 = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, f0 = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), vu = {
  convertSegmentedContentToPageSections: d0
}, Ii = 120, p0 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: Ii,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Re.getApi(e).get(n).then((s) => {
    const a = s.query.pages, r = (s.query.redirects || []).reduce(
      (c, d) => xt(dt({}, c), { [d.to]: d.from }),
      {}
    ), u = (s.query.normalized || []).reduce(
      (c, d) => xt(dt({}, c), { [d.to]: d.from }),
      {}
    );
    return a.map((c) => {
      const d = u[c.title] || r[c.title] || null;
      return new bo(xt(dt({}, c), { _alias: d }));
    });
  });
}, m0 = (e, t) => {
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
  return Re.getApi(e).get(n).then((s) => K(void 0, null, function* () {
    var l, u;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], r = (u = a[0].pageprops) == null ? void 0 : u.wikibase_item;
    return r ? Object.freeze(new r0(r, i)) : null;
  }));
}, h0 = (e, t, n, o = null) => yu(
  e,
  t,
  n,
  o
).then(
  (s) => new bo({
    sections: vu.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), yu = (e, t, n, o = null) => {
  const s = [e, t, n].map(
    (i) => encodeURIComponent(i)
  );
  let a = Re.getCXServerUrl(
    `/page/${s.join("/")}`
  );
  return o && (a += `/${o}`), fetch(a).then((i) => i.json()).then((i) => i.segmentedContent);
}, _0 = (e) => K(void 0, null, function* () {
  const t = i_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Ii,
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
  return yield Re.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new bo(s))).catch((o) => []);
}), v0 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Ii,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Re.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new bo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, os = {
  fetchPages: p0,
  fetchLanguageTitles: m0,
  fetchPageContent: h0,
  fetchSegmentedContent: yu,
  fetchNearbyPages: _0,
  searchPagesByTitlePrefix: v0
};
function y0() {
  return K(this, null, function* () {
    return yield Re.getLanguagePairs().then((e) => e.sourceLanguages);
  });
}
function b0(e, t) {
  return K(this, null, function* () {
    const n = Re.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ze(e, t, o.mt)
      )
    );
  });
}
function S0() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function w0(e, t, n, o) {
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
    const u = {
      action: "tag",
      revid: r.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(i.postWithToken("csrf", u));
  });
}
const oa = {
  fetchSupportedLanguageCodes: y0,
  fetchSupportedMTProviders: b0,
  fetchCXServerToken: S0,
  addWikibaseLink: w0
};
function C0({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const r = o.slice(i, i + s), l = os.fetchPages(n, r).then(
      (u) => u.forEach((c) => t("addPage", c))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function x0({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || os.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function E0(n) {
  return K(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield oa.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function k0(r, l) {
  return K(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let u = t.getPage(o, a);
    if (u && u.content)
      return;
    const c = yield os.fetchPageContent(
      o,
      s,
      a,
      i
    );
    u = t.getPage(o, a), u ? u.content || (u.content = c.content, e("setPageSections", {
      page: u,
      sections: c.sections
    })) : e("addPage", c);
  });
}
function A0({ getters: e, commit: t }, { sourceLanguage: n, sourceTitle: o }) {
  const s = e.getPage(n, o);
  if (s)
    return new Promise((a) => {
      setTimeout(() => {
        const i = vu.convertSegmentedContentToPageSections(
          s.content,
          !0
          // resolve references
        );
        s.updateSections(i), a();
      }, 0);
    });
}
function T0(s, a) {
  return K(this, arguments, function* ({ commit: e, getters: t }, { sourceLanguage: n, targetLanguage: o }) {
    if (t.getSupportedMTProviders(n, o).length)
      return;
    const i = yield oa.fetchSupportedMTProviders(
      n,
      o
    );
    e("addMtProviderGroup", i);
  });
}
function D0(o) {
  return K(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield os.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const L0 = {
  fetchLanguageTitles: x0,
  fetchMTProviders: T0,
  fetchNearbyPages: D0,
  fetchPageContent: k0,
  fetchPageMetadata: C0,
  fetchSupportedLanguageCodes: E0,
  resolvePageContentReferences: A0
}, P0 = {
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
}, N0 = {
  namespaced: !0,
  state: a0,
  getters: i0,
  actions: L0,
  mutations: P0
}, F0 = {
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
  translationDataLoadingCounter: 0
}, M0 = {
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
}, O0 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Un(a)
  );
  return s && gu(s) ? Vt.parseTemplateWikitext(
    uu(s),
    n,
    t
  ) : Promise.resolve(null);
}, bu = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Un(a)
  );
  return s ? Vt.parseTemplateWikitext(
    uu(s),
    n,
    t
  ) : Promise.resolve(null);
};
function $i(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, r = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(r, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let _s;
const Ui = ({ dispatch: e, commit: t }) => {
  if (!_s) {
    let n = 1e3, o = 0;
    _s = $i(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then(
        (a) => {
          a instanceof mo ? (n *= o + 1, o++, setTimeout(_s, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
        }
      );
    }, 3e3);
  }
  return _s;
}, B0 = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), Ui({ dispatch: e, commit: t }).cancel();
}, I0 = (o) => K(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield oa.fetchCXServerToken().then(
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
function $0(n, o) {
  return K(this, arguments, function* ({ dispatch: e }, t) {
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
function U0({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
}
function R0({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentTranslation", n);
}
function V0(n) {
  return K(this, arguments, function* ({
    dispatch: e,
    state: t
  }) {
    const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
    yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
  });
}
function z0(s, a) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, state: n }, o) {
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
function j0({
  dispatch: e,
  getters: t,
  commit: n,
  state: o
}) {
  const s = t.getCurrentProposedTranslation, { currentSourceSection: a, currentMTProvider: i } = o;
  a.setTranslationForSelectedTranslationUnit(
    s,
    i
  ), Ui({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function H0(a, i) {
  return K(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
    const r = document.createElement("div");
    r.innerHTML = s, r.querySelectorAll(".sx-edit-dummy-node").forEach((f) => f.remove()), s = r.innerHTML;
    const { currentSourceSection: l, targetLanguage: u, currentMTProvider: c } = e, { selectedContentTranslationUnit: d } = l;
    if (d instanceof At) {
      const f = o.getCurrentPage, m = o.getCurrentTargetPage;
      s = (yield bu(
        s,
        (m == null ? void 0 : m.title) || f.title,
        u
      )) || s;
    }
    l.setTranslationForSelectedTranslationUnit(
      s,
      c
    ), Ui({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
  });
}
function q0({ state: e, dispatch: t }) {
  const { followingTranslationUnit: n } = e.currentSourceSection;
  n && t("selectTranslationUnitById", n.id);
}
function G0({ state: e, dispatch: t }) {
  const { selectedContentTranslationUnitIndex: n, contentTranslationUnits: o } = e.currentSourceSection, s = n - 1;
  let a = 0;
  s > -1 && (a = o[s].id), t("selectTranslationUnitById", a);
}
function K0(s) {
  return K(this, arguments, function* ({ state: e, dispatch: t, rootGetters: n, commit: o }) {
    const { sourceLanguage: a, targetLanguage: i } = e;
    yield t(
      "mediawiki/fetchMTProviders",
      { sourceLanguage: a, targetLanguage: i },
      { root: !0 }
    );
    const r = n["mediawiki/getSupportedMTProviders"](
      a,
      i
    ), l = e.currentMTProvider;
    if (l && r.includes(l))
      return;
    const u = ze.getStorageKey(
      a,
      i
    ), c = mw.storage.get(u) || r[0];
    o("setCurrentMTProvider", c);
  });
}
function W0({ commit: e, dispatch: t, state: n }, o) {
  e("setCurrentMTProvider", o);
  const { currentSourceSection: s } = n, { selectedTranslationUnitId: a } = s;
  t("translateTranslationUnitById", { id: a, provider: o });
}
function X0(i, r) {
  return K(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
    const { currentSourceSection: l, targetLanguage: u } = t;
    if (l.hasProposedTranslationByTranslationUnitId(s, a))
      return;
    let c = l.getOriginalContentByTranslationUnitId(s);
    const d = l.getContentTranslationUnitById(s);
    let g;
    if (e("addMtRequestsPending", s), g = yield n(
      "translator/translateContent",
      { originalContent: c, provider: a },
      { root: !0 }
    ), !g) {
      e("removeMtRequestsPending", s);
      return;
    }
    if (d instanceof At) {
      d.setBlockTemplateAdaptationInfoByHtml(
        a,
        g
      );
      const f = o.getCurrentPage, m = o.getCurrentTargetPage;
      g = (yield O0(
        g,
        (m == null ? void 0 : m.title) || f.title,
        u
      )) || "";
    }
    e("setProposedTranslationForTranslationUnitById", {
      id: s,
      provider: a,
      proposedTranslation: g
    }), e("removeMtRequestsPending", s);
  });
}
function Y0({
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
function J0({ commit: e }) {
  e("setCurrentSectionSuggestion", null);
}
const Z0 = {
  applyEditedTranslationToSelectedTranslationUnit: H0,
  applyProposedTranslationToSelectedTranslationUnit: j0,
  clearCurrentSectionSuggestion: J0,
  clearPendingSaveTranslationRequests: B0,
  fetchCurrentSectionSuggestionLanguageTitles: V0,
  getCXServerToken: I0,
  initializeMTProviders: K0,
  initializeSectionTranslation: U0,
  restoreSectionTranslation: R0,
  selectNextTranslationUnit: q0,
  selectPreviousTranslationUnit: G0,
  selectTranslationUnitById: z0,
  startFavoriteSectionTranslation: $0,
  translateTranslationUnitById: X0,
  translateSelectedTranslationUnitForAllProviders: Y0,
  updateMTProvider: W0
}, Q0 = {
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
    e.currentSectionSuggestion = t && new zt(xt(dt({}, t), {
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
    s instanceof At ? s.blockTemplateProposedTranslations[n] = o : s instanceof mn && s.addProposedTranslation(n, o);
  },
  /**
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (e, t) => {
    e.currentMTProvider = t;
    const { sourceLanguage: n, targetLanguage: o } = e, s = ze.getStorageKey(
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
  }
}, e1 = {
  namespaced: !0,
  state: F0,
  getters: M0,
  actions: Z0,
  mutations: Q0
}, ho = Oh({
  modules: { translator: k_, suggestions: s0, mediawiki: N0, application: e1 }
});
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const Jt = typeof window != "undefined";
function t1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Oe = Object.assign;
function ka(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = St(s) ? s.map(e) : e(s);
  }
  return n;
}
const Fo = () => {
}, St = Array.isArray;
function De(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const n1 = /\/$/, o1 = (e) => e.replace(n1, "");
function Aa(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const r = t.indexOf("#");
  let l = t.indexOf("?");
  return r < l && r >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, r > -1 ? r : t.length), s = e(a)), r > -1 && (o = o || t.slice(0, r), i = t.slice(r, t.length)), o = i1(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function s1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Wr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Xr(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && En(t.matched[o], n.matched[s]) && Su(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function En(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Su(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!a1(e[n], t[n]))
      return !1;
  return !0;
}
function a1(e, t) {
  return St(e) ? Yr(e, t) : St(t) ? Yr(t, e) : e === t;
}
function Yr(e, t) {
  return St(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function i1(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return De(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/");
  let s = n.length - 1, a, i;
  for (a = 0; a < o.length; a++)
    if (i = o[a], i !== ".")
      if (i === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + o.slice(a - (a === o.length ? 1 : 0)).join("/");
}
var Go;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Go || (Go = {}));
var Mo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Mo || (Mo = {}));
function r1(e) {
  if (!e)
    if (Jt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), o1(e);
}
const l1 = /^[^#]+#/;
function c1(e, t) {
  return e.replace(l1, "#") + t;
}
function u1(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const sa = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function d1(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          De(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        De(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && De(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = u1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Jr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Qa = /* @__PURE__ */ new Map();
function g1(e, t) {
  Qa.set(e, t);
}
function f1(e) {
  const t = Qa.get(e);
  return Qa.delete(e), t;
}
let p1 = () => location.protocol + "//" + location.host;
function wu(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(r);
    return l[0] !== "/" && (l = "/" + l), Wr(l, "");
  }
  return Wr(n, e) + o + s;
}
function m1(e, t, n, o) {
  let s = [], a = [], i = null;
  const r = ({ state: g }) => {
    const f = wu(e, location), m = n.value, S = t.value;
    let x = 0;
    if (g) {
      if (n.value = f, t.value = g, i && i === m) {
        i = null;
        return;
      }
      x = S ? g.position - S.position : 0;
    } else
      o(f);
    s.forEach((k) => {
      k(n.value, m, {
        delta: x,
        type: Go.pop,
        direction: x ? x > 0 ? Mo.forward : Mo.back : Mo.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function u(g) {
    s.push(g);
    const f = () => {
      const m = s.indexOf(g);
      m > -1 && s.splice(m, 1);
    };
    return a.push(f), f;
  }
  function c() {
    const { history: g } = window;
    g.state && g.replaceState(Oe({}, g.state, { scroll: sa() }), "");
  }
  function d() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", r), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", r), window.addEventListener("beforeunload", c), {
    pauseListeners: l,
    listen: u,
    destroy: d
  };
}
function Zr(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? sa() : null
  };
}
function h1(e) {
  const { history: t, location: n } = window, o = {
    value: wu(e, n)
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
  function a(l, u, c) {
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : p1() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (f) {
      ({}).NODE_ENV !== "production" ? De("Error with push/replace State", f) : console.error(f), n[c ? "replace" : "assign"](g);
    }
  }
  function i(l, u) {
    const c = Oe({}, t.state, Zr(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), u, { position: s.value.position });
    a(l, c, !0), o.value = l;
  }
  function r(l, u) {
    const c = Oe(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: l,
        scroll: sa()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && De(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(c.current, c, !0);
    const d = Oe({}, Zr(o.value, l, null), { position: c.position + 1 }, u);
    a(l, d, !1), o.value = l;
  }
  return {
    location: o,
    state: s,
    push: r,
    replace: i
  };
}
function _1(e) {
  e = r1(e);
  const t = h1(e), n = m1(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = Oe({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: c1.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function v1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && De(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), _1(e);
}
function y1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Cu(e) {
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
}, ei = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Qr;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Qr || (Qr = {}));
const b1 = {
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
    return `Redirected from "${e.fullPath}" to "${w1(t)}" via a navigation guard.`;
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
function _o(e, t) {
  return {}.NODE_ENV !== "production" ? Oe(new Error(b1[e](t)), {
    type: e,
    [ei]: !0
  }, t) : Oe(new Error(), {
    type: e,
    [ei]: !0
  }, t);
}
function Wt(e, t) {
  return e instanceof Error && ei in e && (t == null || !!(e.type & t));
}
const S1 = ["params", "query", "hash"];
function w1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of S1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const el = "[^/]+?", C1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, x1 = /[.+*?^${}()[\]/\\]/g;
function E1(e, t) {
  const n = Oe({}, C1, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const c = u.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !u.length && (s += "/");
    for (let d = 0; d < u.length; d++) {
      const g = u[d];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        d || (s += "/"), s += g.value.replace(x1, "\\$&"), f += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: S, optional: x, regexp: k } = g;
        a.push({
          name: m,
          repeatable: S,
          optional: x
        });
        const D = k || el;
        if (D !== el) {
          f += 10;
          try {
            new RegExp(`(${D})`);
          } catch (M) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${D}): ` + M.message);
          }
        }
        let U = S ? `((?:${D})(?:/(?:${D}))*)` : `(${D})`;
        d || (U = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        x && u.length < 2 ? `(?:/${U})` : "/" + U), x && (U += "?"), s += U, f += 20, x && (f += -8), S && (f += -20), D === ".*" && (f += -50);
      }
      c.push(f);
    }
    o.push(c);
  }
  if (n.strict && n.end) {
    const u = o.length - 1;
    o[u][o[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function r(u) {
    const c = u.match(i), d = {};
    if (!c)
      return null;
    for (let g = 1; g < c.length; g++) {
      const f = c[g] || "", m = a[g - 1];
      d[m.name] = f && m.repeatable ? f.split("/") : f;
    }
    return d;
  }
  function l(u) {
    let c = "", d = !1;
    for (const g of e) {
      (!d || !c.endsWith("/")) && (c += "/"), d = !1;
      for (const f of g)
        if (f.type === 0)
          c += f.value;
        else if (f.type === 1) {
          const { value: m, repeatable: S, optional: x } = f, k = m in u ? u[m] : "";
          if (St(k) && !S)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const D = St(k) ? k.join("/") : k;
          if (!D)
            if (x)
              g.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          c += D;
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
function k1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function A1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = k1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (tl(o))
      return 1;
    if (tl(s))
      return -1;
  }
  return s.length - o.length;
}
function tl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const T1 = {
  type: 0,
  value: ""
}, D1 = /[a-zA-Z0-9_]/;
function L1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[T1]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(f) {
    throw new Error(`ERR (${n})/"${u}": ${f}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let r = 0, l, u = "", c = "";
  function d() {
    u && (n === 0 ? a.push({
      type: 0,
      value: u
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: u,
      regexp: c,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), u = "");
  }
  function g() {
    u += l;
  }
  for (; r < e.length; ) {
    if (l = e[r++], l === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (u && d(), i()) : l === ":" ? (d(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        l === "(" ? n = 2 : D1.test(l) ? g() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && r--);
        break;
      case 2:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && r--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), i(), s;
}
function P1(e, t, n) {
  const o = E1(L1(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && De(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
function N1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = sl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return o.get(c);
  }
  function a(c, d, g) {
    const f = !g, m = F1(c);
    ({}).NODE_ENV !== "production" && I1(m, d), m.aliasOf = g && g.record;
    const S = sl(t, c), x = [
      m
    ];
    if ("alias" in c) {
      const U = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const M of U)
        x.push(Oe({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: M,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let k, D;
    for (const U of x) {
      const { path: M } = U;
      if (d && M[0] !== "/") {
        const X = d.record.path, Se = X[X.length - 1] === "/" ? "" : "/";
        U.path = d.record.path + (M && Se + M);
      }
      if ({}.NODE_ENV !== "production" && U.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (k = P1(U, d, S), {}.NODE_ENV !== "production" && d && M[0] === "/" && $1(k, d), g ? (g.alias.push(k), {}.NODE_ENV !== "production" && B1(g, k)) : (D = D || k, D !== k && D.alias.push(k), f && c.name && !ol(k) && i(c.name)), m.children) {
        const X = m.children;
        for (let Se = 0; Se < X.length; Se++)
          a(X[Se], k, g && g.children[Se]);
      }
      g = g || k, (k.record.components && Object.keys(k.record.components).length || k.record.name || k.record.redirect) && l(k);
    }
    return D ? () => {
      i(D);
    } : Fo;
  }
  function i(c) {
    if (Cu(c)) {
      const d = o.get(c);
      d && (o.delete(c), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = n.indexOf(c);
      d > -1 && (n.splice(d, 1), c.record.name && o.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i));
    }
  }
  function r() {
    return n;
  }
  function l(c) {
    let d = 0;
    for (; d < n.length && A1(c, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (c.record.path !== n[d].record.path || !xu(c, n[d])); )
      d++;
    n.splice(d, 0, c), c.record.name && !ol(c) && o.set(c.record.name, c);
  }
  function u(c, d) {
    let g, f = {}, m, S;
    if ("name" in c && c.name) {
      if (g = o.get(c.name), !g)
        throw _o(1, {
          location: c
        });
      if ({}.NODE_ENV !== "production") {
        const D = Object.keys(c.params || {}).filter((U) => !g.keys.find((M) => M.name === U));
        D.length && De(`Discarded invalid param(s) "${D.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      S = g.record.name, f = Oe(
        // paramsFromLocation is a new object
        nl(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((D) => !D.optional).map((D) => D.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && nl(c.params, g.keys.map((D) => D.name))
      ), m = g.stringify(f);
    } else if ("path" in c)
      m = c.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && De(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), g = n.find((D) => D.re.test(m)), g && (f = g.parse(m), S = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((D) => D.re.test(d.path)), !g)
        throw _o(1, {
          location: c,
          currentLocation: d
        });
      S = g.record.name, f = Oe({}, d.params, c.params), m = g.stringify(f);
    }
    const x = [];
    let k = g;
    for (; k; )
      x.unshift(k.record), k = k.parent;
    return {
      name: S,
      path: m,
      params: f,
      matched: x,
      meta: O1(x)
    };
  }
  return e.forEach((c) => a(c)), { addRoute: a, resolve: u, removeRoute: i, getRoutes: r, getRecordMatcher: s };
}
function nl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function F1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: M1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function M1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function ol(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function O1(e) {
  return e.reduce((t, n) => Oe(t, n.meta), {});
}
function sl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function ti(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function B1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(ti.bind(null, n)))
      return De(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(ti.bind(null, n)))
      return De(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function I1(e, t) {
  t && t.record.name && !e.name && !e.path && De(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function $1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(ti.bind(null, n)))
      return De(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function xu(e, t) {
  return t.children.some((n) => n === e || xu(e, n));
}
const Eu = /#/g, U1 = /&/g, R1 = /\//g, V1 = /=/g, z1 = /\?/g, ku = /\+/g, j1 = /%5B/g, H1 = /%5D/g, Au = /%5E/g, q1 = /%60/g, Tu = /%7B/g, G1 = /%7C/g, Du = /%7D/g, K1 = /%20/g;
function Ri(e) {
  return encodeURI("" + e).replace(G1, "|").replace(j1, "[").replace(H1, "]");
}
function W1(e) {
  return Ri(e).replace(Tu, "{").replace(Du, "}").replace(Au, "^");
}
function ni(e) {
  return Ri(e).replace(ku, "%2B").replace(K1, "+").replace(Eu, "%23").replace(U1, "%26").replace(q1, "`").replace(Tu, "{").replace(Du, "}").replace(Au, "^");
}
function X1(e) {
  return ni(e).replace(V1, "%3D");
}
function Y1(e) {
  return Ri(e).replace(Eu, "%23").replace(z1, "%3F");
}
function J1(e) {
  return e == null ? "" : Y1(e).replace(R1, "%2F");
}
function Ko(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && De(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Z1(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(ku, " "), i = a.indexOf("="), r = Ko(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : Ko(a.slice(i + 1));
    if (r in t) {
      let u = t[r];
      St(u) || (u = t[r] = [u]), u.push(l);
    } else
      t[r] = l;
  }
  return t;
}
function al(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = X1(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (St(o) ? o.map((a) => a && ni(a)) : [o && ni(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Q1(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = St(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const ev = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), il = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), aa = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Lu = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), oi = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ko() {
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
    list: () => e,
    reset: n
  };
}
function hn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, r) => {
    const l = (d) => {
      d === !1 ? r(_o(4, {
        from: n,
        to: t
      })) : d instanceof Error ? r(d) : y1(d) ? r(_o(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), i());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? tv(l, t, n) : l);
    let c = Promise.resolve(u);
    if (e.length < 3 && (c = c.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        c = c.then((g) => l._called ? g : (De(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !l._called) {
        De(d), r(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((d) => r(d));
  });
}
function tv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && De(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ta(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && De(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let r = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!r || typeof r != "object" && typeof r != "function")
          throw De(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(r)}".`), new Error("Invalid route component");
        if ("then" in r) {
          De(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = r;
          r = () => l;
        } else
          r.__asyncLoader && // warn only once per component
          !r.__warnedDefineAsync && (r.__warnedDefineAsync = !0, De(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (nv(r)) {
          const u = (r.__vccOpts || r)[t];
          u && s.push(hn(u, n, o, a, i));
        } else {
          let l = r();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (De(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const c = t1(u) ? u.default : u;
            a.components[i] = c;
            const g = (c.__vccOpts || c)[t];
            return g && hn(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function nv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function rl(e) {
  const t = We(aa), n = We(Lu), o = y(() => t.resolve(Sn(e.to))), s = y(() => {
    const { matched: l } = o.value, { length: u } = l, c = l[u - 1], d = n.matched;
    if (!c || !d.length)
      return -1;
    const g = d.findIndex(En.bind(null, c));
    if (g > -1)
      return g;
    const f = ll(l[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      ll(c) === f && // avoid comparing the child with its parent
      d[d.length - 1].path !== f ? d.findIndex(En.bind(null, l[u - 2])) : g
    );
  }), a = y(() => s.value > -1 && iv(n.params, o.value.params)), i = y(() => s.value > -1 && s.value === n.matched.length - 1 && Su(n.params, o.value.params));
  function r(l = {}) {
    return av(l) ? t[Sn(e.replace) ? "replace" : "push"](
      Sn(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Fo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Jt) {
    const l = Ei();
    if (l) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(u), Wg(() => {
        u.route = o.value, u.isActive = a.value, u.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: y(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: r
  };
}
const ov = /* @__PURE__ */ ic({
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
  useLink: rl,
  setup(e, { slots: t }) {
    const n = Zn(rl(e)), { options: o } = We(aa), s = y(() => ({
      [cl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [cl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Ho("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), sv = ov;
function av(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function iv(e, t) {
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
function ll(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const cl = (e, t, n) => e != null ? e : t != null ? t : n, rv = /* @__PURE__ */ ic({
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
    ({}).NODE_ENV !== "production" && cv();
    const o = We(oi), s = y(() => e.route || o.value), a = We(il, 0), i = y(() => {
      let u = Sn(a);
      const { matched: c } = s.value;
      let d;
      for (; (d = c[u]) && !d.components; )
        u++;
      return u;
    }), r = y(() => s.value.matched[i.value]);
    ws(il, y(() => i.value + 1)), ws(ev, r), ws(oi, s);
    const l = Z();
    return He(() => [l.value, r.value, e.name], ([u, c, d], [g, f, m]) => {
      c && (c.instances[d] = u, f && f !== c && u && u === g && (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards), c.updateGuards.size || (c.updateGuards = f.updateGuards))), u && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!f || !En(c, f) || !g) && (c.enterCallbacks[d] || []).forEach((S) => S(u));
    }, { flush: "post" }), () => {
      const u = s.value, c = e.name, d = r.value, g = d && d.components[c];
      if (!g)
        return ul(n.default, { Component: g, route: u });
      const f = d.props[c], m = f ? f === !0 ? u.params : typeof f == "function" ? f(u) : f : null, x = Ho(g, Oe({}, m, t, {
        onVnodeUnmounted: (k) => {
          k.component.isUnmounted && (d.instances[c] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && Jt && x.ref) {
        const k = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (St(x.ref) ? x.ref.map((U) => U.i) : [x.ref.i]).forEach((U) => {
          U.__vrv_devtools = k;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        ul(n.default, { Component: x, route: u }) || x
      );
    };
  }
});
function ul(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const lv = rv;
function cv() {
  const e = Ei(), t = e.parent && e.parent.type.name;
  if (t && (t === "KeepAlive" || t.includes("Transition"))) {
    const n = t === "KeepAlive" ? "keep-alive" : "transition";
    De(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`);
  }
}
function Ao(e, t) {
  const n = Oe({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => vv(o, ["instances", "children", "aliasOf"]))
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
function vs(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let uv = 0;
function dv(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = uv++;
  Xc({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((c, d) => {
      c.instanceData && c.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Ao(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: c, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        c.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Pu
        });
      }
      St(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
        let f = Mu, m = "";
        g.isExactActive ? (f = Fu, m = "This is exactly active") : g.isActive && (f = Nu, m = "This link is active"), c.tags.push({
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
    }), t.onError((c, d) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: c },
          groupId: d.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((c, d) => {
      const g = {
        guard: vs("beforeEach"),
        from: Ao(d, "Current Location during this navigation"),
        to: Ao(c, "Target location")
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
    }), t.afterEach((c, d, g) => {
      const f = {
        guard: vs("afterEach")
      };
      g ? (f.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, f.status = vs("❌")) : f.status = vs("✅"), f.from = Ao(d, "Current Location during this navigation"), f.to = Ao(c, "Target location"), s.addTimelineEvent({
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
      if (!u)
        return;
      const c = u;
      let d = n.getRoutes().filter((g) => !g.parent);
      d.forEach(Iu), c.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        si(g, c.filter.toLowerCase())
      ))), d.forEach((g) => Bu(g, t.currentRoute.value)), c.rootNodes = d.map(Ou);
    }
    let u;
    s.on.getInspectorTree((c) => {
      u = c, c.app === e && c.inspectorId === r && l();
    }), s.on.getInspectorState((c) => {
      if (c.app === e && c.inspectorId === r) {
        const g = n.getRoutes().find((f) => f.record.__vd_id === c.nodeId);
        g && (c.state = {
          options: fv(g)
        });
      }
    }), s.sendInspectorTree(r), s.sendInspectorState(r);
  });
}
function gv(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function fv(e) {
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
        display: e.keys.map((o) => `${o.name}${gv(o)}`).join(" "),
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
const Pu = 15485081, Nu = 2450411, Fu = 8702998, pv = 2282478, Mu = 16486972, mv = 6710886;
function Ou(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: pv
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Mu
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Pu
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Fu
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Nu
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: mv
  });
  let o = n.__vd_id;
  return o == null && (o = String(hv++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ou)
  };
}
let hv = 0;
const _v = /^\/(.*)\/([a-z]*)$/;
function Bu(e, t) {
  const n = t.matched.length && En(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => En(o, e.record))), e.children.forEach((o) => Bu(o, t));
}
function Iu(e) {
  e.__vd_match = !1, e.children.forEach(Iu);
}
function si(e, t) {
  const n = String(e.re).match(_v);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => si(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ko(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => si(i, t));
}
function vv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function yv(e) {
  const t = N1(e.routes, e), n = e.parseQuery || Z1, o = e.stringifyQuery || al, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ko(), i = ko(), r = ko(), l = fg(dn);
  let u = dn;
  Jt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = ka.bind(null, (A) => "" + A), d = ka.bind(null, J1), g = (
    // @ts-expect-error: intentionally avoid the type check
    ka.bind(null, Ko)
  );
  function f(A, Y) {
    let q, Q;
    return Cu(A) ? (q = t.getRecordMatcher(A), Q = Y) : Q = A, t.addRoute(Q, q);
  }
  function m(A) {
    const Y = t.getRecordMatcher(A);
    Y ? t.removeRoute(Y) : {}.NODE_ENV !== "production" && De(`Cannot remove non-existent route "${String(A)}"`);
  }
  function S() {
    return t.getRoutes().map((A) => A.record);
  }
  function x(A) {
    return !!t.getRecordMatcher(A);
  }
  function k(A, Y) {
    if (Y = Oe({}, Y || l.value), typeof A == "string") {
      const de = Aa(n, A, Y.path), h = t.resolve({ path: de.path }, Y), w = s.createHref(de.fullPath);
      return {}.NODE_ENV !== "production" && (w.startsWith("//") ? De(`Location "${A}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : h.matched.length || De(`No match found for location with path "${A}"`)), Oe(de, h, {
        params: g(h.params),
        hash: Ko(de.hash),
        redirectedFrom: void 0,
        href: w
      });
    }
    let q;
    if ("path" in A)
      ({}).NODE_ENV !== "production" && "params" in A && !("name" in A) && // @ts-expect-error: the type is never
      Object.keys(A.params).length && De(`Path "${// @ts-expect-error: the type is never
      A.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), q = Oe({}, A, {
        path: Aa(n, A.path, Y.path).path
      });
    else {
      const de = Oe({}, A.params);
      for (const h in de)
        de[h] == null && delete de[h];
      q = Oe({}, A, {
        params: d(A.params)
      }), Y.params = d(Y.params);
    }
    const Q = t.resolve(q, Y), Te = A.hash || "";
    ({}).NODE_ENV !== "production" && Te && !Te.startsWith("#") && De(`A \`hash\` should always start with the character "#". Replace "${Te}" with "#${Te}".`), Q.params = c(g(Q.params));
    const $e = s1(o, Oe({}, A, {
      hash: W1(Te),
      path: Q.path
    })), me = s.createHref($e);
    return {}.NODE_ENV !== "production" && (me.startsWith("//") ? De(`Location "${A}" resolved to "${me}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || De(`No match found for location with path "${"path" in A ? A.path : A}"`)), Oe({
      fullPath: $e,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Te,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === al ? Q1(A.query) : A.query || {}
      )
    }, Q, {
      redirectedFrom: void 0,
      href: me
    });
  }
  function D(A) {
    return typeof A == "string" ? Aa(n, A, l.value.path) : Oe({}, A);
  }
  function U(A, Y) {
    if (u !== A)
      return _o(8, {
        from: Y,
        to: A
      });
  }
  function M(A) {
    return oe(A);
  }
  function X(A) {
    return M(Oe(D(A), { replace: !0 }));
  }
  function Se(A) {
    const Y = A.matched[A.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: q } = Y;
      let Q = typeof q == "function" ? q(A) : q;
      if (typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = D(Q) : (
        // force empty params
        { path: Q }
      ), Q.params = {}), {}.NODE_ENV !== "production" && !("path" in Q) && !("name" in Q))
        throw De(`Invalid redirect found:
${JSON.stringify(Q, null, 2)}
 when navigating to "${A.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Oe({
        query: A.query,
        hash: A.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in Q ? {} : A.params
      }, Q);
    }
  }
  function oe(A, Y) {
    const q = u = k(A), Q = l.value, Te = A.state, $e = A.force, me = A.replace === !0, de = Se(q);
    if (de)
      return oe(
        Oe(D(de), {
          state: typeof de == "object" ? Oe({}, Te, de.state) : Te,
          force: $e,
          replace: me
        }),
        // keep original redirectedFrom if it exists
        Y || q
      );
    const h = q;
    h.redirectedFrom = Y;
    let w;
    return !$e && Xr(o, Q, q) && (w = _o(16, { to: h, from: Q }), sn(
      Q,
      Q,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (w ? Promise.resolve(w) : pe(h, Q)).catch((E) => Wt(E) ? (
      // navigation redirects still mark the router as ready
      Wt(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? E : st(E)
    ) : (
      // reject any unknown error
      ue(E, h, Q)
    )).then((E) => {
      if (E) {
        if (Wt(
          E,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Xr(o, k(E.to), h) && // and we have done it a couple of times
          Y && // @ts-expect-error: added only in dev
          (Y._count = Y._count ? (
            // @ts-expect-error
            Y._count + 1
          ) : 1) > 10 ? (De(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : oe(
            // keep options
            Oe({
              // preserve an existing replacement but allow the redirect to override it
              replace: me
            }, D(E.to), {
              state: typeof E.to == "object" ? Oe({}, Te, E.to.state) : Te,
              force: $e
            }),
            // preserve the original redirectedFrom if any
            Y || h
          );
      } else
        E = xe(h, Q, !0, me, Te);
      return Ae(h, Q, E), E;
    });
  }
  function j(A, Y) {
    const q = U(A, Y);
    return q ? Promise.reject(q) : Promise.resolve();
  }
  function pe(A, Y) {
    let q;
    const [Q, Te, $e] = bv(A, Y);
    q = Ta(Q.reverse(), "beforeRouteLeave", A, Y);
    for (const de of Q)
      de.leaveGuards.forEach((h) => {
        q.push(hn(h, A, Y));
      });
    const me = j.bind(null, A, Y);
    return q.push(me), oo(q).then(() => {
      q = [];
      for (const de of a.list())
        q.push(hn(de, A, Y));
      return q.push(me), oo(q);
    }).then(() => {
      q = Ta(Te, "beforeRouteUpdate", A, Y);
      for (const de of Te)
        de.updateGuards.forEach((h) => {
          q.push(hn(h, A, Y));
        });
      return q.push(me), oo(q);
    }).then(() => {
      q = [];
      for (const de of A.matched)
        if (de.beforeEnter && !Y.matched.includes(de))
          if (St(de.beforeEnter))
            for (const h of de.beforeEnter)
              q.push(hn(h, A, Y));
          else
            q.push(hn(de.beforeEnter, A, Y));
      return q.push(me), oo(q);
    }).then(() => (A.matched.forEach((de) => de.enterCallbacks = {}), q = Ta($e, "beforeRouteEnter", A, Y), q.push(me), oo(q))).then(() => {
      q = [];
      for (const de of i.list())
        q.push(hn(de, A, Y));
      return q.push(me), oo(q);
    }).catch((de) => Wt(
      de,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? de : Promise.reject(de));
  }
  function Ae(A, Y, q) {
    for (const Q of r.list())
      Q(A, Y, q);
  }
  function xe(A, Y, q, Q, Te) {
    const $e = U(A, Y);
    if ($e)
      return $e;
    const me = Y === dn, de = Jt ? history.state : {};
    q && (Q || me ? s.replace(A.fullPath, Oe({
      scroll: me && de && de.scroll
    }, Te)) : s.push(A.fullPath, Te)), l.value = A, sn(A, Y, q, me), st();
  }
  let W;
  function Ne() {
    W || (W = s.listen((A, Y, q) => {
      if (!Gt.listening)
        return;
      const Q = k(A), Te = Se(Q);
      if (Te) {
        oe(Oe(Te, { replace: !0 }), Q).catch(Fo);
        return;
      }
      u = Q;
      const $e = l.value;
      Jt && g1(Jr($e.fullPath, q.delta), sa()), pe(Q, $e).catch((me) => Wt(
        me,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? me : Wt(
        me,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (oe(
        me.to,
        Q
        // avoid an uncaught rejection, let push call triggerError
      ).then((de) => {
        Wt(
          de,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !q.delta && q.type === Go.pop && s.go(-1, !1);
      }).catch(Fo), Promise.reject()) : (q.delta && s.go(-q.delta, !1), ue(me, Q, $e))).then((me) => {
        me = me || xe(
          // after navigation, all matched components are resolved
          Q,
          $e,
          !1
        ), me && (q.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Wt(
          me,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-q.delta, !1) : q.type === Go.pop && Wt(
          me,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), Ae(Q, $e, me);
      }).catch(Fo);
    }));
  }
  let Ge = ko(), Le = ko(), Be;
  function ue(A, Y, q) {
    st(A);
    const Q = Le.list();
    return Q.length ? Q.forEach((Te) => Te(A, Y, q)) : ({}.NODE_ENV !== "production" && De("uncaught error during route navigation:"), console.error(A)), Promise.reject(A);
  }
  function ge() {
    return Be && l.value !== dn ? Promise.resolve() : new Promise((A, Y) => {
      Ge.add([A, Y]);
    });
  }
  function st(A) {
    return Be || (Be = !A, Ne(), Ge.list().forEach(([Y, q]) => A ? q(A) : Y()), Ge.reset()), A;
  }
  function sn(A, Y, q, Q) {
    const { scrollBehavior: Te } = e;
    if (!Jt || !Te)
      return Promise.resolve();
    const $e = !q && f1(Jr(A.fullPath, 0)) || (Q || !q) && history.state && history.state.scroll || null;
    return vo().then(() => Te(A, Y, $e)).then((me) => me && d1(me)).catch((me) => ue(me, A, Y));
  }
  const ht = (A) => s.go(A);
  let ct;
  const ut = /* @__PURE__ */ new Set(), Gt = {
    currentRoute: l,
    listening: !0,
    addRoute: f,
    removeRoute: m,
    hasRoute: x,
    getRoutes: S,
    resolve: k,
    options: e,
    push: M,
    replace: X,
    go: ht,
    back: () => ht(-1),
    forward: () => ht(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: r.add,
    onError: Le.add,
    isReady: ge,
    install(A) {
      const Y = this;
      A.component("RouterLink", sv), A.component("RouterView", lv), A.config.globalProperties.$router = Y, Object.defineProperty(A.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Sn(l)
      }), Jt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ct && l.value === dn && (ct = !0, M(s.location).catch((Te) => {
        ({}).NODE_ENV !== "production" && De("Unexpected error when starting the router:", Te);
      }));
      const q = {};
      for (const Te in dn)
        q[Te] = y(() => l.value[Te]);
      A.provide(aa, Y), A.provide(Lu, Zn(q)), A.provide(oi, l);
      const Q = A.unmount;
      ut.add(A), A.unmount = function() {
        ut.delete(A), ut.size < 1 && (u = dn, W && W(), W = null, l.value = dn, ct = !1, Be = !1), Q();
      }, {}.NODE_ENV !== "production" && Jt && dv(A, Y, t);
    }
  };
  return Gt;
}
function oo(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function bv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const r = t.matched[i];
    r && (e.matched.find((u) => En(u, r)) ? o.push(r) : n.push(r));
    const l = e.matched[i];
    l && (t.matched.find((u) => En(u, l)) || s.push(l));
  }
  return [n, o, s];
}
function mt() {
  return We(aa);
}
const Sv = {
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
}, wv = {
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
}, Cv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], xv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Ev = {
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
}, kv = {
  languages: Sv,
  scriptgroups: wv,
  rtlscripts: Cv,
  regiongroups: xv,
  territories: Ev
};
var rt = kv;
function ss(e) {
  return !!rt.languages[e];
}
function Dn(e) {
  return ss(e) && rt.languages[e].length === 1 ? rt.languages[e][0] : !1;
}
function Av() {
  return rt.languages;
}
function as(e) {
  var t = Dn(e);
  return t ? as(t) : ss(e) ? rt.languages[e][0] : "Zyyy";
}
function Vi(e) {
  var t = Dn(e);
  return t ? Vi(t) : ss(e) && rt.languages[e][1] || "UNKNOWN";
}
function Wo(e) {
  var t = Dn(e);
  return t ? Wo(t) : ss(e) && rt.languages[e][2] || e;
}
function Tv() {
  var e, t = {};
  for (e in rt.languages)
    Dn(e) || (t[e] = Wo(e));
  return t;
}
function $u(e) {
  var t, n, o = [];
  for (t in rt.languages)
    if (!Dn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === as(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Dv(e) {
  return $u([e]);
}
function Uu(e) {
  var t;
  for (t in rt.scriptgroups)
    if (rt.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function zi(e) {
  return Uu(as(e));
}
function Ru(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Dn(n) || n, a = zi(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Vu(e) {
  var t, n, o, s = {};
  for (t in rt.languages)
    if (!Dn(t)) {
      for (n = 0; n < e.length; n++)
        if (Vi(t).includes(e[n])) {
          o = zi(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Lv(e) {
  return Vu([e]);
}
function Pv(e) {
  var t, n, o, s = [];
  for (t = Ru(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Nv(e, t) {
  var n = Wo(e) || e, o = Wo(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function zu(e) {
  return rt.rtlscripts.includes(as(e));
}
function Fv(e) {
  return zu(e) ? "rtl" : "ltr";
}
function Mv(e) {
  return rt.territories[e] || [];
}
function Ov(e, t) {
  t.target ? rt.languages[e] = [t.target] : rt.languages[e] = [t.script, t.regions, t.autonym];
}
var Me = {
  addLanguage: Ov,
  getAutonym: Wo,
  getAutonyms: Tv,
  getDir: Fv,
  getGroupOfScript: Uu,
  getLanguages: Av,
  getLanguagesByScriptGroup: Ru,
  getLanguagesByScriptGroupInRegion: Lv,
  getLanguagesByScriptGroupInRegions: Vu,
  getLanguagesInScript: Dv,
  getLanguagesInScripts: $u,
  getLanguagesInTerritory: Mv,
  getRegions: Vi,
  getScript: as,
  getScriptGroupOfLanguage: zi,
  isKnown: ss,
  isRedirect: Dn,
  isRtl: zu,
  sortByScriptGroup: Pv,
  sortByAutonym: Nv
};
function is() {
  const e = y(
    () => ho.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: y(
      () => ho.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: e
  };
}
function fe(e) {
  const t = y(() => e.state.application.sourceLanguage), n = y(() => e.state.application.targetLanguage), o = y(
    () => e.state.application.currentMTProvider
  ), s = y(
    () => e.state.application.currentSectionSuggestion
  ), a = y(
    () => e.state.application.currentSourceSection
  ), i = y(
    () => Me.getAutonym(t.value)
  ), r = y(
    () => Me.getAutonym(n.value)
  ), l = y(
    () => {
      var f;
      return (f = a.value) == null ? void 0 : f.isTitleSelected;
    }
  ), u = y(
    () => {
      var f;
      return (f = a.value) == null ? void 0 : f.selectedContentTranslationUnit;
    }
  ), c = y(
    () => e.getters["application/getCurrentProposedTranslation"]
  ), d = y(
    () => e.getters["application/getCurrentPage"]
  ), g = y(
    () => e.getters["application/getCurrentTargetPage"]
  );
  return {
    currentMTProvider: o,
    currentSectionSuggestion: s,
    currentSourcePage: d,
    currentSourceSection: a,
    currentTargetPage: g,
    isSectionTitleSelected: l,
    proposedTranslation: c,
    selectedContentTranslationUnit: u,
    sourceLanguage: t,
    sourceLanguageAutonym: i,
    targetLanguage: n,
    targetLanguageAutonym: r
  };
}
const Bv = (e, t) => {
  const n = new URLSearchParams(location.search), o = n.get("from"), s = n.get("to"), a = Re.getCurrentWikiLanguageCode(), i = (g) => !e || Array.isArray(e) && e.includes(g), r = (g) => t.includes(g), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let u;
  return s && i(s) && r(s) ? u = s : i(a) && r(a) ? u = a : u = (e == null ? void 0 : e[0]) || l.targetLanguage, { sourceLanguage: [
    o,
    l.sourceLanguage,
    a,
    l.targetLanguage
  ].filter((g) => r(g)).find((g) => g !== u), targetLanguage: u };
}, ai = (e) => {
  if (!history.pushState)
    return;
  const t = e instanceof na, n = new URLSearchParams(location.search);
  n.set("page", e == null ? void 0 : e.sourceTitle), n.set("from", e == null ? void 0 : e.sourceLanguage), n.set("to", e == null ? void 0 : e.targetLanguage), n.set("sx", !0), t && n.set("draft", !0), n.delete("title"), So(Object.fromEntries(n));
}, So = (e) => {
  history.replaceState(
    {},
    document.title,
    fu("Special:ContentTranslation", e)
  );
}, ia = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = Re.getCurrentWikiLanguageCode();
  a && t !== i && (location.href = Re.getCXUrl(
    n,
    null,
    e,
    t,
    dt({ sx: !0, section: o }, s)
  ));
}, ra = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), So(Object.fromEntries(o));
}, ju = () => K(void 0, null, function* () {
  yield ho.dispatch("mediawiki/fetchSupportedLanguageCodes");
  const { enabledTargetLanguages: e, supportedLanguageCodes: t } = is(), { sourceLanguage: n, targetLanguage: o } = Bv(
    e.value,
    t.value
  ), s = new URLSearchParams(location.search), a = s.get("page"), i = s.get("section");
  ia(
    n,
    o,
    a,
    i
  ), ra(ho, n, o);
}), Hu = (e) => (t, n) => {
  const { sourceLanguage: o, targetLanguage: s } = fe(e);
  t === n && (t = s.value, n = o.value), ia(
    t,
    n,
    null,
    null
  ), ra(e, t, n), e.dispatch("suggestions/initializeSuggestions");
}, Iv = () => {
  const e = le();
  return (
    /** @param {Translation} translation */
    (t) => {
      const { sourceLanguage: n, targetLanguage: o, sourceTitle: s, sourceSectionTitle: a } = t;
      ia(
        n,
        o,
        s,
        a,
        { draft: !0 }
      ), ra(e, n, o), e.dispatch("suggestions/initializeSuggestions");
    }
  );
}, $v = (e) => (t, n) => K(void 0, null, function* () {
  const { sourceLanguage: o, targetLanguage: s, currentSectionSuggestion: a } = fe(e);
  t === n && (t = s.value, n = o.value);
  const i = e.getters["application/getCurrentLanguageTitleGroup"], r = i.getTitleForLanguage(t);
  ia(
    t,
    n,
    r,
    null
  ), ra(e, t, n);
  let l = new zt({
    sourceLanguage: o.value,
    targetLanguage: s.value,
    sourceTitle: r,
    missing: {}
  });
  i.hasLanguage(s.value) && (l = yield e.dispatch(
    "suggestions/loadSectionSuggestion",
    l
  )), e.dispatch("application/initializeSectionTranslation", l);
});
function Uv(e) {
  return e.$el = $(e), e;
}
function Rv(e, t, n, o) {
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
function Vv() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function zv(e, t) {
  return K(this, null, function* () {
    yield ji(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Uv(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
function jv(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const Hv = {
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
    const n = Z(null);
    let o = null;
    const s = y(() => o.getHtml()), a = () => {
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
    return lt(() => K(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = jv;
      const c = yield zv(l, n.value);
      t.emit("ready"), n.value.appendChild(c.$element[0]), o = Rv(
        c,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Vv, o.focus();
    })), { sxeditor: n };
  }
}, qv = ["lang", "dir"], Gv = /* @__PURE__ */ C("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ C("div", { class: "toolbar" })
], -1), Kv = ["lang", "dir"];
function Wv(e, t, n, o, s, a) {
  return v(), T("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    Gv,
    C("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, Kv)
  ], 8, qv);
}
const Xv = /* @__PURE__ */ V(Hv, [["render", Wv]]);
function ji() {
  return mw.loader.using("mw.cx3.ve");
}
const qu = "cx-translation-session-position-", Gu = () => qu + mw.user.sessionId(), Ku = () => {
  const e = Gu();
  let t = mw.storage.get(e);
  return t === null && (t = 0), parseInt(t);
}, Yv = function() {
  Object.keys(localStorage).filter((n) => n.startsWith(qu)).forEach((n) => localStorage.removeItem(n));
  const e = Gu(), t = Ku();
  mw.storage.set(e, t + 1);
};
let ii = null;
function Jv(e) {
  if (ii)
    return Promise.resolve(ii);
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
function Zv(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Qv(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), r = Ku(), l = {
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
  let u;
  return a ? u = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : u = Jv(i).then((c) => {
    ii = c, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: Zv(c)
      })
    );
  }), u.then(() => {
    Yv();
  });
}
const Wu = Symbol("event-logging-context"), qt = function() {
  const e = We(Wu);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, ey = () => ({
  install: (e) => {
    e.provide(Wu, Qv);
  }
}), ty = (e, t, n, o) => K(void 0, null, function* () {
  var r, l, u;
  const s = ((r = t.user) == null ? void 0 : r.content) || ((l = t.mt) == null ? void 0 : l.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, i = yield bu(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), ny = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt) {
      const r = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(r, n.mt.innerHTML), o.mtProviderUsed = r;
    }
  });
}, oy = (e, t, n, o) => K(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return ty(e, t, n, o);
  ny(e, t);
}), sy = (e, t, n) => {
  const o = [];
  for (const s of e.sections || [])
    if (n.filter(
      (i) => i.pageSectionId === parseInt(s.id)
    ).length)
      for (const i of s.subSections) {
        const r = n.find(
          (u) => u.subSectionId === i.id
        );
        if (!r)
          continue;
        const l = oy(
          i,
          r,
          (t == null ? void 0 : t.title) || e.title,
          t.language
        );
        o.push(l);
      }
  return Promise.all(o);
}, ay = { restoreCorporaDraft: sy }, rs = () => {
  const e = qt(), t = le(), n = mt(), {
    currentSourcePage: o,
    currentTargetPage: s,
    sourceLanguage: a,
    targetLanguage: i
  } = fe(t), r = Iv(), l = (u) => K(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: c,
      targetLanguage: d,
      sourceTitle: g,
      pageRevision: f
    } = u;
    (a.value !== c || i.value !== d) && r(u), t.dispatch("application/restoreSectionTranslation", u), e({
      event_type: "dashboard_translation_continue",
      translation_id: u.sectionTranslationId,
      translation_source_language: a.value,
      translation_source_title: g,
      translation_source_section: u.sourceSectionTitle,
      translation_target_language: i.value,
      translation_target_title: u.targetTitle,
      translation_target_section: u.targetSectionTitle
    }), yield t.dispatch("mediawiki/fetchPageContent", {
      sourceLanguage: a.value,
      targetLanguage: i.value,
      sourceTitle: g,
      revision: f
    }), yield ji(), yield t.dispatch("mediawiki/resolvePageContentReferences", {
      sourceLanguage: a.value,
      sourceTitle: g
    }), u.restored || (yield Vt.fetchTranslationUnits(u.translationId).then(
      (x) => ay.restoreCorporaDraft(
        o.value,
        s.value,
        x
      )
    ).then(() => u.restored = !0));
    let m, S;
    u.isLeadSectionTranslation ? (m = o.value.leadSection, m.originalTitle = u.sourceTitle, S = u.targetTitle) : (m = o.value.getSectionByTitle(
      u.sourceSectionTitle
    ), S = u.targetSectionTitle), t.commit("application/setCurrentSourceSection", m), t.commit(
      "application/setCurrentSourceSectionTitleTranslation",
      S
    ), t.commit("application/decreaseTranslationDataLoadingCounter");
  });
  return (u) => K(void 0, null, function* () {
    l(u), n.push({ name: "sx-sentence-selector", query: { force: !0 } });
  });
}, iy = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), r = new Date(Date.UTC(t, n, o, s, a, i)), u = (/* @__PURE__ */ new Date()).getTime() - r.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, ry = (e) => {
  const t = iy(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
var ly = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Xu = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(ly, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(d) {
        this.locale = d;
      }
      convertPlural(d, g) {
        const f = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let S = 0; S < g.length; S++) {
          const x = g[S];
          if (f.test(x)) {
            if (parseInt(x.slice(0, x.indexOf("=")), 10) === d)
              return x.slice(x.indexOf("=") + 1);
            g[S] = void 0;
          }
        }
        g = g.filter((S) => !!S);
        let m = this.getPluralForm(d, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(d, g) {
        const f = new Intl.PluralRules(g), m = f.resolvedOptions().pluralCategories, S = f.select(d);
        return ["zero", "one", "two", "few", "many", "other"].filter((x) => m.includes(x)).indexOf(S);
      }
      convertNumber(d, g = !1) {
        let f = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(d, 10) === d || !f)
            return d;
          const S = [];
          for (const k in f)
            S[f[k]] = k;
          f = S;
          const x = String(d);
          for (let k = 0; k < x.length; k++)
            m += f[x[k]] || x[k];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let S;
          const x = [...o[this.locale] || [], "en"];
          return S = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : x, m = new Intl.NumberFormat(S).format(d), m === "NaN" && (m = d), m;
        }
      }
      convertGrammar(d, g) {
        return d;
      }
      gender(d, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return d === "male" ? g[0] : d === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
      }
      digitTransformTable(d) {
        return !!n[d] && n[d].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(c, d) {
        switch (d) {
          case "instrumental":
            c = "s " + c;
            break;
          case "lokativ":
            c = "o " + c;
        }
        return c;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(c, d) {
        switch (d) {
          case "instrumental":
            c = "z " + c;
            break;
          case "lokatiw":
            c = "wo " + c;
        }
        return c;
      }
    }, fi: class extends s {
      convertGrammar(c, d) {
        let g = c.match(/[aou][^äöy]*$/i);
        const f = c;
        switch (c.match(/wiki$/i) && (g = !1), c.match(/[bcdfghjklmnpqrstvwxz]$/i) && (c += "i"), d) {
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
      convertGrammar(c, d) {
        if (d === "ainmlae")
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
      convertGrammar(c, d) {
        switch (d) {
          case "prefixed":
          case "תחילית":
            c.slice(0, 1) === "ו" && c.slice(0, 2) !== "וו" && (c = "ו" + c), c.slice(0, 1) === "ה" && (c = c.slice(1)), (c.slice(0, 1) < "א" || c.slice(0, 1) > "ת") && (c = "־" + c);
        }
        return c;
      }
    }, hsb: class extends s {
      convertGrammar(c, d) {
        switch (d) {
          case "instrumental":
            c = "z " + c;
            break;
          case "lokatiw":
            c = "wo " + c;
        }
        return c;
      }
    }, hu: class extends s {
      convertGrammar(c, d) {
        switch (d) {
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
      convertGrammar(c, d) {
        return d === "genitive" && (c.slice(-1) === "ա" ? c = c.slice(0, -1) + "այի" : c.slice(-1) === "ո" ? c = c.slice(0, -1) + "ոյի" : c.slice(-4) === "գիրք" ? c = c.slice(0, -4) + "գրքի" : c += "ի"), c;
      }
    }, la: class extends s {
      convertGrammar(c, d) {
        switch (d) {
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
      convertGrammar(c, d) {
        let g, f, m, S;
        switch (g = "мæ", f = "", m = "", S = "", c.match(/тæ$/i) ? (c = c.slice(0, -1), g = "æм") : c.match(/[аæеёиоыэюя]$/i) ? f = "й" : c.match(/у$/i) ? c.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (f = "й") : c.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), d) {
          case "genitive":
            S = m + f + "ы";
            break;
          case "dative":
            S = m + f + "æн";
            break;
          case "allative":
            S = m + g;
            break;
          case "ablative":
            S = f === "й" ? m + f + "æ" : m + f + "æй";
            break;
          case "superessive":
            S = m + f + "ыл";
            break;
          case "equative":
            S = m + f + "ау";
            break;
          case "comitative":
            S = m + "имæ";
        }
        return c + S;
      }
    }, ru: class extends s {
      convertGrammar(c, d) {
        return d === "genitive" && (c.slice(-1) === "ь" ? c = c.slice(0, -1) + "я" : c.slice(-2) === "ия" ? c = c.slice(0, -2) + "ии" : c.slice(-2) === "ка" ? c = c.slice(0, -2) + "ки" : c.slice(-2) === "ти" ? c = c.slice(0, -2) + "тей" : c.slice(-2) === "ды" ? c = c.slice(0, -2) + "дов" : c.slice(-3) === "ник" && (c = c.slice(0, -3) + "ника")), c;
      }
    }, sl: class extends s {
      convertGrammar(c, d) {
        switch (d) {
          case "mestnik":
            c = "o " + c;
            break;
          case "orodnik":
            c = "z " + c;
        }
        return c;
      }
    }, uk: class extends s {
      convertGrammar(c, d) {
        switch (d) {
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
      constructor(d) {
        this.locale = d, this.language = new (a[d] || a.default)(d);
      }
      emit(d, g) {
        let f, m, S;
        switch (typeof d) {
          case "string":
          case "number":
            f = d;
            break;
          case "object":
            if (m = d.slice(1).map((x) => this.emit(x, g)), S = d[0].toLowerCase(), typeof this[S] != "function")
              throw new Error('unknown operation "' + S + '"');
            f = this[S](m, g);
            break;
          case "undefined":
            f = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof d);
        }
        return f;
      }
      concat(d) {
        let g = "";
        return d.forEach((f) => {
          g += f;
        }), g;
      }
      replace(d, g) {
        const f = parseInt(d[0], 10);
        return f < g.length ? g[f] : "$" + (f + 1);
      }
      plural(d) {
        const g = parseFloat(this.language.convertNumber(d[0], 10)), f = d.slice(1);
        return f.length ? this.language.convertPlural(g, f) : "";
      }
      gender(d) {
        const g = d[0], f = d.slice(1);
        return this.language.gender(g, f);
      }
      grammar(d) {
        const g = d[0], f = d[1];
        return f && g && this.language.convertGrammar(f, g);
      }
      wikilink(d) {
        let g, f = d[0];
        f.charAt(0) === ":" && (f = f.slice(1));
        const m = `./${f}`;
        return g = d.length === 1 ? f : d[1], `<a href="${m}" title="${f}">${g}</a>`;
      }
      extlink(d) {
        if (d.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${d[0]}">${d[1]}</a>`;
      }
      bidi(d) {
        const g = function(f) {
          const m = f.match(i);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(d[0]);
        return g === "ltr" ? "‪" + d[0] + "‬" : g === "rtl" ? "‫" + d[0] + "‬" : d[0];
      }
      formatnum(d) {
        const g = !!d[1] && d[1] === "R", f = d[0];
        return typeof f == "string" || typeof f == "number" ? this.language.convertNumber(f, g) : f;
      }
      htmlattributes(d) {
        const g = {};
        for (let f = 0, m = d.length; f < m; f += 2)
          g[d[f]] = d[f + 1];
        return g;
      }
      htmlelement(d) {
        const g = d.shift(), f = d.shift();
        let m = d, S = "";
        for (const x in f)
          S += ` ${x}="${f[x]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${S}>${m.join("")}</${g}>`;
      }
    }
    class l {
      constructor(d, { wikilinks: g = !1 } = {}) {
        this.locale = d, this.wikilinks = g, this.emitter = new r(this.locale);
      }
      parse(d, g) {
        if (d.includes("{{") || d.includes("<") || this.wikilinks && d.includes("[")) {
          const f = function(m, { wikilinks: S = !1 } = {}) {
            let x = 0;
            function k(L) {
              return () => {
                for (let ee = 0; ee < L.length; ee++) {
                  const Ve = L[ee]();
                  if (Ve !== null)
                    return Ve;
                }
                return null;
              };
            }
            function D(L) {
              const ee = x, Ve = [];
              for (let at = 0; at < L.length; at++) {
                const Ct = L[at]();
                if (Ct === null)
                  return x = ee, null;
                Ve.push(Ct);
              }
              return Ve;
            }
            function U(L, ee) {
              return () => {
                const Ve = x, at = [];
                let Ct = ee();
                for (; Ct !== null; )
                  at.push(Ct), Ct = ee();
                return at.length < L ? (x = Ve, null) : at;
              };
            }
            function M(L) {
              const ee = L.length;
              return () => {
                let Ve = null;
                return m.slice(x, x + ee) === L && (Ve = L, x += ee), Ve;
              };
            }
            function X(L) {
              return () => {
                const ee = m.slice(x).match(L);
                return ee === null ? null : (x += ee[0].length, ee[0]);
              };
            }
            const Se = X(/^\s+/), oe = M("|"), j = M(":"), pe = M("\\"), Ae = X(/^./), xe = M("$"), W = X(/^\d+/), Ne = M('"'), Ge = M("'"), Le = X(S ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Be = X(S ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), ue = k([ge, X(S ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function ge() {
              const L = D([pe, Ae]);
              return L === null ? null : L[1];
            }
            const st = k([ge, Be]), sn = k([ge, Le]);
            function ht() {
              const L = D([xe, W]);
              return L === null ? null : ["REPLACE", parseInt(L[1], 10) - 1];
            }
            const ct = (ut = X(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Gt = function(L) {
              return L.toString();
            }, () => {
              const L = ut();
              return L === null ? null : Gt(L);
            });
            var ut, Gt;
            function A() {
              const L = D([oe, U(0, ye)]);
              if (L === null)
                return null;
              const ee = L[1];
              return ee.length > 1 ? ["CONCAT"].concat(ee) : ee[0];
            }
            function Y() {
              const L = D([ct, j, ht]);
              return L === null ? null : [L[0], L[2]];
            }
            function q() {
              const L = D([ct, j, ye]);
              return L === null ? null : [L[0], L[2]];
            }
            function Q() {
              const L = D([ct, j]);
              return L === null ? null : [L[0], ""];
            }
            const Te = k([function() {
              const L = D([k([Y, q, Q]), U(0, A)]);
              return L === null ? null : L[0].concat(L[1]);
            }, function() {
              const L = D([ct, U(0, A)]);
              return L === null ? null : [L[0]].concat(L[1]);
            }]), $e = M("{{"), me = M("}}"), de = M("[["), h = M("]]"), w = M("["), E = M("]");
            function N() {
              const L = D([$e, Te, me]);
              return L === null ? null : L[1];
            }
            const P = k([function() {
              const L = D([U(1, ye), oe, U(1, re)]);
              return L === null ? null : [["CONCAT"].concat(L[0]), ["CONCAT"].concat(L[2])];
            }, function() {
              const L = D([U(1, ye)]);
              return L === null ? null : [["CONCAT"].concat(L[0])];
            }]);
            function R() {
              let L = null;
              const ee = D([de, P, h]);
              if (ee !== null) {
                const Ve = ee[1];
                L = ["WIKILINK"].concat(Ve);
              }
              return L;
            }
            function G() {
              let L = null;
              const ee = D([w, U(1, se), Se, U(1, re), E]);
              return ee !== null && (L = ["EXTLINK", ee[1].length === 1 ? ee[1][0] : ["CONCAT"].concat(ee[1]), ["CONCAT"].concat(ee[3])]), L;
            }
            const B = X(/^[A-Za-z]+/);
            function z() {
              const L = X(/^[^"]*/), ee = D([Ne, L, Ne]);
              return ee === null ? null : ee[1];
            }
            function O() {
              const L = X(/^[^']*/), ee = D([Ge, L, Ge]);
              return ee === null ? null : ee[1];
            }
            function te() {
              const L = X(/^\s*=\s*/), ee = D([Se, B, L, k([z, O])]);
              return ee === null ? null : [ee[1], ee[3]];
            }
            function J() {
              const L = U(0, te)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], L);
            }
            const se = k([N, ht, R, G, function() {
              const L = U(1, ue)();
              return L === null ? null : L.join("");
            }]), re = k([N, ht, R, G, function() {
              let L = null;
              const ee = x, Ve = M("<"), at = X(/^\/?/), Ct = X(/^\s*>/), Kt = D([Ve, B, J, at, Ct]);
              if (Kt === null)
                return null;
              const wo = x, Qe = Kt[1], _t = U(0, re)(), ls = x, Wi = D([M("</"), B, Ct]);
              if (Wi === null)
                return ["CONCAT", m.slice(ee, wo)].concat(_t);
              const cd = x, ud = Wi[1], Xi = Kt[2];
              if (function(Pn, cs, ca, ua = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Pn = Pn.toLowerCase()) !== (cs = cs.toLowerCase()) || ua.allowedHtmlElements.indexOf(Pn) === -1)
                  return !1;
                const dd = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let us = 0, gd = ca.length; us < gd; us += 2) {
                  const da = ca[us];
                  if (ua.allowedHtmlCommonAttributes.indexOf(da) === -1 && (ua.allowedHtmlAttributesByElement[Pn] || []).indexOf(da) === -1 || da === "style" && ca[us + 1].search(dd) !== -1)
                    return !1;
                }
                return !0;
              }(Qe, ud, Xi.slice(1)))
                L = ["HTMLELEMENT", Qe, Xi].concat(_t);
              else {
                const Pn = (cs) => cs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                L = ["CONCAT", Pn(m.slice(ee, wo))].concat(_t, Pn(m.slice(ls, cd)));
              }
              return L;
            }, function() {
              const L = U(1, sn)();
              return L === null ? null : L.join("");
            }]), ye = k([N, ht, function() {
              const L = U(1, st)();
              return L === null ? null : L.join("");
            }]), Ie = function() {
              const L = U(0, re)();
              return L === null ? null : ["CONCAT"].concat(L);
            }();
            if (Ie === null || x !== m.length)
              throw new Error("Parse error at position " + x.toString() + " in input: " + m);
            return Ie;
          }(d, { wikilinks: this.wikilinks });
          return this.emitter.emit(f, g);
        }
        return this.simpleParse(d, g);
      }
      simpleParse(d, g) {
        return d.replace(/\$(\d+)/g, (f, m) => {
          const S = parseInt(m, 10) - 1;
          return g[S] !== void 0 ? g[S] : "$" + m;
        });
      }
    }
    class u {
      constructor(d) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(d, g) {
        if (typeof d != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const f in d)
            if (f.indexOf("@") !== 0) {
              if (typeof d[f] == "object")
                return this.load(d);
              if (typeof d[f] != "string")
                throw new Error(`Invalid message for message ${f} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), d)) : this.sourceMap.set(g, d);
        } else
          for (g in d)
            this.load(d[g], g);
      }
      getMessage(d, g) {
        const f = this.sourceMap.get(g);
        return f ? f[d] : null;
      }
      hasLocale(d) {
        return this.sourceMap.has(d);
      }
    }
    return class {
      constructor(c, { finalFallback: d = "en", messages: g, wikilinks: f = !1 } = {}) {
        this.locale = c, this.parser = new l(this.locale, { wikilinks: f }), this.messageStore = new u(), g && this.load(g, this.locale), this.finalFallback = d, this.wikilinks = f;
      }
      load(c, d) {
        return this.messageStore.load(c, d || this.locale);
      }
      i18n(c, ...d) {
        return this.parser.parse(this.getMessage(c), d);
      }
      setLocale(c) {
        this.locale = c, this.parser = new l(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(c) {
        let d = this.locale, g = 0;
        const f = this.getFallbackLocales(this.locale);
        for (; d; ) {
          const m = d.split("-");
          let S = m.length;
          do {
            const x = m.slice(0, S).join("-"), k = this.messageStore.getMessage(c, x);
            if (typeof k == "string")
              return k;
            S--;
          } while (S);
          d = f[g], g++;
        }
        return c;
      }
      registerParserPlugin(c, d) {
        r.prototype[c] = d;
      }
    };
  });
})(Xu);
var cy = Xu.exports;
const dl = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Yu = Symbol("banana-context");
function wt() {
  const e = We(Yu);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function uy(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Zn(new cy(e.locale, e));
  return {
    install: (n) => {
      n.provide(Yu, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = dl(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = dl(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const dy = {
  name: "CxTranslationWork",
  components: { MwRow: Ce, MwProgressBar: Gc, MwCol: Pe, MwThumbnail: Ni, MwIcon: qe },
  props: {
    translation: {
      type: na,
      required: !0
    }
  },
  emits: ["click", "delete-translation"],
  setup(e, { emit: t }) {
    const n = le(), o = (m, S) => {
      const x = n.getters["mediawiki/getPage"](m, S);
      return x == null ? void 0 : x.thumbnail;
    }, s = rs(), a = y(
      () => e.translation.status === "published" ? r : l
    ), i = (m) => {
      t("click", m), s(e.translation);
    }, r = () => {
    }, l = () => t("delete-translation"), c = We("colors").base80, d = y(
      () => {
        var m;
        return ((m = e.translation.progress) == null ? void 0 : m.any) * 100 || 0;
      }
    ), g = wt();
    return {
      timeagoMessage: y(() => {
        const m = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, S = ry(e.translation.startTimestamp);
        return g.i18n(
          m[S.postfix],
          S.value
        );
      }),
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      getImage: o,
      handleActionIconClick: a,
      mwIconEdit: tn,
      mwIconTrash: Bc,
      mwIconArrowForward: An,
      mwIconArrowNext: Di,
      onClick: i,
      progressBarBackgroundColor: c,
      translationProgress: d
    };
  }
}, gy = { class: "col shrink pe-4" }, fy = { class: "col" }, py = { class: "cx-translation__details column justify-between ma-0" }, my = { class: "row ma-0" }, hy = { class: "col grow" }, _y = ["lang", "textContent"], vy = ["lang", "textContent"], yy = { class: "col shrink ps-2" }, by = ["dir", "textContent"], Sy = ["dir", "textContent"], wy = ["textContent"];
function Cy(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-icon"), l = _("mw-progress-bar"), u = _("mw-col"), c = _("mw-row");
  return n.translation ? (v(), T("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[0] || (t[0] = (...d) => o.onClick && o.onClick(...d))
  }, [
    C("div", gy, [
      p(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    C("div", fy, [
      C("div", py, [
        C("div", my, [
          C("div", hy, [
            C("h5", {
              class: he(["cx-translation__source-page-title", {
                "cx-translation__primary-title": n.translation.isLeadSectionTranslation
              }]),
              lang: n.translation.sourceLanguage,
              textContent: ae(n.translation.sourceTitle)
            }, null, 10, _y),
            n.translation.isLeadSectionTranslation ? ne("", !0) : (v(), T("h6", {
              key: 0,
              class: "cx-translation__source-section-title cx-translation__primary-title",
              lang: n.translation.sourceLanguage,
              textContent: ae(n.translation.sourceSectionTitle)
            }, null, 8, vy))
          ]),
          C("div", yy, [
            p(r, {
              icon: n.translation.status === "published" ? o.mwIconEdit : o.mwIconTrash,
              onClick: bt(o.handleActionIconClick, ["stop"])
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        n.translation.progress ? (v(), F(c, {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: b(() => [
            p(u, null, {
              default: b(() => [
                p(l, {
                  class: "cx-translation__progress-bar",
                  value: o.translationProgress,
                  height: "4px",
                  width: "64px",
                  background: o.progressBarBackgroundColor
                }, null, 8, ["value", "background"])
              ], void 0, !0),
              _: 1
            })
          ], void 0),
          _: 1
        })) : ne("", !0),
        p(c, { class: "cx-translation__footer ma-0" }, {
          default: b(() => [
            p(u, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: b(() => [
                C("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: ae(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, by),
                p(r, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                C("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: ae(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, Sy)
              ], void 0, !0),
              _: 1
            }),
            p(u, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: b(() => [
                C("span", {
                  textContent: ae(o.timeagoMessage)
                }, null, 8, wy)
              ], void 0, !0),
              _: 1
            })
          ], void 0),
          _: 1
        })
      ])
    ])
  ])) : ne("", !0);
}
const xy = /* @__PURE__ */ V(dy, [["render", Cy]]), Ey = () => {
  const e = le(), { commit: t } = le(), { sourceLanguage: n, targetLanguage: o } = fe(e), s = qt();
  return (a) => K(void 0, null, function* () {
    a.sectionTranslationId ? (yield Vt.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield Vt.deleteCXTranslation(
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
const ky = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: we,
    MwDialog: Ht
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: na,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Ey();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Ay = { class: "pa-4" }, Ty = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Dy(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-dialog"), l = be("i18n");
  return v(), F(r, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    header: !1,
    "min-height": "unset"
  }, {
    footer: b(() => [
      C("div", Ty, [
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
    default: b(() => [
      C("div", Ay, [
        H(C("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-opacity", "overlay-color"]);
}
const Ly = /* @__PURE__ */ V(ky, [["render", Dy]]);
function Py(e, t, n) {
  return K(this, null, function* () {
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
    return s.length ? s : n ? (yield Ny(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function gl(e, t, n) {
  return K(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(Me.sortByAutonym) : (yield Py(e, t, n)).sort(Me.sortByAutonym);
  });
}
function Ny(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Fy() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function My(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Oy(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
function By(e, t) {
  const n = y(() => {
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
function Iy(e, t, n) {
  const o = Z(""), s = Z(-1), a = Z(null), i = () => {
    s.value++, s.value >= r.value.length && (s.value = 0);
  }, r = y(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return He(e, () => {
    s.value = -1;
  }), He(s, () => K(this, null, function* () {
    var u;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = r.value[s.value], (u = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const $y = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Pi
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
      default: Fy
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = Z(null), o = Z(""), s = Z([]), a = y(
      () => My(s.value)
    ), i = y(
      () => Oy(s.value)
    ), r = (k) => t.emit("select", k), l = () => t.emit("close"), { autocompletion: u, onTabSelect: c } = By(
      o,
      s
    ), { next: d, prev: g, langSelectorContainer: f, selectedLanguage: m } = Iy(o, s, e.suggestions), S = () => {
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
    return He(o, $i(() => K(this, null, function* () {
      s.value = yield gl(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), lt(() => K(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield gl(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: u,
      close: l,
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      langSelectorContainer: f,
      mwIconClose: Ft,
      mwIconSearch: Uc,
      next: d,
      onEnter: S,
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
}, Uy = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, Ry = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Vy = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, zy = { class: "results px-3 pt-4" }, jy = { class: "results-header ps-8 pb-2" }, Hy = { class: "results-languages--suggestions pa-0 ma-0" }, qy = ["lang", "dir", "aria-selected", "onClick", "textContent"], Gy = { class: "results px-3 pt-4" }, Ky = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Wy = ["lang", "dir", "aria-selected", "onClick", "textContent"], Xy = ["aria-selected"], Yy = { class: "no-results px-3 py-4" }, Jy = { class: "ps-8" };
function Zy(e, t, n, o, s, a) {
  const i = _("mw-input"), r = be("i18n");
  return v(), T("div", Uy, [
    Ye(e.$slots, "search", {}, () => [
      C("div", Ry, [
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
            io(bt(o.onEnter, ["prevent"]), ["enter"]),
            io(bt(o.next, ["stop", "prevent"]), ["down"]),
            io(bt(o.prev, ["stop", "prevent"]), ["up"]),
            io(bt(o.close, ["prevent"]), ["esc"]),
            io(bt(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    C("section", Vy, [
      n.suggestions.length && !o.searchQuery ? Ye(e.$slots, "suggestions", { key: 0 }, () => [
        C("section", zy, [
          H(C("p", jy, null, 512), [
            [r, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          C("ul", Hy, [
            (v(!0), T(ke, null, et(n.suggestions, (l) => (v(), T("li", {
              key: l,
              class: he(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (u) => o.select(l),
              textContent: ae(o.getAutonym(l))
            }, null, 10, qy))), 128))
          ])
        ])
      ]) : ne("", !0),
      o.searchResultsByScript.length ? Ye(e.$slots, "search", { key: 1 }, () => [
        C("section", Gy, [
          n.suggestions.length && !o.searchQuery ? H((v(), T("p", Ky, null, 512)), [
            [r, void 0, "cx-sx-language-selector-all-languages"]
          ]) : ne("", !0),
          (v(!0), T(ke, null, et(o.searchResultsByScript, (l, u) => (v(), T("ul", {
            key: u,
            class: he(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (v(!0), T(ke, null, et(l, (c) => (v(), T("li", {
              key: c,
              class: he(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
              lang: c,
              dir: o.getDir(c),
              role: "option",
              "aria-selected": c === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (d) => o.select(c),
              textContent: ae(o.getAutonym(c))
            }, null, 10, Wy))), 128)),
            n.allOptionEnabled && !o.searchQuery ? H((v(), T("li", {
              key: 0,
              class: he(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (c) => o.select("all"))
            }, null, 10, Xy)), [
              [r, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : ne("", !0)
          ], 2))), 128))
        ])
      ]) : Ye(e.$slots, "noresults", { key: 2 }, () => [
        C("section", Yy, [
          H(C("h3", Jy, null, 512), [
            [r, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Ju = /* @__PURE__ */ V($y, [["render", Zy]]);
const Qy = {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector: Ju,
    MwDialog: Ht,
    MwIcon: qe,
    MwButton: we
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
    const n = We("breakpoints"), o = y(() => n.value.mobile), s = Z(!1), a = Z(!1), i = () => s.value = !0, r = () => a.value = !0, l = () => s.value = !1, u = () => a.value = !1, c = (m) => {
      s.value = !1, t("update:selectedSourceLanguage", m);
    }, d = (m) => {
      a.value = !1, t("update:selectedTargetLanguage", m);
    }, g = y(
      () => e.selectedSourceLanguage === "all"
    ), f = y(
      () => e.selectedTargetLanguage === "all"
    );
    return {
      fullscreen: o,
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      mwIconArrowNext: Di,
      mwIconExpand: Ic,
      onSourceLanguageDialogClose: l,
      onSourceLanguageSelected: c,
      onTargetLanguageDialogClose: u,
      onTargetLanguageSelected: d,
      openSourceLanguageDialog: i,
      openTargetLanguageDialog: r,
      sourceLanguageSelectOn: s,
      targetLanguageSelectOn: a,
      allLanguagesSelectedAsSource: g,
      allLanguagesSelectedAsTarget: f
    };
  }
}, eb = { class: "row sx-translation-list-language-selector ma-0 justify-center items-center" }, tb = { class: "col-5 justify-end" }, nb = {
  key: 0,
  class: "mw-ui-autonym"
}, ob = ["lang", "dir", "textContent"], sb = { class: "sx-translation-list-language-selector__arrow col-2 justify-center" }, ab = { class: "col-5 justify-start" }, ib = {
  key: 0,
  class: "mw-ui-autonym"
}, rb = ["lang", "dir", "textContent"];
function lb(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-language-selector"), l = _("mw-dialog"), u = _("mw-icon"), c = be("i18n");
  return v(), T("div", eb, [
    C("div", tb, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        onClick: bt(o.openSourceLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsSource ? H((v(), T("span", nb, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (v(), T("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedSourceLanguage,
            dir: o.getDir(n.selectedSourceLanguage),
            textContent: ae(o.getAutonym(n.selectedSourceLanguage))
          }, null, 8, ob))
        ], void 0),
        _: 1
      }, 8, ["indicator", "onClick"]),
      p(l, {
        value: o.sourceLanguageSelectOn,
        "onUpdate:value": t[0] || (t[0] = (d) => o.sourceLanguageSelectOn = d),
        animation: "slide-up",
        title: e.$i18n("sx-translation-list-language-selector-dialog-title"),
        fullscreen: o.fullscreen,
        header: o.fullscreen,
        "overlay-opacity": 0,
        onClose: o.onSourceLanguageDialogClose
      }, {
        default: b(() => [
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
    C("div", sb, [
      p(u, { icon: o.mwIconArrowNext }, null, 8, ["icon"])
    ]),
    C("div", ab, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        disabled: n.targetLanguages.length < 2,
        onClick: bt(o.openTargetLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsTarget ? H((v(), T("span", ib, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (v(), T("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedTargetLanguage,
            dir: o.getDir(n.selectedTargetLanguage),
            textContent: ae(o.getAutonym(n.selectedTargetLanguage))
          }, null, 8, rb))
        ], void 0),
        _: 1
      }, 8, ["indicator", "disabled", "onClick"]),
      p(l, {
        value: o.targetLanguageSelectOn,
        "onUpdate:value": t[1] || (t[1] = (d) => o.targetLanguageSelectOn = d),
        animation: "slide-up",
        fullscreen: o.fullscreen,
        header: o.fullscreen,
        "overlay-opacity": 0,
        title: e.$i18n("sx-translation-list-language-selector-dialog-title"),
        onClose: o.onTargetLanguageDialogClose
      }, {
        default: b(() => [
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
const Hi = /* @__PURE__ */ V(Qy, [["render", lb]]), cb = {
  name: "CxTranslationList",
  components: {
    CxTranslationWork: xy,
    MwCard: jt,
    MwSpinner: Tn,
    SxConfirmTranslationDeletionDialog: Ly,
    SxTranslationListLanguageSelector: Hi
  },
  props: {
    active: {
      type: Boolean,
      default: !1
    },
    translationStatus: {
      type: String,
      required: !0,
      validator: (e) => ["published", "draft"].indexOf(e) !== -1
    }
  },
  setup(e) {
    const t = Z("all"), n = Z("all"), o = le(), s = y(
      () => o.state.translator.translationsLoaded[e.translationStatus]
    ), { enabledTargetLanguages: a } = is(), i = Z(!1), r = Z(null), l = y(
      () => e.translationStatus === "draft"
    ), u = y(
      () => o.getters["translator/getTranslationsByStatus"](
        e.translationStatus
      )
    ), c = y(
      () => t.value === "all"
    ), d = y(
      () => n.value === "all"
    ), g = y(
      () => u.value.filter(
        (x) => (c.value || x.sourceLanguage === t.value) && (d.value || x.targetLanguage === n.value)
      ).sort((x, k) => x.lastUpdatedTimestamp < k.lastUpdatedTimestamp)
    ), f = y(() => {
      let x = u.value.map(
        (k) => k.targetLanguage
      );
      return a.value && (x = x.filter(
        (k) => a.value.includes(k)
      )), [...new Set(x)];
    }), m = y(() => {
      const x = u.value.map(
        (k) => k.sourceLanguage
      );
      return [...new Set(x)];
    });
    return {
      activeTranslations: g,
      availableSourceLanguages: m,
      availableTargetLanguages: f,
      askDeletionConfirmation: (x) => {
        r.value = x, i.value = !0;
      },
      deletionDialogOn: i,
      isDraftTranslationList: l,
      loaded: s,
      selectedSourceLanguage: t,
      selectedTargetLanguage: n,
      translationToDelete: r
    };
  }
}, ub = ["textContent"];
function db(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector"), r = _("mw-spinner"), l = _("cx-translation-work"), u = _("sx-confirm-translation-deletion-dialog"), c = _("mw-card");
  return H((v(), F(c, {
    class: he(`cx-translation-list--${n.translationStatus}`)
  }, {
    header: b(() => [
      C("h3", {
        class: "mw-ui-card__title pa-4 pt-5 mb-0",
        textContent: ae(e.$i18n(`cx-translation-label-${n.translationStatus}`))
      }, null, 8, ub)
    ]),
    default: b(() => [
      p(i, {
        "selected-source-language": o.selectedSourceLanguage,
        "onUpdate:selectedSourceLanguage": t[0] || (t[0] = (d) => o.selectedSourceLanguage = d),
        "selected-target-language": o.selectedTargetLanguage,
        "onUpdate:selectedTargetLanguage": t[1] || (t[1] = (d) => o.selectedTargetLanguage = d),
        "source-languages": o.availableSourceLanguages,
        "target-languages": o.availableTargetLanguages,
        "all-option-enabled": ""
      }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
      o.loaded ? ne("", !0) : (v(), F(r, { key: 0 })),
      (v(!0), T(ke, null, et(o.activeTranslations, (d) => (v(), F(l, {
        key: `${n.translationStatus}-${d.key}`,
        translation: d,
        onDeleteTranslation: (g) => o.askDeletionConfirmation(d)
      }, null, 8, ["translation", "onDeleteTranslation"]))), 128)),
      p(u, {
        modelValue: o.deletionDialogOn,
        "onUpdate:modelValue": t[2] || (t[2] = (d) => o.deletionDialogOn = d),
        translation: o.translationToDelete
      }, null, 8, ["modelValue", "translation"])
    ], void 0),
    _: 1
  }, 8, ["class"])), [
    [Ai, n.active]
  ]);
}
const gb = /* @__PURE__ */ V(cb, [["render", db]]);
const fb = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: Ni, MwIcon: qe, MwRow: Ce, MwCol: Pe },
  props: {
    suggestion: {
      type: [Bi, zt, qo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = le(), n = y(() => e.suggestion), o = y(
      () => n.value.sourceTitle || n.value.title
    ), s = y(
      () => t.getters["mediawiki/getPage"](
        n.value.sourceLanguage,
        o.value
      )
    ), a = y(
      () => {
        var m;
        return (m = n.value) == null ? void 0 : m.missingSectionsCount;
      }
    ), i = y(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.description;
    }), r = y(
      () => n.value instanceof zt
    ), l = y(
      () => n.value instanceof qo
    ), { sourceLanguageAutonym: u, targetLanguageAutonym: c } = fe(t), d = y(
      () => l.value ? Vc : Rc
    ), g = We("colors"), f = y(
      () => l.value ? g.primary : "currentColor"
    );
    return {
      bookmarkIcon: d,
      bookmarkIconColor: f,
      description: i,
      getDir: Me.getDir,
      isFavoriteSuggestion: l,
      isSectionSuggestion: r,
      missingSectionsCount: a,
      mwIconArrowNext: Di,
      mwIconClose: Ft,
      page: s,
      sourceLanguageAutonym: u,
      targetLanguageAutonym: c,
      title: o
    };
  }
}, pb = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, mb = { class: "col shrink pe-4" }, hb = { class: "col cx-suggestion__information-panel" }, _b = ["lang", "dir", "textContent"], vb = ["lang", "dir", "textContent"], yb = ["textContent"], bb = ["textContent"];
function Sb(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-row"), u = _("mw-icon"), c = be("i18n");
  return n.suggestion ? (v(), T("div", pb, [
    C("div", mb, [
      p(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    C("div", hb, [
      p(l, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: b(() => [
          p(r, {
            shrink: "",
            class: "cx-suggestion__information-panel__top pb-2"
          }, {
            default: b(() => [
              p(l, {
                class: "ma-0",
                align: "start",
                justify: "between"
              }, {
                default: b(() => [
                  p(r, {
                    grow: "",
                    class: "pe-2"
                  }, {
                    default: b(() => [
                      p(l, {
                        direction: "column",
                        class: "ma-0",
                        align: "start"
                      }, {
                        default: b(() => [
                          p(r, {
                            shrink: "",
                            class: "mb-2"
                          }, {
                            default: b(() => [
                              C("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: ae(o.title)
                              }, null, 8, _b)
                            ], void 0, !0),
                            _: 1
                          }),
                          p(r, { shrink: "" }, {
                            default: b(() => [
                              C("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: ae(o.description)
                              }, null, 8, vb)
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
                    default: b(() => [
                      o.isFavoriteSuggestion ? ne("", !0) : (v(), F(u, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "mb-4",
                        onClick: t[0] || (t[0] = bt((d) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      p(u, {
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = bt((d) => e.$emit("bookmark"), ["stop"]))
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
          o.isSectionSuggestion ? (v(), F(r, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: b(() => [
              H(C("small", null, null, 512), [
                [c, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ], void 0, !0),
            _: 1
          })) : o.isFavoriteSuggestion ? (v(), F(r, {
            key: 1,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
            shrink: ""
          }, {
            default: b(() => [
              p(l, {
                justify: "between",
                class: "ma-0"
              }, {
                default: b(() => [
                  p(r, { grow: "" }, {
                    default: b(() => [
                      C("small", {
                        textContent: ae(o.sourceLanguageAutonym)
                      }, null, 8, yb),
                      p(u, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      C("small", {
                        textContent: ae(o.targetLanguageAutonym)
                      }, null, 8, bb)
                    ], void 0, !0),
                    _: 1
                  }),
                  o.missingSectionsCount ? (v(), F(r, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: b(() => [
                      H(C("small", null, null, 512), [
                        [c, [
                          o.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ], void 0, !0),
                    _: 1
                  })) : ne("", !0)
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })) : ne("", !0)
        ], void 0),
        _: 1
      })
    ])
  ])) : ne("", !0);
}
const Zu = /* @__PURE__ */ V(fb, [["render", Sb]]), wb = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = is(), n = y(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Cb = () => {
  const e = le(), { sourceLanguage: t, targetLanguage: n } = fe(e), o = qt(), s = y(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = y(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = y(
    () => !s.value && !a.value
  ), r = Z(0), l = Z(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, c = 4, d = y(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      r.value
    )
  ), g = y(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), f = () => {
    m(), S();
  }, m = () => {
    const M = d.value.length === u, X = (r.value + 1) % c, Se = M && e.getters["application/getSectionSuggestionsSliceByIndex"](X).length > 0;
    (!M || !Se) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), M && D();
  }, S = () => {
    const M = g.value.length === u, X = (l.value + 1) % c, Se = M && e.getters["application/getPageSuggestionsSliceByIndex"](X).length > 0;
    (!M || !Se) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), M && U();
  }, x = (M) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestion", M), m();
  }, k = (M) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", M), S();
  }, D = () => r.value = (r.value + 1) % c, U = () => l.value = (l.value + 1) % c;
  return {
    currentPageSuggestionsSlice: g,
    currentSectionSuggestionsSlice: d,
    discardPageSuggestion: k,
    discardSectionSuggestion: x,
    onSuggestionRefresh: f,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
}, Qu = (e) => K(void 0, null, function* () {
  return ho.dispatch("suggestions/removeFavoriteSuggestion", e);
});
const xb = {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector: Hi,
    CxTranslationSuggestion: Zu,
    MwCard: jt,
    MwButton: we,
    MwSpinner: Tn
  },
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = le(), { sourceLanguage: t, targetLanguage: n } = fe(e), { supportedLanguageCodes: o, availableTargetLanguages: s } = wb(), a = Hu(e), i = (j) => a(j, n.value), r = (j) => a(t.value, j), l = mt(), u = rs(), c = (j) => {
      const pe = e.getters["translator/getTranslation"](
        j.sourceTitle,
        ta.LEAD_SECTION_DUMMY_TITLE,
        j.sourceLanguage,
        j.targetLanguage
      );
      pe ? u(pe) : (e.dispatch("application/initializeSectionTranslation", j), l.push({
        name: "sx-translation-confirmer",
        query: {
          previousRoute: "dashboard",
          eventSource: "suggestion_no_seed"
        }
      }));
    }, {
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      onSuggestionRefresh: S,
      pageSuggestionsLoading: x,
      sectionSuggestionsLoading: k,
      showRefreshButton: D
    } = Cb(), U = Z(null), M = qt();
    return {
      availableTargetLanguages: s,
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      mwIconRefresh: $c,
      markFavoritePageSuggestion: (j) => K(this, null, function* () {
        return e.dispatch("suggestions/addPageSuggestionAsFavorite", j);
      }),
      markFavoriteSectionSuggestion: (j) => K(this, null, function* () {
        return e.dispatch("suggestions/addSectionSuggestionAsFavorite", j);
      }),
      unmarkFavoriteSectionSuggestion: Qu,
      pageSuggestionsLoading: x,
      pageSuggestionsList: U,
      refreshSuggestions: () => {
        M({
          event_type: "dashboard_refresh_suggestions",
          translation_source_language: t.value,
          translation_target_language: n.value
        }), S(), U.value.$el.scrollIntoView({ behavior: "smooth" });
      },
      sectionSuggestionsLoading: k,
      showRefreshButton: D,
      startTranslation: c,
      supportedLanguageCodes: o,
      updateSourceLanguage: i,
      updateTargetLanguage: r,
      sourceLanguage: t,
      targetLanguage: n
    };
  }
}, Eb = ["textContent"], kb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Ab = { class: "cx-translation-list__division-title ma-0 pa-4" }, Tb = { class: "cx-suggestion-list__refresh-button-container justify-center" };
function Db(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector"), r = _("mw-card"), l = _("cx-translation-suggestion"), u = _("mw-spinner"), c = _("mw-button"), d = be("i18n");
  return H((v(), T("div", null, [
    p(r, { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
      header: b(() => [
        C("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: ae(e.$i18n("cx-suggestionlist-title"))
        }, null, 8, Eb)
      ]),
      default: b(() => [
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
      default: b(() => [
        H(C("h5", kb, null, 512), [
          [d, void 0, "cx-suggestion-list-new-pages-division"]
        ]),
        (v(!0), T(ke, null, et(o.currentPageSuggestionsSlice, (g, f) => (v(), F(l, {
          key: `page-suggestion-${f}`,
          suggestion: g,
          onClose: (m) => o.discardPageSuggestion(g),
          onClick: (m) => o.startTranslation(g),
          onBookmark: (m) => o.markFavoritePageSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.pageSuggestionsLoading ? (v(), F(u, { key: 0 })) : ne("", !0)
      ], void 0),
      _: 1
    }, 512),
    p(r, { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
      default: b(() => [
        H(C("h5", Ab, null, 512), [
          [d, void 0, "cx-suggestionlist-expand-sections-title"]
        ]),
        (v(!0), T(ke, null, et(o.currentSectionSuggestionsSlice, (g, f) => (v(), F(l, {
          key: `section-suggestion-${f}`,
          class: "ma-0",
          suggestion: g,
          onClose: (m) => o.discardSectionSuggestion(g),
          onClick: (m) => o.startTranslation(g),
          onBookmark: (m) => o.markFavoriteSectionSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.sectionSuggestionsLoading ? (v(), F(u, { key: 0 })) : ne("", !0)
      ], void 0),
      _: 1
    }),
    C("div", Tb, [
      o.showRefreshButton ? (v(), F(c, {
        key: 0,
        class: "ma-0 pa-4",
        type: "text",
        label: e.$i18n("cx-suggestionlist-refresh"),
        icon: o.mwIconRefresh,
        onClick: o.refreshSuggestions
      }, null, 8, ["label", "icon", "onClick"])) : ne("", !0)
    ])
  ], 512)), [
    [Ai, n.active]
  ]);
}
const Lb = /* @__PURE__ */ V(xb, [["render", Db]]), Pb = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Zu,
    MwCard: jt
  },
  setup() {
    const e = mt(), t = le();
    return {
      favorites: y(() => t.state.suggestions.favorites || []),
      startFavoriteTranslation: (s) => K(this, null, function* () {
        yield t.dispatch(
          "application/startFavoriteSectionTranslation",
          s
        ), e.push({
          name: "sx-translation-confirmer",
          query: { previousRoute: "dashboard" }
        });
      }),
      unmarkFavoriteSectionSuggestion: Qu
    };
  }
}, Nb = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function Fb(e, t, n, o, s, a) {
  const i = _("cx-translation-suggestion"), r = _("mw-card"), l = be("i18n");
  return o.favorites.length ? (v(), F(r, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: b(() => [
      H(C("h3", Nb, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: b(() => [
      (v(!0), T(ke, null, et(o.favorites, (u, c) => (v(), F(i, {
        key: `favorite-${c}`,
        suggestion: u,
        onClick: (d) => o.startFavoriteTranslation(u),
        onBookmark: (d) => o.unmarkFavoriteSectionSuggestion(u)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ], void 0),
    _: 1
  })) : ne("", !0);
}
const Mb = /* @__PURE__ */ V(Pb, [["render", Fb]]);
const Ob = {
  name: "CxHelpPanel",
  components: { MwIcon: qe },
  setup() {
    const e = wt();
    return { listItems: [
      {
        icon: Sm,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: um,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: wm,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, Bb = { class: "cx-help-panel pa-4" }, Ib = { class: "cx-help-panel__item-list mt-6 ps-2" }, $b = ["href"], Ub = ["textContent"];
function Rb(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = be("i18n");
  return v(), T("div", Bb, [
    H(C("h5", null, null, 512), [
      [r, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    C("ul", Ib, [
      (v(!0), T(ke, null, et(o.listItems, (l, u) => (v(), T("li", {
        key: u,
        class: "mt-4"
      }, [
        C("a", {
          href: l.href,
          target: "_blank"
        }, [
          p(i, {
            icon: l.icon
          }, null, 8, ["icon"]),
          C("span", {
            textContent: ae(l.label)
          }, null, 8, Ub)
        ], 8, $b)
      ]))), 128))
    ])
  ]);
}
const Vb = /* @__PURE__ */ V(Ob, [["render", Rb]]);
const zb = {
  name: "CxStatsPanel",
  components: { MwCol: Pe, MwRow: Ce },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = y(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = y(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = Z(null);
    return He(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), r = Object.keys(e.stats || {}).sort(), l = r.reduce(
          (U, M) => Math.max(U, a[M].delta),
          0
        ), u = r.map((U) => a[U].delta), c = s.value.getBoundingClientRect().width, d = s.value.getBoundingClientRect().height;
        s.value.width = c, s.value.height = d;
        const g = 4, f = 6, m = 50, S = (m - g) / l;
        let x = g;
        const k = Math.floor(
          (c - g) / (f + g)
        ), D = u.slice(
          Math.max(u.length - k, 0)
        );
        D.forEach((U, M) => {
          M === D.length - 1 && (i.fillStyle = "#36c");
          const X = m - U * S;
          i.fillRect(x, X, f, U * S), x += f + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, jb = { class: "cx-stats-panel pa-4" }, Hb = ["textContent"], qb = { class: "cx-stats-panel__monthly-stats-label" }, Gb = ["textContent"], Kb = { class: "cx-stats-panel__total-stats-label" }, Wb = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function Xb(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-row"), l = be("i18n");
  return v(), T("div", jb, [
    H(C("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    p(r, null, {
      default: b(() => [
        p(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: b(() => [
            C("h3", {
              textContent: ae(o.thisMonthStats)
            }, null, 8, Hb),
            H(C("h5", qb, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, { class: "cx-stats-panel__total-stats" }, {
          default: b(() => [
            C("h3", {
              textContent: ae(o.total)
            }, null, 8, Gb),
            H(C("h5", Kb, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    C("canvas", Wb, null, 512)
  ]);
}
const Yb = /* @__PURE__ */ V(zb, [["render", Xb]]);
const Jb = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: Pe, MwRow: Ce, MwCard: jt, MwIcon: qe },
  data: () => ({
    mwIconLabFlask: jc,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, Zb = { class: "complementary" }, Qb = { class: "complementary mt-4" }, eS = ["href"], tS = { class: "complementary" }, nS = ["href"];
function oS(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), u = _("mw-card"), c = be("i18n");
  return v(), F(u, { class: "experimental-support-banner mb-1" }, {
    default: b(() => [
      p(l, null, {
        default: b(() => [
          p(r, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: b(() => [
              p(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ], void 0, !0),
            _: 1
          }),
          p(r, null, {
            default: b(() => [
              H(C("h5", null, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              H(C("p", Zb, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              C("p", Qb, [
                H(C("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, eS), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              C("p", tS, [
                H(C("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, nS), [
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
const sS = /* @__PURE__ */ V(Jb, [["render", oS]]), ed = () => {
  const e = le(), t = mt();
  return (n, o, s) => K(void 0, null, function* () {
    const { sourceLanguage: a, targetLanguage: i } = fe(e), r = yield e.dispatch(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage: a.value,
        targetLanguage: i.value,
        sourceTitle: n
      }
    );
    r && (e.dispatch("application/initializeSectionTranslation", r), t.push({
      name: "sx-translation-confirmer",
      query: { previousRoute: o, eventSource: s }
    }));
  });
}, qi = (e) => () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
  e.dispatch("translator/fetchTranslationsByStatus", "published"),
  e.dispatch("translator/fetchTranslationsByStatus", "draft")
]).catch((t) => {
  mw.log.error("[CX] Error while fetching translations", t);
}), td = () => {
  const e = {
    mflanguagesearcher: "content_language_selector",
    mfrecenttranslation: "recent_translation",
    mfrecentedit: "recent_edit",
    mffrequentlanguages: "frequent_languages",
    newbytranslationmobile: "invite_new_article_creation",
    specialcontribute: "contributions_page",
    publishingfollowup: "followup_after_publishing"
  }, n = new URLSearchParams(location.search).get("campaign");
  return e[n];
}, aS = () => {
  const e = le(), t = ed(), n = qt(), o = rs(), s = qi(e);
  return (l) => K(void 0, [l], function* ({ pageTitle: a, isDraftTranslation: i, sectionTitle: r }) {
    const u = td() || "direct_preselect", { sourceLanguage: c, targetLanguage: d } = fe(e);
    if (n({
      event_type: "dashboard_open",
      event_source: u,
      translation_source_language: c.value,
      translation_target_language: d.value
    }), i) {
      yield s();
      const g = e.getters["translator/getTranslation"](
        a,
        r,
        c.value,
        d.value
      );
      if (!g)
        return;
      o(g);
    } else
      t(a, "dashboard", u);
  });
}, iS = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  if (!t || !n)
    return null;
  const o = e.get("section"), s = !!e.get("draft");
  return { pageTitle: n, isDraftTranslation: s, sectionTitle: o };
}, rS = () => {
  const e = qt(), t = le(), n = aS(), o = qi(t);
  return () => K(void 0, null, function* () {
    yield ju();
    const s = iS();
    if (s) {
      n(s);
      return;
    }
    const { sourceLanguage: a, targetLanguage: i } = fe(t);
    e({
      event_type: "dashboard_open",
      event_source: td() || "direct",
      translation_source_language: a.value,
      translation_target_language: i.value
    });
    try {
      yield t.dispatch("suggestions/fetchFavorites");
    } catch (r) {
      mw.log.error("[CX] Error while fetching favorite suggestions", r);
    }
    yield o(), t.dispatch("suggestions/initializeSuggestions");
  });
}, lS = {
  name: "CxDashboard",
  components: {
    CxHelpPanel: Vb,
    MwCol: Pe,
    CxFavoriteList: Mb,
    CxStatsPanel: Yb,
    CxSuggestionList: Lb,
    CxTranslationList: gb,
    ExperimentalSupportBanner: sS,
    MwBottomNavigation: Kp,
    MwButton: we,
    MwButtonGroup: es,
    MwRow: Ce
  },
  setup() {
    const e = Z("suggestions"), t = wt(), n = y(() => [
      {
        value: "suggestions",
        props: {
          label: t.i18n(
            "cx-translation-filter-suggested-translations"
          ),
          icon: Ir,
          type: "text"
        }
      },
      {
        value: "draft",
        props: {
          label: t.i18n("cx-translation-filter-draft-translations"),
          icon: tn,
          type: "text"
        }
      }
      // Temporarily remove the published option, until the list is properly supported
      // {
      //   value: "published",
      //   props: {
      //     label: bananaI18n.i18n(
      //       "cx-translation-filter-published-translations"
      //     ),
      //     icon: mwIconArticleCheck,
      //     type: "text",
      //   },
      // },
    ]);
    lt(() => {
      new URLSearchParams(window.location.search).get("sx") && (e.value = "suggestions");
    });
    const o = mt(), s = () => o.push({ name: "sx-article-search" });
    He(e, () => window.scrollTo(0, 0)), rS()();
    const i = le();
    i.dispatch("translator/fetchTranslatorStats");
    const r = y(
      () => i.state.translator.translatorStats
    );
    return {
      active: e,
      listSelector: n,
      mwIconAdd: Mc,
      mwIconArticleCheck: dm,
      mwIconLightBulb: Ir,
      mwIconEdit: tn,
      searchTranslation: s,
      translatorStats: r
    };
  }
}, cS = { key: 0 };
function uS(e, t, n, o, s, a) {
  const i = _("experimental-support-banner"), r = _("mw-button"), l = _("mw-row"), u = _("mw-button-group"), c = _("cx-favorite-list"), d = _("cx-suggestion-list"), g = _("cx-translation-list"), f = _("mw-col"), m = _("cx-stats-panel"), S = _("cx-help-panel"), x = _("mw-bottom-navigation");
  return v(), T("div", null, [
    e.$incompleteVersion ? (v(), F(i, {
      key: 0,
      class: "col-mobile-12 col-tablet-12 col-desktop-7 col-offset-desktop-1 mb-4"
    })) : ne("", !0),
    p(l, { class: "ma-0" }, {
      default: b(() => [
        p(r, {
          progressive: "",
          icon: o.mwIconAdd,
          label: e.$i18n("cx-create-new-translation"),
          class: "col-desktop-3 col-offset-desktop-1 col-mobile-12 my-4",
          onClick: o.searchTranslation
        }, null, 8, ["icon", "label", "onClick"])
      ], void 0),
      _: 1
    }),
    p(l, {
      class: "ma-0",
      align: "start"
    }, {
      default: b(() => [
        p(f, {
          class: "cx-dashboard__main-panel col-offset-desktop-1 px-0",
          cols: "12",
          desktop: "7"
        }, {
          default: b(() => [
            e.$mwui.breakpoint.tabletAndUp ? (v(), T("nav", cS, [
              p(u, {
                items: o.listSelector,
                active: o.active,
                class: "justify-around",
                onSelect: t[0] || (t[0] = (k) => o.active = k)
              }, null, 8, ["items", "active"])
            ])) : ne("", !0),
            p(c),
            p(d, {
              active: o.active === "suggestions"
            }, null, 8, ["active"]),
            p(g, {
              "translation-status": "draft",
              active: o.active === "draft"
            }, null, 8, ["active"]),
            p(g, {
              "translation-status": "published",
              active: o.active === "published"
            }, null, 8, ["active"])
          ], void 0, !0),
          _: 1
        }),
        p(f, {
          class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0",
          cols: "12",
          desktop: "4"
        }, {
          default: b(() => [
            p(l, {
              class: "ma-0",
              align: "start"
            }, {
              default: b(() => [
                p(f, {
                  cols: "12",
                  tablet: "6",
                  desktop: "12",
                  class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                }, {
                  default: b(() => [
                    p(m, { stats: o.translatorStats }, null, 8, ["stats"])
                  ], void 0, !0),
                  _: 1
                }),
                p(f, {
                  cols: "12",
                  tablet: "6",
                  desktop: "12",
                  class: "px-0 ps-tablet-2 ps-desktop-0"
                }, {
                  default: b(() => [
                    p(S)
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
    e.$mwui.breakpoint.mobile ? (v(), F(x, {
      key: 1,
      active: o.active,
      "onUpdate:active": t[1] || (t[1] = (k) => o.active = k),
      items: o.listSelector
    }, null, 8, ["active", "items"])) : ne("", !0)
  ]);
}
const dS = /* @__PURE__ */ V(lS, [["render", uS]]), gS = {
  name: "DashboardView",
  components: { CxDashboard: dS }
}, fS = { class: "cx-translation-dashboard" };
function pS(e, t, n, o, s, a) {
  const i = _("cx-dashboard");
  return v(), T("main", fS, [
    p(i, { class: "mb-4 pb-12" })
  ]);
}
const fl = /* @__PURE__ */ V(gS, [["render", pS]]), mS = (e) => {
  const t = y(
    () => {
      var u, c;
      return (c = (u = e.value.orderedMissingSections) == null ? void 0 : u[0]) == null ? void 0 : c.sourceTitle;
    }
  ), n = y(
    () => e.value.missingSectionsCount
  ), o = y(
    () => e.value.presentSectionsCount
  ), s = y(
    () => {
      var u;
      return !!((u = e.value) != null && u.targetTitle);
    }
  ), a = y(
    () => {
      var u, c;
      return Re.getPageUrl(
        ((u = e.value) == null ? void 0 : u.targetLanguage) || "",
        ((c = e.value) == null ? void 0 : c.targetTitle) || ""
      );
    }
  ), i = (u) => {
    if (u)
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
  }, r = y(() => {
    let u;
    return n.value > 1 ? u = [
      "cx-sx-existing-translation-additional-info",
      `"${t.value}"`,
      n.value - 1
    ] : n.value === 1 && o.value > 0 ? u = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${t.value}"`
    ] : n.value === 1 && o.value === 0 ? u = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${t.value}"`
    ] : o.value > 0 ? u = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : u = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], u;
  }), l = y(
    () => {
      var u;
      return !s.value || ((u = e.value) == null ? void 0 : u.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: i,
    isProgressiveButton: l,
    targetArticlePath: a,
    targetPageExists: s
  };
}, Gi = () => {
  const e = le(), { currentSectionSuggestion: t, currentSourcePage: n } = fe(e), o = (i, r) => K(void 0, null, function* () {
    i() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield e.dispatch("mediawiki/fetchPageContent", t.value), yield e.dispatch(
      "mediawiki/resolvePageContentReferences",
      t.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), r();
  });
  return {
    selectPageSectionByIndex: (i) => {
      const r = () => {
        var u;
        return (u = n.value.sections) == null ? void 0 : u[i];
      };
      return o(r, () => {
        const u = r();
        i === 0 && (u.originalTitle = n.value.title), e.commit("application/setCurrentSourceSection", u);
      });
    },
    selectPageSectionByTitle: (i) => {
      const r = () => n.value.getSectionByTitle(i);
      return o(r, () => e.commit("application/setCurrentSourceSection", r()));
    }
  };
}, hS = () => {
  const e = mt(), t = le(), n = We("breakpoints"), o = new URLSearchParams(location.search), s = Z(o.get("section")), {
    currentSourceSection: a,
    currentSectionSuggestion: i,
    sourceLanguage: r,
    targetLanguage: l
  } = fe(t), u = y(
    () => {
      var x;
      return !!((x = i.value) != null && x.targetTitle);
    }
  ), c = () => {
    s.value = null, o.delete("section"), So(Object.fromEntries(o));
  }, { selectPageSectionByIndex: d, selectPageSectionByTitle: g } = Gi(), f = () => K(void 0, null, function* () {
    s.value ? (yield g(s.value), a.value ? e.push({
      name: "sx-content-comparator",
      query: { force: !0 }
    }) : c()) : u.value ? e.push({ name: "sx-section-selector" }) : S(), ai(i.value);
  }), m = () => {
    var k;
    const x = (k = i.value) == null ? void 0 : k.sourceTitle;
    Re.setCXToken(
      r.value,
      l.value,
      x
    ), location.href = Re.getCXUrl(
      x,
      null,
      r.value,
      l.value
    );
  }, S = () => {
    !Re.isMobileDomain() && n.value.tabletAndUp ? m() : (d(0), t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-sentence-selector", query: { force: !0 } }) : e.push({ name: "sx-quick-tutorial", query: { force: !0 } }), ai(i.value));
  };
  return {
    clearPreFilledSection: c,
    startNewTranslation: S,
    onSectionSelectorClick: f,
    preFilledSectionTitle: s
  };
};
const _S = {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton: we,
    MwRow: Ce,
    MwCol: Pe,
    MwIcon: qe
  },
  setup() {
    const e = mt(), t = le(), n = We("colors"), o = We("breakpoints"), { targetLanguageAutonym: s, currentSectionSuggestion: a } = fe(t), {
      clearPreFilledSection: i,
      startNewTranslation: r,
      onSectionSelectorClick: l,
      preFilledSectionTitle: u
    } = hS(), {
      actionInformationMessageArgs: c,
      getActionButtonLabel: d,
      isProgressiveButton: g,
      targetArticlePath: f,
      targetPageExists: m
    } = mS(a), S = wt(), x = y(
      () => S.i18n(d(!!u.value))
    ), k = y(
      () => !Re.isMobileDomain() && o.value.tabletAndUp
    ), D = y(
      () => S.i18n(...c.value)
    ), U = () => {
      e.push({ name: "sx-section-selector" }), ai(a.value);
    };
    return lt(() => {
      const M = u.value;
      M && !a.value.hasSectionTitle(M) && i();
    }), {
      actionButtonLabel: x,
      actionInformationMessage: D,
      isProgressiveButton: g,
      mwIconLinkExternal: ns,
      onMoreSectionsClick: U,
      startNewTranslation: r,
      onSectionSelectorClick: l,
      preFilledSectionTitle: u,
      targetArticlePath: f,
      targetLanguageAutonym: s,
      targetPageExists: m,
      colors: n,
      isDesktop: k
    };
  }
}, vS = { class: "sx-translation-confirmer-body pb-4" }, yS = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, bS = ["textContent"], SS = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, wS = ["href"], CS = ["textContent"];
function xS(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-icon"), l = _("mw-row"), u = _("mw-button"), c = be("i18n");
  return v(), T("section", vS, [
    o.preFilledSectionTitle ? (v(), T("section", yS, [
      H(C("h6", null, null, 512), [
        [c, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
      ]),
      C("h5", {
        class: "ma-0",
        textContent: ae(o.preFilledSectionTitle)
      }, null, 8, bS)
    ])) : o.targetPageExists ? (v(), T("section", SS, [
      p(l, {
        class: "sx-translation-confirmer__translation-status ma-0 pb-2",
        justify: "between"
      }, {
        default: b(() => [
          H(p(i, {
            tag: "h5",
            class: "ma-0 pe-2"
          }, null, 512), [
            [c, [o.targetLanguageAutonym], "cx-sx-existing-translation-status"]
          ]),
          p(i, { shrink: "" }, {
            default: b(() => [
              C("a", {
                href: o.targetArticlePath,
                target: "_blank"
              }, [
                p(r, {
                  icon: o.mwIconLinkExternal,
                  size: "16",
                  "icon-color": o.colors.base30
                }, null, 8, ["icon", "icon-color"])
              ], 8, wS)
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      }),
      p(l, { class: "ma-0" }, {
        default: b(() => [
          p(i, null, {
            default: b(() => [
              C("span", {
                textContent: ae(o.actionInformationMessage)
              }, null, 8, CS)
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])) : ne("", !0),
    p(l, {
      class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
      justify: "center"
    }, {
      default: b(() => [
        o.preFilledSectionTitle ? (v(), F(i, {
          key: 0,
          shrink: "",
          class: "me-4"
        }, {
          default: b(() => [
            H(p(u, {
              large: "",
              progressive: "",
              type: "text",
              onClick: o.onMoreSectionsClick
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-more-sections-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : ne("", !0),
        o.targetPageExists && o.isDesktop ? (v(), F(i, {
          key: 1,
          shrink: "",
          class: "me-4"
        }, {
          default: b(() => [
            H(p(u, {
              large: "",
              onClick: o.startNewTranslation
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-new-desktop-translation-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : ne("", !0),
        p(i, { shrink: "" }, {
          default: b(() => [
            p(u, {
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
const ES = /* @__PURE__ */ V(_S, [["render", xS]]);
const kS = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: Hi
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = is(), n = le(), { sourceLanguage: o, targetLanguage: s } = fe(n), a = y(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = y(
      () => {
        var d;
        return ((d = a.value) == null ? void 0 : d.titles.map((g) => g.lang)) || [];
      }
    ), r = y(
      () => t.value || e.value
    ), l = $v(n);
    return {
      availableSourceLanguages: i,
      targetLanguages: r,
      onSourceLanguageSelected: (d) => l(d, s.value),
      onTargetLanguageSelected: (d) => l(o.value, d),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
};
function AS(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector");
  return v(), F(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const nd = /* @__PURE__ */ V(kS, [["render", AS]]);
const TS = {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow: Ce,
    MwCol: Pe,
    MwIcon: qe,
    MwButton: we
  },
  setup() {
    const e = le(), {
      currentSectionSuggestion: t,
      currentSourcePage: n
    } = fe(e), o = y(() => e.state.suggestions.favorites || []), s = y(
      () => o.value.some(
        (f) => t.value.sourceTitle === f.title && t.value.sourceLanguage === f.sourceLanguage && t.value.targetLanguage === f.targetLanguage
      )
    ), a = () => K(this, null, function* () {
      return e.dispatch(
        "suggestions/removeFavoriteSuggestion",
        new qo({
          title: t.value.sourceTitle,
          sourceLanguage: t.value.sourceLanguage,
          targetLanguage: t.value.targetLanguage
        })
      );
    }), i = () => K(this, null, function* () {
      return e.dispatch(
        "suggestions/doMarkSuggestionAsFavorite",
        t.value
      );
    }), r = y(
      () => s.value ? Vc : Rc
    ), l = y(
      () => s.value ? a : i
    ), u = y(() => {
      var f;
      return (f = t.value) == null ? void 0 : f.sourceTitle;
    }), c = y(
      () => {
        var f;
        return Re.getPageUrl(
          ((f = t.value) == null ? void 0 : f.sourceLanguage) || "",
          u.value || ""
        );
      }
    ), d = y(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.langLinksCount;
    }), g = y(
      () => {
        var f;
        return Object.values(((f = n.value) == null ? void 0 : f.pageviews) || {}).reduce(
          (m, S) => m + S,
          0
        );
      }
    );
    return {
      bookmarkIcon: r,
      isFavorite: s,
      langLinksCount: d,
      mwIconLanguage: zc,
      mwIconLinkExternal: ns,
      sourceArticle: n,
      sourceArticlePath: c,
      sourceTitle: u,
      toggleFavorite: l,
      weeklyViews: g
    };
  }
}, DS = ["textContent"], LS = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, PS = ["textContent"];
function NS(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), u = _("mw-row"), c = be("i18n");
  return v(), F(u, {
    class: "sx-translation-confirmer__article-information ma-0 pa-4",
    align: "stretch",
    justify: "start"
  }, {
    default: b(() => [
      p(r, null, {
        default: b(() => [
          p(u, {
            justify: "between",
            class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
          }, {
            default: b(() => [
              p(r, {
                class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                tag: "a",
                href: o.sourceArticlePath,
                target: "_blank"
              }, {
                default: b(() => [
                  C("h5", {
                    class: "ma-0 me-1",
                    textContent: ae(o.sourceTitle)
                  }, null, 8, DS),
                  p(i, {
                    icon: o.mwIconLinkExternal,
                    size: "10",
                    "icon-color": e.$mwui.colors.base30
                  }, null, 8, ["icon", "icon-color"])
                ], void 0, !0),
                _: 1
              }, 8, ["href"]),
              p(r, {
                shrink: "",
                align: "start"
              }, {
                default: b(() => [
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
          C("p", LS, [
            p(i, {
              icon: o.mwIconLanguage,
              size: "16",
              class: "me-1"
            }, null, 8, ["icon"]),
            C("span", {
              class: "pe-3",
              textContent: ae(o.langLinksCount)
            }, null, 8, PS),
            H(C("span", null, null, 512), [
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
const FS = /* @__PURE__ */ V(TS, [["render", NS]]);
const MS = {
  name: "SxTranslationConfirmer",
  components: {
    MwIcon: qe,
    SxTranslationConfirmerArticleInformation: FS,
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we,
    SxArticleLanguageSelector: nd,
    SxTranslationConfirmerActionPanel: ES
  },
  props: {
    previousRoute: {
      type: String,
      default: null
    },
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = le(), { sourceLanguage: n, targetLanguage: o, currentSourcePage: s } = fe(t), a = y(
      () => {
        var u, c;
        return (c = (u = s.value) == null ? void 0 : u.image) == null ? void 0 : c.source;
      }
    ), i = qt();
    lt(() => {
      t.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), i({
        event_type: "dashboard_translation_start",
        event_source: e.eventSource,
        translation_source_language: n.value,
        translation_target_language: o.value
      }), ji(), t.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        o.value
      );
    });
    const r = mt();
    return {
      articleImageSource: a,
      mwIconArticle: Li,
      mwIconClose: Ft,
      onClose: () => {
        t.dispatch("application/clearCurrentSectionSuggestion"), So(null), r.push({ name: e.previousRoute });
      }
    };
  }
}, OS = { class: "sx-translation-confirmer" }, BS = { class: "mb-0" }, IS = { class: "sx-translation-confirmer__article-image flex justify-center" }, $S = ["src"], US = { class: "ma-3" };
function RS(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), u = _("mw-icon"), c = _("sx-translation-confirmer-article-information"), d = _("sx-article-language-selector"), g = _("sx-translation-confirmer-action-panel"), f = be("i18n"), m = be("i18n-html");
  return v(), T("section", OS, [
    p(l, {
      class: "sx-translation-confirmer__header ma-0 py-3",
      align: "stretch",
      justify: "start"
    }, {
      default: b(() => [
        p(i, {
          grow: "",
          class: "px-4",
          align: "center"
        }, {
          default: b(() => [
            H(C("h5", BS, null, 512), [
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
          default: b(() => [
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
    C("div", IS, [
      o.articleImageSource ? (v(), T("img", {
        key: 0,
        src: o.articleImageSource
      }, null, 8, $S)) : (v(), F(u, {
        key: 1,
        size: "120",
        icon: o.mwIconArticle,
        "icon-color": e.$mwui.colors.primary
      }, null, 8, ["icon", "icon-color"]))
    ]),
    p(c),
    p(d),
    p(g),
    p(l, {
      justify: "center",
      class: "sx-translation-confirmer__license ma-0"
    }, {
      default: b(() => [
        C("p", US, [
          H(C("small", null, null, 512), [
            [m, void 0, "cx-license-agreement"]
          ])
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const VS = /* @__PURE__ */ V(MS, [["render", RS]]);
const zS = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: VS
  },
  props: {
    previousRoute: {
      type: String,
      default: null
    },
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
function jS(e, t, n, o, s, a) {
  const i = _("sx-translation-confirmer");
  return v(), T("main", {
    class: he(["sx-translation-confirmer-view", a.classes])
  }, [
    p(i, {
      "event-source": n.eventSource,
      "previous-route": n.previousRoute
    }, null, 8, ["event-source", "previous-route"])
  ], 2);
}
const HS = /* @__PURE__ */ V(zS, [["render", jS]]), qS = {
  name: "SxSectionSelectorViewArticleItem",
  components: {
    MwRow: Ce,
    MwButton: we
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
    mwIconLinkExternal: ns
  })
};
function GS(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return v(), F(r, {
    tag: "li",
    class: "ma-0"
  }, {
    default: b(() => [
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
const KS = /* @__PURE__ */ V(qS, [["render", GS]]);
const WS = {
  name: "SxSectionSelectorHeader",
  components: {
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we
  },
  props: {
    suggestion: {
      type: zt,
      required: !0
    }
  },
  emits: ["close"],
  data: () => ({
    mwIconClose: Ft
  })
}, XS = { class: "sx-section-selector__header pa-4" }, YS = { class: "sx-section-selector__header-text ma-0" }, JS = ["textContent"], ZS = { class: "pt-0 ma-0" }, QS = { class: "ma-0" };
function ew(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), u = be("i18n");
  return v(), T("div", XS, [
    p(l, { class: "ma-0 pb-3" }, {
      default: b(() => [
        p(i, null, {
          default: b(() => [
            H(C("h6", YS, null, 512), [
              [u, void 0, "cx-sx-section-selector-title"]
            ]),
            C("h2", {
              class: "sx-section-selector__title ma-0 py-0",
              textContent: ae(n.suggestion.sourceTitle)
            }, null, 8, JS)
          ], void 0, !0),
          _: 1
        }),
        p(i, {
          shrink: "",
          class: "justify-end"
        }, {
          default: b(() => [
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
    H(C("h4", ZS, null, 512), [
      [u, void 0, "cx-sx-section-selector-subtitle"]
    ]),
    H(C("p", QS, null, 512), [
      [u, void 0, "cx-sx-section-selector-desc"]
    ])
  ]);
}
const tw = /* @__PURE__ */ V(WS, [["render", ew]]), nw = {
  name: "SxSectionSelectorSectionList",
  components: {
    MwRow: Ce,
    MwButton: we,
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
  data: () => ({ mwIconArrowForward: An })
}, ow = { class: "sx-section-selector__sections-list ma-0 pa-0" };
function sw(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-button"), l = _("mw-row");
  return v(), T("ul", ow, [
    (v(!0), T(ke, null, et(n.sections, (u) => (v(), F(l, {
      key: u.sourceTitle,
      tag: "li",
      class: "ma-0"
    }, {
      default: b(() => [
        p(r, {
          class: "col justify-between py-3 px-4",
          label: u.sourceTitle,
          type: "text",
          onClick: (c) => e.$emit("select-section", u.sourceTitle)
        }, {
          default: b(() => [
            Ye(e.$slots, "default", {
              targetSection: u.targetTitle,
              sourceSection: u.sourceTitle
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
const od = /* @__PURE__ */ V(nw, [["render", sw]]), aw = `<svg
    width="136px"
    height="136px"
    viewBox="0 0 136 136"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <title>sad-robot</title>
    <g
        id="sad-robot"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
    >
        <g id="Group">
            <circle
                id="Oval"
                fill="#EAECF0"
                cx="68"
                cy="68"
                r="68"
            ></circle>
            <path
                id="Mask"
                d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z"
                fill="#54595D"
            ></path>
        </g>
    </g>
</svg>`;
const iw = {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList: od,
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we
  },
  props: {
    suggestion: {
      type: zt,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = y(
      () => Me.getAutonym(e.suggestion.targetLanguage)
    ), n = y(
      () => Object.keys(e.suggestion.missingSections).length === 0
    );
    return {
      sadRobotSVG: aw,
      getAutonym: Me.getAutonym,
      getDir: Me.getDir,
      targetLanguageAutonym: t,
      emptySections: n
    };
  }
}, rw = { class: "sx-section-selector__missing-sections py-2" }, lw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, cw = ["lang", "dir", "textContent"];
function uw(e, t, n, o, s, a) {
  const i = _("sx-section-selector-section-list"), r = _("mw-col"), l = _("mw-button"), u = _("mw-row"), c = be("i18n");
  return v(), T("section", rw, [
    H(C("h4", lw, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-missing-sections-title"]
    ]),
    o.emptySections ? ne("", !0) : (v(), F(i, {
      key: 0,
      sections: n.suggestion.orderedMissingSections,
      onSelectSection: t[0] || (t[0] = (d) => e.$emit("select-section", d))
    }, {
      default: b(({ sourceSection: d }) => [
        C("h5", {
          class: "ma-0",
          lang: n.suggestion.sourceLanguage,
          dir: o.getDir(n.suggestion.sourceLanguage),
          textContent: ae(d)
        }, null, 8, cw)
      ]),
      _: 1
    }, 8, ["sections"])),
    o.emptySections ? (v(), F(u, {
      key: 1,
      class: "sx-section-selector__empty-missing-sections px-4 my-0"
    }, {
      default: b(() => [
        p(r, {
          class: "py-6 justify-center",
          innerHTML: o.sadRobotSVG
        }, null, 8, ["innerHTML"]),
        p(r, {
          cols: "12",
          class: "sx-section-selector__empty-missing-sections-details pa-0"
        }, {
          default: b(() => [
            H(C("h6", null, null, 512), [
              [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(r, {
          cols: "12",
          class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
        }, {
          default: b(() => [
            H(C("p", null, null, 512), [
              [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(r, {
          cols: "12",
          class: "pa-0 mb-2"
        }, {
          default: b(() => [
            H(p(l, {
              class: "sx-section-selector__empty-missing-sections__close-button px-0",
              type: "text",
              onClick: t[1] || (t[1] = (d) => e.$emit("close"))
            }, null, 512), [
              [c, void 0, "cx-sx-section-selector-pick-other-translation-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : ne("", !0)
  ]);
}
const dw = /* @__PURE__ */ V(iw, [["render", uw]]);
const gw = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: od
  },
  props: {
    suggestion: {
      type: zt,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = y(
      () => Me.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: An, getAutonym: Me.getAutonym, getDir: Me.getDir, targetLanguageAutonym: t };
  }
}, fw = { class: "sx-section-selector__present-sections py-2" }, pw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, hw = { class: "sx-section-selector__present-section-button-content" }, _w = ["lang", "dir", "textContent"], vw = ["lang", "dir", "textContent"];
function yw(e, t, n, o, s, a) {
  const i = _("sx-section-selector-section-list"), r = be("i18n");
  return v(), T("section", fw, [
    H(C("h4", pw, null, 512), [
      [r, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    p(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: b(({ sourceSection: l, targetSection: u }) => [
        C("div", hw, [
          C("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: ae(l)
          }, null, 8, _w),
          C("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: ae(u)
          }, null, 8, vw)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const bw = /* @__PURE__ */ V(gw, [["render", yw]]);
const Sw = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: bw,
    SxSectionSelectorSectionListMissing: dw,
    SxSectionSelectorHeader: tw,
    SxSectionSelectorViewArticleItem: KS,
    MwRow: Ce,
    MwCol: Pe,
    MwIcon: qe,
    SxArticleLanguageSelector: nd
  },
  setup() {
    const e = le(), {
      currentSectionSuggestion: t,
      sourceLanguageAutonym: n,
      targetLanguageAutonym: o
    } = fe(e), s = y(
      () => Re.getPageUrl(
        t.value.sourceLanguage,
        t.value.sourceTitle
      )
    ), a = y(
      () => Re.getPageUrl(
        t.value.targetLanguage,
        t.value.targetTitle
      )
    ), i = y(() => [
      { path: s.value, autonym: n.value },
      { path: a.value, autonym: o.value }
    ]), r = mt(), l = () => {
      So(null), r.push({ name: "dashboard" });
    }, u = rs(), { selectPageSectionByTitle: c } = Gi();
    return {
      goToDashboard: l,
      mwIconRobot: Hc,
      mwIconLabFlask: jc,
      selectSection: (g) => {
        const f = e.getters["translator/getTranslation"](
          t.value.sourceTitle,
          g,
          t.value.sourceLanguage,
          t.value.targetLanguage
        );
        f ? u(f) : (c(g), r.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: o,
      viewArticleItems: i
    };
  }
}, ww = { class: "sx-section-selector" }, Cw = { class: "sx-section-selector__body" }, xw = { class: "py-2" }, Ew = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, kw = { class: "ma-0 pa-0" }, Aw = { class: "sx-section-selector__additional-consideration-title" }, Tw = { href: "#" }, Dw = { class: "sx-section-selector__additional-consideration-title" }, Lw = { href: "#" };
function Pw(e, t, n, o, s, a) {
  const i = _("sx-section-selector-header"), r = _("sx-article-language-selector"), l = _("sx-section-selector-section-list-missing"), u = _("sx-section-selector-section-list-present"), c = _("sx-section-selector-view-article-item"), d = _("mw-icon"), g = _("mw-col"), f = _("mw-row"), m = be("i18n");
  return v(), T("section", ww, [
    p(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    C("section", Cw, [
      p(r),
      p(l, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["suggestion", "onSelectSection", "onClose"]),
      p(u, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection
      }, null, 8, ["suggestion", "onSelectSection"]),
      C("section", xw, [
        H(C("h4", Ew, null, 512), [
          [m, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        C("ul", kw, [
          (v(!0), T(ke, null, et(o.viewArticleItems, (S, x) => (v(), F(c, {
            key: `view-article-item-${x}`,
            path: S.path,
            autonym: S.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      p(f, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: b(() => [
          p(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: b(() => [
              C("h6", Aw, [
                p(d, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                zo(" " + ae(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              H(C("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              H(C("a", Tw, null, 512), [
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
            default: b(() => [
              C("h6", Dw, [
                p(d, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                zo(" " + ae(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              H(C("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              H(C("a", Lw, null, 512), [
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
const Nw = /* @__PURE__ */ V(Sw, [["render", Pw]]);
const Fw = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: Nw
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function Mw(e, t, n, o, s, a) {
  const i = _("sx-section-selector");
  return v(), T("main", {
    class: he(["sx-section-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const Ow = /* @__PURE__ */ V(Fw, [["render", Mw]]), Bw = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = fe(
    le()
  ), o = wt();
  return y(() => {
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
const Iw = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: es },
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
    const n = (s) => t("update:selection", s), o = Bw(e);
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
}, $w = { class: "sx-content-comparator__source-target-selector" };
function Uw(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return v(), T("div", $w, [
    p(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const Rw = /* @__PURE__ */ V(Iw, [["render", Uw]]), la = (e) => {
  const t = Z([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o
  } = fe(e), s = y(() => n.value.targetTitle), a = y(
    () => e.getters["application/getCurrentSourceSectionTitle"]
  ), i = y(
    () => e.getters["mediawiki/getPage"](
      n.value.targetLanguage,
      s.value
    )
  ), r = y(
    () => n.value.missingSections[a.value] || n.value.presentSections[a.value] || ""
  ), l = y(
    () => {
      var f;
      return (((f = u.value) == null ? void 0 : f.title) || "").replace(/ /g, "_");
    }
  ), u = y(
    () => {
      var f;
      return (f = i.value) == null ? void 0 : f.getSectionByTitle(r.value);
    }
  ), c = y(() => {
    var f;
    return (f = o.value) == null ? void 0 : f.html;
  }), d = y(() => {
    var f;
    return (f = u.value) == null ? void 0 : f.html;
  }), g = y(
    () => !e.getters["application/isCurrentSourceSectionMissing"] && !t.value.includes(r.value)
  );
  return {
    activeSectionTargetTitle: r,
    discardedSections: t,
    isCurrentSectionMapped: g,
    sourceSectionContent: c,
    sourceSectionTitle: a,
    targetPage: i,
    targetSectionAnchor: l,
    targetSectionContent: d
  };
};
const Vw = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: Rw,
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we
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
    const n = le(), o = Z(!1), { currentSectionSuggestion: s } = fe(n), a = y(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = y(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), r = (f) => t.emit("update:sourceVsTargetSelection", f), { activeSectionTargetTitle: l, targetSectionAnchor: u } = la(n), c = y(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: a.value,
            path: `${Re.getPageUrl(
              s.value.sourceLanguage,
              s.value.sourceTitle
            )}#${i.value}`,
            lang: s.value.sourceLanguage,
            dir: Me.getDir(s.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: s.value.targetTitle,
            path: d.value,
            lang: s.value.targetLanguage,
            dir: Me.getDir(s.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${d.value}#${u.value}`
          };
      }
    }), d = y(
      () => Re.getPageUrl(
        s.value.targetLanguage,
        s.value.targetTitle
      )
    ), g = Z(null);
    return lt(() => {
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
      mwIconLinkExternal: ns,
      mwIconEdit: tn,
      updateSelection: r
    };
  }
}, zw = ["lang", "dir", "textContent"];
function jw(e, t, n, o, s, a) {
  const i = _("sx-content-comparator-source-vs-target-selector"), r = _("mw-col"), l = _("mw-button"), u = _("mw-row");
  return v(), F(u, {
    ref: "contentHeader",
    class: he(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: b(() => [
      p(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      p(u, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: b(() => [
          p(r, null, {
            default: b(() => [
              C("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: ae(o.activeContent.title)
              }, null, 8, zw)
            ], void 0, !0),
            _: 1
          }),
          p(r, { shrink: "" }, {
            default: b(() => [
              o.isSticky ? (v(), F(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (c) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (v(), F(l, {
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
const Hw = /* @__PURE__ */ V(Vw, [["render", jw]]), qw = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: Pe,
    MwButton: we
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = le(), n = y(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = y(
      () => e.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByIndex: s } = Gi();
    return {
      goToNextSection: () => {
        const r = (o.value + 1) % e.sectionSourceTitles.length;
        s(r);
      },
      goToPreviousSection: () => {
        const r = (o.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length;
        s(r);
      },
      mwIconPrevious: Zs,
      mwIconArrowForward: An
    };
  }
};
function Gw(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col");
  return v(), F(r, {
    class: "justify-end",
    align: "center"
  }, {
    default: b(() => [
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
const Kw = /* @__PURE__ */ V(qw, [["render", Gw]]);
const Ww = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we
  },
  props: {
    suggestion: {
      type: zt,
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
    mwIconTrash: Bc,
    mwIconUndo: fm
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
}, Xw = { class: "sx-content-comparator-header__mapped-section" }, Yw = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, Jw = { key: 0 }, Zw = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Qw = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function eC(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), u = be("i18n");
  return v(), T("div", Xw, [
    p(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: b(() => [
        p(i, { grow: "" }, {
          default: b(() => [
            C("h6", Yw, [
              zo(ae(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? H((v(), T("span", Jw, null, 512)), [
                [u, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : ne("", !0)
            ]),
            C("h6", {
              class: he(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, ae(n.targetSectionTitle), 3)
          ], void 0, !0),
          _: 1
        }),
        p(i, { shrink: "" }, {
          default: b(() => [
            a.isDiscardedSection ? (v(), F(r, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (v(), F(r, {
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
    a.isDiscardedSection ? H((v(), T("p", Qw, null, 512)), [
      [u, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : H((v(), T("p", Zw, null, 512)), [
      [u, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const tC = /* @__PURE__ */ V(Ww, [["render", eC]]);
const nC = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: tC,
    SxContentComparatorHeaderNavigation: Kw,
    MwButton: we,
    MwCol: Pe,
    MwRow: Ce,
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
    const e = le(), {
      currentSectionSuggestion: t,
      currentSourceSection: n
    } = fe(e), o = y(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = y(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = la(e), r = y(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = y(() => [
      ...Object.keys(t.value.missingSections),
      ...Object.keys(t.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: Ti,
      mwIconEdit: tn,
      mwIconEye: Ya,
      sectionSourceTitles: l,
      sourceSectionContent: r,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: Me.getDir
    };
  }
}, oC = { class: "sx-content-comparator__header pa-4" }, sC = ["lang", "dir"], aC = ["lang", "dir"], iC = /* @__PURE__ */ C("br", null, null, -1);
function rC(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("sx-content-comparator-header-navigation"), u = _("mw-row"), c = _("mw-icon"), d = _("sx-content-comparator-header-mapped-section"), g = be("i18n");
  return v(), T("div", oC, [
    p(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (f) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    p(u, { class: "my-1 py-2 mx-0" }, {
      default: b(() => [
        p(r, { grow: "" }, {
          default: b(() => [
            C("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, ae(o.suggestion.sourceTitle), 9, sC),
            C("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, ae(o.sourceSectionTitle), 9, aC)
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
          default: b(() => [
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
    o.isCurrentSectionMissing ? (v(), F(u, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: b(() => [
        p(r, {
          shrink: "",
          class: "pe-2"
        }, {
          default: b(() => [
            p(c, { icon: o.mwIconEye }, null, 8, ["icon"])
          ], void 0, !0),
          _: 1
        }),
        p(r, { class: "ma-0" }, {
          default: b(() => [
            H(C("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            iC,
            H(C("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : ne("", !0),
    o.isCurrentSectionPresent ? (v(), F(d, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (f) => e.$emit("update:discardedSections", f))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : ne("", !0)
  ]);
}
const lC = /* @__PURE__ */ V(nC, [["render", rC]]);
const cC = {
  name: "SxContentComparatorNewSectionPlaceholder",
  props: {
    isMappedSection: {
      type: Boolean,
      required: !0
    },
    i18n: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return { placeholderTitle: y(
      () => e.isMappedSection ? e.i18n(
        "cx-sx-content-comparator-present-section-placeholder-title"
      ) : e.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    ) };
  }
}, uC = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, dC = ["innerHTML"], gC = { key: 0 };
function fC(e, t, n, o, s, a) {
  const i = be("i18n");
  return v(), T("section", uC, [
    C("h5", { innerHTML: o.placeholderTitle }, null, 8, dC),
    n.isMappedSection ? H((v(), T("p", gC, null, 512)), [
      [i, void 0, "cx-sx-content-comparator-present-section-placeholder-subtitle"]
    ]) : ne("", !0)
  ]);
}
const sd = /* @__PURE__ */ V(cC, [["render", fC]]), pC = (e, t) => {
  const { isCurrentSectionMapped: n, targetPage: o } = la(e), { currentSectionSuggestion: s } = fe(e), a = () => Nc(
    sd,
    {
      isMappedSection: n.value,
      i18n: t
    }
  ).mount(document.createElement("div")).$el, i = (l) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    l
  ), r = (l) => {
    const u = l.getElementsByTagName("base");
    Array.from(u).forEach(
      (c) => c.parentNode.removeChild(c)
    );
  };
  return y(() => {
    var d;
    const l = document.createElement("div");
    l.innerHTML = (d = o.value) == null ? void 0 : d.content, r(l);
    const u = a(), c = i(
      s.value
    );
    if (c) {
      const g = Array.from(
        l.querySelectorAll("h2")
      ).filter((f) => f.textContent.match(c));
      if (g && g.length) {
        const f = g[0].parentNode;
        f.parentNode.insertBefore(
          u,
          f
        );
      }
    } else
      l.appendChild(u);
    return l.innerHTML;
  });
};
const mC = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: sd,
    SxContentComparatorHeader: lC,
    SxContentComparatorContentHeader: Hw,
    MwSpinner: Tn
  },
  setup() {
    const e = le(), t = mt(), n = Z("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      if (e.getters["translator/userHasSectionTranslations"]) {
        t.push({ name: "sx-sentence-selector" });
        return;
      }
      t.push({ name: "sx-quick-tutorial" });
    }, a = wt(), i = a.i18n.bind(a), {
      activeSectionTargetTitle: r,
      discardedSections: l,
      isCurrentSectionMapped: u,
      sourceSectionContent: c,
      targetSectionContent: d
    } = la(e), g = pC(e, i), {
      currentSectionSuggestion: f,
      sourceLanguage: m,
      targetLanguage: S
    } = fe(e), x = y(() => f.value.targetTitle);
    return He(
      x,
      () => e.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: S.value,
        targetLanguage: m.value,
        sourceTitle: x.value
      }),
      { immediate: !0 }
    ), {
      i18n: i,
      getDir: Me.getDir,
      activeSectionTargetTitle: r,
      discardedSections: l,
      goToSectionSelector: o,
      isCurrentSectionMapped: u,
      sourceSectionContent: c,
      sourceVsTargetSelection: n,
      targetPageContent: g,
      targetSectionContent: d,
      translateSection: s,
      sourceLanguage: m,
      targetLanguage: S
    };
  }
}, hC = { class: "sx-content-comparator" }, _C = { class: "sx-content-comparator__source-content" }, vC = ["lang", "dir", "innerHTML"], yC = ["lang", "dir", "innerHTML"], bC = ["innerHTML"];
function SC(e, t, n, o, s, a) {
  const i = _("sx-content-comparator-header"), r = _("sx-content-comparator-content-header"), l = _("mw-spinner"), u = _("sx-content-comparator-new-section-placeholder");
  return v(), T("section", hC, [
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
    C("section", _C, [
      o.sourceVsTargetSelection === "source_section" ? (v(), T(ke, { key: 0 }, [
        o.sourceSectionContent ? ne("", !0) : (v(), F(l, { key: 0 })),
        C("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, vC)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (v(), T(ke, { key: 1 }, [
        o.targetPageContent ? ne("", !0) : (v(), F(l, { key: 0 })),
        C("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, yC)
      ], 64)) : (v(), T(ke, { key: 2 }, [
        C("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, bC),
        p(u, {
          "is-mapped-section": o.isCurrentSectionMapped,
          i18n: o.i18n
        }, null, 8, ["is-mapped-section", "i18n"])
      ], 64))
    ])
  ]);
}
const wC = /* @__PURE__ */ V(mC, [["render", SC]]);
const CC = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: wC
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function xC(e, t, n, o, s, a) {
  const i = _("sx-content-comparator");
  return v(), T("main", {
    class: he(["sx-content-comparator-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const EC = /* @__PURE__ */ V(CC, [["render", xC]]);
const kC = {
  name: "SxConfirmBackNavigationDialog",
  components: {
    MwButton: we,
    MwDivider: ts,
    MwDialog: Ht
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
}, AC = { class: "mw-ui-dialog__header px-4 py-3" }, TC = { class: "mw-ui-dialog__header-title" }, DC = { class: "pa-4" }, LC = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" };
function PC(e, t, n, o, s, a) {
  const i = _("mw-divider"), r = _("mw-button"), l = _("mw-dialog"), u = be("i18n");
  return v(), F(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10
  }, {
    header: b(() => [
      C("div", AC, [
        H(C("span", TC, null, 512), [
          [u, void 0, "sx-confirm-back-navigation-dialog-title"]
        ])
      ])
    ]),
    footer: b(() => [
      C("div", LC, [
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
    default: b(() => [
      p(i),
      C("div", DC, [
        H(C("span", null, null, 512), [
          [u, void 0, "sx-confirm-back-navigation-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-opacity", "overlay-color"]);
}
const NC = /* @__PURE__ */ V(kC, [["render", PC]]);
const FC = {
  name: "SxTranslationSelector",
  components: { MwCard: jt, MwButton: we, MwDialog: Ht },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = ze.EMPTY_TEXT_PROVIDER_KEY, o = ze.ORIGINAL_TEXT_PROVIDER_KEY, s = le(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = fe(s), c = y(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        a.value,
        i.value
      )
    ), d = y(() => {
      const x = [o, n];
      return c.value.filter(
        (k) => !x.includes(k)
      );
    }), g = y(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), f = (x) => {
      s.dispatch("application/updateMTProvider", x), S();
    }, m = ze.getMTProviderLabel, S = () => t.emit("update:active", !1);
    return {
      apiMtProviders: d,
      close: S,
      emptyTextProviderKey: n,
      getDir: Me.getDir,
      getMTProviderLabel: m,
      mwIconClose: Ft,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: f,
      sourceLanguage: a
    };
  }
}, MC = { class: "mw-ui-dialog__header pa-4" }, OC = { class: "row ma-0 py-2" }, BC = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, IC = { class: "mb-0" }, $C = { class: "col shrink justify-center" }, UC = { class: "pb-2 mb-0" }, RC = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, VC = ["dir", "lang", "innerHTML"], zC = ["textContent"], jC = ["innerHTML"], HC = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, qC = /* @__PURE__ */ C("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function GC(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-card"), l = _("mw-dialog"), u = be("i18n");
  return n.active ? (v(), F(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: b(() => [
      C("div", MC, [
        C("div", OC, [
          C("div", BC, [
            H(C("h4", IC, null, 512), [
              [u, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          C("div", $C, [
            p(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        H(C("h6", UC, null, 512), [
          [u, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: b(() => [
      p(r, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (c) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: b(() => [
          H(C("h5", RC, null, 512), [
            [u, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: b(() => [
          C("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, VC)
        ], void 0, !0),
        _: 1
      }),
      (v(!0), T(ke, null, et(o.apiMtProviders, (c) => (v(), F(r, {
        key: c,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (d) => o.selectProvider(c)
      }, {
        header: b(() => [
          C("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: ae(o.getMTProviderLabel(c))
          }, null, 8, zC)
        ]),
        default: b(() => [
          C("p", {
            innerHTML: o.proposedTranslations[c]
          }, null, 8, jC)
        ], void 0, !0),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      p(r, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (c) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: b(() => [
          H(C("h5", HC, null, 512), [
            [u, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: b(() => [
          qC
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : ne("", !0);
}
const KC = /* @__PURE__ */ V(FC, [["render", GC]]);
const WC = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: qe, MwCol: Pe },
  setup() {
    const e = le(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = fe(e), i = y(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.title;
    }), r = y(
      () => {
        var f;
        return ((f = n.value) == null ? void 0 : f.title) || i.value;
      }
    ), l = y(
      () => Re.getPageUrl(a.value, i.value)
    ), u = y(
      () => {
        var f;
        return !!((f = n.value) != null && f.translatedTitle);
      }
    ), c = y(
      () => u.value ? "translated" : "selected"
    ), d = y(() => {
      const f = [t];
      return o.value && f.push(`${t}--${c.value}`), f;
    });
    return {
      mwIconLinkExternal: ns,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: r,
      titleClasses: d
    };
  }
}, XC = ["href"], YC = ["textContent"], JC = ["innerHTML"];
function ZC(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col");
  return v(), F(r, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: b(() => [
      C("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        C("strong", {
          textContent: ae(o.sourceArticleTitle)
        }, null, 8, YC),
        p(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, XC),
      C("h2", {
        class: he(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, JC)
    ], void 0),
    _: 1
  });
}
const QC = /* @__PURE__ */ V(WC, [["render", ZC]]);
const ex = {
  name: "ProposedTranslationActionButtons",
  components: {
    MwRow: Ce,
    MwButton: we
  },
  emits: ["select-previous-segment", "apply-translation", "skip-translation"],
  setup() {
    const {
      currentSourceSection: e,
      proposedTranslation: t,
      isSectionTitleSelected: n
    } = fe(le());
    return {
      isLastTranslationUnit: y(
        () => e.value.isSelectedTranslationUnitLast
      ),
      isSectionTitleSelected: n,
      mwIconPrevious: Zs,
      mwIconArrowForward: An,
      proposedTranslation: t
    };
  }
};
function tx(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return v(), F(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
    default: b(() => [
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
const ad = /* @__PURE__ */ V(ex, [["render", tx]]);
const nx = {
  name: "ProposedTranslationHeader",
  components: {
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we
  },
  emits: ["configure-options"],
  setup() {
    const e = le(), t = y(
      () => e.state.application.currentMTProvider
    ), n = wt(), o = y(() => ({
      [ze.ORIGINAL_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ze.EMPTY_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), s = y(
      () => o.value[t.value] || n.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ze.getMTProviderLabel(t.value)
      )
    );
    return {
      mwIconEllipsis: Qs,
      mtOptionLabel: s
    };
  }
};
function ox(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row");
  return v(), F(i, { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
    default: b(() => [
      p(l, { class: "ma-0 ps-5 pb-4" }, {
        default: b(() => [
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
            default: b(() => [
              p(r, {
                icon: o.mwIconEllipsis,
                type: "icon",
                class: "sx-sentence-selector__proposed-translation__header-settings-button pa-0",
                onClick: t[0] || (t[0] = (u) => e.$emit("configure-options"))
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
const sx = /* @__PURE__ */ V(nx, [["render", ox]]), ax = {
  name: "RetryMtCard",
  components: { MwButton: we, MwIcon: qe, MwGrid: Fc, MwCol: Pe, MwRow: Ce },
  emits: ["configure-options", "retry-translation"],
  setup() {
    return {
      mwIconAlert: po,
      mwIconRefresh: $c,
      mwIconMenu: ym
    };
  }
}, ix = { class: "mt-retry-body" };
function rx(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), u = _("mw-button"), c = be("i18n");
  return v(), T("div", ix, [
    p(l, { class: "retry-body__action-buttons" }, {
      default: b(() => [
        p(r, { cols: "12" }, {
          default: b(() => [
            p(i, { icon: o.mwIconAlert }, null, 8, ["icon"]),
            H(C("span", null, null, 512), [
              [c, void 0, "cx-sx-proposed-translation-not-available-message"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    p(l, { class: "retry-body__action-buttons" }, {
      default: b(() => [
        p(r, { cols: "6" }, {
          default: b(() => [
            p(u, {
              icon: o.mwIconRefresh,
              type: "text",
              label: e.$i18n("cx-sx-proposed-translation-retry-button"),
              class: "retry-button pa-5 pt-4",
              progressive: "",
              onClick: t[0] || (t[0] = (d) => e.$emit("retry-translation"))
            }, null, 8, ["icon", "label"])
          ], void 0, !0),
          _: 1
        }),
        p(r, { cols: "6" }, {
          default: b(() => [
            p(u, {
              icon: o.mwIconMenu,
              type: "text",
              label: e.$i18n("cx-sx-proposed-translation-other-options-button"),
              class: "other-options-button pa-5 pt-4",
              progressive: "",
              onClick: t[1] || (t[1] = (d) => e.$emit("configure-options"))
            }, null, 8, ["icon", "label"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })
  ]);
}
const lx = /* @__PURE__ */ V(ax, [["render", rx]]);
const cx = {
  name: "ProposedTranslationCard",
  components: {
    RetryMtCard: lx,
    MwSpinner: Tn,
    MwCard: jt,
    ProposedTranslationHeader: sx,
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we,
    ProposedTranslationActionButtons: ad
  },
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup() {
    const e = Z(0), t = Z(null), n = Z(null), o = le(), {
      currentMTProvider: s,
      targetLanguage: a,
      proposedTranslation: i,
      currentSourceSection: r
    } = fe(o), l = y(
      () => {
        var g;
        return (g = o.state.application.mtRequestsPending) == null ? void 0 : g.includes(
          r.value.selectedTranslationUnitId
        );
      }
    ), u = y(() => ({
      "max-height": `calc(100% - ${e.value}px)`
    })), c = y(
      () => !!i.value || s.value === ze.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      e.value = t.value.$el.clientHeight + n.value.$el.clientHeight;
    };
    return He(s, d), lt(() => K(this, null, function* () {
      yield vo(), d();
    })), {
      footer: n,
      getDir: Me.getDir,
      header: t,
      mwIconEllipsis: Qs,
      mwIconEdit: tn,
      proposedTranslation: i,
      hasProposedTranslation: c,
      targetLanguage: a,
      contentsStyle: u,
      mtRequestPending: l
    };
  }
}, ux = ["lang", "dir", "innerHTML"];
function dx(e, t, n, o, s, a) {
  const i = _("proposed-translation-header"), r = _("mw-spinner"), l = _("retry-mt-card"), u = _("mw-col"), c = _("mw-button"), d = _("proposed-translation-action-buttons"), g = _("mw-row"), f = _("mw-card");
  return v(), F(f, { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
    default: b(() => [
      p(g, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: b(() => [
          p(i, {
            ref: "header",
            onConfigureOptions: t[0] || (t[0] = (m) => e.$emit("configure-options"))
          }, null, 512),
          p(u, {
            class: he(["sx-sentence-selector__proposed-translation__contents px-5", {
              "sx-sentence-selector__proposed-translation__contents--empty": !o.hasProposedTranslation
            }]),
            style: nt(o.contentsStyle)
          }, {
            default: b(() => [
              o.hasProposedTranslation ? (v(), T("section", {
                key: 0,
                lang: o.targetLanguage,
                dir: o.getDir(o.targetLanguage),
                innerHTML: o.proposedTranslation
              }, null, 8, ux)) : o.mtRequestPending ? (v(), F(r, { key: 1 })) : (v(), F(l, {
                key: 2,
                onConfigureOptions: t[1] || (t[1] = (m) => e.$emit("configure-options")),
                onRetryTranslation: t[2] || (t[2] = (m) => e.$emit("retry-translation"))
              }))
            ], void 0, !0),
            _: 1
          }, 8, ["class", "style"]),
          p(u, {
            ref: "footer",
            shrink: "",
            class: "sx-sentence-selector__proposed-translation__footer"
          }, {
            default: b(() => [
              o.hasProposedTranslation || o.mtRequestPending ? (v(), F(c, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                progressive: "",
                disabled: !o.hasProposedTranslation,
                onClick: t[3] || (t[3] = (m) => e.$emit("edit-translation", o.proposedTranslation))
              }, null, 8, ["icon", "label", "disabled"])) : ne("", !0),
              p(d, ri(Ws(e.$attrs)), null, 16)
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
const gx = /* @__PURE__ */ V(cx, [["render", dx]]), fx = (e) => y(() => {
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
const px = {
  name: "SubSection",
  props: {
    subSection: {
      type: At,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = Z(null), o = fx(e.subSection);
    lt(() => {
      n.value.addEventListener("click", (r) => {
        let l;
        if (e.subSection.isBlockTemplate)
          l = e.subSection;
        else {
          const u = r.composedPath().find((c) => c.classList.contains("cx-segment"));
          if (!u)
            return;
          l = e.subSection.getSentenceById(
            u.dataset.segmentid
          );
        }
        a(l);
      });
    });
    const s = le(), a = (r) => {
      if (r.selected) {
        t("bounce-translation");
        return;
      }
      s.dispatch(
        "application/selectTranslationUnitById",
        r.id
      );
    }, i = y(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, mx = ["innerHTML"];
function hx(e, t, n, o, s, a) {
  return v(), T("div", {
    ref: "subSectionRoot",
    class: he(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, mx);
}
const _x = /* @__PURE__ */ V(px, [["render", hx]]);
const vx = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: Kc,
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
    const t = y(() => ({ "--size": e.size })), n = y(
      () => !e.isTemplateAdapted || e.percentage === 0 ? po : yn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
};
function yx(e, t, n, o, s, a) {
  const i = _("mw-circle-progress-bar"), r = _("mw-icon");
  return v(), T("div", {
    class: "block-template-status-indicator",
    style: nt(o.cssVars)
  }, [
    p(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    p(r, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: nt({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const id = /* @__PURE__ */ V(vx, [["render", yx]]), bx = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: Pe,
    MwRow: Ce,
    MwButton: we,
    MwIcon: qe,
    MwRadioGroup: qc,
    MwRadio: Os,
    MwDivider: ts,
    MwDialog: Ht,
    MwCircleProgressBar: Kc,
    BlockTemplateStatusIndicator: id
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
    const { targetLanguageAutonym: t } = fe(le()), n = y(
      () => !e.isTemplateAdapted || o.value === 0 ? po : yn
    ), o = y(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = wt(), a = y(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), i = y(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), r = y(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: bm,
          color: kt.base30
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Ft,
          color: kt.base30
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: yn,
          color: kt.primary
        });
      else {
        let u;
        e.sourceParamsCount ? u = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : u = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), l.push({
          text: u,
          icon: yn,
          color: kt.primary
        });
      }
      return e.mandatoryMissingParamsCount ? l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: tn,
        color: kt.base30
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Mc,
        color: kt.base30
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: yn,
      mwIconInfo: Oc,
      notes: r
    };
  }
}, Sx = { class: "pa-4" }, wx = ["textContent"], Cx = ["textContent"];
function xx(e, t, n, o, s, a) {
  const i = _("block-template-status-indicator"), r = _("mw-icon"), l = _("mw-col"), u = _("mw-row"), c = _("mw-dialog");
  return v(), F(c, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    onInput: t[0] || (t[0] = (d) => e.$emit("update:active", d))
  }, {
    header: b(() => [
      p(u, {
        justify: "center",
        class: "mt-4"
      }, {
        default: b(() => [
          p(l, { shrink: "" }, {
            default: b(() => [
              n.targetTemplateExists ? (v(), F(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (v(), F(r, {
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
    default: b(() => [
      C("div", Sx, [
        C("h3", {
          textContent: ae(o.statusText)
        }, null, 8, wx),
        C("p", {
          class: "mt-6 text-small",
          textContent: ae(o.statusExplanation)
        }, null, 8, Cx),
        (v(!0), T(ke, null, et(o.notes, (d, g) => (v(), F(u, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: b(() => [
            p(l, { shrink: "" }, {
              default: b(() => [
                p(r, {
                  class: "me-2",
                  icon: d.icon,
                  "icon-color": d.color
                }, null, 8, ["icon", "icon-color"])
              ], void 0, !0),
              _: 2
            }, 1024),
            p(l, {
              textContent: ae(d.text)
            }, null, 8, ["textContent"])
          ], void 0, !0),
          _: 2
        }, 1024))), 128))
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-opacity", "overlay-color"]);
}
const Ex = /* @__PURE__ */ V(bx, [["render", xx]]);
const kx = {
  name: "BlockTemplateAdaptationCard",
  components: {
    SxBlockTemplateStatusDialog: Ex,
    MwSpinner: Tn,
    MwIcon: qe,
    MwCard: jt,
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we,
    ProposedTranslationActionButtons: ad,
    BlockTemplateStatusIndicator: id
  },
  emits: ["edit-translation"],
  setup() {
    const e = le(), {
      selectedContentTranslationUnit: t,
      targetLanguageAutonym: n,
      currentMTProvider: o,
      proposedTranslation: s
    } = fe(e), a = y(() => {
      var j;
      return ((j = t.value) == null ? void 0 : j.blockTemplateTranslatedContent) || s.value;
    }), i = y(
      () => {
        var oe;
        return (oe = t.value) == null ? void 0 : oe.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), r = y(
      () => {
        var oe;
        return !((oe = e.state.application.mtRequestsPending) != null && oe.includes(
          t.value.id
        ));
      }
    ), l = wt(), u = y(
      // Strip HTML comments and return
      () => {
        var oe, j;
        return ((j = (oe = t.value) == null ? void 0 : oe.sourceBlockTemplateName) == null ? void 0 : j.replace(
          /<\!--.*?-->/g,
          ""
        )) || l.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = y(
      () => {
        var oe;
        return (oe = t.value.blockTemplateAdaptationInfo) == null ? void 0 : oe[o.value];
      }
    ), d = y(
      () => {
        var oe, j;
        return ((oe = c.value) == null ? void 0 : oe.adapted) || !!((j = c.value) != null && j.partial);
      }
    ), g = y(() => c.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), f = y(() => c.value ? d.value ? l.i18n("sx-block-template-adaptation-card-edit-button-label") : l.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), m = y(
      () => {
        var oe;
        return Object.keys(((oe = t.value) == null ? void 0 : oe.sourceTemplateParams) || {}).length;
      }
    ), S = y(() => {
      var j;
      const oe = (j = t.value) == null ? void 0 : j.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(oe || {});
    }), x = y(() => S.value.length), k = y(() => {
      const oe = X.value;
      return m.value + oe === 0 ? 100 : x.value / (m.value + oe) * 100 || 0;
    }), D = Z(!1), U = () => {
      D.value = !0;
    }, M = (oe) => oe.filter((j) => !S.value.includes(j)), X = y(() => {
      var j;
      const oe = ((j = c.value) == null ? void 0 : j.mandatoryTargetParams) || [];
      return M(oe).length;
    }), Se = y(() => {
      var j;
      const oe = ((j = c.value) == null ? void 0 : j.optionalTargetParams) || [];
      return M(oe).length;
    });
    return {
      adaptationRatio: k,
      adaptedTemplateCardClass: g,
      blockEditableContent: a,
      editBlockTranslationButtonLabel: f,
      isTemplateAdapted: d,
      mandatoryMissingTargetParamsCount: X,
      mwIconInfo: Oc,
      mwIconPuzzle: vm,
      optionalMissingTargetParamsCount: Se,
      showTemplateStatus: U,
      sourceParamsCount: m,
      sourceTemplateName: u,
      targetLanguageAutonym: n,
      targetParamsCount: x,
      targetTemplateName: i,
      templateStatusDialogOn: D,
      translationLoaded: r
    };
  }
}, Ax = { class: "block-template-adaptation-card__container pa-4" }, Tx = ["textContent"], Dx = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
};
function Lx(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), u = _("block-template-status-indicator"), c = _("mw-button"), d = _("mw-spinner"), g = _("proposed-translation-action-buttons"), f = _("sx-block-template-status-dialog"), m = _("mw-card"), S = be("i18n");
  return v(), F(m, { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
    default: b(() => [
      C("div", Ax, [
        p(l, { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
          default: b(() => [
            p(r, { shrink: "" }, {
              default: b(() => [
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
              default: b(() => [
                zo(ae(o.sourceTemplateName), 1)
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        }),
        o.targetTemplateName ? (v(), T("div", {
          key: 0,
          class: he(["pa-4 mb-4", o.adaptedTemplateCardClass])
        }, [
          p(l, {
            class: "block-template-adaptation-card__body__header ma-0 pb-1",
            align: "start"
          }, {
            default: b(() => [
              H(p(r, { tag: "h5" }, null, 512), [
                [S, void 0, "sx-block-template-adaptation-card-body-header-success"]
              ]),
              p(r, { shrink: "" }, {
                default: b(() => [
                  p(u, {
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
          C("h5", {
            class: "block-template-adaptation-card__body__template-title pb-2",
            textContent: ae(o.targetTemplateName)
          }, null, 8, Tx),
          p(c, {
            class: "px-0",
            type: "text",
            progressive: "",
            label: o.editBlockTranslationButtonLabel,
            onClick: t[0] || (t[0] = (x) => e.$emit("edit-translation", o.blockEditableContent))
          }, null, 8, ["label"])
        ], 2)) : o.translationLoaded ? (v(), T("div", Dx, [
          p(l, {
            class: "block-template-adaptation-card__body__header pb-0 mb-0",
            align: "start"
          }, {
            default: b(() => [
              H(p(r, { tag: "h5" }, null, 512), [
                [S, [
                  o.targetLanguageAutonym
                ], "sx-block-template-adaptation-card-body-header-failure"]
              ]),
              p(r, { shrink: "" }, {
                default: b(() => [
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
        ])) : (v(), F(d, { key: 2 }))
      ]),
      p(g, ri(Ws(e.$attrs)), null, 16),
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
const Px = /* @__PURE__ */ V(kx, [["render", Lx]]);
const Nx = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: es },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = fe(le()), o = wt();
    return { scopeOptions: y(() => [
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
}, Fx = { class: "translated-segment-card-header" };
function Mx(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return v(), T("div", Fx, [
    p(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const Ox = /* @__PURE__ */ V(Nx, [["render", Mx]]), Bx = {
  name: "TranslatedSegmentCardActionButtons",
  components: {
    MwRow: Ce,
    MwButton: we
  },
  emits: ["select-previous-segment", "skip-translation"],
  setup() {
    const { currentSourceSection: e, isSectionTitleSelected: t } = fe(le()), n = y(
      () => e.value.isSelectedTranslationUnitLast
    );
    return {
      mwIconArrowForward: An,
      mwIconPrevious: Zs,
      isLastTranslationUnit: n,
      isSectionTitleSelected: t
    };
  }
};
function Ix(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return v(), F(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
    default: b(() => [
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
const $x = /* @__PURE__ */ V(Bx, [["render", Ix]]);
const Ux = {
  name: "TranslatedSegmentCard",
  components: {
    TranslatedSegmentCardActionButtons: $x,
    MwProgressBar: Gc,
    MwIcon: qe,
    TranslatedSegmentCardHeader: Ox,
    MwCard: jt,
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we
  },
  emits: ["edit-translation"],
  setup() {
    const e = Z("sentence"), {
      isSectionTitleSelected: t,
      currentSourceSection: n,
      selectedContentTranslationUnit: o,
      targetLanguage: s
    } = fe(le()), a = y(() => e.value === "sentence"), i = y(
      () => n.value.subSections.find(
        (k) => k.sentences.some(
          (D) => {
            var U;
            return D.id === ((U = o.value) == null ? void 0 : U.id);
          }
        )
      )
    ), r = y(() => {
      var k;
      return t.value ? n.value.mtProposedTranslationUsedForTitle : a.value ? (k = o.value) == null ? void 0 : k.mtProposedTranslationUsed : i.value.proposedContentForMTValidation;
    }), l = We("colors"), u = l.base80, c = l.red50, d = y(() => t.value ? n.value.translatedTitle : a.value ? o.value.translatedContent : i.value.translatedContent), g = y(
      () => xn.calculateScore(
        d.value,
        r.value,
        s.value
      )
    ), f = y(
      () => xn.getScoreStatus(g.value)
    ), m = y(
      () => `translated-segment-card__modification-stats__percentage--${f.value}`
    ), S = y(() => ({
      failure: g.value === 0 ? null : l.yellow30,
      warning: l.yellow30,
      success: l.green30
    })), x = y(
      () => S.value[f.value]
    );
    return {
      errorColor: c,
      modificationPercentageClass: m,
      mtScore: g,
      mwIconEdit: tn,
      mwIconEllipsis: Qs,
      mwIconRobot: Hc,
      mwIconUserAvatar: cm,
      progressBarBackgroundColor: u,
      scopeSelection: e,
      showSentenceTab: a,
      translation: d,
      userIconColor: x
    };
  }
};
function Rx(e, t, n, o, s, a) {
  const i = _("translated-segment-card-header"), r = _("mw-col"), l = _("mw-icon"), u = _("mw-progress-bar"), c = _("mw-row"), d = _("mw-button"), g = _("translated-segment-card-action-buttons"), f = _("mw-card"), m = be("i18n"), S = be("i18n-html");
  return v(), F(f, { class: "translated-segment-card col shrink pa-0 mb-0" }, {
    default: b(() => [
      p(c, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: b(() => [
          p(i, {
            selection: o.scopeSelection,
            "onUpdate:selection": t[0] || (t[0] = (x) => o.scopeSelection = x)
          }, null, 8, ["selection"]),
          p(r, {
            tag: "section",
            class: "translated-segment-card__body pa-5"
          }, {
            default: b(() => [
              p(c, { class: "ma-0" }, {
                default: b(() => [
                  p(r, {
                    class: "translated-segment-card__modification-stats",
                    grow: ""
                  }, {
                    default: b(() => [
                      H(C("h5", null, null, 512), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                      ]),
                      o.mtScore === 0 ? H((v(), T("p", {
                        key: 0,
                        style: nt({ color: o.errorColor })
                      }, null, 4)), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                      ]) : H((v(), T("p", {
                        key: 1,
                        class: he(o.modificationPercentageClass)
                      }, null, 2)), [
                        [S, [
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
                    default: b(() => [
                      p(c, { class: "ma-0 ms-2" }, {
                        default: b(() => [
                          p(r, {
                            shrink: "",
                            align: "center"
                          }, {
                            default: b(() => [
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
                            default: b(() => [
                              p(u, {
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
                            default: b(() => [
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
              o.showSentenceTab ? (v(), F(d, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-0 mt-4",
                progressive: "",
                onClick: t[1] || (t[1] = (x) => e.$emit("edit-translation", o.translation))
              }, null, 8, ["icon", "label"])) : ne("", !0)
            ], void 0, !0),
            _: 1
          }),
          p(r, { class: "translated-segment-card__actions" }, {
            default: b(() => [
              p(g, ri(Ws(e.$attrs)), null, 16)
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
const Vx = /* @__PURE__ */ V(Ux, [["render", Rx]]), zx = () => {
  const e = le();
  return () => {
    const { currentTranslation: t } = e.state.application, { currentSourceSection: n, selectedContentTranslationUnit: o } = fe(e);
    if (n.value)
      if (t && !o.value) {
        const { lastTranslatedContentTranslationUnit: s } = n.value;
        n.value.selectTranslationUnitById(
          (s == null ? void 0 : s.id) || 0
        ), e.dispatch("application/selectNextTranslationUnit");
      } else
        o.value || e.dispatch("application/selectTranslationUnitById", 0);
  };
};
const jx = {
  name: "SxSentenceSelector",
  components: {
    SxConfirmBackNavigationDialog: NC,
    BlockTemplateAdaptationCard: Px,
    TranslatedSegmentCard: Vx,
    ProposedTranslationCard: gx,
    SubSection: _x,
    SxSentenceSelectorContentHeader: QC,
    MwRow: Ce,
    MwSpinner: Tn,
    MwCol: Pe,
    SxTranslationSelector: KC,
    MwButton: we
  },
  setup() {
    const e = Z(!1), t = Z(!1), n = Z("100%"), o = le(), {
      currentSourcePage: s,
      currentTargetPage: a,
      currentSourceSection: i,
      selectedContentTranslationUnit: r,
      currentMTProvider: l,
      sourceLanguage: u,
      targetLanguage: c
    } = fe(o), d = y(
      () => o.state.application.translationDataLoadingCounter === 0
    ), g = y(
      () => {
        var Le;
        return (Le = i.value) == null ? void 0 : Le.isSelectedTranslationUnitTranslated;
      }
    ), f = y(() => {
      var Le;
      return (Le = i.value) == null ? void 0 : Le.subSections;
    }), m = y(
      () => {
        var Le;
        return (Le = i.value) == null ? void 0 : Le.selectedTranslationUnitOriginalContent;
      }
    ), S = y(
      () => isNaN(n.value) ? n.value : `${n.value}px`
    ), x = qt(), k = zx();
    lt(() => {
      o.dispatch("application/initializeMTProviders"), He(
        d,
        () => K(this, null, function* () {
          d.value && (yield vo(), k());
        }),
        { immediate: !0 }
      ), n.value = window.innerHeight;
    });
    const D = () => o.dispatch("application/selectNextTranslationUnit"), U = () => o.dispatch("application/selectPreviousTranslationUnit"), M = () => {
      x({
        event_type: "editor_segment_add",
        translation_source_language: u.value,
        translation_target_language: c.value
      }), o.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
    }, X = () => {
      t.value = !0, setTimeout(() => {
        t.value = !1;
      }, 100);
    }, Se = mt(), oe = () => {
      const { autoSavePending: Le } = o.state.application;
      if (Le) {
        Ge.value = !0;
        return;
      }
      j();
    }, j = () => K(this, null, function* () {
      o.dispatch("translator/fetchTranslationsByStatus", "draft"), So(null), o.dispatch("application/clearPendingSaveTranslationRequests"), yield Se.push({ name: "dashboard" }), i.value.reset(), o.commit("application/setCurrentSourceSection", null), o.commit("application/setCurrentSectionSuggestion", null);
      const { currentTranslation: Le } = o.state.application;
      Le && (o.commit("application/setCurrentTranslationRestored", !1), o.commit("application/setCurrentTranslation", null));
    }), pe = () => {
      Ne.value || (e.value = !0, o.dispatch(
        "application/translateSelectedTranslationUnitForAllProviders"
      ));
    }, Ae = (Le, Be) => {
      var ue;
      Se.push({
        name: "sx-editor",
        state: {
          content: Le,
          originalContent: m.value,
          title: ((ue = a.value) == null ? void 0 : ue.title) || s.value.title,
          isInitialEdit: Be || null
        }
      });
    }, xe = () => Se.push({ name: "sx-publisher" }), W = () => K(this, null, function* () {
      r.value ? yield o.dispatch("application/translateTranslationUnitById", {
        id: r.value.id,
        provider: l.value
      }) : yield o.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: l.value
      });
    });
    He(r, () => {
      if (!r.value)
        return;
      const Le = r.value.id, Be = Ne.value ? document.getElementById(Le) : document.querySelector(`[data-segmentid='${Le}']`);
      Array.from(Be.getClientRects()).every(
        // use "elementFromPoint" method to get the topmost element
        // at the coordinates of the border box of each line.
        // If the line of the segment is inside the viewport and not
        // hidden by another element (e.g. the proposed translation card),
        // the returned element should match the "segment" element.
        // Note that we only check for the top-left corner of the rectangle, so
        // if a small portion of a line is hidden, the line is still considered
        // to be visible.
        (ge) => document.elementFromPoint(ge.x, ge.y) === Be
      ) || Be.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    });
    const Ne = y(
      () => r.value instanceof At
    ), Ge = Z(!1);
    return {
      applyTranslation: M,
      bounceTranslation: X,
      configureTranslationOptions: pe,
      currentPageSection: i,
      doGoToDashboard: j,
      editTranslation: Ae,
      getDir: Me.getDir,
      goToDashboard: oe,
      isBlockTemplateSelected: Ne,
      isSelectedTranslationUnitTranslated: g,
      isTranslationOptionsActive: e,
      mwIconArrowPrevious: Ti,
      previewTranslation: xe,
      retryTranslation: W,
      selectPreviousTranslationUnit: U,
      sentenceSelectorStyle: S,
      shouldProposedTranslationBounce: t,
      skipTranslation: D,
      sourceLanguage: u,
      subSections: f,
      translationDataReady: d,
      verifyBackNavigationDialogOn: Ge
    };
  }
}, Hx = { class: "sx-sentence-selector__header-title" }, qx = { class: "sx-sentence-selector__section-contents px-4" };
function Gx(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), u = _("sx-sentence-selector-content-header"), c = _("sub-section"), d = _("translated-segment-card"), g = _("proposed-translation-card"), f = _("block-template-adaptation-card"), m = _("mw-spinner"), S = _("sx-translation-selector"), x = _("sx-confirm-back-navigation-dialog"), k = be("i18n");
  return v(), T("section", {
    class: "sx-sentence-selector fill-height column ma-0 no-wrap",
    style: nt(o.sentenceSelectorStyle)
  }, [
    p(l, { class: "sx-sentence-selector__header ma-0 py-2" }, {
      default: b(() => [
        p(r, { shrink: "" }, {
          default: b(() => [
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
          default: b(() => [
            H(C("h4", Hx, null, 512), [
              [k, void 0, "cx-sx-sentence-selector-header-title"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(r, {
          shrink: "",
          class: "px-3"
        }, {
          default: b(() => [
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
    o.translationDataReady ? (v(), F(l, {
      key: 0,
      tag: "section",
      direction: "column",
      align: "start",
      justify: "between",
      class: "sx-sentence-selector__body fill-height ma-0"
    }, {
      default: b(() => [
        p(r, {
          dir: o.getDir(o.sourceLanguage),
          lang: o.sourceLanguage,
          class: "sx-sentence-selector__section"
        }, {
          default: b(() => [
            p(u),
            C("div", qx, [
              (v(!0), T(ke, null, et(o.subSections, (D) => (v(), F(c, {
                id: D.id,
                key: `sub-section-${D.id}`,
                "sub-section": D,
                onBounceTranslation: o.bounceTranslation
              }, null, 8, ["id", "sub-section", "onBounceTranslation"]))), 128))
            ])
          ], void 0, !0),
          _: 1
        }, 8, ["dir", "lang"]),
        !o.isBlockTemplateSelected && o.isSelectedTranslationUnitTranslated ? (v(), F(d, {
          key: 0,
          onEditTranslation: t[0] || (t[0] = (D) => o.editTranslation(D, !1)),
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : o.isBlockTemplateSelected ? (v(), F(f, {
          key: 2,
          onEditTranslation: o.editTranslation,
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onEditTranslation", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment"])) : (v(), F(g, {
          key: 1,
          class: he({ "mb-0": !o.shouldProposedTranslationBounce }),
          onConfigureOptions: o.configureTranslationOptions,
          onEditTranslation: t[1] || (t[1] = (D) => o.editTranslation(D, !0)),
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit,
          onRetryTranslation: o.retryTranslation
        }, null, 8, ["class", "onConfigureOptions", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment", "onRetryTranslation"]))
      ], void 0),
      _: 1
    })) : (v(), F(l, {
      key: 1,
      column: "",
      class: "grow"
    }, {
      default: b(() => [
        p(m, { class: "mt-0" })
      ], void 0),
      _: 1
    })),
    p(S, {
      active: o.isTranslationOptionsActive,
      "onUpdate:active": t[2] || (t[2] = (D) => o.isTranslationOptionsActive = D)
    }, null, 8, ["active"]),
    p(x, {
      modelValue: o.verifyBackNavigationDialogOn,
      "onUpdate:modelValue": t[3] || (t[3] = (D) => o.verifyBackNavigationDialogOn = D),
      onDiscardTranslation: o.doGoToDashboard
    }, null, 8, ["modelValue", "onDiscardTranslation"])
  ], 4);
}
const Kx = /* @__PURE__ */ V(jx, [["render", Gx]]);
const Wx = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: Kx
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function Xx(e, t, n, o, s, a) {
  const i = _("sx-sentence-selector");
  return v(), T("main", {
    class: he(["sx-sentence-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const Yx = /* @__PURE__ */ V(Wx, [["render", Xx]]), Jx = `<svg width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
`, Zx = `<svg  width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
const Qx = {
  name: "SxQuickTutorial",
  components: {
    MwButton: we,
    MwRow: Ce
  },
  data: () => ({
    mwIconArrowForward: An,
    totalSteps: 2,
    activeStep: 1,
    tutorialSvgMT: Jx,
    tutorialSvgSections: Zx
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
}, e8 = { class: "sx-quick-tutorial" }, t8 = { class: "sx-quick-tutorial__main-point py-9 px-6" }, n8 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, o8 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, s8 = { class: "sx-quick-tutorial__illustration" }, a8 = ["innerHTML"], i8 = ["innerHTML"], r8 = { class: "sx-quick-tutorial__step-indicator py-3" }, l8 = ["onClick"], c8 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, u8 = {
  key: "secondary-point-1",
  class: "ma-0"
}, d8 = {
  key: "secondary-point-2",
  class: "ma-0"
}, g8 = { class: "sx-quick-tutorial__action-button pt-4 pb-6" };
function f8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row"), l = be("i18n");
  return v(), T("section", e8, [
    p(r, {
      direction: "column",
      class: "sx-quick-tutorial__body-container ma-0"
    }, {
      default: b(() => [
        C("section", t8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? H((v(), T("h2", n8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-1"]
              ]) : a.isActiveStep(2) ? H((v(), T("h2", o8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-2"]
              ]) : ne("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        C("section", s8, [
          p(vn, { name: "mw-ui-animation-slide-left" }, {
            default: b(() => [
              a.isActiveStep(1) ? (v(), T("div", {
                key: "illustration-1",
                innerHTML: e.tutorialSvgSections
              }, null, 8, a8)) : a.isActiveStep(2) ? (v(), T("div", {
                key: "illustration-2",
                innerHTML: e.tutorialSvgMT
              }, null, 8, i8)) : ne("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        C("div", r8, [
          (v(!0), T(ke, null, et(e.totalSteps, (u) => (v(), T("span", {
            key: `dot-${u}`,
            class: he(["dot mx-1", { "dot-active": a.isActiveStep(u) }]),
            role: "button",
            onClick: (c) => e.activeStep = u
          }, null, 10, l8))), 128))
        ]),
        C("section", c8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? H((v(), T("h3", u8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-1"]
              ]) : a.isActiveStep(2) ? H((v(), T("h3", d8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-2"]
              ]) : ne("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        C("div", g8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? (v(), F(i, {
                key: "quick-tutorial-action-button-1",
                class: "px-8 mx-4",
                icon: e.mwIconArrowForward,
                progressive: !0,
                onClick: a.goToNextStep
              }, null, 8, ["icon", "onClick"])) : a.isActiveStep(2) ? (v(), F(i, {
                key: "quick-tutorial-action-button-2",
                class: "mx-4",
                label: e.$i18n("sx-quick-tutorial-translate-button-label"),
                progressive: !0,
                onClick: a.completeTutorial
              }, null, 8, ["label", "onClick"])) : ne("", !0)
            ], void 0, !0),
            _: 1
          })
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const p8 = /* @__PURE__ */ V(Qx, [["render", f8]]);
const m8 = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: p8
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function h8(e, t, n, o, s, a) {
  const i = _("sx-quick-tutorial");
  return v(), T("main", {
    class: he(["sx-quick-tutorial-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const _8 = /* @__PURE__ */ V(m8, [["render", h8]]);
function v8(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = Re.getPageUrl(t, o.title), o.target = "_blank";
}
const y8 = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: oh },
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
    const t = Z(null), n = Z(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return lt(() => {
      n.value = 2 * o(), v8(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, b8 = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, S8 = { class: "sx-editor__original-content-panel__header mb-2" }, w8 = ["lang", "dir", "innerHTML"];
function C8(e, t, n, o, s, a) {
  const i = _("mw-expandable-content"), r = be("i18n");
  return v(), T("section", b8, [
    H(C("h5", S8, null, 512), [
      [r, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    p(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: b(() => [
        C("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, w8)
      ], void 0),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const x8 = /* @__PURE__ */ V(y8, [["render", C8]]), E8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g id="happy-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
            <circle id="Oval" fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
            <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" id="Mask" fill="#3366CC"></path>
        </g>
    </g>
</svg>
`;
const k8 = {
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
    const { targetLanguage: t } = fe(le()), n = y(
      () => xn.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = y(() => {
      const a = xn.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = y(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: E8,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, A8 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, T8 = { class: "sx-editor__feedback-overlay-content px-4" }, D8 = ["innerHTML"], L8 = { class: "sx-editor__feedback-overlay-content__title" }, P8 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function N8(e, t, n, o, s, a) {
  const i = be("i18n"), r = be("i18n-html");
  return n.showFeedback ? (v(), T("div", A8, [
    C("div", T8, [
      C("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, D8),
      H(C("h2", L8, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      H(C("p", P8, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      H(C("p", {
        class: he(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [r, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : ne("", !0);
}
const F8 = /* @__PURE__ */ V(k8, [["render", N8]]);
const M8 = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: F8,
    MwRow: Ce,
    SxEditorOriginalContent: x8,
    VisualEditor: Xv,
    MwSpinner: Tn
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Z(!1), n = mt(), o = le(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: r, content: l, originalContent: u, title: c } = history.state, d = Z(null), g = Z(!1), f = qt(), { targetLanguage: m, sourceLanguage: S } = fe(o), x = y(
      () => xn.calculateScore(
        d.value,
        l,
        m.value
      )
    ), k = (D) => K(this, null, function* () {
      d.value = D, g.value = !0;
      const U = new Promise((X) => setTimeout(X, 2e3));
      let M = Promise.resolve();
      i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        D
      ) : (x.value === 0 && r && f({
        event_type: "editor_segment_add",
        translation_source_language: S.value,
        translation_target_language: m.value
      }), M = o.dispatch(
        "application/applyEditedTranslationToSelectedTranslationUnit",
        D
      )), yield Promise.all([U, M]), g.value = !1, a();
    });
    return {
      closeEditor: a,
      content: l,
      editedTranslation: d,
      editorReady: t,
      getDir: Me.getDir,
      sourceLanguage: S,
      targetLanguage: m,
      onEditorReady: s,
      onEditCompleted: k,
      originalContent: u,
      showFeedback: g,
      title: c
    };
  }
}, O8 = { class: "sx-editor__editing-surface-container grow" };
function B8(e, t, n, o, s, a) {
  const i = _("sx-editor-original-content"), r = _("mw-spinner"), l = _("edit-complete-feedback"), u = _("visual-editor"), c = _("mw-row");
  return v(), F(c, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: b(() => [
      o.originalContent ? (v(), F(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : ne("", !0),
      o.editorReady ? ne("", !0) : (v(), F(r, { key: 1 })),
      C("div", O8, [
        p(l, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        p(u, {
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
const I8 = /* @__PURE__ */ V(M8, [["render", B8]]);
const $8 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: I8
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
function U8(e, t, n, o, s, a) {
  const i = _("sx-editor");
  return v(), T("main", {
    class: he(["sx-editor-view", a.classes])
  }, [
    p(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const R8 = /* @__PURE__ */ V($8, [["render", U8]]);
const V8 = {
  name: "SxPublisherHeader",
  components: { MwCol: Pe, MwButton: we, MwRow: Ce },
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
      mwIconCheck: yn,
      mwIconClose: Ft,
      onClose: () => e.push({ name: "sx-sentence-selector" })
    };
  }
};
function z8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), u = be("i18n");
  return v(), F(l, { class: "ma-0 sx-publisher__header" }, {
    default: b(() => [
      p(r, { shrink: "" }, {
        default: b(() => [
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
        [u, void 0, "cx-sx-publisher-header-title"]
      ]),
      p(r, { shrink: "" }, {
        default: b(() => [
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
const j8 = /* @__PURE__ */ V(V8, [["render", z8]]), H8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-launching</title>
    <defs>
        <path d="M52.8,74.8 C52.8,79.64 44,83.6 44,83.6 C44,83.6 35.2,79.64 35.2,74.8 L52.8,74.8 Z M44,30.8 C40.3939316,30.707512 37.49251,27.806064 37.4,24.2 C37.4,20.554908 40.3549256,17.6 44,17.6 C47.645092,17.6 50.6,20.554908 50.6,24.2 C50.507468,27.806064 47.606064,30.707512 44,30.8 Z M58.52,51.48 C62.04,34.76 55.88,4.4 44,4.4 C32.12,4.4 25.52,33.88 29.04,50.6 L22,66 L33.88,66 L35.2,70.4 L52.8,70.4 C53.68,69.08 53.24,68.2 54.12,66 L66,66 L58.52,51.48 Z" id="path-1"></path>
    </defs>
    <g id="publishing-launching" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" fill="#EAF3FF">
            <circle id="Oval" cx="68" cy="68" r="68"></circle>
        </g>
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
</svg>`, q8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-success</title>
    <defs>
        <polygon id="path-1" points="29.5385666 61.8098361 10.7522184 42.6688525 4.4 49.1409836 29.5385666 74.8 83.6 19.7180328 77.2477816 13.2"></polygon>
    </defs>
    <g id="publishing-success" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" fill="#D5FDF4">
            <circle id="Oval" cx="68" cy="68" r="68"></circle>
        </g>
        <g id="🔣-Icon/Interactions/check" transform="translate(24.000000, 24.000000)">
            <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
            </mask>
            <use id="Mask" fill="#000000" fill-rule="evenodd" xlink:href="#path-1"></use>
            <g id="🎨-Color/Green50-#14866d" mask="url(#mask-2)" fill="#14866d" fill-rule="evenodd">
                <rect id="Rectangle-1" x="0" y="0" width="88" height="88"></rect>
            </g>
        </g>
    </g>
</svg>`, pl = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g id="publishing-failure" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" fill="#FEE7E6">
            <circle id="Oval" cx="68" cy="68" r="68"></circle>
        </g>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" id="Mask" fill="#DD3333"></path>
    </g>
</svg>`;
const G8 = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: Ht, MwRow: Ce, MwCol: Pe },
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
        svg: H8,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: q8,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: pl,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: pl,
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
}, K8 = ["innerHTML"], W8 = ["textContent"], X8 = ["textContent"];
function Y8(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-row"), l = _("mw-dialog");
  return n.active ? (v(), F(l, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: b(() => [
      p(r, { class: "ma-4" }, {
        default: b(() => [
          p(i, null, {
            default: b(() => [
              C("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, K8),
              C("h2", {
                textContent: ae(a.animationTitle)
              }, null, 8, W8),
              C("p", {
                class: "ma-0",
                textContent: ae(a.animationSubtitle)
              }, null, 8, X8)
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  }, 8, ["overlay-opacity"])) : ne("", !0);
}
const J8 = /* @__PURE__ */ V(G8, [["render", Y8]]);
const Z8 = {
  name: "SxPublisherCaptchaDialog",
  components: { MwInput: Pi, MwDialog: Ht, MwRow: Ce, MwCol: Pe, MwButton: we, MwDivider: ts },
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: pu,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = Z(""), o = () => t("close"), s = () => t("publish", n.value), a = We("breakpoints"), i = y(() => a.value.mobile);
    return {
      captchaInput: n,
      close: o,
      fullscreen: i,
      mwIconCheck: yn,
      mwIconClose: Ft,
      publish: s
    };
  }
}, Q8 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, eE = ["src"], tE = ["textContent"], nE = /* @__PURE__ */ C("p", { class: "mt-0" }, null, -1);
function oE(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), u = _("mw-divider"), c = _("mw-input"), d = _("mw-dialog"), g = be("i18n");
  return n.active && n.captchaDetails ? (v(), F(d, {
    key: 0,
    "overlay-opacity": 0.65,
    fullscreen: o.fullscreen,
    class: "sx-publisher__captcha-dialog"
  }, {
    header: b(() => [
      p(l, {
        class: "mw-ui-dialog__header ma-0",
        align: "stretch"
      }, {
        default: b(() => [
          p(r, { shrink: "" }, {
            default: b(() => [
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
            default: b(() => [
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
      p(u)
    ]),
    default: b(() => [
      C("div", Q8, [
        n.captchaDetails.type === "image" ? (v(), T("img", {
          key: 0,
          class: "sx-publisher__captcha-dialog__puzzle-image",
          src: n.captchaDetails.url
        }, null, 8, eE)) : (v(), T("p", {
          key: 1,
          textContent: ae(n.captchaDetails.question)
        }, null, 8, tE)),
        nE,
        p(l, { class: "ma-0" }, {
          default: b(() => [
            p(r, null, {
              default: b(() => [
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
  }, 8, ["overlay-opacity", "fullscreen"])) : ne("", !0);
}
const sE = /* @__PURE__ */ V(Z8, [["render", oE]]);
const aE = {
  name: "SxPublishOptionSelector",
  components: {
    MwButton: we,
    MwRadioGroup: qc,
    MwRadio: Os,
    MwDivider: ts,
    MwDialog: Ht
  },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = le(), o = y(
      () => n.state.application.publishTarget
    ), s = y(() => n.state.translator.isAnon), a = wt(), { currentSourceSection: i } = fe(n), r = y(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-label") : a.i18n("cx-sx-publisher-new-section-option-label")
    ), l = y(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-details") : a.i18n("cx-sx-publisher-new-section-option-details")
    ), u = y(() => [
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
    ]), c = (f) => f === u.value.length - 1 ? "mb-1" : "mb-4", d = () => t("update:active", !1);
    return {
      getMarginBottomClassByOptionIndex: c,
      isAnon: s,
      mwIconArrowPrevious: Ti,
      onPublishOptionsClose: d,
      publishOptions: u,
      selectedOption: o,
      updateOption: (f) => {
        const m = f.target.value;
        n.commit("application/setPublishTarget", m), d();
      }
    };
  }
}, iE = { class: "mw-ui-dialog__header" }, rE = { class: "row ma-0 pa-4" }, lE = { class: "col shrink justify-center" }, cE = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, uE = { class: "mb-0" }, dE = { class: "pa-4" }, gE = ["textContent"];
function fE(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-divider"), l = _("mw-radio"), u = _("mw-radio-group"), c = _("mw-dialog"), d = be("i18n");
  return v(), F(c, {
    value: n.active,
    class: "sx-publisher__publish-options",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    onInput: t[0] || (t[0] = (g) => e.$emit("update:active", g)),
    onClose: o.onPublishOptionsClose
  }, {
    header: b(() => [
      C("div", iE, [
        C("div", rE, [
          C("div", lE, [
            p(i, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconArrowPrevious,
              onClick: o.onPublishOptionsClose
            }, null, 8, ["icon", "onClick"])
          ]),
          C("div", cE, [
            H(C("h4", uE, null, 512), [
              [d, void 0, "cx-sx-publisher-preview-options-title"]
            ])
          ])
        ]),
        p(r)
      ])
    ]),
    default: b(() => [
      C("div", dE, [
        p(u, {
          value: o.selectedOption,
          name: "publish-options",
          onInput: o.updateOption
        }, {
          default: b(() => [
            (v(!0), T(ke, null, et(o.publishOptions, (g, f) => (v(), T(ke, {
              key: g.label
            }, [
              p(l, {
                class: "pa-0 my-1",
                label: g.label,
                "input-value": g.value,
                disabled: g.disabled
              }, null, 8, ["label", "input-value", "disabled"]),
              C("p", {
                class: he(["complementary ms-7 mt-0", o.getMarginBottomClassByOptionIndex(f)]),
                textContent: ae(g.details)
              }, null, 10, gE)
            ], 64))), 128))
          ], void 0, !0),
          _: 1
        }, 8, ["value", "onInput"])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-opacity", "overlay-color", "onClose"]);
}
const pE = /* @__PURE__ */ V(aE, [["render", fE]]);
const mE = {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton: we,
    MwCol: Pe,
    MwRow: Ce,
    MwMessage: Nm,
    MwIcon: qe
  },
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = Z(0), n = Z(null);
    He(n, () => {
      var S;
      const m = (S = n.value) == null ? void 0 : S.$el;
      if (m instanceof HTMLElement) {
        const x = m.querySelector("a");
        x && x.setAttribute("target", "_blank");
      }
    });
    const o = y(
      () => {
        var m;
        return (m = e.publishFeedbackMessages) == null ? void 0 : m[t.value];
      }
    ), s = y(() => {
      var m;
      return ((m = o.value) == null ? void 0 : m.status) || "default";
    }), a = y(() => {
      switch (s.value) {
        case "warning":
          return po;
        case "error":
          return $r;
        default:
          return Ya;
      }
    }), i = y(() => s.value === "default"), r = y(
      () => i.value ? "notice" : s.value
    ), l = y(
      () => `sx-publisher__review-info--${r.value}`
    ), u = wt(), c = y(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.text;
    }), d = y(
      () => {
        var m;
        return ((m = o.value) == null ? void 0 : m.title) || u.i18n("cx-sx-publisher-review-info-error");
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
      messageTitle: d,
      messageType: r,
      mwIconAlert: po,
      mwIconArrowForward: An,
      mwIconBlock: $r,
      mwIconEye: Ya,
      mwIconPrevious: Zs,
      reviewIcon: a,
      reviewInfoClass: l,
      status: s
    };
  }
}, hE = { class: "sx-publisher__review-info__content" }, _E = {
  key: 0,
  class: "complementary ma-0"
}, vE = ["textContent"], yE = ["textContent"];
function bE(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), u = _("mw-row"), c = _("mw-message"), d = be("i18n-html");
  return v(), F(c, {
    type: o.messageType,
    class: he(["sx-publisher__review-info ma-0 pa-4", o.reviewInfoClass]),
    inline: o.isMessageInline
  }, {
    icon: b(() => [
      p(i, {
        icon: o.reviewIcon,
        class: "shrink mw-ui-message__icon items-start"
      }, null, 8, ["icon"])
    ]),
    default: b(() => [
      C("div", hE, [
        o.status === "default" ? H((v(), T("p", _E, null, 512)), [
          [d, void 0, "cx-sx-publisher-review-info"]
        ]) : (v(), T(ke, { key: 1 }, [
          C("h5", {
            textContent: ae(o.messageTitle)
          }, null, 8, vE),
          C("p", {
            textContent: ae(o.messageText)
          }, null, 8, yE),
          p(u, {
            justify: "between",
            class: "ma-0"
          }, {
            default: b(() => [
              H(p(r, {
                ref: "learnMoreContainer",
                class: "sx-publisher__review-info__learn-more-anchor"
              }, null, 512), [
                [d, void 0, "cx-sx-publisher-review-info-learn-more"]
              ]),
              n.publishFeedbackMessages.length > 1 ? (v(), F(r, {
                key: 0,
                class: "sx-publisher__review-info__navigation-buttons justify-end",
                align: "center"
              }, {
                default: b(() => [
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
              })) : ne("", !0)
            ], void 0, !0),
            _: 1
          })
        ], 64))
      ])
    ], void 0),
    _: 1
  }, 8, ["type", "class", "inline"]);
}
const SE = /* @__PURE__ */ V(mE, [["render", bE]]), ml = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t.innerText;
}, wE = (e, t, n, o) => K(void 0, null, function* () {
  if (n.value) {
    t.value = !1;
    return;
  }
  const {
    currentSourceSection: s,
    sourceLanguage: a,
    targetLanguage: i,
    currentSourcePage: r
  } = fe(e), l = e.getters["application/getTargetPageTitleForPublishing"], u = e.getters["application/isSandboxTarget"], c = r.value.title, d = new mw.Title(c), g = mw.config.get("wgNamespaceIds");
  if (s.value.isLeadSection && !u && d.getNamespaceId() !== g.user)
    try {
      yield oa.addWikibaseLink(
        a.value,
        i.value,
        c,
        l
      );
    } catch (f) {
      mw.log.error("Error while adding wikibase link", f);
    }
  if (!o) {
    const f = "[CX] Target title is empty after successful publishing";
    throw mw.log.error(f), new Error(f);
  }
  location.href = fu(decodeURIComponent(o), {
    "sx-published-section": ml(s.value.title),
    "sx-source-page-title": ml(r.value.title),
    "sx-source-language": a.value,
    "sx-target-language": i.value
  });
}), CE = (e) => {
  const t = Z(!1), n = Z("pending"), o = Z(!1), s = Z(!1), a = Z(null), i = Z([]), r = y(
    () => i.value.some((d) => d.isError)
  );
  return He(o, (d) => {
    d || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (d = null) => K(void 0, null, function* () {
      var m;
      n.value = "pending", t.value = !0;
      const { publishFeedbackMessage: g, targetTitle: f } = yield e.dispatch(
        "translator/publishTranslation",
        { captchaId: (m = a.value) == null ? void 0 : m.id, captchaAnswer: d }
      );
      if (g && g.type === "captcha") {
        a.value = g.details, t.value = !1, s.value = !0;
        return;
      } else
        g && (i.value.push(g), i.value.sort((S, x) => +x.isError - +S.isError));
      a.value = null, n.value = r.value ? "failure" : "success", setTimeout(
        () => wE(
          e,
          t,
          r,
          f
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
}, xE = (e, t) => {
  const {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = fe(e), a = y(
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
const EE = {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo: SE,
    SxPublishOptionSelector: pE,
    SxPublisherAnimationDialog: J8,
    SxPublisherCaptchaDialog: sE,
    MwButton: we,
    SxPublisherHeader: j8,
    MwRow: Ce,
    MwCol: Pe
  },
  setup() {
    const e = le(), { currentSourceSection: t } = fe(e), n = y(() => {
      var x;
      return (x = t.value) == null ? void 0 : x.title;
    }), o = wt(), s = y(() => e.getters["application/isSandboxTarget"] ? o.i18n(
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
      isPublishDialogActive: u,
      isPublishingDisabled: c,
      onCaptchaDialogClose: d,
      publishOptionsOn: g,
      publishFeedbackMessages: f,
      publishStatus: m
    } = CE(e);
    lt(() => K(this, null, function* () {
      const x = yield e.dispatch("translator/validateMT");
      x && f.value.push(x);
    }));
    const { editTranslation: S } = xE(e, mt());
    return {
      captchaDetails: a,
      captchaDialogOn: i,
      configureTranslationOptions: r,
      currentPageSection: t,
      doPublish: l,
      editTranslation: S,
      isPublishDialogActive: u,
      isPublishingDisabled: c,
      mwIconEdit: tn,
      mwIconSettings: _m,
      onCaptchaDialogClose: d,
      panelResult: s,
      publishFeedbackMessages: f,
      publishOptionsOn: g,
      publishStatus: m,
      translatedTitle: n
    };
  }
}, kE = { class: "sx-publisher" }, AE = { class: "sx-publisher__publish-panel pa-4" }, TE = { class: "mb-2" }, DE = ["innerHTML"], LE = { class: "sx-publisher__section-preview pa-5" }, PE = ["innerHTML"];
function NE(e, t, n, o, s, a) {
  const i = _("sx-publisher-header"), r = _("mw-button"), l = _("mw-col"), u = _("mw-row"), c = _("sx-publisher-review-info"), d = _("sx-publish-option-selector"), g = _("sx-publisher-captcha-dialog"), f = _("sx-publisher-animation-dialog"), m = be("i18n");
  return v(), T("section", kE, [
    p(i, {
      "is-publishing-disabled": o.isPublishingDisabled,
      onPublishTranslation: o.doPublish
    }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
    C("div", AE, [
      H(C("h5", TE, null, 512), [
        [m, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
      ]),
      C("h6", {
        class: "mb-2",
        innerHTML: o.panelResult
      }, null, 8, DE),
      p(u, {
        justify: "end",
        class: "ma-0"
      }, {
        default: b(() => [
          p(l, { shrink: "" }, {
            default: b(() => [
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
    C("section", LE, [
      p(u, { class: "pb-5 ma-0" }, {
        default: b(() => [
          p(l, {
            tag: "h2",
            grow: "",
            class: "sx-publisher__section-preview__title ma-0",
            innerHTML: o.translatedTitle
          }, null, 8, ["innerHTML"]),
          p(l, { shrink: "" }, {
            default: b(() => [
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
      C("div", {
        innerHTML: o.currentPageSection.translationHtml
      }, null, 8, PE)
    ]),
    p(d, {
      active: o.publishOptionsOn,
      "onUpdate:active": t[0] || (t[0] = (S) => o.publishOptionsOn = S)
    }, null, 8, ["active"]),
    p(g, {
      active: o.captchaDialogOn,
      "captcha-details": o.captchaDetails,
      onClose: o.onCaptchaDialogClose,
      onPublish: t[1] || (t[1] = (S) => o.doPublish(S))
    }, null, 8, ["active", "captcha-details", "onClose"]),
    p(f, {
      active: o.isPublishDialogActive,
      status: o.publishStatus
    }, null, 8, ["active", "status"])
  ]);
}
const FE = /* @__PURE__ */ V(EE, [["render", NE]]);
const ME = {
  name: "SxPublisherView",
  components: {
    SxPublisher: FE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function OE(e, t, n, o, s, a) {
  const i = _("sx-publisher");
  return v(), T("main", {
    class: he(["sx-publisher-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const BE = /* @__PURE__ */ V(ME, [["render", OE]]);
const IE = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Ni, MwIcon: qe, MwRow: Ce, MwCol: Pe },
  props: {
    suggestion: {
      type: bo,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: gm, mwIconLanguage: zc, mwIconArticle: Li, getDir: Me.getDir };
  }
}, $E = ["textContent"], UE = ["textContent"], RE = ["textContent"];
function VE(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-icon"), u = _("mw-row");
  return v(), F(u, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: b(() => [
      p(r, { shrink: "" }, {
        default: b(() => [
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
        default: b(() => [
          p(u, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: b(() => [
              p(r, {
                shrink: "",
                class: "mb-1"
              }, {
                default: b(() => [
                  C("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: ae(n.suggestion.title)
                  }, null, 8, $E)
                ], void 0, !0),
                _: 1
              }),
              p(r, {
                shrink: "",
                class: "mb-1"
              }, {
                default: b(() => [
                  C("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: ae(n.suggestion.description)
                  }, null, 8, UE)
                ], void 0, !0),
                _: 1
              }),
              p(r, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: b(() => [
                  p(l, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  C("small", {
                    textContent: ae(n.suggestion.langLinksCount)
                  }, null, 8, RE)
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
const rd = /* @__PURE__ */ V(IE, [["render", VE]]), zE = (e, t) => {
  const o = Z([]), s = Z(!1), a = y(
    () => o.value.slice(0, 4)
  ), i = $i(() => K(void 0, null, function* () {
    try {
      o.value = yield os.searchPagesByTitlePrefix(
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
const jE = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: rd, MwCard: jt, MwSpinner: Tn },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = fe(
      le()
    ), o = y(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = zE(
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
}, HE = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function qE(e, t, n, o, s, a) {
  const i = _("mw-spinner"), r = _("sx-search-article-suggestion"), l = _("mw-card"), u = be("i18n");
  return v(), F(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: b(() => [
      o.searchResultsLoading ? (v(), F(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? H((v(), T("p", HE, null, 512)), [
        [u, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : ne("", !0),
      (v(!0), T(ke, null, et(o.searchResultsSlice, (c) => (v(), F(r, {
        key: c.pageid,
        suggestion: c,
        onClick: (d) => e.$emit("suggestion-clicked", c)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const GE = /* @__PURE__ */ V(jE, [["render", qE]]);
const KE = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: rd, MwCard: jt },
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
  computed: dt({}, Bh({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, WE = ["textContent"];
function XE(e, t, n, o, s, a) {
  const i = _("sx-search-article-suggestion"), r = _("mw-card");
  return v(), F(r, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: b(() => [
      C("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: ae(n.cardTitle)
      }, null, 8, WE)
    ]),
    default: b(() => [
      (v(!0), T(ke, null, et(n.suggestions, (l) => (v(), F(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (u) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const YE = /* @__PURE__ */ V(KE, [["render", XE]]), JE = (e, t) => y(() => {
  const o = {
    value: "other",
    props: {
      icon: Qs,
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
}), ZE = (e, t, n) => y(() => {
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
}), QE = () => {
  const e = ed(), t = rs(), n = le(), { sourceLanguage: o, targetLanguage: s } = fe(n), a = (u, c, d) => {
    const g = n.getters["translator/getTranslation"](
      u,
      ta.LEAD_SECTION_DUMMY_TITLE,
      o.value,
      s.value
    );
    return g ? t(g) : e(u, c, d);
  };
  return {
    startRecentlyEditedSectionTranslation: (u) => a(
      u.title,
      "sx-article-search",
      "suggestion_recent_edit"
    ),
    startNearbySectionTranslation: (u) => a(
      u.title,
      "sx-article-search",
      "suggestion_nearby"
    ),
    startSearchResultSectionTranslation: (u) => a(
      u.title,
      "sx-article-search",
      "search_result"
    )
  };
};
const e2 = {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard: YE,
    SearchResultsCard: GE,
    MwInput: Pi,
    MwDialog: Ht,
    MwLanguageSelector: Ju,
    MwButtonGroup: es,
    MwRow: Ce,
    MwCol: Pe,
    MwButton: we
  },
  setup() {
    const e = Z(""), t = Z(!1), n = Z(null), o = Z(!1), s = Z([]), a = le(), { sourceLanguage: i, targetLanguage: r } = fe(a), { supportedLanguageCodes: l } = is(), u = ZE(
      i,
      r,
      s
    ), c = JE(
      i,
      u
    ), d = mt(), g = qi(a);
    lt(() => K(this, null, function* () {
      var xe;
      yield ju(), g();
      try {
        s.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (W) {
      }
      (xe = n.value) == null || xe.focus();
    }));
    const f = () => {
      d.push({ name: "dashboard" });
    }, m = Hu(a), S = (xe) => m(xe, r.value), x = (xe) => {
      if (xe === "other") {
        o.value = !0;
        return;
      }
      S(xe);
    };
    He(i, () => a.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const k = qt();
    He(e, () => {
      t.value || (t.value = !0, k({
        event_type: "dashboard_search",
        translation_source_language: i.value,
        translation_target_language: r.value
      }));
    });
    const D = () => {
      o.value = !1;
    }, U = (xe) => {
      o.value = !1, s.value.push(xe), x(xe);
    }, M = y(
      () => a.getters["mediawiki/getRecentlyEditedPages"]
    ), X = y(
      () => a.getters["mediawiki/getNearbyPages"]
    ), Se = We("breakpoints"), oe = y(() => Se.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: j,
      startNearbySectionTranslation: pe,
      startSearchResultSectionTranslation: Ae
    } = QE();
    return {
      supportedLanguageCodes: l,
      close: f,
      fullscreen: oe,
      mwIconClose: Ft,
      mwIconSearch: Uc,
      nearbyPages: X,
      onSourceLanguageDialogClose: D,
      onSourceLanguageSelected: U,
      recentlyEditedPages: M,
      searchInput: e,
      searchInputRef: n,
      sourceLanguage: i,
      sourceLanguageOptions: c,
      sourceLanguageSelectOn: o,
      startNearbySectionTranslation: pe,
      startRecentlyEditedSectionTranslation: j,
      startSearchResultSectionTranslation: Ae,
      suggestedSourceLanguages: u,
      updateSelection: x
    };
  }
}, t2 = { class: "sx-article-search" }, n2 = { class: "mb-0" }, o2 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
};
function s2(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), u = _("mw-input"), c = _("mw-button-group"), d = _("article-suggestions-card"), g = _("search-results-card"), f = _("mw-language-selector"), m = _("mw-dialog"), S = be("i18n");
  return v(), T("section", t2, [
    p(l, {
      class: "sx-article-search__header ma-0 py-3",
      align: "stretch",
      justify: "start"
    }, {
      default: b(() => [
        p(i, {
          grow: "",
          class: "px-4",
          align: "center"
        }, {
          default: b(() => [
            H(C("h5", n2, null, 512), [
              [S, void 0, "cx-sx-article-search-header"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, {
          shrink: "",
          align: "start",
          class: "pe-4"
        }, {
          default: b(() => [
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
    p(u, {
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
    o.searchInput ? ne("", !0) : (v(), T(ke, { key: 0 }, [
      o.recentlyEditedPages && o.recentlyEditedPages.length ? (v(), F(d, {
        key: 0,
        "card-title": e.$i18n("cx-sx-article-search-recently-edited-title"),
        suggestions: o.recentlyEditedPages,
        onSuggestionClicked: o.startRecentlyEditedSectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : o.nearbyPages && o.nearbyPages.length ? (v(), F(d, {
        key: 1,
        "card-title": e.$i18n("cx-sx-article-search-nearby-title"),
        suggestions: o.nearbyPages,
        onSuggestionClicked: o.startNearbySectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : H((v(), T("p", o2, null, 512)), [
        [S, void 0, "cx-sx-article-search-no-suggestions-message"]
      ])
    ], 64)),
    H(p(g, {
      "search-input": o.searchInput,
      onSuggestionClicked: o.startSearchResultSectionTranslation
    }, null, 8, ["search-input", "onSuggestionClicked"]), [
      [Ai, !!o.searchInput]
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
      default: b(() => [
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
const a2 = /* @__PURE__ */ V(e2, [["render", s2]]);
const i2 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: a2
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
};
function r2(e, t, n, o, s, a) {
  const i = _("sx-article-search");
  return v(), T("main", {
    class: he(["sx-article-search-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const l2 = /* @__PURE__ */ V(i2, [["render", r2]]), ld = [
  {
    path: "",
    name: "dashboard",
    component: fl,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: l2,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: HS,
    props: (e) => ({
      previousRoute: e.query.previousRoute,
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: Ow,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: EC,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: _8,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: Yx,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: R8,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: BE,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: fl,
    meta: { workflowStep: 0 }
  }
], Ki = yv({
  history: v1(),
  routes: ld
});
Ki.beforeEach((e, t, n) => {
  if (e.query.force) {
    n();
    return;
  }
  const o = t.meta.workflowStep, s = e.meta.workflowStep;
  if (isNaN(o) && s >= 1) {
    n({ name: "dashboard" });
    return;
  }
  if (Math.ceil(s) - Math.floor(o) > 1) {
    const i = Math.ceil(s) - 1, r = ld.find(
      (l) => l.meta.workflowStep === i
    );
    n({ name: r.name });
    return;
  }
  n();
});
Ki.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const c2 = mw.config.get("wgUserLanguage"), u2 = "en", d2 = mw.messages.values || {}, Ln = Nc(Wh);
Ln.config.globalProperties.$incompleteVersion = !0;
const g2 = ey();
Ln.use(g2);
Ln.use(Ki);
Ln.use(ho);
Ln.use(uh);
Ln.use(ch);
const f2 = uy({
  locale: c2,
  finalFallback: u2,
  messages: d2,
  wikilinks: !0
});
Ln.use(f2);
Ln.mount("#contenttranslation");
