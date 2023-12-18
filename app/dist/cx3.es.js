/*@nomin*/
var Nd = Object.defineProperty, Fd = Object.defineProperties;
var Md = Object.getOwnPropertyDescriptors;
var ar = Object.getOwnPropertySymbols;
var Od = Object.prototype.hasOwnProperty, Bd = Object.prototype.propertyIsEnumerable;
var ir = (e, t, n) => t in e ? Nd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rt = (e, t) => {
  for (var n in t || (t = {}))
    Od.call(t, n) && ir(e, n, t[n]);
  if (ar)
    for (var n of ar(t))
      Bd.call(t, n) && ir(e, n, t[n]);
  return e;
}, bt = (e, t) => Fd(e, Md(t));
var K = (e, t, n) => new Promise((o, s) => {
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
function En(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const Be = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, ro = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], st = () => {
}, Tl = () => !1, Id = /^on[^a-z]/, Xo = (e) => Id.test(e), Ps = (e) => e.startsWith("onUpdate:"), Ue = Object.assign, ci = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $d = Object.prototype.hasOwnProperty, Ae = (e, t) => $d.call(e, t), ie = Array.isArray, Un = (e) => Yo(e) === "[object Map]", Dl = (e) => Yo(e) === "[object Set]", rr = (e) => Yo(e) === "[object Date]", ge = (e) => typeof e == "function", ze = (e) => typeof e == "string", Oo = (e) => typeof e == "symbol", Pe = (e) => e !== null && typeof e == "object", ui = (e) => Pe(e) && ge(e.then) && ge(e.catch), Ll = Object.prototype.toString, Yo = (e) => Ll.call(e), di = (e) => Yo(e).slice(8, -1), Pl = (e) => Yo(e) === "[object Object]", gi = (e) => ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, xs = /* @__PURE__ */ En(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ud = /* @__PURE__ */ En(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Gs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Rd = /-(\w)/g, zt = Gs((e) => e.replace(Rd, (t, n) => n ? n.toUpperCase() : "")), Vd = /\B([A-Z])/g, nn = Gs(
  (e) => e.replace(Vd, "-$1").toLowerCase()
), Gn = Gs(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), gn = Gs(
  (e) => e ? `on${Gn(e)}` : ""
), Bo = (e, t) => !Object.is(e, t), oo = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ns = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, zd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, jd = (e) => {
  const t = ze(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let lr;
const Fs = () => lr || (lr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function nt(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = ze(o) ? Wd(o) : nt(o);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else {
    if (ze(e))
      return e;
    if (Pe(e))
      return e;
  }
}
const Hd = /;(?![^(]*\))/g, qd = /:([^]+)/, Gd = /\/\*[^]*?\*\//g;
function Wd(e) {
  const t = {};
  return e.replace(Gd, "").split(Hd).forEach((n) => {
    if (n) {
      const o = n.split(qd);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function he(e) {
  let t = "";
  if (ze(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const o = he(e[n]);
      o && (t += o + " ");
    }
  else if (Pe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function fi(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !ze(t) && (e.class = he(t)), n && (e.style = nt(n)), e;
}
const Kd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Xd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Yd = /* @__PURE__ */ En(Kd), Jd = /* @__PURE__ */ En(Xd), Zd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qd = /* @__PURE__ */ En(Zd);
function Nl(e) {
  return !!e || e === "";
}
function eg(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Ms(e[o], t[o]);
  return n;
}
function Ms(e, t) {
  if (e === t)
    return !0;
  let n = rr(e), o = rr(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Oo(e), o = Oo(t), n || o)
    return e === t;
  if (n = ie(e), o = ie(t), n || o)
    return n && o ? eg(e, t) : !1;
  if (n = Pe(e), o = Pe(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, a = Object.keys(t).length;
    if (s !== a)
      return !1;
    for (const i in e) {
      const r = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (r && !l || !r && l || !Ms(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const se = (e) => ze(e) ? e : e == null ? "" : ie(e) || Pe(e) && (e.toString === Ll || !ge(e.toString)) ? JSON.stringify(e, Fl, 2) : String(e), Fl = (e, t) => t && t.__v_isRef ? Fl(e, t.value) : Un(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : Dl(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Pe(t) && !ie(t) && !Pl(t) ? String(t) : t;
function Pa(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Dt;
class Ml {
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
      ({}).NODE_ENV !== "production" && Pa("cannot run an inactive effect scope.");
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
function tg(e) {
  return new Ml(e);
}
function ng(e, t = Dt) {
  t && t.active && t.effects.push(e);
}
function og() {
  return Dt;
}
const Io = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ol = (e) => (e.w & Sn) > 0, Bl = (e) => (e.n & Sn) > 0, sg = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Sn;
}, ag = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      Ol(s) && !Bl(s) ? s.delete(e) : t[n++] = s, s.w &= ~Sn, s.n &= ~Sn;
    }
    t.length = n;
  }
}, Na = /* @__PURE__ */ new WeakMap();
let ko = 0, Sn = 1;
const Fa = 30;
let ft;
const Rn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Ma = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class pi {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ng(this, o);
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
      return this.parent = ft, ft = this, bn = !0, Sn = 1 << ++ko, ko <= Fa ? sg(this) : cr(this), this.fn();
    } finally {
      ko <= Fa && ag(this), Sn = 1 << --ko, ft = this.parent, bn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ft === this ? this.deferStop = !0 : this.active && (cr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function cr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let bn = !0;
const Il = [];
function Kn() {
  Il.push(bn), bn = !1;
}
function Xn() {
  const e = Il.pop();
  bn = e === void 0 ? !0 : e;
}
function at(e, t, n) {
  if (bn && ft) {
    let o = Na.get(e);
    o || Na.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Io());
    const a = {}.NODE_ENV !== "production" ? { effect: ft, target: e, type: t, key: n } : void 0;
    Oa(s, a);
  }
}
function Oa(e, t) {
  let n = !1;
  ko <= Fa ? Bl(e) || (e.n |= Sn, n = !Ol(e)) : n = !e.has(ft), n && (e.add(ft), ft.deps.push(e), {}.NODE_ENV !== "production" && ft.onTrack && ft.onTrack(
    Ue(
      {
        effect: ft
      },
      t
    )
  ));
}
function jt(e, t, n, o, s, a) {
  const i = Na.get(e);
  if (!i)
    return;
  let r = [];
  if (t === "clear")
    r = [...i.values()];
  else if (n === "length" && ie(e)) {
    const d = Number(o);
    i.forEach((c, u) => {
      (u === "length" || u >= d) && r.push(c);
    });
  } else
    switch (n !== void 0 && r.push(i.get(n)), t) {
      case "add":
        ie(e) ? gi(n) && r.push(i.get("length")) : (r.push(i.get(Rn)), Un(e) && r.push(i.get(Ma)));
        break;
      case "delete":
        ie(e) || (r.push(i.get(Rn)), Un(e) && r.push(i.get(Ma)));
        break;
      case "set":
        Un(e) && r.push(i.get(Rn));
        break;
    }
  const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: a } : void 0;
  if (r.length === 1)
    r[0] && ({}.NODE_ENV !== "production" ? io(r[0], l) : io(r[0]));
  else {
    const d = [];
    for (const c of r)
      c && d.push(...c);
    ({}).NODE_ENV !== "production" ? io(Io(d), l) : io(Io(d));
  }
}
function io(e, t) {
  const n = ie(e) ? e : [...e];
  for (const o of n)
    o.computed && ur(o, t);
  for (const o of n)
    o.computed || ur(o, t);
}
function ur(e, t) {
  (e !== ft || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Ue({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ig = /* @__PURE__ */ En("__proto__,__v_isRef,__isVue"), $l = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Oo)
), rg = /* @__PURE__ */ Ws(), lg = /* @__PURE__ */ Ws(!1, !0), cg = /* @__PURE__ */ Ws(!0), ug = /* @__PURE__ */ Ws(!0, !0), dr = /* @__PURE__ */ dg();
function dg() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = _e(this);
      for (let a = 0, i = this.length; a < i; a++)
        at(o, "get", a + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(_e)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Kn();
      const o = _e(this)[t].apply(this, n);
      return Xn(), o;
    };
  }), e;
}
function gg(e) {
  const t = _e(this);
  return at(t, "has", e), t.hasOwnProperty(e);
}
function Ws(e = !1, t = !1) {
  return function(o, s, a) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && a === (e ? t ? Gl : ql : t ? Hl : jl).get(o))
      return o;
    const i = ie(o);
    if (!e) {
      if (i && Ae(dr, s))
        return Reflect.get(dr, s, a);
      if (s === "hasOwnProperty")
        return gg;
    }
    const r = Reflect.get(o, s, a);
    return (Oo(s) ? $l.has(s) : ig(s)) || (e || at(o, "get", s), t) ? r : Ke(r) ? i && gi(s) ? r : r.value : Pe(r) ? e ? Kl(r) : mo(r) : r;
  };
}
const fg = /* @__PURE__ */ Ul(), pg = /* @__PURE__ */ Ul(!0);
function Ul(e = !1) {
  return function(n, o, s, a) {
    let i = n[o];
    if (wn(i) && Ke(i) && !Ke(s))
      return !1;
    if (!e && (!Os(s) && !wn(s) && (i = _e(i), s = _e(s)), !ie(n) && Ke(i) && !Ke(s)))
      return i.value = s, !0;
    const r = ie(n) && gi(o) ? Number(o) < n.length : Ae(n, o), l = Reflect.set(n, o, s, a);
    return n === _e(a) && (r ? Bo(s, i) && jt(n, "set", o, s, i) : jt(n, "add", o, s)), l;
  };
}
function mg(e, t) {
  const n = Ae(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && jt(e, "delete", t, void 0, o), s;
}
function hg(e, t) {
  const n = Reflect.has(e, t);
  return (!Oo(t) || !$l.has(t)) && at(e, "has", t), n;
}
function _g(e) {
  return at(e, "iterate", ie(e) ? "length" : Rn), Reflect.ownKeys(e);
}
const Rl = {
  get: rg,
  set: fg,
  deleteProperty: mg,
  has: hg,
  ownKeys: _g
}, Vl = {
  get: cg,
  set(e, t) {
    return {}.NODE_ENV !== "production" && Pa(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && Pa(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, vg = /* @__PURE__ */ Ue(
  {},
  Rl,
  {
    get: lg,
    set: pg
  }
), yg = /* @__PURE__ */ Ue(
  {},
  Vl,
  {
    get: ug
  }
), mi = (e) => e, Ks = (e) => Reflect.getPrototypeOf(e);
function hs(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _e(e), a = _e(t);
  n || (t !== a && at(s, "get", t), at(s, "get", a));
  const { has: i } = Ks(s), r = o ? mi : n ? hi : $o;
  if (i.call(s, t))
    return r(e.get(t));
  if (i.call(s, a))
    return r(e.get(a));
  e !== s && e.get(t);
}
function _s(e, t = !1) {
  const n = this.__v_raw, o = _e(n), s = _e(e);
  return t || (e !== s && at(o, "has", e), at(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function vs(e, t = !1) {
  return e = e.__v_raw, !t && at(_e(e), "iterate", Rn), Reflect.get(e, "size", e);
}
function gr(e) {
  e = _e(e);
  const t = _e(this);
  return Ks(t).has.call(t, e) || (t.add(e), jt(t, "add", e, e)), this;
}
function fr(e, t) {
  t = _e(t);
  const n = _e(this), { has: o, get: s } = Ks(n);
  let a = o.call(n, e);
  a ? {}.NODE_ENV !== "production" && zl(n, o, e) : (e = _e(e), a = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), a ? Bo(t, i) && jt(n, "set", e, t, i) : jt(n, "add", e, t), this;
}
function pr(e) {
  const t = _e(this), { has: n, get: o } = Ks(t);
  let s = n.call(t, e);
  s ? {}.NODE_ENV !== "production" && zl(t, n, e) : (e = _e(e), s = n.call(t, e));
  const a = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && jt(t, "delete", e, void 0, a), i;
}
function mr() {
  const e = _e(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? Un(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && jt(e, "clear", void 0, void 0, n), o;
}
function ys(e, t) {
  return function(o, s) {
    const a = this, i = a.__v_raw, r = _e(i), l = t ? mi : e ? hi : $o;
    return !e && at(r, "iterate", Rn), i.forEach((d, c) => o.call(s, l(d), l(c), a));
  };
}
function bs(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, a = _e(s), i = Un(a), r = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, d = s[e](...o), c = n ? mi : t ? hi : $o;
    return !t && at(
      a,
      "iterate",
      l ? Ma : Rn
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
        `${Gn(e)} operation ${n}failed: target is readonly.`,
        _e(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function bg() {
  const e = {
    get(a) {
      return hs(this, a);
    },
    get size() {
      return vs(this);
    },
    has: _s,
    add: gr,
    set: fr,
    delete: pr,
    clear: mr,
    forEach: ys(!1, !1)
  }, t = {
    get(a) {
      return hs(this, a, !1, !0);
    },
    get size() {
      return vs(this);
    },
    has: _s,
    add: gr,
    set: fr,
    delete: pr,
    clear: mr,
    forEach: ys(!1, !0)
  }, n = {
    get(a) {
      return hs(this, a, !0);
    },
    get size() {
      return vs(this, !0);
    },
    has(a) {
      return _s.call(this, a, !0);
    },
    add: an("add"),
    set: an("set"),
    delete: an("delete"),
    clear: an("clear"),
    forEach: ys(!0, !1)
  }, o = {
    get(a) {
      return hs(this, a, !0, !0);
    },
    get size() {
      return vs(this, !0);
    },
    has(a) {
      return _s.call(this, a, !0);
    },
    add: an("add"),
    set: an("set"),
    delete: an("delete"),
    clear: an("clear"),
    forEach: ys(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = bs(
      a,
      !1,
      !1
    ), n[a] = bs(
      a,
      !0,
      !1
    ), t[a] = bs(
      a,
      !1,
      !0
    ), o[a] = bs(
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
    Ae(n, s) && s in o ? n : o,
    s,
    a
  );
}
const Eg = {
  get: /* @__PURE__ */ Xs(!1, !1)
}, kg = {
  get: /* @__PURE__ */ Xs(!1, !0)
}, Ag = {
  get: /* @__PURE__ */ Xs(!0, !1)
}, Tg = {
  get: /* @__PURE__ */ Xs(!0, !0)
};
function zl(e, t, n) {
  const o = _e(n);
  if (o !== n && t.call(e, o)) {
    const s = di(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const jl = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dg(di(e));
}
function mo(e) {
  return wn(e) ? e : Ys(
    e,
    !1,
    Rl,
    Eg,
    jl
  );
}
function Wl(e) {
  return Ys(
    e,
    !1,
    vg,
    kg,
    Hl
  );
}
function Kl(e) {
  return Ys(
    e,
    !0,
    Vl,
    Ag,
    ql
  );
}
function Ao(e) {
  return Ys(
    e,
    !0,
    yg,
    Tg,
    Gl
  );
}
function Ys(e, t, n, o, s) {
  if (!Pe(e))
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
function Vn(e) {
  return wn(e) ? Vn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wn(e) {
  return !!(e && e.__v_isReadonly);
}
function Os(e) {
  return !!(e && e.__v_isShallow);
}
function Ba(e) {
  return Vn(e) || wn(e);
}
function _e(e) {
  const t = e && e.__v_raw;
  return t ? _e(t) : e;
}
function Xl(e) {
  return Ns(e, "__v_skip", !0), e;
}
const $o = (e) => Pe(e) ? mo(e) : e, hi = (e) => Pe(e) ? Kl(e) : e;
function Yl(e) {
  bn && ft && (e = _e(e), {}.NODE_ENV !== "production" ? Oa(e.dep || (e.dep = Io()), {
    target: e,
    type: "get",
    key: "value"
  }) : Oa(e.dep || (e.dep = Io())));
}
function Jl(e, t) {
  e = _e(e);
  const n = e.dep;
  n && ({}.NODE_ENV !== "production" ? io(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : io(n));
}
function Ke(e) {
  return !!(e && e.__v_isRef === !0);
}
function Z(e) {
  return Zl(e, !1);
}
function Pg(e) {
  return Zl(e, !0);
}
function Zl(e, t) {
  return Ke(e) ? e : new Ng(e, t);
}
class Ng {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : _e(t), this._value = n ? t : $o(t);
  }
  get value() {
    return Yl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Os(t) || wn(t);
    t = n ? t : _e(t), Bo(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : $o(t), Jl(this, t));
  }
}
function pe(e) {
  return Ke(e) ? e.value : e;
}
const Fg = {
  get: (e, t, n) => pe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Ke(s) && !Ke(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ql(e) {
  return Vn(e) ? e : new Proxy(e, Fg);
}
class Mg {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new pi(t, () => {
      this._dirty || (this._dirty = !0, Jl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = _e(this);
    return Yl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Og(e, t, n = !1) {
  let o, s;
  const a = ge(e);
  a ? (o = e, s = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : st) : (o = e.get, s = e.set);
  const i = new Mg(o, s, a || !s, n);
  return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const zn = [];
function Es(e) {
  zn.push(e);
}
function ks() {
  zn.pop();
}
function U(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  Kn();
  const n = zn.length ? zn[zn.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Bg();
  if (o)
    tn(
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
  Xn();
}
function Bg() {
  let e = zn[zn.length - 1];
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
`], ...$g(n));
  }), t;
}
function $g({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${aa(
    e.component,
    e.type,
    o
  )}`, a = ">" + n;
  return e.props ? [s, ...Ug(e.props), a] : [s + a];
}
function Ug(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ec(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ec(e, t, n) {
  return ze(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ke(t) ? (t = ec(e, _e(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ge(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _e(t), n ? t : [`${e}=`, t]);
}
function Rg(e, t) {
  ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? U(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && U(`${t} is NaN - the duration expression might be incorrect.`));
}
const _i = {
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
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function tn(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (a) {
    Js(a, t, n);
  }
  return s;
}
function At(e, t, n, o) {
  if (ge(e)) {
    const a = tn(e, t, n, o);
    return a && ui(a) && a.catch((i) => {
      Js(i, t, n);
    }), a;
  }
  const s = [];
  for (let a = 0; a < e.length; a++)
    s.push(At(e[a], t, n, o));
  return s;
}
function Js(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const i = t.proxy, r = {}.NODE_ENV !== "production" ? _i[n] : n;
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
      tn(
        l,
        null,
        10,
        [e, i, r]
      );
      return;
    }
  }
  Vg(e, n, s, o);
}
function Vg(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const s = _i[t];
    if (n && Es(n), U(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && ks(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Uo = !1, Ia = !1;
const lt = [];
let Rt = 0;
const lo = [];
let Ut = null, fn = 0;
const tc = /* @__PURE__ */ Promise.resolve();
let vi = null;
const zg = 100;
function ho(e) {
  const t = vi || tc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jg(e) {
  let t = Rt + 1, n = lt.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ro(lt[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Zs(e) {
  (!lt.length || !lt.includes(
    e,
    Uo && e.allowRecurse ? Rt + 1 : Rt
  )) && (e.id == null ? lt.push(e) : lt.splice(jg(e.id), 0, e), nc());
}
function nc() {
  !Uo && !Ia && (Ia = !0, vi = tc.then(ac));
}
function Hg(e) {
  const t = lt.indexOf(e);
  t > Rt && lt.splice(t, 1);
}
function oc(e) {
  ie(e) ? lo.push(...e) : (!Ut || !Ut.includes(
    e,
    e.allowRecurse ? fn + 1 : fn
  )) && lo.push(e), nc();
}
function hr(e, t = Uo ? Rt + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < lt.length; t++) {
    const n = lt[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && yi(e, n))
        continue;
      lt.splice(t, 1), t--, n();
    }
  }
}
function sc(e) {
  if (lo.length) {
    const t = [...new Set(lo)];
    if (lo.length = 0, Ut) {
      Ut.push(...t);
      return;
    }
    for (Ut = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ut.sort((n, o) => Ro(n) - Ro(o)), fn = 0; fn < Ut.length; fn++)
      ({}).NODE_ENV !== "production" && yi(e, Ut[fn]) || Ut[fn]();
    Ut = null, fn = 0;
  }
}
const Ro = (e) => e.id == null ? 1 / 0 : e.id, qg = (e, t) => {
  const n = Ro(e) - Ro(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ac(e) {
  Ia = !1, Uo = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), lt.sort(qg);
  const t = {}.NODE_ENV !== "production" ? (n) => yi(e, n) : st;
  try {
    for (Rt = 0; Rt < lt.length; Rt++) {
      const n = lt[Rt];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        tn(n, null, 14);
      }
    }
  } finally {
    Rt = 0, lt.length = 0, sc(e), Uo = !1, vi = null, (lt.length || lo.length) && ac(e);
  }
}
function yi(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > zg) {
      const o = t.ownerInstance, s = o && Di(o.type);
      return U(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let jn = !1;
const so = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (Fs().__VUE_HMR_RUNTIME__ = {
  createRecord: pa(ic),
  rerender: pa(Kg),
  reload: pa(Xg)
});
const Wn = /* @__PURE__ */ new Map();
function Gg(e) {
  const t = e.type.__hmrId;
  let n = Wn.get(t);
  n || (ic(t, e.type), n = Wn.get(t)), n.instances.add(e);
}
function Wg(e) {
  Wn.get(e.type.__hmrId).instances.delete(e);
}
function ic(e, t) {
  return Wn.has(e) ? !1 : (Wn.set(e, {
    initialDef: Lo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Lo(e) {
  return Vc(e) ? e.__vccOpts : e;
}
function Kg(e, t) {
  const n = Wn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Lo(o.type).render = t), o.renderCache = [], jn = !0, o.update(), jn = !1;
  }));
}
function Xg(e, t) {
  const n = Wn.get(e);
  if (!n)
    return;
  t = Lo(t), _r(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const a = Lo(s.type);
    so.has(a) || (a !== n.initialDef && _r(a, t), so.add(a)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (so.add(a), s.ceReload(t.styles), so.delete(a)) : s.parent ? Zs(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  oc(() => {
    for (const s of o)
      so.delete(
        Lo(s.type)
      );
  });
}
function _r(e, t) {
  Ue(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function pa(e) {
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
let Vt, To = [], $a = !1;
function Jo(e, ...t) {
  Vt ? Vt.emit(e, ...t) : $a || To.push({ event: e, args: t });
}
function rc(e, t) {
  var n, o;
  Vt = e, Vt ? (Vt.enabled = !0, To.forEach(({ event: s, args: a }) => Vt.emit(s, ...a)), To = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    rc(a, t);
  }), setTimeout(() => {
    Vt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $a = !0, To = []);
  }, 3e3)) : ($a = !0, To = []);
}
function Yg(e, t) {
  Jo("app:init", e, t, {
    Fragment: xe,
    Text: Qo,
    Comment: tt,
    Static: Ds
  });
}
function Jg(e) {
  Jo("app:unmount", e);
}
const Zg = /* @__PURE__ */ bi(
  "component:added"
  /* COMPONENT_ADDED */
), lc = /* @__PURE__ */ bi(
  "component:updated"
  /* COMPONENT_UPDATED */
), Qg = /* @__PURE__ */ bi(
  "component:removed"
  /* COMPONENT_REMOVED */
), ef = (e) => {
  Vt && typeof Vt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Vt.cleanupBuffer(e) && Qg(e);
};
function bi(e) {
  return (t) => {
    Jo(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const tf = /* @__PURE__ */ cc(
  "perf:start"
  /* PERFORMANCE_START */
), nf = /* @__PURE__ */ cc(
  "perf:end"
  /* PERFORMANCE_END */
);
function cc(e) {
  return (t, n, o) => {
    Jo(e, t.appContext.app, t.uid, t, n, o);
  };
}
function of(e, t, n) {
  Jo(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function sf(e, t, ...n) {
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
        (!u || !(gn(t) in u)) && U(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gn(t)}" prop.`
        );
      else {
        const g = c[t];
        ge(g) && (g(...n) || U(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const a = t.startsWith("update:"), i = a && t.slice(7);
  if (i && i in o) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`, { number: u, trim: g } = o[c] || Be;
    g && (s = n.map((f) => ze(f) ? f.trim() : f)), u && (s = n.map(zd));
  }
  if ({}.NODE_ENV !== "production" && of(e, t, s), {}.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && o[gn(c)] && U(
      `Event "${c}" is emitted in component ${aa(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${nn(t)}" instead of "${t}".`
    );
  }
  let r, l = o[r = gn(t)] || // also try camelCase event handler (#2249)
  o[r = gn(zt(t))];
  !l && a && (l = o[r = gn(nn(t))]), l && At(
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
    e.emitted[r] = !0, At(
      d,
      e,
      6,
      s
    );
  }
}
function uc(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const a = e.emits;
  let i = {}, r = !1;
  if (!ge(e)) {
    const l = (d) => {
      const c = uc(d, t, !0);
      c && (r = !0, Ue(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !r ? (Pe(e) && o.set(e, null), null) : (ie(a) ? a.forEach((l) => i[l] = null) : Ue(i, a), Pe(e) && o.set(e, i), i);
}
function Qs(e, t) {
  return !e || !Xo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, nn(t)) || Ae(e, t));
}
let Je = null, dc = null;
function Bs(e) {
  const t = Je;
  return Je = e, dc = e && e.type.__scopeId || null, t;
}
function b(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Pr(-1);
    const a = Bs(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Bs(a), o._d && Pr(1);
    }
    return {}.NODE_ENV !== "production" && lc(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Ua = !1;
function Is() {
  Ua = !0;
}
function ma(e) {
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
  let x, k;
  const L = Bs(e);
  ({}).NODE_ENV !== "production" && (Ua = !1);
  try {
    if (n.shapeFlag & 4) {
      const R = s || o;
      x = Lt(
        c.call(
          R,
          R,
          u,
          a,
          f,
          g,
          m
        )
      ), k = l;
    } else {
      const R = t;
      ({}).NODE_ENV !== "production" && l === a && Is(), x = Lt(
        R.length > 1 ? R(
          a,
          {}.NODE_ENV !== "production" ? {
            get attrs() {
              return Is(), l;
            },
            slots: r,
            emit: d
          } : { attrs: l, slots: r, emit: d }
        ) : R(
          a,
          null
          /* we know it doesn't need it */
        )
      ), k = t.props ? l : rf(l);
    }
  } catch (R) {
    No.length = 0, Js(R, e, 1), x = p(tt);
  }
  let M = x, G;
  if ({}.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([M, G] = af(x)), k && C !== !1) {
    const R = Object.keys(k), { shapeFlag: ce } = M;
    if (R.length) {
      if (ce & 7)
        i && R.some(Ps) && (k = lf(
          k,
          i
        )), M = Ht(M, k);
      else if ({}.NODE_ENV !== "production" && !Ua && M.type !== tt) {
        const W = Object.keys(l), B = [], me = [];
        for (let Ee = 0, Te = W.length; Ee < Te; Ee++) {
          const J = W[Ee];
          Xo(J) ? Ps(J) || B.push(J[2].toLowerCase() + J.slice(3)) : me.push(J);
        }
        me.length && U(
          `Extraneous non-props attributes (${me.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), B.length && U(
          `Extraneous non-emits event listeners (${B.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !vr(M) && U(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), M = Ht(M), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !vr(M) && U(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), M.transition = n.transition), {}.NODE_ENV !== "production" && G ? G(M) : x = M, Bs(L), x;
}
const af = (e) => {
  const t = e.children, n = e.dynamicChildren, o = gc(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), a = n ? n.indexOf(o) : -1, i = (r) => {
    t[s] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
  };
  return [Lt(o), i];
};
function gc(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (co(o)) {
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
const rf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lf = (e, t) => {
  const n = {};
  for (const o in e)
    (!Ps(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, vr = (e) => e.shapeFlag & 7 || e.type === tt;
function cf(e, t, n) {
  const { props: o, children: s, component: a } = e, { props: i, children: r, patchFlag: l } = t, d = a.emitsOptions;
  if ({}.NODE_ENV !== "production" && (s || r) && jn || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? yr(o, i, d) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const g = c[u];
        if (i[g] !== o[g] && !Qs(d, g))
          return !0;
      }
    }
  } else
    return (s || r) && (!r || !r.$stable) ? !0 : o === i ? !1 : o ? i ? yr(o, i, d) : !0 : !!i;
  return !1;
}
function yr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (t[a] !== e[a] && !Qs(n, a))
      return !0;
  }
  return !1;
}
function uf({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const df = (e) => e.__isSuspense;
function gf(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : oc(e);
}
function fc(e, t) {
  return Si(e, null, t);
}
const Ss = {};
function He(e, t, n) {
  return {}.NODE_ENV !== "production" && !ge(t) && U(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Si(e, t, n);
}
function Si(e, t, { immediate: n, deep: o, flush: s, onTrack: a, onTrigger: i } = Be) {
  var r;
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && U(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && U(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (R) => {
    U(
      "Invalid watch source: ",
      R,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = og() === ((r = Ye) == null ? void 0 : r.scope) ? Ye : null;
  let c, u = !1, g = !1;
  if (Ke(e) ? (c = () => e.value, u = Os(e)) : Vn(e) ? (c = () => e, o = !0) : ie(e) ? (g = !0, u = e.some((R) => Vn(R) || Os(R)), c = () => e.map((R) => {
    if (Ke(R))
      return R.value;
    if (Vn(R))
      return $n(R);
    if (ge(R))
      return tn(R, d, 2);
    ({}).NODE_ENV !== "production" && l(R);
  })) : ge(e) ? t ? c = () => tn(e, d, 2) : c = () => {
    if (!(d && d.isUnmounted))
      return f && f(), At(
        e,
        d,
        3,
        [m]
      );
  } : (c = st, {}.NODE_ENV !== "production" && l(e)), t && o) {
    const R = c;
    c = () => $n(R());
  }
  let f, m = (R) => {
    f = M.onStop = () => {
      tn(R, d, 4);
    };
  }, C;
  if (jo)
    if (m = st, t ? n && At(t, d, 3, [
      c(),
      g ? [] : void 0,
      m
    ]) : c(), s === "sync") {
      const R = pp();
      C = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return st;
  let x = g ? new Array(e.length).fill(Ss) : Ss;
  const k = () => {
    if (M.active)
      if (t) {
        const R = M.run();
        (o || u || (g ? R.some(
          (ce, W) => Bo(ce, x[W])
        ) : Bo(R, x))) && (f && f(), At(t, d, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          x === Ss ? void 0 : g && x[0] === Ss ? [] : x,
          m
        ]), x = R);
      } else
        M.run();
  };
  k.allowRecurse = !!t;
  let L;
  s === "sync" ? L = k : s === "post" ? L = () => _t(k, d && d.suspense) : (k.pre = !0, d && (k.id = d.uid), L = () => Zs(k));
  const M = new pi(c, L);
  ({}).NODE_ENV !== "production" && (M.onTrack = a, M.onTrigger = i), t ? n ? k() : x = M.run() : s === "post" ? _t(
    M.run.bind(M),
    d && d.suspense
  ) : M.run();
  const G = () => {
    M.stop(), d && d.scope && ci(d.scope.effects, M);
  };
  return C && C.push(G), G;
}
function ff(e, t, n) {
  const o = this.proxy, s = ze(e) ? e.includes(".") ? pc(o, e) : () => o[e] : e.bind(o, o);
  let a;
  ge(t) ? a = t : (a = t.handler, n = t);
  const i = Ye;
  uo(this);
  const r = Si(s, a.bind(o), n);
  return i ? uo(i) : qn(), r;
}
function pc(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function $n(e, t) {
  if (!Pe(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Ke(e))
    $n(e.value, t);
  else if (ie(e))
    for (let n = 0; n < e.length; n++)
      $n(e[n], t);
  else if (Dl(e) || Un(e))
    e.forEach((n) => {
      $n(n, t);
    });
  else if (Pl(e))
    for (const n in e)
      $n(e[n], t);
  return e;
}
function mc(e) {
  Ud(e) && U("Do not use built-in directive ids as custom directive id: " + e);
}
function j(e, t) {
  const n = Je;
  if (n === null)
    return {}.NODE_ENV !== "production" && U("withDirectives can only be used inside render functions."), e;
  const o = sa(n) || n.proxy, s = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, r, l, d = Be] = t[a];
    i && (ge(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && $n(r), s.push({
      dir: i,
      instance: o,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: d
    }));
  }
  return e;
}
function Pn(e, t, n, o) {
  const s = e.dirs, a = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    a && (r.oldValue = a[i].value);
    let l = r.dir[o];
    l && (Kn(), At(l, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Xn());
  }
}
function pf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return pt(() => {
    e.isMounted = !0;
  }), Sc(() => {
    e.isUnmounting = !0;
  }), e;
}
const Et = [Function, Array], hc = {
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
}, mf = {
  name: "BaseTransition",
  props: hc,
  setup(e, { slots: t }) {
    const n = Ai(), o = pf();
    let s;
    return () => {
      const a = t.default && vc(t.default(), !0);
      if (!a || !a.length)
        return;
      let i = a[0];
      if (a.length > 1) {
        let C = !1;
        for (const x of a)
          if (x.type !== tt) {
            if ({}.NODE_ENV !== "production" && C) {
              U(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (i = x, C = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const r = _e(e), { mode: l } = r;
      if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && U(`invalid <transition> mode: ${l}`), o.isLeaving)
        return ha(i);
      const d = br(i);
      if (!d)
        return ha(i);
      const c = Ra(
        d,
        r,
        o,
        n
      );
      Va(d, c);
      const u = n.subTree, g = u && br(u);
      let f = !1;
      const { getTransitionKey: m } = d.type;
      if (m) {
        const C = m();
        s === void 0 ? s = C : C !== s && (s = C, f = !0);
      }
      if (g && g.type !== tt && (!On(d, g) || f)) {
        const C = Ra(
          g,
          r,
          o,
          n
        );
        if (Va(g, C), l === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, ha(i);
        l === "in-out" && d.type !== tt && (C.delayLeave = (x, k, L) => {
          const M = _c(
            o,
            g
          );
          M[String(g.key)] = g, x._leaveCb = () => {
            k(), x._leaveCb = void 0, delete c.delayedLeave;
          }, c.delayedLeave = L;
        });
      }
      return i;
    };
  }
}, hf = mf;
function _c(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Ra(e, t, n, o) {
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
    onAfterAppear: k,
    onAppearCancelled: L
  } = t, M = String(e.key), G = _c(n, e), R = (B, me) => {
    B && At(
      B,
      o,
      9,
      me
    );
  }, ce = (B, me) => {
    const Ee = me[1];
    R(B, me), ie(B) ? B.every((Te) => Te.length <= 1) && Ee() : B.length <= 1 && Ee();
  }, W = {
    mode: a,
    persisted: i,
    beforeEnter(B) {
      let me = r;
      if (!n.isMounted)
        if (s)
          me = C || r;
        else
          return;
      B._leaveCb && B._leaveCb(
        !0
        /* cancelled */
      );
      const Ee = G[M];
      Ee && On(e, Ee) && Ee.el._leaveCb && Ee.el._leaveCb(), R(me, [B]);
    },
    enter(B) {
      let me = l, Ee = d, Te = c;
      if (!n.isMounted)
        if (s)
          me = x || l, Ee = k || d, Te = L || c;
        else
          return;
      let J = !1;
      const De = B._enterCb = (Xe) => {
        J || (J = !0, Xe ? R(Te, [B]) : R(Ee, [B]), W.delayedLeave && W.delayedLeave(), B._enterCb = void 0);
      };
      me ? ce(me, [B, De]) : De();
    },
    leave(B, me) {
      const Ee = String(e.key);
      if (B._enterCb && B._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return me();
      R(u, [B]);
      let Te = !1;
      const J = B._leaveCb = (De) => {
        Te || (Te = !0, me(), De ? R(m, [B]) : R(f, [B]), B._leaveCb = void 0, G[Ee] === e && delete G[Ee]);
      };
      G[Ee] = e, g ? ce(g, [B, J]) : J();
    },
    clone(B) {
      return Ra(B, t, n, o);
    }
  };
  return W;
}
function ha(e) {
  if (Zo(e))
    return e = Ht(e), e.children = null, e;
}
function br(e) {
  return Zo(e) ? e.children ? e.children[0] : void 0 : e;
}
function Va(e, t) {
  e.shapeFlag & 6 && e.component ? Va(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function vc(e, t = !1, n) {
  let o = [], s = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === xe ? (i.patchFlag & 128 && s++, o = o.concat(
      vc(i.children, t, r)
    )) : (t || i.type !== tt) && o.push(r != null ? Ht(i, { key: r }) : i);
  }
  if (s > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
function yc(e, t) {
  return ge(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Ue({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Po = (e) => !!e.type.__asyncLoader, Zo = (e) => e.type.__isKeepAlive;
function _f(e, t) {
  bc(e, "a", t);
}
function vf(e, t) {
  bc(e, "da", t);
}
function bc(e, t, n = Ye) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (ea(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Zo(s.parent.vnode) && yf(o, t, n, s), s = s.parent;
  }
}
function yf(e, t, n, o) {
  const s = ea(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  wc(() => {
    ci(o[t], s);
  }, n);
}
function ea(e, t, n = Ye, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Kn(), uo(n);
      const r = At(t, n, e, i);
      return qn(), Xn(), r;
    });
    return o ? s.unshift(a) : s.push(a), a;
  } else if ({}.NODE_ENV !== "production") {
    const s = gn(_i[e].replace(/ hook$/, ""));
    U(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const on = (e) => (t, n = Ye) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!jo || e === "sp") && ea(e, (...o) => t(...o), n)
), bf = on("bm"), pt = on("m"), Sf = on("bu"), wf = on("u"), Sc = on("bum"), wc = on("um"), Cf = on("sp"), xf = on(
  "rtg"
), Ef = on(
  "rtc"
);
function kf(e, t = Ye) {
  ea("ec", e, t);
}
const $s = "components", Af = "directives";
function y(e, t) {
  return wi($s, e, !0, t) || e;
}
const Cc = Symbol.for("v-ndc");
function _o(e) {
  return ze(e) ? wi($s, e, !1) || e : e || Cc;
}
function Ce(e) {
  return wi(Af, e);
}
function wi(e, t, n = !0, o = !1) {
  const s = Je || Ye;
  if (s) {
    const a = s.type;
    if (e === $s) {
      const r = Di(
        a,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (r && (r === t || r === zt(t) || r === Gn(zt(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Sr(s[e] || a[e], t) || // global registration
      Sr(s.appContext[e], t)
    );
    if (!i && o)
      return a;
    if ({}.NODE_ENV !== "production" && n && !i) {
      const r = e === $s ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      U(`Failed to resolve ${e.slice(0, -1)}: ${t}${r}`);
    }
    return i;
  } else
    ({}).NODE_ENV !== "production" && U(
      `resolve${Gn(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Sr(e, t) {
  return e && (e[t] || e[zt(t)] || e[Gn(zt(t))]);
}
function Ze(e, t, n, o) {
  let s;
  const a = n && n[o];
  if (ie(e) || ze(e)) {
    s = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++)
      s[i] = t(e[i], i, void 0, a && a[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && U(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, a && a[i]);
  } else if (Pe(e))
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
  if (Je.isCE || Je.parent && Po(Je.parent) && Je.parent.isCE)
    return t !== "default" && (n.name = t), p("slot", n, o && o());
  let a = e[t];
  ({}).NODE_ENV !== "production" && a && a.length > 1 && (U(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), a = () => []), a && a._c && (a._d = !1), v();
  const i = a && xc(a(n)), r = F(
    xe,
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
function xc(e) {
  return e.some((t) => co(t) ? !(t.type === tt || t.type === xe && !xc(t.children)) : !0) ? e : null;
}
const za = (e) => e ? $c(e) ? sa(e) || e.proxy : za(e.parent) : null, Hn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ue(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? Ao(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? Ao(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? Ao(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? Ao(e.refs) : e.refs,
    $parent: (e) => za(e.parent),
    $root: (e) => za(e.root),
    $emit: (e) => e.emit,
    $options: (e) => xi(e),
    $forceUpdate: (e) => e.f || (e.f = () => Zs(e.update)),
    $nextTick: (e) => e.n || (e.n = ho.bind(e.proxy)),
    $watch: (e) => ff.bind(e)
  })
), Ci = (e) => e === "_" || e === "$", _a = (e, t) => e !== Be && !e.__isScriptSetup && Ae(e, t), Ec = {
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
        if (_a(o, t))
          return i[t] = 1, o[t];
        if (s !== Be && Ae(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Ae(d, t)
        )
          return i[t] = 3, a[t];
        if (n !== Be && Ae(n, t))
          return i[t] = 4, n[t];
        ja && (i[t] = 0);
      }
    }
    const c = Hn[t];
    let u, g;
    if (c)
      return t === "$attrs" ? (at(e, "get", t), {}.NODE_ENV !== "production" && Is()) : {}.NODE_ENV !== "production" && t === "$slots" && at(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Be && Ae(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, Ae(g, t)
    )
      return g[t];
    ({}).NODE_ENV !== "production" && Je && (!ze(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== Be && Ci(t[0]) && Ae(s, t) ? U(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Je && U(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: a } = e;
    return _a(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && Ae(s, t) ? (U(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Be && Ae(o, t) ? (o[t] = n, !0) : Ae(e.props, t) ? ({}.NODE_ENV !== "production" && U(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && U(
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
    return !!n[i] || e !== Be && Ae(e, i) || _a(t, i) || (r = a[0]) && Ae(r, i) || Ae(o, i) || Ae(Hn, i) || Ae(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (Ec.ownKeys = (e) => (U(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Tf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Hn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Hn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: st
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
      set: st
    });
  });
}
function Lf(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(_e(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Ci(o[0])) {
        U(
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
        set: st
      });
    }
  });
}
function wr(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Pf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? U(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ja = !0;
function Nf(e) {
  const t = xi(e), n = e.proxy, o = e.ctx;
  ja = !1, t.beforeCreate && Cr(t.beforeCreate, e, "bc");
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
    beforeDestroy: k,
    beforeUnmount: L,
    destroyed: M,
    unmounted: G,
    render: R,
    renderTracked: ce,
    renderTriggered: W,
    errorCaptured: B,
    serverPrefetch: me,
    // public API
    expose: Ee,
    inheritAttrs: Te,
    // assets
    components: J,
    directives: De,
    filters: Xe
  } = t, We = {}.NODE_ENV !== "production" ? Pf() : null;
  if ({}.NODE_ENV !== "production") {
    const [re] = e.propsOptions;
    if (re)
      for (const fe in re)
        We("Props", fe);
  }
  if (d && Ff(d, o, We), i)
    for (const re in i) {
      const fe = i[re];
      ge(fe) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, re, {
        value: fe.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[re] = fe.bind(n), {}.NODE_ENV !== "production" && We("Methods", re)) : {}.NODE_ENV !== "production" && U(
        `Method "${re}" has type "${typeof fe}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    ({}).NODE_ENV !== "production" && !ge(s) && U(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const re = s.call(n, n);
    if ({}.NODE_ENV !== "production" && ui(re) && U(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Pe(re))
      ({}).NODE_ENV !== "production" && U("data() should return an object.");
    else if (e.data = mo(re), {}.NODE_ENV !== "production")
      for (const fe in re)
        We("Data", fe), Ci(fe[0]) || Object.defineProperty(o, fe, {
          configurable: !0,
          enumerable: !0,
          get: () => re[fe],
          set: st
        });
  }
  if (ja = !0, a)
    for (const re in a) {
      const fe = a[re], ot = ge(fe) ? fe.bind(n, n) : ge(fe.get) ? fe.get.bind(n, n) : st;
      ({}).NODE_ENV !== "production" && ot === st && U(`Computed property "${re}" has no getter.`);
      const Xt = !ge(fe) && ge(fe.set) ? fe.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        U(
          `Write operation failed: computed property "${re}" is readonly.`
        );
      } : st, yt = S({
        get: ot,
        set: Xt
      });
      Object.defineProperty(o, re, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (ut) => yt.value = ut
      }), {}.NODE_ENV !== "production" && We("Computed", re);
    }
  if (r)
    for (const re in r)
      kc(r[re], o, n, re);
  if (l) {
    const re = ge(l) ? l.call(n) : l;
    Reflect.ownKeys(re).forEach((fe) => {
      As(fe, re[fe]);
    });
  }
  c && Cr(c, e, "c");
  function Re(re, fe) {
    ie(fe) ? fe.forEach((ot) => re(ot.bind(n))) : fe && re(fe.bind(n));
  }
  if (Re(bf, u), Re(pt, g), Re(Sf, f), Re(wf, m), Re(_f, C), Re(vf, x), Re(kf, B), Re(Ef, ce), Re(xf, W), Re(Sc, L), Re(wc, G), Re(Cf, me), ie(Ee))
    if (Ee.length) {
      const re = e.exposed || (e.exposed = {});
      Ee.forEach((fe) => {
        Object.defineProperty(re, fe, {
          get: () => n[fe],
          set: (ot) => n[fe] = ot
        });
      });
    } else
      e.exposed || (e.exposed = {});
  R && e.render === st && (e.render = R), Te != null && (e.inheritAttrs = Te), J && (e.components = J), De && (e.directives = De);
}
function Ff(e, t, n = st) {
  ie(e) && (e = Ha(e));
  for (const o in e) {
    const s = e[o];
    let a;
    Pe(s) ? "default" in s ? a = Ge(
      s.from || o,
      s.default,
      !0
      /* treat default function as factory */
    ) : a = Ge(s.from || o) : a = Ge(s), Ke(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[o] = a, {}.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Cr(e, t, n) {
  At(
    ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function kc(e, t, n, o) {
  const s = o.includes(".") ? pc(n, o) : () => n[o];
  if (ze(e)) {
    const a = t[e];
    ge(a) ? He(s, a) : {}.NODE_ENV !== "production" && U(`Invalid watch handler specified by key "${e}"`, a);
  } else if (ge(e))
    He(s, e.bind(n));
  else if (Pe(e))
    if (ie(e))
      e.forEach((a) => kc(a, t, n, o));
    else {
      const a = ge(e.handler) ? e.handler.bind(n) : t[e.handler];
      ge(a) ? He(s, a, e) : {}.NODE_ENV !== "production" && U(`Invalid watch handler specified by key "${e.handler}"`, a);
    }
  else
    ({}).NODE_ENV !== "production" && U(`Invalid watch option: "${o}"`, e);
}
function xi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = e.appContext, r = a.get(t);
  let l;
  return r ? l = r : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach(
    (d) => Us(l, d, i, !0)
  ), Us(l, t, i)), Pe(t) && a.set(t, l), l;
}
function Us(e, t, n, o = !1) {
  const { mixins: s, extends: a } = t;
  a && Us(e, a, n, !0), s && s.forEach(
    (i) => Us(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      ({}).NODE_ENV !== "production" && U(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const r = Mf[i] || n && n[i];
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const Mf = {
  data: xr,
  props: Er,
  emits: Er,
  // objects
  methods: Do,
  computed: Do,
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
  components: Do,
  directives: Do,
  // watch
  watch: Bf,
  // provide / inject
  provide: xr,
  inject: Of
};
function xr(e, t) {
  return t ? e ? function() {
    return Ue(
      ge(e) ? e.call(this, this) : e,
      ge(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Of(e, t) {
  return Do(Ha(e), Ha(t));
}
function Ha(e) {
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
function Do(e, t) {
  return e ? Ue(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Er(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ue(
    /* @__PURE__ */ Object.create(null),
    wr(e),
    wr(t != null ? t : {})
  ) : t;
}
function Bf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Ue(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = gt(e[o], t[o]);
  return n;
}
function Ac() {
  return {
    app: null,
    config: {
      isNativeTag: Tl,
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
let If = 0;
function $f(e, t) {
  return function(o, s = null) {
    ge(o) || (o = Ue({}, o)), s != null && !Pe(s) && ({}.NODE_ENV !== "production" && U("root props passed to app.mount() must be an object."), s = null);
    const a = Ac();
    ({}).NODE_ENV !== "production" && Object.defineProperty(a.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        U(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const i = /* @__PURE__ */ new Set();
    let r = !1;
    const l = a.app = {
      _uid: If++,
      _component: o,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: Or,
      get config() {
        return a.config;
      },
      set config(d) {
        ({}).NODE_ENV !== "production" && U(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return i.has(d) ? {}.NODE_ENV !== "production" && U("Plugin has already been applied to target app.") : d && ge(d.install) ? (i.add(d), d.install(l, ...c)) : ge(d) ? (i.add(d), d(l, ...c)) : {}.NODE_ENV !== "production" && U(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(d) {
        return a.mixins.includes(d) ? {}.NODE_ENV !== "production" && U(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : a.mixins.push(d), l;
      },
      component(d, c) {
        return {}.NODE_ENV !== "production" && Ka(d, a.config), c ? ({}.NODE_ENV !== "production" && a.components[d] && U(`Component "${d}" has already been registered in target app.`), a.components[d] = c, l) : a.components[d];
      },
      directive(d, c) {
        return {}.NODE_ENV !== "production" && mc(d), c ? ({}.NODE_ENV !== "production" && a.directives[d] && U(`Directive "${d}" has already been registered in target app.`), a.directives[d] = c, l) : a.directives[d];
      },
      mount(d, c, u) {
        if (r)
          ({}).NODE_ENV !== "production" && U(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          ({}).NODE_ENV !== "production" && d.__vue_app__ && U(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const g = p(
            o,
            s
          );
          return g.appContext = a, {}.NODE_ENV !== "production" && (a.reload = () => {
            e(Ht(g), d, u);
          }), c && t ? t(g, d) : e(g, d, u), r = !0, l._container = d, d.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = g.component, Yg(l, Or)), sa(g.component) || g.component.proxy;
        }
      },
      unmount() {
        r ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, Jg(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && U("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return {}.NODE_ENV !== "production" && d in a.provides && U(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), a.provides[d] = c, l;
      },
      runWithContext(d) {
        Rs = l;
        try {
          return d();
        } finally {
          Rs = null;
        }
      }
    };
    return l;
  };
}
let Rs = null;
function As(e, t) {
  if (!Ye)
    ({}).NODE_ENV !== "production" && U("provide() can only be used inside setup().");
  else {
    let n = Ye.provides;
    const o = Ye.parent && Ye.parent.provides;
    o === n && (n = Ye.provides = Object.create(o)), n[e] = t;
  }
}
function Ge(e, t, n = !1) {
  const o = Ye || Je;
  if (o || Rs) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Rs._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ge(t) ? t.call(o && o.proxy) : t;
    ({}).NODE_ENV !== "production" && U(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && U("inject() can only be used inside setup() or functional components.");
}
function Uf(e, t, n, o = !1) {
  const s = {}, a = {};
  Ns(a, ta, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Tc(e, t, s, a);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  ({}).NODE_ENV !== "production" && Lc(t || {}, s, e), n ? e.props = o ? s : Wl(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
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
  } = e, r = _e(s), [l] = e.propsOptions;
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
        if (Qs(e.emitsOptions, g))
          continue;
        const f = t[g];
        if (l)
          if (Ae(a, g))
            f !== a[g] && (a[g] = f, d = !0);
          else {
            const m = zt(g);
            s[m] = qa(
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
          f !== a[g] && (a[g] = f, d = !0);
      }
    }
  } else {
    Tc(e, t, s, a) && (d = !0);
    let c;
    for (const u in r)
      (!t || // for camelCase
      !Ae(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = nn(u)) === u || !Ae(t, c))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[u] = qa(
        l,
        r,
        u,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete s[u]);
    if (a !== r)
      for (const u in a)
        (!t || !Ae(t, u)) && (delete a[u], d = !0);
  }
  d && jt(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Lc(t || {}, s, e);
}
function Tc(e, t, n, o) {
  const [s, a] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let l in t) {
      if (xs(l))
        continue;
      const d = t[l];
      let c;
      s && Ae(s, c = zt(l)) ? !a || !a.includes(c) ? n[c] = d : (r || (r = {}))[c] = d : Qs(e.emitsOptions, l) || (!(l in o) || d !== o[l]) && (o[l] = d, i = !0);
    }
  if (a) {
    const l = _e(n), d = r || Be;
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      n[u] = qa(
        s,
        l,
        u,
        d[u],
        e,
        !Ae(d, u)
      );
    }
  }
  return i;
}
function qa(e, t, n, o, s, a) {
  const i = e[n];
  if (i != null) {
    const r = Ae(i, "default");
    if (r && o === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ge(l)) {
        const { propsDefaults: d } = s;
        n in d ? o = d[n] : (uo(s), o = d[n] = l.call(
          null,
          t
        ), qn());
      } else
        o = l;
    }
    i[
      0
      /* shouldCast */
    ] && (a && !r ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === nn(n)) && (o = !0));
  }
  return o;
}
function Dc(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const a = e.props, i = {}, r = [];
  let l = !1;
  if (!ge(e)) {
    const c = (u) => {
      l = !0;
      const [g, f] = Dc(u, t, !0);
      Ue(i, g), f && r.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !l)
    return Pe(e) && o.set(e, ro), ro;
  if (ie(a))
    for (let c = 0; c < a.length; c++) {
      ({}).NODE_ENV !== "production" && !ze(a[c]) && U("props must be strings when using array syntax.", a[c]);
      const u = zt(a[c]);
      kr(u) && (i[u] = Be);
    }
  else if (a) {
    ({}).NODE_ENV !== "production" && !Pe(a) && U("invalid props options", a);
    for (const c in a) {
      const u = zt(c);
      if (kr(u)) {
        const g = a[c], f = i[u] = ie(g) || ge(g) ? { type: g } : Ue({}, g);
        if (f) {
          const m = Tr(Boolean, f.type), C = Tr(String, f.type);
          f[
            0
            /* shouldCast */
          ] = m > -1, f[
            1
            /* shouldCastTrue */
          ] = C < 0 || m < C, (m > -1 || Ae(f, "default")) && r.push(u);
        }
      }
    }
  }
  const d = [i, r];
  return Pe(e) && o.set(e, d), d;
}
function kr(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && U(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ga(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ar(e, t) {
  return Ga(e) === Ga(t);
}
function Tr(e, t) {
  return ie(t) ? t.findIndex((n) => Ar(n, e)) : ge(t) && Ar(t, e) ? 0 : -1;
}
function Lc(e, t, n) {
  const o = _e(t), s = n.propsOptions[0];
  for (const a in s) {
    let i = s[a];
    i != null && zf(
      a,
      o[a],
      i,
      !Ae(e, a) && !Ae(e, nn(a))
    );
  }
}
function zf(e, t, n, o) {
  const { type: s, required: a, validator: i, skipCheck: r } = n;
  if (a && o) {
    U('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !a)) {
    if (s != null && s !== !0 && !r) {
      let l = !1;
      const d = ie(s) ? s : [s], c = [];
      for (let u = 0; u < d.length && !l; u++) {
        const { valid: g, expectedType: f } = Hf(t, d[u]);
        c.push(f || ""), l = g;
      }
      if (!l) {
        U(qf(e, t, c));
        return;
      }
    }
    i && !i(t) && U('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const jf = /* @__PURE__ */ En(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Hf(e, t) {
  let n;
  const o = Ga(t);
  if (jf(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Pe(e) : o === "Array" ? n = ie(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function qf(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Gn).join(" | ")}`;
  const s = n[0], a = di(t), i = Dr(t, s), r = Dr(t, a);
  return n.length === 1 && Lr(s) && !Gf(s, a) && (o += ` with value ${i}`), o += `, got ${a} `, Lr(a) && (o += `with value ${r}.`), o;
}
function Dr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Lr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Gf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Pc = (e) => e[0] === "_" || e === "$stable", Ei = (e) => ie(e) ? e.map(Lt) : [Lt(e)], Wf = (e, t, n) => {
  if (t._n)
    return t;
  const o = b((...s) => ({}.NODE_ENV !== "production" && Ye && U(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ei(t(...s))), n);
  return o._c = !1, o;
}, Nc = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Pc(s))
      continue;
    const a = e[s];
    if (ge(a))
      t[s] = Wf(s, a, o);
    else if (a != null) {
      ({}).NODE_ENV !== "production" && U(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Ei(a);
      t[s] = () => i;
    }
  }
}, Fc = (e, t) => {
  ({}).NODE_ENV !== "production" && !Zo(e.vnode) && U(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ei(t);
  e.slots.default = () => n;
}, Kf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = _e(t), Ns(t, "_", n)) : Nc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Fc(e, t);
  Ns(e.slots, ta, 1);
}, Xf = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let a = !0, i = Be;
  if (o.shapeFlag & 32) {
    const r = t._;
    r ? {}.NODE_ENV !== "production" && jn ? (Ue(s, t), jt(e, "set", "$slots")) : n && r === 1 ? a = !1 : (Ue(s, t), !n && r === 1 && delete s._) : (a = !t.$stable, Nc(t, s)), i = t;
  } else
    t && (Fc(e, t), i = { default: 1 });
  if (a)
    for (const r in s)
      !Pc(r) && !(r in i) && delete s[r];
};
function Wa(e, t, n, o, s = !1) {
  if (ie(e)) {
    e.forEach(
      (g, f) => Wa(
        g,
        t && (ie(t) ? t[f] : t),
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
    U(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, c = r.refs === Be ? r.refs = {} : r.refs, u = r.setupState;
  if (d != null && d !== l && (ze(d) ? (c[d] = null, Ae(u, d) && (u[d] = null)) : Ke(d) && (d.value = null)), ge(l))
    tn(l, r, 12, [i, c]);
  else {
    const g = ze(l), f = Ke(l);
    if (g || f) {
      const m = () => {
        if (e.f) {
          const C = g ? Ae(u, l) ? u[l] : c[l] : l.value;
          s ? ie(C) && ci(C, a) : ie(C) ? C.includes(a) || C.push(a) : g ? (c[l] = [a], Ae(u, l) && (u[l] = c[l])) : (l.value = [a], e.k && (c[e.k] = l.value));
        } else
          g ? (c[l] = i, Ae(u, l) && (u[l] = i)) : f ? (l.value = i, e.k && (c[e.k] = i)) : {}.NODE_ENV !== "production" && U("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (m.id = -1, _t(m, n)) : m();
    } else
      ({}).NODE_ENV !== "production" && U("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let So, _n;
function Zt(e, t) {
  e.appContext.config.performance && Vs() && _n.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && tf(e, t, Vs() ? _n.now() : Date.now());
}
function Qt(e, t) {
  if (e.appContext.config.performance && Vs()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    _n.mark(o), _n.measure(
      `<${aa(e, e.type)}> ${t}`,
      n,
      o
    ), _n.clearMarks(n), _n.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && nf(e, t, Vs() ? _n.now() : Date.now());
}
function Vs() {
  return So !== void 0 || (typeof window != "undefined" && window.performance ? (So = !0, _n = window.performance) : So = !1), So;
}
function Yf() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const _t = gf;
function Jf(e) {
  return Zf(e);
}
function Zf(e, t) {
  Yf();
  const n = Fs();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && rc(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: f = st,
    insertStaticContent: m
  } = e, C = (h, _, E, P = null, T = null, V = null, q = !1, I = null, z = {}.NODE_ENV !== "production" && jn ? !1 : !!_.dynamicChildren) => {
    if (h === _)
      return;
    h && !On(h, _) && (P = X(h), dt(h, T, V, !0), h = null), _.patchFlag === -2 && (z = !1, _.dynamicChildren = null);
    const { type: O, ref: oe, shapeFlag: ee } = _;
    switch (O) {
      case Qo:
        x(h, _, E, P);
        break;
      case tt:
        k(h, _, E, P);
        break;
      case Ds:
        h == null ? L(_, E, P, q) : {}.NODE_ENV !== "production" && M(h, _, E, q);
        break;
      case xe:
        De(
          h,
          _,
          E,
          P,
          T,
          V,
          q,
          I,
          z
        );
        break;
      default:
        ee & 1 ? ce(
          h,
          _,
          E,
          P,
          T,
          V,
          q,
          I,
          z
        ) : ee & 6 ? Xe(
          h,
          _,
          E,
          P,
          T,
          V,
          q,
          I,
          z
        ) : ee & 64 || ee & 128 ? O.process(
          h,
          _,
          E,
          P,
          T,
          V,
          q,
          I,
          z,
          Q
        ) : {}.NODE_ENV !== "production" && U("Invalid VNode type:", O, `(${typeof O})`);
    }
    oe != null && T && Wa(oe, h && h.ref, V, _ || h, !_);
  }, x = (h, _, E, P) => {
    if (h == null)
      o(
        _.el = r(_.children),
        E,
        P
      );
    else {
      const T = _.el = h.el;
      _.children !== h.children && d(T, _.children);
    }
  }, k = (h, _, E, P) => {
    h == null ? o(
      _.el = l(_.children || ""),
      E,
      P
    ) : _.el = h.el;
  }, L = (h, _, E, P) => {
    [h.el, h.anchor] = m(
      h.children,
      _,
      E,
      P,
      h.el,
      h.anchor
    );
  }, M = (h, _, E, P) => {
    if (_.children !== h.children) {
      const T = g(h.anchor);
      R(h), [_.el, _.anchor] = m(
        _.children,
        E,
        T,
        P
      );
    } else
      _.el = h.el, _.anchor = h.anchor;
  }, G = ({ el: h, anchor: _ }, E, P) => {
    let T;
    for (; h && h !== _; )
      T = g(h), o(h, E, P), h = T;
    o(_, E, P);
  }, R = ({ el: h, anchor: _ }) => {
    let E;
    for (; h && h !== _; )
      E = g(h), s(h), h = E;
    s(_);
  }, ce = (h, _, E, P, T, V, q, I, z) => {
    q = q || _.type === "svg", h == null ? W(
      _,
      E,
      P,
      T,
      V,
      q,
      I,
      z
    ) : Ee(
      h,
      _,
      T,
      V,
      q,
      I,
      z
    );
  }, W = (h, _, E, P, T, V, q, I) => {
    let z, O;
    const { type: oe, props: ee, shapeFlag: le, transition: ue, dirs: Se } = h;
    if (z = h.el = i(
      h.type,
      V,
      ee && ee.is,
      ee
    ), le & 8 ? c(z, h.children) : le & 16 && me(
      h.children,
      z,
      null,
      P,
      T,
      V && oe !== "foreignObject",
      q,
      I
    ), Se && Pn(h, null, P, "created"), B(z, h, h.scopeId, q, P), ee) {
      for (const N in ee)
        N !== "value" && !xs(N) && a(
          z,
          N,
          null,
          ee[N],
          V,
          h.children,
          P,
          T,
          A
        );
      "value" in ee && a(z, "value", null, ee.value), (O = ee.onVnodeBeforeMount) && $t(O, P, h);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(z, "__vnode", {
      value: h,
      enumerable: !1
    }), Object.defineProperty(z, "__vueParentComponent", {
      value: P,
      enumerable: !1
    })), Se && Pn(h, null, P, "beforeMount");
    const Oe = (!T || T && !T.pendingBranch) && ue && !ue.persisted;
    Oe && ue.beforeEnter(z), o(z, _, E), ((O = ee && ee.onVnodeMounted) || Oe || Se) && _t(() => {
      O && $t(O, P, h), Oe && ue.enter(z), Se && Pn(h, null, P, "mounted");
    }, T);
  }, B = (h, _, E, P, T) => {
    if (E && f(h, E), P)
      for (let V = 0; V < P.length; V++)
        f(h, P[V]);
    if (T) {
      let V = T.subTree;
      if ({}.NODE_ENV !== "production" && V.patchFlag > 0 && V.patchFlag & 2048 && (V = gc(V.children) || V), _ === V) {
        const q = T.vnode;
        B(
          h,
          q,
          q.scopeId,
          q.slotScopeIds,
          T.parent
        );
      }
    }
  }, me = (h, _, E, P, T, V, q, I, z = 0) => {
    for (let O = z; O < h.length; O++) {
      const oe = h[O] = I ? pn(h[O]) : Lt(h[O]);
      C(
        null,
        oe,
        _,
        E,
        P,
        T,
        V,
        q,
        I
      );
    }
  }, Ee = (h, _, E, P, T, V, q) => {
    const I = _.el = h.el;
    let { patchFlag: z, dynamicChildren: O, dirs: oe } = _;
    z |= h.patchFlag & 16;
    const ee = h.props || Be, le = _.props || Be;
    let ue;
    E && Nn(E, !1), (ue = le.onVnodeBeforeUpdate) && $t(ue, E, _, h), oe && Pn(_, h, E, "beforeUpdate"), E && Nn(E, !0), {}.NODE_ENV !== "production" && jn && (z = 0, q = !1, O = null);
    const Se = T && _.type !== "foreignObject";
    if (O ? (Te(
      h.dynamicChildren,
      O,
      I,
      E,
      P,
      Se,
      V
    ), {}.NODE_ENV !== "production" && Ts(h, _)) : q || ot(
      h,
      _,
      I,
      null,
      E,
      P,
      Se,
      V,
      !1
    ), z > 0) {
      if (z & 16)
        J(
          I,
          _,
          ee,
          le,
          E,
          P,
          T
        );
      else if (z & 2 && ee.class !== le.class && a(I, "class", null, le.class, T), z & 4 && a(I, "style", ee.style, le.style, T), z & 8) {
        const Oe = _.dynamicProps;
        for (let N = 0; N < Oe.length; N++) {
          const ne = Oe[N], $e = ee[ne], it = le[ne];
          (it !== $e || ne === "value") && a(
            I,
            ne,
            $e,
            it,
            T,
            h.children,
            E,
            P,
            A
          );
        }
      }
      z & 1 && h.children !== _.children && c(I, _.children);
    } else
      !q && O == null && J(
        I,
        _,
        ee,
        le,
        E,
        P,
        T
      );
    ((ue = le.onVnodeUpdated) || oe) && _t(() => {
      ue && $t(ue, E, _, h), oe && Pn(_, h, E, "updated");
    }, P);
  }, Te = (h, _, E, P, T, V, q) => {
    for (let I = 0; I < _.length; I++) {
      const z = h[I], O = _[I], oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !On(z, O) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 70) ? u(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      C(
        z,
        O,
        oe,
        null,
        P,
        T,
        V,
        q,
        !0
      );
    }
  }, J = (h, _, E, P, T, V, q) => {
    if (E !== P) {
      if (E !== Be)
        for (const I in E)
          !xs(I) && !(I in P) && a(
            h,
            I,
            E[I],
            null,
            q,
            _.children,
            T,
            V,
            A
          );
      for (const I in P) {
        if (xs(I))
          continue;
        const z = P[I], O = E[I];
        z !== O && I !== "value" && a(
          h,
          I,
          O,
          z,
          q,
          _.children,
          T,
          V,
          A
        );
      }
      "value" in P && a(h, "value", E.value, P.value);
    }
  }, De = (h, _, E, P, T, V, q, I, z) => {
    const O = _.el = h ? h.el : r(""), oe = _.anchor = h ? h.anchor : r("");
    let { patchFlag: ee, dynamicChildren: le, slotScopeIds: ue } = _;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (jn || ee & 2048) && (ee = 0, z = !1, le = null), ue && (I = I ? I.concat(ue) : ue), h == null ? (o(O, E, P), o(oe, E, P), me(
      _.children,
      E,
      oe,
      T,
      V,
      q,
      I,
      z
    )) : ee > 0 && ee & 64 && le && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (Te(
      h.dynamicChildren,
      le,
      E,
      T,
      V,
      q,
      I
    ), {}.NODE_ENV !== "production" ? Ts(h, _) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (_.key != null || T && _ === T.subTree) && Ts(
        h,
        _,
        !0
        /* shallow */
      )
    )) : ot(
      h,
      _,
      E,
      oe,
      T,
      V,
      q,
      I,
      z
    );
  }, Xe = (h, _, E, P, T, V, q, I, z) => {
    _.slotScopeIds = I, h == null ? _.shapeFlag & 512 ? T.ctx.activate(
      _,
      E,
      P,
      q,
      z
    ) : We(
      _,
      E,
      P,
      T,
      V,
      q,
      z
    ) : Re(h, _, z);
  }, We = (h, _, E, P, T, V, q) => {
    const I = h.component = ap(
      h,
      P,
      T
    );
    if ({}.NODE_ENV !== "production" && I.type.__hmrId && Gg(I), {}.NODE_ENV !== "production" && (Es(h), Zt(I, "mount")), Zo(h) && (I.ctx.renderer = Q), {}.NODE_ENV !== "production" && Zt(I, "init"), rp(I), {}.NODE_ENV !== "production" && Qt(I, "init"), I.asyncDep) {
      if (T && T.registerDep(I, re), !h.el) {
        const z = I.subTree = p(tt);
        k(null, z, _, E);
      }
      return;
    }
    re(
      I,
      h,
      _,
      E,
      T,
      V,
      q
    ), {}.NODE_ENV !== "production" && (ks(), Qt(I, "mount"));
  }, Re = (h, _, E) => {
    const P = _.component = h.component;
    if (cf(h, _, E))
      if (P.asyncDep && !P.asyncResolved) {
        ({}).NODE_ENV !== "production" && Es(_), fe(P, _, E), {}.NODE_ENV !== "production" && ks();
        return;
      } else
        P.next = _, Hg(P.update), P.update();
    else
      _.el = h.el, P.vnode = _;
  }, re = (h, _, E, P, T, V, q) => {
    const I = () => {
      if (h.isMounted) {
        let { next: oe, bu: ee, u: le, parent: ue, vnode: Se } = h, Oe = oe, N;
        ({}).NODE_ENV !== "production" && Es(oe || h.vnode), Nn(h, !1), oe ? (oe.el = Se.el, fe(h, oe, q)) : oe = Se, ee && oo(ee), (N = oe.props && oe.props.onVnodeBeforeUpdate) && $t(N, ue, oe, Se), Nn(h, !0), {}.NODE_ENV !== "production" && Zt(h, "render");
        const ne = ma(h);
        ({}).NODE_ENV !== "production" && Qt(h, "render");
        const $e = h.subTree;
        h.subTree = ne, {}.NODE_ENV !== "production" && Zt(h, "patch"), C(
          $e,
          ne,
          // parent may have changed if it's in a teleport
          u($e.el),
          // anchor may have changed if it's in a fragment
          X($e),
          h,
          T,
          V
        ), {}.NODE_ENV !== "production" && Qt(h, "patch"), oe.el = ne.el, Oe === null && uf(h, ne.el), le && _t(le, T), (N = oe.props && oe.props.onVnodeUpdated) && _t(
          () => $t(N, ue, oe, Se),
          T
        ), {}.NODE_ENV !== "production" && lc(h), {}.NODE_ENV !== "production" && ks();
      } else {
        let oe;
        const { el: ee, props: le } = _, { bm: ue, m: Se, parent: Oe } = h, N = Po(_);
        if (Nn(h, !1), ue && oo(ue), !N && (oe = le && le.onVnodeBeforeMount) && $t(oe, Oe, _), Nn(h, !0), ee && Ie) {
          const ne = () => {
            ({}).NODE_ENV !== "production" && Zt(h, "render"), h.subTree = ma(h), {}.NODE_ENV !== "production" && Qt(h, "render"), {}.NODE_ENV !== "production" && Zt(h, "hydrate"), Ie(
              ee,
              h.subTree,
              h,
              T,
              null
            ), {}.NODE_ENV !== "production" && Qt(h, "hydrate");
          };
          N ? _.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && ne()
          ) : ne();
        } else {
          ({}).NODE_ENV !== "production" && Zt(h, "render");
          const ne = h.subTree = ma(h);
          ({}).NODE_ENV !== "production" && Qt(h, "render"), {}.NODE_ENV !== "production" && Zt(h, "patch"), C(
            null,
            ne,
            E,
            P,
            h,
            T,
            V
          ), {}.NODE_ENV !== "production" && Qt(h, "patch"), _.el = ne.el;
        }
        if (Se && _t(Se, T), !N && (oe = le && le.onVnodeMounted)) {
          const ne = _;
          _t(
            () => $t(oe, Oe, ne),
            T
          );
        }
        (_.shapeFlag & 256 || Oe && Po(Oe.vnode) && Oe.vnode.shapeFlag & 256) && h.a && _t(h.a, T), h.isMounted = !0, {}.NODE_ENV !== "production" && Zg(h), _ = E = P = null;
      }
    }, z = h.effect = new pi(
      I,
      () => Zs(O),
      h.scope
      // track it in component's effect scope
    ), O = h.update = () => z.run();
    O.id = h.uid, Nn(h, !0), {}.NODE_ENV !== "production" && (z.onTrack = h.rtc ? (oe) => oo(h.rtc, oe) : void 0, z.onTrigger = h.rtg ? (oe) => oo(h.rtg, oe) : void 0, O.ownerInstance = h), O();
  }, fe = (h, _, E) => {
    _.component = h;
    const P = h.vnode.props;
    h.vnode = _, h.next = null, Vf(h, _.props, P, E), Xf(h, _.children, E), Kn(), hr(), Xn();
  }, ot = (h, _, E, P, T, V, q, I, z = !1) => {
    const O = h && h.children, oe = h ? h.shapeFlag : 0, ee = _.children, { patchFlag: le, shapeFlag: ue } = _;
    if (le > 0) {
      if (le & 128) {
        yt(
          O,
          ee,
          E,
          P,
          T,
          V,
          q,
          I,
          z
        );
        return;
      } else if (le & 256) {
        Xt(
          O,
          ee,
          E,
          P,
          T,
          V,
          q,
          I,
          z
        );
        return;
      }
    }
    ue & 8 ? (oe & 16 && A(O, T, V), ee !== O && c(E, ee)) : oe & 16 ? ue & 16 ? yt(
      O,
      ee,
      E,
      P,
      T,
      V,
      q,
      I,
      z
    ) : A(O, T, V, !0) : (oe & 8 && c(E, ""), ue & 16 && me(
      ee,
      E,
      P,
      T,
      V,
      q,
      I,
      z
    ));
  }, Xt = (h, _, E, P, T, V, q, I, z) => {
    h = h || ro, _ = _ || ro;
    const O = h.length, oe = _.length, ee = Math.min(O, oe);
    let le;
    for (le = 0; le < ee; le++) {
      const ue = _[le] = z ? pn(_[le]) : Lt(_[le]);
      C(
        h[le],
        ue,
        E,
        null,
        T,
        V,
        q,
        I,
        z
      );
    }
    O > oe ? A(
      h,
      T,
      V,
      !0,
      !1,
      ee
    ) : me(
      _,
      E,
      P,
      T,
      V,
      q,
      I,
      z,
      ee
    );
  }, yt = (h, _, E, P, T, V, q, I, z) => {
    let O = 0;
    const oe = _.length;
    let ee = h.length - 1, le = oe - 1;
    for (; O <= ee && O <= le; ) {
      const ue = h[O], Se = _[O] = z ? pn(_[O]) : Lt(_[O]);
      if (On(ue, Se))
        C(
          ue,
          Se,
          E,
          null,
          T,
          V,
          q,
          I,
          z
        );
      else
        break;
      O++;
    }
    for (; O <= ee && O <= le; ) {
      const ue = h[ee], Se = _[le] = z ? pn(_[le]) : Lt(_[le]);
      if (On(ue, Se))
        C(
          ue,
          Se,
          E,
          null,
          T,
          V,
          q,
          I,
          z
        );
      else
        break;
      ee--, le--;
    }
    if (O > ee) {
      if (O <= le) {
        const ue = le + 1, Se = ue < oe ? _[ue].el : P;
        for (; O <= le; )
          C(
            null,
            _[O] = z ? pn(_[O]) : Lt(_[O]),
            E,
            Se,
            T,
            V,
            q,
            I,
            z
          ), O++;
      }
    } else if (O > le)
      for (; O <= ee; )
        dt(h[O], T, V, !0), O++;
    else {
      const ue = O, Se = O, Oe = /* @__PURE__ */ new Map();
      for (O = Se; O <= le; O++) {
        const Qe = _[O] = z ? pn(_[O]) : Lt(_[O]);
        Qe.key != null && ({}.NODE_ENV !== "production" && Oe.has(Qe.key) && U(
          "Duplicate keys found during update:",
          JSON.stringify(Qe.key),
          "Make sure keys are unique."
        ), Oe.set(Qe.key, O));
      }
      let N, ne = 0;
      const $e = le - Se + 1;
      let it = !1, xt = 0;
      const Yt = new Array($e);
      for (O = 0; O < $e; O++)
        Yt[O] = 0;
      for (O = ue; O <= ee; O++) {
        const Qe = h[O];
        if (ne >= $e) {
          dt(Qe, T, V, !0);
          continue;
        }
        let ht;
        if (Qe.key != null)
          ht = Oe.get(Qe.key);
        else
          for (N = Se; N <= le; N++)
            if (Yt[N - Se] === 0 && On(Qe, _[N])) {
              ht = N;
              break;
            }
        ht === void 0 ? dt(Qe, T, V, !0) : (Yt[ht - Se] = O + 1, ht >= xt ? xt = ht : it = !0, C(
          Qe,
          _[ht],
          E,
          null,
          T,
          V,
          q,
          I,
          z
        ), ne++);
      }
      const bo = it ? Qf(Yt) : ro;
      for (N = bo.length - 1, O = $e - 1; O >= 0; O--) {
        const Qe = Se + O, ht = _[Qe], fs = Qe + 1 < oe ? _[Qe + 1].el : P;
        Yt[O] === 0 ? C(
          null,
          ht,
          E,
          fs,
          T,
          V,
          q,
          I,
          z
        ) : it && (N < 0 || O !== bo[N] ? ut(ht, E, fs, 2) : N--);
      }
    }
  }, ut = (h, _, E, P, T = null) => {
    const { el: V, type: q, transition: I, children: z, shapeFlag: O } = h;
    if (O & 6) {
      ut(h.component.subTree, _, E, P);
      return;
    }
    if (O & 128) {
      h.suspense.move(_, E, P);
      return;
    }
    if (O & 64) {
      q.move(h, _, E, Q);
      return;
    }
    if (q === xe) {
      o(V, _, E);
      for (let ee = 0; ee < z.length; ee++)
        ut(z[ee], _, E, P);
      o(h.anchor, _, E);
      return;
    }
    if (q === Ds) {
      G(h, _, E);
      return;
    }
    if (P !== 2 && O & 1 && I)
      if (P === 0)
        I.beforeEnter(V), o(V, _, E), _t(() => I.enter(V), T);
      else {
        const { leave: ee, delayLeave: le, afterLeave: ue } = I, Se = () => o(V, _, E), Oe = () => {
          ee(V, () => {
            Se(), ue && ue();
          });
        };
        le ? le(V, Se, Oe) : Oe();
      }
    else
      o(V, _, E);
  }, dt = (h, _, E, P = !1, T = !1) => {
    const {
      type: V,
      props: q,
      ref: I,
      children: z,
      dynamicChildren: O,
      shapeFlag: oe,
      patchFlag: ee,
      dirs: le
    } = h;
    if (I != null && Wa(I, null, E, h, !0), oe & 256) {
      _.ctx.deactivate(h);
      return;
    }
    const ue = oe & 1 && le, Se = !Po(h);
    let Oe;
    if (Se && (Oe = q && q.onVnodeBeforeUnmount) && $t(Oe, _, h), oe & 6)
      It(h.component, E, P);
    else {
      if (oe & 128) {
        h.suspense.unmount(E, P);
        return;
      }
      ue && Pn(h, null, _, "beforeUnmount"), oe & 64 ? h.type.remove(
        h,
        _,
        E,
        T,
        Q,
        P
      ) : O && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== xe || ee > 0 && ee & 64) ? A(
        O,
        _,
        E,
        !1,
        !0
      ) : (V === xe && ee & 384 || !T && oe & 16) && A(z, _, E), P && Tt(h);
    }
    (Se && (Oe = q && q.onVnodeUnmounted) || ue) && _t(() => {
      Oe && $t(Oe, _, h), ue && Pn(h, null, _, "unmounted");
    }, E);
  }, Tt = (h) => {
    const { type: _, el: E, anchor: P, transition: T } = h;
    if (_ === xe) {
      ({}).NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && T && !T.persisted ? h.children.forEach((q) => {
        q.type === tt ? s(q.el) : Tt(q);
      }) : Dn(E, P);
      return;
    }
    if (_ === Ds) {
      R(h);
      return;
    }
    const V = () => {
      s(E), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (h.shapeFlag & 1 && T && !T.persisted) {
      const { leave: q, delayLeave: I } = T, z = () => q(E, V);
      I ? I(h.el, V, z) : z();
    } else
      V();
  }, Dn = (h, _) => {
    let E;
    for (; h !== _; )
      E = g(h), s(h), h = E;
    s(_);
  }, It = (h, _, E) => {
    ({}).NODE_ENV !== "production" && h.type.__hmrId && Wg(h);
    const { bum: P, scope: T, update: V, subTree: q, um: I } = h;
    P && oo(P), T.stop(), V && (V.active = !1, dt(q, h, _, E)), I && _t(I, _), _t(() => {
      h.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve()), {}.NODE_ENV !== "production" && ef(h);
  }, A = (h, _, E, P = !1, T = !1, V = 0) => {
    for (let q = V; q < h.length; q++)
      dt(h[q], _, E, P, T);
  }, X = (h) => h.shapeFlag & 6 ? X(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : g(h.anchor || h.el), Y = (h, _, E) => {
    h == null ? _._vnode && dt(_._vnode, null, null, !0) : C(_._vnode || null, h, _, null, null, null, E), hr(), sc(), _._vnode = h;
  }, Q = {
    p: C,
    um: dt,
    m: ut,
    r: Tt,
    mt: We,
    mc: me,
    pc: ot,
    pbc: Te,
    n: X,
    o: e
  };
  let ke, Ie;
  return t && ([ke, Ie] = t(
    Q
  )), {
    render: Y,
    hydrate: ke,
    createApp: $f(Y, ke)
  };
}
function Nn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ts(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (ie(o) && ie(s))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let r = s[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = pn(s[a]), r.el = i.el), n || Ts(i, r)), r.type === Qo && (r.el = i.el), {}.NODE_ENV !== "production" && r.type === tt && !r.el && (r.el = i.el);
    }
}
function Qf(e) {
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
const ep = (e) => e.__isTeleport, xe = Symbol.for("v-fgt"), Qo = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), Ds = Symbol.for("v-stc"), No = [];
let Pt = null;
function v(e = !1) {
  No.push(Pt = e ? null : []);
}
function tp() {
  No.pop(), Pt = No[No.length - 1] || null;
}
let Vo = 1;
function Pr(e) {
  Vo += e;
}
function Mc(e) {
  return e.dynamicChildren = Vo > 0 ? Pt || ro : null, tp(), Vo > 0 && Pt && Pt.push(e), e;
}
function D(e, t, n, o, s, a) {
  return Mc(
    w(
      e,
      t,
      n,
      o,
      s,
      a,
      !0
      /* isBlock */
    )
  );
}
function F(e, t, n, o, s) {
  return Mc(
    p(
      e,
      t,
      n,
      o,
      s,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function On(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && so.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const np = (...e) => Bc(
  ...e
), ta = "__vInternal", Oc = ({ key: e }) => e != null ? e : null, Ls = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ze(e) || Ke(e) || ge(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function w(e, t = null, n = null, o = 0, s = null, a = e === xe ? 0 : 1, i = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Oc(t),
    ref: t && Ls(t),
    scopeId: dc,
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
    ctx: Je
  };
  return r ? (ki(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= ze(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && U("VNode created with invalid key (NaN). VNode type:", l.type), Vo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Pt.push(l), l;
}
const p = {}.NODE_ENV !== "production" ? np : Bc;
function Bc(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === Cc) && ({}.NODE_ENV !== "production" && !e && U(`Invalid vnode type when creating vnode: ${e}.`), e = tt), co(e)) {
    const r = Ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ki(r, n), Vo > 0 && !a && Pt && (r.shapeFlag & 6 ? Pt[Pt.indexOf(e)] = r : Pt.push(r)), r.patchFlag |= -2, r;
  }
  if (Vc(e) && (e = e.__vccOpts), t) {
    t = na(t);
    let { class: r, style: l } = t;
    r && !ze(r) && (t.class = he(r)), Pe(l) && (Ba(l) && !ie(l) && (l = Ue({}, l)), t.style = nt(l));
  }
  const i = ze(e) ? 1 : df(e) ? 128 : ep(e) ? 64 : Pe(e) ? 4 : ge(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && Ba(e) && (e = _e(e), U(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
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
function na(e) {
  return e ? Ba(e) || ta in e ? Ue({}, e) : e : null;
}
function Ht(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: i } = e, r = t ? oa(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: r,
    key: r && Oc(r),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? ie(s) ? s.concat(Ls(t)) : [s, Ls(t)] : Ls(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && a === -1 && ie(i) ? i.map(Ic) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== xe ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Ht(e.ssContent),
    ssFallback: e.ssFallback && Ht(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ic(e) {
  const t = Ht(e);
  return ie(e.children) && (t.children = e.children.map(Ic)), t;
}
function zo(e = " ", t = 0) {
  return p(Qo, null, e, t);
}
function ae(e = "", t = !1) {
  return t ? (v(), F(tt, null, e)) : p(tt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? p(tt) : ie(e) ? p(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? pn(e) : p(Qo, null, String(e));
}
function pn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ht(e);
}
function ki(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ki(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(ta in t) ? t._ctx = Je : s === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    ge(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [zo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function oa(...e) {
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
function $t(e, t, n, o = null) {
  At(e, t, 7, [
    n,
    o
  ]);
}
const op = Ac();
let sp = 0;
function ap(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || op, a = {
    uid: sp++,
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
    scope: new Ml(
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
    propsOptions: Dc(o, s),
    emitsOptions: uc(o, s),
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
  return {}.NODE_ENV !== "production" ? a.ctx = Tf(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = sf.bind(null, a), e.ce && e.ce(a), a;
}
let Ye = null;
const Ai = () => Ye || Je;
let Ti, eo, Nr = "__VUE_INSTANCE_SETTERS__";
(eo = Fs()[Nr]) || (eo = Fs()[Nr] = []), eo.push((e) => Ye = e), Ti = (e) => {
  eo.length > 1 ? eo.forEach((t) => t(e)) : eo[0](e);
};
const uo = (e) => {
  Ti(e), e.scope.on();
}, qn = () => {
  Ye && Ye.scope.off(), Ti(null);
}, ip = /* @__PURE__ */ En("slot,component");
function Ka(e, t) {
  const n = t.isNativeTag || Tl;
  (ip(e) || n(e)) && U(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function $c(e) {
  return e.vnode.shapeFlag & 4;
}
let jo = !1;
function rp(e, t = !1) {
  jo = t;
  const { props: n, children: o } = e.vnode, s = $c(e);
  Uf(e, n, s, t), Kf(e, o);
  const a = s ? lp(e, t) : void 0;
  return jo = !1, a;
}
function lp(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && Ka(o.name, e.appContext.config), o.components) {
      const a = Object.keys(o.components);
      for (let i = 0; i < a.length; i++)
        Ka(a[i], e.appContext.config);
    }
    if (o.directives) {
      const a = Object.keys(o.directives);
      for (let i = 0; i < a.length; i++)
        mc(a[i]);
    }
    o.compilerOptions && Uc() && U(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Xl(new Proxy(e.ctx, Ec)), {}.NODE_ENV !== "production" && Df(e);
  const { setup: s } = o;
  if (s) {
    const a = e.setupContext = s.length > 1 ? up(e) : null;
    uo(e), Kn();
    const i = tn(
      s,
      e,
      0,
      [{}.NODE_ENV !== "production" ? Ao(e.props) : e.props, a]
    );
    if (Xn(), qn(), ui(i)) {
      if (i.then(qn, qn), t)
        return i.then((r) => {
          Fr(e, r, t);
        }).catch((r) => {
          Js(r, e, 0);
        });
      if (e.asyncDep = i, {}.NODE_ENV !== "production" && !e.suspense) {
        const r = (n = o.name) != null ? n : "Anonymous";
        U(
          `Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Fr(e, i, t);
  } else
    Rc(e, t);
}
function Fr(e, t, n) {
  ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pe(t) ? ({}.NODE_ENV !== "production" && co(t) && U(
    "setup() should not return VNodes directly - return a render function instead."
  ), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ql(t), {}.NODE_ENV !== "production" && Lf(e)) : {}.NODE_ENV !== "production" && t !== void 0 && U(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Rc(e, n);
}
let Xa;
const Uc = () => !Xa;
function Rc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Xa && !o.render) {
      const s = o.template || xi(e).template;
      if (s) {
        ({}).NODE_ENV !== "production" && Zt(e, "compile");
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: r, compilerOptions: l } = o, d = Ue(
          Ue(
            {
              isCustomElement: a,
              delimiters: r
            },
            i
          ),
          l
        );
        o.render = Xa(s, d), {}.NODE_ENV !== "production" && Qt(e, "compile");
      }
    }
    e.render = o.render || st;
  }
  uo(e), Kn(), Nf(e), Xn(), qn(), {}.NODE_ENV !== "production" && !o.render && e.render === st && !t && (o.template ? U(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : U("Component is missing template or render function."));
}
function Mr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return Is(), at(e, "get", "$attrs"), t[n];
      },
      set() {
        return U("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return U("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return at(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function cp(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return at(e, "get", "$slots"), t[n];
    }
  }));
}
function up(e) {
  const t = (n) => {
    if ({}.NODE_ENV !== "production" && (e.exposed && U("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (ie(n) ? o = "array" : Ke(n) && (o = "ref")), o !== "object" && U(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Mr(e);
    },
    get slots() {
      return cp(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return Mr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function sa(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ql(Xl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Hn)
          return Hn[n](e);
      },
      has(t, n) {
        return n in t || n in Hn;
      }
    }));
}
const dp = /(?:^|[-_])(\w)/g, gp = (e) => e.replace(dp, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Di(e, t = !0) {
  return ge(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function aa(e, t, n = !1) {
  let o = Di(t);
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
  return o ? gp(o) : n ? "App" : "Anonymous";
}
function Vc(e) {
  return ge(e) && "__vccOpts" in e;
}
const S = (e, t) => Og(e, t, jo);
function Ho(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Pe(t) && !ie(t) ? co(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && co(n) && (n = [n]), p(e, t, n));
}
const fp = Symbol.for("v-scx"), pp = () => {
  {
    const e = Ge(fp);
    return e || {}.NODE_ENV !== "production" && U(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function va(e) {
  return !!(e && e.__v_isShallow);
}
function mp() {
  if ({}.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(u) {
      return Pe(u) ? u.__isVue ? ["div", e, "VueInstance"] : Ke(u) ? [
        "div",
        {},
        ["span", e, c(u)],
        "<",
        r(u.value),
        ">"
      ] : Vn(u) ? [
        "div",
        {},
        ["span", e, va(u) ? "ShallowReactive" : "Reactive"],
        "<",
        r(u),
        `>${wn(u) ? " (readonly)" : ""}`
      ] : wn(u) ? [
        "div",
        {},
        ["span", e, va(u) ? "ShallowReadonly" : "Readonly"],
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
    u.type.props && u.props && g.push(i("props", _e(u.props))), u.setupState !== Be && g.push(i("setup", u.setupState)), u.data !== Be && g.push(i("data", _e(u.data)));
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
    return g = Ue({}, g), Object.keys(g).length ? [
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : Pe(u) ? ["object", { object: g ? _e(u) : u }] : ["span", n, String(u)];
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
    if (ie(m) && m.includes(g) || Pe(m) && g in m || u.extends && d(u.extends, g, f) || u.mixins && u.mixins.some((C) => d(C, g, f)))
      return !0;
  }
  function c(u) {
    return va(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Or = "3.3.4", hp = "http://www.w3.org/2000/svg", Bn = typeof document != "undefined" ? document : null, Br = Bn && /* @__PURE__ */ Bn.createElement("template"), _p = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? Bn.createElementNS(hp, e) : Bn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Bn.createTextNode(e),
  createComment: (e) => Bn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Bn.querySelector(e),
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
      Br.innerHTML = o ? `<svg>${e}</svg>` : e;
      const r = Br.content;
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
function vp(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function yp(e, t, n) {
  const o = e.style, s = ze(n);
  if (n && !s) {
    if (t && !ze(t))
      for (const a in t)
        n[a] == null && Ya(o, a, "");
    for (const a in n)
      Ya(o, a, n[a]);
  } else {
    const a = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = a);
  }
}
const bp = /[^\\];\s*$/, Ir = /\s*!important$/;
function Ya(e, t, n) {
  if (ie(n))
    n.forEach((o) => Ya(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && bp.test(n) && U(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Sp(e, t);
    Ir.test(n) ? e.setProperty(
      nn(o),
      n.replace(Ir, ""),
      "important"
    ) : e[o] = n;
  }
}
const $r = ["Webkit", "Moz", "ms"], ya = {};
function Sp(e, t) {
  const n = ya[t];
  if (n)
    return n;
  let o = zt(t);
  if (o !== "filter" && o in e)
    return ya[t] = o;
  o = Gn(o);
  for (let s = 0; s < $r.length; s++) {
    const a = $r[s] + o;
    if (a in e)
      return ya[t] = a;
  }
  return t;
}
const Ur = "http://www.w3.org/1999/xlink";
function wp(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ur, t.slice(6, t.length)) : e.setAttributeNS(Ur, t, n);
  else {
    const a = Qd(t);
    n == null || a && !Nl(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function Cp(e, t, n, o, s, a, i) {
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
    d === "boolean" ? n = Nl(n) : n == null && d === "string" ? (n = "", l = !0) : d === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    ({}).NODE_ENV !== "production" && !l && U(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  l && e.removeAttribute(t);
}
function zc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function xp(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Ep(e, t, n, o, s = null) {
  const a = e._vei || (e._vei = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [r, l] = kp(t);
    if (o) {
      const d = a[t] = Dp(o, s);
      zc(e, r, d, l);
    } else
      i && (xp(e, r, i, l), a[t] = void 0);
  }
}
const Rr = /(?:Once|Passive|Capture)$/;
function kp(e) {
  let t;
  if (Rr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Rr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nn(e.slice(2)), t];
}
let ba = 0;
const Ap = /* @__PURE__ */ Promise.resolve(), Tp = () => ba || (Ap.then(() => ba = 0), ba = Date.now());
function Dp(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    At(
      Lp(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Tp(), n;
}
function Lp(e, t) {
  if (ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const Vr = /^on[a-z]/, Pp = (e, t, n, o, s = !1, a, i, r, l) => {
  t === "class" ? vp(e, o, s) : t === "style" ? yp(e, n, o) : Xo(t) ? Ps(t) || Ep(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Np(e, t, o, s)) ? Cp(
    e,
    t,
    o,
    a,
    i,
    r,
    l
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), wp(e, t, o, s));
};
function Np(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Vr.test(t) && ge(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Vr.test(t) && ze(n) ? !1 : t in e;
}
const rn = "transition", wo = "animation", vn = (e, { slots: t }) => Ho(hf, Fp(e), t);
vn.displayName = "Transition";
const jc = {
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
vn.props = /* @__PURE__ */ Ue(
  {},
  hc,
  jc
);
const Fn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, zr = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Fp(e) {
  const t = {};
  for (const J in e)
    J in jc || (t[J] = e[J]);
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
  } = e, m = Mp(s), C = m && m[0], x = m && m[1], {
    onBeforeEnter: k,
    onEnter: L,
    onEnterCancelled: M,
    onLeave: G,
    onLeaveCancelled: R,
    onBeforeAppear: ce = k,
    onAppear: W = L,
    onAppearCancelled: B = M
  } = t, me = (J, De, Xe) => {
    Mn(J, De ? c : r), Mn(J, De ? d : i), Xe && Xe();
  }, Ee = (J, De) => {
    J._isLeaving = !1, Mn(J, u), Mn(J, f), Mn(J, g), De && De();
  }, Te = (J) => (De, Xe) => {
    const We = J ? W : L, Re = () => me(De, J, Xe);
    Fn(We, [De, Re]), jr(() => {
      Mn(De, J ? l : a), ln(De, J ? c : r), zr(We) || Hr(De, o, C, Re);
    });
  };
  return Ue(t, {
    onBeforeEnter(J) {
      Fn(k, [J]), ln(J, a), ln(J, i);
    },
    onBeforeAppear(J) {
      Fn(ce, [J]), ln(J, l), ln(J, d);
    },
    onEnter: Te(!1),
    onAppear: Te(!0),
    onLeave(J, De) {
      J._isLeaving = !0;
      const Xe = () => Ee(J, De);
      ln(J, u), Ip(), ln(J, g), jr(() => {
        J._isLeaving && (Mn(J, u), ln(J, f), zr(G) || Hr(J, o, x, Xe));
      }), Fn(G, [J, Xe]);
    },
    onEnterCancelled(J) {
      me(J, !1), Fn(M, [J]);
    },
    onAppearCancelled(J) {
      me(J, !0), Fn(B, [J]);
    },
    onLeaveCancelled(J) {
      Ee(J), Fn(R, [J]);
    }
  });
}
function Mp(e) {
  if (e == null)
    return null;
  if (Pe(e))
    return [Sa(e.enter), Sa(e.leave)];
  {
    const t = Sa(e);
    return [t, t];
  }
}
function Sa(e) {
  const t = jd(e);
  return {}.NODE_ENV !== "production" && Rg(t, "<transition> explicit duration"), t;
}
function ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function Mn(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function jr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Op = 0;
function Hr(e, t, n, o) {
  const s = e._endId = ++Op, a = () => {
    s === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: r, propCount: l } = Bp(e, t);
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
function Bp(e, t) {
  const n = window.getComputedStyle(e), o = (m) => (n[m] || "").split(", "), s = o(`${rn}Delay`), a = o(`${rn}Duration`), i = qr(s, a), r = o(`${wo}Delay`), l = o(`${wo}Duration`), d = qr(r, l);
  let c = null, u = 0, g = 0;
  t === rn ? i > 0 && (c = rn, u = i, g = a.length) : t === wo ? d > 0 && (c = wo, u = d, g = l.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? rn : wo : null, g = c ? c === rn ? a.length : l.length : 0);
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
function qr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Gr(n) + Gr(e[o])));
}
function Gr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ip() {
  return document.body.offsetHeight;
}
const Wr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ie(t) ? (n) => oo(t, n) : t;
}, $p = {
  created(e, { value: t }, n) {
    e.checked = Ms(t, n.props.value), e._assign = Wr(n), zc(e, "change", () => {
      e._assign(Up(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e._assign = Wr(o), t !== n && (e.checked = Ms(t, o.props.value));
  }
};
function Up(e) {
  return "_value" in e ? e._value : e.value;
}
const Rp = ["ctrl", "shift", "alt", "meta"], Vp = {
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
  exact: (e, t) => Rp.some((n) => e[`${n}Key`] && !t.includes(n))
}, et = (e, t) => (n, ...o) => {
  for (let s = 0; s < t.length; s++) {
    const a = Vp[t[s]];
    if (a && a(n, t))
      return;
  }
  return e(n, ...o);
}, zp = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ao = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const o = nn(n.key);
  if (t.some((s) => s === o || zp[s] === o))
    return e(n);
}, Hc = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Co(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Co(e, !0), o.enter(e)) : o.leave(e, () => {
      Co(e, !1);
    }) : Co(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Co(e, t);
  }
};
function Co(e, t) {
  e.style.display = t ? e._vod : "none";
}
const jp = /* @__PURE__ */ Ue({ patchProp: Pp }, _p);
let Kr;
function Hp() {
  return Kr || (Kr = Jf(jp));
}
const qc = (...e) => {
  const t = Hp().createApp(...e);
  ({}).NODE_ENV !== "production" && (qp(t), Gp(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Wp(o);
    if (!s)
      return;
    const a = t._component;
    !ge(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function qp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Yd(t) || Jd(t),
    writable: !1
  });
}
function Gp(e) {
  if (Uc()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        U(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return U(o), n;
      },
      set() {
        U(o);
      }
    });
  }
}
function Wp(e) {
  if (ze(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && U(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && U(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Kp() {
  mp();
}
({}).NODE_ENV !== "production" && Kp();
const H = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Xp = {
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
}, Yp = ["width", "height", "aria-labelledby"], Jp = ["id"], Zp = ["fill"], Qp = ["d"];
function em(e, t, n, o, s, a) {
  return v(), D("span", {
    class: he(["mw-ui-icon notranslate", a.classes])
  }, [
    (v(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (v(), D("title", {
        key: 0,
        id: n.iconName
      }, se(n.iconName), 9, Jp)) : ae("", !0),
      w("g", { fill: n.iconColor }, [
        w("path", { d: a.iconImagePath }, null, 8, Qp)
      ], 8, Zp)
    ], 8, Yp))
  ], 2);
}
const qe = /* @__PURE__ */ H(Xp, [["render", em]]);
const tm = {
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
}, nm = { class: "mw-ui-button__content" }, om = ["textContent"];
function sm(e, t, n, o, s, a) {
  const i = y("mw-icon");
  return v(), F(_o(a.component), {
    class: he(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: b(() => [
      je(e.$slots, "default", {}, () => [
        w("span", nm, [
          n.icon ? (v(), F(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: he(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : ae("", !0),
          !a.isIcon && n.label ? (v(), D("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: se(n.label)
          }, null, 8, om)) : ae("", !0),
          n.indicator ? (v(), F(i, oa({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [gn(a.indicatorClickEvent)]: t[0] || (t[0] = et((r) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : ae("", !0)
        ])
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const ye = /* @__PURE__ */ H(tm, [["render", sm]]);
const am = {
  name: "MwButtonGroup",
  components: {
    MwButton: ye
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
}, im = { class: "row mw-ui-button-group ma-0 pa-0" };
function rm(e, t, n, o, s, a) {
  const i = y("mw-button");
  return v(), D("div", im, [
    (v(!0), D(xe, null, Ze(n.items, (r) => (v(), F(i, oa({
      key: r.value,
      value: r.value,
      "aria-selected": a.isActive(r) || null
    }, r.props, {
      class: ["ma-0", a.buttonClasses(r)],
      style: a.activeIndicatorStyle(r),
      onClick: et((l) => e.$emit("select", r.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const es = /* @__PURE__ */ H(am, [["render", rm]]);
const lm = {
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
}, cm = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, um = { class: "col-12 ma-0 pa-0" };
function dm(e, t, n, o, s, a) {
  const i = y("mw-button-group");
  return v(), D("footer", cm, [
    w("div", um, [
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
const gm = /* @__PURE__ */ H(lm, [["render", dm]]);
const fm = {
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
}, pm = { class: "mw-ui-card" }, mm = ["textContent"], hm = { class: "mw-ui-card__content" };
function _m(e, t, n, o, s, a) {
  return v(), D("div", pm, [
    je(e.$slots, "header", {}, () => [
      n.title ? (v(), D("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: se(n.title)
      }, null, 8, mm)) : ae("", !0)
    ]),
    w("div", hm, [
      je(e.$slots, "default")
    ])
  ]);
}
const Wt = /* @__PURE__ */ H(fm, [["render", _m]]);
const vm = {}, ym = { class: "mw-ui-divider row" };
function bm(e, t) {
  return v(), D("div", ym);
}
const ts = /* @__PURE__ */ H(vm, [["render", bm]]);
const Sm = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
function wm(e, t, n, o, s, a) {
  return v(), F(_o(n.tag), { class: "mw-grid container" }, {
    default: b(() => [
      je(e.$slots, "default")
    ], void 0),
    _: 3
  });
}
const Gc = /* @__PURE__ */ H(Sm, [["render", wm]]), Cm = {
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
function xm(e, t, n, o, s, a) {
  return v(), F(_o(n.tag), {
    class: he(a.classes)
  }, {
    default: b(() => [
      je(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const be = /* @__PURE__ */ H(Cm, [["render", xm]]), Ja = ["mobile", "tablet", "desktop", "desktop-wide"], Em = Ja.reduce(
  (e, t) => bt(rt({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), km = {
  name: "MwCol",
  props: bt(rt({}, Em), {
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
      for (let n = 0; n < Ja.length; n++) {
        let o = Ja[n], s = this.$props[o];
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
function Am(e, t, n, o, s, a) {
  return v(), F(_o(n.tag), {
    class: he(a.classes)
  }, {
    default: b(() => [
      je(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const we = /* @__PURE__ */ H(km, [["render", Am]]), zs = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Tm = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", Dm = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Wc = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Yn = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Lm = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Pm = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Nm = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Kc = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Xc = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", kn = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Yc = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z", Mt = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", ia = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Li = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Pi = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Jc = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Zc = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Qc = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", eu = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ns = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", tu = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", nu = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Za = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", os = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Fm = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Mm = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, yn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Om = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, go = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Bm = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Im = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z", Xr = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z", Ni = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", $m = "M 1 3 L 1 15 A 2 2 0 0 0 3 17 L 15 17 L 15 12.234375 A 3 3 0 0 0 17 13 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 A 3 3 0 0 0 15 7.7636719 L 15 3 L 10.580078 3 A 3 3 0 0 1 11 4.5 A 3 3 0 0 1 5 4.5 A 3 3 0 0 1 5.4199219 3 L 1 3 z", Um = "M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z", Rm = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", Vm = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", zm = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const jm = {
  name: "MwDialog",
  components: {
    MwButton: ye,
    MwRow: be,
    MwCol: we,
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
    const n = Z(null), o = S(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = S(() => ({
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
        l ? (i(), ho(() => {
          n.value.focus();
        })) : a();
      }
    );
    const r = S(() => ({
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
}, Hm = { class: "mw-ui-dialog__shell items-stretch" }, qm = { class: "mw-ui-dialog__body" };
function Gm(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-button"), l = y("mw-row"), d = y("mw-divider");
  return v(), F(vn, {
    name: `mw-ui-animation-${n.animation}`,
    style: nt(o.cssVars)
  }, {
    default: b(() => [
      n.value ? (v(), D("div", {
        key: 0,
        ref: "root",
        class: he(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = ao((c) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        w("div", {
          class: "mw-ui-dialog__overlay",
          style: nt(o.overlayStyles),
          onClick: t[0] || (t[0] = (c) => !n.persistent && o.close)
        }, null, 4),
        w("div", Hm, [
          n.header ? je(e.$slots, "header", { key: 0 }, () => [
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
            p(d)
          ]) : ae("", !0),
          w("div", qm, [
            je(e.$slots, "default")
          ]),
          je(e.$slots, "footer")
        ])
      ], 34)) : ae("", !0)
    ], void 0),
    _: 3
  }, 8, ["name", "style"]);
}
const Ot = /* @__PURE__ */ H(jm, [["render", Gm]]);
const Wm = {
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
      const t = rt({}, e.$attrs);
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
}, Km = { class: "mw-ui-input__content" };
function Xm(e, t, n, o, s, a) {
  const i = y("mw-icon");
  return v(), D("div", {
    class: he(a.classes),
    onClick: t[2] || (t[2] = (r) => a.focus())
  }, [
    w("div", Km, [
      je(e.$slots, "icon", {}, () => [
        n.icon ? (v(), F(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : ae("", !0)
      ]),
      (v(), F(_o(n.type === "textarea" ? n.type : "input"), oa({
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
        textContent: se(n.value)
      }), null, 16, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      je(e.$slots, "indicator", {}, () => [
        n.indicator ? (v(), F(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = et((r) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : ae("", !0)
      ])
    ])
  ], 2);
}
const Fi = /* @__PURE__ */ H(Wm, [["render", Xm]]);
const Ym = {
  name: "MwMessage",
  components: { MwCol: we, MwRow: be, MwIcon: qe, MwButton: ye },
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
      notice: Mm,
      warning: go,
      success: yn,
      error: Om
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
function Jm(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-col"), l = y("mw-button"), d = y("mw-row");
  return e.shown ? (v(), F(d, {
    key: 0,
    class: he([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: b(() => [
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
        default: b(() => [
          je(e.$slots, "default")
        ], void 0, !0),
        _: 3
      }, 8, ["id"]),
      je(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (v(), F(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : ae("", !0)
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : ae("", !0);
}
const Zm = /* @__PURE__ */ H(Ym, [["render", Jm]]);
const Qm = {}, eh = { class: "mw-ui-spinner" }, th = /* @__PURE__ */ w("div", { class: "mw-ui-spinner__bounce" }, null, -1), nh = [
  th
];
function oh(e, t) {
  return v(), D("div", eh, nh);
}
const sn = /* @__PURE__ */ H(Qm, [["render", oh]]), kt = {
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
const sh = {
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
      default: Ni
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
    const n = S(() => {
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
function ah(e, t, n, o, s, a) {
  const i = y("mw-ui-icon");
  return n.thumbnail ? (v(), D("div", {
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
const Mi = /* @__PURE__ */ H(sh, [["render", ah]]);
const ih = {
  name: "MwRadio",
  components: { MwRow: be },
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
}, rh = { class: "mw-ui-radio__controls" }, lh = ["id", "disabled", "name", "value"], ch = /* @__PURE__ */ w("span", { class: "mw-ui-radio__controls__icon" }, null, -1), uh = ["for", "textContent"];
function dh(e, t, n, o, s, a) {
  const i = y("mw-row");
  return v(), F(i, {
    class: he(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: b(() => [
      w("div", rh, [
        j(w("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => a.inputModel = r),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, lh), [
          [$p, a.inputModel]
        ]),
        ch
      ]),
      w("label", {
        for: n.id,
        class: "ps-2",
        textContent: se(n.label)
      }, null, 8, uh)
    ], void 0),
    _: 1
  }, 8, ["class"]);
}
const js = /* @__PURE__ */ H(ih, [["render", dh]]), ou = {
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
      (o) => Ho(js, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Ho("div", { class: "mw-ui-radio-group" }, n);
  }
};
const gh = {
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
}, fh = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function ph(e, t, n, o, s, a) {
  return v(), D("div", {
    class: he(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: nt(a.containerStyles)
  }, [
    w("div", {
      class: he(["mw-progress-bar__bar", a.barClass]),
      style: nt(a.barStyles)
    }, null, 6)
  ], 14, fh);
}
const su = /* @__PURE__ */ H(gh, [["render", ph]]), mh = (e, t, n, o) => (s) => {
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
}, hh = (e, t, n, o) => ({ initiateDrag: mh(
  e,
  t,
  n,
  o
) }), _h = (e, t, n, o) => {
  const s = Z(0), a = S(
    () => t.value > e.value
  ), i = S(
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
const vh = {
  name: "MwExpandableContent",
  components: {
    MwButton: ye
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
    const t = Z(!0), n = Z(null), o = S(
      () => Math.min(e.minHeight, s.value)
    ), s = Z(1), { initiateDrag: a } = hh(
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
    } = _h(o, s, n, t), u = () => d(l.value + 1), g = Z(null), f = S(() => ({
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
    return pt(() => K(this, null, function* () {
      var x;
      yield ho(), s.value = n.value.scrollHeight, (x = g.value) == null || x.addEventListener(
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
      mwIconCollapse: Bm,
      mwIconExpand: Xc,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: r,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, yh = { class: "mw-ui-expandable-content__container" }, bh = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, Sh = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function wh(e, t, n, o, s, a) {
  const i = y("mw-button");
  return v(), D("div", {
    class: "mw-ui-expandable-content",
    style: nt(o.cssVars)
  }, [
    w("div", yh, [
      w("div", {
        ref: "contentRef",
        class: he(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        je(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (v(), D("div", bh, [
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
        }, null, 8, ["icon", "disabled", "onClick"])) : ae("", !0)
      ])) : ae("", !0)
    ]),
    w("div", Sh, [
      w("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...r) => o.onDragButtonClicked && o.onDragButtonClicked(...r))
      })
    ], 512)
  ], 4);
}
const Ch = /* @__PURE__ */ H(vh, [["render", wh]]);
const xh = {
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
    const t = S(() => e.size / 2 * 0.9), n = S(() => Math.PI * (t.value * 2)), o = S(
      () => (100 - e.percentage) / 100 * n.value
    ), s = S(() => ({
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
}, Eh = ["width", "height", "viewport"], kh = ["r", "cx", "cy", "stroke-dasharray"], Ah = ["r", "cx", "cy", "stroke-dasharray"];
function Th(e, t, n, o, s, a) {
  return v(), D("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: nt(o.cssVars)
  }, [
    w("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, kh),
    w("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: nt({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Ah)
  ], 12, Eh);
}
const au = /* @__PURE__ */ H(xh, [["render", Th]]), cn = {
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
}, wa = {
  mobile: () => matchMedia(un.mobile).matches,
  tablet: () => matchMedia(un.tablet).matches,
  desktop: () => matchMedia(un.desktop).matches,
  desktopwide: () => matchMedia(un["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(un["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(un["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(un["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(un["desktop-and-down"]).matches
}, Dh = {
  install: (e) => {
    const t = () => {
      for (let o in wa)
        wa.hasOwnProperty(o) && (n.value[o] = wa[o]());
    }, n = Z({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = bt(rt({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, Lh = {
  install: (e) => {
    e.config.globalProperties.$mwui = bt(rt({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
function Ph() {
  return iu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function iu() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Nh = typeof Proxy == "function", Fh = "devtools-plugin:setup", Mh = "plugin:settings:set";
let to, Qa;
function Oh() {
  var e;
  return to !== void 0 || (typeof window != "undefined" && window.performance ? (to = !0, Qa = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (to = !0, Qa = global.perf_hooks.performance) : to = !1), to;
}
function Bh() {
  return Oh() ? Qa.now() : Date.now();
}
class Ih {
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
        return Bh();
      }
    }, n && n.on(Mh, (i, r) => {
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
    return K(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function ru(e, t) {
  const n = e, o = iu(), s = Ph(), a = Nh && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Fh, e, t);
  else {
    const i = a ? new Ih(n, s) : null;
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
var lu = "store";
function te(e) {
  return e === void 0 && (e = null), Ge(e !== null ? e : lu);
}
function Jn(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function cu(e) {
  return e !== null && typeof e == "object";
}
function $h(e) {
  return e && typeof e.then == "function";
}
function Nt(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Uh(e, t) {
  return function() {
    return e(t);
  };
}
function uu(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var o = t.indexOf(e);
    o > -1 && t.splice(o, 1);
  };
}
function du(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  ra(e, n, [], e._modules.root, !0), Oi(e, n, t);
}
function Oi(e, t, n) {
  var o = e._state, s = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var a = e._wrappedGetters, i = {}, r = {}, l = tg(!0);
  l.run(function() {
    Jn(a, function(d, c) {
      i[c] = Uh(d, e), r[c] = S(function() {
        return i[c]();
      }), Object.defineProperty(e.getters, c, {
        get: function() {
          return r[c].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = mo({
    data: t
  }), e._scope = l, e.strict && Hh(e), o && n && e._withCommit(function() {
    o.data = null;
  }), s && s.stop();
}
function ra(e, t, n, o, s) {
  var a = !n.length, i = e._modules.getNamespace(n);
  if (o.namespaced && (e._modulesNamespaceMap[i] && {}.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = o), !a && !s) {
    var r = Bi(t, n.slice(0, -1)), l = n[n.length - 1];
    e._withCommit(function() {
      ({}).NODE_ENV !== "production" && l in r && console.warn(
        '[vuex] state field "' + l + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), r[l] = o.state;
    });
  }
  var d = o.context = Rh(e, i, n);
  o.forEachMutation(function(c, u) {
    var g = i + u;
    Vh(e, g, c, d);
  }), o.forEachAction(function(c, u) {
    var g = c.root ? u : i + u, f = c.handler || c;
    zh(e, g, f, d);
  }), o.forEachGetter(function(c, u) {
    var g = i + u;
    jh(e, g, c, d);
  }), o.forEachChild(function(c, u) {
    ra(e, t, n.concat(u), c, s);
  });
}
function Rh(e, t, n) {
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
        return gu(e, t);
      }
    },
    state: {
      get: function() {
        return Bi(e.state, n);
      }
    }
  }), s;
}
function gu(e, t) {
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
function Vh(e, t, n, o) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function(i) {
    n.call(e, o.state, i);
  });
}
function zh(e, t, n, o) {
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
    return $h(r) || (r = Promise.resolve(r)), e._devtoolHook ? r.catch(function(l) {
      throw e._devtoolHook.emit("vuex:error", l), l;
    }) : r;
  });
}
function jh(e, t, n, o) {
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
function Hh(e) {
  He(function() {
    return e._state.data;
  }, function() {
    ({}).NODE_ENV !== "production" && Nt(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Bi(e, t) {
  return t.reduce(function(n, o) {
    return n[o];
  }, e);
}
function Hs(e, t, n) {
  return cu(e) && e.type && (n = t, t = e, e = e.type), {}.NODE_ENV !== "production" && Nt(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var qh = "vuex bindings", Yr = "vuex:mutations", Ca = "vuex:actions", no = "vuex", Gh = 0;
function Wh(e, t) {
  ru(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [qh]
    },
    function(n) {
      n.addTimelineLayer({
        id: Yr,
        label: "Vuex Mutations",
        color: Jr
      }), n.addTimelineLayer({
        id: Ca,
        label: "Vuex Actions",
        color: Jr
      }), n.addInspector({
        id: no,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(o) {
        if (o.app === e && o.inspectorId === no)
          if (o.filter) {
            var s = [];
            hu(s, t._modules.root, o.filter, ""), o.rootNodes = s;
          } else
            o.rootNodes = [
              mu(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(o) {
        if (o.app === e && o.inspectorId === no) {
          var s = o.nodeId;
          gu(t, s), o.state = Yh(
            Zh(t._modules, s),
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
          layerId: Yr,
          event: {
            time: Date.now(),
            title: o.type,
            data: a
          }
        });
      }), t.subscribeAction({
        before: function(o, s) {
          var a = {};
          o.payload && (a.payload = o.payload), o._id = Gh++, o._time = Date.now(), a.state = s, n.addTimelineEvent({
            layerId: Ca,
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
            layerId: Ca,
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
var Jr = 8702998, Kh = 6710886, Xh = 16777215, fu = {
  label: "namespaced",
  textColor: Xh,
  backgroundColor: Kh
};
function pu(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function mu(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: pu(t),
    tags: e.namespaced ? [fu] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return mu(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function hu(e, t, n, o) {
  o.includes(n) && e.push({
    id: o || "root",
    label: o.endsWith("/") ? o.slice(0, o.length - 1) : o || "Root",
    tags: t.namespaced ? [fu] : []
  }), Object.keys(t._children).forEach(function(s) {
    hu(e, t._children[s], n, o + s + "/");
  });
}
function Yh(e, t, n) {
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
    var a = Jh(t);
    s.getters = Object.keys(a).map(function(i) {
      return {
        key: i.endsWith("/") ? pu(i) : i,
        editable: !1,
        value: ei(function() {
          return a[i];
        })
      };
    });
  }
  return s;
}
function Jh(e) {
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
      }), s[a] = ei(function() {
        return e[n];
      });
    } else
      t[n] = ei(function() {
        return e[n];
      });
  }), t;
}
function Zh(e, t) {
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
function ei(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Bt = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var o = t.state;
  this.state = (typeof o == "function" ? o() : o) || {};
}, _u = { namespaced: { configurable: !0 } };
_u.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Bt.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
Bt.prototype.removeChild = function(t) {
  delete this._children[t];
};
Bt.prototype.getChild = function(t) {
  return this._children[t];
};
Bt.prototype.hasChild = function(t) {
  return t in this._children;
};
Bt.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
Bt.prototype.forEachChild = function(t) {
  Jn(this._children, t);
};
Bt.prototype.forEachGetter = function(t) {
  this._rawModule.getters && Jn(this._rawModule.getters, t);
};
Bt.prototype.forEachAction = function(t) {
  this._rawModule.actions && Jn(this._rawModule.actions, t);
};
Bt.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && Jn(this._rawModule.mutations, t);
};
Object.defineProperties(Bt.prototype, _u);
var Zn = function(t) {
  this.register([], t, !1);
};
Zn.prototype.get = function(t) {
  return t.reduce(function(n, o) {
    return n.getChild(o);
  }, this.root);
};
Zn.prototype.getNamespace = function(t) {
  var n = this.root;
  return t.reduce(function(o, s) {
    return n = n.getChild(s), o + (n.namespaced ? s + "/" : "");
  }, "");
};
Zn.prototype.update = function(t) {
  vu([], this.root, t);
};
Zn.prototype.register = function(t, n, o) {
  var s = this;
  o === void 0 && (o = !0), {}.NODE_ENV !== "production" && yu(t, n);
  var a = new Bt(n, o);
  if (t.length === 0)
    this.root = a;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], a);
  }
  n.modules && Jn(n.modules, function(r, l) {
    s.register(t.concat(l), r, o);
  });
};
Zn.prototype.unregister = function(t) {
  var n = this.get(t.slice(0, -1)), o = t[t.length - 1], s = n.getChild(o);
  if (!s) {
    ({}).NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + o + "', which is not registered"
    );
    return;
  }
  s.runtime && n.removeChild(o);
};
Zn.prototype.isRegistered = function(t) {
  var n = this.get(t.slice(0, -1)), o = t[t.length - 1];
  return n ? n.hasChild(o) : !1;
};
function vu(e, t, n) {
  if ({}.NODE_ENV !== "production" && yu(e, n), t.update(n), n.modules)
    for (var o in n.modules) {
      if (!t.getChild(o)) {
        ({}).NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + o + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      vu(
        e.concat(o),
        t.getChild(o),
        n.modules[o]
      );
    }
}
var Zr = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Qh = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, Qr = {
  getters: Zr,
  mutations: Zr,
  actions: Qh
};
function yu(e, t) {
  Object.keys(Qr).forEach(function(n) {
    if (t[n]) {
      var o = Qr[n];
      Jn(t[n], function(s, a) {
        Nt(
          o.assert(s),
          e_(e, n, a, s, o.expected)
        );
      });
    }
  });
}
function e_(e, t, n, o, s) {
  var a = t + " should be " + s + ' but "' + t + "." + n + '"';
  return e.length > 0 && (a += ' in module "' + e.join(".") + '"'), a += " is " + JSON.stringify(o) + ".", a;
}
function t_(e) {
  return new vt(e);
}
var vt = function e(t) {
  var n = this;
  t === void 0 && (t = {}), {}.NODE_ENV !== "production" && (Nt(typeof Promise != "undefined", "vuex requires a Promise polyfill in this browser."), Nt(this instanceof e, "store must be called with the new operator."));
  var o = t.plugins;
  o === void 0 && (o = []);
  var s = t.strict;
  s === void 0 && (s = !1);
  var a = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new Zn(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = a;
  var i = this, r = this, l = r.dispatch, d = r.commit;
  this.dispatch = function(g, f) {
    return l.call(i, g, f);
  }, this.commit = function(g, f, m) {
    return d.call(i, g, f, m);
  }, this.strict = s;
  var c = this._modules.root.state;
  ra(this, c, [], this._modules.root), Oi(this, c), o.forEach(function(u) {
    return u(n);
  });
}, Ii = { state: { configurable: !0 } };
vt.prototype.install = function(t, n) {
  t.provide(n || lu, this), t.config.globalProperties.$store = this;
  var o = this._devtools !== void 0 ? this._devtools : {}.NODE_ENV !== "production" || !1;
  o && Wh(t, this);
};
Ii.state.get = function() {
  return this._state.data;
};
Ii.state.set = function(e) {
  ({}).NODE_ENV !== "production" && Nt(!1, "use store.replaceState() to explicit replace store state.");
};
vt.prototype.commit = function(t, n, o) {
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
vt.prototype.dispatch = function(t, n) {
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
vt.prototype.subscribe = function(t, n) {
  return uu(t, this._subscribers, n);
};
vt.prototype.subscribeAction = function(t, n) {
  var o = typeof t == "function" ? { before: t } : t;
  return uu(o, this._actionSubscribers, n);
};
vt.prototype.watch = function(t, n, o) {
  var s = this;
  return {}.NODE_ENV !== "production" && Nt(typeof t == "function", "store.watch only accepts a function."), He(function() {
    return t(s.state, s.getters);
  }, n, Object.assign({}, o));
};
vt.prototype.replaceState = function(t) {
  var n = this;
  this._withCommit(function() {
    n._state.data = t;
  });
};
vt.prototype.registerModule = function(t, n, o) {
  o === void 0 && (o = {}), typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && (Nt(Array.isArray(t), "module path must be a string or an Array."), Nt(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), ra(this, this.state, t, this._modules.get(t), o.preserveState), Oi(this, this.state);
};
vt.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var o = Bi(n.state, t.slice(0, -1));
    delete o[t[t.length - 1]];
  }), du(this);
};
vt.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
vt.prototype.hotUpdate = function(t) {
  this._modules.update(t), du(this, !0);
};
vt.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties(vt.prototype, Ii);
var n_ = s_(function(e, t) {
  var n = {};
  return {}.NODE_ENV !== "production" && !bu(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), o_(t).forEach(function(o) {
    var s = o.key, a = o.val;
    n[s] = function() {
      var r = this.$store.state, l = this.$store.getters;
      if (e) {
        var d = a_(this.$store, "mapState", e);
        if (!d)
          return;
        r = d.context.state, l = d.context.getters;
      }
      return typeof a == "function" ? a.call(this, r, l) : r[a];
    }, n[s].vuex = !0;
  }), n;
});
function o_(e) {
  return bu(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function bu(e) {
  return Array.isArray(e) || cu(e);
}
function s_(e) {
  return function(t, n) {
    return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
  };
}
function a_(e, t, n) {
  var o = e._modulesNamespaceMap[n];
  return {}.NODE_ENV !== "production" && !o && console.error("[vuex] module namespace not found in " + t + "(): " + n), o;
}
class vo extends Error {
}
const i_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new vo();
}), Su = { assertUser: i_ };
const r_ = { class: "pa-4 sx-login-dialog__header" }, l_ = { class: "sx-login-dialog__body px-6 pb-4" }, c_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, u_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = te(), n = S(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = Z(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const r = Ce("i18n");
      return n.value ? (v(), F(pe(Ot), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: b(() => [
          w("div", r_, [
            j(w("h4", null, null, 512), [
              [r, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: b(() => [
          j(w("div", l_, null, 512), [
            [r, void 0, "cx-sx-login-dialog-body"]
          ]),
          w("div", c_, [
            p(pe(ye), {
              type: "text",
              progressive: "",
              label: a.$i18n("cx-sx-login-dialog-button-label"),
              href: s.value,
              target: "_blank"
            }, null, 8, ["label", "href"])
          ])
        ], void 0),
        _: 1
      })) : ae("", !0);
    };
  }
};
const d_ = {
  __name: "App",
  setup(e) {
    const t = te(), n = S(
      () => t.state.application.autoSavePending
    );
    return pt(() => {
      window.addEventListener("beforeunload", (o) => {
        n.value && (o.preventDefault(), o.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (o) => {
        document.visibilityState === "visible" && Su.assertUser().then(() => t.commit("application/setIsLoginDialogOn", !1)).catch((s) => {
          s instanceof vo && t.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (o, s) => {
      const a = y("router-view");
      return v(), F(pe(Gc), { id: "contenttranslation" }, {
        default: b(() => [
          p(pe(be), { class: "cx-container" }, {
            default: b(() => [
              p(pe(we), { cols: "12" }, {
                default: b(() => [
                  p(a, null, {
                    default: b(({ Component: i, route: r }) => [
                      p(vn, {
                        name: r.meta.transitionName
                      }, {
                        default: b(() => [
                          (v(), F(_o(i)))
                        ], void 0, !0),
                        _: 2
                      }, 1032, ["name"]),
                      p(u_)
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
}, g_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, f_ = {
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
}, p_ = [
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
], m_ = (e, t, n) => {
  let o, s, a, i, r;
  return !e || !t ? 0 : e === t ? 1 : (s = i = el(e, n), a = r = el(t, n), r.length > i.length && (s = r, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, el = function(e, t) {
  return e ? p_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, h_ = 95, __ = 85, v_ = [
  { status: "failure", value: 100 - h_ },
  { status: "warning", value: 100 - __ },
  { status: "success", value: 100 }
], wu = (e, t, n) => {
  const o = tl(e).textContent, s = tl(t).textContent, a = 100 - 100 * m_(s, o, n);
  return Math.ceil(a);
}, y_ = (e) => v_.find((t) => e <= t.value).status, b_ = (e, t) => wu(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), tl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Cn = { calculateScore: wu, getScoreStatus: y_, getMTScoreForPageSection: b_ }, xa = "original", Ea = "empty", S_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class Ve {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      xa,
      Ea
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return S_[t] || t;
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
    return xa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ea;
  }
  static isUserMTProvider(t) {
    return [xa, Ea].includes(
      t
    );
  }
}
const Me = new mw.cx.SiteMapper(), Cu = mw.util.getUrl, w_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class xu {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class fo {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new xu(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const nl = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => bt(rt({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class C_ {
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
    const t = nl((s = this.user) == null ? void 0 : s.content), n = nl((a = this.mt) == null ? void 0 : a.content);
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
class ss {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = bt(rt({}, a), {
      [Ve.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Ve.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [Ve.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [Ve.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[Ve.ORIGINAL_TEXT_PROVIDER_KEY];
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
const ol = (e) => {
  var n;
  const t = qs(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, qs = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, In = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Eu = (e) => {
  const t = qs(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = x_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, x_ = (e) => {
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
}, ku = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Au = (e) => {
  const t = ku(e);
  return t == null ? void 0 : t.targetExists;
};
class ka {
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
let St = class {
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
      (a) => In(a)
    );
    s && Au(s) && (this.blockTemplateAdaptationInfo[t] = ku(s));
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
      (t) => In(t)
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
    return this.isBlockTemplate ? ol(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => In(o));
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
    return n && ol(n) || "";
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
      (a) => In(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new ka({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new ka({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new ka({
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
    if (!t || Ve.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => In(s)
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
const Aa = "__LEAD_SECTION__";
class $i {
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
      [Ve.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Ve.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [Ve.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [Ve.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Aa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[Ve.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[Ve.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof St ? n.transclusionNode.outerHTML : n instanceof mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof St ? t.blockTemplateSelected = !1 : t instanceof mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof St ? n.blockTemplateSelected = !0 : n instanceof mn && (n.selected = !0);
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
    if (o instanceof St)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof St ? n.blockTemplateProposedTranslations[t] || "" : n instanceof mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof St ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Cn.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Aa : this.originalTitle;
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
    return this.isLeadSection ? Aa : this.title;
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
class Ui extends ss {
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
    return !this.sourceSectionTitle || this.sourceSectionTitle === $i.LEAD_SECTION_DUMMY_TITLE;
  }
}
class Tu extends ss {
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
const Du = mw.user.isAnon() ? void 0 : "user", Lu = (e) => {
  if (e === "assertuserfailed")
    throw new vo();
};
function Pu(e, t) {
  return K(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => K(this, null, function* () {
      var r;
      const a = s.query.contenttranslation.translations;
      let i;
      if (e === "draft" ? i = a.map(
        (l) => new Ui(bt(rt({}, l), { status: e }))
      ) : i = a.map(
        (l) => new Tu(bt(rt({}, l), { status: e }))
      ), (r = s.continue) != null && r.offset) {
        const l = yield Pu(
          e,
          s.continue.offset
        );
        i = i.concat(l);
      }
      return i;
    }));
  });
}
function E_(e) {
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
      (a) => new C_(a)
    );
  });
}
function k_(e, t, n, o, s) {
  return K(this, null, function* () {
    if (!o)
      return;
    let a = `/translate/${e}/${t}`;
    n !== Ve.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = Me.getCXServerUrl(a);
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
const A_ = (e, t, n) => {
  const o = Me.getApi(t);
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
}, T_ = ({
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
    assert: Du,
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
          publishFeedbackMessage: new fo({
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
  }).catch((m, C) => {
    Lu(m);
    let x;
    return C = C || {}, C.exception ? x = C.exception.message : C.error ? x = C.error.info : x = "Unknown error", {
      publishFeedbackMessage: new fo({
        text: x,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, D_ = ({
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
    assert: Du,
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
    Lu(f);
    let C;
    return m.exception ? C = m.exception.message : m.error ? C = m.error.info : C = "Unknown error", new fo({ text: C, status: "error" });
  });
}, L_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, P_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, N_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), qt = {
  fetchTranslations: Pu,
  fetchTranslationUnits: E_,
  fetchSegmentTranslation: k_,
  parseTemplateWikitext: A_,
  publishTranslation: T_,
  saveTranslation: D_,
  deleteTranslation: L_,
  fetchTranslatorStats: N_,
  deleteCXTranslation: P_
};
class yo {
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
const F_ = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (r) => !Ve.isUserMTProvider(r)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, M_ = (e) => {
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
function O_({ rootState: e }) {
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = Cn.getMTScoreForPageSection(
    t,
    n
  ), s = Cn.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let r, l;
  return i === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new fo({
    title: r,
    text: l,
    status: i,
    type: "mt"
  });
}
function B_({ rootState: e, rootGetters: t }) {
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
    (f) => F_(f, l)
  );
  const u = o.getTranslationProgress(a), g = t["application/isSandboxTarget"];
  return qt.saveTranslation({
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
function I_(a) {
  return K(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i instanceof fo)
      return { publishFeedbackMessage: i, targetTitle: null };
    const r = i, l = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: d,
      sourceLanguage: c,
      targetLanguage: u
    } = e.application, g = l.title, f = t["application/getTargetPageTitleForPublishing"], m = t["application/isSandboxTarget"], C = {
      html: M_(d.translationHtml),
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
    return o && (C.captchaId = o, C.captchaWord = s), yield qt.publishTranslation(C);
  });
}
function $_(a, i) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, s) {
    let r = yield qt.fetchTranslations(s);
    r = r.filter(
      (d) => !n.translationExists(d)
    ), r.forEach((d) => e("addTranslation", d));
    const l = r.reduce((d, c) => {
      const u = c.sourceLanguage;
      return d[u] = d[u] || [], d[u].push(c), d;
    }, {});
    e("setTranslationsLoaded", { status: s, value: !0 });
    for (const [d, c] of Object.entries(l))
      t(
        "mediawiki/fetchPageMetadata",
        {
          language: d,
          titles: c.map((u) => u.sourceTitle)
        },
        { root: !0 }
      ), c.forEach((u) => {
        const { targetLanguage: g, targetTitle: f } = u, m = !!o["mediawiki/getPage"](
          g,
          f
        );
        f && !m && e(
          "mediawiki/addPage",
          new yo({ title: f, pagelanguage: g }),
          { root: !0 }
        );
      });
  });
}
function U_(a, i) {
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
      return yield qt.fetchSegmentTranslation(
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
function R_(t) {
  return K(this, arguments, function* ({ commit: e }) {
    const n = yield qt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const V_ = {
  validateMT: O_,
  saveTranslation: B_,
  publishTranslation: I_,
  fetchTranslationsByStatus: $_,
  translateContent: U_,
  fetchTranslatorStats: R_
}, z_ = {
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
}, j_ = {
  namespaced: !0,
  state: g_,
  getters: f_,
  actions: V_,
  mutations: z_
}, Nu = [
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
], H_ = [
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
], q_ = [
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
], G_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], W_ = [
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
], K_ = {
  en: Nu,
  es: H_,
  bn: q_,
  fr: G_,
  de: W_
}, X_ = {
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
  appendixSectionTitles: K_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, Y_ = {
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
class Ri {
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
const J_ = Nu;
function Z_(e, t, n, o = 24) {
  return K(this, null, function* () {
    var c;
    let a = `/data/recommendation/article/creation/translation/${Me.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = Me.getRestbaseUrl(t, a), r = new URLSearchParams({ count: `${o}` }), l = yield fetch(`${i}?${r}`);
    if (!l.ok)
      throw new Error("Failed to load data from server");
    return (((c = yield l.json()) == null ? void 0 : c.items) || []).map(
      (u) => new Ri({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function Q_(e, t, n) {
  return K(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = Me.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Ft(a) : null;
  });
}
function e0(e, t) {
  return K(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = Me.getApi(e);
    try {
      const s = yield o.get(n);
      return t0(s.result.translations);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
const t0 = (e) => {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1));
    [e[t], e[n]] = [e[n], e[t]];
  }
  return e;
};
function n0(e) {
  const t = J_.map((o) => encodeURIComponent(o)).join("|"), n = Me.getCXServerUrl(
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
const o0 = (e) => {
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
}, s0 = (e) => {
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
}, a0 = () => {
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
}, Gt = {
  fetchFavorites: a0,
  fetchPageSuggestions: Z_,
  fetchSectionSuggestions: Q_,
  fetchSuggestionSeeds: e0,
  fetchAppendixTargetSectionTitles: n0,
  markFavorite: o0,
  unmarkFavorite: s0
}, sl = ["cx-published-translations"];
class Fu {
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
    return sl.every(
      (t) => this.exhaustedProviders.includes(t)
    );
  }
  /**
   * Get next provider that is not used yet, if any
   *
   * @returns {string|null}
   */
  get nextUnexhaustedProvider() {
    return sl.find(
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
function i0(r, l) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
    let d = n.getSectionSuggestionsForArticle(
      s,
      a,
      i
    );
    if (!d) {
      d = yield Gt.fetchSectionSuggestions(
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
            new Ri({
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
function r0({ rootGetters: e }, t) {
  return {
    /**
     * @param sourceLanguage
     * @param targetLanguage
     * @return {Promise<Object[]>}
     */
    "cx-published-translations": (o, s) => Gt.fetchSuggestionSeeds(o, s),
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
function l0(i, r) {
  return K(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
    let l = o.findSectionSuggestionSeedCollection(
      s,
      a
    );
    if (l || (l = new Fu({
      sourceLanguage: s,
      targetLanguage: a
    }), e("addSectionSuggestionSeedCollection", l)), !l.seeds.length) {
      e("increaseSectionSuggestionsLoadingCount");
      do {
        const d = l.nextUnexhaustedProvider, c = yield n(
          "getSeedProviderHandlerByName",
          d
        );
        if (c) {
          const u = yield c(s, a);
          l.addExhaustedProvider(d), u.forEach((g) => e("addSectionSuggestionSeed", g));
        }
      } while (l.seeds.length === 0 && !l.allProvidersExhausted);
      e("decreaseSectionSuggestionsLoadingCount");
    }
    return l.seeds;
  });
}
function c0(i, r) {
  return K(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
    let l = o.findPageSuggestionSeedCollection(
      s,
      a
    );
    if (l || (l = new Fu({
      sourceLanguage: s,
      targetLanguage: a
    }), e("addPageSuggestionSeedCollection", l)), !l.seeds.length)
      do {
        const d = l.nextUnexhaustedProvider, c = yield n(
          "getSeedProviderHandlerByName",
          d
        );
        if (c) {
          const u = yield c(s, a);
          l.addExhaustedProvider(d), u.forEach((g) => e("addPageSuggestionSeed", g));
        }
      } while (l.seeds.length === 0 && !l.allProvidersExhausted);
    return l.getSeedArticleForSuggestion();
  });
}
function u0(s) {
  return K(this, arguments, function* ({
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
    const d = n.getNumberOfSectionSuggestionsToFetch(
      i,
      r
    );
    let c = 0;
    for (const g of l) {
      const f = yield Gt.fetchSectionSuggestions(
        i,
        g.sourceTitle,
        r
      );
      t("removeSectionSuggestionSeed", g);
      const m = e.appendixSectionTitles[r] || [];
      if (f != null && f.isValid(m) && (c++, t("addSectionSuggestion", f)), c === d)
        break;
    }
    t("decreaseSectionSuggestionsLoadingCount");
    const u = n.getSectionSuggestionsForPair(i, r).map((g) => g.sourceTitle);
    o(
      "mediawiki/fetchPageMetadata",
      { language: i, titles: u },
      { root: !0 }
    );
  });
}
function g0(s) {
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
      const d = yield Gt.fetchPageSuggestions(
        a,
        i,
        r == null ? void 0 : r.sourceTitle,
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
  return K(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield Gt.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
function p0(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removeSectionSuggestion", n), t("fetchNextSectionSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function m0(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removePageSuggestion", n), t("fetchNextPageSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function h0(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    yield Gt.markFavorite(n);
    const { sourceTitle: a, sourceLanguage: i, targetLanguage: r } = n, l = new qo({
      title: a,
      sourceLanguage: i,
      targetLanguage: r
    });
    e("addFavoriteSuggestion", l);
  });
}
function _0(n, o) {
  return K(this, arguments, function* ({ commit: e }, t) {
    e("removeFavoriteSuggestion", t), yield Gt.unmarkFavorite(t);
  });
}
function v0(o) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
    if (n.favorites.length)
      return;
    const s = yield Gt.fetchFavorites();
    if (!s || !s.length)
      return;
    const a = {};
    for (const i of s)
      e("addFavoriteSuggestion", i), Gt.fetchSectionSuggestions(
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
  getPageSuggestionSeed: c0,
  getSectionSuggestionSeeds: l0,
  getSeedProviderHandlerByName: r0,
  initializeSuggestions: u0,
  loadSectionSuggestion: i0,
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
}, S0 = {
  namespaced: !0,
  state: X_,
  getters: Y_,
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== Ve.EMPTY_TEXT_PROVIDER_KEY,
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
const k0 = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), E0();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, A0 = (e, t) => {
  let n, o;
  return t ? (n = k0(e), o = n.$element.find(
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
    A0(e, t)
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
        (u) => new St({
          sentences: L0(u),
          node: u
        })
      ), c = !r;
      return new $i({ id: l, title: r, subSections: d, isLeadSection: c });
    }
  );
}, D0 = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, L0 = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Mu = {
  convertSegmentedContentToPageSections: T0
}, Vi = 120, P0 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: Vi,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Me.getApi(e).get(n).then((s) => {
    const a = s.query.pages, r = (s.query.redirects || []).reduce(
      (c, u) => bt(rt({}, c), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (c, u) => bt(rt({}, c), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((c) => {
      const u = d[c.title] || r[c.title] || null;
      return new yo(bt(rt({}, c), { _alias: u }));
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
  return Me.getApi(e).get(n).then((s) => K(void 0, null, function* () {
    var l, d;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], r = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return r ? Object.freeze(new x0(r, i)) : null;
  }));
}, F0 = (e, t, n, o = null) => Ou(
  e,
  t,
  n,
  o
).then(
  (s) => new yo({
    sections: Mu.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Ou = (e, t, n, o = null) => {
  const s = Me.getWikiDomainCode(e), a = Me.getWikiDomainCode(t), i = [s, a, n].map(
    (l) => encodeURIComponent(l)
  );
  let r = Me.getCXServerUrl(
    `/page/${i.join("/")}`
  );
  return o && (r += `/${o}`), fetch(r).then((l) => l.json()).then((l) => l.segmentedContent);
}, M0 = (e) => K(void 0, null, function* () {
  const t = w_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Vi,
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
  return yield Me.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new yo(s))).catch((o) => []);
}), O0 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Vi,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Me.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new yo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, as = {
  fetchPages: P0,
  fetchLanguageTitles: N0,
  fetchPageContent: F0,
  fetchSegmentedContent: Ou,
  fetchNearbyPages: M0,
  searchPagesByTitlePrefix: O0
};
function B0() {
  return Me.getLanguagePairs().then((e) => e.sourceLanguages);
}
function I0(e, t) {
  return K(this, null, function* () {
    const n = Me.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Ve(e, t, o.mt)
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
  fetchSupportedLanguageCodes: B0,
  fetchSupportedMTProviders: I0,
  fetchCXServerToken: $0,
  addWikibaseLink: U0
};
function R0({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const r = o.slice(i, i + s), l = as.fetchPages(n, r).then(
      (d) => d.forEach((c) => t("addPage", c))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function V0({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || as.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function z0(n) {
  return K(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield la.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function j0(r, l) {
  return K(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let d = t.getPage(o, a);
    if (d && d.content)
      return;
    const c = yield as.fetchPageContent(
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
  return K(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield as.fetchNearbyPages(s);
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
  isLoginDialogOn: !1
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
    (a) => In(a)
  );
  return s && Au(s) ? qt.parseTemplateWikitext(
    Eu(s),
    n,
    t
  ) : Promise.resolve(null);
}, Bu = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => In(a)
  );
  return s ? qt.parseTemplateWikitext(
    Eu(s),
    n,
    t
  ) : Promise.resolve(null);
};
function zi(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, r = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(r, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let ws;
const ji = ({ dispatch: e, commit: t }) => {
  if (!ws) {
    let n = 1e3, o = 0;
    ws = zi(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then((a) => {
        a instanceof fo ? (n *= o + 1, o++, setTimeout(ws, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
      }).catch((a) => {
        if (a instanceof vo)
          t("setIsLoginDialogOn", !0);
        else
          throw a;
      });
    }, 3e3);
  }
  return ws;
}, J0 = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), ji({ dispatch: e, commit: t }).cancel();
}, Z0 = (o) => K(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
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
function e1({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
}
function t1({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentTranslation", n);
}
function n1(n) {
  return K(this, arguments, function* ({
    dispatch: e,
    state: t
  }) {
    const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
    yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
  });
}
function o1(s, a) {
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
  ), ji({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function a1(a, i) {
  return K(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
    const r = document.createElement("div");
    r.innerHTML = s, r.querySelectorAll(".sx-edit-dummy-node").forEach((f) => f.remove()), s = r.innerHTML;
    const { currentSourceSection: l, targetLanguage: d, currentMTProvider: c } = e, { selectedContentTranslationUnit: u } = l;
    if (u instanceof St) {
      const f = o.getCurrentPage, m = o.getCurrentTargetPage;
      s = (yield Bu(
        s,
        (m == null ? void 0 : m.title) || f.title,
        d
      )) || s;
    }
    l.setTranslationForSelectedTranslationUnit(
      s,
      c
    ), ji({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
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
  return K(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
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
    if (u instanceof St) {
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
    e.currentSectionSuggestion = t && new Ft(bt(rt({}, t), {
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
    s instanceof St ? s.blockTemplateProposedTranslations[n] = o : s instanceof mn && s.addProposedTranslation(n, o);
  },
  /**
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (e, t) => {
    e.currentMTProvider = t;
    const { sourceLanguage: n, targetLanguage: o } = e, s = Ve.getStorageKey(
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
  }
}, p1 = {
  namespaced: !0,
  state: K0,
  getters: X0,
  actions: g1,
  mutations: f1
}, Iu = t_({
  modules: { translator: j_, suggestions: S0, mediawiki: W0, application: p1 }
});
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const en = typeof window != "undefined";
function m1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Fe = Object.assign;
function Ta(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = wt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Fo = () => {
}, wt = Array.isArray;
function Le(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const h1 = /\/$/, _1 = (e) => e.replace(h1, "");
function Da(e, t, n = "/") {
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
function al(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function il(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && xn(t.matched[o], n.matched[s]) && $u(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function xn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function $u(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!y1(e[n], t[n]))
      return !1;
  return !0;
}
function y1(e, t) {
  return wt(e) ? rl(e, t) : wt(t) ? rl(t, e) : e === t;
}
function rl(e, t) {
  return wt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function b1(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return Le(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Go;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Go || (Go = {}));
var Mo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Mo || (Mo = {}));
function S1(e) {
  if (!e)
    if (en) {
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
          Le(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        Le(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && Le(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = x1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function ll(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ti = /* @__PURE__ */ new Map();
function k1(e, t) {
  ti.set(e, t);
}
function A1(e) {
  const t = ti.get(e);
  return ti.delete(e), t;
}
let T1 = () => location.protocol + "//" + location.host;
function Uu(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(r);
    return l[0] !== "/" && (l = "/" + l), al(l, "");
  }
  return al(n, e) + o + s;
}
function D1(e, t, n, o) {
  let s = [], a = [], i = null;
  const r = ({ state: g }) => {
    const f = Uu(e, location), m = n.value, C = t.value;
    let x = 0;
    if (g) {
      if (n.value = f, t.value = g, i && i === m) {
        i = null;
        return;
      }
      x = C ? g.position - C.position : 0;
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
    g.state && g.replaceState(Fe({}, g.state, { scroll: ca() }), "");
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
function cl(e, t, n, o = !1, s = !1) {
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
    value: Uu(e, n)
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
      ({}).NODE_ENV !== "production" ? Le("Error with push/replace State", f) : console.error(f), n[c ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const c = Fe({}, t.state, cl(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(l, c, !0), o.value = l;
  }
  function r(l, d) {
    const c = Fe(
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
    ({}).NODE_ENV !== "production" && !t.state && Le(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(c.current, c, !0);
    const u = Fe({}, cl(o.value, l, null), { position: c.position + 1 }, d);
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
  const s = Fe({
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
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Le(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), P1(e);
}
function F1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Ru(e) {
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
}, ni = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var ul;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ul || (ul = {}));
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
    return `Redirected from "${e.fullPath}" to "${B1(t)}" via a navigation guard.`;
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
function po(e, t) {
  return {}.NODE_ENV !== "production" ? Fe(new Error(M1[e](t)), {
    type: e,
    [ni]: !0
  }, t) : Fe(new Error(), {
    type: e,
    [ni]: !0
  }, t);
}
function Jt(e, t) {
  return e instanceof Error && ni in e && (t == null || !!(e.type & t));
}
const O1 = ["params", "query", "hash"];
function B1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of O1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const dl = "[^/]+?", I1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, $1 = /[.+*?^${}()[\]/\\]/g;
function U1(e, t) {
  const n = Fe({}, I1, t), o = [];
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
        const { value: m, repeatable: C, optional: x, regexp: k } = g;
        a.push({
          name: m,
          repeatable: C,
          optional: x
        });
        const L = k || dl;
        if (L !== dl) {
          f += 10;
          try {
            new RegExp(`(${L})`);
          } catch (G) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${L}): ` + G.message);
          }
        }
        let M = C ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
        u || (M = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        x && d.length < 2 ? `(?:/${M})` : "/" + M), x && (M += "?"), s += M, f += 20, x && (f += -8), C && (f += -20), L === ".*" && (f += -50);
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
          const { value: m, repeatable: C, optional: x } = f, k = m in d ? d[m] : "";
          if (wt(k) && !C)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const L = wt(k) ? k.join("/") : k;
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
    if (gl(o))
      return 1;
    if (gl(s))
      return -1;
  }
  return s.length - o.length;
}
function gl(e) {
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
      a.has(i.name) && Le(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = Fe(o, {
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
  t = ml({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return o.get(c);
  }
  function a(c, u, g) {
    const f = !g, m = W1(c);
    ({}).NODE_ENV !== "production" && J1(m, u), m.aliasOf = g && g.record;
    const C = ml(t, c), x = [
      m
    ];
    if ("alias" in c) {
      const M = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const G of M)
        x.push(Fe({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: G,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let k, L;
    for (const M of x) {
      const { path: G } = M;
      if (u && G[0] !== "/") {
        const R = u.record.path, ce = R[R.length - 1] === "/" ? "" : "/";
        M.path = u.record.path + (G && ce + G);
      }
      if ({}.NODE_ENV !== "production" && M.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (k = q1(M, u, C), {}.NODE_ENV !== "production" && u && G[0] === "/" && Z1(k, u), g ? (g.alias.push(k), {}.NODE_ENV !== "production" && Y1(g, k)) : (L = L || k, L !== k && L.alias.push(k), f && c.name && !pl(k) && i(c.name)), m.children) {
        const R = m.children;
        for (let ce = 0; ce < R.length; ce++)
          a(R[ce], k, g && g.children[ce]);
      }
      g = g || k, (k.record.components && Object.keys(k.record.components).length || k.record.name || k.record.redirect) && l(k);
    }
    return L ? () => {
      i(L);
    } : Fo;
  }
  function i(c) {
    if (Ru(c)) {
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
    (c.record.path !== n[u].record.path || !Vu(c, n[u])); )
      u++;
    n.splice(u, 0, c), c.record.name && !pl(c) && o.set(c.record.name, c);
  }
  function d(c, u) {
    let g, f = {}, m, C;
    if ("name" in c && c.name) {
      if (g = o.get(c.name), !g)
        throw po(1, {
          location: c
        });
      if ({}.NODE_ENV !== "production") {
        const L = Object.keys(c.params || {}).filter((M) => !g.keys.find((G) => G.name === M));
        L.length && Le(`Discarded invalid param(s) "${L.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      C = g.record.name, f = Fe(
        // paramsFromLocation is a new object
        fl(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((L) => !L.optional).map((L) => L.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && fl(c.params, g.keys.map((L) => L.name))
      ), m = g.stringify(f);
    } else if ("path" in c)
      m = c.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && Le(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((L) => L.re.test(m)), g && (f = g.parse(m), C = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((L) => L.re.test(u.path)), !g)
        throw po(1, {
          location: c,
          currentLocation: u
        });
      C = g.record.name, f = Fe({}, u.params, c.params), m = g.stringify(f);
    }
    const x = [];
    let k = g;
    for (; k; )
      x.unshift(k.record), k = k.parent;
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
function fl(e, t) {
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
function pl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function X1(e) {
  return e.reduce((t, n) => Fe(t, n.meta), {});
}
function ml(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function oi(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Y1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(oi.bind(null, n)))
      return Le(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(oi.bind(null, n)))
      return Le(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function J1(e, t) {
  t && t.record.name && !e.name && !e.path && Le(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Z1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(oi.bind(null, n)))
      return Le(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Vu(e, t) {
  return t.children.some((n) => n === e || Vu(e, n));
}
const zu = /#/g, Q1 = /&/g, ev = /\//g, tv = /=/g, nv = /\?/g, ju = /\+/g, ov = /%5B/g, sv = /%5D/g, Hu = /%5E/g, av = /%60/g, qu = /%7B/g, iv = /%7C/g, Gu = /%7D/g, rv = /%20/g;
function Hi(e) {
  return encodeURI("" + e).replace(iv, "|").replace(ov, "[").replace(sv, "]");
}
function lv(e) {
  return Hi(e).replace(qu, "{").replace(Gu, "}").replace(Hu, "^");
}
function si(e) {
  return Hi(e).replace(ju, "%2B").replace(rv, "+").replace(zu, "%23").replace(Q1, "%26").replace(av, "`").replace(qu, "{").replace(Gu, "}").replace(Hu, "^");
}
function cv(e) {
  return si(e).replace(tv, "%3D");
}
function uv(e) {
  return Hi(e).replace(zu, "%23").replace(nv, "%3F");
}
function dv(e) {
  return e == null ? "" : uv(e).replace(ev, "%2F");
}
function Wo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Le(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function gv(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(ju, " "), i = a.indexOf("="), r = Wo(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : Wo(a.slice(i + 1));
    if (r in t) {
      let d = t[r];
      wt(d) || (d = t[r] = [d]), d.push(l);
    } else
      t[r] = l;
  }
  return t;
}
function hl(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = cv(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (wt(o) ? o.map((a) => a && si(a)) : [o && si(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function fv(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = wt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const pv = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), _l = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ua = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Wu = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), ai = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function xo() {
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
function hn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, r) => {
    const l = (u) => {
      u === !1 ? r(po(4, {
        from: n,
        to: t
      })) : u instanceof Error ? r(u) : F1(u) ? r(po(2, {
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
        c = c.then((g) => l._called ? g : (Le(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !l._called) {
        Le(u), r(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((u) => r(u));
  });
}
function mv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Le(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function La(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && Le(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let r = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!r || typeof r != "object" && typeof r != "function")
          throw Le(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(r)}".`), new Error("Invalid route component");
        if ("then" in r) {
          Le(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = r;
          r = () => l;
        } else
          r.__asyncLoader && // warn only once per component
          !r.__warnedDefineAsync && (r.__warnedDefineAsync = !0, Le(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (hv(r)) {
          const d = (r.__vccOpts || r)[t];
          d && s.push(hn(d, n, o, a, i));
        } else {
          let l = r();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (Le(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const c = m1(d) ? d.default : d;
            a.components[i] = c;
            const g = (c.__vccOpts || c)[t];
            return g && hn(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function hv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function vl(e) {
  const t = Ge(ua), n = Ge(Wu), o = S(() => t.resolve(pe(e.to))), s = S(() => {
    const { matched: l } = o.value, { length: d } = l, c = l[d - 1], u = n.matched;
    if (!c || !u.length)
      return -1;
    const g = u.findIndex(xn.bind(null, c));
    if (g > -1)
      return g;
    const f = yl(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      yl(c) === f && // avoid comparing the child with its parent
      u[u.length - 1].path !== f ? u.findIndex(xn.bind(null, l[d - 2])) : g
    );
  }), a = S(() => s.value > -1 && bv(n.params, o.value.params)), i = S(() => s.value > -1 && s.value === n.matched.length - 1 && $u(n.params, o.value.params));
  function r(l = {}) {
    return yv(l) ? t[pe(e.replace) ? "replace" : "push"](
      pe(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Fo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && en) {
    const l = Ai();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), fc(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: S(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: r
  };
}
const _v = /* @__PURE__ */ yc({
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
  useLink: vl,
  setup(e, { slots: t }) {
    const n = mo(vl(e)), { options: o } = Ge(ua), s = S(() => ({
      [bl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [bl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
    } else if (!wt(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function yl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const bl = (e, t, n) => e != null ? e : t != null ? t : n, Sv = /* @__PURE__ */ yc({
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
    const o = Ge(ai), s = S(() => e.route || o.value), a = Ge(_l, 0), i = S(() => {
      let d = pe(a);
      const { matched: c } = s.value;
      let u;
      for (; (u = c[d]) && !u.components; )
        d++;
      return d;
    }), r = S(() => s.value.matched[i.value]);
    As(_l, S(() => i.value + 1)), As(pv, r), As(ai, s);
    const l = Z();
    return He(() => [l.value, r.value, e.name], ([d, c, u], [g, f, m]) => {
      c && (c.instances[u] = d, f && f !== c && d && d === g && (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards), c.updateGuards.size || (c.updateGuards = f.updateGuards))), d && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!f || !xn(c, f) || !g) && (c.enterCallbacks[u] || []).forEach((C) => C(d));
    }, { flush: "post" }), () => {
      const d = s.value, c = e.name, u = r.value, g = u && u.components[c];
      if (!g)
        return Sl(n.default, { Component: g, route: d });
      const f = u.props[c], m = f ? f === !0 ? d.params : typeof f == "function" ? f(d) : f : null, x = Ho(g, Fe({}, m, t, {
        onVnodeUnmounted: (k) => {
          k.component.isUnmounted && (u.instances[c] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && en && x.ref) {
        const k = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (wt(x.ref) ? x.ref.map((M) => M.i) : [x.ref.i]).forEach((M) => {
          M.__vrv_devtools = k;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Sl(n.default, { Component: x, route: d }) || x
      );
    };
  }
});
function Sl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const wv = Sv;
function Cv() {
  const e = Ai(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    Le(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Eo(e, t) {
  const n = Fe({}, e, {
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
function Cs(e) {
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
  ru({
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
        value: Eo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: c, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        c.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Ku
        });
      }
      wt(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let f = Ju, m = "";
        g.isExactActive ? (f = Yu, m = "This is exactly active") : g.isActive && (f = Xu, m = "This link is active"), c.tags.push({
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
        guard: Cs("beforeEach"),
        from: Eo(u, "Current Location during this navigation"),
        to: Eo(c, "Target location")
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
        guard: Cs("afterEach")
      };
      g ? (f.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, f.status = Cs("❌")) : f.status = Cs("✅"), f.from = Eo(u, "Current Location during this navigation"), f.to = Eo(c, "Target location"), s.addTimelineEvent({
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
      u.forEach(ed), c.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        ii(g, c.filter.toLowerCase())
      ))), u.forEach((g) => Qu(g, t.currentRoute.value)), c.rootNodes = u.map(Zu);
    }
    let d;
    s.on.getInspectorTree((c) => {
      d = c, c.app === e && c.inspectorId === r && l();
    }), s.on.getInspectorState((c) => {
      if (c.app === e && c.inspectorId === r) {
        const g = n.getRoutes().find((f) => f.record.__vd_id === c.nodeId);
        g && (c.state = {
          options: Av(g)
        });
      }
    }), s.sendInspectorTree(r), s.sendInspectorState(r);
  });
}
function kv(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Av(e) {
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
        display: e.keys.map((o) => `${o.name}${kv(o)}`).join(" "),
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
const Ku = 15485081, Xu = 2450411, Yu = 8702998, Tv = 2282478, Ju = 16486972, Dv = 6710886;
function Zu(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Tv
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Ju
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Ku
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Yu
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Xu
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
    children: e.children.map(Zu)
  };
}
let Lv = 0;
const Pv = /^\/(.*)\/([a-z]*)$/;
function Qu(e, t) {
  const n = t.matched.length && xn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => xn(o, e.record))), e.children.forEach((o) => Qu(o, t));
}
function ed(e) {
  e.__vd_match = !1, e.children.forEach(ed);
}
function ii(e, t) {
  const n = String(e.re).match(Pv);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ii(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Wo(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ii(i, t));
}
function Nv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Fv(e) {
  const t = G1(e.routes, e), n = e.parseQuery || gv, o = e.stringifyQuery || hl, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = xo(), i = xo(), r = xo(), l = Pg(dn);
  let d = dn;
  en && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Ta.bind(null, (A) => "" + A), u = Ta.bind(null, dv), g = (
    // @ts-expect-error: intentionally avoid the type check
    Ta.bind(null, Wo)
  );
  function f(A, X) {
    let Y, Q;
    return Ru(A) ? (Y = t.getRecordMatcher(A), Q = X) : Q = A, t.addRoute(Q, Y);
  }
  function m(A) {
    const X = t.getRecordMatcher(A);
    X ? t.removeRoute(X) : {}.NODE_ENV !== "production" && Le(`Cannot remove non-existent route "${String(A)}"`);
  }
  function C() {
    return t.getRoutes().map((A) => A.record);
  }
  function x(A) {
    return !!t.getRecordMatcher(A);
  }
  function k(A, X) {
    if (X = Fe({}, X || l.value), typeof A == "string") {
      const _ = Da(n, A, X.path), E = t.resolve({ path: _.path }, X), P = s.createHref(_.fullPath);
      return {}.NODE_ENV !== "production" && (P.startsWith("//") ? Le(`Location "${A}" resolved to "${P}". A resolved location cannot start with multiple slashes.`) : E.matched.length || Le(`No match found for location with path "${A}"`)), Fe(_, E, {
        params: g(E.params),
        hash: Wo(_.hash),
        redirectedFrom: void 0,
        href: P
      });
    }
    let Y;
    if ("path" in A)
      ({}).NODE_ENV !== "production" && "params" in A && !("name" in A) && // @ts-expect-error: the type is never
      Object.keys(A.params).length && Le(`Path "${A.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), Y = Fe({}, A, {
        path: Da(n, A.path, X.path).path
      });
    else {
      const _ = Fe({}, A.params);
      for (const E in _)
        _[E] == null && delete _[E];
      Y = Fe({}, A, {
        params: u(_)
      }), X.params = u(X.params);
    }
    const Q = t.resolve(Y, X), ke = A.hash || "";
    ({}).NODE_ENV !== "production" && ke && !ke.startsWith("#") && Le(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`), Q.params = c(g(Q.params));
    const Ie = v1(o, Fe({}, A, {
      hash: lv(ke),
      path: Q.path
    })), h = s.createHref(Ie);
    return {}.NODE_ENV !== "production" && (h.startsWith("//") ? Le(`Location "${A}" resolved to "${h}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || Le(`No match found for location with path "${"path" in A ? A.path : A}"`)), Fe({
      fullPath: Ie,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ke,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === hl ? fv(A.query) : A.query || {}
      )
    }, Q, {
      redirectedFrom: void 0,
      href: h
    });
  }
  function L(A) {
    return typeof A == "string" ? Da(n, A, l.value.path) : Fe({}, A);
  }
  function M(A, X) {
    if (d !== A)
      return po(8, {
        from: X,
        to: A
      });
  }
  function G(A) {
    return W(A);
  }
  function R(A) {
    return G(Fe(L(A), { replace: !0 }));
  }
  function ce(A) {
    const X = A.matched[A.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: Y } = X;
      let Q = typeof Y == "function" ? Y(A) : Y;
      if (typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = L(Q) : (
        // force empty params
        { path: Q }
      ), Q.params = {}), {}.NODE_ENV !== "production" && !("path" in Q) && !("name" in Q))
        throw Le(`Invalid redirect found:
${JSON.stringify(Q, null, 2)}
 when navigating to "${A.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Fe({
        query: A.query,
        hash: A.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in Q ? {} : A.params
      }, Q);
    }
  }
  function W(A, X) {
    const Y = d = k(A), Q = l.value, ke = A.state, Ie = A.force, h = A.replace === !0, _ = ce(Y);
    if (_)
      return W(
        Fe(L(_), {
          state: typeof _ == "object" ? Fe({}, ke, _.state) : ke,
          force: Ie,
          replace: h
        }),
        // keep original redirectedFrom if it exists
        X || Y
      );
    const E = Y;
    E.redirectedFrom = X;
    let P;
    return !Ie && il(o, Q, Y) && (P = po(16, { to: E, from: Q }), yt(
      Q,
      Q,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (P ? Promise.resolve(P) : Ee(E, Q)).catch((T) => Jt(T) ? (
      // navigation redirects still mark the router as ready
      Jt(
        T,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? T : Xt(T)
    ) : (
      // reject any unknown error
      fe(T, E, Q)
    )).then((T) => {
      if (T) {
        if (Jt(
          T,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          il(o, k(T.to), E) && // and we have done it a couple of times
          X && // @ts-expect-error: added only in dev
          (X._count = X._count ? (
            // @ts-expect-error
            X._count + 1
          ) : 1) > 30 ? (Le(`Detected a possibly infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${E.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : W(
            // keep options
            Fe({
              // preserve an existing replacement but allow the redirect to override it
              replace: h
            }, L(T.to), {
              state: typeof T.to == "object" ? Fe({}, ke, T.to.state) : ke,
              force: Ie
            }),
            // preserve the original redirectedFrom if any
            X || E
          );
      } else
        T = J(E, Q, !0, h, ke);
      return Te(E, Q, T), T;
    });
  }
  function B(A, X) {
    const Y = M(A, X);
    return Y ? Promise.reject(Y) : Promise.resolve();
  }
  function me(A) {
    const X = Tt.values().next().value;
    return X && typeof X.runWithContext == "function" ? X.runWithContext(A) : A();
  }
  function Ee(A, X) {
    let Y;
    const [Q, ke, Ie] = Mv(A, X);
    Y = La(Q.reverse(), "beforeRouteLeave", A, X);
    for (const _ of Q)
      _.leaveGuards.forEach((E) => {
        Y.push(hn(E, A, X));
      });
    const h = B.bind(null, A, X);
    return Y.push(h), It(Y).then(() => {
      Y = [];
      for (const _ of a.list())
        Y.push(hn(_, A, X));
      return Y.push(h), It(Y);
    }).then(() => {
      Y = La(ke, "beforeRouteUpdate", A, X);
      for (const _ of ke)
        _.updateGuards.forEach((E) => {
          Y.push(hn(E, A, X));
        });
      return Y.push(h), It(Y);
    }).then(() => {
      Y = [];
      for (const _ of Ie)
        if (_.beforeEnter)
          if (wt(_.beforeEnter))
            for (const E of _.beforeEnter)
              Y.push(hn(E, A, X));
          else
            Y.push(hn(_.beforeEnter, A, X));
      return Y.push(h), It(Y);
    }).then(() => (A.matched.forEach((_) => _.enterCallbacks = {}), Y = La(Ie, "beforeRouteEnter", A, X), Y.push(h), It(Y))).then(() => {
      Y = [];
      for (const _ of i.list())
        Y.push(hn(_, A, X));
      return Y.push(h), It(Y);
    }).catch((_) => Jt(
      _,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? _ : Promise.reject(_));
  }
  function Te(A, X, Y) {
    r.list().forEach((Q) => me(() => Q(A, X, Y)));
  }
  function J(A, X, Y, Q, ke) {
    const Ie = M(A, X);
    if (Ie)
      return Ie;
    const h = X === dn, _ = en ? history.state : {};
    Y && (Q || h ? s.replace(A.fullPath, Fe({
      scroll: h && _ && _.scroll
    }, ke)) : s.push(A.fullPath, ke)), l.value = A, yt(A, X, Y, h), Xt();
  }
  let De;
  function Xe() {
    De || (De = s.listen((A, X, Y) => {
      if (!Dn.listening)
        return;
      const Q = k(A), ke = ce(Q);
      if (ke) {
        W(Fe(ke, { replace: !0 }), Q).catch(Fo);
        return;
      }
      d = Q;
      const Ie = l.value;
      en && k1(ll(Ie.fullPath, Y.delta), ca()), Ee(Q, Ie).catch((h) => Jt(
        h,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? h : Jt(
        h,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (W(
        h.to,
        Q
        // avoid an uncaught rejection, let push call triggerError
      ).then((_) => {
        Jt(
          _,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !Y.delta && Y.type === Go.pop && s.go(-1, !1);
      }).catch(Fo), Promise.reject()) : (Y.delta && s.go(-Y.delta, !1), fe(h, Q, Ie))).then((h) => {
        h = h || J(
          // after navigation, all matched components are resolved
          Q,
          Ie,
          !1
        ), h && (Y.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Jt(
          h,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-Y.delta, !1) : Y.type === Go.pop && Jt(
          h,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), Te(Q, Ie, h);
      }).catch(Fo);
    }));
  }
  let We = xo(), Re = xo(), re;
  function fe(A, X, Y) {
    Xt(A);
    const Q = Re.list();
    return Q.length ? Q.forEach((ke) => ke(A, X, Y)) : ({}.NODE_ENV !== "production" && Le("uncaught error during route navigation:"), console.error(A)), Promise.reject(A);
  }
  function ot() {
    return re && l.value !== dn ? Promise.resolve() : new Promise((A, X) => {
      We.add([A, X]);
    });
  }
  function Xt(A) {
    return re || (re = !A, Xe(), We.list().forEach(([X, Y]) => A ? Y(A) : X()), We.reset()), A;
  }
  function yt(A, X, Y, Q) {
    const { scrollBehavior: ke } = e;
    if (!en || !ke)
      return Promise.resolve();
    const Ie = !Y && A1(ll(A.fullPath, 0)) || (Q || !Y) && history.state && history.state.scroll || null;
    return ho().then(() => ke(A, X, Ie)).then((h) => h && E1(h)).catch((h) => fe(h, A, X));
  }
  const ut = (A) => s.go(A);
  let dt;
  const Tt = /* @__PURE__ */ new Set(), Dn = {
    currentRoute: l,
    listening: !0,
    addRoute: f,
    removeRoute: m,
    hasRoute: x,
    getRoutes: C,
    resolve: k,
    options: e,
    push: G,
    replace: R,
    go: ut,
    back: () => ut(-1),
    forward: () => ut(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: r.add,
    onError: Re.add,
    isReady: ot,
    install(A) {
      const X = this;
      A.component("RouterLink", vv), A.component("RouterView", wv), A.config.globalProperties.$router = X, Object.defineProperty(A.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => pe(l)
      }), en && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !dt && l.value === dn && (dt = !0, G(s.location).catch((ke) => {
        ({}).NODE_ENV !== "production" && Le("Unexpected error when starting the router:", ke);
      }));
      const Y = {};
      for (const ke in dn)
        Object.defineProperty(Y, ke, {
          get: () => l.value[ke],
          enumerable: !0
        });
      A.provide(ua, X), A.provide(Wu, Wl(Y)), A.provide(ai, l);
      const Q = A.unmount;
      Tt.add(A), A.unmount = function() {
        Tt.delete(A), Tt.size < 1 && (d = dn, De && De(), De = null, l.value = dn, dt = !1, re = !1), Q();
      }, {}.NODE_ENV !== "production" && en && Ev(A, X, t);
    }
  };
  function It(A) {
    return A.reduce((X, Y) => X.then(() => me(Y)), Promise.resolve());
  }
  return Dn;
}
function Mv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const r = t.matched[i];
    r && (e.matched.find((d) => xn(d, r)) ? o.push(r) : n.push(r));
    const l = e.matched[i];
    l && (t.matched.find((d) => xn(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function mt() {
  return Ge(ua);
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
}, Bv = {
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
}, Iv = [
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
  scriptgroups: Bv,
  rtlscripts: Iv,
  regiongroups: $v,
  territories: Uv
};
var ct = Rv;
function is(e) {
  return !!ct.languages[e];
}
function An(e) {
  return is(e) && ct.languages[e].length === 1 ? ct.languages[e][0] : !1;
}
function Vv() {
  return ct.languages;
}
function rs(e) {
  var t = An(e);
  return t ? rs(t) : is(e) ? ct.languages[e][0] : "Zyyy";
}
function qi(e) {
  var t = An(e);
  return t ? qi(t) : is(e) && ct.languages[e][1] || "UNKNOWN";
}
function Ko(e) {
  var t = An(e);
  return t ? Ko(t) : is(e) && ct.languages[e][2] || e;
}
function zv() {
  var e, t = {};
  for (e in ct.languages)
    An(e) || (t[e] = Ko(e));
  return t;
}
function td(e) {
  var t, n, o = [];
  for (t in ct.languages)
    if (!An(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === rs(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function jv(e) {
  return td([e]);
}
function nd(e) {
  var t;
  for (t in ct.scriptgroups)
    if (ct.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Gi(e) {
  return nd(rs(e));
}
function od(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = An(n) || n, a = Gi(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function sd(e) {
  var t, n, o, s = {};
  for (t in ct.languages)
    if (!An(t)) {
      for (n = 0; n < e.length; n++)
        if (qi(t).includes(e[n])) {
          o = Gi(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Hv(e) {
  return sd([e]);
}
function qv(e) {
  var t, n, o, s = [];
  for (t = od(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Gv(e, t) {
  var n = Ko(e) || e, o = Ko(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function ad(e) {
  return ct.rtlscripts.includes(rs(e));
}
function Wv(e) {
  return ad(e) ? "rtl" : "ltr";
}
function Kv(e) {
  return ct.territories[e] || [];
}
function Xv(e, t) {
  t.target ? ct.languages[e] = [t.target] : ct.languages[e] = [t.script, t.regions, t.autonym];
}
var Ne = {
  addLanguage: Xv,
  getAutonym: Ko,
  getAutonyms: zv,
  getDir: Wv,
  getGroupOfScript: nd,
  getLanguages: Vv,
  getLanguagesByScriptGroup: od,
  getLanguagesByScriptGroupInRegion: Hv,
  getLanguagesByScriptGroupInRegions: sd,
  getLanguagesInScript: jv,
  getLanguagesInScripts: td,
  getLanguagesInTerritory: Kv,
  getRegions: qi,
  getScript: rs,
  getScriptGroupOfLanguage: Gi,
  isKnown: is,
  isRedirect: An,
  isRtl: ad,
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
var Zv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, id = { exports: {} };
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
          for (const k in f)
            C[f[k]] = k;
          f = C;
          const x = String(u);
          for (let k = 0; k < x.length; k++)
            m += f[x[k]] || x[k];
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
            function k(N) {
              return () => {
                for (let ne = 0; ne < N.length; ne++) {
                  const $e = N[ne]();
                  if ($e !== null)
                    return $e;
                }
                return null;
              };
            }
            function L(N) {
              const ne = x, $e = [];
              for (let it = 0; it < N.length; it++) {
                const xt = N[it]();
                if (xt === null)
                  return x = ne, null;
                $e.push(xt);
              }
              return $e;
            }
            function M(N, ne) {
              return () => {
                const $e = x, it = [];
                let xt = ne();
                for (; xt !== null; )
                  it.push(xt), xt = ne();
                return it.length < N ? (x = $e, null) : it;
              };
            }
            function G(N) {
              const ne = N.length;
              return () => {
                let $e = null;
                return m.slice(x, x + ne) === N && ($e = N, x += ne), $e;
              };
            }
            function R(N) {
              return () => {
                const ne = m.slice(x).match(N);
                return ne === null ? null : (x += ne[0].length, ne[0]);
              };
            }
            const ce = R(/^\s+/), W = G("|"), B = G(":"), me = G("\\"), Ee = R(/^./), Te = G("$"), J = R(/^\d+/), De = G('"'), Xe = G("'"), We = R(C ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Re = R(C ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), re = k([fe, R(C ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function fe() {
              const N = L([me, Ee]);
              return N === null ? null : N[1];
            }
            const ot = k([fe, Re]), Xt = k([fe, We]);
            function yt() {
              const N = L([Te, J]);
              return N === null ? null : ["REPLACE", parseInt(N[1], 10) - 1];
            }
            const ut = (dt = R(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Tt = function(N) {
              return N.toString();
            }, () => {
              const N = dt();
              return N === null ? null : Tt(N);
            });
            var dt, Tt;
            function Dn() {
              const N = L([W, M(0, Se)]);
              if (N === null)
                return null;
              const ne = N[1];
              return ne.length > 1 ? ["CONCAT"].concat(ne) : ne[0];
            }
            function It() {
              const N = L([ut, B, yt]);
              return N === null ? null : [N[0], N[2]];
            }
            function A() {
              const N = L([ut, B, Se]);
              return N === null ? null : [N[0], N[2]];
            }
            function X() {
              const N = L([ut, B]);
              return N === null ? null : [N[0], ""];
            }
            const Y = k([function() {
              const N = L([k([It, A, X]), M(0, Dn)]);
              return N === null ? null : N[0].concat(N[1]);
            }, function() {
              const N = L([ut, M(0, Dn)]);
              return N === null ? null : [N[0]].concat(N[1]);
            }]), Q = G("{{"), ke = G("}}"), Ie = G("[["), h = G("]]"), _ = G("["), E = G("]");
            function P() {
              const N = L([Q, Y, ke]);
              return N === null ? null : N[1];
            }
            const T = k([function() {
              const N = L([M(1, Se), W, M(1, ue)]);
              return N === null ? null : [["CONCAT"].concat(N[0]), ["CONCAT"].concat(N[2])];
            }, function() {
              const N = L([M(1, Se)]);
              return N === null ? null : [["CONCAT"].concat(N[0])];
            }]);
            function V() {
              let N = null;
              const ne = L([Ie, T, h]);
              if (ne !== null) {
                const $e = ne[1];
                N = ["WIKILINK"].concat($e);
              }
              return N;
            }
            function q() {
              let N = null;
              const ne = L([_, M(1, le), ce, M(1, ue), E]);
              return ne !== null && (N = ["EXTLINK", ne[1].length === 1 ? ne[1][0] : ["CONCAT"].concat(ne[1]), ["CONCAT"].concat(ne[3])]), N;
            }
            const I = R(/^[A-Za-z]+/);
            function z() {
              const N = R(/^[^"]*/), ne = L([De, N, De]);
              return ne === null ? null : ne[1];
            }
            function O() {
              const N = R(/^[^']*/), ne = L([Xe, N, Xe]);
              return ne === null ? null : ne[1];
            }
            function oe() {
              const N = R(/^\s*=\s*/), ne = L([ce, I, N, k([z, O])]);
              return ne === null ? null : [ne[1], ne[3]];
            }
            function ee() {
              const N = M(0, oe)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], N);
            }
            const le = k([P, yt, V, q, function() {
              const N = M(1, re)();
              return N === null ? null : N.join("");
            }]), ue = k([P, yt, V, q, function() {
              let N = null;
              const ne = x, $e = G("<"), it = R(/^\/?/), xt = R(/^\s*>/), Yt = L([$e, I, ee, it, xt]);
              if (Yt === null)
                return null;
              const bo = x, Qe = Yt[1], ht = M(0, ue)(), fs = x, or = L([G("</"), I, xt]);
              if (or === null)
                return ["CONCAT", m.slice(ne, bo)].concat(ht);
              const Td = x, Dd = or[1], sr = Yt[2];
              if (function(Ln, ps, da, ga = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Ln = Ln.toLowerCase()) !== (ps = ps.toLowerCase()) || ga.allowedHtmlElements.indexOf(Ln) === -1)
                  return !1;
                const Ld = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ms = 0, Pd = da.length; ms < Pd; ms += 2) {
                  const fa = da[ms];
                  if (ga.allowedHtmlCommonAttributes.indexOf(fa) === -1 && (ga.allowedHtmlAttributesByElement[Ln] || []).indexOf(fa) === -1 || fa === "style" && da[ms + 1].search(Ld) !== -1)
                    return !1;
                }
                return !0;
              }(Qe, Dd, sr.slice(1)))
                N = ["HTMLELEMENT", Qe, sr].concat(ht);
              else {
                const Ln = (ps) => ps.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                N = ["CONCAT", Ln(m.slice(ne, bo))].concat(ht, Ln(m.slice(fs, Td)));
              }
              return N;
            }, function() {
              const N = M(1, Xt)();
              return N === null ? null : N.join("");
            }]), Se = k([P, yt, function() {
              const N = M(1, ot)();
              return N === null ? null : N.join("");
            }]), Oe = function() {
              const N = M(0, ue)();
              return N === null ? null : ["CONCAT"].concat(N);
            }();
            if (Oe === null || x !== m.length)
              throw new Error("Parse error at position " + x.toString() + " in input: " + m);
            return Oe;
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
            const x = m.slice(0, C).join("-"), k = this.messageStore.getMessage(c, x);
            if (typeof k == "string")
              return k;
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
})(id);
var Qv = id.exports;
const wl = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, rd = Symbol("banana-context");
function Ct() {
  const e = Ge(rd);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function ey(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = mo(new Qv(e.locale, e));
  return {
    install: (n) => {
      n.provide(rd, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = wl(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = wl(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const ty = {
  name: "CxTranslationWork",
  components: { MwRow: be, MwCol: we, MwThumbnail: Mi, MwIcon: qe },
  props: {
    translation: {
      type: ss,
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
    }, o = Ct();
    return {
      timeagoMessage: S(() => {
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
      getAutonym: Ne.getAutonym,
      getDir: Ne.getDir,
      getImage: n,
      mwIconArrowForward: kn,
      mwIconArrowNext: Pi
    };
  }
}, ny = { class: "col shrink pe-4" }, oy = { class: "col" }, sy = { class: "cx-translation__details column justify-between ma-0" }, ay = { class: "row ma-0" }, iy = { class: "col grow" }, ry = { class: "col shrink ps-2" }, ly = ["dir", "textContent"], cy = ["dir", "textContent"], uy = ["textContent"];
function dy(e, t, n, o, s, a) {
  const i = y("mw-thumbnail"), r = y("mw-icon"), l = y("mw-col"), d = y("mw-row");
  return n.translation ? (v(), D("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = et((c) => e.$emit("click"), ["stop"]))
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
              onClick: t[0] || (t[0] = et((c) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        je(e.$slots, "mid-content"),
        p(d, { class: "cx-translation__footer ma-0" }, {
          default: b(() => [
            p(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: b(() => [
                w("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: se(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, ly),
                p(r, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                w("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: se(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, cy)
              ], void 0, !0),
              _: 1
            }),
            p(l, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: b(() => [
                w("span", {
                  textContent: se(o.timeagoMessage)
                }, null, 8, uy)
              ], void 0, !0),
              _: 1
            })
          ], void 0),
          _: 1
        })
      ])
    ])
  ])) : ae("", !0);
}
const ld = /* @__PURE__ */ H(ty, [["render", dy]]);
const gy = ["lang", "textContent"], fy = ["lang", "textContent"], py = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Ui,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Ge("colors").base80, s = S(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, i) => (v(), F(ld, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": pe(Kc),
      onActionIconClicked: i[0] || (i[0] = (r) => a.$emit("delete-translation"))
    }, {
      title: b(() => [
        w("h5", {
          class: he(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: se(e.translation.sourceTitle)
        }, null, 10, gy),
        e.translation.isLeadSectionTranslation ? ae("", !0) : (v(), D("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: se(e.translation.sourceSectionTitle)
        }, null, 8, fy))
      ]),
      "mid-content": b(() => [
        e.translation.progress ? (v(), F(pe(be), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: b(() => [
            p(pe(we), null, {
              default: b(() => [
                p(pe(su), {
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
        })) : ae("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, ls = () => {
  const e = Ge("breakpoints");
  return { isDesktop: S(
    () => !Me.isMobileDomain() && e.value.tabletAndUp
  ) };
};
function de(e) {
  const t = S(() => e.state.application.sourceLanguage), n = S(() => e.state.application.targetLanguage), o = S(
    () => e.state.application.currentMTProvider
  ), s = S(
    () => e.state.application.currentSectionSuggestion
  ), a = S(
    () => e.state.application.currentSourceSection
  ), i = S(
    () => Ne.getAutonym(t.value)
  ), r = S(
    () => Ne.getAutonym(n.value)
  ), l = S(
    () => {
      var f;
      return (f = a.value) == null ? void 0 : f.isTitleSelected;
    }
  ), d = S(
    () => {
      var f;
      return (f = a.value) == null ? void 0 : f.selectedContentTranslationUnit;
    }
  ), c = S(
    () => e.getters["application/getCurrentProposedTranslation"]
  ), u = S(
    () => e.getters["application/getCurrentPage"]
  ), g = S(
    () => e.getters["application/getCurrentTargetPage"]
  );
  return {
    currentMTProvider: o,
    currentSectionSuggestion: s,
    currentSourcePage: u,
    currentSourceSection: a,
    currentTargetPage: g,
    isSectionTitleSelected: l,
    proposedTranslation: c,
    selectedContentTranslationUnit: d,
    sourceLanguage: t,
    sourceLanguageAutonym: i,
    targetLanguage: n,
    targetLanguageAutonym: r
  };
}
const Wi = () => {
  const e = te(), t = mt();
  return (n, o, s) => K(void 0, null, function* () {
    const { sourceLanguage: a, targetLanguage: i } = de(e), r = yield e.dispatch(
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
};
function cs() {
  const e = te(), t = S(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: S(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const my = (e, t) => {
  const n = new URLSearchParams(location.search), o = n.get("from"), s = n.get("to"), a = Me.getCurrentWikiLanguageCode(), i = (g) => !e || Array.isArray(e) && e.includes(g), r = (g) => t.includes(g), l = {
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
}, ri = (e) => {
  if (!history.pushState)
    return;
  const t = e instanceof ss, n = new URLSearchParams(location.search);
  n.set("page", e == null ? void 0 : e.sourceTitle), n.set("from", e == null ? void 0 : e.sourceLanguage), n.set("to", e == null ? void 0 : e.targetLanguage), n.set("sx", !0), t && n.set("draft", !0), n.delete("title"), Qn(Object.fromEntries(n));
}, hy = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), Qn(Object.fromEntries(n));
}, Qn = (e) => {
  history.replaceState(
    {},
    document.title,
    Cu("Special:ContentTranslation", e)
  );
}, cd = () => new URLSearchParams(location.search).get("force-quick-tutorial"), Ki = () => {
  const e = te();
  return () => e.dispatch("suggestions/initializeSuggestions");
}, us = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = Me.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = rt({ sx: !0 }, s), o && (s.section = o), location.href = Me.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, ds = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), Qn(Object.fromEntries(o));
}, ud = () => {
  const e = te(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = cs();
  return () => K(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = my(
      t.value,
      n.value
    ), a = new URLSearchParams(location.search), i = a.get("page"), r = a.get("section");
    us(
      o,
      s,
      i,
      r
    ) || ds(e, o, s);
  });
}, dd = () => {
  const e = te(), t = Ki();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = de(e);
    n === o && (n = a.value, o = s.value), us(
      n,
      o,
      null,
      null
    ) || (ds(e, n, o), t());
  };
}, _y = () => {
  const e = te(), t = Ki();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      us(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (ds(e, o, s), t());
    }
  );
}, vy = () => {
  const e = te();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    us(
      n,
      o,
      s,
      null
    ) || ds(e, n, o);
  };
}, yy = () => {
  const e = te();
  return (t, n) => K(void 0, null, function* () {
    const { sourceLanguage: o, targetLanguage: s } = de(e);
    t === n && (t = s.value, n = o.value);
    const a = e.getters["application/getCurrentLanguageTitleGroup"], i = a.getTitleForLanguage(t);
    if (!us(
      t,
      n,
      i,
      null
    )) {
      ds(e, t, n);
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
}, gd = "cx-translation-session-position-", fd = () => gd + mw.user.sessionId(), pd = () => {
  const e = fd();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, by = function() {
  const e = pd();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(gd)).forEach((n) => mw.storage.remove(n));
  const t = fd();
  mw.storage.set(t, e + 1);
};
let li = null;
function Sy(e) {
  if (li)
    return Promise.resolve(li);
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
function wy(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Cy(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), r = pd(), l = {
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
  ) : d = Sy(i).then((c) => {
    li = c, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: wy(c)
      })
    );
  }), d.then(() => {
    by();
  });
}
const md = Symbol("event-logging-context"), Kt = function() {
  const e = Ge(md);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, xy = () => ({
  install: (e) => {
    e.provide(md, Cy);
  }
}), Ey = (e, t, n, o) => K(void 0, null, function* () {
  var r, l, d;
  const s = ((r = t.user) == null ? void 0 : r.content) || ((l = t.mt) == null ? void 0 : l.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, i = yield Bu(
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
}, Ay = (e, t, n, o) => K(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return Ey(e, t, n, o);
  ky(e, t);
}), Ty = (e, t, n) => {
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
        const l = Ay(
          i,
          r,
          (t == null ? void 0 : t.title) || e.title,
          t.language
        );
        o.push(l);
      }
  return Promise.all(o);
}, Dy = { restoreCorporaDraft: Ty }, Xi = () => (e, t, n, o = {}) => {
  Me.setCXToken(e, t, n), location.href = Me.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
};
function Ly(e) {
  return e.$el = $(e), e;
}
function Py(e, t, n, o) {
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
function Ny() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function Fy(e, t) {
  return K(this, null, function* () {
    yield Yi(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Ly(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
function My(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const Oy = {
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
    const s = S(() => o.getHtml()), a = () => {
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
    return pt(() => K(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = My;
      const c = yield Fy(l, n.value);
      t.emit("ready"), n.value.appendChild(c.$element[0]), o = Py(
        c,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Ny, o.focus();
    })), { sxeditor: n };
  }
}, By = ["lang", "dir"], Iy = /* @__PURE__ */ w("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ w("div", { class: "toolbar" })
], -1), $y = ["lang", "dir"];
function Uy(e, t, n, o, s, a) {
  return v(), D("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    Iy,
    w("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, $y)
  ], 8, By);
}
const Ry = /* @__PURE__ */ H(Oy, [["render", Uy]]);
function Yi() {
  return mw.loader.using("mw.cx3.ve");
}
const hd = () => {
  const e = te();
  return (t, n) => K(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Yi(), new Promise((s) => {
      setTimeout(() => {
        const a = Mu.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, gs = () => {
  const e = Kt(), t = te(), n = mt(), {
    currentSourcePage: o,
    currentTargetPage: s,
    sourceLanguage: a,
    targetLanguage: i
  } = de(t), r = _y(), l = hd(), { isDesktop: d } = ls(), c = Xi();
  return (u) => K(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: g,
      targetLanguage: f,
      sourceTitle: m,
      pageRevision: C,
      isLeadSectionTranslation: x
    } = u;
    if (d.value) {
      const M = {};
      x || (M.sourcesection = u.sourceSectionTitle), c(
        a.value,
        i.value,
        m,
        M
      );
      return;
    }
    Me.unsetCXToken(
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
    }), yield l(a.value, m), u.restored || (yield qt.fetchTranslationUnits(u.translationId).then(
      (M) => Dy.restoreCorporaDraft(
        o.value,
        s.value,
        M
      )
    ).then(() => u.restored = !0));
    let k, L;
    u.isLeadSectionTranslation ? (k = o.value.leadSection, k.originalTitle = u.sourceTitle, L = u.targetTitle) : (k = o.value.getSectionByTitle(
      u.sourceSectionTitle
    ), L = u.targetSectionTitle), t.commit("application/setCurrentSourceSection", k), t.commit(
      "application/setCurrentSourceSectionTitleTranslation",
      L
    ), t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, Ji = () => {
  const e = Wi(), t = gs(), n = te(), { sourceLanguage: o, targetLanguage: s } = de(n), a = (u, g, f) => {
    const m = n.getters["translator/getDraftTranslation"](
      u,
      $i.LEAD_SECTION_DUMMY_TITLE,
      o.value,
      s.value
    );
    return m ? t(m) : e(u, g, f);
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
    ),
    startPageSuggestion: (u) => a(
      u.sourceTitle,
      "dashboard",
      "suggestion_no_seed"
    ),
    startPublishedTranslation: (u) => a(
      u.sourceTitle,
      "dashboard",
      "continue_published"
    )
  };
}, Vy = () => {
  const e = te();
  return (t, n, o) => K(void 0, null, function* () {
    const s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o), a = e.getters["suggestions/getSectionSuggestionsForPublishedArticle"](t, n, o);
    let i = s || a;
    return i || (i = yield Gt.fetchSectionSuggestions(
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
const zy = ["lang", "href", "textContent"], jy = { key: 1 }, Hy = { key: 2 }, qy = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Tu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = te(), o = Z(!0), s = Z(null), a = S(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.missingSections;
    }), i = S(
      () => a.value && Object.keys(a.value)[0]
    );
    Vy()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => s.value = m).catch((m) => console.log(m)).finally(() => o.value = !1);
    const l = mt();
    ls();
    const d = () => {
      n.dispatch("application/initializeSectionTranslation", s.value), l.push({ name: "sx-section-selector", query: { force: !0 } });
    }, c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: u } = Ji();
    de(n);
    const g = vy(), f = () => {
      g(t.translation), u(t.translation);
    };
    return (m, C) => (v(), F(ld, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: b(() => [
        w("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: C[0] || (C[0] = et(() => {
          }, ["stop"])),
          textContent: se(e.translation.sourceTitle)
        }, null, 8, zy)
      ]),
      "mid-content": b(() => [
        p(pe(be), { class: "ma-0 py-2" }, {
          default: b(() => [
            p(pe(we), null, {
              default: b(() => [
                o.value ? (v(), F(pe(sn), { key: 0 })) : a.value ? (v(), D("div", jy, [
                  p(ye, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: pe(zs),
                    type: "text",
                    label: i.value,
                    progressive: "",
                    onClick: et(d, ["stop"])
                  }, null, 8, ["icon", "label", "onClick"]),
                  p(ye, {
                    class: "cx-published-translation__missing-sections-button pa-0 ms-4",
                    icon: pe(os),
                    type: "icon",
                    progressive: "",
                    onClick: et(d, ["stop"])
                  }, null, 8, ["icon", "onClick"])
                ])) : (v(), D("div", Hy, [
                  p(ye, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: pe(zs),
                    type: "text",
                    label: m.$i18n("sx-published-translation-new-translation-button-label"),
                    progressive: "",
                    onClick: et(f, ["stop"])
                  }, null, 8, ["icon", "label", "onClick"])
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
}, Gy = () => {
  const e = te(), { commit: t } = te(), { sourceLanguage: n, targetLanguage: o } = de(e), s = Kt();
  return (a) => K(void 0, null, function* () {
    a.sectionTranslationId ? (yield qt.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield qt.deleteCXTranslation(
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
const Wy = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: ye,
    MwDialog: Ot
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: ss,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Gy();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Ky = { class: "pa-4" }, Xy = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Yy(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-dialog"), l = Ce("i18n");
  return v(), F(r, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    header: !1,
    "min-height": "unset"
  }, {
    footer: b(() => [
      w("div", Xy, [
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
      w("div", Ky, [
        j(w("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const Jy = /* @__PURE__ */ H(Wy, [["render", Yy]]), Zy = { class: "pa-4" }, Qy = { class: "flex pt-2" }, eb = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ui,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = () => t("update:modelValue", !1), s = gs(), a = () => {
      s(n.translation), o();
    };
    return (i, r) => {
      const l = Ce("i18n");
      return v(), F(pe(Ot), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.base10,
        "min-height": "unset",
        title: i.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: b(() => [
          w("div", Qy, [
            p(pe(ye), {
              class: "grow py-3",
              large: "",
              label: i.$i18n("sx-confirm-draft-translation-start-button-label"),
              onClick: a
            }, null, 8, ["label"])
          ])
        ]),
        default: b(() => [
          w("div", Zy, [
            j(w("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            j(w("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            w("p", null, [
              j(w("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            j(w("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ], void 0),
        _: 1
      }, 8, ["value", "overlay-color", "title"]);
    };
  }
};
function tb(e, t, n) {
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
        Ne.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        Ne.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield nb(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function Cl(e, t, n) {
  return K(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(Ne.sortByAutonym) : (yield tb(e, t, n)).sort(Ne.sortByAutonym);
  });
}
function nb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function ob() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function sb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function ab(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
function ib(e, t) {
  const n = S(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = Ne.getAutonym(t.value[s]);
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
function rb(e, t, n) {
  const o = Z(""), s = Z(-1), a = Z(null), i = () => {
    s.value++, s.value >= r.value.length && (s.value = 0);
  }, r = S(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return He(e, () => {
    s.value = -1;
  }), He(s, () => K(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = r.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const lb = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Fi
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
      default: ob
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = Z(null), o = Z(""), s = Z([]), a = S(
      () => sb(s.value)
    ), i = S(
      () => ab(s.value)
    ), r = (k) => t.emit("select", k), l = () => t.emit("close"), { autocompletion: d, onTabSelect: c } = ib(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: f, selectedLanguage: m } = rb(o, s, e.suggestions), C = () => {
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
    return He(o, zi(() => K(this, null, function* () {
      s.value = yield Cl(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), pt(() => K(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Cl(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: d,
      close: l,
      getAutonym: Ne.getAutonym,
      getDir: Ne.getDir,
      langSelectorContainer: f,
      mwIconClose: Mt,
      mwIconSearch: Jc,
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
}, cb = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, ub = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, db = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, gb = { class: "results px-3 pt-4" }, fb = { class: "results-header ps-8 pb-2" }, pb = { class: "results-languages--suggestions pa-0 ma-0" }, mb = ["lang", "dir", "aria-selected", "onClick", "textContent"], hb = { class: "results px-3 pt-4" }, _b = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, vb = ["lang", "dir", "aria-selected", "onClick", "textContent"], yb = ["aria-selected"], bb = { class: "no-results px-3 py-4" }, Sb = { class: "ps-8" };
function wb(e, t, n, o, s, a) {
  const i = y("mw-input"), r = Ce("i18n");
  return v(), D("div", cb, [
    je(e.$slots, "search", {}, () => [
      w("div", ub, [
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
            ao(et(o.onEnter, ["prevent"]), ["enter"]),
            ao(et(o.next, ["stop", "prevent"]), ["down"]),
            ao(et(o.prev, ["stop", "prevent"]), ["up"]),
            ao(et(o.close, ["prevent"]), ["esc"]),
            ao(et(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    w("section", db, [
      n.suggestions.length && !o.searchQuery ? je(e.$slots, "suggestions", { key: 0 }, () => [
        w("section", gb, [
          j(w("p", fb, null, 512), [
            [r, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          w("ul", pb, [
            (v(!0), D(xe, null, Ze(n.suggestions, (l) => (v(), D("li", {
              key: l,
              class: he(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: se(o.getAutonym(l))
            }, null, 10, mb))), 128))
          ])
        ])
      ]) : ae("", !0),
      o.searchResultsByScript.length ? je(e.$slots, "search", { key: 1 }, () => [
        w("section", hb, [
          n.suggestions.length && !o.searchQuery ? j((v(), D("p", _b, null, 512)), [
            [r, void 0, "cx-sx-language-selector-all-languages"]
          ]) : ae("", !0),
          (v(!0), D(xe, null, Ze(o.searchResultsByScript, (l, d) => (v(), D("ul", {
            key: d,
            class: he(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (v(!0), D(xe, null, Ze(l, (c) => (v(), D("li", {
              key: c,
              class: he(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
              lang: c,
              dir: o.getDir(c),
              role: "option",
              "aria-selected": c === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(c),
              textContent: se(o.getAutonym(c))
            }, null, 10, vb))), 128)),
            n.allOptionEnabled && !o.searchQuery ? j((v(), D("li", {
              key: 0,
              class: he(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (c) => o.select("all"))
            }, null, 10, yb)), [
              [r, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : ae("", !0)
          ], 2))), 128))
        ])
      ]) : je(e.$slots, "noresults", { key: 2 }, () => [
        w("section", bb, [
          j(w("h3", Sb, null, 512), [
            [r, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const _d = /* @__PURE__ */ H(lb, [["render", wb]]);
const Cb = {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector: _d,
    MwDialog: Ot,
    MwIcon: qe,
    MwButton: ye
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
    const n = Ge("breakpoints"), o = S(() => n.value.mobile), s = Z(!1), a = Z(!1), i = () => s.value = !0, r = () => a.value = !0, l = () => s.value = !1, d = () => a.value = !1, c = (m) => {
      s.value = !1, t("update:selectedSourceLanguage", m);
    }, u = (m) => {
      a.value = !1, t("update:selectedTargetLanguage", m);
    }, g = S(
      () => e.selectedSourceLanguage === "all"
    ), f = S(
      () => e.selectedTargetLanguage === "all"
    );
    return {
      fullscreen: o,
      getAutonym: Ne.getAutonym,
      getDir: Ne.getDir,
      mwIconArrowNext: Pi,
      mwIconExpand: Xc,
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
}, xb = { class: "row sx-translation-list-language-selector ma-0 justify-center items-center" }, Eb = { class: "col-5 justify-end" }, kb = {
  key: 0,
  class: "mw-ui-autonym"
}, Ab = ["lang", "dir", "textContent"], Tb = { class: "sx-translation-list-language-selector__arrow col-2 justify-center" }, Db = { class: "col-5 justify-start" }, Lb = {
  key: 0,
  class: "mw-ui-autonym"
}, Pb = ["lang", "dir", "textContent"];
function Nb(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-language-selector"), l = y("mw-dialog"), d = y("mw-icon"), c = Ce("i18n");
  return v(), D("div", xb, [
    w("div", Eb, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        onClick: et(o.openSourceLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsSource ? j((v(), D("span", kb, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (v(), D("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedSourceLanguage,
            dir: o.getDir(n.selectedSourceLanguage),
            textContent: se(o.getAutonym(n.selectedSourceLanguage))
          }, null, 8, Ab))
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
    w("div", Tb, [
      p(d, { icon: o.mwIconArrowNext }, null, 8, ["icon"])
    ]),
    w("div", Db, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        disabled: n.targetLanguages.length < 2,
        onClick: et(o.openTargetLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsTarget ? j((v(), D("span", Lb, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (v(), D("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedTargetLanguage,
            dir: o.getDir(n.selectedTargetLanguage),
            textContent: se(o.getAutonym(n.selectedTargetLanguage))
          }, null, 8, Pb))
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
const Zi = /* @__PURE__ */ H(Cb, [["render", Nb]]), Fb = ["textContent"], Mb = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, Ob = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, xl = {
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
    const t = e, n = Z("all"), o = Z("all"), s = te(), a = S(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = cs(), r = Z(!1), l = Z(!1), d = Z(null), c = Z(null), u = S(
      () => t.translationStatus === "draft"
    ), g = S(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), f = S(
      () => n.value === "all"
    ), m = S(
      () => o.value === "all"
    ), C = S(
      () => g.value.filter(
        (ce) => (f.value || ce.sourceLanguage === n.value) && (m.value || ce.targetLanguage === o.value)
      ).sort((ce, W) => ce.lastUpdatedTimestamp < W.lastUpdatedTimestamp)
    ), x = S(() => {
      let ce = g.value.map(
        (W) => W.targetLanguage
      );
      return i.value && (ce = ce.filter(
        (W) => i.value.includes(W)
      )), [...new Set(ce)];
    }), k = S(() => {
      const ce = g.value.map(
        (W) => W.sourceLanguage
      );
      return [...new Set(ce)];
    }), L = (ce) => {
      d.value = ce, r.value = !0;
    }, M = S(() => t.activeStatus === t.translationStatus), G = gs(), R = (ce) => {
      ce.isArticleTranslation ? (c.value = ce, l.value = !0) : G(ce);
    };
    return (ce, W) => M.value ? (v(), F(pe(Wt), {
      key: 0,
      class: he(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: b(() => [
        w("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: se(ce.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, Fb)
      ]),
      default: b(() => [
        p(Zi, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": W[0] || (W[0] = (B) => n.value = B),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": W[1] || (W[1] = (B) => o.value = B),
          "source-languages": k.value,
          "target-languages": x.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? ae("", !0) : (v(), F(pe(sn), { key: 0 })),
        u.value ? (v(), D("div", Mb, [
          (v(!0), D(xe, null, Ze(C.value, (B) => (v(), F(py, {
            key: `${e.translationStatus}-${B.key}`,
            translation: B,
            onClick: (me) => R(B),
            onDeleteTranslation: (me) => L(B)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (v(), D("div", Ob, [
          (v(!0), D(xe, null, Ze(C.value, (B) => (v(), F(qy, {
            key: `${e.translationStatus}-${B.key}`,
            translation: B,
            onDeleteTranslation: (me) => L(B)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        p(Jy, {
          modelValue: r.value,
          "onUpdate:modelValue": W[2] || (W[2] = (B) => r.value = B),
          translation: d.value
        }, null, 8, ["modelValue", "translation"]),
        p(eb, {
          modelValue: l.value,
          "onUpdate:modelValue": W[3] || (W[3] = (B) => l.value = B),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ], void 0),
      _: 1
    }, 8, ["class"])) : ae("", !0);
  }
};
const Bb = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: Mi, MwIcon: qe, MwRow: be, MwCol: we },
  props: {
    suggestion: {
      type: [Ri, Ft, qo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = te(), n = S(() => e.suggestion), o = S(
      () => n.value.sourceTitle || n.value.title
    ), s = S(
      () => t.getters["mediawiki/getPage"](
        n.value.sourceLanguage,
        o.value
      )
    ), a = S(
      () => {
        var m;
        return (m = n.value) == null ? void 0 : m.missingSectionsCount;
      }
    ), i = S(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.description;
    }), r = S(
      () => n.value instanceof Ft
    ), l = S(
      () => n.value instanceof qo
    ), { sourceLanguageAutonym: d, targetLanguageAutonym: c } = de(t), u = S(
      () => l.value ? Qc : Zc
    ), g = Ge("colors"), f = S(
      () => l.value ? g.primary : "currentColor"
    );
    return {
      bookmarkIcon: u,
      bookmarkIconColor: f,
      description: i,
      getDir: Ne.getDir,
      isFavoriteSuggestion: l,
      isSectionSuggestion: r,
      missingSectionsCount: a,
      mwIconArrowNext: Pi,
      mwIconClose: Mt,
      page: s,
      sourceLanguageAutonym: d,
      targetLanguageAutonym: c,
      title: o
    };
  }
}, Ib = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, $b = { class: "col shrink pe-4" }, Ub = { class: "col cx-suggestion__information-panel" }, Rb = ["lang", "dir", "textContent"], Vb = ["lang", "dir", "textContent"], zb = ["textContent"], jb = ["textContent"];
function Hb(e, t, n, o, s, a) {
  const i = y("mw-thumbnail"), r = y("mw-col"), l = y("mw-row"), d = y("mw-icon"), c = Ce("i18n");
  return n.suggestion ? (v(), D("div", Ib, [
    w("div", $b, [
      p(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    w("div", Ub, [
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
                              w("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: se(o.title)
                              }, null, 8, Rb)
                            ], void 0, !0),
                            _: 1
                          }),
                          p(r, { shrink: "" }, {
                            default: b(() => [
                              w("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: se(o.description)
                              }, null, 8, Vb)
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
                      o.isFavoriteSuggestion ? ae("", !0) : (v(), F(d, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "cx-suggestion__discard-button mb-4",
                        onClick: t[0] || (t[0] = et((u) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      p(d, {
                        class: "cx-suggestion__favorite-button",
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = et((u) => e.$emit("bookmark"), ["stop"]))
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
              j(w("small", null, null, 512), [
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
                      w("small", {
                        textContent: se(o.sourceLanguageAutonym)
                      }, null, 8, zb),
                      p(d, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      w("small", {
                        textContent: se(o.targetLanguageAutonym)
                      }, null, 8, jb)
                    ], void 0, !0),
                    _: 1
                  }),
                  o.missingSectionsCount ? (v(), F(r, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: b(() => [
                      j(w("small", null, null, 512), [
                        [c, [
                          o.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ], void 0, !0),
                    _: 1
                  })) : ae("", !0)
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })) : ae("", !0)
        ], void 0),
        _: 1
      })
    ])
  ])) : ae("", !0);
}
const vd = /* @__PURE__ */ H(Bb, [["render", Hb]]), qb = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = cs(), n = S(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Gb = () => {
  const e = te(), { sourceLanguage: t, targetLanguage: n } = de(e), o = Kt(), s = S(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = S(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = S(
    () => !s.value && !a.value
  ), r = Z(0), l = Z(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, c = 4, u = S(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      r.value
    )
  ), g = S(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), f = () => {
    m(), C();
  }, m = () => {
    const G = u.value.length === d, R = (r.value + 1) % c, ce = G && e.getters["application/getSectionSuggestionsSliceByIndex"](R).length > 0;
    (!G || !ce) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), G && L();
  }, C = () => {
    const G = g.value.length === d, R = (l.value + 1) % c, ce = G && e.getters["application/getPageSuggestionsSliceByIndex"](R).length > 0;
    (!G || !ce) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), G && M();
  }, x = (G) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestion", G), m();
  }, k = (G) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", G), C();
  }, L = () => r.value = (r.value + 1) % c, M = () => l.value = (l.value + 1) % c;
  return {
    currentPageSuggestionsSlice: g,
    currentSectionSuggestionsSlice: u,
    discardPageSuggestion: k,
    discardSectionSuggestion: x,
    onSuggestionRefresh: f,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
}, yd = (e) => K(void 0, null, function* () {
  return Iu.dispatch("suggestions/removeFavoriteSuggestion", e);
});
const Wb = {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector: Zi,
    CxTranslationSuggestion: vd,
    MwCard: Wt,
    MwButton: ye,
    MwSpinner: sn
  },
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = te(), { sourceLanguage: t, targetLanguage: n } = de(e), { supportedLanguageCodes: o, availableTargetLanguages: s } = qb(), a = dd(), i = (B) => a(B, n.value), r = (B) => a(t.value, B), l = Wi(), d = (B) => l(
      B.sourceTitle,
      "dashboard",
      "suggestion_no_seed"
    ), { startPageSuggestion: c } = Ji(), {
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      onSuggestionRefresh: C,
      pageSuggestionsLoading: x,
      sectionSuggestionsLoading: k,
      showRefreshButton: L
    } = Gb(), M = Z(null), G = Kt();
    return {
      availableTargetLanguages: s,
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      mwIconRefresh: Yc,
      markFavoritePageSuggestion: (B) => K(this, null, function* () {
        return e.dispatch("suggestions/addPageSuggestionAsFavorite", B);
      }),
      markFavoriteSectionSuggestion: (B) => K(this, null, function* () {
        return e.dispatch("suggestions/addSectionSuggestionAsFavorite", B);
      }),
      unmarkFavoriteSectionSuggestion: yd,
      pageSuggestionsLoading: x,
      pageSuggestionsList: M,
      refreshSuggestions: () => {
        G({
          event_type: "dashboard_refresh_suggestions",
          translation_source_language: t.value,
          translation_target_language: n.value
        }), C(), M.value.$el.scrollIntoView({ behavior: "smooth" });
      },
      sectionSuggestionsLoading: k,
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
}, Kb = ["textContent"], Xb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Yb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Jb = { class: "cx-suggestion-list__refresh-button-container justify-center" };
function Zb(e, t, n, o, s, a) {
  const i = y("sx-translation-list-language-selector"), r = y("mw-card"), l = y("cx-translation-suggestion"), d = y("mw-spinner"), c = y("mw-button"), u = Ce("i18n");
  return j((v(), D("div", null, [
    p(r, { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
      header: b(() => [
        w("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: se(e.$i18n("cx-suggestionlist-title"))
        }, null, 8, Kb)
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
        j(w("h5", Xb, null, 512), [
          [u, void 0, "cx-suggestion-list-new-pages-division"]
        ]),
        (v(!0), D(xe, null, Ze(o.currentPageSuggestionsSlice, (g, f) => (v(), F(l, {
          key: `page-suggestion-${f}`,
          suggestion: g,
          onClose: (m) => o.discardPageSuggestion(g),
          onClick: (m) => o.startPageSuggestion(g),
          onBookmark: (m) => o.markFavoritePageSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.pageSuggestionsLoading ? (v(), F(d, { key: 0 })) : ae("", !0)
      ], void 0),
      _: 1
    }, 512),
    p(r, { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
      default: b(() => [
        j(w("h5", Yb, null, 512), [
          [u, void 0, "cx-suggestionlist-expand-sections-title"]
        ]),
        (v(!0), D(xe, null, Ze(o.currentSectionSuggestionsSlice, (g, f) => (v(), F(l, {
          key: `section-suggestion-${f}`,
          class: "ma-0",
          suggestion: g,
          onClose: (m) => o.discardSectionSuggestion(g),
          onClick: (m) => o.startSectionTranslation(g),
          onBookmark: (m) => o.markFavoriteSectionSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.sectionSuggestionsLoading ? (v(), F(d, { key: 0 })) : ae("", !0)
      ], void 0),
      _: 1
    }),
    w("div", Jb, [
      o.showRefreshButton ? (v(), F(c, {
        key: 0,
        class: "ma-0 pa-4",
        type: "text",
        label: e.$i18n("cx-suggestionlist-refresh"),
        icon: o.mwIconRefresh,
        onClick: o.refreshSuggestions
      }, null, 8, ["label", "icon", "onClick"])) : ae("", !0)
    ])
  ], 512)), [
    [Hc, n.active]
  ]);
}
const Qb = /* @__PURE__ */ H(Wb, [["render", Zb]]), eS = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: vd,
    MwCard: Wt
  },
  setup() {
    const e = mt(), t = te();
    return {
      favorites: S(() => t.state.suggestions.favorites || []),
      startFavoriteTranslation: (s) => K(this, null, function* () {
        yield t.dispatch(
          "application/startFavoriteSectionTranslation",
          s
        ), e.push({
          name: "sx-translation-confirmer",
          query: { previousRoute: "dashboard" }
        });
      }),
      unmarkFavoriteSectionSuggestion: yd
    };
  }
}, tS = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function nS(e, t, n, o, s, a) {
  const i = y("cx-translation-suggestion"), r = y("mw-card"), l = Ce("i18n");
  return o.favorites.length ? (v(), F(r, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: b(() => [
      j(w("h3", tS, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: b(() => [
      (v(!0), D(xe, null, Ze(o.favorites, (d, c) => (v(), F(i, {
        key: `favorite-${c}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.unmarkFavoriteSectionSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ], void 0),
    _: 1
  })) : ae("", !0);
}
const oS = /* @__PURE__ */ H(eS, [["render", nS]]);
const sS = {
  name: "CxHelpPanel",
  components: { MwIcon: qe },
  setup() {
    const e = Ct();
    return { listItems: [
      {
        icon: Vm,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Dm,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: zm,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, aS = { class: "cx-help-panel pa-4" }, iS = { class: "cx-help-panel__item-list mt-6 ps-2" }, rS = ["href"], lS = ["textContent"];
function cS(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = Ce("i18n");
  return v(), D("div", aS, [
    j(w("h5", null, null, 512), [
      [r, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    w("ul", iS, [
      (v(!0), D(xe, null, Ze(o.listItems, (l, d) => (v(), D("li", {
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
            textContent: se(l.label)
          }, null, 8, lS)
        ], 8, rS)
      ]))), 128))
    ])
  ]);
}
const uS = /* @__PURE__ */ H(sS, [["render", cS]]);
const dS = {
  name: "CxStatsPanel",
  components: { MwCol: we, MwRow: be },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = S(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = S(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = Z(null);
    return He(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), r = Object.keys(e.stats || {}).sort(), l = r.reduce(
          (M, G) => Math.max(M, a[G].delta),
          0
        ), d = r.map((M) => a[M].delta), c = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = c, s.value.height = u;
        const g = 4, f = 6, m = 50, C = (m - g) / l;
        let x = g;
        const k = Math.floor(
          (c - g) / (f + g)
        ), L = d.slice(
          Math.max(d.length - k, 0)
        );
        L.forEach((M, G) => {
          G === L.length - 1 && (i.fillStyle = "#36c");
          const R = m - M * C;
          i.fillRect(x, R, f, M * C), x += f + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, gS = { class: "cx-stats-panel pa-4" }, fS = ["textContent"], pS = { class: "cx-stats-panel__monthly-stats-label" }, mS = ["textContent"], hS = { class: "cx-stats-panel__total-stats-label" }, _S = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function vS(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-row"), l = Ce("i18n");
  return v(), D("div", gS, [
    j(w("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    p(r, null, {
      default: b(() => [
        p(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: b(() => [
            w("h3", {
              textContent: se(o.thisMonthStats)
            }, null, 8, fS),
            j(w("h5", pS, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, { class: "cx-stats-panel__total-stats" }, {
          default: b(() => [
            w("h3", {
              textContent: se(o.total)
            }, null, 8, mS),
            j(w("h5", hS, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    w("canvas", _S, null, 512)
  ]);
}
const yS = /* @__PURE__ */ H(dS, [["render", vS]]);
const bS = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: we, MwRow: be, MwCard: Wt, MwIcon: qe },
  data: () => ({
    mwIconLabFlask: tu,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, SS = { class: "complementary" }, wS = { class: "complementary mt-4" }, CS = ["href"], xS = { class: "complementary" }, ES = ["href"];
function kS(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-col"), l = y("mw-row"), d = y("mw-card"), c = Ce("i18n");
  return v(), F(d, { class: "experimental-support-banner mb-1" }, {
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
              j(w("h5", null, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              j(w("p", SS, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              w("p", wS, [
                j(w("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, CS), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              w("p", xS, [
                j(w("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, ES), [
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
const AS = /* @__PURE__ */ H(bS, [["render", kS]]), Qi = (e) => () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
  e.dispatch("translator/fetchTranslationsByStatus", "published"),
  e.dispatch("translator/fetchTranslationsByStatus", "draft")
]).catch((t) => {
  mw.log.error("[CX] Error while fetching translations", t);
}), bd = () => {
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
}, TS = () => {
  const e = te(), t = Wi(), n = Kt(), o = gs(), s = Qi(e);
  return (l) => K(void 0, [l], function* ({ pageTitle: a, isDraftTranslation: i, sectionTitle: r }) {
    const d = bd() || "direct_preselect", { sourceLanguage: c, targetLanguage: u } = de(e);
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
      t(a, "dashboard", d);
  });
}, DS = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  if (!t || !n)
    return null;
  const o = e.get("section"), s = !!e.get("draft");
  return { pageTitle: n, isDraftTranslation: s, sectionTitle: o };
}, LS = () => {
  const e = Kt(), t = te(), n = TS(), o = Qi(t), s = Ki();
  return () => K(void 0, null, function* () {
    yield ud()();
    const i = DS();
    if (i) {
      n(i);
      return;
    }
    const { sourceLanguage: r, targetLanguage: l } = de(t);
    e({
      event_type: "dashboard_open",
      event_source: bd() || "direct",
      translation_source_language: r.value,
      translation_target_language: l.value
    });
    try {
      yield t.dispatch("suggestions/fetchFavorites");
    } catch (d) {
      mw.log.error("[CX] Error while fetching favorite suggestions", d);
    }
    yield o(), s();
  });
}, PS = ["suggestions", "draft", "published"], NS = () => {
  const e = te(), n = new URLSearchParams(location.search).get("active-list"), o = Z(null);
  if (PS.includes(n))
    o.value = n;
  else {
    const s = S(
      () => e.state.translator.translationsLoaded.draft
    ), a = S(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", He(s, (i) => {
      i && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return fc(() => {
    hy("active-list", o.value), window.scrollTo(0, 0);
  }), o;
};
const FS = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ct(), n = S(() => [
      {
        value: "suggestions",
        props: {
          label: t.i18n("cx-translation-filter-suggested-translations"),
          icon: Pm,
          type: "text"
        }
      },
      {
        value: "draft",
        props: {
          label: t.i18n("cx-translation-filter-draft-translations"),
          icon: Yn,
          type: "text"
        }
      },
      {
        value: "published",
        props: {
          label: t.i18n("cx-translation-filter-published-translations"),
          icon: Lm,
          type: "text"
        }
      }
    ]), o = mt(), s = () => o.push({ name: "sx-article-search" });
    LS()();
    const i = te();
    i.dispatch("translator/fetchTranslatorStats");
    const r = S(() => i.state.translator.translatorStats), l = NS();
    return (d, c) => (v(), D("div", null, [
      d.$incompleteVersion ? (v(), F(AS, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : ae("", !0),
      p(pe(be), { class: "ma-0" }, {
        default: b(() => [
          p(pe(ye), {
            id: "dashboard-search-translation-button",
            progressive: "",
            icon: pe(zs),
            label: d.$i18n("cx-create-new-translation"),
            class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12 my-4",
            onClick: s
          }, null, 8, ["icon", "label"])
        ], void 0),
        _: 1
      }),
      p(pe(be), {
        class: "ma-0",
        align: "start"
      }, {
        default: b(() => [
          d.$mwui.breakpoint.tabletAndUp ? (v(), F(pe(we), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: b(() => [
              p(pe(es), {
                id: "dashboard-list-selector--desktop",
                items: n.value,
                active: pe(l),
                onSelect: c[0] || (c[0] = (u) => l.value = u)
              }, null, 8, ["items", "active"])
            ], void 0, !0),
            _: 1
          })) : ae("", !0),
          p(pe(we), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: b(() => [
              p(oS),
              p(Qb, {
                active: pe(l) === "suggestions"
              }, null, 8, ["active"]),
              p(xl, {
                "translation-status": "draft",
                "active-status": pe(l)
              }, null, 8, ["active-status"]),
              p(xl, {
                "translation-status": "published",
                "active-status": pe(l)
              }, null, 8, ["active-status"])
            ], void 0, !0),
            _: 1
          }),
          p(pe(we), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: b(() => [
              p(pe(be), {
                class: "ma-0",
                align: "start"
              }, {
                default: b(() => [
                  p(pe(we), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: b(() => [
                      p(yS, { stats: r.value }, null, 8, ["stats"])
                    ], void 0, !0),
                    _: 1
                  }),
                  p(pe(we), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: b(() => [
                      p(uS)
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
      d.$mwui.breakpoint.mobile ? (v(), F(pe(gm), {
        key: 1,
        active: pe(l),
        "onUpdate:active": c[1] || (c[1] = (u) => Ke(l) ? l.value = u : null),
        items: n.value
      }, null, 8, ["active", "items"])) : ae("", !0)
    ]));
  }
}, MS = {
  name: "DashboardView",
  components: { CxDashboard: FS }
}, OS = { class: "cx-translation-dashboard" };
function BS(e, t, n, o, s, a) {
  const i = y("cx-dashboard");
  return v(), D("main", OS, [
    p(i, { class: "mb-4 pb-12" })
  ]);
}
const El = /* @__PURE__ */ H(MS, [["render", BS]]), IS = (e) => {
  const t = S(
    () => {
      var d, c;
      return (c = (d = e.value.orderedMissingSections) == null ? void 0 : d[0]) == null ? void 0 : c.sourceTitle;
    }
  ), n = S(
    () => e.value.missingSectionsCount
  ), o = S(
    () => e.value.presentSectionsCount
  ), s = S(
    () => {
      var d;
      return !!((d = e.value) != null && d.targetTitle);
    }
  ), a = S(
    () => {
      var d, c;
      return Me.getPageUrl(
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
  }, r = S(() => {
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
  }), l = S(
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
}, er = () => {
  const e = te(), { currentSectionSuggestion: t, currentSourcePage: n } = de(e), o = hd(), s = (r, l) => K(void 0, null, function* () {
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
}, $S = () => {
  const e = mt(), t = te(), { isDesktop: n } = ls(), o = new URLSearchParams(location.search), s = Z(o.get("section")), {
    currentSourceSection: a,
    currentSectionSuggestion: i,
    sourceLanguage: r,
    targetLanguage: l
  } = de(t), d = S(
    () => {
      var k;
      return !!((k = i.value) != null && k.targetTitle);
    }
  ), c = () => {
    s.value = null, o.delete("section"), Qn(Object.fromEntries(o));
  }, { selectPageSectionByIndex: u, selectPageSectionByTitle: g } = er(), f = Xi(), m = () => K(void 0, null, function* () {
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
    s.value ? m() : d.value ? e.push({ name: "sx-section-selector" }) : x(), ri(i.value);
  }, x = () => K(void 0, null, function* () {
    var k;
    if (n.value) {
      const L = (k = i.value) == null ? void 0 : k.sourceTitle;
      f(r.value, l.value, L);
    } else
      u(0), cd() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }), ri(i.value);
  });
  return {
    clearPreFilledSection: c,
    startNewTranslation: x,
    onSectionSelectorClick: C,
    preFilledSectionTitle: s
  };
};
const US = {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton: ye,
    MwRow: be,
    MwCol: we,
    MwIcon: qe
  },
  setup() {
    const e = mt(), t = te(), n = Ge("colors"), { targetLanguageAutonym: o, currentSectionSuggestion: s } = de(t), {
      clearPreFilledSection: a,
      startNewTranslation: i,
      onSectionSelectorClick: r,
      preFilledSectionTitle: l
    } = $S(), {
      actionInformationMessageArgs: d,
      getActionButtonLabel: c,
      isProgressiveButton: u,
      targetArticlePath: g,
      targetPageExists: f
    } = IS(s), m = Ct(), C = S(
      () => m.i18n(c(!!l.value))
    ), { isDesktop: x } = ls(), k = S(
      () => m.i18n(...d.value)
    ), L = () => {
      e.push({ name: "sx-section-selector" }), ri(s.value);
    };
    return pt(() => {
      const M = l.value;
      M && !s.value.hasSectionTitle(M) && a();
    }), {
      actionButtonLabel: C,
      actionInformationMessage: k,
      isProgressiveButton: u,
      mwIconLinkExternal: ns,
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
}, RS = { class: "sx-translation-confirmer-body pb-4" }, VS = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, zS = ["textContent"], jS = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, HS = ["href"], qS = ["textContent"];
function GS(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-icon"), l = y("mw-row"), d = y("mw-button"), c = Ce("i18n");
  return v(), D("section", RS, [
    o.preFilledSectionTitle ? (v(), D("section", VS, [
      j(w("h6", null, null, 512), [
        [c, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
      ]),
      w("h5", {
        class: "ma-0",
        textContent: se(o.preFilledSectionTitle)
      }, null, 8, zS)
    ])) : o.targetPageExists ? (v(), D("section", jS, [
      p(l, {
        class: "sx-translation-confirmer__translation-status ma-0 pb-2",
        justify: "between"
      }, {
        default: b(() => [
          j(p(i, {
            tag: "h5",
            class: "ma-0 pe-2"
          }, null, 512), [
            [c, [o.targetLanguageAutonym], "cx-sx-existing-translation-status"]
          ]),
          p(i, { shrink: "" }, {
            default: b(() => [
              w("a", {
                href: o.targetArticlePath,
                target: "_blank"
              }, [
                p(r, {
                  icon: o.mwIconLinkExternal,
                  size: "16",
                  "icon-color": o.colors.base30
                }, null, 8, ["icon", "icon-color"])
              ], 8, HS)
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
              w("span", {
                textContent: se(o.actionInformationMessage)
              }, null, 8, qS)
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])) : ae("", !0),
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
            j(p(d, {
              large: "",
              progressive: "",
              type: "text",
              onClick: o.onMoreSectionsClick
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-more-sections-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : ae("", !0),
        o.targetPageExists && o.isDesktop ? (v(), F(i, {
          key: 1,
          shrink: "",
          class: "me-4"
        }, {
          default: b(() => [
            j(p(d, {
              large: "",
              onClick: o.startNewTranslation
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-new-desktop-translation-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : ae("", !0),
        p(i, { shrink: "" }, {
          default: b(() => [
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
const WS = /* @__PURE__ */ H(US, [["render", GS]]);
const KS = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: Zi
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = cs(), n = te(), { sourceLanguage: o, targetLanguage: s } = de(n), a = S(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = S(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), r = S(
      () => t.value || e.value
    ), l = yy();
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
function XS(e, t, n, o, s, a) {
  const i = y("sx-translation-list-language-selector");
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
const Sd = /* @__PURE__ */ H(KS, [["render", XS]]);
const YS = {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow: be,
    MwCol: we,
    MwIcon: qe,
    MwButton: ye
  },
  setup() {
    const e = te(), {
      currentSectionSuggestion: t,
      currentSourcePage: n
    } = de(e), o = S(() => e.state.suggestions.favorites || []), s = S(
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
    }), r = S(
      () => s.value ? Qc : Zc
    ), l = S(
      () => s.value ? a : i
    ), d = S(() => {
      var f;
      return (f = t.value) == null ? void 0 : f.sourceTitle;
    }), c = S(
      () => {
        var f;
        return Me.getPageUrl(
          ((f = t.value) == null ? void 0 : f.sourceLanguage) || "",
          d.value || ""
        );
      }
    ), u = S(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.langLinksCount;
    }), g = S(
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
      mwIconLanguage: eu,
      mwIconLinkExternal: ns,
      sourceArticle: n,
      sourceArticlePath: c,
      sourceTitle: d,
      toggleFavorite: l,
      weeklyViews: g
    };
  }
}, JS = ["textContent"], ZS = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, QS = ["textContent"];
function ew(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-col"), l = y("mw-button"), d = y("mw-row"), c = Ce("i18n");
  return v(), F(d, {
    class: "sx-translation-confirmer__article-information ma-0 pa-4",
    align: "stretch",
    justify: "start"
  }, {
    default: b(() => [
      p(r, null, {
        default: b(() => [
          p(d, {
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
                  w("h5", {
                    class: "ma-0 me-1",
                    textContent: se(o.sourceTitle)
                  }, null, 8, JS),
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
          w("p", ZS, [
            p(i, {
              icon: o.mwIconLanguage,
              size: "16",
              class: "me-1"
            }, null, 8, ["icon"]),
            w("span", {
              class: "pe-3",
              textContent: se(o.langLinksCount)
            }, null, 8, QS),
            j(w("span", null, null, 512), [
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
const tw = /* @__PURE__ */ H(YS, [["render", ew]]);
const nw = {
  name: "SxTranslationConfirmer",
  components: {
    MwIcon: qe,
    SxTranslationConfirmerArticleInformation: tw,
    MwRow: be,
    MwCol: we,
    MwButton: ye,
    SxArticleLanguageSelector: Sd,
    SxTranslationConfirmerActionPanel: WS
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
    const t = te(), { sourceLanguage: n, targetLanguage: o, currentSourcePage: s } = de(t), a = S(
      () => {
        var d, c;
        return (c = (d = s.value) == null ? void 0 : d.image) == null ? void 0 : c.source;
      }
    ), i = Kt();
    pt(() => {
      t.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), i({
        event_type: "dashboard_translation_start",
        event_source: e.eventSource,
        translation_source_language: n.value,
        translation_target_language: o.value
      }), Yi(), t.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        o.value
      );
    });
    const r = mt();
    return {
      articleImageSource: a,
      mwIconArticle: Ni,
      mwIconClose: Mt,
      onClose: () => {
        t.dispatch("application/clearCurrentSectionSuggestion"), Qn(null), r.push({ name: e.previousRoute });
      }
    };
  }
}, ow = { class: "sx-translation-confirmer" }, sw = { class: "mb-0" }, aw = { class: "sx-translation-confirmer__article-image flex justify-center" }, iw = ["src"], rw = { class: "ma-3" };
function lw(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-button"), l = y("mw-row"), d = y("mw-icon"), c = y("sx-translation-confirmer-article-information"), u = y("sx-article-language-selector"), g = y("sx-translation-confirmer-action-panel"), f = Ce("i18n"), m = Ce("i18n-html");
  return v(), D("section", ow, [
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
            j(w("h5", sw, null, 512), [
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
    w("div", aw, [
      o.articleImageSource ? (v(), D("img", {
        key: 0,
        src: o.articleImageSource
      }, null, 8, iw)) : (v(), F(d, {
        key: 1,
        size: "120",
        icon: o.mwIconArticle,
        "icon-color": e.$mwui.colors.primary
      }, null, 8, ["icon", "icon-color"]))
    ]),
    p(c),
    p(u),
    p(g),
    p(l, {
      justify: "center",
      class: "sx-translation-confirmer__license ma-0"
    }, {
      default: b(() => [
        w("p", rw, [
          j(w("small", null, null, 512), [
            [m, void 0, "cx-license-agreement"]
          ])
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const cw = /* @__PURE__ */ H(nw, [["render", lw]]);
const uw = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: cw
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
function dw(e, t, n, o, s, a) {
  const i = y("sx-translation-confirmer");
  return v(), D("main", {
    class: he(["sx-translation-confirmer-view", a.classes])
  }, [
    p(i, {
      "event-source": n.eventSource,
      "previous-route": n.previousRoute
    }, null, 8, ["event-source", "previous-route"])
  ], 2);
}
const gw = /* @__PURE__ */ H(uw, [["render", dw]]), fw = {
  name: "SxSectionSelectorViewArticleItem",
  components: {
    MwRow: be,
    MwButton: ye
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
function pw(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-row");
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
const hw = /* @__PURE__ */ H(fw, [["render", pw]]);
const _w = {
  name: "SxSectionSelectorHeader",
  components: {
    MwRow: be,
    MwCol: we,
    MwButton: ye
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
}, vw = { class: "sx-section-selector__header pa-4" }, yw = { class: "sx-section-selector__header-text ma-0" }, bw = ["textContent"], Sw = { class: "pt-0 ma-0" }, ww = { class: "ma-0" };
function Cw(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-button"), l = y("mw-row"), d = Ce("i18n");
  return v(), D("div", vw, [
    p(l, { class: "ma-0 pb-3" }, {
      default: b(() => [
        p(i, null, {
          default: b(() => [
            j(w("h6", yw, null, 512), [
              [d, void 0, "cx-sx-section-selector-title"]
            ]),
            w("h2", {
              class: "sx-section-selector__title ma-0 py-0",
              textContent: se(n.suggestion.sourceTitle)
            }, null, 8, bw)
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
    j(w("h4", Sw, null, 512), [
      [d, void 0, "cx-sx-section-selector-subtitle"]
    ]),
    j(w("p", ww, null, 512), [
      [d, void 0, "cx-sx-section-selector-desc"]
    ])
  ]);
}
const xw = /* @__PURE__ */ H(_w, [["render", Cw]]), Ew = {
  name: "SxSectionSelectorSectionList",
  components: {
    MwRow: be,
    MwButton: ye,
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
  data: () => ({ mwIconArrowForward: kn })
}, kw = { class: "sx-section-selector__sections-list ma-0 pa-0" };
function Aw(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-button"), l = y("mw-row");
  return v(), D("ul", kw, [
    (v(!0), D(xe, null, Ze(n.sections, (d) => (v(), F(l, {
      key: d.sourceTitle,
      tag: "li",
      class: "ma-0"
    }, {
      default: b(() => [
        p(r, {
          class: "col justify-between py-3 px-4",
          label: d.sourceTitle,
          type: "text",
          onClick: (c) => e.$emit("select-section", d.sourceTitle)
        }, {
          default: b(() => [
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
const wd = /* @__PURE__ */ H(Ew, [["render", Aw]]), Tw = `<svg
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
const Dw = {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList: wd,
    MwRow: be,
    MwCol: we,
    MwButton: ye
  },
  props: {
    suggestion: {
      type: Ft,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = S(
      () => Ne.getAutonym(e.suggestion.targetLanguage)
    ), n = S(
      () => Object.keys(e.suggestion.missingSections).length === 0
    );
    return {
      sadRobotSVG: Tw,
      getAutonym: Ne.getAutonym,
      getDir: Ne.getDir,
      targetLanguageAutonym: t,
      emptySections: n
    };
  }
}, Lw = { class: "sx-section-selector__missing-sections py-2" }, Pw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Nw = ["lang", "dir", "textContent"];
function Fw(e, t, n, o, s, a) {
  const i = y("sx-section-selector-section-list"), r = y("mw-col"), l = y("mw-button"), d = y("mw-row"), c = Ce("i18n");
  return v(), D("section", Lw, [
    j(w("h4", Pw, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-missing-sections-title"]
    ]),
    o.emptySections ? ae("", !0) : (v(), F(i, {
      key: 0,
      sections: n.suggestion.orderedMissingSections,
      onSelectSection: t[0] || (t[0] = (u) => e.$emit("select-section", u))
    }, {
      default: b(({ sourceSection: u }) => [
        w("h5", {
          class: "ma-0",
          lang: n.suggestion.sourceLanguage,
          dir: o.getDir(n.suggestion.sourceLanguage),
          textContent: se(u)
        }, null, 8, Nw)
      ]),
      _: 1
    }, 8, ["sections"])),
    o.emptySections ? (v(), F(d, {
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
            j(w("h6", null, null, 512), [
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
            j(w("p", null, null, 512), [
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
            j(p(l, {
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
    })) : ae("", !0)
  ]);
}
const Mw = /* @__PURE__ */ H(Dw, [["render", Fw]]);
const Ow = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: wd
  },
  props: {
    suggestion: {
      type: Ft,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = S(
      () => Ne.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: kn, getAutonym: Ne.getAutonym, getDir: Ne.getDir, targetLanguageAutonym: t };
  }
}, Bw = { class: "sx-section-selector__present-sections py-2" }, Iw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, $w = { class: "sx-section-selector__present-section-button-content" }, Uw = ["lang", "dir", "textContent"], Rw = ["lang", "dir", "textContent"];
function Vw(e, t, n, o, s, a) {
  const i = y("sx-section-selector-section-list"), r = Ce("i18n");
  return v(), D("section", Bw, [
    j(w("h4", Iw, null, 512), [
      [r, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    p(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: b(({ sourceSection: l, targetSection: d }) => [
        w("div", $w, [
          w("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: se(l)
          }, null, 8, Uw),
          w("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: se(d)
          }, null, 8, Rw)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const zw = /* @__PURE__ */ H(Ow, [["render", Vw]]);
const jw = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: zw,
    SxSectionSelectorSectionListMissing: Mw,
    SxSectionSelectorHeader: xw,
    SxSectionSelectorViewArticleItem: hw,
    MwRow: be,
    MwCol: we,
    MwIcon: qe,
    SxArticleLanguageSelector: Sd
  },
  setup() {
    const e = te(), {
      currentSectionSuggestion: t,
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = de(e), i = S(
      () => Me.getPageUrl(n.value, t.value.sourceTitle)
    ), r = S(
      () => Me.getPageUrl(o.value, t.value.targetTitle)
    ), l = S(() => [
      { path: i.value, autonym: s.value },
      { path: r.value, autonym: a.value }
    ]), d = mt(), c = () => {
      Qn(null), d.push({ name: "dashboard" });
    }, u = gs(), { selectPageSectionByTitle: g } = er(), { isDesktop: f } = ls(), m = Xi();
    return {
      goToDashboard: c,
      mwIconRobot: nu,
      mwIconLabFlask: tu,
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
        const k = e.getters["translator/getDraftTranslation"](
          t.value.sourceTitle,
          x,
          n.value,
          o.value
        );
        k ? u(k) : (g(x), d.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: l
    };
  }
}, Hw = { class: "sx-section-selector" }, qw = { class: "sx-section-selector__body" }, Gw = { class: "py-2" }, Ww = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Kw = { class: "ma-0 pa-0" }, Xw = { class: "sx-section-selector__additional-consideration-title" }, Yw = { href: "#" }, Jw = { class: "sx-section-selector__additional-consideration-title" }, Zw = { href: "#" };
function Qw(e, t, n, o, s, a) {
  const i = y("sx-section-selector-header"), r = y("sx-article-language-selector"), l = y("sx-section-selector-section-list-missing"), d = y("sx-section-selector-section-list-present"), c = y("sx-section-selector-view-article-item"), u = y("mw-icon"), g = y("mw-col"), f = y("mw-row"), m = Ce("i18n");
  return v(), D("section", Hw, [
    p(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    w("section", qw, [
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
      w("section", Gw, [
        j(w("h4", Ww, null, 512), [
          [m, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        w("ul", Kw, [
          (v(!0), D(xe, null, Ze(o.viewArticleItems, (C, x) => (v(), F(c, {
            key: `view-article-item-${x}`,
            path: C.path,
            autonym: C.autonym
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
              w("h6", Xw, [
                p(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                zo(" " + se(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              j(w("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              j(w("a", Yw, null, 512), [
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
              w("h6", Jw, [
                p(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                zo(" " + se(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              j(w("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              j(w("a", Zw, null, 512), [
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
const eC = /* @__PURE__ */ H(jw, [["render", Qw]]);
const tC = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: eC
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function nC(e, t, n, o, s, a) {
  const i = y("sx-section-selector");
  return v(), D("main", {
    class: he(["sx-section-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const oC = /* @__PURE__ */ H(tC, [["render", nC]]), sC = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = de(
    te()
  ), o = Ct();
  return S(() => {
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
const aC = {
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
    const n = (s) => t("update:selection", s), o = sC(e);
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
}, iC = { class: "sx-content-comparator__source-target-selector" };
function rC(e, t, n, o, s, a) {
  const i = y("mw-button-group");
  return v(), D("div", iC, [
    p(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const lC = /* @__PURE__ */ H(aC, [["render", rC]]), tr = (e) => {
  const t = Z([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o,
    currentTargetPage: s
  } = de(e), a = S(
    () => e.getters["application/getCurrentSourceSectionTitle"]
  ), i = S(
    () => n.value.missingSections[a.value] || n.value.presentSections[a.value] || ""
  ), r = S(
    () => {
      var g;
      return (((g = l.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), l = S(
    () => {
      var g;
      return (g = s.value) == null ? void 0 : g.getSectionByTitle(i.value);
    }
  ), d = S(() => {
    var g;
    return (g = o.value) == null ? void 0 : g.html;
  }), c = S(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), u = S(
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
const cC = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: lC,
    MwRow: be,
    MwCol: we,
    MwButton: ye
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
    const n = te(), o = Z(!1), { currentSectionSuggestion: s } = de(n), a = S(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = S(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), r = (f) => t.emit("update:sourceVsTargetSelection", f), { activeSectionTargetTitle: l, targetSectionAnchor: d } = tr(n), c = S(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: a.value,
            path: `${Me.getPageUrl(
              s.value.sourceLanguage,
              s.value.sourceTitle
            )}#${i.value}`,
            lang: s.value.sourceLanguage,
            dir: Ne.getDir(s.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: s.value.targetTitle,
            path: u.value,
            lang: s.value.targetLanguage,
            dir: Ne.getDir(s.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${u.value}#${d.value}`
          };
      }
    }), u = S(
      () => Me.getPageUrl(
        s.value.targetLanguage,
        s.value.targetTitle
      )
    ), g = Z(null);
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
      mwIconLinkExternal: ns,
      mwIconEdit: Yn,
      updateSelection: r
    };
  }
}, uC = ["lang", "dir", "textContent"];
function dC(e, t, n, o, s, a) {
  const i = y("sx-content-comparator-source-vs-target-selector"), r = y("mw-col"), l = y("mw-button"), d = y("mw-row");
  return v(), F(d, {
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
      p(d, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: b(() => [
          p(r, null, {
            default: b(() => [
              w("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: se(o.activeContent.title)
              }, null, 8, uC)
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
const gC = /* @__PURE__ */ H(cC, [["render", dC]]), fC = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: we,
    MwButton: ye
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = te(), n = S(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = S(
      () => e.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByIndex: s } = er();
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
      mwIconArrowForward: kn
    };
  }
};
function pC(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-col");
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
const mC = /* @__PURE__ */ H(fC, [["render", pC]]);
const hC = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: be,
    MwCol: we,
    MwButton: ye
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
    mwIconTrash: Kc,
    mwIconUndo: Fm
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        Ne.getAutonym(this.suggestion.targetLanguage)
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
}, _C = { class: "sx-content-comparator-header__mapped-section" }, vC = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, yC = { key: 0 }, bC = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, SC = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function wC(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-button"), l = y("mw-row"), d = Ce("i18n");
  return v(), D("div", _C, [
    p(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: b(() => [
        p(i, { grow: "" }, {
          default: b(() => [
            w("h6", vC, [
              zo(se(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? j((v(), D("span", yC, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : ae("", !0)
            ]),
            w("h6", {
              class: he(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, se(n.targetSectionTitle), 3)
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
    a.isDiscardedSection ? j((v(), D("p", SC, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : j((v(), D("p", bC, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const CC = /* @__PURE__ */ H(hC, [["render", wC]]);
const xC = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: CC,
    SxContentComparatorHeaderNavigation: mC,
    MwButton: ye,
    MwCol: we,
    MwRow: be,
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
    } = de(e), o = S(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = S(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = tr(e), r = S(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = S(() => [
      ...Object.keys(t.value.missingSections),
      ...Object.keys(t.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: Li,
      mwIconEdit: Yn,
      mwIconEye: Za,
      sectionSourceTitles: l,
      sourceSectionContent: r,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: Ne.getDir
    };
  }
}, EC = { class: "sx-content-comparator__header pa-4" }, kC = ["lang", "dir"], AC = ["lang", "dir"], TC = /* @__PURE__ */ w("br", null, null, -1);
function DC(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-col"), l = y("sx-content-comparator-header-navigation"), d = y("mw-row"), c = y("mw-icon"), u = y("sx-content-comparator-header-mapped-section"), g = Ce("i18n");
  return v(), D("div", EC, [
    p(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (f) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    p(d, { class: "my-1 py-2 mx-0" }, {
      default: b(() => [
        p(r, { grow: "" }, {
          default: b(() => [
            w("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, se(o.suggestion.sourceTitle), 9, kC),
            w("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, se(o.sourceSectionTitle), 9, AC)
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
    o.isCurrentSectionMissing ? (v(), F(d, {
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
            j(w("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            TC,
            j(w("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : ae("", !0),
    o.isCurrentSectionPresent ? (v(), F(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (f) => e.$emit("update:discardedSections", f))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : ae("", !0)
  ]);
}
const LC = /* @__PURE__ */ H(xC, [["render", DC]]);
const PC = {
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
}, NC = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, FC = ["textContent"], MC = ["textContent"];
function OC(e, t, n, o, s, a) {
  return v(), D("section", NC, [
    w("h5", {
      textContent: se(n.placeholderTitle)
    }, null, 8, FC),
    n.placeholderSubtitle ? (v(), D("p", {
      key: 0,
      textContent: se(n.placeholderSubtitle)
    }, null, 8, MC)) : ae("", !0)
  ]);
}
const Cd = /* @__PURE__ */ H(PC, [["render", OC]]), BC = () => {
  const e = te(), {
    currentSectionSuggestion: t,
    currentTargetPage: n
  } = de(e), o = Ct(), s = () => qc(
    Cd,
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
  return S(() => {
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
const IC = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Cd,
    SxContentComparatorHeader: LC,
    SxContentComparatorContentHeader: gC,
    MwSpinner: sn
  },
  setup() {
    const e = te(), t = mt(), n = Z("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      cd() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: r,
      sourceSectionContent: l,
      targetSectionContent: d
    } = tr(e), c = BC(), {
      currentSectionSuggestion: u,
      sourceLanguage: g,
      targetLanguage: f
    } = de(e), m = S(() => u.value.targetTitle);
    return He(
      m,
      () => e.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: f.value,
        targetLanguage: g.value,
        sourceTitle: m.value
      }),
      { immediate: !0 }
    ), {
      getDir: Ne.getDir,
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
}, $C = { class: "sx-content-comparator" }, UC = { class: "sx-content-comparator__source-content" }, RC = ["lang", "dir", "innerHTML"], VC = ["lang", "dir", "innerHTML"], zC = ["innerHTML"];
function jC(e, t, n, o, s, a) {
  const i = y("sx-content-comparator-header"), r = y("sx-content-comparator-content-header"), l = y("mw-spinner"), d = y("sx-content-comparator-new-section-placeholder");
  return v(), D("section", $C, [
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
    w("section", UC, [
      o.sourceVsTargetSelection === "source_section" ? (v(), D(xe, { key: 0 }, [
        o.sourceSectionContent ? ae("", !0) : (v(), F(l, { key: 0 })),
        w("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, RC)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (v(), D(xe, { key: 1 }, [
        o.targetPageContent ? ae("", !0) : (v(), F(l, { key: 0 })),
        w("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, VC)
      ], 64)) : (v(), D(xe, { key: 2 }, [
        w("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, zC),
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
const HC = /* @__PURE__ */ H(IC, [["render", jC]]);
const qC = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: HC
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function GC(e, t, n, o, s, a) {
  const i = y("sx-content-comparator");
  return v(), D("main", {
    class: he(["sx-content-comparator-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const WC = /* @__PURE__ */ H(qC, [["render", GC]]);
const KC = {
  name: "SxConfirmBackNavigationDialog",
  components: {
    MwButton: ye,
    MwDivider: ts,
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
}, XC = { class: "mw-ui-dialog__header px-4 py-3" }, YC = { class: "mw-ui-dialog__header-title" }, JC = { class: "pa-4" }, ZC = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" };
function QC(e, t, n, o, s, a) {
  const i = y("mw-divider"), r = y("mw-button"), l = y("mw-dialog"), d = Ce("i18n");
  return v(), F(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10
  }, {
    header: b(() => [
      w("div", XC, [
        j(w("span", YC, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-title"]
        ])
      ])
    ]),
    footer: b(() => [
      w("div", ZC, [
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
      w("div", JC, [
        j(w("span", null, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const ex = /* @__PURE__ */ H(KC, [["render", QC]]);
const tx = {
  name: "SxTranslationSelector",
  components: { MwCard: Wt, MwButton: ye, MwDialog: Ot },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Ve.EMPTY_TEXT_PROVIDER_KEY, o = Ve.ORIGINAL_TEXT_PROVIDER_KEY, s = te(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = de(s), c = S(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        a.value,
        i.value
      )
    ), u = S(() => {
      const x = [o, n];
      return c.value.filter(
        (k) => !x.includes(k)
      );
    }), g = S(
      () => l.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
    ), f = (x) => {
      s.dispatch("application/updateMTProvider", x), C();
    }, m = Ve.getMTProviderLabel, C = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: C,
      emptyTextProviderKey: n,
      getDir: Ne.getDir,
      getMTProviderLabel: m,
      mwIconClose: Mt,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: f,
      sourceLanguage: a
    };
  }
}, nx = { class: "mw-ui-dialog__header pa-4" }, ox = { class: "row ma-0 py-2" }, sx = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, ax = { class: "mb-0" }, ix = { class: "col shrink justify-center" }, rx = { class: "pb-2 mb-0" }, lx = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, cx = ["dir", "lang", "innerHTML"], ux = ["textContent"], dx = ["innerHTML"], gx = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, fx = /* @__PURE__ */ w("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function px(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-card"), l = y("mw-dialog"), d = Ce("i18n");
  return n.active ? (v(), F(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: b(() => [
      w("div", nx, [
        w("div", ox, [
          w("div", sx, [
            j(w("h4", ax, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          w("div", ix, [
            p(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        j(w("h6", rx, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
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
          j(w("h5", lx, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: b(() => [
          w("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, cx)
        ], void 0, !0),
        _: 1
      }),
      (v(!0), D(xe, null, Ze(o.apiMtProviders, (c) => (v(), F(r, {
        key: c,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(c)
      }, {
        header: b(() => [
          w("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: se(o.getMTProviderLabel(c))
          }, null, 8, ux)
        ]),
        default: b(() => [
          w("p", {
            innerHTML: o.proposedTranslations[c]
          }, null, 8, dx)
        ], void 0, !0),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      p(r, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (c) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: b(() => [
          j(w("h5", gx, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: b(() => [
          fx
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : ae("", !0);
}
const mx = /* @__PURE__ */ H(tx, [["render", px]]);
const hx = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: qe, MwCol: we },
  setup() {
    const e = te(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = de(e), i = S(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.title;
    }), r = S(
      () => {
        var f;
        return ((f = n.value) == null ? void 0 : f.title) || i.value;
      }
    ), l = S(
      () => Me.getPageUrl(a.value, i.value)
    ), d = S(
      () => {
        var f;
        return !!((f = n.value) != null && f.translatedTitle);
      }
    ), c = S(
      () => d.value ? "translated" : "selected"
    ), u = S(() => {
      const f = [t];
      return o.value && f.push(`${t}--${c.value}`), f;
    });
    return {
      mwIconLinkExternal: ns,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: r,
      titleClasses: u
    };
  }
}, _x = ["href"], vx = ["textContent"], yx = ["innerHTML"];
function bx(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-col");
  return v(), F(r, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: b(() => [
      w("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        w("strong", {
          textContent: se(o.sourceArticleTitle)
        }, null, 8, vx),
        p(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, _x),
      w("h2", {
        class: he(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, yx)
    ], void 0),
    _: 1
  });
}
const Sx = /* @__PURE__ */ H(hx, [["render", bx]]);
const wx = {
  name: "ProposedTranslationActionButtons",
  components: {
    MwRow: be,
    MwButton: ye
  },
  emits: ["select-previous-segment", "apply-translation", "skip-translation"],
  setup() {
    const {
      currentSourceSection: e,
      proposedTranslation: t,
      isSectionTitleSelected: n
    } = de(te());
    return {
      isLastTranslationUnit: S(
        () => e.value.isSelectedTranslationUnitLast
      ),
      isSectionTitleSelected: n,
      mwIconPrevious: ia,
      mwIconArrowForward: kn,
      proposedTranslation: t
    };
  }
};
function Cx(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-row");
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
const xd = /* @__PURE__ */ H(wx, [["render", Cx]]);
const xx = {
  name: "ProposedTranslationHeader",
  components: {
    MwRow: be,
    MwCol: we,
    MwButton: ye
  },
  emits: ["configure-options"],
  setup() {
    const e = te(), t = S(
      () => e.state.application.currentMTProvider
    ), n = Ct(), o = S(() => ({
      [Ve.ORIGINAL_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Ve.EMPTY_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), s = S(
      () => o.value[t.value] || n.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Ve.getMTProviderLabel(t.value)
      )
    );
    return {
      mwIconEllipsis: os,
      mtOptionLabel: s
    };
  }
};
function Ex(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-button"), l = y("mw-row");
  return v(), F(i, { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
    default: b(() => [
      p(l, { class: "ma-0 ps-5 pb-4" }, {
        default: b(() => [
          p(i, {
            tag: "h6",
            grow: "",
            class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
            textContent: se(o.mtOptionLabel)
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
const kx = /* @__PURE__ */ H(xx, [["render", Ex]]), Ax = {
  name: "RetryMtCard",
  components: { MwButton: ye, MwIcon: qe, MwGrid: Gc, MwCol: we, MwRow: be },
  emits: ["configure-options", "retry-translation"],
  setup() {
    return {
      mwIconAlert: go,
      mwIconRefresh: Yc,
      mwIconMenu: Um
    };
  }
}, Tx = { class: "mt-retry-body" };
function Dx(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-col"), l = y("mw-row"), d = y("mw-button"), c = Ce("i18n");
  return v(), D("div", Tx, [
    p(l, { class: "retry-body__action-buttons" }, {
      default: b(() => [
        p(r, { cols: "12" }, {
          default: b(() => [
            p(i, { icon: o.mwIconAlert }, null, 8, ["icon"]),
            j(w("span", null, null, 512), [
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
          default: b(() => [
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
const Lx = /* @__PURE__ */ H(Ax, [["render", Dx]]);
const Px = {
  name: "ProposedTranslationCard",
  components: {
    RetryMtCard: Lx,
    MwSpinner: sn,
    MwCard: Wt,
    ProposedTranslationHeader: kx,
    MwRow: be,
    MwCol: we,
    MwButton: ye,
    ProposedTranslationActionButtons: xd
  },
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup() {
    const e = Z(0), t = Z(null), n = Z(null), o = te(), {
      currentMTProvider: s,
      targetLanguage: a,
      proposedTranslation: i,
      currentSourceSection: r
    } = de(o), l = S(
      () => {
        var g;
        return (g = o.state.application.mtRequestsPending) == null ? void 0 : g.includes(
          r.value.selectedTranslationUnitId
        );
      }
    ), d = S(() => ({
      "max-height": `calc(100% - ${e.value}px)`
    })), c = S(
      () => !!i.value || s.value === Ve.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      e.value = t.value.$el.clientHeight + n.value.$el.clientHeight;
    };
    return He(s, u), pt(() => K(this, null, function* () {
      yield ho(), u();
    })), {
      footer: n,
      getDir: Ne.getDir,
      header: t,
      mwIconEllipsis: os,
      mwIconEdit: Yn,
      proposedTranslation: i,
      hasProposedTranslation: c,
      targetLanguage: a,
      contentsStyle: d,
      mtRequestPending: l
    };
  }
}, Nx = ["lang", "dir", "innerHTML"];
function Fx(e, t, n, o, s, a) {
  const i = y("proposed-translation-header"), r = y("mw-spinner"), l = y("retry-mt-card"), d = y("mw-col"), c = y("mw-button"), u = y("proposed-translation-action-buttons"), g = y("mw-row"), f = y("mw-card");
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
          p(d, {
            class: he(["sx-sentence-selector__proposed-translation__contents px-5", {
              "sx-sentence-selector__proposed-translation__contents--empty": !o.hasProposedTranslation
            }]),
            style: nt(o.contentsStyle)
          }, {
            default: b(() => [
              o.hasProposedTranslation ? (v(), D("section", {
                key: 0,
                lang: o.targetLanguage,
                dir: o.getDir(o.targetLanguage),
                innerHTML: o.proposedTranslation
              }, null, 8, Nx)) : o.mtRequestPending ? (v(), F(r, { key: 1 })) : (v(), F(l, {
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
              }, null, 8, ["icon", "label", "disabled"])) : ae("", !0),
              p(u, fi(na(e.$attrs)), null, 16)
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
const Mx = /* @__PURE__ */ H(Px, [["render", Fx]]), Ox = (e) => S(() => {
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
const Bx = {
  name: "SubSection",
  props: {
    subSection: {
      type: St,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = Z(null), o = Ox(e.subSection);
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
    }, i = S(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, Ix = ["innerHTML"];
function $x(e, t, n, o, s, a) {
  return v(), D("div", {
    ref: "subSectionRoot",
    class: he(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, Ix);
}
const Ux = /* @__PURE__ */ H(Bx, [["render", $x]]);
const Rx = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: au,
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
    const t = S(() => ({ "--size": e.size })), n = S(
      () => !e.isTemplateAdapted || e.percentage === 0 ? go : yn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
};
function Vx(e, t, n, o, s, a) {
  const i = y("mw-circle-progress-bar"), r = y("mw-icon");
  return v(), D("div", {
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
const Ed = /* @__PURE__ */ H(Rx, [["render", Vx]]), zx = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: we,
    MwRow: be,
    MwButton: ye,
    MwIcon: qe,
    MwRadioGroup: ou,
    MwRadio: js,
    MwDivider: ts,
    MwDialog: Ot,
    MwCircleProgressBar: au,
    BlockTemplateStatusIndicator: Ed
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
    const { targetLanguageAutonym: t } = de(te()), n = S(
      () => !e.isTemplateAdapted || o.value === 0 ? go : yn
    ), o = S(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = Ct(), a = S(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), i = S(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), r = S(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: Rm,
          color: kt.base30
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Mt,
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
        let d;
        e.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : d = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), l.push({
          text: d,
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
        icon: Yn,
        color: kt.base30
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: zs,
        color: kt.base30
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: yn,
      mwIconInfo: Wc,
      notes: r
    };
  }
}, jx = { class: "pa-4" }, Hx = ["textContent"], qx = ["textContent"];
function Gx(e, t, n, o, s, a) {
  const i = y("block-template-status-indicator"), r = y("mw-icon"), l = y("mw-col"), d = y("mw-row"), c = y("mw-dialog");
  return v(), F(c, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: b(() => [
      p(d, {
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
      w("div", jx, [
        w("h3", {
          textContent: se(o.statusText)
        }, null, 8, Hx),
        w("p", {
          class: "mt-6 text-small",
          textContent: se(o.statusExplanation)
        }, null, 8, qx),
        (v(!0), D(xe, null, Ze(o.notes, (u, g) => (v(), F(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: b(() => [
            p(l, { shrink: "" }, {
              default: b(() => [
                p(r, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ], void 0, !0),
              _: 2
            }, 1024),
            p(l, {
              textContent: se(u.text)
            }, null, 8, ["textContent"])
          ], void 0, !0),
          _: 2
        }, 1024))), 128))
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const Wx = /* @__PURE__ */ H(zx, [["render", Gx]]);
const Kx = {
  name: "BlockTemplateAdaptationCard",
  components: {
    SxBlockTemplateStatusDialog: Wx,
    MwSpinner: sn,
    MwIcon: qe,
    MwCard: Wt,
    MwRow: be,
    MwCol: we,
    MwButton: ye,
    ProposedTranslationActionButtons: xd,
    BlockTemplateStatusIndicator: Ed
  },
  emits: ["edit-translation"],
  setup() {
    const e = te(), {
      selectedContentTranslationUnit: t,
      targetLanguageAutonym: n,
      currentMTProvider: o,
      proposedTranslation: s
    } = de(e), a = S(() => {
      var B;
      return ((B = t.value) == null ? void 0 : B.blockTemplateTranslatedContent) || s.value;
    }), i = S(
      () => {
        var W;
        return (W = t.value) == null ? void 0 : W.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), r = S(
      () => {
        var W;
        return !((W = e.state.application.mtRequestsPending) != null && W.includes(
          t.value.id
        ));
      }
    ), l = Ct(), d = S(
      // Strip HTML comments and return
      () => {
        var W, B;
        return ((B = (W = t.value) == null ? void 0 : W.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || l.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = S(
      () => {
        var W;
        return (W = t.value.blockTemplateAdaptationInfo) == null ? void 0 : W[o.value];
      }
    ), u = S(
      () => {
        var W, B;
        return ((W = c.value) == null ? void 0 : W.adapted) || !!((B = c.value) != null && B.partial);
      }
    ), g = S(() => c.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), f = S(() => c.value ? u.value ? l.i18n("sx-block-template-adaptation-card-edit-button-label") : l.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), m = S(
      () => {
        var W;
        return Object.keys(((W = t.value) == null ? void 0 : W.sourceTemplateParams) || {}).length;
      }
    ), C = S(() => {
      var B;
      const W = (B = t.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(W || {});
    }), x = S(() => C.value.length), k = S(() => {
      const W = R.value;
      return m.value + W === 0 ? 100 : x.value / (m.value + W) * 100 || 0;
    }), L = Z(!1), M = () => {
      L.value = !0;
    }, G = (W) => W.filter((B) => !C.value.includes(B)), R = S(() => {
      var B;
      const W = ((B = c.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return G(W).length;
    }), ce = S(() => {
      var B;
      const W = ((B = c.value) == null ? void 0 : B.optionalTargetParams) || [];
      return G(W).length;
    });
    return {
      adaptationRatio: k,
      adaptedTemplateCardClass: g,
      blockEditableContent: a,
      editBlockTranslationButtonLabel: f,
      isTemplateAdapted: u,
      mandatoryMissingTargetParamsCount: R,
      mwIconInfo: Wc,
      mwIconPuzzle: $m,
      optionalMissingTargetParamsCount: ce,
      showTemplateStatus: M,
      sourceParamsCount: m,
      sourceTemplateName: d,
      targetLanguageAutonym: n,
      targetParamsCount: x,
      targetTemplateName: i,
      templateStatusDialogOn: L,
      translationLoaded: r
    };
  }
}, Xx = { class: "block-template-adaptation-card__container pa-4" }, Yx = ["textContent"], Jx = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
};
function Zx(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-col"), l = y("mw-row"), d = y("block-template-status-indicator"), c = y("mw-button"), u = y("mw-spinner"), g = y("proposed-translation-action-buttons"), f = y("sx-block-template-status-dialog"), m = y("mw-card"), C = Ce("i18n");
  return v(), F(m, { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
    default: b(() => [
      w("div", Xx, [
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
                zo(se(o.sourceTemplateName), 1)
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        }),
        o.targetTemplateName ? (v(), D("div", {
          key: 0,
          class: he(["pa-4 mb-4", o.adaptedTemplateCardClass])
        }, [
          p(l, {
            class: "block-template-adaptation-card__body__header ma-0 pb-1",
            align: "start"
          }, {
            default: b(() => [
              j(p(r, { tag: "h5" }, null, 512), [
                [C, void 0, "sx-block-template-adaptation-card-body-header-success"]
              ]),
              p(r, { shrink: "" }, {
                default: b(() => [
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
            textContent: se(o.targetTemplateName)
          }, null, 8, Yx),
          p(c, {
            class: "px-0",
            type: "text",
            progressive: "",
            label: o.editBlockTranslationButtonLabel,
            onClick: t[0] || (t[0] = (x) => e.$emit("edit-translation", o.blockEditableContent))
          }, null, 8, ["label"])
        ], 2)) : o.translationLoaded ? (v(), D("div", Jx, [
          p(l, {
            class: "block-template-adaptation-card__body__header pb-0 mb-0",
            align: "start"
          }, {
            default: b(() => [
              j(p(r, { tag: "h5" }, null, 512), [
                [C, [
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
        ])) : (v(), F(u, { key: 2 }))
      ]),
      p(g, fi(na(e.$attrs)), null, 16),
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
const Qx = /* @__PURE__ */ H(Kx, [["render", Zx]]);
const e8 = {
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
    const { isSectionTitleSelected: n } = de(te()), o = Ct();
    return { scopeOptions: S(() => [
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
}, t8 = { class: "translated-segment-card-header" };
function n8(e, t, n, o, s, a) {
  const i = y("mw-button-group");
  return v(), D("div", t8, [
    p(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const o8 = /* @__PURE__ */ H(e8, [["render", n8]]), s8 = {
  name: "TranslatedSegmentCardActionButtons",
  components: {
    MwRow: be,
    MwButton: ye
  },
  emits: ["select-previous-segment", "skip-translation"],
  setup() {
    const { currentSourceSection: e, isSectionTitleSelected: t } = de(te()), n = S(
      () => e.value.isSelectedTranslationUnitLast
    );
    return {
      mwIconArrowForward: kn,
      mwIconPrevious: ia,
      isLastTranslationUnit: n,
      isSectionTitleSelected: t
    };
  }
};
function a8(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-row");
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
const i8 = /* @__PURE__ */ H(s8, [["render", a8]]);
const r8 = {
  name: "TranslatedSegmentCard",
  components: {
    TranslatedSegmentCardActionButtons: i8,
    MwProgressBar: su,
    MwIcon: qe,
    TranslatedSegmentCardHeader: o8,
    MwCard: Wt,
    MwRow: be,
    MwCol: we,
    MwButton: ye
  },
  emits: ["edit-translation"],
  setup() {
    const e = Z("sentence"), {
      isSectionTitleSelected: t,
      currentSourceSection: n,
      selectedContentTranslationUnit: o,
      targetLanguage: s
    } = de(te()), a = S(() => e.value === "sentence"), i = S(
      () => n.value.subSections.find(
        (k) => k.sentences.some(
          (L) => {
            var M;
            return L.id === ((M = o.value) == null ? void 0 : M.id);
          }
        )
      )
    ), r = S(() => {
      var k;
      return t.value ? n.value.mtProposedTranslationUsedForTitle : a.value ? (k = o.value) == null ? void 0 : k.mtProposedTranslationUsed : i.value.proposedContentForMTValidation;
    }), l = Ge("colors"), d = l.base80, c = l.red50, u = S(() => t.value ? n.value.translatedTitle : a.value ? o.value.translatedContent : i.value.translatedContent), g = S(
      () => Cn.calculateScore(
        u.value,
        r.value,
        s.value
      )
    ), f = S(
      () => Cn.getScoreStatus(g.value)
    ), m = S(
      () => `translated-segment-card__modification-stats__percentage--${f.value}`
    ), C = S(() => ({
      failure: g.value === 0 ? null : l.yellow30,
      warning: l.yellow30,
      success: l.green30
    })), x = S(
      () => C.value[f.value]
    );
    return {
      errorColor: c,
      modificationPercentageClass: m,
      mtScore: g,
      mwIconEdit: Yn,
      mwIconEllipsis: os,
      mwIconRobot: nu,
      mwIconUserAvatar: Tm,
      progressBarBackgroundColor: d,
      scopeSelection: e,
      showSentenceTab: a,
      translation: u,
      userIconColor: x
    };
  }
};
function l8(e, t, n, o, s, a) {
  const i = y("translated-segment-card-header"), r = y("mw-col"), l = y("mw-icon"), d = y("mw-progress-bar"), c = y("mw-row"), u = y("mw-button"), g = y("translated-segment-card-action-buttons"), f = y("mw-card"), m = Ce("i18n"), C = Ce("i18n-html");
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
                      j(w("h5", null, null, 512), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                      ]),
                      o.mtScore === 0 ? j((v(), D("p", {
                        key: 0,
                        style: nt({ color: o.errorColor })
                      }, null, 4)), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                      ]) : j((v(), D("p", {
                        key: 1,
                        class: he(o.modificationPercentageClass)
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
              o.showSentenceTab ? (v(), F(u, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-0 mt-4",
                progressive: "",
                onClick: t[1] || (t[1] = (x) => e.$emit("edit-translation", o.translation))
              }, null, 8, ["icon", "label"])) : ae("", !0)
            ], void 0, !0),
            _: 1
          }),
          p(r, { class: "translated-segment-card__actions" }, {
            default: b(() => [
              p(g, fi(na(e.$attrs)), null, 16)
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
const c8 = /* @__PURE__ */ H(r8, [["render", l8]]), u8 = () => {
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
}, d8 = () => {
  const e = te(), { sourceLanguage: t, targetLanguage: n } = de(e);
  return () => K(void 0, null, function* () {
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
}, g8 = () => {
  const e = te(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = de(e), s = d8();
  return () => K(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = Ve.getStorageKey(
        n.value,
        o.value
      ), r = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", r);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, f8 = (e) => {
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
}, p8 = () => {
  const e = te(), { selectedContentTranslationUnit: t } = de(e), n = S(
    () => t.value instanceof St
  );
  return () => {
    if (!t.value)
      return;
    const o = t.value.id, s = n.value ? document.getElementById(o) : document.querySelector(`[data-segmentid='${o}']`);
    s && f8(s);
  };
};
const m8 = {
  name: "SxSentenceSelector",
  components: {
    SxConfirmBackNavigationDialog: ex,
    BlockTemplateAdaptationCard: Qx,
    TranslatedSegmentCard: c8,
    ProposedTranslationCard: Mx,
    SubSection: Ux,
    SxSentenceSelectorContentHeader: Sx,
    MwRow: be,
    MwSpinner: sn,
    MwCol: we,
    SxTranslationSelector: mx,
    MwButton: ye
  },
  setup() {
    const e = Z(!1), t = Z(!1), n = Z("100%"), o = te(), {
      currentSourcePage: s,
      currentTargetPage: a,
      currentSourceSection: i,
      selectedContentTranslationUnit: r,
      currentMTProvider: l,
      sourceLanguage: d,
      targetLanguage: c
    } = de(o), u = S(
      () => o.state.application.translationDataLoadingCounter === 0
    ), g = S(
      () => {
        var re;
        return (re = i.value) == null ? void 0 : re.isSelectedTranslationUnitTranslated;
      }
    ), f = S(() => {
      var re;
      return (re = i.value) == null ? void 0 : re.subSections;
    }), m = S(
      () => {
        var re;
        return (re = i.value) == null ? void 0 : re.selectedTranslationUnitOriginalContent;
      }
    ), C = S(
      () => isNaN(n.value) ? n.value : `${n.value}px`
    ), x = Kt(), k = u8();
    g8()();
    const M = p8();
    pt(() => {
      He(
        u,
        () => K(this, null, function* () {
          u.value && (yield ho(), k(), M());
        }),
        { immediate: !0 }
      ), n.value = window.innerHeight;
    }), He(r, M);
    const G = () => o.dispatch("application/selectNextTranslationUnit"), R = () => o.dispatch("application/selectPreviousTranslationUnit"), ce = () => {
      x({
        event_type: "editor_segment_add",
        translation_source_language: d.value,
        translation_target_language: c.value
      }), o.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
    }, W = () => {
      t.value = !0, setTimeout(() => {
        t.value = !1;
      }, 100);
    }, B = mt(), me = () => {
      const { autoSavePending: re } = o.state.application;
      if (re) {
        Re.value = !0;
        return;
      }
      Ee();
    }, Ee = () => K(this, null, function* () {
      o.dispatch("translator/fetchTranslationsByStatus", "draft"), Qn(null), o.dispatch("application/clearPendingSaveTranslationRequests"), yield B.push({ name: "dashboard" }), i.value.reset(), o.commit("application/setCurrentSourceSection", null), o.commit("application/setCurrentSectionSuggestion", null);
      const { currentTranslation: re } = o.state.application;
      re && (o.commit("application/setCurrentTranslationRestored", !1), o.commit("application/setCurrentTranslation", null));
    }), Te = () => {
      We.value || (e.value = !0, o.dispatch(
        "application/translateSelectedTranslationUnitForAllProviders"
      ));
    }, J = (re, fe) => {
      var ot;
      B.push({
        name: "sx-editor",
        state: {
          content: re,
          originalContent: m.value,
          title: ((ot = a.value) == null ? void 0 : ot.title) || s.value.title,
          isInitialEdit: fe || null
        }
      });
    }, De = () => B.push({ name: "sx-publisher" }), Xe = () => K(this, null, function* () {
      r.value ? yield o.dispatch("application/translateTranslationUnitById", {
        id: r.value.id,
        provider: l.value
      }) : yield o.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: l.value
      });
    }), We = S(
      () => r.value instanceof St
    ), Re = Z(!1);
    return {
      applyTranslation: ce,
      bounceTranslation: W,
      configureTranslationOptions: Te,
      currentPageSection: i,
      doGoToDashboard: Ee,
      editTranslation: J,
      getDir: Ne.getDir,
      goToDashboard: me,
      isBlockTemplateSelected: We,
      isSelectedTranslationUnitTranslated: g,
      isTranslationOptionsActive: e,
      mwIconArrowPrevious: Li,
      previewTranslation: De,
      retryTranslation: Xe,
      selectPreviousTranslationUnit: R,
      sentenceSelectorStyle: C,
      shouldProposedTranslationBounce: t,
      skipTranslation: G,
      sourceLanguage: d,
      subSections: f,
      translationDataReady: u,
      verifyBackNavigationDialogOn: Re
    };
  }
}, h8 = { class: "sx-sentence-selector__header-title" }, _8 = { class: "sx-sentence-selector__section-contents px-4" };
function v8(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-col"), l = y("mw-row"), d = y("sx-sentence-selector-content-header"), c = y("sub-section"), u = y("translated-segment-card"), g = y("proposed-translation-card"), f = y("block-template-adaptation-card"), m = y("mw-spinner"), C = y("sx-translation-selector"), x = y("sx-confirm-back-navigation-dialog"), k = Ce("i18n");
  return v(), D("section", {
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
            j(w("h4", h8, null, 512), [
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
            p(d),
            w("div", _8, [
              (v(!0), D(xe, null, Ze(o.subSections, (L) => (v(), F(c, {
                id: L.id,
                key: `sub-section-${L.id}`,
                "sub-section": L,
                onBounceTranslation: o.bounceTranslation
              }, null, 8, ["id", "sub-section", "onBounceTranslation"]))), 128))
            ])
          ], void 0, !0),
          _: 1
        }, 8, ["dir", "lang"]),
        !o.isBlockTemplateSelected && o.isSelectedTranslationUnitTranslated ? (v(), F(u, {
          key: 0,
          onEditTranslation: t[0] || (t[0] = (L) => o.editTranslation(L, !1)),
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
          onEditTranslation: t[1] || (t[1] = (L) => o.editTranslation(L, !0)),
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
const y8 = /* @__PURE__ */ H(m8, [["render", v8]]);
const b8 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: y8
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function S8(e, t, n, o, s, a) {
  const i = y("sx-sentence-selector");
  return v(), D("main", {
    class: he(["sx-sentence-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const w8 = /* @__PURE__ */ H(b8, [["render", S8]]), C8 = `<svg width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
`, x8 = `<svg  width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
const E8 = {
  name: "SxQuickTutorial",
  components: {
    MwButton: ye,
    MwRow: be
  },
  data: () => ({
    mwIconArrowForward: kn,
    totalSteps: 2,
    activeStep: 1,
    tutorialSvgMT: C8,
    tutorialSvgSections: x8
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
}, k8 = { class: "sx-quick-tutorial" }, A8 = { class: "sx-quick-tutorial__main-point py-9 px-6" }, T8 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, D8 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, L8 = { class: "sx-quick-tutorial__illustration" }, P8 = ["innerHTML"], N8 = ["innerHTML"], F8 = { class: "sx-quick-tutorial__step-indicator py-3" }, M8 = ["onClick"], O8 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, B8 = {
  key: "secondary-point-1",
  class: "ma-0"
}, I8 = {
  key: "secondary-point-2",
  class: "ma-0"
}, $8 = { class: "sx-quick-tutorial__action-button pt-4 pb-6" };
function U8(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-row"), l = Ce("i18n");
  return v(), D("section", k8, [
    p(r, {
      direction: "column",
      class: "sx-quick-tutorial__body-container ma-0"
    }, {
      default: b(() => [
        w("section", A8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? j((v(), D("h2", T8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-1"]
              ]) : a.isActiveStep(2) ? j((v(), D("h2", D8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-2"]
              ]) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("section", L8, [
          p(vn, { name: "mw-ui-animation-slide-left" }, {
            default: b(() => [
              a.isActiveStep(1) ? (v(), D("div", {
                key: "illustration-1",
                innerHTML: e.tutorialSvgSections
              }, null, 8, P8)) : a.isActiveStep(2) ? (v(), D("div", {
                key: "illustration-2",
                innerHTML: e.tutorialSvgMT
              }, null, 8, N8)) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("div", F8, [
          (v(!0), D(xe, null, Ze(e.totalSteps, (d) => (v(), D("span", {
            key: `dot-${d}`,
            class: he(["dot mx-1", { "dot-active": a.isActiveStep(d) }]),
            role: "button",
            onClick: (c) => e.activeStep = d
          }, null, 10, M8))), 128))
        ]),
        w("section", O8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? j((v(), D("h3", B8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-1"]
              ]) : a.isActiveStep(2) ? j((v(), D("h3", I8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-2"]
              ]) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("div", $8, [
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
              }, null, 8, ["label", "onClick"])) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const R8 = /* @__PURE__ */ H(E8, [["render", U8]]);
const V8 = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: R8
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function z8(e, t, n, o, s, a) {
  const i = y("sx-quick-tutorial");
  return v(), D("main", {
    class: he(["sx-quick-tutorial-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const j8 = /* @__PURE__ */ H(V8, [["render", z8]]);
function H8(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = Me.getPageUrl(t, o.title), o.target = "_blank";
}
const q8 = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: Ch },
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
    return pt(() => {
      n.value = 2 * o(), H8(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, G8 = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, W8 = { class: "sx-editor__original-content-panel__header mb-2" }, K8 = ["lang", "dir", "innerHTML"];
function X8(e, t, n, o, s, a) {
  const i = y("mw-expandable-content"), r = Ce("i18n");
  return v(), D("section", G8, [
    j(w("h5", W8, null, 512), [
      [r, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    p(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: b(() => [
        w("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, K8)
      ], void 0),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const Y8 = /* @__PURE__ */ H(q8, [["render", X8]]), J8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g id="happy-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
            <circle id="Oval" fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
            <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" id="Mask" fill="#3366CC"></path>
        </g>
    </g>
</svg>
`;
const Z8 = {
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
    const { targetLanguage: t } = de(te()), n = S(
      () => Cn.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = S(() => {
      const a = Cn.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = S(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: J8,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, Q8 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, eE = { class: "sx-editor__feedback-overlay-content px-4" }, tE = ["innerHTML"], nE = { class: "sx-editor__feedback-overlay-content__title" }, oE = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function sE(e, t, n, o, s, a) {
  const i = Ce("i18n"), r = Ce("i18n-html");
  return n.showFeedback ? (v(), D("div", Q8, [
    w("div", eE, [
      w("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, tE),
      j(w("h2", nE, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      j(w("p", oE, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      j(w("p", {
        class: he(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [r, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : ae("", !0);
}
const aE = /* @__PURE__ */ H(Z8, [["render", sE]]);
const iE = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: aE,
    MwRow: be,
    SxEditorOriginalContent: Y8,
    VisualEditor: Ry,
    MwSpinner: sn
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Z(!1), n = mt(), o = te(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: r, content: l, originalContent: d, title: c } = history.state, u = Z(null), g = Z(!1), f = Kt(), { targetLanguage: m, sourceLanguage: C } = de(o), x = S(
      () => Cn.calculateScore(
        u.value,
        l,
        m.value
      )
    ), k = (L) => K(this, null, function* () {
      u.value = L, g.value = !0;
      const M = new Promise((R) => setTimeout(R, 2e3));
      let G = Promise.resolve();
      i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        L
      ) : (x.value === 0 && r && f({
        event_type: "editor_segment_add",
        translation_source_language: C.value,
        translation_target_language: m.value
      }), G = o.dispatch(
        "application/applyEditedTranslationToSelectedTranslationUnit",
        L
      )), yield Promise.all([M, G]), g.value = !1, a();
    });
    return {
      closeEditor: a,
      content: l,
      editedTranslation: u,
      editorReady: t,
      getDir: Ne.getDir,
      sourceLanguage: C,
      targetLanguage: m,
      onEditorReady: s,
      onEditCompleted: k,
      originalContent: d,
      showFeedback: g,
      title: c
    };
  }
}, rE = { class: "sx-editor__editing-surface-container grow" };
function lE(e, t, n, o, s, a) {
  const i = y("sx-editor-original-content"), r = y("mw-spinner"), l = y("edit-complete-feedback"), d = y("visual-editor"), c = y("mw-row");
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
      }, null, 8, ["language", "dir", "original-content"])) : ae("", !0),
      o.editorReady ? ae("", !0) : (v(), F(r, { key: 1 })),
      w("div", rE, [
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
const cE = /* @__PURE__ */ H(iE, [["render", lE]]);
const uE = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: cE
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
function dE(e, t, n, o, s, a) {
  const i = y("sx-editor");
  return v(), D("main", {
    class: he(["sx-editor-view", a.classes])
  }, [
    p(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const gE = /* @__PURE__ */ H(uE, [["render", dE]]);
const fE = {
  name: "SxPublisherHeader",
  components: { MwCol: we, MwButton: ye, MwRow: be },
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
      mwIconClose: Mt,
      onClose: () => e.push({ name: "sx-sentence-selector" })
    };
  }
};
function pE(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-col"), l = y("mw-row"), d = Ce("i18n");
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
      j(p(r, {
        grow: "",
        tag: "h5",
        class: "ma-0"
      }, null, 512), [
        [d, void 0, "cx-sx-publisher-header-title"]
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
const mE = /* @__PURE__ */ H(fE, [["render", pE]]), hE = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, _E = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, kl = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g id="publishing-failure" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" fill="#FEE7E6">
            <circle id="Oval" cx="68" cy="68" r="68"></circle>
        </g>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" id="Mask" fill="#DD3333"></path>
    </g>
</svg>`;
const vE = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: Ot, MwRow: be, MwCol: we },
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
        svg: hE,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: _E,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: kl,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: kl,
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
}, yE = ["innerHTML"], bE = ["textContent"], SE = ["textContent"];
function wE(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-row"), l = y("mw-dialog");
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
              w("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, yE),
              w("h2", {
                textContent: se(a.animationTitle)
              }, null, 8, bE),
              w("p", {
                class: "ma-0",
                textContent: se(a.animationSubtitle)
              }, null, 8, SE)
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : ae("", !0);
}
const CE = /* @__PURE__ */ H(vE, [["render", wE]]);
const xE = {
  name: "SxPublisherCaptchaDialog",
  components: { MwInput: Fi, MwDialog: Ot, MwRow: be, MwCol: we, MwButton: ye, MwDivider: ts },
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: xu,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = Z(""), o = () => t("close"), s = () => t("publish", n.value), a = Ge("breakpoints"), i = S(() => a.value.mobile);
    return {
      captchaInput: n,
      close: o,
      fullscreen: i,
      mwIconCheck: yn,
      mwIconClose: Mt,
      publish: s
    };
  }
}, EE = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, kE = ["src"], AE = ["textContent"], TE = /* @__PURE__ */ w("p", { class: "mt-0" }, null, -1);
function DE(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-col"), l = y("mw-row"), d = y("mw-divider"), c = y("mw-input"), u = y("mw-dialog"), g = Ce("i18n");
  return n.active && n.captchaDetails ? (v(), F(u, {
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
          j(p(r, {
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
              j(p(i, {
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
    default: b(() => [
      w("div", EE, [
        n.captchaDetails.type === "image" ? (v(), D("img", {
          key: 0,
          class: "sx-publisher__captcha-dialog__puzzle-image",
          src: n.captchaDetails.url
        }, null, 8, kE)) : (v(), D("p", {
          key: 1,
          textContent: se(n.captchaDetails.question)
        }, null, 8, AE)),
        TE,
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
  }, 8, ["fullscreen"])) : ae("", !0);
}
const LE = /* @__PURE__ */ H(xE, [["render", DE]]);
const PE = {
  name: "SxPublishOptionSelector",
  components: {
    MwButton: ye,
    MwRadioGroup: ou,
    MwRadio: js,
    MwDivider: ts,
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
    const n = te(), o = S(
      () => n.state.application.publishTarget
    ), s = S(() => n.state.translator.isAnon), a = Ct(), { currentSourceSection: i } = de(n), r = S(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-label") : a.i18n("cx-sx-publisher-new-section-option-label")
    ), l = S(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-details") : a.i18n("cx-sx-publisher-new-section-option-details")
    ), d = S(() => [
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
      mwIconArrowPrevious: Li,
      onPublishOptionsClose: u,
      publishOptions: d,
      selectedOption: o,
      updateOption: (f) => {
        const m = f.target.value;
        n.commit("application/setPublishTarget", m), u();
      }
    };
  }
}, NE = { class: "mw-ui-dialog__header" }, FE = { class: "row ma-0 pa-4" }, ME = { class: "col shrink justify-center" }, OE = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, BE = { class: "mb-0" }, IE = { class: "pa-4" }, $E = ["textContent"];
function UE(e, t, n, o, s, a) {
  const i = y("mw-button"), r = y("mw-divider"), l = y("mw-radio"), d = y("mw-radio-group"), c = y("mw-dialog"), u = Ce("i18n");
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
      w("div", NE, [
        w("div", FE, [
          w("div", ME, [
            p(i, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconArrowPrevious,
              onClick: o.onPublishOptionsClose
            }, null, 8, ["icon", "onClick"])
          ]),
          w("div", OE, [
            j(w("h4", BE, null, 512), [
              [u, void 0, "cx-sx-publisher-preview-options-title"]
            ])
          ])
        ]),
        p(r)
      ])
    ]),
    default: b(() => [
      w("div", IE, [
        p(d, {
          value: o.selectedOption,
          name: "publish-options",
          onInput: o.updateOption
        }, {
          default: b(() => [
            (v(!0), D(xe, null, Ze(o.publishOptions, (g, f) => (v(), D(xe, {
              key: g.label
            }, [
              p(l, {
                class: "pa-0 my-1",
                label: g.label,
                "input-value": g.value,
                disabled: g.disabled
              }, null, 8, ["label", "input-value", "disabled"]),
              w("p", {
                class: he(["complementary ms-7 mt-0", o.getMarginBottomClassByOptionIndex(f)]),
                textContent: se(g.details)
              }, null, 10, $E)
            ], 64))), 128))
          ], void 0, !0),
          _: 1
        }, 8, ["value", "onInput"])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-color", "onClose"]);
}
const RE = /* @__PURE__ */ H(PE, [["render", UE]]);
const VE = {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton: ye,
    MwCol: we,
    MwRow: be,
    MwMessage: Zm,
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
      var C;
      const m = (C = n.value) == null ? void 0 : C.$el;
      if (m instanceof HTMLElement) {
        const x = m.querySelector("a");
        x && x.setAttribute("target", "_blank");
      }
    });
    const o = S(
      () => {
        var m;
        return (m = e.publishFeedbackMessages) == null ? void 0 : m[t.value];
      }
    ), s = S(() => {
      var m;
      return ((m = o.value) == null ? void 0 : m.status) || "default";
    }), a = S(() => {
      switch (s.value) {
        case "warning":
          return go;
        case "error":
          return Xr;
        default:
          return Za;
      }
    }), i = S(() => s.value === "default"), r = S(
      () => i.value ? "notice" : s.value
    ), l = S(
      () => `sx-publisher__review-info--${r.value}`
    ), d = Ct(), c = S(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.text;
    }), u = S(
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
      mwIconAlert: go,
      mwIconArrowForward: kn,
      mwIconBlock: Xr,
      mwIconEye: Za,
      mwIconPrevious: ia,
      reviewIcon: a,
      reviewInfoClass: l,
      status: s
    };
  }
}, zE = { class: "sx-publisher__review-info__content" }, jE = {
  key: 0,
  class: "complementary ma-0"
}, HE = ["textContent"], qE = ["textContent"];
function GE(e, t, n, o, s, a) {
  const i = y("mw-icon"), r = y("mw-col"), l = y("mw-button"), d = y("mw-row"), c = y("mw-message"), u = Ce("i18n-html");
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
      w("div", zE, [
        o.status === "default" ? j((v(), D("p", jE, null, 512)), [
          [u, void 0, "cx-sx-publisher-review-info"]
        ]) : (v(), D(xe, { key: 1 }, [
          w("h5", {
            textContent: se(o.messageTitle)
          }, null, 8, HE),
          w("p", {
            textContent: se(o.messageText)
          }, null, 8, qE),
          p(d, {
            justify: "between",
            class: "ma-0"
          }, {
            default: b(() => [
              j(p(r, {
                ref: "learnMoreContainer",
                class: "sx-publisher__review-info__learn-more-anchor"
              }, null, 512), [
                [u, void 0, "cx-sx-publisher-review-info-learn-more"]
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
              })) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ], 64))
      ])
    ], void 0),
    _: 1
  }, 8, ["type", "class", "inline"]);
}
const WE = /* @__PURE__ */ H(VE, [["render", GE]]), Al = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t.innerText;
}, KE = (e, t, n, o) => K(void 0, null, function* () {
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
    const f = "[CX] Target title is empty after successful publishing";
    throw mw.log.error(f), new Error(f);
  }
  location.href = Cu(decodeURIComponent(o), {
    "sx-published-section": Al(s.value.title),
    "sx-source-page-title": Al(r.value.title),
    "sx-source-language": a.value,
    "sx-target-language": i.value
  });
}), XE = (e) => {
  const t = Z(!1), n = Z("pending"), o = Z(!1), s = Z(!1), a = Z(null), i = Z([]), r = S(
    () => i.value.some((u) => u.isError)
  );
  return He(o, (u) => {
    u || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (u = null) => K(void 0, null, function* () {
      var C;
      n.value = "pending", t.value = !0;
      let g;
      try {
        g = yield e.dispatch("translator/publishTranslation", {
          captchaId: (C = a.value) == null ? void 0 : C.id,
          captchaAnswer: u
        });
      } catch (x) {
        if (x instanceof vo) {
          e.commit("application/setIsLoginDialogOn", !0);
          return;
        }
        throw x;
      }
      const { publishFeedbackMessage: f, targetTitle: m } = g;
      if (f && f.type === "captcha") {
        a.value = f.details, t.value = !1, s.value = !0;
        return;
      } else
        f && (i.value.push(f), i.value.sort((x, k) => +k.isError - +x.isError));
      a.value = null, n.value = r.value ? "failure" : "success", setTimeout(
        () => KE(
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
}, YE = (e, t) => {
  const {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = de(e), a = S(
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
const JE = {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo: WE,
    SxPublishOptionSelector: RE,
    SxPublisherAnimationDialog: CE,
    SxPublisherCaptchaDialog: LE,
    MwButton: ye,
    SxPublisherHeader: mE,
    MwRow: be,
    MwCol: we
  },
  setup() {
    const e = te(), { currentSourceSection: t } = de(e), n = S(() => {
      var x;
      return (x = t.value) == null ? void 0 : x.title;
    }), o = Ct(), s = S(() => e.getters["application/isSandboxTarget"] ? o.i18n(
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
    } = XE(e);
    pt(() => K(this, null, function* () {
      const x = yield e.dispatch("translator/validateMT");
      x && f.value.push(x);
    }));
    const { editTranslation: C } = YE(e, mt());
    return {
      captchaDetails: a,
      captchaDialogOn: i,
      configureTranslationOptions: r,
      currentPageSection: t,
      doPublish: l,
      editTranslation: C,
      isPublishDialogActive: d,
      isPublishingDisabled: c,
      mwIconEdit: Yn,
      mwIconSettings: Im,
      onCaptchaDialogClose: u,
      panelResult: s,
      publishFeedbackMessages: f,
      publishOptionsOn: g,
      publishStatus: m,
      translatedTitle: n
    };
  }
}, ZE = { class: "sx-publisher" }, QE = { class: "sx-publisher__publish-panel pa-4" }, e2 = { class: "mb-2" }, t2 = ["innerHTML"], n2 = { class: "sx-publisher__section-preview pa-5" }, o2 = ["innerHTML"];
function s2(e, t, n, o, s, a) {
  const i = y("sx-publisher-header"), r = y("mw-button"), l = y("mw-col"), d = y("mw-row"), c = y("sx-publisher-review-info"), u = y("sx-publish-option-selector"), g = y("sx-publisher-captcha-dialog"), f = y("sx-publisher-animation-dialog"), m = Ce("i18n");
  return v(), D("section", ZE, [
    p(i, {
      "is-publishing-disabled": o.isPublishingDisabled,
      onPublishTranslation: o.doPublish
    }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
    w("div", QE, [
      j(w("h5", e2, null, 512), [
        [m, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
      ]),
      w("h6", {
        class: "mb-2",
        innerHTML: o.panelResult
      }, null, 8, t2),
      p(d, {
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
    w("section", n2, [
      p(d, { class: "pb-5 ma-0" }, {
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
      w("div", {
        innerHTML: o.currentPageSection.translationHtml
      }, null, 8, o2)
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
const a2 = /* @__PURE__ */ H(JE, [["render", s2]]);
const i2 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: a2
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function r2(e, t, n, o, s, a) {
  const i = y("sx-publisher");
  return v(), D("main", {
    class: he(["sx-publisher-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const l2 = /* @__PURE__ */ H(i2, [["render", r2]]);
const c2 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Mi, MwIcon: qe, MwRow: be, MwCol: we },
  props: {
    suggestion: {
      type: yo,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Nm, mwIconLanguage: eu, mwIconArticle: Ni, getDir: Ne.getDir };
  }
}, u2 = ["textContent"], d2 = ["textContent"], g2 = ["textContent"];
function f2(e, t, n, o, s, a) {
  const i = y("mw-thumbnail"), r = y("mw-col"), l = y("mw-icon"), d = y("mw-row");
  return v(), F(d, {
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
          p(d, {
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
                  w("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: se(n.suggestion.title)
                  }, null, 8, u2)
                ], void 0, !0),
                _: 1
              }),
              p(r, {
                shrink: "",
                class: "mb-1"
              }, {
                default: b(() => [
                  w("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: se(n.suggestion.description)
                  }, null, 8, d2)
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
                  w("small", {
                    textContent: se(n.suggestion.langLinksCount)
                  }, null, 8, g2)
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
const kd = /* @__PURE__ */ H(c2, [["render", f2]]), p2 = (e, t) => {
  const o = Z([]), s = Z(!1), a = S(
    () => o.value.slice(0, 4)
  ), i = zi(() => K(void 0, null, function* () {
    try {
      o.value = yield as.searchPagesByTitlePrefix(
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
const m2 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: kd, MwCard: Wt, MwSpinner: sn },
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
    ), o = S(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = p2(
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
}, h2 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function _2(e, t, n, o, s, a) {
  const i = y("mw-spinner"), r = y("sx-search-article-suggestion"), l = y("mw-card"), d = Ce("i18n");
  return v(), F(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: b(() => [
      o.searchResultsLoading ? (v(), F(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? j((v(), D("p", h2, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : ae("", !0),
      (v(!0), D(xe, null, Ze(o.searchResultsSlice, (c) => (v(), F(r, {
        key: c.pageid,
        suggestion: c,
        onClick: (u) => e.$emit("suggestion-clicked", c)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const v2 = /* @__PURE__ */ H(m2, [["render", _2]]);
const y2 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: kd, MwCard: Wt },
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
  computed: rt({}, n_({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, b2 = ["textContent"];
function S2(e, t, n, o, s, a) {
  const i = y("sx-search-article-suggestion"), r = y("mw-card");
  return v(), F(r, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: b(() => [
      w("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: se(n.cardTitle)
      }, null, 8, b2)
    ]),
    default: b(() => [
      (v(!0), D(xe, null, Ze(n.suggestions, (l) => (v(), F(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const w2 = /* @__PURE__ */ H(y2, [["render", S2]]), C2 = (e, t) => S(() => {
  const o = {
    value: "other",
    props: {
      icon: os,
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
      label: Ne.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), x2 = (e, t, n) => S(() => {
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
    (i) => i !== e.value && i !== t.value && Ne.getAutonym(i) !== i
  );
});
const E2 = {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard: w2,
    SearchResultsCard: v2,
    MwInput: Fi,
    MwDialog: Ot,
    MwLanguageSelector: _d,
    MwButtonGroup: es,
    MwRow: be,
    MwCol: we,
    MwButton: ye
  },
  setup() {
    const e = Z(""), t = Z(!1), n = Z(null), o = Z(!1), s = Z([]), a = te(), { sourceLanguage: i, targetLanguage: r } = de(a), { supportedLanguageCodes: l } = cs(), d = x2(
      i,
      r,
      s
    ), c = C2(
      i,
      d
    ), u = mt(), g = Qi(a);
    pt(() => K(this, null, function* () {
      var J;
      yield ud()(), g();
      try {
        s.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (De) {
      }
      (J = n.value) == null || J.focus();
    }));
    const f = () => {
      u.push({ name: "dashboard" });
    }, m = dd(), C = (Te) => m(Te, r.value), x = (Te) => {
      if (Te === "other") {
        o.value = !0;
        return;
      }
      C(Te);
    };
    He(i, () => a.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const k = Kt();
    He(e, () => {
      t.value || (t.value = !0, k({
        event_type: "dashboard_search",
        translation_source_language: i.value,
        translation_target_language: r.value
      }));
    });
    const L = () => {
      o.value = !1;
    }, M = (Te) => {
      o.value = !1, s.value.push(Te), x(Te);
    }, G = S(
      () => a.getters["mediawiki/getRecentlyEditedPages"]
    ), R = S(
      () => a.getters["mediawiki/getNearbyPages"]
    ), ce = Ge("breakpoints"), W = S(() => ce.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: B,
      startNearbySectionTranslation: me,
      startSearchResultSectionTranslation: Ee
    } = Ji();
    return {
      supportedLanguageCodes: l,
      close: f,
      fullscreen: W,
      mwIconClose: Mt,
      mwIconSearch: Jc,
      nearbyPages: R,
      onSourceLanguageDialogClose: L,
      onSourceLanguageSelected: M,
      recentlyEditedPages: G,
      searchInput: e,
      searchInputRef: n,
      sourceLanguage: i,
      sourceLanguageOptions: c,
      sourceLanguageSelectOn: o,
      startNearbySectionTranslation: me,
      startRecentlyEditedSectionTranslation: B,
      startSearchResultSectionTranslation: Ee,
      suggestedSourceLanguages: d,
      updateSelection: x
    };
  }
}, k2 = { class: "sx-article-search" }, A2 = { class: "mb-0" }, T2 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
};
function D2(e, t, n, o, s, a) {
  const i = y("mw-col"), r = y("mw-button"), l = y("mw-row"), d = y("mw-input"), c = y("mw-button-group"), u = y("article-suggestions-card"), g = y("search-results-card"), f = y("mw-language-selector"), m = y("mw-dialog"), C = Ce("i18n");
  return v(), D("section", k2, [
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
            j(w("h5", A2, null, 512), [
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
    o.searchInput ? ae("", !0) : (v(), D(xe, { key: 0 }, [
      o.recentlyEditedPages && o.recentlyEditedPages.length ? (v(), F(u, {
        key: 0,
        "card-title": e.$i18n("cx-sx-article-search-recently-edited-title"),
        suggestions: o.recentlyEditedPages,
        onSuggestionClicked: o.startRecentlyEditedSectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : o.nearbyPages && o.nearbyPages.length ? (v(), F(u, {
        key: 1,
        "card-title": e.$i18n("cx-sx-article-search-nearby-title"),
        suggestions: o.nearbyPages,
        onSuggestionClicked: o.startNearbySectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : j((v(), D("p", T2, null, 512)), [
        [C, void 0, "cx-sx-article-search-no-suggestions-message"]
      ])
    ], 64)),
    j(p(g, {
      "search-input": o.searchInput,
      onSuggestionClicked: o.startSearchResultSectionTranslation
    }, null, 8, ["search-input", "onSuggestionClicked"]), [
      [Hc, !!o.searchInput]
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
const L2 = /* @__PURE__ */ H(E2, [["render", D2]]);
const P2 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: L2
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
};
function N2(e, t, n, o, s, a) {
  const i = y("sx-article-search");
  return v(), D("main", {
    class: he(["sx-article-search-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const F2 = /* @__PURE__ */ H(P2, [["render", N2]]), Ad = [
  {
    path: "",
    name: "dashboard",
    component: El,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: F2,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: gw,
    props: (e) => ({
      previousRoute: e.query.previousRoute,
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: oC,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: WC,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: j8,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: w8,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: gE,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: l2,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: El,
    meta: { workflowStep: 0 }
  }
], nr = Fv({
  history: N1(),
  routes: Ad
});
nr.beforeEach((e, t, n) => {
  const o = te();
  if (mw.user.isAnon() || Su.assertUser().catch((r) => {
    r instanceof vo && o.commit("application/setIsLoginDialogOn", !0);
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
    const r = Math.ceil(a) - 1, l = Ad.find(
      (d) => d.meta.workflowStep === r
    );
    n({ name: l.name });
    return;
  }
  n();
});
nr.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const M2 = mw.config.get("wgUserLanguage"), O2 = "en", B2 = mw.messages.values || {}, Tn = qc(d_);
Tn.config.globalProperties.$incompleteVersion = !0;
const I2 = xy();
Tn.use(I2);
Tn.use(nr);
Tn.use(Iu);
Tn.use(Lh);
Tn.use(Dh);
const $2 = ey({
  locale: M2,
  finalFallback: O2,
  messages: B2,
  wikilinks: !0
});
Tn.use($2);
Tn.mount("#contenttranslation");
