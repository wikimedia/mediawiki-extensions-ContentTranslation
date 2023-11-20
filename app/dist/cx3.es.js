/*@nomin*/
var Pd = Object.defineProperty, Nd = Object.defineProperties;
var Fd = Object.getOwnPropertyDescriptors;
var ir = Object.getOwnPropertySymbols;
var Md = Object.prototype.hasOwnProperty, Od = Object.prototype.propertyIsEnumerable;
var rr = (e, t, n) => t in e ? Pd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rt = (e, t) => {
  for (var n in t || (t = {}))
    Md.call(t, n) && rr(e, n, t[n]);
  if (ir)
    for (var n of ir(t))
      Od.call(t, n) && rr(e, n, t[n]);
  return e;
}, bt = (e, t) => Nd(e, Fd(t));
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
function kn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const Me = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, io = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], st = () => {
}, Ll = () => !1, Bd = /^on[^a-z]/, Yo = (e) => Bd.test(e), Ns = (e) => e.startsWith("onUpdate:"), $e = Object.assign, di = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Id = Object.prototype.hasOwnProperty, ke = (e, t) => Id.call(e, t), se = Array.isArray, Rn = (e) => Jo(e) === "[object Map]", Pl = (e) => Jo(e) === "[object Set]", lr = (e) => Jo(e) === "[object Date]", de = (e) => typeof e == "function", Ve = (e) => typeof e == "string", Bo = (e) => typeof e == "symbol", Le = (e) => e !== null && typeof e == "object", gi = (e) => Le(e) && de(e.then) && de(e.catch), Nl = Object.prototype.toString, Jo = (e) => Nl.call(e), fi = (e) => Jo(e).slice(8, -1), Fl = (e) => Jo(e) === "[object Object]", pi = (e) => Ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Es = /* @__PURE__ */ kn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $d = /* @__PURE__ */ kn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ws = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ud = /-(\w)/g, Vt = Ws((e) => e.replace(Ud, (t, n) => n ? n.toUpperCase() : "")), Rd = /\B([A-Z])/g, nn = Ws(
  (e) => e.replace(Rd, "-$1").toLowerCase()
), Wn = Ws(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), gn = Ws(
  (e) => e ? `on${Wn(e)}` : ""
), Io = (e, t) => !Object.is(e, t), no = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Fs = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Vd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zd = (e) => {
  const t = Ve(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let cr;
const Ms = () => cr || (cr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function nt(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = Ve(o) ? Gd(o) : nt(o);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else {
    if (Ve(e))
      return e;
    if (Le(e))
      return e;
  }
}
const jd = /;(?![^(]*\))/g, Hd = /:([^]+)/, qd = /\/\*[^]*?\*\//g;
function Gd(e) {
  const t = {};
  return e.replace(qd, "").split(jd).forEach((n) => {
    if (n) {
      const o = n.split(Hd);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function pe(e) {
  let t = "";
  if (Ve(e))
    t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const o = pe(e[n]);
      o && (t += o + " ");
    }
  else if (Le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function mi(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !Ve(t) && (e.class = pe(t)), n && (e.style = nt(n)), e;
}
const Wd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Kd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Xd = /* @__PURE__ */ kn(Wd), Yd = /* @__PURE__ */ kn(Kd), Jd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zd = /* @__PURE__ */ kn(Jd);
function Ml(e) {
  return !!e || e === "";
}
function Qd(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Os(e[o], t[o]);
  return n;
}
function Os(e, t) {
  if (e === t)
    return !0;
  let n = lr(e), o = lr(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Bo(e), o = Bo(t), n || o)
    return e === t;
  if (n = se(e), o = se(t), n || o)
    return n && o ? Qd(e, t) : !1;
  if (n = Le(e), o = Le(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, a = Object.keys(t).length;
    if (s !== a)
      return !1;
    for (const i in e) {
      const r = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (r && !l || !r && l || !Os(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ae = (e) => Ve(e) ? e : e == null ? "" : se(e) || Le(e) && (e.toString === Nl || !de(e.toString)) ? JSON.stringify(e, Ol, 2) : String(e), Ol = (e, t) => t && t.__v_isRef ? Ol(e, t.value) : Rn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : Pl(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Le(t) && !se(t) && !Fl(t) ? String(t) : t;
function Fa(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Dt;
class Bl {
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
      ({}).NODE_ENV !== "production" && Fa("cannot run an inactive effect scope.");
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
function eg(e) {
  return new Bl(e);
}
function tg(e, t = Dt) {
  t && t.active && t.effects.push(e);
}
function ng() {
  return Dt;
}
const $o = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Il = (e) => (e.w & Sn) > 0, $l = (e) => (e.n & Sn) > 0, og = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Sn;
}, sg = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      Il(s) && !$l(s) ? s.delete(e) : t[n++] = s, s.w &= ~Sn, s.n &= ~Sn;
    }
    t.length = n;
  }
}, Ma = /* @__PURE__ */ new WeakMap();
let To = 0, Sn = 1;
const Oa = 30;
let pt;
const Vn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Ba = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class hi {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, tg(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = pt, n = bn;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = pt, pt = this, bn = !0, Sn = 1 << ++To, To <= Oa ? og(this) : ur(this), this.fn();
    } finally {
      To <= Oa && sg(this), Sn = 1 << --To, pt = this.parent, bn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pt === this ? this.deferStop = !0 : this.active && (ur(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ur(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let bn = !0;
const Ul = [];
function Xn() {
  Ul.push(bn), bn = !1;
}
function Yn() {
  const e = Ul.pop();
  bn = e === void 0 ? !0 : e;
}
function at(e, t, n) {
  if (bn && pt) {
    let o = Ma.get(e);
    o || Ma.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = $o());
    const a = {}.NODE_ENV !== "production" ? { effect: pt, target: e, type: t, key: n } : void 0;
    Ia(s, a);
  }
}
function Ia(e, t) {
  let n = !1;
  To <= Oa ? $l(e) || (e.n |= Sn, n = !Il(e)) : n = !e.has(pt), n && (e.add(pt), pt.deps.push(e), {}.NODE_ENV !== "production" && pt.onTrack && pt.onTrack(
    $e(
      {
        effect: pt
      },
      t
    )
  ));
}
function zt(e, t, n, o, s, a) {
  const i = Ma.get(e);
  if (!i)
    return;
  let r = [];
  if (t === "clear")
    r = [...i.values()];
  else if (n === "length" && se(e)) {
    const d = Number(o);
    i.forEach((c, u) => {
      (u === "length" || u >= d) && r.push(c);
    });
  } else
    switch (n !== void 0 && r.push(i.get(n)), t) {
      case "add":
        se(e) ? pi(n) && r.push(i.get("length")) : (r.push(i.get(Vn)), Rn(e) && r.push(i.get(Ba)));
        break;
      case "delete":
        se(e) || (r.push(i.get(Vn)), Rn(e) && r.push(i.get(Ba)));
        break;
      case "set":
        Rn(e) && r.push(i.get(Vn));
        break;
    }
  const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: a } : void 0;
  if (r.length === 1)
    r[0] && ({}.NODE_ENV !== "production" ? ao(r[0], l) : ao(r[0]));
  else {
    const d = [];
    for (const c of r)
      c && d.push(...c);
    ({}).NODE_ENV !== "production" ? ao($o(d), l) : ao($o(d));
  }
}
function ao(e, t) {
  const n = se(e) ? e : [...e];
  for (const o of n)
    o.computed && dr(o, t);
  for (const o of n)
    o.computed || dr(o, t);
}
function dr(e, t) {
  (e !== pt || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger($e({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ag = /* @__PURE__ */ kn("__proto__,__v_isRef,__isVue"), Rl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bo)
), ig = /* @__PURE__ */ Ks(), rg = /* @__PURE__ */ Ks(!1, !0), lg = /* @__PURE__ */ Ks(!0), cg = /* @__PURE__ */ Ks(!0, !0), gr = /* @__PURE__ */ ug();
function ug() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = me(this);
      for (let a = 0, i = this.length; a < i; a++)
        at(o, "get", a + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(me)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Xn();
      const o = me(this)[t].apply(this, n);
      return Yn(), o;
    };
  }), e;
}
function dg(e) {
  const t = me(this);
  return at(t, "has", e), t.hasOwnProperty(e);
}
function Ks(e = !1, t = !1) {
  return function(o, s, a) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && a === (e ? t ? Kl : Wl : t ? Gl : ql).get(o))
      return o;
    const i = se(o);
    if (!e) {
      if (i && ke(gr, s))
        return Reflect.get(gr, s, a);
      if (s === "hasOwnProperty")
        return dg;
    }
    const r = Reflect.get(o, s, a);
    return (Bo(s) ? Rl.has(s) : ag(s)) || (e || at(o, "get", s), t) ? r : Ye(r) ? i && pi(s) ? r : r.value : Le(r) ? e ? Yl(r) : mo(r) : r;
  };
}
const gg = /* @__PURE__ */ Vl(), fg = /* @__PURE__ */ Vl(!0);
function Vl(e = !1) {
  return function(n, o, s, a) {
    let i = n[o];
    if (wn(i) && Ye(i) && !Ye(s))
      return !1;
    if (!e && (!Bs(s) && !wn(s) && (i = me(i), s = me(s)), !se(n) && Ye(i) && !Ye(s)))
      return i.value = s, !0;
    const r = se(n) && pi(o) ? Number(o) < n.length : ke(n, o), l = Reflect.set(n, o, s, a);
    return n === me(a) && (r ? Io(s, i) && zt(n, "set", o, s, i) : zt(n, "add", o, s)), l;
  };
}
function pg(e, t) {
  const n = ke(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && zt(e, "delete", t, void 0, o), s;
}
function mg(e, t) {
  const n = Reflect.has(e, t);
  return (!Bo(t) || !Rl.has(t)) && at(e, "has", t), n;
}
function hg(e) {
  return at(e, "iterate", se(e) ? "length" : Vn), Reflect.ownKeys(e);
}
const zl = {
  get: ig,
  set: gg,
  deleteProperty: pg,
  has: mg,
  ownKeys: hg
}, jl = {
  get: lg,
  set(e, t) {
    return {}.NODE_ENV !== "production" && Fa(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && Fa(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, _g = /* @__PURE__ */ $e(
  {},
  zl,
  {
    get: rg,
    set: fg
  }
), vg = /* @__PURE__ */ $e(
  {},
  jl,
  {
    get: cg
  }
), _i = (e) => e, Xs = (e) => Reflect.getPrototypeOf(e);
function _s(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = me(e), a = me(t);
  n || (t !== a && at(s, "get", t), at(s, "get", a));
  const { has: i } = Xs(s), r = o ? _i : n ? vi : Uo;
  if (i.call(s, t))
    return r(e.get(t));
  if (i.call(s, a))
    return r(e.get(a));
  e !== s && e.get(t);
}
function vs(e, t = !1) {
  const n = this.__v_raw, o = me(n), s = me(e);
  return t || (e !== s && at(o, "has", e), at(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ys(e, t = !1) {
  return e = e.__v_raw, !t && at(me(e), "iterate", Vn), Reflect.get(e, "size", e);
}
function fr(e) {
  e = me(e);
  const t = me(this);
  return Xs(t).has.call(t, e) || (t.add(e), zt(t, "add", e, e)), this;
}
function pr(e, t) {
  t = me(t);
  const n = me(this), { has: o, get: s } = Xs(n);
  let a = o.call(n, e);
  a ? {}.NODE_ENV !== "production" && Hl(n, o, e) : (e = me(e), a = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), a ? Io(t, i) && zt(n, "set", e, t, i) : zt(n, "add", e, t), this;
}
function mr(e) {
  const t = me(this), { has: n, get: o } = Xs(t);
  let s = n.call(t, e);
  s ? {}.NODE_ENV !== "production" && Hl(t, n, e) : (e = me(e), s = n.call(t, e));
  const a = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && zt(t, "delete", e, void 0, a), i;
}
function hr() {
  const e = me(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? Rn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && zt(e, "clear", void 0, void 0, n), o;
}
function bs(e, t) {
  return function(o, s) {
    const a = this, i = a.__v_raw, r = me(i), l = t ? _i : e ? vi : Uo;
    return !e && at(r, "iterate", Vn), i.forEach((d, c) => o.call(s, l(d), l(c), a));
  };
}
function Ss(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, a = me(s), i = Rn(a), r = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, d = s[e](...o), c = n ? _i : t ? vi : Uo;
    return !t && at(
      a,
      "iterate",
      l ? Ba : Vn
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
        `${Wn(e)} operation ${n}failed: target is readonly.`,
        me(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function yg() {
  const e = {
    get(a) {
      return _s(this, a);
    },
    get size() {
      return ys(this);
    },
    has: vs,
    add: fr,
    set: pr,
    delete: mr,
    clear: hr,
    forEach: bs(!1, !1)
  }, t = {
    get(a) {
      return _s(this, a, !1, !0);
    },
    get size() {
      return ys(this);
    },
    has: vs,
    add: fr,
    set: pr,
    delete: mr,
    clear: hr,
    forEach: bs(!1, !0)
  }, n = {
    get(a) {
      return _s(this, a, !0);
    },
    get size() {
      return ys(this, !0);
    },
    has(a) {
      return vs.call(this, a, !0);
    },
    add: an("add"),
    set: an("set"),
    delete: an("delete"),
    clear: an("clear"),
    forEach: bs(!0, !1)
  }, o = {
    get(a) {
      return _s(this, a, !0, !0);
    },
    get size() {
      return ys(this, !0);
    },
    has(a) {
      return vs.call(this, a, !0);
    },
    add: an("add"),
    set: an("set"),
    delete: an("delete"),
    clear: an("clear"),
    forEach: bs(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = Ss(
      a,
      !1,
      !1
    ), n[a] = Ss(
      a,
      !0,
      !1
    ), t[a] = Ss(
      a,
      !1,
      !0
    ), o[a] = Ss(
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
  bg,
  Sg,
  wg,
  Cg
] = /* @__PURE__ */ yg();
function Ys(e, t) {
  const n = t ? e ? Cg : wg : e ? Sg : bg;
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    ke(n, s) && s in o ? n : o,
    s,
    a
  );
}
const xg = {
  get: /* @__PURE__ */ Ys(!1, !1)
}, Eg = {
  get: /* @__PURE__ */ Ys(!1, !0)
}, kg = {
  get: /* @__PURE__ */ Ys(!0, !1)
}, Tg = {
  get: /* @__PURE__ */ Ys(!0, !0)
};
function Hl(e, t, n) {
  const o = me(n);
  if (o !== n && t.call(e, o)) {
    const s = fi(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ql = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap();
function Ag(e) {
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
function Dg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ag(fi(e));
}
function mo(e) {
  return wn(e) ? e : Js(
    e,
    !1,
    zl,
    xg,
    ql
  );
}
function Xl(e) {
  return Js(
    e,
    !1,
    _g,
    Eg,
    Gl
  );
}
function Yl(e) {
  return Js(
    e,
    !0,
    jl,
    kg,
    Wl
  );
}
function Ao(e) {
  return Js(
    e,
    !0,
    vg,
    Tg,
    Kl
  );
}
function Js(e, t, n, o, s) {
  if (!Le(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = s.get(e);
  if (a)
    return a;
  const i = Dg(e);
  if (i === 0)
    return e;
  const r = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, r), r;
}
function zn(e) {
  return wn(e) ? zn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wn(e) {
  return !!(e && e.__v_isReadonly);
}
function Bs(e) {
  return !!(e && e.__v_isShallow);
}
function $a(e) {
  return zn(e) || wn(e);
}
function me(e) {
  const t = e && e.__v_raw;
  return t ? me(t) : e;
}
function Jl(e) {
  return Fs(e, "__v_skip", !0), e;
}
const Uo = (e) => Le(e) ? mo(e) : e, vi = (e) => Le(e) ? Yl(e) : e;
function Zl(e) {
  bn && pt && (e = me(e), {}.NODE_ENV !== "production" ? Ia(e.dep || (e.dep = $o()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ia(e.dep || (e.dep = $o())));
}
function Ql(e, t) {
  e = me(e);
  const n = e.dep;
  n && ({}.NODE_ENV !== "production" ? ao(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ao(n));
}
function Ye(e) {
  return !!(e && e.__v_isRef === !0);
}
function J(e) {
  return ec(e, !1);
}
function Lg(e) {
  return ec(e, !0);
}
function ec(e, t) {
  return Ye(e) ? e : new Pg(e, t);
}
class Pg {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : me(t), this._value = n ? t : Uo(t);
  }
  get value() {
    return Zl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Bs(t) || wn(t);
    t = n ? t : me(t), Io(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Uo(t), Ql(this, t));
  }
}
function qe(e) {
  return Ye(e) ? e.value : e;
}
const Ng = {
  get: (e, t, n) => qe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Ye(s) && !Ye(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function tc(e) {
  return zn(e) ? e : new Proxy(e, Ng);
}
class Fg {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new hi(t, () => {
      this._dirty || (this._dirty = !0, Ql(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = me(this);
    return Zl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Mg(e, t, n = !1) {
  let o, s;
  const a = de(e);
  a ? (o = e, s = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : st) : (o = e.get, s = e.set);
  const i = new Fg(o, s, a || !s, n);
  return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const jn = [];
function ks(e) {
  jn.push(e);
}
function Ts() {
  jn.pop();
}
function U(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  Xn();
  const n = jn.length ? jn[jn.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Og();
  if (o)
    tn(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: a }) => `at <${ia(n, a.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    s.length && a.push(`
`, ...Bg(s)), console.warn(...a);
  }
  Yn();
}
function Og() {
  let e = jn[jn.length - 1];
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
function Bg(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ig(n));
  }), t;
}
function Ig({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${ia(
    e.component,
    e.type,
    o
  )}`, a = ">" + n;
  return e.props ? [s, ...$g(e.props), a] : [s + a];
}
function $g(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...nc(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function nc(e, t, n) {
  return Ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ye(t) ? (t = nc(e, me(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : de(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = me(t), n ? t : [`${e}=`, t]);
}
function Ug(e, t) {
  ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? U(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && U(`${t} is NaN - the duration expression might be incorrect.`));
}
const yi = {
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
    Zs(a, t, n);
  }
  return s;
}
function Tt(e, t, n, o) {
  if (de(e)) {
    const a = tn(e, t, n, o);
    return a && gi(a) && a.catch((i) => {
      Zs(i, t, n);
    }), a;
  }
  const s = [];
  for (let a = 0; a < e.length; a++)
    s.push(Tt(e[a], t, n, o));
  return s;
}
function Zs(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const i = t.proxy, r = {}.NODE_ENV !== "production" ? yi[n] : n;
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
  Rg(e, n, s, o);
}
function Rg(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const s = yi[t];
    if (n && ks(n), U(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ts(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ro = !1, Ua = !1;
const lt = [];
let Ut = 0;
const ro = [];
let $t = null, fn = 0;
const oc = /* @__PURE__ */ Promise.resolve();
let bi = null;
const Vg = 100;
function ho(e) {
  const t = bi || oc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zg(e) {
  let t = Ut + 1, n = lt.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Vo(lt[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Qs(e) {
  (!lt.length || !lt.includes(
    e,
    Ro && e.allowRecurse ? Ut + 1 : Ut
  )) && (e.id == null ? lt.push(e) : lt.splice(zg(e.id), 0, e), sc());
}
function sc() {
  !Ro && !Ua && (Ua = !0, bi = oc.then(rc));
}
function jg(e) {
  const t = lt.indexOf(e);
  t > Ut && lt.splice(t, 1);
}
function ac(e) {
  se(e) ? ro.push(...e) : (!$t || !$t.includes(
    e,
    e.allowRecurse ? fn + 1 : fn
  )) && ro.push(e), sc();
}
function _r(e, t = Ro ? Ut + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < lt.length; t++) {
    const n = lt[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && Si(e, n))
        continue;
      lt.splice(t, 1), t--, n();
    }
  }
}
function ic(e) {
  if (ro.length) {
    const t = [...new Set(ro)];
    if (ro.length = 0, $t) {
      $t.push(...t);
      return;
    }
    for ($t = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $t.sort((n, o) => Vo(n) - Vo(o)), fn = 0; fn < $t.length; fn++)
      ({}).NODE_ENV !== "production" && Si(e, $t[fn]) || $t[fn]();
    $t = null, fn = 0;
  }
}
const Vo = (e) => e.id == null ? 1 / 0 : e.id, Hg = (e, t) => {
  const n = Vo(e) - Vo(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function rc(e) {
  Ua = !1, Ro = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), lt.sort(Hg);
  const t = {}.NODE_ENV !== "production" ? (n) => Si(e, n) : st;
  try {
    for (Ut = 0; Ut < lt.length; Ut++) {
      const n = lt[Ut];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        tn(n, null, 14);
      }
    }
  } finally {
    Ut = 0, lt.length = 0, ic(e), Ro = !1, bi = null, (lt.length || ro.length) && rc(e);
  }
}
function Si(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Vg) {
      const o = t.ownerInstance, s = o && Pi(o.type);
      return U(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Hn = !1;
const oo = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (Ms().__VUE_HMR_RUNTIME__ = {
  createRecord: ha(lc),
  rerender: ha(Wg),
  reload: ha(Kg)
});
const Kn = /* @__PURE__ */ new Map();
function qg(e) {
  const t = e.type.__hmrId;
  let n = Kn.get(t);
  n || (lc(t, e.type), n = Kn.get(t)), n.instances.add(e);
}
function Gg(e) {
  Kn.get(e.type.__hmrId).instances.delete(e);
}
function lc(e, t) {
  return Kn.has(e) ? !1 : (Kn.set(e, {
    initialDef: Po(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Po(e) {
  return zc(e) ? e.__vccOpts : e;
}
function Wg(e, t) {
  const n = Kn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Po(o.type).render = t), o.renderCache = [], Hn = !0, o.update(), Hn = !1;
  }));
}
function Kg(e, t) {
  const n = Kn.get(e);
  if (!n)
    return;
  t = Po(t), vr(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const a = Po(s.type);
    oo.has(a) || (a !== n.initialDef && vr(a, t), oo.add(a)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (oo.add(a), s.ceReload(t.styles), oo.delete(a)) : s.parent ? Qs(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ac(() => {
    for (const s of o)
      oo.delete(
        Po(s.type)
      );
  });
}
function vr(e, t) {
  $e(e, t);
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
let Rt, Do = [], Ra = !1;
function Zo(e, ...t) {
  Rt ? Rt.emit(e, ...t) : Ra || Do.push({ event: e, args: t });
}
function cc(e, t) {
  var n, o;
  Rt = e, Rt ? (Rt.enabled = !0, Do.forEach(({ event: s, args: a }) => Rt.emit(s, ...a)), Do = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    cc(a, t);
  }), setTimeout(() => {
    Rt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ra = !0, Do = []);
  }, 3e3)) : (Ra = !0, Do = []);
}
function Xg(e, t) {
  Zo("app:init", e, t, {
    Fragment: we,
    Text: es,
    Comment: tt,
    Static: Ls
  });
}
function Yg(e) {
  Zo("app:unmount", e);
}
const Jg = /* @__PURE__ */ wi(
  "component:added"
  /* COMPONENT_ADDED */
), uc = /* @__PURE__ */ wi(
  "component:updated"
  /* COMPONENT_UPDATED */
), Zg = /* @__PURE__ */ wi(
  "component:removed"
  /* COMPONENT_REMOVED */
), Qg = (e) => {
  Rt && typeof Rt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Rt.cleanupBuffer(e) && Zg(e);
};
function wi(e) {
  return (t) => {
    Zo(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ef = /* @__PURE__ */ dc(
  "perf:start"
  /* PERFORMANCE_START */
), tf = /* @__PURE__ */ dc(
  "perf:end"
  /* PERFORMANCE_END */
);
function dc(e) {
  return (t, n, o) => {
    Zo(e, t.appContext.app, t.uid, t, n, o);
  };
}
function nf(e, t, n) {
  Zo(
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
  const o = e.vnode.props || Me;
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
        de(g) && (g(...n) || U(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const a = t.startsWith("update:"), i = a && t.slice(7);
  if (i && i in o) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`, { number: u, trim: g } = o[c] || Me;
    g && (s = n.map((f) => Ve(f) ? f.trim() : f)), u && (s = n.map(Vd));
  }
  if ({}.NODE_ENV !== "production" && nf(e, t, s), {}.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && o[gn(c)] && U(
      `Event "${c}" is emitted in component ${ia(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${nn(t)}" instead of "${t}".`
    );
  }
  let r, l = o[r = gn(t)] || // also try camelCase event handler (#2249)
  o[r = gn(Vt(t))];
  !l && a && (l = o[r = gn(nn(t))]), l && Tt(
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
    e.emitted[r] = !0, Tt(
      d,
      e,
      6,
      s
    );
  }
}
function gc(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const a = e.emits;
  let i = {}, r = !1;
  if (!de(e)) {
    const l = (d) => {
      const c = gc(d, t, !0);
      c && (r = !0, $e(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !r ? (Le(e) && o.set(e, null), null) : (se(a) ? a.forEach((l) => i[l] = null) : $e(i, a), Le(e) && o.set(e, i), i);
}
function ea(e, t) {
  return !e || !Yo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, nn(t)) || ke(e, t));
}
let Je = null, fc = null;
function Is(e) {
  const t = Je;
  return Je = e, fc = e && e.type.__scopeId || null, t;
}
function b(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Nr(-1);
    const a = Is(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Is(a), o._d && Nr(1);
    }
    return {}.NODE_ENV !== "production" && uc(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Va = !1;
function $s() {
  Va = !0;
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
    inheritAttrs: w
  } = e;
  let x, k;
  const L = Is(e);
  ({}).NODE_ENV !== "production" && (Va = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = s || o;
      x = Lt(
        c.call(
          O,
          O,
          u,
          a,
          f,
          g,
          m
        )
      ), k = l;
    } else {
      const O = t;
      ({}).NODE_ENV !== "production" && l === a && $s(), x = Lt(
        O.length > 1 ? O(
          a,
          {}.NODE_ENV !== "production" ? {
            get attrs() {
              return $s(), l;
            },
            slots: r,
            emit: d
          } : { attrs: l, slots: r, emit: d }
        ) : O(
          a,
          null
          /* we know it doesn't need it */
        )
      ), k = t.props ? l : af(l);
    }
  } catch (O) {
    Fo.length = 0, Zs(O, e, 1), x = p(tt);
  }
  let M = x, G;
  if ({}.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([M, G] = sf(x)), k && w !== !1) {
    const O = Object.keys(k), { shapeFlag: ge } = M;
    if (O.length) {
      if (ge & 7)
        i && O.some(Ns) && (k = rf(
          k,
          i
        )), M = jt(M, k);
      else if ({}.NODE_ENV !== "production" && !Va && M.type !== tt) {
        const ne = Object.keys(l), H = [], Se = [];
        for (let Ce = 0, xe = ne.length; Ce < xe; Ce++) {
          const Y = ne[Ce];
          Yo(Y) ? Ns(Y) || H.push(Y[2].toLowerCase() + Y.slice(3)) : Se.push(Y);
        }
        Se.length && U(
          `Extraneous non-props attributes (${Se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), H.length && U(
          `Extraneous non-emits event listeners (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !yr(M) && U(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), M = jt(M), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !yr(M) && U(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), M.transition = n.transition), {}.NODE_ENV !== "production" && G ? G(M) : x = M, Is(L), x;
}
const sf = (e) => {
  const t = e.children, n = e.dynamicChildren, o = pc(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), a = n ? n.indexOf(o) : -1, i = (r) => {
    t[s] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
  };
  return [Lt(o), i];
};
function pc(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (lo(o)) {
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
const af = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Yo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, rf = (e, t) => {
  const n = {};
  for (const o in e)
    (!Ns(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, yr = (e) => e.shapeFlag & 7 || e.type === tt;
function lf(e, t, n) {
  const { props: o, children: s, component: a } = e, { props: i, children: r, patchFlag: l } = t, d = a.emitsOptions;
  if ({}.NODE_ENV !== "production" && (s || r) && Hn || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? br(o, i, d) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const g = c[u];
        if (i[g] !== o[g] && !ea(d, g))
          return !0;
      }
    }
  } else
    return (s || r) && (!r || !r.$stable) ? !0 : o === i ? !1 : o ? i ? br(o, i, d) : !0 : !!i;
  return !1;
}
function br(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (t[a] !== e[a] && !ea(n, a))
      return !0;
  }
  return !1;
}
function cf({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const uf = (e) => e.__isSuspense;
function df(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : ac(e);
}
function gf(e, t) {
  return Ci(e, null, t);
}
const ws = {};
function je(e, t, n) {
  return {}.NODE_ENV !== "production" && !de(t) && U(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ci(e, t, n);
}
function Ci(e, t, { immediate: n, deep: o, flush: s, onTrack: a, onTrigger: i } = Me) {
  var r;
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && U(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && U(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (O) => {
    U(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ng() === ((r = Xe) == null ? void 0 : r.scope) ? Xe : null;
  let c, u = !1, g = !1;
  if (Ye(e) ? (c = () => e.value, u = Bs(e)) : zn(e) ? (c = () => e, o = !0) : se(e) ? (g = !0, u = e.some((O) => zn(O) || Bs(O)), c = () => e.map((O) => {
    if (Ye(O))
      return O.value;
    if (zn(O))
      return Un(O);
    if (de(O))
      return tn(O, d, 2);
    ({}).NODE_ENV !== "production" && l(O);
  })) : de(e) ? t ? c = () => tn(e, d, 2) : c = () => {
    if (!(d && d.isUnmounted))
      return f && f(), Tt(
        e,
        d,
        3,
        [m]
      );
  } : (c = st, {}.NODE_ENV !== "production" && l(e)), t && o) {
    const O = c;
    c = () => Un(O());
  }
  let f, m = (O) => {
    f = M.onStop = () => {
      tn(O, d, 4);
    };
  }, w;
  if (Ho)
    if (m = st, t ? n && Tt(t, d, 3, [
      c(),
      g ? [] : void 0,
      m
    ]) : c(), s === "sync") {
      const O = pp();
      w = O.__watcherHandles || (O.__watcherHandles = []);
    } else
      return st;
  let x = g ? new Array(e.length).fill(ws) : ws;
  const k = () => {
    if (M.active)
      if (t) {
        const O = M.run();
        (o || u || (g ? O.some(
          (ge, ne) => Io(ge, x[ne])
        ) : Io(O, x))) && (f && f(), Tt(t, d, 3, [
          O,
          // pass undefined as the old value when it's changed for the first time
          x === ws ? void 0 : g && x[0] === ws ? [] : x,
          m
        ]), x = O);
      } else
        M.run();
  };
  k.allowRecurse = !!t;
  let L;
  s === "sync" ? L = k : s === "post" ? L = () => _t(k, d && d.suspense) : (k.pre = !0, d && (k.id = d.uid), L = () => Qs(k));
  const M = new hi(c, L);
  ({}).NODE_ENV !== "production" && (M.onTrack = a, M.onTrigger = i), t ? n ? k() : x = M.run() : s === "post" ? _t(
    M.run.bind(M),
    d && d.suspense
  ) : M.run();
  const G = () => {
    M.stop(), d && d.scope && di(d.scope.effects, M);
  };
  return w && w.push(G), G;
}
function ff(e, t, n) {
  const o = this.proxy, s = Ve(e) ? e.includes(".") ? mc(o, e) : () => o[e] : e.bind(o, o);
  let a;
  de(t) ? a = t : (a = t.handler, n = t);
  const i = Xe;
  co(this);
  const r = Ci(s, a.bind(o), n);
  return i ? co(i) : Gn(), r;
}
function mc(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function Un(e, t) {
  if (!Le(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Ye(e))
    Un(e.value, t);
  else if (se(e))
    for (let n = 0; n < e.length; n++)
      Un(e[n], t);
  else if (Pl(e) || Rn(e))
    e.forEach((n) => {
      Un(n, t);
    });
  else if (Fl(e))
    for (const n in e)
      Un(e[n], t);
  return e;
}
function hc(e) {
  $d(e) && U("Do not use built-in directive ids as custom directive id: " + e);
}
function V(e, t) {
  const n = Je;
  if (n === null)
    return {}.NODE_ENV !== "production" && U("withDirectives can only be used inside render functions."), e;
  const o = aa(n) || n.proxy, s = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, r, l, d = Me] = t[a];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Un(r), s.push({
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
function Nn(e, t, n, o) {
  const s = e.dirs, a = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    a && (r.oldValue = a[i].value);
    let l = r.dir[o];
    l && (Xn(), Tt(l, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Yn());
  }
}
function pf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ut(() => {
    e.isMounted = !0;
  }), wc(() => {
    e.isUnmounting = !0;
  }), e;
}
const Et = [Function, Array], _c = {
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
  props: _c,
  setup(e, { slots: t }) {
    const n = Di(), o = pf();
    let s;
    return () => {
      const a = t.default && yc(t.default(), !0);
      if (!a || !a.length)
        return;
      let i = a[0];
      if (a.length > 1) {
        let w = !1;
        for (const x of a)
          if (x.type !== tt) {
            if ({}.NODE_ENV !== "production" && w) {
              U(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (i = x, w = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const r = me(e), { mode: l } = r;
      if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && U(`invalid <transition> mode: ${l}`), o.isLeaving)
        return va(i);
      const d = Sr(i);
      if (!d)
        return va(i);
      const c = za(
        d,
        r,
        o,
        n
      );
      ja(d, c);
      const u = n.subTree, g = u && Sr(u);
      let f = !1;
      const { getTransitionKey: m } = d.type;
      if (m) {
        const w = m();
        s === void 0 ? s = w : w !== s && (s = w, f = !0);
      }
      if (g && g.type !== tt && (!Bn(d, g) || f)) {
        const w = za(
          g,
          r,
          o,
          n
        );
        if (ja(g, w), l === "out-in")
          return o.isLeaving = !0, w.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, va(i);
        l === "in-out" && d.type !== tt && (w.delayLeave = (x, k, L) => {
          const M = vc(
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
function vc(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function za(e, t, n, o) {
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
    onBeforeAppear: w,
    onAppear: x,
    onAfterAppear: k,
    onAppearCancelled: L
  } = t, M = String(e.key), G = vc(n, e), O = (H, Se) => {
    H && Tt(
      H,
      o,
      9,
      Se
    );
  }, ge = (H, Se) => {
    const Ce = Se[1];
    O(H, Se), se(H) ? H.every((xe) => xe.length <= 1) && Ce() : H.length <= 1 && Ce();
  }, ne = {
    mode: a,
    persisted: i,
    beforeEnter(H) {
      let Se = r;
      if (!n.isMounted)
        if (s)
          Se = w || r;
        else
          return;
      H._leaveCb && H._leaveCb(
        !0
        /* cancelled */
      );
      const Ce = G[M];
      Ce && Bn(e, Ce) && Ce.el._leaveCb && Ce.el._leaveCb(), O(Se, [H]);
    },
    enter(H) {
      let Se = l, Ce = d, xe = c;
      if (!n.isMounted)
        if (s)
          Se = x || l, Ce = k || d, xe = L || c;
        else
          return;
      let Y = !1;
      const De = H._enterCb = (Ke) => {
        Y || (Y = !0, Ke ? O(xe, [H]) : O(Ce, [H]), ne.delayedLeave && ne.delayedLeave(), H._enterCb = void 0);
      };
      Se ? ge(Se, [H, De]) : De();
    },
    leave(H, Se) {
      const Ce = String(e.key);
      if (H._enterCb && H._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Se();
      O(u, [H]);
      let xe = !1;
      const Y = H._leaveCb = (De) => {
        xe || (xe = !0, Se(), De ? O(m, [H]) : O(f, [H]), H._leaveCb = void 0, G[Ce] === e && delete G[Ce]);
      };
      G[Ce] = e, g ? ge(g, [H, Y]) : Y();
    },
    clone(H) {
      return za(H, t, n, o);
    }
  };
  return ne;
}
function va(e) {
  if (Qo(e))
    return e = jt(e), e.children = null, e;
}
function Sr(e) {
  return Qo(e) ? e.children ? e.children[0] : void 0 : e;
}
function ja(e, t) {
  e.shapeFlag & 6 && e.component ? ja(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yc(e, t = !1, n) {
  let o = [], s = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === we ? (i.patchFlag & 128 && s++, o = o.concat(
      yc(i.children, t, r)
    )) : (t || i.type !== tt) && o.push(r != null ? jt(i, { key: r }) : i);
  }
  if (s > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
function bc(e, t) {
  return de(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => $e({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const No = (e) => !!e.type.__asyncLoader, Qo = (e) => e.type.__isKeepAlive;
function _f(e, t) {
  Sc(e, "a", t);
}
function vf(e, t) {
  Sc(e, "da", t);
}
function Sc(e, t, n = Xe) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (ta(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Qo(s.parent.vnode) && yf(o, t, n, s), s = s.parent;
  }
}
function yf(e, t, n, o) {
  const s = ta(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Cc(() => {
    di(o[t], s);
  }, n);
}
function ta(e, t, n = Xe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Xn(), co(n);
      const r = Tt(t, n, e, i);
      return Gn(), Yn(), r;
    });
    return o ? s.unshift(a) : s.push(a), a;
  } else if ({}.NODE_ENV !== "production") {
    const s = gn(yi[e].replace(/ hook$/, ""));
    U(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const on = (e) => (t, n = Xe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ho || e === "sp") && ta(e, (...o) => t(...o), n)
), bf = on("bm"), ut = on("m"), Sf = on("bu"), wf = on("u"), wc = on("bum"), Cc = on("um"), Cf = on("sp"), xf = on(
  "rtg"
), Ef = on(
  "rtc"
);
function kf(e, t = Xe) {
  ta("ec", e, t);
}
const Us = "components", Tf = "directives";
function _(e, t) {
  return xi(Us, e, !0, t) || e;
}
const xc = Symbol.for("v-ndc");
function _o(e) {
  return Ve(e) ? xi(Us, e, !1) || e : e || xc;
}
function ye(e) {
  return xi(Tf, e);
}
function xi(e, t, n = !0, o = !1) {
  const s = Je || Xe;
  if (s) {
    const a = s.type;
    if (e === Us) {
      const r = Pi(
        a,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (r && (r === t || r === Vt(t) || r === Wn(Vt(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      wr(s[e] || a[e], t) || // global registration
      wr(s.appContext[e], t)
    );
    if (!i && o)
      return a;
    if ({}.NODE_ENV !== "production" && n && !i) {
      const r = e === Us ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      U(`Failed to resolve ${e.slice(0, -1)}: ${t}${r}`);
    }
    return i;
  } else
    ({}).NODE_ENV !== "production" && U(
      `resolve${Wn(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function wr(e, t) {
  return e && (e[t] || e[Vt(t)] || e[Wn(Vt(t))]);
}
function Ze(e, t, n, o) {
  let s;
  const a = n && n[o];
  if (se(e) || Ve(e)) {
    s = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++)
      s[i] = t(e[i], i, void 0, a && a[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && U(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, a && a[i]);
  } else if (Le(e))
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
function ze(e, t, n = {}, o, s) {
  if (Je.isCE || Je.parent && No(Je.parent) && Je.parent.isCE)
    return t !== "default" && (n.name = t), p("slot", n, o && o());
  let a = e[t];
  ({}).NODE_ENV !== "production" && a && a.length > 1 && (U(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), a = () => []), a && a._c && (a._d = !1), y();
  const i = a && Ec(a(n)), r = F(
    we,
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
function Ec(e) {
  return e.some((t) => lo(t) ? !(t.type === tt || t.type === we && !Ec(t.children)) : !0) ? e : null;
}
const Ha = (e) => e ? Uc(e) ? aa(e) || e.proxy : Ha(e.parent) : null, qn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ $e(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? Ao(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? Ao(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? Ao(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? Ao(e.refs) : e.refs,
    $parent: (e) => Ha(e.parent),
    $root: (e) => Ha(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ki(e),
    $forceUpdate: (e) => e.f || (e.f = () => Qs(e.update)),
    $nextTick: (e) => e.n || (e.n = ho.bind(e.proxy)),
    $watch: (e) => ff.bind(e)
  })
), Ei = (e) => e === "_" || e === "$", ya = (e, t) => e !== Me && !e.__isScriptSetup && ke(e, t), kc = {
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
        if (s !== Me && ke(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && ke(d, t)
        )
          return i[t] = 3, a[t];
        if (n !== Me && ke(n, t))
          return i[t] = 4, n[t];
        qa && (i[t] = 0);
      }
    }
    const c = qn[t];
    let u, g;
    if (c)
      return t === "$attrs" ? (at(e, "get", t), {}.NODE_ENV !== "production" && $s()) : {}.NODE_ENV !== "production" && t === "$slots" && at(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Me && ke(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, ke(g, t)
    )
      return g[t];
    ({}).NODE_ENV !== "production" && Je && (!Ve(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== Me && Ei(t[0]) && ke(s, t) ? U(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Je && U(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: a } = e;
    return ya(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && ke(s, t) ? (U(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Me && ke(o, t) ? (o[t] = n, !0) : ke(e.props, t) ? ({}.NODE_ENV !== "production" && U(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && U(
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
    return !!n[i] || e !== Me && ke(e, i) || ya(t, i) || (r = a[0]) && ke(r, i) || ke(o, i) || ke(qn, i) || ke(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (kc.ownKeys = (e) => (U(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Af(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(qn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => qn[n](e),
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
  Object.keys(me(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Ei(o[0])) {
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
function Cr(e) {
  return se(e) ? e.reduce(
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
let qa = !0;
function Nf(e) {
  const t = ki(e), n = e.proxy, o = e.ctx;
  qa = !1, t.beforeCreate && xr(t.beforeCreate, e, "bc");
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
    activated: w,
    deactivated: x,
    beforeDestroy: k,
    beforeUnmount: L,
    destroyed: M,
    unmounted: G,
    render: O,
    renderTracked: ge,
    renderTriggered: ne,
    errorCaptured: H,
    serverPrefetch: Se,
    // public API
    expose: Ce,
    inheritAttrs: xe,
    // assets
    components: Y,
    directives: De,
    filters: Ke
  } = t, We = {}.NODE_ENV !== "production" ? Pf() : null;
  if ({}.NODE_ENV !== "production") {
    const [ie] = e.propsOptions;
    if (ie)
      for (const fe in ie)
        We("Props", fe);
  }
  if (d && Ff(d, o, We), i)
    for (const ie in i) {
      const fe = i[ie];
      de(fe) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, ie, {
        value: fe.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[ie] = fe.bind(n), {}.NODE_ENV !== "production" && We("Methods", ie)) : {}.NODE_ENV !== "production" && U(
        `Method "${ie}" has type "${typeof fe}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    ({}).NODE_ENV !== "production" && !de(s) && U(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ie = s.call(n, n);
    if ({}.NODE_ENV !== "production" && gi(ie) && U(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Le(ie))
      ({}).NODE_ENV !== "production" && U("data() should return an object.");
    else if (e.data = mo(ie), {}.NODE_ENV !== "production")
      for (const fe in ie)
        We("Data", fe), Ei(fe[0]) || Object.defineProperty(o, fe, {
          configurable: !0,
          enumerable: !0,
          get: () => ie[fe],
          set: st
        });
  }
  if (qa = !0, a)
    for (const ie in a) {
      const fe = a[ie], ot = de(fe) ? fe.bind(n, n) : de(fe.get) ? fe.get.bind(n, n) : st;
      ({}).NODE_ENV !== "production" && ot === st && U(`Computed property "${ie}" has no getter.`);
      const Xt = !de(fe) && de(fe.set) ? fe.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        U(
          `Write operation failed: computed property "${ie}" is readonly.`
        );
      } : st, yt = S({
        get: ot,
        set: Xt
      });
      Object.defineProperty(o, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (dt) => yt.value = dt
      }), {}.NODE_ENV !== "production" && We("Computed", ie);
    }
  if (r)
    for (const ie in r)
      Tc(r[ie], o, n, ie);
  if (l) {
    const ie = de(l) ? l.call(n) : l;
    Reflect.ownKeys(ie).forEach((fe) => {
      As(fe, ie[fe]);
    });
  }
  c && xr(c, e, "c");
  function Ue(ie, fe) {
    se(fe) ? fe.forEach((ot) => ie(ot.bind(n))) : fe && ie(fe.bind(n));
  }
  if (Ue(bf, u), Ue(ut, g), Ue(Sf, f), Ue(wf, m), Ue(_f, w), Ue(vf, x), Ue(kf, H), Ue(Ef, ge), Ue(xf, ne), Ue(wc, L), Ue(Cc, G), Ue(Cf, Se), se(Ce))
    if (Ce.length) {
      const ie = e.exposed || (e.exposed = {});
      Ce.forEach((fe) => {
        Object.defineProperty(ie, fe, {
          get: () => n[fe],
          set: (ot) => n[fe] = ot
        });
      });
    } else
      e.exposed || (e.exposed = {});
  O && e.render === st && (e.render = O), xe != null && (e.inheritAttrs = xe), Y && (e.components = Y), De && (e.directives = De);
}
function Ff(e, t, n = st) {
  se(e) && (e = Ga(e));
  for (const o in e) {
    const s = e[o];
    let a;
    Le(s) ? "default" in s ? a = Ge(
      s.from || o,
      s.default,
      !0
      /* treat default function as factory */
    ) : a = Ge(s.from || o) : a = Ge(s), Ye(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[o] = a, {}.NODE_ENV !== "production" && n("Inject", o);
  }
}
function xr(e, t, n) {
  Tt(
    se(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Tc(e, t, n, o) {
  const s = o.includes(".") ? mc(n, o) : () => n[o];
  if (Ve(e)) {
    const a = t[e];
    de(a) ? je(s, a) : {}.NODE_ENV !== "production" && U(`Invalid watch handler specified by key "${e}"`, a);
  } else if (de(e))
    je(s, e.bind(n));
  else if (Le(e))
    if (se(e))
      e.forEach((a) => Tc(a, t, n, o));
    else {
      const a = de(e.handler) ? e.handler.bind(n) : t[e.handler];
      de(a) ? je(s, a, e) : {}.NODE_ENV !== "production" && U(`Invalid watch handler specified by key "${e.handler}"`, a);
    }
  else
    ({}).NODE_ENV !== "production" && U(`Invalid watch option: "${o}"`, e);
}
function ki(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = e.appContext, r = a.get(t);
  let l;
  return r ? l = r : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach(
    (d) => Rs(l, d, i, !0)
  ), Rs(l, t, i)), Le(t) && a.set(t, l), l;
}
function Rs(e, t, n, o = !1) {
  const { mixins: s, extends: a } = t;
  a && Rs(e, a, n, !0), s && s.forEach(
    (i) => Rs(e, i, n, !0)
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
  data: Er,
  props: kr,
  emits: kr,
  // objects
  methods: Lo,
  computed: Lo,
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
  components: Lo,
  directives: Lo,
  // watch
  watch: Bf,
  // provide / inject
  provide: Er,
  inject: Of
};
function Er(e, t) {
  return t ? e ? function() {
    return $e(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Of(e, t) {
  return Lo(Ga(e), Ga(t));
}
function Ga(e) {
  if (se(e)) {
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
function Lo(e, t) {
  return e ? $e(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function kr(e, t) {
  return e ? se(e) && se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $e(
    /* @__PURE__ */ Object.create(null),
    Cr(e),
    Cr(t != null ? t : {})
  ) : t;
}
function Bf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = $e(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ft(e[o], t[o]);
  return n;
}
function Ac() {
  return {
    app: null,
    config: {
      isNativeTag: Ll,
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
    de(o) || (o = $e({}, o)), s != null && !Le(s) && ({}.NODE_ENV !== "production" && U("root props passed to app.mount() must be an object."), s = null);
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
      version: Br,
      get config() {
        return a.config;
      },
      set config(d) {
        ({}).NODE_ENV !== "production" && U(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return i.has(d) ? {}.NODE_ENV !== "production" && U("Plugin has already been applied to target app.") : d && de(d.install) ? (i.add(d), d.install(l, ...c)) : de(d) ? (i.add(d), d(l, ...c)) : {}.NODE_ENV !== "production" && U(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(d) {
        return a.mixins.includes(d) ? {}.NODE_ENV !== "production" && U(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : a.mixins.push(d), l;
      },
      component(d, c) {
        return {}.NODE_ENV !== "production" && Ya(d, a.config), c ? ({}.NODE_ENV !== "production" && a.components[d] && U(`Component "${d}" has already been registered in target app.`), a.components[d] = c, l) : a.components[d];
      },
      directive(d, c) {
        return {}.NODE_ENV !== "production" && hc(d), c ? ({}.NODE_ENV !== "production" && a.directives[d] && U(`Directive "${d}" has already been registered in target app.`), a.directives[d] = c, l) : a.directives[d];
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
            e(jt(g), d, u);
          }), c && t ? t(g, d) : e(g, d, u), r = !0, l._container = d, d.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = g.component, Xg(l, Br)), aa(g.component) || g.component.proxy;
        }
      },
      unmount() {
        r ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, Yg(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && U("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return {}.NODE_ENV !== "production" && d in a.provides && U(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), a.provides[d] = c, l;
      },
      runWithContext(d) {
        Vs = l;
        try {
          return d();
        } finally {
          Vs = null;
        }
      }
    };
    return l;
  };
}
let Vs = null;
function As(e, t) {
  if (!Xe)
    ({}).NODE_ENV !== "production" && U("provide() can only be used inside setup().");
  else {
    let n = Xe.provides;
    const o = Xe.parent && Xe.parent.provides;
    o === n && (n = Xe.provides = Object.create(o)), n[e] = t;
  }
}
function Ge(e, t, n = !1) {
  const o = Xe || Je;
  if (o || Vs) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Vs._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && de(t) ? t.call(o && o.proxy) : t;
    ({}).NODE_ENV !== "production" && U(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && U("inject() can only be used inside setup() or functional components.");
}
function Uf(e, t, n, o = !1) {
  const s = {}, a = {};
  Fs(a, na, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Dc(e, t, s, a);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  ({}).NODE_ENV !== "production" && Pc(t || {}, s, e), n ? e.props = o ? s : Xl(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
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
  } = e, r = me(s), [l] = e.propsOptions;
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
        if (ea(e.emitsOptions, g))
          continue;
        const f = t[g];
        if (l)
          if (ke(a, g))
            f !== a[g] && (a[g] = f, d = !0);
          else {
            const m = Vt(g);
            s[m] = Wa(
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
    Dc(e, t, s, a) && (d = !0);
    let c;
    for (const u in r)
      (!t || // for camelCase
      !ke(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = nn(u)) === u || !ke(t, c))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[u] = Wa(
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
        (!t || !ke(t, u)) && (delete a[u], d = !0);
  }
  d && zt(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Pc(t || {}, s, e);
}
function Dc(e, t, n, o) {
  const [s, a] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let l in t) {
      if (Es(l))
        continue;
      const d = t[l];
      let c;
      s && ke(s, c = Vt(l)) ? !a || !a.includes(c) ? n[c] = d : (r || (r = {}))[c] = d : ea(e.emitsOptions, l) || (!(l in o) || d !== o[l]) && (o[l] = d, i = !0);
    }
  if (a) {
    const l = me(n), d = r || Me;
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      n[u] = Wa(
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
function Wa(e, t, n, o, s, a) {
  const i = e[n];
  if (i != null) {
    const r = ke(i, "default");
    if (r && o === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && de(l)) {
        const { propsDefaults: d } = s;
        n in d ? o = d[n] : (co(s), o = d[n] = l.call(
          null,
          t
        ), Gn());
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
function Lc(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const a = e.props, i = {}, r = [];
  let l = !1;
  if (!de(e)) {
    const c = (u) => {
      l = !0;
      const [g, f] = Lc(u, t, !0);
      $e(i, g), f && r.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !l)
    return Le(e) && o.set(e, io), io;
  if (se(a))
    for (let c = 0; c < a.length; c++) {
      ({}).NODE_ENV !== "production" && !Ve(a[c]) && U("props must be strings when using array syntax.", a[c]);
      const u = Vt(a[c]);
      Tr(u) && (i[u] = Me);
    }
  else if (a) {
    ({}).NODE_ENV !== "production" && !Le(a) && U("invalid props options", a);
    for (const c in a) {
      const u = Vt(c);
      if (Tr(u)) {
        const g = a[c], f = i[u] = se(g) || de(g) ? { type: g } : $e({}, g);
        if (f) {
          const m = Dr(Boolean, f.type), w = Dr(String, f.type);
          f[
            0
            /* shouldCast */
          ] = m > -1, f[
            1
            /* shouldCastTrue */
          ] = w < 0 || m < w, (m > -1 || ke(f, "default")) && r.push(u);
        }
      }
    }
  }
  const d = [i, r];
  return Le(e) && o.set(e, d), d;
}
function Tr(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && U(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ka(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ar(e, t) {
  return Ka(e) === Ka(t);
}
function Dr(e, t) {
  return se(t) ? t.findIndex((n) => Ar(n, e)) : de(t) && Ar(t, e) ? 0 : -1;
}
function Pc(e, t, n) {
  const o = me(t), s = n.propsOptions[0];
  for (const a in s) {
    let i = s[a];
    i != null && zf(
      a,
      o[a],
      i,
      !ke(e, a) && !ke(e, nn(a))
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
      const d = se(s) ? s : [s], c = [];
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
const jf = /* @__PURE__ */ kn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Hf(e, t) {
  let n;
  const o = Ka(t);
  if (jf(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Le(e) : o === "Array" ? n = se(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function qf(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Wn).join(" | ")}`;
  const s = n[0], a = fi(t), i = Lr(t, s), r = Lr(t, a);
  return n.length === 1 && Pr(s) && !Gf(s, a) && (o += ` with value ${i}`), o += `, got ${a} `, Pr(a) && (o += `with value ${r}.`), o;
}
function Lr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Pr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Gf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Nc = (e) => e[0] === "_" || e === "$stable", Ti = (e) => se(e) ? e.map(Lt) : [Lt(e)], Wf = (e, t, n) => {
  if (t._n)
    return t;
  const o = b((...s) => ({}.NODE_ENV !== "production" && Xe && U(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ti(t(...s))), n);
  return o._c = !1, o;
}, Fc = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Nc(s))
      continue;
    const a = e[s];
    if (de(a))
      t[s] = Wf(s, a, o);
    else if (a != null) {
      ({}).NODE_ENV !== "production" && U(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Ti(a);
      t[s] = () => i;
    }
  }
}, Mc = (e, t) => {
  ({}).NODE_ENV !== "production" && !Qo(e.vnode) && U(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ti(t);
  e.slots.default = () => n;
}, Kf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = me(t), Fs(t, "_", n)) : Fc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Mc(e, t);
  Fs(e.slots, na, 1);
}, Xf = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let a = !0, i = Me;
  if (o.shapeFlag & 32) {
    const r = t._;
    r ? {}.NODE_ENV !== "production" && Hn ? ($e(s, t), zt(e, "set", "$slots")) : n && r === 1 ? a = !1 : ($e(s, t), !n && r === 1 && delete s._) : (a = !t.$stable, Fc(t, s)), i = t;
  } else
    t && (Mc(e, t), i = { default: 1 });
  if (a)
    for (const r in s)
      !Nc(r) && !(r in i) && delete s[r];
};
function Xa(e, t, n, o, s = !1) {
  if (se(e)) {
    e.forEach(
      (g, f) => Xa(
        g,
        t && (se(t) ? t[f] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (No(o) && !s)
    return;
  const a = o.shapeFlag & 4 ? aa(o.component) || o.component.proxy : o.el, i = s ? null : a, { i: r, r: l } = e;
  if ({}.NODE_ENV !== "production" && !r) {
    U(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, c = r.refs === Me ? r.refs = {} : r.refs, u = r.setupState;
  if (d != null && d !== l && (Ve(d) ? (c[d] = null, ke(u, d) && (u[d] = null)) : Ye(d) && (d.value = null)), de(l))
    tn(l, r, 12, [i, c]);
  else {
    const g = Ve(l), f = Ye(l);
    if (g || f) {
      const m = () => {
        if (e.f) {
          const w = g ? ke(u, l) ? u[l] : c[l] : l.value;
          s ? se(w) && di(w, a) : se(w) ? w.includes(a) || w.push(a) : g ? (c[l] = [a], ke(u, l) && (u[l] = c[l])) : (l.value = [a], e.k && (c[e.k] = l.value));
        } else
          g ? (c[l] = i, ke(u, l) && (u[l] = i)) : f ? (l.value = i, e.k && (c[e.k] = i)) : {}.NODE_ENV !== "production" && U("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (m.id = -1, _t(m, n)) : m();
    } else
      ({}).NODE_ENV !== "production" && U("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let wo, _n;
function Zt(e, t) {
  e.appContext.config.performance && zs() && _n.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && ef(e, t, zs() ? _n.now() : Date.now());
}
function Qt(e, t) {
  if (e.appContext.config.performance && zs()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    _n.mark(o), _n.measure(
      `<${ia(e, e.type)}> ${t}`,
      n,
      o
    ), _n.clearMarks(n), _n.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && tf(e, t, zs() ? _n.now() : Date.now());
}
function zs() {
  return wo !== void 0 || (typeof window != "undefined" && window.performance ? (wo = !0, _n = window.performance) : wo = !1), wo;
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
const _t = df;
function Jf(e) {
  return Zf(e);
}
function Zf(e, t) {
  Yf();
  const n = Ms();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && cc(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
  } = e, w = (h, v, E, P = null, A = null, R = null, q = !1, I = null, j = {}.NODE_ENV !== "production" && Hn ? !1 : !!v.dynamicChildren) => {
    if (h === v)
      return;
    h && !Bn(h, v) && (P = K(h), gt(h, A, R, !0), h = null), v.patchFlag === -2 && (j = !1, v.dynamicChildren = null);
    const { type: B, ref: te, shapeFlag: Q } = v;
    switch (B) {
      case es:
        x(h, v, E, P);
        break;
      case tt:
        k(h, v, E, P);
        break;
      case Ls:
        h == null ? L(v, E, P, q) : {}.NODE_ENV !== "production" && M(h, v, E, q);
        break;
      case we:
        De(
          h,
          v,
          E,
          P,
          A,
          R,
          q,
          I,
          j
        );
        break;
      default:
        Q & 1 ? ge(
          h,
          v,
          E,
          P,
          A,
          R,
          q,
          I,
          j
        ) : Q & 6 ? Ke(
          h,
          v,
          E,
          P,
          A,
          R,
          q,
          I,
          j
        ) : Q & 64 || Q & 128 ? B.process(
          h,
          v,
          E,
          P,
          A,
          R,
          q,
          I,
          j,
          Z
        ) : {}.NODE_ENV !== "production" && U("Invalid VNode type:", B, `(${typeof B})`);
    }
    te != null && A && Xa(te, h && h.ref, R, v || h, !v);
  }, x = (h, v, E, P) => {
    if (h == null)
      o(
        v.el = r(v.children),
        E,
        P
      );
    else {
      const A = v.el = h.el;
      v.children !== h.children && d(A, v.children);
    }
  }, k = (h, v, E, P) => {
    h == null ? o(
      v.el = l(v.children || ""),
      E,
      P
    ) : v.el = h.el;
  }, L = (h, v, E, P) => {
    [h.el, h.anchor] = m(
      h.children,
      v,
      E,
      P,
      h.el,
      h.anchor
    );
  }, M = (h, v, E, P) => {
    if (v.children !== h.children) {
      const A = g(h.anchor);
      O(h), [v.el, v.anchor] = m(
        v.children,
        E,
        A,
        P
      );
    } else
      v.el = h.el, v.anchor = h.anchor;
  }, G = ({ el: h, anchor: v }, E, P) => {
    let A;
    for (; h && h !== v; )
      A = g(h), o(h, E, P), h = A;
    o(v, E, P);
  }, O = ({ el: h, anchor: v }) => {
    let E;
    for (; h && h !== v; )
      E = g(h), s(h), h = E;
    s(v);
  }, ge = (h, v, E, P, A, R, q, I, j) => {
    q = q || v.type === "svg", h == null ? ne(
      v,
      E,
      P,
      A,
      R,
      q,
      I,
      j
    ) : Ce(
      h,
      v,
      A,
      R,
      q,
      I,
      j
    );
  }, ne = (h, v, E, P, A, R, q, I) => {
    let j, B;
    const { type: te, props: Q, shapeFlag: re, transition: ce, dirs: _e } = h;
    if (j = h.el = i(
      h.type,
      R,
      Q && Q.is,
      Q
    ), re & 8 ? c(j, h.children) : re & 16 && Se(
      h.children,
      j,
      null,
      P,
      A,
      R && te !== "foreignObject",
      q,
      I
    ), _e && Nn(h, null, P, "created"), H(j, h, h.scopeId, q, P), Q) {
      for (const N in Q)
        N !== "value" && !Es(N) && a(
          j,
          N,
          null,
          Q[N],
          R,
          h.children,
          P,
          A,
          T
        );
      "value" in Q && a(j, "value", null, Q.value), (B = Q.onVnodeBeforeMount) && It(B, P, h);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(j, "__vnode", {
      value: h,
      enumerable: !1
    }), Object.defineProperty(j, "__vueParentComponent", {
      value: P,
      enumerable: !1
    })), _e && Nn(h, null, P, "beforeMount");
    const Fe = (!A || A && !A.pendingBranch) && ce && !ce.persisted;
    Fe && ce.beforeEnter(j), o(j, v, E), ((B = Q && Q.onVnodeMounted) || Fe || _e) && _t(() => {
      B && It(B, P, h), Fe && ce.enter(j), _e && Nn(h, null, P, "mounted");
    }, A);
  }, H = (h, v, E, P, A) => {
    if (E && f(h, E), P)
      for (let R = 0; R < P.length; R++)
        f(h, P[R]);
    if (A) {
      let R = A.subTree;
      if ({}.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && (R = pc(R.children) || R), v === R) {
        const q = A.vnode;
        H(
          h,
          q,
          q.scopeId,
          q.slotScopeIds,
          A.parent
        );
      }
    }
  }, Se = (h, v, E, P, A, R, q, I, j = 0) => {
    for (let B = j; B < h.length; B++) {
      const te = h[B] = I ? pn(h[B]) : Lt(h[B]);
      w(
        null,
        te,
        v,
        E,
        P,
        A,
        R,
        q,
        I
      );
    }
  }, Ce = (h, v, E, P, A, R, q) => {
    const I = v.el = h.el;
    let { patchFlag: j, dynamicChildren: B, dirs: te } = v;
    j |= h.patchFlag & 16;
    const Q = h.props || Me, re = v.props || Me;
    let ce;
    E && Fn(E, !1), (ce = re.onVnodeBeforeUpdate) && It(ce, E, v, h), te && Nn(v, h, E, "beforeUpdate"), E && Fn(E, !0), {}.NODE_ENV !== "production" && Hn && (j = 0, q = !1, B = null);
    const _e = A && v.type !== "foreignObject";
    if (B ? (xe(
      h.dynamicChildren,
      B,
      I,
      E,
      P,
      _e,
      R
    ), {}.NODE_ENV !== "production" && Ds(h, v)) : q || ot(
      h,
      v,
      I,
      null,
      E,
      P,
      _e,
      R,
      !1
    ), j > 0) {
      if (j & 16)
        Y(
          I,
          v,
          Q,
          re,
          E,
          P,
          A
        );
      else if (j & 2 && Q.class !== re.class && a(I, "class", null, re.class, A), j & 4 && a(I, "style", Q.style, re.style, A), j & 8) {
        const Fe = v.dynamicProps;
        for (let N = 0; N < Fe.length; N++) {
          const ee = Fe[N], Ie = Q[ee], it = re[ee];
          (it !== Ie || ee === "value") && a(
            I,
            ee,
            Ie,
            it,
            A,
            h.children,
            E,
            P,
            T
          );
        }
      }
      j & 1 && h.children !== v.children && c(I, v.children);
    } else
      !q && B == null && Y(
        I,
        v,
        Q,
        re,
        E,
        P,
        A
      );
    ((ce = re.onVnodeUpdated) || te) && _t(() => {
      ce && It(ce, E, v, h), te && Nn(v, h, E, "updated");
    }, P);
  }, xe = (h, v, E, P, A, R, q) => {
    for (let I = 0; I < v.length; I++) {
      const j = h[I], B = v[I], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bn(j, B) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 70) ? u(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      w(
        j,
        B,
        te,
        null,
        P,
        A,
        R,
        q,
        !0
      );
    }
  }, Y = (h, v, E, P, A, R, q) => {
    if (E !== P) {
      if (E !== Me)
        for (const I in E)
          !Es(I) && !(I in P) && a(
            h,
            I,
            E[I],
            null,
            q,
            v.children,
            A,
            R,
            T
          );
      for (const I in P) {
        if (Es(I))
          continue;
        const j = P[I], B = E[I];
        j !== B && I !== "value" && a(
          h,
          I,
          B,
          j,
          q,
          v.children,
          A,
          R,
          T
        );
      }
      "value" in P && a(h, "value", E.value, P.value);
    }
  }, De = (h, v, E, P, A, R, q, I, j) => {
    const B = v.el = h ? h.el : r(""), te = v.anchor = h ? h.anchor : r("");
    let { patchFlag: Q, dynamicChildren: re, slotScopeIds: ce } = v;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Hn || Q & 2048) && (Q = 0, j = !1, re = null), ce && (I = I ? I.concat(ce) : ce), h == null ? (o(B, E, P), o(te, E, P), Se(
      v.children,
      E,
      te,
      A,
      R,
      q,
      I,
      j
    )) : Q > 0 && Q & 64 && re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (xe(
      h.dynamicChildren,
      re,
      E,
      A,
      R,
      q,
      I
    ), {}.NODE_ENV !== "production" ? Ds(h, v) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (v.key != null || A && v === A.subTree) && Ds(
        h,
        v,
        !0
        /* shallow */
      )
    )) : ot(
      h,
      v,
      E,
      te,
      A,
      R,
      q,
      I,
      j
    );
  }, Ke = (h, v, E, P, A, R, q, I, j) => {
    v.slotScopeIds = I, h == null ? v.shapeFlag & 512 ? A.ctx.activate(
      v,
      E,
      P,
      q,
      j
    ) : We(
      v,
      E,
      P,
      A,
      R,
      q,
      j
    ) : Ue(h, v, j);
  }, We = (h, v, E, P, A, R, q) => {
    const I = h.component = ap(
      h,
      P,
      A
    );
    if ({}.NODE_ENV !== "production" && I.type.__hmrId && qg(I), {}.NODE_ENV !== "production" && (ks(h), Zt(I, "mount")), Qo(h) && (I.ctx.renderer = Z), {}.NODE_ENV !== "production" && Zt(I, "init"), rp(I), {}.NODE_ENV !== "production" && Qt(I, "init"), I.asyncDep) {
      if (A && A.registerDep(I, ie), !h.el) {
        const j = I.subTree = p(tt);
        k(null, j, v, E);
      }
      return;
    }
    ie(
      I,
      h,
      v,
      E,
      A,
      R,
      q
    ), {}.NODE_ENV !== "production" && (Ts(), Qt(I, "mount"));
  }, Ue = (h, v, E) => {
    const P = v.component = h.component;
    if (lf(h, v, E))
      if (P.asyncDep && !P.asyncResolved) {
        ({}).NODE_ENV !== "production" && ks(v), fe(P, v, E), {}.NODE_ENV !== "production" && Ts();
        return;
      } else
        P.next = v, jg(P.update), P.update();
    else
      v.el = h.el, P.vnode = v;
  }, ie = (h, v, E, P, A, R, q) => {
    const I = () => {
      if (h.isMounted) {
        let { next: te, bu: Q, u: re, parent: ce, vnode: _e } = h, Fe = te, N;
        ({}).NODE_ENV !== "production" && ks(te || h.vnode), Fn(h, !1), te ? (te.el = _e.el, fe(h, te, q)) : te = _e, Q && no(Q), (N = te.props && te.props.onVnodeBeforeUpdate) && It(N, ce, te, _e), Fn(h, !0), {}.NODE_ENV !== "production" && Zt(h, "render");
        const ee = _a(h);
        ({}).NODE_ENV !== "production" && Qt(h, "render");
        const Ie = h.subTree;
        h.subTree = ee, {}.NODE_ENV !== "production" && Zt(h, "patch"), w(
          Ie,
          ee,
          // parent may have changed if it's in a teleport
          u(Ie.el),
          // anchor may have changed if it's in a fragment
          K(Ie),
          h,
          A,
          R
        ), {}.NODE_ENV !== "production" && Qt(h, "patch"), te.el = ee.el, Fe === null && cf(h, ee.el), re && _t(re, A), (N = te.props && te.props.onVnodeUpdated) && _t(
          () => It(N, ce, te, _e),
          A
        ), {}.NODE_ENV !== "production" && uc(h), {}.NODE_ENV !== "production" && Ts();
      } else {
        let te;
        const { el: Q, props: re } = v, { bm: ce, m: _e, parent: Fe } = h, N = No(v);
        if (Fn(h, !1), ce && no(ce), !N && (te = re && re.onVnodeBeforeMount) && It(te, Fe, v), Fn(h, !0), Q && Be) {
          const ee = () => {
            ({}).NODE_ENV !== "production" && Zt(h, "render"), h.subTree = _a(h), {}.NODE_ENV !== "production" && Qt(h, "render"), {}.NODE_ENV !== "production" && Zt(h, "hydrate"), Be(
              Q,
              h.subTree,
              h,
              A,
              null
            ), {}.NODE_ENV !== "production" && Qt(h, "hydrate");
          };
          N ? v.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && ee()
          ) : ee();
        } else {
          ({}).NODE_ENV !== "production" && Zt(h, "render");
          const ee = h.subTree = _a(h);
          ({}).NODE_ENV !== "production" && Qt(h, "render"), {}.NODE_ENV !== "production" && Zt(h, "patch"), w(
            null,
            ee,
            E,
            P,
            h,
            A,
            R
          ), {}.NODE_ENV !== "production" && Qt(h, "patch"), v.el = ee.el;
        }
        if (_e && _t(_e, A), !N && (te = re && re.onVnodeMounted)) {
          const ee = v;
          _t(
            () => It(te, Fe, ee),
            A
          );
        }
        (v.shapeFlag & 256 || Fe && No(Fe.vnode) && Fe.vnode.shapeFlag & 256) && h.a && _t(h.a, A), h.isMounted = !0, {}.NODE_ENV !== "production" && Jg(h), v = E = P = null;
      }
    }, j = h.effect = new hi(
      I,
      () => Qs(B),
      h.scope
      // track it in component's effect scope
    ), B = h.update = () => j.run();
    B.id = h.uid, Fn(h, !0), {}.NODE_ENV !== "production" && (j.onTrack = h.rtc ? (te) => no(h.rtc, te) : void 0, j.onTrigger = h.rtg ? (te) => no(h.rtg, te) : void 0, B.ownerInstance = h), B();
  }, fe = (h, v, E) => {
    v.component = h;
    const P = h.vnode.props;
    h.vnode = v, h.next = null, Vf(h, v.props, P, E), Xf(h, v.children, E), Xn(), _r(), Yn();
  }, ot = (h, v, E, P, A, R, q, I, j = !1) => {
    const B = h && h.children, te = h ? h.shapeFlag : 0, Q = v.children, { patchFlag: re, shapeFlag: ce } = v;
    if (re > 0) {
      if (re & 128) {
        yt(
          B,
          Q,
          E,
          P,
          A,
          R,
          q,
          I,
          j
        );
        return;
      } else if (re & 256) {
        Xt(
          B,
          Q,
          E,
          P,
          A,
          R,
          q,
          I,
          j
        );
        return;
      }
    }
    ce & 8 ? (te & 16 && T(B, A, R), Q !== B && c(E, Q)) : te & 16 ? ce & 16 ? yt(
      B,
      Q,
      E,
      P,
      A,
      R,
      q,
      I,
      j
    ) : T(B, A, R, !0) : (te & 8 && c(E, ""), ce & 16 && Se(
      Q,
      E,
      P,
      A,
      R,
      q,
      I,
      j
    ));
  }, Xt = (h, v, E, P, A, R, q, I, j) => {
    h = h || io, v = v || io;
    const B = h.length, te = v.length, Q = Math.min(B, te);
    let re;
    for (re = 0; re < Q; re++) {
      const ce = v[re] = j ? pn(v[re]) : Lt(v[re]);
      w(
        h[re],
        ce,
        E,
        null,
        A,
        R,
        q,
        I,
        j
      );
    }
    B > te ? T(
      h,
      A,
      R,
      !0,
      !1,
      Q
    ) : Se(
      v,
      E,
      P,
      A,
      R,
      q,
      I,
      j,
      Q
    );
  }, yt = (h, v, E, P, A, R, q, I, j) => {
    let B = 0;
    const te = v.length;
    let Q = h.length - 1, re = te - 1;
    for (; B <= Q && B <= re; ) {
      const ce = h[B], _e = v[B] = j ? pn(v[B]) : Lt(v[B]);
      if (Bn(ce, _e))
        w(
          ce,
          _e,
          E,
          null,
          A,
          R,
          q,
          I,
          j
        );
      else
        break;
      B++;
    }
    for (; B <= Q && B <= re; ) {
      const ce = h[Q], _e = v[re] = j ? pn(v[re]) : Lt(v[re]);
      if (Bn(ce, _e))
        w(
          ce,
          _e,
          E,
          null,
          A,
          R,
          q,
          I,
          j
        );
      else
        break;
      Q--, re--;
    }
    if (B > Q) {
      if (B <= re) {
        const ce = re + 1, _e = ce < te ? v[ce].el : P;
        for (; B <= re; )
          w(
            null,
            v[B] = j ? pn(v[B]) : Lt(v[B]),
            E,
            _e,
            A,
            R,
            q,
            I,
            j
          ), B++;
      }
    } else if (B > re)
      for (; B <= Q; )
        gt(h[B], A, R, !0), B++;
    else {
      const ce = B, _e = B, Fe = /* @__PURE__ */ new Map();
      for (B = _e; B <= re; B++) {
        const Qe = v[B] = j ? pn(v[B]) : Lt(v[B]);
        Qe.key != null && ({}.NODE_ENV !== "production" && Fe.has(Qe.key) && U(
          "Duplicate keys found during update:",
          JSON.stringify(Qe.key),
          "Make sure keys are unique."
        ), Fe.set(Qe.key, B));
      }
      let N, ee = 0;
      const Ie = re - _e + 1;
      let it = !1, xt = 0;
      const Yt = new Array(Ie);
      for (B = 0; B < Ie; B++)
        Yt[B] = 0;
      for (B = ce; B <= Q; B++) {
        const Qe = h[B];
        if (ee >= Ie) {
          gt(Qe, A, R, !0);
          continue;
        }
        let ht;
        if (Qe.key != null)
          ht = Fe.get(Qe.key);
        else
          for (N = _e; N <= re; N++)
            if (Yt[N - _e] === 0 && Bn(Qe, v[N])) {
              ht = N;
              break;
            }
        ht === void 0 ? gt(Qe, A, R, !0) : (Yt[ht - _e] = B + 1, ht >= xt ? xt = ht : it = !0, w(
          Qe,
          v[ht],
          E,
          null,
          A,
          R,
          q,
          I,
          j
        ), ee++);
      }
      const So = it ? Qf(Yt) : io;
      for (N = So.length - 1, B = Ie - 1; B >= 0; B--) {
        const Qe = _e + B, ht = v[Qe], ps = Qe + 1 < te ? v[Qe + 1].el : P;
        Yt[B] === 0 ? w(
          null,
          ht,
          E,
          ps,
          A,
          R,
          q,
          I,
          j
        ) : it && (N < 0 || B !== So[N] ? dt(ht, E, ps, 2) : N--);
      }
    }
  }, dt = (h, v, E, P, A = null) => {
    const { el: R, type: q, transition: I, children: j, shapeFlag: B } = h;
    if (B & 6) {
      dt(h.component.subTree, v, E, P);
      return;
    }
    if (B & 128) {
      h.suspense.move(v, E, P);
      return;
    }
    if (B & 64) {
      q.move(h, v, E, Z);
      return;
    }
    if (q === we) {
      o(R, v, E);
      for (let Q = 0; Q < j.length; Q++)
        dt(j[Q], v, E, P);
      o(h.anchor, v, E);
      return;
    }
    if (q === Ls) {
      G(h, v, E);
      return;
    }
    if (P !== 2 && B & 1 && I)
      if (P === 0)
        I.beforeEnter(R), o(R, v, E), _t(() => I.enter(R), A);
      else {
        const { leave: Q, delayLeave: re, afterLeave: ce } = I, _e = () => o(R, v, E), Fe = () => {
          Q(R, () => {
            _e(), ce && ce();
          });
        };
        re ? re(R, _e, Fe) : Fe();
      }
    else
      o(R, v, E);
  }, gt = (h, v, E, P = !1, A = !1) => {
    const {
      type: R,
      props: q,
      ref: I,
      children: j,
      dynamicChildren: B,
      shapeFlag: te,
      patchFlag: Q,
      dirs: re
    } = h;
    if (I != null && Xa(I, null, E, h, !0), te & 256) {
      v.ctx.deactivate(h);
      return;
    }
    const ce = te & 1 && re, _e = !No(h);
    let Fe;
    if (_e && (Fe = q && q.onVnodeBeforeUnmount) && It(Fe, v, h), te & 6)
      Bt(h.component, E, P);
    else {
      if (te & 128) {
        h.suspense.unmount(E, P);
        return;
      }
      ce && Nn(h, null, v, "beforeUnmount"), te & 64 ? h.type.remove(
        h,
        v,
        E,
        A,
        Z,
        P
      ) : B && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== we || Q > 0 && Q & 64) ? T(
        B,
        v,
        E,
        !1,
        !0
      ) : (R === we && Q & 384 || !A && te & 16) && T(j, v, E), P && At(h);
    }
    (_e && (Fe = q && q.onVnodeUnmounted) || ce) && _t(() => {
      Fe && It(Fe, v, h), ce && Nn(h, null, v, "unmounted");
    }, E);
  }, At = (h) => {
    const { type: v, el: E, anchor: P, transition: A } = h;
    if (v === we) {
      ({}).NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && A && !A.persisted ? h.children.forEach((q) => {
        q.type === tt ? s(q.el) : At(q);
      }) : Ln(E, P);
      return;
    }
    if (v === Ls) {
      O(h);
      return;
    }
    const R = () => {
      s(E), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (h.shapeFlag & 1 && A && !A.persisted) {
      const { leave: q, delayLeave: I } = A, j = () => q(E, R);
      I ? I(h.el, R, j) : j();
    } else
      R();
  }, Ln = (h, v) => {
    let E;
    for (; h !== v; )
      E = g(h), s(h), h = E;
    s(v);
  }, Bt = (h, v, E) => {
    ({}).NODE_ENV !== "production" && h.type.__hmrId && Gg(h);
    const { bum: P, scope: A, update: R, subTree: q, um: I } = h;
    P && no(P), A.stop(), R && (R.active = !1, gt(q, h, v, E)), I && _t(I, v), _t(() => {
      h.isUnmounted = !0;
    }, v), v && v.pendingBranch && !v.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === v.pendingId && (v.deps--, v.deps === 0 && v.resolve()), {}.NODE_ENV !== "production" && Qg(h);
  }, T = (h, v, E, P = !1, A = !1, R = 0) => {
    for (let q = R; q < h.length; q++)
      gt(h[q], v, E, P, A);
  }, K = (h) => h.shapeFlag & 6 ? K(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : g(h.anchor || h.el), X = (h, v, E) => {
    h == null ? v._vnode && gt(v._vnode, null, null, !0) : w(v._vnode || null, h, v, null, null, null, E), _r(), ic(), v._vnode = h;
  }, Z = {
    p: w,
    um: gt,
    m: dt,
    r: At,
    mt: We,
    mc: Se,
    pc: ot,
    pbc: xe,
    n: K,
    o: e
  };
  let Ee, Be;
  return t && ([Ee, Be] = t(
    Z
  )), {
    render: X,
    hydrate: Ee,
    createApp: $f(X, Ee)
  };
}
function Fn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ds(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (se(o) && se(s))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let r = s[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = pn(s[a]), r.el = i.el), n || Ds(i, r)), r.type === es && (r.el = i.el), {}.NODE_ENV !== "production" && r.type === tt && !r.el && (r.el = i.el);
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
const ep = (e) => e.__isTeleport, we = Symbol.for("v-fgt"), es = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), Ls = Symbol.for("v-stc"), Fo = [];
let Pt = null;
function y(e = !1) {
  Fo.push(Pt = e ? null : []);
}
function tp() {
  Fo.pop(), Pt = Fo[Fo.length - 1] || null;
}
let zo = 1;
function Nr(e) {
  zo += e;
}
function Oc(e) {
  return e.dynamicChildren = zo > 0 ? Pt || io : null, tp(), zo > 0 && Pt && Pt.push(e), e;
}
function D(e, t, n, o, s, a) {
  return Oc(
    C(
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
  return Oc(
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
function lo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bn(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && oo.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const np = (...e) => Ic(
  ...e
), na = "__vInternal", Bc = ({ key: e }) => e != null ? e : null, Ps = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ve(e) || Ye(e) || de(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function C(e, t = null, n = null, o = 0, s = null, a = e === we ? 0 : 1, i = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Bc(t),
    ref: t && Ps(t),
    scopeId: fc,
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
  return r ? (Ai(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ve(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && U("VNode created with invalid key (NaN). VNode type:", l.type), zo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Pt.push(l), l;
}
const p = {}.NODE_ENV !== "production" ? np : Ic;
function Ic(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === xc) && ({}.NODE_ENV !== "production" && !e && U(`Invalid vnode type when creating vnode: ${e}.`), e = tt), lo(e)) {
    const r = jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ai(r, n), zo > 0 && !a && Pt && (r.shapeFlag & 6 ? Pt[Pt.indexOf(e)] = r : Pt.push(r)), r.patchFlag |= -2, r;
  }
  if (zc(e) && (e = e.__vccOpts), t) {
    t = oa(t);
    let { class: r, style: l } = t;
    r && !Ve(r) && (t.class = pe(r)), Le(l) && ($a(l) && !se(l) && (l = $e({}, l)), t.style = nt(l));
  }
  const i = Ve(e) ? 1 : uf(e) ? 128 : ep(e) ? 64 : Le(e) ? 4 : de(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && $a(e) && (e = me(e), U(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), C(
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
function oa(e) {
  return e ? $a(e) || na in e ? $e({}, e) : e : null;
}
function jt(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: i } = e, r = t ? sa(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: r,
    key: r && Bc(r),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? se(s) ? s.concat(Ps(t)) : [s, Ps(t)] : Ps(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && a === -1 && se(i) ? i.map($c) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? a === -1 ? 16 : a | 16 : a,
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
function $c(e) {
  const t = jt(e);
  return se(e.children) && (t.children = e.children.map($c)), t;
}
function jo(e = " ", t = 0) {
  return p(es, null, e, t);
}
function oe(e = "", t = !1) {
  return t ? (y(), F(tt, null, e)) : p(tt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? p(tt) : se(e) ? p(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? pn(e) : p(es, null, String(e));
}
function pn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jt(e);
}
function Ai(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (se(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ai(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(na in t) ? t._ctx = Je : s === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    de(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [jo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function sa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = pe([t.class, o.class]));
      else if (s === "style")
        t.style = nt([t.style, o.style]);
      else if (Yo(s)) {
        const a = t[s], i = o[s];
        i && a !== i && !(se(a) && a.includes(i)) && (t[s] = a ? [].concat(a, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function It(e, t, n, o = null) {
  Tt(e, t, 7, [
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
    scope: new Bl(
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
    propsOptions: Lc(o, s),
    emitsOptions: gc(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Me,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Me,
    data: Me,
    props: Me,
    attrs: Me,
    slots: Me,
    refs: Me,
    setupState: Me,
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
  return {}.NODE_ENV !== "production" ? a.ctx = Af(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = of.bind(null, a), e.ce && e.ce(a), a;
}
let Xe = null;
const Di = () => Xe || Je;
let Li, Qn, Fr = "__VUE_INSTANCE_SETTERS__";
(Qn = Ms()[Fr]) || (Qn = Ms()[Fr] = []), Qn.push((e) => Xe = e), Li = (e) => {
  Qn.length > 1 ? Qn.forEach((t) => t(e)) : Qn[0](e);
};
const co = (e) => {
  Li(e), e.scope.on();
}, Gn = () => {
  Xe && Xe.scope.off(), Li(null);
}, ip = /* @__PURE__ */ kn("slot,component");
function Ya(e, t) {
  const n = t.isNativeTag || Ll;
  (ip(e) || n(e)) && U(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Uc(e) {
  return e.vnode.shapeFlag & 4;
}
let Ho = !1;
function rp(e, t = !1) {
  Ho = t;
  const { props: n, children: o } = e.vnode, s = Uc(e);
  Uf(e, n, s, t), Kf(e, o);
  const a = s ? lp(e, t) : void 0;
  return Ho = !1, a;
}
function lp(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && Ya(o.name, e.appContext.config), o.components) {
      const a = Object.keys(o.components);
      for (let i = 0; i < a.length; i++)
        Ya(a[i], e.appContext.config);
    }
    if (o.directives) {
      const a = Object.keys(o.directives);
      for (let i = 0; i < a.length; i++)
        hc(a[i]);
    }
    o.compilerOptions && Rc() && U(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Jl(new Proxy(e.ctx, kc)), {}.NODE_ENV !== "production" && Df(e);
  const { setup: s } = o;
  if (s) {
    const a = e.setupContext = s.length > 1 ? up(e) : null;
    co(e), Xn();
    const i = tn(
      s,
      e,
      0,
      [{}.NODE_ENV !== "production" ? Ao(e.props) : e.props, a]
    );
    if (Yn(), Gn(), gi(i)) {
      if (i.then(Gn, Gn), t)
        return i.then((r) => {
          Mr(e, r, t);
        }).catch((r) => {
          Zs(r, e, 0);
        });
      if (e.asyncDep = i, {}.NODE_ENV !== "production" && !e.suspense) {
        const r = (n = o.name) != null ? n : "Anonymous";
        U(
          `Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Mr(e, i, t);
  } else
    Vc(e, t);
}
function Mr(e, t, n) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Le(t) ? ({}.NODE_ENV !== "production" && lo(t) && U(
    "setup() should not return VNodes directly - return a render function instead."
  ), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = tc(t), {}.NODE_ENV !== "production" && Lf(e)) : {}.NODE_ENV !== "production" && t !== void 0 && U(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Vc(e, n);
}
let Ja;
const Rc = () => !Ja;
function Vc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Ja && !o.render) {
      const s = o.template || ki(e).template;
      if (s) {
        ({}).NODE_ENV !== "production" && Zt(e, "compile");
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: r, compilerOptions: l } = o, d = $e(
          $e(
            {
              isCustomElement: a,
              delimiters: r
            },
            i
          ),
          l
        );
        o.render = Ja(s, d), {}.NODE_ENV !== "production" && Qt(e, "compile");
      }
    }
    e.render = o.render || st;
  }
  co(e), Xn(), Nf(e), Yn(), Gn(), {}.NODE_ENV !== "production" && !o.render && e.render === st && !t && (o.template ? U(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : U("Component is missing template or render function."));
}
function Or(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return $s(), at(e, "get", "$attrs"), t[n];
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
      o === "object" && (se(n) ? o = "array" : Ye(n) && (o = "ref")), o !== "object" && U(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Or(e);
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
      return Or(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function aa(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(tc(Jl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in qn)
          return qn[n](e);
      },
      has(t, n) {
        return n in t || n in qn;
      }
    }));
}
const dp = /(?:^|[-_])(\w)/g, gp = (e) => e.replace(dp, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Pi(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ia(e, t, n = !1) {
  let o = Pi(t);
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
function zc(e) {
  return de(e) && "__vccOpts" in e;
}
const S = (e, t) => Mg(e, t, Ho);
function qo(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Le(t) && !se(t) ? lo(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && lo(n) && (n = [n]), p(e, t, n));
}
const fp = Symbol.for("v-scx"), pp = () => {
  {
    const e = Ge(fp);
    return e || {}.NODE_ENV !== "production" && U(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ba(e) {
  return !!(e && e.__v_isShallow);
}
function mp() {
  if ({}.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(u) {
      return Le(u) ? u.__isVue ? ["div", e, "VueInstance"] : Ye(u) ? [
        "div",
        {},
        ["span", e, c(u)],
        "<",
        r(u.value),
        ">"
      ] : zn(u) ? [
        "div",
        {},
        ["span", e, ba(u) ? "ShallowReactive" : "Reactive"],
        "<",
        r(u),
        `>${wn(u) ? " (readonly)" : ""}`
      ] : wn(u) ? [
        "div",
        {},
        ["span", e, ba(u) ? "ShallowReadonly" : "Readonly"],
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
    u.type.props && u.props && g.push(i("props", me(u.props))), u.setupState !== Me && g.push(i("setup", u.setupState)), u.data !== Me && g.push(i("data", me(u.data)));
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
    return g = $e({}, g), Object.keys(g).length ? [
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : Le(u) ? ["object", { object: g ? me(u) : u }] : ["span", n, String(u)];
  }
  function l(u, g) {
    const f = u.type;
    if (de(f))
      return;
    const m = {};
    for (const w in u.ctx)
      d(f, w, g) && (m[w] = u.ctx[w]);
    return m;
  }
  function d(u, g, f) {
    const m = u[f];
    if (se(m) && m.includes(g) || Le(m) && g in m || u.extends && d(u.extends, g, f) || u.mixins && u.mixins.some((w) => d(w, g, f)))
      return !0;
  }
  function c(u) {
    return ba(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Br = "3.3.4", hp = "http://www.w3.org/2000/svg", In = typeof document != "undefined" ? document : null, Ir = In && /* @__PURE__ */ In.createElement("template"), _p = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? In.createElementNS(hp, e) : In.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => In.createTextNode(e),
  createComment: (e) => In.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => In.querySelector(e),
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
      Ir.innerHTML = o ? `<svg>${e}</svg>` : e;
      const r = Ir.content;
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
  const o = e.style, s = Ve(n);
  if (n && !s) {
    if (t && !Ve(t))
      for (const a in t)
        n[a] == null && Za(o, a, "");
    for (const a in n)
      Za(o, a, n[a]);
  } else {
    const a = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = a);
  }
}
const bp = /[^\\];\s*$/, $r = /\s*!important$/;
function Za(e, t, n) {
  if (se(n))
    n.forEach((o) => Za(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && bp.test(n) && U(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Sp(e, t);
    $r.test(n) ? e.setProperty(
      nn(o),
      n.replace($r, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ur = ["Webkit", "Moz", "ms"], Sa = {};
function Sp(e, t) {
  const n = Sa[t];
  if (n)
    return n;
  let o = Vt(t);
  if (o !== "filter" && o in e)
    return Sa[t] = o;
  o = Wn(o);
  for (let s = 0; s < Ur.length; s++) {
    const a = Ur[s] + o;
    if (a in e)
      return Sa[t] = a;
  }
  return t;
}
const Rr = "http://www.w3.org/1999/xlink";
function wp(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Rr, t.slice(6, t.length)) : e.setAttributeNS(Rr, t, n);
  else {
    const a = Zd(t);
    n == null || a && !Ml(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
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
    d === "boolean" ? n = Ml(n) : n == null && d === "string" ? (n = "", l = !0) : d === "number" && (n = 0, l = !0);
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
function jc(e, t, n, o) {
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
      jc(e, r, d, l);
    } else
      i && (xp(e, r, i, l), a[t] = void 0);
  }
}
const Vr = /(?:Once|Passive|Capture)$/;
function kp(e) {
  let t;
  if (Vr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Vr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nn(e.slice(2)), t];
}
let wa = 0;
const Tp = /* @__PURE__ */ Promise.resolve(), Ap = () => wa || (Tp.then(() => wa = 0), wa = Date.now());
function Dp(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Tt(
      Lp(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Ap(), n;
}
function Lp(e, t) {
  if (se(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const zr = /^on[a-z]/, Pp = (e, t, n, o, s = !1, a, i, r, l) => {
  t === "class" ? vp(e, o, s) : t === "style" ? yp(e, n, o) : Yo(t) ? Ns(t) || Ep(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Np(e, t, o, s)) ? Cp(
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
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && zr.test(t) && de(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || zr.test(t) && Ve(n) ? !1 : t in e;
}
const rn = "transition", Co = "animation", vn = (e, { slots: t }) => qo(hf, Fp(e), t);
vn.displayName = "Transition";
const Hc = {
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
vn.props = /* @__PURE__ */ $e(
  {},
  _c,
  Hc
);
const Mn = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, jr = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Fp(e) {
  const t = {};
  for (const Y in e)
    Y in Hc || (t[Y] = e[Y]);
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
  } = e, m = Mp(s), w = m && m[0], x = m && m[1], {
    onBeforeEnter: k,
    onEnter: L,
    onEnterCancelled: M,
    onLeave: G,
    onLeaveCancelled: O,
    onBeforeAppear: ge = k,
    onAppear: ne = L,
    onAppearCancelled: H = M
  } = t, Se = (Y, De, Ke) => {
    On(Y, De ? c : r), On(Y, De ? d : i), Ke && Ke();
  }, Ce = (Y, De) => {
    Y._isLeaving = !1, On(Y, u), On(Y, f), On(Y, g), De && De();
  }, xe = (Y) => (De, Ke) => {
    const We = Y ? ne : L, Ue = () => Se(De, Y, Ke);
    Mn(We, [De, Ue]), Hr(() => {
      On(De, Y ? l : a), ln(De, Y ? c : r), jr(We) || qr(De, o, w, Ue);
    });
  };
  return $e(t, {
    onBeforeEnter(Y) {
      Mn(k, [Y]), ln(Y, a), ln(Y, i);
    },
    onBeforeAppear(Y) {
      Mn(ge, [Y]), ln(Y, l), ln(Y, d);
    },
    onEnter: xe(!1),
    onAppear: xe(!0),
    onLeave(Y, De) {
      Y._isLeaving = !0;
      const Ke = () => Ce(Y, De);
      ln(Y, u), Ip(), ln(Y, g), Hr(() => {
        Y._isLeaving && (On(Y, u), ln(Y, f), jr(G) || qr(Y, o, x, Ke));
      }), Mn(G, [Y, Ke]);
    },
    onEnterCancelled(Y) {
      Se(Y, !1), Mn(M, [Y]);
    },
    onAppearCancelled(Y) {
      Se(Y, !0), Mn(H, [Y]);
    },
    onLeaveCancelled(Y) {
      Ce(Y), Mn(O, [Y]);
    }
  });
}
function Mp(e) {
  if (e == null)
    return null;
  if (Le(e))
    return [Ca(e.enter), Ca(e.leave)];
  {
    const t = Ca(e);
    return [t, t];
  }
}
function Ca(e) {
  const t = zd(e);
  return {}.NODE_ENV !== "production" && Ug(t, "<transition> explicit duration"), t;
}
function ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function On(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Hr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Op = 0;
function qr(e, t, n, o) {
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
  const n = window.getComputedStyle(e), o = (m) => (n[m] || "").split(", "), s = o(`${rn}Delay`), a = o(`${rn}Duration`), i = Gr(s, a), r = o(`${Co}Delay`), l = o(`${Co}Duration`), d = Gr(r, l);
  let c = null, u = 0, g = 0;
  t === rn ? i > 0 && (c = rn, u = i, g = a.length) : t === Co ? d > 0 && (c = Co, u = d, g = l.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? rn : Co : null, g = c ? c === rn ? a.length : l.length : 0);
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
function Gr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Wr(n) + Wr(e[o])));
}
function Wr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ip() {
  return document.body.offsetHeight;
}
const Kr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return se(t) ? (n) => no(t, n) : t;
}, $p = {
  created(e, { value: t }, n) {
    e.checked = Os(t, n.props.value), e._assign = Kr(n), jc(e, "change", () => {
      e._assign(Up(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e._assign = Kr(o), t !== n && (e.checked = Os(t, o.props.value));
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
}, so = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const o = nn(n.key);
  if (t.some((s) => s === o || zp[s] === o))
    return e(n);
}, Ni = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : xo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), xo(e, !0), o.enter(e)) : o.leave(e, () => {
      xo(e, !1);
    }) : xo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    xo(e, t);
  }
};
function xo(e, t) {
  e.style.display = t ? e._vod : "none";
}
const jp = /* @__PURE__ */ $e({ patchProp: Pp }, _p);
let Xr;
function Hp() {
  return Xr || (Xr = Jf(jp));
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
    !de(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function qp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Xd(t) || Yd(t),
    writable: !1
  });
}
function Gp(e) {
  if (Rc()) {
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
  if (Ve(e)) {
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
const z = (e, t) => {
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
  return y(), D("span", {
    class: pe(["mw-ui-icon notranslate", a.classes])
  }, [
    (y(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (y(), D("title", {
        key: 0,
        id: n.iconName
      }, ae(n.iconName), 9, Jp)) : oe("", !0),
      C("g", { fill: n.iconColor }, [
        C("path", { d: a.iconImagePath }, null, 8, Qp)
      ], 8, Zp)
    ], 8, Yp))
  ], 2);
}
const He = /* @__PURE__ */ z(Xp, [["render", em]]);
const tm = {
  name: "MwButton",
  components: {
    MwIcon: He
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
  const i = _("mw-icon");
  return y(), F(_o(a.component), {
    class: pe(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: b(() => [
      ze(e.$slots, "default", {}, () => [
        C("span", nm, [
          n.icon ? (y(), F(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: pe(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : oe("", !0),
          !a.isIcon && n.label ? (y(), D("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: ae(n.label)
          }, null, 8, om)) : oe("", !0),
          n.indicator ? (y(), F(i, sa({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [gn(a.indicatorClickEvent)]: t[0] || (t[0] = et((r) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : oe("", !0)
        ])
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const he = /* @__PURE__ */ z(tm, [["render", sm]]);
const am = {
  name: "MwButtonGroup",
  components: {
    MwButton: he
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
  const i = _("mw-button");
  return y(), D("div", im, [
    (y(!0), D(we, null, Ze(n.items, (r) => (y(), F(i, sa({
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
const ts = /* @__PURE__ */ z(am, [["render", rm]]);
const lm = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: ts },
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
  const i = _("mw-button-group");
  return y(), D("footer", cm, [
    C("div", um, [
      ze(e.$slots, "default", {}, () => [
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
const gm = /* @__PURE__ */ z(lm, [["render", dm]]);
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
  return y(), D("div", pm, [
    ze(e.$slots, "header", {}, () => [
      n.title ? (y(), D("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: ae(n.title)
      }, null, 8, mm)) : oe("", !0)
    ]),
    C("div", hm, [
      ze(e.$slots, "default")
    ])
  ]);
}
const Wt = /* @__PURE__ */ z(fm, [["render", _m]]);
const vm = {}, ym = { class: "mw-ui-divider row" };
function bm(e, t) {
  return y(), D("div", ym);
}
const ns = /* @__PURE__ */ z(vm, [["render", bm]]);
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
  return y(), F(_o(n.tag), { class: "mw-grid container" }, {
    default: b(() => [
      ze(e.$slots, "default")
    ], void 0),
    _: 3
  });
}
const Gc = /* @__PURE__ */ z(Sm, [["render", wm]]), Cm = {
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
  return y(), F(_o(n.tag), {
    class: pe(a.classes)
  }, {
    default: b(() => [
      ze(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const be = /* @__PURE__ */ z(Cm, [["render", xm]]), Qa = ["mobile", "tablet", "desktop", "desktop-wide"], Em = Qa.reduce(
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
      for (let n = 0; n < Qa.length; n++) {
        let o = Qa[n], s = this.$props[o];
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
function Tm(e, t, n, o, s, a) {
  return y(), F(_o(n.tag), {
    class: pe(a.classes)
  }, {
    default: b(() => [
      ze(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const Ae = /* @__PURE__ */ z(km, [["render", Tm]]), js = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Am = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", Dm = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Wc = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Cn = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Yr = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Jr = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Lm = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Kc = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Xc = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Tn = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Yc = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z", Ft = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", ra = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Fi = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Mi = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Jc = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Zc = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Qc = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", eu = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", os = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", tu = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", nu = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", ei = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", ss = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Pm = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Nm = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, yn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Fm = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, uo = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Mm = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Om = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z", Zr = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z", Oi = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Bm = "M 1 3 L 1 15 A 2 2 0 0 0 3 17 L 15 17 L 15 12.234375 A 3 3 0 0 0 17 13 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 A 3 3 0 0 0 15 7.7636719 L 15 3 L 10.580078 3 A 3 3 0 0 1 11 4.5 A 3 3 0 0 1 5 4.5 A 3 3 0 0 1 5.4199219 3 L 1 3 z", Im = "M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z", $m = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", Um = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Rm = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Vm = {
  name: "MwDialog",
  components: {
    MwButton: he,
    MwRow: be,
    MwCol: Ae,
    MwDivider: ns
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
    const n = J(null), o = S(() => ({
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
    je(
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
      mwIconClose: Ft,
      root: n
    };
  }
}, zm = { class: "mw-ui-dialog__shell items-stretch" }, jm = { class: "mw-ui-dialog__body" };
function Hm(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-divider");
  return y(), F(vn, {
    name: `mw-ui-animation-${n.animation}`,
    style: nt(o.cssVars)
  }, {
    default: b(() => [
      n.value ? (y(), D("div", {
        key: 0,
        ref: "root",
        class: pe(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = so((c) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        C("div", {
          class: "mw-ui-dialog__overlay",
          style: nt(o.overlayStyles),
          onClick: t[0] || (t[0] = (c) => !n.persistent && o.close)
        }, null, 4),
        C("div", zm, [
          n.header ? ze(e.$slots, "header", { key: 0 }, () => [
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
          ]) : oe("", !0),
          C("div", jm, [
            ze(e.$slots, "default")
          ]),
          ze(e.$slots, "footer")
        ])
      ], 34)) : oe("", !0)
    ], void 0),
    _: 3
  }, 8, ["name", "style"]);
}
const Mt = /* @__PURE__ */ z(Vm, [["render", Hm]]);
const qm = {
  name: "MwInput",
  components: {
    MwIcon: He
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
}, Gm = { class: "mw-ui-input__content" };
function Wm(e, t, n, o, s, a) {
  const i = _("mw-icon");
  return y(), D("div", {
    class: pe(a.classes),
    onClick: t[2] || (t[2] = (r) => a.focus())
  }, [
    C("div", Gm, [
      ze(e.$slots, "icon", {}, () => [
        n.icon ? (y(), F(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : oe("", !0)
      ]),
      (y(), F(_o(n.type === "textarea" ? n.type : "input"), sa({
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
      ze(e.$slots, "indicator", {}, () => [
        n.indicator ? (y(), F(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = et((r) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : oe("", !0)
      ])
    ])
  ], 2);
}
const Bi = /* @__PURE__ */ z(qm, [["render", Wm]]);
const Km = {
  name: "MwMessage",
  components: { MwCol: Ae, MwRow: be, MwIcon: He, MwButton: he },
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
      notice: Nm,
      warning: uo,
      success: yn,
      error: Fm
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
function Xm(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row");
  return e.shown ? (y(), F(d, {
    key: 0,
    class: pe([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: b(() => [
      ze(e.$slots, "icon", {}, () => [
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
          ze(e.$slots, "default")
        ], void 0, !0),
        _: 3
      }, 8, ["id"]),
      ze(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (y(), F(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : oe("", !0)
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : oe("", !0);
}
const Ym = /* @__PURE__ */ z(Km, [["render", Xm]]);
const Jm = {}, Zm = { class: "mw-ui-spinner" }, Qm = /* @__PURE__ */ C("div", { class: "mw-ui-spinner__bounce" }, null, -1), eh = [
  Qm
];
function th(e, t) {
  return y(), D("div", Zm, eh);
}
const sn = /* @__PURE__ */ z(Jm, [["render", th]]), kt = {
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
const nh = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: He },
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
      default: Oi
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
function oh(e, t, n, o, s, a) {
  const i = _("mw-ui-icon");
  return n.thumbnail ? (y(), D("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: nt(o.style)
  }, null, 4)) : (y(), F(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: nt(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Ii = /* @__PURE__ */ z(nh, [["render", oh]]);
const sh = {
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
}, ah = { class: "mw-ui-radio__controls" }, ih = ["id", "disabled", "name", "value"], rh = /* @__PURE__ */ C("span", { class: "mw-ui-radio__controls__icon" }, null, -1), lh = ["for", "textContent"];
function ch(e, t, n, o, s, a) {
  const i = _("mw-row");
  return y(), F(i, {
    class: pe(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: b(() => [
      C("div", ah, [
        V(C("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => a.inputModel = r),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, ih), [
          [$p, a.inputModel]
        ]),
        rh
      ]),
      C("label", {
        for: n.id,
        class: "ps-2",
        textContent: ae(n.label)
      }, null, 8, lh)
    ], void 0),
    _: 1
  }, 8, ["class"]);
}
const Hs = /* @__PURE__ */ z(sh, [["render", ch]]), ou = {
  name: "MwRadioGroup",
  components: { MwRadio: Hs },
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
      (o) => qo(Hs, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), qo("div", { class: "mw-ui-radio-group" }, n);
  }
};
const uh = {
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
}, dh = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function gh(e, t, n, o, s, a) {
  return y(), D("div", {
    class: pe(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: nt(a.containerStyles)
  }, [
    C("div", {
      class: pe(["mw-progress-bar__bar", a.barClass]),
      style: nt(a.barStyles)
    }, null, 6)
  ], 14, dh);
}
const su = /* @__PURE__ */ z(uh, [["render", gh]]), fh = (e, t, n, o) => (s) => {
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
}, ph = (e, t, n, o) => ({ initiateDrag: fh(
  e,
  t,
  n,
  o
) }), mh = (e, t, n, o) => {
  const s = J(0), a = S(
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
const hh = {
  name: "MwExpandableContent",
  components: {
    MwButton: he
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
    const t = J(!0), n = J(null), o = S(
      () => Math.min(e.minHeight, s.value)
    ), s = J(1), { initiateDrag: a } = ph(
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
    } = mh(o, s, n, t), u = () => d(l.value + 1), g = J(null), f = S(() => ({
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
    return ut(() => W(this, null, function* () {
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
      mwIconCollapse: Mm,
      mwIconExpand: Xc,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: r,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, _h = { class: "mw-ui-expandable-content__container" }, vh = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, yh = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function bh(e, t, n, o, s, a) {
  const i = _("mw-button");
  return y(), D("div", {
    class: "mw-ui-expandable-content",
    style: nt(o.cssVars)
  }, [
    C("div", _h, [
      C("div", {
        ref: "contentRef",
        class: pe(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        ze(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (y(), D("div", vh, [
        p(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (y(), F(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : oe("", !0)
      ])) : oe("", !0)
    ]),
    C("div", yh, [
      C("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...r) => o.onDragButtonClicked && o.onDragButtonClicked(...r))
      })
    ], 512)
  ], 4);
}
const Sh = /* @__PURE__ */ z(hh, [["render", bh]]);
const wh = {
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
}, Ch = ["width", "height", "viewport"], xh = ["r", "cx", "cy", "stroke-dasharray"], Eh = ["r", "cx", "cy", "stroke-dasharray"];
function kh(e, t, n, o, s, a) {
  return y(), D("svg", {
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
    }, null, 8, xh),
    C("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: nt({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Eh)
  ], 12, Ch);
}
const au = /* @__PURE__ */ z(wh, [["render", kh]]), cn = {
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
}, xa = {
  mobile: () => matchMedia(un.mobile).matches,
  tablet: () => matchMedia(un.tablet).matches,
  desktop: () => matchMedia(un.desktop).matches,
  desktopwide: () => matchMedia(un["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(un["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(un["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(un["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(un["desktop-and-down"]).matches
}, Th = {
  install: (e) => {
    const t = () => {
      for (let o in xa)
        xa.hasOwnProperty(o) && (n.value[o] = xa[o]());
    }, n = J({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = bt(rt({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, Ah = {
  install: (e) => {
    e.config.globalProperties.$mwui = bt(rt({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
function Dh() {
  return iu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function iu() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Lh = typeof Proxy == "function", Ph = "devtools-plugin:setup", Nh = "plugin:settings:set";
let eo, ti;
function Fh() {
  var e;
  return eo !== void 0 || (typeof window != "undefined" && window.performance ? (eo = !0, ti = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (eo = !0, ti = global.perf_hooks.performance) : eo = !1), eo;
}
function Mh() {
  return Fh() ? ti.now() : Date.now();
}
class Oh {
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
        return Mh();
      }
    }, n && n.on(Nh, (i, r) => {
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
function ru(e, t) {
  const n = e, o = iu(), s = Dh(), a = Lh && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Ph, e, t);
  else {
    const i = a ? new Oh(n, s) : null;
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
function le(e) {
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
function Bh(e) {
  return e && typeof e.then == "function";
}
function Nt(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Ih(e, t) {
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
  la(e, n, [], e._modules.root, !0), $i(e, n, t);
}
function $i(e, t, n) {
  var o = e._state, s = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var a = e._wrappedGetters, i = {}, r = {}, l = eg(!0);
  l.run(function() {
    Jn(a, function(d, c) {
      i[c] = Ih(d, e), r[c] = S(function() {
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
  }), e._scope = l, e.strict && zh(e), o && n && e._withCommit(function() {
    o.data = null;
  }), s && s.stop();
}
function la(e, t, n, o, s) {
  var a = !n.length, i = e._modules.getNamespace(n);
  if (o.namespaced && (e._modulesNamespaceMap[i] && {}.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = o), !a && !s) {
    var r = Ui(t, n.slice(0, -1)), l = n[n.length - 1];
    e._withCommit(function() {
      ({}).NODE_ENV !== "production" && l in r && console.warn(
        '[vuex] state field "' + l + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), r[l] = o.state;
    });
  }
  var d = o.context = $h(e, i, n);
  o.forEachMutation(function(c, u) {
    var g = i + u;
    Uh(e, g, c, d);
  }), o.forEachAction(function(c, u) {
    var g = c.root ? u : i + u, f = c.handler || c;
    Rh(e, g, f, d);
  }), o.forEachGetter(function(c, u) {
    var g = i + u;
    Vh(e, g, c, d);
  }), o.forEachChild(function(c, u) {
    la(e, t, n.concat(u), c, s);
  });
}
function $h(e, t, n) {
  var o = t === "", s = {
    dispatch: o ? e.dispatch : function(a, i, r) {
      var l = qs(a, i, r), d = l.payload, c = l.options, u = l.type;
      if ((!c || !c.root) && (u = t + u, {}.NODE_ENV !== "production" && !e._actions[u])) {
        console.error("[vuex] unknown local action type: " + l.type + ", global type: " + u);
        return;
      }
      return e.dispatch(u, d);
    },
    commit: o ? e.commit : function(a, i, r) {
      var l = qs(a, i, r), d = l.payload, c = l.options, u = l.type;
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
        return Ui(e.state, n);
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
function Uh(e, t, n, o) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function(i) {
    n.call(e, o.state, i);
  });
}
function Rh(e, t, n, o) {
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
    return Bh(r) || (r = Promise.resolve(r)), e._devtoolHook ? r.catch(function(l) {
      throw e._devtoolHook.emit("vuex:error", l), l;
    }) : r;
  });
}
function Vh(e, t, n, o) {
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
function zh(e) {
  je(function() {
    return e._state.data;
  }, function() {
    ({}).NODE_ENV !== "production" && Nt(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Ui(e, t) {
  return t.reduce(function(n, o) {
    return n[o];
  }, e);
}
function qs(e, t, n) {
  return cu(e) && e.type && (n = t, t = e, e = e.type), {}.NODE_ENV !== "production" && Nt(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var jh = "vuex bindings", Qr = "vuex:mutations", Ea = "vuex:actions", to = "vuex", Hh = 0;
function qh(e, t) {
  ru(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [jh]
    },
    function(n) {
      n.addTimelineLayer({
        id: Qr,
        label: "Vuex Mutations",
        color: el
      }), n.addTimelineLayer({
        id: Ea,
        label: "Vuex Actions",
        color: el
      }), n.addInspector({
        id: to,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(o) {
        if (o.app === e && o.inspectorId === to)
          if (o.filter) {
            var s = [];
            hu(s, t._modules.root, o.filter, ""), o.rootNodes = s;
          } else
            o.rootNodes = [
              mu(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(o) {
        if (o.app === e && o.inspectorId === to) {
          var s = o.nodeId;
          gu(t, s), o.state = Kh(
            Yh(t._modules, s),
            s === "root" ? t.getters : t._makeLocalGettersCache,
            s
          );
        }
      }), n.on.editInspectorState(function(o) {
        if (o.app === e && o.inspectorId === to) {
          var s = o.nodeId, a = o.path;
          s !== "root" && (a = s.split("/").filter(Boolean).concat(a)), t._withCommit(function() {
            o.set(t._state.data, a, o.state.value);
          });
        }
      }), t.subscribe(function(o, s) {
        var a = {};
        o.payload && (a.payload = o.payload), a.state = s, n.notifyComponentUpdate(), n.sendInspectorTree(to), n.sendInspectorState(to), n.addTimelineEvent({
          layerId: Qr,
          event: {
            time: Date.now(),
            title: o.type,
            data: a
          }
        });
      }), t.subscribeAction({
        before: function(o, s) {
          var a = {};
          o.payload && (a.payload = o.payload), o._id = Hh++, o._time = Date.now(), a.state = s, n.addTimelineEvent({
            layerId: Ea,
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
            layerId: Ea,
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
var el = 8702998, Gh = 6710886, Wh = 16777215, fu = {
  label: "namespaced",
  textColor: Wh,
  backgroundColor: Gh
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
function Kh(e, t, n) {
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
    var a = Xh(t);
    s.getters = Object.keys(a).map(function(i) {
      return {
        key: i.endsWith("/") ? pu(i) : i,
        editable: !1,
        value: ni(function() {
          return a[i];
        })
      };
    });
  }
  return s;
}
function Xh(e) {
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
      }), s[a] = ni(function() {
        return e[n];
      });
    } else
      t[n] = ni(function() {
        return e[n];
      });
  }), t;
}
function Yh(e, t) {
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
function ni(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Ot = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var o = t.state;
  this.state = (typeof o == "function" ? o() : o) || {};
}, _u = { namespaced: { configurable: !0 } };
_u.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Ot.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
Ot.prototype.removeChild = function(t) {
  delete this._children[t];
};
Ot.prototype.getChild = function(t) {
  return this._children[t];
};
Ot.prototype.hasChild = function(t) {
  return t in this._children;
};
Ot.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
Ot.prototype.forEachChild = function(t) {
  Jn(this._children, t);
};
Ot.prototype.forEachGetter = function(t) {
  this._rawModule.getters && Jn(this._rawModule.getters, t);
};
Ot.prototype.forEachAction = function(t) {
  this._rawModule.actions && Jn(this._rawModule.actions, t);
};
Ot.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && Jn(this._rawModule.mutations, t);
};
Object.defineProperties(Ot.prototype, _u);
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
  var a = new Ot(n, o);
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
var tl = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Jh = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, nl = {
  getters: tl,
  mutations: tl,
  actions: Jh
};
function yu(e, t) {
  Object.keys(nl).forEach(function(n) {
    if (t[n]) {
      var o = nl[n];
      Jn(t[n], function(s, a) {
        Nt(
          o.assert(s),
          Zh(e, n, a, s, o.expected)
        );
      });
    }
  });
}
function Zh(e, t, n, o, s) {
  var a = t + " should be " + s + ' but "' + t + "." + n + '"';
  return e.length > 0 && (a += ' in module "' + e.join(".") + '"'), a += " is " + JSON.stringify(o) + ".", a;
}
function Qh(e) {
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
  la(this, c, [], this._modules.root), $i(this, c), o.forEach(function(u) {
    return u(n);
  });
}, Ri = { state: { configurable: !0 } };
vt.prototype.install = function(t, n) {
  t.provide(n || lu, this), t.config.globalProperties.$store = this;
  var o = this._devtools !== void 0 ? this._devtools : {}.NODE_ENV !== "production" || !1;
  o && qh(t, this);
};
Ri.state.get = function() {
  return this._state.data;
};
Ri.state.set = function(e) {
  ({}).NODE_ENV !== "production" && Nt(!1, "use store.replaceState() to explicit replace store state.");
};
vt.prototype.commit = function(t, n, o) {
  var s = this, a = qs(t, n, o), i = a.type, r = a.payload, l = a.options, d = { type: i, payload: r }, c = this._mutations[i];
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
  var o = this, s = qs(t, n), a = s.type, i = s.payload, r = { type: a, payload: i }, l = this._actions[a];
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
  return {}.NODE_ENV !== "production" && Nt(typeof t == "function", "store.watch only accepts a function."), je(function() {
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
  o === void 0 && (o = {}), typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && (Nt(Array.isArray(t), "module path must be a string or an Array."), Nt(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), la(this, this.state, t, this._modules.get(t), o.preserveState), $i(this, this.state);
};
vt.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var o = Ui(n.state, t.slice(0, -1));
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
Object.defineProperties(vt.prototype, Ri);
var e_ = n_(function(e, t) {
  var n = {};
  return {}.NODE_ENV !== "production" && !bu(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), t_(t).forEach(function(o) {
    var s = o.key, a = o.val;
    n[s] = function() {
      var r = this.$store.state, l = this.$store.getters;
      if (e) {
        var d = o_(this.$store, "mapState", e);
        if (!d)
          return;
        r = d.context.state, l = d.context.getters;
      }
      return typeof a == "function" ? a.call(this, r, l) : r[a];
    }, n[s].vuex = !0;
  }), n;
});
function t_(e) {
  return bu(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function bu(e) {
  return Array.isArray(e) || cu(e);
}
function n_(e) {
  return function(t, n) {
    return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
  };
}
function o_(e, t, n) {
  var o = e._modulesNamespaceMap[n];
  return {}.NODE_ENV !== "production" && !o && console.error("[vuex] module namespace not found in " + t + "(): " + n), o;
}
class vo extends Error {
}
const s_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new vo();
}), Su = { assertUser: s_ };
const a_ = { class: "pa-4 sx-login-dialog__header" }, i_ = { class: "sx-login-dialog__body px-6 pb-4" }, r_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, l_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = le(), n = S(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = J(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const r = ye("i18n");
      return n.value ? (y(), F(qe(Mt), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: b(() => [
          C("div", a_, [
            V(C("h4", null, null, 512), [
              [r, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: b(() => [
          V(C("div", i_, null, 512), [
            [r, void 0, "cx-sx-login-dialog-body"]
          ]),
          C("div", r_, [
            p(qe(he), {
              type: "text",
              progressive: "",
              label: a.$i18n("cx-sx-login-dialog-button-label"),
              href: s.value,
              target: "_blank"
            }, null, 8, ["label", "href"])
          ])
        ], void 0),
        _: 1
      })) : oe("", !0);
    };
  }
};
const c_ = {
  name: "ContentTranslationApp",
  components: { MwGrid: Gc, MwCol: Ae, MwRow: be, SxLoginDialog: l_ },
  setup() {
    const e = le(), t = S(
      () => e.state.application.autoSavePending
    );
    ut(() => {
      window.addEventListener("beforeunload", (n) => {
        t.value && (n.preventDefault(), n.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (n) => {
        document.visibilityState === "visible" && Su.assertUser().then(() => e.commit("application/setIsLoginDialogOn", !1)).catch((o) => {
          o instanceof vo && e.commit("application/setIsLoginDialogOn", !0);
        });
      });
    });
  }
};
function u_(e, t, n, o, s, a) {
  const i = _("sx-login-dialog"), r = _("router-view"), l = _("mw-col"), d = _("mw-row"), c = _("mw-grid");
  return y(), F(c, { id: "contenttranslation" }, {
    default: b(() => [
      p(d, { class: "cx-container" }, {
        default: b(() => [
          p(l, { cols: "12" }, {
            default: b(() => [
              p(r, null, {
                default: b(({ Component: u, route: g }) => [
                  p(vn, {
                    name: g.meta.transitionName
                  }, {
                    default: b(() => [
                      (y(), F(_o(u)))
                    ], void 0, !0),
                    _: 2
                  }, 1032, ["name"]),
                  p(i)
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
const d_ = /* @__PURE__ */ z(c_, [["render", u_]]), g_ = {
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
  getTranslation: (e) => (t, n, o, s) => e.translations.find(
    /** @param {Translation} translation */
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
  return !e || !t ? 0 : e === t ? 1 : (s = i = ol(e, n), a = r = ol(t, n), r.length > i.length && (s = r, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, ol = function(e, t) {
  return e ? p_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, h_ = 95, __ = 85, v_ = [
  { status: "failure", value: 100 - h_ },
  { status: "warning", value: 100 - __ },
  { status: "success", value: 100 }
], wu = (e, t, n) => {
  const o = sl(e).textContent, s = sl(t).textContent, a = 100 - 100 * m_(s, o, n);
  return Math.ceil(a);
}, y_ = (e) => v_.find((t) => e <= t.value).status, b_ = (e, t) => wu(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), sl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, xn = { calculateScore: wu, getScoreStatus: y_, getMTScoreForPageSection: b_ }, ka = "original", Ta = "empty", S_ = {
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
      ka,
      Ta
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
    return ka;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ta;
  }
  static isUserMTProvider(t) {
    return [ka, Ta].includes(
      t
    );
  }
}
const Oe = new mw.cx.SiteMapper(), Cu = mw.util.getUrl, w_ = () => {
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
class go {
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
const al = (e) => {
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
    const t = al((s = this.user) == null ? void 0 : s.content), n = al((a = this.mt) == null ? void 0 : a.content);
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
class as {
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
const il = (e) => {
  var n;
  const t = Gs(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Gs = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, $n = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Eu = (e) => {
  const t = Gs(e);
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
}, Tu = (e) => {
  const t = ku(e);
  return t == null ? void 0 : t.targetExists;
};
class Aa {
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
      (a) => $n(a)
    );
    s && Tu(s) && (this.blockTemplateAdaptationInfo[t] = ku(s));
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
      (t) => $n(t)
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
    const t = Gs(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? il(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => $n(o));
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
    return n && il(n) || "";
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
    const o = Gs(n);
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
      (a) => $n(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Aa({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Aa({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Aa({
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
        (s) => $n(s)
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
const Da = "__LEAD_SECTION__";
class Vi {
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
    return Da;
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
    return this.isLeadSection ? Da : this.originalTitle;
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
    return this.isLeadSection ? Da : this.title;
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
class zi extends as {
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
    return !this.sourceSectionTitle || this.sourceSectionTitle === Vi.LEAD_SECTION_DUMMY_TITLE;
  }
}
class Au extends as {
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
        (l) => new zi(bt(rt({}, l), { status: e }))
      ) : i = a.map(
        (l) => new Au(bt(rt({}, l), { status: e }))
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
  return W(this, null, function* () {
    if (!o)
      return;
    let a = `/translate/${e}/${t}`;
    n !== Re.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = Oe.getCXServerUrl(a);
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
const T_ = (e, t, n) => {
  const o = Oe.getApi(t);
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
}, A_ = ({
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
          publishFeedbackMessage: new go({
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
  }).catch((m, w) => {
    Lu(m);
    let x;
    return w = w || {}, w.exception ? x = w.exception.message : w.error ? x = w.error.info : x = "Unknown error", {
      publishFeedbackMessage: new go({
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
    let w;
    return m.exception ? w = m.exception.message : m.error ? w = m.error.info : w = "Unknown error", new go({ text: w, status: "error" });
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
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Ht = {
  fetchTranslations: Pu,
  fetchTranslationUnits: E_,
  fetchSegmentTranslation: k_,
  parseTemplateWikitext: T_,
  publishTranslation: A_,
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
    (r) => !Re.isUserMTProvider(r)
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
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = xn.getMTScoreForPageSection(
    t,
    n
  ), s = xn.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let r, l;
  return i === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new go({
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
function I_(a) {
  return W(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i instanceof go)
      return { publishFeedbackMessage: i, targetTitle: null };
    const r = i, l = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: d,
      sourceLanguage: c,
      targetLanguage: u
    } = e.application, g = l.title, f = t["application/getTargetPageTitleForPublishing"], m = t["application/isSandboxTarget"], w = {
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
    return o && (w.captchaId = o, w.captchaWord = s), yield Ht.publishTranslation(w);
  });
}
function $_(a, i) {
  return W(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, s) {
    let r = yield Ht.fetchTranslations(s);
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
function R_(t) {
  return W(this, arguments, function* ({ commit: e }) {
    const n = yield Ht.fetchTranslatorStats();
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
class ji {
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
class qt {
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
class Go {
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
  return W(this, null, function* () {
    var d;
    let s = `/data/recommendation/article/creation/translation/${e}`;
    n && (s += `/${n}`);
    const a = Oe.getRestbaseUrl(t, s), i = new URLSearchParams({ count: `${o}` }), r = yield fetch(`${a}?${i}`);
    if (!r.ok)
      throw new Error("Failed to load data from server");
    return (((d = yield r.json()) == null ? void 0 : d.items) || []).map(
      (c) => new ji({
        sourceTitle: c.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: c.wikidata_id,
        langLinksCount: parseInt(c.sitelink_count)
      })
    );
  });
}
function Q_(e, t, n) {
  return W(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = Oe.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new qt(a) : null;
  });
}
function e0(e, t) {
  return W(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = Oe.getApi(e);
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
  const t = J_.map((o) => encodeURIComponent(o)).join("|"), n = Oe.getCXServerUrl(
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
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((r) => new Go(r));
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
}, rl = ["cx-published-translations"];
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
    return rl.every(
      (t) => this.exhaustedProviders.includes(t)
    );
  }
  /**
   * Get next provider that is not used yet, if any
   *
   * @returns {string|null}
   */
  get nextUnexhaustedProvider() {
    return rl.find(
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
  return W(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
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
          d = new qt({
            sourceLanguage: s,
            targetLanguage: a,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: c.title
          }), e(
            "addPageSuggestion",
            new ji({
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
  return W(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
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
  return W(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
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
  return W(this, arguments, function* ({
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
  return W(this, arguments, function* ({ getters: e, commit: t }, n) {
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
    yield Gt.markFavorite(n);
    const { sourceTitle: a, sourceLanguage: i, targetLanguage: r } = n, l = new Go({
      title: a,
      sourceLanguage: i,
      targetLanguage: r
    });
    e("addFavoriteSuggestion", l);
  });
}
function _0(n, o) {
  return W(this, arguments, function* ({ commit: e }, t) {
    e("removeFavoriteSuggestion", t), yield Gt.unmarkFavorite(t);
  });
}
function v0(o) {
  return W(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
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
}, T0 = (e, t) => {
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
}, A0 = (e, t) => {
  const n = Array.from(
    T0(e, t)
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
      return new Vi({ id: l, title: r, subSections: d, isLeadSection: c });
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
  convertSegmentedContentToPageSections: A0
}, Hi = 120, P0 = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: Hi,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Oe.getApi(e).get(n).then((s) => {
    const a = s.query.pages, r = (s.query.redirects || []).reduce(
      (c, u) => bt(rt({}, c), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (c, u) => bt(rt({}, c), { [u.to]: u.from }),
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
  return Oe.getApi(e).get(n).then((s) => W(void 0, null, function* () {
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
  const s = [e, t, n].map(
    (i) => encodeURIComponent(i)
  );
  let a = Oe.getCXServerUrl(
    `/page/${s.join("/")}`
  );
  return o && (a += `/${o}`), fetch(a).then((i) => i.json()).then((i) => i.segmentedContent);
}, M0 = (e) => W(void 0, null, function* () {
  const t = w_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Hi,
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
  return yield Oe.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new yo(s))).catch((o) => []);
}), O0 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Hi,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Oe.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new yo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, is = {
  fetchPages: P0,
  fetchLanguageTitles: N0,
  fetchPageContent: F0,
  fetchSegmentedContent: Ou,
  fetchNearbyPages: M0,
  searchPagesByTitlePrefix: O0
};
function B0() {
  return Oe.getLanguagePairs().then((e) => e.sourceLanguages);
}
function I0(e, t) {
  return W(this, null, function* () {
    const n = Oe.getCXServerUrl(
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
const ca = {
  fetchSupportedLanguageCodes: B0,
  fetchSupportedMTProviders: I0,
  fetchCXServerToken: $0,
  addWikibaseLink: U0
};
function R0({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const r = o.slice(i, i + s), l = is.fetchPages(n, r).then(
      (d) => d.forEach((c) => t("addPage", c))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function V0({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || is.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function z0(n) {
  return W(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield ca.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function j0(r, l) {
  return W(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let d = t.getPage(o, a);
    if (d && d.content)
      return;
    const c = yield is.fetchPageContent(
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
    const a = yield is.fetchNearbyPages(s);
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
    (a) => $n(a)
  );
  return s && Tu(s) ? Ht.parseTemplateWikitext(
    Eu(s),
    n,
    t
  ) : Promise.resolve(null);
}, Bu = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => $n(a)
  );
  return s ? Ht.parseTemplateWikitext(
    Eu(s),
    n,
    t
  ) : Promise.resolve(null);
};
function qi(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, r = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(r, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let Cs;
const Gi = ({ dispatch: e, commit: t }) => {
  if (!Cs) {
    let n = 1e3, o = 0;
    Cs = qi(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then((a) => {
        a instanceof go ? (n *= o + 1, o++, setTimeout(Cs, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
      }).catch((a) => {
        if (a instanceof vo)
          t("setIsLoginDialogOn", !0);
        else
          throw a;
      });
    }, 3e3);
  }
  return Cs;
}, J0 = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), Gi({ dispatch: e, commit: t }).cancel();
}, Z0 = (o) => W(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield ca.fetchCXServerToken().then(
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
  ), Gi({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function a1(a, i) {
  return W(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
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
    ), Gi({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
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
    e.currentSectionSuggestion = t && new qt(bt(rt({}, t), {
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
  }
}, p1 = {
  namespaced: !0,
  state: K0,
  getters: X0,
  actions: g1,
  mutations: f1
}, fo = Qh({
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
const Ne = Object.assign;
function La(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = wt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Mo = () => {
}, wt = Array.isArray;
function Te(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const h1 = /\/$/, _1 = (e) => e.replace(h1, "");
function Pa(e, t, n = "/") {
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
function ll(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function cl(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && En(t.matched[o], n.matched[s]) && Iu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function En(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Iu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!y1(e[n], t[n]))
      return !1;
  return !0;
}
function y1(e, t) {
  return wt(e) ? ul(e, t) : wt(t) ? ul(t, e) : e === t;
}
function ul(e, t) {
  return wt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function b1(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return Te(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Wo;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Wo || (Wo = {}));
var Oo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Oo || (Oo = {}));
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
const ua = () => ({
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
          Te(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        Te(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && Te(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = x1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function dl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const oi = /* @__PURE__ */ new Map();
function k1(e, t) {
  oi.set(e, t);
}
function T1(e) {
  const t = oi.get(e);
  return oi.delete(e), t;
}
let A1 = () => location.protocol + "//" + location.host;
function $u(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(r);
    return l[0] !== "/" && (l = "/" + l), ll(l, "");
  }
  return ll(n, e) + o + s;
}
function D1(e, t, n, o) {
  let s = [], a = [], i = null;
  const r = ({ state: g }) => {
    const f = $u(e, location), m = n.value, w = t.value;
    let x = 0;
    if (g) {
      if (n.value = f, t.value = g, i && i === m) {
        i = null;
        return;
      }
      x = w ? g.position - w.position : 0;
    } else
      o(f);
    s.forEach((k) => {
      k(n.value, m, {
        delta: x,
        type: Wo.pop,
        direction: x ? x > 0 ? Oo.forward : Oo.back : Oo.unknown
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
    g.state && g.replaceState(Ne({}, g.state, { scroll: ua() }), "");
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
function gl(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? ua() : null
  };
}
function L1(e) {
  const { history: t, location: n } = window, o = {
    value: $u(e, n)
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
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : A1() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (f) {
      ({}).NODE_ENV !== "production" ? Te("Error with push/replace State", f) : console.error(f), n[c ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const c = Ne({}, t.state, gl(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(l, c, !0), o.value = l;
  }
  function r(l, d) {
    const c = Ne(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: l,
        scroll: ua()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Te(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(c.current, c, !0);
    const u = Ne({}, gl(o.value, l, null), { position: c.position + 1 }, d);
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
  const s = Ne({
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
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Te(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), P1(e);
}
function F1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Uu(e) {
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
}, si = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var fl;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(fl || (fl = {}));
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
  return {}.NODE_ENV !== "production" ? Ne(new Error(M1[e](t)), {
    type: e,
    [si]: !0
  }, t) : Ne(new Error(), {
    type: e,
    [si]: !0
  }, t);
}
function Jt(e, t) {
  return e instanceof Error && si in e && (t == null || !!(e.type & t));
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
const pl = "[^/]+?", I1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, $1 = /[.+*?^${}()[\]/\\]/g;
function U1(e, t) {
  const n = Ne({}, I1, t), o = [];
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
        const { value: m, repeatable: w, optional: x, regexp: k } = g;
        a.push({
          name: m,
          repeatable: w,
          optional: x
        });
        const L = k || pl;
        if (L !== pl) {
          f += 10;
          try {
            new RegExp(`(${L})`);
          } catch (G) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${L}): ` + G.message);
          }
        }
        let M = w ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
        u || (M = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        x && d.length < 2 ? `(?:/${M})` : "/" + M), x && (M += "?"), s += M, f += 20, x && (f += -8), w && (f += -20), L === ".*" && (f += -50);
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
          const { value: m, repeatable: w, optional: x } = f, k = m in d ? d[m] : "";
          if (wt(k) && !w)
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
    if (ml(o))
      return 1;
    if (ml(s))
      return -1;
  }
  return s.length - o.length;
}
function ml(e) {
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
      a.has(i.name) && Te(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = Ne(o, {
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
  t = vl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return o.get(c);
  }
  function a(c, u, g) {
    const f = !g, m = W1(c);
    ({}).NODE_ENV !== "production" && J1(m, u), m.aliasOf = g && g.record;
    const w = vl(t, c), x = [
      m
    ];
    if ("alias" in c) {
      const M = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const G of M)
        x.push(Ne({}, m, {
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
        const O = u.record.path, ge = O[O.length - 1] === "/" ? "" : "/";
        M.path = u.record.path + (G && ge + G);
      }
      if ({}.NODE_ENV !== "production" && M.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (k = q1(M, u, w), {}.NODE_ENV !== "production" && u && G[0] === "/" && Z1(k, u), g ? (g.alias.push(k), {}.NODE_ENV !== "production" && Y1(g, k)) : (L = L || k, L !== k && L.alias.push(k), f && c.name && !_l(k) && i(c.name)), m.children) {
        const O = m.children;
        for (let ge = 0; ge < O.length; ge++)
          a(O[ge], k, g && g.children[ge]);
      }
      g = g || k, (k.record.components && Object.keys(k.record.components).length || k.record.name || k.record.redirect) && l(k);
    }
    return L ? () => {
      i(L);
    } : Mo;
  }
  function i(c) {
    if (Uu(c)) {
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
    (c.record.path !== n[u].record.path || !Ru(c, n[u])); )
      u++;
    n.splice(u, 0, c), c.record.name && !_l(c) && o.set(c.record.name, c);
  }
  function d(c, u) {
    let g, f = {}, m, w;
    if ("name" in c && c.name) {
      if (g = o.get(c.name), !g)
        throw po(1, {
          location: c
        });
      if ({}.NODE_ENV !== "production") {
        const L = Object.keys(c.params || {}).filter((M) => !g.keys.find((G) => G.name === M));
        L.length && Te(`Discarded invalid param(s) "${L.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      w = g.record.name, f = Ne(
        // paramsFromLocation is a new object
        hl(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((L) => !L.optional).map((L) => L.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && hl(c.params, g.keys.map((L) => L.name))
      ), m = g.stringify(f);
    } else if ("path" in c)
      m = c.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && Te(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((L) => L.re.test(m)), g && (f = g.parse(m), w = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((L) => L.re.test(u.path)), !g)
        throw po(1, {
          location: c,
          currentLocation: u
        });
      w = g.record.name, f = Ne({}, u.params, c.params), m = g.stringify(f);
    }
    const x = [];
    let k = g;
    for (; k; )
      x.unshift(k.record), k = k.parent;
    return {
      name: w,
      path: m,
      params: f,
      matched: x,
      meta: X1(x)
    };
  }
  return e.forEach((c) => a(c)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: r, getRecordMatcher: s };
}
function hl(e, t) {
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
function _l(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function X1(e) {
  return e.reduce((t, n) => Ne(t, n.meta), {});
}
function vl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function ai(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Y1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(ai.bind(null, n)))
      return Te(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(ai.bind(null, n)))
      return Te(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function J1(e, t) {
  t && t.record.name && !e.name && !e.path && Te(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Z1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(ai.bind(null, n)))
      return Te(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Ru(e, t) {
  return t.children.some((n) => n === e || Ru(e, n));
}
const Vu = /#/g, Q1 = /&/g, ev = /\//g, tv = /=/g, nv = /\?/g, zu = /\+/g, ov = /%5B/g, sv = /%5D/g, ju = /%5E/g, av = /%60/g, Hu = /%7B/g, iv = /%7C/g, qu = /%7D/g, rv = /%20/g;
function Wi(e) {
  return encodeURI("" + e).replace(iv, "|").replace(ov, "[").replace(sv, "]");
}
function lv(e) {
  return Wi(e).replace(Hu, "{").replace(qu, "}").replace(ju, "^");
}
function ii(e) {
  return Wi(e).replace(zu, "%2B").replace(rv, "+").replace(Vu, "%23").replace(Q1, "%26").replace(av, "`").replace(Hu, "{").replace(qu, "}").replace(ju, "^");
}
function cv(e) {
  return ii(e).replace(tv, "%3D");
}
function uv(e) {
  return Wi(e).replace(Vu, "%23").replace(nv, "%3F");
}
function dv(e) {
  return e == null ? "" : uv(e).replace(ev, "%2F");
}
function Ko(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Te(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function gv(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(zu, " "), i = a.indexOf("="), r = Ko(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : Ko(a.slice(i + 1));
    if (r in t) {
      let d = t[r];
      wt(d) || (d = t[r] = [d]), d.push(l);
    } else
      t[r] = l;
  }
  return t;
}
function yl(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = cv(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (wt(o) ? o.map((a) => a && ii(a)) : [o && ii(o)]).forEach((a) => {
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
const pv = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), bl = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), da = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Gu = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), ri = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Eo() {
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
        c = c.then((g) => l._called ? g : (Te(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !l._called) {
        Te(u), r(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((u) => r(u));
  });
}
function mv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Te(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Na(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && Te(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let r = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!r || typeof r != "object" && typeof r != "function")
          throw Te(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(r)}".`), new Error("Invalid route component");
        if ("then" in r) {
          Te(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = r;
          r = () => l;
        } else
          r.__asyncLoader && // warn only once per component
          !r.__warnedDefineAsync && (r.__warnedDefineAsync = !0, Te(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (hv(r)) {
          const d = (r.__vccOpts || r)[t];
          d && s.push(hn(d, n, o, a, i));
        } else {
          let l = r();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (Te(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
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
function Sl(e) {
  const t = Ge(da), n = Ge(Gu), o = S(() => t.resolve(qe(e.to))), s = S(() => {
    const { matched: l } = o.value, { length: d } = l, c = l[d - 1], u = n.matched;
    if (!c || !u.length)
      return -1;
    const g = u.findIndex(En.bind(null, c));
    if (g > -1)
      return g;
    const f = wl(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      wl(c) === f && // avoid comparing the child with its parent
      u[u.length - 1].path !== f ? u.findIndex(En.bind(null, l[d - 2])) : g
    );
  }), a = S(() => s.value > -1 && bv(n.params, o.value.params)), i = S(() => s.value > -1 && s.value === n.matched.length - 1 && Iu(n.params, o.value.params));
  function r(l = {}) {
    return yv(l) ? t[qe(e.replace) ? "replace" : "push"](
      qe(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Mo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && en) {
    const l = Di();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), gf(() => {
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
const _v = /* @__PURE__ */ bc({
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
  useLink: Sl,
  setup(e, { slots: t }) {
    const n = mo(Sl(e)), { options: o } = Ge(da), s = S(() => ({
      [Cl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Cl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : qo("a", {
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
function wl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Cl = (e, t, n) => e != null ? e : t != null ? t : n, Sv = /* @__PURE__ */ bc({
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
    const o = Ge(ri), s = S(() => e.route || o.value), a = Ge(bl, 0), i = S(() => {
      let d = qe(a);
      const { matched: c } = s.value;
      let u;
      for (; (u = c[d]) && !u.components; )
        d++;
      return d;
    }), r = S(() => s.value.matched[i.value]);
    As(bl, S(() => i.value + 1)), As(pv, r), As(ri, s);
    const l = J();
    return je(() => [l.value, r.value, e.name], ([d, c, u], [g, f, m]) => {
      c && (c.instances[u] = d, f && f !== c && d && d === g && (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards), c.updateGuards.size || (c.updateGuards = f.updateGuards))), d && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!f || !En(c, f) || !g) && (c.enterCallbacks[u] || []).forEach((w) => w(d));
    }, { flush: "post" }), () => {
      const d = s.value, c = e.name, u = r.value, g = u && u.components[c];
      if (!g)
        return xl(n.default, { Component: g, route: d });
      const f = u.props[c], m = f ? f === !0 ? d.params : typeof f == "function" ? f(d) : f : null, x = qo(g, Ne({}, m, t, {
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
        xl(n.default, { Component: x, route: d }) || x
      );
    };
  }
});
function xl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const wv = Sv;
function Cv() {
  const e = Di(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    Te(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function ko(e, t) {
  const n = Ne({}, e, {
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
function xs(e) {
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
        value: ko(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: c, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        c.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Wu
        });
      }
      wt(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let f = Yu, m = "";
        g.isExactActive ? (f = Xu, m = "This is exactly active") : g.isActive && (f = Ku, m = "This link is active"), c.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: f
        });
      }));
    }), je(t.currentRoute, () => {
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
        guard: xs("beforeEach"),
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
        guard: xs("afterEach")
      };
      g ? (f.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, f.status = xs("❌")) : f.status = xs("✅"), f.from = ko(u, "Current Location during this navigation"), f.to = ko(c, "Target location"), s.addTimelineEvent({
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
      u.forEach(Qu), c.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        li(g, c.filter.toLowerCase())
      ))), u.forEach((g) => Zu(g, t.currentRoute.value)), c.rootNodes = u.map(Ju);
    }
    let d;
    s.on.getInspectorTree((c) => {
      d = c, c.app === e && c.inspectorId === r && l();
    }), s.on.getInspectorState((c) => {
      if (c.app === e && c.inspectorId === r) {
        const g = n.getRoutes().find((f) => f.record.__vd_id === c.nodeId);
        g && (c.state = {
          options: Tv(g)
        });
      }
    }), s.sendInspectorTree(r), s.sendInspectorState(r);
  });
}
function kv(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Tv(e) {
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
const Wu = 15485081, Ku = 2450411, Xu = 8702998, Av = 2282478, Yu = 16486972, Dv = 6710886;
function Ju(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Av
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Yu
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Wu
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Xu
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ku
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
    children: e.children.map(Ju)
  };
}
let Lv = 0;
const Pv = /^\/(.*)\/([a-z]*)$/;
function Zu(e, t) {
  const n = t.matched.length && En(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => En(o, e.record))), e.children.forEach((o) => Zu(o, t));
}
function Qu(e) {
  e.__vd_match = !1, e.children.forEach(Qu);
}
function li(e, t) {
  const n = String(e.re).match(Pv);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => li(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ko(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => li(i, t));
}
function Nv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Fv(e) {
  const t = G1(e.routes, e), n = e.parseQuery || gv, o = e.stringifyQuery || yl, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Eo(), i = Eo(), r = Eo(), l = Lg(dn);
  let d = dn;
  en && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = La.bind(null, (T) => "" + T), u = La.bind(null, dv), g = (
    // @ts-expect-error: intentionally avoid the type check
    La.bind(null, Ko)
  );
  function f(T, K) {
    let X, Z;
    return Uu(T) ? (X = t.getRecordMatcher(T), Z = K) : Z = T, t.addRoute(Z, X);
  }
  function m(T) {
    const K = t.getRecordMatcher(T);
    K ? t.removeRoute(K) : {}.NODE_ENV !== "production" && Te(`Cannot remove non-existent route "${String(T)}"`);
  }
  function w() {
    return t.getRoutes().map((T) => T.record);
  }
  function x(T) {
    return !!t.getRecordMatcher(T);
  }
  function k(T, K) {
    if (K = Ne({}, K || l.value), typeof T == "string") {
      const v = Pa(n, T, K.path), E = t.resolve({ path: v.path }, K), P = s.createHref(v.fullPath);
      return {}.NODE_ENV !== "production" && (P.startsWith("//") ? Te(`Location "${T}" resolved to "${P}". A resolved location cannot start with multiple slashes.`) : E.matched.length || Te(`No match found for location with path "${T}"`)), Ne(v, E, {
        params: g(E.params),
        hash: Ko(v.hash),
        redirectedFrom: void 0,
        href: P
      });
    }
    let X;
    if ("path" in T)
      ({}).NODE_ENV !== "production" && "params" in T && !("name" in T) && // @ts-expect-error: the type is never
      Object.keys(T.params).length && Te(`Path "${T.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), X = Ne({}, T, {
        path: Pa(n, T.path, K.path).path
      });
    else {
      const v = Ne({}, T.params);
      for (const E in v)
        v[E] == null && delete v[E];
      X = Ne({}, T, {
        params: u(v)
      }), K.params = u(K.params);
    }
    const Z = t.resolve(X, K), Ee = T.hash || "";
    ({}).NODE_ENV !== "production" && Ee && !Ee.startsWith("#") && Te(`A \`hash\` should always start with the character "#". Replace "${Ee}" with "#${Ee}".`), Z.params = c(g(Z.params));
    const Be = v1(o, Ne({}, T, {
      hash: lv(Ee),
      path: Z.path
    })), h = s.createHref(Be);
    return {}.NODE_ENV !== "production" && (h.startsWith("//") ? Te(`Location "${T}" resolved to "${h}". A resolved location cannot start with multiple slashes.`) : Z.matched.length || Te(`No match found for location with path "${"path" in T ? T.path : T}"`)), Ne({
      fullPath: Be,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Ee,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === yl ? fv(T.query) : T.query || {}
      )
    }, Z, {
      redirectedFrom: void 0,
      href: h
    });
  }
  function L(T) {
    return typeof T == "string" ? Pa(n, T, l.value.path) : Ne({}, T);
  }
  function M(T, K) {
    if (d !== T)
      return po(8, {
        from: K,
        to: T
      });
  }
  function G(T) {
    return ne(T);
  }
  function O(T) {
    return G(Ne(L(T), { replace: !0 }));
  }
  function ge(T) {
    const K = T.matched[T.matched.length - 1];
    if (K && K.redirect) {
      const { redirect: X } = K;
      let Z = typeof X == "function" ? X(T) : X;
      if (typeof Z == "string" && (Z = Z.includes("?") || Z.includes("#") ? Z = L(Z) : (
        // force empty params
        { path: Z }
      ), Z.params = {}), {}.NODE_ENV !== "production" && !("path" in Z) && !("name" in Z))
        throw Te(`Invalid redirect found:
${JSON.stringify(Z, null, 2)}
 when navigating to "${T.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Ne({
        query: T.query,
        hash: T.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in Z ? {} : T.params
      }, Z);
    }
  }
  function ne(T, K) {
    const X = d = k(T), Z = l.value, Ee = T.state, Be = T.force, h = T.replace === !0, v = ge(X);
    if (v)
      return ne(
        Ne(L(v), {
          state: typeof v == "object" ? Ne({}, Ee, v.state) : Ee,
          force: Be,
          replace: h
        }),
        // keep original redirectedFrom if it exists
        K || X
      );
    const E = X;
    E.redirectedFrom = K;
    let P;
    return !Be && cl(o, Z, X) && (P = po(16, { to: E, from: Z }), yt(
      Z,
      Z,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (P ? Promise.resolve(P) : Ce(E, Z)).catch((A) => Jt(A) ? (
      // navigation redirects still mark the router as ready
      Jt(
        A,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? A : Xt(A)
    ) : (
      // reject any unknown error
      fe(A, E, Z)
    )).then((A) => {
      if (A) {
        if (Jt(
          A,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          cl(o, k(A.to), E) && // and we have done it a couple of times
          K && // @ts-expect-error: added only in dev
          (K._count = K._count ? (
            // @ts-expect-error
            K._count + 1
          ) : 1) > 30 ? (Te(`Detected a possibly infinite redirection in a navigation guard when going from "${Z.fullPath}" to "${E.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : ne(
            // keep options
            Ne({
              // preserve an existing replacement but allow the redirect to override it
              replace: h
            }, L(A.to), {
              state: typeof A.to == "object" ? Ne({}, Ee, A.to.state) : Ee,
              force: Be
            }),
            // preserve the original redirectedFrom if any
            K || E
          );
      } else
        A = Y(E, Z, !0, h, Ee);
      return xe(E, Z, A), A;
    });
  }
  function H(T, K) {
    const X = M(T, K);
    return X ? Promise.reject(X) : Promise.resolve();
  }
  function Se(T) {
    const K = At.values().next().value;
    return K && typeof K.runWithContext == "function" ? K.runWithContext(T) : T();
  }
  function Ce(T, K) {
    let X;
    const [Z, Ee, Be] = Mv(T, K);
    X = Na(Z.reverse(), "beforeRouteLeave", T, K);
    for (const v of Z)
      v.leaveGuards.forEach((E) => {
        X.push(hn(E, T, K));
      });
    const h = H.bind(null, T, K);
    return X.push(h), Bt(X).then(() => {
      X = [];
      for (const v of a.list())
        X.push(hn(v, T, K));
      return X.push(h), Bt(X);
    }).then(() => {
      X = Na(Ee, "beforeRouteUpdate", T, K);
      for (const v of Ee)
        v.updateGuards.forEach((E) => {
          X.push(hn(E, T, K));
        });
      return X.push(h), Bt(X);
    }).then(() => {
      X = [];
      for (const v of Be)
        if (v.beforeEnter)
          if (wt(v.beforeEnter))
            for (const E of v.beforeEnter)
              X.push(hn(E, T, K));
          else
            X.push(hn(v.beforeEnter, T, K));
      return X.push(h), Bt(X);
    }).then(() => (T.matched.forEach((v) => v.enterCallbacks = {}), X = Na(Be, "beforeRouteEnter", T, K), X.push(h), Bt(X))).then(() => {
      X = [];
      for (const v of i.list())
        X.push(hn(v, T, K));
      return X.push(h), Bt(X);
    }).catch((v) => Jt(
      v,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? v : Promise.reject(v));
  }
  function xe(T, K, X) {
    r.list().forEach((Z) => Se(() => Z(T, K, X)));
  }
  function Y(T, K, X, Z, Ee) {
    const Be = M(T, K);
    if (Be)
      return Be;
    const h = K === dn, v = en ? history.state : {};
    X && (Z || h ? s.replace(T.fullPath, Ne({
      scroll: h && v && v.scroll
    }, Ee)) : s.push(T.fullPath, Ee)), l.value = T, yt(T, K, X, h), Xt();
  }
  let De;
  function Ke() {
    De || (De = s.listen((T, K, X) => {
      if (!Ln.listening)
        return;
      const Z = k(T), Ee = ge(Z);
      if (Ee) {
        ne(Ne(Ee, { replace: !0 }), Z).catch(Mo);
        return;
      }
      d = Z;
      const Be = l.value;
      en && k1(dl(Be.fullPath, X.delta), ua()), Ce(Z, Be).catch((h) => Jt(
        h,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? h : Jt(
        h,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (ne(
        h.to,
        Z
        // avoid an uncaught rejection, let push call triggerError
      ).then((v) => {
        Jt(
          v,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !X.delta && X.type === Wo.pop && s.go(-1, !1);
      }).catch(Mo), Promise.reject()) : (X.delta && s.go(-X.delta, !1), fe(h, Z, Be))).then((h) => {
        h = h || Y(
          // after navigation, all matched components are resolved
          Z,
          Be,
          !1
        ), h && (X.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Jt(
          h,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-X.delta, !1) : X.type === Wo.pop && Jt(
          h,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), xe(Z, Be, h);
      }).catch(Mo);
    }));
  }
  let We = Eo(), Ue = Eo(), ie;
  function fe(T, K, X) {
    Xt(T);
    const Z = Ue.list();
    return Z.length ? Z.forEach((Ee) => Ee(T, K, X)) : ({}.NODE_ENV !== "production" && Te("uncaught error during route navigation:"), console.error(T)), Promise.reject(T);
  }
  function ot() {
    return ie && l.value !== dn ? Promise.resolve() : new Promise((T, K) => {
      We.add([T, K]);
    });
  }
  function Xt(T) {
    return ie || (ie = !T, Ke(), We.list().forEach(([K, X]) => T ? X(T) : K()), We.reset()), T;
  }
  function yt(T, K, X, Z) {
    const { scrollBehavior: Ee } = e;
    if (!en || !Ee)
      return Promise.resolve();
    const Be = !X && T1(dl(T.fullPath, 0)) || (Z || !X) && history.state && history.state.scroll || null;
    return ho().then(() => Ee(T, K, Be)).then((h) => h && E1(h)).catch((h) => fe(h, T, K));
  }
  const dt = (T) => s.go(T);
  let gt;
  const At = /* @__PURE__ */ new Set(), Ln = {
    currentRoute: l,
    listening: !0,
    addRoute: f,
    removeRoute: m,
    hasRoute: x,
    getRoutes: w,
    resolve: k,
    options: e,
    push: G,
    replace: O,
    go: dt,
    back: () => dt(-1),
    forward: () => dt(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: r.add,
    onError: Ue.add,
    isReady: ot,
    install(T) {
      const K = this;
      T.component("RouterLink", vv), T.component("RouterView", wv), T.config.globalProperties.$router = K, Object.defineProperty(T.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => qe(l)
      }), en && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !gt && l.value === dn && (gt = !0, G(s.location).catch((Ee) => {
        ({}).NODE_ENV !== "production" && Te("Unexpected error when starting the router:", Ee);
      }));
      const X = {};
      for (const Ee in dn)
        Object.defineProperty(X, Ee, {
          get: () => l.value[Ee],
          enumerable: !0
        });
      T.provide(da, K), T.provide(Gu, Xl(X)), T.provide(ri, l);
      const Z = T.unmount;
      At.add(T), T.unmount = function() {
        At.delete(T), At.size < 1 && (d = dn, De && De(), De = null, l.value = dn, gt = !1, ie = !1), Z();
      }, {}.NODE_ENV !== "production" && en && Ev(T, K, t);
    }
  };
  function Bt(T) {
    return T.reduce((K, X) => K.then(() => Se(X)), Promise.resolve());
  }
  return Ln;
}
function Mv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const r = t.matched[i];
    r && (e.matched.find((d) => En(d, r)) ? o.push(r) : n.push(r));
    const l = e.matched[i];
    l && (t.matched.find((d) => En(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function mt() {
  return Ge(da);
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
function rs(e) {
  return !!ct.languages[e];
}
function An(e) {
  return rs(e) && ct.languages[e].length === 1 ? ct.languages[e][0] : !1;
}
function Vv() {
  return ct.languages;
}
function ls(e) {
  var t = An(e);
  return t ? ls(t) : rs(e) ? ct.languages[e][0] : "Zyyy";
}
function Ki(e) {
  var t = An(e);
  return t ? Ki(t) : rs(e) && ct.languages[e][1] || "UNKNOWN";
}
function Xo(e) {
  var t = An(e);
  return t ? Xo(t) : rs(e) && ct.languages[e][2] || e;
}
function zv() {
  var e, t = {};
  for (e in ct.languages)
    An(e) || (t[e] = Xo(e));
  return t;
}
function ed(e) {
  var t, n, o = [];
  for (t in ct.languages)
    if (!An(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ls(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function jv(e) {
  return ed([e]);
}
function td(e) {
  var t;
  for (t in ct.scriptgroups)
    if (ct.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Xi(e) {
  return td(ls(e));
}
function nd(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = An(n) || n, a = Xi(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function od(e) {
  var t, n, o, s = {};
  for (t in ct.languages)
    if (!An(t)) {
      for (n = 0; n < e.length; n++)
        if (Ki(t).includes(e[n])) {
          o = Xi(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Hv(e) {
  return od([e]);
}
function qv(e) {
  var t, n, o, s = [];
  for (t = nd(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Gv(e, t) {
  var n = Xo(e) || e, o = Xo(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function sd(e) {
  return ct.rtlscripts.includes(ls(e));
}
function Wv(e) {
  return sd(e) ? "rtl" : "ltr";
}
function Kv(e) {
  return ct.territories[e] || [];
}
function Xv(e, t) {
  t.target ? ct.languages[e] = [t.target] : ct.languages[e] = [t.script, t.regions, t.autonym];
}
var Pe = {
  addLanguage: Xv,
  getAutonym: Xo,
  getAutonyms: zv,
  getDir: Wv,
  getGroupOfScript: td,
  getLanguages: Vv,
  getLanguagesByScriptGroup: nd,
  getLanguagesByScriptGroupInRegion: Hv,
  getLanguagesByScriptGroupInRegions: od,
  getLanguagesInScript: jv,
  getLanguagesInScripts: ed,
  getLanguagesInTerritory: Kv,
  getRegions: Ki,
  getScript: ls,
  getScriptGroupOfLanguage: Xi,
  isKnown: rs,
  isRedirect: An,
  isRtl: sd,
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
var Zv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, ad = { exports: {} };
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
        for (let w = 0; w < g.length; w++) {
          const x = g[w];
          if (f.test(x)) {
            if (parseInt(x.slice(0, x.indexOf("=")), 10) === u)
              return x.slice(x.indexOf("=") + 1);
            g[w] = void 0;
          }
        }
        g = g.filter((w) => !!w);
        let m = this.getPluralForm(u, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(u, g) {
        const f = new Intl.PluralRules(g), m = f.resolvedOptions().pluralCategories, w = f.select(u);
        return ["zero", "one", "two", "few", "many", "other"].filter((x) => m.includes(x)).indexOf(w);
      }
      convertNumber(u, g = !1) {
        let f = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(u, 10) === u || !f)
            return u;
          const w = [];
          for (const k in f)
            w[f[k]] = k;
          f = w;
          const x = String(u);
          for (let k = 0; k < x.length; k++)
            m += f[x[k]] || x[k];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let w;
          const x = [...o[this.locale] || [], "en"];
          return w = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : x, m = new Intl.NumberFormat(w).format(u), m === "NaN" && (m = u), m;
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
        let g, f, m, w;
        switch (g = "мæ", f = "", m = "", w = "", c.match(/тæ$/i) ? (c = c.slice(0, -1), g = "æм") : c.match(/[аæеёиоыэюя]$/i) ? f = "й" : c.match(/у$/i) ? c.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (f = "й") : c.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), u) {
          case "genitive":
            w = m + f + "ы";
            break;
          case "dative":
            w = m + f + "æн";
            break;
          case "allative":
            w = m + g;
            break;
          case "ablative":
            w = f === "й" ? m + f + "æ" : m + f + "æй";
            break;
          case "superessive":
            w = m + f + "ыл";
            break;
          case "equative":
            w = m + f + "ау";
            break;
          case "comitative":
            w = m + "имæ";
        }
        return c + w;
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
        let f, m, w;
        switch (typeof u) {
          case "string":
          case "number":
            f = u;
            break;
          case "object":
            if (m = u.slice(1).map((x) => this.emit(x, g)), w = u[0].toLowerCase(), typeof this[w] != "function")
              throw new Error('unknown operation "' + w + '"');
            f = this[w](m, g);
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
        let m = u, w = "";
        for (const x in f)
          w += ` ${x}="${f[x]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${w}>${m.join("")}</${g}>`;
      }
    }
    class l {
      constructor(u, { wikilinks: g = !1 } = {}) {
        this.locale = u, this.wikilinks = g, this.emitter = new r(this.locale);
      }
      parse(u, g) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const f = function(m, { wikilinks: w = !1 } = {}) {
            let x = 0;
            function k(N) {
              return () => {
                for (let ee = 0; ee < N.length; ee++) {
                  const Ie = N[ee]();
                  if (Ie !== null)
                    return Ie;
                }
                return null;
              };
            }
            function L(N) {
              const ee = x, Ie = [];
              for (let it = 0; it < N.length; it++) {
                const xt = N[it]();
                if (xt === null)
                  return x = ee, null;
                Ie.push(xt);
              }
              return Ie;
            }
            function M(N, ee) {
              return () => {
                const Ie = x, it = [];
                let xt = ee();
                for (; xt !== null; )
                  it.push(xt), xt = ee();
                return it.length < N ? (x = Ie, null) : it;
              };
            }
            function G(N) {
              const ee = N.length;
              return () => {
                let Ie = null;
                return m.slice(x, x + ee) === N && (Ie = N, x += ee), Ie;
              };
            }
            function O(N) {
              return () => {
                const ee = m.slice(x).match(N);
                return ee === null ? null : (x += ee[0].length, ee[0]);
              };
            }
            const ge = O(/^\s+/), ne = G("|"), H = G(":"), Se = G("\\"), Ce = O(/^./), xe = G("$"), Y = O(/^\d+/), De = G('"'), Ke = G("'"), We = O(w ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Ue = O(w ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), ie = k([fe, O(w ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function fe() {
              const N = L([Se, Ce]);
              return N === null ? null : N[1];
            }
            const ot = k([fe, Ue]), Xt = k([fe, We]);
            function yt() {
              const N = L([xe, Y]);
              return N === null ? null : ["REPLACE", parseInt(N[1], 10) - 1];
            }
            const dt = (gt = O(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), At = function(N) {
              return N.toString();
            }, () => {
              const N = gt();
              return N === null ? null : At(N);
            });
            var gt, At;
            function Ln() {
              const N = L([ne, M(0, _e)]);
              if (N === null)
                return null;
              const ee = N[1];
              return ee.length > 1 ? ["CONCAT"].concat(ee) : ee[0];
            }
            function Bt() {
              const N = L([dt, H, yt]);
              return N === null ? null : [N[0], N[2]];
            }
            function T() {
              const N = L([dt, H, _e]);
              return N === null ? null : [N[0], N[2]];
            }
            function K() {
              const N = L([dt, H]);
              return N === null ? null : [N[0], ""];
            }
            const X = k([function() {
              const N = L([k([Bt, T, K]), M(0, Ln)]);
              return N === null ? null : N[0].concat(N[1]);
            }, function() {
              const N = L([dt, M(0, Ln)]);
              return N === null ? null : [N[0]].concat(N[1]);
            }]), Z = G("{{"), Ee = G("}}"), Be = G("[["), h = G("]]"), v = G("["), E = G("]");
            function P() {
              const N = L([Z, X, Ee]);
              return N === null ? null : N[1];
            }
            const A = k([function() {
              const N = L([M(1, _e), ne, M(1, ce)]);
              return N === null ? null : [["CONCAT"].concat(N[0]), ["CONCAT"].concat(N[2])];
            }, function() {
              const N = L([M(1, _e)]);
              return N === null ? null : [["CONCAT"].concat(N[0])];
            }]);
            function R() {
              let N = null;
              const ee = L([Be, A, h]);
              if (ee !== null) {
                const Ie = ee[1];
                N = ["WIKILINK"].concat(Ie);
              }
              return N;
            }
            function q() {
              let N = null;
              const ee = L([v, M(1, re), ge, M(1, ce), E]);
              return ee !== null && (N = ["EXTLINK", ee[1].length === 1 ? ee[1][0] : ["CONCAT"].concat(ee[1]), ["CONCAT"].concat(ee[3])]), N;
            }
            const I = O(/^[A-Za-z]+/);
            function j() {
              const N = O(/^[^"]*/), ee = L([De, N, De]);
              return ee === null ? null : ee[1];
            }
            function B() {
              const N = O(/^[^']*/), ee = L([Ke, N, Ke]);
              return ee === null ? null : ee[1];
            }
            function te() {
              const N = O(/^\s*=\s*/), ee = L([ge, I, N, k([j, B])]);
              return ee === null ? null : [ee[1], ee[3]];
            }
            function Q() {
              const N = M(0, te)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], N);
            }
            const re = k([P, yt, R, q, function() {
              const N = M(1, ie)();
              return N === null ? null : N.join("");
            }]), ce = k([P, yt, R, q, function() {
              let N = null;
              const ee = x, Ie = G("<"), it = O(/^\/?/), xt = O(/^\s*>/), Yt = L([Ie, I, Q, it, xt]);
              if (Yt === null)
                return null;
              const So = x, Qe = Yt[1], ht = M(0, ce)(), ps = x, sr = L([G("</"), I, xt]);
              if (sr === null)
                return ["CONCAT", m.slice(ee, So)].concat(ht);
              const Td = x, Ad = sr[1], ar = Yt[2];
              if (function(Pn, ms, fa, pa = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Pn = Pn.toLowerCase()) !== (ms = ms.toLowerCase()) || pa.allowedHtmlElements.indexOf(Pn) === -1)
                  return !1;
                const Dd = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let hs = 0, Ld = fa.length; hs < Ld; hs += 2) {
                  const ma = fa[hs];
                  if (pa.allowedHtmlCommonAttributes.indexOf(ma) === -1 && (pa.allowedHtmlAttributesByElement[Pn] || []).indexOf(ma) === -1 || ma === "style" && fa[hs + 1].search(Dd) !== -1)
                    return !1;
                }
                return !0;
              }(Qe, Ad, ar.slice(1)))
                N = ["HTMLELEMENT", Qe, ar].concat(ht);
              else {
                const Pn = (ms) => ms.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                N = ["CONCAT", Pn(m.slice(ee, So))].concat(ht, Pn(m.slice(ps, Td)));
              }
              return N;
            }, function() {
              const N = M(1, Xt)();
              return N === null ? null : N.join("");
            }]), _e = k([P, yt, function() {
              const N = M(1, ot)();
              return N === null ? null : N.join("");
            }]), Fe = function() {
              const N = M(0, ce)();
              return N === null ? null : ["CONCAT"].concat(N);
            }();
            if (Fe === null || x !== m.length)
              throw new Error("Parse error at position " + x.toString() + " in input: " + m);
            return Fe;
          }(u, { wikilinks: this.wikilinks });
          return this.emitter.emit(f, g);
        }
        return this.simpleParse(u, g);
      }
      simpleParse(u, g) {
        return u.replace(/\$(\d+)/g, (f, m) => {
          const w = parseInt(m, 10) - 1;
          return g[w] !== void 0 ? g[w] : "$" + m;
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
          let w = m.length;
          do {
            const x = m.slice(0, w).join("-"), k = this.messageStore.getMessage(c, x);
            if (typeof k == "string")
              return k;
            w--;
          } while (w);
          u = f[g], g++;
        }
        return c;
      }
      registerParserPlugin(c, u) {
        r.prototype[c] = u;
      }
    };
  });
})(ad);
var Qv = ad.exports;
const El = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, id = Symbol("banana-context");
function Ct() {
  const e = Ge(id);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function ey(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = mo(new Qv(e.locale, e));
  return {
    install: (n) => {
      n.provide(id, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = El(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = El(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const ty = {
  name: "CxTranslationWork",
  components: { MwRow: be, MwCol: Ae, MwThumbnail: Ii, MwIcon: He },
  props: {
    translation: {
      type: as,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = le(), n = (a, i) => {
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
      getAutonym: Pe.getAutonym,
      getDir: Pe.getDir,
      getImage: n,
      mwIconArrowForward: Tn,
      mwIconArrowNext: Mi
    };
  }
}, ny = { class: "col shrink pe-4" }, oy = { class: "col" }, sy = { class: "cx-translation__details column justify-between ma-0" }, ay = { class: "row ma-0" }, iy = { class: "col grow" }, ry = { class: "col shrink ps-2" }, ly = ["dir", "textContent"], cy = ["dir", "textContent"], uy = ["textContent"];
function dy(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-icon"), l = _("mw-col"), d = _("mw-row");
  return n.translation ? (y(), D("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = et((c) => e.$emit("click"), ["stop"]))
  }, [
    C("div", ny, [
      p(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    C("div", oy, [
      C("div", sy, [
        C("div", ay, [
          C("div", iy, [
            ze(e.$slots, "title")
          ]),
          C("div", ry, [
            p(r, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = et((c) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        ze(e.$slots, "mid-content"),
        p(d, { class: "cx-translation__footer ma-0" }, {
          default: b(() => [
            p(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: b(() => [
                C("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: ae(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, ly),
                p(r, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                C("span", {
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
              default: b(() => [
                C("span", {
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
  ])) : oe("", !0);
}
const rd = /* @__PURE__ */ z(ty, [["render", dy]]);
const gy = ["lang", "textContent"], fy = ["lang", "textContent"], py = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: zi,
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
    return (a, i) => (y(), F(rd, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": qe(Kc),
      onActionIconClicked: i[0] || (i[0] = (r) => a.$emit("delete-translation"))
    }, {
      title: b(() => [
        C("h5", {
          class: pe(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: ae(e.translation.sourceTitle)
        }, null, 10, gy),
        e.translation.isLeadSectionTranslation ? oe("", !0) : (y(), D("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: ae(e.translation.sourceSectionTitle)
        }, null, 8, fy))
      ]),
      "mid-content": b(() => [
        e.translation.progress ? (y(), F(qe(be), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: b(() => [
            p(qe(Ae), null, {
              default: b(() => [
                p(qe(su), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: qe(o)
                }, null, 8, ["value", "background"])
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        })) : oe("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, cs = () => {
  const e = Ge("breakpoints");
  return { isDesktop: S(
    () => !Oe.isMobileDomain() && e.value.tabletAndUp
  ) };
};
function ue(e) {
  const t = S(() => e.state.application.sourceLanguage), n = S(() => e.state.application.targetLanguage), o = S(
    () => e.state.application.currentMTProvider
  ), s = S(
    () => e.state.application.currentSectionSuggestion
  ), a = S(
    () => e.state.application.currentSourceSection
  ), i = S(
    () => Pe.getAutonym(t.value)
  ), r = S(
    () => Pe.getAutonym(n.value)
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
const Yi = () => {
  const e = le(), t = mt();
  return (n, o, s) => W(void 0, null, function* () {
    const { sourceLanguage: a, targetLanguage: i } = ue(e), r = yield e.dispatch(
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
function us() {
  const e = S(
    () => fo.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: S(
      () => fo.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: e
  };
}
const my = (e, t) => {
  const n = new URLSearchParams(location.search), o = n.get("from"), s = n.get("to"), a = Oe.getCurrentWikiLanguageCode(), i = (g) => !e || Array.isArray(e) && e.includes(g), r = (g) => t.includes(g), l = {
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
}, ci = (e) => {
  if (!history.pushState)
    return;
  const t = e instanceof as, n = new URLSearchParams(location.search);
  n.set("page", e == null ? void 0 : e.sourceTitle), n.set("from", e == null ? void 0 : e.sourceLanguage), n.set("to", e == null ? void 0 : e.targetLanguage), n.set("sx", !0), t && n.set("draft", !0), n.delete("title"), bo(Object.fromEntries(n));
}, bo = (e) => {
  history.replaceState(
    {},
    document.title,
    Cu("Special:ContentTranslation", e)
  );
}, ld = () => new URLSearchParams(location.search).get("force-quick-tutorial"), ds = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = Oe.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = rt({ sx: !0 }, s), o && (s.section = o), location.href = Oe.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, gs = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), bo(Object.fromEntries(o));
}, cd = () => W(void 0, null, function* () {
  yield fo.dispatch("mediawiki/fetchSupportedLanguageCodes");
  const { enabledTargetLanguages: e, supportedLanguageCodes: t } = us(), { sourceLanguage: n, targetLanguage: o } = my(
    e.value,
    t.value
  ), s = new URLSearchParams(location.search), a = s.get("page"), i = s.get("section");
  ds(
    n,
    o,
    a,
    i
  ) || gs(fo, n, o);
}), ud = (e) => (t, n) => {
  const { sourceLanguage: o, targetLanguage: s } = ue(e);
  t === n && (t = s.value, n = o.value), ds(
    t,
    n,
    null,
    null
  ) || (gs(e, t, n), e.dispatch("suggestions/initializeSuggestions"));
}, hy = () => {
  const e = le();
  return (
    /** @param {Translation} translation */
    (t) => {
      const { sourceLanguage: n, targetLanguage: o, sourceTitle: s, sourceSectionTitle: a } = t;
      ds(
        n,
        o,
        s,
        a,
        { draft: !0 }
      ) || (gs(e, n, o), e.dispatch("suggestions/initializeSuggestions"));
    }
  );
}, _y = () => {
  const e = le();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    ds(
      n,
      o,
      s,
      null
    ) || gs(e, n, o);
  };
}, vy = (e) => (t, n) => W(void 0, null, function* () {
  const { sourceLanguage: o, targetLanguage: s } = ue(e);
  t === n && (t = s.value, n = o.value);
  const a = e.getters["application/getCurrentLanguageTitleGroup"], i = a.getTitleForLanguage(t);
  if (!ds(
    t,
    n,
    i,
    null
  )) {
    gs(e, t, n);
    let l = new qt({
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
}), dd = "cx-translation-session-position-", gd = () => dd + mw.user.sessionId(), fd = () => {
  const e = gd();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, yy = function() {
  const e = fd();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(dd)).forEach((n) => mw.storage.remove(n));
  const t = gd();
  mw.storage.set(t, e + 1);
};
let ui = null;
function by(e) {
  if (ui)
    return Promise.resolve(ui);
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
function Sy(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function wy(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), r = fd(), l = {
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
  ) : d = by(i).then((c) => {
    ui = c, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: Sy(c)
      })
    );
  }), d.then(() => {
    yy();
  });
}
const pd = Symbol("event-logging-context"), Kt = function() {
  const e = Ge(pd);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, Cy = () => ({
  install: (e) => {
    e.provide(pd, wy);
  }
}), xy = (e, t, n, o) => W(void 0, null, function* () {
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
}), Ey = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const r = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(r, n.mt.innerHTML), o.mtProviderUsed = r;
    }
  });
}, ky = (e, t, n, o) => W(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return xy(e, t, n, o);
  Ey(e, t);
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
        const l = ky(
          i,
          r,
          (t == null ? void 0 : t.title) || e.title,
          t.language
        );
        o.push(l);
      }
  return Promise.all(o);
}, Ay = { restoreCorporaDraft: Ty }, Ji = () => (e, t, n, o = {}) => {
  Oe.setCXToken(e, t, n), location.href = Oe.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
};
function Dy(e) {
  return e.$el = $(e), e;
}
function Ly(e, t, n, o) {
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
function Py() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function Ny(e, t) {
  return W(this, null, function* () {
    yield Zi(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Dy(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
function Fy(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const My = {
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
    const n = J(null);
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
    return ut(() => W(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Fy;
      const c = yield Ny(l, n.value);
      t.emit("ready"), n.value.appendChild(c.$element[0]), o = Ly(
        c,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Py, o.focus();
    })), { sxeditor: n };
  }
}, Oy = ["lang", "dir"], By = /* @__PURE__ */ C("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ C("div", { class: "toolbar" })
], -1), Iy = ["lang", "dir"];
function $y(e, t, n, o, s, a) {
  return y(), D("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    By,
    C("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, Iy)
  ], 8, Oy);
}
const Uy = /* @__PURE__ */ z(My, [["render", $y]]);
function Zi() {
  return mw.loader.using("mw.cx3.ve");
}
const md = () => {
  const e = le();
  return (t, n) => W(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Zi(), new Promise((s) => {
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
}, fs = () => {
  const e = Kt(), t = le(), n = mt(), {
    currentSourcePage: o,
    currentTargetPage: s,
    sourceLanguage: a,
    targetLanguage: i
  } = ue(t), r = hy(), l = md(), { isDesktop: d } = cs(), c = Ji();
  return (u) => W(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: g,
      targetLanguage: f,
      sourceTitle: m,
      pageRevision: w,
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
    Oe.unsetCXToken(
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
      revision: w
    }), yield l(a.value, m), u.restored || (yield Ht.fetchTranslationUnits(u.translationId).then(
      (M) => Ay.restoreCorporaDraft(
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
}, Qi = () => {
  const e = Yi(), t = fs(), n = le(), { sourceLanguage: o, targetLanguage: s } = ue(n), a = (u, g, f) => {
    const m = n.getters["translator/getTranslation"](
      u,
      Vi.LEAD_SECTION_DUMMY_TITLE,
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
};
const Ry = ["lang", "href", "textContent"], Vy = { key: 1 }, zy = { key: 2 }, jy = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Au,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = le(), o = J(!0), s = J(null), a = S(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.missingSections;
    }), i = S(
      () => a.value && Object.keys(a.value)[0]
    );
    ((m, w, x) => W(this, null, function* () {
      let k = n.getters["suggestions/getSectionSuggestionsForArticle"](
        m,
        w,
        x
      );
      return k || (k = yield Gt.fetchSectionSuggestions(
        m,
        x,
        w
      )), k;
    }))(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => s.value = m).catch((m) => console.log(m)).finally(() => o.value = !1);
    const l = mt();
    cs();
    const d = () => {
      n.dispatch("application/initializeSectionTranslation", s.value), l.push({ name: "sx-section-selector", query: { force: !0 } });
    }, c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: u } = Qi();
    ue(n);
    const g = _y(), f = () => {
      g(t.translation), u(t.translation);
    };
    return (m, w) => (y(), F(rd, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: b(() => [
        C("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: w[0] || (w[0] = et(() => {
          }, ["stop"])),
          textContent: ae(e.translation.sourceTitle)
        }, null, 8, Ry)
      ]),
      "mid-content": b(() => [
        p(qe(be), { class: "ma-0 py-2" }, {
          default: b(() => [
            p(qe(Ae), null, {
              default: b(() => [
                o.value ? (y(), F(qe(sn), { key: 0 })) : a.value ? (y(), D("div", Vy, [
                  p(he, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: qe(js),
                    type: "text",
                    label: i.value,
                    progressive: "",
                    onClick: et(d, ["stop"])
                  }, null, 8, ["icon", "label", "onClick"]),
                  p(he, {
                    class: "cx-published-translation__missing-sections-button pa-0 ms-4",
                    icon: qe(ss),
                    type: "icon",
                    progressive: "",
                    onClick: et(d, ["stop"])
                  }, null, 8, ["icon", "onClick"])
                ])) : (y(), D("div", zy, [
                  p(he, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: qe(js),
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
}, Hy = () => {
  const e = le(), { commit: t } = le(), { sourceLanguage: n, targetLanguage: o } = ue(e), s = Kt();
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
const qy = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: he,
    MwDialog: Mt
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: as,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Hy();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Gy = { class: "pa-4" }, Wy = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Ky(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-dialog"), l = ye("i18n");
  return y(), F(r, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    header: !1,
    "min-height": "unset"
  }, {
    footer: b(() => [
      C("div", Wy, [
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
      C("div", Gy, [
        V(C("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const Xy = /* @__PURE__ */ z(qy, [["render", Ky]]), Yy = { class: "pa-4" }, Jy = { class: "flex pt-2" }, Zy = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: zi,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = () => t("update:modelValue", !1), s = fs(), a = () => {
      s(n.translation), o();
    };
    return (i, r) => {
      const l = ye("i18n");
      return y(), F(qe(Mt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.base10,
        "min-height": "unset",
        title: i.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: b(() => [
          C("div", Jy, [
            p(qe(he), {
              class: "grow py-3",
              large: "",
              label: i.$i18n("sx-confirm-draft-translation-start-button-label"),
              onClick: a
            }, null, 8, ["label"])
          ])
        ]),
        default: b(() => [
          C("div", Yy, [
            V(C("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            V(C("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            C("p", null, [
              V(C("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            V(C("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ], void 0),
        _: 1
      }, 8, ["value", "overlay-color", "title"]);
    };
  }
};
function Qy(e, t, n) {
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
        Pe.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        Pe.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield eb(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function kl(e, t, n) {
  return W(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(Pe.sortByAutonym) : (yield Qy(e, t, n)).sort(Pe.sortByAutonym);
  });
}
function eb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function tb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function nb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function ob(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
function sb(e, t) {
  const n = S(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = Pe.getAutonym(t.value[s]);
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
function ab(e, t, n) {
  const o = J(""), s = J(-1), a = J(null), i = () => {
    s.value++, s.value >= r.value.length && (s.value = 0);
  }, r = S(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return je(e, () => {
    s.value = -1;
  }), je(s, () => W(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = r.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const ib = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Bi
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
      default: tb
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = J(null), o = J(""), s = J([]), a = S(
      () => nb(s.value)
    ), i = S(
      () => ob(s.value)
    ), r = (k) => t.emit("select", k), l = () => t.emit("close"), { autocompletion: d, onTabSelect: c } = sb(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: f, selectedLanguage: m } = ab(o, s, e.suggestions), w = () => {
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
    return je(o, qi(() => W(this, null, function* () {
      s.value = yield kl(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), ut(() => W(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield kl(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: d,
      close: l,
      getAutonym: Pe.getAutonym,
      getDir: Pe.getDir,
      langSelectorContainer: f,
      mwIconClose: Ft,
      mwIconSearch: Jc,
      next: u,
      onEnter: w,
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
}, rb = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, lb = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, cb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ub = { class: "results px-3 pt-4" }, db = { class: "results-header ps-8 pb-2" }, gb = { class: "results-languages--suggestions pa-0 ma-0" }, fb = ["lang", "dir", "aria-selected", "onClick", "textContent"], pb = { class: "results px-3 pt-4" }, mb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, hb = ["lang", "dir", "aria-selected", "onClick", "textContent"], _b = ["aria-selected"], vb = { class: "no-results px-3 py-4" }, yb = { class: "ps-8" };
function bb(e, t, n, o, s, a) {
  const i = _("mw-input"), r = ye("i18n");
  return y(), D("div", rb, [
    ze(e.$slots, "search", {}, () => [
      C("div", lb, [
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
            so(et(o.onEnter, ["prevent"]), ["enter"]),
            so(et(o.next, ["stop", "prevent"]), ["down"]),
            so(et(o.prev, ["stop", "prevent"]), ["up"]),
            so(et(o.close, ["prevent"]), ["esc"]),
            so(et(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    C("section", cb, [
      n.suggestions.length && !o.searchQuery ? ze(e.$slots, "suggestions", { key: 0 }, () => [
        C("section", ub, [
          V(C("p", db, null, 512), [
            [r, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          C("ul", gb, [
            (y(!0), D(we, null, Ze(n.suggestions, (l) => (y(), D("li", {
              key: l,
              class: pe(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: ae(o.getAutonym(l))
            }, null, 10, fb))), 128))
          ])
        ])
      ]) : oe("", !0),
      o.searchResultsByScript.length ? ze(e.$slots, "search", { key: 1 }, () => [
        C("section", pb, [
          n.suggestions.length && !o.searchQuery ? V((y(), D("p", mb, null, 512)), [
            [r, void 0, "cx-sx-language-selector-all-languages"]
          ]) : oe("", !0),
          (y(!0), D(we, null, Ze(o.searchResultsByScript, (l, d) => (y(), D("ul", {
            key: d,
            class: pe(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (y(!0), D(we, null, Ze(l, (c) => (y(), D("li", {
              key: c,
              class: pe(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
              lang: c,
              dir: o.getDir(c),
              role: "option",
              "aria-selected": c === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(c),
              textContent: ae(o.getAutonym(c))
            }, null, 10, hb))), 128)),
            n.allOptionEnabled && !o.searchQuery ? V((y(), D("li", {
              key: 0,
              class: pe(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (c) => o.select("all"))
            }, null, 10, _b)), [
              [r, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : oe("", !0)
          ], 2))), 128))
        ])
      ]) : ze(e.$slots, "noresults", { key: 2 }, () => [
        C("section", vb, [
          V(C("h3", yb, null, 512), [
            [r, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const hd = /* @__PURE__ */ z(ib, [["render", bb]]);
const Sb = {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector: hd,
    MwDialog: Mt,
    MwIcon: He,
    MwButton: he
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
    const n = Ge("breakpoints"), o = S(() => n.value.mobile), s = J(!1), a = J(!1), i = () => s.value = !0, r = () => a.value = !0, l = () => s.value = !1, d = () => a.value = !1, c = (m) => {
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
      getAutonym: Pe.getAutonym,
      getDir: Pe.getDir,
      mwIconArrowNext: Mi,
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
}, wb = { class: "row sx-translation-list-language-selector ma-0 justify-center items-center" }, Cb = { class: "col-5 justify-end" }, xb = {
  key: 0,
  class: "mw-ui-autonym"
}, Eb = ["lang", "dir", "textContent"], kb = { class: "sx-translation-list-language-selector__arrow col-2 justify-center" }, Tb = { class: "col-5 justify-start" }, Ab = {
  key: 0,
  class: "mw-ui-autonym"
}, Db = ["lang", "dir", "textContent"];
function Lb(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-language-selector"), l = _("mw-dialog"), d = _("mw-icon"), c = ye("i18n");
  return y(), D("div", wb, [
    C("div", Cb, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        onClick: et(o.openSourceLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsSource ? V((y(), D("span", xb, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (y(), D("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedSourceLanguage,
            dir: o.getDir(n.selectedSourceLanguage),
            textContent: ae(o.getAutonym(n.selectedSourceLanguage))
          }, null, 8, Eb))
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
    C("div", kb, [
      p(d, { icon: o.mwIconArrowNext }, null, 8, ["icon"])
    ]),
    C("div", Tb, [
      p(i, {
        indicator: o.mwIconExpand,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        disabled: n.targetLanguages.length < 2,
        onClick: et(o.openTargetLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsTarget ? V((y(), D("span", Ab, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (y(), D("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedTargetLanguage,
            dir: o.getDir(n.selectedTargetLanguage),
            textContent: ae(o.getAutonym(n.selectedTargetLanguage))
          }, null, 8, Db))
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
const er = /* @__PURE__ */ z(Sb, [["render", Lb]]), Pb = {
  name: "CxTranslationList",
  components: {
    CxTranslationWorkDraft: py,
    CxTranslationWorkPublished: jy,
    MwCard: Wt,
    MwSpinner: sn,
    SxConfirmTranslationDeletionDialog: Xy,
    SxConfirmTranslationStartDialog: Zy,
    SxTranslationListLanguageSelector: er
  },
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
    const t = J("all"), n = J("all"), o = le(), s = S(
      () => o.state.translator.translationsLoaded[e.translationStatus]
    ), { enabledTargetLanguages: a } = us(), i = J(!1), r = J(!1), l = J(null), d = J(null), c = S(
      () => e.translationStatus === "draft"
    ), u = S(
      () => o.getters["translator/getTranslationsByStatus"](
        e.translationStatus
      )
    ), g = S(
      () => t.value === "all"
    ), f = S(
      () => n.value === "all"
    ), m = S(
      () => u.value.filter(
        (O) => (g.value || O.sourceLanguage === t.value) && (f.value || O.targetLanguage === n.value)
      ).sort((O, ge) => O.lastUpdatedTimestamp < ge.lastUpdatedTimestamp)
    ), w = S(() => {
      let O = u.value.map(
        (ge) => ge.targetLanguage
      );
      return a.value && (O = O.filter(
        (ge) => a.value.includes(ge)
      )), [...new Set(O)];
    }), x = S(() => {
      const O = u.value.map(
        (ge) => ge.sourceLanguage
      );
      return [...new Set(O)];
    }), k = (O) => {
      l.value = O, i.value = !0;
    }, L = S(
      () => e.activeStatus === e.translationStatus
    ), M = fs();
    return {
      activeTranslations: m,
      availableSourceLanguages: x,
      availableTargetLanguages: w,
      askDeletionConfirmation: k,
      deletionDialogOn: i,
      isActive: L,
      isDraftTranslationList: c,
      loaded: s,
      selectedSourceLanguage: t,
      selectedTargetLanguage: n,
      startDraftTranslation: (O) => {
        O.isArticleTranslation ? (d.value = O, r.value = !0) : M(O);
      },
      translationConfirmationDialogOn: r,
      translationToDelete: l,
      translationToStart: d
    };
  }
}, Nb = ["textContent"], Fb = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, Mb = {
  key: 2,
  class: "cx-translation-list-wrapper"
};
function Ob(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector"), r = _("mw-spinner"), l = _("cx-translation-work-draft"), d = _("cx-translation-work-published"), c = _("sx-confirm-translation-deletion-dialog"), u = _("sx-confirm-translation-start-dialog"), g = _("mw-card");
  return V((y(), F(g, {
    class: pe(`cx-translation-list--${n.translationStatus}`)
  }, {
    header: b(() => [
      C("h3", {
        class: "mw-ui-card__title pa-4 pt-5 mb-0",
        textContent: ae(e.$i18n(`cx-translation-label-${n.translationStatus}`))
      }, null, 8, Nb)
    ]),
    default: b(() => [
      p(i, {
        "selected-source-language": o.selectedSourceLanguage,
        "onUpdate:selectedSourceLanguage": t[0] || (t[0] = (f) => o.selectedSourceLanguage = f),
        "selected-target-language": o.selectedTargetLanguage,
        "onUpdate:selectedTargetLanguage": t[1] || (t[1] = (f) => o.selectedTargetLanguage = f),
        "source-languages": o.availableSourceLanguages,
        "target-languages": o.availableTargetLanguages,
        "all-option-enabled": ""
      }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
      o.loaded ? oe("", !0) : (y(), F(r, { key: 0 })),
      o.isDraftTranslationList ? (y(), D("div", Fb, [
        (y(!0), D(we, null, Ze(o.activeTranslations, (f) => (y(), F(l, {
          key: `${n.translationStatus}-${f.key}`,
          translation: f,
          onClick: (m) => o.startDraftTranslation(f),
          onDeleteTranslation: (m) => o.askDeletionConfirmation(f)
        }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
      ])) : (y(), D("div", Mb, [
        (y(!0), D(we, null, Ze(o.activeTranslations, (f) => (y(), F(d, {
          key: `${n.translationStatus}-${f.key}`,
          translation: f,
          onDeleteTranslation: (m) => o.askDeletionConfirmation(f)
        }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
      ])),
      p(c, {
        modelValue: o.deletionDialogOn,
        "onUpdate:modelValue": t[2] || (t[2] = (f) => o.deletionDialogOn = f),
        translation: o.translationToDelete
      }, null, 8, ["modelValue", "translation"]),
      p(u, {
        modelValue: o.translationConfirmationDialogOn,
        "onUpdate:modelValue": t[3] || (t[3] = (f) => o.translationConfirmationDialogOn = f),
        translation: o.translationToStart
      }, null, 8, ["modelValue", "translation"])
    ], void 0),
    _: 1
  }, 8, ["class"])), [
    [Ni, o.isActive]
  ]);
}
const Bb = /* @__PURE__ */ z(Pb, [["render", Ob]]);
const Ib = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: Ii, MwIcon: He, MwRow: be, MwCol: Ae },
  props: {
    suggestion: {
      type: [ji, qt, Go],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = le(), n = S(() => e.suggestion), o = S(
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
      () => n.value instanceof qt
    ), l = S(
      () => n.value instanceof Go
    ), { sourceLanguageAutonym: d, targetLanguageAutonym: c } = ue(t), u = S(
      () => l.value ? Qc : Zc
    ), g = Ge("colors"), f = S(
      () => l.value ? g.primary : "currentColor"
    );
    return {
      bookmarkIcon: u,
      bookmarkIconColor: f,
      description: i,
      getDir: Pe.getDir,
      isFavoriteSuggestion: l,
      isSectionSuggestion: r,
      missingSectionsCount: a,
      mwIconArrowNext: Mi,
      mwIconClose: Ft,
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
  const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-row"), d = _("mw-icon"), c = ye("i18n");
  return n.suggestion ? (y(), D("div", $b, [
    C("div", Ub, [
      p(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    C("div", Rb, [
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
                              }, null, 8, Vb)
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
                    default: b(() => [
                      o.isFavoriteSuggestion ? oe("", !0) : (y(), F(d, {
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
          o.isSectionSuggestion ? (y(), F(r, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: b(() => [
              V(C("small", null, null, 512), [
                [c, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ], void 0, !0),
            _: 1
          })) : o.isFavoriteSuggestion ? (y(), F(r, {
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
                      }, null, 8, jb),
                      p(d, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      C("small", {
                        textContent: ae(o.targetLanguageAutonym)
                      }, null, 8, Hb)
                    ], void 0, !0),
                    _: 1
                  }),
                  o.missingSectionsCount ? (y(), F(r, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: b(() => [
                      V(C("small", null, null, 512), [
                        [c, [
                          o.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ], void 0, !0),
                    _: 1
                  })) : oe("", !0)
                ], void 0, !0),
                _: 1
              })
            ], void 0, !0),
            _: 1
          })) : oe("", !0)
        ], void 0),
        _: 1
      })
    ])
  ])) : oe("", !0);
}
const _d = /* @__PURE__ */ z(Ib, [["render", qb]]), Gb = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = us(), n = S(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Wb = () => {
  const e = le(), { sourceLanguage: t, targetLanguage: n } = ue(e), o = Kt(), s = S(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = S(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = S(
    () => !s.value && !a.value
  ), r = J(0), l = J(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, c = 4, u = S(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      r.value
    )
  ), g = S(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), f = () => {
    m(), w();
  }, m = () => {
    const G = u.value.length === d, O = (r.value + 1) % c, ge = G && e.getters["application/getSectionSuggestionsSliceByIndex"](O).length > 0;
    (!G || !ge) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), G && L();
  }, w = () => {
    const G = g.value.length === d, O = (l.value + 1) % c, ge = G && e.getters["application/getPageSuggestionsSliceByIndex"](O).length > 0;
    (!G || !ge) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), G && M();
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
    }), e.commit("suggestions/removePageSuggestion", G), w();
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
}, vd = (e) => W(void 0, null, function* () {
  return fo.dispatch("suggestions/removeFavoriteSuggestion", e);
});
const Kb = {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector: er,
    CxTranslationSuggestion: _d,
    MwCard: Wt,
    MwButton: he,
    MwSpinner: sn
  },
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = le(), { sourceLanguage: t, targetLanguage: n } = ue(e), { supportedLanguageCodes: o, availableTargetLanguages: s } = Gb(), a = ud(e), i = (H) => a(H, n.value), r = (H) => a(t.value, H), l = Yi(), d = (H) => l(
      H.sourceTitle,
      "dashboard",
      "suggestion_no_seed"
    ), { startPageSuggestion: c } = Qi(), {
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: x,
      sectionSuggestionsLoading: k,
      showRefreshButton: L
    } = Wb(), M = J(null), G = Kt();
    return {
      availableTargetLanguages: s,
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: g,
      discardPageSuggestion: f,
      discardSectionSuggestion: m,
      mwIconRefresh: Yc,
      markFavoritePageSuggestion: (H) => W(this, null, function* () {
        return e.dispatch("suggestions/addPageSuggestionAsFavorite", H);
      }),
      markFavoriteSectionSuggestion: (H) => W(this, null, function* () {
        return e.dispatch("suggestions/addSectionSuggestionAsFavorite", H);
      }),
      unmarkFavoriteSectionSuggestion: vd,
      pageSuggestionsLoading: x,
      pageSuggestionsList: M,
      refreshSuggestions: () => {
        G({
          event_type: "dashboard_refresh_suggestions",
          translation_source_language: t.value,
          translation_target_language: n.value
        }), w(), M.value.$el.scrollIntoView({ behavior: "smooth" });
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
}, Xb = ["textContent"], Yb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Jb = { class: "cx-translation-list__division-title ma-0 pa-4" }, Zb = { class: "cx-suggestion-list__refresh-button-container justify-center" };
function Qb(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector"), r = _("mw-card"), l = _("cx-translation-suggestion"), d = _("mw-spinner"), c = _("mw-button"), u = ye("i18n");
  return V((y(), D("div", null, [
    p(r, { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
      header: b(() => [
        C("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: ae(e.$i18n("cx-suggestionlist-title"))
        }, null, 8, Xb)
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
        V(C("h5", Yb, null, 512), [
          [u, void 0, "cx-suggestion-list-new-pages-division"]
        ]),
        (y(!0), D(we, null, Ze(o.currentPageSuggestionsSlice, (g, f) => (y(), F(l, {
          key: `page-suggestion-${f}`,
          suggestion: g,
          onClose: (m) => o.discardPageSuggestion(g),
          onClick: (m) => o.startPageSuggestion(g),
          onBookmark: (m) => o.markFavoritePageSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.pageSuggestionsLoading ? (y(), F(d, { key: 0 })) : oe("", !0)
      ], void 0),
      _: 1
    }, 512),
    p(r, { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
      default: b(() => [
        V(C("h5", Jb, null, 512), [
          [u, void 0, "cx-suggestionlist-expand-sections-title"]
        ]),
        (y(!0), D(we, null, Ze(o.currentSectionSuggestionsSlice, (g, f) => (y(), F(l, {
          key: `section-suggestion-${f}`,
          class: "ma-0",
          suggestion: g,
          onClose: (m) => o.discardSectionSuggestion(g),
          onClick: (m) => o.startSectionTranslation(g),
          onBookmark: (m) => o.markFavoriteSectionSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.sectionSuggestionsLoading ? (y(), F(d, { key: 0 })) : oe("", !0)
      ], void 0),
      _: 1
    }),
    C("div", Zb, [
      o.showRefreshButton ? (y(), F(c, {
        key: 0,
        class: "ma-0 pa-4",
        type: "text",
        label: e.$i18n("cx-suggestionlist-refresh"),
        icon: o.mwIconRefresh,
        onClick: o.refreshSuggestions
      }, null, 8, ["label", "icon", "onClick"])) : oe("", !0)
    ])
  ], 512)), [
    [Ni, n.active]
  ]);
}
const eS = /* @__PURE__ */ z(Kb, [["render", Qb]]), tS = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: _d,
    MwCard: Wt
  },
  setup() {
    const e = mt(), t = le();
    return {
      favorites: S(() => t.state.suggestions.favorites || []),
      startFavoriteTranslation: (s) => W(this, null, function* () {
        yield t.dispatch(
          "application/startFavoriteSectionTranslation",
          s
        ), e.push({
          name: "sx-translation-confirmer",
          query: { previousRoute: "dashboard" }
        });
      }),
      unmarkFavoriteSectionSuggestion: vd
    };
  }
}, nS = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function oS(e, t, n, o, s, a) {
  const i = _("cx-translation-suggestion"), r = _("mw-card"), l = ye("i18n");
  return o.favorites.length ? (y(), F(r, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: b(() => [
      V(C("h3", nS, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: b(() => [
      (y(!0), D(we, null, Ze(o.favorites, (d, c) => (y(), F(i, {
        key: `favorite-${c}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.unmarkFavoriteSectionSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ], void 0),
    _: 1
  })) : oe("", !0);
}
const sS = /* @__PURE__ */ z(tS, [["render", oS]]);
const aS = {
  name: "CxHelpPanel",
  components: { MwIcon: He },
  setup() {
    const e = Ct();
    return { listItems: [
      {
        icon: Um,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Dm,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Rm,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, iS = { class: "cx-help-panel pa-4" }, rS = { class: "cx-help-panel__item-list mt-6 ps-2" }, lS = ["href"], cS = ["textContent"];
function uS(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = ye("i18n");
  return y(), D("div", iS, [
    V(C("h5", null, null, 512), [
      [r, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    C("ul", rS, [
      (y(!0), D(we, null, Ze(o.listItems, (l, d) => (y(), D("li", {
        key: d,
        class: "mt-4"
      }, [
        C("a", {
          href: l.href,
          target: "_blank"
        }, [
          p(i, {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          C("span", {
            textContent: ae(l.label)
          }, null, 8, cS)
        ], 8, lS)
      ]))), 128))
    ])
  ]);
}
const dS = /* @__PURE__ */ z(aS, [["render", uS]]);
const gS = {
  name: "CxStatsPanel",
  components: { MwCol: Ae, MwRow: be },
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
    ), s = J(null);
    return je(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), r = Object.keys(e.stats || {}).sort(), l = r.reduce(
          (M, G) => Math.max(M, a[G].delta),
          0
        ), d = r.map((M) => a[M].delta), c = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = c, s.value.height = u;
        const g = 4, f = 6, m = 50, w = (m - g) / l;
        let x = g;
        const k = Math.floor(
          (c - g) / (f + g)
        ), L = d.slice(
          Math.max(d.length - k, 0)
        );
        L.forEach((M, G) => {
          G === L.length - 1 && (i.fillStyle = "#36c");
          const O = m - M * w;
          i.fillRect(x, O, f, M * w), x += f + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, fS = { class: "cx-stats-panel pa-4" }, pS = ["textContent"], mS = { class: "cx-stats-panel__monthly-stats-label" }, hS = ["textContent"], _S = { class: "cx-stats-panel__total-stats-label" }, vS = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function yS(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-row"), l = ye("i18n");
  return y(), D("div", fS, [
    V(C("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    p(r, null, {
      default: b(() => [
        p(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: b(() => [
            C("h3", {
              textContent: ae(o.thisMonthStats)
            }, null, 8, pS),
            V(C("h5", mS, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, { class: "cx-stats-panel__total-stats" }, {
          default: b(() => [
            C("h3", {
              textContent: ae(o.total)
            }, null, 8, hS),
            V(C("h5", _S, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    C("canvas", vS, null, 512)
  ]);
}
const bS = /* @__PURE__ */ z(gS, [["render", yS]]);
const SS = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: Ae, MwRow: be, MwCard: Wt, MwIcon: He },
  data: () => ({
    mwIconLabFlask: tu,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, wS = { class: "complementary" }, CS = { class: "complementary mt-4" }, xS = ["href"], ES = { class: "complementary" }, kS = ["href"];
function TS(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("mw-card"), c = ye("i18n");
  return y(), F(d, { class: "experimental-support-banner mb-1" }, {
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
              V(C("h5", null, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              V(C("p", wS, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              C("p", CS, [
                V(C("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, xS), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              C("p", ES, [
                V(C("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, kS), [
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
const AS = /* @__PURE__ */ z(SS, [["render", TS]]), tr = (e) => () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
  e.dispatch("translator/fetchTranslationsByStatus", "published"),
  e.dispatch("translator/fetchTranslationsByStatus", "draft")
]).catch((t) => {
  mw.log.error("[CX] Error while fetching translations", t);
}), yd = () => {
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
}, DS = () => {
  const e = le(), t = Yi(), n = Kt(), o = fs(), s = tr(e);
  return (l) => W(void 0, [l], function* ({ pageTitle: a, isDraftTranslation: i, sectionTitle: r }) {
    const d = yd() || "direct_preselect", { sourceLanguage: c, targetLanguage: u } = ue(e);
    if (n({
      event_type: "dashboard_open",
      event_source: d,
      translation_source_language: c.value,
      translation_target_language: u.value
    }), i) {
      yield s();
      const g = e.getters["translator/getTranslation"](
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
}, LS = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  if (!t || !n)
    return null;
  const o = e.get("section"), s = !!e.get("draft");
  return { pageTitle: n, isDraftTranslation: s, sectionTitle: o };
}, PS = () => {
  const e = Kt(), t = le(), n = DS(), o = tr(t);
  return () => W(void 0, null, function* () {
    yield cd();
    const s = LS();
    if (s) {
      n(s);
      return;
    }
    const { sourceLanguage: a, targetLanguage: i } = ue(t);
    e({
      event_type: "dashboard_open",
      event_source: yd() || "direct",
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
};
const NS = {
  name: "CxDashboard",
  components: {
    CxHelpPanel: dS,
    MwCol: Ae,
    CxFavoriteList: sS,
    CxStatsPanel: bS,
    CxSuggestionList: eS,
    CxTranslationList: Bb,
    ExperimentalSupportBanner: AS,
    MwBottomNavigation: gm,
    MwButton: he,
    MwButtonGroup: ts,
    MwRow: be
  },
  setup() {
    const e = J("suggestions"), t = Ct(), n = S(() => [
      {
        value: "suggestions",
        props: {
          label: t.i18n(
            "cx-translation-filter-suggested-translations"
          ),
          icon: Jr,
          type: "text"
        }
      },
      {
        value: "draft",
        props: {
          label: t.i18n("cx-translation-filter-draft-translations"),
          icon: Cn,
          type: "text"
        }
      },
      {
        value: "published",
        props: {
          label: t.i18n(
            "cx-translation-filter-published-translations"
          ),
          icon: Yr,
          type: "text"
        }
      }
    ]);
    ut(() => {
      new URLSearchParams(window.location.search).get("sx") && (e.value = "suggestions");
    });
    const o = mt(), s = () => o.push({ name: "sx-article-search" });
    je(e, () => window.scrollTo(0, 0)), PS()();
    const i = le();
    i.dispatch("translator/fetchTranslatorStats");
    const r = S(
      () => i.state.translator.translatorStats
    );
    return {
      active: e,
      listSelector: n,
      mwIconAdd: js,
      mwIconArticleCheck: Yr,
      mwIconLightBulb: Jr,
      mwIconEdit: Cn,
      searchTranslation: s,
      translatorStats: r
    };
  }
};
function FS(e, t, n, o, s, a) {
  const i = _("experimental-support-banner"), r = _("mw-button"), l = _("mw-row"), d = _("mw-button-group"), c = _("mw-col"), u = _("cx-favorite-list"), g = _("cx-suggestion-list"), f = _("cx-translation-list"), m = _("cx-stats-panel"), w = _("cx-help-panel"), x = _("mw-bottom-navigation");
  return y(), D("div", null, [
    e.$incompleteVersion ? (y(), F(i, {
      key: 0,
      class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
    })) : oe("", !0),
    p(l, { class: "ma-0" }, {
      default: b(() => [
        p(r, {
          progressive: "",
          icon: o.mwIconAdd,
          label: e.$i18n("cx-create-new-translation"),
          class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12 my-4",
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
        e.$mwui.breakpoint.tabletAndUp ? (y(), F(c, {
          key: 0,
          class: "px-0",
          tablet: "3",
          desktop: "2"
        }, {
          default: b(() => [
            p(d, {
              id: "dashboard-list-selector--desktop",
              items: o.listSelector,
              active: o.active,
              onSelect: t[0] || (t[0] = (k) => o.active = k)
            }, null, 8, ["items", "active"])
          ], void 0, !0),
          _: 1
        })) : oe("", !0),
        p(c, {
          class: "cx-dashboard__main-panel px-0",
          cols: "12",
          tablet: "9",
          desktop: "7"
        }, {
          default: b(() => [
            p(u),
            p(g, {
              active: o.active === "suggestions"
            }, null, 8, ["active"]),
            p(f, {
              "translation-status": "draft",
              "active-status": o.active
            }, null, 8, ["active-status"]),
            p(f, {
              "translation-status": "published",
              "active-status": o.active
            }, null, 8, ["active-status"])
          ], void 0, !0),
          _: 1
        }),
        p(c, {
          class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
          cols: "12",
          tablet: "9",
          desktop: "3"
        }, {
          default: b(() => [
            p(l, {
              class: "ma-0",
              align: "start"
            }, {
              default: b(() => [
                p(c, {
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
                p(c, {
                  cols: "12",
                  tablet: "6",
                  desktop: "12",
                  class: "px-0 ps-tablet-2 ps-desktop-0"
                }, {
                  default: b(() => [
                    p(w)
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
    e.$mwui.breakpoint.mobile ? (y(), F(x, {
      key: 1,
      active: o.active,
      "onUpdate:active": t[1] || (t[1] = (k) => o.active = k),
      items: o.listSelector
    }, null, 8, ["active", "items"])) : oe("", !0)
  ]);
}
const MS = /* @__PURE__ */ z(NS, [["render", FS]]), OS = {
  name: "DashboardView",
  components: { CxDashboard: MS }
}, BS = { class: "cx-translation-dashboard" };
function IS(e, t, n, o, s, a) {
  const i = _("cx-dashboard");
  return y(), D("main", BS, [
    p(i, { class: "mb-4 pb-12" })
  ]);
}
const Tl = /* @__PURE__ */ z(OS, [["render", IS]]), $S = (e) => {
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
      return Oe.getPageUrl(
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
}, nr = () => {
  const e = le(), { currentSectionSuggestion: t, currentSourcePage: n } = ue(e), o = md(), s = (r, l) => W(void 0, null, function* () {
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
}, US = () => {
  const e = mt(), t = le(), { isDesktop: n } = cs(), o = new URLSearchParams(location.search), s = J(o.get("section")), {
    currentSourceSection: a,
    currentSectionSuggestion: i,
    sourceLanguage: r,
    targetLanguage: l
  } = ue(t), d = S(
    () => {
      var k;
      return !!((k = i.value) != null && k.targetTitle);
    }
  ), c = () => {
    s.value = null, o.delete("section"), bo(Object.fromEntries(o));
  }, { selectPageSectionByIndex: u, selectPageSectionByTitle: g } = nr(), f = Ji(), m = () => W(void 0, null, function* () {
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
  }), w = () => {
    s.value ? m() : d.value ? e.push({ name: "sx-section-selector" }) : x(), ci(i.value);
  }, x = () => W(void 0, null, function* () {
    var k;
    if (n.value) {
      const L = (k = i.value) == null ? void 0 : k.sourceTitle;
      f(r.value, l.value, L);
    } else
      u(0), ld() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }), ci(i.value);
  });
  return {
    clearPreFilledSection: c,
    startNewTranslation: x,
    onSectionSelectorClick: w,
    preFilledSectionTitle: s
  };
};
const RS = {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton: he,
    MwRow: be,
    MwCol: Ae,
    MwIcon: He
  },
  setup() {
    const e = mt(), t = le(), n = Ge("colors"), { targetLanguageAutonym: o, currentSectionSuggestion: s } = ue(t), {
      clearPreFilledSection: a,
      startNewTranslation: i,
      onSectionSelectorClick: r,
      preFilledSectionTitle: l
    } = US(), {
      actionInformationMessageArgs: d,
      getActionButtonLabel: c,
      isProgressiveButton: u,
      targetArticlePath: g,
      targetPageExists: f
    } = $S(s), m = Ct(), w = S(
      () => m.i18n(c(!!l.value))
    ), { isDesktop: x } = cs(), k = S(
      () => m.i18n(...d.value)
    ), L = () => {
      e.push({ name: "sx-section-selector" }), ci(s.value);
    };
    return ut(() => {
      const M = l.value;
      M && !s.value.hasSectionTitle(M) && a();
    }), {
      actionButtonLabel: w,
      actionInformationMessage: k,
      isProgressiveButton: u,
      mwIconLinkExternal: os,
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
}, VS = { class: "sx-translation-confirmer-body pb-4" }, zS = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, jS = ["textContent"], HS = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, qS = ["href"], GS = ["textContent"];
function WS(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-icon"), l = _("mw-row"), d = _("mw-button"), c = ye("i18n");
  return y(), D("section", VS, [
    o.preFilledSectionTitle ? (y(), D("section", zS, [
      V(C("h6", null, null, 512), [
        [c, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
      ]),
      C("h5", {
        class: "ma-0",
        textContent: ae(o.preFilledSectionTitle)
      }, null, 8, jS)
    ])) : o.targetPageExists ? (y(), D("section", HS, [
      p(l, {
        class: "sx-translation-confirmer__translation-status ma-0 pb-2",
        justify: "between"
      }, {
        default: b(() => [
          V(p(i, {
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
              ], 8, qS)
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
              }, null, 8, GS)
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])) : oe("", !0),
    p(l, {
      class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
      justify: "center"
    }, {
      default: b(() => [
        o.preFilledSectionTitle ? (y(), F(i, {
          key: 0,
          shrink: "",
          class: "me-4"
        }, {
          default: b(() => [
            V(p(d, {
              large: "",
              progressive: "",
              type: "text",
              onClick: o.onMoreSectionsClick
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-more-sections-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : oe("", !0),
        o.targetPageExists && o.isDesktop ? (y(), F(i, {
          key: 1,
          shrink: "",
          class: "me-4"
        }, {
          default: b(() => [
            V(p(d, {
              large: "",
              onClick: o.startNewTranslation
            }, null, 8, ["onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-new-desktop-translation-button-label"]
            ])
          ], void 0, !0),
          _: 1
        })) : oe("", !0),
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
const KS = /* @__PURE__ */ z(RS, [["render", WS]]);
const XS = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: er
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = us(), n = le(), { sourceLanguage: o, targetLanguage: s } = ue(n), a = S(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = S(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), r = S(
      () => t.value || e.value
    ), l = vy(n);
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
function YS(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector");
  return y(), F(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const bd = /* @__PURE__ */ z(XS, [["render", YS]]);
const JS = {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow: be,
    MwCol: Ae,
    MwIcon: He,
    MwButton: he
  },
  setup() {
    const e = le(), {
      currentSectionSuggestion: t,
      currentSourcePage: n
    } = ue(e), o = S(() => e.state.suggestions.favorites || []), s = S(
      () => o.value.some(
        (f) => t.value.sourceTitle === f.title && t.value.sourceLanguage === f.sourceLanguage && t.value.targetLanguage === f.targetLanguage
      )
    ), a = () => W(this, null, function* () {
      return e.dispatch(
        "suggestions/removeFavoriteSuggestion",
        new Go({
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
        return Oe.getPageUrl(
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
          (m, w) => m + w,
          0
        );
      }
    );
    return {
      bookmarkIcon: r,
      isFavorite: s,
      langLinksCount: u,
      mwIconLanguage: eu,
      mwIconLinkExternal: os,
      sourceArticle: n,
      sourceArticlePath: c,
      sourceTitle: d,
      toggleFavorite: l,
      weeklyViews: g
    };
  }
}, ZS = ["textContent"], QS = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, ew = ["textContent"];
function tw(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = ye("i18n");
  return y(), F(d, {
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
                  C("h5", {
                    class: "ma-0 me-1",
                    textContent: ae(o.sourceTitle)
                  }, null, 8, ZS),
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
          C("p", QS, [
            p(i, {
              icon: o.mwIconLanguage,
              size: "16",
              class: "me-1"
            }, null, 8, ["icon"]),
            C("span", {
              class: "pe-3",
              textContent: ae(o.langLinksCount)
            }, null, 8, ew),
            V(C("span", null, null, 512), [
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
const nw = /* @__PURE__ */ z(JS, [["render", tw]]);
const ow = {
  name: "SxTranslationConfirmer",
  components: {
    MwIcon: He,
    SxTranslationConfirmerArticleInformation: nw,
    MwRow: be,
    MwCol: Ae,
    MwButton: he,
    SxArticleLanguageSelector: bd,
    SxTranslationConfirmerActionPanel: KS
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
    const t = le(), { sourceLanguage: n, targetLanguage: o, currentSourcePage: s } = ue(t), a = S(
      () => {
        var d, c;
        return (c = (d = s.value) == null ? void 0 : d.image) == null ? void 0 : c.source;
      }
    ), i = Kt();
    ut(() => {
      t.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), i({
        event_type: "dashboard_translation_start",
        event_source: e.eventSource,
        translation_source_language: n.value,
        translation_target_language: o.value
      }), Zi(), t.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        o.value
      );
    });
    const r = mt();
    return {
      articleImageSource: a,
      mwIconArticle: Oi,
      mwIconClose: Ft,
      onClose: () => {
        t.dispatch("application/clearCurrentSectionSuggestion"), bo(null), r.push({ name: e.previousRoute });
      }
    };
  }
}, sw = { class: "sx-translation-confirmer" }, aw = { class: "mb-0" }, iw = { class: "sx-translation-confirmer__article-image flex justify-center" }, rw = ["src"], lw = { class: "ma-3" };
function cw(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-icon"), c = _("sx-translation-confirmer-article-information"), u = _("sx-article-language-selector"), g = _("sx-translation-confirmer-action-panel"), f = ye("i18n"), m = ye("i18n-html");
  return y(), D("section", sw, [
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
            V(C("h5", aw, null, 512), [
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
    C("div", iw, [
      o.articleImageSource ? (y(), D("img", {
        key: 0,
        src: o.articleImageSource
      }, null, 8, rw)) : (y(), F(d, {
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
        C("p", lw, [
          V(C("small", null, null, 512), [
            [m, void 0, "cx-license-agreement"]
          ])
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const uw = /* @__PURE__ */ z(ow, [["render", cw]]);
const dw = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: uw
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
function gw(e, t, n, o, s, a) {
  const i = _("sx-translation-confirmer");
  return y(), D("main", {
    class: pe(["sx-translation-confirmer-view", a.classes])
  }, [
    p(i, {
      "event-source": n.eventSource,
      "previous-route": n.previousRoute
    }, null, 8, ["event-source", "previous-route"])
  ], 2);
}
const fw = /* @__PURE__ */ z(dw, [["render", gw]]), pw = {
  name: "SxSectionSelectorViewArticleItem",
  components: {
    MwRow: be,
    MwButton: he
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
    mwIconLinkExternal: os
  })
};
function hw(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return y(), F(r, {
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
const _w = /* @__PURE__ */ z(pw, [["render", hw]]);
const vw = {
  name: "SxSectionSelectorHeader",
  components: {
    MwRow: be,
    MwCol: Ae,
    MwButton: he
  },
  props: {
    suggestion: {
      type: qt,
      required: !0
    }
  },
  emits: ["close"],
  data: () => ({
    mwIconClose: Ft
  })
}, yw = { class: "sx-section-selector__header pa-4" }, bw = { class: "sx-section-selector__header-text ma-0" }, Sw = ["textContent"], ww = { class: "pt-0 ma-0" }, Cw = { class: "ma-0" };
function xw(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = ye("i18n");
  return y(), D("div", yw, [
    p(l, { class: "ma-0 pb-3" }, {
      default: b(() => [
        p(i, null, {
          default: b(() => [
            V(C("h6", bw, null, 512), [
              [d, void 0, "cx-sx-section-selector-title"]
            ]),
            C("h2", {
              class: "sx-section-selector__title ma-0 py-0",
              textContent: ae(n.suggestion.sourceTitle)
            }, null, 8, Sw)
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
    V(C("h4", ww, null, 512), [
      [d, void 0, "cx-sx-section-selector-subtitle"]
    ]),
    V(C("p", Cw, null, 512), [
      [d, void 0, "cx-sx-section-selector-desc"]
    ])
  ]);
}
const Ew = /* @__PURE__ */ z(vw, [["render", xw]]), kw = {
  name: "SxSectionSelectorSectionList",
  components: {
    MwRow: be,
    MwButton: he,
    MwIcon: He
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
  data: () => ({ mwIconArrowForward: Tn })
}, Tw = { class: "sx-section-selector__sections-list ma-0 pa-0" };
function Aw(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-button"), l = _("mw-row");
  return y(), D("ul", Tw, [
    (y(!0), D(we, null, Ze(n.sections, (d) => (y(), F(l, {
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
            ze(e.$slots, "default", {
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
const Sd = /* @__PURE__ */ z(kw, [["render", Aw]]), Dw = `<svg
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
const Lw = {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList: Sd,
    MwRow: be,
    MwCol: Ae,
    MwButton: he
  },
  props: {
    suggestion: {
      type: qt,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = S(
      () => Pe.getAutonym(e.suggestion.targetLanguage)
    ), n = S(
      () => Object.keys(e.suggestion.missingSections).length === 0
    );
    return {
      sadRobotSVG: Dw,
      getAutonym: Pe.getAutonym,
      getDir: Pe.getDir,
      targetLanguageAutonym: t,
      emptySections: n
    };
  }
}, Pw = { class: "sx-section-selector__missing-sections py-2" }, Nw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Fw = ["lang", "dir", "textContent"];
function Mw(e, t, n, o, s, a) {
  const i = _("sx-section-selector-section-list"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = ye("i18n");
  return y(), D("section", Pw, [
    V(C("h4", Nw, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-missing-sections-title"]
    ]),
    o.emptySections ? oe("", !0) : (y(), F(i, {
      key: 0,
      sections: n.suggestion.orderedMissingSections,
      onSelectSection: t[0] || (t[0] = (u) => e.$emit("select-section", u))
    }, {
      default: b(({ sourceSection: u }) => [
        C("h5", {
          class: "ma-0",
          lang: n.suggestion.sourceLanguage,
          dir: o.getDir(n.suggestion.sourceLanguage),
          textContent: ae(u)
        }, null, 8, Fw)
      ]),
      _: 1
    }, 8, ["sections"])),
    o.emptySections ? (y(), F(d, {
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
            V(C("h6", null, null, 512), [
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
            V(C("p", null, null, 512), [
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
            V(p(l, {
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
    })) : oe("", !0)
  ]);
}
const Ow = /* @__PURE__ */ z(Lw, [["render", Mw]]);
const Bw = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Sd
  },
  props: {
    suggestion: {
      type: qt,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = S(
      () => Pe.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: Tn, getAutonym: Pe.getAutonym, getDir: Pe.getDir, targetLanguageAutonym: t };
  }
}, Iw = { class: "sx-section-selector__present-sections py-2" }, $w = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Uw = { class: "sx-section-selector__present-section-button-content" }, Rw = ["lang", "dir", "textContent"], Vw = ["lang", "dir", "textContent"];
function zw(e, t, n, o, s, a) {
  const i = _("sx-section-selector-section-list"), r = ye("i18n");
  return y(), D("section", Iw, [
    V(C("h4", $w, null, 512), [
      [r, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    p(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: b(({ sourceSection: l, targetSection: d }) => [
        C("div", Uw, [
          C("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: ae(l)
          }, null, 8, Rw),
          C("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: ae(d)
          }, null, 8, Vw)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const jw = /* @__PURE__ */ z(Bw, [["render", zw]]);
const Hw = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: jw,
    SxSectionSelectorSectionListMissing: Ow,
    SxSectionSelectorHeader: Ew,
    SxSectionSelectorViewArticleItem: _w,
    MwRow: be,
    MwCol: Ae,
    MwIcon: He,
    SxArticleLanguageSelector: bd
  },
  setup() {
    const e = le(), {
      currentSectionSuggestion: t,
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = ue(e), i = S(
      () => Oe.getPageUrl(n.value, t.value.sourceTitle)
    ), r = S(
      () => Oe.getPageUrl(o.value, t.value.targetTitle)
    ), l = S(() => [
      { path: i.value, autonym: s.value },
      { path: r.value, autonym: a.value }
    ]), d = mt(), c = () => {
      bo(null), d.push({ name: "dashboard" });
    }, u = fs(), { selectPageSectionByTitle: g } = nr(), { isDesktop: f } = cs(), m = Ji();
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
        const k = e.getters["translator/getTranslation"](
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
}, qw = { class: "sx-section-selector" }, Gw = { class: "sx-section-selector__body" }, Ww = { class: "py-2" }, Kw = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Xw = { class: "ma-0 pa-0" }, Yw = { class: "sx-section-selector__additional-consideration-title" }, Jw = { href: "#" }, Zw = { class: "sx-section-selector__additional-consideration-title" }, Qw = { href: "#" };
function eC(e, t, n, o, s, a) {
  const i = _("sx-section-selector-header"), r = _("sx-article-language-selector"), l = _("sx-section-selector-section-list-missing"), d = _("sx-section-selector-section-list-present"), c = _("sx-section-selector-view-article-item"), u = _("mw-icon"), g = _("mw-col"), f = _("mw-row"), m = ye("i18n");
  return y(), D("section", qw, [
    p(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    C("section", Gw, [
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
      C("section", Ww, [
        V(C("h4", Kw, null, 512), [
          [m, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        C("ul", Xw, [
          (y(!0), D(we, null, Ze(o.viewArticleItems, (w, x) => (y(), F(c, {
            key: `view-article-item-${x}`,
            path: w.path,
            autonym: w.autonym
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
              C("h6", Yw, [
                p(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                jo(" " + ae(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              V(C("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              V(C("a", Jw, null, 512), [
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
              C("h6", Zw, [
                p(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                jo(" " + ae(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              V(C("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              V(C("a", Qw, null, 512), [
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
const tC = /* @__PURE__ */ z(Hw, [["render", eC]]);
const nC = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: tC
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function oC(e, t, n, o, s, a) {
  const i = _("sx-section-selector");
  return y(), D("main", {
    class: pe(["sx-section-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const sC = /* @__PURE__ */ z(nC, [["render", oC]]), aC = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = ue(
    le()
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
const iC = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: ts },
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
    const n = (s) => t("update:selection", s), o = aC(e);
    return je(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, rC = { class: "sx-content-comparator__source-target-selector" };
function lC(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return y(), D("div", rC, [
    p(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const cC = /* @__PURE__ */ z(iC, [["render", lC]]), ga = (e) => {
  const t = J([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o
  } = ue(e), s = S(() => n.value.targetTitle), a = S(
    () => e.getters["application/getCurrentSourceSectionTitle"]
  ), i = S(
    () => e.getters["mediawiki/getPage"](
      n.value.targetLanguage,
      s.value
    )
  ), r = S(
    () => n.value.missingSections[a.value] || n.value.presentSections[a.value] || ""
  ), l = S(
    () => {
      var f;
      return (((f = d.value) == null ? void 0 : f.title) || "").replace(/ /g, "_");
    }
  ), d = S(
    () => {
      var f;
      return (f = i.value) == null ? void 0 : f.getSectionByTitle(r.value);
    }
  ), c = S(() => {
    var f;
    return (f = o.value) == null ? void 0 : f.html;
  }), u = S(() => {
    var f;
    return (f = d.value) == null ? void 0 : f.html;
  }), g = S(
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
    targetSectionContent: u
  };
};
const uC = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: cC,
    MwRow: be,
    MwCol: Ae,
    MwButton: he
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
    const n = le(), o = J(!1), { currentSectionSuggestion: s } = ue(n), a = S(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = S(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), r = (f) => t.emit("update:sourceVsTargetSelection", f), { activeSectionTargetTitle: l, targetSectionAnchor: d } = ga(n), c = S(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: a.value,
            path: `${Oe.getPageUrl(
              s.value.sourceLanguage,
              s.value.sourceTitle
            )}#${i.value}`,
            lang: s.value.sourceLanguage,
            dir: Pe.getDir(s.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: s.value.targetTitle,
            path: u.value,
            lang: s.value.targetLanguage,
            dir: Pe.getDir(s.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${u.value}#${d.value}`
          };
      }
    }), u = S(
      () => Oe.getPageUrl(
        s.value.targetLanguage,
        s.value.targetTitle
      )
    ), g = J(null);
    return ut(() => {
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
      mwIconLinkExternal: os,
      mwIconEdit: Cn,
      updateSelection: r
    };
  }
}, dC = ["lang", "dir", "textContent"];
function gC(e, t, n, o, s, a) {
  const i = _("sx-content-comparator-source-vs-target-selector"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row");
  return y(), F(d, {
    ref: "contentHeader",
    class: pe(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
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
              C("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: ae(o.activeContent.title)
              }, null, 8, dC)
            ], void 0, !0),
            _: 1
          }),
          p(r, { shrink: "" }, {
            default: b(() => [
              o.isSticky ? (y(), F(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (c) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (y(), F(l, {
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
const fC = /* @__PURE__ */ z(uC, [["render", gC]]), pC = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: Ae,
    MwButton: he
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = le(), n = S(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = S(
      () => e.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByIndex: s } = nr();
    return {
      goToNextSection: () => {
        const r = (o.value + 1) % e.sectionSourceTitles.length;
        s(r);
      },
      goToPreviousSection: () => {
        const r = (o.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length;
        s(r);
      },
      mwIconPrevious: ra,
      mwIconArrowForward: Tn
    };
  }
};
function mC(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col");
  return y(), F(r, {
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
const hC = /* @__PURE__ */ z(pC, [["render", mC]]);
const _C = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: be,
    MwCol: Ae,
    MwButton: he
  },
  props: {
    suggestion: {
      type: qt,
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
    mwIconUndo: Pm
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        Pe.getAutonym(this.suggestion.targetLanguage)
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
}, vC = { class: "sx-content-comparator-header__mapped-section" }, yC = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, bC = { key: 0 }, SC = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, wC = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function CC(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = ye("i18n");
  return y(), D("div", vC, [
    p(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: b(() => [
        p(i, { grow: "" }, {
          default: b(() => [
            C("h6", yC, [
              jo(ae(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? V((y(), D("span", bC, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : oe("", !0)
            ]),
            C("h6", {
              class: pe(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, ae(n.targetSectionTitle), 3)
          ], void 0, !0),
          _: 1
        }),
        p(i, { shrink: "" }, {
          default: b(() => [
            a.isDiscardedSection ? (y(), F(r, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (y(), F(r, {
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
    a.isDiscardedSection ? V((y(), D("p", wC, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : V((y(), D("p", SC, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const xC = /* @__PURE__ */ z(_C, [["render", CC]]);
const EC = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: xC,
    SxContentComparatorHeaderNavigation: hC,
    MwButton: he,
    MwCol: Ae,
    MwRow: be,
    MwIcon: He
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
    } = ue(e), o = S(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = S(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = ga(e), r = S(() => {
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
      mwIconArrowPrevious: Fi,
      mwIconEdit: Cn,
      mwIconEye: ei,
      sectionSourceTitles: l,
      sourceSectionContent: r,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: Pe.getDir
    };
  }
}, kC = { class: "sx-content-comparator__header pa-4" }, TC = ["lang", "dir"], AC = ["lang", "dir"], DC = /* @__PURE__ */ C("br", null, null, -1);
function LC(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("sx-content-comparator-header-navigation"), d = _("mw-row"), c = _("mw-icon"), u = _("sx-content-comparator-header-mapped-section"), g = ye("i18n");
  return y(), D("div", kC, [
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
            C("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, ae(o.suggestion.sourceTitle), 9, TC),
            C("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, ae(o.sourceSectionTitle), 9, AC)
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
    o.isCurrentSectionMissing ? (y(), F(d, {
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
            V(C("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            DC,
            V(C("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : oe("", !0),
    o.isCurrentSectionPresent ? (y(), F(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (f) => e.$emit("update:discardedSections", f))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : oe("", !0)
  ]);
}
const PC = /* @__PURE__ */ z(EC, [["render", LC]]);
const NC = {
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
    return { placeholderTitle: S(
      () => e.isMappedSection ? e.i18n(
        "cx-sx-content-comparator-present-section-placeholder-title"
      ) : e.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    ) };
  }
}, FC = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, MC = ["innerHTML"], OC = { key: 0 };
function BC(e, t, n, o, s, a) {
  const i = ye("i18n");
  return y(), D("section", FC, [
    C("h5", { innerHTML: o.placeholderTitle }, null, 8, MC),
    n.isMappedSection ? V((y(), D("p", OC, null, 512)), [
      [i, void 0, "cx-sx-content-comparator-present-section-placeholder-subtitle"]
    ]) : oe("", !0)
  ]);
}
const wd = /* @__PURE__ */ z(NC, [["render", BC]]), IC = (e, t) => {
  const { isCurrentSectionMapped: n, targetPage: o } = ga(e), { currentSectionSuggestion: s } = ue(e), a = () => qc(
    wd,
    {
      isMappedSection: n.value,
      i18n: t
    }
  ).mount(document.createElement("div")).$el, i = (l) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    l
  ), r = (l) => {
    const d = l.getElementsByTagName("base");
    Array.from(d).forEach(
      (c) => c.parentNode.removeChild(c)
    );
  };
  return S(() => {
    var u;
    const l = document.createElement("div");
    l.innerHTML = (u = o.value) == null ? void 0 : u.content, r(l);
    const d = a(), c = i(
      s.value
    );
    if (c) {
      const g = Array.from(
        l.querySelectorAll("h2")
      ).filter((f) => f.textContent.match(c));
      if (g && g.length) {
        const f = g[0].parentNode;
        f.parentNode.insertBefore(
          d,
          f
        );
      }
    } else
      l.appendChild(d);
    return l.innerHTML;
  });
};
const $C = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: wd,
    SxContentComparatorHeader: PC,
    SxContentComparatorContentHeader: fC,
    MwSpinner: sn
  },
  setup() {
    const e = le(), t = mt(), n = J("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      ld() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, a = Ct(), i = a.i18n.bind(a), {
      activeSectionTargetTitle: r,
      discardedSections: l,
      isCurrentSectionMapped: d,
      sourceSectionContent: c,
      targetSectionContent: u
    } = ga(e), g = IC(e, i), {
      currentSectionSuggestion: f,
      sourceLanguage: m,
      targetLanguage: w
    } = ue(e), x = S(() => f.value.targetTitle);
    return je(
      x,
      () => e.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: w.value,
        targetLanguage: m.value,
        sourceTitle: x.value
      }),
      { immediate: !0 }
    ), {
      i18n: i,
      getDir: Pe.getDir,
      activeSectionTargetTitle: r,
      discardedSections: l,
      goToSectionSelector: o,
      isCurrentSectionMapped: d,
      sourceSectionContent: c,
      sourceVsTargetSelection: n,
      targetPageContent: g,
      targetSectionContent: u,
      translateSection: s,
      sourceLanguage: m,
      targetLanguage: w
    };
  }
}, UC = { class: "sx-content-comparator" }, RC = { class: "sx-content-comparator__source-content" }, VC = ["lang", "dir", "innerHTML"], zC = ["lang", "dir", "innerHTML"], jC = ["innerHTML"];
function HC(e, t, n, o, s, a) {
  const i = _("sx-content-comparator-header"), r = _("sx-content-comparator-content-header"), l = _("mw-spinner"), d = _("sx-content-comparator-new-section-placeholder");
  return y(), D("section", UC, [
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
    C("section", RC, [
      o.sourceVsTargetSelection === "source_section" ? (y(), D(we, { key: 0 }, [
        o.sourceSectionContent ? oe("", !0) : (y(), F(l, { key: 0 })),
        C("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, VC)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (y(), D(we, { key: 1 }, [
        o.targetPageContent ? oe("", !0) : (y(), F(l, { key: 0 })),
        C("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, zC)
      ], 64)) : (y(), D(we, { key: 2 }, [
        C("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, jC),
        p(d, {
          "is-mapped-section": o.isCurrentSectionMapped,
          i18n: o.i18n
        }, null, 8, ["is-mapped-section", "i18n"])
      ], 64))
    ])
  ]);
}
const qC = /* @__PURE__ */ z($C, [["render", HC]]);
const GC = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: qC
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function WC(e, t, n, o, s, a) {
  const i = _("sx-content-comparator");
  return y(), D("main", {
    class: pe(["sx-content-comparator-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const KC = /* @__PURE__ */ z(GC, [["render", WC]]);
const XC = {
  name: "SxConfirmBackNavigationDialog",
  components: {
    MwButton: he,
    MwDivider: ns,
    MwDialog: Mt
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
}, YC = { class: "mw-ui-dialog__header px-4 py-3" }, JC = { class: "mw-ui-dialog__header-title" }, ZC = { class: "pa-4" }, QC = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" };
function ex(e, t, n, o, s, a) {
  const i = _("mw-divider"), r = _("mw-button"), l = _("mw-dialog"), d = ye("i18n");
  return y(), F(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10
  }, {
    header: b(() => [
      C("div", YC, [
        V(C("span", JC, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-title"]
        ])
      ])
    ]),
    footer: b(() => [
      C("div", QC, [
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
      C("div", ZC, [
        V(C("span", null, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const tx = /* @__PURE__ */ z(XC, [["render", ex]]);
const nx = {
  name: "SxTranslationSelector",
  components: { MwCard: Wt, MwButton: he, MwDialog: Mt },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Re.EMPTY_TEXT_PROVIDER_KEY, o = Re.ORIGINAL_TEXT_PROVIDER_KEY, s = le(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = ue(s), c = S(
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
      s.dispatch("application/updateMTProvider", x), w();
    }, m = Re.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: w,
      emptyTextProviderKey: n,
      getDir: Pe.getDir,
      getMTProviderLabel: m,
      mwIconClose: Ft,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: f,
      sourceLanguage: a
    };
  }
}, ox = { class: "mw-ui-dialog__header pa-4" }, sx = { class: "row ma-0 py-2" }, ax = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, ix = { class: "mb-0" }, rx = { class: "col shrink justify-center" }, lx = { class: "pb-2 mb-0" }, cx = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, ux = ["dir", "lang", "innerHTML"], dx = ["textContent"], gx = ["innerHTML"], fx = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, px = /* @__PURE__ */ C("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function mx(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-card"), l = _("mw-dialog"), d = ye("i18n");
  return n.active ? (y(), F(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: b(() => [
      C("div", ox, [
        C("div", sx, [
          C("div", ax, [
            V(C("h4", ix, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          C("div", rx, [
            p(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        V(C("h6", lx, null, 512), [
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
          V(C("h5", cx, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: b(() => [
          C("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, ux)
        ], void 0, !0),
        _: 1
      }),
      (y(!0), D(we, null, Ze(o.apiMtProviders, (c) => (y(), F(r, {
        key: c,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(c)
      }, {
        header: b(() => [
          C("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: ae(o.getMTProviderLabel(c))
          }, null, 8, dx)
        ]),
        default: b(() => [
          C("p", {
            innerHTML: o.proposedTranslations[c]
          }, null, 8, gx)
        ], void 0, !0),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      p(r, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (c) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: b(() => [
          V(C("h5", fx, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: b(() => [
          px
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : oe("", !0);
}
const hx = /* @__PURE__ */ z(nx, [["render", mx]]);
const _x = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: He, MwCol: Ae },
  setup() {
    const e = le(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = ue(e), i = S(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.title;
    }), r = S(
      () => {
        var f;
        return ((f = n.value) == null ? void 0 : f.title) || i.value;
      }
    ), l = S(
      () => Oe.getPageUrl(a.value, i.value)
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
      mwIconLinkExternal: os,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: r,
      titleClasses: u
    };
  }
}, vx = ["href"], yx = ["textContent"], bx = ["innerHTML"];
function Sx(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col");
  return y(), F(r, {
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
        }, null, 8, yx),
        p(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, vx),
      C("h2", {
        class: pe(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, bx)
    ], void 0),
    _: 1
  });
}
const wx = /* @__PURE__ */ z(_x, [["render", Sx]]);
const Cx = {
  name: "ProposedTranslationActionButtons",
  components: {
    MwRow: be,
    MwButton: he
  },
  emits: ["select-previous-segment", "apply-translation", "skip-translation"],
  setup() {
    const {
      currentSourceSection: e,
      proposedTranslation: t,
      isSectionTitleSelected: n
    } = ue(le());
    return {
      isLastTranslationUnit: S(
        () => e.value.isSelectedTranslationUnitLast
      ),
      isSectionTitleSelected: n,
      mwIconPrevious: ra,
      mwIconArrowForward: Tn,
      proposedTranslation: t
    };
  }
};
function xx(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return y(), F(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
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
const Cd = /* @__PURE__ */ z(Cx, [["render", xx]]);
const Ex = {
  name: "ProposedTranslationHeader",
  components: {
    MwRow: be,
    MwCol: Ae,
    MwButton: he
  },
  emits: ["configure-options"],
  setup() {
    const e = le(), t = S(
      () => e.state.application.currentMTProvider
    ), n = Ct(), o = S(() => ({
      [Re.ORIGINAL_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Re.EMPTY_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), s = S(
      () => o.value[t.value] || n.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Re.getMTProviderLabel(t.value)
      )
    );
    return {
      mwIconEllipsis: ss,
      mtOptionLabel: s
    };
  }
};
function kx(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row");
  return y(), F(i, { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
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
const Tx = /* @__PURE__ */ z(Ex, [["render", kx]]), Ax = {
  name: "RetryMtCard",
  components: { MwButton: he, MwIcon: He, MwGrid: Gc, MwCol: Ae, MwRow: be },
  emits: ["configure-options", "retry-translation"],
  setup() {
    return {
      mwIconAlert: uo,
      mwIconRefresh: Yc,
      mwIconMenu: Im
    };
  }
}, Dx = { class: "mt-retry-body" };
function Lx(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("mw-button"), c = ye("i18n");
  return y(), D("div", Dx, [
    p(l, { class: "retry-body__action-buttons" }, {
      default: b(() => [
        p(r, { cols: "12" }, {
          default: b(() => [
            p(i, { icon: o.mwIconAlert }, null, 8, ["icon"]),
            V(C("span", null, null, 512), [
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
const Px = /* @__PURE__ */ z(Ax, [["render", Lx]]);
const Nx = {
  name: "ProposedTranslationCard",
  components: {
    RetryMtCard: Px,
    MwSpinner: sn,
    MwCard: Wt,
    ProposedTranslationHeader: Tx,
    MwRow: be,
    MwCol: Ae,
    MwButton: he,
    ProposedTranslationActionButtons: Cd
  },
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup() {
    const e = J(0), t = J(null), n = J(null), o = le(), {
      currentMTProvider: s,
      targetLanguage: a,
      proposedTranslation: i,
      currentSourceSection: r
    } = ue(o), l = S(
      () => {
        var g;
        return (g = o.state.application.mtRequestsPending) == null ? void 0 : g.includes(
          r.value.selectedTranslationUnitId
        );
      }
    ), d = S(() => ({
      "max-height": `calc(100% - ${e.value}px)`
    })), c = S(
      () => !!i.value || s.value === Re.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      e.value = t.value.$el.clientHeight + n.value.$el.clientHeight;
    };
    return je(s, u), ut(() => W(this, null, function* () {
      yield ho(), u();
    })), {
      footer: n,
      getDir: Pe.getDir,
      header: t,
      mwIconEllipsis: ss,
      mwIconEdit: Cn,
      proposedTranslation: i,
      hasProposedTranslation: c,
      targetLanguage: a,
      contentsStyle: d,
      mtRequestPending: l
    };
  }
}, Fx = ["lang", "dir", "innerHTML"];
function Mx(e, t, n, o, s, a) {
  const i = _("proposed-translation-header"), r = _("mw-spinner"), l = _("retry-mt-card"), d = _("mw-col"), c = _("mw-button"), u = _("proposed-translation-action-buttons"), g = _("mw-row"), f = _("mw-card");
  return y(), F(f, { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
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
            class: pe(["sx-sentence-selector__proposed-translation__contents px-5", {
              "sx-sentence-selector__proposed-translation__contents--empty": !o.hasProposedTranslation
            }]),
            style: nt(o.contentsStyle)
          }, {
            default: b(() => [
              o.hasProposedTranslation ? (y(), D("section", {
                key: 0,
                lang: o.targetLanguage,
                dir: o.getDir(o.targetLanguage),
                innerHTML: o.proposedTranslation
              }, null, 8, Fx)) : o.mtRequestPending ? (y(), F(r, { key: 1 })) : (y(), F(l, {
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
              o.hasProposedTranslation || o.mtRequestPending ? (y(), F(c, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                progressive: "",
                disabled: !o.hasProposedTranslation,
                onClick: t[3] || (t[3] = (m) => e.$emit("edit-translation", o.proposedTranslation))
              }, null, 8, ["icon", "label", "disabled"])) : oe("", !0),
              p(u, mi(oa(e.$attrs)), null, 16)
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
const Ox = /* @__PURE__ */ z(Nx, [["render", Mx]]), Bx = (e) => S(() => {
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
const Ix = {
  name: "SubSection",
  props: {
    subSection: {
      type: St,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = J(null), o = Bx(e.subSection);
    ut(() => {
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
    const s = le(), a = (r) => {
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
}, $x = ["innerHTML"];
function Ux(e, t, n, o, s, a) {
  return y(), D("div", {
    ref: "subSectionRoot",
    class: pe(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, $x);
}
const Rx = /* @__PURE__ */ z(Ix, [["render", Ux]]);
const Vx = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: au,
    MwIcon: He
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
      () => !e.isTemplateAdapted || e.percentage === 0 ? uo : yn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
};
function zx(e, t, n, o, s, a) {
  const i = _("mw-circle-progress-bar"), r = _("mw-icon");
  return y(), D("div", {
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
const xd = /* @__PURE__ */ z(Vx, [["render", zx]]), jx = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: Ae,
    MwRow: be,
    MwButton: he,
    MwIcon: He,
    MwRadioGroup: ou,
    MwRadio: Hs,
    MwDivider: ns,
    MwDialog: Mt,
    MwCircleProgressBar: au,
    BlockTemplateStatusIndicator: xd
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
    const { targetLanguageAutonym: t } = ue(le()), n = S(
      () => !e.isTemplateAdapted || o.value === 0 ? uo : yn
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
          icon: $m,
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
        icon: Cn,
        color: kt.base30
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: js,
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
}, Hx = { class: "pa-4" }, qx = ["textContent"], Gx = ["textContent"];
function Wx(e, t, n, o, s, a) {
  const i = _("block-template-status-indicator"), r = _("mw-icon"), l = _("mw-col"), d = _("mw-row"), c = _("mw-dialog");
  return y(), F(c, {
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
              n.targetTemplateExists ? (y(), F(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (y(), F(r, {
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
      C("div", Hx, [
        C("h3", {
          textContent: ae(o.statusText)
        }, null, 8, qx),
        C("p", {
          class: "mt-6 text-small",
          textContent: ae(o.statusExplanation)
        }, null, 8, Gx),
        (y(!0), D(we, null, Ze(o.notes, (u, g) => (y(), F(d, {
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
const Kx = /* @__PURE__ */ z(jx, [["render", Wx]]);
const Xx = {
  name: "BlockTemplateAdaptationCard",
  components: {
    SxBlockTemplateStatusDialog: Kx,
    MwSpinner: sn,
    MwIcon: He,
    MwCard: Wt,
    MwRow: be,
    MwCol: Ae,
    MwButton: he,
    ProposedTranslationActionButtons: Cd,
    BlockTemplateStatusIndicator: xd
  },
  emits: ["edit-translation"],
  setup() {
    const e = le(), {
      selectedContentTranslationUnit: t,
      targetLanguageAutonym: n,
      currentMTProvider: o,
      proposedTranslation: s
    } = ue(e), a = S(() => {
      var H;
      return ((H = t.value) == null ? void 0 : H.blockTemplateTranslatedContent) || s.value;
    }), i = S(
      () => {
        var ne;
        return (ne = t.value) == null ? void 0 : ne.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), r = S(
      () => {
        var ne;
        return !((ne = e.state.application.mtRequestsPending) != null && ne.includes(
          t.value.id
        ));
      }
    ), l = Ct(), d = S(
      // Strip HTML comments and return
      () => {
        var ne, H;
        return ((H = (ne = t.value) == null ? void 0 : ne.sourceBlockTemplateName) == null ? void 0 : H.replace(
          /<\!--.*?-->/g,
          ""
        )) || l.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = S(
      () => {
        var ne;
        return (ne = t.value.blockTemplateAdaptationInfo) == null ? void 0 : ne[o.value];
      }
    ), u = S(
      () => {
        var ne, H;
        return ((ne = c.value) == null ? void 0 : ne.adapted) || !!((H = c.value) != null && H.partial);
      }
    ), g = S(() => c.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), f = S(() => c.value ? u.value ? l.i18n("sx-block-template-adaptation-card-edit-button-label") : l.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), m = S(
      () => {
        var ne;
        return Object.keys(((ne = t.value) == null ? void 0 : ne.sourceTemplateParams) || {}).length;
      }
    ), w = S(() => {
      var H;
      const ne = (H = t.value) == null ? void 0 : H.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(ne || {});
    }), x = S(() => w.value.length), k = S(() => {
      const ne = O.value;
      return m.value + ne === 0 ? 100 : x.value / (m.value + ne) * 100 || 0;
    }), L = J(!1), M = () => {
      L.value = !0;
    }, G = (ne) => ne.filter((H) => !w.value.includes(H)), O = S(() => {
      var H;
      const ne = ((H = c.value) == null ? void 0 : H.mandatoryTargetParams) || [];
      return G(ne).length;
    }), ge = S(() => {
      var H;
      const ne = ((H = c.value) == null ? void 0 : H.optionalTargetParams) || [];
      return G(ne).length;
    });
    return {
      adaptationRatio: k,
      adaptedTemplateCardClass: g,
      blockEditableContent: a,
      editBlockTranslationButtonLabel: f,
      isTemplateAdapted: u,
      mandatoryMissingTargetParamsCount: O,
      mwIconInfo: Wc,
      mwIconPuzzle: Bm,
      optionalMissingTargetParamsCount: ge,
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
}, Yx = { class: "block-template-adaptation-card__container pa-4" }, Jx = ["textContent"], Zx = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
};
function Qx(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("block-template-status-indicator"), c = _("mw-button"), u = _("mw-spinner"), g = _("proposed-translation-action-buttons"), f = _("sx-block-template-status-dialog"), m = _("mw-card"), w = ye("i18n");
  return y(), F(m, { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
    default: b(() => [
      C("div", Yx, [
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
                jo(ae(o.sourceTemplateName), 1)
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        }),
        o.targetTemplateName ? (y(), D("div", {
          key: 0,
          class: pe(["pa-4 mb-4", o.adaptedTemplateCardClass])
        }, [
          p(l, {
            class: "block-template-adaptation-card__body__header ma-0 pb-1",
            align: "start"
          }, {
            default: b(() => [
              V(p(r, { tag: "h5" }, null, 512), [
                [w, void 0, "sx-block-template-adaptation-card-body-header-success"]
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
          C("h5", {
            class: "block-template-adaptation-card__body__template-title pb-2",
            textContent: ae(o.targetTemplateName)
          }, null, 8, Jx),
          p(c, {
            class: "px-0",
            type: "text",
            progressive: "",
            label: o.editBlockTranslationButtonLabel,
            onClick: t[0] || (t[0] = (x) => e.$emit("edit-translation", o.blockEditableContent))
          }, null, 8, ["label"])
        ], 2)) : o.translationLoaded ? (y(), D("div", Zx, [
          p(l, {
            class: "block-template-adaptation-card__body__header pb-0 mb-0",
            align: "start"
          }, {
            default: b(() => [
              V(p(r, { tag: "h5" }, null, 512), [
                [w, [
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
        ])) : (y(), F(u, { key: 2 }))
      ]),
      p(g, mi(oa(e.$attrs)), null, 16),
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
const e8 = /* @__PURE__ */ z(Xx, [["render", Qx]]);
const t8 = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: ts },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = ue(le()), o = Ct();
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
}, n8 = { class: "translated-segment-card-header" };
function o8(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return y(), D("div", n8, [
    p(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const s8 = /* @__PURE__ */ z(t8, [["render", o8]]), a8 = {
  name: "TranslatedSegmentCardActionButtons",
  components: {
    MwRow: be,
    MwButton: he
  },
  emits: ["select-previous-segment", "skip-translation"],
  setup() {
    const { currentSourceSection: e, isSectionTitleSelected: t } = ue(le()), n = S(
      () => e.value.isSelectedTranslationUnitLast
    );
    return {
      mwIconArrowForward: Tn,
      mwIconPrevious: ra,
      isLastTranslationUnit: n,
      isSectionTitleSelected: t
    };
  }
};
function i8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return y(), F(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
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
const r8 = /* @__PURE__ */ z(a8, [["render", i8]]);
const l8 = {
  name: "TranslatedSegmentCard",
  components: {
    TranslatedSegmentCardActionButtons: r8,
    MwProgressBar: su,
    MwIcon: He,
    TranslatedSegmentCardHeader: s8,
    MwCard: Wt,
    MwRow: be,
    MwCol: Ae,
    MwButton: he
  },
  emits: ["edit-translation"],
  setup() {
    const e = J("sentence"), {
      isSectionTitleSelected: t,
      currentSourceSection: n,
      selectedContentTranslationUnit: o,
      targetLanguage: s
    } = ue(le()), a = S(() => e.value === "sentence"), i = S(
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
      () => xn.calculateScore(
        u.value,
        r.value,
        s.value
      )
    ), f = S(
      () => xn.getScoreStatus(g.value)
    ), m = S(
      () => `translated-segment-card__modification-stats__percentage--${f.value}`
    ), w = S(() => ({
      failure: g.value === 0 ? null : l.yellow30,
      warning: l.yellow30,
      success: l.green30
    })), x = S(
      () => w.value[f.value]
    );
    return {
      errorColor: c,
      modificationPercentageClass: m,
      mtScore: g,
      mwIconEdit: Cn,
      mwIconEllipsis: ss,
      mwIconRobot: nu,
      mwIconUserAvatar: Am,
      progressBarBackgroundColor: d,
      scopeSelection: e,
      showSentenceTab: a,
      translation: u,
      userIconColor: x
    };
  }
};
function c8(e, t, n, o, s, a) {
  const i = _("translated-segment-card-header"), r = _("mw-col"), l = _("mw-icon"), d = _("mw-progress-bar"), c = _("mw-row"), u = _("mw-button"), g = _("translated-segment-card-action-buttons"), f = _("mw-card"), m = ye("i18n"), w = ye("i18n-html");
  return y(), F(f, { class: "translated-segment-card col shrink pa-0 mb-0" }, {
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
                      V(C("h5", null, null, 512), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                      ]),
                      o.mtScore === 0 ? V((y(), D("p", {
                        key: 0,
                        style: nt({ color: o.errorColor })
                      }, null, 4)), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                      ]) : V((y(), D("p", {
                        key: 1,
                        class: pe(o.modificationPercentageClass)
                      }, null, 2)), [
                        [w, [
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
              o.showSentenceTab ? (y(), F(u, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-0 mt-4",
                progressive: "",
                onClick: t[1] || (t[1] = (x) => e.$emit("edit-translation", o.translation))
              }, null, 8, ["icon", "label"])) : oe("", !0)
            ], void 0, !0),
            _: 1
          }),
          p(r, { class: "translated-segment-card__actions" }, {
            default: b(() => [
              p(g, mi(oa(e.$attrs)), null, 16)
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
const u8 = /* @__PURE__ */ z(l8, [["render", c8]]), d8 = () => {
  const e = le();
  return () => {
    const { currentTranslation: t } = e.state.application, { currentSourceSection: n, selectedContentTranslationUnit: o } = ue(e);
    if (n.value)
      if (t && !o.value) {
        const { lastTranslatedContentTranslationUnit: s } = n.value;
        n.value.selectTranslationUnitById(
          (s == null ? void 0 : s.id) || 0
        ), e.dispatch("application/selectNextTranslationUnit");
      } else
        o.value || e.dispatch("application/selectTranslationUnitById", 0);
  };
}, g8 = () => {
  const e = le(), { sourceLanguage: t, targetLanguage: n } = ue(e);
  return () => W(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield ca.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, f8 = () => {
  const e = le(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = ue(e), s = g8();
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
}, p8 = (e) => {
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
}, m8 = () => {
  const e = le(), { selectedContentTranslationUnit: t } = ue(e), n = S(
    () => t.value instanceof St
  );
  return () => {
    if (!t.value)
      return;
    const o = t.value.id, s = n.value ? document.getElementById(o) : document.querySelector(`[data-segmentid='${o}']`);
    s && p8(s);
  };
};
const h8 = {
  name: "SxSentenceSelector",
  components: {
    SxConfirmBackNavigationDialog: tx,
    BlockTemplateAdaptationCard: e8,
    TranslatedSegmentCard: u8,
    ProposedTranslationCard: Ox,
    SubSection: Rx,
    SxSentenceSelectorContentHeader: wx,
    MwRow: be,
    MwSpinner: sn,
    MwCol: Ae,
    SxTranslationSelector: hx,
    MwButton: he
  },
  setup() {
    const e = J(!1), t = J(!1), n = J("100%"), o = le(), {
      currentSourcePage: s,
      currentTargetPage: a,
      currentSourceSection: i,
      selectedContentTranslationUnit: r,
      currentMTProvider: l,
      sourceLanguage: d,
      targetLanguage: c
    } = ue(o), u = S(
      () => o.state.application.translationDataLoadingCounter === 0
    ), g = S(
      () => {
        var ie;
        return (ie = i.value) == null ? void 0 : ie.isSelectedTranslationUnitTranslated;
      }
    ), f = S(() => {
      var ie;
      return (ie = i.value) == null ? void 0 : ie.subSections;
    }), m = S(
      () => {
        var ie;
        return (ie = i.value) == null ? void 0 : ie.selectedTranslationUnitOriginalContent;
      }
    ), w = S(
      () => isNaN(n.value) ? n.value : `${n.value}px`
    ), x = Kt(), k = d8();
    f8()();
    const M = m8();
    ut(() => {
      je(
        u,
        () => W(this, null, function* () {
          u.value && (yield ho(), k(), M());
        }),
        { immediate: !0 }
      ), n.value = window.innerHeight;
    }), je(r, M);
    const G = () => o.dispatch("application/selectNextTranslationUnit"), O = () => o.dispatch("application/selectPreviousTranslationUnit"), ge = () => {
      x({
        event_type: "editor_segment_add",
        translation_source_language: d.value,
        translation_target_language: c.value
      }), o.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
    }, ne = () => {
      t.value = !0, setTimeout(() => {
        t.value = !1;
      }, 100);
    }, H = mt(), Se = () => {
      const { autoSavePending: ie } = o.state.application;
      if (ie) {
        Ue.value = !0;
        return;
      }
      Ce();
    }, Ce = () => W(this, null, function* () {
      o.dispatch("translator/fetchTranslationsByStatus", "draft"), bo(null), o.dispatch("application/clearPendingSaveTranslationRequests"), yield H.push({ name: "dashboard" }), i.value.reset(), o.commit("application/setCurrentSourceSection", null), o.commit("application/setCurrentSectionSuggestion", null);
      const { currentTranslation: ie } = o.state.application;
      ie && (o.commit("application/setCurrentTranslationRestored", !1), o.commit("application/setCurrentTranslation", null));
    }), xe = () => {
      We.value || (e.value = !0, o.dispatch(
        "application/translateSelectedTranslationUnitForAllProviders"
      ));
    }, Y = (ie, fe) => {
      var ot;
      H.push({
        name: "sx-editor",
        state: {
          content: ie,
          originalContent: m.value,
          title: ((ot = a.value) == null ? void 0 : ot.title) || s.value.title,
          isInitialEdit: fe || null
        }
      });
    }, De = () => H.push({ name: "sx-publisher" }), Ke = () => W(this, null, function* () {
      r.value ? yield o.dispatch("application/translateTranslationUnitById", {
        id: r.value.id,
        provider: l.value
      }) : yield o.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: l.value
      });
    }), We = S(
      () => r.value instanceof St
    ), Ue = J(!1);
    return {
      applyTranslation: ge,
      bounceTranslation: ne,
      configureTranslationOptions: xe,
      currentPageSection: i,
      doGoToDashboard: Ce,
      editTranslation: Y,
      getDir: Pe.getDir,
      goToDashboard: Se,
      isBlockTemplateSelected: We,
      isSelectedTranslationUnitTranslated: g,
      isTranslationOptionsActive: e,
      mwIconArrowPrevious: Fi,
      previewTranslation: De,
      retryTranslation: Ke,
      selectPreviousTranslationUnit: O,
      sentenceSelectorStyle: w,
      shouldProposedTranslationBounce: t,
      skipTranslation: G,
      sourceLanguage: d,
      subSections: f,
      translationDataReady: u,
      verifyBackNavigationDialogOn: Ue
    };
  }
}, _8 = { class: "sx-sentence-selector__header-title" }, v8 = { class: "sx-sentence-selector__section-contents px-4" };
function y8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = _("sx-sentence-selector-content-header"), c = _("sub-section"), u = _("translated-segment-card"), g = _("proposed-translation-card"), f = _("block-template-adaptation-card"), m = _("mw-spinner"), w = _("sx-translation-selector"), x = _("sx-confirm-back-navigation-dialog"), k = ye("i18n");
  return y(), D("section", {
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
            V(C("h4", _8, null, 512), [
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
    o.translationDataReady ? (y(), F(l, {
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
            C("div", v8, [
              (y(!0), D(we, null, Ze(o.subSections, (L) => (y(), F(c, {
                id: L.id,
                key: `sub-section-${L.id}`,
                "sub-section": L,
                onBounceTranslation: o.bounceTranslation
              }, null, 8, ["id", "sub-section", "onBounceTranslation"]))), 128))
            ])
          ], void 0, !0),
          _: 1
        }, 8, ["dir", "lang"]),
        !o.isBlockTemplateSelected && o.isSelectedTranslationUnitTranslated ? (y(), F(u, {
          key: 0,
          onEditTranslation: t[0] || (t[0] = (L) => o.editTranslation(L, !1)),
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : o.isBlockTemplateSelected ? (y(), F(f, {
          key: 2,
          onEditTranslation: o.editTranslation,
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onEditTranslation", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment"])) : (y(), F(g, {
          key: 1,
          class: pe({ "mb-0": !o.shouldProposedTranslationBounce }),
          onConfigureOptions: o.configureTranslationOptions,
          onEditTranslation: t[1] || (t[1] = (L) => o.editTranslation(L, !0)),
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit,
          onRetryTranslation: o.retryTranslation
        }, null, 8, ["class", "onConfigureOptions", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment", "onRetryTranslation"]))
      ], void 0),
      _: 1
    })) : (y(), F(l, {
      key: 1,
      column: "",
      class: "grow"
    }, {
      default: b(() => [
        p(m, { class: "mt-0" })
      ], void 0),
      _: 1
    })),
    p(w, {
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
const b8 = /* @__PURE__ */ z(h8, [["render", y8]]);
const S8 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: b8
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function w8(e, t, n, o, s, a) {
  const i = _("sx-sentence-selector");
  return y(), D("main", {
    class: pe(["sx-sentence-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const C8 = /* @__PURE__ */ z(S8, [["render", w8]]), x8 = `<svg width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
`, E8 = `<svg  width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
const k8 = {
  name: "SxQuickTutorial",
  components: {
    MwButton: he,
    MwRow: be
  },
  data: () => ({
    mwIconArrowForward: Tn,
    totalSteps: 2,
    activeStep: 1,
    tutorialSvgMT: x8,
    tutorialSvgSections: E8
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
}, T8 = { class: "sx-quick-tutorial" }, A8 = { class: "sx-quick-tutorial__main-point py-9 px-6" }, D8 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, L8 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, P8 = { class: "sx-quick-tutorial__illustration" }, N8 = ["innerHTML"], F8 = ["innerHTML"], M8 = { class: "sx-quick-tutorial__step-indicator py-3" }, O8 = ["onClick"], B8 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, I8 = {
  key: "secondary-point-1",
  class: "ma-0"
}, $8 = {
  key: "secondary-point-2",
  class: "ma-0"
}, U8 = { class: "sx-quick-tutorial__action-button pt-4 pb-6" };
function R8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row"), l = ye("i18n");
  return y(), D("section", T8, [
    p(r, {
      direction: "column",
      class: "sx-quick-tutorial__body-container ma-0"
    }, {
      default: b(() => [
        C("section", A8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? V((y(), D("h2", D8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-1"]
              ]) : a.isActiveStep(2) ? V((y(), D("h2", L8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-2"]
              ]) : oe("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        C("section", P8, [
          p(vn, { name: "mw-ui-animation-slide-left" }, {
            default: b(() => [
              a.isActiveStep(1) ? (y(), D("div", {
                key: "illustration-1",
                innerHTML: e.tutorialSvgSections
              }, null, 8, N8)) : a.isActiveStep(2) ? (y(), D("div", {
                key: "illustration-2",
                innerHTML: e.tutorialSvgMT
              }, null, 8, F8)) : oe("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        C("div", M8, [
          (y(!0), D(we, null, Ze(e.totalSteps, (d) => (y(), D("span", {
            key: `dot-${d}`,
            class: pe(["dot mx-1", { "dot-active": a.isActiveStep(d) }]),
            role: "button",
            onClick: (c) => e.activeStep = d
          }, null, 10, O8))), 128))
        ]),
        C("section", B8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? V((y(), D("h3", I8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-1"]
              ]) : a.isActiveStep(2) ? V((y(), D("h3", $8, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-2"]
              ]) : oe("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        C("div", U8, [
          p(vn, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? (y(), F(i, {
                key: "quick-tutorial-action-button-1",
                class: "px-8 mx-4",
                icon: e.mwIconArrowForward,
                progressive: !0,
                onClick: a.goToNextStep
              }, null, 8, ["icon", "onClick"])) : a.isActiveStep(2) ? (y(), F(i, {
                key: "quick-tutorial-action-button-2",
                class: "mx-4",
                label: e.$i18n("sx-quick-tutorial-translate-button-label"),
                progressive: !0,
                onClick: a.completeTutorial
              }, null, 8, ["label", "onClick"])) : oe("", !0)
            ], void 0, !0),
            _: 1
          })
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const V8 = /* @__PURE__ */ z(k8, [["render", R8]]);
const z8 = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: V8
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function j8(e, t, n, o, s, a) {
  const i = _("sx-quick-tutorial");
  return y(), D("main", {
    class: pe(["sx-quick-tutorial-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const H8 = /* @__PURE__ */ z(z8, [["render", j8]]);
function q8(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = Oe.getPageUrl(t, o.title), o.target = "_blank";
}
const G8 = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: Sh },
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
    const t = J(null), n = J(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return ut(() => {
      n.value = 2 * o(), q8(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, W8 = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, K8 = { class: "sx-editor__original-content-panel__header mb-2" }, X8 = ["lang", "dir", "innerHTML"];
function Y8(e, t, n, o, s, a) {
  const i = _("mw-expandable-content"), r = ye("i18n");
  return y(), D("section", W8, [
    V(C("h5", K8, null, 512), [
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
        }, null, 8, X8)
      ], void 0),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const J8 = /* @__PURE__ */ z(G8, [["render", Y8]]), Z8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g id="happy-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
            <circle id="Oval" fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
            <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" id="Mask" fill="#3366CC"></path>
        </g>
    </g>
</svg>
`;
const Q8 = {
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
    const { targetLanguage: t } = ue(le()), n = S(
      () => xn.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = S(() => {
      const a = xn.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = S(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: Z8,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, eE = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, tE = { class: "sx-editor__feedback-overlay-content px-4" }, nE = ["innerHTML"], oE = { class: "sx-editor__feedback-overlay-content__title" }, sE = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function aE(e, t, n, o, s, a) {
  const i = ye("i18n"), r = ye("i18n-html");
  return n.showFeedback ? (y(), D("div", eE, [
    C("div", tE, [
      C("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, nE),
      V(C("h2", oE, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      V(C("p", sE, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      V(C("p", {
        class: pe(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [r, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : oe("", !0);
}
const iE = /* @__PURE__ */ z(Q8, [["render", aE]]);
const rE = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: iE,
    MwRow: be,
    SxEditorOriginalContent: J8,
    VisualEditor: Uy,
    MwSpinner: sn
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = J(!1), n = mt(), o = le(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: r, content: l, originalContent: d, title: c } = history.state, u = J(null), g = J(!1), f = Kt(), { targetLanguage: m, sourceLanguage: w } = ue(o), x = S(
      () => xn.calculateScore(
        u.value,
        l,
        m.value
      )
    ), k = (L) => W(this, null, function* () {
      u.value = L, g.value = !0;
      const M = new Promise((O) => setTimeout(O, 2e3));
      let G = Promise.resolve();
      i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        L
      ) : (x.value === 0 && r && f({
        event_type: "editor_segment_add",
        translation_source_language: w.value,
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
      getDir: Pe.getDir,
      sourceLanguage: w,
      targetLanguage: m,
      onEditorReady: s,
      onEditCompleted: k,
      originalContent: d,
      showFeedback: g,
      title: c
    };
  }
}, lE = { class: "sx-editor__editing-surface-container grow" };
function cE(e, t, n, o, s, a) {
  const i = _("sx-editor-original-content"), r = _("mw-spinner"), l = _("edit-complete-feedback"), d = _("visual-editor"), c = _("mw-row");
  return y(), F(c, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: b(() => [
      o.originalContent ? (y(), F(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : oe("", !0),
      o.editorReady ? oe("", !0) : (y(), F(r, { key: 1 })),
      C("div", lE, [
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
const uE = /* @__PURE__ */ z(rE, [["render", cE]]);
const dE = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: uE
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
function gE(e, t, n, o, s, a) {
  const i = _("sx-editor");
  return y(), D("main", {
    class: pe(["sx-editor-view", a.classes])
  }, [
    p(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const fE = /* @__PURE__ */ z(dE, [["render", gE]]);
const pE = {
  name: "SxPublisherHeader",
  components: { MwCol: Ae, MwButton: he, MwRow: be },
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
function mE(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = ye("i18n");
  return y(), F(l, { class: "ma-0 sx-publisher__header" }, {
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
      V(p(r, {
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
const hE = /* @__PURE__ */ z(pE, [["render", mE]]), _E = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, vE = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Al = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g id="publishing-failure" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" fill="#FEE7E6">
            <circle id="Oval" cx="68" cy="68" r="68"></circle>
        </g>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" id="Mask" fill="#DD3333"></path>
    </g>
</svg>`;
const yE = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: Mt, MwRow: be, MwCol: Ae },
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
        svg: _E,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: vE,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Al,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Al,
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
}, bE = ["innerHTML"], SE = ["textContent"], wE = ["textContent"];
function CE(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-row"), l = _("mw-dialog");
  return n.active ? (y(), F(l, {
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
              }, null, 8, bE),
              C("h2", {
                textContent: ae(a.animationTitle)
              }, null, 8, SE),
              C("p", {
                class: "ma-0",
                textContent: ae(a.animationSubtitle)
              }, null, 8, wE)
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : oe("", !0);
}
const xE = /* @__PURE__ */ z(yE, [["render", CE]]);
const EE = {
  name: "SxPublisherCaptchaDialog",
  components: { MwInput: Bi, MwDialog: Mt, MwRow: be, MwCol: Ae, MwButton: he, MwDivider: ns },
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
    const n = J(""), o = () => t("close"), s = () => t("publish", n.value), a = Ge("breakpoints"), i = S(() => a.value.mobile);
    return {
      captchaInput: n,
      close: o,
      fullscreen: i,
      mwIconCheck: yn,
      mwIconClose: Ft,
      publish: s
    };
  }
}, kE = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, TE = ["src"], AE = ["textContent"], DE = /* @__PURE__ */ C("p", { class: "mt-0" }, null, -1);
function LE(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = _("mw-divider"), c = _("mw-input"), u = _("mw-dialog"), g = ye("i18n");
  return n.active && n.captchaDetails ? (y(), F(u, {
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
          V(p(r, {
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
              V(p(i, {
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
      C("div", kE, [
        n.captchaDetails.type === "image" ? (y(), D("img", {
          key: 0,
          class: "sx-publisher__captcha-dialog__puzzle-image",
          src: n.captchaDetails.url
        }, null, 8, TE)) : (y(), D("p", {
          key: 1,
          textContent: ae(n.captchaDetails.question)
        }, null, 8, AE)),
        DE,
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
  }, 8, ["fullscreen"])) : oe("", !0);
}
const PE = /* @__PURE__ */ z(EE, [["render", LE]]);
const NE = {
  name: "SxPublishOptionSelector",
  components: {
    MwButton: he,
    MwRadioGroup: ou,
    MwRadio: Hs,
    MwDivider: ns,
    MwDialog: Mt
  },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = le(), o = S(
      () => n.state.application.publishTarget
    ), s = S(() => n.state.translator.isAnon), a = Ct(), { currentSourceSection: i } = ue(n), r = S(
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
      mwIconArrowPrevious: Fi,
      onPublishOptionsClose: u,
      publishOptions: d,
      selectedOption: o,
      updateOption: (f) => {
        const m = f.target.value;
        n.commit("application/setPublishTarget", m), u();
      }
    };
  }
}, FE = { class: "mw-ui-dialog__header" }, ME = { class: "row ma-0 pa-4" }, OE = { class: "col shrink justify-center" }, BE = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, IE = { class: "mb-0" }, $E = { class: "pa-4" }, UE = ["textContent"];
function RE(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-divider"), l = _("mw-radio"), d = _("mw-radio-group"), c = _("mw-dialog"), u = ye("i18n");
  return y(), F(c, {
    value: n.active,
    class: "sx-publisher__publish-options",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    onInput: t[0] || (t[0] = (g) => e.$emit("update:active", g)),
    onClose: o.onPublishOptionsClose
  }, {
    header: b(() => [
      C("div", FE, [
        C("div", ME, [
          C("div", OE, [
            p(i, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconArrowPrevious,
              onClick: o.onPublishOptionsClose
            }, null, 8, ["icon", "onClick"])
          ]),
          C("div", BE, [
            V(C("h4", IE, null, 512), [
              [u, void 0, "cx-sx-publisher-preview-options-title"]
            ])
          ])
        ]),
        p(r)
      ])
    ]),
    default: b(() => [
      C("div", $E, [
        p(d, {
          value: o.selectedOption,
          name: "publish-options",
          onInput: o.updateOption
        }, {
          default: b(() => [
            (y(!0), D(we, null, Ze(o.publishOptions, (g, f) => (y(), D(we, {
              key: g.label
            }, [
              p(l, {
                class: "pa-0 my-1",
                label: g.label,
                "input-value": g.value,
                disabled: g.disabled
              }, null, 8, ["label", "input-value", "disabled"]),
              C("p", {
                class: pe(["complementary ms-7 mt-0", o.getMarginBottomClassByOptionIndex(f)]),
                textContent: ae(g.details)
              }, null, 10, UE)
            ], 64))), 128))
          ], void 0, !0),
          _: 1
        }, 8, ["value", "onInput"])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-color", "onClose"]);
}
const VE = /* @__PURE__ */ z(NE, [["render", RE]]);
const zE = {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton: he,
    MwCol: Ae,
    MwRow: be,
    MwMessage: Ym,
    MwIcon: He
  },
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = J(0), n = J(null);
    je(n, () => {
      var w;
      const m = (w = n.value) == null ? void 0 : w.$el;
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
          return uo;
        case "error":
          return Zr;
        default:
          return ei;
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
      mwIconAlert: uo,
      mwIconArrowForward: Tn,
      mwIconBlock: Zr,
      mwIconEye: ei,
      mwIconPrevious: ra,
      reviewIcon: a,
      reviewInfoClass: l,
      status: s
    };
  }
}, jE = { class: "sx-publisher__review-info__content" }, HE = {
  key: 0,
  class: "complementary ma-0"
}, qE = ["textContent"], GE = ["textContent"];
function WE(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = _("mw-message"), u = ye("i18n-html");
  return y(), F(c, {
    type: o.messageType,
    class: pe(["sx-publisher__review-info ma-0 pa-4", o.reviewInfoClass]),
    inline: o.isMessageInline
  }, {
    icon: b(() => [
      p(i, {
        icon: o.reviewIcon,
        class: "shrink mw-ui-message__icon items-start"
      }, null, 8, ["icon"])
    ]),
    default: b(() => [
      C("div", jE, [
        o.status === "default" ? V((y(), D("p", HE, null, 512)), [
          [u, void 0, "cx-sx-publisher-review-info"]
        ]) : (y(), D(we, { key: 1 }, [
          C("h5", {
            textContent: ae(o.messageTitle)
          }, null, 8, qE),
          C("p", {
            textContent: ae(o.messageText)
          }, null, 8, GE),
          p(d, {
            justify: "between",
            class: "ma-0"
          }, {
            default: b(() => [
              V(p(r, {
                ref: "learnMoreContainer",
                class: "sx-publisher__review-info__learn-more-anchor"
              }, null, 512), [
                [u, void 0, "cx-sx-publisher-review-info-learn-more"]
              ]),
              n.publishFeedbackMessages.length > 1 ? (y(), F(r, {
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
              })) : oe("", !0)
            ], void 0, !0),
            _: 1
          })
        ], 64))
      ])
    ], void 0),
    _: 1
  }, 8, ["type", "class", "inline"]);
}
const KE = /* @__PURE__ */ z(zE, [["render", WE]]), Dl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t.innerText;
}, XE = (e, t, n, o) => W(void 0, null, function* () {
  if (n.value) {
    t.value = !1;
    return;
  }
  const {
    currentSourceSection: s,
    sourceLanguage: a,
    targetLanguage: i,
    currentSourcePage: r
  } = ue(e), l = e.getters["application/getTargetPageTitleForPublishing"], d = e.getters["application/isSandboxTarget"], c = r.value.title, u = new mw.Title(c), g = mw.config.get("wgNamespaceIds");
  if (s.value.isLeadSection && !d && u.getNamespaceId() !== g.user)
    try {
      yield ca.addWikibaseLink(
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
    "sx-published-section": Dl(s.value.title),
    "sx-source-page-title": Dl(r.value.title),
    "sx-source-language": a.value,
    "sx-target-language": i.value
  });
}), YE = (e) => {
  const t = J(!1), n = J("pending"), o = J(!1), s = J(!1), a = J(null), i = J([]), r = S(
    () => i.value.some((u) => u.isError)
  );
  return je(o, (u) => {
    u || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (u = null) => W(void 0, null, function* () {
      var w;
      n.value = "pending", t.value = !0;
      let g;
      try {
        g = yield e.dispatch("translator/publishTranslation", {
          captchaId: (w = a.value) == null ? void 0 : w.id,
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
        () => XE(
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
}, JE = (e, t) => {
  const {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = ue(e), a = S(
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
const ZE = {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo: KE,
    SxPublishOptionSelector: VE,
    SxPublisherAnimationDialog: xE,
    SxPublisherCaptchaDialog: PE,
    MwButton: he,
    SxPublisherHeader: hE,
    MwRow: be,
    MwCol: Ae
  },
  setup() {
    const e = le(), { currentSourceSection: t } = ue(e), n = S(() => {
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
    } = YE(e);
    ut(() => W(this, null, function* () {
      const x = yield e.dispatch("translator/validateMT");
      x && f.value.push(x);
    }));
    const { editTranslation: w } = JE(e, mt());
    return {
      captchaDetails: a,
      captchaDialogOn: i,
      configureTranslationOptions: r,
      currentPageSection: t,
      doPublish: l,
      editTranslation: w,
      isPublishDialogActive: d,
      isPublishingDisabled: c,
      mwIconEdit: Cn,
      mwIconSettings: Om,
      onCaptchaDialogClose: u,
      panelResult: s,
      publishFeedbackMessages: f,
      publishOptionsOn: g,
      publishStatus: m,
      translatedTitle: n
    };
  }
}, QE = { class: "sx-publisher" }, e2 = { class: "sx-publisher__publish-panel pa-4" }, t2 = { class: "mb-2" }, n2 = ["innerHTML"], o2 = { class: "sx-publisher__section-preview pa-5" }, s2 = ["innerHTML"];
function a2(e, t, n, o, s, a) {
  const i = _("sx-publisher-header"), r = _("mw-button"), l = _("mw-col"), d = _("mw-row"), c = _("sx-publisher-review-info"), u = _("sx-publish-option-selector"), g = _("sx-publisher-captcha-dialog"), f = _("sx-publisher-animation-dialog"), m = ye("i18n");
  return y(), D("section", QE, [
    p(i, {
      "is-publishing-disabled": o.isPublishingDisabled,
      onPublishTranslation: o.doPublish
    }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
    C("div", e2, [
      V(C("h5", t2, null, 512), [
        [m, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
      ]),
      C("h6", {
        class: "mb-2",
        innerHTML: o.panelResult
      }, null, 8, n2),
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
    C("section", o2, [
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
      C("div", {
        innerHTML: o.currentPageSection.translationHtml
      }, null, 8, s2)
    ]),
    p(u, {
      active: o.publishOptionsOn,
      "onUpdate:active": t[0] || (t[0] = (w) => o.publishOptionsOn = w)
    }, null, 8, ["active"]),
    p(g, {
      active: o.captchaDialogOn,
      "captcha-details": o.captchaDetails,
      onClose: o.onCaptchaDialogClose,
      onPublish: t[1] || (t[1] = (w) => o.doPublish(w))
    }, null, 8, ["active", "captcha-details", "onClose"]),
    p(f, {
      active: o.isPublishDialogActive,
      status: o.publishStatus
    }, null, 8, ["active", "status"])
  ]);
}
const i2 = /* @__PURE__ */ z(ZE, [["render", a2]]);
const r2 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: i2
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function l2(e, t, n, o, s, a) {
  const i = _("sx-publisher");
  return y(), D("main", {
    class: pe(["sx-publisher-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const c2 = /* @__PURE__ */ z(r2, [["render", l2]]);
const u2 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Ii, MwIcon: He, MwRow: be, MwCol: Ae },
  props: {
    suggestion: {
      type: yo,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Lm, mwIconLanguage: eu, mwIconArticle: Oi, getDir: Pe.getDir };
  }
}, d2 = ["textContent"], g2 = ["textContent"], f2 = ["textContent"];
function p2(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-icon"), d = _("mw-row");
  return y(), F(d, {
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
                  C("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: ae(n.suggestion.title)
                  }, null, 8, d2)
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
                  }, null, 8, g2)
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
                  }, null, 8, f2)
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
const Ed = /* @__PURE__ */ z(u2, [["render", p2]]), m2 = (e, t) => {
  const o = J([]), s = J(!1), a = S(
    () => o.value.slice(0, 4)
  ), i = qi(() => W(void 0, null, function* () {
    try {
      o.value = yield is.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return je(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const h2 = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: Ed, MwCard: Wt, MwSpinner: sn },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = ue(
      le()
    ), o = S(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = m2(
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
}, _2 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function v2(e, t, n, o, s, a) {
  const i = _("mw-spinner"), r = _("sx-search-article-suggestion"), l = _("mw-card"), d = ye("i18n");
  return y(), F(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: b(() => [
      o.searchResultsLoading ? (y(), F(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? V((y(), D("p", _2, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : oe("", !0),
      (y(!0), D(we, null, Ze(o.searchResultsSlice, (c) => (y(), F(r, {
        key: c.pageid,
        suggestion: c,
        onClick: (u) => e.$emit("suggestion-clicked", c)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const y2 = /* @__PURE__ */ z(h2, [["render", v2]]);
const b2 = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: Ed, MwCard: Wt },
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
  computed: rt({}, e_({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, S2 = ["textContent"];
function w2(e, t, n, o, s, a) {
  const i = _("sx-search-article-suggestion"), r = _("mw-card");
  return y(), F(r, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: b(() => [
      C("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: ae(n.cardTitle)
      }, null, 8, S2)
    ]),
    default: b(() => [
      (y(!0), D(we, null, Ze(n.suggestions, (l) => (y(), F(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const C2 = /* @__PURE__ */ z(b2, [["render", w2]]), x2 = (e, t) => S(() => {
  const o = {
    value: "other",
    props: {
      icon: ss,
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
      label: Pe.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), E2 = (e, t, n) => S(() => {
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
    (i) => i !== e.value && i !== t.value && Pe.getAutonym(i) !== i
  );
});
const k2 = {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard: C2,
    SearchResultsCard: y2,
    MwInput: Bi,
    MwDialog: Mt,
    MwLanguageSelector: hd,
    MwButtonGroup: ts,
    MwRow: be,
    MwCol: Ae,
    MwButton: he
  },
  setup() {
    const e = J(""), t = J(!1), n = J(null), o = J(!1), s = J([]), a = le(), { sourceLanguage: i, targetLanguage: r } = ue(a), { supportedLanguageCodes: l } = us(), d = E2(
      i,
      r,
      s
    ), c = x2(
      i,
      d
    ), u = mt(), g = tr(a);
    ut(() => W(this, null, function* () {
      var xe;
      yield cd(), g();
      try {
        s.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (Y) {
      }
      (xe = n.value) == null || xe.focus();
    }));
    const f = () => {
      u.push({ name: "dashboard" });
    }, m = ud(a), w = (xe) => m(xe, r.value), x = (xe) => {
      if (xe === "other") {
        o.value = !0;
        return;
      }
      w(xe);
    };
    je(i, () => a.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const k = Kt();
    je(e, () => {
      t.value || (t.value = !0, k({
        event_type: "dashboard_search",
        translation_source_language: i.value,
        translation_target_language: r.value
      }));
    });
    const L = () => {
      o.value = !1;
    }, M = (xe) => {
      o.value = !1, s.value.push(xe), x(xe);
    }, G = S(
      () => a.getters["mediawiki/getRecentlyEditedPages"]
    ), O = S(
      () => a.getters["mediawiki/getNearbyPages"]
    ), ge = Ge("breakpoints"), ne = S(() => ge.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: H,
      startNearbySectionTranslation: Se,
      startSearchResultSectionTranslation: Ce
    } = Qi();
    return {
      supportedLanguageCodes: l,
      close: f,
      fullscreen: ne,
      mwIconClose: Ft,
      mwIconSearch: Jc,
      nearbyPages: O,
      onSourceLanguageDialogClose: L,
      onSourceLanguageSelected: M,
      recentlyEditedPages: G,
      searchInput: e,
      searchInputRef: n,
      sourceLanguage: i,
      sourceLanguageOptions: c,
      sourceLanguageSelectOn: o,
      startNearbySectionTranslation: Se,
      startRecentlyEditedSectionTranslation: H,
      startSearchResultSectionTranslation: Ce,
      suggestedSourceLanguages: d,
      updateSelection: x
    };
  }
}, T2 = { class: "sx-article-search" }, A2 = { class: "mb-0" }, D2 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
};
function L2(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-input"), c = _("mw-button-group"), u = _("article-suggestions-card"), g = _("search-results-card"), f = _("mw-language-selector"), m = _("mw-dialog"), w = ye("i18n");
  return y(), D("section", T2, [
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
            V(C("h5", A2, null, 512), [
              [w, void 0, "cx-sx-article-search-header"]
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
    o.searchInput ? oe("", !0) : (y(), D(we, { key: 0 }, [
      o.recentlyEditedPages && o.recentlyEditedPages.length ? (y(), F(u, {
        key: 0,
        "card-title": e.$i18n("cx-sx-article-search-recently-edited-title"),
        suggestions: o.recentlyEditedPages,
        onSuggestionClicked: o.startRecentlyEditedSectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : o.nearbyPages && o.nearbyPages.length ? (y(), F(u, {
        key: 1,
        "card-title": e.$i18n("cx-sx-article-search-nearby-title"),
        suggestions: o.nearbyPages,
        onSuggestionClicked: o.startNearbySectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : V((y(), D("p", D2, null, 512)), [
        [w, void 0, "cx-sx-article-search-no-suggestions-message"]
      ])
    ], 64)),
    V(p(g, {
      "search-input": o.searchInput,
      onSuggestionClicked: o.startSearchResultSectionTranslation
    }, null, 8, ["search-input", "onSuggestionClicked"]), [
      [Ni, !!o.searchInput]
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
const P2 = /* @__PURE__ */ z(k2, [["render", L2]]);
const N2 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: P2
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
};
function F2(e, t, n, o, s, a) {
  const i = _("sx-article-search");
  return y(), D("main", {
    class: pe(["sx-article-search-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const M2 = /* @__PURE__ */ z(N2, [["render", F2]]), kd = [
  {
    path: "",
    name: "dashboard",
    component: Tl,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: M2,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: fw,
    props: (e) => ({
      previousRoute: e.query.previousRoute,
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: sC,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: KC,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: H8,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: C8,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: fE,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: c2,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Tl,
    meta: { workflowStep: 0 }
  }
], or = Fv({
  history: N1(),
  routes: kd
});
or.beforeEach((e, t, n) => {
  const o = le();
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
    const r = Math.ceil(a) - 1, l = kd.find(
      (d) => d.meta.workflowStep === r
    );
    n({ name: l.name });
    return;
  }
  n();
});
or.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const O2 = mw.config.get("wgUserLanguage"), B2 = "en", I2 = mw.messages.values || {}, Dn = qc(d_);
Dn.config.globalProperties.$incompleteVersion = !0;
const $2 = Cy();
Dn.use($2);
Dn.use(or);
Dn.use(fo);
Dn.use(Ah);
Dn.use(Th);
const U2 = ey({
  locale: O2,
  finalFallback: B2,
  messages: I2,
  wikilinks: !0
});
Dn.use(U2);
Dn.mount("#contenttranslation");
