/*@nomin*/
var nd = Object.defineProperty, od = Object.defineProperties;
var sd = Object.getOwnPropertyDescriptors;
var qi = Object.getOwnPropertySymbols;
var ad = Object.prototype.hasOwnProperty, id = Object.prototype.propertyIsEnumerable;
var Gi = (e, t, n) => t in e ? nd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wt = (e, t) => {
  for (var n in t || (t = {}))
    ad.call(t, n) && Gi(e, n, t[n]);
  if (qi)
    for (var n of qi(t))
      id.call(t, n) && Gi(e, n, t[n]);
  return e;
}, Mt = (e, t) => od(e, sd(t));
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
function Cn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function ot(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = ze(o) ? ud(o) : ot(o);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else {
    if (ze(e))
      return e;
    if (Le(e))
      return e;
  }
}
const rd = /;(?![^(]*\))/g, ld = /:([^]+)/, cd = new RegExp("\\/\\*.*?\\*\\/", "gs");
function ud(e) {
  const t = {};
  return e.replace(cd, "").split(rd).forEach((n) => {
    if (n) {
      const o = n.split(ld);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function fe(e) {
  let t = "";
  if (ze(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const o = fe(e[n]);
      o && (t += o + " ");
    }
  else if (Le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ti(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !ze(t) && (e.class = fe(t)), n && (e.style = ot(n)), e;
}
const dd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", gd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fd = /* @__PURE__ */ Cn(dd), pd = /* @__PURE__ */ Cn(gd), hd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", md = /* @__PURE__ */ Cn(hd);
function ul(e) {
  return !!e || e === "";
}
function _d(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = ws(e[o], t[o]);
  return n;
}
function ws(e, t) {
  if (e === t)
    return !0;
  let n = Ki(e), o = Ki(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = No(e), o = No(t), n || o)
    return e === t;
  if (n = ie(e), o = ie(t), n || o)
    return n && o ? _d(e, t) : !1;
  if (n = Le(e), o = Le(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, a = Object.keys(t).length;
    if (s !== a)
      return !1;
    for (const i in e) {
      const r = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (r && !l || !r && l || !ws(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const se = (e) => ze(e) ? e : e == null ? "" : ie(e) || Le(e) && (e.toString === pl || !ce(e.toString)) ? JSON.stringify(e, dl, 2) : String(e), dl = (e, t) => t && t.__v_isRef ? dl(e, t.value) : In(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : fl(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Le(t) && !ie(t) && !hl(t) ? String(t) : t, $e = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, ro = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], nt = () => {
}, gl = () => !1, vd = /^on[^a-z]/, qo = (e) => vd.test(e), Cs = (e) => e.startsWith("onUpdate:"), We = Object.assign, ni = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yd = Object.prototype.hasOwnProperty, Ce = (e, t) => yd.call(e, t), ie = Array.isArray, In = (e) => Go(e) === "[object Map]", fl = (e) => Go(e) === "[object Set]", Ki = (e) => Go(e) === "[object Date]", ce = (e) => typeof e == "function", ze = (e) => typeof e == "string", No = (e) => typeof e == "symbol", Le = (e) => e !== null && typeof e == "object", oi = (e) => Le(e) && ce(e.then) && ce(e.catch), pl = Object.prototype.toString, Go = (e) => pl.call(e), si = (e) => Go(e).slice(8, -1), hl = (e) => Go(e) === "[object Object]", ai = (e) => ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hs = /* @__PURE__ */ Cn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bd = /* @__PURE__ */ Cn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Is = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Sd = /-(\w)/g, Ut = Is((e) => e.replace(Sd, (t, n) => n ? n.toUpperCase() : "")), wd = /\B([A-Z])/g, Yt = Is((e) => e.replace(wd, "-$1").toLowerCase()), Hn = Is((e) => e.charAt(0).toUpperCase() + e.slice(1)), dn = Is((e) => e ? `on${Hn(e)}` : ""), Fo = (e, t) => !Object.is(e, t), no = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, xs = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Cd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xd = (e) => {
  const t = ze(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Wi;
const ml = () => Wi || (Wi = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function xa(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Tt;
class _l {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Tt, !t && Tt && (this.index = (Tt.scopes || (Tt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Tt;
      try {
        return Tt = this, t();
      } finally {
        Tt = n;
      }
    } else
      ({}).NODE_ENV !== "production" && xa("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Tt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Tt = this.parent;
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
function Ed(e) {
  return new _l(e);
}
function Ad(e, t = Tt) {
  t && t.active && t.effects.push(e);
}
function kd() {
  return Tt;
}
const Mo = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, vl = (e) => (e.w & bn) > 0, yl = (e) => (e.n & bn) > 0, Td = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= bn;
}, Dd = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      vl(s) && !yl(s) ? s.delete(e) : t[n++] = s, s.w &= ~bn, s.n &= ~bn;
    }
    t.length = n;
  }
}, Ea = /* @__PURE__ */ new WeakMap();
let Eo = 0, bn = 1;
const Aa = 30;
let gt;
const $n = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), ka = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class ii {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ad(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = gt, n = yn;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = gt, gt = this, yn = !0, bn = 1 << ++Eo, Eo <= Aa ? Td(this) : Xi(this), this.fn();
    } finally {
      Eo <= Aa && Dd(this), bn = 1 << --Eo, gt = this.parent, yn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    gt === this ? this.deferStop = !0 : this.active && (Xi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Xi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let yn = !0;
const bl = [];
function Kn() {
  bl.push(yn), yn = !1;
}
function Wn() {
  const e = bl.pop();
  yn = e === void 0 ? !0 : e;
}
function ft(e, t, n) {
  if (yn && gt) {
    let o = Ea.get(e);
    o || Ea.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Mo());
    const a = {}.NODE_ENV !== "production" ? { effect: gt, target: e, type: t, key: n } : void 0;
    Ta(s, a);
  }
}
function Ta(e, t) {
  let n = !1;
  Eo <= Aa ? yl(e) || (e.n |= bn, n = !vl(e)) : n = !e.has(gt), n && (e.add(gt), gt.deps.push(e), {}.NODE_ENV !== "production" && gt.onTrack && gt.onTrack(Object.assign({ effect: gt }, t)));
}
function Jt(e, t, n, o, s, a) {
  const i = Ea.get(e);
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
        ie(e) ? ai(n) && r.push(i.get("length")) : (r.push(i.get($n)), In(e) && r.push(i.get(ka)));
        break;
      case "delete":
        ie(e) || (r.push(i.get($n)), In(e) && r.push(i.get(ka)));
        break;
      case "set":
        In(e) && r.push(i.get($n));
        break;
    }
  const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: a } : void 0;
  if (r.length === 1)
    r[0] && ({}.NODE_ENV !== "production" ? ao(r[0], l) : ao(r[0]));
  else {
    const d = [];
    for (const c of r)
      c && d.push(...c);
    ({}).NODE_ENV !== "production" ? ao(Mo(d), l) : ao(Mo(d));
  }
}
function ao(e, t) {
  const n = ie(e) ? e : [...e];
  for (const o of n)
    o.computed && Yi(o, t);
  for (const o of n)
    o.computed || Yi(o, t);
}
function Yi(e, t) {
  (e !== gt || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(We({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Ld = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), Sl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(No)
), Pd = /* @__PURE__ */ $s(), Nd = /* @__PURE__ */ $s(!1, !0), Fd = /* @__PURE__ */ $s(!0), Md = /* @__PURE__ */ $s(!0, !0), Ji = /* @__PURE__ */ Od();
function Od() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = pe(this);
      for (let a = 0, i = this.length; a < i; a++)
        ft(o, "get", a + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(pe)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Kn();
      const o = pe(this)[t].apply(this, n);
      return Wn(), o;
    };
  }), e;
}
function Bd(e) {
  const t = pe(this);
  return ft(t, "has", e), t.hasOwnProperty(e);
}
function $s(e = !1, t = !1) {
  return function(o, s, a) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && a === (e ? t ? Dl : Tl : t ? kl : Al).get(o))
      return o;
    const i = ie(o);
    if (!e) {
      if (i && Ce(Ji, s))
        return Reflect.get(Ji, s, a);
      if (s === "hasOwnProperty")
        return Bd;
    }
    const r = Reflect.get(o, s, a);
    return (No(s) ? Sl.has(s) : Ld(s)) || (e || ft(o, "get", s), t) ? r : Ye(r) ? i && ai(s) ? r : r.value : Le(r) ? e ? Ll(r) : Xn(r) : r;
  };
}
const Id = /* @__PURE__ */ wl(), $d = /* @__PURE__ */ wl(!0);
function wl(e = !1) {
  return function(n, o, s, a) {
    let i = n[o];
    if (Sn(i) && Ye(i) && !Ye(s))
      return !1;
    if (!e && (!Es(s) && !Sn(s) && (i = pe(i), s = pe(s)), !ie(n) && Ye(i) && !Ye(s)))
      return i.value = s, !0;
    const r = ie(n) && ai(o) ? Number(o) < n.length : Ce(n, o), l = Reflect.set(n, o, s, a);
    return n === pe(a) && (r ? Fo(s, i) && Jt(n, "set", o, s, i) : Jt(n, "add", o, s)), l;
  };
}
function Ud(e, t) {
  const n = Ce(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && Jt(e, "delete", t, void 0, o), s;
}
function Rd(e, t) {
  const n = Reflect.has(e, t);
  return (!No(t) || !Sl.has(t)) && ft(e, "has", t), n;
}
function Vd(e) {
  return ft(e, "iterate", ie(e) ? "length" : $n), Reflect.ownKeys(e);
}
const Cl = {
  get: Pd,
  set: Id,
  deleteProperty: Ud,
  has: Rd,
  ownKeys: Vd
}, xl = {
  get: Fd,
  set(e, t) {
    return {}.NODE_ENV !== "production" && xa(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && xa(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, zd = /* @__PURE__ */ We({}, Cl, {
  get: Nd,
  set: $d
}), jd = /* @__PURE__ */ We({}, xl, {
  get: Md
}), ri = (e) => e, Us = (e) => Reflect.getPrototypeOf(e);
function rs(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = pe(e), a = pe(t);
  n || (t !== a && ft(s, "get", t), ft(s, "get", a));
  const { has: i } = Us(s), r = o ? ri : n ? li : Oo;
  if (i.call(s, t))
    return r(e.get(t));
  if (i.call(s, a))
    return r(e.get(a));
  e !== s && e.get(t);
}
function ls(e, t = !1) {
  const n = this.__v_raw, o = pe(n), s = pe(e);
  return t || (e !== s && ft(o, "has", e), ft(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function cs(e, t = !1) {
  return e = e.__v_raw, !t && ft(pe(e), "iterate", $n), Reflect.get(e, "size", e);
}
function Zi(e) {
  e = pe(e);
  const t = pe(this);
  return Us(t).has.call(t, e) || (t.add(e), Jt(t, "add", e, e)), this;
}
function Qi(e, t) {
  t = pe(t);
  const n = pe(this), { has: o, get: s } = Us(n);
  let a = o.call(n, e);
  a ? {}.NODE_ENV !== "production" && El(n, o, e) : (e = pe(e), a = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), a ? Fo(t, i) && Jt(n, "set", e, t, i) : Jt(n, "add", e, t), this;
}
function er(e) {
  const t = pe(this), { has: n, get: o } = Us(t);
  let s = n.call(t, e);
  s ? {}.NODE_ENV !== "production" && El(t, n, e) : (e = pe(e), s = n.call(t, e));
  const a = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && Jt(t, "delete", e, void 0, a), i;
}
function tr() {
  const e = pe(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? In(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Jt(e, "clear", void 0, void 0, n), o;
}
function us(e, t) {
  return function(o, s) {
    const a = this, i = a.__v_raw, r = pe(i), l = t ? ri : e ? li : Oo;
    return !e && ft(r, "iterate", $n), i.forEach((d, c) => o.call(s, l(d), l(c), a));
  };
}
function ds(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, a = pe(s), i = In(a), r = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, d = s[e](...o), c = n ? ri : t ? li : Oo;
    return !t && ft(a, "iterate", l ? ka : $n), {
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
function sn(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${Hn(e)} operation ${n}failed: target is readonly.`, pe(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Hd() {
  const e = {
    get(a) {
      return rs(this, a);
    },
    get size() {
      return cs(this);
    },
    has: ls,
    add: Zi,
    set: Qi,
    delete: er,
    clear: tr,
    forEach: us(!1, !1)
  }, t = {
    get(a) {
      return rs(this, a, !1, !0);
    },
    get size() {
      return cs(this);
    },
    has: ls,
    add: Zi,
    set: Qi,
    delete: er,
    clear: tr,
    forEach: us(!1, !0)
  }, n = {
    get(a) {
      return rs(this, a, !0);
    },
    get size() {
      return cs(this, !0);
    },
    has(a) {
      return ls.call(this, a, !0);
    },
    add: sn(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: sn(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: sn(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: sn(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: us(!0, !1)
  }, o = {
    get(a) {
      return rs(this, a, !0, !0);
    },
    get size() {
      return cs(this, !0);
    },
    has(a) {
      return ls.call(this, a, !0);
    },
    add: sn(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: sn(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: sn(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: sn(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: us(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = ds(a, !1, !1), n[a] = ds(a, !0, !1), t[a] = ds(a, !1, !0), o[a] = ds(a, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [qd, Gd, Kd, Wd] = /* @__PURE__ */ Hd();
function Rs(e, t) {
  const n = t ? e ? Wd : Kd : e ? Gd : qd;
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(Ce(n, s) && s in o ? n : o, s, a);
}
const Xd = {
  get: /* @__PURE__ */ Rs(!1, !1)
}, Yd = {
  get: /* @__PURE__ */ Rs(!1, !0)
}, Jd = {
  get: /* @__PURE__ */ Rs(!0, !1)
}, Zd = {
  get: /* @__PURE__ */ Rs(!0, !0)
};
function El(e, t, n) {
  const o = pe(n);
  if (o !== n && t.call(e, o)) {
    const s = si(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Al = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap();
function Qd(e) {
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
function eg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qd(si(e));
}
function Xn(e) {
  return Sn(e) ? e : Vs(e, !1, Cl, Xd, Al);
}
function tg(e) {
  return Vs(e, !1, zd, Yd, kl);
}
function Ll(e) {
  return Vs(e, !0, xl, Jd, Tl);
}
function io(e) {
  return Vs(e, !0, jd, Zd, Dl);
}
function Vs(e, t, n, o, s) {
  if (!Le(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = s.get(e);
  if (a)
    return a;
  const i = eg(e);
  if (i === 0)
    return e;
  const r = new Proxy(e, i === 2 ? o : n);
  return s.set(e, r), r;
}
function Un(e) {
  return Sn(e) ? Un(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Sn(e) {
  return !!(e && e.__v_isReadonly);
}
function Es(e) {
  return !!(e && e.__v_isShallow);
}
function Da(e) {
  return Un(e) || Sn(e);
}
function pe(e) {
  const t = e && e.__v_raw;
  return t ? pe(t) : e;
}
function Pl(e) {
  return xs(e, "__v_skip", !0), e;
}
const Oo = (e) => Le(e) ? Xn(e) : e, li = (e) => Le(e) ? Ll(e) : e;
function Nl(e) {
  yn && gt && (e = pe(e), {}.NODE_ENV !== "production" ? Ta(e.dep || (e.dep = Mo()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ta(e.dep || (e.dep = Mo())));
}
function Fl(e, t) {
  e = pe(e);
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
function ne(e) {
  return Ml(e, !1);
}
function ng(e) {
  return Ml(e, !0);
}
function Ml(e, t) {
  return Ye(e) ? e : new og(e, t);
}
class og {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : pe(t), this._value = n ? t : Oo(t);
  }
  get value() {
    return Nl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Es(t) || Sn(t);
    t = n ? t : pe(t), Fo(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Oo(t), Fl(this, t));
  }
}
function lo(e) {
  return Ye(e) ? e.value : e;
}
const sg = {
  get: (e, t, n) => lo(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Ye(s) && !Ye(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ol(e) {
  return Un(e) ? e : new Proxy(e, sg);
}
var Bl;
class ag {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Bl] = !1, this._dirty = !0, this.effect = new ii(t, () => {
      this._dirty || (this._dirty = !0, Fl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = pe(this);
    return Nl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Bl = "__v_isReadonly";
function ig(e, t, n = !1) {
  let o, s;
  const a = ce(e);
  a ? (o = e, s = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : nt) : (o = e.get, s = e.set);
  const i = new ag(o, s, a || !s, n);
  return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const Rn = [];
function ms(e) {
  Rn.push(e);
}
function _s() {
  Rn.pop();
}
function I(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  Kn();
  const n = Rn.length ? Rn[Rn.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = rg();
  if (o)
    Xt(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: a }) => `at <${Ys(n, a.type)}>`).join(`
`),
      s
    ]);
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    s.length && a.push(`
`, ...lg(s)), console.warn(...a);
  }
  Wn();
}
function rg() {
  let e = Rn[Rn.length - 1];
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
function lg(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...cg(n));
  }), t;
}
function cg({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Ys(e.component, e.type, o)}`, a = ">" + n;
  return e.props ? [s, ...ug(e.props), a] : [s + a];
}
function ug(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Il(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Il(e, t, n) {
  return ze(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ye(t) ? (t = Il(e, pe(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ce(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = pe(t), n ? t : [`${e}=`, t]);
}
function dg(e, t) {
  ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? I(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && I(`${t} is NaN - the duration expression might be incorrect.`));
}
const ci = {
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
function Xt(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (a) {
    zs(a, t, n);
  }
  return s;
}
function At(e, t, n, o) {
  if (ce(e)) {
    const a = Xt(e, t, n, o);
    return a && oi(a) && a.catch((i) => {
      zs(i, t, n);
    }), a;
  }
  const s = [];
  for (let a = 0; a < e.length; a++)
    s.push(At(e[a], t, n, o));
  return s;
}
function zs(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const i = t.proxy, r = {}.NODE_ENV !== "production" ? ci[n] : n;
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
      Xt(l, null, 10, [e, i, r]);
      return;
    }
  }
  gg(e, n, s, o);
}
function gg(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const s = ci[t];
    if (n && ms(n), I(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && _s(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Bo = !1, La = !1;
const it = [];
let It = 0;
const co = [];
let Bt = null, gn = 0;
const $l = /* @__PURE__ */ Promise.resolve();
let ui = null;
const fg = 100;
function Ko(e) {
  const t = ui || $l;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pg(e) {
  let t = It + 1, n = it.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Io(it[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function js(e) {
  (!it.length || !it.includes(e, Bo && e.allowRecurse ? It + 1 : It)) && (e.id == null ? it.push(e) : it.splice(pg(e.id), 0, e), Ul());
}
function Ul() {
  !Bo && !La && (La = !0, ui = $l.then(zl));
}
function hg(e) {
  const t = it.indexOf(e);
  t > It && it.splice(t, 1);
}
function Rl(e) {
  ie(e) ? co.push(...e) : (!Bt || !Bt.includes(e, e.allowRecurse ? gn + 1 : gn)) && co.push(e), Ul();
}
function nr(e, t = Bo ? It + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < it.length; t++) {
    const n = it[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && di(e, n))
        continue;
      it.splice(t, 1), t--, n();
    }
  }
}
function Vl(e) {
  if (co.length) {
    const t = [...new Set(co)];
    if (co.length = 0, Bt) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Bt.sort((n, o) => Io(n) - Io(o)), gn = 0; gn < Bt.length; gn++)
      ({}).NODE_ENV !== "production" && di(e, Bt[gn]) || Bt[gn]();
    Bt = null, gn = 0;
  }
}
const Io = (e) => e.id == null ? 1 / 0 : e.id, mg = (e, t) => {
  const n = Io(e) - Io(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function zl(e) {
  La = !1, Bo = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), it.sort(mg);
  const t = {}.NODE_ENV !== "production" ? (n) => di(e, n) : nt;
  try {
    for (It = 0; It < it.length; It++) {
      const n = it[It];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        Xt(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    It = 0, it.length = 0, Vl(e), Bo = !1, ui = null, (it.length || co.length) && zl(e);
  }
}
function di(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fg) {
      const o = t.ownerInstance, s = o && bi(o.type);
      return I(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Vn = !1;
const oo = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (ml().__VUE_HMR_RUNTIME__ = {
  createRecord: ra(jl),
  rerender: ra(yg),
  reload: ra(bg)
});
const qn = /* @__PURE__ */ new Map();
function _g(e) {
  const t = e.type.__hmrId;
  let n = qn.get(t);
  n || (jl(t, e.type), n = qn.get(t)), n.instances.add(e);
}
function vg(e) {
  qn.get(e.type.__hmrId).instances.delete(e);
}
function jl(e, t) {
  return qn.has(e) ? !1 : (qn.set(e, {
    initialDef: ko(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ko(e) {
  return Cc(e) ? e.__vccOpts : e;
}
function yg(e, t) {
  const n = qn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ko(o.type).render = t), o.renderCache = [], Vn = !0, o.update(), Vn = !1;
  }));
}
function bg(e, t) {
  const n = qn.get(e);
  if (!n)
    return;
  t = ko(t), or(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const a = ko(s.type);
    oo.has(a) || (a !== n.initialDef && or(a, t), oo.add(a)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (oo.add(a), s.ceReload(t.styles), oo.delete(a)) : s.parent ? js(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Rl(() => {
    for (const s of o)
      oo.delete(ko(s.type));
  });
}
function or(e, t) {
  We(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ra(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let $t, Ao = [], Pa = !1;
function Wo(e, ...t) {
  $t ? $t.emit(e, ...t) : Pa || Ao.push({ event: e, args: t });
}
function Hl(e, t) {
  var n, o;
  $t = e, $t ? ($t.enabled = !0, Ao.forEach(({ event: s, args: a }) => $t.emit(s, ...a)), Ao = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    Hl(a, t);
  }), setTimeout(() => {
    $t || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Pa = !0, Ao = []);
  }, 3e3)) : (Pa = !0, Ao = []);
}
function Sg(e, t) {
  Wo("app:init", e, t, {
    Fragment: xe,
    Text: Yo,
    Comment: tt,
    Static: bs
  });
}
function wg(e) {
  Wo("app:unmount", e);
}
const Cg = /* @__PURE__ */ gi(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), ql = /* @__PURE__ */ gi(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), xg = /* @__PURE__ */ gi(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Eg = (e) => {
  $t && typeof $t.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !$t.cleanupBuffer(e) && xg(e);
};
function gi(e) {
  return (t) => {
    Wo(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Ag = /* @__PURE__ */ Gl(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), kg = /* @__PURE__ */ Gl(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Gl(e) {
  return (t, n, o) => {
    Wo(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Tg(e, t, n) {
  Wo("component:emit", e.appContext.app, e, t, n);
}
function Dg(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || $e;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: c, propsOptions: [u] } = e;
    if (c)
      if (!(t in c))
        (!u || !(dn(t) in u)) && I(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${dn(t)}" prop.`);
      else {
        const g = c[t];
        ce(g) && (g(...n) || I(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let s = n;
  const a = t.startsWith("update:"), i = a && t.slice(7);
  if (i && i in o) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`, { number: u, trim: g } = o[c] || $e;
    g && (s = n.map((f) => ze(f) ? f.trim() : f)), u && (s = n.map(Cd));
  }
  if ({}.NODE_ENV !== "production" && Tg(e, t, s), {}.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && o[dn(c)] && I(`Event "${c}" is emitted in component ${Ys(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Yt(t)}" instead of "${t}".`);
  }
  let r, l = o[r = dn(t)] || // also try camelCase event handler (#2249)
  o[r = dn(Ut(t))];
  !l && a && (l = o[r = dn(Yt(t))]), l && At(l, e, 6, s);
  const d = o[r + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, At(d, e, 6, s);
  }
}
function Kl(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const a = e.emits;
  let i = {}, r = !1;
  if (!ce(e)) {
    const l = (d) => {
      const c = Kl(d, t, !0);
      c && (r = !0, We(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !r ? (Le(e) && o.set(e, null), null) : (ie(a) ? a.forEach((l) => i[l] = null) : We(i, a), Le(e) && o.set(e, i), i);
}
function Hs(e, t) {
  return !e || !qo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, Yt(t)) || Ce(e, t));
}
let Je = null, Wl = null;
function As(e) {
  const t = Je;
  return Je = e, Wl = e && e.type.__scopeId || null, t;
}
function b(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && hr(-1);
    const a = As(t);
    let i;
    try {
      i = e(...s);
    } finally {
      As(a), o._d && hr(1);
    }
    return {}.NODE_ENV !== "production" && ql(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Na = !1;
function ks() {
  Na = !0;
}
function la(e) {
  const { type: t, vnode: n, proxy: o, withProxy: s, props: a, propsOptions: [i], slots: r, attrs: l, emit: d, render: c, renderCache: u, data: g, setupState: f, ctx: m, inheritAttrs: C } = e;
  let x, A;
  const L = As(e);
  ({}).NODE_ENV !== "production" && (Na = !1);
  try {
    if (n.shapeFlag & 4) {
      const J = s || o;
      x = Dt(c.call(J, J, u, a, f, g, m)), A = l;
    } else {
      const J = t;
      ({}).NODE_ENV !== "production" && l === a && ks(), x = Dt(J.length > 1 ? J(a, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return ks(), l;
        },
        slots: r,
        emit: d
      } : { attrs: l, slots: r, emit: d }) : J(
        a,
        null
        /* we know it doesn't need it */
      )), A = t.props ? l : Pg(l);
    }
  } catch (J) {
    Do.length = 0, zs(
      J,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), x = p(tt);
  }
  let R = x, O;
  if ({}.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([R, O] = Lg(x)), A && C !== !1) {
    const J = Object.keys(A), { shapeFlag: we } = R;
    if (J.length) {
      if (we & 7)
        i && J.some(Cs) && (A = Ng(A, i)), R = Rt(R, A);
      else if ({}.NODE_ENV !== "production" && !Na && R.type !== tt) {
        const X = Object.keys(l), W = [], be = [];
        for (let ue = 0, Be = X.length; ue < Be; ue++) {
          const G = X[ue];
          qo(G) ? Cs(G) || W.push(G[2].toLowerCase() + G.slice(3)) : be.push(G);
        }
        be.length && I(`Extraneous non-props attributes (${be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), W.length && I(`Extraneous non-emits event listeners (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !sr(R) && I("Runtime directive used on component with non-element root node. The directives will not function as intended."), R = Rt(R), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !sr(R) && I("Component inside <Transition> renders non-element root node that cannot be animated."), R.transition = n.transition), {}.NODE_ENV !== "production" && O ? O(R) : x = R, As(L), x;
}
const Lg = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Xl(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), a = n ? n.indexOf(o) : -1, i = (r) => {
    t[s] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
  };
  return [Dt(o), i];
};
function Xl(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (uo(o)) {
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
const Pg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || qo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ng = (e, t) => {
  const n = {};
  for (const o in e)
    (!Cs(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, sr = (e) => e.shapeFlag & 7 || e.type === tt;
function Fg(e, t, n) {
  const { props: o, children: s, component: a } = e, { props: i, children: r, patchFlag: l } = t, d = a.emitsOptions;
  if ({}.NODE_ENV !== "production" && (s || r) && Vn || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? ar(o, i, d) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const g = c[u];
        if (i[g] !== o[g] && !Hs(d, g))
          return !0;
      }
    }
  } else
    return (s || r) && (!r || !r.$stable) ? !0 : o === i ? !1 : o ? i ? ar(o, i, d) : !0 : !!i;
  return !1;
}
function ar(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (t[a] !== e[a] && !Hs(n, a))
      return !0;
  }
  return !1;
}
function Mg({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Og = (e) => e.__isSuspense;
function Bg(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Rl(e);
}
function vs(e, t) {
  if (!Ge)
    ({}).NODE_ENV !== "production" && I("provide() can only be used inside setup().");
  else {
    let n = Ge.provides;
    const o = Ge.parent && Ge.parent.provides;
    o === n && (n = Ge.provides = Object.create(o)), n[e] = t;
  }
}
function Ze(e, t, n = !1) {
  const o = Ge || Je;
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
function Ig(e, t) {
  return fi(e, null, t);
}
const gs = {};
function Ke(e, t, n) {
  return {}.NODE_ENV !== "production" && !ce(t) && I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), fi(e, t, n);
}
function fi(e, t, { immediate: n, deep: o, flush: s, onTrack: a, onTrigger: i } = $e) {
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const r = (O) => {
    I("Invalid watch source: ", O, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = kd() === (Ge == null ? void 0 : Ge.scope) ? Ge : null;
  let d, c = !1, u = !1;
  if (Ye(e) ? (d = () => e.value, c = Es(e)) : Un(e) ? (d = () => e, o = !0) : ie(e) ? (u = !0, c = e.some((O) => Un(O) || Es(O)), d = () => e.map((O) => {
    if (Ye(O))
      return O.value;
    if (Un(O))
      return Bn(O);
    if (ce(O))
      return Xt(
        O,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    ({}).NODE_ENV !== "production" && r(O);
  })) : ce(e) ? t ? d = () => Xt(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : d = () => {
    if (!(l && l.isUnmounted))
      return g && g(), At(e, l, 3, [f]);
  } : (d = nt, {}.NODE_ENV !== "production" && r(e)), t && o) {
    const O = d;
    d = () => Bn(O());
  }
  let g, f = (O) => {
    g = L.onStop = () => {
      Xt(
        O,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, m;
  if (Uo)
    if (f = nt, t ? n && At(t, l, 3, [
      d(),
      u ? [] : void 0,
      f
    ]) : d(), s === "sync") {
      const O = $f();
      m = O.__watcherHandles || (O.__watcherHandles = []);
    } else
      return nt;
  let C = u ? new Array(e.length).fill(gs) : gs;
  const x = () => {
    if (L.active)
      if (t) {
        const O = L.run();
        (o || c || (u ? O.some((J, we) => Fo(J, C[we])) : Fo(O, C))) && (g && g(), At(t, l, 3, [
          O,
          // pass undefined as the old value when it's changed for the first time
          C === gs ? void 0 : u && C[0] === gs ? [] : C,
          f
        ]), C = O);
      } else
        L.run();
  };
  x.allowRecurse = !!t;
  let A;
  s === "sync" ? A = x : s === "post" ? A = () => mt(x, l && l.suspense) : (x.pre = !0, l && (x.id = l.uid), A = () => js(x));
  const L = new ii(d, A);
  ({}).NODE_ENV !== "production" && (L.onTrack = a, L.onTrigger = i), t ? n ? x() : C = L.run() : s === "post" ? mt(L.run.bind(L), l && l.suspense) : L.run();
  const R = () => {
    L.stop(), l && l.scope && ni(l.scope.effects, L);
  };
  return m && m.push(R), R;
}
function $g(e, t, n) {
  const o = this.proxy, s = ze(e) ? e.includes(".") ? Yl(o, e) : () => o[e] : e.bind(o, o);
  let a;
  ce(t) ? a = t : (a = t.handler, n = t);
  const i = Ge;
  go(this);
  const r = fi(s, a.bind(o), n);
  return i ? go(i) : jn(), r;
}
function Yl(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function Bn(e, t) {
  if (!Le(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Ye(e))
    Bn(e.value, t);
  else if (ie(e))
    for (let n = 0; n < e.length; n++)
      Bn(e[n], t);
  else if (fl(e) || In(e))
    e.forEach((n) => {
      Bn(n, t);
    });
  else if (hl(e))
    for (const n in e)
      Bn(e[n], t);
  return e;
}
function Ug() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lt(() => {
    e.isMounted = !0;
  }), nc(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ct = [Function, Array], Rg = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: Ct,
    onEnter: Ct,
    onAfterEnter: Ct,
    onEnterCancelled: Ct,
    // leave
    onBeforeLeave: Ct,
    onLeave: Ct,
    onAfterLeave: Ct,
    onLeaveCancelled: Ct,
    // appear
    onBeforeAppear: Ct,
    onAppear: Ct,
    onAfterAppear: Ct,
    onAppearCancelled: Ct
  },
  setup(e, { slots: t }) {
    const n = yi(), o = Ug();
    let s;
    return () => {
      const a = t.default && Ql(t.default(), !0);
      if (!a || !a.length)
        return;
      let i = a[0];
      if (a.length > 1) {
        let C = !1;
        for (const x of a)
          if (x.type !== tt) {
            if ({}.NODE_ENV !== "production" && C) {
              I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = x, C = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const r = pe(e), { mode: l } = r;
      if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && I(`invalid <transition> mode: ${l}`), o.isLeaving)
        return ca(i);
      const d = ir(i);
      if (!d)
        return ca(i);
      const c = Fa(d, r, o, n);
      Ma(d, c);
      const u = n.subTree, g = u && ir(u);
      let f = !1;
      const { getTransitionKey: m } = d.type;
      if (m) {
        const C = m();
        s === void 0 ? s = C : C !== s && (s = C, f = !0);
      }
      if (g && g.type !== tt && (!Mn(d, g) || f)) {
        const C = Fa(g, r, o, n);
        if (Ma(g, C), l === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, ca(i);
        l === "in-out" && d.type !== tt && (C.delayLeave = (x, A, L) => {
          const R = Zl(o, g);
          R[String(g.key)] = g, x._leaveCb = () => {
            A(), x._leaveCb = void 0, delete c.delayedLeave;
          }, c.delayedLeave = L;
        });
      }
      return i;
    };
  }
}, Jl = Rg;
function Zl(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Fa(e, t, n, o) {
  const { appear: s, mode: a, persisted: i = !1, onBeforeEnter: r, onEnter: l, onAfterEnter: d, onEnterCancelled: c, onBeforeLeave: u, onLeave: g, onAfterLeave: f, onLeaveCancelled: m, onBeforeAppear: C, onAppear: x, onAfterAppear: A, onAppearCancelled: L } = t, R = String(e.key), O = Zl(n, e), J = (W, be) => {
    W && At(W, o, 9, be);
  }, we = (W, be) => {
    const ue = be[1];
    J(W, be), ie(W) ? W.every((Be) => Be.length <= 1) && ue() : W.length <= 1 && ue();
  }, X = {
    mode: a,
    persisted: i,
    beforeEnter(W) {
      let be = r;
      if (!n.isMounted)
        if (s)
          be = C || r;
        else
          return;
      W._leaveCb && W._leaveCb(
        !0
        /* cancelled */
      );
      const ue = O[R];
      ue && Mn(e, ue) && ue.el._leaveCb && ue.el._leaveCb(), J(be, [W]);
    },
    enter(W) {
      let be = l, ue = d, Be = c;
      if (!n.isMounted)
        if (s)
          be = x || l, ue = A || d, Be = L || c;
        else
          return;
      let G = !1;
      const le = W._enterCb = (Me) => {
        G || (G = !0, Me ? J(Be, [W]) : J(ue, [W]), X.delayedLeave && X.delayedLeave(), W._enterCb = void 0);
      };
      be ? we(be, [W, le]) : le();
    },
    leave(W, be) {
      const ue = String(e.key);
      if (W._enterCb && W._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return be();
      J(u, [W]);
      let Be = !1;
      const G = W._leaveCb = (le) => {
        Be || (Be = !0, be(), le ? J(m, [W]) : J(f, [W]), W._leaveCb = void 0, O[ue] === e && delete O[ue]);
      };
      O[ue] = e, g ? we(g, [W, G]) : G();
    },
    clone(W) {
      return Fa(W, t, n, o);
    }
  };
  return X;
}
function ca(e) {
  if (Xo(e))
    return e = Rt(e), e.children = null, e;
}
function ir(e) {
  return Xo(e) ? e.children ? e.children[0] : void 0 : e;
}
function Ma(e, t) {
  e.shapeFlag & 6 && e.component ? Ma(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ql(e, t = !1, n) {
  let o = [], s = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === xe ? (i.patchFlag & 128 && s++, o = o.concat(Ql(i.children, t, r))) : (t || i.type !== tt) && o.push(r != null ? Rt(i, { key: r }) : i);
  }
  if (s > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
function ec(e) {
  return ce(e) ? { setup: e, name: e.name } : e;
}
const To = (e) => !!e.type.__asyncLoader, Xo = (e) => e.type.__isKeepAlive;
function Vg(e, t) {
  tc(e, "a", t);
}
function zg(e, t) {
  tc(e, "da", t);
}
function tc(e, t, n = Ge) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (qs(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Xo(s.parent.vnode) && jg(o, t, n, s), s = s.parent;
  }
}
function jg(e, t, n, o) {
  const s = qs(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  oc(() => {
    ni(o[t], s);
  }, n);
}
function qs(e, t, n = Ge, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Kn(), go(n);
      const r = At(t, n, e, i);
      return jn(), Wn(), r;
    });
    return o ? s.unshift(a) : s.push(a), a;
  } else if ({}.NODE_ENV !== "production") {
    const s = dn(ci[e].replace(/ hook$/, ""));
    I(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const en = (e) => (t, n = Ge) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Uo || e === "sp") && qs(e, (...o) => t(...o), n)
), Hg = en(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), lt = en(
  "m"
  /* LifecycleHooks.MOUNTED */
), qg = en(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Gg = en(
  "u"
  /* LifecycleHooks.UPDATED */
), nc = en(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), oc = en(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Kg = en(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Wg = en(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Xg = en(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Yg(e, t = Ge) {
  qs("ec", e, t);
}
function sc(e) {
  bd(e) && I("Do not use built-in directive ids as custom directive id: " + e);
}
function q(e, t) {
  const n = Je;
  if (n === null)
    return {}.NODE_ENV !== "production" && I("withDirectives can only be used inside render functions."), e;
  const o = Xs(n) || n.proxy, s = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, r, l, d = $e] = t[a];
    i && (ce(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Bn(r), s.push({
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
function Dn(e, t, n, o) {
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
    ]), Wn());
  }
}
const Ts = "components", Jg = "directives";
function _(e, t) {
  return pi(Ts, e, !0, t) || e;
}
const ac = Symbol();
function mo(e) {
  return ze(e) ? pi(Ts, e, !1) || e : e || ac;
}
function Ee(e) {
  return pi(Jg, e);
}
function pi(e, t, n = !0, o = !1) {
  const s = Je || Ge;
  if (s) {
    const a = s.type;
    if (e === Ts) {
      const r = bi(
        a,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (r && (r === t || r === Ut(t) || r === Hn(Ut(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      rr(s[e] || a[e], t) || // global registration
      rr(s.appContext[e], t)
    );
    if (!i && o)
      return a;
    if ({}.NODE_ENV !== "production" && n && !i) {
      const r = e === Ts ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      I(`Failed to resolve ${e.slice(0, -1)}: ${t}${r}`);
    }
    return i;
  } else
    ({}).NODE_ENV !== "production" && I(`resolve${Hn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function rr(e, t) {
  return e && (e[t] || e[Ut(t)] || e[Hn(Ut(t))]);
}
function et(e, t, n, o) {
  let s;
  const a = n && n[o];
  if (ie(e) || ze(e)) {
    s = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++)
      s[i] = t(e[i], i, void 0, a && a[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && I(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, a && a[i]);
  } else if (Le(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, r) => t(i, r, void 0, a && a[r]));
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
function Xe(e, t, n = {}, o, s) {
  if (Je.isCE || Je.parent && To(Je.parent) && Je.parent.isCE)
    return t !== "default" && (n.name = t), p("slot", n, o && o());
  let a = e[t];
  ({}).NODE_ENV !== "production" && a && a.length > 1 && (I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), a = () => []), a && a._c && (a._d = !1), v();
  const i = a && ic(a(n)), r = M(
    xe,
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
function ic(e) {
  return e.some((t) => uo(t) ? !(t.type === tt || t.type === xe && !ic(t.children)) : !0) ? e : null;
}
const Oa = (e) => e ? bc(e) ? Xs(e) || e.proxy : Oa(e.parent) : null, zn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ We(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? io(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? io(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? io(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? io(e.refs) : e.refs,
    $parent: (e) => Oa(e.parent),
    $root: (e) => Oa(e.root),
    $emit: (e) => e.emit,
    $options: (e) => mi(e),
    $forceUpdate: (e) => e.f || (e.f = () => js(e.update)),
    $nextTick: (e) => e.n || (e.n = Ko.bind(e.proxy)),
    $watch: (e) => $g.bind(e)
  })
), hi = (e) => e === "_" || e === "$", ua = (e, t) => e !== $e && !e.__isScriptSetup && Ce(e, t), rc = {
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
        if (ua(o, t))
          return i[t] = 1, o[t];
        if (s !== $e && Ce(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Ce(d, t)
        )
          return i[t] = 3, a[t];
        if (n !== $e && Ce(n, t))
          return i[t] = 4, n[t];
        Ba && (i[t] = 0);
      }
    }
    const c = zn[t];
    let u, g;
    if (c)
      return t === "$attrs" && (ft(e, "get", t), {}.NODE_ENV !== "production" && ks()), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== $e && Ce(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, Ce(g, t)
    )
      return g[t];
    ({}).NODE_ENV !== "production" && Je && (!ze(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== $e && hi(t[0]) && Ce(s, t) ? I(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Je && I(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: a } = e;
    return ua(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && Ce(s, t) ? (I(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== $e && Ce(o, t) ? (o[t] = n, !0) : Ce(e.props, t) ? ({}.NODE_ENV !== "production" && I(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && I(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(a, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : a[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: a } }, i) {
    let r;
    return !!n[i] || e !== $e && Ce(e, i) || ua(t, i) || (r = a[0]) && Ce(r, i) || Ce(o, i) || Ce(zn, i) || Ce(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (rc.ownKeys = (e) => (I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Zg(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(zn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => zn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: nt
    });
  }), t;
}
function Qg(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: nt
    });
  });
}
function ef(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(pe(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (hi(o[0])) {
        I(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: nt
      });
    }
  });
}
function tf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? I(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ba = !0;
function nf(e) {
  const t = mi(e), n = e.proxy, o = e.ctx;
  Ba = !1, t.beforeCreate && lr(
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
    inject: d,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: g,
    beforeUpdate: f,
    updated: m,
    activated: C,
    deactivated: x,
    beforeDestroy: A,
    beforeUnmount: L,
    destroyed: R,
    unmounted: O,
    render: J,
    renderTracked: we,
    renderTriggered: X,
    errorCaptured: W,
    serverPrefetch: be,
    // public API
    expose: ue,
    inheritAttrs: Be,
    // assets
    components: G,
    directives: le,
    filters: Me
  } = t, qe = {}.NODE_ENV !== "production" ? tf() : null;
  if ({}.NODE_ENV !== "production") {
    const [me] = e.propsOptions;
    if (me)
      for (const _e in me)
        qe("Props", _e);
  }
  if (d && of(d, o, qe, e.appContext.config.unwrapInjectedRef), i)
    for (const me in i) {
      const _e = i[me];
      ce(_e) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, me, {
        value: _e.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[me] = _e.bind(n), {}.NODE_ENV !== "production" && qe("Methods", me)) : {}.NODE_ENV !== "production" && I(`Method "${me}" has type "${typeof _e}" in the component definition. Did you reference the function correctly?`);
    }
  if (s) {
    ({}).NODE_ENV !== "production" && !ce(s) && I("The data option must be a function. Plain object usage is no longer supported.");
    const me = s.call(n, n);
    if ({}.NODE_ENV !== "production" && oi(me) && I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Le(me))
      ({}).NODE_ENV !== "production" && I("data() should return an object.");
    else if (e.data = Xn(me), {}.NODE_ENV !== "production")
      for (const _e in me)
        qe("Data", _e), hi(_e[0]) || Object.defineProperty(o, _e, {
          configurable: !0,
          enumerable: !0,
          get: () => me[_e],
          set: nt
        });
  }
  if (Ba = !0, a)
    for (const me in a) {
      const _e = a[me], st = ce(_e) ? _e.bind(n, n) : ce(_e.get) ? _e.get.bind(n, n) : nt;
      ({}).NODE_ENV !== "production" && st === nt && I(`Computed property "${me}" has no getter.`);
      const on = !ce(_e) && ce(_e.set) ? _e.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        I(`Write operation failed: computed property "${me}" is readonly.`);
      } : nt, pt = y({
        get: st,
        set: on
      });
      Object.defineProperty(o, me, {
        enumerable: !0,
        configurable: !0,
        get: () => pt.value,
        set: (ct) => pt.value = ct
      }), {}.NODE_ENV !== "production" && qe("Computed", me);
    }
  if (r)
    for (const me in r)
      lc(r[me], o, n, me);
  if (l) {
    const me = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(me).forEach((_e) => {
      vs(_e, me[_e]);
    });
  }
  c && lr(
    c,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function Ue(me, _e) {
    ie(_e) ? _e.forEach((st) => me(st.bind(n))) : _e && me(_e.bind(n));
  }
  if (Ue(Hg, u), Ue(lt, g), Ue(qg, f), Ue(Gg, m), Ue(Vg, C), Ue(zg, x), Ue(Yg, W), Ue(Xg, we), Ue(Wg, X), Ue(nc, L), Ue(oc, O), Ue(Kg, be), ie(ue))
    if (ue.length) {
      const me = e.exposed || (e.exposed = {});
      ue.forEach((_e) => {
        Object.defineProperty(me, _e, {
          get: () => n[_e],
          set: (st) => n[_e] = st
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === nt && (e.render = J), Be != null && (e.inheritAttrs = Be), G && (e.components = G), le && (e.directives = le);
}
function of(e, t, n = nt, o = !1) {
  ie(e) && (e = Ia(e));
  for (const s in e) {
    const a = e[s];
    let i;
    Le(a) ? "default" in a ? i = Ze(
      a.from || s,
      a.default,
      !0
      /* treat default function as factory */
    ) : i = Ze(a.from || s) : i = Ze(a), Ye(i) ? o ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : ({}.NODE_ENV !== "production" && I(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, {}.NODE_ENV !== "production" && n("Inject", s);
  }
}
function lr(e, t, n) {
  At(ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function lc(e, t, n, o) {
  const s = o.includes(".") ? Yl(n, o) : () => n[o];
  if (ze(e)) {
    const a = t[e];
    ce(a) ? Ke(s, a) : {}.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e}"`, a);
  } else if (ce(e))
    Ke(s, e.bind(n));
  else if (Le(e))
    if (ie(e))
      e.forEach((a) => lc(a, t, n, o));
    else {
      const a = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(a) ? Ke(s, a, e) : {}.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e.handler}"`, a);
    }
  else
    ({}).NODE_ENV !== "production" && I(`Invalid watch option: "${o}"`, e);
}
function mi(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: a, config: { optionMergeStrategies: i } } = e.appContext, r = a.get(t);
  let l;
  return r ? l = r : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach((d) => Ds(l, d, i, !0)), Ds(l, t, i)), Le(t) && a.set(t, l), l;
}
function Ds(e, t, n, o = !1) {
  const { mixins: s, extends: a } = t;
  a && Ds(e, a, n, !0), s && s.forEach((i) => Ds(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      ({}).NODE_ENV !== "production" && I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const r = sf[i] || n && n[i];
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const sf = {
  data: cr,
  props: Fn,
  emits: Fn,
  // objects
  methods: Fn,
  computed: Fn,
  // lifecycle
  beforeCreate: dt,
  created: dt,
  beforeMount: dt,
  mounted: dt,
  beforeUpdate: dt,
  updated: dt,
  beforeDestroy: dt,
  beforeUnmount: dt,
  destroyed: dt,
  unmounted: dt,
  activated: dt,
  deactivated: dt,
  errorCaptured: dt,
  serverPrefetch: dt,
  // assets
  components: Fn,
  directives: Fn,
  // watch
  watch: rf,
  // provide / inject
  provide: cr,
  inject: af
};
function cr(e, t) {
  return t ? e ? function() {
    return We(ce(e) ? e.call(this, this) : e, ce(t) ? t.call(this, this) : t);
  } : t : e;
}
function af(e, t) {
  return Fn(Ia(e), Ia(t));
}
function Ia(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function dt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fn(e, t) {
  return e ? We(We(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function rf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = We(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = dt(e[o], t[o]);
  return n;
}
function lf(e, t, n, o = !1) {
  const s = {}, a = {};
  xs(a, Gs, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), cc(e, t, s, a);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  ({}).NODE_ENV !== "production" && dc(t || {}, s, e), n ? e.props = o ? s : tg(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
}
function cf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function uf(e, t, n, o) {
  const { props: s, attrs: a, vnode: { patchFlag: i } } = e, r = pe(s), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !({}.NODE_ENV !== "production" && cf(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let g = c[u];
        if (Hs(e.emitsOptions, g))
          continue;
        const f = t[g];
        if (l)
          if (Ce(a, g))
            f !== a[g] && (a[g] = f, d = !0);
          else {
            const m = Ut(g);
            s[m] = $a(
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
    cc(e, t, s, a) && (d = !0);
    let c;
    for (const u in r)
      (!t || // for camelCase
      !Ce(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Yt(u)) === u || !Ce(t, c))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[u] = $a(
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
        (!t || !Ce(t, u)) && (delete a[u], d = !0);
  }
  d && Jt(e, "set", "$attrs"), {}.NODE_ENV !== "production" && dc(t || {}, s, e);
}
function cc(e, t, n, o) {
  const [s, a] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let l in t) {
      if (hs(l))
        continue;
      const d = t[l];
      let c;
      s && Ce(s, c = Ut(l)) ? !a || !a.includes(c) ? n[c] = d : (r || (r = {}))[c] = d : Hs(e.emitsOptions, l) || (!(l in o) || d !== o[l]) && (o[l] = d, i = !0);
    }
  if (a) {
    const l = pe(n), d = r || $e;
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      n[u] = $a(s, l, u, d[u], e, !Ce(d, u));
    }
  }
  return i;
}
function $a(e, t, n, o, s, a) {
  const i = e[n];
  if (i != null) {
    const r = Ce(i, "default");
    if (r && o === void 0) {
      const l = i.default;
      if (i.type !== Function && ce(l)) {
        const { propsDefaults: d } = s;
        n in d ? o = d[n] : (go(s), o = d[n] = l.call(null, t), jn());
      } else
        o = l;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (a && !r ? o = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Yt(n)) && (o = !0));
  }
  return o;
}
function uc(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const a = e.props, i = {}, r = [];
  let l = !1;
  if (!ce(e)) {
    const c = (u) => {
      l = !0;
      const [g, f] = uc(u, t, !0);
      We(i, g), f && r.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !l)
    return Le(e) && o.set(e, ro), ro;
  if (ie(a))
    for (let c = 0; c < a.length; c++) {
      ({}).NODE_ENV !== "production" && !ze(a[c]) && I("props must be strings when using array syntax.", a[c]);
      const u = Ut(a[c]);
      ur(u) && (i[u] = $e);
    }
  else if (a) {
    ({}).NODE_ENV !== "production" && !Le(a) && I("invalid props options", a);
    for (const c in a) {
      const u = Ut(c);
      if (ur(u)) {
        const g = a[c], f = i[u] = ie(g) || ce(g) ? { type: g } : Object.assign({}, g);
        if (f) {
          const m = gr(Boolean, f.type), C = gr(String, f.type);
          f[
            0
            /* BooleanFlags.shouldCast */
          ] = m > -1, f[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = C < 0 || m < C, (m > -1 || Ce(f, "default")) && r.push(u);
        }
      }
    }
  }
  const d = [i, r];
  return Le(e) && o.set(e, d), d;
}
function ur(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && I(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ua(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function dr(e, t) {
  return Ua(e) === Ua(t);
}
function gr(e, t) {
  return ie(t) ? t.findIndex((n) => dr(n, e)) : ce(t) && dr(t, e) ? 0 : -1;
}
function dc(e, t, n) {
  const o = pe(t), s = n.propsOptions[0];
  for (const a in s) {
    let i = s[a];
    i != null && df(a, o[a], i, !Ce(e, a) && !Ce(e, Yt(a)));
  }
}
function df(e, t, n, o) {
  const { type: s, required: a, validator: i } = n;
  if (a && o) {
    I('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (s != null && s !== !0) {
      let r = !1;
      const l = ie(s) ? s : [s], d = [];
      for (let c = 0; c < l.length && !r; c++) {
        const { valid: u, expectedType: g } = ff(t, l[c]);
        d.push(g || ""), r = u;
      }
      if (!r) {
        I(pf(e, t, d));
        return;
      }
    }
    i && !i(t) && I('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const gf = /* @__PURE__ */ Cn("String,Number,Boolean,Function,Symbol,BigInt");
function ff(e, t) {
  let n;
  const o = Ua(t);
  if (gf(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Le(e) : o === "Array" ? n = ie(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function pf(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Hn).join(" | ")}`;
  const s = n[0], a = si(t), i = fr(t, s), r = fr(t, a);
  return n.length === 1 && pr(s) && !hf(s, a) && (o += ` with value ${i}`), o += `, got ${a} `, pr(a) && (o += `with value ${r}.`), o;
}
function fr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function pr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function hf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const gc = (e) => e[0] === "_" || e === "$stable", _i = (e) => ie(e) ? e.map(Dt) : [Dt(e)], mf = (e, t, n) => {
  if (t._n)
    return t;
  const o = b((...s) => ({}.NODE_ENV !== "production" && Ge && I(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), _i(t(...s))), n);
  return o._c = !1, o;
}, fc = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (gc(s))
      continue;
    const a = e[s];
    if (ce(a))
      t[s] = mf(s, a, o);
    else if (a != null) {
      ({}).NODE_ENV !== "production" && I(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
      const i = _i(a);
      t[s] = () => i;
    }
  }
}, pc = (e, t) => {
  ({}).NODE_ENV !== "production" && !Xo(e.vnode) && I("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = _i(t);
  e.slots.default = () => n;
}, _f = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = pe(t), xs(t, "_", n)) : fc(t, e.slots = {});
  } else
    e.slots = {}, t && pc(e, t);
  xs(e.slots, Gs, 1);
}, vf = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let a = !0, i = $e;
  if (o.shapeFlag & 32) {
    const r = t._;
    r ? {}.NODE_ENV !== "production" && Vn ? We(s, t) : n && r === 1 ? a = !1 : (We(s, t), !n && r === 1 && delete s._) : (a = !t.$stable, fc(t, s)), i = t;
  } else
    t && (pc(e, t), i = { default: 1 });
  if (a)
    for (const r in s)
      !gc(r) && !(r in i) && delete s[r];
};
function hc() {
  return {
    app: null,
    config: {
      isNativeTag: gl,
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
let yf = 0;
function bf(e, t) {
  return function(o, s = null) {
    ce(o) || (o = Object.assign({}, o)), s != null && !Le(s) && ({}.NODE_ENV !== "production" && I("root props passed to app.mount() must be an object."), s = null);
    const a = hc(), i = /* @__PURE__ */ new Set();
    let r = !1;
    const l = a.app = {
      _uid: yf++,
      _component: o,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: vr,
      get config() {
        return a.config;
      },
      set config(d) {
        ({}).NODE_ENV !== "production" && I("app.config cannot be replaced. Modify individual options instead.");
      },
      use(d, ...c) {
        return i.has(d) ? {}.NODE_ENV !== "production" && I("Plugin has already been applied to target app.") : d && ce(d.install) ? (i.add(d), d.install(l, ...c)) : ce(d) ? (i.add(d), d(l, ...c)) : {}.NODE_ENV !== "production" && I('A plugin must either be a function or an object with an "install" function.'), l;
      },
      mixin(d) {
        return a.mixins.includes(d) ? {}.NODE_ENV !== "production" && I("Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")) : a.mixins.push(d), l;
      },
      component(d, c) {
        return {}.NODE_ENV !== "production" && Va(d, a.config), c ? ({}.NODE_ENV !== "production" && a.components[d] && I(`Component "${d}" has already been registered in target app.`), a.components[d] = c, l) : a.components[d];
      },
      directive(d, c) {
        return {}.NODE_ENV !== "production" && sc(d), c ? ({}.NODE_ENV !== "production" && a.directives[d] && I(`Directive "${d}" has already been registered in target app.`), a.directives[d] = c, l) : a.directives[d];
      },
      mount(d, c, u) {
        if (r)
          ({}).NODE_ENV !== "production" && I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && d.__vue_app__ && I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = p(o, s);
          return g.appContext = a, {}.NODE_ENV !== "production" && (a.reload = () => {
            e(Rt(g), d, u);
          }), c && t ? t(g, d) : e(g, d, u), r = !0, l._container = d, d.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = g.component, Sg(l, vr)), Xs(g.component) || g.component.proxy;
        }
      },
      unmount() {
        r ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, wg(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && I("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return {}.NODE_ENV !== "production" && d in a.provides && I(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`), a.provides[d] = c, l;
      }
    };
    return l;
  };
}
function Ra(e, t, n, o, s = !1) {
  if (ie(e)) {
    e.forEach((g, f) => Ra(g, t && (ie(t) ? t[f] : t), n, o, s));
    return;
  }
  if (To(o) && !s)
    return;
  const a = o.shapeFlag & 4 ? Xs(o.component) || o.component.proxy : o.el, i = s ? null : a, { i: r, r: l } = e;
  if ({}.NODE_ENV !== "production" && !r) {
    I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const d = t && t.r, c = r.refs === $e ? r.refs = {} : r.refs, u = r.setupState;
  if (d != null && d !== l && (ze(d) ? (c[d] = null, Ce(u, d) && (u[d] = null)) : Ye(d) && (d.value = null)), ce(l))
    Xt(l, r, 12, [i, c]);
  else {
    const g = ze(l), f = Ye(l);
    if (g || f) {
      const m = () => {
        if (e.f) {
          const C = g ? Ce(u, l) ? u[l] : c[l] : l.value;
          s ? ie(C) && ni(C, a) : ie(C) ? C.includes(a) || C.push(a) : g ? (c[l] = [a], Ce(u, l) && (u[l] = c[l])) : (l.value = [a], e.k && (c[e.k] = l.value));
        } else
          g ? (c[l] = i, Ce(u, l) && (u[l] = i)) : f ? (l.value = i, e.k && (c[e.k] = i)) : {}.NODE_ENV !== "production" && I("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (m.id = -1, mt(m, n)) : m();
    } else
      ({}).NODE_ENV !== "production" && I("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let bo, mn;
function Gt(e, t) {
  e.appContext.config.performance && Ls() && mn.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Ag(e, t, Ls() ? mn.now() : Date.now());
}
function Kt(e, t) {
  if (e.appContext.config.performance && Ls()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    mn.mark(o), mn.measure(`<${Ys(e, e.type)}> ${t}`, n, o), mn.clearMarks(n), mn.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && kg(e, t, Ls() ? mn.now() : Date.now());
}
function Ls() {
  return bo !== void 0 || (typeof window != "undefined" && window.performance ? (bo = !0, mn = window.performance) : bo = !1), bo;
}
function Sf() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const mt = Bg;
function wf(e) {
  return Cf(e);
}
function Cf(e, t) {
  Sf();
  const n = ml();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && Hl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: s, patchProp: a, createElement: i, createText: r, createComment: l, setText: d, setElementText: c, parentNode: u, nextSibling: g, setScopeId: f = nt, insertStaticContent: m } = e, C = (h, S, E, N = null, P = null, U = null, H = !1, B = null, z = {}.NODE_ENV !== "production" && Vn ? !1 : !!S.dynamicChildren) => {
    if (h === S)
      return;
    h && !Mn(h, S) && (N = Q(h), ut(h, P, U, !0), h = null), S.patchFlag === -2 && (z = !1, S.dynamicChildren = null);
    const { type: F, ref: te, shapeFlag: Z } = S;
    switch (F) {
      case Yo:
        x(h, S, E, N);
        break;
      case tt:
        A(h, S, E, N);
        break;
      case bs:
        h == null ? L(S, E, N, H) : {}.NODE_ENV !== "production" && R(h, S, E, H);
        break;
      case xe:
        le(h, S, E, N, P, U, H, B, z);
        break;
      default:
        Z & 1 ? we(h, S, E, N, P, U, H, B, z) : Z & 6 ? Me(h, S, E, N, P, U, H, B, z) : Z & 64 || Z & 128 ? F.process(h, S, E, N, P, U, H, B, z, Ie) : {}.NODE_ENV !== "production" && I("Invalid VNode type:", F, `(${typeof F})`);
    }
    te != null && P && Ra(te, h && h.ref, U, S || h, !S);
  }, x = (h, S, E, N) => {
    if (h == null)
      o(S.el = r(S.children), E, N);
    else {
      const P = S.el = h.el;
      S.children !== h.children && d(P, S.children);
    }
  }, A = (h, S, E, N) => {
    h == null ? o(S.el = l(S.children || ""), E, N) : S.el = h.el;
  }, L = (h, S, E, N) => {
    [h.el, h.anchor] = m(h.children, S, E, N, h.el, h.anchor);
  }, R = (h, S, E, N) => {
    if (S.children !== h.children) {
      const P = g(h.anchor);
      J(h), [S.el, S.anchor] = m(S.children, E, P, N);
    } else
      S.el = h.el, S.anchor = h.anchor;
  }, O = ({ el: h, anchor: S }, E, N) => {
    let P;
    for (; h && h !== S; )
      P = g(h), o(h, E, N), h = P;
    o(S, E, N);
  }, J = ({ el: h, anchor: S }) => {
    let E;
    for (; h && h !== S; )
      E = g(h), s(h), h = E;
    s(S);
  }, we = (h, S, E, N, P, U, H, B, z) => {
    H = H || S.type === "svg", h == null ? X(S, E, N, P, U, H, B, z) : ue(h, S, P, U, H, B, z);
  }, X = (h, S, E, N, P, U, H, B) => {
    let z, F;
    const { type: te, props: Z, shapeFlag: oe, transition: re, dirs: he } = h;
    if (z = h.el = i(h.type, U, Z && Z.is, Z), oe & 8 ? c(z, h.children) : oe & 16 && be(h.children, z, null, N, P, U && te !== "foreignObject", H, B), he && Dn(h, null, N, "created"), W(z, h, h.scopeId, H, N), Z) {
      for (const D in Z)
        D !== "value" && !hs(D) && a(z, D, null, Z[D], U, h.children, N, P, j);
      "value" in Z && a(z, "value", null, Z.value), (F = Z.onVnodeBeforeMount) && Ot(F, N, h);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(z, "__vnode", {
      value: h,
      enumerable: !1
    }), Object.defineProperty(z, "__vueParentComponent", {
      value: N,
      enumerable: !1
    })), he && Dn(h, null, N, "beforeMount");
    const Oe = (!P || P && !P.pendingBranch) && re && !re.persisted;
    Oe && re.beforeEnter(z), o(z, S, E), ((F = Z && Z.onVnodeMounted) || Oe || he) && mt(() => {
      F && Ot(F, N, h), Oe && re.enter(z), he && Dn(h, null, N, "mounted");
    }, P);
  }, W = (h, S, E, N, P) => {
    if (E && f(h, E), N)
      for (let U = 0; U < N.length; U++)
        f(h, N[U]);
    if (P) {
      let U = P.subTree;
      if ({}.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && (U = Xl(U.children) || U), S === U) {
        const H = P.vnode;
        W(h, H, H.scopeId, H.slotScopeIds, P.parent);
      }
    }
  }, be = (h, S, E, N, P, U, H, B, z = 0) => {
    for (let F = z; F < h.length; F++) {
      const te = h[F] = B ? fn(h[F]) : Dt(h[F]);
      C(null, te, S, E, N, P, U, H, B);
    }
  }, ue = (h, S, E, N, P, U, H) => {
    const B = S.el = h.el;
    let { patchFlag: z, dynamicChildren: F, dirs: te } = S;
    z |= h.patchFlag & 16;
    const Z = h.props || $e, oe = S.props || $e;
    let re;
    E && Ln(E, !1), (re = oe.onVnodeBeforeUpdate) && Ot(re, E, S, h), te && Dn(S, h, E, "beforeUpdate"), E && Ln(E, !0), {}.NODE_ENV !== "production" && Vn && (z = 0, H = !1, F = null);
    const he = P && S.type !== "foreignObject";
    if (F ? (Be(h.dynamicChildren, F, B, E, N, he, U), {}.NODE_ENV !== "production" && E && E.type.__hmrId && ys(h, S)) : H || st(h, S, B, null, E, N, he, U, !1), z > 0) {
      if (z & 16)
        G(B, S, Z, oe, E, N, P);
      else if (z & 2 && Z.class !== oe.class && a(B, "class", null, oe.class, P), z & 4 && a(B, "style", Z.style, oe.style, P), z & 8) {
        const Oe = S.dynamicProps;
        for (let D = 0; D < Oe.length; D++) {
          const ee = Oe[D], Re = Z[ee], at = oe[ee];
          (at !== Re || ee === "value") && a(B, ee, Re, at, P, h.children, E, N, j);
        }
      }
      z & 1 && h.children !== S.children && c(B, S.children);
    } else
      !H && F == null && G(B, S, Z, oe, E, N, P);
    ((re = oe.onVnodeUpdated) || te) && mt(() => {
      re && Ot(re, E, S, h), te && Dn(S, h, E, "updated");
    }, N);
  }, Be = (h, S, E, N, P, U, H) => {
    for (let B = 0; B < S.length; B++) {
      const z = h[B], F = S[B], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mn(z, F) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 70) ? u(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      C(z, F, te, null, N, P, U, H, !0);
    }
  }, G = (h, S, E, N, P, U, H) => {
    if (E !== N) {
      if (E !== $e)
        for (const B in E)
          !hs(B) && !(B in N) && a(h, B, E[B], null, H, S.children, P, U, j);
      for (const B in N) {
        if (hs(B))
          continue;
        const z = N[B], F = E[B];
        z !== F && B !== "value" && a(h, B, F, z, H, S.children, P, U, j);
      }
      "value" in N && a(h, "value", E.value, N.value);
    }
  }, le = (h, S, E, N, P, U, H, B, z) => {
    const F = S.el = h ? h.el : r(""), te = S.anchor = h ? h.anchor : r("");
    let { patchFlag: Z, dynamicChildren: oe, slotScopeIds: re } = S;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Vn || Z & 2048) && (Z = 0, z = !1, oe = null), re && (B = B ? B.concat(re) : re), h == null ? (o(F, E, N), o(te, E, N), be(S.children, E, te, P, U, H, B, z)) : Z > 0 && Z & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (Be(h.dynamicChildren, oe, E, P, U, H, B), {}.NODE_ENV !== "production" && P && P.type.__hmrId ? ys(h, S) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (S.key != null || P && S === P.subTree) && ys(
        h,
        S,
        !0
        /* shallow */
      )
    )) : st(h, S, E, te, P, U, H, B, z);
  }, Me = (h, S, E, N, P, U, H, B, z) => {
    S.slotScopeIds = B, h == null ? S.shapeFlag & 512 ? P.ctx.activate(S, E, N, H, z) : qe(S, E, N, P, U, H, z) : Ue(h, S, z);
  }, qe = (h, S, E, N, P, U, H) => {
    const B = h.component = Lf(h, N, P);
    if ({}.NODE_ENV !== "production" && B.type.__hmrId && _g(B), {}.NODE_ENV !== "production" && (ms(h), Gt(B, "mount")), Xo(h) && (B.ctx.renderer = Ie), {}.NODE_ENV !== "production" && Gt(B, "init"), Nf(B), {}.NODE_ENV !== "production" && Kt(B, "init"), B.asyncDep) {
      if (P && P.registerDep(B, me), !h.el) {
        const z = B.subTree = p(tt);
        A(null, z, S, E);
      }
      return;
    }
    me(B, h, S, E, P, U, H), {}.NODE_ENV !== "production" && (_s(), Kt(B, "mount"));
  }, Ue = (h, S, E) => {
    const N = S.component = h.component;
    if (Fg(h, S, E))
      if (N.asyncDep && !N.asyncResolved) {
        ({}).NODE_ENV !== "production" && ms(S), _e(N, S, E), {}.NODE_ENV !== "production" && _s();
        return;
      } else
        N.next = S, hg(N.update), N.update();
    else
      S.el = h.el, N.vnode = S;
  }, me = (h, S, E, N, P, U, H) => {
    const B = () => {
      if (h.isMounted) {
        let { next: te, bu: Z, u: oe, parent: re, vnode: he } = h, Oe = te, D;
        ({}).NODE_ENV !== "production" && ms(te || h.vnode), Ln(h, !1), te ? (te.el = he.el, _e(h, te, H)) : te = he, Z && no(Z), (D = te.props && te.props.onVnodeBeforeUpdate) && Ot(D, re, te, he), Ln(h, !0), {}.NODE_ENV !== "production" && Gt(h, "render");
        const ee = la(h);
        ({}).NODE_ENV !== "production" && Kt(h, "render");
        const Re = h.subTree;
        h.subTree = ee, {}.NODE_ENV !== "production" && Gt(h, "patch"), C(
          Re,
          ee,
          // parent may have changed if it's in a teleport
          u(Re.el),
          // anchor may have changed if it's in a fragment
          Q(Re),
          h,
          P,
          U
        ), {}.NODE_ENV !== "production" && Kt(h, "patch"), te.el = ee.el, Oe === null && Mg(h, ee.el), oe && mt(oe, P), (D = te.props && te.props.onVnodeUpdated) && mt(() => Ot(D, re, te, he), P), {}.NODE_ENV !== "production" && ql(h), {}.NODE_ENV !== "production" && _s();
      } else {
        let te;
        const { el: Z, props: oe } = S, { bm: re, m: he, parent: Oe } = h, D = To(S);
        if (Ln(h, !1), re && no(re), !D && (te = oe && oe.onVnodeBeforeMount) && Ot(te, Oe, S), Ln(h, !0), Z && de) {
          const ee = () => {
            ({}).NODE_ENV !== "production" && Gt(h, "render"), h.subTree = la(h), {}.NODE_ENV !== "production" && Kt(h, "render"), {}.NODE_ENV !== "production" && Gt(h, "hydrate"), de(Z, h.subTree, h, P, null), {}.NODE_ENV !== "production" && Kt(h, "hydrate");
          };
          D ? S.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && ee()
          ) : ee();
        } else {
          ({}).NODE_ENV !== "production" && Gt(h, "render");
          const ee = h.subTree = la(h);
          ({}).NODE_ENV !== "production" && Kt(h, "render"), {}.NODE_ENV !== "production" && Gt(h, "patch"), C(null, ee, E, N, h, P, U), {}.NODE_ENV !== "production" && Kt(h, "patch"), S.el = ee.el;
        }
        if (he && mt(he, P), !D && (te = oe && oe.onVnodeMounted)) {
          const ee = S;
          mt(() => Ot(te, Oe, ee), P);
        }
        (S.shapeFlag & 256 || Oe && To(Oe.vnode) && Oe.vnode.shapeFlag & 256) && h.a && mt(h.a, P), h.isMounted = !0, {}.NODE_ENV !== "production" && Cg(h), S = E = N = null;
      }
    }, z = h.effect = new ii(
      B,
      () => js(F),
      h.scope
      // track it in component's effect scope
    ), F = h.update = () => z.run();
    F.id = h.uid, Ln(h, !0), {}.NODE_ENV !== "production" && (z.onTrack = h.rtc ? (te) => no(h.rtc, te) : void 0, z.onTrigger = h.rtg ? (te) => no(h.rtg, te) : void 0, F.ownerInstance = h), F();
  }, _e = (h, S, E) => {
    S.component = h;
    const N = h.vnode.props;
    h.vnode = S, h.next = null, uf(h, S.props, N, E), vf(h, S.children, E), Kn(), nr(), Wn();
  }, st = (h, S, E, N, P, U, H, B, z = !1) => {
    const F = h && h.children, te = h ? h.shapeFlag : 0, Z = S.children, { patchFlag: oe, shapeFlag: re } = S;
    if (oe > 0) {
      if (oe & 128) {
        pt(F, Z, E, N, P, U, H, B, z);
        return;
      } else if (oe & 256) {
        on(F, Z, E, N, P, U, H, B, z);
        return;
      }
    }
    re & 8 ? (te & 16 && j(F, P, U), Z !== F && c(E, Z)) : te & 16 ? re & 16 ? pt(F, Z, E, N, P, U, H, B, z) : j(F, P, U, !0) : (te & 8 && c(E, ""), re & 16 && be(Z, E, N, P, U, H, B, z));
  }, on = (h, S, E, N, P, U, H, B, z) => {
    h = h || ro, S = S || ro;
    const F = h.length, te = S.length, Z = Math.min(F, te);
    let oe;
    for (oe = 0; oe < Z; oe++) {
      const re = S[oe] = z ? fn(S[oe]) : Dt(S[oe]);
      C(h[oe], re, E, null, P, U, H, B, z);
    }
    F > te ? j(h, P, U, !0, !1, Z) : be(S, E, N, P, U, H, B, z, Z);
  }, pt = (h, S, E, N, P, U, H, B, z) => {
    let F = 0;
    const te = S.length;
    let Z = h.length - 1, oe = te - 1;
    for (; F <= Z && F <= oe; ) {
      const re = h[F], he = S[F] = z ? fn(S[F]) : Dt(S[F]);
      if (Mn(re, he))
        C(re, he, E, null, P, U, H, B, z);
      else
        break;
      F++;
    }
    for (; F <= Z && F <= oe; ) {
      const re = h[Z], he = S[oe] = z ? fn(S[oe]) : Dt(S[oe]);
      if (Mn(re, he))
        C(re, he, E, null, P, U, H, B, z);
      else
        break;
      Z--, oe--;
    }
    if (F > Z) {
      if (F <= oe) {
        const re = oe + 1, he = re < te ? S[re].el : N;
        for (; F <= oe; )
          C(null, S[F] = z ? fn(S[F]) : Dt(S[F]), E, he, P, U, H, B, z), F++;
      }
    } else if (F > oe)
      for (; F <= Z; )
        ut(h[F], P, U, !0), F++;
    else {
      const re = F, he = F, Oe = /* @__PURE__ */ new Map();
      for (F = he; F <= oe; F++) {
        const Qe = S[F] = z ? fn(S[F]) : Dt(S[F]);
        Qe.key != null && ({}.NODE_ENV !== "production" && Oe.has(Qe.key) && I("Duplicate keys found during update:", JSON.stringify(Qe.key), "Make sure keys are unique."), Oe.set(Qe.key, F));
      }
      let D, ee = 0;
      const Re = oe - he + 1;
      let at = !1, St = 0;
      const Ht = new Array(Re);
      for (F = 0; F < Re; F++)
        Ht[F] = 0;
      for (F = re; F <= Z; F++) {
        const Qe = h[F];
        if (ee >= Re) {
          ut(Qe, P, U, !0);
          continue;
        }
        let ht;
        if (Qe.key != null)
          ht = Oe.get(Qe.key);
        else
          for (D = he; D <= oe; D++)
            if (Ht[D - he] === 0 && Mn(Qe, S[D])) {
              ht = D;
              break;
            }
        ht === void 0 ? ut(Qe, P, U, !0) : (Ht[ht - he] = F + 1, ht >= St ? St = ht : at = !0, C(Qe, S[ht], E, null, P, U, H, B, z), ee++);
      }
      const yo = at ? xf(Ht) : ro;
      for (D = yo.length - 1, F = Re - 1; F >= 0; F--) {
        const Qe = he + F, ht = S[Qe], ss = Qe + 1 < te ? S[Qe + 1].el : N;
        Ht[F] === 0 ? C(null, ht, E, ss, P, U, H, B, z) : at && (D < 0 || F !== yo[D] ? ct(
          ht,
          E,
          ss,
          2
          /* MoveType.REORDER */
        ) : D--);
      }
    }
  }, ct = (h, S, E, N, P = null) => {
    const { el: U, type: H, transition: B, children: z, shapeFlag: F } = h;
    if (F & 6) {
      ct(h.component.subTree, S, E, N);
      return;
    }
    if (F & 128) {
      h.suspense.move(S, E, N);
      return;
    }
    if (F & 64) {
      H.move(h, S, E, Ie);
      return;
    }
    if (H === xe) {
      o(U, S, E);
      for (let Z = 0; Z < z.length; Z++)
        ct(z[Z], S, E, N);
      o(h.anchor, S, E);
      return;
    }
    if (H === bs) {
      O(h, S, E);
      return;
    }
    if (N !== 2 && F & 1 && B)
      if (N === 0)
        B.beforeEnter(U), o(U, S, E), mt(() => B.enter(U), P);
      else {
        const { leave: Z, delayLeave: oe, afterLeave: re } = B, he = () => o(U, S, E), Oe = () => {
          Z(U, () => {
            he(), re && re();
          });
        };
        oe ? oe(U, he, Oe) : Oe();
      }
    else
      o(U, S, E);
  }, ut = (h, S, E, N = !1, P = !1) => {
    const { type: U, props: H, ref: B, children: z, dynamicChildren: F, shapeFlag: te, patchFlag: Z, dirs: oe } = h;
    if (B != null && Ra(B, null, E, h, !0), te & 256) {
      S.ctx.deactivate(h);
      return;
    }
    const re = te & 1 && oe, he = !To(h);
    let Oe;
    if (he && (Oe = H && H.onVnodeBeforeUnmount) && Ot(Oe, S, h), te & 6)
      Y(h.component, E, N);
    else {
      if (te & 128) {
        h.suspense.unmount(E, N);
        return;
      }
      re && Dn(h, null, S, "beforeUnmount"), te & 64 ? h.type.remove(h, S, E, P, Ie, N) : F && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== xe || Z > 0 && Z & 64) ? j(F, S, E, !1, !0) : (U === xe && Z & 384 || !P && te & 16) && j(z, S, E), N && jt(h);
    }
    (he && (Oe = H && H.onVnodeUnmounted) || re) && mt(() => {
      Oe && Ot(Oe, S, h), re && Dn(h, null, S, "unmounted");
    }, E);
  }, jt = (h) => {
    const { type: S, el: E, anchor: N, transition: P } = h;
    if (S === xe) {
      ({}).NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && P && !P.persisted ? h.children.forEach((H) => {
        H.type === tt ? s(H.el) : jt(H);
      }) : k(E, N);
      return;
    }
    if (S === bs) {
      J(h);
      return;
    }
    const U = () => {
      s(E), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (h.shapeFlag & 1 && P && !P.persisted) {
      const { leave: H, delayLeave: B } = P, z = () => H(E, U);
      B ? B(h.el, U, z) : z();
    } else
      U();
  }, k = (h, S) => {
    let E;
    for (; h !== S; )
      E = g(h), s(h), h = E;
    s(S);
  }, Y = (h, S, E) => {
    ({}).NODE_ENV !== "production" && h.type.__hmrId && vg(h);
    const { bum: N, scope: P, update: U, subTree: H, um: B } = h;
    N && no(N), P.stop(), U && (U.active = !1, ut(H, h, S, E)), B && mt(B, S), mt(() => {
      h.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), {}.NODE_ENV !== "production" && Eg(h);
  }, j = (h, S, E, N = !1, P = !1, U = 0) => {
    for (let H = U; H < h.length; H++)
      ut(h[H], S, E, N, P);
  }, Q = (h) => h.shapeFlag & 6 ? Q(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : g(h.anchor || h.el), ke = (h, S, E) => {
    h == null ? S._vnode && ut(S._vnode, null, null, !0) : C(S._vnode || null, h, S, null, null, null, E), nr(), Vl(), S._vnode = h;
  }, Ie = {
    p: C,
    um: ut,
    m: ct,
    r: jt,
    mt: qe,
    mc: be,
    pc: st,
    pbc: Be,
    n: Q,
    o: e
  };
  let ge, de;
  return t && ([ge, de] = t(Ie)), {
    render: ke,
    hydrate: ge,
    createApp: bf(ke, ge)
  };
}
function Ln({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ys(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (ie(o) && ie(s))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let r = s[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = fn(s[a]), r.el = i.el), n || ys(i, r)), r.type === Yo && (r.el = i.el), {}.NODE_ENV !== "production" && r.type === tt && !r.el && (r.el = i.el);
    }
}
function xf(e) {
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
const Ef = (e) => e.__isTeleport, xe = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), Yo = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), tt = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), bs = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Do = [];
let Lt = null;
function v(e = !1) {
  Do.push(Lt = e ? null : []);
}
function Af() {
  Do.pop(), Lt = Do[Do.length - 1] || null;
}
let $o = 1;
function hr(e) {
  $o += e;
}
function mc(e) {
  return e.dynamicChildren = $o > 0 ? Lt || ro : null, Af(), $o > 0 && Lt && Lt.push(e), e;
}
function T(e, t, n, o, s, a) {
  return mc(w(
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
function M(e, t, n, o, s) {
  return mc(p(
    e,
    t,
    n,
    o,
    s,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function uo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mn(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && oo.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const kf = (...e) => vc(...e), Gs = "__vInternal", _c = ({ key: e }) => e != null ? e : null, Ss = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ze(e) || Ye(e) || ce(e) ? { i: Je, r: e, k: t, f: !!n } : e : null;
function w(e, t = null, n = null, o = 0, s = null, a = e === xe ? 0 : 1, i = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _c(t),
    ref: t && Ss(t),
    scopeId: Wl,
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
  return r ? (vi(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= ze(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && I("VNode created with invalid key (NaN). VNode type:", l.type), $o > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Lt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Lt.push(l), l;
}
const p = {}.NODE_ENV !== "production" ? kf : vc;
function vc(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === ac) && ({}.NODE_ENV !== "production" && !e && I(`Invalid vnode type when creating vnode: ${e}.`), e = tt), uo(e)) {
    const r = Rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vi(r, n), $o > 0 && !a && Lt && (r.shapeFlag & 6 ? Lt[Lt.indexOf(e)] = r : Lt.push(r)), r.patchFlag |= -2, r;
  }
  if (Cc(e) && (e = e.__vccOpts), t) {
    t = Ks(t);
    let { class: r, style: l } = t;
    r && !ze(r) && (t.class = fe(r)), Le(l) && (Da(l) && !ie(l) && (l = We({}, l)), t.style = ot(l));
  }
  const i = ze(e) ? 1 : Og(e) ? 128 : Ef(e) ? 64 : Le(e) ? 4 : ce(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && Da(e) && (e = pe(e), I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), w(e, t, n, o, s, i, a, !0);
}
function Ks(e) {
  return e ? Da(e) || Gs in e ? We({}, e) : e : null;
}
function Rt(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: i } = e, r = t ? Ws(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: r,
    key: r && _c(r),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? ie(s) ? s.concat(Ss(t)) : [s, Ss(t)] : Ss(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && a === -1 && ie(i) ? i.map(yc) : i,
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
    ssContent: e.ssContent && Rt(e.ssContent),
    ssFallback: e.ssFallback && Rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function yc(e) {
  const t = Rt(e);
  return ie(e.children) && (t.children = e.children.map(yc)), t;
}
function Ps(e = " ", t = 0) {
  return p(Yo, null, e, t);
}
function ae(e = "", t = !1) {
  return t ? (v(), M(tt, null, e)) : p(tt, null, e);
}
function Dt(e) {
  return e == null || typeof e == "boolean" ? p(tt) : ie(e) ? p(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? fn(e) : p(Yo, null, String(e));
}
function fn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
}
function vi(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), vi(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Gs in t) ? t._ctx = Je : s === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    ce(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ps(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ws(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = fe([t.class, o.class]));
      else if (s === "style")
        t.style = ot([t.style, o.style]);
      else if (qo(s)) {
        const a = t[s], i = o[s];
        i && a !== i && !(ie(a) && a.includes(i)) && (t[s] = a ? [].concat(a, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ot(e, t, n, o = null) {
  At(e, t, 7, [
    n,
    o
  ]);
}
const Tf = hc();
let Df = 0;
function Lf(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Tf, a = {
    uid: Df++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new _l(
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
    propsOptions: uc(o, s),
    emitsOptions: Kl(o, s),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: $e,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: $e,
    data: $e,
    props: $e,
    attrs: $e,
    slots: $e,
    refs: $e,
    setupState: $e,
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
  return {}.NODE_ENV !== "production" ? a.ctx = Zg(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Dg.bind(null, a), e.ce && e.ce(a), a;
}
let Ge = null;
const yi = () => Ge || Je, go = (e) => {
  Ge = e, e.scope.on();
}, jn = () => {
  Ge && Ge.scope.off(), Ge = null;
}, Pf = /* @__PURE__ */ Cn("slot,component");
function Va(e, t) {
  const n = t.isNativeTag || gl;
  (Pf(e) || n(e)) && I("Do not use built-in or reserved HTML elements as component id: " + e);
}
function bc(e) {
  return e.vnode.shapeFlag & 4;
}
let Uo = !1;
function Nf(e, t = !1) {
  Uo = t;
  const { props: n, children: o } = e.vnode, s = bc(e);
  lf(e, n, s, t), _f(e, o);
  const a = s ? Ff(e, t) : void 0;
  return Uo = !1, a;
}
function Ff(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && Va(o.name, e.appContext.config), o.components) {
      const a = Object.keys(o.components);
      for (let i = 0; i < a.length; i++)
        Va(a[i], e.appContext.config);
    }
    if (o.directives) {
      const a = Object.keys(o.directives);
      for (let i = 0; i < a.length; i++)
        sc(a[i]);
    }
    o.compilerOptions && Sc() && I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Pl(new Proxy(e.ctx, rc)), {}.NODE_ENV !== "production" && Qg(e);
  const { setup: s } = o;
  if (s) {
    const a = e.setupContext = s.length > 1 ? Mf(e) : null;
    go(e), Kn();
    const i = Xt(s, e, 0, [{}.NODE_ENV !== "production" ? io(e.props) : e.props, a]);
    if (Wn(), jn(), oi(i)) {
      if (i.then(jn, jn), t)
        return i.then((r) => {
          mr(e, r, t);
        }).catch((r) => {
          zs(
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
      mr(e, i, t);
  } else
    wc(e, t);
}
function mr(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Le(t) ? ({}.NODE_ENV !== "production" && uo(t) && I("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ol(t), {}.NODE_ENV !== "production" && ef(e)) : {}.NODE_ENV !== "production" && t !== void 0 && I(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), wc(e, n);
}
let za;
const Sc = () => !za;
function wc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && za && !o.render) {
      const s = o.template || mi(e).template;
      if (s) {
        ({}).NODE_ENV !== "production" && Gt(e, "compile");
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: r, compilerOptions: l } = o, d = We(We({
          isCustomElement: a,
          delimiters: r
        }, i), l);
        o.render = za(s, d), {}.NODE_ENV !== "production" && Kt(e, "compile");
      }
    }
    e.render = o.render || nt;
  }
  go(e), Kn(), nf(e), Wn(), jn(), {}.NODE_ENV !== "production" && !o.render && e.render === nt && !t && (o.template ? I(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : I("Component is missing template or render function."));
}
function _r(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(t, n) {
      return ks(), ft(e, "get", "$attrs"), t[n];
    },
    set() {
      return I("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return I("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ft(e, "get", "$attrs"), t[n];
    }
  });
}
function Mf(e) {
  const t = (o) => {
    if ({}.NODE_ENV !== "production" && (e.exposed && I("expose() should be called only once per setup()."), o != null)) {
      let s = typeof o;
      s === "object" && (ie(o) ? s = "array" : Ye(o) && (s = "ref")), s !== "object" && I(`expose() should be passed a plain object, received ${s}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = _r(e));
    },
    get slots() {
      return io(e.slots);
    },
    get emit() {
      return (o, ...s) => e.emit(o, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = _r(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Xs(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ol(Pl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in zn)
          return zn[n](e);
      },
      has(t, n) {
        return n in t || n in zn;
      }
    }));
}
const Of = /(?:^|[-_])(\w)/g, Bf = (e) => e.replace(Of, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function bi(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ys(e, t, n = !1) {
  let o = bi(t);
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
  return o ? Bf(o) : n ? "App" : "Anonymous";
}
function Cc(e) {
  return ce(e) && "__vccOpts" in e;
}
const y = (e, t) => ig(e, t, Uo);
function Ro(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Le(t) && !ie(t) ? uo(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && uo(n) && (n = [n]), p(e, t, n));
}
const If = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), $f = () => {
  {
    const e = Ze(If);
    return e || {}.NODE_ENV !== "production" && I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function da(e) {
  return !!(e && e.__v_isShallow);
}
function Uf() {
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
      ] : Un(u) ? [
        "div",
        {},
        ["span", e, da(u) ? "ShallowReactive" : "Reactive"],
        "<",
        r(u),
        `>${Sn(u) ? " (readonly)" : ""}`
      ] : Sn(u) ? [
        "div",
        {},
        ["span", e, da(u) ? "ShallowReadonly" : "Readonly"],
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
    u.type.props && u.props && g.push(i("props", pe(u.props))), u.setupState !== $e && g.push(i("setup", u.setupState)), u.data !== $e && g.push(i("data", pe(u.data)));
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
    return g = We({}, g), Object.keys(g).length ? [
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : Le(u) ? ["object", { object: g ? pe(u) : u }] : ["span", n, String(u)];
  }
  function l(u, g) {
    const f = u.type;
    if (ce(f))
      return;
    const m = {};
    for (const C in u.ctx)
      d(f, C, g) && (m[C] = u.ctx[C]);
    return m;
  }
  function d(u, g, f) {
    const m = u[f];
    if (ie(m) && m.includes(g) || Le(m) && g in m || u.extends && d(u.extends, g, f) || u.mixins && u.mixins.some((C) => d(C, g, f)))
      return !0;
  }
  function c(u) {
    return da(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const vr = "3.2.47", Rf = "http://www.w3.org/2000/svg", On = typeof document != "undefined" ? document : null, yr = On && /* @__PURE__ */ On.createElement("template"), Vf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? On.createElementNS(Rf, e) : On.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => On.createTextNode(e),
  createComment: (e) => On.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => On.querySelector(e),
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
      yr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const r = yr.content;
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
function zf(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function jf(e, t, n) {
  const o = e.style, s = ze(n);
  if (n && !s) {
    if (t && !ze(t))
      for (const a in t)
        n[a] == null && ja(o, a, "");
    for (const a in n)
      ja(o, a, n[a]);
  } else {
    const a = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = a);
  }
}
const Hf = /[^\\];\s*$/, br = /\s*!important$/;
function ja(e, t, n) {
  if (ie(n))
    n.forEach((o) => ja(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && Hf.test(n) && I(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = qf(e, t);
    br.test(n) ? e.setProperty(Yt(o), n.replace(br, ""), "important") : e[o] = n;
  }
}
const Sr = ["Webkit", "Moz", "ms"], ga = {};
function qf(e, t) {
  const n = ga[t];
  if (n)
    return n;
  let o = Ut(t);
  if (o !== "filter" && o in e)
    return ga[t] = o;
  o = Hn(o);
  for (let s = 0; s < Sr.length; s++) {
    const a = Sr[s] + o;
    if (a in e)
      return ga[t] = a;
  }
  return t;
}
const wr = "http://www.w3.org/1999/xlink";
function Gf(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(wr, t.slice(6, t.length)) : e.setAttributeNS(wr, t, n);
  else {
    const a = md(t);
    n == null || a && !ul(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function Kf(e, t, n, o, s, a, i) {
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
    l === "boolean" ? n = ul(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ({}).NODE_ENV !== "production" && !r && I(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
  }
  r && e.removeAttribute(t);
}
function xc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Wf(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Xf(e, t, n, o, s = null) {
  const a = e._vei || (e._vei = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [r, l] = Yf(t);
    if (o) {
      const d = a[t] = Qf(o, s);
      xc(e, r, d, l);
    } else
      i && (Wf(e, r, i, l), a[t] = void 0);
  }
}
const Cr = /(?:Once|Passive|Capture)$/;
function Yf(e) {
  let t;
  if (Cr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Cr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Yt(e.slice(2)), t];
}
let fa = 0;
const Jf = /* @__PURE__ */ Promise.resolve(), Zf = () => fa || (Jf.then(() => fa = 0), fa = Date.now());
function Qf(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    At(ep(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Zf(), n;
}
function ep(e, t) {
  if (ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const xr = /^on[a-z]/, tp = (e, t, n, o, s = !1, a, i, r, l) => {
  t === "class" ? zf(e, o, s) : t === "style" ? jf(e, n, o) : qo(t) ? Cs(t) || Xf(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : np(e, t, o, s)) ? Kf(e, t, o, a, i, r, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Gf(e, t, o, s));
};
function np(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && xr.test(t) && ce(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || xr.test(t) && ze(n) ? !1 : t in e;
}
const an = "transition", So = "animation", _n = (e, { slots: t }) => Ro(Jl, op(e), t);
_n.displayName = "Transition";
const Ec = {
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
_n.props = /* @__PURE__ */ We({}, Jl.props, Ec);
const Pn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Er = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function op(e) {
  const t = {};
  for (const G in e)
    G in Ec || (t[G] = e[G]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: o, duration: s, enterFromClass: a = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: d = i, appearToClass: c = r, leaveFromClass: u = `${n}-leave-from`, leaveActiveClass: g = `${n}-leave-active`, leaveToClass: f = `${n}-leave-to` } = e, m = sp(s), C = m && m[0], x = m && m[1], { onBeforeEnter: A, onEnter: L, onEnterCancelled: R, onLeave: O, onLeaveCancelled: J, onBeforeAppear: we = A, onAppear: X = L, onAppearCancelled: W = R } = t, be = (G, le, Me) => {
    Nn(G, le ? c : r), Nn(G, le ? d : i), Me && Me();
  }, ue = (G, le) => {
    G._isLeaving = !1, Nn(G, u), Nn(G, f), Nn(G, g), le && le();
  }, Be = (G) => (le, Me) => {
    const qe = G ? X : L, Ue = () => be(le, G, Me);
    Pn(qe, [le, Ue]), Ar(() => {
      Nn(le, G ? l : a), rn(le, G ? c : r), Er(qe) || kr(le, o, C, Ue);
    });
  };
  return We(t, {
    onBeforeEnter(G) {
      Pn(A, [G]), rn(G, a), rn(G, i);
    },
    onBeforeAppear(G) {
      Pn(we, [G]), rn(G, l), rn(G, d);
    },
    onEnter: Be(!1),
    onAppear: Be(!0),
    onLeave(G, le) {
      G._isLeaving = !0;
      const Me = () => ue(G, le);
      rn(G, u), rp(), rn(G, g), Ar(() => {
        G._isLeaving && (Nn(G, u), rn(G, f), Er(O) || kr(G, o, x, Me));
      }), Pn(O, [G, Me]);
    },
    onEnterCancelled(G) {
      be(G, !1), Pn(R, [G]);
    },
    onAppearCancelled(G) {
      be(G, !0), Pn(W, [G]);
    },
    onLeaveCancelled(G) {
      ue(G), Pn(J, [G]);
    }
  });
}
function sp(e) {
  if (e == null)
    return null;
  if (Le(e))
    return [pa(e.enter), pa(e.leave)];
  {
    const t = pa(e);
    return [t, t];
  }
}
function pa(e) {
  const t = xd(e);
  return {}.NODE_ENV !== "production" && dg(t, "<transition> explicit duration"), t;
}
function rn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Ar(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ap = 0;
function kr(e, t, n, o) {
  const s = e._endId = ++ap, a = () => {
    s === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: r, propCount: l } = ip(e, t);
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
function ip(e, t) {
  const n = window.getComputedStyle(e), o = (m) => (n[m] || "").split(", "), s = o(`${an}Delay`), a = o(`${an}Duration`), i = Tr(s, a), r = o(`${So}Delay`), l = o(`${So}Duration`), d = Tr(r, l);
  let c = null, u = 0, g = 0;
  t === an ? i > 0 && (c = an, u = i, g = a.length) : t === So ? d > 0 && (c = So, u = d, g = l.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? an : So : null, g = c ? c === an ? a.length : l.length : 0);
  const f = c === an && /\b(transform|all)(,|$)/.test(o(`${an}Property`).toString());
  return {
    type: c,
    timeout: u,
    propCount: g,
    hasTransform: f
  };
}
function Tr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Dr(n) + Dr(e[o])));
}
function Dr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function rp() {
  return document.body.offsetHeight;
}
const Lr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ie(t) ? (n) => no(t, n) : t;
}, lp = {
  created(e, { value: t }, n) {
    e.checked = ws(t, n.props.value), e._assign = Lr(n), xc(e, "change", () => {
      e._assign(cp(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e._assign = Lr(o), t !== n && (e.checked = ws(t, o.props.value));
  }
};
function cp(e) {
  return "_value" in e ? e._value : e.value;
}
const up = ["ctrl", "shift", "alt", "meta"], dp = {
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
  exact: (e, t) => up.some((n) => e[`${n}Key`] && !t.includes(n))
}, vt = (e, t) => (n, ...o) => {
  for (let s = 0; s < t.length; s++) {
    const a = dp[t[s]];
    if (a && a(n, t))
      return;
  }
  return e(n, ...o);
}, gp = {
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
  const o = Yt(n.key);
  if (t.some((s) => s === o || gp[s] === o))
    return e(n);
}, Si = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : wo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), wo(e, !0), o.enter(e)) : o.leave(e, () => {
      wo(e, !1);
    }) : wo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    wo(e, t);
  }
};
function wo(e, t) {
  e.style.display = t ? e._vod : "none";
}
const fp = /* @__PURE__ */ We({ patchProp: tp }, Vf);
let Pr;
function pp() {
  return Pr || (Pr = wf(fp));
}
const Ac = (...e) => {
  const t = pp().createApp(...e);
  ({}).NODE_ENV !== "production" && (hp(t), mp(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = _p(o);
    if (!s)
      return;
    const a = t._component;
    !ce(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function hp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => fd(t) || pd(t),
    writable: !1
  });
}
function mp(e) {
  if (Sc()) {
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
function _p(e) {
  if (ze(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && I(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function vp() {
  Uf();
}
({}).NODE_ENV !== "production" && vp();
const V = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, yp = {
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
}, bp = ["width", "height", "aria-labelledby"], Sp = ["id"], wp = ["fill"], Cp = ["d"];
function xp(e, t, n, o, s, a) {
  return v(), T("span", {
    class: fe(["mw-ui-icon notranslate", a.classes])
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
      }, se(n.iconName), 9, Sp)) : ae("", !0),
      w("g", { fill: n.iconColor }, [
        w("path", { d: a.iconImagePath }, null, 8, Cp)
      ], 8, wp)
    ], 8, bp))
  ], 2);
}
const He = /* @__PURE__ */ V(yp, [["render", xp]]);
const Ep = {
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
    outlined: Boolean,
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
      "mw-ui-button--depressed": e.depressed || e.outlined,
      "mw-ui-button--disabled": e.disabled,
      "mw-ui-button--large": e.large,
      "mw-ui-button--progressive": e.progressive,
      "mw-ui-button--destructive": e.destructive,
      "mw-ui-button--icon": e.isIcon,
      "mw-ui-button--outlined": e.outlined,
      "mw-ui-button--text": e.type === "text"
    }),
    hasIndicatorClickListener: (e) => !!e.$attrs["indicator-icon-clicked"],
    isIcon: (e) => e.type === "icon",
    iconClass: (e) => !e.isIcon && "pe-2",
    indicatorClass: (e) => !e.isIcon && "ps-2",
    indicatorClickEvent: (e) => e.hasIndicatorClickListener ? "click" : null
  }
}, Ap = { class: "mw-ui-button__content" }, kp = ["textContent"];
function Tp(e, t, n, o, s, a) {
  const i = _("mw-icon");
  return v(), M(mo(a.component), {
    class: fe(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: b(() => [
      Xe(e.$slots, "default", {}, () => [
        w("span", Ap, [
          n.icon ? (v(), M(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: fe(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : ae("", !0),
          !a.isIcon && n.label ? (v(), T("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: se(n.label)
          }, null, 8, kp)) : ae("", !0),
          n.indicator ? (v(), M(i, Ws({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [dn(a.indicatorClickEvent)]: t[0] || (t[0] = vt((r) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : ae("", !0)
        ])
      ])
    ], void 0),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Te = /* @__PURE__ */ V(Ep, [["render", Tp]]);
const Dp = {
  name: "MwButtonGroup",
  components: {
    MwButton: Te
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
}, Lp = { class: "row mw-ui-button-group ma-0 pa-0" };
function Pp(e, t, n, o, s, a) {
  const i = _("mw-button");
  return v(), T("div", Lp, [
    (v(!0), T(xe, null, et(n.items, (r) => (v(), M(i, Ws({
      key: r.value,
      value: r.value,
      "aria-selected": a.isActive(r) || null
    }, r.props, {
      class: ["ma-0", a.buttonClasses(r)],
      style: a.activeIndicatorStyle(r),
      onClick: vt((l) => e.$emit("select", r.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Jo = /* @__PURE__ */ V(Dp, [["render", Pp]]);
const Np = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: Jo },
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
}, Fp = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, Mp = { class: "col-12 ma-0 pa-0" };
function Op(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return v(), T("footer", Fp, [
    w("div", Mp, [
      Xe(e.$slots, "default", {}, () => [
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
const Bp = /* @__PURE__ */ V(Np, [["render", Op]]);
const Ip = {
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
}, $p = { class: "mw-ui-card" }, Up = ["textContent"], Rp = { class: "mw-ui-card__content" };
function Vp(e, t, n, o, s, a) {
  return v(), T("div", $p, [
    Xe(e.$slots, "header", {}, () => [
      n.title ? (v(), T("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: se(n.title)
      }, null, 8, Up)) : ae("", !0)
    ]),
    w("div", Rp, [
      Xe(e.$slots, "default")
    ])
  ]);
}
const zt = /* @__PURE__ */ V(Ip, [["render", Vp]]);
const zp = {}, jp = { class: "mw-ui-divider row" };
function Hp(e, t) {
  return v(), T("div", jp);
}
const Zo = /* @__PURE__ */ V(zp, [["render", Hp]]);
const qp = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
function Gp(e, t, n, o, s, a) {
  return v(), M(mo(n.tag), { class: "mw-grid container" }, {
    default: b(() => [
      Xe(e.$slots, "default")
    ], void 0),
    _: 3
  });
}
const kc = /* @__PURE__ */ V(qp, [["render", Gp]]), Kp = {
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
function Wp(e, t, n, o, s, a) {
  return v(), M(mo(n.tag), {
    class: fe(a.classes)
  }, {
    default: b(() => [
      Xe(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const Ae = /* @__PURE__ */ V(Kp, [["render", Wp]]), Ha = ["mobile", "tablet", "desktop", "desktop-wide"], Xp = Ha.reduce(
  (e, t) => Mt(wt({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Yp = {
  name: "MwCol",
  props: Mt(wt({}, Xp), {
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
      for (let n = 0; n < Ha.length; n++) {
        let o = Ha[n], s = this.$props[o];
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
function Jp(e, t, n, o, s, a) {
  return v(), M(mo(n.tag), {
    class: fe(a.classes)
  }, {
    default: b(() => [
      Xe(e.$slots, "default")
    ], void 0),
    _: 3
  }, 8, ["class"]);
}
const Ne = /* @__PURE__ */ V(Yp, [["render", Jp]]), Tc = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Zp = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", Qp = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Dc = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Zt = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", eh = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Nr = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", th = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Lc = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Pc = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", xn = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Nc = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z", Nt = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Js = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", wi = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Ci = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Fc = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Mc = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Oc = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", Bc = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Qo = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Ic = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", $c = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", qa = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Zs = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", nh = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", oh = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, vn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, sh = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, fo = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, ah = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, ih = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z", Fr = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z", xi = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", rh = "M 1 3 L 1 15 A 2 2 0 0 0 3 17 L 15 17 L 15 12.234375 A 3 3 0 0 0 17 13 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 A 3 3 0 0 0 15 7.7636719 L 15 3 L 10.580078 3 A 3 3 0 0 1 11 4.5 A 3 3 0 0 1 5 4.5 A 3 3 0 0 1 5.4199219 3 L 1 3 z", lh = "M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z", ch = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", uh = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", dh = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const gh = {
  name: "MwDialog",
  components: {
    MwButton: Te,
    MwRow: Ae,
    MwCol: Ne,
    MwDivider: Zo
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
    }
  },
  emits: ["input", "close"],
  setup(e, t) {
    const n = ne(null), o = y(() => ({
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
    return Ke(
      () => e.value,
      (r) => {
        r ? (i(), Ko(() => {
          n.value.focus();
        })) : a();
      }
    ), {
      close: a,
      classes: o,
      overlayStyles: s,
      mwIconClose: Nt,
      root: n
    };
  }
}, fh = { class: "mw-ui-dialog__shell items-stretch" }, ph = { class: "mw-ui-dialog__body" };
function hh(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-divider");
  return v(), M(_n, {
    name: `mw-ui-animation-${n.animation}`
  }, {
    default: b(() => [
      n.value ? (v(), T("div", {
        key: 0,
        ref: "root",
        class: fe(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = so((c) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        w("div", {
          class: "mw-ui-dialog__overlay",
          style: ot(o.overlayStyles),
          onClick: t[0] || (t[0] = (...c) => o.close && o.close(...c))
        }, null, 4),
        w("div", fh, [
          n.header ? Xe(e.$slots, "header", { key: 0 }, () => [
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
          w("div", ph, [
            Xe(e.$slots, "default")
          ]),
          Xe(e.$slots, "footer")
        ])
      ], 34)) : ae("", !0)
    ], void 0),
    _: 3
  }, 8, ["name"]);
}
const En = /* @__PURE__ */ V(gh, [["render", hh]]);
const mh = {
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
      const t = wt({}, e.$attrs);
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
}, _h = { class: "mw-ui-input__content" };
function vh(e, t, n, o, s, a) {
  const i = _("mw-icon");
  return v(), T("div", {
    class: fe(a.classes),
    onClick: t[2] || (t[2] = (r) => a.focus())
  }, [
    w("div", _h, [
      Xe(e.$slots, "icon", {}, () => [
        n.icon ? (v(), M(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : ae("", !0)
      ]),
      (v(), M(mo(n.type === "textarea" ? n.type : "input"), Ws({
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
      Xe(e.$slots, "indicator", {}, () => [
        n.indicator ? (v(), M(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = vt((r) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : ae("", !0)
      ])
    ])
  ], 2);
}
const Ei = /* @__PURE__ */ V(mh, [["render", vh]]);
const yh = {
  name: "MwMessage",
  components: { MwCol: Ne, MwRow: Ae, MwIcon: He, MwButton: Te },
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
    mwIconClose: Nt,
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
      notice: oh,
      warning: fo,
      success: vn,
      error: sh
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
function bh(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row");
  return e.shown ? (v(), M(d, {
    key: 0,
    class: fe([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: b(() => [
      Xe(e.$slots, "icon", {}, () => [
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
          Xe(e.$slots, "default")
        ], void 0, !0),
        _: 3
      }, 8, ["id"]),
      Xe(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (v(), M(l, {
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
const Sh = /* @__PURE__ */ V(yh, [["render", bh]]);
const wh = {}, Ch = { class: "mw-ui-spinner" }, xh = /* @__PURE__ */ w("div", { class: "mw-ui-spinner__bounce" }, null, -1), Eh = [
  xh
];
function Ah(e, t) {
  return v(), T("div", Ch, Eh);
}
const Yn = /* @__PURE__ */ V(wh, [["render", Ah]]), xt = {
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
const kh = {
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
      default: xi
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: xt.base20
    },
    placeholderBackgroundColor: {
      type: String,
      default: xt.base80
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
function Th(e, t, n, o, s, a) {
  const i = _("mw-ui-icon");
  return n.thumbnail ? (v(), T("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: ot(o.style)
  }, null, 4)) : (v(), M(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: ot(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Ai = /* @__PURE__ */ V(kh, [["render", Th]]);
const Dh = {
  name: "MwRadio",
  components: { MwRow: Ae },
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
}, Lh = { class: "mw-ui-radio__controls" }, Ph = ["id", "disabled", "name", "value"], Nh = /* @__PURE__ */ w("span", { class: "mw-ui-radio__controls__icon" }, null, -1), Fh = ["for", "textContent"];
function Mh(e, t, n, o, s, a) {
  const i = _("mw-row");
  return v(), M(i, {
    class: fe(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: b(() => [
      w("div", Lh, [
        q(w("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => a.inputModel = r),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, Ph), [
          [lp, a.inputModel]
        ]),
        Nh
      ]),
      w("label", {
        for: n.id,
        class: "ps-2",
        textContent: se(n.label)
      }, null, 8, Fh)
    ], void 0),
    _: 1
  }, 8, ["class"]);
}
const Ns = /* @__PURE__ */ V(Dh, [["render", Mh]]), Uc = {
  name: "MwRadioGroup",
  components: { MwRadio: Ns },
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
      (o) => Ro(Ns, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Ro("div", { class: "mw-ui-radio-group" }, n);
  }
};
const Oh = {
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
}, Bh = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function Ih(e, t, n, o, s, a) {
  return v(), T("div", {
    class: fe(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: ot(a.containerStyles)
  }, [
    w("div", {
      class: fe(["mw-progress-bar__bar", a.barClass]),
      style: ot(a.barStyles)
    }, null, 6)
  ], 14, Bh);
}
const $h = /* @__PURE__ */ V(Oh, [["render", Ih]]), Uh = (e, t, n, o) => (s) => {
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
}, Rh = (e, t, n, o) => ({ initiateDrag: Uh(
  e,
  t,
  n,
  o
) }), Vh = (e, t, n, o) => {
  const s = ne(0), a = y(
    () => t.value > e.value
  ), i = y(
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
const zh = {
  name: "MwExpandableContent",
  components: {
    MwButton: Te
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
    const t = ne(!0), n = ne(null), o = y(
      () => Math.min(e.minHeight, s.value)
    ), s = ne(1), { initiateDrag: a } = Rh(
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
    } = Vh(o, s, n, t), u = () => d(l.value + 1), g = ne(null), f = y(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const x = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, x) {
        let A = Math.min(x, s.value);
        A = Math.max(A, o.value), A === o.value && (t.value = !0), n.value.style.height = A + "px";
      }
    };
    return lt(() => K(this, null, function* () {
      var x;
      yield Ko(), s.value = n.value.scrollHeight, (x = g.value) == null || x.addEventListener(
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
      mwIconCollapse: ah,
      mwIconExpand: Pc,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: r,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, jh = { class: "mw-ui-expandable-content__container" }, Hh = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, qh = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function Gh(e, t, n, o, s, a) {
  const i = _("mw-button");
  return v(), T("div", {
    class: "mw-ui-expandable-content",
    style: ot(o.cssVars)
  }, [
    w("div", jh, [
      w("div", {
        ref: "contentRef",
        class: fe(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        Xe(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (v(), T("div", Hh, [
        p(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (v(), M(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : ae("", !0)
      ])) : ae("", !0)
    ]),
    w("div", qh, [
      w("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...r) => o.onDragButtonClicked && o.onDragButtonClicked(...r))
      })
    ], 512)
  ], 4);
}
const Kh = /* @__PURE__ */ V(zh, [["render", Gh]]);
const Wh = {
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
      default: xt.primary
    },
    inactiveColor: {
      type: String,
      default: xt.base70
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
}, Xh = ["width", "height", "viewport"], Yh = ["r", "cx", "cy", "stroke-dasharray"], Jh = ["r", "cx", "cy", "stroke-dasharray"];
function Zh(e, t, n, o, s, a) {
  return v(), T("svg", {
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
    }, null, 8, Yh),
    w("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: ot({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Jh)
  ], 12, Xh);
}
const Rc = /* @__PURE__ */ V(Wh, [["render", Zh]]), ln = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, cn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${ln.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${ln.tablet}px) and (max-width: ${ln.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${ln.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${ln.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${ln.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${ln.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${ln["desktop-wide"]}px)`
}, ha = {
  mobile: () => matchMedia(cn.mobile).matches,
  tablet: () => matchMedia(cn.tablet).matches,
  desktop: () => matchMedia(cn.desktop).matches,
  desktopwide: () => matchMedia(cn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(cn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(cn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(cn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(cn["desktop-and-down"]).matches
}, Qh = {
  install: (e) => {
    const t = () => {
      for (let o in ha)
        ha.hasOwnProperty(o) && (n.value[o] = ha[o]());
    }, n = ne({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Mt(wt({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, em = {
  install: (e) => {
    e.config.globalProperties.$mwui = Mt(wt({}, e.config.globalProperties.$mwui || {}), {
      colors: xt
    }), e.provide("colors", xt);
  }
};
function tm() {
  return Vc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Vc() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const nm = typeof Proxy == "function", om = "devtools-plugin:setup", sm = "plugin:settings:set";
let Qn, Ga;
function am() {
  var e;
  return Qn !== void 0 || (typeof window != "undefined" && window.performance ? (Qn = !0, Ga = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Qn = !0, Ga = global.perf_hooks.performance) : Qn = !1), Qn;
}
function im() {
  return am() ? Ga.now() : Date.now();
}
class rm {
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
        return im();
      }
    }, n && n.on(sm, (i, r) => {
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
function zc(e, t) {
  const n = e, o = Vc(), s = tm(), a = nm && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(om, e, t);
  else {
    const i = a ? new rm(n, s) : null;
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
var jc = "store";
function Se(e) {
  return e === void 0 && (e = null), Ze(e !== null ? e : jc);
}
function Jn(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function Hc(e) {
  return e !== null && typeof e == "object";
}
function lm(e) {
  return e && typeof e.then == "function";
}
function Pt(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function cm(e, t) {
  return function() {
    return e(t);
  };
}
function qc(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var o = t.indexOf(e);
    o > -1 && t.splice(o, 1);
  };
}
function Gc(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  Qs(e, n, [], e._modules.root, !0), ki(e, n, t);
}
function ki(e, t, n) {
  var o = e._state, s = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var a = e._wrappedGetters, i = {}, r = {}, l = Ed(!0);
  l.run(function() {
    Jn(a, function(d, c) {
      i[c] = cm(d, e), r[c] = y(function() {
        return i[c]();
      }), Object.defineProperty(e.getters, c, {
        get: function() {
          return r[c].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Xn({
    data: t
  }), e._scope = l, e.strict && pm(e), o && n && e._withCommit(function() {
    o.data = null;
  }), s && s.stop();
}
function Qs(e, t, n, o, s) {
  var a = !n.length, i = e._modules.getNamespace(n);
  if (o.namespaced && (e._modulesNamespaceMap[i] && {}.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = o), !a && !s) {
    var r = Ti(t, n.slice(0, -1)), l = n[n.length - 1];
    e._withCommit(function() {
      ({}).NODE_ENV !== "production" && l in r && console.warn(
        '[vuex] state field "' + l + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), r[l] = o.state;
    });
  }
  var d = o.context = um(e, i, n);
  o.forEachMutation(function(c, u) {
    var g = i + u;
    dm(e, g, c, d);
  }), o.forEachAction(function(c, u) {
    var g = c.root ? u : i + u, f = c.handler || c;
    gm(e, g, f, d);
  }), o.forEachGetter(function(c, u) {
    var g = i + u;
    fm(e, g, c, d);
  }), o.forEachChild(function(c, u) {
    Qs(e, t, n.concat(u), c, s);
  });
}
function um(e, t, n) {
  var o = t === "", s = {
    dispatch: o ? e.dispatch : function(a, i, r) {
      var l = Fs(a, i, r), d = l.payload, c = l.options, u = l.type;
      if ((!c || !c.root) && (u = t + u, {}.NODE_ENV !== "production" && !e._actions[u])) {
        console.error("[vuex] unknown local action type: " + l.type + ", global type: " + u);
        return;
      }
      return e.dispatch(u, d);
    },
    commit: o ? e.commit : function(a, i, r) {
      var l = Fs(a, i, r), d = l.payload, c = l.options, u = l.type;
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
        return Kc(e, t);
      }
    },
    state: {
      get: function() {
        return Ti(e.state, n);
      }
    }
  }), s;
}
function Kc(e, t) {
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
function dm(e, t, n, o) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function(i) {
    n.call(e, o.state, i);
  });
}
function gm(e, t, n, o) {
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
    return lm(r) || (r = Promise.resolve(r)), e._devtoolHook ? r.catch(function(l) {
      throw e._devtoolHook.emit("vuex:error", l), l;
    }) : r;
  });
}
function fm(e, t, n, o) {
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
function pm(e) {
  Ke(function() {
    return e._state.data;
  }, function() {
    ({}).NODE_ENV !== "production" && Pt(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Ti(e, t) {
  return t.reduce(function(n, o) {
    return n[o];
  }, e);
}
function Fs(e, t, n) {
  return Hc(e) && e.type && (n = t, t = e, e = e.type), {}.NODE_ENV !== "production" && Pt(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var hm = "vuex bindings", Mr = "vuex:mutations", ma = "vuex:actions", eo = "vuex", mm = 0;
function _m(e, t) {
  zc(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [hm]
    },
    function(n) {
      n.addTimelineLayer({
        id: Mr,
        label: "Vuex Mutations",
        color: Or
      }), n.addTimelineLayer({
        id: ma,
        label: "Vuex Actions",
        color: Or
      }), n.addInspector({
        id: eo,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(o) {
        if (o.app === e && o.inspectorId === eo)
          if (o.filter) {
            var s = [];
            Jc(s, t._modules.root, o.filter, ""), o.rootNodes = s;
          } else
            o.rootNodes = [
              Yc(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(o) {
        if (o.app === e && o.inspectorId === eo) {
          var s = o.nodeId;
          Kc(t, s), o.state = bm(
            wm(t._modules, s),
            s === "root" ? t.getters : t._makeLocalGettersCache,
            s
          );
        }
      }), n.on.editInspectorState(function(o) {
        if (o.app === e && o.inspectorId === eo) {
          var s = o.nodeId, a = o.path;
          s !== "root" && (a = s.split("/").filter(Boolean).concat(a)), t._withCommit(function() {
            o.set(t._state.data, a, o.state.value);
          });
        }
      }), t.subscribe(function(o, s) {
        var a = {};
        o.payload && (a.payload = o.payload), a.state = s, n.notifyComponentUpdate(), n.sendInspectorTree(eo), n.sendInspectorState(eo), n.addTimelineEvent({
          layerId: Mr,
          event: {
            time: Date.now(),
            title: o.type,
            data: a
          }
        });
      }), t.subscribeAction({
        before: function(o, s) {
          var a = {};
          o.payload && (a.payload = o.payload), o._id = mm++, o._time = Date.now(), a.state = s, n.addTimelineEvent({
            layerId: ma,
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
            layerId: ma,
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
var Or = 8702998, vm = 6710886, ym = 16777215, Wc = {
  label: "namespaced",
  textColor: ym,
  backgroundColor: vm
};
function Xc(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function Yc(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: Xc(t),
    tags: e.namespaced ? [Wc] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return Yc(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function Jc(e, t, n, o) {
  o.includes(n) && e.push({
    id: o || "root",
    label: o.endsWith("/") ? o.slice(0, o.length - 1) : o || "Root",
    tags: t.namespaced ? [Wc] : []
  }), Object.keys(t._children).forEach(function(s) {
    Jc(e, t._children[s], n, o + s + "/");
  });
}
function bm(e, t, n) {
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
    var a = Sm(t);
    s.getters = Object.keys(a).map(function(i) {
      return {
        key: i.endsWith("/") ? Xc(i) : i,
        editable: !1,
        value: Ka(function() {
          return a[i];
        })
      };
    });
  }
  return s;
}
function Sm(e) {
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
      }), s[a] = Ka(function() {
        return e[n];
      });
    } else
      t[n] = Ka(function() {
        return e[n];
      });
  }), t;
}
function wm(e, t) {
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
function Ka(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Ft = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var o = t.state;
  this.state = (typeof o == "function" ? o() : o) || {};
}, Zc = { namespaced: { configurable: !0 } };
Zc.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Ft.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
Ft.prototype.removeChild = function(t) {
  delete this._children[t];
};
Ft.prototype.getChild = function(t) {
  return this._children[t];
};
Ft.prototype.hasChild = function(t) {
  return t in this._children;
};
Ft.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
Ft.prototype.forEachChild = function(t) {
  Jn(this._children, t);
};
Ft.prototype.forEachGetter = function(t) {
  this._rawModule.getters && Jn(this._rawModule.getters, t);
};
Ft.prototype.forEachAction = function(t) {
  this._rawModule.actions && Jn(this._rawModule.actions, t);
};
Ft.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && Jn(this._rawModule.mutations, t);
};
Object.defineProperties(Ft.prototype, Zc);
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
  Qc([], this.root, t);
};
Zn.prototype.register = function(t, n, o) {
  var s = this;
  o === void 0 && (o = !0), {}.NODE_ENV !== "production" && eu(t, n);
  var a = new Ft(n, o);
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
function Qc(e, t, n) {
  if ({}.NODE_ENV !== "production" && eu(e, n), t.update(n), n.modules)
    for (var o in n.modules) {
      if (!t.getChild(o)) {
        ({}).NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + o + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      Qc(
        e.concat(o),
        t.getChild(o),
        n.modules[o]
      );
    }
}
var Br = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Cm = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, Ir = {
  getters: Br,
  mutations: Br,
  actions: Cm
};
function eu(e, t) {
  Object.keys(Ir).forEach(function(n) {
    if (t[n]) {
      var o = Ir[n];
      Jn(t[n], function(s, a) {
        Pt(
          o.assert(s),
          xm(e, n, a, s, o.expected)
        );
      });
    }
  });
}
function xm(e, t, n, o, s) {
  var a = t + " should be " + s + ' but "' + t + "." + n + '"';
  return e.length > 0 && (a += ' in module "' + e.join(".") + '"'), a += " is " + JSON.stringify(o) + ".", a;
}
function Em(e) {
  return new _t(e);
}
var _t = function e(t) {
  var n = this;
  t === void 0 && (t = {}), {}.NODE_ENV !== "production" && (Pt(typeof Promise != "undefined", "vuex requires a Promise polyfill in this browser."), Pt(this instanceof e, "store must be called with the new operator."));
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
  Qs(this, c, [], this._modules.root), ki(this, c), o.forEach(function(u) {
    return u(n);
  });
}, Di = { state: { configurable: !0 } };
_t.prototype.install = function(t, n) {
  t.provide(n || jc, this), t.config.globalProperties.$store = this;
  var o = this._devtools !== void 0 ? this._devtools : {}.NODE_ENV !== "production" || !1;
  o && _m(t, this);
};
Di.state.get = function() {
  return this._state.data;
};
Di.state.set = function(e) {
  ({}).NODE_ENV !== "production" && Pt(!1, "use store.replaceState() to explicit replace store state.");
};
_t.prototype.commit = function(t, n, o) {
  var s = this, a = Fs(t, n, o), i = a.type, r = a.payload, l = a.options, d = { type: i, payload: r }, c = this._mutations[i];
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
  var o = this, s = Fs(t, n), a = s.type, i = s.payload, r = { type: a, payload: i }, l = this._actions[a];
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
  return qc(t, this._subscribers, n);
};
_t.prototype.subscribeAction = function(t, n) {
  var o = typeof t == "function" ? { before: t } : t;
  return qc(o, this._actionSubscribers, n);
};
_t.prototype.watch = function(t, n, o) {
  var s = this;
  return {}.NODE_ENV !== "production" && Pt(typeof t == "function", "store.watch only accepts a function."), Ke(function() {
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
  o === void 0 && (o = {}), typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && (Pt(Array.isArray(t), "module path must be a string or an Array."), Pt(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), Qs(this, this.state, t, this._modules.get(t), o.preserveState), ki(this, this.state);
};
_t.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Pt(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var o = Ti(n.state, t.slice(0, -1));
    delete o[t[t.length - 1]];
  }), Gc(this);
};
_t.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Pt(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
_t.prototype.hotUpdate = function(t) {
  this._modules.update(t), Gc(this, !0);
};
_t.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties(_t.prototype, Di);
var Am = Tm(function(e, t) {
  var n = {};
  return {}.NODE_ENV !== "production" && !tu(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), km(t).forEach(function(o) {
    var s = o.key, a = o.val;
    n[s] = function() {
      var r = this.$store.state, l = this.$store.getters;
      if (e) {
        var d = Dm(this.$store, "mapState", e);
        if (!d)
          return;
        r = d.context.state, l = d.context.getters;
      }
      return typeof a == "function" ? a.call(this, r, l) : r[a];
    }, n[s].vuex = !0;
  }), n;
});
function km(e) {
  return tu(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function tu(e) {
  return Array.isArray(e) || Hc(e);
}
function Tm(e) {
  return function(t, n) {
    return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
  };
}
function Dm(e, t, n) {
  var o = e._modulesNamespaceMap[n];
  return {}.NODE_ENV !== "production" && !o && console.error("[vuex] module namespace not found in " + t + "(): " + n), o;
}
const Lm = {
  name: "ContentTranslationApp",
  components: { MwGrid: kc, MwCol: Ne, MwRow: Ae },
  setup() {
    const e = Se(), t = y(
      () => e.state.application.autoSavePending
    );
    lt(() => {
      window.addEventListener("beforeunload", (n) => {
        t.value && (n.preventDefault(), n.returnValue = "");
      });
    });
  }
};
function Pm(e, t, n, o, s, a) {
  const i = _("router-view"), r = _("mw-col"), l = _("mw-row"), d = _("mw-grid");
  return v(), M(d, { id: "contenttranslation" }, {
    default: b(() => [
      p(l, { class: "cx-container" }, {
        default: b(() => [
          p(r, { cols: "12" }, {
            default: b(() => [
              p(i, null, {
                default: b(({ Component: c, route: u }) => [
                  p(_n, {
                    name: u.meta.transitionName
                  }, {
                    default: b(() => [
                      (v(), M(mo(c)))
                    ], void 0, !0),
                    _: 2
                  }, 1032, ["name"])
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
const Nm = /* @__PURE__ */ V(Lm, [["render", Pm]]), Fm = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: !1,
  translatorStats: null
}, Mm = {
  /**
   * @param {Object} state
   * @return {function(string, string): Translation[]}
   */
  getPublishedTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.status === "published"
  ),
  getDraftTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.status === "draft"
  ),
  getPublishedTranslations: (e) => e.translations.filter(
    (t) => t.status === "published"
  ),
  getDraftTranslations: (e) => e.translations.filter(
    (t) => t.status === "draft"
  ),
  // Function with dummy implementation. Needed to add real functionality later
  hasSectionTranslations: (e) => e.translations.some(
    (t) => t.hasSectionTranslations
  ),
  /**
   * @param state
   * @return {function(sourceLanguage: string, targetLanguage: string): Translation[]}
   */
  getAllTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  )
}, Om = [
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
], Bm = (e, t, n) => {
  let o, s, a, i, r;
  return !e || !t ? 0 : e === t ? 1 : (s = i = $r(e, n), a = r = $r(t, n), r.length > i.length && (s = r, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, $r = function(e, t) {
  return e ? Om.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Im = 95, $m = 85, Um = [
  { status: "failure", value: 100 - Im },
  { status: "warning", value: 100 - $m },
  { status: "success", value: 100 }
], nu = (e, t, n) => {
  const o = Ur(e).textContent, s = Ur(t).textContent, a = 100 - 100 * Bm(s, o, n);
  return Math.ceil(a);
}, Rm = (e) => Um.find((t) => e <= t.value).status, Vm = (e, t) => nu(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Ur = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Gn = { calculateScore: nu, getScoreStatus: Rm, getMTScoreForPageSection: Vm }, _a = "original", va = "empty", zm = {
  Elia: "Elia.eus",
  Flores: "NLLB-200",
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
      _a,
      va
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return zm[t] || t;
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
    return _a;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return va;
  }
  static isUserMTProvider(t) {
    return [_a, va].includes(
      t
    );
  }
}
class pn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Mt(wt({}, a), {
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
const Rr = (e) => {
  var n;
  const t = Ms(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ms = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Os = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), ou = (e) => {
  const t = Ms(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = jm(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, jm = (e) => {
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
}, su = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Hm = (e) => {
  const t = su(e);
  return t == null ? void 0 : t.targetExists;
};
class ya {
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
let Et = class {
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
   * Sets the adaptation info object as it is calculated by the cxserver
   * for the given MT provider.
   *
   * @param {string} provider
   * @param {{ adapted: boolean, partial: boolean, targetExists: boolean, mandatoryTargetParams: string[], optionalTargetParams: string[] }} info
   */
  setBlockTemplateAdaptationInfo(t, n) {
    this.blockTemplateAdaptationInfo[t] = n;
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
      (t) => Os(t)
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
    const t = Ms(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Rr(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Os(o));
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
    return n && Rr(n) || "";
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
    const o = Ms(n);
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
    n.innerHTML = this.translatedContent;
    const o = [
      new ya({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new ya({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && o.push(
      new ya({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.parallelCorporaMTContent,
        origin: this.mtProviderUsed
      })
    ), o;
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
    var n;
    if (this.blockTemplateMTProviderUsed)
      return this.blockTemplateMTProviderUsed;
    const t = this.sentences.filter(
      (o) => o.isTranslated
    );
    return ((n = t == null ? void 0 : t[0]) == null ? void 0 : n.mtProviderUsed) || null;
  }
  get parallelCorporaMTContent() {
    const t = this.mtProviderUsed, n = this.node.cloneNode(!0);
    if (this.isBlockTemplate && Ve.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate)
      n.innerHTML = this.blockTemplateProposedTranslations[t];
    else {
      if (!this.sentences.filter(
        (i) => i.isTranslated
      ).every(
        (i) => i.mtProviderUsed === t
      ) || Ve.isUserMTProvider(t))
        return null;
      Array.from(
        n.getElementsByClassName("cx-segment")
      ).forEach((i) => {
        const r = this.getSentenceById(i.dataset.segmentid);
        if (r.isTranslated) {
          i.innerHTML = r.mtProposedTranslationUsed;
          return;
        }
        i.parentNode.removeChild(i);
      });
    }
    return n.outerHTML;
  }
  /**
   *
   * @param {CorporaRestoredUnit} corporaUnit
   */
  restoreCorpora(t) {
    this.corporaRestoredUnit = t;
    const n = (a) => {
      const i = document.createElement("div");
      i.innerHTML = a;
      const r = i.firstChild;
      return Array.from(r.getElementsByClassName("cx-segment"));
    }, o = n(
      this.corporaRestoredUnit.user.content
    ), s = n(this.corporaRestoredUnit.mt.content);
    o.forEach((a) => {
      const i = this.getSentenceById(a.dataset.segmentid), r = s.find(
        (d) => d.dataset.segmentid === a.dataset.segmentid
      );
      i.translatedContent = a.innerHTML;
      const l = this.corporaRestoredUnit.mt.engine;
      i.addProposedTranslation(l, r.innerHTML), i.mtProviderUsed = l;
    });
  }
};
const ba = "__LEAD_SECTION__";
class au {
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
    }, this.translatedTitle = "", this.subSections = o, this.isLeadSection = s, this.isTitleSelected = a;
  }
  reset() {
    this.proposedTitleTranslations = {
      [Ve.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [Ve.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return ba;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[Ve.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof Et ? n.transclusionNode.outerHTML : n instanceof pn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Et ? t.blockTemplateSelected = !1 : t instanceof pn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Et ? n.blockTemplateSelected = !0 : n instanceof pn && (n.selected = !0);
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
    if (o instanceof Et)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof pn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Et ? n.blockTemplateProposedTranslations[t] || "" : n instanceof pn ? n.proposedTranslations[t] || "" : null;
  }
  /**
   * This method sets the applied translation and the MT provider used
   * for the selected translation unit
   * @param {string} translation
   * @param {string} provider
   */
  setTranslationForSelectedTranslationUnit(t, n) {
    if (this.isTitleSelected) {
      this.translatedTitle = t;
      return;
    }
    this.selectedContentTranslationUnit instanceof Et ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof pn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? ba : this.originalTitle;
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
    return this.isLeadSection ? ba : this.title;
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
  /**
   * @param {CorporaRestoredUnit[]} corporaUnits
   */
  restoreCorporaUnits(t) {
    for (const n of this.subSections) {
      const o = t.find(
        (s) => s.subSectionId === n.id
      );
      o && n.restoreCorpora(o);
    }
  }
}
class iu {
  /**
   * @param {string} translationId
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
   */
  constructor({
    translationId: t,
    sectionId: n,
    sourceTitle: o,
    sourceLanguage: s,
    targetLanguage: a,
    startTimestamp: i,
    lastUpdatedTimestamp: r,
    status: l,
    pageRevision: d,
    targetTitle: c,
    sourceSectionTitle: u,
    targetSectionTitle: g
  }) {
    this.id = t, this.sectionId = n, this.sourceTitle = o, this.sourceLanguage = s, this.targetLanguage = a, this.startTimestamp = i, this.lastUpdatedTimestamp = r, this.status = l, this.pageRevision = d, this.targetTitle = c, this.sourceSectionTitle = u, this.targetSectionTitle = g, this.restored = !1;
  }
  get isLeadSectionTranslation() {
    return !this.sourceSectionTitle || this.sourceSectionTitle === au.LEAD_SECTION_DUMMY_TITLE;
  }
}
const je = new mw.cx.SiteMapper(), ru = mw.util.getUrl, qm = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class lu {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Bs {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new lu(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
class Gm {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"Flores"|"Google"|"Yandex"
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
}
function cu(e) {
  return K(this, null, function* () {
    if (mw.user.isAnon())
      return Promise.resolve([]);
    const t = {
      action: "query",
      format: "json",
      assert: "user",
      formatversion: 2,
      list: "contenttranslation",
      sectiontranslationsonly: !0
    };
    return e && (t.offset = e), new mw.Api().get(t).then((o) => K(this, null, function* () {
      var i;
      let a = o.query.contenttranslation.translations.map((r) => new iu(r));
      if ((i = o.continue) != null && i.offset) {
        const r = yield cu(o.continue.offset);
        a = a.concat(r);
      }
      return a;
    }));
  });
}
function Km(e) {
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
      (a) => new Gm(a)
    );
  });
}
function Wm(e, t, n, o, s) {
  return K(this, null, function* () {
    if (!o)
      return;
    let a = `/translate/${e}/${t}`;
    n !== Ve.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = je.getCXServerUrl(a);
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
const Xm = (e, t, n) => {
  const o = je.getApi(t);
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
}, Ym = ({
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
  isSandbox: c
}) => {
  const u = {
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: r,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: i,
    issandbox: c
  };
  return l && (u.captchaid = l, u.captchaword = d), new mw.Api().postWithToken("csrf", u).then((f) => {
    if (f = f.cxpublishsection, f.result === "error") {
      if (f.edit.captcha)
        return {
          publishFeedbackMessage: new Bs({
            type: "captcha",
            status: "error",
            details: f.edit.captcha
          }),
          targetTitle: null
        };
      throw new Error();
    }
    return {
      publishFeedbackMessage: null,
      targetTitle: f.targettitle
    };
  }).catch((f, m) => {
    let C;
    return m = m || {}, m.exception ? C = m.exception.message : m.error ? C = m.error.info : C = "Unknown error", {
      publishFeedbackMessage: new Bs({
        text: C,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Jm = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: r,
  sectionId: l,
  isSandbox: d
}) => {
  const c = {
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
    issandbox: d
  };
  return new mw.Api().postWithToken("csrf", c).then(() => null).catch((g, f) => {
    let m;
    return f.exception ? m = f.exception.message : f.error ? m = f.error.info : m = "Unknown error", new Bs({ text: m, status: "error" });
  });
}, Zm = (e, t) => {
  const n = {
    action: "sxdelete",
    translationid: e,
    sectionid: t
  };
  return new mw.Api().postWithToken("csrf", n).then(() => !0).catch(() => !1);
}, Qm = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), tn = {
  fetchTranslations: cu,
  fetchTranslationUnits: Km,
  fetchSegmentTranslation: Wm,
  parseTemplateWikitext: Xm,
  publishTranslation: Ym,
  saveTranslation: Jm,
  deleteTranslation: Zm,
  fetchTranslatorStats: Qm
};
class _o {
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
   * @param {CorporaRestoredUnit[]} corporaUnits
   */
  restoreCorporaDraft(t) {
    for (const n of this.sections || []) {
      const o = t.filter(
        (s) => s.pageSectionId === parseInt(n.id)
      );
      n.restoreCorporaUnits(o);
    }
  }
}
const e_ = (e, t) => {
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
}, t_ = (e) => {
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
function n_({ rootState: e }) {
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = Gn.getMTScoreForPageSection(
    t,
    n
  ), s = Gn.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let r, l;
  return i === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Bs({
    title: r,
    text: l,
    status: i,
    type: "mt"
  });
}
function o_({ rootState: e, rootGetters: t, commit: n }) {
  const o = t["application/getCurrentPage"], {
    /** @type {PageSection} */
    currentSourceSection: s,
    /** @type {SectionSuggestion} */
    sourceLanguage: a,
    targetLanguage: i
  } = e.application, r = o.title, l = t["application/getTargetPageTitleForPublishing"], d = t["mediawiki/getSupportedMTProviders"](
    a,
    i
  ), c = t["application/getParallelCorporaBaseId"], u = s.getParallelCorporaUnits(c);
  u.forEach(
    (f) => e_(f, d)
  );
  const g = t["application/isSandboxTarget"];
  return tn.saveTranslation({
    sourceTitle: r,
    targetTitle: l,
    // pass an empty string to be stored as "cxsx_source_section_title" inside "cx_section_translations"
    // table for lead sections, as empty strings are considered valid values for non-nullable fields in MySQL.
    sourceSectionTitle: s.sourceSectionTitleForPublishing,
    // pass an empty string to be stored as "cxsx_target_section_title" inside "cx_section_translations"
    // table for lead sections, as empty strings are considered valid values for non-nullable fields in MySQL.
    targetSectionTitle: s.targetSectionTitleForPublishing,
    sourceLanguage: a,
    targetLanguage: i,
    revision: t["application/getCurrentRevision"],
    units: u.map((f) => f.payload),
    // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
    sectionId: c,
    isSandbox: g
  });
}
function s_(a) {
  return K(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i)
      return { publishFeedbackMessage: i, targetTitle: null };
    const r = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: l,
      sourceLanguage: d,
      targetLanguage: c
    } = e.application, u = r.title, g = t["application/getTargetPageTitleForPublishing"], f = t["application/isSandboxTarget"], m = {
      html: t_(l.translationHtml),
      sourceTitle: u,
      targetTitle: g,
      sourceSectionTitle: l.sourceSectionTitleForPublishing,
      targetSectionTitle: l.targetSectionTitleForPublishing,
      sourceLanguage: d,
      targetLanguage: c,
      revision: t["application/getCurrentRevision"],
      isSandbox: f
    };
    return o && (m.captchaId = o, m.captchaWord = s), yield tn.publishTranslation(m);
  });
}
function a_(s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, state: n, rootGetters: o }) {
    const a = yield tn.fetchTranslations();
    a.forEach((r) => {
      n.translations.some(
        (d) => d.id === r.id
      ) || e("addTranslation", r);
    });
    const i = a.reduce((r, l) => {
      const d = l.sourceLanguage;
      return r[d] = r[d] || [], r[d].push(l), r;
    }, {});
    e("setTranslationsLoaded", !0);
    for (const [r, l] of Object.entries(i))
      t(
        "mediawiki/fetchPageMetadata",
        {
          language: r,
          titles: l.map((d) => d.sourceTitle)
        },
        { root: !0 }
      ), l.forEach((d) => {
        const { targetLanguage: c, targetTitle: u } = d, g = !!o["mediawiki/getPage"](
          c,
          u
        );
        u && !g && e(
          "mediawiki/addPage",
          new _o({ title: u, pagelanguage: c }),
          { root: !0 }
        );
      });
  });
}
function i_(a, i) {
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
      return yield tn.fetchSegmentTranslation(
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
function r_(n, o) {
  return K(this, arguments, function* ({ commit: e }, t) {
    const s = yield tn.deleteTranslation(
      t.id,
      t.sectionId
    );
    return s && e("removeTranslationById", t.id), s;
  });
}
function l_(t) {
  return K(this, arguments, function* ({ commit: e }) {
    const n = yield tn.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const c_ = {
  validateMT: n_,
  saveTranslation: o_,
  publishTranslation: s_,
  deleteTranslation: r_,
  fetchTranslations: a_,
  translateContent: i_,
  fetchTranslatorStats: l_
}, u_ = {
  addTranslation(e, t) {
    e.translations.push(t);
  },
  removeTranslationById(e, t) {
    e.translations = e.translations.filter(
      (n) => n.id !== t
    );
  },
  setTranslationsLoaded: (e, t) => {
    e.translationsLoaded = t;
  },
  setTranslatorStats: (e, t) => {
    e.translatorStats = t;
  }
}, d_ = {
  namespaced: !0,
  state: Fm,
  getters: Mm,
  actions: c_,
  mutations: u_
}, uu = [
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
], g_ = [
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
], f_ = [
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
], p_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], h_ = [
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
], m_ = {
  en: uu,
  es: g_,
  bn: f_,
  fr: p_,
  de: h_
}, __ = {
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
  appendixSectionTitles: m_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, v_ = {
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
class Li {
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
class Vt {
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
   * @return {boolean}
   */
  get translationExists() {
    return !!this.targetTitle;
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
class Vo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const y_ = uu;
function b_(e, t, n, o = 24) {
  return K(this, null, function* () {
    var d;
    let s = `/data/recommendation/article/creation/translation/${e}`;
    n && (s += `/${n}`);
    const a = je.getRestbaseUrl(t, s), i = new URLSearchParams({ count: `${o}` }), r = yield fetch(`${a}?${i}`);
    if (!r.ok)
      throw new Error("Failed to load data from server");
    return (((d = yield r.json()) == null ? void 0 : d.items) || []).map(
      (c) => new Li({
        sourceTitle: c.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: c.wikidata_id,
        langLinksCount: parseInt(c.sitelink_count)
      })
    );
  });
}
function S_(e, t, n) {
  return K(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = je.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Vt(a) : null;
  });
}
function w_(e, t) {
  return K(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = je.getApi(e);
    try {
      const s = yield o.get(n);
      return C_(s.result.translations);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
const C_ = (e) => {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1));
    [e[t], e[n]] = [e[n], e[t]];
  }
  return e;
};
function x_(e) {
  const t = y_.map((o) => encodeURIComponent(o)).join("|"), n = je.getCXServerUrl(
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
const E_ = (e) => {
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
}, A_ = (e) => {
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
}, k_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((r) => new Vo(r));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, Qt = {
  fetchFavorites: k_,
  fetchPageSuggestions: b_,
  fetchSectionSuggestions: S_,
  fetchSuggestionSeeds: w_,
  fetchAppendixTargetSectionTitles: x_,
  markFavorite: E_,
  unmarkFavorite: A_
}, Vr = ["cx-published-translations"];
class du {
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
    return Vr.every(
      (t) => this.exhaustedProviders.includes(t)
    );
  }
  /**
   * Get next provider that is not used yet, if any
   *
   * @returns {string|null}
   */
  get nextUnexhaustedProvider() {
    return Vr.find(
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
function T_(r, l) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
    let d = n.getSectionSuggestionsForArticle(
      s,
      a,
      i
    );
    if (!d) {
      d = yield Qt.fetchSectionSuggestions(
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
          d = new Vt({
            sourceLanguage: s,
            targetLanguage: a,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: c.title
          }), e(
            "addPageSuggestion",
            new Li({
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
function D_({ rootGetters: e }, t) {
  return {
    /**
     * @param sourceLanguage
     * @param targetLanguage
     * @return {Promise<Object[]>}
     */
    "cx-published-translations": (o, s) => Qt.fetchSuggestionSeeds(o, s),
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
function L_(i, r) {
  return K(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
    let l = o.findSectionSuggestionSeedCollection(
      s,
      a
    );
    if (l || (l = new du({
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
function P_(i, r) {
  return K(this, arguments, function* ({ commit: e, rootGetters: t, dispatch: n, getters: o }, { sourceLanguage: s, targetLanguage: a }) {
    let l = o.findPageSuggestionSeedCollection(
      s,
      a
    );
    if (l || (l = new du({
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
function N_(s) {
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
function F_(a) {
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
      const f = yield Qt.fetchSectionSuggestions(
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
function M_(s) {
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
      const d = yield Qt.fetchPageSuggestions(
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
function O_(o, s) {
  return K(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield Qt.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
function B_(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removeSectionSuggestion", n), t("fetchNextSectionSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function I_(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removePageSuggestion", n), t("fetchNextPageSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function $_(o, s) {
  return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    yield Qt.markFavorite(n);
    const { sourceTitle: a, sourceLanguage: i, targetLanguage: r } = n, l = new Vo({
      title: a,
      sourceLanguage: i,
      targetLanguage: r
    });
    e("addFavoriteSuggestion", l);
  });
}
function U_(n, o) {
  return K(this, arguments, function* ({ commit: e }, t) {
    e("removeFavoriteSuggestion", t), yield Qt.unmarkFavorite(t);
  });
}
function R_(o) {
  return K(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
    if (n.favorites.length)
      return;
    const s = yield Qt.fetchFavorites();
    if (!s || !s.length)
      return;
    const a = {};
    for (const i of s)
      e("addFavoriteSuggestion", i), Qt.fetchSectionSuggestions(
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
const V_ = {
  addPageSuggestionAsFavorite: I_,
  addSectionSuggestionAsFavorite: B_,
  doMarkSuggestionAsFavorite: $_,
  fetchFavorites: R_,
  fetchAppendixSectionTitles: O_,
  fetchNextPageSuggestionsSlice: M_,
  fetchNextSectionSuggestionsSlice: F_,
  getPageSuggestionSeed: P_,
  getSectionSuggestionSeeds: L_,
  getSeedProviderHandlerByName: D_,
  initializeSuggestions: N_,
  loadSectionSuggestion: T_,
  removeFavoriteSuggestion: U_
}, z_ = {
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
}, j_ = {
  namespaced: !0,
  state: __,
  getters: v_,
  actions: V_,
  mutations: z_
}, H_ = {
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
}, q_ = {
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
  getTitleByLanguageForGroup: (e, t) => (n, o) => {
    var s, a;
    return (a = (((s = t.getLanguageTitleGroupByWikidataId(n)) == null ? void 0 : s.titles) || []).find(
      (i) => i.lang === o
    )) == null ? void 0 : a.title;
  },
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
class G_ {
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
function K_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const W_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), K_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, X_ = (e, t) => {
  let n, o;
  return t ? (n = W_(e), o = n.$element.find(
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
}, Y_ = (e, t) => {
  const n = Array.from(
    X_(e, t)
  );
  return J_(n).map(
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
        (u) => new Et({
          sentences: Z_(u),
          node: u
        })
      ), c = !r;
      return new au({ id: l, title: r, subSections: d, isLeadSection: c });
    }
  );
}, J_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Z_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new pn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), gu = {
  convertSegmentedContentToPageSections: Y_
}, Pi = 120, Q_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: Pi,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return je.getApi(e).get(n).then((s) => {
    const a = s.query.pages, r = (s.query.redirects || []).reduce(
      (c, u) => Mt(wt({}, c), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (c, u) => Mt(wt({}, c), { [u.to]: u.from }),
      {}
    );
    return a.map((c) => {
      const u = d[c.title] || r[c.title] || null;
      return new _o(Mt(wt({}, c), { _alias: u }));
    });
  });
}, e0 = (e, t) => {
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
  return je.getApi(e).get(n).then((s) => K(void 0, null, function* () {
    var l, d;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], r = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return r ? Object.freeze(new G_(r, i)) : null;
  }));
}, t0 = (e, t, n, o = null) => fu(
  e,
  t,
  n,
  o
).then(
  (s) => new _o({
    sections: gu.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), fu = (e, t, n, o = null) => {
  const s = [e, t, n].map(
    (i) => encodeURIComponent(i)
  );
  let a = je.getCXServerUrl(
    `/page/${s.join("/")}`
  );
  return o && (a += `/${o}`), fetch(a).then((i) => i.json()).then((i) => i.segmentedContent);
}, n0 = (e) => K(void 0, null, function* () {
  const t = qm();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Pi,
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
  return yield je.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new _o(s))).catch((o) => []);
}), o0 = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Pi,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return je.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new _o(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, es = {
  fetchPages: Q_,
  fetchLanguageTitles: e0,
  fetchPageContent: t0,
  fetchSegmentedContent: fu,
  fetchNearbyPages: n0,
  searchPagesByTitlePrefix: o0
};
function s0() {
  return K(this, null, function* () {
    return yield je.getLanguagePairs().then((e) => e.sourceLanguages);
  });
}
function a0(e, t) {
  return K(this, null, function* () {
    const n = je.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Ve(e, t, o.mt)
      )
    );
  });
}
function i0() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function r0(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = {
    action: "wblinktitles",
    fromsite: s.replace(t, e),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, i = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(i.postWithToken("csrf", a));
}
const ea = {
  fetchSupportedLanguageCodes: s0,
  fetchSupportedMTProviders: a0,
  fetchCXServerToken: i0,
  addWikibaseLink: r0
};
function l0({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const r = o.slice(i, i + s), l = es.fetchPages(n, r).then(
      (d) => d.forEach((c) => t("addPage", c))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function c0({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || es.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function u0(n) {
  return K(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield ea.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function d0(r, l) {
  return K(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let d = t.getPage(o, a);
    if (d && d.content)
      return;
    const c = yield es.fetchPageContent(
      o,
      s,
      a,
      i
    );
    d ? d.content || (d.content = c.content, e("setPageSections", {
      page: d,
      sections: c.sections
    })) : e("addPage", c);
  });
}
function g0({ getters: e, commit: t }, { sourceLanguage: n, sourceTitle: o }) {
  const s = e.getPage(n, o);
  if (s)
    return new Promise((a) => {
      setTimeout(() => {
        t("setPageSections", {
          page: s,
          sections: gu.convertSegmentedContentToPageSections(
            s.content,
            !0
            // resolve references
          )
        }), a();
      }, 0);
    });
}
function f0(s, a) {
  return K(this, arguments, function* ({ commit: e, getters: t }, { sourceLanguage: n, targetLanguage: o }) {
    if (t.getSupportedMTProviders(n, o).length)
      return;
    const i = yield ea.fetchSupportedMTProviders(
      n,
      o
    );
    e("addMtProviderGroup", i);
  });
}
function p0(o) {
  return K(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield es.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const h0 = {
  fetchLanguageTitles: c0,
  fetchMTProviders: f0,
  fetchNearbyPages: p0,
  fetchPageContent: d0,
  fetchPageMetadata: l0,
  fetchSupportedLanguageCodes: u0,
  resolvePageContentReferences: g0
}, m0 = {
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
}, _0 = {
  namespaced: !0,
  state: H_,
  getters: q_,
  actions: h0,
  mutations: m0
}, v0 = {
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
  cxServerToken: null
}, y0 = {
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
   * @return {Translation[]}
   */
  getCurrentPublishedTranslations: (e, t, n, o) => o["translator/getPublishedTranslationsForLanguagePair"](
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
};
function Ni(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, r = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(r, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let fs;
const Fi = ({ dispatch: e, commit: t }) => {
  if (!fs) {
    let n = 1e3, o = 0;
    fs = Ni(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then(
        (a) => {
          a ? (n *= o + 1, o++, setTimeout(fs, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
        }
      );
    }, 3e3);
  }
  return fs;
}, b0 = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), Fi({ dispatch: e, commit: t }).cancel();
}, S0 = (o) => K(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield ea.fetchCXServerToken().then(
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
function w0(n, o) {
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
function C0({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
}
function x0({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentTranslation", n);
}
function E0(n) {
  return K(this, arguments, function* ({
    dispatch: e,
    state: t
  }) {
    const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
    yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
  });
}
function A0(a, i) {
  return K(this, arguments, function* ({ state: e, commit: t, dispatch: n, getters: o }, s) {
    const r = e.currentSectionSuggestion, l = o.getCurrentPage, d = () => {
      const c = l.getSectionByTitle(s);
      t("setCurrentSourceSection", c);
    };
    l.getSectionByTitle(s) || (yield n("mediawiki/fetchPageContent", r, { root: !0 }), n("mediawiki/resolvePageContentReferences", r, {
      root: !0
    }).then(() => d())), d();
  });
}
function k0(a, i) {
  return K(this, arguments, function* ({ state: e, commit: t, dispatch: n, getters: o }, s) {
    var c;
    const r = e.currentSectionSuggestion, l = o.getCurrentPage, d = () => {
      var g;
      const u = (g = l.sections) == null ? void 0 : g[s];
      s === 0 && (u.proposedTitleTranslations[Ve.ORIGINAL_TEXT_PROVIDER_KEY] = l.title), t("setCurrentSourceSection", u);
    };
    (c = l.sections) != null && c[s] || (yield n("mediawiki/fetchPageContent", r, { root: !0 }), n("mediawiki/resolvePageContentReferences", r, {
      root: !0
    }).then(() => d())), d();
  });
}
function T0(s, a) {
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
function D0({
  dispatch: e,
  getters: t,
  commit: n,
  state: o
}) {
  const s = t.getCurrentProposedTranslation, { currentSourceSection: a, currentMTProvider: i } = o;
  a.setTranslationForSelectedTranslationUnit(
    s,
    i
  ), Fi({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function L0(a, i) {
  return K(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
    const r = document.createElement("div");
    r.innerHTML = s, r.querySelectorAll(".sx-edit-dummy-node").forEach((f) => f.remove()), s = r.innerHTML;
    const { currentSourceSection: l, targetLanguage: d, currentMTProvider: c } = e, { selectedContentTranslationUnit: u } = l;
    if (u instanceof Et) {
      const f = o.getCurrentPage, m = o.getCurrentTargetPage, C = f.title, x = m == null ? void 0 : m.title, A = Array.from(r.children).find(
        (L) => Os(L)
      );
      A && (s = yield tn.parseTemplateWikitext(
        ou(A),
        d,
        x || C
      ));
    }
    l.setTranslationForSelectedTranslationUnit(
      s,
      c
    ), Fi({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
  });
}
function P0({ state: e, dispatch: t }) {
  const { followingTranslationUnit: n } = e.currentSourceSection;
  n && t("selectTranslationUnitById", n.id);
}
function N0({ state: e, dispatch: t }) {
  const { selectedContentTranslationUnitIndex: n, contentTranslationUnits: o } = e.currentSourceSection, s = n - 1;
  let a = 0;
  s > -1 && (a = o[s].id), t("selectTranslationUnitById", a);
}
function F0(s) {
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
    const d = Ve.getStorageKey(
      a,
      i
    ), c = mw.storage.get(d) || r[0];
    o("setCurrentMTProvider", c);
  });
}
function M0({ commit: e, dispatch: t, state: n }, o) {
  e("setCurrentMTProvider", o);
  const { currentSourceSection: s } = n, { selectedTranslationUnitId: a } = s;
  t("translateTranslationUnitById", { id: a, provider: o });
}
function O0(i, r) {
  return K(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
    const { currentSourceSection: l, targetLanguage: d } = t;
    if (l.hasProposedTranslationByTranslationUnitId(s, a))
      return;
    const c = o.getCurrentPage, u = o.getCurrentTargetPage, g = c.title, f = u == null ? void 0 : u.title;
    let m = l.getOriginalContentByTranslationUnitId(s);
    const C = l.getContentTranslationUnitById(s);
    let x;
    if (e("addMtRequestsPending", s), x = yield n(
      "translator/translateContent",
      { originalContent: m, provider: a },
      { root: !0 }
    ), !x) {
      e("removeMtRequestsPending", s);
      return;
    }
    if (C instanceof Et) {
      const A = document.createElement("div");
      A.innerHTML = x;
      const L = Array.from(A.children).find(
        (R) => Os(R)
      );
      if (L && Hm(L)) {
        const R = su(L);
        C.setBlockTemplateAdaptationInfo(a, R), x = yield tn.parseTemplateWikitext(
          ou(L),
          d,
          f || g
        );
      } else
        x = "";
    }
    e("setProposedTranslationForTranslationUnitById", {
      id: s,
      provider: a,
      proposedTranslation: x
    }), e("removeMtRequestsPending", s);
  });
}
function B0({
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
function I0({ commit: e }) {
  e("setCurrentSectionSuggestion", null);
}
const $0 = {
  applyEditedTranslationToSelectedTranslationUnit: L0,
  applyProposedTranslationToSelectedTranslationUnit: D0,
  clearCurrentSectionSuggestion: I0,
  clearPendingSaveTranslationRequests: b0,
  fetchCurrentSectionSuggestionLanguageTitles: E0,
  getCXServerToken: S0,
  initializeMTProviders: F0,
  initializeSectionTranslation: C0,
  restoreSectionTranslation: x0,
  selectNextTranslationUnit: P0,
  selectPageSectionByTitle: A0,
  selectPageSectionByIndex: k0,
  selectPreviousTranslationUnit: N0,
  selectTranslationUnitById: T0,
  startFavoriteSectionTranslation: w0,
  translateTranslationUnitById: O0,
  translateSelectedTranslationUnitForAllProviders: B0,
  updateMTProvider: M0
}, U0 = {
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
    e.currentSectionSuggestion = t && new Vt(Mt(wt({}, t), {
      missing: (t == null ? void 0 : t.missingSections) || {},
      present: (t == null ? void 0 : t.presentSections) || {}
    }));
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
    s instanceof Et ? s.blockTemplateProposedTranslations[n] = o : s instanceof pn && s.addProposedTranslation(n, o);
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
  }
}, R0 = {
  namespaced: !0,
  state: v0,
  getters: y0,
  actions: $0,
  mutations: U0
}, po = Em({
  modules: { translator: d_, suggestions: j_, mediawiki: _0, application: R0 }
});
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const Wt = typeof window != "undefined";
function V0(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Fe = Object.assign;
function Sa(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = yt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Lo = () => {
}, yt = Array.isArray;
function De(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const z0 = /\/$/, j0 = (e) => e.replace(z0, "");
function wa(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const r = t.indexOf("#");
  let l = t.indexOf("?");
  return r < l && r >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, r > -1 ? r : t.length), s = e(a)), r > -1 && (o = o || t.slice(0, r), i = t.slice(r, t.length)), o = G0(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function H0(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function zr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function jr(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && wn(t.matched[o], n.matched[s]) && pu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function wn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function pu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!q0(e[n], t[n]))
      return !1;
  return !0;
}
function q0(e, t) {
  return yt(e) ? Hr(e, t) : yt(t) ? Hr(t, e) : e === t;
}
function Hr(e, t) {
  return yt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function G0(e, t) {
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
var zo;
(function(e) {
  e.pop = "pop", e.push = "push";
})(zo || (zo = {}));
var Po;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Po || (Po = {}));
function K0(e) {
  if (!e)
    if (Wt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), j0(e);
}
const W0 = /^[^#]+#/;
function X0(e, t) {
  return e.replace(W0, "#") + t;
}
function Y0(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const ta = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function J0(e) {
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
    t = Y0(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function qr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Wa = /* @__PURE__ */ new Map();
function Z0(e, t) {
  Wa.set(e, t);
}
function Q0(e) {
  const t = Wa.get(e);
  return Wa.delete(e), t;
}
let e1 = () => location.protocol + "//" + location.host;
function hu(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(r);
    return l[0] !== "/" && (l = "/" + l), zr(l, "");
  }
  return zr(n, e) + o + s;
}
function t1(e, t, n, o) {
  let s = [], a = [], i = null;
  const r = ({ state: g }) => {
    const f = hu(e, location), m = n.value, C = t.value;
    let x = 0;
    if (g) {
      if (n.value = f, t.value = g, i && i === m) {
        i = null;
        return;
      }
      x = C ? g.position - C.position : 0;
    } else
      o(f);
    s.forEach((A) => {
      A(n.value, m, {
        delta: x,
        type: zo.pop,
        direction: x ? x > 0 ? Po.forward : Po.back : Po.unknown
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
    g.state && g.replaceState(Fe({}, g.state, { scroll: ta() }), "");
  }
  function u() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", r), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", r), window.addEventListener("beforeunload", c), {
    pauseListeners: l,
    listen: d,
    destroy: u
  };
}
function Gr(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? ta() : null
  };
}
function n1(e) {
  const { history: t, location: n } = window, o = {
    value: hu(e, n)
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
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : e1() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (f) {
      ({}).NODE_ENV !== "production" ? De("Error with push/replace State", f) : console.error(f), n[c ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const c = Fe({}, t.state, Gr(
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
        scroll: ta()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && De(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(c.current, c, !0);
    const u = Fe({}, Gr(o.value, l, null), { position: c.position + 1 }, d);
    a(l, u, !1), o.value = l;
  }
  return {
    location: o,
    state: s,
    push: r,
    replace: i
  };
}
function o1(e) {
  e = K0(e);
  const t = n1(e), n = t1(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = Fe({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: X0.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function s1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && De(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), o1(e);
}
function a1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function mu(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const un = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Xa = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Kr;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Kr || (Kr = {}));
const i1 = {
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
    return `Redirected from "${e.fullPath}" to "${l1(t)}" via a navigation guard.`;
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
function ho(e, t) {
  return {}.NODE_ENV !== "production" ? Fe(new Error(i1[e](t)), {
    type: e,
    [Xa]: !0
  }, t) : Fe(new Error(), {
    type: e,
    [Xa]: !0
  }, t);
}
function qt(e, t) {
  return e instanceof Error && Xa in e && (t == null || !!(e.type & t));
}
const r1 = ["params", "query", "hash"];
function l1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of r1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Wr = "[^/]+?", c1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, u1 = /[.+*?^${}()[\]/\\]/g;
function d1(e, t) {
  const n = Fe({}, c1, t), o = [];
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
        u || (s += "/"), s += g.value.replace(u1, "\\$&"), f += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: C, optional: x, regexp: A } = g;
        a.push({
          name: m,
          repeatable: C,
          optional: x
        });
        const L = A || Wr;
        if (L !== Wr) {
          f += 10;
          try {
            new RegExp(`(${L})`);
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${L}): ` + O.message);
          }
        }
        let R = C ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
        u || (R = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        x && d.length < 2 ? `(?:/${R})` : "/" + R), x && (R += "?"), s += R, f += 20, x && (f += -8), C && (f += -20), L === ".*" && (f += -50);
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
          const { value: m, repeatable: C, optional: x } = f, A = m in d ? d[m] : "";
          if (yt(A) && !C)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const L = yt(A) ? A.join("/") : A;
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
function g1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function f1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = g1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Xr(o))
      return 1;
    if (Xr(s))
      return -1;
  }
  return s.length - o.length;
}
function Xr(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const p1 = {
  type: 0,
  value: ""
}, h1 = /[a-zA-Z0-9_]/;
function m1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[p1]];
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
        l === "(" ? n = 2 : h1.test(l) ? g() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && r--);
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
function _1(e, t, n) {
  const o = d1(m1(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && De(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
function v1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Zr({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return o.get(c);
  }
  function a(c, u, g) {
    const f = !g, m = y1(c);
    ({}).NODE_ENV !== "production" && C1(m, u), m.aliasOf = g && g.record;
    const C = Zr(t, c), x = [
      m
    ];
    if ("alias" in c) {
      const R = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const O of R)
        x.push(Fe({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: O,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let A, L;
    for (const R of x) {
      const { path: O } = R;
      if (u && O[0] !== "/") {
        const J = u.record.path, we = J[J.length - 1] === "/" ? "" : "/";
        R.path = u.record.path + (O && we + O);
      }
      if ({}.NODE_ENV !== "production" && R.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (A = _1(R, u, C), {}.NODE_ENV !== "production" && u && O[0] === "/" && x1(A, u), g ? (g.alias.push(A), {}.NODE_ENV !== "production" && w1(g, A)) : (L = L || A, L !== A && L.alias.push(A), f && c.name && !Jr(A) && i(c.name)), m.children) {
        const J = m.children;
        for (let we = 0; we < J.length; we++)
          a(J[we], A, g && g.children[we]);
      }
      g = g || A, (A.record.components && Object.keys(A.record.components).length || A.record.name || A.record.redirect) && l(A);
    }
    return L ? () => {
      i(L);
    } : Lo;
  }
  function i(c) {
    if (mu(c)) {
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
    for (; u < n.length && f1(c, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (c.record.path !== n[u].record.path || !_u(c, n[u])); )
      u++;
    n.splice(u, 0, c), c.record.name && !Jr(c) && o.set(c.record.name, c);
  }
  function d(c, u) {
    let g, f = {}, m, C;
    if ("name" in c && c.name) {
      if (g = o.get(c.name), !g)
        throw ho(1, {
          location: c
        });
      if ({}.NODE_ENV !== "production") {
        const L = Object.keys(c.params || {}).filter((R) => !g.keys.find((O) => O.name === R));
        L.length && De(`Discarded invalid param(s) "${L.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      C = g.record.name, f = Fe(
        // paramsFromLocation is a new object
        Yr(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((L) => !L.optional).map((L) => L.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && Yr(c.params, g.keys.map((L) => L.name))
      ), m = g.stringify(f);
    } else if ("path" in c)
      m = c.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && De(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), g = n.find((L) => L.re.test(m)), g && (f = g.parse(m), C = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((L) => L.re.test(u.path)), !g)
        throw ho(1, {
          location: c,
          currentLocation: u
        });
      C = g.record.name, f = Fe({}, u.params, c.params), m = g.stringify(f);
    }
    const x = [];
    let A = g;
    for (; A; )
      x.unshift(A.record), A = A.parent;
    return {
      name: C,
      path: m,
      params: f,
      matched: x,
      meta: S1(x)
    };
  }
  return e.forEach((c) => a(c)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: r, getRecordMatcher: s };
}
function Yr(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function y1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: b1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function b1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function Jr(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function S1(e) {
  return e.reduce((t, n) => Fe(t, n.meta), {});
}
function Zr(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Ya(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function w1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ya.bind(null, n)))
      return De(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ya.bind(null, n)))
      return De(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function C1(e, t) {
  t && t.record.name && !e.name && !e.path && De(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function x1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ya.bind(null, n)))
      return De(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function _u(e, t) {
  return t.children.some((n) => n === e || _u(e, n));
}
const vu = /#/g, E1 = /&/g, A1 = /\//g, k1 = /=/g, T1 = /\?/g, yu = /\+/g, D1 = /%5B/g, L1 = /%5D/g, bu = /%5E/g, P1 = /%60/g, Su = /%7B/g, N1 = /%7C/g, wu = /%7D/g, F1 = /%20/g;
function Mi(e) {
  return encodeURI("" + e).replace(N1, "|").replace(D1, "[").replace(L1, "]");
}
function M1(e) {
  return Mi(e).replace(Su, "{").replace(wu, "}").replace(bu, "^");
}
function Ja(e) {
  return Mi(e).replace(yu, "%2B").replace(F1, "+").replace(vu, "%23").replace(E1, "%26").replace(P1, "`").replace(Su, "{").replace(wu, "}").replace(bu, "^");
}
function O1(e) {
  return Ja(e).replace(k1, "%3D");
}
function B1(e) {
  return Mi(e).replace(vu, "%23").replace(T1, "%3F");
}
function I1(e) {
  return e == null ? "" : B1(e).replace(A1, "%2F");
}
function jo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && De(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function $1(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(yu, " "), i = a.indexOf("="), r = jo(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : jo(a.slice(i + 1));
    if (r in t) {
      let d = t[r];
      yt(d) || (d = t[r] = [d]), d.push(l);
    } else
      t[r] = l;
  }
  return t;
}
function Qr(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = O1(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (yt(o) ? o.map((a) => a && Ja(a)) : [o && Ja(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function U1(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = yt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const R1 = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), el = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), na = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Cu = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Za = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Co() {
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
    const l = (u) => {
      u === !1 ? r(ho(4, {
        from: n,
        to: t
      })) : u instanceof Error ? r(u) : a1(u) ? r(ho(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? V1(l, t, n) : l);
    let c = Promise.resolve(d);
    if (e.length < 3 && (c = c.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        c = c.then((g) => l._called ? g : (De(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !l._called) {
        De(u), r(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((u) => r(u));
  });
}
function V1(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && De(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ca(e, t, n, o) {
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
        if (z1(r)) {
          const d = (r.__vccOpts || r)[t];
          d && s.push(hn(d, n, o, a, i));
        } else {
          let l = r();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (De(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const c = V0(d) ? d.default : d;
            a.components[i] = c;
            const g = (c.__vccOpts || c)[t];
            return g && hn(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function z1(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function tl(e) {
  const t = Ze(na), n = Ze(Cu), o = y(() => t.resolve(lo(e.to))), s = y(() => {
    const { matched: l } = o.value, { length: d } = l, c = l[d - 1], u = n.matched;
    if (!c || !u.length)
      return -1;
    const g = u.findIndex(wn.bind(null, c));
    if (g > -1)
      return g;
    const f = nl(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      nl(c) === f && // avoid comparing the child with its parent
      u[u.length - 1].path !== f ? u.findIndex(wn.bind(null, l[d - 2])) : g
    );
  }), a = y(() => s.value > -1 && G1(n.params, o.value.params)), i = y(() => s.value > -1 && s.value === n.matched.length - 1 && pu(n.params, o.value.params));
  function r(l = {}) {
    return q1(l) ? t[lo(e.replace) ? "replace" : "push"](
      lo(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Lo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Wt) {
    const l = yi();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), Ig(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = i.value;
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
const j1 = /* @__PURE__ */ ec({
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
  useLink: tl,
  setup(e, { slots: t }) {
    const n = Xn(tl(e)), { options: o } = Ze(na), s = y(() => ({
      [ol(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ol(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), H1 = j1;
function q1(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function G1(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!yt(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function nl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ol = (e, t, n) => e != null ? e : t != null ? t : n, K1 = /* @__PURE__ */ ec({
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
    ({}).NODE_ENV !== "production" && X1();
    const o = Ze(Za), s = y(() => e.route || o.value), a = Ze(el, 0), i = y(() => {
      let d = lo(a);
      const { matched: c } = s.value;
      let u;
      for (; (u = c[d]) && !u.components; )
        d++;
      return d;
    }), r = y(() => s.value.matched[i.value]);
    vs(el, y(() => i.value + 1)), vs(R1, r), vs(Za, s);
    const l = ne();
    return Ke(() => [l.value, r.value, e.name], ([d, c, u], [g, f, m]) => {
      c && (c.instances[u] = d, f && f !== c && d && d === g && (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards), c.updateGuards.size || (c.updateGuards = f.updateGuards))), d && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!f || !wn(c, f) || !g) && (c.enterCallbacks[u] || []).forEach((C) => C(d));
    }, { flush: "post" }), () => {
      const d = s.value, c = e.name, u = r.value, g = u && u.components[c];
      if (!g)
        return sl(n.default, { Component: g, route: d });
      const f = u.props[c], m = f ? f === !0 ? d.params : typeof f == "function" ? f(d) : f : null, x = Ro(g, Fe({}, m, t, {
        onVnodeUnmounted: (A) => {
          A.component.isUnmounted && (u.instances[c] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && Wt && x.ref) {
        const A = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (yt(x.ref) ? x.ref.map((R) => R.i) : [x.ref.i]).forEach((R) => {
          R.__vrv_devtools = A;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        sl(n.default, { Component: x, route: d }) || x
      );
    };
  }
});
function sl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const W1 = K1;
function X1() {
  const e = yi(), t = e.parent && e.parent.type.name;
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
function xo(e, t) {
  const n = Fe({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => sv(o, ["instances", "children", "aliasOf"]))
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
function ps(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Y1 = 0;
function J1(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Y1++;
  zc({
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
        value: xo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: c, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        c.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: xu
        });
      }
      yt(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let f = ku, m = "";
        g.isExactActive ? (f = Au, m = "This is exactly active") : g.isActive && (f = Eu, m = "This link is active"), c.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: f
        });
      }));
    }), Ke(t.currentRoute, () => {
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
        guard: ps("beforeEach"),
        from: xo(u, "Current Location during this navigation"),
        to: xo(c, "Target location")
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
        guard: ps("afterEach")
      };
      g ? (f.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, f.status = ps("❌")) : f.status = ps("✅"), f.from = xo(u, "Current Location during this navigation"), f.to = xo(c, "Target location"), s.addTimelineEvent({
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
      u.forEach(Lu), c.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        Qa(g, c.filter.toLowerCase())
      ))), u.forEach((g) => Du(g, t.currentRoute.value)), c.rootNodes = u.map(Tu);
    }
    let d;
    s.on.getInspectorTree((c) => {
      d = c, c.app === e && c.inspectorId === r && l();
    }), s.on.getInspectorState((c) => {
      if (c.app === e && c.inspectorId === r) {
        const g = n.getRoutes().find((f) => f.record.__vd_id === c.nodeId);
        g && (c.state = {
          options: Q1(g)
        });
      }
    }), s.sendInspectorTree(r), s.sendInspectorState(r);
  });
}
function Z1(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Q1(e) {
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
        display: e.keys.map((o) => `${o.name}${Z1(o)}`).join(" "),
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
const xu = 15485081, Eu = 2450411, Au = 8702998, ev = 2282478, ku = 16486972, tv = 6710886;
function Tu(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: ev
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ku
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: xu
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Au
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Eu
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: tv
  });
  let o = n.__vd_id;
  return o == null && (o = String(nv++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Tu)
  };
}
let nv = 0;
const ov = /^\/(.*)\/([a-z]*)$/;
function Du(e, t) {
  const n = t.matched.length && wn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => wn(o, e.record))), e.children.forEach((o) => Du(o, t));
}
function Lu(e) {
  e.__vd_match = !1, e.children.forEach(Lu);
}
function Qa(e, t) {
  const n = String(e.re).match(ov);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Qa(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = jo(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Qa(i, t));
}
function sv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function av(e) {
  const t = v1(e.routes, e), n = e.parseQuery || $1, o = e.stringifyQuery || Qr, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Co(), i = Co(), r = Co(), l = ng(un);
  let d = un;
  Wt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Sa.bind(null, (k) => "" + k), u = Sa.bind(null, I1), g = (
    // @ts-expect-error: intentionally avoid the type check
    Sa.bind(null, jo)
  );
  function f(k, Y) {
    let j, Q;
    return mu(k) ? (j = t.getRecordMatcher(k), Q = Y) : Q = k, t.addRoute(Q, j);
  }
  function m(k) {
    const Y = t.getRecordMatcher(k);
    Y ? t.removeRoute(Y) : {}.NODE_ENV !== "production" && De(`Cannot remove non-existent route "${String(k)}"`);
  }
  function C() {
    return t.getRoutes().map((k) => k.record);
  }
  function x(k) {
    return !!t.getRecordMatcher(k);
  }
  function A(k, Y) {
    if (Y = Fe({}, Y || l.value), typeof k == "string") {
      const de = wa(n, k, Y.path), h = t.resolve({ path: de.path }, Y), S = s.createHref(de.fullPath);
      return {}.NODE_ENV !== "production" && (S.startsWith("//") ? De(`Location "${k}" resolved to "${S}". A resolved location cannot start with multiple slashes.`) : h.matched.length || De(`No match found for location with path "${k}"`)), Fe(de, h, {
        params: g(h.params),
        hash: jo(de.hash),
        redirectedFrom: void 0,
        href: S
      });
    }
    let j;
    if ("path" in k)
      ({}).NODE_ENV !== "production" && "params" in k && !("name" in k) && // @ts-expect-error: the type is never
      Object.keys(k.params).length && De(`Path "${// @ts-expect-error: the type is never
      k.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), j = Fe({}, k, {
        path: wa(n, k.path, Y.path).path
      });
    else {
      const de = Fe({}, k.params);
      for (const h in de)
        de[h] == null && delete de[h];
      j = Fe({}, k, {
        params: u(k.params)
      }), Y.params = u(Y.params);
    }
    const Q = t.resolve(j, Y), ke = k.hash || "";
    ({}).NODE_ENV !== "production" && ke && !ke.startsWith("#") && De(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`), Q.params = c(g(Q.params));
    const Ie = H0(o, Fe({}, k, {
      hash: M1(ke),
      path: Q.path
    })), ge = s.createHref(Ie);
    return {}.NODE_ENV !== "production" && (ge.startsWith("//") ? De(`Location "${k}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || De(`No match found for location with path "${"path" in k ? k.path : k}"`)), Fe({
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
        o === Qr ? U1(k.query) : k.query || {}
      )
    }, Q, {
      redirectedFrom: void 0,
      href: ge
    });
  }
  function L(k) {
    return typeof k == "string" ? wa(n, k, l.value.path) : Fe({}, k);
  }
  function R(k, Y) {
    if (d !== k)
      return ho(8, {
        from: Y,
        to: k
      });
  }
  function O(k) {
    return X(k);
  }
  function J(k) {
    return O(Fe(L(k), { replace: !0 }));
  }
  function we(k) {
    const Y = k.matched[k.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: j } = Y;
      let Q = typeof j == "function" ? j(k) : j;
      if (typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = L(Q) : (
        // force empty params
        { path: Q }
      ), Q.params = {}), {}.NODE_ENV !== "production" && !("path" in Q) && !("name" in Q))
        throw De(`Invalid redirect found:
${JSON.stringify(Q, null, 2)}
 when navigating to "${k.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Fe({
        query: k.query,
        hash: k.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in Q ? {} : k.params
      }, Q);
    }
  }
  function X(k, Y) {
    const j = d = A(k), Q = l.value, ke = k.state, Ie = k.force, ge = k.replace === !0, de = we(j);
    if (de)
      return X(
        Fe(L(de), {
          state: typeof de == "object" ? Fe({}, ke, de.state) : ke,
          force: Ie,
          replace: ge
        }),
        // keep original redirectedFrom if it exists
        Y || j
      );
    const h = j;
    h.redirectedFrom = Y;
    let S;
    return !Ie && jr(o, Q, j) && (S = ho(16, { to: h, from: Q }), on(
      Q,
      Q,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (S ? Promise.resolve(S) : be(h, Q)).catch((E) => qt(E) ? (
      // navigation redirects still mark the router as ready
      qt(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? E : st(E)
    ) : (
      // reject any unknown error
      me(E, h, Q)
    )).then((E) => {
      if (E) {
        if (qt(
          E,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          jr(o, A(E.to), h) && // and we have done it a couple of times
          Y && // @ts-expect-error: added only in dev
          (Y._count = Y._count ? (
            // @ts-expect-error
            Y._count + 1
          ) : 1) > 10 ? (De(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : X(
            // keep options
            Fe({
              // preserve an existing replacement but allow the redirect to override it
              replace: ge
            }, L(E.to), {
              state: typeof E.to == "object" ? Fe({}, ke, E.to.state) : ke,
              force: Ie
            }),
            // preserve the original redirectedFrom if any
            Y || h
          );
      } else
        E = Be(h, Q, !0, ge, ke);
      return ue(h, Q, E), E;
    });
  }
  function W(k, Y) {
    const j = R(k, Y);
    return j ? Promise.reject(j) : Promise.resolve();
  }
  function be(k, Y) {
    let j;
    const [Q, ke, Ie] = iv(k, Y);
    j = Ca(Q.reverse(), "beforeRouteLeave", k, Y);
    for (const de of Q)
      de.leaveGuards.forEach((h) => {
        j.push(hn(h, k, Y));
      });
    const ge = W.bind(null, k, Y);
    return j.push(ge), to(j).then(() => {
      j = [];
      for (const de of a.list())
        j.push(hn(de, k, Y));
      return j.push(ge), to(j);
    }).then(() => {
      j = Ca(ke, "beforeRouteUpdate", k, Y);
      for (const de of ke)
        de.updateGuards.forEach((h) => {
          j.push(hn(h, k, Y));
        });
      return j.push(ge), to(j);
    }).then(() => {
      j = [];
      for (const de of k.matched)
        if (de.beforeEnter && !Y.matched.includes(de))
          if (yt(de.beforeEnter))
            for (const h of de.beforeEnter)
              j.push(hn(h, k, Y));
          else
            j.push(hn(de.beforeEnter, k, Y));
      return j.push(ge), to(j);
    }).then(() => (k.matched.forEach((de) => de.enterCallbacks = {}), j = Ca(Ie, "beforeRouteEnter", k, Y), j.push(ge), to(j))).then(() => {
      j = [];
      for (const de of i.list())
        j.push(hn(de, k, Y));
      return j.push(ge), to(j);
    }).catch((de) => qt(
      de,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? de : Promise.reject(de));
  }
  function ue(k, Y, j) {
    for (const Q of r.list())
      Q(k, Y, j);
  }
  function Be(k, Y, j, Q, ke) {
    const Ie = R(k, Y);
    if (Ie)
      return Ie;
    const ge = Y === un, de = Wt ? history.state : {};
    j && (Q || ge ? s.replace(k.fullPath, Fe({
      scroll: ge && de && de.scroll
    }, ke)) : s.push(k.fullPath, ke)), l.value = k, on(k, Y, j, ge), st();
  }
  let G;
  function le() {
    G || (G = s.listen((k, Y, j) => {
      if (!jt.listening)
        return;
      const Q = A(k), ke = we(Q);
      if (ke) {
        X(Fe(ke, { replace: !0 }), Q).catch(Lo);
        return;
      }
      d = Q;
      const Ie = l.value;
      Wt && Z0(qr(Ie.fullPath, j.delta), ta()), be(Q, Ie).catch((ge) => qt(
        ge,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? ge : qt(
        ge,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (X(
        ge.to,
        Q
        // avoid an uncaught rejection, let push call triggerError
      ).then((de) => {
        qt(
          de,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !j.delta && j.type === zo.pop && s.go(-1, !1);
      }).catch(Lo), Promise.reject()) : (j.delta && s.go(-j.delta, !1), me(ge, Q, Ie))).then((ge) => {
        ge = ge || Be(
          // after navigation, all matched components are resolved
          Q,
          Ie,
          !1
        ), ge && (j.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !qt(
          ge,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-j.delta, !1) : j.type === zo.pop && qt(
          ge,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), ue(Q, Ie, ge);
      }).catch(Lo);
    }));
  }
  let Me = Co(), qe = Co(), Ue;
  function me(k, Y, j) {
    st(k);
    const Q = qe.list();
    return Q.length ? Q.forEach((ke) => ke(k, Y, j)) : ({}.NODE_ENV !== "production" && De("uncaught error during route navigation:"), console.error(k)), Promise.reject(k);
  }
  function _e() {
    return Ue && l.value !== un ? Promise.resolve() : new Promise((k, Y) => {
      Me.add([k, Y]);
    });
  }
  function st(k) {
    return Ue || (Ue = !k, le(), Me.list().forEach(([Y, j]) => k ? j(k) : Y()), Me.reset()), k;
  }
  function on(k, Y, j, Q) {
    const { scrollBehavior: ke } = e;
    if (!Wt || !ke)
      return Promise.resolve();
    const Ie = !j && Q0(qr(k.fullPath, 0)) || (Q || !j) && history.state && history.state.scroll || null;
    return Ko().then(() => ke(k, Y, Ie)).then((ge) => ge && J0(ge)).catch((ge) => me(ge, k, Y));
  }
  const pt = (k) => s.go(k);
  let ct;
  const ut = /* @__PURE__ */ new Set(), jt = {
    currentRoute: l,
    listening: !0,
    addRoute: f,
    removeRoute: m,
    hasRoute: x,
    getRoutes: C,
    resolve: A,
    options: e,
    push: O,
    replace: J,
    go: pt,
    back: () => pt(-1),
    forward: () => pt(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: r.add,
    onError: qe.add,
    isReady: _e,
    install(k) {
      const Y = this;
      k.component("RouterLink", H1), k.component("RouterView", W1), k.config.globalProperties.$router = Y, Object.defineProperty(k.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => lo(l)
      }), Wt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ct && l.value === un && (ct = !0, O(s.location).catch((ke) => {
        ({}).NODE_ENV !== "production" && De("Unexpected error when starting the router:", ke);
      }));
      const j = {};
      for (const ke in un)
        j[ke] = y(() => l.value[ke]);
      k.provide(na, Y), k.provide(Cu, Xn(j)), k.provide(Za, l);
      const Q = k.unmount;
      ut.add(k), k.unmount = function() {
        ut.delete(k), ut.size < 1 && (d = un, G && G(), G = null, l.value = un, ct = !1, Ue = !1), Q();
      }, {}.NODE_ENV !== "production" && Wt && J1(k, Y, t);
    }
  };
  return jt;
}
function to(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function iv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const r = t.matched[i];
    r && (e.matched.find((d) => wn(d, r)) ? o.push(r) : n.push(r));
    const l = e.matched[i];
    l && (t.matched.find((d) => wn(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function bt() {
  return Ze(na);
}
const rv = {
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
}, lv = {
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
}, cv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], uv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, dv = {
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
}, gv = {
  languages: rv,
  scriptgroups: lv,
  rtlscripts: cv,
  regiongroups: uv,
  territories: dv
};
var rt = gv;
function ts(e) {
  return !!rt.languages[e];
}
function An(e) {
  return ts(e) && rt.languages[e].length === 1 ? rt.languages[e][0] : !1;
}
function fv() {
  return rt.languages;
}
function ns(e) {
  var t = An(e);
  return t ? ns(t) : ts(e) ? rt.languages[e][0] : "Zyyy";
}
function Oi(e) {
  var t = An(e);
  return t ? Oi(t) : ts(e) && rt.languages[e][1] || "UNKNOWN";
}
function Ho(e) {
  var t = An(e);
  return t ? Ho(t) : ts(e) && rt.languages[e][2] || e;
}
function pv() {
  var e, t = {};
  for (e in rt.languages)
    An(e) || (t[e] = Ho(e));
  return t;
}
function Pu(e) {
  var t, n, o = [];
  for (t in rt.languages)
    if (!An(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ns(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function hv(e) {
  return Pu([e]);
}
function Nu(e) {
  var t;
  for (t in rt.scriptgroups)
    if (rt.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Bi(e) {
  return Nu(ns(e));
}
function Fu(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = An(n) || n, a = Bi(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Mu(e) {
  var t, n, o, s = {};
  for (t in rt.languages)
    if (!An(t)) {
      for (n = 0; n < e.length; n++)
        if (Oi(t).includes(e[n])) {
          o = Bi(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function mv(e) {
  return Mu([e]);
}
function _v(e) {
  var t, n, o, s = [];
  for (t = Fu(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function vv(e, t) {
  var n = Ho(e) || e, o = Ho(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Ou(e) {
  return rt.rtlscripts.includes(ns(e));
}
function yv(e) {
  return Ou(e) ? "rtl" : "ltr";
}
function bv(e) {
  return rt.territories[e] || [];
}
function Sv(e, t) {
  t.target ? rt.languages[e] = [t.target] : rt.languages[e] = [t.script, t.regions, t.autonym];
}
var Pe = {
  addLanguage: Sv,
  getAutonym: Ho,
  getAutonyms: pv,
  getDir: yv,
  getGroupOfScript: Nu,
  getLanguages: fv,
  getLanguagesByScriptGroup: Fu,
  getLanguagesByScriptGroupInRegion: mv,
  getLanguagesByScriptGroupInRegions: Mu,
  getLanguagesInScript: hv,
  getLanguagesInScripts: Pu,
  getLanguagesInTerritory: bv,
  getRegions: Oi,
  getScript: ns,
  getScriptGroupOfLanguage: Bi,
  isKnown: ts,
  isRedirect: An,
  isRtl: Ou,
  sortByScriptGroup: _v,
  sortByAutonym: vv
};
function os() {
  const e = y(
    () => po.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: y(
      () => po.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: e
  };
}
function ye(e) {
  const t = y(() => e.state.application.sourceLanguage), n = y(() => e.state.application.targetLanguage), o = y(
    () => e.state.application.currentMTProvider
  ), s = y(
    () => e.state.application.currentSectionSuggestion
  ), a = y(
    () => e.state.application.currentSourceSection
  ), i = y(
    () => Pe.getAutonym(t.value)
  ), r = y(
    () => Pe.getAutonym(n.value)
  ), l = y(
    () => {
      var f;
      return (f = a.value) == null ? void 0 : f.isTitleSelected;
    }
  ), d = y(
    () => {
      var f;
      return (f = a.value) == null ? void 0 : f.selectedContentTranslationUnit;
    }
  ), c = y(
    () => e.getters["application/getCurrentProposedTranslation"]
  ), u = y(
    () => e.getters["application/getCurrentPage"]
  ), g = y(
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
const wv = (e, t) => {
  const n = new URLSearchParams(location.search), o = n.get("from"), s = n.get("to"), a = je.getCurrentWikiLanguageCode(), i = (g) => !e || Array.isArray(e) && e.includes(g), r = (g) => t.includes(g), l = {
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
}, Bu = (e) => {
  if (!history.pushState)
    return;
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), t.set("sx", !0), t.delete("title"), vo(Object.fromEntries(t));
}, vo = (e) => {
  history.replaceState(
    {},
    document.title,
    ru("Special:ContentTranslation", e)
  );
}, Ii = (e, t, n, o) => {
  const s = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), a = je.getCurrentWikiLanguageCode();
  s && t !== a && (location.href = je.getCXUrl(
    n,
    null,
    e,
    t,
    { sx: !0, section: o }
  ));
}, $i = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), vo(Object.fromEntries(o));
}, Iu = () => K(void 0, null, function* () {
  yield po.dispatch("mediawiki/fetchSupportedLanguageCodes");
  const { enabledTargetLanguages: e, supportedLanguageCodes: t } = os(), { sourceLanguage: n, targetLanguage: o } = wv(
    e.value,
    t.value
  ), s = new URLSearchParams(location.search), a = s.get("page"), i = s.get("section");
  Ii(
    n,
    o,
    a,
    i
  ), $i(po, n, o);
}), Ui = (e) => (t, n) => {
  const { sourceLanguage: o, targetLanguage: s } = ye(e);
  t === n && (t = s.value, n = o.value), Ii(
    t,
    n,
    null,
    null
  ), $i(e, t, n), e.dispatch("suggestions/initializeSuggestions");
}, Cv = (e) => (t, n) => K(void 0, null, function* () {
  const { sourceLanguage: o, targetLanguage: s, currentSectionSuggestion: a } = ye(e);
  t === n && (t = s.value, n = o.value);
  const i = e.getters["application/getCurrentLanguageTitleGroup"], r = i.getTitleForLanguage(t);
  Ii(
    t,
    n,
    r,
    null
  ), $i(e, t, n);
  let l = new Vt({
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
function xv(e) {
  return e.$el = $(e), e;
}
function Ev(e, t, n, o) {
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
function Av() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function kv(e, t) {
  return K(this, null, function* () {
    yield Ri(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = xv(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
function Tv(e) {
  const t = mw.Title.newFromText(e[0].getAttribute("title"));
  return ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(t);
}
const Dv = {
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
    const n = ne(null);
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
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Tv;
      const c = yield kv(l, n.value);
      t.emit("ready"), n.value.appendChild(c.$element[0]), o = Ev(
        c,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Av, o.focus();
    })), { sxeditor: n };
  }
}, Lv = ["lang", "dir"], Pv = /* @__PURE__ */ w("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ w("div", { class: "toolbar" })
], -1), Nv = ["lang", "dir"];
function Fv(e, t, n, o, s, a) {
  return v(), T("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    Pv,
    w("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, Nv)
  ], 8, Lv);
}
const Mv = /* @__PURE__ */ V(Dv, [["render", Fv]]);
function Ri() {
  return mw.loader.using("mw.cx3.ve");
}
let ei = null;
function Ov(e) {
  if (ei)
    return Promise.resolve(ei);
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
function Bv(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Iv(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), r = {
    $schema: "/analytics/mediawiki/content_translation_event/1.2.0",
    translation_type: "section",
    wiki_db: n,
    access_method: t,
    user_name: i,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, r, e))
  ) : Ov(i).then((l) => {
    ei = l, mw.eventLog.submit(
      s,
      Object.assign({}, r, e, {
        user_global_edit_count: l,
        user_global_edit_count_bucket: Bv(l)
      })
    );
  });
}
const $u = Symbol("event-logging-context"), nn = function() {
  const e = Ze($u);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, $v = () => ({
  install: (e) => {
    e.provide($u, Iv);
  }
}), Uv = (e) => {
  const t = nn(), n = Se(), o = bt(), { currentSourcePage: s, sourceLanguage: a, targetLanguage: i } = ye(n), r = Ui(n);
  return () => K(void 0, null, function* () {
    const {
      sourceLanguage: l,
      targetLanguage: d,
      sourceTitle: c,
      pageRevision: u
    } = e;
    (a.value !== l || i.value !== d) && r(l, d), n.dispatch("application/restoreSectionTranslation", e), t({
      event_type: "dashboard_translation_continue",
      translation_id: e.id,
      translation_source_language: a.value,
      translation_source_title: c,
      translation_source_section: e.sourceSectionTitle,
      translation_target_language: i.value,
      translation_target_title: e.targetTitle,
      translation_target_section: e.targetSectionTitle
    }), yield n.dispatch("mediawiki/fetchPageContent", {
      sourceLanguage: a.value,
      targetLanguage: i.value,
      sourceTitle: c,
      revision: u
    }), yield Ri(), yield n.dispatch("mediawiki/resolvePageContentReferences", {
      sourceLanguage: a.value,
      sourceTitle: c
    });
    let g;
    e.isLeadSectionTranslation ? g = s.value.leadSection : g = s.value.getSectionByTitle(
      e.sourceSectionTitle
    ), n.commit("application/setCurrentSourceSection", g), o.push({ name: "sx-sentence-selector", query: { force: !0 } });
  });
}, Rv = (e) => {
  const t = Se(), { sourceLanguage: n, targetLanguage: o } = ye(t), s = nn();
  return () => {
    t.dispatch("translator/deleteTranslation", e), s({
      event_type: "dashboard_translation_discard",
      translation_id: e.id,
      translation_source_language: n.value,
      translation_source_title: e.sourceTitle,
      translation_source_section: e.sourceSectionTitle,
      translation_target_language: o.value,
      translation_target_title: e.targetTitle,
      translation_target_section: e.targetSectionTitle
    });
  };
};
const Vv = {
  name: "CxTranslationWork",
  components: { MwThumbnail: Ai, MwIcon: He },
  props: {
    translation: {
      type: iu,
      required: !0
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = Se(), o = (d, c) => {
      const u = n.getters["mediawiki/getPage"](d, c);
      return u == null ? void 0 : u.thumbnail;
    }, s = Uv(e.translation), a = y(
      () => e.translation.status === "published" ? r : l
    ), i = (d) => {
      t("click", d), s();
    }, r = () => {
    }, l = Rv(e.translation);
    return {
      getAutonym: Pe.getAutonym,
      getDir: Pe.getDir,
      getImage: o,
      handleActionIconClick: a,
      mwIconEdit: Zt,
      mwIconTrash: Lc,
      mwIconArrowForward: xn,
      mwIconArrowNext: Ci,
      onClick: i
    };
  }
}, zv = { class: "col shrink pe-4" }, jv = { class: "col" }, Hv = { class: "cx-translation__details column justify-between ma-0" }, qv = { class: "row ma-0" }, Gv = { class: "col grow" }, Kv = ["lang", "textContent"], Wv = ["lang", "textContent"], Xv = { class: "col shrink ps-2" }, Yv = { class: "row cx-translation__footer ma-0" }, Jv = { class: "cx-translation__languages col grow" }, Zv = ["dir", "textContent"], Qv = ["dir", "textContent"];
function ey(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-icon");
  return n.translation ? (v(), T("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[0] || (t[0] = (...l) => o.onClick && o.onClick(...l))
  }, [
    w("div", zv, [
      p(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    w("div", jv, [
      w("div", Hv, [
        w("div", qv, [
          w("div", Gv, [
            w("h5", {
              class: fe(["cx-translation__source-page-title", {
                "cx-translation__primary-title": n.translation.isLeadSectionTranslation
              }]),
              lang: n.translation.sourceLanguage,
              textContent: se(n.translation.sourceTitle)
            }, null, 10, Kv),
            n.translation.isLeadSectionTranslation ? ae("", !0) : (v(), T("h6", {
              key: 0,
              class: "cx-translation__source-section-title cx-translation__primary-title",
              lang: n.translation.sourceLanguage,
              textContent: se(n.translation.sourceSectionTitle)
            }, null, 8, Wv))
          ]),
          w("div", Xv, [
            p(r, {
              icon: n.translation.status === "published" ? o.mwIconEdit : o.mwIconTrash,
              onClick: vt(o.handleActionIconClick, ["stop"])
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        w("div", Yv, [
          w("div", Jv, [
            w("span", {
              class: "mw-ui-autonym",
              dir: o.getDir(n.translation.sourceLanguage),
              textContent: se(o.getAutonym(n.translation.sourceLanguage))
            }, null, 8, Zv),
            p(r, {
              icon: o.mwIconArrowNext,
              class: "mx-1",
              size: 14
            }, null, 8, ["icon"]),
            w("span", {
              class: "mw-ui-autonym ma-0",
              dir: o.getDir(n.translation.targetLanguage),
              textContent: se(o.getAutonym(n.translation.targetLanguage))
            }, null, 8, Qv)
          ])
        ])
      ])
    ])
  ])) : ae("", !0);
}
const ty = /* @__PURE__ */ V(Vv, [["render", ey]]);
function ny(e, t, n) {
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
        Pe.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        Pe.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield oy(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function al(e, t, n) {
  return K(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(Pe.sortByAutonym) : (yield ny(e, t, n)).sort(Pe.sortByAutonym);
  });
}
function oy(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function sy() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function ay(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function iy(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
function ry(e, t) {
  const n = y(() => {
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
function ly(e, t, n) {
  const o = ne(""), s = ne(-1), a = ne(null), i = () => {
    s.value++, s.value >= r.value.length && (s.value = 0);
  }, r = y(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ke(e, () => {
    s.value = -1;
  }), Ke(s, () => K(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = r.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const cy = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Ei
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
      default: sy
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = ne(null), o = ne(""), s = ne([]), a = y(
      () => ay(s.value)
    ), i = y(
      () => iy(s.value)
    ), r = (A) => t.emit("select", A), l = () => t.emit("close"), { autocompletion: d, onTabSelect: c } = ry(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: f, selectedLanguage: m } = ly(o, s, e.suggestions), C = () => {
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
    return Ke(o, Ni(() => K(this, null, function* () {
      s.value = yield al(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), lt(() => K(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield al(
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
      mwIconClose: Nt,
      mwIconSearch: Fc,
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
}, uy = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, dy = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, gy = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, fy = { class: "results px-3 pt-4" }, py = { class: "results-header ps-8 pb-2" }, hy = { class: "results-languages--suggestions pa-0 ma-0" }, my = ["lang", "dir", "aria-selected", "onClick", "textContent"], _y = { class: "results px-3 pt-4" }, vy = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, yy = ["lang", "dir", "aria-selected", "onClick", "textContent"], by = ["aria-selected"], Sy = { class: "no-results px-3 py-4" }, wy = { class: "ps-8" };
function Cy(e, t, n, o, s, a) {
  const i = _("mw-input"), r = Ee("i18n");
  return v(), T("div", uy, [
    Xe(e.$slots, "search", {}, () => [
      w("div", dy, [
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
            so(vt(o.onEnter, ["prevent"]), ["enter"]),
            so(vt(o.next, ["stop", "prevent"]), ["down"]),
            so(vt(o.prev, ["stop", "prevent"]), ["up"]),
            so(vt(o.close, ["prevent"]), ["esc"]),
            so(vt(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    w("section", gy, [
      n.suggestions.length && !o.searchQuery ? Xe(e.$slots, "suggestions", { key: 0 }, () => [
        w("section", fy, [
          q(w("p", py, null, 512), [
            [r, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          w("ul", hy, [
            (v(!0), T(xe, null, et(n.suggestions, (l) => (v(), T("li", {
              key: l,
              class: fe(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: se(o.getAutonym(l))
            }, null, 10, my))), 128))
          ])
        ])
      ]) : ae("", !0),
      o.searchResultsByScript.length ? Xe(e.$slots, "search", { key: 1 }, () => [
        w("section", _y, [
          n.suggestions.length && !o.searchQuery ? q((v(), T("p", vy, null, 512)), [
            [r, void 0, "cx-sx-language-selector-all-languages"]
          ]) : ae("", !0),
          (v(!0), T(xe, null, et(o.searchResultsByScript, (l, d) => (v(), T("ul", {
            key: d,
            class: fe(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (v(!0), T(xe, null, et(l, (c) => (v(), T("li", {
              key: c,
              class: fe(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
              lang: c,
              dir: o.getDir(c),
              role: "option",
              "aria-selected": c === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(c),
              textContent: se(o.getAutonym(c))
            }, null, 10, yy))), 128)),
            n.allOptionEnabled && !o.searchQuery ? q((v(), T("li", {
              key: 0,
              class: fe(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (c) => o.select("all"))
            }, null, 10, by)), [
              [r, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : ae("", !0)
          ], 2))), 128))
        ])
      ]) : Xe(e.$slots, "noresults", { key: 2 }, () => [
        w("section", Sy, [
          q(w("h3", wy, null, 512), [
            [r, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Uu = /* @__PURE__ */ V(cy, [["render", Cy]]);
const xy = {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector: Uu,
    MwDialog: En,
    MwIcon: He,
    MwButton: Te
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
    const n = Ze("breakpoints"), o = y(() => n.value.mobile), s = ne(!1), a = ne(!1), i = () => s.value = !0, r = () => a.value = !0, l = () => s.value = !1, d = () => a.value = !1, c = (m) => {
      s.value = !1, t("update:selectedSourceLanguage", m);
    }, u = (m) => {
      a.value = !1, t("update:selectedTargetLanguage", m);
    }, g = y(
      () => e.selectedSourceLanguage === "all"
    ), f = y(
      () => e.selectedTargetLanguage === "all"
    );
    return {
      fullscreen: o,
      getAutonym: Pe.getAutonym,
      getDir: Pe.getDir,
      mwIconArrowNext: Ci,
      mwIconExpand: Pc,
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
}, Ey = { class: "row sx-translation-list-language-selector ma-0 justify-center items-center" }, Ay = { class: "col-5 justify-end" }, ky = {
  key: 0,
  class: "mw-ui-autonym"
}, Ty = ["lang", "dir", "textContent"], Dy = { class: "sx-translation-list-language-selector__arrow col-2 justify-center" }, Ly = { class: "col-5 justify-start" }, Py = {
  key: 0,
  class: "mw-ui-autonym"
}, Ny = ["lang", "dir", "textContent"];
function Fy(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-language-selector"), l = _("mw-dialog"), d = _("mw-icon"), c = Ee("i18n");
  return v(), T("div", Ey, [
    w("div", Ay, [
      p(i, {
        indicator: o.mwIconExpand,
        outlined: !1,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        onClick: vt(o.openSourceLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsSource ? q((v(), T("span", ky, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (v(), T("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedSourceLanguage,
            dir: o.getDir(n.selectedSourceLanguage),
            textContent: se(o.getAutonym(n.selectedSourceLanguage))
          }, null, 8, Ty))
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
    w("div", Dy, [
      p(d, { icon: o.mwIconArrowNext }, null, 8, ["icon"])
    ]),
    w("div", Ly, [
      p(i, {
        indicator: o.mwIconExpand,
        outlined: !1,
        class: "pa-3 sx-translation-list-language-selector__button",
        type: "text",
        disabled: n.targetLanguages.length < 2,
        onClick: vt(o.openTargetLanguageDialog, ["stop"])
      }, {
        default: b(() => [
          o.allLanguagesSelectedAsTarget ? q((v(), T("span", Py, null, 512)), [
            [c, void 0, "cx-translation-list-all-languages-option-label"]
          ]) : (v(), T("span", {
            key: 1,
            class: "mw-ui-autonym",
            lang: n.selectedTargetLanguage,
            dir: o.getDir(n.selectedTargetLanguage),
            textContent: se(o.getAutonym(n.selectedTargetLanguage))
          }, null, 8, Ny))
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
const Vi = /* @__PURE__ */ V(xy, [["render", Fy]]), My = {
  name: "CxTranslationList",
  components: {
    CxTranslationWork: ty,
    MwCard: zt,
    MwSpinner: Yn,
    SxTranslationListLanguageSelector: Vi
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
    const t = ne("all"), n = ne("all"), o = Se(), s = y(() => o.state.translator.translationsLoaded), { enabledTargetLanguages: a } = os(), i = y(() => e.translationStatus === "published" ? o.getters["translator/getPublishedTranslations"] : o.getters["translator/getDraftTranslations"]), r = y(
      () => t.value === "all"
    ), l = y(
      () => n.value === "all"
    ), d = y(
      () => i.value.filter(
        (g) => (r.value || g.sourceLanguage === t.value) && (l.value || g.targetLanguage === n.value)
      ).sort((g, f) => g.lastUpdatedTimestamp < f.lastUpdatedTimestamp)
    ), c = y(() => {
      let g = i.value.map(
        (f) => f.targetLanguage
      );
      return a.value && (g = g.filter(
        (f) => a.value.includes(f)
      )), [...new Set(g)];
    }), u = y(() => {
      const g = i.value.map(
        (f) => f.sourceLanguage
      );
      return [...new Set(g)];
    });
    return {
      activeTranslations: d,
      availableSourceLanguages: u,
      availableTargetLanguages: c,
      loaded: s,
      selectedSourceLanguage: t,
      selectedTargetLanguage: n
    };
  }
}, Oy = ["textContent"];
function By(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector"), r = _("mw-spinner"), l = _("cx-translation-work"), d = _("mw-card");
  return q((v(), M(d, {
    class: fe(`cx-translation-list--${n.translationStatus}`)
  }, {
    header: b(() => [
      w("h3", {
        class: "mw-ui-card__title pa-4 pt-5 mb-0",
        textContent: se(e.$i18n(`cx-translation-label-${n.translationStatus}`))
      }, null, 8, Oy)
    ]),
    default: b(() => [
      p(i, {
        "selected-source-language": o.selectedSourceLanguage,
        "onUpdate:selectedSourceLanguage": t[0] || (t[0] = (c) => o.selectedSourceLanguage = c),
        "selected-target-language": o.selectedTargetLanguage,
        "onUpdate:selectedTargetLanguage": t[1] || (t[1] = (c) => o.selectedTargetLanguage = c),
        "source-languages": o.availableSourceLanguages,
        "target-languages": o.availableTargetLanguages,
        "all-option-enabled": ""
      }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
      o.loaded ? ae("", !0) : (v(), M(r, { key: 0 })),
      (v(!0), T(xe, null, et(o.activeTranslations, (c) => (v(), M(l, {
        key: `${n.translationStatus}-translation-${c.id}`,
        translation: c
      }, null, 8, ["translation"]))), 128))
    ], void 0),
    _: 1
  }, 8, ["class"])), [
    [Si, n.active]
  ]);
}
const Iy = /* @__PURE__ */ V(My, [["render", By]]);
const $y = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: Ai, MwIcon: He, MwRow: Ae, MwCol: Ne },
  props: {
    suggestion: {
      type: [Li, Vt, Vo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = Se(), n = y(() => e.suggestion), o = y(
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
      () => n.value instanceof Vt
    ), l = y(
      () => n.value instanceof Vo
    ), { sourceLanguageAutonym: d, targetLanguageAutonym: c } = ye(t), u = y(
      () => l.value ? Oc : Mc
    ), g = Ze("colors"), f = y(
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
      mwIconArrowNext: Ci,
      mwIconClose: Nt,
      page: s,
      sourceLanguageAutonym: d,
      targetLanguageAutonym: c,
      title: o
    };
  }
}, Uy = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Ry = { class: "col shrink pe-4" }, Vy = { class: "col cx-suggestion__information-panel" }, zy = ["lang", "dir", "textContent"], jy = ["lang", "dir", "textContent"], Hy = ["textContent"], qy = ["textContent"];
function Gy(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-row"), d = _("mw-icon"), c = Ee("i18n");
  return n.suggestion ? (v(), T("div", Uy, [
    w("div", Ry, [
      p(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    w("div", Vy, [
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
                              }, null, 8, zy)
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
                              }, null, 8, jy)
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
                      o.isFavoriteSuggestion ? ae("", !0) : (v(), M(d, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "mb-4",
                        onClick: t[0] || (t[0] = vt((u) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      p(d, {
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = vt((u) => e.$emit("bookmark"), ["stop"]))
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
          o.isSectionSuggestion ? (v(), M(r, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: b(() => [
              q(w("small", null, null, 512), [
                [c, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ], void 0, !0),
            _: 1
          })) : o.isFavoriteSuggestion ? (v(), M(r, {
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
                      }, null, 8, Hy),
                      p(d, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      w("small", {
                        textContent: se(o.targetLanguageAutonym)
                      }, null, 8, qy)
                    ], void 0, !0),
                    _: 1
                  }),
                  o.missingSectionsCount ? (v(), M(r, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: b(() => [
                      q(w("small", null, null, 512), [
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
const Ru = /* @__PURE__ */ V($y, [["render", Gy]]), Ky = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = os(), n = y(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Wy = () => {
  const e = Se(), { sourceLanguage: t, targetLanguage: n } = ye(e), o = nn(), s = y(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = y(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = y(
    () => !s.value && !a.value
  ), r = ne(0), l = ne(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, c = 4, u = y(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      r.value
    )
  ), g = y(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), f = () => {
    m(), C();
  }, m = () => {
    const O = u.value.length === d, J = (r.value + 1) % c, we = O && e.getters["application/getSectionSuggestionsSliceByIndex"](J).length > 0;
    (!O || !we) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), O && L();
  }, C = () => {
    const O = g.value.length === d, J = (l.value + 1) % c, we = O && e.getters["application/getPageSuggestionsSliceByIndex"](J).length > 0;
    (!O || !we) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), O && R();
  }, x = (O) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestion", O), m();
  }, A = (O) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", O), C();
  }, L = () => r.value = (r.value + 1) % c, R = () => l.value = (l.value + 1) % c;
  return {
    currentPageSuggestionsSlice: g,
    currentSectionSuggestionsSlice: u,
    discardPageSuggestion: A,
    discardSectionSuggestion: x,
    onSuggestionRefresh: f,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
}, Vu = (e) => K(void 0, null, function* () {
  return po.dispatch("suggestions/removeFavoriteSuggestion", e);
});
const Xy = {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector: Vi,
    CxTranslationSuggestion: Ru,
    MwCard: zt,
    MwButton: Te,
    MwSpinner: Yn
  },
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = Se(), { sourceLanguage: t, targetLanguage: n } = ye(e), { supportedLanguageCodes: o, availableTargetLanguages: s } = Ky(), a = Ui(e), i = (X) => a(X, n.value), r = (X) => a(t.value, X), l = bt(), d = (X) => {
      e.dispatch("application/initializeSectionTranslation", X), l.push({
        name: "sx-translation-confirmer",
        query: {
          previousRoute: "dashboard",
          eventSource: "suggestion_no_seed"
        }
      });
    }, {
      currentPageSuggestionsSlice: c,
      currentSectionSuggestionsSlice: u,
      discardPageSuggestion: g,
      discardSectionSuggestion: f,
      onSuggestionRefresh: m,
      pageSuggestionsLoading: C,
      sectionSuggestionsLoading: x,
      showRefreshButton: A
    } = Wy(), L = ne(null), R = nn();
    return {
      availableTargetLanguages: s,
      currentPageSuggestionsSlice: c,
      currentSectionSuggestionsSlice: u,
      discardPageSuggestion: g,
      discardSectionSuggestion: f,
      mwIconRefresh: Nc,
      markFavoritePageSuggestion: (X) => K(this, null, function* () {
        return e.dispatch("suggestions/addPageSuggestionAsFavorite", X);
      }),
      markFavoriteSectionSuggestion: (X) => K(this, null, function* () {
        return e.dispatch("suggestions/addSectionSuggestionAsFavorite", X);
      }),
      unmarkFavoriteSectionSuggestion: Vu,
      pageSuggestionsLoading: C,
      pageSuggestionsList: L,
      refreshSuggestions: () => {
        R({
          event_type: "dashboard_refresh_suggestions",
          translation_source_language: t.value,
          translation_target_language: n.value
        }), m(), L.value.$el.scrollIntoView({ behavior: "smooth" });
      },
      sectionSuggestionsLoading: x,
      showRefreshButton: A,
      startTranslation: d,
      supportedLanguageCodes: o,
      updateSourceLanguage: i,
      updateTargetLanguage: r,
      sourceLanguage: t,
      targetLanguage: n
    };
  }
}, Yy = ["textContent"], Jy = { class: "cx-translation-list__division-title ma-0 pa-4" }, Zy = { class: "cx-translation-list__division-title ma-0 pa-4" }, Qy = { class: "cx-suggestion-list__refresh-button-container justify-center" };
function eb(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector"), r = _("mw-card"), l = _("cx-translation-suggestion"), d = _("mw-spinner"), c = _("mw-button"), u = Ee("i18n");
  return q((v(), T("div", null, [
    p(r, { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
      header: b(() => [
        w("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: se(e.$i18n("cx-suggestionlist-title"))
        }, null, 8, Yy)
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
        q(w("h5", Jy, null, 512), [
          [u, void 0, "cx-suggestion-list-new-pages-division"]
        ]),
        (v(!0), T(xe, null, et(o.currentPageSuggestionsSlice, (g, f) => (v(), M(l, {
          key: `page-suggestion-${f}`,
          suggestion: g,
          onClose: (m) => o.discardPageSuggestion(g),
          onClick: (m) => o.startTranslation(g),
          onBookmark: (m) => o.markFavoritePageSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.pageSuggestionsLoading ? (v(), M(d, { key: 0 })) : ae("", !0)
      ], void 0),
      _: 1
    }, 512),
    p(r, { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
      default: b(() => [
        q(w("h5", Zy, null, 512), [
          [u, void 0, "cx-suggestionlist-expand-sections-title"]
        ]),
        (v(!0), T(xe, null, et(o.currentSectionSuggestionsSlice, (g, f) => (v(), M(l, {
          key: `section-suggestion-${f}`,
          class: "ma-0",
          suggestion: g,
          onClose: (m) => o.discardSectionSuggestion(g),
          onClick: (m) => o.startTranslation(g),
          onBookmark: (m) => o.markFavoriteSectionSuggestion(g)
        }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
        o.sectionSuggestionsLoading ? (v(), M(d, { key: 0 })) : ae("", !0)
      ], void 0),
      _: 1
    }),
    w("div", Qy, [
      o.showRefreshButton ? (v(), M(c, {
        key: 0,
        class: "ma-0 pa-4",
        type: "text",
        label: e.$i18n("cx-suggestionlist-refresh"),
        outlined: !1,
        icon: o.mwIconRefresh,
        onClick: o.refreshSuggestions
      }, null, 8, ["label", "icon", "onClick"])) : ae("", !0)
    ])
  ], 512)), [
    [Si, n.active]
  ]);
}
const tb = /* @__PURE__ */ V(Xy, [["render", eb]]), nb = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Ru,
    MwCard: zt
  },
  setup() {
    const e = bt(), t = Se();
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
      unmarkFavoriteSectionSuggestion: Vu
    };
  }
}, ob = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function sb(e, t, n, o, s, a) {
  const i = _("cx-translation-suggestion"), r = _("mw-card"), l = Ee("i18n");
  return o.favorites.length ? (v(), M(r, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: b(() => [
      q(w("h3", ob, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: b(() => [
      (v(!0), T(xe, null, et(o.favorites, (d, c) => (v(), M(i, {
        key: `favorite-${c}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.unmarkFavoriteSectionSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ], void 0),
    _: 1
  })) : ae("", !0);
}
const ab = /* @__PURE__ */ V(nb, [["render", sb]]);
var ib = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, zu = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(ib, function() {
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
          for (const A in f)
            C[f[A]] = A;
          f = C;
          const x = String(u);
          for (let A = 0; A < x.length; A++)
            m += f[x[A]] || x[A];
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
            function A(D) {
              return () => {
                for (let ee = 0; ee < D.length; ee++) {
                  const Re = D[ee]();
                  if (Re !== null)
                    return Re;
                }
                return null;
              };
            }
            function L(D) {
              const ee = x, Re = [];
              for (let at = 0; at < D.length; at++) {
                const St = D[at]();
                if (St === null)
                  return x = ee, null;
                Re.push(St);
              }
              return Re;
            }
            function R(D, ee) {
              return () => {
                const Re = x, at = [];
                let St = ee();
                for (; St !== null; )
                  at.push(St), St = ee();
                return at.length < D ? (x = Re, null) : at;
              };
            }
            function O(D) {
              const ee = D.length;
              return () => {
                let Re = null;
                return m.slice(x, x + ee) === D && (Re = D, x += ee), Re;
              };
            }
            function J(D) {
              return () => {
                const ee = m.slice(x).match(D);
                return ee === null ? null : (x += ee[0].length, ee[0]);
              };
            }
            const we = J(/^\s+/), X = O("|"), W = O(":"), be = O("\\"), ue = J(/^./), Be = O("$"), G = J(/^\d+/), le = O('"'), Me = O("'"), qe = J(C ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Ue = J(C ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), me = A([_e, J(C ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function _e() {
              const D = L([be, ue]);
              return D === null ? null : D[1];
            }
            const st = A([_e, Ue]), on = A([_e, qe]);
            function pt() {
              const D = L([Be, G]);
              return D === null ? null : ["REPLACE", parseInt(D[1], 10) - 1];
            }
            const ct = (ut = J(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), jt = function(D) {
              return D.toString();
            }, () => {
              const D = ut();
              return D === null ? null : jt(D);
            });
            var ut, jt;
            function k() {
              const D = L([X, R(0, he)]);
              if (D === null)
                return null;
              const ee = D[1];
              return ee.length > 1 ? ["CONCAT"].concat(ee) : ee[0];
            }
            function Y() {
              const D = L([ct, W, pt]);
              return D === null ? null : [D[0], D[2]];
            }
            function j() {
              const D = L([ct, W, he]);
              return D === null ? null : [D[0], D[2]];
            }
            function Q() {
              const D = L([ct, W]);
              return D === null ? null : [D[0], ""];
            }
            const ke = A([function() {
              const D = L([A([Y, j, Q]), R(0, k)]);
              return D === null ? null : D[0].concat(D[1]);
            }, function() {
              const D = L([ct, R(0, k)]);
              return D === null ? null : [D[0]].concat(D[1]);
            }]), Ie = O("{{"), ge = O("}}"), de = O("[["), h = O("]]"), S = O("["), E = O("]");
            function N() {
              const D = L([Ie, ke, ge]);
              return D === null ? null : D[1];
            }
            const P = A([function() {
              const D = L([R(1, he), X, R(1, re)]);
              return D === null ? null : [["CONCAT"].concat(D[0]), ["CONCAT"].concat(D[2])];
            }, function() {
              const D = L([R(1, he)]);
              return D === null ? null : [["CONCAT"].concat(D[0])];
            }]);
            function U() {
              let D = null;
              const ee = L([de, P, h]);
              if (ee !== null) {
                const Re = ee[1];
                D = ["WIKILINK"].concat(Re);
              }
              return D;
            }
            function H() {
              let D = null;
              const ee = L([S, R(1, oe), we, R(1, re), E]);
              return ee !== null && (D = ["EXTLINK", ee[1].length === 1 ? ee[1][0] : ["CONCAT"].concat(ee[1]), ["CONCAT"].concat(ee[3])]), D;
            }
            const B = J(/^[A-Za-z]+/);
            function z() {
              const D = J(/^[^"]*/), ee = L([le, D, le]);
              return ee === null ? null : ee[1];
            }
            function F() {
              const D = J(/^[^']*/), ee = L([Me, D, Me]);
              return ee === null ? null : ee[1];
            }
            function te() {
              const D = J(/^\s*=\s*/), ee = L([we, B, D, A([z, F])]);
              return ee === null ? null : [ee[1], ee[3]];
            }
            function Z() {
              const D = R(0, te)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], D);
            }
            const oe = A([N, pt, U, H, function() {
              const D = R(1, me)();
              return D === null ? null : D.join("");
            }]), re = A([N, pt, U, H, function() {
              let D = null;
              const ee = x, Re = O("<"), at = J(/^\/?/), St = J(/^\s*>/), Ht = L([Re, B, Z, at, St]);
              if (Ht === null)
                return null;
              const yo = x, Qe = Ht[1], ht = R(0, re)(), ss = x, ji = L([O("</"), B, St]);
              if (ji === null)
                return ["CONCAT", m.slice(ee, yo)].concat(ht);
              const Zu = x, Qu = ji[1], Hi = Ht[2];
              if (function(Tn, as, sa, aa = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Tn = Tn.toLowerCase()) !== (as = as.toLowerCase()) || aa.allowedHtmlElements.indexOf(Tn) === -1)
                  return !1;
                const ed = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let is = 0, td = sa.length; is < td; is += 2) {
                  const ia = sa[is];
                  if (aa.allowedHtmlCommonAttributes.indexOf(ia) === -1 && (aa.allowedHtmlAttributesByElement[Tn] || []).indexOf(ia) === -1 || ia === "style" && sa[is + 1].search(ed) !== -1)
                    return !1;
                }
                return !0;
              }(Qe, Qu, Hi.slice(1)))
                D = ["HTMLELEMENT", Qe, Hi].concat(ht);
              else {
                const Tn = (as) => as.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                D = ["CONCAT", Tn(m.slice(ee, yo))].concat(ht, Tn(m.slice(ss, Zu)));
              }
              return D;
            }, function() {
              const D = R(1, on)();
              return D === null ? null : D.join("");
            }]), he = A([N, pt, function() {
              const D = R(1, st)();
              return D === null ? null : D.join("");
            }]), Oe = function() {
              const D = R(0, re)();
              return D === null ? null : ["CONCAT"].concat(D);
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
            const x = m.slice(0, C).join("-"), A = this.messageStore.getMessage(c, x);
            if (typeof A == "string")
              return A;
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
})(zu);
var rb = zu.exports;
const il = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, ju = Symbol("banana-context");
function kt() {
  const e = Ze(ju);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function lb(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Xn(new rb(e.locale, e));
  return {
    install: (n) => {
      n.provide(ju, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = il(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = il(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const cb = {
  name: "CxHelpPanel",
  components: { MwIcon: He },
  setup() {
    const e = kt();
    return { listItems: [
      {
        icon: uh,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Qp,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: dh,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, ub = { class: "cx-help-panel pa-4" }, db = { class: "cx-help-panel__item-list mt-6 ps-2" }, gb = ["href"], fb = ["textContent"];
function pb(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = Ee("i18n");
  return v(), T("div", ub, [
    q(w("h5", null, null, 512), [
      [r, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    w("ul", db, [
      (v(!0), T(xe, null, et(o.listItems, (l, d) => (v(), T("li", {
        key: d,
        class: "mt-4"
      }, [
        w("a", {
          href: l.href,
          target: "_blank"
        }, [
          p(i, {
            icon: l.icon
          }, null, 8, ["icon"]),
          w("span", {
            textContent: se(l.label)
          }, null, 8, fb)
        ], 8, gb)
      ]))), 128))
    ])
  ]);
}
const hb = /* @__PURE__ */ V(cb, [["render", pb]]);
const mb = {
  name: "CxStatsPanel",
  components: { MwCol: Ne, MwRow: Ae },
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
    ), s = ne(null);
    return Ke(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), r = Object.keys(e.stats || {}).sort(), l = r.reduce(
          (R, O) => Math.max(R, a[O].delta),
          0
        ), d = r.map((R) => a[R].delta), c = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = c, s.value.height = u;
        const g = 4, f = 6, m = 50, C = (m - g) / l;
        let x = g;
        const A = Math.floor(
          (c - g) / (f + g)
        ), L = d.slice(
          Math.max(d.length - A, 0)
        );
        L.forEach((R, O) => {
          O === L.length - 1 && (i.fillStyle = "#36c");
          const J = m - R * C;
          i.fillRect(x, J, f, R * C), x += f + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, _b = { class: "cx-stats-panel pa-4" }, vb = ["textContent"], yb = { class: "cx-stats-panel__monthly-stats-label" }, bb = ["textContent"], Sb = { class: "cx-stats-panel__total-stats-label" }, wb = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function Cb(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-row"), l = Ee("i18n");
  return v(), T("div", _b, [
    q(w("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    p(r, null, {
      default: b(() => [
        p(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: b(() => [
            w("h3", {
              textContent: se(o.thisMonthStats)
            }, null, 8, vb),
            q(w("h5", yb, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        }),
        p(i, { class: "cx-stats-panel__total-stats" }, {
          default: b(() => [
            w("h3", {
              textContent: se(o.total)
            }, null, 8, bb),
            q(w("h5", Sb, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    w("canvas", wb, null, 512)
  ]);
}
const xb = /* @__PURE__ */ V(mb, [["render", Cb]]);
const Eb = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: Ne, MwRow: Ae, MwCard: zt, MwIcon: He },
  data: () => ({
    mwIconLabFlask: Ic,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, Ab = { class: "complementary" }, kb = { class: "complementary mt-4" }, Tb = ["href"], Db = { class: "complementary" }, Lb = ["href"];
function Pb(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("mw-card"), c = Ee("i18n");
  return v(), M(d, { class: "experimental-support-banner mb-1" }, {
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
              q(w("h5", null, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              q(w("p", Ab, null, 512), [
                [c, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              w("p", kb, [
                q(w("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, Tb), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              w("p", Db, [
                q(w("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, Lb), [
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
const Nb = /* @__PURE__ */ V(Eb, [["render", Pb]]), Hu = (e, t, n, o, s) => K(void 0, null, function* () {
  const { sourceLanguage: a, targetLanguage: i } = ye(t), r = yield t.dispatch("suggestions/loadSectionSuggestion", {
    sourceLanguage: a.value,
    targetLanguage: i.value,
    sourceTitle: n
  });
  r && (t.dispatch("application/initializeSectionTranslation", r), e.push({
    name: "sx-translation-confirmer",
    query: { previousRoute: o, eventSource: s }
  }));
}), Fb = () => {
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
}, Mb = (e, t, n, o) => {
  const s = Fb() || "direct_preselect", { sourceLanguage: a, targetLanguage: i } = ye(t);
  n({
    event_type: "dashboard_open",
    event_source: s,
    content_translation_session_position: 0,
    translation_source_language: a.value,
    translation_target_language: i.value
  }), Hu(e, t, o, "dashboard", s);
}, Ob = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  return !t || !n ? null : n;
}, Bb = (e, t, n) => K(void 0, null, function* () {
  yield Iu();
  const o = Ob();
  if (o) {
    Mb(e, t, n, o);
    return;
  }
  const { sourceLanguage: s, targetLanguage: a } = ye(t);
  n({
    event_type: "dashboard_open",
    event_source: "direct",
    content_translation_session_position: 0,
    translation_source_language: s.value,
    translation_target_language: a.value
  });
  try {
    yield t.dispatch("suggestions/fetchFavorites");
  } catch (i) {
    mw.log.error("[CX] Error while fetching favorite suggestions", i);
  }
  try {
    t.state.translator.translations.length || (yield t.dispatch("translator/fetchTranslations"));
  } catch (i) {
    mw.log.error("[CX] Error while fetching translations", i);
  }
  t.dispatch("suggestions/initializeSuggestions");
}), Ib = {
  name: "CxDashboard",
  components: {
    CxHelpPanel: hb,
    MwCol: Ne,
    CxFavoriteList: ab,
    CxStatsPanel: xb,
    CxSuggestionList: tb,
    CxTranslationList: Iy,
    ExperimentalSupportBanner: Nb,
    MwBottomNavigation: Bp,
    MwButton: Te,
    MwButtonGroup: Jo,
    MwRow: Ae
  },
  setup() {
    const e = ne("suggestions"), t = kt(), n = y(() => [
      {
        value: "suggestions",
        props: {
          label: t.i18n(
            "cx-translation-filter-suggested-translations"
          ),
          icon: Nr,
          type: "text"
        }
      },
      {
        value: "draft",
        props: {
          label: t.i18n("cx-translation-filter-draft-translations"),
          icon: Zt,
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
    const o = bt(), s = () => o.push({ name: "sx-article-search" });
    Ke(e, () => window.scrollTo(0, 0));
    const a = Se();
    Bb(o, a, nn()), a.dispatch("translator/fetchTranslatorStats");
    const i = y(
      () => a.state.translator.translatorStats
    );
    return {
      active: e,
      listSelector: n,
      mwIconAdd: Tc,
      mwIconArticleCheck: eh,
      mwIconLightBulb: Nr,
      mwIconEdit: Zt,
      searchTranslation: s,
      translatorStats: i
    };
  }
}, $b = { key: 0 };
function Ub(e, t, n, o, s, a) {
  const i = _("experimental-support-banner"), r = _("mw-button"), l = _("mw-row"), d = _("mw-button-group"), c = _("cx-favorite-list"), u = _("cx-suggestion-list"), g = _("cx-translation-list"), f = _("mw-col"), m = _("cx-stats-panel"), C = _("cx-help-panel"), x = _("mw-bottom-navigation");
  return v(), T("div", null, [
    e.$incompleteVersion ? (v(), M(i, {
      key: 0,
      class: "col-mobile-12 col-tablet-12 col-desktop-7 col-offset-desktop-1 mb-4"
    })) : ae("", !0),
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
            e.$mwui.breakpoint.tabletAndUp ? (v(), T("nav", $b, [
              p(d, {
                items: o.listSelector,
                active: o.active,
                class: "justify-around",
                onSelect: t[0] || (t[0] = (A) => o.active = A)
              }, null, 8, ["items", "active"])
            ])) : ae("", !0),
            p(c),
            p(u, {
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
                    p(C)
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
    e.$mwui.breakpoint.mobile ? (v(), M(x, {
      key: 1,
      active: o.active,
      "onUpdate:active": t[1] || (t[1] = (A) => o.active = A),
      items: o.listSelector
    }, null, 8, ["active", "items"])) : ae("", !0)
  ]);
}
const Rb = /* @__PURE__ */ V(Ib, [["render", Ub]]), Vb = {
  name: "DashboardView",
  components: { CxDashboard: Rb }
}, zb = { class: "cx-translation-dashboard" };
function jb(e, t, n, o, s, a) {
  const i = _("cx-dashboard");
  return v(), T("main", zb, [
    p(i, { class: "mb-4 pb-12" })
  ]);
}
const rl = /* @__PURE__ */ V(Vb, [["render", jb]]), Hb = (e) => {
  const t = y(
    () => {
      var d, c;
      return (c = (d = e.value.orderedMissingSections) == null ? void 0 : d[0]) == null ? void 0 : c.sourceTitle;
    }
  ), n = y(
    () => e.value.missingSectionsCount
  ), o = y(
    () => e.value.presentSectionsCount
  ), s = y(
    () => {
      var d;
      return !!((d = e.value) != null && d.translationExists);
    }
  ), a = y(
    () => {
      var d, c;
      return je.getPageUrl(
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
  }, r = y(() => {
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
  }), l = y(
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
    translationExists: s
  };
}, qb = (e, t) => {
  const n = new URLSearchParams(location.search), o = ne(n.get("section")), { currentSourceSection: s, currentSectionSuggestion: a } = ye(t), i = y(
    () => {
      var d;
      return !!((d = a.value) != null && d.translationExists);
    }
  ), r = () => {
    o.value = null, n.delete("section"), vo(Object.fromEntries(n));
  };
  return {
    clearPreFilledSection: r,
    onSectionSelectorClick: () => K(void 0, null, function* () {
      o.value ? (yield t.dispatch(
        "application/selectPageSectionByTitle",
        o.value
      ), s.value ? e.push({
        name: "sx-content-comparator",
        query: { force: !0 }
      }) : r()) : i.value ? e.push({ name: "sx-section-selector" }) : (yield t.dispatch("application/selectPageSectionByIndex", 0), e.push({ name: "sx-quick-tutorial", query: { force: !0 } })), Bu(a.value);
    }),
    preFilledSectionTitle: o
  };
};
const Gb = {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton: Te,
    MwRow: Ae,
    MwCol: Ne,
    MwIcon: He
  },
  setup() {
    const e = bt(), t = Se(), n = Ze("colors"), { targetLanguageAutonym: o, currentSectionSuggestion: s } = ye(t), {
      clearPreFilledSection: a,
      onSectionSelectorClick: i,
      preFilledSectionTitle: r
    } = qb(e, t), {
      actionInformationMessageArgs: l,
      getActionButtonLabel: d,
      isProgressiveButton: c,
      targetArticlePath: u,
      translationExists: g
    } = Hb(s), f = kt(), m = y(
      () => f.i18n(d(!!r.value))
    ), C = y(
      () => f.i18n(...l.value)
    ), x = () => {
      e.push({ name: "sx-section-selector" }), Bu(s.value);
    };
    return lt(() => {
      const A = r.value;
      A && !s.value.hasSectionTitle(A) && a();
    }), {
      actionButtonLabel: m,
      actionInformationMessage: C,
      isProgressiveButton: c,
      mwIconLinkExternal: Qo,
      onMoreSectionsClick: x,
      onSectionSelectorClick: i,
      preFilledSectionTitle: r,
      targetArticlePath: u,
      targetLanguageAutonym: o,
      translationExists: g,
      colors: n
    };
  }
}, Kb = { class: "sx-translation-confirmer-body pb-4" }, Wb = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, Xb = ["textContent"], Yb = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, Jb = ["href"], Zb = ["textContent"];
function Qb(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-icon"), l = _("mw-row"), d = _("mw-button"), c = Ee("i18n");
  return v(), T("section", Kb, [
    o.preFilledSectionTitle ? (v(), T("section", Wb, [
      q(w("h6", null, null, 512), [
        [c, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
      ]),
      w("h5", {
        class: "ma-0",
        textContent: se(o.preFilledSectionTitle)
      }, null, 8, Xb)
    ])) : o.translationExists ? (v(), T("section", Yb, [
      p(l, {
        class: "sx-translation-confirmer__translation-status ma-0 pb-2",
        justify: "between"
      }, {
        default: b(() => [
          q(p(i, {
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
              ], 8, Jb)
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
              }, null, 8, Zb)
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })
    ])) : ae("", !0),
    p(l, {
      class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
      justify: o.preFilledSectionTitle ? "between" : "center"
    }, {
      default: b(() => [
        o.preFilledSectionTitle ? (v(), M(i, {
          key: 0,
          shrink: ""
        }, {
          default: b(() => [
            q(p(d, {
              large: "",
              progressive: "",
              type: "text",
              label: o.actionButtonLabel,
              onClick: o.onMoreSectionsClick
            }, null, 8, ["label", "onClick"]), [
              [c, void 0, "cx-sx-translation-confirmer-more-sections-button-label"]
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
    }, 8, ["justify"])
  ]);
}
const eS = /* @__PURE__ */ V(Gb, [["render", Qb]]);
const tS = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: Vi
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = os(), n = Se(), { sourceLanguage: o, targetLanguage: s } = ye(n), a = y(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = y(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), r = y(
      () => t.value || e.value
    ), l = Cv(n);
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
function nS(e, t, n, o, s, a) {
  const i = _("sx-translation-list-language-selector");
  return v(), M(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const qu = /* @__PURE__ */ V(tS, [["render", nS]]);
const oS = {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow: Ae,
    MwCol: Ne,
    MwIcon: He,
    MwButton: Te
  },
  setup() {
    const e = Se(), {
      currentSectionSuggestion: t,
      currentSourcePage: n
    } = ye(e), o = y(() => e.state.suggestions.favorites || []), s = y(
      () => o.value.some(
        (f) => t.value.sourceTitle === f.title && t.value.sourceLanguage === f.sourceLanguage && t.value.targetLanguage === f.targetLanguage
      )
    ), a = () => K(this, null, function* () {
      return e.dispatch(
        "suggestions/removeFavoriteSuggestion",
        new Vo({
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
      () => s.value ? Oc : Mc
    ), l = y(
      () => s.value ? a : i
    ), d = y(() => {
      var f;
      return (f = t.value) == null ? void 0 : f.sourceTitle;
    }), c = y(
      () => {
        var f;
        return je.getPageUrl(
          ((f = t.value) == null ? void 0 : f.sourceLanguage) || "",
          d.value || ""
        );
      }
    ), u = y(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.langLinksCount;
    }), g = y(
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
      mwIconLanguage: Bc,
      mwIconLinkExternal: Qo,
      sourceArticle: n,
      sourceArticlePath: c,
      sourceTitle: d,
      toggleFavorite: l,
      weeklyViews: g
    };
  }
}, sS = ["textContent"], aS = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, iS = ["textContent"];
function rS(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = Ee("i18n");
  return v(), M(d, {
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
                  }, null, 8, sS),
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
          w("p", aS, [
            p(i, {
              icon: o.mwIconLanguage,
              size: "16",
              class: "me-1"
            }, null, 8, ["icon"]),
            w("span", {
              class: "pe-3",
              textContent: se(o.langLinksCount)
            }, null, 8, iS),
            q(w("span", null, null, 512), [
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
const lS = /* @__PURE__ */ V(oS, [["render", rS]]);
const cS = {
  name: "SxTranslationConfirmer",
  components: {
    MwIcon: He,
    SxTranslationConfirmerArticleInformation: lS,
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te,
    SxArticleLanguageSelector: qu,
    SxTranslationConfirmerActionPanel: eS
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
    const t = Se(), { sourceLanguage: n, targetLanguage: o, currentSourcePage: s } = ye(t), a = y(
      () => {
        var d, c;
        return (c = (d = s.value) == null ? void 0 : d.image) == null ? void 0 : c.source;
      }
    ), i = nn();
    lt(() => {
      t.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), i({
        event_type: "dashboard_translation_start",
        event_source: e.eventSource,
        translation_source_language: n.value,
        translation_target_language: o.value
      }), Ri(), t.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        o.value
      );
    });
    const r = bt();
    return {
      articleImageSource: a,
      mwIconArticle: xi,
      mwIconClose: Nt,
      onClose: () => {
        t.dispatch("application/clearCurrentSectionSuggestion"), vo(null), r.push({ name: e.previousRoute });
      }
    };
  }
}, uS = { class: "sx-translation-confirmer" }, dS = { class: "mb-0" }, gS = { class: "sx-translation-confirmer__article-image flex justify-center" }, fS = ["src"], pS = { class: "ma-3" };
function hS(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-icon"), c = _("sx-translation-confirmer-article-information"), u = _("sx-article-language-selector"), g = _("sx-translation-confirmer-action-panel"), f = Ee("i18n"), m = Ee("i18n-html");
  return v(), T("section", uS, [
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
            q(w("h5", dS, null, 512), [
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
    w("div", gS, [
      o.articleImageSource ? (v(), T("img", {
        key: 0,
        src: o.articleImageSource
      }, null, 8, fS)) : (v(), M(d, {
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
        w("p", pS, [
          q(w("small", null, null, 512), [
            [m, void 0, "cx-license-agreement"]
          ])
        ])
      ], void 0),
      _: 1
    })
  ]);
}
const mS = /* @__PURE__ */ V(cS, [["render", hS]]);
const _S = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: mS
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
function vS(e, t, n, o, s, a) {
  const i = _("sx-translation-confirmer");
  return v(), T("main", {
    class: fe(["sx-translation-confirmer-view", a.classes])
  }, [
    p(i, {
      "event-source": n.eventSource,
      "previous-route": n.previousRoute
    }, null, 8, ["event-source", "previous-route"])
  ], 2);
}
const yS = /* @__PURE__ */ V(_S, [["render", vS]]), bS = {
  name: "SxSectionSelectorViewArticleItem",
  components: {
    MwRow: Ae,
    MwButton: Te
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
    mwIconLinkExternal: Qo
  })
};
function SS(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return v(), M(r, {
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
        type: "text",
        outlined: !1
      }, null, 8, ["href", "indicator", "label"])
    ], void 0),
    _: 1
  });
}
const wS = /* @__PURE__ */ V(bS, [["render", SS]]);
const CS = {
  name: "SxSectionSelectorHeader",
  components: {
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te
  },
  props: {
    suggestion: {
      type: Vt,
      required: !0
    }
  },
  emits: ["close"],
  data: () => ({
    mwIconClose: Nt
  })
}, xS = { class: "sx-section-selector__header pa-4" }, ES = { class: "sx-section-selector__header-text ma-0" }, AS = ["textContent"], kS = { class: "pt-0 ma-0" }, TS = { class: "ma-0" };
function DS(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = Ee("i18n");
  return v(), T("div", xS, [
    p(l, { class: "ma-0 pb-3" }, {
      default: b(() => [
        p(i, null, {
          default: b(() => [
            q(w("h6", ES, null, 512), [
              [d, void 0, "cx-sx-section-selector-title"]
            ]),
            w("h2", {
              class: "sx-section-selector__title ma-0 py-0",
              textContent: se(n.suggestion.sourceTitle)
            }, null, 8, AS)
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
    q(w("h4", kS, null, 512), [
      [d, void 0, "cx-sx-section-selector-subtitle"]
    ]),
    q(w("p", TS, null, 512), [
      [d, void 0, "cx-sx-section-selector-desc"]
    ])
  ]);
}
const LS = /* @__PURE__ */ V(CS, [["render", DS]]), PS = {
  name: "SxSectionSelectorSectionList",
  components: {
    MwRow: Ae,
    MwButton: Te,
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
  data: () => ({ mwIconArrowForward: xn })
}, NS = { class: "sx-section-selector__sections-list ma-0 pa-0" };
function FS(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-button"), l = _("mw-row");
  return v(), T("ul", NS, [
    (v(!0), T(xe, null, et(n.sections, (d) => (v(), M(l, {
      key: d.sourceTitle,
      tag: "li",
      class: "ma-0"
    }, {
      default: b(() => [
        p(r, {
          class: "col justify-between py-3 px-4",
          label: d.sourceTitle,
          type: "text",
          outlined: !1,
          onClick: (c) => e.$emit("select-section", d.sourceTitle)
        }, {
          default: b(() => [
            Xe(e.$slots, "default", {
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
const Gu = /* @__PURE__ */ V(PS, [["render", FS]]), MS = `<svg
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
const OS = {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList: Gu,
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te
  },
  props: {
    suggestion: {
      type: Vt,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = y(
      () => Pe.getAutonym(e.suggestion.targetLanguage)
    ), n = y(
      () => Object.keys(e.suggestion.missingSections).length === 0
    );
    return {
      sadRobotSVG: MS,
      getAutonym: Pe.getAutonym,
      getDir: Pe.getDir,
      targetLanguageAutonym: t,
      emptySections: n
    };
  }
}, BS = { class: "sx-section-selector__missing-sections py-2" }, IS = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, $S = ["lang", "dir", "textContent"];
function US(e, t, n, o, s, a) {
  const i = _("sx-section-selector-section-list"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = Ee("i18n");
  return v(), T("section", BS, [
    q(w("h4", IS, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-missing-sections-title"]
    ]),
    o.emptySections ? ae("", !0) : (v(), M(i, {
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
        }, null, 8, $S)
      ]),
      _: 1
    }, 8, ["sections"])),
    o.emptySections ? (v(), M(d, {
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
            q(w("h6", null, null, 512), [
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
            q(w("p", null, null, 512), [
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
            q(p(l, {
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
const RS = /* @__PURE__ */ V(OS, [["render", US]]);
const VS = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Gu
  },
  props: {
    suggestion: {
      type: Vt,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = y(
      () => Pe.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: xn, getAutonym: Pe.getAutonym, getDir: Pe.getDir, targetLanguageAutonym: t };
  }
}, zS = { class: "sx-section-selector__present-sections py-2" }, jS = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, HS = { class: "sx-section-selector__present-section-button-content" }, qS = ["lang", "dir", "textContent"], GS = ["lang", "dir", "textContent"];
function KS(e, t, n, o, s, a) {
  const i = _("sx-section-selector-section-list"), r = Ee("i18n");
  return v(), T("section", zS, [
    q(w("h4", jS, null, 512), [
      [r, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    p(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: b(({ sourceSection: l, targetSection: d }) => [
        w("div", HS, [
          w("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: se(l)
          }, null, 8, qS),
          w("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: se(d)
          }, null, 8, GS)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const WS = /* @__PURE__ */ V(VS, [["render", KS]]);
const XS = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: WS,
    SxSectionSelectorSectionListMissing: RS,
    SxSectionSelectorHeader: LS,
    SxSectionSelectorViewArticleItem: wS,
    MwRow: Ae,
    MwCol: Ne,
    MwIcon: He,
    SxArticleLanguageSelector: qu
  },
  setup() {
    const e = Se(), {
      currentSectionSuggestion: t,
      sourceLanguageAutonym: n,
      targetLanguageAutonym: o
    } = ye(e), s = y(
      () => je.getPageUrl(
        t.value.sourceLanguage,
        t.value.sourceTitle
      )
    ), a = y(
      () => je.getPageUrl(
        t.value.targetLanguage,
        t.value.targetTitle
      )
    ), i = y(() => [
      { path: s.value, autonym: n.value },
      { path: a.value, autonym: o.value }
    ]), r = bt();
    return {
      goToDashboard: () => {
        vo(null), r.push({ name: "dashboard" });
      },
      mwIconRobot: $c,
      mwIconLabFlask: Ic,
      selectSection: (c) => {
        e.dispatch(
          "application/selectPageSectionByTitle",
          c
        ), r.push({ name: "sx-content-comparator" });
      },
      suggestion: t,
      targetLanguageAutonym: o,
      viewArticleItems: i
    };
  }
}, YS = { class: "sx-section-selector" }, JS = { class: "sx-section-selector__body" }, ZS = { class: "py-2" }, QS = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, ew = { class: "ma-0 pa-0" }, tw = { class: "sx-section-selector__additional-consideration-title" }, nw = { href: "#" }, ow = { class: "sx-section-selector__additional-consideration-title" }, sw = { href: "#" };
function aw(e, t, n, o, s, a) {
  const i = _("sx-section-selector-header"), r = _("sx-article-language-selector"), l = _("sx-section-selector-section-list-missing"), d = _("sx-section-selector-section-list-present"), c = _("sx-section-selector-view-article-item"), u = _("mw-icon"), g = _("mw-col"), f = _("mw-row"), m = Ee("i18n");
  return v(), T("section", YS, [
    p(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    w("section", JS, [
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
      w("section", ZS, [
        q(w("h4", QS, null, 512), [
          [m, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        w("ul", ew, [
          (v(!0), T(xe, null, et(o.viewArticleItems, (C, x) => (v(), M(c, {
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
              w("h6", tw, [
                p(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Ps(" " + se(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              q(w("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              q(w("a", nw, null, 512), [
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
              w("h6", ow, [
                p(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Ps(" " + se(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              q(w("p", null, null, 512), [
                [m, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              q(w("a", sw, null, 512), [
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
const iw = /* @__PURE__ */ V(XS, [["render", aw]]);
const rw = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: iw
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function lw(e, t, n, o, s, a) {
  const i = _("sx-section-selector");
  return v(), T("main", {
    class: fe(["sx-section-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const cw = /* @__PURE__ */ V(rw, [["render", lw]]), uw = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = ye(
    Se()
  ), o = kt();
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
const dw = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: Jo },
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
    const n = (s) => t("update:selection", s), o = uw(e);
    return Ke(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, gw = { class: "sx-content-comparator__source-target-selector" };
function fw(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return v(), T("div", gw, [
    p(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const pw = /* @__PURE__ */ V(dw, [["render", fw]]), oa = (e) => {
  const t = ne([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o
  } = ye(e), s = y(() => n.value.targetTitle), a = y(
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
      return (((f = d.value) == null ? void 0 : f.title) || "").replace(/ /g, "_");
    }
  ), d = y(
    () => {
      var f;
      return (f = i.value) == null ? void 0 : f.getSectionByTitle(r.value);
    }
  ), c = y(() => {
    var f;
    return (f = o.value) == null ? void 0 : f.html;
  }), u = y(() => {
    var f;
    return (f = d.value) == null ? void 0 : f.html;
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
    targetSectionContent: u
  };
};
const hw = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: pw,
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te
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
    const n = Se(), o = ne(!1), { currentSectionSuggestion: s } = ye(n), a = y(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = y(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), r = (f) => t.emit("update:sourceVsTargetSelection", f), { activeSectionTargetTitle: l, targetSectionAnchor: d } = oa(n), c = y(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: a.value,
            path: `${je.getPageUrl(
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
    }), u = y(
      () => je.getPageUrl(
        s.value.targetLanguage,
        s.value.targetTitle
      )
    ), g = ne(null);
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
      mwIconLinkExternal: Qo,
      mwIconEdit: Zt,
      updateSelection: r
    };
  }
}, _w = ["lang", "dir", "textContent"];
function vw(e, t, n, o, s, a) {
  const i = _("sx-content-comparator-source-vs-target-selector"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row");
  return v(), M(d, {
    ref: "contentHeader",
    class: fe(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
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
              }, null, 8, _w)
            ], void 0, !0),
            _: 1
          }),
          p(r, { shrink: "" }, {
            default: b(() => [
              o.isSticky ? (v(), M(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (c) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (v(), M(l, {
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
const yw = /* @__PURE__ */ V(hw, [["render", vw]]), bw = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: Ne,
    MwButton: Te
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = Se(), n = y(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = y(
      () => e.sectionSourceTitles.indexOf(n.value)
    );
    return {
      goToNextSection: () => {
        const i = (o.value + 1) % e.sectionSourceTitles.length;
        t.dispatch("application/selectPageSectionByIndex", i);
      },
      goToPreviousSection: () => {
        const i = (o.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length;
        t.dispatch("application/selectPageSectionByIndex", i);
      },
      mwIconPrevious: Js,
      mwIconArrowForward: xn
    };
  }
};
function Sw(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col");
  return v(), M(r, {
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
const ww = /* @__PURE__ */ V(bw, [["render", Sw]]);
const Cw = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te
  },
  props: {
    suggestion: {
      type: Vt,
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
    mwIconTrash: Lc,
    mwIconUndo: nh
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
}, xw = { class: "sx-content-comparator-header__mapped-section" }, Ew = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, Aw = { key: 0 }, kw = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Tw = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function Dw(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = Ee("i18n");
  return v(), T("div", xw, [
    p(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: b(() => [
        p(i, { grow: "" }, {
          default: b(() => [
            w("h6", Ew, [
              Ps(se(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? q((v(), T("span", Aw, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : ae("", !0)
            ]),
            w("h6", {
              class: fe(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, se(n.targetSectionTitle), 3)
          ], void 0, !0),
          _: 1
        }),
        p(i, { shrink: "" }, {
          default: b(() => [
            a.isDiscardedSection ? (v(), M(r, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (v(), M(r, {
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
    a.isDiscardedSection ? q((v(), T("p", Tw, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : q((v(), T("p", kw, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const Lw = /* @__PURE__ */ V(Cw, [["render", Dw]]);
const Pw = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: Lw,
    SxContentComparatorHeaderNavigation: ww,
    MwButton: Te,
    MwCol: Ne,
    MwRow: Ae,
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
    const e = Se(), {
      currentSectionSuggestion: t,
      currentSourceSection: n
    } = ye(e), o = y(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = y(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = oa(e), r = y(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = y(() => [
      ...Object.keys(t.value.missingSections),
      ...Object.keys(t.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: wi,
      mwIconEdit: Zt,
      mwIconEye: qa,
      sectionSourceTitles: l,
      sourceSectionContent: r,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: Pe.getDir
    };
  }
}, Nw = { class: "sx-content-comparator__header pa-4" }, Fw = ["lang", "dir"], Mw = ["lang", "dir"], Ow = /* @__PURE__ */ w("br", null, null, -1);
function Bw(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("sx-content-comparator-header-navigation"), d = _("mw-row"), c = _("mw-icon"), u = _("sx-content-comparator-header-mapped-section"), g = Ee("i18n");
  return v(), T("div", Nw, [
    p(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      outlined: !1,
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
            }, se(o.suggestion.sourceTitle), 9, Fw),
            w("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, se(o.sourceSectionTitle), 9, Mw)
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
    o.isCurrentSectionMissing ? (v(), M(d, {
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
            q(w("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            Ow,
            q(w("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : ae("", !0),
    o.isCurrentSectionPresent ? (v(), M(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (f) => e.$emit("update:discardedSections", f))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : ae("", !0)
  ]);
}
const Iw = /* @__PURE__ */ V(Pw, [["render", Bw]]);
const $w = {
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
}, Uw = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, Rw = ["innerHTML"], Vw = { key: 0 };
function zw(e, t, n, o, s, a) {
  const i = Ee("i18n");
  return v(), T("section", Uw, [
    w("h5", { innerHTML: o.placeholderTitle }, null, 8, Rw),
    n.isMappedSection ? q((v(), T("p", Vw, null, 512)), [
      [i, void 0, "cx-sx-content-comparator-present-section-placeholder-subtitle"]
    ]) : ae("", !0)
  ]);
}
const Ku = /* @__PURE__ */ V($w, [["render", zw]]), jw = (e, t) => {
  const { isCurrentSectionMapped: n, targetPage: o } = oa(e), { currentSectionSuggestion: s } = ye(e), a = () => Ac(
    Ku,
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
  return y(() => {
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
const Hw = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Ku,
    SxContentComparatorHeader: Iw,
    SxContentComparatorContentHeader: yw,
    MwSpinner: Yn
  },
  setup() {
    const e = Se(), t = bt(), n = ne("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      if (e.getters["translator/hasSectionTranslations"]) {
        t.push({ name: "sx-sentence-selector" });
        return;
      }
      t.push({ name: "sx-quick-tutorial" });
    }, a = kt(), i = a.i18n.bind(a), {
      activeSectionTargetTitle: r,
      discardedSections: l,
      isCurrentSectionMapped: d,
      sourceSectionContent: c,
      targetSectionContent: u
    } = oa(e), g = jw(e, i), {
      currentSectionSuggestion: f,
      sourceLanguage: m,
      targetLanguage: C
    } = ye(e), x = y(() => f.value.targetTitle);
    return Ke(
      x,
      () => e.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: C.value,
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
      targetLanguage: C
    };
  }
}, qw = { class: "sx-content-comparator" }, Gw = { class: "sx-content-comparator__source-content" }, Kw = ["lang", "dir", "innerHTML"], Ww = ["lang", "dir", "innerHTML"], Xw = ["innerHTML"];
function Yw(e, t, n, o, s, a) {
  const i = _("sx-content-comparator-header"), r = _("sx-content-comparator-content-header"), l = _("mw-spinner"), d = _("sx-content-comparator-new-section-placeholder");
  return v(), T("section", qw, [
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
    w("section", Gw, [
      o.sourceVsTargetSelection === "source_section" ? (v(), T(xe, { key: 0 }, [
        o.sourceSectionContent ? ae("", !0) : (v(), M(l, { key: 0 })),
        w("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, Kw)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (v(), T(xe, { key: 1 }, [
        o.targetPageContent ? ae("", !0) : (v(), M(l, { key: 0 })),
        w("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, Ww)
      ], 64)) : (v(), T(xe, { key: 2 }, [
        w("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, Xw),
        p(d, {
          "is-mapped-section": o.isCurrentSectionMapped,
          i18n: o.i18n
        }, null, 8, ["is-mapped-section", "i18n"])
      ], 64))
    ])
  ]);
}
const Jw = /* @__PURE__ */ V(Hw, [["render", Yw]]);
const Zw = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: Jw
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function Qw(e, t, n, o, s, a) {
  const i = _("sx-content-comparator");
  return v(), T("main", {
    class: fe(["sx-content-comparator-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const eC = /* @__PURE__ */ V(Zw, [["render", Qw]]), tC = {
  name: "SxConfirmBackNavigationDialog",
  components: {
    MwButton: Te,
    MwDivider: Zo,
    MwDialog: En
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
}, nC = { class: "mw-ui-dialog__header px-4 py-3" }, oC = { class: "mw-ui-dialog__header-title" }, sC = { class: "pa-4" }, aC = { class: "flex justify-end py-2" };
function iC(e, t, n, o, s, a) {
  const i = _("mw-divider"), r = _("mw-button"), l = _("mw-dialog"), d = Ee("i18n");
  return v(), M(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10
  }, {
    header: b(() => [
      w("div", nC, [
        q(w("span", oC, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-title"]
        ])
      ])
    ]),
    footer: b(() => [
      w("div", aC, [
        p(r, {
          type: "text",
          progressive: "",
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
      w("div", sC, [
        q(w("span", null, null, 512), [
          [d, void 0, "sx-confirm-back-navigation-dialog-body"]
        ])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "overlay-opacity", "overlay-color"]);
}
const rC = /* @__PURE__ */ V(tC, [["render", iC]]);
const lC = {
  name: "SxTranslationSelector",
  components: { MwCard: zt, MwButton: Te, MwDialog: En },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Ve.EMPTY_TEXT_PROVIDER_KEY, o = Ve.ORIGINAL_TEXT_PROVIDER_KEY, s = Se(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = ye(s), c = y(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        a.value,
        i.value
      )
    ), u = y(() => {
      const x = [o, n];
      return c.value.filter(
        (A) => !x.includes(A)
      );
    }), g = y(
      () => l.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
    ), f = (x) => {
      s.dispatch("application/updateMTProvider", x), C();
    }, m = Ve.getMTProviderLabel, C = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: C,
      emptyTextProviderKey: n,
      getDir: Pe.getDir,
      getMTProviderLabel: m,
      mwIconClose: Nt,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: f,
      sourceLanguage: a
    };
  }
}, cC = { class: "mw-ui-dialog__header pa-4" }, uC = { class: "row ma-0 py-2" }, dC = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, gC = { class: "mb-0" }, fC = { class: "col shrink justify-center" }, pC = { class: "pb-2 mb-0" }, hC = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, mC = ["dir", "lang", "innerHTML"], _C = ["textContent"], vC = ["innerHTML"], yC = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, bC = /* @__PURE__ */ w("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function SC(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-card"), l = _("mw-dialog"), d = Ee("i18n");
  return n.active ? (v(), M(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: b(() => [
      w("div", cC, [
        w("div", uC, [
          w("div", dC, [
            q(w("h4", gC, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          w("div", fC, [
            p(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        q(w("h6", pC, null, 512), [
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
          q(w("h5", hC, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: b(() => [
          w("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, mC)
        ], void 0, !0),
        _: 1
      }),
      (v(!0), T(xe, null, et(o.apiMtProviders, (c) => (v(), M(r, {
        key: c,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(c)
      }, {
        header: b(() => [
          w("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: se(o.getMTProviderLabel(c))
          }, null, 8, _C)
        ]),
        default: b(() => [
          w("p", {
            innerHTML: o.proposedTranslations[c]
          }, null, 8, vC)
        ], void 0, !0),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      p(r, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (c) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: b(() => [
          q(w("h5", yC, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: b(() => [
          bC
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  })) : ae("", !0);
}
const wC = /* @__PURE__ */ V(lC, [["render", SC]]);
const CC = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: He, MwCol: Ne },
  setup() {
    const e = Se(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = ye(e), i = y(() => s.value.title), r = y(
      () => {
        var f;
        return ((f = n.value) == null ? void 0 : f.title) || i.value;
      }
    ), l = y(
      () => je.getPageUrl(a.value, i.value)
    ), d = y(
      () => {
        var f;
        return !!((f = n.value) != null && f.translatedTitle);
      }
    ), c = y(
      () => d.value ? "translated" : "selected"
    ), u = y(() => {
      const f = [t];
      return o.value && f.push(`${t}--${c.value}`), f;
    });
    return {
      mwIconLinkExternal: Qo,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: r,
      titleClasses: u
    };
  }
}, xC = ["href"], EC = ["textContent"], AC = ["innerHTML"];
function kC(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col");
  return v(), M(r, {
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
        }, null, 8, EC),
        p(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, xC),
      w("h2", {
        class: fe(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, AC)
    ], void 0),
    _: 1
  });
}
const TC = /* @__PURE__ */ V(CC, [["render", kC]]);
const DC = {
  name: "ProposedTranslationActionButtons",
  components: {
    MwRow: Ae,
    MwButton: Te
  },
  emits: ["select-previous-segment", "apply-translation", "skip-translation"],
  setup() {
    const {
      currentSourceSection: e,
      proposedTranslation: t,
      isSectionTitleSelected: n
    } = ye(Se());
    return {
      isLastTranslationUnit: y(
        () => e.value.isSelectedTranslationUnitLast
      ),
      isSectionTitleSelected: n,
      mwIconPrevious: Js,
      mwIconArrowForward: xn,
      proposedTranslation: t
    };
  }
};
function LC(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return v(), M(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
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
const Wu = /* @__PURE__ */ V(DC, [["render", LC]]);
const PC = {
  name: "ProposedTranslationHeader",
  components: {
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te
  },
  emits: ["configure-options"],
  setup() {
    const e = Se(), t = y(
      () => e.state.application.currentMTProvider
    ), n = kt(), o = y(() => ({
      [Ve.ORIGINAL_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Ve.EMPTY_TEXT_PROVIDER_KEY]: n.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), s = y(
      () => o.value[t.value] || n.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Ve.getMTProviderLabel(t.value)
      )
    );
    return {
      mwIconEllipsis: Zs,
      mtOptionLabel: s
    };
  }
};
function NC(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row");
  return v(), M(i, { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
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
const FC = /* @__PURE__ */ V(PC, [["render", NC]]), MC = {
  name: "RetryMtCard",
  components: { MwButton: Te, MwIcon: He, MwGrid: kc, MwCol: Ne, MwRow: Ae },
  emits: ["configure-options", "retry-translation"],
  setup() {
    return {
      mwIconAlert: fo,
      mwIconRefresh: Nc,
      mwIconMenu: lh
    };
  }
}, OC = { class: "mt-retry-body" };
function BC(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("mw-button"), c = Ee("i18n");
  return v(), T("div", OC, [
    p(l, { class: "retry-body__action-buttons" }, {
      default: b(() => [
        p(r, { cols: "12" }, {
          default: b(() => [
            p(i, { icon: o.mwIconAlert }, null, 8, ["icon"]),
            q(w("span", null, null, 512), [
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
const IC = /* @__PURE__ */ V(MC, [["render", BC]]);
const $C = {
  name: "ProposedTranslationCard",
  components: {
    RetryMtCard: IC,
    MwSpinner: Yn,
    MwCard: zt,
    ProposedTranslationHeader: FC,
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te,
    ProposedTranslationActionButtons: Wu
  },
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup() {
    const e = ne(0), t = ne(null), n = ne(null), o = Se(), {
      currentMTProvider: s,
      targetLanguage: a,
      proposedTranslation: i,
      currentSourceSection: r
    } = ye(o), l = y(
      () => {
        var g;
        return (g = o.state.application.mtRequestsPending) == null ? void 0 : g.includes(
          r.value.selectedTranslationUnitId
        );
      }
    ), d = y(() => ({
      "max-height": `calc(100% - ${e.value}px)`
    })), c = y(
      () => !!i.value || s.value === Ve.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      e.value = t.value.$el.clientHeight + n.value.$el.clientHeight;
    };
    return Ke(s, u), lt(() => K(this, null, function* () {
      yield Ko(), u();
    })), {
      footer: n,
      getDir: Pe.getDir,
      header: t,
      mwIconEllipsis: Zs,
      mwIconEdit: Zt,
      proposedTranslation: i,
      hasProposedTranslation: c,
      targetLanguage: a,
      contentsStyle: d,
      mtRequestPending: l
    };
  }
}, UC = ["lang", "dir", "innerHTML"];
function RC(e, t, n, o, s, a) {
  const i = _("proposed-translation-header"), r = _("mw-spinner"), l = _("retry-mt-card"), d = _("mw-col"), c = _("mw-button"), u = _("proposed-translation-action-buttons"), g = _("mw-row"), f = _("mw-card");
  return v(), M(f, { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
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
            class: fe(["sx-sentence-selector__proposed-translation__contents px-5", {
              "sx-sentence-selector__proposed-translation__contents--empty": !o.hasProposedTranslation
            }]),
            style: ot(o.contentsStyle)
          }, {
            default: b(() => [
              o.hasProposedTranslation ? (v(), T("section", {
                key: 0,
                lang: o.targetLanguage,
                dir: o.getDir(o.targetLanguage),
                innerHTML: o.proposedTranslation
              }, null, 8, UC)) : o.mtRequestPending ? (v(), M(r, { key: 1 })) : (v(), M(l, {
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
              o.hasProposedTranslation || o.mtRequestPending ? (v(), M(c, {
                key: 0,
                icon: o.mwIconEdit,
                type: "text",
                label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                progressive: "",
                disabled: !o.hasProposedTranslation,
                onClick: t[3] || (t[3] = (m) => e.$emit("edit-translation", o.proposedTranslation))
              }, null, 8, ["icon", "label", "disabled"])) : ae("", !0),
              p(u, ti(Ks(e.$attrs)), null, 16)
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
const VC = /* @__PURE__ */ V($C, [["render", RC]]), zC = (e) => y(() => {
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
const jC = {
  name: "SubSection",
  props: {
    subSection: {
      type: Et,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = ne(null), o = zC(e.subSection);
    lt(() => {
      n.value.addEventListener("click", (r) => {
        let l;
        if (e.subSection.isBlockTemplate)
          l = e.subSection;
        else {
          const d = r.composedPath().find((c) => c.classList.contains("cx-segment"));
          if (!d)
            return;
          l = e.subSection.getSentenceById(
            d.dataset.segmentid
          );
        }
        a(l);
      });
    });
    const s = Se(), a = (r) => {
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
}, HC = ["innerHTML"];
function qC(e, t, n, o, s, a) {
  return v(), T("div", {
    ref: "subSectionRoot",
    class: fe(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, HC);
}
const GC = /* @__PURE__ */ V(jC, [["render", qC]]);
const KC = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: Rc,
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
    const t = y(() => ({ "--size": e.size })), n = y(
      () => !e.isTemplateAdapted || e.percentage === 0 ? fo : vn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
};
function WC(e, t, n, o, s, a) {
  const i = _("mw-circle-progress-bar"), r = _("mw-icon");
  return v(), T("div", {
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
const Xu = /* @__PURE__ */ V(KC, [["render", WC]]), XC = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: Ne,
    MwRow: Ae,
    MwButton: Te,
    MwIcon: He,
    MwRadioGroup: Uc,
    MwRadio: Ns,
    MwDivider: Zo,
    MwDialog: En,
    MwCircleProgressBar: Rc,
    BlockTemplateStatusIndicator: Xu
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
    const { targetLanguageAutonym: t } = ye(Se()), n = y(
      () => !e.isTemplateAdapted || o.value === 0 ? fo : vn
    ), o = y(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = kt(), a = y(() => {
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
          icon: ch,
          color: xt.base30
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Nt,
          color: xt.base30
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: vn,
          color: xt.primary
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
          icon: vn,
          color: xt.primary
        });
      }
      return e.mandatoryMissingParamsCount ? l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: Zt,
        color: xt.base30
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Tc,
        color: xt.base30
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: vn,
      mwIconInfo: Dc,
      notes: r
    };
  }
}, YC = { class: "pa-4" }, JC = ["textContent"], ZC = ["textContent"];
function QC(e, t, n, o, s, a) {
  const i = _("block-template-status-indicator"), r = _("mw-icon"), l = _("mw-col"), d = _("mw-row"), c = _("mw-dialog");
  return v(), M(c, {
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
              n.targetTemplateExists ? (v(), M(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (v(), M(r, {
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
      w("div", YC, [
        w("h3", {
          textContent: se(o.statusText)
        }, null, 8, JC),
        w("p", {
          class: "mt-6 text-small",
          textContent: se(o.statusExplanation)
        }, null, 8, ZC),
        (v(!0), T(xe, null, et(o.notes, (u, g) => (v(), M(d, {
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
  }, 8, ["value", "title", "overlay-opacity", "overlay-color"]);
}
const ex = /* @__PURE__ */ V(XC, [["render", QC]]);
const tx = {
  name: "BlockTemplateAdaptationCard",
  components: {
    SxBlockTemplateStatusDialog: ex,
    MwSpinner: Yn,
    MwIcon: He,
    MwCard: zt,
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te,
    ProposedTranslationActionButtons: Wu,
    BlockTemplateStatusIndicator: Xu
  },
  emits: ["edit-translation"],
  setup() {
    const e = Se(), {
      selectedContentTranslationUnit: t,
      targetLanguageAutonym: n,
      currentMTProvider: o,
      proposedTranslation: s
    } = ye(e), a = y(() => {
      var W;
      return ((W = t.value) == null ? void 0 : W.blockTemplateTranslatedContent) || s.value;
    }), i = y(
      () => {
        var X;
        return (X = t.value) == null ? void 0 : X.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), r = y(
      () => {
        var X;
        return !((X = e.state.application.mtRequestsPending) != null && X.includes(
          t.value.id
        ));
      }
    ), l = y(
      // Strip HTML comments and return
      () => {
        var X, W;
        return (W = (X = t.value) == null ? void 0 : X.sourceBlockTemplateName) == null ? void 0 : W.replace(
          /<\!--.*?-->/g,
          ""
        );
      }
    ), d = y(
      () => {
        var X;
        return (X = t.value.blockTemplateAdaptationInfo) == null ? void 0 : X[o.value];
      }
    ), c = y(
      () => {
        var X, W;
        return ((X = d.value) == null ? void 0 : X.adapted) || ((W = d.value) == null ? void 0 : W.partial) || !1;
      }
    ), u = y(() => d.value ? "block-template-adaptation-card__body--" + (c.value ? "success" : "warning") : null), g = kt(), f = y(() => d.value ? c.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), m = y(
      () => {
        var X;
        return Object.keys(((X = t.value) == null ? void 0 : X.sourceTemplateParams) || {}).length;
      }
    ), C = y(() => {
      var W;
      const X = (W = t.value) == null ? void 0 : W.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(X || {});
    }), x = y(() => C.value.length), A = y(() => {
      const X = J.value;
      return m.value + X === 0 ? 100 : x.value / (m.value + X) * 100 || 0;
    }), L = ne(!1), R = () => {
      L.value = !0;
    }, O = (X) => X.filter((W) => !C.value.includes(W)), J = y(() => {
      var W;
      const X = ((W = d.value) == null ? void 0 : W.mandatoryTargetParams) || [];
      return O(X).length;
    }), we = y(() => {
      var W;
      const X = ((W = d.value) == null ? void 0 : W.optionalTargetParams) || [];
      return O(X).length;
    });
    return {
      adaptationRatio: A,
      adaptedTemplateCardClass: u,
      blockEditableContent: a,
      editBlockTranslationButtonLabel: f,
      isTemplateAdapted: c,
      mandatoryMissingTargetParamsCount: J,
      mwIconInfo: Dc,
      mwIconPuzzle: rh,
      optionalMissingTargetParamsCount: we,
      showTemplateStatus: R,
      sourceParamsCount: m,
      sourceTemplateName: l,
      targetLanguageAutonym: n,
      targetParamsCount: x,
      targetTemplateName: i,
      templateStatusDialogOn: L,
      translationLoaded: r
    };
  }
}, nx = { class: "block-template-adaptation-card__container pa-4" }, ox = ["textContent"], sx = ["textContent"], ax = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
};
function ix(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("block-template-status-indicator"), c = _("mw-button"), u = _("mw-spinner"), g = _("proposed-translation-action-buttons"), f = _("sx-block-template-status-dialog"), m = _("mw-card"), C = Ee("i18n");
  return v(), M(m, { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
    default: b(() => [
      w("div", nx, [
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
              tag: "h5",
              textContent: se(o.sourceTemplateName)
            }, null, 8, ["textContent"])
          ], void 0, !0),
          _: 1
        }),
        o.targetTemplateName ? (v(), T("div", {
          key: 0,
          class: fe(["pa-4 mb-4", o.adaptedTemplateCardClass])
        }, [
          p(l, {
            class: "block-template-adaptation-card__body__header ma-0 pb-1",
            align: "start"
          }, {
            default: b(() => [
              q(p(r, { tag: "h5" }, null, 512), [
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
          }, null, 8, ox),
          p(c, {
            class: "px-0",
            type: "text",
            progressive: "",
            onClick: t[0] || (t[0] = (x) => e.$emit("edit-translation", o.blockEditableContent))
          }, {
            default: b(() => [
              w("span", {
                textContent: se(o.editBlockTranslationButtonLabel)
              }, null, 8, sx)
            ], void 0, !0),
            _: 1
          })
        ], 2)) : o.translationLoaded ? (v(), T("div", ax, [
          p(l, {
            class: "block-template-adaptation-card__body__header pb-0 mb-0",
            align: "start"
          }, {
            default: b(() => [
              q(p(r, { tag: "h5" }, null, 512), [
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
        ])) : (v(), M(u, { key: 2 }))
      ]),
      p(g, ti(Ks(e.$attrs)), null, 16),
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
const rx = /* @__PURE__ */ V(tx, [["render", ix]]);
const lx = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: Jo },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = ye(Se()), o = kt();
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
}, cx = { class: "translated-segment-card-header" };
function ux(e, t, n, o, s, a) {
  const i = _("mw-button-group");
  return v(), T("div", cx, [
    p(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const dx = /* @__PURE__ */ V(lx, [["render", ux]]), gx = {
  name: "TranslatedSegmentCardActionButtons",
  components: {
    MwRow: Ae,
    MwButton: Te
  },
  emits: ["select-previous-segment", "skip-translation"],
  setup() {
    const { currentSourceSection: e, isSectionTitleSelected: t } = ye(Se()), n = y(
      () => e.value.isSelectedTranslationUnitLast
    );
    return {
      mwIconArrowForward: xn,
      mwIconPrevious: Js,
      isLastTranslationUnit: n,
      isSectionTitleSelected: t
    };
  }
};
function fx(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row");
  return v(), M(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
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
const px = /* @__PURE__ */ V(gx, [["render", fx]]);
const hx = {
  name: "TranslatedSegmentCard",
  components: {
    TranslatedSegmentCardActionButtons: px,
    MwProgressBar: $h,
    MwIcon: He,
    TranslatedSegmentCardHeader: dx,
    MwCard: zt,
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te
  },
  emits: ["edit-translation"],
  setup() {
    const e = ne("sentence"), {
      isSectionTitleSelected: t,
      currentSourceSection: n,
      selectedContentTranslationUnit: o,
      targetLanguage: s
    } = ye(Se()), a = y(() => e.value === "sentence"), i = y(
      () => n.value.subSections.find(
        (A) => A.sentences.some(
          (L) => L.id === o.value.id
        )
      )
    ), r = y(
      () => a.value ? o.value.mtProposedTranslationUsed : i.value.proposedContentForMTValidation
    ), l = Ze("colors"), d = l.base80, c = l.red50, u = y(() => t.value ? n.value.translatedTitle : a.value ? o.value.translatedContent : i.value.translatedContent), g = y(
      () => Gn.calculateScore(
        u.value,
        r.value,
        s.value
      )
    ), f = y(
      () => Gn.getScoreStatus(g.value)
    ), m = y(
      () => `translated-segment-card__modification-stats__percentage--${f.value}`
    ), C = y(() => ({
      failure: g.value === 0 ? null : l.yellow30,
      warning: l.yellow30,
      success: l.green30
    })), x = y(
      () => C.value[f.value]
    );
    return {
      errorColor: c,
      modificationPercentageClass: m,
      mtScore: g,
      mwIconEdit: Zt,
      mwIconEllipsis: Zs,
      mwIconRobot: $c,
      mwIconUserAvatar: Zp,
      progressBarBackgroundColor: d,
      scopeSelection: e,
      showSentenceTab: a,
      translation: u,
      userIconColor: x
    };
  }
};
function mx(e, t, n, o, s, a) {
  const i = _("translated-segment-card-header"), r = _("mw-col"), l = _("mw-icon"), d = _("mw-progress-bar"), c = _("mw-row"), u = _("mw-button"), g = _("translated-segment-card-action-buttons"), f = _("mw-card"), m = Ee("i18n"), C = Ee("i18n-html");
  return v(), M(f, { class: "translated-segment-card col shrink pa-0 mb-0" }, {
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
                      q(w("h5", null, null, 512), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                      ]),
                      o.mtScore === 0 ? q((v(), T("p", {
                        key: 0,
                        style: ot({ color: o.errorColor })
                      }, null, 4)), [
                        [m, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                      ]) : q((v(), T("p", {
                        key: 1,
                        class: fe(o.modificationPercentageClass)
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
              o.showSentenceTab ? (v(), M(u, {
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
              p(g, ti(Ks(e.$attrs)), null, 16)
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
const _x = /* @__PURE__ */ V(hx, [["render", mx]]);
const vx = {
  name: "SxSentenceSelector",
  components: {
    SxConfirmBackNavigationDialog: rC,
    BlockTemplateAdaptationCard: rx,
    TranslatedSegmentCard: _x,
    ProposedTranslationCard: VC,
    SubSection: GC,
    SxSentenceSelectorContentHeader: TC,
    MwRow: Ae,
    MwCol: Ne,
    SxTranslationSelector: wC,
    MwButton: Te
  },
  setup() {
    const e = ne(!1), t = ne(!1), n = ne("100%"), o = Se(), {
      currentSourcePage: s,
      currentTargetPage: a,
      currentSourceSection: i,
      selectedContentTranslationUnit: r,
      currentMTProvider: l,
      sourceLanguage: d,
      targetLanguage: c
    } = ye(o), u = y(
      () => {
        var le;
        return (le = i.value) == null ? void 0 : le.isSelectedTranslationUnitTranslated;
      }
    ), g = y(() => {
      var le;
      return (le = i.value) == null ? void 0 : le.subSections;
    }), f = y(
      () => {
        var le;
        return (le = i.value) == null ? void 0 : le.selectedTranslationUnitOriginalContent;
      }
    ), m = y(
      () => isNaN(n.value) ? n.value : `${n.value}px`
    ), C = nn();
    lt(() => K(this, null, function* () {
      const le = o.getters["application/getCurrentPage"], { currentTranslation: Me } = o.state.application;
      Me && !Me.restored && tn.fetchTranslationUnits(Me.id).then((qe) => {
        le.restoreCorporaDraft(qe), Me.restored = !0;
      }), yield o.dispatch("application/initializeMTProviders"), r.value || o.dispatch("application/selectTranslationUnitById", 0), n.value = window.innerHeight;
    }));
    const x = () => o.dispatch("application/selectNextTranslationUnit"), A = () => o.dispatch("application/selectPreviousTranslationUnit"), L = () => {
      C({
        event_type: "editor_segment_add",
        translation_source_language: d.value,
        translation_target_language: c.value
      }), o.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
    }, R = () => {
      t.value = !0, setTimeout(() => {
        t.value = !1;
      }, 100);
    }, O = bt(), J = () => {
      const { autoSavePending: le } = o.state.application;
      if (le) {
        G.value = !0;
        return;
      }
      we();
    }, we = () => {
      o.dispatch("translator/fetchTranslations"), vo(null), o.dispatch("application/clearPendingSaveTranslationRequests"), O.push({ name: "dashboard" }), i.value.reset();
    }, X = () => {
      Be.value || (e.value = !0, o.dispatch(
        "application/translateSelectedTranslationUnitForAllProviders"
      ));
    }, W = (le, Me) => {
      var qe;
      O.push({
        name: "sx-editor",
        state: {
          content: le,
          originalContent: f.value,
          title: ((qe = a.value) == null ? void 0 : qe.title) || s.value.title,
          isInitialEdit: Me || null
        }
      });
    }, be = () => O.push({ name: "sx-publisher" }), ue = () => K(this, null, function* () {
      r.value ? yield o.dispatch("application/translateTranslationUnitById", {
        id: r.value.id,
        provider: l.value
      }) : yield o.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: l.value
      });
    });
    Ke(r, () => {
      if (!r.value)
        return;
      const le = r.value.id, Me = Be.value ? document.getElementById(le) : document.querySelector(`[data-segmentid='${le}']`);
      Array.from(Me.getClientRects()).every(
        // use "elementFromPoint" method to get the topmost element
        // at the coordinates of the border box of each line.
        // If the line of the segment is inside the viewport and not
        // hidden by another element (e.g. the proposed translation card),
        // the returned element should match the "segment" element.
        // Note that we only check for the top-left corner of the rectangle, so
        // if a small portion of a line is hidden, the line is still considered
        // to be visible.
        (Ue) => document.elementFromPoint(Ue.x, Ue.y) === Me
      ) || Me.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    });
    const Be = y(
      () => r.value instanceof Et
    ), G = ne(!1);
    return {
      applyTranslation: L,
      bounceTranslation: R,
      configureTranslationOptions: X,
      currentPageSection: i,
      doGoToDashboard: we,
      editTranslation: W,
      getDir: Pe.getDir,
      goToDashboard: J,
      isBlockTemplateSelected: Be,
      isSelectedTranslationUnitTranslated: u,
      isTranslationOptionsActive: e,
      mwIconArrowPrevious: wi,
      previewTranslation: be,
      retryTranslation: ue,
      selectPreviousTranslationUnit: A,
      sentenceSelectorStyle: m,
      shouldProposedTranslationBounce: t,
      skipTranslation: x,
      sourceLanguage: d,
      subSections: g,
      verifyBackNavigationDialogOn: G
    };
  }
}, yx = { class: "sx-sentence-selector__header-title" }, bx = { class: "sx-sentence-selector__section-contents px-4" };
function Sx(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = _("sx-sentence-selector-content-header"), c = _("sub-section"), u = _("translated-segment-card"), g = _("proposed-translation-card"), f = _("block-template-adaptation-card"), m = _("sx-translation-selector"), C = _("sx-confirm-back-navigation-dialog"), x = Ee("i18n");
  return v(), T("section", {
    class: "sx-sentence-selector fill-height column ma-0 no-wrap",
    style: ot(o.sentenceSelectorStyle)
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
            q(w("h4", yx, null, 512), [
              [x, void 0, "cx-sx-sentence-selector-header-title"]
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
              disabled: !o.currentPageSection.isTranslated,
              onClick: o.previewTranslation
            }, null, 8, ["label", "disabled", "onClick"])
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }),
    p(l, {
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
            w("div", bx, [
              (v(!0), T(xe, null, et(o.subSections, (A) => (v(), M(c, {
                id: A.id,
                key: `sub-section-${A.id}`,
                "sub-section": A,
                onBounceTranslation: o.bounceTranslation
              }, null, 8, ["id", "sub-section", "onBounceTranslation"]))), 128))
            ])
          ], void 0, !0),
          _: 1
        }, 8, ["dir", "lang"]),
        !o.isBlockTemplateSelected && o.isSelectedTranslationUnitTranslated ? (v(), M(u, {
          key: 0,
          onEditTranslation: t[0] || (t[0] = (A) => o.editTranslation(A, !1)),
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : o.isBlockTemplateSelected ? (v(), M(f, {
          key: 2,
          onEditTranslation: o.editTranslation,
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit
        }, null, 8, ["onEditTranslation", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment"])) : (v(), M(g, {
          key: 1,
          class: fe({ "mb-0": !o.shouldProposedTranslationBounce }),
          onConfigureOptions: o.configureTranslationOptions,
          onEditTranslation: t[1] || (t[1] = (A) => o.editTranslation(A, !0)),
          onApplyTranslation: o.applyTranslation,
          onSkipTranslation: o.skipTranslation,
          onSelectPreviousSegment: o.selectPreviousTranslationUnit,
          onRetryTranslation: o.retryTranslation
        }, null, 8, ["class", "onConfigureOptions", "onApplyTranslation", "onSkipTranslation", "onSelectPreviousSegment", "onRetryTranslation"]))
      ], void 0),
      _: 1
    }),
    p(m, {
      active: o.isTranslationOptionsActive,
      "onUpdate:active": t[2] || (t[2] = (A) => o.isTranslationOptionsActive = A)
    }, null, 8, ["active"]),
    p(C, {
      modelValue: o.verifyBackNavigationDialogOn,
      "onUpdate:modelValue": t[3] || (t[3] = (A) => o.verifyBackNavigationDialogOn = A),
      onDiscardTranslation: o.doGoToDashboard
    }, null, 8, ["modelValue", "onDiscardTranslation"])
  ], 4);
}
const wx = /* @__PURE__ */ V(vx, [["render", Sx]]);
const Cx = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: wx
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function xx(e, t, n, o, s, a) {
  const i = _("sx-sentence-selector");
  return v(), T("main", {
    class: fe(["sx-sentence-selector-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const Ex = /* @__PURE__ */ V(Cx, [["render", xx]]), Ax = `<svg width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
`, kx = `<svg  width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
const Tx = {
  name: "SxQuickTutorial",
  components: {
    MwButton: Te,
    MwRow: Ae
  },
  data: () => ({
    mwIconArrowForward: xn,
    totalSteps: 2,
    activeStep: 1,
    tutorialSvgMT: Ax,
    tutorialSvgSections: kx
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
}, Dx = { class: "sx-quick-tutorial" }, Lx = { class: "sx-quick-tutorial__main-point py-9 px-6" }, Px = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, Nx = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, Fx = { class: "sx-quick-tutorial__illustration" }, Mx = ["innerHTML"], Ox = ["innerHTML"], Bx = { class: "sx-quick-tutorial__step-indicator py-3" }, Ix = ["onClick"], $x = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, Ux = {
  key: "secondary-point-1",
  class: "ma-0"
}, Rx = {
  key: "secondary-point-2",
  class: "ma-0"
}, Vx = { class: "sx-quick-tutorial__action-button pt-4 pb-6" };
function zx(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-row"), l = Ee("i18n");
  return v(), T("section", Dx, [
    p(r, {
      direction: "column",
      class: "sx-quick-tutorial__body-container ma-0"
    }, {
      default: b(() => [
        w("section", Lx, [
          p(_n, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? q((v(), T("h2", Px, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-1"]
              ]) : a.isActiveStep(2) ? q((v(), T("h2", Nx, null, 512)), [
                [l, void 0, "sx-quick-tutorial-main-point-step-2"]
              ]) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("section", Fx, [
          p(_n, { name: "mw-ui-animation-slide-left" }, {
            default: b(() => [
              a.isActiveStep(1) ? (v(), T("div", {
                key: "illustration-1",
                innerHTML: e.tutorialSvgSections
              }, null, 8, Mx)) : a.isActiveStep(2) ? (v(), T("div", {
                key: "illustration-2",
                innerHTML: e.tutorialSvgMT
              }, null, 8, Ox)) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("div", Bx, [
          (v(!0), T(xe, null, et(e.totalSteps, (d) => (v(), T("span", {
            key: `dot-${d}`,
            class: fe(["dot mx-1", { "dot-active": a.isActiveStep(d) }]),
            role: "button",
            onClick: (c) => e.activeStep = d
          }, null, 10, Ix))), 128))
        ]),
        w("section", $x, [
          p(_n, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? q((v(), T("h3", Ux, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-1"]
              ]) : a.isActiveStep(2) ? q((v(), T("h3", Rx, null, 512)), [
                [l, void 0, "sx-quick-tutorial-secondary-point-step-2"]
              ]) : ae("", !0)
            ], void 0, !0),
            _: 1
          })
        ]),
        w("div", Vx, [
          p(_n, {
            name: "fade",
            mode: "out-in"
          }, {
            default: b(() => [
              a.isActiveStep(1) ? (v(), M(i, {
                key: "quick-tutorial-action-button-1",
                class: "px-8 mx-4",
                icon: e.mwIconArrowForward,
                progressive: !0,
                onClick: a.goToNextStep
              }, null, 8, ["icon", "onClick"])) : a.isActiveStep(2) ? (v(), M(i, {
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
const jx = /* @__PURE__ */ V(Tx, [["render", zx]]);
const Hx = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: jx
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function qx(e, t, n, o, s, a) {
  const i = _("sx-quick-tutorial");
  return v(), T("main", {
    class: fe(["sx-quick-tutorial-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const Gx = /* @__PURE__ */ V(Hx, [["render", qx]]);
function Kx(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = je.getPageUrl(t, o.title), o.target = "_blank";
}
const Wx = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: Kh },
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
    const t = ne(null), n = ne(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return lt(() => {
      n.value = 2 * o(), Kx(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, Xx = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, Yx = { class: "sx-editor__original-content-panel__header mb-2" }, Jx = ["lang", "dir", "innerHTML"];
function Zx(e, t, n, o, s, a) {
  const i = _("mw-expandable-content"), r = Ee("i18n");
  return v(), T("section", Xx, [
    q(w("h5", Yx, null, 512), [
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
        }, null, 8, Jx)
      ], void 0),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const Qx = /* @__PURE__ */ V(Wx, [["render", Zx]]), e8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g id="happy-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
            <circle id="Oval" fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
            <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" id="Mask" fill="#3366CC"></path>
        </g>
    </g>
</svg>
`;
const t8 = {
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
    const { targetLanguage: t } = ye(Se()), n = y(
      () => Gn.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = y(() => {
      const a = Gn.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = y(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: e8,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, n8 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, o8 = { class: "sx-editor__feedback-overlay-content px-4" }, s8 = ["innerHTML"], a8 = { class: "sx-editor__feedback-overlay-content__title" }, i8 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function r8(e, t, n, o, s, a) {
  const i = Ee("i18n"), r = Ee("i18n-html");
  return n.showFeedback ? (v(), T("div", n8, [
    w("div", o8, [
      w("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, s8),
      q(w("h2", a8, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      q(w("p", i8, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      q(w("p", {
        class: fe(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [r, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : ae("", !0);
}
const l8 = /* @__PURE__ */ V(t8, [["render", r8]]);
const c8 = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: l8,
    MwRow: Ae,
    SxEditorOriginalContent: Qx,
    VisualEditor: Mv,
    MwSpinner: Yn
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = ne(!1), n = bt(), o = Se(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: r, content: l, originalContent: d, title: c } = history.state, u = ne(null), g = ne(!1), f = nn(), { targetLanguage: m, sourceLanguage: C } = ye(o), x = y(
      () => Gn.calculateScore(
        u.value,
        l,
        m.value
      )
    ), A = (L) => K(this, null, function* () {
      u.value = L, g.value = !0, yield new Promise((R) => setTimeout(R, 2e3)), g.value = !1, i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        L
      ) : (x.value === 0 && r && f({
        event_type: "editor_segment_add",
        translation_source_language: C.value,
        translation_target_language: m.value
      }), o.dispatch(
        "application/applyEditedTranslationToSelectedTranslationUnit",
        L
      )), a();
    });
    return {
      closeEditor: a,
      content: l,
      editedTranslation: u,
      editorReady: t,
      getDir: Pe.getDir,
      sourceLanguage: C,
      targetLanguage: m,
      onEditorReady: s,
      onEditCompleted: A,
      originalContent: d,
      showFeedback: g,
      title: c
    };
  }
}, u8 = { class: "sx-editor__editing-surface-container grow" };
function d8(e, t, n, o, s, a) {
  const i = _("sx-editor-original-content"), r = _("mw-spinner"), l = _("edit-complete-feedback"), d = _("visual-editor"), c = _("mw-row");
  return v(), M(c, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: b(() => [
      o.originalContent ? (v(), M(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : ae("", !0),
      o.editorReady ? ae("", !0) : (v(), M(r, { key: 1 })),
      w("div", u8, [
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
const g8 = /* @__PURE__ */ V(c8, [["render", d8]]);
const f8 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: g8
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
function p8(e, t, n, o, s, a) {
  const i = _("sx-editor");
  return v(), T("main", {
    class: fe(["sx-editor-view", a.classes])
  }, [
    p(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const h8 = /* @__PURE__ */ V(f8, [["render", p8]]);
const m8 = {
  name: "SxPublisherHeader",
  components: { MwCol: Ne, MwButton: Te, MwRow: Ae },
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup() {
    const e = bt();
    return {
      mwIconCheck: vn,
      mwIconClose: Nt,
      onClose: () => e.push({ name: "sx-sentence-selector" })
    };
  }
};
function _8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = Ee("i18n");
  return v(), M(l, { class: "ma-0 sx-publisher__header" }, {
    default: b(() => [
      p(r, { shrink: "" }, {
        default: b(() => [
          p(i, {
            icon: o.mwIconClose,
            type: "icon",
            outlined: !1,
            onClick: o.onClose
          }, null, 8, ["icon", "onClick"])
        ], void 0, !0),
        _: 1
      }),
      q(p(r, {
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
const v8 = /* @__PURE__ */ V(m8, [["render", _8]]), y8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, b8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
            <g id="🎨-Color/Green50-#00af89" mask="url(#mask-2)" fill="#00AF89" fill-rule="evenodd">
                <rect id="Rectangle-1" x="0" y="0" width="88" height="88"></rect>
            </g>
        </g>
    </g>
</svg>`, ll = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g id="publishing-failure" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" fill="#FEE7E6">
            <circle id="Oval" cx="68" cy="68" r="68"></circle>
        </g>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" id="Mask" fill="#DD3333"></path>
    </g>
</svg>`;
const S8 = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: En, MwRow: Ae, MwCol: Ne },
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
        svg: y8,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: b8,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: ll,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: ll,
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
}, w8 = ["innerHTML"], C8 = ["textContent"], x8 = ["textContent"];
function E8(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-row"), l = _("mw-dialog");
  return n.active ? (v(), M(l, {
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
              }, null, 8, w8),
              w("h2", {
                textContent: se(a.animationTitle)
              }, null, 8, C8),
              w("p", {
                class: "ma-0",
                textContent: se(a.animationSubtitle)
              }, null, 8, x8)
            ], void 0, !0),
            _: 1
          })
        ], void 0, !0),
        _: 1
      })
    ], void 0),
    _: 1
  }, 8, ["overlay-opacity"])) : ae("", !0);
}
const A8 = /* @__PURE__ */ V(S8, [["render", E8]]);
const k8 = {
  name: "SxPublisherCaptchaDialog",
  components: { MwInput: Ei, MwDialog: En, MwRow: Ae, MwCol: Ne, MwButton: Te, MwDivider: Zo },
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: lu,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = ne(""), o = () => t("close"), s = () => t("publish", n.value), a = Ze("breakpoints"), i = y(() => a.value.mobile);
    return {
      captchaInput: n,
      close: o,
      fullscreen: i,
      mwIconCheck: vn,
      mwIconClose: Nt,
      publish: s
    };
  }
}, T8 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, D8 = ["src"], L8 = ["textContent"], P8 = /* @__PURE__ */ w("p", { class: "mt-0" }, null, -1);
function N8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = _("mw-divider"), c = _("mw-input"), u = _("mw-dialog"), g = Ee("i18n");
  return n.active && n.captchaDetails ? (v(), M(u, {
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
          q(p(r, {
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
              q(p(i, {
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
      w("div", T8, [
        n.captchaDetails.type === "image" ? (v(), T("img", {
          key: 0,
          class: "sx-publisher__captcha-dialog__puzzle-image",
          src: n.captchaDetails.url
        }, null, 8, D8)) : (v(), T("p", {
          key: 1,
          textContent: se(n.captchaDetails.question)
        }, null, 8, L8)),
        P8,
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
  }, 8, ["overlay-opacity", "fullscreen"])) : ae("", !0);
}
const F8 = /* @__PURE__ */ V(k8, [["render", N8]]);
const M8 = {
  name: "SxPublishOptionSelector",
  components: {
    MwButton: Te,
    MwRadioGroup: Uc,
    MwRadio: Ns,
    MwDivider: Zo,
    MwDialog: En
  },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = Se(), o = y(
      () => n.state.application.publishTarget
    ), s = y(() => n.state.translator.isAnon), a = kt(), { currentSourceSection: i } = ye(n), r = y(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-label") : a.i18n("cx-sx-publisher-new-section-option-label")
    ), l = y(
      () => i.value.isLeadSection ? a.i18n("cx-sx-publisher-lead-section-option-details") : a.i18n("cx-sx-publisher-new-section-option-details")
    ), d = y(() => [
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
      mwIconArrowPrevious: wi,
      onPublishOptionsClose: u,
      publishOptions: d,
      selectedOption: o,
      updateOption: (f) => {
        const m = f.target.value;
        n.commit("application/setPublishTarget", m), u();
      }
    };
  }
}, O8 = { class: "mw-ui-dialog__header" }, B8 = { class: "row ma-0 pa-4" }, I8 = { class: "col shrink justify-center" }, $8 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, U8 = { class: "mb-0" }, R8 = { class: "pa-4" }, V8 = ["textContent"];
function z8(e, t, n, o, s, a) {
  const i = _("mw-button"), r = _("mw-divider"), l = _("mw-radio"), d = _("mw-radio-group"), c = _("mw-dialog"), u = Ee("i18n");
  return v(), M(c, {
    value: n.active,
    class: "sx-publisher__publish-options",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.base10,
    onInput: t[0] || (t[0] = (g) => e.$emit("update:active", g)),
    onClose: o.onPublishOptionsClose
  }, {
    header: b(() => [
      w("div", O8, [
        w("div", B8, [
          w("div", I8, [
            p(i, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconArrowPrevious,
              onClick: o.onPublishOptionsClose
            }, null, 8, ["icon", "onClick"])
          ]),
          w("div", $8, [
            q(w("h4", U8, null, 512), [
              [u, void 0, "cx-sx-publisher-preview-options-title"]
            ])
          ])
        ]),
        p(r)
      ])
    ]),
    default: b(() => [
      w("div", R8, [
        p(d, {
          value: o.selectedOption,
          name: "publish-options",
          onInput: o.updateOption
        }, {
          default: b(() => [
            (v(!0), T(xe, null, et(o.publishOptions, (g, f) => (v(), T(xe, {
              key: g.label
            }, [
              p(l, {
                class: "pa-0 my-1",
                label: g.label,
                "input-value": g.value,
                disabled: g.disabled
              }, null, 8, ["label", "input-value", "disabled"]),
              w("p", {
                class: fe(["complementary ms-7 mt-0", o.getMarginBottomClassByOptionIndex(f)]),
                textContent: se(g.details)
              }, null, 10, V8)
            ], 64))), 128))
          ], void 0, !0),
          _: 1
        }, 8, ["value", "onInput"])
      ])
    ], void 0),
    _: 1
  }, 8, ["value", "title", "overlay-opacity", "overlay-color", "onClose"]);
}
const j8 = /* @__PURE__ */ V(M8, [["render", z8]]);
const H8 = {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton: Te,
    MwCol: Ne,
    MwRow: Ae,
    MwMessage: Sh,
    MwIcon: He
  },
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = ne(0), n = ne(null);
    Ke(n, () => {
      var C;
      const m = (C = n.value) == null ? void 0 : C.$el;
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
          return fo;
        case "error":
          return Fr;
        default:
          return qa;
      }
    }), i = y(() => s.value === "default"), r = y(
      () => i.value ? "notice" : s.value
    ), l = y(
      () => `sx-publisher__review-info--${r.value}`
    ), d = kt(), c = y(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.text;
    }), u = y(
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
      mwIconArrowForward: xn,
      mwIconBlock: Fr,
      mwIconEye: qa,
      mwIconPrevious: Js,
      reviewIcon: a,
      reviewInfoClass: l,
      status: s
    };
  }
}, q8 = { class: "sx-publisher__review-info__content" }, G8 = {
  key: 0,
  class: "complementary ma-0"
}, K8 = ["textContent"], W8 = ["textContent"];
function X8(e, t, n, o, s, a) {
  const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = _("mw-message"), u = Ee("i18n-html");
  return v(), M(c, {
    type: o.messageType,
    class: fe(["sx-publisher__review-info ma-0 pa-4", o.reviewInfoClass]),
    inline: o.isMessageInline
  }, {
    icon: b(() => [
      p(i, {
        icon: o.reviewIcon,
        class: "col shrink mw-ui-message__icon pe-3 items-start"
      }, null, 8, ["icon"])
    ]),
    default: b(() => [
      w("div", q8, [
        o.status === "default" ? q((v(), T("p", G8, null, 512)), [
          [u, void 0, "cx-sx-publisher-review-info"]
        ]) : (v(), T(xe, { key: 1 }, [
          w("h5", {
            textContent: se(o.messageTitle)
          }, null, 8, K8),
          w("p", {
            textContent: se(o.messageText)
          }, null, 8, W8),
          p(d, {
            justify: "between",
            class: "ma-0"
          }, {
            default: b(() => [
              q(p(r, {
                ref: "learnMoreContainer",
                class: "sx-publisher__review-info__learn-more-anchor"
              }, null, 512), [
                [u, void 0, "cx-sx-publisher-review-info-learn-more"]
              ]),
              n.publishFeedbackMessages.length > 1 ? (v(), M(r, {
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
const Y8 = /* @__PURE__ */ V(H8, [["render", X8]]), cl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t.innerText;
}, J8 = (e, t, n, o) => K(void 0, null, function* () {
  if (n.value) {
    t.value = !1;
    return;
  }
  const {
    currentSourceSection: s,
    sourceLanguage: a,
    targetLanguage: i,
    currentSourcePage: r
  } = ye(e), l = e.getters["application/getTargetPageTitleForPublishing"], d = e.getters["application/isSandboxTarget"];
  if (s.value.isLeadSection && !d)
    try {
      yield ea.addWikibaseLink(
        a.value,
        i.value,
        r.value.title,
        l
      );
    } catch (c) {
      mw.log.error("Error while adding wikibase link", c);
    }
  if (!o) {
    const c = "[CX] Target title is empty after successful publishing";
    throw mw.log.error(c), new Error(c);
  }
  location.href = ru(decodeURIComponent(o), {
    "sx-published-section": cl(s.value.title),
    "sx-source-page-title": cl(r.value.title),
    "sx-source-language": a.value,
    "sx-target-language": i.value
  });
}), Z8 = (e) => {
  const t = ne(!1), n = ne("pending"), o = ne(!1), s = ne(!1), a = ne(null), i = ne([]), r = y(
    () => i.value.some((u) => u.isError)
  );
  return Ke(o, (u) => {
    u || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (u = null) => K(void 0, null, function* () {
      var m;
      n.value = "pending", t.value = !0;
      const { publishFeedbackMessage: g, targetTitle: f } = yield e.dispatch(
        "translator/publishTranslation",
        { captchaId: (m = a.value) == null ? void 0 : m.id, captchaAnswer: u }
      );
      if (g && g.type === "captcha") {
        a.value = g.details, t.value = !1, s.value = !0;
        return;
      } else
        g && (i.value.push(g), i.value.sort((C, x) => +x.isError - +C.isError));
      a.value = null, n.value = r.value ? "failure" : "success", setTimeout(
        () => J8(
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
}, Q8 = (e, t) => {
  const {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = ye(e), a = y(
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
const eE = {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo: Y8,
    SxPublishOptionSelector: j8,
    SxPublisherAnimationDialog: A8,
    SxPublisherCaptchaDialog: F8,
    MwButton: Te,
    SxPublisherHeader: v8,
    MwRow: Ae,
    MwCol: Ne
  },
  setup() {
    const e = Se(), { currentSourceSection: t } = ye(e), n = y(() => {
      var x;
      return (x = t.value) == null ? void 0 : x.title;
    }), o = kt(), s = y(() => e.getters["application/isSandboxTarget"] ? o.i18n(
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
    } = Z8(e);
    lt(() => K(this, null, function* () {
      const x = yield e.dispatch("translator/validateMT");
      x && f.value.push(x);
    }));
    const { editTranslation: C } = Q8(e, bt());
    return {
      captchaDetails: a,
      captchaDialogOn: i,
      configureTranslationOptions: r,
      currentPageSection: t,
      doPublish: l,
      editTranslation: C,
      isPublishDialogActive: d,
      isPublishingDisabled: c,
      mwIconEdit: Zt,
      mwIconSettings: ih,
      onCaptchaDialogClose: u,
      panelResult: s,
      publishFeedbackMessages: f,
      publishOptionsOn: g,
      publishStatus: m,
      translatedTitle: n
    };
  }
}, tE = { class: "sx-publisher" }, nE = { class: "sx-publisher__publish-panel pa-4" }, oE = { class: "mb-2" }, sE = ["innerHTML"], aE = { class: "sx-publisher__section-preview pa-5" }, iE = ["innerHTML"];
function rE(e, t, n, o, s, a) {
  const i = _("sx-publisher-header"), r = _("mw-button"), l = _("mw-col"), d = _("mw-row"), c = _("sx-publisher-review-info"), u = _("sx-publish-option-selector"), g = _("sx-publisher-captcha-dialog"), f = _("sx-publisher-animation-dialog"), m = Ee("i18n");
  return v(), T("section", tE, [
    p(i, {
      "is-publishing-disabled": o.isPublishingDisabled,
      onPublishTranslation: o.doPublish
    }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
    w("div", nE, [
      q(w("h5", oE, null, 512), [
        [m, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
      ]),
      w("h6", {
        class: "mb-2",
        innerHTML: o.panelResult
      }, null, 8, sE),
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
    w("section", aE, [
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
      }, null, 8, iE)
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
const lE = /* @__PURE__ */ V(eE, [["render", rE]]);
const cE = {
  name: "SxPublisherView",
  components: {
    SxPublisher: lE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
};
function uE(e, t, n, o, s, a) {
  const i = _("sx-publisher");
  return v(), T("main", {
    class: fe(["sx-publisher-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const dE = /* @__PURE__ */ V(cE, [["render", uE]]);
const gE = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Ai, MwIcon: He, MwRow: Ae, MwCol: Ne },
  props: {
    suggestion: {
      type: _o,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: th, mwIconLanguage: Bc, mwIconArticle: xi, getDir: Pe.getDir };
  }
}, fE = ["textContent"], pE = ["textContent"], hE = ["textContent"];
function mE(e, t, n, o, s, a) {
  const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-icon"), d = _("mw-row");
  return v(), M(d, {
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
                  }, null, 8, fE)
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
                  }, null, 8, pE)
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
                  }, null, 8, hE)
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
const Yu = /* @__PURE__ */ V(gE, [["render", mE]]), _E = (e, t) => {
  const o = ne([]), s = ne(!1), a = y(
    () => o.value.slice(0, 4)
  ), i = Ni(() => K(void 0, null, function* () {
    try {
      o.value = yield es.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return Ke(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const vE = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: Yu, MwCard: zt, MwSpinner: Yn },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = ye(
      Se()
    ), o = y(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = _E(
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
}, yE = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function bE(e, t, n, o, s, a) {
  const i = _("mw-spinner"), r = _("sx-search-article-suggestion"), l = _("mw-card"), d = Ee("i18n");
  return v(), M(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: b(() => [
      o.searchResultsLoading ? (v(), M(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? q((v(), T("p", yE, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : ae("", !0),
      (v(!0), T(xe, null, et(o.searchResultsSlice, (c) => (v(), M(r, {
        key: c.pageid,
        suggestion: c,
        onClick: (u) => e.$emit("suggestion-clicked", c)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const SE = /* @__PURE__ */ V(vE, [["render", bE]]);
const wE = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: Yu, MwCard: zt },
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
  computed: wt({}, Am({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, CE = ["textContent"];
function xE(e, t, n, o, s, a) {
  const i = _("sx-search-article-suggestion"), r = _("mw-card");
  return v(), M(r, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: b(() => [
      w("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: se(n.cardTitle)
      }, null, 8, CE)
    ]),
    default: b(() => [
      (v(!0), T(xe, null, et(n.suggestions, (l) => (v(), M(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ], void 0),
    _: 1
  });
}
const EE = /* @__PURE__ */ V(wE, [["render", xE]]), AE = (e, t) => y(() => {
  const o = {
    value: "other",
    props: {
      icon: Zs,
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
}), kE = (e, t, n) => y(() => {
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
}), TE = (e, t) => {
  const n = Hu.bind(
    null,
    e,
    t
  );
  return {
    startRecentlyEditedSectionTranslation: (i) => n(
      i.title,
      "sx-article-search",
      "suggestion_recent_edit"
    ),
    startNearbySectionTranslation: (i) => n(
      i.title,
      "sx-article-search",
      "suggestion_nearby"
    ),
    startSearchResultSectionTranslation: (i) => n(
      i.title,
      "sx-article-search",
      "search_result"
    )
  };
};
const DE = {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard: EE,
    SearchResultsCard: SE,
    MwInput: Ei,
    MwDialog: En,
    MwLanguageSelector: Uu,
    MwButtonGroup: Jo,
    MwRow: Ae,
    MwCol: Ne,
    MwButton: Te
  },
  setup() {
    const e = ne(""), t = ne(!1), n = ne(null), o = ne(!1), s = ne([]), a = Se(), { sourceLanguage: i, targetLanguage: r } = ye(a), { supportedLanguageCodes: l } = os(), d = kE(
      i,
      r,
      s
    ), c = AE(
      i,
      d
    ), u = bt();
    lt(() => K(this, null, function* () {
      var ue;
      yield Iu(), a.state.translator.translations.length || a.dispatch("translator/fetchTranslations");
      try {
        s.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (Be) {
      }
      (ue = n.value) == null || ue.focus();
    }));
    const g = () => {
      u.push({ name: "dashboard" });
    }, f = Ui(a), m = (ue) => f(ue, r.value), C = (ue) => {
      if (ue === "other") {
        o.value = !0;
        return;
      }
      m(ue);
    };
    Ke(i, () => a.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const x = nn();
    Ke(e, () => {
      t.value || (t.value = !0, x({
        event_type: "dashboard_search",
        translation_source_language: i.value,
        translation_target_language: r.value
      }));
    });
    const A = () => {
      o.value = !1;
    }, L = (ue) => {
      o.value = !1, s.value.push(ue), C(ue);
    }, R = y(
      () => a.getters["mediawiki/getRecentlyEditedPages"]
    ), O = y(
      () => a.getters["mediawiki/getNearbyPages"]
    ), J = Ze("breakpoints"), we = y(() => J.tabletAndDown), {
      startRecentlyEditedSectionTranslation: X,
      startNearbySectionTranslation: W,
      startSearchResultSectionTranslation: be
    } = TE(u, a);
    return {
      supportedLanguageCodes: l,
      close: g,
      fullscreen: we,
      mwIconClose: Nt,
      mwIconSearch: Fc,
      nearbyPages: O,
      onSourceLanguageDialogClose: A,
      onSourceLanguageSelected: L,
      recentlyEditedPages: R,
      searchInput: e,
      searchInputRef: n,
      sourceLanguage: i,
      sourceLanguageOptions: c,
      sourceLanguageSelectOn: o,
      startNearbySectionTranslation: W,
      startRecentlyEditedSectionTranslation: X,
      startSearchResultSectionTranslation: be,
      suggestedSourceLanguages: d,
      updateSelection: C
    };
  }
}, LE = { class: "sx-article-search" }, PE = { class: "mb-0" }, NE = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
};
function FE(e, t, n, o, s, a) {
  const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-input"), c = _("mw-button-group"), u = _("article-suggestions-card"), g = _("search-results-card"), f = _("mw-language-selector"), m = _("mw-dialog"), C = Ee("i18n");
  return v(), T("section", LE, [
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
            q(w("h5", PE, null, 512), [
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
    o.searchInput ? ae("", !0) : (v(), T(xe, { key: 0 }, [
      o.recentlyEditedPages && o.recentlyEditedPages.length ? (v(), M(u, {
        key: 0,
        "card-title": e.$i18n("cx-sx-article-search-recently-edited-title"),
        suggestions: o.recentlyEditedPages,
        onSuggestionClicked: o.startRecentlyEditedSectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : o.nearbyPages && o.nearbyPages.length ? (v(), M(u, {
        key: 1,
        "card-title": e.$i18n("cx-sx-article-search-nearby-title"),
        suggestions: o.nearbyPages,
        onSuggestionClicked: o.startNearbySectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : q((v(), T("p", NE, null, 512)), [
        [C, void 0, "cx-sx-article-search-no-suggestions-message"]
      ])
    ], 64)),
    q(p(g, {
      "search-input": o.searchInput,
      onSuggestionClicked: o.startSearchResultSectionTranslation
    }, null, 8, ["search-input", "onSuggestionClicked"]), [
      [Si, !!o.searchInput]
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
const ME = /* @__PURE__ */ V(DE, [["render", FE]]);
const OE = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: ME
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
};
function BE(e, t, n, o, s, a) {
  const i = _("sx-article-search");
  return v(), T("main", {
    class: fe(["sx-article-search-view", a.classes])
  }, [
    p(i)
  ], 2);
}
const IE = /* @__PURE__ */ V(OE, [["render", BE]]), Ju = [
  {
    path: "",
    name: "dashboard",
    component: rl,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: IE,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: yS,
    props: (e) => ({
      previousRoute: e.query.previousRoute,
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: cw,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: eC,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: Gx,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: Ex,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: h8,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: dE,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: rl,
    meta: { workflowStep: 0 }
  }
], zi = av({
  history: s1(),
  routes: Ju
});
zi.beforeEach((e, t, n) => {
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
    const i = Math.ceil(s) - 1, r = Ju.find(
      (l) => l.meta.workflowStep === i
    );
    n({ name: r.name });
    return;
  }
  n();
});
zi.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const $E = mw.config.get("wgUserLanguage"), UE = "en", RE = mw.messages.values || {}, kn = Ac(Nm);
kn.config.globalProperties.$incompleteVersion = !0;
const VE = $v();
kn.use(VE);
kn.use(zi);
kn.use(po);
kn.use(em);
kn.use(Qh);
const zE = lb({
  locale: $E,
  finalFallback: UE,
  messages: RE,
  wikilinks: !0
});
kn.use(zE);
kn.mount("#contenttranslation");
